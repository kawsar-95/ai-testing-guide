# Fact check: How AI Agents Work, Final Output

Page: `content/ai-agents/final-output.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 2 | https://code.claude.com/docs/en/agent-sdk/structured-outputs | yes | Anthropic docs |
| 3 | https://openai.github.io/openai-agents-python/running_agents/ | yes | OpenAI SDK docs |
| 4 | https://openai.github.io/openai-agents-python/results/ | yes | OpenAI SDK docs |
| 5 | https://openai.github.io/openai-agents-python/agents/ | yes | OpenAI SDK docs |
| 6 | https://openai.github.io/openai-agents-python/handoffs/ | yes | OpenAI SDK docs |
| 7 | https://docs.langchain.com/oss/python/langgraph/interrupts | yes | LangChain docs |
| 8 | https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/ | yes | OWASP GenAI |

Each source 1–8 is cited at least one time.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Loop continues until a response with no tool calls; then a result message | 1 | PASS | "until it produces a response with no tool calls" |
| 2 | `ResultMessage` marks the end of the loop | 1 | PASS | "marks the end of the agent loop" |
| 3 | OpenAI final-output rule: desired type and no tool calls | 3 | PASS | "text output with the desired type, and there are no tool calls" |
| 4 | Agents return free-form text by default | 2 | PASS | "Agents return free-form text by default" |
| 5 | A tool output can be the final response with no further model call | 5 | PASS | "used as the final response, without further LLM processing" |
| 6 | Handoff to another agent | 6 | PASS | "Handoffs are represented as tools to the LLM" |
| 7 | Pause and wait for a person | 7 | PASS | "pause graph execution ... and wait for external input" |
| 8 | A run can end without a result; the subtype tells which | 1 | FAIL, fixed | "Check the `subtype` field to determine whether the task succeeded" |
| 9 | `ResultMessage` has final text, usage, cost, session ID | 1 | PASS | "final text, token usage, cost, and session ID" |
| 10 | Subtype table (5 subtypes, `result` only on `success`) | 1 | PASS | "only present on the `success` variant" |
| 11 | Always check the subtype before reading `result` | 1 | PASS | "always check the subtype before reading it" |
| 12 | `stop_reason` values `end_turn`, `max_tokens`, `refusal` | 1 | PASS | "`refusal` (the model declined the request)" |
| 13 | JSON Schema in `outputFormat` / `output_format`; tools first; `structured_output` field | 2 | PASS | "the result message includes a `structured_output` field" |
| 14 | On a mismatch the agent gets an error and tries again | 2 | FAIL, fixed | "the `tool_result` carries `is_error: true` ... the agent calls `StructuredOutput` again" |
| 15 | No valid output within retry limit gives `error_max_structured_output_retries` | 2 | PASS | "No valid output remained after multiple attempts" |
| 16 | `success` with no `structured_output` is a failure | 2 | PASS | "Treat that case as a failure as well." |
| 17 | `final_output`: last agent; str without `output_type`, object with it | 4 | PASS | "the final output of the last agent that ran" |
| 18 | `output_type` makes the model use structured outputs | 5 | PASS | "tells the model to use structured outputs" |
| 19 | `final_output` is `None` on an approval interruption; approvals in `interruptions` | 4 | PASS | "paused on an approval interruption" |
| 20 | Past `max_turns` the SDK raises `MaxTurnsExceeded` | 3 | PASS | "we raise a MaxTurnsExceeded exception" |
| 21 | Handoff tool named `transfer_to_<agent_name>`; new agent gets whole history | 6 | PASS | "resolves to transfer_to_<agent_name>" / "see the entire previous conversation history" |
| 22 | Runner switches to the new agent and re-runs the loop | 3 | PASS | "we update the current agent and input, and re-run the loop" |
| 23 | `last_agent` tells which agent ran last | 4 | PASS | "last_agent contains the last agent that ran" |
| 24 | LangGraph interrupt needs a checkpointer; resume with `Command(resume=...)`; common use is approval before a critical action | 7 | PASS | "pause before a critical action and ask for approval" |
| 25 | Example run 2: `error_max_turns`, no `result` | 1 | PASS | see 10 |
| 26 | Example run 3: `stop_reason` `refusal`; check `stop_reason` to detect refusals | 1 | FAIL, fixed | "To detect refusals, check `stop_reason`" |
| 27 | Example: `last_agent` logged with `final_output` | 4 | PASS | see 23 |
| 28 | Improper output handling: downstream without enough validation | 8 | PASS | "insufficient validation, sanitization, and handling of the outputs" |
| 29 | Treat the model as any other user, zero trust | 8 | PASS | "adopting a zero-trust approach" |
| 30 | Shell → RCE, web page → XSS, SQL → SQL injection | 8 | PASS | "resulting in remote code execution" / "leading to SQL injection" |
| 31 | Filter handoff history with an input filter | 6 | PASS | "If you want to change this, you can set an input_filter" |

## Fixes

| # | Problem | Fix |
|---|---|---|
| 8 | "The final message must make this difference clear" is not what S1 says. S1 says the `subtype` tells success from a limit. | Now "The `subtype` of the final message tells you which case it is" (3 voices). |
| 14 | "The SDK ... asks again on a mismatch": S2 says the tool result is an error and the agent calls the tool again. | Now "On a mismatch, the agent gets an error and tries again" (3 voices). |
| 26 | The invented run 3 said a run can end with subtype `success` and `stop_reason: "refusal"`, and that a subtype check alone would miss it. No source states that these two values come together. | Run 3 now shows only `stop_reason = refusal`. The text says the docs tell you to check `stop_reason` to detect a refusal, so the team checks it as well as the subtype. The "would miss run 3" sentence is removed (3 voices). Research notes record the change. |

## Other checks

| Check | Verdict |
|---|---|
| Every source is cited; every cite has a source | PASS |
| Official / primary sources only | PASS |
| The example says it is invented | PASS |
| "Tutorial advice" tips have no `<Cite>` (3 voices) | PASS |
| No run of more than 10 words copied from a source | PASS |
| "A valid shape does not make the content safe" is the tutorial's inference from S8 (validation and sanitization), not a new fact | PASS |
| `## Key words` rows agree with the claims above | PASS |

Open FAILs: 0
