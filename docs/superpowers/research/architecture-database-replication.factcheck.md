# Fact-check: Database Replication and Read/Write Splitting (round 1, 2026-10-20)

I did not write this page. I read `content/architecture/database-replication.mdx` and `architecture-database-replication.md`, fetched each of the 7 sources again with `curl` on 2026-10-20, and checked each cited sentence against the source text. Every quote below is in the fresh fetch. The sources are AWS RDS docs, the PostgreSQL manual, Microsoft Learn, and Google Cloud docs. Each source has 1 or more cites, and each cite number has a source. I found 3 FAILs and fixed them in the MDX. The notes have 3 new claim rows (20 to 22).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | In plain words | Replication copies data to other databases; each copy is a replica | 5 | FAIL, fixed | Was an uncited definition. Fix: added "Each copy is a replica" and cite 5: "Replication or data redundancy is the ability to maintain multiple copies of data, called replicas." |
| 2 | In plain words | Primary can change data; followers are standby or secondary | 3 | PASS | "Servers that can modify data are called read/write, master or primary servers. Servers that track changes in the primary are called standby or secondary servers." |
| 3 | In plain words | Read replica = read-only copy | 1 | PASS | "A read replica is a read-only copy of a DB instance." |
| 4 | In plain words | Read and write on the primary, only read on the replica | 1 | PASS | "Clients have read/write access to the primary DB instance and read-only access to the replica." |
| 5 | In plain words | Queries on the replica lower the primary's load | 1 | PASS | "You can reduce the load on your primary DB instance by routing queries from your applications to the read replica." |
| 6 | In plain words | Synchronous: done when all servers have it; failover loses nothing | 3 | PASS | "a data-modifying transaction is not considered committed until all servers have committed the transaction. This guarantees that a failover will not lose any data" |
| 7 | In plain words | Asynchronous: delay; failover can lose changes; stale results | 3 | PASS | "some transactions might be lost in the switch to a backup server, and that load balanced servers might return slightly stale results" |
| 8 | In plain words | Async used when sync is too slow | 3 | PASS | "Asynchronous communication is used when synchronous would be too slow." |
| 9 | In plain words | RDS copies to a read replica asynchronously | 1 | PASS | "Amazon RDS copies them asynchronously to the read replica." |
| 10 | In plain words | The delay is called replication lag | 2 | FAIL, fixed | Was an uncited term. Fix: added cite 2: "Monitoring replication lag... the ReplicaLag metric reports the value of the Seconds_Behind_Master field" |
| 11 | In plain words | Same query on primary and standby can differ | 4 | PASS | "Running the same query nearly simultaneously on both primary and standby might therefore return differing results." |
| 12 | In plain words | Standby is "eventually consistent" | 4 | PASS | "We say that data on the standby is eventually consistent with the primary." |
| 13 | In plain words | Three causes of lag: send, receive, apply | 7 | PASS | "The primary instance can't send the changes fast enough... The replica can't receive the changes quickly enough. The replica can't apply the changes quickly enough." |
| 14 | When you need it | AWS names business reporting as a use case | 1 | PASS | "Business reporting or data warehousing scenarios where you might want business reporting queries to run against a read replica" |
| 15 | When you need it | Replica can become standalone if the primary fails | 1 | PASS | "You can promote a read replica to a standalone instance as a disaster recovery solution if the primary DB instance fails." |
| 16 | Common mistakes | Replicas can return stale results | 3 | PASS | "load balanced servers might return slightly stale results" |
| 17 | Common mistakes | Replication keeps no old copies | 5 | PASS | "Replication isn't the same as backup. Replication synchronizes all changes among multiple replicas and doesn't maintain old copies of data." |
| 18 | Common mistakes | An accidental delete reaches every replica | 5 | PASS | "The deletion operation is replicated to each replica, and your data is deleted everywhere." |
| 19 | Common mistakes | Backup = point-in-time copy you can restore | 5 | PASS | "Backup is the ability to maintain a timestamped copy of data that can be used to restore data that has been lost." |
| 20 | Common mistakes | `ReplicaLag` metric in CloudWatch | 2 | PASS | "You can monitor replication lag in Amazon CloudWatch by viewing the Amazon RDS ReplicaLag metric." |
| 21 | Common mistakes | Async: changes can be lost in a switch | 3 | PASS | "opening the possibility that some transactions might be lost in the switch to a backup server" |
| 22 | Common mistakes | Multi-AZ standby is a synchronous copy for high availability; no reads | 6 | FAIL, fixed | The page said "for failover only". The source also names data redundancy and fewer latency spikes during backups: "synchronously replicated... to a standby replica to provide data redundancy and minimize latency spikes during system backups". Fix: "for high availability". Still true: "You can't use a standby replica to serve read traffic." |
| 23 | When you need it, A real-life example, What a tester can check, Key words | Lists, LMS payment example, tips, meanings | — | PASS | Tutorial's own words. The tip callout title is "Tutorial advice". Key words agree with rows 1 to 22. |

## Fixes

1. Added "Each copy is a replica" with cite 5 to the replication definition (row 1).
2. Added cite 2 to the term "replication lag" (row 10).
3. Multi-AZ standby: "for failover only" changed to "for high availability" (row 22).

Open FAILs: 0
