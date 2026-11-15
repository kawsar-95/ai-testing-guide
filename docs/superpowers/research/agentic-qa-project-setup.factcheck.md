# Fact check: Project, Jira, GitHub & MCP Setup

Page: `content/agentic-qa/project-setup.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-project-setup.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. After each full round, a script recounted the FAIL rows and looked each quoted phrase of a PASS up in the sources; its result is the line under the round.

## Fact check: agentic-qa / project-setup (round 1, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Lede | Three systems a tester uses: issue tracker, test database, code host; Claude reads freely and asks before it writes | none | ADVICE | The page's own design goal. It states no tool fact. |
| 2 | Project | The practice project is dMoney, a mobile financial service: a REST API and a web frontend | none | PASS-REPO | repo/README.md: "dMoney**, a mobile financial service (MFS) platform ... made up of a REST API and a web frontend" |
| 3 | Project | API is in `dmoney-transaction-api/`: Node.js, Express, Sequelize, MySQL | none | PASS-REPO | repo/README.md: "dmoney-transaction-api/   # Backend: Node.js + Express + Sequelize + MySQL" |
| 4 | Project | Web app is in `dmoney-web-react/`: Next.js 15, TypeScript, MUI, Tailwind 4 | none | PASS-REPO | repo/README.md: "dmoney-web-react/         # Frontend: Next.js 15 (App Router) + TypeScript + MUI + Tailwind 4"; repo/dmoney-web-react/package.json: "next": "15.5.9", "tailwindcss": "^4" |
| 5 | Project | `sql_scripts/` is a MySQL dump of `dmoneydb` with schema and seed data | none | PASS-REPO | repo/README.md: "sql_scripts/              # MySQL dump of dmoneydb (schema + seed data)" |
| 6 | Project | Claude setup lives in `.claude/`, `.mcp.json`, one `CLAUDE.md` per project: skills, subagents, a hook, project MCP servers | none | PASS-REPO | repo/README.md: ".claude/skills/ ... .claude/agents/ ... .mcp.json  # Project MCP servers"; "Each project also has a `CLAUDE.md`"; repo/.claude/settings.json has a `PreToolUse` hook |
| 7 | Project | The web app calls the API; the API reads and writes MySQL `dmoneydb` | none | PASS-REPO | repo/README.md architecture diagram: "dmoney-web-react ... HTTP + JWT ... dmoney-transaction-api ... MySQL (dmoneydb)" |
| 8 | Project | Claude Code reads code, drives the web app, queries the database, reads tickets | none | PASS-REPO | repo/README.md: "`playwright`, `jira` ... Browser automation, and Jira tickets"; "`dmoneydb` ... SQL against the local `dmoneydb`" |
| 9 | Project | Jira goes through the `jira` server in `.mcp.json` | none | PASS-REPO | repo/.mcp.json: `"jira": { "type": "http", "url": "https://mcp.atlassian.com/v1/mcp" }` |
| 10 | Project | The test database goes through the `dmoney-db` server in `.mcp.json` | none | PASS-REPO | repo/.mcp.json: `"dmoney-db": {` |
| 11 | Project | GitHub goes through `gh`; `understand-task` and `pr-review` skills use it | none | PASS-REPO | repo/README.md: "GitHub CLI ... (`gh`) \| Skills that read or create issues and PRs (`understand-task`, `pr-review`)" |
| 12 | Project | README says dMoney has bugs and security flaws on purpose; do not deploy to production or expose to the internet | none | PASS-REPO | repo/README.md: "known bugs and security flaws, and they are there on purpose ... Do not deploy it to production or expose it to the internet." |
| 13 | Project | Facts come from commit 51db34a files (README, .mcp.json, settings, CLAUDE.md, .env.example, package.json) | none | N/A | Sentence about the page's own sourcing. |
| 14 | Install | Prerequisites: Node.js 20.x or newer, npm, MySQL 8.x or compatible MariaDB | none | PASS-REPO | repo/README.md: "20.x or newer (CI uses 20.x)"; "8.x (or a compatible MariaDB)" |
| 15 | Install | Stripe test account only for bank cash-in; SMTP optional because the API also prints OTPs to its console | none | PASS-REPO | repo/README.md: "You only need a Stripe test account if you want to use the bank cash-in feature. SMTP or Gmail credentials are optional, because OTPs and reset tokens are also printed to the API console." |
| 16 | Install | `CREATE DATABASE dmoneydb;` | none | PASS-REPO | repo/README.md: "CREATE DATABASE dmoneydb;" |
| 17 | Install | Dump file is `sql_scripts/local-dmoneydb-202604201925.sql` | none | PASS-REPO | repo/sql_scripts/local-dmoneydb-202604201925.sql exists; README links it |
| 18 | Install | Dump exported on Windows, table names lowercase; on Linux follow README rename step first | none | PASS-REPO | repo/README.md: "The dump was exported on Windows, so its table names are lowercase ... Fix the names before you import the dump" |
| 19 | Install | Restoring is optional; with an empty `dmoneydb` the API creates tables and seeds test accounts on first start | none | PASS-REPO | repo/README.md: "Restoring the dump is optional. If `dmoneydb` is empty, the API creates the tables and seeds the test accounts on first start." |
| 20 | Install | Copy `.env.example` to `.env` and `.env.dev`; `db.js` reads `.env.dev`, rest reads `.env`; same DB values in both | none | PASS-REPO | repo/README.md: "cp .env.example .env.dev   # db.js reads .env.dev; everything else reads .env"; "Keep the `DB_*` values the same in both." |
| 21 | Install | Code block: `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | none | PASS-REPO | repo/dmoney-transaction-api/.env.example: "DB_HOST=localhost / DB_NAME=dmoneydb / DB_USER=root / DB_PASSWORD=<redacted>" |
| 22 | Install | `npm install`, then `npm run dev` (nodemon) | none | PASS-REPO | repo/README.md: "npm run dev                # nodemon, auto-restarts on changes" |
| 23 | Install | API listens on `PORT`, default 5000; check with `GET http://localhost:5000/` | none | PASS-REPO | repo/README.md: "The API listens on `PORT` from `.env` (default `5000`). To check that it is running, open `GET http://localhost:5000/`." |
| 24 | Install | Web app: copy `.env.example` to `.env`; set `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | none | PASS-REPO | repo/dmoney-web-react/.env.example has the three keys; README step 3 |
| 25 | Install | `npm install` and `npm run dev`; app opens at `http://localhost:3000` | none | PASS-REPO | repo/README.md: "npm run dev                # http://localhost:3000" |
| 26 | Install | Test accounts are in the README "Test accounts" section and in `dmoney-transaction-api/endpoints.md` | none | PASS-REPO | repo/README.md: "## Test accounts"; repo/dmoney-transaction-api/CLAUDE.md: "`endpoints.md` ... seeded test credentials" |
| 27 | Install | For Agent, Customer, Merchant login the OTP shows in the API console | none | PASS-REPO | repo/README.md: "When you log in as Agent, Customer or Merchant, the OTP is printed in the API console." |
| 28 | Install | Callout: keep `.env` out of git; never paste values; placeholders | none | ADVICE | Labelled "The tutorial's advice". |
| 29 | MCP scopes | MCP is an open-source standard for connecting AI applications to external systems | 1 | PASS | S1: "MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems." |
| 30 | MCP scopes | Claude Code adds servers with `claude mcp add` | 2 | PASS | S2: "claude mcp add --transport http <name> <url>" |
| 31 | MCP scopes | Code block: `claude mcp add --transport http <name> <url>`; `claude mcp add [options] <name> -- <command> [args...]`; everything after `--` goes to the server | 2 | PASS | S2: "Everything after `--` is passed to the server untouched." |
| 32 | MCP scopes | Local (default), `--scope local`, stored in `~/.claude.json`, you in this project only | 2 | PASS | S2: "Local scope is the default. A local-scoped server loads only in the project where you added it ... stores it in `~/.claude.json`" |
| 33 | MCP scopes | Project, `--scope project`, `.mcp.json` in project root, everyone through version control | 2 | PASS | S2: "Project \| Current project only \| Yes, via version control \| `.mcp.json` in project root" |
| 34 | MCP scopes | User, `--scope user`, `~/.claude.json`, you in all projects | 2 | PASS | S2: "User \| All your projects \| No \| `~/.claude.json`" |
| 35 | MCP scopes | `--scope project` creates or updates `.mcp.json` | 2 | PASS | S2: "Claude Code automatically creates or updates this file" |
| 36 | MCP scopes | Interactive session asks approval for each `.mcp.json` server; `claude mcp reset-project-choices` resets | 2 | PASS | S2: "prompts for approval in interactive sessions before using project-scoped servers ... run `claude mcp reset-project-choices`." |
| 37 | MCP scopes | In a `claude -p` run it loads them without asking | 2 | PASS | S2: "In `claude -p` runs ... Claude Code can't show that prompt: it loads project-scoped servers without asking." |
| 38 | MCP scopes | Verify that you trust each server before you connect | 2 | PASS | S2: "Verify you trust each server before connecting it." |
| 39 | Secrets | `.mcp.json` expands `${VAR}` and `${VAR:-default}` in `command`, `args`, `env`, `url`, `headers` | 2 | PASS | S2: "You can reference an environment variable in a server's `command`, `args`, `env`, `url`, or `headers` value" |
| 40 | Secrets | Unset variable with no default does not stop the config; `claude mcp list` shows a missing-variable warning | 2 | PASS | S2: "the config still loads: Claude Code reports a missing-variable warning for that server in `claude mcp list` output" |
| 41 | Secrets | Empty string counts as set, so `${VAR:-default}` gives the empty string | 2 | PASS | S2: "it counts as set, so a `${VAR:-default}` reference expands to the empty string rather than to `default`" |
| 42 | Secrets | dMoney `.mcp.json` uses `${DMONEY_DB_PASS:-}`, default empty, so unset gives an empty password | none | PASS-REPO | repo/.mcp.json: "mysql://root:${DMONEY_DB_PASS:-}@localhost:3306/dmoneydb" |
| 43 | Check | `claude mcp list` shows `✔ Connected`, `! Needs authentication`, `✘ Failed to connect` | 2 | PASS | S2: "such as `✔ Connected`, `! Needs authentication`, or `✘ Failed to connect`" |
| 44 | Check | Unapproved `.mcp.json` server shows `⏸ Pending approval` | 2 | PASS | S2: "`⏸ Pending approval (run `claude` to approve)`: a project-scoped server from `.mcp.json` that you haven't approved yet" |
| 45 | Check | `claude mcp get <name>` checks one server; code block `claude mcp list`, `claude mcp get jira` | 2 | PASS | S2: "To check that Claude Code connected, run `claude mcp get <name>`" |
| 46 | Check | `/mcp` manages server connections and OAuth sign-in; takes `reconnect`, `enable`, `disable` | 3 | PASS | S3: "`/mcp [reconnect (<server>\|all)\|enable\|disable ...]` \| Manage MCP server connections and OAuth authentication." |
| 47 | Check | Claude Code supports OAuth 2.0 for remote servers | 2 | PASS | S2: "Claude Code supports OAuth 2.0 for secure connections." |
| 48 | Check | `claude -p` cannot do OAuth; sign in first with `/mcp` or `claude mcp login <name>` | 2 | PASS | S2: "Claude Code can't run the OAuth flow there ... run `/mcp` in the session, or `claude mcp login <name>` in your shell." |
| 49 | Check | Tool search is on by default; defers definitions; only tool names and server instructions load at start | 2 | PASS | S2: "Tool search keeps MCP context usage low by deferring tool definitions until Claude needs them. Only tool names and server instructions load at session start"; "tool search ... which is on by default" |
| 50 | Check | Warns above 10,000 tokens; limits to 25,000 by default; `MAX_MCP_OUTPUT_TOKENS` changes the limit | 2 | PASS | S2: "displays a warning when MCP tool output exceeds 10,000 tokens and limits output to 25,000 tokens by default ... set the `MAX_MCP_OUTPUT_TOKENS`" |
| 51 | Check | `/context` shows current context usage as a colored grid | 3 | PASS | S3: "Visualize current context usage as a colored grid." |
| 52 | Check | Callout: ask for small results, add limits | none | ADVICE | Labelled "The tutorial's advice". |
| 53 | Jira | Official Atlassian MCP Server is a cloud-based bridge between your Atlassian Cloud site and external tools; OAuth 2.1 or API tokens | 4 | PASS | S4: "cloud-based bridge between your Atlassian Cloud site and compatible external tools ... Authentication uses **OAuth 2.1** or **API tokens**" |
| 54 | Jira | New setups should use the v2 URL; README gives the Claude Code command then `/mcp` to sign in | 4 | PASS | S4: "The recommended endpoint for all clients is: https://mcp.atlassian.com/v2/mcp"; "`claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp`, then run `/mcp` in a session to authenticate" |
| 55 | Jira | Code block `claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp` | 4 | PASS | Same S4 line. |
| 56 | Jira | Sign in when Claude Code starts the Atlassian authentication flow | 5 | PASS | S5: "sign in when your agent or MCP client starts the Atlassian authentication flow." |
| 57 | Jira | dMoney `.mcp.json` names the server `jira` and uses `/v1/mcp` | none | PASS-REPO | repo/.mcp.json: `"jira": {... "url": "https://mcp.atlassian.com/v1/mcp"` |
| 58 | Jira | v1 endpoint still supported; v1 connections use the v2 tools | 4 | PASS | S4: "The v1 endpoints ... remain supported, and existing v1 connections automatically start to expose and use v2 tools." |
| 59 | Jira | SSE endpoint `/v1/sse` not supported after 30 June 2026 | 4 | PASS | S4: "After 30 June 2026, the legacy Server-Sent Events endpoint (`https://mcp.atlassian.com/v1/sse`) will no longer be supported." |
| 60 | Jira | Tutorial suggests v2; keep the name `jira` if skills use it | none | ADVICE | Labelled as the tutorial's suggestion. |
| 61 | Jira | The server exposes the most-used tools and lets the client discover the rest | 4 | PASS | S4: "exposes a small set of the most-used tools and lets the client discover the rest on demand" |
| 62 | Jira | `searchJiraIssuesUsingJql`: searches Jira work items with JQL | 6 | PASS | S6: "searchJiraIssuesUsingJql (Primary) ... Search Jira work items using JQL." |
| 63 | Jira | `getJiraIssue`: gets a work item by ID or key | 6 | PASS | S6: "Get a Jira work item by ID or key." |
| 64 | Jira | `listJiraProjects`: lists Jira spaces you can see | 6 | PASS | S6: "listJiraProjects ... Get Jira spaces visible to the current user." |
| 65 | Jira | `createJiraIssue`: creates a work item | 6 | PASS | S6: "Create a new Jira work item." |
| 66 | Jira | `addOrEditJiraIssueComment`: adds or edits a comment | 6 | PASS | S6: "Add a comment, or edit an existing one." |
| 67 | Jira | `transitionJiraIssue`: moves a work item to a new status | 6 | PASS | S6: "Transition an work item to a new status" |
| 68 | Jira | Server reaches only data you can already view in Atlassian Cloud | 4 | PASS | S4: "Access is granted only to data that the user already has permission to view in Atlassian Cloud." |
| 69 | Jira | MCP clients act with your existing permissions | 5 | PASS | S5: "MCP clients can perform actions on all connected products ... with your existing permissions." |
| 70 | Jira | Permission groups `read_jira`, `write_jira`, `search_jira`; `delete_jira`, `manage_jira` off by default | 4 | PASS | S4: "`read_jira` · `write_jira` · `search_jira`"; "`delete_jira` and `manage_jira` are **disabled by default**" |
| 71 | Jira | Each tool call goes into the organization audit log | 4 | PASS | S4: "Every time a tool is used through the Atlassian MCP Server, an event is recorded in your organization's audit log." |
| 72 | Jira | Atlassian advises human confirmation for high-impact or destructive action | 4 | PASS | S4: "For any high-impact or destructive action, require human confirmation" |
| 73 | Jira | Callout: practise on a test project, approve each write | none | ADVICE | Tutorial advice. |
| 74 | MySQL | dMoney `.mcp.json` runs `@berthojoris/mcp-mysql-server@1.43.2` with `list,read,utility,create,update,delete,execute` | none | PASS-REPO | repo/.mcp.json: "@berthojoris/mcp-mysql-server@1.43.2" ... "list,read,utility,create,update,delete,execute" |
| 75 | MySQL | The README of dMoney calls this server read-only, but the list includes write actions | none | FAIL | repo/README.md calls a different server read-only: "`dmoneydb` \| User-level MCP server \| **Read-only** SQL against the local `dmoneydb`". It lists the project servers as "(playwright, jira)", not `dmoney-db`. Fix: say the README describes a user-level `dmoneydb` server as read-only, while `.mcp.json` defines `dmoney-db` with write permissions. |
| 76 | MySQL | Server takes the connection string, then a permission list, then an optional category list | 7 | PASS | S7: "The 4th argument (permissions) controls broad access levels, while the 5th argument (categories) fine-tunes" |
| 77 | MySQL | `list`: listing databases, tables, schemas | 7 | PASS | S7: "`list` \| List databases, tables, schemas" |
| 78 | MySQL | `read`: SELECT queries | 7 | PASS | S7: "`read` \| SELECT queries, read data" |
| 79 | MySQL | `utility`: connection tests and diagnostics | 7 | PASS | S7: "`utility` \| Connection testing, diagnostics" |
| 80 | MySQL | `create`, `update`, `delete`: INSERT, UPDATE, DELETE of records | 7 | PASS | S7: "INSERT new records", "UPDATE existing records", "DELETE records" |
| 81 | MySQL | `execute`: custom INSERT and UPDATE SQL | 7 | PASS | S7: "Execute custom INSERT/UPDATE SQL" |
| 82 | MySQL | `ddl`: CREATE, ALTER, DROP of tables | 7 | PASS | S7: "CREATE/ALTER/DROP tables" |
| 83 | MySQL | Since v1.44.0 a server with no permission list enables only `list,read,utility` | 7 | PASS | S7: "Changes in v1.44.0 ... with no permissions and no categories, the server now enables only `list,read,utility`" |
| 84 | MySQL | dMoney pins 1.43.2 and passes its own list, so the default does not help | none | PASS-REPO | repo/.mcp.json: "@berthojoris/mcp-mysql-server@1.43.2" and explicit list. |
| 85 | MySQL | JSON example: `type stdio`, `command npx`, `args -y`, pinned package, connection string with `${DMONEY_DB_USER}` and `${DMONEY_DB_PASS}`, `list,read,utility` | 2, 7 | PASS | Shape from repo/.mcp.json; `${VAR}` in `args` is in S2; permission string is in S7. |
| 86 | MySQL | `WITH` (CTE) queries need `execute`, so a read-only list cannot run them | 7 | FAIL | S7 gives this only under "Changes in v1.44.0": "`WITH` (CTE) queries are supported and, like derived tables, need `execute` in read queries." The page pins 1.43.2 in the same example. Fix: say "From v1.44.0, `WITH` queries need `execute`", or drop the claim for the pinned version. |
| 87 | MySQL | `MCP_REQUIRE_READONLY_DB_USER=true` makes the server fail at startup if the MySQL user can write | 7 | PASS | S7: "`true` makes startup fail if the MySQL user can write." |
| 88 | MySQL | `list_all_tools` returns the enabled tools and the active permission profile | 7 | PASS | S7: "call `list_all_tools` first. It returns the live runtime catalog, enabled/disabled status, active permission/category profile" |
| 89 | MySQL | Callout: SELECT-only user, never production | none | ADVICE | Labelled "The tutorial's advice". |
| 90 | gh | GitHub CLI (`gh`) is GitHub on the command line, for macOS, Windows, Linux | 8 | PASS | S8: "GitHub CLI, or the gh CLI, is GitHub on the command line"; "support for macOS, Windows, and Linux" |
| 91 | gh | README lists Homebrew, Debian/Ubuntu/RPM, WinGet; GitHub-hosted runners have it pre-installed | 8 | PASS | S8: "Homebrew"; "Debian, Raspberry Pi, Ubuntu"; "RPM"; "WinGet"; "GitHub-hosted runners have the GitHub CLI pre-installed" |
| 92 | gh | `gh auth login` uses a browser flow by default and stores the token in the system credential store | 9 | PASS | S9: "The default authentication mode is a web-based browser flow. ... token will be stored securely in the system credential store." |
| 93 | gh | `--with-token` reads a classic token from stdin; for fine-grained the manual favours `GH_TOKEN` | 9 | PASS | S9: "use --with-token to pass in a personal access token (classic) on standard input"; "Favour setting GH_TOKEN" |
| 94 | gh | `gh issue view 7 --comments`: title, body, other data, with comments | 10 | PASS | S10: "Display the title, body, and other information about an issue."; "When --comments is used, terminal output includes the issue details and comments" |
| 95 | gh | `gh issue list --state all --label bug`: filtered by state and label; default is open issues only | 11 | PASS | S11: "By default, this only lists open issues."; "`--state <string> (default "open")`"; `--label` |
| 96 | gh | `gh pr view 8`: title, body, other data of a pull request | 12 | PASS | S12: "Display the title, body, and other information about a pull request." |
| 97 | gh | `gh pr diff 8 --name-only`: changes of a pull request, only file names | 13 | PASS | S13: "View changes in a pull request."; "--name-only ... Display only names of changed files" |
| 98 | gh | `gh issue create --title ...` creates an issue | 14 | PASS | S14: "Create an issue on GitHub."; "--title <string>" |
| 99 | gh | `gh pr create --draft` creates a pull request as a draft | 15 | PASS | S15: "--draft ... Mark pull request as a draft" |
| 100 | gh | Rules are evaluated in order deny, then ask, then allow | 16 | PASS | S16: "Rules are evaluated in order: deny, then ask, then allow." |
| 101 | gh | Put the `*` after the subcommand; `Bash(git *)` allows every git command | 16 | PASS | S16: "Put the `*` after the subcommand ... `Bash(git *)` allows every git command." |
| 102 | gh | A trailing ` *` also matches the bare command | 16 | PASS | S16: "A `*` at the end, with a space before it, also matches the bare command." |
| 103 | gh | JSON example: `permissions.allow` / `permissions.ask` with `Bash(gh issue view *)` etc. | 16 | PASS | S16 uses `Bash(git commit *)` rules in permission lists; the `gh` rules follow the same shape. The `allow` and `ask` keys are in S16 line 56. |
| 104 | gh | An ask rule applies when any subcommand matches, also inside a chained command | 16 | PASS | S16: "Deny and ask rules apply when any subcommand matches them ... `cd /tmp && git clean -f`" |
| 105 | Environment | dMoney has a `CLAUDE.md` in `dmoney-transaction-api/` and in `dmoney-web-react/`, with architecture notes and conventions | none | PASS-REPO | repo/dmoney-transaction-api/CLAUDE.md and repo/dmoney-web-react/CLAUDE.md exist; README: "gives AI assistants architecture notes and conventions" |
| 106 | Environment | A subdirectory `CLAUDE.md` loads when Claude reads, writes, or edits a file in that subdirectory | 17 | PASS | S17: "loads each one once Claude reads, writes, or edits another file in that subdirectory" |
| 107 | Environment | `/memory` opens the `CLAUDE.md` files for editing | 3 | PASS | S3: "`/memory` \| Edit `CLAUDE.md` files" |
| 108 | Environment | `.claude/settings.json`: everyone in the repository, commit it | 18 | PASS | S18: "Everyone working in the folder that contains it. In a git repository, commit it" |
| 109 | Environment | `.claude/settings.local.json`: you, this project; kept out of git when Claude Code creates it | 18 | PASS | S18: "You, in this one project only. Claude Code keeps it out of git when it creates the file" |
| 110 | Environment | `~/.claude/settings.json`: you, every project on this machine | 18 | PASS | S18: "You, in every project on this machine" |
| 111 | Environment | dMoney root `.claude/settings.json` holds a `PreToolUse` hook for graphify and no permission rules | none | PASS-REPO | repo/.claude/settings.json: `"PreToolUse"` ... `graphify-prehook.sh`; no `permissions` key |
| 112 | Environment | `mcp__<server>` matches every tool of a server; `mcp__<server>__<tool>` matches one tool | 16 | PASS | S16: "`mcp__puppeteer` matches any tool provided by the `puppeteer` server"; "write its full name, `mcp__<server>__<tool>`" |
| 113 | Environment | `/permissions` shows and edits the rules | 3 | PASS | S3: "Manage allow, ask, and deny rules ... view rules by scope, add or remove rules" |
| 114 | Environment | A local MCP server lives in `~/.claude.json`; local settings live in `.claude/settings.local.json` | 2 | PASS | S2: "MCP local-scoped servers are stored in `~/.claude.json` ... general local settings use `.claude/settings.local.json`" |
| 115 | Environment | Check table: `claude mcp list` shows `✔ Connected` for `jira`, `dmoney-db`, `playwright`, or `! Needs authentication` before sign-in | 2 | PASS | Status strings: S2 line 251. Server names: repo/.mcp.json has `jira`, `playwright`, `dmoney-db`. |
| 116 | Environment | Check table: `/mcp` shows each server, state, sign-in | 3 | PASS | S3: "Manage MCP server connections and OAuth authentication." |
| 117 | Environment | Check table: `/context` shows the context grid | 3 | PASS | S3: "colored grid" |
| 118 | Environment | Check table: `gh issue list` shows open issues of the repository | 11 | PASS | S11: "By default, this only lists open issues." |
| 119 | Practice | Exercise (steps 1–8), prompts and expectations | 2, 3, 5, 6, 7, 11 | ADVICE | Labelled "The tutorial's exercise". The commands and flags in it (`claude mcp list`, `/mcp`, `/context`, `list_all_tools`, `gh issue list --state all`, `gh issue create`, `.claude/settings.local.json`, `searchJiraIssuesUsingJql`) are all in rows 45–118. |
| 120 | Mistakes | `${VAR}` in `args`, `env`, `url`, `headers`; set value in shell | 2 | PASS | S2 line 844. |
| 121 | Mistakes | Leave out the default so `claude mcp list` warns; empty value counts as set | 2 | PASS | S2: "reports a missing-variable warning ... in `claude mcp list` output"; "it counts as set" |
| 122 | Mistakes | Use `list,read,utility` for a read-only database server | 7 | PASS | S7: "Read-only by default ... enables only `list,read,utility`" |
| 123 | Mistakes | `/v1/sse` not supported after 30 June 2026; use `/v2/mcp` | 4 | PASS | S4: "After 30 June 2026 ... no longer be supported ... preferably `https://mcp.atlassian.com/v2/mcp`" |
| 124 | Mistakes | Jira tools missing in `claude -p`: sign in from an interactive session with `/mcp` or `claude mcp login <name>` | 2 | PASS | S2 line 982. |
| 125 | Mistakes | `Bash(gh *)` in `allow` allows every `gh` command; put `*` after the subcommand | 16 | PASS | S16: "Claude Code matches everything before the first `*` as written ... `Bash(git *)` allows every git command." |
| 126 | Mistakes | Keep server names `jira`, `dmoney-db` so `mcp__jira` matches | 16 | ADVICE | The tutorial's advice. The `mcp__<server>` rule is in row 112. |
| 127 | Key words | MCP: open-source standard for connecting AI applications to external systems | none | PASS | Restates row 29. |
| 128 | Key words | Scope: where Claude Code stores a server and who gets it: local (default), project, user | none | PASS | Restates rows 32–34. |
| 129 | Key words | `.mcp.json`: project-root file for project-scoped servers; Claude Code asks you to approve them | none | PASS | Restates rows 33 and 36. |
| 130 | Key words | Variable expansion: `${VAR}` and `${VAR:-default}`, secrets stay in your shell and out of git | none | PASS | Restates row 39. |
| 131 | Key words | `/mcp`: manages MCP connections and OAuth sign-in | none | PASS | Restates row 46. |
| 132 | Key words | Tool search: loads only tool names and server instructions at start, full definitions when needed | none | PASS | Restates row 49. |
| 133 | Key words | Atlassian MCP Server: cloud MCP server for Jira and other products; acts with your own permissions | none | PASS | Restates rows 53, 69. S4 names Jira, Confluence, Bitbucket and others. |
| 134 | Key words | JQL: the query language that `searchJiraIssuesUsingJql` uses to search Jira work items | none | FAIL | No source says what JQL is. S6 says only "Search Jira work items using JQL." The Layman panel's "Jira's query language" has the same gap. Fix: "The syntax that `searchJiraIssuesUsingJql` uses to search Jira work items", or cite a source that defines JQL. |
| 135 | Key words | Permission list: MySQL MCP argument that sets what Claude may do; `list,read,utility` is read-only | none | PASS | Restates rows 76, 83. |
| 136 | Key words | `gh`: GitHub CLI with read commands such as `gh issue view` and write commands such as `gh pr create` | none | PASS | Restates rows 90, 94, 99. |
| 137 | Key words | Permission rule: allow, ask, or deny entry in settings; checks deny, then ask, then allow | none | PASS | Restates rows 100, 108–110. |
| 138 | Key words | `CLAUDE.md`: notes file of a project; in a subdirectory it loads when Claude works on a file there | none | PASS | Restates rows 105–106. |

Open FAILs after round 1: 3

Script check of round 1: 138 rows, 3 FAIL rows, 1 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / project-setup (round 2, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Lede | An agent can only test what it can reach. Each connection gets the least access that the work needs, so Claude can read freely and asks before it writes. | none | ADVICE | Tutorial design statement. It states no tool fact. |
| 2 | The practice project | The public repo is kawsar-95/genAI-project. dMoney is a mobile financial service: a REST API and a web frontend. | none | PASS-REPO | repo/README.md: "dMoney**, a mobile financial service (MFS) platform ... made up of a REST API and a web frontend". The repo URL is a link, not a repo file fact. |
| 3 | The practice project | API in `dmoney-transaction-api/`: Node.js, Express, Sequelize, MySQL | none | PASS-REPO | repo/README.md: "dmoney-transaction-api/   # Backend: Node.js + Express + Sequelize + MySQL". |
| 4 | The practice project | Web app in `dmoney-web-react/`: Next.js 15, TypeScript, MUI, Tailwind 4 | none | PASS-REPO | repo/README.md: "dmoney-web-react/         # Frontend: Next.js 15 (App Router) + TypeScript + MUI + Tailwind 4". repo/dmoney-web-react/package.json: "next": "15.5.9", "tailwindcss": "^4". |
| 5 | The practice project | `sql_scripts/` holds a MySQL dump of `dmoneydb` with schema and seed data | none | PASS-REPO | repo/README.md: "sql_scripts/              # MySQL dump of dmoneydb (schema + seed data)". |
| 6 | The practice project | Claude setup: `.claude/`, `.mcp.json`, one `CLAUDE.md` per project. Skills, subagents, a hook, and project MCP servers. | none | PASS-REPO | repo/README.md: "Each project also has a `CLAUDE.md`". repo/.claude/settings.json has a `PreToolUse` hook. repo/.mcp.json has the servers. The README lists skills and subagents. |
| 7 | The practice project | The web app calls the API. The API reads and writes the MySQL database `dmoneydb`. | none | PASS-REPO | repo/README.md Architecture diagram: "dmoney-web-react ... HTTP + JWT ... dmoney-transaction-api ... MySQL (dmoneydb)". |
| 8 | The practice project | Claude Code works on all three: it reads code, drives the web app, queries the database, and reads tickets. | none | PASS-REPO | repo/README.md: "`playwright`, `jira` ... Browser automation, and Jira tickets" and "`dmoneydb` ... Read-only SQL against the local `dmoneydb`". |
| 9 | The practice project | Jira connects through the `jira` server in `.mcp.json`. | none | PASS-REPO | repo/.mcp.json: `"jira": { "type": "http", "url": "https://mcp.atlassian.com/v1/mcp" }`. |
| 10 | The practice project | The test database connects through the `dmoney-db` server in `.mcp.json`. | none | PASS-REPO | repo/.mcp.json: `"dmoney-db": {`. |
| 11 | The practice project | GitHub uses the `gh` CLI. The `understand-task` and `pr-review` skills use it. | none | PASS-REPO | repo/README.md: "GitHub CLI (`gh`) \| Skills that read or create issues and PRs (`understand-task`, `pr-review`)". |
| 12 | The practice project | The README says dMoney has bugs and security flaws on purpose. Do not deploy it to production or expose it to the internet. | none | PASS-REPO | repo/README.md: "known bugs and security flaws, and they are there on purpose ... **Do not deploy it to production or expose it to the internet.**" |
| 13 | The practice project | Note callout: facts come from the files at commit 51db34a. | none | N/A | Sentence about the page itself. |
| 14 | Install and run | Prerequisites: Node.js 20.x or newer, npm, MySQL 8.x or compatible MariaDB | none | PASS-REPO | repo/README.md: "20.x or newer (CI uses 20.x)", "8.x (or a compatible MariaDB)". |
| 15 | Install and run | A Stripe test account is needed only for bank cash-in. SMTP is optional because the API also prints OTPs to its console. | none | PASS-REPO | repo/README.md: "You only need a Stripe test account if you want to use the bank cash-in feature. SMTP or Gmail credentials are optional, because OTPs and reset tokens are also printed to the API console." |
| 16 | Install and run | `CREATE DATABASE dmoneydb;` | none | PASS-REPO | repo/README.md: "CREATE DATABASE dmoneydb;". |
| 17 | Install and run | The dump is `sql_scripts/local-dmoneydb-202604201925.sql`. It was exported on Windows, so table names are lowercase. On Linux, follow the README rename step first. | none | PASS-REPO | The file exists at repo/sql_scripts/local-dmoneydb-202604201925.sql. repo/README.md: "The dump was exported on Windows, so its table names are lowercase ... Fix the names before you import the dump". |
| 18 | Install and run | Restoring is optional. With an empty `dmoneydb`, the API creates the tables and seeds the test accounts on first start. | none | PASS-REPO | repo/README.md: "Restoring the dump is optional. If `dmoneydb` is empty, the API creates the tables and seeds the [test accounts](#test-accounts) on first start." |
| 19 | Install and run | Copy `.env.example` to `.env` and `.env.dev`. `db.js` reads `.env.dev`, the rest reads `.env`. | none | PASS-REPO | repo/README.md: "cp .env.example .env.dev   # db.js reads .env.dev; everything else reads .env". |
| 20 | Install and run | Code block: `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` | none | PASS-REPO | repo/dmoney-transaction-api/.env.example has `DB_HOST=localhost`, `DB_NAME=dmoneydb`, `DB_USER`, `DB_PASSWORD`. The values `<your-...>` are placeholders. |
| 21 | Install and run | `npm install`, then `npm run dev` (nodemon) | none | PASS-REPO | repo/dmoney-transaction-api/package.json: `"dev": "npx nodemon server.js"`. |
| 22 | Install and run | The API listens on `PORT`, default 5000. Check with `GET http://localhost:5000/`. | none | PASS-REPO | repo/README.md: "The API listens on `PORT` from `.env` (default `5000`). To check that it is running, open `GET http://localhost:5000/`." |
| 23 | Install and run | Web app: copy `.env.example` to `.env`. Set `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`. Run `npm install` and `npm run dev`. Opens at `http://localhost:3000`. | none | PASS-REPO | repo/dmoney-web-react/.env.example has the three keys. repo/README.md: "npm run dev                # http://localhost:3000". |
| 24 | Install and run | Test accounts are in the README "Test accounts" section and in `dmoney-transaction-api/endpoints.md`. For Agent, Customer, Merchant login the OTP shows in the API console. | none | PASS-REPO | repo/README.md: "## Test accounts" and "When you log in as Agent, Customer or Merchant, the OTP is printed in the API console." endpoints.md: "**Default seeded credentials**". |
| 25 | Install and run | Callout: keep `.env` out of git, never paste values into a prompt. | none | ADVICE | Labelled "The tutorial's advice". |
| 26 | MCP scopes | MCP is an open-source standard for connecting AI applications to external systems. | S1 | PASS | "MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems." |
| 27 | MCP scopes | Claude Code adds servers with `claude mcp add`. | S2 | PASS | "claude mcp add --transport http <name> <url>" and "claude mcp add [options] <name> -- <command> [args...]". |
| 28 | MCP scopes | Code block: `--transport http <name> <url>`. Local stdio: everything after `--` goes to the server. | S2 | PASS | "Everything after `--` is passed to the server untouched." |
| 29 | MCP scopes | Local (default): `--scope local`, stored in `~/.claude.json`, you in this project only | S2 | PASS | "Local scope is the default. A local-scoped server loads only in the project where you added it ... Claude Code stores it in `~/.claude.json`". |
| 30 | MCP scopes | Project: `--scope project`, `.mcp.json` in project root, everyone via version control | S2 | PASS | Table row: "Project \| Current project only \| Yes, via version control \| `.mcp.json` in project root". Also "claude mcp add --transport http shared-server --scope project". |
| 31 | MCP scopes | User: `--scope user`, `~/.claude.json`, all your projects | S2 | PASS | "User-scoped servers are stored in `~/.claude.json` ... available across all projects on your machine". "--scope user" appears in the hubspot example. |
| 32 | MCP scopes | `--scope project` creates or updates `.mcp.json`. | S2 | PASS | "Claude Code automatically creates or updates this file". |
| 33 | MCP scopes | In an interactive session Claude Code asks you to approve each `.mcp.json` server. `claude mcp reset-project-choices` resets the choices. | S2 | PASS | "prompts for approval in interactive sessions before using project-scoped servers from `.mcp.json` files. To reset those approval choices, run `claude mcp reset-project-choices`." |
| 34 | MCP scopes | In a `claude -p` run it loads them without asking. | S2 | PASS | "In `claude -p` runs ... Claude Code can't show that prompt: it loads project-scoped servers without asking." |
| 35 | MCP scopes | Verify that you trust each server before you connect it. | S2 | PASS | "Verify you trust each server before connecting it." |
| 36 | MCP scopes | `.mcp.json` expands `${VAR}` and `${VAR:-default}` in `command`, `args`, `env`, `url`, `headers`. | S2 | PASS | "reference an environment variable in a server's `command`, `args`, `env`, `url`, or `headers` value". Also "`${VAR:-default}`: expands to the value of `VAR` if `VAR` is set, or to `default` if it is unset". |
| 37 | MCP scopes | The team commits the file and each tester keeps the secret in the shell. | none | ADVICE | Usage advice that follows from #36. It states no tool fact beyond #36. |
| 38 | MCP scopes | An unset variable with no default does not stop the config. `claude mcp list` shows a missing-variable warning. | S2 | PASS | "the config still loads: Claude Code reports a missing-variable warning for that server in `claude mcp list` output". |
| 39 | MCP scopes | An empty string counts as set, so `${VAR:-default}` gives the empty string. | S2 | PASS | "it counts as set, so a `${VAR:-default}` reference expands to the empty string rather than to `default`". |
| 40 | MCP scopes | The dMoney `.mcp.json` puts the DB password in `${DMONEY_DB_PASS:-}`. The default is empty, so with the variable unset the server tries an empty password. | none | PASS-REPO | repo/.mcp.json: "mysql://root:${DMONEY_DB_PASS:-}@localhost:3306/dmoneydb". |
| 41 | MCP scopes | Link sentence to the MCP Servers page. | none | N/A | Link sentence. |
| 42 | Check servers | `claude mcp list` shows a health status next to each server, such as `✔ Connected`, `! Needs authentication`, `✘ Failed to connect`. | S2 | PASS | "`claude mcp list` shows a health status next to each server it lists, such as `✔ Connected`, `! Needs authentication`, or `✘ Failed to connect`." |
| 43 | Check servers | An unapproved `.mcp.json` server shows `⏸ Pending approval`. | S2 | PASS | "`⏸ Pending approval (run `claude` to approve)`: a project-scoped server from `.mcp.json` that you haven't approved yet." |
| 44 | Check servers | To check one server, run `claude mcp get <name>`. | S2 | PASS | "To check that Claude Code connected, run `claude mcp get <name>`". |
| 45 | Check servers | Code block: `claude mcp list`, `claude mcp get jira` | S2 | PASS | Both commands appear in S2. `jira` is the dMoney server name (repo/.mcp.json). |
| 46 | Check servers | `/mcp` manages server connections and OAuth sign-in. It also takes `reconnect`, `enable`, `disable`. | S3 | PASS | "`/mcp [reconnect (<server>\|all)\|enable\|disable [<server>\|all]]` \| Manage MCP server connections and OAuth authentication." |
| 47 | Check servers | Claude Code supports OAuth 2.0 for remote servers. | S2 | PASS | "Claude Code supports OAuth 2.0 for secure connections." |
| 48 | Check servers | A `claude -p` run cannot do OAuth. Sign in first with `/mcp` or `claude mcp login <name>`. | S2 | PASS | "Claude Code can't run the OAuth flow there ... run `/mcp` in the session, or `claude mcp login <name>` in your shell." |
| 49 | Check servers | Tool search is on by default. It defers tool definitions. Only tool names and server instructions load at start. | S2 | PASS | "Tool search keeps MCP context usage low by deferring tool definitions until Claude needs them. Only tool names and server instructions load at session start." Also "tool search ... which is on by default". |
| 50 | Check servers | Large tool results still cost context. Claude Code warns above 10,000 tokens and limits output to 25,000 by default. `MAX_MCP_OUTPUT_TOKENS` changes the limit. | S2 | PASS | "displays a warning when MCP tool output exceeds 10,000 tokens and limits output to 25,000 tokens by default. To change the token limit, set the `MAX_MCP_OUTPUT_TOKENS` environment variable". |
| 51 | Check servers | `/context` shows current context usage as a colored grid. | S3 | PASS | "Visualize current context usage as a colored grid." |
| 52 | Check servers | Callout: ask for small results, add a limit. | none | ADVICE | Labelled "The tutorial's advice". |
| 53 | Jira | The official Atlassian MCP Server is a cloud-based bridge between your Atlassian Cloud site and external tools. It signs in with OAuth 2.1 or API tokens. | S4 | PASS | "cloud-based bridge between your Atlassian Cloud site and compatible external tools ... Authentication uses **OAuth 2.1** or **API tokens**". |
| 54 | Jira | New setups should use the v2 URL. The README gives `claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp`, then `/mcp` to sign in. | S4 | PASS | "`claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp`, then run `/mcp` in a session to authenticate". Also "preferably `https://mcp.atlassian.com/v2/mcp`". |
| 55 | Jira | Sign in when Claude Code starts the Atlassian authentication flow. | S5 | PASS | "sign in when your agent or MCP client starts the Atlassian authentication flow." |
| 56 | Jira | dMoney `.mcp.json` names the server `jira` and uses `https://mcp.atlassian.com/v1/mcp`. | none | PASS-REPO | repo/.mcp.json: `"jira": { "type": "http", "url": "https://mcp.atlassian.com/v1/mcp" }`. |
| 57 | Jira | The v1 endpoint is still supported, and v1 connections use the v2 tools. | S4 | PASS | "The v1 endpoints ... remain supported, and existing v1 connections automatically start to expose and use v2 tools." |
| 58 | Jira | The old SSE endpoint `https://mcp.atlassian.com/v1/sse` is not supported after 30 June 2026. | S4 | PASS | "After 30 June 2026, the legacy Server-Sent Events endpoint (`https://mcp.atlassian.com/v1/sse`) will no longer be supported." |
| 59 | Jira | The tutorial suggests the v2 URL. Keep the name `jira` if skills use it. | none | ADVICE | Tutorial advice. |
| 60 | Jira | The server exposes the most-used tools and lets the client discover the rest. | S4 | PASS | "exposes a small set of the most-used tools and lets the client discover the rest on demand." |
| 61 | Jira | `searchJiraIssuesUsingJql` searches Jira work items with JQL | S6 | PASS | "Search Jira work items using JQL." |
| 62 | Jira | JQL is the Jira Query Language | S19 | PASS | "You can use the Jira Query Language (JQL) to specify criteria". |
| 63 | Jira | `getJiraIssue` gets a work item by ID or key | S6 | PASS | "Get a Jira work item by ID or key." |
| 64 | Jira | `listJiraProjects` lists the Jira spaces that you can see | S6 | PASS | "Get Jira spaces visible to the current user." |
| 65 | Jira | `createJiraIssue` creates a work item | S6 | PASS | "Create a new Jira work item." |
| 66 | Jira | `addOrEditJiraIssueComment` adds a comment, or edits one | S6 | PASS | "Add a comment, or edit an existing one." |
| 67 | Jira | `transitionJiraIssue` moves a work item to a new status | S6 | PASS | "Transition an work item to a new status, and/or assign it to a sprint or backlog." |
| 68 | Jira | The server can reach only data that you can already view in Atlassian Cloud. | S4 | PASS | "Access is granted only to data that the user already has permission to view in Atlassian Cloud." |
| 69 | Jira | MCP clients act with your existing permissions. | S5 | PASS | "MCP clients can perform actions on all connected products ... with your existing permissions." |
| 70 | Jira | Jira permission groups are `read_jira`, `write_jira`, `search_jira`. `delete_jira` and `manage_jira` are off by default. | S4 | PASS | "`read_jira` · `write_jira` · `search_jira`" and "`delete_jira` and `manage_jira` are **disabled by default**". |
| 71 | Jira | Each tool call goes into the audit log of your organization. | S4 | PASS | "Every time a tool is used through the Atlassian MCP Server, an event is recorded in your organization's audit log." |
| 72 | Jira | Atlassian advises human confirmation for any high-impact or destructive action. | S4 | PASS | "For any high-impact or destructive action, require human confirmation". |
| 73 | Jira | Writes change a shared system under your name. Practise on a test project and approve each write. | none | ADVICE | Tutorial advice. |
| 74 | Test database | dMoney `.mcp.json` runs `@berthojoris/mcp-mysql-server@1.43.2` with `list,read,utility,create,update,delete,execute`. | none | PASS-REPO | repo/.mcp.json: "@berthojoris/mcp-mysql-server@1.43.2" and "list,read,utility,create,update,delete,execute". |
| 75 | Test database | The dMoney README lists only `playwright` and `jira` as project servers. It describes a separate user-level `dmoneydb` server as read-only. It does not describe this project server. | none | PASS-REPO | repo/README.md: "`playwright`, `jira` \| Project MCP servers" and "`dmoneydb` \| User-level MCP server \| **Read-only** SQL". The README does not mention `dmoney-db`. |
| 76 | Test database | The server takes the connection string, then a permission list, then an optional category list. | S7 | PASS | "The 4th argument (permissions) controls broad access levels, while the 5th argument (categories) fine-tunes which specific tools are available." |
| 77 | Test database | `list` lists databases, tables, schemas | S7 | PASS | "List databases, tables, schemas". |
| 78 | Test database | `read` allows SELECT queries | S7 | PASS | "SELECT queries, read data". |
| 79 | Test database | `utility` allows connection tests and diagnostics | S7 | PASS | "Connection testing, diagnostics". |
| 80 | Test database | `create`, `update`, `delete` allow INSERT, UPDATE, DELETE of records | S7 | PASS | "INSERT new records", "UPDATE existing records", "DELETE records". |
| 81 | Test database | `execute` allows custom INSERT and UPDATE SQL | S7 | PASS | "Execute custom INSERT/UPDATE SQL (DELETE requires `delete` permission too)". |
| 82 | Test database | `ddl` allows CREATE, ALTER, DROP of tables | S7 | PASS | "CREATE/ALTER/DROP tables; optimize, repair, and flush tables". |
| 83 | Test database | Since v1.44.0, a server with no permission list enables only `list,read,utility`. | S7 | FAIL | The source gives a narrower condition: "with no permissions and no categories, the server now enables only `list,read,utility`". Fix: write "with no permission list and no category list". |
| 84 | Test database | dMoney pins 1.43.2 and passes its own list, so that default does not help it. | none | PASS-REPO | repo/.mcp.json: "@berthojoris/mcp-mysql-server@1.43.2" with an explicit permission list. |
| 85 | Test database | Read-only example JSON: `type` stdio, `command` npx, `args` `-y`, package@1.46.0, connection string, `list,read,utility` | S7 | PASS | The package, the argument order and the permission string are in S7. Version 1.46.0 is named: "Security changes in v1.46.0". The structure matches repo/.mcp.json. `${DMONEY_DB_USER}` and `${DMONEY_DB_PASS}` are the reader's own variables. |
| 86 | Test database | Versions 1.43.3 and 1.43.4 tightened permission checks. `EXPLAIN ANALYZE` runs the statement it wraps (MySQL 8.0.18 and later), so since v1.43.4 it needs that statement's permission. | S7 | PASS | "`EXPLAIN ANALYZE` runs the statement it wraps (MySQL 8.0.18+), so it now requires that statement's permission". Section headings: "Security changes in v1.43.4" and "Security changes in v1.43.3". |
| 87 | Test database | The tutorial suggests a version with these changes, such as 1.46.0. | none | ADVICE | Tutorial advice. |
| 88 | Test database | From v1.44.0, `WITH` (CTE) queries are supported and in read queries need `execute`, so a read-only list cannot run them. | S7 | PASS | "`WITH` (CTE) queries are supported and, like derived tables, need `execute` in read queries." |
| 89 | Test database | `MCP_REQUIRE_READONLY_DB_USER=true` makes the server fail at startup if the MySQL user can write. | S7 | PASS | "`true` makes startup fail if the MySQL user can write." |
| 90 | Test database | Ask Claude to call `list_all_tools` first. It returns the enabled tools and the active permission profile. | S7 | PASS | "call `list_all_tools` first. It returns the live runtime catalog, enabled/disabled status, active permission/category profile". |
| 91 | Test database | Callout: SELECT-only user as a second lock. Never connect to production. | none | ADVICE | Labelled "The tutorial's advice". |
| 92 | gh | GitHub CLI (`gh`) is GitHub on the command line, for macOS, Windows, Linux. | S8 | PASS | "GitHub CLI, or the gh CLI, is GitHub on the command line." and "support for macOS, Windows, and Linux". |
| 93 | gh | The README lists Homebrew (macOS), Debian, Ubuntu, RPM packages (Linux), WinGet (Windows). GitHub-hosted runners have it pre-installed. | S8 | PASS | "Homebrew", "Debian, Raspberry Pi, Ubuntu", "Amazon Linux, CentOS, Fedora, openSUSE, RHEL, SUSE" (rpm link), "WinGet". Also "GitHub-hosted runners have the GitHub CLI pre-installed". |
| 94 | gh | `gh auth login` uses a web browser flow by default and stores the token in the system credential store. | S9 | PASS | "The default authentication mode is a web-based browser flow ... stored securely in the system credential store." |
| 95 | gh | `--with-token` reads a classic token from stdin. For a fine-grained token the manual favours `GH_TOKEN`. | S9 | PASS | "use --with-token to pass in a personal access token (classic) on standard input" and "Favour setting GH_TOKEN for fine-grained personal access token usage." |
| 96 | gh | Label "Read commands (safe to allow)" | none | ADVICE | Tutorial's advice label. |
| 97 | gh | `gh issue view 7 --comments` shows the title, body and other data of an issue, with comments | S10 | PASS | "Display the title, body, and other information about an issue. When --comments is used, terminal output includes the issue details and comments." |
| 98 | gh | `gh issue list --state all --label bug`: filtered by state and label. The default is open issues only. | S11 | PASS | `--state <string> (default "open")`, "Filter by state: {open\|closed\|all}", `--label <strings>`. |
| 99 | gh | `gh pr view 8` shows title, body and other data of a pull request | S12 | PASS | "Display the title, body, and other information about a pull request." |
| 100 | gh | `gh pr diff 8 --name-only` shows the changes of a pull request, here only file names | S13 | PASS | "View changes in a pull request." and "--name-only: Display only names of changed files". |
| 101 | gh | `gh issue create --title ...` creates an issue. | S14 | PASS | "Create an issue on GitHub." and `--title <string>`. |
| 102 | gh | `gh pr create --draft` creates a pull request as a draft. | S15 | PASS | "Create a pull request on GitHub." and "--draft: Mark pull request as a draft". |
| 103 | gh | Claude Code evaluates rules in this order: deny, then ask, then allow. | S16 | PASS | "Rules are evaluated in order: deny, then ask, then allow." |
| 104 | gh | Put the `*` after the subcommand: `Bash(git *)` allows every git command. | S16 | PASS | "Put the `*` after the subcommand ... `Bash(git *)` allows every git command." |
| 105 | gh | A trailing ` *` also matches the bare command. | S16 | PASS | "A `*` at the end, with a space before it, also matches the bare command." |
| 106 | gh | JSON block: `permissions` with `allow` (4 read rules) and `ask` (2 write rules) | S16 | FAIL | S16 shows the `permissions`, `allow` and `deny` keys in JSON. It describes ask rules in prose but never shows an `"ask"` array. Fix: add a cite that shows `permissions.ask`, or reword the sentence to say that ask rules exist and then show the JSON as the tutorial's own example. |
| 107 | gh | An ask rule applies when any subcommand matches it, also inside a chained command. | S16 | PASS | "Deny and ask rules apply when any subcommand matches them". Also "An ask rule like `Bash(git clean *)` still prompts you for `cd /tmp && git clean -f`". |
| 108 | gh | Label "Write commands (ask first)" | none | ADVICE | Tutorial's advice label. |
| 109 | Claude environment | dMoney has a `CLAUDE.md` in `dmoney-transaction-api/` and one in `dmoney-web-react/`, with architecture notes and conventions. | none | PASS-REPO | The two files exist. repo/README.md: "Each project also has a `CLAUDE.md` that gives AI assistants architecture notes and conventions." |
| 110 | Claude environment | A subdirectory `CLAUDE.md` loads on demand, when Claude reads, writes, or edits a file there. | S17 | PASS | "Claude Code loads each one once Claude reads, writes, or edits another file in that subdirectory." |
| 111 | Claude environment | Start Claude Code at the workspace root so each project brings its own notes. | none | ADVICE | Tutorial advice. It follows from #110. |
| 112 | Claude environment | `/memory` opens the `CLAUDE.md` files for editing. | S3 | PASS | "`/memory` \| Edit `CLAUDE.md` files". |
| 113 | Claude environment | `.claude/settings.json`: everyone in the repository, commit it | S18 | PASS | "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it". |
| 114 | Claude environment | `.claude/settings.local.json`: you, in this project. Claude Code keeps it out of git when it creates it. | S18 | PASS | "You, in this one project only. Claude Code keeps it out of git when it creates the file". |
| 115 | Claude environment | `~/.claude/settings.json`: you, in every project on this machine | S18 | PASS | "You, in every project on this machine". |
| 116 | Claude environment | The dMoney root `.claude/settings.json` holds a `PreToolUse` hook for graphify and no permission rules. | none | PASS-REPO | repo/.claude/settings.json: "PreToolUse", "graphify-prehook.sh". The file has no `permissions` key. |
| 117 | Claude environment | `mcp__<server>` matches every tool of a server. `mcp__<server>__<tool>` matches one tool. | S16 | PASS | "`mcp__puppeteer` matches any tool provided by the `puppeteer` server" and "`mcp__puppeteer__puppeteer_navigate` matches the `puppeteer_navigate` tool". Also "To match one tool, write its full name, `mcp__<server>__<tool>`". |
| 118 | Claude environment | `/permissions` shows and edits the rules. | S3 | PASS | "Manage allow, ask, and deny rules for tool permissions ... view rules by scope, add or remove rules". |
| 119 | Claude environment | A local MCP server lives in `~/.claude.json`. Local settings live in `.claude/settings.local.json`. | S2 | PASS | "MCP local-scoped servers are stored in `~/.claude.json` ... while general local settings use `.claude/settings.local.json`". |
| 120 | Claude environment | Check table: `claude mcp list` shows `✔ Connected` for `jira`, `dmoney-db`, `playwright`, or `! Needs authentication` for Jira before sign-in | S2 | PASS | The statuses are in S2 (#42). The three server names are in repo/.mcp.json. |
| 121 | Claude environment | Check table: `/mcp` shows each server, its state, Jira sign-in. `/context` shows the context grid. | S3 | PASS | "/mcp ... Manage MCP server connections and OAuth authentication" and "/context ... colored grid". |
| 122 | Claude environment | `gh issue list` shows the open issues of the repository | S11 | PASS | `--state <string> (default "open")`. |
| 123 | Practice | Exercise callout and the steps | none | ADVICE | Labelled "The tutorial's exercise". |
| 124 | Practice | Step 2: change `dmoney-db` version to 1.46.0 and the list to `list,read,utility`. Export `DMONEY_DB_USER`, `DMONEY_DB_PASS`. | S7 | PASS | Package version and permission string are in S7. The server name and variable names match repo/.mcp.json. |
| 125 | Practice | Step 3: run `claude mcp list`. Approve the `.mcp.json` servers. Run `/mcp` and sign in to Jira. | S2, S3, S5 | PASS | Same sources as #33, #42, #46, #55. |
| 126 | Practice | Step 4 prompt: expect a short table from `searchJiraIssuesUsingJql`. | S6 | PASS | "Search Jira work items using JQL." |
| 127 | Practice | Step 5 prompt: expect the tool list with only read tools enabled, then the tables. | S7 | ADVICE | Part of the exercise. S7 supports `list_all_tools` showing enabled and disabled status. Repo fact: `Transactions` model exists at repo/dmoney-transaction-api/sequelizeModel/Transactions.js. |
| 128 | Practice | Step 6: the `playwright` server | none | PASS-REPO | repo/.mcp.json: `"playwright": {` with `@playwright/mcp@latest`. |
| 129 | Practice | Step 7: add the `gh` rules to `.claude/settings.local.json`. `gh issue list --state all` runs with no prompt. `gh issue create` must ask. | S11 | PASS | `.claude/settings.local.json` is in S18. `--state all` is in S11. The ask behaviour is in S16 (#103). |
| 130 | Practice | Step 8: `/context` | S3 | PASS | See #51. |
| 131 | Common mistakes | A password in `.mcp.json`: use `${VAR}` in `args`, `env`, `url`, or `headers`. | S2 | PASS | See #36. |
| 132 | Common mistakes | An empty default hides a missing value. Without a default, `claude mcp list` warns. An empty value counts as set. | S2 | PASS | "reports a missing-variable warning" and "it counts as set". |
| 133 | Common mistakes | Use `list,read,utility` for a database server, plus a SELECT-only user. | S7 | PASS | `list,read,utility` is the v1.44.0 read-only default in S7. The SELECT-only user is labelled tutorial advice. |
| 134 | Common mistakes | The old SSE endpoint `/v1/sse` is not supported after 30 June 2026. Use `https://mcp.atlassian.com/v2/mcp`. | S4 | PASS | See #58. |
| 135 | Common mistakes | Jira tools missing in a `claude -p` run: sign in first from an interactive session with `/mcp` or `claude mcp login <name>`. | S2 | PASS | See #48. |
| 136 | Common mistakes | `Bash(gh *)` in `allow` allows every `gh` command, writes too. Put the `*` after the subcommand. | S16 | PASS | Same rule as `Bash(git *)` in S16: "`Bash(git *)` allows every git command". |
| 137 | Common mistakes | One server under two names: keep the `.mcp.json` names so `mcp__jira` matches. | S16 | ADVICE | Labelled "The tutorial's advice". The `mcp__<server>` match is in S16 (#117). |
| 138 | Key words | MCP: an open-source standard for connecting AI applications to external systems | none | PASS | Restates #26. |
| 139 | Key words | Scope: where Claude Code stores an MCP server and who gets it: local (default), project, or user | none | PASS | Restates #29 to #31. |
| 140 | Key words | `.mcp.json`: project-root file for project-scoped servers. Claude Code asks you to approve them. | none | PASS | Restates #30 and #33. |
| 141 | Key words | Variable expansion: `${VAR}` and `${VAR:-default}` in `.mcp.json`, so secrets stay in your shell and out of git | none | PASS | Restates #36 and #37. |
| 142 | Key words | `/mcp`: session command that manages MCP connections and OAuth sign-in | none | PASS | Restates #46. |
| 143 | Key words | Tool search: loads only tool names and server instructions at start, and full definitions when needed | none | PASS | Restates #49. |
| 144 | Key words | Atlassian MCP Server: Atlassian's cloud MCP server for Jira and other products. It acts with your own permissions. | none | PASS | Restates #53 and #69. |
| 145 | Key words | JQL: the Jira Query Language, which `searchJiraIssuesUsingJql` uses | none | PASS | Restates #61 and #62. |
| 146 | Key words | Permission list: the MySQL MCP argument that sets what Claude may do. `list,read,utility` is read-only. | none | PASS | Restates #76 and #133. |
| 147 | Key words | `gh`: GitHub CLI, with read commands such as `gh issue view` and write commands such as `gh pr create` | none | PASS | Restates #92, #97, #102. |
| 148 | Key words | Permission rule: an allow, ask, or deny entry in settings. Claude Code checks deny, then ask, then allow. | none | PASS | Restates #103. |
| 149 | Key words | `CLAUDE.md`: the notes file of a project. In a subdirectory it loads when Claude works on a file there. | none | PASS | Restates #109 and #110. |

Open FAILs after round 2: 2

Script check of round 2: 149 rows, 2 FAIL rows, 4 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / project-setup (round 3, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Lede | An agent can only test what it can reach. | none | N/A | Framing sentence, not a tool fact. |
| 2 | Lede | Each connection gets the least access that the work needs, so Claude can read freely and asks you before it writes anything to a shared system. | none | FAIL | This is a behavior claim about Claude Code with no cite. The page only shows `ask` rules for `gh`, and only suggests `mcp__jira__createJiraIssue` in `ask`. Fix: "The tutorial sets read commands to allow and write commands to ask (see the gh section)" and cite S16. |
| 3 | Practice project | dMoney is a mobile financial service: a REST API and a web frontend, in the public repo. | none | PASS-REPO | repo/README.md:3: "dMoney**, a mobile financial service (MFS) platform ... made up of a REST API and a web frontend". |
| 4 | Practice project | API: `dmoney-transaction-api/`, Node.js, Express, Sequelize, MySQL. | none | PASS-REPO | repo/README.md:13: "dmoney-transaction-api/   # Backend: Node.js + Express + Sequelize + MySQL". |
| 5 | Practice project | Web app: `dmoney-web-react/`, Next.js 15, TypeScript, MUI, Tailwind 4. | none | PASS-REPO | repo/README.md:26: "Next.js 15 (App Router) + TypeScript + MUI + Tailwind 4"; repo/dmoney-web-react/package.json: "next": "15.5.9". |
| 6 | Practice project | `sql_scripts/` is a MySQL dump of `dmoneydb` with schema and seed data. | none | PASS-REPO | repo/README.md:35: "sql_scripts/              # MySQL dump of dmoneydb (schema + seed data)". |
| 7 | Practice project | Claude setup: `.claude/`, `.mcp.json`, one `CLAUDE.md` per project. Skills, subagents, a hook, and the project MCP servers. | none | PASS-REPO | repo/.claude/skills/, repo/.claude/agents/, repo/.claude/settings.json has a "PreToolUse" hook, repo/.mcp.json, repo/dmoney-transaction-api/CLAUDE.md, repo/dmoney-web-react/CLAUDE.md. |
| 8 | Practice project | The web app calls the API. The API reads and writes the MySQL database `dmoneydb`. | none | PASS-REPO | repo/README.md:51-61 architecture diagram: "HTTP + JWT" from dmoney-web-react to dmoney-transaction-api, then "MySQL (dmoneydb)". |
| 9 | Practice project | Claude Code reads the code, drives the web app, queries the database, and reads tickets. | none | PASS-REPO | repo/README.md:363-364: "`playwright`, `jira` ... Project MCP servers"; ".mcp.json" also has `dmoney-db`. |
| 10 | Practice project | Jira connects through the `jira` server in `.mcp.json`. | none | PASS-REPO | repo/.mcp.json: "jira": { "type": "http", "url": "https://mcp.atlassian.com/v1/mcp" }. |
| 11 | Practice project | The test database connects through the `dmoney-db` server in `.mcp.json`. | none | PASS-REPO | repo/.mcp.json: "dmoney-db": { "type": "stdio", ... }. |
| 12 | Practice project | GitHub uses the `gh` CLI. The `understand-task` and `pr-review` skills use it. | none | PASS-REPO | repo/README.md:92: "GitHub CLI ... (`gh`) \| Skills that read or create issues and PRs (`understand-task`, `pr-review`)". |
| 13 | Practice project | The README says dMoney has bugs and security flaws on purpose. Do not deploy it to production or expose it to the internet. | none | PASS-REPO | repo/README.md:5: "known bugs and security flaws, and they are there on purpose ... **Do not deploy it to production or expose it to the internet.**" |
| 14 | Practice project | The dMoney facts come from the files at commit 51db34a. | none | N/A | Sentence about the page itself. |
| 15 | Install | Prerequisites: Node.js 20.x or newer, npm, MySQL 8.x or a compatible MariaDB. | none | PASS-REPO | repo/README.md:78-80: "20.x or newer", "comes with Node.js", "8.x (or a compatible MariaDB)". |
| 16 | Install | Stripe test account only for bank cash-in. SMTP is optional because the API also prints OTPs to its console. | none | PASS-REPO | repo/README.md:82: "only need a Stripe test account if you want to use the bank cash-in feature. SMTP or Gmail credentials are optional, because OTPs and reset tokens are also printed to the API console." |
| 17 | Install | "If a step needs a tool that you do not have, read along and come back later." | none | ADVICE | Tutorial guidance. |
| 18 | Install | `CREATE DATABASE dmoneydb;` | none | PASS-REPO | repo/README.md:130: "CREATE DATABASE dmoneydb;". |
| 19 | Install | Dump file `sql_scripts/local-dmoneydb-202604201925.sql`. Exported on Windows, so table names are lowercase. On Linux, follow the README rename step first. | none | PASS-REPO | repo/README.md:132-134: "sql_scripts/local-dmoneydb-202604201925.sql"; "The dump was exported on Windows, so its table names are lowercase ... Fix the names before you import the dump". |
| 20 | Install | Restoring is optional. With an empty `dmoneydb`, the API creates the tables and seeds the test accounts on first start. | none | PASS-REPO | repo/README.md:142: "Restoring the dump is optional. If `dmoneydb` is empty, the API creates the tables and seeds the test accounts on first start." |
| 21 | Install | Copy `.env.example` to `.env` and `.env.dev`. `db.js` reads `.env.dev`, the rest reads `.env`. Set the same DB values in both. | none | PASS-REPO | repo/README.md:189-190: "cp .env.example .env / cp .env.example .env.dev   # db.js reads .env.dev; everything else reads .env"; line 200: "Keep the `DB_*` values the same in both." |
| 22 | Install | Code block: `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` (placeholders). | none | PASS-REPO | repo/dmoney-transaction-api/.env.example:1-4: "DB_HOST=localhost / DB_NAME=dmoneydb / DB_USER=root / DB_PASSWORD=<redacted>". |
| 23 | Install | `npm install`, then `npm run dev` (nodemon). | none | PASS-REPO | repo/dmoney-transaction-api/package.json:7: "dev": "npx nodemon server.js". |
| 24 | Install | The API listens on `PORT`, default 5000. Check with `GET http://localhost:5000/`. | none | PASS-REPO | repo/README.md:198: "The API listens on `PORT` from `.env` (default `5000`). To check that it is running, open `GET http://localhost:5000/`." |
| 25 | Install | Web app: copy `.env.example` to `.env`. Set `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`. Run `npm install` and `npm run dev`. App at `http://localhost:3000`. | none | PASS-REPO | repo/dmoney-web-react/.env.example:1-3 has the three keys. repo/README.md:229-234: "cp .env.example .env ... npm run dev                # http://localhost:3000". |
| 26 | Install | Test accounts are in the README "Test accounts" section and in `dmoney-transaction-api/endpoints.md`. Agent, Customer, Merchant login shows the OTP in the API console. | none | PASS-REPO | repo/README.md:247 "## Test accounts"; line 260: "When you log in as Agent, Customer or Merchant, the OTP is printed in the API console." repo/dmoney-transaction-api/CLAUDE.md names `endpoints.md` as holding "seeded test credentials". |
| 27 | Install | Callout: the README and env files hold practice values. Keep your `.env` out of git. Never paste values into a prompt. | none | ADVICE | Labeled "The tutorial's advice". The "practice values" fact is in repo/dmoney-transaction-api/.env.example ("DB_PASSWORD=<redacted>"). |
| 28 | MCP scopes | MCP is an open-source standard for connecting AI applications to external systems. | S1 | PASS | S1:24 "MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems." |
| 29 | MCP scopes | Claude Code adds servers with `claude mcp add`. | S2 | PASS | S2:71 "claude mcp add --transport http <name> <url>". |
| 30 | MCP scopes | Code block: `claude mcp add --transport http <name> <url>`. | S2 | PASS | S2:71 same command. |
| 31 | MCP scopes | Code block: `claude mcp add [options] <name> -- <command> [args...]`. Everything after `--` goes to the server. | S2 | PASS | S2:125 command. S2:134 "Everything after `--` is passed to the server untouched." |
| 32 | MCP scopes | Scope decides where the server is stored and who gets it. | S2 | PASS | S2:742-748 scope table has "Shared with team" and "Stored in" columns. |
| 33 | MCP scopes | Local (default), `--scope local`, `~/.claude.json`, you, this project only. | S2 | PASS | S2:752 "Local scope is the default ... Claude Code stores it in `~/.claude.json` under that project's path". S2:763 "--scope local". |
| 34 | MCP scopes | Project, `--scope project`, `.mcp.json` in project root, everyone through version control. | S2 | PASS | S2:747 "Yes, via version control \| `.mcp.json` in project root". S2:175 "`--scope project`". |
| 35 | MCP scopes | User, `--scope user`, `~/.claude.json`, you in all projects. | S2 | PASS | S2:748, S2:817 "stored in `~/.claude.json` ... across all projects", S2:821 "--scope user". |
| 36 | MCP scopes | `--scope project` creates or updates `.mcp.json`. | S2 | PASS | S2:785 "Claude Code automatically creates or updates this file". |
| 37 | MCP scopes | Interactive session asks you to approve each `.mcp.json` server. `claude mcp reset-project-choices` resets the choices. | S2 | PASS | S2:805 "prompts for approval in interactive sessions before using project-scoped servers ... run `claude mcp reset-project-choices`." |
| 38 | MCP scopes | In a `claude -p` run it loads them without asking. | S2 | PASS | S2:807 "In `claude -p` runs ... it loads project-scoped servers without asking." |
| 39 | MCP scopes | Verify that you trust each server before you connect it. | S2 | PASS | S2:32 "Verify you trust each server before connecting it." |
| 40 | Keep secrets | `.mcp.json` expands `${VAR}` and `${VAR:-default}` in `command`, `args`, `env`, `url`, `headers`. | S2 | PASS | S2:844 "in a server's `command`, `args`, `env`, `url`, or `headers` value ... `${VAR}` ... `${VAR:-default}`". |
| 41 | Keep secrets | An unset variable with no default does not stop the config. `claude mcp list` shows a missing-variable warning. | S2 | PASS | S2:869 "the config still loads: Claude Code reports a missing-variable warning for that server in `claude mcp list` output". |
| 42 | Keep secrets | An empty string counts as set, so `${VAR:-default}` gives the empty string. | S2 | PASS | S2:873 "it counts as set, so a `${VAR:-default}` reference expands to the empty string". |
| 43 | Keep secrets | dMoney `.mcp.json` puts the DB password in `${DMONEY_DB_PASS:-}`. The default is empty, so the server tries an empty password if the variable is unset. | none | PASS-REPO | repo/.mcp.json: "mysql://root:${DMONEY_DB_PASS:-}@localhost:3306/dmoneydb". |
| 44 | Check servers | `claude mcp list` shows a health status such as `✔ Connected`, `! Needs authentication`, `✘ Failed to connect`. | S2 | PASS | S2:251 same words. |
| 45 | Check servers | An unapproved `.mcp.json` server shows `⏸ Pending approval`. | S2 | PASS | S2:255 "`⏸ Pending approval (run `claude` to approve)`: a project-scoped server from `.mcp.json` that you haven't approved yet." |
| 46 | Check servers | `claude mcp get <name>` checks one server. | S2 | PASS | S2:225 "run `claude mcp get <name>`". |
| 47 | Check servers | Code block: `claude mcp list`, `claude mcp get jira`. | S2 | PASS | Both commands are in S2. `jira` is the dMoney server name (repo/.mcp.json). |
| 48 | Check servers | `/mcp` manages server connections and OAuth sign-in. It also takes `reconnect`, `enable`, `disable`. | S3 | PASS | S3:109 "Manage MCP server connections and OAuth authentication ... pass `reconnect`, `enable`, or `disable`". |
| 49 | Check servers | Claude Code supports OAuth 2.0 for remote servers. | S2 | PASS | S2:958 "Claude Code supports OAuth 2.0 for secure connections." |
| 50 | Check servers | A `claude -p` run cannot do OAuth. Sign in first with `/mcp` or `claude mcp login <name>`. | S2 | PASS | S2:982 "can't run the OAuth flow there ... run `/mcp` in the session, or `claude mcp login <name>` in your shell." |
| 51 | Check servers | Tool search is on by default. It defers tool definitions, so only tool names and server instructions load at session start. | S2 | PASS | S2:1738 "deferring tool definitions until Claude needs them. Only tool names and server instructions load at session start". S2:427 "tool search ..., which is on by default". |
| 52 | Check servers | Large tool results still cost context. Warns above 10,000 tokens, limit 25,000 by default. `MAX_MCP_OUTPUT_TOKENS` changes the limit. | S2 | PASS | S2:452 "displays a warning when MCP tool output exceeds 10,000 tokens and limits output to 25,000 tokens by default ... set the `MAX_MCP_OUTPUT_TOKENS` environment variable". |
| 53 | Check servers | `/context` shows current context usage as a colored grid. | S3 | PASS | S3:73 "Visualize current context usage as a colored grid." |
| 54 | Check servers | "Run it after you connect a server, and again after a large query." | none | ADVICE | Tutorial guidance. |
| 55 | Check servers | Callout: ask for small results, add a limit to Jira search and SQL query. | none | ADVICE | Labeled "The tutorial's advice". |
| 56 | Jira | The Atlassian MCP Server is a cloud-based bridge between your Atlassian Cloud site and external tools. It signs in with OAuth 2.1 or API tokens. | S4 | PASS | S4:47 "cloud-based bridge between your Atlassian Cloud site and compatible external tools ... Authentication uses **OAuth 2.1** or **API tokens**". |
| 57 | Jira | New setups should use the v2 URL. | S4 | PASS | S4:290-293 "The recommended endpoint for all clients is: https://mcp.atlassian.com/v2/mcp". |
| 58 | Jira | The README gives `claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp`, then `/mcp` to sign in. | S4 | PASS | S4:115 "`claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp`, then run `/mcp` in a session to authenticate". |
| 59 | Jira | Sign in when Claude Code starts the Atlassian authentication flow. | S5 | PASS | S5:169 "sign in when your agent or MCP client starts the Atlassian authentication flow." |
| 60 | Jira | dMoney `.mcp.json` names the server `jira` and uses `https://mcp.atlassian.com/v1/mcp`. | none | PASS-REPO | repo/.mcp.json: "jira": { ... "url": "https://mcp.atlassian.com/v1/mcp" }. |
| 61 | Jira | The v1 endpoint is still supported, and v1 connections use the v2 tools. | S4 | PASS | S4:296 "The v1 endpoints (...`/v1/mcp`) remain supported, and existing v1 connections automatically start to expose and use v2 tools." |
| 62 | Jira | The old SSE endpoint `https://mcp.atlassian.com/v1/sse` is not supported after 30 June 2026. | S4 | PASS | S4:301 "After 30 June 2026, the legacy Server-Sent Events endpoint (`https://mcp.atlassian.com/v1/sse`) will no longer be supported." |
| 63 | Jira | "The tutorial suggests the v2 URL ... Keep the name `jira` if the skills and agents use it." | none | ADVICE | The page labels it as the tutorial's suggestion. |
| 64 | Jira | The server exposes the most-used tools and lets the client discover the rest. | S4 | PASS | S4:228 "exposes a small set of the most-used tools and lets the client discover the rest on demand". |
| 65 | Jira | `searchJiraIssuesUsingJql`: searches Jira work items with JQL. | S6 | PASS | S6:360-363 "searchJiraIssuesUsingJql (Primary) ... Search Jira work items using JQL." |
| 66 | Jira | JQL is the Jira Query Language. | S19 | PASS | S19:15 "Jira Query Language (JQL)". |
| 67 | Jira | `getJiraIssue`: gets a work item by ID or key. | S6 | PASS | S6:85 "Get a Jira work item by ID or key." |
| 68 | Jira | `listJiraProjects`: lists the Jira spaces that you can see. | S6 | PASS | S6:88-91 "listJiraProjects ... Get Jira spaces visible to the current user." |
| 69 | Jira | `createJiraIssue`: creates a work item. | S6 | PASS | S6:259 "Create a new Jira work item." |
| 70 | Jira | `addOrEditJiraIssueComment`: adds a comment, or edits one. | S6 | PASS | S6:277 "Add a comment, or edit an existing one." |
| 71 | Jira | `transitionJiraIssue`: moves a work item to a new status. | S6 | PASS | S6:271 "Transition an work item to a new status". |
| 72 | Jira | The server reaches only data you can already view in Atlassian Cloud. | S4 | PASS | S4:308 "Access is granted only to data that the user already has permission to view in Atlassian Cloud." |
| 73 | Jira | MCP clients act with your existing permissions. | S5 | PASS | S5:179 "MCP clients can perform actions on all connected products ... with your existing permissions." |
| 74 | Jira | Jira permission groups are `read_jira`, `write_jira`, `search_jira`. `delete_jira` and `manage_jira` are off by default. | S4 | PASS | S4:199 "`read_jira` · `write_jira` · `search_jira`". S4:215 "`delete_jira` and `manage_jira` are **disabled by default**". |
| 75 | Jira | Each tool call goes into the audit log of your organization. | S4 | PASS | S4:416 "Every time a tool is used through the Atlassian MCP Server, an event is recorded in your organization's audit log." |
| 76 | Jira | Callout: Atlassian advises human confirmation for any high-impact or destructive action. | S4 | PASS | S4:435 "For any high-impact or destructive action, require human confirmation". The rest of the callout is advice. |
| 77 | MySQL | dMoney `.mcp.json` runs `@berthojoris/mcp-mysql-server@1.43.2` with `list,read,utility,create,update,delete,execute`. | none | PASS-REPO | repo/.mcp.json:21,23 same package, version, and list. |
| 78 | MySQL | The dMoney README lists only `playwright` and `jira` as project servers, calls a separate user-level `dmoneydb` server read-only, and does not describe this project server. | none | PASS-REPO | repo/README.md:363 "`playwright`, `jira` \| Project MCP servers"; line 364 "`dmoneydb` \| User-level MCP server \| **Read-only** SQL". No README text names the project `dmoney-db` server. |
| 79 | MySQL | The server takes the connection string, then a permission list, then an optional category list. | S7 | PASS | S7:258 "mysql://mcp_reader:pass@localhost:3306/app "list,read,utility"". S7:161 "The 4th argument (permissions) ... the 5th argument (categories)". |
| 80 | MySQL | `list`: listing databases, tables, schemas. | S7 | PASS | S7:346 "List databases, tables, schemas". |
| 81 | MySQL | `read`: SELECT queries. | S7 | PASS | S7:347 "SELECT queries, read data". |
| 82 | MySQL | `utility`: connection tests and diagnostics. | S7 | PASS | S7:355 "Connection testing, diagnostics". |
| 83 | MySQL | `create`, `update`, `delete`: INSERT, UPDATE, DELETE of records. | S7 | PASS | S7:348-350 "INSERT new records", "UPDATE existing records", "DELETE records". |
| 84 | MySQL | `execute`: custom INSERT and UPDATE SQL. | S7 | PASS | S7:351 "Execute custom INSERT/UPDATE SQL". |
| 85 | MySQL | `ddl`: CREATE, ALTER, DROP of tables. | S7 | PASS | S7:352 "CREATE/ALTER/DROP tables". |
| 86 | MySQL | Since v1.44.0, a server with no permissions and no categories enables only `list,read,utility`. | S7 | PASS | S7:363 "with no permissions and no categories, the server now enables only `list,read,utility`". |
| 87 | MySQL | dMoney pins 1.43.2 and passes its own list, so that default does not help it. | none | PASS-REPO | repo/.mcp.json:21,23 pins "@1.43.2" and passes a list. |
| 88 | MySQL | Read-only example JSON: pins 1.46.0, `list,read,utility`, `mcpServers`, `type: stdio`, `npx -y`. | S7 | PASS | S7:357 has "Security changes in v1.46.0". S7:258 shows `npx -y @berthojoris/mcp-mysql-server mysql://... "list,read,utility"`. repo/.mcp.json shows the `mcpServers` shape. |
| 89 | MySQL | v1.43.3 and v1.43.4 tightened the permission checks. `EXPLAIN ANALYZE` runs the statement it wraps (MySQL 8.0.18+), so since v1.43.4 it needs that statement's permission. | S7 | PASS | S7:369 "`EXPLAIN ANALYZE` runs the statement it wraps (MySQL 8.0.18+), so it now requires that statement's permission". S7:368, S7:371 "Security changes in v1.43.4/v1.43.3". |
| 90 | MySQL | From v1.44.0, `WITH` (CTE) queries are supported and in read queries need `execute`, so a read-only list cannot run them. | S7 | PASS | S7:366 "`WITH` (CTE) queries are supported and, like derived tables, need `execute` in read queries." |
| 91 | MySQL | `MCP_REQUIRE_READONLY_DB_USER=true` makes the server fail at startup if the MySQL user can write. | S7 | PASS | S7:277 "`true` makes startup fail if the MySQL user can write." |
| 92 | MySQL | `list_all_tools` returns the enabled tools and the active permission profile. | S7 | PASS | S7:244 "call `list_all_tools` first. It returns the live runtime catalog, enabled/disabled status, active permission/category profile". |
| 93 | MySQL | Callout: a SELECT-only DB user is the second lock. Never connect Claude to production. | none | ADVICE | Labeled "The tutorial's advice". |
| 94 | gh CLI | `gh` is GitHub on the command line, for macOS, Windows, Linux. | S8 | PASS | S8:3 "GitHub CLI, or the gh CLI, is GitHub on the command line". S8:10 "support for macOS, Windows, and Linux". |
| 95 | gh CLI | The README lists Homebrew (macOS), Debian, Ubuntu, RPM packages (Linux), WinGet (Windows). GitHub-hosted runners have it pre-installed. | S8 | PASS | S8:39 "Homebrew"; S8:46 "Debian, Raspberry Pi, Ubuntu"; S8:47 "Amazon Linux, CentOS, Fedora, openSUSE, RHEL, SUSE](docs/install_linux.md#rpm)"; S8:54 "WinGet"; S8:75 "have the GitHub CLI pre-installed". |
| 96 | gh CLI | `gh auth login` uses a web browser flow by default and stores the token in the system credential store. | S9 | PASS | S9:996-997 "The default authentication mode is a web-based browser flow. After completion, an authentication token will be stored securely in the system credential store." |
| 97 | gh CLI | `--with-token` reads a classic token from stdin. For a fine-grained token the manual favours `GH_TOKEN`. | S9 | PASS | S9:1002 "use --with-token to pass in a personal access token (classic) on standard input"; S9:1006 "Favour setting GH_TOKEN for fine-grained personal access token usage." |
| 98 | gh CLI | "Read commands (safe to allow)" and "Write commands (ask first)". | none | ADVICE | The page's recommendation, with no tool fact. |
| 99 | gh CLI | `gh issue view 7 --comments`: title, body, other data of an issue, with comments. | S10 | PASS | S10:991 "Display the title, body, and other information about an issue."; S10:993 "When --comments is used, terminal output includes the issue details and comments." |
| 100 | gh CLI | `gh issue list --state all --label bug`: filtered by state and label. Default is open issues only. | S11 | PASS | S11:991 "By default, this only lists open issues."; S11:1026 "--label <strings>"; S11:1050 "--state <string> (default "open")". |
| 101 | gh CLI | `gh pr view 8`: title, body, other data of a pull request. | S12 | PASS | S12:991 "Display the title, body, and other information about a pull request." |
| 102 | gh CLI | `gh pr diff 8 --name-only`: changes of a pull request, here only file names. | S13 | PASS | S13:991 "View changes in a pull request."; S13:1021-1023 "--name-only ... Display only names of changed files". |
| 103 | gh CLI | `gh issue create --title ...` creates an issue. | S14 | PASS | S14:991 "Create an issue on GitHub."; S14:1080 "--title <string>". |
| 104 | gh CLI | `gh pr create --draft` creates a pull request as a draft. | S15 | PASS | S15:1067-1069 "--draft ... Mark pull request as a draft". |
| 105 | gh CLI | Claude Code evaluates rules in order: deny, then ask, then allow. | S16 | PASS | S16:56 "Rules are evaluated in order: deny, then ask, then allow." |
| 106 | gh CLI | Put the `*` after the subcommand: `Bash(git *)` allows every git command. | S16 | PASS | S16:152 "Put the `*` after the subcommand ... `Bash(git log *)` allows only `git log` commands, and `Bash(git *)` allows every git command." In the source `Bash(git *)` is the too-broad case. The page's colon wording can read as if it were the correct form. |
| 107 | gh CLI | A trailing ` *` also matches the bare command. | S16 | PASS | S16:186 "A `*` at the end, with a space before it, also matches the bare command." |
| 108 | gh CLI | The `permissions` object of a settings file takes `allow`, `ask`, `deny` arrays. | S20 | PASS | S20:908 "object with `allow`, `ask`, `deny`, ...". |
| 109 | gh CLI | JSON example (the tutorial's own): `permissions`, `allow`, `ask`, `Bash(gh issue view *)` and the other rules. | S20 | PASS | Keys and rule forms are in S20:908 and S16:175. The rule contents are the tutorial's own example. |
| 110 | gh CLI | An ask rule applies when any subcommand matches it, also inside a chained command. | S16 | PASS | S16:223 "Deny and ask rules apply when any subcommand matches them". |
| 111 | Environment | dMoney has a `CLAUDE.md` in `dmoney-transaction-api/` and one in `dmoney-web-react/`, with architecture notes and conventions. | none | PASS-REPO | repo/README.md:366 "Each project also has a `CLAUDE.md` that gives AI assistants architecture notes and conventions." Both files exist. |
| 112 | Environment | A subdirectory `CLAUDE.md` loads on demand: when Claude reads, writes, or edits a file in that subdirectory. | S17 | PASS | S17:148 "loads each one once Claude reads, writes, or edits another file in that subdirectory". |
| 113 | Environment | "So start Claude Code at the workspace root, and each project brings its own notes." | S17 | ADVICE | Tutorial inference from row 112. |
| 114 | Environment | `/memory` opens the `CLAUDE.md` files for editing. | S3 | PASS | S3:110 "Edit `CLAUDE.md` files". |
| 115 | Environment | `.claude/settings.json`: everyone in the repository. Commit it. | S18 | PASS | S18:28 "Everyone working in the folder that contains it. In a git repository, commit it". |
| 116 | Environment | `.claude/settings.local.json`: you, in this project. Claude Code keeps it out of git when it creates it. | S18 | PASS | S18:29 "You, in this one project only. Claude Code keeps it out of git when it creates the file". |
| 117 | Environment | `~/.claude/settings.json`: you, in every project on this machine. | S18 | PASS | S18:27 "You, in every project on this machine". |
| 118 | Environment | The dMoney root `.claude/settings.json` holds a `PreToolUse` hook for graphify and no permission rules. | none | PASS-REPO | repo/.claude/settings.json: "PreToolUse" ... "graphify-prehook.sh"; the file has no `permissions` key. |
| 119 | Environment | `mcp__<server>` matches every tool of a server. `mcp__<server>__<tool>` matches one tool. | S16 | PASS | S16:577-581 "`mcp__puppeteer` matches any tool provided by the `puppeteer` server ... `mcp__puppeteer__puppeteer_navigate` matches the `puppeteer_navigate` tool". |
| 120 | Environment | `mcp__jira__createJiraIssue` in `ask`. | S16 | PASS | The pattern is in S16:581. The tool name `createJiraIssue` is in S6:256. |
| 121 | Environment | `/permissions` shows and edits the rules. | S3 | PASS | S3:115 "Manage allow, ask, and deny rules ... view rules by scope, add or remove rules". |
| 122 | Environment | A local MCP server lives in `~/.claude.json`. Local settings live in `.claude/settings.local.json`. | S2 | PASS | S2:756 "MCP local-scoped servers are stored in `~/.claude.json` ... general local settings use `.claude/settings.local.json`". |
| 123 | Environment | Check table: `claude mcp list` gives `✔ Connected` for `jira`, `dmoney-db`, `playwright`, or `! Needs authentication` for Jira before sign-in. | S2 | PASS | S2:251 status words. Server names are in repo/.mcp.json. |
| 124 | Environment | Check table: `/mcp` shows each server, its state, and the Jira sign-in. | S3 | PASS | S3:109 "Manage MCP server connections and OAuth authentication ... open the interactive list". |
| 125 | Environment | Check table: `/context` shows the context grid. | S3 | PASS | S3:73 same quote as row 53. |
| 126 | Environment | Check table: `gh issue list` shows the open issues of the repository. | S11 | PASS | S11:991 "By default, this only lists open issues." |
| 127 | Practice | Exercise steps. Facts used: `list,read,utility` with 1.46.0 (S7); `claude mcp list` (S2); `/mcp` (S3); `searchJiraIssuesUsingJql` (S6); `list_all_tools` (S7); `gh issue list --state all` (S11); `/context` (S3). | S7, S2, S3, S5, S6, S11 | ADVICE | Labeled "The tutorial's exercise". Every command and tool name in it is in a source. `.claude/settings.local.json` is in S18:29. Playwright server and `Transactions` table: repo/.mcp.json, repo/dmoney-transaction-api/sequelizeModel/Transactions.js. |
| 128 | Common mistakes | Password in `.mcp.json`: use `${VAR}` in `args`, `env`, `url`, `headers`. | S2 | PASS | S2:844 field list. |
| 129 | Common mistakes | An empty default hides a missing value. Without a default, `claude mcp list` warns. An empty value counts as set. | S2 | PASS | S2:869, S2:873. |
| 130 | Common mistakes | Database server with write permissions: use `list,read,utility`. | S7 | PASS | S7:363 "enables only `list,read,utility`". The SELECT-only user is labeled as the tutorial's advice. |
| 131 | Common mistakes | Old SSE endpoint `/v1/sse` is not supported after 30 June 2026. Use the v2 URL. | S4 | PASS | S4:301. |
| 132 | Common mistakes | Jira tools missing in `claude -p`: sign in first with `/mcp` or `claude mcp login <name>`. | S2 | PASS | S2:982. |
| 133 | Common mistakes | `Bash(gh *)` in `allow` allows every `gh` command. Put the `*` after the subcommand. | S16 | PASS | S16:152 "Put the `*` after the subcommand ... `Bash(git *)` allows every git command" (same rule, applied to `gh`). |
| 134 | Common mistakes | One server under two names: keep the `.mcp.json` names so `mcp__jira` matches. | S16 | ADVICE | Labeled "The tutorial's advice". The `mcp__<server>` rule is in S16:579. |
| 135 | Key words | MCP: an open-source standard for connecting AI applications to external systems. | S1 | PASS | S1:24. |
| 136 | Key words | Scope: where Claude Code stores an MCP server and who gets it: local (default), project, or user. | S2 | PASS | S2:742-752. |
| 137 | Key words | `.mcp.json`: the project-root file for project-scoped servers. Claude Code asks you to approve them. | S2 | FAIL | The row drops the qualifier that the page and S2:805-807 give. The approval prompt is only for interactive sessions, and `claude -p` "loads project-scoped servers without asking". Fix: "...Claude Code asks you to approve them in an interactive session." |
| 138 | Key words | Variable expansion: `${VAR}` and `${VAR:-default}` in `.mcp.json`, so secrets stay in your shell and out of git. | S2 | PASS | S2:846-847. |
| 139 | Key words | `/mcp`: the session command that manages MCP connections and OAuth sign-in. | S3 | PASS | S3:109. |
| 140 | Key words | Tool search: loads only tool names and server instructions at start, and the full definitions when Claude needs them. | S2 | PASS | S2:1738. |
| 141 | Key words | Atlassian MCP Server: Atlassian's cloud MCP server for Jira and other products. It acts with your own permissions. | S4 | FAIL | "and other products" is not stated in the Jira section of the page. The page says only "a cloud-based bridge between your Atlassian Cloud site and external tools". Fix: "Atlassian's cloud-based MCP server. It connects your Atlassian Cloud site to external tools and acts with your existing permissions." |
| 142 | Key words | JQL: the Jira Query Language, which `searchJiraIssuesUsingJql` uses to search Jira work items. | S6, S19 | PASS | S19:15 "Jira Query Language (JQL)"; S6:363 "Search Jira work items using JQL." |
| 143 | Key words | Permission list: the MySQL MCP argument that sets what Claude may do. `list,read,utility` is read-only. | S7 | PASS | S7:161 "The 4th argument (permissions) controls broad access levels"; S7:363 "Read-only by default ... only `list,read,utility`". |
| 144 | Key words | `gh`: GitHub CLI, with read commands such as `gh issue view` and write commands such as `gh pr create`. | S8 | PASS | S8:3; S10:991; S15:991 "Create a pull request on GitHub." |
| 145 | Key words | Permission rule: an allow, ask, or deny entry in settings. Claude Code checks deny, then ask, then allow. | S16 | PASS | S16:56; S20:908. |
| 146 | Key words | `CLAUDE.md`: the notes file of a project. In a subdirectory it loads when Claude works on a file there. | S17 | PASS | S17:148. |

Open FAILs after round 3: 3

Script check of round 3: 146 rows, 3 FAIL rows, 5 quoted PASS phrases not found word for word in the sources.

## Verification of the open rows, facts and voices: agentic-qa / project-setup (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F2 | facts | STILL-FAIL | The lede says: "The tutorial gives each connection the least access that the work needs: read actions run without a prompt, and write actions ask you first." The page does not build this for all three connections. Only the `gh` section has `allow` rules for reads and `ask` rules for writes. The database section removes the write permissions from the list, so writes do not ask. They are not available. The Jira section only suggests `mcp__jira__createJiraIssue` in `ask`. It gives no `allow` rule for Jira reads. Fix: "The tutorial gives each connection the least access that the work needs. The `gh` rules allow reads and ask before writes. The database list allows only reads. For Jira, the tutorial suggests an `ask` rule for `createJiraIssue`." Add `<Cite n={16} />` for the allow and ask rules. |
| F137 | facts | RESOLVED | The Key words row now says "Claude Code asks you to approve them in an interactive session." S2:805 says: "Claude Code prompts for approval in interactive sessions before using project-scoped servers from `.mcp.json` files." The row now matches the source and the Technical section. |
| F141 | facts | RESOLVED | The row now says "Atlassian's cloud-based MCP server. It connects your Atlassian Cloud site to external tools and acts with your existing permissions." S4:47 says "a cloud-based bridge between your Atlassian Cloud site and compatible external tools". S4:451 and S5:179 say "with your existing permissions". "And other products" is gone. The row has no cite (see the new problem below). |
| V5 | voices | RESOLVED | The Layman panel now says: "If the variable is missing and has no default, `claude mcp list` warns you." The Technical panel says: "An unset variable with no default does not stop the config. `claude mcp list` shows a missing-variable warning." S2:869 says: "isn't set and has no default value ... reports a missing-variable warning for that server in `claude mcp list`". |
| V19 | voices | RESOLVED | The Layman panel now says "**The old Atlassian SSE address `/v1/sse`.**" The Technical row says "The old Atlassian SSE endpoint `/v1/sse`". The scope and the noun now match. The cite 4 matches. S4:301 says "After 30 June 2026, the legacy Server-Sent Events endpoint (`https://mcp.atlassian.com/v1/sse`) will no longer be supported." |

New problems in changed lines:
- Key words table, the `.mcp.json` row and the Atlassian MCP Server row (changed in diff.txt). Both rows state facts about tools but have no `<Cite>`. The rules say that every fact about a tool has a cite. Fix: add `<Cite n={2} />` to the `.mcp.json` row (S2:805). Add `<Cite n={4} />` and `<Cite n={5} />` to the Atlassian row (S4:47 and S5:179). Also say "compatible external tools" in the Atlassian row, because S4:47 says "compatible". The cite gap exists in the whole Key words table. These two changed rows are where it shows up.

Open FAILs after round 4: 2

## Verification of the open rows, facts and voices: agentic-qa / project-setup (round 5, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F2 | facts | RESOLVED | The lede (page.md:59) now says: "The tutorial gives each connection only the access that the work needs." It no longer claims reads run without a prompt and writes ask. This is the tutorial's own aim, so it needs no source. The sections support it. `gh` has allow and ask rules (page.md:478-497, with `<Cite n={16} />`). The database has a read-only list `list,read,utility` (page.md:440, `<Cite n={7} />`). Jira has the "mcp__jira__createJiraIssue in ask" suggestion (page.md:550). |
| N1 | facts | RESOLVED | The "compatible" part is fixed. S4:47 says "a cloud-based bridge between your Atlassian Cloud site and compatible external tools". The Technical text (page.md:323, with `<Cite n={4} />`) and the Key words row (page.md:709) now say "compatible external tools". The rebuttal on cites is accepted. The task rules say the Key words table has no cites by design. Each row must only restate a cited fact from the page. The `.mcp.json` row (page.md:705) restates page.md:216 and 245, and the Atlassian row restates page.md:323 and 344. |

New problems in changed lines:
- page.md:368 (Bangla panel, Jira section). The Technical panel (page.md:323) now says "compatible external tools". The Bangla panel still says "বাইরের tool" and drops "compatible". This is a dropped limit. Fix: write "compatible বাইরের tool-এর মধ্যে". The Layman panel (page.md:355, "tools like Claude Code") is not a changed line. It also does not repeat the "compatible" limit, so it can get the same fix: "compatible tools like Claude Code".

Open FAILs after round 5: 1

## Verification of the open rows, facts and voices: agentic-qa / project-setup (round 6, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| N1 | voices | RESOLVED | The Technical panel (page.md:323) says "a cloud-based bridge between your Atlassian Cloud site and compatible external tools". The Bangla panel (page.md:368) now says "আপনার Atlassian Cloud site আর compatible বাইরের tool-এর মধ্যে একটি cloud-based bridge", so the limit is kept. The Layman panel (page.md:355) now says "It connects compatible tools, such as Claude Code, to your Atlassian Cloud site", so it keeps the limit too. S4 line 47 supports the wording: "a cloud-based bridge between your Atlassian Cloud site and compatible external tools". |

New problems in changed lines:
- None. I checked these points:
  - Layman (page.md:355) "such as Claude Code": the Technical panel names Claude Code in the same section (page.md:323, "for Claude Code"). The panel adds no new name.
  - Layman "OAuth or an API token": S4 line 47 supports this, and the cite is the same as in the Technical panel.
  - Layman "Atlassian Cloud site" replaces "Jira site". It now matches the Technical panel, so the changed noun is fixed.
  - Bangla (page.md:368): the cites on the changed sentence are `<Cite n={4} />`, the same as the Technical panel's cite on that fact.
  - The `claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp` command in the Bangla panel was not changed in this round.

Open FAILs after round 6: 0

Open FAILs: 0
