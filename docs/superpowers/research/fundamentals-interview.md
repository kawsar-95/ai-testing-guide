# Fundamentals: Interview Questions (research notes)

Chapter: `content/fundamentals/interview.mdx` (50 questions, one answer each, no `<Version>` blocks).
Check date: 2026-10-20. Source text: syllabus CTFL v4.0.1 (`~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`) and the glossary API (`api.glossary.istqb.org/v1/terms`). Master list of sources: `fundamentals-sources.md`.

## Sources

The numbers are the `<Cite n>` numbers of the page. They follow the order of first cite.

| n | Source | URL |
|---|---|---|
| 1 | S1 Certified Tester Foundation Level Syllabus v4.0.1 | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf |
| 2 | Glossary: verification | https://glossary.istqb.org/en_US/term/verification |
| 3 | Glossary: validation | https://glossary.istqb.org/en_US/term/validation |
| 4 | Glossary: quality assurance | https://glossary.istqb.org/en_US/term/quality-assurance |
| 5 | Glossary: quality control | https://glossary.istqb.org/en_US/term/quality-control |
| 6 | Glossary: static testing | https://glossary.istqb.org/en_US/term/static-testing |
| 7 | Glossary: dynamic testing | https://glossary.istqb.org/en_US/term/dynamic-testing |
| 8 | Glossary: smoke testing | https://glossary.istqb.org/en_US/term/smoke-testing |
| 9 | Glossary: regression testing | https://glossary.istqb.org/en_US/term/regression-testing |
| 10 | Glossary: confirmation testing | https://glossary.istqb.org/en_US/term/confirmation-testing |
| 11 | Glossary: ad hoc testing | https://glossary.istqb.org/en_US/term/ad-hoc-testing |
| 12 | Glossary: acceptance testing | https://glossary.istqb.org/en_US/term/acceptance-testing |
| 13 | Glossary: user acceptance testing | https://glossary.istqb.org/en_US/term/user-acceptance-testing |
| 14 | Glossary: alpha testing | https://glossary.istqb.org/en_US/term/alpha-testing |
| 15 | Glossary: beta testing | https://glossary.istqb.org/en_US/term/beta-testing |
| 16 | Glossary: compatibility | https://glossary.istqb.org/en_US/term/compatibility |
| 17 | Glossary: cross-browser compatibility | https://glossary.istqb.org/en_US/term/cross-browser-compatibility |
| 18 | Glossary: cross-device testing | https://glossary.istqb.org/en_US/term/cross-device-testing |
| 19 | Glossary: usability testing | https://glossary.istqb.org/en_US/term/usability-testing |
| 20 | Glossary: test plan | https://glossary.istqb.org/en_US/term/test-plan |
| 21 | Glossary: test strategy | https://glossary.istqb.org/en_US/term/test-strategy |
| 22 | Glossary: test approach | https://glossary.istqb.org/en_US/term/test-approach |
| 23 | Glossary: test estimation | https://glossary.istqb.org/en_US/term/test-estimation |
| 24 | Glossary: entry criteria | https://glossary.istqb.org/en_US/term/entry-criteria |
| 25 | Glossary: exit criteria | https://glossary.istqb.org/en_US/term/exit-criteria |
| 26 | Glossary: test condition | https://glossary.istqb.org/en_US/term/test-condition |
| 27 | Glossary: test case | https://glossary.istqb.org/en_US/term/test-case |
| 28 | Glossary: test data | https://glossary.istqb.org/en_US/term/test-data |
| 29 | Glossary: traceability | https://glossary.istqb.org/en_US/term/traceability |
| 30 | Glossary: traceability matrix | https://glossary.istqb.org/en_US/term/traceability-matrix |
| 31 | Glossary: defect | https://glossary.istqb.org/en_US/term/defect |
| 32 | Glossary: defect report | https://glossary.istqb.org/en_US/term/defect-report |
| 33 | Glossary: severity | https://glossary.istqb.org/en_US/term/severity |
| 34 | Glossary: priority | https://glossary.istqb.org/en_US/term/priority |
| 35 | Glossary: defect workflow | https://glossary.istqb.org/en_US/term/defect-workflow |

