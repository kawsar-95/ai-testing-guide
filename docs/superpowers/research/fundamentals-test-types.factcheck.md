# Fact-check: Test Types (`test-types`)

| Field | Value |
|---|---|
| Chapter | 4, `test-types`, "Test Types" (`content/fundamentals/test-types.mdx`, commit 8b81c6d) |
| Date | 2026-10-20 |
| Round | 2 (round 1: commit 8b81c6d; round 2: commit 8226394, the fix of the round-1 FAILs) |
| Checker | An independent agent. It did not write the chapter. |
| Method | Each `<Cite n>` was checked against source n itself: the syllabus text (`ctfl-v4.0.1.txt`) or the glossary API (`https://api.glossary.istqb.org/v1/terms` list of 1128 entries, and `/v1/terms/<slug>` for definitions, synonyms and syllabus usage, read on 2026-10-20). Absence claims were checked with a search of the syllabus text (line breaks joined) and of the glossary list, plus the synonym fields of the nearby terms. The writer's notes were not used as evidence. |

## Sources

| n | Source | Checked against |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 | Syllabus text, sections 2.1.1, 2.2.1, 2.2.2, 2.2.3, 2.3, 3.1, 3.1.1, 3.1.2, 3.1.3, 4.1, 4.4.2, 5.1.3, 5.1.7 |
| 2 | ISTQB Glossary: manual testing | API, `manual-testing` v1 |
| 3 | ISTQB Glossary: test automation | API, `test-automation` v3 |
| 4 | ISTQB Glossary: static testing | API, `static-testing` v4 |
| 5 | ISTQB Glossary: dynamic testing | API, `dynamic-testing` v2 |
| 6 | ISTQB Glossary: functional testing | API, `functional-testing` v4 |
| 7 | ISTQB Glossary: smoke testing | API, `smoke-testing` v1 (no synonyms) |
| 8 | ISTQB Glossary: confirmation testing | API, `confirmation-testing` v3 (synonym: retesting) |
| 9 | ISTQB Glossary: feature testing | API, `feature-testing` v1 (used in: Specialist - AI Testing v2.0 only) |
| 10 | ISTQB Glossary: regression testing | API, `regression-testing` v3 |
| 11 | ISTQB Glossary: exploratory testing | API, `exploratory-testing` v4 |
| 12 | ISTQB Glossary: ad hoc testing | API, `ad-hoc-testing` v2 |
| 13 | ISTQB Glossary: random testing | API, `random-testing` v1 |
| 14 | ISTQB Glossary: alpha testing | API, `alpha-testing` v3 |
| 15 | ISTQB Glossary: beta testing | API, `beta-testing` v3 |
| 16 | ISTQB Glossary: A/B testing | API, `ab-testing` v2 |
| 17 | ISTQB Glossary: non-functional testing | API, `non-functional-testing` v3 |
| 18 | ISTQB Glossary: performance testing | API, `performance-testing` v2 |
| 19 | ISTQB Glossary: security testing | API, `security-testing` v1 |
| 20 | ISTQB Glossary: usability testing | API, `usability-testing` v2 |
| 21 | ISTQB Glossary: cross-browser compatibility | API, `cross-browser-compatibility` v1 |
| 22 | ISTQB Glossary: cross-device testing | API, `cross-device-testing` v1 |

All 22 URLs are as in `fundamentals-sources.md` (syllabus) or follow its slug rule (glossary). The 8 term pages that are new in this chapter return HTTP 200.

## Round 1

The tables of round 1 stay as they were. Line numbers are of commit 8b81c6d.

## Table 1: Cited claims

