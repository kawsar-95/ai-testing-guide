# Fact-check: Test Levels, Pyramid and Quadrants (`content/fundamentals/levels.mdx`)

| Item | Value |
|---|---|
| Chapter | 5, `levels`, "Test Levels, Pyramid and Quadrants" |
| Date | 2026-10-20 |
| Round | 2 (round 1 tables kept below; round 2 section at the end) |
| Page checked | round 1: commit 4a85e8b; round 2: commit bb59b1d (branch `fund-ch/levels`); diagram fix: commit d0b72ea (main branch) |
| Also checked | the visible text (figcaption and labels) of `TestLevelsDiagram`, `TestPyramidDiagram`, `TestQuadrantsDiagram` in `components/fundamentals/diagrams/` |
| Checker | an independent agent (not the writer) |

## Sources

| n | Source | Where checked |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1, https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`: 2.1.2, 2.2, 2.2.1, 2.2.2, 5.1.6, 5.1.7 |
| 2 | ISTQB Glossary: test level | `api.glossary.istqb.org/v1/terms/test-level`, 2026-10-20 |
| 3 | ISTQB Glossary: component testing | `.../terms/component-testing` |
| 4 | ISTQB Glossary: unit testing | `.../terms/unit-testing` |
| 5 | ISTQB Glossary: integration testing | `.../terms/integration-testing` |
| 6 | ISTQB Glossary: component integration testing | `.../terms/component-integration-testing` (synonym "module integration testing" in the entry) |
| 7 | ISTQB Glossary: system integration testing | `.../terms/system-integration-testing` |
| 8 | ISTQB Glossary: system testing | `.../terms/system-testing` |
| 9 | ISTQB Glossary: acceptance testing | `.../terms/acceptance-testing` |
| 10 | ISTQB Glossary: user acceptance testing | `.../terms/user-acceptance-testing` |
| 11 | ISTQB Glossary: operational acceptance testing | `.../terms/operational-acceptance-testing` |
| 12 | ISTQB Glossary: regulatory acceptance testing | `.../terms/regulatory-acceptance-testing` |
| 13 | ISTQB Glossary: alpha testing | `.../terms/alpha-testing` |
| 14 | ISTQB Glossary: beta testing | `.../terms/beta-testing` |
| 15 | ISTQB Glossary: test pyramid | `.../terms/test-pyramid` |
| 16 | ISTQB Glossary: testing quadrants | `.../terms/testing-quadrants` |
| 17 | ISTQB Glossary: smoke testing | `.../terms/smoke-testing` |

All 17 URLs agree with `fundamentals-sources.md` (syllabus URL) and the glossary URL pattern. The sources are numbered in the order of the first cite (L56, L56, L106, L106, L137, L142, L142, L165, L186, L192, L193, L195, L196, L197, L220, L288, L310).

The full glossary term list (`/v1/terms`, 1128 terms) has no entry "contractual acceptance testing" and no entry or definition with "sanity". It has "contract testing", a different term.

## Table 1: cited claims

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | Test Levels | The syllabus describes five test levels (L56) | 1 | PASS | "In this syllabus, the following five test levels are described" (2.2.1) | |
| 2 | Test Levels | Each level is an instance of the test process, at a phase of development, from components to complete systems (L56) | 1 | PASS | "Each test level is an instance of the test process, performed in relation to software at a given phase of development, from individual components to complete systems" (2.2) | |
| 3 | Test Levels | Glossary: a test level is a specific instantiation of a test process (L56) | 2 | PASS | "A specific instantiation of a test process." | |
| 4 | Test Levels | Table: component testing, components in isolation, also unit testing (L62) | 1 | PASS | "Component testing (also known as unit testing) focuses on testing components in isolation." (2.2.1) | |
| 5 | Test Levels | Table: component integration testing, interfaces and interactions between components (L63) | 1 | PASS | "focuses on testing the interfaces and interactions between components" (2.2.1) | |
| 6 | Test Levels | Table: system testing, overall behavior and capabilities of a whole system or product (L64) | 1 | PASS | "focuses on the overall behavior and capabilities of an entire system or product" (2.2.1) | |
| 7 | Test Levels | Table: system integration testing, interfaces of the SUT with other systems and external services (L65) | 1 | PASS | "focuses on testing the interfaces of the system under test and other systems and external services" (2.2.1) | Fact correct. Copies 10 words; see copy check C1. |
| 8 | Test Levels | Table: acceptance testing, validation and proof of readiness for deployment (L66) | 1 | PASS | "focuses on validation and on demonstrating readiness for deployment" (2.2.1) | "proof" is a little stronger than "demonstrating". Acceptable. |
| 9 | Test Levels | Five attributes keep the test activities of two levels from overlapping (L70–L76) | 1 | PASS | "Test levels are distinguished by the following non-exhaustive list of attributes, to avoid overlapping of test activities: Test object, Test objectives, Test basis, Defects and failures, Approach and responsibilities" (2.2.1) | The page leaves out "non-exhaustive"; see the review file (Minor). |
| 10 | Test Levels | Each level has its own objectives; "This lets the team test in a complete way and avoid repeated tests" (L80) | 1 | FAIL | "Different test levels ... have specific and different test objectives, which allows for testing to be appropriately comprehensive while avoiding redundancy" (2.1.2) | The syllabus says "appropriately comprehensive", not "complete". "Complete" says more than the source and conflicts with the principle that exhaustive testing is impossible. Fix: "This lets the team test as fully as needed and avoid repeated tests." |
| 11 | Test Levels | The four test types apply at every level; the focus differs (L80) | 1 | PASS | "All the four above mentioned test types can be applied to all test levels, although the focus will be different at each level." (2.2.2) | |
| 12 | Test Levels | Sequential: exit criteria of one level often part of entry criteria of the next; not in some iterative models; levels can overlap (L84) | 1 | PASS | "the exit criteria of one level are part of the entry criteria for the next level. In some iterative models, this may not apply. ... Test levels may overlap in time." (2.2) | |
| 13 | Component Testing | Components in isolation; other name unit testing (L104) | 1 | PASS | "Component testing (also known as unit testing) focuses on testing components in isolation." (2.2.1) | |
| 14 | Component Testing | Often needs test harnesses or unit test frameworks (L104) | 1 | PASS | "It often requires specific support, such as test harnesses or unit test frameworks." (2.2.1) | 9-word run; under the limit. |
| 15 | Component Testing | Developers normally run it in their development environments (L104) | 1 | PASS | "Component testing is normally performed by developers in their development environments." (2.2.1) | |
| 16 | Component Testing | Glossary: component testing, individual hardware or software components (L106) | 3 | PASS | "A test level that focuses on individual hardware or software components." | |
| 17 | Component Testing | Glossary: unit testing, smallest part of code testable in isolation (L106) | 4 | PASS | "A test level that focuses on evaluating the smallest part of code testable in isolation." | |
| 18 | Component Testing | Non-functional testing can start early, as part of component testing (L108) | 1 | PASS | "It is sometimes appropriate for non-functional testing to start early in the SDLC (e.g., as part of reviews or component testing)." (2.2.2) | |
| 19 | Component Testing | Component tests are in Q1; automated and in CI (L108) | 1 | PASS | "This quadrant contains component tests and component integration tests. These tests should be automated and included in the CI process." (5.1.7) | |
| 20 | Integration Testing | Glossary: integration testing, interactions between components or systems (L137) | 5 | PASS | "A test level that focuses on interactions between components or systems." | |
| 21 | Integration Testing | Table: CIT tests interfaces and interactions between components (L141) | 1 | PASS | "focuses on testing the interfaces and interactions between components" (2.2.1) | |
| 22 | Integration Testing | Table: SIT tests interfaces between SUT and other systems and external services (L141) | 1 | PASS | Same quote as row 7 (2.2.1) | Copies 10 words; see copy check C2. |
| 23 | Integration Testing | Glossary: CIT is the integration testing of components (L142) | 6 | PASS | "The integration testing of components." | |
| 24 | Integration Testing | Glossary: SIT is a test level for the integration of systems (L142) | 7 | PASS | "A test level that focuses on the integration of systems." | |
| 25 | Integration Testing | CIT depends on the integration strategy: bottom-up, top-down, big-bang (L143) | 1 | PASS | "heavily dependent on the integration strategy like bottom-up, top-down or big-bang" (2.2.1) | |
| 26 | Integration Testing | SIT depends on a test environment close to the operational one (L143) | 1 | PASS | "requires suitable test environments preferably similar to the operational environment" (2.2.1) | |
| 27 | Integration Testing | CIT is also called unit integration testing (L145) | 1 | PASS | "Component integration testing (also known as unit integration testing)" (2.2.1) | |
| 28 | Integration Testing | Glossary lists module integration testing as a synonym (L145) | 6 | PASS | Entry `component-integration-testing`: synonyms: "module integration testing" | |
| 29 | Integration Testing | CIT tests are in Q1 (L145) | 1 | PASS | "This quadrant contains component tests and component integration tests." (5.1.7) | |
| 30 | System Testing | Overall behavior and capabilities of an entire system or product (L165) | 1 | PASS | "System testing focuses on the overall behavior and capabilities of an entire system or product" (2.2.1) | Fact correct. Copies 15 words; see copy check C3. |
| 31 | System Testing | Glossary: verifies that a system as a whole meets its specified requirements (L165) | 8 | PASS | "A test level that focuses on verifying that a system as a whole meets specified requirements." | |
| 32 | System Testing | Often functional tests of end-to-end tasks; often non-functional tests (L167–L168) | 1 | PASS | "often including functional testing of end-to-end tasks and the non-functional testing of quality characteristics" (2.2.1) | |
| 33 | System Testing | An independent test team may run it; related to system specifications (L169–L170) | 1 | PASS | "System testing may be performed by an independent test team, and is related to specifications for the system." (2.2.1) | |
| 34 | System Testing | Some NF characteristics (usability) best tested on a complete system; simulations of subsystems possible (L172) | 1 | PASS | "preferable to test them on a complete system in a representative test environment (e.g., usability). Using simulations of sub-systems is also possible." (2.2.1) | 9-word run; under the limit. |
| 35 | Acceptance Testing | Validation and readiness for deployment; fulfills the user's business needs; ideally the intended users (L186) | 1 | PASS | "focuses on validation and on demonstrating readiness for deployment, which means that the system fulfills the user's business needs. Ideally, acceptance testing should be performed by the intended users." (2.2.1) | |
| 36 | Acceptance Testing | Glossary: determines whether to accept the system (L186) | 9 | PASS | "A test level that focuses on determining whether to accept the system." | |
| 37 | Acceptance Testing | Six main forms (L188) | 1 | PASS | "The main forms of acceptance testing are: user acceptance testing (UAT), operational acceptance testing, contractual acceptance testing and regulatory acceptance testing, alpha testing and beta testing." (2.2.1) | Counted: six. |
| 38 | Acceptance Testing | UAT: if the intended users accept the system (L192) | 10 | PASS | "A type of acceptance testing performed to determine if intended users accept the system." | |
| 39 | Acceptance Testing | Operational: whether the organization that operates the system can accept it (L193) | 11 | PASS | "performed to determine whether the organization responsible for operating the system can accept it" | |
| 40 | Acceptance Testing | Contractual: "Named in the syllabus" (L194) | 1 | PASS | "contractual acceptance testing" in the list of main forms (2.2.1) | The row claims only that the syllabus names the form. True. The glossary has no entry for it (checked in the full term list). See the review file (Minor) for the empty meaning. |
| 41 | Acceptance Testing | Regulatory: determines the compliance of a test object (L195) | 12 | PASS | "A type of acceptance testing performed to determine the compliance of a test object." | |
| 42 | Acceptance Testing | Alpha: developer's test environment, roles outside the development organization (L196) | 13 | PASS | "performed in the developer's test environment by roles outside the development organization" | |
| 43 | Acceptance Testing | Beta: external site, roles outside the development organization (L197) | 14 | PASS | "performed at an external site to the developer's test environment by roles outside the development organization" | |
| 44 | Acceptance Testing | UAT is in Q3 (L199) | 1 | PASS | "This quadrant contains exploratory testing, usability testing, user acceptance testing." (5.1.7) | |
| 45 | Test Pyramid | Model of different granularity; helps test automation and test effort allocation (L220) | 1 | PASS | "a model showing that different tests may have different granularity ... supports the team in test automation and in test effort allocation" (5.1.6) | |
| 46 | Test Pyramid | Glossary: amount of testing per level, more at the bottom (L220) | 15 | PASS | "A graphical model representing the relationship of the amount of testing per level, with more at the bottom than at the top." | |
| 47 | Test Pyramid | Layers are groups of tests; higher layer: lower granularity, lower isolation, longer run time (L224) | 1 | PASS | "The pyramid layers represent groups of tests. The higher the layer, the lower the test granularity, the lower the test isolation ... and the higher the test execution time." (5.1.6) | 9 words copied inside one sentence; the 10-word run crosses the sentence end. See the review file (Minor). |
| 48 | Test Pyramid | Bottom: small, isolated, fast, small piece; usually many (L228) | 1 | PASS | "Tests in the bottom layer are small, isolated, fast, and check a small piece of functionality, so usually a lot of them are needed" (5.1.6) | |
| 49 | Test Pyramid | Top: complex, high-level, end-to-end, slower, large piece; usually few (L229) | 1 | PASS | "complex, high-level, end-to-end tests ... generally slower ... check a large piece of functionality, so usually just a few of them are needed" (5.1.6) | |
| 50 | Test Pyramid | Number and names differ; two examples (L231–L236) | 1 | PASS | "The number and naming of the layers may differ. For example, the original test pyramid model (Cohn 2009) ... Another popular model defines unit (component) tests, integration (component integration) tests, and end-to-end tests." (5.1.6) | The two table rows have no own cite; the lead sentence at L231 covers them. |
| 51 | Test Pyramid | Other test levels can be used (L238) | 1 | PASS | "Other test levels (see section 2.2.1) can also be used." (5.1.6) | |
| 52 | Test Quadrants | Brian Marick defined them; group levels with types, activities, techniques, work products in Agile (L288) | 1 | PASS | "The testing quadrants, defined by Brian Marick ... group the test levels with the appropriate test types, activities, test techniques and work products in the Agile software development." (5.1.7) | 9-word run; under the limit. Real person's name; see the review file (Minor). |
| 53 | Test Quadrants | Glossary: a classification model with four quadrants (L288) | 16 | PASS | "A classification model of test types/test levels in four quadrants" | |
| 54 | Test Quadrants | Two axes: business/technology facing; support the team (guide development) / critique the product (measure behavior) (L290–L293) | 1 | PASS | "tests can be business facing or technology facing. Tests can also support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against the expectations)." (5.1.7) | |
| 55 | Test Quadrants | Q1 row (L299) | 1 | PASS | "Quadrant Q1 (technology facing, support the team). This quadrant contains component tests and component integration tests. These tests should be automated and included in the CI process." (5.1.7) | |
| 56 | Test Quadrants | Q2 row (L300) | 1 | PASS | "Quadrant Q2 (business facing, support the team). This quadrant contains functional tests, examples, user story tests, user experience prototypes, API testing, and simulations. ... manual or automated." (5.1.7) | Fact correct. Copies 11 words; see copy check C4. |
| 57 | Test Quadrants | Q3 row (L301) | 1 | PASS | "Quadrant Q3 (business facing, critique the product). ... exploratory testing, usability testing, user acceptance testing. These tests are user-oriented and often manual." (5.1.7) | |
| 58 | Test Quadrants | Q4 row (L302) | 1 | PASS | "Quadrant Q4 (technology facing, critique the product). This quadrant contains smoke tests and non-functional tests (except usability tests). These tests are often automated." (5.1.7) | |
| 59 | Test Quadrants | Helps test management see that the SDLC has all appropriate test types and levels (L306) | 1 | PASS | "The model supports test management in visualizing these to ensure that all appropriate test types and test levels are included in the SDLC" (5.1.7) | |
| 60 | Test Quadrants | Describes test types to all stakeholders: developers, testers, business representatives (L306) | 1 | PASS | "provides a way to differentiate and describe the test types to all stakeholders, including developers, testers, and business representatives." (5.1.7) | |
| 61 | Test Quadrants | Negative claim: Q4 has only smoke and non-functional tests; no sanity, regression, or system testing (L310) | 1 | PASS | "This quadrant contains smoke tests and non-functional tests (except usability tests)." (5.1.7) | The Q4 bullet is the full list. "sanity" has 0 hits in the syllabus. Regression testing (2.2.3) and system testing (2.2.1) occur in the syllabus, but not in 5.1.7. |
| 62 | Test Quadrants | Glossary: smoke testing, enough confidence that the object is ready for planned testing (L310) | 17 | PASS | "A test type to gain sufficient confidence that a test object is ready for planned testing." | |
| D1 | Diagram: TestLevelsDiagram | Figcaption: five levels, bottom up: component, CIT, system, SIT, acceptance (TestLevelsDiagram.tsx:22) | (1, at L56) | PASS | The five bullets of 2.2.1, in the same order | Bar labels: "Components in isolation (unit testing)", "Interfaces between components", "Behavior of the entire system", "Interfaces to other systems and services", "Validation and readiness for deployment". All match 2.2.1. |
| D2 | Diagram: TestPyramidDiagram | Figcaption: bottom many small fast isolated unit tests; middle service or integration; top few slow end-to-end; higher layer, fewer tests, longer run (TestPyramidDiagram.tsx:28) | (1, 15 at L220) | PASS | "usually a lot of them are needed ... usually just a few of them are needed"; "the higher the test execution time" (5.1.6); "with more at the bottom than at the top" (glossary) | Labels "Unit", "Service / integration", "UI / end-to-end" combine the two models of 5.1.6. |
| D3 | Diagram: TestQuadrantsDiagram | Figcaption and labels: two viewpoints; Q1–Q4 contents; "Automated, in CI", "Manual or automated", "Often manual", "Often automated" (TestQuadrantsDiagram.tsx:59) | (1, at L288) | PASS | Same quotes as rows 54–58 (5.1.7) | All four quadrants match. Fact correct. The Q2 sentence copies 13 words; see copy check C5. |

## Table 2: warning callouts in the notes blocks

| # | Line | Callout (short) | Verdict | Evidence | Note |
|---|---|---|---|---|---|
| W1 | L48 | The notes list four levels; the syllabus describes five, because it splits integration testing into CIT and SIT | PASS | "the following five test levels are described" (2.2.1); the list has component integration testing and system integration testing | Real conflict, named correctly. |
| W2 | L129 | The notes say SIT covers "modules"; the syllabus "limits it to" the interfaces of the SUT with other systems and external services, "and module integration is component integration" | FAIL | Syllabus: "System integration testing focuses on testing the interfaces of the system under test and other systems and external services" (2.2.1). Glossary S6: synonym "module integration testing". | The conflict is real. But (a) "limits it to" says more than "focuses on"; (b) the syllabus does not say anything about modules; only the glossary makes "module integration testing" a synonym of component integration testing, and the sentence reads as if the syllabus says it. Fix: "The notes say system integration testing covers "modules", but the ISTQB syllabus says it focuses on the interfaces with other systems and external services, and the ISTQB glossary makes module integration testing a synonym of component integration testing. Switch to the ISTQB version at the top of the page to see the ISTQB definition." |
| W3 | L280 | The notes put sanity, regression, and system testing in Q4; the syllabus lists only smoke tests and non-functional tests (except usability tests) there | PASS | "This quadrant contains smoke tests and non-functional tests (except usability tests)." (5.1.7) | Real conflict, named correctly. |

No callout is missing for a real conflict. The writer's "no callout" decisions (test level as a "stage"; acceptance testing as "the final phase"; the pyramid and Q1–Q3 text) are reasonable: the glossary lists "test stage" as a synonym of test level, and the other lines do not contradict the syllabus. The notes' Q2 list leaves out "examples" and "simulations"; that is an omission, not a conflict.

## Table 3: "not defined" statements

| # | Line | Term | Verdict | Evidence |
|---|---|---|---|---|
| N1 | L310 | sanity testing | PASS | The syllabus text has 0 hits for "sanity". The full glossary term list (1128 terms, 2026-10-20) has no entry and no definition with "sanity". `fundamentals-sources.md` also records: no entry, no synonym. |
| N2 | L149 (callout) | "The syllabus names the three integration strategies but does not explain them here." | PASS | "bottom-up, top-down or big-bang" occurs only at 2.2.1, with no explanation. The glossary has no entry for these strategies. The explanation in the callout is a correct common meaning and is marked as the tutorial's own. |

## Table 4: uncited ISTQB facts in istqb blocks

| # | Line | Sentence | Verdict | Note |
|---|---|---|---|---|
| U1 | L137 | "The syllabus splits this work into two levels." | FAIL | An ISTQB fact with no cite. Fix: add `<Cite n={1} />`. |
| U2 | L72–L76 | The five attribute bullets | PASS | Covered by the cite in the lead sentence at L70. |
| U3 | L235–L236 | The two pyramid model rows | PASS | Covered by the cite at L231. |
| U4 | L292–L293 | The two axis bullets | PASS | Covered by the cite at L290. |
| U5 | L299–L302 | The "Notes" column of the quadrant table | PASS | Same row as a cited "Contains" cell; same section 5.1.7. |
| U6 | L149, L242, L314 | Tutorial's own callouts | PASS | Each is labeled as the tutorial's own and has no ISTQB claim except N2. |

## Copy check

Method: a script compared the page text (MDX, `<Cite>` removed) and the three diagram files with the syllabus text (lower case, punctuation removed) and listed every shared run of 8 or more words. Runs that cross a sentence end or a table cell were split at that point. Only runs of 10 or more words inside one sentence or one table cell count. Owner text in notes blocks is kept by rule and is not new prose.

| # | Location | Page text | Shared run (words) | Verdict | Fix |
|---|---|---|---|---|---|
| C1 | L65 (table cell) | "The interfaces between the system under test and other systems and external services." | "the system under test and other systems and external services" (10) | FAIL | For example: "Interfaces between the system under test and outside systems or services." |
| C2 | L141 (table cell) | Same sentence as C1 | Same (10) | FAIL | Same fix as C1. |
| C3 | L165 | "System testing focuses on the overall behavior and capabilities of an entire system or product" | "system testing focuses on the overall behavior and capabilities of an entire system or product" (15) | FAIL | For example: "System testing looks at how a complete system or product behaves and what it can do." |
| C4 | L300 (table cell) | "Functional tests, examples, user story tests, user experience prototypes, API testing, simulations" | "functional tests examples user story tests user experience prototypes api testing" (11) | FAIL | Change the order of the items, for example: "API testing, examples, functional tests, simulations, user experience prototypes, user story tests". |
| C5 | TestQuadrantsDiagram.tsx:59 (figcaption, visible) | "Q2 (...): functional tests, examples, user story tests, user experience prototypes, API testing, and simulations." | "functional tests examples user story tests user experience prototypes api testing and simulations" (13) | FAIL | Change the order of the items in the figcaption, as in C4. This file is a shared diagram component, not a chapter file. |
| C6 | L224 | "Each layer is a group of tests. The higher the layer, the lower the test granularity ..." | "tests the higher the layer the lower the test granularity" (10) | PASS | The run crosses the sentence end. The second sentence copies 9 words. See the review file (Minor). |
| C7 | L56, L84, L104, L172, L288, L302 | various | 8–9 words each | PASS | Under the limit. |
| C8 | Notes blocks (L213, L252–L276) | Owner text | up to 20 | PASS | Owner text, kept by rule. Not new prose. |

## Summary

- Table 1: 65 rows (62 page claims, 3 diagram rows), 1 FAIL (row 10).
- Table 2: 3 callouts, 1 FAIL (W2).
- Table 3: 2 statements, 0 FAIL.
- Table 4: 1 FAIL (U1).
- Copy check: 5 FAIL (C1–C5).

Round 1 result: 8 open FAILs.

## Round 2

Checked: the diff 68292ce..bb59b1d of `content/fundamentals/levels.mdx`, and `components/fundamentals/diagrams/TestQuadrantsDiagram.tsx` at d0b72ea. Line numbers are those of bb59b1d. The same copy script ran again on the page and on the diagram file.

### Round-1 FAILs

| Round-1 # | Line | New text (short) | Verdict | Evidence |
|---|---|---|---|---|
| Row 10 | L80 | "This lets the team test as fully as needed and avoid repeated tests" | PASS | "allows for testing to be appropriately comprehensive while avoiding redundancy" (2.1.2) |
| W2 | L129 | "the ISTQB syllabus says it focuses on the interfaces with other systems and external services, and the ISTQB glossary makes module integration testing a synonym of component integration testing" | PASS | "System integration testing focuses on testing the interfaces of the system under test and other systems and external services" (2.2.1); glossary `component-integration-testing`: synonym "module integration testing". Ends with the required sentence. |
| U1 | L137 | "The syllabus splits this work into two levels <Cite n={1} />." | PASS | The 2.2.1 list has component integration testing and system integration testing. |
| C1 | L65 | "Interfaces between the system under test and outside systems or services." | PASS | No shared run of 8 or more words. Meaning agrees with 2.2.1 ("other systems and external services"). |
| C2 | L141 | Same text as C1 | PASS | Same as C1. |
| C3 | L165 | "System testing looks at how a complete system or product behaves and what it can do" | PASS | No shared run of 8 or more words. Meaning agrees with "the overall behavior and capabilities of an entire system or product" (2.2.1). |
| C4 | L300 | "API testing, examples, functional tests, simulations, user experience prototypes, user story tests" | PASS | No shared run of 8 or more words. All six Q2 items of 5.1.7 are present. |
| C5 | TestQuadrantsDiagram.tsx:60 (figcaption) | "Q2 (business facing, support the team): API testing, user story tests, functional tests, simulations, examples, and user experience prototypes." | PASS | No shared run of 8 or more words in the figcaption. All six Q2 items of 5.1.7 are present, and the viewpoint is correct. The SVG labels still list the items in the syllabus order, but each item is a separate label, not a sentence. |

### New or reworded text in round 2

| # | Line | Text (short) | Cite | Verdict | Evidence or note |
|---|---|---|---|---|---|
| R1 | L56 | "Each level is one instance of the test process." | 1 | PASS | "Each test level is an instance of the test process" (2.2). |
| R2 | L70 | "The syllabus names these attributes, and says the list is not complete." | 1 | PASS | "the following non-exhaustive list of attributes" (2.2.1). |
| R3 | L104 | "It often needs extra help, for example a test harness or a unit test framework" | 1 | PASS | "It often requires specific support, such as test harnesses or unit test frameworks." (2.2.1) |
| R4 | L172 | "best tested on a full system, in a test environment that represents real use" | 1 | PASS | "preferable to test them on a complete system in a representative test environment (e.g., usability)" (2.2.1). "Represents real use" is a fair plain-English reading of "representative". |
| R5 | L194 | "The glossary has no entry for this form." | none | PASS | A "not defined" statement. The full glossary term list (1128 terms) has no "contractual acceptance testing". It has only "contract testing", a different term. |
| R6 | L224 | "A test in a higher layer has a lower granularity and less isolation. It also takes longer to run" | 1 | PASS | "The higher the layer, the lower the test granularity, the lower the test isolation ... and the higher the test execution time." (5.1.6) |
| R7 | L235 | "The original pyramid (2009)" | 1 (L231) | PASS | "the original test pyramid model (Cohn 2009)" (5.1.6). The author name is removed. |
| R8 | L280 (W3) | "the ISTQB syllabus lists only smoke tests there, plus the non-functional tests other than usability tests" | n/a | PASS | "This quadrant contains smoke tests and non-functional tests (except usability tests)." (5.1.7). The conflict is still real and named correctly. Ends with the required sentence. |
| R9 | L288 | "The syllabus credits the testing quadrants to their original author." | 1 (same paragraph) | PASS | "The testing quadrants, defined by Brian Marick (Marick 2003, Crispin 2008)" (5.1.7). The author name is removed. |
| R10 | L288 | "group the test levels with the right work products, test techniques, activities, and test types in Agile development" | 1 | PASS | "group the test levels with the appropriate test types, activities, test techniques and work products in the Agile software development" (5.1.7). Same items, other order. |
| R11 | L302 | "Smoke tests, plus non-functional tests other than usability tests" | 1 | PASS | Same quote as R8. |
| R12 | L310 | "Sanity testing is not an ISTQB term. The ISTQB syllabus and glossary do not define this term." | none | PASS | Same evidence as N1. Uses the exact rule sentence. |

### Round-2 copy check

The script found no shared run of 10 or more words in new prose. The only istqb-block run of 8 or more words is "the next level in some iterative models this" (L84, 8 words, crosses a sentence end): PASS. Runs in the notes blocks are owner text: PASS. The figcaption of `TestQuadrantsDiagram` has no run of 8 or more words.

### Round-2 summary

- All 8 round-1 FAILs are closed.
- 12 new or reworded items: 0 FAIL.
- Copy check: 0 FAIL.

Open FAILs: 0
