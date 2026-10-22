# Fact-check: Databases and DBMS (`content/course/database.mdx`)

Reviewer: not the writer. Sources fetched 2026-10-22 into `/tmp/claude-1000/fc2-database/` (the MySQL page needed 3 retries because of the "Technical Difficulties" page; it then loaded in full). Cite numbers are the page numbers: 1 MySQL 8.4 What is MySQL, 2 PG Concepts, 3 PG Architectural Fundamentals, 4 PG Transactions, 5 PG MVCC intro, 6 PG WAL, 7 PG Privileges, 8 PG What Is PostgreSQL.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | A database is a structured collection of data; from a shopping list to a company network | 1 | PASS | "A database is a structured collection of data. It may be anything from a simple shopping list to a picture gallery or the vast amounts of information in a corporate network." (copy problem: see S1) |
| 2 | You need a DBMS (such as MySQL Server) to add, read, process data | 1 | PASS | "To add, access, and process data stored in a computer database, you need a database management system such as MySQL Server." |
| 3 | DBMSs are central in computing, as separate tools or parts of other apps | 1 | PASS | "database management systems play a central role in computing, as standalone utilities, or as parts of other applications." |
| 4 | MySQL and PostgreSQL are relational: data in tables, not one big pile | 1, 2 | PASS | 1: "A relational database stores data in separate tables rather than putting all the data in one big storeroom." 2: "PostgreSQL is a relational database management system (RDBMS)... Relation is essentially a mathematical term for table." |
| 5 | A table is a named collection of rows; same named columns; each column one data type | 2 | PASS | "Each table is a named collection of rows. Each row of a given table has the same set of named columns, and each column is of a specific data type." (copy problem: see S3) |
| 6 | SQL does not promise row order unless you sort | 2 | PASS | "SQL does not guarantee the order of the rows within the table in any way (although they can be explicitly sorted for display)." |
| 7 | Tables are grouped into databases | 2 | PASS | "Tables are grouped into databases" |
| 8 | Table row "Storage and access": DBMS lets you add, access, process data | 1 | PASS | Same quote as claim 2. |
| 9 | Table row "Queries": SQL is the most common standard language to access databases | 1 | PASS | "SQL is the most common standardized language used to access databases." |
| 10 | Table row "Rules": the database enforces the rules you set | 1 | PASS | "The database enforces these rules" |
| 11 | Table row "Concurrency": the server handles many connections at the same time | 3 | PASS | "The PostgreSQL server can handle multiple concurrent connections from clients." The source is about PostgreSQL; the row does not say so (minor, the intro line says "the sources"). |
| 12 | Table row "Durability": a transaction is logged to permanent storage before it is reported complete | 4 | PASS | "A transactional database guarantees that all the updates made by a transaction are logged in permanent storage (i.e., on disk) before the transaction is reported complete." |
| 13 | Table row "Access control": a new object can be used by its owner at first, and others need granted privileges | 7 | FAIL | Source: "For most kinds of objects, the initial state is that only the owner (or a superuser) can do anything with the object." The row drops "for most kinds of objects" and the superuser, and does not say it is PostgreSQL. The "How it works" section of the same page has the correct wording. |
| 14 | PostgreSQL: server process manages database files, accepts connections, does actions for clients | 3 | PASS | "A server process, which manages the database files, accepts connections to the database from client applications, and performs database actions on behalf of the clients." |
| 15 | A client can be a web server that reads the database to build web pages | 3 | PASS | "a web server that accesses the database to display web pages" |
| 16 | Client and server can run on different hosts over TCP/IP | 3 | PASS | "the client and the server can be on different hosts. In that case they communicate over a TCP/IP network connection." |
| 17 | MySQL is client/server and can run as an embedded library in an app | 1 | PASS | "The MySQL Database Software is a client/server system" ... "We also provide MySQL Server as an embedded multithreaded library that you can link into your application" |
| 18 | PostgreSQL starts a new process for each connection | 3 | PASS | "it starts (“forks”) a new process for each connection." |
| 19 | App can send SQL directly, embed SQL in code, or use an API that hides the SQL | 1 | PASS | "you might enter SQL directly..., embed SQL statements into code written in another language, or use a language-specific API that hides the SQL syntax." |
| 20 | PostgreSQL supports a large part of the SQL standard | 8 | PASS | "It supports a large part of the SQL standard" (copy problem: see S4) |
| 21 | You can set rules such as one-to-many, unique, required; the database enforces them | 1 | PASS | "rules governing the relationships between different data fields, such as one-to-one, one-to-many, unique, required or optional... The database enforces these rules" |
| 22 | In a well-designed database the app never sees inconsistent, duplicate, orphan, out-of-date, or missing data | 1 | PASS | "with a well-designed database, your application never sees inconsistent, duplicate, orphan, out-of-date, or missing data." (copy problem: see S2) |
| 23 | PostgreSQL lists foreign keys and triggers among its features | 8 | PASS | "offers many modern features: complex queries foreign keys triggers updatable views..." |
| 24 | A transaction bundles steps into one all-or-nothing operation; others do not see middle states | 4 | PASS | "it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions" |
| 25 | MVCC: each statement sees a snapshot; reading never blocks writing | 5 | PASS | "each SQL statement sees a snapshot of data"; "reading never blocks writing and writing never blocks reading." |
| 26 | A transactional database logs updates to disk before reporting the transaction complete | 4 | PASS | Same quote as claim 12. |
| 27 | WAL: log a change before writing it to data files; after a crash it can replay the log | 6 | PASS | "changes to data files... must be written only after those changes have been logged"; "any changes that have not been applied to the data pages can be redone from the WAL records." |
| 28 | PostgreSQL: new object has an owner; for most objects only owner (or superuser) can use it at first; owner must grant privileges such as SELECT or INSERT to other roles | 7 | PASS | "When an object is created, it is assigned an owner." "For most kinds of objects, the initial state is that only the owner (or a superuser) can do anything with the object. To allow other roles to use it, privileges must be granted." Privilege list includes SELECT, INSERT. ("Ordinarily, only the object's owner (or a superuser) can grant" supports "owner must grant".) (copy problem: see S5) |
| 29 | Example: DBMS transaction is all-or-nothing, so a failure between two steps leaves neither done | 4 | PASS | "if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all." The example is marked "the tutorial's own". |
| 30 | Example: a student listing courses should not see half of the change | 4 | PASS | "each one should not be able to see the incomplete changes made by others." |
| 31 | Example: "The app does not need its own code for this. The DBMS does it." | none | PASS (advice) | Inside the marked own example. The app still issues the transaction (the text before says so). Advisory: "its own code for this" could be misread; the source notes client libraries may issue BEGIN/COMMIT. |
| 32 | Mistake: database is the data, DBMS is the software that manages it | 1 | PASS | "MySQL is a database management system. A database is a structured collection of data." |
| 33 | Mistake: SQL gives no order unless you sort | 2 | PASS | Same quote as claim 6. |
| 34 | Mistake: app and DBMS are two parts that can run on different hosts | 3 | PASS | Same quote as claim 16. The next sentence, "A failure can come from the link between them.", has no cite and is not marked as the tutorial's own. Advisory only (it is an inference, not a source fact). |
| 35 | Mistake: privileges exist so each role gets only what it needs | 7 | PASS (marked own) | Source does not state a purpose of privileges. The sentence after it says "This reading of the rule is the tutorial's own." so it is marked. Advisory: the cite sits on the purpose sentence; move it to the fact only. |
| 36 | Key words: Database, DBMS, Relational | 1 | PASS | Quotes of claims 1, 2, 4. |
| 37 | Key words: Table | 2 | PASS | Quote of claim 5. |
| 38 | Key words: Transaction | 4 | PASS | Quote of claim 24. |
| 39 | Key words: MVCC, reading and writing do not block each other | 5 | PASS | Quote of claim 25. |
| 40 | Key words: WAL is written before the data files, used to recover after a crash | 6 | PASS | Quote of claim 27. |
| 41 | Key words: Privilege, a right such as SELECT that the owner grants to a role | 7 | PASS | "There are different kinds of privileges: SELECT, INSERT..."; "To allow other roles to use it, privileges must be granted." |

