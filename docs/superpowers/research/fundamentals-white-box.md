# Research notes: White-Box Techniques (`/fundamentals/white-box/`)

Check date: 2026-10-20. Chapter 7 of the Fundamentals module. The S-numbers below are the numbers of `page.sources` on the page (the order of the first `<Cite>`). The IDs in brackets are the IDs of `fundamentals-sources.md`.

## Sources

| S | Source | Where |
|---|---|---|
| S1 | ISTQB, Certified Tester Foundation Level Syllabus v4.0.1 (2024-09-15). https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf. Text read from `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`. | 2.2.1, 2.2.2, 3.1.1, 3.1.3, 3.2.2, 4.1, 4.3, 4.3.1, 4.3.2, 4.3.3, 4.4.3 |
| S2 | ISTQB Glossary: white-box testing (v2). https://glossary.istqb.org/en_US/term/white-box-testing [S32 in the sources file] | glossary API, read 2026-10-20 |
| S3 | ISTQB Glossary: statement coverage (v3). https://glossary.istqb.org/en_US/term/statement-coverage [S42] | glossary API |
| S4 | ISTQB Glossary: branch coverage (v2). https://glossary.istqb.org/en_US/term/branch-coverage [S43] | glossary API |
| S5 | ISTQB Glossary: decision coverage (v2). https://glossary.istqb.org/en_US/term/decision-coverage [S45] | glossary API |
| S6 | ISTQB Glossary: condition testing (v2). https://glossary.istqb.org/en_US/term/condition-testing [S44] | glossary API. Syllabus usage in the API data: only "Specialist - Automotive Software Tester" (2018 and v2.1). |
| S7 | ISTQB Glossary: atomic condition (v2). https://glossary.istqb.org/en_US/term/atomic-condition. NEW: it is not in `fundamentals-sources.md`. | glossary API (`GET /v1/terms/atomic-condition`, HTTP 200). Used by Advanced Test Analyst v4.0 and Advanced Technical Test Analyst v4.0. |
| S8 | ISTQB Glossary: unit testing (v1). https://glossary.istqb.org/en_US/term/unit-testing [S20] | glossary API |
| S9 | ISTQB Glossary: component integration testing (v3). https://glossary.istqb.org/en_US/term/component-integration-testing [S16] | glossary API |

The glossary is read through `https://api.glossary.istqb.org/v1/terms/<slug>` with the header `Accept-Language: en_US` (the term pages are a JavaScript app).

Not defined by ISTQB: none of the chapter terms. All terms are defined or named in S1 or the glossary. "Condition testing" is defined in the glossary (S6), but the Foundation syllabus does not cover it, so the page does not use the sentence "do not define this term".

## Topic 1: Why White-Box Testing Matters

