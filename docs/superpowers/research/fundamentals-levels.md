# Research notes: chapter 5 `levels` (Test Levels, Pyramid and Quadrants)

Check date: 2026-10-20. Quotes are short. Syllabus text: `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`. Glossary text: `https://api.glossary.istqb.org/v1/terms/<slug>` with `Accept-Language: en_US`.

## Sources (numbers as in `page.sources`, in order of first cite)

| # | Source | URL | Used for |
|---|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 (sections 2.1.2, 2.2, 2.2.1, 2.2.2, 5.1.6, 5.1.7) | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | all topics |
| 2 | Glossary: test level (v2) | https://glossary.istqb.org/en_US/term/test-level | Test Levels |
| 3 | Glossary: component testing (v3) | https://glossary.istqb.org/en_US/term/component-testing | Component Testing |
| 4 | Glossary: unit testing (v1) | https://glossary.istqb.org/en_US/term/unit-testing | Component Testing |
| 5 | Glossary: integration testing (v2) | https://glossary.istqb.org/en_US/term/integration-testing | Integration Testing |
| 6 | Glossary: component integration testing (v3) | https://glossary.istqb.org/en_US/term/component-integration-testing | Integration Testing |
| 7 | Glossary: system integration testing (v4) | https://glossary.istqb.org/en_US/term/system-integration-testing | Integration Testing |
| 8 | Glossary: system testing (v2) | https://glossary.istqb.org/en_US/term/system-testing | System Testing |
| 9 | Glossary: acceptance testing (v2) | https://glossary.istqb.org/en_US/term/acceptance-testing | Acceptance Testing |
| 10 | Glossary: user acceptance testing (v4) | https://glossary.istqb.org/en_US/term/user-acceptance-testing | Acceptance Testing |
| 11 | Glossary: operational acceptance testing (v3) | https://glossary.istqb.org/en_US/term/operational-acceptance-testing | Acceptance Testing |
| 12 | Glossary: regulatory acceptance testing (v3) | https://glossary.istqb.org/en_US/term/regulatory-acceptance-testing | Acceptance Testing |
| 13 | Glossary: alpha testing (v3) | https://glossary.istqb.org/en_US/term/alpha-testing | Acceptance Testing |
| 14 | Glossary: beta testing (v3) | https://glossary.istqb.org/en_US/term/beta-testing | Acceptance Testing |
| 15 | Glossary: test pyramid (v1) | https://glossary.istqb.org/en_US/term/test-pyramid | The Test Pyramid |
| 16 | Glossary: testing quadrants (v1) | https://glossary.istqb.org/en_US/term/testing-quadrants | The Test Quadrants |
| 17 | Glossary: smoke testing (v1) | https://glossary.istqb.org/en_US/term/smoke-testing | The Test Quadrants |

Checked: the glossary has no entry for "contractual acceptance testing" (only "contract testing", a different term). So the page names the form with the syllabus cite only.

## Test Levels

| Claim | Source | Quote |
|---|---|---|
| The syllabus describes five test levels | S1 2.2.1 | "the following five test levels are described" |
| Test level = instance of the test process at a phase of development, from components to systems | S1 2.2 | "Each test level is an instance of the test process" |
| Glossary: a test level is a specific instantiation of a test process | S2 | "A specific instantiation of a test process." |
| Levels: component, component integration, system, system integration, acceptance, with the focus of each | S1 2.2.1 | "Component testing (also known as unit testing) focuses on testing components in isolation." |
| Levels differ by test object, test objectives, test basis, defects and failures, approach and responsibilities; the list is non-exhaustive | S1 2.2.1 | "Test levels are distinguished by the following non-exhaustive list of attributes" |
| Different levels have different objectives, so testing is appropriately comprehensive (the page says "as fully as needed") and avoids redundancy | S1 2.1.2 | "Different test levels ... have specific and different test objectives" |
| In sequential models the exit criteria of one level are often entry criteria of the next; not in some iterative models; levels may overlap | S1 2.2 | "Test levels may overlap in time." |
| The four test types can be applied at all levels, with a different focus | S1 2.2.2 | "can be applied to all test levels, although the focus will be different at each level" |

## Component Testing

