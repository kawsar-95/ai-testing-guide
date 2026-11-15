# Claude for Professional QA — research notes (2026-11-15)

## Sources
S1. Claude Code overview — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/overview — accessed 2026-11-15 — cache: cc-overview.txt
S2. How Claude Code works — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/how-claude-code-works — accessed 2026-11-15 — cache: cc-how-it-works.txt
S3. Glossary — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/glossary — accessed 2026-11-15 — cache: cc-glossary.txt
S4. How the agent loop works (Agent SDK) — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/agent-sdk/agent-loop — accessed 2026-11-15 — cache: cc-agent-loop.txt
S5. Explore the context window — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/context-window — accessed 2026-11-15 — cache: cc-context-window.txt
S6. Commands — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/commands — accessed 2026-11-15 — cache: cc-commands.txt
S7. Best practices for Claude Code — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/best-practices — accessed 2026-11-15 — cache: cc-best-practices.txt
S8. How Claude remembers your project — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/memory — accessed 2026-11-15 — cache: cc-memory.txt
S9. Manage costs effectively — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/costs — accessed 2026-11-15 — cache: cc-costs.txt
S10. How Claude Code uses prompt caching — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/prompt-caching — accessed 2026-11-15 — cache: cc-prompt-caching.txt
S11. Choose a permission mode — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permission-modes — accessed 2026-11-15 — cache: cc-permission-modes.txt
S12. Checkpointing — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/checkpointing — accessed 2026-11-15 — cache: cc-checkpointing.txt
S13. Manage sessions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/sessions — accessed 2026-11-15 — cache: cc-sessions.txt
S14. Run parallel sessions with git worktrees — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/worktrees — accessed 2026-11-15 — cache: cc-worktrees.txt
R1. dMoney practice repo (public, commit 51db34a) — https://github.com/kawsar-95/genAI-project — no `<Cite>` on the page; facts checked against `dmoney-repo/<path>`.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | Claude Code is an agentic coding tool that reads the codebase, edits files, and runs commands. | "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools" | S1 | |
| C2 | It runs in the terminal, IDE extensions, a desktop app, and the web. | "Claude Code runs on several surfaces: the terminal, IDE extensions, a desktop app, and the web." | S1 | |
| C3 | The web surface runs in the browser with no local setup and can work on repos you do not have locally. | "Run Claude Code in your browser with no local setup." ... "work on repos you don't have locally" | S1 | |
| C4 | The desktop app on Ubuntu or Debian is in beta. | "On Ubuntu or Debian, where the app is in beta" | S1 | |
| C5 | The agentic loop, tools, and capabilities are the same on every surface. | "and capabilities are the same everywhere you use Claude Code" | S2 | |
| C6 | Agentic coding differs from chat assistants that only respond with text you must apply yourself. | "as opposed to chat-based assistants that only respond with text you must apply yourself" | S3 | |
| C7 | Claude can run any command you could run, and sees your git state (branch, uncommitted changes, recent commits). | "Any command you could run: build tools, git, package managers, system utilities, scripts." ... "Current branch, uncommitted changes, and recent commit history." | S2 | |
| C8 | The loop has three phases: gather context, take action, verify results. | "it works through three phases: gather context, take action, and verify results" | S2 | |
| C9 | For "fix the failing tests", Claude might run the suite, read the errors, search and read the source, edit, and run the tests again. | "Run the test suite to see what's failing" ... "Run the tests again to verify" | S2 | |
| C10 | You can interrupt at any point; Esc stops Claude immediately. | "You can interrupt at any point to steer Claude in a different direction" ... "to stop Claude immediately" | S2 | |
| C11 | Claude Code is the layer around the model that provides the tools and manages the context the model sees. | "Claude Code is the layer around the model that provides the tools and manages the context the model sees." | S2 | |
| C12 | The agentic harness is the tools, context management, and execution environment; it supplies file access, shell execution, permission gating, memory loading, and the loop. | "The tools, context management, and execution environment that turn a language model into a capable coding agent." ... "The harness supplies file access, shell execution, permission gating, memory loading, and the loop that chains actions together." | S3 | |
| C13 | Built-in tools fall into five categories: file operations, search, execution, web, code intelligence. | "The built-in tools generally fall into five categories" | S2 | Category names from the table in S2. |
| C14 | A turn is one pass through the loop; the loop ends when Claude replies with no tool calls. | "A turn is one pass through the loop" ... "Turns continue until Claude produces output with no tool calls" | S4 | |
| C15 | Read-only tools can run at the same time; Edit, Write, and Bash run one after another. | "Read-only tools (like `Read`, `Glob`, `Grep`, and MCP tools marked as read-only) can run concurrently." ... "Tools that modify state (like `Edit`, `Write`, and `Bash`) run sequentially to avoid conflicts." | S4 | |
| C16 | In the Agent SDK you can cap the loop with max_turns / maxTurns. | "You can cap the loop with `max_turns` / `maxTurns`." | S4 | |
| C17 | Actions on remote systems (databases, APIs, deployments) cannot be checkpointed. | "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." | S2 | |
| C18 | Prompt injection: hostile instructions in a file, web page, or tool result. | "Hostile instructions embedded in a file, web page, or tool result that attempt to redirect Claude toward actions you didn't ask for." | S3 | |
| C19 | The context window holds conversation history, file contents, and command outputs. | "Claude's context window holds your conversation history, file contents, command outputs" | S2 | |
| C20 | Before you type, CLAUDE.md, auto memory, MCP tool names, and skill descriptions load. | "CLAUDE.md, auto memory, MCP tool names, and skill descriptions all load into context." | S5 | |
| C21 | The context window does not reset between turns; everything accumulates. | "It does not reset between turns within a session. Everything accumulates" | S4 | |
| C22 | /context shows context usage as a colored grid with optimization suggestions; /context all expands it. | "Visualize current context usage as a colored grid." ... "Pass `all` to expand it" | S6 | |
| C23 | MCP tool definitions are deferred by default; only tool names and server instructions use context until a tool is used. | "MCP tool definitions are deferred by default and loaded on demand" ... "so only tool names and server instructions consume context until Claude uses a specific tool" | S2 | |
| C24 | Skill descriptions load at start; full content loads only when a skill is used. | "Claude sees skill descriptions at session start, but the full content only loads when a skill is used." | S2 | |
| C25 | Claude Code compacts automatically near the limit; early detailed instructions may be lost. | "Claude Code manages context automatically as you approach the limit. It compacts the conversation into a summary." ... "detailed instructions from early in the conversation may be lost" | S2 | |
| C26 | /compact takes focus instructions. | "run `/compact` with instructions, like `/compact focus on the auth bug fix`" | S5 | |
| C27 | A Compact Instructions section in CLAUDE.md controls what compaction keeps. | "section to CLAUDE.md or run `/compact` with a focus" | S2 | The section name is in quotes in the source: Compact Instructions. |
| C28 | Project-root CLAUDE.md and auto memory survive compaction; conversation-only instructions may not. | "Project-root CLAUDE.md and auto memory survive compaction, but instructions given only in conversation may not." | S3 | |
| C29 | After compaction Claude Code re-reads up to five recently modified files it read or edited. | "Claude Code re-reads up to five of the files Claude has read or edited in the session, choosing the ones modified most recently" | S5 | |
| C30 | /clear between tasks: old conversation crowds out the files you need and costs tokens. | "Old conversation crowds out the files you need next and costs tokens on every message." | S5 | |
| C31 | /clear starts a new conversation with empty context; a name labels the old one in /resume. | "Start a new conversation with empty context. Pass a name to label the previous conversation in the `/resume` picker." | S6 | |
| C32 | A subagent works in its own context; its tool calls stay out of yours and Claude gets back a summary. | "the subagent's tool calls stay out of your context, and Claude gets back a summary when the subagent finishes" | S2 | |
| C33 | Most current models have a 1M-token window, so running out is rare; a focused context gives better answers and costs less. | "Most current models have a 1M-token window and compaction happens on its own, so running out is rare." ... "a focused context gets you better answers and costs less" | S7 | |
| C34 | CLAUDE.md locations: managed policy, ~/.claude/CLAUDE.md, ./CLAUDE.md or ./.claude/CLAUDE.md, ./CLAUDE.local.md (add to .gitignore). | "A project CLAUDE.md can be stored in either `./CLAUDE.md` or `./.claude/CLAUDE.md`." ... "Personal project-specific preferences; add to `.gitignore`" | S8 | User path from the scope table: "`~/.claude/CLAUDE.md`". |
| C35 | Files are concatenated, not overridden, ordered from the filesystem root down to the working directory; CLAUDE.local.md after CLAUDE.md. | "All discovered files are concatenated into context rather than overriding each other." ... "content is ordered from the filesystem root down to your working directory" ... "`CLAUDE.local.md` is appended after `CLAUDE.md`" | S8 | |
| C36 | CLAUDE.md files in subdirectories load when Claude reads, writes, or edits a file there. | "Claude Code loads each one once Claude reads, writes, or edits another file in that subdirectory" | S8 | |
| C37 | Imports use @path syntax, up to four hops; they do not reduce context cost. | "CLAUDE.md files can import additional files using `@path/to/import` syntax." ... "with a maximum depth of four hops" ... "help you organize a long file but don't reduce its context cost" | S8 | |
| C38 | Rules go in .claude/rules/; rules with paths frontmatter load only for matching files. | "Place markdown files in your project's `.claude/rules/` directory." ... "These conditional rules only apply when Claude is working with files matching the specified patterns." | S8 | |
| C39 | Target under 200 lines per CLAUDE.md. | "target under 200 lines per CLAUDE.md file" | S8 | |
| C40 | CLAUDE.md is context, not enforced configuration. | "Claude treats CLAUDE.md files as context, not enforced configuration" | S8 | |
| C41 | /init generates a starting CLAUDE.md and suggests improvements if one exists. | "Run `/init` to generate a starting CLAUDE.md automatically." ... "If a CLAUDE.md already exists, `/init` suggests improvements rather than overwriting it." | S8 | |
| C42 | Auto memory is on by default in local sessions; stored in ~/.claude/projects/<project>/memory/; first 200 lines or 25KB of MEMORY.md load. | "Auto memory is on by default in local sessions." ... "Each project gets its own memory directory at `~/.claude/projects/<project>/memory/`." ... "The first 200 lines of `MEMORY.md`, or the first 25KB, whichever comes first, are loaded at the start of every conversation." | S8 | |
| C43 | /memory edits CLAUDE.md files and turns auto memory on or off. | "Edit `CLAUDE.md` files, enable or disable" | S6 | |
| C44 | A good CLAUDE.md holds the exact test, typecheck, and lint commands and how to run one test file. | "the exact test, typecheck, and lint commands, and how to run a single test file" | S7 | |
| C45 | Token costs scale with context size. | "Token costs scale with context size: the more context Claude processes, the more tokens you use." | S9 | |
| C46 | Claude Code sends the full conversation with every request. | "Claude Code sends your full conversation with every request" | S9 | |
| C47 | /usage shows session cost, plan usage limits, and activity stats; /cost and /stats are aliases. | "Show session cost, plan usage limits, and activity stats." ... "`/cost` and `/stats` are aliases" | S6 | |
| C48 | The Session block of /usage is meant for API users. | "The Session block in `/usage` shows API token usage and is intended for API users." | S9 | |
| C49 | Prompt caching matches the start of each request (the prefix). | "The API caches by matching the start of each request, called the prefix, against content it recently processed." | S10 | |
| C50 | Switching models recomputes the whole request. | "Switching models recomputes the entire request even when the content is identical." | S10 | |
| C51 | Tip: pick model and effort at the top of a session. | "Pick your model and effort level at the top of a session" | S10 | |
| C52 | The prompt cache lasts about an hour on a subscription and five minutes on an API key. | "lasts about an hour on a subscription and five minutes on an API key, cloud provider, or usage credits" | S7 | |
| C53 | Sonnet handles most coding tasks and costs less than Opus; use model: haiku for simple subagent tasks. | "Sonnet handles most coding tasks well and costs less than Opus." ... "For simple subagent tasks, specify `model: haiku`" | S9 | |
| C54 | Higher effort means more thinking tokens; lower effort is faster and cheaper. | "Higher effort means more thinking tokens and deeper reasoning; lower effort is faster and cheaper." | S3 | |
| C55 | Lower the effort with /effort or in /model. | "with `/effort` or in `/model`" | S9 | |
| C56 | CLI tools such as gh are more context-efficient than MCP servers; disable unused servers with /mcp. | "Tools like `gh`, `aws`, `gcloud`, and `sentry-cli` are still more context-efficient than MCP servers" ... "Run `/mcp` to see configured servers and disable any you're not actively using." | S9 | |
| C57 | A hook can grep a large log for ERROR and return only matching lines. | "Instead of Claude reading a 10,000-line log file to find errors, a hook can grep for `ERROR` and return only matching lines" | S9 | |
| C58 | Tests, docs, and log files can consume much context; delegate them to subagents. | "Running tests, fetching documentation, or processing log files can consume significant context." | S9 | |
| C59 | Vague requests trigger broad scanning. | "trigger broad scanning" | S9 | |
| C60 | /compact reads the conversation; /clear costs nothing. | "`/compact` reads the conversation it summarizes" ... "`/clear` costs nothing" | S9 | |
| C61 | Plan mode: Claude researches and proposes changes without editing source files; enter with /plan or Shift+Tab. | "where Claude researches and proposes changes without editing your source files" ... "Enter plan mode with `/plan` or by pressing `Shift+Tab`." | S3 | |
| C62 | Start in plan mode with claude --permission-mode plan; Ctrl+G opens the plan in your editor. | "claude --permission-mode plan" ... "Press `Ctrl+G` to open the proposed plan in your default text editor" | S11 | |
| C63 | Modes: default reads only; acceptEdits adds edits and common filesystem commands; auto runs everything with background checks; dontAsk for locked-down CI; bypassPermissions only for isolated containers and VMs. | "Reads, file edits, and common filesystem commands" ... "File reads inside your working directories and pre-approved tools" ... "Everything, with background safety checks" ... "Locked-down CI and scripts" ... "Isolated containers and VMs only" | S11 | |
| C64 | Deny rules block in every mode. | "Deny rules block in every mode, including `bypassPermissions`." | S11 | |
| C65 | Auto mode: a classifier reviews actions and blocks risky ones; from v2.1.283 it is the built-in starting mode for terminal and VS Code. | "a classifier reviews most actions in the background and blocks the risky ones instead of asking you" ... "With Claude Code v2.1.283 or later, it's the" | S2 | |
| C66 | Allow trusted commands in .claude/settings.json. | "You can also allow specific commands in `.claude/settings.json` so Claude doesn't ask each time." | S2 | |
| C67 | /rewind (alias /undo) or Esc twice on an empty prompt opens the rewind menu. | "run `/rewind` or its alias `/undo`" ... "press `Esc` twice when the prompt input is empty" | S12 | |
| C68 | Files changed only by Bash are not tracked; checkpoints do not replace version control. | "A file that only Bash commands changed isn't tracked and stays as it is." ... "Checkpoints are designed for quick, session-level recovery." | S12 | |
| C69 | Each session starts with a fresh context window. | "Each new session starts with a fresh context window, without the conversation history from previous sessions." | S2 | |
| C70 | Transcripts are JSONL files under ~/.claude/projects/. | "is written to a plaintext JSONL file under `~/.claude/projects/`" | S2 | |
| C71 | claude --continue reopens the latest session; claude --resume opens the picker. | "Reopens the most recent session in the current directory" ... "Opens the session picker" | S13 | Table cells: `claude --continue`, `claude --resume`. |
| C72 | Name a session with claude -n or /rename. | "claude -n auth-refactor" ... "/rename auth-refactor" | S13 | |
| C73 | claude --worktree (or -w) with a name makes an isolated worktree on branch worktree-<name> under .claude/worktrees/. | "Pass `--worktree` or `-w` with a name to create an isolated worktree and start Claude in it." ... "on a new branch named `worktree-<name>`" | S14 | |
| C74 | Add .claude/worktrees/ to .gitignore. | "Add `.claude/worktrees/` to your `.gitignore`" | S14 | |
| C75 | Give Claude a check that comes back pass or fail. | "Give Claude something it can run that comes back pass or fail." | S7 | |
| C76 | Without a verification loop, only the agent decides it is finished. | "without one, the only thing deciding the agent is finished is the agent itself" | S3 | |
| C77 | After two failed corrections, /clear and write a better prompt. | "after two failed corrections run `/clear` and write a better prompt instead of a third" | S7 | |
| C78 | Use plan mode for complex tasks to prevent re-work. | "preventing expensive re-work when the initial direction is wrong" | S9 | |
| C79 | dMoney is a practice target with deliberate bugs and security flaws; do not deploy it. | "This system has known bugs and security flaws, and they are there on purpose." ... "Do not deploy it to production or expose it to the internet." | dmoney-repo/README.md | No cite on page. |
| C81 | Longer CLAUDE.md files use more context and reduce adherence. | "Longer files consume more context and reduce adherence." | S8 | |
| C82 | Claude reads CLAUDE.md files at the start of every session. | "Claude reads them at the start of every session." | S8 | |
| C80 | dMoney backend is Node.js, Express, Sequelize, MySQL; frontend is Next.js 15. | "Backend: Node.js + Express + Sequelize + MySQL" ... "Frontend: Next.js 15 (App Router)" | dmoney-repo/README.md | No cite on page. |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F5 | Fixed. Rebutted in part: S2 says "The agentic loop, tools, and capabilities are the same everywhere you use Claude Code." The claim is kept with that wording. |
| facts | F9 | Fixed: a sentence before the table now gives the abilities, with `<Cite n={2} />` (S2, the File operations and Execution rows). |
| facts | F61 | Fixed: added `<Cite n={9} />`. |
| facts | F81 | Fixed: the `plan` row now reads "Reads, plus classifier-approved commands when auto mode is available" (S11). |
| voices | V3 | Fixed: "In the Agent SDK, one pass through the loop is a turn." |
| voices | V4 | Fixed: "Tools such as Edit, Write, and Bash run one by one." |
| voices | V5 | Fixed: "A checkpoint cannot undo a change in a database or an API." |
| voices | V10 | Fixed: the Bangla now says files that Claude read or edited. |
| voices | V11 | Fixed: deleted "keeps things tidy". |
| voices | V12 | Fixed: "on by default in local sessions". |
| voices | V13 | Fixed: "The most useful lines are the exact test commands." |
| voices | V15 | Fixed: the actor is the API. |
| voices | V17 | Fixed: "`bypassPermissions` lets it run everything without asking." |
| voices | V18 | Fixed: "on an empty prompt". |
| voices | V20 | Fixed: "the most recent session in the current directory". |
| voices | V21 | Fixed: deleted the added definition of a worktree. |
| voices | V22 | Fixed: the Bangla now says the current directory. |
| voices | V25 | Fixed: "They can use a lot of context." |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | The agentic loop, the tools, and the capabilities are the same on every surface. | "The agentic loop, tools, and capabilities are the same everywhere you use Claude Code." | S2 | cache: cc-how-it-works.txt line 77 |
| R2 | Claude can read files, edit code, run tests, and run shell commands. | "**File operations** \| Read files, edit code, create new files, rename and reorganize" … "**Execution** \| Run shell commands, start servers, run tests, use git" | S2 | |
| R3 | In `plan` mode, Claude runs reads, plus classifier-approved commands when auto mode is available, without asking. | "Reads, plus classifier-approved commands when auto mode is available" | S11 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F1 | Fixed: the lede now cites S1 and uses its words (reads your codebase, edits files, runs commands). |
| facts | F32 | Fixed: "by default" added; the Bangla says default-এ. |
| facts | F62 | Fixed: S7 wording, "works best when it holds what Claude could not work out from the code". Same in all three panels. |
| facts | F65 | Fixed: now cites S10 ("Claude Code re-sends the full context"). Same in all three panels. |
| facts | F122 | Fixed: "`CLAUDE.md` shows under **Memory files** in `/context all`", with S8. |
| facts | F132 | Fixed: "A restore point used with `/rewind` to restore the code, the conversation, or both". |
| voices | V1 | Fixed: "A chat assistant only gives you text. You apply it yourself." |
| voices | V3 | Fixed in the Technical panel: S2 says "Claude Code uses Claude models to understand your code and reason about tasks", so the Layman sentence is now supported. |
| voices | V4 | Fixed: as V3. |
| voices | V5 | Fixed: deleted the added definition of the context window. |
| voices | V19 | Fixed: "The whole request is processed again." |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | An agentic tool reads your code, runs commands, and edits files. | "reads your codebase, edits files, runs commands" | S1 |  |
| R2.2 | Claude Code re-sends the full context with every request. | "Claude Code re-sends the full context: the system prompt, your project context, every prior message and tool result" | S10 |  |
| R2.3 | Claude Code uses Claude models to understand your code and reason about tasks. | "Claude Code uses Claude models to understand your code and reason about tasks." | S2 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F24 | Fixed: "So a test that writes to a shared database stays written", with S2 ("Checkpoints … cannot undo actions on remote systems: databases, APIs, and deployments"). |
| voices | V13 | Fixed: "without editing your source files"; added `<Cite n={11} />` to the permission-mode list. |

## Round 4 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 4 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| voices | V13 | Fixed: each of the four permission-mode bullets now ends with `<Cite n={11} />`. |
| voices | N1 | Fixed: the `bypassPermissions` cite now sits at the end of the bullet. |
| facts | N2 | No change: the verifier did not count it. S2 says "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed", so a checkpoint cannot undo them; "So a test that writes to a shared database stays written" follows from it. |

## Round 5 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 5 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | N2 | Fixed: the cited sentence is now S2's own ("You control those with your permission mode and permission rules."), and the shared-database sentence is labelled "The tutorial's reading", with no cite. |
