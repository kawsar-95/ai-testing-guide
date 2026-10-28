# Fact-check: content/ai-engineering/production-monitoring.mdx

Checked 2026-10-28 by an agent that did not write the page. I fetched all 6 sources again as text (SRE ch. 6 and ch. 15, the Google Cloud Model Monitoring overview, the Claude Usage and Cost API page in Markdown, the NIST AI RMF Core, the Anthropic evals article). I did not trust the quotes of the research notes. Each quote below is from my own fetch.

Copy check: `python3 scripts/linux_overlap.py content/ai-engineering/production-monitoring.mdx <fetched-dir>` printed no run, before and after the fixes.

## Claims (Technical panels and code)

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Production monitoring of an AI app has 2 layers (service, AI) | none | FAIL | A framing with no cite and no "tutorial's own view" mark. |
| 2 | The 4 golden signals are latency, traffic, errors, saturation; with room for only 4, pick these | 1 | PASS | "The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four." |
| 3 | The AI layer: token use and cost, drift, answer quality | none | PASS (after fix of 1) | Part of the tutorial's own split; each item has a cited section below. |
| 4 | NIST: the system and its parts are monitored in production | 5 | PASS | "Measure 2.4: The functionality and behavior of the AI system and its components – as identified in the map function – are monitored when in production." |
| 5 | Anthropic: evals work together with production monitoring, A/B tests, user research | 6 | PASS | "Combined with production monitoring, A/B tests, user research, and more, evals provide signals to continue improving Claude Code as it scales." |
| 6 | An eval suite checks what you thought of; monitoring shows what real use brings | none | FAIL | No cite and no mark. S6 supports it. |
| 7 | Latency: time to serve a request; track error latency; a slow error is worse than a fast one | 1 | PASS | "The time it takes to service a request." / "a slow error is even worse than a fast error! Therefore, it’s important to track error latency" |
| 8 | Traffic: demand on the system (chat turns per minute as an example) | 1 | PASS | "A measure of how much demand is being placed on your system". The example is in the "For an AI app" column. |
| 9 | Errors: failed requests, including 429 and 5xx of the model API | 1 | PASS | "The rate of requests that fail, either explicitly (e.g., HTTP 500s)". 429 and 5xx are the AI-app examples of the column. |
| 10 | Saturation: how full the service is (a queue as an example) | 1 | PASS | "Saturation How "full" your service is." |
| 11 | Monitoring answers what is broken (symptom) and why (cause) | 1 | PASS | "Your monitoring system should address two questions: what’s broken, and why? The "what’s broken" indicates the symptom; the "why" indicates a (possibly intermediate) cause." |
| 12 | Every page should be actionable | 1 | PASS | "Every page should be actionable." |
| 13 | Usage API endpoint `/v1/organizations/usage_report/messages` | 3 | PASS | "Track token consumption across your organization ... with the `/v1/organizations/usage_report/messages` endpoint." |
| 14 | Buckets `1m`, `1h`, `1d`; uncached, cached, cache creation, output tokens; filter by API key, workspace, model | 3 | PASS | "Aggregate usage data in fixed intervals (`1m`, `1h`, or `1d`)." / "Measure uncached input, cached input, cache creation, and output tokens." / "Filter by API key, workspace, model, service tier, context window" |
| 15 | It needs an Admin API key; a workspace API key does not work | 3 | FAIL | Not exact: "You can access them using an Admin API key, an OAuth token with the `org:admin` scope, or a personal or service account key that isn’t scoped to a workspace; workspace API keys don’t work." An Admin API key is one option, not the only one. |
| 16 | curl example: URL, `group_by[]=model`, `bucket_width=1d`, headers `anthropic-version: 2023-06-01` and `x-api-key: $ANTHROPIC_ADMIN_KEY` | 3 | PASS | The "Daily usage by model" example: "usage_report/messages?\ starting_at=2025-01-01T00:00:00Z&\ ending_at=2025-01-08T00:00:00Z&\ group_by[]=model&\ bucket_width=1d" \ -H "anthropic-version: 2023-06-01" \ -H "x-api-key: $ANTHROPIC_ADMIN_KEY"". Only the dates differ. |
| 17 | Source 3 URL | 3 | FAIL (minor) | The page front matter gives the canonical URL `https://platform.claude.com/docs/en/manage-claude/usage-cost-api`. The old URL still loads, but the canonical URL is better. |
| 18 | Training features may not be relevant today; Google Cloud calls this deviation drift | 2 | PASS | "the features and feature values that you used to train your model before might not be relevant for making inferences today. This deviation in the data is known as drift." |
| 19 | "Vertex AI Model Monitoring" compares input and output distributions with a baseline and alerts past a threshold | 2 | FAIL | The comparison and the alert are in the source: "Measures the distribution of input feature values compared to a baseline data distribution." / "Measures the model's inferences data distribution compared to a baseline data distribution." / "Model Monitoring can track and alert you when deviations exceed a specified threshold." But the page is now titled "Introduction to Model Monitoring | Gemini Enterprise Agent Platform" and does not say "Vertex AI" in its text, so the name is out of date. The page also leaves out that it is about "the quality of your tabular models". |
| 20 | "For an LLM app, the same idea applies to the topics ... and to the answers" | none | FAIL | Writer doubt 4. The source is about tabular models: "Model Monitoring lets you run monitoring jobs as needed or on a regular schedule to track the quality of your tabular models." The LLM use is not marked as the tutorial's own view (the mark covered only the next sentence). |
| 21 | Tutorial's own view: sample real questions each week, compare with the eval set | none | PASS | Marked as the tutorial's own view. |
| 22 | High-pass capability evals can become a continuous regression suite to catch drift | 6 | PASS | "capability evals with high pass rates can “graduate” to become a regression suite that is run continuously to catch any drift." |
| 23 | NIST: users report problems and appeal outcomes; feedback goes into evaluation metrics | 5 | PASS | "Measure 3.3: Feedback processes for end users and impacted communities to report problems and appeal system outcomes are established and integrated into AI system evaluation metrics." |
| 24 | Postmortem triggers: user-visible downtime or degradation past a threshold, data loss, monitoring failure | 4 | PASS | "common postmortem triggers include: User-visible downtime or degradation beyond a certain threshold Data loss of any kind ... A monitoring failure (which usually implies manual incident discovery)" |
| 25 | A postmortem records incident, impact, actions, root causes, follow-up | 4 | PASS | "A postmortem is a written record of an incident, its impact, the actions taken to mitigate or resolve it, the root cause(s), and the follow-up actions to prevent the incident from recurring." |
| 26 | Blameless: causes without blaming a person or team | 4 | PASS | "it must focus on identifying the contributing causes of the incident without indicting any individual or team for bad or inappropriate behavior." |
| 27 | Example: the team groups usage by model and day | 3 | PASS | "#### Daily usage by model" with `group_by[]=model` and `bucket_width=1d`. |
| 28 | Example: "This is drift in the input data: the questions of today differ from the baseline" | 2 | FAIL | The same as 20: the source defines drift for tabular features. Calling a change in chat topics "drift" is the tutorial's own use and is not marked. |
| 29 | Example: blameless postmortem because users saw worse answers | 4 | PASS | Trigger: "User-visible downtime or degradation beyond a certain threshold". |
| 30 | A 200 response with a wrong answer is still a 200 | none | FAIL | No cite. S1 supports it as an error: "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)". |
| 31 | A fast 500 makes the average look good; track error latency on its own | 1 | PASS | "factoring 500s into your overall latency might result in misleading calculations" / "it’s important to track error latency, as opposed to just filtering out errors." |
| 32 | A page that needs only a robotic response should not be a page | 1 | PASS | "If a page merely merits a robotic response, it shouldn’t be a page." |
| 33 | Drift is a change compared with a baseline distribution | 2 | PASS | "compared to a baseline data distribution" (claim 19). |
| 34 | The Usage API gives buckets as small as 1 minute | 3 | PASS | "(`1m`, `1h`, or `1d`)" and the table row "`1m` | 60 buckets | 1,440 buckets | Real-time monitoring". |
| 35 | Tutorial's own view: a jump in tokens per hour is often the first sign of a loop or abuse | none | PASS | Marked as the tutorial's own view. |
| 36 | NIST: mechanisms to supersede, disengage, or deactivate an AI system | 5 | PASS | "Manage 2.4: Mechanisms are in place and applied, and responsibilities are assigned and understood, to supersede, disengage, or deactivate AI systems that demonstrate performance or outcomes inconsistent with intended use." |
| 37 | "What a tester can check" tip | none | PASS | A "Tutorial advice" callout that says the ideas are the tutorial's own. No cites. |
| 38 | Key words: golden signals, symptom and cause, drift, time bucket, postmortem, blameless | 1–4 | PASS | The same quotes as claims 2, 11, 33, 14, 25, 26. |

