# Test Design & Blast Radius — research notes (2026-11-15)

## Sources
S1. ISTQB Certified Tester Foundation Level Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-11-15 — cache: istqb-ctfl.txt
S2. ISTQB Glossary: test condition — ISTQB — https://glossary.istqb.org/en_US/term/test-condition — accessed 2026-11-15 — cache: istqb-term-test-condition.txt
S3. ISTQB Glossary: test case — ISTQB — https://glossary.istqb.org/en_US/term/test-case — accessed 2026-11-15 — cache: istqb-term-test-case.txt
S4. ISTQB Glossary: impact analysis — ISTQB — https://glossary.istqb.org/en_US/term/impact-analysis — accessed 2026-11-15 — cache: istqb-term-impact-analysis.txt
S5. ISTQB Glossary: regression testing — ISTQB — https://glossary.istqb.org/en_US/term/regression-testing — accessed 2026-11-15 — cache: istqb-term-regression-testing.txt
S6. gh pr diff — GitHub (cli.github.com) — https://cli.github.com/manual/gh_pr_diff — accessed 2026-11-15 — cache: gh-pr-diff.txt
S7. gh pr view — GitHub (cli.github.com) — https://cli.github.com/manual/gh_pr_view — accessed 2026-11-15 — cache: gh-pr-view.txt
S8. Code intelligence plugins — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/plugins/code-intelligence — accessed 2026-11-15 — cache: cc-plugins-code-intel.txt
S9. Tools reference — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/tools-reference — accessed 2026-11-15 — cache: cc-tools-reference.txt
S10. Serena README — oraios (GitHub) — https://github.com/oraios/serena — accessed 2026-11-15 — cache: tool-serena.txt
S11. graphify README — safishamsi (GitHub) — https://github.com/safishamsi/graphify — accessed 2026-11-15 — cache: tool-graphify.txt
S12. Create custom subagents — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/sub-agents — accessed 2026-11-15 — cache: cc-sub-agents.txt
S13. ISTQB Glossary: integration testing — ISTQB — https://glossary.istqb.org/en_US/term/integration-testing — accessed 2026-11-15 — cache: istqb-term-integration-testing.txt
S14. ISTQB Glossary: negative testing — ISTQB — https://glossary.istqb.org/en_US/term/negative-testing — accessed 2026-11-15 — cache: istqb-term-negative-testing.txt
S15. ISTQB Glossary: boundary value analysis — ISTQB — https://glossary.istqb.org/en_US/term/boundary-value-analysis — accessed 2026-11-15 — cache: istqb-term-boundary-value-analysis.txt
S16. WSTG v4.2: Introduction to Business Logic — OWASP — https://github.com/OWASP/wstg/blob/v4.2/document/4-Web_Application_Security_Testing/10-Business_Logic_Testing/00-Introduction_to_Business_Logic.md — accessed 2026-11-15 — cache: owasp-bl-intro.txt
S17. WSTG v4.2: Test Business Logic Data Validation (WSTG-BUSL-01) — OWASP — https://github.com/OWASP/wstg/blob/v4.2/document/4-Web_Application_Security_Testing/10-Business_Logic_Testing/01-Test_Business_Logic_Data_Validation.md — accessed 2026-11-15 — cache: owasp-bl-datavalid.txt
S18. WSTG v4.2: Test Number of Times a Function Can Be Used Limits (WSTG-BUSL-05) — OWASP — https://github.com/OWASP/wstg/blob/v4.2/document/4-Web_Application_Security_Testing/10-Business_Logic_Testing/05-Test_Number_of_Times_a_Function_Can_Be_Used_Limits.md — accessed 2026-11-15 — cache: owasp-bl-limits.txt
S19. ISTQB Glossary: traceability — ISTQB — https://glossary.istqb.org/en_US/term/traceability — accessed 2026-11-15 — cache: istqb-term-traceability.txt
S20. ISTQB Glossary: risk-based testing — ISTQB — https://glossary.istqb.org/en_US/term/risk-based-testing — accessed 2026-11-15 — cache: istqb-term-risk-based-testing.txt
S21. Extend Claude with skills — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/skills — accessed 2026-11-15 — cache: cc-skills.txt
S22. Best practices for Claude Code — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/best-practices — accessed 2026-11-15 — cache: cc-best-practices.txt
S23. Pull requests (GraphQL API reference) — GitHub (docs.github.com) — https://docs.github.com/en/graphql/reference/pulls — accessed 2026-11-15 — cache: gh-gql-pulls.txt (fetched in round 1)

