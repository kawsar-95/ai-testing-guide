# Fact check: sdet / sql-mysql

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep, and Glob only; no web access) that did not write the page. It got only the page, the visible text of the sources that the page cites (fetched with a plain GET, as `scripts/sdet_claimcheck.py` reads them), and the brief in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the page and its research note, and the next round checked the whole page again.

## Round 1 (2026-11-15)

### Fact check: sdet / sql-mysql (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL, covering SELECT, joins, NULL, counts, transactions and keys, with checks a tester runs | none | N/A | It describes the page. It is not a fact about a tool. |
| 2 | Intro: a screen can say "Order placed" while the database holds a different total, a missing row or a duplicate. SQL lets a tester look behind the app. The page teaches the queries, the NULL and counting traps, and safe changes to test data. | none | N/A | This is framing and a description of the page. It gives no tool fact. |
| 3 | What it is: MySQL is a database management system, and its databases are relational. | S16 | PASS | "you need a database management system such as MySQL Server" ... "MySQL databases are relational." |
| 4 | A relational database stores data in separate tables. | S16 | PASS | "A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| 5 | SQL is the most common standardized language used to access databases. | S16 | PASS | "SQL is the most common standardized language used to access databases." |
| 6 | SELECT retrieves rows from one or more tables. | S1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" |
| 7 | INSERT adds new rows to a table. | S5 | PASS | "INSERT inserts new rows into an" |
| 8 | UPDATE modifies rows. | S6 | PASS | "modifies rows in a table." |
| 9 | DELETE removes them. | S7 | PASS | "removes rows from a table." |
| 10 | The command-line client is mysql, a simple SQL shell that you can use interactively or from a script. | S15 | PASS | "mysql is a simple SQL shell with input line editing capabilities. It supports interactive and noninteractive use." ... "You can execute SQL statements in a script file (batch file)" |
| 11 | You connect with `mysql --user=user_name --password db_name`, and it asks for the password. | S15 | PASS | "mysql --user= user_name --password db_name" ... "you'll need to enter your password in response to the prompt that mysql displays" |
| 12 | Links to Databases and DBMS and Indexes; "This page is about writing the queries." | none | N/A | It describes the page and gives no tool fact. |
| 13 | How it works: WHERE gives the conditions that a row must satisfy to be selected. | S1 | PASS | "condition or conditions that rows must satisfy to be selected." |
| 14 | LIMIT constrains the number of rows that come back. | S1 | PASS | "The LIMIT clause can be used to constrain the number of rows returned by the" |
| 15 | ON says how to join two tables, and WHERE says which rows to keep. | S2 | PASS | "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 16 | In a LEFT JOIN, a left row with no match gets a right-side row with every column set to NULL. | S2 | PASS | "If there is no matching row for the right table in the ON or USING part in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 17 | That is how you find rows with no counterpart in another table. | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 18 | NULL means a missing, unknown value. | S3 | PASS | "NULL means “a missing unknown value”" |
| 19 | NULL is not an empty string. | S10 | PASS | "who often think that NULL is the same thing as an empty string '' . This is not the case." |
| 20 | Test for it with IS NULL and IS NOT NULL. | S3 | PASS | "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 21 | You cannot test for it with =, < or <>. | S3 | PASS | "You cannot use arithmetic comparison operators such as =, <, or <> to test for NULL." |
| 22 | A comparison with NULL gives NULL. | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 23 | COUNT(expr) counts the non-NULL values of the expression. | S4 | PASS | "Returns a count of the number of non-NULL values of expr in the rows retrieved by a SELECT statement." |
| 24 | COUNT(*) counts the rows, whether they contain NULL values or not. | S4 | PASS | "COUNT(*) is somewhat different in that it returns a count of the number of rows retrieved, whether or not they contain" |
| 25 | GROUP BY groups the rows for each value, so a count per customer is one query. | S12 | PASS | "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" ... "uses GROUP BY to group all records for each owner." |
| 26 | In a LIKE pattern, _ matches one character and % matches any number of characters. Patterns are case-insensitive by default. | S14 | PASS | "_ to match any single character and % to match an arbitrary number of characters (including zero characters). In MySQL, SQL patterns are case-insensitive by default." |
| 27 | A primary key is the column or columns of your most important lookups, and it cannot include NULL. | S13 | PASS | "The primary key for a table represents the column or set of columns that you use in your most vital queries." ... "it cannot include any NULL values." |
| 28 | A foreign key links a child table to the values of a parent table. | S9 | PASS | "A foreign key relationship involves a parent table that holds the initial column values, and a child table with column values that reference" |
| 29 | By default, MySQL rejects a delete of a parent row that a child row still references. | S9 | PASS | "RESTRICT: Rejects the delete or update operation for the parent table. Specifying RESTRICT (or NO ACTION) is the same as omitting the ON DELETE or ON UPDATE clause." |
| 30 | START TRANSACTION starts a transaction. COMMIT makes its changes permanent, and ROLLBACK cancels them. | S8 | PASS | "START TRANSACTION or BEGIN start a new transaction." "COMMIT commits the current transaction, making its changes permanent." "ROLLBACK rolls back the current transaction, canceling its changes." |
| 31 | Autocommit is on by default, so outside a transaction each statement is committed at once and you cannot roll it back. | S8 | PASS | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 32 | Try it: you need a MySQL 8.4 server on which you may create a database. | none | N/A | This is a setup instruction, not a tool fact. |
| 33 | In interactive use, mysql shows the result as a table. | S15 | PASS | "When used interactively, query results are presented in an ASCII-table format." |
| 34 | The result is Asha 2, Rafi 1, Mina 0. | S15 | N/A | It reports what the page's own example code prints. |
| 35 | Step 1: Mina now has 1, because COUNT(*) counts the NULL row that the LEFT JOIN made for her. | S4 | PASS | "COUNT(*) ... returns a count of the number of rows retrieved, whether or not they contain" NULL values. |
| 36 | Step 2: keep the LEFT JOIN, select only the name, and keep the rows where the right side is NULL. Only Mina comes back. | S2 | PASS | "SELECT left_tbl.* FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id WHERE right_tbl.id IS NULL;" The "Only Mina" part is the output of the page's own code. |
| 37 | Step 3: `phone = NULL` returns no rows. The other two results are Rafi, then Mina. | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL". The Rafi and Mina results are output of the page's own code. |
| 38 | Step 4: the counts are 2 after the DELETE and 3 after ROLLBACK. | S8 | N/A | It reports the output of the page's own code. S8 supports the ROLLBACK behaviour: "ROLLBACK rolls back the current transaction, canceling its changes." |
| 39 | Step 5: ERROR 1451 appears, because orders still reference Asha. | S9 | PASS | "RESTRICT: Rejects the delete or update operation for the parent table." The error text is output of the page's own code. |
| 40 | How a tester uses it: after a test places an order, a SELECT with a WHERE on the order's id shows the row that was really stored. | S1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" ... "condition or conditions that rows must satisfy to be selected." "Compare the stored total and status with what the screen said" is advice. |
| 41 | A LEFT JOIN with WHERE ... IS NULL finds rows with no counterpart, such as orders whose customer is missing. | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 42 | COUNT() with GROUP BY checks totals per user, per status or per day in one query. | S12 | PASS | "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." |
| 43 | INSERT builds the rows a test needs. | S5 | PASS | "INSERT inserts new rows into an" |
| 44 | Inside a transaction, ROLLBACK cancels the changes when the check is done. | S8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." |
| 45 | A foreign key constraint rejects the parent delete. | S9 | PASS | "RESTRICT: Rejects the delete or update operation for the parent table." |
| 46 | "the app must show a clear message, not a crash" | none | N/A | This is advice on what the app should do. It is not a tool fact. |
| 47 | When an app builds a query by joining strings, an attacker can put SQL into the input, and the database runs it. | S11 | PASS | "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 48 | The fix is a parameterized query. | S11 | PASS | "Resolution: define the SQL structure separately from its data values, then bind those values through the database API: use parameterized queries for dynamic data values" |
| 49 | Link to Security Testing. | none | N/A | It is a pointer to another page. |
| 50 | Common mistakes: a comparison with NULL gives NULL, so WHERE phone = NULL returns no rows. | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL, you cannot obtain any meaningful results from such comparisons." |
| 51 | NULL is not the same thing as an empty string ''. | S10 | PASS | "who often think that NULL is the same thing as an empty string '' . This is not the case." |
| 52 | "A test for 'no phone' must say which of the two it means." | none | N/A | This is advice. |
| 53 | COUNT(*) counts every row, including the NULL row of an unmatched join. | S4 | PASS | "COUNT(*) ... returns a count of the number of rows retrieved, whether or not they contain" NULL values. |
| 54 | Without WHERE, UPDATE changes all the rows. | S6 | PASS | "With no WHERE clause, all rows are updated." |
| 55 | Without WHERE, DELETE removes all the rows. | S7 | PASS | "With no WHERE clause, all rows are deleted." |
| 56 | With autocommit on, a statement outside a transaction is committed at once, and ROLLBACK cannot undo it. | S8 | PASS | "By default, MySQL runs with autocommit mode enabled. ... You cannot use ROLLBACK to undo the effect" |
| 57 | %and _ work only with LIKE or NOT LIKE, not with = or <>. | S14 | PASS | "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| K1 | SQL: the language for reading and changing data in a relational database. | n/a | PASS | Technical, What it is: "SQL is the most common standardized language used to access databases", with SELECT, INSERT, UPDATE and DELETE and "its databases are relational". |
| K2 | SELECT reads rows; WHERE filters them and LIMIT caps how many come back. | n/a | PASS | Technical: "`WHERE` gives the conditions that a row must satisfy to be selected. `LIMIT` constrains the number of rows that come back." |
| K3 | LEFT JOIN keeps every row of the left table; a row with no match gets NULL on the right side. | n/a | FAIL | No Technical panel says that a LEFT JOIN keeps every left row. Technical says only "a left row with no match gets a right-side row with every column set to `NULL`". Fix: "A left row with no match gets a right-side row of NULLs." |
| K4 | NULL: a missing, unknown value; not an empty string. Test it with IS NULL. | n/a | PASS | Technical: "`NULL` means a missing, unknown value, and it is not an empty string. Test for it with `IS NULL` and `IS NOT NULL`." |
| K5 | COUNT(expr) counts non-NULL values; COUNT(*) counts every row. | n/a | PASS | Technical: "`COUNT(expr)` counts the non-`NULL` values of the expression. `COUNT(*)` counts the rows, whether they contain `NULL` values or not." |
| K6 | GROUP BY groups the rows by a value, for one count or sum per group. | n/a | FAIL | Technical gives only "`GROUP BY` groups the rows for each value, so a count per customer is one query". No Technical panel mentions a sum. Fix: "for one count per group". |
| K7 | Primary key: the column or columns that name each row; never NULL. | n/a | FAIL | Technical says "the column or columns of your most important lookups, and it cannot include `NULL`". No Technical panel says that it names each row. Fix: use the Technical wording. |
| K8 | Foreign key: a column of a child table that references a parent table. | n/a | PASS | Technical: "A foreign key links a child table to the values of a parent table." |
| K9 | Transaction: statements that COMMIT makes permanent or ROLLBACK cancels. | n/a | PASS | Technical: "`COMMIT` makes its changes permanent, and `ROLLBACK` cancels them." |
| K10 | Autocommit: the default mode; each statement outside a transaction is committed at once. | n/a | PASS | Technical: "Autocommit is on by default, so outside a transaction each statement is committed at once". |
| K11 | LIKE: `%` is any text, `_` is one character. | n/a | PASS | Technical: "`_` matches one character and `%` matches any number of characters." |
| K12 | Parameterized query: a query whose values are sent apart from the SQL, which stops SQL injection. | n/a | FAIL | Technical says only "The fix is a parameterized query". No Technical panel says that the values are sent apart from the SQL. Fix: "The fix for SQL injection." |

Open FAILs: 4

