# Course page: NoSQL Databases (research notes)

Writer notes for `content/course/nosql.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-nosql/` (HTML stripped to text). Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | What is MongoDB? (MongoDB Manual) | https://www.mongodb.com/docs/manual/introduction/ | 2026-10-22 |
| S2 | Documents (MongoDB Manual) | https://www.mongodb.com/docs/manual/core/document/ | 2026-10-22 |
| S3 | Databases and Collections in MongoDB (MongoDB Manual) | https://www.mongodb.com/docs/manual/core/databases-and-collections/ | 2026-10-22 |
| S4 | Redis data types (Redis docs) | https://redis.io/docs/latest/develop/data-types/ | 2026-10-22 |
| S5 | Keys and values (Redis docs) | https://redis.io/docs/latest/develop/using-commands/keyspace/ | 2026-10-22 |
| S6 | Redis persistence (Redis docs) | https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/ | 2026-10-22 |
| S7 | Overview (Apache Cassandra documentation) | https://cassandra.apache.org/doc/latest/cassandra/architecture/overview.html | 2026-10-22 |
| S8 | Data definition, CQL (Apache Cassandra documentation) | https://cassandra.apache.org/doc/latest/cassandra/developing/cql/ddl.html | 2026-10-22 |
| S9 | What is a graph database (Neo4j Getting Started) | https://neo4j.com/docs/getting-started/get-started-with-neo4j/graph-database/ | 2026-10-22 |
| S10 | Redis as an in-memory data structure store quick start guide (Redis docs) | https://redis.io/docs/latest/develop/get-started/data-store/ | 2026-10-22 |

Page cite numbers equal the S numbers (n=1 is S1, and so on).