Glossary definitions were read through the public API on 2026-10-20. Quotes of the glossary have one definition each.

## Terms that ISTQB does not define (no Cite; the tutorial's own explanation in a callout)

| Question | Term | Check |
|---|---|---|
| 7 | sanity testing | No glossary entry, no syllabus hit (`fundamentals-sources.md`) |
| 15 | compatibility testing | No glossary entry named "compatibility testing". The entries "compatibility" (n=16), "cross-browser compatibility" (n=17) and "cross-device testing" (n=18) exist. The syllabus lists "Compatibility" as a quality characteristic (2.2.2). |
| 21, 23 | test scenario | No glossary entry. No hit in the syllabus text for "test scenario". |
| 25 | requirements traceability matrix | "traceability matrix" (n=30) and "traceability" (n=29) exist. See `fundamentals-sources.md`. |
| 45 | bug life cycle | No entry. "defect workflow" (n=35) exists. |

## Consistency with the chapters 1 to 10

Each answer uses the ISTQB version of the topic that its "Read more" link points to. The chapters were read in their worktrees on 2026-10-20. Points checked: V&V and the nine objectives (basics), bug = defect (defects-principles), static and dynamic, smoke, sanity as a non-ISTQB term, regression, confirmation, exploratory, ad hoc, alpha, beta, non-functional (test-types), the acceptance forms (levels), plan, strategy, estimation (planning), test case, defect report, bug life cycle, entry and exit criteria, RTM (test-cases-bugs).

## Questions 1 to 26

### Q1 What is software testing, and why is it important?

| Claim | Source | Quote |
|---|---|---|
| Testing is a set of activities that find defects and judge the quality of software work products | 1 (1.1) | "Software testing is a set of activities to discover defects and evaluate the quality of software work products." |
| Failing software can cost money, time, reputation, and cause injury or death | 1 (1.1) | "loss of money, time or business reputation, and, in extreme cases, even injury or death." |
| Testing lowers the risk of failure in operation | 1 (1.1) | "helps reducing the risk of software failure in operation." |
| Testing gives facts for the release decision | 1 (1.2.1) | "contributing to decisions to move to the next phase of the SDLC, such as the release decision." |

### Q2 What is the main objective of software testing?

| Claim | Source | Quote |
|---|---|---|
| The syllabus gives a list of typical objectives, nine items | 1 (1.1.1) | "The typical test objectives are:" followed by nine bullets |
| Finding defects is one of them | 1 (1.1.1) | "Causing failures and finding defects" |
| Other objectives (risk, verify, inform, confidence, validate) | 1 (1.1.1) | "Reducing the risk level of inadequate software quality" and "Validating whether the test object is complete and works as expected by the stakeholders" |
| The objectives depend on the context | 1 (1.1.1) | "Test objectives can vary, depending upon the context, which includes the work product being tested, the test level, risks" |

### Q3 Verification and validation

| Claim | Source | Quote |
|---|---|---|
| Testing involves both | 1 (1.1) | "While testing involves verification ... it also involves validation" |
| Verification | 1 (1.1) | "checking whether the system meets specified requirements" |
| Validation | 1 (1.1) | "checking whether the system meets users' and other stakeholders' needs in its operational environment" |
| Glossary verification | 2 | "The process of confirming that a work product fulfills its specification." |
| Glossary validation | 3 | "Confirmation by examination that a work product matches a stakeholder's needs." |
| Pass verification and still fail validation | 1 (1.3, principle 7) | "Thoroughly testing all the specified requirements and fixing all the defects found could still produce a system that does not fulfill the users' needs" |

### Q4 QA and QC

| Claim | Source | Quote |
|---|---|---|
| QA is process-oriented, preventive | 1 (1.2.2) | "QA is a process-oriented, preventive approach that focuses on the implementation and improvement of processes." |
| Testing is product-oriented, corrective, a major form of QC | 1 (1.2.2) | "Testing is a product-oriented, corrective approach ... Testing is a major form of quality control" |
| QA is for everyone on the project | 1 (1.2.2) | "is the responsibility of everyone on a project." |
| Glossary QA | 4 | "Activities focused on providing confidence that quality requirements will be fulfilled." |
| Glossary QC | 5 | "Activities designed to evaluate the quality of a component or system." |

