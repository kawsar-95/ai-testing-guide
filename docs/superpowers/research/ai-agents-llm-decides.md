# Research notes: How AI Agents Work, The LLM Decides

Page: `content/ai-agents/llm-decides.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Tool use with Claude | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | 2026-10-28 |
| S2 | Define tools | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools | 2026-10-28 |
| S3 | Stop reasons and fallback | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons | 2026-10-28 |
| S4 | Thinking | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/build-with-claude/thinking | 2026-10-28 |
| S5 | Glossary | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/about-claude/glossary | 2026-10-28 |
| S6 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |

Note: `https://platform.claude.com/docs/en/build-with-claude/extended-thinking` now covers only manual mode (`budget_tokens`), which is deprecated on 4.6 models and rejected on 4.7 and later. The page cites S4 (the general thinking page) instead.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Claude determines when to call a tool from the user's request and the tool's description. | S1 | "Claude determines when to call a tool based on the user’s request" |
| C2 | With the default `tool_choice` auto, Claude decides each turn whether to call a tool or respond directly. | S1 | "Claude determines on each turn whether to call a tool or respond directly" |
| C3 | It calls a tool when the request maps to a tool's capability and the answer is not already in context. | S1 | "the answer isn’t already in context" |
| C4 | The boundary is steerable through the system prompt. | S1 | "This boundary is steerable through your system prompt." |
| C5 | For a client tool, Claude responds with `stop_reason: "tool_use"` and `tool_use` blocks; your code runs it and sends a `tool_result`. | S1 | "Claude responds with `stop_reason: \"tool_use\"` and one or more `tool_use` blocks" |
| C6 | If required parameters are missing, Claude may ask or may guess a value (Sonnet especially); not guaranteed. | S1 | "it might also infer a reasonable value" |
| C7 | In the SDK loop, Claude may respond with text, tool calls, or both. | S6 | "It may respond with text, request one or more tool calls, or both." |
| C8 | The loop continues until Claude produces a response with no tool calls. | S6 | "until it produces a response with no tool calls" |
| C9 | When a tool is denied, Claude gets a rejection message and usually tries another way or reports. | S6 | "typically attempts a different approach or reports that it couldn't proceed" |
| C10 | `effort` controls how much reasoning Claude applies; lower levels use fewer tokens. | S6 | "The `effort` option controls how much reasoning Claude applies." |
| C11 | tool_choice options: auto (default with tools), any, tool, none (default with no tools). | S2 | "`auto` allows Claude to determine whether to call any provided tools." |
| C12 | With any or tool, the API prefills; no natural-language text before tool_use blocks. | S2 | "the models will not emit a natural language response or explanation" |
| C13 | Forced tool use (any, tool) returns a 400 error on Claude Opus 5.5, Sonnet 5.5, Fable 5.1, Mythos 5.1. | S2 | "`any` and `tool` return a 400 error" |
| C14 | Forcing a tool skips thinking: the response starts with the tool_use block. | S2 | "Forcing a tool also skips thinking on every model that accepts forced tool use" |
| C15 | Claude often comments on what it is doing before calling tools; code must not rely on specific formatting of that text. | S2 | "not rely on specific formatting conventions" |
| C16 | `stop_reason` values: end_turn, max_tokens, stop_sequence, tool_use, pause_turn, refusal, model_context_window_exceeded. | S3 | "Claude completed its response naturally." / "Claude is calling a tool." |
| C17 | `stop_reason` is part of every successful response; it is not an error. | S3 | "part of every successful Messages API response" |
| C18 | If max_tokens cuts off an incomplete tool_use block, retry with a higher max_tokens. | S3 | "retry the request with a higher `max_tokens` value" |
| C19 | Check stop_reason in your response handling logic. | S3 | "Make it a habit to check the `stop_reason`" |
| C20 | An empty response with end_turn can happen, often after tool results. | S3 | "Sometimes Claude returns an empty response" |
| C21 | With thinking, Claude works through the problem before answering; thinking arrives in `thinking` blocks ahead of the response. | S4 | "arrives in `thinking` content blocks ahead of the response" |
| C22 | Thinking tokens are billed as output tokens and count toward max_tokens. | S4 | "billed as output tokens, even when the thinking text isn’t returned" |
| C23 | Thinking text is a summary, never the raw chain of thought; `display: "omitted"` (default on many models) returns an empty field. | S4 | "what you see is never the raw chain of thought" |
| C24 | Adaptive thinking lets Claude determine when and how deeply to think. | S4 | "lets Claude determine when and how deeply to think" |
| C25 | Interleaved thinking: Claude thinks between tool calls and reasons about each tool result. | S4 | "think between tool calls, reasoning about each tool result before acting on it" |
| C26 | Manual extended thinking supports only tool_choice auto or none. | S4 | "only supports `tool_choice: {\"type\": \"auto\"}` (the default) or" |
| C27 | Temperature controls randomness. Even at 0, results are not fully deterministic; identical inputs can give different outputs. | S5 | "Even with temperature set to 0, the results will not be fully deterministic" |

## Not on the page

No prices. No per-model token counts of the tool-use system prompt. The example (a login health check agent) is invented and says so.
