# Fact-check: Prep, Intern (round 1, 2026-10-13)

Content under check: `content/prep/intern.ts` at commit 45c9a50 (8 `qa` items). The author's research notes (`prep-intern.md`) were not used as evidence. The checker fetched each source again.

Sources fetched by the checker:

- S1 https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf (HTTP 200, `application/pdf`, 78 pages, footer "v4.0.1 ... 2024-09-15"). Downloaded with curl. Single pages extracted with `pdftotext -f N -l N -layout`. PDF page N = printed "Page N of 78".
- S2 ISTQB Glossary. `https://glossary.istqb.org/en_US/term/<slug>` returns only an empty React shell (`<div id="root"></div>`). The checker read each term from the API that the glossary site itself calls: `https://api.glossary.istqb.org/v1/terms/<slug>` (the site JS sets `baseURL:"https://api.glossary.istqb.org/v1"` and `getTermRequest` = GET `/terms/${slug}`). Terms fetched: `validation`, `verification`, `severity`, `priority`, `test-case`, `smoke-testing`. `test-scenario` and `sanity-testing` return an HTML "Not Found" page: the glossary has no such terms.

The `current:false` field. Every term above has `accept_language.current: false`. The field does not mean "outdated":

1. The API OpenAPI spec (`https://api.glossary.istqb.org/docs`) declares `current` (boolean) on `LanguageTermResource` and `old_version` (boolean) on `TermResource`, with no description for either.
2. The glossary site code (`term.1d9f9fc9.js`) shows the "Outdated version" badge only when `old_version` is true: `e.old_version&&... title:c("Outdated version")`. The site never reads `accept_language.current`. It reads `current` only on the entries of `languages[]`, to pick the link form: `a.current?webPaths.term(locale,slug):webPaths.termWithVersion(locale,slug,version)`.
3. Test: `regression-testing?version=1` (the old definition) returns `old_version: true, current: true`. `regression-testing?version=3` (the newest) returns `old_version: false, current: false`. So `current:false` comes with the newest version.

All 6 terms have `old_version: false`, and their `en_US` language entry has `current: true`. Conclusion: the definitions are the newest glossary versions, and they are safe to cite. The exact meaning of `accept_language.current` is not documented.

Page-link note: an item has one `source` URL. When a claim of the item is on a different page of the same PDF, the row says so. The claim stays PASS because the quote is in the cited document.

