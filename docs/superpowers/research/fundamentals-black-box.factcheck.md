# Fact-check: chapter 6, Black-Box Techniques

| Field | Value |
|---|---|
| Chapter | `black-box` (Black-Box Techniques), `content/fundamentals/black-box.mdx` |
| Date | 2026-10-20 |
| Round | 2 (round 1 tables kept below; round 2 section at the end) |
| Writer commit | bab024c (round 1), 8633bb9 (round 2) |
| Checker | an agent that did not write the chapter |

## Sources

| n | Source | How checked |
|---|---|---|
| 1 | ISTQB CTFL Syllabus v4.0.1, 4.1, 4.2, 4.2.1-4.2.4. https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | local text `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt` |
| 2 | ISTQB Glossary: test technique. https://glossary.istqb.org/en_US/term/test-technique | `api.glossary.istqb.org/v1/terms/test-technique`: v3, "A procedure used to define test conditions, design test cases, and specify test data." Synonym: "test design technique". Used in Foundation v4.0 (keyword). The term page gives HTTP 200. Not in `fundamentals-sources.md`, but the URL and the quote are correct. |
| 3 | ISTQB Glossary: equivalence partitioning | API, v3 (quote as S38 of the sources file) |
| 4 | ISTQB Glossary: boundary value analysis | API, v3 (quote as S39) |
| 5 | ISTQB Glossary: decision table testing | API, v4 (quote as S40) |
| 6 | ISTQB Glossary: state transition testing | API, v3 (quote as S41) |

Line numbers (L) refer to the MDX at commit bab024c.

## Table 1: cited claims

