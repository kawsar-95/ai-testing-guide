# Fact check: AI Skills, Vibe Coding

Sources fetched fresh on 2026-10-28 with WebFetch. S1 = Replit docs "Vibe coding 101", S2 = Replit docs "Replit Agent", S3 = Lovable docs "Welcome to Lovable", S4 = Cursor docs "Agent overview", S5 = Claude Code docs "How Claude Code works", S6 = Claude Code docs "Best practices for Claude Code". All 6 are the vendor's own docs. No blog, news, or forum. The page gives no price. Extra source fetched for row 14: Replit docs "Checkpoints and Rollbacks" (https://docs.replit.com/replitai/checkpoints-and-rollbacks).

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: QA teams have small tools nobody has time to build; vibe coding lets you build one by describing it | none | PASS | The tutorial's own framing, no source fact |
| 2 | Vibe coding goes from idea to working software by describing the result; you preview and change the app | S1 | PASS | "a faster way to move from idea to software" |
| 3 | You lead: the agent can build, but you decide whether the result works | S1 | FAIL | Fact is right, but copied: S1 has "Agent can build, but you decide whether the result works." The page repeats 9 words identical ("agent can build, but you decide whether the result works") |
| 4 | Replit Agent builds apps, designs, and slides from plain language | S2 | PASS | "turns your ideas into apps, designs, slides, and more, all from plain language" |
| 5 | Lovable is a full-stack platform that builds and deploys web apps from natural language | S3 | PASS | "a full-stack AI development platform for building, iterating on, and deploying web applications" |
| 6 | Cursor has an agent that can finish coding tasks, run terminal commands, and edit code | S4 | PASS | "can complete complex coding tasks independently, run terminal commands, and edit code" |
| 7 | Claude Code is an agentic assistant that runs in your terminal | S5 | FAIL | Fact is right, but copied: S5 has "Claude Code is an agentic assistant that runs in your terminal." The page sentence is the same 11 words |
| 8 | Best first target is an internal test tool; a small mistake there costs little | none | PASS | The tutorial's own advice |
| 9 | Loop: describe, tool builds, you try, describe the next change (text diagram) | none | PASS | The tutorial's own description of the workflow |
| 10 | Replit Agent creates checkpoints while it works; you can roll back to any of them | S2 | PASS | "creates checkpoints as it works, so you can roll back to any previous state" |
| 11 | Cursor saves snapshots of the code in an agent session, stored locally, separate from Git | S4 | PASS | "Checkpoints save snapshots of your codebase during an Agent session." / "stored locally and separate from Git" |
| 12 | Claude Code saves a copy of a file before it edits it; `Esc` twice rewinds | S5 | PASS | "Before Claude edits a file, it snapshots the current contents. ... press `Esc` twice" |
| 13 | Lovable projects can sync to GitHub, GitLab, or Bitbucket | S3 | PASS | "a codebase that can be synced to GitHub, GitLab, or Bitbucket" |
| 14 | "Checkpoints undo file changes only. Changes to a database, an API, or a deployment cannot be rolled back with a checkpoint" | S5 | FAIL | S5 says this only of Claude Code checkpoints: "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." The page states it for all checkpoints, right after Replit and Cursor. Replit rollback can restore the development database: "To include your development database in a rollback, select "Database"" (Replit Checkpoints and Rollbacks) |
| 15 | A commit after each working step gives a history the team can see | none | PASS | The tutorial's own advice |
| 16 | An agent stops when the work looks done; with no check, you become the test suite | S6 | PASS | "Claude stops when the work looks done." / "that makes you the test suite" |
| 17 | Give it a test command or an expected output; ask for the command and its output as evidence | S6 | PASS | Checks listed include "A test file" and "A script that diffs output against a fixture"; "ask Claude for evidence: the command it ran and its output" |
| 18 | Internal tool examples (test-user form, JUnit XML failure page, mock server) | none | PASS | The tutorial's own examples |
| 19 | The Claude Code docs give a prompt: write a failing test that reproduces the bug, then fix it | S6 | PASS | "write a failing test that reproduces it, then fix it". Longest shared run is 6 words |
| 20 | Talk through the tool, save as `SPEC.md`, then build in a fresh session | S6 | PASS | "Once `SPEC.md` exists, start a fresh session to build from it" |
| 21 | The spec is also your test plan | none | PASS | The tutorial's own view |
| 22 | Teams will ship more AI-built apps, and they need testers | none | PASS | A forward-looking view of the tutorial, not a sourced fact |
| 23 | The Replit guide: do not only read what the agent says it changed, try the flow | S1 | PASS | "Do not only read what Agent says it changed. Try the flow." Longest shared run is 7 words ("agent says it changed, try the flow"); under the 8-word limit |
| 24 | Tools table: Lovable builds full-stack web apps in the browser; Git sync | S3 | PASS | Git sync as row 13. "In the browser": S3 says "Lovable also works beyond the browser", so the browser is its main place |
| 25 | Tools table: Replit Agent builds and deploys apps; checkpoints to roll back to | S2 | PASS | "Agent handles the rest, from planning to deployment."; checkpoints as row 10 |
| 26 | Tools table: Cursor checkpoints stored locally, separate from Git | S4 | PASS | As row 11 |
| 27 | Tools table: Claude Code is an agent in your terminal and IDE; `Esc` twice rewinds file edits | S5 | PASS | S5 lists "the terminal, ... IDE extensions"; `Esc` as row 12 |
| 28 | Common mistakes: trusting the summary; fix: try the flow | S1 | PASS | As row 23 |
| 29 | Common mistakes: no check to run | S6 | PASS | As rows 16, 17 |
| 30 | Common mistakes: Cursor checkpoints are separate from Git; commit each step | S4 | PASS | As row 11; the fix is the tutorial's advice |
| 31 | Common mistakes: "Checkpoints do not undo database, API, or deployment changes" | S5 | FAIL | Same as row 14: S5 supports this for Claude Code only; Replit can roll back its development database |
| 32 | Common mistakes: one giant prompt; build one feature at a time | none | PASS | The tutorial's own advice |
| 33 | How to start: steps 1 to 5 | S1 (step 3) | PASS | Step 3 as row 23; other steps are the tutorial's advice |
| 34 | Key words: Vibe coding | S1 | PASS | As row 2 |
| 35 | Key words: Coding agent edits code and runs commands | S4 | PASS | As row 6 |
| 36 | Key words: Checkpoint, a saved state you can roll back to | S2 | PASS | As row 10 |
| 37 | Key words: Git sync, a project in a Git host such as GitHub | S3 | PASS | As row 13 |
| 38 | Key words: Evidence, the command the agent ran and its output | S6 | PASS | "the command it ran and its output" |

