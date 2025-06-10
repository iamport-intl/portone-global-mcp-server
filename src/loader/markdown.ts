import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

export interface Frontmatter {
  title?: string;
  description?: string;
  targetVersions?: string[];
  allFieldsDict: Record<string, any>;
  rawString: string;
}

export interface MarkdownDocument {
  path: string;
  content: string;
  frontmatter?: Frontmatter;
}

export interface ParsedMarkdown {
  content: string;
  frontmatter?: Frontmatter;
}

function parseFrontmatter(frontmatterText: string): Frontmatter {
  if (!frontmatterText) throw new Error('Frontmatter text cannot be empty');
  const data = yaml.load(frontmatterText) as Record<string, any>;
  if (!data) throw new Error('Parsed frontmatter data is None');
  const { title, description, targetVersions, ...rest } = data;
  return {
    title,
    description,
    targetVersions,
    allFieldsDict: data,
    rawString: frontmatterText,
  };
}

export function parseMarkdownContent(content: string): ParsedMarkdown {
  const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (frontmatterMatch) {
    const frontmatterText = frontmatterMatch[1];
    const contentText = frontmatterMatch[2];
    try {
      const frontmatter = parseFrontmatter(frontmatterText);
      return { content: contentText.trim(), frontmatter };
    } catch (e) {
      console.error('Error parsing frontmatter:', e);
      return { content };
    }
  }
  return { content };
}

async function walkResources(dir: string, relPath = ''): Promise<{ absPath: string; relPath: string }[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results: { absPath: string; relPath: string }[] = [];
  for (const entry of entries) {
    const entryAbsPath = path.join(dir, entry.name);
    const entryRelPath = relPath ? path.join(relPath, entry.name) : entry.name;
    if (entry.isDirectory()) {
      results.push(...(await walkResources(entryAbsPath, entryRelPath)));
    } else {
      results.push({ absPath: entryAbsPath, relPath: entryRelPath });
    }
  }
  return results;
}

export async function loadMarkdownDocs(
  docsDir: string,
  excludeFiles: string[] = ['v1-docs-full.md', 'v2-docs-full.md']
): Promise<Record<string, MarkdownDocument>> {
  const result: Record<string, MarkdownDocument> = {};
  const files = await walkResources(docsDir);
  for (const { absPath, relPath } of files) {
    if (
      excludeFiles.includes(path.basename(relPath)) ||
      !relPath.toLowerCase().endsWith('.md')
    ) {
      continue;
    }
    const content = await fs.readFile(absPath, 'utf-8');
    const parsed = parseMarkdownContent(content);
    result[relPath] = {
      path: relPath,
      content: parsed.content,
      frontmatter: parsed.frontmatter,
    };
  }
  return result;
}
