# Voices fact check: harness / checkpointing (round 1)

Each Layman and Bangla panel was compared with the Technical panel of the same block. The checker did not write the voices.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| Why a harness saves state | Layman | PASS | Same facts, cites 4 and 5. "between sessions" restates "across interactions". |
| Why a harness saves state | Bangla | PASS | Same facts, cites 4 and 5. checkpoint, harness, Claude Code, LangGraph, undo stay in English. |
| Checkpoints in Claude Code | Layman | PASS | Same facts, cites 1 and 2. Non-blocking: "before each prompt that you send" drops "that starts a turn" (a message typed mid-turn has no checkpoint). Suggest "before each prompt that starts a turn". The callout line "cannot be undone" is scoped by the callout title; "cannot be undone by a rewind" is clearer. |
| Checkpoints in Claude Code | Bangla | PASS | Same facts, cites 1 and 2. `/rewind`, `Esc`, `claude --continue`, `claude --resume`, Bash, API, Git stay in English. Same two non-blocking notes as Layman. |
| Checkpoints in an SDK | Layman | FAIL | "Each run has a `thread_id`, and the saved states of that run are kept under it" gives a fact that Technical does not give, and it is wrong: a thread holds a sequence of runs (S4: "It contains the accumulated state of a sequence of runs."). Fix: "Each conversation is a thread with its own `thread_id`, and its saved states are kept under it <Cite n={4} />." |
| Checkpoints in an SDK | Bangla | FAIL | "প্রতিটা রানের একটা `thread_id` থাকে, আর সেই রানের সেভ করা অবস্থাগুলো তার নিচে রাখা হয়" has the same problem. Fix: "প্রতিটা কথোপকথন একটা thread, যার নিজের একটা `thread_id` থাকে, আর তার সেভ করা অবস্থাগুলো সেই `thread_id`-এর নিচে রাখা হয় <Cite n={4} />।" Option and function names stay in English. |
| What a tester can check | Layman | PASS | Tutorial advice. Same 4 tests. Non-blocking: "the run ID of another customer" names the wrong key; Technical says `thread_id`. Suggest "the thread ID of another customer". |
| What a tester can check | Bangla | PASS | Tutorial advice. Same 4 tests. `thread_id`, order lookup, refund, rewind stay in English. |

Note: the uncited claims in "Why a harness saves state" (the model keeps no state; Claude Code and LangGraph each do one kind) are also in the Layman and Bangla panels. They follow Technical FAILs 1 and 5 of `harness-checkpointing.factcheck.md`. Add the same cites in all 3 panels.

## Round 2 (2026-10-28)

- Why a harness saves state, Layman and Bangla: they now cite 6 (no state) and 1 and 4 (the two kinds). Technical cites 6, 1, and 4 in the same section. PASS.
- Checkpoints in an SDK, Layman: "Each conversation is a thread with its own `thread_id`, and its saved states are kept under it <Cite n={4} />." This restates the Technical "organized into threads" and the `thread_id` rule. It no longer says one run. PASS.
- Checkpoints in an SDK, Bangla: "প্রতিটা কথোপকথন একটা thread, যার নিজের একটা `thread_id` থাকে ..." Same fact, cite 4. thread and `thread_id` stay in English. PASS.
- What a tester can check, Layman: "Restart with the `thread_id` of another customer." This now matches Technical. The non-blocking note is closed.
- The non-blocking notes on "Checkpoints in Claude Code" ("each prompt that you send") stay open. They are not FAILs.

Open FAILs: 0
