# Fact-check: Testing Basics (`basics`)

| Field | Value |
|---|---|
| Chapter | 1, `basics`, "Testing Basics" (`content/fundamentals/basics.mdx`, commit 532e17e) |
| Date | 2026-10-20 |
| Round | 2 (round 1: commit 532e17e; round 2: commit 603b9ca) |
| Checker | An independent agent. It did not write the chapter. |
| Method | Each `<Cite n>` was checked against source n itself: the syllabus text (`ctfl-v4.0.1.txt`) or the glossary API (`https://api.glossary.istqb.org/v1/terms/<slug>`, read on 2026-10-20). The writer's notes were not used as evidence. |

## Sources

| n | Source | Checked against |
|---|---|---|
| 1 | Certified Tester Foundation Level Syllabus v4.0.1 | Syllabus text, sections 1.1, 1.1.1, 1.1.2, 1.2, 1.2.1, 1.2.2, 1.3, 1.5, 1.5.1, 2.2.2 |
| 2 | ISTQB Glossary: testing | API, `testing` v3 |
| 3 | ISTQB Glossary: verification | API, `verification` v2 |
| 4 | ISTQB Glossary: validation | API, `validation` v2 |
| 5 | ISTQB Glossary: debugging | API, `debugging` v2 |
| 6 | ISTQB Glossary: quality | API, `quality` v4 |
| 7 | ISTQB Glossary: quality assurance | API, `quality-assurance` v2 |
| 8 | ISTQB Glossary: quality control | API, `quality-control` v1 |

## Table 1: Cited claims

