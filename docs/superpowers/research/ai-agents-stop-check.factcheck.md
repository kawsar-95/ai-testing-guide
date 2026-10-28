# Fact check: How AI Agents Work, The Stop Check

Page: `content/ai-agents/stop-check.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 2 | https://code.claude.com/docs/en/cli-reference | yes | Anthropic docs |
| 3 | https://code.claude.com/docs/en/hooks | yes | Anthropic docs |
| 4 | https://openai.github.io/openai-agents-python/running_agents/ | yes | OpenAI docs |
| 5 | https://docs.langchain.com/oss/python/langgraph/graph-api | yes | LangChain docs |
| 6 | https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons | yes | Anthropic docs |
| 7 | https://www.anthropic.com/engineering/building-effective-agents | yes | Anthropic engineering |
| 8 | https://github.com/openai/openai-agents-python/blob/main/src/agents/run_config.py | yes | OpenAI SDK repo (added by this check) |

Each source 1–8 is cited at least one time. Each cite number has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Agent SDK loop goes on until a response with no tool calls; that is the final result. | 1 | PASS | "until it produces a response with no tool calls" |
| 2 | OpenAI: text of the desired type with no tool calls is final output; tool calls re-run the loop. | 4 | PASS | "text output with the desired type, and there are no tool calls" |
| 3 | Anthropic: stopping conditions such as max iterations keep control. | 7 | FAIL, fixed | "it's also common to include stopping conditions" |
| 4 | Turn limit exists in Agent SDK, CLI, OpenAI SDK. | 1, 2, 4 | PASS | "You can cap the loop with `max_turns`" |
| 5 | Budget limit exists in Agent SDK and CLI. | 1, 2 | PASS | "`--max-budget-usd` ... Stop the run once estimated spend" |
| 6 | LangGraph recursion limit on super-steps. | 5 | PASS | "maximum number of super-steps the graph can execute" |
| 7 | A turn is one round trip: tool calls, tools run, results go back. | 1 | PASS | "A turn is one round trip inside the loop" |
| 8 | Agent SDK `max_turns`, `max_budget_usd`: default no limit; subtypes `error_max_turns`, `error_max_budget_usd`. | 1 | PASS | table "Max turns ... No limit" |
| 9 | CLI: both flags print mode only; default no limit; `--max-turns` exits with an error. | 2 | FAIL, fixed | "Exits with an error when the limit is reached. No limit by default." (only for `--max-turns`) |
| 10 | OpenAI `max_turns`: default on; `None` turns it off; `MaxTurnsExceeded`. | 8, 4 | FAIL, fixed | "DEFAULT_MAX_TURNS = 10" / "Pass `max_turns=None` to disable" |
| 11 | LangGraph default 1000 from version 1.0.6; `GraphRecursionError`. | 5 | PASS | "Starting in version 1.0.6, the default recursion limit is set to 1000" |
| 12 | `max_turns` must count one extra turn for the final text; else `error_max_turns`, no final response. | 1 | PASS | "plus one for the final text-only response" |
| 13 | Budget is checked after each response; overshoot up to one response. | 1 | PASS | "pass the cap by up to the cost of that one response" |
| 14 | `recursion_limit` is a top-level config key, not in `configurable`. | 5 | PASS | "should not be passed inside the `configurable` key" |
| 15 | 5 result subtypes; only `success` has `result`; all have `total_cost_usd`, `usage`, `num_turns`, `session_id`. | 1 | PASS | "All result subtypes carry `total_cost_usd`, `usage`, `num_turns`, and `session_id`" |
| 16 | Single-shot `query()` raises after an error result; process exits nonzero. | 1 | PASS | "The underlying Claude Code process also exits with a nonzero code." |
| 17 | `stop_reason` values `end_turn`, `max_tokens`, `refusal`. | 1 | PASS | "Common values are `end_turn` ..., `max_tokens` ..., and `refusal`" |
| 18 | OpenAI `error_handlers` return a controlled final output. | 4 | PASS | "return a controlled final output instead of ending the run" |
| 19 | LangGraph `RemainingSteps` lets a graph wrap up before the limit. | 5 | PASS | "tracks how many steps remain before hitting the recursion limit" |
| 20 | `Stop` hook runs when the main agent finishes, not after a user interrupt. | 3 | PASS | "Does not run if the stoppage occurred due to a user interrupt." |
| 21 | It can block the stop; `stop_hook_active`; 8 continuations in a row end the turn. | 3 | PASS | "continued the turn eight times in a row" |
| 22 | Example: CLI flags work in print mode only. | 2 | PASS | "(print mode only)" |
| 23 | Example: response that reached the cap still completes. | 1 | PASS | "The response that reaches the cap still completes" |
| 24 | Agents get ground truth from the environment at each step. | 7 | PASS | "gain "ground truth" from the environment at each step" |
| 25 | A budget is a good default for production agents. | 1 | PASS | "Setting a budget is a good default for production agents." |
| 26 | Overshoot also includes running subagents. | 1 | PASS | "plus anything that subagents still running at that moment spend" |
| 27 | Refusal is a normal HTTP 200 response; `max_tokens` means the token limit was hit. | 6 | PASS | "as a normal HTTP 200 response, not an error" |
| 28 | `pause_turn`: server-tool loop iteration limit, 10 by default; send the response back. | 6 | PASS | "The default limit is 10 iterations for each request." |

Fixes:

- Claim 3: the source says stopping conditions are "common", not that Anthropic advises them. Changed "Anthropic advises" to "Anthropic notes that agents often also have" in all 3 voices.
- Claim 9: the CLI reference gives "No limit by default" only for `--max-turns`. Changed the table cell, the Layman and Bangla lists, and the "No limit at all" mistake (all 3 voices) so the CLI default is stated for `--max-turns` only.
- Claim 10: the docs do not give the default, and "A limit is on" was not stated directly. Added source 8 (the SDK source, `DEFAULT_MAX_TURNS = 10`) and the value 10 in all 3 voices. Research notes updated (S8, C33).

Re-checked after the fixes: PASS.

## Other checks

| Check | Verdict |
|---|---|
| Every source cited; official or primary sources only | PASS |
| The example says it is invented | PASS |
| "Tutorial advice" tip has no `<Cite>` (all 3 voices) | PASS |
| No run of more than 10 words copied from a source | PASS |
| Internal link `/ai-concepts/agentic-loops/` exists | PASS |
| `## Key words` rows agree with the claims | PASS |

Open FAILs: 0
