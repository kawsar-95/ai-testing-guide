# Fact-check: Distributed Transactions (`content/course/distributed-transactions.mdx`)

Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc2-distributed-transactions/` (PostgreSQL docs "current" = version 18; the two Azure pages). Quotes below are from my own fetch, not from the research notes.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Many systems give each microservice its own database, so ACID guarantees do not directly apply across the stores | 5 | PASS | "Microservices architectures typically assign a dedicated database to each microservice" ... "Traditional database guarantees like ACID aren't directly applicable to multiple independently managed data stores." |
| 2 | 2PC: all databases get ready first, then commit or roll back together | none (plain-words) | PASS | Supported by cite 1 rows below: "committed or rolled back as soon as an external transaction manager has verified that other databases are also prepared to commit". No cite at this sentence, but it is a definition that the section "How it works" cites. |
| 3 | Saga: each service commits a small step, later steps undo it if needed | none (plain-words) | PASS | "Completes its work atomically within a single service" ... "performs a series of compensating transactions to reverse the changes that the preceding local transactions made". Wording "later steps undo it" is loose (compensating steps undo earlier steps) but not wrong. |
| 4 | PostgreSQL gives the building blocks of 2PC, not the whole protocol; purpose is an external transaction manager for atomic global transactions across databases or other transactional resources | 1 | PASS | "Its purpose is to allow an external transaction manager to perform atomic global transactions across multiple databases or other transactional resources." |
| 5 | "The docs say you should not use the commands in an application, unless you write such a manager" | 1 | PASS after re-check (was FAIL) | The docs say "PREPARE TRANSACTION is not intended for use in applications or interactive sessions" and "Unless you're writing a transaction manager, you probably shouldn't be using PREPARE TRANSACTION." The page drops "probably" (stronger than the source). It also says "the commands" (plural), but this sentence is about PREPARE TRANSACTION only. |
| 6 | PREPARE TRANSACTION runs inside a transaction block | 1 | PASS | "This command must be used inside a transaction block." |
| 7 | The transaction id is a string of fewer than 200 bytes | 1 | PASS | "The identifier must be written as a string literal, and must be less than 200 bytes long." |
| 8 | After the prepare, the transaction is no longer tied to the session; its state is fully stored on disk | 1 | PASS | "the transaction is no longer associated with the current session; instead, its state is fully stored on disk" |
| 9 | The manager commits with COMMIT PREPARED after it has checked that the other databases are also prepared; otherwise it uses ROLLBACK PREPARED | 1 | PASS | "a prepared transaction will normally be committed or rolled back as soon as an external transaction manager has verified that other databases are also prepared to commit." |
| 10 | SQL snippet `PREPARE TRANSACTION 'tx1'`, `COMMIT PREPARED 'tx1'`, `ROLLBACK PREPARED 'tx1'` (syntax) | 1, 2, 3 | PASS | Synopsis: "PREPARE TRANSACTION transaction_id", "COMMIT PREPARED transaction_id", "ROLLBACK PREPARED transaction_id"; examples use a quoted literal such as `'foobar'`. |
| 11 | COMMIT PREPARED and ROLLBACK PREPARED can run from any session, not only the one that prepared | 1 | PASS after re-check (copy FAIL fixed) | "Those commands can be issued from any session, not only the one that executed the original transaction." |
| 12 | Both commit or roll back at once | 2, 3 | PASS | "The prepared transaction is committed immediately." / "The prepared transaction is rolled back immediately." |
| 13 | After a prepare, "very high probability" that the commit can succeed, even if the database crashes before the commit; not a guarantee | 1 | PASS | "there is a very high probability that it can be committed successfully, even if a database crash occurs before the commit is requested." |
| 14 | A prepared transaction keeps the locks it held | 1 | PASS | "the transaction continues to hold whatever locks it held." |
| 15 | Long-prepared transaction interferes with VACUUM and in extreme cases can make the database shut down to prevent transaction ID wraparound | 1 | PASS | "This will interfere with the ability of VACUUM to reclaim storage, and in extreme cases could cause the database to shut down to prevent transaction ID wraparound" |
| 16 | The docs call it unwise to leave a transaction prepared for long | 1 | PASS | "It is unwise to leave transactions in the prepared state for a long time." |
| 17 | `max_prepared_transactions` is 0 by default (feature off) and can only be set at server start | 4 | PASS | "Setting this parameter to zero (which is the default) disables the prepared-transaction feature. This parameter can only be set at server start." |
| 18 | Without a manager that closes prepared transactions promptly, docs advise keeping it at 0 | 1 | PASS | "If you have not set up an external transaction manager ... it is best to keep the prepared-transaction feature disabled by setting max_prepared_transactions to zero." |
| 19 | The view `pg_prepared_xacts` lists prepared transactions | 1 | PASS | "All currently available prepared transactions are listed in the pg_prepared_xacts system view." |
| 20 | Saga: sequence of local transactions; each completes in one service, updates its database, starts the next step with an event or message | 5 | PASS | "Completes its work atomically within a single service. Updates the service's database. Initiates the next transaction via an event or message." |
| 21 | If a step fails, the saga runs compensating transactions to reverse earlier steps | 5 | PASS | "the saga performs a series of compensating transactions to reverse the changes that the preceding local transactions made." |
| 22 | A compensating transaction is not a simple rollback; plain restore could overwrite other users' changes, so compensation must be application specific | 6 | PASS | "this approach can overwrite changes from other concurrent application instances. Instead, the compensating transaction must intelligently account for concurrent work. This process is usually application specific"; also "A compensating transaction is application specific." Minor: "other users" for "other concurrent application instances". |
| 23 | The system records how to undo each step | 6 | PASS | "the system records information about each step and how to undo it." |
| 24 | Pivot transaction is the point of no return; after it succeeds all later steps must finish | 5 | PASS | "Pivot transactions serve as the point of no return in the saga ... All subsequent actions must be completed for the system to achieve a consistent final state." |
| 25 | Later steps can be retried and are idempotent | 5 | PASS | "Retryable transactions follow the pivot transaction. Retryable transactions are idempotent" |
| 26 | Two ways to run a saga: choreography and orchestration | 5 | PASS | "The two typical saga implementation approaches are choreography and orchestration." |
| 27 | Choreography: services exchange events, no central controller | 5 | PASS | "services exchange events without a centralized controller." |
| 28 | Choreography is good for simple workflows | 5 | PASS | "Good for simple workflows that have few services and don't need a coordination logic." |
| 29 | Choreography gets confusing when steps grow; integration tests need all services running | 5 | PASS | "Workflow can be confusing when you add new steps." / "Integration testing is difficult because all services must run to simulate a transaction." |
| 30 | Orchestration: central orchestrator tells each service what to do and handles failure recovery | 5 | PASS | "a centralized controller, or orchestrator, handles all the transactions and tells the participants which operation to perform ... handles failure recovery by using compensating transactions." |
| 31 | Orchestration suits complex workflows | 5 | PASS | "Better suited for complex workflows or when you add new services." |
| 32 | The orchestrator is a point of failure | 5 | PASS | "Introduces a point of failure because the orchestrator manages the complete workflow." |
| 33 | Between steps the data can be inconsistent; it should become consistent when all steps finish | 6 | PASS | "the overall view of the system state might be inconsistent. But the system should become consistent again when all steps finish." |
| 34 | Each service commits its own step, and a compensating step can also fail | 5 | PASS | "saga participants commit changes to their respective databases" / "Compensating transactions might not always succeed" |
| 35 | Saga has no built-in isolation across services; lost updates, dirty reads, fuzzy (nonrepeatable) reads can happen | 5 | PASS | "there's no built-in isolation across services" ... "Lost updates ... Dirty reads ... Fuzzy, or nonrepeatable, reads" |
| 36 | "Reading prepared as certain to commit": docs say "very high probability" | 1 | PASS | Same quote as row 13. |
| 37 | A forgotten prepared transaction keeps its locks and "can block VACUUM" | 1 | PASS after re-check 2 (was FAIL) | Source: "interfere with the ability of VACUUM to reclaim storage" and "continues to hold whatever locks it held". "Block VACUUM" is stronger than the source (VACUUM still runs; it cannot reclaim storage). Page line 54 words it correctly. |
| 38 | Irreversible steps should occur only after all critical checks pass | 6 | PASS | "Design the workflow so that irreversible steps occur only after all critical validations succeed." |
| 39 | Key words: two-phase commit, prepared transaction, saga, compensating transaction, pivot, idempotent definitions | 1, 5, 6 | PASS | Match rows 8, 9, 20, 21, 24, "Idempotence, when repeating the same operation doesn't alter the outcome" (5), "undoes the effects of completed steps" (6). "Distributed transaction" row has no cite; it is a plain definition. |

Marked own text: the example in "A real-life example" says "This example is the tutorial's own." The tip callout says "the tutorial's own advice. They are not from a source." Both are marked and state no source fact as a source claim. In the example, the cites (6 and 5) attach only to general statements, not to the shop scenario. PASS.

SQL syntax check: `PREPARE TRANSACTION 'id'`, `COMMIT PREPARED 'id'`, `ROLLBACK PREPARED 'id'` all match the reference pages. The diagram does not show the `BEGIN` before the work (the text says to use a transaction block). The "no" branch shows `ROLLBACK PREPARED` on A and on B. If a PREPARE failed, the docs say it "becomes a ROLLBACK", so that database has no prepared transaction and `ROLLBACK PREPARED` would give an error there. This is a simplification, not marked as one. Not counted as a FAIL, but the writer may want one short note.

Clarity remark (not counted): the bullet "Late irreversible steps." under "Common mistakes" reads like the late step is the mistake, while its text gives advice. A clearer title would name the mistake (an irreversible step done before the checks pass).

## Structure check

| Check | Result |
|---|---|
| All 6 `page.sources` are https; each is cited (1: many; 2 and 3: line 50; 4: line 56; 5, 6: many) | PASS |
| Every `<Cite n>` (1 to 6) has a source | PASS |
| No source is a blog, forum, Wikipedia, AI summary, or systemdesignbangla.com (PostgreSQL docs, Microsoft Learn Azure Architecture Center) | PASS |
| Required sections in order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last). One extra section, `## How it works`, sits between "When you need it" and "A real-life example"; 16 of 20 course pages have it. | PASS |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "Distributed Transactions" | PASS |
| No run of 8 or more words copied from a source (script check on the 8-word grams of all page text against the 6 fetched sources) | FAIL: one run, line 50 of the MDX: "from any session, not only the one that" (8 words) is copied from PREPARE TRANSACTION ("from any session, not only the one that executed"). Rephrase. |

