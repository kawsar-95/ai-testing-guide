# Exploring Features with Test Charters — research notes (2026-11-15)

## Sources
S1. ISTQB Glossary: test oracle — ISTQB — https://glossary.istqb.org/en_US/term/test-oracle — accessed 2026-11-15 — cache: istqb-term-test-oracle.txt
S2. ISTQB Glossary: test oracle problem — ISTQB — https://glossary.istqb.org/en_US/term/test-oracle-problem — accessed 2026-11-15 — cache: istqb-term-test-oracle-problem.txt
S3. ISTQB Certified Tester Foundation Level Syllabus v4.0.1 — ISTQB — https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf — accessed 2026-11-15 — cache: istqb-ctfl.txt
S4. ISTQB Glossary: exploratory testing — ISTQB — https://glossary.istqb.org/en_US/term/exploratory-testing — accessed 2026-11-15 — cache: istqb-term-exploratory-testing.txt
S5. ISTQB Glossary: session-based testing — ISTQB — https://glossary.istqb.org/en_US/term/session-based-testing — accessed 2026-11-15 — cache: istqb-term-session-based-testing.txt
S6. ISTQB Glossary: test charter — ISTQB — https://glossary.istqb.org/en_US/term/test-charter — accessed 2026-11-15 — cache: istqb-term-test-charter.txt
S7. ISTQB Glossary: test session — ISTQB — https://glossary.istqb.org/en_US/term/test-session — accessed 2026-11-15 — cache: istqb-term-test-session.txt
S8. Choose a permission mode — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permission-modes — accessed 2026-11-15 — cache: cc-permission-modes.txt
S9. Create custom subagents — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/sub-agents — accessed 2026-11-15 — cache: cc-sub-agents.txt
S10. API testing — Microsoft (playwright.dev) — https://playwright.dev/docs/api-testing — accessed 2026-11-15 — cache: pw-api-testing.txt
S11. Connect Claude Code to tools via MCP — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/mcp — accessed 2026-11-15 — cache: cc-mcp.txt
S12. MySQL MCP Server README — berthojoris (GitHub) — https://github.com/berthojoris/mysql-mcp — accessed 2026-11-15 — cache: tool-mysql-mcp.txt
S13. Playwright MCP README — Microsoft (GitHub) — https://github.com/microsoft/playwright-mcp — accessed 2026-11-15 — cache: pw-mcp-readme.txt
S14. agent-browser README — Vercel Labs (GitHub) — https://github.com/vercel-labs/agent-browser — accessed 2026-11-15 — cache: tool-agent-browser.txt
S15. Use Claude Code with Chrome — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/chrome — accessed 2026-11-15 — cache: cc-chrome.txt
S16. ISTQB Glossary: test log — ISTQB — https://glossary.istqb.org/en_US/term/test-log — accessed 2026-11-15 — cache: istqb-term-test-log.txt

dMoney facts come from the public practice repo at commit 51db34a (cache: `dmoney-repo/`). They have no cite on the page.

