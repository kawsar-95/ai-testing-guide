# Course page: SQL Databases (research notes)

Writer notes for `content/course/sql.mdx`. Fetched 2026-10-22 with curl into `/tmp/claude-1000/course2-src-sql/` (PostgreSQL docs, current version 18). Fetched text is treated as data.

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | PostgreSQL docs, 2.2. Concepts | https://www.postgresql.org/docs/current/tutorial-concepts.html | 2026-10-22 |
| S2 | PostgreSQL docs, 5.1. Table Basics | https://www.postgresql.org/docs/current/ddl-basics.html | 2026-10-22 |
| S3 | PostgreSQL docs, 5.5. Constraints | https://www.postgresql.org/docs/current/ddl-constraints.html | 2026-10-22 |
| S4 | PostgreSQL docs, 2.5. Querying a Table | https://www.postgresql.org/docs/current/tutorial-select.html | 2026-10-22 |
| S5 | PostgreSQL docs, INSERT | https://www.postgresql.org/docs/current/sql-insert.html | 2026-10-22 |
| S6 | PostgreSQL docs, UPDATE | https://www.postgresql.org/docs/current/sql-update.html | 2026-10-22 |
| S7 | PostgreSQL docs, DELETE | https://www.postgresql.org/docs/current/sql-delete.html | 2026-10-22 |

