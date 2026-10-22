# Course page: SQL vs NoSQL (research notes)

Writer notes for `content/course/sql-vs-nosql.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-sql-vs-nosql/`. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | What's the Difference Between Relational and Non-relational Databases? (AWS) | https://aws.amazon.com/compare/the-difference-between-relational-and-non-relational-databases/ | 2026-10-22 |
| S2 | PostgreSQL 18 docs, 5.5. Constraints | https://www.postgresql.org/docs/current/ddl-constraints.html | 2026-10-22 |
| S3 | PostgreSQL 18 docs, 3.4. Transactions | https://www.postgresql.org/docs/current/tutorial-transactions.html | 2026-10-22 |
| S4 | MongoDB manual, Data Modeling in MongoDB | https://www.mongodb.com/docs/manual/data-modeling/ | 2026-10-22 |
| S5 | MongoDB manual, Schema Validation | https://www.mongodb.com/docs/manual/core/schema-validation/ | 2026-10-22 |
| S6 | MongoDB manual, Transactions | https://www.mongodb.com/docs/manual/core/transactions/ | 2026-10-22 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A relational (SQL) database stores data in tables with rows and columns. Columns hold attributes, rows hold values. | S1 | "A relational database (or SQL database) stores data in tabular format with rows and columns. The columns contain data attributes and the rows have data values." |
| C2 | A key links rows of one table to another, and one query reads both. | S1 | "You use it to relate rows between tables as the foreign key in another table." / "Once two tables are connected, you get data from them both with a single query." |
| C3 | NoSQL databases use a variety of data models: key-value, document, graph. | S1 | "non-relational databases (or NoSQL databases) use a variety of data models" / "Key-value databases", "Document databases", "Graph databases" |
| C4 | A document database stores JSON objects that are flexible, semi-structured, hierarchical. | S1 | "They store data as JSON objects that are flexible, semi-structured, and hierarchical in nature." |
| C5 | Structure: relational follows strict rules for data variations and table relationships. Non-relational is more flexible, for data with changing requirements. | S1 | "Relational databases store data in tabular form and follow strict rules concerning data variations and table relationships." / "Non-relational databases are more flexible and useful for data with changing requirements." |
| C6 | A relational schema is set before inserting data. In a document database, documents in one collection need not have the same fields. | S4 | "You must determine a table's schema before you insert data." / "Documents within a single collection are not required to have the same set of fields." |
| C7 | Relational databases often need joins across tables. Embedding avoids joins. | S4 | "You often need to join data from several different tables to return the data needed by your application." / "embedding data allows you to avoid complex joins across multiple collections" |
| C8 | MongoDB models relationships by embedding or referencing. | S4 | "In MongoDB, you can model relationships by either embedding or referencing your data." |
| C9 | PostgreSQL constraints: check, not-null, unique, primary key, foreign key. | S2 | Section list 5.5.1 Check Constraints, 5.5.2 Not-Null Constraints, 5.5.3 Unique Constraints, 5.5.4 Primary Keys, 5.5.5 Foreign Keys. "A check constraint ... allows you to specify that the value in a certain column must satisfy a Boolean (truth-value) expression." |
| C10 | A constraint is a rule enforced on a column or table (key word definition). | S2 | "A not-null constraint simply specifies that a column must not assume the null value." / "Unique constraints ensure that the data contained in a column, or a group of columns, is unique among all the rows in the table." |
| C11 | Schema validation in MongoDB is optional, and can cover only some fields. Validation is for after the schema is established. | S5 | "Schema validation rules are also flexible, so they don't need to cover every field in a document, unless your application requires that they do." / "After you establish an application schema, use schema validation to prevent unintended schema changes and data type errors." |
| C12 | MongoDB lets you add validation only where needed. | S4 | "Add schema validation only to the sections and aspects of the documents that need stricter control." |
| C13 | By default MongoDB rejects an insert or update that makes an invalid document. | S5 | "By default, MongoDB rejects any insert or update operation that would produce an invalid document." |
| C14 | A PostgreSQL transaction bundles several steps into one all-or-nothing operation. | S3 | "it bundles multiple steps into a single, all-or-nothing operation." |
| C15 | A single-document operation in MongoDB is atomic. MongoDB supports ACID transactions across several documents. | S6 | "In MongoDB, an operation on a single document is atomic." / "MongoDB supports ACID transactions." / "MongoDB supports transactions" for "atomicity of operations on multiple documents" |
| C16 | In most cases a distributed transaction costs more than single-document writes. | S6 | "In most cases, a distributed transaction incurs a greater performance cost over single document writes" |
| C17 | Relational databases follow strict ACID. Non-relational databases offer BASE, with eventual consistency. | S1 | "A relational database model follows strict ACID properties." / "non-relational databases offer a more flexible model of being basically available, soft-state, and eventually consistent (BASE)." |
| C18 | Some NoSQL databases offer ACID with trade-offs. | S1 | "Some non-relational databases may offer ACID compliance with performance or other trade-offs." |
| C19 | Eventual consistency: the state changes over time and becomes consistent. | S1 | "The database state can change over time and eventually becomes consistent." |
| C20 | Relational scaling is typically vertical. Horizontal scaling for read-write needs partitioning and sharding. | S1 | "You typically scale vertically by adding more CPU, or RAM resources, to the server." / "horizontal scaling for read-write workloads requires special strategies like partitioning and sharding." |
| C21 | NoSQL workload spreads across nodes more easily. | S1 | "You can distribute their workload across many nodes more easily." |
| C22 | MongoDB: design the model from the access patterns. Keep together data that is accessed together. | S4 | "data that's accessed together should be stored together. You should structure your data model based on your application's data access patterns to optimize performance." |
| C23 | Relational databases suit predictable data and important relationships. Non-relational suits flexible or changing data. (Vendor view, framed as "depends on data".) | S1 | "Relational databases are the best choice if your data is predictable in terms of size, structure, and access frequency." / "a non-relational model works better for storing data that is flexible in shape or size, or that may change in the future." |

## Tutorial's own text (no cite)

The shop analogy, the learning-platform example, the tester tips, and the rule of thumb (stable data and important relations: start relational; varied shape or one very large workload over many nodes: look at NoSQL) are the tutorial's own. The page says so. The rule of thumb is a simplification of C23 and C20 to C21, marked as a first guess.

## Not on the page

Performance numbers, product names (DynamoDB, Cassandra, Redis), and AWS service claims are not on the page.
