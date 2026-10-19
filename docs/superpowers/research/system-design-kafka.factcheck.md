# Fact-check: How Apache Kafka Works (round 1, 2026-10-20)

I read the page, the research notes, and the saved text of the only source, "How Kafka Works" (S1, guest post by Stanislav Kozlovski, `sd-raw/kafka/article.txt`). The article describes the real open-source Kafka, not an interview design. I fixed 1 FAIL: the page called the systems that delete read messages "older", but the article says "alternative". Every `##` heading is unique, the one source is cited 47 times, the closing tag of the tip callout is at column 0, and prose has no `{` or `<`. `linux_overlap.py` exits 0 after the fix (no runs).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | One writer, many readers, now or days later | 1 | PASS | "The data can be written to Kafka once and read as many times as necessary"; "for a limited amount of time (e.g., 7 days)" |
| 2 | The problem in plain words | LinkedIn built Kafka in 2010 | 1 | PASS | "originally developed by LinkedIn in 2010" |
| 3 | The problem in plain words | Open source in 2011, given to Apache | 1 | PASS | "In 2011, it was open-sourced and donated to the Apache Foundation." |
| 4 | The problem in plain words | Point-to-point pipelines grow like N times N | 1 | PASS | "custom point-to-point integrations (called data pipelines)... an O (N^2) mess" |
| 5 | The problem in plain words | Central store; writer sends once, readers take data | 1 | PASS | "Store their data in a central location (Kafka)"; "writers simply publish to Kafka, and readers subscribe to Kafka" |
| 6 | The problem in plain words | Confluent estimate: over 70 % of Fortune 500 | 1 | PASS | "used by over 70% of Fortune 500 companies"; footnote: "This adoption data is an estimation by Confluent" |
| 7 | The problem in plain words | Built for read fan-out; reads several times the writes | 1 | PASS | "built with read-fanout use cases in mind"; "read throughput to be a multiple of its write throughput" |
| 8 | Callout | Guest author is an Apache Kafka committer | 1 | PASS | "He's an Apache Kafka committer and software engineer" |
| 9 | The log | Append only, no update or delete of a record | 1 | PASS | "you can only add records to the end of the log (no deletes or updates allowed)" |
| 10 | The log | Offset grows and shows the order | 1 | PASS | "unique monotonically increasing number called an offset... denotes its order" |
| 11 | The log | Disks are fast for sequential, slow for random access | 1 | PASS | "Hard drives offer very high throughput for sequential reads and writes... random reads and writes, where HDDs don't perform well" |
| 12 | The log | Append is constant time and needs no lock | 1 | PASS | "writes on it are O(1) and lock-free" |
| 13 | The log | Record = key, value, offset, timestamp; key optional | 1 | PASS | "other metadata like offset, timestamp, and custom headers"; "The key is optional" |
| 14 | The log | Key and value are raw bytes, no types | 1 | PASS | "the key/value pairs are raw bytes"; "does not inherently support types" |
| 15 | The log | Producer serializes, consumer deserializes | 1 | PASS | "producer clients convert (serialize) the objects into bytes" |
| 16 | Callout | No HTTP; own TCP protocol; Java client classes | 1 | PASS | "Kafka doesn't use HTTP. It uses its own TCP-based protocol." |
| 17 | Topics and partitions | Topic like a table; hundreds to thousands per cluster | 1 | PASS | "you would create separate topics"; "hundreds to thousands of topics" |
| 18 | Topics and partitions | Topic split into partitions; each is a separate log | 1 | PASS | "A topic is sharded into one or more partitions. Each partition is a separate instance of the log" |
| 19 | Topics and partitions | Normal setup has three brokers or more | 1 | PASS | "any normal deployment of Kafka consists of at least three nodes" |
| 20 | Topics and partitions | Scale limited by the number of brokers | 1 | PASS | "your scale is limited by how many brokers you can add" |
| 21 | Topics and partitions | 50 GiB/s to 100 GiB/s in theory | 1 | PASS | "Nothing theoretically stops you from having a Kafka cluster that accepts 50 GiB/s of writes and then scaling it 2x to 100 GiB/s" |
| 22 | Copies, leaders, and controllers | Replication factor; three is usual | 1 | PASS | "called replication factor... The default and most common is three" |
| 23 | Copies, leaders, and controllers | One failed disk does not lose data | 1 | PASS | "when three copies of the data exist, one disk failing won't lead to data loss" |
| 24 | Copies, leaders, and controllers | Only leader takes writes; reads from leader or follower | 1 | PASS | "Only the leader accepts new writes... Reads can be served from both the leader and its followers." |
| 25 | Copies, leaders, and controllers | Usually three controllers, one active | 1 | PASS | "Usually, you'd deploy three controller brokers"; "only one active controller" |
| 26 | Copies, leaders, and controllers | No heartbeat for 6 s: broker fenced, new leaders | 1 | PASS | "If a broker does not send heartbeats for 6 seconds straight, it is fenced off from the cluster by the controller." |
| 27 | Copies, leaders, and controllers | `__cluster_metadata` log, replayed by every broker | 1 | PASS | "Every broker reads the __cluster_metadata log and replays the event logs to recreate the latest cluster state" |
| 28 | Copies, leaders, and controllers | KRaft, Raft-based; committed by a majority | 1 | PASS | "its own Raft-inspired algorithm called KRaft"; "committed only when a majority of the quorum has persisted them" |
| 29 | Copies, leaders, and controllers | Older versions used ZooKeeper | 1 | PASS | "For many years, Kafka used ZooKeeper." |
| 30 | Consumer groups and offsets | Group = consumers that act as one unit | 1 | PASS | "a set of consumer client instances... that operate as one coherent unit" |
| 31 | Consumer groups and offsets | One consumer per partition keeps order without locks | 1 | PASS | "Only one consumer is meant to read from a partition at a time... ensure message order without needing locks" |
| 32 | Consumer groups and offsets | Groups read separately, each at its own pace | 1 | PASS | "Each consumer group reads topics independently at its own pace." |
| 33 | Consumer groups and offsets | Add consumers or add a new group to scale reads | 1 | PASS | "Add more consumers to your group"; "Add more consumer groups" |
| 34 | Consumer groups and offsets | Consumers do not talk; group coordinator decides; heartbeats | 1 | PASS | "Kafka consumers within the same group don't talk to each other"; "Consumers heartbeat to the coordinator" |
| 35 | Consumer groups and offsets | Progress committed to `__consumer_offsets` | 1 | PASS | "in a special Kafka topic called `__consumer_offsets`"; "it commits the offset" |
| 36 | Consumer groups and offsets | After a crash, resume from the last commit | 1 | PASS | "the consumer can restart and resume from where it ended, or another consumer can come and pick the work back up" |
| 37 | Retention and tiered storage | Other systems delete after read; Kafka keeps for a time, often 7 days | 1 | FAIL→fixed | Was "Many older message systems". Now "Some other message systems". Quote: "Alternative messaging systems would store messages as long as no client has consumed them" |
| 38 | Retention and tiered storage | Replay after a consumer bug fix | 1 | PASS | "a consumer has had a dormant bug... the correct logic can be rerun on the same messages" |
| 39 | Retention and tiered storage | 1 GB/s, 7 days, 3 copies: about 1,772 TB | 1 | PASS | "A cluster with 1 GB/s of producer bandwidth would collect 1,772 TB worth of data" (footnote: 7 days, 3 replicas) |
| 40 | Retention and tiered storage | Copy to object store such as S3; local delete after e.g. 12 h | 1 | PASS | "The message is asynchronously offloaded to S3"; "After a configurable amount of time (e.g., 12 hours), the message is deleted from the brokers" |
| 41 | Retention and tiered storage | Same API; a little slower from S3 | 1 | PASS | "read the cold historical data from Kafka using the regular APIs"; "slightly higher latencies" |
| 42 | Retention and tiered storage | More than 10 times cheaper | 1 | PASS | "Storing large amounts of data in Kafka also ends up becoming more than 10x cheaper." |
| 43 | Exactly once | Growing number per message; broker keeps one copy | 1 | PASS | "associating a unique monotonically increasing ID with each message... Kafka will accept it only once" |
| 44 | Exactly once | Transaction: all commit or all abort across topics and partitions | 1 | PASS | "Those messages will atomically either be committed or aborted across all brokers." |
| 45 | Exactly once | Consumers can skip uncommitted messages | 1 | PASS | "consumers can be configured to skip non-committed ones" |
| 46 | Exactly once | Exactly once when input and output are Kafka | 1 | PASS | "when reads and writes only involve Kafka... exactly once processing is possible" |
| 47 | Exactly once | Duplicates still possible from outside systems | 1 | PASS | "This doesn't remove all cases of duplicates. Edge cases from external systems can still exist." |
| 48 | The big picture | Diagram and walk-through | — | PASS | Restates rows 18, 22, 24, 25, 32; no new facts. |
| 49 | Key words | Plain meanings | — | PASS | Definitions only; they agree with rows 9 to 36. |
| 50 | What a tester can learn | Tip callout says it is tutorial advice | — | PASS | "These ideas are the tutorial's own advice." |

Open FAILs: 0
