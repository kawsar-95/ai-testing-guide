# Cognitive-load audit (2026-11-10)

An audit of the reading load of the 281 voiced pages, and what was done about it. The audit scripts are not in this repo; this note keeps the method, the result, and what is left, so the next pass starts from facts.

## Method

- Unit: the `##` section (`SectionFocus` shows one at a time), in its Technical voice; a Fundamentals chapter in its ISTQB version. Pages, Q&A answers, and Linux command cards are ranked as separate corpora.
- Axes: length; distinct terms (code spans, short bold terms, acronyms, CamelCase, names); terms per 100 words; average sentence length; the longest run of plain paragraphs with no visual anchor (heading, list, table, code, callout, image, or bold run-in label); dense info (table cells plus code lines).
- An axis is flagged when the unit is in the top 10 % of its corpus (p90). HUGE means 3 or more flags, or a mean percentile rank of 75 or more; HIGH means 2 flags, or 65 or more. The thresholds are relative to this site: "top 10 % here", not "unreadable".
- The after numbers below use the before p90 lines and the before percentiles, so an edit is not re-ranked against a corpus that changed too.

## Result

| | Before | After |
|---|---|---|
| HUGE sections | 151 | 34 |
| HIGH sections | 286 | 406 |
| HUGE pages | 17 | 12 |
| HUGE Q&A answers | 2 | 0 |

