# Fact-check: content/ai-concepts/mcp.mdx

Checked 2026-10-28 by an agent that did not write the page. All 10 sources were fetched fresh. The quotes of the research notes were not trusted.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | MCP is an open protocol that connects LLM applications to external data sources and tools | 2 | PASS | Spec 2026-07-28: "an open protocol that enables seamless integration between LLM applications and external data sources and tools" |
| 2 | Anthropic introduced MCP on 25 November 2024 as an open standard | 6 | PASS | Announcement dated "Nov 25, 2024"; "a universal, open standard for connecting AI systems with data sources" |
| 3 | Before MCP, each new data source needed its own custom implementation | 6 | PASS | "Every new data source requires its own custom implementation" |
| 4 | MCP takes some inspiration from the Language Server Protocol | 2 | PASS | "MCP takes some inspiration from the Language Server Protocol, which standardizes how to add support for programming languages across a whole ecosystem of development tools" |
| 5 | Launch servers: Google Drive, Slack, GitHub, Git, Postgres, Puppeteer | 6 | PASS | "pre-built MCP servers for popular enterprise systems like Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer" |
| 6 | By Dec 2025, ChatGPT, Cursor, Gemini, Microsoft Copilot, VS Code supported MCP; more than 10,000 active public servers | 7 | PASS | "ChatGPT, Cursor, Gemini, Microsoft Copilot, Visual Studio Code, and other popular AI products"; "more than 10,000 active public MCP servers" (post dated Dec 9, 2025) |
| 7 | On 9 Dec 2025 Anthropic donated MCP to the AAIF | 7 | PASS | Dated "Dec 9, 2025": "donating the Model Context Protocol (MCP) to the Agentic AI Foundation (AAIF)" |
| 8 | AAIF is a directed fund under the Linux Foundation, co-founded by Anthropic, Block, OpenAI | 7 | PASS | "a directed fund under the Linux Foundation, co-founded by Anthropic, Block and OpenAI" |
| 9 | The LF calls it a neutral, open foundation; first projects MCP, goose, AGENTS.md | 8 | PASS | LF release (Dec 9, 2025): "a neutral, open foundation"; founding contributions: Anthropic's MCP, Block's goose, OpenAI's AGENTS.md |
| 10 | Governance model of MCP | 7 | FAIL, fixed | Source: "governance model will remain unchanged" (a statement of intent). The page said "did not change". Fixed: "Anthropic said that the governance model of MCP would stay the same" (all 3 voices, notes C6). Now PASS. |
| 11 | A tool is arbitrary code; the host must get consent before it runs one | 2 | PASS | "Tools represent arbitrary code execution"; "Hosts must obtain explicit user consent before invoking any tool" |
| 12 | Three roles: host (e.g. Claude Code), one client per server with a dedicated connection, server provides context | 1 | PASS | "an MCP host — an AI application like Claude Code ... creating one MCP client for each MCP server. Each MCP client maintains a dedicated connection"; "MCP Server: A program that provides context to MCP clients" |
| 13 | Data layer uses JSON-RPC 2.0 | 1 | PASS | "The data layer implements a JSON-RPC 2.0 based exchange protocol" |
| 14 | Two transports: stdio (local processes, same machine), Streamable HTTP (remote); MCP recommends OAuth for tokens | 1 | PASS | "MCP supports two transport mechanisms"; stdio "between local processes on the same machine"; Streamable HTTP "enables remote server communication"; "MCP recommends using OAuth to obtain authentication tokens." |
| 15 | Three server primitives, with the database query / schema / few-shot examples | 1 | PASS | "tools for querying the database, a resource that contains the schema of the database, and a prompt that includes few-shot examples for interacting with the tools" |
| 16 | Elicitation: a server asks the user for more input | 2 | PASS | "Elicitation: Server-initiated requests for additional information from users" |
| 17 | Sampling is deprecated as of `2026-07-28` | 1 | PASS | "Sampling is deprecated as of protocol version `2026-07-28`." The spec's client feature list now has only Elicitation. |
| 18 | `tools/list`, then `tools/call` | 1 | PASS | "a client can first list all available tools (`tools/list`) and then execute them"; "execute a tool using the `tools/call` method" |
| 19 | Tools are model-controlled; the model picks the tool and arguments | 3 | PASS | "Tools in MCP are designed to be model-controlled"; message flow "LLM->>Client: Select tool to use". The `get_weather` / "New York" JSON matches the spec's `tools/call` example (id changed, harmless). |
| 20 | In `2026-07-28` the protocol is stateless; each request carries version and capabilities; `server/discover` | 1 | PASS | "MCP is a stateless protocol"; "Every request carries the protocol version and the capabilities ... in its `_meta` field"; "Servers advertise their supported versions and capabilities through the mandatory `server/discover` request". Spec [2] also lists "Stateless, self-contained requests". |
| 21 | MCP covers only context exchange, not how apps use the model | 1 | PASS | "MCP focuses solely on the protocol for context exchange—it does not dictate how AI applications use LLMs" |
| 22 | Build a connection once, not per pair | 6 | PASS | Developers "build against a standard protocol" instead of separate connectors for each source |
| 23 | Treat tool descriptions and annotations as untrusted unless the server is trusted | 2 | PASS | "descriptions of tool behavior such as annotations should be considered untrusted, unless obtained from a trusted server" |
| 24 | A local server runs with the client's privileges; one-click install must show the exact command and get approval | 4 | PASS | "Warn that MCP servers run with the same privileges as the client"; client "MUST: Show the exact command ... Require explicit user approval" |
| 25 | A server that fetches outside content can expose you to prompt injection | 9 | PASS | "Servers that fetch external content can expose you to prompt injection risk." |
| 26 | Prompt injection definition | 10 | PASS | "an attacker attempts to override or manipulate an AI assistant's instructions by inserting malicious text" |
| 27 | Broad-scope token gives a thief unrelated tools; use least-privilege scopes | 4 | PASS | "stolen broad token enables unrelated tool/resource access"; "Implement a progressive, least-privilege scope model" |
| 28 | Human SHOULD be able to deny; apps SHOULD show confirmation prompts | 3 | PASS | "there SHOULD always be a human in the loop with the ability to deny tool invocations"; "Present confirmation prompts to the user for operations" |
| 29 | MCP cannot enforce these at the protocol level | 2 | PASS | "MCP itself cannot enforce these security principles at the protocol level" |
| 30 | Claude Code asks for approval before using `.mcp.json` project servers | 9 | FAIL, fixed | Source: "prompts for approval in interactive sessions before using project-scoped servers from `.mcp.json` files" ([10] adds that a `-p` session shows no prompt). The page dropped "interactive". Fixed: "in an interactive session" added in all 3 voices and notes C29. Now PASS. |
| 31 | Anthropic does not security-audit or manage MCP servers; use your own or trusted providers | 10 | PASS | "encourage either writing your own MCP servers or using MCP servers from providers that you trust"; "does not security-audit or manage any MCP server" |
| 32 | Example: host shows tool inputs and asks to confirm | 3 | PASS | "Show tool inputs to the user before calling the server"; confirmation prompts for operations. Scenario is labelled "an invented example". |
| 33 | Token passthrough: a server must not accept a token not issued for it | 4 | PASS | "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server." |
| 34 | Clients must treat tool annotations as untrusted unless from trusted servers | 3 | PASS | "clients MUST consider tool annotations to be untrusted unless they come from trusted servers" |
| 35 | Unknown tool gives a JSON-RPC protocol error; bad input gives `isError: true` so the model can retry | 3 | PASS | Protocol errors: "Unknown tool"; tool execution errors incl. "Input validation errors" are "reported in tool results with `isError: true`" and let models "self-correct and retry" |
| 36 | Servers can also come from other scopes, connectors, and plugins | 10 | PASS | "Servers at other scopes and claude.ai connectors are configured outside the repository, and plugins can add servers too" |
| 37 | Inspector: reference tool; web, CLI for CI, terminal client; `npx @modelcontextprotocol/inspector`; Node 22.19.0+ | 5 | PASS | "the reference developer tool for testing and debugging MCP servers"; Web / CLI "for CI" / TUI "interactive terminal UI"; "requires Node 22.19.0 or newer" |
| 38 | CLI command `npx @modelcontextprotocol/inspector --cli node path/to/server/index.js --method tools/list` | 5 | PASS | Identical line in the Inspector quickstart: "# List a server's tools and exit" |
| 39 | Key words rows (MCP, Host, Client, Server, Tool, Resource, Prompt, transports, Inspector, Prompt injection, AAIF) | 1, 2, 5, 7, 10 | PASS | Same facts as rows 1, 7–9, 12–15, 26, 37 |

## Page checks

| Check | Verdict |
|---|---|
| Every source 1–10 is cited at least once; every cite number has a source | PASS |
| Source URLs open and are official or primary (modelcontextprotocol.io, anthropic.com, linuxfoundation.org, code.claude.com) | PASS |
| "Tutorial advice" tips have no `<Cite>` | PASS |
| The invented scenario says it is an example | PASS ("This scenario is an invented example.") The host/client diagram is an illustration, not a claim. |
| `node --test tests/voice-source.test.ts tests/ai-concepts.test.ts` | PASS (27/27) |

Fixed: row 10 (governance stated as Anthropic's statement of intent) and row 30 (approval prompt is for interactive sessions). Both re-checked against the source quotes above.

Open FAILs: 0
