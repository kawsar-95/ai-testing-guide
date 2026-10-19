# Fact-check: Interview Questions (`content/fundamentals/interview.mdx`)

| Item | Value |
|---|---|
| Chapter | 11, `interview`, "Interview Questions" |
| Date | 2026-10-20 |
| Round | 3 (round 1 tables kept below; round 2 and round 3 sections at the end) |
| Page checked | round 1: commit c6d766a; round 2: commit a024a52; round 3: commit feb84cc (branch `fund-ch/interview`) |
| Checker | an independent agent (not the writer) |

## Sources

| n | Source | Where checked |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1, https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`: 1.1, 1.1.1, 1.1.2, 1.2.1, 1.2.2, 1.2.3, 1.3, 1.4.1, 1.4.4, 2.1.5, 2.2.1, 2.2.2, 2.2.3, 3.1.3, 4.2.2, 4.4.2, 4.5.3, 5.1.1, 5.1.3, 5.1.4, 5.1.5, 5.1.7, 5.5 |
| 2–38 | ISTQB Glossary: testing, verification, validation, quality assurance, quality control, static testing, dynamic testing, smoke testing, regression testing, confirmation testing, ad hoc testing, acceptance testing, user acceptance testing, alpha testing, beta testing, compatibility, cross-browser compatibility, cross-device testing, usability testing, test plan, test strategy, test estimation, entry criteria, exit criteria, test condition, test case, high-level test case, low-level test case, test data, traceability, traceability matrix, defect, defect report, severity, priority, defect workflow, test environment | `https://api.glossary.istqb.org/v1/terms/<slug>` with `Accept-Language: en_US`, 2026-10-20. All slugs return HTTP 200, except `qa` (n=5) and `qc` (n=6): both return HTTP 404. The correct slugs are `quality-assurance` and `quality-control` (`fundamentals-sources.md` S4, S5). |

The 38 sources are numbered in the order of the first cite (checked with a script). Every source is cited at least once.

