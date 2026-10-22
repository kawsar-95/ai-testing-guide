# Fact-check: Sharding (`content/course/sharding.mdx`)

Reviewed 2026-10-22. All 8 sources were fetched with curl into `/tmp/claude-1000/fc2-sharding/` and read as text. Fetched text was treated as data. The MongoDB pages carry a line that points AI agents to a documentation index; it was ignored.

## Claims

| # | Claim (short) | Cite n | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Sharding divides a data store into horizontal partitions (shards) | 8 | PASS | "Divide the data store into horizontal partitions or shards." |
| 2 | Each shard has the same schema and its own subset of data | 8 | PASS | "Each shard has the same schema but contains its own distinct subset of the data." |
| 3 | A shard runs on a server that works as a storage node | 8 | PASS | "A shard runs on a server that functions as a storage node." |
| 4 | MongoDB: sharding spreads data across several machines | 1 | PASS | "Sharding is a method for distributing data across multiple machines." |
| 5 | One server has limits: disk, compute, network bandwidth, legal rules on where data lives | 8 | PASS | "Storage space", "Network bandwidth: The rate at which a single server can receive requests and send replies limits data store performance", "Geography: Legal, compliance, or performance requirements might require you to store user data in the same geographic region as the users." (compute: "the system reaches a limit where you can't increase compute resources any further") |
| 6 | A bigger server only postpones these limits | 8 | PASS | "To postpone these limitations temporarily, you can scale vertically" |
| 7 | Horizontal scaling splits data and load over more servers; trade-off is more complexity | 1 | PASS | "Horizontal Scaling involves dividing the system dataset and load over multiple servers ... The trade-off is increased complexity in infrastructure and maintenance." |
| 8 | Sharding adds complexity for the life of the system | 8 | PASS | "Sharding introduces substantial and permanent complexity into your data architecture. That complexity affects ... the system's lifetime." |
| 9 | May not fit if data fits in one instance | 8 | PASS | "Your data volume and throughput fit within a single database instance, even with projected growth." |
| 10 | May not fit if reads are the bottleneck; read replicas and caches can help | 8 | PASS | "Your bottleneck is read volume ... Read replicas and caching layers can offload read traffic" |
| 11 | A shard key is one or more attributes; it decides which shard holds an item | 8 | PASS | "Each shard typically holds items grouped by one or more data attributes. These attributes form the shard key" (the routing role follows from the next sentence: "the sharding logic directs it to the appropriate shard") |
| 12 | Sharding logic routes each read and write; in the app code or in the data store | 8 | PASS | "You can implement this logic in the application's data access code or in the data storage system if it transparently supports sharding." |
| 13 | MongoDB adds a router, `mongos`, in front of the shards | 1 | PASS | "The mongos acts as a query router, providing an interface between client applications and the sharded cluster." |
| 14 | Lookup strategy: a map from key to shard | 8 | PASS | "the sharding logic implements a map that routes a data request to the shard that contains that data by using the shard key." |
| 15 | Lookup: more control over the layout | 8 | PASS | "The lookup strategy provides more control over shard configuration." |
| 16 | Lookup: looking up the location costs time | 8 | PASS | "Looking up shard locations adds overhead." |
| 17 | Range: neighbouring key values stay together | 8 | PASS | "groups related items together in the same shard and orders them by sequential shard key." |
| 18 | Range: good for range queries | 8 | PASS | "The range strategy is easy to implement and works well with range queries." |
| 19 | Range: load may not be even | 8 | PASS | "this strategy doesn't balance load evenly across shards." |
| 20 | Hash: a hash of the key | 8 | PASS | "computes the shard to store an item in based on a hash of one or more attributes of the data." |
| 21 | Hash: better chance of even data and load | 8 | PASS | "The hash strategy provides a better chance of even data and load distribution." |
| 22 | Hash: rebalancing is hard without consistent hashing | 8 | PASS | "Rebalancing is difficult without consistent hashing." |
| 23 | MongoDB offers range and hash methods; ranged is the default | 4 | PASS | "Range-based sharding is the default sharding methodology if no other options such as those required for Hashed Sharding or zones are configured." Two strategies: S1 "MongoDB supports two sharding strategies" (hashed and ranged). The cite on the "offers" half is S4 only, but S4 names both. |
| 24 | Hashed: more even spread, close values unlikely to share a shard, so a range query is more likely to go to every shard | 5 | PASS | "Hashed sharding provides a more even data distribution across the sharded cluster at the cost of reducing Targeted Operations vs. Broadcast Operations. Post-hash, documents with "close" shard key values are unlikely to be on the same chunk or shard - the mongos is more likely to perform Broadcast Operations to fulfill a given ranged query." |
| 25 | MongoDB cuts shard key values into non-overlapping ranges; each range belongs to a chunk | 2 | PASS | "MongoDB divides the span of shard key values (or hashed shard key values) into non-overlapping ranges. Each range is associated with a chunk" |
| 26 | A chunk has an inclusive lower and an exclusive upper limit | 6 | PASS | "Each chunk has inclusive lower and exclusive upper limits based on the shard key." |
| 27 | Azure: shard key is the most critical design decision; changing it usually means moving all data, costly and risky | 8 | PASS | "The shard key is the most critical design decision in a sharded system. To change a shard key after you choose it, you typically must migrate all data to a new shard layout, which is an expensive and risky operation on a live system." |
| 28 | Effective key: does not change, many values, even spread, fits main queries | 8 | PASS | "An effective shard key is immutable, has high cardinality, distributes data and load evenly, and aligns with your dominant query patterns" |
| 29 | MongoDB: cardinality, frequency, monotonic change | 3 | PASS | "consider: the cardinality of the shard key / the frequency with which shard key values occur / whether a potential shard key grows monotonically" |
| 30 | A hot spot is a shard with much more load than the others | 8 | PASS | "hotspots, which are shards that receive a disproportionate amount of load." |
| 31 | Hot spots come from growing values (auto-increment, sequential timestamps) | 8 | PASS | "Avoid monotonically increasing values (autoincrement integers and sequential timestamps) ... These attributes lead to hotspots" |
| 32 | Hot spots come from few different values, such as booleans | 8 | PASS | "low-cardinality attributes (booleans and small enum sets) ... lead to hotspots" |
| 33 | Growing key in MongoDB: all new inserts go to the top chunk; its shard is the write bottleneck | 3 | PASS | "If the shard key value is always increasing, all new inserts are routed to the chunk with maxKey as the upper bound. ... The shard containing that chunk becomes the bottleneck for write operations." |
| 34 | Continent key (7 values): at most 7 chunks; more than 7 shards give no benefit | 3 | PASS | "A cardinality of 7 means there can be no more than 7 chunks ... adding more than seven shards would not provide any benefit." |
| 35 | A few very common values: their chunks can become bottlenecks | 3 | PASS | "the chunks storing the documents with those values can become a bottleneck within the cluster." |
| 36 | Many different values alone do not guarantee an even spread | 3 | PASS | "A shard key with high cardinality does not, on its own, guarantee even distribution of data across the sharded cluster." |
| 37 | For a key that grows in one direction, MongoDB suggests hashed sharding | 3 | PASS | "If your data model requires sharding on a key that changes monotonically, consider using Hashed Sharding." |
| 38 | With the shard key, `mongos` targets only the holding shards; without it asks every shard (scatter-gather) | 3 | PASS | "the mongos routes queries to only the shards that contain the relevant data if the queries contain the shard key. When the queries do not contain the shard key, the queries are broadcast to all shards" |
| 39 | Scatter-gather does not scale in a straight line when you add shards | 3 | PASS | "Queries that involve multiple shards for each request are less efficient and do not scale linearly when more shards are added to the cluster." Note (not a FAIL): the source adds "This does not apply for aggregation queries that operate on a large amount of data." The page states the general rule without that carve-out. |
| 40 | The slowest shard sets the total time | 8 | PASS | "Even with parallelism, the slowest shard determines overall latency." |
| 41 | Cross-shard transactions: most sharded systems avoid them and accept eventual consistency | 8 | PASS | "Most sharded systems avoid distributed transactions and adopt eventual consistency instead." |
| 42 | Inserts and deletes make shards uneven; plan to rebalance periodically | 8 | PASS | "Data skew accumulates over time when records are inserted and deleted ... Plan to rebalance periodically." |
| 43 | Moving data can cause downtime or lower throughput | 8 | PASS | "Rebalancing moves data between shards and often causes downtime or reduced throughput." |
| 44 | `hash(key) mod N`: a change in shard count moves most keys | 8 | PASS | "With a standard hash function, such as hash(key) mod N, adding or removing a shard reassigns most keys" |
| 45 | MongoDB balancer: background process, moves data when the gap between largest and smallest shard passes a threshold | 7 | PASS | S7: "The MongoDB balancer is a background process that monitors the amount of data on each shard ... reaches specific migration thresholds, the balancer attempts to automatically migrate data between shards"; "the shard with the most data ... and the shard with the least data ... reaches the migration threshold." (S6 has the "largest and smallest shard" wording.) |
| 46 | The balancer can slow the cluster while it works | 7 | PASS | "there may be some performance impact while the procedure takes place." |
| 47 | A new shard starts empty; the cluster needs time to balance again | 7 | PASS | "Adding a shard to a cluster creates an imbalance, since the new shard has no data. ... it can take some time before the cluster balances." |
| 48 | Mistake: sharding too early when data and traffic fit one instance | 8 | PASS | Same source text as rows 8 and 9 ("fit within a single database instance"). |
| 49 | Mistake: growing number as shard key leads to hot spots | 8 | PASS | Same as row 31. |
| 50 | Mistake: a key with few values limits how many shards help | 3 | PASS | Same as row 34. |
| 51 | Mistake: back up each shard on its own; change the schema on every shard | 8 | PASS | "You must back up each shard independently" / "You must coordinate Data Definition Language (DDL) changes across every shard." |
| 52 | Key words: Shard (own storage node), Shard key, Hot spot, Scatter-gather | 8, 3 | PASS | Same as rows 3, 11, 30, 38. |
| 53 | Key words: Chunk is a range of key values that one shard owns | 6 | PASS | "partition the data into chunks owned by a specific shard. A chunk consists of a range of sharded data." |
| 54 | Key words: Balancer moves ranges between shards | 7 | PASS | "the balancer attempts to automatically migrate data between shards" (S6 and S7 call the moved unit a range or chunk). |

