# Voice fact-check: AI Infrastructure (2026-10-28)

Page: `content/ai-engineering/ai-infrastructure.mdx`. I did not write this page or its voices.

Method: I read the 5 `<Voices>` blocks (the "Key words" section has no voices). For each `<Layman>` and `<Bangla>` panel I compared every sentence with the `<Technical>` panel of the same block. FAIL rules: a fact, number, name, example or cite that Technical does not give; a lost warning or hedge; a wrong or misleading statement; a cite `n` that Technical of the same block does not cite; a Bangla panel that puts code, product or command names in Bangla letters, or that does not address the reader with আপনি. An omission is not a FAIL.

Automated checks:

- Every `<Cite n>` in Layman and Bangla is cited in Technical of the same block: PASS (5 of 5 blocks).
- No heading in a Layman or Bangla panel: PASS.
- Product and code names stay in English in Bangla (Claude API, Amazon Bedrock, Microsoft Foundry, IAM, Kubernetes, Deployment, Pod, HorizontalPodAutoscaler, `nvidia.com/gpu`, `limits`, `requests`, `retry-after`, RPM, ITPM, OTPM): PASS.
- Bangla uses আপনি / আপনার and polite imperatives (করুন, দিন); no তুমি: PASS.

| # | Section | Voice | What the panel says (checked against Technical) | Verdict | Reason |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | 2 kinds of parts; Claude API and cloud platforms [7]; IAM [7]; rate limits and 429 [6]; container [1]; Kubernetes replaces and adds copies [2][4] | PASS | Same facts and cites. ("login" for "authentication" is a plain-word match.) |
| 2 | In plain words | Bangla | Same facts | PASS | Same facts and cites. |
| 3 | How it works | Layman | Containers [1]; Deployments, rollout, 25% [2]; 3 probes [3]; HPA, horizontal and vertical [4]; GPU driver, plugin, `limits` = `requests` [5]; the YAML restated (1 GPU, readiness check on `/ready`); RPM, ITPM, OTPM per model class, token bucket, `retry-after` [6] | PASS | Same facts and numbers. The YAML is restated, not copied. |
| 4 | How it works | Bangla | Same facts | PASS | "নিয়ন্ত্রিত গতিতে" for "at a controlled rate", "অনুপলব্ধ" for "unavailable": correct. |
| 5 | A real-life example | Layman | Setup in words; tutorial's own view; autoscaler [4]; limits do not grow with Pods [6]; queue and `retry-after` [6]; readiness [3] | PASS (after the Technical fix) | Layman and Bangla were updated together with Technical (organization level, for each model class). Same facts. The "tutorial's own view" marker is kept. |
| 6 | A real-life example | Bangla | Same | PASS (after the Technical fix) | Same facts; টিউটোরিয়ালের নিজের মত is kept. |
| 7 | Common mistakes | Layman | 6 mistakes with the same cites; tutorial's own view on tags | PASS | Same. The warning about bursts (60 RPM as 1 per second) is kept. |
| 8 | Common mistakes | Bangla | Same 6 mistakes | PASS | Same facts, cites, and the tutorial's-own-view marker. |
| 9 | What a tester can check | Layman | Same 6 test ideas, marked as the tutorial's own advice | PASS | No cites, as in Technical. |
| 10 | What a tester can check | Bangla | Same 6 test ideas, marked as the tutorial's own advice | PASS | "মডেলের লিমিটই আসল বাধা (bottleneck) কি না যাচাই করুন" keeps the meaning "check that the model limits are not the real bottleneck". |

## Re-check (after the Technical fixes)

The Technical fact-check changed 2 sentences (see `ai-engineering-ai-infrastructure.factcheck.md`, claims 3 and 26). The same change was made in each voice:

| Section | Voice | New text | Verdict |
|---|---|---|---|
| In plain words | Layman | "The Claude API has rate limits." | PASS |
| In plain words | Bangla | "Claude API-র রেট লিমিট আছে।" | PASS |
| A real-life example | Layman | "They are for the whole organization, for each model class" | PASS |
| A real-life example | Bangla | "এটা পুরো অর্গানাইজেশনের জন্য, প্রতিটা মডেল ক্লাসের জন্য" | PASS |

Open FAILs: 0
