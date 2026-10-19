# Fact-check: Defects and the 7 Principles (`defects-principles`)

| Field | Value |
|---|---|
| Chapter | 2, `content/fundamentals/defects-principles.mdx` (round 1: writer commit 57156cd; round 2: fix commit 21eb3bc) |
| Date | 2026-10-20 |
| Round | 2 (round 1 below, then the round-2 section) |
| Checker | An agent that did not write the chapter |
| Method | Each `<Cite n>` was checked against source n itself: the syllabus text (`~/.cache/fundamentals-istqb/ctfl-v4.0.1.txt`) or the glossary API (`https://api.glossary.istqb.org/v1/terms` and `/v1/terms/<slug>`, read 2026-10-20). Copy check: a script found each word run of 7 or more words that the page shares with the syllabus text. |

## Sources (page.sources)

| n | Source | Checked against |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 | Syllabus text: 1.1.2, 1.2.3, 1.3, 1.4.2 |
| 2 | ISTQB Glossary: error | API: "A human action that results in a defect." Synonyms: mistake |
| 3 | ISTQB Glossary: defect | API: "An imperfection or deficiency in a work product where it does not meet its requirements or specifications or impairs its intended use." Synonyms: bug, fault, flaw |
| 4 | ISTQB Glossary: failure | API: "An event in which a component or system does not meet its requirements within specified limits during its execution." |
| 5 | ISTQB Glossary: root cause | API: "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed." |
| 6 | ISTQB Glossary: shift left | API: "A test approach to perform testing and quality assurance activities as early as possible in the software development lifecycle." |
| 7 | ISTQB Glossary: regression testing | API: "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." |
| 8 | ISTQB Glossary: verification | API: "The process of confirming that a work product fulfills its specification." |
| 9 | ISTQB Glossary: validation | API: "Confirmation by examination that a work product matches a stakeholder's needs." |

The sources are numbered in the order of the first cite. Each source has a cite. Each cite has a source. The URLs agree with `fundamentals-sources.md`.

