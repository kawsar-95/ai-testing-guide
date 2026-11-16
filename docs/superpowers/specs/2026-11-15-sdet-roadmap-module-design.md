# SDET Roadmap module

Date: 2026-11-15. Status: see "Pages".

## Why

The owner asked for a new module that follows the curriculum of the course "Become an SDET Professional" (Road to SDET, Batch 21, https://www.roadtocareer.net/courses/sdet212026). That curriculum has 20 modules, from manual testing to an internship. Half of them already have a module or a page on this site. The other half (Postman, JavaScript, TypeScript, MySQL, problem solving, Node.js and Express, Next.js, Burp Suite, and Playwright for the UI and for APIs) have nothing.

The SDET Roadmap puts the 20 steps in the order of that curriculum. A step that the site already teaches is a `link` entry to that module or page, as the Course does with its 15 links. A step that the site does not teach gets a new page.

## What comes from the course

Only the order of the 20 steps and the names of the subjects. No sentence, list, or topic list of the course page is copied, and the course page is not cited: the text is the tutorial's own, and each fact cites an official source. The curriculum text that was read to plan the module is third-party text and stays out of the repo. The module home names the course in its source note, as AI/ML Testing names its course.

## The module

`lib/sdet/topics.ts` defines `SDET`: id `sdet`, label "SDET Roadmap", search group `sdet`, progress key `sdet-progress` (the 20 entry slugs, links too, as in the Course). The 7 parts are the tutorial's own grouping. They keep the order of the curriculum.

| # | Slug | Title | Kind | Target |
|---|---|---|---|---|
| 1 | `manual-testing` | Manual Testing | link | `/fundamentals/` |
| 2 | `api-testing-postman` | API Testing with Postman | topic | new page |
| 3 | `javascript` | JavaScript for Testers | topic | new page |
| 4 | `typescript` | TypeScript for Testers | topic | new page |
| 5 | `sql-mysql` | SQL with MySQL | topic | new page |
| 6 | `problem-solving` | Programming Problem Solving | topic | new page |
| 7 | `backend-node-express` | Backend with Node.js and Express | topic | new page |
| 8 | `frontend-nextjs` | Frontend with React and Next.js | topic | new page |
| 9 | `docker` | Docker | link | `/devops/docker-basics/` |
| 10 | `system-design` | System Design | link | `/course/` |
| 11 | `performance-testing` | Performance Testing with k6 | link | `/k6/` |
| 12 | `system-design-in-practice` | System Design in Practice | link | `/architecture/` |
| 13 | `linux` | Linux | link | `/linux/` |
| 14 | `security-testing` | Security Testing with Burp Suite | topic | new page |
| 15 | `aws` | AWS Basics | link | `/devops/cloud-concepts/` |
| 16 | `playwright-ui` | UI Automation with Playwright | topic | new page |
| 17 | `playwright-api` | API Automation with Playwright | topic | new page |
| 18 | `ci-cd` | CI/CD | link | `/devops/ci-cd/` |
| 19 | `interview-preparation` | Interview Preparation | link | `/interview/` |
| 20 | `real-project` | Practice on a Real Project | link | `/case-study/overview/` |

Parts: 1 "Testing basics" (1–2), 2 "Programming for testers" (3–6), 3 "Build the app you test" (7–9), 4 "System design and performance" (10–12), 5 "Servers, security, and the cloud" (13–15), 6 "Test automation and CI/CD" (16–18), 7 "Career" (19–20).

Step 12 of the course is the hands-on side of system design (caching, queues, rate limits, duplicate requests, monitoring). The Architecture module teaches those building blocks with a "What a tester can check" section, so it is the link. Step 20 of the course is an internship in a company; the site cannot give that, so the step links to the Case Study, which follows one real practice project.

## The shape of a page

The shape of the DevOps & Cloud full pages (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`), so a reader meets one shape for "learn a tool" pages:

| Section | Voices | Cites |
|---|---|---|
| Lede | no | no fact that a section does not cite |
| `## What it is` | yes | yes |
| `## How it works` | yes | yes |
| `## Try it` | yes | yes: every command, flag, file, and API |
| `## How a tester uses it` | yes | yes |
| `## Common mistakes` | yes | yes |
| `## What a tester can check` | yes | no: a "Tutorial advice" callout, and it says so |
| `## Key words` | no | no: each row restates a fact of the page |

`tests/sdet.test.ts` checks the shape with `sectionsWithSplits`, one `<Voices>` for each section but Key words, the `#` title, and that the cites of the Technical panels and `page.sources` agree in both directions.

## Writing rules

- **Sources.** The official documentation of the tool, language, or standard: playwright.dev, learning.postman.com, developer.mozilla.org, nodejs.org, typescriptlang.org, the MySQL 8.4 Reference Manual (at its Oracle-hosted copy, `docs.oracle.com/cd/E17952_01/mysql-8.4-en/`, because `dev.mysql.com` answers HTTP 403 to scripts and the claim check could not read it), expressjs.com, react.dev, nextjs.org, portswigger.net, owasp.org, the RFCs. No blogs, forums, courses, or AI summaries.
- **Cites.** Each fact of a Technical panel ends with a `<Cite>`. A command, a flag, an API, a file name, a version, a default, or a limit is a fact. A code block is covered by the cite of the sentence that introduces it.
- **Voices.** The Layman (`সহজ English`) and Bangla panels give no fact that the Technical panel of the same block does not give. They use plainer words and shorter sentences and may leave details out. Commands, code, product names, and common technical terms stay in English in the Bangla text, and the Bangla addresses the reader with আপনি.
- **Form.** Short sentences, lists, bold run-in labels, and the main point first.
- **Safety.** `## Try it` runs on a laptop with free tools. A security step runs only against a target that the reader owns or is allowed to test, and the page says so before the first step. No real login, token, or domain: `https://api.example.com`, `__ENV`-style values, or the public demo targets of the tool vendors.
- **Links.** Link to the site's own pages where they go deeper (Fundamentals, the Automate pages, k6, Linux, DevOps & Cloud).

## Checks

1. `npm test`: `tests/sdet.test.ts` and the shared tests (counts, search, precache, voices).
2. `python3 scripts/sdet_claimcheck.py [slug ...]`: every quote of a research note is in the text of the source that it cites.
3. An independent fact check: a fresh `claude -p` session for each page that did not write it, read-only, with the page and the text of its sources only. The brief is `docs/superpowers/research/sdet-factcheck-brief.md`. A script recounts the FAILs and looks each quote of a PASS up in the sources.
4. A page is done when `sdet-<slug>.factcheck.md` and `sdet-<slug>.voices.factcheck.md` both end with `Open FAILs: 0`.
5. `npm run build`, `check_routes.py`, `check_outline.py`, `check_sources.py`, `check_links.py`, and a look at the module in a browser at desktop and phone width, in both themes.

## Pages

| Page | Notes | Facts | Voices |
|---|---|---|---|
| api-testing-postman | done | Open FAILs: 0 (round 3) | Open FAILs: 0 (round 3) |
| javascript | done | Open FAILs: 0 (round 5) | Open FAILs: 0 (round 5) |
| typescript | done | Open FAILs: 0 (round 5) | Open FAILs: 0 (round 5) |
| sql-mysql | done | Open FAILs: 0 (round 8) | Open FAILs: 0 (round 8) |
| problem-solving | done | Open FAILs: 0 (round 3) | Open FAILs: 0 (round 3) |
| backend-node-express | done | Open FAILs: 0 (round 4) | Open FAILs: 0 (round 4) |
| frontend-nextjs | done | Open FAILs: 0 (round 5) | Open FAILs: 0 (round 5) |
| security-testing | done | Open FAILs: 0 (round 7) | Open FAILs: 0 (round 7) |
| playwright-ui | done | Open FAILs: 0 (round 8) | Open FAILs: 0 (round 8) |
| playwright-api | done | Open FAILs: 0 (round 5) | Open FAILs: 0 (round 5) |

## Changes after the first draft

- #80 added a Security Testing module while this module was written. Its Web Application Security page also tests with Burp Suite on Juice Shop. Step 14 keeps its own page, which now links to that module. Turning step 14 into a `link` entry to `/security/web-application-security/` is the other option.
- `create-next-app` 16.4.6 turns Cache Components on by default, and the dynamic route of the frontend page then fails `npm run build`. The page creates the app with `--no-cache-components`. `sdet-frontend-nextjs.md` has the runs.
- The checker of the security page was stopped by a safety classifier three times (the first try of round 2, and rounds 3 and 4), while it quoted or searched for the injection steps of "Try it". From round 5 it got a copy of the page in which the three attack strings are placeholders. `sdet-factcheck-brief.md` says how.
