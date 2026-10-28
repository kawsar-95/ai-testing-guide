# Fact check: How AI Agents Work, Act with Tools

Page: `content/ai-agents/act-with-tools.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date (the `.md` form of the docs pages; the OpenAI page also as its GitHub `docs/tools.md`).

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | yes | Anthropic docs |
| 2 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls | yes | Anthropic docs |
| 3 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/parallel-tool-use | yes | Anthropic docs |
| 4 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 5 | https://modelcontextprotocol.io/specification/2025-06-18/server/tools | yes | MCP specification |
| 6 | https://openai.github.io/openai-agents-python/tools/ | yes | OpenAI docs |
| 7 | https://www.anthropic.com/engineering/building-effective-agents | yes | Anthropic engineering |

Each source 1–7 is cited at least one time. Each cite number has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Tool use is also called function calling; it lets the model call functions. | 1 | PASS | "Tool use (also called function calling) lets Claude call functions" |
| 2 | The model decides from the request and the tool description; returns a structured call that the app or vendor runs. | 1 | PASS | "returns a structured call that your application runs" |
| 3 | Main difference: where the code runs. Client tools run in your app and send back `tool_result`. | 1 | PASS | "Tools differ primarily by where the code runs." |
| 4 | Server tools run on vendor infrastructure: `web_search`, `web_fetch`, `code_execution`. | 1 | PASS | "run on Anthropic's infrastructure" |
| 5 | OpenAI calls them hosted tools: `WebSearchTool`, `FileSearchTool`, `CodeInterpreterTool`. | 6 | PASS | "Hosted tools" section lists the three classes |
| 6 | Agent SDK built-in tools: Read/Edit/Write, Glob/Grep, Bash, WebSearch/WebFetch, Agent. | 4 | PASS | tools table: "Spawn subagents" for `Agent` |
| 7 | MCP servers connect databases, browsers, APIs. | 4 | PASS | "Connect external services with MCP servers (databases, browsers, APIs)" |
| 8 | Memory tool stores and reads information in files you control. | 1 | PASS | "Store and retrieve information ... in files you control" |
| 9 | Tool definition: `name`, `description`, `input_schema`. | 1 | PASS | "pass a tool with an `input_schema`" plus example definition |
| 10 | MCP tool: `name`, `description`, `inputSchema`, optional `outputSchema`. | 5 | PASS | "`outputSchema`: Optional JSON Schema" |
| 11 | `strict: true` makes calls match the schema exactly. | 1 | PASS | "ensure Claude's tool calls always match your schema exactly" |
| 12 | Client tool call: `stop_reason: "tool_use"`, `tool_use` blocks with `id`, `name`, `input`. | 2 | PASS | "Extract the `name`, `id`, and `input`" |
| 13 | `tool_result` has `tool_use_id`, `content`, `is_error`; must follow the call; result blocks first. | 2 | PASS | "`tool_result` blocks must come FIRST in the content array" |
| 14 | MCP: `tools/list` to find, `tools/call` to run. | 5 | PASS | "clients send a `tools/list` request" |
| 15 | By default Claude can call several tools in one response; the API sets no order. | 3 | PASS | "The API doesn't prescribe an execution order" |
| 16 | One `tool_result` per `tool_use`, all in the next user message; a call not run still gets `is_error: true`. | 3 | PASS | "still return a `tool_result` for it with `is_error: true`" |
| 17 | Agent SDK runs read-only tools at the same time, state-changing tools one after another. | 4 | FAIL, fixed | "Read-only tools ... can run concurrently." |
| 18 | MCP: API failure / bad input = tool execution error `isError: true`; unknown tool = protocol error. | 5 | PASS | "Protocol Errors ... Unknown tools" |
| 19 | Invalid call: Claude retries 2 to 3 times with corrections, then apologizes. | 2 | PASS | "retry 2–3 times with corrections before apologizing" |
| 20 | A denied tool gives Claude a rejection message as the tool result. | 4 | PASS | "Claude receives a rejection message as the tool result" |
| 21 | A subagent returns only its final response; main context grows by a summary. | 4 | PASS | "A subagent returns only its final response" |
| 22 | OpenAI "agents as tools". | 6 | PASS | "Agents as tools: expose an agent as a callable tool" |
| 23 | Example: two read calls run together, results in one message. | 3 | PASS | "Independent, read-only operations are usually safe to run in parallel" |
| 24 | Error text: say what went wrong and what to try next. | 2 | PASS | "include what went wrong and what Claude should try next" |
| 25 | A human should be able to deny tool invocations. | 5 | PASS | "a human in the loop with the ability to deny" |
| 26 | Clear tool documentation; poka-yoke tools. | 7 | PASS | "Poka-yoke your tools." |
| 27 | Split results "teach" Claude to stop parallel calls. | 3 | PASS | "This "teaches" Claude to avoid parallel calls." |
| 28 | Tool results can carry untrusted text; indirect prompt injection. | 2 | PASS | "redirect Claude (indirect prompt injection)" |
| 29 | MCP clients should validate results before the LLM; confirm sensitive operations. | 5 | PASS | "Validate tool results before passing to LLM" |
| 30 | OpenAI function tools send an error to the model by default. | 6 | PASS | "runs a `default_tool_error_function` which tells the LLM an error occurred" |
| 31 | Big outputs use much context. | 4 | PASS | "Large tool outputs consume significant context." |

Fixed (claim 17): the source says read-only tools "can run concurrently". The page said the SDK "runs" them at the same time. Changed to "can run" in all 3 voices. Re-checked: PASS.

## Other checks

| Check | Verdict |
|---|---|
| Every source cited; official or primary sources only | PASS |
| The example says it is invented | PASS |
| "Tutorial advice" tip has no `<Cite>` (all 3 voices) | PASS |
| No run of more than 10 words copied from a source | PASS |
| Internal links `/harness/tool-calling/`, `/ai-concepts/subagents/` exist | PASS |
| `## Key words` rows agree with the claims | PASS |

Open FAILs: 0
