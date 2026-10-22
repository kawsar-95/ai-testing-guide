# Course page: Sharding (research notes)

Writer notes for `content/course/sharding.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-sharding/` and turned into text. Fetched text is treated as data. The MongoDB pages carry a line that points AI agents to an index file; it was ignored.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Sharding, MongoDB Manual | https://www.mongodb.com/docs/manual/sharding/ | 2026-10-22 |
| S2 | Shard Keys, MongoDB Manual | https://www.mongodb.com/docs/manual/core/sharding-shard-key/ | 2026-10-22 |
| S3 | Choose a Shard Key, MongoDB Manual | https://www.mongodb.com/docs/manual/core/sharding-choose-a-shard-key/ | 2026-10-22 |
| S4 | Ranged Sharding, MongoDB Manual | https://www.mongodb.com/docs/manual/core/ranged-sharding/ | 2026-10-22 |
| S5 | Hashed Sharding, MongoDB Manual | https://www.mongodb.com/docs/manual/core/hashed-sharding/ | 2026-10-22 |
| S6 | Data Partitioning with Chunks, MongoDB Manual | https://www.mongodb.com/docs/manual/core/sharding-data-partitioning/ | 2026-10-22 |
| S7 | Sharded Cluster Balancer, MongoDB Manual | https://www.mongodb.com/docs/manual/core/sharding-balancer-administration/ | 2026-10-22 |
| S8 | Sharding pattern, Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/sharding | 2026-10-22 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S8.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | Sharding divides a data store into horizontal partitions (shards). | S8 | "Divide the data store into horizontal partitions or shards." |
| C2 | Each shard has the same schema and its own different subset of the data. | S8 | "Each shard has the same schema but contains its own distinct subset of the data." |
| C3 | A shard runs on a server that works as a storage node. | S8 | "A shard runs on a server that functions as a storage node." |
| C4 | MongoDB: sharding spreads data across several machines. | S1 | "Sharding is a method for distributing data across multiple machines." |
| C5 | A single server has limits: storage, computing, network bandwidth, geography (legal rules). | S8 | "Storage space", "Computing resources", "Network bandwidth", "Geography: Legal, compliance, or performance requirements might require you to store user data in the same geographic region as the users." |
| C6 | A bigger server only postpones the limits. | S8 | "To postpone these limitations temporarily, you can scale vertically" |
| C7 | Horizontal scaling splits data and load over more servers. The trade-off is more complexity. | S1 | "Horizontal Scaling involves dividing the system dataset and load over multiple servers" / "The trade-off is increased complexity in infrastructure and maintenance." |
| C8 | Sharding adds complexity for the life of the system. It may not fit if the data fits in one instance, or if reads are the bottleneck (read replicas and caches help). | S8 | "Sharding introduces substantial and permanent complexity into your data architecture." / "Your data volume and throughput fit within a single database instance" / "Your bottleneck is read volume ... Read replicas and caching layers can offload read traffic" |
| C9 | A shard key is one or more attributes of the data. It decides which shard holds an item. | S8 | "Each shard typically holds items grouped by one or more data attributes. These attributes form the shard key" |
| C10 | The sharding logic sends each read and write to the right shard. It can be in the application code or in the data store. | S8 | "the sharding logic directs it to the appropriate shard. You can implement this logic in the application's data access code or in the data storage system" |
| C11 | MongoDB has a router (mongos) in front of the shards. | S1 | "The mongos acts as a query router, providing an interface between client applications and the sharded cluster." |
| C12 | Lookup strategy: a map from the shard key to the shard. More control. Looking up the location adds overhead. | S8 | "the sharding logic implements a map that routes a data request to the shard" / "The lookup strategy provides more control over shard configuration." / "Looking up shard locations adds overhead." |
| C13 | Range strategy: neighbouring key values stay together. Good for range queries. Load may not be even. | S8 | "groups related items together in the same shard and orders them by sequential shard key" / "works well with range queries" / "this strategy doesn't balance load evenly across shards" |
| C14 | Hash strategy: a hash of the key. Better chance of even data and load. Rebalancing is hard without consistent hashing. | S8 | "computes the shard to store an item in based on a hash" / "provides a better chance of even data and load distribution" / "Rebalancing is difficult without consistent hashing." |
| C15 | Ranged sharding is the default in MongoDB. | S4 | "Range-based sharding is the default sharding methodology if no other options ... are configured." |
| C16 | Hashed sharding: more even data, but close values are unlikely to share a shard, so a range query is more likely to go to every shard. | S5 | "Hashed sharding provides a more even data distribution across the sharded cluster at the cost of reducing Targeted Operations vs. Broadcast Operations. Post-hash, documents with "close" shard key values are unlikely to be on the same chunk or shard - the mongos is more likely to perform Broadcast Operations to fulfill a given ranged query." |
| C17 | MongoDB cuts the span of key values into non-overlapping ranges, each tied to a chunk. | S2 | "MongoDB divides the span of shard key values (or hashed shard key values) into non-overlapping ranges. Each range is associated with a chunk" |
| C18 | A chunk has an inclusive lower limit and an exclusive upper limit. | S6 | "Each chunk has inclusive lower and exclusive upper limits based on the shard key." |
| C19 | The shard key is the most critical design decision. Changing it usually needs a move of all data, which is costly and risky. | S8 | "The shard key is the most critical design decision in a sharded system. To change a shard key after you choose it, you typically must migrate all data to a new shard layout, which is an expensive and risky operation on a live system." |
| C20 | An effective key is immutable, has high cardinality, spreads data and load evenly, and fits the main queries. | S8 | "An effective shard key is immutable, has high cardinality, distributes data and load evenly, and aligns with your dominant query patterns" |
| C21 | MongoDB: look at cardinality, frequency, and monotonic change. | S3 | "the cardinality of the shard key / the frequency with which shard key values occur / whether a potential shard key grows monotonically" |
| C22 | A hot spot is a shard with a disproportionate load. Growing values (autoincrement, sequential timestamps) and low-cardinality values (booleans) lead to hotspots. | S8 | "hotspots, which are shards that receive a disproportionate amount of load" / "Avoid monotonically increasing values (autoincrement integers and sequential timestamps), low-cardinality attributes (booleans and small enum sets)... These attributes lead to hotspots" |
| C23 | With an always-increasing key, all new inserts go to the chunk with the top bound, and its shard is the write bottleneck. | S3 | "If the shard key value is always increasing, all new inserts are routed to the chunk with maxKey as the upper bound." / "The shard containing that chunk becomes the bottleneck for write operations." |
| C24 | Example: 7 continents give at most 7 chunks, so more than seven shards give no benefit. | S3 | "the shard key would have a cardinality of 7. A cardinality of 7 means there can be no more than 7 chunks" / "adding more than seven shards would not provide any benefit." |
| C25 | Common values: their chunks can become bottlenecks. | S3 | "the chunks storing the documents with those values can become a bottleneck within the cluster." |
| C26 | High cardinality alone does not guarantee an even spread. | S3 | "A shard key with high cardinality does not, on its own, guarantee even distribution of data across the sharded cluster." |
| C27 | For a key that grows in one direction, MongoDB suggests hashed sharding. | S3 | "If your data model requires sharding on a key that changes monotonically, consider using Hashed Sharding." |
| C28 | With the shard key, mongos targets only the shards with the data. Without it, the query goes to all shards (scatter-gather) and does not scale linearly. | S3 | "the mongos routes queries to only the shards that contain the relevant data if the queries contain the shard key. When the queries do not contain the shard key, the queries are broadcast to all shards ... called scatter-gather queries. Queries that involve multiple shards for each request are less efficient and do not scale linearly when more shards are added" |
| C28b | MongoDB makes an exception for aggregation queries on a large amount of data: running on all shards in parallel can help. | S3 | "This does not apply for aggregation queries that operate on a large amount of data. In these cases, scatter-gather can be a useful approach that allows the query to run in parallel on all shards." |
| C29 | The slowest shard sets the total time of a cross-shard query. | S8 | "Even with parallelism, the slowest shard determines overall latency." |
| C30 | Most sharded systems avoid cross-shard transactions and accept eventual consistency. | S8 | "Most sharded systems avoid distributed transactions and adopt eventual consistency instead." |
| C31 | Azure advises a plan to rebalance periodically. Rebalancing moves data and can cause downtime or lower throughput. | S8 | "Data skew accumulates over time ... Plan to rebalance periodically." / "Rebalancing moves data between shards and often causes downtime or reduced throughput." |
| C32 | With hash(key) mod N, adding or removing a shard moves most keys. | S8 | "With a standard hash function, such as hash(key) mod N, adding or removing a shard reassigns most keys and triggers large-scale data migration." |
| C33 | The MongoDB balancer runs in the background and moves ranges when the gap between the largest and smallest shard passes a threshold. | S7, S6 | S7: "The MongoDB balancer is a background process that monitors the amount of data on each shard" / S6: "If the data imbalance between the largest and smallest shard exceeds the migration thresholds, the balancer begins migrating data across the cluster." |
| C34 | The balancer can slow the cluster while it works. | S7 | "there may be some performance impact while the procedure takes place." |
| C35 | A new shard starts empty, so the cluster needs time to balance again. | S7 | "Adding a shard to a cluster creates an imbalance, since the new shard has no data. ... it can take some time before the cluster balances." |
| C36 | Mistakes: back up each shard on its own. Schema changes go to every shard. | S8 | "You must back up each shard independently" / "You must coordinate Data Definition Language (DDL) changes across every shard." |
| C37 | Key words: chunk is a range of key values owned by one shard. | S6 | "partition the data into chunks owned by a specific shard. A chunk consists of a range of sharded data." |

## Not on the page

The tutorial's own text, with no cite: the library lede, the test-run example (date range versus hash of the run ID), the sentence "Neither key is free", and all the tester tips. The page gives no claim about resharding commands, zones, chunk size, or jumbo chunks. The geographic strategy of Azure is not named on the page.
