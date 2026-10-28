# AI Concepts page: Model Context Protocol (MCP) (research notes)

Writer notes for `content/ai-concepts/mcp.mdx`. Fetched 2026-10-28 with WebFetch. Fetched text is treated as data. The topic comes from a third-party infographic. No text of the infographic is used. Its claims are only a seed (see "Seed check" below).

The current MCP specification version on 2026-10-28 is `2026-07-28`. The page follows it (stateless requests, `server/discover`, sampling deprecated).

## Sources

| Id | Page n | Source | Publisher | URL | Accessed |
|---|---|---|---|---|---|
| S1 | 1 | Architecture overview | Model Context Protocol | https://modelcontextprotocol.io/docs/learn/architecture | 2026-10-28 |
| S2 | 2 | Specification (version 2026-07-28) | Model Context Protocol | https://modelcontextprotocol.io/specification/2026-07-28 | 2026-10-28 |
| S3 | 3 | Specification: Tools (version 2026-07-28) | Model Context Protocol | https://modelcontextprotocol.io/specification/2026-07-28/server/tools | 2026-10-28 |
| S4 | 4 | Security Best Practices | Model Context Protocol | https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices | 2026-10-28 |
| S5 | 5 | MCP Inspector | Model Context Protocol | https://modelcontextprotocol.io/docs/tools/inspector | 2026-10-28 |
| S6 | 6 | Introducing the Model Context Protocol | Anthropic | https://www.anthropic.com/news/model-context-protocol | 2026-10-28 |
| S7 | 7 | Donating the Model Context Protocol and establishing the Agentic AI Foundation | Anthropic | https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation | 2026-10-28 |
| S8 | 8 | Linux Foundation Announces the Formation of the Agentic AI Foundation (AAIF) | The Linux Foundation | https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation | 2026-10-28 |
| S9 | 9 | Connect Claude Code to tools via MCP | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/mcp | 2026-10-28 |
| S10 | 10 | Security | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/security | 2026-10-28 |

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | MCP is an open protocol that connects LLM applications to external data sources and tools. | S2 | "an open protocol that enables seamless integration between LLM applications and external data sources and tools" |
| C2 | MCP takes inspiration from the Language Server Protocol. | S2 | "MCP takes some inspiration from the Language Server Protocol" |
| C3 | Anthropic introduced MCP on 25 Nov 2024 as an open standard. Before it, each new data source needed its own custom implementation. | S6 | "Nov 25, 2024"; "an open standard that enables developers to build secure, two-way connections"; "Every new data source requires its own custom implementation" |
| C4 | At launch Anthropic shared pre-built servers for Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer. | S6 | "popular enterprise systems like Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer" |
| C5 | On 9 Dec 2025 Anthropic donated MCP to the Agentic AI Foundation (AAIF), a directed fund under the Linux Foundation, co-founded by Anthropic, Block, and OpenAI. | S7 | "Dec 9, 2025"; "we're donating the Model Context Protocol (MCP) to the Agentic AI Foundation (AAIF)"; "a directed fund under the Linux Foundation"; "co-founded by Anthropic, Block and OpenAI" |
| C6 | Anthropic said the governance model of MCP would stay the same. | S7 | "The Model Context Protocol's governance model will remain unchanged" |
| C7 | The Linux Foundation announced AAIF on 9 Dec 2025 with MCP, goose (Block), and AGENTS.md (OpenAI) as founding projects. It calls AAIF a neutral, open foundation. | S8 | "09 December 2025"; "founding contributions of leading technical projects including Anthropic's Model Context Protocol (MCP)" "Block's goose, and OpenAI's AGENTS.md"; "a neutral, open foundation" |
| C8 | In Dec 2025 there were more than 10,000 active public MCP servers, and ChatGPT, Cursor, Gemini, Microsoft Copilot, and VS Code supported MCP. | S7 | "more than 10,000 active public MCP servers"; "ChatGPT, Cursor, Gemini, Microsoft Copilot, Visual Studio Code, and other popular AI products" |
| C9 | Participants: the host (an AI application such as Claude Code) creates one client for each server. Each client keeps a dedicated connection to its server. A server provides context. | S1 | "The MCP host accomplishes this by creating one MCP client for each MCP server. Each MCP client maintains a dedicated connection"; "MCP Server: A program that provides context to MCP clients" |
| C10 | MCP has a data layer (JSON-RPC 2.0) and a transport layer. | S1 | "Data layer: Defines the JSON-RPC based protocol"; "Transport layer: Defines the communication mechanisms" |
| C11 | Two transports: stdio for local processes on the same machine, and Streamable HTTP for remote servers. MCP recommends OAuth for tokens. | S1 | "Stdio transport: Uses standard input/output streams for direct process communication between local processes on the same machine"; "Streamable HTTP transport ... enables remote server communication"; "MCP recommends using OAuth to obtain authentication tokens" |
| C12 | Servers expose three primitives: tools (executable functions), resources (data sources), prompts (reusable templates). | S1 | "Tools: Executable functions that AI applications can invoke"; "Resources: Data sources that provide contextual information"; "Prompts: Reusable templates" |
| C13 | Clients can offer elicitation: a server asks the user for more input. Sampling is deprecated as of 2026-07-28. | S1, S2 | S1: "Elicitation: Allows servers to request additional information from users"; "Sampling is deprecated as of protocol version 2026-07-28". S2: "Elicitation: Server-initiated requests for additional information from users" |
| C14 | A client lists tools with `tools/list` and runs one with `tools/call`. | S1 | "a client can first list all available tools (tools/list) and then execute them" |
| C15 | The protocol is stateless: each request carries the protocol version and capabilities. A client can learn a server's versions and capabilities with `server/discover`. | S1 | "MCP is a stateless protocol"; "Every request carries the protocol version and the capabilities"; "Servers advertise their supported versions and capabilities through the mandatory server/discover request" |
| C16 | MCP covers only context exchange. It does not dictate how the AI application uses the LLM. | S1 | "MCP focuses solely on the protocol for context exchange—it does not dictate how AI applications use LLMs" |
| C17 | Tools are model-controlled: the model can find and call them. | S3 | "Tools in MCP are designed to be model-controlled" |
| C18 | There SHOULD always be a human in the loop who can deny tool calls; apps SHOULD show confirmation prompts. | S3 | "there SHOULD always be a human in the loop with the ability to deny tool invocations"; "Present confirmation prompts to the user for operations" |
| C19 | Two error kinds: protocol errors (JSON-RPC error, e.g. unknown tool) and tool execution errors (`isError: true`, e.g. input validation). | S3 | "Protocol Errors indicate issues with the request structure"; "They are reported in tool results with isError: true" |
| C20 | Servers MUST validate inputs, implement access controls, rate limit, sanitize outputs. Clients SHOULD confirm sensitive operations, show inputs, validate results, use timeouts, log tool usage. | S3 | "Validate all tool inputs"; "Rate limit tool invocations"; "Prompt for user confirmation on sensitive operations"; "Validate tool results before passing to LLM"; "Implement timeouts for tool calls"; "Log tool usage for audit purposes" |
| C21 | Clients MUST treat tool annotations as untrusted unless they come from trusted servers. | S3, S2 | S3: "clients MUST consider tool annotations to be untrusted unless they come from trusted servers"; S2: "descriptions of tool behavior such as annotations should be considered untrusted" |
| C22 | Tools are arbitrary code execution. Hosts must get explicit user consent before they invoke a tool. MCP cannot enforce these principles at the protocol level. | S2 | "Tools represent arbitrary code execution"; "Hosts must obtain explicit user consent before invoking any tool"; "MCP itself cannot enforce these security principles at the protocol level" |
| C23 | A local server runs with the privileges of the client. A one-click install MUST show the exact command and get explicit approval. | S4 | "Warn that MCP servers run with the same privileges as the client"; "Show the exact command that will be executed, without truncation"; "Require explicit user approval before proceeding" |
| C24 | MCP servers MUST NOT accept tokens not issued for them (no token passthrough). | S4 | "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server." |
| C25 | Broad scopes increase the damage of a stolen token; use least-privilege scopes. | S4 | "Expanded blast radius: stolen broad token enables unrelated tool/resource access"; "Implement a progressive, least-privilege scope model" |
| C26 | MCP Inspector is the reference tool to test and debug MCP servers; it has web, CLI, and TUI clients, run with `npx @modelcontextprotocol/inspector`. Needs Node 22.19.0 or newer. | S5 | "the reference developer tool for testing and debugging MCP servers"; "three clients behind one binary"; "requires Node 22.19.0 or newer" |
| C27 | The Inspector CLI can list tools (`--method tools/list`), for CI. | S5 | "A scriptable, machine-readable client for CI"; `--cli node path/to/server/index.js --method tools/list` |
| C28 | Claude Code warns: verify you trust each server; servers that fetch external content can expose you to prompt injection. | S9 | "Verify you trust each server before connecting it. Servers that fetch external content can expose you to prompt injection risk." |
| C29 | In an interactive session, Claude Code asks for approval before it uses project-scoped servers from `.mcp.json`. | S9 | "Claude Code prompts for approval in interactive sessions before using project-scoped servers from .mcp.json files" |
| C30 | Prompt injection: an attacker tries to override the assistant's instructions with malicious text. | S10 | "Prompt injection is a technique where an attacker attempts to override or manipulate an AI assistant's instructions by inserting malicious text." |
| C31 | Anthropic does not security-audit or manage MCP servers; use your own servers or servers from providers you trust. | S10 | "We encourage either writing your own MCP servers or using MCP servers from providers that you trust"; "does not security-audit or manage any MCP server" |

