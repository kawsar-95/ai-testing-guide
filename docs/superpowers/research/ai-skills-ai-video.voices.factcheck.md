# Voices fact check: AI Skills, AI Video

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same 2 jobs, same facts, cites 1 and 3 |
| How it works | PASS | PASS | Same facts and cites 1 to 5. The text diagram is only in Technical; it repeats the prose, so no fact is lost. "১০ জন" = 10 |
| How a tester uses it | PASS | PASS | Same 4 uses, cites 1, 5, 2, 4, same link. The tip is a plain paragraph in Layman and Bangla, not a Callout; it is still marked as the tutorial's own advice and has no cite |
| Tools to try | PASS | PASS | Same 4 rows, cites 1, 3, 4, 5 |
| Common mistakes | PASS | PASS | Same 4 mistakes and fixes, cites 1, 3, 5 |
| How to start | PASS | PASS | Same 5 steps, cites 5, 1, 2 |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- Bangla keeps tool names, `retain-on-failure`, `on-first-retry`, `test-results`, API, CI, and task ID in English letters.
- Bangla uses আপনি; no তুমি or তোমার (grep).

## Round 2 (2026-10-28)

| Changed text | Verdict | Note |
|---|---|---|
| Layman, In plain words: "Runway's API, for example, can turn an image and a text prompt into a video" | PASS | Same fact as Technical; cite 3, which Technical cites in this block |
| Layman, Tools to try: "The API turns an image and a text prompt into a video" | PASS | Same fact as Technical; cite 3 |
| Layman, How it works: "Playwright saves the files in its test output folder. This is usually `test-results`" | PASS | Same fact as Technical; cite 5 |
| Bangla, the 3 matching sentences (In plain words, How it works, Tools to try) | PASS | Not changed, and still the same fact as Technical. Cites 3 and 5 only. Runway, API, and `test-results` stay in English. The panels address the reader with আপনি |

Open FAILs: 0
