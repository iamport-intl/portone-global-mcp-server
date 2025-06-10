import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { readOpenApiSchemas } from "./tools/read_openapi_schema.js";
import { getDocsFolderKeywordPathMapping } from "./tools/list_portone_docs.js";

// Create server instance
const server = new McpServer({
    name: "portone-global-mcp-server",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});

async function main() {

    server.tool(
        "read_openapi_schema",
        "Read OpenAPI schema for the PortOne Global APIs",
        { apis: z.array(z.enum(["payment", "refund", "subscription", "payout", "masterMerchant"])) },
        async ({ apis }: { apis: string[] }) => {
            const openapiString = readOpenApiSchemas({
                payment: apis.includes("payment"),
                refund: apis.includes("refund"),
                subscription: apis.includes("subscription"),
                payout: apis.includes("payout"),
                masterMerchant: apis.includes("masterMerchant"),
            });
            return {
                content: [
                    {
                        type: "text",
                        text: openapiString,
                    },
                ],
            };
        }
    );
    
    server.tool(
        "list_portone_docs_folders",
        "List docs for the PortOne Global documentation",
        {},
        async () => {
            const mapping = getDocsFolderKeywordPathMapping();
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(mapping, null, 2),
                    },
                ],
            };
        }
    );

    const transport = new StdioServerTransport();
    console.error("PortOne Global MCP Server running on stdio");
    await server.connect(transport);
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
