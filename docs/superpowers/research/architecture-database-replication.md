# Database Replication and Read/Write Splitting (Architecture 11) — research notes (2026-10-20)

Base text: the owner's notes, section "Database Replication and Read/Write Splitting" (`architecture-owner-notes.md`). The owner's ideas, lists, and LMS payment example are kept. They get no cite.

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratch directory. The quotes below are copied from that text. The MySQL manual (dev.mysql.com) returned an Oracle "Technical Difficulties" page on that day, so the page uses the PostgreSQL manual, Amazon RDS, Google Cloud SQL, and Microsoft Azure docs. The raw text was not committed.

## Sources

S1. Working with DB instance read replicas — Amazon RDS User Guide — https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html — accessed 2026-10-20. Page cite `[1]`.
S2. Monitoring read replication — Amazon RDS User Guide — https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.Monitoring.html — accessed 2026-10-20. Page cite `[2]`.
S3. Chapter 26. High Availability, Load Balancing, and Replication — PostgreSQL Documentation — https://www.postgresql.org/docs/current/high-availability.html — accessed 2026-10-20. Page cite `[3]`.
S4. 26.4. Hot Standby — PostgreSQL Documentation — https://www.postgresql.org/docs/current/hot-standby.html — accessed 2026-10-20. Page cite `[4]`.
S5. Redundancy, replication, and backup — Microsoft Learn (Azure reliability) — https://learn.microsoft.com/en-us/azure/reliability/concept-redundancy-replication-backup — accessed 2026-10-20. Page cite `[5]`.
S6. Multi-AZ DB instance deployments for Amazon RDS — Amazon RDS User Guide — https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html — accessed 2026-10-20. Page cite `[6]`.
S7. Replication lag — Cloud SQL for MySQL documentation (Google Cloud) — https://cloud.google.com/sql/docs/mysql/replication/replication-lag — accessed 2026-10-20. Page cite `[7]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Servers that can change data are called primary servers; servers that track the primary's changes are standby or secondary servers | S3 | "Servers that can modify data are called read/write, master or primary servers. Servers that track changes in the primary are called standby or secondary servers." |
| 2 | A read replica is a read-only copy of a DB instance | S1 | "A read replica is a read-only copy of a DB instance." |
| 3 | Routing queries to the replica reduces load on the primary | S1 | "You can reduce the load on your primary DB instance by routing queries from your applications to the read replica." |
| 4 | Clients have read/write access to the primary and read-only access to the replica | S1 | "Clients have read/write access to the primary DB instance and read-only access to the replica." |
| 5 | RDS copies updates to the read replica asynchronously | S1 | "When you make updates to the primary DB instance, Amazon RDS copies them asynchronously to the read replica." |
| 6 | Business reporting queries can run on a read replica instead of the production DB | S1 | "Business reporting or data warehousing scenarios where you might want business reporting queries to run against a read replica, rather than your production DB instance." |
| 7 | A read replica can be promoted to a standalone instance for disaster recovery | S1 | "You can promote a read replica to a standalone instance as a disaster recovery solution if the primary DB instance fails." |
| 8 | Synchronous: a change is committed only when all servers commit; failover loses no data | S3 | "Some solutions are synchronous, meaning that a data-modifying transaction is not considered committed until all servers have committed the transaction. This guarantees that a failover will not lose any data" |
| 9 | Asynchronous: some delay; failover can lose transactions; servers can return stale results | S3 | "asynchronous solutions allow some delay between the time of a commit and its propagation to the other servers, opening the possibility that some transactions might be lost in the switch to a backup server, and that load balanced servers might return slightly stale results." |
| 10 | Asynchronous is used when synchronous is too slow | S3 | "Asynchronous communication is used when synchronous would be too slow." |
| 11 | Connections to a hot standby are strictly read-only | S4 | "All such connections are strictly read-only; not even temporary tables may be written." |
| 12 | The same query on primary and standby at almost the same time can return different results; the standby is eventually consistent | S4 | "Running the same query nearly simultaneously on both primary and standby might therefore return differing results. We say that data on the standby is eventually consistent with the primary." |
| 13 | Replication lag has three causes: the primary cannot send, the replica cannot receive, or the replica cannot apply the changes fast enough | S7 | "The primary instance can't send the changes fast enough to the replica." / "The replica can't receive the changes quickly enough." / "The replica can't apply the changes quickly enough." |
| 14 | RDS shows replication lag in CloudWatch as the ReplicaLag metric | S2 | "You can monitor replication lag in Amazon CloudWatch by viewing the Amazon RDS ReplicaLag metric." |
| 15 | Replication is not backup; it keeps no old copies | S5 | "Replication isn't the same as backup. Replication synchronizes all changes among multiple replicas and doesn't maintain old copies of data." |
| 16 | An accidental delete is copied to every replica | S5 | "The deletion operation is replicated to each replica, and your data is deleted everywhere." |
| 17 | A backup is a timestamped copy used to restore lost data | S5 | "Backup is the ability to maintain a timestamped copy of data that can be used to restore data that has been lost." |
| 18 | Multi-AZ keeps a synchronous standby in another Availability Zone | S6 | "In a Multi-AZ DB instance deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different Availability Zone." |
| 19 | A Multi-AZ standby cannot serve read traffic | S6 | "You can't use a standby replica to serve read traffic." |
| 20 | (fact-check) The copies of data are called replicas | S5 | "Replication or data redundancy is the ability to maintain multiple copies of data, called replicas." |
| 21 | (fact-check) The delay of a replica behind the primary is replication lag | S2 | "Monitoring replication lag" / "the ReplicaLag metric reports the value of the Seconds_Behind_Master field" |
| 22 | (fact-check) The Multi-AZ standby is for high availability, not for reads | S6 | "The high availability option isn't a scaling solution for read-only scenarios." |

## Owner claims kept without a cite

- "Read after write" advice: read critical payment status from the primary right after payment, or show "Processing". Tutorial advice. The page cites the mechanism (claims 9, 12) and keeps the advice as the tutorial's own words.
- "Not testing failover." The page cites that async failover can lose transactions (claim 9) and keeps "test it" as tutorial advice.
- "When you need it" list and the tester checks. Tutorial advice.
