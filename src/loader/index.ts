import path from 'path';
import fs from 'fs/promises';
import { loadMarkdownDocs, MarkdownDocument } from './markdown.js';
import { loadSchema, Schema } from './schema.js';

export interface Documents {
  readme: string;
  markdownDocs: Record<string, MarkdownDocument>;
  schema: Schema;
}

export async function loadDocuments(docsDir: string): Promise<Documents> {
  // Load all markdown docs including README.md
  const markdownDocs = await loadMarkdownDocs(docsDir);
  // Find README.md in the docs and remove it from the dictionary.
  const readmeDoc = markdownDocs['README.md'] || markdownDocs['readme.md'];
  delete markdownDocs['README.md'];
  delete markdownDocs['readme.md'];
  if (!readmeDoc) {
    throw new Error(`README.md not found in ${docsDir}`);
  }
  // Load schema files
  const schemaDir = path.join(docsDir, 'schema');
  const schema = await loadSchema(schemaDir);
  return {
    readme: readmeDoc.content,
    markdownDocs,
    schema,
  };
}

export interface Resources {
  instructions: string;
  documents: Documents;
}

export async function loadResources(resourcesDir: string): Promise<Resources> {
  const instructionsPath = path.join(resourcesDir, 'instructions.md');
  const instructions = await fs.readFile(instructionsPath, 'utf-8');
  const documents = await loadDocuments(path.join(resourcesDir, 'docs'));
  return {
    instructions,
    documents,
  };
}