## Table 1: cited claims

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | Error, Defect… (L51) | Error produces a defect, the defect may cause a failure | 1 | PASS | "Human beings make errors (mistakes), which produce defects (faults, bugs), which in turn may result in failures." (1.2.3) | |
| 2 | Error… (L55) | Error: human action that results in a defect; also "mistake" | 2 | PASS | "A human action that results in a defect." Synonym: mistake | |
| 3 | Error… (L56) | Defect: imperfection in a work product, does not meet requirements or impairs intended use | 3 | PASS | "An imperfection or deficiency in a work product where it does not meet its requirements or specifications or impairs its intended use." | Shortened, meaning kept |
| 4 | Error… (L57) | Failure: event, component or system does not meet requirements while it runs | 4 | PASS | "An event in which a component or system does not meet its requirements within specified limits during its execution." | |
| 5 | Error… (L58) | Root cause: source of a defect; removal makes the defect type less frequent or gone | 5 | PASS | "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed." | |
| 6 | Error… (L62) | Reasons for errors: time pressure, complexity, tiredness, lack of training | 1 | PASS | "such as time pressure, complexity of work products, processes, infrastructure or interactions, or simply because they are tired or lack adequate training" (1.2.3) | "interactions" is left out. See review. |
| 7 | Error… (L66) | Defects in documents, source code, build files | 1 | PASS | "Defects can be found in documentation, such as a requirements specification or a test script, in source code, or in a supporting work product such as a build file." (1.2.3) | |
| 8 | Error… (L66) | Early undetected defects often lead to defective later work products | 1 | PASS | "Defects in work products produced earlier in the SDLC, if undetected, often lead to defective work products later in the lifecycle." (1.2.3) | |
| 9 | Error… (L70) | A defect causes a failure only when the code runs | 1 | PASS | "If a defect in code is executed, the system may fail…" (1.2.3); static testing "cannot cause failures" (1.1.2) | "only" is supported by 1.1.2 together with 1.2.3 |
| 10 | Error… (L70) | Some defects always fail, some in specific circumstances, some never | 1 | PASS | "Some defects will always result in a failure if executed, while others will only result in a failure in specific circumstances, and some may never…" (1.2.3) | |
| 11 | Error… (L74) | Environment can cause failures; radiation or EM fields cause defects in firmware | 1 | PASS | "Failures can also be caused by environmental conditions, such as when radiation or electromagnetic fields cause defects in firmware." (1.2.3) | |
| 12 | Error… (L78) | RCA when a failure happens or a defect is found; removal expected to prevent similar defects | 1 | PASS | "typically performed when a failure occurs or a defect is identified. It is believed that further similar failures or defects can be prevented or their frequency reduced" (1.2.3) | "typically" is left out. See review (Minor). |
| 13 | Error… (L82) | Glossary lists bug as a synonym of defect, with fault and flaw | 3 | PASS | API `defect` synonyms: "bug", "fault", "flaw" | |
| 14 | Error… (L82) | Syllabus: "defects (faults, bugs)" | 1 | PASS | "which produce defects (faults, bugs)" (1.2.3) | |
| 15 | Error… (L92) | Testing and debugging are separate; debugging finds, analyzes, removes the cause | 1 | PASS | "Testing and debugging are separate activities." "debugging is concerned with finding causes of this failure (defects), analyzing these causes, and eliminating them." (1.1.2) | |
| 16 | Error… (L92) | Typical debugging steps: reproduce, find the defect, fix | 1 | PASS | "Reproduction of a failure / Diagnosis (finding the defect) / Fixing the defect" (1.1.2) | |
| 17 | Presence of defects (L110) | Testing shows defects are present, cannot prove none | 1 | PASS | "Testing can show that defects are present in the test object, but cannot prove that there are no defects" (1.3) | |
| 18 | Presence of defects (L112) | Lowers the probability of undiscovered defects; no defects found is not proof of correctness | 1 | PASS | "Testing reduces the probability of defects remaining undiscovered… even if no defects are found, testing cannot prove test object correctness." (1.3) | |
| 19 | Exhaustive (L141) | Testing everything is not feasible except in trivial cases | 1 | PASS | "Testing everything is not feasible except in trivial cases" (1.3) | Fact PASS. The sentence is the syllabus sentence word for word (9 words). See the copy check. |
| 20 | Exhaustive (L143) | Techniques, prioritization, risk-based testing focus the effort | 1 | PASS | "test techniques…, test case prioritization…, and risk-based testing…, should be used to focus test efforts." (1.3) | |
| 21 | Early testing (L171) | Early removal prevents later derived defects; fewer late failures lower the cost of quality | 1 | PASS | "Defects that are removed early in the process will not cause subsequent defects in derived work products. The cost of quality will be reduced since fewer failures will occur later" (1.3) | |
| 22 | Early testing (L173) | Start static and dynamic testing as early as possible | 1 | PASS | "both static testing… and dynamic testing… should be started as early as possible." (1.3) | |
| 23 | Early testing (L173) | Shift left: testing and QA activities as early as possible in the life cycle | 6 | PASS | "A test approach to perform testing and quality assurance activities as early as possible in the software development lifecycle." | |
| 24 | Defects cluster (L193) | A few components contain most defects found. "The same few components" often cause most failures in operation | 1 | FAIL | "A small number of system components usually contain most of the defects discovered or are responsible for most of the operational failures" (1.3) | Says more than the source. The source says "or". It does not say that the same components do both. Also a copy-check FAIL (12 words). |
| 25 | Defects cluster (L195) | An illustration of the Pareto principle | 1 | PASS | "This phenomenon is an illustration of the Pareto principle." (1.3) | |
| 26 | Defects cluster (L197) | Predicted and observed clusters are input for risk-based testing | 1 | PASS | "Predicted defect clusters, and actual defect clusters observed during testing or in operation, are an important input for risk-based testing" (1.3) | |
| 27 | Tests wear out (L227) | Repeated tests find fewer new defects | 1 | PASS | "If the same tests are repeated many times, they become increasingly ineffective in detecting new defects" (1.3) | |
| 28 | Tests wear out (L229) | Change tests and test data; write new tests | 1 | PASS | "existing tests and test data may need to be modified, and new tests may need to be written." (1.3) | |
| 29 | Tests wear out (L231) | In automated regression testing, the same tests give a useful result "each time" | 1 | FAIL | "in some cases, repeating the same tests can have a beneficial outcome, e.g., in automated regression testing" (1.3) | Says more than the source. The source says "can have", not "each time". |
| 30 | Tests wear out (L231) | Regression testing detects defects introduced or uncovered in unchanged areas | 7 | PASS | "to detect whether defects have been introduced or uncovered in unchanged areas of the software." | |
| 31 | Context (L262) | No single approach; testing differs by context | 1 | PASS | "There is no single universally applicable approach to testing. Testing is done differently in different contexts" (1.3) | |
| 32 | Context (L264–273) | The eight context factors | 1 | PASS | "Stakeholders… Team members… Business domain (criticality of the test object, identified risks…)… Technical factors… Project constraints… Organizational factors… Software development lifecycle… Tools" (1.4.2) | |
| 33 | Context (L275) | Factors affect strategy, techniques, automation, coverage, testware detail, reporting | 1 | PASS | "test strategy, test techniques used, degree of test automation, required level of coverage, level of detail of testware, test reporting, etc." (1.4.2) | |
| 34 | Absence-of-defects (L305) | A fallacy is a misconception: verification alone ensures success | 1 | PASS | "It is a fallacy (i.e., a misconception) to expect that software verification will ensure the success of a system." (1.3) | |
| 35 | Absence-of-defects (L307) | Tested requirements and fixed defects can still fail user needs, business goals, competition | 1 | PASS | "could still produce a system that does not fulfill the users' needs and expectations, that does not help in achieving the customer's business goals, and that is inferior" (1.3) | |
| 36 | Absence-of-defects (L309) | Do validation as well as verification | 1 | PASS | "In addition to verification, validation should also be carried out" (1.3) | |
| 37 | Absence-of-defects (L313) | Verification: confirming that a work product fulfills its specification | 8 | PASS | "The process of confirming that a work product fulfills its specification." | |
| 38 | Absence-of-defects (L314) | Validation: confirmation by examination that a work product matches stakeholder needs | 9 | PASS | "Confirmation by examination that a work product matches a stakeholder's needs." | |