Line numbers are of `content/fundamentals/test-types.mdx` at commit 8b81c6d.

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | Testing Classification | Techniques are black-box, white-box, experience-based (l.46) | 1 | PASS | "In this syllabus, test techniques are classified as black-box, white-box, and experience-based." (4.1) | |
| 2 | Testing Classification | The syllabus addresses four test types (l.46) | 1 | PASS | "In this syllabus, the following four test types are addressed" (2.2.2): functional, non-functional, black-box, white-box | |
| 3 | Testing Classification | Manual testing: a test activity done by hand (l.48) | 2 | PASS | "A test activity performed manually." | |
| 4 | Testing Classification | Test automation: conversion of test activities to automated operation (l.48) | 3 | PASS | "The conversion of test activities to automated operation." | |
| 5 | Testing Classification | Static and dynamic testing are test approaches; static does not execute the test item (l.50) | 4 | PASS | "A test approach that does not involve the execution of a test item." | The first sentence of l.50 has no cite of its own; the cites of the next two sentences support it. |
| 6 | Testing Classification | Dynamic testing executes the test item (l.50) | 5 | PASS | "A test approach that involves test execution of a test item." | |
| 7 | Static Testing | Static testing checks a test item without running it (l.82) | 4 | PASS | Same quote as row 5 | |
| 8 | Static Testing | People examine work products by hand, e.g. in a review (l.82) | 1 | PASS | "evaluated through manual examination (e.g., reviews) or with the help of a tool (e.g., static analysis)" (3.1) | |
| 9 | Static Testing | "A tool can do the same work. This is static analysis." (l.82) | 1 | FAIL | Same quote as row 8 | Says more than the source. The syllabus says work products are evaluated "with the help of a tool". It does not say a tool does the same work as a review. Fix: "A tool can also help to examine work products. This is static analysis." |
| 10 | Static Testing | "The objectives of static testing are to improve quality and to find defects." (l.84) | 1 | FAIL | "Test objectives include improving quality, detecting defects and assessing characteristics like readability, completeness, correctness, testability and consistency." (3.1) | The source gives an open list ("include"). "The objectives ... are" makes it a closed list. Fix: "The objectives of static testing include ..." |
| 11 | Static Testing | It also assesses readability, completeness, correctness, testability, consistency (l.84) | 1 | PASS | Same quote as row 10 | |
| 12 | Static Testing | Almost any work product can be examined (l.86) | 1 | PASS | "Almost any work product can be examined using static testing." (3.1.1) | 7 words match in a row; under the copy limit. |
| 13 | Static Testing | The list of example work products (l.88-93) | 1 | PASS | "Examples include requirement specification documents, source code, test plans, test cases, product backlog items, test charters, project documentation, contracts and models." (3.1.1) | A list of names; see the copy check. |
| 14 | Static Testing | Review: any readable work product (l.95) | 1 | PASS | "Any work product that can be read and understood can be the subject of a review." (3.1.1) | |
| 15 | Static Testing | Static analysis needs a structure, such as code or a model (l.95) | 1 | PASS | "for static analysis, work products need a structure against which they can be checked (e.g., models, code or text with a formal syntax)" (3.1.1) | |
| 16 | Static Testing | Finds defects in the earliest SDLC phases (l.97) | 1 | PASS | "Static testing can detect defects in the earliest phases of the SDLC" (3.1.2) | |
| 17 | Static Testing | Finds defects dynamic testing cannot, e.g. unreachable code, defects in documents (l.97) | 1 | PASS | "defects which cannot be detected by dynamic testing (e.g., unreachable code, design patterns not implemented as desired, defects in non-executable work products)" (3.1.2) | |
| 18 | Static Testing | Reviews cost, but total project cost is usually lower (l.99) | 1 | PASS | "Even though reviews can be costly to implement, the overall project costs are usually much lower than when no reviews are performed because less time and effort..." (3.1.2) | |
| 19 | Static Testing | The 7-row table of defect types easier or cheaper to find (l.101-111) | 1 | PASS | "Typical defects that are easier and/or cheaper to find through static testing include:" requirements, design, coding, standards, interface, security, test basis coverage (3.1.3) | Each row matches one bullet of 3.1.3. |
| 20 | Dynamic Testing | Dynamic testing runs the test item (l.141) | 5 | PASS | Same quote as row 6 | |
| 21 | Dynamic Testing | "It causes failures. The tester then analyzes each failure to find the defect behind it." (l.141) | 1 | FAIL | "dynamic testing causes failures from which the associated defects are determined through subsequent analysis" (3.1.3) | Says more than the source. The source does not say who does the analysis. In 1.1.2 finding the cause of a failure is debugging, which is separate from testing. Fix: "Analysis of each failure then finds the defect behind it." (the wording of the table row, l.147). |
| 22 | Dynamic Testing | Static and dynamic testing complement each other (l.143) | 1 | PASS | "Static testing and dynamic testing practices complement each other." (3.1.3) | |
| 23 | Dynamic Testing | Some defect types only one of them can find (l.143) | 1 | PASS | "there are some defect types that can only be found by either static or dynamic testing" (3.1.3) | |
| 24 | Dynamic Testing | Table row "How it finds defects" (l.147) | 1 | PASS | "Static testing finds defects directly, while dynamic testing causes failures from which the associated defects are determined through subsequent analysis" (3.1.3) | |
| 25 | Dynamic Testing | Table row "Work products" (l.148) | 1 | PASS | "Static testing can be applied to non-executable work products, while dynamic testing can only be applied to executable work products" (3.1.3) | |
| 26 | Dynamic Testing | Table row "Hard-to-reach code" (l.149) | 1 | PASS | "Static testing may more easily detect defects that lay on paths through the code that are rarely executed or hard to reach using dynamic testing" (3.1.3) | |
| 27 | Dynamic Testing | Table row "Quality characteristics" (l.150) | 1 | PASS | "not dependent on executing code (e.g., maintainability) ... dependent on executing code (e.g., performance efficiency)" (3.1.3) | |
| 28 | Dynamic Testing | Sequential models: dynamic testing usually cannot start early (l.152) | 1 | PASS | "The executable code is usually created in the later phases, so typically dynamic testing cannot be performed early in the SDLC." (2.1.1) | |
| 29 | Dynamic Testing | Functional testing is one of four types; it evaluates the functions the system should perform; "These functions are what the test object does." (l.154) | 1 | FAIL | "Functional testing evaluates the functions that a component or system should perform. The functions are "what" the test object should do." (2.2.2) | The source says "should do". "does" changes the meaning (the expected behavior, not the actual behavior). Fix: "These functions are what the test object should do." The second sentence also fails the copy check (C1). |
| 30 | Dynamic Testing | Glossary: functional suitability (l.154) | 6 | PASS | "A test type to determine the functional suitability of a test object." | |
| 31 | Dynamic Testing | Main objective: completeness, correctness, appropriateness (l.156) | 1 | PASS | "The main objective of functional testing is checking the functional completeness, functional correctness and functional appropriateness." (2.2.2) | |
| 32 | Dynamic Testing | All four types apply at all test levels (l.156) | 1 | PASS | "All the four above mentioned test types can be applied to all test levels, although the focus will be different at each level." (2.2.2) | |
| 33 | Smoke, Sanity and Feature | Smoke testing: test type, confidence that a test object is ready for planned testing (l.188) | 7 | PASS | "A test type to gain sufficient confidence that a test object is ready for planned testing." | |
| 34 | Smoke, Sanity and Feature | Syllabus uses only "smoke tests"; entry criterion example (l.188) | 1 | PASS | "initial quality level of a test object (e.g., all smoke tests have passed)" (5.1.3) | The syllabus text has 2 hits for "smoke", both "smoke tests" (5.1.3, 5.1.7). |
| 35 | Smoke, Sanity and Feature | Smoke tests are in Q4, technology facing, critique the product (l.188) | 1 | PASS | "Quadrant Q4 (technology facing, critique the product). This quadrant contains smoke tests and non-functional tests (except usability tests)." (5.1.7) | |
| 36 | Smoke, Sanity and Feature | Confirmation testing: change-related, after a defect fix, failure does not reoccur (l.192) | 8 | PASS | "A type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur." | "The nearest ISTQB term" is the tutorial's judgement, not an ISTQB fact. See the review. |
| 37 | Smoke, Sanity and Feature | Feature testing is a glossary entry with an AI meaning (l.200) | 9 | PASS | "A test type to determine if an AI model training dataset contains an appropriate set of features." | The API lists only "Specialist - AI Testing v2.0" as its syllabus. |
| 38 | Smoke, Sanity and Feature | Nearest term for checking a feature: functional testing (l.202) | 6 | PASS | Same quote as row 30 | The cite supports the definition. "Nearest" is a judgement. |
| 39 | Smoke, Sanity and Feature | Table: smoke defined; sanity: confirmation testing; feature: AI meaning; functional testing (l.212-214) | 7, 8, 9, 6 | PASS | Same quotes as rows 33, 36, 37, 30 | |
| 40 | Regression Testing | Confirms no adverse consequences, incl. a fix already confirmation tested (l.232) | 1 | PASS | "Regression testing confirms that no adverse consequences have been caused by a change, including a fix that has already been confirmation tested." (2.2.3) | |
| 41 | Regression Testing | Glossary: change-related; defects introduced or uncovered in unchanged areas (l.232) | 10 | PASS | "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." | |
| 42 | Regression Testing | Same component, other components, connected systems (l.234) | 1 | PASS | "could affect the same component where the change was made, other components in the same system, or even other connected systems" (2.2.3) | |
| 43 | Regression Testing | Can relate to the environment (l.234) | 1 | PASS | "may not be restricted to the test object itself but can also be related to the environment" (2.2.3) | |
| 44 | Regression Testing | Impact analysis first; shows affected parts; sets the extent (l.236) | 1 | PASS | "It is advisable first to perform an impact analysis to recognize the extent of the regression testing. Impact analysis shows which parts of the software could be affected." (2.2.3) | |
| 45 | Regression Testing | Suites run many times and grow; strong candidate for automation (l.238) | 1 | PASS | "Regression test suites are run many times and generally the number of regression test cases will increase with each iteration or release, so regression testing is a strong candidate for automation." (2.2.3) | Fact is correct. The wording fails the copy check (C2). |
| 46 | Regression Testing | With CI, include automated regression tests (l.238) | 1 | PASS | "Where CI is used, such as in DevOps (see section 2.1.4), it is good practice to also include automated regression tests." (2.2.3) | |
| 47 | Regression Testing | Confirmation and/or regression testing on all test levels (l.240) | 1 | PASS | "Confirmation testing and/or regression testing for the test object are needed on all test levels if defects are fixed and/or changes are made on these test levels." (2.2.3) | |
| 48 | Regression Testing | Comparison table, 6 cells (l.244-246) | 1 | PASS | "Confirmation testing confirms that an original defect has been successfully fixed" / "executing all tests that previously have failed due to the defect, or ... adding new tests" (2.2.3) | |
| 49 | Regression Testing | Maintenance testing: check the change and regressions in unchanged parts, usually most of the system (l.248) | 1 | PASS | "evaluating the success of the implementation of the change and the checking for possible regressions in parts of the system that remain unchanged (which is usually most of the system)" (2.3) | |
| 50 | Exploratory and Ad-hoc | Designed, executed, evaluated at the same time while learning (l.272) | 1 | PASS | "tests are simultaneously designed, executed, and evaluated while the tester learns about the test object" (4.4.2) | |
| 51 | Exploratory and Ad-hoc | Glossary: test approach, knowledge, exploration, earlier results (l.272) | 11 | PASS | "A test approach in which tests are dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results." | |
| 52 | Exploratory and Ad-hoc | Three uses (l.274-278) | 1 | PASS | "used to learn more about the test object, to explore it more deeply with focused tests, and to create tests for untested areas" (4.4.2) | |
| 53 | Exploratory and Ad-hoc | Useful with few or poor specs, or short time (l.280) | 1 | PASS | "useful when there are few or inadequate specifications or there is significant time pressure on the testing" (4.4.2) | |
| 54 | Exploratory and Ad-hoc | Complements formal techniques (l.280) | 1 | PASS | "also useful to complement other more formal test techniques" (4.4.2) | |
| 55 | Exploratory and Ad-hoc | Better with experience and domain knowledge (l.280) | 1 | PASS | "will be more effective if the tester is experienced, has domain knowledge" (4.4.2) | |
| 56 | Exploratory and Ad-hoc | Can use other techniques, e.g. EP (l.280) | 1 | PASS | "can incorporate the use of other test techniques (e.g., equivalence partitioning)" (4.4.2) | |
| 57 | Exploratory and Ad-hoc | Session-based testing gives a structure (l.282) | 1 | PASS | "sometimes performed using session-based testing to structure the testing" (4.4.2) | |
| 58 | Exploratory and Ad-hoc | Time box, charter with objectives; "A debriefing follows the session." (l.282) | 1 | FAIL | "The test session is usually followed by a debriefing" (4.4.2) | The time box and charter are correct. The source says "usually". The page drops it. Fix: "A debriefing usually follows the session." |
| 59 | Exploratory and Ad-hoc | Ad hoc testing: informal, no test analysis and test design (l.284) | 12 | PASS | "Informal testing performed without test analysis and test design." | |
| 60 | Exploratory and Ad-hoc | Comparison table, 4 cells (l.288-289) | 1, 12 | PASS | Same quotes as rows 50, 57, 58, 59 | "It can use time boxes, charters, and debriefings" is correct ("can"). |
| 61 | Monkey and Gorilla | Random testing: black-box technique, randomly generated inputs (l.315) | 13 | PASS | "A black-box test technique in which input values are randomly generated." | |
| 62 | Alpha, Beta and A/B | Alpha and beta are forms of acceptance testing (l.365) | 1 | PASS | "The main forms of acceptance testing are: user acceptance testing (UAT), operational acceptance testing, contractual acceptance testing and regulatory acceptance testing, alpha testing and beta testing." (2.2.1) | |
| 63 | Alpha, Beta and A/B | "The other forms are UAT, operational, contractual, regulatory" (l.365) | 1 | FAIL | Same quote as row 62 | The source says "main forms". "The other forms are" makes the list closed. Fix: "The other main forms are ..." |
| 64 | Alpha, Beta and A/B | Acceptance testing: validation and readiness for deployment (l.367) | 1 | PASS | "Acceptance testing focuses on validation and on demonstrating readiness for deployment" (2.2.1) | |
| 65 | Alpha, Beta and A/B | Ideally done by the intended users (l.367) | 1 | PASS | "Ideally, acceptance testing should be performed by the intended users." (2.2.1) | |
| 66 | Alpha, Beta and A/B | Alpha: developer's test environment; roles outside the development organization (l.371) | 14 | PASS | "A type of acceptance testing performed in the developer's test environment by roles outside the development organization." | |
| 67 | Alpha, Beta and A/B | Beta: external site; roles outside the development organization (l.372) | 15 | PASS | "A type of acceptance testing performed at an external site to the developer's test environment by roles outside the development organization." | |
| 68 | Alpha, Beta and A/B | A/B testing: test approach, two variants evaluated statistically, which performs better (l.374) | 16 | PASS | "A test approach in which two variants of a test object are statistically evaluated to determine which performs better for specified characteristics." | |
| 69 | Non-Functional | Attributes other than functions; "how well the system behaves" (l.422) | 1 | PASS | "Non-functional testing evaluates attributes other than functional characteristics of a component or system. Non-functional testing is the testing of "how well the system behaves"." (2.2.2) | |
| 70 | Non-Functional | Glossary: compliance with non-functional requirements (l.422) | 17 | PASS | "A test type to evaluate that a component or system complies with non-functional requirements." | |
| 71 | Non-Functional | ISO/IEC 25010 classification; the syllabus lists eight; the list with the two other names (l.424-433) | 1 | PASS | "The ISO/IEC 25010 standard provides the following classification of the non-functional quality characteristics:" then the 8 bullets (2.2.2) | |
| 72 | Non-Functional | Can start early, e.g. reviews or component testing (l.435) | 1 | PASS | "It is sometimes appropriate for non-functional testing to start early in the SDLC (e.g., as part of reviews or component testing)." (2.2.2) | |
| 73 | Non-Functional | Many reuse functional tests and check a constraint, e.g. time (l.435) | 1 | PASS | "Many non-functional tests are derived from functional tests ... check that while performing the function, a non-functional constraint is satisfied (e.g., checking that a function performs within a specified time" (2.2.2) | |
| 74 | Non-Functional | Late discovery can be a serious threat (l.435) | 1 | PASS | "The late discovery of non-functional defects can pose a serious threat to the success of a project." (2.2.2) | |
| 75 | Non-Functional | Special environment, e.g. usability lab (l.435) | 1 | PASS | "Non-functional testing sometimes needs a very specific test environment, such as a usability lab for usability testing." (2.2.2) | |
| 76 | Non-Functional | Performance testing (l.441) | 18 | PASS | "A test type to determine the performance efficiency of a component or system." | |
| 77 | Non-Functional | Security testing (l.442) | 19 | PASS | "A test type to determine the security of a component or system." | |
| 78 | Non-Functional | Usability testing (l.443) | 20 | PASS | "Testing to evaluate the degree to which the system can be used by specified users with effectiveness, efficiency and satisfaction in a specified context of use." | |
| 79 | Non-Functional | Cross-browser compatibility (l.444) | 21 | PASS | "The degree to which a website or web application can function across different browsers and degrade gracefully when browser features are absent or lacking." | |
| 80 | Non-Functional | Cross-device testing (l.445) | 22 | PASS | "A test type to determine whether a component or system performs correctly across its intended range of devices." | |