What changed (PRs #70 to #74):

- The `সহজ English` panels of 32 AI/ML Testing pages (128 panels) were in Bangla. They are in English now, and `voiceErrors` fails a panel in the wrong language.
- The Technical text of 136 HUGE sections on 105 pages was edited for form only: long sentences split, lists, the main point first, bold run-in labels. In those sections the mean sentence fell from 13.2 to 10.8 words and the longest run of plain prose from 108 to 68 words. No claim changed (checked by fresh agents, 0 open FAILs).
- 45 `সহজ English` panels that were as term-dense as their Technical text were rewritten in a first pass: mean sentence 10.3 to 8.6 words, terms per 100 words 11.0 to 10.3.
- The 2 HUGE Q&A answers (interview: the bug life cycle; Architecture practice question 3) are lists and short paragraphs now: both are HIGH.
- A second pass rewrote 32 more `সহজ English` panels, allowing longer text that explains each kept term: panels as term-dense as their Technical text fell from 58 to 16.
- 47 HUGE sections were split into two `##` sections at a block boundary, with no text rewritten: 36 on the free-form k6 and tutorial pages, and 11 on pages of a fixed shape (AI Engineering, AI Agents, AI Concepts, Course), whose tests now accept a continuation section (`tests/shape.ts`). The first part keeps its heading and anchor, so old links work. Sections grew from 1,540 to 1,587.
- The reading-time pill counts code: words / 200 plus code lines / 20. 138 of 281 pages read longer, for example k6 Tags and Groups 3 to 8 minutes.

## What is left, and why

- **34 sections are still HUGE.** 2 are AI/ML Testing pages, whose pages are generated from data with a fixed section list; 4 are Fundamentals sections (each has an ISTQB and a notes version); the rest are short sections or ones built on one table (a table cannot be cut between blocks), where a split would leave two thin sections. The list is below.
- **Linux command cards.** The densest cards (Troubleshooting, File Transfer, LVM, Archiving and Compressing, Create, Update, and Delete Users) have 8 rows, the cap of the sheet design (2 to 8 rows a card). They rank high only against other cards. A split would change the topic ids in `linux-progress` and needs a new check of every row, so they are unchanged.
- **Fundamentals: White-Box Techniques.** The ISTQB version covers the syllabus and stays long; the notes version of the same chapter is the short path, one switch away.

## Sections still HUGE

| Section | Flags | Score |
|---|---|---|
| [Vector Database Fundamentals › In plain words](/ai-ml-testing/vector-db-basics/#in-plain-words) | - | 77 |
| [CI/CD Eval Pipelines › How it works](/ai-ml-testing/cicd-eval-pipelines/#how-it-works) | DENSE | 75 |
| [REST, GraphQL, and gRPC › Trade-offs](/course/rest-graphql-grpc/#trade-offs) | LONG, JARGON, DENSE | 76 |
| [White-Box Techniques › Condition Testing](/fundamentals/white-box/#condition-testing) | LONG, JARGON, DENSE | 75 |
| [White-Box Techniques › Unit Testing](/fundamentals/white-box/#unit-testing) | LONG, JARGON, DENSE | 74 |
| [White-Box Techniques › Statement Coverage](/fundamentals/white-box/#statement-coverage) | LONG, JARGON, DENSE | 72 |
| [White-Box Techniques › Branch Coverage](/fundamentals/white-box/#branch-coverage) | LONG, JARGON, DENSE | 71 |
| [Tags and Groups › Tags](/k6/tags-and-groups/#tags) | JARGON, DENSE | 80 |
| [Scenarios and Executors › An arrival-rate example](/k6/scenarios-and-executors/#an-arrival-rate-example) | JARGON, DENSE | 79 |
| [k6 in CI › The two scripts](/k6/k6-in-ci/#the-two-scripts) | JARGON, DENSE | 79 |
| [The k6 Test Lifecycle › A login and token example](/k6/test-lifecycle/#a-login-and-token-example) | DENSE | 78 |
| [Case Study: Testing a Money-Transfer API › Pattern: scenarios built from a list of flows](/k6/case-study/#pattern-scenarios-built-from-a-list-of-flows) | JARGON, DENSE | 76 |
| [Install k6 and Run Your First Script › Read the output](/k6/install-and-first-script/#read-the-output) | DENSE | 76 |
| [Reports and the Web Dashboard › Reading the Metrics Data](/k6/reports-and-dashboard/#reading-the-metrics-data) | JARGON | 75 |
| [Live Results with InfluxDB and Grafana › Run InfluxDB 1.x with Docker](/k6/influxdb-and-grafana/#run-influxdb-1x-with-docker) | JARGON | 75 |
| [Choosing a Performance Testing Tool › The tools at a glance](/k6/choosing-a-tool/#the-tools-at-a-glance) | LONG, JARGON, DENSE | 72 |
| [Headless & CI › Make CI runs repeatable with --bare](/automate/headless/#make-ci-runs-repeatable-with---bare) | JARGON | 81 |
| [Claude Models › The current lineup](/getting-started/models/#the-current-lineup) | JARGON | 79 |
| [Hooks › What your hook can answer](/extend/hooks/#what-your-hook-can-answer) | - | 79 |
| [Permission Modes › The six modes](/getting-started/permission-modes/#the-six-modes) | LONG, JARGON | 78 |
| [From Issue to Reviewed PR › The 7 steps](/case-study/pr-review/#the-7-steps) | LONG, JARGON | 78 |
| [The Practice Project › The setup inventory](/case-study/overview/#the-setup-inventory) | LONG, JARGON, DENSE | 77 |
| [The Practice Project › The hook chain](/case-study/overview/#the-hook-chain) | LONG, JARGON, DENSE | 77 |
| [Headless & CI › Permissions in unattended runs](/automate/headless/#permissions-in-unattended-runs) | JARGON | 76 |
| [From Issue to Reviewed PR › Turn each issue into acceptance criteria](/case-study/pr-review/#turn-each-issue-into-acceptance-criteria) | JARGON, DENSE | 76 |
| [Load and Browser Automation › The k6 load test](/case-study/automation/#the-k6-load-test) | LONG, JARGON | 76 |
| [Subagents › Tools and MCP access](/extend/subagents/#tools-and-mcp-access) | LONG, JARGON | 76 |
| [The Practice Project › The chain from bug hunt to retest](/case-study/overview/#the-chain-from-bug-hunt-to-retest) | JARGON, DENSE | 76 |
| [CLAUDE.md & Memory › Keep it small: imports, rules, and AGENTS.md](/configure/claude-md/#keep-it-small-imports-rules-and-agentsmd) | JARGON | 75 |
| [Browser Testing with Playwright › Useful options](/automate/playwright/#useful-options) | JARGON, SENTENCES | 75 |
| [Skills & Commands › Pre-approve tools](/extend/skills/#pre-approve-tools) | LONG, JARGON, DENSE | 74 |
| [Skills & Commands › Write a SKILL.md](/extend/skills/#write-a-skillmd) | LONG, JARGON, DENSE | 73 |
| [Load and Browser Automation › The Playwright suite](/case-study/automation/#the-playwright-suite) | LONG, JARGON, DENSE | 73 |
| [Settings & the .claude Folder › The .claude folder](/configure/settings/#the-claude-folder) | JARGON, SENTENCES, DENSE | 72 |
