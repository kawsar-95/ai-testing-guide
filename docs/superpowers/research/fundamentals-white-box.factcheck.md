# Fact-check: White-Box Techniques (`white-box`)

| Field | Value |
|---|---|
| Chapter | 7, `white-box`, "White-Box Techniques" (`content/fundamentals/white-box.mdx`, commit cc64b3b) |
| Date | 2026-10-20 |
| Round | 2 (round 1: commit cc64b3b; round 2: commit c232c39) |
| Checker | An independent agent. It did not write the chapter. |
| Method | Each `<Cite n>` was checked against source n itself: the syllabus text (`ctfl-v4.0.1.txt`) or the glossary API (`https://api.glossary.istqb.org/v1/terms/<slug>`, header `Accept-Language: en_US`, read on 2026-10-20). The writer's notes were not used as evidence. The minimum test counts were computed from the code before the page was read. |

## Sources

| n | Source | Checked against |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 | Syllabus text, sections 2.2.1, 2.2.2, 3.1.1, 3.1.3, 3.2.2, 4.1, 4.3, 4.3.1, 4.3.2, 4.3.3, 4.4.3 |
| 2 | ISTQB Glossary: white-box testing | API, `white-box-testing` v2 |
| 3 | ISTQB Glossary: statement coverage | API, `statement-coverage` v3 |
| 4 | ISTQB Glossary: branch coverage | API, `branch-coverage` v2 |
| 5 | ISTQB Glossary: decision coverage | API, `decision-coverage` v2 |
| 6 | ISTQB Glossary: condition testing | API, `condition-testing` v2. Syllabus usage in the API data: "Specialist - Automotive Software Tester" (2018, v2.1) only. |
| 7 | ISTQB Glossary: atomic condition | API, `atomic-condition` v2 (HTTP 200). Not in `fundamentals-sources.md`. The term page URL `https://glossary.istqb.org/en_US/term/atomic-condition` returns HTTP 200. Syllabus usage: Advanced Test Analyst v4.0, Advanced Technical Test Analyst v4.0. |
| 8 | ISTQB Glossary: unit testing | API, `unit-testing` v1 |
| 9 | ISTQB Glossary: component integration testing | API, `component-integration-testing` v3 |