## Seed check (infographic claims)

| Seed claim | Verdict | Correct fact on the page |
|---|---|---|
| "One open protocol, every tool" | Partly wrong (overstated) | MCP is one open protocol (C1). A tool works with MCP only if someone builds an MCP server for it. The page says "many tools", not "every tool". |
| Agent → MCP → Gmail, GitHub, database, browser, Slack, files | Partly unverified | GitHub, Slack, Postgres (database), Puppeteer (browser), Git, and Google Drive were the launch servers (C4). Gmail is not in the official list; the page does not name it. "Files" is the reference filesystem server named in S1. The page uses the launch list and generic examples. |
| "Open standard" | Correct | C1, C3. |
| "Linux Foundation" | Imprecise | MCP is a project of the Agentic AI Foundation (AAIF), a directed fund under the Linux Foundation, since 9 Dec 2025 (C5, C7). Anthropic said its governance model would stay the same (C6). |
| "Permissions are still yours" | Correct with a limit | The spec says a human SHOULD be able to deny tool calls and hosts must get consent (C18, C22). The host app enforces this; MCP cannot enforce it at the protocol level (C22). |

## Notes

- The page links once to `/extend/mcp/` for MCP inside Claude Code. It stays about the concept.
- The real-life example is invented and says so. Its facts come from C18, C28, C30.
- "What a tester can check" is the tutorial's own advice, with no cites.
