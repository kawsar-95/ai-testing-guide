# Fundamentals: Test Types (research notes)

Chapter 4, slug `test-types`. Check date: 2026-10-20. Source of the owner text: `fundamentals-owner-notes.md`, "Software testing classification", "Static testing and Dynamic testing", "Non functional testing".

## Sources

The S-numbers are the numbers of `page.sources` in `content/fundamentals/test-types.mdx`, in order of first cite. The ID in brackets is the ID in `fundamentals-sources.md`, when it has one. Glossary entries were read through `https://api.glossary.istqb.org/v1/terms/<slug>` on 2026-10-20.

| S | Source | URL |
|---|---|---|
| S1 | Certified Tester Foundation Level Syllabus v4.0.1 (sections 2.1.1, 2.2.1, 2.2.2, 2.2.3, 2.3, 3.1, 3.1.1, 3.1.2, 3.1.3, 4.1, 4.4.2, 5.1.3, 5.1.7) [S1] | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf |
| S2 | ISTQB Glossary: manual testing (new, not in the sources file) | https://glossary.istqb.org/en_US/term/manual-testing |
| S3 | ISTQB Glossary: test automation (new) | https://glossary.istqb.org/en_US/term/test-automation |
| S4 | ISTQB Glossary: static testing [S29] | https://glossary.istqb.org/en_US/term/static-testing |
| S5 | ISTQB Glossary: dynamic testing [S30] | https://glossary.istqb.org/en_US/term/dynamic-testing |
| S6 | ISTQB Glossary: functional testing (new) | https://glossary.istqb.org/en_US/term/functional-testing |
| S7 | ISTQB Glossary: smoke testing [S21] | https://glossary.istqb.org/en_US/term/smoke-testing |
| S8 | ISTQB Glossary: confirmation testing [S23] | https://glossary.istqb.org/en_US/term/confirmation-testing |
| S9 | ISTQB Glossary: feature testing (new) | https://glossary.istqb.org/en_US/term/feature-testing |
| S10 | ISTQB Glossary: regression testing [S22] | https://glossary.istqb.org/en_US/term/regression-testing |
| S11 | ISTQB Glossary: exploratory testing [S24] | https://glossary.istqb.org/en_US/term/exploratory-testing |
| S12 | ISTQB Glossary: ad hoc testing [S25] | https://glossary.istqb.org/en_US/term/ad-hoc-testing |
| S13 | ISTQB Glossary: random testing (new) | https://glossary.istqb.org/en_US/term/random-testing |
| S14 | ISTQB Glossary: alpha testing [S26] | https://glossary.istqb.org/en_US/term/alpha-testing |
| S15 | ISTQB Glossary: beta testing [S27] | https://glossary.istqb.org/en_US/term/beta-testing |
| S16 | ISTQB Glossary: A/B testing [S28] | https://glossary.istqb.org/en_US/term/ab-testing |
| S17 | ISTQB Glossary: non-functional testing [S34] | https://glossary.istqb.org/en_US/term/non-functional-testing |
| S18 | ISTQB Glossary: performance testing [S35] | https://glossary.istqb.org/en_US/term/performance-testing |
| S19 | ISTQB Glossary: security testing [S37] | https://glossary.istqb.org/en_US/term/security-testing |
| S20 | ISTQB Glossary: usability testing [S36] | https://glossary.istqb.org/en_US/term/usability-testing |
| S21 | ISTQB Glossary: cross-browser compatibility (new) | https://glossary.istqb.org/en_US/term/cross-browser-compatibility |
| S22 | ISTQB Glossary: cross-device testing (new) | https://glossary.istqb.org/en_US/term/cross-device-testing |

Glossary checks of this chapter (API list of 1128 main entries, 2026-10-20):

