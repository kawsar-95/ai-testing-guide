# Voices fact check: AI/ML Testing, AI Test Strategy and Planning

Page: `content/ai-ml-testing/ai-test-strategy.mdx`. Date: 2026-11-02.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same five-question framing, same OWASP/NIST cites, in all three panels. |
| How it works | PASS | PASS | Same six-step process diagram and risk-to-test-type table, identical across panels. |
| In practice | PASS | PASS | Same worked plan outline and `SCOPED_RISKS` code, identical across panels. |
| Common mistakes | PASS | PASS | Same five mistakes, consistent across panels. |
| What a tester can check | PASS | PASS | Same five tutorial-advice bullets, no cites (correct). |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| আপনি-register verbs on instructions (লিখুন, রাখুন, review করুন) | PASS |
| Tool/framework names stay in English (NIST AI RMF, OWASP, LLM01/02/06/09) | PASS |
| Grammar and natural wording | PASS |
| Numbers match Technical (five questions, six-step process, four RMF functions, ten OWASP risks, five mistakes) | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Five questions, layers, OWASP cite and NIST four parts all match the Technical text. |
| How it works | PASS | Code blocks are identical, cites sit on the claims they support, and the "map" step and the gap point match. |
| In practice | PASS | Plan outline and Python code are identical, and the tutorial-advice points keep their meaning. |
| Common mistakes | PASS | All five mistakes match the Technical text, with no new facts or changed meaning. |

Open FAILs: 0
