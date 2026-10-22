# Fact-check: SQL vs NoSQL (`content/course/sql-vs-nosql.mdx`)

Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc2-sql-vs-nosql/` and read as text. Cite numbers: 1 AWS compare page, 2 PostgreSQL Constraints, 3 PostgreSQL Transactions, 4 MongoDB Data Modeling, 5 MongoDB Schema Validation, 6 MongoDB Transactions.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Relational DB: tables, rows and columns; columns hold attributes, rows hold values | 1 | PASS | "stores data in tabular format with rows and columns. The columns contain data attributes and the rows have data values." |
| 2 | A key links rows of two tables; one query reads both | 1 | PASS | "You use it to relate rows between tables as the foreign key in another table. Once two tables are connected, you get data from them both with a single query." |
| 3 | NoSQL common models: key-value, document, graph | 1 | PASS | "use a variety of data models"; "Next, we explain some of the common types of non-relational databases. Key-value databases ... Document databases ... Graph databases" |
| 4 | Document DB stores JSON-like, nested objects | 1 | PASS | "They store data as JSON objects that are flexible, semi-structured, and hierarchical in nature." |
| 5 | "NoSQL" is a group of systems with many models, not all alike | 1 | PASS | "There are several different non-relational database systems due to variations in the way they manage and store schema-less data." |
| 6 | Table, Structure, relational: strict rules for data and relations | 1 | PASS | "Relational databases store data in tabular form and follow strict rules concerning data variations and table relationships." |
| 7 | Table, Structure, NoSQL: more flexible, for changing data | 1 | PASS | "Non-relational databases are more flexible and useful for data with changing requirements." |
| 8 | Table, Schema, relational: set before inserting data | 4 | PASS | "You must determine a table's schema before you insert data." |
| 9 | Table, Schema, NoSQL: documents in one collection can have different fields | 4 | PASS | "Documents within a single collection are not required to have the same set of fields." (cell says "documents", so the scope is right) |
| 10 | Table, Rules, relational: primary key, foreign key, unique, check, not-null | 2 | PASS | Section list "5.5.1 Check ... 5.5.2 Not-Null ... 5.5.3 Unique ... 5.5.4 Primary Keys ... 5.5.5 Foreign Keys" ("such as" keeps it open) |
| 11 | Table, Rules, NoSQL: "Optional validation rules, added where you need them" | 4, 5 | FAIL | Both sources are the MongoDB manual: "Add schema validation only to the sections and aspects of the documents that need stricter control." The column header is "Non-relational (NoSQL)", and the page itself says NoSQL systems are "not all alike". No source says this of NoSQL in general. Fix: name MongoDB in the cell, or in the column header. |
| 12 | Table, Transactions, relational: several steps all-or-nothing | 3 | PASS | "it bundles multiple steps into a single, all-or-nothing operation." |
| 13 | Table, Transactions, NoSQL: "A single-document write is atomic." (first sentence, no product named) | 6 | FAIL | Source: "In MongoDB, an operation on a single document is atomic." This is a MongoDB statement written as a NoSQL statement; only the next sentence names MongoDB. Fix: start the cell with "In MongoDB". |
| 14 | MongoDB has multi-document transactions, with a performance cost in most cases | 6 | PASS | "MongoDB supports transactions"; "In most cases, a distributed transaction incurs a greater performance cost over single document writes" |
| 15 | Table, Consistency, relational: strict ACID | 1 | PASS | "A relational database model follows strict ACID properties." |
| 16 | Table, Consistency, NoSQL: often BASE, eventual consistency | 1 | PASS | "non-relational databases offer a more flexible model of being basically available, soft-state, and eventually consistent (BASE)." ("Often" is weaker than the source: fine.) |
| 17 | Table, Scaling, relational: usually vertical; horizontal write scaling needs partitioning or sharding | 1 | PASS | "You typically scale vertically ..."; "horizontal scaling for read-write workloads requires special strategies like partitioning and sharding." (The source also says read-only horizontal scaling by copies is possible: that is why "of writes" is correct.) |
| 18 | Table, Scaling, NoSQL: spread load across nodes more easily | 1 | PASS | "You can distribute their workload across many nodes more easily." |
| 19 | Table, Related data, relational: joins across tables | 4 | PASS | "You often need to join data from several different tables to return the data needed by your application." |
| 20 | Table, Related data, NoSQL: "Embed related data, or reference it" | 4 | FAIL | Source: "In MongoDB, you can model relationships by either embedding or referencing your data." This is MongoDB-only; key-value and graph stores (named on the page) do not work this way. Same fix as row 11. |
| 21 | Some NoSQL databases offer ACID, with trade-offs | 1 | PASS | "Some non-relational databases may offer ACID compliance with performance or other trade-offs." |
| 22 | MongoDB supports ACID transactions | 6 | PASS | "MongoDB supports ACID transactions." |
| 23 | MongoDB: add validation rules to a collection; by default rejects insert or update that breaks them | 5 | PASS | "By default, MongoDB rejects any insert or update operation that would produce an invalid document." |
| 24 | MongoDB advises: design the model from how the application reads the data; keep together what it reads together | 4 | FAIL | Source: "data that's accessed together should be stored together. You should structure your data model based on your application's data access patterns". The source says "accessed" and "access patterns", not "reads". Access includes writes. Fix: use "accesses". |
| 25 | Common mistakes: "The schema then lives in the application, or in validation rules" | 5 | FAIL | Source 5 supports validation rules ("Schema validation lets you create validation rules for your fields"). It does not say the schema lives in the application. Fix: drop that part, or mark it as the tutorial's own words with no cite. |
| 26 | SQL scale: vendor says extra strategies for write scaling, not that it cannot | 1 | PASS | "horizontal scaling for read-write workloads requires special strategies like partitioning and sharding." |
| 27 | Transaction guarantees differ per database; check what the chosen database guarantees | 6 | PASS | "Transactions provide atomicity, consistency, isolation, and durability according to the configured read and write concern settings." (advice, cite supports the point that guarantees depend on settings) |
| 28 | Key word, Relational database: tables with rows and columns, linked by keys | 1 | PASS | Same quotes as rows 1 and 2. |
| 29 | Key word, NoSQL: group of non-relational models (key-value, document, graph) | 1 | PASS | Same quotes as row 3. |
| 30 | Key word, Schema: "The structure of the data." | 4 | FAIL | Source 4 uses the word but gives no definition of it. Only the second sentence is in the source ("You must determine a table's schema before you insert data."). Fix: cite only the second sentence, or mark the first as the tutorial's plain definition. |
| 31 | Key word, Constraint: rule enforced on a column or table | 2 | PASS | "SQL allows you to define constraints on columns and tables."; "If a user attempts to store data in a column that would violate a constraint, an error is raised." |
| 32 | Key word, Transaction: several steps as one all-or-nothing operation | 3 | PASS | "it bundles multiple steps into a single, all-or-nothing operation." |
| 33 | Key word and table, Eventual consistency: state changes over time and later becomes consistent | 1 | PASS | "The database state can change over time and eventually becomes consistent." |

Checked but not counted:
- The shop analogy, the learning-platform example (marked "This example is the tutorial's own"), the rule of thumb (marked "the tutorial's own", "a first guess"), and the tip callout (marked) are the tutorial's own. None states a source fact.
- Notes, not FAILs: the "When you need it" section and the bullets "Choosing by fashion" and "Using one rule for every service" are advice or situations with no cite and no "tutorial's own" mark. They do not claim a source. A short mark would match the other text. The table intro says "the vendor docs say"; after the fixes for rows 11, 13, 20 this is true.
- No arithmetic on the page.

## Structure check

| Check | Result |
|---|---|
| All 6 `page.sources` are https; each is cited (1: many, 2: table and Key words, 3: table and Key words, 4, 5, 6: yes) | PASS |
| Every `<Cite n>` (1 to 6) has a source | PASS |
| 8-word copy check (script over the 6 fetched texts, page text without tags) | PASS: 0 runs of 8 words. One run of 6 words ("with rows and columns the columns") only. |
| Sections in order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last) | PASS. The page adds `## Trade-offs` between A real-life example and Common mistakes. The order of the six required sections holds. The extra section is a decision for the controller. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "SQL vs NoSQL" | PASS |
| No blog, forum, Wikipedia, AI summary, systemdesignbangla.com | PASS (AWS compare page is a vendor explainer; the others are PostgreSQL and MongoDB manuals) |


