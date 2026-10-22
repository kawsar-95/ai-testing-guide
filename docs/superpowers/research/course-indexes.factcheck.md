# Fact-check: course page "Indexes"

Page: `content/course/indexes.mdx`. Sources fetched 2026-10-22 into `/tmp/claude-1000/fc2-indexes/`. Cite n: 1 PG 11.1, 2 PG 11.2, 3 PG 11.3, 4 PG 14.1, 5 MySQL 10.3.1, 6 MySQL 10.8.2.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Without an index the database reads the table row by row | 1 | PASS | "the system would have to scan the entire test1 table, row by row" |
| 2 | MySQL: starts at first row, reads whole table, larger table costs more | 5 | PASS | "MySQL must begin with the first row and then read through the entire table ... The larger the table, the more this costs." |
| 3 | With an index MySQL finds the place without looking at all data | 5 | PASS | "MySQL can quickly determine the position to seek to in the middle of the data file without having to look at all the data" |
| 4 | PostgreSQL uses the same book comparison; programmer must foresee useful indexes | 1 | PASS | "it is the task of the database programmer to foresee which indexes will be useful" |
| 5 | `CREATE INDEX orders_customer_idx ON orders (customer_id);` and add/remove at any time | 1 | PASS | Syntax matches `CREATE INDEX test1_id_index ON test1 (id);` (valid in PostgreSQL and MySQL). "Indexes can be added to and removed from tables at any time." |
| 6 | Index helps UPDATE and DELETE with search condition, and joins | 1 | PASS | "Indexes can also benefit UPDATE and DELETE commands with search conditions. Indexes can moreover be used in join searches." |
| 7 | Many queries for few rows in a big table is when you need an index | 1 | PASS | "If there are many rows in test1 and only a few rows ... this is clearly an inefficient method." |
| 8 | Indexes matter less for small tables and report queries that read most rows; sequential reading is faster | 5 | PASS | "Indexes are less important for queries on small tables, or big tables where report queries process most or all of the rows ... reading sequentially is faster" ("reading in order" is a fair paraphrase) |
| 9 | Most MySQL indexes are B-trees | 5 | PASS | "Most MySQL indexes ( PRIMARY KEY , UNIQUE , INDEX , and FULLTEXT ) are stored in B-trees." |
| 10 | PostgreSQL creates a B-tree by default | 2 | PASS | "By default, the CREATE INDEX command creates B-tree indexes" |
| 11 | With a search tree the database may walk only a few levels | 1 | PASS | "it might only have to walk a few levels deep into a search tree" |
| 12 | B-tree: equality and range on sortable data; `<`, `=`, `>`, `BETWEEN`, `IN` | 2 | PASS | "B-trees can handle equality and range queries on data that can be sorted into some ordering." "such as BETWEEN and IN , can also be implemented with a B-tree index search" |
| 13 | Hash: simple equality only | 2 | PASS | "such indexes can only handle simple equality comparisons" |
| 14 | B-tree can help `LIKE 'foo%'`, not `LIKE '%bar'` | 2 | PASS | "col LIKE 'foo%' ... but not col LIKE '%bar'". Note: the source adds that a non-C locale needs a special operator class; the page omits it ("can help" is still true). |
| 15 | Multicolumn B-tree works best when query limits leftmost columns | 3 | PASS | "the index is most efficient when there are constraints on the leading (leftmost) columns" |
| 16 | MySQL (col1,col2,col3) serves col1; col1,col2; all three | 5 | PASS | "you have indexed search capabilities on (col1) , (col1, col2) , and (col1, col2, col3)" |
| 17 | PostgreSQL says use multicolumn indexes sparingly | 3 | PASS | "Multicolumn indexes should be used sparingly." |
| 18 | Covering index: query needing only indexed columns can read values from the index tree | 5 | PASS | "An index that provides all the necessary results for a query is called a covering index" / "the selected values can be retrieved from the index tree" |
| 19 | Writes: index must be kept in step, adds work to every data change | 1 | PASS | "the system has to keep it synchronized with the table. This adds overhead to data manipulation operations." |
| 20 | Single-column index "saves space and time" vs wider one | 3 | PASS | "an index on a single column is sufficient and saves space and time" (exact phrase) |
| 21 | Building an index on a large table can take long; PostgreSQL blocks writes by default | 1 | PASS | "Creating an index on a large table can take a long time. By default, PostgreSQL allows reads ... but writes ... are blocked" |
| 22 | Manual says remove an index that is seldom or never used | 1 | PASS | "indexes that are seldom or never used in queries should be removed" |
| 23 | Real-life example numbers are the tutorial's own | none | PASS | Page says "This is the tutorial's own example, and the numbers are not from a source." Marked, no source fact stated. |
| 24 | Indexing every column adds write work and space | 1, 3 | PASS | See claims 19 and 20. |
| 25 | A query that skips the leftmost column may get little help | 3 | PASS (note) | Source: any subset can use the index, "most efficient" on leading columns. "may get little help" is hedged and weaker than "cannot use". PG 18 also describes skip scan, so a softer wording such as "is less efficient" would match the source better. |
| 26 | MySQL: utf8mb4 vs latin1 comparison stops index use | 5 | PASS | "comparing a utf8mb4 column with a latin1 column precludes use of an index" |
| 27 | `LIKE '%bar'` cannot use a B-tree | 2 | PASS | "but not col LIKE '%bar'" |
| 28 | The database uses an index ONLY when it thinks that is faster | 1 | PASS (re-check) | Fixed: page now says "when it thinks that is more efficient than a full scan". Source: "it will use the index in queries when it thinks doing so would be more efficient than a sequential table scan." It says "when", not "only when". Stronger than the source. |
| 29 | EXPLAIN shows the plan and "does not give the rows" (plain EXPLAIN does not run the query) | 7 | PASS (re-check) | Fixed: line 81 cites S7 and says EXPLAIN shows the chosen plan. Was: no cite and no source sentence says it. S4 only says that the ANALYZE option "actually executes the query". Add a cite or say it with the ANALYZE wording. |
| 30 | PG plan is a tree of nodes; bottom nodes are scan nodes: sequential, index, bitmap index scans | 4 | PASS | "The structure of a query plan is a tree of plan nodes. Nodes at the bottom level of the tree are scan nodes ... sequential scans, index scans, and bitmap index scans." |
| 31 | Seq Scan with Filter checks the condition on each row | 4 | PASS | "This means that the plan node checks the condition for each row it scans" |
| 32 | Index Scan shows an Index Cond line | 4 | PASS | Example: "Index Scan using tenk1_unique1 on tenk1 ... Index Cond: (unique1 = 42)" |
| 33 | Cost numbers are estimates | 4 | PASS | "The costs are measured in arbitrary units determined by the planner's cost parameters" / "the cost estimates are expressed in arbitrary units" |
| 34 | EXPLAIN ANALYZE really runs the query, shows true row counts and times with the estimates | 4 | PASS | "EXPLAIN actually executes the query, and then displays the true row counts and true run time ... along with the same estimates that a plain EXPLAIN shows" |
| 35 | Manual says to check that estimated rows are reasonably close to real | 4 | PASS | "The thing that's usually most important to look for is whether the estimated row counts are reasonably close to reality." |
| 36 | MySQL `key` is the index MySQL decided to use; NULL means none found | 6 | PASS | "The key column indicates the key (index) that MySQL actually decided to use." "If key is NULL , MySQL found no index to use" |
| 37 | `possible_keys` NULL means no relevant index | 6 | PASS | "If this column is NULL ..., there are no relevant indexes." |
| 38 | Join type ALL is a full table scan, normally not good for the first table | 6 | PASS | "ALL A full table scan ... This is normally not good if the table is the first table not marked const" (page leaves out "not marked const"; acceptable) |
| 39 | `SHOW INDEX FROM tbl_name` lists the indexes | 6 | PASS | "To see what indexes a table has, use SHOW INDEX FROM tbl_name ." |
| 40 | Key words table: Index, Full table scan, B-tree, Multicolumn, Covering, EXPLAIN | 5, 1, 2, 5, 3, 5, 4 | PASS | Same sources as claims 2, 1, 9, 10, 15, 18, 30. |

