# Research notes: Guardrails

Page: `content/harness/guardrails.mdx`. Module: AI Harnesses. Date: 2026-10-28.

The base is the owner's image "AI Harnesses: 6 must know terms". Its card for this topic gives the scope and the example. Each fact on the page comes from the sources below.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Hooks reference | https://code.claude.com/docs/en/hooks |
| S2 | Guardrails (OpenAI Agents SDK) | https://openai.github.io/openai-agents-python/guardrails/ |
| S3 | Human-in-the-loop (OpenAI Agents SDK) | https://openai.github.io/openai-agents-python/human_in_the_loop/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Input and output guardrails | S2 | "Input guardrails run only for the first agent in the chain. / Output guardrails run only for the agent that produces the final output." |
| Tool guardrails | S2 | "Input tool guardrails run before the tool executes and can skip the call, replace the output with a message, or raise a tripwire." |
| Output tool guardrails | S2 | "Output tool guardrails run after the tool executes and can replace the output or raise a tripwire." |
| Tripwire | S2 | "The runner immediately raises an InputGuardrailTripwireTriggered or OutputGuardrailTripwireTriggered exception and halts agent execution." |
| Parallel default | S2 | "Parallel execution (default, run_in_parallel=True)" |
| Blocking mode | S2 | "If the guardrail tripwire is triggered, the agent never executes, preventing token consumption and tool execution." |
| Output after completion | S2 | "Output guardrails always run after the agent completes" |
| HITL | S3 | "pause agent execution until a person approves or rejects sensitive tool calls." |
| needs_approval | S3 | "Set needs_approval to True to always require approval or provide an async function that decides per call." |
| Interruptions | S3 | "execution pauses, and RunResult.interruptions ... contains" |
| Approve and resume | S3 | "Convert the result to a RunState with result.to_state(), call state.approve(...) or state.reject(...), and then resume with Runner.run(agent, state)" |
| Continue where it left off | S3 | "The resumed run continues where it left off" |
| Rejection text | S3 | "By default, a rejected tool call returns the SDK's standard rejection text back into the run." |
| Trusted storage | S3 | "Only deserialize snapshots from trusted storage" |
| Hooks definition | S1 | "Hooks are user-defined shell commands, HTTP endpoints, MCP tool calls, LLM prompts, or subagents that execute automatically at specific points in Claude Code's lifecycle." |
| Events | S1 | "PreToolUse: Before a tool call executes. Can block it / PostToolUse: After a tool call succeeds / PostToolUseFailure / UserPromptSubmit / Stop" |
| permissionDecision deny | S1 | "returns a permissionDecision of "deny" if it contains rm -rf." |
| Exit 0 no output | S1 | "Exit code 0 with no output means the hook has no decision to report, so the tool call continues through the normal permission flow." |
| Silent is not approval | S1 | "The hook can deny the call, but staying silent doesn't approve it." |
