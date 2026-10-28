# Fact check: harness / guardrails (round 1)

Sources fetched fresh on 2026-10-28: S1 https://code.claude.com/docs/en/hooks (curl, `.md`). S2 and S3 with curl from the docs source of the site (github.com/openai/openai-agents-python `docs/guardrails.md` and `docs/human_in_the_loop.md`, branch `main`). The `run_in_parallel` and tool-guardrail passages were also checked on the live page https://openai.github.io/openai-agents-python/guardrails/ with WebFetch, with the same text. The checker did not write the page.

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "These controls can still miss errors." | none | N/A | The tutorial's own general statement, not a version, command, flag, or product behavior. |
| 2 | A guardrail is a check that runs beside the model and can stop the run | S2 | PASS | "Guardrails enable you to do checks and validations of user input and agent output." "The guardrail runs concurrently with the agent's execution." |
| 3 | Input guardrail: on the initial user input, only for the first agent | S2 | PASS | "Input guardrails run on the initial user input"; "Input guardrails run only for the first agent in the chain." |
| 4 | Output guardrail: on the final output, only for the agent that produces it | S2 | PASS | "Output guardrails run on the final agent output"; "run only for the agent that produces the final output." |
| 5 | Input tool guardrail: before a function tool runs; can skip, replace the output with a message, or raise a tripwire | S2 | PASS | "Input tool guardrails run before the tool executes and can skip the call, replace the output with a message, or raise a tripwire." |
| 6 | Output tool guardrail: after a function tool runs; can replace the output or raise a tripwire | S2 | PASS | "Output tool guardrails run after the tool executes and can replace the output or raise a tripwire." |
| 7 | On a tripwire, the runner raises `InputGuardrailTripwireTriggered` or `OutputGuardrailTripwireTriggered` and halts | S2 | PASS | "The runner immediately raises an `InputGuardrailTripwireTriggered` or `OutputGuardrailTripwireTriggered` exception and halts agent execution." Non-blocking note: S2 says this for an agent input or output. Tool guardrails raise `ToolInputGuardrailTripwireTriggered` and `ToolOutputGuardrailTripwireTriggered`. Optional fix: "When an input or output guardrail sets its tripwire, ...". |
| 8 | Input guardrail runs in parallel by default (`run_in_parallel=True`) | S2 | PASS | "Parallel execution (default, `run_in_parallel=True`): The guardrail runs concurrently with the agent's execution." |
| 9 | With `run_in_parallel=False` it completes before the agent starts; on a trip no tokens and no tool runs | S2 | PASS | "The guardrail runs and completes before the agent starts. If the guardrail tripwire is triggered, the agent never executes, preventing token consumption and tool execution." |
| 10 | Output guardrails always run after the agent completes | S2 | PASS | "Output guardrails always run after the agent completes" |
| 11 | HITL pauses the agent until a person approves or rejects a sensitive tool call | S3 | PASS | "Use the human-in-the-loop (HITL) flow to pause agent execution until a person approves or rejects sensitive tool calls." |
| 12 | `needs_approval` is `True` or an async function that decides for each call | S3 | PASS | "Set `needs_approval` to `True` to always require approval or provide an async function that decides per call." |
| 13 | Text diagram (draft, needs approval, pending, approved) | none | N/A | An illustration of the flow in rows 11, 14. No new fact. |
| 14 | No stored decision: the run pauses and `RunResult.interruptions` lists the pending calls | S3 | PASS | "If the approval rule requires approval and no decision for that tool call is stored, execution pauses, and `RunResult.interruptions` ... contains `ToolApprovalItem` entries" |
| 15 | `result.to_state()`, `state.approve(...)` or `state.reject(...)`, resume with `Runner.run(agent, state)` | S3 | PASS | "Convert the result to a `RunState` with `result.to_state()`, call `state.approve(...)` or `state.reject(...)`, and then resume with `Runner.run(agent, state)`" |
| 16 | The run continues where it stopped | S3 | PASS | "The resumed run continues where it left off" |
| 17 | A rejected call returns the standard rejection text, by default | S3 | PASS | "By default, a rejected tool call returns the SDK's standard rejection text back into the run." |
| 18 | Deserialize a saved state only from trusted storage, or after you verify integrity and ownership | S3 | PASS | "Only deserialize snapshots from trusted storage, or snapshots whose complete integrity and ownership the application has verified." |
| 19 | Claude Code has no "guardrail" object; hooks do the same job | S1 | PASS | The tutorial's framing. S1 has no "guardrail" term; S1 describes hooks that can block calls ("Before a tool call executes. Can block it"). |
| 20 | Hooks are user-defined shell commands, HTTP endpoints, MCP tool calls, LLM prompts, or subagents that run automatically at points in the lifecycle | S1 | PASS | "Hooks are user-defined shell commands, HTTP endpoints, MCP tool calls, LLM prompts, or subagents that execute automatically at specific points in Claude Code's lifecycle." |
| 21 | `UserPromptSubmit`: when a prompt is submitted, before Claude processes it | S1 | PASS | "When a prompt is submitted, before Claude processes it." |
| 22 | `PreToolUse`: before a tool call runs; can block it | S1 | PASS | "Before a tool call executes. Can block it" |
| 23 | `PostToolUse`: after a tool call succeeds | S1 | PASS | "After a tool call succeeds" |
| 24 | `PostToolUseFailure`: after a tool call fails | S1 | PASS | "After a tool call fails" |
| 25 | `Stop`: when Claude finishes its response | S1 | PASS | "When Claude finishes responding" |
| 26 | A `PreToolUse` hook can return `permissionDecision` `"deny"`, for example for `rm -rf` | S1 | PASS | "returns a `permissionDecision` of `"deny"` if it contains `rm -rf`" |
| 27 | Exit code 0 with no output: no decision, the normal permission flow continues | S1 | PASS | "Exit code 0 with no output means the hook has no decision to report, so the tool call continues through the normal permission flow." |
| 28 | The hook can deny, but no output does not approve | S1 | PASS | "The hook can deny the call, but staying silent doesn't approve it." |
| 29 | "What a tester can check" callout | none | N/A | Tutorial advice. |
| 30 | Key words: guardrail, tripwire, HITL, `needs_approval`, hook, `PreToolUse`, `permissionDecision` | S1, S2, S3 | PASS | Same as rows 2, 7, 11, 12, 20, 22, 26. |

## Round 2 (2026-10-28)

| # | Change | Verdict | Note |
|---|---|---|---|
| 7 | "When an input or output guardrail sets its **tripwire**, the runner raises `InputGuardrailTripwireTriggered` or `OutputGuardrailTripwireTriggered` and halts the agent <Cite n={2} />." | PASS | The optional fix is applied. S2: "If an agent input or output fails a guardrail ... The runner immediately raises an `InputGuardrailTripwireTriggered` or `OutputGuardrailTripwireTriggered` exception and halts agent execution." |

Open FAILs: 0
