# Voices fact check: A Multi-Agent QA System

Page: `content/agentic-qa/multi-agent-qa.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-multi-agent-qa.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / multi-agent-qa (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Why several agents | Layman | FAIL | "Tokens are the units that Claude usage is counted in." The Technical panel has no such definition, so this is an added explanation. Fix: delete the sentence. Also "its own memory space, called a context window" is a loose gloss, because the Technical panel only says "its own context window". Fix: "its own context window". |
| 2 | Why several agents | Bangla | PASS | Left out: "Context on return" and the 7x figure. The Bangla keeps "Agent team … অনেক বেশি token", which matches "significantly more tokens". |
| 3 | Four QA roles | Layman | PASS | Left out: the Tools and Model columns, the "Skills hold the method" rule, and the repo details (tools, models, skills). The "one folder per story" and "reviewer cannot write" points are in the Technical panel. |
| 4 | Four QA roles | Bangla | PASS | Same omissions as the Layman panel. All facts match the Technical panel. |
| 5 | Write an agent file | Layman | FAIL | "At the top it has settings between `---` lines." The Technical panel of this section says only "Markdown file with YAML frontmatter", with no `---` delimiters. This is an added fact and the cite is on it. Fix: "An agent file is a Markdown file with YAML frontmatter, a block of settings at the top." |
| 6 | Write an agent file | Bangla | PASS | Left out: the `tools` inheritance detail, the `effort`/`isolation`/`background` rows, the `.claude/agent-memory/` path, the 15,000-token warning, and the restart rule. |
| 7 | Delegation and built-in agents | Layman | FAIL | "Explore and Plan do not read your CLAUDE.md file." The Technical panel says they "start without your CLAUDE.md files and the git status snapshot". "Do not read" drops the "at start" limit and says more. Fix: "Explore and Plan start without your CLAUDE.md file." |
| 8 | Delegation and built-in agents | Bangla | PASS | Left out: the "use proactively" phrase, the "for one task" limit on @-mention, the `disable-model-invocation` rule, and the callout wording. |
| 9 | Context and hand-offs | Layman | FAIL | "Then no detail gets lost." The Technical panel says "Then the evidence survives". "No detail gets lost" is a different noun and a stronger claim. Fix: "Then the evidence is kept." |
| 10 | Context and hand-offs | Bangla | PASS | Left out: the exact three-line template wording and the `/code-review` example. "কোনো প্রমাণ হারায় না" matches "the evidence survives". |
| 11 | Escalation and approval points | Layman | PASS | Left out: the ask/deny/allow order, `defer`, the subagent plan-mode rule, where prompts appear, `claude -p`, the Stop-hook rules, and the trust rule. |
| 12 | Escalation and approval points | Bangla | PASS | Left out: the subagent plan-mode rule, where the prompt appears (background), and the frontmatter Stop hook and trust rule. |
| 13 | Guardrails for each agent | Layman | FAIL | "A deny rule on `Edit(/src/**)` keeps every editing tool away from the app code." The Technical panel says `Edit` rules apply to "all built-in tools that edit files". Dropping "built-in" widens the claim. Fix: "keeps every built-in editing tool away from the app code." |
| 14 | Guardrails for each agent | Layman | FAIL | "if your main session skips permission checks, the helpers do too." The Technical panel says that under `bypassPermissions`, `acceptEdits`, or auto mode, the agent runs in that mode and its own `permissionMode` is ignored. `acceptEdits` and auto do not skip all permission checks, and the sentence does not say the helper's own mode is ignored. The meaning is different and stronger. Fix: "if the main session runs in bypassPermissions, acceptEdits, or auto mode, the helper's own permission mode is ignored." |
| 15 | Guardrails for each agent | Bangla | FAIL | "`Edit(/src/**)` deny rule সব editing tool-কে application code থেকে দূরে রাখে।" This drops "built-in", the same as the Layman panel. Fix: "সব built-in editing tool-কে …". |
| 16 | Orchestration choices | Layman | PASS | Left out: the `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` flag, the Sonnet advice, teammates reusing subagent definitions, `--agents`, and the `--bare` hook-trust detail. "The `--bare` option skips your hooks, skills, and helpers" drops "auto-discovery" and "MCP servers and CLAUDE.md", and is still acceptable. |
| 17 | Orchestration choices | Bangla | PASS | Left out: Sonnet for teammates, `--agents`, `--allowedTools`, the example uses in the advice callout, and the `-p` trust detail. |
| 18 | Practice | Layman | PASS | Left out: the staging URL, the exact prompts, the TC-99 example, and the `/permissions` detail about the source file. |
| 19 | Practice | Bangla | PASS | Left out: the same details as the Layman panel. The weak-case example is translated, which is acceptable because it is not a command. |
| 20 | Common mistakes | Layman | PASS | Left out: the camelCase names `disallowed-tools` and `permission_mode`, "run the chain in default mode", and the "four agents for real risk" advice. |
| 21 | Common mistakes | Bangla | PASS | Left out: the same details as the Layman panel. |

Bangla notes:
- Every Bangla panel addresses the reader as আপনি, in polite imperative forms such as "রাখুন" and "দিন". The register reads naturally.
- Hyphens between English words and Bangla suffixes are present throughout, for example "subagent-এর", "Reviewer-কে", "`Agent`-ও", "story-তে", and "tester-দের".
- No command, flag, path, or product name is translated.
- The quoted prompt in the Escalation panel, "থামো এবং খোলা প্রশ্নগুলো ফেরত দাও", is a translation of the English prompt text. This is acceptable because it is example prose, not a command, but it is worth a look.
- No sentence was too hard to read, and no Bangla FAIL comes from a reading problem.

Open FAILs after round 1: 7

Script check of round 1: 21 rows, 7 FAIL rows.

## Voices fact check: agentic-qa / multi-agent-qa (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Why several agents | Layman | PASS | Leaves out the "7x in plan mode" figure, the context-on-return cost, and the callout detail of "three test cases". |
| 2 | Why several agents | Bangla | PASS | Leaves out the 7x figure and the context-on-return cost. |
| 3 | Four QA roles | Layman | PASS | Leaves out the table's Tools and Model columns, the "Rules for the design" list items on skills, the dMoney callout details, and the model and tool names. |
| 4 | Four QA roles | Bangla | PASS | Same omissions as the Layman panel. |
| 5 | Write an agent file | Layman | PASS | Leaves out the field values, the plugin-agent caveat, the restart rule, the `memory: project` path, and the 15,000-token warning. |
| 6 | Write an agent file | Bangla | PASS | Leaves out the restart rule, the `memory: project` path, the 15,000-token warning, and the fields `effort`, `isolation`, `background`, `omitClaudeMd`, `color`, `initialPrompt`, `autoCompactWindow`, and `experimental`. |
| 7 | Delegation and built-in agents | Layman | FAIL | Sentence: "Use an @-mention, like `@agent-qa-reviewer`." This adds an example. The Technical panel of this section shows only `@agent-<name>`. Fix: write `@agent-<name>`, or drop "like …". The sentence "The helper then surely runs" also drops the limit "for one task". |
| 8 | Delegation and built-in agents | Bangla | PASS | Leaves out the limit "for one task" on the @-mention guarantee. This is acceptable here. Also leaves out the skill-preload caveats and the "use proactively" tip. |
| 9 | Context and hand-offs | Layman | PASS | Leaves out the note that a summary can lose a detail, the "ask for a fixed shape" bullet, and the exact three template lines. |
| 10 | Context and hand-offs | Bangla | PASS | Leaves out the "fixed shape" bullet and the exact template lines. |
| 11 | Escalation and approval points | Layman | PASS | Leaves out the "Rules run in order" detail, the `claude -p` behavior, the frontmatter-hook details, and the subagent-stays-in-plan-mode detail. |
| 12 | Escalation and approval points | Bangla | PASS | Leaves out the frontmatter-hook details, the "background prompt" detail, and the "keep posting out of agents" callout. |
| 13 | Guardrails for each agent | Layman | PASS | Leaves out the nesting limit, the `mcp__*` syntax, and the sandbox's empty default domain list. |
| 14 | Guardrails for each agent | Bangla | PASS | Leaves out the nesting limit and the JSON example. |
| 15 | Orchestration choices | Layman | FAIL | Sentence: "The `--bare` option skips your hooks, skills, and helpers." The Technical panel says `--bare` skips the auto-discovery of these. "Skips the thing" is not the same claim as "skips its auto-discovery", so the limit was dropped and the claim now says more. Fix: "The `--bare` option skips the automatic search for hooks, skills, and helpers." |
| 16 | Orchestration choices | Bangla | PASS | Leaves out the MCP servers in the `--bare` list, the `-p` hooks-in-untrusted-folder caveat, and `--agents`. |
| 17 | Practice | Layman | PASS | Leaves out the example prompts, the example agent file, and the TC-99 text. |
| 18 | Practice | Bangla | PASS | Leaves out the example prompts, the agent file, and the staging URL. |
| 19 | Common mistakes | Layman | PASS | Leaves out the "run in default mode" fix, the exact camelCase fix, and the tutorial's "one session for a small story" fix. |
| 20 | Common mistakes | Bangla | PASS | Leaves out the "run in default mode" fix and the tutorial's "one session for a small story" fix. |

Bangla notes:
- Row 14: "file tool, MCP server ও hook এর বাইরে চলে" has a space before "এর". Write "hook-এর" or rephrase to "hook-ও এর বাইরে চলে". This is not a FAIL.
- Row 12: "নিজের verdict নিয়ে agent-এর আত্মবিশ্বাস কম" and "Subagent কখনো … পায় না" read naturally. I judged all Bangla by meaning. I found no unnatural text, no wrong address form, and no translated command, flag, path, or product name.

Open FAILs after round 2: 2

Script check of round 2: 20 rows, 2 FAIL rows.

## Voices fact check: agentic-qa / multi-agent-qa (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | Why several agents | Layman | PASS | Leaves out the 7x figure, "Context on return", the exact words of the coordination overhead, and the example of three test cases. |
| 2 | Why several agents | Bangla | FAIL | "আলাদা কাজ একসাথে চলে, তাই পুরো কাজ তাড়াতাড়ি শেষ হয়।" The Technical panel only says that independent work runs at the same time. It does not say that the whole job finishes sooner. It also says a subagent can be slower. Fix: "আলাদা কাজ একসাথে চলে।" |
| 3 | Four QA roles | Layman | FAIL | "Each helper reads the files of the step before it. It writes one file for the next step. <Cite 1>" This sentence is the tutorial's own design. In the Technical panel, Cite 1 sits only on the sentence about the tools, skills, and model columns and the agent file fields. Fix: remove the cite from this sentence. |
| 4 | Four QA roles | Bangla | FAIL | "প্রতিটি agent আগের ধাপের file পড়ে এবং পরের ধাপের জন্য একটি file লেখে। <Cite 1>" The same problem. Cite 1 is on the tutorial's own design sentence, but the Technical panel puts it on the agent-file-fields sentence. Fix: remove the cite. |
| 5 | Write an agent file | Layman | FAIL | "`hooks`: scripts that run while this agent works." The Technical panel says "Hooks that run only while this agent is active". It does not say that hooks are scripts. This is an added explanation. Fix: "`hooks`: hooks that run only while this agent works." Left out: the permissionMode values, the effort, isolation, background, and omitClaudeMd fields, the plugin-agent limit, the restart rule, the memory path, and the 15,000-token warning. |
| 6 | Write an agent file | Bangla | PASS | Leaves out the `color`, `initialPrompt`, `autoCompactWindow`, and `experimental` fields, the restart rule, the memory path, and the 15,000-token warning. |
| 7 | Delegation and built-in agents | Layman | PASS | Leaves out the git status snapshot, the "use proactively" tip, the `disable-model-invocation` limit, and the Skill-tool fallback. |
| 8 | Delegation and built-in agents | Bangla | PASS | Leaves out the same details as the Layman panel. |
| 9 | Context and hand-offs | Layman | PASS | Leaves out "before Claude reads it", the "fixed shape" advice, and the "one gate line" advice. |
| 10 | Context and hand-offs | Bangla | PASS | Leaves out the same details as the Layman panel. |
| 11 | Escalation and approval points | Layman | FAIL | "A **`PreToolUse` hook** is a script that checks each tool call." The Technical panel does not say that a hook is a script. It only says that the hook returns allow, deny, ask, or defer. Fix: "A `PreToolUse` hook checks each tool call. It can allow, deny, ask you, or defer." Left out: the order of the rules, the `claude -p` case, the background prompt, the `Stop` hook note, and the trust rule. |
| 12 | Escalation and approval points | Bangla | PASS | Leaves out the background prompt location, the `Stop` hook note, the trust rule, and the "plan mode stays in the subagent" detail. |
| 13 | Guardrails for each agent | Layman | PASS | Leaves out the three-layer nesting limit, the JSON example, "start empty" for network domains, and the `disallowedTools: mcp__*` detail. |
| 14 | Guardrails for each agent | Bangla | PASS | Leaves out the three-layer nesting limit and the JSON example. |
| 15 | Orchestration choices | Layman | PASS | Leaves out the "dozens to hundreds" figure, the `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` variable, the Sonnet advice, the `--agents` path, and the `--bare` items (MCP servers, CLAUDE.md). |
| 16 | Orchestration choices | Bangla | PASS | Leaves out the "dozens to hundreds" figure, the Sonnet advice, the `--agents` path, and the trust note for `-p`. |
| 17 | Practice | Layman | PASS | Leaves out the staging URL, the example prompts, the example agent file, and the TC-99 text. |
| 18 | Practice | Bangla | PASS | Leaves out the staging URL, the example prompts, and the example agent file. |
| 19 | Common mistakes | Layman | PASS | Leaves out the examples of misspelled names (`disallowed-tools`, `permission_mode`) and the fix "run the chain in default mode". |
| 20 | Common mistakes | Bangla | PASS | Leaves out the misspelled-name examples and the "default mode" fix. |

Bangla notes:
- Section "Write an agent file": "এই agent চলার সময় যে hook চলে" reads a little awkwardly. This is not a FAIL.
- No Bangla sentence translates a command, flag, path, or product name. The hyphens before Bangla suffixes are correct. The Bangla panels address the reader as আপনি.
- I could read every Bangla sentence well enough to judge it.

Open FAILs after round 3: 5

Script check of round 3: 20 rows, 5 FAIL rows.

## Verification of the open rows, facts and voices: agentic-qa / multi-agent-qa (round 4, 2026-11-15)

| Row | Report | Verdict | Evidence (quote from the page or the source, or the reason) |
|---|---|---|---|
| F108 | facts | RESOLVED | The page now says "For sequential tasks, the docs say that a single session or subagents are more effective than an agent team. `<Cite n={4} />`". `pages/S4.txt` line 26 says "For sequential tasks, same-file edits, or work with many dependencies, a single session or [subagents] are more effective." The same sentence says "Agent teams add coordination overhead", so the comparison with agent teams is in the source. The sentence does not claim more than the source. "The QA chain is sequential" is the tutorial's own advice inside the tip callout, so it needs no cite. |
| V2 | voices | RESOLVED | The Bangla line is now "আলাদা কাজ একসাথে চলে। `<Cite n={2} />`". The Technical panel says "Independent pieces of work run at the same time. `<Cite n={2} />`". The added result "the whole job finishes sooner" is gone. |
| V3 | voices | RESOLVED | The Layman line is now "This table is the tutorial's own design. Each helper reads the files of the step before it. It writes one file for the next step." It has no cite. The Technical panel puts Cite 1 only on the sentence about the tools, skills, and model columns. |
| V4 | voices | RESOLVED | The Bangla line "প্রতিটি agent আগের ধাপের file পড়ে এবং পরের ধাপের জন্য একটি file লেখে।" now has no cite. This matches the Technical design sentence. |
| V5 | voices | RESOLVED | The Layman line is now "`hooks`: hooks that run only while this agent works." The Technical table says "Hooks that run only while this agent is active". The word "scripts" is gone. The omitted fields are not a violation. The Layman list is a short list under "Other useful settings", and it adds no fact and drops no limit on the fields it names. |
| V11 | voices | RESOLVED | The Layman line is now "A **`PreToolUse` hook** checks each tool call. It can allow, deny, ask you, or defer. `<Cite n={6} />` It also runs for helpers. `<Cite n={1} />`". The Technical row says "Returns allow, deny, ask, or defer for each tool call." S6 line 2002 says "four outcomes (allow, deny, ask, or defer)". The word "script" is gone. The Technical panel puts Cite 6 and Cite 1 on the same two facts. |

New problems in changed lines: None.

Open FAILs after round 4: 0

Open FAILs: 0
