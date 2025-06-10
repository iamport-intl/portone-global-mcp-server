import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

export interface SchemaFile {
  path: string;
  content: string;
  fileType: string;
}

export interface Schema {
  openapiV1Json: SchemaFile | null;
  openapiV1Yml: any | null;
  openapiV2Json: SchemaFile | null;
  openapiV2Yml: any | null;
  browserSdkV2Yml: any | null;
  graphqlV2: SchemaFile | null;
}

export async function loadSchema(schemaDir: string): Promise<Schema> {
  const emptyFile: SchemaFile = { path: '', content: '', fileType: '' };
  const schema: Schema = {
    openapiV1Json: null,
    openapiV1Yml: null,
    openapiV2Json: null,
    openapiV2Yml: null,
    browserSdkV2Yml: null,
    graphqlV2: null,
  };
  try {
    const entries = await fs.readdir(schemaDir, { withFileTypes: true });
    const fileMap: Record<string, keyof Schema> = {
      'v1.openapi.json': 'openapiV1Json',
      'v1.openapi.yml': 'openapiV1Yml',
      'v2.openapi.json': 'openapiV2Json',
      'v2.openapi.yml': 'openapiV2Yml',
      'browser-sdk.yml': 'browserSdkV2Yml',
      'v2.graphql': 'graphqlV2',
    };
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const relPath = entry.name;
      const fileType = relPath.split('.').pop() || 'unknown';
      const absPath = path.join(schemaDir, relPath);
      const content = await fs.readFile(absPath, 'utf-8');
      if (fileType === 'yml' || fileType === 'yaml') {
        const parsed = yaml.load(content);
        if (fileMap[relPath]) {
          (schema as any)[fileMap[relPath]] = parsed;
        }
      } else {
        const schemaFile: SchemaFile = { path: relPath, content, fileType };
        if (fileMap[relPath]) {
          (schema as any)[fileMap[relPath]] = schemaFile;
        }
      }
    }
  } catch (e) {
    console.error(`Error loading schema directory '${schemaDir}':`, e);
  }
  return schema;
}
