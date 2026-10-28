# Voices fact check: AI Skills, Fine-Tuning

Checker: an agent that did not write the page. Each Layman and Bangla panel was compared with the Technical panel of the same section (6 sections, 12 panels).

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same facts, cites 4 and 8, same links |
| How it works | PASS | PASS | Same numbers (10,000, 3, 65B, 48GB, 4-bit). Layman and Bangla put the JSON example and the diagram into words. No new fact. Cites 1, 2, 3, 4 |
| How a tester uses it | PASS | PASS | Same 5 jobs and cites 4, 5, 6, 8, 9. The tip text is kept and marked as the tutorial's own advice, with no cite |
| Tools to try | PASS | PASS | Same table and cites 3, 4, 5, 7 |
| Common mistakes | PASS | PASS | Same 5 mistakes and cites 4, 5, 6, 8, 9 |
| How to start | PASS | PASS | Same 6 steps and cites 1, 4, 5, 9 |

Checks done:
- No fact, number, or cite that Technical lacks. No lost fact.
- Bangla keeps tool names, acronyms, and code in English (SFT, PEFT, LoRA, QLoRA, `train_test_split()`, `peft_config`, `base_model`).
- Bangla uses আপনি (and তাঁরা for testers). No তুমি.
- `node --test tests/voice-source.test.ts`: pass 22, fail 0.

## Round 2 (2026-10-28)

The changed LoRA sentence of "How it works" was read again. Layman and Bangla say "one PEFT method", the same as Technical. There is no new fact and no new cite. `node --test tests/voice-source.test.ts`: pass 22, fail 0.

Open FAILs: 0
