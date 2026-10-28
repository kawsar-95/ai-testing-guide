# Voice fact-check: Fine-Tuning Models

Page: `content/ai-engineering/fine-tuning.mdx`. Checked 2026-10-28 by an agent that did not write the page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, or cite that Technical does not give; a lost warning or hedge; a wrong statement; a Bangla panel that puts code or product names in Bangla letters or does not use আপনি. An omission (for example the code blocks) is not a FAIL.

Automated checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (`tests/voice-source.test.ts`).
- No heading in Layman or Bangla, no তুমি or তোমার: PASS.
- Code, product, and term names stay in Latin letters in Bangla (SFT, OpenAI, JSONL, JSON, `model`, `training_file`, `ft:`, LoRA, GPU, GPT-3 175B, TRL, `SFTTrainer`, `LoraConfig`, `UI`, `API`, `Data`, `Performance`): PASS.

| # | Section | Voice | What the panel says | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | SFT definition, custom model [1]; 4 good uses as a list [1]; weights, RAG paper limits [6]; tutorial's view on RAG | PASS | Same facts and cites. "sort text into classes (classification)" and "fix a model that does not follow instructions well" restate the source uses. |
| 2 | In plain words | Bangla | Same facts in Bangla | PASS | Same facts; "Tutorial's own view" kept as "টিউটোরিয়ালের নিজের মত". |
| 3 | How it works | Layman | 4 steps; evals first; JSONL, 10, 50–100, 50; the example line in words; quality and 60%/5%; `model`, `training_file`, default, `ft:`; hyperparameters and epoch; wind-down note; LoRA facts and numbers; adapters; TRL, loss, completion-only | PASS (before the fix: FAIL with Technical #20) | The words of the example line ("a bug title" and "the right class, such as `UI`") match the JSON code of Technical. "no extra delay when the model answers" = "no extra inference latency". The wind-down note had the same missing condition as Technical; fixed with it. |
| 4 | How it works | Bangla | Same facts in Bangla | PASS (before the fix: FAIL with Technical #20) | Same facts and numbers. Same missing condition in the wind-down note; fixed. |
| 5 | A real-life example | Layman | 200 reports, 4 classes, classification [1]; steps 1–4 with 100, 81%, 50, 20; holdout advice [1]; tutorial's view | PASS | Same numbers and cites. |
| 6 | A real-life example | Bangla | Same | PASS | Same numbers; "ships" = "চালু করে". |
| 7 | Common mistakes | Layman | 6 mistakes, cites 1, 1, 2, 2, 2, 6 | PASS | "make up information" = "invent information". The 70% cap is stated the same way. |
| 8 | Common mistakes | Bangla | Same 6 mistakes | PASS | Same cites and the 70% number. |
| 9 | What a tester can check | Layman | 6 checks, marked as the tutorial's own advice | PASS | Same checks. Text is plain, not in a callout; the "own advice" line is kept. |
| 10 | What a tester can check | Bangla | Same 6 checks | PASS | Same checks; "own advice" line kept. |

## Re-check (after the fix)

| # | Section | Voice | Changed text | Verdict | Reason |
|---|---|---|---|---|---|
| 3 | How it works | Layman | "until January 6, 2027, if the base model does not shut down earlier. The model of the example, `gpt-4.1-mini-2025-04-14`, and its fine-tuned versions shut down on January 14, 2027 [1]" | PASS | Same facts as the fixed Technical callout. |
| 4 | How it works | Bangla | "January 6, 2027 পর্যন্ত job তৈরি করতে পারে, যদি বেস মডেল তার আগে বন্ধ না হয়। উদাহরণের মডেল `gpt-4.1-mini-2025-04-14` আর তার fine-tuned ভার্সনগুলো January 14, 2027-এ বন্ধ হবে [1]" | PASS | Same facts; the model id stays in English. |

Open FAILs: 0
