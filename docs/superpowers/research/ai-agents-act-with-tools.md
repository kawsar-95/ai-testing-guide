# Research notes: How AI Agents Work, Act with Tools

Page: `content/ai-agents/act-with-tools.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Tool use with Claude | Anthropic (Claude API docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | 2026-10-28 |
| S2 | Handle tool calls | Anthropic (Claude API docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls | 2026-10-28 |
| S3 | Parallel tool use | Anthropic (Claude API docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use | 2026-10-28 |
| S4 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S5 | Tools (MCP specification 2025-06-18) | Model Context Protocol | https://modelcontextprotocol.io/specification/2025-06-18/server/tools | 2026-10-28 |
| S6 | Tools | OpenAI (Agents SDK docs) | https://openai.github.io/openai-agents-python/tools/ | 2026-10-28 |
| S7 | Building effective agents | Anthropic (Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Claude decides when to call a tool from the request and the tool description. | S1 | "Claude determines when to call a tool based on the user’s request" |
| C2 | The call is structured; your application runs it (client tools) or Anthropic runs it (server tools). | S1 | "returns a structured call that your application runs (client tools)" |
| C3 | Tools differ mainly by where the code runs. | S1 | "Tools differ primarily by where the code runs." |
| C4 | For a client tool, the response has `stop_reason: "tool_use"` and `tool_use` blocks; your code sends back a `tool_result`. | S1 | "Your code runs the operation and sends back a `tool_result`." |
| C5 | Server tools include `web_search`, `web_fetch`, `code_execution`, `tool_search`; they run on Anthropic's infrastructure. | S1 | "run on Anthropic’s infrastructure" |
| C6 | The code execution tool runs Python and Bash in a sandboxed container. | S1 | "Run Python and Bash code in a sandboxed container" |
| C7 | The memory tool is an Anthropic-schema client tool; it stores and retrieves information in files you control. Your application runs it. | S1 | "Store and retrieve information across conversations in files you control." / "Your application still runs each call" |
| C8 | A tool definition has a name, a description, and an `input_schema`. | S1 | example `"name": "get_weather"`, `"description"`, `"input_schema"` |
| C9 | `strict: true` makes tool calls match the schema exactly. | S1 | "ensure Claude’s tool calls always match your schema exactly" |
| C10 | A `tool_use` block has `id`, `name`, `input`. | S2 | "`id`: A unique identifier for this particular tool use block." |
| C11 | A `tool_result` has `tool_use_id`, optional `content`, optional `is_error`. | S2 | "`is_error` (optional): Set to `true` if the tool execution resulted in an error." |
| C12 | Tool results must immediately follow their tool use; `tool_result` blocks come first in the content array. | S2 | "Tool result blocks must immediately follow their corresponding tool use blocks" |
| C13 | Tool results can carry untrusted content (indirect prompt injection). | S2 | "Treat that content as untrusted" |
| C14 | Write instructive error messages that say what went wrong and what to try next. | S2 | "Write instructive error messages." |
| C15 | On an invalid call, Claude retries 2-3 times with corrections before apologizing. | S2 | "Claude will retry 2–3 times with corrections before apologizing" |
| C16 | Server tool errors are handled by Claude; you do not handle `is_error` for them. | S2 | "you do not need to handle `is_error` results for server tools" |
| C17 | By default Claude may call several tools in one response; the API does not prescribe an order. | S3 | "By default, Claude may call multiple tools in a single response." / "The API doesn’t prescribe an execution order" |
| C18 | Return one `tool_result` per `tool_use`, all in the next user message. A call you did not run still gets a result with `is_error: true`. | S3 | "return one `tool_result` for each `tool_use` block, all together in the next user message" |
| C19 | Separate user messages per result "teach" Claude to avoid parallel calls. | S3 | "This “teaches” Claude to avoid parallel calls." |
| C20 | `disable_parallel_tool_use: true` inside `tool_choice` turns it off (at most one tool per response with `auto`). | S3 | "Parallel tool use is on by default." |
| C21 | Agent SDK built-in tools: Read, Edit, Write, Glob, Grep, Bash, WebSearch, WebFetch, ToolSearch, Agent (spawn subagents) and more. | S4 | "Spawn subagents, invoke skills, ask the user, track tasks" |
| C22 | MCP servers connect external services (databases, browsers, APIs). | S4 | "Connect external services with MCP servers (databases, browsers, APIs)" |
| C23 | Read-only tools can run concurrently; state-changing tools (Edit, Write, Bash) run sequentially. Custom tools default to sequential. | S4 | "Tools that modify state (like `Edit`, `Write`, and `Bash`) run sequentially" |
| C24 | A denied tool gives Claude a rejection message as the tool result. | S4 | "Claude receives a rejection message as the tool result" |
| C25 | A subagent returns only its final response. | S4 | "A subagent returns only its final response" |
| C26 | Large tool outputs consume much context. | S4 | "Large tool outputs consume significant context." |
| C27 | MCP: servers expose tools; discovery with `tools/list`, invocation with `tools/call`. | S5 | "clients send a `tools/call` request" |
| C28 | MCP tool definition: `name`, `description`, `inputSchema`, optional `outputSchema`, `annotations`. | S5 | "`inputSchema`: JSON Schema defining expected parameters" |
| C29 | MCP errors: protocol errors (JSON-RPC) and tool execution errors (`isError: true`). | S5 | "Tools use two error reporting mechanisms" |
| C30 | MCP: a human SHOULD be in the loop to deny tool invocations; clients SHOULD validate results and use timeouts. | S5 | "there **SHOULD** always be a human in the loop" / "Implement timeouts for tool calls" |
| C31 | MCP: clients MUST treat annotations as untrusted unless from trusted servers. | S5 | "clients **MUST** consider tool annotations to be untrusted" |
| C32 | OpenAI Agents SDK: hosted tools run on OpenAI servers (WebSearchTool, FileSearchTool, CodeInterpreterTool); function tools wrap Python functions; agents as tools. | S6 | "execute for the model on OpenAI servers" / "expose an agent as a callable tool" |
| C33 | OpenAI Agents SDK: by default a function tool error is reported to the LLM. | S6 | "tells the LLM an error occurred" |
| C34 | Design tool docs carefully; poka-yoke the tools. | S7 | "Poka-yoke your tools." |

## Not on the page

No prices, no tool version strings (for example `web_search_20260209`), no numbers of tokens.
