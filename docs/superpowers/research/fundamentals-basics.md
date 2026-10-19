# Fundamentals: Testing Basics (`basics`)

Research notes for `content/fundamentals/basics.mdx`. Check date: 2026-10-20. The S-numbers are the ones of `fundamentals-sources.md`. The page numbers of `page.sources` follow the order of the first `<Cite>`.

## Sources

| Cite n | S-number | Source | URL |
|---|---|---|---|
| 1 | S1 | Certified Tester Foundation Level Syllabus v4.0.1 (sections 1.1, 1.1.1, 1.1.2, 1.2, 1.2.1, 1.2.2, 1.3, 1.5, 1.5.1, 2.2.2) | https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf |
| 2 | S2 | ISTQB Glossary: testing | https://glossary.istqb.org/en_US/term/testing |
| 3 | S6 | ISTQB Glossary: verification | https://glossary.istqb.org/en_US/term/verification |
| 4 | S7 | ISTQB Glossary: validation | https://glossary.istqb.org/en_US/term/validation |
| 5 | S12 | ISTQB Glossary: debugging | https://glossary.istqb.org/en_US/term/debugging |
| 6 | S3 | ISTQB Glossary: quality | https://glossary.istqb.org/en_US/term/quality |
| 7 | S4 | ISTQB Glossary: quality assurance | https://glossary.istqb.org/en_US/term/quality-assurance |
| 8 | S5 | ISTQB Glossary: quality control | https://glossary.istqb.org/en_US/term/quality-control |

Terms that ISTQB does not define (from `fundamentals-sources.md`): STLC. The word "misconceptions" is not a term. The syllabus names two misconceptions only (S1, 1.1).

## Topic: What Is Software Testing

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Testing is a set of activities that discover defects and evaluate the quality of software work products. | S1 1.1 | "Software testing is a set of activities to discover defects and evaluate the quality of software work products." |
| 2 | A work product that is tested is a test object. | S1 1.1 | "These work products, when being tested, are known as test objects." |
| 3 | Testing is more than executing tests. It includes other activities and must fit the SDLC. | S1 1.1 | "testing only consists of executing tests ... However, software testing also includes other activities and must be aligned with the software development lifecycle" |
| 4 | The glossary places testing in the SDLC and says it evaluates quality of a component or system and related work products. | S2 | "The process within the software development lifecycle that evaluates the quality of a component or system and related work products." |
| 5 | Verification checks whether the system meets specified requirements. Validation checks whether it meets the needs of users and stakeholders in the operational environment. | S1 1.1 | "verification, i.e., checking whether the system meets specified requirements ... validation, which means checking whether the system meets users' and other stakeholders' needs" |
| 6 | Glossary: verification confirms that a work product fulfills its specification. | S6 | "The process of confirming that a work product fulfills its specification." |
| 7 | Glossary: validation confirms by examination that a work product matches a stakeholder's needs. | S7 | "Confirmation by examination that a work product matches a stakeholder's needs." |
| 8 | Testing is dynamic or static. Dynamic executes software, static does not. Static testing includes reviews and static analysis. | S1 1.1 | "Dynamic testing involves the execution of software, while static testing does not. Static testing includes reviews ... and static analysis." |
| 9 | Testing is largely an intellectual activity. Testers use tools. | S1 1.1 | "testing is largely an intellectual activity, requiring the testers to have specialized knowledge, use analytical skills and apply critical thinking and systems thinking" |
| 10 | Testing and debugging are separate activities. Dynamic testing can trigger failures. Static testing can find defects directly. | S1 1.1.2 | "Testing and debugging are separate activities. Testing can trigger failures ... or can directly find defects in the test object (static testing)." |
| 11 | Glossary: debugging finds, analyzes, and removes the causes of failures. | S12 | "The process of finding, analyzing and removing the causes of failures in a component or system." |
| 12 | Debugging after dynamic testing: reproduce the failure, diagnose (find the defect), fix the defect. | S1 1.1.2 | "Reproduction of a failure; Diagnosis (finding the defect); Fixing the defect" |
| 13 | Confirmation testing checks the fix. Regression testing checks for failures in other parts. | S1 1.1.2 | "Subsequent confirmation testing checks whether the fixes resolved the problem." "regression testing ... check whether the fixes are causing failures in other parts" |
| 14 | After static testing finds a defect, debugging only removes it. Nobody needs to reproduce or diagnose a failure, because static testing causes no failure. The source names no actor. | S1 1.1.2 | "There is no need for reproduction or diagnosis, since static testing directly finds defects, and cannot cause failures" |
| 15 | Testing can show that defects are present. It cannot prove that the test object is correct, also when it finds no defects. | S1 1.3 | "even if no defects are found, testing cannot prove test object correctness" |

