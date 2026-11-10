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

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panel of 1 section was rewritten to lower the reading load: `In plain words`. The cognitive-load audit of 2026-11-10 found it as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, cites (1, 2, 7, 8) and code names match the Technical text. "Code library" is only a short gloss of SDK. |

Open FAILs: 0
