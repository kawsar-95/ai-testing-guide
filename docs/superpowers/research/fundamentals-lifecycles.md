# Fundamentals chapter 3: SDLC, STLC and Agile (`lifecycles`)

Research notes for `content/fundamentals/lifecycles.mdx`. Check date: 2026-10-20. The S-numbers below are the numbers of `page.sources` (order of first `<Cite>`), not the numbers of `fundamentals-sources.md`.

## Sources

| Page n | Source | URL |
|---|---|---|
| 1 | ISTQB Certified Tester Foundation Level Syllabus v4.0.1 (sections 1.4.1, 1.4.2, 1.4.3, 1.5.2, 2.1, 2.1.1, 2.1.2, 2.1.3, 2.1.6, 4.5.3, 5.1.2, 5.1.3) | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf |
| 2 | ISTQB Glossary: test process | https://glossary.istqb.org/en_US/term/test-process |
| 3 | ISTQB Glossary: test completion (synonym: test closure) | https://glossary.istqb.org/en_US/term/test-completion |
| 4 | ISTQB Glossary: software development lifecycle | https://glossary.istqb.org/en_US/term/software-development-lifecycle |
| 5 | ISTQB Glossary: V-model | https://glossary.istqb.org/en_US/term/v-model |
| 6 | ISTQB Glossary: Agile software development | https://glossary.istqb.org/en_US/term/agile-software-development |
| 7 | ISTQB Glossary: test-driven development | https://glossary.istqb.org/en_US/term/test-driven-development |
| 8 | ISTQB Glossary: acceptance test-driven development | https://glossary.istqb.org/en_US/term/acceptance-test-driven-development |
| 9 | ISTQB Glossary: behavior-driven development | https://glossary.istqb.org/en_US/term/behavior-driven-development |

Terms checked in the glossary API on 2026-10-20 and found not defined (HTTP 404 for the slug): scrum, sprint, product backlog, kanban, waterfall model, iteration backlog. The glossary does define "iteration" and "retrospective". The syllabus names Scrum, Kanban, and the waterfall model only as examples (2.1), and uses "product backlog" and "iteration backlog" without a glossary entry.

## Topic: Software Testing Life Cycle (STLC)

| Claim | Source | Quote |
|---|---|---|
| The syllabus describes a test process with groups of activities | 1 (1.4.1) | "A test process usually consists of the main groups of activities described below." |
| The activities often overlap or repeat | 1 (1.4.1) | "they are often implemented iteratively or in parallel" |
| The activities are tailored to the system and project | 1 (1.4.1) | "These testing activities usually need to be tailored to the system and the project." |
| The glossary defines test process | 2 | "A set of test activities performed to achieve a test objective." |
| Seven groups: planning, monitoring and control, analysis, design, implementation, execution, completion | 1 (1.4.1) | the seven bold group names of 1.4.1 |
| Test analysis analyzes the test basis to find testable features | 1 (1.4.1) | "Test analysis includes analyzing the test basis to identify testable features." |
| Test design turns conditions into test cases, and designs the test environment | 1 (1.4.1) | "Test design also includes defining the test data requirements, designing the test environment" |
| Test implementation builds the environment and creates testware | 1 (1.4.1) | "The test environment is built and verified to be set up correctly." |
| Test execution logs results and analyzes anomalies; anomalies are reported based on failures (see 5.5) | 1 (1.4.1) | "This analysis allows us to report the anomalies based on the failures observed (see section 5.5)." |
| Test completion is the glossary term; "test closure" is a synonym | 3 | term "test completion (synonyms: test closure)": "The activity that makes testware available for later use, leaves test environments in a satisfactory condition and communicates the results..." |
| STLC is not defined by ISTQB | `fundamentals-sources.md` (term check) | STLC: not defined, 0 hits in syllabus and glossary |

## Topic: Testing Activities

