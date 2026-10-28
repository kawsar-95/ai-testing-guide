# AI Engineering page: Human-in-the-Loop (research notes)

Writer notes for `content/ai-engineering/human-in-the-loop.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-human-in-the-loop/`. Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds no run of 8 or more words copied from these files. EUR-Lex (EU AI Act, Article 14) refused the automated fetch, so the page does not cite it.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | LLM06:2025 Excessive Agency (OWASP Gen AI Security Project) | https://genai.owasp.org/llmrisk/llm062025-excessive-agency/ | 2026-10-28 |
| S2 | Interrupts (LangGraph Docs) | https://docs.langchain.com/oss/python/langgraph/interrupts | 2026-10-28 |
| S3 | Configure permissions (Claude Code Docs) | https://code.claude.com/docs/en/permissions | 2026-10-28 |
| S4 | Building effective agents (Anthropic Engineering) | https://www.anthropic.com/engineering/building-effective-agents | 2026-10-28 |
| S5 | AI RMF Core, AI RMF 1.0 section 5 (NIST AI Resource Center) | https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A human approves high-impact actions before they run. | S1 | "Utilise human-in-the-loop control to require a human to approve high-impact actions before they are taken." |
| C2 | Approval can be in a downstream system or the tool; social media "post" example. | S1 | "This may be implemented in a downstream system (outside the scope of the LLM application) or within the LLM extension itself. For example, an LLM-based app that creates and posts social media content on behalf of a user should include a user approval routine within the extension that implements the 'post' operation." |
| C3 | Authorization in downstream systems, not an LLM decision. | S1 | "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not." |
| C4 | Agents pause for human feedback at checkpoints or blockers. | S4 | "Agents can then pause for human feedback at checkpoints or when encountering blockers." |
| C5 | Stopping conditions such as max iterations keep control. | S4 | "it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control." |
| C6 | Customer support fits agents; tools for order history; refunds. | S4 | "Tools can be integrated to pull customer data, order history, and knowledge base articles; Actions such as issuing refunds or updating tickets can be handled programmatically" |
| C7 | NIST: human oversight processes defined, assessed, documented. | S5 | "Map 3.5: Processes for human oversight are defined, assessed, and documented" |
| C8 | NIST: post-deployment plans include user input, appeal and override, incident response. | S5 | "Manage 4.1: Post-deployment AI system monitoring plans are implemented, including mechanisms for capturing and evaluating input from users and other relevant AI actors, appeal and override, decommissioning, incident response" |
| C9 | NIST: feedback processes to report problems and appeal. | S5 | "Measure 3.3: Feedback processes for end users and impacted communities to report problems and appeal system outcomes are established" |
| C10 | Interrupts pause and wait for external input. | S2 | "Interrupts allow you to pause graph execution at specific points and wait for external input before continuing." |
| C11 | State saved; waits indefinitely. | S2 | "When an interrupt is triggered, LangGraph saves the graph state using its persistence layer and waits indefinitely until you resume execution." |
| C12 | Resume with `Command`; value becomes the return of `interrupt()`. | S2 | "you resume execution by re-invoking the graph using `Command`, which then becomes the return value of the `interrupt()` call" |
| C13 | `thread_id` selects the saved state. | S2 | "`thread_id` is your pointer: set `config={"configurable": {"thread_id": ...}}` to tell the checkpointer which state to load." |
| C14 | On resume, the node restarts; code before `interrupt()` runs again. | S2 | "The node restarts from the beginning of the node where the interrupt was called when resumed, so any code before the interrupt runs again" |
| C15 | Side effects before the interrupt should be idempotent, or placed after. | S2 | "side effects called before interrupt should (ideally) be idempotent" / "Place side effects after interrupt calls" |
| C16 | Approval example: pause before a critical action; route on the answer. | S2 | "One of the most common uses of interrupts is to pause before a critical action and ask for approval." / `return Command(goto="proceed")` |
| C17 | Allow/ask/deny rules. | S3 | "Allow rules let Claude Code use the specified tool without manual approval. Ask rules prompt for confirmation ... Deny rules prevent Claude Code from using the specified tool." |
| C18 | Order deny, ask, allow; first match; allow cannot carve out of deny. | S3 | "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome" / "An allow rule can't carve an exception out of a deny rule." |

## Not on the page / doubts

- The 3 forms (approval, escalation, review) are marked as the tutorial's own grouping.
- The code sample is adapted from the LangGraph approval example. In the docs, `invoke` with `Command(resume=...)` and `stream_events` both resume; the page shows `invoke`, which the docs say "still works".
- The refund rules (20 USD, 2% review) and "too many prompts" are the tutorial's own example and view.
