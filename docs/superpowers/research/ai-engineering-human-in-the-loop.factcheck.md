# Fact-check: content/ai-engineering/human-in-the-loop.mdx

Checked 2026-10-28 by an agent that did not write the page. All 5 sources fetched fresh (LangGraph as the `.md` version of the same URL). The quotes of the research notes were not trusted: every quote below comes from the fetched text.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | HITL: the system stops at chosen points and waits for a person who approves, rejects, edits, or answers | none | PASS | The tutorial's own definition, supported in substance by S2: "This enables human-in-the-loop patterns where you need external input to proceed." |
| 2 | OWASP lists HITL as a defense against excessive agency: a person approves high-impact actions before they run | 1 | PASS | "Utilise human-in-the-loop control to require a human to approve high-impact actions before they are taken." |
| 3 | Anthropic: agents stop at checkpoints or at a blocker for human feedback | 4 | PASS | "Agents can then pause for human feedback at checkpoints or when encountering blockers." |
| 4 | NIST: an organization defines, assesses, and documents human oversight | 5 | PASS | Map 3.5: "Processes for human oversight are defined, assessed, and documented in accordance with organizational policies from the govern function." |
| 5 | 3 forms (approval, escalation, review) | none | PASS | Marked "In the tutorial's own grouping". |
| 6 | Interrupts pause the graph at a point and wait for outside input | 2 | PASS | "Interrupts allow you to pause graph execution at specific points and wait for external input before continuing." |
| 7 | State saved with the persistence layer; waits with no time limit until resume | 2 | PASS | "LangGraph saves the graph state using its persistence layer and waits indefinitely until you resume execution." |
| 8 | Resume with `Command`; its value becomes the return value of `interrupt()` | 2 | PASS | "The value passed to `Command(resume=...)` becomes the return value of the `interrupt` call" |
| 9 | `thread_id` tells the checkpointer which state to load | 2 | PASS | "set `config={"configurable": {"thread_id": ...}}` to tell the checkpointer which state to load." |
| 10 | Code: `from langgraph.types import interrupt, Command`, `Command[Literal[...]]` return, `Command(goto=...)`, `graph.invoke(Command(resume=True), config=...)` | 2 | PASS | The docs show `from langgraph.types import interrupt, Command`, `def approval_node(state: State) -> Command[Literal["proceed", "cancel"]]:`, `return Command(goto="proceed" if decision else "cancel")`, and `invoke(Command(resume={"approved": True}), config)`. |
| 11 | On resume the node runs from its start, so code before `interrupt()` runs again | 2 | PASS | "The node restarts from the beginning of the node where the interrupt was called when resumed, so any code before the interrupt runs again"; also "Whenever execution resumes, it starts at the beginning of the node." |
| 12 | Side effects before the interrupt should be idempotent, or move after it | 2 | PASS | "side effects called before interrupt should (ideally) be idempotent"; "Place side effects after interrupt calls". |
| 13 | Allow: no prompt; ask: confirmation; deny: block | 3 | PASS | "Allow rules let Claude Code use the specified tool without manual approval. Ask rules prompt for confirmation whenever Claude Code tries to use the specified tool. Deny rules prevent Claude Code from using the specified tool." |
| 14 | Order deny, ask, allow; first match wins; allow cannot make an exception to deny | 3 | PASS | "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome"; "An allow rule can't carve an exception out of a deny rule." |
| 15 | Approval can live in a downstream system or in the tool; social media "post" example | 1 | PASS | "This may be implemented in a downstream system (outside the scope of the LLM application) or within the LLM extension itself. For example, an LLM-based app that creates and posts social media content on behalf of a user should include a user approval routine within the extension that implements the 'post' operation." |
| 16 | Put the check in code the model cannot skip | none | PASS | Marked "Tutorial's own view". |
| 17 | NIST: post-deployment monitoring plans with user input, appeal and override, incident response | 5 | PASS | Manage 4.1: "Post-deployment AI system monitoring plans are implemented, including mechanisms for capturing and evaluating input from users and other relevant AI actors, appeal and override, decommissioning, incident response, recovery, and change management." |
| 18 | Anthropic names customer support as a fit, with tools for order history and refunds | 4 | PASS | "Tools can be integrated to pull customer data, order history, and knowledge base articles; Actions such as issuing refunds or updating tickets can be handled programmatically". |
| 19 | The shop rules (20 USD, trigger words, 2 %) | none | PASS | An invented example, not a claim about a source. |
| 20 | The duplicate-note bug: node runs again on approve; fix by moving the write after the interrupt | 2 | PASS | Same quotes as rows 11 and 12. |
| 21 | OWASP: authorization in downstream systems, not an LLM decision | 1 | PASS | "Implement authorization in downstream systems rather than relying on an LLM to decide if an action is allowed or not." |
| 22 | Side effects happen twice on resume | 2 | PASS | "it will be re-run multiple times when the node is resumed, potentially overwriting the initial update or creating duplicate records." |
| 23 | Allow does not override deny | 3 | PASS | Row 14. |
| 24 | Anthropic: stopping conditions, such as a cap on iterations | 4 | PASS | "it's also common to include stopping conditions (such as a maximum number of iterations) to maintain control." |
| 25 | NIST asks for feedback processes to report problems and appeal | 5 | PASS | Measure 3.3: "Feedback processes for end users and impacted communities to report problems and appeal system outcomes are established". |
| 26 | Too many prompts lead to "yes" without reading | none | PASS | Marked "Tutorial's own view". |
| 27 | Tester callout | none | PASS | Marked "the tutorial's own advice". |
| 28 | Key word "Human-in-the-loop": "A person approves actions with a high impact before they run" | 1 | FAIL, fixed | OWASP names HITL control as one way to require approval; it does not define HITL as approval only. The row also contradicts the page's own definition (approval, escalation, review). |
| 29 | Key word "Interrupt" | 2 | PASS | Row 6. |
| 30 | Key word "Checkpointer": saves the state so the graph can resume later | 2 | PASS | "the checkpointer writes the exact graph state so you can resume later, even when in an error state." |
| 31 | Key word "Idempotent": many runs, same result | 2 | PASS | "idempotency means that the same operation can be applied multiple times without changing the result beyond the initial execution." |
| 32 | Key word "Ask rule" | 3 | PASS | Row 13. |
| 33 | Key word "Human oversight": defined and documented processes | 5 | PASS | Row 4. |

Source types: OWASP GenAI, LangGraph docs, Claude Code docs, Anthropic (model vendor), NIST. All official. PASS.

Copy check (script, 8-word runs of the page vs each source): the only runs are the import lines of the code block (`from typing import Literal` / `from langgraph.types import interrupt, Command`), which are code, not prose. PASS.

## Re-check

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 28 | "A design where a person approves, corrects, or takes over steps of an AI system, for example a human approves high-impact actions before they run" | 1 | PASS | Matches the page definition; the cited part is the example: "require a human to approve high-impact actions before they are taken." |

Open FAILs: 0
