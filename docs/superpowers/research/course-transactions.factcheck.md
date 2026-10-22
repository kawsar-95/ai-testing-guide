# Fact-check: Transactions (`content/course/transactions.mdx`)

Reviewer: an agent that did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc2-transactions/` (PostgreSQL 18 manual, `/docs/current/`). The quotes below come from that fetch, not from the research notes.

Sources: S1 = 3.4 Transactions, S2 = BEGIN, S3 = COMMIT, S4 = ROLLBACK, S5 = SAVEPOINT, S6 = ROLLBACK TO SAVEPOINT, S7 = 13.2 Transaction Isolation, S8 = SET TRANSACTION. Page cite n = S n.

## Claims

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A transaction is one all-or-nothing operation; others do not see the middle steps; a failure leaves no step in the database | 1 | PASS | "it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs ... then none of the steps affect the database at all." |
| 2 | Changes of an open transaction are invisible to others until it ends, then all become visible together | 1 | PASS | "The updates made so far by an open transaction are invisible to other transactions until the transaction completes, whereupon all the updates become visible simultaneously." Note: the source says "completes"; the page says "ends". After a rollback the changes never become visible. Wording could say "commits". |
| 3 | Use a transaction for a multi-statement action such as moving money; a failure must not leave it half done | 1 | PASS | "We need a guarantee that if something goes wrong partway through the operation, none of the steps executed so far will take effect." |
| 4 | Wrap statements in BEGIN and COMMIT | 1 | PASS | "a transaction is set up by surrounding the SQL commands of the transaction with BEGIN and COMMIT commands." |
| 5 | ROLLBACK instead of COMMIT cancels all updates so far | 1 | PASS | "we can issue the command ROLLBACK instead of COMMIT, and all our updates so far will be canceled." |
| 6 | COMMIT makes changes visible to others and durable if a crash comes | 3 | PASS | "All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs." |
| 7 | Without BEGIN each statement runs in its own transaction and is committed if it worked (autocommit) | 2 | PASS | "By default (without BEGIN), PostgreSQL executes transactions in "autocommit" mode, that is, each statement is executed in its own transaction and a commit is implicitly performed at the end of the statement (if execution was successful ...)" |
| 8 | Some client libraries send BEGIN and COMMIT for you | 1 | PASS | "Some client libraries issue BEGIN and COMMIT commands automatically" |
| 9 | A savepoint is a mark in a transaction; you can undo only the commands after it | 5 | PASS | "A savepoint is a special mark inside a transaction that allows all commands that are executed after it was established to be rolled back" |
| 10 | Changes before the savepoint are kept | 1 | PASS | "changes earlier than the savepoint are kept." |
| 11 | SQL snippet: BEGIN, UPDATE id 1, SAVEPOINT before_credit, UPDATE id 2, ROLLBACK TO SAVEPOINT before_credit, UPDATE id 3, COMMIT: valid syntax, and the result is debit of account 1 and credit of account 3 only | 1, 5, 6 | PASS | Same shape as the S1 example (Alice/Bob/Wally) and the S5 example (`SAVEPOINT my_savepoint` ... `ROLLBACK TO SAVEPOINT my_savepoint` ... `COMMIT`). S6 synopsis: `ROLLBACK [ WORK \| TRANSACTION ] TO [ SAVEPOINT ] savepoint_name`. The `accounts` table is a made-up name. |
| 12 | After ROLLBACK TO the savepoint is still defined, so you can go back again | 1 | PASS | "After rolling back to a savepoint, it continues to be defined, so you can roll back to it several times." |
| 13 | ROLLBACK TO destroys the savepoints made after it | 6 | PASS | "ROLLBACK TO SAVEPOINT implicitly destroys all savepoints that were established after the named savepoint." |
| 14 | RELEASE SAVEPOINT destroys a savepoint and keeps the effects of later commands | 5 | PASS | "Use RELEASE SAVEPOINT to destroy a savepoint, keeping the effects of commands executed after it was established." |
| 15 | A savepoint works only inside a transaction block | 5 | PASS | "Savepoints can only be established when inside a transaction block." |
| 16 | After an error aborts the block, only ROLLBACK TO lets you continue, unless you roll back everything | 1 | PASS | "ROLLBACK TO is the only way to regain control of a transaction block that was put in aborted state by the system due to an error, short of rolling it back completely and starting again." |
| 17 | The SQL standard defines four levels; Serializable is strictest and must equal some one-at-a-time order; the other three are defined by phenomena that must not happen | 7 | PASS | "The SQL standard defines four levels of transaction isolation. The most strict is Serializable ... guaranteed to produce the same effect as running them one at a time in some order. The other three levels are defined in terms of phenomena ... which must not occur at each level." |
| 18 | Dirty read: reads data from another uncommitted transaction | 7 | PASS | "A transaction reads data written by a concurrent uncommitted transaction." |
| 19 | Nonrepeatable read: re-reads data and finds another transaction changed it since | 7 | PASS | "A transaction re-reads data it has previously read and finds that data has been modified by another transaction (that committed since the initial read)." |
| 20 | Phantom read: re-runs a query and finds a different set of matching rows | 7 | PASS | "finds that the set of rows satisfying the condition has changed due to another recently-committed transaction." |
| 21 | Serialization anomaly: the committed result fits no one-at-a-time order | 7 | PASS | "The result of successfully committing a group of transactions is inconsistent with all possible orderings of running those transactions one at a time." |
| 22 | Table: Read uncommitted: dirty read "Allowed by the standard, but not in PostgreSQL", other three Possible | 7 | PASS | Table 13.1: "Read uncommitted \| Allowed, but not in PG \| Possible \| Possible \| Possible". The page adds "by the standard"; the manual's text confirms the level is the standard's and PostgreSQL treats it as Read Committed. |
| 23 | Table: Read committed: dirty read Not possible, other three Possible | 7 | PASS | "Read committed \| Not possible \| Possible \| Possible \| Possible" |
| 24 | Table: Repeatable read: dirty and nonrepeatable Not possible, phantom "Allowed by the standard, but not in PostgreSQL", serialization anomaly Possible | 7 | PASS | "Repeatable read \| Not possible \| Not possible \| Allowed, but not in PG \| Possible". The manual: "PostgreSQL's Repeatable Read implementation does not allow phantom reads." This is the PostgreSQL table, not the standard's. |
| 25 | Table: Serializable: all Not possible | 7 | PASS | "Serializable \| Not possible \| Not possible \| Not possible \| Not possible" |
| 26 | PostgreSQL has only three distinct levels; its Read Uncommitted behaves like Read Committed | 7 | PASS | "internally only three distinct isolation levels are implemented, i.e., PostgreSQL's Read Uncommitted mode behaves like Read Committed." |
| 27 | The manual says Read Committed is the default level | 7 | PASS | "Read Committed is the default isolation level in PostgreSQL." |
| 28 | Read Committed: a SELECT sees only data committed before that query began; two SELECTs in one transaction can differ if another transaction commits between them | 7 | PASS | "a SELECT query (without a FOR UPDATE/SHARE clause) sees only data committed before the query began" / "two successive SELECT commands can see different data, even though they are within a single transaction, if other transactions commit changes after the first SELECT starts and before the second SELECT starts." |
| 29 | Repeatable Read: one snapshot, taken at the first statement that is not a transaction-control command, so repeated reads match | 7 | PASS | "a query in a repeatable read transaction sees a snapshot as of the start of the first non-transaction-control statement in the transaction ... successive SELECT commands within a single transaction see the same data" |
| 30 | Repeatable Read: changing a row that another transaction changed and committed meanwhile fails with "could not serialize access due to concurrent update"; the application should retry the whole transaction | 7 | PASS | "ERROR: could not serialize access due to concurrent update" / "it should abort the current transaction and retry the whole transaction from the beginning." |
| 31 | Serializable works like Repeatable Read plus monitoring with some overhead; can end a transaction with a serialization failure; the application must retry | 7 | PASS | "this isolation level works exactly the same as Repeatable Read except that it also monitors for conditions ... there is some overhead to the monitoring, and detection of the conditions ... will trigger a serialization failure." / "applications using this level must be prepared to retry transactions due to serialization failures." |
| 32 | Choose a level with BEGIN ISOLATION LEVEL ... or SET TRANSACTION, before the first query or data change | 2, 8 | PASS | S2: "If the isolation level ... is specified, the new transaction has those characteristics, as if SET TRANSACTION was executed." S8: "The transaction isolation level cannot be changed after the first query or data-modification statement ... of a transaction has been executed." |
| 33 | "40 then 41" example: at Read Committed, the next SELECT of session A in the same transaction can see 41 after session B commits | 7 | PASS | Correct. A's second SELECT starts after B's commit, so it gets a new snapshot: "two successive SELECT commands can see different data ... if other transactions commit changes after the first SELECT starts and before the second SELECT starts." Read Uncommitted gives the same result. The page says "can see", which is accurate. Note: "number of seats" going from 40 to 41 after a new enrolment only fits if "seats" means seats taken. Wording could say "enrolments". |
| 34 | "40 then 41" example: at Repeatable Read the same SELECT still sees 40 | 7 | PASS | Correct. A's first SELECT is its first non-transaction-control statement, so the snapshot is taken there: "they do not see changes made by other transactions that committed after their own transaction started." The count is read-only, so no serialization error. |
| 35 | Repeatable Read and Serializable can fail on purpose; the manual says the application must be ready to retry | 7 | PASS | "Applications using this level must be prepared to retry transactions due to serialization failures." (both levels say this) |
| 36 | "Do not depend on data read in a transaction that later aborted" | 7 | PASS (after fix) | The source says this only for Serializable: "When relying on Serializable transactions to prevent anomalies ... applications must not depend on results read during a transaction that later aborted". The page states it for any transaction, with no Serializable scope. Fix: scope the sentence to Serializable. |
| 37 | Sequence changes (the counter of a serial column) are not rolled back when the transaction aborts | 7 | PASS | "changes made to a sequence (and therefore the counter of a column declared using serial) are immediately visible to all other transactions and are not rolled back if the transaction that made the changes aborts." |
| 38 | At Repeatable Read, business rules are not likely to work without careful use of explicit locks | 7 | PASS | "Attempts to enforce business rules by transactions running at this isolation level are not likely to work correctly without careful use of explicit locks to block conflicting transactions." |
| 39 | Key words: Transaction = a group of steps that works as one all-or-nothing operation | 1 | PASS | See row 1. |
| 40 | Key words: Commit keeps the changes; rollback discards them | 3, 4 | PASS | S3: "All changes made by the transaction become visible to others and are guaranteed to be durable". S4: "causes all the updates made by the transaction to be discarded." |
| 41 | Key words: Savepoint = a mark that lets you undo only the later part | 5 | PASS | See row 9. |
| 42 | Key words and "Isolation levels" intro: an isolation level is what one transaction can see of the others that run at the same time | 8 | PASS (after fix) | S7 does not state this definition. S8 does: "The isolation level of a transaction determines what data the transaction can see when other transactions are running concurrently". The intro sentence has no cite and the Key words row cites 7. Fix: cite 8 (S8) for this definition. |
| 43 | Key words: Serialization failure = an error that asks the application to run the transaction again | 7 | PASS | "applications using this level must be prepared to retry transactions due to serialization failures" |

The text "PostgreSQL's table differs from the SQL standard's" is handled correctly: the page shows the PostgreSQL manual table (Table 13.1), marks the two cells where PostgreSQL is stricter than the standard, and does not claim the standard's table.

## Text marked as the tutorial's own

- "A real-life example", first paragraph (course seat, payment row, enrolment row): marked "This example is the tutorial's own." It states no source fact. OK.
- "A real-life example", second paragraph: the numbers 40 and 41 are the tutorial's own, and the isolation behavior is cited to S7. OK (rows 33 and 34).
- Tip callout "Tutorial advice": says "These test ideas are the tutorial's own advice." No `<Cite>`. The one factual hint ("do not expect the ids to have no gaps") matches the sequence fact of row 37. OK.
- "The page 'ACID and BASE' covers the four ACID promises": an internal reference. `content/course/acid-base.mdx` exists with the title "ACID and BASE". OK.

## Structure check

- Sources: 8 entries, all https, all PostgreSQL manual pages. Each is cited (1 to 8 all appear). Every `<Cite n>` has a source (n is 1 to 8). PASS.
- Copy check: an 8-word window search against all 8 sources finds 19 hits. All come from two places: the isolation table (cell values and column names) and the exact error message `could not serialize access due to concurrent update`. Both are data that must match the manual. No run of prose is copied. PASS.
- Sections in order: In plain words, When you need it, (How it works, Isolation levels), A real-life example, Common mistakes, What a tester can check, Key words. Key words is last. The tip callout has no `<Cite>`. No `<Voices>`. PASS.
- `#` title is "Transactions". PASS.
- Source types: all PostgreSQL official documentation. No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com. PASS.

43 claims checked. Two FAILs (rows 36 and 42).

## Re-check

The writer changed three places. I re-read the new text against the sources.

- Row 36: the bullet now reads "In Serializable transactions, do not depend on data read in a transaction that later aborted" (cite 7). S7 says this in the Serializable section: "applications must not depend on results read during a transaction that later aborted". The scope now matches. PASS.
- Row 42: the intro sentence and the Key words row now cite 8. S8: "The isolation level of a transaction determines what data the transaction can see when other transactions are running concurrently". PASS.
- Rows 33 and 34 (note): the example now says "Session A counts the seats taken", so 40 then 41 after a new enrolment is consistent. The behavior at Read Committed and Repeatable Read is unchanged and still correct. PASS.
- All eight sources are still cited, and every `<Cite n>` is 1 to 8. The 8-word copy check on the full page finds only the exact error message `could not serialize access due to concurrent update`, which must match the manual. No other structure change.

Open FAILs: 0
