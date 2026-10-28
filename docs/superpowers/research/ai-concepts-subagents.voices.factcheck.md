# Voice fact-check: Subagents and Multi-Agent Systems (2026-10-28)

Page: `content/ai-concepts/subagents.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, or cite that Technical does not give; a dropped hedge; a wrong statement; a wrong or unnatural Bangla sentence; the reader not addressed with আপনি; a product name, code, or technical term put into Bangla letters. An omission is not a FAIL.

General checks:

- `node --test tests/voice-source.test.ts`: PASS (panel order, tags, cites in Layman and Bangla only use n that Technical cites).
- Numbers match in all voices: 3 to 5 subagents, about 4x and 15x tokens, 80%, 90.2%, Claude Opus 4, 1 agent and 3 to 10 tool calls, three prompts, last ten commits/changes.
- Names stay in English in Bangla: Claude Code, Anthropic, Agent tool, CitationAgent, OpenAI Agents SDK, `transfer_to_refund_agent`, `total_cost_usd`, orchestrator-workers, evaluator-optimizer, context window, system prompt, token. PASS.
- Bangla addresses the reader with আপনি forms (ধরুন, লিখুন, করুন, দেখুন, মেলান). The only তুমি forms (খুঁজে বের করো, ঠিক করো, দাও) are inside the quoted instruction that the team gives to the agent in the example, not an address to the reader. PASS.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Subagent definition [4]; own context window, instructions, tools, permissions [3]; orchestrator-workers [2]; lead agent and helpers [1]; clean workspace, only last message back [4]; tokens of its own [3] | PASS | Same facts and cites. The Technical link to `/extend/subagents/` is omitted (allowed). |
| 2 | In plain words | Bangla | Same facts | PASS | Natural Bangla. "সমন্বয় করে আর বিশেষ subagent-দের কাজ ভাগ করে দেয়" keeps "coordinates and delegates". |
| 3 | How it works | Layman | Example helpers (said to be an example); five steps; evaluator loop [2]; citation agent [1]; handoff [5] | FAIL → fixed | Step 2 dropped the fork exception, like Technical before its fix. Fixed with Technical: "Unless the helper is a fork (a copy of the main conversation), it gets only the prompt that the lead writes for it." Re-check: PASS. |
| 4 | How it works | Bangla | Same | FAIL → fixed | Same missing fork hedge. Fixed: "Subagent যদি fork (parent conversation-এর একটা কপি) না হয়, তাহলে parent থেকে সে শুধু Agent tool-এর prompt string পায়।" Re-check: PASS. "এই ভূমিকাগুলো শুধু একটা উদাহরণ" keeps the example hedge. |
| 5 | Trade-offs | Layman | Three gains [4]; 4x and 15x [1]; failures [1]; lost details [4]; no fixed price, 80%, 90.2% [1]; when to use, poor fit, 1 agent and 3 to 10 calls [1]; simplest [2]; cheaper model [3] | PASS | Same facts. "only safe tools, for example read-only tools" restates "Tight tools: a read-only worker". |
| 6 | Trade-offs | Bangla | Same | PASS | "সাধারণত" (typically) in the 4x sentence matches source [1] ("typically use about 4×") and adds no new fact. |
| 7 | A real-life example | Layman | Says "made-up example"; same three helpers, same steps, same cites | PASS | "build logs" and "last ten changes" restate "CI logs" and "last ten commits". |
| 8 | A real-life example | Bangla | Says "বানানো উদাহরণ"; same steps | PASS | Natural Bangla. |
| 9 | Common mistakes | Layman | Same six mistakes and cites | FAIL → fixed | "A helper does not see the main conversation" dropped the fork exception. Fixed: "..., unless it is a fork (a copy of that conversation)." Re-check: PASS. |
| 10 | Common mistakes | Bangla | Same six mistakes | FAIL → fixed | Same missing hedge. Fixed: "Fork (parent conversation-এর কপি) না হলে subagent parent-এর conversation দেখে না।" Re-check: PASS. |
| 11 | What a tester can check | Layman | Same eight checks, tip says it is the tutorial's own advice, no cites | PASS | Same checks. |
| 12 | What a tester can check | Bangla | Same eight checks, no cites | PASS | Natural Bangla, আপনি forms. |

Panels checked: 10. FAILs found: 4 (all the same missing fork hedge). Fixed: 4.

Open FAILs: 0