| # | Topic | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| 1 | What Is Software Testing | Testing is a set of activities. | 1 | PASS | "Software testing is a set of activities to discover defects and evaluate the quality of software work products." (1.1) | |
| 2 | What Is Software Testing | The activities discover defects and evaluate the quality of work products. | 1 | PASS | Same quote as row 1 (1.1) | Fact is correct. The wording copies the syllabus; see the copy check. |
| 3 | What Is Software Testing | A work product under test is a test object. | 1 | PASS | "These work products, when being tested, are known as test objects." (1.1) | |
| 4 | What Is Software Testing | Glossary: testing is in the SDLC and evaluates the quality of a component or system and related work products. | 2 | PASS | "The process within the software development lifecycle that evaluates the quality of a component or system and related work products." | |
| 5 | What Is Software Testing | Testing is more than running tests; it includes other activities and must fit the SDLC. | 1 | PASS | "software testing also includes other activities and must be aligned with the software development lifecycle" (1.1) | |
| 6 | What Is Software Testing | Testing involves two checks (verification and validation). | 1 | PASS | "While testing involves verification ... it also involves validation" (1.1) | |
| 7 | What Is Software Testing | Verification: does the system meet the specified requirements? | 1 | PASS | "verification, i.e., checking whether the system meets specified requirements" (1.1) | |
| 8 | What Is Software Testing | Glossary: verification, a work product fulfills its specification. | 3 | PASS | "The process of confirming that a work product fulfills its specification." | |
| 9 | What Is Software Testing | Validation: needs of users and other stakeholders in the operational environment. | 1 | PASS | "checking whether the system meets users' and other stakeholders' needs in its operational environment" (1.1) | |
| 10 | What Is Software Testing | Glossary: validation, a work product matches the needs of a stakeholder. | 4 | PASS | "Confirmation by examination that a work product matches a stakeholder's needs." | |
| 11 | What Is Software Testing | Dynamic testing runs software; static does not; static includes reviews and static analysis. | 1 | PASS | "Dynamic testing involves the execution of software, while static testing does not. Static testing includes reviews ... and static analysis." (1.1) | |
| 12 | What Is Software Testing | Testing is largely intellectual; knowledge, analytical skills, critical and systems thinking; testers use tools. | 1 | PASS | "Testers use tools ... but ... testing is largely an intellectual activity, requiring the testers to have specialized knowledge, use analytical skills and apply critical thinking and systems thinking" (1.1) | |
| 13 | What Is Software Testing | Testing and debugging are separate activities. | 1 | PASS | "Testing and debugging are separate activities." (1.1.2) | |
| 14 | What Is Software Testing | Dynamic testing can trigger a failure; static testing can find a defect directly. | 1 | PASS | "Testing can trigger failures ... (dynamic testing) or can directly find defects in the test object (static testing)." (1.1.2) | |
| 15 | What Is Software Testing | Glossary: debugging finds, analyzes, and removes causes of failures. | 5 | PASS | "The process of finding, analyzing and removing the causes of failures in a component or system." | |
| 16 | What Is Software Testing | After a failure, debugging has three steps: reproduce, diagnose, fix. | 1 | PASS | "The typical debugging process in this case involves: Reproduction of a failure; Diagnosis (finding the defect); Fixing the defect" (1.1.2) | The source says "typical". Recommended wording: "The typical debugging process has three steps." |
| 17 | What Is Software Testing | Confirmation testing checks the fix; regression testing checks other parts. | 1 | PASS | "Subsequent confirmation testing checks whether the fixes resolved the problem. ... regression testing ... check whether the fixes are causing failures in other parts of the test object" (1.1.2) | |
| 18 | What Is Software Testing | After static testing finds a defect, debugging only removes it. "The tester does not need to reproduce a failure or diagnose it." | 1 | FAIL | "When static testing identifies a defect, debugging is concerned with removing it. There is no need for reproduction or diagnosis" (1.1.2); "debugging – a non-testing activity" (1.2.1) | Says more than the source. The source names no actor. The page gives the debugging steps to "the tester", but ISTQB calls debugging a non-testing activity. Fix: "Nobody needs to reproduce or diagnose a failure, because static testing causes no failure." |
| 19 | Why Testing Is Necessary | Failing software can cost money, time, reputation; in extreme cases injury or death. | 1 | PASS | "loss of money, time or business reputation, and, in extreme cases, even injury or death" (1.1) | |
| 20 | Why Testing Is Necessary | Testing reduces the risk of failure in operation. | 1 | PASS | "helps reducing the risk of software failure in operation" (1.1) | |
| 21 | Why Testing Is Necessary | Testing is a cost-effective way to detect defects; debugging removes them; quality improves only indirectly. | 1 | PASS | "Testing provides a cost-effective means of detecting defects. These defects can then be removed (by debugging ...), so testing indirectly contributes to higher quality" (1.2.1) | |
| 22 | Why Testing Is Necessary | Testing evaluates quality at various SDLC phases; the result supports decisions such as release. | 1 | PASS | "directly evaluating the quality of a test object at various phases in the SDLC ... contributing to decisions ... such as the release decision" (1.2.1) | "Managers use" is a fair reading of "project management activity". |
| 23 | Why Testing Is Necessary | Testers represent users; real users are rarely possible because of cost and availability. | 1 | PASS | "Testing provides users with indirect representation ... not usually possible due to the high costs and lack of availability of suitable users" (1.2.1) | |
| 24 | Why Testing Is Necessary | Contract, law, or regulatory standard can require testing. | 1 | PASS | "Testing may also be required to meet contractual or legal requirements, or to comply with regulatory standards." (1.2.1) | |
| 25 | Why Testing Is Necessary | Contribution is not limited to the test team; any stakeholder can use testing skills. | 1 | PASS | "Testing's contribution to success should not be restricted to the test team activities. Any stakeholder can use their testing skills" (1.2) | |
| 26 | Quality and Quality Assurance | Glossary: quality, degree to which a work product satisfies stated and implied requirements. | 6 | PASS | "The degree to which a work product satisfies stated and implied requirements." | |
| 27 | Quality and Quality Assurance | Glossary: QA, activities that give confidence that quality requirements will be fulfilled. | 7 | PASS | "Activities focused on providing confidence that quality requirements will be fulfilled." | |
| 28 | Quality and Quality Assurance | QA is process-oriented, preventive; good process gives good product; applies to development and test processes; everyone is responsible. | 1 | PASS | "QA is a process-oriented, preventive approach ... if a good process is followed correctly, then it will generate a good product. QA applies to both the development and testing processes" (1.2.2) | |
| 29 | Quality and Quality Assurance | "Testing" and "QA" are used as the same word but are not the same. | 1 | PASS | "While people often use the terms "testing" and "quality assurance" (QA) interchangeably, testing and QA are not the same." (1.2.2) | |
| 30 | Quality and Quality Assurance | Both use test results: testing to fix defects, QA as feedback on processes. | 1 | PASS | "Test results are used by QA and testing. In testing they are used to fix defects, while in QA they provide feedback" (1.2.2) | |
| 31 | Testing Objectives | The syllabus lists nine typical test objectives (the nine bullets). | 1 | PASS | "The typical test objectives are:" followed by nine bullets (1.1.1) | All nine bullets match. Bullet 1 copies the syllabus; see the copy check. |
| 32 | Testing Objectives | Finding defects is only one of the nine objectives. | 1 | PASS | "Causing failures and finding defects" is one of the nine bullets (1.1.1) | |
| 33 | Testing Objectives | Objectives change with context: work product, test level, risks, SDLC, business (structure, competition, time to market). | 1 | PASS | "Test objectives can vary, depending upon the context, which includes the work product being tested, the test level, risks, the ... SDLC ... corporate structure, competitive considerations, or time to market." (1.1.1) | |
| 34 | Testing Objectives | Functional testing checks what the test object does; non-functional checks how well it behaves. | 1 | PASS | "The functions are "what" the test object should do." "Non-functional testing is the testing of "how well the system behaves"." (2.2.2) | |
| 35 | Testing Objectives | The syllabus uses the ISO/IEC 25010 list (eight characteristics in the table). | 1 | PASS | "The ISO/IEC 25010 standard provides the following classification ... Performance efficiency, Compatibility, Usability ..., Reliability, Security, Maintainability, Portability ..., Safety" (2.2.2) | |
| 36 | Software Testing Misconceptions | The syllabus names two common misconceptions. | 1 | PASS | "A common misconception about testing ..." and "Another common misconception about testing ..." (1.1) | |
| 37 | Software Testing Misconceptions | Misconception 1 answer: other activities, fit the SDLC, static testing does not run software. | 1 | PASS | "software testing also includes other activities and must be aligned with the software development lifecycle"; "static testing does not" (1.1) | |
| 38 | Software Testing Misconceptions | Misconception 2 answer: testing also validates users' and stakeholders' needs. | 1 | PASS | "it also involves validation, which means checking whether the system meets users' and other stakeholders' needs" (1.1) | |
| 39 | Software Testing Misconceptions | Testing is not only technical; plan, manage, estimate, monitor, control. | 1 | PASS | "Testing is not only a technical activity. It also needs to be properly planned, managed, estimated, monitored and controlled" (1.1) | |
| 40 | Software Testing Misconceptions | Testing cannot prove that no defects exist, also when it finds none. | 1 | PASS | "even if no defects are found, testing cannot prove test object correctness" (1.3) | |
| 41 | Software Testing Misconceptions | Finding defects is one of nine test objectives. | 1 | PASS | Nine bullets under "The typical test objectives are:" (1.1.1) | |
| 42 | QA Generic Skills | A skill is the ability to do something well, from knowledge, practice, aptitude. | 1 | PASS | "Skill is the ability to do something well that comes from one's knowledge, practice and aptitude." (1.5) | |
| 43 | QA Generic Skills | Six generic skills are particularly relevant for testers. | 1 | PASS | "While being generic, the following skills are particularly relevant for testers:" followed by six bullets (1.5.1) | |
| 44 | QA Generic Skills | Testing knowledge: more effective, e.g., test techniques. | 1 | PASS | "Testing knowledge (to increase effectiveness of testing, e.g., by using test techniques)" (1.5.1) | |
| 45 | QA Generic Skills | Thoroughness etc.: find defects, especially hard ones. | 1 | PASS | "(to identify defects, especially the ones that are difficult to find)" (1.5.1) | |
| 46 | QA Generic Skills | Communication etc.: work with stakeholders, pass information, be understood, report and discuss defects. | 1 | PASS | "(to interact effectively with all stakeholders, to convey information to others, to be understood, and to report and discuss defects)" (1.5.1) | |
| 47 | QA Generic Skills | Analytical, critical thinking, creativity: more effective. | 1 | PASS | "Analytical thinking, critical thinking, creativity (to increase effectiveness of testing)" (1.5.1) | |
| 48 | QA Generic Skills | Technical knowledge: more efficient, e.g., test tools. | 1 | PASS | "Technical knowledge (to increase efficiency of testing, e.g., by using appropriate test tools)" (1.5.1) | |
| 49 | QA Generic Skills | Domain knowledge: understand and talk with end users and business representatives. | 1 | PASS | "Domain knowledge (to be able to understand and to communicate with end users/business representatives)" (1.5.1) | |
| 50 | QA Generic Skills | Testers bring bad news; people blame the bearer. | 1 | PASS | "Testers are often the bearers of bad news. It is a common human trait to blame the bearer of bad news." (1.5.1) | |
| 51 | QA Generic Skills | A test result can feel like criticism of the product and its author. | 1 | PASS | "Communicating test results may be perceived as criticism of the product and of its author." (1.5.1) | |
| 52 | QA Generic Skills | Confirmation bias makes disagreeing information hard to accept. | 1 | PASS | "Confirmation bias can make it difficult to accept information that disagrees with currently held beliefs." (1.5.1) | |
| 53 | QA Generic Skills | Communicate defects and failures in a constructive way. | 1 | PASS | "information about defects and failures should be communicated in a constructive way" (1.5.1) | |
| 54 | QA vs QC | The syllabus compares testing and QA. | 1 | PASS | Section 1.2.2 "Testing and Quality Assurance (QA)" | |
| 55 | QA vs QC | Glossary: QC, activities designed to evaluate the quality of a component or system. | 8 | PASS | "Activities designed to evaluate the quality of a component or system." | |
| 56 | QA vs QC | Testing is a major form of QC; others are formal methods, simulation, prototyping. | 1 | PASS | "Testing is a major form of quality control, while others include formal methods (model checking and proof of correctness), simulation and prototyping." (1.2.2) | |
| 57 | QA vs QC | Table: QA process-oriented, preventive, process implementation and improvement. | 1 | PASS | "QA is a process-oriented, preventive approach that focuses on the implementation and improvement of processes." (1.2.2) | |
| 58 | QA vs QC | Table: testing product-oriented, corrective, supports an appropriate level of quality. | 1 | PASS | "Testing is a product-oriented, corrective approach that focuses on those activities supporting the achievement of appropriate levels of quality." (1.2.2) | |
| 59 | QA vs QC | Table: QA scope is development and test processes; everyone is responsible. | 1 | PASS | "QA applies to both the development and testing processes, and is the responsibility of everyone on a project." (1.2.2) | |
| 60 | QA vs QC | Table: testing scope, evaluation of quality of a component, system, related work products. | 2 | PASS | "evaluates the quality of a component or system and related work products" (glossary: testing) | |
| 61 | QA vs QC | Table: use of test results, feedback (QA) and fixing defects (testing). | 1 | PASS | "In testing they are used to fix defects, while in QA they provide feedback on how well the development and test processes are performing." (1.2.2) | |
| 62 | QA vs QC | Verification and validation belong to testing; the syllabus does not split them between QA and QC. | 1 | PASS | "While testing involves verification ... it also involves validation" (1.1). Section 1.2.2 does not mention verification or validation. | |

