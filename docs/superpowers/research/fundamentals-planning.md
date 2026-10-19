# Fundamentals: Planning and Estimation (research notes)

Check date: 2026-10-20. S-numbers here are the order of `page.sources` of `content/fundamentals/planning.mdx` (the cite number `n`). The global S-numbers of `fundamentals-sources.md` are in the last column.

## Sources

| S | Title | URL | Global S |
|---|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 (sections 4.5.2, 5.1.1, 5.1.2, 5.1.4, 5.2, and the context list of 1.4.2) | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | S1 |
| 2 | ISTQB Glossary: test plan | https://glossary.istqb.org/en_US/term/test-plan | S59 |
| 3 | ISTQB Glossary: test strategy | https://glossary.istqb.org/en_US/term/test-strategy | S60 |
| 4 | ISTQB Glossary: organizational test strategy | https://glossary.istqb.org/en_US/term/organizational-test-strategy | S61 |
| 5 | ISTQB Glossary: test approach | https://glossary.istqb.org/en_US/term/test-approach | S62 |
| 6 | ISTQB Glossary: test estimation | https://glossary.istqb.org/en_US/term/test-estimation | S63 |
| 7 | ISTQB Glossary: Wideband Delphi | https://glossary.istqb.org/en_US/term/wideband-delphi | S64 |
| 8 | ISTQB Glossary: Three-point estimation | https://glossary.istqb.org/en_US/term/three-point-estimation | S65 |
| 9 | ISTQB Glossary: acceptance criteria | https://glossary.istqb.org/en_US/term/acceptance-criteria | S66 |

The glossary quotes were read from `https://api.glossary.istqb.org/v1/terms/<slug>` (header `Accept-Language: en_US`) on 2026-10-20. The syllabus text is `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`.

## Topic: Test Plan

| Claim | Source | Quote |
|---|---|---|
| A test plan describes objectives, resources, and processes of a test project | S1, 5.1.1 | "A test plan describes the test objectives, resources and processes for a test project." |
| Glossary definition of test plan | S2 | "Documentation that describes test objectives, means and schedule for achieving test coordination." |
| Purposes: documents means and schedule; helps keep to the established criteria; communication; shows adherence to test policy and test strategy or explains the deviation | S1, 5.1.1 | "Demonstrates that testing will adhere to the existing test policy and test strategy (or explains why the testing will deviate from them)" |
| Planning makes the tester think about risks, schedules, people, tools, costs, effort | S1, 5.1.1 | "forces the testers to confront the future challenges related to risks, schedules, people, tools, costs, effort, etc." |
| Typical content has seven items: context, assumptions and constraints, stakeholders, communication, risk register, test approach, budget and schedule | S1, 5.1.1 | "The typical content of a test plan includes:" (list of seven items) |
| Examples under context: scope, objectives, test basis | S1, 5.1.1 | "Context of testing (e.g., test scope, test objectives, test basis)" |
| Examples under stakeholders: roles, responsibilities, relevance, hiring, training | S1, 5.1.1 | "Stakeholders (e.g., roles, responsibilities, relevance to testing, hiring and training needs)" |
| Examples under communication: forms, frequency, templates | S1, 5.1.1 | "Communication (e.g., forms and frequency of communication, documentation templates)" |
| Examples under risk register: product risks, project risks | S1, 5.1.1 | "Risk register (e.g., product risks, project risks)" |
| Examples under test approach: levels, types, techniques, deliverables, entry and exit criteria, independence, metrics, test data, environment, deviations | S1, 5.1.1 | "Test approach (e.g., test levels, test types, test techniques, test deliverables, entry criteria and exit criteria, independence of testing, metrics to be collected" |
| More detail is in ISO/IEC/IEEE 29119-3 | S1, 5.1.1 | "More details about the test plan and its content can be found in the ISO/IEC/IEEE 29119-3 standard." |
| Release planning: testers write testable stories and acceptance criteria, join risk analysis, estimate test effort, decide the approach | S1, 5.1.2 | "Testers involved in release planning participate in writing testable user stories and acceptance criteria" |
| Release planning is the basis of the test approach and test plan for all iterations | S1, 5.1.2 | "It also serves as the basis for the test approach and test plan across all iterations." |
| Iteration planning: testers analyse risks of stories, check testability, break stories into tasks, estimate the effort | S1, 5.1.2 | "estimate test effort for all testing tasks" |

