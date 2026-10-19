# Fundamentals: Test Cases, Bugs and Completion (research notes)

Chapter: `content/fundamentals/test-cases-bugs.mdx`. Check date: 2026-10-20.
Syllabus text read: `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`, sections 1.4.1, 1.4.3, 1.4.4, 5.1.3, 5.3.2, 5.5. Glossary terms were read from the entries listed in `fundamentals-sources.md`.

## Sources (numbers as in `page.sources`)

| N | Source | URL | Master ID in `fundamentals-sources.md` |
|---|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | S1 |
| 2 | ISTQB Glossary: test case | https://glossary.istqb.org/en_US/term/test-case | S67 |
| 3 | ISTQB Glossary: test log | https://glossary.istqb.org/en_US/term/test-log | S92 |
| 4 | ISTQB Glossary: anomaly | https://glossary.istqb.org/en_US/term/anomaly | S75 |
| 5 | ISTQB Glossary: defect report | https://glossary.istqb.org/en_US/term/defect-report | S72 |
| 6 | ISTQB Glossary: defect management | https://glossary.istqb.org/en_US/term/defect-management | S73 |
| 7 | ISTQB Glossary: severity | https://glossary.istqb.org/en_US/term/severity | S76 |
| 8 | ISTQB Glossary: priority | https://glossary.istqb.org/en_US/term/priority | S77 |
| 9 | ISTQB Glossary: defect workflow | https://glossary.istqb.org/en_US/term/defect-workflow | S74 |
| 10 | ISTQB Glossary: confirmation testing | https://glossary.istqb.org/en_US/term/confirmation-testing | S23 |
| 11 | ISTQB Glossary: entry criteria | https://glossary.istqb.org/en_US/term/entry-criteria | S78 |
| 12 | ISTQB Glossary: exit criteria | https://glossary.istqb.org/en_US/term/exit-criteria | S79 |
| 13 | ISTQB Glossary: test completion | https://glossary.istqb.org/en_US/term/test-completion | S87 |
| 14 | ISTQB Glossary: test completion report | https://glossary.istqb.org/en_US/term/test-completion-report | S88 |
| 15 | ISTQB Glossary: traceability | https://glossary.istqb.org/en_US/term/traceability | S89 |
| 16 | ISTQB Glossary: traceability matrix | https://glossary.istqb.org/en_US/term/traceability-matrix | S90 |

## Test Case

| Claim | Source | Quote |
|---|---|---|
| Glossary definition of a test case | 2 | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." |
| Test design makes test cases from test conditions; a test case is testware (the page no longer calls it a "specification": no source says so) | 1 (1.4.1, 1.4.3) | "Test design includes elaborating the test conditions into test cases and other testware"; "Test design work products include: (prioritized) test cases" |
| Test implementation: the tester can organize test cases into procedures; procedures are often assembled into suites | 1 (1.4.1) | "Test cases can be organized into test procedures, which are often assembled into test suites." |
| Test execution: compare, log | 1 (1.4.1) | "Actual test results are compared with the expected results. The test results are logged." |
| Test log definition | 3 | "A chronological record of relevant details about test execution." |
| The syllabus has no test case field list (now cited) | 1 (1.4.3); sources file ("Test case fields") | "There is a significant variation in how different organizations produce, shape, name, organize and manage their work products." No field list for test cases. |

Tutorial's own (no Cite, in a `note` callout): the field table and the comparison with the glossary definition; the advice to add a postconditions field.

## Bug Report

