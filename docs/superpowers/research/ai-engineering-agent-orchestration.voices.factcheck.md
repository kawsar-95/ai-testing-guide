# Voice fact-check: Agent Orchestration (2026-10-28)

Page: `content/ai-engineering/agent-orchestration.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a lost warning or hedge; a wrong or misleading statement; a Bangla sentence that is wrong or unfinished; a code, product, or command name in Bangla letters; তুমি in Bangla. An omission is not a FAIL.

Automated checks (script, all blocks):

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (`tests/voice-source.test.ts`).
- No heading in any Layman or Bangla panel: PASS.
- No Layman sentence over 25 words: PASS.
- No তুমি or তোমার: PASS. The imperatives use the আপনি form (করুন, দিন, চালান).
- Code and product names stay in English in Bangla: Anthropic, LangGraph, OpenAI Agents SDK, `transfer_to_refund_agent`, `/memories`, `thread_id`, checkpointer, augmented LLM, P1, p95: PASS.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Workflow vs agent [1]; orchestration definition; simplest solution; more cost and time for better results; one call with search and examples is enough [1] | PASS | Same facts. "search" restates "retrieval". |
| 2 | In plain words | Bangla | Same facts in Bangla | PASS | Same facts and cite. |
| 3 | How it works | Layman | Augmented LLM; the 5 patterns with their fit; agent loop, unknown steps, higher cost, errors add up, sandbox and guardrails [1]; research system, subagent needs, 4x and 15x [2]; handoff as tool [3]; checkpoints, store [4]; memory tool, app runs the file actions [5]; the code in words | PASS | Same facts, numbers, and cites. The code summary matches the code block. |
| 4 | How it works | Bangla | Same facts in Bangla | PASS | Same facts, numbers, and cites. The pattern names stay in English, as in the Key words table. |
| 5 | A real-life example | Layman | The release assistant; the 3 read-only workers, evaluator, release manager in words; the 4 bullets; the tutorial's own view | PASS | Agrees with the text diagram. The view is still marked as the tutorial's own. |
| 6 | A real-life example | Bangla | Same facts in Bangla | PASS | Same facts; the view is marked "টিউটোরিয়ালের নিজের মত". |
| 7 | Common mistakes | Layman | The 7 mistakes with the same cites | PASS | The security warning about `/memories/../../secrets.env` is kept. |
| 8 | Common mistakes | Bangla | Same 7 mistakes | PASS | The security warning is kept. |
| 9 | What a tester can check | Layman | The 7 checks, marked as the tutorial's own advice | PASS | "Stop a worker" restates "Kill a worker". Same checks. |
| 10 | What a tester can check | Bangla | The 7 checks, marked as the tutorial's own advice | PASS | "দেখুন A-ও উত্তর দিচ্ছে কি না" (check if A also answers) is the same check as "check that A does not answer too". |

FAILs found: 0.

Open FAILs: 0
