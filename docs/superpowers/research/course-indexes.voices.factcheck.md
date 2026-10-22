# Voice fact-check: Indexes (round 1, 2026-10-22)

Page: `content/course/indexes.mdx`. I did not write the Layman and Bangla panels.

Method: I read the 7 `<Voices>` blocks. For each sentence in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A fact, number, name, example, or cite that Technical does not give is a FAIL. A dropped hedge, a wrong meaning, or a term that is translated in a confusing way is a FAIL. An omission is not a FAIL. A script checked that each `<Cite n>` in Layman and Bangla is also cited in Technical of the same block, that no panel has a Markdown heading, and that no `TODO` placeholder is left. The "Key words" section has no voices.

Checks of the file:

- No TODO placeholder is left. PASS.
- No heading in a Layman or Bangla panel. PASS.
- Cites: every `n` in Layman and Bangla is cited in Technical of the same block. PASS (7 blocks).
- Technical unchanged: `git diff -U0 content/course/indexes.mdx | grep '^-' | grep -v '^---'` shows no removed line. PASS.
- Layman is a close restatement of Technical in short sentences. The technical words (B-tree, multicolumn, covering index) stay, because they are the topic of the page.

| # | Section | Voice | What I checked against Technical | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Index definition; full read without an index; MySQL first row and bigger table [5]; PostgreSQL book comparison and "must foresee" [1]; `CREATE INDEX` example; add or remove at any time [1] | PASS | Same claims, same cites, same example. |
| 2 | In plain words | Bangla | Same claims | PASS | Meaning is right. Terms stay in English. |
| 3 | When you need it | Layman | Few rows in a big table; `UPDATE`, `DELETE` with a condition; joins [1]; small tables and big reports, reading in order [5] | PASS | Same claims. |
| 4 | When you need it | Bangla | Same claims | PASS | "ক্রমানুসারে পড়া" = reading in order. |
| 5 | How it works | Layman | B-tree in MySQL [5] and PostgreSQL [2]; few levels [1]; B-tree and hash; `LIKE 'foo%'` and `'%bar'` [2]; multicolumn [3]; MySQL `(col1, col2, col3)` [5]; "sparingly" [3]; covering index [5]; 3 costs [1] [3] [1]; remove unused index [1] | PASS | The table becomes a list with the same two types. "It has three costs" counts the 3 bullets of Technical. |
| 6 | How it works | Bangla | Same claims | FAIL, fixed | In the Space bullet, "বড় index-এর তুলনায়" means "than a big index". Technical says "wider one" (a wider index has more columns). "Big" can be read as an index on a big table. |
| 7 | A real-life example | Layman | 5 million rows; `student_id = 42`; own example, numbers not from a source; index on write; ten more indexes "just in case" | PASS | Same numbers and same hedge. |
| 8 | A real-life example | Bangla | Same claims | PASS | "যদি লাগে" = "just in case". |
| 9 | Common mistakes | Layman | 4 bullets, cites [1] [3] [3] [5] [2] [1] | PASS | Same claims. The `utf8mb4` and `latin1` example moves to its own sentence. The meaning is the same. |
| 10 | Common mistakes | Bangla | Same claims | FAIL, fixed | Bullet 4: "Database তখনই index ব্যবহার করে, যখন ..." reads as "only then". Technical says "uses an index when it thinks ...", with no "only". |
| 11 | How to see if a query uses an index | Layman | `EXPLAIN` [7]; PostgreSQL scan nodes, Seq Scan with `Filter`, Index Scan with `Index Cond` [4]; estimates; `EXPLAIN ANALYZE` executes [7]; row counts near real [4]; MySQL `key`, `possible_keys`, `ALL`, `SHOW INDEX` [6] | PASS | Same claims and cites. |
| 12 | How to see if a query uses an index | Bangla | Same claims | PASS | "আন্দাজ" = estimate. Commands and column names stay in English. |
| 13 | What a tester can check | Layman | 5 test ideas, "tutorial's own advice", no cites | PASS | Same ideas. No cite added. |
| 14 | What a tester can check | Bangla | Same ideas | PASS | Same ideas, same numbers (50 rows). |

## Re-check

| # | Fix | Result |
|---|---|---|
| 6 | The Bangla now says "আরও চওড়া (wider) index-এর তুলনায় single-column index ..." | PASS. It gives the word of Technical (wider). |
| 10 | The Bangla now says "যখন database মনে করে index full scan-এর চেয়ে বেশি কার্যকর, তখন সে index ব্যবহার করে" | PASS. No "only". Same cite [1]. |

Open FAILs: 0