## Summary of FAILs

1. Row 5: "should not use ... in an application" drops "probably"; also says "the commands" for a PREPARE TRANSACTION statement.
2. Row 37: "can block `VACUUM`" is stronger than "interfere with the ability of VACUUM to reclaim storage".
3. Copy check: 8-word run "from any session, not only the one that".

## Re-check (after the writer's fixes)

| Item | Result |
|---|---|
| Row 5 (line 34): "unless you write a transaction manager, you probably should not use `PREPARE TRANSACTION`" | PASS. Matches "Unless you're writing a transaction manager, you probably shouldn't be using PREPARE TRANSACTION." Now names the one command. |
| Row 11 (line 50): "can run in a different session from the one that did the prepare" | PASS. Matches "Those commands can be issued from any session". Copy run gone. |
| Row 37 (line 83): "can interfere with the ability of `VACUUM` to reclaim storage" | Fact PASS, but the copy check FAILS: the 9-word run "interfere with the ability of VACUUM to reclaim storage" is the same as the PREPARE TRANSACTION page (also the same run is in line 54 of the MDX, in "How it works": "it interferes with `VACUUM`" is shorter and fine; only the Common mistakes bullet copies). Rephrase, for example "it can stop `VACUUM` from freeing space". |
| Diagram "no" branch: "ROLLBACK PREPARED 'tx1' on each database that prepared (a failed PREPARE is already a rollback)" | PASS. Matches "If the PREPARE TRANSACTION command fails for any reason, it becomes a ROLLBACK". |
| Bullet "Putting irreversible steps early." | PASS. Matches "irreversible steps occur only after all critical validations succeed" (cite 6); the title now names the mistake. |
| Copy check, all 8-gram runs of the page vs the 6 sources, re-run | 1 run left: line 83 bullet (above). |

## Re-check 2

| Item | Result |
|---|---|
| Row 37 (line 84): "It keeps its locks, and it can get in the way of `VACUUM` freeing storage" (cite 1) | PASS. Same meaning as "interfere with the ability of VACUUM to reclaim storage" and "continues to hold whatever locks it held". Not stronger than the source. |
| Copy check, 8-word runs of all page text vs the 6 sources, re-run | 0 runs. |

All earlier FAILs (rows 5, 37, and the line 50 copy run) are now PASS.

Open FAILs: 0
