# Fact-check: SDLC, STLC and Agile (`content/fundamentals/lifecycles.mdx`)

| Item | Value |
|---|---|
| Chapter | 3, `lifecycles`, "SDLC, STLC and Agile" |
| Date | 2026-10-20 |
| Round | 2 (round 1 tables kept; round 2 section at the end) |
| Page checked | round 1: commit eefdba9; round 2: commit 6fd29f4 (branch `fund-ch/lifecycles`), and the visible text of `components/fundamentals/diagrams/StlcDiagram.tsx` |
| Checker | an independent agent (not the writer) |

## Sources

| n | Source | Where checked |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1, https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`: 1.3, 1.4, 1.4.1, 1.4.2, 1.4.3, 1.5.2, 2.1, 2.1.1, 2.1.2, 2.1.3, 2.1.5, 2.1.6, 4.5.3, 5.1.2, 5.1.3, 5.3 |
| 2 | ISTQB Glossary: test process | `api.glossary.istqb.org/v1/terms/test-process`, 2026-10-20 |
| 3 | ISTQB Glossary: test completion | `.../terms/test-completion` (field `synonyms`: "test closure") |
| 4 | ISTQB Glossary: software development lifecycle | `.../terms/software-development-lifecycle` |
| 5 | ISTQB Glossary: V-model | `.../terms/v-model` |
| 6 | ISTQB Glossary: Agile software development | `.../terms/agile-software-development` |
| 7 | ISTQB Glossary: test-driven development | `.../terms/test-driven-development` |
| 8 | ISTQB Glossary: acceptance test-driven development | `.../terms/acceptance-test-driven-development` |
| 9 | ISTQB Glossary: behavior-driven development | `.../terms/behavior-driven-development` |

All nine URLs agree with `fundamentals-sources.md` (S1, S80, S87, S49, S53, S54, S55, S56, S57). The sources are numbered in the order of the first cite (lines 105, 105, 119, 289, 382, 429, 494, 495, 496). Every source has a cite. Every cite has a source.

## Table 1: cited claims

| # | topic | claim (short) | cite | verdict | quote from the source (≤ 30 words) | note |
|---|---|---|---|---|---|---|
| 1 | STLC | A test process is a set of main groups of activities (L105) | 1 | PASS | "A test process usually consists of the main groups of activities described below." (1.4.1) | |
| 2 | STLC | Glossary: a test process is a set of test activities performed to achieve a test objective (L105) | 2 | PASS | "A set of test activities performed to achieve a test objective." | Near-verbatim glossary text without quote marks. The copy rule covers the syllabus only. |
| 3 | STLC | The activities look like a sequence but are often parallel or repeated (L105) | 1 | PASS | "may appear to follow a logical sequence, they are often implemented iteratively or in parallel" (1.4.1) | |
| 4 | STLC | Teams tailor the activities to the system and the project (L105) | 1 | PASS | "These testing activities usually need to be tailored to the system and the project." (1.4.1) | |
| 5 | STLC | Map: Requirement Analysis = test analysis; analysis studies the test basis to find testable features (L113) | 1 | PASS | "Test analysis includes analyzing the test basis to identify testable features." (1.4.1) | |
| 6 | STLC | Map: Test Planning = test planning; sets objectives, picks an approach (L114) | 1 | PASS | "defining the test objectives and then selecting an approach that best achieves the objectives" (1.4.1) | |
| 7 | STLC | Map: Test Case Design = design + implementation; design makes test cases, implementation makes test data and scripts (L115) | 1 | PASS | "elaborating the test conditions into test cases"; "creating or acquiring the testware … (e.g., test data) … Manual and automated test scripts are created" (1.4.1) | |
| 8 | STLC | Map: Environment Setup = test implementation; design plans the environment (L116) | 1 | PASS | "The test environment is built and verified to be set up correctly."; design includes "designing the test environment" (1.4.1) | |
| 9 | STLC | Map: Test Execution = test execution; run, compare, log (L117) | 1 | PASS | "Actual test results are compared with the expected results. The test results are logged." (1.4.1) | |
| 10 | STLC | Map: Defect Reporting = part of test execution; anomalies analyzed and reported; defect management covers defects (L118) | 1 | PASS | "Anomalies are analyzed … This analysis allows us to report the anomalies based on the failures observed (see section 5.5)." (1.4.1) | Wording "reports them as failures" is loose. The source says "report the anomalies based on the failures observed". See review Minor. |
| 11 | STLC | "Test closure" is a glossary synonym of "test completion" (L119) | 3 | PASS | API `synonyms`: "test closure"; history: "test closure was removed from the Glossary, therefore it became a synonym of test completion" | |
| 12 | STLC | Monitoring and control: check all activities against the plan, act when they differ (L120) | 1 | PASS | "ongoing checking of all test activities and the comparison of actual progress against the plan. Test control involves taking the actions necessary" (1.4.1); "corrective actions" (5.3) | |
| 13 | Testing Activities | The syllabus has seven groups of activities (L187) | 1 | PASS | 1.4.1 lists planning, monitoring and control, analysis, design, implementation, execution, completion. | |
| 14 | Testing Activities | Planning: define objectives, select an approach that fits the constraints (L191) | 1 | PASS | "selecting an approach that best achieves the objectives within the constraints" (1.4.1) | |
| 15 | Testing Activities | Monitoring and control row (L192) | 1 | PASS | as row 12 | |
| 16 | Testing Activities | Analysis: analyze basis, define and prioritize conditions with risks, look for defects in the basis (L193) | 1 | PASS | "test conditions are defined and prioritized, taking the related risks … The test basis and the test object are also evaluated to identify defects" (1.4.1) | |
| 17 | Testing Activities | Design: conditions to test cases and testware, coverage items, data needs, environment design (L194) | 1 | PASS | "identification of coverage items … defining the test data requirements, designing the test environment" (1.4.1) | |
| 18 | Testing Activities | Implementation: test data, procedures, suites, scripts, schedule, build and verify environment (L195) | 1 | PASS | "Test procedures are prioritized and arranged within a test execution schedule … The test environment is built and verified" (1.4.1) | |
| 19 | Testing Activities | Execution: run by schedule, manual or automated, compare, log, analyze anomalies (L196) | 1 | PASS | "running the tests in accordance with the test execution schedule … may be manual or automated" (1.4.1) | |
| 20 | Testing Activities | Completion: change requests or backlog items, archive, shut down, lessons, report (L197) | 1 | PASS | "change requests or product backlog items are created … archived … shut down to an agreed state … test completion report is created and communicated" (1.4.1) | |
| 21 | Testing Activities | Analysis answers "what to test?" in terms of measurable coverage criteria (L199) | 1 | PASS | "Test analysis answers the question "what to test?" in terms of measurable coverage criteria." (1.4.1) | Fact correct. The sentence is a word-for-word copy: see Copy check C1. |
| 22 | Testing Activities | Design answers "how to test?" (L199) | 1 | PASS | "Test design answers the question "how to test?"." (1.4.1) | |
| 23 | Testing Activities | Completion at milestones: release, end of iteration, end of test level (L201) | 1 | PASS | "usually occurs at project milestones (e.g., release, end of iteration, test level completion)" (1.4.1) | |
| 24 | Testing Activities | Activities create testware as output work products (L203) | 1 | PASS | "Testware is created as output work products from the test activities" (1.4.3) | |
| 25 | Testing Activities | Context factors (stakeholders, team skills, time, budget, SDLC) change how the activities are done (L203) | 1 | PASS | "the way the testing is carried out will depend on a number of contextual factors including: Stakeholders … Team members … Project constraints (scope, time, budget …)" (1.4.2) | |
| 26 | SDLC | An SDLC model is an abstract, high-level view of the development process (L289) | 1 | PASS | "An SDLC model is an abstract, high-level representation of the software development process." (2.1) | |
| 27 | SDLC | The model defines how phases and activities relate, logically and in time (L289) | 1 | PASS | "relate to each other, both logically and chronologically" (2.1) | |
| 28 | SDLC | The glossary gives the same idea for the SDLC itself (L289) | 4 | PASS | "The activities performed at each phase in software development, and how they relate to one another logically and chronologically." | |
| 29 | SDLC | The choice of SDLC affects five things (list L312–316) (L310) | 1 | PASS | "The choice of the SDLC impacts on the: Scope and timing … Level of detail … Choice of test techniques … Extent of test automation … Role and responsibilities" (2.1.1) | |
| 30 | SDLC | Good practice: each development activity has a matching test activity (L320) | 1 | PASS | "For every software development activity, there is a corresponding test activity, so that all development activities are subject to quality control" (2.1.2) | |
| 31 | SDLC | Good practice: each level has its own objectives; "This gives full coverage and avoids repeated tests." (L321) | 1 | FAIL | "specific and different test objectives, which allows for testing to be appropriately comprehensive while avoiding redundancy" (2.1.2) | Says more than the source. "Appropriately comprehensive" is not "full coverage". It also clashes with principle 2 (exhaustive testing is impossible). Fix: "This keeps testing comprehensive enough and avoids repeated tests." |
| 32 | SDLC | Good practice: analysis and design start in the matching development phase; early testing (L322) | 1 | PASS | "Test analysis and design for a given test level begins during the corresponding development phase … principle of early testing" (2.1.2) | |
| 33 | SDLC | Good practice: testers review drafts early (L323) | 1 | PASS | "Testers are involved in reviewing work products as soon as drafts … are available" (2.1.2) | |
| 34 | SDLC | Testing cannot prove that a system has no defects (L325) | 1 | PASS | "Testing can show that defects are present … but cannot prove that there are no defects" (1.3, principle 1) | |
| 35 | SDLC Models | Three groups with examples: sequential (waterfall, V-model), iterative (spiral, prototyping), incremental (Unified Process) (L374–380) | 1 | PASS | "sequential development models (e.g., waterfall model, V-model), iterative development models (e.g., spiral model, prototyping), and incremental development models (e.g., Unified Process)" (2.1) | |
| 36 | SDLC Models | The syllabus also names Agile methods and practices, e.g. Scrum and Kanban (L382) | 1 | PASS | "software development methods and Agile practices. Examples include: … Kanban, Lean IT, Scrum" (2.1) | |
| 37 | SDLC Models | V-model links each major development phase one-to-one with a test level (L382) | 5 | PASS | "a one-for-one relationship between major phases of software development … and corresponding test levels" | |
| 38 | SDLC Models | Sequential row: testers join reviews, analysis, design early; no early dynamic testing (L388) | 1 | PASS | "in the initial phases testers typically participate in requirement reviews, test analysis, and test design … typically dynamic testing cannot be performed early" (2.1.1) | |
| 39 | SDLC Models | Iterative/incremental row: "Each iteration delivers a working prototype or product increment." (L389) | 1 | FAIL | "In some iterative development models and incremental development models, it is assumed that each iteration delivers a working prototype or product increment." (2.1.1) | Says more than the source: the hedge "in some … it is assumed" is lost, so the row says it for all such models. Fix: "In some of these models, each iteration is assumed to deliver a working prototype or product increment." |
| 40 | SDLC Models | Iterative/incremental row: static and dynamic testing at all levels; fast feedback and extensive regression testing (L389) | 1 | PASS | "both static testing and dynamic testing may be performed at all test levels … requires fast feedback and extensive regression testing" (2.1.1) | |
| 41 | SDLC Models | Agile row: change expected; light documents; automation for regression; manual testing mostly experience-based (L390) | 1 | PASS | "assumes that change may occur throughout the project … lightweight work product documentation and extensive test automation … most of the manual testing tends to be done using experience-based" (2.1.1) | |
| 42 | SDLC Models | The syllabus lists iterative and incremental as two groups (L392) | 1 | PASS | "iterative development models (…), and incremental development models (…)" (2.1) | |
| 43 | Agile | Glossary: Agile software development is a group of SDLC models, iterative and incremental, self-organizing cross-functional teams (L429) | 6 | PASS | "A group of software development lifecycle models based on iterative incremental development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams." | |
| 44 | Agile | The nine named methods and practices (L431) | 1 | PASS | "(ATDD), (BDD), (DDD), (XP), (FDD), Kanban, Lean IT, Scrum, and (TDD)" (2.1) | |
| 45 | Agile | Release planning looks ahead to the release (L437) | 1 | PASS | "Release planning looks ahead to the release of a product" (5.1.2) | |
| 46 | Agile | Release planning defines and re-defines the product backlog; testers help write testable stories and criteria (L438) | 1 | PASS | "defines and re-defines the product backlog … participate in writing testable user stories and acceptance criteria" (5.1.2) | |
| 47 | Agile | Iteration planning: end of one iteration, iteration backlog, detailed risk analysis (L439) | 1 | PASS | "looks ahead to the end of a single iteration and is concerned with the iteration backlog … participate in the detailed risk analysis of user stories" (5.1.2) | |
| 48 | Agile | Each iteration delivers a prototype or increment; static and dynamic testing at all levels (L440) | 1 | PASS | as row 39 (2.1.1) | In an Agile context (glossary: iterative incremental) the claim holds. The same hedge is lost: see review Minor. |
| 49 | Agile | Retrospective: what went well, what did not, how to improve; often at the end of an iteration (L442) | 1 | PASS | "often held at the end of a project or an iteration … What was successful … What was not successful … How to incorporate the improvements" (2.1.6) | |
| 50 | Agile | The team repeats the cycle in each iteration and delivers increments often (L443) | 1 | PASS | "Frequent delivery of increments requires fast feedback" (2.1.1) | |
| 51 | Agile | Retrospectives are critical for continuous improvement; the team must follow up (L444) | 1 | PASS | "Retrospectives are critical for the successful implementation of continuous improvement, and it is important that any recommended improvements are followed up." (2.1.6) | "must" is stronger than "it is important". See review Minor. |
| 52 | Agile | Whole team approach: anyone with the skills can do any task; everyone responsible for quality (L448) | 1 | PASS | "any team member with the necessary knowledge and skills can perform any task, and everyone is responsible for quality" (1.5.2) | |
| 53 | Agile | Light documents, automation for regression (L449) | 1 | PASS | as row 41 (2.1.1) | |
| 54 | Agile | Exit criteria are often called the Definition of Done (L450) | 1 | PASS | "In Agile software development, exit criteria are often called Definition of Done" (5.1.3) | |
| 55 | Agile | Retrospective results are normally part of the test completion report (L451) | 1 | PASS | "The results should be recorded and are normally part of the test completion report" (2.1.6) | |
| 56 | ATDD, TDD and BDD | TDD, ATDD, BDD are similar; tests direct development (L490) | 1 | PASS | "TDD, ATDD and BDD are similar development approaches, where tests are defined as a means of directing development." (2.1.3) | |
| 57 | ATDD, TDD and BDD | Tests before code; early testing and shift left; support an iterative model (L490) | 1 | PASS | "implements the principle of early testing … follows shift left … since the tests are defined before the code is written. They support an iterative development model." (2.1.3) | |
| 58 | ATDD, TDD and BDD | TDD directs the coding through test cases, not extensive design (L494) | 1 | PASS | "Directs the coding through test cases (instead of extensive software design)" (2.1.3) | Fact correct. Word-for-word copy: see Copy check C2. |
| 59 | ATDD, TDD and BDD | Glossary TDD: test cases developed and automated first (L494) | 7 | PASS | "the test cases are developed, automated and then the software is developed incrementally to pass those test cases" | |
| 60 | ATDD, TDD and BDD | ATDD derives tests from acceptance criteria in system design (L495) | 1 | PASS | "Derives tests from acceptance criteria as part of the system design process" (2.1.3) | Fact correct. Word-for-word copy: see Copy check C3. |
| 61 | ATDD, TDD and BDD | Glossary ATDD: collaborative test-first; acceptance tests in the stakeholders' domain language (L495) | 8 | PASS | "A collaboration-based test-first approach that defines acceptance tests in the stakeholders' domain language." | |
| 62 | ATDD, TDD and BDD | BDD describes behavior with test cases in simple natural language (L496) | 1 | PASS | "Expresses the desired behavior of an application with test cases written in a simple form of natural language" (2.1.3) | |
| 63 | ATDD, TDD and BDD | Glossary BDD: focus on behavior the customer expects; basis for testing (L496) | 9 | PASS | "focusing on delivering expected behavior of a component or system for the customer, which forms the basis for testing" | |
| 64 | ATDD, TDD and BDD | "Test format" column: TDD tests written first; ATDD acceptance tests stakeholders understand; BDD usually Given/When/Then (L494–496) | 1, 7, 8 | PASS | "Tests are written first" (2.1.3); "defines acceptance tests in the stakeholders' domain language" (S8); "usually using the Given/When/Then format" (2.1.3) | Derived wording, supported by the cites in the same row. "Tests of the code" for TDD is not a format: see review Minor. |
| 65 | ATDD, TDD and BDD | TDD three steps: test, code, refactor (L498) | 1 | PASS | "Tests are written first, then the code is written to satisfy the tests, and then the tests and code are refactored" (2.1.3) | |
| 66 | ATDD, TDD and BDD | ATDD first step: specification workshop; story and criteria discussed and written (L500) | 1 | PASS | "The first step is a specification workshop where the user story and … its acceptance criteria are analyzed, discussed, and written" (4.5.3) | |
| 67 | ATDD, TDD and BDD | Customers, developers, testers write the test cases together (L500) | 1 | PASS | "The test cases are created by team members with different perspectives, e.g., customers, developers, and testers" (4.5.3) | 4.5.3 also says creation "can be done by the team as a whole or by the tester individually". See review Minor. |
| 68 | ATDD, TDD and BDD | First positive, then negative, then non-functional (performance efficiency, usability) (L500) | 1 | PASS | "Typically, the first test cases are positive … the team should perform negative testing. Finally, … non-functional quality characteristics (e.g., performance efficiency, usability)" (4.5.3) | |
| 69 | ATDD, TDD and BDD | BDD: readable format, then translated into executable tests (L502) | 1 | PASS | "Test cases should then automatically be translated into executable tests" (2.1.3) | |
| 70 | ATDD, TDD and BDD | Tests can stay as automated tests to protect quality on later change (L516) | 1 | PASS | "tests may persist as automated tests to ensure the code quality in future adaptions / refactoring" (2.1.3) | |
| 71 | ATDD, TDD and BDD | Shift left: test earlier, but do not neglect later testing (L516) | 1 | PASS | "testing should be done earlier … but it does not mean that testing later in the SDLC should be neglected" (2.1.5) | |

### Diagram `<StlcDiagram />` (visible text, no cite in the component; the paragraph at L105 cites source 1)

| # | text | verdict | quote | note |
|---|---|---|---|---|
| D1 | "seven groups of activities: test planning, test monitoring and control, test analysis, test design, test implementation, test execution, and test completion" | PASS | 1.4.1 lists these seven. | |
| D2 | "Monitoring and control runs beside all the others." | PASS | "ongoing checking of all test activities" (1.4.1) | |
| D3 | "The activities often overlap or repeat." | PASS | "often implemented iteratively or in parallel" (1.4.1) | |
| D4 | Box notes: "Objectives and approach", "What to test?", "How to test?", "Testware and environment", "Run tests, log results", "Report and lessons learned" | PASS | 1.4.1 for each activity | |
| D5 | SVG `<title>`: "planning, analysis, design, implementation, execution and completion in order" | PASS | "may appear to follow a logical sequence" (1.4.1) | The visible caption (D3) gives the hedge. See review Minor. |

## Table 2: warning callouts in the notes blocks

| # | line | conflict named | verdict | ISTQB quote | note |
|---|---|---|---|---|---|
| W1 | L35 | STLC as seven fixed phases; ISTQB has no STLC and has seven groups of activities, often parallel or repeated | PASS | "they are often implemented iteratively or in parallel" (1.4.1). STLC: no syllabus hit, glossary API 404. | Real conflict, named correctly. Ends with the exact sentence. |
| W2 | L251 | "The notes say testing makes the system defect-free" | FAIL | "cannot prove that there are no defects" (1.3, principle 1) | The conflict is real, but it is named wrongly. The owner line (L247) says testing will "Verify the system meets requirements and is defect-free". It does not say testing "makes" the system defect-free. Fix: "The notes say testing verifies that the system is defect-free, but the ISTQB syllabus says testing cannot prove that there are no defects. Switch to …" |
| W3 | L277 | Testing as one phase after coding; ISTQB: every development activity has a matching test activity | PASS | "For every software development activity, there is a corresponding test activity" (2.1.2) | Real conflict, named correctly. |
| W4 | L410 | Agile as a project management approach; glossary: a group of SDLC models | PASS | "A group of software development lifecycle models based on iterative incremental development" (S6) | Real conflict. The glossary term is "Agile software development", not "Agile". See review Minor. |

## Table 3: "not defined" statements

| # | line | statement | verdict | evidence |
|---|---|---|---|---|
| N1 | L97 | STLC: "The ISTQB syllabus and glossary do not define this term." | PASS | No "STLC" or "testing life cycle" in the syllabus text. Glossary API: `stlc`, `software-testing-life-cycle`, `software-testing-lifecycle` all 404. Sources file: "Not defined". |
| N2 | L291 | "The syllabus does not give one standard list of SDLC phases." | PASS | 2.1 gives model groups and examples only. No phase list. |
| N3 | L433 | No list of Agile steps; no "sprint"; no daily meetings or demos; the syllabus says "iteration" | PASS | Syllabus text: 0 hits for "sprint", "stand-up". "daily" appears only for daily progress reports (5.3) and in 1.1. "demo" appears only as "demonstrating". "iteration" appears in 2.1.1, 5.1.2. Glossary API `sprint`: 404. |
| N4 | L441 | Review and demo: "The syllabus does not describe this step." | PASS | as N3 |

## Table 4: uncited ISTQB facts in istqb blocks

| # | line | text | verdict | note |
|---|---|---|---|---|
| U1 | L101 | "ISTQB uses the term "test process" for the same idea." (inside the tutorial's own callout) | PASS | The next paragraph (L105) cites it to sources 1 and 2. |
| U2 | L306 | "Testing is not a phase that starts after coding. It runs in all phases." (inside the tutorial's own callout) | PASS | Supported by the cited good practices at L318–322. |
| U3 | L446 | "The syllabus gives these ideas for testers in an Agile team." (lead-in) | PASS | Each list item has a cite. |
| U4 | L455 | "The syllabus names Scrum only as an example of an Agile method." (inside the tutorial's own callout) | PASS | Cited at L382 and L431. |
| U5 | L494–496 | "Test format" column cells | PASS | Covered by the cites in the same row (row 64). |

No uncited ISTQB fact outside a labelled callout.

## Copy check

Method: every run of 10 or more words (lower case, punctuation removed) of the `istqb` blocks and of the `StlcDiagram` text was searched in the syllabus text. The notes blocks are the owner's text, kept under the global constraints, so they are not checked (the owner's ATDD/TDD/BDD bullets copy 2.1.3).

| # | line | copied run | words | verdict | fix |
|---|---|---|---|---|---|
| C1 | L199 | "Test analysis answers the question "what to test?" in terms of measurable coverage criteria." | 13 | FAIL | "Test analysis decides what to test. It states this in coverage criteria that you can measure." |
| C2 | L494 | "Directs the coding through test cases, instead of extensive software design." | 11 | FAIL | "Test cases, not an extensive software design, guide the coding." |
| C3 | L495 | "Derives tests from acceptance criteria as part of the system design process." | 12 | FAIL | "The team gets the tests from the acceptance criteria while it designs the system." |

## Summary

| Table | Rows | FAIL |
|---|---|---|
| 1 Cited claims (71) and diagram (5) | 76 | 2 (rows 31, 39) |
| 2 Warning callouts | 4 | 1 (W2) |
| 3 "Not defined" statements | 4 | 0 |
| 4 Uncited ISTQB facts | 5 | 0 |
| Copy check | 3 | 3 (C1, C2, C3) |

Round 1 result: 6 FAILs.

## Round 2 (commit 6fd29f4, diff 59f3d1a..6fd29f4)

Date 2026-10-20. Checked: the diff of `content/fundamentals/lifecycles.mdx`, and the `StlcDiagram` text on the main branch (commit 378ee48 for the SVG `<title>`, commit 9a14cbb for the caption).

### Round-1 FAILs, checked again

| # | line now | new text | verdict | quote from the source | note |
|---|---|---|---|---|---|
| C1 | L199 | "Test analysis decides what to test. It states this in coverage criteria that you can measure." | PASS | "Test analysis answers the question "what to test?" in terms of measurable coverage criteria." (1.4.1) | No 10-word run left. "Test design decides how to test." is also PASS ("Test design answers the question "how to test?""). |
| C2 | L500 | "Test cases, not an extensive software design, guide the coding." | PASS | "Directs the coding through test cases (instead of extensive software design)" (2.1.3) | No copied run. |
| C3 | L501 | "The team gets the tests from the acceptance criteria while it designs the system." | PASS | "Derives tests from acceptance criteria as part of the system design process" (2.1.3) | No copied run. |
| 31 | L327 | "This keeps testing comprehensive enough and avoids repeated tests." | PASS | "allows for testing to be appropriately comprehensive while avoiding redundancy" (2.1.2) | |
| 39 | L395 | "In some of these models, each iteration is assumed to deliver a working prototype or product increment." | PASS | "In some iterative development models and incremental development models, it is assumed that each iteration delivers a working prototype or product increment." (2.1.1) | Hedge kept. |
| W2 | L257 | "The notes say testing verifies that the system is defect-free, but the ISTQB syllabus says testing cannot prove that there are no defects." | PASS | "cannot prove that there are no defects" (1.3) | Now matches the owner line "Verify the system meets requirements and is defect-free". Exact ending kept. |

### Round-1 notes and review Minors, checked again

| # | line now | new text | verdict | quote | note |
|---|---|---|---|---|---|
| 10 | L118 | "The team analyzes anomalies and reports them, based on the failures that it observed." | PASS | "report the anomalies based on the failures observed" (1.4.1) | |
| 48 | L446 | "In an iterative model, each iteration is assumed to deliver a working prototype or product increment." | PASS | "it is assumed that each iteration delivers a working prototype or product increment" (2.1.1) | "is assumed" is back. In the Agile context (S6: iterative incremental) the claim holds. |
| 51 | L450 | "It is important to follow up the improvements." | PASS | "it is important that any recommended improvements are followed up" (2.1.6) | |
| 67 | L506 | "Team members with different views, such as customers, developers, and testers, create the test cases." | PASS | "The test cases are created by team members with different perspectives, e.g., customers, developers, and testers" (4.5.3) | |
| 64 | L498–501 | Column "What the tests look like"; TDD cell "Automated tests of the code, written before the code." | PASS | "the test cases are developed, automated and then the software is developed" (S7); "Tests are written first" (2.1.3) | Supported by the cites in the same row. |
| W4 | L416 | "… the ISTQB glossary defines Agile software development as a group of software development life cycle models." | PASS | "A group of software development lifecycle models based on iterative incremental development" (S6) | The term is now named correctly. |
| — | L390 | "The table shows how each type of model affects testing." | PASS | 2.1.1 covers sequential, iterative and incremental, and Agile. | |
| D5 | `StlcDiagram` SVG `<title>` | "The seven test activity groups: planning, analysis, design, implementation, execution and completion, with test monitoring and test control beside all of them. The activities often overlap or repeat" | PASS | "ongoing checking of all test activities"; "often implemented iteratively or in parallel" (1.4.1) | "in order" is removed and the hedge is added. The caption now says "Test monitoring and test control run beside all the others": PASS (1.4.1). |

### New claims added by the fix

| # | line | text | cite | verdict | quote | note |
|---|---|---|---|---|---|---|
| R2-1 | L105 | "The glossary calls a test process a set of test activities that serve a test objective." | 2 | PASS | "A set of test activities performed to achieve a test objective." | Reworded. It is no longer a near-verbatim copy of the glossary. |
| W5 | L219–223 | Warning: "The notes call the SDLC a methodology, but the ISTQB glossary defines it as the activities done in each development phase and how they relate to one another." | none (notes block) | PASS | "The activities performed at each phase in software development, and how they relate to one another logically and chronologically." (S4) | Real conflict: the glossary defines the SDLC as activities and their relations, and 2.1 separates SDLC models from "software development methods". Named correctly. One sentence plus the exact required ending. |

### Round-2 copy check

The method is the same as in round 1. It ran on the `istqb` blocks, the five warning callouts, and the `StlcDiagram` text of the main branch. Result: 0 runs of 10 or more words copied from the syllabus.

### Round-2 checks

`npm test`: 155 pass, 0 fail. `npm run build`: exit 0. `check_sources.py out`: `OK 46 pages checked, 0 skipped`. `check_outline.py out`: `OK 586 TOC links`. `check_links.py out`: no output, exit 0.

### Round-2 summary

| Item | Rows | FAIL |
|---|---|---|
| Round-1 FAILs checked again | 6 | 0 |
| Round-1 notes and Minors checked again | 8 | 0 |
| New claims | 2 | 0 |
| Copy check | 0 runs | 0 |

Open FAILs: 0