| Claim | Source | Quote |
|---|---|---|
| Focus: components in isolation; also called unit testing | S1 2.2.1 | "focuses on testing components in isolation" |
| Often needs test harnesses or unit test frameworks | S1 2.2.1 | "specific support, such as test harnesses or unit test frameworks" |
| Normally done by developers in their development environments | S1 2.2.1 | "normally performed by developers in their development environments" |
| Glossary: component testing focuses on individual hardware or software components | S3 | "A test level that focuses on individual hardware or software components." |
| Glossary: unit testing focuses on the smallest part of code that can be tested in isolation | S4 | "the smallest part of code testable in isolation" |
| Non-functional testing can start early, for example in component testing | S1 2.2.2 | "as part of reviews or component testing" |
| Q1 component tests should be automated and in the CI process | S1 5.1.7 | "These tests should be automated and included in the CI process." |

## Integration Testing

| Claim | Source | Quote |
|---|---|---|
| Glossary: integration testing focuses on interactions between components or systems | S5 | "A test level that focuses on interactions between components or systems." |
| Syllabus splits it into two levels | S1 2.2.1 | five levels list: component integration and system integration (cite added in fix round 1) |
| Component integration: interfaces and interactions between components; also called unit integration testing | S1 2.2.1 | "focuses on testing the interfaces and interactions between components" |
| It depends on the integration strategy: bottom-up, top-down, big-bang | S1 2.2.1 | "heavily dependent on the integration strategy like bottom-up, top-down or big-bang" |
| Glossary: component integration testing is the integration testing of components (synonym: module integration testing) | S6 | "The integration testing of components." |
| System integration: interfaces of the system under test and other systems and external services | S1 2.2.1 | "testing the interfaces of the system under test and other systems and external services" |
| It needs test environments similar to the operational environment | S1 2.2.1 | "suitable test environments preferably similar to the operational environment" |
| Glossary: system integration testing focuses on the integration of systems | S7 | "A test level that focuses on the integration of systems." |
| Q1 contains component integration tests | S1 5.1.7 | "This quadrant contains component tests and component integration tests." |

## System Testing

| Claim | Source | Quote |
|---|---|---|
| Focus: overall behavior and capabilities of an entire system or product | S1 2.2.1 | "overall behavior and capabilities of an entire system or product" |
| Often includes functional end-to-end tasks and non-functional testing | S1 2.2.1 | "often including functional testing of end-to-end tasks and the non-functional testing" |
| Some non-functional characteristics (for example usability) are best tested on a complete system in a representative environment; simulations of subsystems are possible | S1 2.2.1 | "preferable to test them on a complete system in a representative test environment" |
| May be done by an independent test team; related to system specifications | S1 2.2.1 | "may be performed by an independent test team" |
| Glossary: verifies that a system as a whole meets specified requirements | S8 | "verifying that a system as a whole meets specified requirements" |

## Acceptance Testing

| Claim | Source | Quote |
|---|---|---|
| Focus: validation and readiness for deployment: the system fulfills the user's business needs | S1 2.2.1 | "focuses on validation and on demonstrating readiness for deployment" |
| Ideally done by the intended users | S1 2.2.1 | "should be performed by the intended users" |
| Main forms: UAT, operational, contractual, regulatory, alpha, beta | S1 2.2.1 | "user acceptance testing (UAT), operational acceptance testing, contractual acceptance testing and regulatory acceptance testing, alpha testing and beta testing" |
| Glossary: acceptance testing determines whether to accept the system | S9 | "determining whether to accept the system" |
| UAT: determines if intended users accept the system | S10 | "determine if intended users accept the system" |
| Operational: determines whether the organization that operates the system can accept it | S11 | "whether the organization responsible for operating the system can accept it" |
| Regulatory: determines the compliance of a test object | S12 | "determine the compliance of a test object" |
| Alpha: in the developer's test environment, by roles outside the development organization | S13 | "performed in the developer's test environment by roles outside the development organization" |
| Beta: at an external site, by roles outside the development organization | S14 | "performed at an external site to the developer's test environment" |
| Q3 includes user acceptance testing | S1 5.1.7 | "exploratory testing, usability testing, user acceptance testing" |

## The Test Pyramid