Note: the Cassandra pages (`doc/latest`, and the `doc/5.0` and `doc/stable` URLs) show the banner "You are viewing the documentation for a prerelease version" when fetched. The text of the overview was the same at all three URLs. The page uses only statements about the data model, which are old and stable ideas of Cassandra.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Cassandra's docs call it a distributed NoSQL database. | S7 | "Apache Cassandra is an open-source, distributed NoSQL database." |
| C2 | MongoDB is a document database. It stores data in flexible, JSON-like documents. | S1 | "MongoDB is a document database designed to help developers build modern applications faster. It stores data in flexible, JSON-like documents" |
| C3 | A MongoDB record is a document: field and value pairs. A field value can be another document, an array, or an array of documents. | S1, S2 | S1: "The values of fields may include other documents, arrays, and arrays of documents." S2: "MongoDB documents are composed of field-and-value pairs" |
| C4 | MongoDB stores documents in collections. A database holds one or more collections. | S3 | "MongoDB stores data records as documents (BSON documents) in collections. A database holds one or more collections." |
| C5 | A collection is similar to a relational table but does not enforce a rigid, pre-defined schema. Documents in one collection can have different structures. | S1 | "Collections are similar to relational tables but do not enforce a rigid, pre-defined schema." / "Dynamic schemas support polymorphism, which allows varied structures among documents in the same collection." |
| C6 | MongoDB says embedded documents and arrays reduce the need for joins. | S1 | "Embedded documents and arrays reduce need for expensive joins that can slow down performance." |
| C7 | MongoDB data records are stored as BSON, a binary form of JSON with more data types. | S2 | "MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON." |
| C8 | MongoDB supports multi-document transactions (all-or-nothing). | S1 | "MongoDB supports multi-document transactions, which let you run multiple read and write operations as a single all-or-nothing event." |
| C9 | Redis is a data structure server with native data types, used for tasks from caching to queuing to event processing. | S4 | "Redis is a data structure server. At its core, Redis provides a collection of native data types that help you solve a wide variety of problems, from caching to queuing to event processing." |
| C10 | Redis data types include strings, hashes, lists, sets, sorted sets, streams. A hash is a set of field-value pairs. A string is a sequence of bytes. | S4 | "Strings ... Hashes ... Lists ... Sets ... Sorted sets ... Streams" / "Redis hashes are record types modeled as collections of field-value pairs." / "Redis strings are the most basic Redis data type, representing a sequence of bytes." |
| C11 | Every data object in Redis has its own unique key. The key is a string. The object is the value. Together they are a key-value pair. | S5 | "Every data object that you store in a Redis database has its own unique key. The key is a string that you pass to Redis commands to retrieve the corresponding object or modify its data. The data object associated with a particular key is known as the value and the two together are known as as key-value pair." |
| C12 | Redis keys have few format limits and no namespaces. The colon is a convention (for example "person:1"). | S5 | "Redis doesn't support namespaces or other categories for keys, so you must take care to avoid name collisions. However, there is a convention for using the colon ":" character" |
| C13 | A key can have an expiration. After it, the key is destroyed. EXPIRE sets it, and TTL shows the time left. | S5 | "key is automatically destroyed" (key expiration) / "Use the EXPIRE command to set a key's expiration" / "the TTL command is called in order to check the" remaining time |
| C14 | The Redis quick start guide calls Redis an in-memory data structure store. | S10 | Page title: "Redis as an in-memory data structure store quick start guide" |
| C15 | Redis has persistence options (RDB snapshots, AOF log) to write data to durable storage such as an SSD. | S6 | "Persistence refers to the writing of data to durable storage, such as a solid-state disk (SSD). Redis provides a range of persistence options." / "RDB persistence performs point-in-time snapshots" / "AOF persistence logs every write operation received by the server." |
| C16 | Cassandra uses a partitioned wide-column storage model with eventually consistent semantics. | S7 | "It implements a partitioned wide-column storage model with eventually consistent semantics." |
| C17 | Cassandra data: keyspace (container for tables, sets replication), table (rows and columns, partitioned by partition key), row (identified by a primary key of the partition key plus optional clustering keys). | S7 | "Keyspace: Specifies the replication strategy for a dataset across different datacenters. ... Keyspaces serve as containers for tables." / "Tables are partitioned based on the columns provided in the partition key." / "Row: Contains a collection of columns identified by a unique primary key made up of the partition key and optionally additional clustering keys." |
| C18 | The partition key decides which node stores the row. Queries that perform well give the partition key. | S7 | "Defines the mandatory part of the primary key all rows in Cassandra must have to identify the node in a cluster where the row is stored. All performant queries supply the partition key in the query." |
| C19 | Columns after the partition key in the primary key are clustering columns, and their order sets the clustering order. A table must have at least one partition key. | S8 | "The columns are the columns that follow the partition key in the primary key definition. The order of those columns define the clustering order." / "A table must have at least one partition key" |
| C20 | Cassandra can add new columns to a table with zero downtime. | S7 | "Cassandra tables can flexibly add new columns to tables with zero downtime." |
| C21 | Cassandra chooses not to support cross-partition transactions, distributed joins, and foreign keys. Reason given: they need cross-partition coordination, which is typically slow and hard to keep highly available. | S7 | "Cassandra explicitly chooses not to implement operations that require cross-partition coordination as they are typically slow and hard to provide highly available global semantics. For example, Cassandra does not support: Cross-partition transactions Distributed joins Foreign keys or referential integrity." |
| C22 | Cassandra's design goals include scaling out on commodity hardware and partitioned key-oriented queries. | S7 | "Scaling out on commodity hardware" / "Partitioned key-oriented queries" |
| C23 | A Neo4j graph database stores data as nodes, relationships, and properties, not tables or documents. | S9 | "A Neo4j graph database stores data as nodes, relationships, and properties instead of in tables or documents." |
| C24 | A node is an entity. It can have labels and properties (key-value pairs). | S9 | "Nodes are entities in the graph which can: Be tagged with labels ... Hold any number of key-value pairs as properties" |
| C25 | A relationship connects two nodes. It has a start node, an end node, exactly one type, and a direction. It can have properties. | S9 | "Must always have a start node, an end node, and exactly one type. Must have a direction. Can have properties, like nodes." |
| C26 | Neo4j says graph databases do not use JOINs. Relationships are stored with the data. | S9 | "Graph databases do not use JOINs. Rather, relationships are stored natively alongside the data elements (nodes)" |
| C27 | Neo4j says graphs fit questions about relationships, for example how to get from A to B, and about deep hierarchies and hidden connections. | S9 | "a project's questions and challenges revolve around the relationship between elements, not the elements themselves (e.g. how to get from A to B ...)" / "Navigate deep hierarchies. Find hidden connections between distant items." |

## Not on the page

No claim that NoSQL scales better than SQL, or is faster. Scale and speed statements appear only as "the vendor says" or as design goals. No numbers of nodes or operations per second. The Redis in-memory claim comes only from the guide title (a search of the persistence and quick start pages found no other sentence that says it), so the page says "calls itself" and does not state speed.