## Table 1: cited claims

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | Q1 | Testing finds defects and evaluates the quality of work products | 1 | PASS | "a set of activities to discover defects and evaluate the quality of software work products" (1.1) | |
| 2 | Q1 | Glossary: a process in the SDLC that evaluates quality | 2 | PASS | "The process within the software development lifecycle that evaluates the quality of a component or system and related work products." | |
| 3 | Q1 | Failing software costs money, time, reputation; injury or death | 1 | PASS | "loss of money, time or business reputation, and, in extreme cases, even injury or death" (1.1) | |
| 4 | Q1 | Testing lowers the risk of failure in operation | 1 | PASS | "helps reducing the risk of software failure in operation" (1.1) | |
| 5 | Q1 | Facts for decisions such as the release decision | 1 | PASS | "part of a larger project management activity, contributing to decisions to move to the next phase of the SDLC, such as the release decision" (1.2.1) | |
| 6 | Q2 | A list of typical objectives, nine items | 1 | PASS | "The typical test objectives are:" followed by nine bullets (1.1.1) | |
| 7 | Q2 | Finding defects and causing failures is one of nine | 1 | PASS | "Causing failures and finding defects" (1.1.1) | |
| 8 | Q2 | Other objectives: risk, verify, inform, confidence, validate | 1 | PASS | "Reducing the risk level of inadequate software quality … Building confidence in the quality of the test object" (1.1.1) | |
| 9 | Q2 | Objectives vary with context: level, risks, life cycle | 1 | PASS | "depending upon the context, which includes the work product being tested, the test level, risks, the software development lifecycle" (1.1.1) | |
| 10 | Q3 | Testing involves verification and validation | 1 | PASS | "While testing involves verification … it also involves validation" (1.1) | |
| 11 | Q3 | Verification: meets specified requirements | 1 | PASS | "checking whether the system meets specified requirements" (1.1) | |
| 12 | Q3 | Validation: needs of users and stakeholders in the operational environment | 1 | PASS | "checking whether the system meets users' and other stakeholders' needs in its operational environment" (1.1) | |
| 13 | Q3 | Glossary verification and validation | 3, 4 | PASS | "confirming that a work product fulfills its specification" / "a work product matches a stakeholder's needs" | |
| 14 | Q3 | Test every requirement, fix every defect, still miss user needs | 1 | PASS | "Thoroughly testing all the specified requirements and fixing all the defects found could still produce a system that does not fulfill the users' needs" (1.3) | |
| 15 | Q4 | QA is process-oriented and preventive | 1 | PASS | "QA is a process-oriented, preventive approach that focuses on the implementation and improvement of processes" (1.2.2) | |
| 16 | Q4 | Testing is product-oriented, corrective, a major form of QC | 1 | PASS | "Testing is a product-oriented, corrective approach … Testing is a major form of quality control" (1.2.2) | |
| 17 | Q4 | Glossary QA | 5 | FAIL | "Activities focused on providing confidence that quality requirements will be fulfilled." (at `/terms/quality-assurance`) | The text matches the glossary. The cite URL `https://glossary.istqb.org/en_US/term/qa` is wrong: the API returns 404 for `qa`. Fix the URL to `.../term/quality-assurance`. |
| 18 | Q4 | Glossary QC | 6 | FAIL | "Activities designed to evaluate the quality of a component or system." (at `/terms/quality-control`) | Same problem: `.../term/qc` returns 404. Fix the URL to `.../term/quality-control`. |
| 19 | Q4 | QA is the responsibility of everyone | 1 | PASS | "is the responsibility of everyone on a project" (1.2.2) | |
| 20 | Q5 | Static testing does not run the item; reviews and static analysis | 1, 7 | PASS | "Static testing includes reviews (see chapter 3) and static analysis." / "does not involve the execution of a test item" | |
| 21 | Q5 | Dynamic testing runs the test item | 8 | PASS | "A test approach that involves test execution of a test item." | |
| 22 | Q5 | Dynamic testing causes a failure, "and then the tester analyzes the failure to find the defect" | 1 | FAIL | "dynamic testing causes failures from which the associated defects are determined through subsequent analysis" (3.1.3) | The syllabus does not say that the tester does the analysis. Finding the cause of a failure is debugging, a separate activity (1.1.2). Fix: "Dynamic testing causes a failure. Later analysis of the failure finds the defect." |
| 23 | Q5 | Static testing finds the defect directly | 1 | PASS | "Static testing finds defects directly" (3.1.3) | |
| 24 | Q5 | They complement each other; each finds some defect types the other misses | 1 | PASS | "complement each other … there are some defect types that can only be found by either static or dynamic testing" (3.1.3) | |
| 25 | Q6 | Functional testing evaluates the functions (what) | 1 | PASS | "The functions are 'what' the test object should do." (2.2.2) | Content PASS. See the copy check: the first sentence copies the syllabus. |
| 26 | Q6 | Non-functional: other attributes, how well | 1 | PASS | "evaluates attributes other than functional characteristics … the testing of 'how well the system behaves'" (2.2.2) | |
| 27 | Q6 | The eight ISO/IEC 25010 characteristics | 1 | PASS | "Performance efficiency, Compatibility, Usability … Portability … Safety" (2.2.2) | |
| 28 | Q6 | Both kinds apply at all test levels | 1 | PASS | "All the four above mentioned test types can be applied to all test levels" (2.2.2) | |
| 29 | Q7 | Glossary smoke testing | 9 | PASS | "A test type to gain sufficient confidence that a test object is ready for planned testing." | |
| 30 | Q7 | Syllabus uses "smoke tests" only; entry criterion example | 1 | PASS | "initial quality level of a test object (e.g., all smoke tests have passed)" (5.1.3) | Also 5.1.7 Q4. No "smoke testing" in the text. |
| 31 | Q8 | Regression: no adverse consequences, includes a confirmed fix | 1 | PASS | "confirms that no adverse consequences have been caused by a change, including a fix that has already been confirmation tested" (2.2.3) | |
| 32 | Q8 | Glossary regression testing | 10 | PASS | "to detect whether defects have been introduced or uncovered in unchanged areas of the software" | |
| 33 | Q8 | Perform after a change (feature or fix) | 1 | PASS | "to either enhance it by adding a new feature or to fix it by removing a defect. Testing should then also include … regression testing" (2.2.3) | |
| 34 | Q8 | Impact analysis first | 1 | PASS | "It is advisable first to perform an impact analysis … Impact analysis shows which parts of the software could be affected." (2.2.3) | |
| 35 | Q8 | Suites grow; candidate for automation and CI | 1 | PASS | "will increase with each iteration or release, so regression testing is a strong candidate for automation … Where CI is used" (2.2.3) | |
| 36 | Q9 | "Retesting" is a synonym of confirmation testing | 11 | PASS | API: confirmation testing, synonyms `["retesting"]` | |
| 37 | Q9 | Confirms the fix; run the tests that failed | 1 | PASS | "confirms that an original defect has been successfully fixed … executing all tests that previously have failed due to the defect" (2.2.3) | "A typical way" is fair: the syllabus lists it as one of the ways. |
| 38 | Q9 | Regression scope: same component, other components, connected systems | 1 | PASS | "the same component where the change was made, other components in the same system, or even other connected systems" (2.2.3) | |
| 39 | Q9 | Table, Question row | 1 | PASS | as rows 37, 38 | |
| 40 | Q10 | Design, run, evaluate at the same time while learning | 1 | PASS | "tests are simultaneously designed, executed, and evaluated while the tester learns about the test object" (4.4.2) | |
| 41 | Q10 | Few or poor specifications, or time pressure | 1 | PASS | "useful when there are few or inadequate specifications or there is significant time pressure" (4.4.2) | |
| 42 | Q10 | Session-based: time box, charter, debriefing | 1 | PASS | "within a defined time box. The tester uses a test charter … usually followed by a debriefing" (4.4.2) | |
| 43 | Q11 | Glossary ad hoc testing | 12 | PASS | "Informal testing performed without test analysis and test design." | |
| 44 | Q11 | The syllabus does not use the term | 1 | PASS | 0 hits for "ad hoc" and "ad-hoc" in the syllabus text | |
| 45 | Q11 | Exploratory designs during the session; time boxes, charters, debriefings | 1 | PASS | as rows 40, 42 | |
| 46 | Q12 | Validation, readiness for deployment, business needs | 1 | PASS | "focuses on validation and on demonstrating readiness for deployment, which means that the system fulfills the user's business needs" (2.2.1) | |
| 47 | Q12 | Glossary acceptance testing | 13 | PASS | "A test level that focuses on determining whether to accept the system." | |
| 48 | Q12 | Ideally the intended users; six main forms | 1 | PASS | "Ideally, acceptance testing should be performed by the intended users. The main forms … (UAT), operational … contractual … regulatory … alpha testing and beta testing." (2.2.1) | Six forms counted. |
| 49 | Q13 | UAT is a main form | 1 | PASS | as row 48 | |
| 50 | Q13 | Glossary UAT | 14 | PASS | "A type of acceptance testing performed to determine if intended users accept the system." | |
| 51 | Q13 | Requirements met but user needs missed | 1 | PASS | as row 14 | |
| 52 | Q13 | UAT is in Q3, business facing, critique the product | 1 | PASS | "Quadrant Q3 (business facing, critique the product). This quadrant contains exploratory testing, usability testing, user acceptance testing." (5.1.7) | |
| 53 | Q14 | Alpha and beta are forms of acceptance testing | 1 | PASS | as row 48 | |
| 54 | Q14 | Alpha: developer's test environment, roles outside | 15 | PASS | "performed in the developer's test environment by roles outside the development organization" | |
| 55 | Q14 | Beta: external site, roles outside | 16 | PASS | "performed at an external site to the developer's test environment by roles outside the development organization" | |
| 56 | Q15 | Compatibility is a non-functional characteristic | 1 | PASS | "Compatibility" in the ISO/IEC 25010 list (2.2.2) | |
| 57 | Q15 | Glossary compatibility | 17 | PASS | "can exchange information with other components or systems, and/or perform its required functions while sharing the same hardware or software environment" | |
| 58 | Q15 | Cross-browser compatibility | 18 | PASS | "can function across different browsers and degrade gracefully" | |
| 59 | Q15 | Cross-device testing | 19 | PASS | "determine whether a component or system performs correctly across its intended range of devices" | |
| 60 | Q16 | Glossary usability testing | 20 | PASS | "can be used by specified users with effectiveness, efficiency and satisfaction in a specified context of use" | |
| 61 | Q16 | Usability is a characteristic; usability lab | 1 | PASS | "Usability (also known as interaction capability)" / "such as a usability lab for usability testing" (2.2.2) | |
| 62 | Q17 | Plan: objectives, resources, processes of a project | 1 | PASS | "A test plan describes the test objectives, resources and processes for a test project." (5.1.1) | |
| 63 | Q17 | Glossary test plan | 21 | PASS | "Documentation that describes test objectives, means and schedule for achieving test coordination." | |
| 64 | Q17 | Adheres to policy and strategy, or explains | 1 | PASS | "Demonstrates that testing will adhere to the existing test policy and test strategy (or explains why the testing will deviate from them)" (5.1.1) | |
| 65 | Q17 | Seven typical parts | 1 | PASS | "Context of testing … Assumptions and constraints … Stakeholders … Communication … Risk register … Test approach … Budget and schedule" (5.1.1) | |
| 66 | Q18 | Glossary test strategy | 22 | PASS | "A description of how to perform testing to reach test objectives under given circumstances." | |
| 67 | Q18 | The syllabus uses the term but does not define it | 1 | PASS | Only uses in 1.4.2, 5.1.1 (`fundamentals-sources.md`) | |
| 68 | Q18 | The plan covers one project; follows the strategy or explains | 1 | PASS | as row 64 | |
| 69 | Q18 | "The test approach, which is the way the team implements the test tasks, is one part of the plan." | 1 | FAIL | S1 lists "Test approach (e.g., test levels, test types, …)" as plan content (5.1.1). It gives no definition. | The definition comes from the glossary entry "test approach" ("The manner of implementing test tasks."), which is not a source of this page. Fix: add the glossary term "test approach" as a source and cite it for the clause, or delete the clause. |
| 70 | Q19 | Glossary test estimation | 23 | PASS | "An approximation related to various aspects of testing." | |
| 71 | Q19 | Four techniques | 1 | PASS | "the following four estimation techniques are described": ratios, extrapolation, Wideband Delphi, three-point (5.1.4) | |
| 72 | Q19 | E = (a + 4m + b) / 6; 6, 9, 18 gives 10 ± 2 | 1 | PASS | "E = (a + 4*m + b) / 6 … a=6, m=9 and b=18, then the final estimation is 10±2 person-hours" (5.1.4) | |
| 73 | Q19 | Estimates rest on assumptions and have error | 1 | PASS | "based on a number of assumptions and is always subject to estimation error" (5.1.4) | |
| 74 | Q20 | Glossary entry and exit criteria | 24, 25 | PASS | "for officially starting a defined task" / "for officially completing a defined task" | |
| 75 | Q20 | Define both for each test level | 1 | PASS | "Entry criteria and exit criteria should be defined for each test level" (5.1.3) | |
| 76 | Q20 | Typical entry and exit criteria | 1 | PASS | "availability of resources … availability of testware … all smoke tests have passed" / "measures of thoroughness … binary 'yes/no' criteria (e.g., planned tests have been executed" (5.1.3) | |
| 77 | Q20 | Definition of Done | 1 | PASS | "In Agile software development, exit criteria are often called Definition of Done" (5.1.3) | |
| 78 | Q21 | Glossary test condition | 26 | PASS | "A testable aspect of a component or system that is intended to be tested." | |
| 79 | Q22, Q23 | Glossary test case | 27 | PASS | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." | |
| 80 | Q23 | High-level and low-level test case | 28, 29 | PASS | "A test case with abstract preconditions, input data …" / "A test case with concrete values for preconditions, input data …" | |
| 81 | Q24 | Glossary test data | 30 | PASS | "Data needed for test execution." | |
| 82 | Q24 | Design defines data needs; implementation creates or gets data | 1 | PASS | "Test design also includes defining the test data requirements" / "creating or acquiring the testware necessary for test execution (e.g., test data)" (1.4.1) | |
| 83 | Q24 | A defect report names the test data in use | 1 | PASS | "Context of the defect (e.g., … other relevant information such as the test technique, checklist or test data being used)" (5.5) | "so that others can reproduce the failure" is the writer's reading of the report objectives. Acceptable. |
| 84 | Q24 | Tests wear out; change test data | 1 | PASS | "existing tests and test data may need to be modified" (1.3, principle 5) | |
| 85 | Q25 | Glossary traceability and traceability matrix | 31, 32 | PASS | "The ability to establish explicit relationships between related work products" / "correlates work products … to determine the coverage achieved" | |
| 86 | Q25 | The syllabus links basis, testware, results, defects | 1 | PASS | "between the test basis elements, testware associated with these elements …, test results, and defects" (1.4.4) | |
| 87 | Q25 | Coverage of requirements; impact analysis; audits | 1 | PASS | "Traceability of test cases to requirements can verify that the requirements are covered … determine the impact of changes, facilitates audits" (1.4.4) | |
| 88 | Q26 | Analysis defines test conditions; design makes test cases; techniques help | 1 | PASS | "Associated test conditions are defined" / "elaborating the test conditions into test cases" / "Test analysis is often supported by the use of test techniques" (1.4.1) | |
| 89 | Q26, Q27 | Positive test cases first, then negative | 1 | PASS | "Typically, the first test cases are positive … After the positive test cases are done, the team should perform negative testing." (4.5.3) | The source context is ATDD for user stories. Q26 says "For a user story", so it fits. Q27 generalizes slightly ("ISTQB advises"). Acceptable. |
| 90 | Q27 | BVA tests the edges of a range | 1 | PASS | "a test technique based on exercising the boundaries of equivalence partitions … can only be used for ordered partitions" (4.2.2) | |
| 91 | Q37 | Glossary defect; "bug" is a synonym; syllabus "defects (faults, bugs)" | 33, 1 | PASS | "An imperfection or deficiency in a work product …"; synonyms `["bug","fault","flaw"]`; "produce defects (faults, bugs)" (1.2.3) | |
| 92 | Q37 | Error → defect → may cause failure | 1 | PASS | "Human beings make errors (mistakes), which produce defects (faults, bugs), which in turn may result in failures." (1.2.3) | |
| 93 | Q37 | A defect causes a failure only when the code runs | 1 | PASS | "If a defect in code is executed, the system may fail to do what it should do" (1.2.3) | Same sentence as the fact-checked `defects-principles` chapter. |
| 94 | Q38 | Glossary defect report | 34 | PASS | "Documentation of the occurrence, nature, and status of a defect." | |
| 95 | Q38 | The typical fields | 1 | PASS | "Unique identifier … Title … Date … Identification of the test object and test environment … Context … Description … Expected results and actual results … Severity … Priority … Status … References" (5.5) | |
| 96 | Q38 | Tools fill some fields | 1 | PASS | "automatically included when using defect management tools (e.g., identifier, date, author and initial status)" (5.5) | |
| 97 | Q39 | Title is a short summary | 1 | PASS | "Title with a short summary of the anomaly being reported" (5.5) | |
| 98 | Q40, Q42 | Glossary severity | 35 | PASS | "The degree of impact that a defect has on the development, testing or operation of a component or system." | |
| 99 | Q40, Q42, Q43, Q44 | A defect report has a field for severity (and one for priority); no scale | 1 | PASS | "Severity of the defect (degree of impact) …" / "Priority to fix" (5.5); no levels named | |
| 100 | Q41, Q42 | Glossary priority | 36 | PASS | "The level of importance assigned to a task according to specific criteria." | |
| 101 | Q41 | The priority field is the priority to fix | 1 | PASS | "Priority to fix" (5.5) | |
| 102 | Q42 | "The team sets both when it classifies the defect, and all stakeholders must follow the same classification rules." | 1 | FAIL | "a workflow for handling individual defects … and rules for their classification … The process must be followed by all involved stakeholders." (5.5) | The second half passes. The syllabus does not say that the team sets severity and priority in the classification step. Fix: "The defect management process has rules to classify defects, and all involved stakeholders must follow it." |
| 103 | Q45 | Example statuses | 1 | PASS | "Status of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)" (5.5) | |
| 104 | Q45 | Glossary defect workflow | 37 | PASS | "The state transition model of a defect lifecycle, including responsibilities." | |
| 105 | Q45 | Four activities | 1 | PASS | "log the reported anomalies, analyze and classify them, decide on a suitable response … and finally to close the defect report" (5.5) | |
| 106 | Q46 | An anomaly may be a defect or something else | 1 | PASS | "may turn out to be real defects or something else (e.g., false–positive result, change request) - this is resolved during the process" (5.5) | |
| 107 | Q47 | Static testing finds ambiguities, omissions, contradictions in requirements | 1 | PASS | "Defects in requirements (e.g., inconsistencies, ambiguities, contradictions, omissions" (3.1.3) | |
| 108 | Q47 | Tester review of a specification finds incompleteness early | 1 | PASS | "Reviewing the specification from the perspective of testers … often find potential defects, such as ambiguities, incompleteness" (2.1.5) | "early": the practice is a shift-left practice. |
| 109 | Q47 | A plan has assumptions and constraints | 1 | PASS | "Assumptions and constraints of the test project" (5.1.1) | |
| 110 | Q48 | Techniques, prioritization, risk-based testing focus the effort | 1 | PASS | "test techniques …, test case prioritization …, and risk-based testing …, should be used to focus test efforts" (1.3) | |
| 111 | Q48 | Risk-based prioritization runs the most important risks first | 1 | PASS | "Test cases covering the most important risks are executed first." (5.1.5) | |
| 112 | Q48 | A few components hold most defects | 1 | PASS | "A small number of system components usually contain most of the defects discovered" (1.3) | |
| 113 | Q49 | Report needs object, environment, description for reproduction | 1 | PASS | "Identification of the test object and test environment" / "Description of the failure to enable reproduction and resolution" (5.5) | |
| 114 | Q49 | Glossary test environment | 38 | PASS | "hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test" | |
| 115 | Q49 | The usual debugging steps | 1 | PASS | "Reproduction of a failure / Diagnosis (finding the defect) / Fixing the defect" (1.1.2) | The steps match. See the review for the role question. |
| 116 | Q50 | Some defects fail only in specific circumstances | 1 | PASS | "others will only result in a failure in specific circumstances" (1.2.3) | |
| 117 | Q50 | A defect report gives enough information to resolve the issue | 1 | PASS | "Provide those responsible for handling and resolving reported defects with sufficient information to resolve the issue" (5.5) | "must" is a little stronger than "objective". Acceptable. |

