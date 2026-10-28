# Fact check: Prospective Memory

Date: 2026-10-28

Page: `content/agent-memory/prospective-memory.mdx` (Technical text). Checker: an agent that did not write the page. Sources S2 (arXiv HTML) and S3 (Claude Code docs) were opened again on 2026-10-28. The S5 quote comes from the CoALA PDF.

| # | Claim on the page | Cite | Verdict (PASS/FAIL) | Quote or reason |
|---|---|---|---|---|
| 1 | Prospective memory is memory for a future action, for example to take a medicine later. | 1 | PASS | "remembering to do something in the future, such as taking one's medicine later." |
| 2 | Its opposite is retrospective memory, the memory of past events. | 1 | PASS | "Prospective memory contrasts with retrospective memory, or remembering past events." |
| 3 | For an agent: do a planned action at a specific future cue or state while other work continues. | 2 | PASS | "the ability to execute an intention at a specific future cue or state while other activities are ongoing." |
| 4 | An intention has a "what" and a "when"; the 3 pm example. | none | PASS | Not a sourced fact: tutorial framing and an invented example. Consistent with S2 claim 5. |
| 5 | The name follows the infographic "7 Types of Agent Memory". | none | PASS | Module framing, not a sourced fact. `agent-memory-sources.md` records that the infographic has no primary source. |
| 6 | CoALA has working memory and three long-term memories: episodic, semantic, procedural; no prospective memory. | none → 5 | FIXED → PASS | Was uncited and the page had no CoALA source. Added CoALA as source 5 and `<Cite n={5} />` in all 3 voices. "These include short-term working memory and several long-term memories: episodic, semantic, and procedural." |
| 7 | The topic comes from psychology; one benchmark applies it to LLM agents. | 1, 2 | PASS | S1 is the APA entry; S2 title "Evaluating Prospective Memory in LLM Agents". |
| 8 | APA defines prospective memory as remembering to do something in the future; contrasts with retrospective memory. | 1 | PASS | Same quotes as rows 1 and 2. |
| 9 | CoALA, the RAG paper, and the LangChain memory overview do not use this term. | none | FIXED → PASS | Uncited negative claim. Now marked "In the tutorial's own research" (3 voices). Supported by the terms table in `agent-memory-sources.md`. |
| 10 | PM-Bench is a 2026 benchmark that applies the term to LLM agents. | 2 | PASS | arXiv:2607.12385v1, listed "14 Jul 2026". |
| 11 | PM-Bench is a preprint on arXiv, not peer reviewed yet. | none | PASS | Factual status of an arXiv v1 listing; no venue given. Notes record it. |
| 12 | PM-Bench uses the classic split into time-based and event-based. | 2 | PASS | "Classic work distinguishes event-based and time-based prospective memory" |
| 13 | Time-based cue: "a clock time or a time interval". | 2 | FIXED → PASS | "Interval" can read as a repeat period, which S2 does not say. Changed to "a clock time or a time window" (Technical, Bangla). S2: "the current step time matches the target time or falls within the allowed execution window". |
| 14 | Event-based cue: an event or a state. | 2 | PASS | "a relevant cue is present either in the current narrative scene or in a queried state channel" |
| 15 | Table examples are the tutorial's own. | none | PASS | Marked on the page. |
| 16 | PM-Bench separates what the agent remembers from when it acts. | 2 | PASS | "A core design goal of PM-Bench is to separate what the agent remembers from when it acts." |
| 17 | A plan is a future sequence of actions that keeps behavior consistent over time. | 4 | PASS | "Plans describe a future sequence of actions for the agent, and help keep the agent's behavior consistent over time." |
| 18 | A plan has a location, a start time, and a duration. | 4 | PASS | "A plan includes a location, a starting time, and a duration." |
| 19 | The Generative Agents paper does not call plans "prospective memory"; plan as one way to store intentions. | none | PASS | Marked "Tutorial's own view". |
| 20 | A language model does not watch the clock and acts only on a prompt; a part outside the model stores the intention. | none | PASS | General reasoning that leads into rows 21–22; S3 shows the scheduler is outside the model. |
| 21 | A one-time reminder is described in plain words; Claude schedules a task that fires one time and deletes itself. | 3 | PASS | "For one-shot reminders, describe what you want in natural language instead of using `/loop`. Claude schedules a single-fire task that deletes itself after running." |
| 22 | Claude Code stores the task and sends the prompt when it is due. | none → 3 | FIXED → PASS | Was uncited. Added `<Cite n={3} />` in all 3 voices. "The scheduler checks every second for due tasks and enqueues them at low priority." |
| 23 | The diagram is the tutorial's own summary. | none | PASS | Marked on the page; it matches rows 21–22. |
| 24 | A task fires only while Claude Code runs and is idle; closing the terminal or session exit stops it. | 3 | PASS | "Tasks only fire while Claude Code is running and idle. Closing the terminal or letting the session exit stops them firing." |
| 25 | A missed task fires one time when idle, not once per missed interval. | 3 | PASS | "it fires once when Claude becomes idle, not once per missed interval." |
| 26 | A recurring task expires 7 days after creation. | 3 | PASS | "Recurring tasks automatically expire 7 days after creation." |
| 27 | Times use the local timezone. | 3 | PASS | "All times are interpreted in your local timezone." |
| 28 | A task can run at a time a little different from its schedule. | 3 | PASS | "A scheduled task can run at a different time than its schedule says." The jitter is up to 30 minutes for recurring tasks and up to 90 seconds early for one-shot tasks. "A little" is acceptable because no number is given. |
| 29 | Session tasks are not durable; the page points to cloud and Desktop scheduled tasks. | 3 | PASS | "use cloud scheduled tasks or Desktop scheduled tasks for durable scheduling." |
| 30 | Generative Agents keep plans with a start time. | 4 | PASS | Same as row 18. |
| 31 | PM-Bench compares setups such as a "todo-ledger" and a "heartbeat" that wakes the agent at intervals. | 2 | PASS | Todo-ledger: "an explicit in-context ledger of pending intentions"; heartbeat: "periodic monitoring nudges that remind the agent". |
| 32 | Example: the reminder at 4 pm fires late because Claude is busy. | 3 | PASS | Example marked as invented; the rule matches row 25 and "If Claude is busy when a task comes due, the prompt waits until the current turn ends." |
| 33 | Example: a closed terminal means the task does not fire. | 3 | PASS | Same as row 24. Advice is marked "Tutorial's own view". |
| 34 | "When the build turns red" is event-based; the agent must notice it during other work. | 2 | PASS | Rows 3 and 14. |
| 35 | Common mistakes: scheduler stores and sends; session tasks stop on exit. | 3 | PASS | Rows 22 and 24. |
| 36 | Common mistakes: inexact timing; a busy agent delays the task. | 3 | PASS | Rows 28 and 32. |
| 37 | Common mistakes: one fire after a busy period. | 3 | PASS | Row 25. |
| 38 | Common mistakes: 7-day expiry. | 3 | PASS | Row 26. |
| 39 | Common mistakes: local timezone. | 3 | PASS | Row 27. |
| 40 | Common mistakes: PM-Bench separates "what" and "when". | 2 | PASS | Row 16. |
| 41 | The best method reached only 65.1% F1. | 2 | PASS | "the best method, a GPT-5.4 agent, reaches only 65.1% F1 score under our evaluation." |
| 42 | No single strategy was best for all models. | 2 | PASS | "no single strategy for improving prospective memory dominates across models." |
| 43 | The numbers are for one 2026 benchmark and are not a general error rate. | none | PASS | A scope warning, not a new fact. |
| 44 | "What a tester can check" bullets. | none | PASS | Callout titled "Tutorial advice", with no cites. |
| 45 | Key words table. | none | PASS | Each row restates a checked claim (rows 1–3, 13–14, 18, 21, 26). |

## Other checks

| Check | Verdict | Note |
|---|---|---|
| Every source is cited | PASS | Sources 1–5 are each cited at least once. |
| Every cite has a source | PASS | The cites use n = 1–5, and the page has 5 sources. |
| Uncited statements | PASS | After the fixes, each uncited statement is marked as the tutorial's own, is an example, or is not a fact. |
| No fixed context-window sizes or cutoff dates | PASS | None on the page. |
| No long copied word runs | PASS | The longest run is "at a specific future cue or state" (row 3, 6 words). The other runs are short, and their wording is changed. |

PASS: 39 rows (+5 checks). FIXED → PASS: 4 rows (6, 9, 13, 22).

Open FAILs: 0
