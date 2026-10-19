# Fundamentals module: ISTQB sources

Research notes for the Software Testing Fundamentals module. Chapter writers cite these sources.
Check date: 2026-10-20. Every fact below was read from the source on that date, unless it is marked UNVERIFIED.

## S1. ISTQB CTFL syllabus

| Field | Value |
|---|---|
| Exact title | Certified Tester Foundation Level Syllabus (the PDF metadata title is "ISTQB Certified Tester - Foundation Level Syllabus v4.0") |
| Publisher | International Software Testing Qualifications Board (ISTQB) |
| Version | v4.0.1 (errata of v4.0) |
| Date | 2024-09-15 (page footer and revision history: "CTFL v4.0.1, 15.09.2024, Errata") |
| v4.0 release | 2023-04-21 |
| Pages | 78 |
| Public URL | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf |
| Also works | https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf (HTTP 200, `application/pdf`) |
| Landing page | https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0 (lists v4.0.1 as the current version) |
| Accessed | 2026-10-20 |
| Local text | `~/.cache/fundamentals-istqb/ctfl-v4.0.1.pdf` and `ctfl-v4.0.1.txt` (outside the repo; never commit) |

Notes:

- The istqb.org fetch worked. The ASTQB copy was not needed and was not tried.
- The landing page does not name a version newer than v4.0.1. A newer version outside this page is UNVERIFIED.
- Copyright: the syllabus allows extracts for non-commercial use if the source is named. Quote short parts only. Do not copy long passages.
- Citation form for `page.sources`: title `ISTQB Certified Tester Foundation Level Syllabus v4.0.1`, publisher `ISTQB`, url as above, accessed `2026-10-20`.
- Section numbers below are the numbers of the syllabus. Page numbers come from its table of contents.

### Syllabus sections for each chapter

| Chapter slug | Topics | Syllabus sections |
|---|---|---|
| `basics` | What testing is, objectives, verification and validation, testing vs debugging, why testing is needed, QA vs testing, test skills | 1.1 (p15), 1.1.1 Test Objectives, 1.1.2 Testing and Debugging (p16), 1.2.1 Testing's Contributions to Success, 1.2.2 Testing and Quality Assurance (p16-17), 1.5.1 Generic Skills Required for Testing (p21) |
| `defects-principles` | Error, defect, failure, root cause, the 7 principles | 1.2.3 Errors, Defects, Failures, and Root Causes (p17), 1.3 Testing Principles (p17-18), 1.1.2 for debugging |
| `lifecycles` | SDLC models, Agile, TDD/ATDD/BDD, test activities (the ISTQB form of STLC), shift left, DevOps | 2.1.1 to 2.1.5 (p25-27), 2.1.3 Testing as a Driver for Software Development (TDD, ATDD, BDD), 4.5.3 ATDD (p46), 1.4.1 Test Activities and Tasks (p18-19), 1.4.2 Test Process in Context |
| `test-types` | Static and dynamic, confirmation and regression, functional and non-functional, alpha and beta, exploratory | 3.1 Static Testing Basics and 3.1.3 Differences between Static Testing and Dynamic Testing (p33-34), 2.2.2 Test Types (p29-30), 2.2.3 Confirmation Testing and Regression Testing (p30-31), 2.2.1 for alpha and beta (acceptance testing forms), 2.3 Maintenance Testing, 4.4.2 Exploratory Testing |
| `levels` | The five test levels, test pyramid, testing quadrants | 2.2 and 2.2.1 Test Levels (p28-29), 5.1.6 Test Pyramid (p50), 5.1.7 Testing Quadrants (p51), 2.1.2 for good practices per level |
| `black-box` | EP, BVA, decision table, state transition | 4.1 Test Techniques Overview (p39), 4.2.1 Equivalence Partitioning (p39), 4.2.2 Boundary Value Analysis (p40), 4.2.3 Decision Table Testing (p41), 4.2.4 State Transition Testing (p41) |
| `white-box` | Statement and branch coverage, value of white-box testing | 4.3.1 Statement Testing and Statement Coverage (p42), 4.3.2 Branch Testing and Branch Coverage (p43), 4.3.3 The Value of White-box Testing (p43). The syllabus has no condition testing. |
| `experience-based` | Error guessing, exploratory testing, checklist-based testing | 4.4.1 Error Guessing (p43), 4.4.2 Exploratory Testing (p44), 4.4.3 Checklist-Based Testing (p44) |
| `planning` | Test plan, test approach and strategy, estimation, acceptance criteria, prioritization, risk | 5.1.1 Purpose and Content of a Test Plan (p48), 5.1.2 Tester's Contribution to Iteration and Release Planning, 5.1.4 Estimation Techniques (p49), 5.1.5 Test Case Prioritization (p50), 4.5.2 Acceptance Criteria (p45), 5.2 Risk Management (p51-53) |
| `test-cases-bugs` | Test case, defect report, defect statuses, entry and exit criteria, test completion, traceability | 5.5 Defect Management (p56-57), 5.1.3 Entry Criteria and Exit Criteria (p49), 1.4.1 for test completion (p19), 5.3 and 5.3.2 for the test completion report (p53-54), 1.4.3 Testware (p20), 1.4.4 Traceability between the Test Basis and Testware (p20), 5.3.1 Metrics used in Testing |
| `interview` | Questions from all chapters | No own section. Use the sections above. |

