# Voices fact check: AI Skills, Voice Agents

Checker: an agent that did not write the page. Each Layman and Bangla panel was compared with the Technical panel of the same section (6 sections, 12 panels).

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same 4 hard parts, cite 1, same failure list, same link |
| How it works | PASS | PASS | Same transports, 8000 Hz mu-law, VAD values, events, `clear`. The diagram is put into words, with no new fact. Cites 1, 2, 3, 5, 6, 7 |
| How a tester uses it | PASS | PASS | Same 5 uses and cites 1, 2, 3, 4, 6, 8, 9. The WER definition keeps all parts (S, D, I, reference words). Layman and Bangla repeat the "tool calls often" sentence of Technical row 16; fix them with the Technical text. The tip is kept and marked as the tutorial's own advice, with no cite |
| Tools to try | PASS | PASS | Same 6 rows and cites 1, 4, 5, 7, 8, 9 |
| Common mistakes | PASS | PASS | Same 5 mistakes. The FCC rule keeps "prior express consent" ("clear consent ... first", "স্পষ্ট সম্মতি") and the emergency or exemption limit. Cites 2, 3, 6, 10 |
| How to start | PASS | PASS | Same 6 steps, "3" paths, "20" calls, cites 2, 4, 9 |

Checks done:
- No fact, number, or cite that Technical lacks. No lost fact.
- Bangla keeps tool names, acronyms, and code in English (VAD, WER, TCPA, FCC, `server_vad`, `semantic_vad`, `response.cancelled`, `conversation.item.truncate`, `clear`, mu-law).
- Bangla uses আপনি. No তুমি.
- `node --test tests/voice-source.test.ts`: pass 22, fail 0.

## Round 2 (2026-10-28)

The changed tool-call sentence of "How a tester uses it" was read again. Layman and Bangla give the same view as Technical, mark it as the tutorial's view, and add no cite. Bangla uses আপনি ("লগ করুন"). `node --test tests/voice-source.test.ts`: pass 22, fail 0.

Open FAILs: 0