FAILs in round 1: 4.

## Round 2 (2026-11-16)

### Fact check: sdet / sql-mysql (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL (SELECT, joins, NULL, counts, transactions, keys), with the checks a tester runs | none | N/A | Describes the page itself. |
| 2 | Intro: a screen can say "Order placed" while the database holds a different total, row or duplicate; SQL lets a tester look behind the app; the page teaches the queries, the traps of NULL and counting, and safe changes to test data | none | N/A | Framing of the page, with no tool fact. |
| 3 | What it is: MySQL is a database management system, and its databases are relational | 16 | PASS | "MySQL is a database management system." and "MySQL databases are relational." |
| 4 | A relational database stores data in separate tables | 16 | PASS | "A relational database stores data in separate tables rather..." |
| 5 | SQL is the most common standardized language used to access databases | 16 | PASS | "SQL is the most common standardized language used to access databases." |
| 6 | SELECT retrieves rows from one or more tables | 1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" |
| 7 | INSERT adds new rows to a table | 5 | PASS | "INSERT inserts new rows into an existing table" |
| 8 | UPDATE modifies rows | 6 | PASS | "UPDATE statement updates columns of existing rows" |
| 9 | DELETE removes rows | 7 | PASS | "removes rows from a table." |
| 10 | The command-line client is mysql, a simple SQL shell that you can use interactively or from a script | 15 | PASS | "mysql is a simple SQL shell with input line editing capabilities. It supports interactive and noninteractive use." and "You can execute SQL statements in a script file (batch file)" |
| 11 | You connect with `mysql --user=user_name --password db_name`, and it asks for the password | 15 | PASS | "mysql --user= user_name --password db_name" and "you'll need to enter your password in response to the prompt that mysql displays" |
| 12 | Links to Databases and DBMS and Indexes; "This page is about writing the queries" | none | N/A | Describes the page and gives links, with no tool fact. |
| 13 | How it works: WHERE gives the conditions a row must satisfy to be selected | 1 | PASS | "condition or conditions that rows must satisfy to be selected." |
| 14 | LIMIT constrains the number of rows that come back | 1 | PASS | "The LIMIT clause can be used to constrain" the number of rows returned |
| 15 | ON says how to join two tables, and WHERE says which rows to keep | 2 | PASS | "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 16 | In a LEFT JOIN, a left row with no match gets a right-side row with every column set to NULL | 2 | PASS | "If there is no matching row for the right table in the ON or USING part in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 17 | That is how you find rows with no counterpart in another table | 2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 18 | NULL means a missing, unknown value | 3 | PASS | "NULL means "a missing unknown value"" |
| 19 | NULL is not an empty string | 10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 20 | Test for it with IS NULL and IS NOT NULL | 3 | PASS | "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 21 | You cannot test for it with =, <, or <> | 3 | PASS | "You cannot use arithmetic comparison operators such as =, <, or <> to test for NULL." |
| 22 | A comparison with NULL gives NULL | 3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 23 | COUNT(expr) counts the non-NULL values of the expression | 4 | PASS | "Returns a count of the number of non-NULL values of expr in the rows retrieved by a SELECT statement." |
| 24 | COUNT(*) counts the rows, whether they contain NULL values or not | 4 | PASS | "COUNT(*) is somewhat different in that it returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 25 | GROUP BY groups the rows for each value, so a count per customer is one query | 12 | PASS | "GROUP BY to group all records for each owner" and "You can use COUNT() if you want to find out how many pets each owner has" |
| 26 | In a LIKE pattern, _ matches one character and % any number of characters; patterns are case-insensitive by default | 14 | PASS | "_ to match any single character and % to match an arbitrary number of characters" and "SQL patterns are case-insensitive by default." |
| 27 | A primary key is the column or columns of your most important lookups, and it cannot include NULL | 13 | FAIL | S13 says "most vital queries", not "lookups": "The primary key for a table represents the column or set of columns that you use in your most vital queries." and "it cannot include any NULL values". Fix: write "most vital queries". |
| 28 | A foreign key links a child table to the values of a parent table | 9 | PASS | "a child table with column values that reference the parent column values." |
| 29 | By default, MySQL rejects a delete of a parent row that a child row still references | 9 | PASS | "the default action is always NO ACTION" and "NO ACTION... the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." |
| 30 | START TRANSACTION starts a transaction; COMMIT makes its changes permanent; ROLLBACK cancels them | 8 | PASS | "START TRANSACTION or BEGIN start a new transaction." "COMMIT commits the current transaction, making its changes permanent." "ROLLBACK rolls back the current transaction, canceling its changes." |
| 31 | Autocommit is on by default, so outside a transaction each statement is committed at once and you cannot roll it back | 8 | PASS | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 32 | Try it: you need a MySQL 8.4 server on which you may create a database; connect with mysql and create two tables | none | N/A | Setup instruction for the page's own example. |
| 33 | In interactive use, mysql shows the result as a table | 15 | PASS | "When used interactively, query results are presented in an ASCII-table format." The counts "Asha 2, Rafi 1, Mina 0" are output of the page's own code. |
| 34 | Step 1: COUNT(*) gives Mina 1 because it counts the NULL row that the LEFT JOIN made | 4 | PASS | "COUNT(*)... returns a count of the number of rows retrieved, whether or not they contain NULL values." The result "Mina now has 1" is output of the page's own code. |
| 35 | Step 2: keep the LEFT JOIN and the rows where the right side is NULL to find customers with no orders; only Mina comes back | 2 | PASS | "WHERE right_tbl.id IS NULL;" and "find rows in a table that have no counterpart in another table". "Only Mina" is code output. |
| 36 | Step 3: phone IS NULL, phone = '' and phone = NULL give Rafi, then Mina, then no rows | 3 | N/A | Only reports what the page's own example code returns. |
| 37 | Step 4: START TRANSACTION, DELETE, COUNT gives 2, ROLLBACK, count gives 3 | 8 | N/A | Only reports what the page's own example code returns. |
| 38 | Step 5: DELETE of customer 1 gives ERROR 1451 because orders still reference Asha | 9 | N/A | Only reports what the page's own example code returns. |
| 39 | How a tester uses it: after a test places an order, a SELECT with a WHERE on the order's id shows the row that was really stored | 1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" and "condition or conditions that rows must satisfy to be selected." "Compare the stored total and status..." is advice. |
| 40 | A LEFT JOIN with WHERE ... IS NULL finds rows with no counterpart, such as orders whose customer is missing | 2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 41 | COUNT() with GROUP BY checks totals per user, per status, or per day in one query | 12 | FAIL | S12 shows groupings per owner, species and sex only: "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" and "GROUP BY is useful for characterizing your data under various groupings." "Per day" and "per status" are not in S12. Fix: "COUNT() with GROUP BY gives a count for each group, such as each owner, in one query." |
| 42 | INSERT builds the rows a test needs | 5 | PASS | "INSERT inserts new rows into an existing table" |
| 43 | Inside a transaction, ROLLBACK cancels the changes when the check is done | 8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." |
| 44 | A foreign key constraint rejects the parent delete | 9 | PASS | "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." "Try to insert a row that breaks a key" and "the app must show a clear message" are advice. |
| 45 | When an app builds a query by joining strings, an attacker can put SQL into the input, and the database runs it | 11 | PASS | "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 46 | The fix is to define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with ? as the placeholder for each value | 11 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API" and "parameterized queries, using ? as placeholders for the values" |
| 47 | Common mistakes: a comparison with NULL gives NULL, so WHERE phone = NULL returns no rows | 3 | PASS | "the result of any arithmetic comparison with NULL is also NULL, you cannot obtain any meaningful results from such comparisons." |
| 48 | NULL is not the same thing as an empty string '' | 10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 49 | COUNT(*) counts every row, including the NULL row of an unmatched join | 4 | PASS | "COUNT(*)... returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 50 | Without WHERE, UPDATE changes all the rows | 6 | PASS | "WHERE clause, all rows are updated." |
| 51 | Without WHERE, DELETE removes all the rows | 7 | PASS | "clause, all rows are deleted." |
| 52 | With autocommit on, a statement outside a transaction is committed at once, and ROLLBACK cannot undo it | 8 | PASS | "when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 53 | % and _ work only with LIKE or NOT LIKE, not with = or <> | 14 | PASS | "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| 54 | What a tester can check: callout of tutorial advice | none | N/A | The page says it is its own advice. |
| K1 | SQL: the language for reading and changing data in a relational database | none | PASS | Technical panel: "SQL is the most common standardized language used to access databases", "SELECT retrieves rows from one or more tables", and "INSERT adds new rows", "UPDATE modifies rows", "DELETE removes them". "A relational database stores data in separate tables". |
| K2 | SELECT reads rows; WHERE filters them and LIMIT caps how many come back | none | PASS | "WHERE gives the conditions that a row must satisfy to be selected. LIMIT constrains the number of rows that come back" |
| K3 | LEFT JOIN: a left row with no match gets a right-side row of NULLs | none | PASS | "In a LEFT JOIN, a left row with no match gets a right-side row with every column set to NULL" |
| K4 | NULL: a missing, unknown value; not an empty string; test with IS NULL | none | PASS | "NULL means a missing, unknown value, and it is not an empty string. Test for it with IS NULL and IS NOT NULL" |
| K5 | COUNT(expr) / COUNT(*): counts non-NULL values / counts every row | none | PASS | "COUNT(expr) counts the non-NULL values of the expression. COUNT(*) counts the rows, whether they contain NULL values or not" |
| K6 | GROUP BY groups the rows for each value, for one count per group | none | PASS | "GROUP BY groups the rows for each value, so a count per customer is one query" |
| K7 | Primary key: the column or columns of the most important lookups; it cannot include NULL | none | PASS | "A primary key is the column or columns of your most important lookups, and it cannot include NULL". The panel's own wording is the one that fails against S13 (row 27). |
| K8 | Foreign key: a column of a child table that references a parent table | none | FAIL | The Technical panel says "A foreign key links a child table to the values of a parent table". It never says a foreign key is a column. Fix: "Links a child table to the values of a parent table." |
| K9 | Transaction: statements that COMMIT makes permanent or ROLLBACK cancels | none | PASS | "START TRANSACTION starts a transaction. COMMIT makes its changes permanent, and ROLLBACK cancels them" |
| K10 | Autocommit: the default mode; each statement outside a transaction is committed at once | none | PASS | "Autocommit is on by default, so outside a transaction each statement is committed at once" |
| K11 | LIKE: % is any text, _ is one character | none | PASS | "`_` matches one character and `%` matches any number of characters" |
| K12 | Parameterized query: SQL defined apart from its values, with ? placeholders the values are bound to; the fix for SQL injection | none | PASS | "define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder for each value" |

Open FAILs: 3

FAILs in round 2: 3.

## Round 3 (2026-11-16)

