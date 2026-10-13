# Prep: MCQ Test — research notes (2026-10-13)

Area: `mcq-test` (kind `mcq`, 12 items). Every item has a `source`.

## Sources
S1. ISTQB Certified Tester Foundation Level Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-10-13 (full PDF read as text; page numbers are PDF pages; an item links to the page with `#page=N`)
S2. ISTQB Glossary — ISTQB — https://glossary.istqb.org/en_US/term/<slug> — accessed 2026-10-13. The glossary pages are rendered in the browser, and the fetch tool returned an empty page. The definitions were read from the glossary's data service (field `definition`). The terms used, with the item `source` page and the data service URL of each:
- `severity`: https://glossary.istqb.org/en_US/term/severity, read from https://api.glossary.istqb.org/v1/terms/severity
- `priority`: https://glossary.istqb.org/en_US/term/priority, read from https://api.glossary.istqb.org/v1/terms/priority
- `regression-testing`: https://glossary.istqb.org/en_US/term/regression-testing, read from https://api.glossary.istqb.org/v1/terms/regression-testing
- `smoke-testing`: https://glossary.istqb.org/en_US/term/smoke-testing, read from https://api.glossary.istqb.org/v1/terms/smoke-testing
- `validation`: https://glossary.istqb.org/en_US/term/validation, read from https://api.glossary.istqb.org/v1/terms/validation
- `verification`: https://glossary.istqb.org/en_US/term/verification, read from https://api.glossary.istqb.org/v1/terms/verification

About the field `current` in the data service: all of these terms have `current: false`. This field does not mark an outdated definition. The glossary site shows "Outdated version" only when `old_version` is true, and all 6 terms have `old_version: false`.
S3. MDN Web Docs, HTTP 403 Forbidden — Mozilla (developer.mozilla.org) — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403 — accessed 2026-10-13 (the quotes are the text of the page and its meta description)

## Claims
| # | Item id | Claim | Exact short quote | Source |
|---|---|---|---|---|
| C1 | mcq-test-001 | The principle "Tests wear out": repeated tests become less effective at finding new defects. | "If the same tests are repeated many times, they become increasingly ineffective in detecting new defects" (p. 18) | S1 |
| C1b | mcq-test-001 | The principle "Tests wear out": the team may need to change tests and test data, and write new tests. | "existing tests and test data may need to be modified, and new tests may need to be written" (p. 18) | S1 |
| C2 | mcq-test-002 | Component integration testing focuses on the interfaces and interactions between components. | "Component integration testing (also known as unit integration testing) focuses on testing the interfaces and interactions between components." (p. 29) | S1 |
| C3 | mcq-test-002 | Component testing (unit testing) tests components in isolation. | "Component testing (also known as unit testing) focuses on testing components in isolation." (p. 29) | S1 |
| C4 | mcq-test-003 | Equivalence partitioning needs each partition, valid and invalid, covered at least once. | "test cases must exercise all identified partitions (including invalid partitions) by covering each partition at least once" (p. 40) | S1 |
| C5 | mcq-test-003 | In EP one test for each partition is sufficient. | "Therefore, one test for each partition is sufficient." (p. 39) | S1 |
| C6 | mcq-test-004 | 2-value BVA uses the boundary value and its closest neighbor in the adjacent partition. | "for each boundary value there are two coverage items: this boundary value and its closest neighbor belonging to the adjacent partition" (p. 40) | S1 |
| C7 | mcq-test-004 | 3-value BVA uses the boundary value and both of its neighbors. | "for each boundary value there are three coverage items: this boundary value and both its neighbors" (p. 40) | S1 |
| C8 | mcq-test-005 | Severity is the degree of impact of a defect. | "The degree of impact that a defect has on the development, testing or operation of a component or system." (term `severity`) | S2 |
| C9 | mcq-test-005 | Priority is the level of importance assigned to a task. | "The level of importance assigned to a task according to specific criteria." (term `priority`) | S2 |
| C10 | mcq-test-006 | Regression testing detects defects introduced or uncovered in unchanged areas. | "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." (term `regression testing`) | S2 |
| C11 | mcq-test-006 | Confirmation testing confirms that an original defect is fixed (not regression testing). | "Confirmation testing confirms that an original defect has been successfully fixed." (p. 30) | S1 |
| C12 | mcq-test-007 | Exit criteria define what must be achieved to declare an activity completed. | "Exit criteria define what must be achieved to declare an activity completed." (p. 49) | S1 |
| C13 | mcq-test-007 | "Planned tests have been executed" is a typical exit criterion. | "binary “yes/no” criteria (e.g., planned tests have been executed" (p. 49) | S1 |
| C14 | mcq-test-007 | Entry criteria define the preconditions for an activity, and availability of test data is a typical entry criterion. | "Entry criteria define the preconditions for undertaking a given activity."; "availability of resources (e.g., people, tools, environments, test data, budget, time)" (p. 49) | S1 |
| C14b | mcq-test-007 | Availability of testware, which includes testable requirements, is a typical entry criterion. | "availability of testware (e.g., test basis, testable requirements, user stories, test cases)" (p. 49) | S1 |
| C15 | mcq-test-007 | "All smoke tests have passed" is given as an entry criterion example. | "initial quality level of a test object (e.g., all smoke tests have passed)" (p. 49) | S1 |
| C16 | mcq-test-008 | 403 means the server understood the request but refused to process it. | "indicates that the server understood the request but refused to process it." | S3 |
| C17 | mcq-test-008 | For 403, authenticating again makes no difference. | "for 403 Forbidden responses, authenticating or re-authenticating makes no difference." | S3 |
| C17b | mcq-test-008 | The 403 failure is tied to application logic, such as insufficient permissions. | "The request failure is tied to application logic, such as insufficient permissions to a resource or action." | S3 |
| C18 | mcq-test-009 | The bottom layer of the test pyramid has small, isolated, fast tests, and a lot of them. | "Tests in the bottom layer are small, isolated, fast, and check a small piece of functionality, so usually a lot of them are needed to achieve a reasonable coverage." (p. 51) | S1 |
| C19 | mcq-test-009 | The top layer has complex end-to-end tests, and a few of them are needed. | "The top layer represents complex, high-level, end-to-end tests."; "usually just a few of them are needed to achieve a reasonable level of coverage" (p. 51) | S1 |
| C20 | mcq-test-010 | Smoke testing gives enough confidence that a test object is ready for planned testing. | "A test type to gain sufficient confidence that a test object is ready for planned testing." (term `smoke testing`) | S2 |
| C21 | mcq-test-011 | A defect report has a status, and "awaiting confirmation testing" is one example status. | "Status of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)" (p. 57) | S1 |
| C22 | mcq-test-011 | Confirmation testing confirms that an original defect is fixed. | "Confirmation testing confirms that an original defect has been successfully fixed." (p. 30) | S1 |
| C23 | mcq-test-012 | Validation confirms by examination that a work product matches the needs of a stakeholder. | "Confirmation by examination that a work product matches a stakeholder's needs." (term `validation`) | S2 |
| C24 | mcq-test-012 | Verification confirms that a work product fulfills its specification. | "The process of confirming that a work product fulfills its specification." (term `verification`) | S2 |