## Table 2: warning callouts in the notes blocks

| Line | Owner text | Callout claim | Verdict | Note |
|---|---|---|---|---|
| L33 | Failure = "the end user is not satisfied" | The glossary defines a failure as an event where the system does not meet its requirements during execution | PASS | Glossary `failure` (S4). The conflict is real and named correctly. |
| L41 | Bug = a defect "accepted by developer" | The glossary lists "bug" as a synonym of "defect" | PASS | API `defect` synonyms: bug, fault, flaw |
| L219 | "Pesticide paradox" | v4.0.1 names it "Tests wear out" and does not use the other name | PASS | 0 hits for "pesticide" in the syllabus text |
| L297 | "Absence-of-errors fallacy" | v4.0.1 names it "Absence-of-defects fallacy" | PASS | 1.3 item 7; 0 hits for "absence-of-errors" |
| L29 (no callout) | Failure "when the software is executed in an operational environment" | none | n/a | Narrower than ISTQB: 1.1.2 says dynamic testing triggers failures, so failures also occur in a test environment. Not a fact-check FAIL (no callout claim to check). Reported as a Minor review finding. |

## Table 3: "not defined" statements

| Line | Term | Verdict | Evidence |
|---|---|---|---|
| L238 | pesticide paradox | PASS | 0 of 1128 API terms contain "pesticide"; 0 hits in the syllabus text |
| L316 | absence-of-errors fallacy | PASS | 0 API terms contain "absence-of-errors" or "absence of errors"; 0 hits in the syllabus text |

## Table 4: uncited factual claims in the istqb blocks

| Line | Claim | Verdict | Note |
|---|---|---|---|
| L53–58 | "Example" column of the terms table | PASS | Not an ISTQB claim: these are illustrations. They are not labeled as the tutorial's own. See review (Minor). |
| L82 | "ISTQB does not make a separate term of 'bug'." | PASS | Follows from the cites just before it. The API has no main entry "bug". |
| L116–117 | Table "Testing can / Testing cannot" | PASS | Restates claims 17 and 18 |
| L151 | 62^8 ≈ 218 trillion password example | PASS | Inside a "The tutorial's own explanation" callout that says "This example and its arithmetic are the tutorial's own". 62^8 = 218,340,105,584,896. |
| L235 | Row 1: no new defects → change the tests and test data, write new tests | PASS | Restates claim 28 |
| L236 | Row 2: "You need to know that a change broke nothing" → repeat the automated regression tests | FAIL | Says more than ISTQB. Regression testing detects whether defects were introduced (S7); testing cannot prove that no defects exist (1.3, claim 17 on this page). Needs new wording and a cite. |
| L242 | "The syllabus uses the name 'Tests wear out' instead." | PASS | Inside a tutorial callout; true (1.3 item 5) |
| L313–314 | "Question" column | PASS | Restates claims 37 and 38 |
| L320 | "an error is a human action. A defect is the flaw that the error produces." | PASS | Inside a tutorial callout; supported by S2 and S3 on this page |

## Copy check

Word runs of 7 or more words that the page shares with the syllabus text:

| Line | Words | Run | Verdict |
|---|---|---|---|
| L193 (istqb) | 12 | "a small number of system components usually contain most of the defects" | FAIL (≥ 10 words) |
| L141 (istqb) | 9 | "testing everything is not feasible except in trivial cases" | PASS under the 10-word rule. It is the whole syllabus sentence. See review (Important). |
| L66 (istqb) | 9 | "such as a requirements specification or a test script" | PASS |
| L110 (istqb) | 8 and 7 | "testing can show that defects are present in" / "cannot prove that there are no defects" | PASS |
| L74 (istqb) | 8 | "defects are not the only cause of failures" | PASS |
| L92 (istqb) | 7 | "testing and debugging are separate activities testing" | PASS |
| L27–L45 (notes) | 19–28 | Owner sentences from 1.2.3 | Out of scope: owner text, kept by rule |