## Table 1: Cited claims

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | Why | White-box testing derives tests from the internal structure. | 1 | PASS | "derives tests from the system's implementation or internal structure" (2.2.2) | |
| 2 | Why | Glossary: a test approach based on the internal structure. | 2 | PASS | "A test approach based on the internal structure of a component or system." | |
| 3 | Why | Code, architecture, work flows, data flows are examples of the structure. | 1 | PASS | "(e.g., code, architecture, work flows, and data flows)" (2.2.2) | |
| 4 | Why | Also called structure-based techniques. | 1 | PASS | "White-box test techniques (also known as structure-based techniques)" (4.1) | |
| 5 | Why | Test cases depend on the design; create them only after design or code exists. | 1 | PASS | "As the test cases are dependent on how the software is designed, they can only be created after the design or implementation" (4.1) | |
| 6 | Why | Table, test basis: black-box = specified behavior without internal structure; white-box = internal structure and processing. | 1, 1 | PASS | "analysis of the specified behavior of the test object without reference to its internal structure"; "analysis of the test object's internal structure and processing" (4.1) | |
| 7 | Why | Table, other name: specification-based / structure-based. | 1, 1 | PASS | "also known as specification-based techniques"; "also known as structure-based techniques" (4.1) | |
| 8 | Why | Table, main objective: behavior against specification / cover the structure to an acceptable level. | 1, 1 | PASS | "checking the system's behavior against its specifications"; "to cover the underlying structure by the tests to an acceptable level" (2.2.2) | |
| 9 | Why | Table, code changes but behavior stays: black-box tests stay useful; white-box tests depend on the design. | 1, 1 | PASS | "if the implementation changes, but the required behavior stays the same, then the test cases are still useful"; "dependent on how the software is designed" (4.1) | |
| 10 | Why | Strength: whole implementation; finds defects when the specification is vague, outdated, incomplete. | 1 | PASS | "the entire software implementation is taken into account ... even when the software specification is vague, outdated or incomplete" (4.3.3) | |
| 11 | Why | Weakness: may miss defects of omission. | 1 | PASS | "white-box testing may not detect the resulting defects of omission" (4.3.3) | |
| 12 | Why | Static use: dry runs; code not ready to run; pseudocode. | 1 | PASS | "can be used in static testing (e.g., during dry runs of code) ... reviewing code not yet ready for execution ... pseudocode" (4.3.3) | |
| 13 | Why | Black-box alone gives no code coverage measure; white-box coverage is objective and shows extra tests. | 1 | PASS | "Performing only black-box testing does not provide a measure of actual code coverage ... objective measurement of coverage ... allow additional tests to be generated" (4.3.3) | |
| 14 | Why | The syllabus covers two techniques: statement and branch testing. | 1 | PASS | "this section focuses on two code-related white-box test techniques: Statement testing, Branch testing" (4.3) | |
| 15 | Why | Other techniques exist (safety-critical); not discussed. | 1 | PASS | "more rigorous white-box test techniques that are used in some safety-critical ... These techniques are not discussed in this syllabus." (4.3) | |
| 16 | Why | Four test types; each applies at every level. | 1 | PASS | "the following four test types are addressed"; "All the four above mentioned test types can be applied to all test levels" (2.2.2) | |
| 17 | Why | Table rows: statement testing and branch testing are syllabus techniques. | 1, 1 | PASS | Same quote as row 14 (4.3) | |
| 18 | Why | Unit testing is another name for component testing (a level). | 1 | PASS | "Component testing (also known as unit testing)" (2.2.1) | |
| 19 | Why | Integration testing: the syllabus "splits it" into component integration and system integration testing. | 1 | PASS | "the following five test levels are described: Component ... Component integration testing ... System integration testing" (2.2.1) | The syllabus lists two separate levels; it does not name one "integration testing" level. "Splits" is a fair paraphrase. |
| 20 | Statement | Coverage items are executable statements. | 1 | PASS | "In statement testing, the coverage items are executable statements." (4.3.1) | |
| 21 | Statement | Glossary: coverage of executable source statements. | 3 | PASS | "The coverage of executable source statements." | |
| 22 | Statement | Coverage = statements exercised / executable statements, as a percentage. | 1 | PASS | "number of statements exercised by the test cases divided by the total number of executable statements in the code, and is expressed as a percentage" (4.3.1) | |
| 23 | Statement | At 100 %, each statement ran; a defective statement ran and may cause a failure. | 1 | PASS | "each statement with a defect will be executed, which may cause a failure demonstrating the presence of the defect" (4.3.1) | |
| 24 | Statement | Two limits: data-dependent defects (division by zero); not all decision logic / branches. | 1 | PASS | "may not detect defects that are data dependent (e.g., a division by zero ...) ... does not ensure that all the decision logic has been tested" (4.3.1) | |
| 25 | Statement | `division(6, 3)` gives 100 % but misses the defect; it fails only when `y` is 0. | 1 | PASS | "a division by zero that only fails when a denominator is set to zero" (4.3.1) | |
| 26 | Branch | A branch is a transfer of control between two nodes; unconditional or conditional. | 1 | PASS | "A branch is a transfer of control between two nodes in the control flow graph ... either unconditional (i.e., straight-line code) or conditional (i.e., a decision outcome)." (4.3.2) | Fact correct. Copies 10 words; see copy check C1. |
| 27 | Branch | Glossary: coverage of branches in a control flow graph. | 4 | PASS | "The coverage of branches in a control flow graph." | |
| 28 | Branch | Conditional branches: if...then true/false, switch/case outcome, loop exit/continue. | 1 | PASS | "true or false outcome from an "if...then" decision, an outcome from a switch/case statement, or a decision to exit or continue in a loop" (4.3.2) | |
| 29 | Branch | Coverage = branches exercised / total branches, as a percentage. | 1 | PASS | "number of branches exercised by the test cases divided by the total number of branches and is expressed as a percentage" (4.3.2) | |
| 30 | Branch | At 100 %, all branches, unconditional and conditional, are exercised. | 1 | PASS | "all branches in the code, unconditional and conditional, are exercised by test cases" (4.3.2) | |
| 31 | Branch | May still miss a defect that needs a specific path. | 1 | PASS | "may not detect defects requiring the execution of a specific path in a code" (4.3.2) | |
| 32 | Branch | Branch coverage subsumes statement coverage; not the reverse. | 1 | PASS | "Branch coverage subsumes statement coverage ... (but not vice versa)." (4.3.2) | |
| 33 | Branch | Glossary: decision coverage = coverage of decision outcomes. | 5 | PASS | "The coverage of decision outcomes." | |
| 34 | Branch | makePositive: full statement coverage while branch coverage is not full is the case the syllabus describes. | 1 | PASS | "100% statement coverage does not ensure that all the decision logic has been tested as, for instance, it may not exercise all the branches" (4.3.1) | |
| 35 | Branch | The syllabus names if, switch/case, loops as typical decisions. | 1 | PASS | Same quote as row 28 (4.3.2) | |
| 36 | Condition | The Foundation syllabus does not cover condition testing; its white-box section names only statement and branch testing. | 1 | PASS | Same quote as row 14; "These techniques are not discussed in this syllabus." (4.3) | The syllabus text has no "condition testing", "condition coverage", or "atomic" (except one line about atomic learning objectives). |
| 37 | Condition | Glossary: condition testing is a white-box technique; test conditions are outcomes of atomic conditions. | 6 | PASS | "A white-box test technique in which test conditions are outcomes of atomic conditions." | |
| 38 | Condition | The glossary shows the term only for the Automotive Software Tester specialist syllabus. | 6 | PASS | API `syllabuses`: "Specialist - Automotive Software Tester" (2018), (v2.1) | |
| 39 | Condition | An atomic condition has no logical operators. | 7 | PASS | "A condition that does not contain logical operators." | New source; URL and API checked (HTTP 200). |
| 40 | Unit | Component testing, also known as unit testing, tests components in isolation. | 1 | PASS | "Component testing (also known as unit testing) focuses on testing components in isolation." (2.2.1) | |
| 41 | Unit | Often needs test harnesses or unit test frameworks. | 1 | PASS | "It often requires specific support, such as test harnesses or unit test frameworks." (2.2.1) | 9-word run, under the limit. |
| 42 | Unit | Developers normally run it in their development environments. | 1 | PASS | "normally performed by developers in their development environments" (2.2.1) | |
| 43 | Unit | Glossary: a test level for the smallest part of code testable in isolation. | 8 | PASS | "A test level that focuses on evaluating the smallest part of code testable in isolation." | |
| 44 | Unit | White-box testing can be applied at any test level. | 1 | PASS | "All the four above mentioned test types can be applied to all test levels" (2.2.2) | |
| 45 | Unit | "White-box tests cannot find a requirement that the code does not implement." | 1 | FAIL | "if the software does not implement one or more requirements, white-box testing may not detect the resulting defects of omission" (4.3.3) | Says more than the source: "may not detect", not "cannot". Line 557. Fix: "White-box tests may miss a requirement that the code does not implement." (Line 85 says it correctly.) |
| 46 | Integration | Component integration testing focuses on interfaces and interactions between components. | 1 | PASS | "focuses on testing the interfaces and interactions between components" (2.2.1) | |
| 47 | Integration | Glossary: the integration testing of components. | 9 | PASS | "The integration testing of components." | |
| 48 | Integration | Depends heavily on the integration strategy: bottom-up, top-down, big-bang. | 1 | PASS | "heavily dependent on the integration strategy like bottom-up, top-down or big-bang" (2.2.1) | |
| 49 | Integration | System integration testing focuses on interfaces of the SUT and other systems and external services. | 1 | PASS | "focuses on testing the interfaces of the system under test and other systems and external services" (2.2.1) | Fact correct. Copies 10 words; see copy check C2. |
| 50 | Integration | "It needs test environments that are similar to the operational environment." | 1 | FAIL | "requires suitable test environments preferably similar to the operational environment" (2.2.1) | Says more than the source: the syllabus says "preferably" similar. Line 656. Fix: "It needs suitable test environments, preferably similar to the operational environment." |
| 51 | Integration | Table: two modules or classes of one program = component integration testing. | 1 | PASS | "interfaces and interactions between components" (2.2.1) | Modules and classes as components is a fair reading. |
| 52 | Integration | Table: your system and another system or external service = system integration testing. | 1 | PASS | Same quote as row 49 | |
| 53 | Checklist | White-box techniques work without running code; dry runs are an example. | 1 | PASS | "White-box test techniques can be used in static testing (e.g., during dry runs of code)." (4.3.3) | |
| 54 | Checklist | Source code is a work product that static testing can examine. | 1 | PASS | "Examples include requirement specification documents, source code, test plans" (3.1.1) | |
| 55 | Checklist | Static testing finds defects directly; may more easily find defects on rarely executed or hard-to-reach paths. | 1 | PASS | "Static testing finds defects directly ... may more easily detect defects that lay on paths through the code that are rarely executed or hard to reach" (3.1.3) | 8-word run, under the limit. |
| 56 | Checklist | Each reviewer works alone first; may use checklist-based reviewing. | 1 | PASS | "Every reviewer performs an individual review ... by applying one or more review techniques (e.g., checklist-based reviewing, scenario-based reviewing)" (3.2.2) | |
| 57 | Checklist | Rule: leave out automatic items, entry/exit-criteria items, too-general items. | 1 | PASS | "Checklists should not contain items that can be checked automatically, items better suited as entry criteria, exit criteria, or items that are too general" (4.4.3) | 4.4.3 is about checklist-based testing; the page applies it to a review checklist. See the review. |
| 58 | Checklist | Rule: "Write items as questions." | 1 | FAIL | "Checklist items are often phrased in the form of a question." (4.4.3) | Says more than the source: "often", not a rule. Line 776. Fix: "Items are often questions. A reviewer can check each item separately and directly." |
| 59 | Checklist | Each item can be checked separately and directly. | 1 | PASS | "It should be possible to check each item separately and directly." (4.4.3) | |
| 60 | Checklist | Update from defect analysis; keep it short. | 1 | PASS | "checklists should be regularly updated based on defect analysis. However, care should be taken to avoid letting the checklist become too long" (4.4.3) | |

