# Fact-check: Prep, Interview Preparation (round 1, 2026-10-13)

Round 2 on 9afc8a8. Changed items: `interview-prep-003`, `-007`, `-008` (advice wording only). The checker re-downloaded S1 (HTTP 200). The rows of the changed items are replaced. The other rows are kept from round 1 (commit 45c9a50).

Content under check: `content/prep/interview-prep.ts` at commit 45c9a50 (8 `task` items). The author's research notes (`prep-interview-prep.md`) were not used as evidence. The checker fetched each source again.

Sources fetched by the checker: S1 https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf (HTTP 200, `application/pdf`, 78 pages, footer "v4.0.1 ... 2024-09-15"). The checker downloaded the PDF with curl and extracted single pages with `pdftotext -f N -l N -layout`. The page numbers below are PDF pages. For this PDF, the PDF page number and the printed "Page N of 78" footer are the same.

Page-link check: `interview-prep-005` links `#page=57`. All 4 report fields that the item names are on PDF page 57. `interview-prep-006` links `#page=39`. The list of black-box techniques is on page 39. The BVA text ("boundaries of equivalence partitions") is on page 40, one page after the link.

| # | Item id | Claim | Source URL | Verdict | Quote from the fetched page, and why |
|---|---|---|---|---|---|
| 1 | interview-prep-001 | Use the product for 30 min, note 3 flows, read public pages, write 2 test ideas | - | OPINION-OK | Preparation advice. No checkable fact. |
| 2 | interview-prep-002 | Map each job requirement to 3 labels; 1 h getting-started guide for an unknown tool | - | OPINION-OK | Preparation advice. No checkable fact. |
| 3 | interview-prep-003 | Introduction in 3 parts, one proof per part, say it aloud 5 times | - | OPINION-OK | Preparation advice. (Round 2: unchanged.) |
| 4 | interview-prep-003 | "As my own rule of thumb, aim for about 250 words. Then time yourself and cut or add words until it fits in 2 minutes." | - | OPINION-OK | Round 2: the round-1 FAIL is closed. The figure is now labeled as the author's own rule of thumb, and the reader is told to time the text. The item no longer states a speaking rate as a fact. |
| 5 | interview-prep-004 | STAR = Situation, Task, Action, Result; spend most words on the Action | - | OPINION-OK | Interview-method advice, not a testing fact. No standards body defines STAR, so the checker could not check the expansion against an official source. It is not a testing claim in the scope of this check. |
| 6 | interview-prep-005 | Choose a bug with real user effect; tell it in a fixed order; say what you learned | - | OPINION-OK | Advice on how to tell the story. |
| 7 | interview-prep-005 | A defect report usually holds the steps | S1 #page=57 | PASS | p. 57: "Description of the failure to enable reproduction and resolution including the test steps that detected the anomaly". |
| 8 | interview-prep-005 | ... the expected and actual results | S1 #page=57 | PASS | p. 57: "Expected results and actual results". |
| 9 | interview-prep-005 | ... the severity | S1 #page=57 | PASS | p. 57: "Severity of the defect (degree of impact) on the interests of stakeholders or requirements". |
| 10 | interview-prep-005 | ... the test object with its environment | S1 #page=57 | PASS | p. 57: "Identification of the test object and test environment". The item's word "usually" matches the syllabus intro on p. 56: "A defect report logged during dynamic testing typically includes:". |
| 11 | interview-prep-006 | Equivalence partitioning is a black-box technique | S1 #page=39 | PASS | p. 39: "Commonly used black-box test techniques discussed in the following sections are:" then "Equivalence Partitioning". |
| 12 | interview-prep-006 | Boundary value analysis is a black-box technique | S1 #page=39 | PASS | p. 39: same list, "Boundary Value Analysis". |
| 13 | interview-prep-006 | EP splits inputs into groups; BVA adds the values at the edges of each group | S1 #page=39 | PASS | p. 39: "Equivalence Partitioning (EP) divides data into partitions (known as equivalence partitions)". p. 40: "Boundary Value Analysis (BVA) is a test technique based on exercising the boundaries of equivalence partitions." Note: the BVA sentence is on p. 40, one page after the link. |
| 14 | interview-prep-006 | Add ideas from your own experience (slow network, double click) | S1 #page=39 | OPINION-OK | Advice. It agrees with p. 39: "Experience-based test techniques are complementary to the black-box test techniques and white-box test techniques." |
| 15 | interview-prep-006 | Think aloud; 3 runs with a 15 min timer | - | OPINION-OK | Practice advice. |
| 16 | interview-prep-007 | Write 5 questions; "My advice: keep pay and leave for the offer talk, unless the interviewer starts the topic." | - | OPINION-OK | Round 2: labeled as advice. No checkable fact. |
| 17 | interview-prep-008 | Thank-you email same day; "My advice: keep the email short, under about 120 words"; one reminder "a few days after" the given date | - | OPINION-OK | Round 2: the figures are labeled as advice ("My advice", "about", "a few days"). No checkable fact. |

Open FAILs: 0
