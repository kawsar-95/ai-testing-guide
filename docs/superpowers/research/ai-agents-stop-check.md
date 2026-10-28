# Research notes: How AI Agents Work, The Stop Check

Page: `content/ai-agents/stop-check.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S2 | CLI reference | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/cli-reference | 2026-10-28 |
| S3 | Hooks reference | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/hooks | 2026-10-28 |
| S4 | Running agents | OpenAI (Agents SDK docs) | https://openai.github.io/openai-agents-python/running_agents/ | 2026-10-28 |
| S5 | Graph API overview | LangChain (LangGraph docs) | https://docs.langchain.com/oss/python/langgraph/graph-api | 2026-10-28 |
| S6 | Handling stop reasons | Anthropic (Claude API docs) | https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons | 2026-10-28 |
| S7 | Building effective agents | Anthropic (Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |
| S8 | src/agents/run_config.py | OpenAI (openai-agents-python on GitHub) | https://github.com/openai/openai-agents-python/blob/main/src/agents/run_config.py | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | The loop continues until Claude gives a response with no tool calls; then the final result comes. | S1 | "until it produces a response with no tool calls" |
| C2 | A turn is one round trip; turns go on until output has no tool calls. | S1 | "Turns continue until Claude produces output with no tool calls" |
| C3 | Count each tool turn plus one for the final text-only response in `max_turns`; otherwise `error_max_turns` and no final response. | S1 | "plus one for the final text-only response" |
| C4 | `max_turns` and `max_budget_usd`: default no limit. | S1 | "No limit" |
| C5 | Without limits the loop runs until Claude finishes; can run long on open-ended prompts; a budget is a good default for production. | S1 | "Setting a budget is a good default for production agents." |
| C6 | At a limit, the SDK returns a ResultMessage with an error subtype. | S1 | "returns a `ResultMessage` with a corresponding error subtype" |
| C7 | Subtypes: success, error_max_turns, error_max_budget_usd, error_during_execution, error_max_structured_output_retries. | S1 | table "Result subtype" |
| C8 | `result` only on success; all subtypes carry total_cost_usd, usage, num_turns, session_id. | S1 | "only present on the `success` variant" |
| C9 | Spend can pass the budget cap by up to one response's cost (plus running subagents). | S1 | "Spend can therefore pass the cap by up to the cost of that one response" |
| C10 | Subagent spend counts toward the budget cap. | S1 | "their spend counts toward the total" |
| C11 | Single-shot `query()` raises after an error result; the Claude Code process exits nonzero. | S1 | "The underlying Claude Code process also exits with a nonzero code." |
| C12 | `stop_reason` on the result: `end_turn`, `max_tokens`, `refusal`. | S1 | "Common values are `end_turn`" |
| C13 | Example: on `error_max_turns`, resume the session with a higher limit. | S1 | "Agent ran out of turns. Resume with a higher limit." |
| C14 | CLI `--max-turns`: print mode only; exits with an error at the limit; no limit by default. | S2 | "Exits with an error when the limit is reached. No limit by default." |
| C15 | CLI `--max-budget-usd`: print mode only; spend can pass the cap. | S2 | "Spend can pass the cap, so leave headroom." |
| C16 | Stop hook runs when the main agent finishes; not on user interrupt; API errors fire StopFailure. | S3 | "Does not run if the stoppage occurred due to a user interrupt." |
| C17 | Stop hook `decision: "block"` prevents Claude from stopping. | S3 | "Prevents Claude from stopping, continues the conversation" |
| C18 | `stop_hook_active` is true when already continuing due to a stop hook; check it to avoid endless blocking. | S3 | "avoid blocking on a condition that will never resolve" |
| C19 | After 8 consecutive stop-hook continuations, Claude Code ends the turn; count resets when Claude calls a tool. | S3 | "after stop hooks have continued the turn eight times in a row" |
| C20 | OpenAI: the loop ends when output is final output (desired type, no tool calls); tool calls re-run the loop. | S4 | "it produces text output with the desired type, and there are no tool calls" |
| C21 | OpenAI: exceeding `max_turns` raises `MaxTurnsExceeded`; `max_turns=None` disables the limit. | S4 | "we raise a MaxTurnsExceeded exception" |
| C22 | OpenAI: error handlers can return a controlled final output instead of the error. | S4 | "return a controlled final output instead of ending the run" |
| C23 | OpenAI: guardrail tripwire exceptions end a run. | S4 | "`InputGuardrailTripwireTriggered` is raised when an input guardrail's conditions are met" |
| C24 | LangGraph: recursion limit = max super-steps; default 1000 from v1.0.6; `GraphRecursionError`. | S5 | "the default recursion limit is set to 1000 steps" |
| C25 | LangGraph: `recursion_limit` is a top-level config key, not inside `configurable`. | S5 | "should not be passed inside the `configurable` key" |
| C26 | LangGraph: `RemainingSteps` lets a graph degrade gracefully before the limit. | S5 | "This allows for graceful degradation within your graph." |
| C27 | `max_tokens` stop reason: response hit the token limit. | S6 | "reached the `max_tokens` limit specified in your request" |
| C28 | `pause_turn`: server-side loop hit its iteration limit (default 10); send the response back to continue. | S6 | "The default limit is 10 iterations for each request." |
| C29 | `refusal` returns as HTTP 200, not an error. | S6 | "as a normal HTTP 200 response, not an error" |
| C30 | Agent tasks often end on completion; stopping conditions such as max iterations keep control. | S7 | "stopping conditions (such as a maximum number of iterations) to maintain control" |
| C31 | Agents get ground truth from the environment at each step. | S7 | "gain "ground truth" from the environment at each step" |
| C33 | OpenAI Agents SDK default `max_turns` is 10 (added by the fact-check). | S8 | "DEFAULT_MAX_TURNS = 10" |
| C32 | Agents can pause for human feedback at checkpoints or blockers. | S7 | "pause for human feedback at checkpoints or when encountering blockers" |

## Not checked / not on the page

The numeric default of `max_turns` in the OpenAI Agents SDK is not shown in the docs pages. The fact-check added it from the SDK source (S8, `DEFAULT_MAX_TURNS = 10`). S2 gives "No limit by default" only for `--max-turns`, not for `--max-budget-usd`.
