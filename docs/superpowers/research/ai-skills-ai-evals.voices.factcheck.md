# Voices fact check: AI Skills, AI Evals

Each Layman and Bangla panel was compared with the Technical panel of the same block (6 blocks, 12 panels).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| In plain words | PASS | PASS | Same 3 parts, same rule, same temperature-0 fact, cites 1 and 2 |
| How it works | PASS | PASS | The text diagram becomes prose with the same steps and numbers (46 of 50, 92%, 90%). The grader table becomes a list with the same 3 graders. Same promptfoo facts (exit code 100, threshold, `--repeat`). Cites 1 and 5 |
| How a tester uses it | PASS | PASS | Same 5 uses, cites 1, 3, 4, 5, 6, 8. The YAML is told in prose (password reset check and a judge model); no new fact. The GitHub Actions link is only in Technical; a link, not a fact. The tip is a plain paragraph, marked as the tutorial's own advice, no cite. Note: Layman repeats the copied S3 phrase (FAIL row 17 of the main report); fix it in both panels |
| Tools to try | PASS | PASS | Same 4 tools and facts, cites 5, 6, 7, 1 |
| Common mistakes | PASS | PASS | Same 5 mistakes and fixes, cites 1, 2, 5 |
| How to start | PASS | PASS | Same steps 1 to 4, cites 1, 4, 5. Step 5 drops the 2 links only. If the "20 to 50" cite fix (main report row 30) is made, make the same change in Layman and Bangla step 1 |

Checks done:
- No fact, number, name, example, or cite that Technical of the same block lacks.
- Each cite in Layman and Bangla uses an `n` that Technical of the same block cites.
- Bangla keeps promptfoo, MLflow, Hugging Face Evaluate, `promptfooconfig.yaml`, `promptfoo eval`, `--repeat`, `PROMPTFOO_PASS_RATE_THRESHOLD`, `mlflow.genai.evaluate`, `evaluate.load("accuracy")`, `assertEqual`, CI/CD, JSON, and LLM in English letters.
- Bangla uses আপনি; no তুমি, তোমার, or তুই (grep count 0).

Round 1 result: 0 open FAILs.

## Round 2 (2026-10-28)

I compared the changed sentences in each panel with the current Technical text of the same block.

| Block | Changed text | Verdict | Note |
|---|---|---|---|
| How it works | Different-model grader sentence; exit code 100 sentence | PASS | Layman uses the same words as Technical. Bangla line 107 ("আলাদা একটা মডেল দিয়ে গ্রেড") and line 109 ("অন্তত একটা টেস্ট ফেইল করলে ... exit code 100") give the same facts, with cites 1 and 5 |
| How a tester uses it | promptfoo description | PASS | Layman uses the same words as Technical. Bangla: "LLM অ্যাপ টেস্ট আর red-team করার একটা command-line টুল ও লাইব্রেরি", cite 3. The copied phrase from Round 1 is gone in all panels |
| Common mistakes | "Use a grader model that is not the model under test" | PASS | Layman uses the same words as Technical. Bangla has the same fact, cite 1 |
| How to start | "(the tutorial's own starting size)" | PASS | Layman uses the same words. Bangla: "(টিউটোরিয়ালের নিজের শুরুর সংখ্যা)", cite 1 |

Checks done: no new or lost fact; each cite `n` is one that Technical of the same block cites; Bangla keeps `promptfoo eval` and other tool and code names in English; Bangla uses আপনি only (grep count of তুমি, তোমার and তুই is 0).

Open FAILs: 0
