# Voices fact check: AI/ML Testing, Chunking and Embedding Strategy Testing

Page: `content/ai-ml-testing/chunking-embedding-testing.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | Chroma sentence added to Layman/Bangla with its cite; Ragas sentence reworded; "typical result" relabeled. |
| How it works | PASS, after fix | PASS, after fix | Terms renamed to precision@k and recall@k; illustrative-result label applied. |
| In practice | PASS, after fix | PASS, after fix | The absolute ndcg assertion was removed from all three code blocks. |
| Common mistakes | PASS, after fix | PASS, after fix | Mistake 6 now cites only what MTEB says (112 languages, no method dominates). |
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
| In plain words | PASS | Facts, hedges and all four cites match the Technical text. |
| How it works | PASS | Code block, numbers, caveat on invented data and the mteb cite all match. |
| In practice | PASS | All code blocks match the Technical text; the added sentences only describe the code. |
| Common mistakes | PASS | All six mistakes keep their meaning; the ragas-metrics and mteb cites are on the same claims as in the Technical text. |

Open FAILs: 0
