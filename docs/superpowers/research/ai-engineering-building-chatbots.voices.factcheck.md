# Voices fact-check: content/ai-engineering/building-chatbots.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. `node --test tests/voice-source.test.ts` passes.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Stateless API [1]; OpenAI the same [4]; the app keeps the list; short-term memory; thread [5] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | "stateless", "thread" stay in English. |
| 3 | How it works | Layman | Turns and roles [2]; `system` [2]; code pointer; synthetic turns [1]; context window, growth, what counts [3]; 2 limit cases [3]; context rot [3]; trim, delete, summarize [5]; compaction [3]; OpenAI state and billing [4] | PASS | Same facts and cites. |
| 4 | How it works | Bangla | Same | PASS | The quoted phrase "সব পাঠিয়ে দাও" restates the Technical quote "send everything"; it does not address the reader. |
| 5 | A real-life example | Layman | Two turns sent [1]; long chat forgets, slower [5]; keep 20, summarize [5]; thread ID [5]; two users apart (tutorial's view) | PASS | Same. See Re-check for the added sentence. |
| 6 | A real-life example | Bangla | Same | FAIL, fixed | First check: the team rule used the তুমি imperative ("রাখো ... রাখো"). |
| 7 | Common mistakes | Layman | 5 mistakes [1][3][5][2][4] | PASS | Same facts and cites. |
| 8 | Common mistakes | Bangla | Same | PASS | আপনি imperative ("রাখুন"). |
| 9 | What a tester can check | Layman | "Tutorial's own advice" and 6 tests | PASS | Same ideas, no cites. |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি imperatives. |

## Re-check

- Row 6: the rule now reads "শেষ ২০টা মেসেজ রাখা হবে। ... একটা ছোট সারাংশ রাখা হবে". No তুমি form is left. PASS.
- Rows 5 and 6: after the Technical fix, both panels got the new sentence with `<Cite n={6} />` (Layman: "In LangGraph, this short-term memory belongs to one thread only"; Bangla: "LangGraph-এ এই শর্ট-টার্ম মেমরি শুধু একটা thread-এর মধ্যে থাকে"). Same fact as Technical, and `n={6}` is cited in that Technical block. PASS.

FAILs found: 1. Fixed: 1.

Open FAILs: 0
