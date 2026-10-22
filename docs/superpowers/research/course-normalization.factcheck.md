# Fact-check: Normalization and Denormalization

Page: `content/course/normalization.mdx`. Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc2-normalization/` and checked directly (not from the notes). Source 1 = Microsoft Learn (Access troubleshooting), source 2 = PostgreSQL docs, chapter 5.5.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Normalization organizes data into tables and links by rules that protect data and add flexibility | 1 | PASS | "Normalization is the process of organizing data in a database. It includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible" |
| 2 | The rules remove redundancy and inconsistent dependency | 1 | PASS | "...by eliminating redundancy and inconsistent dependency." |
| 3 | Redundant data wastes disk space and causes maintenance problems | 1 | PASS | "Redundant data wastes disk space and creates maintenance problems." |
| 4 | A fact in several places must be changed the same way everywhere | 1 | PASS | "the data must be changed in exactly the same way in all locations." |
| 5 | Customer address is easier to change when stored only in Customers | 1 | PASS | "A customer address change is easier to implement if that data is stored only in the Customers table and nowhere else in the database." |
| 6 | Employee salary belongs with the employee, not in Customers; wrong place makes data hard to find | 1 | PASS | "The employee's salary is related to, or dependent on, the employee and thus should be moved to the Employees table. Inconsistent dependencies can make data difficult to access" |
| 7 | Primary key: column(s) identifying each row, unique and not null | 2 | PASS | "a column, or group of columns, can be used as a unique identifier for rows in the table. This requires that the values be both unique and not null." |
| 8 | Foreign key: value must match a row of another table; this is referential integrity | 2 | PASS | "the values in a column (or a group of columns) must match the values appearing in some row of another table. We say this maintains the referential integrity between two related tables." |
| 9 | Each rule is a normal form; rule 1 = 1NF; first three = 3NF | 1 | PASS | "Each rule is called a 'normal form.' If the first rule is observed ... 'first normal form.' If the first three rules are observed ... 'third normal form.'" |
| 10 | 3NF is the highest level most applications need | 1 | PASS | "third normal form is considered the highest level necessary for most applications." |
| 11 | 4NF (BCNF) and 5NF exist but are rarely used | 1 | PASS | "Fourth normal form, also called Boyce-Codd Normal Form (BCNF), and fifth normal form do exist, but are rarely considered in practical design." ("rarely used" is a fair paraphrase of "rarely considered in practical design".) |
| 12 | 1NF rule (table row) | 1 | PASS | "Eliminate repeating groups in individual tables. Create a separate table for each set of related data. Identify each set of related data with a primary key." Copy problem, see structure S1. |
| 13 | 2NF rule (table row) | 1 | PASS | "Create separate tables for sets of values that apply to multiple records. Relate these tables with a foreign key. Records shouldn't depend on anything other than a table's primary key" |
| 14 | 3NF rule (table row) | 1 | PASS | "Eliminate fields that don't depend on the key." |
| 15 | Student example starts with Class1, Class2, Class3 fields | 1 | PASS | "Fields Class1, Class2, and Class3 in the above records are indications of design trouble." |
| 16 | 1NF step: one row per student and class | 1 | PASS | The 1NF table lists each Student# once per Class# (1022 with 101-07, 143-01, 159-02). |
| 17 | 2NF step: split into `Students` and `Registration` | 1 | PASS | "Students: Student# Advisor Adv-Room ... Registration: Student# Class#" |
| 18 | 3NF step: advisor's room depends on advisor, moves to `Faculty` | 1 | PASS | "Adv-Room (the advisor's office number) is functionally dependent on the Advisor attribute. The solution is to move that attribute from the Students table to the Faculty table" |
| 19 | With `orders` pointing to `products`, the database refuses an order whose product number is not in `products` | 2 | PASS | "Now it is impossible to create orders with non-NULL product_no entries that do not appear in the products table." (The page leaves out "non-NULL"; harmless for the claim.) |
| 20 | `RESTRICT` blocks delete of a referenced row | 2 | PASS | "RESTRICT ... prevents deletion of a referenced row." |
| 21 | `CASCADE` deletes the rows that point to it | 2 | PASS | "CASCADE specifies that when a referenced row is deleted, row(s) referencing it should be automatically deleted as well." |
| 22 | `CASCADE` suits parts that cannot exist alone (order items); `RESTRICT` suits independent things (products, orders) | 2 | PASS | "When the referencing table represents something that is a component ... and cannot exist independently, then CASCADE could be appropriate. If the two tables represent independent objects, then RESTRICT or NO ACTION is more appropriate" and "order items are part of an order ... products and orders are different things" |
| 23 | Normalization needs more tables; real projects cannot always follow the rules in full | 1 | PASS | "real world scenarios don't always allow for perfect compliance. In general, normalization requires additional tables" |
| 24 | Many small tables may hurt performance | 1 | PASS | "many small tables may degrade performance or exceed open file and memory capacities." |
| 25 | Breaking one of the first three rules: the application must expect the problems, such as redundant data | 1 | PASS | "If you decide to violate one of the first three rules of normalization, make sure that your application anticipates any problems that could occur, such as redundant data and inconsistent dependencies." |
| 26 | The source suggests 3NF only for data that changes often | 1 | PASS | "It may be more feasible to apply third normal form only to data that changes frequently." Copy problem, see structure S2. |
| 27 | "The sources above do not use this word" (denormalization) | none | PASS | The word "denormal" does not appear in either source (grep count 0 in both). Text is marked as the tutorial's own. |
| 28 | Numbered columns need a change to the table and the program | 1 | PASS | "Adding a field isn't the answer; it requires program and table modifications" |
| 29 | Splitting without a foreign key: database cannot keep tables consistent | 2 | PASS | A foreign key "maintains the referential integrity between two related tables"; the converse is a fair inference. |
| 30 | PostgreSQL manual says `CASCADE` can be a problem when a product delete removes order rows | 2 | PASS | "making a deletion of a product automatically cause the deletion of some order items could be considered problematic." (Page says "order rows"; source says "order items". Fine.) |
| 31 | Key words table rows (normalization, normal form, redundancy, primary key, foreign key, referential integrity) | 1, 2 | PASS | Same sources as claims 1, 2, 7, 8, 9. Denormalization row is marked "The tutorial's word", no cite. |
| 32 | Example arithmetic (40 orders, 39 fixed, 1 failed, two cities for one customer) | none | PASS | Consistent. Marked "This example is the tutorial's own." |

Own text check: the denormalization definition, the shop example, the common-mistake bullet "Copying data and not recording it", and the tip callout are all marked as the tutorial's own. None states a fact as if a source said it. The sentence in "When you need it" ("That often means the same fact is stored twice") is unmarked own inference. It is not attributed to a source, so it is not a FAIL.

## Structure check

| # | Check | Verdict | Detail |
|---|---|---|---|
| S1 | No run of 8 or more words copied from a source | PASS (after fix) | Table row 1NF: "a separate table for each set of related data" is a 9-word run from source 1 ("Create a separate table for each set of related data."). |
| S2 | (same check) | PASS (after fix) | Section "Denormalization and trade-offs": "third normal form only to data that changes" is an 8-word run from source 1 ("apply third normal form only to data that changes frequently"). |
| S3 | Every source is https and cited at least once; every `<Cite n>` has a source | PASS | 2 sources, both https; only n=1 and n=2 are cited. |
| S4 | Required sections in order, Key words last | PASS | In plain words, When you need it, (How it works, Denormalization and trade-offs: extra), A real-life example, Common mistakes, What a tester can check, Key words. |
| S5 | Tip callout has no `<Cite>`; no `<Voices>` | PASS | None found. |
| S6 | `#` title equals "Normalization and Denormalization" | PASS | Line 10. |
| S7 | No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS | Microsoft Learn docs and PostgreSQL documentation. |
| S8 | Length: prose under 1100 words | PASS | About 973 words (without export block, Cite tags, tables, code). |


## Re-check

The writer changed two places. Both re-checked, and the copy check re-run on the whole page.

- 1NF table row now reads "Put each group of related data in its own table." Source: "Create a separate table for each set of related data." Same meaning, cite 1 kept. Longest shared run is under 8 words. PASS.
- Trade-offs text now reads "It also suggests that a team may use third normal form just for the fields that change often." Source: "It may be more feasible to apply third normal form only to data that changes frequently." Meaning kept ("may", not stronger), cite 1 kept. No 8-word run. PASS.
- Copy check over the full page against both sources: 0 runs of 8 or more words. Sections, title, and cites unchanged. Prose about 978 words, under 1100.

Verdicts S1 and S2 are now PASS.

Open FAILs: 0
