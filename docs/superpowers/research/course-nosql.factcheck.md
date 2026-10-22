# Fact-check: NoSQL Databases (`content/course/nosql.mdx`)

Reviewer: an agent that did not write the page. Sources fetched 2026-10-22 with curl into `/tmp/claude-1000/fc2-nosql/` (HTML stripped to text). Fetched text was treated as data. The quotes below come from my own fetch, not from the research notes. Note: the Cassandra overview shows a "prerelease version" banner; the quoted sentences are about the data model.

## Claims

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Cassandra calls itself a distributed NoSQL database | 7 | PASS | "Apache Cassandra is an open-source, distributed NoSQL database." |
| 2 | MongoDB is a document database; documents look like JSON and can change shape | 1 | PASS | "MongoDB is a document database ... It stores data in flexible, JSON-like documents" |
| 3 | A document is a set of field and value pairs | 2 | PASS | "MongoDB documents are composed of field-and-value pairs" |
| 4 | A value can be a document, an array, or an array of documents | 1 | PASS | "The values of fields may include other documents, arrays, and arrays of documents." |
| 5 | MongoDB keeps documents in collections; a database holds one or more collections | 3 | PASS | "MongoDB stores data records as documents (BSON documents) in collections. A database holds one or more collections." |
| 6 | A collection is like a relational table but does not force a fixed schema | 1 | PASS | "Collections are similar to relational tables but do not enforce a rigid, pre-defined schema." |
| 7 | Documents in one collection can have different shapes | 1 | PASS | "Dynamic schemas support polymorphism, which allows varied structures among documents in the same collection." |
| 8 | Each Redis object is found by a unique string key; object = value; together a key-value pair | 5 | PASS | "Every data object that you store in a Redis database has its own unique key. The key is a string ... the two together are known as as key-value pair." |
| 9 | Redis calls itself a data structure server | 4 | PASS | "Redis is a data structure server." |
| 10 | Redis values can be strings, hashes, lists, sets, sorted sets, streams, and more | 4 | PASS | "Redis Open Source implements the following data types: Strings Bitmaps Bitfields Arrays Geospatial indexes Hashes JSON Lists ... Sets Sorted sets Streams ..." |
| 11 | A hash is a set of field-value pairs | 4 | PASS | "Redis hashes are record types modeled as collections of field-value pairs." |
| 12 | Cassandra uses a partitioned wide-column storage model | 7 | PASS | "It implements a partitioned wide-column storage model with eventually consistent semantics." |
| 13 | A keyspace holds the tables and sets how data is replicated | 7 | PASS | "Keyspace: Specifies the replication strategy for a dataset ... Keyspaces serve as containers for tables." |
| 14 | A row has a primary key of a partition key and, optionally, clustering keys | 7 | PASS | "Row: Contains a collection of columns identified by a unique primary key made up of the partition key and optionally additional clustering keys." |
| 15 | Neo4j data is nodes, relationships, properties; no tables or documents | 9 | PASS | "A Neo4j graph database stores data as nodes, relationships, and properties instead of in tables or documents." |
| 16 | A node is an entity; it can have labels and properties | 9 | PASS | "Nodes are entities in the graph which can: Be tagged with labels ... Hold any number of key-value pairs as properties" |
| 17 | A relationship joins two nodes, has a direction and exactly one type, can have properties | 9 | PASS | "Must always have a start node, an end node, and exactly one type. Must have a direction. Can have properties, like nodes." |
| 18 | MongoDB says its model lets you shape data like the objects in your code | 1 | PASS | "making it easy to model data the same way your application code uses it" / "a way that mirrors the object models in your codebase" |
| 19 | MongoDB says embedded documents and arrays reduce the need for joins | 1 | PASS | "Embedded documents and arrays reduce need for expensive joins that can slow down performance." |
| 20 | Redis lists caching, queuing, event processing as example tasks | 4 | PASS | "help you solve a wide variety of problems, from caching to queuing to event processing" |
| 21 | Cassandra lists design goals: scale out on commodity hardware; queries driven by a partition key | 7 | PASS | "Scaling out on commodity hardware" ... "Partitioned key-oriented queries" |
| 22 | Neo4j says graphs fit relationship questions (A to B), deep hierarchies, hidden connections | 9 | PASS | "how to get from A to B ..." / "Navigate deep hierarchies. Find hidden connections between distant items." |
| 23 | Redis key naming habit: colon, as in `person:1` | 5 | PASS | "there is a convention for using the colon ":" character to split keys into sections (for example, "person:1" ...)" |
| 24 | A key can have an expiration; then Redis destroys it | 5 | PASS | "When the time to live elapses, the key is automatically destroyed." |
| 25 | `EXPIRE` sets the time; `TTL` shows the time left | 5 | PASS | "Use the EXPIRE command to set a key's expiration" / "the TTL command is called in order to check the remaining time to live for the key" |
| 26 | Redis calls itself an in-memory data structure store | 10 | PASS | Page title: "Redis as an in-memory data structure store quick start guide". Source is a title only, but "calls itself" is accurate. |
| 27 | Redis has persistence options: RDB snapshots and an AOF log of writes, to durable storage | 6 | PASS | "RDB persistence performs point-in-time snapshots of your dataset ... AOF persistence logs every write operation received by the server." |
| 28 | Cassandra partition key tells the cluster which node stores the row | 7 | PASS | "the mandatory part of the primary key all rows in Cassandra must have to identify the node in a cluster where the row is stored" |
| 29 | Queries that perform well give the partition key | 7 | PASS | "All performant queries supply the partition key in the query." |
| 30 | Columns after the partition key are clustering columns; their order sets the clustering order | 8 | PASS | "The columns are the columns that follow the partition key in the primary key definition. The order of those columns define the clustering order." |
| 31 | MongoDB stores documents as BSON, a binary form of JSON with more data types | 2 | PASS | "BSON is a binary representation of JSON documents, though it contains more data types than JSON." |
| 32 | Cassandra chooses not to support cross-partition transactions, distributed joins, foreign keys | 7 | PASS | "Cassandra explicitly chooses not to implement ... Cross-partition transactions Distributed joins Foreign keys or referential integrity." |
| 33 | Reason: such operations need cross-partition coordination, typically slow and hard to keep highly available | 7 | PASS | "operations that require cross-partition coordination as they are typically slow and hard to provide highly available global semantics" |
| 34 | MongoDB supports multi-document transactions | 1 | PASS | "MongoDB supports multi-document transactions, which let you run multiple read and write operations as a single all-or-nothing event." |
| 35 | Neo4j says graph databases do not use JOINs; relationships are stored with the data | 9 | PASS | "Graph databases do not use JOINs. Rather, relationships are stored natively alongside the data elements (nodes)" |
| 36 | Common mistake: sources give scaling as a design goal of some products, not as a claim for every product or workload | 7 | PASS | Cassandra's list has "Scaling out on commodity hardware"; no source states a general claim. The negative statement holds for the 10 sources. Cite 7 covers Cassandra only (MongoDB's S1 also lists "Horizontal Scaling" but is not cited here). Minor. |
| 37 | A collection does not enforce a rigid schema | 1 | PASS | "do not enforce a rigid, pre-defined schema" |
| 38 | Cassandra does not support joins and foreign keys | 7 | PASS | Same quote as row 32 ("Distributed joins", "Foreign keys"). Note: the source says "distributed joins", the page says "joins" in "Expecting joins and foreign keys everywhere". Slightly wider, but the sentence is about "everywhere" and the cite is exact for the distributed case. Treated as PASS. |
| 39 | Redis has no namespaces, so avoid name collisions | 5 | PASS | "Redis doesn't support namespaces or other categories for keys, so you must take care to avoid name collisions." |
| 40 | Key words: NoSQL is a loose label that Cassandra's docs use for itself | 7 | PASS | See row 1. |
| 41 | Key words: Document / Collection / Key-value pair definitions | 2, 3, 5 | PASS | See rows 3, 5, 8. |
| 42 | Key words: Partition key finds the node that stores the row | 7 | PASS | See row 28. |
| 43 | Key words: Wide-column is the storage model of Cassandra: partitioned tables of rows and columns | 7 | PASS | "partitioned wide-column storage model" / "Tables are composed of rows and columns ... partitioned based on the columns provided in the partition key." |
| 44 | Key words: Node is an entity; Relationship is a named, directed connection between two nodes | 9 | PASS | "Relationships provide named connections between two nodes" / "Must have a direction." |

