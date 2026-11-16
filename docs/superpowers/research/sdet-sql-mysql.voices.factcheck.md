# Voices fact check: sdet / sql-mysql

Checked by an independent agent. In each round, a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page compared each Layman and Bangla panel with the Technical panel of the same section, under the standard in `sdet-factcheck-brief.md`. After a round with FAILs, the author fixed the panels, and the next round checked every panel again. No person who reads Bangla has read the Bangla.

## Round 1 (2026-11-15)

### Voices fact check: sdet / sql-mysql (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | It adds "a bit like the sheets of a spreadsheet", an analogy that Technical does not give. It also changes "the most common standardized language" to "the standard language", which is stronger. Left out: "relational", "from one or more tables", "interactively or from a script", "it asks for the password". It changes "database server" to "database" in the link sentence. |
| What it is | Bangla | FAIL | It writes "সাধারণ client হলো `mysql`" ("the common or ordinary client"). Technical says "the command-line client", so the fact is changed. The rest matches Technical. Left out: "interactively or from a script" is kept, and no other fact is missing. |
| How it works | Layman | FAIL | (1) It adds "A `LEFT JOIN` keeps every row on the left", which Technical does not say. (2) It adds the example "customers with no orders". (3) It adds the example "`LIKE 'a%'` means 'starts with a'". (4) It says "A primary key names each row", but Technical says it is the column or columns of the most important lookups. (5) It drops "By default" from "MySQL stops you from deleting a parent that still has children". (6) It drops "Autocommit is on by default" from "Without a transaction, each statement is saved at once and cannot be undone". Left out: the role of WHERE in joins, `IS NOT NULL`, `<` and `<>`, and "whether they contain NULL or not". |
| How it works | Bangla | PASS | Every sentence matches Technical, and the limits "ডিফল্টভাবে" and "Autocommit ডিফল্টভাবে চালু" are kept. Nothing is added. Left out: nothing of note. |
| Try it | Layman | FAIL | "You get a table" drops the limit "In interactive use". S15 says that non-interactive output is tab-separated, so the claim is now broader. The other steps match Technical. Left out: "from a script", "`mysql` client connects", the full SQL text of step 4, and the error text "ERROR 1451 (23000)...". |
| Try it | Bangla | PASS | It matches Technical, and "হাতে চালালে" keeps the interactive limit. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Every item matches Technical. Left out: "per day", "break a key" (the insert test), "`WHERE ...`" in the orphan item, and "when the check is done". It uses "should" where Technical uses "must". |
| How a tester uses it | Bangla | PASS | Every item matches Technical. Left out: nothing of note. |
| Common mistakes | Layman | FAIL | (1) "Thinking `ROLLBACK` always works. Outside a transaction, each statement is saved at once" drops the limit "With autocommit on". (2) "`%` and `_` only work with `LIKE`" leaves out `NOT LIKE` and so changes the meaning. Left out: "so `WHERE phone = NULL` returns no rows", "not with `=` or `<>`". |
| Common mistakes | Bangla | PASS | Every item matches Technical, and the "Autocommit চালু থাকলে" limit is kept. Left out: nothing of note. |
| What a tester can check | Layman | PASS | It is the tutorial's own advice, and it matches the Technical callout. It gives no new fact. Left out: "or roll back" in the clean-up item, and "in the database" and "per group" in the counts item. |
| What a tester can check | Bangla | PASS | It is the tutorial's own advice, and it matches the Technical callout. It gives no new fact. Left out: nothing of note. |

Open FAILs: 5

I did not invoke the writing-simplified-technical-english skill, because this reply must keep a fixed shape. I joined source lines that wrap across line breaks in some quotes. I did not check the code blocks.

FAILs in round 1: 5.

## Round 2 (2026-11-16)

