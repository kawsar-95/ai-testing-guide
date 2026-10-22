# Voice fact-check: SQL vs NoSQL (round 2, 2026-10-22)

Page: `content/course/sql-vs-nosql.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block, claim by claim. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or misleading Bangla meaning, an unfinished or ungrammatical Bangla sentence, a mistranslated term, or a break of the Course Bangla style is a FAIL. The style is: আপনি (never তুমি), common concept words in Bangla letters, and acronyms, product names, commands, and identifiers in English. A Layman sentence of more than 25 words (words counted with a script, cites removed) is a FAIL. An omission that loses no fact is not a FAIL. For each `<Cite n>` in a voice panel I checked that Technical of the same block cites it (script: no extra cite in any block). The Technical claims are checked in the Technical fact-check report, not here.

Other checks:

- No TODO placeholder, no heading in Layman or Bangla, no `তুমি` form (scripts).
- Technical unchanged: each `<Technical>` body equals the one in `git show HEAD:content/course/sql-vs-nosql.mdx` (compared after removing the Voices wrap of both; 0 differing lines).
- `node --test tests/voice-source.test.ts tests/course.test.ts`: 29 pass, 0 fail.
- "Key words" has no voices.

Notes: Section 3 Layman turns the Technical table into one item per row, and says "This list" instead of "The table". The facts and the 7 rows are the same, relational side first. Section 2 Layman says "three cases", and Technical gives three (new service, feature changes data shape, database slows). Bangla keeps `primary key`, `foreign key`, `unique`, `check`, `not-null` in English, because they are SQL constraint names.

| # | Section | Voice | What I compared | Round 1 | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | relational, non-relational, document DB, "which wins" question | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | same | PASS | Terms OK (ডেটাবেস, রো, কলাম, ভ্যালু). First use of key is "কী (key)". |
| 3 | When you need it | Layman | when you meet the choice, why a tester needs it | PASS | The "three cases" are the three in Technical. |
| 4 | When you need it | Bangla | same | PASS | Meaning correct, আপনি used. |
| 5 | A real-life example | Layman | enrollments and payments, course catalog | PASS | Same facts. "the tutorial's own" kept. |
| 6 | A real-life example | Bangla | same | FAIL | "এটি কী আর ট্রানজেকশন সহ" writes "keys" as "কী" with no English. "কী" also means "what", so the sentence is unclear. The style asks for the English term in parentheses at first use in a block when the Bangla word could be unclear. |
| 7 | Trade-offs | Layman | 7 table rows, 3 care points, rule of thumb | PASS | Each row and cite (1, 4, 2, 4/5, 3, 6, 1, 4) matches. MongoDB hedges kept ("optional", "in most cases", "by default"). |
| 8 | Trade-offs | Bangla | same | PASS | Same facts and cites. "রাইটের হরাইজন্টাল স্কেলিংয়ে পার্টিশনিং বা শার্ডিং লাগে" matches. |
| 9 | Common mistakes | Layman | 5 mistakes | PASS | Identical. |
| 10 | Common mistakes | Bangla | same | PASS | "ভেন্ডর বলে ... এমন নয় যে সে পারে না" matches "not that it cannot". |
| 11 | What a tester can check | Layman | 5 tips | PASS | Identical. |
| 12 | What a tester can check | Bangla | same | PASS | Same tips. "all-or-nothing" kept in English as a quoted idea; acceptable. |

Findings in round 1: 1 FAIL (row 6).

## Re-check

| # | Fix | Result |
|---|---|---|
| 6 | Bangla now reads "এটি কী (key) আর ট্রানজেকশন সহ একটি রিলেশনাল ডিজাইনের সঙ্গে মেলে।" The term is clear. | PASS |

Open FAILs: 0