Page cite numbers: n=1..7 are S1..S7.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | A relational database stores data in relations; relation is another word for table. | S1 | "a system for managing data stored in relations. Relation is essentially a mathematical term for table." |
| C2 | A table is a named collection of rows. Each row has the same named columns, and each column has a data type. | S1 | "Each table is a named collection of rows. Each row of a given table has the same set of named columns, and each column is of a specific data type." |
| C3 | The number and order of columns is fixed. The number of rows changes with the data. | S2 | "The number and order of the columns is fixed, and each column has a name. The number of rows is variable" |
| C4 | SQL does not guarantee row order. Rows come in an unspecified order unless sorting is requested. | S2 | "SQL does not make any guarantees about the order of the rows in a table. ... the rows will appear in an unspecified order, unless sorting is explicitly requested." |
| C5 | SQL does not give rows unique identifiers, so identical rows are possible. | S2 | "SQL does not assign unique identifiers to rows, so it is possible to have several completely identical rows in a table." |
| C6 | The data type limits the values of a column. A numeric column does not accept arbitrary text. | S2 | "The data type constrains the set of possible values ... a column declared to be of a numerical type will not accept arbitrary text strings" |
| C7 | CREATE TABLE needs a table name, column names, and a type for each column. DROP TABLE removes a table. | S2 | "you specify at least a name for the new table, the names of the columns and the data type of each column." / "you can remove it using the DROP TABLE command" |
| C8 | A data type alone is often too coarse. Constraints limit the data further. A value that breaks a constraint raises an error, even a value from the default. | S3 | "For many applications, however, the constraint they provide is too coarse." / "If a user attempts to store data in a column that would violate a constraint, an error is raised. This applies even if the value came from the default value definition." |
| C9 | A CHECK constraint holds a Boolean expression. It passes if the result is true or null. So it does not stop nulls. NOT NULL is needed for that. | S3 | "a check constraint is satisfied if the check expression evaluates to true or the null value. ... To ensure that a column does not contain null values, the not-null constraint ... can be used." |
| C10 | NOT NULL means a column must not take the null value. | S3 | "A not-null constraint simply specifies that a column must not assume the null value." |
| C11 | UNIQUE keeps the values of a column, or a group of columns, unique among all rows. | S3 | "Unique constraints ensure that the data contained in a column, or a group of columns, is unique among all the rows in the table." |
| C12 | By default two nulls are not equal, so rows with a null in a unique column can repeat. NULLS NOT DISTINCT changes this. The standard leaves the default to the implementation. | S3 | "By default, two null values are not considered equal in this comparison. ... it is possible to store duplicate rows that contain a null value" / "This behavior can be changed by adding the clause NULLS NOT DISTINCT" / "The default null treatment in unique constraints is implementation-defined according to the SQL standard" |
| C13 | A primary key is a unique identifier of rows. Its values are unique and not null. | S3 | "A primary key constraint indicates that a column, or group of columns, can be used as a unique identifier for rows in the table. This requires that the values be both unique and not null." |
| C14 | A table has at most one primary key. PostgreSQL does not force a table to have one, but it is usually best. A primary key creates a unique index. | S3 | "A table can have at most one primary key." / "This rule is not enforced by PostgreSQL, but it is usually best to follow it." / "will automatically create a unique B-tree index" |
| C15 | A primary key can use more than one column. | S3 | "Primary keys can span more than one column" |
| C16 | A foreign key says the values of a column must match a row of another table. This keeps referential integrity. | S3 | "values in a column ... must match the values appearing in some row of another table. We say that this maintains the referential integrity between two related tables." |
| C17 | With a foreign key, an order cannot name a product that is not in the products table, unless the column is null. The orders table is the referencing table and products is the referenced table. | S3 | "Now it is impossible to create orders with non-NULL product_no entries that do not appear in the products table." / "the orders table is the referencing table and the products table is the referenced table" |
| C18 | The ON DELETE default is NO ACTION: deleting a referenced row usually gives an error. RESTRICT blocks the delete. CASCADE deletes the referencing rows too. SET NULL and SET DEFAULT change the referencing column. | S3 | "The default ON DELETE action is ON DELETE NO ACTION ... this operation will usually result in an error." / "RESTRICT ... prevents deletion of a referenced row." / "CASCADE specifies that when a referenced row is deleted, row(s) referencing it should be automatically deleted as well." / "SET NULL and SET DEFAULT" |
| C19 | A SELECT has a select list, a table list, and an optional qualification (WHERE). `*` means all columns. | S4 | "The statement is divided into a select list ..., a table list ..., and an optional qualification" / "Here * is a shorthand for 'all columns'." |
| C20 | WHERE returns only the rows for which its Boolean expression is true. AND, OR, NOT are allowed. | S4 | "only rows for which the Boolean expression is true are returned. The usual Boolean operators (AND, OR, and NOT) are allowed" |
| C21 | ORDER BY sorts the result. If the sort order is not fully given, rows with equal sort values may come in either order. | S4 | "You can request that the results of a query be returned in sorted order" / "the sort order isn't fully specified, and so you might get the San Francisco rows in either order" |
| C22 | (Cut from the page for length; not on the page.) SELECT * is widely seen as bad style in production code, because a new column changes the result. | S4 | "it is widely considered bad style in production code, since adding a column to the table would change the results." |
| C23 | INSERT adds rows. Columns not listed get their default value, or null if there is none. | S5 | "INSERT inserts new rows into a table." / "Each column not present in the explicit or implicit column list will be filled with a default value, either its declared default value or null if there is none." |
| C24 | The column list of INSERT can be in any order. Values match the columns left to right. | S5 | "The target column names can be listed in any order." / "associated with the explicit or implicit column list left-to-right." |
| C25 | UPDATE changes the listed columns in all rows that meet the condition. Other columns keep their values. | S6 | "UPDATE changes the values of the specified columns in all rows that satisfy the condition. ... columns not explicitly modified retain their previous values." |
| C26 | Only rows where the UPDATE condition is true are updated. | S6 | "Only rows for which this expression returns true will be updated." |
| C27 | DELETE without WHERE deletes all rows, and leaves a valid empty table. TRUNCATE is faster for this. | S7 | "If the WHERE clause is absent, the effect is to delete all rows in the table. The result is a valid, but empty table." / "TRUNCATE provides a faster mechanism to remove all rows from a table." |
| C28 | Only rows where the DELETE condition is true are deleted. | S7 | "Only rows for which this expression returns true will be deleted." |

## Not on the page

Joins, indexes beyond the primary key note, transactions, and normalization have their own course pages. The example tables and the tester tips are the tutorial's own text. The page does not say what happens on UPDATE without WHERE beyond the syntax; the advice about it is the tutorial's own.