All 62 `<Cite>` tags are covered by the rows above (several rows hold two cites of one table row).

## Table 2: Warning callouts in the notes blocks

| # | Line | Callout (short) | Verdict | Note |
|---|---|---|---|---|
| W1 | 51 | ISTQB counts every executable statement, not only the important ones. | PASS | Owner line 43: "each important line or statement". S1 4.3.1: "the coverage items are executable statements". Ending sentence exact. |
| W2 | 57 | Foundation syllabus covers only statement and branch testing; condition testing is outside it. | PASS | Owner line 45 lists condition testing as a type. S1 4.3. Ending sentence exact. |
| W3 | 63 | Unit and integration testing are test levels, not types of white-box testing. | PASS | Owner lines 46–47. S1 2.2.1 (levels), 2.2.2 (white-box is a test type). Ending sentence exact. |
| W4 | 410 | Condition testing is not in the Foundation syllabus. | PASS | Owner line 406. S1 4.3. Ending sentence exact. |

Not a fact-check FAIL, but a gap for the review: the notes' rules for the minimum number of tests (Statement Coverage notes, lines 143–152; Branch Coverage notes, lines 304–310) give wrong counts for `findSqrt`, `division`, `calculateDiscount`, and `login` (see "Minimum test counts" below). The notes blocks have no warning callout for them. The warnings are only in the istqb blocks (lines 265–269, 394–398, 551–555, 744–748).

