# Voices fact check: AI Skills, Open Models

Checker: an agent that did not write the page. Each Layman and Bangla panel was compared with the Technical panel of the same section (6 sections, 12 panels).

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same four freedoms, same OSI requirements, cite 1, same link |
| How it works | PASS | PASS | Same URLs, port 11434, sign-in warning, model card facts. The curl example and the diagram are put into words, with no new fact. Cites 2, 3, 4, 5. Layman and Bangla repeat the "`ollama run` downloads" text of Technical row 4; fix them with the Technical text |
| How a tester uses it | PASS | PASS | Same 4 uses and cites 3, 4, 5, 9. The tip text is kept and marked as the tutorial's own advice, with no cite |
| Tools to try | PASS | PASS | Same 7 rows and cites 2, 4-9. Bangla gives 700 million as ৭০ কোটি, which is the same number |
| Common mistakes | PASS | PASS | Same 4 mistakes and cites 3, 5, 6, 7, 9 |
| How to start | PASS | PASS | Same 6 steps, "20" eval cases, cites 2, 3, 5 |

Checks done:
- No fact, number, or cite that Technical lacks. No lost fact.
- Bangla keeps tool names, acronyms, URLs, and code in English (Ollama, vLLM, REST API, `ollama run <model>`, `http://localhost:11434/v1`, Apache-2.0, MIT).
- Bangla uses আপনি. No তুমি.
- `node --test tests/voice-source.test.ts`: pass 22, fail 0.

## Round 2 (2026-10-28)

The changed Ollama sentence of "How it works" was read again in Layman and Bangla. Both panels give the same 2 facts as Technical (`ollama pull` downloads, `ollama run` runs and opens a chat), with cites 10 and 2 only. Technical cites both in this section. Bangla keeps the commands in English. `node --test tests/voice-source.test.ts`: pass 22, fail 0.

Open FAILs: 0
