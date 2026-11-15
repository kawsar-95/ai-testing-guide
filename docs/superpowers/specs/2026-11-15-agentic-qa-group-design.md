# Agentic QA: a tutorial group of 10 pages

Date: 2026-11-15.

## Why

The owner asked for the 10 topics of an agentic QA course outline to be added to the tutorial, each one broad and up to date. The outline runs from Claude basics for a tester to a Playwright framework and the whole agentic QA workflow. Only the order and the names of the topics come from the outline. No text of the course is copied, and the pages do not name the course, its school, or its website.

## Decisions

| Decision | Choice | Why |
|---|---|---|
| Where | A 7th tutorial group, `agentic-qa` ("Agentic QA"), after Case Study: parts 25 to 34 | The existing parts keep their numbers, routes, and anchors. The Case Study pages and their reports name parts 18 to 24, and they stay true. |
| Not a module | The pages are tutorial pages (`lib/nav.ts`, `content/agentic-qa/`, `scripts/route-map.json`) | The owner asked for the tutorial. The pages build on the earlier tutorial parts and link to them. |
| Overlap | Each page links to the tutorial page that already explains a mechanism (for example `/extend/subagents/`) and goes broader on the QA work | The tutorial does not explain one thing twice. |
| The practice app | The public dMoney repository (`kawsar-95/genAI-project`, commit 51db34a) | The Case Study uses it. Facts about it have no cite and are checked against its files, as on `/case-study/codebase-tour/`. |

## Pages

| Part | Slug | Title |
|---|---|---|
| 25 | `claude-for-qa` | Claude for Professional QA |
| 26 | `qa-workspace` | QA Workspace & Tooling |
| 27 | `project-setup` | Project, Jira, GitHub & MCP Setup |
| 28 | `requirements` | Requirement Analysis & Acceptance Criteria |
| 29 | `blast-radius` | Test Design & Blast Radius |
| 30 | `test-charters` | Exploring Features with Test Charters |
| 31 | `test-execution` | Test Execution & Bug Investigation |
| 32 | `multi-agent-qa` | A Multi-Agent QA System |
| 33 | `playwright-with-claude` | Playwright Automation with Claude |
| 34 | `playwright-framework` | Playwright Framework & the Agentic QA Workflow |

## The shape of a page

| Part | What it holds | Voices | Cites |
|---|---|---|---|
| Lede | One paragraph: what the reader learns and why it matters in test work | no | a fact in it has a cite |
| 4 to 8 topic sections | The topic, broad and current | yes | every fact |
| `## Practice` | A hands-on exercise on the reader's project or on dMoney, labelled as the tutorial's own | yes | commands, flags, and files |
| `## Common mistakes` | 4 to 7 mistakes with the fix | yes | facts; advice is labelled |
| `## Key words` | A table of the terms of the page, last | no | no: each row restates the page |

`tests/agentic-qa.test.ts` checks the order of the group, the files, the route map, the `#` heading and the metadata title, the last three sections, a `<Voices>` block in every section but Key words, and that the cites and the sources agree.

## Writing rules

- **Sources.** Official docs and primary sources only: code.claude.com/docs, playwright.dev, cli.github.com, docs.github.com, support.atlassian.com, modelcontextprotocol.io, the GitHub repository of each named tool, the ISTQB CTFL v4.0.1 syllabus and glossary, OWASP, and cucumber.io. No blogs, forums, videos, or AI summaries. No prices.
- **Up to date.** Every source was fetched on 2026-11-15, and a fact is on a page only if the fetched text says it. A feature that its docs mark experimental or preview is called that.
- **Advice.** Workflows, checklists, templates, and exercises are the tutorial's own, and the page says so.
- **Voices.** The rules of `CLAUDE.md` ("Voices"): the `সহজ English` and `বাংলা` panels give no fact that the Technical panel does not give.
- **Privacy.** No real person's name, login, password, token, or key. Values from the dMoney README and config are not repeated; the pages use placeholders.
- **Safety.** A step that writes to a database, Jira, or GitHub has a warning before it, and a person approves it.

## How the pages were made

1. The sources were fetched as text into a local cache (not committed): the Claude Code docs as Markdown, the other pages as their visible text, the syllabus as PDF text, and the glossary terms from its public API.
2. One writer session per page (Claude Code, `claude -p`, Opus) wrote the research note and the page from that cache. A checker script ran before the page was accepted: the page shape, the voices rules, the cites and sources, and that every quote of the research note is in the cached text.
3. Fresh checker sessions that did not write the pages (Claude Code, `claude -p`, Sonnet, read-only tools, no web) checked each page against the text of its sources and the dMoney files: one for the facts, one for the voices. A script recounted the FAILs and looked each quoted phrase of a PASS up in the sources. The briefs are in `docs/superpowers/research/agentic-qa-factcheck-brief.md`.
4. After each round, the orchestrating session (which did not write the pages) fixed each FAIL, or rebutted it with a quote from the source, and wrote what it did in the research note. Rounds 1 to 3 checked the whole of every page again: they found 181, then 67, then 54 FAILs, most of them in the Layman and Bangla panels. Each full round also found problems that the round before had missed, so the later rounds were verifications: a fresh checker got only the rows that the last round left open, the editor's action for each, and a diff of the page, and it checked every changed line too. All 10 pages reached 0 open rows after round 4, 5, or 6.
5. The reports are `docs/superpowers/research/agentic-qa-<slug>.factcheck.md` and `agentic-qa-<slug>.voices.factcheck.md`: every round as the checker wrote it, with config values that a checker quoted from the practice repository replaced by `<redacted>`. A page is done when both reports end with `Open FAILs: 0`.

## Limits

The writers and the checkers are agents. A full round found new problems each time, so a fourth full round could find more; the last rounds checked only the open rows and the changed lines. No person has read the pages yet, and no person who reads Bangla has read the Bangla.