### Fact check: sdet / sql-mysql (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL; the checks a tester runs | none | N/A | Describes the page itself. |
| 2 | Intro: a screen can say "Order placed" while the database holds a different total, a missing row, or a duplicate. SQL lets a tester look behind the app. | none | N/A | General framing. It is not a fact about a tool or a number. |
| 3 | Intro: this page teaches the queries, the traps of `NULL` and counting, and how to change test data safely | none | N/A | Describes the page itself. |
| 4 | What it is: MySQL is a database management system, and its databases are relational | S16 | PASS | "MySQL is a database management system." "MySQL databases are relational." |
| 5 | A relational database stores data in separate tables | S16 | PASS | "A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| 6 | SQL is the most common standardized language used to access databases | S16 | PASS | "SQL is the most common standardized language used to access databases." |
| 7 | `SELECT` retrieves rows from one or more tables | S1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" |
| 8 | `INSERT` adds new rows to a table | S5 | PASS | "INSERT inserts new rows into an existing table" (I read "existing" from the full S5 line; the grep matched "INSERT inserts new rows into an"). |
| 9 | `UPDATE` modifies rows | S6 | PASS | "modifies rows in a table." |
| 10 | `DELETE` removes rows | S7 | PASS | "removes rows from a table." |
| 11 | The command-line client is `mysql`, a simple SQL shell that you can use interactively or from a script | S15 | PASS | "mysql is a simple SQL shell with input line editing capabilities. It supports interactive and noninteractive use." and "You can execute SQL statements in a script file (batch file)" |
| 12 | You connect with `mysql --user=user_name --password db_name`, and it asks for the password | S15 | PASS | "mysql --user= user_name --password db_name ... you'll need to enter your password in response to the prompt that mysql displays: Enter password:" |
| 13 | Links to Databases and DBMS and Indexes; "This page is about writing the queries" | none | N/A | Describes the page and its links. |
| 14 | How it works: `WHERE` gives the conditions a row must satisfy to be selected | S1 | PASS | "The WHERE clause, if given, indicates the condition or conditions that rows must satisfy to be selected." |
| 15 | `LIMIT` constrains the number of rows that come back | S1 | PASS | "The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement." |
| 16 | `ON` says how to join two tables, and `WHERE` says which rows to keep | S2 | PASS | "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 17 | In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL` | S2 | PASS | "If there is no matching row for the right table in the ON or USING part in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 18 | That is how you find rows with no counterpart in another table | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 19 | `NULL` means a missing, unknown value | S3 | PASS | "NULL means “ a missing unknown value ”" |
| 20 | `NULL` is not an empty string | S10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 21 | Test for it with `IS NULL` and `IS NOT NULL` | S3 | PASS | "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 22 | You cannot test for it with `=`, `<`, or `<>` | S3 | PASS | "You cannot use arithmetic comparison operators such as = , < , or <> to test for NULL." |
| 23 | A comparison with `NULL` gives `NULL` | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 24 | `COUNT(expr)` counts the non-`NULL` values of the expression | S4 | PASS | "Returns a count of the number of non- NULL values of expr" |
| 25 | `COUNT(*)` counts the rows, whether they contain `NULL` values or not | S4 | PASS | "COUNT(*) ... returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 26 | `GROUP BY` groups the rows for each value, so a count per customer is one query | S12 | PASS | "The preceding query uses GROUP BY to group all records for each owner." and "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." (the source example is a count per owner.) |
| 27 | In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters; patterns are case-insensitive by default | S14 | PASS | "use _ to match any single character and % to match an arbitrary number of characters (including zero characters). In MySQL, SQL patterns are case-insensitive by default." |
| 28 | A primary key is the column or columns of your most vital queries, and it cannot include `NULL` | S13 | PASS | "The primary key for a table represents the column or set of columns that you use in your most vital queries." and "it cannot include any NULL values." |
| 29 | A foreign key links a child table to the values of a parent table | S9 | PASS | "a parent table that holds the initial column values, and a child table with column values that reference the parent column values." |
| 30 | By default, MySQL rejects a delete of a parent row that a child row still references | S9 | PASS | "the default action is always NO ACTION." and "NO ACTION ... the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." (the source says this for InnoDB.) |
| 31 | `START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them | S8 | PASS | "START TRANSACTION or BEGIN start a new transaction. COMMIT commits the current transaction, making its changes permanent. ROLLBACK rolls back the current transaction, canceling its changes." |
| 32 | Autocommit is on by default, so outside a transaction each statement is committed at once and you cannot roll it back | S8 | PASS | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 33 | Try it: you need a MySQL 8.4 server where you may create a database (local install or throwaway container) | none | N/A | Setup advice. |
| 34 | In interactive use, `mysql` shows the result as a table | S15 | PASS | "When used interactively, query results are presented in an ASCII-table format." The counts "Asha 2, Rafi 1, Mina 0" are the output of the page's own code. |
| 35 | Step 1: Mina now has 1, because `COUNT(*)` counts the `NULL` row that the `LEFT JOIN` made for her | S4 | PASS | "COUNT(*) ... returns a count of the number of rows retrieved, whether or not they contain NULL values." The `LEFT JOIN` NULL row is in S2 (#17) and the page's own output. |
| 36 | Step 2: keep the `LEFT JOIN` and keep rows where the right side is `NULL` to find customers with no orders ("Only Mina comes back" is the page's own output) | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table: SELECT left_tbl.* FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id WHERE right_tbl.id IS NULL;" |
| 37 | Step 3: `IS NULL`, `= ''`, `= NULL` give Rafi, Mina, no rows | S3 | PASS | The `= NULL` part is in S3: "You cannot use arithmetic comparison operators such as = ... to test for NULL." and "SELECT 1 = NULL ... NULL". The Rafi and Mina results are the page's own output. |
| 38 | Step 4: after `START TRANSACTION;` and a delete, `ROLLBACK;` restores the count (2, then 3) | S8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." The counts are the page's own output. |
| 39 | Step 5: `DELETE FROM customers WHERE id = 1;` is refused because orders still reference Asha | S9 | PASS | "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." The `ERROR 1451` text is not in any source. It is the page's own output. |
| 40 | How a tester uses it: after a test places an order, a `SELECT` with a `WHERE` on the order's id shows the row that was really stored | S1 | FAIL | S1 says only: "SELECT is used to retrieve rows selected from one or more tables" and "WHERE ... condition or conditions that rows must satisfy to be selected." It says nothing about showing what an app really stored. Fix: "A `SELECT` with a `WHERE` on the order's id retrieves the rows that match that id." |
| 41 | Compare the stored total and status with what the screen said | none | N/A | Advice. |
| 42 | A `LEFT JOIN` with `WHERE ... IS NULL` finds rows with no counterpart, such as orders whose customer is missing | S2 | PASS | "find rows in a table that have no counterpart in another table ... WHERE right_tbl.id IS NULL" |
| 43 | `COUNT()` with `GROUP BY` counts the rows of each group in one query | S12 | PASS | "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." and "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" |
| 44 | `INSERT` builds the rows a test needs | S5 | PASS | "INSERT inserts new rows into an existing table" |
| 45 | Inside a transaction, `ROLLBACK` cancels the changes when the check is done | S8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." |
| 46 | A foreign key constraint rejects the parent delete | S9 | PASS | "the delete or update operation for the parent table is immediately rejected" |
| 47 | The app must show a clear message, not a crash; try to insert a row that breaks a key | none | N/A | Test advice about the app under test. It makes no claim about a tool. |
| 48 | When an app builds a query by joining strings, an attacker can put SQL into the input, and the database runs it | S11 | PASS | "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 49 | The fix is to define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder | S11 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API" and "parameterized queries, using ? as placeholders for the values" |
| 50 | Link to Security Testing | none | N/A | Describes the page's links. |
| 51 | Common mistakes: a comparison with `NULL` gives `NULL`, so `WHERE phone = NULL` returns no rows | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL, you cannot obtain any meaningful results from such comparisons." (The "no rows" result is the page's own output.) |
| 52 | `NULL` is not the same thing as an empty string `''` | S10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 53 | `COUNT(*)` counts every row, including the `NULL` row of an unmatched join | S4 | PASS | "COUNT(*) ... a count of the number of rows retrieved, whether or not they contain NULL values." |
| 54 | Without `WHERE`, `UPDATE` changes all the rows | S6 | PASS | "With no WHERE clause, all rows are updated." |
| 55 | Without `WHERE`, `DELETE` removes all the rows | S7 | PASS | "With no WHERE clause, all rows are deleted." |
| 56 | With autocommit on, a statement outside a transaction is committed at once, and `ROLLBACK` cannot undo it | S8 | PASS | "when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 57 | `%` and `_` work only with `LIKE` or `NOT LIKE`, not with `=` or `<>` | S14 | PASS | "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| 58 | What a tester can check: callout of the tutorial's own advice | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | SQL: the language for reading and changing data in a relational database | Key words | PASS | Technical panel: "**SQL** is the most common standardized language used to access databases". It also gives "`SELECT` retrieves rows ... `INSERT` adds new rows ... `UPDATE` modifies rows ... `DELETE` removes them". |
| K2 | `SELECT` reads rows; `WHERE` filters them and `LIMIT` caps how many come back | Key words | PASS | "`WHERE` gives the conditions that a row must satisfy to be selected. `LIMIT` constrains the number of rows that come back" |
| K3 | `LEFT JOIN`: a left row with no match gets a right-side row of `NULL`s | Key words | PASS | "In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL`" |
| K4 | `NULL`: a missing, unknown value; not an empty string; test with `IS NULL` | Key words | PASS | "`NULL` means a missing, unknown value, and it is not an empty string. Test for it with `IS NULL` and `IS NOT NULL`." |
| K5 | `COUNT(expr)` / `COUNT(*)`: counts non-`NULL` values / counts every row | Key words | PASS | "`COUNT(expr)` counts the non-`NULL` values of the expression. `COUNT(*)` counts the rows, whether they contain `NULL` values or not" |
| K6 | `GROUP BY`: groups the rows for each value, for one count per group | Key words | PASS | "`GROUP BY` groups the rows for each value, so a count per customer is one query" |
| K7 | Primary key: the column or columns of the most vital queries; it cannot include `NULL` | Key words | PASS | "A primary key is the column or columns of your most vital queries, and it cannot include `NULL`" |
| K8 | Foreign key: links a child table to the values of a parent table | Key words | PASS | "A foreign key links a child table to the values of a parent table" |
| K9 | Transaction: statements that `COMMIT` makes permanent or `ROLLBACK` cancels | Key words | PASS | "`START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them" |
| K10 | Autocommit: the default mode; each statement outside a transaction is committed at once | Key words | PASS | "Autocommit is on by default, so outside a transaction each statement is committed at once" |
| K11 | `LIKE`: `%` is any text, `_` is one character | Key words | PASS | "In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters." |
| K12 | Parameterized query: SQL defined apart from its values, with `?` placeholders that the values are bound to; the fix for SQL injection | Key words | PASS | "The fix is to define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder for each value" |

Open FAILs: 1

FAILs in round 3: 1.

## Round 4 (2026-11-16)