| Claim | Source | Quote |
|---|---|---|
| White-box testing is structure-based and derives tests from the implementation or internal structure (code, architecture, work flows, data flows). | S1 2.2.2 | "derives tests from the system's implementation or internal structure (e.g., code, architecture, work flows, and data flows)" |
| Glossary: a test approach based on the internal structure. | S2 | "A test approach based on the internal structure of a component or system." |
| Glossary synonyms of white-box testing: clear-box, glass-box, structural testing (also code-based, logic-coverage, logic-driven, structure-based). The notes say "glassbox" and "clearbox". | S2 (API `synonyms`) | "clear-box testing, code-based testing, glass-box testing, logic-coverage testing, logic-driven testing, structural testing, structure-based testing" |
| White-box techniques are also called structure-based. | S1 4.1 | "(also known as structure-based techniques)" |
| Test cases depend on the design, so you create them after design or implementation. | S1 4.1 | "can only be created after the design or implementation of the test object" |
| Black-box: specified behavior, without reference to internal structure; test cases stay useful if only the implementation changes. | S1 4.1 | "if the implementation changes, but the required behavior stays the same, then the test cases are still useful" |
| Main objective of black-box testing: check behavior against specification. Main objective of white-box testing: cover the structure to an acceptable level. | S1 2.2.2 | "checking the system's behavior against its specifications"; "to cover the underlying structure by the tests to an acceptable level" |
| Strength: the whole implementation is considered, so defects can be found when the specification is vague, outdated, or incomplete. | S1 4.3.3 | "facilitates defect detection even when the software specification is vague, outdated or incomplete" |
| Weakness: defects of omission can be missed. | S1 4.3.3 | "may not detect the resulting defects of omission" |
| Static use: dry runs of code; code not ready to execute; pseudocode. | S1 4.3.3 | "can be used in static testing (e.g., during dry runs of code)"; "well suited to reviewing code not yet ready for execution" |
| Black-box alone gives no measure of code coverage; white-box coverage is objective and shows which tests to add. | S1 4.3.3 | "does not provide a measure of actual code coverage"; "objective measurement of coverage" |
| The syllabus covers statement testing and branch testing. Other white-box techniques are not discussed. | S1 4.3 | "focuses on two code-related white-box test techniques"; "These techniques are not discussed in this syllabus." |
| Four test types; all apply to all levels. | S1 2.2.2 | "All the four above mentioned test types can be applied to all test levels" |
| Unit testing is another name for component testing; integration splits into component integration and system integration. | S1 2.2.1 | "Component testing (also known as unit testing)" |

### Conflicts with the owner's notes (topic 1)

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "Statement Testing: Checks whether each important line or statement of code is executed at least once." | S1 4.3.1: coverage is "the number of statements exercised by the test cases divided by the total number of executable statements" | yes |
| "Condition Testing: ..." listed as a type of white-box testing | S1 4.3: the section "focuses on two ... techniques: statement testing, branch testing" | yes |
| "Unit Testing" and "Integration Testing" listed as types of white-box testing | S1 2.2.1: they are test levels. S1 2.2.2: white-box is a test type. | yes |
| "Branch / Decision Testing" | S4 and S5 are two glossary terms. S1 uses "branch testing". The names are close; the notes' sentence is a fair summary. | no |
| The seven "Why" bullets (SDET views: automation quality, root cause, supporting developers, production risk) | The syllabus gives no statement on these. They are the owner's views. They do not contradict S1. | no |

## Topic 2: Statement Coverage

| Claim | Source | Quote |
|---|---|---|
| Coverage items are executable statements. | S1 4.3.1 | "the coverage items are executable statements" |
| Glossary: the coverage of executable source statements. | S3 | "The coverage of executable source statements." |
| Coverage = statements exercised / total executable statements, as a percentage. | S1 4.3.1 | "number of statements exercised by the test cases divided by the total number of executable statements" |
| At 100 % every executable statement has run once; each defective statement runs and may cause a failure. | S1 4.3.1 | "each statement with a defect will be executed, which may cause a failure" |
| Data-dependent defects can stay hidden (division by zero). | S1 4.3.1 | "a division by zero that only fails when a denominator is set to zero" |
| 100 % statement coverage does not ensure all decision logic is tested; some branches may stay unexercised. | S1 4.3.1 | "may not exercise all the branches" |

