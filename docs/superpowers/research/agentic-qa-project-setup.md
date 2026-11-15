# Project, Jira, GitHub & MCP Setup — research notes (2026-11-15)

## Sources
S1. What is the Model Context Protocol (MCP)? — Model Context Protocol (modelcontextprotocol.io) — https://modelcontextprotocol.io/docs/getting-started/intro — accessed 2026-11-15 — cache: mcp-intro.txt
S2. Connect Claude Code to tools via MCP — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/mcp — accessed 2026-11-15 — cache: cc-mcp.txt
S3. Commands — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/commands — accessed 2026-11-15 — cache: cc-commands.txt
S4. Atlassian MCP Server README — Atlassian (GitHub) — https://github.com/atlassian/atlassian-mcp-server — accessed 2026-11-15 — cache: tool-atlassian-mcp.txt
S5. Get started with the Atlassian MCP server — Atlassian (support.atlassian.com) — https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/ — accessed 2026-11-15 — cache: atlassian-rovo-mcp.txt
S6. Atlassian MCP server: supported tools — Atlassian (support.atlassian.com) — https://support.atlassian.com/atlassian-rovo-mcp-server/docs/supported-tools/ — accessed 2026-11-15 — cache: atlassian-rovo-tools.txt (fetched for this page)
S7. MySQL MCP Server README — berthojoris (GitHub) — https://github.com/berthojoris/mysql-mcp — accessed 2026-11-15 — cache: tool-mysql-mcp.txt
S8. GitHub CLI README — GitHub (GitHub) — https://github.com/cli/cli — accessed 2026-11-15 — cache: gh-readme.txt
S9. gh auth login — GitHub (cli.github.com) — https://cli.github.com/manual/gh_auth_login — accessed 2026-11-15 — cache: gh-auth-login.txt
S10. gh issue view — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_view — accessed 2026-11-15 — cache: gh-issue-view.txt
S11. gh issue list — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_list — accessed 2026-11-15 — cache: gh-issue-list.txt
S12. gh pr view — GitHub (cli.github.com) — https://cli.github.com/manual/gh_pr_view — accessed 2026-11-15 — cache: gh-pr-view.txt
S13. gh pr diff — GitHub (cli.github.com) — https://cli.github.com/manual/gh_pr_diff — accessed 2026-11-15 — cache: gh-pr-diff.txt
S14. gh issue create — GitHub (cli.github.com) — https://cli.github.com/manual/gh_issue_create — accessed 2026-11-15 — cache: gh-issue-create.txt
S15. gh pr create — GitHub (cli.github.com) — https://cli.github.com/manual/gh_pr_create — accessed 2026-11-15 — cache: gh-pr-create.txt
S16. Configure permissions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permissions — accessed 2026-11-15 — cache: cc-permissions.txt
S17. How Claude remembers your project — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/memory — accessed 2026-11-15 — cache: cc-memory.txt
S18. Settings files and precedence — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/settings — accessed 2026-11-15 — cache: cc-settings.txt
S19. Use advanced search with Jira Query Language (JQL) — Atlassian (support.atlassian.com) — https://support.atlassian.com/jira-software-cloud/docs/use-advanced-search-with-jira-query-language-jql/ — accessed 2026-11-15 — cache: atlassian-jql.txt (fetched in round 1)
S20. All settings — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/settings-reference — accessed 2026-11-15 — cache: cc-settings-reference.txt (added in round 2)

