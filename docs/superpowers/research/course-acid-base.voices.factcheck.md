# Voice fact-check: ACID and BASE (round 1, 2026-10-22)

Page: `content/course/acid-base.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, a name, a hedge, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>`, I checked that the Technical panel of the same section cites it. I did not re-check the sources: the Technical claims are in the report of the page. I read the Bangla for meaning and natural use (polite আপনি, technical terms in English). A Layman sentence is a FAIL if it is longer than 25 words. I measured the length with a script (cites and markup removed): no Layman sentence passes 25 words.

Checks:

- No TODO placeholder is left (`grep TODO`: 0).
- No heading in a Layman or Bangla panel (`npm test`, `tests/voice-source.test.ts`).
- The Technical text is unchanged: `git diff -U0 content/course/acid-base.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line.
- The "Key words" section has no voices.

Notes:

- Section 1, Layman and Bangla: the Technical table is a bullet list. The text "see the table above" is "see the list above" in the Mistakes section. The meaning is the same. PASS.
- Section 1: the Technical sentence "His slides contrast it with ACID" is not in the voices. This is an omission, not a FAIL.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | ACID is four properties that make transactions reliable [7]; a transaction is a group of steps treated as one operation [1]; the four properties, with the same cites; BASE is "Basically Available, Soft-state, Eventual consistency" in the 2000 keynote of Brewer [8]; it accepts weaker consistency and puts availability first [8] | "ACID is a set of four properties that make database transactions reliable [7]" ... "BASE accepts weaker consistency (stale data is acceptable) and puts availability first [8]" | PASS | - |
| 2 | In plain words | Bangla | Same claims and same cites [7][1][5][2][8] | Same sentences as row 1 | PASS | OK |
| 3 | When you need it | Layman | Test stored data (payment, order, stock count, feed); ask whether two copies that disagree briefly is a bug or an accepted design | "if two copies of the data disagree for a short time, is that a bug or an accepted design?" | PASS | - |
| 4 | When you need it | Bangla | Same | Same | PASS | OK |
| 5 | How it works | Layman | `ROLLBACK` cancels the updates so far [1]; Serializable is strictest and acts like one-at-a-time [2]; dirty read [2]; Read Committed is the PostgreSQL default and two reads can differ [2]; "adequate for many applications, but not for all cases" [2]; retry at Serializable [2]; write-ahead log is flushed before the data files, recovery from the log [3]; Dynamo has no isolation guarantees, single-key updates only, eventually consistent, background propagation [7]; the paper does not use the word BASE (tutorial's own framing) | The 4 paragraphs of the section | PASS | - |
| 6 | How it works | Bangla | Same claims and same cites [1][2][3][7] | Same | PASS | OK |
| 7 | A real-life example | Layman | Own numbers: Ana 100, Ben 20, 40 sent; with ACID one transaction, Ana stays at 100 if the server fails; with BASE a counter shows 118 or 120 [8]; Dynamo cart accepts add and remove during failures [7], older version and later reconcile [7]; Brewer used ACID for user profiles and logging [8] | The 4 paragraphs of the section | PASS | - |
| 8 | A real-life example | Bangla | Same claims, same numbers (100, 20, 40, 60, 118, 120) | Same | PASS | OK |
| 9 | Trade-offs | Layman | Brewer: trade-off is fundamental [8]; Dynamo authors: ACID stores tend to have poor availability, their result not a law [7]; conflicts must be found and resolved, merge or "last write wins" [7]; writes not rejected so conflict work moves to reads [7]; storage and cache caveat [4]; `synchronous_commit` off, recent transactions can be lost, default on [6] | The section | PASS | - |
| 10 | Trade-offs | Bangla | Same claims and cites [8][7][4][6] | Same | PASS | OK |
| 11 | Common mistakes | Layman | 4 mistakes, cites [4][6][7][2][2] | The 4 bullets | PASS | - |
| 12 | Common mistakes | Bangla | Same 4 mistakes | Same | PASS | OK |
| 13 | What a tester can check | Layman | Own advice, 5 ideas, no cites | The Tutorial advice callout, 5 bullets | PASS | - |
| 14 | What a tester can check | Bangla | Same 5 ideas | Same | FAIL | "এমন মান দিন, যা constraint-এর প্রত্যাখ্যান করা উচিত" is not correct Bangla: "constraint-এর প্রত্যাখ্যান করা" mixes a possessive and a verb, so the sentence is unclear. |

Fix applied (Bangla, row 14, bullet "একটি নিয়ম ভাঙুন"): "এমন মান দিন, যা constraint-এর প্রত্যাখ্যান করা উচিত।" is now "এমন মান দিন, যা constraint গ্রহণ করবে না।"

## Re-check

| Row | Result |
|---|---|
| 14 | The new sentence says "give a value that the constraint will not accept". This is the Technical meaning ("a value that a constraint should refuse"). PASS. |

Open FAILs: 0