| Name | Result |
|---|---|
| sanity testing, monkey testing, gorilla testing, benchmark testing | No main entry, no synonym. Not in the syllabus text (0 hits). |
| feature testing | Defined (v1), but only as an AI term: "A test type to determine if an AI model training dataset contains an appropriate set of features." Not in the syllabus text. |
| random testing | Defined (v1): "A black-box test technique in which input values are randomly generated." Not in the syllabus text. |
| A/B testing, ad hoc testing | Defined. Not in the syllabus text (0 hits). |
| manual testing, test automation | Defined (v1, v3). Both are glossary terms only. |

## Topic 1: Testing Classification

| Claim | Source | Quote |
|---|---|---|
| Test techniques are black-box, white-box, experience-based | S1 4.1 | "test techniques are classified as black-box, white-box, and experience-based" |
| Four test types: functional, non-functional, black-box, white-box | S1 2.2.2 | "the following four test types are addressed" |
| Manual testing is a test activity done manually | S2 | "A test activity performed manually." |
| Test automation converts test activities to automated operation | S3 | "The conversion of test activities to automated operation." |
| Static testing is a test approach with no execution | S4 | "A test approach that does not involve the execution of a test item." |
| Dynamic testing is a test approach with execution | S5 | "A test approach that involves test execution of a test item." |

Tutorial's own (no cite): the three splits look at the same testing; one test can be manual, dynamic, and black-box; the syllabus does not group testing by action (absence claim; the syllabus text has no such grouping).

## Topic 2: Static Testing

| Claim | Source | Quote |
|---|---|---|
| No execution of the test item | S4 | "does not involve the execution of a test item" |
| Examined by manual examination (reviews) or by a tool (static analysis) | S1 3.1 | "evaluated through manual examination (e.g., reviews) or with the help of a tool (e.g., static analysis)" |
| Objectives | S1 3.1 | "improving quality, detecting defects and assessing characteristics like readability, completeness, correctness, testability and consistency" |
| Almost any work product; examples | S1 3.1.1 | "Almost any work product can be examined using static testing." Examples: requirement specifications, source code, test plans, test cases, product backlog items, test charters, project documentation, contracts and models |
| Review: any readable work product; static analysis needs structure | S1 3.1.1 | "Any work product that can be read and understood can be the subject of a review." / "work products need a structure" |
| Finds defects in the earliest phases | S1 3.1.2 | "Static testing can detect defects in the earliest phases of the SDLC" |
| Finds defects dynamic testing cannot (unreachable code, non-executable work products) | S1 3.1.2 | "defects which cannot be detected by dynamic testing (e.g., unreachable code ... defects in non-executable work products)" |
| Reviews cost, but total cost is lower | S1 3.1.2 | "reviews can be costly ... overall project costs are usually much lower than when no reviews are performed" |
| Seven defect areas of the table | S1 3.1.3 | Requirements; design; coding; deviations from standards; incorrect interface specifications; specific security vulnerabilities; gaps in test basis coverage |

Tutorial's own (callout "Advice"): read a new user story before testing and mark unclear or untestable words. It is marked as the tutorial's advice.

## Topic 3: Dynamic Testing

| Claim | Source | Quote |
|---|---|---|
| Dynamic testing runs the test item | S5 | "involves test execution of a test item" |
| It causes failures, then analysis finds the defect | S1 3.1.3 | "dynamic testing causes failures from which the associated defects are determined through subsequent analysis" |
| Static and dynamic complement each other; some defect types only one finds | S1 3.1.3 | "practices complement each other" / "some defect types that can only be found by either static or dynamic testing" |
| Static finds defects directly | S1 3.1.3 | "Static testing finds defects directly" |
| Static works on non-executable work products; dynamic only on executable | S1 3.1.3 | "Static testing can be applied to non-executable work products, while dynamic testing can only be applied to executable work products" |
| Rarely executed or hard-to-reach paths | S1 3.1.3 | "Static testing may more easily detect defects that lay on paths through the code that are rarely executed or hard to reach" |
| Quality characteristics: maintainability vs performance efficiency | S1 3.1.3 | "(e.g., maintainability)" / "(e.g., performance efficiency)" |
| Sequential models: dynamic testing cannot be early | S1 2.1.1 | "typically dynamic testing cannot be performed early in the SDLC" |
| Functional testing: the functions are "what" | S1 2.2.2 | "The functions are 'what' the test object should do." |
| Glossary: functional suitability | S6 | "A test type to determine the functional suitability of a test object." |
| Objectives: completeness, correctness, appropriateness | S1 2.2.2 | "functional completeness, functional correctness and functional appropriateness" |
| Four types apply at all test levels | S1 2.2.2 | "All the four above mentioned test types can be applied to all test levels" |