| # | topic | claim (short) | cite | verdict | quote from the source | note |
|---|---|---|---|---|---|---|
| 1 | Overview | Techniques help in test analysis (what) and test design (how) (L60) | 1 | PASS | "support the tester in test analysis (what to test) and in test design (how to test)" | Copy FAIL, see C1 |
| 2 | Overview | Small but sufficient set of test cases, systematic (L60) | 1 | PASS | "relatively small, but sufficient, set of test cases in a systematic way" | Copy FAIL, see C2 |
| 3 | Overview | Glossary: procedure to define test conditions, design test cases, specify test data (L60) | 2 | PASS | "A procedure used to define test conditions, design test cases, and specify test data." | |
| 4 | Overview | Three groups (L62) | 1 | PASS | "classified as black-box, white-box, and experience-based" | |
| 5 | Overview | Black-box: specified behavior, no internal structure (L66) | 1 | PASS | "analysis of the specified behavior of the test object without reference to its internal structure" | |
| 6 | Overview | Black-box also "specification-based" (L66) | 1 | PASS | "(also known as specification-based techniques)" | |
| 7 | Overview | Implementation changes, behavior same: test cases stay useful (L66) | 1 | PASS | "if the implementation changes, but the required behavior stays the same, then the test cases are still useful" | Copy FAIL, see C3 |
| 8 | Overview | White-box: internal structure and processing (L67) | 1 | PASS | "analysis of the test object's internal structure and processing" | |
| 9 | Overview | White-box also "structure-based" (L67) | 1 | PASS | "(also known as structure-based techniques)" | |
| 10 | Overview | White-box test cases only after design or implementation (L67) | 1 | PASS | "they can only be created after the design or implementation of the test object" | |
| 11 | Overview | Experience-based: knowledge and experience of testers (L68) | 1 | PASS | "effectively use the knowledge and experience of testers" | |
| 12 | Overview | Results depend heavily on skill; complements the other two (L68) | 1 | PASS | "effectiveness of these test techniques depends heavily on the tester's skills" ... "complementary" | "results" for "effectiveness" is acceptable |
| 13 | Overview | Four black-box techniques named (L70) | 1 | PASS | "Commonly used black-box test techniques ... Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition Testing" | |
| 14 | EP | EP divides data into partitions (L96) | 1 | PASS | "divides data into partitions (known as equivalence partitions)" | |
| 15 | EP | All elements of a partition processed the same way (L96) | 1 | PASS | "all the elements of a given partition are to be processed in the same way by the test object" | |
| 16 | EP | One value finds a defect, any other value should too (L96) | 1 | PASS | "this defect should also be detected by test cases that test any other value from the same partition" | |
| 17 | EP | One test per partition is enough (L96) | 1 | PASS | "Therefore, one test for each partition is sufficient." | |
| 18 | EP | Glossary: one representative member of each partition (L96) | 3 | PASS | "equivalence partitions exercised by one representative member of each partition" | |
| 19 | EP | Partitions for any data element (L98) | 1 | PASS | "can be identified for any data element related to the test object" | |
| 20 | EP | Inputs, outputs, configuration items, ... (L98) | 1 | PASS | "inputs, outputs, configuration items, internal values, time-related values, and interface parameters" | Copy FAIL, see C4 |
| 21 | EP | No overlap; non-empty (L98) | 1 | PASS | "The partitions must not overlap and must be non-empty sets." | |
| 22 | EP | Valid and invalid partitions (L100) | 1 | PASS | "A partition containing valid values is called a valid partition." | |
| 23 | EP | Definitions of valid and invalid vary (L100) | 1 | PASS | "definitions of valid and invalid values may vary among teams and organizations" | |
| 24 | EP | Coverage items are partitions; 100% includes invalid ones (L102) | 1 | PASS | "must exercise all identified partitions (including invalid partitions)" | |
| 25 | EP | Coverage formula (L102) | 1 | PASS | "number of partitions exercised by at least one test case, divided by the total number of identified partitions" | |
| 26 | BVA | BVA exercises partition boundaries (L134) | 1 | PASS | "based on exercising the boundaries of equivalence partitions" | |
| 27 | BVA | Glossary: test conditions are boundary values (L134) | 4 | PASS | "A black-box test technique in which the test conditions are boundary values." | |
| 28 | BVA | Only for ordered partitions (L134) | 1 | PASS | "BVA can only be used for ordered partitions" | |
| 29 | BVA | Min and max of a partition are its boundary values (L134) | 1 | PASS | "The minimum and maximum values of a partition are its boundary values." | |
| 30 | BVA | Elements between two members belong to the partition (L134) | 1 | PASS | "all elements between them must also belong to that partition" | |
| 31 | BVA | Developers make more errors at boundaries (L136) | 1 | PASS | "developers are more likely to make errors with these boundary values" | |
| 32 | BVA | Finds misplaced and missing boundaries (L136) | 1 | PASS | "boundaries are misplaced to positions above or below their intended positions or are omitted altogether" | |
| 33 | BVA | Two versions differ in coverage items per boundary (L138) | 1 | PASS | "They differ in terms of coverage items per boundary" | |
| 34 | BVA | 2-value items and coverage (L142) | 1 | PASS | "this boundary value and its closest neighbor belonging to the adjacent partition" | |
| 35 | BVA | 3-value items and coverage (L143) | 1 | PASS | "this boundary value and both its neighbors" | |
| 36 | BVA | "In 3-value BVA, some coverage items are not boundary values." (L145) | 1 | FAIL | "in 3-value BVA some of the coverage items may not be boundary values" | Says more than the source: "may not be" became "are not". Fix: "some coverage items can be values that are not boundary values". |
| 37 | BVA | 3-value more rigorous (L145) | 1 | PASS | "3-value BVA is more rigorous than 2-value BVA" | 8 words; under the copy limit |
| 38 | BVA | Syllabus example x ≤ 10 coded as x = 10 (L147) | 1 | PASS | "no test data derived from the 2-value BVA (x = 10, x = 11) can detect the defect. However, x = 9 ... is likely to detect it." | |
| 39 | Complex EP | Multiple inputs give multiple sets of partitions (L186) | 1 | PASS | "Many test items include multiple sets of partitions (e.g., test items with more than one input parameter)" | |
| 40 | Complex EP | A test case covers partitions from different sets (L186) | 1 | PASS | "a test case will cover partitions from different sets of partitions" | |
| 41 | Complex EP | Each Choice is the simplest criterion (L186) | 1 | PASS | "The simplest coverage criterion in the case of multiple sets of partitions is called Each Choice coverage" | |
| 42 | Complex EP | Each Choice: each partition of each set at least once; no combinations (L186) | 1 | PASS | "Each Choice coverage does not take into account combinations of partitions." | |
| 43 | Complex EP | "This count is not an ISTQB coverage criterion." (L214) | 1 | FAIL | Source 1 4.2.1 names only Each Choice. | Says more than the source. Source 1 is the CTFL syllabus only. The ISTQB glossary has "combinatorial testing" ("test conditions are specific combinations of values of several parameters") and "pairwise coverage" (Advanced Test Analyst). Fix: "This count is not a coverage criterion of the CTFL syllabus." |
| 44 | Complex EP | Syllabus names no criterion for all combinations (L214) | 1 | PASS | Only Each Choice in 4.2.1; no other "combination" criterion in the syllabus (grep). | |
| 45 | Decision table | Tests requirements where condition combinations give different outcomes (L259) | 1 | PASS | "requirements that specify how different combinations of conditions result in different outcomes" | |
| 46 | Decision table | Records complex logic, such as business rules (L259) | 1 | PASS | "an effective way of recording complex logic, such as business rules" | |
| 47 | Decision table | Glossary definition (L259) | 5 | PASS | "the test conditions are the combinations of conditions and the resulting actions shown in a decision table" | |
| 48 | Decision table | Conditions and actions are rows; column = rule; rule = unique combination with actions (L261) | 1 | PASS | "Each column corresponds to a decision rule that defines a unique combination of conditions, along with the associated actions" | |
| 49 | Decision table | Limited-entry and extended-entry (L261) | 1 | PASS | "In limited-entry decision tables ... (true or false)"; "extended-entry ... ranges of numbers, equivalence partitions" | |
| 50 | Decision table | Notation T, F, –, N/A, X, blank (L265-270) | 1 | PASS | "'–' means that the value of the condition is irrelevant ... 'X' means that the action should occur. Blank means that the action should not occur." | |
| 51 | Decision table | Full table, delete infeasible, merge, minimization out of scope (L272) | 1 | PASS | "Decision table minimization algorithms are out of scope of this syllabus." | |
| 52 | Decision table | Coverage items and formula (L274) | 1 | PASS | "number of exercised columns, divided by the total number of feasible columns" | |
| 53 | Decision table | Systematic; gaps and contradictions (L276) | 1 | PASS | "helps to find any gaps or contradictions in the requirements" | |
| 54 | Decision table | Rules grow exponentially (L276) | 1 | PASS | "the number of rules grows exponentially with the number of conditions" | Copy FAIL, see C5 |
| 55 | Decision table | Minimized table or risk-based approach (L276) | 1 | PASS | "a minimized decision table or a risk-based approach may be used" | |
| 56 | State transition | State diagram: states and valid transitions (L321) | 1 | PASS | "showing its possible states and valid state transitions" | |
| 57 | State transition | Event starts a transition; guard condition (L321) | 1 | PASS | "A transition is initiated by an event, which may be additionally qualified by a guard condition." | |
| 58 | State transition | "Transitions are instantaneous, and they can cause the software to take an action." (L321) | 1 | FAIL | "The transitions are assumed to be instantaneous" | Says more than the source: the model assumption became a fact. Fix: "The model assumes that transitions are instantaneous." |
| 59 | State transition | Label syntax; omit guard and action (L321) | 1 | PASS | "event [guard condition] / action" ... "can be omitted if they do not exist or are irrelevant for the tester" | |
| 60 | State transition | Glossary definition (L321) | 6 | PASS | "test conditions are state transitions or sequences of them" | |
| 61 | State transition | State table is equivalent; rows, columns, cells (L325) | 1 | PASS | "Its rows represent states, and its columns represent events (together with guard conditions if they exist)." | Copy FAIL, see C6 |
| 62 | State transition | Empty cell = invalid transition; only the table shows them (L325) | 1 | PASS | "In contrast to the state diagram, the state table explicitly shows invalid transitions, which are represented by empty cells." | |
| 63 | State transition | Test case = sequence of events; covers several transitions (L327) | 1 | PASS | "One test case may, and usually will, cover several transitions between states." | |
| 64 | State transition | Three coverage criteria, items and formulas (L331-333) | 1 | PASS | "In valid transitions coverage (also called 0-switch coverage), the coverage items are single valid transitions." | |
| 65 | State transition | Comparisons; most used; minimum for mission and safety-critical (L335) | 1 | PASS | "Valid transitions coverage is the most widely used coverage criterion." | |
| 66 | State transition | One invalid transition per test case; defect masking (L337) | 1 | PASS | "Testing only one invalid transition in a single test case helps to avoid defect masking" | |