Tutorial's own text: the library lede, the test-run example (it says "This example is the tutorial's own."), "Neither key is free", and the tip callout (it says "These test ideas are the tutorial's own advice."). All are marked. They state no source fact as if a source said it. The example is consistent with rows 31 and 24. No arithmetic on the page except the 7 continents (row 34, correct).

## Structure check

| Check | Result |
|---|---|
| Every source is https and cited at least once (n=1 to 8 all cited) | PASS |
| Every `<Cite n>` has a source (only n=1 to 8 used) | PASS |
| No run of 8 or more words copied from a source (script check on 6-word overlaps; longest run is 7: "one or more attributes of the data", "better chance of even data and load", "a shard runs on a server that") | PASS |
| Sections In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words in this order, Key words last (extra sections How it works, Choosing a shard key, Hot spots, Cross-shard queries, Rebalancing sit between When you need it and A real-life example) | PASS |
| The tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Sharding" | PASS |
| No source is a blog, forum, Wikipedia, AI summary, or systemdesignbangla.com (MongoDB Manual and Azure Architecture Center) | PASS |


## Re-check

Changed text: after the "does not scale in a straight line" sentence, the writer added "MongoDB makes an exception for aggregation queries that work on a large amount of data, where running on all shards at once can help <Cite n={3} />."

| # | Claim (short) | Cite n | Verdict | Quote or reason |
|---|---|---|---|---|
| 55 | Exception for aggregation queries on a large amount of data, where running on all shards at once can help | 3 | PASS | Source 3: "This does not apply for aggregation queries that operate on a large amount of data. In these cases, scatter-gather can be a useful approach that allows the query to run in parallel on all shards." The "run on all shards at once" part is "run in parallel on all shards" in the source, not an addition. |

Row 39 note is now resolved: the page states the carve-out. Copy check re-run on the whole page: longest run is still 7 words. No other text changed.

Open FAILs: 0