### Syllabus facts that chapter writers need

Each fact was read in the syllabus text on 2026-10-20.

| Topic | Fact | Section |
|---|---|---|
| Errors and defects | "Human beings make errors (mistakes), which produce defects (faults, bugs), which in turn may result in failures." So the syllabus treats "bug" as a synonym of "defect". | 1.2.3 |
| QA and testing | "testing and QA are not the same." Testing is a "product-oriented, corrective approach". QA is a "process-oriented, preventive approach". Testing is "a major form of quality control". | 1.2.2 |
| Verification and validation | Testing involves verification ("checking whether the system meets specified requirements") and validation ("whether the system meets users' and other stakeholders' needs"). | 1.1 |
| Principles | Seven principles. Principle 5 is "Tests wear out". Principle 7 is "Absence-of-defects fallacy". The names "pesticide paradox" and "absence-of-errors fallacy" are not used. | 1.3 |
| Test activities | Seven groups: test planning; test monitoring and test control; test analysis; test design; test implementation; test execution; test completion. They "are often implemented iteratively or in parallel". There is no 7-phase "STLC" in the syllabus. | 1.4.1 |
| SDLC models | Sequential (waterfall, V-model), iterative (spiral, prototyping), incremental (Unified Process). Agile practices include ATDD, BDD, DDD, XP, FDD, Kanban, Lean IT, Scrum, TDD. | 2.1 |
| Test levels | Five levels: component, component integration, system, system integration, acceptance. "Component testing (also known as unit testing)". | 2.2.1 |
| Acceptance forms | UAT, operational, contractual, regulatory, alpha and beta testing. | 2.2.1 |
| Test types | Four test types: functional, non-functional, black-box, white-box. Smoke, sanity, regression, monkey, and similar names are not test types in this syllabus. | 2.2.2 |
| Non-functional | ISO/IEC 25010 list: performance efficiency, compatibility, usability, reliability, security, maintainability, portability, safety. | 2.2.2 |
| Regression | "Regression testing confirms that no adverse consequences have been caused by a change". Confirmation testing "confirms that an original defect has been successfully fixed". | 2.2.3 |
| Smoke test (only mention) | An example entry criterion: "all smoke tests have passed". Quadrant Q4 "contains smoke tests and non-functional tests (except usability tests)". | 5.1.3, 5.1.7 |
| Quadrants | Q1 technology facing, support the team: component and component integration tests. Q2 business facing, support the team: functional tests, examples, user story tests, UX prototypes, API testing, simulations. Q3 business facing, critique the product: exploratory, usability, user acceptance testing. Q4 technology facing, critique the product: smoke tests and non-functional tests except usability. | 5.1.7 |
| Pyramid | Original model (Cohn 2009): three layers, "unit tests", "service tests", "UI tests". Another model: unit (component), integration (component integration), end-to-end. | 5.1.6 |
| EP | One test per partition is sufficient. Partitions "must not overlap and must be non-empty sets". Coverage = partitions exercised / partitions identified. | 4.2.1 |
| BVA | Two versions: 2-value (boundary and closest neighbor in the adjacent partition) and 3-value (boundary and both neighbors). Example: `if (x <= 10)` coded as `if (x = 10)`; x = 9 finds it, x = 10 and x = 11 do not. | 4.2.2 |
| Decision table | Conditions and actions form the rows. Each column is a decision rule. Notation T, F, "-" (irrelevant), "N/A" (infeasible); actions X or blank. Coverage items: columns with feasible combinations. | 4.2.3 |
| State transition | Label syntax "event [guard condition] / action". Three coverage criteria: all states, valid transitions (0-switch), all transitions. State table shows invalid transitions as empty cells. | 4.2.4 |
| White-box | Only statement testing and branch testing. "Branch coverage subsumes statement coverage." Other white-box techniques "are not discussed in this syllabus". | 4.3, 4.3.2 |
| Error guessing | Based on tester knowledge of past behavior, typical developer errors, failures in similar applications. Fault attacks implement it. | 4.4.1 |
| Exploratory | Tests are "simultaneously designed, executed, and evaluated". Session-based testing uses a time box, a test charter, and a debriefing. | 4.4.2 |
| Checklist | Checklists "should not contain items that can be checked automatically, items better suited as entry criteria, exit criteria, or items that are too general". Items are often questions. | 4.4.3 |
| Acceptance criteria | Two common formats: scenario-oriented (Given/When/Then) and rule-oriented (bullet list, input-output table). | 4.5.2 |
| ATDD | A test-first approach. Starts with a specification workshop. | 4.5.3 |
| Test plan content | Context; assumptions and constraints; stakeholders; communication; risk register; test approach; budget and schedule. | 5.1.1 |
| Test strategy | The test plan "Demonstrates that testing will adhere to the existing test policy and test strategy". The test approach is a part of the test plan content. The syllabus does not define the test strategy. Use the glossary entry for the definition. | 1.4.2, 5.1.1 |
| Entry and exit criteria | In Agile, exit criteria are often called Definition of Done. Entry criteria for a user story are called Definition of Ready. | 5.1.3 |
| Estimation | Four techniques: ratios, extrapolation, Wideband Delphi (Planning Poker is a variant), three-point. E = (a + 4m + b) / 6. SD = (b - a) / 6. Worked example: a=6, m=9, b=18 gives 10 +/- 2 person-hours. Ratio example: 3:2 and 600 person-days development gives 400 person-days test. | 5.1.4 |
| Test completion | At milestones: create change requests or backlog items for unresolved defects, archive testware, shut the test environment down, analyze lessons learned, create a test completion report. | 1.4.1, 5.3, 5.3.2 |
| Traceability | Links the test basis, testware (test conditions, risks, test cases), test results, and defects. Supports coverage evaluation, impact analysis, audits. The syllabus does not name a "requirements traceability matrix". | 1.4.4 |
| Defect report fields | Unique identifier; title; date, organization, author; test object and environment; context; description with steps and evidence; expected and actual results; severity; priority; status; references. | 5.5 |
| Defect statuses | Example statuses: "open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected". There is no fixed life-cycle diagram. The word "triage" does not occur in the syllabus. | 5.5 |
| Test case | The syllabus has no list of test case fields. The glossary definition (S67) is the source. | glossary |

