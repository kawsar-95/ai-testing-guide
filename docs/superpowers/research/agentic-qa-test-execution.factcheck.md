# Fact check: Test Execution & Bug Investigation

Page: `content/agentic-qa/test-execution.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-test-execution.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. After each full round, a script recounted the FAIL rows and looked each quoted phrase of a PASS up in the sources; its result is the line under the round.

## Fact check: agentic-qa / test-execution (round 1, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Lede | An agent can run test cases in a real browser, call the API, and read the database; a person approves the reports | none | N/A | Framing sentence, not a tool fact. |
| 2 | Choose a browser tool | Table: agent-browser is a native Rust CLI, and the agent drives the browser one shell command at a time | S1 | PASS | "agent-browser is a native Rust CLI that gives an AI agent a browser it can drive one command at a time." (S1:13) |
| 3 | Choose a browser tool | Table: Playwright MCP is an MCP server; Claude works through structured accessibility snapshots, not screenshots | S2 | PASS | "enables LLMs to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots" (S2:3) |
| 4 | Choose a browser tool | Table: Claude in Chrome is Claude Code connected to the Claude in Chrome extension in your own browser | S3 | PASS | "Claude Code integrates with the Claude in Chrome browser extension"; "Connect Claude Code to your Chrome browser" (S3:9, S3:7) |
| 5 | Choose a browser tool | Table "Good for" column (step by step; long exploratory sessions that keep browser state; debugging by hand in a visible window) | none | ADVICE | The page's own recommendation. It matches S2:11 ("persistent state ... exploratory automation") and S3:11 ("visible Chrome window"). |
| 6 | Choose a browser tool | The Playwright MCP README says a CLI with skills is more token-efficient than MCP | S2 | PASS | "CLI invocations are more token-efficient" (S2:9) |
| 7 | Choose a browser tool | The README says MCP suits exploratory automation and long-running autonomous workflows | S2 | PASS | "such as exploratory automation, self-healing tests, or long-running autonomous workflows" (S2:11) |
| 8 | Choose a browser tool | Claude in Chrome shares your browser's login state; its actions run in a visible Chrome window | S3 | PASS | "shares your browser's login state ... Browser actions run in a visible Chrome window in real time." (S3:11) |
| 9 | Choose a browser tool | It pauses at a login page or CAPTCHA and asks you to handle it | S3 | PASS | "When Claude encounters a login page or CAPTCHA, it pauses and asks you to handle it manually." (S3:11) |
| 10 | Choose a browser tool | It works with Google Chrome and Microsoft Edge, and is not supported in WSL | S3 | PASS | "Chrome integration works with Google Chrome and Microsoft Edge ... isn't supported in Windows Subsystem for Linux (WSL)." (S3:20) |
| 11 | Choose a browser tool | It needs a `/login` sign-in; with an API key or long-lived token, Claude Code keeps it off | S3 | PASS | "requires signing in with `/login`. If you authenticate with an API key or a long-lived token ... Claude Code keeps Chrome integration off" (S3:44) |
| 12 | Choose a browser tool | "So a CI job cannot use it." | none | FAIL | S3 never mentions CI or headless runs. It is an inference. Fix: drop the sentence, or say "it needs a `/login` sign-in and is off with an API key or long-lived token" and cite S3. |
| 13 | Choose a browser tool | Callout: use agent-browser or Playwright MCP to run tests, Claude in Chrome to debug; never point at production | none | ADVICE | Labeled "The tutorial's advice". |
| 14 | Drive the browser | `npm install -g agent-browser` and `agent-browser install` are the README's two commands | S1 | PASS | "npm install -g agent-browser" / "agent-browser install           # download Chrome for Testing (first time only)" (S1:18-19) |
| 15 | Drive the browser | The second command downloads Chrome for Testing the first time | S1 | PASS | "# download Chrome for Testing (first time only)" (S1:19) |
| 16 | Drive the browser | `snapshot` returns compact text with a ref such as `@e1` per element; the agent acts on a ref, rereads, repeats | S1 | PASS | "`snapshot` returns the page as compact text with a ref such as `@e1` for each element. The agent acts on a ref, reads the page again to check the result, and repeats." (S1:13) |
| 17 | Drive the browser | The browser stays open between commands | S1 | PASS | "The browser stays open between commands" (S1:13) |
| 18 | Drive the browser | Quick start code block: `open example.com`, `snapshot -i`, `click @e1`, `get url`, `close` | S1 | PASS | S1:31-35 has `agent-browser open example.com`, `snapshot -i       # interactive elements, each with a ref`, `click @e1`, `get url`, `close`. |
| 19 | Drive the browser | A ref describes the page at the time of the snapshot; after navigation or a DOM change, take a new snapshot | S1 | PASS | "Refs describe the page at the time of the snapshot. After navigation or a DOM change, take a new snapshot before using refs again." (S1:44) |
| 20 | Drive the browser | A click fails, not reports success, when the target is hidden, disabled, outside the viewport, or covered | S1 | PASS | "A click fails, instead of reporting success, when the target is hidden, disabled, outside the viewport, or covered by another element" (S1:46) |
| 21 | Drive the browser | "A failed click is a finding, not noise." | none | ADVICE | The tutorial's own testing advice. |
| 22 | Drive the browser | Each `--session` gets its own daemon and browser | S1 | PASS | "Each `--session` gets its own daemon and browser." (S1:52) |
| 23 | Drive the browser | "Use one session per test user." | none | ADVICE | Tutorial advice. |
| 24 | Drive the browser | The capture group has `screenshot`, `pdf`, `record`, `download`, `diff` | S1 | PASS | "Capture \| `screenshot`, `pdf`, `record`, `download`, `diff`" (S1:91) |
| 25 | Drive the browser | The debug group has `console` and `errors` | S1 | PASS | "Debug and performance \| `console`, `errors`, `highlight`..." (S1:94) |
| 26 | Drive the browser | The page state group has `network` | S1 | PASS | "Page and network state \| `cookies`, `storage`, `network`..." (S1:92) |
| 27 | Drive the browser | `agent-browser skills get core` prints the core loop and common workflows for the installed version | S1 | PASS | "agent-browser skills get core                 # the core loop, refs, waiting, and common workflows"; "its instructions always match the installed CLI" (S1:61, 73) |
| 28 | Drive the browser | `agent-browser mcp` starts an MCP server over stdio | S1 | PASS | "`agent-browser mcp` starts an MCP server over stdio." (S1:80) |
| 29 | Three layers | Tutorial suggests three checks: UI, API, database | none | ADVICE | Labeled as the tutorial's suggestion. |
| 30 | Three layers | ISTQB defines a test environment as the hardware, tools, simulators, and other support elements needed to perform a test | S4 | PASS | "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test." (S4:4) |
| 31 | Three layers | ISTQB defines test data as data needed for test execution | S5 | PASS | "Data needed for test execution." (S5:4) |
| 32 | Three layers | Name the environment in the prompt; never run against production; create, use, and remove test data | none | ADVICE | Tutorial advice. The URL is on example.com. |
| 33 | Three layers | Playwright Test has a built-in `request` fixture that respects options such as `baseURL` and `extraHTTPHeaders` | S6 | PASS | "Playwright Test comes with the built-in request fixture that respects configuration options like baseURL or extraHTTPHeaders" (S6:96) |
| 34 | Three layers | "A plain `curl` call also works for a quick check." | none | FAIL | A fact about a tool with no cite. Fix: cite a source for curl, or label it as the tutorial's advice. (The repo agent uses curl, but the page does not cite that here.) |
| 35 | Three layers | `MCP_PERMISSIONS=list,read,utility` keeps only the list, read, and utility tools | S7 | PASS | "MCP_PERMISSIONS=list,read,utility" (S7:306); "Tool enabled = (Has Permission) AND (Has Category OR No categories specified)" (S7:340) |
| 36 | Three layers | `MCP_REQUIRE_READONLY_DB_USER=true` makes the server fail at startup if the MySQL user can write | S7 | PASS | "`true` makes startup fail if the MySQL user can write." (S7:277) |
| 37 | Three layers | Every tool reports `readOnlyHint` and `destructiveHint` | S7 | PASS | "every tool reports `readOnlyHint` and `destructiveHint`." (S7:265) |
| 38 | Three layers | Callout: use a read-only DB user; keep the password in `${DB_PASSWORD}` | none | ADVICE | Labeled "The tutorial's rule". |
| 39 | Collect evidence | The CTFL syllabus says a defect report holds the test steps and any relevant test logs, database dumps, screenshots, or recordings | S8 | PASS | "including the test steps that detected the anomaly, and any relevant test logs, database dumps, screenshots, or recordings" (S8:2590-2591) |
| 40 | Collect evidence | "So collect them while the test runs, not later." | none | ADVICE | Tutorial advice. |
| 41 | Collect evidence | agent-browser `screenshot` and `record` | S1 | PASS | "`screenshot`, `pdf`, `record`..." (S1:91) |
| 42 | Collect evidence | Playwright MCP `browser_take_screenshot` | S2 | PASS | "**browser_take_screenshot**" (S2:1153) |
| 43 | Collect evidence | agent-browser `console` and `errors` | S1 | PASS | S1:94 |
| 44 | Collect evidence | Playwright MCP `browser_console_messages`, with a `level` and a `filename` to save it | S2 | PASS | "`level` (string): Level of the console messages to return"; "`filename` (string, optional): File name to save the console messages to." (S2:955, 957) |
| 45 | Collect evidence | agent-browser `network` | S1 | PASS | S1:92 |
| 46 | Collect evidence | Playwright MCP `browser_network_requests`, with a `filter` regexp and a `filename` | S2 | PASS | "`filter` (string, optional): Only return requests whose URL matches this regexp"; "`filename` (string, optional): File name to save the network requests to." (S2:1094, 1096) |
| 47 | Collect evidence | Evidence rows "Database result" and "Run facts" | none | ADVICE | The tutorial's own list. It states no tool fact. |
| 48 | Collect evidence | Playwright MCP `--output-dir` sets the folder for automatically named files, such as a screenshot with no file name | S2 | PASS | "path to the directory for automatically named output files, for example a screenshot taken without an explicit file name" (S2:442) |
| 49 | Collect evidence | `--isolated` keeps the browser profile in memory, not on disk | S2 | PASS | "keep the browser profile in memory, do not save it to disk." (S2:436) |
| 50 | Collect evidence | One folder per run, e.g. `evidence/<run-id>/<test-id>/` | none | ADVICE | "The tutorial suggests". The path is the reader's own. |
| 51 | Collect evidence | `--redact-url-params` replaces the values of named URL parameters with `<redacted>` in tool responses | S2 | PASS | "comma-separated list of URL query and fragment parameter names ... whose values are replaced with <redacted> in the tool responses." (S2:448) |
| 52 | Collect evidence | A Claude in Chrome GIF captures everything visible, including account details on logged-in pages; review before sharing outside your team | S3 | PASS | "The recording captures everything visible in the browser, including account details on logged-in pages, so review it before sharing it outside your team." (S3:239) |
| 53 | Collect evidence | The Claude in Chrome docs say to tell Claude what console patterns to look for, because logs can be verbose | S3 | PASS | "Tell Claude what patterns to look for rather than asking for all console output, since logs can be verbose" (S3:157) |
| 54 | Collect evidence | Checklist callout (test id, time, build; remove secrets) | none | ADVICE | Labeled "The tutorial's checklist". |
| 55 | Investigate a failure | In test execution, actual results are compared with expected results; results are logged; anomalies are analyzed for likely causes | S8 | PASS | "Actual test results are compared with the expected results. The test results are logged. Anomalies are analyzed to identify their likely causes." (S8:784-785) |
| 56 | Investigate a failure | Failure: an event in which a component or system does not meet its requirements during execution | S9 | PASS | "An event in which a component or system does not meet its requirements within specified limits during its execution." (S9:4). The page drops "within specified limits". It is not wrong, but it is shortened. |
| 57 | Investigate a failure | Defect: an imperfection or deficiency in a work product; "Bug" is a synonym | S10 | PASS | "An imperfection or deficiency in a work product where it does not meet its requirements..."; "synonyms: [{'id': 4801, 'name': 'bug'}..." (S10:4-5) |
| 58 | Investigate a failure | False-positive result: a defect is reported, but no such defect exists in the test object | S11 | PASS | "A test result in which a defect is reported although no such defect actually exists in the test object." (S11:4) |
| 59 | Investigate a failure | False-negative result: the test fails to find a defect that is present | S12 | PASS | "A test result which fails to identify a defect that is actually present in a test object." (S12:4) |
| 60 | Investigate a failure | Root cause analysis: the process used to find the root cause of a defect | S13 | PASS | "The process used to identify the root cause of a defect." (S13:4) |
| 61 | Investigate a failure | The syllabus says a reported anomaly may turn out to be a real defect or something else | S8 | PASS | "the reported anomalies may turn out to be real defects or something else" (S8:2559-2560) |
| 62 | Investigate a failure | "An agent makes both kinds of mistake, so check before you report." | none | FAIL | A claim about agent behavior with no source. Fix: drop it, or say "Check before you report, because a reported anomaly may not be a real defect (S8)". |
| 63 | Investigate a failure | The tutorial's four-step method, and the "If this is true / layer is probably" table | none | ADVICE | Labeled "The tutorial's method". The table is the tutorial's own heuristic and states no tool fact. |
| 64 | Write the defect report | ISTQB defines a defect report as documentation of the occurrence, nature, and status of a defect | S14 | PASS | "Documentation of the occurrence, nature, and status of a defect." (S14:4) |
| 65 | Write the defect report | CTFL list: unique identifier; title with a short summary | S8 | PASS | "Unique identifier"; "Title with a short summary of the anomaly being reported" (S8:2574, 2585) |
| 66 | Write the defect report | CTFL list: date, issuing organization, author with role | S8 | PASS | "Date when the anomaly was observed, issuing organization, and author, including their role" (S8:2586) |
| 67 | Write the defect report | CTFL list: test object and test environment | S8 | PASS | "Identification of the test object and test environment" (S8:2587) |
| 68 | Write the defect report | CTFL list: context, e.g. test case and test data | S8 | PASS | "Context of the defect (e.g., test case being run ... or test data being used)" (S8:2588-2589) |
| 69 | Write the defect report | CTFL list: description to reproduce, with steps and evidence | S8 | PASS | "Description of the failure to enable reproduction and resolution including the test steps ..." (S8:2590) |
| 70 | Write the defect report | CTFL list: expected and actual results | S8 | PASS | "Expected results and actual results" (S8:2592) |
| 71 | Write the defect report | CTFL list: severity, priority to fix, status | S8 | PASS | "Severity of the defect"; "Priority to fix"; "Status of the defect" (S8:2593-2595) |
| 72 | Write the defect report | CTFL list: references, e.g. to the test case | S8 | PASS | "References (e.g., to the test case)" (S8:2597) |
| 73 | Write the defect report | Defect management tools may fill in some fields (identifier, date, author, initial status) | S8 | PASS | "Some of this data may be automatically included when using defect management tools (e.g., identifier, date, author and initial status)." (S8:2598-2599) |
| 74 | Write the defect report | `gh issue list --search` searches issues; `--state all` includes closed ones | S15 | PASS | "-S, --search <query>"; "--state <string> (default "open") ... Filter by state: {open\|closed\|all}" (S15:1044-1052) |
| 75 | Write the defect report | `gh issue create` takes `--title`, `--label`, and `--body-file`, which reads the body from a file | S16 | PASS | "-F, --body-file <file>"; "--label <name>"; "--title <string>" (S16:1041-1080) |
| 76 | Write the defect report | Atlassian MCP server can create and update work items | S17 | PASS | "**Create and update** work items or pages based on natural language commands." (S17:53) |
| 77 | Write the defect report | Its Jira permission groups are `read_jira`, `write_jira`, `search_jira` | S17 | PASS | "\| **Jira** \| `read_jira` · `write_jira` · `search_jira` \|" under "Permission groups" (S17:197-199) |
| 78 | Write the defect report | Atlassian says MCP clients act with your existing permissions and asks you to use least privilege | S18 | PASS | "MCP clients can perform actions on all connected products ... with your existing permissions. Use least privilege" (S18:179) |
| 79 | Write the defect report | Draft, approve, then file workflow; callout "Before you file" | none | ADVICE | Tutorial advice and warning. It points to the ask rule shown in the Guardrails section. |
| 80 | Defect report template | The Markdown template and the note "Keep one defect per report" | none | ADVICE | Labeled as the tutorial's own. |
| 81 | Defect report template | Severity is impact on stakeholders and priority is how soon to fix; the syllabus lists them as two fields | S8 | PASS | "Severity of the defect (degree of impact) on the interests of stakeholders"; "Priority to fix" (S8:2593-2594) |
| 82 | Record the results | ISTQB defines a test log as a chronological record of relevant details about test execution | S19 | PASS | "A chronological record of relevant details about test execution." (S19:4) |
| 83 | Record the results | The syllabus names test logs and defect reports as work products of test execution | S8 | PASS | "Test execution work products include: test logs, and defect reports" (S8:842) |
| 84 | Record the results | Its test progress metrics include test cases run and not run, passed and failed | S8 | PASS | "Test progress metrics (e.g., ... number of test cases run/not run, passed/failed, test execution time)" (S8:2462-2463) |
| 85 | Record the results | The pass, fail, blocked statuses, the JSON results file, and the Markdown table | none | ADVICE | Page labels the statuses and format "the tutorial's own". Keys are the tutorial's design. |
| 86 | Guardrails | "A test agent can see the code. If a test fails, it may try to 'fix' the app so that the test passes." | none | FAIL | A claim about agent behavior with no source. Fix: label it as the tutorial's concern ("The tutorial's concern: ..."), or drop it. |
| 87 | Guardrails | Rules are evaluated in order: deny, then ask, then allow; the first match decides | S20 | PASS | "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome" (S20:56) |
| 88 | Guardrails | Ask rules prompt for confirmation | S20 | PASS | "**Ask** rules prompt for confirmation when Claude tries to use the specified tool." (S20:53) |
| 89 | Guardrails | File edits are checked against `Edit(path)` rules, and an `Edit` rule also covers `Write` | S20 | PASS | "checks file permissions against `Edit(path)` and `Read(path)` rules"; "`Write` ...: use `Edit(docs/**)` in place of `Write(docs/**)`."; "`Edit` rules apply to all built-in tools that edit files." (S20:361-363, 344) |
| 90 | Guardrails | Bash rules match the whole command text, with `*` for any text | S20 | PASS | "Bash rules match the whole command text, with `*` standing in for any text." (S20:215) |
| 91 | Guardrails | `mcp__<server>__*` matches every tool of one MCP server | S20 | PASS | "To match every tool from an MCP server, write `mcp__<server>__*`." (S20:577) |
| 92 | Guardrails | settings.json example: `permissions.deny` with `Edit(/src/**)`, `Edit(/api/**)`; `permissions.ask` with `Bash(gh issue create *)`, `mcp__jira__*` | S20 | PASS | Keys and syntax are in S20: "Edit(/src/**) in any rule type" (S20:442), `Bash(git push *)` form (S20:258), `mcp__<server>__*` (S20:577). Paths and server name are labeled as examples. |
| 93 | Guardrails | A `PreToolUse` hook runs before a tool call and can block it; exit code 2 blocks the action | S21 | PASS | "`PreToolUse` \| Before a tool call executes. Can block it"; "exit 2 = block the action" (S21:478, 586) |
| 94 | Guardrails | The hooks guide shows a script that a `PreToolUse` hook in `.claude/settings.json` runs before each `Edit` or `Write` call; it exits 2 for a protected path | S21 | PASS | "Add a `PreToolUse` hook to `.claude/settings.json` that runs the script before any `Edit` or `Write` tool call"; "exits with code 2 to block the edit" (S21:285, 247) |
| 95 | Guardrails | Hook decisions do not bypass deny and ask rules | S20 | PASS | "PreToolUse hook decisions don't bypass permission rules. Claude Code evaluates deny and ask rules regardless of what a PreToolUse hook returns" (S20:637) |
| 96 | Guardrails | The hooks guide warns that Claude can still change protected files with shell commands | S21 | PASS | "Claude can still change the protected files with shell commands." (S21:309) |
| 97 | Guardrails | Keep deny rules; do not allow broad Bash patterns; callout rule | none | ADVICE | Labeled "The tutorial's rule". |
| 98 | Practice | The dMoney web app runs at `http://localhost:3000`, the API at `http://localhost:5000`, and the data is in MySQL database `dmoneydb` | none | PASS-REPO | repo/README.md:54-58 shows "http://localhost:3000" ──▶ "http://localhost:5000" ──▶ "MySQL (dmoneydb)". |
| 99 | Practice | A balance is not a column; it is `SUM(credit) - SUM(debit)` over the `Transactions` ledger | none | PASS-REPO | repo/README.md:66: "There is no balance column. `Transactions` is an append-only double-entry ledger, and an account's balance is computed as `SUM(credit) - SUM(debit)`." |
| 100 | Practice | `GET /transaction/balance/:account` returns the current balance | none | PASS-REPO | repo/dmoney-transaction-api/swagger/API_ENDPOINTS_SUMMARY.md:76: "**GET** `/transaction/balance/:account` - Get user balance by account" |
| 101 | Practice | The repo has its own `test-executor-agent`, which runs UI steps with agent-browser and API steps with curl | none | PASS-REPO | repo/.claude/agents/test-executor-agent.md:2-3: "name: test-executor-agent"; "using agent-browser (UI) and curl (API)" |
| 102 | Practice | Its results use `pass`, `failed`, and `not executed` | none | PASS-REPO | repo/.claude/agents/test-executor-agent.md:19: "(`pass` / `failed` / `not executed`)" |
| 103 | Practice | dMoney has bugs and security flaws on purpose; run it only on your own machine; never deploy it | none | PASS-REPO | repo/README.md:5: "known bugs and security flaws, and they are there on purpose ... Do not deploy it to production or expose it to the internet." |
| 104 | Practice | The facts come from the public repository at commit 51db34a | none | N/A | A statement about the page's sourcing. I cannot check the commit hash from these files. |
| 105 | Practice | Steps 1-5, the prompt block (uses `--session`), and "How to check your work" | none | ADVICE | Labeled "The tutorial's exercise". `--session` is verified in row 22; the other commands are the reader's own. |
| 106 | Practice | Step 6: search with `gh issue list --search`; file with `gh issue create --body-file` | S15, S16 | PASS | See rows 74 and 75. |
| 107 | Common mistakes | A ref describes the page at the time of its snapshot | S1 | PASS | S1:44 (row 19). |
| 108 | Common mistakes | A reported anomaly may turn out to be something other than a real defect | S8 | PASS | S8:2559-2560 (row 61). |
| 109 | Common mistakes | The hooks guide says shell commands can still change files | S21 | PASS | S21:309 (row 96). |
| 110 | Common mistakes | A Chrome GIF captures account details on logged-in pages | S3 | PASS | S3:239 (row 52). |
| 111 | Common mistakes | `--redact-url-params` in Playwright MCP | S2 | PASS | S2:448 (row 51). |
| 112 | Common mistakes | An ask rule for the filing tool; duplicate search first | S20, S15 | PASS | S20:53 (ask rules prompt); S15:1044 (`--search`). |
| 113 | Common mistakes | `MCP_REQUIRE_READONLY_DB_USER=true` on the MySQL MCP server | S7 | PASS | S7:277 (row 36). |
| 114 | Common mistakes | Items 1, 4 (first sentences), 6 ("A filed issue reaches the whole team at once") | none | ADVICE | Rationale and fixes, not tool facts. Item 1 is marked "the tutorial's advice". |
| 115 | Key words | Failure | none | PASS | Same as the page text, S9:4 (see row 56). |
| 116 | Key words | Defect ("bug" is a synonym) | none | PASS | S10:4-5 (row 57). |
| 117 | Key words | False-positive result | none | PASS | S11:4 (row 58). |
| 118 | Key words | False-negative result | none | PASS | S12:4 (row 59). |
| 119 | Key words | Root cause analysis | none | PASS | S13:4 (row 60). |
| 120 | Key words | Test environment | none | PASS | S4:4 (row 30). |
| 121 | Key words | Test data | none | PASS | S5:4 (row 31). |
| 122 | Key words | Test log | none | PASS | S19:4 (row 82). |
| 123 | Key words | Defect report | none | PASS | S14:4 (row 64). |
| 124 | Key words | Ref: the id, such as `@e1`, that an agent-browser snapshot gives each element; valid only for that snapshot | none | PASS | Restates page text. Source: S1:13 and S1:44. |
| 125 | Key words | Ask rule: a permission rule that makes Claude Code ask for confirmation before a tool call | none | PASS | Restates page text. Source: S20:53. |