| Claim | Source | Quote |
|---|---|---|
| Execution compares results; anomalies are analyzed and reported | 1 (1.4.1) | "Anomalies are analyzed to identify their likely causes. This analysis allows us to report the anomalies based on the failures observed" |
| Anomaly definition | 4 | "A condition that deviates from expectation." |
| Defect report definition; bug report is a synonym | 5 | "Documentation of the occurrence, nature, and status of a defect." Synonym: bug report. |
| A reported anomaly may be something else | 1 (5.5) | "the reported anomalies may turn out to be real defects or something else (e.g., false–positive result, change request)" |
| Defect management definition | 6 | "The process of recognizing, recording, classifying, investigating, fixing and disposing of defects." |
| Three objectives of a typical defect report | 1 (5.5) | "Provide those responsible ... with sufficient information to resolve the issue"; "tracking the quality of the work product"; "ideas for improvement" |
| Field list of a defect report from dynamic testing | 1 (5.5) | Unique identifier; title; date, organization, author; test object and environment; context; description; expected and actual results; severity; priority; status; references |
| Issue Type, Sprint, Assign to are not in the syllabus list | 1 (5.5) | Absent from the list above |
| Severity definition | 7 | "The degree of impact that a defect has on the development, testing or operation of a component or system." |
| Priority definition (the page now repeats the glossary wording, with no "team") | 8 | "The level of importance assigned to a task according to specific criteria." |
| Tools fill some fields | 1 (5.5) | "Some of this data may be automatically included when using defect management tools (e.g., identifier, date, author and initial status)." |
| ISO 29119-3 templates; "incident reports" | 1 (5.5) | "which refers to defect reports as incident reports" |

Tutorial's own (callout `tip`): one defect per report, steps, build, environment. The "Field in the notes" column is a comparison by the tutorial.

## Bug Life Cycle

| Claim | Source | Quote |
|---|---|---|
| Example statuses (listed in a different order on the page, to avoid a copied run); no fixed diagram | 1 (5.5) | "Status of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)" |
| Defect workflow is a close glossary term, with no states list | 9 | "The state transition model of a defect lifecycle, including responsibilities." |
| Workflow activities | 1 (5.5) | "log the reported anomalies, analyze and classify them, decide on a suitable response such as to fix or keep it as it is and finally to close the defect report" |
| Confirmation testing; synonym retesting | 10 | "A type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur." Synonym: retesting. |

Not defined by ISTQB: "bug life cycle" (0 hits in syllabus and glossary; see the "Terms the notes use that ISTQB does not define" table of the sources file). The states New, Fixed, Retest, Reopen and the transitions are the owner's cycle, shown by `<BugLifeCycleDiagram />` and the table in the `note` callout (no Cite). The comparison column "Closest ISTQB example status" is the tutorial's own.

## Bug Triage

| Claim | Source | Quote |
|---|---|---|
| Severity definition | 7 | "The degree of impact that a defect has on the development, testing or operation of a component or system." |
| Priority definition | 8 | "The level of importance assigned to a task according to specific criteria." |
| Severity and priority are separate report fields | 1 (5.5) | "Severity of the defect (degree of impact) ..."; "Priority to fix" |
| Classification rules; all stakeholders follow | 1 (5.5) | "a workflow ... and rules for their classification. ... The process must be followed by all involved stakeholders." |
| The syllabus sets no scale of levels | 1 (5.5) | No scale appears in section 5.5 (0 hits for "triage"; severity and priority have no level names) |

Not defined by ISTQB: "bug triage" and "bug triage states" (0 hits). The meaning of triage, the 2 x 2 table and its examples are the tutorial's own (`note` callout, no Cite).

## Entry and Exit Criteria

| Claim | Source | Quote |
|---|---|---|
| Entry criteria definition | 11 | "The set of conditions for officially starting a defined task." |
| Exit criteria definition | 12 | "The set of conditions for officially completing a defined task." |
| Define for each test level; differ by objective | 1 (5.1.3) | "Entry criteria and exit criteria should be defined for each test level, and will differ based on the test objectives." |
| Cost of unmet entry criteria | 1 (5.1.3) | "it is likely that the activity will prove to be more difficult, time-consuming, costly, and riskier" |
| Typical entry criteria (three groups) | 1 (5.1.3) | "availability of resources", "availability of testware", "initial quality level of a test object (e.g., all smoke tests have passed)" |
| Typical exit criteria (two groups) | 1 (5.1.3) | "measures of thoroughness (e.g., achieved level of coverage, number of unresolved defects, defect density, number of failed test cases)" and binary "yes/no" criteria |
| A lack of time or budget can be a valid exit criterion (reworded) | 1 (5.1.3) | "Running out of time or budget can also be viewed as valid exit criteria." The stakeholders must have "reviewed and accepted the risk" |
| Agile names | 1 (5.1.3) | "exit criteria are often called Definition of Done"; entry criteria for a user story "are called Definition of Ready" |