| Claim | Source | Quote |
|---|---|---|
| Planning defines objectives and selects an approach within constraints | 1 (1.4.1) | "Test planning consists of defining the test objectives and then selecting an approach that best achieves the objectives" |
| Monitoring compares actual progress with the plan; control takes actions to meet objectives | 1 (1.4.1) | "Test monitoring involves the ongoing checking of all test activities and the comparison of actual progress against the plan." |
| Analysis answers "what to test?" in terms of measurable coverage criteria | 1 (1.4.1) | "Test analysis answers the question \"what to test?\" in terms of measurable coverage criteria." |
| Analysis also evaluates the test basis for defects and testability, and defines and prioritizes test conditions by risk | 1 (1.4.1) | "The test basis and the test object are also evaluated to identify defects they may contain and to assess their testability." |
| Design answers "how to test?" and elaborates test conditions into test cases and other testware | 1 (1.4.1) | "Test design answers the question \"how to test?\"." |
| Implementation: procedures, suites, scripts, schedule, environment | 1 (1.4.1) | "Test cases can be organized into test procedures, which are often assembled into test suites." |
| Execution: run per schedule, manual or automated, compare actual with expected, log, analyze anomalies | 1 (1.4.1) | "Actual test results are compared with the expected results. The test results are logged." |
| Completion occurs at milestones; unresolved defects get change requests or backlog items; testware archived; environment shut down; lessons learned; completion report | 1 (1.4.1) | "Test completion usually occurs at project milestones (e.g., release, end of iteration, test level completion)." |
| Testware is the output work product of the activities | 1 (1.4.3) | "Testware is created as output work products from the test activities described in section 1.4.1." |
| Context changes how testing is done | 1 (1.4.2) | "the way the testing is carried out will depend on a number of contextual factors" |

## Topic: Software Development Life Cycle (SDLC)

| Claim | Source | Quote |
|---|---|---|
| An SDLC model is an abstract, high-level representation; it defines how phases and activities relate logically and chronologically | 1 (2.1) | "An SDLC model is an abstract, high-level representation of the software development process." |
| Glossary definition of SDLC | 4 | "The activities performed at each phase in software development, and how they relate to one another logically and chronologically." |
| The choice of SDLC affects scope and timing of test activities, documentation detail, techniques and approach, automation extent, and tester role | 1 (2.1.1) | "Testing must be adapted to the SDLC to succeed." |
| Good practice: for every development activity there is a test activity | 1 (2.1.2) | "For every software development activity, there is a corresponding test activity" |
| Good practice: each test level has its own objectives; this keeps testing comprehensive enough and avoids redundancy (not "full coverage") | 1 (2.1.2) | "specific and different test objectives, which allows for testing to be appropriately comprehensive while avoiding redundancy" |
| Good practice: analysis and design begin during the matching development phase (early testing) | 1 (2.1.2) | "Test analysis and design for a given test level begins during the corresponding development phase of the SDLC" |
| Good practice: testers review work products as soon as drafts exist | 1 (2.1.2) | "Testers are involved in reviewing work products as soon as drafts of these work products are available" |
| In the glossary the SDLC is the activities of each phase and how they relate, not a "methodology" | 4 | "The activities performed at each phase in software development, and how they relate to one another logically and chronologically." |
| The syllabus gives no standard list of SDLC phases | `fundamentals-sources.md` | "SDLC phases are the tutorial's wording; the syllabus names no standard phase list" (checked again in 2.1: no phase list) |

## Topic: SDLC Models

