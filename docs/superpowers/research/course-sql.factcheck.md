# Fact-check: content/course/sql.mdx (SQL Databases)

Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc2-sql/` (PostgreSQL docs, version 18 pages under `/docs/current/`). Quotes below were checked in the fetched text, not copied from the notes.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | SQL database is relational: data in relations, "relation" = table | 1 | PASS | "a system for managing data stored in relations. Relation is essentially a mathematical term for table." |
| 2 | A table is a named collection of rows | 1 | PASS | "Each table is a named collection of rows." |
| 3 | Every row has the same named columns, each with a data type | 1 | PASS | "Each row of a given table has the same set of named columns, and each column is of a specific data type." |
| 4 | Set of columns is fixed; number of rows varies | 2 | PASS | "The number and order of the columns is fixed ... The number of rows is variable" |
| 5 | A number column refuses arbitrary text | 2 | PASS | "a column declared to be of a numerical type will not accept arbitrary text strings" |
| 6 | CREATE TABLE takes a name, column names, a type for each | 2 | PASS | "you specify at least a name for the new table, the names of the columns and the data type of each column." |
| 7 | DROP TABLE removes a table | 2 | PASS | "you can remove it using the DROP TABLE command" |
| 8 | No row order promised; unspecified unless sorted | 2 | PASS | "SQL does not make any guarantees about the order of the rows in a table. ... the rows will appear in an unspecified order, unless sorting is explicitly requested." |
| 9 | Rows have no identity; two rows can be identical | 2 | PASS | "SQL does not assign unique identifiers to rows, so it is possible to have several completely identical rows in a table." ("Keys fix this" is the page's own link to later text; the source says "Later in this chapter we will see how to deal with this issue.") |
| 10 | Constraint is a stronger rule than a data type | 3 | PASS | "the constraint they provide is too coarse." / "SQL allows you to define constraints on columns and tables." |
| 11 | A constraint break raises an error, even for a default value | 3 | PASS | "an error is raised. This applies even if the value came from the default value definition." |
| 12 | NOT NULL: column must not hold null | 3 | PASS | "a column must not assume the null value." |
| 13 | UNIQUE: unique among all rows, for a column or group | 3 | PASS | "is unique among all the rows in the table" for "a column, or a group of columns" |
| 14 | PRIMARY KEY: unique identifier, unique and not null | 3 | PASS | "can be used as a unique identifier for rows in the table. This requires that the values be both unique and not null." |
| 15 | FOREIGN KEY: values must match a row in another table | 3 | PASS | "must match the values appearing in some row of another table." |
| 16 | CHECK: true-or-false expression the value must satisfy | 3 | PASS | "the value in a certain column must satisfy a Boolean (truth-value) expression." |
| 17 | At most one primary key | 3 | PASS | "A table can have at most one primary key." |
| 18 | PostgreSQL does not force a primary key; manual says usually best | 3 | PASS | "This rule is not enforced by PostgreSQL, but it is usually best to follow it." |
| 19 | A primary key can use more than one column | 3 | PASS | "Primary keys can span more than one column" |
| 20 | Foreign key keeps the link correct = referential integrity | 3 | PASS | "this maintains the referential integrity between two related tables." |
| 21 | Order cannot name a missing product, unless null | 3 | PASS | "it is impossible to create orders with non-NULL product_no entries that do not appear in the products table." |
| 22 | Referencing table / referenced table | 3 | PASS | "the orders table is the referencing table and the products table is the referenced table." |
| 23 | Default ON DELETE is NO ACTION, usually an error | 3 | PASS | "The default ON DELETE action is ON DELETE NO ACTION ... this operation will usually result in an error." |
| 24 | RESTRICT blocks the delete | 3 | PASS | "It prevents deletion of a referenced row." |
| 25 | CASCADE deletes the pointing rows | 3 | PASS | "row(s) referencing it should be automatically deleted as well." |
| 26 | SET NULL and SET DEFAULT change the pointing column | 3 | PASS | "cause the referencing column(s) ... to be set to nulls or their default values" |
| 27 | SELECT has a select list, a table list, optional WHERE | 4 | PASS | "divided into a select list ..., a table list ..., and an optional qualification" (the qualification is the WHERE clause, same page) |
| 28 | `*` means all columns | 4 | PASS | "Here * is a shorthand for 'all columns'." |
| 29 | WHERE keeps rows where true; AND, OR, NOT allowed | 4 | PASS | "only rows for which the Boolean expression is true are returned. The usual Boolean operators (AND, OR, and NOT) are allowed" |
| 30 | ORDER BY sorts; equal values can come in either order if sort not fully given | 4 | PASS | "the sort order isn't fully specified, and so you might get the San Francisco rows in either order." |
| 31 | INSERT adds rows | 5 | PASS | "INSERT inserts new rows into a table." |
| 32 | Omitted column gets default, or null if none | 5 | PASS | "filled with a default value, either its declared default value or null if there is none." |
| 33 | Columns in any order; values match left to right | 5 | PASS | "The target column names can be listed in any order." / "associated with the explicit or implicit column list left-to-right." |
| 34 | UPDATE changes listed columns in every row that meets the condition | 6 | PASS | "changes the values of the specified columns in all rows that satisfy the condition." |
| 35 | Other columns keep their values | 6 | PASS | "columns not explicitly modified retain their previous values." |
| 36 | Only rows where the condition is true change | 6 | PASS | "Only rows for which this expression returns true will be updated." |
| 37 | DELETE removes rows that meet the condition | 7 | PASS | "DELETE deletes rows that satisfy the WHERE clause" |
| 38 | DELETE without WHERE removes all rows, leaves an empty table | 7 | PASS | "If the WHERE clause is absent, the effect is to delete all rows in the table. The result is a valid, but empty table." |
| 39 | CHECK passes on true or null, so it does not stop nulls | 3 | PASS | "a check constraint is satisfied if the check expression evaluates to true or the null value." (the source says "most expressions", the page says "the check alone does not stop nulls" for a plain range check: consistent) |
| 40 | UNIQUE: two nulls are not equal by default, null rows can repeat | 3 | PASS | "By default, two null values are not considered equal in this comparison. ... it is possible to store duplicate rows that contain a null value" |
| 41 | The standard leaves the null default to each database; others can differ | 3 | PASS | "The default null treatment in unique constraints is implementation-defined according to the SQL standard, and other implementations have a different behavior." |
| 42 | TRUNCATE is the faster way to clear a table | 7 | PASS | "TRUNCATE provides a faster mechanism to remove all rows from a table." |
| 43 | Key words: row = one record with same columns as other rows; column = named field with a data type | 1 | PASS | Same quote as claims 2 and 3. |
| 44 | Key words: primary key, foreign key, constraint, referential integrity | 3 | PASS | Same support as claims 11, 14, 15, 20. |

## SQL snippet check (against PostgreSQL docs; no local PostgreSQL server was available, so checked by reading the docs and the constraint rules)

- `CREATE TABLE students (...)` with `PRIMARY KEY`, `NOT NULL UNIQUE`: valid column constraints (section 5.5).
- `student_id integer NOT NULL REFERENCES students`: valid. Without a column list, "the primary key of the referenced table is used as the referenced column(s)" (section 5.5.5).
- `score integer CHECK (score BETWEEN 0 AND 100)`: valid. The column is nullable, and the page says so (claim 39).
- `INSERT`, `SELECT ... WHERE`, `UPDATE ... SET ... WHERE`, `DELETE FROM ... WHERE`: valid syntax.
- Example behavior: a second student with `ada@example.com` breaks `UNIQUE` (email is also NOT NULL); a score of 120 breaks `CHECK`; an enrollment for student 99 breaks the foreign key; each raises an error. All three match the constraint rules in claims 11 to 21. These sentences have no `<Cite>`, but they only apply cited rules to the tutorial's own tables, and the page says "The tables above are the tutorial's own example." Not a FAIL.

## Structure check

- Sources: 7 entries, all `https://`, all cited (1 to 7). Every `<Cite n>` (1 to 7) has a source. PASS.
- Copy check: compared the page text (no code, no tags) with the 7 fetched pages. The longest run copied is 7 words ("table is a named collection of rows"; and "each column has a data type the"). No run of 8 or more. PASS.
- Sections `## In plain words`, `## When you need it`, `## A real-life example`, `## Common mistakes`, `## What a tester can check`, `## Key words` appear in this order. Key words is last. The page adds two extra sections (`## Keys and constraints`, `## The four basic statements`) between the first and second; the rules do not forbid this. PASS.
- Tip callout has no `<Cite>`. No `<Voices>`. PASS.
- `#` title is "SQL Databases". PASS.
- All 7 sources are PostgreSQL official docs. No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com. PASS.

Open FAILs: 0
