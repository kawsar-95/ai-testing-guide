# Fact-check: content/case-study/codebase-tour.mdx

Second pass, 2026-10-27, by an agent that did not write the page. It re-checks the page after the writer fixed the 7 FAILs of the first pass. Ground truth: a read-only shallow clone of github.com/kawsar-95/genAI-project at commit 51db34a (merge of PR #10, 2026-10-22), the latest on the default branch (clone in the session scratchpad, `.../scratchpad/g/repo`). Nothing was run or edited. "Line" numbers are lines of the page. Official docs fetched with WebFetch on 2026-10-27: D1 code.claude.com/docs/en/skills, D2 .../sub-agents, D3 .../hooks, D4 .../mcp, D5 playwright.dev/docs/auth. Page cites 1 to 5 map to D1 to D5.

## Cited claims (Claude Code, MCP, Playwright)

| # | Claim | Source | Verdict | Quote or reason |
|---|---|---|---|---|
| C1 | A skill is a folder with a `SKILL.md` file [1] (277) | D1 | PASS | "Every skill needs a `SKILL.md` file"; the layout example shows `my-skill/` with `SKILL.md (required)`. |
| C2 | Two subagents do work that must stay separate [2] (289) | D2 | PASS | "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions." |
| C3 | One hook runs before the `test-design` and `find-bug` skills [3] (291) | D3 | PASS | D3 documents PreToolUse hooks with a tool-name matcher and `hookSpecificOutput.additionalContext`, and says a `PreToolUse` hook matching the `Skill` tool "fires only when Claude calls the tool". The page says "The model does not have to remember this step", which is true for a model call. (Typing `/find-bug` directly bypasses the hook; the page no longer claims "always".) |
| C4 | `.mcp.json` lists three MCP servers [4] (293) | D4 | PASS | "storing configurations in a `.mcp.json` file at your project's root directory"; `type: http` and stdio servers. |
| C5 | A setup project for each role logs in and saves the session; the role's test projects start with it [5] (401) | D5 | PASS | "declare it as a dependency for all your testing projects"; "All testing projects should use the authenticated state as `storageState`." |

## Claims about the repository (no cite)

| # | Claim (page line) | Source in clone | Verdict | Quote or reason |
|---|---|---|---|---|
| R1 | Callout: known weaknesses are a default JWT secret, an OTP bypass, open CORS, a balance query that builds SQL from a string (31) | `qa-findings/04-security-vulnerabilities.md` S-1, S-2, S-5; `app.js`; `services/getBalance.js` | PASS | `cors({ origin: "*" })`; `"... WHERE t.\`account\`='" + account + "'"`. |
| R2 | The repository documents known weaknesses in `qa-findings/` and in the `CLAUDE.md` file of the API (31) | `qa-findings/04`; `dmoney-transaction-api/CLAUDE.md` | PASS | Fixed. The API `CLAUDE.md` says getBalance "builds the SQL by **string concatenation**"; `qa-findings/04` lists the other three. |
| R3 | Do not deploy the app or open it to the internet (31) | `README.md` | PASS | "Do not deploy it to production or expose it to the internet." |
| R4 | Three layers: app, AI layer (`.claude/`, `.mcp.json`, one `.claude/` in each sub-project), output (`qa-findings/`, `.artifacts/`) (42-46) | `git ls-files` | PASS | Both sub-projects have `.claude/`. `qa-findings/` and `.artifacts/` are inside `dmoney-transaction-api/` (the table does not say so; optional). |
| R5 | dMoney is a mobile-money wallet like bKash or Nagad; REST API and a web app (44) | `README.md` | PASS | "mobile financial service (MFS) platform similar to bKash or Nagad ... a REST API and a web frontend". |
| R6 | Five roles: SYSTEM, Admin, Agent, Customer, Merchant (48) | `README.md` | PASS | "Roles: SYSTEM (internal), Admin, Agent, Customer and Merchant." |
| R7 | `dmoney-transaction-api/` is Node.js, Express, Sequelize, MySQL (82) | `package.json` | PASS | `express`, `sequelize`, `mysql2`. |
| R8 | `dmoney-web-react/` is Next.js 15 (App Router), TypeScript, MUI, Tailwind 4 (83) | `dmoney-web-react/package.json` | PASS | `"next": "15.5.9"`, `@mui/material`, `"tailwindcss": "^4"`. |
| R9 | `sql_scripts/` has a MySQL dump of `dmoneydb` with seed data (84) | `README.md` | PASS | "MySQL dump of dmoneydb (schema + seed data)". |
| R10 | `class_notes/` has eight notes (85, 433) | `git ls-files class_notes` | PASS | 8 `.md` files, numbered 1 to 8. |
| R11 | `.claude/` has the workspace skills, subagents, and hook (86) | `git ls-files .claude` | PASS | 7 skills, 2 agents, `hooks/graphify-prehook.sh`, `settings.json`. |
| R12 | `.mcp.json` has `playwright`, `jira`, `dmoney-db` (87, 293) | `.mcp.json` | PASS | Keys `jira`, `playwright`, `dmoney-db`. |
| R13 | `GRAPHIFY_SETUP.md` explains how to install graphify, a tool that builds a knowledge graph of the code; the graph is not in the public repository (88; Layman 101; Bangla 114) | `GRAPHIFY_SETUP.md`; `.gitignore`; `git ls-tree -r HEAD` | PASS | Fixed. File exists: "graphify turns this workspace into a knowledge graph ... Follow these steps to set it up" (`uv tool install graphifyy`, `graphify install`). `.gitignore` has `graphify-out/`; no `graphify-out/` file at HEAD. Serena is no longer mentioned in the folder map. |
| R14 | Request path `server.js → app.js → routes → controllers → sequelizeModel/* and services/* → MySQL` (126-129) | API `CLAUDE.md` | PASS | Same chain as "Request flow". |
| R15 | `server.js` creates the HTTP server and listens on the port (133) | `server.js` | PASS | `http.createServer(app); server.listen(port)`. |
| R16 | `app.js`: body parsing, CORS, logging, Swagger; routes at `/` with no `/api`; 404 and error handler (134) | `app.js` | PASS | `express.json`, `cors`, `morgan`, `/api-docs/*`, `app.use("/", ...)`, 404 handler, global error handler. |
| R17 | `authenticateJWT` needs a Bearer token and a matching `X-AUTH-SECRET-KEY`; `publicAuthenticateJWT` checks the token only (135) | `jwtMiddleware.js` | PASS | `req.header('X-AUTH-SECRET-KEY') === partnerKey`; the public one has no key check. |
| R18 | `routes/` has `/user/*` and `/transaction/*` routes (136) | `routes/*.js` | PASS | Also `default.route.js` for `GET /`. |
| R19 | `controllers/users/`: register, two-step login, OTP check, user CRUD, password reset (137) | `user.controller.js`, `forgotPassword.controller.js` | PASS | `registerUser`, `loginUser`, `verifyOtp`, `createUser/updateUser/deleteUser`, `forgotPassword/resetPassword`. |
| R20 | `controllers/transactions/`: one file per operation (138) | `controllers/transactions/` | PASS | deposit, withdraw, sendMoney, payment, adminDeposit, stripeCashIn, transactionDetails. |
| R21 | Models: `Users`, `Role`, `Transactions`, `Commission`, `TransactionLimit` (139) | `sequelizeModel/` | PASS | The 5 model files (plus `db.js`). |
| R22 | `Users`, `Transactions`, `Role` create their tables when they load; `Users` and `Transactions` also add seed rows; the fee and limit tables come from `migrations/` scripts (139) | `Users.js` 132, `Transactions.js` 55, `Role.js` 4; `migrations/create_commission_table.js`, `create_transaction_limits.js` | PASS | Fixed. `sequelize.sync()` is called in exactly those 3 files. Seeds: 6 users in `Users.js`, one `TRNX1001` row in `Transactions.js`. The two migrations create and seed `Commissions` and `TransactionLimits` ("Seed if the table is empty"). |
| R23 | `services/`: balance, transaction ID, daily and monthly limits, OTP email (140) | `services/` | PASS | `getBalance.js`, `generateTrnxId.js`, `limitChecker.js`, `emailHelper.js`, `gmailPersonalHelper.js`. |
| R24 | `migrations/`: one-off scripts; each checks first, safe to run twice (141) | `README.md` | PASS | "Each one checks the schema before changing it, so it is safe to run more than once". |
| R25 | `performance/` has the k6 load test (142) | `performance/` | PASS | `sendmoney-concurrency.k6.js`. |
| R26 | `POST /user/login` sends a 4-digit OTP that expires after 2 minutes; `POST /user/verify-otp` returns the JWT (146) | `user.controller.js` 460-461, 498-556 | PASS | `Math.floor(1000 + Math.random() * 9000)`; `Date.now() + 2 * 60 * 1000`. |
| R27 | Admin and SYSTEM skip the OTP (146) | `user.controller.js` 444-445 | PASS | "Admin & SYSTEM account: skip OTP". |
| R28 | `?env=dev` with a default OTP skips the real OTP; the security report lists it (146) | `user.controller.js` 527; `qa-findings/04` S-2 | PASS | `req.query.env === 'dev' && ... === process.env.DEFAULT_OTP`; S-2 "Dev OTP bypass". |
| R29 | No balance column; `Transactions` is an append-only double-entry ledger; fields `account`, `debit`, `credit`, `trnxId`, `transaction_type` (150) | `Transactions.js`; API `CLAUDE.md` | PASS | "There is no `balance` column anywhere. `Transactions` is an append-only double-entry ledger". |
| R30 | Balance = sum of credits minus sum of debits (150) | `getBalance.js` | PASS | `SUM(t.credit)-SUM(t.debit)`. |
| R31 | Fees come from the `Commissions` table; caps from the `TransactionLimits` table (152; Layman 186; Bangla 213) | `Commission.js`, `TransactionLimit.js` | PASS | Fixed. `tableName: 'TransactionLimits'`; model `Commissions`. |
| R32 | Rules are data, so a test can check them without a code change (152) | API `CLAUDE.md` | PASS | "Business rules are DB-config-driven". |
| R33 | Send Money step 1: both accounts are text; amount is a number with at most 2 decimals (158) | `sendMoney.controller.js` 12, 31-49 | PASS | `typeof ... !== 'string'`; `/^\d+(\.\d{1,2})?$/`. |
| R34 | Step 2: loads the fee rule from `Commission` (159) | line 54-56 | PASS | `Commission.getConfig('SendMoney')`. |
| R35 | Step 3: token belongs to the sender (160) | line 67-73 | PASS | `req.user.identifier` vs phone or email; 403 "Unauthorized". |
| R36 | Step 4: both accounts are active Customers, not the same account, and the amount meets the minimum (161) | line 78-103 | PASS | Fixed. Same-account (78), status `active` (88-93), both `Customer` (98), `amt < minAmount` gives "Minimum amount is N tk" (101). Code order differs from the sentence order but the step is one group. |
| R37 | Step 5: DB transaction; sender balance read with `FOR UPDATE`; parallel requests wait (162) | line 110-117 | PASS | `READ_COMMITTED`; `... WHERE account = ? FOR UPDATE`. |
| R38 | Step 6: daily and monthly limits inside the lock (163) | line 120-133 | PASS | `checkCustomerLimits(...)` after the lock. |
| R39 | Step 7: balance covers amount plus fee (164) | line 135 | PASS | `amt + p2pFee > currentBalance`. |
| R40 | Step 8: 3 ledger rows: sender debit, receiver credit, fee credit to SYSTEM (165) | line 142-176 | PASS | `debitTrnx`, `creditTrnx`, `creditTrnxToSystem`. |
| R41 | Step 9: commit; rollback of all 3 rows on failure (166) | line 106-178 | PASS | "All 3 writes are atomic — they all commit or all roll back". |
| R42 | The k6 test is in part 23; link `/case-study/automation/`; "Parts 18 and 20 to 24" (19, 168) | `lib/nav.ts` | PASS | overview 18, codebase-tour 19, bug-hunt 20, pr-review 21, test-and-retest 22, automation 23, lessons 24. |
| R43 | Web app calls the API at `NEXT_PUBLIC_API_URL` (232) | `src/lib/api.ts` | PASS | `baseURL: process.env.NEXT_PUBLIC_API_URL`. |
| R44 | `src/app/<role>/…/page.tsx` grouped by role; login, register, profile, password pages shared (236) | `src/app/` | PASS | `admin`, `agent`, `customer`, `merchant`; root `login`, `register`, `profile`, `change-password`, `forgot-password`, `reset-password`. |
| R45 | `api.ts`: one axios client; JWT expiry check before each request; adds `Authorization` and `X-AUTH-SECRET-KEY`; logs out on 401 (237) | `src/lib/api.ts` | PASS | `isTokenExpired`; `config.headers.Authorization`; `status === 401`. |
| R46 | `middleware.ts` sends a user without a `token` cookie to `/login` (238, 252, 264) | `src/middleware.ts` | PASS (note) | True for protected routes; `/login`, `/register`, `/`, `/forgot-password`, `/reset-password` are exempt. Optional wording. |
| R47 | `src/components/`: dashboard layout, role menu, pagination, account statement (239) | `src/components/` | PASS | `DashboardLayout`, `LeftMenu`, `Pagination`, `SelfStatement`. |
| R48 | `e2e/` has the Playwright tests; README has the business requirements (240-241) | `e2e/`; `dmoney-web-react/README.md` | PASS | BRD sections 8, 9, 14, 15. |
| R49 | The token is also saved in a cookie (243) | `src/app/login/page.tsx` 97 | PASS | `document.cookie = \`token=${token}; ...\``. |
| R50 | Seven workspace skills in `.claude/skills/` with the listed jobs (277-287) | each `SKILL.md` description | PASS | understand-task, find-bug, blast-radius, pr-review, test-charter, test-design, execute-test; jobs match the descriptions and README. |
| R51 | `qa-reviewer-agent` only reads; approved, flagged, or rejected (289) | `.claude/agents/qa-reviewer-agent.md` | PASS | `tools: Read, Grep, Glob, Skill`; "APPROVED / FLAGGED / REJECTED". |
| R52 | `test-executor-agent` only runs existing cases with `curl` and a browser tool; no design, no bugs (289) | `.claude/agents/test-executor-agent.md` | PASS | "agent-browser (UI) and curl (API) ... does not design tests and does not raise bugs". |
| R53 | The hook runs a `graphify query` with the arguments of the skill; with no arguments it adds the overview of the graph (291) | `.claude/hooks/graphify-prehook.sh` | PASS | Fixed. `graphify query "$args"` when `$args` is set; else `sed -n '1,45p' graphify-out/GRAPH_REPORT.md` ("overview (no skill arguments to query)"). Runs only for `(test-design\|find-bug)`. (A third case, no graph file, injects a notice; not claimed.) |
| R54 | The README says the database server is for read-only checks during analysis (293) | `README.md` | PASS (note) | README: "`dmoneydb` ... **Read-only** SQL against the local `dmoneydb`, used to check facts during analysis". Note: the README calls it a user-level server; the `dmoney-db` entry in `.mcp.json` passes `list,read,utility,create,update,delete,execute`. The page attributes the sentence to the README, which is accurate. Optional wording. |
| R55 | `analyze-requirement` skill (in each sub-project) turns an issue into acceptance criteria (351) | `dmoney-*/.claude/skills/analyze-requirement/SKILL.md` | PASS | Fixed. Description: "Turn a requirement into testable acceptance criteria." Exists in both sub-projects, not in the workspace `.claude/skills/`. |
| R56 | `qa-findings/` has eight reports: login and auth bugs, deposit bugs, deposit test cases, 11 security issues, deposit charters, a deposit test design, cash-in bugs, 7 Send Money bugs (355) | `qa-findings/01` to `08` | PASS | Fixed. 8 items = 01 to 08; 06 is `06-deposit-cash-in-test-design.md`. S-1 to S-11; SM-H01 to SM-L03 (7). |
| R57 | `.artifacts/` has requirements, reviews, impact reports, charters, test cases, test results (356) | `.artifacts/` | PASS | `SM-*_requirement.md`, `SM-*_review.md`, `PR-8_blast-radius.md`, `PR-8_test-charter.md`, `PR-8.test.md`, `PR-8.test-report.md`. |
| R58 | Chain diagram (341-349) | `README.md` "QA workflow" | PASS | Same chain and order. |
| R59 | PR #8: 17 passed, 5 failed, 2 not executed; PR #9 fixed the 5 failures (358; Layman 373; Bangla 388) | `.artifacts/PR-8.test-report.md`; `README.md` | PASS | "Total 24 / Pass 17 / Failed 5 / Not executed 2"; README "the defects its test run found were fixed in PR #9". |
| R60 | k6: 0 to 3 to 10 users over one minute; reuses customers; rotates senders; dev OTP bypass, local only (400) | `performance/sendmoney-concurrency.k6.js` | PASS | `STAGES` 30s to 3, 20s to 10, 10s to 0; "Local/dev only: it uses the dev OTP bypass". |
| R61 | Playwright: one setup project for each role; saved session (401) | `playwright.config.ts` | PASS | `admin-setup`, `agent-setup`, `admin`, `agent` with `dependencies` and `storageState` (two roles). |
| R62 | Agent setup gets OTP from Gmail; only a message that arrived after the login started; helper skips login with more than 10 minutes left (403) | `e2e/agent.setup.ts`, `e2e/utils/gmail.ts`, `session.ts` | PASS | `since = Date.now() - 5_000` (small clock-skew allowance); `MIN_REMAINING_MS = 10 * 60_000`. |
| R63 | Class notes: 8 topics (437-444) | `class_notes/*.md` headings | PASS | Headings match each topic (e.g. note 4 "5-Stage Test Engineering Pipeline", note 7 "Concurrency Race Condition"). |
| R64 | Class note 2 "Where you see it": `GRAPHIFY_SETUP.md`, the `CLAUDE.md` file of each sub-project (438; Layman 452; Bangla 466) | git tree; note 2 | PASS | Fixed. Both files exist; note 2 has "Installation & Initialization Pipeline" and "Workspace vs. Sub-Project Context (`CLAUDE.md`)". |
| R65 | Class note 4 "Where you see it": "the five matching skills: four in `.claude/skills/`, and `analyze-requirement` in each sub-project" (440; Layman 454; Bangla 468) | note 4 section 5; `.claude/skills/`; both sub-project `.claude/skills/` | PASS | Fixed in the third pass. Workspace `.claude/skills/` has `blast-radius`, `find-bug`, `test-charter`, `test-design` (4 of the 5 stage skills). `analyze-requirement` is in both `dmoney-transaction-api/.claude/skills/` and `dmoney-web-react/.claude/skills/`. Matches line 351 ("in each sub-project"). Bangla 468 says the same ("চারটি `.claude/skills/`-এ, আর `analyze-requirement` প্রতিটি sub-project-এ"). |
| R66 | Rows 1, 3, 5, 6, 7, 8 "Where you see it" (437, 439, 441-444) | clone | PASS | `.mcp.json`, `.claude/settings.json`; `.claude/skills/`; hook and `find-bug`; two subagents; PR #8 and `sendMoney.controller.js`; `dmoney-web-react/e2e/`. |
| R67 | Take-aways: "Use a hook for a step that must run before a skill starts" (485; Layman 494; Bangla 503) | D3 | PASS | Softened. Advice. True for a skill that Claude calls; a typed `/skill` bypasses `PreToolUse` (D3). Optional: add "when Claude calls the skill". |
| R68 | Other take-aways (482-486) | none | PASS | Tutorial advice. |
| R69 | Key words (511-520) | D1 to D4; code | PASS | Definitions match. |

## Other checks

- Cites 1 to 5 are all in `page.sources`; all are official Anthropic or Playwright pages; each supports its claim.
- Privacy: no email, password, phone number, or token on the page. PASS.
- The 7 FAILs of the first pass (R2, R13, R22, R31, R57 list, R68, R69 old numbering) are fixed. The "Fixed" rows above were re-read against the clone at 51db34a.
- Previous notes also fixed: hook no-argument case (R53), Send Money minimum amount (R36), "always run" (R67).

## FAILs to fix

None. R65 (class note 4 skill location) was fixed and re-checked in the third pass.

Open FAILs: 0