## Table 2: Warning callouts in the notes blocks

| # | Line | Owner line | Callout says | Conflict real? | Named correctly? | Verdict | Note |
|---|---|---|---|---|---|---|---|
| W1 | 32 | "It involves executing the system (manually or via automation)" | Testing is more than executing the system; static testing finds defects without running it. | Yes. S1 1.1: "Dynamic testing involves the execution of software, while static testing does not." | Yes | PASS | |
| W2 | 88 | "Ensures requirements are met → builds the right product, not just a working one" | ISTQB separates verification from validation; meeting requirements alone does not show the right product. | Yes, but weak. The owner line makes "requirements met" the cause of "the right product". S1 1.1 puts "meets specified requirements" under verification and "users' and other stakeholders' needs" under validation, and calls "focuses entirely on verifying" a misconception. | Yes | PASS | Keep the callout. The owner's "requirements" can mean user needs, but the line as written joins the two checks that ISTQB separates. |
| W3 | 126 | "Quality: A degree of excellence of a product or a service." | ISTQB: the degree to which a work product satisfies stated and implied requirements. | Yes. Glossary quality v4. | Yes | PASS | |
| W4 | 132 | "Quality assurance (QA): is any systematic process of determining whether a product or service meets specified requirements." | ISTQB QA gives confidence that quality requirements will be fulfilled; testing and QA are not the same. | Yes. The owner line describes product evaluation (testing or QC). Glossary QA v2; S1 1.2.2: "testing and QA are not the same". | Yes | PASS | |
| W5 | 252 | "The main goal of testing is ensuring overall software quality." | ISTQB names no single main goal; objectives depend on context. | Yes. S1 1.1.1: "Test objectives can vary, depending upon the context". S1 1.2.1 also says testing contributes to quality only indirectly. | Yes | PASS | |
| W6 | 362 | "QC always involves after executing the program." | Testing, a major form of QC, includes static testing without execution. | Yes. S1 1.2.2 (testing is a major form of QC) and S1 1.1 (static testing does not execute). | Yes | PASS | |
| W7 | 368 | "QA is a verification process / QC is a validation process" | ISTQB does not give verification to QA and validation to QC; testing involves both. | Yes. Spec's known conflict. S1 1.1: testing "involves verification ... it also involves validation"; testing is a form of QC (1.2.2). | Yes | PASS | |
| W8 | 374 | "QA is responsible for full SDLC / QC is responsible for STLC" | QA applies to development and test processes, is everyone's responsibility; ISTQB has no term STLC. | Yes. Spec's known conflict. S1 1.2.2: QA "is the responsibility of everyone on a project"; STLC is not in the syllabus or the 1128 glossary terms. | Mostly | PASS | The first clause ("applies to the development and test processes") does not conflict with "QA ... full SDLC" by itself. The conflict is "responsible" (QA is everyone's responsibility, not one party's) and STLC. Sharper wording is a Minor review item. |

