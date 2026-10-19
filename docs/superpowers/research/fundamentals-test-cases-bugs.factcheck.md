# Fact-check: Test Cases, Bugs and Completion (`content/fundamentals/test-cases-bugs.mdx`)

| Item | Value |
|---|---|
| Chapter | 10, `test-cases-bugs`, "Test Cases, Bugs and Completion" |
| Date | 2026-10-20 |
| Round | 2 (round 1 tables kept below; round 2 section at the end) |
| Page checked | round 1: commit 93836b2; round 2: commit 2cf632e (branch `fund-ch/test-cases-bugs`) |
| Checker | an independent agent (not the writer) |

## Sources

| n | Source | Where checked |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1, https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`: 1.4.1, 1.4.3, 1.4.4, 1.4.5, 5.1.3, 5.3.2, 5.5 |
| 2 | ISTQB Glossary: test case | `api.glossary.istqb.org/v1/terms/test-case`, 2026-10-20 |
| 3 | ISTQB Glossary: test log | `.../terms/test-log` |
| 4 | ISTQB Glossary: anomaly | `.../terms/anomaly` |
| 5 | ISTQB Glossary: defect report | `.../terms/defect-report` (synonym: bug report) |
| 6 | ISTQB Glossary: defect management | `.../terms/defect-management` |
| 7 | ISTQB Glossary: severity | `.../terms/severity` |
| 8 | ISTQB Glossary: priority | `.../terms/priority` |
| 9 | ISTQB Glossary: defect workflow | `.../terms/defect-workflow` (no synonyms, no references, definition only) |
| 10 | ISTQB Glossary: confirmation testing | `.../terms/confirmation-testing` (synonym: retesting) |
| 11 | ISTQB Glossary: entry criteria | `.../terms/entry-criteria` |
| 12 | ISTQB Glossary: exit criteria | `.../terms/exit-criteria` |
| 13 | ISTQB Glossary: test completion | `.../terms/test-completion` (synonym: test closure) |
| 14 | ISTQB Glossary: test completion report | `.../terms/test-completion-report` |
| 15 | ISTQB Glossary: traceability | `.../terms/traceability` |
| 16 | ISTQB Glossary: traceability matrix | `.../terms/traceability-matrix` |

All 16 URLs agree with `fundamentals-sources.md` (S1, S67, S92, S75, S72, S73, S76, S77, S74, S23, S78, S79, S87, S88, S89, S90). The sources are numbered in the order of the first cite (L63, L65, L73, L127, L129, L133, L157, L157, L183, L192, L307, L307, L347, L359, L404, L404). `accessed` and `page.updated` are 2026-10-20.

## Table 1: cited claims

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | Test Case | "A test case is a specification. It tells the tester what to do and what to expect." (L63) | 1 | FAIL | 1.4.3: "Test design work products include: (prioritized) test cases, test charters, coverage items…" | The syllabus does not call a test case a specification and does not say what it "tells the tester". Neither does the glossary [2]. Fix: delete the two sentences, or move them to a tutorial's own note. |
| 2 | Test Case | A test case is a piece of testware (L63) | 1 | PASS | 1.4.3: "Testware is created as output work products… Test design work products include: (prioritized) test cases" | |
| 3 | Test Case | Glossary: preconditions, inputs, actions (where applicable), expected results, postconditions; developed from test conditions (L65) | 2 | PASS | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." | "Testers develop it" adds an actor; acceptable. |
| 4 | Test Case | Test design: elaborate test conditions into test cases (L69) | 1 | PASS | 1.4.1: "Test design includes elaborating the test conditions into test cases and other testware" | |
| 5 | Test Case | Test implementation: the tester organizes test cases into procedures and assembles procedures into suites (L70) | 1 | FAIL | 1.4.1: "Test cases can be organized into test procedures, which are often assembled into test suites." | The page drops "can" and "often" and states both as fixed steps. It says more than the source. Fix: "The tester can organize test cases into test procedures. Procedures are often assembled into test suites." |
| 6 | Test Case | Test execution: run tests, compare actual with expected, log results (L71) | 1 | PASS | 1.4.1: "Test execution includes running the tests… Actual test results are compared with the expected results. The test results are logged." | |
| 7 | Test Case | Test log: chronological record of relevant details about test execution (L73) | 3 | PASS | "A chronological record of relevant details about test execution." | |
| 8 | Bug Report | Execution compares results; the tester analyzes anomalies for likely causes, then reports them (L127) | 1 | PASS | 1.4.1: "Anomalies are analyzed to identify their likely causes. This analysis allows us to report the anomalies based on the failures observed" | |
| 9 | Bug Report | Anomaly: a condition that deviates from expectation (L127) | 4 | PASS | "A condition that deviates from expectation." | |
| 10 | Bug Report | Defect report documents occurrence, nature, status of a defect (L129) | 5 | PASS | "Documentation of the occurrence, nature, and status of a defect." | |
| 11 | Bug Report | "Bug report" is another name (L129) | 5 | PASS | API entry `defect-report`, synonyms: "bug report" | |
| 12 | Bug Report | A reported anomaly may be a real defect or a false positive or change request; resolved while handling the report (L131) | 1 | PASS | 5.5: "may turn out to be real defects or something else (e.g., false–positive result, change request) - this is resolved during the process of dealing with the defect reports" | |
| 13 | Bug Report | Defect management definition (L133) | 6 | PASS | "The process of recognizing, recording, classifying, investigating, fixing and disposing of defects." | |
| 14 | Bug Report | Three objectives of a defect report (L133–L137) | 1 | PASS | 5.5: "Typical defect reports have the following objectives: Provide… sufficient information to resolve the issue; …tracking the quality of the work product; …ideas for improvement…" | "Typical" is dropped. Acceptable; see the review file (Minor). |
| 15 | Bug Report | Field list of a defect report from dynamic testing, 11 rows (L139–L153) | 1 | PASS | 5.5: "Unique identifier; Title with a short summary…; Date…, issuing organization, and author, including their role; …Severity… (degree of impact) on the interests of stakeholders or requirements; Priority to fix…" | Each row checked against the 5.5 list. "Field in the notes" column is the tutorial's mapping of the owner's fields; correct. |
| 16 | Bug Report | Issue Type, Sprint, Assign to are not in the syllabus list (L155) | 1 | PASS | 5.5 list (rows above) | None of the three is in the list. |
| 17 | Bug Report | Severity: degree of impact on development, testing, or operation (L157) | 7 | PASS | "The degree of impact that a defect has on the development, testing or operation of a component or system." | |
| 18 | Bug Report | Priority: level of importance that the team assigns to a task (L157) | 8 | PASS | "The level of importance assigned to a task according to specific criteria." | "The team" is an added actor and "according to specific criteria" is dropped. Acceptable; see the review file (Minor). |
| 19 | Bug Report | Tools fill identifier, date, author, first status (L159) | 1 | PASS | 5.5: "Some of this data may be automatically included when using defect management tools (e.g., identifier, date, author and initial status)." | |
| 20 | Bug Report | ISO/IEC/IEEE 29119-3 has templates and examples; calls them incident reports (L159) | 1 | PASS | 5.5: "Document templates… can be found in the ISO/IEC/IEEE 29119-3 standard, which refers to defect reports as incident reports." | |
| 21 | Bug Life Cycle | Example statuses: open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected (L181) | 1 | PASS | 5.5: "Status of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)" | |
| 22 | Bug Life Cycle | The syllabus gives them as examples and shows no fixed diagram (L181) | 1 | PASS | 5.5: "(e.g., …)" | No figure or state model in 5.5 or elsewhere in the syllabus text. |
| 23 | Bug Life Cycle | Defect workflow: state transition model of a defect life cycle, including responsibilities (L183) | 9 | PASS | "The state transition model of a defect lifecycle, including responsibilities." | |
| 24 | Bug Life Cycle | The glossary gives no list of states for it (L183) | 9 | PASS | API entry `defect-workflow`: definition only; `synonyms` [], `references` [], `see_also` [] | Verified against the API. |
| 25 | Bug Life Cycle | Workflow: log, analyze and classify, decide a response (fix or keep), close (L185–L190) | 1 | PASS | 5.5: "The workflow typically comprises activities to log the reported anomalies, analyze and classify them, decide on a suitable response such as to fix or keep it as it is and finally to close the defect report." | |
| 26 | Bug Life Cycle | Confirmation testing after a fix checks that the failure does not occur again (L192) | 10 | PASS | "A type of change-related testing performed after fixing a defect to confirm that a failure caused by that defect does not reoccur." | |
| 27 | Bug Life Cycle | "Retesting" is another name (L192) | 10 | PASS | API entry `confirmation-testing`, synonyms: "retesting" | Verified against the API. |
| 28 | Bug Triage | Severity definition (L264) | 7 | PASS | See row 17. | |
| 29 | Bug Triage | Priority definition (L264) | 8 | PASS | See row 18. | Same note as row 18. |
| 30 | Bug Triage | A defect report has a severity field and a separate priority field (L266) | 1 | PASS | 5.5: "Severity of the defect (degree of impact)…"; "Priority to fix" | Two separate list items. |
| 31 | Bug Triage | The process includes rules to classify defects; all involved stakeholders must follow them (L266) | 1 | PASS | 5.5: "the defect management process includes a workflow… and rules for their classification… The process must be followed by all involved stakeholders." | |
| 32 | Bug Triage | The syllabus sets no scale of levels for severity or priority (L266) | 1 | PASS | 5.5 has no level names. | Whole-text search: no severity or priority scale anywhere in the syllabus. |
| 33 | Entry and Exit Criteria | Entry criteria: conditions for officially starting a task (L307) | 11 | PASS | "The set of conditions for officially starting a defined task." | |
| 34 | Entry and Exit Criteria | Exit criteria: conditions for officially completing a task (L307) | 12 | PASS | "The set of conditions for officially completing a defined task." | |
| 35 | Entry and Exit Criteria | Define both for each test level; they differ with the test objectives (L309) | 1 | PASS | 5.1.3: "Entry criteria and exit criteria should be defined for each test level, and will differ based on the test objectives." | |
| 36 | Entry and Exit Criteria | Unmet entry criteria: likely harder, slower, costlier, riskier (L309) | 1 | PASS | 5.1.3: "it is likely that the activity will prove to be more difficult, time-consuming, costly, and riskier" | |
| 37 | Entry and Exit Criteria | Typical entry criteria, three groups with examples (L311–L315) | 1 | PASS | 5.1.3: "availability of resources (e.g., people, tools, environments, test data, budget, time), availability of testware (…), and initial quality level of a test object (e.g., all smoke tests have passed)" | |
| 38 | Entry and Exit Criteria | Typical exit criteria, two groups with examples (L317–L320) | 1 | PASS | 5.1.3: "measures of thoroughness (e.g., achieved level of coverage, number of unresolved defects, defect density, number of failed test cases), and binary "yes/no" criteria" | |
| 39 | Entry and Exit Criteria | Agile: Definition of Ready (user story), Definition of Done (L325) | 1 | PASS | 5.1.3: "exit criteria are often called Definition of Done… Entry criteria that a user story must fulfill… are called Definition of Ready." | |
| 40 | Entry and Exit Criteria | Running out of time or budget can be a valid exit criterion if stakeholders review and accept the risk (L327) | 1 | PASS | 5.1.3: "Running out of time or budget can also be viewed as valid exit criteria… if the stakeholders have reviewed and accepted the risk to go live without further testing." | |
| 41 | Test Completion | Glossary: three results of test completion (L347) | 13 | PASS | "The activity that makes testware available for later use, leaves test environments in a satisfactory condition and communicates the results of testing to relevant stakeholders." | |
| 42 | Test Completion | "Test closure" is another name (L347) | 13 | PASS | API entry `test-completion`, synonyms: "test closure" | |
| 43 | Test Completion | Usually at a milestone: release, end of iteration, test level completion (L349) | 1 | PASS | 1.4.1: "Test completion usually occurs at project milestones (e.g., release, end of iteration, test level completion)." | |
| 44 | Test Completion | Five tasks (L351–L355) | 1 | PASS | 1.4.1: "change requests or product backlog items are created… archived or handed over… shut down to an agreed state… lessons learned… A test completion report is created and communicated" | |
| 45 | Test Completion | Four work products (L357) | 1 | PASS | 1.4.3: "test completion report…, action items for improvement of subsequent projects or iterations, documented lessons learned, and change requests" | |
| 46 | Test Completion | A test completion report evaluates test items against exit criteria (L359) | 14 | PASS | "…produced at completion milestones that provides an evaluation of the corresponding test items against exit criteria." | |
| 47 | Test Completion | "The tester prepares it when a project, a test level, or a test type is complete, and ideally when its exit criteria are met." (L359) | 1 | FAIL | 5.3.2: "A test completion report is prepared during test completion, when a project, test level, or test type is complete…" 1.4.5: "The test management role is mainly focused on… test completion." | The syllabus names no actor here, and 1.4.5 gives test completion mainly to the test management role, not the testing role. Fix: "It is prepared during test completion, when…" or "The test management role prepares it…". The timing part is PASS. |
| 48 | Test Completion | The report uses progress reports and other data (L359) | 1 | PASS | 5.3.2: "This report uses test progress reports and other data." | |
| 49 | Test Completion | Seven typical parts of a completion report (L361–L369) | 1 | PASS | 5.3.2: "Test summary; Testing and product quality evaluation…; Deviations from the test plan…; Testing impediments and workarounds; Test metrics…; Unmitigated risks, defects not fixed; Lessons learned" | |
| 50 | Test Completion | Completion report: set template, once. Progress report to the same team: "frequent and often informal" (L371) | 1 | FAIL | 5.3.2: "Test progress reporting to others in the same team is often frequent and informal, while test completion reporting follows a set template and occurs only once." | The first sentence is PASS. In the second, "often" moved: the syllabus says "often frequent", the page says always frequent. Fix: "A progress report to the same team is often frequent and informal." |
| 51 | RTM | Traceability definition (L404) | 15 | PASS | "The ability to establish explicit relationships between related work products or items within work products." | |
| 52 | RTM | Traceability matrix definition (L404) | 16 | PASS | "A matrix which correlates work products or items within work products to determine the coverage achieved." | |
| 53 | RTM | Keep traceability through the whole test process; four kinds of item (L406–L411) | 1 | PASS | 1.4.4: "establish and maintain traceability throughout the test process between the test basis elements, testware associated with these elements (e.g., test conditions, risks, test cases), test results, and defects" | |
| 54 | RTM | Test cases to requirements verify coverage; test results to risks show residual risk (L413) | 1 | PASS | 1.4.4: "Traceability of test cases to requirements can verify that the requirements are covered by test cases… test results to risks can be used to evaluate the level of residual risk" | See the copy check (9-word run). |
| 55 | RTM | Four benefits (L415–L420) | 1 | PASS | 1.4.4: "supports coverage evaluation… determine the impact of changes, facilitates audits, and helps meet IT governance criteria… test progress reports and test completion reports more easily understandable" | L417 and L419 wording: see the review file (Minor). |

## Table 2: warning callouts in the notes blocks

| # | Location | Callout (short) | Verdict | Evidence | Note |
|---|---|---|---|---|---|
| W1 | Test Case, L38 | The notes define a test case as actions that testers perform; the glossary defines it as preconditions, inputs, actions, expected results, and postconditions | PASS | Notes: "A test case is a set of actions performed on a system to determine if it satisfies software requirements…" Glossary [2]: "A set of preconditions, inputs, actions (where applicable), expected results and postconditions…" | The conflict is real: the owner's definition has only actions and leaves out preconditions, inputs, expected results, and postconditions. It is named correctly. One sentence; the ending sentence is exact. |

No other notes line needs a warning. Checked: bug report statuses (Open/Fixed/Closed) and extra fields (Issue Type, Sprint, Assign to) add to the "typically includes" list but do not contradict it; the life cycle image makes no ISTQB claim; the owner's priority ("how fast the issue should resolve") and severity ("how much its impact on the system") agree with "Priority to fix" and the glossary severity; the extra completion milestones extend an "e.g." list; the entry and exit criteria lines agree with 5.1.3; the RTM text agrees with the traceability matrix definition.

## Table 3: "not defined" statements

| # | Location | Statement | Verdict | Evidence |
|---|---|---|---|---|
| N1 | Bug Life Cycle, L179 | "The ISTQB syllabus and glossary do not define this term." (bug life cycle) | PASS | Glossary API: `bug-life-cycle`, `defect-life-cycle`, `defect-lifecycle` return 404. No main entry of the 1128 in `/v1/terms` contains "life cycle"/"lifecycle" for a defect or bug (only safety, software, system, software development lifecycle). Synonyms (round 2, `POST /v1/search` with `{"term": …}`, which matches names and synonyms, e.g. "retesting" finds confirmation testing): "life cycle" 0 results, "bug life cycle" 0, "defect life cycle" 0, "defect lifecycle" 0, "bug lifecycle" 0, "lifecycle" 2 (software development lifecycle, software lifecycle), "workflow" 1 (defect workflow). Syllabus: 0 hits for "bug life cycle", "defect lifecycle"; the only "life cycle" is in a standard title (L2723). The closest term "defect workflow" is named on the page. |
| N2 | Bug Triage, L262 | "The ISTQB syllabus and glossary do not define this term." (bug triage) | PASS | Glossary API: `bug-triage`, `defect-triage`, `triage` return 404. No main entry has "triage" in its name; no definition uses the word in this sense (only "data preparation", "data preprocessing"). Synonyms (round 2, `POST /v1/search` with `{"term": …}`, which matches names and synonyms, e.g. "retesting" finds confirmation testing): "triage" 0 results, "bug triage" 0, "defect triage" 0; "defect management" 2 (defect management, defect management committee), neither with a triage synonym. Syllabus: 0 hits for "triage". |
| N3 | RTM, L402 | "The ISTQB syllabus and glossary do not define this term." (requirements traceability matrix) | PASS | Glossary API: `requirements-traceability-matrix` returns 404; the related main entries are "traceability" and "traceability matrix" only, and the page names both. Synonyms (round 2, `POST /v1/search` with `{"term": …}`, which matches names and synonyms, e.g. "retesting" finds confirmation testing): "requirements traceability matrix" 0 results, "requirement traceability" 0, "RTM" 0, "traceability" 2 (traceability, traceability matrix), "traceability matrix" 1. Syllabus: "traceability matrix" occurs only in the title of Appendix B ("Business Outcomes traceability matrix with Learning Objectives"). |
| N4 | Bug Life Cycle, L183 | The glossary gives no list of states for "defect workflow" | PASS | Same as Table 1 row 24. |
| N5 | Bug Life Cycle, L181 | The syllabus shows no fixed diagram | PASS | Same as Table 1 row 22. |

The diagram `<BugLifeCycleDiagram />` (L194) is page text. Its visible caption says: "This is the owner's version of the life cycle. The ISTQB syllabus does not define these states." This is correct: the syllabus gives example statuses only (5.5), and New, Fixed, and Retest are not among them. PASS.

## Table 4: uncited ISTQB facts in istqb blocks

| # | Location | Statement | Verdict | Fix |
|---|---|---|---|---|
| U1 | Test Case, L75 | "The syllabus gives no list of test case fields. Each team picks its own layout." | FAIL | States an ISTQB fact with no cite (the same kind of statement at L155 and L266 has `<Cite n={1} />`). The fact is true (no field list; 1.4.3: "significant variation in how different organizations produce, shape, name, organize and manage their work products"). Add `<Cite n={1} />`. |

Not counted:
- L73 "So the actual result and the pass or fail status belong to one test run. They do not belong to the definition of the test case." This is a conclusion from the cited definitions [2] and [3] in the same paragraph.
- L324 the row "Can we start? / Can we stop?" is a plain restatement of the cited definitions at L307.
- The "tutorial's own" callouts (L77–L96, L161–L165, L196–L213, L268–L281, L422–L434). Their tables hold no new ISTQB fact. The columns "Part of the ISTQB definition" (L81) and "Closest ISTQB example status" (L200) and the sentence at L211 compare own content with ISTQB items that are cited in the same block (L65, L181). The sentence "as the syllabus describes" at L432 refers to the cited list at L406–L411. See the review file (Minor) for wording.

## Copy check

Method: a 10-word sliding-window match of each MDX line against the syllabus text and against all glossary definitions (lower case, punctuation removed).

| Location | Matched run | Verdict | Note |
|---|---|---|---|
| L181 | "open deferred duplicate waiting to be fixed awaiting confirmation testing re opened closed" | PASS | A list of the syllabus example status names, not a copied sentence. Names must stay as they are. |
| L335 (notes block) | "and any other relevant information test completion activities occur at project milestones such as" | PASS | Owner text, kept by rule. |
| L65, L133, L183, L404 | Glossary definitions | PASS | Each one is introduced as the glossary definition ("The glossary defines…", "A defect workflow is…"). The copy rule applies to the syllabus. |
| L413 | "traceability of test cases to requirements can verify that" | PASS | 9 words in a row, under the limit. See the review file (Minor). |

No sentence of new prose copies 10 or more syllabus words in a row.

## Summary

- Table 1: 55 claims, 4 FAIL (rows 1, 5, 47, 50).
- Table 2: 1 warning callout, PASS.
- Table 3: 5 statements, PASS. The diagram caption: PASS.
- Table 4: 1 FAIL (U1).
- Copy check: 0 FAIL.

Round 1 result: 5 open FAILs (rows 1, 5, 47, 50 and U1).

## Round 2 (commit 2cf632e)

Scope: the diff 85d843c..2cf632e of `content/fundamentals/test-cases-bugs.mdx`, every round-1 FAIL, and every new or changed claim. Line numbers are those of 2cf632e (no line moved). The three synonym placeholders of Table 3 (N1–N3) are now filled (targeted searches only); N1–N3 stay PASS.

### Round-1 FAILs

| Round-1 row | Location | New text (short) | Verdict | Quote from the source (≤ 30 words) |
|---|---|---|---|---|
| 1 | L63 | "A test case is a piece of testware" (the "specification" sentences are deleted) | PASS | 1.4.3: "Test design work products include: (prioritized) test cases" |
| 5 | L70 | "The tester can organize test cases into test procedures. Procedures are often assembled into test suites" | PASS | 1.4.1: "Test cases can be organized into test procedures, which are often assembled into test suites." |
| 47 | L359 | "It is prepared during test completion. That is when a project, a test level, or a test type is complete, and ideally when its exit criteria are met." | PASS | 5.3.2: "A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met." |
| 50 | L371 | "A progress report to the same team is often frequent and informal" | PASS | 5.3.2: "Test progress reporting to others in the same team is often frequent and informal" |
| U1 | L75 | "The syllabus gives no list of test case fields <Cite n={1} />." | PASS | The syllabus has no test case field list (whole-text check); 1.4.3: "significant variation in how different organizations produce, shape, name, organize and manage their work products" |

### Changed and new claims

| # | Location | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| R1 | L133 | "A typical defect report has three objectives" | 1 | PASS | 5.5: "Typical defect reports have the following objectives" | |
| R2 | L157, L264 | Priority: "the level of importance assigned to a task according to specific criteria" | 8 | PASS | "The level of importance assigned to a task according to specific criteria." | The glossary definition, introduced as such. |
| R3 | L181 | Eight example statuses, new order: closed, rejected, open, deferred, duplicate, re-opened, waiting to be fixed, awaiting confirmation testing | 1 | PASS | 5.5: "(e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)" | Same eight names; the count "eight" is correct. |
| R4 | L327 | "A team can also treat a lack of time or budget as a valid exit criterion." | 1 | PASS | 5.1.3: "Running out of time or budget can also be viewed as valid exit criteria." | |
| R5 | L357 | Work products: completion report, change requests, documented lessons learned, action items; "The action items improve later projects or iterations" | 1 | PASS | 1.4.3: "test completion report…, action items for improvement of subsequent projects or iterations, documented lessons learned, and change requests" | "Improve" states the purpose as an effect; acceptable. See the review file (Minor). |
| R6 | L413 | "Trace test cases to requirements to check that the test cases cover each requirement." | 1 | PASS | 1.4.4: "Traceability of test cases to requirements can verify that the requirements are covered by test cases." | The 9-word near-copy of round 1 is gone. |
| R7 | L413 | "Tracing test results to risks can show how much residual risk a test object has." | 1 | PASS | 1.4.4: "Traceability of test results to risks can be used to evaluate the level of residual risk in a test object." | |
| R8 | L417 | "It supports the evaluation of coverage. This is most useful when the test basis has measurable coverage criteria." | 1 | PASS | 1.4.4: "Accurate traceability supports coverage evaluation, so it is very useful if measurable coverage criteria are defined in the test basis." | |
| R9 | L419 | "It makes audits easier and helps meet IT governance criteria." | 1 | PASS | 1.4.4: "facilitates audits, and helps meet IT governance criteria" | |

### Own-text callouts (changed)

| Location | Change | Verdict | Note |
|---|---|---|---|
| L203–L211 | State table: Open → "Open, or waiting to be fixed"; Deferred next state "Not shown in the diagram. Often Open, when the team schedules it"; Fixed → "Awaiting confirmation testing"; Retest → "None. This is the confirmation testing itself."; L211 now names only "duplicate" | PASS | The table now agrees with the diagram and the owner image. The ISTQB names it compares with are cited at L181 and L192 (retesting = confirmation testing). L211 is correct: "duplicate" is the only one of the eight examples with no row. |
| L278 | "50 times the size limit" | PASS | 500 MB / 10 MB = 50. |
| L432 | "as the list above shows" | PASS | No ISTQB reference left in the callout. |

### Copy check (round 2)

Same method as round 1. Syllabus matches: only L335 (owner text in the notes block). Glossary matches: L65, L133, L157, L264, L404, each introduced as the glossary definition. No sentence of new prose copies 10 or more syllabus words in a row. PASS.

### Other checks (round 2)

No sentence in the `istqb` blocks is longer than 25 words. `npm test` 155 pass, 0 fail; `npm run build` OK; `check_sources.py out` `OK 46 pages checked, 0 skipped`; `check_outline.py out` `OK 586 TOC links`; `check_links.py out` exit 0; `check_routes.py out` exit 0.

### Round 2 summary

All 5 round-1 FAILs are fixed. The 9 changed or new claims are PASS. Table 3 is complete (no placeholder left).

Open FAILs: 0
