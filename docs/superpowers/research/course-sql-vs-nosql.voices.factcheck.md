# Voice fact-check: SQL vs NoSQL (round 1, 2026-10-22)

Page: `content/course/sql-vs-nosql.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give, a dropped hedge that changes the meaning, or a wrong Bangla meaning is a FAIL. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the same Technical panel. I did not re-check the sources: the Technical claims have their own report. I read the Bangla for meaning and natural use. The "Key words" section has no voices.

Page checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left: PASS.
- No Markdown heading (`#` to `######`) in a Layman or Bangla panel (bold labels only): PASS.
- Technical text unchanged: `git diff -U0 content/course/sql-vs-nosql.mdx | grep '^-' | grep -v '^---'` shows no removed line: PASS.
- Every `<Cite n>` in a Layman or Bangla panel is cited by Technical of the same block: PASS.
- Layman has no sentence over 27 words: PASS.

Notes: The Trade-offs table of Technical is a list in Layman and Bangla (relational first, then NoSQL, 7 items). Each cell keeps its cite. Bangla keeps SQL, NoSQL, ACID, BASE, schema, collection, MongoDB, and the constraint names in English.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Tables, keys, data models, document database, and "the names are a simplification" match. Cite 1 throughout. |
| 2 | In plain words | Bangla | PASS | Same claims. |
| 3 | When you need it | Layman | PASS | Three cases (new service, shape change, slow database) are the three in Technical. |
| 4 | When you need it | Bangla | PASS | Same. |
| 5 | A real-life example | Layman | PASS | Enrollments and catalog pages match. "tutorial's own" kept. |
| 6 | A real-life example | Bangla | PASS | Same. |
| 7 | Trade-offs | Layman | PASS | All 7 table rows, the three care points, and the rule of thumb match. Cites match row by row (1, 4, 2, 4 and 5, 3, 6, 1, 1, 4). "In MongoDB" qualifiers are kept. |
| 8 | Trade-offs | Bangla | FAIL | "আঙুলের হিসাব" is a word-for-word copy of "rule of thumb". It is not a normal Bangla phrase and it is confusing. |
| 9 | Trade-offs | Bangla | FAIL | "গঠন বদলাতে থাকলে" means "if the shape keeps changing". Technical says "if the shape varies", which means different shapes. The meaning shifts. |
| 10 | Common mistakes | Layman | PASS | Five bullets match. The "second point is the tutorial's own advice" remark is kept. |
| 11 | Common mistakes | Bangla | PASS | Same five bullets and cites (5, 1, 6). |
| 12 | What a tester can check | Layman | PASS | Five tips match. |
| 13 | What a tester can check | Bangla | PASS | Five tips match. |

The other Trade-offs rows of Bangla pass: "সব-অথবা-কিছুই-নয় (all-or-nothing)", the MongoDB atomic and multi-document sentences, "ডিফল্টভাবে ... প্রত্যাখ্যান করে" (by default it rejects), and the access-pattern advice.

## Re-check

| # | Fix (Bangla panel only) | Result |
|---|---|---|
| 8 | The text is now "একটি মোটামুটি নিয়ম (rule of thumb), টিউটোরিয়ালের নিজস্ব". | PASS |
| 9 | The text is now "গঠন একেক রকম হলে", which means "if the shape differs". | PASS |

FAILs found: 2. Fixed: 2.

Open FAILs: 0
