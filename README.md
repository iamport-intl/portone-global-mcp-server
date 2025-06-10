# PortOne Global MCP Server

PortOne Global MCP Server is a standalone Model Context Protocol (MCP) server for searching and reading PortOne documentation, including API schemas and product guides. It is designed to be run as a service and integrated with MCP-compatible agent frameworks or tools.

## Features
- Standalone MCP server for PortOne documentation
- Access OpenAPI schemas for PortOne APIs
- CLI usage and easy integration with MCP agent platforms

## Installation

```sh
npm install -g @portone-global/mcp-server
```

## Usage

### Start the MCP Server (CLI)

```json
{
  "mcpServers": {
    "portone-global-mcp-server": {
        "command": "node",
        "args": [
            "@portone-global/mcp-server"
        ]
    }
  }
}
```

This will start the PortOne Global MCP Server, which can then be connected to by any MCP-compatible agent or tool.

## Integration

- Add this package as a dependency or run it as a standalone service in your MCP agent infrastructure.
- The server exposes tools for reading PortOne documentation and OpenAPI schemas via the MCP protocol.

## Documentation

- [PortOne Developer Center](https://docs.portone.cloud)

## License

ISC 