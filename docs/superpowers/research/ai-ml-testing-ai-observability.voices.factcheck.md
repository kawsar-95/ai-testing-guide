# Voices fact check: AI/ML Testing, AI Observability and Production Monitoring

Page: `content/ai-ml-testing/ai-observability.mdx`. Date: 2026-11-02.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | The "surfaces drift" to "find failures and regressions" correction was mirrored into Layman and Bangla ("failure আর regression খুঁজে পেতে"). The closing forward-reference sentence (which still mentions "drift detection" as a later-module topic, not a Phoenix feature) is unchanged and correctly left in all three panels. |
| How it works | PASS | PASS | Same trace/span/session definitions and instrumentation description, identical across panels; untouched since no issue was found here. |
| In practice | PASS | PASS | Same Phoenix and LangFuse code examples, identical across panels. |
| Common mistakes | PASS | PASS | Same five mistakes, consistent. |
| What a tester can check | PASS | PASS | Same four tutorial-advice bullets. |
| Key words | n/a | n/a | No voices (rule). |

## Bangla language

| Check | Verdict |
|---|---|
| আপনি-register verbs (নিশ্চিত করুন, দিন, পড়ায়) | PASS |
| Tool names stay in English (Arize Phoenix, LangFuse, OpenTelemetry) | PASS |
| Grammar and natural wording in the rewritten sentence | PASS |
| Numbers match Technical (five mistakes, four tutorial bullets) | PASS |

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Matches the Technical text; cites match their claims. |
| How it works | PASS | Code blocks identical; the two cites sit on the wrapping claim that both sources support. |
| In practice | PASS | Code identical; the tutorial-advice notice and all three tips are kept as given. |
| Common mistakes | PASS | All five mistakes keep their meaning; the cites are on Mistake 4 as in the source. |

Open FAILs: 0