## Topic 4: Smoke, Sanity and Feature Testing

| Claim | Source | Quote |
|---|---|---|
| Smoke testing is a test type for confidence that a test object is ready | S7 | "A test type to gain sufficient confidence that a test object is ready for planned testing." |
| Syllabus has only "smoke tests": entry criterion example | S1 5.1.3 | "initial quality level of a test object (e.g., all smoke tests have passed)" |
| Smoke tests in Q4 | S1 5.1.7 | "Quadrant Q4 (technology facing, critique the product). This quadrant contains smoke tests and non-functional tests" |
| Sanity testing is not defined | Glossary list; S1 text | 0 hits in the 1128 entries and in the syllabus |
| Confirmation testing (nearest term) | S8 | "performed after fixing a defect to confirm that a failure caused by that defect does not reoccur" |
| Feature testing has an AI meaning in the glossary | S9 | "A test type to determine if an AI model training dataset contains an appropriate set of features." |
| Syllabus does not use "feature testing" | S1 text | 0 hits |
| Nearest term for feature checks: functional testing | S6 | "A test type to determine the functional suitability of a test object." |

Tutorial's own (callouts "The tutorial's own explanation"): the common meaning of sanity testing and feature testing.

## Topic 5: Regression Testing

| Claim | Source | Quote |
|---|---|---|
| Confirms no adverse consequences, including a fix already confirmation tested | S1 2.2.3 | "Regression testing confirms that no adverse consequences have been caused by a change, including a fix that has already been confirmation tested." |
| Glossary: change-related, unchanged areas | S10 | "to detect whether defects have been introduced or uncovered in unchanged areas of the software" |
| Same component, other components, connected systems | S1 2.2.3 | "the same component where the change was made, other components in the same system, or even other connected systems" |
| Related to the environment | S1 2.2.3 | "may not be restricted to the test object itself but can also be related to the environment" |
| Impact analysis first | S1 2.2.3 | "It is advisable first to perform an impact analysis to recognize the extent of the regression testing." |
| Suites run many times and grow; candidate for automation | S1 2.2.3 | "run many times and generally the number of regression test cases will increase with each iteration or release, so regression testing is a strong candidate for automation" |
| CI: include automated regression tests | S1 2.2.3 | "where CI is used ... it is good practice to also include automated regression tests" |
| Needed on all test levels | S1 2.2.3 | "needed on all test levels if defects are fixed and/or changes are made" |
| Confirmation testing confirms the original defect is fixed; tests that failed or new tests | S1 2.2.3 | "confirms that an original defect has been successfully fixed" |
| Maintenance testing: change plus regressions in unchanged parts | S1 2.3 | "checking for possible regressions in parts of the system that remain unchanged (which is usually most of the system)" |

## Topic 6: Exploratory and Ad-hoc Testing

