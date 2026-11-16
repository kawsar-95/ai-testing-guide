# Fact check: Claude for Professional QA

Page: `content/agentic-qa/claude-for-qa.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-claude-for-qa.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. After each full round, a script recounted the FAIL rows and looked each quoted phrase of a PASS up in the sources; its result is the line under the round.

## Fact check: agentic-qa / claude-for-qa (round 1, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | What Claude Code is | Claude Code is an agentic coding tool that reads the codebase, edits files, runs commands | S1 | PASS | S1: "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands" |
| 2 | What Claude Code is | Runs in the terminal, IDE extensions, a desktop app, and on the web | S1 | PASS | S1: "Available in your terminal, IDE, desktop app, and browser." |
| 3 | What Claude Code is | Web surface runs in the browser with no local setup and can work on repos you do not have locally | S1 | PASS | S1: "Run Claude Code in your browser with no local setup... work on repos you don't have locally" |
| 4 | What Claude Code is | On Ubuntu or Debian the desktop app is in beta | S1 | PASS | S1: "On Ubuntu or Debian, where the app is in beta" |
| 5 | What Claude Code is | The agentic loop, the tools, and the capabilities are the same on every surface | S2 | FAIL | S2 says only: "the underlying agentic loop is identical". It does not say that tools and capabilities are the same. Fix: "The underlying agentic loop is identical on every surface." |
| 6 | What Claude Code is | A chat assistant only gives text that you apply yourself; an agentic tool acts | S3 | PASS | S3: "as opposed to chat-based assistants that only respond with text you must apply yourself. Claude Code is agentic because it has tools that let it act" |
| 7 | What Claude Code is | Claude can run any command you could run: build tools, git, package managers, scripts | S2 | PASS | S2: "Any command you could run: build tools, git, package managers, system utilities, scripts." |
| 8 | What Claude Code is | Claude sees the git branch, uncommitted changes, recent commits | S2 | PASS | S2: "Your git state. Current branch, uncommitted changes, and recent commit history." |
| 9 | What Claude Code is | Table, left column: Claude can read code and tests, run the test suite and read errors, edit test and source files, run any shell command | none | FAIL | The table states tool abilities but has no cite. Fix: add `<Cite n={2} />`. S2: "Execution: Run shell commands, start servers, run tests, use git" and "File operations: Read files, edit code". |
| 10 | What Claude Code is | Table, right column ("So you must") | none | ADVICE | The callout labels it the tutorial's own advice. |
| 11 | The agentic loop and the harness | Claude works in three phases: gather context, take action, verify results | S2 | PASS | S2: "it works through three phases: **gather context**, **take action**, and **verify results**." |
| 12 | The agentic loop and the harness | For "fix the failing tests", Claude might run the suite, read errors, search and read source, edit, run tests again | S2 | PASS | S2: "When you say \"fix the failing tests,\" Claude might:" (the list follows) |
| 13 | The agentic loop and the harness | `Esc` stops Claude at once; you can interrupt at any point | S2 | PASS | S2: "**Press `Esc`** to stop Claude immediately." and "You can interrupt at any point" |
| 14 | The agentic loop and the harness | In the Agent SDK a turn is one pass through the loop; the loop ends when Claude replies with no tool calls | S4 | PASS | S4: "A turn is one pass through the loop... Turns continue until Claude produces output with no tool calls, at which point the loop ends" |
| 15 | The agentic loop and the harness | Read-only tools such as `Read`, `Glob`, `Grep` can run at the same time; `Edit`, `Write`, `Bash` run one after another | S4 | PASS | S4: "Read-only tools (like `Read`, `Glob`, `Grep`...) can run concurrently. Tools that modify state (like `Edit`, `Write`, and `Bash`) run sequentially" |
| 16 | The agentic loop and the harness | A script can cap the loop with `max_turns` or `maxTurns` | S4 | PASS | S4: "You can cap the loop with `max_turns` / `maxTurns`." |
| 17 | The agentic loop and the harness | Claude Code is the layer around the model; it provides the tools and manages the context | S2 | PASS | S2: "Claude Code is the layer around the model that provides the tools and manages the context the model sees." |
| 18 | The agentic loop and the harness | Docs call this the agentic harness: tools, context management, execution environment; it supplies file access, shell execution, permission gating, memory loading, the loop | S3 | PASS | S3: "The tools, context management, and execution environment... The harness supplies file access, shell execution, permission gating, memory loading, and the loop" |
| 19 | The agentic loop and the harness | Built-in tools fall into five groups: file operations, search, execution, web, code intelligence | S2 | PASS | S2: "fall into five categories" and the table rows File operations, Search, Execution, Web, Code intelligence |
| 20 | The agentic loop and the harness | Checkpoints cannot undo actions on remote systems: databases, APIs, deployments | S2 | PASS | S2: "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| 21 | The agentic loop and the harness | "A test that writes to a shared database stays written." | none | ADVICE | This is the tutorial's own illustration of the S2 limit (row 20). It adds no new tool fact. |
| 22 | The agentic loop and the harness | Prompt injection is hostile text in a file, web page, or tool result that tries to redirect Claude | S3 | PASS | S3: "Hostile instructions embedded in a file, web page, or tool result that attempt to redirect Claude" |
| 23 | The agentic loop and the harness | "Bug reports, logs, and web pages... are data, not orders." | none | ADVICE | This is the tutorial's own guidance. |
| 24 | The context window | The context window holds the conversation, file contents, command outputs | S2 | PASS | S2: "Claude's context window holds your conversation history, file contents, command outputs" |
| 25 | The context window | It does not reset between turns; everything accumulates | S4 | PASS | S4: "Conversation history \| Accumulates over turns" and "Context accumulates across turns" |
| 26 | The context window | Before you type, CLAUDE.md, auto memory, MCP tool names, skill descriptions load | S5 | PASS | S5: "CLAUDE.md, auto memory, MCP tool names, and skill descriptions all load into context." |
| 27 | The context window | Each file Claude reads loads as Claude works | S5 | PASS | S5: "each file read adds to context" |
| 28 | The context window | Output of each command, for example a test run, loads | S2 | PASS | S2: "context window holds... command outputs" |
| 29 | The context window | Full content of a skill loads only when the skill is used | S2 | PASS | S2: "the full content only loads when a skill is used." |
| 30 | The context window | An MCP tool definition loads only when used; until then only tool names and server instructions use context | S2 | PASS | S2: "only tool names and server instructions consume context until Claude uses a specific tool." |
| 31 | The context window | `/context` shows context use as a colored grid with suggestions for heavy tools and memory; `/context all` expands the list | S6 | PASS | S6: "Visualize current context usage as a colored grid. Shows optimization suggestions for context-heavy tools, memory bloat... Pass `all` to expand it" |
| 32 | The context window | Near the limit Claude Code compacts the conversation into a summary; early detailed instructions may be lost | S2 | PASS | S2: "It compacts the conversation into a summary... detailed instructions from early in the conversation may be lost." |
| 33 | The context window | Old conversation crowds out the files you need next and costs tokens on every message | S5 | PASS | S5: "Old conversation crowds out the files you need next and costs tokens on every message." |
| 34 | The context window | Most current models have a 1M-token window, so running out is rare; a focused context gives better answers and costs less | S7 | PASS | S7: "Most current models have a 1M-token window and compaction happens on its own, so running out is rare... a focused context gets you better answers and costs less." |
| 35 | Compaction table | Auto-compaction runs as you approach the limit and summarizes the conversation | S2 | PASS | S2: "Claude Code manages context automatically as you approach the limit. It compacts the conversation into a summary." |
| 36 | Compaction table | `/compact [instructions]` summarizes now with an optional focus, e.g. `/compact focus on the auth bug fix` | S5 | PASS | S5: "run `/compact` with instructions, like `/compact focus on the auth bug fix`" |
| 37 | Compaction table | Compact Instructions is a section in CLAUDE.md that tells compaction what to keep | S2 | PASS | S2: "add a \"Compact Instructions\" section to CLAUDE.md" (to control what is preserved) |
| 38 | Compaction table | `/clear [name]` starts a new conversation with empty context; a name labels the old one in the `/resume` picker | S6 | PASS | S6: "Start a new conversation with empty context. Pass a name to label the previous conversation in the `/resume` picker." |
| 39 | Compaction table | A subagent works in its own context; its tool calls stay out of yours; Claude gets back a summary | S2 | PASS | S2: "the subagent's tool calls stay out of your context, and Claude gets back a summary" |
| 40 | Compaction table | Project-root CLAUDE.md and auto memory survive compaction; conversation-only instructions may not | S3 | PASS | S3: "Project-root CLAUDE.md and auto memory survive compaction, but instructions given only in conversation may not." |
| 41 | Compaction table | Claude Code re-reads up to five of the files that Claude read or edited, most recently modified first | S5 | PASS | S5: "Claude Code re-reads up to five, most recently modified first" |
| 42 | Context engineering | Vague requests trigger broad scanning | S9 | PASS | S9: "Vague requests like \"improve this codebase\" trigger broad scanning." |
| 43 | Context engineering | Test runs, docs, and log files can use a lot of context; send them to a subagent so only a summary comes back | S9 | PASS | S9: "Running tests, fetching documentation, or processing log files can consume significant context. Delegate these to subagents... only a summary returns" |
| 44 | Context engineering | Chat rules can be lost in a summary; keep rules in CLAUDE.md | S3 | PASS | S3: "instructions given only in conversation may not [survive]" |
| 45 | Context engineering | Use `/clear` when you move from one ticket to the next | S5 | PASS | S5: "run `/clear` when switching to unrelated work." (the ticket framing is the tutorial's own advice) |
| 46 | Memory | Claude reads CLAUDE.md files at the start of every session | S8 | PASS | S8: "Claude reads at the start of every session." |
| 47 | Memory | Scopes: User `~/.claude/CLAUDE.md`; Project `./CLAUDE.md` or `./.claude/CLAUDE.md`; Local `./CLAUDE.local.md` (add to `.gitignore`) | S8 | PASS | S8: the table rows give these paths and "Personal project-specific preferences; add to `.gitignore`" |
| 48 | Memory | Files are concatenated, not overridden; ordered from filesystem root down to the working directory; `CLAUDE.local.md` after `CLAUDE.md` | S8 | PASS | S8: "concatenated into context rather than overriding each other... ordered from the filesystem root down to your working directory... `CLAUDE.local.md` is appended after `CLAUDE.md`" |
| 49 | Memory | A subfolder CLAUDE.md loads when Claude reads, writes, or edits a file in that folder | S8 | PASS | S8: "loads each one once Claude reads, writes, or edits another file in that subdirectory." |
| 50 | Memory | `@path/to/import` pulls in another file, up to four hops; imports do not reduce context cost | S8 | PASS | S8: "maximum depth of four hops" and "don't reduce its context cost" |
| 51 | Memory | `.claude/rules/` files hold one topic each; a rule with `paths` frontmatter loads only for matching files | S8 | PASS | S8: "Each file should cover one topic" and "These conditional rules only apply when Claude is working with files matching the specified patterns." |
| 52 | Memory | Auto memory is notes Claude writes for itself; on by default in local sessions; lives in `~/.claude/projects/<project>/memory/` | S8 | PASS | S8: "Auto memory is on by default in local sessions." and "`~/.claude/projects/<project>/memory/`" (S3 gives "Notes Claude writes for itself") |
| 53 | Memory | The first 200 lines or 25KB of `MEMORY.md` load each session | S8 | PASS | S8: "The first 200 lines of `MEMORY.md`, or the first 25KB, whichever comes first, are loaded at the start of every conversation." |
| 54 | Memory | `/init` writes a starting CLAUDE.md or suggests improvements to an existing one | S8 | PASS | S8: "Run `/init` to generate a starting CLAUDE.md... If a CLAUDE.md already exists, `/init` suggests improvements" |
| 55 | Memory | `/memory` edits the files and turns auto memory on or off | S6 | PASS | S6: "Edit `CLAUDE.md` files, enable or disable auto memory" |
| 56 | Memory | Aim for under 200 lines; CLAUDE.md is context, not enforced configuration | S8 | PASS | S8: "target under 200 lines per CLAUDE.md file" and "context, not enforced configuration" |
| 57 | Memory | The most useful lines are the exact test, typecheck, lint commands and how to run one test file | S7 | PASS | S7: "the exact test, typecheck, and lint commands, and how to run a single test file" |
| 58 | Memory | QA section code block | none | ADVICE | The page labels it the tutorial's own example. The command and URL are the reader's own placeholders. |
| 59 | Tokens and cost | Token costs scale with context size | S9 | PASS | S9: "Token costs scale with context size" |
| 60 | Tokens and cost | Claude Code sends the full conversation with every request | S9 | PASS | S9: "Claude Code sends your full conversation with every request" |
| 61 | Tokens and cost | "So a big file, a long log, or a long test run costs tokens again on each later message." | none | FAIL | This states a cost behavior with no cite. Fix: add `<Cite n={5} />` (S5: "costs tokens on every message") or `<Cite n={9} />`. |
| 62 | Tokens and cost | `/usage` shows session cost, plan usage limits, activity stats; `/cost` and `/stats` are aliases | S6 | PASS | S6: "Show session cost, plan usage limits, and activity stats... `/cost` and `/stats` are aliases" |
| 63 | Tokens and cost | The Session block shows API token usage and is meant for API users | S9 | PASS | S9: "The Session block in `/usage` shows API token usage and is intended for API users." |
| 64 | Tokens and cost | The API caches by matching the start of each request, the prefix | S10 | PASS | S10: "The prefix-match rule explains most of the behaviors on this page." |
| 65 | Tokens and cost | A model switch recomputes the whole request | S10 | PASS | S10: "Switching models recomputes the entire request" |
| 66 | Tokens and cost | The docs suggest picking model and effort level at the top of a session | S10 | PASS | S10: "Pick your model and effort level at the top of a session" |
| 67 | Tokens and cost | Cache lasts about an hour on a subscription and five minutes on an API key | S7 | PASS | S7: "lasts about an hour on a subscription and five minutes on an API key" |
| 68 | Tokens and cost | Sonnet handles most coding tasks well and costs less than Opus; for simple subagent tasks set `model: haiku` | S9 | PASS | S9: "Sonnet handles most coding tasks well and costs less than Opus... For simple subagent tasks, specify `model: haiku`" |
| 69 | Tokens and cost | Higher effort means more thinking tokens; lower effort is faster and cheaper | S3 | PASS | S3: "Higher effort means more thinking tokens and deeper reasoning; lower effort is faster and cheaper." |
| 70 | Tokens and cost | Change effort with `/effort` or in `/model` | S9 | PASS | S9: "lowering the effort level with `/effort` or in `/model`" |
| 71 | Tokens and cost | Tips: prefer CLI tools such as `gh` (more context-efficient) | S9 | PASS | S9: "Prefer CLI tools when available: Tools like `gh`... are still more context-efficient than MCP servers" |
| 72 | Tokens and cost | Tips: run `/mcp` and disable unused servers | S9 | PASS | S9: "Run `/mcp` to see configured servers and disable any you're not actively using." |
| 73 | Tokens and cost | Tips: a hook can grep for `ERROR` and return only those lines | S9 | PASS | S9: "a hook can grep for `ERROR` and return only matching lines" |
| 74 | Tokens and cost | Tips: send test runs and logs to a subagent | S9 | PASS | S9: "Delegate these to subagents" |
| 75 | Tokens and cost | Tips: `/compact` reads the whole conversation it summarizes; `/clear` costs nothing | S9 | PASS | S9: "`/compact` reads the conversation it summarizes... `/clear` costs nothing" |
| 76 | Plan, permissions, checkpoints | Plan mode: Claude researches and proposes changes without editing source files; enter with `/plan` or `Shift+Tab` | S3 | PASS | S3: "Claude researches and proposes changes without editing your source files... Enter plan mode with `/plan` or by pressing `Shift+Tab`." |
| 77 | Plan, permissions, checkpoints | `claude --permission-mode plan` starts in plan mode; `Ctrl+G` edits the plan in your editor | S11 | PASS | S11: "claude --permission-mode plan" and "Press `Ctrl+G` to open the proposed plan in your default text editor" |
| 78 | Plan, permissions, checkpoints | Mode table: six mode names | S11 | PASS | S11: "`default`, `acceptEdits`, `plan`, `auto`, `dontAsk`, and `bypassPermissions`" (names from S3 and S11) |
| 79 | Plan, permissions, checkpoints | `default` runs without asking: reads only | S11 | PASS | S11: "`default` \| Reads only" |
| 80 | Plan, permissions, checkpoints | `acceptEdits`: reads, file edits, common filesystem commands | S11 | PASS | S11: "Reads, file edits, and common filesystem commands" |
| 81 | Plan, permissions, checkpoints | `plan` runs without asking: Reads | S11 | FAIL | S11: "Reads, plus classifier-approved commands when auto mode is available". The page leaves out the extra. Fix: "Reads, plus classifier-approved commands when auto mode is available". |
| 82 | Plan, permissions, checkpoints | `auto`: everything, with background safety checks | S11 | PASS | S11: "Everything, with background safety checks" |
| 83 | Plan, permissions, checkpoints | `dontAsk`: file reads and pre-approved tools | S11 | PASS | S11: "File reads inside your working directories and pre-approved tools" |
| 84 | Plan, permissions, checkpoints | `bypassPermissions`: everything | S11 | PASS | S11: "`bypassPermissions` \| Everything \| Isolated containers and VMs only" |
| 85 | Plan, permissions, checkpoints | "Fit for test work" column | none | ADVICE | It is the tutorial's own fit advice. The values for `bypassPermissions` ("Isolated containers and VMs only") and `dontAsk` ("Locked-down CI and scripts") match S11. |
| 86 | Plan, permissions, checkpoints | In auto mode a classifier reviews actions in the background and blocks the risky ones | S2 | PASS | S2: "a classifier reviews most actions in the background and blocks the risky ones" |
| 87 | Plan, permissions, checkpoints | From v2.1.283 auto is the built-in starting mode for terminal and VS Code sessions | S2 | PASS | S2: "With Claude Code v2.1.283 or later, it's the built-in starting permission mode for interactive terminal and VS Code sessions." |
| 88 | Plan, permissions, checkpoints | Deny rules block in every mode | S11 | PASS | S11: "Deny rules block in every mode, including `bypassPermissions`." |
| 89 | Plan, permissions, checkpoints | You can allow trusted commands such as `npm test` in `.claude/settings.json` | S2 | PASS | S2: "allow specific commands in `.claude/settings.json`... trusted commands like `npm test`" |
| 90 | Plan, permissions, checkpoints | `/rewind` (alias `/undo`) or `Esc` twice on an empty prompt restores code, conversation, or both | S12 | PASS | S12: "run `/rewind` or its alias `/undo`", "press `Esc` twice when the prompt input is empty", "Restore code and conversation: revert both" |
| 91 | Plan, permissions, checkpoints | A file that only Bash commands changed is not tracked | S12 | PASS | S12: "A file that only Bash commands changed isn't tracked and stays as it is." |
| 92 | Plan, permissions, checkpoints | Checkpoints are for quick recovery in a session, not a replacement for git | S12 | PASS | S12: "designed for quick, session-level recovery... continue using version control" and the heading "Not a replacement for version control" |
| 93 | Plan, permissions, checkpoints | Actions on databases, APIs, deployments cannot be undone with a checkpoint | S2 | PASS | S2: "can't be checkpointed" (see row 20) |
| 94 | Sessions | Each new session starts with a fresh context window | S2 | PASS | S2: "Each new session starts with a fresh context window" |
| 95 | Sessions | Each conversation is saved as a JSONL file under `~/.claude/projects/` | S2 | PASS | S2: "written to a plaintext JSONL file under `~/.claude/projects/`" |
| 96 | Sessions | `claude --continue` reopens the most recent session in the current directory | S13 | PASS | S13: "Reopens the most recent session in the current directory" |
| 97 | Sessions | `claude --resume` opens the session picker | S13 | PASS | S13: "Opens the session picker" |
| 98 | Sessions | `claude -n login-bugs` starts a named session | S13 | PASS | S13: "At startup \| `claude -n auth-refactor`" |
| 99 | Sessions | `/rename login-bugs` names the open session | S13 | PASS | S13: "During a session \| `/rename auth-refactor`." |
| 100 | Sessions | `claude --worktree <name>` (or `-w`) creates an isolated worktree, starts Claude in it, on a new branch `worktree-<name>` | S14 | PASS | S14: "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it... on a new branch named `worktree-<name>`" |
| 101 | Sessions | Add `.claude/worktrees/` to `.gitignore` | S14 | PASS | S14: "Add `.claude/worktrees/` to your `.gitignore`" |
| 102 | Sessions | Give Claude something to run that comes back pass or fail | S7 | PASS | S7: "Give Claude something it can run that comes back pass or fail." |
| 103 | Sessions | Without a check, only the agent decides that it is finished | S3 | PASS | S3: "without one, the only thing deciding the agent is finished is the agent itself." |
| 104 | Sessions | After two failed corrections, run `/clear` and write a better prompt | S7 | PASS | S7: "after two failed corrections run `/clear` and write a better prompt" |
| 105 | Sessions | Working agreement (8 items) | none | ADVICE | The callout labels it the tutorial's own advice. `/clear` is checked in row 38. |
| 106 | Practice | Exercise steps 1–7 (`claude --permission-mode plan`, `/init`, `/context all`, `/memory`, `/compact focus on ...`, `/clear`, `/usage`) | S11, S8, S6, S5 | ADVICE | The page labels the exercise the tutorial's own. Each command is in the sources (rows 31, 36, 38, 54, 55, 62, 77). |
| 107 | Practice | Step 4 cites S8 for "start a new session... to confirm that the file loaded" | S8 | ADVICE | This is exercise text. S8 supports "Claude reads them at the start of every session." |
| 108 | Practice | Prompt text "Read the login and send-money code..." | none | ADVICE | The page labels it an exercise. The repo has the code: `routes/user.route.js` has `router.post('/user/login', ...)` and `controllers/transactions/sendMoney.controller.js` exists. |
| 109 | Practice | "How to check" paragraph | none | ADVICE | It is exercise text. |
| 110 | Practice (callout) | dMoney has a Node.js, Express, Sequelize, MySQL backend | none | PASS-REPO | `repo/README.md`: "Backend: Node.js + Express + Sequelize + MySQL"; `dmoney-transaction-api/package.json` lists "express", "sequelize", "mysql2" |
| 111 | Practice (callout) | dMoney has a Next.js 15 web app | none | PASS-REPO | `repo/README.md`: "Frontend: Next.js 15 (App Router)"; `dmoney-web-react/package.json`: "next": "15.5.9" |
| 112 | Practice (callout) | README says it has known bugs and security flaws on purpose; do not deploy to production or expose to the internet | none | PASS-REPO | `repo/README.md`: "This system has known bugs and security flaws, and they are there on purpose... Do not deploy it to production or expose it to the internet." |
| 113 | Practice (callout) | The public repo is `kawsar-95/genAI-project` | none | PASS-REPO | `repo/dmoney-transaction-api/.artifacts/SM-M02_review.md`: "https://github.com/kawsar-95/genAI-project/pull/8". The files do not show commit `51db34a`. |
| 114 | Common mistakes | 1. Old conversation crowds out files and costs tokens; `/clear` between tasks; name sessions to resume | S5, S13 | PASS | S5: "Old conversation crowds out the files you need next and costs tokens on every message." S13: "`claude -n auth-refactor`" and "return to it with `claude --resume <name>`" |
| 115 | Common mistakes | 2. Conversation-only instructions may not survive compaction | S3 | PASS | S3: see row 40 |
| 116 | Common mistakes | 3. Longer CLAUDE.md files use more context and reduce adherence; stay under 200 lines; move topic rules to `.claude/rules/` | S8 | PASS | S8: "Longer files consume more context and reduce adherence. Move instructions that matter for only part of the codebase into path-scoped rules" |
| 117 | Common mistakes | 4. Logs and test runs use a lot of context; use a subagent or filter with a hook | S9 | PASS | S9: see rows 43 and 73 |
| 118 | Common mistakes | 5. Bash changes and remote actions are not restored | S12, S2 | PASS | S12: "isn't tracked". S2: "can't be checkpointed". |
| 119 | Common mistakes | 6. Without a check only the agent decides it is finished; give the exact test command | S3, S7 | PASS | S3: see row 103. S7: "the exact test, typecheck, and lint commands" |
| 120 | Common mistakes | 7. A model switch recomputes the whole request; pick model and effort at the start | S10 | PASS | S10: see rows 65 and 66 |
| 121 | Lede | Agentic tool reads code, runs tests, changes files | none | N/A | This is an intro sentence. It restates rows 1 and 7, which are cited. The lede's mentions of the loop, harness, context window, memory and token cost are cited later. |
| 122 | Lede | "The other nine pages of the Agentic QA group build on it." | none | N/A | This is a sentence about the page and the site. |
| 123 | Key words | Agentic coding tool: reads code, edits files, runs commands, not only text | none | PASS | Restates rows 1 and 6. |
| 124 | Key words | Agentic loop: gather context, take action, verify results, repeat | none | PASS | Restates row 11. S3: "gather context, take action, verify results, and repeat until done." |
| 125 | Key words | Agentic harness | none | PASS | Restates row 18. |
| 126 | Key words | Turn: one pass through the loop; ends when Claude replies with no tool calls | none | PASS | Restates row 14. |
| 127 | Key words | Context window: conversation, files read, command outputs | none | PASS | Restates row 24. |
| 128 | Key words | Compaction: a summary that frees space near the limit, or with `/compact` | none | PASS | Restates rows 32, 35 and 36. |
| 129 | Key words | CLAUDE.md: instructions that Claude reads at the start of every session | none | PASS | Restates row 46. |
| 130 | Key words | Auto memory: notes Claude writes for itself; the start of `MEMORY.md` loads each session | none | PASS | Restates rows 52 and 53. |
| 131 | Key words | Prompt caching: reuse of the unchanged start (prefix) of each request | none | PASS | Restates row 64. S10: "the API avoids reprocessing the part that didn't change." |
| 132 | Key words | Plan mode: a permission mode where Claude proposes changes without editing source files | none | PASS | Restates row 76. |
| 133 | Key words | Checkpoint: a restore point for Claude's file edits, used with `/rewind` | none | PASS | Restates rows 90 and 91. S3: "Claude Code snapshots files before every edit so a checkpoint can revert them." |
| 134 | Key words | Worktree: a separate checkout on its own branch, made with `claude --worktree` | none | PASS | Restates row 100. S14: "A worktree is a fresh checkout". |

Open FAILs after round 1: 4

Script check of round 1: 134 rows, 4 FAIL rows, 2 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / claude-for-qa (round 2, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Lede | An agentic tool reads your code, runs your tests, and changes files. | none | FAIL | A fact about a tool with no cite. S1 says "reads your codebase, edits files, runs commands". Fix: add `<Cite n={1} />`. |
| 2 | Lede | The other nine pages of the group build on this page. | none | N/A | A sentence about the page itself. |
| 3 | What Claude Code is | Claude Code is an agentic coding tool that reads your codebase, edits files, and runs commands. | 1 | PASS | S1: "agentic coding tool that reads your codebase, edits files, runs commands". |
| 4 | What Claude Code is | It runs in the terminal, IDE extensions, a desktop app, and on the web. | 1 | PASS | S1: "Available in your terminal, IDE, desktop app, and browser." |
| 5 | What Claude Code is | The web surface needs no local setup and can work on repos you do not have locally. | 1 | PASS | S1: "Run Claude Code in your browser with no local setup... work on repos you don't have locally". |
| 6 | What Claude Code is | On Ubuntu or Debian, the desktop app is in beta. | 1 | PASS | S1: "On Ubuntu or Debian, where the app is in beta". |
| 7 | What Claude Code is | The agentic loop, the tools, and the capabilities are the same on every surface. | 2 | PASS | S2: "The agentic loop, tools, and capabilities are the same everywhere you use Claude Code." |
| 8 | What Claude Code is | A chat assistant only gives text and you apply it yourself. An agentic tool acts. | 3 | PASS | S3: "chat-based assistants that only respond with text you must apply yourself. Claude Code is agentic because it has tools that let it act". |
| 9 | What Claude Code is | In a directory, Claude can run any command you could run: build tools, git, package managers, scripts. | 2 | PASS | S2: "Any command you could run: build tools, git, package managers, system utilities, scripts." |
| 10 | What Claude Code is | Claude sees the git state: current branch, uncommitted changes, recent commits. | 2 | PASS | S2: "Current branch, uncommitted changes, and recent commit history." |
| 11 | What Claude Code is | Claude can read files, edit code, run tests, and run shell commands. | 2 | PASS | S2 tool table: "Read files, edit code, create new files" and "Run shell commands, start servers, run tests, use git". |
| 12 | What Claude Code is | Table "Claude can / So you must", right column. | none | ADVICE | The callout labels the right column as the tutorial's own advice. The left column is covered by row 11. |
| 13 | The loop and harness | For each task Claude works in three phases: gather context, take action, verify results. | 2 | PASS | S2: "it works through three phases: gather context, take action, and verify results." |
| 14 | The loop and harness | For "fix the failing tests" Claude might run the suite, read errors, search and read source, edit, and run the tests again. | 2 | PASS | S2 steps 1-6, from "Run the test suite" to "Run the tests again to verify". |
| 15 | The loop and harness | You can interrupt at any point. `Esc` stops Claude at once. | 2 | PASS | S2: "You can interrupt at any point" and "Press `Esc` to stop Claude immediately." |
| 16 | The loop and harness | In the Agent SDK a turn is one pass through the loop. The loop ends when Claude replies with no tool calls. | 4 | PASS | S4: "A turn is one pass through the loop... Turns continue until Claude produces output with no tool calls". |
| 17 | The loop and harness | Read-only tools such as `Read`, `Glob`, `Grep` can run at the same time. `Edit`, `Write`, `Bash` run one after another. | 4 | PASS | S4: "Read-only tools (like `Read`, `Glob`, `Grep`...) can run concurrently. Tools that modify state (like `Edit`, `Write`, and `Bash`) run sequentially". |
| 18 | The loop and harness | A script can cap the loop with `max_turns` or `maxTurns`. | 4 | PASS | S4: "You can cap the loop with `max_turns` / `maxTurns`." |
| 19 | The loop and harness | Claude Code is the layer around the model. It provides the tools and manages the context the model sees. | 2 | PASS | S2: "Claude Code is the layer around the model that provides the tools and manages the context the model sees." |
| 20 | The loop and harness | The docs call this the agentic harness: tools, context management, execution environment. It supplies file access, shell execution, permission gating, memory loading, and the loop. | 3 | PASS | S3: "The harness supplies file access, shell execution, permission gating, memory loading, and the loop that chains actions together." |
| 21 | The loop and harness | The built-in tools fall into five groups: file operations, search, execution, web, code intelligence. | 2 | PASS | S2: "fall into five categories" and the table rows File operations, Search, Execution, Web, Code intelligence. |
| 22 | The loop and harness | Checkpoints cannot undo actions on remote systems: databases, APIs, deployments. | 2 | PASS | S2: "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| 23 | The loop and harness | "A test that writes to a shared database stays written." | none | ADVICE | A consequence the tutorial draws from row 22. It states no new tool fact. |
| 24 | The loop and harness | Prompt injection is hostile text in a file, a web page, or a tool result that tries to redirect Claude. | 3 | PASS | S3: "Hostile instructions embedded in a file, web page, or tool result that attempt to redirect Claude". |
| 25 | The loop and harness | "Bug reports, logs, and web pages that Claude reads are data, not orders." | none | ADVICE | The tutorial's own guidance. |
| 26 | The context window | The context window holds the conversation, file contents, and command outputs. | 2 | PASS | S2: "context window holds your conversation history, file contents, command outputs". |
| 27 | The context window | It does not reset between turns. Everything accumulates. | 4 | PASS | S4: "Accumulates over turns" and "Context accumulates across turns". |
| 28 | The context window | Before you type, CLAUDE.md, auto memory, MCP tool names, and skill descriptions load. | 5 | PASS | S5: "CLAUDE.md, auto memory, MCP tool names, and skill descriptions all load into context." |
| 29 | The context window | Each file that Claude reads loads as Claude works. | 5 | PASS | S5: "each file read adds to context". |
| 30 | The context window | The output of each command, for example a test run, loads. | 2 | PASS | S2: "command outputs". |
| 31 | The context window | The full content of a skill loads, but only when the skill is used. | 2 | PASS | S2: "the full content only loads when a skill is used." |
| 32 | The context window | An MCP tool definition loads only when Claude uses that tool. Until then only tool names and server instructions use context. | 2 | FAIL | S2: "MCP tool definitions are deferred by default... so only tool names and server instructions consume context until Claude uses a specific tool." The page drops "by default". Fix: write "By default, an MCP tool definition loads only when...". |
| 33 | The context window | `/context` shows context use as a colored grid with suggestions for heavy tools and memory. `/context all` expands the list. | 6 | PASS | S6: "Visualize current context usage as a colored grid. Shows optimization suggestions for context-heavy tools, memory bloat... Pass `all` to expand it". |
| 34 | The context window | Near the limit Claude Code compacts the conversation into a summary. Early detailed instructions may be lost. | 2 | PASS | S2: "It compacts the conversation into a summary... detailed instructions from early in the conversation may be lost." |
| 35 | The context window | Old conversation crowds out needed files and costs tokens on every message. | 5 | PASS | S5: "Old conversation crowds out the files you need next and costs tokens on every message." |
| 36 | The context window | Most current models have a 1M-token window, so running out is rare. A focused context still gives better answers and costs less. | 7 | PASS | S7: "Most current models have a 1M-token window and compaction happens on its own, so running out is rare... a focused context gets you better answers and costs less." |
| 37 | Compaction and clearing | Auto-compaction runs as you approach the limit and summarizes the conversation. | 2 | PASS | S2: "Claude Code manages context automatically as you approach the limit. It compacts the conversation into a summary." |
| 38 | Compaction and clearing | `/compact [instructions]` summarizes now with an optional focus, for example `/compact focus on the auth bug fix`. | 5 | PASS | S5: "run `/compact` with instructions, like `/compact focus on the auth bug fix`". |
| 39 | Compaction and clearing | Compact Instructions is a section in CLAUDE.md that tells compaction what to keep. | 2 | PASS | S2: "add a 'Compact Instructions' section to CLAUDE.md" to "control what's preserved during compaction". |
| 40 | Compaction and clearing | `/clear [name]` starts a new conversation with empty context. A name labels the old one in the `/resume` picker. | 6 | PASS | S6: "Start a new conversation with empty context. Pass a name to label the previous conversation in the `/resume` picker." |
| 41 | Compaction and clearing | A subagent works in its own context. Its tool calls stay out of yours, and Claude gets back a summary. | 2 | PASS | S2: "the subagent's tool calls stay out of your context, and Claude gets back a summary". |
| 42 | Compaction and clearing | The project-root CLAUDE.md and auto memory survive compaction. Instructions given only in the conversation may not. | 3 | PASS | S3: "Project-root CLAUDE.md and auto memory survive compaction, but instructions given only in conversation may not." |
| 43 | Compaction and clearing | Claude Code re-reads up to five of the files Claude read or edited, most recently modified first. | 5 | PASS | S5: "re-reads up to five of the files Claude has read or edited in the session, choosing the ones modified most recently." |
| 44 | Compaction and clearing | Name the spec, test file, failing test. Vague requests trigger broad scanning. | 9 | PASS | S9: "Vague requests like 'improve this codebase' trigger broad scanning." |
| 45 | Compaction and clearing | Test runs, docs, and log files can use a lot of context. Send them to a subagent so only a summary comes back. | 9 | PASS | S9: "Running tests, fetching documentation, or processing log files can consume significant context. Delegate these to subagents... only a summary returns". |
| 46 | Compaction and clearing | Keep rules in CLAUDE.md. Chat rules can be lost in a summary. | 3 | PASS | S3: "instructions given only in conversation may not" survive. |
| 47 | Compaction and clearing | Use `/clear` when you move from one ticket to the next. | 5 | PASS | S5: "Clear between tasks: run `/clear` when switching to unrelated work." |
| 48 | Memory | Claude reads CLAUDE.md files at the start of every session. | 8 | PASS | S8: "Claude reads them at the start of every session." |
| 49 | Memory | The user scope is `~/.claude/CLAUDE.md`. | 8 | PASS | S8: "`~/.claude/CLAUDE.md`... Only you (all projects)". |
| 50 | Memory | The project scope is `./CLAUDE.md` or `./.claude/CLAUDE.md`, shared in git. | 8 | PASS | S8: "`./CLAUDE.md` or `./.claude/CLAUDE.md`... Team members via source control". |
| 51 | Memory | The local scope is `./CLAUDE.local.md`, personal, add to `.gitignore`. | 8 | PASS | S8: "`./CLAUDE.local.md` | Personal project-specific preferences; add to `.gitignore`". |
| 52 | Memory | Files are joined, not overridden. They run from the filesystem root down to the working directory. `CLAUDE.local.md` comes after `CLAUDE.md`. | 8 | PASS | S8: "concatenated into context rather than overriding each other... ordered from the filesystem root down to your working directory... `CLAUDE.local.md` is appended after `CLAUDE.md`". |
| 53 | Memory | A CLAUDE.md in a subfolder loads when Claude reads, writes, or edits a file in that folder. | 8 | PASS | S8: "loads each one once Claude reads, writes, or edits another file in that subdirectory". |
| 54 | Memory | `@path/to/import` pulls in another file, up to four hops deep. Imports do not reduce context cost. | 8 | PASS | S8: "maximum depth of four hops" and "don't reduce its context cost". |
| 55 | Memory | Files in `.claude/rules/` hold one topic each. A rule with `paths` frontmatter loads only for matching files. | 8 | PASS | S8: "Each file should cover one topic" and "conditional rules only apply when Claude is working with files matching the specified patterns". |
| 56 | Memory | Auto memory is notes Claude writes for itself. It is on by default in local sessions. | 8 | PASS | S8: "Auto memory is on by default in local sessions." |
| 57 | Memory | Auto memory lives in `~/.claude/projects/<project>/memory/`. The first 200 lines or 25KB of `MEMORY.md` load each session. | 8 | PASS | S8: "`~/.claude/projects/<project>/memory/`" and "The first 200 lines of `MEMORY.md`, or the first 25KB, whichever comes first, are loaded at the start of every conversation." |
| 58 | Memory | `/init` writes a starting CLAUDE.md, or suggests improvements to an existing one. | 8 | PASS | S8: "If a CLAUDE.md already exists, `/init` suggests improvements rather than overwriting it." |
| 59 | Memory | `/memory` edits the files and turns auto memory on or off. | 6 | PASS | S6: "Edit `CLAUDE.md` files, enable or disable auto memory". |
| 60 | Memory | Aim for under 200 lines. | 8 | PASS | S8: "target under 200 lines per CLAUDE.md file". |
| 61 | Memory | CLAUDE.md is context, not enforced configuration. | 8 | PASS | S8: "Claude treats them as context, not enforced configuration." |
| 62 | Memory | The most useful lines are the exact test, typecheck, and lint commands, and how to run one test file. | 7 | FAIL | S7 lists these as the first of three things CLAUDE.md "works best" holding: "How to confirm work in this repo: the exact test, typecheck, and lint commands, and how to run a single test file". It does not call them "the most useful". Fix: "CLAUDE.md works best when it holds what Claude cannot work out from the code, such as the exact test, typecheck, and lint commands." |
| 63 | Memory | The QA section example block. | none | ADVICE | Labelled "the tutorial's own example". `npm test` and the paths are the reader's own. |
| 64 | Tokens and cost | Token costs scale with context size. | 9 | PASS | S9: "Token costs scale with context size". |
| 65 | Tokens and cost | Claude Code sends the full conversation with every request. | 9 | FAIL | S9 does not say this. S10 does: "Claude Code re-sends the full context: the system prompt, your project context, every prior message and tool result". Fix: cite S10 (or S7) for this sentence. |
| 66 | Tokens and cost | A big file, long log, or long test run costs tokens again on each later message. | 9 | PASS | S9: "Stale context wastes tokens on every subsequent message." |
| 67 | Tokens and cost | `/usage` shows session cost, plan usage limits, and activity stats. `/cost` and `/stats` are aliases. | 6 | PASS | S6: "Show session cost, plan usage limits, and activity stats... `/cost` and `/stats` are aliases". |
| 68 | Tokens and cost | The Session block shows API token usage and is meant for API users. | 9 | PASS | S9: "The Session block in `/usage` shows API token usage and is intended for API users." |
| 69 | Tokens and cost | The API caches by matching the start of each request, the prefix. | 10 | PASS | S10: "The API caches by matching the start of each request, called the prefix". |
| 70 | Tokens and cost | A switch of model recomputes the whole request. | 10 | PASS | S10: "Switching models recomputes the entire request". |
| 71 | Tokens and cost | The docs suggest picking model and effort level at the top of a session. | 10 | PASS | S10: "Pick your model and effort level at the top of a session". |
| 72 | Tokens and cost | The cache lasts about an hour on a subscription and five minutes on an API key. | 7 | PASS | S7: "lasts about an hour on a subscription and five minutes on an API key". |
| 73 | Tokens and cost | Sonnet handles most coding tasks well and costs less than Opus. For simple subagent tasks set `model: haiku`. | 9 | PASS | S9: "Sonnet handles most coding tasks well and costs less than Opus... For simple subagent tasks, specify `model: haiku`". |
| 74 | Tokens and cost | Higher effort means more thinking tokens. Lower effort is faster and cheaper. | 3 | PASS | S3: "Higher effort means more thinking tokens and deeper reasoning; lower effort is faster and cheaper." |
| 75 | Tokens and cost | Change effort with `/effort` or in `/model`. | 9 | PASS | S9: "lowering the effort level with `/effort` or in `/model`". |
| 76 | Tokens and cost | Prefer CLI tools such as `gh` to MCP servers because they are more context-efficient. | 9 | PASS | S9: "Tools like `gh`... are still more context-efficient than MCP servers". |
| 77 | Tokens and cost | Run `/mcp` and disable unused servers. | 9 | PASS | S9: "Run `/mcp` to see configured servers and disable any you're not actively using." |
| 78 | Tokens and cost | A hook can filter a big log, for example grep for `ERROR`. | 9 | PASS | S9: "a hook can grep for `ERROR` and return only matching lines". |
| 79 | Tokens and cost | Send test runs and log files to a subagent. | 9 | PASS | S9: "Delegate these to subagents". |
| 80 | Tokens and cost | `/compact` reads the whole conversation it summarizes. `/clear` costs nothing. | 9 | PASS | S9: "`/compact` reads the conversation it summarizes... `/clear` costs nothing". |
| 81 | Plan, permissions, checkpoints | In plan mode Claude researches and proposes changes without editing source files. Enter with `/plan` or `Shift+Tab`. | 3 | PASS | S3: "Claude researches and proposes changes without editing your source files... Enter plan mode with `/plan` or by pressing `Shift+Tab`." |
| 82 | Plan, permissions, checkpoints | `claude --permission-mode plan` starts in plan mode. `Ctrl+G` edits the plan in your text editor. | 11 | PASS | S11: "`claude --permission-mode plan`" and "Press `Ctrl+G` to open the proposed plan in your default text editor". |
| 83 | Plan, permissions, checkpoints | `default` (Manual) runs only reads without asking. | 11 | PASS | S11: "`default` | Reads only" and "Manual mode appears under its config value, `default`". |
| 84 | Plan, permissions, checkpoints | `acceptEdits` runs reads, file edits, and common filesystem commands. | 11 | PASS | S11: "Reads, file edits, and common filesystem commands". |
| 85 | Plan, permissions, checkpoints | `plan` runs reads, plus classifier-approved commands when auto mode is available. | 11 | PASS | S11: "Reads, plus classifier-approved commands when auto mode is available". |
| 86 | Plan, permissions, checkpoints | `auto` runs everything, with background safety checks. | 11 | PASS | S11: "Everything, with background safety checks". |
| 87 | Plan, permissions, checkpoints | `dontAsk` runs file reads and pre-approved tools. | 11 | PASS | S11: "File reads inside your working directories and pre-approved tools". |
| 88 | Plan, permissions, checkpoints | `bypassPermissions` runs everything. It fits isolated containers and VMs only. | 11 | PASS | S11: "`bypassPermissions` | Everything | Isolated containers and VMs only". |
| 89 | Plan, permissions, checkpoints | The "Fit for test work" column. | none | ADVICE | The tutorial's own fit advice. The "Locked-down CI and scripts" entry matches S11 anyway. |
| 90 | Plan, permissions, checkpoints | In auto mode a classifier reviews actions in the background and blocks risky ones. From v2.1.283 it is the built-in starting mode for terminal and VS Code sessions. | 2 | PASS | S2: "a classifier reviews most actions in the background and blocks the risky ones... With Claude Code v2.1.283 or later, it's the built-in starting permission mode for interactive terminal and VS Code sessions." |
| 91 | Plan, permissions, checkpoints | Deny rules block in every mode. | 11 | PASS | S11: "Deny rules block in every mode, including `bypassPermissions`." |
| 92 | Plan, permissions, checkpoints | You can allow trusted commands such as `npm test` in `.claude/settings.json`. | 2 | PASS | S2: "allow specific commands in `.claude/settings.json`... trusted commands like `npm test`". |
| 93 | Plan, permissions, checkpoints | `/rewind` (alias `/undo`), or `Esc` twice on an empty prompt, restores the code, the conversation, or both. | 12 | PASS | S12: "run `/rewind` or its alias `/undo`", "press `Esc` twice when the prompt input is empty", and "Restore code and conversation". |
| 94 | Plan, permissions, checkpoints | A file that only Bash commands changed is not tracked. Checkpoints are for quick recovery, not a replacement for git. | 12 | PASS | S12: "A file that only Bash commands changed isn't tracked" and "Checkpoints are designed for quick, session-level recovery." |
| 95 | Plan, permissions, checkpoints | Database, API, and deployment actions cannot be undone with a checkpoint. | 2 | PASS | S2: "can't be checkpointed". |
| 96 | Sessions and branches | Each new session starts with a fresh context window. | 2 | PASS | S2: "Each new session starts with a fresh context window". |
| 97 | Sessions and branches | Claude Code saves each conversation as a JSONL file under `~/.claude/projects/`. | 2 | PASS | S2: "written to a plaintext JSONL file under `~/.claude/projects/`". |
| 98 | Sessions and branches | `claude --continue` reopens the most recent session in the current directory. | 13 | PASS | S13: "Reopens the most recent session in the current directory". |
| 99 | Sessions and branches | `claude --resume` opens the session picker. | 13 | PASS | S13: "Opens the session picker". |
| 100 | Sessions and branches | `claude -n login-bugs` starts a session with a name. | 13 | PASS | S13: "At startup | `claude -n auth-refactor`". The name is the reader's own. |
| 101 | Sessions and branches | `/rename login-bugs` names the open session. | 13 | PASS | S13: "During a session | `/rename auth-refactor`". |
| 102 | Sessions and branches | `claude --worktree <name>` (or `-w`) creates an isolated worktree and starts Claude in it, on a new branch `worktree-<name>`. | 14 | PASS | S14: "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it... on a new branch named `worktree-<name>`". |
| 103 | Sessions and branches | Add `.claude/worktrees/` to your `.gitignore`. | 14 | PASS | S14: "Add `.claude/worktrees/` to your `.gitignore`". |
| 104 | Sessions and branches | Give Claude something to run that comes back pass or fail. | 7 | PASS | S7: "Give Claude something it can run that comes back pass or fail." |
| 105 | Sessions and branches | Without such a check only the agent decides that it is finished. | 3 | PASS | S3: "without one, the only thing deciding the agent is finished is the agent itself." |
| 106 | Sessions and branches | After two failed corrections, run `/clear` and write a better prompt. | 7 | PASS | S7: "after two failed corrections run `/clear` and write a better prompt". |
| 107 | Sessions and branches | The "working agreement" callout (8 items). | none | ADVICE | Labelled as the tutorial's advice. The plan-mode and `/clear` items are checked above. |
| 108 | Practice | dMoney has a Node.js, Express, Sequelize, MySQL backend and a Next.js 15 web app. | none | PASS-REPO | `repo/README.md`: "Backend: Node.js + Express + Sequelize + MySQL" and "Frontend: Next.js 15 (App Router)". `repo/dmoney-web-react/package.json`: `"next": "15.5.9"`. |
| 109 | Practice | The README says dMoney has known bugs and security flaws on purpose, and must not be deployed to production or exposed to the internet. | none | PASS-REPO | `repo/README.md`: "This system has known bugs and security flaws, and they are there on purpose... Do not deploy it to production or expose it to the internet." |
| 110 | Practice | The facts come from the public repo `kawsar-95/genAI-project` at commit `51db34a`. | none | PASS-REPO | The repo name appears in `repo/dmoney-transaction-api/.artifacts/SM-M02_review.md` (`github.com/kawsar-95/genAI-project/pull/8`). The commit is the one given in the brief. |
| 111 | Practice | Step 1: `claude --permission-mode plan`. | 11 | PASS | S11: "`claude --permission-mode plan`". |
| 112 | Practice | Step 2: `/init` writes a starting CLAUDE.md or suggests improvements. | 8 | PASS | S8 `/init` text (see row 58). |
| 113 | Practice | Step 2: remove any line Claude can work out from the code. | none | ADVICE | The tutorial's exercise. S7 says the same. |
| 114 | Practice | Step 3: `/context all` (the total and the memory files). | 6 | PASS | S6: "`/context [all]`". |
| 115 | Practice | Step 4: `/memory` opens the project CLAUDE.md. | 6 | PASS | S6: "Edit `CLAUDE.md` files". |
| 116 | Practice | Step 4: add 5 lines like the example. Start a new session and run `/context all` to confirm the file loaded. | 8 | PASS | S8: "To confirm the file loaded, run `/context all` in a session and check the list under **Memory files**." |
| 117 | Practice | Step 5: the prompt text ("Read the login and send-money code..."). | none | ADVICE | The tutorial's own prompt. The repo has login and send-money code: `repo/dmoney-transaction-api/routes/user.route.js` has `/user/login` and `routes/transaction.route.js` has `/transaction/sendmoney`. |
| 118 | Practice | Steps 6 and 7: compare `/context` totals. | none | ADVICE | The tutorial's exercise. |
| 119 | Practice | Step 7: `/compact focus on the test plan`. | 5 | PASS | S5: "`/compact` with instructions". |
| 120 | Practice | Step 7: `/clear` starts fresh. | 6 | PASS | S6: "Start a new conversation with empty context." |
| 121 | Practice | Step 7: `/usage` shows what the session cost. | 6 | PASS | S6: "Show session cost". |
| 122 | Practice | "How to check": the QA section shows under the memory files of `/context all`. | none | FAIL | A fact about tool behavior with no cite. S8 says: "run `/context all`... check the list under **Memory files**." Fix: add `<Cite n={8} />`. |
| 123 | Practice | "How to check": the plan step made no file changes. The log read shows as a clear jump in the context total. | none | ADVICE | The tutorial's own pass criteria. |
| 124 | Common mistakes | Old conversation crowds out files and costs tokens on every message. Fix: `/clear` between tasks and name sessions so you can resume. | 5, 13 | PASS | S5 (see row 35). S13 `-n` and `/rename` naming. |
| 125 | Common mistakes | Instructions given only in the conversation may not survive compaction. | 3 | PASS | S3 (see row 42). |
| 126 | Common mistakes | Longer CLAUDE.md files use more context and reduce adherence. Stay under 200 lines. Move topic rules to `.claude/rules/`. | 8 | PASS | S8: "Longer files consume more context and reduce adherence. Move instructions that matter for only part of the codebase into path-scoped rules". |
| 127 | Common mistakes | Log files and test runs can use a lot of context. Send them to a subagent or filter with a hook. | 9 | PASS | S9 (see rows 45 and 78). |
| 128 | Common mistakes | Bash changes and remote actions are not restored by checkpoints. | 12, 2 | PASS | S12 (row 94) and S2 (row 22). |
| 129 | Common mistakes | Without a check, only the agent decides it is finished. Give the exact test command in CLAUDE.md. | 3, 7 | PASS | S3 (row 105). S7 says to put the exact test commands in CLAUDE.md. |
| 130 | Common mistakes | A model switch recomputes the whole request. Pick the model and effort at the start. | 10 | PASS | S10 (rows 70 and 71). |
| 131 | Key words | Agentic coding tool, Agentic loop, Agentic harness, Turn, Context window, Compaction, CLAUDE.md, Auto memory, Prompt caching, Plan mode, Worktree. | none | PASS | Each row restates the page body (rows 3, 13, 20, 16, 26, 34 and 38, 48, 57, 69, 81, 102). |
| 132 | Key words | Checkpoint: "A restore point for the file edits of Claude, used with `/rewind`". | none | FAIL | The page says `/rewind` restores "the code, the conversation, or both" and never defines a checkpoint as file edits only. S12 says "Restore code and conversation". Fix: "A restore point used with `/rewind` to restore the code, the conversation, or both." |

Open FAILs after round 2: 6

Script check of round 2: 132 rows, 6 FAIL rows, 2 quoted PASS phrases not found word for word in the sources.

## Fact check: agentic-qa / claude-for-qa (round 3, 2026-11-15)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Lede | An agentic tool reads your code, runs commands such as your tests, and edits files | S1 | PASS | S1: "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands" and "write tests for the auth module, run them, and fix any failures" |
| 2 | Lede | Other sentences: strong partner, risk without a plan, what the page explains, nine other pages | none | N/A | Statements about the page itself, and the tutorial's own view |
| 3 | What Claude Code is | Claude Code is an agentic coding tool; it reads your codebase, edits files, and runs commands | S1 | PASS | S1: "reads your codebase, edits files, runs commands, and integrates with your development tools" |
| 4 | What Claude Code is | It runs in the terminal, IDE extensions, a desktop app, and on the web | S1 | PASS | S1: "Available in your terminal, IDE, desktop app, and browser." |
| 5 | What Claude Code is | The web surface runs in your browser with no local setup and can work on repos you do not have locally | S1 | PASS | S1: "Run Claude Code in your browser with no local setup... work on repos you don't have locally" |
| 6 | What Claude Code is | On Ubuntu or Debian the desktop app is in beta | S1 | PASS | S1: "On Ubuntu or Debian, where the app is in beta" |
| 7 | What Claude Code is | The agentic loop, the tools, and the capabilities are the same on every surface | S2 | PASS | S2: "The agentic loop, tools, and capabilities are the same everywhere you use Claude Code." |
| 8 | What Claude Code is | A chat assistant only gives you text and you apply it yourself; an agentic tool acts | S3 | PASS | S3: "as opposed to chat-based assistants that only respond with text you must apply yourself" |
| 9 | What Claude Code is | When you run `claude` in a directory, Claude can run any command you could run: build tools, git, package managers, scripts | S2 | PASS | S2: "Any command you could run: build tools, git, package managers, system utilities, scripts." |
| 10 | What Claude Code is | It sees your git state: current branch, uncommitted changes, recent commits | S2 | PASS | S2: "Your git state. Current branch, uncommitted changes, and recent commit history." |
| 11 | What Claude Code is | Claude can read files, edit code, run tests, and run shell commands | S2 | PASS | S2: "read your code, edit files, run commands" and the Execution tool row: "Run shell commands, start servers, run tests, use git" |
| 12 | What Claude Code is | Table "Claude can / So you must" and the callout | none | ADVICE | The page labels this as the tutorial's own advice; it states no tool fact |
| 13 | Loop and harness | For each task Claude works in three phases: gather context, take action, verify results | S2 | PASS | S2: "it works through three phases: gather context, take action, and verify results" |
| 14 | Loop and harness | For "fix the failing tests", Claude might run the suite, read errors, search and read source, edit, run tests again | S2 | PASS | S2: "When you say \"fix the failing tests,\" Claude might:" |
| 15 | Loop and harness | You can interrupt at any point; `Esc` stops Claude at once | S2 | PASS | S2: "You can interrupt at any point" and "Press Esc to stop Claude immediately." |
| 16 | Loop and harness | In the Agent SDK a turn is one pass through the loop; the loop ends when Claude replies with no tool calls | S4 | PASS | S4: "A turn is one pass through the loop... Turns continue until Claude produces output with no tool calls, at which point the loop ends" |
| 17 | Loop and harness | Read-only tools such as `Read`, `Glob`, `Grep` can run at the same time; `Edit`, `Write`, `Bash` run one after another | S4 | PASS | S4: "Read-only tools (like Read, Glob, Grep...) can run concurrently. Tools that modify state (like Edit, Write, and Bash) run sequentially" |
| 18 | Loop and harness | A script can cap the loop with `max_turns` or `maxTurns` | S4 | PASS | S4: "You can cap the loop with max_turns / maxTurns." |
| 19 | Loop and harness | Claude Code uses Claude models to understand your code and reason about tasks | S2 | PASS | S2: "Claude Code uses Claude models to understand your code and reason about tasks." |
| 20 | Loop and harness | It is the layer around the model: provides the tools and manages the context the model sees | S2 | PASS | S2: "Claude Code is the layer around the model that provides the tools and manages the context the model sees." |
| 21 | Loop and harness | The docs call it the agentic harness: tools, context management, execution environment; it supplies file access, shell execution, permission gating, memory loading, and the loop | S3 | PASS | S3: "The tools, context management, and execution environment... The harness supplies file access, shell execution, permission gating, memory loading, and the loop" |
| 22 | Loop and harness | Built-in tools fall into five groups: file operations, search, execution, web, code intelligence | S2 | PASS | S2: "The built-in tools generally fall into five categories", with rows File operations, Search, Execution, Web, Code intelligence |
| 23 | Loop and harness | Checkpoints cannot undo actions on remote systems: databases, APIs, deployments | S2 | PASS | S2: "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| 24 | Loop and harness | "A test that writes to a shared database stays written." | none | FAIL | This is a fact about checkpoint limits and has no cite. Fix: add `<Cite n={2} />`, or label it as the tutorial's illustration. |
| 25 | Loop and harness | Prompt injection is hostile text in a file, a web page, or a tool result that tries to redirect Claude | S3 | PASS | S3: "Hostile instructions embedded in a file, web page, or tool result that attempt to redirect Claude" |
| 26 | Loop and harness | "Bug reports, logs, and web pages that Claude reads are data, not orders." | none | ADVICE | Tutorial's own guidance; states no tool fact |
| 27 | Context window | The context window holds the conversation, file contents, and command outputs | S2 | PASS | S2: "Claude's context window holds your conversation history, file contents, command outputs" |
| 28 | Context window | It does not reset between turns; everything accumulates | S4 | PASS | S4: "It does not reset between turns within a session. Everything accumulates" |
| 29 | Context window | Before you type, CLAUDE.md, auto memory, MCP tool names, and skill descriptions load | S5 | PASS | S5: "CLAUDE.md, auto memory, MCP tool names, and skill descriptions all load into context." |
| 30 | Context window | Each file Claude reads loads as Claude works | S5 | PASS | S5: "each file read adds to context" |
| 31 | Context window | The output of each command, for example a test run, loads | S2 | PASS | S2: "holds your conversation history, file contents, command outputs" |
| 32 | Context window | The full content of a skill loads only when the skill is used | S2 | PASS | S2: "the full content only loads when a skill is used" |
| 33 | Context window | An MCP tool definition loads by default only when Claude uses that tool; until then only tool names and server instructions use context | S2 | PASS | S2: "MCP tool definitions are deferred by default... so only tool names and server instructions consume context until Claude uses a specific tool." |
| 34 | Context window | `/context` shows context use as a colored grid with suggestions for heavy tools and memory; `/context all` expands the list | S6 | PASS | S6: "Visualize current context usage as a colored grid. Shows optimization suggestions for context-heavy tools, memory bloat... Pass `all` to expand it" |
| 35 | Context window | Near the limit Claude Code compacts the conversation into a summary; detailed early instructions may be lost | S2 | PASS | S2: "manages context automatically as you approach the limit. It compacts the conversation into a summary... detailed instructions from early in the conversation may be lost" |
| 36 | Context window | Old conversation crowds out the files you need next and costs tokens on every message | S5 | PASS | S5: "Old conversation crowds out the files you need next and costs tokens on every message." |
| 37 | Context window | Most current models have a 1M-token window, so running out is rare; a focused context gets better answers and costs less | S7 | PASS | S7: "Most current models have a 1M-token window... running out is rare... a focused context gets you better answers and costs less." |
| 38 | Compaction | Auto-compaction runs as you approach the limit and summarizes the conversation | S2 | PASS | S2: "manages context automatically as you approach the limit. It compacts the conversation into a summary." |
| 39 | Compaction | `/compact [instructions]` summarizes now with an optional focus, e.g. `/compact focus on the auth bug fix` | S5 | PASS | S5: "run `/compact` with instructions, like `/compact focus on the auth bug fix`"; the `[instructions]` syntax is also in S6 |
| 40 | Compaction | Compact Instructions is a section in CLAUDE.md that tells compaction what to keep | S2 | PASS | S2: "add a \"Compact Instructions\" section to CLAUDE.md" to "control what's preserved during compaction" |
| 41 | Compaction | `/clear [name]` starts a new conversation with empty context; a name labels the old one in the `/resume` picker | S6 | PASS | S6: "Start a new conversation with empty context. Pass a name to label the previous conversation in the `/resume` picker." |
| 42 | Compaction | A subagent works in its own context; its tool calls stay out of yours; Claude gets back a summary | S2 | PASS | S2: "work in their own context window... the subagent's tool calls stay out of your context, and Claude gets back a summary" |
| 43 | Compaction | The project-root CLAUDE.md and auto memory survive compaction; conversation-only instructions may not | S3 | PASS | S3: "Project-root CLAUDE.md and auto memory survive compaction, but instructions given only in conversation may not." |
| 44 | Compaction | Claude Code re-reads up to five of the files Claude read or edited, most recently modified first | S5 | PASS | S5: "Claude Code re-reads up to five, most recently modified first" |
| 45 | Compaction | Point at files; vague requests trigger broad scanning | S9 | PASS | S9: "Vague requests like \"improve this codebase\" trigger broad scanning." |
| 46 | Compaction | Test runs, docs, and log files can use a lot of context; send them to a subagent so only a summary comes back | S9 | PASS | S9: "Running tests, fetching documentation, or processing log files can consume significant context. Delegate these to subagents... only a summary returns" |
| 47 | Compaction | Keep rules in CLAUDE.md, not in chat; chat rules can be lost in a summary | S3 | PASS | S3: "instructions given only in conversation may not" survive compaction |
| 48 | Compaction | Use `/clear` when you move from one ticket to the next | S5 | PASS | S5: "run `/clear` when switching to unrelated work" |
| 49 | Memory | Claude reads CLAUDE.md files at the start of every session | S8 | PASS | S8: "Claude reads them at the start of every session." |
| 50 | Memory | User scope: `~/.claude/CLAUDE.md` | S8 | PASS | S8 table: "User instructions \| `~/.claude/CLAUDE.md`" |
| 51 | Memory | Project scope (shared in git): `./CLAUDE.md` or `./.claude/CLAUDE.md` | S8 | PASS | S8: "`./CLAUDE.md` or `./.claude/CLAUDE.md`... Team members via source control" |
| 52 | Memory | Local scope: `./CLAUDE.local.md`, personal, add to `.gitignore` | S8 | PASS | S8: "`./CLAUDE.local.md` \| Personal project-specific preferences; add to `.gitignore`" |
| 53 | Memory | Files are joined, not overridden; filesystem root down to working directory; `CLAUDE.local.md` after `CLAUDE.md` | S8 | PASS | S8: "concatenated into context rather than overriding each other... ordered from the filesystem root down to your working directory... `CLAUDE.local.md` is appended after `CLAUDE.md`" |
| 54 | Memory | A subfolder CLAUDE.md loads when Claude reads, writes, or edits a file in that folder | S8 | PASS | S8: "loads each one once Claude reads, writes, or edits another file in that subdirectory" |
| 55 | Memory | `@path/to/import` pulls in another file, up to four hops deep; imports do not reduce context cost | S8 | PASS | S8: "maximum depth of four hops" and "Imports... don't reduce its context cost" |
| 56 | Memory | Files in `.claude/rules/` hold one topic each; a rule with `paths` frontmatter loads only for matching files | S8 | PASS | S8: "Each file should cover one topic" and "scoped to specific file paths, so they only load into context when Claude works with matching files" |
| 57 | Memory | Auto memory: notes Claude writes for itself; on by default in local sessions; lives in `~/.claude/projects/<project>/memory/` | S8 | PASS | S8: "Auto memory is on by default in local sessions" and "`~/.claude/projects/<project>/memory/`" |
| 58 | Memory | The first 200 lines or 25KB of `MEMORY.md` load each session | S8 | PASS | S8: "The first 200 lines of `MEMORY.md`, or the first 25KB, whichever comes first, are loaded at the start of every conversation." |
| 59 | Memory | `/init` writes a starting CLAUDE.md, or suggests improvements to an existing one | S8 | PASS | S8: "If a CLAUDE.md already exists, `/init` suggests improvements rather than overwriting it." |
| 60 | Memory | `/memory` edits the files and turns auto memory on or off | S6 | PASS | S6: "Edit `CLAUDE.md` files, enable or disable auto memory" |
| 61 | Memory | Aim for under 200 lines | S8 | PASS | S8: "target under 200 lines per CLAUDE.md file" |
| 62 | Memory | CLAUDE.md is context, not enforced configuration | S8 | PASS | S8: "Claude treats them as context, not enforced configuration." |
| 63 | Memory | It works best when it holds what Claude could not work out from the code: exact test, typecheck, lint commands, how to run one test file | S7 | PASS | S7: "the exact test, typecheck, and lint commands, and how to run a single test file" |
| 64 | Memory | QA section example (`npm test -- tests/api/login.test.js`, staging.example.com, etc.) | none | ADVICE | Labeled "the tutorial's own example"; values are the reader's own |
| 65 | Tokens and cost | Token costs scale with context size | S9 | PASS | S9: "Token costs scale with context size" |
| 66 | Tokens and cost | Claude Code re-sends the full context with every request | S10 | PASS | S10: "Claude Code re-sends the full context" |
| 67 | Tokens and cost | A big file, long log, or long test run costs tokens again on each later message | S9 | PASS | S9: "Stale context wastes tokens on every subsequent message" and "log files can consume significant context" |
| 68 | Tokens and cost | `/usage` shows session cost, plan usage limits, activity stats; `/cost` and `/stats` are aliases | S6 | PASS | S6: "Show session cost, plan usage limits, and activity stats... `/cost` and `/stats` are aliases" |
| 69 | Tokens and cost | Its Session block shows API token usage and is meant for API users | S9 | PASS | S9: "The Session block in `/usage` shows API token usage and is intended for API users." |
| 70 | Tokens and cost | The API caches by matching the start (prefix) of each request | S10 | PASS | S10: "The API caches by matching the start of each request, called the prefix" |
| 71 | Tokens and cost | A switch of model recomputes the whole request | S10 | PASS | S10: "Switching models recomputes the entire request even when the content is identical." |
| 72 | Tokens and cost | The docs suggest picking your model and effort level at the top of a session | S10 | PASS | S10: "Pick your model and effort level at the top of a session" |
| 73 | Tokens and cost | The cache lasts about an hour on a subscription and five minutes on an API key | S7 | PASS | S7: "lasts about an hour on a subscription and five minutes on an API key, cloud provider, or usage credits" |
| 74 | Tokens and cost | Sonnet handles most coding tasks well and costs less than Opus; for simple subagent tasks set `model: haiku` | S9 | PASS | S9: "Sonnet handles most coding tasks well and costs less than Opus... specify `model: haiku`" |
| 75 | Tokens and cost | Higher effort means more thinking tokens; lower effort is faster and cheaper | S3 | PASS | S3: "Higher effort means more thinking tokens and deeper reasoning; lower effort is faster and cheaper." |
| 76 | Tokens and cost | Change effort with `/effort` or in `/model` | S9 | PASS | S9: "lowering the effort level with `/effort` or in `/model`" |
| 77 | Tokens and cost | Prefer CLI tools such as `gh` to MCP servers; CLI tools are more context-efficient | S9 | PASS | S9: "Tools like `gh`... are still more context-efficient than MCP servers" |
| 78 | Tokens and cost | Run `/mcp` and disable unused servers | S9 | PASS | S9: "Run `/mcp` to see configured servers and disable any you're not actively using." |
| 79 | Tokens and cost | A hook can filter a big log, e.g. grep for `ERROR` and return only those lines | S9 | PASS | S9: "a hook can grep for `ERROR` and return only matching lines" |
| 80 | Tokens and cost | Send test runs and log files to a subagent | S9 | PASS | S9: "Delegate these to subagents" |
| 81 | Tokens and cost | `/compact` reads the whole conversation it summarizes; `/clear` costs nothing | S9 | PASS | S9: "`/compact` reads the conversation it summarizes... `/clear` costs nothing" |
| 82 | Plan, permissions | In plan mode Claude researches and proposes changes without editing source files; enter with `/plan` or `Shift+Tab` | S3 | PASS | S3: "researches and proposes changes without editing your source files... Enter plan mode with `/plan` or by pressing `Shift+Tab`." |
| 83 | Plan, permissions | `claude --permission-mode plan` starts a session in plan mode | S11 | PASS | S11: "claude --permission-mode plan" |
| 84 | Plan, permissions | `Ctrl+G` edits the proposed plan in your text editor | S11 | PASS | S11: "Press `Ctrl+G` to open the proposed plan in your default text editor and edit it directly" |
| 85 | Plan, permissions | Mode table: default (Manual) reads only; acceptEdits reads, file edits, common filesystem commands; plan reads plus classifier-approved commands when auto mode is available; auto everything with background safety checks; dontAsk file reads and pre-approved tools; bypassPermissions everything, isolated containers and VMs only | S11 | PASS | S11 table rows, e.g. "`plan` \| Reads, plus classifier-approved commands when auto mode is available", "`bypassPermissions` \| Everything \| Isolated containers and VMs only". The "Fit for test work" column is the tutorial's own. |
| 86 | Plan, permissions | In auto mode a classifier reviews actions in the background and blocks the risky ones | S2 | PASS | S2: "a classifier reviews most actions in the background and blocks the risky ones instead of asking you" |
| 87 | Plan, permissions | From Claude Code v2.1.283 auto is the built-in starting mode for terminal and VS Code sessions | S2 | PASS | S2: "With Claude Code v2.1.283 or later, it's the built-in starting permission mode for interactive terminal and VS Code sessions." |
| 88 | Plan, permissions | Deny rules block in every mode | S11 | PASS | S11: "Deny rules block in every mode, including `bypassPermissions`." |
| 89 | Plan, permissions | You can allow trusted commands such as `npm test` in `.claude/settings.json` | S2 | PASS | S2: "allow specific commands in `.claude/settings.json`... trusted commands like `npm test`" |
| 90 | Plan, permissions | `/rewind` (alias `/undo`), or `Esc` twice on an empty prompt, restores the code, the conversation, or both | S12 | PASS | S12: "run `/rewind` or its alias `/undo`"; "press `Esc` twice when the prompt input is empty"; "Restore code and conversation: revert both" |
| 91 | Plan, permissions | A file that only Bash commands changed is not tracked; checkpoints are for quick recovery, not a replacement for git | S12 | PASS | S12: "A file that only Bash commands changed isn't tracked" and "designed for quick, session-level recovery" |
| 92 | Plan, permissions | Actions on databases, APIs, deployments cannot be undone with a checkpoint | S2 | PASS | S2: "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." |
| 93 | Sessions | Each new session starts with a fresh context window | S2 | PASS | S2: "Each new session starts with a fresh context window" |
| 94 | Sessions | Claude Code saves each conversation as a JSONL file under `~/.claude/projects/` | S2 | PASS | S2: "written to a plaintext JSONL file under `~/.claude/projects/`" |
| 95 | Sessions | `claude --continue` reopens the most recent session in the current directory | S13 | PASS | S13: "Reopens the most recent session in the current directory" |
| 96 | Sessions | `claude --resume` opens the session picker | S13 | PASS | S13: "claude --resume \| Opens the session picker" |
| 97 | Sessions | `claude -n login-bugs` starts a session with a name | S13 | PASS | S13: "At startup \| `claude -n auth-refactor`" |
| 98 | Sessions | `/rename login-bugs` names the open session | S13 | PASS | S13: "During a session \| `/rename auth-refactor`" |
| 99 | Sessions | `claude --worktree <name>` (or `-w`) creates an isolated worktree and starts Claude in it on a new branch `worktree-<name>` | S14 | PASS | S14: "Pass `--worktree` or `-w` with a name to create an isolated worktree... on a new branch named `worktree-<name>`" |
| 100 | Sessions | Add `.claude/worktrees/` to your `.gitignore` | S14 | PASS | S14: "Add `.claude/worktrees/` to your `.gitignore`" |
| 101 | Sessions | Give Claude something to run that comes back pass or fail | S7 | PASS | S7: "Give Claude something it can run that comes back pass or fail." |
| 102 | Sessions | Without such a check, only the agent decides that it is finished | S3 | PASS | S3: "without one, the only thing deciding the agent is finished is the agent itself" |
| 103 | Sessions | After two failed corrections, run `/clear` and write a better prompt | S7 | PASS | S7: "after two failed corrections run `/clear` and write a better prompt" |
| 104 | Sessions | Working agreement callout (8 items) | none | ADVICE | Labeled as the tutorial's advice; `/clear` is checked in rows 41 and 48 |
| 105 | Practice | Callout: exercise is the tutorial's own | none | ADVICE | Labeled as the tutorial's own exercise |
| 106 | Practice | dMoney facts from public repo `kawsar-95/genAI-project` at commit `51db34a`; no cite | none | PASS-REPO | The repo name is in `repo/dmoney-transaction-api/.artifacts/SM-M02_review.md`: "github.com/kawsar-95/genAI-project/pull/8". No file in `repo/` contains the commit hash; it is the one the brief gives. |
| 107 | Practice | dMoney has a Node.js, Express, Sequelize, MySQL backend and a Next.js 15 web app | none | PASS-REPO | `repo/README.md`: "Backend: Node.js + Express + Sequelize + MySQL" and "Frontend: Next.js 15 (App Router)" |
| 108 | Practice | README says it has known bugs and security flaws on purpose; do not deploy to production or expose to the internet | none | PASS-REPO | `repo/README.md`: "This system has known bugs and security flaws, and they are there on purpose... Do not deploy it to production or expose it to the internet." |
| 109 | Practice | Step 1: `claude --permission-mode plan` | S11 | PASS | S11: "claude --permission-mode plan" |
| 110 | Practice | Step 2: `/init` writes a starting CLAUDE.md or suggests improvements | S8 | PASS | See row 59 |
| 111 | Practice | Step 2: read the result, remove lines Claude can work out from the code | none | ADVICE | Tutorial's own exercise step |
| 112 | Practice | Step 3: `/context all`; note the total and the memory files | S6 | PASS | S6: "Pass `all` to expand it"; S8: "check the list under **Memory files**" |
| 113 | Practice | Step 4: `/memory` opens the project CLAUDE.md | S6 | PASS | S6: "`/memory` \| Edit `CLAUDE.md` files" |
| 114 | Practice | Step 4: add 5 lines like the example | none | ADVICE | Tutorial's own exercise step |
| 115 | Practice | Step 4: a new session and `/context all` confirm the file loaded | S8 | PASS | S8: "To confirm the file loaded, run `/context all` in a session and check the list under **Memory files**." |
| 116 | Practice | Step 5: test-plan prompt about "login and send-money code" | none | ADVICE | Text block is the tutorial's prompt. `repo/dmoney-transaction-api/controllers/transactions/sendMoney.controller.js` and `controllers/users/user.controller.js` exist. |
| 117 | Practice | Step 6: measure a big read with `/context` | none | ADVICE | Exercise step; `/context` is checked in row 34 |
| 118 | Practice | Step 7: `/compact focus on the test plan`; `/clear`; `/usage` | S5, S6 | PASS | S5: "`/compact focus on the auth bug fix`"; S6: "`/clear [name]`" and "`/usage` \| Show session cost" |
| 119 | Practice | How to check: `CLAUDE.md` shows under **Memory files** in `/context all` | S8 | PASS | S8: "check the list under **Memory files**" |
| 120 | Practice | "The plan step made no file changes. The log read shows as a clear jump" | none | ADVICE | The tutorial's own pass criteria |
| 121 | Common mistakes | 1: old conversation crowds out files and costs tokens on every message; fix `/clear` and name sessions | S5, S13 | PASS | S5: "Old conversation crowds out the files you need next and costs tokens on every message"; S13: "`claude -n auth-refactor`" and "`/rename auth-refactor`" |
| 122 | Common mistakes | 2: instructions given only in the conversation may not survive compaction | S3 | PASS | S3: "instructions given only in conversation may not" survive; the fix is advice |
| 123 | Common mistakes | 3: longer files use more context and reduce adherence; stay under 200 lines; move topic rules to `.claude/rules/` | S8 | PASS | S8: "Longer files consume more context and reduce adherence" and "target under 200 lines" |
| 124 | Common mistakes | 4: log files and test runs can use a lot of context; subagent or hook | S9 | PASS | S9: "log files can consume significant context", "Delegate these to subagents", "a hook can grep for `ERROR`" |
| 125 | Common mistakes | 5: Bash changes and remote actions are not restored | S12, S2 | PASS | S12: "A file that only Bash commands changed isn't tracked"; S2: "Actions that affect remote systems... can't be checkpointed" |
| 126 | Common mistakes | 6: without a check only the agent decides it is finished; give the exact test command | S3, S7 | PASS | S3 verification loop (row 102); S7: "the exact test, typecheck, and lint commands" |
| 127 | Common mistakes | 7: a model switch recomputes the whole request; pick model and effort at the start | S10 | PASS | S10: "Switching models recomputes the entire request" and "Pick your model and effort level at the top of a session" |
| 128 | Key words | Agentic coding tool: reads code, edits files, runs commands, not only writes text | none | PASS | Restates rows 3 and 8 (S1, S3) |
| 129 | Key words | Agentic loop: gather context, take action, verify results, and repeat | none | PASS | Restates row 13. S3: "gather context, take action, verify results, and repeat until done" |
| 130 | Key words | Agentic harness: the tools, context management, and execution environment around the model | none | PASS | Restates rows 20 and 21 |
| 131 | Key words | Turn: one pass through the loop; ends when Claude replies with no tool calls | none | PASS | Restates row 16 |
| 132 | Key words | Context window: the conversation, files read, and command outputs | none | PASS | Restates row 27 |
| 133 | Key words | Compaction: a summary that frees space near the limit, or with `/compact` | none | PASS | Restates rows 35 and 39 |
| 134 | Key words | CLAUDE.md: a file of instructions that Claude reads at the start of every session | none | PASS | Restates row 49 |
| 135 | Key words | Auto memory: notes Claude writes for itself; the start of `MEMORY.md` loads each session | none | PASS | Restates rows 57 and 58 |
| 136 | Key words | Prompt caching: reuse of the unchanged start (prefix) of each request | none | PASS | Restates row 70 |
| 137 | Key words | Plan mode: a permission mode where Claude proposes changes without editing source files | none | PASS | Restates row 82 |
| 138 | Key words | Checkpoint: a restore point used with `/rewind` to restore the code, the conversation, or both | none | PASS | Restates row 90 |
| 139 | Key words | Worktree: a separate checkout on its own branch, made with `claude --worktree` | none | PASS | Restates row 99. S14: "A worktree is a fresh checkout" |

Open FAILs after round 3: 1

Script check of round 3: 139 rows, 1 FAIL rows, 2 quoted PASS phrases not found word for word in the sources.

## Verification of the open rows, facts and voices: agentic-qa / claude-for-qa (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F24 | facts | RESOLVED | Page line 121 now reads "So a test that writes to a shared database stays written. <Cite n={2} />". S2 line 160 says "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." The sentence now has a cite, and S2 supports it. |
| V13 | voices | STILL-FAIL | The "source files" part is fixed. Layman line 381 reads "without editing your source files", which matches Technical line 355. The cite part is only half fixed. Line 388 has `<Cite n={11} />` on the `bypassPermissions` bullet. The `default` bullet (385), `acceptEdits` bullet (386) and `auto` bullet (387) still have no cite. The Technical panel puts Cite 11 on the whole permission-modes table (line 357). Fix: add `<Cite n={11} />` after the list, as the checker asked, or at the end of lines 385–387. |

New problems in changed lines:
- Line 388 (Layman): the cite sits in the middle of the bullet, after "without asking." The next sentence, "Use it only in an isolated container or virtual machine.", is outside it. The Technical panel covers the same fact ("Isolated containers and VMs only") under the heading cite on line 357. Fix: put one `<Cite n={11} />` after the whole list, or at the end of line 388. This is the same fix as the V13 cite gap.
- Lines 121 and 374 (Technical): the page says checkpoints "cannot undo actions" on databases, APIs and deployments. S2 line 160 says these "can't be checkpointed". This wording was not changed in this round, so I did not count it. The new "stays written" sentence is an inference from S2, and a cautious editor could rewrite it to stay closer to S2.

Open FAILs after round 4: 1

## Verification of the open rows, facts and voices: agentic-qa / claude-for-qa (round 5, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| V13 | voices | RESOLVED | Lines 385–388 each now end with `<Cite n={11} />`. The Technical panel puts Cite 11 on the permission-modes table (line 357: "**Permission modes.** <Cite n={11} />"). The Layman bullets match the table rows. `default` is "Reads only". `acceptEdits` is "Reads, file edits, …". `auto` is "Everything, with background safety checks". `bypassPermissions` is "Everything". The source S11 line 24 agrees: "Everything \| Isolated containers and VMs only". |
| N1 | voices | RESOLVED | Line 388 now reads "`bypassPermissions` lets it run everything without asking. Use it only in an isolated container or virtual machine. <Cite n={11} />". The cite is at the end and covers both sentences. The "isolated" fact is in Technical line 366 and S11 line 24. |
| N2 | facts | STILL-FAIL | Line 121 says "So a test that writes to a shared database stays written. <Cite n={2} />". S2 line 160 says only "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." S2 does not say that a database write "stays written", and it does not mention a "shared database" or a test. The page puts a Cite 2 on its own inference. The first sentence of line 121 matches S2. Fix: delete the "stays written" sentence, or rewrite it so it only restates S2 and add a label that it is the tutorial's advice. For example: "Use your permission mode and permission rules to control these actions. <Cite n={2} />" (S2 says "You control those with your permission mode and permission rules."). |

New problems in changed lines: None. The only changed lines are 385–388. Each Layman bullet restates the Technical table, and the Cite 11 matches the Technical cite on the same fact.

Open FAILs after round 5: 1

## Verification of the open rows, facts and voices: agentic-qa / claude-for-qa (round 6, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| N2 | facts | RESOLVED | Page line 121 now reads: "Checkpoints cannot undo actions on remote systems: databases, APIs, and deployments. <Cite n={2} /> You control those with your permission mode and permission rules. <Cite n={2} /> The tutorial's reading: a test that writes to a shared database stays written." S2 line 160 says: "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed. You control those with your permission mode and permission rules." Both cited sentences match S2. The shared-database sentence is labelled as the tutorial's own reading and has no cite. |

New problems in changed lines: None.

Open FAILs after round 6: 0

Open FAILs: 0