## Table 3: "Not defined" statements

| # | Line | Statement | Check | Verdict | Note |
|---|---|---|---|---|---|
| N1 | 394 | "The ISTQB syllabus and glossary do not define the term STLC." | The syllabus text has no "STLC" and no "testing life cycle". The glossary list (1128 terms, API, 2026-10-20) has no STLC or software testing life cycle entry. It has `test-process`, `software-development-lifecycle`, `software-lifecycle`. | PASS | |
| N2 | 281 | "The ISTQB syllabus and glossary do not cover the five claims of the "My notes" version. These claims are about programming, AI, automation tools, and a career in QA." | Claim 3 ("Testing is only about finding bugs") is covered by S1 1.1.1 (nine objectives). The page itself answers it with S1 at line 279, and the notes block has a conflict callout on it (W5). The second sentence names four topics for "five claims". The callout at line 285 repeats "The five claims are the views of the owner". | FAIL | Fix: "four claims" (items 1, 2, 4, 5: programming, AI, automation tools, career). Say that item 3 is answered by the nine objectives. Change "five" to "four" in the callout at line 285 too. |

## Table 4: Uncited ISTQB facts in istqb blocks

| # | Line | Text | Verdict | Note |
|---|---|---|---|---|
| U1 | 98 | "Testing makes these contributions to a project." | PASS | Lead-in to a table whose rows each have a cite. |
| U2 | 215–224 | ISO/IEC 25010 table rows | PASS | The sentence before the table (line 213) cites source 1 for the list. |
| U3 | 275 | "The syllabus makes three more points that help against wrong ideas about testing." | PASS | Lead-in; each of the three points has a cite. |
| U4 | 398 | "ISTQB describes the same ground as test activities." | PASS | Inside the "The tutorial's own explanation" callout, which the rules allow. True per S1 1.4.1. |