| Claim | Source | Quote |
|---|---|---|
| The pyramid shows that tests have different granularity; it supports test automation and effort allocation | S1 5.1.6 | "different tests may have different granularity" |
| Layers are groups of tests | S1 5.1.6 | "The pyramid layers represent groups of tests." |
| Higher layer: lower granularity, lower isolation, longer execution time | S1 5.1.6 | "The higher the layer, the lower the test granularity, the lower the test isolation" |
| Bottom layer: small, isolated, fast; many tests | S1 5.1.6 | "small, isolated, fast, and check a small piece of functionality" |
| Top layer: complex, end-to-end, slower; few tests | S1 5.1.6 | "just a few of them are needed" |
| Number and names of layers differ; original model: unit, service, UI | S1 5.1.6 | "unit tests", "service tests" and "UI tests" |
| Another model: unit (component), integration (component integration), end-to-end; other test levels can be used | S1 5.1.6 | "Another popular model defines unit (component) tests, integration (component integration) tests, and end-to-end tests." |
| Glossary: a model of the amount of testing per level, more at the bottom | S15 | "with more at the bottom than at the top" |

## The Test Quadrants

| Claim | Source | Quote |
|---|---|---|
| Credited to an original author; group the test levels with test types, activities, techniques, work products in Agile | S1 5.1.7 | "group the test levels with the appropriate test types, activities, test techniques and work products" |
| The model helps ensure all appropriate test types and levels are in the SDLC | S1 5.1.7 | "to ensure that all appropriate test types and test levels are included in the SDLC" |
| It helps describe test types to all stakeholders | S1 5.1.7 | "differentiate and describe the test types to all stakeholders" |
| Two axes: business facing or technology facing; support the team or critique the product | S1 5.1.7 | "business facing or technology facing ... support the team ... or critique the product" |
| Glossary: a classification model in four quadrants along these two dimensions | S16 | "supporting the product team versus critiquing the product, and technology-facing versus business-facing" |
| Q1 technology facing, support the team: component and component integration tests; automated; in CI | S1 5.1.7 | "These tests should be automated and included in the CI process." |
| Q2 business facing, support the team: functional tests, examples, user story tests, UX prototypes, API testing, simulations; check acceptance criteria; manual or automated | S1 5.1.7 | "These tests check the acceptance criteria and can be manual or automated." |
| Q3 business facing, critique the product: exploratory, usability, user acceptance testing; user-oriented; often manual | S1 5.1.7 | "These tests are user-oriented and often manual." |
| Q4 technology facing, critique the product: smoke tests and non-functional tests except usability; often automated | S1 5.1.7 | "contains smoke tests and non-functional tests (except usability tests)" |
| Glossary: smoke testing gives enough confidence that a test object is ready for planned testing | S17 | "sufficient confidence that a test object is ready for planned testing" |
| The syllabus and glossary do not define "sanity testing" | sources file, "not defined" list | not a main glossary entry; no hit in the syllabus text |

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "There are mainly 4 types of Test level" (unit, integration, system, acceptance) | S1 2.2.1: "the following five test levels are described" | yes |
| System integration testing is "interactions and interfaces between different systems or modules" | S1 2.2.1: focuses on the interfaces of the system under test and other systems and external services (the syllabus does not mention modules); S6: module integration testing is a synonym of component integration testing | yes |
| Q4 "Contains: Smoke tests, sanity test, regression test, system testing, non-functional tests (excluding usability tests)" | S1 5.1.7: "contains smoke tests and non-functional tests (except usability tests)" | yes |
| Test level "means a specific stage of testing in the SDLC" | S2: "A specific instantiation of a test process."; S1 2.2: levels may overlap in time | no (close to the glossary; "stage" is a glossary synonym) |
| Acceptance testing is "the final testing phase" | S1 2.2: "Test levels may overlap in time." | no (the usual order; not a definition conflict) |
| Pyramid and Q1 to Q3 text | S1 5.1.6, 5.1.7 | no conflict |

## Fix round 1 (2026-10-20)

The page was reworded after the fact-check: no run of 9 or more words is copied from the syllabus (checked with a script over the istqb blocks and the warning callouts). Names of real people (the quadrant author, the pyramid author) are not on the page. The quadrant Q2 items are listed in a different order from the syllabus. "Sanity testing" has the standard "do not define this term" sentence.
