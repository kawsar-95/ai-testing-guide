# Test Execution & Bug Investigation — research notes (2026-11-15)

## Sources
S1. agent-browser README — vercel-labs (GitHub) — https://github.com/vercel-labs/agent-browser — accessed 2026-11-15 — cache: tool-agent-browser.txt
S2. Playwright MCP README — Microsoft (GitHub) — https://github.com/microsoft/playwright-mcp — accessed 2026-11-15 — cache: pw-mcp-readme.txt
S3. Use Claude Code with Chrome — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/chrome — accessed 2026-11-15 — cache: cc-chrome.txt
S4. ISTQB Glossary: test environment — ISTQB — https://glossary.istqb.org/en_US/term/test-environment — accessed 2026-11-15 — cache: istqb-term-test-environment.txt
S5. ISTQB Glossary: test data — ISTQB — https://glossary.istqb.org/en_US/term/test-data — accessed 2026-11-15 — cache: istqb-term-test-data.txt
S6. API testing — Microsoft (playwright.dev) — https://playwright.dev/docs/api-testing — accessed 2026-11-15 — cache: pw-api-testing.txt
S7. MySQL MCP Server README — berthojoris (GitHub) — https://github.com/berthojoris/mysql-mcp — accessed 2026-11-15 — cache: tool-mysql-mcp.txt
S8. ISTQB Certified Tester Foundation Level Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-11-15 — cache: istqb-ctfl.txt
S9. ISTQB Glossary: failure — ISTQB — https://glossary.istqb.org/en_US/term/failure — accessed 2026-11-15 — cache: istqb-term-failure.txt
S10. ISTQB Glossary: defect — ISTQB — https://glossary.istqb.org/en_US/term/defect — accessed 2026-11-15 — cache: istqb-term-defect.txt
S11. ISTQB Glossary: false-positive result — ISTQB — https://glossary.istqb.org/en_US/term/false-positive-result — accessed 2026-11-15 — cache: istqb-term-false-positive-result.txt
S12. ISTQB Glossary: false-negative result — ISTQB — https://glossary.istqb.org/en_US/term/false-negative-result — accessed 2026-11-15 — cache: istqb-term-false-negative-result.txt
S13. ISTQB Glossary: root cause analysis — ISTQB — https://glossary.istqb.org/en_US/term/root-cause-analysis — accessed 2026-11-15 — cache: istqb-term-root-cause-analysis.txt
S14. ISTQB Glossary: defect report — ISTQB — https://glossary.istqb.org/en_US/term/defect-report — accessed 2026-11-15 — cache: istqb-term-defect-report.txt
S15. gh issue list — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_list — accessed 2026-11-15 — cache: gh-issue-list.txt
S16. gh issue create — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_create — accessed 2026-11-15 — cache: gh-issue-create.txt
S17. Atlassian MCP Server README — Atlassian (GitHub) — https://github.com/atlassian/atlassian-mcp-server — accessed 2026-11-15 — cache: tool-atlassian-mcp.txt
S18. Getting started with the Atlassian Rovo MCP Server — Atlassian (support.atlassian.com) — https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/ — accessed 2026-11-15 — cache: atlassian-rovo-mcp.txt
S19. ISTQB Glossary: test log — ISTQB — https://glossary.istqb.org/en_US/term/test-log — accessed 2026-11-15 — cache: istqb-term-test-log.txt
S20. Configure permissions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permissions — accessed 2026-11-15 — cache: cc-permissions.txt
S21. Automate actions with hooks — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/hooks-guide — accessed 2026-11-15 — cache: cc-hooks-guide.txt
S22. CLI reference — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/cli-reference — accessed 2026-11-15 — cache: cc-cli-reference.txt (added in round 1)
S23. All settings — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/settings-reference — accessed 2026-11-15 — cache: cc-settings-reference.txt (added in round 2)