### Voices fact check: sdet / sql-mysql (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Facts and cites match. Left out: that the databases are relational, "one or more tables", that `mysql` can be used from a script, and that the shell asks for the password. |
| What it is | Bangla | PASS | Meaning matches the Technical panel, and every cite is on the same fact. Left out: nothing beyond the Technical wording; the interactive-or-script detail and the password prompt are kept. |
| How it works | Layman | FAIL | "A foreign key points a child row to its parent row" changes the scope. The Technical panel says it links a child table to the values of a parent table, and the Layman text says row to row. Other left-out details: WHERE in joins, IS NOT NULL, `<` and `<>`, and the per-customer example. |
| How it works | Bangla | PASS | Every bullet matches the Technical panel, including "ডিফল্টভাবে" for the defaults and the limits on NULL and autocommit. Nothing is added. |
| Try it | Layman | PASS | Steps and cites match the Technical panel. Left out: the statement text of steps 3 and 4 (the pending-order DELETE is described in words), the full error text, and "select only the name". |
| Try it | Bangla | PASS | Steps, cites and results match the Technical panel. Nothing is added. |
| How a tester uses it | Layman | FAIL | "the app should show a clear message" is weaker than the Technical "the app must show a clear message". Left out: the "insert a row that breaks a key" test, "per day", "Compare the stored total and status", and "through the database API". |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel, including "দেখাতে হবে" for "must" and the parameterized-query steps. Nothing is added. |
| Common mistakes | Layman | PASS | Every point matches the Technical panel. Left out: `<>` in the pattern rule, "returns no rows" for `phone = NULL`, and the two-way "which of the two" detail. |
| Common mistakes | Bangla | PASS | Every point matches the Technical panel, and the cites are on the same facts. Nothing is added. |
| What a tester can check | Layman | FAIL | "Is 'unknown' stored differently from 'none', as the requirement says?" adds a claim. The Technical panel only asks whether the app stores them "the way the requirement says", and does not say they must differ. The "roll back" option in Clean-up is left out. |
| What a tester can check | Bangla | FAIL | "আলাদাভাবে জমা রাখে" says the same thing as the Layman text: "unknown" and "none" are stored separately. The Technical panel does not say that. Nothing else is added, and the callout has no cites, as the page states. |

Open FAILs: 4

I did not read the source files in full. I used Grep on keywords, so a claim I passed from a short quote could have context in the source that I did not see. I also treated `<Cite>`-cut chunks of two sentences as one claim. For example, the `LIKE` claim (row 26) has its cite only after the second sentence.

FAILs in round 2: 4.

## Round 3 (2026-11-16)

### Voices fact check: sdet / sql-mysql (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Working with a database" is a little wider than "access databases", but the Technical panel also lists SELECT, INSERT, UPDATE and DELETE. Left out: "relational", "from one or more tables", use from a script, and that the client asks for the password. |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Nothing is added. Nothing is stronger or weaker. All details are kept. |
| How it works | Layman | FAIL | "`GROUP BY` gives one count for each group" gives the count to `GROUP BY`. The Technical panel says `GROUP BY` only groups the rows, so that a count per customer is one query. Fix: "`GROUP BY` groups the rows, so one query can give a count for each group." The other bullets are faithful. "`LIMIT` says how many to show" is close to "constrains the number of rows". Left out: "missing" in the `NULL` meaning, `IS NOT NULL`, the `=`, `<` and `<>` list, "non-`NULL` values of the expression", and "any number of characters". |
| How it works | Bangla | PASS | Every sentence matches the Technical panel, including the limits "ডিফল্টভাবে" (by default) and "case-insensitive". Nothing is added. |
| Try it | Layman | PASS | Same steps and results as the Technical panel. Left out: the text of the ERROR 1451 message, the exact delete statements, and "keep the `LEFT JOIN`, select only the name". |
| Try it | Bangla | PASS | Same steps, results, and cites as the Technical panel. It includes the error text. Nothing is added. |
| How a tester uses it | Layman | PASS | Faithful. Left out: "through the UI or the API", "total and status", "like the count per customer in Try it", "insert a row that breaks a key", and "not a crash". |
| How a tester uses it | Bangla | PASS | Faithful to the Technical panel. Nothing is added. |
| Common mistakes | Layman | PASS | Faithful. Left out: `<>` in the pattern bullet, and "must say which of the two it means" (it says "Say which one the test means"). |
| Common mistakes | Bangla | PASS | Faithful to the Technical panel. Nothing is added. |
| What a tester can check | Layman | PASS | Callout of advice only. It has no cites and no source facts. Left out: "important action", "per group", "database account", and "or roll back". |
| What a tester can check | Bangla | PASS | Same advice as the Technical panel, and it says it is the tutorial's own advice. No facts are added. |

