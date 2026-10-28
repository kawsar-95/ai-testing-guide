# Research notes: How AI Agents Work, Final Output

Page: `content/ai-agents/final-output.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S2 | Get structured output from agents | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/structured-outputs | 2026-10-28 |
| S3 | Running agents | OpenAI Agents SDK (Python) | https://openai.github.io/openai-agents-python/running_agents/ | 2026-10-28 |
| S4 | Results | OpenAI Agents SDK (Python) | https://openai.github.io/openai-agents-python/results/ | 2026-10-28 |
| S5 | Agents | OpenAI Agents SDK (Python) | https://openai.github.io/openai-agents-python/agents/ | 2026-10-28 |
| S6 | Handoffs | OpenAI Agents SDK (Python) | https://openai.github.io/openai-agents-python/handoffs/ | 2026-10-28 |
| S7 | Interrupts | LangGraph Docs (LangChain) | https://docs.langchain.com/oss/python/langgraph/interrupts | 2026-10-28 |
| S8 | LLM05:2025 Improper Output Handling | OWASP GenAI Security Project | https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/ | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Claude Agent SDK loop ends when Claude answers with no tool calls; then a ResultMessage. | S1 | "until it produces a response with no tool calls" |
| C2 | ResultMessage marks the end of the loop: final text, usage, cost, session ID. | S1 | "marks the end of the agent loop" |
| C3 | Subtypes: success, error_max_turns, error_max_budget_usd, error_during_execution, error_max_structured_output_retries. `result` only on success. | S1 | "only present on the `success` variant" |
| C4 | `stop_reason` values include end_turn, max_tokens, refusal. | S1 | "`refusal` (the model declined the request)" |
| C5 | A few trailing system events can arrive after the ResultMessage; iterate to completion. | S1 | "iterate the stream to completion rather than breaking on the result" |
| C6 | Structured output: pass a JSON Schema via `outputFormat` / `output_format`; result has `structured_output`. | S2 | "the result message includes a `structured_output` field" |
| C7 | The SDK validates and re-prompts on mismatch; agent may use tools before. | S2 | "validates the output against it, re-prompting on mismatch" |
| C8 | If no valid output within retries: `error_max_structured_output_retries`. | S2 | "No valid output remained after multiple attempts" |
| C9 | `success` without `structured_output` must be treated as a failure. | S2 | "Treat that case as a failure as well." |
| C10 | `format` keyword is an annotation, not enforced. | S2 | "isn't enforced by the SDK's validator" |
| C11 | Agents return free-form text by default. | S2 | "Agents return free-form text by default" |
| C12 | OpenAI runner: final output = text of the desired type and no tool calls. | S3 | "there are no tool calls" |
| C13 | OpenAI runner: a handoff updates the current agent and re-runs the loop. | S3 | "we update the current agent and input, and re-run the loop" |
| C14 | Exceeding max_turns raises MaxTurnsExceeded; an error handler can return a controlled final output. | S3 | "we raise a MaxTurnsExceeded exception" |
| C15 | `final_output` is the output of the last agent that ran. | S4 | "contains the final output of the last agent that ran" |
| C16 | `final_output` is a string without output_type, or an object of that type. | S4 | "an object of type `last_agent.output_type`" |
| C17 | `final_output` is None if the run paused, for example on an approval interruption; pending approvals in `interruptions`. | S4 | "paused on an approval interruption" |
| C18 | `last_agent` is the last agent that ran. | S4 | "contains the last agent that ran" |
| C19 | Default output is `str`; `output_type` makes the model use structured outputs. | S5 | "use structured outputs instead of regular plain text responses" |
| C20 | `tool_use_behavior`: `stop_on_first_tool` uses the first tool output as final response. | S5 | "used as the final response, without further LLM processing" |
| C21 | A handoff lets an agent delegate to another agent. | S6 | "allow an agent to delegate tasks to another agent" |
| C22 | Handoffs are tools to the LLM, named `transfer_to_<agent_name>` by default. | S6 | "Handoffs are represented as tools to the LLM." |
| C23 | The new agent sees the entire previous conversation history by default; `input_filter` can change it. | S6 | "the entire previous conversation history" |
| C24 | LangGraph interrupts pause execution to wait for input; checkpointer required; resume with `Command(resume=...)`. | S7 | "pause graph execution at specific points" |
| C25 | Common use: pause before a critical action and ask for approval. | S7 | "pause before a critical action and ask for approval" |
| C26 | Improper output handling: insufficient validation of LLM outputs before they go downstream. | S8 | "insufficient validation, sanitization, and handling of the outputs" |
| C27 | Treat the model as any other user, zero-trust; validate responses. | S8 | "Treat the model as any other user, adopting a zero-trust approach" |
| C28 | Examples: output to shell/exec (RCE), JavaScript rendered (XSS), SQL not parameterized (SQL injection). | S8 | examples list |

Fact-check note (2026-10-28): no source says that a `success` result can carry `stop_reason: "refusal"`. The example now claims only that run 3 has `stop_reason` `refusal`, and that S1 says to check `stop_reason` to detect refusals ("To detect refusals, check `stop_reason`").

## Not on the page

No prices. Claude Agent SDK handoffs to other agents (subagents) are not described; the handoff part uses the OpenAI Agents SDK and LangGraph.