No other uncited ISTQB fact was found in the istqb blocks.

## Copy check

Method: a script compared the page text with the syllabus text and listed every shared run of 8 or more words. Runs that cross a sentence end, a table cell, or a bold label were split at that point. Only runs of 10 or more words inside one sentence count.

| # | Line | Page sentence | Shared run (words) | Verdict | Fix |
|---|---|---|---|---|---|
| C1 | 40 | "The activities discover defects and evaluate the quality of software work products." | "discover defects and evaluate the quality of software work products" (10) | FAIL | For example: "The activities find defects and check the quality of software work products." |
| C2 | 199 | "Evaluate work products such as requirements, user stories, designs, and code." | "work products such as requirements user stories designs and code" (10) | FAIL | For example: "Evaluate work products, for example the requirements, user stories, designs, and code." |
| C3 | 340 | "A test result can feel like criticism of the product and of its author." | "criticism of the product and of its author" (8; the run reaches 10 only across the next sentence) | PASS | |
| C4 | 103, 107, 151, 333–336 | Other runs of 8 to 9 words | ≤ 9 in one sentence | PASS | |

## Summary

| Area | FAIL |
|---|---|
| Table 1, cited claims | 1 (row 18) |
| Table 2, warning callouts | 0 |
| Table 3, "not defined" | 1 (N2) |
| Table 4, uncited ISTQB facts | 0 |
| Copy check | 2 (C1, C2) |

