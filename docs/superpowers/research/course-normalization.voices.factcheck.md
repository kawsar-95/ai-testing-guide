# Voice fact-check: Normalization and Denormalization (round 1, 2026-10-22)

Page: `content/course/normalization.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared each claim with the `<Technical>` panel of the same `##` section. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or confusing Bangla meaning is a FAIL. A Layman sentence of more than 25 words is a FAIL. An omission is not a FAIL. Every `<Cite n>` in a voice panel is a number that Technical of the same section cites. I did not re-check the sources: the Technical claims are not changed.

Mechanical checks:

- No `TODO` placeholder is left.
- No Markdown heading in any `<Layman>` or `<Bangla>` panel.
- `git diff -U0 content/course/normalization.mdx | grep '^-' | grep -v '^---'` shows no removed non-blank line. The Technical text is unchanged.
- No Layman sentence is over 25 words (script check; the longest is 23).
- Numbers match: 40 orders, 39 rows, 40 rows (Bangla uses ৪০, ৩৯). The names `Class1`, `Class2`, `Class3`, `Students`, `Registration`, `Faculty`, `RESTRICT`, `CASCADE`, `phone1` to `phone3` stay in English.

| # | Section | Voice | Result | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Definition, the two things that the rules remove, redundancy, salary example, primary key, foreign key, and referential integrity match Technical. |
| 2 | In plain words | Bangla | PASS | Same. "নমনীয়" = flexible. "সামঞ্জস্যপূর্ণ" = consistent. |
| 3 | When you need it | Layman | PASS | Same text as Technical. |
| 4 | When you need it | Bangla | PASS | Same claims, including "প্রায়ই" = "often". |
| 5 | How it works | Layman | PASS | The normal forms, the table as a list, the student example, `RESTRICT` and `CASCADE` match. |
| 6 | How it works | Bangla | PASS | Same. "advisor-এর ঘর" = "the advisor's room" (acceptable). |
| 7 | Denormalization and trade-offs | Layman | PASS | Same claims. "The source also suggests" = "It also suggests". The "sources above do not use this word" hedge is kept. |
| 8 | Denormalization and trade-offs | Bangla | FAIL | Two items. (a) "application-কে ... সমস্যা ... আশা করতে হয়": "আশা করা" means "to hope". It says the app must hope for the problems. Technical means "must be ready for" them. (b) "এটি একটি লেনদেন" translates "this is a trade". "লেনদেন" is a money deal and also the Bangla word for a database transaction. It is confusing here. |
| 9 | A real-life example | Layman | FAIL | Technical says "If a script fixes 39 rows and fails on the last one, the shop has two cities". Layman says "A script fixes 39 rows and fails ... Now the shop has two cities". The "if" is dropped. It turns an example condition into a fact. |
| 10 | A real-life example | Bangla | FAIL | Same dropped condition: "একটি script ৩৯টি row ঠিক করে এবং শেষটিতে ব্যর্থ হয়। এখন ..." |
| 11 | Common mistakes | Layman | FAIL | "Do not copy data and not record it." is not plain: the double negative is hard to read. |
| 12 | Common mistakes | Bangla | PASS | The 5 points and the cites match. "নথিভুক্ত" = "recorded". "tutorial-এর নিজস্ব পরামর্শ" is kept. |
| 13 | What a tester can check | Layman | PASS | The 6 test ideas match. No cite. |
| 14 | What a tester can check | Bangla | PASS | Same. "করবে" for "should refuse" is the normal way to state an expected result in a test step. "source of truth" stays in English. |

Round 1: 4 FAIL rows (rows 8, 9, 10, 11), 5 problems in total.

## Re-check

| Row | Fix | Result |
|---|---|---|
| 8 | (a) now "... সমস্যা, যেমন redundant data, সামলানোর জন্য তৈরি থাকতে হয়" ("must be ready to handle"). (b) now "এটি একটি trade-off।" | PASS |
| 9 | Now "Say a script fixes 39 rows and fails on the last one. Then the shop has two cities for one customer." The condition is back. | PASS |
| 10 | Now "ধরুন একটি script ৩৯টি row ঠিক করে এবং শেষটিতে ব্যর্থ হয়। তাহলে দোকানে একজন customer-এর দুটি শহর থাকে।" | PASS |
| 11 | Now "Do not copy data without a record of the copy." | PASS |

`node --test tests/voice-source.test.ts tests/course.test.ts` passes.

Open FAILs: 0
