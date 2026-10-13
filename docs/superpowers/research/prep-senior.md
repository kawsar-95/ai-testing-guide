# Prep: Senior — research notes (2026-10-13)

Area: `senior` (kind `qa`, 8 items).

## Sources
S1. ISTQB Certified Tester Foundation Level Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-10-13 (full PDF downloaded and read as text; page numbers are PDF pages, and the footer of page N says "Page N of 78")
S2. ISTQB Glossary — ISTQB — https://glossary.istqb.org/en_US/term/<slug> — accessed 2026-10-13. The glossary pages are rendered in the browser. The definitions were read from the glossary's own data service, `https://api.glossary.istqb.org/v1/terms/<slug>` (field `definition`; every term used here has `old_version: false`). The page of a term shows the same text.
S3. Pact Docs, Introduction — Pact Foundation (SmartBear) — https://docs.pact.io/ — accessed 2026-10-13

`senior-004` (mentoring) and `senior-008` (influence without authority) are advice in the first person. They state no fact about testing, so they have no `source` and no claim rows.

The decisions in `senior-003` (criteria, proof of concept) and in `senior-002` (the cost against the manual time) are the speaker's own method. Only the risks of tools and the benefits of automation are facts, and they have rows.

Item `source` pages (the page that holds the main claim of the item; the other pages are in the rows below):
- `senior-001`: https://glossary.istqb.org/en_US/term/test-strategy — Glossary term `test strategy`. The context factors are on p. 19 and p. 20, the risk factors on p. 52, the pyramid on p. 51.
- `senior-002`: https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf#page=59 — p. 59 (the tool effort and the first benefits). The last benefit and the risks are on p. 60.
- `senior-003`: https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf#page=60 — p. 60 (the tool risks).
- `senior-005`: https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf#page=30 — p. 30 (the list of characteristics and the notes on early start and environments). The definition and the ISO 25010 sentence are on p. 29.
- `senior-006`: https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf#page=49 — p. 49 (exit criteria).
- `senior-007`: https://docs.pact.io/ — Pact introduction page. The slower-top-layer sentence is on p. 51 of the syllabus.