Source types: all 6 are official or primary (Google SRE books, Google Cloud docs, Claude Platform docs, NIST, Anthropic Engineering). PASS.

FAILs found: 8 (claims 1, 6, 15, 17, 19, 20, 28, 30).

## Fixes

| # | Fix (all 3 voices where the text is in all 3) |
|---|---|
| 1 | "This tutorial splits the production monitoring of an AI app into 2 layers". |
| 6 | Added `<Cite n={6} />` to "Monitoring shows what real use brings". |
| 15 | "It needs an Admin API credential, such as an Admin API key; a workspace API key does not work". |
| 17 | Source 3 URL changed to `https://platform.claude.com/docs/en/manage-claude/usage-cost-api`. Notes updated. |
| 19 | "Model Monitoring in Google Cloud (Gemini Enterprise Agent Platform) tracks the quality of tabular models." Source 2 title is now "Introduction to Model Monitoring (Gemini Enterprise Agent Platform)", publisher "Google Cloud Documentation". Notes updated. |
| 20 | "Tutorial's own view: the source is about tabular models, but the same idea can apply to an LLM app, to the topics that users ask about and to the answers." |
| 28 | "In the tutorial's own view, this is drift in the input data (a change compared with a baseline [2]): the questions of today differ from the questions before the launch." |
| 30 | "A 200 response with the wrong content is still an error [1]." |

## Re-check

| # | Verdict | Quote or reason |
|---|---|---|
| 1 | PASS | Now marked as the tutorial's own split. |
| 6 | PASS | S6 table: "Production monitoring ... Reveals real user behavior at scale Catches issues that synthetic evals miss". |
| 15 | PASS | "You can access them using an Admin API key, an OAuth token with the `org:admin` scope, or a personal or service account key that isn’t scoped to a workspace; workspace API keys don’t work." (fetched from the new URL) |
| 17 | PASS | The new URL loads and its front matter says `url: https://platform.claude.com/docs/en/manage-claude/usage-cost-api`. |
| 19 | PASS | Title: "Introduction to Model Monitoring | Gemini Enterprise Agent Platform"; "to track the quality of your tabular models". |
| 20 | PASS | Marked as the tutorial's own view, and says the source is about tabular models. |
| 28 | PASS | Marked as the tutorial's own view; the cite supports only the definition of drift. |
| 30 | PASS | "an HTTP 200 success response, but coupled with the wrong content" (listed under Errors). |

The copy check printed no run after the fixes. `node --test tests/voice-source.test.ts tests/ai-engineering.test.ts`: no failure names this page (the one failing test names 2 skeleton pages of other slugs).

Open FAILs: 0
