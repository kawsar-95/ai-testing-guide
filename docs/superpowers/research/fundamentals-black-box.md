# Research notes: chapter 6, Black-Box Techniques

Check date: 2026-10-20. Page: `content/fundamentals/black-box.mdx`. Syllabus text read from the local copy `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`. Glossary text read from `https://api.glossary.istqb.org/v1/terms` on the same date.

## Sources (numbers as in `page.sources`, in order of first cite)

| n | Source | Used for |
|---|---|---|
| S1 | ISTQB Certified Tester Foundation Level Syllabus v4.0.1, 4.1 (p39), 4.2 (p39), 4.2.1 (p39), 4.2.2 (p40), 4.2.3 (p41), 4.2.4 (p41-42). https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | all rules |
| S2 | ISTQB Glossary: test technique (v-latest). https://glossary.istqb.org/en_US/term/test-technique | definition of the term |
| S3 | ISTQB Glossary: equivalence partitioning. https://glossary.istqb.org/en_US/term/equivalence-partitioning | definition |
| S4 | ISTQB Glossary: boundary value analysis. https://glossary.istqb.org/en_US/term/boundary-value-analysis | definition |
| S5 | ISTQB Glossary: decision table testing. https://glossary.istqb.org/en_US/term/decision-table-testing | definition |
| S6 | ISTQB Glossary: state transition testing. https://glossary.istqb.org/en_US/term/state-transition-testing | definition |

The glossary has no entry named "test method". The syllabus has no occurrence of "test method" (grep, 0 hits).

## Topic: Test Techniques Overview

| Claim | Source | Quote |
|---|---|---|
| Techniques support test analysis (what to test) and test design (how to test) | S1 4.1 | "support the tester in test analysis (what to test) and in test design (how to test)" |
| They give a small but sufficient set of test cases, in a systematic way | S1 4.1 | "relatively small, but sufficient, set of test cases in a systematic way" |
| Glossary: a procedure to define test conditions, design test cases, specify test data | S2 | "A procedure used to define test conditions, design test cases, and specify test data." |
| Three groups: black-box, white-box, experience-based | S1 4.1 | "classified as black-box, white-box, and experience-based" |
| Black-box (specification-based): specified behavior, no reference to internal structure; test cases stay useful if only the implementation changes | S1 4.1 | "if the implementation changes, but the required behavior stays the same, then the test cases are still useful" |
| White-box (structure-based): internal structure and processing; test cases created only after design or implementation | S1 4.1 | "they can only be created after the design or implementation of the test object" |
| Experience-based: knowledge and experience of testers; depends on skill; complementary | S1 4.1 | "complementary to the black-box test techniques and white-box test techniques" |
| The syllabus names four black-box techniques | S1 4.2 | "Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition Testing" |
| "Test method" is not a glossary or syllabus term | glossary list, S1 grep | 0 hits |

## Topic: Equivalence Partitioning

| Claim | Source | Quote |
|---|---|---|
| EP divides data into partitions; all elements of a partition are expected to be processed the same way | S1 4.2.1 | "all the elements of a given partition are to be processed in the same way by the test object" |
| If one value of a partition finds a defect, any other value of it should find it; one test per partition is enough | S1 4.2.1 | "one test for each partition is sufficient" |
| Glossary: partitions exercised by one representative member each | S3 | "equivalence partitions exercised by one representative member of each partition" |
| Partitions exist for inputs, outputs, configuration items, internal values, time-related values, interface parameters | S1 4.2.1 | "inputs, outputs, configuration items, internal values, time-related values, and interface parameters" |
| Partitions must not overlap and must be non-empty | S1 4.2.1 | "must not overlap and must be non-empty sets" |
| Valid and invalid partitions; definitions vary among teams | S1 4.2.1 | "definitions of valid and invalid values may vary among teams and organizations" |
| Coverage items are the partitions; 100% needs the invalid partitions too | S1 4.2.1 | "must exercise all identified partitions (including invalid partitions)" |
| Coverage = partitions exercised / partitions identified, in percent | S1 4.2.1 | "number of partitions exercised by at least one test case, divided by the total number of identified partitions" |