## Table 2: warning callouts

Not applicable. The interview chapter has no notes blocks.

## Table 3: "not defined" statements

| # | Q | Statement | Verdict | Evidence |
|---|---|---|---|---|
| 1 | 7 | The syllabus and glossary do not define sanity testing | PASS | No entry in the 1128 glossary terms (API list, 2026-10-20). 0 hits for "sanity" in the syllabus. |
| 2 | 11 | The syllabus does not use "ad hoc testing" | PASS | 0 hits for "ad hoc" or "ad-hoc". |
| 3 | 15 | The glossary does not define "compatibility testing" | PASS | No entry. Entries `compatibility`, `backward-compatibility`, `cross-browser-compatibility` exist. The syllabus has "Compatibility" only as a characteristic. |
| 4 | 18 | The syllabus uses "test strategy" but does not define it | PASS | Only uses in 1.4.2 and 5.1.1. |
| 5 | 21, 23 | ISTQB does not define "test scenario" | PASS | No entry and no definition text contains "test scenario". 0 hits in the syllabus. (The glossary has "scenario-based testing", a different term.) |
| 6 | 22 | The syllabus gives no list of test case fields | PASS | No such list. 4.5.3 says only that ATDD test cases contain preconditions, inputs, and postconditions. |
| 7 | 25 | ISTQB does not define "requirements traceability matrix" | PASS | No entry. "traceability matrix" is an entry. |
| 8 | 40 | The syllabus gives no scale of severity levels | PASS | 5.5 names the field only. |
| 9 | 45 | ISTQB does not define "bug life cycle" | PASS | No entry. 0 hits for "life cycle" in the body text. |

