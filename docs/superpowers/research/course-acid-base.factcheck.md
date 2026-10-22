# Fact-check: ACID and BASE (`content/course/acid-base.mdx`)

Reviewer: a separate agent. Sources fetched 2026-10-22 into `/tmp/claude-1000/fc2-acid-base/` (HTML to text; `pdftotext` for the two PDFs). Every quote below was found in the fetched text, not copied from the writer notes. Source ids are the page cite numbers (n=1 to n=8).

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | ACID = Atomicity, Consistency, Isolation, Durability, properties that make transactions reliable | 7 | PASS | "ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties that guarantee that database transactions are processed reliably." |
| 2 | A transaction is a group of steps treated as one operation | 1 | PASS | "it bundles multiple steps into a single, all-or-nothing operation" |
| 3 | Atomicity: all steps or none; others never see a half-done result | 1 | PASS | "The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs ... none of the steps affect the database at all" / "it either happens completely or not at all" |
| 4 | Consistency row: "The data follows the rules you define" (the meaning of the C of ACID) | 5 | PASS (after fix, see Re-check) | S5 has no ACID or "C" text. It only says "Constraints give you as much control over the data in your tables as you wish." The definition of "C" is not in any cited source and the page does not mark it as the tutorial's own. |
| 5 | A constraint can refuse a bad value and the database raises an error | 5 | PASS | "If a user attempts to store data in a column that would violate a constraint, an error is raised." |
| 6 | Isolation: open transactions do not show unfinished changes to each other | 1 | PASS | "The updates made so far by an open transaction are invisible to other transactions until the transaction completes" |
| 7 | The isolation level can be chosen | 2 | PASS | "To set the transaction isolation level of a transaction, use the command SET TRANSACTION." |
| 8 | Durability: after "done", the change is logged on permanent storage | 1 | PASS | "all the updates made by a transaction are logged in permanent storage (i.e., on disk) before the transaction is reported complete." |
| 9 | BASE in Brewer's 2000 keynote = Basically Available, Soft-state, Eventual consistency | 8 | PASS | Slide "ACID vs. BASE": "BASE: – Basically Available – Soft-state – Eventual consistency" (the PDF text splits it as "S oft-state"). Footer: "PODC Keynote, July 19, 2000". |
| 10 | His slides contrast BASE with ACID: weaker consistency (stale data OK), availability first | 8 | PASS | Slide table: "ACID: Strong consistency, Isolation ..." / "BASE: Weak consistency – stale data OK, Availability first, Best effort". |
| 11 | ROLLBACK cancels the updates so far; a transaction groups several separate updates | 1 | PASS | "there are several separate updates involved to accomplish this rather simple operation" / "we can issue the command ROLLBACK instead of COMMIT, and all our updates so far will be canceled." |
| 12 | The SQL standard defines four isolation levels; Serializable = same effect as one at a time in some order | 2 | PASS | "The SQL standard defines four levels of transaction isolation. The most strict is Serializable ... guaranteed to produce the same effect as running them one at a time in some order." |
| 13 | Dirty read definition | 2 | PASS | "dirty read: A transaction reads data written by a concurrent uncommitted transaction." |
| 14 | PostgreSQL default isolation level is Read Committed | 2 | PASS | "Read Committed is the default isolation level in PostgreSQL." (Not overstated: the page never says Serializable or Repeatable Read is the default. Common-mistakes bullet 3 is correct.) |
| 15 | In Read Committed, two reads in one transaction can differ if another transaction commits in between | 2 | PASS | "two successive SELECT commands can see different data, even though they are within a single transaction, if other transactions commit changes after the first SELECT starts and before the second SELECT starts." |
| 16 | Read Committed adequate for many applications, not for all cases | 2 | PASS | "adequate for many applications, and this mode is fast and simple to use; however, it is not sufficient for all cases." |
| 17 | At Serializable an application must be ready to retry a failed transaction | 2 | PASS | "applications using this level must be prepared to retry transactions due to serialization failures." (Repeatable Read has the same rule; the page does not say it is Serializable only.) |
| 18 | PostgreSQL writes to the WAL and flushes it before data files change; recovers from the log after a crash | 3 | PASS | "changes to data files ... must be written only after those changes have been logged, that is, after WAL records describing the changes have been flushed to permanent storage" / "in the event of a crash we will be able to recover the database using the log" |
| 19 | Dynamo accepts weaker consistency for high availability | 7 | PASS | "Dynamo targets applications that operate with weaker consistency (the "C" in ACID) if this results in high availability." |
| 20 | Dynamo gives no isolation guarantees and allows only single-key updates | 7 | PASS | "Dynamo does not provide any isolation guarantees and permits only single key updates." |
| 21 | Dynamo is eventually consistent: all updates reach all replicas eventually | 7 | PASS | "Dynamo is designed to be an eventually consistent data store; that is all updates reach all replicas eventually." |
| 22 | Updates can travel to replicas in the background | 7 | PASS | "Dynamo provides eventual consistency, which allows for updates to be propagated to all replicas asynchronously." ("In the background" is a fair paraphrase of "asynchronously".) |
| 23 | Heading "The BASE side" puts the Dynamo paper under BASE | 7 | PASS (after fix, see Re-check) | The Dynamo paper never uses the word "BASE" (0 matches) or "soft state". Brewer's 2000 slides do not mention Dynamo. No cited source says Dynamo is a BASE system. Reword the heading, or say that the paper does not use the word BASE. |
| 24 | Shopping cart must accept add and remove during network and server failures | 7 | PASS | "the shopping cart service must allow customers to add and remove items from their shopping cart even amidst network and server failures." |
| 25 | If the latest cart is not reachable, the change goes to an older version; versions reconciled later | 7 | PASS | "when a customer wants to add an item to (or remove from) a shopping cart and the latest version is not available, the item is added to (or removed from) the older version and the divergent versions are reconciled later." |
| 26 | BASE accepts stale data (the 118 / 120 counter example) | 8 | PASS | "Weak consistency – stale data OK". The counter and its numbers are hypothetical and the page marks the numbers as its own. |
| 27 | Brewer: real systems mix both; ACID for user profiles and logging | 8 | PASS | "Real internet systems are a careful mixture of ACID and BASE subsystems – We use ACID for user profiles and logging (for revenue)". The slide says "We" (his company), the page says "he used". Acceptable. |
| 28 | Brewer says the consistency/availability trade-off is fundamental | 8 | PASS | "But we forfeit "C" and "I" for availability, graceful degradation, and performance / This tradeoff is fundamental." Section slide: "Consistency vs. Availability (ACID vs. BASE)". |
| 29 | Dynamo authors: at Amazon, ACID stores tend to have poor availability | 7 | PASS | "Experience at Amazon has shown that data stores that provide ACID guarantees tend to have poor availability." The page hedges it as the authors' result. |
| 30 | With eventual consistency, two copies can change at once; conflict must be detected and resolved | 7 | PASS | "it can lead to conflicting changes which must be detected and resolved." The paper says this about optimistic replication; the page applies it to eventual consistency. Close enough; the next sentence is Dynamo-specific. |
| 31 | Dynamo: application can merge versions, or the store can use "last write wins" | 7 | PASS | "the application ... can choose to "merge" the conflicting versions" / "the data store can only use simple policies, such as "last write wins"" |
| 32 | Dynamo keeps writes from being rejected, so conflict work moves to reads | 7 | PASS | "push the complexity of conflict resolution to the reads in order to ensure that writes are never rejected." |
| 33 | PostgreSQL storage safety depends on hardware; disk and controller caches can lose data in a power failure; administrator must check | 4 | PASS | "the memory in the disk controller cache is volatile, and will lose its contents in a power failure" (checked in the fetched text) / "it is the administrator's responsibility to make certain that all storage components ensure integrity for both data and file-system metadata." |
| 34 | `synchronous_commit` off: success reported before the change is safe; crash can lose recent transactions; state as if cancelled | 6 | PASS | "there can be a delay between when success is reported to the client and when the transaction is later guaranteed to be safe against a server crash" / "some recent allegedly-committed transactions being lost, but the database state will be just the same as if those transactions had been aborted cleanly." |
| 35 | `synchronous_commit` default is on | 6 | PASS | "Valid values are remote_apply, on (the default), remote_write, local, and off." |
| 36 | Common mistakes: durability depends on storage and settings | 4, 6 | PASS | See rows 33 to 35. |
| 37 | Common mistakes: the "C" of ACID is about data rules | 5 | PASS (after fix, see Re-check) | Wrong cite. S5 does not mention ACID or the "C". See row 4. |
| 38 | Common mistakes: eventual consistency is about copies that agree later | 7 | PASS | "all updates reach all replicas eventually". |
| 39 | Common mistakes: PostgreSQL uses Read Committed unless you change it | 2 | PASS | See row 14 and row 7. |
| 40 | Common mistakes: at Serializable, a failed transaction must be tried again by the application | 2 | PASS | Source: "must be prepared to retry". The page wording "must be tried again" is a little stronger than "prepared to retry"; not counted as a FAIL, but "must be ready to retry" would match the source. |
| 41 | Key words: ACID | 7 | PASS | See row 1. |
| 42 | Key words: BASE as named in a 2000 keynote | 8 | PASS | See row 9. The page does not claim Brewer coined it. |
| 43 | Key words: Transaction, Atomic | 1 | PASS | See rows 2 and 3. |
| 44 | Key words: Dirty read | 2 | PASS | See row 13. |
| 45 | Key words: Write-ahead log, flushed to permanent storage before data files change | 3 | PASS | See row 18. |
| 46 | Key words: Eventual consistency | 7 | PASS | See row 21. |