Tip callout (tutorial advice): marked "These test ideas are the tutorial's own advice."; it has no `<Cite>`; it states no source fact as a source claim.

## Structure check

| Check | Result |
|---|---|
| All 6 `page.sources` are https and each is cited (n=1..6 used 11, 5, 6, 7, 10, 4 times) | PASS |
| Every `<Cite n>` has a source | PASS |
| Sections in order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (extra `## How it works` and `## How to see if a query uses an index` sit between them); Key words last | PASS |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Indexes" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com source | PASS |
| Copy check, line 22: "the larger the table, the more this costs" (8 words, S5) | PASS (re-check) |
| Copy check, line 46: "equality and range queries on data that can be sorted" (10 words, S2) | PASS (re-check) |
| Copy check, line 61: "an index on a large table can take a long time. By default PostgreSQL" (12 words, S1) | PASS (re-check) |
| Copy check, line 75: "comparing a utf8mb4 column with a latin1 column" (8 words, S5) | PASS (re-check) |
| Copy check, line 82: "sequential scans, index scans, and bitmap index scans" (8 words, S4) | PASS (re-check) |
| Copy check, line 84: "the estimated row counts are reasonably close to" (8 words, S4) | PASS (re-check) |

Fixes: reword the 6 copied runs in the writer's own words. Line 75 can say "a `utf8mb4` column against a `latin1` column" with a words change; line 82 can name the scan types in a different order or form. Fix claim 28 ("only") and claim 29 (cite or reword).


