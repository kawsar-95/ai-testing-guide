# Fact-check: Database Federation (`content/course/database-federation.mdx`)

Reviewer did not write the page. Source n=1 fetched 2026-10-22 with curl into `/tmp/claude-1000/fc2-database-federation/` and read as data. Source: Azure Architecture Center, "Data partitioning guidance" (the only source; no blog, forum, or Wikipedia).

## Framing check (federation = functional partitioning)

The source does not contain the word "federation" (grep: 0 hits). The page marks this itself, in two places: "This choice of meaning is the tutorial's own." (In plain words) and "This use of the term is the tutorial's own." (Key words). The page also says the term has other meanings. So the mapping is clearly marked and no source cite is attached to the word "federation". PASS.
Weak point (not a FAIL): the intro paragraph (before the marking) uses "Database federation does the same for data" as if it is plain fact, and the page never says that the Azure page does not use the word. One added sentence would remove the doubt.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Azure calls the idea functional partitioning: data grouped by how each bounded context uses it | 1 | PASS | "Functional partitioning. In this strategy, data is aggregated according to how each bounded context in the system uses the data." |
| 2 | Bounded context = distinct business area with clear limits for data and functions | 1 | PASS | "A distinct business area or domain that defines clear boundaries for data and functionality, often the basis for functional partitioning decisions." |
| 3 | Shop can keep invoices in one partition and stock levels in another | 1 | PASS | "an e-commerce system might store invoice data in one partition and product inventory data in another." |
| 4 | Sharding: every partition has the same schema and holds a subset of the data | 1 | PASS | "each partition is a separate data store, but all partitions have the same schema. Each partition is known as a shard and holds a subset of the data" |
| 5 | In functional partitioning each database holds a different kind of data (no cite on this sentence) | none | PASS | Follows from claim 1 (data grouped by bounded context). Not a quote, but not stronger than the source. |
| 6 | Lead-in: "The source names these gains of functional partitioning" (4 bullets) | 1 | FAIL | Bullets 3 and 4 are not given as gains of functional partitioning. The source lists them for partitioning in general: "You can deploy each partition on a different type of data store..." and "Improve availability. ... If one instance fails, only the data in that partition is unavailable." (the source adds: "This consideration is less relevant for managed platform as a service (PaaS) data stores"). Fix: say "gains of partitioning" and name the first two as functional ones. |
| 7 | Clear bounded context: better isolation and faster data access | 1 | PASS | "When a bounded context can be identified for each distinct business area in an application, functional partitioning can improve isolation and data access performance." |
| 8 | Keeps changing data apart from read-only data | 1 | PASS | "Another common use for functional partitioning is to separate read-write data from read-only data." |
| 9 | Each partition can use a different data store type (blob, document DB) | 1 | PASS | "you can store large binary data in blob storage, and store structured data in a document database." |
| 10 | If one instance fails, only its partition is unavailable | 1 | PASS | "If one instance fails, only the data in that partition is unavailable. Operations continue in other partitions." (general partitioning claim; see row 6) |
| 11 | Partitioning does not replace good design; you still need indexes | 1 | PASS | "partitioning isn't an alternative to appropriate database design and configuration. Ensure that you implement the necessary indexes." |
| 12 | "A single strategy is usually enough, and you add horizontal partitioning only if functional partitioning is not enough" | 1 | FAIL | "only if" is stronger than the source: "If this allocation still doesn't satisfy the requirements, you can add horizontal partitioning. A single partitioning strategy is usually adequate, but in some cases, it's more efficient to combine both strategies." The source also says combining is sometimes more efficient. |
| 13 | A cross-partition query is slower than a single-partition query | 1 | PASS | "It can be more time-consuming to query across partitions rather than querying within a single partition." and "typically higher latency and complexity". Note: "is slower" would be safer as "is usually slower". |
| 14 | Tuning partitions for one set of queries can hurt another set | 1 | PASS | "optimizing partitions for one set of queries might adversely affect other sets of queries." |
| 15 | With functional partitions a query can name the partition | 1 | PASS | "With vertical and functional partitioning, queries can specify the partition." |
| 16 | Join: app runs one query, takes a key, runs another with a foreign key | 1 | PASS | "the application typically performs consecutive queries that are based on a key and then a foreign key." |
| 17 | Option 1: keep data of the most common operations together | 1 | PASS | "Try to keep data for the most common database operations together in a partition to minimize cross-partition data access operations." |
| 18 | Option 2: replicate or de-normalize the data the join needs | 1 | PASS | "Instead, consider replicating or de-normalizing the relevant data." |
| 19 | Option 3: parallel queries, join in the app; fails when one query feeds the next | 1 | PASS | "If cross-partition joins are necessary, run parallel queries over the partitions and join the data within the application." and "In some cases, you can't use this approach, for example if the result from one query is used in the next query." (the caveat is in the query paragraph, not the join paragraph; the use is fair) |
| 20 | App is responsible for referential integrity across partitions; need it as little as possible | 1 | PASS | "Where possible, minimize requirements for referential integrity across vertical and functional partitions. In these schemes, the application is responsible for maintaining referential integrity across partitions." |
| 21 | Some stores give transaction guarantees only inside one partition | 1 | PASS | "Some data stores implement transactional consistency and integrity for operations that modify data but only when the data is located in a single partition." |
| 22 | Avoid multi-partition transactions; if needed build them in the app; most systems have no native support | 1 | PASS | "Avoid transactions that access data in multiple partitions." ... "implement it as part of your application logic because most partitioning systems don't provide native support." |
| 23 | Link to Distributed Transactions page "explains the usual ways" | none | n/a | Internal link to a sibling page being written. Not checked, not a FAIL. |
| 24 | Eventual consistency: each partition updated alone; app ensures updates finish and handles what readers see | 1 | PASS | "The data in each partition is updated separately, and the application logic ensures that the updates finish successfully. The application logic also handles the inconsistencies that arise from querying data while an eventually consistent operation runs." |
| 25 | Check first whether strong consistency is really needed | 1 | PASS | "Evaluate whether strong consistency is a requirement." |
| 26 | Copies in several partitions hold different values for a while | 1 | PASS | "During synchronization, different partitions contain different data values." |
| 27 | Common mistake: split is based on a bounded context | 1 | PASS | "often the basis for functional partitioning decisions" (Terminology); "When a bounded context can be identified..." |
| 28 | Common mistake: "If the split is wrong, every common query crosses databases, and that is slower" | 1 | FAIL | "every" is not in the source and the sentence is not marked as the tutorial's own. The source only says to keep data for common operations together "to minimize cross-partition data access operations". Fix: "many common queries". |
| 29 | Many data stores do not give multi-database transactions | 1 | PASS | "most partitioning systems don't provide native support" / "Some data stores implement ... only when the data is located in a single partition." |
| 30 | Nothing in the database checks links between databases; the app must | 1 | PASS | Same quote as claim 20. |
| 31 | Backup and restore: hard to keep logical consistency | 1 | PASS | "it can be challenging to maintain logical consistency during backup and restore operations." |
| 32 | Key words: functional partitioning | 1 | PASS | "A strategy that aggregates and stores data according to how each bounded context or business domain uses it." |
| 33 | Key words: bounded context | 1 | PASS | Same quote as claim 2. |
| 34 | Key words: cross-partition operation | 1 | PASS | "A query or transaction that accesses data across multiple partitions." |
| 35 | Key words: referential integrity (rule that a link points to an existing record; app keeps it here) | 1 | PASS | The "app keeps it" part is in claim 20. The first sentence is the standard meaning of the term. The source does not define it, and the cite sits after the last sentence only. Optional: say that the first sentence is the tutorial's own. |
| 36 | Key words: eventual consistency | 1 | PASS | Same quote as claim 24. |