## Table 3: "Not defined" and "not in the syllabus" statements

The page does not use the sentence "The ISTQB syllabus and glossary do not define this term." This is correct: every term of the chapter is a glossary entry or a syllabus term. "Condition testing" is a glossary entry (S6), so the generic sentence would be wrong.

| # | Line | Statement | Verdict | Note |
|---|---|---|---|---|
| N1 | 99 | Condition testing: "Not in the syllabus." | PASS | No occurrence of "condition testing" or "condition coverage" in the syllabus text. 4.3 names only two techniques. |
| N2 | 418 | "The Foundation syllabus does not cover condition testing." | PASS | Exact and correct. It says "Foundation syllabus", not "ISTQB", and the next paragraph gives the glossary definition (S6). |
| N3 | 183 | "The syllabus gives no rule to count tests." | PASS | 4.3.1 and 4.3.2 define coverage only. No minimum-test rule in the syllabus text. |
| N4 | 367 | A default value is not on the syllabus list of typical decisions. | PASS | 4.3.2 lists `if...then`, `switch/case`, loops. |

## Table 4: Uncited claims in istqb blocks

| # | Line | Claim | Verdict | Note |
|---|---|---|---|---|
| U1 | 103 | Unit and integration tests are test levels; their tests can be designed with white-box techniques. | PASS | A summary of rows 16–19, cited just above. |
| U2 | 181–190, 204–243, 255–269 | Statement counts and minimum tests (findSqrt, voter check, division), the rule check. | PASS | Marked as the tutorial's own (tip callout at 181, warning at 267). Arithmetic checked: see below. |
| U3 | 330 | Counting only decision outcomes is the tutorial's own choice; minimums stay the same. | PASS | Marked "the tutorial's own choice". True for all samples. |
| U4 | 343–398 | makePositive, phoneCall, voter-check branch tables and the rule check. | PASS | Reasoning; the default-value reading is marked "the tutorial's own" (367). Arithmetic checked. |
| U5 | 422 | `&&` joins two atomic conditions; each has two outcomes. | PASS | An application of the S7 definition to the sample, not a new ISTQB fact. |
| U6 | 426 | JavaScript `&&` and `||` skip the right side (short-circuit). | PASS | Inside `<Callout type="note" title="The tutorial's own explanation">`, which says the worked examples are the tutorial's own analysis. Fact is correct (ECMAScript logical operators). |
| U7 | 430–461 | Condition-outcome tables (voter check, `calculateDiscount` second `if`). | PASS | Below the "tutorial's own explanation" callout. Arithmetic checked. |
| U8 | 529–555 | calculateDiscount coverage table and minimum sets. | PASS | Marked by "(by reasoning)" and the warning "This check is the tutorial's own". Arithmetic checked. |
| U9 | 557 | "Coverage also does not show that the expected results are right." | PASS | A general claim, not stated as an ISTQB fact. See the review (Minor): move it into the tutorial's own tip. |
| U10 | 729 | The sample is a component integration test; with a real database service or external service it would be system integration testing. | PASS | Application of rows 46–52. See the review (Minor) on "database service". |
| U11 | 733–748 | login coverage table and minimums. | PASS | Marked "This check is the tutorial's own". Arithmetic checked. |
| U12 | 771 | A code review checklist is a checklist for static testing. | PASS | Follows from rows 54 and 56. |
| U13 | 779–794 | The review of the notes' checklist. | PASS | In a note callout titled "The tutorial's own review of the checklist". |