## Table 4: uncited ISTQB facts

| # | Q | Text | Verdict | Note |
|---|---|---|---|---|
| 1 | 9 | Table row "Scope: The fixed defect / The changed area and the areas around it" (L129) | FAIL | ISTQB scope facts with no cite, and "the areas around it" is vaguer than the syllabus. Fix: add `<Cite n={1} />` to both cells and write "The same component, other components, and connected systems", as in the `test-types` chapter. |
| 2 | 42 | "The two values are separate, so a defect can have any mix of them. Severity describes the damage. Priority describes how soon the team must act." (L535) | FAIL | Not ISTQB text and not marked. The glossary defines priority as a level of importance, not "how soon". Fix: move these sentences into `<Callout type="note" title="The tutorial's own explanation">`, as the `test-cases-bugs` chapter does. |
| 3 | 43, 44 | "So a defect can have a high severity and a low priority." / "… a low severity and a high priority." (L541, L553) | FAIL | The same inference as row 2, with no mark. "These examples are the tutorial's own." marks only the tables. Fix: "In the tutorial's view, a defect can then have …", or put the sentence in the same kind of callout. |
| 4 | 48 | "Exhaustive testing is not possible, so testers focus the effort." (L601) | FAIL | Principle 2 (1.3) with no cite. The group callout says that only sentences with a citation state ISTQB facts. Fix: add `<Cite n={1} />`. |