| Claim | Source | Quote |
|---|---|---|
| Families and examples: sequential (waterfall, V-model), iterative (spiral, prototyping), incremental (Unified Process) | 1 (2.1) | "sequential development models (e.g., waterfall model, V-model), iterative development models (e.g., spiral model, prototyping), and incremental development models (e.g., Unified Process)" |
| V-model: one-for-one relationship between development phases and test levels | 5 | "describing a one-for-one relationship between major phases of software development ... and corresponding test levels" |
| Sequential: testers join requirement reviews, analysis, design early; code comes late, so dynamic testing cannot be done early | 1 (2.1.1) | "typically dynamic testing cannot be performed early in the SDLC" |
| Iterative and incremental: in some of these models each iteration is assumed to deliver a prototype or increment; static and dynamic testing at all levels; fast feedback and extensive regression testing | 1 (2.1.1) | "Frequent delivery of increments requires fast feedback and extensive regression testing." |
| Agile: change can occur at any time; light documentation; extensive test automation for regression; most manual testing is experience-based | 1 (2.1.1) | "most of the manual testing tends to be done using experience-based test techniques" |

## Topic: Agile Methodology

| Claim | Source | Quote |
|---|---|---|
| Glossary: Agile is a group of SDLC models | 6 | "A group of software development lifecycle models based on iterative incremental development" |
| Methods and practices named in the syllabus (ATDD, BDD, DDD, XP, FDD, Kanban, Lean IT, Scrum, TDD) | 1 (2.1) | "acceptance test-driven development (ATDD), behavior-driven development (BDD), domain-driven design (DDD), extreme programming (XP), feature-driven development (FDD), Kanban, Lean IT, Scrum, and test-driven development (TDD)" |
| Release planning defines the product backlog, gives the base of the test approach and test plan | 1 (5.1.2) | "Release planning looks ahead to the release of a product, defines and re-defines the product backlog" |
| Testers in release planning: write testable user stories and acceptance criteria, risk analysis, estimate, test approach | 1 (5.1.2) | "participate in writing testable user stories and acceptance criteria" |
| Iteration planning is concerned with the iteration backlog; testers do detailed risk analysis of user stories | 1 (5.1.2) | "Iteration planning looks ahead to the end of a single iteration and is concerned with the iteration backlog." |
| In an iterative model each iteration is assumed to deliver a working increment (hedge kept) | 1 (2.1.1) | "it is assumed that each iteration delivers a working prototype or product increment" |
| Retrospectives discuss what worked, what did not, how to improve; held at end of iteration, release, or as needed; results are normally part of the completion report | 1 (2.1.6) | "What was successful, and should be retained?" / "The results should be recorded and are normally part of the test completion report" |
| Retrospectives are critical for continuous improvement; it is important to follow up the improvements | 1 (2.1.6) | "Retrospectives are critical for the successful implementation of continuous improvement" ; "it is important that any recommended improvements are followed up" |
| Whole team approach: any member with the skills can do any task; everyone is responsible for quality | 1 (1.5.2) | "any team member with the necessary knowledge and skills can perform any task, and everyone is responsible for quality" |
| In Agile, exit criteria are often called Definition of Done | 1 (5.1.3) | "In Agile software development, exit criteria are often called Definition of Done" |
| The syllabus has no sprint, daily meeting, or demo step | grep of syllabus text | 0 hits for "sprint", "stand-up", "demo"; "daily" occurs only in "daily life" and "daily, weekly" (progress reports) |

## Topic: ATDD, TDD and BDD