## Topic: Why Testing Is Necessary

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Failing software can cost money, time, reputation, and in extreme cases cause injury or death. | S1 1.1 | "loss of money, time or business reputation, and, in extreme cases, even injury or death" |
| 2 | Testing reduces the risk of software failure in operation. | S1 1.1 | "helps reducing the risk of software failure in operation" |
| 3 | Testing is a cost-effective way to detect defects. Debugging removes them, so testing contributes to quality only indirectly. | S1 1.2.1 | "Testing provides a cost-effective means of detecting defects. ... testing indirectly contributes to higher quality test objects." |
| 4 | Testing evaluates the quality of a test object at various SDLC phases. The result supports decisions, for example the release decision. | S1 1.2.1 | "directly evaluating the quality of a test object at various phases in the SDLC ... such as the release decision" |
| 5 | Testing gives users an indirect representation in the project. Real users are costly and rarely available. | S1 1.2.1 | "Testing provides users with indirect representation on the development project." |
| 6 | Contracts, laws, or regulatory standards can require testing. | S1 1.2.1 | "Testing may also be required to meet contractual or legal requirements, or to comply with regulatory standards." |
| 7 | Any stakeholder can use testing skills. The contribution is not limited to the test team. | S1 1.2 | "Any stakeholder can use their testing skills to bring the project closer to success." |

## Topic: Quality and Quality Assurance

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Glossary: quality is the degree to which a work product satisfies stated and implied requirements. | S3 | "The degree to which a work product satisfies stated and implied requirements." |
| 2 | Glossary: QA is activities that give confidence that quality requirements will be fulfilled. | S4 | "Activities focused on providing confidence that quality requirements will be fulfilled." |
| 3 | QA is process-oriented and preventive. It focuses on implementing and improving processes. | S1 1.2.2 | "QA is a process-oriented, preventive approach that focuses on the implementation and improvement of processes." |
| 4 | The basis of QA: a good process, followed correctly, makes a good product. | S1 1.2.2 | "if a good process is followed correctly, then it will generate a good product" |
| 5 | QA applies to development and test processes. It is the responsibility of everyone on the project. | S1 1.2.2 | "QA applies to both the development and testing processes, and is the responsibility of everyone on a project." |
| 6 | People use "testing" and "QA" as the same, but they are not the same. | S1 1.2.2 | "testing and QA are not the same" |
| 7 | QA uses test results as feedback on how well the processes perform. Testing uses them to fix defects. | S1 1.2.2 | "in testing they are used to fix defects, while in QA they provide feedback on how well the development and test processes are performing" |

