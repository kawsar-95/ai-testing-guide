# Fundamentals: Defects and the 7 Principles (research notes)

Chapter: `content/fundamentals/defects-principles.mdx`. Check date: 2026-10-20.
Syllabus text read: `~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`, sections 1.1.2, 1.2.3, 1.3, 1.4.2.

## Sources (numbers as in `page.sources`)

| N | Source | URL | Master ID in `fundamentals-sources.md` |
|---|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf | S1 |
| 2 | ISTQB Glossary: error | https://glossary.istqb.org/en_US/term/error | S8 |
| 3 | ISTQB Glossary: defect | https://glossary.istqb.org/en_US/term/defect | S9 |
| 4 | ISTQB Glossary: failure | https://glossary.istqb.org/en_US/term/failure | S10 |
| 5 | ISTQB Glossary: root cause | https://glossary.istqb.org/en_US/term/root-cause | S11 |
| 6 | ISTQB Glossary: shift left | https://glossary.istqb.org/en_US/term/shift-left | S58 |
| 7 | ISTQB Glossary: regression testing | https://glossary.istqb.org/en_US/term/regression-testing | S22 |
| 8 | ISTQB Glossary: verification | https://glossary.istqb.org/en_US/term/verification | S6 |
| 9 | ISTQB Glossary: validation | https://glossary.istqb.org/en_US/term/validation | S7 |

## Error, Defect, Bug and Failure

| Claim | Source | Quote |
|---|---|---|
| Errors produce defects, defects may result in failures | 1 (1.2.3) | "Human beings make errors (mistakes), which produce defects (faults, bugs), which in turn may result in failures." |
| Examples of causes of human error (the page says "examples", not a full list) | 1 (1.2.3) | "time pressure, complexity of work products, processes, infrastructure or interactions, or simply because they are tired or lack adequate training" |
| Error definition | 2 | "A human action that results in a defect." |
| Defect definition; bug is a synonym | 3 | "An imperfection or deficiency in a work product where it does not meet its requirements or specifications or impairs its intended use." Synonyms: bug, fault, flaw. |
| Failure definition | 4 | "An event in which a component or system does not meet its requirements within specified limits during its execution." |
| Where defects live | 1 (1.2.3) | "in documentation, such as a requirements specification or a test script, in source code, or in a supporting work product such as a build file" |
| Early defects spread | 1 (1.2.3) | "Defects in work products produced earlier in the SDLC, if undetected, often lead to defective work products later" |
| Defect to failure is not certain | 1 (1.2.3) | "Some defects will always result in a failure if executed, while others will only result in a failure in specific circumstances, and some may never result in a failure." |
| Other causes of failure | 1 (1.2.3) | "Failures can also be caused by environmental conditions, such as when radiation or electromagnetic fields cause defects in firmware." |
| Root cause definition | 5 | "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed." |
| Root cause analysis is usually done at a failure or a found defect (page says "usually" for "typically") | 1 (1.2.3) | "typically performed when a failure occurs or a defect is identified" |
| Testing and debugging are separate | 1 (1.1.2) | "Testing and debugging are separate activities." |
| Debugging process | 1 (1.1.2) | "Reproduction of a failure", "Diagnosis (finding the defect)", "Fixing the defect" |

## Testing Shows the Presence of Defects

| Claim | Source | Quote |
|---|---|---|
| Testing shows presence, cannot prove absence | 1 (1.3) | "Testing can show that defects are present in the test object, but cannot prove that there are no defects" |
| Testing lowers the chance of hidden defects | 1 (1.3) | "Testing reduces the probability of defects remaining undiscovered in the test object" |
| No defects found is not proof of correctness | 1 (1.3) | "even if no defects are found, testing cannot prove test object correctness" |

## Exhaustive Testing Is Impossible

| Claim | Source | Quote |
|---|---|---|
| Testing everything is not feasible except in trivial cases | 1 (1.3) | "Testing everything is not feasible except in trivial cases" |
| Use techniques, prioritization, and risk-based testing to focus | 1 (1.3) | "test techniques ..., test case prioritization ..., and risk-based testing ..., should be used to focus test efforts" |

The page words this principle in its own words, not as the syllabus sentence. The password example (62 symbols, 8 characters, 62^8 = 218,340,105,584,896) is the tutorial's own arithmetic. It has no Cite.

## Early Testing Saves Time and Money

| Claim | Source | Quote |
|---|---|---|
| Early removal prevents later defects | 1 (1.3) | "Defects that are removed early in the process will not cause subsequent defects in derived work products." |
| Fewer late failures lower the cost of quality | 1 (1.3) | "The cost of quality will be reduced since fewer failures will occur later in the SDLC" |
| Start static and dynamic testing early | 1 (1.3) | "both static testing ... and dynamic testing ... should be started as early as possible" |
| Shift left definition | 6 | "A test approach to perform testing and quality assurance activities as early as possible in the software development lifecycle." |

## Defects Cluster Together

