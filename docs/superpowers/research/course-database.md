# Course page: Databases and DBMS (research notes)

Writer notes for `content/course/database.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-database/`. Fetched text is treated as data. The MySQL page `what-is-mysql.html` was fetched from `https://dev.mysql.com/doc/refman/8.4/en/what-is-mysql.html`. The PostgreSQL pages are the documentation of version 18.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | 1. What Is PostgreSQL? (PostgreSQL 18 Documentation) | https://www.postgresql.org/docs/current/intro-whatis.html | 2026-10-22 |
| S2 | 2.2. Concepts (PostgreSQL 18 Documentation, Tutorial) | https://www.postgresql.org/docs/current/tutorial-concepts.html | 2026-10-22 |
| S3 | 1.2. Architectural Fundamentals (PostgreSQL 18 Documentation, Tutorial) | https://www.postgresql.org/docs/current/tutorial-arch.html | 2026-10-22 |
| S4 | 3.4. Transactions (PostgreSQL 18 Documentation, Tutorial) | https://www.postgresql.org/docs/current/tutorial-transactions.html | 2026-10-22 |
| S5 | 13.1. Introduction, Concurrency Control (PostgreSQL 18 Documentation) | https://www.postgresql.org/docs/current/mvcc-intro.html | 2026-10-22 |
| S6 | 28.3. Write-Ahead Logging (WAL) (PostgreSQL 18 Documentation) | https://www.postgresql.org/docs/current/wal-intro.html | 2026-10-22 |
| S7 | 5.8. Privileges (PostgreSQL 18 Documentation) | https://www.postgresql.org/docs/current/ddl-priv.html | 2026-10-22 |
| S8 | 1.2.1 What is MySQL? (MySQL 8.4 Reference Manual) | https://dev.mysql.com/doc/refman/8.4/en/what-is-mysql.html | 2026-10-22 |

Page cite numbers: n=1 is S8, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6, n=7 is S7, n=8 is S1.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A database is a structured collection of data. It can be as small as a shopping list or as large as a corporate network. | S8 | "A database is a structured collection of data. It may be anything from a simple shopping list to a picture gallery or the vast amounts of information in a corporate network." |
| C2 | To add, access, and process the data, you need a DBMS. | S8 | "To add, access, and process data stored in a computer database, you need a database management system such as MySQL Server." |
| C3 | DBMSs play a central role in computing, as standalone tools or as parts of other applications. | S8 | "database management systems play a central role in computing, as standalone utilities, or as parts of other applications." |
| C4 | PostgreSQL and MySQL are relational: data in tables. A relation is a table. | S2, S8 | S2: "PostgreSQL is a relational database management system (RDBMS). That means it is a system for managing data stored in relations. Relation is essentially a mathematical term for table." S8: "A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| C5 | A table is a named collection of rows. Each row has the same named columns. Each column has one data type. SQL does not guarantee the order of rows. | S2 | "Each table is a named collection of rows. Each row of a given table has the same set of named columns, and each column is of a specific data type." / "SQL does not guarantee the order of the rows within the table in any way" |
| C6 | Tables are grouped into databases. The databases of one server instance form a database cluster. | S2 | "Tables are grouped into databases, and a collection of databases managed by a single PostgreSQL server instance constitutes a database cluster." |
| C7 | Client/server: the server process manages the database files, accepts connections, and performs database actions for the clients. A client can be a web server. Client and server can be on different hosts and talk over TCP/IP. | S3 | "A server process, which manages the database files, accepts connections to the database from client applications, and performs database actions on behalf of the clients." / "a client could be a text-oriented tool, a graphical application, a web server that accesses the database to display web pages" / "the client and the server can be on different hosts. In that case they communicate over a TCP/IP network connection." |
| C8 | The server handles many connections at the same time. PostgreSQL starts a new process for each connection. | S3 | "The PostgreSQL server can handle multiple concurrent connections from clients. To achieve this it starts (“forks”) a new process for each connection." |
| C9 | MySQL is a client/server system. It can also be used as an embedded library. | S8 | "The MySQL Database Software is a client/server system" / "We also provide MySQL Server as an embedded multithreaded library that you can link into your application" |
| C10 | SQL is the most common standardized language to access databases. A program can embed SQL statements or use an API that hides the SQL. | S8 | "SQL is the most common standardized language used to access databases." / "embed SQL statements into code written in another language, or use a language-specific API that hides the SQL syntax." |
| C11 | You set rules for the relations between data fields (one-to-many, unique, required or optional). The database enforces the rules. With a well-designed database the app never sees inconsistent, duplicate, orphan, out-of-date, or missing data. | S8 | "You set up rules governing the relationships between different data fields, such as one-to-one, one-to-many, unique, required or optional" / "The database enforces these rules, so that with a well-designed database, your application never sees inconsistent, duplicate, orphan, out-of-date, or missing data." |
| C12 | PostgreSQL supports a large part of the SQL standard, and has foreign keys, triggers, updatable views, transactional integrity, and MVCC. | S1 | "It supports a large part of the SQL standard and offers many modern features: complex queries foreign keys triggers updatable views transactional integrity multiversion concurrency control" |
| C13 | A transaction bundles steps into one all-or-nothing operation. Other transactions do not see the middle states. If a failure stops the transaction, no step affects the database. | S4 | "it bundles multiple steps into a single, all-or-nothing operation. The intermediate states between the steps are not visible to other concurrent transactions, and if some failure occurs that prevents the transaction from completing, then none of the steps affect the database at all." |
| C14 | A transactional database logs all the updates of a transaction in permanent storage (disk) before it reports the transaction complete. | S4 | "A transactional database guarantees that all the updates made by a transaction are logged in permanent storage (i.e., on disk) before the transaction is reported complete." |
| C15 | With MVCC each statement sees a snapshot of the data. Reading never blocks writing, and writing never blocks reading. | S5 | "each SQL statement sees a snapshot of data (a database version) as it was some time ago" / "reading never blocks writing and writing never blocks reading." |
| C16 | WAL: changes to data files are written only after the changes are logged. After a crash the database can be recovered from the log (redo). | S6 | "changes to data files (where tables and indexes reside) must be written only after those changes have been logged" / "in the event of a crash we will be able to recover the database using the log: any changes that have not been applied to the data pages can be redone from the WAL records." |
| C17 | A new object has an owner. For most objects only the owner (or a superuser) can use it at first. Other roles need privileges that are granted. Privilege kinds include SELECT, INSERT, UPDATE, DELETE. | S7 | "When an object is created, it is assigned an owner." / "only the owner (or a superuser) can do anything with the object. To allow other roles to use it, privileges must be granted." / "SELECT, INSERT, UPDATE, DELETE, TRUNCATE ..." |

## Not on the page

The sources do not say that every DBMS has all these features. The page names only PostgreSQL and MySQL for them. Backup and replication are not on the page. The tester advice and the example are the tutorial's own text.
