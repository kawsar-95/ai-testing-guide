# Fact check: AI/ML Testing, Virtual Assistant Testing

Page: `content/ai-ml-testing/virtual-assistant-testing.mdx`. Date: 2026-11-02. Each source was opened and searched on this date.

## Sources

| # | URL | Works | Official / primary |
|---|---|---|---|
| 1 | https://docs.giskard.ai/oss/scan | yes | Giskard (docs) |
| 2 | https://genai.owasp.org/llm-top-10/ | yes | OWASP |
| 3 | https://deepeval.com/docs/metrics-introduction | yes | DeepEval docs |

## Claims (Technical text)

| # | Claim | Cite | Verdict | Evidence |
|---|---|---|---|---|
| 1 | "Both failures are in the OWASP list of LLM application risks, because a model that answers out of scope is a harmful-content generator." | 2 | FAIL, fixed | The OWASP list makes no such statement. Its LLM06 Excessive Agency page does recommend "human-in-the-loop control to require a human to approve high-impact actions"; the sentence now says that, framed as escalation being a safety control. |
| 2 | Giskard's scan "applies a set of probes ... and reports which vulnerability categories fired". | 1 | FAIL, fixed | The cited scan page says you describe the agent and it builds scenarios; reports carry tags. Reworded; "categories fired" and "your utterances instead of adversarial ones" removed in three panels. |
| 3 | Where intent is judged rather than classified, scored metrics exist. | 3 | PASS | DeepEval metrics introduction lists LLM-judged metrics. |
| 4 | Intent accuracy per intent, fallback and handoff trigger rates, thresholds (0.95). | none | PASS | The tutorial's own design and illustrative thresholds. |

Open FAILs: 0
