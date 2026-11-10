# Voices fact check: AI/ML Testing, Advanced RAG Failure Modes

Page: `content/ai-ml-testing/advanced-rag-failures.mdx`. Date: 2026-11-02. Each Layman and Bangla panel checked against the corrected Technical panel.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS, after fix | PASS, after fix | The Giskard sentence was rewritten and its cite kept; the lead-in "RAG evaluation tooling exists for these cases" was dropped as an overclaim. |
| How it works | PASS, after fix | PASS, after fix | "Best one last" became "at the beginning or the end"; "answer relevancy" became "response relevancy"; the memory typo was fixed. |
| In practice | PASS | PASS | Same content, cites, and code as Technical. |
| Common mistakes | PASS, after fix | PASS, after fix | Mistake 6 cite moved to the Giskard taxonomy source in all three panels. |
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

- In plain words: "It does not rely only on what it memorised in training {{cite:rag}}." — "only" weakens the claim. The Technical text says the model is given the material "instead of relying on what it memorised in training", so it does not rely on memory. Fix: "The model gets the material at answer time instead of relying on what it memorised in training {{cite:rag}}."
- Common mistakes: "Hand-written cases cover only the failures you imagined." — The added "only" makes the claim stronger. The Technical text says "Hand-written cases cover the failures you imagined." Fix: "Hand-written cases cover the failures you imagined."

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | FAIL | "does not rely only on" weakens "instead of relying on" |
| How it works | PASS | Faithful; cites and table match |
| In practice | PASS | Code and claims match the Technical text |
| Common mistakes | FAIL | Added "only" strengthens the claim about hand-written cases |

Open FAILs at the end of the rounds above: 2

## Re-check after the fixes (2026-11-10)

Each FAIL of the round above was fixed with the checker's own fix sentence. A fresh `claude -p` session (Claude Sonnet, no tools) checked the changed sections again.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| In plain words | PASS | Facts, the six-mode code block, and the cites (rag, lostmiddle, giskard-raget) all match the Technical text. |
| Common mistakes | PASS | All six mistakes keep the Technical meaning, and the cites (lostmiddle, giskard-taxonomy) sit on the same claims. |

Open FAILs: 0
