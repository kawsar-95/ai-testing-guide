# Research notes: AI Concepts, Agentic Loops

Page: `content/ai-concepts/agentic-loops.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S2 | How Claude Code works | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/how-claude-code-works | 2026-10-28 |
| S3 | Building effective agents | Anthropic (Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |
| S4 | Building agents with the Claude Agent SDK | Anthropic (Claude blog) | https://claude.com/blog/building-agents-with-the-claude-agent-sdk | 2026-10-28 |
| S5 | Hooks reference | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/hooks | 2026-10-28 |
| S6 | CLI reference | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/cli-reference | 2026-10-28 |

Note: the URL `https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk` redirects (308) to S4.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Workflows follow predefined code paths. Agents direct their own process and tool use. | S3 | "Workflows are systems where LLMs and tools are orchestrated through predefined code paths." / "LLMs dynamically direct their own processes and tool usage" |
| C2 | Claude Code works in three phases: gather context, take action, verify results. The phases blend together. | S2 | "it works through three phases: gather context, take action, and verify results. These phases blend together." |
| C3 | The SDK loop: Claude evaluates the prompt, calls tools, gets results, repeats until done. | S1 | "Claude evaluates your prompt, calls tools to take action, receives the results, and repeats until the task is complete." |
| C4 | The Agent SDK blog states the loop as gather context, take action, verify work, repeat. | S4 | "gather context -> take action -> verify work -> repeat" |
| C5 | One turn is one round trip: tool calls, tool run, results back. The loop ends when Claude answers with no tool calls. | S1 | "Each full cycle is one turn. Claude continues calling tools and processing results until it produces a response with no tool calls." |
| C6 | Each tool result feeds back and informs the next decision. | S2 | "Each tool use returns information that feeds back into the loop, informing Claude's next decision." |
| C7 | Agents need ground truth from the environment at each step. | S3 | "gain “ground truth” from the environment at each step" |
| C8 | Example of a fix loop: run tests, read errors, search, read, edit, run tests again to verify. | S2 | "Run the tests again to verify" |
| C9 | max_turns / maxTurns caps tool-use turns. Default: no limit. | S1 | "Maximum tool-use round trips" / "No limit" |
| C10 | max_budget_usd / maxBudgetUsd stops the loop at an estimated spend. Default: no limit. | S1 | "Estimated spend at which the loop stops" |
| C11 | Without limits the loop runs until Claude finishes; a budget is a good default for production. | S1 | "Without limits, the loop runs until Claude finishes on its own" / "Setting a budget is a good default for production agents." |
| C12 | Result subtypes: success, error_max_turns, error_max_budget_usd, error_during_execution. | S1 | "`error_max_turns` | Hit the `maxTurns` limit before finishing" |
| C13 | `result` text is present only on success. All subtypes carry total_cost_usd, usage, num_turns, session_id. | S1 | "only present on the `success` variant" / "All result subtypes carry `total_cost_usd`, `usage`, `num_turns`, and `session_id`" |
| C14 | Spend can pass the budget cap by up to the cost of one response (plus running subagents). Leave headroom. | S1 | "Spend can therefore pass the cap by up to the cost of that one response" |
| C15 | CLI: --max-turns and --max-budget-usd, print mode only; --max-turns exits with an error at the limit. | S6 | "Limit the number of agentic turns (print mode only). Exits with an error when the limit is reached." |
| C16 | Teams add stopping conditions such as a maximum number of iterations. | S3 | "stopping conditions (such as a maximum number of iterations)" |
| C17 | Agents cost more and errors can compound; test in sandboxes with guardrails. | S3 | "higher costs, and the potential for compounding errors" / "extensive testing in sandboxed environments, along with the appropriate guardrails" |
| C18 | Ways to verify work: defined rules (best, for example linting), visual feedback, LLM as a judge (not very robust). | S4 | "providing clearly defined rules for an output" / "is generally not a very robust method" |
| C19 | Improve agents by studying failures and building a test set for evals. | S4 | "a representative test set for programmatic evaluations (or evals)" |
| C20 | A Stop hook runs when Claude finishes responding. `decision: "block"` stops Claude from stopping; `reason` says why. | S5 | "`\"block\"` prevents Claude from stopping" |
| C21 | `stop_hook_active` is true when Claude already continues because of a stop hook; check it to avoid a block that never resolves. | S5 | "Check this value or process the transcript to avoid blocking on a condition that will never resolve." |
| C22 | Claude Code caps stop-hook continuations at 8 in a row; the count resets when Claude calls a tool. | S5 | "after stop hooks have continued the turn eight times in a row, Claude Code overrides the next block and ends the turn" |
| C23 | The user can interrupt the loop at any point; Esc stops Claude immediately. | S2 | "You can interrupt at any point" / "Press Esc to stop Claude immediately." |

## Infographic seed: checks and corrections

| Seed claim | Verdict | Correction or note |
|---|---|---|
| Loop is "gather context, act, verify, done? if not, loop again" | Correct | Matches S2 (three phases that blend) and S4. S1 states the mechanical rule: the loop ends when Claude answers with no tool calls. |
| Stop rule is "done, budget, or max turns" | Partly correct, needs detail | Budget and max turns exist (S1, S6) but are **off by default** ("No limit"). A budget cap can be passed by up to one response's cost (S1). The loop can also end on an error (`error_during_execution`) or a user interrupt (S1, S2). "Done" means Claude itself decides: it gives a response with no tool calls; nothing outside checks the work unless you add a check, for example a Stop hook (S5). |

## Not on the page

No claim about token prices, model names, or other vendors' agent loops.
