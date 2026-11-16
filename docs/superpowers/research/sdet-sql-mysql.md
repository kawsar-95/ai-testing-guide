# Research notes: SDET Roadmap, SQL with MySQL

Page: `content/sdet/sql-mysql.mdx`. Accessed 2026-11-15.

The MySQL 8.4 Reference Manual pages are cited at their Oracle-hosted copy on `docs.oracle.com`. `dev.mysql.com` answered HTTP 403 to scripted fetches on 2026-11-15, so the claim check could not read it there. A real browser loaded the same page on `dev.mysql.com` with HTTP 200, and its title matched the Oracle copy (`15.2.13 SELECT Statement`).

## Sources

| ID | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | SELECT Statement | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/select.html | 2026-11-15 |
| S2 | JOIN Clause | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/join.html | 2026-11-15 |
| S3 | Working with NULL Values | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/working-with-null.html | 2026-11-15 |
| S4 | Aggregate Function Descriptions | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/aggregate-functions.html | 2026-11-15 |
| S5 | INSERT Statement | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/insert.html | 2026-11-15 |
| S6 | UPDATE Statement | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/update.html | 2026-11-15 |
| S7 | DELETE Statement | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/delete.html | 2026-11-15 |
| S8 | START TRANSACTION, COMMIT, and ROLLBACK Statements | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/commit.html | 2026-11-15 |
| S9 | FOREIGN KEY Constraints | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/create-table-foreign-keys.html | 2026-11-15 |
| S10 | Problems with NULL Values | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/problems-with-null.html | 2026-11-15 |
| S11 | SQL Injection Prevention Cheat Sheet | OWASP Cheat Sheet Series | https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html | 2026-11-15 |
| S12 | Counting Rows | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/counting-rows.html | 2026-11-15 |
| S13 | Primary Key Optimization | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/primary-key-optimization.html | 2026-11-15 |
| S14 | Pattern Matching | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/pattern-matching.html | 2026-11-15 |
| S15 | mysql: The MySQL Command-Line Client | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/mysql.html | 2026-11-15 |
| S16 | What is MySQL? | MySQL 8.4 Reference Manual (Oracle) | https://docs.oracle.com/cd/E17952_01/mysql-8.4-en/what-is-mysql.html | 2026-11-15 |

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| C1 | SELECT retrieves rows from one or more tables. | S1 | "SELECT is used to retrieve rows selected from one or more tables, and can include UNION operations and subqueries." |
| C2 | WHERE gives the conditions that rows must satisfy. | S1 | "The WHERE clause, if given, indicates the condition or conditions that rows must satisfy to be selected." |
| C3 | LIMIT constrains the number of rows. | S1 | "The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement." |
| C4 | ON says how to join; WHERE says which rows to include. | S2 | "Generally, the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| C5 | LEFT JOIN: no match gives a right-side row of NULLs. | S2 | "If there is no matching row for the right table in the ON or USING part in a LEFT JOIN , a row with all columns set to NULL is used for the right table." |
| C6 | That finds rows with no counterpart. | S2 | "You can use this fact to find rows in a table that have no counterpart in another table" |
| C7 | NULL means a missing unknown value. | S3 | "a missing unknown value" |
| C8 | Test for NULL with IS NULL and IS NOT NULL. | S3 | "To test for NULL , use the IS NULL and IS NOT NULL operators" |
| C9 | `=`, `<`, `<>` cannot test for NULL. | S3 | "You cannot use arithmetic comparison operators such as = , < , or <> to test for NULL ." |
| C10 | A comparison with NULL is NULL. | S3 | "Because the result of any arithmetic comparison with NULL is also NULL , you cannot obtain any meaningful results from such comparisons." |
| C11 | NULL is not an empty string. | S10 | "who often think that NULL is the same thing as an empty string '' . This is not the case." |
| C12 | `COUNT(expr)` counts non-NULL values. | S4 | "Returns a count of the number of non- NULL values of expr in the rows retrieved by a SELECT statement." |
| C13 | `COUNT(*)` counts rows, NULL or not. | S4 | "COUNT(*) is somewhat different in that it returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| C14 | GROUP BY groups the records for each value. | S12 | "The preceding query uses GROUP BY to group all records for each owner ." |
| C15 | INSERT adds rows. | S5 | "INSERT inserts new rows into an existing table." |
| C16 | UPDATE modifies rows. | S6 | "UPDATE is a DML statement that modifies rows in a table." |
| C17 | UPDATE without WHERE updates all rows. | S6 | "With no WHERE clause, all rows are updated." |
| C18 | DELETE removes rows. | S7 | "DELETE is a DML statement that removes rows from a table." |
| C19 | DELETE without WHERE deletes all rows. | S7 | "With no WHERE clause, all rows are deleted." |
| C20 | START TRANSACTION, COMMIT, ROLLBACK. | S8 | "START TRANSACTION or BEGIN start a new transaction. COMMIT commits the current transaction, making its changes permanent. ROLLBACK rolls back the current transaction, canceling its changes." |
| C21 | Autocommit is on by default; ROLLBACK cannot undo it. | S8 | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT . You cannot use ROLLBACK to undo the effect" |
| C22 | Foreign keys and their constraints. | S9 | "MySQL supports foreign keys, which permit cross-referencing related data across tables, and foreign key constraints, which help keep the related data consistent." |
| C23 | Parent and child tables. | S9 | "A foreign key relationship involves a parent table that holds the initial column values, and a child table with column values that reference the parent column values." |
| C24 | RESTRICT rejects the parent delete; it is the default. | S9 | "RESTRICT : Rejects the delete or update operation for the parent table. Specifying RESTRICT (or NO ACTION ) is the same as omitting the ON DELETE or ON UPDATE clause." |
| C25 | The primary key and its index. | S13 | "The primary key for a table represents the column or set of columns that you use in your most vital queries. It has an associated index, for fast query performance." |
| C26 | A primary key cannot include NULL. | S13 | "because it cannot include any NULL values" |
| C27 | `_` and `%`; patterns are case-insensitive by default. | S14 | "SQL pattern matching enables you to use _ to match any single character and % to match an arbitrary number of characters (including zero characters). In MySQL, SQL patterns are case-insensitive by default." |
| C28 | Use LIKE, not `=`, with patterns. | S14 | "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| C29 | The mysql client. | S15 | "mysql is a simple SQL shell with input line editing capabilities. It supports interactive and noninteractive use." |
| C30 | Connect with a user and a password prompt. | S15 | "mysql --user= user_name --password db_name" |
| C31 | Interactive output is an ASCII table. | S15 | "When used interactively, query results are presented in an ASCII-table format." |
| C32 | SQL injection: string-built queries run the attacker's code. | S11 | "an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database" |
| C33 | Use parameterized queries. | S11 | "use parameterized queries for dynamic data values" |
| C35 | MySQL is a DBMS; its databases are relational. | S16 | "MySQL is a database management system." |
| C36 | A relational database stores data in separate tables. | S16 | "MySQL databases are relational. A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| C37 | SQL is the most common standardized language for databases. | S16 | "SQL is the most common standardized language used to access databases." |
| C34 | Least privilege for database accounts. | S11 | "To minimize the potential damage of a successful SQL injection attack, you should minimize the privileges assigned to every database account in your environment." |
| C38 | The fix: define the SQL structure apart from its data values, and bind the values. | S11 | "define the SQL structure separately from its data values, then bind those values through the database API: use parameterized queries for dynamic data values" |
| C39 | Parameterized queries use `?` as the placeholder for each value. | S11 | "the recommended safe implementation would use parameterized queries, using ? as placeholders for the values" |
| C40 | `expr = NULL` is never true, so it returns no rows. | S10 | "because expr = NULL is never true for any expression" |

## Run check

The SQL of "Try it" ran on 2026-11-15 in a throwaway `mysql:8.4` Docker container (server 8.4.13), with `mysql -t`.

- Paid orders: `Asha 1200.00`, `Rafi 999.00`.
- Orders per customer with `COUNT(orders.id)`: Asha 2, Rafi 1, Mina 0. The same query with `COUNT(*)` gave Mina 1.
- Customers with no orders (`SELECT customers.name FROM customers LEFT JOIN orders ON orders.customer_id = customers.id WHERE orders.id IS NULL;`): Mina.
- `phone IS NULL`: Rafi. `phone = ''`: Mina. `phone = NULL`: no rows.
- `START TRANSACTION; DELETE ... 'pending'`: 2 rows inside the transaction; 3 after `ROLLBACK`.
- `name LIKE 'a%'`: Asha.
- `DELETE FROM customers WHERE id = 1`: `ERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails`.