The tip callout ("Tutorial advice") is marked as the tutorial's own, has no `<Cite>`, and states no source fact as a source claim. Skipped.

## Structure check

| # | Check | Verdict | Detail |
|---|---|---|---|
| S0 | Sources are https, each is cited, each `<Cite n>` has a source | PASS | 8 sources, all https, all cited (1 to 8). No cite above 8. |
| S1 | No run of 8 or more words copied: "A database is a structured collection of data" | FAIL | 8 words in the lede of "In plain words" and in source 1 (9 tokens with the next word "It"). Reword. |
| S2 | No run of 8 or more words copied: "never sees inconsistent, duplicate, orphan, out-of-date, or missing data" | FAIL | 11 words, copied from source 1 (How it works, Rules). Reword. |
| S3 | No run of 8 or more words copied: "table is a named collection of rows. Each row" | FAIL | 9 words, copied from source 2 (In plain words). Reword. |
| S4 | No run of 8 or more words copied: "supports a large part of the SQL standard" | FAIL | 8 words, copied from source 8 (How it works, Queries). Reword. |
| S5 | Section order | PASS | In plain words, When you need it, (How it works), A real-life example, Common mistakes, What a tester can check, Key words. Key words is last. "How it works" is an extra section between the required ones, as on the sibling course pages (not a rule failure). |
| S6 | Tip callout has no `<Cite>`; no `<Voices>` | PASS | |
| S7 | `#` title equals "Databases and DBMS" | PASS | |
| S8 | No blog, forum, Wikipedia, AI summary, systemdesignbangla.com | PASS | Sources are the MySQL 8.4 manual and the PostgreSQL 18 documentation. |

Copy check method: 6-word window match of the page text (tags removed) against the text of all 8 sources. Other overlaps are 7 words or fewer ("only the owner or a superuser can", "or as parts of other applications MySQL").

## Re-check

Changed text re-checked against the sources, and the copy check re-run (6-word window, all 8 sources).

| Row | Result | Detail |
|---|---|---|
| 13 (Access control table row) | PASS | Now "In PostgreSQL, for most kinds of objects, only the owner (or a superuser) can use a new object at first. Other roles need granted privileges" (cite 7). Matches "For most kinds of objects, the initial state is that only the owner (or a superuser) can do anything with the object. To allow other roles to use it, privileges must be granted." |
| S1 | PASS | "data that is kept in an organized way" (cite 1), a paraphrase of "structured collection of data". Longest overlap with a source is now 7 words or fewer. |
| S2 | PASS | Reworded ("the app is safe from bad data: data that is inconsistent, duplicated, orphaned, old, or missing", cite 1). Same five kinds as the source. |
| S3 | PASS | "A table has a name and holds rows. All rows of a table share the same named columns" (cite 2). Key words "A named set of rows with the same columns". Both match the source. |
| S4 | PASS | "PostgreSQL follows much of the SQL standard" (cite 8). Close to "supports a large part of the SQL standard". |
| Advisory 34 | Fixed | "A failure can come from the link between them (this point is the tutorial's own)." |
| Advisory 35 | Fixed | Cite removed. The sentence is marked "This advice is the tutorial's own." |

No new claim was added. Sources, section order, title, and the tip callout are unchanged.

Open FAILs: 0
