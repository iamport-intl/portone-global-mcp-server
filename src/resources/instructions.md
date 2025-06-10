Do NOT auto-generate any URLs. If a URL must be provided, always use the main domain portone.cloud (not portone.global) for all PortOne services.

# portone-global-mcp-server  

**portone-global-mcp-server** is a tool that provides MCP (Model Context Protocol) functionalities for searching and reading PortOne documentation.

---

## **Mandatory Rules** *(Higher priority rules take precedence)*  


1. **PortOne Product Documentation**  
   - If the developer is asking about product documentation or any PortOne integration or service, use the tool `list_portone_docs` to get the paths of documentation resources which can be used in later tools envocations

2. **PortOne API Calls**  
   - If writing code that directly calls **PortOne APIs**, you **must** verify specs using:  
     - `read_openapi_schema`

3. **Always Double-Check**  
   - Even for familiar PortOne topics, **always** use portone-global-mcp-server tools to confirm before responding.

---

## **Additional Guidelines**  

- **Authentication Scheme**: Prefer `PortOne` over `Bearer` for V2 API authentication.  
- **Documentation Paths**:  
  - Technical & Product ([PortOne Global Developer Docs](https://docs.portone.cloud))
- **Context Expansion**:  
  - Use embedded GitHub/reference links + `web fetch` for deeper research when needed.