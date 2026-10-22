# Course page: Indexes (research notes)

Writer notes for `content/course/indexes.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-indexes/`. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | PostgreSQL 18 docs, 11.1 Indexes: Introduction | https://www.postgresql.org/docs/current/indexes-intro.html | 2026-10-22 |
| S2 | PostgreSQL 18 docs, 11.2 Index Types | https://www.postgresql.org/docs/current/indexes-types.html | 2026-10-22 |
| S3 | PostgreSQL 18 docs, 11.3 Multicolumn Indexes | https://www.postgresql.org/docs/current/indexes-multicolumn.html | 2026-10-22 |
| S4 | PostgreSQL 18 docs, 14.1 Using EXPLAIN | https://www.postgresql.org/docs/current/using-explain.html | 2026-10-22 |
| S5 | MySQL 8.4 Reference Manual, 10.3.1 How MySQL Uses Indexes | https://dev.mysql.com/doc/refman/8.4/en/mysql-indexes.html | 2026-10-22 |
| S6 | MySQL 8.4 Reference Manual, 10.8.2 EXPLAIN Output Format | https://dev.mysql.com/doc/refman/8.4/en/explain-output.html | 2026-10-22 |
| S7 | PostgreSQL 18 docs, EXPLAIN (SQL command reference) | https://www.postgresql.org/docs/current/sql-explain.html | 2026-10-22 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Without an index, the system scans the whole table row by row. With an index it can walk a few levels of a search tree. | S1 | "the system would have to scan the entire test1 table, row by row, to find all matching entries." / "it might only have to walk a few levels deep into a search tree." |
| C2 | A book index is the same idea. The programmer must foresee which indexes help. | S1 | "terms and concepts that are frequently looked up by readers are collected in an alphabetic index at the end of the book." / "it is the task of the database programmer to foresee which indexes will be useful." |
| C3 | MySQL without an index reads from the first row through the whole table, and the larger the table, the more it costs. With an index it finds the position without looking at all the data. | S5 | "Without an index, MySQL must begin with the first row and then read through the entire table to find the relevant rows. The larger the table, the more this costs." / "MySQL can quickly determine the position to seek to in the middle of the data file without having to look at all the data." |
| C4 | Most MySQL indexes are stored in B-trees. | S5 | "Most MySQL indexes ( PRIMARY KEY , UNIQUE , INDEX , and FULLTEXT ) are stored in B-trees." |
| C5 | PostgreSQL makes B-tree by default. Other types exist: Hash, GiST, SP-GiST, GIN, BRIN. | S2 | "By default, the CREATE INDEX command creates B-tree indexes, which fit the most common situations." / "B-tree, Hash, GiST, SP-GiST, GIN, BRIN, and the extension bloom" |
| C6 | B-tree handles equality and range queries on data that can be sorted. Operators < <= = >= >; BETWEEN and IN. | S2 | "B-trees can handle equality and range queries on data that can be sorted into some ordering." / "Constructs equivalent to combinations of these operators, such as BETWEEN and IN, can also be implemented with a B-tree index search." |
| C7 | A B-tree can serve LIKE 'foo%' but not LIKE '%bar' (constant pattern anchored at the start; and the non-C locale caveat). | S2 | "if the pattern is a constant and is anchored to the beginning of the string — for example, col LIKE 'foo%' or col ~ '^foo' , but not col LIKE '%bar'." / "if your database does not use the C locale you will need to create the index with a special operator class" |
| C8 | A hash index handles only simple equality. | S2 | "such indexes can only handle simple equality comparisons." |
| C9 | GIN indexes suit values with several parts, such as arrays. | S2 | "GIN indexes are “inverted indexes” which are appropriate for data values that contain multiple component values, such as arrays." |
| C10 | The system updates the index when the table changes. It uses an index when it thinks that is more efficient than a sequential scan (the page says "when", not "only when"). ANALYZE may be needed for statistics. | S1 | "the system will update the index when the table is modified, and it will use the index in queries when it thinks doing so would be more efficient than a sequential table scan. But you might have to run the ANALYZE command regularly to update statistics" |
| C11 | Indexes can help UPDATE and DELETE with search conditions, and joins. | S1 | "Indexes can also benefit UPDATE and DELETE commands with search conditions. Indexes can moreover be used in join searches." |
| C12 | Write cost: the index must be kept in sync, which adds overhead to data manipulation. Seldom-used indexes should be removed. | S1 | "After an index is created, the system has to keep it synchronized with the table. This adds overhead to data manipulation operations." / "indexes that are seldom or never used in queries should be removed." |
| C13 | Building an index on a large table can take a long time. By default PostgreSQL allows reads but blocks writes during the build. | S1 | "Creating an index on a large table can take a long time. By default, PostgreSQL allows reads ( SELECT statements) to occur on the table in parallel with index creation, but writes ( INSERT , UPDATE , DELETE ) are blocked until the index build is finished." |
| C14 | Storage: a single-column index "saves space and time" compared with a multicolumn one, so an index takes space. An index tree is usually smaller than the table data (MySQL). | S3, S6 | S3: "In most situations, an index on a single column is sufficient and saves space and time." S6: "the size of the index usually is smaller than the table data." |
| C15 | Multicolumn index: a multicolumn B-tree can be used with any subset of the columns, but is most efficient on the leading (leftmost) columns. | S3 | "A multicolumn B-tree index can be used with query conditions that involve any subset of the index's columns, but the index is most efficient when there are constraints on the leading (leftmost) columns." |
| C16 | Multicolumn indexes should be used sparingly. More than three columns rarely help. | S3 | "Multicolumn indexes should be used sparingly." / "Indexes with more than three columns are unlikely to be helpful unless the usage of the table is extremely stylized." |
| C17 | MySQL: any leftmost prefix of a multi-column index can be used. Example (col1, col2, col3). | S5 | "any leftmost prefix of the index can be used by the optimizer to look up rows." / "you have indexed search capabilities on (col1), (col1, col2), and (col1, col2, col3)." |
| C18 | MySQL: if there is a choice between indexes, it normally uses the one that finds the fewest rows (most selective). | S5 | "MySQL normally uses the index that finds the smallest number of rows (the most selective index)." |
| C19 | MySQL: comparing columns of different types can stop use of an index (utf8mb4 vs latin1; string vs number). | S5 | "comparing a utf8mb4 column with a latin1 column precludes use of an index." / "Comparison of dissimilar columns ... may prevent use of indexes if values cannot be compared directly without conversion." |
| C20 | Covering index: a query that uses only columns in an index can get values from the index tree. | S5 | "If a query uses from a table only columns that are included in some index, the selected values can be retrieved from the index tree for greater speed" |
| C21 | Indexes matter less for small tables, or for queries that process most rows. Sequential reads are faster there. | S5 | "Indexes are less important for queries on small tables, or big tables where report queries process most or all of the rows. When a query needs to access most of the rows, reading sequentially is faster than working through an index." |
| C22 | PostgreSQL EXPLAIN shows the plan: a tree of nodes. Scan nodes: sequential scans, index scans, bitmap index scans. | S4 | "The structure of a query plan is a tree of plan nodes." / "sequential scans, index scans, and bitmap index scans." |
| C23 | Seq Scan with WHERE shows a "filter": checks every row. Index Scan shows "Index Cond". | S4 | "the plan node checks the condition for each row it scans, and outputs only the ones that pass the condition." / "Index Scan using tenk1_unique1 on tenk1 ... Index Cond: (unique1 = 42)" |
| C24 | The cost numbers are estimates in arbitrary units. | S4 | "the cost estimates are expressed in arbitrary units" / "Estimated total cost." |
| C25 | EXPLAIN shows the plan. EXPLAIN ANALYZE actually executes the statement, not only plans it, and shows true row counts and times. | S4, S7 | S4: "With this option, EXPLAIN actually executes the query, and then displays the true row counts and true run time accumulated within each plan node" / S7: "The ANALYZE option causes the statement to be actually executed, not only planned." |
| C26 | Estimates vs reality: most important is whether estimated row counts are close to real. | S4 | "The thing that's usually most important to look for is whether the estimated row counts are reasonably close to reality." |
| C27 | MySQL EXPLAIN: key is the index MySQL decided to use; NULL means no index. possible_keys NULL means no relevant index. | S6 | "The key column indicates the key (index) that MySQL actually decided to use." / "If key is NULL, MySQL found no index to use for executing the query more efficiently." / "If this column is NULL ... there are no relevant indexes." |
| C28 | MySQL join type ALL is a full table scan, normally not good if first table. | S6 | "A full table scan is done for each combination of rows from the previous tables. This is normally not good if the table is the first table not marked const" |
| C29 | MySQL: SHOW INDEX FROM tbl_name lists the indexes. | S6 | "To see what indexes a table has, use SHOW INDEX FROM tbl_name." |
| C30 | Plan can change: with LIMIT the planner changes its plan (PostgreSQL). Not on page unless needed. | S4 | "we added a LIMIT so that not all the rows need be retrieved, and the planner changed its mind about what to do." (not used on the page) |

## Not on the page

Index sizes, speed-up factors, and write slowdown numbers: no source gives a general number. Examples with row counts or timings are the tutorial's own, and the page says so.