Other uncited sentences in Q1–Q45 are conclusions of the cited sentence before them (Q11 "So the difference is the design and the structure", Q14 "The difference is the place", Q18 "So the plan follows the strategy"). They pass.

## Copy check

Method: a script compared every run of 8 or more words of the page with the syllabus text.

| Q | Run | Words | Verdict |
|---|---|---|---|
| 6 | "Functional testing evaluates the functions that a component or system should perform" (L92) | 12 | FAIL. Fix: "Functional testing checks the functions that the component or system must have." (the `test-types` wording) |
| 45 | "open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed" | 13 | PASS. A list of status names, not a copied sentence. |
| 1 | "defects and evaluate the quality of software work products" | 9 | PASS (under 10) |
| 1 | "money, time, or business reputation, and in extreme cases" | 9 | PASS (under 10) |

## Round 1 summary

| Table | FAILs |
|---|---|
| Table 1 | 5 (rows 17, 18, 22, 69, 102) |
| Table 3 | 0 |
| Table 4 | 4 |
| Copy check | 1 |

Round 1 result: 10 open FAILs.

## Round 2

Page checked: commit a024a52. Diff checked: `1e1a832..a024a52`. The consistency check uses the final chapters on the main branch of the `.fund-wt` worktree (commit b8b769d). Their `lib/fundamentals/chapters.ts` topic list is the same as in this worktree.

