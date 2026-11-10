# Voices fact check: AI/ML Testing, Synthetic Data Generation and DSPy

Page: `content/ai-ml-testing/synthetic-data-dspy.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | Giskard bullet and DSPy bullet rewritten (3 panels). |
| How it works | PASS, after fix | PASS, after fix | Difficulty-tag sentence replaced; optimizer sentence kept. |
| In practice | PASS, after fix | PASS, after fix | DSPy code fixed in all panels. |
| Common mistakes | PASS, after fix | PASS, after fix | Two unsupported cites removed. |
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

- Common mistakes: "A dataset written by a model tests only for the failures that model has." — The word "only" makes the claim stronger. The Technical text says "A dataset written by a model tests for the failures that model has", which does not say it tests nothing else. Fix: "A dataset written by a model tests for the failures that model has."

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Matches the Technical text; the cites are the same and sit on the same claims. |
| How it works | PASS | Matches the Technical text, including the three checks, the human sample and the cites. |
| In practice | PASS | The code blocks are identical to the Technical text, and the added prose only restates them. |
| Common mistakes | FAIL | Mistake 5 adds "only", which makes the claim stronger than the Technical text. |

Open FAILs at the end of the rounds above: 1

## Re-check after the fixes (2026-11-10)

Each FAIL of the round above was fixed with the checker's own fix sentence. A fresh `claude -p` session (Claude Sonnet, no tools) checked the changed sections again.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| Common mistakes | PASS | All seven mistakes match the Technical text in meaning, with no added facts, no changed claims, and no cites or code. |

Open FAILs: 0