### Q5 Static and dynamic testing

| Claim | Source | Quote |
|---|---|---|
| Static does not run the test item; reviews and static analysis | 1 (1.1); 6 | "Static testing includes reviews (see chapter 3) and static analysis." / "A test approach that does not involve the execution of a test item." |
| Dynamic runs the test item | 7 | "A test approach that involves test execution of a test item." |
| Dynamic testing causes a failure and later analysis finds the defect; static testing finds the defect directly | 1 (3.1.3) | "Static testing finds defects directly, while dynamic testing causes failures from which the associated defects are determined through subsequent analysis" |
| They complement each other; each finds some defect types the other misses | 1 (3.1.3) | "Static testing and dynamic testing practices complement each other." / "some defect types that can only be found by either static or dynamic testing" |

### Q6 Functional and non-functional testing

| Claim | Source | Quote |
|---|---|---|
| Functional = the functions | 1 (2.2.2) | "Functional testing evaluates the functions that a component or system should perform. The functions are 'what' the test object should do." |
| Non-functional = how well | 1 (2.2.2) | "Non-functional testing is the testing of 'how well the system behaves'." |
| ISO/IEC 25010 list | 1 (2.2.2) | "Performance efficiency, Compatibility, Usability, Reliability, Security, Maintainability, Portability, Safety" |
| All levels | 1 (2.2.2) | "All the four above mentioned test types can be applied to all test levels" |

### Q7 Smoke and sanity testing

| Claim | Source | Quote |
|---|---|---|
| Smoke testing is a test type for readiness | 8 | "A test type to gain sufficient confidence that a test object is ready for planned testing." |
| The syllabus uses "smoke tests" only; entry criterion example | 1 (5.1.3) | "initial quality level of a test object (e.g., all smoke tests have passed)" |
| Sanity testing is not defined | none | Not in the glossary or the syllabus. The callout is the tutorial's own. |

### Q8 Regression testing

| Claim | Source | Quote |
|---|---|---|
| Definition | 1 (2.2.3) | "Regression testing confirms that no adverse consequences have been caused by a change, including a fix that has already been confirmation tested." |
| Glossary | 9 | "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." |
| When: after a change | 1 (2.2.3) | "Changes are typically made ... to either enhance it by adding a new feature or to fix it by removing a defect. Testing should then also include confirmation testing and regression testing." |
| Impact analysis | 1 (2.2.3) | "It is advisable first to perform an impact analysis to recognize the extent of the regression testing." |
| Automation, CI | 1 (2.2.3) | "regression testing is a strong candidate for automation" |

### Q9 Retesting and regression testing

| Claim | Source | Quote |
|---|---|---|
| Retesting is a synonym of confirmation testing | 10 | Entry "confirmation testing", synonym "retesting". "A type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur." |
| Confirmation confirms the fix | 1 (2.2.3) | "Confirmation testing confirms that an original defect has been successfully fixed." |
| Run the failed tests | 1 (2.2.3) | "executing all tests that previously have failed due to the defect" |
| Regression: same component, other components, connected systems | 1 (2.2.3) | "the same component where the change was made, other components in the same system, or even other connected systems" |

### Q10 Exploratory testing

| Claim | Source | Quote |
|---|---|---|
| Design, execute, evaluate at the same time | 1 (4.4.2) | "tests are simultaneously designed, executed, and evaluated while the tester learns about the test object" |
| Few specifications or time pressure | 1 (4.4.2) | "useful when there are few or inadequate specifications or there is significant time pressure" |
| Session-based: time box, charter, debriefing | 1 (4.4.2) | "performed within a defined time box. The tester uses a test charter ... usually followed by a debriefing" |
| Example (60 minutes, charter, checkout) | none | The tutorial's own example, marked in the callout |

### Q11 Ad hoc and exploratory testing

| Claim | Source | Quote |
|---|---|---|
| Ad hoc testing | 11 | "Informal testing performed without test analysis and test design." |
| The syllabus does not use the term | 1 | No hit for "ad hoc" in the text (`fundamentals-sources.md`: "The Foundation syllabus does not use it") |
| Exploratory designs tests during the session; structure | 1 (4.4.2) | See Q10 |