Table 1 FAILs: rows 9, 10, 21, 29, 58, 63 (6).

## Table 2: Warning callouts in the notes blocks

| # | Callout (line) | Conflict named | Verdict | Evidence | Note |
|---|---|---|---|---|---|
| W1 | Dynamic Testing, l.133 | The notes split dynamic testing into 2 types and put sanity, smoke, exploratory, monkey, alpha, beta, A/B under functional testing; the syllabus "addresses four test types" and puts alpha and beta under acceptance testing. | FAIL | 2.2.2: "A lot of test types exist and can be applied in projects. In this syllabus, the following four test types are addressed" / 2.2: "Test types are groups of test activities related to specific quality characteristics and most of those test activities can be performed at every test level." / 2.2.1: alpha and beta are "main forms of acceptance testing". | The alpha/beta part is a real conflict and is named correctly. The first part is named wrongly. The "but" sets "two types" against "four test types", so the reader takes it that ISTQB gives dynamic testing four types. ISTQB does not split dynamic testing into types. Its four test types are not kinds of dynamic testing: non-functional testing can start "as part of reviews" (2.2.2), and black-box and white-box are test types too. The callout also joins two conflicts in one 42-word sentence, and it names a list that is not in this notes block (the list is in topics 4 to 8). Fix: see the review, finding I1. |
| W2 | Alpha, Beta and A/B Testing, l.345 | The notes have the company's QA team do alpha testing; ISTQB says roles outside the development organization do it. | PASS | Glossary alpha testing: "performed in the developer's test environment by roles outside the development organization." Syllabus 2.1.4: "development (including testing)". | The conflict is real for the QA team. The syllabus counts testing as part of development (2.1.4), so the company's QA team is inside the development organization. "Internal employees" outside the development team can fit the glossary. The callout names only the QA team, so it is correct. CTFL 2.2.1 lists alpha testing as a form of acceptance testing and says acceptance testing "Ideally" is done "by the intended users". This agrees with the glossary. |

