# Voices fact check: AI/ML Testing, Capstone Project Setup

Page: `content/ai-ml-testing/capstone-project-setup.mdx`. Date: 2026-11-02.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Unchanged, same three cites. |
| How it works | PASS, after fix | PASS, after fix | LangChain sentence reframed ("এই টিউটোরিয়ালের pipeline-এ ...") and its cite dropped in both panels, matching Technical. |
| In practice | PASS, after fix | PASS, after fix | Cite markers removed from the "Chain" and "Endpoint" lead-ins in both panels; code identical. |
| Common mistakes | PASS | PASS | Same five mistakes. |
| What a tester can check | PASS | PASS | Same four bullets, no cites. |
| Key words | n/a | n/a | No voices. |

Bangla check: আপনি-register, tool and API names in English, numbers match Technical.

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, cites (langchain-intro, chroma-intro, rag) and the three parts all match the Technical text. |
| How it works | PASS | The four steps and the code block are identical. The ingestion/chain split and the roles of LangChain and ChromaDB match. The chroma-intro cite is kept. |
| In practice | PASS | All three code blocks are identical to the Technical text. The advice matches and keeps the "tutorial's own" disclaimer. |
| Common mistakes | PASS | All five mistakes match the Technical text in meaning, with no added facts and no dropped conditions. |

Open FAILs: 0
