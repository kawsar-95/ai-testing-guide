# Voice fact-check: Transactions (round 2, Bangla term style, 2026-10-22)

Page: `content/course/transactions.mdx`. I did not write this page or its voices.

Method: I read each `<Layman>` and `<Bangla>` panel next to the `<Technical>` panel of the same `##` section. A FAIL is a fact, number, name, example, hedge, or cite that Technical does not give; a wrong or unfinished Bangla sentence; a style break (তুমি, a common concept word left in English, an acronym or product name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. A script checked: (1) each Technical body is identical to the Technical body of the same section in `git show HEAD:content/course/transactions.mdx` (all sections: identical); (2) the cite numbers of each voice panel are a subset of the Technical cites of the same block (all: equal sets); (3) no heading, no TODO, no তুমি in a voice panel; (4) the Latin words in each Bangla panel are only acronyms, protocol, product and OS names, code, or key terms in parentheses at first use. "Key words" has no voices and is unchanged.

| # | Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | All-or-nothing, invisible until end, ACID page, PostgreSQL scope [1] | PASS | |
| 2 | In plain words | Bangla | Same | PASS | "আনডু (undo)" at first use. |
| 3 | When you need it | Layman | Multi-statement action, payment example, no half done [1] | PASS | |
| 4 | When you need it | Bangla | Same | PASS | |
| 5 | How it works | Layman | BEGIN/COMMIT/ROLLBACK, autocommit, savepoint, ROLLBACK TO, RELEASE, aborted state [1][2][3][5][6] | PASS | The 3-account example restates the SQL block of Technical (debit 1, savepoint, credit 2, rollback to savepoint, credit 3, commit). |
| 6 | How it works | Bangla | Same | PASS | Commands stay in code. "ধ্বংস" for "destroys" is literal but clear. |
| 7 | Isolation levels | Layman | 4 phenomena, table as 4 points, 3 distinct levels, Read Committed default, per-level behavior, how to choose [2][7][8] | PASS | Each table cell matches (checked all 16). |
| 8 | Isolation levels | Bangla | Same | PASS | Level and phenomenon names with Bangla letters plus English at first use; level names stay English as in the manual. |
| 9 | A real-life example | Layman | Payment and enrolment rows; 40 vs 41 vs 40 [7] | PASS | |
| 10 | A real-life example | Bangla | Same | FAIL, fixed | "সিট গুনে, এবং" used the conjunctive form "গুনে" (after counting) where the present tense "গোনে" is needed, so the sentence was ungrammatical. |
| 11 | Common mistakes | Layman | 4 mistakes [7] | PASS | The script flagged 28 words on the bullet line; the real sentences are short. |
| 12 | Common mistakes | Bangla | Same | PASS | "not likely to work" kept as "সম্ভাবনা কম". |
| 13 | What a tester can check | Layman | 4 test ideas, no cites | PASS | |
| 14 | What a tester can check | Bangla | Same | PASS | |

Found FAILs: 1 (row 10). Fixed: 1.

## Re-check

| Row | Fixed text | Verdict |
|---|---|---|
| 10 | "সেশন A নেওয়া সিট গোনে, এবং পেজ 40 দেখায়।" | PASS |

Open FAILs: 0