## Minimum test counts (independent check, CTFL 4.3.1–4.3.2)

Computed from the owner's code before reading the page. Statement: the executable statements; branch: the decision outcomes (adding the unconditional branches does not change any minimum).

| Sample | Executable statements | Statement min | Owner rule gives | Branch min | Owner rule gives | Page says |
|---|---|---|---|---|---|---|
| findSqrt | 3 | 2 (two returns exclude each other) | 1 (un-nested, no else): wrong | 2 | 2: right | Same. PASS |
| voter check | 8 | 4 (four messages exclude each other) | 4 (3 else + 1): right | 4 | 4 (3 if + 1): right | Same. PASS |
| division | 1 | 1 | 1: right | 1 (no decision) | 2 (DC=2 always): wrong | Same. PASS |
| makePositive | 3 | 1 | 1: right | 2 | 2: right | Same. PASS |
| phoneCall | 1 | 1 | 1: right | 2 if the default value counts as a decision | 2: right | Same, reading marked as the tutorial's own. PASS |
| calculateDiscount | 6 | 3 (three returns) | 1: wrong | 3 | 2: wrong | Same. PASS |
| login | 6 | 3 (three returns) | 1: wrong | 3 | 2: wrong | Same. PASS |

Other numbers checked: the owner's 4 calculateDiscount tests reach 6/6 statements, 4/4 decision outcomes, 5/6 atomic outcomes (`discountPercent < 0` true is never exercised). Atomic-outcome minimum for calculateDiscount: 4. Voter-check atomic outcomes: 8, covered by the 4 tests; minimum 4. Each per-test cell of the tables at lines 206–210, 236–243, 343–347, 373–378, 434–439, 455–461, 533–549, 735–740 is correct.

