import path from 'path';
import { Resources } from '../loader/index.js';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Reads the content of a documentation file or directory by its relative or absolute path.
 * If a directory is given, returns the concatenated content of all markdown files under that directory.
 * @param resources The loaded Resources object
 * @param docPath Path relative to the docs root (e.g., 'getting-started/introduction.md') or absolute path
 * @returns The string content of the documentation file(s)
 */
export async function readPortoneDoc(resources: Resources, docPath: string): Promise<string> {
  const resourcesDir = path.resolve(__dirname, '../resources');
  const docsRoot = path.join(resourcesDir, 'docs');

  // Normalize the path: if absolute, make it relative to docs root
  let relPath = docPath;
  if (path.isAbsolute(docPath)) {
    relPath = path.relative(docsRoot, docPath);
  }
  relPath = relPath.replace(/^\/+/, ''); // Remove leading slashes

  // Special case: instructions.md
  if (relPath === 'instructions.md') {
    return resources.instructions;
  }

  // Special case: README.md
  if (relPath.toLowerCase() === 'readme.md') {
    return resources.documents.readme;
  }

  // If the path is a directory or does not end with .md, concatenate all markdown files under that directory
  if (!relPath.endsWith('.md')) {
    // Ensure trailing slash for directory matching
    const dirPrefix = relPath.endsWith('/') ? relPath : relPath + '/';
    const matchingDocs = Object.entries(resources.documents.markdownDocs)
      .filter(([key]) => key.startsWith(dirPrefix))
      .sort(([a], [b]) => a.localeCompare(b));
    if (matchingDocs.length > 0) {
      return matchingDocs
        .map(([key, doc]) => `# ${key}\n\n${doc.content}`)
        .join('\n\n---\n\n');
    }
    // If no files found, also try README.md or index.md in that directory
    const tryReadme = path.join(relPath, 'README.md');
    const tryReadmeLower = path.join(relPath, 'readme.md');
    const tryIndex = path.join(relPath, 'index.md');
    if (resources.documents.markdownDocs[tryReadme]) {
      return resources.documents.markdownDocs[tryReadme].content;
    }
    if (resources.documents.markdownDocs[tryReadmeLower]) {
      return resources.documents.markdownDocs[tryReadmeLower].content;
    }
    if (resources.documents.markdownDocs[tryIndex]) {
      return resources.documents.markdownDocs[tryIndex].content;
    }
  }

  // Look up in markdownDocs for a specific file
  const doc = resources.documents.markdownDocs[relPath];
  if (doc) {
    return doc.content;
  }

  throw new Error(`Documentation not found for path: ${docPath}`);
}
