# Course page: Database Federation (research notes)

Writer notes for `content/course/database-federation.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-database-federation/`. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Data partitioning guidance, Azure Architecture Center (Microsoft Learn) | https://learn.microsoft.com/en-us/azure/architecture/best-practices/data-partitioning | 2026-10-22 |

Page cite number: n=1 is S1. The page does not cite "Data partitioning strategies", because it covers sharding only, and this page is not about sharding.

## Framing (the tutorial's own, no cite)

S1 does not use the word "federation". It uses "functional partitioning". The page uses "database federation" for this one meaning: one database for each business area of an app. The page says that the term has other meanings, such as a query that reads from several data sources. That sentence and the mapping of the word to S1 are the tutorial's own.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Functional partitioning stores data by how each bounded context uses it. | S1, Select the right partitioning strategy | "Functional partitioning. In this strategy, data is aggregated according to how each bounded context in the system uses the data." |
| C2 | Example: an e-commerce system can keep invoice data in one partition and product inventory data in another. | S1 | "an e-commerce system might store invoice data in one partition and product inventory data in another." |
| C3 | A bounded context is a distinct business area with clear boundaries for data and functionality. | S1, Terminology | "A distinct business area or domain that defines clear boundaries for data and functionality, often the basis for functional partitioning decisions." |
| C4 | If a bounded context can be found for each business area, functional partitioning can improve isolation and data access speed. | S1, Functional partitioning | "When a bounded context can be identified for each distinct business area in an application, functional partitioning can improve isolation and data access performance." |
| C5 | Another common use is to separate read-write data from read-only data. | S1 | "Another common use for functional partitioning is to separate read-write data from read-only data." |
| C6 | It can reduce contention for data access between parts of a system. | S1 | "This partitioning strategy can help reduce data access contention across different parts of a system." |
| C7 | A partition can use a different type of data store, chosen by cost and built-in features. Example: large binary data in blob storage, structured data in a document database. | S1, Why partition data | "You can deploy each partition on a different type of data store based on the cost and the built-in features that the data store offers. For example, you can store large binary data in blob storage, and store structured data in a document database." |
| C8 | Partitions give availability: if one instance fails, only the data in that partition is unavailable and the other partitions continue. | S1 | "If one instance fails, only the data in that partition is unavailable. Operations continue in other partitions." |
| C9 | Partitioning does not replace good database design. Indexes are still needed. | S1, Design partitions for query performance | "partitioning isn't an alternative to appropriate database design and configuration. Ensure that you implement the necessary indexes." |
| C10 | With vertical and functional partitioning, a query can name the partition. | S1, Design partitions for... (considerations) | "With vertical and functional partitioning, queries can specify the partition." |
| C11 | A query that crosses partitions is slower than one in a single partition. Optimizing partitions for one set of queries can hurt another set. | S1 | "It can be more time-consuming to query across partitions rather than querying within a single partition. But optimizing partitions for one set of queries might adversely affect other sets of queries." |
| C12 | A cross-partition operation (query or transaction) usually has higher latency and more complexity. | S1, Terminology | "A query or transaction that accesses data across multiple partitions. These operations typically have higher latency and complexity than single-partition operations." |
| C13 | Guidance: keep the data for the most common operations together in one partition. | S1 | "Try to keep data for the most common database operations together in a partition to minimize cross-partition data access operations." |
| C14 | If you must query across partitions, run parallel queries and aggregate the results in the application. This does not work if the result of one query feeds the next. | S1 | "run parallel queries and aggregating the results within the application. In some cases, you can't use this approach, for example if the result from one query is used in the next query." |
| C15 | With vertical and functional partitions, the application is responsible for referential integrity across partitions. Minimize the need for it. | S1 | "Where possible, minimize requirements for referential integrity across vertical and functional partitions. In these schemes, the application is responsible for maintaining referential integrity across partitions." |
| C16 | Joins across partitions are inefficient, because the application usually runs consecutive queries based on a key and then a foreign key. | S1 | "Queries that join data across multiple partitions are inefficient because the application typically performs consecutive queries that are based on a key and then a foreign key." |
| C17 | Instead, consider replicating or de-normalizing the data. If a cross-partition join is needed, run parallel queries and join in the application. | S1 | "Instead, consider replicating or de-normalizing the relevant data. If cross-partition joins are necessary, run parallel queries over the partitions and join the data within the application." |
| C18 | Replicating data across partitions can improve availability and speed, but it brings consistency issues: synchronizing takes time, and partitions hold different values meanwhile. | S1, Design partitions for availability | "Replicate critical data across partitions. This strategy improves availability and performance but can also introduce consistency issues. It takes time to synchronize changes with every replica. During synchronization, different partitions contain different data values." |
| C19 | Some data stores give transactional consistency only inside one partition. Avoid transactions across partitions. If you need them, build them in the application, because most partitioning systems do not support them natively. | S1 | "Avoid transactions that access data in multiple partitions. Some data stores implement transactional consistency and integrity for operations that modify data but only when the data is located in a single partition. If you need transactional support across multiple partitions, implement it as part of your application logic because most partitioning systems don't provide native support." |
| C20 | Eventual consistency: each partition is updated separately, application logic makes sure the updates finish, and it handles the inconsistencies a reader can see meanwhile. | S1 | "The data in each partition is updated separately, and the application logic ensures that the updates finish successfully. The application logic also handles the inconsistencies that arise from querying data while an eventually consistent operation runs." |
| C21 | Evaluate whether strong consistency is a requirement. | S1 | "Evaluate whether strong consistency is a requirement." |
| C22 | Keep data of the same criticality in the same partition, so it can be backed up at the same frequency. | S1, Design partitions for operational management | "Place data that has the same level of criticality in the same partition so that it can be backed up at the same frequency." |
| C23 | Backup and restore of partitioned data can make logical consistency hard to keep. | S1 | "it can be challenging to maintain logical consistency during backup and restore operations." |
| C24 | A single partitioning strategy is usually enough. If an entity has throughput and query needs, use functional partitioning on that entity first, and add horizontal partitioning if that is not enough. | S1 | "If an entity has throughput and query performance requirements, use functional partitioning that's based on that entity. If this allocation still doesn't satisfy the requirements, you can add horizontal partitioning. A single partitioning strategy is usually adequate" |
| C25 | Horizontal partitioning (sharding): every partition has the same schema and holds a subset of the data. | S1 | "each partition is a separate data store, but all partitions have the same schema. Each partition is known as a shard" |

## Not on the page

The page gives no claim about federated queries, "federated databases" in a product, or vendor features. Those meanings are named only as the tutorial's own remark. The page gives no number or limit.

## Fix round 1 additions

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C26 | The PaaS caveat: high availability from partitioning matters less for managed PaaS data stores. | S1, Why partition data | "This consideration is less relevant for managed platform as a service (PaaS) data stores because they have built-in redundancy." |
| C27 | The Azure page does not use the word "federation". | S1 (whole page) | Tutorial's own remark. It uses "functional partitioning". |