### Q12 Acceptance testing

| Claim | Source | Quote |
|---|---|---|
| Validation, readiness, business needs | 1 (2.2.1) | "Acceptance testing focuses on validation and on demonstrating readiness for deployment, which means that the system fulfills the user's business needs." |
| Glossary | 12 | "A test level that focuses on determining whether to accept the system." |
| Ideally the intended users | 1 (2.2.1) | "Ideally, acceptance testing should be performed by the intended users." |
| Six forms | 1 (2.2.1) | "user acceptance testing (UAT), operational acceptance testing, contractual acceptance testing and regulatory acceptance testing, alpha testing and beta testing" |

### Q13 UAT

| Claim | Source | Quote |
|---|---|---|
| UAT is a main form | 1 (2.2.1) | See Q12 |
| Glossary | 13 | "A type of acceptance testing performed to determine if intended users accept the system." |
| Why: validation; requirements met but users not satisfied | 1 (2.2.1, 1.3) | See Q3 (principle 7) and Q12 |
| Quadrant Q3 | 1 (5.1.7) | "Quadrant Q3 (business facing, critique the product). This quadrant contains exploratory testing, usability testing, user acceptance testing." |

### Q14 Alpha and beta testing

| Claim | Source | Quote |
|---|---|---|
| Both are acceptance testing forms | 1 (2.2.1) | See Q12 |
| Alpha | 14 | "A type of acceptance testing performed in the developer's test environment by roles outside the development organization." |
| Beta | 15 | "A type of acceptance testing performed at an external site to the developer's test environment by roles outside the development organization." |

### Q15 Compatibility testing

| Claim | Source | Quote |
|---|---|---|
| "Compatibility testing" has no glossary entry | none | Checked in the 1128 terms (see "Terms that ISTQB does not define") |
| Compatibility is a quality characteristic | 1 (2.2.2) | "Compatibility" in the ISO/IEC 25010 list |
| Glossary compatibility | 16 | "The degree to which a component or system can exchange information with other components or systems, and/or perform its required functions while sharing the same hardware or software environment." |
| Cross-browser compatibility | 17 | "The degree to which a website or web application can function across different browsers and degrade gracefully when browser features are absent or lacking." |
| Cross-device testing | 18 | "A test type to determine whether a component or system performs correctly across its intended range of devices." |
| "Compatibility testing means testing the compatibility characteristic" | none | The tutorial's own explanation, in a note callout (fix round 1) |
| Examples (Chrome, Firefox, Safari; Android versions; screen sizes) | none | The tutorial's own examples, marked in the callout |

### Q16 Usability testing

| Claim | Source | Quote |
|---|---|---|
| Glossary | 19 | "Testing to evaluate the degree to which the system can be used by specified users with effectiveness, efficiency and satisfaction in a specified context of use." |
| Usability is a characteristic | 1 (2.2.2) | "Usability (also known as interaction capability)" |
| Special environment, usability lab | 1 (2.2.2) | "Non-functional testing sometimes needs a very specific test environment, such as a usability lab for usability testing." |
| Examples | none | The tutorial's own examples, marked in the callout |

### Q17 Test plan

| Claim | Source | Quote |
|---|---|---|
| Objectives, resources, processes of one project | 1 (5.1.1) | "A test plan describes the test objectives, resources and processes for a test project." (as used in the planning chapter) |
| Glossary | 20 | "Documentation that describes test objectives, means and schedule for achieving test coordination." |
| Adheres to policy and strategy, or explains the deviation | 1 (5.1.1) | "Demonstrates that testing will adhere to the existing test policy and test strategy (or explains why the testing will deviate from them)" |
| Seven typical parts | 1 (5.1.1) | "Context of testing ... Assumptions and constraints ... Stakeholders ... Communication ... Risk register ... Test approach ... Budget and schedule" |

### Q18 Test strategy and test plan

