# Voice fact-check: Databases and DBMS (round 2, Bangla term style, 2026-10-22)

Page: `content/course/database.mdx`. I did not write this page or its voices. This report replaces the earlier one.

Method: I read the 6 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. A FAIL is a fact, number, name, example or cite that Technical does not give; a dropped hedge; a wrong or misleading statement; a wrong, ungrammatical or unfinished Bangla sentence; a Bangla panel that breaks the course term style (তুমি, a common concept word left in English, an acronym or product name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL.

Automated checks (script, all blocks):

- Each `<Technical>` body equals the `<Technical>` body of the same section in `git show HEAD:content/course/database.mdx` (non-blank lines): PASS for 6 of 6.
- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS.
- No heading in any Layman or Bangla panel, no TODO, no তুমি: PASS.
- No Layman sentence over 25 words: PASS.
- No acronym, product, or command name in Bangla letters (DBMS, SQL, MySQL, PostgreSQL, MVCC, WAL, `SELECT`, `INSERT`, TCP/IP are Latin): PASS.

Notes:

- Layman is a light re-split of Technical (short sentences, the table turned into a list). No fact is added.
- Bangla keeps the page's own terms (relational, row, column, owner, privilege, snapshot) in Bangla letters with the English in parentheses at first use. "one-to-many, unique, required" are kept in English because they name kinds of rule, as Technical does.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Database is organized data, small or large [1]; DBMS adds/reads/processes it, MySQL Server is an example [1]; MySQL and PostgreSQL are relational, tables, rows, columns, no row order without sort, tables grouped into databases [1][2] | PASS | Same facts and cites. "DBMSs are central in computing" is omitted (not a FAIL). |
| 2 | In plain words | Bangla | Same facts in Bangla; "রো", "কলাম", "ডেটা টাইপ", "সর্ট" in Bangla letters | PASS | Natural, আপনি used, hedge "unless you ask for a sort" kept (আপনি সর্ট করতে না বললে). |
| 3 | When you need it | Layman | A DBMS keeps data after the app closes and shares it; six jobs with the same cites [1][3][4][7] | PASS | Table became a list. The PostgreSQL access-control sentence and its scope ("most kinds of objects") are kept. |
| 4 | When you need it | Bangla | Same six jobs; "কুয়েরি (query)", "কনকারেন্সি (concurrency)", "ডিউরেবিলিটি (durability)", "ওনার (owner)", "প্রিভিলেজ (privilege)" | PASS | Facts, cites and the "most kinds of objects" hedge match. |
| 5 | How it works | Layman | Client/server, TCP/IP, MySQL embedded, process per connection [3][1]; queries [1][8]; rules [1][8]; transactions and MVCC [4][5]; WAL [4][6]; access control [7] | PASS | All sentences match Technical. "Manual says ... with a good design" hedge kept. |
| 6 | How it works | Bangla | Same six paragraphs in Bangla | PASS | "all-or-nothing" is glossed in the same sentence (হয় সব ধাপ হয়, নয়তো কোনোটাই হয় না); the gloss adds no fact. "লগে লেখে" for "logs to permanent storage (disk)" keeps the meaning. |
| 7 | A real-life example | Layman | Learning platform, `students` and `enrolments`; one transaction; all-or-nothing [4]; no half change seen [4] | PASS | Marked "the tutorial's own". Cites match. |
| 8 | A real-life example | Bangla | Same example in Bangla | FAIL | "কারণ এটা all-or-nothing" leaves the key term in English with no Bangla form or gloss in this block. Term style. |
| 9 | Common mistakes | Layman | Five mistakes, cites [1][2][3], "tutorial's own" marks kept | PASS | Same as Technical. |
| 10 | Common mistakes | Bangla | Five mistakes in Bangla; "এই কথাটা/এই পরামর্শ টিউটোরিয়ালের নিজের" kept | PASS | Meaning matches. |
| 11 | What a tester can check | Layman | "Tutorial's own advice" line and six test ideas | PASS | The Callout is dropped, the six ideas are kept. No cites, as in Technical. |
| 12 | What a tester can check | Bangla | Same six ideas | FAIL | The label "All or nothing।" is a bare English phrase. Term style. |

## Re-check

I fixed both FAIL rows by editing only the Bangla panels:

- Row 8: "কারণ এটা all-or-nothing" is now "কারণ এটা হয় সব ধাপ হয়, নয়তো কোনোটাই হয় না (all-or-nothing)". Same meaning as Technical (all-or-nothing). PASS.
- Row 12: the label is now "সব অথবা কিছুই না (all or nothing)।". PASS.

After the edits I ran the script again: Technical still equals HEAD in 6 of 6 sections, the cites are unchanged, no new heading, no TODO.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
