# A Multi-Agent QA System — research notes (2026-11-15)

## Sources
S1. Create custom subagents — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/sub-agents — accessed 2026-11-15 — cache: cc-sub-agents.txt
S2. Best practices for Claude Code — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/best-practices — accessed 2026-11-15 — cache: cc-best-practices.txt
S3. Manage costs effectively — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/costs — accessed 2026-11-15 — cache: cc-costs.txt
S4. Orchestrate teams of Claude Code sessions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/agent-teams — accessed 2026-11-15 — cache: cc-agent-teams.txt
S5. Configure permissions — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permissions — accessed 2026-11-15 — cache: cc-permissions.txt
S6. Hooks reference — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/hooks — accessed 2026-11-15 — cache: cc-hooks.txt
S7. Choose a permission mode — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/permission-modes — accessed 2026-11-15 — cache: cc-permission-modes.txt
S8. Configure the sandboxed Bash tool — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/sandboxing — accessed 2026-11-15 — cache: cc-sandboxing.txt
S9. Orchestrate subagents at scale with dynamic workflows — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/workflows — accessed 2026-11-15 — cache: cc-workflows.txt
S10. Run Claude Code programmatically — Anthropic (Claude Code docs) — https://code.claude.com/docs/en/headless — accessed 2026-11-15 — cache: cc-headless.txt

The page numbers its sources in this order (S1 = source 1, and so on).

dMoney practice repo facts come from the public repo at commit 51db34a (cache clone `dmoney-repo/`). They have no `<Cite>` on the page. The page shows them under a "Where these facts come from" callout. No phone number, password, token, or other practice value from the repo is repeated.

