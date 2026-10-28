# Voices fact check: Prospective Memory

Date: 2026-10-28

Page: `content/agent-memory/prospective-memory.mdx`. Checker: an agent that did not write the voices. Each Layman and Bangla panel was checked against the Technical panel of the same section for 3 things: no new facts, cites that are a subset of the Technical cites, and English technical terms in the Bangla text.

| Section | Voice | Verdict | Note |
|---|---|---|---|
| In plain words | Layman | PASS | Same facts. Cites 1, 2, 5 are in Technical (1, 2, 5). The CoALA cite was added with the Technical fix. |
| In plain words | Bangla | PASS | Same facts. Cites 1, 2, 5. The terms prospective/retrospective memory, cue, intention, CoALA, working/long-term memory, benchmark, and LLM agent stay in English. |
| Where it comes from | Layman | PASS | "Other experts have not reviewed it yet" restates "not peer reviewed". "A time on the clock" is a narrower restatement of the time cue, not a new fact. Cites 1, 2, 4. The negative claim is now marked as the tutorial's own check, the same as in Technical. |
| Where it comes from | Bangla | PASS | Same facts. Cites 1, 2, 4. The time cue was changed to "time window" so that it matches Technical. Time-based, event-based, preprint, peer review, location, and duration stay in English. |
| How an agent gets it | Layman | PASS | Same facts. "A little earlier or later" matches S3 (recurring tasks run late, one-shot tasks run early). It does not go beyond Technical's "a little different". Cites: 2, 3, 4. |
| How an agent gets it | Bangla | PASS | Same facts. The diagram is in English, the same as Technical. Cites 2, 3, 4. Scheduled task, idle, interval, timezone, recurring task, and heartbeat stay in English. |
| A real-life example | Layman | PASS | Same invented example and the same facts. Cites 2, 3. |
| A real-life example | Bangla | PASS | Same facts. Cites 2, 3. One-shot task, refactor, staging, suite, and session task stay in English. |
| Common mistakes | Layman | PASS | Same 7 mistakes. "Runs one time only" drops "not once per missed interval" but adds nothing. Cites 2, 3. |
| Common mistakes | Bangla | PASS | Same facts. 65.1% F1 is kept. Cites 2, 3. Scheduler, prompt, timezone, and strategy stay in English. |
| What a tester can check | Layman | PASS | Same 6 tutorial-advice bullets. No cites, the same as Technical. |
| What a tester can check | Bangla | PASS | Same bullets. No cites. Reminder, timezone, session, docs, and event-based intention stay in English. |
| Key words | — | PASS | The section has no voices, as the rule requires. |

PASS: 13. FIXED: 0 (the voice edits were made as part of the Technical fixes, so the voices match again).

Open FAILs: 0