Worked answer (tutorial's own working, no Cite): the 18-100 example. Whole-number ages. Partitions: 17 or less, 18 to 100, 101 or more. Tests 10, 50, 120. Coverage 3/3 = 100%. Only 50: 1/3 = 33.3%. Tests 10 and 50: 2/3 = 66.7%.

## Topic: Boundary Value Analysis

| Claim | Source | Quote |
|---|---|---|
| BVA exercises the boundaries of equivalence partitions; only for ordered partitions | S1 4.2.2 | "BVA can only be used for ordered partitions" |
| Minimum and maximum of a partition are its boundary values | S1 4.2.2 | "minimum and maximum values of a partition are its boundary values" |
| Glossary: test conditions are boundary values | S4 | "the test conditions are boundary values" |
| If two elements are in a partition, all elements between them are too | S1 4.2.2 | "all elements between them must also belong to that partition" |
| Developers err more at boundaries; typical defects: boundaries misplaced above or below, or omitted | S1 4.2.2 | "boundaries are misplaced to positions above or below their intended positions or are omitted altogether" |
| 2-value BVA: the boundary value and its closest neighbor in the adjacent partition | S1 4.2.2 | "this boundary value and its closest neighbor belonging to the adjacent partition" |
| 2-value coverage: boundary values exercised / boundary values identified | S1 4.2.2 | "number of boundary values that were exercised, divided by the total number of identified boundary values" |
| 3-value BVA: the boundary value and both neighbors; some items may not be boundary values | S1 4.2.2 | "this boundary value and both its neighbors"; "some of the coverage items may not be boundary values" |
| 3-value coverage: boundary values and neighbors exercised / total of them | S1 4.2.2 | "number of boundary values and their neighbors exercised, divided by the total number of identified boundary values and their neighbors" |
| 3-value is more rigorous; example x <= 10 coded as x = 10: x = 10 and 11 miss it, x = 9 finds it | S1 4.2.2 | "no test data derived from the 2-value BVA (x = 10, x = 11) can detect the defect. However, x = 9" |

Worked answer (tutorial's own working, fix round 1): the partitions are 17 or less, 18 to 100, 101 or more. The boundary values (minimum and maximum of each partition) are 17 (maximum of the first; its lower end is not stated), 18, 100, 101 = 4. S1 4.2.2 counts all identified boundary values as 2-value coverage items, so 17 and 101 are boundary values too.
- 2-value: 4 x 2 = 8 listings, each value twice, 8 / 2 = 4 values: 17, 18, 100, 101.
- 3-value: 4 x 3 = 12 listings; 17, 18, 100, 101 appear twice; 12 - 4 = 8 values: 16, 17, 18, 19, 99, 100, 101, 102.
- 2-value set against the 3-value items: 4 / 8 = 50%.
- The notes' 3BVA list (17, 18, 19, 99, 100, 101) has 6 values; it misses 16 and 102. Callout yes.
- The `age == 100` example was removed: with that defect 18 is also rejected, so 2-value BVA finds it too. The page keeps only the syllabus example (x <= 10 coded as x = 10).

## Topic: Equivalence Partitioning in a Complex Case

| Claim | Source | Quote |
|---|---|---|
| Many test items have several sets of partitions (more than one input) | S1 4.2.1 | "test items with more than one input parameter" |
| Each Choice coverage: each partition from each set at least once | S1 4.2.1 | "Each Choice coverage requires test cases to exercise each partition from each set of partitions at least once" |
| Each Choice is the simplest criterion; it ignores combinations | S1 4.2.1 | "Each Choice coverage does not take into account combinations of partitions" |

Worked answer (tutorial's own working): sets plan {Gold, Premium}, tenure {1 year, 3 years}, deposit {below the plan minimum, at or above the plan minimum}. 2 + 2 + 2 = 6 partitions. The scenario (Gold, 3 years, 1 lakh; Premium, 1 year, 3 lakh) exercises 5: Gold, Premium, 1 year, 3 years, at or above the minimum (100,000 >= 100,000 and 300,000 >= 300,000). Not exercised: below the minimum. 5/6 = 83.3%. Plan and tenure only: 4/4 = 100%. Combinations plan x tenure: 2 x 2 = 4; scenario covers Gold-3y and Premium-1y: 2/4 = 50%. Expected rates: Gold-1y 5%, Gold-3y 7%, Premium-1y 7%, Premium-3y 9%. The scenario checks 7% twice and never 5% or 9%. The syllabus names no criterion for all combinations.

## Topic: Decision Table Testing

| Claim | Source | Quote |
|---|---|---|
| For requirements where combinations of conditions give different outcomes | S1 4.2.3 | "how different combinations of conditions result in different outcomes" |
| Good for complex logic such as business rules | S1 4.2.3 | "an effective way of recording complex logic, such as business rules" |
| Conditions and actions are the rows; each column is a decision rule | S1 4.2.3 | "Each column corresponds to a decision rule that defines a unique combination of conditions, along with the associated actions" |
| Limited-entry (Boolean) and extended-entry (many values) | S1 4.2.3 | "limited-entry decision tables", "extended-entry decision tables" |
| Notation: T, F, "-" irrelevant, "N/A" infeasible; actions X or blank | S1 4.2.3 | "'–' means that the value of the condition is irrelevant" / "'N/A' means that the condition is infeasible for a given rule" / "'X' means that the action should occur" |
| Full table: every combination. Delete infeasible columns. Merge columns where some conditions do not matter | S1 4.2.3 | "minimized by merging columns, in which some conditions do not affect the outcome" |
| Minimization algorithms are out of scope | S1 4.2.3 | "Decision table minimization algorithms are out of scope" |
| Coverage items: columns with feasible combinations; coverage = exercised / feasible | S1 4.2.3 | "number of exercised columns, divided by the total number of feasible columns" |
| Strength: systematic, finds gaps and contradictions; rules grow exponentially with conditions; minimize or use a risk-based approach | S1 4.2.3 | "number of rules grows exponentially with the number of conditions" |
| Glossary | S5 | "combinations of conditions and the resulting actions shown in a decision table" |

Worked answer (tutorial's own version, not from ISTQB): login with two conditions, 2^2 = 4 rules; each rule has an action. Minimized: 3 rules. Three conditions: 2^3 = 8.

## Topic: State Transition Testing

| Claim | Source | Quote |
|---|---|---|
| State diagram: states and valid transitions | S1 4.2.4 | "showing its possible states and valid state transitions" |
| A transition starts with an event, maybe with a guard condition; instantaneous; may cause an action | S1 4.2.4 | "initiated by an event, which may be additionally qualified by a guard condition" |
| Label: event [guard condition] / action | S1 4.2.4 | "event [guard condition] / action" |
| State table: rows states, columns events; cells hold target state and actions; empty cells are invalid transitions | S1 4.2.4 | "the state table explicitly shows invalid transitions, which are represented by empty cells" |
| Test case = sequence of events giving a sequence of state changes; one test covers several transitions | S1 4.2.4 | "One test case may, and usually will, cover several transitions between states" |
| All states coverage: exercised states / total states | S1 4.2.4 | "number of exercised states divided by the total number of states" |
| Valid transitions (0-switch) coverage | S1 4.2.4 | "number of exercised valid transitions divided by the total number of valid transitions" |
| All transitions coverage: valid transitions exercised, invalid attempted; one invalid transition per test avoids defect masking | S1 4.2.4 | "Testing only one invalid transition in a single test case helps to avoid defect masking" |
| All states is weaker than valid transitions; full valid transitions guarantees full all states; all transitions guarantees both; minimum for mission and safety-critical software | S1 4.2.4 | "should be a minimum requirement for mission and safety-critical software" |
| Valid transitions coverage is the most widely used | S1 4.2.4 | "Valid transitions coverage is the most widely used coverage criterion" |
| Glossary | S6 | "test conditions are state transitions or sequences of them" |

Worked answer (tutorial's own working, from the PIN diagram): states 1st try, 2nd try, 3rd try, Access granted, Account blocked (5). Valid transitions: 6. Events: correct PIN, incorrect PIN. Cells in the state table: 5 x 2 = 10; invalid = 10 - 6 = 4. All states: test C (incorrect, incorrect, correct) covers 1st, 2nd, 3rd, granted = 4/5 = 80%; with test D (3 incorrect, ends blocked) 5/5 = 100%, 2 tests. Valid transitions: 4 tests. All transitions: 6/10 = 60% with the 4 valid tests; 4 + 4 = 8 tests for 100%.

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| Decision table: Output row `x`, blank, `-`, `N/A`; rules T3 and T4 have no action | "'–' means that the value of the condition is irrelevant"; "'N/A' means that the condition is infeasible for a given rule" (condition notation); "Other notations may also be used." The callout says only that the syllabus defines the signs for conditions, so T3 and T4 do not show if the action occurs. | yes (notes block of Decision Table Testing) |
| Complex case: "How many test cases are covered by this scenario, expressed as a percentage?" | "Coverage is measured as the number of partitions exercised by at least one test case, divided by the total number of identified partitions" | yes (notes block of Equivalence Partitioning in a Complex Case) |
| Notes 3BVA list: 17,18,19,99,100,101 (6 values) | "for each boundary value there are three coverage items: this boundary value and both its neighbors"; 17 and 101 are boundary values of the outer partitions | yes (notes block of Boundary Value Analysis) |
| "Test Techniques are called as Test methods." | Term "test method" is not in the glossary or syllabus; the syllabus says "test techniques" | no (not a conflict; the istqb block says the term is not defined) |
| Three technique types; four black-box techniques; EP table; BVA 2 and 3 values; state transition definition | S1 4.1, 4.2, 4.2.1, 4.2.2, 4.2.4 | no conflict |

## Fix round 1 changes

- BVA worked answer: 8 values for 3-value BVA (see above). Warning callout added to the BVA notes block.
- The three cites that said more than the source were corrected: 3-value "can be values that are not boundary values" (source: "may not be"); "The model assumes that transitions are instantaneous" (source: "assumed to be"); "not a coverage criterion of the CTFL syllabus" (the glossary has other combination terms).
- Decision table callout and the login paragraph no longer call the notes' table "not valid" or "wrong". The syllabus allows other notations ("Other notations may also be used."). The "–" and "N/A" notation statements now have a Cite.
- Six sentences that copied 11 to 15 words from the syllabus were reworded. A script scan of the istqb blocks and all callouts against the syllabus text finds no run of 9 words or more.
- The own advice about more partitions is now in a tip callout. The alt text of the image says the Start arrow has no label. "Start is not a state" is worded as the tutorial's own choice.
