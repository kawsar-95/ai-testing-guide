# Fact check: How AI Agents Work, The LLM Decides

Page: `content/ai-agents/llm-decides.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | yes | Anthropic docs |
| 2 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools | yes | Anthropic docs |
| 3 | https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons | yes | Anthropic docs |
| 4 | https://platform.claude.com/docs/en/build-with-claude/thinking | yes | Anthropic docs |
| 5 | https://platform.claude.com/docs/en/about-claude/glossary | yes | Anthropic docs |
| 6 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |

Each source 1–6 is cited at least one time. Each cite number has a source. The 6 URLs are all different (sources 1 and 2 are two different pages), so no merge was needed.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Claude decides when to call a tool from the request and the tool's description. | 1 | PASS | "based on the user’s request and the tool’s description" |
| 2 | Default `tool_choice` `auto`: each turn, call a tool or respond directly. | 1 | PASS | "determines on each turn whether to call a tool or respond directly" |
| 3 | Claude picks a tool when the request matches the tool's described use and the answer is not in context. | 1 | FAIL, fixed | "the answer isn’t already in context" |
| 4 | SDK loop: text, one or more tool calls, or both. | 6 | PASS | "It may respond with text, request one or more tool calls, or both." |
| 5 | Client tool: `stop_reason: "tool_use"` with `tool_use` blocks; your code runs it and returns a `tool_result`. | 1 | FAIL, fixed | "Claude responds with `stop_reason: \"tool_use\"`" |
| 6 | Loop goes on until a response with no tool calls. | 6 | PASS | "until it produces a response with no tool calls" |
| 7 | Claude often comments before calling a tool. | 2 | PASS | "Claude often comments on what it’s doing" |
| 8 | Thinking block appears when thinking is on; on many current models (Opus 5.5) thinking is on by default. | 4 | FAIL, fixed | "thinking is already on and needs no configuration" |
| 9 | `stop_reason` is in every successful response; not an error; says why Claude stopped. | 3 | PASS | "part of every successful Messages API response" |
| 10 | Stop reason table: `end_turn`, `tool_use`, `max_tokens`, `stop_sequence`, `pause_turn`, `refusal`, `model_context_window_exceeded`. | 3 | PASS | "A server-tool loop reached its iteration limit." (all 7 values match the quick reference) |
| 11 | `tool_choice`: `auto` (default with tools), `any`, `tool`, `none` (default with no tools). | 2 | PASS | "This is the default value when no `tools` are provided." |
| 12 | With `any` or `tool`, the API prefills; no text before `tool_use`. | 2 | PASS | "the API prefills the assistant message to force a tool" |
| 13 | A forced call skips thinking. | 2 | PASS | "Forcing a tool also skips thinking on every model that accepts" |
| 14 | Opus 5.5, Sonnet 5.5, Fable 5.1, Mythos 5.1 reject `any`/`tool` with a 400 error. | 2 | PASS | table row: these 4 models, "`any` and `tool` return a 400 error" (exact list, no other model in the row) |
| 15 | The system prompt can steer the choice. | 1 | PASS | "This boundary is steerable through your system prompt." |
| 16 | With thinking on, Claude works through the problem; thinking in `thinking` blocks before the response. | 4 | PASS | "arrives in `thinking` content blocks ahead of the response" |
| 17 | Adaptive thinking: Claude decides when and how deeply to think. | 4 | PASS | "lets Claude determine when and how deeply to think" |
| 18 | Interleaved thinking: thinks between tool calls about each tool result. | 4 | PASS | "think between tool calls, reasoning about each tool result" |
| 19 | Thinking text is a summary, never the raw chain of thought. | 4 | PASS | "what you see is never the raw chain of thought" |
| 20 | `display: "omitted"` is the default on many models and gives an empty field. | 4 | PASS | "`\"omitted\"`, the default on many models, returns thinking blocks with an empty `thinking` field" |
| 21 | Thinking tokens billed as output tokens, count toward `max_tokens`. | 4 | PASS | "billed as output tokens ... count toward `max_tokens`" |
| 22 | SDK `effort` sets how much reasoning Claude applies. | 6 | PASS | "The `effort` option controls how much reasoning Claude applies." |
| 23 | Temperature controls randomness; even at 0 not fully deterministic. | 5 | PASS | "Even with temperature set to 0, the results will not be fully deterministic" |
| 24 | Example: call 1 ends `tool_use`, code runs the tool, sends the result. | 1 | PASS | see claim 5 |
| 25 | Example: call 2 has no tool call, loop ends. | 6 | PASS | see claim 6 |
| 26 | Missing required value: Claude may ask or may guess. | 1 | PASS | "it might also infer a reasonable value" |
| 27 | Check `stop_reason` in response handling. | 3 | PASS | "Make it a habit to check the `stop_reason`" |
| 28 | `max_tokens` cuts a `tool_use` block: retry with higher `max_tokens`. | 3 | PASS | "retry the request with a higher `max_tokens` value" |
| 29 | Do not rely on a fixed format of the text around a tool call. | 2 | PASS | "not rely on specific formatting conventions" |
| 30 | Thinking block can be empty. | 4 | PASS | see claim 20 |

Not on the page, so not checked as a claim: `budget_tokens`. The page does not name manual extended thinking. S4 marks it deprecated on Opus 4.6 and Sonnet 4.6 and gives a 400 error on 5.x models. The notes say the same.

## Fixes

- Claim 3: the sentence copied S1 almost word for word ("It calls a tool when the request maps to ..."). It is reworded.
- Claim 5: "and one or more `tool_use` blocks. Your code runs the operation and sends back a `tool_result`" copied a run of more than 10 words from S1. Reworded to "with at least one `tool_use` block. Your code runs the tool and returns its output in a `tool_result` block."
- Claim 8: "The thinking block appears only when thinking is on" suggested that thinking is off unless you turn it on. S4: on Opus 5.5, Sonnet 5.5, Fable 5.1, Mythos 5.1, Haiku 5.5 and others, thinking is on by default. Added "On many current models, such as Claude Opus 5.5, thinking is on by default" in all 3 voices.
- Example: the text said the team runs "the same prompt 50 times", and then "in one run" the prompt was different. Changed to "In another test" in all 3 voices.
- Added internal links to `/ai-agents/build-context/` and `/ai-agents/act-with-tools/` (both pages exist).

Re-checked after the fixes: all PASS.

## Other checks

| Check | Verdict |
|---|---|
| Official / primary sources only (Anthropic docs) | PASS |
| The invented example says it is invented | PASS |
| The JSON of "What a decision looks like" (empty `thinking`, `signature`, text, `tool_use`) agrees with S2 and S4 (`display: "omitted"`) | PASS |
| "Tutorial advice" tip has no `<Cite>` (all 3 voices) | PASS |
| No run of more than 10 words copied from a source (after the fix) | PASS |
| `## Key words` rows agree with the claims above | PASS |

Open FAILs: 0