### Fact check: sdet / sql-mysql (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL; the page covers SELECT, joins, NULL, counts, transactions, keys. | none | N/A | Describes the page itself. |
| 2 | Intro: a screen can say "Order placed" while the database holds a different total, missing row or duplicate. SQL lets a tester look behind the app. | none | N/A | Framing of the page. It gives no tool fact. |
| 3 | MySQL is a database management system, and its databases are relational. | S16 | PASS | "you need a database management system such as MySQL Server" … "MySQL databases are relational." |
| 4 | A relational database stores data in separate tables. | S16 | PASS | "A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| 5 | SQL is the most common standardized language used to access databases. | S16 | PASS | "SQL is the most common standardized language used to access databases." |
| 6 | `SELECT` retrieves rows from one or more tables. | S1 | PASS | "SELECT is used to retrieve rows" … "table or tables from which to retrieve rows" |
| 7 | `INSERT` adds new rows to a table. | S5 | PASS | "INSERT inserts new rows into an" |
| 8 | `UPDATE` modifies rows. | S6 | PASS | "UPDATE statement updates columns of existing rows in the named table with new values." |
| 9 | `DELETE` removes rows. | S7 | PASS | "The DELETE statement deletes rows from tbl_name" |
| 10 | `mysql` is a simple SQL shell, usable interactively or from a script. | S15 | PASS | "mysql is a simple SQL shell" … "It supports interactive and noninteractive use." … "You can execute SQL statements in a script file (batch file)" |
| 11 | Connect with `mysql --user=user_name --password db_name`, and it asks for the password. | S15 | PASS | "mysql --user= user_name --password db_name" … "you'll need to enter your password in response to the prompt that mysql displays: Enter password:" |
| 12 | Links to Databases and DBMS and Indexes. | none | N/A | Describes the page and its links. |
| 13 | `WHERE` gives the conditions a row must satisfy to be selected. | S1 | PASS | "indicates the condition or conditions that rows must satisfy to be selected." |
| 14 | `LIMIT` constrains the number of rows that come back. | S1 | PASS | "The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement." |
| 15 | `ON` says how to join two tables, and `WHERE` says which rows to keep. | S2 | PASS | "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 16 | In a `LEFT JOIN`, a left row with no match gets a right-side row with every column `NULL`. | S2 | PASS | "If there is no matching row for the right table ... in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 17 | That is how you find rows with no counterpart in another table. | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 18 | `NULL` means a missing, unknown value. | S3 | PASS | "NULL means “ a missing unknown value ”" |
| 19 | `NULL` is not an empty string. | S10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 20 | Test for `NULL` with `IS NULL` and `IS NOT NULL`. | S3 | PASS | "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 21 | You cannot test for `NULL` with `=`, `<`, or `<>`. | S3 | PASS | "You cannot use arithmetic comparison operators such as =, <, or <> to test for NULL." |
| 22 | A comparison with `NULL` gives `NULL`. | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 23 | `COUNT(expr)` counts the non-`NULL` values of the expression. | S4 | PASS | "Returns a count of the number of non- NULL values of expr" |
| 24 | `COUNT(*)` counts the rows, whether they contain `NULL` values or not. | S4 | PASS | "returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 25 | `GROUP BY` groups the rows for each value, so a count per customer is one query. | S12 | PASS | "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" … "uses GROUP BY to group all records for each owner." |
| 26 | In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters. | none | FAIL | No cite on this sentence. The cite at the end of the next sentence covers only case sensitivity. Fix: add `<Cite n={14} />`. S14: "_ to match any single character and % to match an arbitrary number of characters". |
| 27 | Patterns are case-insensitive by default. | S14 | PASS | "In MySQL, SQL patterns are case-insensitive by default." |
| 28 | A primary key is the column or columns of your most vital queries. | S13 | PASS | "The primary key for a table represents the column or set of columns that you use in your most vital queries." |
| 29 | A primary key cannot include `NULL`. | S13 | PASS | "because it cannot include any NULL values." |
| 30 | A foreign key links a child table to the values of a parent table. | S9 | PASS | "a parent table that holds the initial column values, and a child table with column values that reference the parent column values." |
| 31 | By default, MySQL rejects a delete of a parent row that a child row still references. | S9 | PASS | "RESTRICT: Rejects the delete or update operation for the parent table. Specifying RESTRICT (or NO ACTION) is the same as omitting the ON DELETE or ON UPDATE clause." |
| 32 | `START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them. | S8 | PASS | "START TRANSACTION or BEGIN start a new transaction. COMMIT commits the current transaction, making its changes permanent. ROLLBACK rolls back the current transaction, canceling its changes." |
| 33 | Autocommit is on by default, so outside a transaction each statement is committed at once and cannot be rolled back. | S8 | PASS | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 34 | Try it setup: you need a MySQL 8.4 server on which you may create a database. | none | N/A | Instruction for the reader. The code blocks are the writer's examples. |
| 35 | In interactive use, `mysql` shows the result as a table. | S15 | PASS | "When used interactively, query results are presented in an ASCII-table format." |
| 36 | Result "Asha 2, Rafi 1, Mina 0". | none | N/A | Reports what the example code returns. |
| 37 | Try-it 1: Mina now has 1, because `COUNT(*)` counts the `NULL` row that the `LEFT JOIN` made for her. | S4 | FAIL | S4 supports only: "returns a count of the number of rows retrieved, whether or not they contain NULL values." The `LEFT JOIN` NULL row comes from S2. Fix: cite S2 for the join row, or say only that `COUNT(*)` counts rows whether or not they contain `NULL` values. |
| 38 | Try-it 2: to find customers with no orders, keep the `LEFT JOIN` and keep the rows where the right side is `NULL`. | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table: SELECT left_tbl.* FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id WHERE right_tbl.id IS NULL;" ("Only Mina comes back" is code output.) |
| 39 | Try-it 3: `phone = NULL` returns no rows. | S3 | PASS | "Because the result of any arithmetic comparison with NULL is also NULL, you cannot obtain any meaningful results from such comparisons." (The Rafi and Mina results are code output.) |
| 40 | Try-it 4: counts 2, then 3 after `ROLLBACK`. | S8 | N/A | Only reports what the example code returns. |
| 41 | Try-it 5: the delete fails with ERROR 1451 because orders still reference Asha. | S9 | PASS | "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the" (the error text is code output). |
| 42 | After a test places an order, retrieve its row with `SELECT` and a `WHERE` on the order's id. | S1 | PASS | "SELECT is used to retrieve rows" … "The WHERE clause ... indicates the condition or conditions that rows must satisfy to be selected." |
| 43 | Compare the stored total and status with what the screen said. | none | N/A | Tester advice. |
| 44 | A `LEFT JOIN` with `WHERE ... IS NULL` finds rows with no counterpart, such as orders whose customer is missing. | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 45 | `COUNT()` with `GROUP BY` counts the rows of each group in one query. | S12 | PASS | "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." |
| 46 | `INSERT` builds the rows a test needs. | S5 | PASS | "INSERT inserts new rows into an" |
| 47 | Inside a transaction, `ROLLBACK` cancels the changes when the check is done. | S8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." |
| 48 | Try to insert a row that breaks a key, or delete a parent that has children. | none | N/A | Tester advice. |
| 49 | A foreign key constraint rejects the parent delete. | S9 | PASS | "RESTRICT: Rejects the delete or update operation for the parent table." |
| 50 | The app must show a clear message, not a crash. | none | N/A | Tester advice. |
| 51 | When an app builds a query by joining strings, an attacker can put SQL into the input, and the database runs it. | S11 | PASS | "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 52 | The fix is to define the SQL structure apart from its data values and bind the values through the database API: a parameterized query, with `?` as placeholder. | S11 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API" … "parameterized queries, using ? as placeholders for the values" |
| 53 | Security Testing link. | none | N/A | Describes the page's links. |
| 54 | Common mistakes: a comparison with `NULL` gives `NULL`, so `WHERE phone = NULL` returns no rows. | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 55 | `NULL` is not the same thing as an empty string `''`. | S10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 56 | `COUNT(*)` counts every row, including the `NULL` row of an unmatched join. | S4 | FAIL | S4 says only "whether or not they contain NULL values." The unmatched-join NULL row is in S2, which is not cited here. Fix: cite S2 for the join row, or drop "of an unmatched join". |
| 57 | Without `WHERE`, `UPDATE` changes all the rows. | S6 | PASS | "With no WHERE clause, all rows are updated." |
| 58 | Without `WHERE`, `DELETE` removes all the rows. | S7 | PASS | "With no WHERE clause, all rows are deleted." |
| 59 | With autocommit on, a statement outside a transaction is committed at once, and `ROLLBACK` cannot undo it. | S8 | PASS | "when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 60 | `%` and `_` work only with `LIKE` or `NOT LIKE`, not with `=` or `<>`. | S14 | FAIL | S14 gives advice, not a rule of "only": "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." Fix: "Do not use `=` or `<>` with SQL patterns; use `LIKE` or `NOT LIKE`." |
| 61 | "What a tester can check" callout. | none | N/A | Marked as the tutorial's own advice, with no facts from sources. |
| K1 | SQL: the language for reading and changing data in a relational database. | Key words | PASS | Technical: "SQL is the most common standardized language used to access databases." Also "its databases are relational", with `SELECT` retrieving rows and `INSERT`, `UPDATE` and `DELETE` adding, modifying and removing them. |
| K2 | `SELECT` reads rows; `WHERE` filters them and `LIMIT` caps how many come back. | Key words | PASS | Technical: "`WHERE` gives the conditions that a row must satisfy to be selected" and "`LIMIT` constrains the number of rows that come back". |
| K3 | `LEFT JOIN`: a left row with no match gets a right-side row of `NULL`s. | Key words | PASS | Technical: "a left row with no match gets a right-side row with every column set to `NULL`". |
| K4 | `NULL`: a missing, unknown value; not an empty string. Test it with `IS NULL`. | Key words | PASS | Technical: "`NULL` means a missing, unknown value, and it is not an empty string. Test for it with `IS NULL` and `IS NOT NULL`." |
| K5 | `COUNT(expr)` counts non-`NULL` values; `COUNT(*)` counts every row. | Key words | PASS | Technical: "`COUNT(expr)` counts the non-`NULL` values of the expression. `COUNT(*)` counts the rows, whether they contain `NULL` values or not." |
| K6 | `GROUP BY` groups the rows for each value, for one count per group. | Key words | PASS | Technical: "`GROUP BY` groups the rows for each value, so a count per customer is one query". |
| K7 | Primary key: the column or columns of the most vital queries; it cannot include `NULL`. | Key words | PASS | Technical: "A primary key is the column or columns of your most vital queries, and it cannot include `NULL`". |
| K8 | Foreign key: links a child table to the values of a parent table. | Key words | PASS | Technical: "A foreign key links a child table to the values of a parent table". |
| K9 | Transaction: statements that `COMMIT` makes permanent or `ROLLBACK` cancels. | Key words | PASS | Technical: "`START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them". |
| K10 | Autocommit: the default mode; each statement outside a transaction is committed at once. | Key words | PASS | Technical: "Autocommit is on by default, so outside a transaction each statement is committed at once". |
| K11 | `LIKE`: `%` is any text, `_` is one character. | Key words | PASS | Technical: "`_` matches one character and `%` matches any number of characters". |
| K12 | Parameterized query: SQL defined apart from its values, with `?` placeholders the values are bound to; the fix for SQL injection. | Key words | PASS | Technical: "The fix is to define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder for each value". |

Open FAILs: 4

FAILs in round 4: 4.

## Round 5 (2026-11-16)