dMoney facts come from the public practice repo https://github.com/kawsar-95/genAI-project at commit 51db34a (local clone `dmoney-repo/`). They have no cite on the page.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | agent-browser is a native Rust CLI that gives an agent a browser it drives one command at a time | "agent-browser is a native Rust CLI that gives an AI agent a browser it can drive one command at a time" | S1 | |
| C2 | `snapshot` returns the page as compact text with a ref such as `@e1` per element | "snapshot returns the page as compact text with a ref such as @e1 for each element" | S1 | |
| C3 | The browser stays open between commands | "The browser stays open between commands, so each step is one short shell call" | S1 | |
| C4 | Install: `npm install -g agent-browser`, then `agent-browser install` downloads Chrome for Testing | "npm install -g agent-browser" ... "download Chrome for Testing (first time only)" | S1 | |
| C5 | `snapshot -i` lists interactive elements with refs; `click @e1`; `get url`; `close` | "agent-browser snapshot -i       # interactive elements, each with a ref" ... "agent-browser click @e1" ... "agent-browser get url" | S1 | |
| C6 | Refs describe the page at snapshot time; after navigation or a DOM change take a new snapshot | "Refs describe the page at the time of the snapshot. After navigation or a DOM change, take a new snapshot before using refs again." | S1 | |
| C7 | A click fails instead of reporting success when the target is hidden, disabled, outside the viewport, or covered | "A click fails, instead of reporting success, when the target is hidden, disabled, outside the viewport, or covered by another element" | S1 | |
| C8 | Each `--session` gets its own daemon and browser | "Each --session gets its own daemon and browser" | S1 | |
| C9 | `agent-browser skills get core` gives the core loop; `agent-browser mcp` starts an MCP server over stdio | "agent-browser skills get core                 # the core loop, refs, waiting, and common workflows" ... "agent-browser mcp starts an MCP server over stdio" | S1 | |
| C10 | Capture commands: `screenshot`, `pdf`, `record`, `download`, `diff`; debug: `console`, `errors`; state: `network` | "screenshot, pdf, record, download, diff" ... "console, errors, highlight, inspect, trace" ... "cookies, storage, network, set" | S1 | |
| C11 | Playwright MCP works through structured accessibility snapshots, without screenshots or visually-tuned models | "interact with web pages through structured accessibility snapshots, bypassing the need for screenshots or visually-tuned models" | S2 | |
| C12 | The README says CLI with skills is more token-efficient; MCP suits exploratory automation and long-running workflows | "CLI invocations are more token-efficient" ... "such as exploratory automation, self-healing tests, or long-running autonomous workflows" | S2 | |
| C13 | Claude in Chrome shares the browser login state and runs in a visible Chrome window | "shares your browser's login state, so it can access any site you're already signed into. Browser actions run in a visible Chrome window in real time." | S3 | |
| C14 | It pauses at a login page or CAPTCHA | "When Claude encounters a login page or CAPTCHA, it pauses and asks you to handle it manually." | S3 | |
| C15 | Works with Chrome and Edge; not supported in WSL | "Chrome integration works with Google Chrome and Microsoft Edge" ... "Chrome integration isn't supported in Windows Subsystem for Linux (WSL)." | S3 | |
| C16 | Requires `/login`; API key or setup-token sign-in keeps it off; start with `claude --chrome` | "Chrome integration also requires signing in with /login. If you authenticate with an API key or a long-lived token" ... "claude --chrome" | S3 | |
| C17 | Test environment definition | "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test." | S4 | |
| C18 | Test data definition | "Data needed for test execution." | S5 | |
| C19 | Playwright Test has a built-in `request` fixture that respects `baseURL` and `extraHTTPHeaders` | "Playwright Test comes with the built-in request fixture that respects configuration options like baseURL or extraHTTPHeaders" | S6 | |
| C20 | MySQL MCP: `MCP_PERMISSIONS=list,read,utility` limits the tools | "MCP_PERMISSIONS=list,read,utility" | S7 | |
| C21 | `MCP_REQUIRE_READONLY_DB_USER=true` makes startup fail if the MySQL user can write | "true makes startup fail if the MySQL user can write" | S7 | |
| C22 | Every tool reports `readOnlyHint` and `destructiveHint` | "every tool reports readOnlyHint and destructiveHint" | S7 | |
| C23 | In test execution, actual results are compared with expected results, results are logged, anomalies analyzed | "Actual test results are compared with the expected results. The test results are logged. Anomalies are analyzed to identify their likely causes." | S8 | |
| C24 | A defect report description includes test steps and any relevant test logs, database dumps, screenshots, or recordings | "the test steps that detected the anomaly, and any relevant test logs, database dumps, screenshots, or recordings" | S8 | |
| C25 | `browser_take_screenshot` says to use `browser_snapshot` for actions by default | "Take a screenshot of the current page. Use browser_snapshot for actions by default." | S2 | |
| C26 | `browser_console_messages` has a `level` parameter and a `filename` to save messages | "Level of the console messages to return" ... "File name to save the console messages to." | S2 | |
| C27 | `browser_network_requests` takes a `filter` regexp and a `filename` | "Only return requests whose URL matches this regexp" ... "File name to save the network requests to." | S2 | |
| C28 | `--output-dir` sets the directory for automatically named output files | "path to the directory for automatically named output files, for example a screenshot taken without an explicit file name" | S2 | |
| C29 | `--redact-url-params` replaces values of named URL params with `<redacted>` | "whose values are replaced with <redacted> in the tool responses" | S2 | |
| C30 | `--isolated` keeps the profile in memory | "keep the browser profile in memory, do not save it to disk." | S2 | |
| C31 | Claude in Chrome: tell Claude what console patterns to look for, logs can be verbose | "Tell Claude what patterns to look for rather than asking for all console output, since logs can be verbose" | S3 | |
| C32 | A GIF recording captures everything visible, including account details | "The recording captures everything visible in the browser, including account details on logged-in pages, so review it before sharing it outside your team." | S3 | |
| C33 | Failure definition | "An event in which a component or system does not meet its requirements within specified limits during its execution." | S9 | |
| C34 | Defect definition; bug is a synonym | "An imperfection or deficiency in a work product where it does not meet its requirements or specifications or impairs its intended use." ... "'name': 'bug'" | S10 | |
| C35 | False-positive result definition | "A test result in which a defect is reported although no such defect actually exists in the test object." | S11 | |
| C36 | False-negative result definition | "A test result which fails to identify a defect that is actually present in a test object." | S12 | |
| C37 | Root cause analysis definition | "The process used to identify the root cause of a defect." | S13 | |
| C38 | A reported anomaly may turn out to be a real defect or something else | "the reported anomalies may turn out to be real defects or something else" | S8 | |
| C39 | Defect report definition | "Documentation of the occurrence, nature, and status of a defect." | S14 | |
| C40 | CTFL defect report contents: identifier, title, date/author, test object and environment, context, description, expected and actual, severity, priority, status, references | "Unique identifier" ... "Title with a short summary of the anomaly being reported" ... "Identification of the test object and test environment" ... "Expected results and actual results" ... "Severity of the defect (degree of impact) on the interests of stakeholders or requirements" ... "Priority to fix" ... "References (e.g., to the test case)" | S8 | |
| C41 | Defect management tools may fill in identifier, date, author, initial status | "Some of this data may be automatically included when using defect management tools (e.g., identifier, date, author and initial status)." | S8 | |
| C42 | `gh issue list --search` searches issues; `--state` filters open, closed, all | "Search issues with query" ... "Filter by state: {open\|closed\|all}" | S15 | |
| C43 | `gh issue create --title`, `--body-file` reads the body from a file, `--label` | "--title <string>" ... "Read body text from file" ... "--label <name>" | S16 | |
| C44 | Atlassian MCP server can create and update work items; Jira permission groups `read_jira`, `write_jira`, `search_jira` | "Create and update work items or pages based on natural language commands." ... "read_jira · write_jira · search_jira" | S17 | |
| C45 | Atlassian: MCP clients act with your existing permissions; use least privilege and monitor audit logs | "MCP clients can perform actions on all connected products (such as Jira, Confluence, Bitbucket) with your existing permissions. Use least privilege" | S18 | |
| C46 | Test log definition | "A chronological record of relevant details about test execution." | S19 | |
| C47 | Test execution work products include test logs and defect reports | "Test execution work products include: test logs, and defect reports" | S8 | |
| C48 | Test progress metrics include number of test cases run/not run, passed/failed | "number of test cases run/not run, passed/failed" | S8 | |
| C49 | Permission rules: deny, then ask, then allow; first match wins | "Rules are evaluated in order: deny, then ask, then allow." | S20 | |
| C50 | Ask rules prompt for confirmation | "Ask rules prompt for confirmation when Claude tries to use the specified tool." | S20 | |
| C51 | File edits are checked against `Edit(path)` rules; use `Edit(...)` in place of `Write(...)` | "Claude Code checks file permissions against Edit(path) and Read(path) rules." ... "use Edit(docs/**) in place of Write(docs/**)" | S20 | |
| C52 | `mcp__<server>__*` matches every tool from one MCP server | "To match every tool from an MCP server, write mcp__<server>__*." | S20 | |
| C53 | Bash rules match the whole command text with `*` for any text | "Bash rules match the whole command text, with * standing in for any text." | S20 | |
| C54 | A PreToolUse hook runs before a tool call and can block it; exit 2 blocks | "Before a tool call executes. Can block it" ... "exit 2 = block the action" | S21 | |
| C55 | The hooks guide example uses matcher `Edit\|Write` in `.claude/settings.json` | "Add a PreToolUse hook to .claude/settings.json that runs the script before any Edit or Write tool call" | S21 | the example JSON sets the matcher to Edit\|Write |
| C56 | Claude can still change protected files with shell commands; add `Edit` deny rules | "Claude can still change the protected files with shell commands." | S21 | |
| C57 | PreToolUse hook decisions do not bypass deny and ask rules | "PreToolUse hook decisions don't bypass permission rules." | S20 | |
| C58 | dMoney is a practice target with bugs on purpose; do not deploy | "This system has known bugs and security flaws, and they are there on purpose." | dmoney-repo/README.md | no cite on page |
| C59 | dMoney web app at localhost:3000, API at localhost:5000, MySQL `dmoneydb` | "http://localhost:3000" ... "http://localhost:5000" ... "MySQL (dmoneydb)" | dmoney-repo/README.md | no cite on page |
| C60 | dMoney balance is computed as SUM(credit) - SUM(debit) over the Transactions ledger | "an account's balance is computed as SUM(credit) - SUM(debit)" | dmoney-repo/README.md | no cite on page |
| C61 | `GET /transaction/balance/:account` returns the current balance | "GET /transaction/balance/:account — Current balance" | dmoney-repo/dmoney-transaction-api/endpoints.md | no cite on page |
| C62 | The repo test-executor agent runs UI cases with agent-browser and API cases with curl and writes a result table with pass, failed, not executed | "Use only agent-browser for UI steps and curl for API steps." ... "(pass / failed / not executed)" | dmoney-repo/.claude/agents/test-executor-agent.md | no cite on page |
| C63 | dMoney `.mcp.json` holds the playwright and jira servers | "Project MCP servers (playwright, jira)" | dmoney-repo/README.md | no cite on page |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F12 | Fixed: added S22 (CLI reference): `claude setup-token` makes "a long-lived OAuth token for CI and scripts", and S3 says Claude Code keeps Chrome off with such a token or an API key. The CI sentence now follows from the two cited facts. Same in all three panels. |
| facts | F34 | Fixed: labelled as the tutorial's practice. Same in all three panels. |
| facts | F62 | Fixed: "So the tutorial asks you to check each finding before you report it." Same in all three panels. |
| facts | F86 | Fixed: labelled "The tutorial's concern". Same in all three panels. |
| voices | V1 | Fixed: "a structured snapshot, not a screenshot". |
| voices | V2 | Fixed: "a command-line tool with skills uses fewer tokens than MCP". |
| voices | V6 | Fixed: "the list, read, and utility tools". |
| voices | V8 | Fixed: deleted the added definition. |
| voices | V9 | Fixed: deleted the added definition. |
| voices | V10 | Fixed: cite 1 on agent-browser `network`, cite 2 on the Playwright MCP tool. |
| voices | V11 | Fixed: "in tool responses". |
| voices | V12 | Fixed: "tool response-এ". |
| voices | V15 | Fixed: "MCP clients act with your own rights". |
| voices | V21 | Fixed: deleted "That hides the bug." from the Guardrails section. |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | `claude setup-token` makes the long-lived token for CI and scripts. | "Generate a long-lived OAuth token for CI and scripts." | S22 | cache: cc-cli-reference.txt |
| R2 | With an API key or a long-lived token, Claude Code keeps Claude in Chrome off. | "If you authenticate with an API key or a long-lived token from `claude setup-token`, Claude Code keeps Chrome integration off, even when you pass `--chrome`." | S3 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F82 | Fixed: added S23, which shows the `ask` array of `permissions`. |
| facts | F87 | Fixed: "An `Edit` rule covers file edits, and also `Write`." |
| voices | V3 | Fixed: "the target". |
| voices | V17 | Fixed: as F87. |
| voices | V18 | Fixed: deleted "is a script". |
| voices | V19 | Fixed: "protected files". |
| voices | V22 | Fixed: the Bangla gives both options. |
| (own check) | - | The Jira permission groups sentence now says "include", because S17 also lists `delete_jira` and `manage_jira` (the same finding as F21 of the Requirements page). |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | The `permissions` object of a settings file takes `allow`, `ask`, and `deny` arrays. | "**Type**: object with `allow`, `ask`, `deny`, …" | S23 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F27 | Fixed: the full S4 definition. |
| facts | F51 | Fixed: the full S9 definition, "within specified limits during its execution". |
| facts | F101 | Fixed: as F51. |
| facts | F106 | Fixed: as F27. |
| voices | V7 | Fixed: "outside your team". |
| voices | V21 | Fixed: "on logged-in pages". |

## Round 4 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 4 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| voices | N1 | Fixed: the Layman and Bangla panels now keep "within specified limits". |
| voices | N2 | Fixed: the Layman and Bangla panels now list hardware, instrumentation, simulators, software tools, and other support elements. |
