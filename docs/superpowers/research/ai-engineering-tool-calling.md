# AI Engineering page: Tool Calling (research notes)

Writer notes for `content/ai-engineering/tool-calling.mdx`. Fetched 2026-10-28 into a scratch folder of the writer session. Fetched text is treated as data and is not committed. The Claude docs were fetched as Markdown (`.md` suffix); `docs.claude.com` redirects to `platform.claude.com`.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Tool use with Claude (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | 2026-10-28 |
| S2 | Define tools (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools | 2026-10-28 |
| S3 | Handle tool calls (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls | 2026-10-28 |
| S4 | Strict tool use (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use | 2026-10-28 |
| S5 | JSON Schema reference: object (json-schema.org) | https://json-schema.org/understanding-json-schema/reference/object | 2026-10-28 |
| S6 | MCP Specification 2025-06-18: Tools | https://modelcontextprotocol.io/specification/2025-06-18/server/tools | 2026-10-28 |
| S7 | LLM06:2025 Excessive Agency (OWASP GenAI Security Project) | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | 2026-10-28 |
| S8 | Writing effective tools for AI agents (Anthropic Engineering) | https://www.anthropic.com/engineering/writing-tools-for-agents | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S8.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Tool use (function calling) lets the model call defined functions; it decides from the request and the description; it returns a structured call that the app runs. | S1 | "Tool use (also called function calling) lets Claude call functions that you define" / "Claude determines when to call a tool based on the user's request and the tool's description. It then returns a structured call that your application runs (client tools)" |
| C2 | Client tools run in your app; server tools such as web search run on Anthropic's infrastructure. | S1 | "**Client tools** ... run in your application." / "**Server tools** (such as `web_search`, ...) run on Anthropic's inf[rastructure]" |
| C3 | Tools have `name`, `description`, `input_schema` (a JSON Schema object). | S2 | "`input_schema` | A JSON Schema object defining the expected parameters for the tool." |
| C4 | The description is the most important factor; explain what, when, returns. | S2 | "Provide extremely detailed descriptions. This is by far the most important factor in tool performance." / "clearly explains what the tool does, when to use it, what data it returns" |
| C5 | Properties are optional unless in `required`; extra properties allowed unless `additionalProperties: false`. | S5 | "By default, the properties defined by the properties keyword are not required." / "By default any additional properties are allowed." / "Setting the additionalProperties schema to false means no additional properties will be allowed." |
| C6 | Response has `stop_reason` `tool_use` and `tool_use` blocks with `id`, `name`, `input`. | S3 | "The response has a `stop_reason` of `tool_use` and one or more `tool_use` content blocks that include: `id` ... `name` ... `input`" |
| C7 | Your code returns a `tool_result` with the matching id; the model continues. | S3 / S1 | S3: "This is used to match up the tool results later." / "After receiving the tool result, Claude will use that information to continue" |
| C8 | `tool_result` must immediately follow the tool use message and come first in the user content. | S3 | "Tool result blocks must immediately follow their corresponding tool use blocks" / "the `tool_result` blocks must come FIRST in the content array" |
| C9 | Code uses `claude-opus-5-5`, `max_tokens`, `tools`, `messages`; key from env. | S1 | Example: `model="claude-opus-5-5", max_tokens=1024, tools=[...], messages=[...]`; curl uses `$ANTHROPIC_API_KEY` |
| C10 | Without strict mode: wrong types ("2" vs 2) or missing required fields. | S4 | "Without strict mode, Claude might return incompatible types (`\"2\"` instead of `2`) or omit required fields" |
| C11 | `strict: true` constrains sampling so input matches the schema. | S4 | "Setting `strict: true` on a tool definition guarantees Claude's tool inputs match your JSON Schema by constraining the model's token sampling to schema-valid outputs" |
| C12 | MCP servers must validate all tool inputs; implement access controls. | S6 | "Servers MUST: Validate all tool inputs / Implement proper access controls" |
| C13 | Return errors with `is_error: true` in content. | S3 | "you can return the error message in the `content` along with `\"is_error\": true`" |
| C14 | Write instructive error messages, for example "Retry after 60 seconds". | S3 | "include what went wrong and what Claude should try next (for example, `\"Rate limit exceeded. Retry after 60 seconds.\"`)" |
| C15 | Invalid call: Claude retries 2–3 times before apologizing. | S3 | "Claude will retry 2–3 times with corrections before apologizing to the user." |
| C16 | `tool_choice`: auto (default with tools), any, tool, none. | S2 | "`auto` ... This is the default value when `tools` are provided." / "`any`" / "`tool` forces Claude to always use a particular tool." / "`none` prevents Claude from using any tools." |
| C17 | On Claude Opus 5.5 (and others), `any` and `tool` return 400; use `auto` with strict tool use. | S2 | "Claude Opus 5.5, Claude Sonnet 5.5, ... | `any` and `tool` return a 400 error | `auto` with strict tool use to guarantee schema-valid tool inputs" |
| C18 | Excessive Agency root causes: excessive functionality, permissions, autonomy. | S7 | "The root cause of Excessive Agency is typically one or more of: excessive functionality; excessive permissions; excessive autonomy." |
| C19 | Mitigations: minimize extensions, minimize permissions, user's context, user approval, complete mediation in downstream systems. | S7 | "Minimize extensions" / "Minimize extension permissions" / "Execute extensions in user's context" / "Require user approval" / "Implement authorization in downstream systems rather than relying on an LLM to decide" |
| C20 | MCP: a human should be able to deny tool calls; confirm sensitive operations. | S6 | "there SHOULD always be a human in the loop with the ability to deny tool invocations" / "Prompt for user confirmation on sensitive operations" |
| C21 | Avoid open-ended extensions such as a shell command; prefer granular ones. | S7 | "Avoid the use of open-ended extensions where possible (e.g., run a shell command, fetch a URL, etc.) and use extensions with more granular functionality." |
| C22 | A read extension should not also have UPDATE/INSERT/DELETE. | S7 | "an extension intended to read data connects to a database server using an identity that not only has SELECT permissions, but also UPDATE, INSERT and DELETE permissions" |
| C23 | Bloated responses waste context; return only needed fields. | S2 | "include only the fields Claude needs to reason about its next step. Bloated responses waste context" |
| C24 | MCP clients should set timeouts and log tool usage for audit. | S6 | "Implement timeouts for tool calls" / "Log tool usage for audit purposes" |
| C25 | Evaluate tools with realistic tasks; collect tool calls, errors, tokens. | S8 | "Start by generating lots of evaluation tasks, grounded in real world uses." / "collecting other metrics like the total runtime of individual tool calls and tasks, the total number of tool calls, the total token consumption, and tool errors" |

The QA assistant (three tools, run 88, `QA-123`) is the tutorial's own invented example. The tester checks are the tutorial's own advice and have no cite.