### Fact check: sdet / sql-mysql (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL, with the checks a tester runs behind an app | none | N/A | Describes the page. |
| 2 | Intro: a screen can say "Order placed" while the database holds a different total, a missing row, or a duplicate. SQL lets a tester look behind the app. The page teaches the queries, the `NULL` and counting traps, and safe changes to test data. | none | N/A | Motivation and description of the page. It states no fact about a tool. |
| 3 | What it is: MySQL is a database management system, and its databases are relational | S16 | PASS | "you need a database management system such as MySQL Server" … "MySQL databases are relational." |
| 4 | A relational database stores data in separate tables | S16 | PASS | "A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| 5 | SQL is the most common standardized language used to access databases | S16 | PASS | "SQL is the most common standardized language used to access databases." |
| 6 | `SELECT` retrieves rows from one or more tables | S1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" |
| 7 | `INSERT` adds new rows to a table | S5 | PASS | "INSERT inserts new rows into an existing table." |
| 8 | `UPDATE` modifies rows | S6 | PASS | "modifies rows in a table." |
| 9 | `DELETE` removes rows | S7 | PASS | "removes rows from a table." |
| 10 | The command-line client is `mysql`, a simple SQL shell you can use interactively or from a script | S15 | PASS | "mysql is a simple SQL shell with input line editing capabilities. It supports interactive and noninteractive use." … "You can execute SQL statements in a script file (batch file)" |
| 11 | You connect with `mysql --user=user_name --password db_name`, and it asks for the password | S15 | PASS | "mysql --user=user_name --password db_name" … "you'll need to enter your password in response to the prompt that mysql displays" |
| 12 | The links to Databases and DBMS and Indexes, and "This page is about writing the queries" | none | N/A | Describes the page and its links. |
| 13 | How it works: `WHERE` gives the conditions a row must satisfy to be selected | S1 | PASS | "indicates the condition or conditions that rows must satisfy to be selected." |
| 14 | `LIMIT` constrains the number of rows that come back | S1 | PASS | "The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement." |
| 15 | `ON` says how to join two tables, and `WHERE` says which rows to keep | S2 | PASS | "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 16 | In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL` | S2 | PASS | "If there is no matching row for the right table ... in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 17 | That is how you find rows with no counterpart in another table | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 18 | `NULL` means a missing, unknown value | S3 | PASS | "NULL means “a missing unknown value”" |
| 19 | `NULL` is not an empty string | S10 | PASS | "newcomers to SQL, who often think that NULL is the same thing as an empty string '' . This is not the case." |
| 20 | Test for `NULL` with `IS NULL` and `IS NOT NULL` | S3 | PASS | "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 21 | You cannot test for `NULL` with `=`, `<`, or `<>` | S3 | PASS | "You cannot use arithmetic comparison operators such as =, <, or <> to test for NULL." |
| 22 | A comparison with `NULL` gives `NULL` | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 23 | `COUNT(expr)` counts the non-`NULL` values of the expression | S4 | PASS | "Returns a count of the number of non-NULL values of expr in the rows retrieved by a SELECT statement." |
| 24 | `COUNT(*)` counts the rows, whether they contain `NULL` values or not | S4 | PASS | "it returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 25 | `GROUP BY` groups the rows for each value, so a count per customer is one query | S12 | PASS | "uses GROUP BY to group all records for each owner. The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." |
| 26 | In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters | S14 | PASS | "use _ to match any single character and % to match an arbitrary number of characters" |
| 27 | Patterns are case-insensitive by default | S14 | PASS | "In MySQL, SQL patterns are case-insensitive by default." |
| 28 | A primary key is the column or columns of your most vital queries, and it cannot include `NULL` | S13 | PASS | "represents the column or set of columns that you use in your most vital queries" … "it cannot include any NULL values." |
| 29 | A foreign key links a child table to the values of a parent table | S9 | PASS | "a child table with column values that reference the parent column values." |
| 30 | By default, MySQL rejects a delete of a parent row that a child row still references | S9 | PASS | "the default action is always NO ACTION" … "For InnoDB, this is equivalent to RESTRICT; the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." |
| 31 | `START TRANSACTION` starts a transaction; `COMMIT` makes its changes permanent; `ROLLBACK` cancels them | S8 | PASS | "START TRANSACTION or BEGIN start a new transaction." "COMMIT commits the current transaction, making its changes permanent." "ROLLBACK rolls back the current transaction, canceling its changes." |
| 32 | Autocommit is on by default, so outside a transaction each statement is committed at once and you cannot roll it back | S8 | PASS | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 33 | Try it: you need a MySQL 8.4 server where you may create a database; connect with the `mysql` client | none | N/A | Setup advice. |
| 34 | In interactive use, `mysql` shows the result as a table | S15 | PASS | "When used interactively, query results are presented in an ASCII-table format." |
| 35 | The values "Asha 2, Rafi 1, Mina 0" | none | N/A | Reports what the page's own code prints. |
| 36 | Item 1: the `LEFT JOIN` made a row for Mina with `NULL` on the right side | S2 | PASS | "a row with all columns set to NULL is used for the right table." |
| 37 | Item 1: `COUNT(*)` counts rows whether or not they contain `NULL` values | S4 | PASS | "whether or not they contain NULL values." |
| 38 | Item 2: keep the `LEFT JOIN` and keep the rows where the right side is `NULL` to find customers with no orders | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table: ... WHERE right_tbl.id IS NULL;" |
| 39 | Item 2: "Only Mina comes back" | none | N/A | Reports what the page's own code returns. |
| 40 | Item 3: you get Rafi, then Mina, then no rows | S3 | N/A | Reports what the page's own code returns. S3 also supports the `= NULL` part ("cannot use ... = ... to test for NULL"). |
| 41 | Item 4: the counts 2 and 3 around `ROLLBACK` | S8 | N/A | Reports what the page's own code returns. S8: "ROLLBACK rolls back the current transaction, canceling its changes." |
| 42 | Item 5: MySQL answers with `ERROR 1451 ...` because orders still reference Asha | S9 | N/A | The error text is output of the page's own code. The reason is supported: "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." |
| 43 | How a tester uses it: retrieve the order's row with a `SELECT` and a `WHERE` on the order's id | S1 | PASS | "indicates the condition or conditions that rows must satisfy to be selected." "SELECT is used to retrieve rows" |
| 44 | Compare the stored total and status with what the screen said | none | N/A | Tester advice. |
| 45 | A `LEFT JOIN` with `WHERE ... IS NULL` finds rows with no counterpart, such as orders whose customer is missing | S2 | PASS | "find rows in a table that have no counterpart in another table: ... WHERE right_tbl.id IS NULL;" |
| 46 | `COUNT()` with `GROUP BY` counts the rows of each group in one query | S12 | PASS | "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." |
| 47 | `INSERT` builds the rows a test needs | S5 | PASS | "INSERT inserts new rows into an existing table." |
| 48 | Inside a transaction, `ROLLBACK` cancels the changes when the check is done | S8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." |
| 49 | Try to insert a row that breaks a key, or delete a parent that has children | none | N/A | Tester advice. |
| 50 | A foreign key constraint rejects the parent delete | S9 | PASS | "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value" |
| 51 | The app must show a clear message, not a crash | none | N/A | Tester advice. |
| 52 | When an app builds a query by joining strings, an attacker can put SQL into the input, and the database runs it | S11 | PASS | "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 53 | The fix is to define the SQL structure apart from its data values and bind the values through the database API: a parameterized query, with `?` as the placeholder for each value | S11 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API" … "using ? as placeholders for the values" |
| 54 | Security Testing link | none | N/A | Link sentence. |
| 55 | Common mistakes: a comparison with `NULL` gives `NULL`, so `WHERE phone = NULL` returns no rows | S3 | FAIL | S3 supports "a comparison with NULL gives NULL" ("any arithmetic comparison with NULL is also NULL"). It does not say that `WHERE phone = NULL` returns no rows. S10 says that: "The following statement returns no rows, because expr = NULL is never true for any expression". Fix: cite S10 for the "returns no rows" part. |
| 56 | Use `IS NULL` | none | N/A | Advice. |
| 57 | `NULL` is not the same thing as an empty string `''` | S10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 58 | A test for "no phone" must say which of the two it means | none | N/A | Tester advice. |
| 59 | `COUNT(*)` counts rows whether or not they contain `NULL` values | S4 | PASS | "whether or not they contain NULL values." |
| 60 | So it also counts the `NULL` row of an unmatched `LEFT JOIN` | S2 | PASS | "a row with all columns set to NULL is used for the right table." Together with the S4 quote in the row above. |
| 61 | Count a column of the right table instead | none | N/A | Advice. |
| 62 | Without `WHERE`, `UPDATE` changes all the rows | S6 | PASS | "With no WHERE clause, all rows are updated." |
| 63 | Without `WHERE`, `DELETE` removes all the rows | S7 | PASS | "With no WHERE clause, all rows are deleted." |
| 64 | Run the same `WHERE` in a `SELECT` first | none | N/A | Advice. |
| 65 | With autocommit on, a statement outside a transaction is committed at once, and `ROLLBACK` cannot undo it | S8 | PASS | "when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 66 | Do not use `=` or `<>` with SQL patterns; use `LIKE` or `NOT LIKE` | S14 | PASS | "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| 67 | What a tester can check (callout) | none | N/A | Callout says it is the tutorial's own advice. It has no cites. |
| K1 | SQL: the language for reading and changing data in a relational database | none | FAIL | No Technical panel says this. The panel says: "**SQL** is the most common standardized language used to access databases." It does not say "relational" for SQL or "reading and changing". Fix: "The most common standardized language used to access databases." |
| K2 | `SELECT`: reads rows; `WHERE` filters them and `LIMIT` caps how many come back | none | PASS | "`SELECT` retrieves rows from one or more tables", "`WHERE` gives the conditions that a row must satisfy to be selected", "`LIMIT` constrains the number of rows that come back" |
| K3 | `LEFT JOIN`: a left row with no match gets a right-side row of `NULL`s | none | PASS | "In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL`" |
| K4 | `NULL`: a missing, unknown value; not an empty string; test with `IS NULL` | none | PASS | "`NULL` means a missing, unknown value, and it is not an empty string. Test for it with `IS NULL` and `IS NOT NULL`." |
| K5 | `COUNT(expr)` / `COUNT(*)`: counts non-`NULL` values / counts every row | none | PASS | "`COUNT(expr)` counts the non-`NULL` values of the expression. `COUNT(*)` counts the rows, whether they contain `NULL` values or not." |
| K6 | `GROUP BY`: groups the rows for each value, for one count per group | none | PASS | "`GROUP BY` groups the rows for each value, so a count per customer is one query" |
| K7 | Primary key: the column or columns of the most vital queries; it cannot include `NULL` | none | PASS | "A primary key is the column or columns of your most vital queries, and it cannot include `NULL`" |
| K8 | Foreign key: links a child table to the values of a parent table | none | PASS | "A foreign key links a child table to the values of a parent table" |
| K9 | Transaction: statements that `COMMIT` makes permanent or `ROLLBACK` cancels | none | PASS | "`START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them" |
| K10 | Autocommit: the default mode; each statement outside a transaction is committed at once | none | PASS | "Autocommit is on by default, so outside a transaction each statement is committed at once" |
| K11 | `LIKE`: `%` is any text, `_` is one character | none | PASS | "In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters" |
| K12 | Parameterized query: SQL defined apart from its values, with `?` placeholders; the fix for SQL injection | none | PASS | "define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder for each value" |

Open FAILs: 2

FAILs in round 5: 2.

## Round 6 (2026-11-16)