Not counted as claims: the opening bill and "like" analogy (an illustration, no fact), the example text with Ana and Ben (marked "The numbers here are the tutorial's own"; arithmetic is consistent: 100 minus 40 gives 60, and 20 stays 20 at the half-done step), and the tip callout (marked "the tutorial's own advice", no `<Cite>`, no source fact stated as sourced). The sentence "If the server fails after the first step, the database cancels the transaction" in the ACID example is the S1 behavior and has no cite; it is a hypothetical in a marked example, so it is not a FAIL.

## Structure check

| Check | Result |
|---|---|
| Every `page.sources` entry is https, and each of the 8 is cited | PASS (S1 to S8 all cited) |
| Every `<Cite n>` has a source (n from 1 to 8) | PASS |
| No run of 8 or more words copied from a source | PASS. Script check of the page text (tags removed) against all 8 fetched texts: the longest shared runs are 7 words ("one at a time in some order", "ACID guarantees tend to have poor availability"). None reaches 8. |
| Required sections in order, Key words last | PASS. The page also has `## How it works` and `## Trade-offs`, as most of the other 19 course pages do. |
| Tip callout has no `<Cite>` | PASS |
| No `<Voices>` | PASS |
| `#` title is "ACID and BASE" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS. The Dynamo PDF is the paper itself (SOSP 2007), hosted on allthingsdistributed.com; the page lists the publisher as SOSP 2007. The Brewer PDF is the author's Berkeley copy. |

