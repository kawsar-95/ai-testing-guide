# Fact check: AI Concepts, Agentic Loops

Page: `content/ai-concepts/agentic-loops.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was opened on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 2 | https://code.claude.com/docs/en/how-claude-code-works | yes | Anthropic docs |
| 3 | https://www.anthropic.com/engineering/building-effective-agents | yes | Anthropic engineering |
| 4 | https://claude.com/blog/building-agents-with-the-claude-agent-sdk | yes | Anthropic's own blog (vendor primary) |
| 5 | https://code.claude.com/docs/en/hooks | yes | Anthropic docs |
| 6 | https://code.claude.com/docs/en/cli-reference | yes | Anthropic docs |

Each source 1–6 is cited at least one time. Each cite number (1–6) has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Workflow: code sets the path. Agent: the model directs its own process and tools. | 3 | PASS | "orchestrated through predefined code paths" / "LLMs dynamically direct their own processes and tool usage" |
| 2 | Claude Code works through gather context, take action, verify results. | 2 | PASS | "it works through three phases: gather context, take action, and verify results" |
| 3 | The phases blend; Claude uses tools in each. | 2 | PASS | "These phases blend together. Claude uses tools throughout" |
| 4 | Blog cycle: gather context, take action, verify work, repeat. | 4 | PASS | "gather context -> take action -> verify work -> repeat" |
| 5 | SDK loop ends when Claude gives a response with no tool calls. | 1 | PASS | "until it produces a response with no tool calls" |
| 6 | Max turns and max budget limits exist, both off by default. | 1 | PASS | table: "Maximum tool-use round trips / No limit"; "Estimated spend at which the loop stops / No limit" |
| 7 | Steps 1–5: prompt + system prompt + tool definitions + history; text, tool calls, or both; SDK runs tools and returns results; repeat, a full cycle is a turn; final result with text, usage, cost. | 1 | PASS | "Claude receives your prompt, along with the system prompt, tool definitions, and conversation history" / "Each full cycle is one turn." / "ResultMessage with the final text, token usage, cost, and session ID" |
| 8 | Each tool result feeds back into the loop and informs the next decision. | 2 | PASS | "Each tool use returns information that feeds back into the loop, informing Claude's next decision." |
| 9 | Ground truth from the environment (test result, command output). | 3 | PASS | "gain 'ground truth' from the environment at each step (such as tool call results or code execution)" |
| 10 | `max_turns`/`maxTurns`, `max_budget_usd`/`maxBudgetUsd` table with "No limit". | 1 | PASS | see claim 6 |
| 11 | CLI `--max-turns`, `--max-budget-usd`, print mode only; `--max-turns` exits with an error. | 6 | PASS | "Limit the number of agentic turns (print mode only). Exits with an error when the limit is reached. No limit by default." / "(print mode only)" |
| 12 | Subtypes `success`, `error_max_turns`, `error_max_budget_usd`, `error_during_execution`, among others. | 1 | PASS | result subtype table (also lists `error_max_structured_output_retries`, so "among others" is right) |
| 13 | `result` only on `success`. | 1 | PASS | "only present on the success variant" |
| 14 | Every subtype carries cost, usage, `num_turns`, session ID. | 1 | PASS | "All result subtypes carry total_cost_usd, usage, num_turns, and session_id" |
| 15 | `Stop` hook runs when Claude finishes responding. | 5 | PASS | "Runs when the main Claude Code agent has finished responding." |
| 16 | `decision: "block"` with a `reason` keeps Claude working. | 5 | PASS | "\"block\" prevents Claude from stopping" / "reason: Required when decision is \"block\". Tells Claude why it should continue" |
| 17 | Example: fix failing tests: run suite, read errors, search, read, edit, run again. | 2 | PASS | "Run the test suite to see what's failing / Read the error output / Search for the relevant source files / Read those files / Edit the files / Run the tests again to verify" |
| 18 | SDK example: three tool turns and one text-only turn. | 1 | PASS | "That was four turns: three with tool calls, one final text-only response." |
| 19 | Esc stops Claude at once in an interactive session. | 2 | PASS | "Press Esc to stop Claude immediately." |
| 20 | `stop_hook_active` is `true` when Claude already continues because of a stop hook; check it to avoid blocking on a condition that never resolves. | 5 | PASS | "true when Claude Code is already continuing as a result of a stop hook. Check this value ... to avoid blocking on a condition that will never resolve." |
| 21 | Cap: after 8 stop-hook continuations in a row, the turn ends. | 5 | PASS | "after stop hooks have continued the turn eight times in a row, Claude Code overrides the next block and ends the turn" |
| 22 | Without limits, the loop runs until Claude finishes; open-ended prompts can run long; a budget is a good default for production agents. | 1 | PASS | "can run long on open-ended prompts" / "Setting a budget is a good default for production agents." |
| 23 | Spend is checked after each response; the response that reaches the cap completes; overshoot; leave headroom. | 1 | FAIL, fixed | "Spend can therefore pass the cap by up to the cost of that one response, plus anything that subagents still running at that moment spend before they stop." |
| 24 | `error_max_turns` has no final answer (`result`). | 1 | PASS | table: `error_max_turns` / `result` available: "No" |
| 25 | The loop ends when the model stops calling tools. | 1 | PASS | see claim 5 |
| 26 | Rules (linter, tests) are the best feedback; a model as judge is generally not very robust. | 4 | PASS | rules-based feedback is the strongest form, linting the example; LLM as judge "generally not a very robust method" |
| 27 | Agents trade cost for autonomy; errors can compound. | 3 | PASS | "The autonomous nature of agents means higher costs, and the potential for compounding errors." |

Fixed (claim 23): the page said spend passes the cap "by up to the cost of that response". The source adds the spend of subagents that still run. Added "plus what running subagents spend before they stop" in all 3 voices. Re-checked: PASS.

## Other checks

| Check | Verdict |
|---|---|
| "Tutorial advice" tip has no `<Cite>` (all 3 voices) | PASS |
| The invented example says it is invented ("This example is invented.") | PASS |
| The CI flags in the example (`--max-turns 30 --max-budget-usd 5.00`) are part of the invented example; the flags exist (S6) | PASS |
| The text diagram matches the SDK steps (S1) | PASS |
| `## Key words` rows agree with the claims above | PASS |

Open FAILs: 0