Table 2 FAILs: W1 (1).

## Table 3: "Not defined" statements

| # | Term (line) | Statement | Verdict | Evidence |
|---|---|---|---|---|
| N1 | Sanity testing (l.190, l.213) | "The ISTQB syllabus and glossary do not define this term." | PASS | Syllabus text: 0 hits for "sanity". Glossary list (1128 entries): no entry. `/v1/terms/sanity-testing` and `/sanity-test`: 404. No synonym "sanity" in `smoke-testing`, `confirmation-testing`, `regression-testing`, `build-verification-test`. |
| N2 | Monkey testing (l.313) | Same sentence | PASS | Syllabus: 0 hits for "monkey". Glossary: no entry, `/monkey-testing` 404, no synonym in `random-testing`. |
| N3 | Gorilla testing (l.323) | Same sentence | PASS | Syllabus: 0 hits. Glossary: no entry, `/gorilla-testing` 404. |
| N4 | Benchmark testing (l.446, l.448) | Same sentence, and "Not defined" in the table | PASS | Syllabus: 0 hits for "benchmark". Glossary: no entry, `/benchmark-testing` 404, no synonym in `performance-testing`, `load-testing`, `stress-testing`. The only glossary hit for "benchmark" is in the definition of "Software Usability Measurement Inventory". |
| N5 | Feature testing (l.200, l.214) | Defined in the glossary with an AI meaning only | PASS | `feature-testing` v1: "A test type to determine if an AI model training dataset contains an appropriate set of features." Used in "Specialist - AI Testing v2.0" only. Syllabus: 0 hits for "feature test". |
| N6 | Smoke testing and A/B testing (l.188, l.212, l.374) | Both are glossary terms | PASS | `smoke-testing` v1 and `ab-testing` v2 exist (rows 33 and 68). |