## Test Completion

| Claim | Source | Quote |
|---|---|---|
| Glossary definition; synonym test closure | 13 | "The activity that makes testware available for later use, leaves test environments in a satisfactory condition and communicates the results of testing to relevant stakeholders." |
| Milestones | 1 (1.4.1) | "Test completion usually occurs at project milestones (e.g., release, end of iteration, test level completion)." |
| Five tasks | 1 (1.4.1) | "change requests or product backlog items are created"; "archived or handed over"; "shut down to an agreed state"; "lessons learned"; "A test completion report is created and communicated to the stakeholders." |
| Completion work products (reworded: the page lists the report, change requests, lessons learned, and action items) | 1 (1.4.3) | "test completion report ..., action items for improvement of subsequent projects or iterations, documented lessons learned, and change requests" |
| Completion report definition | 14 | "A type of test report produced at completion milestones that provides an evaluation of the corresponding test items against exit criteria." |
| When prepared (no actor named; 1.4.5 gives test completion mainly to the test management role); uses progress reports | 1 (5.3.2) | "prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses test progress reports and other data." |
| Seven report parts | 1 (5.3.2) | Test summary; evaluation against plan; deviations; impediments and workarounds; metrics; "Unmitigated risks, defects not fixed"; lessons learned |
| Template and frequency: a progress report to the same team is "often frequent and informal" | 1 (5.3.2) | "Test progress reporting to others in the same team is often frequent and informal, while test completion reporting follows a set template and occurs only once." |

## Requirement Traceability Matrix (RTM)

| Claim | Source | Quote |
|---|---|---|
| Traceability definition | 15 | "The ability to establish explicit relationships between related work products or items within work products." |
| Traceability matrix definition | 16 | "A matrix which correlates work products or items within work products to determine the coverage achieved." |
| Four kinds of item linked | 1 (1.4.4) | "test basis elements, testware associated with these elements (e.g., test conditions, risks, test cases), test results, and defects" |
| Test cases to requirements | 1 (1.4.4) | "Traceability of test cases to requirements can verify that the requirements are covered by test cases." |
| Test cases to requirements (reworded: "Trace test cases to requirements to check ..."); test results to risks (reworded) | 1 (1.4.4) | "Traceability of test results to risks can be used to evaluate the level of residual risk in a test object." |
| Benefits (coverage evaluation is most useful when the test basis has measurable criteria) | 1 (1.4.4) | "Accurate traceability supports coverage evaluation, so it is very useful if measurable coverage criteria are defined in the test basis."; "supports coverage evaluation"; "determine the impact of changes, facilitates audits, and helps meet IT governance criteria"; makes progress and completion reports "more easily understandable" |

