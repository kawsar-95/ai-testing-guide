# Fact check: How AI Agents Work, Guardrails

Page: `content/ai-agents/guardrails.mdx`. Checker: an agent that did not write the page. Date: 2026-10-28. Each source was downloaded on this date. The Anthropic pages were read as Markdown. The OpenAI Agents SDK and OWASP pages were read as the full live HTML, converted to text, not as WebFetch summaries.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://code.claude.com/docs/en/permissions | yes | Anthropic docs |
| 2 | https://code.claude.com/docs/en/agent-sdk/agent-loop | yes | Anthropic docs |
| 3 | https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls | yes | Anthropic docs |
| 4 | https://platform.claude.com/docs/en/api/errors | yes | Anthropic docs |
| 5 | https://openai.github.io/openai-agents-python/guardrails/ | yes | OpenAI Agents SDK docs |
| 6 | https://openai.github.io/openai-agents-python/human_in_the_loop/ | yes | OpenAI Agents SDK docs |
| 7 | https://code.claude.com/docs/en/sandboxing | yes | Anthropic docs. Page title is "Configure the sandboxed Bash tool" (fixed, was "Sandboxing"). |
| 8 | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | yes | OWASP Gen AI Security Project |

Each source 1–8 is cited at least one time. Each cite number (1–8) has a source.

## Claims (Technical text)

| # | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|
| 1 | Excessive Agency: damaging actions after unexpected, ambiguous, or manipulated output. | 8 | PASS | "in response to unexpected, ambiguous or manipulated outputs from an LLM" |
| 2 | Three root causes: excessive functionality, permissions, autonomy. | 8 | PASS | "excessive functionality; excessive permissions; excessive autonomy" |
| 3 | Tiered permission system; read-only tools need no approval inside the working directories. | 1 | PASS (fixed) | "Read-only \| File reads, Grep \| No, within the working directory" |
| 4 | Mode name: Bash and file edits ask first in "the default mode". | 1 | FAIL, fixed | "Labeled Manual in the CLI ... accepts `manual` as an alias". Now "Manual mode (the `default` mode)". |
| 5 | Bash asks first except a built-in set of read-only commands. | 1 | PASS (added in fix) | "Yes, except a built-in set of read-only commands" |
| 6 | Order deny, ask, allow; first match wins; allow cannot carve an exception out of deny. | 1 | PASS | "An allow rule can't carve an exception out of a deny rule." |
| 7 | A denied tool returns a rejection message; Claude tries another way or reports. | 2 | PASS | "typically attempts a different approach or reports that it couldn't proceed" |
| 8 | OpenAI `needs_approval`, pause, `interruptions`, approve/reject, resume. | 6 | PASS | "run results surface pending approvals as interruptions" |
| 9 | Agent SDK `default` mode sends approval calls to `canUseTool`; `dontAsk` denies calls that would prompt. | 2 | PASS | "Every call that would otherwise prompt is denied" |
| 10 | `max_turns`, `max_budget_usd`: no limit by default; subtypes `error_max_turns`, `error_max_budget_usd`. | 2 | PASS | "When either limit is hit, the SDK returns a ResultMessage with ... error subtype" |
| 11 | Spend can pass the cap by up to one response; leave headroom. | 2 | PASS | "Leave headroom for this when you set the cap." |
| 12 | SDK retries connection errors, rate limits, 5xx with exponential backoff, twice by default; `max_retries`. | 4 | PASS | "with exponential backoff, twice by default" |
| 13 | Tool failure: `tool_result` with `is_error: true`; say what went wrong and what to try next. | 3 | PASS | "include what went wrong and what Claude should try next" |
| 14 | Invalid tool call: Claude retries 2–3 times with corrections before apologizing. | 3 | PASS | "Claude will retry 2-3 times with corrections before apologizing" |
| 15 | Input guardrails on first user input, output guardrails on final output. | 5 | PASS | "Output guardrails run on the final agent output" |
| 16 | Tripwire raises `InputGuardrailTripwireTriggered` / `OutputGuardrailTripwireTriggered`. | 5 | PASS | "The runner immediately raises an InputGuardrailTripwireTriggered or OutputGuardrailTripwireTriggered" |
| 17 | Tool guardrails run on every guarded function-tool call. | 5 | PASS | "Tool guardrails run on every guarded function-tool invocation" |
| 18 | Input guardrails run in parallel by default; blocking mode: agent never runs. | 5 | PASS | "Parallel execution (default ...)" / "the agent never executes" |
| 19 | Bash sandbox is OS-enforced, two layers: filesystem and network isolation. | 7 | PASS | "The sandbox has two independent layers" |
| 20 | Default writes: working directory and subdirectories, added directories, temp directory. | 7 | PASS | "the current working directory and its subdirectories, any directories you've added" |
| 21 | Network goes through a proxy; allowed domains start empty. | 7 | PASS | "checks each host against your allowed domains, which start empty" |
| 22 | Example: deny on `git push` wins over a broad Bash allow. | 1 | PASS | see claim 6 |
| 23 | Example: Claude gets the rejection and reports it. | 2 | PASS | see claim 7 |
| 24 | Example: "the proxy blocks hosts that are not on the list". | 7 | FAIL, fixed | The source says the permission mode decides: Manual prompts, `bypassPermissions` allows, "`dontAsk` mode \| Refused". The example now runs in `dontAsk` mode (nobody in CI to answer a prompt), so the refusal is correct. |
| 25 | Example: `max_turns` and `max_budget_usd` off by default. | 2 | PASS | "No limit" |
| 26 | Example: instructive error like "Retry after 60 seconds" is recommended. | 3 | PASS | "Rate limit exceeded. Retry after 60 seconds." |
| 27 | Example: `deploy` with `needs_approval` pauses the run. | 6 | PASS | see claim 8 |
| 28 | OWASP: a human approves high-impact actions. | 8 | PASS | "require a human to approve high-impact actions before they are taken" |
| 29 | OWASP: authorization in downstream systems, not the LLM. | 8 | PASS | "rather than relying on an LLM to decide if an action is allowed" |
| 30 | OWASP: minimize functionality and permissions. | 8 | PASS | "Minimize extension functionality" / "Minimize extension permissions" |
| 31 | `bypassPermissions` only in isolated environments such as CI or containers. | 2 | PASS | "Reserve "bypassPermissions" for CI, containers, or other isolated environments." |
| 32 | Input guardrails only for the first agent; output only for the final agent. | 5 | PASS | "Input guardrails run only for the first agent in the chain." |
| 33 | OWASP: logging, monitoring, rate limiting limit the damage. | 8 | PASS | "Implement rate-limiting to reduce the number of undesirable actions" |

## Other checks

| Check | Verdict |
|---|---|
| Sources are official or primary only | PASS |
| The real-life example says it is invented | PASS |
| The tester tip has no cites and says it is tutorial advice | PASS |
| Internal links `/ai-concepts/guardrails/`, `/harness/permissions-and-sandboxing/` | PASS (both MDX files exist) |
| No run of more than 10 words copied from a source (`scripts/linux_overlap.py` on the downloaded text) | PASS. Longest run is 10 words ("Bash sandbox is a boundary that the operating system enforces", S7). |
| Title of source 7 | FAIL, fixed. Was "Sandboxing"; the page title is "Configure the sandboxed Bash tool". Fixed in the MDX and in the notes (S7). |

## Fixes

1. "How it works", Permissions (all 3 voices): "the default mode" is now "Manual mode (the `default` mode)", the mode label that the docs use. Added the two exceptions from S1: read-only tools run without approval only inside the working directories, and the built-in read-only Bash commands do not ask.
2. "A real-life example" (all 3 voices): the sandbox refusal of an unknown host is now tied to `dontAsk` mode, as S7 states. In other modes the user gets a prompt or the connection is allowed.
3. Source 7 title fixed in `page.sources` and in the research notes. A notes row (C25b) records the `dontAsk` claim.

Open FAILs: 0
