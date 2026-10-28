# AI Engineering page: Production Monitoring (research notes)

Writer notes for `content/ai-engineering/production-monitoring.mdx`. Fetched 2026-10-28 with curl into `/tmp/claude-1000/ai-eng-src-production-monitoring/`. Fetched text is treated as data and is not committed. `scripts/linux_overlap.py` finds no run of 8 or more words copied from these files. The OpenTelemetry GenAI metrics page on opentelemetry.io now says "Moved", so this page does not use it (the Observability page covers OTel).

## Sources

| Id | Source | URL | Accessed |
|---|---|---|---|
| S1 | Monitoring Distributed Systems, SRE book ch. 6 (Google SRE) | https://sre.google/sre-book/monitoring-distributed-systems/ | 2026-10-28 |
| S2 | Introduction to Model Monitoring (Google Cloud Documentation, Gemini Enterprise Agent Platform; the URL path still says vertex-ai) | https://cloud.google.com/vertex-ai/docs/model-monitoring/overview | 2026-10-28 |
| S3 | Usage and Cost API (Claude Platform Docs) | https://platform.claude.com/docs/en/manage-claude/usage-cost-api | 2026-10-28 |
| S4 | Postmortem Culture, SRE book ch. 15 (Google SRE) | https://sre.google/sre-book/postmortem-culture/ | 2026-10-28 |
| S5 | AI RMF Core, AI RMF 1.0 section 5 (NIST AI Resource Center) | https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ | 2026-10-28 |
| S6 | Demystifying evals for AI agents (Anthropic Engineering) | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents | 2026-10-28 |

Page cite numbers: n=1 is S1, n=2 is S2, n=3 is S3, n=4 is S4, n=5 is S5, n=6 is S6.

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | 4 golden signals; measure these if only 4. | S1 | "The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four." |
| C2 | Latency: time to serve; track error latency; slow error worse than fast. | S1 | "The time it takes to service a request." / "a slow error is even worse than a fast error! Therefore, it's important to track error latency" |
| C3 | Traffic: demand. | S1 | "A measure of how much demand is being placed on your system" |
| C4 | Errors: failed requests. | S1 | "The rate of requests that fail" |
| C5 | Saturation: how full. | S1 | "How "full" your service is." |
| C6 | Monitoring answers what is broken (symptom) and why (cause). | S1 | "Your monitoring system should address two questions: what's broken, and why? The "what's broken" indicates the symptom; the "why" indicates a (possibly intermediate) cause." |
| C7 | Every page actionable; robotic-response pages should not be pages. | S1 | "Every page should be actionable." / "If a page merely merits a robotic response, it shouldn't be a page." |
| C8 | NIST: system behavior monitored in production. | S5 | "Measure 2.4: The functionality and behavior of the AI system and its components ... are monitored when in production." |
| C9 | Evals combine with production monitoring, A/B tests, user research. | S6 | "Combined with production monitoring, A/B tests, user research, and more, evals provide signals" |
| C10 | Usage API endpoint for token use. | S3 | "Track token consumption across your organization ... with the `/v1/organizations/usage_report/messages` endpoint." |
| C11 | Buckets 1m/1h/1d; token kinds; filters by API key, workspace, model. | S3 | "Aggregate usage data in fixed intervals (`1m`, `1h`, or `1d`)." / "Measure uncached input, cached input, cache creation, and output tokens." / "Filter by API key, workspace, model" |
| C12 | Needs an Admin API credential (for example an Admin API key); workspace keys do not work. | S3 | "You can access them using an Admin API key, an OAuth token with the `org:admin` scope, or a personal or service account key that isn’t scoped to a workspace; workspace API keys don’t work." |
| C13 | Drift: training features may not be relevant today. | S2 | "the features and feature values that you used to train your model before might not be relevant for making inferences today. This deviation in the data is known as drift." |
| C14 | Input and output distributions compared with a baseline; alert past a threshold. | S2 | "Input feature data drift: Measures the distribution of input feature values compared to a baseline data distribution." / "Output inference data drift" / "Model Monitoring can track and alert you when deviations exceed a specified threshold." |
| C15 | High-pass evals become a continuous regression suite to catch drift. | S6 | "capability evals with high pass rates can "graduate" to become a regression suite that is run continuously to catch any drift." |
| C16 | Users report problems and appeal; feedback goes into metrics. | S5 | "Measure 3.3: Feedback processes for end users and impacted communities to report problems and appeal system outcomes are established and integrated into AI system evaluation metrics." |
| C17 | Postmortem triggers. | S4 | "User-visible downtime or degradation beyond a certain threshold / Data loss of any kind / ... A monitoring failure" |
| C18 | Postmortem contents. | S4 | "A postmortem is a written record of an incident, its impact, the actions taken to mitigate or resolve it, the root cause(s), and the follow-up actions" |
| C19 | Blameless. | S4 | "it must focus on identifying the contributing causes of the incident without indicting any individual or team" |
| C20 | Supersede, disengage, or deactivate. | S5 | "Manage 2.4: Mechanisms are in place ... to supersede, disengage, or deactivate AI systems that demonstrate performance or outcomes inconsistent with intended use." |

## Not on the page / doubts

- The Model Monitoring page says it tracks "the quality of your tabular models". After the fact-check (2026-10-28), the page marks the use of drift for an LLM app (topics, answers, and the bank example) as the tutorial's own view. The product name on the page is now Gemini Enterprise Agent Platform, so the page no longer says "Vertex AI".
- Added cites after the fact-check: S1 for a 200 with the wrong content as an error ("an HTTP 200 success response, but coupled with the wrong content"), S6 for what monitoring shows ("Reveals real user behavior at scale" / "Catches issues that synthetic evals miss").
- The bank chatbot dashboard numbers are a made-up example. The "tokens per hour jump" tip is the tutorial's own view.