Open FAILs: 1

I did not invoke the writing-style skill that CLAUDE.md asks for, because no Skill tool was available. The reply is plain text in the exact shape you set. I did not check the ERROR 1451 text, because no source has it and it is the page's own code output.

FAILs in round 3: 1.

## Round 4 (2026-11-16)

### Voices fact check: sdet / sql-mysql (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "SQL is the most common standard language for working with a database" says "working with" where Technical says "access"; this is a small widening, not a new fact. Left out: "relational", "one or more tables", "new" rows, use from a script, and that `mysql` asks for the password. |
| What it is | Bangla | PASS | Matches the Technical panel sentence by sentence. Nothing is added. Left out: nothing of substance. |
| How it works | Layman | PASS | Every fact is in the Technical panel. "`LIMIT` says how many to show" is close to "constrains the number". "`COUNT(column)`" narrows `expr` to a column but adds no fact. Left out: the `WHERE` role in joins, `IS NOT NULL`, `<` and `<>`, "missing", the per-customer example, "zero or more characters", and "automatically". |
| How it works | Bangla | PASS | Matches the Technical panel. Every limit is kept, including "ডিফল্টভাবে". Nothing is added. Left out: nothing of substance. |
| Try it | Layman | PASS | Matches the Technical panel. The `COUNT(*)` sentence copies the Technical sentence and its cite 4. That cite does not cover the `LEFT JOIN` NULL row (see FAIL 37). Left out: "predict each answer first", the exact steps of item 2, and the full ERROR 1451 text. |
| Try it | Bangla | PASS | Matches the Technical panel, including the error text. The same cite 4 issue as in the Layman panel and FAIL 37. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Every fact and cite is in the Technical panel. "glues your input into a query" is a plainer form of "builds a query by joining strings". "the SQL is written first" restates "define the SQL structure apart from its data values". Left out: "UI or API", total and status, "insert a row that breaks a key", "not a crash", and "through the database API". |
| How a tester uses it | Bangla | PASS | Matches the Technical panel sentence by sentence. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. The `COUNT(*)` item copies Technical's cite 4 (see FAIL 56). The pattern item copies the "work only with" wording (see FAIL 60). Left out: `<>` in the pattern item, and "must say which of the two it means". |
| Common mistakes | Bangla | PASS | Matches the Technical panel. The same cite and wording issues as the Technical panel (FAIL 56 and 60), copied faithfully. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Callout; advice only, with no facts from sources. Left out: "after each important action", "child rows", "per group", and "or roll back" in Clean-up. |
| What a tester can check | Bangla | PASS | Callout; advice only. It matches the Technical callout, including "বা rollback করে". Left out: nothing of substance. |

Open FAILs: 0

Not checked: whether the code blocks run, and whether the Bangla grammar is natural. I judged Bangla by meaning only. One risk: the Layman and Bangla panels copy the Technical cites and wording, so FAILs 37, 56 and 60 will need the same fix in all three panels.

FAILs in round 4: 0.

## Round 5 (2026-11-16)

