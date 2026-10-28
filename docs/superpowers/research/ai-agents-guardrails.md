# Research notes: How AI Agents Work, Guardrails

Page: `content/ai-agents/guardrails.mdx`. Accessed 2026-10-28.

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | Configure permissions | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/permissions | 2026-10-28 |
| S2 | How the agent loop works | Anthropic (Claude Code docs, Agent SDK) | https://code.claude.com/docs/en/agent-sdk/agent-loop | 2026-10-28 |
| S3 | Handle tool calls | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls | 2026-10-28 |
| S4 | Claude API errors | Anthropic (Claude Platform docs) | https://platform.claude.com/docs/en/api/errors | 2026-10-28 |
| S5 | Guardrails | OpenAI Agents SDK documentation | https://openai.github.io/openai-agents-python/guardrails/ | 2026-10-28 |
| S6 | Human-in-the-loop | OpenAI Agents SDK documentation | https://openai.github.io/openai-agents-python/human_in_the_loop/ | 2026-10-28 |
| S7 | Configure the sandboxed Bash tool | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/sandboxing | 2026-10-28 |
| S8 | LLM06:2025 Excessive Agency | OWASP Gen AI Security Project | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | 2026-10-28 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | Claude Code uses a tiered permission system: read-only tools need no approval; Bash and file edits need approval in Manual (default) mode. | S1 | "Claude Code uses a tiered permission system to balance power and safety." |
| C2 | Rules are evaluated deny, then ask, then allow; first match wins. | S1 | "Rules are evaluated in order: deny, then ask, then allow." |
| C3 | An allow rule cannot carve an exception out of a deny rule. | S1 | "An allow rule can't carve an exception out of a deny rule." |
| C4 | Permission modes include default, acceptEdits, plan, auto, dontAsk, bypassPermissions. | S1 | modes table |
| C5 | You control whether tool calls run: auto-approve, block, or require approval. | S2 | "you control whether those calls are allowed to execute" |
| C6 | When a tool is denied, Claude gets a rejection message as the tool result and usually tries another approach or reports. | S2 | "Claude receives a rejection message as the tool result" |
| C7 | `bypassPermissions` is for isolated environments only. | S2 | "Use only in isolated environments" |
| C8 | `dontAsk` denies every call that would otherwise prompt; for headless agents. | S2 | "Every call that would otherwise prompt is denied" |
| C9 | max_turns and max_budget_usd: default no limit; error subtypes when hit. | S2 | "Estimated spend at which the loop stops" / "No limit" |
| C10 | Spend can pass the budget cap by up to one response. | S2 | "Spend can therefore pass the cap by up to the cost of that one response" |
| C11 | A PreToolUse hook can block a tool call; Claude receives the rejection. | S2 | "a `PreToolUse` hook that rejects a tool call prevents it from executing" |
| C12 | Report a tool execution error with `is_error: true`. | S3 | "Set to `true` if the tool execution resulted in an error." |
| C13 | Write instructive error messages that say what to try next. | S3 | "Write instructive error messages." |
| C14 | For invalid or missing parameters, Claude retries 2–3 times before apologizing. | S3 | "Claude will retry 2–3 times with corrections before apologizing" |
| C15 | The official SDK retries transient failures with exponential backoff, twice by default; `max_retries` configures it. | S4 | "with exponential backoff, twice by default" |
| C16 | 529 overloaded_error: API temporarily overloaded; 500: retry with exponential backoff. | S4 | "The API is temporarily overloaded." |
| C17 | Input guardrails run on the initial user input; output guardrails on the final agent output. | S5 | "Input guardrails run on the initial user input" |
| C18 | A failed guardrail trips a tripwire; the runner raises `InputGuardrailTripwireTriggered` or `OutputGuardrailTripwireTriggered`. | S5 | "the guardrail can signal this with a tripwire" |
| C19 | Input guardrails run only for the first agent; output only for the agent that produces the final output. | S5 | "Input guardrails run only for the first agent in the chain." |
| C20 | Tool guardrails run on every guarded function-tool call. | S5 | "Tool guardrails run on every guarded function-tool invocation" |
| C21 | Input guardrails run in parallel by default; in blocking mode, the agent never runs if the tripwire triggers. | S5 | "If the guardrail tripwire is triggered, the agent never executes" |
| C22 | `needs_approval` on a tool; the run pauses; approvals in `interruptions`; approve/reject; resume from state. | S6 | "The resumed run continues where it left off" |
| C23 | The Bash sandbox is an OS-enforced boundary with filesystem and network isolation. | S7 | "a boundary that the operating system enforces" |
| C24 | Default write access: the working directory and its subdirectories (plus added dirs and temp). | S7 | "read and write access to the current working directory and its subdirectories" |
| C25 | Network goes through a proxy; allowed domains start empty. | S7 | "your allowed domains start empty" |
| C25b | In `dontAsk` mode, the sandbox refuses a connection to a host outside the allowed domains (other modes prompt or allow). Checker fix 2026-10-28. | S7 | "`dontAsk` mode \| Refused" |
| C26 | Seatbelt on macOS, bubblewrap on Linux. | S7 | "uses bubblewrap for isolation" |
| C27 | Excessive Agency lets an LLM system perform damaging actions after unexpected, ambiguous, or manipulated outputs. | S8 | "the vulnerability that enables damaging actions to be performed" |
| C28 | Root causes: excessive functionality, permissions, autonomy. | S8 | "excessive functionality, excessive permissions, or excessive autonomy" (list) |
| C29 | Mitigations: minimize extensions and permissions, human approval for high-impact actions, authorization in downstream systems, rate limiting, logging and monitoring. | S8 | "require a human to approve high-impact actions before they are taken" |

## Unsure

- C28: the OWASP page lists the 3 root causes as headings; the quote is a paraphrase of the list, not a verbatim sentence.

## Not on the page

No prices or model names. Prompt injection details are on `/ai-concepts/guardrails/`; permissions and sandbox details on `/harness/permissions-and-sandboxing/`.