Table 3 FAILs: 0.

## Table 4: Uncited ISTQB facts

| # | Line | Claim | Verdict | Evidence | Fix |
|---|---|---|---|---|---|
| U1 | l.56 (callout under the diagram) | "'Manual' and 'automated' are glossary terms only." | FAIL | False. The syllabus uses "manual testing" 4 times (2.1.1, 2.1.4, 6.2) and "test automation" 23 times (for example 2.2.3: "Test automation should start early in the project."). The API lists "Foundation v4.0" in the syllabus usage of `test-automation`. "automated" is not a glossary term; the term is "test automation". | Delete the sentence. See the review, finding I2. |
| U2 | l.202 | "The syllabus does not use the term 'feature testing'." | FAIL | The claim is true (0 hits), but it has no cite and it is not the sentence that `chapter-instructions.md` allows without a cite. | Add `<Cite n={1} />`, or delete the sentence (the table row and l.200 already say what the glossary has). |
| U3 | l.284 | "The syllabus does not use the term 'ad hoc testing'." | FAIL | True (0 hits for "ad hoc", "ad-hoc", "adhoc"), but no cite and not the allowed sentence. | Add `<Cite n={1} />`. |
| U4 | l.374 | "The syllabus does not mention A/B testing." | FAIL | True (0 hits for "A/B"), but no cite and not the allowed sentence. | Add `<Cite n={1} />`. |
| U5 | l.56 (callout) | "The syllabus does not group testing by action." | PASS | True: the syllabus has no grouping of testing into manual and automated. It is in a "tutorial's own" callout. | The new diagram caption on `main` (9a14cbb) says the same. See the review, finding I2. |
| U6 | Diagram caption on `main` (9a14cbb), checked as page text | "This grouping is the tutorial's own, not from the ISTQB syllabus. The syllabus names static and dynamic testing and the three technique families, but it does not group testing by action." Label "Based on code execution". | PASS | 3.1 and 3.1.3 name static and dynamic testing. 4.1 names the three technique families. No grouping by action in the syllabus. The label fits the glossary: static testing "does not involve the execution of a test item". | The worktree (based on 21c509b) still renders the old caption ("by approach"). The new text appears after a merge of `main`. |