## Table 2: warning callouts in the notes blocks

| # | Callout | Conflict real? | Verdict | Note |
|---|---|---|---|---|
| W1 | Complex EP (L176-180): ISTQB measures EP coverage as partitions exercised / partitions identified, not "test cases covered" | Yes. 4.2.1: "Coverage is measured as the number of partitions exercised by at least one test case, divided by the total number of identified partitions". | PASS | Ends with the exact required sentence. |
| W2 | Decision table (L249-253): "-" and "N/A" are for conditions; T3 and T4 show no action; "so the table is not a valid ISTQB decision table" | Partly. The notation conflict is real (4.2.3 defines "–" and "N/A" for conditions only). The conclusion says more than the source: 4.2.3 also says "Other notations may also be used", and ISTQB defines no "valid decision table". | FAIL | Fix: "The Output row uses "-" and "N/A", which the ISTQB syllabus defines only for conditions, so rules T3 and T4 do not show if the action occurs." Then the required closing sentence. |
| W3 | Missing callout: notes BVA line "3BVA: 17,18,19,99,100,101" | Yes, see Table 5 row B2. By 4.2.2, 17 and 101 are boundary values too, so 3-value BVA has 8 coverage items. | (counted in B2) | Add a warning callout in the BVA notes block when B2 is fixed. |

