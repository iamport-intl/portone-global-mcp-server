// Returns a mapping of keywords (subfolder names) to their folder paths for every immediate subfolder in src/resources/docs
import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Returns a mapping of keywords (subfolder names) to their folder paths for every immediate subfolder in src/resources/docs.
 * Does not recurse into subfolders.
 * @returns {Record<string, string>} Mapping of keyword to folder path
 */
export function getDocsFolderKeywordPathMapping(): Record<string, string> {
  const docsDir = path.join(__dirname, '../resources/docs');
  const entries = fs.readdirSync(docsDir, { withFileTypes: true });
  const mapping: Record<string, string> = {};

  for (const entry of entries) {
    if (entry.isDirectory()) {
      mapping[entry.name] = path.join(docsDir, entry.name);
    }
  }

  return mapping;
}