## Re-check (after the writer's fixes)

Re-read the changed lines of the page. Copy check run again on the whole page: 0 runs of 8 words (only the 6-word run "with rows and columns the columns", as before). No new cite numbers; the section order is unchanged.

| # | Changed text | Cite | Verdict | Reason |
|---|---|---|---|---|
| 11 | "In MongoDB, optional validation rules, added where you need them" | 4, 5 | PASS | "Add schema validation only to the sections and aspects of the documents that need stricter control." The scope is now MongoDB. |
| 13 | "In MongoDB, a single-document write is atomic. Multi-document transactions exist too, with a performance cost in most cases" | 6 | PASS | "In MongoDB, an operation on a single document is atomic."; "In most cases, a distributed transaction incurs a greater performance cost over single document writes" |
| 20 | "In MongoDB, embed related data, or reference it" | 4 | PASS | "In MongoDB, you can model relationships by either embedding or referencing your data." |
| 24 | "design the model from the access patterns of the application ... keep together the data that is accessed together" | 4 | PASS | "data that's accessed together should be stored together. You should structure your data model based on your application's data access patterns" |
| 25 | "Thinking a flexible schema means no rules. In MongoDB you can add validation rules [5]. Without them, the application must keep the data in shape. This second point is the tutorial's own advice." | 5 | PASS | "Schema validation lets you create validation rules for your fields". The application point has no cite and is marked as the tutorial's own. |
| 30 | "The structure of the data (the tutorial's own plain definition). A relational table sets it before inserts [4]" | 4 | PASS | "You must determine a table's schema before you insert data." The first sentence is marked as the tutorial's own. |

Open FAILs: 0