| Claim | Source | Quote |
|---|---|---|
| Glossary strategy | 21 | "A description of how to perform testing to reach test objectives under given circumstances." |
| The syllabus uses the term and does not define it | 1 (1.4.2, 5.1.1) | `fundamentals-sources.md`: "The syllabus does not define the test strategy." |
| Plan follows the strategy, or explains | 1 (5.1.1) | See Q17 |
| Test approach is part of the plan | 1 (5.1.1) | "Test approach (e.g., test levels, test types, test techniques ...)" in the plan content list |
| Glossary test approach (added in fix round 1) | 22 | "The manner of implementing test tasks." |

### Q19 Test estimation

| Claim | Source | Quote |
|---|---|---|
| Glossary | 23 | "An approximation related to various aspects of testing." |
| Four techniques | 1 (5.1.4) | "In this syllabus, the following four estimation techniques are described." Ratios, extrapolation, Wideband Delphi, three-point |
| Formula | 1 (5.1.4) | "E = (a + 4*m + b) / 6" |
| Example | 1 (5.1.4) | "a=6, m=9 and b=18, then the final estimation is 10±2 person-hours" |
| Assumptions and error | 1 (5.1.4) | "the estimate is based on a number of assumptions and is always subject to estimation error." |

### Q20 Entry and exit criteria

| Claim | Source | Quote |
|---|---|---|
| Glossary entry criteria | 24 | "The set of conditions for officially starting a defined task." |
| Glossary exit criteria | 25 | "The set of conditions for officially completing a defined task." |
| Define both for each test level | 1 (5.1.3) | "Entry criteria and exit criteria should be defined for each test level" |
| Typical entry criteria | 1 (5.1.3) | "availability of resources ... availability of testware ... initial quality level of a test object (e.g., all smoke tests have passed)" |
| Typical exit criteria | 1 (5.1.3) | "measures of thoroughness ... and binary 'yes/no' criteria (e.g., planned tests have been executed" |
| Definition of Done | 1 (5.1.3) | "In Agile software development, exit criteria are often called Definition of Done" |

### Q21 Test scenario

| Claim | Source | Quote |
|---|---|---|
| ISTQB does not define "test scenario" | none | No glossary entry, no syllabus hit |
| Glossary test condition | 26 | "A testable aspect of a component or system that is intended to be tested." |
| Common meaning of a scenario (callout): a short statement of what to test for one feature or area; close to a test condition | none | The tutorial's own explanation. It agrees with the field "Test scenario or module" of the test-cases-bugs chapter ("The feature or area that the test case belongs to"). |

### Q22 Test case

| Claim | Source | Quote |
|---|---|---|
| Glossary | 27 | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." |
| No field list in the syllabus | 1 | `fundamentals-sources.md`: "The syllabus has no list of test case fields." |
| Common fields (callout): ten fields, the first seven describe the test and the last three record a run | none | The tutorial's own explanation. The list has the same ten fields as the table of the test-cases-bugs chapter (Test Case topic). |

### Q23 Test scenario and test case

| Claim | Source | Quote |
|---|---|---|
| ISTQB defines the test case | 27 | See Q22 |
| Scenario versus case (callout): the scenario says what to test, the case says how; a scenario is close to a test condition (the same comparison as Q21) | none | The tutorial's own explanation |

### Q24 Test data

| Claim | Source | Quote |
|---|---|---|
| Glossary | 28 | "Data needed for test execution." |
| Test design defines the data requirements | 1 (1.4.1) | "Test design also includes defining the test data requirements" |
| Test implementation creates or gets the data | 1 (1.4.1) | "Test implementation includes creating or acquiring the testware necessary for test execution (e.g., test data)." |
| A defect report names the test data | 1 (5.5) | "other relevant information such as the test technique, checklist or test data being used" |
| Tests wear out; change the test data | 1 (1.3, principle 5) | "existing tests and test data may need to be modified, and new tests may need to be written" |

### Q25 RTM

| Claim | Source | Quote |
|---|---|---|
| "Requirements traceability matrix" is not defined | none | See `fundamentals-sources.md` (owner-note terms) |
| Traceability | 29 | "The ability to establish explicit relationships between related work products or items within work products." |
| Traceability matrix | 30 | "A matrix which correlates work products or items within work products to determine the coverage achieved." |
| The syllabus links four kinds of item | 1 (1.4.4) | Test basis elements, testware, test results, defects |
| Coverage, impact analysis, audits | 1 (1.4.4) | "makes it possible to determine the impact of a change"; "supports coverage evaluation"; "audits" |
| RTM explanation (callout) | none | The tutorial's own explanation |