| Claim | Source | Quote |
|---|---|---|
| A few components hold most defects, or a few components cause most failures (an "or": the syllabus does not say they are the same components) | 1 (1.3) | "A small number of system components usually contain most of the defects discovered or are responsible for most of the operational failures" |
| It is an illustration of the Pareto principle | 1 (1.3) | "This phenomenon is an illustration of the Pareto principle." |
| Clusters are an input for risk-based testing | 1 (1.3) | "an important input for risk-based testing" |

## Tests Wear Out

| Claim | Source | Quote |
|---|---|---|
| Repeated tests become less effective | 1 (1.3) | "If the same tests are repeated many times, they become increasingly ineffective in detecting new defects" |
| Fix: change tests and data, write new tests | 1 (1.3) | "existing tests and test data may need to be modified, and new tests may need to be written" |
| Repeating can be useful, for example in automated regression testing ("can", not "each time") | 1 (1.3) | "in some cases, repeating the same tests can have a beneficial outcome, e.g., in automated regression testing" |
| Regression testing definition. Use: to check whether a change added defects in unchanged areas, repeat the automated regression tests (the page does not say a change "broke nothing", because testing cannot prove that) | 7 | "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." |
| "Pesticide paradox" is not used in v4.0.1 | sources file (term table), 0 hits in S1 | Not a glossary entry. The principle is named "Tests wear out". |

## Testing Is Context Dependent

| Claim | Source | Quote |
|---|---|---|
| No single approach fits all contexts | 1 (1.3) | "There is no single universally applicable approach to testing. Testing is done differently in different contexts" |
| Context factors | 1 (1.4.2) | "Stakeholders", "Team members", "Business domain (criticality of the test object, identified risks, ...)", "Technical factors", "Project constraints", "Tools" |
| Context factors affect test strategy, techniques, automation, coverage, testware, reporting | 1 (1.4.2) | "test strategy, test techniques used, degree of test automation, required level of coverage, level of detail of testware, test reporting" |

The banking and gaming comparison is the tutorial's own example. It has no Cite.

## Absence-of-Defects Fallacy

| Claim | Source | Quote |
|---|---|---|
| The fallacy: verification alone does not ensure success | 1 (1.3) | "It is a fallacy (i.e., a misconception) to expect that software verification will ensure the success of a system." |
| A defect-free system can still fail users | 1 (1.3) | "could still produce a system that does not fulfill the users' needs and expectations, ... and that is inferior compared to other competing systems" |
| Add validation | 1 (1.3) | "In addition to verification, validation should also be carried out" |
| Verification definition | 8 | "The process of confirming that a work product fulfills its specification." |
| Validation definition | 9 | "Confirmation by examination that a work product matches a stakeholder's needs." |
| "Absence-of-errors fallacy" is not used in v4.0.1 | sources file (term table) | Not a glossary entry. The principle is named "Absence-of-defects fallacy". |

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "Bug: If a defect is caught by executing the test object and accepted by developer, then this is called bug." | Glossary: "bug" is a synonym of "defect". Syllabus 1.2.3: "defects (faults, bugs)". | yes |
| "if the end user is not satisfied or found issues in the software, that is the ultimate failure." | Glossary: failure is "An event in which a component or system does not meet its requirements ... during its execution." | yes |
| "Failure is the observable outcome of the bug when the software is executed in an operational environment" | Syllabus 1.2.3: "If a defect in code is executed, the system may fail". Any execution can cause a failure, also in a test environment. | no (mild; the owner line is not wrong, only narrower) |
| Heading "Tests wear out (Pesticide paradox)" | "pesticide paradox" is not in v4.0.1. The principle is "Tests wear out". | yes (a naming conflict on the first line) |
| Heading "Absence-of-errors fallacy" | v4.0.1 name: "Absence-of-defects fallacy". | yes |
| "Failures can also be caused by environmental conditions, such as hardware or low quality elements." | Syllabus 1.2.3 gives radiation and electromagnetic fields as examples. | no (same idea) |
| "70% of bugs come from payment and checkout modules" | The syllabus gives no figure. | no (an example, not a claim about ISTQB) |

Owner text fixes (spelling and formatting only): the "Meaning" and "Example" lines of each principle are split into two paragraphs (the notes join them into one paragraph in Markdown). The plural "7 Testing principal" is a chapter-level label in the notes and is not on this page. The owner's word forms ("can not", "By any types of error") are kept as written.

## Fix round 1 notes

- The terms table has the header "Example (the tutorial's own)". The examples form one chain: the transfer limit is misread as 10,000 (error), the code checks 10,000 (defect), a user transfers 5,000 and the system accepts it (failure). These examples have no Cite.
- The failure warning callout also covers "executed in an operational environment" (syllabus 1.1.2: dynamic testing triggers failures, so failures also occur in a test environment).
- The error, verification, and validation rows do not copy the glossary words except for one quoted glossary sentence (error). Verification: "Checking that a work product meets its specification". Validation: "Checking by examination that a work product fits what a stakeholder needs".
- Word runs of 9 or more words shared with the syllabus text: none after the fix (checked by script).