Worked samples (the tutorial's own reasoning; no cite). Counts of executable statements: `findSqrt` 3 (the `if`, `return Math.sqrt(number)`, `return -1`; the `console.log` call is outside the function). Voter check 8 (`let`, three `if`, four `console.log`). `division` 1.

| Sample | Minimum tests for 100 % statement coverage | Reasoning |
|---|---|---|
| `findSqrt` | 2, for example 5 and -36 | the two returns exclude each other |
| Voter check | 4, for example 18, 101, 10, -1 | the four `console.log` calls exclude each other |
| `division` | 1 | one statement |

The minima were also checked by brute force: a hand-instrumented copy of each sample and a search over a set of candidate inputs for the smallest set with full coverage (script in the session scratchpad, not committed). Results: `findSqrt` 2 of 3 statements with the sample call (-36); voter check with `age = 18` runs 4 of 8 (the script counts 7 because it leaves out the `let` line; the `let` line also runs, so 4 of 8).

### Check of the owner's rules (statement)

Owner rules: nested = number of `else` + 1; un-nested = 2 with `else`, 1 without `else`.

| Sample | Rule gives | Minimum | Match |
|---|---|---|---|
| `findSqrt` (un-nested, no `else`) | 1 | 2 | NO. The `return` inside the `if` ends the function. |
| Voter check (nested; 3 `else`: outer `else`, `else if`, last `else`) | 4 | 4 | yes |
| `division` | 1 | 1 | yes |
| `makePositive` (Branch topic) | 1 | 1 | yes. One test (-5) runs all 3 statements. |
| `phoneCall` (Branch topic) | 1 | 1 | yes |
| `calculateDiscount` (Unit topic) | 1 | 3 | NO |
| `login` (Integration topic) | 1 | 3 | NO |

Repair (tutorial's own advice): count each early `return` like an `else`, and treat the code as nested (the nested rule, `else` + 1). Then `findSqrt` gives 1 + 1 = 2, `calculateDiscount` gives 2 + 1 = 3, `login` gives 2 + 1 = 3. The un-nested rule "2 when `else` are there" would still give 2, so the nested rule is needed. The other rows do not change.

Warning callouts in the `istqb` blocks: Statement (`findSqrt`), Unit (`calculateDiscount`), Integration (`login`). Fix round 1: the `notes` block of the Statement Coverage topic also has a warning callout for the rule (it gives 1 test for `findSqrt`, `calculateDiscount`, `login`; ISTQB statement coverage needs 2, 3, 3), ending with the required sentence.

### Conflicts with the owner's notes (topic 2)

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "100% statement coverage can not guarantee bug free software" (division sample) | S1 4.3.1 agrees: "exercising a statement with a test case will not detect defects in all cases" | no |
| The statement rules | The syllabus has no rule to count tests. The rules are rules of thumb. A wrong number for three samples is shown in the `istqb` blocks. | yes, in the `notes` block too (fix round 1, review finding 1) |

## Topic 3: Branch Coverage

| Claim | Source | Quote |
|---|---|---|
| A branch is a transfer of control between two nodes in the control flow graph; unconditional or conditional. | S1 4.3.2 | "A branch is a transfer of control between two nodes in the control flow graph" |
| Glossary: the coverage of branches in a control flow graph. | S4 | "The coverage of branches in a control flow graph." |
| Conditional branches: true/false of `if...then`, `switch/case` outcome, exit or continue a loop. | S1 4.3.2 | "a true or false outcome from an 'if...then' decision, an outcome from a switch/case statement, or a decision to exit or continue in a loop" |
| Coverage = branches exercised / total branches, as a percentage. | S1 4.3.2 | "number of branches exercised by the test cases divided by the total number of branches" |
| At 100 % all branches, unconditional and conditional, are exercised. | S1 4.3.2 | "all branches in the code, unconditional and conditional, are exercised" |
| Still may miss defects that need a specific path. | S1 4.3.2 | "may not detect defects requiring the execution of a specific path in a code" |
| Branch coverage subsumes statement coverage, not the reverse. | S1 4.3.2 | "any set of test cases achieving 100% branch coverage also achieves 100% statement coverage (but not vice versa)" |
| Glossary: decision coverage = coverage of decision outcomes. | S5 | "The coverage of decision outcomes." |
| Typical decisions: `if`, `switch/case`, loops (a default value is not named). | S1 4.3.2 | as above |

Worked samples (the tutorial's own reasoning): the tutorial counts decision outcomes (true and false of each decision). Counting unconditional branches also does not change the minimum number of tests for these samples (every set that covers all decision outcomes also runs every statement, so it takes every straight-line branch).

| Sample | Decision outcomes | Minimum tests | Reasoning |
|---|---|---|---|
| `makePositive` | 2 | 2 (-5 and 5). Test -5 alone: 3 of 3 statements, 1 of 2 outcomes. | true and false exclude each other |
| `phoneCall` | 2, if the default value counts as a decision | 2 (the two calls of the sample) | with and without argument |
| Voter check | 6 (three decisions) | 4 | outcomes "outer false", "voter true", "`age>100` true", "`age>100` false" each end the run with a different message |
| `division` | 0 conditional | 1 | straight-line code |

### Check of the owner's rules (branch)

Owner rules: nested = count of `if` + 1; un-nested = `DC=2` always.

| Sample | Rule gives | Minimum | Match |
|---|---|---|---|
| `findSqrt` | 2 | 2 | yes |
| Voter check (3 `if`: `if`, inner `if`, `else if`) | 4 | 4 | yes |
| `makePositive` | 2 | 2 | yes |
| `phoneCall` | 2 | 2 | yes, if the default value counts as a decision |
| `division` | 2 | 1 | NO. No decision. The rule needs at least one decision. |
| `calculateDiscount` (Unit topic) | 2 | 3 | NO |
| `login` (Integration topic) | 2 | 3 | NO |

Repair (tutorial's own advice): count each early `return` like an `else` and treat the code as nested: the number of `if` plus 1 gives 3 for both `calculateDiscount` and `login`. For independent `if` statements in a row, with no `return`, the "always 2" rule holds (two tests: all true, all false). The "number of `if` + 1" rule would give a wrong number there. So the rule that works for all samples is the one by reasoning (mutually exclusive outcomes).

Warning callouts in the `istqb` blocks: Branch (`division`), Unit, Integration. Fix round 1: the `notes` block of the Branch Coverage topic also has a warning callout ("DC=2 always" gives 2 for `division`, `calculateDiscount`, `login`; branch coverage needs 1, 3, 3), ending with the required sentence.

### Conflicts with the owner's notes (topic 3)

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "Note 2: 100% statement coverage can not guarantee 100% decision/branch coverage" | S1 4.3.2 agrees ("but not vice versa") | no |
| "DC=2 always" (branch rule) | The syllabus has no rule to count tests. The rule gives a wrong number for `division`, `calculateDiscount`, `login`. | yes, in the `notes` block too (fix round 1, review finding 2) |
| `phoneCall` as a branch example | The syllabus names `if`, `switch/case`, loops. A default value is not named. The `istqb` block calls the reading the tutorial's own. | no |

## Topic 4: Condition Testing

| Claim | Source | Quote |
|---|---|---|
| The Foundation syllabus names only statement testing and branch testing. | S1 4.3 | "this section focuses on two code-related white-box test techniques: Statement testing, Branch testing" |
| Glossary: condition testing is a white-box technique whose test conditions are outcomes of atomic conditions. | S6 | "A white-box test technique in which test conditions are outcomes of atomic conditions." |
| The glossary shows the term for a specialist syllabus only. | S6 (API data `syllabuses`) | "Specialist - Automotive Software Tester" (2018 and v2.1) |
| An atomic condition has no logical operators. | S7 | "A condition that does not contain logical operators." |

Worked analysis (the tutorial's own; JavaScript `&&` and `||` short-circuit).

| Sample | Atomic outcomes | Result |
|---|---|---|
| Voter check: `age>=0`, `age>=18`, `age<=100`, `age>100` | 8 | Tests 18, 101, 10, -1 cover all 8. Minimum 4 (the four outcomes `age>=0` false, `age>=18` false, `age<=100` true, `age>100` true need four different ranges of `age`). |
| `calculateDiscount` second `if` | `discountPercent < 0` and `> 100`, 4 outcomes | 120 and 10 give 2 of 2 decision outcomes and 3 of 4 atomic outcomes. -5 adds `< 0` true. |
| `calculateDiscount` (all three atomic conditions, with `price <= 0`) | 6 | Owner tests (4) reach 5 of 6. Minimum 4: (0,10), (1000,120), (1000,-5), (1000,10). |

Brute-force check (hand-instrumented sample, same script): `calculateDiscount` minimum for atomic outcomes = 4; the owner's four tests reach 5 of 6; the voter check needs 4.

### Conflicts with the owner's notes (topic 4)

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "Condition Testing: Checks individual conditions inside complex logic ..." | S1 4.3: only statement and branch testing. S6: defined in the glossary, for a specialist syllabus. | yes (notes block of topic 4, and topic 1) |

Note: the owner's notes have only this one line for condition testing (the same line as in the list of types). The `notes` block of topic 4 repeats it, because it is the only owner text for the topic.

## Topic 5: Unit Testing

| Claim | Source | Quote |
|---|---|---|
| Component testing, also known as unit testing, tests components in isolation. | S1 2.2.1 | "Component testing (also known as unit testing) focuses on testing components in isolation." |
| It often needs test harnesses or unit test frameworks. | S1 2.2.1 | "often requires specific support, such as test harnesses or unit test frameworks" |
| Developers normally run it in their development environments. | S1 2.2.1 | "normally performed by developers in their development environments" |
| Glossary: a test level for the smallest part of code testable in isolation. | S8 | "A test level that focuses on evaluating the smallest part of code testable in isolation." |
| You can apply white-box testing at all levels. | S1 2.2.2 | "All the four above mentioned test types can be applied to all test levels" |
| White-box testing may miss a requirement that the code does not implement ("may", not "cannot"). | S1 4.3.3 | "if the software does not implement one or more requirements, white-box testing may not detect the resulting defects of omission" |

Worked analysis of `calculateDiscount` (the tutorial's own; hand-instrumented copy and brute force). Statements: 6 (`if` price, `return "Invalid price"`, `if` discount, `return "Invalid discount"`, `const discountAmount`, `return price - discountAmount`). Decision outcomes: 4. Atomic outcomes: 6 (`price <= 0`, `discountPercent < 0`, `discountPercent > 100`, each true and false).

| Test | Statements | Decision outcomes | Atomic outcomes |
|---|---|---|---|
| (1000, 10) | 4 | 2 (both false) | 3 (all false) |
| (500, 20) | same as test 1 | same | same |
| (0, 10) | 2 | 1 | 1 |
| (1000, 120) | 3 | 2 | 3 |
| all four | 6 of 6 | 4 of 4 | 5 of 6 (`discountPercent < 0` true is missing) |

Minimum sets: statement 3, branch 3, atomic condition 4 (brute force agrees: 3, 3, 4).

The sentence "Coverage ... does not show that the expected results are right" is not from S1. It is in the tutorial's own tip callout, with no cite (fix round 1).

Rule check: statement rule (un-nested, no `else`) gives 1, minimum 3: NO. Branch rule (`DC=2`) gives 2, minimum 3: NO. Repair: count each early `return` like an `else`.

### Conflicts with the owner's notes (topic 5)

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "Unit testing ensures to pass a function with several datasets." | S1 2.2.1 and S8: unit testing is a test level that tests components in isolation. The sentence is imprecise, not a conflict. | no |

## Topic 6: Integration Testing in Code

| Claim | Source | Quote |
|---|---|---|
| Component integration testing focuses on the interfaces and interactions between components. | S1 2.2.1 | "focuses on testing the interfaces and interactions between components" |
| Glossary: the integration testing of components. | S9 | "The integration testing of components." |
| It depends on the integration strategy (bottom-up, top-down, big-bang). | S1 2.2.1 | "heavily dependent on the integration strategy like bottom-up, top-down or big-bang" |
| System integration testing tests the interfaces between the system under test and other systems and external services (the page rewords this: "the interfaces that connect your system to other systems and to external services"). | S1 2.2.1 | "focuses on testing the interfaces of the system under test and other systems and external services" |
| It needs suitable test environments, preferably similar to the operational environment (page: "They should preferably resemble the operational environment"). The word "preferably" is kept; the page does not say "needs similar". | S1 2.2.1 | "requires suitable test environments preferably similar to the operational environment" |

Worked analysis of `login` (the tutorial's own). Statements: 6 (`const user`, `if (!user)`, `return "User not found"`, `if (user.password !== password)`, `return "Invalid password"`, `return "Login successful"`). Decision outcomes: 4. The three returns exclude each other, so the minimum is 3 for statement and branch coverage (brute force agrees). The owner's three tests are the minimum set.

Rule check: statement rule gives 1, minimum 3: NO. Branch rule gives 2, minimum 3: NO. Repair: count each early `return` like an `else`.

Sample change: the email of the notes (a real name) became `user@example.com` in both versions. The email `unknown@test.com` is left as in the notes (a generic address; no real person).

### Conflicts with the owner's notes (topic 6)

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "Integration Testing means testing whether two or more modules, components, APIs, services, or systems work together correctly." | S1 2.2.1: two levels (component integration and system integration). The sentence covers both; no conflict. | no |
| "`userService` → finds user from database" (the sample uses an array, not a database) | not an ISTQB point | no. The `istqb` block says the list is an array in memory. |

## Topic 7: White-Box Review Checklist

| Claim | Source | Quote |
|---|---|---|
| White-box techniques can be used in static testing, for example dry runs of code. | S1 4.3.3 | "can be used in static testing (e.g., during dry runs of code)" |
| Source code can be examined by static testing. | S1 3.1.1 | "Examples include requirement specification documents, source code, test plans" |
| Static testing finds defects directly; it may more easily find defects on rarely executed paths. | S1 3.1.3 | "Static testing finds defects directly"; "may more easily detect defects that lay on paths through the code that are rarely executed" |
| In an individual review, a reviewer applies a technique such as checklist-based reviewing. | S1 3.2.2 | "applying one or more review techniques (e.g., checklist-based reviewing, scenario-based reviewing)" |
| The syllabus gives these rules for the checklists of checklist-based testing; the page uses them for a review checklist and says so (the tutorial's own use). Checklists should not hold items that a tool can check, items better as entry or exit criteria, or items that are too general. | S1 4.4.3 | "should not contain items that can be checked automatically, items better suited as entry criteria, exit criteria, or items that are too general" |
| Items are often questions ("often", not a rule) and it should be possible to check each item separately and directly. | S1 4.4.3 | "often phrased in the form of a question. It should be possible to check each item separately and directly." |
| Update the checklist from defect analysis; keep it short. | S1 4.4.3 | "checklists should be regularly updated based on defect analysis"; "avoid letting the checklist become too long" |

The table of the eight items against these rules is the tutorial's own review (a `note` callout, no cite).

### Conflicts with the owner's notes (topic 7)

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "Is the business logic implemented correctly?" | S1 4.4.3: items that are "too general" should stay out. | no (the tutorial's own review is in the `istqb` block) |
| "Are all conditions (if/else, switch cases, loops) properly covered?" | S1 4.4.3: items "that can be checked automatically" should stay out. A coverage tool measures this. | no (same) |

The owner's second white-box list ("Generic checklist for whitebox testing") belongs to the `experience-based` chapter (topic "White-Box Checklist"), so it is not used here.

## Owner-note placement

| Owner text | Topic |
|---|---|
| "Whitebox Testing Methods": intro, why, types | 1 |
| "Statement, Condition and Decision coverage": examples 1 and 2, statement rules, Note 1 | 2 |
| Note 2, its two examples, branch rules | 3 |
| The line "Condition Testing" of the types list | 4 |
| "Unit Testing" | 5 |
| "Integration Testing" (with the email of the notes changed to `user@example.com`) | 6 |
| "Checklist/ Code Review for whitebox testing" | 7 |

No owner image belongs to this chapter (the image table has no white-box row).

## Spelling and format fixes in the notes blocks

- "can not guarantee" became "cannot guarantee" (two notes).
- The sub-headings "### 1. User Service", "### 2. Auth Service", "### 3. Integration Test" became bold labels.
- The rules of the notes are in inline code or a list (formatting only; the words are the same).
- The email of the notes (a real name) became `user@example.com`.
