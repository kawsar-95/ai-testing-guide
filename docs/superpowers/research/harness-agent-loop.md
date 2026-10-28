# Research notes: Agent Loop

Page: `content/harness/agent-loop.mdx`. Module: AI Harnesses. Date: 2026-10-28.

The base is the owner's image "AI Harnesses: 6 must know terms". Its card for this topic gives the scope and the example. Each fact on the page comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | How Claude Code works | https://code.claude.com/docs/en/how-claude-code-works |
| S2 | How the agent loop works | https://code.claude.com/docs/en/agent-sdk/agent-loop |

## Claims

| Claim | Source | Quote |
|---|---|---|
| The harness is the layer around the model | S1 | "Claude Code is the layer around the model that provides the tools and manages the context the model sees. This surrounding layer is what the term agentic harness refers to." |
| Tools let the model act | S1 | "Without tools, Claude can only respond with text. With tools, Claude can act." |
| The SDK runs the loop | S2 | "the SDK runs the same execution loop that powers Claude Code: Claude evaluates your prompt, calls tools to take action, receives the results, and repeats until the task is complete." |
| Results feed back | S2 | "Each set of tool results feeds back to Claude for the next decision." |
| The loop ends with no tool call | S2 | "Turns continue until Claude produces output with no tool calls, at which point the loop ends and the final result is delivered." |
| Three phases | S1 | "it works through three phases: gather context, take action, and verify results. These phases blend together." |
| max_turns | S2 | "You can cap the loop with max_turns / maxTurns, which counts tool-use turns only." |
| max_budget_usd | S2 | "Max budget (max_budget_usd / maxBudgetUsd) / Estimated spend at which the loop stops" |
| Limit error subtypes | S2 | "the SDK returns a ResultMessage with a corresponding error subtype (error_max_turns or error_max_budget_usd)." |
| ResultMessage content | S2 | "ResultMessage: marks the end of the agent loop. Contains the final text result, token usage, cost, and session ID." |
| result only on success | S2 | "The result field holds the final text output and is only present on the success variant" |
| Esc stops Claude | S1 | "Press Esc to stop Claude immediately. The running tool call is canceled and Claude waits for your next instruction." |
| Interrupt to steer | S1 | "You can interrupt at any point to steer Claude in a different direction, provide additional context, or ask it to try a different approach." |
