# Voices fact check: Claude for Professional QA

Page: `content/agentic-qa/claude-for-qa.mdx`. Every round below was written by a fresh `claude -p` session that did not write the page and did not make the fixes (claude-sonnet-5-5, tools Read, Grep, and Glob only, no web access). Its evidence was only the page, the text of the sources that the page cites (fetched on 2026-11-15), and the files of the dMoney repository at commit 51db34a. Rounds 1 to 3 checked the whole page; the briefs are in `agentic-qa-factcheck-brief.md`. Each later round got only the rows that the round before it left open, what the editor did, and a diff of the page, and it also checked every changed line. Between rounds, the orchestrating session, which did not write the page, fixed or rebutted each FAIL; the research note (`agentic-qa-claude-for-qa.md`) lists each fix. The rounds are kept as the checkers wrote them, with config values from the practice repository replaced by `<redacted>`. The voices rule is the one in `CLAUDE.md`: the `সহজ English` (Layman) and `বাংলা` (Bangla) panels give no fact that the Technical panel of the same section does not give. No person who reads Bangla has read the Bangla.

## Voices fact check: agentic-qa / claude-for-qa (round 1, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | What Claude Code is | Layman | PASS | Left out: the `claude` command, the tool table, and the "beta" scope detail. "You must copy it" is a small paraphrase of "you apply it yourself". "That last part is the tutorial's advice" is loose, because the whole "So you must…" list is the advice. |
| 2 | What Claude Code is | Bangla | PASS | Left out: the web surface detail about repos you do not have locally. |
| 3 | The agentic loop and the harness | Layman | FAIL | "One pass through the loop is a turn." Technical says "In the Agent SDK, a turn is…". The scope limit was dropped, so the claim now covers every context. Fix: "In the Agent SDK, one pass through the loop is a turn." |
| 4 | The agentic loop and the harness | Layman | FAIL | "Tools that change things run one by one." Technical names only `Edit`, `Write`, and `Bash` as running one after another. "Tools that change things" is a broader category that the Technical panel does not state. Fix: "Tools such as Edit, Write, and Bash run one by one." |
| 5 | The agentic loop and the harness | Layman | FAIL | "Claude cannot undo a change in a database or an API." Technical says that checkpoints cannot undo actions on remote systems. The subject changed from checkpoints to Claude, so the meaning is different. Fix: "A checkpoint cannot undo a change in a database or an API." |
| 6 | The agentic loop and the harness | Bangla | PASS | Left out: the `max_turns` cap, the five tool groups, and the "test that writes to a shared database" example. |
| 7 | The context window | Layman | PASS | Left out: `/context all`, the 1M-token figure, and the skill and MCP load-on-use details. |
| 8 | The context window | Bangla | PASS | Nothing material left out. |
| 9 | Compaction, clearing, and context engineering | Layman | PASS | Left out: the Compact Instructions section, the five re-read files, the `/clear [name]` label, and the `/resume` picker. |
| 10 | Compaction, clearing, and context engineering | Bangla | FAIL | "Claude Code সম্প্রতি বদলানো সর্বোচ্চ পাঁচটি file আবার পড়ে।" Technical says it re-reads up to five files that Claude read or edited, most recently modified first. The Bangla narrows this to changed files and drops the files that were only read. Fix: "Claude যে file পড়েছে বা edit করেছে, তার মধ্যে সবচেয়ে সম্প্রতি বদলানো সর্বোচ্চ পাঁচটি file Claude Code আবার পড়ে।" |
| 11 | Memory for a QA team | Layman | FAIL | "This keeps things tidy but does not save space." "Keeps things tidy" is an added benefit. Technical says only that imports pull in another file and do not reduce the context cost. Fix: remove "keeps things tidy" and say "This does not save space." |
| 12 | Memory for a QA team | Layman | FAIL | "Auto memory is a set of notes that Claude writes itself. It is on by default." Technical says "on by default in local sessions". The limit was dropped, so the claim now says more. Fix: "It is on by default in local sessions." |
| 13 | Memory for a QA team | Layman | FAIL | "Put in the exact test commands first." Technical says only that these are "the most useful lines". The ordering ("first") is new advice that cite 7 does not support. Fix: "The most useful lines are the exact test commands." |
| 14 | Memory for a QA team | Bangla | PASS | Left out: load order, the `MEMORY.md` limit of 200 lines or 25KB, the "how to run one test file" line, and the `/memory` on/off function. The "subfolder" sentence says "কোনো file নিয়ে কাজ করে" for "reads, writes, or edits a file". That is loose but acceptable. The mid-sentence cite after `/init` is fine. |
| 15 | Tokens and cost | Layman | FAIL | "Claude Code reuses the start of each request from a cache." Technical says "The API caches by matching the start of each request, the prefix." The actor changed from the API to Claude Code. Fix: "The API reuses the start of each request from a cache." |
| 16 | Tokens and cost | Bangla | PASS | Left out: the "API users" note on the Session block and the `/effort` and `/model` commands. |
| 17 | Plan, permissions, and checkpoints | Layman | FAIL | "`bypassPermissions` skips all checks." Technical says it runs everything without asking, and that deny rules block in every mode. "All checks" is stronger than Technical and contradicts the deny-rule sentence. Fix: "`bypassPermissions` lets it run everything without asking." The four mode bullets also have no cite, but the group is covered by the later cite on the deny-rule sentence. |
| 18 | Plan, permissions, and checkpoints | Layman | FAIL | "To undo Claude's edits, run `/rewind` or press `Esc` twice." Technical says to press `Esc` twice **on an empty prompt**. The condition was dropped. Fix: "…or press `Esc` twice on an empty prompt." |
| 19 | Plan, permissions, and checkpoints | Bangla | PASS | Left out: `Ctrl+G` is kept. Left out: the `/undo` alias, the "code, conversation, or both" options, the `plan` and `dontAsk` table detail, and the v2.1.283 default. |
| 20 | Sessions, branches, and a working agreement | Layman | FAIL | "`claude --continue` opens your last session." Technical says "the most recent session in the current directory". The directory limit was dropped. Fix: "…opens the most recent session in the current directory." |
| 21 | Sessions, branches, and a working agreement | Layman | FAIL | "A worktree is a separate copy of your repo on its own branch." Technical gives no definition and says only that it is an isolated worktree on a new branch. "Separate copy of your repo" is an added explanation. Fix: "`claude --worktree <name>` makes an isolated worktree on a new branch and starts Claude there." |
| 22 | Sessions, branches, and a working agreement | Bangla | FAIL | "`claude --continue` সাম্প্রতিক session খোলে।" The "in the current directory" limit was dropped, so the claim now says more. Fix: "…বর্তমান directory-র সাম্প্রতিক session খোলে।" |
| 23 | Practice | Layman | PASS | Left out: the `/init` "suggests improvements" detail, the 5-line count, the example prompt, and the "Check that every test idea names a real rule" step. |
| 24 | Practice | Bangla | PASS | Left out: the same details as the Layman panel. |
| 25 | Common mistakes | Layman | FAIL | "4. Pasting whole logs. They fill the context." Technical says that logs and test runs "can use a lot of context". "Fill" is stronger. Fix: "They can use a lot of context." |
| 26 | Common mistakes | Bangla | PASS | Left out: the "keep Claude away from shared databases" fix. |

