# Voice fact-check: The Agent Harness (2026-10-28)

Page: `content/ai-concepts/agent-harness.mdx`. I did not write these voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared each sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, or cite that Technical does not give; a wrong or misleading statement; wrong or unnatural Bangla; তুমি in place of আপনি; a product name, command, or code name not kept in English. An omission is not a FAIL.

General checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (`tests/voice-source.test.ts`).
- Numbers match in all voices: 52.8, 66.5, 13.7, Top 30, Top 5, 89 tasks, 5 failing tests, six parts.
- Names stay in English in Bangla: Claude Code, Claude Agent SDK, Managed Agents, LangChain, `gpt-5.2-codex`, Terminal-Bench 2.0, MCP, Seatbelt, bubblewrap, `PreToolUse`, `Stop`, `CLAUDE.md`, `bypassPermissions`, `/rewind`, `Bash(npm *)`, `error_max_turns`, `error_max_budget_usd`: PASS.
- Bangla addresses the reader with আপনি (আপনাকে, দিন, রাখুন, পড়ুন). No তুমি: PASS.
- The invented example says it is invented in all 3 voices: PASS.
- The tester ideas say they are the tutorial's own advice in all 3 voices and have no cites: PASS.

| # | Section | Voice | Verdict | Reason |
|---|---|---|---|---|
| 1 | In plain words | Layman | PASS | Same facts, numbers, and cites [5][1][2]. The table becomes a list with the same six parts. |
| 2 | In plain words | Bangla | PASS | Same facts. Natural Bangla. "অবস্থা (state)" keeps the term. |
| 3 | How it works | Layman | FAIL, fixed | "LangChain added self-checks and traces" repeated the Technical error (see the Technical report, row 28). Fixed: "LangChain added self-checks. It used traces to find where the agent failed." The text diagram is restated in words and agrees with it. |
| 4 | How it works | Bangla | FAIL, fixed | Same error: "self-verification আর trace যোগ করেছিল". Fixed: "self-verification যোগ করেছিল, আর trace দেখে agent কোথায় ভুল করে তা খুঁজে বের করেছিল". Other facts match. |
| 5 | A real-life example | Layman | PASS | Same four steps, same cites [6][3]. |
| 6 | A real-life example | Bangla | PASS | Same four steps. "সাধারণ user-এর মতো" for "as a human user would" keeps the meaning. |
| 7 | Common mistakes | Layman | FAIL, fixed | "A file that only Bash changed is not saved" is wrong: the file is saved on disk, it is only not tracked by checkpoints. Fixed: "is not tracked." |
| 8 | Common mistakes | Bangla | PASS | "track হয় না" matches Technical. |
| 9 | What a tester can check | Layman | PASS | Same nine ideas, no cites. |
| 10 | What a tester can check | Bangla | PASS | Same nine ideas, no cites, natural Bangla. |

Re-check after the fixes: rows 3, 4, and 7 now agree with Technical and with S1 and S8. `node --test tests/voice-source.test.ts tests/ai-concepts.test.ts`: 27 pass, 0 fail.

Open FAILs: 0
