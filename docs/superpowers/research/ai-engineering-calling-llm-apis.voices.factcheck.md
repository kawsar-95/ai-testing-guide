# Voices fact-check: content/ai-engineering/calling-llm-apis.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. `node --test tests/voice-source.test.ts` passes, so each cite in a voice uses an `n` of its own Technical block.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | LLM API definition; REST API at `api.anthropic.com` [1]; `POST /v1/messages` [2]; OpenAI and Google [7][8]; SDK adds headers [1] | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same | PASS | Product names, URL, endpoint stay in English; আপনি form. |
| 3 | How it works | Layman | 3 headers [1]; 3 body fields [2]; curl and env var [3]; SDK reads `ANTHROPIC_API_KEY` [5]; response fields [2][3]; other providers [7][8]; streaming [6] | FAIL, fixed | First check: it said "`x-api-key` holds your API key", the same order problem as Technical row 5 of the fact-check. |
| 4 | How it works | Bangla | Same as row 3 | FAIL, fixed | Same problem as row 3. |
| 5 | A real-life example | Layman | HR button; `max_tokens` cut; 529 and 429 [4]; SDK retries 2 times "with a growing wait" [5]; `request-id` [4] | PASS | "Growing wait" restates exponential backoff. |
| 6 | A real-life example | Bangla | Same | PASS | "প্রতিবার অপেক্ষার সময় বাড়িয়ে" = with a longer wait each time. |
| 7 | Common mistakes | Layman | Key in code [5]; first block [2][7]; `stop_reason` [2]; errors [4]; 10-minute timeout [5] | PASS | Same facts and cites. |
| 8 | Common mistakes | Bangla | Same | PASS | Status codes and field names stay in English. |
| 9 | What a tester can check | Layman | "Tutorial's own advice" and 6 ideas | PASS | "Must never reach the browser" restates "the client" (the browser bundle) of Technical. |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি imperatives (করুন, দিন). |

## Re-check

- Rows 3 and 4: both panels now say that `Authorization` holds `Bearer` and the API key, and that the older `x-api-key` header still works. This matches the fixed Technical table [1]. PASS.

FAILs found: 2. Fixed: 2.

Open FAILs: 0