Bangla notes:
- No Bangla sentence has a command, flag, path, or product name translated. English-plus-suffix joins carry the hyphen (`Web-এ`, `/clear`-এ, `.gitignore`-এ, `200 line-এর`).
- The Bangla reads naturally and addresses the reader politely with আপনি forms (`চালান`, `করুন`). I could read every sentence well enough to judge it.
- Minor, no FAIL: in the Memory section the cite after "`/init` প্রথম CLAUDE.md বানায়" sits mid-sentence. In the Tokens section, "`/cost` আর `/stats` এর alias" could use a smoother join.

Open FAILs after round 1: 14

Script check of round 1: 26 rows, 14 FAIL rows.

## Voices fact check: agentic-qa / claude-for-qa (round 2, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | What Claude Code is | Layman | FAIL | "A chat assistant only writes text. You must copy it and apply it yourself." The Technical panel says only that you apply the text yourself. "Copy it" and "must" are added. Fix: "A chat assistant only gives you text. You apply it yourself." The panel leaves out recent commits, the web surface working on repos you do not have locally, and the table. |
| 2 | What Claude Code is | Bangla | PASS | The panel leaves out the web surface working on repos that are not local. The table advice is labelled as the tutorial's own advice. |
| 3 | The agentic loop and the harness | Layman | FAIL | "Claude Code is the harness. Claude is the model inside it." The Technical panel says Claude Code is the layer around the model. It never says that Claude is the model. Fix: delete "Claude is the model inside it", or write "The model sits inside the harness." The panel leaves out the `max_turns` cap, the five tool groups, and the shared-database example. |
| 4 | The agentic loop and the harness | Bangla | FAIL | "Claude Code হলো harness, Claude হলো তার ভেতরের model।" This is the same problem. The Technical panel never says that Claude is the model. Fix: keep only "Claude Code হলো model-এর চারপাশের harness।" The panel leaves out the `max_turns` cap and the five tool groups. |
| 5 | The context window | Layman | FAIL | "The context window is what Claude knows right now." The Technical panel does not define the window this way. It lists only what the window holds. Fix: "The context window holds the chat, the files Claude read, and the command output." The panel leaves out the skill and MCP lazy loading and `/context all`. |
| 6 | The context window | Bangla | PASS | The panel leaves out nothing important. The 1M-token detail is kept. |
| 7 | Compaction, clearing, and context engineering | Layman | PASS | The panel leaves out Compact Instructions, the five re-read files, the `/resume` name label, and the `/compact` and `/clear` optional arguments. |
| 8 | Compaction, clearing, and context engineering | Bangla | PASS | The panel leaves out the `/resume` name label. |
| 9 | Memory for a QA team | Layman | PASS | The panel leaves out the load order, the four-hop import limit, the 200-line/25KB limit of MEMORY.md, and the exact example lines. "/init writes a first CLAUDE.md" drops "or suggests improvements to an existing one". The sentence is still true. |
| 10 | Memory for a QA team | Bangla | PASS | The panel leaves out the load order, the import depth, and the MEMORY.md limit. "/init প্রথম CLAUDE.md বানায়" drops the "improves an existing one" case. The sentence is still true. |
| 11 | Tokens and cost | Layman | PASS | The panel leaves out the `/cost` and `/stats` aliases, the cache duration, `model: haiku`, and the `/compact` cost. "A big log you pasted early" is a fair reading of "a long log costs tokens again on each later message". |
| 12 | Tokens and cost | Bangla | PASS | The panel leaves out the `/compact` cost. The `ERROR` filter example is in the Technical panel. |
| 13 | Plan, permissions, and checkpoints | Layman | PASS | The panel leaves out `Ctrl+G`, `dontAsk`, and `plan` in the mode table, and the classifier and v2.1.283 details. The four mode bullets carry no cite of their own. The Technical panel cites them at the "Permission modes" heading (cite 11). |
| 14 | Plan, permissions, and checkpoints | Bangla | PASS | The panel leaves out the v2.1.283 default and the `plan` row of the table. |
| 15 | Sessions, branches, and a working agreement | Layman | PASS | The panel leaves out the JSONL storage, `.gitignore`, the `worktree-<name>` branch name, and the `-w` short form. |
| 16 | Sessions, branches, and a working agreement | Bangla | PASS | The panel leaves out the JSONL storage and the `-w` short form. |
| 17 | Practice | Layman | PASS | The panel leaves out the dMoney tech stack, the commit, and the exact prompt. |
| 18 | Practice | Bangla | PASS | The panel leaves out the dMoney tech stack, the security flaws, and the exact prompt. |
| 19 | Common mistakes | Layman | FAIL | Item 7: "The cache must start again." The Technical panel of this section says "A model switch recomputes the whole request." It does not mention a cache. Fix: "The whole request is processed again." The panel leaves out the `.claude/rules/` fix and the hook filter. |
| 20 | Common mistakes | Bangla | PASS | The panel leaves out the "reduce adherence" detail only in plain form ("মানা কমে যায়" keeps it). It also leaves out the hook-filter detail. |