| Claim | Source | Quote |
|---|---|---|
| Designed, executed, evaluated at the same time while learning | S1 4.4.2 | "tests are simultaneously designed, executed, and evaluated while the tester learns about the test object" |
| Glossary: test approach | S11 | "A test approach in which tests are dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results." |
| Three uses | S1 4.4.2 | "learn more about the test object, to explore it more deeply with focused tests, and to create tests for untested areas" |
| Useful with few or inadequate specifications or time pressure | S1 4.4.2 | "few or inadequate specifications or there is significant time pressure" |
| Complements formal techniques | S1 4.4.2 | "useful to complement other more formal test techniques" |
| More effective with experience and domain knowledge | S1 4.4.2 | "more effective if the tester is experienced, has domain knowledge" |
| Can use other techniques, e.g. EP | S1 4.4.2 | "can incorporate the use of other test techniques (e.g., equivalence partitioning)" |
| Session-based: time box, charter, debriefing | S1 4.4.2 | "within a defined time box ... test charter ... followed by a debriefing" |
| Ad hoc testing: informal, no test analysis and design | S12 | "Informal testing performed without test analysis and test design." |
| Syllabus does not use "ad hoc testing" | S1 text | 0 hits |

## Topic 7: Monkey and Gorilla Testing

| Claim | Source | Quote |
|---|---|---|
| Monkey testing is not defined | Glossary list; S1 text | 0 hits for "monkey" |
| Gorilla testing is not defined | Glossary list; S1 text | 0 hits for "gorilla" |
| Related term: random testing | S13 | "A black-box test technique in which input values are randomly generated." |

Tutorial's own (callouts): the common meanings of monkey and gorilla testing, and the note that the meaning differs between teams.

## Topic 8: Alpha, Beta and A/B Testing

| Claim | Source | Quote |
|---|---|---|
| Forms of acceptance testing | S1 2.2.1 | "The main forms of acceptance testing are: user acceptance testing (UAT), operational acceptance testing, contractual acceptance testing and regulatory acceptance testing, alpha testing and beta testing." |
| Acceptance: validation, readiness for deployment, ideally by intended users | S1 2.2.1 | "focuses on validation and on demonstrating readiness for deployment" / "Ideally, acceptance testing should be performed by the intended users." |
| Alpha: developer's test environment, roles outside the development organization | S14 | "A type of acceptance testing performed in the developer's test environment by roles outside the development organization." |
| Beta: external site, roles outside the development organization | S15 | "A type of acceptance testing performed at an external site to the developer's test environment by roles outside the development organization." |
| A/B testing: test approach, statistical comparison | S16 | "A test approach in which two variants of a test object are statistically evaluated to determine which performs better for specified characteristics." |
| Syllabus does not mention A/B testing | S1 text | 0 hits |

Tutorial's own (callout "Example"): the sign-up button example.

## Topic 9: Non-Functional Testing

| Claim | Source | Quote |
|---|---|---|
| Attributes other than functional; "how well the system behaves" | S1 2.2.2 | "Non-functional testing is the testing of 'how well the system behaves'." |
| Glossary: compliance with non-functional requirements | S17 | "A test type to evaluate that a component or system complies with non-functional requirements." |
| ISO/IEC 25010 list of eight characteristics (with the two alternative names) | S1 2.2.2 | "Performance efficiency, Compatibility, Usability (also known as interaction capability), Reliability, Security, Maintainability, Portability (also known as flexibility), Safety" |
| Can start early | S1 2.2.2 | "sometimes appropriate for non-functional testing to start early in the SDLC" |
| Many derived from functional tests; time constraint | S1 2.2.2 | "Many non-functional tests are derived from functional tests ... checking that a function performs within a specified time" |
| Late discovery is a serious threat | S1 2.2.2 | "The late discovery of non-functional defects can pose a serious threat to the success of a project." |
| Specific environment, usability lab | S1 2.2.2 | "a very specific test environment, such as a usability lab for usability testing" |
| Performance testing | S18 | "A test type to determine the performance efficiency of a component or system." |
| Security testing | S19 | "A test type to determine the security of a component or system." |
| Usability testing | S20 | "Testing to evaluate the degree to which the system can be used by specified users with effectiveness, efficiency and satisfaction in a specified context of use." |
| Cross-browser compatibility | S21 | "The degree to which a website or web application can function across different browsers and degrade gracefully..." |
| Cross-device testing | S22 | "A test type to determine whether a component or system performs correctly across its intended range of devices." |
| Benchmark testing is not defined | Glossary list; S1 text | 0 hits |

