# Voice fact-check: Distributed Transactions (round 1, 2026-10-22)

Page: `content/course/distributed-transactions.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks (the `## Key words` section has no voices). For each block, I compared `<Layman>` and `<Bangla>` with the `<Technical>` panel of the same block. A fact, number, name, example, or cite that Technical does not give is a FAIL. So is a dropped hedge or a changed condition, a wrong or confusing Bangla meaning, and a Layman sentence that is long or not plain. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the Technical panel of the same block. I did not re-check the sources.

Structure checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left.
- No Markdown heading in any Layman or Bangla panel. The Technical panel of "How it works" has `###` headings. Layman and Bangla use the bold labels "Two-phase commit" and "Saga". This is allowed.
- Technical text is unchanged: `git diff -U0 content/course/distributed-transactions.mdx | grep '^-' | grep -v '^---'` shows no removed line.
- Cites: each Layman and Bangla cite is in the Technical panel of its block.

Notes:

- The text diagram of 2PC (a code block) is only in Technical. This is an omission, not a FAIL.
- The saga table (Choreography, Orchestration) is a bullet list in Layman and Bangla with the same cells and cites. PASS.
- "The docs say probability. Do not read it as a guarantee." keeps the hedge in both voices. PASS.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same definition, same ACID statement, same two ways. Cite 5 only. |
| 2 | In plain words | Bangla | PASS | Same. |
| 3 | When you need it | Layman | PASS | Same sentence. |
| 4 | When you need it | Bangla | PASS | Same meaning (order and payment example kept). |
| 5 | How it works | Layman | PASS | 2PC steps, commands, `max_prepared_transactions` is 0, the saga text, the pivot transaction, and both saga ways match. No new fact. |
| 6 | How it works | Bangla | FAIL (fixed) | (a) "যে manager prepared transaction দ্রুত বন্ধ করে না, তা ছাড়া একে 0-তে রাখতে docs পরামর্শ দেয়" reverses the condition. It reads as "except with a manager that does NOT close them promptly, keep it at 0". Technical says: without a manager that closes them promptly, keep it at 0. (b) "অবিবেচনাপ্রসূত" (rash, thoughtless) is a stiff word for "unwise". Fixed to "বুদ্ধিমানের কাজ নয়". |
| 7 | A real-life example | Layman | PASS | Same steps and the same two cites (6, 5). |
| 8 | A real-life example | Bangla | PASS | Same. "consistent হওয়ার কথা" keeps "should become consistent". |
| 9 | Common mistakes | Layman | PASS | 4 bullets, same cites, "very high probability" quote kept. |
| 10 | Common mistakes | Bangla | PASS | Same. |
| 11 | What a tester can check | Layman | PASS | 4 ideas and the line "not from a source" match. |
| 12 | What a tester can check | Bangla | PASS | Same. |

Language: polite (আপনি), commands and terms stay in English (`PREPARE TRANSACTION`, `VACUUM`, `pg_prepared_xacts`, saga, orchestrator).

## Re-check

| Row | Result |
|---|---|
| 6 (a) | "যে manager prepared transaction দ্রুত বন্ধ করে, এমন manager না থাকলে docs একে 0-তে রাখার পরামর্শ দেয়" means "if there is no manager that closes them promptly, the docs advise 0". It matches Technical. PASS |
| 6 (b) | "Docs বলে একটা transaction অনেকক্ষণ prepared রাখা বুদ্ধিমানের কাজ নয়" matches "The docs call it unwise to leave a transaction prepared for long". PASS |

Open FAILs: 0
