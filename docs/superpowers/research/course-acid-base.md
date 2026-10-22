# Course page: ACID and BASE (research notes)

Writer notes for `content/course/acid-base.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-acid-base/`. Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | PostgreSQL 18 docs, 3.4 Transactions | https://www.postgresql.org/docs/current/tutorial-transactions.html | 2026-10-22 |
| S2 | PostgreSQL 18 docs, 13.2 Transaction Isolation | https://www.postgresql.org/docs/current/transaction-iso.html | 2026-10-22 |
| S3 | PostgreSQL 18 docs, 28.3 Write-Ahead Logging (WAL) | https://www.postgresql.org/docs/current/wal-intro.html | 2026-10-22 |
| S4 | PostgreSQL 18 docs, 28.1 Reliability | https://www.postgresql.org/docs/current/wal-reliability.html | 2026-10-22 |
| S5 | PostgreSQL 18 docs, 5.5 Constraints (opening text) | https://www.postgresql.org/docs/current/ddl-constraints.html | 2026-10-22 |
| S6 | PostgreSQL 18 docs, 19.5 Write Ahead Log (`synchronous_commit`) | https://www.postgresql.org/docs/current/runtime-config-wal.html | 2026-10-22 |
| S7 | DeCandia et al., "Dynamo: Amazon's Highly Available Key-value Store", SOSP 2007 (author-site copy, allthingsdistributed.com) | https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf | 2026-10-22 |
| S8 | Brewer, "Towards Robust Distributed Systems", PODC 2000 keynote slides (author copy, Berkeley) | https://people.eecs.berkeley.edu/~brewer/cs262b-2004/PODC-keynote.pdf | 2026-10-22 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S8.