Bangla notes:
- Section "Memory for a QA team", Bangla: "File 200 line-এর কম রাখুন।" The word "File" is vague. Say "CLAUDE.md 200 line-এর কম রাখুন।"
- Section "Tokens and cost", Bangla: "cache থেকে মেলায়" reads a little unnaturally. A plainer form is "cache করা শুরুর অংশের সাথে মেলায়"।
- No Bangla sentence translates a command, flag, path, or product name. Each English-Bangla suffix has its hyphen. The Bangla addresses the reader as আপনি or uses an imperative.

Open FAILs after round 2: 5

Script check of round 2: 20 rows, 5 FAIL rows.

## Voices fact check: agentic-qa / claude-for-qa (round 3, 2026-11-15)

| # | Section | Panel | Verdict | Note (for a FAIL: the sentence, what is wrong, and a fix; for a PASS: the details left out) |
|---|---|---|---|---|
| 1 | What Claude Code is | Layman | PASS | Left out: web can work on repos you do not have locally, the git-state detail "recent commits", and the table rows. "still in beta" adds only "still". |
| 2 | What Claude Code is | Bangla | PASS | Left out: the web repos detail. "এখনও" (still) is a small addition. All other facts are in the Technical panel. |
| 3 | The agentic loop and the harness | Layman | PASS | Left out: the `max_turns` cap, the five tool groups, the harness functions list (file access, shell, memory loading), and the "data, not orders" advice. "Claude is the model inside it" is only implied by the Technical panel ("the layer around the model"), and I accept it. |
| 4 | The agentic loop and the harness | Bangla | PASS | Left out: `max_turns`, the five tool groups, and the "a test that writes to a shared database stays written" line. |
| 5 | The context window | Layman | PASS | Left out: skill content and MCP definitions that load on use, `/context all`, and the "files re-read" detail. "A very big window" matches "1M-token". |
| 6 | The context window | Bangla | PASS | Nothing material left out. |
| 7 | Compaction, clearing, and context engineering | Layman | PASS | Left out: Compact Instructions, the `/clear [name]` label, and the five-file re-read. "Main CLAUDE.md" matches "project-root CLAUDE.md". |
| 8 | Compaction, clearing, and context engineering | Bangla | PASS | Left out: the `/clear [name]` label in the `/resume` picker, and the "delegate big reads" explanation. |
| 9 | Memory for a QA team | Layman | PASS | Left out: load order, the four-hop import limit, the `MEMORY.md` 200-line/25KB limit, and the `./.claude/CLAUDE.md` location. "/memory opens your memory files" is a looser form of "edits the files". "The team shares one" matches "shared in git". |
| 10 | Memory for a QA team | Bangla | PASS | Left out: load order, the four-hop limit, `MEMORY.md` limits, and "turns auto memory on or off". |
| 11 | Tokens and cost | Layman | PASS | Left out: `/cost` and `/stats` aliases, the Session block, the cache durations, `model: haiku`, and `/effort`. "Pasted early" is an illustration of "a big file, a long log". |
| 12 | Tokens and cost | Bangla | PASS | Left out: the Session block note, the `/effort` and `/model` commands, and the tip to disable servers (it keeps `/mcp`). |
| 13 | Plan, permissions, and checkpoints | Layman | FAIL | Sentence: "Plan mode lets Claude study and suggest changes without editing your files." The Technical panel says "without editing your **source** files". Dropping "source" makes the claim wider, because plan mode is not said to block every file write. Fix: write "without editing your source files". Note: the four permission-mode bullets have no cite, while the Technical panel cites them (Cite 11). Add `<Cite n={11} />` after the list. |
| 14 | Plan, permissions, and checkpoints | Bangla | PASS | Left out: the `plan` and `dontAsk` details, the `Esc`-twice detail (it keeps it), and the "restore the code, the conversation, or both" detail. "বিশ্বস্ত command" matches "trusted commands". |
| 15 | Sessions, branches, and a working agreement | Layman | PASS | Left out: the JSONL storage, the `worktree-<name>` branch name, `.gitignore`, and `-w`. The agreement summary follows the tutorial's own list. |
| 16 | Sessions, branches, and a working agreement | Bangla | PASS | Left out: the JSONL storage and the `-w` alias. |
| 17 | Practice | Layman | PASS | Left out: the repo and commit details, the exact prompt, and the "every test idea names a real rule" check. "Never put it on the internet" matches "do not ... expose it to the internet". |
| 18 | Practice | Bangla | PASS | Left out: the same details as the Layman panel. "কখনো দেবেন না" (never deploy) matches "must not deploy". |
| 19 | Common mistakes | Layman | PASS | Left out: the "name sessions" fix, the `.claude/rules/` fix, and the "keep Claude away from shared databases" fix. "Database changes" is a narrower case of "remote actions". |
| 20 | Common mistakes | Bangla | PASS | Nothing material left out. |

Bangla notes:
- Section "Tokens and cost": "`/cost` আর `/stats` এর alias" has "এর" as a separate word after "`/stats`". Write "`/stats`-এর alias" or reword. Neither Bangla nor Layman FAILs for this.
- Sections "What Claude Code is" and "Practice": the Bangla reads naturally, and the "আপনি" address is kept. I found no translated command, flag, path, or product name.
- I found no other missing hyphen between an English word and a Bangla suffix.

Open FAILs after round 3: 1

Script check of round 3: 20 rows, 1 FAIL rows.

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
