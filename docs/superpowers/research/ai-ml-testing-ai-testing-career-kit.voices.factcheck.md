# Voices fact check: AI/ML Testing, AI Testing Career Kit

Page: `content/ai-ml-testing/ai-testing-career-kit.mdx`. Date: 2026-11-02.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | Interview-module sentence corrected in all three panels. |
| How it works | PASS, after fix | PASS, after fix | "Six projects" mapping reworded; interview-page paragraph rewritten with the right route and scope in all three panels. |
| In practice | PASS | PASS | Unchanged code and templates. |
| Common mistakes | PASS, after fix | PASS, after fix | Mistake 4 reworded to "general testing questions" in all three. |
| What a tester can check | PASS, after fix | PASS, after fix | Two bullets updated to point at `/interview/` for general testing questions. |
| Key words | n/a | n/a | No voices. |

Bangla check: আপনি-register, tool and API names in English, numbers match Technical.

Open FAILs at the end of the rounds above: 0

## The new সহজ English panels (2026-11-10)

The `<Layman>` (সহজ English) panels of 4 sections were in Bangla, not plain English: `In plain words`, `How it works`, `In practice`, `Common mistakes`. The rounds above checked the facts of these panels, not their language. The site now tests that rule: `voiceErrors` in `lib/voice-source.ts` fails a `<Layman>` panel when more than 2 % of the letters that a reader reads are Bangla (code, tags, and URLs do not count), and a `<Bangla>` panel when fewer than 20 % are.

The panels were written again in plain English from the Technical text of the same section, with every code block of that text copied, by a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write them, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

- How it works: "You must be able to explain a hallucination metric, a red team finding, or a RAG failure mode out loud." — The Technical text only says what this page covers: "this page covers only what changes for an AI testing interview specifically: being able to explain a hallucination metric, a red team finding, or a RAG failure mode out loud." It sets no requirement, so "must" makes the claim stronger. Fix: "This page covers only what changes for an AI testing interview: being able to explain a hallucination metric, a red team finding, or a RAG failure mode out loud."

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Matches the Technical text; the cite is on the right claim. |
| How it works | FAIL | "You must be able to explain..." turns a description of scope into a requirement. |
| In practice | PASS | Code blocks, examples and advice match the Technical text. |
| Common mistakes | PASS | All five mistakes match the Technical text, and the cite is kept on Mistake 5. |

Open FAILs at the end of the rounds above: 1

## Re-check after the fixes (2026-11-10)

Each FAIL of the round above was fixed with the checker's own fix sentence. A fresh `claude -p` session (Claude Sonnet, no tools) checked the changed sections again.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| How it works | PASS | The panel matches the Technical text on the three artifacts, the cite key (`syllabus`), the project split, the interview page's 50 questions, and the exclusions. |

Open FAILs: 0