Not on the page, because no cached source supports it: a documented "escalation" or "confidence" field for subagents (the four-role design, the escalation triggers, and the hand-off file names are the tutorial's own advice); any price.

## Claims
| # | Claim (one fact, as the page states it) | Exact quote from the source | Source | Notes |
|---|---|---|---|---|
| C1 | Each subagent runs in its own context window with its own system prompt, tool access, and permissions. | "Each subagent runs in its own context window with a custom system prompt, specific tool access, and independent permissions" | S1 | |
| C2 | Subagent requests count toward the same usage limits as the main conversation. | "It also sends its own requests, which count toward the same" | S1 | |
| C3 | Subagents can enforce constraints by limiting tools and specialize behavior with focused prompts. | "Enforce constraints by limiting which tools a subagent can use" ... "Specialize behavior with focused system prompts for specific domains" | S1 | |
| C4 | Subagents pay off for parallel work and for a reviewer that has not seen how the work was made. | "Running independent pieces of work at the same time, so the whole task finishes sooner" ... "Getting a reviewer that hasn't seen how the code was written" | S2 | |
| C5 | The cost is mostly tokens; a fresh subagent first gathers context and can be slower. | "What they cost you is mostly tokens" ... "a fresh subagent first has to gather context your conversation already had" | S2 | |
| C6 | Subagents give parallelism or a fresh pair of eyes, not a smarter answer. | "You get parallelism or a fresh pair of eyes out of it, but not a smarter answer." | S2 | |
| C7 | Many subagents that each return detailed results can use a lot of context. | "Running many subagents that each return detailed results can consume significant context" | S1 | |
| C8 | Agent teams add coordination overhead and use significantly more tokens than a single session. | "Agent teams add coordination overhead and use significantly more tokens than a single session" | S4 | |
| C9 | Agent teams use about 7x more tokens than standard sessions when teammates run in plan mode. | "Agent teams use approximately 7x more tokens than standard sessions when teammates run in plan mode" | S3 | |
| C10 | A subagent's own requests still draw on your usage; a smaller model lowers the spend. | "The subagent's own requests still draw on your usage." ... "choose a smaller model for a subagent" | S3 | |
| C11 | Subagent files are Markdown with YAML frontmatter. | "Subagents are Markdown files with YAML frontmatter." | S1 | |
| C12 | Project subagents live in `.claude/agents/`; user subagents in `~/.claude/agents/`. | "Project subagents (.claude/agents/) are ideal for subagents specific to a codebase" ... "User subagents (~/.claude/agents/) are personal subagents available in all your projects." | S1 | |
| C13 | Only `name` and `description` are required. | "Only `name` and `description` are required." | S1 | |
| C14 | The body becomes the system prompt. | "The body becomes the system prompt that guides the subagent's behavior." | S1 | |
| C15 | Claude Code ignores an unknown frontmatter field without an error. | "Claude Code ignores a field it doesn't recognize without reporting an error" | S1 | |
| C16 | `tools`: inherits every tool available to subagents if omitted. | "Inherits every tool available to subagents if omitted" | S1 | |
| C17 | `disallowedTools`: tools to deny, removed from the inherited or listed tools. | "Tools to deny, removed from inherited or specified list" | S1 | |
| C18 | `model` values. | "`sonnet`, `opus`, `haiku`, `fable`, a full model ID such as `claude-opus-5-5`, or `inherit`" | S1 | |
| C19 | `permissionMode` values. | "`default`, `acceptEdits`, `auto`, `dontAsk`, `bypassPermissions`, `plan`, or `manual` as an alias for `default`" | S1 | |
| C20 | `maxTurns`: maximum agentic turns before the subagent stops. | "Maximum number of agentic turns before the subagent stops" | S1 | |
| C21 | `skills`: preloaded at startup, full content injected. | "to preload into the subagent's context at startup. The full skill content is injected, not only the description" | S1 | |
| C22 | `mcpServers`: a name of a configured server or an inline definition. | "available to this subagent. Each entry is either a server name referencing an already-configured server" | S1 | |
| C23 | `hooks`: lifecycle hooks scoped to this subagent. | "scoped to this subagent. Ignored for" | S1 | |
| C24 | `memory`: `user`, `project`, or `local`. | "`user`, `project`, or `local`. Enables cross-session learning" | S1 | |
| C25 | Project memory directory path. | "`.claude/agent-memory/<name-of-agent>/`" | S1 | |
| C26 | `background`, `effort`, `isolation`, `omitClaudeMd`, `color`, `initialPrompt`, `autoCompactWindow`, `experimental` fields. | "Set to `true` to keep this subagent in the background even when Claude asks to wait for it" ... "Effort level when this subagent is active" ... "Set to `worktree` to run the subagent in a temporary" ... "Set to `true` to start this subagent without the user, project, and local CLAUDE.md files" ... "Display color for the subagent in the task list and transcript" ... "Auto-submitted as the first user turn when this agent runs as the main session agent" ... "for this subagent to a token count from `100000` to `1000000`" ... "Map of experimental options" | S1 | |
| C27 | Plugin subagents ignore `hooks`, `mcpServers`, and `permissionMode`. | "plugin subagents don't support the `hooks`, `mcpServers`, or `permissionMode` frontmatter fields" | S1 | |
| C28 | Claude Code picks up a changed agent file with no restart, except the first file in a new `agents` directory. | "Claude Code detects the change within a few seconds and the next delegation uses the updated definition, with no restart needed" ... "after creating a scope's first agent file in a new `agents` directory, restart to load it" | S1 | |
| C29 | A warning shows when the combined descriptions pass 15,000 tokens. | "When the combined descriptions of your subagents, except the built-in ones, exceed 15,000 tokens" | S1 | |
| C30 | Explore: fast, read-only, for searching codebases. | "A fast, read-only agent optimized for searching and analyzing codebases." | S1 | |
| C31 | Plan: a research agent used during plan mode. | "A research agent used during" ... "to gather context before presenting a plan" | S1 | |
| C32 | Explore and Plan: Write and Edit are denied; they start without CLAUDE.md. | "read-only tools; Write and Edit are denied" ... "Explore and Plan start without your CLAUDE.md files and the git status snapshot" | S1 | |
| C33 | General-purpose: complex, multi-step tasks with exploration and action. | "A capable agent for complex, multi-step tasks that require both exploration and action." | S1 | |
| C34 | Claude delegates from the request, the `description` field, and the context; "use proactively" encourages it. | "Claude automatically delegates tasks based on the task description in your request, the `description` field in subagent configurations, and current context" ... "include phrases like" | S1 | |
| C35 | Explicit invocation: natural language, @-mention, `--agent` or the `agent` setting. | "name the subagent in your prompt; Claude decides whether to delegate" ... "@-mention: guarantees the subagent runs for one task" ... "the whole session runs as that subagent via the `--agent` flag or the `agent` setting" | S1 | |
| C36 | The typed form is `@agent-<name>`. | "`@agent-<name>` for local subagents" | S1 | |
| C37 | You cannot preload a skill with `disable-model-invocation: true`; without `skills`, the subagent can still invoke skills. | "You can't preload skills that set" ... "the subagent can still discover and invoke project, user, and plugin skills through the Skill tool during execution" | S1 | |
| C38 | Each subagent starts with a fresh context; it does not see history, invoked skills, or read files; Claude writes a delegation message. | "Each subagent starts with a fresh, isolated context window. It doesn't see your conversation history, the skills you've already invoked, or the files Claude has already read." ... "Claude composes a delegation message that summarizes the task" | S1 | |
| C39 | A rule that must reach a subagent goes in the delegation prompt. | "restate it in the prompt you give Claude when delegating" | S1 | |
| C40 | Only the relevant summary returns to the main conversation. | "only the relevant summary returns to your main conversation" | S1 | |
| C41 | Claude Code scans each subagent's final report; the scan does not judge if content is malicious. | "Claude Code scans each subagent's final report before Claude reads it." ... "The scan doesn't judge whether content is malicious" | S1 | |
| C42 | `/code-review` reviews the diff in a fresh subagent that never saw the conversation. | "reviews the diff in a fresh subagent that never saw your conversation" | S2 | |
| C43 | A reviewer asked to find problems will always find something. | "A reviewer that's asked to find problems will always find" | S2 | |
| C44 | A read-only reviewer (`tools: Read, Grep, Glob`) is enforced by Claude Code, not by the prompt. | "Now it's a reviewer that can't edit anything, and that limit is enforced by Claude Code rather than requested in a prompt." | S2 | |
| C45 | Subagents never get `AskUserQuestion`. | "The first filter removes these tools, even when listed in the `tools` field" ... "AskUserQuestion" | S1 | |
| C46 | A spawned subagent starts in the background by default; background subagents surface permission prompts in the main session. | "With nothing configured, a subagent that Claude spawns from your main conversation starts in the background." ... "Background subagents surface every permission prompt in your main session." | S1 | |
| C47 | Rules are evaluated deny, then ask, then allow. | "Rules are evaluated in order: deny, then ask, then allow." | S5 | |
| C48 | Ask rules prompt for confirmation; deny rules prevent the tool. | "Ask rules prompt for confirmation when Claude tries to use the specified tool." ... "Deny rules prevent Claude Code from using the specified tool." | S5 | |
| C49 | Permission rules are enforced by Claude Code, not by the model. | "Permission rules are enforced by Claude Code, not by the model." | S5 | |
| C50 | `Edit` rules apply to all built-in tools that edit files. | "`Edit` rules apply to all built-in tools that edit files." | S5 | |
| C51 | A Bash rule is not a security boundary around the program. | "isn't a security boundary around the program" | S5 | |
| C52 | `PreToolUse` has four outcomes: allow, deny, ask, defer; ask prompts the user. | "four outcomes (allow, deny, ask, or defer)" ... "prompts the user to confirm" | S6 | |
| C53 | In a `-p` run where no one can answer, Claude reads the reason in the tool result. | "run where no one can answer that prompt, Claude reads the reason in the tool result instead" | S6 | |
| C54 | `SubagentStop` runs when a subagent finishes, matches on agent type, can block the stop, and gets the final message. | "Runs when a Claude Code subagent has finished responding. Matches on agent type" ... "Prevents the subagent from stopping" ... "field contains the text content of the subagent's final response" | S6 | |
| C55 | `Stop` hooks in frontmatter become `SubagentStop`. | "`Stop` hooks in frontmatter are automatically converted to `SubagentStop` events" | S1 | |
| C56 | A `PreToolUse` hook in `settings.json` runs before every subagent tool. | "a `PreToolUse` hook in `settings.json` also runs before every tool a subagent uses" | S1 | |
| C57 | A project subagent's frontmatter hooks are skipped until the folder is trusted. | "Until you trust the folder, the subagent still runs, but Claude Code skips its frontmatter hooks" | S1 | |
| C58 | Plan mode researches and proposes without edits; edits wait for plan approval. | "Plan mode tells Claude to research and propose changes without making them." ... "edits stay blocked until you approve the plan" | S7 | |
| C59 | When the main conversation is in plan mode, the subagent stays in plan mode. | "When the main conversation is in `plan` mode, the subagent stays in plan mode whichever `permissionMode` you set" | S1 | |
| C60 | Under bypassPermissions, acceptEdits, or auto in the main conversation, the subagent's `permissionMode` is ignored. | "the subagent runs in that same mode and Claude Code ignores the `permissionMode` you set" | S1 | |
| C61 | `dontAsk` auto-denies calls that would prompt. | "Auto-denies calls that would prompt" | S1 | |
| C62 | A `disallowedTools` entry with a specifier removes the whole tool; use a Bash deny rule instead. | "still removes the whole tool from the subagent, not only the matching commands" ... "To keep Bash and block specific commands, add a" | S1 | |
| C63 | `disallowedTools: mcp__*` withholds every MCP tool; inline MCP servers stay out of the parent. | "Withhold every MCP tool from any server" ... "The subagent gets the tools; the parent conversation doesn't." | S1 | |
| C64 | Subagents can nest up to three layers; omit `Agent` to keep a reviewer from spawning. | "up to three layers below the main conversation" ... "omit `Agent` from its" | S1 | |
| C65 | By default, 20 running subagents is the concurrent limit. | "By default, when 20 subagents are running in a session" | S1 | |
| C66 | The Bash sandbox is an OS-enforced boundary; off by default; shell commands only. | "The Bash sandbox is a boundary that the operating system enforces around the shell commands Claude runs" ... "The sandbox is off by default." ... "The sandbox covers shell commands only." | S8 | |
| C67 | File tools, MCP servers, and hooks run outside the sandbox; allowed network domains start empty. | "Claude's file tools, MCP servers, and hooks" ... "which start empty" | S8 | |
| C68 | Agent teams are experimental and disabled by default; enable with the env var. | "Agent teams are experimental and disabled by default." ... "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1" | S4 | |
| C69 | One session is the lead; teammates message each other directly. | "One session acts as the team lead, coordinating work, assigning tasks, and synthesizing results." ... "Teammates message each other directly" | S4 | |
| C70 | For sequential tasks, a single session or subagents work better. | "For sequential tasks, same-file edits, or work with many dependencies, a single session or" | S4 | |
| C71 | Two teammates that edit the same file overwrite each other. | "Two teammates editing the same file leads to overwrites." | S4 | |
| C72 | Keep teams small; use Sonnet for teammates. | "Keep teams small." ... "Use Sonnet for teammates." | S3 | |
| C73 | A subagent definition can be reused for a teammate. | "You can also reuse a subagent definition as an" | S1 | |
| C74 | A dynamic workflow is a JavaScript script that orchestrates many subagents; the script decides what runs next; dozens to hundreds of agents. | "A dynamic workflow is a JavaScript script that orchestrates many" ... "Dozens to hundreds of agents per run" | S9 | |
| C75 | A workflow can have independent agents adversarially review each other's findings. | "it can have independent agents adversarially review each other's findings before they're reported" | S9 | |
| C76 | `claude -p` runs non-interactively; `--allowedTools` auto-approves tools; exit code 0 on success. | "To run Claude Code in non-interactive mode, pass `-p`" ... "--allowedTools for" ... "Claude Code exits with code 0 on success and a non-zero code when the run fails" | S10 | |
| C77 | `--bare` skips auto-discovery of hooks, skills, subagents, MCP servers, and CLAUDE.md. | "Add `--bare` to reduce startup time by skipping auto-discovery of hooks, skills, custom commands" ... "installed plugins, MCP servers, auto memory, and CLAUDE.md" | S10 | |
| C78 | Without `--bare`, a `-p` session runs project hooks even in an untrusted folder. | "a `-p` session runs the hooks in a project's `.claude/settings.json`" | S10 | |
| C79 | In non-interactive mode, `--agents` accepts a JSON file path. | "`--agents` also accepts the path to a JSON file holding the same object" | S1 | |
| C80 | `--agent` makes the main thread take on a subagent's tool restrictions and model. | "to start a session where the main thread itself takes on that subagent's tool restrictions and model" | S1 | |
| C81 | dMoney: the reviewer agent has only Read, Grep, Glob, and Skill. | "tools: Read, Grep, Glob, Skill" | dmoney-repo/.claude/agents/qa-reviewer-agent.md | no cite on page |
| C82 | dMoney: the reviewer runs on Opus 5.5. | "model: claude-opus-5-5" | dmoney-repo/.claude/agents/qa-reviewer-agent.md | |
| C83 | dMoney: the reviewer returns a verdict per bug and a gate. | "returns APPROVED / FLAGGED / REJECTED per bug plus an overall gate (PASS or BLOCKED)" | dmoney-repo/.claude/agents/qa-reviewer-agent.md | |
| C84 | dMoney: the reviewer has no Write, Edit, or Bash tool. | "You are read-only. You have no Write, Edit or Bash tool" | dmoney-repo/.claude/agents/qa-reviewer-agent.md | |
| C85 | dMoney: the test executor has Read, Write, Glob, Grep, Bash, Skill; Sonnet; preloads `execute-test`. | "tools: Read, Write, Glob, Grep, Bash, Skill" ... "model: sonnet" ... "skills: - execute-test" | dmoney-repo/.claude/agents/test-executor-agent.md | |
| C86 | dMoney: the test executor does not design tests or raise bugs. | "It does not design tests and does not raise bugs." | dmoney-repo/.claude/agents/test-executor-agent.md | |
| C87 | dMoney: the test executor writes a result file in `.artifacts/`. | "then writes .artifacts/<module jira_id>.test-result.md" | dmoney-repo/.claude/agents/test-executor-agent.md | |
| C88 | dMoney: the repo has skills `understand-task`, `test-design`, `blast-radius`, `find-bug`. | "name: understand-task" ... "name: test-design" ... "name: blast-radius" ... "name: find-bug" | dmoney-repo/.claude/skills/*/SKILL.md | |
| C89 | Deny rules hold in every permission mode, including auto and `bypassPermissions`; settings take `ask` and `deny` lists of rules. | "rules hold in every permission mode, including auto and `bypassPermissions`" | S2 | The settings example with an `ask` list is at cc-best-practices.txt line 338. |
| C90 | `/permissions` lists all permission rules and the settings file each comes from. | "The dialog lists all permission rules and the `settings.json` file each rule comes from." | S5 | |
| C91 | An `Edit` rule that starts with `/` is relative to the settings source, for example `Edit(/src/**/*.ts)`. | "Path relative to the settings source" | S5 | |
| C92 | Subagents return results to the caller; agent teammates message each other. | "Own context window; results return to the caller" | S4 | |
| C93 | Type `@` and pick the agent from the typeahead. | "Type `@` and pick the subagent from the typeahead" | S1 | |

## Round 1 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 1 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F76 | Fixed: "By default, subagents can nest up to three layers below the main conversation." |
| voices | V1 | Fixed: deleted the definition of tokens and the gloss of the context window. |
| voices | V5 | Fixed in the Technical panel: S1 says "YAML frontmatter between `---` markers at the top of its file", so the Technical panel now says so, and the Layman matches it. |
| voices | V7 | Fixed: "start without your CLAUDE.md file". |
| voices | V9 | Fixed: "Then the evidence is kept." |
| voices | V13 | Fixed: "every built-in editing tool". |
| voices | V14 | Fixed: "if the main session runs in `bypassPermissions`, `acceptEdits`, or auto mode, the helper's own permission mode is ignored". |
| voices | V15 | Fixed: "সব built-in editing tool". |

| # | Claim | Quote | Source | Note |
|---|---|---|---|---|
| R1 | A subagent file has YAML frontmatter between `---` markers at the top. | "Configure a subagent with YAML frontmatter between `---` markers at the top of its file" | S1 | |
| R2 | By default, subagents can nest up to three layers below the main conversation. | "By default, a subagent can spawn subagents of its own, up to three layers below the main conversation." | S1 | |

## Round 2 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 2 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F4 | Fixed: deleted "so the whole task finishes sooner". |
| facts | F6 | Fixed: "count against the same usage". Same in all three panels. |
| voices | V7 | Fixed: `@agent-<name>`, and "for that task". |
| voices | V15 | Fixed: "skips the automatic search for". |

## Round 3 fixes

The fixes were applied by the orchestrating session, which did not write the page, after the round 3 reports. Each line names the report, the row, and the action.

| Report | Row | Action |
|---|---|---|
| facts | F108 | Fixed: S4, "For sequential tasks … a single session or subagents are more effective", with `<Cite n={4} />`. |
| voices | V2 | Fixed: deleted the added result. |
| voices | V3 | Fixed: removed the cite from the tutorial's design sentence. |
| voices | V4 | Fixed: as V3. |
| voices | V5 | Fixed: "hooks that run only while this agent works". |
| voices | V11 | Fixed: "checks each tool call. It can allow, deny, ask you, or defer." |