| # | Item id | Claim | Source URL | Verdict | Quote from the fetched page, and why |
|---|---|---|---|---|---|
| 1 | intern-001 | Testing is a set of activities that find defects and judge quality | S1 #page=15 | PASS | p. 15: "Software testing is a set of activities to discover defects and evaluate the quality of software work products." |
| 2 | intern-001 | Testing is a cost-effective way to find defects | S1 #page=15 | PASS | p. 16: "Testing provides a cost-effective means of detecting defects." Note: on p. 16, one page after the link. "before a user meets them" is the author's gloss. |
| 3 | intern-001 | Testing is not debugging | S1 #page=15 | PASS | p. 16: "Testing and debugging are separate activities." Note: p. 16. |
| 4 | intern-001 | "I find and report the problem. A developer finds the cause in the code and fixes it." | S1 #page=15 | OPINION-OK | First-person practice. p. 16 says debugging "is concerned with finding causes of this failure (defects), analyzing these causes, and eliminating them", but the syllabus does not say that a developer does it. Do not present the role split as an ISTQB rule. |
| 5 | intern-001 | Example (empty email address accepted) and "behind" text | - | OPINION-OK | Sample answer and interviewer intent. |
| 6 | intern-002 | Verification confirms that a work product fulfills its specification | S2 term `validation` | PASS | API term `verification` (v2, old_version false): "The process of confirming that a work product fulfills its specification." Note: the item links the `validation` term, not `verification`. |
| 7 | intern-002 | Validation confirms that the work product matches the needs of the stakeholders | S2 term `validation` | PASS | API term `validation` (v2, old_version false): "Confirmation by examination that a work product matches a stakeholder&#039;s needs." |
| 8 | intern-002 | "did we build it right?" / "did we build the right thing?" and the login examples | - | OPINION-OK | First-person framing ("I ask:"). The glossary does not contain these phrases. Do not attribute them to ISTQB. |
| 9 | intern-003 | Severity is the degree of impact of a defect on the system | S2 term `severity` | PASS | API term `severity` (v1, old_version false): "The degree of impact that a defect has on the development, testing or operation of a component or system." |
| 10 | intern-003 | Priority is the level of importance of the task to fix it | S2 term `severity` | PASS | API term `priority` (v1, old_version false): "The level of importance assigned to a task according to specific criteria." S1 p. 57 lists "Priority to fix" in a defect report. Note: the item links `severity`, not `priority`. |
| 11 | intern-003 | Priority "sets the order of the work"; crash vs. spelling examples; "a very common question" | - | OPINION-OK | Gloss and examples. The definition says "level of importance"; "order of the work" is the author's reading of it. |
| 12 | intern-004 | A test case is a set of preconditions, inputs, actions, expected results and postconditions | S2 term `test-case` | PASS | API term `test-case` (v2, old_version false): "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." |
| 13 | intern-004 | "I use the word scenario for ..."; teams use the words differently | - | OPINION-OK | The candidate's own usage. Checker confirmed: `https://api.glossary.istqb.org/v1/terms/test-scenario` returns "Not Found", so ISTQB has no term to contradict it. |
| 14 | intern-005 | The team logs, analyses and classifies the bug, and decides to fix it or keep it | S1 #page=57 | PASS | p. 56: "The workflow typically comprises activities to log the reported anomalies, analyze and classify them, decide on a suitable response such as to fix or keep it as it is and finally to close the defect report." Note: on p. 56, one page before the link. |
| 15 | intern-005 | Typical statuses: open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected | S1 #page=57 | PASS | p. 57: "Status of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)". Same 8 statuses. |
| 16 | intern-005 | Confirmation testing checks that the original defect is gone | S1 #page=57 | PASS | p. 30: "Confirmation testing confirms that an original defect has been successfully fixed." Note: on p. 30, not on the linked page. |
| 17 | intern-005 | Re-open if not fixed, close if fixed; names differ between tools | - | OPINION-OK | Practice. Consistent with the statuses "re-opened" and "closed" on p. 57. |
| 18 | intern-006 | Black-box techniques work from the specified behavior, without the internal structure | S1 #page=39 | PASS | p. 39: "Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure." |
| 19 | intern-006 | White-box techniques work from the internal structure and processing | S1 #page=39 | PASS | p. 39: "White-box test techniques (also known as structure-based techniques) are based on an analysis of the test object’s internal structure and processing." |
| 20 | intern-006 | Black-box tests stay valid when the code changes but the behavior does not | S1 #page=39 | PASS | p. 39: "if the implementation changes, but the required behavior stays the same, then the test cases are still useful." |
| 21 | intern-006 | A white-box test checks that each branch runs at least once | S1 #page=39 | PASS | p. 43: "When 100% branch coverage is achieved, all branches in the code, unconditional and conditional, are exercised by test cases." Given as an example. Note: on p. 43. |
| 22 | intern-006 | The two ways work together, not rivals | - | OPINION-OK | Interviewer intent. |
| 23 | intern-007 | The ISTQB glossary says smoke testing is a test type to gain sufficient confidence that a test object is ready for planned testing | S2 term `smoke-testing` | PASS | API term `smoke-testing` (v1, old_version false): "A test type to gain sufficient confidence that a test object is ready for planned testing." The quote in the item is word for word. Note: the term was added on 2026-04-18 (history: "Add the term smoke testing to the Glossary"). Its syllabus usage is Advanced Agile Tester v2.0 and AI Testing v2.0, not CTFL. |
| 24 | intern-007 | Smoke checks after each build; send the build back on failure | - | OPINION-OK | Practice. |
| 25 | intern-007 | Sanity testing as "my own working meaning"; ask for the team definition | - | OPINION-OK | Labeled as the candidate's own meaning. Checker confirmed: `https://api.glossary.istqb.org/v1/terms/sanity-testing` returns "Not Found". |
| 26 | intern-008 | A report has a short title that summarizes the problem | S1 #page=57 | PASS | p. 57: "Title with a short summary of the anomaly being reported". |
| 27 | intern-008 | It names the test object and the environment | S1 #page=57 | PASS | p. 57: "Identification of the test object and test environment". |
| 28 | intern-008 | It has the steps, the expected result, and the actual result | S1 #page=57 | PASS | p. 57: "including the test steps that detected the anomaly"; "Expected results and actual results". |
| 29 | intern-008 | Proof such as a screenshot, a recording or a log | S1 #page=57 | PASS | p. 57: "any relevant test logs, database dumps, screenshots, or recordings". |
| 30 | intern-008 | Severity (the impact) and the priority to fix | S1 #page=57 | PASS | p. 57: "Severity of the defect (degree of impact) on the interests of stakeholders or requirements"; "Priority to fix". |
| 31 | intern-008 | "lets a developer fix the bug without asking me questions"; "I suggest the priority"; check that I can repeat it | - | OPINION-OK | Practice. Consistent with p. 56: "Provide those responsible for handling and resolving reported defects with sufficient information to resolve the issue". |

Open FAILs: 0