Notes:
- The cached owasp.org copies of the Business Logic pages (`owasp-wstg-bizlogic*.txt`) hold only the guide's table of contents and foreword. The page text was fetched from OWASP's own repository at the v4.2 release tag (S16–S18). The `master` paths returned 404, and owasp.org could not be reached from this machine.
- dMoney facts come from the public practice repo at commit 51db34a (`dmoney-repo/`). They have no `<Cite>` on the page.
- "Blast radius", "impact map", the three rings, the scenario category list, the test case template, the prompt, and the review checklist are the tutorial's own, and the page labels them so.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | Test analysis answers "what to test?"; it analyzes the test basis to find testable features. | "Test analysis includes analyzing the test basis to identify testable features" ... "Test analysis answers the question" | S1 | §1.4.1 |
| C2 | Test analysis defines test conditions and prioritizes them by risk. | "Associated test conditions are defined and prioritized, taking the related risks and risk levels into account" | S1 | |
| C3 | Test design answers "how to test?"; it turns test conditions into test cases and other testware, such as test charters. | "Test design includes elaborating the test conditions into test cases and other testware (e.g., test charters)" ... "Test design answers the question" | S1 | |
| C4 | Test design also defines test data requirements and designs the test environment. | "Test design also includes defining the test data requirements, designing the test environment" | S1 | |
| C5 | A test condition is a testable aspect of a component or system that is intended to be tested. | "A testable aspect of a component or system that is intended to be tested." | S2 | |
| C6 | The syllabus names acceptance criteria as an example of a test condition. | "Test analysis work products include: (prioritized) test conditions (e.g., acceptance criteria" | S1 | |
| C7 | A test case is a set of preconditions, inputs, actions, expected results, and postconditions, developed from test conditions. | "A set of preconditions, inputs, actions (where applicable), expected results and postconditions, developed based on test conditions." | S3 | |
| C8 | Impact analysis definition. | "The identification of all work products affected by a change, including an estimate of the resources needed to accomplish the change." | S4 | |
| C9 | Regression testing is change-related testing for defects introduced or uncovered in unchanged areas. | "A type of change-related testing to detect whether defects have been introduced or uncovered in unchanged areas of the software." | S5 | |
| C10 | A change can harm the same component, other components in the same system, or other connected systems. | "component where the change was made, other components in the same system, or even other" ... "connected systems" | S1 | §2.2.3 |
| C11 | The syllabus advises an impact analysis first, to find the extent of regression testing. | "It is advisable first to perform an impact analysis to recognize the extent of the regression testing." | S1 | |
| C12 | The scope of maintenance testing depends on the risk of the change, the size of the system, and the size of the change. | "The degree of risk of the change" ... "The size of the existing system" ... "The size of the change" | S1 | §2.3 |
| C13 | Maintenance testing checks the change and looks for regressions in the unchanged parts, usually most of the system. | "checking for possible regressions in parts of the system that remain unchanged (which is usually most of the system)" | S1 | |
| C14 | Triggers: modifications such as hot fixes, upgrades or migrations of the environment, and retirement. | "Modifications, such as planned enhancements (i.e., release-based), corrective changes or hot fixes." ... "Upgrades or migrations of the operational environment" ... "Retirement, such as when an application reaches the end of its life" | S1 | |
| C15 | A migration can need tests of data conversion. | "tests of data conversion when data from another application is migrated into the system being maintained" | S1 | |
| C16 | `gh pr diff` views changes in a pull request; with no argument it uses the PR of the current branch. | "View changes in a pull request." ... "Without an argument, the pull request that belongs to the current branch" | S6 | |
| C17 | `--name-only` displays only the names of changed files. | "Display only names of changed files" | S6 | |
| C18 | `--exclude` removes files matching a glob pattern and can be repeated. | "Exclude files matching glob patterns from the diff" ... "You can repeat the flag to exclude multiple patterns." | S6 | |
| C19 | Example exclude pattern `'*.generated.*'`. | "gh pr diff --name-only --exclude '*.generated.*'" | S6 | |
| C20 | `-R`/`--repo` selects another repository in OWNER/REPO format. | "Select another repository using the [HOST/]OWNER/REPO format" | S6 | Same text in S7. |
| C21 | `gh pr view --json` outputs JSON with the given fields. | "Output JSON with the specified fields" | S7 | |
| C22 | Its fields include `files`, `changedFiles`, and `closingIssuesReferences`. | "baseRefOid, body, changedFiles, closed, closedAt, closingIssuesReferences, comments" ... "deletions, files, fullDatabaseId" | S7 | The page's reading of `closingIssuesReferences` (the issues the PR closes) is from the field name. |
| C23 | The LSP tool finds all references, traces call hierarchies, and finds implementations. | "Find all references to a symbol" ... "Trace call hierarchies" ... "Find implementations of an interface" | S9 | |
| C24 | The LSP tool is inactive until you install a code intelligence plugin for your language. | "Claude Code keeps the tool inactive until you install a" | S9 | |
| C25 | Plugin language servers are not started in cloud sessions. | "Claude Code doesn't start plugin language servers, so Claude gets no diagnostics or code navigation there" | S8 | |
| C26 | A code intelligence plugin lets Claude find definitions and references by symbol instead of by text search. | "finds definitions and references by symbol instead of by text search" | S8 | |
| C27 | The plugin does not include the language server: install the binary first, then the plugin. | "It doesn't include the language server. Install the language server binary first, then the plugin" | S8 | |
| C28 | Install command for TypeScript and JavaScript. | "/plugin install typescript-lsp@claude-plugins-official" | S8 | |
| C29 | The LSP tool is read-only. | "The tool is read-only." | S8 | |
| C30 | Serena is an MCP server with symbol-level tools, such as "find referencing symbols". | "operating at the symbol level and exploiting relational structure" ... "find referencing symbols" ... "It integrates with any client/LLM via the model context protocol" | S10 | |
| C31 | Serena uses language servers by default, with support for over 40 languages. | "which is used by default" ... "support for over 40 programming languages" | S10 | |
| C32 | graphify is a Claude Code skill that builds a knowledge graph of your files. | "A Claude Code skill." ... "it reads your files, builds a knowledge graph" | S11 | |
| C33 | graphify parses code with tree-sitter and a call-graph pass. | "AST via tree-sitter + call-graph pass" | S11 | |
| C34 | `graphify hook install` rebuilds the graph after every commit. | "installs a post-commit hook that rebuilds the graph after every commit" | S11 | |
| C35 | Every graphify edge is tagged EXTRACTED, INFERRED, or AMBIGUOUS, so you know what was found and what was guessed. | "Every edge is tagged EXTRACTED, INFERRED, or AMBIGUOUS - you always know what was found vs guessed." | S11 | |
| C36 | Claude delegates to Explore to search or understand a codebase without making changes. | "Claude delegates to Explore when it needs to search or understand a codebase without making changes." | S12 | |
| C37 | Integration testing is a test level that focuses on interactions between components or systems. | "A test level that focuses on interactions between components or systems." | S13 | |
| C38 | Negative testing uses a component or system in a way that it is not intended. | "A test type in which a component or system is used in a way that it is not intended." | S14 | |
| C39 | In boundary value analysis, the test conditions are boundary values. | "A black-box test technique in which the test conditions are boundary values." | S15 | |
| C40 | OWASP business logic testing asks testers to develop abuse and misuse cases. | "develop abused and misuse cases" | S16 | |
| C41 | A vulnerability scanner cannot detect this type of flaw. | "This type of vulnerability cannot be detected by a vulnerability scanner" | S16 | |
| C42 | Idea: go from step 1 straight to step 3. | "What happens if the user goes from step 1 straight to step 3?" | S16 | |
| C43 | Idea: use a function more times than allowed, such as a one-time discount. | "misuse cases must be created that strive to exercise parts of the application/functions/ or actions more than the allowable number of times" ... "apply a discount once per transaction" | S18 | |
| C44 | Check that all checks run on the back end and cannot be bypassed. | "Validate that all checks are occurring on the back end and can't be bypassed." | S17 | |
| C45 | Using one card at several places very quickly can exceed a limit. | "if I use my credit card at multiple locations very quickly it may be possible to exceed my limit" | S17 | The page maps it to parallel transfer requests as the tutorial's example. |
| C46 | Traceability definition. | "The ability to establish explicit relationships between related work products or items within work products." | S19 | |
| C47 | Tracing test cases to requirements shows the requirements are covered; good traceability makes it possible to determine the impact of changes. | "Traceability of test cases to requirements can verify that the requirements are covered by test cases." ... "good traceability makes it possible to determine the impact of changes" | S1 | §1.4.4 |
| C48 | Risk-based testing definition. | "A test approach in which the management, selection, prioritization, and use of test activities and resources are based on corresponding risk types and risk levels." | S20 | |
| C49 | The risk level comes from the likelihood of the risk and its impact. | "the probability of the risk occurrence" ... "the consequences of this occurrence" ... "These two factors express the risk level" | S1 | §5.2.1 |
| C50 | Risk-based prioritization runs the cases for the most important risks first; a lower-priority case that a higher one depends on runs first. | "Test cases covering the most important risks are executed first." ... "If a test case with a higher priority is dependent on a test case with a lower priority, the lower priority test case must be executed first." | S1 | §5.1.5 |
| C51 | A skill is a SKILL.md file with YAML frontmatter and instructions; the description helps Claude decide when to load it. | "Every skill needs a SKILL.md file with two parts: YAML frontmatter" ... "the description helps Claude decide when to load the skill automatically" | S21 | |
| C52 | `allowed-tools` grants tools to a skill. | "an allowed-tools grant goes through the normal" | S21 | |
| C53 | `context: fork` runs the skill in its own subagent context. | "context: fork, which runs the skill in its own subagent context" | S21 | |
| C54 | A custom subagent with only `tools: Read, Grep, Glob` is a reviewer that cannot edit anything, enforced by Claude Code. | "only tools: Read, Grep, Glob. Now it's a reviewer that can't edit anything, and that limit is enforced by Claude Code rather than requested in a prompt" | S22 | |
| C55 | `/code-review` reviews the diff in a fresh subagent that never saw your conversation. | "reviews the diff in a fresh subagent that never saw your conversation" | S22 | |
| C56 | dMoney `blast-radius` skill rule: every impact row comes from a traced chain. | "Rule: every impact row must come from a traced chain." | dmoney-repo/.claude/skills/blast-radius/SKILL.md | |
| C57 | The skill is read-only: never edit, stage, stash, or commit. | "Read-only: never edit, stage, stash, or commit." | dmoney-repo/.claude/skills/blast-radius/SKILL.md | |
| C58 | The skill collects committed, staged, unstaged, and untracked changes. | "Combine them into one list, tagging each file's Source (committed / staged / unstaged / untracked)" | dmoney-repo/.claude/skills/blast-radius/SKILL.md | |
| C59 | The skill counts fan-in: what depends on a thing. | "Fan-in counts what depends on a thing (importers or callers)." | dmoney-repo/.claude/skills/blast-radius/SKILL.md | |
| C60 | The skill rates a migration as DB-wide; for a model column change it checks every query on the table, raw SQL too, and asks whether a migration is needed. | "Migration \| DB-wide" ... "Every query on that table, incl. raw SQL in" ... "is a migration needed?" | dmoney-repo/.claude/skills/blast-radius/SKILL.md | |
| C61 | The skill treats package.json, the lockfile, .env.example, and workflow files as project-wide config. | "package.json, lockfile, .env.example, next.config.ts, tsconfig.json, .github/workflows/* \| Config \| Project-wide" | dmoney-repo/.claude/skills/blast-radius/SKILL.md | |
| C62 | The PR #8 report names `checkCustomerLimits` as the changed symbol with the highest fan-in: 3 callers → 3 endpoints → 5 pages. | "Highest fan-in: checkCustomerLimits (3 callers → 3 endpoints → 5 pages)" | dmoney-repo/dmoney-transaction-api/.artifacts/PR-8_blast-radius.md | |
| C63 | Payment and Withdraw appear as "Medium (regression only)" although their own code did not change. | "That's why Payment and Withdraw appear as Medium (regression only) rows even though their own code didn't change." | dmoney-repo/dmoney-transaction-api/.artifacts/PR-8_blast-radius.md | |
| C64 | The PR #8 report found swagger documented only 201, 208, and 404 for sendmoney, so new 400s were undocumented. | "swagger/swaggerTrnx.yaml:438-470 documents only 201, 208 and 404 for sendmoney, so the new 400s are undocumented" | dmoney-repo/dmoney-transaction-api/.artifacts/PR-8_blast-radius.md | |
| C65 | The report maps endpoints to pages and roles, for example `/customer/send-money` for Customer. | "/customer/send-money \| Customer \| page.tsx (direct)" | dmoney-repo/dmoney-transaction-api/.artifacts/PR-8_blast-radius.md | |
| C66 | The PR #8 report confirmed one finding with a read-only query. | "confirmed with a read-only query on 2026-10-07" | dmoney-repo/dmoney-transaction-api/.artifacts/PR-8_blast-radius.md | |
| C67 | PR #8 is in the public repository kawsar-95/genAI-project and changed Send Money. | "[PR #8](https://github.com/kawsar-95/genAI-project/pull/8)" ... "fix/send-money-bugs vs main" | dmoney-repo/dmoney-transaction-api/.artifacts/PR-8_blast-radius.md | |
| C68 | The dMoney `test-design` skill: a title starts with "Verify" and must not disclose the expected outcome. | "Must not disclose the expected outcome." | dmoney-repo/.claude/skills/test-design/SKILL.md | Also "Must start with" "Verify". |
| C69 | The dMoney `test-design` self-check: every requirement highlight is covered by at least one test case. | "Every requirement highlight is covered by ≥ 1 test case." | dmoney-repo/.claude/skills/test-design/SKILL.md | |
| C70 | The report file path used in the practice. | "Blast Radius: fix/send-money-bugs vs main (1a99e4c)" | dmoney-repo/dmoney-transaction-api/.artifacts/PR-8_blast-radius.md | File: `dmoney-transaction-api/.artifacts/PR-8_blast-radius.md`. |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F14 | Fixed: deleted "not an ISTQB term"; the page says only that the tutorial uses the name. Same in the Bangla panel. |
| facts | F29 | Fixed: added S23 (GitHub GraphQL reference, Pull requests): "`closingIssuesReferences` (IssueConnection): List of issues that may be closed by this pull request." The page now says "may be closed". |
| facts | F31 | Fixed: "If the branch has no pull request yet, ask Claude to …" |
| facts | F43 | Fixed: the limit is now "Rebuild it after a change (the tutorial's note)", and the hook sentence keeps S11. |
| facts | F61 | Fixed: labelled as the tutorial's practice. Same in all three panels. |
| facts | F91 | Fixed: S21 wording, "tools that Claude can use without asking permission during the turn that invokes the skill". |
| facts | F99 | Fixed: "Expect JSON with the changed files and the issues that the pull request may close", with S7 and S23. Same in all three panels. |
| facts | F112 | Fixed: the body now says "a black-box test technique" with S15 ("A black-box test technique in which the test conditions are boundary values."), so the Key words row matches it. |
| voices | V3 | Fixed: the Layman now uses the Technical definition and "resources". |
| voices | V5 | Fixed: the Technical condition is now "no pull request yet" (F31), so the Layman matches; "Without an argument". |
| voices | V6 | Fixed: as V5; dropped "ই". |
| voices | V7 | Fixed: "of the changed symbols". |
| voices | V8 | Fixed: "পরিবর্তিত symbol-গুলোর মধ্যে". |
| voices | V9 | Fixed: the claim is now the tutorial's practice in all three panels (F61). |
| voices | V13 | Fixed: "If an important test depends on a less important test, the less important test runs first." |
| voices | V14 | Fixed: "The dMoney test-design skill has a title rule". |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | `closingIssuesReferences` is the list of issues that may be closed by the pull request. | "`closingIssuesReferences` (IssueConnection): List of issues that may be closed by this pull request." | S23 | cache: gh-gql-pulls.txt (fetched in round 1 from the docs.github.com article API) |
| R2 | Boundary value analysis is a black-box test technique in which the test conditions are boundary values. | "A black-box test technique in which the test conditions are boundary values." | S15 | |
| R3 | `allowed-tools` lists tools that Claude can use without asking permission during the turn that invokes the skill. | "Tools Claude can use without asking permission during the turn that invokes this skill." | S21 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F17 | Fixed: "typically depends on". Same in all three panels. |
| facts | F55 | Fixed: deleted the data-conversion sentence from the Data section (all three panels). In the maintenance-testing section it now has the syllabus condition: "when data from another application is migrated into the system". |
| voices | V7 | Fixed: cite 9 for the plugin, cite 8 for the language server. |
| voices | V17 | Fixed: added "each edge value comes from a criterion or the code". |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | When data from another application is migrated into the system, data conversion can need tests. | "or tests of data conversion when data from another application is migrated into the system being maintained" | S1 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F104 | Fixed: "What depends on a symbol". |
| voices | V5 | Fixed: the cite moved to the end of the bullet group. |
| voices | V6 | Fixed: "The fields include `files` and `closingIssuesReferences`"; the S23 cite stays on the `closingIssuesReferences` sentence. |
| voices | V7 | Fixed: as V5, in the Bangla panel. |
| voices | V8 | Fixed: deleted "of your files". |
| voices | V9 | Fixed: deleted "আপনার file থেকে". |
| voices | V10 | Fixed: "to check data impact" and "while it explores". |
| voices | V11 | Fixed: "Claude explore করার সময়". |
| voices | V20 | Fixed: "or list it under Open questions". |
