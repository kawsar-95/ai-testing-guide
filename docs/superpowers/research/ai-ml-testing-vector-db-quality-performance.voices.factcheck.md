# Voices fact check: AI/ML Testing, Vector Database Quality and Performance Testing

Page: `content/ai-ml-testing/vector-db-quality-performance.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | Illustrative-numbers label added in all panels. |
| How it works | PASS, after fix | PASS, after fix | Metric sentence and drift wording corrected in all panels. |
| In practice | PASS, after fix | PASS, after fix | Load-test code now uses threads; the closing filter explanation was rewritten. |
| Common mistakes | PASS, after fix | PASS, after fix | Mistakes 4 and 6 reworded; Mistake 6 cite removed. |
| What a tester can check | PASS | PASS | Same content, cites, and code as Technical. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| আপনি-register verbs on instructions | PASS |
| Tool names, code, acronyms stay in English | PASS |
| Grammar and natural wording in changed sentences | PASS |
| Numbers match Technical | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Metrics, the recall-falls-with-scale example (95% vs 70%, marked illustrative), and the re-benchmark advice match the Technical text. The only cite, ndcg, is supported. |
| How it works | PASS | The four test groups, both code blocks, and the p95-plus-recall assertion match. All four cites (ndcg, locust, chroma-query, qdrant-search) are used in the Technical text. |
| In practice | PASS | All code blocks are identical to the Technical text. The prose about no sleep, the explicit wait, and the filter fallback bug keeps the same meaning. |
| Common mistakes | PASS | All six mistakes match in meaning. "Speed" for "latency" in Mistake 1 is a word choice, not a new fact. |

Open FAILs: 0