## Claims
| # | Item id | Claim | Exact short quote | Source |
|---|---|---|---|---|
| C1 | senior-001 | A test strategy describes how to perform testing to reach the test objectives under given circumstances. | "A description of how to perform testing to reach test objectives under given circumstances." (term `test-strategy`) | S2 |
| C2 | senior-001 | Contextual factors (stakeholders, team members, business domain, technical factors, project constraints) affect the test strategy. | "Stakeholders (needs, expectations"; "Team members (skills, knowledge"; "Business domain (criticality"; "Technical factors (type of software"; "Project constraints (scope, time, budget" (p. 19) | S1 |
| C3 | senior-001 | Tools are a contextual factor, and the factors impact the test strategy. | "Tools (availability, usability, compliance"; "These factors will have an impact on many test-related issues, including: test strategy" (p. 20) | S1 |
| C4 | senior-001 | A risk is rated by likelihood and impact. | "Risk likelihood – the probability of the risk occurrence"; "Risk impact (harm) – the consequences of this occurrence" (p. 52) | S1 |
| C5 | senior-001 | The pyramid has many small, fast tests at the bottom and a few broad tests at the top. | "Tests in the bottom layer are small, isolated, fast, and check a small piece of functionality, so usually a lot of them are needed to achieve a reasonable coverage."; "they typically check a large piece of functionality, so usually just a few of them are needed" (p. 51) | S1 |
| C6 | senior-002 | A tool needs effort for introduction, maintenance and training. | "Simply acquiring a tool does not guarantee success."; "Each new tool will require effort to achieve real and lasting benefits (e.g., for tool introduction, maintenance and training)." (p. 59) | S1 |
| C7 | senior-002 | Benefit: time saved on repetitive manual work. | "Time saved by reducing repetitive manual work" (p. 59) | S1 |
| C8 | senior-002 | Benefit: consistency and repeatability. | "Prevention of simple human errors through greater consistency and repeatability" (p. 59) | S1 |
| C9 | senior-002 | Benefit: shorter execution times, earlier defect detection and faster feedback. | "Reduced test execution times to provide earlier defect detection, faster feedback and faster time to market" (p. 59) | S1 |
| C10 | senior-002 | Benefit: more time for testers to design deeper tests. | "More time for testers to design new, deeper and more effective tests" (p. 60) | S1 |
| C11 | senior-002 | Risk: unrealistic expectations. | "Unrealistic expectations about the benefits of a tool" (p. 60) | S1 |
| C12 | senior-002 | Risk: wrong estimates of time, cost and effort to introduce a tool and maintain scripts. | "Inaccurate estimations of time, costs, effort required to introduce a tool, maintain test scripts" (p. 60) | S1 |
| C13 | senior-002 | Risk: using a tool when manual testing is more appropriate, and relying on it too much. | "Using a test tool when manual testing is more appropriate."; "Relying on a tool too much" (p. 60) | S1 |
| C14 | senior-003 | Risk: the tool is not compatible with the development platform. | "The automation tool is not compatible with the development platform." (p. 60) | S1 |
| C15 | senior-003 | Risk: an open-source tool may be abandoned. | "Using an open-source software which may be abandoned, meaning that no further updates are available" (p. 60) | S1 |
| C16 | senior-003 | Risk: a vendor may go out of business, retire the tool or give poor support. | "The dependency on the tool vendor which may go out of business, retire the tool, sell the tool to a different vendor or provide poor support" (p. 60) | S1 |
| C17 | senior-005 | Non-functional testing is the testing of how well the system behaves. | "Non-functional testing is the testing of “how well the system behaves”." (p. 29) | S1 |
| C18 | senior-005 | ISO/IEC 25010 classifies the non-functional quality characteristics. | "The ISO/IEC 25010 standard provides the following classification of the non-functional quality characteristics:" (p. 29) | S1 |
| C19 | senior-005 | The characteristics: performance efficiency, compatibility, usability, reliability, security, maintainability, portability, safety. | "Performance efficiency"; "Compatibility"; "Usability (also known as interaction capability)"; "Reliability"; "Security"; "Maintainability"; "Portability (also known as flexibility)"; "Safety" (p. 30) | S1 |
| C20 | senior-005 | Non-functional testing can start early, for example in reviews or component testing. | "It is sometimes appropriate for non-functional testing to start early in the SDLC (e.g., as part of reviews or component testing)." (p. 30) | S1 |
| C21 | senior-005 | Many non-functional tests are derived from functional tests and check a constraint such as a time limit. | "Many non-functional tests are derived from functional tests as they use the same functional tests, but check that while performing the function, a non-functional constraint is satisfied (e.g., checking that a function performs within a specified time" (p. 30) | S1 |
| C22 | senior-005 | Late discovery of non-functional defects can seriously threaten a project. | "The late discovery of non-functional defects can pose a serious threat to the success of a project." (p. 30) | S1 |
| C23 | senior-005 | Some non-functional tests need a very specific test environment, such as a usability lab. | "Non-functional testing sometimes needs a very specific test environment, such as a usability lab for usability testing." (p. 30) | S1 |
| C24 | senior-006 | Exit criteria are the conditions for completing an activity. | "Exit criteria define what must be achieved to declare an activity completed." (p. 49) | S1 |
| C25 | senior-006 | Exit criteria are measures of thoroughness or yes/no items. | "measures of thoroughness (e.g., achieved level of coverage, number of unresolved defects, defect density, number of failed test cases)"; "binary "yes/no" criteria (e.g., planned tests have been executed, static testing has been performed, all defects found are reported" (p. 49) | S1 |
| C26 | senior-006 | In Agile development, exit criteria are often called Definition of Done. | "In Agile software development, exit criteria are often called Definition of Done" (p. 49) | S1 |
| C27 | senior-006 | When time or budget runs out, going live with less testing can be acceptable if the stakeholders accepted the risk. | "Running out of time or budget can also be viewed as valid exit criteria."; "if the stakeholders have reviewed and accepted the risk to go live without further testing" (p. 49) | S1 |
| C28 | senior-007 | Contract testing checks each application in isolation against a shared contract. | "checking each application in isolation to ensure the messages it sends or receives conform to a shared understanding that is documented in a "contract"" (page text) | S3 |
| C29 | senior-007 | A contract is between a consumer and a provider. | "a contract is between a consumer (for example, a client that wants to receive some data) and a provider (for example, an API on a server that provides the data the client needs)" (page text) | S3 |
| C30 | senior-007 | Pact confirms that applications work together without deploying everything first. | "allowing you to safely confirm that your applications will work together without having to deploy the world first" (page text) | S3 |
| C31 | senior-007 | Contract testing applies wherever two services need to communicate. | "Contract testing is immediately applicable anywhere where you have two services that need to communicate" (page text) | S3 |
| C32 | senior-007 | Top-layer tests are generally slower than lower-layer tests. | "These high-level tests are generally slower than the tests from the lower layers" (p. 51) | S1 |