### Fact check: sdet / sql-mysql (round 6)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL, with the checks a tester runs behind an app | none | N/A | Describes the page. |
| 2 | Intro: a screen can say "Order placed" while the database holds a different total, missing row or duplicate; SQL lets a tester look behind the app; the page teaches queries, NULL and counting traps, and safe changes to test data | none | N/A | Motivation and a description of the page. It states no fact about a tool. |
| 3 | What it is: MySQL is a database management system, and its databases are relational | S16 | PASS | "you need a database management system such as MySQL Server." "MySQL databases are relational." |
| 4 | A relational database stores data in separate tables | S16 | PASS | "A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| 5 | SQL is the most common standardized language used to access databases | S16 | PASS | "SQL is the most common standardized language used to access databases." |
| 6 | `SELECT` retrieves rows from one or more tables | S1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" |
| 7 | `INSERT` adds new rows to a table | S5 | PASS | "INSERT inserts new rows into an" (existing table) |
| 8 | `UPDATE` modifies rows | S6 | PASS | "modifies rows in a table." |
| 9 | `DELETE` removes rows | S7 | PASS | "removes rows from a table." |
| 10 | `mysql` is a simple SQL shell, usable interactively or from a script | S15 | PASS | "mysql is a simple SQL shell with input line editing capabilities. It supports interactive and noninteractive use." Also "You can execute SQL statements in a script file (batch file)". |
| 11 | Connect with `mysql --user=user_name --password db_name`, and it asks for the password | S15 | PASS | "mysql --user= user_name --password db_name" "you'll need to enter your password in response to the prompt that mysql displays" |
| 12 | The links to Databases and DBMS and to Indexes, and "This page is about writing the queries" | none | N/A | Describes the page and gives links. |
| 13 | How it works: `WHERE` gives the conditions a row must satisfy to be selected | S1 | PASS | "indicates the condition or conditions that rows must satisfy to be selected." |
| 14 | `LIMIT` constrains the number of rows that come back | S1 | PASS | "The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement." |
| 15 | `ON` says how to join two tables, and `WHERE` says which rows to keep | S2 | PASS | "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 16 | In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL` | S2 | PASS | "If there is no matching row for the right table ... in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 17 | That is how you find rows with no counterpart in another table | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 18 | `NULL` means a missing, unknown value | S3 | PASS | "Conceptually, NULL means "a missing unknown value"" |
| 19 | `NULL` is not an empty string | S10 | PASS | "newcomers to SQL, who often think that NULL is the same thing as an empty string '' . This is not the case." |
| 20 | Test for `NULL` with `IS NULL` and `IS NOT NULL` | S3 | PASS | "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 21 | You cannot test for it with `=`, `<`, or `<>` | S3 | PASS | "You cannot use arithmetic comparison operators such as = , < , or <> to test for NULL." |
| 22 | A comparison with `NULL` gives `NULL` | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 23 | `COUNT(expr)` counts the non-`NULL` values of the expression | S4 | PASS | "Returns a count of the number of non- NULL values of expr" |
| 24 | `COUNT(*)` counts the rows, whether they contain `NULL` values or not | S4 | PASS | "COUNT(*) is somewhat different in that it returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 25 | `GROUP BY` groups the rows for each value, so a count per customer is one query | S12 | PASS | "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" "uses GROUP BY to group all records for each owner." (the count per owner is the same pattern as per customer) |
| 26 | In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters | S14 | PASS | "use _ to match any single character and % to match an arbitrary number of characters" |
| 27 | Patterns are case-insensitive by default | S14 | PASS | "In MySQL, SQL patterns are case-insensitive by default." |
| 28 | A primary key is the column or columns of your most vital queries, and it cannot include `NULL` | S13 | PASS | "The primary key for a table represents the column or set of columns that you use in your most vital queries." "it cannot include any NULL values." |
| 29 | A foreign key links a child table to the values of a parent table | S9 | PASS | "a child table with column values that reference the parent column values. A foreign key constraint is defined on the child table." |
| 30 | By default, MySQL rejects a delete of a parent row that a child row still references | S9 | PASS | "the default action is always NO ACTION." "For InnoDB, this is equivalent to RESTRICT ; the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." |
| 31 | `START TRANSACTION` starts a transaction; `COMMIT` makes changes permanent; `ROLLBACK` cancels them | S8 | PASS | "START TRANSACTION or BEGIN start a new transaction." "COMMIT commits the current transaction, making its changes permanent." "ROLLBACK rolls back the current transaction, canceling its changes." |
| 32 | Autocommit is on by default, so outside a transaction each statement is committed at once and cannot be rolled back | S8 | PASS | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT . You cannot use ROLLBACK to undo the effect" |
| 33 | Try it: you need a MySQL 8.4 server on which you may create a database | none | N/A | Setup instruction, not a fact about a tool. |
| 34 | In interactive use, `mysql` shows the result as a table | S15 | PASS | "When used interactively, query results are presented in an ASCII-table format." |
| 35 | The results "Asha 2, Rafi 1, Mina 0" | none | N/A | Reports what the example code prints. |
| 36 | Step 1: Mina has 1 because the `LEFT JOIN` made a row for her with `NULL` on the right side | S2 | PASS | "a row with all columns set to NULL is used for the right table." |
| 37 | Step 1: `COUNT(*)` counts rows whether or not they contain `NULL` values | S4 | PASS | "returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 38 | Step 2: keep the `LEFT JOIN` and keep the rows where the right side is `NULL` to find customers with no orders | S2 | PASS | "WHERE right_tbl.id IS NULL;" "find rows in a table that have no counterpart in another table" |
| 39 | Step 2: only Mina comes back | none | N/A | Reports what the example code returns. |
| 40 | Step 3: the three `phone` queries return Rafi, then Mina, then no rows | S3 | N/A | Reports what the example code returns. |
| 41 | Step 4: the counts 2 and 3 around `ROLLBACK` | S8 | N/A | Reports what the example code returns. |
| 42 | Step 5: MySQL answers `ERROR 1451 (23000)...`, because orders still reference Asha | S9 | N/A | Reports what the example code returns. |
| 43 | How a tester uses it: retrieve a row with a `SELECT` and a `WHERE` on the order's id | S1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" "The WHERE clause, if given, indicates the condition or conditions that rows must satisfy to be selected." |
| 44 | Compare the stored total and status with what the screen said | none | N/A | Advice. |
| 45 | A `LEFT JOIN` with `WHERE ... IS NULL` finds rows with no counterpart, such as orders whose customer is missing | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" "WHERE right_tbl.id IS NULL;" |
| 46 | `COUNT()` with `GROUP BY` counts the rows of each group in one query | S12 | PASS | "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" |
| 47 | `INSERT` builds the rows a test needs | S5 | PASS | "INSERT inserts new rows into an" (existing table) |
| 48 | Inside a transaction, `ROLLBACK` cancels the changes when the check is done | S8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." |
| 49 | A foreign key constraint rejects the parent delete | S9 | PASS | "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." |
| 50 | The app must show a clear message, not a crash | none | N/A | Tester advice, not a fact about a tool. |
| 51 | When an app builds a query by joining strings, an attacker can put SQL into the input, and the database runs it | S11 | PASS | "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 52 | The fix: define the SQL structure apart from its data values, then bind the values through the database API; a parameterized query, with `?` as the placeholder for each value | S11 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API" "parameterized queries, using ? as placeholders for the values" |
| 53 | The Security Testing link | none | N/A | A link. |
| 54 | Common mistakes: any comparison with `NULL` gives `NULL` | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 55 | `expr = NULL` is never true, so `WHERE phone = NULL` returns no rows | S10 | PASS | "The following statement returns no rows, because expr = NULL is never true for any expression: ... WHERE phone = NULL;" |
| 56 | `NULL` is not the same thing as an empty string `''` | S10 | PASS | "NULL is the same thing as an empty string '' . This is not the case." |
| 57 | A test for "no phone" must say which of the two it means | none | N/A | Advice. |
| 58 | `COUNT(*)` counts rows whether or not they contain `NULL` values, so it also counts the `NULL` row of an unmatched `LEFT JOIN` | S4, S2 | PASS | S4: "returns a count of the number of rows retrieved, whether or not they contain NULL values." S2: "a row with all columns set to NULL is used for the right table." |
| 59 | Without `WHERE`, `UPDATE` changes all the rows | S6 | PASS | "With no WHERE clause, all rows are updated." |
| 60 | Without `WHERE`, `DELETE` removes all the rows | S7 | PASS | "With no WHERE clause, all rows are deleted." |
| 61 | With autocommit on, a statement outside a transaction is committed at once, and `ROLLBACK` cannot undo it | S8 | PASS | "when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT . You cannot use ROLLBACK to undo the effect" |
| 62 | Do not use `=` or `<>` with SQL patterns; use `LIKE` or `NOT LIKE` | S14 | PASS | "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| 63 | What a tester can check: the callout list | none | N/A | The callout says it is the tutorial's own advice. |
| K1 | SQL: the most common standardized language used to access databases | Technical (What it is) | PASS | "SQL is the most common standardized language used to access databases" |
| K2 | `SELECT` reads rows; `WHERE` filters them and `LIMIT` caps how many come back | Technical (What it is, How it works) | PASS | "`SELECT` retrieves rows from one or more tables" "`WHERE` gives the conditions that a row must satisfy to be selected. `LIMIT` constrains the number of rows that come back" |
| K3 | `LEFT JOIN`: a left row with no match gets a right-side row of `NULL`s | Technical (How it works) | PASS | "In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL`" |
| K4 | `NULL`: a missing, unknown value; not an empty string; test with `IS NULL` | Technical (How it works) | PASS | "`NULL` means a missing, unknown value, and it is not an empty string. Test for it with `IS NULL` and `IS NOT NULL`" |
| K5 | `COUNT(expr)` counts non-`NULL` values; `COUNT(*)` counts every row | Technical (How it works) | PASS | "`COUNT(expr)` counts the non-`NULL` values of the expression. `COUNT(*)` counts the rows, whether they contain `NULL` values or not" |
| K6 | `GROUP BY` groups the rows for each value, for one count per group | Technical (How it works) | PASS | "`GROUP BY` groups the rows for each value, so a count per customer is one query" |
| K7 | Primary key: the column or columns of the most vital queries; cannot include `NULL` | Technical (How it works) | PASS | "A primary key is the column or columns of your most vital queries, and it cannot include `NULL`" |
| K8 | Foreign key: links a child table to the values of a parent table | Technical (How it works) | PASS | "A foreign key links a child table to the values of a parent table" |
| K9 | Transaction: statements that `COMMIT` makes permanent or `ROLLBACK` cancels | Technical (How it works) | PASS | "`START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them" |
| K10 | Autocommit: the default mode; each statement outside a transaction is committed at once | Technical (How it works) | PASS | "Autocommit is on by default, so outside a transaction each statement is committed at once" |
| K11 | `LIKE`: `%` is any text, `_` is one character | Technical (How it works) | PASS | "In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters" |
| K12 | Parameterized query: SQL defined apart from its values, with `?` placeholders the values are bound to; the fix for SQL injection | Technical (How a tester uses it) | PASS | "The fix is to define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder for each value" |

Open FAILs: 0

FAILs in round 6: 0.

## Round 7 (2026-11-16)