| Claim | Source | Quote |
|---|---|---|
| TDD, ATDD, BDD are similar approaches: tests direct the development | 1 (2.1.3) | "TDD, ATDD and BDD are similar development approaches, where tests are defined as a means of directing development." |
| All three implement early testing, follow shift left, support iterative models | 1 (2.1.3) | "Each of these approaches implements the principle of early testing ... and follows shift left" |
| TDD: directs coding through test cases; write test, write code, refactor | 1 (2.1.3) | "Tests are written first, then the code is written to satisfy the tests, and then the tests and code are refactored" |
| TDD glossary | 7 | "A software development technique in which the test cases are developed, automated and then the software is developed incrementally to pass those test cases." |
| ATDD: the tests come from the acceptance criteria (page wording reworded, no copied run); tests before the code | 1 (2.1.3) | "Derives tests from acceptance criteria as part of the system design process" |
| ATDD glossary | 8 | "A collaboration-based test-first approach that defines acceptance tests in the stakeholders' domain language." |
| ATDD starts with a specification workshop; team members with different perspectives create the test cases; the team as a whole or the tester alone can write them | 1 (4.5.3) | "The first step is a specification workshop" ; "created by team members with different perspectives, e.g., customers, developers, and testers" |
| ATDD order: positive tests, then negative, then non-functional | 1 (4.5.3) | "After the positive test cases are done, the team should perform negative testing." |
| BDD: behavior in simple natural language, usually Given/When/Then; translated to executable tests | 1 (2.1.3) | "usually using the Given/When/Then format" |
| BDD glossary | 9 | "A collaborative approach to development in which the team is focusing on delivering expected behavior ... which forms the basis for testing." |
| Tests may persist as automated tests for later changes | 1 (2.1.3) | "tests may persist as automated tests to ensure the code quality in future adaptions / refactoring" |
| Shift left: testing earlier, but later testing is not neglected | 1 (2.1.5) | "it does not mean that testing later in the SDLC should be neglected" |

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "The Software Development Life Cycle (SDLC) refers to a methodology with clearly defined processes" | Glossary: "The activities performed at each phase in software development, and how they relate to one another logically and chronologically." Syllabus 2.1 separates SDLC models from "software development methods". | yes (SDLC topic) |
| "STLC is a structured process ... from requirement analysis to test closure"; seven phases with Requirement Analysis first and "Defect Reporting & Tracking" and "Test Environment Setup" as own phases | 1.4.1: seven groups (planning, monitoring and control, analysis, design, implementation, execution, completion); "often implemented iteratively or in parallel". STLC is not defined. | yes (STLC topic) |
| SDLC "4. Testing: Verify the system meets requirements and is defect-free" | 1.3: "cannot prove that there are no defects" | yes (SDLC topic) |
| SDLC lists "Testing" as one phase after "Implementation" | 2.1.2: "For every software development activity, there is a corresponding test activity" | yes (SDLC topic) |
| "The Agile methodology is a project management approach" | Glossary: Agile is "A group of software development lifecycle models"; syllabus 2.1 lists Agile practices as development methods | yes (Agile topic) |
| Testing Activities, "Test Closure ... Close defects and testware" | 1.4.1: the term is "test completion" (closure is a synonym). Unresolved defects get change requests or backlog items. | no (a synonym is no conflict; "close defects" is a mild wording difference) |
| The eight Agile activities (sprint, daily meetings, demo) | The syllabus has no such list and says "iteration", not "sprint". | no (not a conflict: a Scrum-style list. The `istqb` block says it is not from ISTQB) |
| ATDD, TDD, BDD notes | Same as 2.1.3 (the owner text is the syllabus text). The last remark ("ATDD-style thinking is more common before development") is the owner's view. | no |
| "Sequential model: Waterfall, V-Model"; "Iterative / Incremental: Spiral model, Prototyping, RAD" | 2.1: waterfall, V-model sequential; spiral, prototyping iterative; Unified Process incremental. RAD is not named. | no (no conflict with what the syllabus says) |

Spelling fixes in the notes blocks: "Continuously improvement" became "Continuous improvement"; "given/When/Then" became "Given/When/Then". The stray line `### Software testing classification` at the end of the owner's ATDD part belongs to chapter 4 and is not in this chapter.

## Fix round 1

The page wording changed after the fact-check and the review: test analysis and test design (no copied run), TDD and ATDD rows (reworded), the hedge "in some of these models" for iterations, "comprehensive enough" for test levels, "It is important to follow up", the ATDD test creators, the glossary wording for the test process, and a fifth warning callout for the notes' "methodology" wording of the SDLC. The details are in the "Fix round 1" section of the chapter report.
