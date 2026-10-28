# Fact-check: content/ai-engineering/tool-calling.mdx

Checked 2026-10-28 by an agent that did not write the page. Sources fetched fresh: S1 to S4 as Markdown (`.md` suffix on platform.claude.com), plus the Structured outputs page for the JSON Schema limits of strict mode; S5, S6, and S8 as HTML; S7 (OWASP) through WebFetch, because the site returns 403 to a plain fetch. The quotes of the research notes were not trusted.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Tool calling (function calling) lets a model call functions that you define | 1 | PASS | S1: "Tool use (also called function calling) lets Claude call functions that you define or that Anthropic provides." |
| 2 | The model decides when to call a tool from the request and the tool description | 1 | PASS | S1: "Claude determines when to call a tool based on the user's request and the tool's description." |
| 3 | It returns a structured call that your application runs | 1 | PASS | S1: "It then returns a structured call that your application runs (client tools)" |
| 4 | Client tool: your code runs the function and sends back the result | 1 | PASS | S1: "Client tools ... run in your application. ... Your code runs the operation and sends back a `tool_result`." |
| 5 | Server tools, such as web search, run on the vendor's infrastructure | 1 | PASS | S1: "Server tools (such as `web_search`, `web_fetch`, ...) run on Anthropic's infrastructure" |
| 6 | "Two sides that you must test" | none | PASS | The tutorial's own conclusion from claims 1 to 5. No new fact. |
| 7 | Tools go in `tools`; each has `name`, `description`, `input_schema` (a JSON Schema object) | 2 | PASS | S2 parameter table: "`input_schema` ... A JSON Schema object defining the expected parameters for the tool." |
| 8 | The description is the most important factor; explain the job, the cases, the output | 2 | PASS | S2: "Provide extremely detailed descriptions. This is by far the most important factor in tool performance." |
| 9 | Properties are optional unless in `required`; extra properties are allowed unless `additionalProperties: false` | 5 | PASS | S5: "By default, the properties defined by the `properties` keyword are not required." / "By default any additional properties are allowed." |
| 10 | Response has `stop_reason: "tool_use"` and `tool_use` blocks with `id`, `name`, `input` | 3 | PASS | S3: "The response has a `stop_reason` of `tool_use` and one or more `tool_use` content blocks that include: `id` ... `name` ... `input`" |
| 11 | Your code sends a `tool_result` with the same `tool_use_id` | 3 | PASS | S3: `id` "is used to match up the tool results later"; the `tool_result` block has `tool_use_id`. |
| 12 | The model uses the result to continue | 3 | PASS | S3: "After receiving the tool result, Claude will use that information to continue generating a response" |
| 13 | Code: `anthropic.Anthropic()`, `client.messages.create(model="claude-opus-5-5", max_tokens=1024, tools=..., messages=...)`, key from `ANTHROPIC_API_KEY` | 1 | PASS | S1 Python example uses `model="claude-opus-5-5"`; curl uses `$ANTHROPIC_API_KEY`. |
| 14 | Code: `"strict": True` at the tool level, `required`, `additionalProperties: False` | 4 | PASS | S4 Python example: `"strict": True,  # Enable strict mode` and `"additionalProperties": False`. Structured outputs (JSON Schema limitations): `additionalProperties` "must be set to `false` for objects". |
| 15 | Code: `"pattern": "^[A-Z]+-[0-9]+$"` in a strict schema | 4 | PASS | Structured outputs, "Pattern support (regex)": full matching `^...$`, quantifiers `+`, and character classes `[]` are supported. |
| 16 | Code: tool error returned with `"is_error": True` and assistant content appended before the user `tool_result` | 3 | PASS | S3: "return the error message in the `content` along with `\"is_error\": true`"; S3 ordering rules (claim 17). |
| 17 | `tool_result` blocks come right after the `tool_use` message and first in the user content | 3 | PASS | S3: "Tool result blocks must immediately follow their corresponding tool use blocks" / "the `tool_result` blocks must come FIRST in the content array." |
| 18 | Without strict mode: wrong type (`"2"` not `2`) or a missing required field | 4 | PASS | S4: "Without strict mode, Claude might return incompatible types (`\"2\"` instead of `2`) or omit required fields" |
| 19 | `strict: true` constrains sampling so input matches the schema | 4 | PASS | S4: "guarantees Claude's tool inputs match your JSON Schema by constraining the model's token sampling to schema-valid outputs" |
| 20 | Strict mode checks shape only; your code checks meaning | none | PASS | The tutorial's own conclusion; S4 talks only about schema conformance. |
| 21 | MCP: servers must validate all tool inputs | 6 | PASS | S6 Security Considerations: "Servers MUST: Validate all tool inputs" |
| 22 | Return error text in `content` with `"is_error": true` | 3 | PASS | S3, same quote as claim 16. |
| 23 | Useful errors: what went wrong, what to try next, "Retry after 60 seconds" | 3 | PASS | S3: "include what went wrong and what Claude should try next (for example, `\"Rate limit exceeded. Retry after 60 seconds.\"`)" |
| 24 | Invalid call: Claude retries 2 to 3 times with corrections, then apologizes | 3 | PASS | S3: "Claude will retry 2–3 times with corrections before apologizing to the user." |
| 25 | `tool_choice`: `auto` (default with tools), `any`, `tool`, `none` | 2 | PASS | S2: "`auto` ... This is the default value when `tools` are provided." / "`tool` forces Claude to always use a particular tool." / "`none` prevents Claude from using any tools." |
| 26 | On some models, such as Claude Opus 5.5, `any` and `tool` return a 400 error; the docs suggest `auto` with strict tool use (writer doubt 6) | 2 | PASS | S2 (fetched 2026-10-28), forced tool use table: "Claude Opus 5.5, Claude Sonnet 5.5, Claude Fable 5.1, and Claude Mythos 5.1 / `any` and `tool` return a 400 error / `auto` with strict tool use to guarantee schema-valid tool inputs". "On some models" matches "Not every model and setting supports forced tool use." |
| 27 | OWASP Excessive Agency: excessive functionality, permissions, autonomy | 7 | PASS | S7: "The root cause of Excessive Agency is typically one or more of:" excessive functionality, excessive permissions, excessive autonomy. |
| 28 | OWASP advice: minimum tools, limited permissions, user's context, human approval, authorization downstream | 7 | PASS | S7 prevention list: "Minimize extensions", "Minimize extension permissions", "Execute extensions in user's context", "Require user approval", "Complete mediation" (authorization in downstream systems). |
| 29 | Example (three tools, run 88, `QA-123`) | none | PASS | The tutorial's own invented example; no fact about a real system. |
| 30 | Example follows the OWASP advice | 7 | PASS | Same as claim 28. |
| 31 | MCP: a human should be able to deny a tool call; confirm sensitive operations | 6 | PASS | S6: "there SHOULD always be a human in the loop with the ability to deny tool invocations"; "Clients SHOULD: Prompt for user confirmation on sensitive operations" |
| 32 | Mistake: description is the biggest factor | 2 | PASS | Same as claim 8. |
| 33 | Mistake: authorization belongs in the downstream system | 7 | PASS | S7 "Complete mediation". |
| 34 | Mistake: OWASP advises small tools with narrow functions, not a shell command | 7 | PASS | S7 "Avoid open-ended extensions": narrow tools rather than arbitrary shell access. |
| 35 | Mistake: a read extension should not have UPDATE and DELETE rights | 7 | PASS | S7: "an identity that not only has SELECT permissions, but also UPDATE, INSERT and DELETE permissions" |
| 36 | Mistake: errors that say only "failed" | 3 | PASS | S3: "Instead of generic errors such as `\"failed\"`, include what went wrong and what Claude should try next" |
| 37 | Mistake: bloated responses waste context; return only needed fields | 2 | PASS | S2: "include only the fields Claude needs to reason about its next step. Bloated responses waste context" |
| 38 | Mistake: MCP clients should set timeouts and log tool use for audit | 6 | PASS | S6 "Clients SHOULD:" ... "Implement timeouts for tool calls" / "Log tool usage for audit purposes" |
| 39 | Mistake: Anthropic advises an eval with many real-use tasks and metrics: tool calls, tool errors, tokens | 8 | PASS | S8: "Start by generating lots of evaluation tasks, grounded in real world uses." / "the total number of tool calls, the total token consumption, and tool errors." |
| 40 | Tester checks | none | PASS | Marked "These checks are the tutorial's own advice." in a "Tutorial advice" tip. No cite needed. |

Source type check: S1 to S4 and S8 are Anthropic (vendor docs and engineering blog of the vendor); S5 is json-schema.org; S6 is the MCP specification; S7 is OWASP GenAI. All official or primary. PASS.

Copy check: `python3 -I scripts/linux_overlap.py content/ai-engineering/tool-calling.mdx <raw-dir>` against the text of S1 to S6 and S8 (7 files): no run of 8 or more words. S7 was not in the script corpus (no raw text, 403); a manual compare of the page text with the WebFetch quotes found no 8-word run. PASS.

No FAIL in the Technical text.

Open FAILs: 0
