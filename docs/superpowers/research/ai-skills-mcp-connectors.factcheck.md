# Fact check: AI Skills, MCP Connectors

Sources fetched fresh on 2026-10-28 with WebFetch. S1 = MCP "What is the Model Context Protocol (MCP)?", S2 = MCP "Architecture overview", S3 = MCP "Security Best Practices", S4 = Claude Code docs "Connect Claude Code to tools via MCP", S5 = microsoft/playwright-mcp README (GitHub), S6 = Claude Platform docs "Glossary". All 6 are official docs of the protocol or the vendor, or the tool's own GitHub repo. No blog, news, or forum. The page gives no price.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: a connector gives the assistant access to one system; MCP is the common shape, so one connector works in many apps | none | PASS | Intro text; the facts behind it are cited in rows 2 to 5 |
| 2 | MCP is an open-source standard for connecting AI applications to outside systems | S1 | FAIL (fixed in Round 2) | Fact is right: "an open-source standard for connecting AI applications to external systems." But the page copies a 9-word run, "is an open-source standard for connecting AI applications to", word for word |
| 3 | Data sources (files, databases), tools (search engines), workflows (prompts) | S1 | PASS | "data sources (e.g. local files, databases), tools (e.g. search engines" |
| 4 | MCP docs compare it to a USB-C port | S1 | PASS | "Think of MCP like a USB-C port for AI applications." |
| 5 | Claude, ChatGPT, Visual Studio Code, and Cursor support it | S1 | PASS | "Claude and ChatGPT, development tools like Visual Studio Code, Cursor" |
| 6 | A connector is, in daily speech, an MCP server you add; build once, use in many tools | none | PASS | Tutorial's own wording; S1 "making it easy to build once and integrate everywhere" agrees |
| 7 | Three roles: host is the AI app (for example Claude Code) | S2 | PASS | "an MCP host — an AI application like Claude Code" |
| 8 | Host makes one client per server; each client keeps its own connection | S2 | PASS | "creating one MCP client for each MCP server" / "maintains a dedicated connection" |
| 9 | Server is a program that provides context to the client | S2 | PASS | "MCP Server: A program that provides context to MCP clients" |
| 10 | Text diagram: stdio for local servers, Streamable HTTP for a remote one | S2 | PASS | Matches S2: local servers use STDIO, the remote Sentry server uses Streamable HTTP |
| 11 | Messages use JSON-RPC 2.0 | S2 | PASS | "MCP uses JSON-RPC 2.0 as its underlying RPC protocol." |
| 12 | stdio connects processes on the same machine | S2 | PASS | "direct process communication between local processes on the same machine" |
| 13 | Streamable HTTP: remote; bearer tokens, API keys, custom headers; OAuth recommended | S2 | PASS | "MCP recommends using OAuth to obtain authentication tokens." (7-word list run only, under the limit) |
| 14 | Server offers tools, resources, prompts with the given meanings | S2 | PASS | "three core primitives that servers can expose" (Tools, Resources, Prompts) |
| 15 | Client lists (`tools/list`) then calls (`tools/call`) | S2 | PASS | "a client can first list all available tools (`tools/list`) and then execute them" |
| 16 | Each tool has name, description, `inputSchema` in JSON Schema | S2 | PASS | "`inputSchema`: A JSON Schema that defines the expected input parameters" |
| 17 | Elicitation: server asks the user for more input or a confirmation | S2 | PASS | "request additional information from users ... or ask for confirmation" |
| 18 | `claude mcp add --transport http <name> <url>` | S4 | PASS | Exact syntax: "claude mcp add --transport http <name> <url>" |
| 19 | Local server: start command after `--` | S4 | PASS | "`--` (double dash) separates Claude's own options ... from the command" |
| 20 | Scopes local, project, user; project scope in `.mcp.json` at project root | S4 | PASS | Scope table; "storing configurations in a `.mcp.json` file at your project's root" |
| 21 | `/mcp` shows the servers and handles OAuth logins | S4 | PASS | "Check server status /mcp"; "Use `/mcp` to authenticate with remote servers" |
| 22 | SSE transport is deprecated | S4 | PASS | "The SSE (Server-Sent Events) transport is deprecated." |
| 23 | Claude API MCP connector reaches MCP servers from the Messages API with no own MCP client | S6 | PASS | "connect to MCP servers directly from the Messages API without building an MCP client" |
| 24 | Playwright MCP gives browser tools, works from structured data, no vision model | S5 | PASS | "No vision models needed, operates purely on structured data." |
| 25 | Ask it to open a staging page, fill a form, report what breaks | none | PASS | Tutorial's own example of use |
| 26 | Remote tracker server; add it with the `--transport http` form | S4 | PASS | Same syntax as row 18; tracker workflow is the tutorial's own example |
| 27 | Database server example: query tools, schema resource, prompt with examples | S2 | PASS | "tools for querying the database, a resource that contains the schema ... a prompt that includes few-shot examples" |
| 28 | Project scope: server list in `.mcp.json` in the repo; team gets the same connectors | S4 | PASS | "Check `.mcp.json` into version control so everyone on your team gets the same MCP tools" |
| 29 | Test own server: `tools/list`, valid and invalid input against `inputSchema` | S2 | PASS | `inputSchema` enables "type validation"; the test plan is the tutorial's own advice |
| 30 | MCP Inspector is a tool for this work | S2 | PASS | "MCP Development Tools: Tools for developing MCP servers and clients, including the MCP Inspector" |
| 31 | Tools table: Playwright MCP command `claude mcp add playwright npx @playwright/mcp@latest` | S5 | PASS | README gives exactly "claude mcp add playwright npx @playwright/mcp@latest" |
| 32 | Tools table: Inspector is an MCP development tool | S2 | PASS | Same quote as row 30 |
| 33 | Tools table: project keeps reference server implementations | S2 | PASS | "MCP Reference Server Implementations: Reference implementations of MCP servers." |
| 34 | Tools table: `claude mcp` project scope saves to `.mcp.json` | S4 | PASS | Same as row 20 |
| 35 | Tools table: API MCP connector needs no own MCP client | S6 | PASS | Same as row 23 |
| 36 | Servers that fetch outside content can bring prompt injection risk | S4 | PASS | "Servers that fetch external content can expose you to prompt injection risk." |
| 37 | An unsafe local server can run any command with the client's rights | S3 | PASS | "Attackers can execute any command with MCP client privileges." |
| 38 | Security guide recommends least privilege starting with minimal scopes | S3 | PASS | "Implement a progressive, least-privilege scope model: Minimal initial scope set" |
| 39 | `.mcp.json` is meant for the repo | S4 | PASS | "Check `.mcp.json` into version control" |
| 40 | `--env` option of `claude mcp add` passes keys as environment variables | S4 | PASS | Example "claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable" |
| 41 | Use Streamable HTTP instead of SSE for remote servers | S4 | PASS | "Use HTTP servers instead, where available." |
| 42 | Send input that breaks the `inputSchema` | S2 | PASS | `inputSchema` defines expected input; the test idea is the tutorial's own |
| 43 | Server must never accept a token not issued for it | S3 | PASS | "MCP servers MUST NOT accept any tokens that were not explicitly issued for the MCP server." |
| 44 | How to start: add Playwright MCP (S5), run `/mcp` (S4), project scope for the team (S4) | S5, S4 | PASS | Same facts as rows 31, 21, 28; steps 3 and 4 are the tutorial's own advice |
| 45 | Key words: MCP, Host, Server, Tool, Transport, Project scope | S1, S2, S4 | PASS | Host: "coordinates and manages one or multiple MCP clients"; others as rows 2, 9, 14, 12-13, 20 |
| Code and config syntax | PASS | `claude mcp add --transport http <name> <url>`, the `--` form, `--env`, `/mcp`, `.mcp.json`, `tools/list`, `tools/call`, `inputSchema`, and the Playwright command all match S2, S4, S5 |
| "Tutorial advice" tip has no cite | PASS | The Callout has no `<Cite>` and says it is the tutorial's own advice |
| Internal links | PASS | `/extend/mcp/`, `/extend/hooks/`, `/automate/playwright/` are in `scripts/route-map.json` |
| Each source is cited and each cite points to a source that supports it | PASS | S1 to S6 all cited; no mis-cite found |
| Sources are official | PASS | modelcontextprotocol.io, code.claude.com, platform.claude.com, github.com/microsoft |
| No price | PASS | None on the page |
| Copied text | FAIL (fixed in Round 2) | See row 2 (same FAIL, counted once) |

Fix for row 2: reword, for example "**MCP** (Model Context Protocol) is an open-source standard that links AI apps to outside systems <Cite n={1} />."

## Round 2 (2026-10-28)

I fetched S1 and S2 again on 2026-10-28 and compared the current MDX with the Round 1 text. 3 lines changed: Technical "In plain words" (line 25), Technical "How it works" auth sentence (line 70), and Layman "How it works" auth sentence (line 87). The Bangla panels, the lede, the tables, and all other lines did not change.

| Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|
| "The **Model Context Protocol** (MCP) is an open-source standard that links AI apps to outside systems" | S1 | PASS | "MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems." Longest shared run is 5 words ("is an open-source standard"), under the limit. Round 1 row 2 (copied text) is fixed |
| "**Streamable HTTP** connects to a remote server and accepts bearer tokens, API keys, or custom headers for auth. For the tokens, MCP recommends OAuth" | S2 | PASS | "supports standard HTTP authentication methods including bearer tokens, API keys, and custom headers. MCP recommends using OAuth". Longest shared run is now 5 words, under the limit |

Round 1 FAILs: row 2 (copied text) is fixed. No new FAIL.

Open FAILs: 0