Other checks:

| Check | Verdict | Note |
|---|---|---|
| Sources are official | PASS | Vendor docs of Replit, Lovable, Cursor, and Anthropic (Claude Code) |
| No prices | PASS | None on the page |
| Each cite points to a source that supports the claim | FAIL | Rows 14 and 31: S5 supports the claim for Claude Code only, the page generalizes it to all checkpoints |
| No copied text | FAIL | Rows 3 and 7 (9 and 11 identical words). All other sentences: longest shared run 7 words (row 23) |
| "Tutorial advice" tip has no cite | PASS | The Callout has no `<Cite>` |
| Internal links | PASS | `/foundations/prompting/` and `/configure/claude-md/` are in `scripts/route-map.json` and `lib/nav.ts` |
| Code and config examples | PASS | No config. `Esc` twice and `SPEC.md` match S5 and S6 |
| Each source is cited | PASS | S1 to S6 all cited |

Proposed fixes (apply to all 3 voice panels where the same text is):
- Row 3: "You still lead: the AI writes the code, but you judge if the app does its job <Cite n={1} />."
- Row 7: "**Claude Code** is an AI agent that you use from your terminal <Cite n={5} />."
- Row 14: "Claude Code checkpoints undo file changes only. Changes to a database, an API, or a deployment cannot be rolled back with them <Cite n={5} />."
- Row 31: "Claude Code checkpoints do not undo database, API, or deployment changes <Cite n={5} />."

## Round 2 (2026-10-28)

S1 and S5 quotes are from the WebFetch run of 2026-10-28 in this session (same day, same pages). Each changed sentence was compared with the source for copied runs.

| Changed text (Technical) | Round 1 row | Verdict | Quote or reason |
|---|---|---|---|
| "You still lead: the agent writes the code, and you judge if the result does its job <Cite n={1} />." | 3 | PASS (fixed) | S1: "Agent can build, but you decide whether the result works." Same fact; longest shared run is 2 words ("the result") |
| "**Claude Code** is an AI agent that you use from your terminal <Cite n={5} />." | 7 | PASS (fixed) | S5: "Claude Code is an agentic assistant that runs in your terminal." Same fact; longest shared run after "Claude Code is an" is 2 words ("your terminal") |
| "Claude Code checkpoints undo file changes only. Changes to a database, an API, or a deployment cannot be rolled back with a checkpoint <Cite n={5} />." | 14 | PASS (fixed) | S5: "They only cover file changes" / "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." Now scoped to Claude Code |
| "Claude Code checkpoints do not undo database, API, or deployment changes <Cite n={5} />." | 31 | PASS (fixed) | Same S5 quote as above; scoped to Claude Code |

Round 1 FAILs 3, 7, 14, and 31 are fixed. No new FAIL.

Open FAILs: 0