## Topic: Testing Objectives

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | The syllabus lists nine typical test objectives. | S1 1.1.1 | "The typical test objectives are:" followed by nine bullets |
| 2 | The nine objectives: evaluate work products; cause failures and find defects; reach required coverage; reduce the risk of inadequate quality; verify requirements; verify contractual, legal, regulatory compliance; inform stakeholders; build confidence; validate completeness and expected behavior. | S1 1.1.1 | "Evaluating work products ...", "Causing failures and finding defects", "Ensuring required coverage", "Building confidence in the quality of the test object" |
| 3 | Objectives vary with the work product, test level, risks, SDLC, and business context (corporate structure, competition, time to market). | S1 1.1.1 | "Test objectives can vary, depending upon the context" |
| 4 | Functional testing evaluates what the test object does. Non-functional testing evaluates how well it behaves. | S1 2.2.2 | "The functions are "what" the test object should do." "Non-functional testing is the testing of "how well the system behaves"." |
| 5 | The ISO/IEC 25010 list: performance efficiency, compatibility, usability, reliability, security, maintainability, portability, safety. | S1 2.2.2 | "Performance efficiency; Compatibility; Usability ...; Reliability; Security; Maintainability; Portability ...; Safety" |

## Topic: Software Testing Misconceptions

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Misconception: testing only consists of executing tests. Truth: testing has other activities and must fit the SDLC. | S1 1.1 | "A common misconception about testing is that it only consists of executing tests" |
| 2 | Misconception: testing only verifies the test object. Truth: it also validates. | S1 1.1 | "Another common misconception about testing is that testing focuses entirely on verifying the test object." |
| 3 | Testing is not only technical. It needs planning, management, estimation, monitoring, control. | S1 1.1 | "Testing is not only a technical activity. It also needs to be properly planned, managed, estimated, monitored and controlled" |
| 4 | Testing cannot prove that no defects exist, even if it finds none. | S1 1.3 | "even if no defects are found, testing cannot prove test object correctness" |
| 5 | Finding defects is one of nine objectives. | S1 1.1.1 | see the topic "Testing Objectives" |
| 6 | Four of the five owner claims (items 1, 2, 4, 5: programming, AI, automation tools, career switch) are not in the syllabus or glossary. Item 3 ("only bugs") is answered by the nine objectives. | S1 1.1.1, glossary | Not applicable for the four: absence of a source. The `istqb` block marks them as the tutorial's own view. |

## Topic: QA Generic Skills

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A skill is the ability to do something well that comes from knowledge, practice, and aptitude. | S1 1.5 | "Skill is the ability to do something well that comes from one's knowledge, practice and aptitude." |
| 2 | Testing knowledge raises the effectiveness of testing, for example with test techniques. | S1 1.5.1 | "Testing knowledge (to increase effectiveness of testing, e.g., by using test techniques)" |
| 3 | Thoroughness, carefulness, curiosity, attention to detail, and being methodical help find hard-to-find defects. | S1 1.5.1 | "to identify defects, especially the ones that are difficult to find" |
| 4 | Communication, active listening, and teamwork help talk to stakeholders, convey information, and report and discuss defects. | S1 1.5.1 | "Good communication skills, active listening, being a team player" |
| 5 | Analytical thinking, critical thinking, and creativity raise effectiveness. | S1 1.5.1 | "Analytical thinking, critical thinking, creativity (to increase effectiveness of testing)" |
| 6 | Technical knowledge raises efficiency, for example by using test tools. | S1 1.5.1 | "Technical knowledge (to increase efficiency of testing, e.g., by using appropriate test tools)" |
| 7 | Domain knowledge helps testers understand and talk with end users and business representatives. | S1 1.5.1 | "Domain knowledge (to be able to understand and to communicate with end users/business representatives)" |
| 8 | Testers often bring bad news. Test results can feel like criticism. Confirmation bias makes disagreeing information hard to accept. Report defects in a constructive way. | S1 1.5.1 | "Testers are often the bearers of bad news." "information about defects and failures should be communicated in a constructive way" |

