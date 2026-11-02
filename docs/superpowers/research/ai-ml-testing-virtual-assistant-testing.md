# Research notes: AI/ML Testing, Virtual Assistant Testing

Page: `content/ai-ml-testing/virtual-assistant-testing.mdx`. Accessed 2026-11-02. Source text was fetched and searched on this date.

## Sources

| ID | Key | Title | Publisher | URL |
|---|---|---|---|---|
| S1 | `giskard-scan` | Giskard Scan | Giskard (docs) | https://docs.giskard.ai/oss/scan |
| S2 | `owasp-llm` | OWASP Top 10 for LLM Applications | OWASP | https://genai.owasp.org/llm-top-10/ |
| S3 | `deepeval-metrics` | Metrics introduction | DeepEval docs | https://deepeval.com/docs/metrics-introduction |

## Claims

| # | Claim | Source | Evidence |
|---|---|---|---|
| C1 | "Both failures are in the OWASP list of LLM application risks, because a model that answers out of scope is a harmful-content generator." | 2 | The OWASP list makes no such statement. Its LLM06 Excessive Agency page does recommend "human-in-the-loop control to require a human to approve high-impact actions"; the sentence now says that, framed as escalation being a safety control. |
| C2 | Giskard's scan "applies a set of probes ... and reports which vulnerability categories fired". | 1 | The cited scan page says you describe the agent and it builds scenarios; reports carry tags. Reworded; "categories fired" and "your utterances instead of adversarial ones" removed in three panels. |
| C3 | Where intent is judged rather than classified, scored metrics exist. | 3 | DeepEval metrics introduction lists LLM-judged metrics. |
| C4 | Intent accuracy per intent, fallback and handoff trigger rates, thresholds (0.95). | none | The tutorial's own design and illustrative thresholds. |
