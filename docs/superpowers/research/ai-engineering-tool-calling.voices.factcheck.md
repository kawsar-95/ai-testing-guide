# Voice fact-check: Tool Calling (2026-10-28)

Page: `content/ai-engineering/tool-calling.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block, code included. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a lost warning or hedge; a wrong or misleading statement; a wrong or unclear Bangla sentence; Bangla that puts code, product, or command names in Bangla letters, or addresses the reader with তুমি. An omission is not a FAIL.

Automated checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (`tests/voice-source.test.ts`).
- No heading in a Layman or Bangla panel: PASS.
- Code, field, product, and model names stay in Latin letters in Bangla (`tools`, `tool_use`, `tool_result`, `is_error`, `strict: true`, `tool_choice`, `auto`, `any`, `none`, JSON Schema, MCP, OWASP, Claude Opus 5.5, `QA-123`): PASS.
- The reader is addressed with আপনি. The only তুমি-form verb is "কল করো" in line 47, inside a quote of what the model says to the app. It does not address the reader. PASS.

| # | Section | Voice | What the panel says | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Function calling, model decides from request and description, structured call, client vs server tools [1]; two sides to test | PASS | Same facts and cites. |
| 2 | In plain words | Bangla | Same facts in Bangla | PASS | Same facts and cites. |
| 3 | How it works | Layman | Schema [2][5], round trip [3], a prose summary of the code, ordering rule [3], strict mode [4], MCP [6], errors and retries [3], `tool_choice` and the 400 error on Opus 5.5 [2], OWASP list [7] | PASS | Same facts. "Run them as the user, not as a powerful account" restates "in the context of the user"; no new fact. The code summary matches the Technical code (one tool, `key` required, error on `LookupError`, second request). |
| 4 | How it works | Bangla | Same facts in Bangla | FAIL | "Claude ঠিক করে 2 থেকে 3 বার আবার চেষ্টা করে": "ঠিক করে" can read as "decides" as well as "fixes". Technical says "retries 2 to 3 times with corrections". Unclear wording. |
| 5 | A real-life example | Layman | Three tools as a list, OWASP advice [7], MCP deny and confirm [6], the run 88 story | PASS | Same facts and cites. |
| 6 | A real-life example | Bangla | Same facts in Bangla | PASS | Same facts and cites. |
| 7 | Common mistakes | Layman | Eight mistakes with cites [2][7][3][6][8] | PASS | Same facts. "change or delete data" covers "UPDATE and DELETE rights". |
| 8 | Common mistakes | Bangla | Same eight mistakes | PASS | Same facts and cites. |
| 9 | What a tester can check | Layman | "Tutorial's own advice" line and seven checks | PASS | Same checks; no cite. |
| 10 | What a tester can check | Bangla | Same seven checks | FAIL | "টুলের সংখ্যা ট্র্যাক করুন" means "track the number of tools". Technical says "Track tool metrics" (calls, errors, tokens). Misleading label. |

## Re-check (after the fixes)

| # | Changed text | Verdict | Reason |
|---|---|---|---|
| 4 | "কল বৈধ না হলে Claude সংশোধনসহ 2 থেকে 3 বার আবার চেষ্টা করে।" | PASS | "সংশোধনসহ" = "with corrections". Matches Technical and S3. |
| 10 | "**টুলের মেট্রিক ট্র্যাক করুন।**" | PASS | "Track tool metrics". Matches Technical. |

`node --test tests/voice-source.test.ts tests/ai-engineering.test.ts` passes after the fixes.

Open FAILs: 0