Table 4 FAILs: U1, U2, U3, U4 (4).

## Copy check

Method: every 8-word run of the `istqb` blocks (cites removed) was compared with the syllabus text, and each match was extended to its full length.

| # | Line | Run (words) | Verdict | Note |
|---|---|---|---|---|
| C1 | l.154 | "evaluates the functions that a component or system should perform" (10) | FAIL | One sentence copies 10 words in a row from 2.2.2. Fix: "It checks the functions that the component or system must have." (and keep "should do" in the next sentence, row 29). |
| C2 | l.238 | "with each iteration or release so regression testing is a strong candidate for automation" (14) | FAIL | Two page sentences together copy 14 words in a row from 2.2.3. Fix: "So teams often automate regression tests." or "This makes regression testing a good candidate for automation." |
| C3 | l.88-93 | "test cases product backlog items test charters project documentation contracts and models" (12) | PASS | A bullet list of work product names, not a sentence. |
| C4 | l.365 | "operational acceptance testing contractual acceptance testing and regulatory acceptance testing" (10) | PASS | A list of the names of acceptance testing forms. They cannot be reworded. |
| C5 | l.274-280 | "create tests for untested areas exploratory testing is" (8) | PASS | Under 10 words. |

Copy check FAILs: C1, C2 (2).