## Re-check (after the writer fixed the 8 FAILs)

S7 (https://www.postgresql.org/docs/current/sql-explain.html) fetched and read. The page now has 7 sources, and each is cited (n=7 twice).

| # | Changed text | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 28 | "The database uses an index when it thinks that is more efficient than a full scan" (line 77) | 1 | PASS | "it will use the index in queries when it thinks doing so would be more efficient than a sequential table scan" |
| 29 | "Put EXPLAIN before the query to see the plan that the database chose" (line 81) | 7 | PASS | "This command displays the execution plan that the PostgreSQL planner generates for the supplied statement." |
| 34 | "With EXPLAIN ANALYZE, PostgreSQL executes the statement, not only plans it" (line 85) | 7 | PASS | "The ANALYZE option causes the statement to be actually executed, not only planned." |
| 35 | "a key check is whether the estimated row counts are near the real ones" (line 85) | 4 | PASS | "whether the estimated row counts are reasonably close to reality" |
| 8 | Line 23: "a bigger table means more work" | 5 | PASS | "The larger the table, the more this costs." |
| 12 | Line 47: B-tree "Equality and range queries on sortable data" | 2 | PASS | "B-trees can handle equality and range queries on data that can be sorted" |
| 21 | Line 62: building may be slow; PostgreSQL by default lets reads run, blocks writes | 1 | PASS | "Creating an index on a large table can take a long time. By default, PostgreSQL allows reads ... but writes ... are blocked" |
| 26 | Line 76: a comparison of string columns with different character sets (for example utf8mb4 and latin1) rules out an index (MySQL) | 5 | PASS (note) | "For comparisons between nonbinary string columns, both columns should use the same character set. For example, comparing a utf8mb4 column with a latin1 column precludes use of an index." The page widens the example a little; it is within the source rule. |
| 30 | Line 83: a table can be read by a sequential scan, an index scan, or a bitmap index scan | 4 | PASS | "different types of scan nodes for different table access methods: sequential scans, index scans, and bitmap index scans" |

Copy check re-run on the whole page against S1 to S7: no run of 8 or more words. The longest run is 7 words ("is whether the estimated row counts are"), which is allowed. All 6 earlier copy FAILs are cleared. Structure rules still pass (section order, Key words last, tip has no Cite, no Voices, title "Indexes", all sources https and official docs).

Prose word count (no export block, tables, code, Cite tags, or tag lines): 985.

Open FAILs: 0
