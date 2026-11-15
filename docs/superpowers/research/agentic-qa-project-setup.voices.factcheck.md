# Voices fact check: Project, Jira, GitHub & MCP Setup

Page: `content/agentic-qa/project-setup.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-project-setup.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / project-setup (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | The practice project | Layman | PASS | Left out: the stack, "do not deploy to production", and the commit `51db34a`. The glosses "(the server that does the work)" and "(the pages that people use)" explain terms and add no fact. |
| 2 | The practice project | Bangla | PASS | Left out: the "Where these facts come from" detail and the "three connections in order of risk" list. The Technical panel gives the stack in a table, and Bangla puts it in bullets. |
| 3 | Install and run dMoney | Layman | FAIL | "Start the API with `npm run dev`. It runs on port 5000." The Technical panel says the API listens on `PORT`, **default** 5000. The Layman sentence drops "default", so it says more. Fix: "It runs on port 5000 by default." |
| 4 | Install and run dMoney | Bangla | FAIL | "এটি port 5000-এ চলে।" It drops "default" in the same way. Fix: "ডিফল্টভাবে এটি port 5000-এ চলে।" (`PORT` can change it.) |
| 5 | MCP scopes and .mcp.json | Layman | FAIL | "Claude Code asks you to approve each server from `.mcp.json` before it uses it." The Technical panel limits this to an interactive session. In a `claude -p` run, Claude Code loads the servers without asking. The Layman sentence drops this limit, so it is now false for `claude -p`. Fix: "In a normal (interactive) session, Claude Code asks you to approve each server from `.mcp.json`. A `claude -p` run does not ask." Other details left out: the stored-in paths and `--scope project` creating the file. "open standard" leaves out "-source". The gloss for environment variable is fine. |
| 5b | MCP scopes and .mcp.json | Bangla | FAIL | "Variable না থাকলে `claude mcp list` warning দেখায়" comes right after "`${VAR}` বা `${VAR:-default}`". The Technical panel gives the warning only for an unset variable **with no default**. As written, the sentence also covers `${VAR:-default}`, and that is wrong. Fix: "default ছাড়া `${VAR}` set না থাকলে `claude mcp list` warning দেখায়।" |
| 6 | Check servers, sign in, and watch the context | Layman | FAIL | "Sign-in uses OAuth (you log in in the browser and give access)." The Technical panel does not say that the user logs in in a browser or gives access. This is an added explanation of the flow. Fix: "Sign-in uses OAuth." and remove the brackets. |
| 6b | Check servers, sign in, and watch the context | Layman | FAIL | "Claude loads only the tool names at the start." The Technical panel says tool names **and server instructions** load at the start. "Only the tool names" changes the fact. Fix: "Claude loads only the tool names and server instructions at the start." The gloss "(its working memory for the session)" and "is limited" are not in the Technical panel, but they only explain the term. |
| 7 | Check servers, sign in, and watch the context | Bangla | PASS | Left out: `reconnect`/`enable`/`disable`, `MAX_MCP_OUTPUT_TOKENS`, and "run `/context` after you connect a server". Cites match the Technical panel. |
| 8 | Jira through the Atlassian MCP server | Layman | PASS | Left out: v1 connections use the v2 tools, the SSE endpoint, the permission group names, and the audit log. "Jira site" is narrower than "Atlassian Cloud site", and "still works" is a little looser than "still supported". Both are acceptable. The gloss "(Jira's query language)" explains a term. |
| 9 | Jira through the Atlassian MCP server | Bangla | FAIL | "পুরোনো SSE endpoint `/v1/sse` 30 June 2026-এর পরে আর চলে না।" The Technical panel says the endpoint is "not supported after 30 June 2026". "আর চলে না" (no longer works) is stronger than "not supported". Fix: "30 June 2026-এর পরে আর support করা হয় না।" Left out: `listJiraProjects`, the permission groups `read_jira`/`write_jira`/`search_jira`, the audit log, and "practise on a test project". |
| 10 | The test database through MySQL MCP | Layman | FAIL | "Then even a wrong setting cannot change data." The Technical panel only says the permission list is the first lock and a SELECT-only user is the second. It does not say that data can never change. This sentence is an added, stronger claim. Fix: "The permission list is the first lock. This user is a second lock." Other details left out: the version pin, the v1.44.0 default, the `list_all_tools` tip, and `ddl` in the example list. "Mistake" stands for "finding". This is acceptable. |
| 11 | The test database through MySQL MCP | Bangla | PASS | Left out: the version-1.44.0 default, the JSON example, and `Execute` details. All facts and cites match the Technical panel. |
| 12 | GitHub through the gh CLI | Layman | FAIL | "`gh issue list` lists the open issues." The Technical panel says the default is open issues only, and `--state all` shows more. The Layman sentence drops "by default". Fix: "`gh issue list` lists the open issues by default." |
| 12b | GitHub through the gh CLI | Layman | FAIL | "it stores the token safely on your computer." The Technical panel says only that the token is stored in the system credential store. "Safely" is an added claim. Fix: "it stores the token in the system credential store." Left out: install methods, `--with-token`/`GH_TOKEN`, `--name-only`, `--draft`, the "put `*` after the subcommand" rule, and the ask-rule-in-chained-command rule. |
| 13 | GitHub through the gh CLI | Bangla | PASS | Left out: install methods, `--with-token`, the trailing ` *` rule, the JSON example, and the chained-command rule. All facts and cites match the Technical panel. |
| 14 | The Claude environment for the project | Layman | FAIL | "`.claude/settings.local.json` is only for you. It stays out of git." The Technical panel says "Claude Code keeps it out of git **when it creates it**". The Layman sentence drops that condition and says more. Fix: "Claude Code keeps it out of git when it creates it." Left out: the `PreToolUse` hook, the check table, and "do not mix up the two kinds of local". |
| 15 | The Claude environment for the project | Bangla | FAIL | "Claude Code এটি git-এর বাইরে রাখে।" It drops "when it creates it" in the same way. Fix: "Claude Code ফাইলটি তৈরি করলে এটি git-এর বাইরে রাখে।" Left out: "for graphify" and the check table. |
| 16 | Practice | Layman | PASS | Left out: the exact prompts, the `settings.local.json` location, `--state all`, and "check one key" details. Steps match the Technical panel. |
| 17 | Practice | Bangla | PASS | Left out: the exact prompt texts and the `settings.local.json` location. Steps and cites match. "প্রশ্ন ছাড়াই চলবে" is a little firmer than "should run", but it is acceptable. |
| 18 | Common mistakes | Layman | FAIL | "The old Jira address `/v1/sse`. It stops working after 30 June 2026." The Technical panel says "not supported after 30 June 2026". "Stops working" is stronger. Fix: "It is not supported after 30 June 2026." Left out: the `args`/`env`/`url`/`headers` list, `claude mcp login`, and the `mcp__jira` match reason. |
| 19 | Common mistakes | Bangla | FAIL | "30 June 2026-এর পরে এটি চলে না" is stronger than "not supported". Fix: "30 June 2026-এর পরে এটি support করা হয় না।" The other rows match the Technical panel. |

Bangla notes:
- Numbers are mixed in style. "৫টি" uses Bengali digits in Practice step 4, while all other numbers use Latin digits (for example 10,000, 5000, 20.x). Choose one style.
- "আর চলে না" and "চলে না" for "not supported" (rows 9 and 19) read as "does not work". See the fixes above.
- Hyphens between English words and Bangla suffixes are present throughout (for example "README-র", "Tutorial-এর", "Practice project-টির"). No translated commands, flags, paths, or product names. The reader is addressed as আপনি. The Bangla reads naturally. I found no other issues.

Open FAILs after round 1: 11

Script check of round 1: 19 rows, 11 FAIL rows.

## Voices fact check: agentic-qa / project-setup (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | The practice project | Layman | PASS | Left out: the stack list, the "REST API" and "Next.js" names, and the commit `51db34a`. "Never put it on the internet" matches "do not expose it to the internet". |
| 2 | The practice project | Bangla | PASS | Left out: nothing that changes the meaning. The stack is kept inside the bullets. |
| 3 | Install and run dMoney | Layman | FAIL | "The login code shows in the API console." The Technical panel says the OTP shows in the console "for an Agent, Customer, or Merchant login". Layman drops that limit, so it reads as if every login does this. Fix: "For an Agent, Customer, or Merchant login, the code shows in the API console." |
| 4 | Install and run dMoney | Bangla | FAIL | "Login-এর OTP API console-এ দেখা যায়।" It drops the same limit (only Agent, Customer, and Merchant logins). Fix: "Agent, Customer বা Merchant login-এর OTP API console-এ দেখা যায়।" |
| 5 | MCP scopes and .mcp.json | Layman | PASS | Left out: the transports, `reset-project-choices`, the `${VAR:-default}` form, and the list of fields where `${}` works. "If the variable is missing, `claude mcp list` warns you" drops "with no default". It follows "Write `${VAR}` instead", which has no default, so it stays true there. |
| 6 | MCP scopes and .mcp.json | Bangla | FAIL | "Variable না থাকলে `claude mcp list` warning দেয়" comes right after "`${VAR}` বা `${VAR:-default}` লিখুন". The Technical panel gives the warning only for an unset variable with no default, so this now covers the `:-default` form too. Fix: "default ছাড়া variable set না থাকলে `claude mcp list` warning দেখায়।" |
| 7 | Check servers, sign in, and watch the context | Layman | FAIL | "Claude loads only the tool names at the start, and the full tool details when it needs them." The Technical panel says "only tool names and server instructions" load at session start. Layman leaves out the server instructions, so "only the tool names" is wrong. Fix: "Claude loads only the tool names and server instructions at the start." Also, "context … is limited" is only implied by the Technical panel. Not marked as a FAIL. |
| 8 | Check servers, sign in, and watch the context | Bangla | PASS | Left out: nothing that changes the meaning. It keeps the 10,000 and 25,000 token numbers and the `claude mcp login` command. It leaves out `MAX_MCP_OUTPUT_TOKENS` and `reconnect`, `enable`, `disable`. |
| 9 | Jira through the Atlassian MCP server | Layman | PASS | Left out: the tool names, `claude mcp login`, the SSE sunset date, the permission group names, and the audit log. "Connects tools like Claude Code to your Jira site" narrows "Atlassian Cloud site and external tools". Claude Code appears in the Technical command, so I did not mark a FAIL. |
| 10 | Jira through the Atlassian MCP server | Bangla | PASS | Left out: "most-used tools plus discovery", `listJiraProjects`, `search_jira`, and `read_jira`/`write_jira`, and the audit log. |
| 11 | The test database through MySQL MCP | Layman | FAIL | "The [What to Fix in the Setup] page records this mistake." The Technical panel says the page "records this finding". It does not call the setup a mistake, so "mistake" is stronger. Fix: "records this finding". |
| 12 | The test database through MySQL MCP | Bangla | PASS | Left out: the permission table rows, the `EXPLAIN ANALYZE` detail, the v1.44.0 default for a server with no list, and the "SELECT-only user is the second lock" wording. It keeps the version numbers and `list_all_tools`. |
| 13 | GitHub through the gh CLI | Layman | FAIL | "It … stores the token safely on your computer." The Technical panel says the token is stored "in the system credential store". It makes no claim about safety. Fix: "stores the token in the system credential store." |
| 14 | GitHub through the gh CLI | Bangla | PASS | Left out: the install options, `--with-token`, the `--draft` detail for `gh pr create` (it is kept), the JSON example, and the chained-command rule. |
| 15 | The Claude environment for the project | Layman | PASS | Left out: the "local" vs "local" warning, the check table's expected outputs, and the `PreToolUse` hook. |
| 16 | The Claude environment for the project | Bangla | PASS | Left out: the check table's expected outputs and the example `mcp__jira__createJiraIssue` in `ask`. |
| 17 | Practice | Layman | PASS | Left out: the version change to 1.46.0, the exact prompts, the `.claude/settings.local.json` file for the rules, and the "if a write tool shows as enabled" check. |
| 18 | Practice | Bangla | PASS | Left out: the version change to 1.46.0 and the exact prompt wording. The five newest issues, project QA, the `Transactions` table, and the "Do not submit" step are all in the Technical panel. |
| 19 | Common mistakes | Layman | FAIL | "Use the names from `.mcp.json` everywhere." The Technical panel limits this to "the skills, agents, and rules". "Everywhere" widens the scope. Fix: "use the names from `.mcp.json` in skills, agents, and rules." |
| 20 | Common mistakes | Bangla | PASS | Left out: nothing that changes the meaning. |

Bangla notes:
- Row 4 and row 6 are FAILs on meaning only. The Bangla itself reads well.
- "হারানো password" in the Common mistakes bullet is unnatural. "হারানো" means "lost". Use "না থাকা (missing) মান" or "অনুপস্থিত password".
- Section 2 uses "ডিফল্টভাবে", while sections 3, 4, 5, 6 and 7 use "default-ভাবে". Pick one form.
- The Bangla addresses the reader as আপনি. No command, flag, path or product name is translated. I found no missing hyphens before a Bangla suffix.

Open FAILs after round 2: 7

Script check of round 2: 20 rows, 7 FAIL rows.

## Voices fact check: agentic-qa / project-setup (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | The practice project | Layman | PASS | The Layman panel leaves out the stack names, Next.js 15 and so on, the `dmoneydb` name, and the commit `51db34a`. |
| 2 | The practice project | Bangla | PASS | The Bangla panel leaves out the callout about the commit, the risk order and the skills used with `gh`. |
| 3 | Install and run dMoney | Layman | PASS | The Layman panel leaves out the dump file name, the `db.js`/`.env.dev` detail, the `DB_*` values, the `NEXT_PUBLIC_*` names, and the Stripe and `GET /` checks. |
| 4 | Install and run dMoney | Bangla | PASS | The Bangla panel leaves out the `DB_HOST` list and the `GET http://localhost:5000/` check. |
| 5 | MCP scopes and .mcp.json | Layman | FAIL | The sentence is "If the variable is missing, `claude mcp list` warns you." The Technical panel limits this to "An unset variable with no default". The Layman sentence drops "with no default", so it says more. With a default, the Technical panel gives no warning. Fix: "If the variable is missing and has no default, `claude mcp list` warns you." |
| 6 | MCP scopes and .mcp.json | Bangla | PASS | The Bangla panel leaves out the table with the `--scope` flags, the list of what `--scope project` does, `reset-project-choices`, and the `command`/`args`/`env`/`url`/`headers` fields. |
| 7 | Check servers, sign in, and watch the context | Layman | PASS | The Layman panel leaves out the `✔`/`!`/`✘` status text, `reconnect`/`enable`/`disable`, `claude mcp login`, the 25,000-token limit, and `MAX_MCP_OUTPUT_TOKENS`. The sentence "Claude's context is limited" is only implied by the "context cost" text of the Technical panel. |
| 8 | Check servers, sign in, and watch the context | Bangla | PASS | The Bangla panel leaves out `reconnect`/`enable`/`disable`, the advice to run `/context` after a connect, and the advice to ask for "a short result" for context room. |
| 9 | Jira through the Atlassian MCP server | Layman | PASS | The Layman panel leaves out the OAuth 2.1 version, the v1 SSE end date, the tool names, `listJiraProjects` by name, the `read_jira`/`write_jira`/`search_jira` groups, and the audit log. "Jira site" and "in Jira" are narrower than the Technical "Atlassian Cloud", but they do not say more. |
| 10 | Jira through the Atlassian MCP server | Bangla | PASS | The Bangla panel leaves out `listJiraProjects`, `search_jira`/`read_jira`/`write_jira`, the audit log, and the advice to keep the name `jira`. |
| 11 | The test database through MySQL MCP | Layman | PASS | The Layman panel leaves out the server package name and version 1.43.2, the pinned-version point, the `EXPLAIN ANALYZE` detail, and `list_all_tools`. |
| 12 | The test database through MySQL MCP | Bangla | PASS | The Bangla panel leaves out the "second lock" framing and the `EXPLAIN ANALYZE` detail. |
| 13 | GitHub through the gh CLI | Layman | PASS | The Layman panel leaves out the install options, `--with-token` and `GH_TOKEN`, `--draft`, the `*` placement rule, the JSON example, and the chained-command point for ask rules. |
| 14 | GitHub through the gh CLI | Bangla | PASS | The Bangla panel leaves out the install options, `--with-token`, the trailing ` *` rule, the `permissions` object in the settings file, and the chained-command point for ask rules. |
| 15 | The Claude environment for the project | Layman | PASS | The Layman panel leaves out the `PreToolUse` hook for graphify, the "two kinds of local" warning, and the expected output of each check. |
| 16 | The Claude environment for the project | Bangla | PASS | The Bangla panel leaves out the check table and its expected results. |
| 17 | Practice | Layman | PASS | The Layman panel leaves out the exact prompts, the `DMONEY_DB_*` names, and the `.claude/settings.local.json` file. |
| 18 | Practice | Bangla | PASS | The Bangla panel leaves out the exact prompts, the `.claude/settings.local.json` file, the browser prompt link, and the "step 2 did not take effect" note. |
| 19 | Common mistakes | Layman | FAIL | The sentence is "**The old Jira address `/v1/sse`.**" The Technical panel says "The old Atlassian SSE endpoint `/v1/sse`". "Jira address" changes the noun and narrows the scope, because this is the Atlassian MCP SSE endpoint. Fix: "**The old Atlassian SSE address `/v1/sse`.**" |
| 20 | Common mistakes | Bangla | PASS | The Bangla panel leaves out the `args`/`env`/`url`/`headers` fields, "An empty value counts as set", and the "so `mcp__jira` matches" reason. |

Bangla notes:
- Section 2 uses "ডিফল্টভাবে", but the other sections write "default-ভাবে". The spelling of "default" is not the same across the panels.
- The words "নির্দ্বিধায়" (section 7) and "ফাইলটি" (section 8, among English "file") are a little formal, and the mix of Bangla and English words differs from the rest of the page. They read acceptably.
- All Bangla panels address the reader as আপনি. I found no translated command, flag, path, or product name. I found no missing hyphen between an English word and a Bangla suffix.

Open FAILs after round 3: 2

Script check of round 3: 20 rows, 2 FAIL rows.

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