### Voices fact check: sdet / sql-mysql (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Working with a database" is a plainer wording of "access databases". Left out: "relational", "one or more tables", "management", the interactive or script use. |
| What it is | Bangla | PASS | All facts match the Technical panel. Left out: the same details as in the Layman panel. |
| How it works | Layman | PASS | Every fact is in the Technical panel. Left out: "missing" for `NULL`, `IS NOT NULL`, `<` and `<>`, "expression" in `COUNT(expr)`, "whether or not they contain `NULL`", "any number of characters" (the panel says "any text"), "Generally" on `ON`/`WHERE`, and which rows `WHERE` keeps. |
| How it works | Bangla | PASS | All facts match the Technical panel. The `LIKE` sentence with `_` and `%` has no cite of its own, and the cite at the end of the group covers it. Nothing is added. |
| Try it | Layman | PASS | The same example and results as in the Technical panel. Left out: the "predict each answer first" prompt, the full text of error 1451, and the exact `DELETE` statements. |
| Try it | Bangla | PASS | The same facts and results as in the Technical panel. Nothing is added. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. Left out: the UI and API, "total and status", "insert a row that breaks a key", "not a crash", and the "Try it" reference. "Glues your input" is a plainer wording of "joins strings". |
| How a tester uses it | Bangla | PASS | All facts match the Technical panel. Nothing is added. |
| Common mistakes | Layman | FAIL | The first item says "`= NULL` ... never matches, because comparing with `NULL` gives `NULL`" and cites S3. S3 does not say that `= NULL` returns no rows or never matches. S10 says that. The cite does not support the sentence. Left out: `<>` in the pattern item, "string" in "empty string". |
| Common mistakes | Bangla | FAIL | The first item says "`WHERE phone = NULL` কোনো row দেয় না" and cites S3. S3 does not support "returns no rows" (S10 does). The other items match the Technical panel. |
| What a tester can check | Layman | PASS | Same advice as the Technical callout. Left out: "or roll back" in the Clean-up item, and "the API said" wording. No source facts are given. |
| What a tester can check | Bangla | PASS | Same advice as the Technical callout. Nothing is added. |

Open FAILs: 2

FAILs in round 5: 2.

## Round 6 (2026-11-16)

### Voices fact check: sdet / sql-mysql (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Standard language for working with a database" is a looser wording of "standardized language used to access databases". Left out: "relational", "one or more tables", the "interactive or from a script" detail. |
| What it is | Bangla | PASS | Matches the Technical panel sentence by sentence. Left out: nothing of substance. |
| How it works | Layman | PASS | Every fact is in the Technical panel. "Cannot be undone" refers to the same ROLLBACK limit. Left out: "missing", the `<` and `<>` operators, `IS NOT NULL`, "whether they contain NULL or not", "any number of characters" (it says "any text"), `WHERE` as the row filter in joins. |
| How it works | Bangla | PASS | Matches the Technical panel. Left out: nothing of substance. |
| Try it | Layman | PASS | Same example code. Left out: "predict each answer first", the full ERROR 1451 text and the 23000 code, the step 2 detail (keep the LEFT JOIN, select only the name). |
| Try it | Bangla | PASS | Matches the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | FAIL | "the SQL is written first, with `?` where each value goes, and the values are bound in separately": the Technical panel says "define the SQL structure apart from its data values", not that the SQL is written first. This adds an order claim. Left out: "through the UI or the API", total and status, inserting a row that breaks a key, "not a crash", the "through the database API" detail. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: `<>` in the pattern rule, the "WHERE phone = NULL" example, "an empty string" (it says "''"), that `UPDATE` and `DELETE` are split by statement. |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Callout advice that mirrors the Technical callout. Left out: "after each important action", "a database account", "or roll back" in the clean-up item. |
| What a tester can check | Bangla | PASS | Callout advice that mirrors the Technical callout. Left out: nothing of substance. |

Open FAILs: 1

FAILs in round 6: 1.

## Round 7 (2026-11-16)