### Fact check: sdet / sql-mysql (round 7)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL (SELECT, joins, NULL, counts, transactions, keys) | none | N/A | Describes the page. |
| 2 | Intro: a screen can say "Order placed" while the database holds something different; SQL lets a tester look behind the app; the page teaches these queries | none | N/A | Framing and advice, not a fact about a tool. |
| 3 | What it is: MySQL is a DBMS and its databases are relational | S16 | PASS | S16: "you need a database management system such as MySQL Server" and "MySQL databases are relational." |
| 4 | A relational database stores data in separate tables | S16 | PASS | S16: "A relational database stores data in separate tables rather than putting all the data in one big storeroom." |
| 5 | SQL is the most common standardized language used to access databases | S16 | PASS | S16: "SQL is the most common standardized language used to access databases." |
| 6 | `SELECT` retrieves rows from one or more tables | S1 | PASS | S1: "SELECT is used to retrieve rows selected from one or more tables" |
| 7 | `INSERT` adds new rows to a table | S5 | PASS | S5: "INSERT inserts new rows into an existing table." |
| 8 | `UPDATE` modifies rows | S6 | PASS | S6: "modifies rows in a table." |
| 9 | `DELETE` removes rows | S7 | PASS | S7: "removes rows from a table." |
| 10 | `mysql` is a simple SQL shell, usable interactively or from a script | S15 | PASS | S15: "mysql is a simple SQL shell ... It supports interactive and noninteractive use." Also: "You can execute SQL statements in a script file (batch file)". |
| 11 | Connect with `mysql --user=user_name --password db_name`; it asks for the password | S15 | PASS | S15: "mysql --user= user_name --password db_name ... you'll need to enter your password in response to" |
| 12 | Link sentence to the Databases and Indexes pages | none | N/A | Describes the page itself. |
| 13 | How it works: `WHERE` gives the conditions a row must satisfy to be selected | S1 | PASS | S1: "The WHERE clause, if given, indicates the condition or conditions that rows must satisfy to be selected." |
| 14 | `LIMIT` constrains the number of rows returned | S1 | PASS | S1: "The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement." |
| 15 | `ON` says how to join tables; `WHERE` says which rows to keep | S2 | PASS | S2: "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 16 | In a `LEFT JOIN`, a left row with no match gets a right-side row with every column `NULL` | S2 | PASS | S2: "If there is no matching row for the right table ... in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 17 | That is how you find rows with no counterpart in another table | S2 | PASS | S2: "You can use this fact to find rows in a table that have no counterpart in another table" |
| 18 | `NULL` means a missing, unknown value | S3 | PASS | S3: "NULL means “a missing unknown value”" |
| 19 | `NULL` is not an empty string | S10 | PASS | S10: "who often think that NULL is the same thing as an empty string ''. This is not the case." |
| 20 | Test for it with `IS NULL` and `IS NOT NULL` | S3 | PASS | S3: "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 21 | You cannot test for it with `=`, `<`, or `<>` | S3 | PASS | S3: "You cannot use arithmetic comparison operators such as =, <, or <> to test for NULL." |
| 22 | A comparison with `NULL` gives `NULL` | S3 | PASS | S3: "the result of any arithmetic comparison with NULL is also NULL" |
| 23 | `COUNT(expr)` counts the non-`NULL` values of the expression | S4 | PASS | S4: "Returns a count of the number of non-NULL values of expr" |
| 24 | `COUNT(*)` counts the rows, whether they contain `NULL` or not | S4 | PASS | S4: "COUNT(*) ... returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 25 | `GROUP BY` groups the rows for each value, so a count per customer is one query | S12 | PASS | S12: "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" and "uses GROUP BY to group all records for each owner". |
| 26 | In `LIKE`, `_` matches one character and `%` matches any number of characters | S14 | PASS | S14: "use _ to match any single character and % to match an arbitrary number of characters" |
| 27 | Patterns are case-insensitive by default | S14 | PASS | S14: "In MySQL, SQL patterns are case-insensitive by default." |
| 28 | A primary key is the column or columns of your most vital queries and cannot include `NULL` | S13 | PASS | S13: "the column or set of columns that you use in your most vital queries ... it cannot include any NULL values." |
| 29 | A foreign key links a child table to the values of a parent table | S9 | PASS | S9: "a parent table that holds the initial column values, and a child table with column values that reference the parent column values." |
| 30 | By default, MySQL rejects a delete of a parent row that a child row still references | S9 | PASS | S9: "the default action is always NO ACTION." and "NO ACTION ... For InnoDB, this is equivalent to RESTRICT; the delete or update operation for the parent table is immediately rejected if there is a related foreign key value" |
| 31 | `START TRANSACTION` starts a transaction; `COMMIT` makes changes permanent; `ROLLBACK` cancels them | S8 | PASS | S8: "START TRANSACTION or BEGIN start a new transaction. COMMIT commits the current transaction, making its changes permanent. ROLLBACK rolls back the current transaction, canceling its changes." |
| 32 | Autocommit is on by default; outside a transaction each statement is committed at once and cannot be rolled back | S8 | PASS | S8: "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 33 | Try it: you need a MySQL 8.4 server where you may create a database (local install or throwaway container) | none | N/A | Setup instruction for the example, not a fact about a tool. |
| 34 | In interactive use, `mysql` shows the result as a table (Asha 2, Rafi 1, Mina 0) | S15 | PASS | S15: "When used interactively, query results are presented in an ASCII-table format." The counts are what the page's own code returns. |
| 35 | Item 1: the `LEFT JOIN` made a row with `NULL` on the right for Mina | S2 | PASS | S2: "a row with all columns set to NULL is used for the right table." |
| 36 | Item 1: `COUNT(*)` counts rows whether or not they contain `NULL` | S4 | PASS | S4: "whether or not they contain NULL values." |
| 37 | Item 2: keep the `LEFT JOIN` and keep rows where the right side is `NULL` to find customers with no orders | S2 | PASS | S2: "WHERE right_tbl.id IS NULL;" and "find rows in a table that have no counterpart in another table". "Only Mina comes back" is the code's output. |
| 38 | Item 3: results Rafi, Mina, no rows | S3 | N/A | Reports what the page's code returns. The `= NULL` part is supported by S3: "the result of any arithmetic comparison with NULL is also NULL". |
| 39 | Item 4: counts 2, then 3 after `ROLLBACK` | S8 | N/A | Reports what the page's code returns. S8: "ROLLBACK rolls back the current transaction, canceling its changes." |
| 40 | Item 5: MySQL rejects the delete because orders still reference Asha | S9 | PASS | S9: "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value". The ERROR 1451 text is the code's output. |
| 41 | How a tester uses it: retrieve the order's row with `SELECT` and `WHERE` on its id | S1 | PASS | S1: "SELECT is used to retrieve rows" and "The WHERE clause ... indicates the condition". |
| 42 | Compare the stored total and status with what the screen said | none | N/A | Advice. |
| 43 | A `LEFT JOIN` with `WHERE ... IS NULL` finds rows with no counterpart, such as orders whose customer is missing | S2 | PASS | S2: "find rows in a table that have no counterpart in another table" with "WHERE right_tbl.id IS NULL;" |
| 44 | `COUNT()` with `GROUP BY` counts the rows of each group in one query | S12 | PASS | S12: "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." |
| 45 | `INSERT` builds the rows a test needs | S5 | PASS | S5: "INSERT inserts new rows into an existing table." |
| 46 | Inside a transaction, `ROLLBACK` cancels the changes | S8 | PASS | S8: "ROLLBACK rolls back the current transaction, canceling its changes." |
| 47 | Try to break a key or delete a parent; the app must show a clear message, not a crash | none | N/A | Tester advice. |
| 48 | A foreign key constraint rejects the parent delete | S9 | PASS | S9: "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value" |
| 49 | When an app builds a query by joining strings, an attacker can put SQL into the input and the database runs it | S11 | PASS | S11: "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 50 | Fix: define the SQL structure apart from its data values and bind the values through the database API; parameterized query with `?` placeholders | S11 | PASS | S11: "define the SQL structure separately from its data values, then bind those values through the database API" and "parameterized queries, using ? as placeholders for the values" |
| 51 | Link to Security Testing | none | N/A | Describes the page itself. |
| 52 | Common mistakes: any comparison with `NULL` gives `NULL` | S3 | PASS | S3: "the result of any arithmetic comparison with NULL is also NULL" |
| 53 | `expr = NULL` is never true, so `WHERE phone = NULL` returns no rows | S10 | PASS | S10: "The following statement returns no rows, because expr = NULL is never true for any expression" |
| 54 | `NULL` is not the same as an empty string `''` | S10 | PASS | S10: "NULL is the same thing as an empty string ''. This is not the case." |
| 55 | A test for "no phone" must say which of the two it means | none | N/A | Advice. |
| 56 | `COUNT(*)` counts rows whether or not they contain `NULL` | S4 | PASS | S4: "whether or not they contain NULL values." |
| 57 | So it also counts the `NULL` row of an unmatched `LEFT JOIN` | S2 | PASS | S2: "a row with all columns set to NULL is used for the right table." |
| 58 | Without `WHERE`, `UPDATE` changes all the rows | S6 | PASS | S6: "With no WHERE clause, all rows are updated." |
| 59 | Without `WHERE`, `DELETE` removes all the rows | S7 | PASS | S7: "With no WHERE clause, all rows are deleted." |
| 60 | With autocommit on, a statement outside a transaction is committed at once and `ROLLBACK` cannot undo it | S8 | PASS | S8: "when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 61 | Do not use `=` or `<>` with SQL patterns; use `LIKE` or `NOT LIKE` | S14 | PASS | S14: "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| 62 | What a tester can check: callout list | none | N/A | The page labels it "the tutorial's own advice, not a fact from a source". |
| K1 | SQL: the most common standardized language used to access databases | Key words | PASS | What it is, Technical: "**SQL** is the most common standardized language used to access databases". |
| K2 | `SELECT`: reads rows; `WHERE` filters and `LIMIT` caps | Key words | PASS | "`SELECT` retrieves rows"; "`WHERE` gives the conditions that a row must satisfy"; "`LIMIT` constrains the number of rows that come back". |
| K3 | `LEFT JOIN`: a left row with no match gets a right-side row of `NULL`s | Key words | PASS | "In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL`". |
| K4 | `NULL`: missing, unknown, not an empty string; test with `IS NULL` | Key words | PASS | "`NULL` means a missing, unknown value, and it is not an empty string. Test for it with `IS NULL`". |
| K5 | `COUNT(expr)` / `COUNT(*)`: non-`NULL` values / every row | Key words | PASS | "`COUNT(expr)` counts the non-`NULL` values ... `COUNT(*)` counts the rows". |
| K6 | `GROUP BY`: groups the rows for each value, one count per group | Key words | PASS | "`GROUP BY` groups the rows for each value, so a count per customer is one query". |
| K7 | Primary key: most vital queries; cannot include `NULL` | Key words | PASS | "A primary key is the column or columns of your most vital queries, and it cannot include `NULL`". |
| K8 | Foreign key links a child table to the values of a parent table | Key words | PASS | "A foreign key links a child table to the values of a parent table". |
| K9 | Transaction: statements that `COMMIT` makes permanent or `ROLLBACK` cancels | Key words | PASS | "`COMMIT` makes its changes permanent, and `ROLLBACK` cancels them". |
| K10 | Autocommit: default mode; each statement outside a transaction is committed at once | Key words | PASS | "Autocommit is on by default, so outside a transaction each statement is committed at once". |
| K11 | `LIKE`: `%` is any text, `_` is one character | Key words | PASS | "In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters". |
| K12 | Parameterized query: SQL defined apart from values, `?` placeholders, values bound; the fix for SQL injection | Key words | PASS | "define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder for each value". |

Open FAILs: 0

FAILs in round 7: 0.

## Round 8 (2026-11-16)