Not from a source (the tutorial's own advice, labelled on the page): the list of oracle sources when there is no spec, the "code is not the spec" warning, the charter template, the three example charters, the evidence-and-confidence rule table and its confidence levels, the session-notes template, the 45-minute time box of the exercise.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | A test oracle is a source to determine an expected result. | "A source to determine an expected result." | S1 | |
| C2 | The test oracle problem is the challenge of deciding whether a test passed or failed for given inputs and state. | "The challenge of determining whether a test has passed or failed for a given set of test inputs and state." | S2 | |
| C3 | Exploratory testing is useful when there are few or inadequate specifications, or significant time pressure. | "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing." | S3 | section 4.4.2 |
| C4 | In exploratory testing, tests are designed, executed, and evaluated at the same time while the tester learns about the test object. | "tests are simultaneously designed, executed, and evaluated while the tester learns about the test object" | S3 | |
| C5 | Glossary: exploratory testing designs and executes tests dynamically from the tester's knowledge, exploration, and previous results. | "A test approach in which tests are dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results." | S4 | |
| C6 | Session-based testing plans test activities as test sessions. | "A test approach in which test activities are planned as test sessions." | S5 | |
| C7 | In a session-based approach, exploratory testing happens within a defined time box. | "exploratory testing is performed within a defined time box" | S3 | |
| C8 | The tester uses a test charter that contains test objectives to guide the testing. | "The tester uses a test charter containing test objectives to guide the testing." | S3 | |
| C9 | The glossary defines a test charter as a mission statement that guides an exploratory test session. | "A mission statement that guides an exploratory test session." | S6 | |
| C10 | A test session is an uninterrupted period of time spent executing tests. | "An uninterrupted period of time spent in executing tests." | S7 | |
| C11 | A debriefing usually follows the session: a discussion between the tester and interested stakeholders. | "The test session is usually followed by a debriefing that involves a discussion between the tester and stakeholders" | S3 | |
| C12 | Test objectives may be treated as high-level test conditions. | "test objectives may be treated as high-level test conditions" | S3 | |
| C13 | The tester may use test session sheets to document the steps followed and the discoveries made. | "The tester may use test session sheets to document the steps followed and the discoveries made." | S3 | |
| C14 | Exploratory testing can use other test techniques, for example equivalence partitioning. | "Exploratory testing can incorporate the use of other test techniques (e.g., equivalence partitioning)." | S3 | |
| C15 | Exploratory testing is more effective when the tester is experienced and has domain knowledge. | "Exploratory testing will be more effective if the tester is experienced, has domain knowledge" | S3 | |
| C16 | Exploratory testing also complements more formal test techniques. | "Exploratory testing is also useful to complement other more formal test techniques." | S3 | |
| C17 | Test charters are test design work products, with test cases. | "Test design work products include: (prioritized) test cases, test charters" | S3 | section 1.4.3 |
| C18 | Test execution work products include test logs and defect reports. | "Test execution work products include: test logs, and defect reports" | S3 | |
| C19 | Test analysis work products include defect reports about defects in the test basis. | "defect reports regarding defects in the test basis" | S3 | |
| C20 | A test log is a chronological record of relevant details about test execution. | "A chronological record of relevant details about test execution." | S16 | |
| C21 | In plan mode, Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source. | "Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source." | S8 | |
| C22 | Enter plan mode with Shift+Tab or by prefixing one prompt with /plan. | "Enter plan mode by pressing `Shift+Tab` or prefixing a single prompt with `/plan`." | S8 | |
| C23 | Start in plan mode from the CLI with `claude --permission-mode plan`. | "claude --permission-mode plan" | S8 | |
| C24 | When auto mode is available and useAutoModeDuringPlan is on (the default), a classifier reviews shell commands during planning; approved commands run. | "the classifier reviews shell commands other than ... instead of prompting you. Approved commands run, and rejected ones are blocked." | S8 | |
| C25 | Without auto mode, commands outside the built-in read-only set prompt for approval. | "commands outside the ... prompt for approval" | S8 | |
| C26 | Explore is a fast, read-only built-in agent for searching and analyzing codebases. | "A fast, read-only agent optimized for searching and analyzing codebases." | S9 | |
| C27 | Explore has read-only tools; Write and Edit are denied. | "read-only tools; Write and Edit are denied" | S9 | |
| C28 | Delegating to Explore keeps exploration results out of the main conversation context. | "This keeps exploration results out of your main conversation context." | S9 | |
| C29 | Claude gives Explore a thoroughness level: quick, medium, or very thorough. | "quick for targeted lookups, medium for balanced exploration, or very thorough for comprehensive analysis" | S9 | |
| C30 | Explore starts without your CLAUDE.md files and the git status snapshot. | "Explore and Plan start without your CLAUDE.md files and the git status snapshot" | S9 | |
| C31 | Explore is one-shot and cannot be resumed. | "The built-in Explore and Plan agents are one-shot and return no agent ID, so Claude can't resume them." | S9 | |
| C32 | Playwright can send requests to the server directly from Node.js without loading a page, through APIRequestContext. | "send requests to the server directly from Node.js without loading a page ... All of that could be achieved via APIRequestContext methods." | S10 | |
| C33 | A project-scoped MCP server is stored in `.mcp.json` at the project root. | "storing configurations in a `.mcp.json` file at your project's root directory" | S11 | |
| C34 | Claude Code asks for approval in interactive sessions before it uses project-scoped servers from `.mcp.json`. | "Claude Code prompts for approval in interactive sessions before using project-scoped servers from `.mcp.json` files" | S11 | |
| C35 | `.mcp.json` supports `${VAR}` expansion in `command`, `args`, `env`, `url`, and `headers`. | "You can reference an environment variable in a server's `command`, `args`, `env`, `url`, or `headers` value" | S11 | |
| C36 | Servers that fetch external content can expose you to prompt injection. | "Servers that fetch external content can expose you to" | S11 | |
| C37 | The MySQL MCP server package is `@berthojoris/mcp-mysql-server`, with a connection string and a permissions argument such as `list,read,utility`. | "npx @berthojoris/mcp-mysql-server mysql://user:pass@localhost:3306/db" | S12 | example lines 26 and 59 of the README |
| C38 | Permission `list` lists databases, tables, and schemas; `read` allows SELECT queries. | "List databases, tables, schemas ... SELECT queries, read data" | S12 | |
| C39 | Permissions `create`, `update`, and `delete` insert, update, and delete records. | "INSERT new records ... UPDATE existing records ... DELETE records" | S12 | |
| C40 | With no permissions and no categories, the server enables only list, read, and utility (since v1.44.0). | "Read-only by default ... with no permissions and no categories, the server now enables only" | S12 | |
| C41 | `MCP_REQUIRE_READONLY_DB_USER=true` makes startup fail if the MySQL user can write. | "makes startup fail if the MySQL user can write" | S12 | |
| C42 | The README's remote example uses a read-only MySQL account. | "Read-only MySQL account" | S12 | |
| C43 | Playwright MCP lets LLMs work with web pages through structured accessibility snapshots. | "interact with web pages through structured accessibility snapshots" | S13 | |
| C44 | agent-browser gives an AI agent a browser it drives one command at a time. | "gives an AI agent a browser it can drive one command at a time" | S14 | |
| C45 | agent-browser `snapshot` returns the page as compact text with a ref such as `@e1` for each element. | "`snapshot` returns the page as compact text with a ref such as `@e1` for each element" | S14 | |
| C46 | After navigation or a DOM change, take a new snapshot before using refs again. | "After navigation or a DOM change, take a new snapshot before using refs again." | S14 | |
| C47 | Claude in Chrome shares your browser login state, so it can access any site you are signed in to. | "shares your browser's login state, so it can access any site you're already signed into" | S15 | |
| C48 | On a login page or CAPTCHA, Claude in Chrome pauses and asks you to handle it. | "When Claude encounters a login page or CAPTCHA, it pauses and asks you to handle it manually." | S15 | |
| C49 | Claude in Chrome can read console errors and DOM state. | "read console errors and DOM state directly" | S15 | |
| D1 | The cash out endpoint is `POST /transaction/withdraw` behind `authenticateJWT`. | "router.post('/transaction/withdraw', authenticateJWT, withdrawController.handleWithdraw);" | dmoney-repo/dmoney-transaction-api/routes/transaction.route.js | line 20 |
| D2 | The controller reads `from_account`, `to_account`, and `amount` from the body. | "const { from_account, to_account, amount } = req.body;" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 11 |
| D3 | An amount that is not a number above 0 gets HTTP 400. | "Amount must be a valid number greater than 0" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 15-16 |
| D4 | The minimum comes from the Commissions config (fallback 10 in code); below it the message is "Minimum withdraw amount is … tk". | "Minimum withdraw amount is ${minAmount} tk" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 23, 63-65 |
| D5 | The seed fee rule: the system takes 1%, at least 5 BDT, from the payer. | "Withdraw: System takes 1% (min 5 BDT) from payer" | dmoney-repo/dmoney-transaction-api/migrations/create_commission_table.js | line 71-72 |
| D6 | The seed commission rule: the agent earns 2.5% on top, charged to the platform. | "Withdraw: Agent earns 2.5% commission on top" | dmoney-repo/dmoney-transaction-api/migrations/create_commission_table.js | line 74-75; row has 'Agent', 'platform' |
| D7 | Customer or merchant cash out must go to an Agent account. | "To Account is not agent account" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 57-59 |
| D8 | Daily and monthly limits apply to customers only. | "Daily / Monthly limit check (Customers only)" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 85 |
| D9 | The limit check uses the amount plus the fee. | "checkCustomerLimits(from_account, amt + withdrawFee, { transaction: t })" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 93 |
| D10 | Customer limits: daily 5,000 Tk and 10 transactions; monthly 50,000 Tk and 50 transactions. | "Daily   — max 5 000 Tk total,  max 10 transactions ... Monthly — max 50 000 Tk total, max 50 transactions" | dmoney-repo/dmoney-transaction-api/migrations/create_transaction_limits.js | line 4-6 |
| D11 | Insufficient balance returns HTTP 208 with "Insufficient balance". | "return res.status(208).json({ ... Insufficient balance" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 153-155 |
| D12 | The customer is debited amount plus fee. | "debit:            amt + withdrawFee," | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 113 |
| D13 | The agent is credited amount plus commission. | "credit:           amt + commission," | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 124 |
| D14 | The endpoint docs show a withdraw example; its body has no `to_account`. | "POST /transaction/withdraw — Customer withdraw" | dmoney-repo/dmoney-transaction-api/endpoints.md | line 286-295; body has from_account and amount only |
| D15 | The repo `.mcp.json` gives the `dmoney-db` server write permissions too. | "list,read,utility,create,update,delete,execute" | dmoney-repo/.mcp.json | line 23 |
| D16 | The repo test-charter skill writes a mission as Explore … with … to discover …. | "Explore <target> with <resources/techniques> to discover <information/risk>" | dmoney-repo/.claude/skills/test-charter/SKILL.md | line 36 |
| D17 | The skill rule: a charter is a mission, not a script. | "a charter is a mission, not a script" | dmoney-repo/.claude/skills/test-charter/SKILL.md | line 9 |
| D18 | The balance read is locked against concurrent requests on the account. | "Locked balance read — blocks concurrent requests on this account" | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 78 |
| D19 | Both accounts must be active; an inactive sender gets "Your account is not active". | "Your account is not active. Please contact admin." | dmoney-repo/dmoney-transaction-api/controllers/transactions/withdraw.controller.js | line 47-48 |

## Round 1 fixes

The round 1 facts report had no FAIL. The voices fixes were applied by the orchestrating session, which did not write the page. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| voices | V3 | Fixed: "usually a talk after the session". |
| voices | V4 | Fixed in the Technical panel: S4 says "based on tester's knowledge, exploration of a test item, and previous test results", so the Technical panel now names exploration, and the Bangla matches it. |
| voices | V5 | Fixed: "It starts without your CLAUDE.md files." |
| voices | V7 | Fixed: "project-scoped", and "In interactive sessions". |
| voices | V8 | Fixed: deleted the added reason. |
| voices | V9 | Fixed: "Since v1.44.0, with no permissions and no categories, it enables only `list`, `read`, and `utility`." |
| voices | V10 | Fixed: "কোনো permission বা category না দিলে". |
| voices | V13 | Fixed: "That looks odd. Treat it as a suspected bug until someone confirms it." |
| voices | V14 | Fixed: "the controller reads `to_account`". |
| voices | V15 | Fixed in the Technical panel: S3 lists "defect reports regarding defects in the test basis" as test analysis work products, so the Technical and Layman panels now say "a defect report about the test basis", and the Bangla "defect report" matches. |
| voices | V16 | Fixed: added "A test case is an output of test design." before the cite. |
| voices | V17 | Fixed: added "A defect report is an output of test execution." before the cite. |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | Exploratory testing uses the tester's knowledge, exploration of the test item, and previous results. | "A test approach in which tests are dynamically designed and executed based on tester's knowledge, exploration of a test item, and previous test results." | S4 | |
| R2 | A defect report about a defect in the test basis is a test analysis work product. | "Test analysis work products include: (prioritized) test conditions (e.g., acceptance criteria, see section 4.5.2), and defect reports regarding defects in the test basis (if not fixed directly)." | S3 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F19 | Fixed: deleted the speed claim; the sentence now says what the tutorial asks Claude to do. Same in the Bangla panel. |
| facts | F34 | Fixed: S12 wording, "can list databases, tables, and schemas, and run SELECT queries", with the cite. Same in all three panels. |
| voices | V1 | Fixed: "stakeholders". |
| voices | V3 | Fixed: "you may use it to note". |
| voices | V8 | Fixed: "environment variable" instead of "password". |
| voices | V15 | Fixed: "a similar feature of your own project". |
| voices | V18 | Fixed: "ভরসা করা". |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | The MySQL MCP server can list databases, tables, and schemas, and run SELECT queries. | "`list` \| List databases, tables, schemas" … "`read` \| SELECT queries, read data" | S12 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F24 | Fixed: `curl` is labelled as the tutorial's practice, and the write example is now "a `POST` request" with no flag. Same in all three panels. |
| voices | V3 | Fixed: no speed claim. |
| voices | V13 | Fixed: "the relevant details". |
| voices | V14 | Fixed: "Test cases go next to the … page". |
| voices | V15 | Fixed: "Suspected defects go next to the … page". |
| voices | V16 | Fixed: "এরপর এটি … পেজে যায়". |
| voices | V17 | Fixed: as V16. |