Not used: Pritchett, "BASE: An Acid Alternative" (ACM Queue 2008). The ACM page returned a Cloudflare block page, so it was not read. The page does not cite it. S8 is the primary source for the BASE expansion.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A transaction bundles several steps into one all-or-nothing operation. If a failure stops it, none of the steps affect the database. | S1 | "it bundles multiple steps into a single, all-or-nothing operation" / "if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all" |
| C2 | Atomic: from the view of other transactions, it happens completely or not at all. | S1 | "A transaction is said to be atomic: from the point of view of other transactions, it either happens completely or not at all." |
| C3 | The bank example: several separate updates for one payment. ROLLBACK cancels the updates so far. BEGIN and COMMIT surround the commands. | S1 | "there are several separate updates involved to accomplish this rather simple operation" / "we can issue the command ROLLBACK instead of COMMIT, and all our updates so far will be canceled" |
| C4 | Constraints give control over data. If a statement would break a constraint, the database raises an error. | S5 | "Constraints give you as much control over the data in your tables as you wish. If a user attempts to store data in a column that would violate a constraint, an error is raised." |
| C5 | Dynamo paper expands ACID as Atomicity, Consistency, Isolation, Durability, a set of properties that make transactions reliable. | S7 | "ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that guarantee that database transactions are processed reliably." |
| C6 | Updates of an open transaction are invisible to other transactions until it completes. Then all become visible together. | S1 | "The updates made so far by an open transaction are invisible to other transactions until the transaction completes, whereupon all the updates become visible simultaneously." |
| C7 | SQL standard has 4 isolation levels. Serializable gives the effect of running transactions one at a time in some order. | S2 | "The SQL standard defines four levels of transaction isolation. The most strict is Serializable ... any concurrent execution of a set of Serializable transactions is guaranteed to produce the same effect as running them one at a time in some order." |
| C8 | Dirty read: a transaction reads data of a concurrent uncommitted transaction. | S2 | "A transaction reads data written by a concurrent uncommitted transaction." |
| C9 | Read Committed is the PostgreSQL default. A SELECT sees only data committed before the query began. Two SELECTs in one transaction can see different data. | S2 | "Read Committed is the default isolation level in PostgreSQL." / "two successive SELECT commands can see different data, even though they are within a single transaction" |
| C10 | Read Committed is adequate for many applications, but not for all cases. | S2 | "adequate for many applications, and this mode is fast and simple to use; however, it is not sufficient for all cases" |
| C11 | Serializable: apps must be prepared to retry after a serialization failure. | S2 | "applications using this level must be prepared to retry transactions due to serialization failures" |
| C12 | Durability: a transactional database logs the updates in permanent storage before the transaction is reported complete. | S1 | "A transactional database guarantees that all the updates made by a transaction are logged in permanent storage (i.e., on disk) before the transaction is reported complete." |
| C13 | WAL: changes to data files are written only after WAL records are flushed to permanent storage. After a crash, the database can be recovered from the log. | S3 | "changes to data files ... must be written only after those changes have been logged, that is, after WAL records describing the changes have been flushed to permanent storage" / "in the event of a crash we will be able to recover the database using the log" |
| C14 | Durability depends on the hardware. Disk and controller caches can be volatile and lose data in a power failure. The administrator must make sure storage is safe. | S4 | "Such caches can be a reliability hazard because the memory in the disk controller cache is volatile, and will lose its contents in a power failure." / "it is the administrator's responsibility to make certain that all storage components ensure integrity" |
| C15 | PostgreSQL docs say committed data is safe from power loss and OS failure, except failure of the nonvolatile area itself. | S4 | "all data recorded by a committed transaction should be stored in a nonvolatile area that is safe from power loss, operating system failure, and hardware failure (except failure of the nonvolatile area itself, of course)" |
| C16 | `synchronous_commit = off`: success can be reported before the transaction is safe against a crash. A crash can lose recent committed transactions, but the database state is as if they were aborted. The default is on. | S6 | "In off mode, there is no waiting, so there can be a delay between when success is reported to the client and when the transaction is later guaranteed to be safe against a server crash." / "an operating system or database crash might result in some recent allegedly-committed transactions being lost, but the database state will be just the same as if those transactions had been aborted cleanly" / "on (the default)" |
| C17 | Brewer's slides: BASE = Basically Available, Soft-state, Eventual consistency. | S8 | "BASE: – Basically Available – Soft-state – Eventual consistency" |
| C18 | Brewer's slides: DBMS research is mostly about ACID, but systems give up C and I for availability, graceful degradation, and performance. The trade-off is fundamental. | S8 | "DBMS research is about ACID (mostly) / But we forfeit "C" and "I" for availability, graceful degradation, and performance / This tradeoff is fundamental." |
| C19 | Brewer's slides contrast: ACID = strong consistency, isolation, focus on commit; BASE = weak consistency (stale data OK), availability first, best effort. | S8 | "ACID: Strong consistency, Isolation, Focus on "commit", Nested transactions" / "BASE: Weak consistency – stale data OK, Availability first, Best effort, Approximate answers OK" |
| C20 | Brewer's slides: real systems are a mix of ACID and BASE subsystems. His example: ACID for user profiles and logging for revenue. | S8 | "Real internet systems are a careful mixture of ACID and BASE subsystems / – We use ACID for user profiles and logging (for revenue)" |
| C21 | Dynamo: experience at Amazon is that stores with ACID guarantees tend to have poor availability. Dynamo accepts weaker consistency for high availability. It gives no isolation guarantees and allows only single-key updates. | S7 | "data stores that provide ACID guarantees tend to have poor availability" / "Dynamo targets applications that operate with weaker consistency (the "C" in ACID) if this results in high availability. Dynamo does not provide any isolation guarantees and permits only single key updates." |
| C22 | Dynamo is eventually consistent: all updates reach all replicas eventually. Updates can be propagated to replicas asynchronously. | S7 | "Dynamo is designed to be an eventually consistent data store; that is all updates reach all replicas eventually." / "eventual consistency, which allows for updates to be propagated to all replicas asynchronously" |
| C23 | Optimistic replication can cause conflicting changes that must be detected and resolved. | S7 | "it can lead to conflicting changes which must be detected and resolved" |
| C24 | Dynamo shopping cart: the cart must accept adds and removes during network and server failures. If the latest version is unavailable, the change goes to an older version and the divergent versions are reconciled later. The application can merge them; a simple store policy is "last write wins". | S7 | "the shopping cart service must allow customers to add and remove items from their shopping cart even amidst network and server failures" / "the item is added to (or removed from) the older version and the divergent versions are reconciled later" / "the application that maintains customer shopping carts can choose to "merge" the conflicting versions" / "such as "last write wins"" |
| C25 | Dynamo is an "always writeable" store: writes are never rejected, so conflict handling moves to reads. | S7 | "an "always writeable" data store" / "push the complexity of conflict resolution to the reads in order to ensure that writes are never rejected" |

## Tutorial's own text (no cite)

The example numbers (balances 100, 40, 60), the two-screen example, the test ideas, and the plain-word simplifications. The words "soft state" are only expanded from S8; no definition of them is claimed.
