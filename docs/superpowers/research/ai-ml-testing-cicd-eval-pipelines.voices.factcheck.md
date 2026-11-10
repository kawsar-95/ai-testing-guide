# Voices fact check: AI/ML Testing, CI/CD Pipelines for Evals

Page: `content/ai-ml-testing/cicd-eval-pipelines.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | PR-report sentence corrected. |
| How it works | PASS, after fix | PASS, after fix | Duplicate eval run removed; cost gate rewritten. |
| In practice | PASS, after fix | PASS, after fix | All code blocks replaced with documented usage. |
| Common mistakes | PASS, after fix | PASS, after fix | Unchanged. |
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
| In plain words | PASS | Matches the Technical text; cites and code block are unchanged. |
| How it works | PASS | Facts, code blocks and cites match; the flakiness controls are all kept. |
| In practice | PASS | Exit code 100, the permission, the cost gate and the flaky-case isolation all match; code blocks are identical. |
| Common mistakes | PASS | All six mistakes keep the meaning of the Technical text; the one cite is unchanged. |

Open FAILs: 0