## Table 3: "not defined" statements

| # | Statement | Verdict | Evidence |
|---|---|---|---|
| N1 | "The ISTQB syllabus and glossary do not define the term "test method"." (L72) | PASS | The 1128 glossary entries have no "test method" term and no mention of it. The synonym of "test technique" is "test design technique", not "test method". The syllabus text has 0 hits for "test method". |

## Table 4: uncited ISTQB facts in istqb blocks

| # | Text | Verdict | Note |
|---|---|---|---|
| U1 | L278: "The "-" and "N/A" signs are for conditions, so they are wrong in the Output row." | FAIL | States an ISTQB fact with no Cite, and "wrong" says more than 4.2.3, which allows "Other notations". Fix: "The syllabus defines "–" and "N/A" for conditions only <Cite n={1} />. "N/A" marks an infeasible rule, but all four rules are feasible." |
| U2 | L76 (note callout): "ISTQB uses "test technique"." | PASS | Inside the required "tutorial's own explanation" callout, which takes no Cite. The fact is cited at L60. |
| U3 | L339: "The start marker is not a state." | PASS (not an ISTQB fact) | A modeling choice of the tutorial. See the review for the wording. |

## Copy check

Method: 10-word runs of the page text (JSX removed) against the syllabus text, then a manual count of whitespace words inside one sentence.

| # | Line | Page text | Words in a row | Verdict |
|---|---|---|---|---|
| C1 | L60 | "the tester in test analysis (what to test) and in test design (how to test)" | 15 | FAIL |
| C2 | L60 | "small but sufficient set of test cases in a systematic way" | 11 | FAIL |
| C3 | L66 | "If the implementation changes but the required behavior stays the same" | 11 | FAIL |
| C4 | L98 | "inputs, outputs, configuration items, internal values, time-related values, and interface parameters" | 11 | FAIL |
| C5 | L276 | "The number of rules grows exponentially with the number of conditions." | 11 | FAIL |
| C6 | L325 | "A state table is a model equivalent to a state diagram." | 11 | FAIL |
| - | L145 | "3-value BVA is more rigorous than 2-value BVA" | 8 | PASS |
| - | L327 | "a sequence of state changes, and actions if needed" | 9 | PASS |

