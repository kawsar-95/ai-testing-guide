# Voice fact-check: SQL Databases (round 1, 2026-10-22)

Page: `content/course/sql.mdx`. I did not write the Layman and Bangla panels.

Method: I read each `<Voices>` block. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give, a dropped hedge that changes the meaning, or a wrong Bangla meaning is a FAIL. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the same Technical panel. I did not re-check the sources: the Technical claims have their own report. I read the Bangla for meaning and natural use. The "Key words" section has no voices.

Page checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left: PASS.
- No Markdown heading (`#` to `######`) in a Layman or Bangla panel (bold labels only): PASS.
- Technical text unchanged: `git diff -U0 content/course/sql.mdx | grep '^-' | grep -v '^---'` shows no removed line: PASS.
- Every `<Cite n>` in a Layman or Bangla panel is cited by Technical of the same block: PASS.
- Layman has no sentence over 27 words: PASS.

Notes: In "The four basic statements", the Technical panel has a code block. The voices have no code block. They say that the example is in the Technical text and give its two table names. They add no new fact. In "Keys and constraints", the Technical table is a list. Bangla keeps SQL keywords (`NOT NULL`, `UNIQUE`, `CASCADE`, and so on), "primary key", "foreign key", "row", "column", and "table" in English.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Relation = table, rows, columns, data types, `CREATE TABLE`, `DROP TABLE`, and the two surprises match. Cites 1 and 2 as in Technical. |
| 2 | In plain words | Bangla | PASS | Same claims. |
| 3 | Keys and constraints | Layman | PASS | Five constraints, one primary key at most, referential integrity, referencing and referenced table, and the five delete actions match. Cite 3 throughout. |
| 4 | Keys and constraints | Bangla | PASS | Same. `NO ACTION` "সাধারণত error দেয়" keeps "usually". |
| 5 | The four basic statements | Layman | PASS | SELECT, INSERT, UPDATE, DELETE statements match, with cites 4, 5, 6, 7. The intro line adds no fact: Technical has the two tables and the four statements. |
| 6 | The four basic statements | Bangla | PASS | Same. "বাঁ থেকে ডানে" = left to right. |
| 7 | When you need it | Layman | PASS | Four examples and the tester uses match. |
| 8 | When you need it | Bangla | PASS | Same. |
| 9 | A real-life example | Layman | PASS | Ada, score 85, the three failing cases, `NULL` and `CHECK` (cite 3) match. 120 and `student_id` 99 match. |
| 10 | A real-life example | Bangla | PASS | Same. Note: "`NULL` score আলাদা একটি ঘটনা" could say "ক্ষেত্র" and not "ঘটনা" for "case". It is not a changed fact. |
| 11 | Common mistakes | Layman | PASS | Four bullets match, with cites 2, 3, 3, 7 and 7. The hedge "so other systems can differ" is kept. |
| 12 | Common mistakes | Bangla | PASS | Same. |
| 13 | What a tester can check | Layman | PASS | Four tips match. |
| 14 | What a tester can check | Bangla | PASS | Four tips match. |

FAILs found: 0. Fixed: 0.

Open FAILs: 0