## Copy check (syllabus, runs of 10 or more words)

Method: `scripts/linux_overlap.py`-style word n-grams of the MDX (code fences removed) against `ctfl-v4.0.1.txt`, n = 10. No run of 11 or more words.

| # | Line | Copied run | Verdict |
|---|---|---|---|
| C1 | 316 | "a branch is a transfer of control between two nodes" (10 words, 4.3.2) | FAIL |
| C2 | 656 | "the system under test and other systems and external services" (10 words, 2.2.1) | FAIL |

Fixes: C1, for example "A branch moves control from one node of the control flow graph to another." C2, for example "It tests the interfaces that connect your system to other systems and to external services."

Runs of 8–9 words (under the limit, no FAIL): "support such as test harnesses or unit test frameworks" (506), "that are rarely executed or hard to reach" (769), "level component testing also known as unit testing" (506).

## Result of round 1

FAILs: rows 45, 50, 58 (claims say more than the source); C1, C2 (copy check). Round 1 ended with 5 open FAILs.

## Round 2 (commit c232c39)

The diff `0f1c59c..c232c39` changes only `content/fundamentals/white-box.mdx` and the writer's notes. Line numbers below are of c232c39. The page now has 63 `<Cite>` tags (one new, row R2-1).

### Re-check of the round-1 FAILs

| # | Line | New text (short) | Cite | Verdict | Quote from the source (≤ 30 words) |
|---|---|---|---|---|---|
| 45 | 569 | "White-box tests may miss a requirement that the code does not implement." | 1 | PASS | "white-box testing may not detect the resulting defects of omission" (4.3.3) |
| 50 | 668 | "It needs suitable test environments. They should preferably resemble the operational environment." | 1 | PASS | "requires suitable test environments preferably similar to the operational environment" (2.2.1) |
| 58 | 788 | "Items are often questions." | 1 | PASS | "Checklist items are often phrased in the form of a question." (4.4.3) |
| C1 | 328 | "A branch moves control from one node of the control flow graph to another." | 1 | PASS | "A branch is a transfer of control between two nodes in the control flow graph" (4.3.2). No 10-word run. |
| C2 | 668 | "It tests the interfaces that connect your system to other systems and to external services." | 1 | PASS | "focuses on testing the interfaces of the system under test and other systems and external services" (2.2.1). No 10-word run. |

