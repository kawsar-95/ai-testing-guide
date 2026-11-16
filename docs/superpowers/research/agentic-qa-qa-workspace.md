# QA Workspace & Tooling — research notes (2026-11-15)

## Sources
S1. Explore the .claude directory — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/claude-directory — accessed 2026-11-15 — cache: cc-claude-directory.txt
S2. How Claude remembers your project — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/memory — accessed 2026-11-15 — cache: cc-memory.txt
S3. Connect Claude Code to tools via MCP — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/mcp — accessed 2026-11-15 — cache: cc-mcp.txt
S4. Extend Claude Code — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/features-overview — accessed 2026-11-15 — cache: cc-features-overview.txt
S5. Create custom subagents — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/sub-agents — accessed 2026-11-15 — cache: cc-sub-agents.txt
S6. Configure permissions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permissions — accessed 2026-11-15 — cache: cc-permissions.txt
S7. Configure the sandboxed Bash tool — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/sandboxing — accessed 2026-11-15 — cache: cc-sandboxing.txt
S8. Automate actions with hooks — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/hooks-guide — accessed 2026-11-15 — cache: cc-hooks-guide.txt
S9. Security — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/security — accessed 2026-11-15 — cache: cc-security.txt
S10. Plugins overview — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/plugins/overview — accessed 2026-11-15 — cache: cc-plugins.txt
S11. Anthropic marketplaces — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/plugins/anthropic-marketplaces — accessed 2026-11-15 — cache: cc-plugins-marketplaces.txt
S12. Plugin security and trust — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/plugins/security — accessed 2026-11-15 — cache: cc-plugins-security.txt
S13. Superpowers README — obra (GitHub) — https://github.com/obra/superpowers — accessed 2026-11-15 — cache: tool-superpowers.txt
S14. Context7 README — upstash (GitHub) — https://github.com/upstash/context7 — accessed 2026-11-15 — cache: tool-context7.txt
S15. CLAUDE.md Management Plugin README — Anthropic (GitHub) — https://github.com/anthropics/claude-plugins-official/blob/main/plugins/claude-md-management/README.md — accessed 2026-11-15 — cache: tool-claude-md-management.txt
S16. Caveman README — JuliusBrussee (GitHub) — https://github.com/JuliusBrussee/caveman — accessed 2026-11-15 — cache: tool-caveman.txt
S17. graphify README — safishamsi (GitHub) — https://github.com/safishamsi/graphify — accessed 2026-11-15 — cache: tool-graphify.txt
S18. Serena README — oraios (GitHub) — https://github.com/oraios/serena — accessed 2026-11-15 — cache: tool-serena.txt
S19. Code intelligence plugins — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/plugins/code-intelligence — accessed 2026-11-15 — cache: cc-plugins-code-intel.txt