Fix: reword each FAIL sentence so that no 10 words in a row match the syllabus. For C4, cut the list or change its order and wording (for example "inputs, outputs, internal values, interface parameters, configuration items, and values that depend on time").

## Table 5: worked answers (tutorial's own working), recomputed

The checker computed each answer before reading the page's answer.

| # | Worked answer | Checker's result | Page | Verdict | Note |
|---|---|---|---|---|---|
| E1 | 18-100 EP partitions (L104-116) | 3 partitions: ≤17 invalid, 18-100 valid, ≥101 invalid. Values 10, 50, 120 give 3/3 = 100%; 1/3 = 33.3%; 2/3 = 66.7%. | Same | PASS | Whole-number assumption is stated. |
| B1 | 2-value BVA (L149-157) | Boundary values: 17 (max of ≤17), 18 and 100 (min and max of 18-100), 101 (min of ≥101). 2-value items: 17, 18, 100, 101 = 4. | 4 values: 17, 18, 100, 101 | PASS | The values are correct. The framing "boundary values are 18 and 100" is incomplete; see B2. |
| B2 | 3-value BVA (L149-160) | 4.2.2: "for each boundary value there are three coverage items: this boundary value and both its neighbors". The 2-value rule counts 17 and 101 as "identified boundary values" ("exercise all coverage items, i.e., all identified boundary values"). So 3-value BVA has items 16, 17, 18, 19 and 99, 100, 101, 102 = 8. The 2-value set reaches 4/8 = 50%. | 6 values (17, 18, 19, 99, 100, 101); 4/6 = 66.7%; "The notes list the same two sets of values." | FAIL | Fix: name the 4 boundary values (17, 18, 100, 101; the outer partitions have no stated end). Give 3-value BVA as 8 values, 16 to 19 and 99 to 102, and 4/8 = 50%. Say that the notes' 6-value list takes only 18 and 100 as boundaries, and add a warning callout to the BVA notes block. |
| B3 | 3-value strength example (L162): `age <= 100` coded as `age == 100`; "100 and 101 give the correct results. The value 99 is wrongly rejected" | With that defect only age 100 is accepted. The 2-value value 18 is then wrongly rejected, so 2-value BVA also finds the defect. | Shown as an example of "the extra strength of 3-value BVA" | FAIL | The example does not show extra strength. Fix: delete it (the syllabus example at L147 already shows the point), or say that the upper-boundary values 100 and 101 miss the defect, 99 finds it, and the 2-value value 18 also finds it here. |
| K1 | Bank partitions and coverage (L188-231) | Sets: plan {Gold, Premium}, tenure {1 y, 3 y}, deposit vs plan minimum {below, at or above} = 6. Scenario: Gold 3 y 100,000; Premium 1 y 300,000. Exercised 5; 5/6 = 83.3%. Plan and tenure Each Choice 4/4 = 100%. Combinations 2/4 = 50% (Gold-3 y 7%, Premium-1 y 7%; missed 5% and 9%). Values below the minimum: 99,999 and 299,999. | Same | PASS | The page marks the sets and numbers as the tutorial's own working. |
| D1 | Decision table (L278-301) | 2 conditions → 4 rules, all feasible. Each rule needs an action: rule 1 log in; rules 2-4 error. 4/4 = 100%. Merge rules 3 and 4 (email F, password –) → 3 rules, 3/3. 3 conditions → 8 rules. | Same; each rule has an X | PASS | The assumption "a failed login shows an error message" is stated, and the table is marked as the tutorial's own. |
| P1 | PIN state transitions (L339-369) | States 5 (Start is the initial marker). Valid transitions 6. Cells 5 × 2 = 10; invalid 4. Tests A-D: valid transitions 6/6. Test C: 4/5 = 80% all states; C + D: 5/5. A-D all transitions 6/10 = 60%; + 4 single-invalid tests = 10/10. | Same | PASS | Criteria match 4.2.4. |
| P2 | PinStateDiagram figcaption (page text) | Owner image: Start → 1st Try; incorrect PIN 1st → 2nd → 3rd → Account Blocked; correct PIN from each try → Access Granted. | "The system starts and waits for the first try. A correct PIN on any of the three tries leads to access granted. An incorrect PIN moves from the 1st try to the 2nd try, and from the 2nd try to the 3rd try. An incorrect PIN on the 3rd try leads to account blocked." | PASS | Matches the image and the state table. |

