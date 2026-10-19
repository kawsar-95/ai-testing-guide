# Monitoring and Observability (Architecture module, part 19) — research notes (2026-10-20)

Base text: the owner's notes, section "Monitoring and Observability" and its tools table (`architecture-owner-notes.md`). The owner's notes get no cite. The LMS login example, the "Common mistakes" advice, and the tester tips are the tutorial's own words.

Fetch note: each source was downloaded with `curl` and converted to plain text in the scratch folder. Each quote below is copied from that text. The text is not committed.

Tools table: the tool names come from the owner's table and have no cite. The page cites only the claims about what a tool does (rows 15 to 21 below). The owner's table lists Datadog, New Relic, Splunk, ELK/Elastic Stack, Zipkin, PagerDuty, Opsgenie, Google Cloud Monitoring, and Azure Monitor by name only. The page makes no claim about what those tools do, so they have no source.

## Sources

S1. Observability primer — OpenTelemetry — https://opentelemetry.io/docs/concepts/observability-primer/ — accessed 2026-10-20

S2. Monitoring Distributed Systems (Site Reliability Engineering, chapter 6) — Google (sre.google) — https://sre.google/sre-book/monitoring-distributed-systems/ — accessed 2026-10-20

S3. Overview — Prometheus — https://prometheus.io/docs/introduction/overview/ — accessed 2026-10-20

S4. Alertmanager — Prometheus — https://prometheus.io/docs/alerting/latest/alertmanager/ — accessed 2026-10-20

S5. Grafana Loki documentation — Grafana Labs — https://grafana.com/docs/loki/latest/ — accessed 2026-10-20

S6. Introduction to Grafana — Grafana Labs — https://grafana.com/docs/grafana/latest/introduction/ — accessed 2026-10-20

S7. Introduction — Jaeger documentation — https://www.jaegertracing.io/docs/latest/ — accessed 2026-10-20

S8. What is Amazon CloudWatch? — Amazon CloudWatch User Guide (AWS) — https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html — accessed 2026-10-20

S9. Trace Context (W3C Recommendation) — W3C — https://www.w3.org/TR/trace-context/ — accessed 2026-10-20

## Claims

| # | Claim (page wording, short) | Source | Quote |
|---|---|---|---|
| 1 | Monitoring = collecting, processing, aggregating, and displaying real-time numbers about a system | S2 | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 2 | Monitoring should answer two questions: what's broken, and why | S2 | "Your monitoring system should address two questions: what's broken, and why?" |
| 3 | Observability lets you ask questions about a system from the outside; it helps answer "Why is this happening?" | S1 | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings." / "It also helps you answer the question “Why is this happening?”" |
| 4 | The application must emit signals: traces, metrics, logs | S1 | "the application code must emit signals such as traces, metrics, and logs." |
| 5 | A log is a timestamped message | S1 | "A log is a timestamped message emitted by services or other components." |
| 6 | Logs alone often lack context; more useful when linked to a trace | S1 | "Logs aren't enough for tracking code execution, as they usually lack contextual information, such as where they were called from." / "They become far more useful when they are included as part of a span, or when they are correlated with a trace and a span." |
| 7 | Metrics are numbers aggregated over time; examples error rate, CPU, request rate | S1 | "Metrics are aggregations over a period of time of numeric data about your infrastructure or application. Examples include: system error rate, CPU utilization, and request rate for a given service." |
| 8 | A trace records the path of one request through many services | S1 | "A distributed trace, more commonly known as a trace, records the path taken by a single request (made by an application or end user) as it propagates through multiple services" |
| 9 | A trace is made of spans; a span is one unit of work | S1 | "A trace is made of one or more spans." / "A span represents a single unit of work or operation." |
| 10 | Example: one request passes API gateway, backend service, database; each step is a span | S1 | "when a user loads a web page, the initial HTTP request may pass through an API gateway, a backend service, and a database. Each of these steps is represented by a span, and together they form a single trace" |
| 11 | Four golden signals: latency, traffic, errors, saturation | S2 | "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 12 | Errors include implicit failures: HTTP 200 with the wrong content | S2 | "The rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 13 | Average latency hides slow requests: 100 ms average, 1 % can take 5 s | S2 | "If you run a web service with an average latency of 100 ms at 1,000 requests per second, 1% of requests might easily take 5 seconds." |
| 14 | Every page (alert to a human) should be actionable | S2 | "Every page should be actionable." |
| 15 | Prometheus is an open-source monitoring and alerting toolkit; it stores metrics as time series | S3 | "Prometheus is an open-source systems monitoring and alerting toolkit" / "Prometheus collects and stores its metrics as time series data" |
| 16 | Alertmanager deduplicates, groups, and routes alerts to email, PagerDuty, or OpsGenie | S4 | "It takes care of deduplicating, grouping, and routing them to the correct receiver integration such as email, PagerDuty, or OpsGenie." |
| 17 | Grafana Loki is a logging stack that indexes only label metadata | S5 | "Grafana Loki is a set of open source components that can be composed into a fully featured logging stack." / "Loki is built around the idea of only indexing metadata about your logs' labels" |
| 18 | Grafana lets you query, visualize, and alert on metrics, logs, and traces | S6 | "Grafana open source software enables you to query, visualize, alert on, and explore your metrics, logs, and traces wherever they are stored." |
| 19 | Jaeger is an open-source distributed tracing platform | S7 | "Jaeger is a distributed tracing platform released as open source by Uber Technologies in 2016" |
| 20 | OpenTelemetry is how application code is instrumented | S1 | "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable." |
| 21 | CloudWatch monitors AWS resources and apps; alarms watch metrics against thresholds | S8 | "Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time" / "You can set up alarms that continuously monitor CloudWatch metrics against user-defined thresholds." |
| 22 | W3C Trace Context: standard HTTP headers that carry context that identifies each request across services | S9 | "This specification defines standard HTTP headers and a value format to propagate context information that enables distributed tracing scenarios." / "Context information uniquely identifies individual requests in a distributed system" |
| 23 | Without a shared ID, traces from different tools cannot be linked | S9 | "Traces that are collected by different tracing vendors cannot be correlated as there is no shared unique identifier." |
| 24 | Traffic for a web service is usually HTTP requests per second | S2 | "For a web service, this measurement is usually HTTP requests per second" |
| 25 | Saturation is how "full" the service is | S2 | "Saturation How \"full\" your service is." |
