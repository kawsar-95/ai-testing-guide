# Voices fact check: AI Skills, Image Generation

Checker: an agent that did not write the page. Each Layman and Bangla panel was compared with the Technical panel of the same section (6 sections, 12 panels).

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same edit fact, same 3 limits, cite 1, same two roles for testers |
| How it works | PASS | PASS | Same formats, sizes, 2 minutes, filters, `moderation` values, SynthID, C2PA facts. The diagram is put into words, with no new fact. Cites 1, 2, 3, 4, 5, 7, 8. Layman and Bangla repeat the text of Technical rows 4 ("made them popular") and 13 (blocked-request error); fix them with the Technical text |
| How a tester uses it | PASS | PASS | Same 4 uses and cites 1, 5, 6. The tip is kept and marked as the tutorial's own advice, with no cite |
| Tools to try | PASS | PASS | Same 4 rows and cites 1, 2, 6, 7 |
| Common mistakes | PASS | PASS | Same 5 mistakes and cites 1, 5 |
| How to start | PASS | PASS | Same 6 steps and cites 1, 5, 6 |

Checks done:
- No fact, number, or cite that Technical lacks. No lost fact.
- Bangla keeps tool names, acronyms, and code in English (OpenAI Image API, SynthID, C2PA, c2patool, `DiffusionPipeline`, LoRA, `png`, `moderation`, `auto`, `low`).
- Bangla uses আপনি. No তুমি.
- `node --test tests/voice-source.test.ts`: pass 22, fail 0.

## Round 2 (2026-10-28)

The changed sentences were read again in Layman and Bangla: the DDPM sentence, the custom-size sentence, the `moderation_blocked` sentence, and How to start step 5. Each panel has the same facts as Technical and the same cites (1 and 8). There is no new fact. Bangla keeps DDPM and `moderation_blocked` in English. `node --test tests/voice-source.test.ts`: pass 22, fail 0.

Open FAILs: 0