### Round 2 sources

The page now has 35 sources. The writer removed "testing", "high-level test case", "low-level test case", and "test environment", and added "test approach" (n=22). All 35 URLs return HTTP 200 from the glossary API, including `quality-assurance` (n=4) and `quality-control` (n=5). The sources are numbered in the order of the first cite (script: 1 to 35 in order). Every source is cited.

Each Cite number was checked against the new list: Q3 2, 3; Q4 4, 5; Q5 6, 7; Q7 8; Q8 9; Q9 10; Q11 11; Q12 12; Q13 13; Q14 14, 15; Q15 16, 17, 18; Q16 19; Q17 20; Q18 21, 22; Q19 23; Q20 24, 25; Q21 26; Q22, Q23 27; Q24 28; Q25 29, 30; Q37 31; Q38 32; Q40, Q42 33; Q41, Q42 34; Q45 35. Each number points to the right term. All other cites are n=1.

### Round 1 FAILs re-checked

| Round 1 row | Round 2 text | Verdict | Note |
|---|---|---|---|
| T1 17, 18 (QA, QC URLs) | URLs `.../term/quality-assurance`, `.../term/quality-control` (L8, L9) | PASS | HTTP 200. Definitions match (row R2-4). |
| T1 22 (Q5, the tester analyzes) | "Dynamic testing causes a failure, and later analysis of the failure finds the defect, but static testing finds the defect directly." (L75) | PASS | 3.1.3: "causes failures from which the associated defects are determined through subsequent analysis". |
| T1 69 (Q18, test approach) | "The test approach is one part of the plan, and the glossary defines it as the way of implementing test tasks." n=1, 22 (L201) | PASS | Glossary test approach: "The manner of implementing test tasks." S1 5.1.1 lists "Test approach" in the plan content. |
| T1 102 (Q42, classify) | "The defect management process has rules to classify defects, and all involved stakeholders must follow it." (L504) | PASS | 5.5: "rules for their classification … The process must be followed by all involved stakeholders." |
| T4 1 (Q9, Scope row) | "The fixed defect" n=1; "The same component, other components, and connected systems" n=1 (L112) | PASS | 2.2.3. |
| T4 2 (Q42, any mix) | Moved into `<Callout type="note" title="The tutorial's own explanation">` (L506–510). Priority is now "how important it is to fix the defect". | PASS | Marked. The new wording agrees with the glossary (level of importance). |
| T4 3 (Q43, Q44 inference) | "In the tutorial's view, a defect can then have …" (L516, L528) | PASS | Marked. |
| T4 4 (Q48, exhaustive) | "Exhaustive testing is not possible, so testers focus the effort with test techniques, test case prioritization, and risk-based testing." n=1 (L570) | PASS | 1.3, principle 2. |
| Copy (Q6) | "Functional testing checks the functions that the component or system must have, which describe what the test object does." (L81) | PASS | Copy script: no run of 10 or more words. |

