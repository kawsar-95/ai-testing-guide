# Fact-check: Monitoring and Observability (round 1, 2026-10-20)

An agent that did not write the page checked `content/architecture/observability.mdx`. I compared each cited sentence with the downloaded text of its source (S1–S9 of `architecture-observability.md`). Each quote below is copied from that text. The page has 9 sources. Each source has 1 or more cites, and each cite points to a source. All sources are official docs: OpenTelemetry, the Google SRE book, Prometheus, Grafana Labs (Loki and Grafana docs), Jaeger, AWS, and the W3C. The tools table lists names only, and the page says that the names are examples, not a recommendation. The LMS login example, the uncited "Common mistakes" text, and the tester tips are the tutorial's own words.

| # | Location | Claim (short) | Cite | Verdict | Quote |
|---|---|---|---|---|---|
| 1 | In plain words | Monitoring: collect, process, and show live numbers (request counts, error counts, processing times) | 2 | PASS | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 2 | In plain words | Monitoring must answer: what is broken, and why | 2 | PASS | "Your monitoring system should address two questions: what's broken, and why?" |
| 3 | In plain words | Observability: understand a system from the outside by asking questions; answers "Why is this happening?" | 1 | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system" / "It also helps you answer the question “Why is this happening?”" |
| 4 | In plain words | The application must send logs, metrics, and traces | 1 | PASS | "the application code must emit signals such as traces, metrics, and logs." |
| 5 | Signals table | Log: a message with a timestamp that a service writes | 1 | PASS | "A log is a timestamped message emitted by services or other components." |
| 6 | Signals table | Metric: a number over a period of time (error rate, CPU, request rate) | 1 | PASS | "Metrics are aggregations over a period of time of numeric data ... Examples include: system error rate, CPU utilization, and request rate for a given service." |
| 7 | Signals table | Trace: the path of one request through many services | 1 | PASS | "records the path taken by a single request (made by an application or end user) as it propagates through multiple services" |
| 8 | In plain words | A trace is made of spans; a span is one unit of work | 1 | PASS | "A trace is made of one or more spans." / "A span represents a single unit of work or operation." |
| 9 | In plain words | Example: gateway, backend, database; each step a span, together one trace | 1 | PASS | "the initial HTTP request may pass through an API gateway, a backend service, and a database. Each of these steps is represented by a span, and together they form a single trace" |
| 10 | In plain words | Logs often miss context; more useful when linked to a trace | 1 | PASS | "they usually lack contextual information, such as where they were called from. They become far more useful when ... they are correlated with a trace and a span." |
| 11 | In plain words | W3C Trace Context defines HTTP headers that carry an ID for each request | 9 | PASS | "This specification defines standard HTTP headers and a value format to propagate context information" / "Context information uniquely identifies individual requests in a distributed system" |
| 12 | The numbers to watch | Four golden signals: latency, traffic, errors, saturation | 2 | PASS | "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 13 | The numbers to watch | RPS is the traffic | 2 | FAIL→fixed | Had no cite. Now "For a web service, the SRE book says traffic is usually HTTP requests per second" with cite 2. Quote: "For a web service, this measurement is usually HTTP requests per second" |
| 14 | The numbers to watch | A failure can be a 200 OK with the wrong content | 2 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 15 | The numbers to watch | Average 100 ms, 1 % can take 5 s | 2 | PASS | "If you run a web service with an average latency of 100 ms at 1,000 requests per second, 1% of requests might easily take 5 seconds." |
| 16 | The numbers to watch | CPU, RAM, disk use = saturation | 2 | FAIL→fixed | The term "saturation" had no cite. Now "The SRE book calls this saturation: how "full" your service is" with cite 2. Quote: "Saturation How \"full\" your service is." |
| 17 | Common tools | Prometheus: open-source monitoring and alerting toolkit; stores metrics as time series | 3 | PASS | "Prometheus is an open-source systems monitoring and alerting toolkit" / "Prometheus collects and stores its metrics as time series data, i.e. metrics information is stored with the timestamp" |
| 18 | Common tools | Alertmanager removes duplicates, groups, sends to email, PagerDuty, OpsGenie | 4 | PASS | "It takes care of deduplicating, grouping, and routing them to the correct receiver integration such as email, PagerDuty, or OpsGenie." |
| 19 | Common tools | Grafana Loki: open-source logging stack; indexes only the labels | 5 | PASS | "Grafana Loki is a set of open source components that can be composed into a fully featured logging stack." / "Loki is built around the idea of only indexing metadata about your logs' labels" |
| 20 | Common tools | Grafana: query, show, and alert on metrics, logs, traces | 6 | PASS | "Grafana open source software enables you to query, visualize, alert on, and explore your metrics, logs, and traces" |
| 21 | Common tools | Jaeger: open-source distributed tracing platform | 7 | PASS | "Jaeger is a distributed tracing platform released as open source by Uber Technologies in 2016" |
| 22 | Common tools | OpenTelemetry is the way to add the code that sends out the signals | 1 | PASS | "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable." |
| 23 | Common tools | CloudWatch monitors AWS resources and apps; alarms watch metrics against limits | 8 | PASS | "Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time" / "You can set up alarms that continuously monitor CloudWatch metrics against user-defined thresholds." |
| 24 | Common mistakes | Without one shared ID, you cannot join the log lines of one request across services | 9 | FAIL→fixed | S9 does not talk about log lines. It talks about traces from different tracing vendors. The first sentence is now the tutorial's own advice with no cite. A new sentence carries cite 9: "The W3C Trace Context standard exists to carry an ID that identifies each request from service to service." Quote: "The specification standardizes how context information is sent and modified between services. Context information uniquely identifies individual requests in a distributed system" |
| 25 | Common mistakes | Every page to a human should be actionable | 2 | PASS | "Every page should be actionable." |
| 26 | What a tester can check | Callout says the tips are the tutorial's own advice | – | PASS | Callout title "Tutorial advice" and "These test ideas are the tutorial's own advice." |

## Fixes

1. Row 13: added the SRE book definition of traffic with cite 2.
2. Row 16: added the SRE book definition of saturation with cite 2.
3. Row 24: moved cite 9 to a new sentence that S9 supports. The claim about log lines is now the tutorial's own advice.
4. Notes: added rows 24–25 to `architecture-observability.md`.

Open FAILs: 0