### Q26 Write test cases from requirements

| Claim | Source | Quote |
|---|---|---|
| Test analysis defines test conditions from the test basis | 1 (1.4.1) | "Test analysis includes analyzing the test basis to identify testable features. Associated test conditions are defined" |
| Test design makes test cases | 1 (1.4.1) | "Test design includes elaborating the test conditions into test cases and other testware" |
| Techniques help | 1 (1.4.1) | "Test analysis is often supported by the use of test techniques" |
| Positive first, then negative | 1 (4.5.3) | "Typically, the first test cases are positive ... After the positive test cases are done, the team should perform negative testing." |
| Keep traceability | 1 (1.4.4) | See Q25 |

## Questions 27 to 36 (the tutorial's own examples)

The group callout at question 27 says that the tables are the tutorial's own. The tables have no Cite. Each table has 7 or 8 titles of the types Positive, Negative, and Boundary. The assumed values (for example "8 to 64 characters", "5 MB", "10 items a page", "valid up to and including 30 minutes") are stated in the text before each table. In Q29 the boundary rows are 29, exactly 30, and 31 minutes.

| Claim | Source | Quote |
|---|---|---|
| Positive test cases first, then negative (question 27 intro) | 1 (4.5.3) | "Typically, the first test cases are positive ... the team should perform negative testing." |
| Boundary value analysis tests the edges of a range (question 27 intro) | 1 (4.2.2) | "Boundary Value Analysis (BVA) is a test technique based on exercising the boundaries of equivalence partitions." |
| All 10 tables | none | The tutorial's own examples |

## Questions 37 to 45

### Q37 Bug or defect

| Claim | Source | Quote |
|---|---|---|
| Glossary defect | 31 | "An imperfection or deficiency in a work product where it does not meet its requirements or specifications or impairs its intended use." |
| Bug is a synonym | 31; 1 (1.2.3) | Synonyms: bug, fault, flaw. "Human beings make errors (mistakes), which produce defects (faults, bugs), which in turn may result in failures." |
| A defect causes a failure only when the code runs | 1 (1.2.3) | "If a defect in code is executed, the system may fail to do what it should do ... causing a failure." Some defects "may never result in a failure". |

### Q38 Fields of a bug report

| Claim | Source | Quote |
|---|---|---|
| Glossary | 32 | "Documentation of the occurrence, nature, and status of a defect." |
| The typical fields | 1 (5.5) | "A defect report logged during dynamic testing typically includes: Unique identifier ... Title ... Date ... Identification of the test object and test environment ... Context ... Description ... Expected results and actual results ... Severity ... Priority ... Status ... References" |
| Tools fill fields | 1 (5.5) | "Some of this data may be automatically included when using defect management tools (e.g., identifier, date, author and initial status)." |

### Q39 Bug title

| Claim | Source | Quote |
|---|---|---|
| Title = short summary | 1 (5.5) | "Title with a short summary of the anomaly being reported" |
| How to write it (callout) | none | The tutorial's own advice |

### Q40 Severity

| Claim | Source | Quote |
|---|---|---|
| Glossary | 33 | "The degree of impact that a defect has on the development, testing or operation of a component or system." |
| Field in the report | 1 (5.5) | "Severity of the defect (degree of impact) on the interests of stakeholders or requirements" |
| No scale of levels | 1 (5.5) | No levels are named (`fundamentals-sources.md`, test-cases-bugs chapter) |
| Examples (callout) | none | The tutorial's own examples |

### Q41 Priority

| Claim | Source | Quote |
|---|---|---|
| Glossary | 34 | "The level of importance assigned to a task according to specific criteria." |
| Field in the report | 1 (5.5) | "Priority to fix" |
| Examples (callout) | none | The tutorial's own examples |

### Q42 Severity and priority