Practice repo facts (no cite on the page): the dMoney practice repo clone at commit 51db34a, `dmoney-repo/<path>`.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | Commit project files to share them; files in `~/.claude` are personal and apply to all projects. | "Commit project files to git to share them with your team; files in ~/.claude are personal configuration that applies across all your projects." | S1 | |
| C2 | CLAUDE.md: instructions loaded every session, committed. | "Instructions loaded every session" | S1 | file reference table |
| C3 | `rules/*.md`: topic-scoped instructions, optionally path-gated, committed. | "Topic-scoped instructions, optionally path-gated" | S1 | |
| C4 | `settings.json`: permissions, hooks, env vars, model defaults. | "Permissions, hooks, env vars, model defaults" | S1 | |
| C5 | `settings.local.json`: personal overrides, gitignored when Claude Code saves a setting to it. | "Your personal overrides, gitignored when Claude Code saves a setting to it" | S1 | |
| C6 | `.mcp.json`: team-shared MCP servers, at the project root. | "Team-shared MCP servers" ... "or at the root for CLAUDE.md, .mcp.json, and .worktreeinclude" | S1 | |
| C7 | `skills/<name>/SKILL.md`: reusable prompts invoked with `/name` or auto-invoked. | "Reusable prompts invoked with /name or auto-invoked" | S1 | |
| C8 | `commands/*.md`: single-file prompts, same mechanism as skills. | "Single-file prompts; same mechanism as skills" | S1 | |
| C9 | `agents/*.md`: subagent definitions with own prompt and tools. | "Subagent definitions with their own prompt and tools" | S1 | |
| C10 | `output-styles/*.md` change how Claude formats responses. | "Change how Claude formats responses" | S1 | |
| C11 | `~/.claude.json` holds app state and personal MCP servers. | "App state, account details, UI toggles, personal MCP servers." | S1 | |
| C12 | CLAUDE.local.md: private preferences, create manually and add to .gitignore. | "Your private preferences for this project, loaded alongside CLAUDE.md. Create it manually and add it to .gitignore." | S1 | |
| C13 | Rule frontmatter field is `paths`. | "rules/*.md \| paths" | S1 | frontmatter table |
| C14 | Transcripts are plaintext; a `.env` value a tool reads is written to the transcript. | "If a tool reads a .env file or a command prints a credential, that value is written to projects/<project>/<session>.jsonl." | S1 | |
| C15 | Use permission rules to deny reads of credential files. | "to deny reads of credential files" | S1 | |
| C16 | Project CLAUDE.md can be `./CLAUDE.md` or `./.claude/CLAUDE.md`. | "A project CLAUDE.md can be stored in either ./CLAUDE.md or ./.claude/CLAUDE.md." | S2 | |
| C17 | `/init` generates a starting CLAUDE.md. | "Run /init to generate a starting CLAUDE.md automatically." | S2 | |
| C18 | Confirm with `/context all`, list under Memory files. | "To confirm the file loaded, run" ... "in a session and check the list under Memory files." | S2 | |
| C19 | CLAUDE.md is context, not enforced configuration. | "Claude treats CLAUDE.md files as context, not enforced configuration" | S2 | |
| C20 | Target under 200 lines per CLAUDE.md. | "target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." | S2 | |
| C21 | Rules: one topic per file in `.claude/rules/`, discovered recursively. | "Each file should cover one topic, with a descriptive filename like testing.md or api-design.md. All .md files are discovered recursively" | S2 | |
| C22 | Rules without `paths` load at launch. | "are loaded at launch with the same priority as .claude/CLAUDE.md." | S2 | |
| C23 | A path-scoped rule loads when Claude reads, writes, or edits a matching file. | "A path-scoped rule loads when Claude uses the Read, Write, or Edit tool on a matching file." | S2 | |
| C24 | Personal rules in `~/.claude/rules/` apply to every project. | "Personal rules in ~/.claude/rules/ apply to every project on your machine." | S2 | |
| C25 | `/doctor prompt-audit` checks instruction files; needs v2.1.283 or later. | "run /doctor prompt-audit in a session" ... "/doctor prompt-audit requires Claude Code v2.1.283 or later." | S2 | |
| C26 | `.mcp.json` supports environment variable expansion for sensitive values like API keys. | "Claude Code supports environment variable expansion in .mcp.json files, allowing teams to share configurations while maintaining flexibility for machine-specific paths and sensitive values like API keys." | S3 | |
| C27 | `${VAR}` expands to the value of VAR. | "${VAR}: expands to the value of environment variable VAR" | S3 | |
| C28 | CLAUDE.md: persistent context loaded every conversation. | "Persistent context loaded every conversation" | S4 | |
| C29 | Hooks: automation that must run on every matching event; example run ESLint after every edit. | "Automation that must run on every matching event" ... "Run ESLint after every file edit" | S4 | |
| C30 | MCP: connect to external services. | "Connect to external services" | S4 | |
| C31 | Subagent: isolated context, returns summary. | "Isolated execution context that returns summarized results" | S4 | |
| C32 | Plugin bundles skills, hooks, subagents, MCP servers; namespaced skills. | "A plugin bundles skills, hooks, subagents, and MCP servers into a single installable unit. Plugin skills are namespaced" | S4 | |
| C33 | Guardrails belong in hooks: a CLAUDE.md instruction is a request, not a guarantee. | "in CLAUDE.md or a skill is a request, not a guarantee." | S4 | |
| C34 | A PreToolUse hook that blocks the edit is enforcement. | "A PreToolUse hook that blocks the edit is enforcement." | S4 | |
| C35 | Use `disable-model-invocation: true` for skills with side effects. | "Use disable-model-invocation: true for skills with side effects." | S4 | |
| C36 | Output style sets role, tone, and response format. | "Instructions that set Claude's role, tone, and response format for a whole session" | S4 | |
| C37 | Use rules for language- or directory-specific guidelines. | "Language-specific or directory-specific guidelines" | S4 | |
| C38 | Install a code intelligence plugin when Claude reads many files to find a symbol. | "Claude reads many files to find where a symbol is defined or used" | S4 | |
| C39 | A read-only subagent example uses `tools: Read, Grep, Glob`. | "tools: Read, Grep, Glob" | S5 | code-improver example |
| C40 | Project subagents in `.claude/agents/`; check into version control. | "Project subagents (.claude/agents/) are ideal for subagents specific to a codebase. Check them into version control" | S5 | |
| C41 | Allow, ask, deny rule meanings. | "Allow rules let Claude Code use the specified tool without manual approval." ... "Deny rules prevent Claude Code from using the specified tool." | S6 | |
| C42 | Rules evaluated deny, then ask, then allow; first match wins. | "Rules are evaluated in order: deny, then ask, then allow. The first match in that order determines the outcome" | S6 | |
| C43 | An allow rule cannot carve an exception out of a deny rule. | "An allow rule can't carve an exception out of a deny rule." | S6 | |
| C44 | Permission rules are enforced by Claude Code, not the model. | "Permission rules are enforced by Claude Code, not by the model." | S6 | |
| C45 | `/permissions` lists rules and the file each comes from. | "The dialog lists all permission rules and the settings.json file each rule comes from." | S6 | |
| C46 | "Yes, don't ask again" saves the rule to `.claude/settings.local.json`. | "Claude Code saves the rule to .claude/settings.local.json at the root of the git repository" | S6 | |
| C47 | Block reads with `Read(./.env)` or `Read(./secrets/**)`. | "add a Read deny rule for its path, such as Read(./.env) or Read(./secrets/**)" | S6 | |
| C48 | A `.claudeignore` file has no effect. | "If your project has a .claudeignore file, it has no effect, so move its entries into Read deny rules." | S6 | |
| C49 | A Read deny rule also blocks Edit and Write on that path. | "A Read deny rule also blocks the" ... "on the same path, including creating a new file there." | S6 | |
| C50 | Read and Edit deny rules do not apply to subprocesses like a Python or Node script; enable the sandbox. | "arbitrary subprocesses that read or write files indirectly, like a Python or Node script that opens files itself. For OS-level enforcement that blocks all processes from accessing a path" | S6 | |
| C51 | A `*` in a Bash rule matches any text. | "A * in a Bash rule matches any text, including spaces" | S6 | |
| C52 | Modes: default (Manual), acceptEdits, plan, auto, dontAsk, bypassPermissions. | "Prompts for permission on first use of each tool. Labeled Manual" ... "Claude reads files and runs read-only shell commands to explore but doesn't edit your source files" | S6 | |
| C53 | Use bypassPermissions only in isolated containers or VMs. | "Only use this mode in isolated environments like containers or VMs where Claude Code can't cause damage." | S6 | |
| C54 | The sandbox is an OS-enforced boundary around shell commands. | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs on your machine." | S7 | |
| C55 | Sandbox covers shell commands only; file tools, MCP servers, hooks run outside it. | "The sandbox covers shell commands only. Claude's file tools, MCP servers, and hooks" | S7 | |
| C56 | Sandbox runs on macOS, Linux, WSL2; native Windows unsandboxed. | "The sandbox runs on macOS, Linux, and WSL2. On native Windows, Claude Code runs commands unsandboxed." | S7 | |
| C57 | Off by default; turn on with `/sandbox` or `sandbox.enabled`. | "The sandbox is off by default. To turn it on, run /sandbox in a session" | S7 | |
| C58 | Default reads include credential files such as `~/.ssh`; change with `filesystem.denyRead`. | "Most of the machine, including credential files such as ~/.ssh and ~/.aws/credentials" | S7 | |
| C59 | Network allowed domains start empty. | "checks each host against your allowed domains, which start empty" | S7 | |
| C60 | Hook script exits with code 2 to block an edit; Claude gets feedback. | "exits with code 2 to block the edit" ... "Claude receives feedback explaining why the edit was blocked" | S8 | |
| C61 | Register a PreToolUse hook with matcher Edit\|Write in `.claude/settings.json`. | "Add a PreToolUse hook to .claude/settings.json that runs the script before any Edit or Write tool call" | S8 | |
| C62 | Hook scripts must be executable. | "Hook scripts must be executable for Claude Code to run them" | S8 | |
| C63 | Claude can still change protected files with shell commands; add Edit deny rules. | "Claude can still change the protected files with shell commands." | S8 | |
| C64 | Prompt injection definition. | "Prompt injection is a technique where an attacker attempts to override or manipulate an AI assistant's instructions by inserting malicious text." | S9 | |
| C65 | In Manual mode, sensitive operations need approval. | "In Manual mode, sensitive operations require explicit approval" | S9 | |
| C66 | curl and wget are not auto-approved by default. | "Commands that fetch content from the web such as curl and wget are not auto-approved by default." | S9 | |
| C67 | `.mcp.json` servers have their own approval prompt; a `-p` session shows neither prompt. | "Servers in a project's .mcp.json have their own approval prompt" ... "A -p session shows neither prompt." | S9 | |
| C68 | Avoid piping untrusted content directly to Claude; use VMs. | "Avoid piping untrusted content directly to Claude" ... "Use virtual machines (VMs) to run scripts and make tool calls" | S9 | |
| C69 | No system is completely immune. | "While these protections significantly reduce risk, no system is completely" | S9 | |
| C70 | Anthropic does not security-audit MCP servers. | "does not security-audit or manage any MCP server" | S9 | |
| C71 | Plugin manifest at `.claude-plugin/plugin.json`. | "The manifest, a JSON file at .claude-plugin/plugin.json, gives the plugin its name" | S10 | |
| C72 | Plugin install scopes user, project (committed settings.json), local. | "User scope: enabled for you in every project on this computer" ... "Project scope: enabled for everyone who works in this repository, through the committed .claude/settings.json" | S10 | |
| C73 | Each collaborator still installs a project-scope plugin. | "Each collaborator still" | S10 | |
| C74 | Install from a marketplace with name after `@`. | "/plugin install commit-commands@claude-plugins-official" | S11 | |
| C75 | Official marketplace is added the first time you start an interactive session. | "Claude Code adds it the first time you start an interactive terminal session" | S11 | |
| C76 | Community marketplace added with `/plugin marketplace add anthropics/claude-plugins-community`. | "You add it in a Claude Code session with /plugin marketplace add anthropics/claude-plugins-community" | S11 | |
| C77 | Browse with the Discover tab of `/plugin`. | "Its Discover tab lists the plugins from your marketplaces." | S11 | |
| C78 | Anthropic does not review third-party marketplaces. | "Anthropic doesn't review third-party marketplaces" | S11 | |
| C79 | A plugin can execute arbitrary code with your user privileges. | "A Claude Code plugin you install can execute arbitrary code on your machine with your user privileges." | S12 | |
| C80 | Permission rules and sandbox cover tool calls, not code a plugin runs itself. | "cover the tool calls Claude makes, not the code a plugin runs by itself" | S12 | |
| C81 | Auto-update can change the files you reviewed. | "so the files you reviewed can change on disk" | S12 | |
| C82 | Details pane shows a Will install section. | "The details pane shows a Will install section listing the plugin's commands, agents, skills, hooks, and MCP and LSP servers." | S12 | |
| C83 | Read hooks/hooks.json, .mcp.json, bin/. | "hooks/hooks.json: the command each hook runs" | S12 | |
| C84 | `claude plugin details <name>` prints a Component inventory. | "run claude plugin details <plugin name> in your shell to print the same Component inventory" | S12 | |
| C85 | Remove with `claude plugin uninstall <plugin>`. | "with the --scope you installed it at" | S12 | |
| C86 | Superpowers is a development methodology built on composable skills. | "Superpowers is a complete software development methodology for your coding agents, built on top of a set of composable skills" | S13 | |
| C87 | Install from the official marketplace. | "/plugin install superpowers@claude-plugins-official" | S13 | |
| C88 | Workflow brainstorming, worktrees, plans, subagent development, TDD, code review. | "brainstorming - Activates before building anything." ... "test-driven-development - Activates during implementation." | S13 | |
| C89 | TDD skill deletes code written before tests. | "Deletes code written before tests." | S13 | |
| C90 | Skills include systematic-debugging and verification-before-completion. | "systematic-debugging - 4-phase root cause process" ... "verification-before-completion - Ensure it's actually fixed" | S13 | |
| C91 | Mandatory workflows, not suggestions. | "Mandatory workflows, not suggestions." | S13 | |
| C92 | Telemetry: visual companion logo loads from their website; disable with SUPERPOWERS_DISABLE_TELEMETRY. | "set the environment variable SUPERPOWERS_DISABLE_TELEMETRY to any true value" | S13 | |
| C93 | Context7 pulls up-to-date, version-specific docs into the agent context. | "Context7 pulls up-to-date, version-specific documentation and code examples straight from the source" | S14 | |
| C94 | Two modes: CLI + Skills, or MCP. | "CLI + Skills — installs a skill that guides your agent to fetch docs using ctx7 CLI commands (no MCP required)" | S14 | |
| C95 | Setup `npx ctx7 setup`, needs Node.js 22.13+. | "The ctx7 CLI requires Node.js 22.13 or newer." | S14 | |
| C96 | API key recommended for higher rate limits. | "API Key Recommended" | S14 | |
| C97 | MCP tools resolve-library-id and query-docs. | "resolve-library-id: Resolves a general library name into a Context7-compatible library ID." | S14 | |
| C98 | Context7 cannot guarantee accuracy or security of the docs. | "we cannot guarantee the accuracy, completeness, or security of all library documentation" | S14 | |
| C99 | CLAUDE.md management: claude-md-improver skill audits CLAUDE.md against codebase. | "Audits CLAUDE.md files against current codebase state" | S15 | |
| C100 | `/revise-claude-md` captures session learnings. | "Captures learnings from the current session" | S15 | |
| C101 | Caveman makes the agent say less and read less. | "Caveman make your AI agent say less and read less." | S16 | |
| C102 | Install `npx @caveman-ai/cli@latest`, needs Node.js 22.13+. | "Needs Node.js 22.13+." | S16 | |
| C103 | Six parts, all on after install. | "caveman is six parts. All on after install." | S16 | |
| C104 | Read less shrinks logs, JSON, CSV, test output before the model reads them. | "Logs, JSON, CSV, test output shrink before the model reads them" | S16 | |
| C105 | Originals stay on disk. | "Every original stays on your disk." | S16 | |
| C106 | Security warnings and irreversible actions get full sentences. | "Security warnings, irreversible actions, and confused users get full sentences." | S16 | |
| C107 | Skill alone: `npx skills add JuliusBrussee/caveman -g`. | "npx skills add JuliusBrussee/caveman -g" | S16 | |
| C108 | CLI sends usage stats by default; off with `caveman telemetry off` or `DO_NOT_TRACK=1`. | "The CLI sends usage stats by default" ... "caveman telemetry off or DO_NOT_TRACK=1" | S16 | |
| C109 | `caveman off <part>` turns one off; `caveman status`. | "caveman status shows what is on. caveman off browse turns one off." | S16 | |
| C110 | graphify is a Claude Code skill that builds a knowledge graph. | "A Claude Code skill. Type /graphify in Claude Code - it reads your files, builds a knowledge graph" | S17 | |
| C111 | Install `pip install graphifyy && graphify install`, Python 3.10+. | "pip install graphifyy && graphify install" | S17 | also "Python 3.10+" |
| C112 | Output in `graphify-out/` with `graph.json` and `GRAPH_REPORT.md`. | "graph.json       persistent graph - query weeks later without re-reading" | S17 | |
| C113 | `--update` re-extracts only changed files. | "re-extract only changed files, merge into existing graph" | S17 | |
| C114 | `graphify hook install` rebuilds graph after every commit. | "installs a post-commit hook that rebuilds the graph after every commit" | S17 | |
| C115 | Docs are extracted through Claude; images through Claude vision. | "Concepts + relationships via Claude" | S17 | |
| C116 | Edges tagged EXTRACTED, INFERRED, AMBIGUOUS. | "Every edge is tagged EXTRACTED, INFERRED, or AMBIGUOUS" | S17 | |
| C117 | Serena: symbol-level semantic retrieval, editing, refactoring via MCP. | "Serena provides essential semantic code retrieval, editing, refactoring and debugging tools" | S18 | |
| C118 | Language server backend by default, over 40 languages. | "support for over 40 programming languages" | S18 | |
| C119 | Do not install via an MCP or plugin marketplace. | "Do not install Serena via an MCP or plugin marketplace!" | S18 | |
| C120 | Install with uv; `serena init`. | "uv tool install -p 3.13 serena-agent" | S18 | |
| C121 | Basic tools disabled by default inside Claude Code. | "these tools are typically disabled by default" | S18 | |
| C122 | Serena has a memory system. | "a memory system for long-lived agent workflows" | S18 | |
| C123 | Code intelligence plugin connects to a language server through LSP; from the official marketplace. | "Each plugin connects Claude Code to a language server for one language through the Language Server Protocol (LSP)." | S19 | |
| C124 | Plugin does not include the language server; install the binary first. | "It doesn't include the language server." | S19 | |
| C125 | TypeScript binary install command. | "npm install -g typescript-language-server typescript" | S19 | |
| C126 | Install with `/plugin install typescript-lsp@claude-plugins-official`. | "/plugin install typescript-lsp@claude-plugins-official" | S19 | |
| C127 | Diagnostics line confirms the server started. | "Found N new diagnostic issues in M files" | S19 | |
| C128 | LSP tool is read-only. | "The tool is read-only." | S19 | |
| C129 | Works in terminal sessions, not cloud sessions. | "Code intelligence plugins work in terminal sessions." | S19 | |
| C130 | Plugins include pyright-lsp, jdtls-lsp. | "pyright-lsp" | S19 | table |
| C136 | graphify parses code locally with tree-sitter; it runs locally with no server. | "AST via tree-sitter + call-graph pass" ... "No Neo4j required, no server, runs entirely locally." | S17 | |
| C137 | Sandbox read access is changed with `filesystem.denyRead`. | "filesystem.denyRead" | S7 | table "Change it with" column |
| C138 | Plugin skills are namespaced like `/my-plugin:review`. | "Plugin skills are namespaced (like /my-plugin:review)" | S4 | |
| C139 | Claude reads CLAUDE.md at the start of every session. | "Claude reads them at the start of every session." | S2 | |
| C140 | The Superpowers optional visual companion loads its logo from the authors' website. | "By default, the Prime Radiant logo on brainstorming's optional visual companion feature is loaded from our website." | S13 | |
| C141 | The official marketplace lists the Anthropic language server plugins. | "Anthropic maintains every plugin in the table except liquid-lsp" | S19 | |
| C142 | Claude Code checks deny before ask and allow (Key words restates C42). | "deny, then ask, then allow" | S6 | |
| C131 | Practice repo has `.claude/` with agents, commands, hooks, skills, settings.json. | "Querying graphify" | dmoney-repo/.claude/settings.json | folder listing at 51db34a: agents/, commands/, hooks/, skills/, settings.json |
| C132 | Practice repo settings.json holds only a hooks block (a PreToolUse hook on Skill), no permissions block. | "PreToolUse" | dmoney-repo/.claude/settings.json | whole file read: one key, hooks |
| C133 | Practice repo reviewer subagent is read-only: tools Read, Grep, Glob, Skill. | "tools: Read, Grep, Glob, Skill" | dmoney-repo/.claude/agents/qa-reviewer-agent.md | |
| C134 | Practice repo `.gitignore` ignores `graphify-out/` and `.serena/`. | "graphify-out/" | dmoney-repo/.gitignore | file has two lines: graphify-out/, .serena/ |
| C135 | Practice repo `.mcp.json` names three servers: jira, playwright, dmoney-db. | "dmoney-db" | dmoney-repo/.mcp.json | server names only; no values copied |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F30 | Fixed: the deny rule now cites S6, and the hook S4. |
| facts | F94 | Fixed: "`/revise-claude-md` writes what the session taught into CLAUDE.md" (S15: "Revise command capturing session learnings into CLAUDE.md"), and "a project CLAUDE.md holds team-shared instructions" (S2: "Team-shared instructions for the project"). The review advice stays labelled as the tutorial's. |
| facts | F101 | Fixed: the `EXTRACTED`/`INFERRED`/`AMBIGUOUS` tags and `--update` now cite S17. "Rerun it after the code changes" and "never put an `INFERRED` edge in a bug report as a fact" are labelled as the tutorial's advice. |
| facts | F108 | Fixed: "Mandatory process". |
| facts | F123 | Fixed: the fix now cites S2. |
| facts | F135 | Fixed: "for type errors after edits". |
| voices | V1 | Fixed: deleted the sentence about what an MCP server is. |
| voices | V3 | Fixed: the plugin packs skills, hooks, subagents, and MCP servers. |
| voices | V4 | Fixed: the Bangla names the same four. |
| voices | V5 | Fixed: the Technical panel now says "loads only when" (S2: "These conditional rules only apply when Claude is working with files matching the specified patterns"), so the Layman "only" matches it. |
| voices | V6 | Fixed: as V5. |
| voices | V7 | Fixed: "By default, it still lets commands read most files". |
| voices | V8 | Fixed: "Plan mode does not edit source files." |
| voices | V9 | Fixed: the Bangla says source files. |
| voices | V10 | Fixed: "inserted text that tries to override Claude's instructions". |
| voices | V11 | Fixed: deleted "লুকানো". |
| voices | V12 | Fixed: "third-party marketplaces". |
| voices | V13 | Fixed: deleted the gloss. |
| voices | V14 | Fixed: deleted the definition; the sentence names the marketplace. |
| voices | V15 | Fixed: "The debugging skill is a 4-phase root cause process." |
| voices | V16 | Fixed: the Bangla says the same. |
| voices | V17 | Fixed: deleted "such as a function name". |
| voices | V18 | Fixed: deleted the gloss of a language server. |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | A deny rule blocks a tool. | "**Deny** rules prevent Claude Code from using the specified tool." | S6 | |
| R2 | `/revise-claude-md` writes what the session taught into CLAUDE.md. | "Revise command capturing session learnings into CLAUDE.md" | S15 | the image alt text of the README |
| R3 | A project CLAUDE.md holds team-shared instructions. | "Team-shared instructions for the project" | S2 | |
| R4 | Every graphify edge is tagged `EXTRACTED`, `INFERRED`, or `AMBIGUOUS`; `--update` re-extracts the changed files. | "Every edge is tagged `EXTRACTED`, `INFERRED`, or `AMBIGUOUS` - you always know what was found vs guessed." … "re-extract only changed files, merge into existing graph" | S17 | |
| R5 | A rule with `paths` loads only when Claude works with a matching file. | "These conditional rules only apply when Claude is working with files matching the specified patterns." | S2 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F54 | Rebutted and made exact: S6 says "When you choose \"Yes, and don't ask again\" and the approval saves permanently, such as for a Bash command or a WebFetch domain, Claude Code saves the rule to `.claude/settings.local.json`". The page now gives that condition. |
| facts | F74 | Fixed: "usually with a manifest". |
| facts | F95 | Fixed: the heading now says "Anthropic plugin". |
| facts | F110 | Fixed: the compare table now says "Anthropic plugin". |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R2.1 | When the approval saves permanently, "Yes, and don't ask again" saves the rule to `.claude/settings.local.json`. | "When you choose \"Yes, and don't ask again\" and the approval saves permanently, such as for a Bash command or a WebFetch domain, Claude Code saves the rule to `.claude/settings.local.json`" | S6 |  |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F57 | Rebutted: S6 line 29 says "When you choose \"Yes, and don't ask again\" and the approval saves permanently, such as for a Bash command or a WebFetch domain, Claude Code saves the rule to `.claude/settings.local.json` at the root of the git repository". The text is unchanged. |
| facts | F81 | Rebutted, and "By default" added: S11 line 36 says "Claude Code adds it the first time you start an interactive terminal session, unless a managed policy or `CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL` blocks it". |
| voices | V15 | Fixed: "reads your files and builds a knowledge graph, a map of a large codebase". |

## Round 4 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 4 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| voices | V15 | Fixed: deleted the gloss; "**graphify** reads your files and builds a knowledge graph." |
| voices | N1 | Fixed: as V15. |
| facts | N2 | No problem was reported in this bullet ("None"). |

## Round 5 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 5 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| voices | V15 | Fixed in the Technical table: the graphify row now says "A knowledge graph of your files" (S17: "it reads your files, builds a knowledge graph"). |
