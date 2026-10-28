# Voices fact check: harness / agent-loop (round 1)

Each Layman and Bangla panel was compared with the Technical panel of the same block. Checker did not write the voices.

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What a harness is | Layman | PASS | Same facts, cite 1 only (Technical cites 1). "It cannot open a file or run a command by itself" restates Technical "To change a file or run a command, it needs software around it". "Six topics" matches. |
| What a harness is | Bangla | PASS | Same facts, cite 1. harness stays in English. |
| How the loop works | Layman | PASS | The 4 steps restate S2 loop of Technical, cite 2. Stop on no tool request, three phases (cite 1) match. |
| How the loop works | Bangla | PASS | Same facts, cites 1, 2. Claude Code in English. |
| How the loop stops | Layman | PASS | Two limits, error type, last message content, success-only text, `Esc`: all in Technical, cites 1, 2. Leaves out "more context / different approach" (allowed). |
| How the loop stops | Bangla | PASS | `max_turns`, `max_budget_usd`, `error_max_turns`, `error_max_budget_usd`, `ResultMessage`, `result`, subtype, session ID, `Esc` stay in English. Cites 1, 2. আপনি used. |
| What a tester can check | Layman | PASS | Tutorial advice; same 5 cases as Technical, no new fact. |
| What a tester can check | Bangla | PASS | Same 5 cases, no new fact. |

Note: the Technical FAILs 1 and 6 of `harness-agent-loop.factcheck.md` do not touch the voices (the lede has no voices; bullet 3 has no Layman or Bangla cite to change).

## Round 2 (2026-10-28)

The fixes changed only the lede (no voices) and the Technical bullet 3 (new cite 2). Layman and Bangla of "What a harness is" cite only 1, which Technical still cites. No new fact in any panel. `npm test` voice-source check passes. PASS.

Open FAILs: 0