## Round 1 summary

| Table | FAILs |
|---|---|
| 1, cited claims | 6 (rows 9, 10, 21, 29, 58, 63) |
| 2, warning callouts | 1 (W1) |
| 3, not defined | 0 |
| 4, uncited ISTQB facts | 4 (U1, U2, U3, U4) |
| Copy check | 2 (C1, C2) |

Round 1 result: 13 open FAILs.

## Round 2

Checked: the diff 7e6f1f6..8226394 of `content/fundamentals/test-types.mdx`, each round-1 FAIL, and each new claim. Line numbers are of commit 8226394. The diagram caption is judged on the `main` text (9a14cbb, row U6 of round 1). The worktree still renders the old caption. This is expected.

### Re-check of the round-1 FAILs

| Round-1 item | New text (line) | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|
| Row 9 | "A tool can also help to examine work products. This is static analysis." (l.82) | PASS | "evaluated through manual examination (e.g., reviews) or with the help of a tool (e.g., static analysis)" (3.1) | |
| Row 10 | "The objectives of static testing include better quality and the detection of defects." / "They also include an assessment of readability, ..." (l.84) | PASS | "Test objectives include improving quality, detecting defects and assessing characteristics like readability, completeness, correctness, testability and consistency." (3.1) | Open list now. |
| Row 21 | "Analysis of each failure then finds the defect behind it." (l.141) | PASS | "dynamic testing causes failures from which the associated defects are determined through subsequent analysis" (3.1.3) | |
| Row 29 | "It checks the functions that the component or system must have. The functions describe what the test object should do." (l.154) | PASS | "Functional testing evaluates the functions that a component or system should perform. The functions are "what" the test object should do." (2.2.2) | |
| Row 58 | "A debriefing usually follows the session." (l.282) | PASS | "The test session is usually followed by a debriefing" (4.4.2) | |
| Row 63 | "The other main forms are user acceptance testing, operational ..., contractual ..., and regulatory acceptance testing." (l.371) | PASS | "The main forms of acceptance testing are: user acceptance testing (UAT), operational acceptance testing, contractual acceptance testing and regulatory acceptance testing, alpha testing and beta testing." (2.2.1) | |
| W1 | Split into W1a (Dynamic Testing, l.133) and W1b (Alpha, Beta and A/B, l.345) | See Table 2 (round 2) | | |
| U1 | Callout under the diagram is now only "One test can be manual, dynamic, and black-box at the same time." (l.56) | PASS | | The false sentence is gone. The sentence is the tutorial's own view in a "tutorial's own" callout. It does not repeat the `main` caption. |
| U2 | "The syllabus does not use the term "feature testing". <Cite n={1} />" (l.202) | PASS | Syllabus text: 0 hits for "feature test" (line breaks joined). | |
| U3 | "The syllabus does not use the term "ad hoc testing". <Cite n={1} />" (l.284) | PASS | Syllabus text: 0 hits for "ad hoc", "ad-hoc", "adhoc". | |
| U4 | "The syllabus does not mention A/B testing. <Cite n={1} />" (l.380) | PASS | Syllabus text: 0 hits for "A/B". | |
| C1 | l.154 (see row 29) | PASS | | Longest run copied from the syllabus: 7 words ("what the test object should do"). |
| C2 | "This makes regression testing a good candidate for automation." (l.238) | PASS | | No run of 7 or more words matches the syllabus. |

### New claims of the fix