Round 1 result: 4 FAILs. See round 2.

## Round 2

Checked commit 603b9ca (diff 9a6d16b..603b9ca). Line numbers below are of 603b9ca. The same rules as round 1 apply.

### Round-1 FAILs, checked again

| Round-1 item | Line | New text | Verdict | Quote / note |
|---|---|---|---|---|
| C1 copy | 46 | "The activities find defects and check the quality of software work products." | PASS | The longest shared run with the syllabus is now under 8 words. |
| C2 copy | 207 | "Evaluate work products, for example the requirements, user stories, designs, and code." | PASS | The longest shared run is now under 8 words. |
| Table 1 row 18 | 77 | "Nobody needs to reproduce or diagnose a failure, because static testing causes no failure." | PASS | "There is no need for reproduction or diagnosis, since static testing directly finds defects, and cannot cause failures" (1.1.2). No actor is named now. |
| Table 3 N2 | 289, 293 | "do not cover four of the five claims ... The nine test objectives answer the third claim"; callout: "The four claims are the views of the owner" | PASS | The syllabus text has no statement on programming skill, AI, test tools being enough, or QA as a career for graduates (searched "programming", "coding", "AI", "career"; section 0.3 is only the ISTQB certificate path). Claim 3 is answered by 1.1.1. |

### New or changed claims in 603b9ca

