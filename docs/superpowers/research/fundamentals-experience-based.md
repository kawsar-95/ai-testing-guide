# Fundamentals: Experience-Based Techniques (research notes)

Chapter 8, slug `experience-based`. Check date: 2026-10-20. Source of the owner text: `fundamentals-owner-notes.md`, "Experienced based testing techniques", "Generic checklist for blackbox testing", "Generic checklist for whitebox testing".

## Sources

The S-numbers are the numbers of `page.sources` in `content/fundamentals/experience-based.mdx`, in order of first cite. The ID in brackets is the ID in `fundamentals-sources.md`.

| S | Source | URL |
|---|---|---|
| S1 | Certified Tester Foundation Level Syllabus v4.0.1 (sections 4.1, 4.3, 4.4.1, 4.4.2, 4.4.3) [S1] | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf |
| S2 | ISTQB Glossary: error guessing [S46] | https://glossary.istqb.org/en_US/term/error-guessing |
| S3 | ISTQB Glossary: exploratory testing [S24] | https://glossary.istqb.org/en_US/term/exploratory-testing |
| S4 | ISTQB Glossary: test charter [S48] | https://glossary.istqb.org/en_US/term/test-charter |
| S5 | ISTQB Glossary: checklist-based testing [S47] | https://glossary.istqb.org/en_US/term/checklist-based-testing |

## Topic 1: Error Guessing

| Claim | Source | Quote |
|---|---|---|
| ISTQB sorts test techniques into black-box, white-box, and experience-based | S1 4.1 | "test techniques are classified as black-box, white-box, and experience-based" |
| Experience-based techniques use the knowledge and experience of testers; their effect depends on the tester's skill | S1 4.1 | "The effectiveness of these test techniques depends heavily on the tester's skills." |
| They can find defects that black-box and white-box techniques miss, so they complement them | S1 4.1 | "can detect defects that may be missed using the black-box test techniques and white-box test techniques" |
| The syllabus names three experience-based techniques | S1 4.4 | "Error guessing / Exploratory testing / Checklist-based testing" |
| Error guessing anticipates errors, defects, and failures from the tester's knowledge | S1 4.4.1 | "used to anticipate the occurrence of errors, defects, and failures" |
| Glossary: error guessing is based on knowledge of past failures or failure modes | S2 | "tests conditions are based on the tester's knowledge of past failures or failure modes" |
| Three knowledge bases: past behavior of the application, typical developer errors and resulting defects, failures in similar applications | S1 4.4.1 | "How the application has worked in the past" / "failures that have occurred in other, similar applications" |
| Six areas: input, output, logic, computation, interfaces, data (with examples) | S1 4.4.1 | "input (e.g., correct input not accepted, parameters wrong or missing), output (e.g., wrong format, wrong result)..." |
| Fault attacks are a way to implement error guessing | S1 4.4.1 | "Fault attacks are a way to implement error guessing." |
| The tester creates or gets a list of possible errors, defects, failures, and designs tests that find the defects, expose them, or cause the failures | S1 4.4.1 | "create or acquire a list of possible errors, defects and failures" |
| The lists come from experience, defect and failure data, or common knowledge about why software fails | S1 4.4.1 | "built based on experience, defect and failure data, or from common knowledge about why software fails" |

## Topic 2: Exploratory Testing

| Claim | Source | Quote |
|---|---|---|
| Tests are designed, executed, and evaluated at the same time, while the tester learns about the test object | S1 4.4.2 | "tests are simultaneously designed, executed, and evaluated while the tester learns about the test object" |
| Glossary: a test approach with tests designed and run dynamically from knowledge, exploration of the test item, and earlier results | S3 | "dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results" |
| Three aims: learn more about the test object, explore it deeper with focused tests, create tests for untested areas | S1 4.4.2 | "to learn more about the test object, to explore it more deeply with focused tests, and to create tests for untested areas" |
| Session-based testing structures exploratory testing: a defined time box | S1 4.4.2 | "performed within a defined time box" |
| The tester uses a test charter with test objectives | S1 4.4.2 | "uses a test charter containing test objectives to guide the testing" |
| Glossary: a test charter is a mission statement that guides an exploratory session | S4 | "A mission statement that guides an exploratory test session." |
| A debriefing follows: a talk between the tester and interested stakeholders | S1 4.4.2 | "followed by a debriefing that involves a discussion between the tester and stakeholders" |
| Test session sheets document the steps and the discoveries | S1 4.4.2 | "may use test session sheets to document the steps followed and the discoveries made" |
| Test objectives may be high-level test conditions; coverage items are identified and exercised in the session | S1 4.4.2 | "test objectives may be treated as high-level test conditions. Coverage items are identified and exercised" |
| Useful with few or inadequate specifications, or under time pressure; also complements formal techniques | S1 4.4.2 | "useful when there are few or inadequate specifications or there is significant time pressure" |
| More effective if the tester is experienced, has domain knowledge, and has essential skills: analytical skills, curiosity, creativeness | S1 4.4.2 | "more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills" |
| It can use other test techniques, for example equivalence partitioning | S1 4.4.2 | "can incorporate the use of other test techniques (e.g., equivalence partitioning)" |

## Topic 3: Checklist-Based Testing

