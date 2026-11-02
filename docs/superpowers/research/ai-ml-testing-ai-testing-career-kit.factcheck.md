# Fact check: AI/ML Testing, AI Testing Career Kit

Page: `content/ai-ml-testing/ai-testing-career-kit.mdx`. Date: 2026-11-02.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://www.journeytoautomation.org/courseAIMLTesting-phase1-and-phase2 | yes (SPA shell; text taken from the scraped syllabus in this repo) | The course provider's own page |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | The course's deliverable is a certificate, a six-project portfolio, and a resume/LinkedIn/interview kit. | 1 | PASS | Syllabus lines for the certificate, portfolio, and kit. |
| 2 | "The portfolio of six projects referenced by the course maps onto the pages already built". | none | FAIL, fixed | The syllabus gives only the count (6), not the projects. Rewritten as "One reasonable way to split this module's work into project-sized entries", clearly the tutorial's own split. |
| 3 | The site's interview module covers behavioural questions, STAR format, take-home exercises, and salary negotiation, at `/prep/interview/`. | none | FAIL, fixed | The route is `/interview/` (`lib/interview.ts`), and the page is 50 manual testing questions plus system design practice, with no STAR or salary content. Rewritten in the description, in plain words, in Mistake 4, and in both advice bullets in all three panels. |
| 4 | Twenty practice questions are enough for a first-round interview. | 1 (course lists "20 common ... questions") | PASS | The count matches Session 26; "enough for a first round" is the tutorial's judgment. |
| 5 | Resume template and two-minute answer structure. | none | PASS | Tutorial's own. |
| 6 | Mistake 5: six separate entries are easier to skim. | 1 | PASS | The cite supports "six projects"; "easier to skim" is the tutorial's judgment. |

Open FAILs: 0