### New or reworded claims

| # | Line | Claim (short) | Cite | Verdict | Quote / note |
|---|---|---|---|---|---|
| R2-1 | 71 | The glossary lists clear-box, glass-box, and structural testing as synonyms. | 2 | PASS | API `white-box-testing` synonyms: "clear-box testing", "glass-box testing", "structural testing" (and four more). |
| R2-2 | 328 | Glossary: branch coverage is the coverage of the branches of a control flow graph. | 4 | PASS | "The coverage of branches in a control flow graph." |
| R2-3 | 330 | Conditional branches are typically if...then outcomes; also switch/case outcomes or loop exit/continue. | 1 | PASS | "Conditional branches typically correspond to a true or false outcome from an "if...then" decision, an outcome from a switch/case statement, or a decision to exit or continue in a loop" (4.3.2) |
| R2-4 | 518 | Component testing often needs special support, for example a test harness or a unit test framework. | 1 | PASS | "It often requires specific support, such as test harnesses or unit test frameworks." (2.2.1). The 9-word run is gone. |
| R2-5 | 781 | Static testing may more easily find defects on paths that tests rarely execute or can hardly reach. | 1 | PASS | "may more easily detect defects that lay on paths through the code that are rarely executed or hard to reach using dynamic testing" (3.1.3) |
| R2-6 | 785 | The syllabus gives rules for the checklists of checklist-based testing. | 1 | PASS | 4.4.3 "Checklist-Based Testing": "Checklists should not contain items that can be checked automatically ..." |
| R2-7 | 741 | With a call to another system (an external user directory service), the sample would be system integration testing. | none | PASS | Application of rows 46–52; matches "other systems and external services" (2.2.1). |
| R2-8 | 573 | Coverage does not show that the expected results are right. | none | PASS | Now inside the tip "The tutorial's own advice". |
| R2-9 | 793 | The tutorial uses the same rules for a review checklist. | none | PASS | Inside the note "The tutorial's own review of the checklist", marked as the tutorial's own. |
| R2-10 | 273, 565, 758 | Rule-check callouts: treat the code as nested; nested rules give 1 + 1 = 2 (findSqrt), 2 + 1 = 3 (calculateDiscount, login). | none | PASS | Marked "This check is the tutorial's own". Arithmetic correct for statement (else + 1) and branch (if + 1). |
| R2-11 | 408 | The division callout split into short sentences; content unchanged. | none | PASS | Marked "This check is the tutorial's own". |

### Re-check of Table 2 (notes-block warnings)

| # | Line | Callout (short) | Verdict | Note |
|---|---|---|---|---|
| W1–W4 | 51, 57, 63, 422 | Unchanged. | PASS | As in round 1. |
| W5 | 156 | The statement rule gives 1 test for `findSqrt`, `calculateDiscount`, `login`; ISTQB statement coverage needs 2, 3, 3. | PASS | One sentence naming the conflict, then the exact ending sentence. Counts match the independent check. |
| W6 | 320 | "DC=2 always" gives 2 tests for `division`, `calculateDiscount`, `login`; ISTQB branch coverage needs 1, 3, 3. | PASS | One sentence naming the conflict, then the exact ending sentence. Counts match the independent check. |

### Round-2 copy check

The n-gram check at n = 9 and n = 10 against `ctfl-v4.0.1.txt` finds no run. No istqb sentence is over 25 words.

## Result

Round 1: 5 FAILs, all fixed in c232c39. Round 2: no new FAIL.

Open FAILs: 0