## Round 1 summary of FAILs

| # | Row |
|---|---|
| 1 | Table 1 #36 (L145, "are not boundary values") |
| 2 | Table 1 #43 (L214, "not an ISTQB coverage criterion") |
| 3 | Table 1 #58 (L321, "Transitions are instantaneous") |
| 4 | Table 2 W2 (decision table callout conclusion) |
| 5 | Table 4 U1 (L278) |
| 6-11 | Copy check C1-C6 |
| 12 | Table 5 B2 (3-value BVA count) |
| 13 | Table 5 B3 (age == 100 example) |

Round 1 result: 13 open FAILs.

## Round 2

Date 2026-10-20. Diff checked: 1c909bd..8633bb9 (`content/fundamentals/black-box.mdx`, research notes). Line numbers (L) refer to the MDX at 8633bb9.

### Re-check of the round 1 FAILs

| # | Round 1 row | New text | Verdict | Quote / note |
|---|---|---|---|---|
| R1 | #36 (3-value items) | L155: "some coverage items can be values that are not boundary values" | PASS | "some of the coverage items may not be boundary values" |
| R2 | #43 (combinations) | L225: "This count is not a coverage criterion of the CTFL syllabus." | PASS | 4.2.1 names only Each Choice; no other combination criterion in the syllabus. |
| R3 | #58 (instantaneous) | L332: "The model assumes that transitions are instantaneous." / "A transition can cause the software to take an action." | PASS | "The transitions are assumed to be instantaneous and may sometimes result in the software taking action." |
| R4 | W2 (decision table callout) | L262: "... which the ISTQB syllabus defines only for conditions, so rules T3 and T4 do not show if the action occurs." | PASS | 4.2.3 lists "–" and "N/A" under "The notation for conditions"; actions use "X" and blank. Ends with the exact required sentence. |
| R5 | U1 (L278 uncited) | L289: "The syllabus defines "–" and "N/A" for conditions only. <Cite n={1} /> "N/A" marks an infeasible rule. <Cite n={1} />" | PASS | "'N/A' means that the condition is infeasible for a given rule." "All four rules of this table are feasible" is the tutorial's own reading of its table. |
| R6 | C1 (L60) | L60: "In test analysis, a technique helps to decide what to test. ... In test design, it helps to decide how to test." | PASS | Longest run with the syllabus: under 10 words. Source: "support the tester in test analysis (what to test) and in test design (how to test)". |
| R7 | C2 (L60) | L60: "A technique gives the tester a systematic way to build a set of test cases that is small but enough." | PASS | "relatively small, but sufficient, set of test cases in a systematic way"; no 10-word run. |
| R8 | C3 (L66) | "After a change of the implementation, the test cases still work if the required behavior is the same." | PASS | "if the implementation changes, but the required behavior stays the same, then the test cases are still useful"; no 10-word run. |
| R9 | C4 (L98) | "inputs, outputs, internal values, interface parameters, configuration items, and values that depend on time" | PASS | Same six items as 4.2.1; no 10-word run. |
| R10 | C5 (L287) | "The number of rules grows exponentially as you add conditions." | PASS | "the number of rules grows exponentially with the number of conditions"; run of 6 words. |
| R11 | C6 (L336) | "A state table models the same behavior as a state diagram." | PASS | "A state table is a model equivalent to a state diagram."; no 10-word run. |
| R12 | B2 (3-value BVA) | L159-173 | PASS | Recomputed by the checker before reading the page: boundary values 17, 18, 100, 101 (4). 2-value items {17, 18, 100, 101} = 4. 3-value items {16, 17, 18, 19, 99, 100, 101, 102} = 8. 2-value set against 3-value items: 4/8 = 50%. The page table rows (17: 17,18 / 16,17,18; 18: 17,18 / 17,18,19; 100: 100,101 / 99,100,101; 101: 100,101 / 100,101,102) and the arithmetic 4 x 2 = 8 → 4 values, 4 x 3 = 12, 12 − 4 = 8, 4/8 = 50% are correct. "The 3BVA list of the notes ... leaves out 16 and 102" is correct. |
| R13 | B3 (`age == 100` example) | Removed. | PASS | The page keeps only the syllabus example (L147), which is PASS (#38). |
| R14 | W3 (missing BVA callout) | L134-138: "The 3BVA line takes only 18 and 100 as boundary values, but ISTQB also counts 17 and 101 as boundary values, so 3-value BVA has 8 values and not 6." | PASS | The conflict is real: "The minimum and maximum values of a partition are its boundary values"; 17 and 101 are the max and min of the outer partitions. One sentence; ends with the exact required sentence. |

### New or reworded claims in round 2

| # | Line | Claim | Cite | Verdict | Quote from the source |
|---|---|---|---|---|---|
| N1 | L60 | Testers use techniques in two activities (analysis, design) | 1 | PASS | "support the tester in test analysis (what to test) and in test design (how to test)" |
| N2 | L66 | Test cases still work after an implementation change if behavior is the same | 1 | PASS | "if the implementation changes, but the required behavior stays the same, then the test cases are still useful" |
| N3 | L98 | Six kinds of data elements, reordered | 1 | PASS | "inputs, outputs, configuration items, internal values, time-related values, and interface parameters" |
| N4 | L155 | Some 3-value items can be non-boundary values | 1 | PASS | "some of the coverage items may not be boundary values" |
| N5 | L159-161 | Outer partition "17 or less" has no stated lower end, so only 17 is its boundary value; 4 boundary values | none (tutorial's own working, marked at L159) | PASS | Applies "The minimum and maximum values of a partition are its boundary values." |
| N6 | L278 | "–": the condition does not change the outcome | 1 | PASS | "'–' means that the value of the condition is irrelevant for the action outcome" |
| N7 | L287 | Rules grow exponentially as conditions are added | 1 | PASS | "the number of rules grows exponentially with the number of conditions" |
| N8 | L289 | "–" and "N/A" defined for conditions only; "N/A" marks an infeasible rule | 1 | PASS | "The notation for conditions is as follows: ... 'N/A' means that the condition is infeasible for a given rule." |
| N9 | L332 | The model assumes instantaneous transitions; a transition can cause an action | 1 | PASS | "assumed to be instantaneous and may sometimes result in the software taking action" |
| N10 | L336 | A state table models the same behavior as a state diagram | 1 | PASS | "A state table is a model equivalent to a state diagram." |
| N11 | L338 | Events cause state changes in a row, and actions when needed | 1 | PASS | "results in a sequence of state changes (and actions, if needed)" |
| N12 | L346 | Valid transitions coverage is stronger than all states coverage | 1 | PASS | "All states coverage is weaker than valid transitions coverage" |
| N13 | L118-122 | Own advice now in `<Callout type="tip" title="The tutorial's own advice">` | none | PASS | Not an ISTQB fact; correctly marked. |
| N14 | L322 | Alt text: Start leads to 1st Try; incorrect PIN 1st → 2nd → 3rd | none | PASS | Matches the owner image. |
| N15 | L350 | "This tutorial takes Start as the initial marker, not as a state." | none | PASS | Marked as the tutorial's own choice. |

### Copy check (round 2)

The 10-word scan of the page text (JSX removed) against the syllabus finds 1 run: "3-value BVA is more rigorous than 2-value BVA" (L155). That is 8 whitespace words, unchanged from round 1 (PASS). No other run of 10 words or more.

### Round 2 summary

All 13 round 1 FAILs are fixed. The 15 new or reworded claims are PASS. No new FAIL.

Open FAILs: 0
