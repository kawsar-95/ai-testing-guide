# Voice fact-check: Databases and DBMS (round 1, 2026-10-22)

Page: `content/course/database.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 6 `<Voices>` blocks (the `## Key words` section has no voices). For each block, I compared `<Layman>` and `<Bangla>` with the `<Technical>` panel of the same block. A fact, number, name, example, or cite that Technical does not give is a FAIL. So is a dropped hedge or a changed condition, a wrong or confusing Bangla meaning, and a Layman sentence that is long or not plain. An omission is not a FAIL. I checked each `<Cite n>` against the cites of the Technical panel of the same block. I did not re-check the sources: the Technical claims are in the fact-check of the page.

Structure checks:

- No `TODO-LAYMAN` or `TODO-BANGLA` is left (`grep TODO-` gives 0).
- No Markdown heading in any Layman or Bangla panel. The bold label "Client and server." style is used.
- Technical text is unchanged: `git diff -U0 content/course/database.mdx | grep '^-' | grep -v '^---'` shows no removed line.
- Cites: each Layman and Bangla cite is in the Technical panel of its block.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | FAIL (fixed) | Technical says "SQL does not promise any order of rows". Layman said "SQL gives no order of rows". The hedge "promise" was dropped. |
| 2 | In plain words | Bangla | FAIL (fixed) | Same hedge dropped ("order দেয় না"). Also "Table-গুলো database-এ ভাগ করা থাকে" means "divided", but Technical says "grouped". |
| 3 | When you need it | Layman | FAIL (fixed) | Technical needs both: keep data after the app closes and let many users share it. Layman split this into two separate uses ("Use it also when ..."). This changes "and" to "or". |
| 4 | When you need it | Bangla | FAIL (fixed) | Same "and" became "or" ("অনেক user ... share করলেও DBMS লাগে"). The 6 jobs of the DBMS are the same as in Technical: PASS. |
| 5 | How it works | Layman | FAIL (fixed) | Technical says "The manual says that, with a good design, the app is safe from bad data". Layman dropped the attribution and stated it as a plain fact. The other 5 paragraphs are PASS. |
| 6 | How it works | Bangla | PASS | All 6 paragraphs match Technical. "Manual বলে" keeps the attribution. The text diagram in Technical is not repeated (an omission). |
| 7 | A real-life example | Layman | PASS | Same example, same steps, same cites (4). |
| 8 | A real-life example | Bangla | FAIL (fixed) | "তার পরিবর্তনের অর্ধেক" reads as "half of his own change". Technical says a student who lists courses should not see half of the change (the enrolment). Fixed to "ওই পরিবর্তনের". |
| 9 | Common mistakes | Layman | PASS | 5 bullets, same text and cites. The tutorial-own notes are kept. |
| 10 | Common mistakes | Bangla | PASS | 5 bullets match. The tutorial-own notes are kept. |
| 11 | What a tester can check | Layman | PASS | 6 ideas and the line "not claims of the sources" match. The callout box is not repeated (an omission). |
| 12 | What a tester can check | Bangla | PASS | 6 ideas match. "অনুপস্থিত parent" is acceptable for "missing parent". |

Language: the Bangla text uses আপনি, keeps the technical terms in English, and uses a hyphen between an English word and a Bangla suffix.

## Re-check

I re-read the 6 fixed rows after the edits (rows 1, 2, 3, 4, 5, 8).

| Row | Result |
|---|---|
| 1 | "SQL does not promise any order of rows, unless you ask for a sort" matches Technical. PASS |
| 2 | "order-এর নিশ্চয়তা দেয় না" keeps the hedge. "group করা থাকে" matches "grouped". PASS |
| 3 | "Use a DBMS when an app must keep data after it closes and let many users share it." matches Technical. PASS |
| 4 | "app বন্ধ হওয়ার পরও data রাখতে এবং অনেক user-কে তা share করতে দিতে হলে" keeps both conditions. PASS |
| 5 | "The manual says that, with a good design, ..." keeps the attribution. PASS |
| 8 | "ওই পরিবর্তনের অর্ধেক" points to the enrolment change. PASS |

Open FAILs: 0
