# Voices fact check: QA Workspace & Tooling

Page: `content/agentic-qa/qa-workspace.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-qa-workspace.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / qa-workspace (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | What goes where in a project | Layman | FAIL | "An MCP server connects Claude to a system such as Jira." The Technical panel of this section does not say what an MCP server is, and cite 1 does not support that sentence. Fix: delete the sentence. |
| 2 | What goes where in a project | Bangla | PASS | Left out: the table's Commit? column, the `settings.local.json` gitignore detail, the `commands/` and `output-styles/` rows, the `~/.claude.json` row, the `.env` transcript example, and the repo details (`jira`, `playwright`, `dmoney-db`, the reviewer subagent, `.gitignore`, the PreToolUse hook). |
| 3 | Pick the right mechanism for each QA job | Layman | FAIL | "**A plugin** packs all of these for another repo." The Technical panel says a plugin bundles skills, hooks, subagents, and MCP servers. It does not bundle CLAUDE.md or rules, so "all of these" says more. Fix: "A plugin packs skills, hooks, subagents, and MCP servers for another repo." |
| 4 | Pick the right mechanism for each QA job | Bangla | FAIL | "**Plugin** এগুলো bundle করে আরেকটি repo-তে নিয়ে যায়।" "এগুলো" means all the items in the list, including CLAUDE.md and rules. The Technical panel lists only skills, hooks, subagents, and MCP servers. Fix: name those four. |
| 5 | CLAUDE.md and rules for test work | Layman | FAIL | "A rule with `paths` loads only when Claude works on a matching file", and "loads only for your Playwright specs". The Technical panel says it loads when Claude reads, writes, or edits a matching file. It does not say "only". Fix: drop "only", or say "loads when Claude reads, writes, or edits a matching file". |
| 6 | CLAUDE.md and rules for test work | Bangla | FAIL | "`paths` থাকলে rule শুধু মিলে যাওয়া file-এ কাজের সময় load হয়।" "শুধু" (only) is not in the Technical panel. Fix: drop "শুধু". |
| 7 | Permissions and the sandbox | Layman | FAIL | "It still lets commands read most files, even `~/.ssh`." The Technical panel says "By default" sandboxed commands can read most of the machine. The limit was dropped, so the claim is now stronger. Fix: "By default, it still lets commands read most files, even `~/.ssh`." |
| 8 | Permissions and the sandbox | Layman | FAIL | "Plan mode looks but does not edit." The Technical panel says plan "does not edit source files". The scope was dropped. Fix: "Plan mode does not edit source files." |
| 9 | Permissions and the sandbox | Bangla | FAIL | "Plan mode edit করে না।" The Technical panel says it does not edit source files. The scope was dropped. Fix: "Plan mode source file edit করে না।" |
| 10 | Hooks and untrusted content | Layman | FAIL | "Prompt injection means hidden text that tries to take over Claude's instructions." The Technical panel says "inserts text to override the assistant's instructions". It does not say "hidden". Fix: "inserted text". |
| 11 | Hooks and untrusted content | Bangla | FAIL | "লুকানো text দিয়ে assistant-এর নির্দেশনা বদলানোর আক্রমণ।" "লুকানো" (hidden) is an added claim. Fix: "text ঢুকিয়ে" (inserting text). |
| 12 | Plugins and marketplaces | Layman | FAIL | "Anthropic does not review other marketplaces." The Technical panel says "third-party marketplaces". "Other" than the official one is wider, because it would include other Anthropic marketplaces. Fix: "third-party marketplaces". |
| 13 | Plugins and marketplaces | Layman | FAIL | "a marketplace, a plugin catalog". The Technical panel does not define a marketplace. Fix: delete the gloss, or say "the list of plugins is in the Discover tab". |
| 14 | Plugins and marketplaces | Bangla | FAIL | "Marketplace হলো plugin-এর catalog।" This definition is not in the Technical panel. Fix: delete the sentence. |
| 15 | Community tools: workflow, docs, and memory | Layman | FAIL | "The debugging skill helps testers most." The Technical panel says only that `systematic-debugging` is a 4-phase root cause process. "Most" is an added ranking. Fix: "The debugging skill is a 4-phase root cause process." |
| 16 | Community tools: workflow, docs, and memory | Bangla | FAIL | "Tester-এর জন্য `systematic-debugging` সবচেয়ে কাজের।" "সবচেয়ে" (most) is an added ranking. Fix: "`systematic-debugging` একটি ৪ ধাপের root cause process।" |
| 17 | Community tools: tokens and code navigation | Layman | FAIL | "**Serena** ... finds and edits code by symbol, such as a function name." The example "a function name" is not in the Technical panel. Fix: delete "such as a function name". |
| 18 | Community tools: tokens and code navigation | Layman | FAIL | "a language server, the tool that shows errors in your editor." This explanation is not in the Technical panel. Fix: delete the gloss. |
| 19 | Community tools: tokens and code navigation | Bangla | PASS | Left out: install commands, Node.js version, the six parts, telemetry off, `--update`, `graphify hook install`, "over 40 languages", the Serena setup, the `LSP` tool, and the compare table. |
| 20 | Practice | Layman | PASS | Left out: the language server install step, "Keep the test command, the test folder, and the test-user rule", the example prompts, `.claude/rules/tests.md`, the file paths, and the "Check the result" paragraph. |
| 21 | Practice | Bangla | PASS | Same details left out as in the Layman panel. |
| 22 | Common mistakes | Layman | PASS | Left out: the fixes `filesystem.denyRead` and moving entries into `Read(...)` deny rules, and the "attach the original output" advice. |
| 23 | Common mistakes | Bangla | PASS | Same details left out as in the Layman panel. |

Bangla notes:
- Section "Plugins and marketplaces" (Layman and Bangla): "Claude Code adds the official one by itself" and "নিজেই যোগ করে" leave out the Technical condition "the first time you start an interactive terminal session". This is not a FAIL, but it is a weaker statement than the Technical one.
- Section "Hooks and untrusted content": "Manual mode-এ ... তবে `-p` session-এ trust prompt আসে না" uses "তবে" (but). This suggests the two facts contrast. The Technical panel gives them as separate points, and the trust prompt is about `.mcp.json` servers. Not a FAIL.
- No product name, command, or path is translated. The hyphen before Bangla suffixes is present. Readers are addressed as আপনি. I found no unnatural Bangla.

Open FAILs after round 1: 17

Script check of round 1: 23 rows, 17 FAIL rows.

## Voices fact check: agentic-qa / qa-workspace (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | What goes where in a project | Layman | PASS | The table is cut to bullets. Left out: the file-by-file "Commit?" column details, `commands/`, output styles, `~/.claude.json`, and the dMoney names (`jira`, `playwright`, `dmoney-db`, the reviewer tools, `.gitignore`). "No rule that blocks reads of secrets" matches "no `permissions` block". |
| 2 | What goes where in a project | Bangla | PASS | Same details left out as in the Layman panel. All facts and cites match the Technical panel. |
| 3 | Pick the right mechanism for each QA job | Layman | PASS | Left out: the "Instructions are not guardrails" explanation, "runs only when you type its name", output style, the ESLint example, and the `.claude/agents/` location. "A good one" for the three-tool reviewer matches the table row. |
| 4 | Pick the right mechanism for each QA job | Bangla | PASS | Same as the Layman panel. "(`paths` সহ)" and the boundary-value example are in the Technical table. |
| 5 | CLAUDE.md and rules for test work | Layman | PASS | Left out: "context, not enforced configuration", subfolders, a rule without `paths` loads at launch, "`paths` is the only field", the v2.1.283 requirement, and the tutorial tip. "Loads only for your Playwright specs" follows from the example rule's `paths`. |
| 6 | CLAUDE.md and rules for test work | Bangla | PASS | Same details left out. The cite 1 on "frontmatter field একটিই" matches the Technical sentence. |
| 7 | Permissions and the sandbox | Layman | PASS | Left out: first-match order, Read deny also blocks Edit and Write, `/permissions`, "Yes, and don't ask again", sandbox platforms, empty allowed domains, "file tools, MCP servers, and hooks run outside", `plan` and `default` modes. |
| 8 | Permissions and the sandbox | Bangla | PASS | Same details left out. "Sandbox off by default, turn on with `/sandbox`" and "file tool, MCP, hook outside" are in the Technical panel with cite 7. |
| 9 | Hooks and untrusted content | Layman | PASS | Left out: the `Edit\|Write` matcher, "script must be executable", the `.env`/`package-lock.json`/`.git/` example, `curl`/`wget`, the `.mcp.json` approval prompt, and "avoid piping untrusted content". |
| 10 | Hooks and untrusted content | Bangla | PASS | Same details left out. The "তবে" before the `-p` statement matches the Technical "but a `-p` session shows no trust prompts". |
| 11 | Plugins and marketplaces | Layman | PASS | Left out: the manifest path, namespacing, user and local scopes, the `/plugin install` example, "first interactive session", the Discover tab, "sandbox also does not cover plugin code", auto-update, and the numbered review steps. "Adds the official one by itself" drops the "first start of an interactive terminal session" condition, but it is still true. |
| 12 | Plugins and marketplaces | Bangla | PASS | Same details left out. The `/plugin install` example is in the Technical panel. |
| 13 | Community tools: workflow, docs, and memory | Layman | PASS | Superpowers' skill list is shortened to "brainstorm, plan, build, test first, review". "Build" stands for subagent-driven development; worktrees and finishing the branch are left out. Also left out: install commands, `verification-before-completion`, telemetry, Context7 MCP tools and Node version, `claude-md-improver` name, and the shared-CLAUDE.md risk. |
| 14 | Community tools: workflow, docs, and memory | Bangla | PASS | Same details left out. "Official marketplace থেকে install হয়" matches the `/plugin install superpowers@claude-plugins-official` command in the Technical panel. |
| 15 | Community tools: tokens and code navigation | Layman | PASS | Left out: install commands, the six parts, Node version, security warnings staying in full sentences, `caveman telemetry off`, graphify's local parsing, `--update`, the hook, Serena setup and memory, LSP install steps, the `LSP` tool, "not cloud sessions", and the compare table. "A map of how your files connect" and "unclear" for `AMBIGUOUS` are plain-word versions. |
| 16 | Community tools: tokens and code navigation | Bangla | PASS | Same details left out. "Update না করলে graph পুরনো হয়" matches "rerun it after the code changes" and the table's "Stale graph". "শুধু terminal session-এ" matches "Terminal only". |
| 17 | Practice | Layman | PASS | Left out: the exact prompts, file paths such as `.claude/rules/tests.md`, the test-design checklist, the "install the language server first" step, the Memory-files check, and the "Check the result" paragraph. |
| 18 | Practice | Bangla | PASS | Same details left out. |
| 19 | Common mistakes | Layman | PASS | Left out: the fixes (move `.claudeignore` entries into `Read(...)` deny rules, `filesystem.denyRead`, attach original output) and the reasons. No added facts. |
| 20 | Common mistakes | Bangla | PASS | Same details left out. |

Bangla notes:
- None. The text addresses the reader as আপনি in the imperative form. Commands, flags, paths, and product names stay in English. Hyphens between English words and Bangla suffixes are present.

Open FAILs after round 2: 0

Script check of round 2: 20 rows, 0 FAIL rows.

## Voices fact check: agentic-qa / qa-workspace (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | What goes where in a project | Layman | PASS | Leaves out the full file table, `.claude/commands/`, `output-styles/`, `~/.claude.json`, and the "gitignored when Claude Code saves" limit. "Deny reads of secret files" restates the Technical docs suggestion. |
| 2 | What goes where in a project | Bangla | PASS | Same details left out as the Layman panel. Every sentence is in the Technical panel with the same cites. |
| 3 | Pick the right mechanism for each QA job | Layman | PASS | Leaves out the table rows for output style and the `PostToolUse` ESLint example. The closing advice ("use a hook or a permission rule") is the Technical panel's own uncited advice. It sits under cite 4 at the end of the paragraph, but cite 4 does support the "request, not a guarantee" and `disable-model-invocation` sentences. |
| 4 | Pick the right mechanism for each QA job | Bangla | PASS | Same as the Layman panel. "ভালো উদাহরণ" restates that the docs use this tool list for a read-only subagent. |
| 5 | CLAUDE.md and rules for test work | Layman | PASS | Leaves out the "target" wording, `paths` loading at launch when absent, and `~/.claude/rules/` applying to all projects. It also leaves out the v2.1.283 requirement for `/doctor prompt-audit`. "Small files" is a mild added adjective, since the Technical panel says only "one topic in each file". Neither is a FAIL, but both could be tightened. |
| 6 | CLAUDE.md and rules for test work | Bangla | PASS | Same details left out as the Layman panel, including the v2.1.283 requirement. "ছোট file" has the same mild adjective. The `paths`-only frontmatter claim has cite 1, which matches the Technical panel. |
| 7 | Permissions and the sandbox | Layman | PASS | Leaves out the "first match wins" detail, the Read-deny-also-blocks-Edit/Write point, the `/permissions` detail, `/sandbox`, the supported platforms, the empty network domains, the file tools/MCP/hooks running outside the sandbox, and the `default` mode. "Deny rules do not stop a script" drops the "Read and Edit" qualifier, but the claim is still true. |
| 8 | Permissions and the sandbox | Bangla | PASS | Same details left out. "File tool, MCP server আর hook এর বাইরে চলে" matches the Technical sentence. |
| 9 | Hooks and untrusted content | Layman | PASS | Leaves out the `Edit|Write` matcher, the executable requirement, the `.env`/lockfile/`.git/` example, `curl`/`wget`, and the `.mcp.json` approval prompt. "A `-p` session shows no trust prompts" is stated generally, as it is in the Technical panel. The tutorial-advice sentence lists the examples as untrusted. The Technical panel says "much of what Claude reads is untrusted", so this is a small loss of the limit but is not stronger in substance. |
| 10 | Hooks and untrusted content | Bangla | PASS | Same details left out. The "তবে" (but) before the `-p` sentence contrasts it with the Manual-mode approval sentence. The Technical panel ties the `-p` sentence to `.mcp.json` server prompts, so this is a small shift. The claim itself still matches. |
| 11 | Plugins and marketplaces | Layman | PASS | Leaves out the manifest path, the namespacing, user and local scope, `/plugin install` syntax, the Discover tab, the "first interactive session" limit on the official marketplace being added, auto-update, `claude plugin details`, and uninstall. "Claude Code adds the official one by itself" drops that first-session limit but stays true. |
| 12 | Plugins and marketplaces | Bangla | PASS | Same details left out. "Package" for the Technical panel's "directory of components" is a small change in wording, not in meaning. |
| 13 | Community tools: workflow, docs, and memory | Layman | PASS | Leaves out the install commands, the worktrees and finishing steps, `verification-before-completion`, the visual companion and telemetry, the Context7 Node.js and API key details, and the MCP tool names. "Build" stands for subagent-driven development. |
| 14 | Community tools: workflow, docs, and memory | Bangla | PASS | Same details left out. Every claim and cite matches the Technical panel. |
| 15 | Community tools: tokens and code navigation | Layman | FAIL | "**graphify** builds a knowledge graph, a map of how your files connect." The Technical panel never says the graph shows how files connect. It says only "knowledge graph in `graphify-out/`", and the table says "A map of a large codebase". This is an added explanation with cite 17. Fix: "**graphify** reads your files and builds a knowledge graph, a map of a large codebase." Other sentences PASS. Left out: the install commands, "six parts", telemetry off, local parsing, `--update`, the Serena setup, and the LSP install steps and terminal-only limit. |
| 16 | Community tools: tokens and code navigation | Bangla | PASS | Leaves out the same details as the Layman panel. The graphify sentence "Update না করলে graph পুরনো হয়" restates the table's "Stale graph" and the `--update` advice. "`INFERRED` edge একটি অনুমান" matches "what was guessed". |
| 17 | Practice | Layman | PASS | Leaves out the exact prompts, the file paths, the "Read Will install first" step, and installing the language server before the plugin (step 6 now misses that prerequisite, but adds no fact). Cites match. |
| 18 | Practice | Bangla | PASS | Same details left out. Step 6 has the same missing language-server prerequisite. |
| 19 | Common mistakes | Layman | PASS | Leaves out the fixes (move `.claudeignore` entries into `Read(...)` deny rules, `filesystem.denyRead`, and path-scoped rules and skills). Cites 4, 6, 7, 3, 12, 16, 17, and 2 match the Technical panel. |
| 20 | Common mistakes | Bangla | PASS | Same as the Layman panel. |

Bangla notes:
- None that need a FAIL. "Package" for plugin, where the Technical panel says "directory", reads naturally and matches the Key words table.
- The Bangla uses imperative forms (করুন) and does not use the word আপনি, except in "আপনার". This is natural Bangla and is acceptable.
- Commands, flags, paths, and product names are kept in English. Hyphens before Bangla suffixes are present, for example `~/.claude`-এর, `.mcp.json`-এ, and library-র.
- No unnatural phrasing found.

Open FAILs after round 3: 1

Script check of round 3: 20 rows, 1 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / qa-workspace (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F57 | facts | RESOLVED | S6 line 29 says: "When you choose \"Yes, and don't ask again\" and the approval saves permanently, such as for a Bash command or a WebFetch domain, Claude Code saves the rule to `.claude/settings.local.json` at the root of the git repository". Page line 261 says: "When the approval saves permanently, such as for a Bash command, \"Yes, and don't ask again\" saves the rule to `.claude/settings.local.json`." The source text is in the file and supports the claim. The page keeps the "when the approval saves permanently" limit. |
| F81 | facts | RESOLVED | S11 line 36 says: "Claude Code adds it the first time you start an interactive terminal session, unless a managed policy or `CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL` blocks it". Page line 354 says: "By default, Claude Code adds the official marketplace the first time you start an interactive terminal session." "By default" covers the "unless … blocks it" limit. |
| V15 | voices | STILL-FAIL | Page line 478 (Layman) now says "reads your files and builds a knowledge graph, a map of a large codebase." The earlier "how your files connect" problem is gone. The new wording still fails, because the phrase "a map of a large codebase" is not in S17. S17 line 5 says "it reads your files, builds a knowledge graph, and gives you back structure you didn't know was there." S17 line 12 says it works on "any folder - your codebase, notes, papers, anything". The word "large" is not in S17. The Technical table (line 469) has the same "A map of a large codebase" text with cite 17. The source does not support it, so the Layman line is not a faithful copy of a supported fact. Fix: in the Layman panel, write "**graphify** reads your files and builds a knowledge graph. <Cite n={17} />" Also change the table cell on line 469 to "A knowledge graph of your files", or to "A knowledge graph in `graphify-out/`". |

New problems in changed lines:
- Line 478 (changed line, Layman). "a map of a large codebase" is not in S17, as the V15 row explains. S17 says the tool works on "any folder - your codebase, notes, papers, anything". "Large" is an added claim, and "codebase" narrows the scope. Fix: remove the phrase, as in the V15 row.
- Line 354 (changed line). None. "By default" is a faithful hedge for S11's "unless … blocks it" limit.

Open FAILs after round 4: 2

## Verification of the open rows, facts and voices: agentic-qa / qa-workspace (round 5, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| V15 | voices | STILL-FAIL | The Layman line 478 is fixed. It now reads "**graphify** reads your files and builds a knowledge graph. <Cite n={17} />", which matches S17 line 5: "it reads your files, builds a knowledge graph". The Technical table cell on line 469 was not changed. It still reads "A map of a large codebase" with cite 17. S17 does not say "map" or "large", and S17 line 12 says the tool works on "any folder - your codebase, notes, papers, anything". Fix: change the cell on line 469 to "A knowledge graph of your files". Alternatively, use "A knowledge graph in `graphify-out/`". |
| N1 | voices | RESOLVED | The line 478 phrase "a map of a large codebase" is gone. The Layman text now says only "reads your files and builds a knowledge graph", and S17 line 5 supports it. |
| N2 | facts | RESOLVED | Line 354 reads "By default, Claude Code adds the official marketplace the first time you start an interactive terminal session." S11 line 36 reads "adds it the first time you start an interactive terminal session, unless a managed policy or `CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL` blocks it". S11 line 55 reads "By default, Claude Code adds the official marketplace". "By default" is a faithful hedge for the "unless … blocks it" limit. The other claims on the line are in S11. These are the `/plugin install commit-commands@claude-plugins-official` example (line 9), the **Discover** tab listing the plugins (line 63), and "Anthropic doesn't review third-party marketplaces" (line 84). |

New problems in changed lines:
- The only changed line in `diff.txt` is page line 478 (Layman). It introduces no new problem. The edit only removed text, and the remaining sentence is supported by S17 and cited with 17. The same Layman paragraph says "An old graph can mislead you." This is not new, because that sentence did not change, and the Technical panel's "Stale graph" row is the matching point.
- The unfixed line 469 is the V15 STILL-FAIL above. It is not a new problem.

Open FAILs after round 5: 1

## Verification of the open rows, facts and voices: agentic-qa / qa-workspace (round 6, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| V15 | voices | RESOLVED | The Technical table cell on page line 469 now reads "A knowledge graph of your files" with `<Cite n={17} />`. S17 line 5 says "it reads your files, builds a knowledge graph", and line 12 says "works on any folder - your codebase, notes, papers, anything". The words "map" and "large" are gone. The Layman line 478 says "**graphify** reads your files and builds a knowledge graph. <Cite n={17} />", which matches the Technical cell and the cite. |
| N1 | facts | RESOLVED | The only changed line in `diff.txt` is the graphify table row, so there is nothing new to check in the Layman line. The Layman sentence "An old graph can mislead you." did not change. The Technical table's "Stale graph" risk is the matching point, with cite 17. |
| N2 | facts | RESOLVED | Line 469 was the V15 problem. It is now fixed, as shown in the V15 row. |

New problems in changed lines: None. The one changed line is the graphify table row, and S17 supports it.

Open FAILs after round 6: 0

Open FAILs: 0