### Table R2-1: new or changed cited claims

| # | Q | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | 1 | A set of activities that find defects and judge quality | 1 | PASS | "a set of activities to discover defects and evaluate the quality of software work products" (1.1) | |
| 2 | 1 | Cost of money, time, reputation; even injury or death | 1 | PASS | "loss of money, time or business reputation, and, in extreme cases, even injury or death" (1.1) | |
| 3 | 3 | Pass verification, fail validation: testing every requirement does not ensure that users are satisfied | 1 | PASS | "Thoroughly testing all the specified requirements … could still produce a system that does not fulfill the users' needs and expectations" (1.3) | |
| 4 | 3, 4 | Glossary V and V; QA and QC | 2, 3, 4, 5 | PASS | "fulfills its specification" / "matches a stakeholder's needs" / "providing confidence that quality requirements will be fulfilled" / "evaluate the quality of a component or system" | |
| 5 | 4 | QA covers how the team develops and tests | 1 | PASS | "QA applies to both the development and testing processes" (1.2.2) | |
| 6 | 5 | Static testing: review or static analysis, no execution | 1, 6 | PASS | "Static testing includes reviews … and static analysis." / "does not involve the execution of a test item" | |
| 7 | 6 | Non-functional checks other attributes, how well | 1 | PASS | "evaluates attributes other than functional characteristics … 'how well the system behaves'" (2.2.2) | |
| 8 | 7 | Smoke testing: confidence that the test object is fit for planned testing | 8 | PASS | "A test type to gain sufficient confidence that a test object is ready for planned testing." | |
| 9 | 8 | Regression, glossary paraphrase, after each change, impact analysis, automation and CI | 1, 9 | PASS | "detect whether defects have been introduced or uncovered in unchanged areas" / "regression testing is a strong candidate for automation … Where CI is used" (2.2.3) | |
| 10 | 9 | Retesting = confirmation testing; run the failed tests; regression checks adverse consequences | 10, 1 | PASS | synonyms `["retesting"]` / "executing all tests that previously have failed" / "no adverse consequences have been caused by a change" | |
| 11 | 11 | Ad hoc testing skips test analysis and test design | 11 | PASS | "Informal testing performed without test analysis and test design." | |
| 12 | 15 | Compatibility is a characteristic in the syllabus | 1 | PASS | "Compatibility" in the ISO/IEC 25010 list (2.2.2) | |
| 13 | 15 | "The glossary defines compatibility as the degree to which systems can exchange information and work together in a shared environment." (L163) | 16 | FAIL | "can exchange information with other components or systems, and/or perform its required functions while sharing the same hardware or software environment" | The glossary has two alternatives ("and/or"). The second is co-existence: the system does its own functions in a shared environment. "Work together" means interoperation, which is the first part again. Fix: "… as the degree to which a system can exchange information with other systems, or do its own functions while it shares the same hardware or software environment." |
| 14 | 15 | Cross-browser, cross-device | 17, 18 | PASS | "function across different browsers" / "performs correctly across its intended range of devices" | |
| 15 | 16 | Usability testing: effectiveness, efficiency, satisfaction in a set context | 19 | PASS | "effectiveness, efficiency and satisfaction in a specified context of use" | |
| 16 | 18 | Glossary test strategy: a way to perform testing to reach the objectives in given circumstances | 21 | PASS | "A description of how to perform testing to reach test objectives under given circumstances." | Acceptable paraphrase. |
| 17 | 18 | Plan covers one project; follows the strategy or explains | 1 | PASS | "Demonstrates that testing will adhere to the existing test policy and test strategy (or explains why …)" (5.1.1) | |
| 18 | 19 | Approximation of some aspects of testing; three values a, m, b; formula | 23, 1 | PASS | "An approximation related to various aspects of testing." / "E = (a + 4*m + b) / 6" (5.1.4) | |
| 19 | 20 | Conditions to start / finish a task officially | 24, 25 | PASS | "for officially starting a defined task" / "for officially completing a defined task" | |
| 20 | 21 | "The glossary does define a test condition as a part of a component or system that the team can test and plans to test." (L219) | 26 | FAIL | "A testable aspect of a component or system that is intended to be tested." | "Part" is narrower than "aspect". A test condition can also be a quality characteristic or a behavior, not only a part. Round 1 had the right word. Fix: "… as a testable aspect of a component or system that the team intends to test." |
| 21 | 22 | Test case: five things; derived from test conditions | 27 | PASS | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." | |
| 22 | 24 | Test data: data needed to run a test; design and implementation | 28, 1 | PASS | "Data needed for test execution." / "defining the test data requirements" / "creating or acquiring … (e.g., test data)" (1.4.1) | |
| 23 | 25 | Traceability links basis, testware, results, defects; coverage, impact, audits | 29, 30, 1 | PASS | "between the test basis elements, testware …, test results, and defects" / "determine the impact of changes, facilitates audits" (1.4.4) | |
| 24 | 26 | Positive first for a user story, then negative | 1 | PASS | "Typically, the first test cases are positive … the team should perform negative testing." (4.5.3) | |
| 25 | 37 | Defect definition; bug synonym; chain; a failure only when code runs, some never | 31, 1 | PASS | "does not meet its requirements or specifications or impairs its intended use" / "some may never result in a failure" (1.2.3) | Same as the final `defects-principles` chapter. |
| 26 | 40 | Severity: how strongly a defect affects development, testing, or operation | 33 | PASS | "The degree of impact that a defect has on the development, testing or operation of a component or system." | |
| 27 | 45 | Example statuses (new order) | 1 | PASS | "open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected" (5.5) | Same eight statuses. |
| 28 | 45 | Defect workflow: a model of the states of a defect and of who is responsible for each | 35 | PASS | "The state transition model of a defect lifecycle, including responsibilities." | "for each" is a small addition. Acceptable; see review. |
| 29 | 46 | An anomaly may be a defect or something else | 1 | PASS | "may turn out to be real defects or something else (e.g., false–positive result, change request)" (5.5) | |
| 30 | 47 | A static review of requirements finds ambiguities, omissions, contradictions before any code exists | 1 | PASS | "Defects in requirements (e.g., inconsistencies, ambiguities, contradictions, omissions" (3.1.3); "Static testing can be applied to non-executable work products" (3.1.3) | |
| 31 | 47 | A plan has assumptions and constraints | 1 | PASS | "Assumptions and constraints of the test project" (5.1.1) | |
| 32 | 48 | Risk-based prioritization; defect clusters | 1 | PASS | "Test cases covering the most important risks are executed first." (5.1.5) / "A small number of system components usually contain most of the defects" (1.3) | |
| 33 | 49 | Report needs object, environment, reproduction; reproduction is the first debugging step | 1 | PASS | "Identification of the test object and test environment" (5.5) / "Reproduction of a failure / Diagnosis … / Fixing the defect" (1.1.2) | Agrees with `basics`: the tester hands over, the developer debugs. |
| 34 | 50 | Specific circumstances; enough information to resolve | 1 | PASS | "only result in a failure in specific circumstances" (1.2.3) / "sufficient information to resolve the issue" (5.5) | |