Text marked as the tutorial's own, checked for fact claims: "The four families are the tutorial's own simplification" (marked); the real-life example (marked "the tutorial's own example", no fact claimed); the tip callout (marked, no `<Cite>`); "A better question than SQL or NoSQL..." (opinion); "This is a design choice for relationship-heavy data" (line 70, not marked, a mild gloss, not a source fact; not counted as a FAIL). No arithmetic on the page. No unsupported "NoSQL scales better" or "Redis is fast" claim found: the page says "calls itself" for Redis memory and does not state speed.

## Structure check

| Check | Result |
|---|---|
| Every `page.sources` entry is https and cited | PASS (sources 1 to 10 are all cited; every `<Cite n>` from 1 to 10 has a source) |
| 8-word copy check | PASS. I compared the page text with all 10 fetched sources. The longest shared runs are 7 words ("a database holds one or more collections", "how to get from a to b" and "the value and the two together are"). None reaches 8. |
| Section order | PASS. `In plain words`, `When you need it`, `A real-life example`, `Common mistakes`, `What a tester can check`, `Key words` are in order and Key words is last. The page also has `How it works` and `Trade-offs` between them (extra sections; the rules do not forbid them). |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title equals "NoSQL Databases" | PASS |
| No blog, forum, Wikipedia, AI summary, systemdesignbangla.com | PASS (MongoDB Manual, Redis docs, Apache Cassandra docs, Neo4j docs) |

Note for the writer (not a FAIL): the Cassandra pages show a "prerelease version" banner at `doc/latest`.

Open FAILs: 0