| # | Line | Claim | Verdict | Evidence | Note |
|---|---|---|---|---|---|
| R1 | l.188 | "Smoke testing gives enough confidence that a test object is ready for planned testing." | PASS | Glossary smoke testing: "A test type to gain sufficient confidence that a test object is ready for planned testing." | Cite 7. |
| R2 | l.192, l.202, l.210 | "In this tutorial's view, the nearest ISTQB term is ..." and the column "Nearest ISTQB term (the tutorial's view)" | PASS | | Marked as the tutorial's judgement. The cited definitions (8, 6) are unchanged. |
| R3 | l.212 | Smoke testing row: "Smoke testing itself" | PASS | Glossary `smoke-testing` v1 exists. | |
| R4 | l.319 (monkey callout) | "In ISTQB random testing, the input values are randomly generated." | PASS | Glossary random testing: "A black-box test technique in which input values are randomly generated." | In a "tutorial's own" callout. The cited sentence at l.315 says the same. |
| R5 | l.458 (benchmark callout) | "Teams often call cross-browser and cross-device testing compatibility testing. In ISO/IEC 25010 terms, they can also touch portability." | PASS | | The tutorial's own view, in a "tutorial's own" callout, with hedged wording ("can also touch"). It is not stated as an ISTQB fact. |

### Table 2 (round 2): warning callouts

| # | Callout (line) | Conflict named | Verdict | Evidence | Note |
|---|---|---|---|---|---|
| W1a | Dynamic Testing, l.133 | "The notes split dynamic testing into two types, but ISTQB lists functional and non-functional testing as two of its four test types and does not split dynamic testing into types." | FAIL | 2.2.2: "A lot of test types exist and can be applied in projects. In this syllabus, the following four test types are addressed". The glossary has many more test types, for example smoke testing, performance testing and security testing ("A test type to ..."), which this page cites. | The conflict is now real and the main point is correct: ISTQB does not split dynamic testing into types. But "its four test types" says more than the source. ISTQB does not have only four test types. The syllabus addresses four of "a lot of test types". The sentence also has 30 words (limit 25). Fix: "The notes split dynamic testing into two types, but ISTQB has no types of dynamic testing; functional and non-functional testing are test types in the syllabus." |
| W1b | Alpha, Beta and A/B Testing, l.345 | "The notes list alpha and beta testing under functional testing, but the syllabus names them as forms of acceptance testing, which is a test level." | PASS | 2.2.1: "In this syllabus, the following five test levels are described" ... "Acceptance testing ... The main forms of acceptance testing are: ... alpha testing and beta testing." | The conflict is real and named correctly. |
| W2 | Alpha, Beta and A/B Testing, l.351 | Unchanged | PASS | As in round 1 | |

### Copy check (round 2)

Method as in round 1, with 7-word runs. Only two runs have 10 or more words:

| # | Line | Run (words) | Verdict | Note |
|---|---|---|---|---|
| C3 | l.88-93 | "test cases product backlog items test charters project documentation contracts and models" (12) | PASS | A bullet list of the names of work products, not a sentence. |
| C4 | l.371 | "operational acceptance testing contractual acceptance testing and regulatory acceptance testing" (10) | PASS | The run is only the names of the acceptance testing forms that the syllabus defines (2.2.1). Three of them are also glossary terms (user, operational, regulatory acceptance testing). Names cannot be reworded. A list of defined names is acceptable. |

All other runs have 8 words or fewer.

### Round 2 summary

| Table | FAILs |
|---|---|
| Round-1 FAILs re-checked | 0 open (12 of 13 fixed; W1 became W1a and W1b) |
| New claims | 0 |
| Warning callouts | 1 (W1a) |
| Copy check | 0 |

Round 2 result: 1 open FAIL (W1a).

## Round 3

Scope: R2-I1 only (callout W1a). Checked commit 7305afc. The diff f4aeb66..7305afc changes only line 133 of `content/fundamentals/test-types.mdx`.

| # | Callout (line) | New text | Verdict | Evidence | Note |
|---|---|---|---|---|---|
| W1a | Dynamic Testing, l.133 | "The notes split dynamic testing into two types, but ISTQB does not divide dynamic testing into types. Switch to the ISTQB version at the top of the page to see the ISTQB definition." | PASS | Glossary dynamic testing: "A test approach that involves test execution of a test item." The definition has no subtypes. Syllabus 2.2: "Test types are groups of test activities related to specific quality characteristics". 2.2.2 and 3.1.3 do not divide dynamic testing into types. | The conflict is real and named correctly. One sentence of 16 words names the conflict. The ending is exact. The false "its four test types" is gone. |

Open FAILs: 0
