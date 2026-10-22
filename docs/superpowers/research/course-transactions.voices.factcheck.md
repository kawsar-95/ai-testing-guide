# Voice fact-check: Transactions (round 1, 2026-10-22)

Page: `content/course/transactions.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a name, a condition, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same `n`. I did not re-check the sources: the Technical claims are not part of this report. I read the Bangla text for meaning and natural use: polite (আপনি), technical terms in English, hyphen between an English word and a Bangla suffix. The "Key words" section has no voices.

Mechanical checks (script and `git diff`):

| Check | Result |
|---|---|
| No `TODO-LAYMAN` or `TODO-BANGLA` left | PASS |
| No heading in `<Layman>` or `<Bangla>` | PASS |
| Each `<Cite n>` of a voice panel is cited by `<Technical>` of the same block | PASS |
| `<Technical>` text unchanged: `git diff -U0 content/course/transactions.mdx \| grep '^-' \| grep -v '^---'` shows no removed line | PASS |
| `node --test tests/voice-source.test.ts tests/course.test.ts` | PASS (29 tests) |

Notes:

- Section 3 Layman and Bangla replace the SQL block with 4 sentences. They match the code: debit account 1, savepoint, credit account 2 by mistake, `ROLLBACK TO SAVEPOINT`, credit account 3, `COMMIT`. No new fact. PASS.
- Section 4 Layman and Bangla replace the isolation table with 4 bullets. I checked each cell of the table. All 16 cells match. PASS.
- In the Layman text of the Repeatable Read bullet, "Suppose it tries to change a row ..." replaces "If it tries ...". The meaning is the same.
- The space before "গুলো" in 3 places became a hyphen (language style, not a FAIL).

| # | Section | Voice | What I compared | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | All-or-nothing; others do not see the steps; failure leaves no change [1]; visible together at the end [1]; the ACID page | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | Natural. |
| 3 | When you need it | Layman | One action with more than one statement; payment example; no half done [1] | PASS | Same. |
| 4 | When you need it | Bangla | Same | PASS | Same. |
| 5 | How it works | Layman | `BEGIN`, `COMMIT`, `ROLLBACK` [1] [3]; autocommit [2]; savepoint [5] [1]; `ROLLBACK TO` [1] [6]; `RELEASE SAVEPOINT` [5]; aborted state [1] | PASS | All cites match Technical. The savepoint example matches the SQL. |
| 6 | How it works | Bangla | Same | PASS | Terms stay in English. "টিকে থাকে" = durable. |
| 7 | Isolation levels | Layman | 4 phenomena [7]; 16 table cells; 3 distinct levels; Read Committed default; 3 level bullets; `BEGIN ISOLATION LEVEL` and `SET TRANSACTION` [2] [8] | PASS | Table cells, error text, and cites match. |
| 8 | Isolation levels | Bangla | Same | PASS | Table cells and conditions match. "ঘটা চলবে না" = must not happen. |
| 9 | A real-life example | Layman | Payment and enrolment; 40 and 41 at Read Committed; 40 at Repeatable Read [7] | PASS | Same numbers. |
| 10 | A real-life example | Bangla | Same | PASS | Same numbers. |
| 11 | Common mistakes | Layman | 4 mistakes with cite 7 | PASS | Same. The hedge "not likely to work" is kept. |
| 12 | Common mistakes | Bangla | Same | PASS | "সম্ভাবনা কম" = not likely. |
| 13 | What a tester can check | Layman | "Tutorial's own" and 4 ideas | PASS | Same 4 ideas. |
| 14 | What a tester can check | Bangla | Same | PASS | Same 4 ideas. |

No FAIL found, so there is no fix and no Re-check row.

## Re-check

I ran the mechanical checks again after the hyphen change. They pass.

Open FAILs: 0