## Glossary

| Field | Value |
|---|---|
| Name | ISTQB Glossary (glossary.istqb.org) |
| Home | https://glossary.istqb.org/ |
| Term page form | `https://glossary.istqb.org/en_US/term/<slug>` (for example https://glossary.istqb.org/en_US/term/defect) |
| Slug rule | The lower-case term with spaces as hyphens. Slash and punctuation are dropped: "A/B testing" is `ab-testing`. |
| Accessed | 2026-10-20 |
| Glossary version | UNVERIFIED. The site shows no version number in the data that was read. Each term has its own version (the `Version` column below). |

How the glossary was checked:

- The term pages are a JavaScript app. A plain HTTP fetch of `/en_US/term/<slug>` returns the same empty shell with HTTP 200 for every slug, also for slugs that do not exist. So a fetch of the page does not prove that a term exists.
- The app reads a public JSON API. `GET https://api.glossary.istqb.org/v1/terms` with header `Accept-Language: en_US` lists all 1128 English terms. `GET https://api.glossary.istqb.org/v1/terms/<slug>` returns one term with the definition, synonyms, and the syllabi that use it. An unknown slug returns HTTP 404.
- "Defined" below means: the term is a main entry in the list of 1128 terms on 2026-10-20. A word that is only a synonym of an entry is "not defined" as a term, but the synonym is noted.
- Citation form for a term: title `ISTQB Glossary: <term>`, publisher `ISTQB`, url `https://glossary.istqb.org/en_US/term/<slug>`. If a reader needs JavaScript, the page still opens in a normal browser.
- Do not quote the whole glossary. Quote one definition when the chapter needs the exact words.

### Glossary entries (S2 onward)

"Name in syllabus text" is "yes" when the exact term name occurs in the text of the S1 syllabus. It is "no" when only a related form occurs (for example "smoke tests" and not "smoke testing"). Quotes with more than 25 words are cut with "...".

| ID | Term | Glossary slug | Version | Name in syllabus text | Quote |
|---|---|---|---|---|---|
| S2 | testing | `testing` | v3 | yes | "The process within the software development lifecycle that evaluates the quality of a component or system and related work products." |
| S3 | quality | `quality` | v4 | yes | "The degree to which a work product satisfies stated and implied requirements." |
| S4 | quality assurance [QA] | `quality-assurance` | v2 | yes | "Activities focused on providing confidence that quality requirements will be fulfilled." |
| S5 | quality control [QC] | `quality-control` | v1 | yes | "Activities designed to evaluate the quality of a component or system." |
| S6 | verification | `verification` | v2 | yes | "The process of confirming that a work product fulfills its specification." |
| S7 | validation | `validation` | v2 | yes | "Confirmation by examination that a work product matches a stakeholder's needs." |
| S8 | error (synonyms: mistake) | `error` | v1 | yes | "A human action that results in a defect." |
| S9 | defect (synonyms: bug, fault, flaw) | `defect` | v3 | yes | "An imperfection or deficiency in a work product where it does not meet its requirements or specifications or impairs its intended use." |
| S10 | failure (synonyms: malfunction) | `failure` | v3 | yes | "An event in which a component or system does not meet its requirements within specified limits during its execution." |
| S11 | root cause | `root-cause` | v1 | yes | "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed." |
| S12 | debugging | `debugging` | v2 | yes | "The process of finding, analyzing and removing the causes of failures in a component or system." |
| S13 | test level (synonyms: test stage) | `test-level` | v2 | yes | "A specific instantiation of a test process." |
| S14 | component testing (synonyms: module testing) | `component-testing` | v3 | yes | "A test level that focuses on individual hardware or software components." |
| S15 | integration testing | `integration-testing` | v2 | yes | "A test level that focuses on interactions between components or systems." |
| S16 | component integration testing (synonyms: module integration testing) | `component-integration-testing` | v3 | yes | "The integration testing of components." |
| S17 | system testing | `system-testing` | v2 | yes | "A test level that focuses on verifying that a system as a whole meets specified requirements." |
| S18 | system integration testing | `system-integration-testing` | v4 | yes | "A test level that focuses on the integration of systems." |
| S19 | acceptance testing | `acceptance-testing` | v2 | yes | "A test level that focuses on determining whether to accept the system." |
| S20 | unit testing | `unit-testing` | v1 | yes | "A test level that focuses on evaluating the smallest part of code testable in isolation." |
| S21 | smoke testing | `smoke-testing` | v1 | no | "A test type to gain sufficient confidence that a test object is ready for planned testing." |
| S22 | regression testing | `regression-testing` | v3 | yes | "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." |
| S23 | confirmation testing (synonyms: retesting) | `confirmation-testing` | v3 | yes | "A type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur." |
| S24 | exploratory testing | `exploratory-testing` | v4 | yes | "A test approach in which tests are dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results." |
| S25 | ad hoc testing | `ad-hoc-testing` | v2 | no | "Informal testing performed without test analysis and test design." |
| S26 | alpha testing | `alpha-testing` | v3 | yes | "A type of acceptance testing performed in the developer's test environment by roles outside the development organization." |
| S27 | beta testing | `beta-testing` | v3 | yes | "A type of acceptance testing performed at an external site to the developer's test environment by roles outside the development organization." |
| S28 | A/B testing | `ab-testing` | v2 | no | "A test approach in which two variants of a test object are statistically evaluated to determine which performs better for specified characteristics." |
| S29 | static testing | `static-testing` | v4 | yes | "A test approach that does not involve the execution of a test item." |
| S30 | dynamic testing | `dynamic-testing` | v2 | yes | "A test approach that involves test execution of a test item." |
| S31 | black-box testing (synonyms: specification-based testing) | `black-box-testing` | v3 | yes | "A test approach based on the specification of a component or system." |
| S32 | white-box testing (synonyms: clear-box testing, code-based testing, glass-box testing, logic-coverage testing, logic-driven testing, structural testing, structure-based testing) | `white-box-testing` | v2 | yes | "A test approach based on the internal structure of a component or system." |
| S33 | experience-based testing | `experience-based-testing` | v1 | no | "A test approach based on the tester's experience, knowledge and intuition." |
| S34 | non-functional testing | `non-functional-testing` | v3 | yes | "A test type to evaluate that a component or system complies with non-functional requirements." |
| S35 | performance testing | `performance-testing` | v2 | yes | "A test type to determine the performance efficiency of a component or system." |
| S36 | usability testing | `usability-testing` | v2 | yes | "Testing to evaluate the degree to which the system can be used by specified users with effectiveness, efficiency and satisfaction in a specified context of use." |
| S37 | security testing | `security-testing` | v1 | yes | "A test type to determine the security of a component or system." |
| S38 | equivalence partitioning [EP] (synonyms: partition testing) | `equivalence-partitioning` | v3 | yes | "A black-box test technique in which test conditions are equivalence partitions exercised by one representative member of each partition." |
| S39 | boundary value analysis [BVA] | `boundary-value-analysis` | v3 | yes | "A black-box test technique in which the test conditions are boundary values." |
| S40 | decision table testing [DTT] | `decision-table-testing` | v4 | yes | "A black-box test technique in which the test conditions are the combinations of conditions and the resulting actions shown in a decision table." |
| S41 | state transition testing (synonyms: finite state testing) | `state-transition-testing` | v3 | yes | "A black-box test technique in which test conditions are state transitions or sequences of them." |
| S42 | statement coverage | `statement-coverage` | v3 | yes | "The coverage of executable source statements." |
| S43 | branch coverage | `branch-coverage` | v2 | yes | "The coverage of branches in a control flow graph." |
| S44 | condition testing | `condition-testing` | v2 | no | "A white-box test technique in which test conditions are outcomes of atomic conditions." |
| S45 | decision coverage | `decision-coverage` | v2 | yes | "The coverage of decision outcomes." |
| S46 | error guessing | `error-guessing` | v3 | yes | "A test technique in which the tests conditions are based on the tester's knowledge of past failures or failure modes." |
| S47 | checklist-based testing | `checklist-based-testing` | v3 | yes | "An experience-based test technique in which test cases are designed to exercise the items of a checklist." |
| S48 | test charter (synonyms: charter) | `test-charter` | v3 | yes | "A mission statement that guides an exploratory test session." |
| S49 | software development lifecycle [SDLC] (synonyms: lifecycle model) | `software-development-lifecycle` | v1 | yes | "The activities performed at each phase in software development, and how they relate to one another logically and chronologically." |
| S50 | sequential development model | `sequential-development-model` | v2 | yes | "A type of software development lifecycle model in which a complete system is developed in a linear way of several discrete and successive phases with ..." |
| S51 | iterative development model | `iterative-development-model` | v1 | yes | "A type of software development lifecycle model in which the component or system is developed through a series of repeated cycles." |
| S52 | incremental development model | `incremental-development-model` | v2 | yes | "A type of software development lifecycle model in which the component or system is developed through a series of increments." |
| S53 | V-model | `v-model` | v2 | yes | "A sequential software development lifecycle model describing a one-for-one relationship between major phases of software development from business requirements specification to delivery, and corresponding test ..." |
| S54 | Agile software development | `agile-software-development` | v1 | yes | "A group of software development lifecycle models based on iterative incremental development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams." |
| S55 | test-driven development [TDD] | `test-driven-development` | v2 | yes | "A software development technique in which the test cases are developed, automated and then the software is developed incrementally to pass those test cases." |
| S56 | acceptance test-driven development [ATDD] | `acceptance-test-driven-development` | v1 | yes | "A collaboration-based test-first approach that defines acceptance tests in the stakeholders' domain language." |
| S57 | behavior-driven development [BDD] | `behavior-driven-development` | v1 | yes | "A collaborative approach to development in which the team is focusing on delivering expected behavior of a component or system for the customer, which forms ..." |
| S58 | shift left | `shift-left` | v1 | yes | "A test approach to perform testing and quality assurance activities as early as possible in the software development lifecycle." |
| S59 | test plan | `test-plan` | v3 | yes | "Documentation that describes test objectives, means and schedule for achieving test coordination." |
| S60 | test strategy | `test-strategy` | v4 | yes | "A description of how to perform testing to reach test objectives under given circumstances." |
| S61 | organizational test strategy | `organizational-test-strategy` | v1 | no | "A strategy that describes the generic requirements for testing and how to perform testing within an organization." |
| S62 | test approach | `test-approach` | v3 | yes | "The manner of implementing test tasks." |
| S63 | test estimation | `test-estimation` | v2 | yes | "An approximation related to various aspects of testing." |
| S64 | Wideband Delphi | `wideband-delphi` | v1 | yes | "An expert-based test estimation technique that aims at making an accurate estimation using the collective wisdom of the team members." |
| S65 | Three-point estimation | `three-point-estimation` | v2 | yes | "An expert-based technique, three estimations are made by the experts: the most optimistic estimation (a), the most likely estimation (m) and the most pessimistic estimation ..." |
| S66 | acceptance criteria | `acceptance-criteria` | v3 | yes | "The criteria that a work product must satisfy to be accepted by the stakeholders." |
| S67 | test case | `test-case` | v2 | yes | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." |
| S68 | high-level test case (synonyms: logical test case, abstract test case) | `high-level-test-case` | v3 | no | "A test case with abstract preconditions, input data, expected results, postconditions, and actions (where applicable)." |
| S69 | low-level test case (synonyms: concrete test case, physical test case) | `low-level-test-case` | v3 | no | "A test case with concrete values for preconditions, input data, expected results, postconditions, and a detailed description of actions (where applicable)." |
| S70 | test condition (synonyms: test situation, test requirement, test idea) | `test-condition` | v4 | yes | "A testable aspect of a component or system that is intended to be tested." |
| S71 | test basis | `test-basis` | v2 | yes | "The body of knowledge used as the basis for test analysis and test design." |
| S72 | defect report (synonyms: bug report) | `defect-report` | v2 | yes | "Documentation of the occurrence, nature, and status of a defect." |
| S73 | defect management | `defect-management` | v4 | yes | "The process of recognizing, recording, classifying, investigating, fixing and disposing of defects." |
| S74 | defect workflow | `defect-workflow` | v1 | no | "The state transition model of a defect lifecycle, including responsibilities." |
| S75 | anomaly | `anomaly` | v1 | yes | "A condition that deviates from expectation." |
| S76 | severity | `severity` | v1 | yes | "The degree of impact that a defect has on the development, testing or operation of a component or system." |
| S77 | priority | `priority` | v1 | yes | "The level of importance assigned to a task according to specific criteria." |
| S78 | entry criteria | `entry-criteria` | v2 | yes | "The set of conditions for officially starting a defined task." |
| S79 | exit criteria (synonyms: test completion criteria, completion criteria) | `exit-criteria` | v2 | yes | "The set of conditions for officially completing a defined task." |
| S80 | test process | `test-process` | v3 | yes | "A set of test activities performed to achieve a test objective." |
| S81 | test monitoring | `test-monitoring` | v3 | yes | "The activity that checks the status of testing activities, identifies any variances from planned or expected, and reports status to stakeholders." |
| S82 | test control | `test-control` | v2 | yes | "The activity that develops and applies corrective actions to get a test project on track when it deviates from what was planned." |
| S83 | test analysis | `test-analysis` | v2 | yes | "The activity that identifies test conditions by analyzing the test basis." |
| S84 | test design | `test-design` | v3 | yes | "The activity that derives and specifies test cases from test conditions." |
| S85 | test implementation | `test-implementation` | v3 | yes | "The activity that prepares the testware needed for test execution." |
| S86 | test execution | `test-execution` | v2 | yes | "The activity that runs a test on a component or system producing actual results." |
| S87 | test completion (synonyms: test closure) | `test-completion` | v2 | yes | "The activity that makes testware available for later use, leaves test environments in a satisfactory condition and communicates the results of testing to relevant stakeholders." |
| S88 | test completion report (synonyms: test summary report) | `test-completion-report` | v3 | yes | "A type of test report produced at completion milestones that provides an evaluation of the corresponding test items against exit criteria." |
| S89 | traceability | `traceability` | v3 | yes | "The ability to establish explicit relationships between related work products or items within work products." |
| S90 | traceability matrix | `traceability-matrix` | v1 | yes | "A matrix which correlates work products or items within work products to determine the coverage achieved." |
| S91 | testware | `testware` | v2 | yes | "Work products produced during the test process for use in planning, designing, executing, evaluating and reporting on testing." |
| S92 | test log (synonyms: test record, test run log) | `test-log` | v1 | yes | "A chronological record of relevant details about test execution." |
| S93 | test pyramid | `test-pyramid` | v1 | yes | "A graphical model representing the relationship of the amount of testing per level, with more at the bottom than at the top." |
| S94 | testing quadrants | `testing-quadrants` | v1 | yes | "A classification model of test types/test levels in four quadrants, relating them to two dimensions of test objectives: supporting the product team versus critiquing the ..." |

### Terms in the entry list that need care

| Term | What to know |
|---|---|
| bug | Not a main entry. The glossary lists "bug" as a synonym of "defect" (S9), together with "fault" and "flaw". The syllabus says the same in 1.2.3. The owner's notes separate "bug" from "defect". That conflicts with ISTQB. |
| error | The glossary: "A human action that results in a defect." Synonym: "mistake". |
| smoke testing | Defined as "A test type to gain sufficient confidence that a test object is ready for planned testing." But the syllabus has only "smoke tests" in 5.1.3 and 5.1.7. It is not one of the four test types of 2.2.2, so the "test type" label is the glossary's wording only. |
| ad hoc testing | Defined, but the glossary shows it used only by the Game Testing specialist syllabus. The Foundation syllabus does not use it. |
| A/B testing | Defined (v2). The glossary shows it used by Advanced and Agile syllabi, not by Foundation. The owner-note expectation that ISTQB does not define it is wrong for the glossary. |
| condition testing, condition coverage | Defined (Automotive Software Tester syllabus only). The Foundation syllabus covers statement and branch testing only (4.3). |
| unit testing | Defined as a separate entry (v1). The Foundation syllabus names it as an alias: "Component testing (also known as unit testing)" in 2.2.1. |
| test closure | Not a main entry. It is a synonym of "test completion" (S87). |
| test plan | The glossary defines "Documentation that describes test objectives, means and schedule for achieving test coordination." The syllabus 5.1.1 gives the content list. |
| test strategy | The glossary defines the term. The syllabus does not define it (1.4.2, 5.1.1 only use it). The glossary also has "organizational test strategy" and seven strategy types (analytical, methodical, reactive, and others). Use only if a chapter needs them. |
| test approach | Glossary: "The manner of implementing test tasks." The syllabus 5.1.1 lists "Test approach" as a part of the test plan. |
| defect workflow | Defined: "The state transition model of a defect lifecycle, including responsibilities." It has no states list. The syllabus 5.5 gives example statuses only. |
| test pyramid, testing quadrants | Both v1 and both in the Foundation syllabus (5.1.6, 5.1.7). |

## Owner-note terms that ISTQB does NOT define

Method: for each term, the 1128 glossary main entries and their synonyms were searched, and the S1 syllabus text was searched. A term is listed when there is no main entry and no synonym entry with that name, and the name does not occur in the syllabus.

| Term (as in the owner's notes) | Glossary | Syllabus text | Nearest ISTQB item |
|---|---|---|---|
| Sanity testing, sanity test, sanity check | Not defined. No entry, no synonym, no mention in any definition. | 0 hits | Confirmation testing (S23); regression testing (S22); smoke testing (S21) |
| Monkey testing | Not defined | 0 hits for "monkey" and for "random" | `random testing` exists in the glossary ("A black-box test technique in which input values are randomly generated."), used by the Advanced Test Analyst syllabus |
| Gorilla testing | Not defined | 0 hits | none |
| Benchmark testing | Not defined | 0 hits | performance testing |
| STLC (Software Testing Life Cycle) | Not defined | 0 hits | "test process" and the seven groups of test activities (1.4.1) |
| Bug life cycle | Not defined as such | 0 hits (the only "life cycle" is in a standard title in the references) | "defect workflow" (no states list); example defect statuses in 5.5 |
| Bug triage, bug triage states | Not defined | 0 hits | priority and severity (both defined); defect management (5.5) |
| Pesticide paradox | Not defined | 0 hits | Principle "Tests wear out" (1.3) |
| Absence-of-errors fallacy | Not defined | 0 hits | Principle "Absence-of-defects fallacy" (1.3) |
| Requirements traceability matrix (RTM) | "requirements traceability matrix" is not an entry. "traceability matrix" is an entry (S90, v1). | The syllabus names no matrix for testing. It has "traceability" (1.4.4). The words "traceability matrix" occur only in the title of Appendix B. | traceability (S89), traceability matrix (S90) |
| Test summary report | Not a main entry. It is a synonym of "test completion report" (S88). | 0 hits for "test summary report" (the syllabus says "test completion report", 5.3.2, and has "Test summary" as a content item) | test completion report (S88) |
| Test case fields (ID, steps, and similar) | Only the generic definition of "test case" | no field list | defect report fields are in 5.5; test case fields are the tutorial's own |
| Gherkin | Not an entry | 0 hits ("Given/When/Then format" occurs in 2.1.3, 4.5.2) | BDD (S57) |
| Requirement gathering and analysis; deployment | Not entries | not defined | SDLC phases are the tutorial's wording; the syllabus names no standard phase list |
| Test environment setup, as an STLC phase | Not a defined phase | part of test implementation (1.4.1) | test implementation |

Terms from the notes that ISTQB does define (do not list them as non-ISTQB): smoke testing, ad hoc testing, alpha testing, beta testing, A/B testing, regression testing, confirmation testing, exploratory testing, severity, priority, test completion, entry criteria, exit criteria, acceptance criteria, test pyramid, testing quadrants, cross-browser compatibility, cross-device testing.

## Owner-note lines that conflict with ISTQB

These are for the chapter writers. Each conflict has the ISTQB source.

| Owner note | ISTQB |
|---|---|
| "Bug" and "defect" are different things | The glossary lists "bug" as a synonym of "defect" (S9). Syllabus 1.2.3: "defects (faults, bugs)". |
| Q4 of the quadrants has smoke, sanity, regression, system testing, and non-functional tests | Syllabus 5.1.7: Q4 "contains smoke tests and non-functional tests (except usability tests)". Sanity, regression, and system testing are not in Q4. |
| Four test levels: unit, integration, system, acceptance | Syllabus 2.2.1: five levels. Integration splits into component integration and system integration. |
| STLC has 7 phases from requirement analysis to test closure | The syllabus has seven groups of test activities (1.4.1): planning, monitoring and control, analysis, design, implementation, execution, completion. They are not the same list. |
| QA is for the whole SDLC and QC is for the STLC | Syllabus 1.2.2: QA is process-oriented and preventive. Testing is product-oriented and corrective, and is a form of QC. |
| "Pesticide paradox" and "absence-of-errors fallacy" | v4.0.1 names: "Tests wear out" and "Absence-of-defects fallacy" (1.3). |
| Condition coverage in the white-box chapter | The syllabus covers statement and branch coverage only (4.3). Condition testing is in the glossary, in the Automotive Software Tester syllabus only. |

UNVERIFIED: the full list of conflicts. Only the lines above were checked for this file. Each chapter task must check its own part of the notes against S1 and the glossary.

## UNVERIFIED items

| Item | Reason |
|---|---|
| Glossary version number and release date | The site and the API data do not show one. Term records show a refresh of the syllabus-usage links on 2026-05-30, which is not a release date. |
| A newer CTFL version than v4.0.1 | The ISTQB landing page names v4.0.1 as current. No other page was checked. |
| ASTQB copy of the syllabus | Not needed. Not fetched. |
| The "syllabus usage" data of the glossary | It lists which syllabi use a term. It is not complete: for example "statement coverage" has no Foundation mark, but the syllabus uses the term (4.3.1). Use the syllabus text, not this data, to decide if the syllabus covers a term. |
| Page numbers | Taken from the table of contents of the PDF. A few sections run over a page break. |

## Reproduce the checks

```bash
curl -sL -m 30 -o syllabus.pdf https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf
pdftotext -layout syllabus.pdf syllabus.txt
curl -sL -m 30 -H "Accept-Language: en_US" https://api.glossary.istqb.org/v1/terms/defect
curl -sL -m 60 -H "Accept-Language: en_US" https://api.glossary.istqb.org/v1/terms -o glossary-terms.json
```