Not defined by ISTQB: "requirements traceability matrix" is not a glossary entry. The glossary has "traceability matrix" (16). The page says so, then explains the RTM as a traceability matrix of requirements and test cases (`note` callout, no Cite). The example table is the tutorial's own.

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "A test case is a set of actions performed on a system to determine if it satisfies software requirements and functions correctly." | Glossary (2): "A set of preconditions, inputs, actions (where applicable), expected results and postconditions". A test case is a specification; running it is test execution. | yes |
| Test case fields "Actual Result", "Test Result/Status" | Syllabus 1.4.1: "The test results are logged." The glossary test case definition has no actual result. | no (a layout choice; the `istqb` block explains it) |
| Bug report: "Status (Open/Fixed/Closed)" | Syllabus 5.5 gives eight example statuses, not a fixed set. | no (the notes give a short list, not a rule) |
| Bug report fields "Issue Type", "Sprint", "Assign to" | Not in the 5.5 list. | no (extra fields are allowed; the syllabus list is "typically") |
| Bug life cycle image (New, Open, Fixed, Retest, Closed, Rejected, Deferred, Reopen) | Syllabus 5.5: statuses are examples; no diagram. The glossary has "defect workflow" with no states. | no (the image is a diagram, with no claim about ISTQB; the `istqb` block says ISTQB does not define it) |
| "Priority (High/Medium/Low): It means how fast the issue should resolve" | Glossary (8): "The level of importance assigned to a task according to specific criteria." Syllabus 5.5: "Priority to fix". | no (same idea) |
| "Severity (Critical/Major/Minor): It means how much its impact on the system" | Glossary (7): impact "on the development, testing or operation of a component or system". | no (same idea; the scale names are a team convention) |
| "Bug has 4 states" (triage) | The syllabus has no triage and no triage states. | no (the notes use "states" for the four combinations; the `istqb` block says ISTQB does not define triage) |
| Milestones 3 and 5: "A test project is completed or cancelled", "A maintenance release is completed" | Syllabus 1.4.1 lists examples with "e.g.": release, end of iteration, test level completion. | no (the owner's list extends examples) |
| RTM answers "Has the test case passed or failed?" | Glossary (16): matrix "to determine the coverage achieved". | no (an RTM can carry results; not a conflict) |

Owner text fixes (spelling and formatting only):

- Bug Report: the closing quote of 'defect report' was missing; it is added.
- Bug Triage: "how much it's impact" becomes "how much its impact".
- Bug Triage states: the `##` sub-headings become bold labels; the "Meaning:" and "Example:" lines of each state are split into two paragraphs (the notes join them into one).
- The `###` and `##` sub-headings of the notes are bold labels: "Bug Triage States" and "In simple terms".
- The notes put entry criteria, exit criteria, and test completion under one heading "Test Completion". The page splits them into the two topics "Entry and Exit Criteria" and "Test Completion". No wording changed.
- The owner's wording and grammar ("Bug report has following fields", "we categorized") are kept.

Privacy: the owner image `test-case-template.png` shows a real person's name in the Reviewed By cell. The image is kept (owner material). The name is not in the text or in the alt text.

## Fix round 1 (after the fact-check and the review)

| Finding | Change |
|---|---|
| FAIL 1 and 2 (Test Case, "specification") | Deleted the sentences "A test case is a specification. It tells the tester ..." |
| FAIL 5 (test procedures and suites) | "can organize" and "often assembled" |
| FAIL U1 (no cite on "no list of test case fields") | Added `<Cite n={1} />` |
| FAIL 47 (who prepares the completion report) | Passive: "It is prepared during test completion." |
| FAIL 50 (progress report) | "often frequent and informal" |
| Minor 2 (state table) | Deferred row: "Not shown in the diagram. Often Open, ..."; Open: "Open, or waiting to be fixed"; Fixed: "Awaiting confirmation testing"; Retest: "None. This is the confirmation testing itself."; the closing line names only "duplicate" |
| Minor 3 | "as the list above shows" |
| Minor 4 | "a file 50 times the size limit" |
| Minor 5, 6 | Benefit lines reworded to say what the syllabus says |
| Minor 7 | Priority uses the glossary wording (no "team", "according to specific criteria") |
| Minor 8 | "A typical defect report has three objectives" |
| Minor 9 | RTM sentence reworded |
| Minor 10 | Not changed: the image is not in scope (the controller painted out the name on main) |
| Copy scan (9+ words against the syllabus text, istqb blocks) | Reworded four runs: the status list (order changed), the time and budget exit criterion, the completion work products, the residual risk sentence. Result: 0 runs. |
| Sentence length (istqb blocks, table cells included) | Two sentences over 25 words were split or shortened. Result: 0 over 25. |
