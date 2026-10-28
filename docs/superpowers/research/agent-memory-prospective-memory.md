# Agent Memory: Prospective Memory — research notes

Date: 2026-10-28

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | prospective memory | APA Dictionary of Psychology | https://dictionary.apa.org/prospective-memory | 2026-10-28 |
| S2 | PM-Bench: Evaluating Prospective Memory in LLM Agents, Liu et al. | arXiv 2607.12385 | https://arxiv.org/abs/2607.12385 | 2026-10-28 |
| S3 | Run prompts on a schedule | Anthropic (Claude Code docs) | https://code.claude.com/docs/en/scheduled-tasks | 2026-10-28 |
| S4 | Generative Agents: Interactive Simulacra of Human Behavior, Park et al. | arXiv 2304.03442 (UIST 2023) | https://arxiv.org/abs/2304.03442 | 2026-10-28 |
| S5 | Cognitive Architectures for Language Agents (CoALA), Sumers, Yao, Narasimhan, Griffiths | arXiv 2309.02427 (TMLR) | https://arxiv.org/abs/2309.02427 | 2026-10-28 |

The S2 and S4 quotes come from the HTML full texts at https://arxiv.org/html/2607.12385 and https://arxiv.org/html/2304.03442.

## Claims

| # | Claim (plain words) | Source | Exact quote (under 40 words, verbatim) |
|---|---|---|---|
| 1 | Psychology origin: prospective memory is to remember to do a thing later. | S1 | "remembering to do something in the future, such as taking one’s medicine later." |
| 2 | Its opposite is memory of past events (retrospective memory). | S1 | "Prospective memory contrasts with retrospective memory, or remembering past events." |
| 3 | For an agent: do a planned action at the right future cue, while it does other work. | S2 | "the ability to execute an intention at a specific future cue or state while other activities are ongoing." |
| 4 | There are two kinds: triggered by an event, and triggered by a time. | S2 | "Classic work distinguishes event-based and time-based prospective memory" |
| 5 | To remember the task and to act at the right time are two different things to test. | S2 | "A core design goal of PM-Bench is to separate what the agent remembers from when it acts." |
| 6 | Current agents are weak at this: the best agent in the benchmark had an F1 score of 65.1%. | S2 | "the best method, a GPT-5.4 agent, reaches only 65.1% F1 score under our evaluation." |
| 7 | No one method was best for all models. | S2 | "no single strategy for improving prospective memory dominates across models." |
| 8 | In Claude Code, you can ask for a one-time reminder in plain words. The task deletes itself after it runs. | S3 | "For one-shot reminders, describe what you want in natural language instead of using `/loop`. Claude schedules a single-fire task that deletes itself after running." |
| 9 | Session tasks fire only while Claude Code runs and is idle. | S3 | "Tasks only fire while Claude Code is running and idle. Closing the terminal or letting the session exit stops them firing." |
| 10 | A missed time fires once later, not once for each missed run. | S3 | "If a task's scheduled time passes while Claude is busy on a long-running request, it fires once when Claude becomes idle, not once per missed interval." |
| 11 | Recurring tasks stop after 7 days. | S3 | "Recurring tasks automatically expire 7 days after creation." |
| 12 | Times use the local timezone. | S3 | "All times are interpreted in your local timezone." |
| 13 | A task can run at a time a little different from its schedule (jitter). | S3 | "A scheduled task can run at a different time than its schedule says." |
| 14 | Generative Agents keep plans: future actions with a place, a start time, and a duration. | S4 | "Plans describe a future sequence of actions for the agent, and help keep the agent’s behavior consistent over time. A plan includes a location, a starting time, and a duration." |
| 15 | CoALA has working memory and three long-term memories (episodic, semantic, procedural); no prospective memory. | S5 | "These include short-term working memory and several long-term memories: episodic, semantic, and procedural." |
| 16 | PM-Bench time-based cue: a target time or an execution window. | S2 | "the current step time matches the target time or falls within the allowed execution window" |
| 17 | Claude Code's scheduler checks for due tasks and enqueues them. | S3 | "The scheduler checks every second for due tasks and enqueues them at low priority." |

## Notes

- CoALA, the RAG paper, and the LangChain memory overview do not define prospective memory. The term comes from psychology (S1). PM-Bench (S2) applies it to LLM agents.
- S2 is a preprint (arXiv, July 2026), not yet peer reviewed. Its numbers (claim 6) are for its own benchmark and its eight models. Say "in one 2026 benchmark", not "agents fail 35% of the time".
- S2 also compares agent setups, for example a "todo-ledger" and a "heartbeat" that wakes the agent at intervals. These are the paper's own names.
- In S3, the scheduler is outside the model: Claude Code stores the task and sends the prompt when it is due. The model itself does not "remember" the time. The page must make this clear. Session tasks are not durable; S3 points to cloud and Desktop scheduled tasks for durable scheduling.
- S3 claim 13: recurring tasks run late, by up to half the gap to the next run and at most 30 minutes; one-shot tasks on the hour or half hour run a little early (same page). Check the exact rule on the page before you write numbers.
- Test ideas (tutorial's own advice, no cite): ask for a reminder at a time and check it fires once, near that time, in the right timezone; cancel or move a reminder and check the old one does not fire; keep the agent busy at the due time and check it fires once after; close the session and check what happens; with an event-based intention ("when the build fails, tell me"), make the event happen during other work.