Not checked, by rule: the real-life example (marked "the tutorial's own", and it states no source fact) and the tip callout (marked "Tutorial advice", no `<Cite>`).

Claims counted: 35 (rows 1-36 without row 23).

## Structure check

- Sources: 1 entry, https, cited many times. Every `<Cite n={1} />` has a source. PASS.
- Copy check (word-run scan of page text against the source text): longest shared run is 7 words ("and holds a subset of the data"). No run of 8 or more. PASS.
- Sections: `In plain words`, `When you need it`, `A real-life example`, `Common mistakes`, `What a tester can check`, `Key words` appear in this order, and Key words is last. Two extra sections (`Joins across databases`, `Transactions across databases`) sit between `When you need it` and `A real-life example`. They do not break the order. PASS.
- Tip callout ("Tutorial advice") has no `<Cite>`. No `<Voices>`. PASS.
- `#` title is `Database Federation`, equal to the expected title. PASS.
- No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com source. PASS.


## Re-check (after the writer's fixes)

Re-read all changed text of the page and re-ran the copy scan.

| Old row | Verdict now | Reason |
|---|---|---|
| 6 (lead-in) | PASS | The page now says "two gains of functional partitioning" (isolation and access speed; read-write vs read-only) and "two gains of partitioning in general. They apply here too" (different store types; one instance fails). This matches the source. The PaaS caveat is added with a cite: "This consideration is less relevant for managed platform as a service (PaaS) data stores because they have built-in redundancy." PASS. |
| 12 (horizontal) | PASS | "A single strategy is usually enough. If it is not, you can add horizontal partitioning, and sometimes a mix of both is more efficient." Source: "you can add horizontal partitioning. A single partitioning strategy is usually adequate, but in some cases, it's more efficient to combine both strategies." |
| 28 (every common query) | PASS | Now "many common queries". Supported by "keep data for the most common database operations together ... to minimize cross-partition data access operations" and "more time-consuming to query across partitions". |
| Framing | PASS | "In plain words" now says "The Azure page does not use the word "federation"." This is true (0 hits in the source). |

Copy scan on the changed text: the new PaaS sentence shares "data stores because they have built-in redundancy" with the source. That is 7 whitespace words (8 if "built-in" is split at the hyphen), and the page has a comma after "stores". It is at the limit. Counted as PASS under the 8-word rule; the writer can reword (for example "because these stores already have redundancy") to be safe. All other shared runs are 7 words or less.

New claim counted: PaaS caveat (row 37), PASS. Total claims: 36.

Open FAILs: 0