Tutorial's own (callout): common meaning of benchmark testing; cross-browser and cross-device testing fit the compatibility characteristic (the tutorial's mapping, not an ISTQB statement).

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "2 types of dynamic testing: Functional, Non-Functional" and the "Functional Testing" list that has sanity, smoke, exploratory, monkey, alpha, beta, A/B | S1 2.2.2: "the following four test types are addressed" (functional, non-functional, black-box, white-box). S1 2.2.1: alpha and beta are forms of acceptance testing. | Yes (Dynamic Testing, notes) |
| Alpha testing: "The company's QA team and internal employees test" | S14: "performed in the developer's test environment by roles outside the development organization" | Yes (Alpha, Beta and A/B Testing, notes). A judgement: the notes also say "internal", and internal staff outside the development team can be "outside the development organization". |
| Sanity, monkey, gorilla, and benchmark testing | Not defined in the glossary or the syllabus | No. This is not a conflict. The istqb block says so and gives the common meaning. |
| "Feature testing" | S9: defined only as an AI term, with a different meaning | No. Not a conflict with the owner's wording. The istqb block explains the difference. |
| The "Based on action" split (manual, automated) in the classification image | The syllabus has no such split. The glossary has "manual testing" and "test automation" as terms. | No. Not a conflict. The istqb block says it is not an ISTQB split. |
| Smoke testing in "Functional Testing" | S7: the glossary calls smoke testing a "test type" | No |

## Fix round 1 (after the fact-check of 7e6f1f6)

| Change | Reason |
|---|---|
| Static Testing: "A tool can also help to examine work products." and "The objectives ... include ..." | S1 3.1: "with the help of a tool"; "Test objectives include ..." (open list) |
| Dynamic Testing: "Analysis of each failure then finds the defect behind it." | S1 3.1.3 names no role for the analysis |
| Dynamic Testing: "It checks the functions that the component or system must have. The functions describe what the test object should do." | S1 2.2.2 says "should do"; the old text copied a 10-word run |
| Regression: "This makes regression testing a good candidate for automation." | The old text copied a 14-word run from S1 2.2.3 |
| Exploratory: "A debriefing usually follows the session." | S1 4.4.2: "usually followed by a debriefing" |
| Alpha, Beta: "The other main forms are ..." | S1 2.2.1: "The main forms of acceptance testing are ..." |
| Absence claims (feature testing, ad hoc testing, A/B testing) now have Cite 1 | The syllabus text has 0 hits for each name |
| "In this tutorial's view, the nearest ISTQB term is ..." (confirmation testing, functional testing) and a table column "Nearest ISTQB term (the tutorial's view)" | The nearest term is a judgement, not an ISTQB statement |
| Smoke row of the table: "Smoke testing itself" | The glossary defines the term |
| Callout under the diagram: only "One test can be manual, dynamic, and black-box at the same time." | The sentences about glossary terms were false: the syllabus uses "manual testing" and "test automation" |
| Compatibility callout: teams call it compatibility testing; in ISO/IEC 25010 terms it can also touch portability | Review finding M2 |
| Monkey callout: "In ISTQB random testing, the input values are randomly generated." | Review finding M3 |

Conflicts (notes blocks) now: W1a (Dynamic Testing): the notes split dynamic testing into two types, but ISTQB lists functional and non-functional testing as two of four test types (S1 2.2.2, "A lot of test types exist ... the following four test types are addressed"). W1b (Alpha, Beta and A/B): the notes list alpha and beta testing under functional testing, but S1 2.2.1 names them as forms of acceptance testing, which is a test level. W2 (alpha, company QA team): unchanged.

Copy scan against `ctfl-v4.0.1.txt` (runs of 9 or more words in the istqb blocks): the only runs left are two lists of names (work products, acceptance forms).
