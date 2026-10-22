# Voice fact-check: SQL Databases (round 2, 2026-10-22)

Page: `content/course/sql.mdx`. I did not write the Layman or Bangla panels.

Method: I compared each `<Layman>` and `<Bangla>` panel with the `<Technical>` panel of the same block, claim by claim. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge that changes the meaning is a FAIL. A wrong or misleading Bangla meaning, an unfinished or ungrammatical Bangla sentence, a mistranslated term, or a break of the Course Bangla style is a FAIL. The style is: আপনি (never তুমি), common concept words in Bangla letters, and acronyms, product names, commands, and identifiers in English. A Layman sentence of more than 25 words (words counted with a script, cites removed) is a FAIL. An omission that loses no fact is not a FAIL. For each `<Cite n>` in a voice panel I checked that Technical of the same block cites it (script: no extra cite in any block). The Technical claims are checked in the Technical fact-check report, not here.

Other checks:

- No TODO placeholder, no heading in Layman or Bangla, no `তুমি` form (scripts).
- Technical unchanged: each `<Technical>` body equals the one in `git show HEAD:content/course/sql.mdx` (compared after removing the Voices wrap of both; 0 differing lines).
- `node --test tests/voice-source.test.ts tests/course.test.ts`: 29 pass, 0 fail.
- "Key words" has no voices.

Notes: Section 2 Layman turns the constraint table into a list (5 items, same text). The Layman and Bangla panels of "The four basic statements" do not repeat the SQL code block. They say the code makes two tables and runs four statements. That describes the code of the Technical panel and adds no fact. The 4 voice bullets match the 4 Technical bullets.

| # | Section | Voice | What I compared | Round 1 | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | relation = table, rows, columns, data type, row order, identity | PASS | Same facts and cites (1, 2). |
| 2 | In plain words | Bangla | same | PASS | Terms OK. "কী (key)" at first use. |
| 3 | Keys and constraints | Layman | 5 constraints, primary key, foreign key, delete actions | PASS | Same facts; `NO ACTION` "usually" kept. Longest sentence 22 words. |
| 4 | Keys and constraints | Bangla | same | PASS | Hedges kept ("সাধারণত"). Constraint names stay in code format. |
| 5 | The four basic statements | Layman | SELECT, INSERT, UPDATE, DELETE | PASS | Same facts and cites (4, 5, 6, 7). |
| 6 | The four basic statements | Bangla | same | PASS | Same facts. |
| 7 | When you need it | Layman | records in a SQL DB, tester uses SQL | PASS | Same. |
| 8 | When you need it | Bangla | same | PASS | Same. |
| 9 | A real-life example | Layman | 3 bad actions, `NULL` case | PASS | Same facts, cite 3. |
| 10 | A real-life example | Bangla | same | FAIL | "তাই শুধু চেক নাল আটকায় না" writes the `CHECK` constraint as "চেক", which also means a bank cheque. A SQL keyword must stay in English (code format). |
| 11 | Common mistakes | Layman | 4 mistakes | PASS | Same. |
| 12 | Common mistakes | Bangla | same | PASS | "দুটি নাল সমান নয়" and the standard's default match. |
| 13 | What a tester can check | Layman | 4 tips | PASS | Same. |
| 14 | What a tester can check | Bangla | same | PASS | "ব্লক, ক্যাসকেড, বা সেট নাল" restate "block, cascade, or set null". |

Findings in round 1: 1 FAIL (row 10).

## Re-check

| # | Fix | Result |
|---|---|---|
| 10 | Bangla now reads "তাই শুধু `CHECK` নাল আটকায় না". | PASS |

Open FAILs: 0
