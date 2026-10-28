# Fact check: harness / agent-loop (round 1)

Sources fetched fresh with curl on 2026-10-28 (Markdown form of each page) into /tmp/claude-1000/harness-check/: S1 How Claude Code works (`code.claude.com/docs/en/how-claude-code-works`), S2 How the agent loop works (`code.claude.com/docs/en/agent-sdk/agent-loop`). Checker did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: the loop stops when the task is done, when help is necessary, or when a limit is reached | none | FAIL | "When help is necessary" is in no source and in no section of the page. The body gives three ends: no tool call (S2), a limit (S2), an interrupt by a person (S1). Fix: "The loop stops when the model gives an answer with no tool call, when a limit is reached, or when a person interrupts it." (Each part is cited in the body.) |
| 2 | A model alone can only read and write text; it needs software around it to change a file or run a command | S1 (next sentences) | PASS | "Without tools, Claude can only respond with text. With tools, Claude can act: read your code, edit files, run commands" |
| 3 | The docs call this the agentic harness: the layer around the model that provides the tools and manages the context the model sees | S1 | PASS | "Claude Code is the layer around the model that provides the tools and manages the context the model sees. This surrounding layer is what the term agentic harness refers to." |
| 4 | Without tools Claude can only respond with text; with tools Claude can act | S1 | PASS | "Without tools, Claude can only respond with text. With tools, Claude can act" |
| 5 | Harness decides: which tools (bullet 1), what the model sees (bullet 2) | S1 | PASS | Follows from claim 3: "provides the tools and manages the context". |
| 6 | Harness decides what it does with each tool request (bullet 3) | none | FAIL | No cite. S2 supports it but the page does not cite S2 here. Fix: add `<Cite n={2} />` after the bullet. S2: "The SDK runs each requested tool and collects the results. ... You can use hooks to intercept, modify, or block tool calls before they run." |
| 7 | The six topics of this module are the parts of a harness | - | N/A | Site structure. `content/harness/` has 6 MDX files. |
| 8 | The Agent SDK runs the same loop that powers Claude Code; Claude evaluates the prompt, calls tools, receives results, repeats until complete | S2 | PASS | "the SDK runs the same execution loop that powers Claude Code: Claude evaluates your prompt, calls tools to take action, receives the results, and repeats until the task is complete" |
| 9 | Text diagram: request, model, tool call, harness runs tool, result back; no tool call gives final answer | S2 | PASS | Agrees with S2 steps 2-5 and the S2 diagram alt text: "Claude evaluates and either requests tool calls, whose results feed back into another evaluation, or returns the final answer" |
| 10 | Each set of tool results feeds back to Claude for the next decision | S2 | PASS | "Each set of tool results feeds back to Claude for the next decision." |
| 11 | Turns continue until output with no tool calls; then the loop ends and the final result is delivered | S2 | PASS | "Turns continue until Claude produces output with no tool calls, at which point the loop ends and the final result is delivered." |
| 12 | Three phases: gather context, take action, verify results; they blend together | S1 | PASS | "it works through three phases: gather context, take action, and verify results. These phases blend together." |
| 13 | A loop with no limit can run long and cost a lot | S2 | PASS | Framing; S2 default for both limits is "No limit", and S2 example comment "Prevent runaway sessions". |
| 14 | Table: `max_turns` / `maxTurns` limits the number of tool-use turns | S2 | PASS | "`max_turns` / `maxTurns`, which counts tool-use turns only" |
| 15 | Table: `max_budget_usd` / `maxBudgetUsd` is the estimated spend at which the loop stops | S2 | PASS | "Max budget (`max_budget_usd` / `maxBudgetUsd`) | Estimated spend at which the loop stops" |
| 16 | On a limit, the SDK returns a `ResultMessage` with subtype `error_max_turns` or `error_max_budget_usd` | S2 | PASS | "When either limit is hit, the SDK returns a `ResultMessage` with a corresponding error subtype (`error_max_turns` or `error_max_budget_usd`)." |
| 17 | `ResultMessage` marks the end of the loop; has final text, token usage, cost, session ID | S2 | PASS | "`ResultMessage`: marks the end of the agent loop. Contains the final text result, token usage, cost, and session ID." |
| 18 | `result` is only on the success variant; check the subtype first | S2 | PASS | "The `result` field holds the final text output and is only present on the `success` variant, so always check the subtype before reading it." |
| 19 | `Esc` stops Claude at once; the running tool call is canceled; Claude waits for the next instruction | S1 | PASS | "Press `Esc` to stop Claude immediately. The running tool call is canceled and Claude waits for your next instruction." |
| 20 | You can interrupt to give more context or ask for a different approach | S1 | PASS | "You can interrupt at any point to steer Claude in a different direction, provide additional context, or ask it to try a different approach." |
| 21 | What a tester can check (callout) | - | N/A | "Tutorial advice" callout, no cites. |
| 22 | Key words: Harness, Agent loop, Turn ("one round of the loop") | S1, S2 | PASS | S2: "A turn is one round trip inside the loop" |
| 23 | Key words: `max_turns`, `max_budget_usd`, `ResultMessage` | S2 | PASS | See 14-17. |

## Round 2 (2026-10-28)

- FAIL 1 (lede): now "The loop stops when the model gives an answer with no tool call, when a limit is reached, or when a person interrupts it." Each end is in the body with a cite: S2 "Turns continue until Claude produces output with no tool calls"; S2 "When either limit is hit, the SDK returns a `ResultMessage`"; S1 "Press `Esc` to stop Claude immediately". PASS.
- FAIL 6 (bullet 3): now "What the harness does with each tool request <Cite n={2} />." S2: "The SDK runs each requested tool and collects the results. ... You can use hooks to intercept, modify, or block tool calls before they run." PASS.

Open FAILs: 0
