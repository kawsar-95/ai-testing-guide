# Voices fact check: AI/ML Testing, RAG Test Automation at Scale: Synthetic Data and Regression

Page: `content/ai-ml-testing/rag-synthetic-regression.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | RAGET reframed as the v2 predecessor; v3 scan described with its real scenario types and component tags. |
| How it works | PASS, after fix | PASS, after fix | Diagram steps 2, 4, 5 rewritten; the tags paragraph now matches Giskard's own caveat. |
| In practice | PASS, after fix | PASS, after fix | Both code blocks and the CI step replaced; verified against the quality-scan how-to and the v2 to v3 migration guide. |
| Common mistakes | PASS, after fix | PASS, after fix | Mistake 2 reworded to per-component results. |
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
| In plain words | PASS | Facts, cites and the `llm`/`retrieval`/`history` tags match the Technical text. |
| How it works | PASS | The code block is identical. The tags caveat and the cites are kept. |
| In practice | PASS | All three code blocks are identical. The tutorial advice matches. |
| Common mistakes | PASS | All five mistakes match, with the same cites and the same "up to 24 hours" claim. |

Open FAILs: 0
