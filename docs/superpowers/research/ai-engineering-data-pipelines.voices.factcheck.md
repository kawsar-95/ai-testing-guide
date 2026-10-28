# Voice fact-check: Data Pipelines

Page: `content/ai-engineering/data-pipelines.mdx`. Checked 2026-10-28. I did not write this page or its voices.

Method: I read the 4 `<Voices>` blocks ("Key words" has no voices). For each `<Layman>` and `<Bangla>` panel I compared each sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example, or cite that Technical does not give; a dropped hedge or warning; a wrong statement; a Bangla panel that breaks the course term style (concept words in Bangla letters, code and product names in English, আপনি). An omission is not a FAIL.

General checks:

- Every `<Cite n>` in Layman and Bangla is also in Technical of the same block: PASS (block 1: 1; block 2: 1-6; block 3: 1, 5, 6; block 4: none).
- No heading in Layman or Bangla. The `###` headings of block 2 become bold labels: PASS.
- Code names stay in English in Bangla (`load()`, `lazy_load()`, `Document`, `page_content`, `metadata`, `add_start_index=True`, `RecursiveCharacterTextSplitter`, `attributes`, `chunk_size`, `audience: hr`), and so do product names (LangChain, OpenAI, OWASP, Anthropic, Slack, Notion, Google Drive, RAG, PDF): PASS.
- Bangla addresses the reader with আপনি and polite imperatives (করুন, নিন). No তুমি: PASS.
- Numbers match in all voices: 200,000 tokens, 500 pages, 800/400, 100 to 4096, 50 to 100, 49%, 16 keys, 300 PDFs, 1000/200, 20 days, 10 chunks.

| # | Section | Voice | What the panel says | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Pipeline, RAG, 3 steps, 200,000 tokens rule [1] | PASS | Same facts. "list of numbers" restates "vector embedding". |
| 2 | In plain words | Bangla | Same facts in Bangla | PASS | Same facts and cite. |
| 3 | How it works | Layman | Load, clean, chunk, enrich, metadata [1-6] | FAIL, fixed | Copied the Technical error "must not be more than half" (source says "should"). Fixed with Technical. |
| 4 | How it works | Bangla | Same facts in Bangla | FAIL, fixed | "অর্ধেকের বেশি হতে পারবে না" (cannot be more) had the same error. Now "হওয়া উচিত নয়". |
| 5 | A real-life example | Layman | Table as a 5-step list, same values and cites | PASS | Same facts. |
| 6 | A real-life example | Bangla | Same list in Bangla | PASS | "পারমিশন বোঝে এমন স্টোর (permission-aware store)" keeps the OWASP term. |
| 7 | Common mistakes | Layman | Same 7 mistakes | FAIL, fixed | The metadata mistake had no "tutorial's own advice" marker (same as Technical claim 34). Marker added to all 3 voices. |
| 8 | Common mistakes | Bangla | Same 7 mistakes in Bangla | FAIL, fixed | Same as row 7. Added "(টিউটোরিয়ালের নিজের পরামর্শ)". |
| 9 | What a tester can check | Layman | Same 6 checks, "tutorial's own advice" line | PASS | Same checks. |
| 10 | What a tester can check | Bangla | Same 6 checks in Bangla | FAIL, fixed | Two hedges were lost: "should not cut a table" became "কাটবে না" (will not cut), and "should drop it, or the answer should ignore it" became "বাদ দেবে ... উপেক্ষা করবে" (will drop, will ignore). Now "কাটা উচিত নয়" and "বাদ দেওয়া উচিত ... উপেক্ষা করা উচিত". |

## Re-check

| # | Changed text | Verdict | Reason |
|---|---|---|---|
| 3 | Layman: "The overlap should not be more than half of the chunk size" | PASS | Matches Technical and source [2]. |
| 4 | Bangla: "Overlap চাংক সাইজের অর্ধেকের বেশি হওয়া উচিত নয়" | PASS | "should not" kept. |
| 7 | Layman: "... back to its page (the tutorial's own advice)." | PASS | Matches Technical. |
| 8 | Bangla: "... খুঁজে যেতে পারে না (টিউটোরিয়ালের নিজের পরামর্শ)।" | PASS | Matches Technical. |
| 10 | Bangla: "মাঝখানে কাটা উচিত নয়", "বাদ দেওয়া উচিত, নয়তো উত্তরের সেটা উপেক্ষা করা উচিত" | PASS | The "should" hedges are back. |

`node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: pass, fail 0.

Open FAILs: 0
