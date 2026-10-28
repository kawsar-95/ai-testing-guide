# AI Skills page: MCP Connectors (research notes)

Writer notes for `content/ai-skills/mcp-connectors.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | What is the Model Context Protocol (MCP)? | https://modelcontextprotocol.io/docs/getting-started/intro | 2026-10-28 |
| S2 | Architecture overview (MCP docs) | https://modelcontextprotocol.io/docs/learn/architecture | 2026-10-28 |
| S3 | Security Best Practices (MCP docs) | https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices | 2026-10-28 |
| S4 | Connect Claude Code to tools via MCP (Claude Code docs) | https://code.claude.com/docs/en/mcp | 2026-10-28 |
| S5 | Playwright MCP (GitHub, microsoft/playwright-mcp) | https://github.com/microsoft/playwright-mcp | 2026-10-28 |
| S6 | Glossary (Claude Platform docs) | https://platform.claude.com/docs/en/about-claude/glossary | 2026-10-28 |

Page cite numbers: n=k is Sk.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | MCP is an open-source standard to connect AI applications to external systems. | S1 | "MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems." |
| C2 | It connects to data sources, tools, and workflows. | S1 | "connect to data sources (e.g. local files, databases), tools (e.g. search engines, calculators) and workflows (e.g. specialized prompts)" |
| C3 | USB-C analogy. | S1 | "Think of MCP like a USB-C port for AI applications." |
| C4 | Supported by Claude, ChatGPT, VS Code, Cursor, and others. | S1 | "AI assistants like Claude and ChatGPT, development tools like Visual Studio Code, Cursor ... all support MCP" |
| C5 | Host creates one MCP client for each server; each client has a dedicated connection. | S2 | "The MCP host accomplishes this by creating one MCP client for each MCP server. Each MCP client maintains a dedicated connection with its corresponding MCP server." |
| C6 | Server: a program that provides context to clients. | S2 | "MCP Server: A program that provides context to MCP clients" |
| C7 | Data layer is JSON-RPC 2.0. | S2 | "The data layer implements a JSON-RPC 2.0 based exchange protocol" |
| C8 | Two transports: stdio (local processes on the same machine) and Streamable HTTP (remote; bearer tokens, API keys, custom headers; OAuth recommended). | S2 | "Stdio transport: Uses standard input/output streams for direct process communication between local processes on the same machine" / "This transport enables remote server communication and supports standard HTTP authentication methods including bearer tokens, API keys, and custom headers. MCP recommends using OAuth" |
| C9 | Server primitives: tools, resources, prompts. | S2 | "Tools: Executable functions ... Resources: Data sources ... Prompts: Reusable templates" |
| C10 | Clients discover with tools/list and run with tools/call. | S2 | "a client can first list all available tools (`tools/list`) and then execute them" / "execute a tool using the `tools/call` method" |
| C11 | Database example: tools to query, a resource with the schema, a prompt with examples. | S2 | "It can expose tools for querying the database, a resource that contains the schema of the database, and a prompt that includes few-shot examples" |
| C12 | Elicitation lets a server ask the user for more input or confirmation. | S2 | "Elicitation: Allows servers to request additional information from users." / "ask for confirmation of an action" |
| C13 | MCP Inspector is a development tool; reference server implementations exist. | S2 | "Tools for developing MCP servers and clients, including the MCP Inspector" / "MCP Reference Server Implementations" |
| C14 | Each tool has name, description, inputSchema (JSON Schema). | S2 | "inputSchema: A JSON Schema that defines the expected input parameters" |
| C15 | Local servers: arbitrary code execution with client privileges is a risk. | S3 | "Arbitrary code execution. Attackers can execute any command with MCP client privileges." |
| C16 | MCP servers run with the same privileges as the client (warning to show). | S3 | "Warn that MCP servers run with the same privileges as the client" |
| C17 | Least privilege scopes: start with a minimal scope set. | S3 | "Implement a progressive, least-privilege scope model" / "Minimal initial scope set" |
| C18 | Token passthrough: MCP servers must not accept tokens not issued for them. | S3 | "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server." |
| C19 | Verify trust; servers that fetch external content bring prompt injection risk. | S4 | "Verify you trust each server before connecting it. Servers that fetch external content can expose you to prompt injection risk." |
| C20 | `claude mcp add --transport http <name> <url>`; stdio form with `--env` and `--`. | S4 | "claude mcp add --transport http notion https://mcp.notion.com/mcp" / "claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable -- npx -y airtable-mcp-server" |
| C21 | Scopes local, project, user; project scope is stored in .mcp.json at the project root. | S4 | "Project-scoped servers enable team collaboration by storing configurations in a `.mcp.json` file at your project's root directory." |
| C22 | /mcp authenticates with OAuth servers and shows status. | S4 | "Use `/mcp` to authenticate with remote servers that require OAuth 2.0 authentication." |
| C23 | SSE transport is deprecated; use HTTP. | S4 | "The SSE (Server-Sent Events) transport is deprecated. Use HTTP servers instead, where available." |
| C24 | Playwright MCP: browser automation, structured data, no vision model; install command. | S5 | "provides browser automation capabilities using Playwright" / "No vision models needed, operates purely on structured data." / `claude mcp add playwright npx @playwright/mcp@latest` |
| C25 | MCP connector: connect to MCP servers from the Messages API without building an MCP client. | S6 | "The MCP connector is a feature that allows API users to connect to MCP servers directly from the Messages API without building an MCP client." |

## Not on the page

No list of vendor connectors by name beyond Playwright (vendor lists change often). No protocol version numbers.
