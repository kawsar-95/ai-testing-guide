# Prep: Intern — research notes (2026-10-13)

Area: `intern` (kind `qa`, 8 items).

## Sources
S1. ISTQB Certified Tester Foundation Level Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-10-13 (full PDF read as text; page numbers are PDF pages)
S2. ISTQB Glossary — ISTQB — https://glossary.istqb.org/en_US/term/<slug> — accessed 2026-10-13. The glossary pages are rendered in the browser, and the fetch tool returned an empty page. The definitions were read from the glossary's own data service, `https://api.glossary.istqb.org/v1/terms/<slug>` (field `definition`). The page of a term shows the same text.

Terms that the glossary does not define (the data service returned "404 Not Found" for `test-scenario` and `sanity-testing`): "test scenario", "sanity testing". No item states a fact about these two terms. `intern-004` and `intern-007` give the answer as the candidate's own working definition and advise the reader to ask what the team means.

## Claims
| # | Item id | Claim | Exact short quote | Source |
|---|---|---|---|---|
| C1 | intern-001 | Software testing is a set of activities to discover defects and evaluate the quality of software work products. | "Software testing is a set of activities to discover defects and evaluate the quality of software work products." (p. 15) | S1 |
| C2 | intern-001 | Testing is a cost-effective way to detect defects. | "Testing provides a cost-effective means of detecting defects." (p. 16) | S1 |
| C3 | intern-001 | Testing and debugging are separate activities. | "Testing and debugging are separate activities." (p. 16) | S1 |
| C4 | intern-002 | Verification confirms that a work product fulfills its specification. | "The process of confirming that a work product fulfills its specification." (term `verification`) | S2 |
| C5 | intern-002 | Validation confirms that a work product matches the needs of a stakeholder. | "Confirmation by examination that a work product matches a stakeholder's needs." (term `validation`) | S2 |
| C6 | intern-003 | Severity is the degree of impact of a defect. | "The degree of impact that a defect has on the development, testing or operation of a component or system." (term `severity`) | S2 |
| C7 | intern-003 | Priority is the level of importance assigned to a task. | "The level of importance assigned to a task according to specific criteria." (term `priority`) | S2 |
| C8 | intern-004 | A test case has preconditions, inputs, actions, expected results and postconditions. | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." (term `test case`) | S2 |
| C9 | intern-005 | A defect workflow goes from the log of the anomaly, through analysis and classification, and a decision to fix or keep, to the closing of the report. | "The workflow typically comprises activities to log the reported anomalies, analyze and classify them, decide on a suitable response such as to fix or keep it as it is and finally to close the defect report." (p. 56) | S1 |
| C10 | intern-005 | Example defect statuses: open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected. | "Status of the defect (e.g., open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected)" (p. 57) | S1 |
| C11 | intern-005 | Confirmation testing confirms that an original defect is fixed. | "Confirmation testing confirms that an original defect has been successfully fixed." (p. 30) | S1 |
| C12 | intern-006 | Black-box techniques are based on the specified behavior, without reference to the internal structure. | "Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure." (p. 39) | S1 |
| C13 | intern-006 | White-box techniques are based on the internal structure and processing. | "White-box test techniques (also known as structure-based techniques) are based on an analysis of the test object’s internal structure and processing." (p. 39) | S1 |
| C14 | intern-007 | Smoke testing gives enough confidence that a test object is ready for planned testing. | "A test type to gain sufficient confidence that a test object is ready for planned testing." (term `smoke testing`) | S2 |
| C15 | intern-008 | A defect report has a title with a short summary. | "Title with a short summary of the anomaly being reported" (p. 57) | S1 |
| C16 | intern-008 | A defect report describes the failure with the steps, logs, screenshots or recordings. | "Description of the failure to enable reproduction and resolution including the test steps that detected the anomaly, and any relevant test logs, database dumps, screenshots, or recordings" (p. 57) | S1 |
| C17 | intern-008 | A defect report has the expected results and the actual results. | "Expected results and actual results" (p. 57) | S1 |
| C18 | intern-008 | A defect report has the severity and the priority to fix. | "Severity of the defect (degree of impact) on the interests of stakeholders or requirements"; "Priority to fix" (p. 57) | S1 |
| C19 | intern-008 | A defect report names the test object and the test environment. | "Identification of the test object and test environment" (p. 57) | S1 |
