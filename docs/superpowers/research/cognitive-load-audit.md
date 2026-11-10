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
| HUGE sections | 151 | 63 |
| HIGH sections | 286 | 361 |
| HUGE pages | 17 | 12 |
| HUGE Q&A answers | 2 | 0 |

What changed (PR #70):

- The `সহজ English` panels of 32 AI/ML Testing pages (128 panels) were in Bangla. They are in English now, and `voiceErrors` fails a panel in the wrong language.
- The Technical text of 136 HUGE sections on 105 pages was edited for form only: long sentences split, lists, the main point first, bold run-in labels. In those sections the mean sentence fell from 13.2 to 10.8 words and the longest run of plain prose from 108 to 68 words. No claim changed (checked by fresh agents, 0 open FAILs).
- 45 `সহজ English` panels that were as term-dense as their Technical text were rewritten: mean sentence 10.3 to 8.6 words, terms per 100 words 11.0 to 10.3.
- The 2 HUGE Q&A answers (interview: the bug life cycle; Architecture practice question 3) are lists and short paragraphs now: both are HIGH.
- The reading-time pill counts code: words / 200 plus code lines / 20. 138 of 281 pages read longer, for example k6 Tags and Groups 3 to 8 minutes.

## What is left, and why

- **63 sections are still HUGE.** A form edit does not shorten a section, drop its terms, or remove its code and tables. Lowering them means a content decision: split a section or a page, move a reference table to its own page, or cut detail. A split changes heading ids, `N sections`, saved reading progress, and the sections that the fact-check and voices reports name, so it is the owner's call. The list is below.
- **16 `সহজ English` panels (of 58 at the start) are still as term-dense as their Technical text.** A second pass let the panels run longer and explain each kept term; 32 panels were rewritten. The rest keep terms that a reader types (commands, files, settings).
- **Linux command cards.** The densest cards (Troubleshooting, File Transfer, LVM, Archiving and Compressing, Create, Update, and Delete Users) have 8 rows, the cap of the sheet design (2 to 8 rows a card). They rank high only against other cards. A split would change the topic ids in `linux-progress` and needs a new check of every row, so they are unchanged.
- **Fundamentals: White-Box Techniques.** The ISTQB version covers the syllabus and stays long; the notes version of the same chapter is the short path, one switch away.

## Sections still HUGE

| Section | Flags | Score |
|---|---|---|
| [The LLM Decides › How it works](/ai-agents/llm-decides/#how-it-works) | LONG, JARGON, DENSE | 76 |
| [Build Context › How it works](/ai-agents/build-context/#how-it-works) | LONG, JARGON, DENSE | 74 |
| [Inference Economics › How it works](/ai-concepts/inference-economics/#how-it-works) | JARGON | 76 |
| [Production Monitoring › How it works](/ai-engineering/production-monitoring/#how-it-works) | LONG | 80 |
| [Data Pipelines › How it works](/ai-engineering/data-pipelines/#how-it-works) | LONG, JARGON | 79 |
| [Cost Optimization › How it works](/ai-engineering/cost-optimization/#how-it-works) | - | 78 |
| [Agent Orchestration › How it works](/ai-engineering/agent-orchestration/#how-it-works) | LONG | 77 |
| [Observability › How it works](/ai-engineering/observability/#how-it-works) | JARGON, DENSE | 76 |
| [Tool Calling › How it works](/ai-engineering/tool-calling/#how-it-works) | LONG, JARGON, DENSE | 75 |
| [Latency Optimization › How it works](/ai-engineering/latency-optimization/#how-it-works) | - | 75 |
| [Vector Database Fundamentals › In plain words](/ai-ml-testing/vector-db-basics/#in-plain-words) | - | 77 |
| [CI/CD Eval Pipelines › How it works](/ai-ml-testing/cicd-eval-pipelines/#how-it-works) | DENSE | 75 |
| [REST, GraphQL, and gRPC › Trade-offs](/course/rest-graphql-grpc/#trade-offs) | LONG, JARGON, DENSE | 76 |
| [OAuth 2.0 and OpenID Connect › How it works](/course/oauth-oidc/#how-it-works) | LONG, JARGON | 75 |
| [White-Box Techniques › Condition Testing](/fundamentals/white-box/#condition-testing) | LONG, JARGON, DENSE | 75 |
| [White-Box Techniques › Unit Testing](/fundamentals/white-box/#unit-testing) | LONG, JARGON, DENSE | 74 |
| [White-Box Techniques › Statement Coverage](/fundamentals/white-box/#statement-coverage) | LONG, JARGON, DENSE | 72 |
| [White-Box Techniques › Branch Coverage](/fundamentals/white-box/#branch-coverage) | LONG, JARGON, DENSE | 71 |
| [Reports and the Web Dashboard › Write your own summary with handleSummary](/k6/reports-and-dashboard/#write-your-own-summary-with-handlesummary) | LONG, JARGON | 84 |
| [Tags and Groups › Tags](/k6/tags-and-groups/#tags) | LONG, JARGON, DENSE | 82 |
| [k6 in CI › The workflow file](/k6/k6-in-ci/#the-workflow-file) | LONG, JARGON, DENSE | 82 |
| [Scenarios and Executors › The executors](/k6/scenarios-and-executors/#the-executors) | LONG, JARGON, DENSE | 80 |
| [Scenarios and Executors › An arrival-rate example](/k6/scenarios-and-executors/#an-arrival-rate-example) | JARGON, DENSE | 79 |
| [The k6 Test Lifecycle › A login and token example](/k6/test-lifecycle/#a-login-and-token-example) | DENSE | 78 |
| [Install k6 and Run Your First Script › Read the output](/k6/install-and-first-script/#read-the-output) | DENSE | 76 |
| [Case Study: Testing a Money-Transfer API › Pattern: scenarios built from a list of flows](/k6/case-study/#pattern-scenarios-built-from-a-list-of-flows) | JARGON, DENSE | 76 |
| [Reading the k6 Results › The built-in metrics](/k6/reading-results/#the-built-in-metrics) | LONG, JARGON, DENSE | 76 |
| [Choosing a Performance Testing Tool › Choosing by elimination](/k6/choosing-a-tool/#choosing-by-elimination) | LONG, JARGON | 75 |
| [Environment Variables and Test Data › Read data from a CSV file](/k6/env-and-data/#read-data-from-a-csv-file) | LONG, JARGON | 75 |
| [Live Results with InfluxDB and Grafana › Run InfluxDB 1.x with Docker](/k6/influxdb-and-grafana/#run-influxdb-1x-with-docker) | JARGON | 75 |
| [Choosing a Performance Testing Tool › The tools at a glance](/k6/choosing-a-tool/#the-tools-at-a-glance) | LONG, JARGON, DENSE | 72 |
| [The k6 Test Lifecycle › The four stages](/k6/test-lifecycle/#the-four-stages) | LONG, JARGON, DENSE | 71 |
| [What Is k6? › Why teams choose k6](/k6/what-is-k6/#why-teams-choose-k6) | LONG, JARGON, DENSE | 68 |
| [Hooks › What your hook can answer](/extend/hooks/#what-your-hook-can-answer) | LONG, JARGON | 83 |
| [Settings & the .claude Folder › The .claude folder](/configure/settings/#the-claude-folder) | JARGON, SENTENCES, DENSE | 82 |
| [Browser Testing with Playwright › Playwright MCP](/automate/playwright/#playwright-mcp) | LONG, JARGON | 81 |
| [Subagents › Create a subagent](/extend/subagents/#create-a-subagent) | LONG, JARGON, DENSE | 81 |
| [Headless & CI › Make CI runs repeatable with --bare](/automate/headless/#make-ci-runs-repeatable-with---bare) | JARGON | 81 |
| [CLAUDE.md & Memory › Keep it small: imports, rules, and AGENTS.md](/configure/claude-md/#keep-it-small-imports-rules-and-agentsmd) | LONG, JARGON | 80 |
| [Settings & the .claude Folder › The settings you will use most](/configure/settings/#the-settings-you-will-use-most) | LONG, JARGON, SENTENCES, DENSE | 80 |
| [The dMoney Codebase › The backend](/case-study/codebase-tour/#the-backend) | LONG, JARGON, DENSE | 80 |
| [GitHub Actions › Review pull requests automatically](/automate/github-actions/#review-pull-requests-automatically) | LONG, JARGON, DENSE | 79 |
| [The Practice Project › The setup inventory](/case-study/overview/#the-setup-inventory) | LONG, JARGON, DENSE | 79 |
| [Claude Models › The current lineup](/getting-started/models/#the-current-lineup) | JARGON | 79 |
| [Load and Browser Automation › The k6 load test](/case-study/automation/#the-k6-load-test) | LONG, JARGON, DENSE | 78 |
| [Skills & Commands › Write a SKILL.md](/extend/skills/#write-a-skillmd) | LONG, JARGON, DENSE | 77 |
| [From Issue to Reviewed PR › The pr-review skill](/case-study/pr-review/#the-pr-review-skill) | LONG, JARGON, DENSE | 77 |
| [Permission Modes › The six modes](/getting-started/permission-modes/#the-six-modes) | LONG, JARGON | 76 |
| [Plugins & Marketplaces › Example: the Superpowers plugin](/extend/plugins/#example-the-superpowers-plugin) | LONG, JARGON | 76 |
| [Headless & CI › Permissions in unattended runs](/automate/headless/#permissions-in-unattended-runs) | JARGON | 76 |
| [What to Fix in the Setup › Hooks and permissions](/case-study/lessons/#hooks-and-permissions) | LONG, JARGON, DENSE | 76 |
| [Install Claude Code › Log in](/getting-started/setup/#log-in) | LONG, JARGON | 76 |
| [Skills & Commands › Built-in commands for QA](/extend/skills/#built-in-commands-for-qa) | LONG, JARGON, DENSE | 76 |
| [From Issue to Reviewed PR › Turn each issue into acceptance criteria](/case-study/pr-review/#turn-each-issue-into-acceptance-criteria) | JARGON, DENSE | 76 |
| [Design, Execute, Fix, Retest › Step 2: Test cases with traceability](/case-study/test-and-retest/#step-2-test-cases-with-traceability) | LONG, JARGON, DENSE | 76 |
| [Load and Browser Automation › The Playwright suite](/case-study/automation/#the-playwright-suite) | LONG, JARGON, DENSE | 75 |
| [Hooks › QA examples](/extend/hooks/#qa-examples) | JARGON, DENSE | 75 |
| [The Practice Project › The chain from bug hunt to retest](/case-study/overview/#the-chain-from-bug-hunt-to-retest) | JARGON, DENSE | 75 |
| [MCP Servers › Add a server](/extend/mcp/#add-a-server) | LONG, JARGON, DENSE | 74 |
| [Bug Hunting with a Review Gate › A hook that adds graph context](/case-study/bug-hunt/#a-hook-that-adds-graph-context) | LONG, JARGON, DENSE | 74 |
| [Install Claude Code › Install the CLI](/getting-started/setup/#install-the-cli) | LONG, JARGON, DENSE | 72 |
| [Plugins & Marketplaces › Install and manage](/extend/plugins/#install-and-manage) | LONG, JARGON, DENSE | 72 |
| [Bug Hunting with a Review Gate › The read-only reviewer and its gate](/case-study/bug-hunt/#the-read-only-reviewer-and-its-gate) | LONG, JARGON, DENSE | 71 |
