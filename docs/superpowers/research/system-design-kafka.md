# How Apache Kafka Works (System Design module) — research notes (2026-10-20)

Fetch note: the article was fetched as JSON from the Substack post API (`/api/v1/posts/how-kafka-works`) and converted to plain text in `<scratch dir>/sd-raw/kafka/article.txt`. The post is free (audience `everyone`), so the full text and its 18 footnotes were available. The text is not committed. The article is by a guest author, Stanislav Kozlovski. It describes the real open-source Apache Kafka, not an interview-style design.

Copy check: `python3 scripts/linux_overlap.py content/system-design/kafka.mdx <scratch dir>/sd-raw/kafka` found no runs (exit 0).

## Sources

S1. How Kafka Works — The System Design Newsletter (Neo Kim), guest author Stanislav Kozlovski — https://newsletter.systemdesign.one/p/how-kafka-works — accessed 2026-10-20 (`article.txt`)

A fetch of the official Kafka documentation (https://kafka.apache.org/documentation/) timed out. The page uses no claim from it.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | One program writes data; many programs read it, also later (lede) | S1 | "The data can be written to Kafka once and read as many times as necessary by whatever system needs it." |
| 2 | Data stays for a limited time, so readers can read days later (lede) | S1 | "The data gets durably persisted to disk for a limited amount of time (e.g., 7 days)." |
| 3 | LinkedIn built Kafka in 2010 | S1 | "Kafka is a messaging system that was originally developed by LinkedIn in 2010." |
| 4 | Kafka became open source in 2011 and went to Apache | S1 | "In 2011, it was open-sourced and donated to the Apache Foundation." |
| 5 | Point-to-point pipes grow like N times N | S1 | "That would have resulted in an O (N^2) mess that would break often and be impossible to maintain when N is in the hundreds." |
| 6 | Writers publish to Kafka; readers subscribe | S1 | "This decouples writers from readers, as writers simply publish to Kafka, and readers subscribe to Kafka." |
| 7 | Confluent estimate: over 70 % of Fortune 500 use Kafka | S1 | "used by over 70% of Fortune 500 companies and 150,000 organizations." / footnote 1: "This adoption data is an estimation by Confluent" |
| 8 | Built for read fan-out; reads are a multiple of writes | S1 | "it's common for the system's read throughput to be a multiple of its write throughput." |
| 9 | Guest author is a Kafka committer | S1 | "He's an Apache Kafka committer and software engineer who worked at Confluent" |
| 10 | The log is append-only; no updates or deletes | S1 | "It is append-only; you can only add records to the end of the log (no deletes or updates allowed)." |
| 11 | Each record has an increasing offset that shows order | S1 | "Each record in the log has a unique monotonically increasing number called an offset. The offset refers to the record and denotes its order." |
| 12 | Hard disks are fast for sequential, slow for random access | S1 | "Hard drives offer very high throughput for sequential4 reads and writes. This differs from random reads and writes, where HDDs don't perform well." |
| 13 | Appends are O(1) and need no lock | S1 | "writes on it are O(1) and lock-free. This is because records are simply appended to the end" |
| 14 | A record is a key and a value plus metadata; key is optional | S1 | "although other metadata like offset, timestamp, and custom headers exist too). The key is optional" |
| 15 | Key and value are raw bytes, no types | S1 | "Kafka does not inherently support types (e.g., int64, string, etc.) nor schemas (specific message structures)." |
| 16 | Producers serialize; consumers deserialize | S1 | "When writing: producer clients convert (serialize) the objects into bytes." |
| 17 | Kafka uses its own TCP protocol, not HTTP; Java producer and consumer classes | S1 | "Kafka doesn't use HTTP. It uses its own TCP-based protocol." / "The Apache Kafka project offers a Java library that implements these" |
| 18 | A topic is like a table; clusters have hundreds to thousands of topics | S1 | "It's common for a Kafka cluster to have hundreds to thousands of topics." |
| 19 | A topic is split into partitions; each partition is a log | S1 | "A topic is sharded into one or more partitions." / "Each partition is a separate instance of the log data structure." |
| 20 | A normal deployment has at least three brokers | S1 | "any normal deployment of Kafka consists of at least three nodes." |
| 21 | Scale is limited by how many brokers you can add | S1 | "you can add more brokers to the cluster, your scale is limited by how many brokers you can add." |
| 22 | 50 GiB/s to 100 GiB/s in theory | S1 | "Nothing theoretically stops you from having a Kafka cluster that accepts 50 GiB/s of writes and then scaling it 2x to 100 GiB/s." |
| 23 | Replication factor; default and most common is three | S1 | "A configurable setting (called replication factor) denotes how many copies should exist. The default and most common is three." |
| 24 | Three copies survive one disk failure | S1 | "when three copies of the data exist, one disk failing won't lead to data loss." |
| 25 | Only the leader takes writes; followers replicate; reads from both | S1 | "Only the leader accepts new writes" / "Reads can be served from both the leader and its followers." |
| 26 | Usually three controllers; one active | S1 | "Usually, you'd deploy three controller brokers." / "At any one time, there is only one active controller" |
| 27 | No heartbeat for 6 s means fenced; new leaders assigned | S1 | "If a broker does not send heartbeats for 6 seconds straight, it is fenced off from the cluster by the controller." |
| 28 | Cluster decisions in `__cluster_metadata`; brokers replay it | S1 | "Kafka durably stores all metadata changes in a special single-partition topic called __cluster_metadata." / "Every broker reads the __cluster_metadata log and replays the event logs" |
| 29 | KRaft, a Raft variant, elects the active controller; commit on majority | S1 | "Kafka uses its own Raft-inspired algorithm called KRaft (Kafka Raft)." / "They are marked committed only when a majority of the quorum has persisted them." |
| 30 | Older versions used ZooKeeper | S1 | "For many years, Kafka used ZooKeeper." |
| 31 | A consumer group works as one unit | S1 | "These groups are a set of consumer client instances (typically on separate nodes) that operate as one coherent unit." |
| 32 | One consumer per partition at a time keeps order without locks | S1 | "Only one consumer is meant to read from a partition at a time. This is done to ensure message order without needing locks." |
| 33 | Each group reads independently at its own pace | S1 | "Each consumer group reads topics independently at its own pace." |
| 34 | Dynamic membership; scale reads with more consumers or more groups | S1 | "you can scale consumption up or down by adding or removing members at runtime." |
| 35 | Consumers do not talk; the group coordinator decides; heartbeats | S1 | "Kafka consumers within the same group don't talk to each other." / "Consumers heartbeat to the coordinator" |
| 36 | Progress is saved in `__consumer_offsets`; commit | S1 | "Consumer Groups store a simple mapping of `{partition, offset}` in a special Kafka topic called `__consumer_offsets`." |
| 37 | After a crash, resume from the commit | S1 | "the consumer can restart and resume from where it ended, or another consumer can come and pick the work back up." |
| 38 | Other systems delete after consumption; Kafka keeps for a time, often 7 days | S1 | "A message is automatically deleted if it has been retained in the broker longer than a certain period, typically 7 days." |
| 39 | Replay after a consumer bug | S1 | "When the bug is fixed, the correct logic can be rerun on the same messages." |
| 40 | 1 GB/s collects about 1,772 TB | S1 | "A cluster with 1 GB/s of producer bandwidth would collect 1,772 TB worth of data across the cluster" |
| 41 | Tiered storage offloads to S3; local copy deleted after e.g. 12 hours | S1 | "After a configurable amount of time (e.g., 12 hours), the message is deleted from the brokers." |
| 42 | Same API for old data; slightly higher latency | S1 | "This results in slightly higher latencies when fetching historical data" |
| 43 | More than 10 times cheaper | S1 | "Storing large amounts of data in Kafka also ends up becoming more than 10x cheaper." |
| 44 | Idempotent producer: increasing ID per message; accepted once | S1 | "this is achieved by associating a unique monotonically increasing ID with each message." |
| 45 | Transactions: many messages, many partitions, all commit or abort | S1 | "Those messages will atomically either be committed or aborted across all brokers." |
| 46 | Consumers can skip non-committed messages | S1 | "consumers can be configured to skip non-committed ones." |
| 47 | Exactly once when only Kafka is involved | S1 | "when reads and writes only involve Kafka (and no other external system), exactly once processing is possible." |
| 48 | Duplicates from external systems, e.g. an HTTP service crash and retry | S1 | "Before the service responds with an HTTP response to the user, it crashes. The user then retries the same HTTP request" |

The analogies (logbook, library, kitchen, postal workers, security camera, bank cheque), the key-word definitions, and the tester callout are the tutorial's own text and need no source.