| Claim | Source | Quote |
|---|---|---|
| Definitions | 33, 34 | See Q40, Q41 |
| Separate fields | 1 (5.5) | "Severity of the defect ... Priority to fix" (two bullets) |
| Rules for classification; all stakeholders follow the process (fix round 1: the answer no longer says that the team sets the values in that step) | 1 (5.5) | "a workflow for handling individual defects or anomalies from their discovery to their closure and rules for their classification ... The process must be followed by all involved stakeholders." |

### Q43 and Q44 Examples

| Claim | Source | Quote |
|---|---|---|
| Separate fields in the report | 1 (5.5) | See Q42 |
| "In the tutorial's view, a defect can then have a high severity and a low priority" (and the reverse) | none | The tutorial's own inference, marked in the text. Q42 has it in a "tutorial's own explanation" callout. |
| The examples in both tables | none | The tutorial's own examples. Q43 has three rows, each with a reason (fix round 1: two rows replaced). |

### Q45 Bug life cycle

| Claim | Source | Quote |
|---|---|---|
| Not defined | none | No entry, no syllabus hit |
| Example statuses | 1 (5.5) | "Status of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)" |
| Defect workflow | 35 | "The state transition model of a defect lifecycle, including responsibilities." |
| Four activities | 1 (5.5) | "log the reported anomalies, analyze and classify them, decide on a suitable response such as to fix or keep it as it is and finally to close the defect report" |
| Common states (callout) | none | The tutorial's own explanation |

## Questions 46 to 50 (the tutorial's own advice)

The group callout at question 46 says so. Only the sentences that carry a Cite state an ISTQB fact.

| Q | Claim | Source | Quote |
|---|---|---|---|
| 46 | A reported anomaly may be a defect or something else | 1 (5.5) | "the reported anomalies may turn out to be real defects or something else (e.g., false-positive result, change request)" |
| 47 | Static testing finds requirement defects, in the earliest phases | 1 (3.1.2, 3.1.3) | "Static testing can detect defects in the earliest phases of the SDLC" / "Defects in requirements (e.g., inconsistencies, ambiguities, contradictions, omissions" |
| 47 | The plan has a part for assumptions | 1 (5.1.1) | "Assumptions and constraints of the test project" |
| 48 | Exhaustive testing is not possible; focus the effort (cite added in fix round 1) | 1 (1.3, principle 2) | "Testing everything is not feasible except in trivial cases" / "test techniques ..., test case prioritization ..., and risk-based testing ..., should be used to focus test efforts" |
| 48 | Risk-based prioritization | 1 (5.1.5) | "Test cases covering the most important risks are executed first." |
| 48 | Defect clusters | 1 (1.3, principle 4) | "A small number of system components usually contain most of the defects discovered" |
| 49 | Report needs the object, the environment, and a description that allows reproduction | 1 (5.5) | "Identification of the test object and test environment"; "Description of the failure to enable reproduction and resolution" |
| 49 | Reproduction is the first step of debugging | 1 (1.1.2) | "Reproduction of a failure, Diagnosis (finding the defect), Fixing the defect" |
| 50 | Some defects fail only in specific circumstances | 1 (1.2.3) | "others will only result in a failure in specific circumstances" |
| 50 | A report gives enough information | 1 (5.5) | "Provide those responsible for handling and resolving reported defects with sufficient information to resolve the issue" |
| 46 to 50 | The steps of the answers | none | The tutorial's own advice |

## Fix round 1 (2026-10-20)

The fact-check (1e1a832) and the review found 10 FAILs and 9 findings. The changes:

- Sources 4 and 5 now use the slugs `quality-assurance` and `quality-control`. The build script checks each glossary slug against the API list of terms (all 35 slugs exist). Sources that no answer cites any more were removed (testing, high-level test case, low-level test case, test environment). "test approach" was added for Q18. The page has 35 sources.
- Every answer has 2 to 5 sentences outside the tables and callouts (script check). No run of 9 or more words matches the syllabus text or a glossary definition (script scan of 9-word runs; the earlier check used 8).
- Q5, Q6, Q9, Q18, Q42, Q43, Q44, Q48: the eight FAIL rows of the fact-check are fixed. Q15, Q21, Q22, Q23, Q29, Q43, Q49: the review findings are fixed.
- The chapters were read again on the main branch (the test-cases-bugs chapter in its own worktree). The text that the answers rely on did not change.
