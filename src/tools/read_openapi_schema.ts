import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Reads OpenAPI schema files based on the provided flags and returns their concatenated string content.
 * @param opts Object with boolean flags for each API type.
 * @returns Concatenated string content of all selected OpenAPI files.
 */
export function readOpenApiSchemas(opts: {
  payment?: boolean;
  refund?: boolean;
  subscription?: boolean;
  payout?: boolean;
  masterMerchant?: boolean;
}): string {
  // Resolve relative to the compiled file (build/tools/read_openapi_schema.js)
  const baseDir = path.resolve(__dirname, '../resources/openapi');
  const apiFiles: Record<string, string> = {
    payment: 'payment_openapispec.yaml',
    refund: 'refund_openapispec.yaml',
    subscription: 'subscription_openapispec.yaml',
    payout: 'payout_openapispec.yaml',
    masterMerchant: 'mastermerchant_openapispec.yaml',
  };

  let result = '';

  for (const [key, filename] of Object.entries(apiFiles)) {
    if ((opts as any)[key]) {
      const filePath = path.join(baseDir, filename);
      try {
        result += fs.readFileSync(filePath, 'utf-8') + '\n';
      } catch (err) {
        throw new Error(`Failed to read OpenAPI file for ${key}: ${err}`);
      }
    }
  }

  return result.trim();
}