| Claim | Source | Quote |
|---|---|---|
| The tester designs, implements, and executes tests to cover test conditions from a checklist | S1 4.4.3 | "a tester designs, implements, and executes tests to cover test conditions from a checklist" |
| Glossary: an experience-based technique with test cases that exercise the items of a checklist | S5 | "test cases are designed to exercise the items of a checklist" |
| Checklists come from experience, knowledge of what matters to the user, or understanding of why and how software fails | S1 4.4.3 | "built based on experience, knowledge about what is important for the user, or an understanding of why and how software fails" |
| A checklist should not hold items that can be checked automatically, items better suited as entry or exit criteria, or items that are too general | S1 4.4.3 | "should not contain items that can be checked automatically, items better suited as entry criteria, exit criteria, or items that are too general" |
| Items are often questions (a description, not a rule) | S1 4.4.3 | "Checklist items are often phrased in the form of a question." |
| Each item should be checkable separately and directly | S1 4.4.3 | "It should be possible to check each item separately and directly." |
| Items may refer to requirements, graphical interface properties, quality characteristics, or other test conditions | S1 4.4.3 | "may refer to requirements, graphical interface properties, quality characteristics or other forms of test conditions" |
| Checklists can support functional and non-functional test types (example: 10 heuristics for usability testing) | S1 4.4.3 | "Checklists can be created to support various test types, including functional and non-functional testing" |
| Entries can lose effect over time because developers learn to avoid the errors | S1 4.4.3 | "may gradually become less effective over time because the developers will learn to avoid making the same errors" |
| Add entries for newly found high-severity defects; update by defect analysis; do not let the list grow too long | S1 4.4.3 | "regularly updated based on defect analysis" / "avoid letting the checklist become too long" |
| Without detailed test cases, a checklist gives guidelines and some consistency | S1 4.4.3 | "In the absence of detailed test cases, checklist-based testing can provide guidelines and some degree of consistency" |
| A high-level checklist gives more variety: potentially more coverage, less repeatability | S1 4.4.3 | "some variability ... potentially greater coverage but less repeatability" |

## Topic 4: Black-Box Checklist

The owner list is the tutorial's own. ISTQB has no black-box checklist. Cited claims:

| Claim | Source | Quote |
|---|---|---|
| Black-box techniques use the specified behavior, without reference to the internal structure | S1 4.1 | "based on an analysis of the specified behavior of the test object without reference to its internal structure" |
| Checklist items may refer to GUI properties and quality characteristics (the link to black-box questions is the tutorial's own view, in a callout) | S1 4.4.3 | see topic 3 |
| Guidance for items: a checklist should not contain automatable items, items better suited as entry or exit criteria, or items that are too general; each item should be checkable separately ("should", not "must") | S1 4.4.3 | see topic 3 |

The order of use ("after your black-box test cases") and "use it with the specification" are the tutorial's own advice, in callouts, with no Cite.
| Experience-based techniques complement black-box techniques | S1 4.1 | see topic 1 |

## Topic 5: White-Box Checklist

The owner list is the tutorial's own. ISTQB has no white-box checklist. Cited claims:

| Claim | Source | Quote |
|---|---|---|
| White-box techniques use the internal structure and processing of the test object | S1 4.1 | "based on an analysis of the test object's internal structure and processing" |
| The syllabus covers two white-box techniques: statement testing and branch testing | S1 4.3 | "focuses on two code-related white-box test techniques: Statement testing / Branch testing" |
| Other, more rigorous white-box techniques are not discussed in the syllabus | S1 4.3 | "These techniques are not discussed in this syllabus." |
| Statement coverage = statements exercised / executable statements | S1 4.3.1 | "number of statements exercised by the test cases divided by the total number of executable statements" |
| 100% statement coverage can miss data-dependent defects and does not test all decision logic | S1 4.3.1 | "may not detect defects that are data dependent" |
| Branch coverage = branches exercised / all branches; conditional branches match decision outcomes | S1 4.3.2 | "number of branches exercised by the test cases divided by the total number of branches" |
| Branch coverage subsumes statement coverage | S1 4.3.2 | "Branch coverage subsumes statement coverage." |
| White-box testing may miss defects of omission | S1 4.3.3 | "white-box testing may not detect the resulting defects of omission" |
| A checklist should not contain items that are too general (see topic 3) | S1 4.4.3 | see topic 3 |

The link between null, empty, and boundary questions and data-dependent defects, and the advice to use the list with the black-box checklist and the specification, are the tutorial's own, in a callout, with no Cite.

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| Written-format table of "Checklist-Based Testing": item 8 "Does the website load within acceptable time (<3 sec)?" and item 10 "Is payment data securely transmitted using HTTPS?" | S1 4.4.3: checklists "should not contain items that can be checked automatically" | yes (warning, in the topic "Checklist-Based Testing") |
| Same table: items 1, 4, and 9 ("Can a user register and login successfully?", "Does the checkout and payment process complete successfully?", "Can the system handle multiple users without crashing?") | S1 4.4.3: checklists should not contain items "that are too general" | merged into the same callout |
| Error guessing and exploratory testing text | Matches S1 4.4.1 and 4.4.2 (the owner text follows the syllabus) | no |
| "Generic checklist for blackbox testing" and "for whitebox testing" | No ISTQB source for the lists. They are generic and high-level. S1 4.4.3 allows high-level checklists (more variety, less repeatability) | no (the `istqb` block marks them as the tutorial's own) |
| "Are individual conditions inside complex logic tested correctly?" (white-box list) | CTFL v4 covers statement and branch testing only (S1 4.3). This is a checklist question, not a claim | no (named in the `istqb` block) |