## Topic: Test Strategy

| Claim | Source | Quote |
|---|---|---|
| Glossary definition of test strategy | S3 | "A description of how to perform testing to reach test objectives under given circumstances." |
| The syllabus uses the term and does not define it | S1 (whole text) | Hits for "test strategy": 5.1.1 (plan adheres to it), the context factors of 1.4.2, and the keyword list. No definition sentence. |
| Context factors affect the test strategy | S1, 1.4.2 | "These factors will have an impact on many test-related issues, including: test strategy" |
| Organizational test strategy: generic requirements and how to test in an organization | S4 | "A strategy that describes the generic requirements for testing and how to perform testing within an organization." |
| Glossary definition of test approach | S5 | "The manner of implementing test tasks." |
| The test approach is a part of the test plan | S1, 5.1.1 | "Test approach (e.g., test levels, test types, test techniques" |
| Risk-based testing is a test approach | S1, 5.2 | "The test approach, in which test activities are selected, prioritized, and managed based on risk analysis and risk control, is called risk-based testing." |

## Topic: Test Plan vs Test Strategy

| Claim | Source | Quote |
|---|---|---|
| A test plan is for one test project | S1, 5.1.1 | "A test plan describes the test objectives, resources and processes for a test project." |
| The plan follows the policy and strategy or explains why not | S1, 5.1.1 | see Test Plan |
| The plan has a "deviations from the test policy and test strategy" item inside the test approach | S1, 5.1.1 | "deviations from the test policy and test strategy" |
| Strategy has no project limit in the glossary; the organization-wide meaning is a separate term | S3, S4 | S3 "under given circumstances"; S4 "within an organization" |
| Release planning is the basis of the approach and the plan | S1, 5.1.2 | see Test Plan |
| CTFL v4 uses "test approach" for the project-level choices | S1, 5.1.1; S5 | see Test Strategy |

## Topic: Test Effort Estimation

| Claim | Source | Quote |
|---|---|---|
| Test effort estimation predicts the amount of test work needed for the objectives | S1, 5.1.4 | "Test effort estimation involves predicting the amount of test-related work needed to meet the test objectives of a test project." |
| Glossary definition of test estimation | S6 | "An approximation related to various aspects of testing." |
| The estimate rests on assumptions and always has error | S1, 5.1.4 | "the estimate is based on a number of assumptions and is always subject to estimation error" |
| Small tasks are estimated better; split large tasks | S1, 5.1.4 | "Estimation for small tasks is usually more accurate than for the large ones." |
| The syllabus describes four techniques | S1, 5.1.4 | "the following four estimation techniques are described" |
| Ratios: metrics-based, uses figures of past projects, the own ratios of the organization are best | S1, 5.1.4 | "The ratios of an organization's own projects (e.g., taken from historical data) are generally the best source" |
| Ratio example: 3:2 and 600 person-days give 400 | S1, 5.1.4 | "development-to-test effort ratio was 3:2 ... 600 person-days ... 400 person-days" |
| Extrapolation: metrics-based, early measurements, approximate the remaining effort, often with a mathematical model | S1, 5.1.4 | "the effort required for the remaining work can be approximated by extrapolating this data (usually by applying a mathematical model)" |
| Extrapolation suits iterative life cycles; example: average of the last three iterations | S1, 5.1.4 | "averaged effort from the last three iterations" |
| Wideband Delphi: iterative, expert-based; each expert estimates alone | S1, 5.1.4 | "Each expert, in isolation, estimates the effort." |
| Wideband Delphi: if an estimate is out of the agreed range, the experts discuss, then estimate again alone; repeat until consensus | S1, 5.1.4 | "This process is repeated until a consensus is reached." |
| Planning Poker is a variant of Wideband Delphi, used in Agile, with number cards | S1, 5.1.4 | "Planning Poker is a variant of Wideband Delphi" |
| Glossary: Wideband Delphi | S7 | "An expert-based test estimation technique that aims at making an accurate estimation using the collective wisdom of the team members." |
| Three-point: experts give a (most optimistic), m (most likely), b (most pessimistic); E is the weighted arithmetic mean | S1, 5.1.4; S8 | "The final estimate (E) is their weighted arithmetic mean." |
| Formula E = (a + 4*m + b) / 6 (the most popular version) | S1, 5.1.4 | "the estimate is calculated as E = (a + 4*m + b) / 6" |
| Error: SD = (b - a) / 6 | S1, 5.1.4 | "SD = (b – a) / 6" |
| Syllabus example: a=6, m=9, b=18 gives 10 +/- 2 person-hours | S1, 5.1.4 | "E = (6 + 4*9 + 18) / 6 = 10 and SD = (18 – 6) / 6 = 2" |