dMoney facts come from the public practice repo at commit 51db34a (cache: dmoney-repo/). They have no `<Cite>` on the page. The page never repeats a password, key, token, or env value from the repo; it names the variables only.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | dMoney is a mobile financial service platform made of a REST API and a web frontend. | "a mobile financial service (MFS) platform similar to bKash or Nagad, made up of a REST API and a web frontend" | dmoney-repo/README.md | |
| C2 | The backend is Node.js, Express, Sequelize, and MySQL. | "Backend: Node.js + Express + Sequelize + MySQL" | dmoney-repo/README.md | |
| C3 | The frontend is Next.js 15 with TypeScript, MUI, and Tailwind 4. | "Frontend: Next.js 15 (App Router) + TypeScript + MUI + Tailwind 4" | dmoney-repo/README.md | |
| C4 | `sql_scripts/` holds a MySQL dump of `dmoneydb` with schema and seed data. | "MySQL dump of dmoneydb (schema + seed data)" | dmoney-repo/README.md | |
| C5 | The app has bugs and flaws on purpose; do not deploy it or expose it to the internet. | "Do not deploy it to production or expose it to the internet." | dmoney-repo/README.md | |
| C6 | Prerequisites: Node.js 20.x or newer, MySQL 8.x or compatible MariaDB. | "Node.js \| 20.x or newer (CI uses 20.x)" ... "MySQL \| 8.x (or a compatible MariaDB)" | dmoney-repo/README.md | |
| C7 | SMTP is optional because OTPs are printed to the API console. Stripe is needed only for bank cash-in. | "SMTP or Gmail credentials are optional, because OTPs and reset tokens are also printed to the API console." ... "You only need a Stripe test account if you want to use the bank cash-in feature." | dmoney-repo/README.md | |
| C8 | Create the database `dmoneydb`. | "CREATE DATABASE dmoneydb;" | dmoney-repo/README.md | |
| C9 | The dump file is `sql_scripts/local-dmoneydb-202604201925.sql`. | "sql_scripts/local-dmoneydb-202604201925.sql" | dmoney-repo/README.md | |
| C10 | The dump has lowercase table names, which matters on Linux. | "The dump was exported on Windows, so its table names are lowercase" | dmoney-repo/README.md | |
| C11 | With an empty `dmoneydb`, the API creates the tables and seeds the test accounts on first start. | "If `dmoneydb` is empty, the API creates the tables and seeds the" | dmoney-repo/README.md | |
| C12 | The API needs `.env` and `.env.dev`, both copied from `.env.example`; db.js reads `.env.dev`. | "db.js reads .env.dev; everything else reads .env" | dmoney-repo/README.md | |
| C13 | The API database variables are DB_HOST, DB_NAME, DB_USER, DB_PASSWORD. | "Edit both files and set DB_HOST, DB_NAME, DB_USER, DB_PASSWORD" | dmoney-repo/README.md | |
| C14 | The API listens on PORT, default 5000; check it with GET http://localhost:5000/. | "The API listens on `PORT` from `.env` (default `5000`)." ... "To check that it is running, open `GET http://localhost:5000/`." | dmoney-repo/README.md | |
| C15 | The API dev script runs nodemon. | "npx nodemon server.js" | dmoney-repo/dmoney-transaction-api/package.json | |
| C16 | The web app `.env` has NEXT_PUBLIC_API_URL, NEXT_PUBLIC_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY. | "NEXT_PUBLIC_API_URL" ... "NEXT_PUBLIC_SECRET_KEY" ... "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" | dmoney-repo/dmoney-web-react/.env.example | Names only, no values. |
| C17 | `npm run dev` serves the web app on port 3000. | "npm run dev # http://localhost:3000" | dmoney-repo/README.md | |
| C18 | Test accounts are in the README "Test accounts" section and in `endpoints.md`. | "The API seeds these accounts on first start." ... "endpoints.md is the authoritative, up-to-date endpoint catalog (routes, curl examples, seeded test credentials)" | dmoney-repo/README.md, dmoney-repo/dmoney-transaction-api/CLAUDE.md | Page does not print them. |
| C19 | For Agent, Customer, and Merchant logins, the OTP is printed in the API console. | "When you log in as Agent, Customer or Merchant, the OTP is printed in the API console." | dmoney-repo/README.md | |
| C20 | The dMoney `.mcp.json` names the Jira server `jira` with the v1 URL. | "https://mcp.atlassian.com/v1/mcp" | dmoney-repo/.mcp.json | |
| C21 | The dMoney `.mcp.json` pins the MySQL server 1.43.2 with write permissions. | "@berthojoris/mcp-mysql-server@1.43.2" ... "list,read,utility,create,update,delete,execute" | dmoney-repo/.mcp.json | |
| C22 | The password comes from `${DMONEY_DB_PASS:-}`, with an empty default. | "${DMONEY_DB_PASS:-}" | dmoney-repo/.mcp.json | |
| C23 | The README describes the database server as read-only. | "Read-only SQL against the local dmoneydb" | dmoney-repo/README.md | Conflicts with C21: the write-enabled finding of /case-study/lessons/. |
| C24 | The README says Jira needs sign-in with `/mcp`. | "Jira needs authorising with `/mcp`" | dmoney-repo/README.md | |
| C25 | The `understand-task` and `pr-review` skills use `gh`. | "Skills that read or create issues and PRs (`understand-task`, `pr-review`)" | dmoney-repo/README.md | |
| C26 | Each project has its own CLAUDE.md. | "Each project also has a `CLAUDE.md` that gives AI assistants architecture notes and conventions." | dmoney-repo/README.md | |
| C27 | The root `.claude/settings.json` holds a PreToolUse hook (graphify) and no permission rules. | "PreToolUse" ... "graphify-prehook.sh" | dmoney-repo/.claude/settings.json | Read the whole file: no `permissions` key. |
| C28 | MCP is an open-source standard for connecting AI applications to external systems. | "MCP (Model Context Protocol) is an open-source standard for connecting AI applications to external systems." | S1 | |
| C29 | Local scope is the default; the server loads only in that project and stays private. | "Local scope is the default. A local-scoped server loads only in the project where you added it and stays private to you." | S2 | |
| C30 | Project scope: current project, shared via version control, stored in `.mcp.json` in the project root. | "Current project only \| Yes, via version control \| `.mcp.json` in project root" | S2 | |
| C31 | User scope: stored in `~/.claude.json`, available in all projects. | "User-scoped servers are stored in `~/.claude.json` and provide cross-project accessibility" ... "unless you add `--scope project` or `--scope user`" | S2 | |
| C32 | Remote server: `claude mcp add --transport http <name> <url>`. | "claude mcp add --transport http <name> <url>" | S2 | |
| C33 | Stdio server: `claude mcp add [options] <name> -- <command> [args...]`; everything after `--` goes to the server. | "claude mcp add [options] <name> -- <command> [args" ... "Everything after `--` is passed to the server untouched." | S2 | |
| C34 | Adding a project-scoped server creates or updates `.mcp.json`. | "When you add a project-scoped server, Claude Code automatically creates or updates this file" | S2 | |
| C35 | Claude Code asks for approval of `.mcp.json` servers in interactive sessions; `claude mcp reset-project-choices` resets the choices. | "Claude Code prompts for approval in interactive sessions before using project-scoped servers from `.mcp.json` files. To reset those approval choices, run `claude mcp reset-project-choices`." | S2 | |
| C36 | In `claude -p` runs, project-scoped servers load without asking. | "it loads project-scoped servers without asking" | S2 | |
| C37 | `${VAR}` and `${VAR:-default}` work in command, args, env, url, and headers. | "You can reference an environment variable in a server's `command`, `args`, `env`, `url`, or `headers` value" ... "`${VAR:-default}`: expands to the value of `VAR` if `VAR` is set, or to `default` if it is unset" | S2 | |
| C38 | An unset variable with no default: config still loads, with a warning in `claude mcp list`. | "the config still loads: Claude Code reports a missing-variable warning for that server in `claude mcp list` output" | S2 | |
| C39 | An empty string counts as set. | "If you set a variable to an empty string, it counts as set" | S2 | |
| C40 | Trust each server before you connect it. | "Verify you trust each server before connecting it." | S2 | |
| C41 | `claude mcp list` shows a health status per server. | "`claude mcp list` shows a health status next to each server it lists, such as `✔ Connected`, `! Needs authentication`, or `✘ Failed to connect`." | S2 | |
| C42 | Pending approval marks an unapproved `.mcp.json` server. | "a project-scoped server from `.mcp.json` that you haven't approved yet" | S2 | |
| C43 | `claude mcp get <name>` checks one server. | "To check that Claude Code connected, run `claude mcp get <name>`" | S2 | |
| C44 | Claude Code supports OAuth 2.0 for remote servers. | "Claude Code supports OAuth 2.0 for secure connections." | S2 | |
| C45 | Sign in from an interactive session with `/mcp` or `claude mcp login <name>`; a `claude -p` run cannot do the OAuth flow. | "complete the sign-in from an interactive session first: run `/mcp` in the session, or `claude mcp login <name>` in your shell" | S2 | |
| C46 | `/mcp` manages MCP connections and OAuth. | "Manage MCP server connections and OAuth authentication." ... "pass `reconnect`, `enable`, or `disable`" | S3 | |
| C47 | Tool search is on by default and defers tool definitions; only names and server instructions load at start. | "Tool search keeps MCP context usage low by deferring tool definitions until Claude needs them. Only tool names and server instructions load at session start" ... "Tool search is enabled by default" | S2 | |
| C48 | Warning above 10,000 tokens of MCP output; limit 25,000 by default; `MAX_MCP_OUTPUT_TOKENS` changes it. | "Claude Code displays a warning when MCP tool output exceeds 10,000 tokens and limits output to 25,000 tokens by default" ... "To change the token limit, set the `MAX_MCP_OUTPUT_TOKENS` environment variable" | S2 | |
| C49 | `/context` shows context usage as a colored grid. | "Visualize current context usage as a colored grid." | S3 | |
| C50 | The Atlassian MCP Server is a cloud-based bridge; OAuth 2.1 or API tokens; actions respect existing access. | "The official Atlassian MCP Server is a cloud-based bridge between your Atlassian Cloud site and compatible external tools." ... "Authentication uses OAuth 2.1 or API tokens, so every action respects the user's existing access controls." | S4 | |
| C51 | v2 URL is recommended for new setups. | "New setups should use `https://mcp.atlassian.com/v2/mcp`" | S4 | |
| C52 | Claude Code command for Atlassian, then `/mcp` to sign in. | "`claude mcp add --transport http atlassian https://mcp.atlassian.com/v2/mcp`, then run `/mcp` in a session to authenticate" | S4 | |
| C53 | v1 `/v1/mcp` is still supported and v1 connections use v2 tools. | "The v1 endpoints (`https://mcp.atlassian.com/v1/mcp/authv2` and `https://mcp.atlassian.com/v1/mcp`) remain supported, and existing v1 connections automatically start to expose and use v2 tools." | S4 | |
| C54 | The SSE endpoint `/v1/sse` is not supported after 30 June 2026. | "After 30 June 2026, the legacy Server-Sent Events endpoint (`https://mcp.atlassian.com/v1/sse`) will no longer be supported." | S4 | |
| C55 | Access only to data the user can already view. | "Access is granted only to data that the user already has permission to view in Atlassian Cloud." | S4 | |
| C56 | MCP clients act with your existing permissions. | "MCP clients can perform actions on all connected products (such as Jira, Confluence, Bitbucket) with your existing permissions." | S5 | |
| C57 | Sign in when the client starts the Atlassian authentication flow. | "After setup, sign in when your agent or MCP client starts the Atlassian authentication flow." | S5 | |
| C58 | Jira permission groups: read_jira, write_jira, search_jira; delete_jira and manage_jira are off by default. | "read_jira · write_jira · search_jira" ... "delete_jira and manage_jira are disabled by default" | S4 | |
| C59 | The server exposes the most-used tools and lets the client discover the rest. | "exposes a small set of the most-used tools and lets the client discover the rest on demand" | S4 | |
| C60 | `searchJiraIssuesUsingJql` searches Jira work items with JQL. | "searchJiraIssuesUsingJql (Primary)" ... "Search Jira work items using JQL." | S6 | |
| C61 | `getJiraIssue` gets a work item by ID or key. | "getJiraIssue (Primary)" ... "Get a Jira work item by ID or key." | S6 | |
| C62 | `listJiraProjects` lists the Jira spaces visible to the user. | "listJiraProjects" ... "Get Jira spaces visible to the current user." | S6 | |
| C63 | `createJiraIssue` creates a work item. | "createJiraIssue (Primary)" ... "Create a new Jira work item." | S6 | |
| C64 | `addOrEditJiraIssueComment` adds or edits a comment. | "addOrEditJiraIssueComment (Primary)" ... "Add a comment, or edit an existing one." | S6 | |
| C65 | `transitionJiraIssue` moves a work item to a new status. | "transitionJiraIssue (Primary)" ... "Transition an work item to a new status" | S6 | |
| C66 | Each tool use is recorded in the organization audit log. | "Every time a tool is used through the Atlassian MCP Server, an event is recorded in your organization's audit log." | S4 | |
| C67 | Atlassian advises human confirmation for high-impact actions. | "For any high-impact or destructive action, require human confirmation" | S4 | |
| C68 | Example Jira request from the README. | "Find all open bugs in Project Alpha." | S4 | |
| C69 | The 4th argument sets permissions; the optional 5th sets categories. | "The 4th argument (permissions) controls broad access levels, while the 5th argument (categories) fine-tunes which specific tools are available." | S7 | Counting `-y` as the first argument. |
| C70 | Permission meanings: read = SELECT; create = INSERT; update = UPDATE; delete = DELETE; execute = custom INSERT/UPDATE; ddl = CREATE/ALTER/DROP tables. | "SELECT queries, read data" ... "INSERT new records" ... "UPDATE existing records" ... "DELETE records" ... "Execute custom INSERT/UPDATE SQL" ... "CREATE/ALTER/DROP tables" | S7 | |
| C71 | `list` lists databases, tables, schemas; `utility` is connection testing. | "List databases, tables, schemas" ... "Connection testing, diagnostics" | S7 | |
| C72 | Since v1.44.0, no permissions means only list,read,utility. | "Changes in v1.44.0" ... "with no permissions and no categories, the server now enables only `list,read,utility` (previously every tool)" | S7 | dMoney pins 1.43.2 (C21). |
| C73 | `WITH` (CTE) queries need `execute`. | "`WITH` (CTE) queries are supported and, like derived tables, need `execute` in read queries." | S7 | |
| C74 | `MCP_REQUIRE_READONLY_DB_USER=true` stops startup if the MySQL user can write. | "`true` makes startup fail if the MySQL user can write" | S7 | |
| C75 | Call `list_all_tools` first to see the enabled tools and profile. | "call `list_all_tools` first" ... "enabled/disabled status, active permission/category profile" | S7 | |
| C76 | The README uses a read-only MySQL account in its HTTP example. | "Read-only MySQL account" | S7 | |
| C77 | gh is GitHub on the command line, for macOS, Windows, and Linux. | "GitHub CLI, or the gh CLI, is GitHub on the command line." ... "with support for macOS, Windows, and Linux" | S8 | |
| C78 | Install options: Homebrew (macOS), Debian/Ubuntu and RPM packages (Linux), WinGet (Windows). | "Debian, Raspberry Pi, Ubuntu" ... "Amazon Linux, CentOS, Fedora, openSUSE, RHEL, SUSE" | S8 | Homebrew and WinGet are link labels in the same list. |
| C79 | GitHub-hosted runners have gh pre-installed. | "have the GitHub CLI pre-installed, which is updated weekly" | S8 | |
| C80 | `gh auth login` uses a web browser flow by default and stores the token in the system credential store. | "The default authentication mode is a web-based browser flow." ... "authentication token will be stored securely in the system credential store" | S9 | |
| C81 | `--with-token` reads a classic token from standard input; GH_TOKEN is favoured for fine-grained tokens. | "use --with-token to pass in a personal access token (classic) on standard input" ... "Favour setting GH_TOKEN for fine-grained personal access token usage." | S9 | |
| C82 | `gh issue view` shows the title, body, and other information; `--comments` shows comments. | "Display the title, body, and other information about an issue." ... "View issue comments" | S10 | |
| C83 | `gh issue list` lists only open issues by default; `--state` and `--label` filter. | "List issues in a GitHub repository. By default, this only lists open issues." ... "Filter by state: {open\|closed\|all}" ... "Filter by label" | S11 | |
| C84 | `gh pr view` shows the title, body, and other information of a PR. | "Display the title, body, and other information about a pull request." | S12 | |
| C85 | `gh pr diff` shows changes; `--name-only` lists only file names. | "View changes in a pull request." ... "Display only names of changed files" | S13 | |
| C86 | `gh issue create` creates an issue; `--title` supplies a title. | "Create an issue on GitHub." ... "Supply a title. Will prompt for one otherwise." | S14 | |
| C87 | `gh pr create` creates a PR; `--draft` marks it a draft. | "Create a pull request on GitHub." ... "Mark pull request as a draft" | S15 | |
| C88 | Rules are evaluated deny, then ask, then allow. | "Rules are evaluated in order: deny, then ask, then allow." | S16 | |
| C89 | Put `*` after the subcommand: `Bash(git *)` allows every git command. | "`Bash(git log *)` allows only `git log` commands, and `Bash(git *)` allows every git command." | S16 | |
| C90 | A trailing `*` with a space also matches the bare command. | "A `*` at the end, with a space before it, also matches the bare command." | S16 | |
| C91 | Ask rules apply when any subcommand matches. | "Deny and ask rules apply when any subcommand matches them" | S16 | |
| C92 | `mcp__<server>` matches all tools of a server; `mcp__<server>__<tool>` matches one tool. | "`mcp__puppeteer` matches any tool provided by the `puppeteer` server" ... "`mcp__puppeteer__puppeteer_navigate` matches the `puppeteer_navigate` tool provided by the `puppeteer` server" | S16 | |
| C93 | `/permissions` manages allow, ask, and deny rules. | "Manage allow, ask, and deny rules for tool permissions." | S3 | |
| C94 | CLAUDE.md files in subdirectories load on demand, when Claude reads, writes, or edits a file there. | "Files in subdirectories load on demand." ... "Claude Code loads each one once Claude reads, writes, or edits another file in that subdirectory." | S17 | |
| C95 | `/memory` edits CLAUDE.md files. | "Edit `CLAUDE.md` files" | S3 | |
| C96 | `.claude/settings.json` is shared: commit it. `.claude/settings.local.json` is personal and kept out of git when Claude Code creates it. `~/.claude/settings.json` is for every project. | "Everyone working in the folder that contains it. In a git repository, commit it so teammates get it" ... "Claude Code keeps it out of git when it creates the file; if you create it by hand, add it to `.gitignore` yourself" ... "You, in every project on this machine" | S18 | |
| C97 | MCP local scope (`~/.claude.json`) differs from local settings (`.claude/settings.local.json`). | "MCP local-scoped servers are stored in `~/.claude.json` (your home directory), while general local settings use `.claude/settings.local.json`" | S2 | |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F75 | Fixed. The README lists only `playwright` and `jira` as the project servers (README: "`playwright`, `jira` \| Project MCP servers"), and calls a separate user-level `dmoneydb` server read-only (README: "`dmoneydb` \| User-level MCP server \| **Read-only** SQL against the local `dmoneydb`"). The page now says that the README does not describe the project server `dmoney-db`. Same fix in the Layman and Bangla panels. |
| facts | F86 | Fixed. The read-only example now pins 1.46.0. A new bullet says that v1.43.3 and v1.43.4 tightened the permission checks (S7: "`EXPLAIN ANALYZE` runs the statement it wraps (MySQL 8.0.18+), so it now requires that statement's permission"), and the `WITH` bullet now says "From v1.44.0" (S7, under "Changes in v1.44.0"). The Layman, Bangla, and Practice text follow. The version 1.46.0 is in S7 ("Security changes in v1.46.0"); the npm registry also listed 1.46.0 as `latest` on 2026-11-15. |
| facts | F134 | Fixed: added S19 (Atlassian, "Use advanced search with Jira Query Language (JQL)"). The tools table and Key words now say "the Jira Query Language". |
| voices | V3 | Fixed: "It runs on port 5000 by default." |
| voices | V4 | Fixed: the Bangla says by default. |
| voices | V5 | Fixed: "In a normal, interactive session … A `claude -p` run does not ask." |
| voices | V6 | Fixed: "Sign-in uses OAuth." |
| voices | V9 | Fixed: "support করা হয় না". |
| voices | V10 | Fixed: "The permission list is the first lock. This user is a second lock." |
| voices | V12 | Fixed: "lists the open issues by default". |
| voices | V14 | Fixed: "Claude Code keeps it out of git when it creates it." |
| voices | V15 | Fixed: the Bangla says the same. |
| voices | V18 | Fixed: "It is not supported after 30 June 2026." |
| voices | V19 | Fixed: the Bangla says not supported. |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | JQL is the Jira Query Language. | "You can use the Jira Query Language (JQL) to specify criteria that cannot be defined in the quick or basic searches." | S19 | cache: atlassian-jql.txt |
| R2 | Versions 1.43.3 and 1.43.4 tightened the permission checks; since v1.43.4, `EXPLAIN ANALYZE` needs the permission of the statement it wraps. | "**Security changes in v1.43.4:** - `EXPLAIN ANALYZE` runs the statement it wraps (MySQL 8.0.18+), so it now requires that statement's permission" | S7 | |
| R3 | From v1.44.0, `WITH` (CTE) queries are supported and need `execute` in read queries. | "**Changes in v1.44.0 (review before upgrading):** … `WITH` (CTE) queries are supported and, like derived tables, need `execute` in read queries." | S7 | |
| R4 | The dMoney README lists `playwright` and `jira` as the project servers and calls a user-level `dmoneydb` server read-only. | "`playwright`, `jira` \| Project MCP servers" … "`dmoneydb` \| User-level MCP server \| **Read-only** SQL against the local `dmoneydb`" | dMoney README at 51db34a | no `<Cite>`, as for every dMoney fact |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F83 | Fixed: "with no permissions and no categories". |
| facts | F106 | Fixed: added S20, which shows the `permissions` object with `allow`, `ask`, and `deny`; the example is labelled as the tutorial's own. |
| voices | V3 | Fixed: "For an Agent, Customer, or Merchant login". |
| voices | V4 | Fixed: the Bangla names the same three roles. |
| voices | V6 | Fixed: "Default ছাড়া কোনো variable set না থাকলে". |
| voices | V7 | Fixed: "the tool names and server instructions"; deleted the gloss of context. |
| voices | V11 | Fixed: "records this finding". |
| voices | V13 | Fixed: "in the system credential store". |
| voices | V19 | Fixed: "in the skills, agents, and rules". |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | The `permissions` object of a settings file takes `allow`, `ask`, and `deny` arrays. | "**Type**: object with `allow`, `ask`, `deny`, …" and the example `"ask": ["Bash(git push *)"]` | S20 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F2 | Fixed: the lede now says that the tutorial gives each connection the least access (read actions run without a prompt, write actions ask first); this is the setup that the page builds. |
| facts | F137 | Fixed: "in an interactive session". |
| facts | F141 | Fixed: "Atlassian's cloud-based MCP server. It connects your Atlassian Cloud site to external tools and acts with your existing permissions." |
| voices | V5 | Fixed: "If the variable is missing and has no default". |
| voices | V19 | Fixed: "The old Atlassian SSE address". |

## Round 4 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 4 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F2 | Fixed: the lede now says only "The tutorial gives each connection only the access that the work needs." The page shows how for each one: `gh` allow and ask rules, a read-only permission list for the database, and least privilege with an ask rule for Jira. |
| facts | N1 | Fixed in part: "compatible external tools" (S4: "a cloud-based bridge between your Atlassian Cloud site and compatible external tools") in the Technical panel and the Key words row. Rebutted in part: by the page rules (`tests/agentic-qa.test.ts` and the design spec), Key words rows have no cites; each row restates the page, and the page cites the fact in its section. |

## Round 5 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 5 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| voices | N1 | Fixed: the Layman panel says "compatible tools, such as Claude Code" and "your Atlassian Cloud site"; the Bangla panel says "compatible বাইরের tool". |