### Fact check: sdet / sql-mysql (round 8)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: read and change data with SQL in MySQL, with the checks a tester runs | none | N/A | It describes the page. |
| 2 | Intro: a screen can say "Order placed" while the database holds a different total. SQL lets a tester look behind the app. The page teaches queries, NULL and counting traps, and safe changes to test data. | none | N/A | It describes the page and gives no tool fact. |
| 3 | What it is: MySQL is a database management system, and its databases are relational | S16 | PASS | "MySQL is a database management system." "MySQL databases are relational." |
| 4 | A relational database stores data in separate tables | S16 | PASS | "A relational database stores data in separate tables rather..." |
| 5 | SQL is the most common standardized language used to access databases | S16 | PASS | "SQL is the most common standardized language used to access databases." |
| 6 | `SELECT` retrieves rows from one or more tables | S1 | PASS | "SELECT is used to retrieve rows selected from one or more tables" |
| 7 | `INSERT` adds new rows to a table | S5 | PASS | "INSERT inserts new rows into an existing table" |
| 8 | `UPDATE` modifies rows | S6 | PASS | "modifies rows in a table." |
| 9 | `DELETE` removes rows | S7 | PASS | "removes rows from a table." |
| 10 | `mysql` is a simple SQL shell, usable interactively or from a script | S15 | PASS | "mysql is a simple SQL shell... It supports interactive and noninteractive use." "You can execute SQL statements in a script file (batch file)" |
| 11 | You connect with `mysql --user=user_name --password db_name`, and it asks for the password | S15 | PASS | "mysql --user= user_name --password db_name ... you'll need to enter your password in response to the prompt that mysql displays" |
| 12 | Link sentence to Databases and DBMS and Indexes | none | N/A | It describes the page. |
| 13 | How it works: `WHERE` gives the conditions a row must satisfy to be selected | S1 | PASS | "indicates the condition or conditions that rows must satisfy to be selected." |
| 14 | `LIMIT` constrains the number of rows that come back | S1 | PASS | "The LIMIT clause can be used to constrain the number of rows returned by the SELECT statement." |
| 15 | `ON` says how to join two tables, and `WHERE` says which rows to keep | S2 | PASS | "the ON clause serves for conditions that specify how to join tables, and the WHERE clause restricts which rows to include in the result set." |
| 16 | In a `LEFT JOIN`, a left row with no match gets a right-side row with every column `NULL` | S2 | PASS | "If there is no matching row for the right table... in a LEFT JOIN, a row with all columns set to NULL is used for the right table." |
| 17 | That is how you find rows with no counterpart in another table | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" |
| 18 | `NULL` means a missing, unknown value | S3 | PASS | "NULL means "a missing unknown value"" |
| 19 | `NULL` is not an empty string | S10 | PASS | "who often think that NULL is the same thing as an empty string ''. This is not the case." |
| 20 | Test for it with `IS NULL` and `IS NOT NULL` | S3 | PASS | "To test for NULL, use the IS NULL and IS NOT NULL operators" |
| 21 | You cannot test for it with `=`, `<`, or `<>` | S3 | PASS | "You cannot use arithmetic comparison operators such as = , < , or <> to test for NULL." |
| 22 | A comparison with `NULL` gives `NULL` | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 23 | `COUNT(expr)` counts the non-`NULL` values of the expression | S4 | PASS | "Returns a count of the number of non- NULL values of expr in the rows retrieved by a SELECT statement." |
| 24 | `COUNT(*)` counts the rows, whether they contain `NULL` or not | S4 | PASS | "COUNT(*) ... returns a count of the number of rows retrieved, whether or not they contain NULL values." |
| 25 | `GROUP BY` groups the rows for each value, so a count per customer is one query | S12 | PASS | "The preceding query uses GROUP BY to group all records for each owner." "SELECT owner, COUNT(*) FROM pet GROUP BY owner;" |
| 26 | In a `LIKE` pattern, `_` matches one character and `%` matches any number of characters | S14 | PASS | "use _ to match any single character and % to match an arbitrary number of characters (including zero characters)" |
| 27 | Patterns are case-insensitive by default | S14 | PASS | "In MySQL, SQL patterns are case-insensitive by default." |
| 28 | A primary key is the column or columns of your most vital queries, and it cannot include `NULL` | S13 | PASS | "The primary key for a table represents the column or set of columns that you use in your most vital queries." "it cannot include any NULL values" |
| 29 | A foreign key links a child table to the values of a parent table | S9 | PASS | "a child table with column values that reference the parent column values." |
| 30 | By default, MySQL rejects a delete of a parent row that a child row still references | S9 | PASS | "the default action is always NO ACTION." "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." |
| 31 | `START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them | S8 | PASS | "START TRANSACTION or BEGIN start a new transaction." "COMMIT commits the current transaction, making its changes permanent." "ROLLBACK rolls back the current transaction, canceling its changes." |
| 32 | Autocommit is on by default, so outside a transaction each statement is committed at once and cannot be rolled back | S8 | PASS | "By default, MySQL runs with autocommit mode enabled. This means that, when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 33 | Try it: set-up text (need a MySQL 8.4 server, connect, create two tables) | none | N/A | These are instructions, and the code is the writer's example. |
| 34 | In interactive use, `mysql` shows the result as a table | S15 | PASS | "When used interactively, query results are presented in an ASCII-table format." |
| 35 | Result "Asha 2, Rafi 1, Mina 0" | S15 | N/A | It reports what the page's own example code prints. |
| 36 | Item 1: the `LEFT JOIN` made a row for Mina with `NULL` on the right side | S2 | PASS | "a row with all columns set to NULL is used for the right table" |
| 37 | Item 1: `COUNT(*)` counts rows whether or not they contain `NULL` | S4 | PASS | "whether or not they contain NULL values." |
| 38 | Item 1: "Mina now has 1" | none | N/A | It reports the example output. |
| 39 | Item 2: keep the `LEFT JOIN` and keep the rows where the right side is `NULL` to find customers with no orders | S2 | PASS | "WHERE right_tbl.id IS NULL;" after "find rows in a table that have no counterpart in another table" |
| 40 | Item 2: "Only Mina comes back" | none | N/A | It reports the example output. |
| 41 | Item 3: IS NULL gives Rafi, `= ''` gives Mina, `= NULL` gives no rows | S3 | N/A | It reports the example output. S3 also says "any arithmetic comparison with NULL is also NULL". |
| 42 | Item 4: counts 2, then ROLLBACK, then 3 | S8 | N/A | It reports the example output. S8 backs the ROLLBACK effect: "ROLLBACK rolls back the current transaction, canceling its changes." |
| 43 | Item 5: MySQL answers `ERROR 1451 (23000)...` | S9 | N/A | It reports what the page's own example prints. |
| 44 | Item 5: the delete fails because orders still reference Asha | S9 | PASS | "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value in the referenced table." |
| 45 | How a tester uses it: retrieve an order's row with `SELECT` and `WHERE` on its id | S1 | PASS | "SELECT is used to retrieve rows..." "The WHERE clause, if given, indicates the condition or conditions that rows must satisfy to be selected." |
| 46 | Compare the stored total and status with the screen | none | N/A | Advice. |
| 47 | `LEFT JOIN` with `WHERE ... IS NULL` finds rows with no counterpart, such as orders with no customer | S2 | PASS | "You can use this fact to find rows in a table that have no counterpart in another table" "WHERE right_tbl.id IS NULL;" |
| 48 | `COUNT()` with `GROUP BY` counts the rows of each group in one query | S12 | PASS | "The use of COUNT() in conjunction with GROUP BY is useful for characterizing your data under various groupings." "SELECT species, COUNT(*) FROM pet GROUP BY species;" |
| 49 | `INSERT` builds the rows a test needs | S5 | PASS | "INSERT inserts new rows into an existing table" |
| 50 | Inside a transaction, `ROLLBACK` cancels the changes | S8 | PASS | "ROLLBACK rolls back the current transaction, canceling its changes." |
| 51 | A foreign key constraint rejects the parent delete | S9 | PASS | "the delete or update operation for the parent table is immediately rejected if there is a related foreign key value" |
| 52 | The app must show a clear message, not a crash | none | N/A | Advice, not a fact about a tool. |
| 53 | When an app builds a query by joining strings, an attacker can put SQL into the input, and the database runs it | S11 | PASS | "The "customerName" parameter is simply concatenated to build the query and an attacker can enter SQL code into that query and the application would take the attacker's code and execute it on the database." |
| 54 | The fix is to define the SQL structure apart from the data values, then bind the values through the database API: a parameterized query, with `?` placeholders | S11 | PASS | "define the SQL structure separately from its data values, then bind those values through the database API: use parameterized queries" "using ? as placeholders for the values" |
| 55 | Security Testing link sentence | none | N/A | It describes the page. |
| 56 | Common mistakes: any comparison with `NULL` gives `NULL` | S3 | PASS | "the result of any arithmetic comparison with NULL is also NULL" |
| 57 | `expr = NULL` is never true, so `WHERE phone = NULL` returns no rows | S10 | PASS | "The following statement returns no rows, because expr = NULL is never true for any expression: SELECT * FROM my_table WHERE phone = NULL;" |
| 58 | `NULL` is not the same thing as an empty string `''` | S10 | PASS | "NULL is the same thing as an empty string ''. This is not the case." |
| 59 | A test for "no phone" must say which of the two it means | none | N/A | Advice. |
| 60 | `COUNT(*)` counts rows whether or not they contain `NULL` | S4 | PASS | "whether or not they contain NULL values." |
| 61 | `COUNT(*)` also counts the `NULL` row of an unmatched `LEFT JOIN` | S2 | PASS | S2: "a row with all columns set to NULL is used for the right table". This combines with S4's "number of rows retrieved". |
| 62 | Count a column of the right table instead | none | N/A | Advice. |
| 63 | Without `WHERE`, `UPDATE` changes all the rows | S6 | PASS | "WHERE clause, all rows are updated." |
| 64 | Without `WHERE`, `DELETE` removes all the rows | S7 | PASS | "clause, all rows are deleted." |
| 65 | Run the same `WHERE` in a `SELECT` first | none | N/A | Advice. |
| 66 | With autocommit on, a statement outside a transaction is committed at once and `ROLLBACK` cannot undo it | S8 | PASS | "when not otherwise inside a transaction, each statement is atomic, as if it were surrounded by START TRANSACTION and COMMIT. You cannot use ROLLBACK to undo the effect" |
| 67 | Do not use `=` or `<>` with SQL patterns; use `LIKE` or `NOT LIKE` | S14 | PASS | "Do not use = or <> when you use SQL patterns. Use the LIKE or NOT LIKE comparison operators instead." |
| 68 | What a tester can check (callout): the list is the tutorial's own advice | none | N/A | The callout says it is advice, with no cites. |
| K1 | SQL: the most common standardized language used to access databases | none | PASS | What it is, Technical: "SQL is the most common standardized language used to access databases" |
| K2 | `SELECT` reads rows; `WHERE` filters them and `LIMIT` caps how many come back | none | PASS | What it is: "`SELECT` retrieves rows". How it works: "`WHERE` gives the conditions that a row must satisfy... `LIMIT` constrains the number of rows that come back" |
| K3 | `LEFT JOIN`: a left row with no match gets a right-side row of `NULL`s | none | PASS | How it works: "In a `LEFT JOIN`, a left row with no match gets a right-side row with every column set to `NULL`" |
| K4 | `NULL`: a missing, unknown value; not an empty string; test with `IS NULL` | none | PASS | How it works: "`NULL` means a missing, unknown value, and it is not an empty string. Test for it with `IS NULL`" |
| K5 | `COUNT(expr)` counts non-`NULL` values; `COUNT(*)` counts every row | none | PASS | How it works: "`COUNT(expr)` counts the non-`NULL` values of the expression. `COUNT(*)` counts the rows" |
| K6 | `GROUP BY` groups the rows for each value, for one count per group | none | PASS | How it works: "`GROUP BY` groups the rows for each value, so a count per customer is one query" |
| K7 | Primary key: the column or columns of the most vital queries; it cannot include `NULL` | none | PASS | How it works: "A primary key is the column or columns of your most vital queries, and it cannot include `NULL`" |
| K8 | Foreign key: links a child table to the values of a parent table | none | PASS | How it works: "A foreign key links a child table to the values of a parent table" |
| K9 | Transaction: statements that `COMMIT` makes permanent or `ROLLBACK` cancels | none | PASS | How it works: "`START TRANSACTION` starts a transaction. `COMMIT` makes its changes permanent, and `ROLLBACK` cancels them" |
| K10 | Autocommit: the default mode; each statement outside a transaction is committed at once | none | PASS | How it works: "Autocommit is on by default, so outside a transaction each statement is committed at once" |
| K11 | `LIKE`: `%` is any text, `_` is one character | none | PASS | How it works: "`_` matches one character and `%` matches any number of characters" |
| K12 | Parameterized query: SQL defined apart from its values, with `?` placeholders that the values are bound to; the fix for SQL injection | none | PASS | How a tester uses it: "The fix is to define the SQL structure apart from its data values, then bind the values through the database API: a parameterized query, with `?` as the placeholder for each value" |

Open FAILs: 0

FAILs in round 8: 0.

## Round 9 (2026-11-18)

Verification of the changed lines only. Step 14 of the SDET Roadmap became a link to the Security Testing module, and its page was removed. The link at the end of the "Test for SQL injection" bullet pointed to that page; it now points to Web Application Security (`/security/web-application-security/`), in the three voices. A fresh checker (claude-sonnet-5-5; Read, Grep, and Glob only; no web) got the changed lines before and after, and the "In practice" section of the target page.

### Fact check: sdet / sql-mysql (round 9, changed lines only)

| # | Changed line | Verdict | Quote or reason |
|---|---|---|---|
| 1 | Technical: "[Web Application Security](/security/web-application-security/) shows how to test for it." | PASS | Step 3 in the Technical voice: "**3. Test for SQL injection.** In a search or login field, send OWASP's classic input … If the result shows more records than it should, the input changed the meaning of the query". The link text names the target page. |
| 2 | সহজ English: "See [Web Application Security](/security/web-application-security/)." | PASS | Step 3 in the Layman voice: "**Test for SQL injection.** In a search or login field, send … If you get more records than you should, the input changed what the query means". The link text names the target page. |
| 3 | বাংলা: "কীভাবে টেস্ট করবেন, তা [Web Application Security](/security/web-application-security/)-এ আছে।" | PASS | Step 3 in the Bangla voice: "**SQL injection টেস্ট করুন।** কোনো search বা login field-এ … পাঠান। যদি প্রত্যাশার চেয়ে বেশি record আসে". The link text names the target page. |

Open FAILs: 0

Item 3 (other changes): in all three lines, the only difference from the old text is the link, which changed from `[Security Testing](/sdet/security-testing/)` to `[Web Application Security](/security/web-application-security/)`. The rest of each bullet, including the `<Cite n={11} />` marks, is word for word the same. `changes.md` also says the page's `updated` date changed. That line is not in this folder, so I did not check it.

I checked only that the target page shows a step for testing SQL injection. I did not check the SQL injection string, because it is replaced by a placeholder.

FAILs in round 9: 0.

Open FAILs: 0