Worked numbers checked on 2026-10-20 (all agree with the notes):

| Check | Arithmetic | Result |
|---|---|---|
| Ratio 3:2, dev 600 | 600 / 3 = 200 per part; 200 x 2 | 400 person-days. Same as the notes and the syllabus. |
| Extrapolation, 5 features in 10 days | 10 / 5 = 2 days per feature; 2 x 20 | 40 days. Same as the notes. A straight-line model. |
| Three-point, a=2, m=4, b=8 | (2 + 4x4 + 8) / 6 = 26 / 6 | E = 4.33 days. The notes say 4.3. Correct. |
| Three-point SD of the same numbers | (8 - 2) / 6 | SD = 1 day. So 4.33 +/- 1, about 3.3 to 5.3 days. The notes' "around 4 to 5 days" is a rounded range. Not a conflict. |
| Syllabus example | (6 + 4x9 + 18) / 6 = 60 / 6; (18 - 6) / 6 | E = 10, SD = 2. Same as the syllabus. |
| Averaging example (tutorial's own numbers 8, 10, 12) | (8 + 10 + 12) / 3 | 10 person-days |

## Topic: Acceptance Criteria

| Claim | Source | Quote |
|---|---|---|
| Acceptance criteria of a story are the conditions that the implementation must meet to be accepted by stakeholders | S1, 4.5.2 | "Acceptance criteria for a user story are the conditions that an implementation of the user story must meet to be accepted by stakeholders." |
| Glossary definition | S9 | "The criteria that a work product must satisfy to be accepted by the stakeholders." |
| They can be viewed as test conditions; they usually come from the Conversation | S1, 4.5.2 | "acceptance criteria may be viewed as the test conditions that should be exercised by the tests" |
| Uses: define scope; reach consensus; positive and negative scenarios; basis of acceptance testing; accurate planning and estimation | S1, 4.5.2 | "Allow accurate planning and estimation" |
| Two most common formats: scenario-oriented (Given/When/Then, from BDD) and rule-oriented (bullet list or input-output table) | S1, 4.5.2 | "The two most common formats are: Scenario-oriented ... Rule-oriented" |
| A custom format is allowed if well-defined and unambiguous | S1, 4.5.2 | "the team may use another, custom format, as long as the acceptance criteria are well-defined and unambiguous" |

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| Test Plan vs Test Strategy, row Scope (the notes' table): a test strategy "has a broader scope, covering testing across various projects or products" (and "a high-level document ... for multiple testing projects within an organization") | S3: "A description of how to perform testing to reach test objectives under given circumstances." S4: "within an organization" is in the separate term "organizational test strategy". | Yes (one warning, after the table) |
| Acceptance Criteria: "2 ways can be written: 1. Scenario oriented 2. Rule oriented" | S1, 4.5.2: "The two most common formats" and "the team may use another, custom format" | Yes |
| Wideband Delphi: "they discuss differences and agree on a final estimate" | S1, 5.1.4: the discussion and new individual estimates repeat until consensus. The notes leave out the repeat. | No. An omission, not a conflict. The ISTQB block gives the full process. |
| Three-point: "around 4 to 5 days" | 26 / 6 = 4.33, SD = 1 | No. A rounded range. |
| Test Plan vs Test Strategy, row Level of Detail: the plan "includes specifics about test cases" | S1, 5.1.1 lists no test cases in the typical plan content; it lists "test deliverables" | No. The list is "typical content", not a closed list. |
| Test Plan vs Test Strategy, row Change Frequency | No ISTQB statement | No. Neither source speaks about change frequency. |
| Test Planning: "Resource, Budget, and Schedule" | S1: "Budget and schedule" | No. The notes add resources and tools as examples. |

## Fix round 1 (2026-10-20)

Changes after the fact-check and the review of commit a7db0ed. The claims tables above stay valid except where this section says otherwise.

| Item | Change | Source check |
|---|---|---|
| Test Plan purposes, bullet 2 | "helps to make sure that the test activities meet the agreed criteria" (was "show") | S1 5.1.1: "Helps to ensure that the performed test activities will meet the established criteria" |
| Test Plan content table | "Assumptions and constraints" and "Budget and schedule" now say "No examples in the syllabus" | S1 5.1.1 gives "e.g." lists for the other five parts only |
| Test Strategy, risk-based testing | "One example in the syllabus is risk-based testing." | S1 5.2; the syllabus also names collaboration-based test approaches (4.5) |
| Plan vs Strategy, intro | Added cite: "ISTQB v4 uses the terms test plan, test strategy, and test approach." | S1: all three are chapter 5 keywords and appear in 5.1.1 |
| Plan vs Strategy, "fit together" bullet 1 | "The strategy is a description of how to test." with cite | S3: "A description of how to perform testing to reach test objectives under given circumstances." |
| Plan vs Strategy, Content row | The glossary text is now tied to the organizational test strategy | S4 |
| Estimation, general points | "Two points apply to every estimate" (assumptions, error). Splitting a large task is now a separate sentence with "can be split" and a cite | S1 5.1.4: "it can be decomposed into a set of smaller tasks" |
| Estimation, ratios | "The organization's own ratios are usually the best source." | S1 5.1.4 (wording only) |
| Three-point | "E is the weighted average of the three values." The text no longer expands "SD". It says the syllabus "calls it SD". | S1 5.1.4: "SD = (b - a) / 6"; S8 has no SD |
| Acceptance criteria definition | "The implementation must meet them before the stakeholders accept it." | S1 4.5.2: "must meet to be accepted by stakeholders" (a necessary condition) |
| Acceptance criteria, test conditions | "can be seen as test conditions that the tests should exercise" | S1 4.5.2: "may be viewed as the test conditions that should be exercised" |
| Acceptance criteria uses | Reworded: "Set the scope", "Help the stakeholders to agree", "Show positive and negative scenarios" (no 10-word run) | S1 4.5.2 |
| Shipping-fee example (tutorial's own, istqb block) | The ranges no longer overlap: "More than 0.00 and less than 50.00", "50.00 or more", "0.00" | Own example, no source |
| Warning callout, Plan vs Strategy | "The notes' table says a test strategy covers many projects, but ..." (the owner's Test Strategy topic says "a project, product, or organization") | Conflict with S3 and S4 stays real for the table |
| Test Strategy callout | The long sentence is split (25 words or fewer) | n/a |
