# Voices fact check: AI/ML Testing, Capstone Test Pipeline

Page: `content/ai-ml-testing/capstone-test-pipeline.mdx`. Date: 2026-11-02.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Unchanged. |
| How it works | PASS | PASS | Unchanged. |
| In practice | PASS, after fix | PASS, after fix | The Promptfoo HTTP-provider YAML, the `redteam-config.yaml` command, and the locator-based Playwright test are identical code in all three panels (changed in one scripted pass, with a count assertion of 3 each). Lead-in now cites `promptfoo-http` alongside `promptfoo-config` in every panel. |
| Common mistakes | PASS | PASS | Unchanged. |
| What a tester can check | PASS | PASS | Unchanged. |
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
| In plain words | PASS | Same code block and cites. The six-tool layer split matches the Technical text. |
| How it works | PASS | Order, timings, trace claim and the two-config split all match. Cites are on the right claims. |
| In practice | PASS | All code blocks are identical. The Callout tag became a bold label, and its advice is unchanged. |
| Common mistakes | PASS | All five mistakes keep their meaning. The one cite sits on the same claim as in the Technical text. |

Open FAILs: 0