## FAIL list

1. Row 4: the Consistency row defines "C" as "The data follows the rules you define" with only a constraints cite (S5), which says nothing about ACID. Mark the sentence as the tutorial's own, or remove it.
2. Row 23: the heading "The BASE side" presents the Dynamo paper as a BASE system, but the paper never uses the word BASE.
3. Row 37: Common mistakes cites S5 for "The 'C' of ACID is about data rules"; S5 does not say that.

## Re-check

The writer changed the page after the first review. I re-read the changed text and re-checked the three FAIL rows and the soft note on row 40.

| # | Changed text | Verdict | Reason |
|---|---|---|---|
| 4 | Consistency row now starts "The tutorial's own simplification:", with S5 only on the sentence that a broken constraint raises an error | PASS | The simplification is marked as the tutorial's own and states no source fact. The S5 cite supports only "an error is raised" (verified, row 5). |
| 23 | Heading is now "An eventually consistent design". It ends "The paper does not use the word BASE. Linking Dynamo to BASE is the tutorial's own framing." | PASS | The heading matches the paper ("designed to be an eventually consistent data store"). The BASE link is marked as the tutorial's own, and the statement about the paper is true (0 matches for BASE in the paper). |
| 37 | Now "In this tutorial, the "C" of ACID means data rules (see the table above)", no S5 cite | PASS | Marked as the tutorial's own, and it has no wrong cite. The next sentence keeps its S7 cite (row 38). |
| 40 | Now "the application must be prepared to retry a transaction that fails" (S2) | PASS | Matches "must be prepared to retry transactions due to serialization failures". |

Copy check on the changed lines: all new text is the writer's own wording. No run of 8 words from any source. The structure check is unchanged (sections, order, cites 1 to 8 all used, https, title).

Open FAILs: 0