### Voices fact check: sdet / sql-mysql (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites match. Left out: "from one or more tables"; that `mysql` can be used from a script; that the database is relational. |
| What it is | Bangla | PASS | Faithful to the Technical panel. Left out: that `mysql` can be used from a script. |
| How it works | Layman | PASS | Every fact is in the Technical panel and the limit "by default" is kept. Left out: `ON` versus `WHERE` for keeping rows; `IS NOT NULL`, `<` and `<>`; that `COUNT(*)` counts rows whether or not they contain `NULL`; that `GROUP BY` groups for each value. "Skips NULL" for `COUNT(column)` is narrower than `COUNT(expr)`. |
| How it works | Bangla | FAIL | In Patterns, the sentence "`LIKE` pattern-এ `_` ... `%` ..." has no cite. The cite is only on the next sentence, which is about case-insensitivity. So the fact about `_` and `%` is uncited, but the Technical panel cites it to S14. Fix: put `<Cite n={14} />` at the end of that sentence. The other bullets match the Technical panel. Left out: nothing important. |
| Try it | Layman | PASS | The cites match. Item 3's results are what the example code prints. Left out: `COUNT(orders.id)` to `COUNT(*)` detail; the full error text; "predict each answer first"; that the right side `NULL` rows are kept. |
| Try it | Bangla | PASS | Matches the Technical panel, including the error text and the item steps. Nothing left out. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. Left out: UI or API; comparing total and status; "such as"; the Try it example; inserting a row that breaks a key; "not a crash"; the "joined strings" detail; the full `ROLLBACK` wording "when the check is done". |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. Nothing left out. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. "The empty row of an unmatched join" is a loose word for the `NULL` row and could be misread, but it does not add a fact. Left out: `expr = NULL`; "no phone" example; `<>` in the pattern rule; "all the rows" for each of `UPDATE` and `DELETE` is merged into one sentence. |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Nothing left out. |
| What a tester can check | Layman | PASS | Same advice as the Technical callout, shorter, with no added fact. Left out: "important action"; "the API said"; "in the reports". |
| What a tester can check | Bangla | PASS | Same advice as the Technical callout. Nothing left out. |

Open FAILs: 1

Not checked: I did not invoke the writing-style skill, so none of this text was checked against ASD-STE100. S9 states the "rejects the parent delete" behaviour for InnoDB, and the page does not name that limit.

FAILs in round 7: 1.

## Round 8 (2026-11-16)

### Voices fact check: sdet / sql-mysql (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "management", "relational", "from one or more tables", and use "from a script". "Working with" a database is a plainer word for "access". |
| What it is | Bangla | PASS | The meaning matches the Technical panel sentence by sentence. Left out: nothing of substance. |
| How it works | Layman | PASS | Every fact matches the Technical panel. Left out: that `WHERE` is the row-keeping part of a join; "missing" in the NULL definition; `IS NOT NULL`; `<` and `<>`; "(expr)" in `COUNT`; "any number of" characters; "for each value"; "including no child". "Never works" and "never hold" are the same as "cannot". |
| How it works | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| Try it | Layman | PASS | The set-up, results, and cites match the Technical panel. Left out: the "Connect with" wording; the exact `DELETE` statement; the full error text; the "predict first" detail; "keep the `LEFT JOIN`, select only the name". |
| Try it | Bangla | PASS | The meaning matches the Technical panel. The code is the same. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Every fact matches the Technical panel. Left out: "through the UI or the API"; "total and status"; the Try it reference; the step "insert a row that breaks a key"; "not a crash". |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Every fact matches the Technical panel. Left out: `<>` in the pattern rule; "Without `WHERE`" in the sentence itself (the heading says it); `WHERE phone = NULL` as the example. "Empty row" stands for the `NULL` row of the unmatched join. |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | It is the same advice as the Technical callout, and it has no cites. Left out: "After each important action"; "per group"; "or roll back". |
| What a tester can check | Bangla | PASS | It is the same advice as the Technical callout, and it has no cites. Left out: nothing of substance. |

Open FAILs: 0

Not checked: S3 item 3 and the item 4 and 5 outputs are the page's own example results. I marked them N/A and did not run the code.

FAILs in round 8: 0.

Open FAILs: 0