| # | Line | Claim (short) | Cite | Verdict | Quote from the source (≤ 30 words) | Note |
|---|---|---|---|---|---|---|
| R1 | 52 | Testing can show that defects are present; it cannot prove the test object correct, also when it finds no defects. | 1 | PASS | "Testing can show that defects are present in the test object, but cannot prove that there are no defects ... even if no defects are found, testing cannot prove test object correctness." (1.3) | |
| R2 | 69 | After a failure, the typical debugging process has three steps. | 1 | PASS | "The typical debugging process in this case involves: Reproduction of a failure; Diagnosis ...; Fixing the defect" (1.1.2) | Fixes round-1 note on row 16. |
| R3 | 75 | Regression testing checks that the fix did not cause failures elsewhere in the test object. | 1 | PASS | "regression testing ... to check whether the fixes are causing failures in other parts of the test object" (1.1.2) | Reworded only. |
| R4 | 111 | At various SDLC phases, testing evaluates how good a test object is; managers use the result for decisions such as release. | 1 | PASS | "directly evaluating the quality of a test object at various phases in the SDLC ... contributing to decisions ... such as the release decision" (1.2.1) | Reworded only. |
| R5 | 115 | Any stakeholder can apply testing skills to help the project succeed. | 1 | PASS | "Any stakeholder can use their testing skills to bring the project closer to success." (1.2) | Reworded only. |
| R6 | 159 | QA uses test results as feedback on the performance of the development and test processes. | 1 | PASS | "in QA they provide feedback on how well the development and test processes are performing" (1.2.2) | Reworded only. |
| R7 | 337 | A skill is the ability to do a task well. | 1 | PASS | "Skill is the ability to do something well that comes from one's knowledge, practice and aptitude." (1.5) | Reworded only. |
| R8 | 348 | A test result can feel like criticism of the product and its author. | 1 | PASS | "Communicating test results may be perceived as criticism of the product and of its author." (1.5.1) | Reworded only. |

### New or changed warning callouts

| # | Line | Owner line | Callout says | Conflict real? | Named correctly? | Verdict | Note |
|---|---|---|---|---|---|---|---|
| W9 | 38 | "ensure it works as expected before release" (line 26) | Testing can show defects are present but cannot prove the software correct, so it cannot ensure that it works as expected. | Yes. "even if no defects are found, testing cannot prove test object correctness" (1.3). | Yes | PASS | New in round 2. |
| W10 | 382 | "QA is the process to create the deliverables." (line 365) | QA improves the processes that make the deliverables, and does not make the deliverables itself. | Yes. QA "focuses on the implementation and improvement of processes" (1.2.2); glossary QA: "Activities focused on providing confidence that quality requirements will be fulfilled." | Yes | PASS | New in round 2. "does not make the deliverables itself" is a fair reading of a process-oriented approach. |
| W8 (changed) | 388 | "QA is responsible for full SDLC / QC is responsible for STLC" | QA is the responsibility of everyone on the project, not of one team; ISTQB has no term STLC. | Yes. QA "is the responsibility of everyone on a project" (1.2.2); STLC is not a syllabus or glossary term (Table 3, N1). | Yes | PASS | The clause that did not conflict is gone. |

All 10 warning callouts end with the exact sentence "Switch to the ISTQB version at the top of the page to see the ISTQB definition."

### "Not defined" statements, round 2

| # | Line | Statement | Verdict | Note |
|---|---|---|---|---|
| N1 | 408 | "The ISTQB syllabus and glossary do not define the term STLC." | PASS | Unchanged. Still states that ISTQB does not define the term. |

### Uncited ISTQB facts, round 2

No new uncited ISTQB fact. Line 289 ("The nine test objectives answer the third claim") points to the cited list at lines 205–213 and the cited sentence at line 287.

### Copy check, round 2

The script found no shared run of 10 or more words inside one sentence. The longest runs are 8 to 9 words, and the 9-word runs cross a bold label or a table cell.

### Round 2 summary

| Area | FAIL |
|---|---|
| Round-1 FAILs still open | 0 |
| New claims | 0 |
| Warning callouts | 0 |
| "Not defined" | 0 |
| Uncited ISTQB facts | 0 |
| Copy check | 0 |

Open FAILs: 0