Glossary definitions on the page (L55 error, L313 verification, L314 validation) are near the glossary wording. The copy rule covers the syllabus only, so this is not a FAIL. See review (Minor).

## Round-1 FAILs

| # | Where | FAIL |
|---|---|---|
| 1 | Table 1 #24, L193 | "The same few components" says more than the source |
| 2 | Table 1 #29, L231 | "each time" says more than the source |
| 3 | Table 4, L236 | Row 2 of the situation table says more than ISTQB and has no cite |
| 4 | Copy check, L193 | 12-word run copied from the syllabus |

Round-1 result: 4 open FAILs.

## Round 2 (2026-10-20, diff db255a7..21eb3bc)

The page text of 21eb3bc was checked with the same rules as round 1. Line numbers are the 21eb3bc lines.

### Round-1 FAILs

| # | Round-1 FAIL | New text | Verdict | Quote from the source (≤ 30 words) |
|---|---|---|---|---|
| 1 | L193 "The same few components" | "Usually, a few components of the system hold most of the defects that testing finds. Or a few components cause most of the failures in operation" | PASS | "A small number of system components usually contain most of the defects discovered or are responsible for most of the operational failures" (1.3) |
| 2 | L231 "each time" | "In automated regression testing, it can be useful to repeat the same tests" | PASS | "repeating the same tests can have a beneficial outcome, e.g., in automated regression testing" (1.3) |
| 3 | L236 table row 2, no cite | "You want to check whether a change added defects in unchanged areas \| Repeat the automated regression tests" + Cite 7 | PASS | "to detect whether defects have been introduced or uncovered in unchanged areas of the software." (S7) |
| 4 | L193 copy, 12 words | See row 1 | PASS | The new longest syllabus run in the istqb blocks is 7 words (L66). |

### Changed and new claims

| Line | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|
| L33 | Warning callout: the notes tie a failure to the operational environment and user satisfaction; glossary: event, requirements not met during execution; dynamic testing also triggers failures | none (notes block) | PASS | S4: "does not meet its requirements within specified limits during its execution." 1.1.2: "Testing can trigger failures that are caused by defects in the software (dynamic testing)" | The conflict is real and named correctly. One sentence, exact ending. |
| L55 | Error: glossary quote "A human action that results in a defect." | 2 | PASS | "A human action that results in a defect." | Now in quote marks |
| L53–58 | "Example (the tutorial's own)" column, one chain (limit 10,000 vs 1,000) | none | PASS | n/a | Marked as the tutorial's own. Not an ISTQB claim. |
| L62 | Reasons: time pressure, complex work products, processes, infrastructure or interactions, tiredness, lack of training ("gives examples") | 1 | PASS | "such as time pressure, complexity of work products, processes, infrastructure or interactions, or simply because they are tired or lack adequate training" (1.2.3) | |
| L74 | "Defects are not the only reason for failures." | 1 | PASS | "Errors and defects are not the only cause of failures." (1.2.3) | Reworded |
| L78 | Teams usually do root cause analysis … | 1 | PASS | "typically performed when a failure occurs or a defect is identified" (1.2.3) | |
| L92 | "Testing and debugging are two different activities." | 1 | PASS | "Testing and debugging are separate activities." (1.1.2) | Reworded |
| L110 | Testing can show that a test object contains defects; cannot prove it has none | 1 | PASS | "Testing can show that defects are present in the test object, but cannot prove that there are no defects" (1.3) | |
| L141 | Except in trivial cases, a team cannot test everything | 1 | PASS | "Testing everything is not feasible except in trivial cases" (1.3) | No longer the syllabus sentence word for word |
| L313 | Verification: checking that a work product meets its specification | 8 | PASS | "The process of confirming that a work product fulfills its specification." | |
| L314 | Validation: checking by examination that a work product fits what a stakeholder needs | 9 | PASS | "Confirmation by examination that a work product matches a stakeholder's needs." | |

### Copy check (round 2)

Syllabus runs of 7 or more words in the istqb blocks: one run of 7 words at L66 ("a requirements specification or a test script"). It is under 10 words. PASS. The other runs (19–28 words) are in the owner text of the notes block, which is kept by rule.

### Checks (round 2)

`npm test` 145 pass, 0 fail. `npm run build` exit 0. `check_sources.py out`: OK 46 pages checked, 0 skipped. `check_outline.py out`: OK 586 TOC links. `check_links.py out`: exit 0.

Open FAILs: 0