Unchanged cited claims (Q2, Q10, Q12, Q13, Q14, Q17, Q20 typical criteria, Q27, Q38, Q39, Q41) keep their round 1 PASS verdicts with the new numbers.

### Table R2-3: "not defined" statements

| Q | Statement | Verdict | Note |
|---|---|---|---|
| 15 | "ISTQB does not define 'compatibility testing' as a term" (L163) and the callout "The glossary has no entry with this name." (L167) | PASS | Same evidence as round 1 Table 3 row 3. The note callout "The tutorial's own explanation" is now present. |
| 23 | "It does not define the test scenario." (L243) | PASS | As round 1. |

The other not-defined statements are unchanged and pass (round 1 Table 3).

### Table R2-4: uncited ISTQB facts

No new uncited ISTQB fact. Q11 "So the difference is the design and the structure." (L130) and Q18 "So the plan follows the strategy for one project." (L201) are conclusions of the cited sentences before them. They pass.

### Round 2 copy check

The script found no run of 10 or more words that the page shares with the syllabus. The longest runs have 8 words ("between static testing and dynamic testing static testing", which is a heading, and "regulatory acceptance testing alpha testing and beta testing", a list of names). PASS.

### Round 2 summary

All 10 round 1 FAILs are fixed. Two new FAILs come from shortened glossary paraphrases: R2-1 row 13 (Q15, compatibility) and R2-1 row 20 (Q21, test condition).

Round 2 result: 2 open FAILs.

## Round 3

Page checked: commit feb84cc. Scope: the two round-2 FAILs and the Q45 review note. The diff `b7b8503..feb84cc` changes only L163, L219, and L540.

| Round 2 item | Round 3 text | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|
| R2-1 row 13 (Q15) | "The glossary defines compatibility as the degree to which a system can exchange information with other systems. It also covers how well a system does its own functions while it shares the same hardware or software environment." (L163) | 16 | PASS | "can exchange information with other components or systems, and/or perform its required functions while sharing the same hardware or software environment" | Both parts of the "and/or" are now correct. Q15 has 5 prose sentences (script), so it is still within 2–5. No sentence has more than 25 words. |
| R2-1 row 20 (Q21) | "The glossary does define a test condition as a testable aspect of a component or system that the team intends to test." (L219) | 26 | PASS | "A testable aspect of a component or system that is intended to be tested." | |
| R2-1 row 28 note (Q45) | "The glossary has a defect workflow, which is a model of the states of a defect, including the responsibilities." (L540) | 35 | PASS | "The state transition model of a defect lifecycle, including responsibilities." | The addition "for each" is gone. |

Copy check of the three lines: no run of 10 or more words is shared with the syllabus. PASS.

Open FAILs: 0