Open FAILs after round 1: 4

Script check of round 1: 125 rows, 4 FAIL rows, 0 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / test-execution (round 2, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Choose a browser tool | Three tools let Claude drive a browser, and each fits a different job | none | ADVICE | Framing sentence; the "Good for" column is the tutorial's own advice |
| 2 | Choose a browser tool | agent-browser is a native Rust CLI; the agent drives the browser one shell command at a time | S1 | PASS | S1: "agent-browser is a native Rust CLI that gives an AI agent a browser it can drive one command at a time... each step is one short shell call." |
| 3 | Choose a browser tool | Playwright MCP is an MCP server; Claude works through structured accessibility snapshots, not screenshots | S2 | PASS | S2: "enables LLMs to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots" |
| 4 | Choose a browser tool | Claude in Chrome is Claude Code connected to the Claude in Chrome extension in your own browser | S3 | PASS | S3: "Claude Code integrates with the Claude in Chrome browser extension to give you browser automation capabilities" |
| 5 | Choose a browser tool | The Playwright MCP README says a CLI with skills is more token-efficient than MCP | S2 | PASS | S2: "CLI invocations are more token-efficient" and "CLI+SKILLS" |
| 6 | Choose a browser tool | The README says MCP suits exploratory automation and long-running autonomous workflows | S2 | PASS | S2: "such as exploratory automation, self-healing tests, or long-running autonomous workflows" |
| 7 | Choose a browser tool | Claude in Chrome shares your browser's login state; its actions run in a visible Chrome window | S3 | PASS | S3: "shares your browser's login state... Browser actions run in a visible Chrome window in real time." |
| 8 | Choose a browser tool | It pauses at a login page or CAPTCHA and asks you to handle it | S3 | PASS | S3: "When Claude encounters a login page or CAPTCHA, it pauses and asks you to handle it manually." |
| 9 | Choose a browser tool | It works with Google Chrome and Microsoft Edge, and is not supported in WSL | S3 | PASS | S3: "Chrome integration works with Google Chrome and Microsoft Edge... isn't supported in Windows Subsystem for Linux (WSL)." |
| 10 | Choose a browser tool | It needs a `/login` sign-in; with an API key or a long-lived token Claude Code keeps it off | S3 | PASS | S3: "requires signing in with `/login`. If you authenticate with an API key or a long-lived token... Claude Code keeps Chrome integration off" |
| 11 | Choose a browser tool | `claude setup-token` makes the long-lived token for CI and scripts | S22 | PASS | S22: "`claude setup-token` \| Generate a long-lived OAuth token for CI and scripts." |
| 12 | Choose a browser tool | A CI job that signs in with that token or an API key cannot use Claude in Chrome | S3, S22 | PASS | Follows from S3 ("keeps Chrome integration off") and S22 (token is "for CI and scripts") |
| 13 | Choose a browser tool | Callout: use agent-browser or Playwright MCP for test cases; Claude in Chrome to debug; never use production | none | ADVICE | Labelled "The tutorial's advice" |
| 14 | Drive the browser | `npm install -g agent-browser` and `agent-browser install` are the two install commands | S1 | PASS | S1: "npm install -g agent-browser" and "agent-browser install" |
| 15 | Drive the browser | The second command downloads Chrome for Testing the first time | S1 | PASS | S1: "agent-browser install           # download Chrome for Testing (first time only)" |
| 16 | Drive the browser | `snapshot` returns the page as compact text with a ref such as `@e1` for each element; the agent acts on a ref, reads the page again, and repeats | S1 | PASS | S1: "`snapshot` returns the page as compact text with a ref such as `@e1` for each element. The agent acts on a ref, reads the page again to check the result, and repeats." |
| 17 | Drive the browser | The browser stays open between commands | S1 | PASS | S1: "The browser stays open between commands" |
| 18 | Drive the browser | Quick start code block: `open`, `snapshot -i`, `click @e1`, `get url`, `close` | S1 | PASS | S1 quick start has the same five commands, including "agent-browser snapshot -i       # interactive elements, each with a ref" |
| 19 | Drive the browser | A ref describes the page at snapshot time; take a new snapshot after navigation or a DOM change | S1 | PASS | S1: "Refs describe the page at the time of the snapshot. After navigation or a DOM change, take a new snapshot before using refs again." |
| 20 | Drive the browser | A click fails, and does not report success, when the target is hidden, disabled, outside the viewport, or covered | S1 | PASS | S1: "A click fails, instead of reporting success, when the target is hidden, disabled, outside the viewport, or covered by another element" |
| 21 | Drive the browser | "A failed click is a finding, not noise" | none | ADVICE | The tutorial's own interpretation, not a tool fact |
| 22 | Drive the browser | Each `--session` gets its own daemon and browser | S1 | PASS | S1: "Each `--session` gets its own daemon and browser." |
| 23 | Drive the browser | "Use one session per test user" | none | ADVICE | Tutorial's advice |
| 24 | Drive the browser | Capture group has `screenshot`, `pdf`, `record`, `download`, `diff`; debug group has `console`, `errors`; page state group has `network` | S1 | PASS | S1 table: "Capture \| `screenshot`, `pdf`, `record`, `download`, `diff`"; "Page and network state \| `cookies`, `storage`, `network`..."; "Debug and performance \| `console`, `errors`..." |
| 25 | Drive the browser | `agent-browser skills get core` prints the core loop and common workflows for the installed version | S1 | PASS | S1: "agent-browser skills get core                 # the core loop, refs, waiting, and common workflows"; "so its instructions always match the installed CLI" |
| 26 | Drive the browser | `agent-browser mcp` starts an MCP server over stdio | S1 | PASS | S1: "`agent-browser mcp` starts an MCP server over stdio" |
| 27 | Check in three layers | The UI, API, and database checks are the tutorial's suggestion | none | ADVICE | Labelled "The tutorial suggests" |
| 28 | Check in three layers | ISTQB defines a test environment as the hardware, tools, simulators, and other support elements needed to perform a test | S4 | PASS | S4: "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test." (a shortened paraphrase) |
| 29 | Check in three layers | `https://staging.example.com` as an example; "never let the agent run against production" | none | ADVICE | Example value and the tutorial's own rule |
| 30 | Check in three layers | ISTQB defines test data as data needed for test execution | S5 | PASS | S5: "Data needed for test execution." |
| 31 | Check in three layers | Test data order: create before, use only test accounts, remove or reset after | none | ADVICE | Labelled "The tutorial suggests" |
| 32 | Check in three layers | Playwright Test has a built-in `request` fixture that respects options such as `baseURL` and `extraHTTPHeaders` | S6 | PASS | S6: "Playwright Test comes with the built-in request fixture that respects configuration options like baseURL or extraHTTPHeaders" |
| 33 | Check in three layers | The tutorial also uses a plain `curl` call for a quick check | none | ADVICE | The tutorial's own practice. The repo's `test-executor-agent` also uses `curl` (see row 78) |
| 34 | Check in three layers | `MCP_PERMISSIONS=list,read,utility` keeps only the list, read, and utility tools (MySQL MCP server) | S7 | PASS | S7: "MCP_PERMISSIONS=list,read,utility"; "the server now enables only `list,read,utility`" |
| 35 | Check in three layers | `MCP_REQUIRE_READONLY_DB_USER=true` makes the server fail at startup if the MySQL user can write | S7 | PASS | S7: "`true` makes startup fail if the MySQL user can write." |
| 36 | Check in three layers | Every tool reports `readOnlyHint` and `destructiveHint` | S7 | PASS | S7: "every tool reports `readOnlyHint` and `destructiveHint`." |
| 37 | Check in three layers | Callout: use a read-only DB user in a test environment; keep the password in `${DB_PASSWORD}` | none | ADVICE | Labelled "The tutorial's rule". `${DB_PASSWORD}` is a reader-side placeholder |
| 38 | Collect evidence | The CTFL syllabus says a defect report holds the test steps and relevant test logs, database dumps, screenshots, or recordings | S8 | PASS | S8: "including the test steps that detected the anomaly, and any relevant test logs, database dumps, screenshots, or recordings" |
| 39 | Collect evidence | agent-browser `screenshot` and `record` get a screenshot or recording | S1 | PASS | S1 capture group: "`screenshot`, `pdf`, `record`..." |
| 40 | Collect evidence | Playwright MCP `browser_take_screenshot` | S2 | PASS | S2: "**browser_take_screenshot**... Take a screenshot of the current page." |
| 41 | Collect evidence | agent-browser `console` and `errors` for the console log | S1 | PASS | S1: "Debug and performance \| `console`, `errors`..." |
| 42 | Collect evidence | Playwright MCP `browser_console_messages` takes a `level` and a `filename` to save it | S2 | PASS | S2: "`level` (string)..."; "`filename` (string, optional): File name to save the console messages to." |
| 43 | Collect evidence | agent-browser `network` for the network log | S1 | PASS | S1: "Page and network state \| ... `network`..." |
| 44 | Collect evidence | Playwright MCP `browser_network_requests` takes a `filter` regexp and a `filename` | S2 | PASS | S2: "`filter` (string, optional): Only return requests whose URL matches this regexp"; "`filename` (string, optional): File name to save the network requests to." |
| 45 | Collect evidence | Evidence rows "Database result" and "Run facts" (query and rows; time, environment URL, build, role) | none | ADVICE | The tutorial's own checklist content |
| 46 | Collect evidence | Playwright MCP `--output-dir` sets the folder for automatically named files, such as a screenshot with no file name | S2 | PASS | S2: "path to the directory for automatically named output files, for example a screenshot taken without an explicit file name." |
| 47 | Collect evidence | `--isolated` keeps the browser profile in memory, not on disk | S2 | PASS | S2: "keep the browser profile in memory, do not save it to disk." |
| 48 | Collect evidence | One folder per run, e.g. `evidence/<run-id>/<test-id>/` | none | ADVICE | The tutorial's suggestion |
| 49 | Collect evidence | `--redact-url-params` replaces the values of named URL parameters with `<redacted>` in tool responses | S2 | PASS | S2: "comma-separated list of URL query and fragment parameter names... whose values are replaced with <redacted> in the tool responses." |
| 50 | Collect evidence | A Claude in Chrome GIF captures everything visible, including account details on logged-in pages; review before sharing outside your team | S3 | PASS | S3: "The recording captures everything visible in the browser, including account details on logged-in pages, so review it before sharing it outside your team." |
| 51 | Collect evidence | The Claude in Chrome docs say to tell Claude what console patterns to look for, because logs can be verbose | S3 | PASS | S3: "Tell Claude what patterns to look for rather than asking for all console output, since logs can be verbose" |
| 52 | Collect evidence | Checklist callout: test id, time, build; remove secrets | none | ADVICE | Labelled "The tutorial's checklist" |
| 53 | Investigate a failure | In test execution, actual results are compared with expected results, results are logged, and anomalies are analyzed to find likely causes | S8 | PASS | S8: "Actual test results are compared with the expected results. The test results are logged. Anomalies are analyzed to identify their likely causes." |
| 54 | Investigate a failure | Failure: an event in which a component or system does not meet its requirements during execution | S9 | PASS | S9: "An event in which a component or system does not meet its requirements within specified limits during its execution." |
| 55 | Investigate a failure | Defect: an imperfection or deficiency in a work product; "Bug" is a synonym | S10 | PASS | S10: "An imperfection or deficiency in a work product..."; "synonyms: [{'id': 4801, 'name': 'bug'}..." |
| 56 | Investigate a failure | False-positive result: a defect is reported, but no such defect exists in the test object | S11 | PASS | S11: "A test result in which a defect is reported although no such defect actually exists in the test object." |
| 57 | Investigate a failure | False-negative result: the test fails to find a defect that is present | S12 | PASS | S12: "A test result which fails to identify a defect that is actually present in a test object." |
| 58 | Investigate a failure | Root cause analysis: the process used to find the root cause of a defect | S13 | PASS | S13: "The process used to identify the root cause of a defect." |
| 59 | Investigate a failure | The syllabus says a reported anomaly may turn out to be a real defect or something else | S8 | PASS | S8: "the reported anomalies may turn out to be real defects or something else (e.g., false–positive result, change request)" |
| 60 | Investigate a failure | The four-step method and the layer table | none | ADVICE | Labelled "The tutorial's method"; states no tool fact |
| 61 | Write the defect report | ISTQB defines a defect report as documentation of the occurrence, nature, and status of a defect | S14 | PASS | S14: "Documentation of the occurrence, nature, and status of a defect." |
| 62 | Write the defect report | The CTFL list of what a report from dynamic testing typically includes (eight bullets) | S8 | PASS | S8: "A defect report logged during dynamic testing typically includes: Unique identifier... Title with a short summary... Date..., issuing organization, and author, including their role... test object and test environment... Context... Description... Expected results and actual results... Severity... Priority to fix... Status... References (e.g., to the test case)" |
| 63 | Write the defect report | Defect management tools may fill in some fields: identifier, date, author, initial status | S8 | PASS | S8: "Some of this data may be automatically included when using defect management tools (e.g., identifier, date, author and initial status)." |
| 64 | Write the defect report | `gh issue list --search` searches issues; `--state all` includes closed ones | S15 | PASS | S15: "--search <query> Search issues with query"; "--state <string> (default "open") Filter by state: {open\|closed\|all}" |
| 65 | Write the defect report | `gh issue create` takes `--title`, `--label`, and `--body-file`, which reads the body from a file | S16 | PASS | S16: "--body-file <file> Read body text from file"; "--label <name>"; "--title <string>" |
| 66 | Write the defect report | Atlassian MCP server can create and update work items | S17 | PASS | S17: "**Create and update** work items or pages based on natural language commands." |
| 67 | Write the defect report | Its Jira permission groups are `read_jira`, `write_jira`, `search_jira` | S17 | PASS | S17: "\| **Jira** \| `read_jira` · `write_jira` · `search_jira` \|" |
| 68 | Write the defect report | Atlassian says MCP clients act with your existing permissions and asks you to use least privilege | S18 | PASS | S18: "MCP clients can perform actions on all connected products... with your existing permissions. Use least privilege" |
| 69 | Write the defect report | Callout: add an ask rule for the filing tool and read the draft | none | ADVICE | Tutorial's advice |
| 70 | Defect report template | The template (a markdown block) and "unknown" instruction | none | ADVICE | Labelled "the tutorial's own" |
| 71 | Defect report template | Callout: severity is impact on stakeholders; priority is how soon to fix; the syllabus lists them as two fields | S8 | PASS | S8: "Severity of the defect (degree of impact) on the interests of stakeholders or requirements" and "Priority to fix" as separate bullets |
| 72 | Record results | ISTQB defines a test log as a chronological record of relevant details about test execution | S19 | PASS | S19: "A chronological record of relevant details about test execution." |
| 73 | Record results | The syllabus names test logs and defect reports as work products of test execution | S8 | PASS | S8: "Test execution work products include: test logs, and defect reports (see section 5.5)." |
| 74 | Record results | Test progress metrics include the number of test cases run and not run, and passed and failed | S8 | PASS | S8: "number of test cases run/not run, passed/failed" |
| 75 | Record results | pass/fail/blocked statuses and the JSON results file | none | ADVICE | Labelled "the tutorial's own". JSON keys are the tutorial's own format |
| 76 | Guardrails | Permission rules are evaluated in order deny, ask, allow; the first match decides | S20 | PASS | S20: "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome" |
| 77 | Guardrails | Ask rules prompt for confirmation | S20 | PASS | S20: "**Ask** rules prompt for confirmation when Claude tries to use the specified tool." |
| 78 | Guardrails | File edits are checked against `Edit(path)` rules, and an `Edit` rule also covers `Write` | S20 | PASS | S20: "Claude Code checks file permissions against `Edit(path)` and `Read(path)` rules"; "`Write`, `NotebookEdit`, or legacy `MultiEdit`: use `Edit(docs/**)` in place of `Write(docs/**)`." |
| 79 | Guardrails | Bash rules match the whole command text, with `*` for any text | S20 | PASS | S20: "Bash rules match the whole command text, with `*` standing in for any text." |
| 80 | Guardrails | `mcp__<server>__*` matches every tool of one MCP server | S20 | PASS | S20: "`mcp__puppeteer__*` matches every tool from the `puppeteer` server" |
| 81 | Guardrails | Example `.claude/settings.json`: `permissions.deny` with `Edit(/src/**)` and `Edit(/api/**)` | S20, S21 | PASS | S21: "an `Edit` deny rule... under `permissions.deny` in `.claude/settings.json`, like `Edit(/.env)`"; S20: "`Edit(/src/**/*.ts)`" |
| 82 | Guardrails | Example `.claude/settings.json`: `permissions.ask` list with `Bash(gh issue create *)` and `mcp__jira__*` | S20 | FAIL | S20 and S21 never show the settings key `ask` (or `permissions.ask`) in a settings file. They only describe "Ask rules" in prose. The `ask` key is in a code block with no cite. Fix: cite a source that shows the `ask` key, or say "add ask rules" without the JSON key |
| 83 | Guardrails | A `PreToolUse` hook runs before a tool call and can block it; exit code 2 blocks the action | S21 | PASS | S21: "`PreToolUse` \| Before a tool call executes. Can block it"; "exit 2                                               # exit 2 = block the action" |
| 84 | Guardrails | The hooks guide shows a `PreToolUse` hook in `.claude/settings.json` that runs a script before each `Edit` or `Write` call and exits 2 for a protected path | S21 | PASS | S21: "Add a `PreToolUse` hook to `.claude/settings.json` that runs the script before any `Edit` or `Write` tool call"; "exits with code 2 to block the edit." |
| 85 | Guardrails | Hook decisions do not bypass deny and ask rules | S20 | PASS | S20: "PreToolUse hook decisions don't bypass permission rules. Claude Code evaluates deny and ask rules regardless of what a PreToolUse hook returns" |
| 86 | Guardrails | The hooks guide warns that Claude can still change protected files with shell commands | S21 | PASS | S21: "Claude can still change the protected files with shell commands." |
| 87 | Guardrails | Layman: "An `Edit` rule covers file edits and new files" | S20 | FAIL | S20 says a `Read` deny rule blocks Edit and Write "including creating a new file there". It does not say that an `Edit` rule covers new files. Fix: "An `Edit` rule covers file edits" and drop "and new files" |
| 88 | Guardrails | Callout: agent does not edit app code, write to the DB, or file without approval | none | ADVICE | Labelled "The tutorial's rule" |
| 89 | Practice | dMoney web app at `http://localhost:3000`, API at `http://localhost:5000` | none | PASS-REPO | repo/README.md: "http://localhost:3000" (dmoney-web-react) and "http://localhost:5000" (dmoney-transaction-api) |
| 90 | Practice | Data is in the MySQL database `dmoneydb` | none | PASS-REPO | repo/README.md: "MySQL (dmoneydb)" |
| 91 | Practice | A balance is not a column; it is `SUM(credit) - SUM(debit)` over the `Transactions` ledger | none | PASS-REPO | repo/README.md: "There is no balance column. `Transactions` is an append-only double-entry ledger, and an account's balance is computed as `SUM(credit) - SUM(debit)`." |
| 92 | Practice | `GET /transaction/balance/:account` returns the current balance | none | PASS-REPO | repo/dmoney-transaction-api/endpoints.md: "### `GET /transaction/balance/:account` — Current balance" |
| 93 | Practice | The repo has its own `test-executor-agent` that runs UI steps with agent-browser and API steps with curl | none | PASS-REPO | repo/.claude/agents/test-executor-agent.md: "Use only `agent-browser` for UI steps and `curl` for API steps." |
| 94 | Practice | Its results use `pass`, `failed`, and `not executed` | none | PASS-REPO | repo/.claude/agents/test-executor-agent.md: "(`pass` / `failed` / `not executed`)" |
| 95 | Practice | dMoney has bugs and security flaws on purpose; run it only on your machine; never deploy it | none | PASS-REPO | repo/README.md: "known bugs and security flaws, and they are there on purpose... Do not deploy it to production or expose it to the internet." |
| 96 | Practice | Facts come from the repository at commit 51db34a | none | N/A | A statement about the page's source; the brief states the commit |
| 97 | Practice | Exercise steps 1–6 and the prompt block (`--session`, `SELECT` on `Transactions`) | none, S15, S16 | ADVICE | Labelled "the tutorial's own". `--session` is in S1; `gh issue list --search` is in S15; `gh issue create --body-file` is in S16 |
| 98 | Common mistakes | Reusing old refs: a ref describes the page at the time of its snapshot | S1 | PASS | S1: "Refs describe the page at the time of the snapshot." |
| 99 | Common mistakes | A reported anomaly may turn out to be something other than a real defect | S8 | PASS | S8: "the reported anomalies may turn out to be real defects or something else" |
| 100 | Common mistakes | The hooks guide says shell commands can still change files | S21 | PASS | S21: "Claude can still change the protected files with shell commands." |
| 101 | Common mistakes | A Chrome GIF captures account details; `--redact-url-params` in Playwright MCP | S3, S2 | PASS | S3: "including account details on logged-in pages"; S2: "--redact-url-params" |
| 102 | Common mistakes | An ask rule for the filing tool; duplicate search first | S20, S15 | PASS | S20: "**Ask** rules prompt for confirmation..."; S15: "--search <query>" |
| 103 | Common mistakes | `MCP_REQUIRE_READONLY_DB_USER=true` on the MySQL MCP server | S7 | PASS | S7: "`true` makes startup fail if the MySQL user can write." |
| 104 | Common mistakes | "A filed issue reaches the whole team at once"; "A changed app hides the defect" | none | ADVICE | The tutorial's reasoning, not a tool fact |
| 105 | Key words | Failure; Defect (bug synonym); False-positive; False-negative; Root cause analysis; Test environment; Test data; Test log; Defect report | S9–S14, S4, S5, S19 | PASS | Each row restates the page text, and the page text matches its cited source (rows 28, 30, 54–58, 61, 72) |
| 106 | Key words | Ref: the id, such as `@e1`, that an agent-browser snapshot gives each element; valid only for that snapshot | S1 | PASS | S1: "a ref such as `@e1` for each element"; "Refs describe the page at the time of the snapshot." The row restates page text |
| 107 | Key words | Ask rule: a permission rule that makes Claude Code ask for confirmation before a tool call | S20 | PASS | S20: "**Ask** rules prompt for confirmation when Claude tries to use the specified tool." The row restates page text |

Open FAILs after round 2: 2

Script check of round 2: 107 rows, 2 FAIL rows, 1 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / test-execution (round 3, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Choose a browser tool | agent-browser is a native Rust CLI; the agent drives the browser one shell command at a time | S1 | PASS | "agent-browser is a native Rust CLI that gives an AI agent a browser it can drive one command at a time... each step is one short shell call." |
| 2 | Choose a browser tool | Playwright MCP is an MCP server; Claude works through structured accessibility snapshots, not screenshots | S2 | PASS | "enables LLMs to interact with web pages through structured accessibility snapshots, bypassing the need for screenshots" |
| 3 | Choose a browser tool | Claude in Chrome is Claude Code connected to the Claude in Chrome extension in your own browser | S3 | PASS | "Claude Code integrates with the Claude in Chrome browser extension to give you browser automation capabilities" |
| 4 | Choose a browser tool | The table's "Good for" column (step-by-step runs, long exploratory sessions, debugging by hand) | none | ADVICE | The tutorial's own pick of tool for each job. It states no tool fact beyond rows 1-3. |
| 5 | Choose a browser tool | The Playwright MCP README says a CLI with skills is more token-efficient than MCP | S2 | PASS | "CLI invocations are more token-efficient: they avoid loading large tool schemas and verbose accessibility trees" |
| 6 | Choose a browser tool | The README says MCP suits exploratory automation and long-running autonomous workflows | S2 | PASS | "MCP remains relevant for specialized agentic loops... such as exploratory automation, self-healing tests, or long-running autonomous workflows" |
| 7 | Choose a browser tool | Claude in Chrome shares your browser's login state; actions run in a visible Chrome window | S3 | PASS | "shares your browser's login state... Browser actions run in a visible Chrome window in real time." |
| 8 | Choose a browser tool | It pauses at a login page or CAPTCHA and asks you to handle it | S3 | PASS | "When Claude encounters a login page or CAPTCHA, it pauses and asks you to handle it manually." |
| 9 | Choose a browser tool | It works with Google Chrome and Microsoft Edge; not supported in WSL | S3 | PASS | "Chrome integration works with Google Chrome and Microsoft Edge... isn't supported in Windows Subsystem for Linux (WSL)." |
| 10 | Choose a browser tool | It needs a `/login` sign-in; with an API key or long-lived token, Claude Code keeps it off | S3 | PASS | "requires signing in with `/login`. If you authenticate with an API key or a long-lived token... Claude Code keeps Chrome integration off" |
| 11 | Choose a browser tool | `claude setup-token` makes the long-lived token for CI and scripts | S22 | PASS | "`claude setup-token` \| Generate a long-lived OAuth token for CI and scripts." |
| 12 | Choose a browser tool | A CI job that signs in with that token or an API key cannot use Claude in Chrome | S3, S22 | PASS | Follows from rows 10 and 11. S3: "Claude Code keeps Chrome integration off". |
| 13 | Choose a browser tool | Callout: use agent-browser or Playwright MCP for runs, Chrome for debugging, never production | none | ADVICE | The page labels it "The tutorial's advice". |
| 14 | Drive with agent-browser | `npm install -g agent-browser` and `agent-browser install` | S1 | PASS | "npm install -g agent-browser / agent-browser install # download Chrome for Testing (first time only)" |
| 15 | Drive with agent-browser | The second command downloads Chrome for Testing the first time | S1 | PASS | "download Chrome for Testing (first time only)" |
| 16 | Drive with agent-browser | `snapshot` returns compact text with a ref such as `@e1` per element; the agent acts on a ref, re-reads, repeats | S1 | PASS | "`snapshot` returns the page as compact text with a ref such as `@e1` for each element. The agent acts on a ref, reads the page again" |
| 17 | Drive with agent-browser | The browser stays open between commands | S1 | PASS | "The browser stays open between commands" |
| 18 | Drive with agent-browser | Quick-start code block: `open example.com`, `snapshot -i`, `click @e1`, `get url`, `close` | S1 | PASS | "agent-browser open example.com... snapshot -i # interactive elements, each with a ref... click @e1... get url # check the result... agent-browser close" |
| 19 | Drive with agent-browser | A ref describes the page at snapshot time; take a new snapshot after navigation or DOM change | S1 | PASS | "Refs describe the page at the time of the snapshot. After navigation or a DOM change, take a new snapshot" |
| 20 | Drive with agent-browser | A click fails, not reports success, when the target is hidden, disabled, outside the viewport, or covered | S1 | PASS | "A click fails, instead of reporting success, when the target is hidden, disabled, outside the viewport, or covered by another element" |
| 21 | Drive with agent-browser | "A failed click is a finding, not noise"; "Use one session per test user" | none | ADVICE | The tutorial's own advice. |
| 22 | Drive with agent-browser | Each `--session` gets its own daemon and browser | S1 | PASS | "Each `--session` gets its own daemon and browser." |
| 23 | Drive with agent-browser | Capture group has `screenshot`, `pdf`, `record`, `download`, `diff`; debug group has `console`, `errors`; page-state group has `network` | S1 | PASS | "Capture \| `screenshot`, `pdf`, `record`, `download`, `diff`"; "Page and network state \| ... `network`"; "Debug and performance \| `console`, `errors`" |
| 24 | Drive with agent-browser | `agent-browser skills get core` prints the core loop and common workflows for the installed version | S1 | PASS | "`agent-browser skills get core` # the core loop, refs, waiting, and common workflows"; "its instructions always match the installed CLI" |
| 25 | Drive with agent-browser | `agent-browser mcp` starts an MCP server over stdio | S1 | PASS | "`agent-browser mcp` starts an MCP server over stdio" |
| 26 | Check in three layers | UI, API, and database checks for each data-changing case | none | ADVICE | The page says "The tutorial suggests". |
| 27 | Check in three layers | ISTQB defines a test environment as "the hardware, tools, simulators, and other support elements needed to perform a test" | S4 | FAIL | S4: "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test." The page drops "instrumentation" and turns "software tools" into "tools". Fix: quote S4 in full. |
| 28 | Check in three layers | Never let the agent run against production; name the environment in the prompt | none | ADVICE | Tutorial advice. `staging.example.com` is the reader's own URL. |
| 29 | Check in three layers | ISTQB defines test data as data needed for test execution | S5 | PASS | "Definition: Data needed for test execution." |
| 30 | Check in three layers | Order: create data, use test accounts only, remove or reset after the run | none | ADVICE | The page says "The tutorial suggests". |
| 31 | Check in three layers | Playwright Test has a built-in `request` fixture that respects `baseURL` and `extraHTTPHeaders` | S6 | PASS | "Playwright Test comes with the built-in request fixture that respects configuration options like baseURL or extraHTTPHeaders" |
| 32 | Check in three layers | "The tutorial also uses a plain `curl` call" | none | ADVICE | A statement about the tutorial. `curl` is also used in the repo agent (see row 66). |
| 33 | Check in three layers | `MCP_PERMISSIONS=list,read,utility` keeps only the list, read, and utility tools | S7 | PASS | "MCP_PERMISSIONS=list,read,utility"; "the server now enables only `list,read,utility`" |
| 34 | Check in three layers | `MCP_REQUIRE_READONLY_DB_USER=true` makes the server fail at startup if the MySQL user can write | S7 | PASS | "`true` makes startup fail if the MySQL user can write." |
| 35 | Check in three layers | Every tool reports `readOnlyHint` and `destructiveHint` | S7 | PASS | "every tool reports `readOnlyHint` and `destructiveHint`." |
| 36 | Check in three layers | Callout: read-only DB user, password in `${DB_PASSWORD}` | none | ADVICE | The page labels it "The tutorial's rule". |
| 37 | Collect evidence | A defect report holds the test steps and any relevant test logs, database dumps, screenshots, or recordings | S8 | PASS | "including the test steps that detected the anomaly, and any relevant test logs, database dumps, screenshots, or recordings" |
| 38 | Collect evidence | Evidence table: agent-browser `screenshot`, `record`, `console`, `errors`, `network` | S1 | PASS | Same S1 rows as row 23. |
| 39 | Collect evidence | Playwright MCP `browser_take_screenshot` | S2 | PASS | "**browser_take_screenshot**" |
| 40 | Collect evidence | `browser_console_messages` with `level` and `filename` to save | S2 | PASS | "`level` (string)... `filename` (string, optional): File name to save the console messages to." |
| 41 | Collect evidence | `browser_network_requests` with `filter` regexp and `filename` | S2 | PASS | "`filter` (string, optional): Only return requests whose URL matches this regexp"; "`filename`... save the network requests to" |
| 42 | Collect evidence | Database result and run facts rows (query and rows, time, URL, build, role) | none | ADVICE | The tutorial's own checklist. |
| 43 | Collect evidence | `--output-dir` sets the folder for automatically named files, such as a screenshot with no file name | S2 | PASS | "path to the directory for automatically named output files, for example a screenshot taken without an explicit file name" |
| 44 | Collect evidence | `--isolated` keeps the browser profile in memory, not on disk | S2 | PASS | "keep the browser profile in memory, do not save it to disk." |
| 45 | Collect evidence | One folder per run, `evidence/<run-id>/<test-id>/` | none | ADVICE | The page says "The tutorial suggests". |
| 46 | Collect evidence | `--redact-url-params` replaces values of named URL parameters with `<redacted>` in tool responses | S2 | PASS | "whose values are replaced with <redacted> in the tool responses." |
| 47 | Collect evidence | A Claude in Chrome GIF captures everything visible, incl. account details; review before sharing outside your team | S3 | PASS | "The recording captures everything visible in the browser, including account details on logged-in pages, so review it before sharing it outside your team." |
| 48 | Collect evidence | Tell Claude what console patterns to look for because logs can be verbose | S3 | PASS | "Tell Claude what patterns to look for rather than asking for all console output, since logs can be verbose" |
| 49 | Collect evidence | Checklist callout (test id, time, build; remove secrets) | none | ADVICE | The page labels it "The tutorial's checklist". |
| 50 | Investigate a failure | In test execution, actual results are compared with expected; results are logged; anomalies analyzed for likely causes | S8 | PASS | "Actual test results are compared with the expected results. The test results are logged. Anomalies are analyzed to identify their likely causes." |
| 51 | Investigate a failure | Failure: "An event in which a component or system does not meet its requirements during execution" | S9 | FAIL | S9: "An event in which a component or system does not meet its requirements within specified limits during its execution." The page drops "within specified limits". Fix: use the S9 wording. |
| 52 | Investigate a failure | Defect: "An imperfection or deficiency in a work product"; "Bug" is a synonym | S10 | PASS | "An imperfection or deficiency in a work product where it does not meet its requirements..."; "synonyms: [{'id': 4801, 'name': 'bug'}..." |
| 53 | Investigate a failure | False-positive result: a defect is reported but none exists in the test object | S11 | PASS | "A test result in which a defect is reported although no such defect actually exists in the test object." |
| 54 | Investigate a failure | False-negative result: the test fails to find a defect that is present | S12 | PASS | "A test result which fails to identify a defect that is actually present in a test object." |
| 55 | Investigate a failure | Root cause analysis: process used to find the root cause of a defect | S13 | PASS | "The process used to identify the root cause of a defect." |
| 56 | Investigate a failure | A reported anomaly may turn out to be a real defect or something else | S8 | PASS | "the reported anomalies may turn out to be real defects or something else" |
| 57 | Investigate a failure | Method steps and layer table | none | ADVICE | The page labels it "The tutorial's method". |
| 58 | Write the defect report | ISTQB defines a defect report as documentation of the occurrence, nature, and status of a defect | S14 | PASS | "Documentation of the occurrence, nature, and status of a defect." |
| 59 | Write the defect report | The CTFL list of report contents (8 bullets: id, title, date, organization, author and role, object, environment, context, steps, evidence, expected and actual, severity, priority, status, references) | S8 | PASS | "Unique identifier... Title with a short summary... Date..., issuing organization, and author, including their role... test object and test environment... Context... test steps... Expected results and actual results... Severity... Priority to fix... Status... References (e.g., to the test case)" |
| 60 | Write the defect report | Defect management tools may fill in identifier, date, author, initial status | S8 | PASS | "Some of this data may be automatically included when using defect management tools (e.g., identifier, date, author and initial status)." |
| 61 | Write the defect report | `gh issue list --search` searches issues; `--state all` includes closed | S15 | PASS | "--search <query>"; "--state <string> (default \"open\")"; "$ gh issue list --state all" |
| 62 | Write the defect report | `gh issue create` takes `--title`, `--label`, `--body-file` (reads body from a file) | S16 | PASS | "--body-file <file>"; "--label <name>"; "--title <string>" |
| 63 | Write the defect report | Atlassian MCP server can create and update work items; Jira groups `read_jira`, `write_jira`, `search_jira` | S17 | PASS | "Create and update work items or pages based on natural language commands."; "`read_jira` · `write_jira` · `search_jira`" |
| 64 | Write the defect report | MCP clients act with your existing permissions; use least privilege | S18 | PASS | "MCP clients can perform actions on all connected products... with your existing permissions. Use least privilege" |
| 65 | Write the defect report | Callout: add an ask rule for the filing tool | none | ADVICE | Tutorial advice. |
| 66 | Defect report template | Whole template, with the tutorial's own fields, severity values (critical, major, minor) and path names | none | ADVICE | The page labels it "the tutorial's own". The `evidence/<run-id>/<test-id>/` path is the reader's own. |
| 67 | Defect report template | "Severity is the impact on stakeholders; priority is how soon to fix it; the syllabus lists them as two fields" | S8 | PASS | "Severity of the defect (degree of impact) on the interests of stakeholders... Priority to fix" |
| 68 | Record results | ISTQB defines a test log as a chronological record of relevant details about test execution | S19 | PASS | "A chronological record of relevant details about test execution." |
| 69 | Record results | The syllabus names test logs and defect reports as work products of test execution | S8 | PASS | "Test execution work products include: test logs, and defect reports" |
| 70 | Record results | Test progress metrics include test cases run/not run, passed/failed | S8 | PASS | "number of test cases run/not run, passed/failed" |
| 71 | Record results | pass/fail/blocked statuses, the JSON example and the Markdown table | none | ADVICE | The page labels the statuses and format "the tutorial's own". |
| 72 | Guardrails | Rules are evaluated deny, then ask, then allow; the first match decides | S20 | PASS | "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome" |
| 73 | Guardrails | Ask rules prompt for confirmation | S20 | PASS | "Ask rules prompt for confirmation when Claude tries to use the specified tool." |
| 74 | Guardrails | File edits are checked against `Edit(path)` rules; an `Edit` rule also covers `Write` | S20 | PASS | "`Edit` rules apply to all built-in tools that edit files."; "use `Edit(docs/**)` in place of `Write(docs/**)`." |
| 75 | Guardrails | Bash rules match the whole command text, with `*` for any text | S20 | PASS | "Bash rules match the whole command text, with `*` standing in for any text." |
| 76 | Guardrails | `mcp__<server>__*` matches every tool of one MCP server | S20 | PASS | "To match every tool from an MCP server, write `mcp__<server>__*`." |
| 77 | Guardrails | The `permissions` object takes `allow`, `ask`, `deny` arrays | S23 | PASS | "Set allow, ask, and deny rules"; "The three rule arrays share one syntax" |
| 78 | Guardrails | Settings block: `permissions.deny` / `permissions.ask` with `Edit(...)`, `Bash(gh issue create *)`, `mcp__jira__*` in `.claude/settings.json` | S20, S21, S23 | PASS | Keys are in S23 (`permissions.ask`, `permissions.deny`). Rule syntax is in S20 (`Bash(git push *)`, `mcp__puppeteer__*`). S21: "`Edit` deny rule... under `permissions.deny` in `.claude/settings.json`, like `Edit(/.env)`". The paths and the `jira` name are examples. |
| 79 | Guardrails | A `PreToolUse` hook runs before a tool call and can block it; exit code 2 blocks | S21 | PASS | "`PreToolUse` \| Before a tool call executes. Can block it"; "exit 2 # exit 2 = block the action" |
| 80 | Guardrails | The hooks guide shows a script run by a `PreToolUse` hook before `Edit` or `Write`; it exits 2 for a protected path | S21 | PASS | "Add a `PreToolUse` hook to `.claude/settings.json` that runs the script before any `Edit` or `Write` tool call"; "exits with code 2 to block the edit" |
| 81 | Guardrails | Hook decisions do not bypass deny and ask rules | S20 | PASS | "PreToolUse hook decisions don't bypass permission rules. Claude Code evaluates deny and ask rules regardless of what a PreToolUse hook returns" |
| 82 | Guardrails | The hooks guide warns that Claude can still change protected files with shell commands | S21 | PASS | "Claude can still change the protected files with shell commands." |
| 83 | Guardrails | Concern about agents "fixing" the app; do not allow broad Bash patterns; callout rule | none | ADVICE | Tutorial's own concern and rule. |
| 84 | Practice | Web app at `http://localhost:3000`, API at `http://localhost:5000`, MySQL `dmoneydb` | none | PASS-REPO | repo/README.md: "http://localhost:3000 ... http://localhost:5000 ... MySQL (dmoneydb)" |
| 85 | Practice | Balance is not a column; it is `SUM(credit) - SUM(debit)` over `Transactions` | none | PASS-REPO | repo/README.md: "There is no balance column... computed as `SUM(credit) - SUM(debit)`." |
| 86 | Practice | `GET /transaction/balance/:account` returns the current balance | none | PASS-REPO | repo/dmoney-transaction-api/swagger/swaggerTrnx.yaml:191-193: "/transaction/balance/{account}: get: summary: Get user balance by account" |
| 87 | Practice | The repo has a `test-executor-agent` using agent-browser for UI and curl for API | none | PASS-REPO | repo/.claude/agents/test-executor-agent.md: "Use only `agent-browser` for UI steps and `curl` for API steps." |
| 88 | Practice | Its results use `pass`, `failed`, `not executed` | none | PASS-REPO | repo/.claude/agents/test-executor-agent.md: "(`pass` / `failed` / `not executed`)" |
| 89 | Practice | dMoney has bugs and security flaws on purpose; never deploy it | none | PASS-REPO | repo/README.md: "known bugs and security flaws, and they are there on purpose... Do not deploy it to production" |
| 90 | Practice | The facts come from the public repo at commit 51db34a | none | N/A | A sentence about the page's own sourcing. No commit metadata is in the folder to confirm the hash. |
| 91 | Practice | Prompt block (`--session`, snapshot after each action, read-only SELECT on `Transactions`) | none | ADVICE | Labeled "an example". `--session` is in S1; `Transactions` is in the repo (row 85). |
| 92 | Practice | Steps 1-5 and the "how to check your work" line | none | ADVICE | The page labels it "the tutorial's exercise". |
| 93 | Practice | Step 6: `gh issue list --search` and `gh issue create --body-file` | S15, S16 | PASS | See rows 61 and 62. |
| 94 | Common mistakes | Old refs: a ref describes the page at snapshot time | S1 | PASS | See row 19. |
| 95 | Common mistakes | Reported anomaly may be something other than a real defect | S8 | PASS | See row 56. |
| 96 | Common mistakes | Hooks guide says shell commands can still change files | S21 | PASS | See row 82. |
| 97 | Common mistakes | A Chrome GIF captures account details; `--redact-url-params` in Playwright MCP | S3, S2 | PASS | See rows 46 and 47. |
| 98 | Common mistakes | Ask rule for the filing tool; duplicate search first | S20, S15 | PASS | See rows 73 and 61. |
| 99 | Common mistakes | `MCP_REQUIRE_READONLY_DB_USER=true` on the MySQL MCP server | S7 | PASS | See row 34. |
| 100 | Common mistakes | Fix and cause text ("A changed app hides the defect", "A filed issue reaches the whole team at once", the fixes) | none | ADVICE | The tutorial's own reasoning, with no tool fact. |
| 101 | Key words | Failure | none | FAIL | Same as row 51: the row drops "within specified limits". Fix: copy the S9 definition. |
| 102 | Key words | Defect: imperfection or deficiency in a work product; "bug" is a synonym | none | PASS | See row 52. |
| 103 | Key words | False-positive result: reports a defect that does not exist in the test object | none | PASS | See row 53. |
| 104 | Key words | False-negative result: misses a defect present in the test object | none | PASS | See row 54. |
| 105 | Key words | Root cause analysis | none | PASS | See row 55. |
| 106 | Key words | Test environment: "The hardware, tools, simulators, and other support elements needed to perform a test" | none | FAIL | Same as row 27: the row drops "instrumentation" and "software". Fix: copy the S4 definition. |
| 107 | Key words | Test data | none | PASS | See row 29. |
| 108 | Key words | Test log | none | PASS | See row 68. |
| 109 | Key words | Defect report | none | PASS | See row 58. |
| 110 | Key words | Ref: the id such as `@e1` from a snapshot, valid only for that snapshot | none | PASS | See rows 16 and 19. |
| 111 | Key words | Ask rule: makes Claude Code ask for confirmation before a tool call | none | PASS | See row 73. |

Open FAILs after round 3: 4

Script check of round 3: 111 rows, 4 FAIL rows, 1 quoted PASS phrases not found word for word in the sources.

## Verification of the open rows, facts and voices: agentic-qa / test-execution (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F27 | facts | RESOLVED | Page: "an environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test. <Cite n={4} />". S4: "An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test." |
| F51 | facts | RESOLVED | Page: "does not meet its requirements within specified limits during its execution <Cite n={9} />". S9: "An event in which a component or system does not meet its requirements within specified limits during its execution." |
| F101 | facts | RESOLVED | Key words row: "Failure \| An event in which a component or system does not meet its requirements within specified limits during its execution". This matches S9. |
| F106 | facts | RESOLVED | Key words row: "Test environment \| An environment containing hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test". This matches S4. |
| V7 | voices | RESOLVED | Layman: "Check it before you share it outside your team. <Cite n={3} />". The Technical panel says "Review it before you share it outside your team. <Cite n={3} />". S3 line 239: "review it before sharing it outside your team". |
| V21 | voices | RESOLVED | Layman item 5: "A Chrome GIF shows account details on logged-in pages. <Cite n={3} />". The Technical panel says "captures account details on logged-in pages". S3 line 239: "including account details on logged-in pages". |

New problems in changed lines:
- The Technical panel in "Investigate a failure" (line 327) now says "within specified limits during its execution". The Layman and Bangla panels of the same section were not updated, so they now drop that limit. Layman line 357 says "an event where the system does not do what its requirements say". Bangla line 372 says "execution-এর সময় component বা system তার requirement পূরণ করে না". Fix: Layman: "A **failure** is an event where a component or system does not meet its requirements within specified limits during its execution." Bangla: add the limit, for example "...execution-এর সময় নির্দিষ্ট সীমার মধ্যে component বা system তার requirement পূরণ করে না।"
- The Technical panel in "Check the result in three layers" (line 203) now lists "instrumentation" and "software tools". The Bangla panel (line 247) still lists "hardware, tool, simulator আর অন্যান্য সহায়ক উপাদান". It drops "instrumentation", and "tool" is not "software tools". Fix: "যে hardware, instrumentation, simulator, software tool আর অন্যান্য সহায়ক উপাদান লাগে।" The Layman panel (line 230, "the tools and parts a test needs") is looser than the Technical panel. Fix: "It is an environment with the hardware, instrumentation, simulators, software tools, and other support elements a test needs."

Open FAILs after round 4: 2

## Verification of the open rows, facts and voices: agentic-qa / test-execution (round 5, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| N1 | voices | RESOLVED | Technical line 327 reads "does not meet its requirements within specified limits during its execution". Source S9 reads "An event in which a component or system does not meet its requirements within specified limits during its execution." Layman line 357 now reads "a component or system does not meet its requirements within specified limits while it runs". Bangla line 372 now reads "execution-এর সময় component বা system নির্দিষ্ট সীমার মধ্যে তার requirement পূরণ করে না". Both panels keep the limit and the scope. Both keep Cite 9, the same cite as the Technical panel. |
| N2 | voices | RESOLVED | Technical line 203 reads "hardware, instrumentation, simulators, software tools, and other support elements needed to perform a test". Source S4 says the same. Layman line 230 now reads "It has the hardware, instrumentation, simulators, software tools, and other support elements that a test needs". Bangla line 247 now reads "hardware, instrumentation, simulator, software tool আর অন্যান্য সহায়ক উপাদান". Both panels list all five items. Both keep Cite 4, the same cite as the Technical panel. |

New problems in changed lines: None.

Open FAILs after round 5: 0

Open FAILs: 0