## Topic: QA vs QC

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Glossary: QC is activities designed to evaluate the quality of a component or system. | S5 | "Activities designed to evaluate the quality of a component or system." |
| 2 | Testing is a major form of quality control. Other forms: formal methods, simulation, prototyping. | S1 1.2.2 | "Testing is a major form of quality control, while others include formal methods (model checking and proof of correctness), simulation and prototyping." |
| 3 | Testing is product-oriented and corrective. | S1 1.2.2 | "Testing is a product-oriented, corrective approach" |
| 4 | QA is process-oriented and preventive, and focuses on implementing and improving processes. | S1 1.2.2 | "QA is a process-oriented, preventive approach that focuses on the implementation and improvement of processes." |
| 5 | QA applies to development and test processes and is the responsibility of everyone. | S1 1.2.2 | "QA applies to both the development and testing processes, and is the responsibility of everyone on a project." |
| 6 | Test results: fix defects in testing, feedback on processes in QA. | S1 1.2.2 | "in testing they are used to fix defects, while in QA they provide feedback" |
| 7 | Testing involves both verification and validation. The syllabus does not split them between QA and QC. | S1 1.1 | "While testing involves verification ... it also involves validation" |
| 8 | STLC is not an ISTQB term (syllabus and glossary). | `fundamentals-sources.md` | Not a main entry among the 1128 glossary terms (check in `fundamentals-sources.md`, 2026-10-20). The syllabus text has no STLC. |

## Conflicts with the owner's notes

| Owner line | ISTQB quote | Callout |
|---|---|---|
| "It involves executing the system (manually or via automation)" (What Is Software Testing) | "Dynamic testing involves the execution of software, while static testing does not." (S1 1.1) | yes |
| "Ensures requirements are met → builds the right product, not just a working one" (Why Testing Is Necessary) | verification: "meets specified requirements"; validation: "meets users' and other stakeholders' needs" (S1 1.1) | yes |
| "Quality: A degree of excellence of a product or a service." (Quality and QA) | "The degree to which a work product satisfies stated and implied requirements." (S3) | yes |
| "Quality assurance (QA): is any systematic process of determining whether a product or service meets specified requirements." (Quality and QA) | "Activities focused on providing confidence that quality requirements will be fulfilled." (S4); "testing and QA are not the same" (S1 1.2.2) | yes |
| "The main goal of testing is ensuring overall software quality." (Misconceptions, item 3) | "Test objectives can vary, depending upon the context" (S1 1.1.1) | yes |
| "QC always involves after executing the program." (QA vs QC) | "Dynamic testing involves the execution of software, while static testing does not." (S1 1.1); testing is a form of QC (S1 1.2.2) | yes |
| "QA is a verification process / QC is a validation process" (QA vs QC) | "testing involves verification ... it also involves validation" (S1 1.1) | yes |
| "QA is responsible for full SDLC / QC is responsible for STLC" (QA vs QC) | QA "is the responsibility of everyone on a project" (S1 1.2.2); STLC is not an ISTQB term | yes (fix round 1: the callout names "responsible" and STLC, not the scope of QA) |
| "ensure it works as expected before release" (What Is Software Testing) | "even if no defects are found, testing cannot prove test object correctness" (S1 1.3); testing "indirectly contributes to higher quality" (S1 1.2.1) | yes (added in fix round 1) |
| "QA is the process to create the deliverables" (QA vs QC) | QA "focuses on the implementation and improvement of processes" (S1 1.2.2); glossary QA: "Activities focused on providing confidence that quality requirements will be fulfilled." (S4) | yes (fix round 1: the line makes QA the process that produces the deliverables) |
| Misconceptions 1, 2, 4, 5 (programming, AI, automation tools, career) | No ISTQB statement | no (no conflict, marked as the tutorial's own view in the `istqb` block) |
| The four objectives of "Testing Objectives" (functional correctness, authorization, service level, usability) | A subset of the nine objectives and of the 25010 characteristics | no (a subset is not a conflict) |
| "QA Generic Skills" list | The same six skills as S1 1.5.1 | no |

## Notes for the page

- The owner image table has no image for this chapter, so the `notes` blocks have no `<MdxImage>`.
- The owner text under "Quality and Quality Assurance", "Testing Objectives", "Software Testing Misconceptions" and "Why software testing is necessary" had a `###` heading or a bold label with the same title as the `##` topic. The label is dropped because the `##` heading says the same.
