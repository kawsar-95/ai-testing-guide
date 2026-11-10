# Voices fact check: AI/ML Testing, Advanced Capstone: The Test Suite

Page: `content/ai-ml-testing/advanced-capstone-test-suite.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | No change. |
| How it works | PASS, after fix | PASS, after fix | DSPy comparison reworded. |
| In practice | PASS, after fix | PASS, after fix | Ragas and Giskard code rewritten. |
| Common mistakes | PASS, after fix | PASS, after fix | "Severity tier" removed. |
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
| In plain words | PASS | Four areas, four Ragas metrics, 40+ probes, and the excessive-agency point all match, and the cites are on the right claims. |
| How it works | PASS | The code block is identical, and the DSPy, Giskard and multi-turn explanations stay within the Technical text. |
| In practice | PASS | All code blocks are identical. The 0.85 threshold sentence only restates the assert, and the tutorial advice matches the callout. |
| Common mistakes | PASS | All five mistakes keep the original meaning, and the cites are on the matching claims. |

Open FAILs: 0
