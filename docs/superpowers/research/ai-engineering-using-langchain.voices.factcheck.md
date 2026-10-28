# Voices fact-check: content/ai-engineering/using-langchain.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. `node --test tests/voice-source.test.ts` passes.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | One interface [3]; providers [1]; `create_agent`, harness, middleware [1]; model alone [3]; LangGraph, LangSmith [1] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | Product and API names stay in English. |
| 3 | How it works | Layman | Install, Python 3.10 [2]; `init_chat_model`, `provider:model`, env var, 3 methods [3]; retries [3]; `@tool` [4]; agent loop [5]; `create_agent` [1] | PASS | Same facts and cites. |
| 4 | How it works | Bangla | Same | PASS | "টাইপ হিন্ট বাধ্যতামূলক" = type hints are required. |
| 5 | A real-life example | Layman | Release helper; model decides tool and stop; switch provider [3][2]; fake model [7]; fast, free [7]; integration tests [6] | FAIL, fixed | First check: the "model decides" sentence had `<Cite n={5} />`, the same wrong cite as Technical row 15 of the fact-check. |
| 6 | A real-life example | Bangla | Same | FAIL, fixed | Same wrong cite as row 5. |
| 7 | Common mistakes | Layman | 6 mistakes [1][4][4][6][7][7][3] | PASS | Same facts and cites. |
| 8 | Common mistakes | Bangla | Same | PASS | আপনি form ("দেখুন", "সেট করুন"). |
| 9 | What a tester can check | Layman | "Tutorial's own advice" and 6 ideas | PASS | Same ideas, no cites. |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি imperatives. |

## Re-check

- Rows 5 and 6: the sentence now has `<Cite n={3} />`, as Technical. PASS.
- Rows 5 and 6: after the code fix in Technical, both panels got one sentence about the subclass with `<Cite n={7} />` (Layman: "This fake model has no `bind_tools` method, and `create_agent` needs it. So the test uses a small subclass."; Bangla: "এই ফেক মডেলে `bind_tools` মেথড নেই, কিন্তু `create_agent`-এর এটা লাগে। তাই টেস্টে একটা ছোট সাবক্লাস ব্যবহার হয়।"). Same fact as Technical. PASS.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
