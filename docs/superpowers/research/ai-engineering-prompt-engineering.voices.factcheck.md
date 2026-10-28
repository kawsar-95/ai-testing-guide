# Voices fact-check: content/ai-engineering/prompt-engineering.mdx

Checked 2026-10-28 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. `node --test tests/voice-source.test.ts` passes.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | Prompt and prompt engineering [3]; new employee picture [2]; success criteria, test, draft; another model for speed or cost [1] | PASS | "Every time" restates "again and again". |
| 2 | In plain words | Bangla | Same | PASS | "লেটেন্সি (latency)" keeps the term. আপনি form. |
| 3 | How it works | Layman | 4 parts in order [3]; 7 techniques [2][4]; code pointer; pin a version, build evals [3] | PASS | Same facts and cites. |
| 4 | How it works | Bangla | Same | PASS | Part names (Identity, Instructions) and tags stay in English. |
| 5 | A real-life example | Layman | One-line prompt; rewrite with the 4 parts [3]; 5 changes [2]; golden set [1] | PASS | The bullets restate the Technical prompt. |
| 6 | A real-life example | Bangla | Same | FAIL, fixed | First check: the step bullet used the তুমি imperative ("পড়ো", "লেখো", "দাও"). The page style addresses the reader with আপনি. |
| 7 | Common mistakes | Layman | 5 mistakes [2][4][5][3]; injection warning kept ("lower the risk, do not remove it") | PASS | Warning kept. |
| 8 | Common mistakes | Bangla | Same | PASS | Warning kept ("ঝুঁকি কমায়, কিন্তু পুরো দূর করে না"). |
| 9 | What a tester can check | Layman | "Tutorial's own advice" and 6 ideas | PASS | Drops "Do not trust the eye", which adds no fact. |
| 10 | What a tester can check | Bangla | Same | PASS | আপনি imperatives. |

## Re-check

- Row 6: the bullet now uses verbal nouns ("স্টোরি পড়া, ... কেস লেখা, ... একটা টেবিল দেওয়া"). No তুমি form is left. Meaning unchanged. PASS.

FAILs found: 1. Fixed: 1.

Open FAILs: 0
