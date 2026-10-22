# Voice fact-check: Indexes (round 2, 2026-10-22)

Page: `content/course/indexes.mdx`. I did not write the voices. This report replaces the old one. The Bangla panels were rewritten in the course term style.

Method: I read the 7 `<Voices>` blocks. For each `<Layman>` and `<Bangla>` panel, I compared every claim, number, name, example, and `<Cite n>` with the `<Technical>` panel of the same block. I checked the Bangla for meaning, grammar, address form (আপনি), concept words in Bangla letters, and acronym, product, command, and code names in English. I counted the words of each Layman sentence (limit 25). I did not re-check the sources: the Technical claims are in `course-indexes.factcheck.md`. The "Key words" section has no voices.

Structure checks:

- `<Technical>` unchanged: each non-blank line of the 7 `<Technical>` bodies is also in `git show HEAD:content/course/indexes.mdx`. No line changed.
- No TODO placeholder. No heading in a Layman or Bangla panel. No `তুমি` form.
- Cites: every `<Cite n>` in a Layman or Bangla panel is also cited by the Technical panel of the same block.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts and cites (1, 5). The sentences are short. |
| 2 | In plain words | Bangla | PASS | Same facts and cites. "ইনডেক্স (index)" at first use. The SQL command stays in code. |
| 3 | When you need it | Layman | PASS | Same use cases, same cites (1, 5). |
| 4 | When you need it | Bangla | PASS | Same meaning. "ক্রমানুসারে পড়া" gives "reading in order". |
| 5 | How it works | Layman | FAIL (fixed) | The Technical text says "what some PostgreSQL index types handle". The Layman text said "PostgreSQL index types handle different queries", so it implied all types. See the Re-check. |
| 6 | How it works | Bangla | FAIL (fixed) | Same scope problem: "PostgreSQL-এর বিভিন্ন ইনডেক্স টাইপ" dropped "some". |
| 7 | A real-life example | Layman | PASS | Same example, same numbers (5 million, student 42, ten more indexes). It says the example is the tutorial's own. |
| 8 | A real-life example | Bangla | PASS | Same numbers. "5 million" and "42" are digits as in Technical. |
| 9 | Common mistakes | Layman | PASS | 4 bullets, same facts, cites 1, 3, 5, 2, 1. |
| 10 | Common mistakes | Bangla | PASS | Same 4 bullets. "utf8mb4" and "latin1" stay in code. |
| 11 | How to see if a query uses an index | Layman | PASS | Same facts about `EXPLAIN`, PostgreSQL nodes, and MySQL columns. Cites 7, 4, 6 match. |
| 12 | How to see if a query uses an index | Bangla | PASS | Same facts. Scan names stay in English as page terms. The hedge "the cost numbers are estimates" is kept. |
| 13 | What a tester can check | Layman | PASS | 5 ideas, same. It says the advice is the tutorial's own. No cites. |
| 14 | What a tester can check | Bangla | PASS | 5 ideas, same. `EXPLAIN ANALYZE`, `key: NULL`, `UPDATE`, `DELETE` stay in English. |

Other style notes (no FAIL): the Bangla text uses short sentences, and "রাইট (write)" has the English term at first use because "রাইট" can read as "right". The long list of terms such as ইকুয়ালিটি, ইনডেক্স, কনসিসটেন্সি is consistent through the page.

## Re-check

| # | Fix | Result |
|---|---|---|
| 5 | Layman now says "Some PostgreSQL index types handle different queries". | PASS. It matches "what some PostgreSQL index types handle". |
| 6 | Bangla now says "PostgreSQL-এর কিছু ইনডেক্স টাইপ বিভিন্ন কুয়েরি সামলায়". | PASS. "কিছু" restores "some". |

I ran `node --test tests/voice-source.test.ts tests/course.test.ts`: 29 pass, 0 fail.

Found: 2 FAILs. Fixed: 2.

Open FAILs: 0
