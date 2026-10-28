# Voices fact-check: content/ai-engineering/model-routing.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel is compared with the `<Technical>` panel of the same section: same facts, no new fact, no lost warning, cites only with an `n` that the Technical panel of the block cites, and in Bangla, code and product names in English and the reader addressed with আপনি.

## Rows

| # | Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | "The prices of two models can differ by about 100 times" | FAIL | Same problem as Technical claim 2: a 2023 survey result of FrugalGPT is given as a general fact. |
| 2 | In plain words | Layman | "RouteLLM reports a cost cut of more than 2 times in some cases" | FAIL | Same problem as Technical claim 5: no paper date, no model pair, no benchmark. |
| 3 | In plain words | Bangla | "দুটো মডেলের দামের পার্থক্য প্রায় 100 গুণ পর্যন্ত হতে পারে" | FAIL | Same as row 1. |
| 4 | In plain words | Bangla | "RouteLLM জানায়, কিছু ক্ষেত্রে খরচ 2 গুণের বেশি কমেছে" | FAIL | Same as row 2. |
| 5 | In plain words | Layman, Bangla | Other facts (cost vs capability, 3 factors, router), cites 4, 5, 1 | PASS | Technical cites 4, 5, 1. |
| 6 | How it works | Layman | Model list, Haiku use, 3 ways to route, failure-signal warning, own view, code summary, cost per task | PASS | The model ids and prices match the table. The code summary matches `pick_model`. Cites 2, 1, 4, 5, 3 are all in Technical. |
| 7 | How it works | Bangla | Same | PASS | `claude-*` ids, Python, FrugalGPT, RouteLLM in English. "জানুন", "করুন", "আপনি ... ধরতে পারেন" (আপনি form). The warning about a reliable failure signal and extra time is kept. |
| 8 | A real-life example | Layman | Router rules, cascade, 500-question comparison | PASS | Same facts and cites 1, 5, 3. |
| 9 | A real-life example | Bangla | Same | PASS | Same facts, numbers 50,000 and 500 kept, product names in English. |
| 10 | Common mistakes | Layman | 5 mistakes | PASS | "test set" for "evaluation set" keeps the meaning. Cites 3 and 1. |
| 11 | Common mistakes | Bangla | 5 mistakes | PASS | "সবচেয়ে কঠিন 10 % কাজে" matches the hardest 10 %. "করুন", "করবেন না" (আপনি form). |
| 12 | What a tester can check | Layman | "Tutorial's own advice" line and 5 ideas | PASS | Same ideas, no cites. |
| 13 | What a tester can check | Bangla | Same | PASS | Same ideas, `model id` in English, আপনি form. |

## Re-check

I changed the 4 FAIL sentences in the same edit as the Technical fix:

| # | New text | Verdict | Note |
|---|---|---|---|
| 1 | Layman: "In 2023, the FrugalGPT paper looked at the prices of commercial AI services such as GPT-4 and ChatGPT. Some prices were up to about 100 times higher than others" | PASS | Same scope and date as Technical. Two orders of magnitude is about 100 times. |
| 2 | Layman: "The RouteLLM paper (2024) tested routers that chose between GPT-4 and Mixtral-8x7B. On public benchmarks such as MT Bench and MMLU, the cost went down by more than 2 times in some cases. The quality of the answers did not drop" | PASS | Same as Technical. |
| 3 | Bangla: "2023 সালে FrugalGPT পেপার GPT-4 ও ChatGPT-এর মতো কমার্শিয়াল LLM API-র দাম দেখেছে। কিছু দাম অন্যগুলোর চেয়ে প্রায় 100 গুণ পর্যন্ত বেশি ছিল" | PASS | Same as Technical. Names in English. |
| 4 | Bangla: "2024 সালের RouteLLM পেপারে রাউটার GPT-4 ও Mixtral-8x7B-এর মধ্যে বাছাই করেছে। MT Bench ও MMLU-র মতো পাবলিক বেঞ্চমার্কে কিছু ক্ষেত্রে খরচ 2 গুণের বেশি কমেছে। উত্তরের মান কমেনি" | PASS | Same as Technical. Names in English. |

Cites are unchanged (4, 5 in this section). `node --test tests/voice-source.test.ts tests/ai-engineering.test.ts` reports no error for `model-routing`.

FAILs found: 4. Fixed: 4.

Open FAILs: 0
