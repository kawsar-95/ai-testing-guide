# Fact check: devops / monitoring-observability

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://opentelemetry.io/docs/concepts/observability-primer/; S2 https://prometheus.io/docs/introduction/overview/; S3 https://grafana.com/docs/loki/latest/get-started/overview/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / monitoring-observability (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Metrics, logs, and traces: the tools, distributed tracing, and reliability. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It lists the topic and describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings. | S1 | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings." |
| 2 | Prometheus is an open-source systems monitoring and alerting toolkit. | S2 | PASS | "Prometheus      is an open-source systems monitoring and alerting toolkit originally built at SoundCloud" |
| 3 | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. | S3 | PASS | "Grafana Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus." The source has no hyphens in "horizontally scalable" and "highly available". The meaning is the same. |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / monitoring-observability (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Observability, Prometheus, and Loki. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings | S1 | PASS | S1: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings." |
| 2 | Prometheus is an open-source systems monitoring and alerting toolkit | S2 | PASS | S2: "Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud." The text is split across lines 2 and 3 of the file. |
| 3 | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S3 | PASS | S3: "Grafana Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus." The page uses hyphens ("horizontally-scalable", "highly-available"). The source has no hyphens, but the meaning is the same. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / monitoring-observability (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Observability, Prometheus, and Loki. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings | S1 | PASS | S1: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings." |
| 2 | Prometheus is an open-source systems monitoring and alerting toolkit | S2 | PASS | S2: "Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud" |
| 3 | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S3 | PASS | S3: "Grafana Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / monitoring-observability (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Observability, Prometheus, and Loki. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings | S1 | PASS | S1: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings." |
| 2 | Prometheus is an open-source systems monitoring and alerting toolkit | S2 | PASS | S2: "Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud." |
| 3 | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S3 | PASS | S3: "Grafana Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 40 sources (41 after round 6). Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-19)

# Fact check: devops / monitoring-observability (round 1)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Names the topics and the local practice run | none | N/A | Describes the page itself. |
| 2 | Lede | Covers the three signals, the tools, the local run, and its place in the series | none | N/A | Framing sentences and links to other pages. |
| 3 | What it is | Observability lets you understand a system from the outside by letting you ask questions without knowing its inner workings | S1 | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 4 | What it is | The application must be properly instrumented | S1 | PASS | "your application must be properly instrumented" |
| 5 | What it is | The code must emit signals such as traces, metrics, and logs | S1 | PASS | "the application code must emit signals such as traces, metrics, and logs" |
| 6 | What it is | Telemetry is data emitted from a system and its behavior | S1 | PASS | "Telemetry refers to data emitted from a system and its behavior" |
| 7 | What it is | OpenTelemetry is the mechanism by which code is instrumented | S1 | PASS | "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable" |
| 8 | What it is | SRE book defines monitoring as collecting, processing, aggregating, and displaying real-time quantitative data | S7 | PASS | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system" |
| 9 | What it is | White-box monitoring is based on metrics exposed by the internals | S7 | PASS | "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring tests externally visible behavior as a user would see it | S7 | PASS | "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics are aggregations over a period of time of numeric data | S1 | PASS | "Metrics are aggregations over a period of time of numeric data about your" |
| 12 | What it is | A log is a timestamped message | S1 | PASS | "A log is a timestamped message emitted by services or other components." |
| 13 | What it is | A span is a single unit of work or operation | S1 | PASS | "A span represents a single unit of work or operation." |
| 14 | What it is | A trace is made of one or more spans | S1 | PASS | "A trace is made of one or more spans." |
| 15 | What it is | The first span is the root span | S1 | PASS | "The first span represents the root span." |
| 16 | What it is | A distributed trace records the path of a single request through multiple services | S1 | PASS | "records the path taken by a single request ... as it propagates through multiple services in an architecture" |
| 17 | What it is | Prometheus is an open-source systems monitoring and alerting toolkit | S8 | PASS | "is an open-source systems monitoring and alerting toolkit originally built at" |
| 18 | What it is | Prometheus collects and stores metrics as time series | S8 | PASS | "Prometheus collects and stores its metrics as time series data" |
| 19 | What it is | Alertmanager handles alerts sent by clients such as the Prometheus server | S23 | PASS | "handles alerts sent by client applications such as the Prometheus server." |
| 20 | What it is | Loki is horizontally-scalable, highly-available, multi-tenant, inspired by Prometheus | S31 | PASS | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 21 | What it is | Loki does not index the contents of the logs | S31 | PASS | "Loki does not index the contents of the logs" |
| 22 | What it is | OpenTelemetry is open source, vendor- and tool-agnostic | S2 | PASS | "Open source, as well as vendor- and tool-agnostic" |
| 23 | What it is | It is not an observability backend | S2 | PASS | "OpenTelemetry is not an observability backend itself." |
| 24 | How it works | Prometheus has multiple components, many optional | S8 | PASS | "The Prometheus ecosystem consists of multiple components, many of which are optional" |
| 25 | How it works | Main server scrapes and stores time series | S8 | PASS | "which scrapes and stores time series data" |
| 26 | How it works | Client libraries instrument application code | S8 | PASS | "client libraries for instrumenting application code" |
| 27 | How it works | An alertmanager handles alerts | S8 | PASS | "an alertmanager to handle alerts" |
| 28 | How it works | Prometheus scrapes metrics from instrumented jobs | S8 | PASS | "Prometheus scrapes metrics from instrumented jobs" |
| 29 | How it works | It stores samples locally and runs rules to aggregate/record or alert | S8 | PASS | "It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts." |
| 30 | How it works | Grafana or other API consumers can visualize the data | S8 | PASS | "Grafana or other API consumers can be used to visualize the collected data." |
| 31 | How it works | Collection is a pull model over HTTP | S8 | PASS | "time series collection happens via a pull model over HTTP" |
| 32 | How it works | Prometheus stores data as time series | S8 | PASS | "Prometheus collects and stores its metrics as time series data" |
| 33 | How it works | A series is identified by metric name and optional labels | S9 | PASS | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| 34 | How it works | Prometheus may generate temporary derived series from queries | S9 | PASS | "Besides stored time series, Prometheus may generate temporary derived time series" |
| 35 | How it works | An endpoint you can scrape is an instance, usually one process | S11 | PASS | "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 36 | How it works | Instances with the same purpose are a job | S11 | PASS | "A collection of instances with the same purpose ... is called a job." |
| 37 | How it works | Prometheus attaches some labels automatically | S11 | PASS | "it attaches some labels automatically to the" |
| 38 | How it works | `job` label holds the configured job name | S11 | PASS | "job: The configured job name that the target belongs to." |
| 39 | How it works | `instance` label holds host and port of the URL | S11 | PASS | "instance: The <host>:<port> part of the target's URL that was scraped." |
| 40 | How it works | For each scrape Prometheus stores a sample in `up` | S11 | PASS | "For each instance scrape, Prometheus stores a sample in" |
| 41 | How it works | `up` is 1 if healthy/reachable, 0 if scrape failed | S11 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 42 | How it works | `up` is useful for availability monitoring | S11 | PASS | "The up time series is useful for instance availability monitoring." |
| 43 | How it works | Four core metric types | S10 | PASS | "offer four core metric types" |
| 44 | How it works | Counter definition | S10 | PASS | "value can only increase or be reset to zero on restart" |
| 45 | How it works | Do not use a counter for a value that can decrease | S10 | PASS | "Do not use a counter to expose a value that can decrease." |
| 46 | How it works | Gauge definition | S10 | PASS | "a single numerical value that can" / "arbitrarily go up and down" |
| 47 | How it works | Histogram counts observations in configurable buckets | S10 | PASS | "by counting them in configurable buckets" |
| 48 | How it works | It also provides a sum of observed values | S10 | PASS | "It also provides a sum" |
| 49 | How it works | Classic histogram is multiple series of float samples | S10 | PASS | "A classic histogram, however, consists of multiple time series of simple float" |
| 50 | How it works | They are cumulative bucket counters, sum, count | S10 | PASS | "cumulative counters for the observation buckets" (plus `_sum` and `_count` at lines 180 onward) |
| 51 | How it works | A summary samples observations | S10 | PASS | "Similar to a histogram, a summary samples observations" |
| 52 | How it works | Summaries calculate streaming φ-quantiles in the program | S20 | PASS | "calculate streaming φ-quantiles within the instrumented program and expose them" |
| 53 | How it works | Histograms: quantiles computed on server with `histogram_quantile()` | S20 | PASS | "Prometheus server using the histogram_quantile()" |
| 54 | How it works | Summary: other quantiles and windows cannot be calculated later | S20 | PASS | "Other φ-quantiles and sliding windows cannot be calculated later." |
| 55 | How it works | Single-word application prefix | S18 | PASS | "SHOULD have a (single-word) application prefix" |
| 56 | How it works | Suffix describing the unit, plural | S18 | PASS | "SHOULD have a suffix describing the unit, in plural form." |
| 57 | How it works | Each unique label combination is a new series | S18 | PASS | "every unique combination of key-value label pairs represents a new time series, which can dramatically increase the amount of data stored" |
| 58 | How it works | No high-cardinality labels | S18 | PASS | "Do not use labels to store dimensions with high cardinality" |
| 59 | How it works | Three service types | S19 | PASS | "services can generally be broken down into three types:" |
| 60 | How it works | Monitor online-serving on both sides | S19 | PASS | "Online-serving systems should be monitored on both the client and server side." |
| 61 | How it works | Different behavior is useful for debugging | S19 | PASS | "that is very useful information for debugging." |
| 62 | How it works | Absent series are hard to handle | S19 | PASS | "Time series that are not present until something happens are difficult" |
| 63 | How it works | Export a default such as 0 | S19 | PASS | "export a default value such as 0 for any time series you know may exist in advance." |
| 64 | How it works | `#` lines are comments | S17 | PASS | "Lines with a # as the first non-whitespace character are comments." |
| 65 | How it works | Ignored unless HELP or TYPE | S17 | PASS | "ignored unless the first token after # is either HELP or TYPE" |
| 66 | How it works | TYPE expects exactly two more tokens | S17 | PASS | "If the token is TYPE, exactly two more tokens are expected." |
| 67 | How it works | Second token is counter, gauge, histogram, summary, or untyped | S17 | PASS | "summary, or untyped, defining the type for the metric of that name" |
| 68 | How it works | Remaining lines are samples, one per line | S17 | PASS | "The remaining lines describe samples (one per line)" |
| 69 | How it works | PromQL is a functional query language | S12 | PASS | "Prometheus provides a functional query language called PromQL" |
| 70 | How it works | Instant or range query | S12 | PASS | "it can be an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time" |
| 71 | How it works | Instant vector definition | S12 | PASS | "Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 72 | How it works | Range vector definition | S12 | PASS | "Range vector - a set of time series containing a range of data points over time for each time series" |
| 73 | How it works | Instant vector selectors | S12 | PASS | "Instant vector selectors allow the selection of a set of time series and a" |
| 74 | How it works | Comma-separated label matchers in braces | S12 | PASS | "appending a comma-separated list of label" |
| 75 | How it works | Counter names end in `_total` by convention | S12 | PASS | "By convention, time series containing float counters have a name ending on _total" |
| 76 | How it works | Comparison with scalar drops false elements | S40 | PASS | "comparison result is false get dropped from the result vector." |
| 77 | How it works | `rate()` is per-second average rate of increase | S13 | PASS | "rate(v range-vector) calculates the per-second average rate of increase of the" |
| 78 | How it works | Counter resets adjusted automatically | S13 | PASS | "Breaks in monotonicity (such as counter resets due to target restarts) are" |
| 79 | How it works | `rate` only with counters | S13 | PASS | "rate should only be used with counters" |
| 80 | How it works | On gauge floats: nonsensical but processed | S12 | PASS | "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains" |
| 81 | How it works | Rate first, then aggregate | S13 | PASS | "always take a rate() first, then aggregate." |
| 82 | How it works | Otherwise resets undetected | S13 | PASS | "Otherwise rate() cannot detect" |
| 83 | How it works | `histogram_quantile` signature and scope | S13 | PASS | "histogram_quantile(φ scalar, b instant-vector) calculates the φ-quantile (0 ≤ φ ≤ 1) from a classic histogram or from a native histogram" |
| 84 | How it works | Use `rate()` for the time window | S13 | PASS | "Use the rate() function to specify the time window for the quantile calculation." |
| 85 | How it works | `le` must be in the `by` clause | S13 | PASS | "it has to be included in the by clause." |
| 86 | How it works | Recording rules precompute and save as new series | S14 | PASS | "Recording rules allow you to precompute frequently needed or computationally" |
| 87 | How it works | Rules live in a rule group | S14 | PASS | "Recording and alerting rules exist in a rule group." |
| 88 | How it works | Group rules run sequentially, same evaluation time | S14 | PASS | "run sequentially at a regular interval, with the same evaluation time." |
| 89 | How it works | Recording rule names must be valid metric names | S14 | PASS | "valid metric names." |
| 90 | How it works | Alerting rule series become pending or firing | S14 | PASS | "all resultant time series become" (the sentence continues on the next line) |
| 91 | How it works | Firing once returned for that long | S14 | PASS | "Alerts are considered firing once they have been returned for this long." |
| 92 | How it works | Not yet long enough is pending | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 93 | How it works | `labels` clause adds labels | S15 | PASS | "The labels clause allows specifying a set of additional labels to be attached" |
| 94 | How it works | `annotations` clause stores longer info | S15 | PASS | "The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| 95 | How it works | `ALERTS` synthetic series | S15 | PASS | "For pending and firing alerts, Prometheus also stores synthetic time series of" |
| 96 | How it works | Alerting rules are not a full notification solution | S15 | PASS | "good at figuring what is broken right now, but they are not a fully-fledged notification solution." |
| 97 | How it works | Alerting has two parts | S22 | PASS | "Alerting with Prometheus is separated into two parts." |
| 98 | How it works | Rules send alerts to Alertmanager | S22 | PASS | "Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| 99 | How it works | Dedupe, group, route to receiver | S23 | PASS | "takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 100 | How it works | Grouping | S23 | PASS | "Grouping categorizes alerts of similar nature into a single notification." |
| 101 | How it works | Inhibition | S23 | PASS | "Inhibition is a concept of suppressing notifications for certain alerts if" |
| 102 | How it works | Silences mute alerts | S23 | PASS | "Silences are a straightforward way to simply mute alerts for a given time." |
| 103 | How it works | Silence uses matchers | S23 | PASS | "A silence is configured based on matchers, just like the routing tree." |
| 104 | How it works | Top-level route must match all alerts | S24 | PASS | "Every alert enters the routing tree at the configured top-level route, which" (the source continues "must match all alerts") |
| 105 | How it works | Then traverses child nodes | S24 | PASS | "It then traverses the child nodes." |
| 106 | How it works | `continue` false stops after first match | S24 | PASS | "If continue is set to false, it stops after the first matching child." |
| 107 | How it works | No matching child: current node handles it | S24 | PASS | "If an alert does not match any children of a node" |
| 108 | How it works | Optional route parameters inherited | S24 | PASS | "are inherited from its parent node if" |
| 109 | How it works | `amtool` is a cli tool for the API | S25 | PASS | "amtool is a cli tool for interacting with the Alertmanager API." |
| 110 | How it works | Bundled with all releases | S25 | PASS | "It is bundled with all releases of Alertmanager." |
| 111 | How it works | `amtool` validates a configuration file with no server | S24 | FAIL | The source limits this to UTF-8 strict mode: "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server. You do not need a running Alertmanager server to do this." Fix: say that `amtool` can validate that a file is compatible with UTF-8 strict mode, with no running server. |
| 112 | How it works | Alert on symptoms tied to end-user pain, as few alerts as possible | S21 | PASS | "Aim to have as few alerts as possible, by alerting on symptoms that are associated with end-user pain" |
| 113 | How it works | Summary of alerting advice | S21 | PASS | "To summarize: keep alerting simple, alert on symptoms, have good consoles to" |
| 114 | How it works | Page on user-visible errors | S21 | PASS | "For error rates, page on user-visible errors." |
| 115 | How it works | Four golden signals | S7 | PASS | "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 116 | How it works | If only four metrics, focus on these | S7 | PASS | "If you can only measure four metrics of your user-facing system, focus on these four." |
| 117 | How it works | Errors are the rate of failing requests | S7 | PASS | "The rate of requests that fail, either explicitly" |
| 118 | How it works | Distinguish latency of successes and failures | S7 | PASS | "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| 119 | How it works | Loki: logs, push not pull | S31 | PASS | "Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 120 | How it works | Labels organize logs into streams | S32 | PASS | "They allow Loki to organize and group together log messages into log streams." |
| 121 | How it works | `service_name` used directly if present | S32 | PASS | "If a service_name label is already present on the stream, Loki uses it directly." |
| 122 | How it works | Otherwise first non-empty from a list | S32 | PASS | "Loki looks for the first non-empty value from the following labels, in orde" |
| 123 | How it works | Else `unknown_service` | S32 | PASS | "If no label is found matching the list, a value of unknown_service is applied." |
| 124 | How it works | Use labels for regions, clusters, etc. | S33 | PASS | "Use labels for things like regions, clusters, servers, applications, namespaces, and environments." |
| 125 | How it works | Too many combinations, too many streams | S33 | PASS | "Too many label value combinations leads to too many streams." |
| 126 | How it works | Penalties: large index, small chunks | S33 | PASS | "a large index and small chunks in the store, which in turn can actually reduce performance." |
| 127 | How it works | Add a label only when needed | S33 | PASS | "don’t add a label for something until you know you need it!" |
| 128 | How it works | LogQL has a stream selector | S34 | PASS | "All LogQL queries contain a log stream selector." |
| 129 | How it works | Optional pipeline | S34 | PASS | "the log stream selector can be followed by a log pipeline." |
| 130 | How it works | Pipeline is chained stage expressions | S34 | PASS | "A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams." |
| 131 | How it works | Selector is comma-separated key-value pairs | S34 | PASS | "specified by one or more comma-separated key-value pairs." |
| 132 | How it works | Four matching operators | S34 | PASS | "=: exactly equal", "!=: not equal", "=~: regex matches", "!~: regex does not match" |
| 133 | How it works | Line filter is a distributed grep | S34 | PASS | "The line filter expression does a distributed grep" |
| 134 | How it works | Discards non-matching, case-sensitive | S34 | PASS | "discarding those lines that do not match the case-sensitive expression." |
| 135 | How it works | Label filter uses original and extracted labels | S34 | PASS | "Label filter expression allows filtering log line using their original and extracted labels." |
| 136 | How it works | Metric queries extend log queries | S35 | PASS | "Metric queries extend log queries by applying a function to log query results." |
| 137 | How it works | `count_over_time` | S35 | PASS | "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 138 | How it works | Push timestamp must be a string, else 400 | S36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 139 | How it works | `query_range` queries a range | S36 | PASS | "/loki/api/v1/query_range is used to do a query over a range of time." |
| 140 | How it works | `limit` max entries, default 100 | S36 | PASS | "limit: The max number of entries to return. It defaults to 100." |
| 141 | How it works | `start` defaults to one hour ago | S36 | PASS | "Defaults to one hour ago." |
| 142 | How it works | Query endpoints return statistics | S36 | PASS | "return a set of statistics about the query execution." |
| 143 | How it works | `/ready` returns 200 | S36 | PASS | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 144 | How it works | `labels` endpoint | S36 | PASS | "/loki/api/v1/labels retrieves the list of known labels within a given time span." |
| 145 | How it works | Context propagation correlates signals | S3 | PASS | "metrics, and logs) can be correlated" |
| 146 | How it works | Propagation moves context | S3 | PASS | "Propagation is the mechanism that moves context between services and processes." |
| 147 | How it works | Handled by libraries, transparent | S3 | PASS | "Propagation is usually handled by instrumentation libraries and is transparent" |
| 148 | How it works | OTel text-based propagation with W3C headers | S4 | PASS | "OpenTelemetry provides a text-based approach to propagate context to remote services using the W3C Trace Context HTTP headers." |
| 149 | How it works | `traceparent` identifies the incoming request | S6 | PASS | "The traceparent HTTP header field identifies the incoming request in a tracing system. It has four fields:" |
| 150 | How it works | Four fields | S6 | PASS | `version-format = trace-id "-" parent-id "-" trace-flags` (plus "It has four fields:") |
| 151 | How it works | trace-id 16 bytes, all zeroes forbidden | S6 | PASS | "trace-id = 32HEXDIGLC ; 16 bytes array identifier. All zeroes forbidden" |
| 152 | How it works | parent-id 8 bytes, all zeroes forbidden | S6 | PASS | "parent-id = 16HEXDIGLC ; 8 bytes array identifier. All zeroes forbidden" |
| 153 | How it works | Lowest flag bit means caller may have recorded | S6 | PASS | "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 154 | How it works | Flags are a bit field | S6 | PASS | "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 155 | How it works | Python sender injects | S4 | PASS | "First, on the sending service, inject the current context:" |
| 156 | How it works | Receiver extracts and sets | S4 | PASS | "On the receiving service, extract context, for example, from parsed HTTP headers, and then set them as the current trace context." |
| 157 | How it works | Use instrumentation libraries | S4 | PASS | "Use instrumentation libraries to propagate context." |
| 158 | How it works | `ConsoleSpanExporter` is in `opentelemetry-sdk` | S5 | PASS | "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| 159 | How it works | Use promtool to test rules | S16 | PASS | "You can use promtool to test your rules." |
| 160 | How it works | `promtool check config` | S26 | PASS | "Check if the config files are valid or not." |
| 161 | How it works | `promtool check rules` | S26 | PASS | "Check if the rule files are valid or not." |
| 162 | How it works | `promtool test rules` | S26 | PASS | "promtool test rules Unit tests for rules." |
| 163 | How it works | Test file lists rule files | S16 | PASS | "This is a list of rule files to consider for testing." |
| 164 | How it works | Expanding notation | S16 | PASS | "This uses expanding notation." |
| 165 | How it works | `_` is a missing sample | S16 | PASS | "'_' represents a missing sample from scrape" |
| 166 | How it works | Alert test lists union of firing alerts | S16 | PASS | "you have to list the union of all the firing alerts for the alertname under a single <alert_test_case>." |
| 167 | How it works | Not firing: leave `exp_alerts` empty | S16 | PASS | "then you can mention the above fields and leave 'exp_alerts' empty." |
| 168 | How it works | PromQL test names expression, time, samples | S16 | PASS | "eval_time: <duration>" and "exp_samples:" appear in the promql test section |
| 169 | Try it | Run record: date, versions, folder layout (first paragraph) | none | N/A | Record of the page's own run. |
| 170 | Try it | Listen addresses, gRPC port, `instance_interface_names` attempt, advice to trust the network | none | N/A | Record of the run and the tutorial's own advice. |
| 171 | Try it | Choices no source gives; what was not run | none | N/A | The tutorial's own choices. |
| 172 | Try it | Prometheus docs: precompiled binaries | S30 | PASS | "We provide precompiled binaries for most official Prometheus components." |
| 173 | Try it | Docker one-liner | S30 | PASS | "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| 174 | Try it | Loki docs: install with Docker | S39 | PASS | "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 175 | Try it | Install log, checksums, `~/.local/bin`, venv and wheel | none | N/A | Record of the page's own run. |
| 176 | Try it | Step 1: app description and code | none | N/A | The tutorial's own app. |
| 177 | Try it | Step 1: `# HELP`/`# TYPE` are comments | S17 | PASS | "ignored unless the first token after # is either HELP or TYPE" |
| 178 | Try it | Step 1: `_total` convention for counters | S12 | PASS | "have a name ending on _total" |
| 179 | Try it | Step 1: gauge goes up and down | S10 | PASS | "arbitrarily go up and down" |
| 180 | Try it | Step 1: histogram buckets are cumulative counters | S10 | PASS | "cumulative counters for the observation buckets" |
| 181 | Try it | Step 2: targets from service discovery or static config | S8 | PASS | "targets are discovered via service discovery or static configuration" |
| 182 | Try it | Step 2: `rate()` first then `sum by (job)` | S13 | PASS | "always take a rate() first, then aggregate." |
| 183 | Try it | Step 2: comparison drops false elements | S40 | PASS | "comparison result is false get dropped from the result vector." |
| 184 | Try it | Step 2: `for` means pending until returned that long | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 185 | Try it | Step 2: `up` is 0 if scrape failed | S11 | PASS | "or 0 if the scrape failed." |
| 186 | Try it | Step 2: alerts carry `severity` label and `summary` annotation | S15 | PASS | "The labels clause allows specifying a set of additional labels"; "The annotations clause specifies a set of informational labels" |
| 187 | Try it | Step 2: promtool check commands | S26 | PASS | "Check if the config files are valid or not." / "Check if the rule files are valid or not." |
| 188 | Try it | Step 3: `promtool test rules` runs unit tests | S26 | PASS | "Unit tests for rules." |
| 189 | Try it | Step 3: test file lists rule files | S16 | PASS | "This is a list of rule files to consider for testing." |
| 190 | Try it | Step 3: docs read `a+bxn` as start at a, n more samples by b | S16 | PASS | "Read this as series starts at a, then n further samples incrementing by b." |
| 191 | Try it | Step 3: run results and exit statuses | none | N/A | Record of the page's own run; the page says no source describes it. |
| 192 | Try it | Step 4: `group_wait` meaning | S24 | PASS | "How long to wait before sending the first notification for a new group of" |
| 193 | Try it | Step 4: `repeat_interval` meaning | S24 | PASS | "How long to wait before repeating the last notification." |
| 194 | Try it | Step 4: alert enters tree at top-level route, then child nodes | S24 | PASS | "Every alert enters the routing tree at the configured top-level route" / "It then traverses the child nodes." |
| 195 | Try it | Step 4: no running server needed to validate a file with `amtool` | S24 | FAIL | Same limit as row 111: the source says "compatible with UTF-8 strict mode". Fix: add the UTF-8 strict mode limit, or cite only that `amtool check-config` was run. |
| 196 | Try it | Step 4: `config routes` commands not in any source | none | N/A | Tutorial reading, labelled as its own. |
| 197 | Try it | Step 5: `--config.file` | S29 | PASS | "Prometheus configuration file path." |
| 198 | Try it | Step 5: `--storage.tsdb.path` | S29 | PASS | "Base path for metrics storage." |
| 199 | Try it | Step 5: `--web.listen-address` | S29 | PASS | "Address to listen on for UI, API, and telemetry." |
| 200 | Try it | Step 5: empty `--cluster.listen-address=` stops peer listening | S25 | PASS | "setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 201 | Try it | Step 5: `/-/ready` returns 200 when ready | S28 | PASS | "This endpoint returns 200 when Prometheus is ready to serve traffic" |
| 202 | Try it | Step 5: API format is JSON | S27 | PASS | "The API response format is JSON." |
| 203 | Try it | Step 5: `/api/v1/query` is an instant query | S27 | PASS | "The following endpoint evaluates an instant query at a single point in time:" |
| 204 | Try it | Step 5: `up` 1 means healthy | S11 | PASS | "1 if the instance is healthy, i.e. reachable" |
| 205 | Try it | Step 5: quantile interpolation within bucket | S13 | PASS | "interpolates the quantile value within the bucket the quantile value falls into." |
| 206 | Try it | Step 5: uniform distribution for classic histograms | S13 | PASS | "For classic histograms, ... it assumes a uniform distribution of observations within the bucket" |
| 207 | Try it | Step 5: docs use `rate()` for the time window | S13 | PASS | "Use the rate() function to specify the time window" |
| 208 | Try it | Step 6: `/alerts` returns all active alerts | S27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 209 | Try it | Step 6: pending until returned for `for` time | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 210 | Try it | Step 6: README shows `amtool silence add alertname=Test_Alert` | S25 | PASS | "$ amtool silence add alertname=Test_Alert" |
| 211 | Try it | Step 6: Alertmanager page says silences are set in the web interface | S23 | PASS | "Silences are configured in the web interface of the Alertmanager." |
| 212 | Try it | Step 6: `up` 0 because scrape failed | S11 | PASS | "or 0 if the scrape failed." |
| 213 | Try it | Step 7: Loki config listed for filesystem; `/tmp/loki` on the page | S37 | PASS | "This is a complete configuration to deploy Loki backed by the filesystem." / "path_prefix: /tmp/loki" |
| 214 | Try it | Step 7: reference describes "Enable anonymous usage reporting" | S38 | PASS | "# Enable anonymous usage reporting." |
| 215 | Try it | Step 7: `/ready` returns 200 | S36 | PASS | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 216 | Try it | Step 7: timestamp as a string | S36 | PASS | "you must send the timestamp as a string and not a number" |
| 217 | Try it | Step 7: first non-empty value from a list | S32 | PASS | "Loki looks for the first non-empty value from the following labels, in orde" |
| 218 | Try it | Step 7: Loki can discover and add log levels | S38 | PASS | "Discover and add log levels during ingestion, if not present already." |
| 219 | Try it | Step 7: line filter is a distributed grep and discards | S34 | PASS | "The line filter expression does a distributed grep" / "discarding those lines that do not match" |
| 220 | Try it | Step 7: `limit` max entries, default 100 | S36 | PASS | "limit: The max number of entries to return. It defaults to 100." |
| 221 | Try it | Step 7: `count_over_time` counts entries | S35 | PASS | "counts the entries for each log stream within the given range." |
| 222 | Try it | Step 7: `logfmt` parses lines for more labels | S34 | PASS | "then parses each log line to extract more label" |
| 223 | Try it | Step 7: query endpoints return statistics | S36 | PASS | "return a set of statistics about the query execution." |
| 224 | Try it | Step 8: `ConsoleSpanExporter` is in `opentelemetry-sdk` | S5 | PASS | "are included in the opentelemetry-sdk package." |
| 225 | Try it | Step 8: context passed by hand as Python docs show | S4 | PASS | "inject the current context" / "extract context" |
| 226 | Try it | Step 8: same page says use instrumentation libraries | S4 | PASS | "Use instrumentation libraries to propagate context." |
| 227 | Try it | Step 8: header has four fields | S6 | PASS | "It has four fields:" |
| 228 | Try it | Step 8: right-most flag bit means caller may have recorded | S6 | PASS | "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 229 | Try it | Step 8: flags are a bit field, not a number | S6 | PASS | "you cannot interpret flags by decoding the hex value" |
| 230 | Try it | Step 8: service A span has no parent, so it is the root span | S1 | FAIL | S1 says only "The first span represents the root span. Each root span represents a request from start to finish." It does not say that a root span has no parent. Fix: say that the service A span is the first span, so it is the root span. |
| 231 | Try it | Step 8: no traceparent received, vendor creates new ids | S6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 232 | How a tester uses it | A counter only increases or resets on restart | S10 | PASS | "value can only increase or be reset to zero on restart" |
| 233 | How a tester uses it | `up` 1 or 0 | S11 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 234 | How a tester uses it | SRE counts HTTP 200 with wrong content as an implicit error | S7 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 235 | How a tester uses it | Test can expect no alert with empty `exp_alerts` | S16 | PASS | "leave 'exp_alerts' empty." |
| 236 | How a tester uses it | The routing tree decides where an alert goes | S24 | PASS | "If an alert does not match any children of a node ... " and the route block holds "receiver"; the source describes the tree and receivers, not this wording, so the support is thin. |
| 237 | How a tester uses it | Alert pending first, then firing, because of `for` | S14 | PASS | "Alerts are considered firing once they have been returned for this long." |
| 238 | How a tester uses it | `/api/v1/alerts` endpoint | S27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 239 | How a tester uses it | No high-cardinality labels such as user IDs | S18 | PASS | "Do not use labels to store dimensions with high cardinality" |
| 240 | How a tester uses it | Loki: too many combinations, too many streams | S33 | PASS | "Too many label value combinations leads to too many streams." |
| 241 | How a tester uses it | Label selects stream and line filter keeps lines | S34 | PASS | "The line filter expression does a distributed grep" |
| 242 | How a tester uses it | Context propagation correlates signals | S3 | PASS | "metrics, and logs) can be correlated" |
| 243 | Common mistakes | `rate` only with counters | S13 | PASS | "rate should only be used with counters" |
| 244 | Common mistakes | Gauge floats give nonsense, no complaint | S12 | PASS | "will most likely produce a nonsensical result, but the query will be processed without complains" |
| 245 | Common mistakes | Rate first, then aggregate | S13 | PASS | "always take a rate() first, then aggregate." |
| 246 | Common mistakes | Otherwise resets undetected | S13 | PASS | "Otherwise rate() cannot detect" |
| 247 | Common mistakes | Do not use a counter for a decreasing value | S10 | PASS | "Do not use a counter to expose a value that can decrease." |
| 248 | Common mistakes | Docs example: running processes, use a gauge | S10 | PASS | "do not use a counter for the number of currently running processes; instead use a gauge." |
| 249 | Common mistakes | Prometheus implements pre-calculated quantiles as summary | S20 | PASS | "Prometheus implements this approach in the form of a metric type called summary." |
| 250 | Common mistakes | Cannot recalculate or aggregate summary quantiles | S20 | PASS | "you cannot “recalculate” the quantiles later if you desire another time window or another percentile, and most importantly, you cannot aggregate quantiles" |
| 251 | Common mistakes | No unbounded label values | S18 | PASS | "Do not use labels to store dimensions with high cardinality" |
| 252 | Common mistakes | Loki penalties: large index, small chunks | S33 | PASS | "a large index and small chunks in the store" |
| 253 | Common mistakes | Not yet fired long enough is pending | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 254 | Common mistakes | Active silence means no notifications | S23 | PASS | "If they do, no notifications will be sent out for that alert." |
| 255 | Common mistakes | `up` says whether the scrape worked | S11 | PASS | "or 0 if the scrape failed." |
| 256 | Common mistakes | SRE counts HTTP 200 with wrong content as an error | S7 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 257 | Common mistakes | Distinguish success and failure latency | S7 | PASS | "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| 258 | Common mistakes | `check rules` and `test rules` are two jobs | S26 | PASS | "Check if the rule files are valid or not." / "Unit tests for rules." |
| 259 | Common mistakes | Absent series are hard to handle | S19 | PASS | "Time series that are not present until something happens are difficult" |
| 260 | Common mistakes | Default value such as 0 | S19 | PASS | "export a default value such as 0 for any time series you know may exist in advance." |
| 261 | Common mistakes | Push needs string timestamp, else 400 | S36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 262 | Common mistakes | Line filter is case-sensitive | S34 | PASS | "discarding those lines that do not match the case-sensitive expression." |
| 263 | Common mistakes | No header: new trace-id and parent-id | S6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 264 | Common mistakes | Flags are a bit field | S6 | PASS | "you cannot interpret flags by decoding the hex value" |
| 265 | Common mistakes | gRPC port open on all addresses (run record and advice) | none | N/A | Record of the run and the tutorial's own advice. |
| 266 | What a tester can check | Callout "Tutorial advice": 13 advice items | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page lacks. |
| 267 | Key words | Observability | none | PASS | Technical panel: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 268 | Key words | Instrumentation | none | PASS | Technical panel: "your application must be properly instrumented" |
| 269 | Key words | Telemetry | none | PASS | Technical panel: "Telemetry refers to data emitted from a system and its behavior" |
| 270 | Key words | Metric | none | PASS | Technical panel: "Metrics are aggregations over a period of time of numeric data about your infrastructure or application" |
| 271 | Key words | Log | none | PASS | Technical panel: "A log is a timestamped message emitted by services or other components" |
| 272 | Key words | Span | none | PASS | Technical panel: "A span represents a single unit of work or operation" |
| 273 | Key words | Trace | none | PASS | Technical panel: "A trace is made of one or more spans" |
| 274 | Key words | Time series | none | PASS | Technical panel: "Every time series is uniquely identified by its metric name and optional key-value pairs called labels" |
| 275 | Key words | Label | none | PASS | Technical panel: "optional key-value pairs called labels" |
| 276 | Key words | Instance | none | PASS | Technical panel: "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 277 | Key words | Job | none | PASS | Technical panel: "A collection of instances with the same purpose is called a job" |
| 278 | Key words | up | none | PASS | Technical panel: "Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed" |
| 279 | Key words | Counter | none | PASS | Technical panel: "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart" |
| 280 | Key words | Gauge | none | PASS | Technical panel: "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down" |
| 281 | Key words | Histogram | none | PASS | Technical panel: "A histogram records observations by counting them in configurable buckets" |
| 282 | Key words | Summary | none | PASS | Technical panel: "Similar to a histogram, a summary samples observations" |
| 283 | Key words | PromQL | none | PASS | Technical panel: "Prometheus provides a functional query language called PromQL that lets the user select and aggregate time series data in real time" |
| 284 | Key words | Instant vector | none | PASS | Technical panel: "An instant vector is a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 285 | Key words | Range vector | none | PASS | Technical panel: "A range vector is a set of time series containing a range of data points over time for each time series" |
| 286 | Key words | Recording rule | none | PASS | Technical panel: "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series" |
| 287 | Key words | Pending | none | PASS | Technical panel: "Alerts which have not yet fired for long enough are considered pending" |
| 288 | Key words | Firing | none | PASS | Technical panel: "Alerts are considered firing once they have been returned for this long" |
| 289 | Key words | Alertmanager | none | PASS | Technical panel: "The Alertmanager takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 290 | Key words | Grouping | none | PASS | Technical panel: "Grouping categorizes alerts of similar nature into a single notification" |
| 291 | Key words | Inhibition | none | PASS | Technical panel: "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing" |
| 292 | Key words | Silence | none | PASS | Technical panel: "Silences are a straightforward way to simply mute alerts for a given time" |
| 293 | Key words | Routing tree | none | PASS | Technical panel: "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 294 | Key words | promtool | none | PASS | Technical panel: "You can use promtool to test your rules" |
| 295 | Key words | amtool | none | PASS | Technical panel: "The `amtool` command is a cli tool for interacting with the Alertmanager API" |
| 296 | Key words | Loki | none | PASS | Technical panel: "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus" |
| 297 | Key words | Log stream | none | PASS | Technical panel: "Labels allow Loki to organize and group together log messages into log streams" |
| 298 | Key words | LogQL | none | PASS | Technical panel: "All LogQL queries contain a log stream selector" |
| 299 | Key words | Context propagation | none | PASS | Technical panel: "Propagation is the mechanism that moves context between services and processes" |
| 300 | Key words | traceparent | none | PASS | Technical panel: "The `traceparent` HTTP header field identifies the incoming request in a tracing system" |
| 301 | Key words | Golden signals | none | PASS | Technical panel: "the four golden signals of monitoring are latency, traffic, errors, and saturation" |
| 302 | Key words | Cardinality | none | PASS | Technical panel: "Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values" |

Open FAILs after round 6: 3

Changed after this round: Rows 111 and 195 (`amtool`): the source limits the check without a running server to the check of UTF-8 strict mode. The page now says that `amtool` can validate that a file is compatible with UTF-8 strict mode, and that this check needs no running server, and step 4 says that no server was running yet and that the configuration page shows `amtool check-config` for that check. Row 230 (step 8): S1 does not say that a root span has no parent. The page now cites the Traces page of OpenTelemetry (S41, added at the end of the list), which says that a root span has a `trace_id` but no `parent_id`. The writer also re-read the page against its quotes after the round (`limits.py`) and found two more: the sentence on a test of a rule that does not fire had dropped "can", and a sentence said that the routing tree "decides where an alert goes", which its quote does not say.

## Round 7 (2026-11-19)

# Fact check: devops / monitoring-observability (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Observability, its three signals, Prometheus, Alertmanager, Loki, OpenTelemetry trace context, and a practice run on your own machine | none | N/A | It describes the page itself. |
| 2 | Lede | Covers the three signals, Prometheus and its rules, Alertmanager, Loki, and the trace context that OpenTelemetry passes between services. The practice run needs no cloud account and no Docker. Links to other pages. | none | N/A | It describes the page and its own practice run. The links are not facts. |
| 3 | What it is | Observability lets you understand a system from the outside by asking questions without knowing its inner workings | S1 | PASS | S1: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings." |
| 4 | What it is | Your application must be properly instrumented | S1 | PASS | S1: "To ask those questions about your system, your application must be properly instrumented." |
| 5 | What it is | The application code must emit signals such as traces, metrics, and logs | S1 | PASS | S1: "the application code must emit signals such as traces, metrics, and logs" |
| 6 | What it is | Telemetry refers to data emitted from a system and its behavior | S1 | PASS | S1: "Telemetry refers to data emitted from a system and its behavior." |
| 7 | What it is | OpenTelemetry is the mechanism by which application code is instrumented | S1 | PASS | S1: "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable." |
| 8 | What it is | The SRE book describes monitoring as collecting, processing, aggregating, and displaying real-time quantitative data (query counts, error counts, processing times, server lifetimes) | S7 | PASS | S7: "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 9 | What it is | White-box monitoring is based on metrics exposed by the internals of the system | S7 | PASS | S7: "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring is testing externally visible behavior as a user would see it | S7 | PASS | S7: "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics are aggregations over a period of time of numeric data | S1 | PASS | S1: "Metrics are aggregations over a period of time of numeric data about your" |
| 12 | What it is | A log is a timestamped message emitted by services or other components | S1 | PASS | S1: "A log is a timestamped message emitted by services or other components." |
| 13 | What it is | A span represents a single unit of work or operation | S1 | PASS | S1: "A span represents a single unit of work or operation." |
| 14 | What it is | A trace is made of one or more spans | S1 | PASS | S1: "A trace is made of one or more spans." |
| 15 | What it is | The first span represents the root span | S1 | PASS | S1: "The first span represents the root span." |
| 16 | What it is | A distributed trace records the path taken by a single request through multiple services | S1 | PASS | S1: "records the path taken by a single request (made by an application or end user) as it propagates through multiple services in an architecture" |
| 17 | What it is | Prometheus is an open-source systems monitoring and alerting toolkit | S8 | PASS | S8: "is an open-source systems monitoring and alerting toolkit" |
| 18 | What it is | It collects and stores its metrics as time series data | S8 | PASS | S8: "Prometheus collects and stores its metrics as time series data" |
| 19 | What it is | The Alertmanager handles alerts sent by client applications such as the Prometheus server | S23 | PASS | S23: "handles alerts sent by client applications such as the Prometheus server." |
| 20 | What it is | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S31 | PASS | S31: "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 21 | What it is | Unlike other logging systems, Loki does not index the contents of the logs | S31 | PASS | S31: "Unlike other logging systems, Loki does not index the contents of the logs" |
| 22 | What it is | OpenTelemetry is open source, and vendor- and tool-agnostic | S2 | PASS | S2: "Open source, as well as vendor- and tool-agnostic" |
| 23 | What it is | It is not an observability backend itself | S2 | PASS | S2: "OpenTelemetry is not an observability backend itself." |
| 24 | How it works | The Prometheus ecosystem consists of multiple components, many optional | S8 | PASS | S8: "The Prometheus ecosystem consists of multiple components, many of which are optional" |
| 25 | How it works | The main Prometheus server scrapes and stores time series data | S8 | PASS | S8: "the main Prometheus server which scrapes and stores time series data" |
| 26 | How it works | Client libraries instrument application code | S8 | PASS | S8: "client libraries for instrumenting application code" |
| 27 | How it works | An alertmanager handles alerts | S8 | PASS | S8: "an alertmanager to handle alerts" |
| 28 | How it works | Prometheus scrapes metrics from instrumented jobs | S8 | PASS | S8: "Prometheus scrapes metrics from instrumented jobs" |
| 29 | How it works | It stores all scraped samples locally and runs rules to aggregate and record new time series or generate alerts | S8 | PASS | S8: "It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts." |
| 30 | How it works | Grafana or other API consumers can be used to visualize the collected data | S8 | PASS | S8: "Grafana or other API consumers can be used to visualize the collected data." |
| 31 | How it works | Time series collection happens via a pull model over HTTP | S8 | PASS | S8: "time series collection happens via a pull model over HTTP" |
| 32 | How it works | Prometheus stores its data as time series | S8 | PASS | S8: "Prometheus collects and stores its metrics as time series data" |
| 33 | How it works | Every time series is uniquely identified by metric name and optional key-value pairs called labels | S9 | PASS | S9: "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| 34 | How it works | Prometheus may generate temporary derived time series as the result of queries | S9 | PASS | S9: "Prometheus may generate temporary derived time series as the result of queries." |
| 35 | How it works | An endpoint you can scrape is an instance, usually a single process | S11 | PASS | S11: "an endpoint you can scrape is called an instance, usually corresponding to a single process." |
| 36 | How it works | A collection of instances with the same purpose is a job | S11 | PASS | S11: "A collection of instances with the same purpose ... is called a job." |
| 37 | How it works | Prometheus attaches some labels automatically to scraped series | S11 | PASS | S11: "it attaches some labels automatically to the scraped time series" |
| 38 | How it works | The `job` label holds the configured job name | S11 | PASS | S11: "job: The configured job name that the target belongs to." |
| 39 | How it works | The `instance` label holds the host and port part of the target URL | S11 | PASS | S11: "instance: The <host>:<port> part of the target's URL that was scraped." |
| 40 | How it works | For each instance scrape, Prometheus stores a sample in the `up` series | S11 | PASS | S11: "For each instance scrape, Prometheus stores a sample in the following time series: up{...}" |
| 41 | How it works | `up` is 1 if healthy (reachable), 0 if the scrape failed | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 42 | How it works | `up` is useful for instance availability monitoring | S11 | PASS | S11: "The up time series is useful for instance availability monitoring." |
| 43 | How it works | The instrumentation libraries offer four core metric types | S10 | PASS | S10: "The Prometheus instrumentation libraries offer four core metric types." |
| 44 | How it works | A counter is cumulative, monotonically increasing, can only increase or reset to zero on restart | S10 | PASS | S10: "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart." |
| 45 | How it works | Do not use a counter for a value that can decrease | S10 | PASS | S10: "Do not use a counter to expose a value that can decrease." |
| 46 | How it works | A gauge is a single numerical value that can arbitrarily go up and down | S10 | PASS | S10: "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down." |
| 47 | How it works | A histogram records observations by counting them in configurable buckets | S10 | PASS | S10: "A histogram records observations ... by counting them in configurable buckets." |
| 48 | How it works | It also provides a sum of all observed values | S10 | PASS | S10: "It also provides a sum of all observed values." |
| 49 | How it works | A classic histogram consists of multiple time series of simple float samples | S10 | PASS | S10: "A classic histogram, however, consists of multiple time series of simple float samples." |
| 50 | How it works | They are the cumulative bucket counters, the sum, and the count | S10 | PASS | S10: "cumulative counters for the observation buckets ... the total sum of all observed values ... the count of events that have been observed" |
| 51 | How it works | Similar to a histogram, a summary samples observations | S10 | PASS | S10: "Similar to a histogram, a summary samples observations" |
| 52 | How it works | Summaries calculate streaming φ-quantiles in the instrumented program and expose them directly | S20 | PASS | S20: "summaries calculate streaming φ-quantiles within the instrumented program and expose them directly" |
| 53 | How it works | Histograms expose bucketed counts; quantiles are calculated on the server with `histogram_quantile()` | S20 | PASS | S20: "histograms expose bucketed observation counts and the calculation of quantiles from the buckets of a histogram happens on the Prometheus server using the histogram_quantile() function." |
| 54 | How it works | For a summary, other φ-quantiles and sliding windows cannot be calculated later | S20 | PASS | S20: "Other φ-quantiles and sliding windows cannot be calculated later." |
| 55 | How it works | Metric names should have a single-word application prefix | S18 | PASS | S18: "SHOULD have a (single-word) application prefix" |
| 56 | How it works | They should have a suffix that describes the unit, in plural form | S18 | PASS | S18: "SHOULD have a suffix describing the unit, in plural form." |
| 57 | How it works | Every unique label combination is a new time series, which can dramatically increase data stored | S18 | PASS | S18: "every unique combination of key-value label pairs represents a new time series, which can dramatically increase the amount of data stored." |
| 58 | How it works | Do not use labels for high-cardinality dimensions such as user IDs, email addresses | S18 | PASS | S18: "Do not use labels to store dimensions with high cardinality (many different label values), such as user IDs, email addresses, or other unbounded sets of values." |
| 59 | How it works | Services can be broken into three types: online-serving, offline-processing, batch jobs | S19 | PASS | S19: "services can generally be broken down into three types: online-serving, offline-processing, and batch jobs." |
| 60 | How it works | Online-serving systems should be monitored on both client and server side | S19 | PASS | S19: "Online-serving systems should be monitored on both the client and server side." |
| 61 | How it works | If the two sides see different behaviors, that is very useful for debugging | S19 | PASS | S19: "If the two sides see different behaviors, that is very useful information for debugging." |
| 62 | How it works | Time series not present until something happens are difficult to deal with | S19 | PASS | S19: "Time series that are not present until something happens are difficult to deal with" |
| 63 | How it works | Export a default value such as 0 for any time series you know may exist in advance | S19 | PASS | S19: "export a default value such as 0 for any time series you know may exist in advance." |
| 64 | How it works | A Prometheus target exposes its metrics as text. | none | FAIL | The sentence has no cite and no cite from the next sentence covers it. S17 line 117 says "a text format, by default". Fix: add `<Cite n={17} />` and say "by default". |
| 65 | How it works | Lines with # as the first non-whitespace character are comments | S17 | PASS | S17: "Lines with a # as the first non-whitespace character are comments." |
| 66 | How it works | They are ignored unless the first token after # is HELP or TYPE | S17 | PASS | S17: "They are ignored unless the first token after # is either HELP or TYPE." |
| 67 | How it works | If the token is TYPE, exactly two more tokens are expected | S17 | PASS | S17: "If the token is TYPE, exactly two more tokens are expected." |
| 68 | How it works | First is the metric name; second is counter, gauge, histogram, summary, or untyped | S17 | PASS | S17: "The first is the metric name, and the second is either counter, gauge, histogram, summary, or untyped" |
| 69 | How it works | The remaining lines describe samples, one per line | S17 | PASS | S17: "The remaining lines describe samples (one per line)" |
| 70 | How it works | PromQL is a functional query language to select and aggregate time series data in real time | S12 | PASS | S12: "Prometheus provides a functional query language called PromQL ... that lets the user select and aggregate time series data in real time." |
| 71 | How it works | A query can be an instant query or a range query at equally-spaced steps | S12 | PASS | S12: "it can be an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time." |
| 72 | How it works | An instant vector is a set of series with a single sample each, all sharing the same timestamp | S12 | PASS | S12: "Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 73 | How it works | A range vector is a set of series with a range of data points over time | S12 | PASS | S12: "Range vector - a set of time series containing a range of data points over time for each time series" |
| 74 | How it works | Instant vector selectors select a set of series and one sample value each at a given timestamp | S12 | PASS | S12: "Instant vector selectors allow the selection of a set of time series and a single sample value for each at a given timestamp (point in time)." |
| 75 | How it works | You can filter with a comma-separated list of label matchers in curly braces | S12 | PASS | S12: "appending a comma-separated list of label matchers in curly braces ({})." |
| 76 | How it works | By convention, series with float counters have a name ending in `_total` | S12 | PASS | S12: "By convention, time series containing float counters have a name ending on _total" |
| 77 | How it works | Between an instant vector and a scalar, a comparison is applied to every sample; false elements are dropped | S40 | PASS | S40: "operators are applied to the value of every data sample in the vector, and vector elements between which the comparison result is false get dropped from the result vector." |
| 78 | How it works | `rate(v range-vector)` gives the per-second average rate of increase | S13 | PASS | S13: "rate(v range-vector) calculates the per-second average rate of increase of the time series in the range vector." |
| 79 | How it works | Breaks in monotonicity, such as counter resets, are automatically adjusted for | S13 | PASS | S13: "Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for." |
| 80 | How it works | `rate` should only be used with counters | S13 | PASS | S13: "rate should only be used with counters (for both floats and histograms)." |
| 81 | How it works | Applying rate to gauge floats most likely gives a nonsensical result, but the query is processed without complaints | S12 | PASS | S12: "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains." |
| 82 | How it works | With an aggregation operator such as `sum()`, take `rate()` first, then aggregate | S13 | PASS | S13: "when combining rate() with an aggregation operator (e.g. sum()) ... always take a rate() first, then aggregate." |
| 83 | How it works | Otherwise `rate()` cannot detect counter resets when your target restarts | S13 | PASS | S13: "Otherwise rate() cannot detect counter resets when your target restarts." |
| 84 | How it works | `histogram_quantile` calculates the φ-quantile from a classic or native histogram | S13 | PASS | S13: "histogram_quantile(φ scalar, b instant-vector) calculates the φ-quantile (0 ≤ φ ≤ 1) from a classic ... a native histogram." |
| 85 | How it works | The page says to use `rate()` to specify the time window for the quantile | S13 | PASS | S13: "Use the rate() function to specify the time window for the quantile calculation." |
| 86 | How it works | For classic histograms the `le` label has to be in the `by` clause | S13 | PASS | S13: "Since the le label is required by histogram_quantile() to deal with classic histograms, it has to be included in the by clause." |
| 87 | How it works | Recording rules precompute expressions and save results as a new set of time series | S14 | PASS | S14: "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series." |
| 88 | How it works | Recording and alerting rules exist in a rule group | S14 | PASS | S14: "Recording and alerting rules exist in a rule group." |
| 89 | How it works | Rules in a group run sequentially at a regular interval, same evaluation time | S14 | PASS | S14: "Rules within a group are run sequentially at a regular interval, with the same evaluation time." |
| 90 | How it works | Names of recording rules must be valid metric names | S14 | PASS | S14: "The names of recording rules must be valid metric names." |
| 91 | How it works | For an alerting rule, all resultant series become pending or firing alerts | S14 | PASS | S14: "all resultant time series become pending/firing alerts." |
| 92 | How it works | Alerts are firing once returned for this long | S14 | PASS | S14: "Alerts are considered firing once they have been returned for this long." |
| 93 | How it works | Alerts not yet fired for long enough are pending | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 94 | How it works | The labels clause sets additional labels attached to the alert | S15 | PASS | S15: "The labels clause allows specifying a set of additional labels to be attached to the alert" |
| 95 | How it works | The annotations clause stores longer information such as descriptions or runbook links | S15 | PASS | S15: "The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| 96 | How it works | Prometheus stores synthetic series `ALERTS` for pending and firing alerts | S15 | PASS | S15: "For pending and firing alerts, Prometheus also stores synthetic time series of the form ALERTS{...}" |
| 97 | How it works | Alerting rules find what is broken now, but are not a fully-fledged notification solution | S15 | PASS | S15: "Prometheus's alerting rules are good at figuring what is broken right now, but they are not a fully-fledged notification solution." |
| 98 | How it works | Alerting with Prometheus is separated into two parts | S22 | PASS | S22: "Alerting with Prometheus is separated into two parts." |
| 99 | How it works | Alerting rules in Prometheus servers send alerts to an Alertmanager | S22 | PASS | S22: "Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| 100 | How it works | Alertmanager deduplicates, groups, and routes to the correct receiver integration | S23 | PASS | S23: "It takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 101 | How it works | Grouping categorizes alerts of similar nature into a single notification | S23 | PASS | S23: "Grouping categorizes alerts of similar nature into a single notification." |
| 102 | How it works | Inhibition suppresses notifications for some alerts if other alerts are firing | S23 | PASS | S23: "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing." |
| 103 | How it works | Silences are a way to mute alerts for a given time | S23 | PASS | S23: "Silences are a straightforward way to simply mute alerts for a given time." |
| 104 | How it works | A silence is configured based on matchers, like the routing tree | S23 | PASS | S23: "A silence is configured based on matchers, just like the routing tree." |
| 105 | How it works | Every alert enters the routing tree at the top-level route, which must match all alerts | S24 | PASS | S24: "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 106 | How it works | It then traverses the child nodes | S24 | PASS | S24: "It then traverses the child nodes." |
| 107 | How it works | If `continue` is false, it stops after the first matching child | S24 | PASS | S24: "If continue is set to false, it stops after the first matching child." |
| 108 | How it works | If no child matches, the alert is handled by the current node's parameters | S24 | PASS | S24: "If an alert does not match any children of a node ..., the alert is handled based on the configuration parameters of the" current node |
| 109 | How it works | Most optional route parameters are inherited from the parent if not set | S24 | PASS | S24: "optional configuration parameters (receiver, group_by, group_wait, group_interval, repeat_interval) are inherited from its parent node if not set." |
| 110 | How it works | `amtool` is a cli tool for interacting with the Alertmanager API | S25 | PASS | S25: "amtool is a cli tool for interacting with the Alertmanager API." |
| 111 | How it works | It is bundled with all releases of Alertmanager | S25 | PASS | S25: "It is bundled with all releases of Alertmanager." |
| 112 | How it works | You can use `amtool` to validate a config for UTF-8 strict mode before enabling it | S24 | PASS | S24: "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server." |
| 113 | How it works | For that check you do not need a running Alertmanager server | S24 | PASS | S24: "You do not need a running Alertmanager server to do this." |
| 114 | How it works | Aim for as few alerts as possible, alerting on symptoms tied to end-user pain | S21 | PASS | S21: "Aim to have as few alerts as possible, by alerting on symptoms that are associated with end-user pain rather than trying to catch every possible way that pain could be caused." |
| 115 | How it works | Keep alerting simple, alert on symptoms, have good consoles, avoid pages with nothing to do | S21 | PASS | S21: "To summarize: keep alerting simple, alert on symptoms, have good consoles to allow pinpointing causes, and avoid having pages where there is nothing to do." |
| 116 | How it works | For error rates, page on user-visible errors | S21 | PASS | S21: "For error rates, page on user-visible errors." |
| 117 | How it works | The four golden signals are latency, traffic, errors, saturation | S7 | PASS | S7: "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 118 | How it works | If you can only measure four metrics of a user-facing system, focus on these | S7 | PASS | S7: "If you can only measure four metrics of your user-facing system, focus on these four." |
| 119 | How it works | Errors are the rate of requests that fail, explicitly, implicitly, or by policy | S7 | PASS | S7: "The rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (...), or by policy" |
| 120 | How it works | Distinguish latency of successful and failed requests | S7 | PASS | S7: "It's important to distinguish between the latency of successful requests and the latency of failed requests." |
| 121 | How it works | Loki focuses on logs instead of metrics and collects logs via push, not pull | S31 | PASS | S31: "Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 122 | How it works | Labels let Loki organize and group log messages into log streams | S32 | PASS | S32: "They allow Loki to organize and group together log messages into log streams." |
| 123 | How it works | If a `service_name` label is on the stream, Loki uses it directly | S32 | PASS | S32: "If a service_name label is already present on the stream, Loki uses it directly." |
| 124 | How it works | Otherwise Loki uses the first non-empty value from a list of labels, in order | S32 | PASS | S32: "Otherwise, Loki looks for the first non-empty value from the following labels, in order" |
| 125 | How it works | If no label matches, `unknown_service` is applied | S32 | PASS | S32: "If no label is found matching the list, a value of unknown_service is applied." |
| 126 | How it works | Use labels for regions, clusters, servers, applications, namespaces, environments | S33 | PASS | S33: "Use labels for things like regions, clusters, servers, applications, namespaces, and environments." |
| 127 | How it works | Too many label value combinations leads to too many streams | S33 | PASS | S33: "Too many label value combinations leads to too many streams." |
| 128 | How it works | The penalties are a large index and small chunks, which can reduce performance | S33 | PASS | S33: "a large index and small chunks in the store, which in turn can actually reduce performance." |
| 129 | How it works | Do not add a label until you know you need it | S33 | PASS | S33: "don’t add a label for something until you know you need it!" |
| 130 | How it works | All LogQL queries contain a log stream selector | S34 | PASS | S34: "All LogQL queries contain a log stream selector." |
| 131 | How it works | The selector can be followed by a log pipeline | S34 | PASS | S34: "Optionally, the log stream selector can be followed by a log pipeline." |
| 132 | How it works | A log pipeline is a set of chained stage expressions applied to selected streams | S34 | PASS | S34: "A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams." |
| 133 | How it works | The selector is one or more comma-separated key-value pairs | S34 | PASS | S34: "The log stream selector is specified by one or more comma-separated key-value pairs." |
| 134 | How it works | Label matching operators are `=`, `!=`, `=~`, `!~` with the stated meanings | S34 | PASS | S34: "=: exactly equal / !=: not equal / =~: regex matches / !~: regex does not match" |
| 135 | How it works | The line filter does a distributed grep over the aggregated logs of matching streams | S34 | PASS | S34: "The line filter expression does a distributed grep over the aggregated logs from the matching log streams." |
| 136 | How it works | It searches line contents, discarding lines that do not match the case-sensitive expression | S34 | PASS | S34: "It searches the contents of the log line, discarding those lines that do not match the case-sensitive expression." |
| 137 | How it works | A label filter expression filters lines by original and extracted labels | S34 | PASS | S34: "Label filter expression allows filtering log line using their original and extracted labels." |
| 138 | How it works | Metric queries extend log queries by applying a function to the results | S35 | PASS | S35: "Metric queries extend log queries by applying a function to log query results." |
| 139 | How it works | `count_over_time(log-range)` counts entries per log stream in the range | S35 | PASS | S35: "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 140 | How it works | On push, the timestamp must be a string, not a number, or the endpoint returns 400 | S36 | PASS | S36: "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 141 | How it works | `/loki/api/v1/query_range` queries over a range of time | S36 | PASS | S36: "/loki/api/v1/query_range is used to do a query over a range of time." |
| 142 | How it works | Its `limit` is the max number of entries, default 100 | S36 | PASS | S36: "limit: The max number of entries to return. It defaults to 100." |
| 143 | How it works | Its `start` defaults to one hour ago | S36 | PASS | S36: "start: ... Defaults to one hour ago." |
| 144 | How it works | Query endpoints return a set of statistics about the query execution | S36 | PASS | S36: "Query endpoints such as /loki/api/v1/query and /loki/api/v1/query_range return a set of statistics about the query execution." |
| 145 | How it works | `/ready` returns HTTP 200 when Loki is ready to accept traffic | S36 | PASS | S36: "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 146 | How it works | `/loki/api/v1/labels` retrieves known labels within a time span | S36 | PASS | S36: "/loki/api/v1/labels retrieves the list of known labels within a given time span." |
| 147 | How it works | With context propagation, signals can be correlated wherever generated | S3 | PASS | S3: "With context propagation, signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated." |
| 148 | How it works | Propagation moves context between services and processes | S3 | PASS | S3: "Propagation is the mechanism that moves context between services and processes." |
| 149 | How it works | It is usually handled by instrumentation libraries and is transparent to the user | S3 | PASS | S3: "Propagation is usually handled by instrumentation libraries and is transparent to the user." |
| 150 | How it works | OpenTelemetry has a text-based way to propagate context using W3C Trace Context headers | S4 | PASS | S4: "OpenTelemetry provides a text-based approach to propagate context to remote" (services using the W3C Trace Context HTTP headers) |
| 151 | How it works | `traceparent` identifies the incoming request in a tracing system | S6 | PASS | S6: "The traceparent HTTP header field identifies the incoming request in a tracing system." |
| 152 | How it works | It has four fields: version, trace-id, parent-id, trace-flags | S6 | PASS | S6: "It has four fields: version trace-id parent-id trace-flags" |
| 153 | How it works | The trace-id is a 16 byte array identifier; all zeroes forbidden | S6 | PASS | S6: "trace-id = 32HEXDIGLC ; 16 bytes array identifier. All zeroes forbidden" |
| 154 | How it works | The parent-id is an 8 byte array identifier; all zeroes forbidden | S6 | PASS | S6: "parent-id = 16HEXDIGLC ; 8 bytes array identifier. All zeroes forbidden" |
| 155 | How it works | When the least significant bit of flags is set, the caller may have recorded trace data | S6 | PASS | S6: "When set, the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 156 | How it works | Flags are a bit field; you cannot read them by decoding the hex to a number | S6 | PASS | S6: "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 157 | How it works | In Python, the sending service injects the current context | S4 | PASS | S4: "on the sending service, inject the current context" |
| 158 | How it works | The receiving service extracts context and sets it as the current trace context | S4 | PASS | S4: "On the receiving service, extract context, for example, from parsed HTTP headers, and then set them as the current trace context." |
| 159 | How it works | The page says to use instrumentation libraries to propagate context | S4 | PASS | S4: "Use instrumentation libraries to propagate context." |
| 160 | How it works | `ConsoleSpanExporter` is in the `opentelemetry-sdk` package | S5 | PASS | S5: "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| 161 | How it works | You can use promtool to test your rules | S16 | PASS | S16: "You can use promtool to test your rules." |
| 162 | How it works | `promtool check config` checks if config files are valid | S26 | PASS | S26: "promtool check config / Check if the config files are valid or not." |
| 163 | How it works | `promtool check rules` checks if rule files are valid | S26 | PASS | S26: "promtool check rules / Check if the rule files are valid or not." |
| 164 | How it works | `promtool test rules` runs unit tests for rules | S26 | PASS | S26: "promtool test rules / Unit tests for rules." |
| 165 | How it works | A test file has a list of rule files to consider | S16 | PASS | S16: "This is a list of rule files to consider for testing." |
| 166 | How it works | The input series use an expanding notation | S16 | PASS | S16: "This uses expanding notation." |
| 167 | How it works | `_` represents a missing sample from scrape | S16 | PASS | S16: "'_' represents a missing sample from scrape" |
| 168 | How it works | An alert test lists the union of all firing alerts for the alertname in one test case | S16 | PASS | S16: "you have to list the union of all the firing alerts for the alertname under a single <alert_test_case>." |
| 169 | How it works | To test an alert is not firing, leave `exp_alerts` empty | S16 | PASS | S16: "you can mention the above fields and leave 'exp_alerts' empty." |
| 170 | How it works | A PromQL expression test names the expression, evaluation time, expected samples | S16 | PASS | S16: "promql_expr_test ... eval_time: <duration> ... Expected samples at the given evaluation time. exp_samples:" |
| 171 | Try it | Run record: versions, date, shell, `/work` and `/venv`, ports, and what was not run | none | N/A | It is the page's own run record. |
| 172 | Try it | Prometheus docs say they provide precompiled binaries for most official components | S30 | PASS | S30: "We provide precompiled binaries for most official Prometheus components." |
| 173 | Try it | Running Prometheus on Docker is as simple as `docker run -p 9090:9090 prom/prometheus` | S30 | PASS | S30: "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| 174 | Try it | Loki docs say you can install Loki and Alloy with Docker or Docker Compose when evaluating, testing, or developing | S39 | PASS | S39: "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 175 | Try it | Install script and checksum record (downloads, SHA-256, archive prefixes, no signature file, `~/.local/bin`, PyPI wheel) | none | N/A | It is the page's own run record and its own choice. |
| 176 | Try it | Step 1: the app, its routes, `app.py`, run commands, and output | none | N/A | It is the tutorial's own app and run output. |
| 177 | Try it | `# HELP` and `# TYPE` lines are comments that the format uses for help text and type | S17 | PASS | S17: "They are ignored unless the first token after # is either HELP or TYPE." |
| 178 | Try it | A name ending in `_total` is the convention for counters | S12 | PASS | S12: "By convention, time series containing float counters have a name ending on _total" |
| 179 | Try it | A gauge is a value that can go up and down | S10 | PASS | S10: "arbitrarily go up and down." |
| 180 | Try it | Histogram buckets are cumulative counters | S10 | PASS | S10: "cumulative counters for the observation buckets" |
| 181 | Try it | Step 2: `prometheus.yml`, `rules.yml`, commands, and output; targets come via service discovery or static configuration | S8 | PASS | S8: "targets are discovered via service discovery or static configuration" |
| 182 | Try it | Recording rule takes `rate()` first, then `sum by (job)`, as the docs say | S13 | PASS | S13: "always take a rate() first, then aggregate." |
| 183 | Try it | A comparison between an instant vector and a scalar drops elements for which it is false | S40 | PASS | S40: "vector elements between which the comparison result is false get dropped from the result vector." |
| 184 | Try it | The `for` of 15 s means the alert is pending until the expression has been returned that long | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 185 | Try it | `up` is 0 if the scrape failed | S11 | PASS | S11: "or 0 if the scrape failed." |
| 186 | Try it | Both alerts carry label `severity` and annotation `summary` | S15 | PASS | S15: "The labels clause allows specifying a set of additional labels to be attached to the alert" and "The annotations clause specifies a set of informational labels" |
| 187 | Try it | `promtool check config` checks config files and `promtool check rules` checks rule files | S26 | PASS | S26: "Check if the config files are valid or not." and "Check if the rule files are valid or not." |
| 188 | Try it | Neither command needs a server. | none | FAIL | No cite. This is a general claim about the tools and S26 does not say it. Fix: add a cite that supports it, or write "No server was running during this step." |
| 189 | Try it | Step 3: `promtool test rules` runs unit tests for rules | S26 | PASS | S26: "promtool test rules / Unit tests for rules." |
| 190 | Try it | A test file lists the rule files to consider | S16 | PASS | S16: "This is a list of rule files to consider for testing." |
| 191 | Try it | The docs read `0+10x24` as "series starts at a, then n further samples incrementing by b" | S16 | PASS | S16: "Read this as series starts at a, then n further samples incrementing by b." |
| 192 | Try it | No page that the tutorial read describes the output of a failed test or the exit statuses of `promtool` | none | FAIL | S26 line 194 says "Make lint errors exit with exit code 3." So a page does describe a `promtool` exit status. Fix: "...describes the output of a failed `promtool test rules` or its exit status." |
| 193 | Try it | Step 4: `group_wait` is how long to wait before the first notification for a new group | S24 | PASS | S24: "How long to wait before sending the first notification for a new group of alerts." |
| 194 | Try it | `repeat_interval` is how long to wait before repeating the last notification | S24 | PASS | S24: "How long to wait before repeating the last notification." |
| 195 | Try it | Every alert enters the routing tree at the top-level route, then traverses the child nodes | S24 | PASS | S24: "Every alert enters the routing tree at the configured top-level route ... It then traverses the child nodes." |
| 196 | Try it | The configuration page shows `amtool check-config` for the UTF-8 strict mode check | S24 | PASS | S24: "amtool check-config config.yml --enable-feature="utf8-strict-mode"" |
| 197 | Try it | It says you do not need a running Alertmanager server for that check | S24 | PASS | S24: "You do not need a running Alertmanager server to do this." |
| 198 | Try it | No page that the tutorial read describes `config routes show` and `config routes test` | none | FAIL | S25 lines 347-355 describe them: "you can use it to test the routing by passing it label set of an alert" and "amtool config routes test --config.file=doc/examples/simple.yml ...". Fix: say only that no page describes the output of `config routes show`, or drop the claim. |
| 199 | Try it | Step 5: `--config.file` is the Prometheus configuration file path | S29 | PASS | S29: "--config.file Prometheus configuration file path." |
| 200 | Try it | `--storage.tsdb.path` is the base path for metrics storage | S29 | PASS | S29: "--storage.tsdb.path Base path for metrics storage." |
| 201 | Try it | `--web.listen-address` is the address for UI, API, and telemetry | S29 | PASS | S29: "Address to listen on for UI, API, and telemetry." |
| 202 | Try it | `--cluster.listen-address=` prevents Alertmanager from listening to incoming peer requests | S25 | PASS | S25: "setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 203 | Try it | `/-/ready` returns 200 when Prometheus is ready to serve traffic | S28 | PASS | S28: "This endpoint returns 200 when Prometheus is ready to serve traffic" |
| 204 | Try it | The API response format is JSON | S27 | PASS | S27: "The API response format is JSON." |
| 205 | Try it | `/api/v1/query` evaluates an instant query at a single point in time | S27 | PASS | S27: "The following endpoint evaluates an instant query at a single point in time" |
| 206 | Try it | `up` value 1 means the instance was healthy, reachable | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable" |
| 207 | Try it | `histogram_quantile` interpolates within the bucket the quantile falls into | S13 | PASS | S13: "the histogram_quantile() function interpolates the quantile value within the bucket the quantile value falls into." |
| 208 | Try it | For classic histograms it assumes a uniform distribution within the bucket | S13 | PASS | S13: "For classic histograms ... it assumes a uniform distribution of observations within the bucket" |
| 209 | Try it | The docs use `rate()` to specify the time window | S13 | PASS | S13: "Use the rate() function to specify the time window for the quantile calculation." |
| 210 | Try it | Step 6: the `/alerts` endpoint returns a list of all active alerts | S27 | PASS | S27: "The /alerts endpoint returns a list of all active alerts." |
| 211 | Try it | An alert is pending until it has been returned for the `for` time | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 212 | Try it | The README shows `amtool silence add alertname=Test_Alert` | S25 | PASS | S25: "$ amtool silence add alertname=Test_Alert" |
| 213 | Try it | The Alertmanager page says silences are configured in the web interface | S23 | PASS | S23: "Silences are configured in the web interface of the Alertmanager." |
| 214 | Try it | No page describes the flag `--silenced` or the state `suppressed` | none | PASS | Search of all `pages/*.txt` for "suppressed", "--silenced", and "detected_level" found no match. |
| 215 | Try it | `AppDown` `up` was 0 because the scrape failed | S11 | PASS | S11: "or 0 if the scrape failed." |
| 216 | Try it | Step 7: the Loki docs page lists a complete configuration backed by the filesystem | S37 | PASS | S37: "This is a complete configuration to deploy Loki backed by the filesystem." |
| 217 | Try it | The page uses `/tmp/loki` as the folder | S37 | PASS | S37: "path_prefix: /tmp/loki" |
| 218 | Try it | The reference describes the analytics setting as "Enable anonymous usage reporting" | S38 | PASS | S38: "# Enable anonymous usage reporting." |
| 219 | Try it | `/ready` returns HTTP 200 when Loki is ready to accept traffic | S36 | PASS | S36: "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 220 | Try it | The timestamp of each entry is a string, as the API needs | S36 | PASS | S36: "you must send the timestamp as a string and not a number" |
| 221 | Try it | If no `service_name` is on the stream, Loki uses the first non-empty value from a list, in order | S32 | PASS | S32: "Otherwise, Loki looks for the first non-empty value from the following labels, in order" |
| 222 | Try it | The reference says Loki can discover and add log levels during ingestion; no page names `detected_level` | S38 | PASS | S38: "# Discover and add log levels during ingestion, if not present already." No page has "detected_level" (search of `pages/`). |
| 223 | Try it | A line filter expression does a distributed grep and discards lines that do not match | S34 | PASS | S34: "The line filter expression does a distributed grep ... discarding those lines that do not match the case-sensitive expression." |
| 224 | Try it | `limit` is the max number of entries and defaults to 100 | S36 | PASS | S36: "limit: The max number of entries to return. It defaults to 100." |
| 225 | Try it | `count_over_time` counts entries per log stream in the range | S35 | PASS | S35: "counts the entries for each log stream within the given range." |
| 226 | Try it | The `logfmt` stage parses each line to extract more labels, and the next stage filters with them | S34 | PASS | S34: "then parses each log line to extract more labels and filter with them." |
| 227 | Try it | Query endpoints return a set of statistics about the query execution | S36 | PASS | S36: "return a set of statistics about the query execution." |
| 228 | Try it | Step 8: `ConsoleSpanExporter` is in the `opentelemetry-sdk` package | S5 | PASS | S5: "included in the opentelemetry-sdk package." |
| 229 | Try it | It passes the context by hand, as the Python docs show | S4 | PASS | S4: "In the event that you need to manually propagate context" and the inject/extract examples. |
| 230 | Try it | The same page says to use instrumentation libraries to propagate context | S4 | PASS | S4: "Use instrumentation libraries to propagate context." |
| 231 | Try it | The header has the four fields | S6 | PASS | S6: "It has four fields: version trace-id parent-id trace-flags" |
| 232 | Try it | The right-most bit of the flags, when set, means the caller may have recorded trace data | S6 | PASS | S6: "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 233 | Try it | Flags are a bit field and cannot be read as a number; no page names the other bit | S6 | PASS | S6: "you cannot interpret flags by decoding the hex value and looking at the resulting number." The S6 text names no other flag bit. |
| 234 | Try it | A span with a `trace_id` but no `parent_id` is a root span | S41 | PASS | S41: "parent_id. That’s how you know it’s the root span." |
| 235 | Try it | When no traceparent is received, the vendor creates a new trace-id and parent-id | S6 | PASS | S6: "the vendor creates a new trace-id and parent-id that represents the current request." |
| 236 | How a tester uses it | A counter can only increase or be reset to zero on restart | S10 | PASS | S10: "whose value can only increase or be reset to zero on restart." |
| 237 | How a tester uses it | `up` is 1 if reachable, 0 if the scrape failed | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 238 | How a tester uses it | The SRE book counts an HTTP 200 with the wrong content as an error, implicitly | S7 | PASS | S7: "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 239 | How a tester uses it | A test can expect that an alert does not fire, with an empty `exp_alerts` | S16 | PASS | S16: "leave 'exp_alerts' empty." |
| 240 | How a tester uses it | Every alert enters the routing tree at the top-level route and then traverses the child nodes | S24 | PASS | S24: "Every alert enters the routing tree at the configured top-level route ... It then traverses the child nodes." |
| 241 | How a tester uses it | The alert was pending first, then firing, because of its `for` time | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 242 | How a tester uses it | `wait_for` polls the endpoint `/api/v1/alerts` | S27 | PASS | S27: "The /alerts endpoint returns a list of all active alerts." |
| 243 | How a tester uses it | Do not use labels for high-cardinality dimensions such as user IDs | S18 | PASS | S18: "Do not use labels to store dimensions with high cardinality ..., such as user IDs" |
| 244 | How a tester uses it | For Loki, too many label value combinations leads to too many streams | S33 | PASS | S33: "Too many label value combinations leads to too many streams." |
| 245 | How a tester uses it | A label selects the stream and a line filter keeps the lines | S34 | PASS | S34: "All LogQL queries contain a log stream selector." and "discarding those lines that do not match the case-sensitive expression." |
| 246 | How a tester uses it | With context propagation, signals can be correlated wherever generated | S3 | PASS | S3: "signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated." |
| 247 | Common mistakes | `rate` should only be used with counters | S13 | PASS | S13: "rate should only be used with counters" |
| 248 | Common mistakes | Applied to gauge floats, rate gives a nonsensical result but runs without complaints | S12 | PASS | S12: "will most likely produce a nonsensical result, but the query will be processed without complains." |
| 249 | Common mistakes | Take `rate()` first, then aggregate | S13 | PASS | S13: "always take a rate() first, then aggregate." |
| 250 | Common mistakes | Otherwise `rate()` cannot detect counter resets | S13 | PASS | S13: "Otherwise rate() cannot detect counter resets when your target restarts." |
| 251 | Common mistakes | Do not use a counter for a value that can decrease | S10 | PASS | S10: "Do not use a counter to expose a value that can decrease." |
| 252 | Common mistakes | Example: do not use a counter for running processes; use a gauge | S10 | PASS | S10: "do not use a counter for the number of currently running processes; instead use a gauge." |
| 253 | Common mistakes | Prometheus implements pre-calculated quantiles as a metric type called summary | S20 | PASS | S20: "Prometheus implements this approach in the form of a metric type called summary." |
| 254 | Common mistakes | You cannot recalculate quantiles later or aggregate quantiles | S20 | PASS | S20: "you cannot “recalculate” the quantiles later if you desire another time window or another percentile, and most importantly, you cannot aggregate quantiles" |
| 255 | Common mistakes | Do not put unbounded values in labels | S18 | PASS | S18: "Do not use labels to store dimensions with high cardinality ..., such as user IDs, email addresses, or other unbounded sets of values." |
| 256 | Common mistakes | In Loki the penalties of too many streams are a large index and small chunks | S33 | PASS | S33: "The penalties for that in Loki are a large index and small chunks in the store" |
| 257 | Common mistakes | Alerts not yet fired for long enough are pending | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 258 | Common mistakes | If an alert matches an active silence, no notifications are sent for it | S23 | PASS | S23: "If they do, no notifications will be sent out for that alert." |
| 259 | Common mistakes | The value of `up` says whether the scrape worked | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 260 | Common mistakes | The SRE book counts HTTP 200 with wrong content as an error, implicitly | S7 | PASS | S7: "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 261 | Common mistakes | It is important to distinguish latency of successes and failures | S7 | PASS | S7: "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| 262 | Common mistakes | `promtool check rules` checks rule files; `promtool test rules` runs unit tests | S26 | PASS | S26: "Check if the rule files are valid or not." and "Unit tests for rules." |
| 263 | Common mistakes | Time series not present until something happens are difficult to deal with | S19 | PASS | S19: "Time series that are not present until something happens are difficult to deal with" |
| 264 | Common mistakes | Export a default value such as 0 for any series that may exist in advance | S19 | PASS | S19: "export a default value such as 0 for any time series you know may exist in advance." |
| 265 | Common mistakes | The push endpoint needs a string timestamp and returns 400 otherwise | S36 | PASS | S36: "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 266 | Common mistakes | The line filter discards lines that do not match the case-sensitive expression | S34 | PASS | S34: "discarding those lines that do not match the case-sensitive expression." |
| 267 | Common mistakes | When no traceparent is received, the vendor creates a new trace-id and parent-id | S6 | PASS | S6: "the vendor creates a new trace-id and parent-id that represents the current request." |
| 268 | Common mistakes | Flags are a bit field; you cannot read them as a decoded number | S6 | PASS | S6: "you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 269 | Common mistakes | Other sentences: the app, rule, histogram, step 6 and step 8 observations, and the port advice | none | N/A | They are the page's own run record, its own reading of its own rule, and reader advice. |
| 270 | What a tester can check | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. | none | PASS | The callout says: "This list is the tutorial's own advice for a tester who works with monitoring and observability tools." Each tool name and command in the list appears elsewhere on the page. |
| 271 | Key words | Observability | none | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" (What it is) |
| 272 | Key words | Instrumentation | none | PASS | "To ask those questions about your system, your application must be properly instrumented" (What it is) |
| 273 | Key words | Telemetry | none | PASS | "Telemetry refers to data emitted from a system and its behavior" (What it is) |
| 274 | Key words | Metric | none | PASS | "Metrics are aggregations over a period of time of numeric data about your infrastructure or application" (What it is) |
| 275 | Key words | Log | none | PASS | "A log is a timestamped message emitted by services or other components" (What it is) |
| 276 | Key words | Span | none | PASS | "A span represents a single unit of work or operation" (What it is) |
| 277 | Key words | Trace | none | PASS | "A trace is made of one or more spans" (What it is) |
| 278 | Key words | Time series | none | PASS | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels" (How it works) |
| 279 | Key words | Label | none | PASS | The same How it works sentence: "optional key-value pairs called labels" |
| 280 | Key words | Instance | none | PASS | "an endpoint you can scrape is called an instance, usually corresponding to a single process" (How it works) |
| 281 | Key words | Job | none | PASS | "A collection of instances with the same purpose is called a job" (How it works) |
| 282 | Key words | up | none | PASS | "Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed" (How it works) |
| 283 | Key words | Counter | none | PASS | "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart" (How it works) |
| 284 | Key words | Gauge | none | PASS | "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down" (How it works) |
| 285 | Key words | Histogram | none | PASS | "A histogram records observations by counting them in configurable buckets" (How it works) |
| 286 | Key words | Summary | none | PASS | "Similar to a histogram, a summary samples observations" (How it works) |
| 287 | Key words | PromQL | none | PASS | "Prometheus provides a functional query language called PromQL that lets the user select and aggregate time series data in real time" (How it works) |
| 288 | Key words | Instant vector | none | PASS | "An instant vector is a set of time series containing a single sample for each time series, all sharing the same timestamp" (How it works) |
| 289 | Key words | Range vector | none | PASS | "A range vector is a set of time series containing a range of data points over time for each time series" (How it works) |
| 290 | Key words | Recording rule | none | PASS | "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series" (How it works) |
| 291 | Key words | Pending | none | PASS | "Alerts which have not yet fired for long enough are considered pending" (How it works) |
| 292 | Key words | Firing | none | PASS | "Alerts are considered firing once they have been returned for this long" (How it works) |
| 293 | Key words | Alertmanager | none | PASS | "The Alertmanager takes care of deduplicating, grouping, and routing them to the correct receiver integration" (How it works) |
| 294 | Key words | Grouping | none | PASS | "Grouping categorizes alerts of similar nature into a single notification" (How it works) |
| 295 | Key words | Inhibition | none | PASS | "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing" (How it works) |
| 296 | Key words | Silence | none | PASS | "Silences are a straightforward way to simply mute alerts for a given time" (How it works) |
| 297 | Key words | Routing tree | none | PASS | "Every alert enters the routing tree at the configured top-level route, which must match all alerts" (How it works) |
| 298 | Key words | promtool | none | PASS | "You can use promtool to test your rules" (How it works) |
| 299 | Key words | amtool | none | PASS | "The `amtool` command is a cli tool for interacting with the Alertmanager API" (How it works) |
| 300 | Key words | Loki | none | PASS | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus" (What it is) |
| 301 | Key words | Log stream | none | PASS | "Labels allow Loki to organize and group together log messages into log streams" (How it works) |
| 302 | Key words | LogQL | none | PASS | "All LogQL queries contain a log stream selector" (How it works) |
| 303 | Key words | Context propagation | none | PASS | "Propagation is the mechanism that moves context between services and processes" (How it works) |
| 304 | Key words | traceparent | none | PASS | "The `traceparent` HTTP header field identifies the incoming request in a tracing system" (How it works) |
| 305 | Key words | Golden signals | none | PASS | "the four golden signals of monitoring are latency, traffic, errors, and saturation" (How it works) |
| 306 | Key words | Cardinality | none | PASS | "Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values" (How it works) |

Open FAILs after round 7: 4

Changed after this round: Row 64 (How it works): the first sentence of the text format had no cite. It now says what S17 says: as of Prometheus 2.0, all processes that expose metrics to Prometheus must use a text format, by default. Row 188 (step 2): "Neither command needs a server" had no cite, and S26 does not say it. The page now says that no Prometheus server was running in this step, and cites S14, which says that a rule file can be checked without starting a Prometheus server. Row 192 (step 3): the page said that no page the tutorial read describes the output of a failed test or the exit statuses of `promtool`, but S26 gives an exit code for `--lint-fatal` and S14 gives the exit statuses 0 and 1 of `promtool check rules`. The sentence now says only that the output of the failure and the exit statuses are from the tutorial's run. Row 198 (step 4): the page said that no page describes `config routes show` and `config routes test`, but the Alertmanager README (S25) describes the text tree and the routing test and shows `amtool config routes` and `amtool config routes test`. The page now cites S25 for both, says that the tutorial ran the first as `config routes show` and the README does not write it that way, and says that the `--help` text of the installed `amtool` (read after the run, not recorded in it) writes `amtool config routes [show]`. The two "quote not in sources" notes (rows 91 and 193) are quotes that the page splits with `||` where the source has a `# ` comment marker at a line break; the checker joined the pieces, and both rows are PASS. The writer also re-read every cited sentence against its quote (`limits.py`) and found two more: the sentence on a comparison between an instant vector and a scalar had dropped "By default" (S40 says that comparison operators filter by default, and that `bool` changes that), and the Common mistakes sentence "Always take a `rate()` first, then aggregate" had dropped its condition (when `rate()` is combined with an aggregation operator or a function that aggregates over time).

## Round 8 (2026-11-19)

# Fact check: devops / monitoring-observability (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page summary: observability, Prometheus, Alertmanager, Loki, OTel trace context, practice run with no cloud account | none | N/A | Describes the page itself; the facts are cited in the sections below. |
| 2 | Lede | Page covers the three signals, Prometheus, Alertmanager, Loki, trace context; the run needs no cloud account and no Docker; order links | none | N/A | Describes the page and the tutorial's own run; the facts are cited in the sections. Links are not facts. |
| 3 | What it is | Observability lets you understand a system from the outside by asking questions without knowing its inner workings | 1 | PASS | S1: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 4 | What it is | The application must be properly instrumented | 1 | PASS | S1: "your application must be properly instrumented" |
| 5 | What it is | The code must emit signals such as traces, metrics, and logs | 1 | PASS | S1: "the application code must emit signals such as traces, metrics, and logs" |
| 6 | What it is | Telemetry refers to data emitted from a system and its behavior | 1 | PASS | S1: "Telemetry refers to data emitted from a system and its behavior" |
| 7 | What it is | OpenTelemetry is the mechanism by which code is instrumented | 1 | PASS | S1: "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable" |
| 8 | What it is | SRE book describes monitoring as collecting, processing, aggregating, displaying real-time quantitative data (counts, types, times, lifetimes) | 7 | PASS | S7: "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 9 | What it is | White-box monitoring is based on metrics exposed by the internals | 7 | PASS | S7: "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring is testing externally visible behavior as a user would see it | 7 | PASS | S7: "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics are aggregations over a period of time of numeric data | 1 | PASS | S1: "Metrics are aggregations over a period of time of numeric data about your infrastructure or application" |
| 12 | What it is | A log is a timestamped message emitted by services or other components | 1 | PASS | S1: "A log is a timestamped message emitted by services or other components." |
| 13 | What it is | A span represents a single unit of work or operation | 1 | PASS | S1: "A span represents a single unit of work or operation." |
| 14 | What it is | A trace is made of one or more spans | 1 | PASS | S1: "A trace is made of one or more spans." |
| 15 | What it is | The first span represents the root span | 1 | PASS | S1: "The first span represents the root span." |
| 16 | What it is | A distributed trace records the path of a single request through multiple services | 1 | PASS | S1: "records the path taken by a single request ... as it propagates through multiple services in an architecture" |
| 17 | What it is | Prometheus is an open-source systems monitoring and alerting toolkit | 8 | PASS | S8: "is an open-source systems ... monitoring and alerting toolkit" |
| 18 | What it is | It collects and stores its metrics as time series data | 8 | PASS | S8: "Prometheus collects and stores its metrics as time series data" |
| 19 | What it is | Alertmanager handles alerts sent by client applications such as the Prometheus server | 23 | PASS | S23: "handles alerts ... sent by client applications such as the Prometheus server." |
| 20 | What it is | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | 31 | PASS | S31: "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 21 | What it is | Loki does not index the contents of the logs | 31 | PASS | S31: "Unlike other logging systems, Loki does not index the contents of the logs" |
| 22 | What it is | OpenTelemetry is open source, and vendor- and tool-agnostic | 2 | PASS | S2: "Open source, as well as vendor- and tool-agnostic" |
| 23 | What it is | It is not an observability backend itself | 2 | PASS | S2: "OpenTelemetry is not an observability backend itself." |
| 24 | How it works | Prometheus ecosystem has multiple components, many optional | 8 | PASS | S8: "The Prometheus ecosystem consists of multiple components, many of which are optional" |
| 25 | How it works | Main server scrapes and stores time series data | 8 | PASS | S8: "the main Prometheus server which scrapes and stores time series data" |
| 26 | How it works | Client libraries instrument application code | 8 | PASS | S8: "client libraries for instrumenting application code" |
| 27 | How it works | An alertmanager handles alerts | 8 | PASS | S8: "an alertmanager to handle alerts" |
| 28 | How it works | Prometheus scrapes metrics from instrumented jobs | 8 | PASS | S8: "Prometheus scrapes metrics from instrumented jobs" |
| 29 | How it works | It stores all scraped samples locally and runs rules to aggregate/record or generate alerts | 8 | PASS | S8: "It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts." |
| 30 | How it works | Grafana or other API consumers can visualize data | 8 | PASS | S8: "Grafana or other API consumers can be used to visualize the collected data." |
| 31 | How it works | Time series collection happens via a pull model over HTTP | 8 | PASS | S8: "time series collection happens via a pull model over HTTP" |
| 32 | How it works | Prometheus stores its data as time series | 8 | PASS | S8: "Prometheus collects and stores its metrics as time series data" |
| 33 | How it works | Time series identified by metric name and optional key-value labels | 9 | PASS | S9: "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| 34 | How it works | Prometheus may generate temporary derived time series from queries | 9 | PASS | S9: "Besides stored time series, Prometheus may generate temporary derived time series" |
| 35 | How it works | Instance = scrapable endpoint, usually a single process | 11 | PASS | S11: "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 36 | How it works | A collection of instances with the same purpose is a job | 11 | PASS | S11: "A collection of instances with the same purpose ... is called a job." |
| 37 | How it works | Prometheus attaches some labels automatically when it scrapes | 11 | PASS | S11: "it attaches some labels automatically to the scraped time series" |
| 38 | How it works | `job` label holds the configured job name | 11 | PASS | S11: "job: The configured job name that the target belongs to." |
| 39 | How it works | `instance` label holds host and port of the scraped URL | 11 | PASS | S11: "instance: The <host>:<port> part of the target's URL that was scraped." |
| 40 | How it works | For each instance scrape, a sample is stored in `up` | 11 | PASS | S11: "For each instance scrape, Prometheus stores a sample in the following time series: up{...}" |
| 41 | How it works | `up` is 1 if healthy/reachable, 0 if scrape failed | 11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 42 | How it works | `up` useful for instance availability monitoring | 11 | PASS | S11: "The up time series is useful for instance availability monitoring." |
| 43 | How it works | Four core metric types | 10 | PASS | S10: "The Prometheus instrumentation libraries offer four core metric types." |
| 44 | How it works | Counter definition | 10 | PASS | S10: "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart." |
| 45 | How it works | Do not use a counter for a value that can decrease | 10 | PASS | S10: "Do not use a counter to expose a value that can decrease." |
| 46 | How it works | Gauge definition | 10 | PASS | S10: "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down." |
| 47 | How it works | Histogram counts observations in configurable buckets | 10 | PASS | S10: "by counting them in configurable buckets" |
| 48 | How it works | It also provides a sum of all observed values | 10 | PASS | S10: "It also provides a sum of all observed values." |
| 49 | How it works | Classic histogram = multiple time series of simple float samples | 10 | PASS | S10: "A classic histogram, however, consists of multiple time series of simple float samples." |
| 50 | How it works | They are the cumulative bucket counters, the sum, and the count | 10 | PASS | S10: "cumulative counters for the observation buckets ... the total sum of all observed values ... the count of events that have been observed" |
| 51 | How it works | A summary samples observations | 10 | PASS | S10: "Similar to a histogram, a summary samples observations" |
| 52 | How it works | Summaries calculate streaming φ-quantiles in the program and expose them directly | 20 | PASS | S20: "summaries calculate streaming φ-quantiles within the instrumented program and expose them directly" |
| 53 | How it works | Histograms expose bucket counts; quantiles computed on the server with `histogram_quantile()` | 20 | PASS | S20: "histograms expose bucketed observation counts and the calculation of quantiles ... happens on the Prometheus server using the histogram_quantile() function" |
| 54 | How it works | For a summary, other φ-quantiles and sliding windows cannot be calculated later | 20 | PASS | S20: "Other φ-quantiles and sliding windows cannot be calculated later." |
| 55 | How it works | Metric names should have a single-word application prefix | 18 | PASS | S18: "SHOULD have a (single-word) application prefix" |
| 56 | How it works | Suffix describing the unit, in plural form | 18 | PASS | S18: "SHOULD have a suffix describing the unit, in plural form." |
| 57 | How it works | Every unique label combination is a new time series; can dramatically increase data | 18 | PASS | S18: "every unique combination of key-value label pairs represents a new time series, which can dramatically increase the amount of data stored." |
| 58 | How it works | Do not use labels for high-cardinality dimensions (user IDs, emails, unbounded sets) | 18 | PASS | S18: "Do not use labels to store dimensions with high cardinality (many different label values), such as user IDs, email addresses, or other" |
| 59 | How it works | Services fall into three types: online-serving, offline-processing, batch jobs | 19 | PASS | S19: "services can generally be broken down into three types: online-serving, offline-processing, and batch jobs." |
| 60 | How it works | Online-serving systems should be monitored on client and server side | 19 | PASS | S19: "Online-serving systems should be monitored on both the client and server side." |
| 61 | How it works | Different behaviors on the two sides is useful for debugging | 19 | PASS | S19: "If the two sides see different behaviors, that is very useful information for debugging." |
| 62 | How it works | Time series not present until something happens are difficult to deal with | 19 | PASS | S19: "Time series that are not present until something happens are difficult to deal with" |
| 63 | How it works | Export a default value such as 0 for series that may exist | 19 | PASS | S19: "export a default value such as 0 for any time series you know may exist in advance." |
| 64 | How it works | Since 2.0, processes that expose metrics must use a text format by default | 17 | PASS | S17: "As of Prometheus version 2.0, all processes that expose metrics to Prometheus must use a text format, by default." |
| 65 | How it works | Lines with # as first non-whitespace char are comments | 17 | PASS | S17: "Lines with a # as the first non-whitespace character are comments." |
| 66 | How it works | Ignored unless first token after # is HELP or TYPE | 17 | PASS | S17: "ignored unless the first token after # is either HELP or TYPE" |
| 67 | How it works | If the token is TYPE, exactly two more tokens are expected | 17 | PASS | S17: "If the token is TYPE, exactly two more tokens are expected." |
| 68 | How it works | First is metric name, second is counter, gauge, histogram, summary, or untyped | 17 | PASS | S17: "The first is the metric name, and the second is either counter, gauge, histogram, summary, or untyped" |
| 69 | How it works | Remaining lines describe samples, one per line | 17 | PASS | S17: "The remaining lines describe samples (one per line)" |
| 70 | How it works | PromQL is a functional query language to select and aggregate time series in real time | 12 | PASS | S12: "a functional query language called PromQL ... lets the user select and aggregate time series data in real time." |
| 71 | How it works | Instant query vs range query | 12 | PASS | S12: "it can be an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time." |
| 72 | How it works | Instant vector definition | 12 | PASS | S12: "Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 73 | How it works | Range vector definition | 12 | PASS | S12: "Range vector - a set of time series containing a range of data points over time for each time series" |
| 74 | How it works | Instant vector selectors select a set of series and a single sample at a timestamp | 12 | PASS | S12: "Instant vector selectors allow the selection of a set of time series and a single sample value for each at a given timestamp" |
| 75 | How it works | Filter with comma-separated label matchers in curly braces | 12 | PASS | S12: "appending a comma-separated list of label matchers in curly braces ({})" |
| 76 | How it works | By convention, float counters have name ending in `_total` | 12 | PASS | S12: "By convention, time series containing float counters have a name ending on _total" |
| 77 | How it works | Instant vector vs scalar comparison applies to every sample; false elements dropped | 40 | PASS | S40: "Between an instant vector and a scalar, these operators are applied to the value of every data sample in the vector, and vector elements between which the comparison result is false get dropped from the result vector." |
| 78 | How it works | `rate(v range-vector)` per-second average rate of increase | 13 | PASS | S13: "rate(v range-vector) calculates the per-second average rate of increase of the time series in the range vector." |
| 79 | How it works | Counter resets automatically adjusted for | 13 | PASS | S13: "Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for." |
| 80 | How it works | `rate` should only be used with counters | 13 | PASS | S13: "rate should only be used with counters" |
| 81 | How it works | On gauge floats the result is most likely nonsensical but no complaint | 12 | PASS | S12: "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains." |
| 82 | How it works | With an aggregation operator, take rate() first, then aggregate | 13 | PASS | S13: "when combining rate() with an aggregation operator (e.g. sum()) ... always take a rate() first, then aggregate." |
| 83 | How it works | Otherwise rate() cannot detect counter resets | 13 | PASS | S13: "Otherwise rate() cannot detect counter resets when your target restarts." |
| 84 | How it works | `histogram_quantile` calculates φ-quantile from classic or native histogram | 13 | PASS | S13: "histogram_quantile(φ scalar, b instant-vector) calculates the φ-quantile (0 ≤ φ ≤ 1) from a classic histogram or from a native histogram." |
| 85 | How it works | Use rate() to specify the time window for the quantile | 13 | PASS | S13: "Use the rate() function to specify the time window for the quantile calculation." |
| 86 | How it works | For classic histograms, `le` must be in the `by` clause | 13 | PASS | S13: "Since the le label is required by histogram_quantile() to deal with classic histograms, it has to be included in the by clause." |
| 87 | How it works | Recording rules precompute expressions and save result as new series | 14 | PASS | S14: "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series." |
| 88 | How it works | Rules exist in a rule group | 14 | PASS | S14: "Recording and alerting rules exist in a rule group." |
| 89 | How it works | Group rules run sequentially at regular interval, same evaluation time | 14 | PASS | S14: "Rules within a group are run sequentially at a regular interval, with the same evaluation time." |
| 90 | How it works | Recording rule names must be valid metric names | 14 | PASS | S14: "The names of recording rules must be valid metric names." |
| 91 | How it works | Alerting rule results become pending or firing alerts | 14 | PASS | S14: "all resultant time series become pending/firing alerts." |
| 92 | How it works | Firing once returned for this long | 14 | PASS | S14: "Alerts are considered firing once they have been returned for this long." |
| 93 | How it works | Not yet fired long enough = pending | 14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 94 | How it works | `labels` clause adds labels to the alert | 15 | PASS | S15: "The labels clause allows specifying a set of additional labels to be attached to the alert." |
| 95 | How it works | `annotations` clause stores longer info such as descriptions or runbook links | 15 | PASS | S15: "The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| 96 | How it works | Synthetic `ALERTS` series for pending and firing alerts | 15 | PASS | S15: "For pending and firing alerts, Prometheus also stores synthetic time series of the form ALERTS" |
| 97 | How it works | Alerting rules good at what is broken now, not a full notification solution | 15 | PASS | S15: "Prometheus's alerting rules are good at figuring what is broken right now, but they are not a fully-fledged notification solution." |
| 98 | How it works | Alerting is separated into two parts | 22 | PASS | S22: "Alerting with Prometheus is separated into two parts." |
| 99 | How it works | Alerting rules send alerts to an Alertmanager | 22 | PASS | S22: "Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| 100 | How it works | Alertmanager deduplicates, groups, routes to receiver integration | 23 | PASS | S23: "It takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 101 | How it works | Grouping puts similar alerts in one notification | 23 | PASS | S23: "Grouping categorizes alerts of similar nature into a single notification." |
| 102 | How it works | Inhibition definition | 23 | PASS | S23: "Inhibition is a concept of suppressing notifications for certain alerts if" ... (next line continues) |
| 103 | How it works | Silences mute alerts for a given time | 23 | PASS | S23: "Silences are a straightforward way to simply mute alerts for a given time." |
| 104 | How it works | Silence is configured on matchers like the routing tree | 23 | PASS | S23: "A silence is configured based on matchers, just like the routing tree." |
| 105 | How it works | Every alert enters at top-level route, which must match all alerts | 24 | PASS | S24: "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 106 | How it works | It then traverses child nodes | 24 | PASS | S24: "It then traverses the child nodes." |
| 107 | How it works | `continue` false stops after first matching child | 24 | PASS | S24: "If continue is set to false, it stops after the first matching child." |
| 108 | How it works | No matching child: handled by current node's parameters | 24 | PASS | S24: "the alert is handled based on the configuration parameters of the current node." |
| 109 | How it works | Most optional route parameters inherited from parent | 24 | PASS | S24: "Most optional configuration parameters ... are inherited from its parent node if not set." |
| 110 | How it works | `amtool` is a cli tool for the Alertmanager API | 25 | PASS | S25: "amtool is a cli tool for interacting with the Alertmanager API." |
| 111 | How it works | Bundled with all Alertmanager releases | 25 | PASS | S25: "It is bundled with all releases of Alertmanager." |
| 112 | How it works | `amtool` can validate config for UTF-8 strict mode before enabling it | 24 | PASS | S24: "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server." |
| 113 | How it works | No running Alertmanager server needed for that check | 24 | PASS | S24: "You do not need a running Alertmanager server to do this." |
| 114 | How it works | Alert on symptoms tied to end-user pain; as few alerts as possible | 21 | PASS | S21: "Aim to have as few alerts as possible, by alerting on symptoms that are associated with end-user pain rather than trying to catch every possible way that pain could be caused." |
| 115 | How it works | Summary: keep alerting simple, alert on symptoms, good consoles, avoid pages with nothing to do | 21 | PASS | S21: "To summarize: keep alerting simple, alert on symptoms, have good consoles to allow pinpointing causes, and avoid having pages where there is nothing to do." |
| 116 | How it works | For error rates, page on user-visible errors | 21 | PASS | S21: "For error rates, page on user-visible errors." |
| 117 | How it works | Four golden signals: latency, traffic, errors, saturation | 7 | PASS | S7: "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 118 | How it works | If you can only measure four metrics, focus on these | 7 | PASS | S7: "If you can only measure four metrics of your user-facing system, focus on these four." |
| 119 | How it works | Errors are the rate of requests that fail, explicitly, implicitly, or by policy | 7 | PASS | S7: "The rate of requests that fail, either explicitly ..., implicitly ..., or by policy" |
| 120 | How it works | Distinguish latency of successful and failed requests | 7 | PASS | S7: "It's important to distinguish between the latency of successful requests and the latency of failed requests." |
| 121 | How it works | Loki focuses on logs, collects via push | 31 | PASS | S31: "Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 122 | How it works | Labels organize log messages into log streams | 32 | PASS | S32: "They allow Loki to organize and group together log messages into log streams." |
| 123 | How it works | Existing `service_name` used directly | 32 | PASS | S32: "If a service_name label is already present on the stream, Loki uses it directly." |
| 124 | How it works | Otherwise first non-empty value from a label list, in order | 32 | PASS | S32: "Otherwise, Loki looks for the first non-empty value from the following labels, in order" |
| 125 | How it works | No match gives `unknown_service` | 32 | PASS | S32: "If no label is found matching the list, a value of unknown_service is applied." |
| 126 | How it works | Labels for regions, clusters, servers, apps, namespaces, environments | 33 | PASS | S33: "Use labels for things like regions, clusters, servers, applications, namespaces, and environments." |
| 127 | How it works | Too many label combinations leads to too many streams | 33 | PASS | S33: "Too many label value combinations leads to too many streams." |
| 128 | How it works | Penalties: large index, small chunks, can reduce performance | 33 | PASS | S33: "a large index and small chunks in the store, which in turn can actually reduce performance." |
| 129 | How it works | Don't add a label until you know you need it | 33 | PASS | S33: "don’t add a label for something until you know you need it!" |
| 130 | How it works | All LogQL queries contain a log stream selector | 34 | PASS | S34: "All LogQL queries contain a log stream selector." |
| 131 | How it works | Selector can be followed by a log pipeline | 34 | PASS | S34: "Optionally, the log stream selector can be followed by a log pipeline." |
| 132 | How it works | Pipeline = chained stage expressions applied to selected streams | 34 | PASS | S34: "A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams." |
| 133 | How it works | Selector = one or more comma-separated key-value pairs | 34 | PASS | S34: "The log stream selector is specified by one or more comma-separated key-value pairs." |
| 134 | How it works | Matching operators `=`, `!=`, `=~`, `!~` | 34 | PASS | S34: "=: exactly equal / !=: not equal / =~: regex matches / !~: regex does not match" |
| 135 | How it works | Line filter does a distributed grep over aggregated logs of matching streams | 34 | PASS | S34: "The line filter expression does a distributed grep over the aggregated logs from the matching log streams." |
| 136 | How it works | Searches line contents, discards non-matching, case-sensitive | 34 | PASS | S34: "discarding those lines that do not match the case-sensitive expression." |
| 137 | How it works | Label filter expression filters by original and extracted labels | 34 | PASS | S34: "Label filter expression allows filtering log line using their original and extracted labels." |
| 138 | How it works | Metric queries apply a function to log query results | 35 | PASS | S35: "Metric queries extend log queries by applying a function to log query results." |
| 139 | How it works | `count_over_time(log-range)` counts entries per stream in range | 35 | PASS | S35: "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 140 | How it works | Push timestamp must be a string, else 400 | 36 | PASS | S36: "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 141 | How it works | `/loki/api/v1/query_range` queries over a range of time | 36 | PASS | S36: "/loki/api/v1/query_range is used to do a query over a range of time." |
| 142 | How it works | `limit` is max entries, default 100 | 36 | PASS | S36: "limit: The max number of entries to return. It defaults to 100." |
| 143 | How it works | `start` defaults to one hour ago | 36 | PASS | S36: "Defaults to one hour ago." |
| 144 | How it works | Query endpoints return a set of statistics | 36 | PASS | S36: "Query endpoints such as /loki/api/v1/query and /loki/api/v1/query_range return a set of statistics about the query execution." |
| 145 | How it works | `/ready` returns 200 when ready | 36 | PASS | S36: "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 146 | How it works | `/loki/api/v1/labels` lists known labels in a time span | 36 | PASS | S36: "/loki/api/v1/labels retrieves the list of known labels within a given time span." |
| 147 | How it works | Context propagation correlates signals wherever generated | 3 | PASS | S3: "With context propagation, signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated." |
| 148 | How it works | Propagation moves context between services and processes | 3 | PASS | S3: "Propagation is the mechanism that moves context between services and processes." |
| 149 | How it works | Usually handled by instrumentation libraries, transparent | 3 | PASS | S3: "Propagation is usually handled by instrumentation libraries and is transparent to the user." |
| 150 | How it works | OTel gives text-based propagation with W3C Trace Context headers | 4 | PASS | S4: "OpenTelemetry provides a text-based approach to propagate context to remote services using the W3C Trace Context HTTP headers." |
| 151 | How it works | `traceparent` identifies the incoming request | 6 | PASS | S6: "The traceparent HTTP header field identifies the incoming request in a tracing system." |
| 152 | How it works | Four fields: version, trace-id, parent-id, trace-flags | 6 | PASS | S6: "It has four fields: version ... trace-id ... parent-id ... trace-flags" |
| 153 | How it works | trace-id 16 bytes, all zeroes forbidden | 6 | PASS | S6: "trace-id = 32HEXDIGLC ; 16 bytes array identifier. All zeroes forbidden" |
| 154 | How it works | parent-id 8 bytes, all zeroes forbidden | 6 | PASS | S6: "parent-id = 16HEXDIGLC ; 8 bytes array identifier. All zeroes forbidden" |
| 155 | How it works | Least significant bit set: caller may have recorded trace data | 6 | PASS | S6: "When set, the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 156 | How it works | Bit field: cannot interpret flags by decoding hex to a number | 6 | PASS | S6: "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 157 | How it works | In Python, sending service injects current context | 4 | PASS | S4: "on the sending service, inject the current context" |
| 158 | How it works | Receiving service extracts context, then sets it as current | 4 | PASS | S4: "On the receiving service, extract context, for example, from parsed HTTP headers, and then set them as the current trace context." |
| 159 | How it works | Use instrumentation libraries to propagate context | 4 | PASS | S4: "Use instrumentation libraries to propagate context." |
| 160 | How it works | `ConsoleSpanExporter` is in `opentelemetry-sdk` | 5 | PASS | S5: "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| 161 | How it works | You can use promtool to test your rules | 16 | PASS | S16: "You can use promtool to test your rules." |
| 162 | How it works | `promtool check config` checks config files | 26 | PASS | S26: "promtool check config / Check if the config files are valid or not." |
| 163 | How it works | `promtool check rules` checks rule files | 26 | PASS | S26: "promtool check rules / Check if the rule files are valid or not." |
| 164 | How it works | `promtool test rules` runs unit tests | 26 | PASS | S26: "promtool test rules / Unit tests for rules." |
| 165 | How it works | Test file has a list of rule files | 16 | PASS | S16: "This is a list of rule files to consider for testing." |
| 166 | How it works | Input series use an expanding notation | 16 | PASS | S16: "This uses expanding notation." |
| 167 | How it works | `_` is a missing sample from scrape | 16 | PASS | S16: "'_' represents a missing sample from scrape" |
| 168 | How it works | Alert test lists union of firing alerts for the alertname in one test case | 16 | PASS | S16: "you have to list the union of all the firing alerts for the alertname under a single <alert_test_case>." |
| 169 | How it works | To test not firing, mention fields and leave `exp_alerts` empty | 16 | PASS | S16: "If you want to test if an alerting rule should not be firing, then you can mention the above fields and leave 'exp_alerts' empty." |
| 170 | How it works | PromQL expr test names expression, eval time, expected samples | 16 | PASS | S16: "expr: <string>", "eval_time: <duration>", "Expected samples at the given evaluation time. exp_samples:" |
| 171 | Try it | Run record: date, versions, shell, `HOME`, `/work`, `/venv` | none | N/A | Record of the page's own run. |
| 172 | Try it | Listen addresses, gRPC port default, `instance_interface_names` error, sockets, trusted network advice, no cloud account | none | N/A | Record of the tutorial's own run and advice. |
| 173 | Try it | Choices that no source gives; what the tutorial did not run | none | N/A | The tutorial's own choices and scope. |
| 174 | Try it | Prometheus docs provide precompiled binaries for most official components | 30 | PASS | S30: "We provide precompiled binaries for most official Prometheus components." |
| 175 | Try it | Docker run is `docker run -p 9090:9090 prom/prometheus` | 30 | PASS | S30: "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| 176 | Try it | Loki docs: install Loki and Alloy with Docker or Compose for evaluating, testing, developing | 39 | PASS | S39: "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 177 | Try it | Tutorial followed neither Docker page; installed release binaries | none | N/A | The tutorial's own choice. |
| 178 | Try it | Install record: download times, SHA-256 checks, prefixes, limits, `~/.local/bin` | none | N/A | Record of the page's own run. |
| 179 | Try it | OTel venv, SDK 1.45.2, wheel hash check | none | N/A | Record of the page's own run. |
| 180 | Try it | Step 1 app description and `app.py` code | none | N/A | The tutorial's own app. |
| 181 | Try it | Step 1 run commands and output | none | N/A | Record of the page's own run. |
| 182 | Try it | Step 1: `# HELP`/`# TYPE` lines are comments for help text and type | 17 | PASS | S17: "Lines with a # as the first non-whitespace character are comments ... ignored unless the first token after # is either HELP or TYPE"; heading "Comments, help text, and type information" |
| 183 | Try it | Step 1: name ends in `_total`, convention for counters | 12 | PASS | S12: "By convention, time series containing float counters have a name ending on _total" |
| 184 | Try it | Step 1: counts of 5, 1, 2, 1; `other` label | none | N/A | The page's own run and choice. |
| 185 | Try it | Step 1: gauge is a value that can go up and down | 10 | PASS | S10: "can arbitrarily go up and down." |
| 186 | Try it | Step 1: histogram buckets are cumulative counters | 10 | PASS | S10: "cumulative counters for the observation buckets" |
| 187 | Try it | Step 1: bucket counts and sum values | none | N/A | Record of the page's own run. |
| 188 | Try it | Step 2: `prometheus.yml` and `rules.yml` files | none | N/A | The tutorial's own files. |
| 189 | Try it | Step 2: `promtool check` run and output | none | N/A | Record of the page's own run. |
| 190 | Try it | Step 2: targets discovered via service discovery or static configuration | 8 | PASS | S8: "targets are discovered via service discovery or static configuration" |
| 191 | Try it | Step 2: recording rule takes `rate()` first, then `sum by (job)`, as the docs say | 13 | PASS | S13: "always take a rate() first, then aggregate." |
| 192 | Try it | Step 2: default comparison drops false elements | 40 | PASS | S40: "vector elements between which the comparison result is false get dropped from the result vector" |
| 193 | Try it | Step 2: `bool` returns 0 or 1 rather than filtering | 40 | PASS | S40: "Their behavior can be modified by providing bool after the operator, which will return 0 or 1 for the value rather than filtering." |
| 194 | Try it | Step 2: `for` 15 s means pending until returned that long | 14 | PASS | S14: "Alerts are considered firing once they have been returned for this long. Alerts which have not yet fired for long enough are considered pending." |
| 195 | Try it | Step 2: `AppDown` fires when `up` is 0; `up` is 0 if scrape failed | 11 | PASS | S11: "or 0 if the scrape failed." |
| 196 | Try it | Step 2: both alerts carry `severity: page` label and `summary` annotation | 15 | PASS | S15: "The labels clause allows specifying a set of additional labels to be attached to the alert." / "The annotations clause specifies a set of informational labels" |
| 197 | Try it | Step 2: `promtool check config` / `check rules` check files | 26 | PASS | S26: "Check if the config files are valid or not." / "Check if the rule files are valid or not." |
| 198 | Try it | Step 2: check rules works without starting a Prometheus server | 14 | PASS | S14: "To quickly check whether a rule file is syntactically correct without starting a Prometheus server, you can use Prometheus's promtool" |
| 199 | Try it | Step 2: results `SUCCESS`, `3 rules found`, no server running | none | N/A | Record of the page's own run. |
| 200 | Try it | Step 3: `promtool test rules` runs unit tests | 26 | PASS | S26: "Unit tests for rules." |
| 201 | Try it | Step 3: a test file lists the rule files to consider | 16 | PASS | S16: "This is a list of rule files to consider for testing." |
| 202 | Try it | Step 3: docs read `a+bxn` as "series starts at a, then n further samples incrementing by b" | 16 | PASS | S16: "Read this as series starts at a, then n further samples incrementing by b." |
| 203 | Try it | Step 3: test files, run, output, exit statuses, reading of the tests | none | N/A | The tutorial's own tests and the record of its run. |
| 204 | Try it | Step 4: `alertmanager.yml` and `amtool` commands and output | none | N/A | The tutorial's own file and the record of its run. |
| 205 | Try it | Step 4: docs describe `group_wait` as time before first notification for a new group | 24 | PASS | S24: "How long to wait before sending the first notification for a new group of alerts." |
| 206 | Try it | Step 4: docs describe `repeat_interval` as time before repeating last notification | 24 | PASS | S24: "How long to wait before repeating the last notification." |
| 207 | Try it | Step 4: every alert enters at top-level route, then traverses children | 24 | PASS | S24: "Every alert enters the routing tree at the configured top-level route ... It then traverses the child nodes." |
| 208 | Try it | Step 4: config page shows `amtool check-config` for UTF-8 strict mode | 24 | PASS | S24: "amtool check-config config.yml" under "You can use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode" |
| 209 | Try it | Step 4: no running Alertmanager server needed | 24 | PASS | S24: "You do not need a running Alertmanager server to do this." |
| 210 | Try it | Step 4: README says `amtool` can visualize routes as a text tree | 25 | PASS | S25: "amtool allows you to visualize the routes of your configuration in form of text tree view." |
| 211 | Try it | Step 4: README says it can test routing with the label set of an alert | 25 | PASS | S25: "Also you can use it to test the routing by passing it label set of an alert" |
| 212 | Try it | Step 4: README writes `amtool config routes` | 25 | PASS | S25: "$ amtool config routes --alertmanager.url=http://localhost:9093" |
| 213 | Try it | Step 4: README writes `amtool config routes test` | 25 | PASS | S25: "$ amtool config routes test --config.file=doc/examples/simple.yml ..." |
| 214 | Try it | Step 4: README does not write `config routes show` | 25 | PASS | S25 has no "routes show" text (search found 0 matches). |
| 215 | Try it | Step 4: installed `amtool --help` writes `amtool config routes [show]` and says the second command tests alert routing and returns receiver names | none | FAIL | Uncited fact about a tool. It is not in the run record: the page says it was "read after the run and not recorded in it". No file in `pages/` has it. Fix: delete it, or say only what S25 says: "it prints out all receivers the alert would match". |
| 216 | Try it | Step 5: `--config.file` is the Prometheus configuration file path | 29 | PASS | S29: "--config.file Prometheus configuration file path." |
| 217 | Try it | Step 5: `--storage.tsdb.path` is the base path for metrics storage | 29 | PASS | S29: "--storage.tsdb.path Base path for metrics storage." |
| 218 | Try it | Step 5: `--web.listen-address` is the address for UI, API, telemetry | 29 | PASS | S29: "Address to listen on for UI, API, and telemetry." |
| 219 | Try it | Step 5: `--cluster.listen-address=` stops Alertmanager listening for peer requests | 25 | PASS | S25: "setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 220 | Try it | Step 5: `/-/ready` returns 200 when Prometheus is ready | 28 | PASS | S28: "This endpoint returns 200 when Prometheus is ready to serve traffic" |
| 221 | Try it | Step 5: API response format is JSON | 27 | PASS | S27: "The API response format is JSON." |
| 222 | Try it | Step 5: `/api/v1/query` evaluates an instant query at a single point in time | 27 | PASS | S27: "The following endpoint evaluates an instant query at a single point in time: GET /api/v1/query" |
| 223 | Try it | Step 5: `up` value 1 means healthy/reachable | 11 | PASS | S11: "1 if the instance is healthy, i.e. reachable" |
| 224 | Try it | Step 5: the function interpolates within the bucket | 13 | PASS | S13: "the histogram_quantile() function interpolates the quantile value within the bucket the quantile value falls into." |
| 225 | Try it | Step 5: for classic histograms assumes uniform distribution in the bucket | 13 | PASS | S13: "For classic histograms ... it assumes a uniform distribution of observations within the bucket" |
| 226 | Try it | Step 5: docs use `rate()` to specify the time window | 13 | PASS | S13: "Use the rate() function to specify the time window for the quantile calculation." |
| 227 | Try it | Step 5: other bullets (flags choice, ports, query results, arithmetic) | none | N/A | The page's own run record, choices and arithmetic. |
| 228 | Try it | Step 6: helper functions, commands, output | none | N/A | The tutorial's own helpers and the record of its run. |
| 229 | Try it | Step 6: `/alerts` endpoint returns a list of all active alerts | 27 | PASS | S27: "The /alerts endpoint returns a list of all active alerts." |
| 230 | Try it | Step 6: alert is pending until returned for the `for` time | 14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 231 | Try it | Step 6: README shows `amtool silence add alertname=Test_Alert` | 25 | PASS | S25: "$ amtool silence add alertname=Test_Alert" |
| 232 | Try it | Step 6: Alertmanager page says silences are configured in the web interface | 23 | PASS | S23: "Silences are configured in the web interface of the Alertmanager." |
| 233 | Try it | Step 6: no page describes `--silenced` or `suppressed` | none | N/A | Statement about the tutorial's own reading; search of `pages/` finds neither term. |
| 234 | Try it | Step 6: AppDown `up` was 0 because scrape failed | 11 | PASS | S11: "or 0 if the scrape failed." |
| 235 | Try it | Step 6: other bullets (states, UTC column, silenced alert not listed) | none | N/A | Record of the page's own run. |
| 236 | Try it | Step 7: docs list a complete filesystem configuration; tutorial changed ports and folder (`/tmp/loki` on the page) | 37 | PASS | S37: "This is a complete configuration to deploy Loki backed by the filesystem." and "path_prefix: /tmp/loki" |
| 237 | Try it | Step 7: config reference describes the setting as "Enable anonymous usage reporting" | 38 | PASS | S38: "# Enable anonymous usage reporting." |
| 238 | Try it | Step 7: `loki.yml`, `push.py`, commands, output | none | N/A | The tutorial's own files and the record of its run. |
| 239 | Try it | Step 7: `/ready` returns 200 when Loki is ready | 36 | PASS | S36: "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 240 | Try it | Step 7: entry timestamp is a string, as the API needs | 36 | PASS | S36: "you must send the timestamp as a string and not a number" |
| 241 | Try it | Step 7: without `service_name`, Loki uses first non-empty value from a list | 32 | PASS | S32: "Otherwise, Loki looks for the first non-empty value from the following labels, in order" |
| 242 | Try it | Step 7: reference says Loki can discover and add log levels during ingestion | 38 | PASS | S38: "# Discover and add log levels during ingestion, if not present already." |
| 243 | Try it | Step 7: no page names the key `detected_level` | none | N/A | Statement about the tutorial's own reading; search of `pages/` finds 0 matches. |
| 244 | Try it | Step 7: line filter is a distributed grep and discards non-matching lines | 34 | PASS | S34: "does a distributed grep over the aggregated logs from the matching log streams ... discarding those lines that do not match" |
| 245 | Try it | Step 7: `limit` is the max entries, default 100 | 36 | PASS | S36: "limit: The max number of entries to return. It defaults to 100." |
| 246 | Try it | Step 7: `count_over_time` counts entries per stream in the range | 35 | PASS | S35: "counts the entries for each log stream within the given range." |
| 247 | Try it | Step 7: `logfmt` parses each line to extract labels; next stage filters with them | 34 | PASS | S34: "then parses each log line to extract more labels and filter with them." |
| 248 | Try it | Step 7: query endpoints return statistics | 36 | PASS | S36: "return a set of statistics about the query execution." |
| 249 | Try it | Step 7: result values (69 lines, 204, 42) | none | N/A | Record of the page's own run. |
| 250 | Try it | Step 8: `ConsoleSpanExporter` is in `opentelemetry-sdk` | 5 | PASS | S5: "included in the opentelemetry-sdk package." |
| 251 | Try it | Step 8: passes context by hand, as the Python docs show | 4 | PASS | S4: "Manual context propagation" with inject/extract example |
| 252 | Try it | Step 8: same page says to use instrumentation libraries | 4 | PASS | S4: "Use instrumentation libraries to propagate context." |
| 253 | Try it | Step 8: script, run, output | none | N/A | The tutorial's own script and the record of its run. |
| 254 | Try it | Step 8: header has four fields | 6 | PASS | S6: "It has four fields:" |
| 255 | Try it | Step 8: right-most bit set means caller may have recorded trace data | 6 | PASS | S6: "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 256 | Try it | Step 8: flags are a bit field, cannot be read as a number | 6 | PASS | S6: "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 257 | Try it | Step 8: no page names the other bit set in `03` | none | N/A | Statement about the tutorial's own reading; S6 says only "only supports a single flag called sampled". |
| 258 | Try it | Step 8: span with `trace_id` but no `parent_id` is a root span | 41 | PASS | S41: "That’s how you know it’s the root span." (after the `parent_id` null example) |
| 259 | Try it | Step 8: with no traceparent header, vendor creates new trace-id and parent-id | 6 | PASS | S6: "the vendor creates a new trace-id and parent-id that represents the current request." |
| 260 | Try it | Step 8: five checks `True`; case 2 shows broken propagation | none | N/A | Record of the page's own run. |
| 261 | How a tester uses it | A counter can only increase or be reset to zero on restart | 10 | PASS | S10: "value can only increase or be reset to zero on restart" |
| 262 | How a tester uses it | `up` is 1 if healthy/reachable, 0 if scrape failed | 11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 263 | How a tester uses it | SRE book counts an HTTP 200 with wrong content as an implicit error | 7 | PASS | S7: "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 264 | How a tester uses it | Step 1, 5, 6 run facts (nine requests, totals, only `AppHighErrorRatio` reported) | none | N/A | Record of the page's own run. |
| 265 | How a tester uses it | A test can expect an alert not to fire with empty `exp_alerts` | 16 | PASS | S16: "leave 'exp_alerts' empty." |
| 266 | How a tester uses it | Every alert enters at top-level route then traverses children | 24 | PASS | S24: "It then traverses the child nodes." |
| 267 | How a tester uses it | Alert was `pending` first, then `firing`, because of `for` | 14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 268 | How a tester uses it | `wait_for` polls `/api/v1/alerts` | 27 | PASS | S27: "GET /api/v1/alerts" |
| 269 | How a tester uses it | Docs say not to use high-cardinality labels such as user IDs | 18 | PASS | S18: "Do not use labels to store dimensions with high cardinality (many different label values), such as user IDs" |
| 270 | How a tester uses it | Loki: too many label combinations leads to too many streams | 33 | PASS | S33: "Too many label value combinations leads to too many streams." |
| 271 | How a tester uses it | Label `job="app"` selected stream; line filter kept `code=500` lines | 34 | PASS | S34: "The line filter expression does a distributed grep over the aggregated logs from the matching log streams." The run part is the page's own record. |
| 272 | How a tester uses it | With context propagation signals can be correlated wherever generated | 3 | PASS | S3: "signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated" |
| 273 | Common mistakes | `rate` only with counters | 13 | PASS | S13: "rate should only be used with counters" |
| 274 | Common mistakes | On gauge floats result is nonsensical but no complaint | 12 | PASS | S12: "will most likely produce a nonsensical result, but the query will be processed without complains." |
| 275 | Common mistakes | Take `rate()` first, then aggregate | 13 | PASS | S13: "always take a rate() first, then aggregate." |
| 276 | Common mistakes | Otherwise `rate()` cannot detect counter resets | 13 | PASS | S13: "Otherwise rate() cannot detect counter resets when your target restarts." |
| 277 | Common mistakes | Do not use a counter for a value that can decrease | 10 | PASS | S10: "Do not use a counter to expose a value that can decrease." |
| 278 | Common mistakes | Docs example: running processes, use a gauge | 10 | PASS | S10: "do not use a counter for the number of currently running processes; instead use a gauge." |
| 279 | Common mistakes | Prometheus implements pre-calculated quantiles as summary | 20 | PASS | S20: "Prometheus implements this approach in the form of a metric type called summary." |
| 280 | Common mistakes | Cannot recalculate quantiles for another window or percentile, cannot aggregate quantiles | 20 | PASS | S20: "you cannot “recalculate” the quantiles later if you desire another time window or another percentile, and most importantly, you cannot aggregate quantiles" |
| 281 | Common mistakes | Do not use labels for unbounded values | 18 | PASS | S18: "Do not use labels to store dimensions with high cardinality (many different label values), such as user IDs, email addresses, or other" |
| 282 | Common mistakes | Loki penalties: large index, small chunks | 33 | PASS | S33: "The penalties for that in Loki are a large index and small chunks in the store" |
| 283 | Common mistakes | Not yet fired long enough = pending | 14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 284 | Common mistakes | Active silence: no notifications sent for that alert | 23 | PASS | S23: "If they do, no notifications will be sent out for that alert." |
| 285 | Common mistakes | Value of `up` says whether scrape worked | 11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 286 | Common mistakes | SRE book counts HTTP 200 with wrong content as implicit error | 7 | PASS | S7: "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 287 | Common mistakes | Distinguish latency of successes and failures | 7 | PASS | S7: "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| 288 | Common mistakes | `check rules` checks rule files; `test rules` runs unit tests | 26 | PASS | S26: "Check if the rule files are valid or not." / "Unit tests for rules." |
| 289 | Common mistakes | Series not present until something happens are hard to handle | 19 | PASS | S19: "Time series that are not present until something happens are difficult to deal with" |
| 290 | Common mistakes | Export default value such as 0 | 19 | PASS | S19: "export a default value such as 0 for any time series you know may exist in advance." |
| 291 | Common mistakes | Push timestamp must be string, else 400 | 36 | PASS | S36: "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 292 | Common mistakes | Line filter discards lines that do not match the case-sensitive expression | 34 | PASS | S34: "discarding those lines that do not match the case-sensitive expression." |
| 293 | Common mistakes | No traceparent: vendor creates new trace-id and parent-id | 6 | PASS | S6: "the vendor creates a new trace-id and parent-id that represents the current request." |
| 294 | Common mistakes | Flags are a bit field, cannot be read as a number | 6 | PASS | S6: "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 295 | Common mistakes | Port bullet, step 6/8 run facts, own-rule remarks (`AppHighErrorRatio` counts 500–599, histogram has no status label) | none | N/A | Record of the page's own run and config, and the tutorial's own advice. |
| 296 | What a tester can check | "Tutorial advice" callout (13 items) | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the page does not support: `promtool` commands (S26), empty `exp_alerts` (S16), `amtool config routes test` (S25), `up` (S11), and `pending`/`firing` (S14) are all supported elsewhere. |
| 297 | Key words | Observability | none | PASS | W: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 298 | Key words | Instrumentation | none | PASS | W: "your application must be properly instrumented" |
| 299 | Key words | Telemetry | none | PASS | W: "Telemetry refers to data emitted from a system and its behavior" |
| 300 | Key words | Metric | none | PASS | W: "Metrics are aggregations over a period of time of numeric data about your infrastructure or application" |
| 301 | Key words | Log | none | PASS | W: "A log is a timestamped message emitted by services or other components" |
| 302 | Key words | Span | none | PASS | W: "A span represents a single unit of work or operation" |
| 303 | Key words | Trace | none | PASS | W: "A trace is made of one or more spans" |
| 304 | Key words | Time series | none | PASS | H: "Every time series is uniquely identified by its metric name and optional key-value pairs called labels" |
| 305 | Key words | Label | none | PASS | H: "optional key-value pairs called labels" (same sentence) |
| 306 | Key words | Instance | none | PASS | H: "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 307 | Key words | Job | none | PASS | H: "A collection of instances with the same purpose is called a job" |
| 308 | Key words | up | none | PASS | H: "Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed" |
| 309 | Key words | Counter | none | PASS | H: "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart" |
| 310 | Key words | Gauge | none | PASS | H: "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down" |
| 311 | Key words | Histogram | none | PASS | H: "A histogram records observations by counting them in configurable buckets" |
| 312 | Key words | Summary | none | PASS | H: "Similar to a histogram, a summary samples observations" |
| 313 | Key words | PromQL | none | PASS | H: "Prometheus provides a functional query language called PromQL that lets the user select and aggregate time series data in real time" |
| 314 | Key words | Instant vector | none | PASS | H: "An instant vector is a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 315 | Key words | Range vector | none | PASS | H: "A range vector is a set of time series containing a range of data points over time for each time series" |
| 316 | Key words | Recording rule | none | PASS | H: "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series" |
| 317 | Key words | Pending | none | PASS | H: "Alerts which have not yet fired for long enough are considered pending" |
| 318 | Key words | Firing | none | PASS | H: "Alerts are considered firing once they have been returned for this long" |
| 319 | Key words | Alertmanager | none | PASS | H: "The Alertmanager takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 320 | Key words | Grouping | none | PASS | H: "Grouping categorizes alerts of similar nature into a single notification" |
| 321 | Key words | Inhibition | none | PASS | H: "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing" |
| 322 | Key words | Silence | none | PASS | H: "Silences are a straightforward way to simply mute alerts for a given time" |
| 323 | Key words | Routing tree | none | PASS | H: "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 324 | Key words | promtool | none | PASS | H: "You can use promtool to test your rules" |
| 325 | Key words | amtool | none | PASS | H: "The `amtool` command is a cli tool for interacting with the Alertmanager API" |
| 326 | Key words | Loki | none | PASS | W: "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus" |
| 327 | Key words | Log stream | none | PASS | H: "Labels allow Loki to organize and group together log messages into log streams" |
| 328 | Key words | LogQL | none | PASS | H: "All LogQL queries contain a log stream selector" |
| 329 | Key words | Context propagation | none | PASS | H: "Propagation is the mechanism that moves context between services and processes" |
| 330 | Key words | traceparent | none | PASS | H: "The `traceparent` HTTP header field identifies the incoming request in a tracing system" |
| 331 | Key words | Golden signals | none | PASS | H: "The Google SRE book says that the four golden signals of monitoring are latency, traffic, errors, and saturation" |
| 332 | Key words | Cardinality | none | PASS | H: "Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values" |

Open FAILs after round 8: 1

Changed after this round: Row 215 (step 4): the sentence about the `--help` text of the installed `amtool` was not in the run record and had no cite, so a checker could not verify it. It is removed. Step 4 now says only what the Alertmanager README (S25) says about `amtool config routes` and `amtool config routes test`, and that the tutorial ran the first command as `config routes show`, which the README does not write. The four "quote not in sources" notes (rows 91, 169, 194, and 205) are quotes that the page splits with `||` where the source has a `# ` comment marker at a line break; the checker joined the pieces, and all four rows are PASS.

## Round 9 (2026-11-19)

# Fact check: devops / monitoring-observability (round 9)

Notes: I read all of `page.md` and checked each cited source with Grep or Read. Quotes are exact except where I use "...". Layman and Bangla panels carry the same cites as the Technical panels, so I judged the facts once, in the Technical panels.

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page overview (signals, Prometheus, Alertmanager, Loki, OTel trace context, practice run) | none | N/A | Describes the page itself. |
| 2 | Lede | Page scope; run needs no cloud account and no Docker; order of pages | none | N/A | Describes the page and its own run; the links are not facts. |
| 3 | What it is | Observability lets you understand a system from the outside without knowing its inner workings | 1 | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 4 | What it is | The application must be properly instrumented | 1 | PASS | "your application must be properly instrumented" |
| 5 | What it is | The code must emit traces, metrics, logs | 1 | PASS | "the application code must emit signals such as traces, metrics, and logs" |
| 6 | What it is | Telemetry is data emitted from a system and its behavior | 1 | PASS | "Telemetry refers to data emitted from a system and its behavior" |
| 7 | What it is | OpenTelemetry is the mechanism for instrumenting code | 1 | PASS | "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable" |
| 8 | What it is | SRE book definition of monitoring | 7 | PASS | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 9 | What it is | White-box monitoring | 7 | PASS | "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring | 7 | PASS | "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics definition | 1 | PASS | "Metrics are aggregations over a period of time of numeric data about your" |
| 12 | What it is | Log definition | 1 | PASS | "A log is a timestamped message emitted by services or other components." |
| 13 | What it is | Span definition | 1 | PASS | "A span represents a single unit of work or operation." |
| 14 | What it is | Trace is made of spans; first span is the root span | 1 | PASS | "A trace is made of one or more spans. The first span represents the root span." |
| 15 | What it is | Distributed trace records the path of a request through services | 1 | PASS | "records the path taken by a single request ... as it propagates through multiple services in an architecture" |
| 16 | What it is | Prometheus is an open-source systems monitoring and alerting toolkit | 8 | PASS | "is an open-source systems" (line 118, wrapped) |
| 17 | What it is | Prometheus collects and stores metrics as time series data | 8 | PASS | "Prometheus collects and stores its metrics as time series data" |
| 18 | What it is | Alertmanager handles alerts sent by clients such as the Prometheus server | 23 | PASS | "handles alerts sent by client applications such as the Prometheus server." |
| 19 | What it is | Loki description | 31 | PASS | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 20 | What it is | Loki does not index log contents | 31 | PASS | "Unlike other logging systems, Loki does not index the contents of the logs" |
| 21 | What it is | OpenTelemetry is open source and vendor- and tool-agnostic | 2 | PASS | "Open source, as well as vendor- and tool-agnostic" |
| 22 | What it is | OpenTelemetry is not a backend | 2 | PASS | "OpenTelemetry is not an observability backend itself." |
| 23 | How it works | Ecosystem has many components, many optional | 8 | PASS | "consists of multiple components, many of which are optional" |
| 24 | How it works | Server scrapes and stores; client libraries instrument; alertmanager handles alerts | 8 | PASS | "which scrapes and stores time series data / client libraries for instrumenting application code / an alertmanager to handle alerts" |
| 25 | How it works | Scrapes from jobs; stores samples locally; runs rules; Grafana visualizes | 8 | PASS | "Prometheus scrapes metrics from instrumented jobs ... It stores all scraped samples locally and runs rules over this data ... Grafana or other API consumers can be used to visualize the collected data." |
| 26 | How it works | Pull model over HTTP | 8 | PASS | "time series collection happens via a pull model over HTTP" |
| 27 | How it works | Prometheus stores data as time series | 8 | PASS | "collects and stores its metrics as time series data" |
| 28 | How it works | Series identified by metric name and labels | 9 | PASS | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| 29 | How it works | Temporary derived series from queries | 9 | PASS | "Prometheus may generate temporary derived time series" |
| 30 | How it works | Instance and job definitions | 11 | PASS | "an endpoint you can scrape is called an instance, usually corresponding to a single process. A collection of instances with the same purpose ... is called a job." |
| 31 | How it works | Automatic labels `job` and `instance` | 11 | PASS | "it attaches some labels automatically ... job: The configured job name that the target belongs to. instance: The <host>:<port> part of the target's URL that was scraped." |
| 32 | How it works | `up` sample per scrape, value 1 or 0, useful for availability | 11 | PASS | "Prometheus stores a sample in the following time series: up{...}: 1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." / "useful for instance availability monitoring." |
| 33 | How it works | Four core metric types | 10 | PASS | "offer four core metric types" |
| 34 | How it works | Counter definition | 10 | PASS | "value can only increase or be reset to zero on restart" |
| 35 | How it works | Do not use a counter for a value that can decrease | 10 | PASS | "Do not use a counter to expose a value that can decrease." |
| 36 | How it works | Gauge definition | 10 | PASS | "arbitrarily go up and down." |
| 37 | How it works | Histogram: buckets, sum | 10 | PASS | "by counting them in configurable buckets. It also provides a sum of all observed values." |
| 38 | How it works | Classic histogram series (buckets, sum, count) | 10 | PASS | "A classic histogram, however, consists of multiple time series of simple float samples ... cumulative counters for the observation buckets ... the total sum ... the count of events" |
| 39 | How it works | Summary samples observations | 10 | PASS | "Similar to a histogram, a summary samples observations" |
| 40 | How it works | Summary vs histogram quantile calculation | 20 | PASS | "summaries calculate streaming φ-quantiles within the instrumented program and expose them directly, while histograms expose bucketed observation counts and the calculation of quantiles ... happens on the Prometheus server using the histogram_quantile() function" |
| 41 | How it works | Summary quantiles and windows cannot be recalculated | 20 | PASS | "Other φ-quantiles and sliding windows cannot be calculated later." |
| 42 | How it works | Metric name: single-word prefix; unit suffix in plural | 18 | PASS | "SHOULD have a (single-word) application prefix" / "SHOULD have a suffix describing the unit, in plural form" |
| 43 | How it works | Label combinations make new series; no high-cardinality labels | 18 | PASS | "every unique combination of key-value label pairs represents a new time series, which can dramatically increase the amount of data stored. Do not use labels to store dimensions with high cardinality" |
| 44 | How it works | Three service types; monitor client and server; differences useful | 19 | PASS | "broken down into three types: online-serving, offline-processing, and batch jobs" / "monitored on both the client and server side. If the two sides see different behaviors, that is very useful information for debugging." |
| 45 | How it works | Missing series are hard; export default 0 | 19 | PASS | "Time series that are not present until something happens are difficult to deal with ... export a default value such as 0 for any time series you know may exist in advance." |
| 46 | How it works | Text format by default since 2.0 | 17 | PASS | "As of Prometheus version 2.0, all processes that expose metrics to Prometheus must use a text format, by default." |
| 47 | How it works | Comment, HELP and TYPE rules | 17 | PASS | "Lines with a # as the first non-whitespace character are comments. They are ignored unless the first token after # is either HELP or TYPE." / "If the token is TYPE, exactly two more tokens are expected ... counter, gauge, histogram, summary, or untyped" |
| 48 | How it works | Remaining lines are samples, one per line | 17 | PASS | "The remaining lines describe samples (one per line)" |
| 49 | How it works | PromQL definition | 12 | PASS | "a functional query language called PromQL ... lets the user select and aggregate time series data in real time." |
| 50 | How it works | Instant and range queries | 12 | PASS | "an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time" |
| 51 | How it works | Instant vector and range vector definitions | 12 | PASS | "Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp / Range vector - a set of time series containing a range of data points over time for each time series" |
| 52 | How it works | Instant vector selectors | 12 | PASS | "single sample value for each at a given timestamp (point in time)" |
| 53 | How it works | Label matchers in curly braces | 12 | PASS | "appending a comma-separated list of label matchers in curly braces ({})" |
| 54 | How it works | `_total` convention | 12 | PASS | "By convention, time series containing float counters have a name ending on _total" |
| 55 | How it works | Comparison between instant vector and scalar drops false elements | 40 | PASS | "vector elements between which the comparison result is false get dropped from the result vector" |
| 56 | How it works | `rate()` definition and automatic reset adjustment | 13 | PASS | "calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for." |
| 57 | How it works | `rate` only with counters | 13 | PASS | "rate should only be used with counters" |
| 58 | How it works | `rate` on gauges gives nonsense without complaint | 12 | PASS | "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains." |
| 59 | How it works | Take `rate()` first, then aggregate | 13 | PASS | "always take a rate() first, then aggregate. Otherwise rate() cannot detect counter resets when your target restarts." |
| 60 | How it works | `histogram_quantile` definition | 13 | PASS | "histogram_quantile(φ scalar, b instant-vector) calculates the φ-quantile (0 ≤ φ ≤ 1) from a classic histogram or from" a native histogram |
| 61 | How it works | Use `rate()` for the time window of the quantile | 13 | PASS | "Use the rate() function to specify the time window for the quantile" |
| 62 | How it works | `le` must be in the `by` clause | 13 | PASS | "Since the le label is required by ... included in the by clause." |
| 63 | How it works | Recording rules precompute | 14 | PASS | "Recording rules allow you to precompute frequently needed or computationally expensive" expressions |
| 64 | How it works | Rule group, sequential run | 14 | PASS | "Recording and alerting rules exist in a rule group. Rules within a group are run sequentially at a regular interval, with the same evaluation time." |
| 65 | How it works | Recording rule names must be valid metric names | 14 | PASS | "valid metric names." |
| 66 | How it works | Alert time series become pending or firing | 14 | PASS | "all resultant time series become pending/firing alerts." |
| 67 | How it works | Firing vs pending | 14 | PASS | "Alerts are considered firing once they have been returned for this long. Alerts which have not yet fired for long enough are considered pending." |
| 68 | How it works | Labels and annotations clauses | 15 | PASS | "The labels clause allows specifying a set of additional labels to be attached" / "The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| 69 | How it works | `ALERTS` synthetic series | 15 | PASS | "For pending and firing alerts, Prometheus also stores synthetic time series of the form ALERTS{...}" |
| 70 | How it works | Alerting rules are not a notification solution | 15 | PASS | "good at figuring what is broken right now, but they are not a fully-fledged notification solution." |
| 71 | How it works | Alerting has two parts; rules send to Alertmanager | 22 | PASS | "Alerting with Prometheus is separated into two parts. Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| 72 | How it works | Alertmanager dedupes, groups, routes | 23 | PASS | "It takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 73 | How it works | Grouping | 23 | PASS | "Grouping categorizes alerts of similar nature into a single notification." |
| 74 | How it works | Inhibition | 23 | PASS | "Inhibition is a concept of suppressing notifications for certain alerts if" other alerts are firing |
| 75 | How it works | Silences and matchers | 23 | PASS | "Silences are a straightforward way to simply mute alerts for a given time. A silence is configured based on matchers, just like the routing tree." |
| 76 | How it works | Routing tree entry and traversal | 24 | PASS | "Every alert enters the routing tree at the configured top-level route, which must match all alerts ... It then traverses the child nodes. If continue is set to false, it stops after the first matching child." |
| 77 | How it works | No matching child; inheritance | 24 | PASS | "the alert is handled based on the configuration parameters of the current node." / "are inherited from its parent node if" not set |
| 78 | How it works | `amtool` is a cli tool, bundled | 25 | PASS | "amtool is a cli tool for interacting with the Alertmanager API. It is bundled with all releases of Alertmanager." |
| 79 | How it works | `amtool` validates UTF-8 strict mode without a server | 24 | PASS | "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server. You do not need a running Alertmanager server to do this." |
| 80 | How it works | Alert on symptoms; few alerts | 21 | PASS | "Aim to have as few alerts as possible, by alerting on symptoms that are associated with end-user pain" / "To summarize: keep alerting simple, alert on symptoms, have good consoles..." |
| 81 | How it works | Page on user-visible errors | 21 | PASS | "For error rates, page on user-visible errors." |
| 82 | How it works | Four golden signals | 7 | PASS | "The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four." |
| 83 | How it works | Errors definition; latency of successes vs failures | 7 | PASS | "The rate of requests that fail, either explicitly ..., implicitly ..., or by policy" / "important to distinguish between the latency of successful requests and the latency of failed requests" |
| 84 | How it works | Loki vs Prometheus: logs, push | 31 | PASS | "Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 85 | How it works | Labels organize streams | 32 | PASS | "They allow Loki to organize and group together log messages into log streams." |
| 86 | How it works | `service_name` rules and `unknown_service` | 32 | PASS | "If a service_name label is already present on the stream, Loki uses it directly. Otherwise, Loki looks for the first non-empty value from the following labels, in order" / "a value of unknown_service is applied." |
| 87 | How it works | Label use and penalties | 33 | PASS | "Use labels for things like regions, clusters, servers, applications, namespaces, and environments." / "Too many label value combinations leads to too many streams. The penalties for that in Loki are a large index and small chunks in the store, which in turn can actually reduce performance." / "don’t add a label for something until you know you need it!" |
| 88 | How it works | LogQL selector and pipeline | 34 | PASS | "All LogQL queries contain a log stream selector. Optionally, the log stream selector can be followed by a log pipeline. A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams." |
| 89 | How it works | Selector syntax and operators | 34 | PASS | "one or more comma-separated key-value pairs" / "=: exactly equal / !=: not equal / =~: regex matches / !~: regex does not match" |
| 90 | How it works | Line filter and label filter | 34 | PASS | "The line filter expression does a distributed grep" / "discarding those lines that do not match the case-sensitive expression." / "Label filter expression allows filtering log line using their original and extracted labels." |
| 91 | How it works | Metric queries and `count_over_time` | 35 | PASS | "Metric queries extend log queries by applying a function to log query results." / "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 92 | How it works | Push timestamp must be a string, else 400 | 36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 93 | How it works | `query_range`, `limit` default 100, `start` default one hour ago | 36 | PASS | "/loki/api/v1/query_range is used to do a query over a range of time." / "limit: The max number of entries to return. It defaults to 100." / "Defaults to one hour ago." |
| 94 | How it works | Query endpoints return statistics | 36 | PASS | "return a set of statistics about the query execution" |
| 95 | How it works | `/ready` and `/labels` | 36 | PASS | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." / "retrieves the list of known labels within a given time span." |
| 96 | How it works | Context propagation correlates signals; propagation moves context | 3 | PASS | "signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated" / "Propagation is the mechanism that moves context between services and processes." |
| 97 | How it works | Propagation handled by libraries, transparent | 3 | PASS | "Propagation is usually handled by instrumentation libraries and is transparent to the user." |
| 98 | How it works | OTel uses W3C Trace Context headers | 4 | PASS | "OpenTelemetry provides a text-based approach to propagate context to remote services using the W3C Trace Context" |
| 99 | How it works | `traceparent` identifies request; four fields | 6 | PASS | "The traceparent HTTP header field identifies the incoming request in a tracing system. It has four fields:" |
| 100 | How it works | trace-id 16 bytes; parent-id 8 bytes; all zeroes forbidden | 6 | PASS | "trace-id = 32HEXDIGLC ; 16 bytes array identifier. All zeroes forbidden / parent-id = 16HEXDIGLC ; 8 bytes array identifier. All zeroes forbidden" |
| 101 | How it works | Flag bit meaning; bit field | 6 | PASS | "the least significant bit (right-most), denotes that the caller may have recorded trace data." / "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 102 | How it works | Python inject and extract | 4 | PASS | "on the sending service, inject the current context" / "On the receiving service, extract context, for example, from parsed HTTP" |
| 103 | How it works | Use instrumentation libraries to propagate | 4 | PASS | "Use instrumentation libraries to propagate context." |
| 104 | How it works | `ConsoleSpanExporter` in `opentelemetry-sdk` | 5 | PASS | "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| 105 | How it works | promtool tests rules | 16 | PASS | "You can use promtool to test your rules." |
| 106 | How it works | `promtool check config` / `check rules` / `test rules` | 26 | PASS | "Check if the config files are valid or not." / "Check if the rule files are valid or not." / "promtool test rules Unit tests for rules." |
| 107 | How it works | Test file, expanding notation, `_`, alert test union, empty `exp_alerts`, PromQL test fields | 16 | PASS | "a list of rule files to consider for testing" / "This uses expanding notation." / "'_' represents a missing sample from scrape" / "list the union of all the firing alerts for the alertname under a single <alert_test_case>" / "leave 'exp_alerts' empty" / "expr: <string> eval_time: <duration> exp_samples:" |
| 108 | Try it | Run date, versions, folder names | none | N/A | The page's own run record, labeled "the tutorial's run". |
| 109 | Try it | Listen addresses, gRPC port, `instance_interface_names` error, advice for step 7 | none | N/A | The page's own run record and advice. |
| 110 | Try it | Own choices; what was not run | none | N/A | The page describes its own work. |
| 111 | Try it | Install: precompiled binaries; Docker run command | 30 | PASS | "We provide precompiled binaries for most official Prometheus components." / "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| 112 | Try it | Loki docs: install Loki and Alloy with Docker | 39 | PASS | "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 113 | Try it | Install and checksum record, SHA-256 prefixes, limits | none | N/A | The page's own run record. |
| 114 | Try it | Step 1: app description, `app.py`, run commands, output | none | N/A | The tutorial's own app and run output. |
| 115 | Try it | Step 1: `# HELP` and `# TYPE` lines are comments | 17 | PASS | "ignored unless the first token after # is either HELP or TYPE" |
| 116 | Try it | Step 1: `app_requests_total` counter, `_total` convention | 12 | PASS | "By convention, time series containing float counters have a name ending on _total" |
| 117 | Try it | Step 1: gauge goes up and down | 10 | PASS | "arbitrarily go up and down." |
| 118 | Try it | Step 1: histogram buckets are cumulative counters | 10 | PASS | "cumulative counters for the observation buckets" |
| 119 | Try it | Step 2: `prometheus.yml` and `rules.yml`; run commands and output | none | N/A | The tutorial's own files and run output. |
| 120 | Try it | Step 2: targets found via static configuration | 8 | PASS | "targets are discovered via service discovery or static configuration" |
| 121 | Try it | Step 2: `rate()` first, then `sum by (job)` | 13 | PASS | "always take a rate() first, then aggregate." |
| 122 | Try it | Step 2: default drops false elements; `bool` returns 0 or 1 | 40 | PASS | "By default they filter. Their behavior can be modified by providing bool after the operator, which will return 0 or 1 for the value rather than filtering." |
| 123 | Try it | Step 2: `for` of 15 s means pending | 14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 124 | Try it | Step 2: `AppDown`, `up` is 0 if scrape failed; labels and annotation | 11, 15 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." / "The labels clause ..." / "The annotations clause ..." |
| 125 | Try it | Step 2: `promtool check config` and `check rules` description | 26 | PASS | "Check if the config files are valid or not." / "Check if the rule files are valid or not." |
| 126 | Try it | Step 2: the first command "checked `rules.yml` too, because the configuration lists it" | none | FAIL | This is a general claim about how `promtool check config` works, and it has no cite. S26 says only "Check if the config files are valid or not." Fix: drop "because the configuration lists it", or say only that the output showed "SUCCESS: 1 rule files found". |
| 127 | Try it | Step 2: rules can be checked without a server | 14 | PASS | "To quickly check whether a rule file is syntactically correct without starting" a Prometheus server |
| 128 | Try it | Step 3: `rules.test.yml` and `bad.test.yml`; exit statuses; output | none | N/A | The tutorial's own tests and run output. |
| 129 | Try it | Step 3: `promtool test rules` runs unit tests; test file lists rule files | 26, 16 | PASS | "promtool test rules Unit tests for rules." / "a list of rule files to consider for testing" |
| 130 | Try it | Step 3: `0+10x24` reading | 16 | PASS | "Read this as series starts at a, then n further samples incrementing by b." |
| 131 | Try it | Step 3: arithmetic of rates, what each test group checks, exit statuses | none | N/A | The tutorial's own arithmetic and run record. |
| 132 | Try it | Step 4: `alertmanager.yml`, run commands, output | none | N/A | The tutorial's own file and run output. |
| 133 | Try it | Step 4: `group_wait` and `repeat_interval` descriptions | 24 | PASS | "How long to wait before sending the first notification for a new group of" / "How long to wait before repeating the last notification." |
| 134 | Try it | Step 4: "The two receivers have no integration, so nothing is sent anywhere" | none | FAIL | This is a general claim about how Alertmanager receivers behave, and it has no cite. No source in the page's list says it. Fix: say only that the two receivers in the file have no integration settings, and leave out the effect. |
| 135 | Try it | Step 4: routing entry and traversal | 24 | PASS | "Every alert enters the routing tree at the configured top-level route" / "It then traverses the child nodes." |
| 136 | Try it | Step 4: configuration page shows `amtool check-config` for UTF-8; no server needed | 24 | PASS | "amtool check-config config.yml" / "You do not need a running Alertmanager server to do this." |
| 137 | Try it | Step 4: README text tree and routing test; two commands; `show` not in README | 25 | PASS | "amtool allows you to visualize the routes of your configuration in form of text tree view. Also you can use it to test the routing by passing it label set of an alert" / "$ amtool config routes ..." / "$ amtool config routes test ..." |
| 138 | Try it | Step 5: commands, output | none | N/A | The tutorial's own run. |
| 139 | Try it | Step 5: three flags | 29 | PASS | "--config.file Prometheus configuration file path." / "--storage.tsdb.path Base path for metrics storage." / "--web.listen-address ... Address to listen on for UI, API, and telemetry." |
| 140 | Try it | Step 5: `--cluster.listen-address=` stops peer requests | 25 | PASS | "setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 141 | Try it | Step 5: `/-/ready` returns 200 when ready | 28 | PASS | "This endpoint returns 200 when Prometheus is ready to serve traffic" |
| 142 | Try it | Step 5: JSON format; `/api/v1/query` instant query | 27 | PASS | "The API response format is JSON." / "evaluates an instant query at a single point in time" |
| 143 | Try it | Step 5: `up` value 1 means healthy | 11 | PASS | "1 if the instance is healthy, i.e. reachable" |
| 144 | Try it | Step 5: `histogram_quantile` result; interpolation; uniform distribution | 13 | PASS | "the histogram_quantile() function interpolates the quantile value within the bucket the quantile value falls into. For classic histograms ... it assumes a uniform distribution of observations within the bucket" |
| 145 | Try it | Step 5: "the rank of the 90th percentile is 0.9 times 9, which is 8.1. So the answer is in the bucket from 0.25 to 0.5" | none | FAIL | This explains how the quantile is found, and it has no cite. S13 does not say "rank". S20 says "φ*N among the N observations". Fix: add a cite to S20 for the rank rule, and keep the arithmetic as the tutorial's own. |
| 146 | Try it | Step 5: `rate()` left out; docs use `rate()` for the window | 13 | PASS | "Use the rate() function to specify the time window for the quantile" |
| 147 | Try it | Step 6: helper functions, commands, output | none | N/A | The tutorial's own code and run output. |
| 148 | Try it | Step 6: `/alerts` returns all active alerts | 27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 149 | Try it | Step 6: pending until `for` time | 14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 150 | Try it | Step 6: README `silence add`; silences configured in the web interface | 25, 23 | PASS | "$ amtool silence add alertname=Test_Alert" / "Silences are configured in the web interface of the Alertmanager." |
| 151 | Try it | Step 6: `AppDown` and `up` is 0 | 11 | PASS | "or 0 if the scrape failed." |
| 152 | Try it | Step 6: states seen in the run | none | N/A | The tutorial's own run record. |
| 153 | Try it | Step 7: complete filesystem config; `/tmp/loki`; `reporting_enabled` | 37, 38 | PASS | "This is a complete configuration to deploy Loki backed by the filesystem." / "path_prefix: /tmp/loki" / "Enable anonymous usage reporting." |
| 154 | Try it | Step 7: `loki.yml`, `push.py`, commands, output | none | N/A | The tutorial's own files and run output. |
| 155 | Try it | Step 7: `/ready` returns 200 when ready | 36 | PASS | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 156 | Try it | Step 7: push timestamp is a string | 36 | PASS | "you must send the timestamp as a string and not a number" |
| 157 | Try it | Step 7: `service_name` lookup | 32 | PASS | "Otherwise, Loki looks for the first non-empty value from the following labels, in order" |
| 158 | Try it | Step 7: Loki can add log levels at ingestion | 38 | PASS | "Discover and add log levels during ingestion, if not present already." |
| 159 | Try it | Step 7: line filter; `limit` default 100 | 34, 36 | PASS | "The line filter expression does a distributed grep" / "limit: The max number of entries to return. It defaults to 100." |
| 160 | Try it | Step 7: `count_over_time`; `logfmt` stage | 35, 34 | PASS | "counts the entries for each log stream within the given range." / "then parses each log line to extract more labels and filter with them." |
| 161 | Try it | Step 7: query endpoints return statistics | 36 | PASS | "return a set of statistics about the query execution" |
| 162 | Try it | Step 8: `ConsoleSpanExporter` in the SDK; context passed by hand; use libraries | 5, 4 | PASS | "included in the opentelemetry-sdk package." / "Use instrumentation libraries to propagate context." |
| 163 | Try it | Step 8: `otel_demo.py`, output, checks | none | N/A | The tutorial's own script and run output. |
| 164 | Try it | Step 8: four fields; flag bit; bit field | 6 | PASS | "It has four fields:" / "denotes that the caller may have recorded trace data." / "As this is a bit field, you cannot interpret flags by decoding the hex value" |
| 165 | Try it | Step 8: root span has `trace_id` but no `parent_id` | 41 | PASS | "Note that it has a trace_id field indicating the trace, but has no parent_id. That’s how you know it’s the root span." |
| 166 | Try it | Step 8: no `traceparent` header means a new trace-id and parent-id | 6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 167 | How a tester uses it | Counter can only increase or reset | 10 | PASS | "value can only increase or be reset to zero on restart" |
| 168 | How a tester uses it | `up` is 1 or 0; SRE counts HTTP 200 with wrong content as an error | 11, 7 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." / "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 169 | How a tester uses it | Empty `exp_alerts` expects no firing | 16 | PASS | "leave 'exp_alerts' empty" |
| 170 | How a tester uses it | Routing tree entry and traversal | 24 | PASS | "Every alert enters the routing tree at the configured top-level route ... It then traverses the child nodes." |
| 171 | How a tester uses it | Pending then firing; `/api/v1/alerts` | 14, 27 | PASS | "Alerts which have not yet fired for long enough are considered pending." / "GET /api/v1/alerts" |
| 172 | How a tester uses it | High-cardinality labels; too many streams | 18, 33 | PASS | "Do not use labels to store dimensions with high cardinality, such as user IDs" / "Too many label value combinations leads to too many streams." |
| 173 | How a tester uses it | Line filter keeps lines | 34 | PASS | "discarding those lines that do not match the case-sensitive expression." |
| 174 | How a tester uses it | Context propagation correlates signals | 3 | PASS | "signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated" |
| 175 | How a tester uses it | Run-record sentences (nine requests, step results, log counts) | none | N/A | The page's own run record. |
| 176 | Common mistakes | `rate` only with counters; gauge gives nonsense | 13, 12 | PASS | "rate should only be used with counters" / "nonsensical result, but the query will be processed without complains." |
| 177 | Common mistakes | `rate()` first, then aggregate | 13 | PASS | "always take a rate() first, then aggregate. Otherwise rate() cannot detect counter resets when your target restarts." |
| 178 | Common mistakes | Counter must not decrease; running-processes example | 10 | PASS | "do not use a counter for the number of currently running processes; instead use a gauge." |
| 179 | Common mistakes | Summary quantiles cannot be aggregated | 20 | PASS | "Prometheus implements this approach in the form of a metric type called summary." / "you cannot “recalculate” the quantiles later if you desire another time window or another percentile, and most importantly, you cannot aggregate quantiles" |
| 180 | Common mistakes | Unbounded labels; Loki penalties | 18, 33 | PASS | "Do not use labels to store dimensions with high cardinality" / "a large index and small chunks in the store" |
| 181 | Common mistakes | Pending vs firing | 14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 182 | Common mistakes | Silence: no notifications for a matching alert | 23 | PASS | "If they do, no notifications will be sent out for that alert." |
| 183 | Common mistakes | `up` says whether the scrape worked | 11 | PASS | "or 0 if the scrape failed." |
| 184 | Common mistakes | HTTP 200 with wrong content is an error | 7 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 185 | Common mistakes | Distinguish latency of successes and failures | 7 | PASS | "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| 186 | Common mistakes | `check rules` vs `test rules` | 26 | PASS | "Check if the rule files are valid or not." / "Unit tests for rules." |
| 187 | Common mistakes | Missing series; default 0 | 19 | PASS | "export a default value such as 0 for any time series you know may exist in advance." |
| 188 | Common mistakes | Loki timestamp must be a string | 36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 189 | Common mistakes | Line filter is case-sensitive | 34 | PASS | "discarding those lines that do not match the case-sensitive expression." |
| 190 | Common mistakes | Lost header gives a new trace-id | 6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 191 | Common mistakes | Flags are a bit field | 6 | PASS | "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 192 | Common mistakes | gRPC port listened on all addresses; run on a trusted network | none | N/A | The page's own run record and advice. |
| 193 | What a tester can check | Callout "Tutorial advice": 13 advice bullets | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support. |
| 194 | Key words | Observability, Instrumentation, Telemetry | none | PASS | Rows match "Observability lets you understand a system from the outside...", "your application must be properly instrumented", "Telemetry refers to data emitted from a system and its behavior" (What it is). |
| 195 | Key words | Metric, Log, Span, Trace | none | PASS | Rows match the three-signals sentences of What it is. |
| 196 | Key words | Time series, Label, Instance, Job, up | none | PASS | Rows match "Every time series is uniquely identified by its metric name and optional key-value pairs called labels", the instance and job sentences, and "Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed" (How it works). |
| 197 | Key words | Counter, Gauge, Histogram, Summary | none | PASS | Rows match the Metric types sentences. |
| 198 | Key words | PromQL, Instant vector, Range vector | none | PASS | Rows match the PromQL sentences. |
| 199 | Key words | Recording rule, Pending, Firing | none | PASS | Rows match the Recording rules and alerting rules sentences. |
| 200 | Key words | Alertmanager, Grouping, Inhibition, Silence, Routing tree, amtool | none | PASS | Rows match the Alertmanager sentences. The amtool row ("a cli tool for interacting with the Alertmanager API") is an excerpt of "The `amtool` command is a cli tool for interacting with the Alertmanager API". |
| 201 | Key words | promtool, Loki, Log stream, LogQL | none | PASS | Rows match "You can use promtool to test your rules", the Loki sentence, "Labels allow Loki to organize and group together log messages into log streams", and "All LogQL queries contain a log stream selector". |
| 202 | Key words | Context propagation, traceparent, Golden signals, Cardinality | none | PASS | Rows match "Propagation is the mechanism that moves context between services and processes", the `traceparent` sentence, "the four golden signals of monitoring are latency, traffic, errors, and saturation", and the high-cardinality sentence. |

Open FAILs after round 9: 3

Changed after this round: Row 126 (step 2): the page said that `promtool check config` "checked `rules.yml` too, because the configuration lists it", and S26 does not say how the command treats referenced files. The page now says what the output showed (`SUCCESS: 1 rule files found`) and cites the flag `--syntax-only` of S26, which ignores the validation of the files and content that the config references, and says that the tutorial did not use it. Row 134 (step 4): "The two receivers have no integration, so nothing is sent anywhere" stated an effect that no source gives. It now says only that the two receivers in the file have no integration settings. Row 145 (step 5): the rank of the 90th percentile was explained without a cite. The page now cites S20 for "the φ-quantile is the observation value that ranks at number φ*N among the N observations" and keeps the arithmetic (rank 8.1, in the bucket from 0.25 to 0.5, which holds the ninth request) as the tutorial's own. The three "quote not in sources" notes (rows 66, 67, and 107) are quotes that the page splits with `||` where the source has a `# ` comment marker at a line break; the checker joined the pieces, and the rows are PASS.

## Round 10 (2026-11-19)

# Fact check: devops / monitoring-observability (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Topics of the page and the practice run | none | N/A | Describes the page itself. |
| 2 | Lede | Topics of the page; the run needs no cloud account and no Docker; link to other pages | none | N/A | Framing sentence, the page's own practice, and links. |
| 3 | What it is | Observability lets you understand a system from the outside by asking questions without knowing its inner workings | S1 | PASS | S1: "understand a system from the outside" |
| 4 | What it is | The application must be properly instrumented to ask those questions | S1 | PASS | S1: "properly instrumented" |
| 5 | What it is | The application code must emit signals such as traces, metrics, and logs | S1 | PASS | S1: "That is, the application code must emit" |
| 6 | What it is | Telemetry refers to data emitted from a system and its behavior | S1 | PASS | S1: "Telemetry refers to data emitted from a system and its behavior." |
| 7 | What it is | OpenTelemetry is the mechanism by which application code is instrumented to make a system observable | S1 | PASS | S1: "OpenTelemetry is the mechanism by which" |
| 8 | What it is | The SRE book describes monitoring as collecting, processing, aggregating, and displaying real-time quantitative data, with examples | S7 | PASS | S7: "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 9 | What it is | White-box monitoring is based on metrics exposed by the internals of the system | S7 | PASS | S7: "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring is testing externally visible behavior as a user would see it | S7 | PASS | S7: "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics are aggregations over a period of time of numeric data | S1 | PASS | S1: "aggregations over a period" |
| 12 | What it is | A log is a timestamped message emitted by services or other components | S1 | PASS | S1: "A log is a timestamped message emitted by services or other components." |
| 13 | What it is | A span represents a single unit of work or operation | S1 | PASS | S1: "single unit of work" |
| 14 | What it is | A trace is made of one or more spans | S1 | PASS | S1: "A trace is made of one or more spans." |
| 15 | What it is | The first span represents the root span | S1 | PASS | S1: "The first span represents the root span." |
| 16 | What it is | A distributed trace records the path of a single request through multiple services | S1 | PASS | S1: "records the path ... taken by a single request ... as it propagates through multiple services in an architecture" |
| 17 | What it is | Prometheus is an open-source systems monitoring and alerting toolkit | S8 | PASS | S8: "is an open-source systems monitoring and alerting toolkit" |
| 18 | What it is | Prometheus collects and stores its metrics as time series data | S8 | PASS | S8: "Prometheus collects and stores its metrics as time series data" |
| 19 | What it is | The Alertmanager handles alerts sent by client applications such as the Prometheus server | S23 | PASS | S23: "The Alertmanager handles alerts sent by client applications such as the Prometheus server." |
| 20 | What it is | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S31 | PASS | S31: "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 21 | What it is | Loki does not index the contents of the logs | S31 | PASS | S31: "Unlike other logging systems, Loki does not index the contents of the logs" |
| 22 | What it is | OpenTelemetry is open source, and vendor- and tool-agnostic | S2 | PASS | S2: "Open source, as well as vendor- and tool-agnostic" |
| 23 | What it is | OpenTelemetry is not an observability backend itself | S2 | PASS | S2: "OpenTelemetry is not an observability backend itself." |
| 24 | How it works | The Prometheus ecosystem has multiple components, many optional | S8 | PASS | S8: "multiple components" ... "optional:" |
| 25 | How it works | The main Prometheus server scrapes and stores time series data | S8 | PASS | S8: "the main Prometheus server which scrapes and stores time series data" |
| 26 | How it works | Client libraries instrument application code | S8 | PASS | S8: "client libraries for instrumenting application code" |
| 27 | How it works | An alertmanager handles alerts | S8 | PASS | S8: "an alertmanager" (component list) |
| 28 | How it works | Prometheus scrapes metrics from instrumented jobs | S8 | PASS | S8: "Prometheus scrapes metrics from instrumented jobs" |
| 29 | How it works | It stores all scraped samples locally and runs rules to aggregate and record series or generate alerts | S8 | PASS | S8: "It stores all scraped samples" ... "series from existing data or generate alerts." |
| 30 | How it works | Grafana or other API consumers can visualize the data | S8 | PASS | S8 line 167: "Grafana" ("or other API consumers" follows in the same sentence) |
| 31 | How it works | Time series collection happens via a pull model over HTTP | S8 | PASS | S8: "time series collection happens via a pull model over HTTP" |
| 32 | How it works | Prometheus stores its data as time series | S8 | PASS | S8: "Prometheus collects and stores its metrics as time series data" |
| 33 | How it works | Every time series is uniquely identified by its metric name and optional labels | S9 | PASS | S9: "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| 34 | How it works | Prometheus may generate temporary derived time series from queries | S9 | PASS | S9: "Besides stored time series, Prometheus may generate temporary derived time series" |
| 35 | How it works | An endpoint you can scrape is an instance, usually a single process | S11 | PASS | S11: "an endpoint you can scrape is called an instance, usually corresponding to a single process." |
| 36 | How it works | A collection of instances with the same purpose is a job | S11 | PASS | S11: "A collection of instances with the same purpose ... is called a job." |
| 37 | How it works | When Prometheus scrapes a target it attaches some labels automatically | S11 | PASS | S11: "it attaches some labels automatically to the scraped time series" |
| 38 | How it works | The `job` label holds the configured job name | S11 | PASS | S11: "job: The configured job name that the target belongs to." |
| 39 | How it works | The `instance` label holds the host and port part of the scraped URL | S11 | PASS | S11: "instance: The <host>:<port> part of the target's URL that was scraped." |
| 40 | How it works | For each instance scrape Prometheus stores a sample in `up` | S11 | PASS | S11: "For each instance scrape, Prometheus stores a sample in the following time series: up{...}" |
| 41 | How it works | `up` is 1 if healthy (reachable), 0 if the scrape failed | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 42 | How it works | `up` is useful for instance availability monitoring | S11 | PASS | S11: "The up time series is useful for instance availability monitoring." |
| 43 | How it works | The instrumentation libraries offer four core metric types | S10 | PASS | S10: "offer four core metric types" |
| 44 | How it works | A counter is cumulative, monotonically increasing, can only increase or reset to zero on restart | S10 | PASS | S10: "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart." |
| 45 | How it works | Do not use a counter for a value that can decrease | S10 | PASS | S10: "Do not use a counter to expose a value that can decrease." |
| 46 | How it works | A gauge is a single numerical value that can arbitrarily go up and down | S10 | PASS | S10: "arbitrarily go up and down" |
| 47 | How it works | A histogram records observations by counting them in configurable buckets | S10 | PASS | S10: "by counting them in configurable buckets" |
| 48 | How it works | It also provides a sum of all observed values | S10 | PASS | S10: "It also provides a sum" |
| 49 | How it works | A classic histogram consists of multiple time series of simple float samples | S10 | PASS | S10: "A classic histogram, however, consists of multiple time series of simple float samples." |
| 50 | How it works | They are the cumulative bucket counters, the sum, and the count | S10 | PASS | S10: "cumulative counters for the observation buckets" / "the total sum of all observed values" / "the count of events that have been observed" |
| 51 | How it works | Similar to a histogram, a summary samples observations | S10 | PASS | S10: "Similar to a histogram, a summary samples observations" |
| 52 | How it works | Summaries calculate streaming φ-quantiles in the program and expose them directly | S20 | PASS | S20: "calculate streaming φ-quantiles within the instrumented program and expose them" |
| 53 | How it works | Histograms expose bucketed counts; quantiles are calculated on the server with `histogram_quantile()` | S20 | PASS | S20: "Prometheus server using the histogram_quantile()" |
| 54 | How it works | For a summary, other φ-quantiles and sliding windows cannot be calculated later | S20 | PASS | S20: "Other φ-quantiles and sliding windows cannot be calculated later." |
| 55 | How it works | Metric names should have a single-word application prefix | S18 | PASS | S18: "SHOULD have a (single-word) application prefix" |
| 56 | How it works | They should have a suffix that describes the unit, in plural form | S18 | PASS | S18: "SHOULD have a suffix describing the unit, in plural form." |
| 57 | How it works | Every unique label combination is a new time series, which can dramatically increase data stored | S18 | PASS | S18: "pairs represents a new time series, which can dramatically increase the amount of data stored." |
| 58 | How it works | Do not use labels for high-cardinality dimensions such as user IDs, emails | S18 | PASS | S18: "Do not use labels to store dimensions with high cardinality" ... "unbounded sets of values." |
| 59 | How it works | Services break into online-serving, offline-processing, and batch jobs | S19 | PASS | S19: "services can generally be broken down into three types: online-serving, offline-processing, and batch jobs." |
| 60 | How it works | Online-serving systems should be monitored on both client and server side | S19 | PASS | S19: "Online-serving systems should be monitored on both the client and server side." |
| 61 | How it works | If the two sides see different behaviors, that is very useful for debugging | S19 | PASS | S19: "that is very useful information for debugging." |
| 62 | How it works | Time series that are not present until something happens are difficult to deal with | S19 | PASS | S19: "Time series that are not present until something happens are difficult" |
| 63 | How it works | Export a default value such as 0 for any series you know may exist | S19 | PASS | S19: "To avoid this, export a default value such as 0 for" |
| 64 | How it works | As of 2.0, exposing processes must use a text format, by default | S17 | PASS | S17: "As of Prometheus version 2.0, all processes that expose metrics to Prometheus must use a text format, by default." |
| 65 | How it works | Lines with # as first non-whitespace character are comments | S17 | PASS | S17: "Lines with a # as the first non-whitespace character are comments." |
| 66 | How it works | They are ignored unless the first token is HELP or TYPE | S17 | PASS | S17: "ignored unless the first token after # is either HELP or TYPE." |
| 67 | How it works | If the token is TYPE, exactly two more tokens are expected | S17 | PASS | S17: "If the token is TYPE, exactly two more tokens are expected." |
| 68 | How it works | First is the metric name, second is counter, gauge, histogram, summary, or untyped | S17 | PASS | S17: "The first is the ... summary, or untyped" |
| 69 | How it works | Remaining lines describe samples, one per line | S17 | PASS | S17: "The remaining lines describe samples (one per line)" |
| 70 | How it works | PromQL is a functional query language to select and aggregate time series in real time | S12 | PASS | S12: "functional query language called PromQL ... lets the user select and aggregate time series data in real time." |
| 71 | How it works | A query is instant (one point in time) or range (equally-spaced steps) | S12 | PASS | S12: "an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time" |
| 72 | How it works | Instant vector definition | S12 | PASS | S12: "Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 73 | How it works | Range vector definition | S12 | PASS | S12: "Range vector - a set of time series containing a range of data points over time for each time series" |
| 74 | How it works | Instant vector selectors select a set of series and one sample each at a timestamp | S12 | PASS | S12: "Instant vector selectors allow the selection of a set of time series and a single sample value for each at a given timestamp" |
| 75 | How it works | Filter further with comma-separated label matchers in curly braces | S12 | PASS | S12: "matchers in curly braces ({})" (line 304) |
| 76 | How it works | By convention float counters have a name ending in `_total` | S12 | PASS | S12: "(By convention, time series containing float counters have a name ending on _total" |
| 77 | How it works | Vector/scalar comparison applies to every sample; false elements are dropped | S40 | PASS | S40: "Between an instant vector and a scalar, these operators are applied to the value of every data sample in the vector, and vector elements between which the comparison result is false get dropped from the result vector." |
| 78 | How it works | `rate(v range-vector)` calculates the per-second average rate of increase | S13 | PASS | S13: "rate(v range-vector) calculates the per-second average rate of increase of the time series in the range vector." |
| 79 | How it works | Counter resets are automatically adjusted for | S13 | PASS | S13: "Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for." |
| 80 | How it works | `rate` should only be used with counters | S13 | PASS | S13: "rate should only be used with counters" |
| 81 | How it works | Applying it to gauge floats gives a nonsensical result but is processed without complaint | S12 | PASS | S12: "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains." |
| 82 | How it works | With an aggregation like `sum()`, take `rate()` first | S13 | PASS | S13: "always take a rate() first, then aggregate." |
| 83 | How it works | Otherwise `rate()` cannot detect counter resets on restart | S13 | PASS | S13: "Otherwise rate() cannot detect" |
| 84 | How it works | `histogram_quantile(φ scalar, b instant-vector)` calculates the φ-quantile from classic or native histogram | S13 | PASS | S13: "histogram_quantile(φ scalar, b instant-vector) calculates the φ-quantile (0 ≤ φ ≤ 1) from a classic histogram or from a native histogram." |
| 85 | How it works | Use `rate()` to specify the time window for the quantile | S13 | PASS | S13: "Use the rate() function to specify the time window for the quantile" |
| 86 | How it works | For classic histograms the `le` label has to be in the `by` clause | S13 | PASS | S13: "Since the le label is required by histogram_quantile() to deal with classic histograms, it has to be included in the by clause." |
| 87 | How it works | Recording rules precompute expressions and save results as a new set of series | S14 | PASS | S14: "Recording rules allow you to precompute frequently needed or computationally expensive expressions" |
| 88 | How it works | Recording and alerting rules exist in a rule group | S14 | PASS | S14: "Recording and alerting rules exist in a rule group." |
| 89 | How it works | Rules in a group run sequentially at a regular interval with the same evaluation time | S14 | PASS | S14: "run sequentially at a regular interval, with the same evaluation time." |
| 90 | How it works | Recording rule names must be valid metric names | S14 | PASS | S14: "valid metric names." |
| 91 | How it works | For an alerting rule, all resultant series become pending or firing alerts | S14 | PASS | S14: "all resultant time series become pending/firing alerts." |
| 92 | How it works | Alerts are firing once returned for this long | S14 | PASS | S14: "Alerts are considered firing once they have been returned for this long." |
| 93 | How it works | Alerts not yet fired for long enough are pending | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 94 | How it works | The labels clause adds extra labels to the alert | S15 | PASS | S15: "The labels clause allows specifying a set of additional labels to be attached" |
| 95 | How it works | The annotations clause stores longer info such as descriptions or runbook links | S15 | PASS | S15: "informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| 96 | How it works | For pending and firing alerts Prometheus stores synthetic `ALERTS` series | S15 | PASS | S15: "For pending and firing alerts, Prometheus also stores synthetic time series of the form ALERTS" |
| 97 | How it works | Alerting rules are good at what is broken now, not a fully-fledged notification solution | S15 | PASS | S15: "good at figuring what is broken right now, but they are not a fully-fledged notification solution." |
| 98 | How it works | Alerting is in two parts | S22 | PASS | S22: "Alerting with Prometheus is separated into two parts." |
| 99 | How it works | Alerting rules send alerts to an Alertmanager | S22 | PASS | S22: "Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| 100 | How it works | Alertmanager deduplicates, groups, routes to the correct receiver integration | S23 | PASS | S23: "It takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 101 | How it works | Grouping categorizes similar alerts into one notification | S23 | PASS | S23: "Grouping categorizes alerts of similar nature into a single notification." |
| 102 | How it works | Inhibition suppresses notifications for some alerts if others are firing | S23 | PASS | S23: "Inhibition is a concept of suppressing notifications for certain alerts if" |
| 103 | How it works | Silences mute alerts for a given time | S23 | PASS | S23: "Silences are a straightforward way to simply mute alerts for a given time." |
| 104 | How it works | A silence is configured on matchers, like the routing tree | S23 | PASS | S23: "A silence is configured based on matchers, just like the routing tree." |
| 105 | How it works | Every alert enters at the top-level route, which must match all alerts | S24 | PASS | S24: "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 106 | How it works | It then traverses the child nodes | S24 | PASS | S24: "It then traverses the child nodes." |
| 107 | How it works | If `continue` is false it stops after the first matching child | S24 | PASS | S24: "If continue is set to false, it stops after the first matching child." |
| 108 | How it works | An alert matching no child is handled by the current node's configuration | S24 | PASS | S24: "the alert is handled based on the configuration parameters of the current node." |
| 109 | How it works | Most optional route parameters are inherited from the parent if not set | S24 | PASS | S24: "optional configuration parameters (receiver, group_by, group_wait, group_interval, repeat_interval) are inherited from its parent node if" |
| 110 | How it works | `amtool` is a cli tool for the Alertmanager API | S25 | PASS | S25: "amtool is a cli tool for interacting with the Alertmanager API." |
| 111 | How it works | It is bundled with all releases of Alertmanager | S25 | PASS | S25: "It is bundled with all releases of Alertmanager." |
| 112 | How it works | `amtool` can validate a config for UTF-8 strict mode before enabling it | S24 | PASS | S24: "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server." |
| 113 | How it works | That check needs no running Alertmanager server | S24 | PASS | S24: "You do not need a running Alertmanager server to do this." |
| 114 | How it works | Aim for few alerts, on symptoms linked to end-user pain | S21 | PASS | S21: "Aim to have as few alerts as possible, by alerting on symptoms that are" |
| 115 | How it works | Summary: simple alerting, symptoms, good consoles, avoid pages with nothing to do | S21 | PASS | S21: "To summarize: keep alerting simple, alert on symptoms, have good consoles to" |
| 116 | How it works | For error rates, page on user-visible errors | S21 | PASS | S21: "For error rates, page on user-visible errors." |
| 117 | How it works | Four golden signals: latency, traffic, errors, saturation | S7 | PASS | S7: "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 118 | How it works | If you can measure only four metrics, focus on these | S7 | PASS | S7: "If you can only measure four metrics of your user-facing system, focus on these four." |
| 119 | How it works | Errors are the rate of requests that fail, explicitly, implicitly, or by policy | S7 | PASS | S7 line 124: "rate of requests that fail" |
| 120 | How it works | Distinguish latency of successful and failed requests | S7 | PASS | S7 line 120: "distinguish between the latency" |
| 121 | How it works | Loki focuses on logs, collects by push | S31 | PASS | S31: "by focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 122 | How it works | Labels let Loki organize log messages into streams | S32 | PASS | S32: "They allow Loki to organize and group together log messages into log streams." |
| 123 | How it works | If a `service_name` label is on the stream, Loki uses it | S32 | PASS | S32: "If a service_name label is already present on the stream, Loki uses it directly." |
| 124 | How it works | Otherwise Loki uses the first non-empty value from a label list, in order | S32 | PASS | S32: "Loki looks for the first non-empty value from the following labels, in order" |
| 125 | How it works | If none match, `unknown_service` is applied | S32 | PASS | S32: "a value of unknown_service is applied." |
| 126 | How it works | Use labels for regions, clusters, servers, applications, namespaces, environments | S33 | PASS | S33: "Use labels for things like regions, clusters, servers, applications, namespaces, and environments." |
| 127 | How it works | Too many label combinations leads to too many streams | S33 | PASS | S33: "Too many label value combinations leads to too many streams." |
| 128 | How it works | Penalties are a large index and small chunks, which can reduce performance | S33 | PASS | S33: "a large index and small chunks in the store, which in turn can actually reduce performance." |
| 129 | How it works | Do not add a label until you know you need it | S33 | PASS | S33: "don’t add a label for something until you know you need it!" |
| 130 | How it works | All LogQL queries contain a log stream selector | S34 | PASS | S34: "All LogQL queries contain a log stream selector." |
| 131 | How it works | The selector can be followed by a log pipeline | S34 | PASS | S34: "can be followed by a log pipeline." |
| 132 | How it works | A pipeline is a set of chained stage expressions applied to selected streams | S34 | PASS | S34: "A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams." |
| 133 | How it works | Selector is one or more comma-separated key-value pairs | S34 | PASS | S34: "specified by one or more comma-separated key-value pairs." |
| 134 | How it works | Operators `=`, `!=`, `=~`, `!~` | S34 | PASS | S34: "=: exactly equal / !=: not equal / =~: regex matches / !~: regex does not match" |
| 135 | How it works | Line filter does a distributed grep over matching streams | S34 | PASS | S34: "The line filter expression does a distributed grep" |
| 136 | How it works | It discards lines that do not match the case-sensitive expression | S34 | PASS | S34: "discarding those lines that do not match the case-sensitive expression." |
| 137 | How it works | A label filter expression filters on original and extracted labels | S34 | PASS | S34: "Label filter expression allows filtering log line using their original and extracted labels." |
| 138 | How it works | Metric queries extend log queries by applying a function | S35 | PASS | S35: "Metric queries extend log queries by applying a function to log query results." |
| 139 | How it works | `count_over_time(log-range)` counts entries per stream in the range | S35 | PASS | S35: "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 140 | How it works | Push needs the timestamp as a string, else 400 | S36 | PASS | S36: "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 141 | How it works | `/loki/api/v1/query_range` queries over a range of time | S36 | PASS | S36: "/loki/api/v1/query_range is used to do a query over a range of time." |
| 142 | How it works | `limit` is the max entries, default 100 | S36 | PASS | S36: "limit: The max number of entries to return. It defaults to 100." |
| 143 | How it works | `start` defaults to one hour ago | S36 | PASS | S36: "Defaults to one hour ago." |
| 144 | How it works | Query endpoints return a set of query statistics | S36 | PASS | S36: "return a set of statistics about the query execution." |
| 145 | How it works | `/ready` returns HTTP 200 when Loki is ready | S36 | PASS | S36: "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 146 | How it works | `/loki/api/v1/labels` lists known labels in a time span | S36 | PASS | S36: "/loki/api/v1/labels retrieves the list of known labels within a given time span." |
| 147 | How it works | With context propagation signals can be correlated wherever generated | S3 | PASS | S3: "signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated." |
| 148 | How it works | Propagation moves context between services and processes | S3 | PASS | S3: "Propagation is the mechanism that moves context between services and processes." |
| 149 | How it works | Propagation is usually handled by instrumentation libraries and transparent | S3 | PASS | S3: "Propagation is usually handled by instrumentation libraries and is transparent" |
| 150 | How it works | OpenTelemetry propagates context with W3C Trace Context HTTP headers | S4 | PASS | S4: "OpenTelemetry provides a text-based approach to propagate context to remote" |
| 151 | How it works | `traceparent` identifies the incoming request in a tracing system | S6 | PASS | S6: "The traceparent HTTP header field identifies the incoming request in a tracing system." |
| 152 | How it works | It has four fields: version, trace-id, parent-id, trace-flags | S6 | PASS | S6: "It has four fields:" (followed by the grammar) |
| 153 | How it works | trace-id is 16 bytes, all zeroes forbidden | S6 | PASS | S6: "trace-id = 32HEXDIGLC ; 16 bytes array identifier. All zeroes forbidden" |
| 154 | How it works | parent-id is 8 bytes, all zeroes forbidden | S6 | PASS | S6: "parent-id = 16HEXDIGLC ; 8 bytes array identifier. All zeroes forbidden" |
| 155 | How it works | Least significant bit set means caller may have recorded trace data | S6 | PASS | S6: "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 156 | How it works | Flags are a bit field and cannot be read as a decoded number | S6 | PASS | S6: "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 157 | How it works | In Python the sender injects the current context | S4 | PASS | S4: "on the sending service, inject the current context:" |
| 158 | How it works | Receiver extracts context, e.g. from parsed HTTP headers, and sets it as current | S4 | PASS | S4: "On the receiving service, extract context, for example, from parsed HTTP" |
| 159 | How it works | Use instrumentation libraries to propagate context | S4 | PASS | S4: "Use instrumentation libraries to propagate context." |
| 160 | How it works | `ConsoleSpanExporter` is in `opentelemetry-sdk` | S5 | PASS | S5: "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| 161 | How it works | You can use promtool to test your rules | S16 | PASS | S16: "You can use promtool to test your rules." |
| 162 | How it works | `promtool check config` checks config files | S26 | PASS | S26: "promtool check config Check if the config files are valid or not." |
| 163 | How it works | `promtool check rules` checks rule files | S26 | PASS | S26: "Check if the rule files are valid or not." |
| 164 | How it works | `promtool test rules` runs unit tests for rules | S26 | PASS | S26: "promtool test rules Unit tests for rules." |
| 165 | How it works | A test file has a list of rule files | S16 | PASS | S16: "This is a list of rule files to consider for testing." |
| 166 | How it works | Input series use expanding notation | S16 | PASS | S16: "This uses expanding notation." |
| 167 | How it works | `_` is a missing sample | S16 | PASS | S16: "'_' represents a missing sample from scrape" |
| 168 | How it works | An alert test lists the union of firing alerts for the alertname in one case | S16 | PASS | S16: "you have to list the union of all the firing alerts for the alertname under a single <alert_test_case>." |
| 169 | How it works | To test that an alert is not firing, leave `exp_alerts` empty | S16 | PASS | S16: "you can mention the above fields and leave 'exp_alerts' empty." |
| 170 | How it works | A PromQL expression test names the expression, evaluation time, expected samples | S16 | PASS | S16: "eval_time: <duration>" and "exp_samples:" (expr test case) |
| 171 | Try it | Run date, versions, OS, folder layout (`/work`, `/venv`) | none | N/A | Record of the page's own run. |
| 172 | Try it | Listening addresses, gRPC port bound to all addresses, Loki failure with `instance_interface_names: [lo]`, trust advice | none | N/A | Record of the run and the page's own advice. |
| 173 | Try it | Own choices, and what was not run | none | N/A | The page's own practice. |
| 174 | Try it | Prometheus docs provide precompiled binaries for most official components | S30 | PASS | S30: "We provide precompiled binaries for most official Prometheus components." |
| 175 | Try it | Docker run is `docker run -p 9090:9090 prom/prometheus` | S30 | PASS | S30: "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| 176 | Try it | Loki docs: install Loki and Alloy with Docker or Docker Compose for evaluating, testing, developing | S39 | PASS | S39: "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 177 | Try it | Install script, checksum check, limits, OTel venv and wheel check | none | N/A | Record of the run. |
| 178 | Try it | Step 1: app, `app.py`, run commands, output | none | N/A | Page's own code and run output. |
| 179 | Try it | Step 1: `# HELP` and `# TYPE` lines are comments for help text and type | S17 | PASS | S17: "ignored unless the first token after # is either HELP or TYPE." |
| 180 | Try it | Step 1: name ending in `_total` is the convention for counters | S12 | PASS | S12: "By convention, time series containing float counters have a name ending on _total" |
| 181 | Try it | Step 1: a gauge is a value that can go up and down | S10 | PASS | S10: "arbitrarily go up and down" |
| 182 | Try it | Step 1: histogram buckets are cumulative counters | S10 | PASS | S10: "cumulative counters for the observation buckets" |
| 183 | Try it | Step 2: `prometheus.yml`, `rules.yml`, check commands and output | none | N/A | Page's own files and run output. |
| 184 | Try it | Step 2: targets are discovered via service discovery or static configuration | S8 | PASS | S8: "targets are discovered via service discovery or static configuration" |
| 185 | Try it | Step 2: rate first, then `sum by (job)`, as the docs say | S13 | PASS | S13: "always take a rate() first, then aggregate." |
| 186 | Try it | Step 2: by default a vector/scalar comparison drops false elements | S40 | PASS | S40: "By default they filter." and "comparison result is false get dropped from the result vector." |
| 187 | Try it | Step 2: `bool` returns 0 or 1 rather than filtering | S40 | PASS | S40: "modified by providing bool after the operator, which will return 0 or 1 for the value rather than filtering." |
| 188 | Try it | Step 2: `for` of 15 s means pending until returned that long | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 189 | Try it | Step 2: `up` is 0 if the scrape failed | S11 | PASS | S11: "or 0 if the scrape failed." |
| 190 | Try it | Step 2: both alerts carry `severity: page` and a `summary` annotation | S15 | PASS | S15: "The labels clause allows specifying a set of additional labels" / "The annotations clause specifies a set of informational labels"; the values are the page's own files. |
| 191 | Try it | Step 2: `promtool check config` and `check rules` check validity | S26 | PASS | S26: "Check if the config files are valid or not." / "Check if the rule files are valid or not." |
| 192 | Try it | Step 2: `--syntax-only` ignores validation of referenced files and content | S26 | PASS | S26: "Only check the config file syntax, ignoring file and content validation referenced in the config" |
| 193 | Try it | Step 2: a rule file can be checked without a Prometheus server via `promtool check rules` | S14 | PASS | S14: "To quickly check whether a rule file is syntactically correct without starting" |
| 194 | Try it | Step 3: test files, commands, output | none | N/A | Page's own files and run output. |
| 195 | Try it | Step 3: `promtool test rules` runs unit tests | S26 | PASS | S26: "Unit tests for rules." |
| 196 | Try it | Step 3: a test file lists the rule files to consider | S16 | PASS | S16: "This is a list of rule files to consider for testing." |
| 197 | Try it | Step 3: docs read `a+bxn` as "series starts at a, then n further samples incrementing by b" | S16 | PASS | S16: "Read this as series starts at a, then n further samples incrementing by b." |
| 198 | Try it | Step 3: arithmetic, group results, exit statuses | none | N/A | Page's own arithmetic and run record. |
| 199 | Try it | Step 4: `alertmanager.yml`, commands, output | none | N/A | Page's own file and run output. |
| 200 | Try it | Step 4: `group_wait` is how long to wait before the first notification for a new group | S24 | PASS | S24: "How long to wait before sending the first notification for a new group of alerts." |
| 201 | Try it | Step 4: `repeat_interval` is how long to wait before repeating the last notification | S24 | PASS | S24: "How long to wait before repeating the last notification." |
| 202 | Try it | Step 4: every alert enters at the top-level route, then the child nodes | S24 | PASS | S24: "Every alert enters the routing tree at the configured top-level route" ... "It then traverses the child nodes." |
| 203 | Try it | Step 4: configuration page shows `amtool check-config` for the UTF-8 strict mode check | S24 | PASS | S24: "amtool check-config config.yml" under "Verification" |
| 204 | Try it | Step 4: no running Alertmanager server needed for that check | S24 | PASS | S24: "You do not need a running Alertmanager server to do this." |
| 205 | Try it | Step 4: README says `amtool` visualizes routes as a text tree | S25 | PASS | S25: "amtool allows you to visualize the routes of your configuration in form of text tree view." |
| 206 | Try it | Step 4: README says `amtool` tests routing with an alert's label set | S25 | PASS | S25: "Also you can use it to test the routing by passing it label set of an alert" |
| 207 | Try it | Step 4: README writes `amtool config routes` and `amtool config routes test` | S25 | PASS | S25: "$ amtool config routes --alertmanager.url=http://localhost:9093" and "$ amtool config routes test --config.file=doc/examples/simple.yml ..." |
| 208 | Try it | Step 5: server start commands and output | none | N/A | Page's own commands and run output. |
| 209 | Try it | Step 5: `--config.file` is the config file path | S29 | PASS | S29: "--config.file Prometheus configuration file path." |
| 210 | Try it | Step 5: `--storage.tsdb.path` is the base path for metrics storage | S29 | PASS | S29: "Base path for metrics storage." |
| 211 | Try it | Step 5: `--web.listen-address` is the address for UI, API, telemetry | S29 | PASS | S29: "Address to listen on for UI, API, and telemetry." |
| 212 | Try it | Step 5: `--cluster.listen-address=` prevents listening for peer requests | S25 | PASS | S25: "setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 213 | Try it | Step 5: `/-/ready` returns 200 when Prometheus is ready | S28 | PASS | S28: "This endpoint returns 200 when Prometheus is ready to serve traffic" |
| 214 | Try it | Step 5: the API response format is JSON | S27 | PASS | S27: "The API response format is JSON." |
| 215 | Try it | Step 5: `/api/v1/query` evaluates an instant query at a single point in time | S27 | PASS | S27: "The following endpoint evaluates an instant query at a single point in time:" |
| 216 | Try it | Step 5: `up` value 1 means healthy | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable" |
| 217 | Try it | Step 5: the φ-quantile is the observation ranked φ*N among N | S20 | PASS | S20: "The φ-quantile is the observation value that ranks at number φ*N among the N observations." |
| 218 | Try it | Step 5: the function interpolates within the bucket | S13 | PASS | S13: "interpolates the quantile value within the bucket the quantile value falls into." |
| 219 | Try it | Step 5: for classic histograms it assumes uniform distribution in the bucket | S13 | PASS | S13: "For classic histograms ... it assumes a uniform distribution of observations within the bucket" |
| 220 | Try it | Step 5: docs use `rate()` to set the time window | S13 | PASS | S13: "Use the rate() function to specify the time window for the quantile" |
| 221 | Try it | Step 6: helpers, commands, output | none | N/A | Page's own code and run output. |
| 222 | Try it | Step 6: `/alerts` returns a list of all active alerts | S27 | PASS | S27: "The /alerts endpoint returns a list of all active alerts." |
| 223 | Try it | Step 6: an alert is pending until returned for the `for` time | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 224 | Try it | Step 6: README shows `amtool silence add alertname=Test_Alert` | S25 | PASS | S25: "$ amtool silence add alertname=Test_Alert" |
| 225 | Try it | Step 6: Alertmanager page says silences are configured in the web interface | S23 | PASS | S23: "Silences are configured in the web interface of the Alertmanager." |
| 226 | Try it | Step 6: no page describes `--silenced` or `suppressed` | none | N/A | Statement about the tutorial's reading. Grep of all `pages/*.txt` for `--silenced`, `suppressed`, `detected_level` found no match. |
| 227 | Try it | Step 6: `up` was 0 because the scrape failed | S11 | PASS | S11: "or 0 if the scrape failed." |
| 228 | Try it | Step 7: Loki page lists a complete filesystem configuration | S37 | PASS | S37: "This is a complete configuration to deploy Loki backed by the filesystem." |
| 229 | Try it | Step 7: the page's folder is `/tmp/loki` | S37 | PASS | S37: "path_prefix: /tmp/loki" |
| 230 | Try it | Step 7: reference describes `reporting_enabled` as "Enable anonymous usage reporting" | S38 | PASS | S38: "# Enable anonymous usage reporting." / "[reporting_enabled: <boolean> \| default = true]" |
| 231 | Try it | Step 7: `loki.yml`, `push.py`, commands, output | none | N/A | Page's own files and run output. |
| 232 | Try it | Step 7: `/ready` returns HTTP 200 when ready | S36 | PASS | S36: "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 233 | Try it | Step 7: the timestamp must be a string | S36 | PASS | S36: "you must send the timestamp as a string and not a number" |
| 234 | Try it | Step 7: if no `service_name`, Loki uses the first non-empty value from a list | S32 | PASS | S32: "Loki looks for the first non-empty value from the following labels, in order" |
| 235 | Try it | Step 7: Loki can discover and add log levels at ingestion | S38 | PASS | S38: "# Discover and add log levels during ingestion, if not present already." |
| 236 | Try it | Step 7: line filter is a distributed grep that discards non-matching lines | S34 | PASS | S34: "does a distributed grep" ... "discarding those lines that do not match" |
| 237 | Try it | Step 7: `limit` is the max entries, default 100 | S36 | PASS | S36: "limit: The max number of entries to return. It defaults to 100." |
| 238 | Try it | Step 7: `count_over_time` counts entries per stream | S35 | PASS | S35: "counts the entries for each log stream within the given range." |
| 239 | Try it | Step 7: `logfmt` parses each line to extract labels and the next stage filters | S34 | PASS | S34: "| logfmt ... which will filter out log that contains the word metrics.go, then parses each log line to extract more labels and filter with them." |
| 240 | Try it | Step 7: query endpoints return statistics | S36 | PASS | S36: "return a set of statistics about the query execution." |
| 241 | Try it | Step 8: `ConsoleSpanExporter` is in `opentelemetry-sdk` | S5 | PASS | S5: "included in the opentelemetry-sdk package." |
| 242 | Try it | Step 8: context passed by hand as the Python docs show | S4 | PASS | S4: "inject the current context" / "extract context" |
| 243 | Try it | Step 8: the same page says to use instrumentation libraries | S4 | PASS | S4: "Use instrumentation libraries to propagate context." |
| 244 | Try it | Step 8: `otel_demo.py`, commands, output | none | N/A | Page's own script and run output. |
| 245 | Try it | Step 8: the header has four fields | S6 | PASS | S6: "It has four fields:" |
| 246 | Try it | Step 8: right-most bit set means caller may have recorded trace data | S6 | PASS | S6: "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 247 | Try it | Step 8: flags are a bit field, not readable as a number | S6 | PASS | S6: "As this is a bit field, you cannot interpret flags by decoding the hex value" |
| 248 | Try it | Step 8: a span with `trace_id` and no `parent_id` is a root span | S41 | PASS | S41: "it has a trace_id field indicating the trace, but has no parent_id. That’s how you know it’s the root span." |
| 249 | Try it | Step 8: with no traceparent the vendor creates a new trace-id and parent-id | S6 | PASS | S6: "the vendor creates a new trace-id and parent-id that represents the current request." |
| 250 | How a tester uses it | A counter can only increase or reset to zero on restart | S10 | PASS | S10: "value can only increase or be reset to zero on restart." |
| 251 | How a tester uses it | `up` is 1 if reachable, 0 if the scrape failed | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 252 | How a tester uses it | The SRE book counts an HTTP 200 with wrong content as an error, implicitly | S7 | PASS | S7 line 124: "wrong content" |
| 253 | How a tester uses it | A test can expect an alert not to fire with empty `exp_alerts` | S16 | PASS | S16: "leave 'exp_alerts' empty." |
| 254 | How a tester uses it | Every alert enters at the top-level route, then the child nodes | S24 | PASS | S24: "It then traverses the child nodes." |
| 255 | How a tester uses it | Alert is pending first and firing later because of its `for` time | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 256 | How a tester uses it | `wait_for` polls `/api/v1/alerts` | S27 | PASS | S27: "The /alerts endpoint returns a list of all active alerts." The cite supports the endpoint. The polling is the page's own helper. |
| 257 | How a tester uses it | Do not use labels for high-cardinality dimensions such as user IDs | S18 | PASS | S18: "Do not use labels to store dimensions with high cardinality" |
| 258 | How a tester uses it | For Loki, too many label combinations leads to too many streams | S33 | PASS | S33: "Too many label value combinations leads to too many streams." |
| 259 | How a tester uses it | A line filter kept lines with `code=500` | S34 | PASS | S34: "discarding those lines that do not match" |
| 260 | How a tester uses it | With context propagation signals can be correlated wherever generated | S3 | PASS | S3: "can be correlated with each other, regardless of where they are generated." |
| 261 | How a tester uses it | Step recaps (nine requests, step 5 totals, exit statuses, step 6 states, trace ids, metric query vs log file) | none | N/A | Record of the page's own run. |
| 262 | Common mistakes | `rate` should only be used with counters | S13 | PASS | S13: "rate should only be used with counters" |
| 263 | Common mistakes | On gauge floats the result is nonsensical but processed without complaint | S12 | PASS | S12: "will most likely produce a nonsensical result, but the query will be processed without complains." |
| 264 | Common mistakes | Take `rate()` first, then aggregate | S13 | PASS | S13: "always take a rate() first, then aggregate." |
| 265 | Common mistakes | Otherwise `rate()` cannot detect counter resets on restart | S13 | PASS | S13: "Otherwise rate() cannot detect" |
| 266 | Common mistakes | Do not use a counter for a value that can decrease | S10 | PASS | S10: "Do not use a counter to expose a value that can decrease." |
| 267 | Common mistakes | Example: not a counter for running processes, use a gauge | S10 | PASS | S10: "do not use a counter for the number of currently running processes; instead use a gauge." |
| 268 | Common mistakes | Prometheus implements pre-calculated quantiles as the metric type summary | S20 | PASS | S20: "Prometheus implements this approach in the form of a metric type called" (summary) |
| 269 | Common mistakes | Cannot recalculate quantiles for another window or percentile, cannot aggregate quantiles | S20 | PASS | S20: "you cannot “recalculate” the quantiles later if you desire another time window or another percentile, and most importantly, you cannot aggregate quantiles" |
| 270 | Common mistakes | Do not use labels for unbounded values such as user IDs, emails | S18 | PASS | S18: "high cardinality ... unbounded sets of values." |
| 271 | Common mistakes | In Loki the penalties of too many streams are a large index and small chunks | S33 | PASS | S33: "The penalties for that in Loki are a large index and small chunks in the store" |
| 272 | Common mistakes | Alerts not yet fired long enough are pending | S14 | PASS | S14: "Alerts which have not yet fired for long enough are considered pending." |
| 273 | Common mistakes | If an alert matches an active silence, no notifications are sent | S23 | PASS | S23: "If they do, no notifications will be sent out for that alert." |
| 274 | Common mistakes | The value of `up` says whether the scrape worked | S11 | PASS | S11: "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 275 | Common mistakes | The SRE book counts HTTP 200 with wrong content as an implicit error | S7 | PASS | S7 line 124: "wrong content" |
| 276 | Common mistakes | Distinguish latency of successful and failed requests | S7 | PASS | S7 line 120: "distinguish between the latency" |
| 277 | Common mistakes | `promtool check rules` checks rule files; `promtool test rules` runs unit tests | S26 | PASS | S26: "Check if the rule files are valid or not." / "Unit tests for rules." |
| 278 | Common mistakes | Series not present until something happens are difficult; export a default such as 0 | S19 | PASS | S19: "Time series that are not present until something happens are difficult" / "export a default value such as 0 for" |
| 279 | Common mistakes | Push needs the timestamp as a string, else 400 | S36 | PASS | S36: "must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 280 | Common mistakes | Line filter discards lines that do not match the case-sensitive expression | S34 | PASS | S34: "discarding those lines that do not match the case-sensitive expression." |
| 281 | Common mistakes | With no traceparent the vendor creates a new trace-id and parent-id | S6 | PASS | S6: "the vendor creates a new trace-id and parent-id that represents the current request." |
| 282 | Common mistakes | Flags are a bit field, not readable as a decoded number | S6 | PASS | S6: "you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 283 | Common mistakes | Run-specific notes (recording rule takes `rate()` first, step 6 states, `AppHighErrorRatio` counts 500 to 599, histogram has no status label, `03`, gRPC port) | none | N/A | Record of the page's own run and advice. |
| 284 | What a tester can check | Callout "Tutorial advice": a list of the tutorial's own advice | none | PASS | The callout says "This list is the tutorial's own advice for a tester". It states no fact about a tool that the page does not support: `promtool check`/`test`, empty `exp_alerts`, `amtool config routes test`, `up`, `pending`/`firing`, labels, trace ids and ports are all covered above. |
| 285 | Key words | Observability | none | PASS | Technical, What it is: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 286 | Key words | Instrumentation | none | PASS | Technical, What it is: "your application must be properly instrumented" |
| 287 | Key words | Telemetry | none | PASS | Technical, What it is: "Telemetry refers to data emitted from a system and its behavior" |
| 288 | Key words | Metric | none | PASS | Technical, What it is: "Metrics are aggregations over a period of time of numeric data about your infrastructure or application" |
| 289 | Key words | Log | none | PASS | Technical, What it is: "A log is a timestamped message emitted by services or other components" |
| 290 | Key words | Span | none | PASS | Technical, What it is: "A span represents a single unit of work or operation" |
| 291 | Key words | Trace | none | PASS | Technical, What it is: "A trace is made of one or more spans" |
| 292 | Key words | Time series | none | PASS | Technical, How it works: "Every time series is uniquely identified by its metric name and optional key-value pairs called labels" |
| 293 | Key words | Label | none | PASS | Same sentence: "optional key-value pairs called labels" |
| 294 | Key words | Instance | none | PASS | Technical, How it works: "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 295 | Key words | Job | none | PASS | Technical, How it works: "A collection of instances with the same purpose is called a job" |
| 296 | Key words | up | none | PASS | Technical, How it works: "Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed" |
| 297 | Key words | Counter | none | PASS | Technical, How it works: "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart" |
| 298 | Key words | Gauge | none | PASS | Technical, How it works: "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down" |
| 299 | Key words | Histogram | none | PASS | Technical, How it works: "A histogram records observations by counting them in configurable buckets" |
| 300 | Key words | Summary | none | PASS | Technical, How it works: "Similar to a histogram, a summary samples observations" |
| 301 | Key words | PromQL | none | PASS | Technical, How it works: "Prometheus provides a functional query language called PromQL that lets the user select and aggregate time series data in real time" |
| 302 | Key words | Instant vector | none | PASS | Technical, How it works: "An instant vector is a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 303 | Key words | Range vector | none | PASS | Technical, How it works: "A range vector is a set of time series containing a range of data points over time for each time series" |
| 304 | Key words | Recording rule | none | PASS | Technical, How it works: "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series" |
| 305 | Key words | Pending | none | PASS | Technical, How it works: "Alerts which have not yet fired for long enough are considered pending" |
| 306 | Key words | Firing | none | PASS | Technical, How it works: "Alerts are considered firing once they have been returned for this long" |
| 307 | Key words | Alertmanager | none | PASS | Technical, How it works: "The Alertmanager takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 308 | Key words | Grouping | none | PASS | Technical, How it works: "Grouping categorizes alerts of similar nature into a single notification" |
| 309 | Key words | Inhibition | none | PASS | Technical, How it works: "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing" |
| 310 | Key words | Silence | none | PASS | Technical, How it works: "Silences are a straightforward way to simply mute alerts for a given time" |
| 311 | Key words | Routing tree | none | PASS | Technical, How it works: "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 312 | Key words | promtool | none | PASS | Technical, How it works: "You can use promtool to test your rules" |
| 313 | Key words | amtool | none | PASS | Technical, How it works: "The `amtool` command is a cli tool for interacting with the Alertmanager API" |
| 314 | Key words | Loki | none | PASS | Technical, What it is: "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus" |
| 315 | Key words | Log stream | none | PASS | Technical, How it works: "Labels allow Loki to organize and group together log messages into log streams" |
| 316 | Key words | LogQL | none | PASS | Technical, How it works: "All LogQL queries contain a log stream selector" |
| 317 | Key words | Context propagation | none | PASS | Technical, How it works: "Propagation is the mechanism that moves context between services and processes" |
| 318 | Key words | traceparent | none | PASS | Technical, How it works: "The `traceparent` HTTP header field identifies the incoming request in a tracing system" |
| 319 | Key words | Golden signals | none | PASS | Technical, How it works: "the four golden signals of monitoring are latency, traffic, errors, and saturation" |
| 320 | Key words | Cardinality | none | PASS | Technical, How it works: "Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values" |

Open FAILs after round 10: 0

Changed after this round: No FAILs. The repo claim check (`scripts/devops_claimcheck.py`, read after this round with an empty cache) could not find two quotes of S6, the ABNF lines `trace-id = 32HEXDIGLC ; ...` and `parent-id = 16HEXDIGLC ; ...`, because it reads `32 HEXDIGLC` with a space where the page fetcher reads `32HEXDIGLC`. The two sentences now cite the prose of the W3C text about each field instead (represented as a 16-byte or an 8-byte array, and all bytes as zero is considered an invalid value), and say the same in Technical, Layman, and Bangla.

## Round 11 (2026-11-19)

# Fact check: devops / monitoring-observability (round 11)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Observability, signals, Prometheus, Alertmanager, Loki, OTel trace context, practice run, no cloud account | none | N/A | Framing sentence that describes the page. |
| 2 | Lede | Page covers signals, Prometheus, Alertmanager, Loki, trace context; the run needs no cloud account and no Docker; page order | none | N/A | Framing sentence that describes the page, plus a link to other pages. |
| 3 | What it is | Observability lets you understand a system from the outside by asking questions without knowing its inner workings | S1 | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 4 | What it is | The application must be properly instrumented | S1 | PASS | "your application must be properly instrumented" |
| 5 | What it is | The application code must emit signals such as traces, metrics, and logs | S1 | PASS | "the application code must emit signals such as traces, metrics, and logs" |
| 6 | What it is | Telemetry refers to data emitted from a system and its behavior | S1 | PASS | "Telemetry refers to data emitted from a system and its behavior" |
| 7 | What it is | OpenTelemetry is the mechanism by which code is instrumented | S1 | PASS | "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable" |
| 8 | What it is | SRE book describes monitoring as collecting, processing, aggregating, displaying real-time quantitative data (with examples) | S7 | PASS | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 9 | What it is | White-box monitoring is based on metrics exposed by the internals | S7 | PASS | "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring is testing externally visible behavior as a user would see it | S7 | PASS | "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics are aggregations over a period of time of numeric data | S1 | PASS | "Metrics are aggregations over a period of time of numeric data about your" |
| 12 | What it is | A log is a timestamped message emitted by services or other components | S1 | PASS | "A log is a timestamped message emitted by services or other components." |
| 13 | What it is | A span represents a single unit of work or operation | S1 | PASS | "A span represents a single unit of work or operation." |
| 14 | What it is | A trace is made of one or more spans | S1 | PASS | "A trace is made of one or more spans." |
| 15 | What it is | The first span represents the root span | S1 | PASS | "The first span represents the root span." |
| 16 | What it is | A distributed trace records the path of a single request through multiple services | S1 | PASS | "records the path taken by a single request ... as it propagates through multiple services in an architecture" |
| 17 | What it is | Prometheus is an open-source systems monitoring and alerting toolkit | S8 | PASS | "is an open-source systems monitoring and alerting toolkit" |
| 18 | What it is | Prometheus collects and stores its metrics as time series data | S8 | PASS | "Prometheus collects and stores its metrics as time series data" |
| 19 | What it is | The Alertmanager handles alerts sent by client applications such as the Prometheus server | S23 | PASS | "The Alertmanager handles alerts sent by client applications such as the Prometheus server." |
| 20 | What it is | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S31 | PASS | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 21 | What it is | Loki does not index the contents of the logs | S31 | PASS | "Unlike other logging systems, Loki does not index the contents of the logs" |
| 22 | What it is | OpenTelemetry is open source, and vendor- and tool-agnostic | S2 | PASS | "Open source, as well as vendor- and tool-agnostic" |
| 23 | What it is | OpenTelemetry is not an observability backend itself | S2 | PASS | "OpenTelemetry is not an observability backend itself." |
| 24 | How it works | The Prometheus ecosystem has multiple components, many optional | S8 | PASS | "The Prometheus ecosystem consists of multiple components, many of which are optional" |
| 25 | How it works | The main Prometheus server scrapes and stores time series data | S8 | PASS | "the main Prometheus server which scrapes and stores time series data" |
| 26 | How it works | Client libraries instrument application code | S8 | PASS | "client libraries for instrumenting application code" |
| 27 | How it works | An alertmanager handles alerts | S8 | PASS | "an alertmanager to handle alerts" |
| 28 | How it works | Prometheus scrapes metrics from instrumented jobs | S8 | PASS | "Prometheus scrapes metrics from instrumented jobs" |
| 29 | How it works | It stores scraped samples locally and runs rules to aggregate/record series or generate alerts | S8 | PASS | "It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts." |
| 30 | How it works | Grafana or other API consumers can visualize the data | S8 | PASS | "Grafana or other API consumers can be used to visualize the collected data." |
| 31 | How it works | Time series collection happens via a pull model over HTTP | S8 | PASS | "time series collection happens via a pull model over HTTP" |
| 32 | How it works | Prometheus stores its data as time series | S8 | PASS | "Prometheus collects and stores its metrics as time series data" |
| 33 | How it works | Every time series is uniquely identified by metric name and optional labels | S9 | PASS | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| 34 | How it works | Prometheus may generate temporary derived time series from queries | S9 | PASS | "Prometheus may generate temporary derived time series as the result of queries." |
| 35 | How it works | An endpoint you can scrape is an instance, usually one process | S11 | PASS | "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 36 | How it works | A collection of instances with the same purpose is a job | S11 | PASS | "A collection of instances with the same purpose ... is called a job." |
| 37 | How it works | Prometheus attaches some labels automatically when it scrapes | S11 | PASS | "it attaches some labels automatically to the scraped time series" |
| 38 | How it works | The `job` label holds the configured job name | S11 | PASS | "job: The configured job name that the target belongs to." |
| 39 | How it works | The `instance` label holds host and port of the scraped URL | S11 | PASS | "instance: The <host>:<port> part of the target's URL that was scraped." |
| 40 | How it works | Prometheus stores a sample in `up` for each scrape | S11 | PASS | "For each instance scrape, Prometheus stores a sample in the following time series: up{...}" |
| 41 | How it works | `up` is 1 if healthy (reachable), 0 if the scrape failed | S11 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 42 | How it works | `up` is useful for availability monitoring | S11 | PASS | "The up time series is useful for instance availability monitoring." |
| 43 | How it works | Instrumentation libraries offer four core metric types | S10 | PASS | "The Prometheus instrumentation libraries offer four core metric types." |
| 44 | How it works | Counter: cumulative, monotonically increasing, only increase or reset to zero on restart | S10 | PASS | "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart." |
| 45 | How it works | Do not use a counter for a value that can decrease | S10 | PASS | "Do not use a counter to expose a value that can decrease." |
| 46 | How it works | Gauge: single numerical value that can go up and down | S10 | PASS | "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down." |
| 47 | How it works | Histogram counts observations in configurable buckets | S10 | PASS | "A histogram records observations ... by counting them in configurable buckets." |
| 48 | How it works | It also provides a sum of all observed values | S10 | PASS | "It also provides a sum of all observed values." |
| 49 | How it works | Classic histogram = multiple time series of simple float samples | S10 | PASS | "A classic histogram, however, consists of multiple time series of simple float" |
| 50 | How it works | They are the cumulative bucket counters, the sum, and the count | S10 | PASS | "cumulative counters for the observation buckets" and "the total sum of all observed values, exposed as <basename>_sum" |
| 51 | How it works | A summary samples observations, like a histogram | S10 | PASS | "Similar to a histogram, a summary samples observations" |
| 52 | How it works | Summaries calculate streaming φ-quantiles in the program and expose them | S20 | PASS | "summaries calculate streaming φ-quantiles within the instrumented program and expose them directly" |
| 53 | How it works | Histograms expose bucket counts; quantiles are computed on the server with `histogram_quantile()` | S20 | PASS | "histograms expose bucketed observation counts and the calculation of quantiles ... happens on the Prometheus server using the histogram_quantile()" |
| 54 | How it works | For a summary, other φ-quantiles and sliding windows cannot be calculated later | S20 | PASS | "Other φ-quantiles and sliding windows cannot be calculated later." |
| 55 | How it works | Metric names should have a single-word application prefix | S18 | PASS | "SHOULD have a (single-word) application prefix" |
| 56 | How it works | They should have a unit suffix, in plural form | S18 | PASS | "SHOULD have a suffix describing the unit, in plural form." |
| 57 | How it works | Every unique label combination is a new time series, which can greatly increase stored data | S18 | PASS | "every unique combination of key-value label" (line 191); the "of data stored" line follows at 193. |
| 58 | How it works | Do not use labels for high-cardinality dimensions such as user IDs, emails | S18 | PASS | "Do not use labels to store dimensions with high cardinality" |
| 59 | How it works | Services fall into three types: online-serving, offline-processing, batch jobs | S19 | PASS | "services can generally be broken down into three types:" |
| 60 | How it works | Online-serving systems should be monitored on client and server side | S19 | PASS | "Online-serving systems should be monitored on both the client and server side." |
| 61 | How it works | Differing behaviours on the two sides are useful for debugging | S19 | PASS | "If the two sides see different behaviors, that is very useful information for debugging." |
| 62 | How it works | Series absent until something happens are difficult to deal with | S19 | PASS | "Time series that are not present until something happens are difficult" |
| 63 | How it works | Export a default value such as 0 for series you know may exist | S19 | PASS | "export a default value such as 0 for" |
| 64 | How it works | Since 2.0, exposing processes must use a text format by default | S17 | PASS | "all processes that expose metrics to Prometheus must use a text format, by default." |
| 65 | How it works | Lines with # as first non-whitespace char are comments | S17 | PASS | "Lines with a # as the first non-whitespace character are comments." |
| 66 | How it works | They are ignored unless the first token is HELP or TYPE | S17 | PASS | "ignored unless the first token after # is either HELP or TYPE." |
| 67 | How it works | If the token is TYPE, exactly two more tokens are expected | S17 | PASS | "If the token is TYPE, exactly two more tokens are expected." |
| 68 | How it works | First is the metric name; second is counter, gauge, histogram, summary, or untyped | S17 | PASS | "The first is the metric name, and the second is either counter, gauge, histogram, summary, or untyped" |
| 69 | How it works | Remaining lines describe samples, one per line | S17 | PASS | "The remaining lines describe samples (one per line)" |
| 70 | How it works | PromQL is a functional query language to select and aggregate series in real time | S12 | PASS | "functional query language called PromQL ... lets the user select and aggregate time series data in real" |
| 71 | How it works | A query can be an instant query or a range query | S12 | PASS | "it can be an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time" |
| 72 | How it works | Instant vector definition | S12 | PASS | "Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 73 | How it works | Range vector definition | S12 | PASS | "Range vector - a set of time series containing a range of data points over time for each time series" |
| 74 | How it works | Instant vector selectors select series and one sample each at a timestamp | S12 | PASS | "Instant vector selectors allow the selection of a set of time series and a single sample value for each at a given timestamp" |
| 75 | How it works | Filter with comma-separated label matchers in curly braces | S12 | PASS | "appending a comma-separated list of label matchers in curly braces ({})" |
| 76 | How it works | Float counters are conventionally named `_total` | S12 | PASS | "By convention, time series containing float counters have a name ending on _total" |
| 77 | How it works | Instant vector vs scalar comparison drops elements where false | S40 | PASS | "comparison result is false get dropped from the result vector" |
| 78 | How it works | `rate()` = per-second average rate of increase | S13 | PASS | "rate(v range-vector) calculates the per-second average rate of increase of the time series in the range vector." |
| 79 | How it works | Counter resets are adjusted for automatically | S13 | PASS | "Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for." |
| 80 | How it works | `rate` should only be used with counters | S13 | PASS | "rate should only be used with counters" |
| 81 | How it works | Applying it to gauge floats gives a likely nonsensical result, but runs without complaint | S12 | PASS | "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains" |
| 82 | How it works | With an aggregation operator, take `rate()` first, then aggregate | S13 | PASS | "always take a rate() first, then aggregate." |
| 83 | How it works | Otherwise `rate()` cannot detect counter resets on restart | S13 | PASS | "Otherwise rate() cannot detect" |
| 84 | How it works | `histogram_quantile` calculates the φ-quantile from a classic or native histogram | S13 | PASS | "calculates the φ-quantile ... from a classic histogram or from a native histogram" |
| 85 | How it works | Use `rate()` to specify the time window for the quantile | S13 | PASS | "Use the rate() function to specify the time window for the quantile calculation." |
| 86 | How it works | For classic histograms, `le` must be in the `by` clause | S13 | PASS | "Since the le label is required by ... included in the by clause." |
| 87 | How it works | Recording rules precompute expressions and save results as new series | S14 | PASS | "Recording rules allow you to precompute frequently needed or computationally expensive expressions" |
| 88 | How it works | Recording and alerting rules live in a rule group | S14 | PASS | "Recording and alerting rules exist in a rule group." |
| 89 | How it works | Rules in a group run sequentially at a regular interval, same evaluation time | S14 | PASS | "run sequentially at a regular interval, with the same evaluation time." |
| 90 | How it works | Recording rule names must be valid metric names | S14 | PASS | "valid metric names." (line 147, follows "...names of recording rules must be" at 146) |
| 91 | How it works | An alerting rule's result series become pending or firing alerts | S14 | PASS | "all resultant time series become pending/firing alerts." |
| 92 | How it works | Alerts are firing once returned for this long | S14 | PASS | "Alerts are considered firing once they have been returned for this long." |
| 93 | How it works | Alerts not yet fired long enough are pending | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 94 | How it works | `labels` clause attaches extra labels | S15 | PASS | "The labels clause allows specifying a set of additional labels to be attached" |
| 95 | How it works | `annotations` clause stores longer info such as descriptions or runbook links | S15 | PASS | "informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| 96 | How it works | Prometheus stores synthetic `ALERTS` series for pending/firing alerts | S15 | PASS | "For pending and firing alerts, Prometheus also stores synthetic time series of the form ALERTS{...}" |
| 97 | How it works | Alerting rules show what is broken now but are not a full notification solution | S15 | PASS | "good at figuring what is broken right now, but they are not a fully-fledged notification solution." |
| 98 | How it works | Alerting is split into two parts | S22 | PASS | "Alerting with Prometheus is separated into two parts." |
| 99 | How it works | Rules in Prometheus servers send alerts to an Alertmanager | S22 | PASS | "Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| 100 | How it works | Alertmanager deduplicates, groups, routes to the right receiver | S23 | PASS | "It takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 101 | How it works | Grouping puts similar alerts into one notification | S23 | PASS | "Grouping categorizes alerts of similar nature into a single notification." |
| 102 | How it works | Inhibition suppresses notifications if other alerts are firing | S23 | PASS | "Inhibition is a concept of suppressing notifications for certain alerts if" |
| 103 | How it works | Silences mute alerts for a given time | S23 | PASS | "Silences are a straightforward way to simply mute alerts for a given time." |
| 104 | How it works | A silence uses matchers, like the routing tree | S23 | PASS | "A silence is configured based on matchers, just like the routing tree." |
| 105 | How it works | Every alert enters at the top-level route, which must match all alerts | S24 | PASS | "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 106 | How it works | It then traverses the child nodes | S24 | PASS | "It then traverses the child nodes." |
| 107 | How it works | `continue: false` stops after the first matching child | S24 | PASS | "If continue is set to false, it stops after the first matching child." |
| 108 | How it works | An unmatched alert is handled by the current node's parameters | S24 | PASS | "the alert is handled based on the configuration parameters of the current node." |
| 109 | How it works | Most optional route parameters inherit from the parent if not set | S24 | PASS | "Most optional configuration parameters ... are inherited from its parent node if not set." |
| 110 | How it works | `amtool` is a cli tool for the Alertmanager API | S25 | PASS | "amtool is a cli tool for interacting with the Alertmanager API." |
| 111 | How it works | It is bundled with all Alertmanager releases | S25 | PASS | "It is bundled with all releases of Alertmanager." |
| 112 | How it works | Config page: amtool can validate UTF-8 strict-mode compatibility before enabling it | S24 | PASS | "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server." |
| 113 | How it works | No running Alertmanager is needed for that check | S24 | PASS | "You do not need a running Alertmanager server to do this." |
| 114 | How it works | Aim for few alerts, on symptoms tied to end-user pain | S21 | PASS | "Aim to have as few alerts as possible, by alerting on symptoms that are" |
| 115 | How it works | Summary: keep alerting simple, alert on symptoms, good consoles, avoid pages with nothing to do | S21 | PASS | "To summarize: keep alerting simple, alert on symptoms, have good consoles to" |
| 116 | How it works | For error rates, page on user-visible errors | S21 | PASS | "For error rates, page on user-visible errors." |
| 117 | How it works | Four golden signals: latency, traffic, errors, saturation | S7 | PASS | "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| 118 | How it works | If you can only measure four metrics, focus on these | S7 | PASS | "If you can only measure four metrics of your user-facing system, focus on these four." |
| 119 | How it works | Errors are the rate of failing requests: explicitly, implicitly, or by policy | S7 | PASS | "The rate of requests that fail, either explicitly ..., implicitly ..., or by policy" |
| 120 | How it works | Distinguish latency of successes from failures | S7 | PASS | "It's important to distinguish between the latency of successful requests and the latency of failed requests." |
| 121 | How it works | Loki focuses on logs and collects by push | S31 | PASS | "focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 122 | How it works | Labels let Loki organise log messages into streams | S32 | PASS | "They allow Loki to organize and group together log messages into log streams." |
| 123 | How it works | An existing `service_name` label is used directly | S32 | PASS | "If a service_name label is already present on the stream, Loki uses it directly." |
| 124 | How it works | Otherwise first non-empty value from a label list, in order | S32 | PASS | "Otherwise, Loki looks for the first non-empty value from the following labels, in order" |
| 125 | How it works | If none match, `unknown_service` is applied | S32 | PASS | "a value of unknown_service is applied." |
| 126 | How it works | Use labels for regions, clusters, servers, applications, namespaces, environments | S33 | PASS | "Use labels for things like regions, clusters, servers, applications, namespaces, and environments." |
| 127 | How it works | Too many label combinations lead to too many streams | S33 | PASS | "Too many label value combinations leads to too many streams." |
| 128 | How it works | Penalties: large index, small chunks, can reduce performance | S33 | PASS | "a large index and small chunks in the store, which in turn can actually reduce performance." |
| 129 | How it works | Don't add a label until you know you need it | S33 | PASS | "don’t add a label for something until you know you need it!" |
| 130 | How it works | All LogQL queries contain a log stream selector | S34 | PASS | "All LogQL queries contain a log stream selector." |
| 131 | How it works | The selector may be followed by a log pipeline | S34 | PASS | "the log stream selector can be followed by a log pipeline." |
| 132 | How it works | A pipeline is chained stage expressions applied to selected streams | S34 | PASS | "A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams." |
| 133 | How it works | Selector is comma-separated key-value pairs | S34 | PASS | "specified by one or more comma-separated key-value pairs." |
| 134 | How it works | Operators `=`, `!=`, `=~`, `!~` | S34 | PASS | "=: exactly equal" ... "!~: regex does not match" |
| 135 | How it works | Line filter does a distributed grep over matching streams | S34 | PASS | "The line filter expression does a distributed grep over the aggregated logs from the matching log streams." |
| 136 | How it works | It searches line content, discarding non-matching lines (case-sensitive) | S34 | PASS | "discarding those lines that do not match the case-sensitive expression." |
| 137 | How it works | Label filter expression filters on original and extracted labels | S34 | PASS | "Label filter expression allows filtering log line using their original and extracted labels." |
| 138 | How it works | Metric queries apply a function to log query results | S35 | PASS | "Metric queries extend log queries by applying a function to log query results." |
| 139 | How it works | `count_over_time(log-range)` counts entries per stream in range | S35 | PASS | "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 140 | How it works | Push timestamp must be a string, else 400 | S36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 141 | How it works | `/loki/api/v1/query_range` queries over a range of time | S36 | PASS | "/loki/api/v1/query_range is used to do a query over a range of time." |
| 142 | How it works | `limit` is max entries, default 100 | S36 | PASS | "limit: The max number of entries to return. It defaults to 100." |
| 143 | How it works | `start` defaults to one hour ago | S36 | PASS | "Defaults to one hour ago." |
| 144 | How it works | Query endpoints return execution statistics | S36 | PASS | "return a set of statistics about the query execution." |
| 145 | How it works | `/ready` returns 200 when ready for traffic | S36 | PASS | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 146 | How it works | `/loki/api/v1/labels` lists known labels in a time span | S36 | PASS | "/loki/api/v1/labels retrieves the list of known labels within a given time span." |
| 147 | How it works | Context propagation lets signals correlate wherever generated | S3 | PASS | "signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated." |
| 148 | How it works | Propagation moves context between services and processes | S3 | PASS | "Propagation is the mechanism that moves context between services and processes." |
| 149 | How it works | Usually handled by instrumentation libraries, transparent to the user | S3 | PASS | "Propagation is usually handled by instrumentation libraries and is transparent" |
| 150 | How it works | OTel gives a text-based way to propagate context via W3C Trace Context headers | S4 | PASS | "OpenTelemetry provides a text-based approach to propagate context to remote services using the W3C Trace Context" |
| 151 | How it works | `traceparent` identifies the incoming request in a tracing system | S6 | PASS | "The traceparent HTTP header field identifies the incoming request in a tracing system." |
| 152 | How it works | Four fields: version, trace-id, parent-id, trace-flags | S6 | PASS | "It has four fields:" then version / trace-id / parent-id / trace-flags |
| 153 | How it works | trace-id is 16 bytes; all zero is invalid | S6 | PASS | "represented as a 16-byte array ... All bytes as zero ... is considered an invalid value." |
| 154 | How it works | parent-id is 8 bytes; all zero is invalid | S6 | PASS | "represented as an 8-byte array ... All bytes as zero ... is considered an invalid value." |
| 155 | How it works | Least significant flag bit set means caller may have recorded trace data | S6 | PASS | "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 156 | How it works | Flags are a bit field; cannot read by decoding hex to a number | S6 | PASS | "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 157 | How it works | In Python, the sender injects the current context | S4 | PASS | "on the sending service, inject the current context" |
| 158 | How it works | The receiver extracts context (e.g. from parsed headers) and sets it as current | S4 | PASS | "On the receiving service, extract context, for example, from parsed HTTP headers, and then set them as the current trace context." |
| 159 | How it works | Page says to use instrumentation libraries to propagate context | S4 | PASS | "Use instrumentation libraries to propagate context." |
| 160 | How it works | `ConsoleSpanExporter` is in the `opentelemetry-sdk` package | S5 | PASS | "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| 161 | How it works | You can use promtool to test rules | S16 | PASS | "You can use promtool to test your rules." |
| 162 | How it works | `promtool check config` checks config files | S26 | PASS | "promtool check config Check if the config files are valid or not." |
| 163 | How it works | `promtool check rules` checks rule files | S26 | PASS | "promtool check rules Check if the rule files are valid or not." |
| 164 | How it works | `promtool test rules` runs unit tests | S26 | PASS | "promtool test rules Unit tests for rules." |
| 165 | How it works | A test file lists rule files to consider | S16 | PASS | "This is a list of rule files to consider for testing." |
| 166 | How it works | Input series use expanding notation | S16 | PASS | "This uses expanding notation." |
| 167 | How it works | `_` is a missing sample | S16 | PASS | "'_' represents a missing sample from scrape" |
| 168 | How it works | Alert test lists the union of firing alerts for the alertname | S16 | PASS | "you have to list the union of all the firing alerts for the alertname under a single <alert_test_case>." |
| 169 | How it works | Empty `exp_alerts` tests "not firing" | S16 | PASS | "you can mention the above fields and leave 'exp_alerts' empty." |
| 170 | How it works | A PromQL expression test names expression, eval time, expected samples | S16 | PASS | Test-case schema in S16: "eval_time: <duration>" ... "exp_samples:" |
| 171 | Try it | Run date, versions, OS, bash, shells, empty HOME, `/work`, `/venv` | none | N/A | Record of the page's own run. |
| 172 | Try it | Listen addresses, gRPC port, `instance_interface_names` error, run advice, no cloud/container/remote host | none | N/A | Record of the run and reader advice. |
| 173 | Try it | Choices that no source gives are the tutorial's own; list of what was not run | none | N/A | Statement about the tutorial's own practice. |
| 174 | Try it | Prometheus docs provide precompiled binaries for most official components | S30 | PASS | "We provide precompiled binaries for most official Prometheus components." |
| 175 | Try it | Docs say Docker run is as simple as `docker run -p 9090:9090 prom/prometheus` | S30 | PASS | "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| 176 | Try it | Loki docs: install Loki and Alloy with Docker or Docker Compose for evaluating/testing/developing | S39 | PASS | "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 177 | Try it | Tutorial followed neither Docker page; installed release binaries (its own choice) | none | N/A | The page's own practice. |
| 178 | Try it | Install-script times, archive downloads, checksum compare, prefixes, limits, `~/.local/bin` | none | N/A | Record of the run. |
| 179 | Try it | Virtual environment, wheel checksum, pip without hash pinning | none | N/A | Record of the run. |
| 180 | Try it | Step 1: the app (code, routes, run commands, output) | none | N/A | The tutorial's own app and run. |
| 181 | Try it | `# HELP` and `# TYPE` lines are comments, used for help text and type | S17 | PASS | "Lines with a # ... are comments"; section heading "Comments, help text, and type information". |
| 182 | Try it | Name ending `_total` is the convention for counters | S12 | PASS | "By convention, time series containing float counters have a name ending on _total" |
| 183 | Try it | `app_requests_total` values 5, 1, 2, 1; `other` label | none | N/A | Record of the run and the tutorial's own choice. |
| 184 | Try it | A gauge is a value that can go up and down | S10 | PASS | "a single numerical value that can arbitrarily go up and down." |
| 185 | Try it | Histogram buckets are cumulative counters | S10 | PASS | "cumulative counters for the observation buckets" |
| 186 | Try it | Counts, sum 0.306769, sum differs per run | none | N/A | Record of the run. |
| 187 | Try it | Step 2: files, `prometheus.yml`, `rules.yml`, check commands | none | N/A | The tutorial's own files and commands. |
| 188 | Try it | Overview: targets are discovered via service discovery or static configuration | S8 | PASS | "targets are discovered via service discovery or static configuration" |
| 189 | Try it | Rule takes `rate()` first, then aggregates, as the docs say | S13 | PASS | "always take a rate() first, then aggregate." |
| 190 | Try it | Comparison of instant vector and scalar drops false elements by default | S40 | PASS | "By default they filter." and "comparison result is false get dropped from the result vector." |
| 191 | Try it | `bool` after the operator returns 0 or 1 instead of filtering | S40 | PASS | "modified by providing bool after the operator, which will return 0 or 1 for the value rather than filtering." |
| 192 | Try it | `for: 15s` means pending until returned that long | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 193 | Try it | `AppDown` fires when `up` is 0; `up` is 0 if the scrape failed | S11 | PASS | "0 if the scrape failed." |
| 194 | Try it | Both alerts carry `severity: page` and `summary` | S15 | PASS | The rule file is the tutorial's own. S15 supports the clauses: "The labels clause ..." and "The annotations clause ...". |
| 195 | Try it | `promtool check config` / `check rules` check config and rule files | S26 | PASS | "Check if the config files are valid or not." and "Check if the rule files are valid or not." |
| 196 | Try it | `--syntax-only` ignores file and content validation referenced in the config | S26 | PASS | "Only check the config file syntax, ignoring file and content validation referenced in the config" |
| 197 | Try it | Rules page: check a rule file without starting a server, with `promtool check rules` | S14 | PASS | "To quickly check whether a rule file is syntactically correct without starting a Prometheus server, you can use Prometheus's promtool" |
| 198 | Try it | Step 3 bullet: `promtool test rules` runs unit tests; test file lists rule files | S26, S16 | PASS | "Unit tests for rules."; "a list of rule files to consider for testing" |
| 199 | Try it | Docs read the notation as "series starts at a, then n further samples incrementing by b" | S16 | PASS | "Read this as series starts at a, then n further samples incrementing by b." |
| 200 | Try it | Step 3: test files, run output, arithmetic, exit statuses | none | N/A | The tutorial's own tests and run record. |
| 201 | Try it | `group_wait` = how long to wait before the first notification for a new group | S24 | PASS | "How long to wait before sending the first notification for a new group of" |
| 202 | Try it | `repeat_interval` = how long to wait before repeating the last notification | S24 | PASS | "How long to wait before repeating the last notification." |
| 203 | Try it | Every alert enters the top-level route, then traverses child nodes | S24 | PASS | "Every alert enters the routing tree at the configured top-level route ... It then traverses the child nodes." |
| 204 | Try it | Config page shows `amtool check-config` for UTF-8 strict-mode check | S24 | PASS | "amtool check-config config.yml --enable-feature=\"utf8-strict-mode\"" |
| 205 | Try it | No running Alertmanager server needed for that check | S24 | PASS | "You do not need a running Alertmanager server to do this." |
| 206 | Try it | README: amtool can visualize routes as a text tree | S25 | PASS | "amtool allows you to visualize the routes of your configuration in form of text tree view." |
| 207 | Try it | README: amtool can test routing by passing an alert's label set | S25 | PASS | "you can use it to test the routing by passing it label set of an alert" |
| 208 | Try it | README writes `amtool config routes` and `amtool config routes test`; not `routes show` | S25 | PASS | "$ amtool config routes --alertmanager.url=http://localhost:9093" and "$ amtool config routes test --config.file=..." |
| 209 | Try it | Step 4: root route, receivers, check-config output, route outputs | none | N/A | The tutorial's own file and run record. |
| 210 | Try it | `--config.file` is the Prometheus configuration file path | S29 | PASS | "--config.file Prometheus configuration file path." |
| 211 | Try it | `--storage.tsdb.path` is the base path for metrics storage | S29 | PASS | "--storage.tsdb.path Base path for metrics storage." |
| 212 | Try it | `--web.listen-address` is the address for UI, API, telemetry | S29 | PASS | "Address to listen on for UI, API, and telemetry." |
| 213 | Try it | `--cluster.listen-address=` stops Alertmanager listening for peer requests | S25 | PASS | "setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 214 | Try it | `/-/ready` returns 200 when Prometheus is ready to serve traffic | S28 | PASS | "This endpoint returns 200 when Prometheus is ready to serve traffic" |
| 215 | Try it | API response format is JSON | S27 | PASS | "The API response format is JSON." |
| 216 | Try it | `/api/v1/query` evaluates an instant query at a single point in time | S27 | PASS | "The following endpoint evaluates an instant query at a single point in time:" |
| 217 | Try it | `up` value "1" means healthy (reachable) | S11 | PASS | "1 if the instance is healthy, i.e. reachable" |
| 218 | Try it | Query results 6, 2, 1 and the run's arithmetic | none | N/A | Record of the run. |
| 219 | Try it | φ-quantile is the observation ranking at φ*N among N | S20 | PASS | "The φ-quantile is the observation value that ranks at number φ*N among the N observations." |
| 220 | Try it | The function interpolates within the bucket the quantile falls into | S13 | PASS | "interpolates the quantile value within the bucket the quantile value falls into." |
| 221 | Try it | For classic histograms it assumes a uniform distribution within the bucket | S13 | PASS | "For classic histograms ... it assumes a uniform distribution of observations within the bucket" |
| 222 | Try it | Docs use `rate()` to specify the time window | S13 | PASS | "Use the rate() function to specify the time window" |
| 223 | Try it | Step 6: helper functions, commands, output | none | N/A | The tutorial's own helpers and run record. |
| 224 | Try it | `/alerts` endpoint returns a list of all active alerts | S27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 225 | Try it | An alert is pending until returned for the `for` time | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 226 | Try it | README shows `amtool silence add alertname=Test_Alert` | S25 | PASS | "$ amtool silence add alertname=Test_Alert" |
| 227 | Try it | Alertmanager page says silences are configured in the web interface | S23 | PASS | "Silences are configured in the web interface of the Alertmanager." |
| 228 | Try it | No page describes `--silenced` or state `suppressed` | none | N/A | Statement about the tutorial's own reading, in the run record. |
| 229 | Try it | After the app stopped, `AppDown` was pending then firing; `up` was 0 because the scrape failed | S11 | PASS | "0 if the scrape failed." The pending/firing sequence is run record. |
| 230 | Try it | Loki page lists a complete filesystem-backed configuration | S37 | PASS | "This is a complete configuration to deploy Loki backed by the filesystem." |
| 231 | Try it | Folder is `/tmp/loki` on the page | S37 | PASS | "path_prefix: /tmp/loki" |
| 232 | Try it | Config reference describes `reporting_enabled` as "Enable anonymous usage reporting" | S38 | PASS | "# Enable anonymous usage reporting." |
| 233 | Try it | Step 7: `loki.yml`, `push.py`, commands, output | none | N/A | The tutorial's own files and run record. |
| 234 | Try it | `/ready` returns 200 when Loki is ready to accept traffic | S36 | PASS | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| 235 | Try it | Timestamp of each entry is a string, as the API needs | S36 | PASS | "you must send the timestamp as a string and not a number" |
| 236 | Try it | Without `service_name`, Loki uses the first non-empty value from a list | S32 | PASS | "Otherwise, Loki looks for the first non-empty value from the following labels, in order" |
| 237 | Try it | Config reference: Loki can discover and add log levels during ingestion if not present | S38 | PASS | "Discover and add log levels during ingestion, if not present already." |
| 238 | Try it | Line filter does a distributed grep and discards non-matching lines | S34 | PASS | "does a distributed grep over the aggregated logs from the matching log streams ... discarding those lines that do not match" |
| 239 | Try it | `limit` is the max number of entries, default 100 | S36 | PASS | "limit: The max number of entries to return. It defaults to 100." |
| 240 | Try it | `count_over_time` counts entries per stream in range | S35 | PASS | "counts the entries for each log stream within the given range." |
| 241 | Try it | `logfmt` stage parses each line to extract labels; next stage filters with them | S34 | PASS | "then parses each log line to extract more labels and filter with them." |
| 242 | Try it | Query endpoints return execution statistics | S36 | PASS | "return a set of statistics about the query execution." |
| 243 | Try it | Step 8: script uses `ConsoleSpanExporter`, included in `opentelemetry-sdk` | S5 | PASS | "included in the opentelemetry-sdk package." |
| 244 | Try it | Passes context by hand, as the Python docs show | S4 | PASS | S4 shows `inject` and `extract` examples. |
| 245 | Try it | Same page says to use instrumentation libraries to propagate context | S4 | PASS | "Use instrumentation libraries to propagate context." |
| 246 | Try it | Header has four fields | S6 | PASS | "It has four fields:" |
| 247 | Try it | Right-most flags bit, when set, means caller may have recorded trace data | S6 | PASS | "the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| 248 | Try it | Flags are a bit field and cannot be read as a number | S6 | PASS | "you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 249 | Try it | A span with a `trace_id` but no `parent_id` is a root span | S41 | PASS | "it has a trace_id field indicating the trace, but has no parent_id. That’s how you know it’s the root span." |
| 250 | Try it | No traceparent header means the vendor creates a new trace-id and parent-id | S6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 251 | Try it | Step 8: case 1/case 2 results and checks | none | N/A | Record of the run. |
| 252 | How a tester uses it | A counter can only increase or be reset to zero on restart | S10 | PASS | "value can only increase or be reset to zero on restart." |
| 253 | How a tester uses it | `up` is 1 if healthy, 0 if scrape failed | S11 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 254 | How a tester uses it | SRE book counts HTTP 200 with wrong content as an implicit error | S7 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 255 | How a tester uses it | A test can expect no firing alert with empty `exp_alerts` | S16 | PASS | "leave 'exp_alerts' empty." |
| 256 | How a tester uses it | Every alert enters the top-level route and traverses child nodes | S24 | PASS | "It then traverses the child nodes." |
| 257 | How a tester uses it | Alert is pending first, firing later because of `for` | S14 | PASS | "Alerts are considered firing once they have been returned for this long." |
| 258 | How a tester uses it | `wait_for` polls `/api/v1/alerts` | S27 | PASS | "GET /api/v1/alerts" exists. The polling helper is the tutorial's own. |
| 259 | How a tester uses it | Docs say not to use high-cardinality labels such as user IDs | S18 | PASS | "Do not use labels to store dimensions with high cardinality" |
| 260 | How a tester uses it | In Loki, too many label combinations give too many streams | S33 | PASS | "Too many label value combinations leads to too many streams." |
| 261 | How a tester uses it | Label selected the stream, line filter kept `code=500` lines | S34 | PASS | "The line filter expression does a distributed grep". Step 7 detail is record. |
| 262 | How a tester uses it | Context propagation lets signals correlate wherever generated | S3 | PASS | "can be correlated with each other, regardless of where they are generated." |
| 263 | How a tester uses it | Bullets 1, 3, 4, 8: steps 1, 3, 4, 5, 6, 7, 8 results, `other` path | none | N/A | Record of the run. |
| 264 | Common mistakes | `rate` should only be used with counters | S13 | PASS | "rate should only be used with counters" |
| 265 | Common mistakes | Applied to gauge floats: likely nonsensical but processed | S12 | PASS | "will most likely produce a nonsensical result, but the query will be processed without complains" |
| 266 | Common mistakes | Take `rate()` first, then aggregate | S13 | PASS | "always take a rate() first, then aggregate." |
| 267 | Common mistakes | Otherwise `rate()` cannot detect counter resets on restart | S13 | PASS | "Otherwise rate() cannot detect" |
| 268 | Common mistakes | Do not use a counter for a value that can decrease | S10 | PASS | "Do not use a counter to expose a value that can decrease." |
| 269 | Common mistakes | Example: running processes use a gauge | S10 | PASS | "do not use a counter for the number of currently running processes; instead use a gauge." |
| 270 | Common mistakes | Prometheus implements pre-calculated quantiles as the metric type summary | S20 | PASS | "Prometheus implements this approach in the form of a metric type called" (summary). |
| 271 | Common mistakes | Cannot recalculate quantiles later for another window or percentile; cannot aggregate quantiles | S20 | PASS | "you cannot “recalculate” the quantiles later" and "you cannot aggregate quantiles" |
| 272 | Common mistakes | Do not put high-cardinality values in labels | S18 | PASS | "Do not use labels to store dimensions with high cardinality" |
| 273 | Common mistakes | In Loki, penalties are a large index and small chunks | S33 | PASS | "a large index and small chunks in the store" |
| 274 | Common mistakes | Alerts not fired long enough are pending | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 275 | Common mistakes | Active silence means no notifications for the alert | S23 | PASS | "If they do, no notifications will be sent out for that alert." |
| 276 | Common mistakes | `up` says whether the scrape worked | S11 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| 277 | Common mistakes | SRE book counts an HTTP 200 with wrong content as an implicit error | S7 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 278 | Common mistakes | Distinguish success latency from failure latency | S7 | PASS | "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| 279 | Common mistakes | `check rules` checks files; `test rules` runs unit tests | S26 | PASS | "Check if the rule files are valid or not." and "Unit tests for rules." |
| 280 | Common mistakes | Series absent until something happens are hard to handle | S19 | PASS | "Time series that are not present until something happens are difficult" |
| 281 | Common mistakes | Export a default value such as 0 for series that may exist | S19 | PASS | "export a default value such as 0 for" |
| 282 | Common mistakes | Push timestamp must be a string, else 400 | S36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 283 | Common mistakes | Line filter discards non-matching lines (case-sensitive) | S34 | PASS | "discarding those lines that do not match the case-sensitive expression." |
| 284 | Common mistakes | No traceparent header means a new trace-id and parent-id | S6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 285 | Common mistakes | Flags are a bit field and cannot be read as a number | S6 | PASS | "you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 286 | Common mistakes | Run-specific lines (steps 2, 6, 8 results; histogram has no status label; gRPC port open) | none | N/A | Record of the run and the page's own advice. |
| 287 | What a tester can check | Callout "Tutorial advice": 13 advice items | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the page does not already support. |
| 288 | Key words | Observability | none | PASS | Technical: "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 289 | Key words | Instrumentation | none | PASS | Technical: "your application must be properly instrumented" |
| 290 | Key words | Telemetry | none | PASS | Technical: "Telemetry refers to data emitted from a system and its behavior" |
| 291 | Key words | Metric | none | PASS | Technical: "Metrics are aggregations over a period of time of numeric data about your infrastructure or application" |
| 292 | Key words | Log | none | PASS | Technical: "A log is a timestamped message emitted by services or other components" |
| 293 | Key words | Span | none | PASS | Technical: "A span represents a single unit of work or operation" |
| 294 | Key words | Trace | none | PASS | Technical: "A trace is made of one or more spans" |
| 295 | Key words | Time series | none | PASS | Technical: "Every time series is uniquely identified by its metric name and optional key-value pairs called labels" |
| 296 | Key words | Label | none | PASS | Technical: "optional key-value pairs called labels" |
| 297 | Key words | Instance | none | PASS | Technical: "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 298 | Key words | Job | none | PASS | Technical: "A collection of instances with the same purpose is called a job" |
| 299 | Key words | up | none | PASS | Technical: "Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed" |
| 300 | Key words | Counter | none | PASS | Technical: "A counter is a cumulative metric ... reset to zero on restart" |
| 301 | Key words | Gauge | none | PASS | Technical: "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down" |
| 302 | Key words | Histogram | none | PASS | Technical: "A histogram records observations by counting them in configurable buckets" |
| 303 | Key words | Summary | none | PASS | Technical: "Similar to a histogram, a summary samples observations" |
| 304 | Key words | PromQL | none | PASS | Technical: "Prometheus provides a functional query language called PromQL that lets the user select and aggregate time series data in real time" |
| 305 | Key words | Instant vector | none | PASS | Technical: "An instant vector is a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| 306 | Key words | Range vector | none | PASS | Technical: "A range vector is a set of time series containing a range of data points over time for each time series" |
| 307 | Key words | Recording rule | none | PASS | Technical: "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series" |
| 308 | Key words | Pending | none | PASS | Technical: "Alerts which have not yet fired for long enough are considered pending" |
| 309 | Key words | Firing | none | PASS | Technical: "Alerts are considered firing once they have been returned for this long" |
| 310 | Key words | Alertmanager | none | PASS | Technical: "The Alertmanager takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 311 | Key words | Grouping | none | PASS | Technical: "Grouping categorizes alerts of similar nature into a single notification" |
| 312 | Key words | Inhibition | none | PASS | Technical: "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing" |
| 313 | Key words | Silence | none | PASS | Technical: "Silences are a straightforward way to simply mute alerts for a given time" |
| 314 | Key words | Routing tree | none | PASS | Technical: "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 315 | Key words | promtool | none | PASS | Technical: "You can use promtool to test your rules" |
| 316 | Key words | amtool | none | PASS | Technical: "The `amtool` command is a cli tool for interacting with the Alertmanager API" |
| 317 | Key words | Loki | none | PASS | Technical: "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus" |
| 318 | Key words | Log stream | none | PASS | Technical: "Labels allow Loki to organize and group together log messages into log streams" |
| 319 | Key words | LogQL | none | PASS | Technical: "All LogQL queries contain a log stream selector" |
| 320 | Key words | Context propagation | none | PASS | Technical: "Propagation is the mechanism that moves context between services and processes" |
| 321 | Key words | traceparent | none | PASS | Technical: "The `traceparent` HTTP header field identifies the incoming request in a tracing system" |
| 322 | Key words | Golden signals | none | PASS | Technical: "the four golden signals of monitoring are latency, traffic, errors, and saturation" |
| 323 | Key words | Cardinality | none | PASS | Technical: "Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values" |

Open FAILs after round 11: 0

Changed after this round: No FAILs. One PASS quote of the checker (row 91) joins two halves that the page cites with `||` because a YAML comment line stands between them in the source; the page text is unchanged.

## Round 12 (2026-11-19)

# Fact check: devops / monitoring-observability (round 12)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers observability, Prometheus, Alertmanager, Loki, OTel trace context, a local practice run | none | N/A | Describes the page itself. |
| 2 | Lede | Page covers the signals and tools; practice run needs no cloud account and no Docker; page order | none | N/A | Describes the page and its own run. The link is not a fact. |
| 3 | What it is | Observability lets you understand a system from the outside | S1 | PASS | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings" |
| 4 | What it is | The application must be properly instrumented | S1 | PASS | "your application must be properly instrumented" |
| 5 | What it is | Code must emit traces, metrics, logs | S1 | PASS | "the application code must emit signals such as traces, metrics, and logs" |
| 6 | What it is | Telemetry is data emitted from a system and its behavior | S1 | PASS | "Telemetry refers to data emitted from a system and its behavior" |
| 7 | What it is | OpenTelemetry is the mechanism for instrumenting code | S1 | PASS | "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable" |
| 8 | What it is | SRE book definition of monitoring | S7 | PASS | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 9 | What it is | White-box monitoring | S7 | PASS | "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring | S7 | PASS | "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics are aggregations over time of numeric data | S1 | PASS | "Metrics are aggregations over a period of time of numeric data about your" |
| 12 | What it is | A log is a timestamped message | S1 | PASS | "A log is a timestamped message emitted by services or other components." |
| 13 | What it is | A span is a single unit of work | S1 | PASS | "A span represents a single unit of work or operation." |
| 14 | What it is | A trace is made of one or more spans; first span is the root span | S1 | PASS | "A trace is made of one or more spans. The first span represents the root span." |
| 15 | What it is | A distributed trace records a request's path across services | S1 | PASS | "records the path taken by a single request ... as it propagates through multiple services in an architecture" |
| 16 | What it is | Prometheus is an open-source monitoring and alerting toolkit | S8 | PASS | "is an open-source systems" (line 118, text continues on the next line) |
| 17 | What it is | Prometheus stores its metrics as time series | S8 | PASS | "Prometheus collects and stores its metrics as time series data" |
| 18 | What it is | Alertmanager handles alerts from client apps such as Prometheus | S23 | PASS | "The Alertmanager handles alerts sent by client applications such as the Prometheus server." |
| 19 | What it is | Loki is a scalable, multi-tenant log system inspired by Prometheus | S31 | PASS | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 20 | What it is | Loki does not index log contents | S31 | PASS | "Unlike other logging systems, Loki does not index the contents of the logs" |
| 21 | What it is | OpenTelemetry is open source and vendor- and tool-agnostic | S2 | PASS | "Open source, as well as vendor- and tool-agnostic" |
| 22 | What it is | OpenTelemetry is not an observability backend | S2 | PASS | "OpenTelemetry is not an observability backend itself." |
| 23 | How it works | Prometheus has multiple components, many optional | S8 | PASS | "The Prometheus ecosystem consists of multiple components, many of which are optional" |
| 24 | How it works | Server scrapes and stores; client libraries instrument; alertmanager handles alerts | S8 | PASS | "which scrapes and stores time series data"; "client libraries for instrumenting application code"; "an alertmanager to handle alerts" |
| 25 | How it works | Scrapes from jobs; stores samples locally and runs rules; Grafana visualizes | S8 | PASS | "Prometheus scrapes metrics from instrumented jobs"; "stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts"; "to visualize the collected data" |
| 26 | How it works | Collection is a pull model over HTTP | S8 | PASS | "time series collection happens via a pull model over HTTP" |
| 27 | How it works | Prometheus stores data as time series | S8 | PASS | "stores its metrics as time series data" |
| 28 | How it works | A series is identified by metric name and labels | S9 | PASS | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| 29 | How it works | Temporary derived series from queries | S9 | PASS | "Prometheus may generate temporary derived time series" |
| 30 | How it works | Instance and job definitions | S11 | PASS | "an endpoint you can scrape is called an instance, usually corresponding to a single process. A collection of instances with the same purpose ... is called a job." |
| 31 | How it works | Auto labels job and instance | S11 | PASS | "it attaches some labels automatically"; "job: The configured job name that the target belongs to."; "instance: The <host>:<port> part of the target's URL that was scraped." |
| 32 | How it works | The up series, its value, and its use | S11 | PASS | "up{...}: 1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed."; "The up time series is useful for instance availability monitoring." |
| 33 | How it works | Four core metric types | S10 | PASS | "offer four core metric types" |
| 34 | How it works | Counter definition; do not use for values that decrease | S10 | PASS | "value can only increase or be reset to zero on restart"; "Do not use a counter to expose a value that can decrease." |
| 35 | How it works | Gauge | S10 | PASS | "arbitrarily go up and down" |
| 36 | How it works | Histogram buckets and sum; classic histogram series; summary | S10 | PASS | "counting them in configurable buckets. It also provides a sum"; "consists of multiple time series of simple float samples"; "cumulative counters for the observation buckets ... the total sum ... the count"; "Similar to a histogram, a summary samples observations" |
| 37 | How it works | Summary vs histogram quantiles | S20 | PASS | "summaries calculate streaming φ-quantiles within the instrumented program and expose them directly, while histograms expose bucketed observation counts and the calculation of quantiles ... happens on the Prometheus server using the histogram_quantile() function"; "Other φ-quantiles and sliding windows cannot be calculated later." |
| 38 | How it works | Metric naming: prefix and unit suffix | S18 | PASS | "(single-word) application prefix"; "suffix describing the unit, in plural form" |
| 39 | How it works | Label combinations and high cardinality | S18 | PASS | "pairs represents a new time series, which can dramatically increase the amount of data stored. Do not use labels to store dimensions with high cardinality" |
| 40 | How it works | Three service types; client and server monitoring; default value | S19 | PASS | "three types: online-serving, offline-processing, and batch jobs"; "monitored on both the client and server side"; "export a default value such as 0 for" |
| 41 | How it works | Text format rules (version 2.0, comments, HELP and TYPE, samples) | S17 | PASS | "As of Prometheus version 2.0, all processes that expose metrics to Prometheus must use a text format, by default."; "ignored unless the first token after # is either HELP or TYPE"; "exactly two more tokens are expected"; "The remaining lines describe samples (one per line)" |
| 42 | How it works | PromQL definition; instant and range queries; vectors; selectors; matchers; `_total` | S12 | PASS | "functional query language called PromQL ... select and aggregate time series data in real time"; "instant query, evaluated at one point in time, or a range query at equally-spaced steps"; "Instant vector - a set of time series containing a single sample..."; "comma-separated list of label"; "name ending on _total" |
| 43 | How it works | Comparison with scalar drops false elements | S40 | PASS | "vector elements between which the comparison result is false get dropped from the result vector" |
| 44 | How it works | rate definition, resets, counters only, rate before sum | S13 | PASS | "calculates the per-second average rate of increase"; "Breaks in monotonicity (such as counter resets due to target restarts)"; "rate should only be used with counters"; "always take a rate() first, then aggregate. Otherwise rate() cannot detect" |
| 45 | How it works | rate on gauge floats gives a nonsensical result without error | S12 | PASS | "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains" |
| 46 | How it works | histogram_quantile; rate for time window; le in by clause | S13 | PASS | "calculates the φ-quantile (0 ≤ φ ≤ 1) from a classic histogram or from a native histogram"; "Use the rate() function to specify the time window for the quantile"; "the le label ... has to be" included |
| 47 | How it works | Recording rules and rule groups | S14 | PASS | "precompute frequently needed or computationally expensive"; "Recording and alerting rules exist in a rule group. Rules within a group are run sequentially at a regular interval, with the same evaluation time."; "valid metric names" |
| 48 | How it works | Alerting rule results become pending/firing; firing and pending defined | S14 | PASS | "all resultant time series become pending/firing alerts"; "Alerts are considered firing once they have been returned for this long."; "Alerts which have not yet fired for long enough are considered pending." |
| 49 | How it works | labels and annotations clauses; ALERTS series; not a notification solution | S15 | PASS | "allows specifying a set of additional labels to be attached"; "longer additional information such as alert descriptions or runbook links"; "ALERTS{alertname=...}"; "they are not a fully-fledged notification solution" |
| 50 | How it works | Alerting has two parts; rules send alerts to Alertmanager | S22 | PASS | "separated into two parts. Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| 51 | How it works | Alertmanager dedupes, groups, routes; grouping; inhibition; silences; matchers | S23 | PASS | "deduplicating, grouping, and routing them to the correct receiver integration"; "Grouping categorizes alerts of similar nature into a single notification"; "Inhibition is a concept of suppressing notifications"; "Silences are a straightforward way to simply mute alerts for a given time."; "A silence is configured based on matchers, just like the routing tree." |
| 52 | How it works | Routing tree: top-level route, children, continue, unmatched alerts, inheritance | S24 | PASS | "Every alert enters the routing tree at the configured top-level route, which must match all alerts"; "It then traverses the child nodes. If continue is set to false, it stops after the first matching child."; "...current node."; "are inherited from its parent node if" |
| 53 | How it works | amtool is a CLI for the Alertmanager API, bundled with releases | S25 | PASS | "amtool is a cli tool for interacting with the Alertmanager API. It is bundled with all releases of Alertmanager." |
| 54 | How it works | amtool validates UTF-8 strict mode; no running server needed | S24 | PASS | "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server. You do not need a running Alertmanager server to do this." |
| 55 | How it works | As few alerts as possible; symptoms; page on user-visible errors | S21 | PASS | "Aim to have as few alerts as possible, by alerting on symptoms"; "To summarize: keep alerting simple, alert on symptoms, have good consoles"; "For error rates, page on user-visible errors." |
| 56 | How it works | Four golden signals; focus on four; errors; latency of success vs failure | S7 | PASS | "The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four."; "The rate of requests that fail, either explicitly ..., implicitly ..., or by policy"; "It's important to distinguish between the latency of successful requests and the latency of failed requests." |
| 57 | How it works | Loki: logs not metrics, push not pull | S31 | PASS | "Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 58 | How it works | Loki labels and service_name rules | S32 | PASS | "organize and group together log messages into log streams"; "If a service_name label is already present on the stream, Loki uses it directly. Otherwise, Loki looks for the first non-empty value"; "a value of unknown_service is applied" |
| 59 | How it works | Loki label advice and penalties | S33 | PASS | "Use labels for things like regions, clusters, servers, applications, namespaces, and environments."; "Too many label value combinations leads to too many streams. The penalties for that in Loki are a large index and small chunks"; "don’t add a label for something until you know you need it!" |
| 60 | How it works | LogQL selector, pipeline, operators, line filter, label filter | S34 | PASS | "All LogQL queries contain a log stream selector."; "followed by a log pipeline"; "one or more comma-separated key-value pairs"; "=: exactly equal", "!=: not equal", "=~: regex matches", "!~: regex does not match"; "does a distributed grep"; "case-sensitive expression"; "using their original and extracted labels" |
| 61 | How it works | Metric queries and count_over_time | S35 | PASS | "Metric queries extend log queries by applying a function to log query results."; "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 62 | How it works | Loki API: push timestamp string, query_range, limit, start, stats, ready, labels | S36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error"; "limit: The max number of entries to return. It defaults to 100."; "Defaults to one hour ago."; "return a set of statistics about the query execution"; "/ready returns HTTP 200 when the Loki instance is ready to accept traffic"; "/loki/api/v1/labels retrieves the list of known labels within a given time span." |
| 63 | How it works | Context propagation correlates signals; propagation moves context; handled by libraries | S3 | PASS | "signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated"; "Propagation is the mechanism that moves context between services and processes."; "usually handled by instrumentation libraries and is transparent" |
| 64 | How it works | OTel text-based propagation with W3C headers; inject and extract; use libraries | S4 | PASS | "a text-based approach to propagate context to remote services using the W3C Trace Context HTTP headers"; "on the sending service, inject the current context"; "extract context, for example, from parsed HTTP headers, and then set them as the current trace context"; "Use instrumentation libraries to propagate context." |
| 65 | How it works | traceparent fields, sizes, zero invalid, flag bit, bit field | S6 | PASS | "identifies the incoming request in a tracing system. It has four fields:"; "16-byte array ... All bytes as zero ... is considered an invalid value"; "8-byte array"; "the least significant bit (right-most), denotes that the caller may have recorded trace data"; "you cannot interpret flags by decoding the hex value" |
| 66 | How it works | ConsoleSpanExporter is in opentelemetry-sdk | S5 | PASS | "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| 67 | How it works | promtool can test rules | S16 | PASS | "You can use promtool to test your rules." |
| 68 | How it works | promtool check config, check rules, test rules | S26 | PASS | "Check if the config files are valid or not."; "Check if the rule files are valid or not."; "promtool test rules Unit tests for rules." |
| 69 | How it works | Test file format: rule files, expanding notation, `_`, alert test union, empty exp_alerts, PromQL test | S16 | PASS | "This is a list of rule files to consider for testing."; "This uses expanding notation."; "'_' represents a missing sample from scrape"; "list the union of all the firing alerts for the alertname under a single <alert_test_case>"; "leave 'exp_alerts' empty"; "exp_samples:" |
| 70 | Try it | Run date, versions, isolated HOME, run folder names | none | N/A | Record of the page's own run. |
| 71 | Try it | Listening addresses; Loki gRPC port; `instance_interface_names: [lo]` failure; ports in the run; advice to run on a trusted network | none | N/A | Record of the page's own run and the page's own advice. |
| 72 | Try it | The choices that no source gives are the tutorial's own; Grafana, Collector, Alloy, Promtail, Jaeger, and others were not run | none | N/A | Describes the page's own practice. |
| 73 | Try it | Prometheus docs provide precompiled binaries; `docker run -p 9090:9090 prom/prometheus` | S30 | PASS | "We provide precompiled binaries for most official Prometheus components."; "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| 74 | Try it | Loki docs: install Loki and Alloy with Docker or Docker Compose | S39 | PASS | "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 75 | Try it | Install steps, checksums, hashes, install paths | none | N/A | Record of the page's own run. The page states the checksum limits itself. |
| 76 | Try it | Step 1 app, code, run, and output | none | N/A | The tutorial's own app and run output. |
| 77 | Try it | Step 1: `# HELP` and `# TYPE` lines are comments for help text and type | S17 | PASS | "Comments, help text, and type information"; "ignored unless the first token after # is either HELP or TYPE" |
| 78 | Try it | Step 1: counter name ends in `_total` by convention | S12 | PASS | "By convention, time series containing float counters have a name ending on _total" |
| 79 | Try it | Step 1: a gauge can go up and down | S10 | PASS | "arbitrarily go up and down" |
| 80 | Try it | Step 1: histogram buckets are cumulative counters | S10 | PASS | "cumulative counters for the observation buckets" |
| 81 | Try it | Step 2: targets come from service discovery or static configuration | S8 | PASS | "targets are discovered via service discovery or static configuration" |
| 82 | Try it | Step 2: take `rate()` first, then aggregate with `sum by (job)` | S13 | PASS | "always take a rate() first, then aggregate." |
| 83 | Try it | Step 2: comparison drops false elements by default; `bool` returns 0 or 1 | S40 | PASS | "By default they filter. Their behavior can be modified by providing bool after the operator, which will return 0 or 1 for the value rather than filtering." |
| 84 | Try it | Step 2: `for` means pending until returned for that long | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 85 | Try it | Step 2: `up` is 0 if the scrape failed | S11 | PASS | "or 0 if the scrape failed" |
| 86 | Try it | Step 2: alerts carry a label and an annotation | S15 | PASS | "The labels clause allows specifying a set of additional labels to be attached"; "The annotations clause specifies a set of informational labels" |
| 87 | Try it | Step 2: promtool check commands; `--syntax-only` flag | S26 | PASS | "Check if the config files are valid or not."; "--syntax-only Only check the config file syntax, ignoring file and content validation referenced in the config" |
| 88 | Try it | Step 2: check rules without starting a server | S14 | PASS | "To quickly check whether a rule file is syntactically correct without starting" (a Prometheus server) |
| 89 | Try it | Step 3: `promtool test rules` runs unit tests; test file lists rule files | S26, S16 | PASS | S26: "promtool test rules Unit tests for rules."; S16: "This is a list of rule files to consider for testing." |
| 90 | Try it | Step 3: docs read the notation as "series starts at a, then n further samples incrementing by b" | S16 | PASS | "Read this as series starts at a, then n further samples incrementing by b." |
| 91 | Try it | Step 3: sums, exp_alerts, exit statuses, and failure output | none | N/A | Record of the page's own run. |
| 92 | Try it | Step 4: group_wait is how long to wait before the first notification for a new group | S24 | PASS | "A short group_wait will reduce the time to wait before sending the first notification for a new group of alerts." |
| 93 | Try it | Step 4: repeat_interval is how long to wait before repeating the last notification | S24 | PASS | "How long to wait before repeating the last notification." |
| 94 | Try it | Step 4: alerts enter at the top-level route and traverse children | S24 | PASS | "Every alert enters the routing tree at the configured top-level route ... It then traverses the child nodes." |
| 95 | Try it | Step 4: the page shows `amtool check-config` for UTF-8 strict mode; no running server needed | S24 | PASS | "amtool check-config config.yml --enable-feature=\"utf8-strict-mode\""; "You do not need a running Alertmanager server to do this." |
| 96 | Try it | Step 4: README: amtool visualizes routes as a text tree and tests routing with a label set | S25 | PASS | "amtool allows you to visualize the routes of your configuration in form of text tree view. Also you can use it to test the routing by passing it label set of an alert" |
| 97 | Try it | Step 4: README writes `amtool config routes` and `amtool config routes test`, not `show` | S25 | PASS | "$ amtool config routes --alertmanager.url=http://localhost:9093"; "$ amtool config routes test --config.file=doc/examples/simple.yml ..." |
| 98 | Try it | Step 5: `--config.file`, `--storage.tsdb.path`, `--web.listen-address` descriptions | S29 | PASS | "Prometheus configuration file path."; "Base path for metrics storage."; "Address to listen on for UI, API, and telemetry." |
| 99 | Try it | Step 5: `--cluster.listen-address=` prevents listening for peer requests | S25 | PASS | "setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 100 | Try it | Step 5: `/-/ready` returns 200 when ready | S28 | PASS | "This endpoint returns 200 when Prometheus is ready to serve traffic" |
| 101 | Try it | Step 5: API format is JSON; `/api/v1/query` evaluates an instant query | S27 | PASS | "The API response format is JSON."; "evaluates an instant query at a single point in time" |
| 102 | Try it | Step 5: `up` value 1 means healthy and reachable | S11 | PASS | "1 if the instance is healthy, i.e. reachable" |
| 103 | Try it | Step 5: φ-quantile is the value ranked at φ*N | S20 | PASS | "The φ-quantile is the observation value that ranks at number φ*N among the N observations." |
| 104 | Try it | Step 5: histogram_quantile interpolates; uniform distribution for classic histograms | S13 | PASS | "interpolates the quantile value within the bucket the quantile value falls into. For classic histograms ... it assumes a uniform distribution of observations within the bucket" |
| 105 | Try it | Step 5: docs use `rate()` to specify the time window | S13 | PASS | "Use the rate() function to specify the time window for the quantile" |
| 106 | Try it | Step 5: the rank arithmetic (8.1, 0.275) and the data folders | none | N/A | The page labels it "the tutorial's own arithmetic" and part of its own run. |
| 107 | Try it | Step 6: `/alerts` returns a list of all active alerts | S27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 108 | Try it | Step 6: pending until returned for the `for` time | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 109 | Try it | Step 6: README shows `amtool silence add alertname=Test_Alert` | S25 | PASS | "$ amtool silence add alertname=Test_Alert" |
| 110 | Try it | Step 6: Alertmanager page: silences are configured in the web interface | S23 | PASS | "Silences are configured in the web interface of the Alertmanager." |
| 111 | Try it | Step 6: no page describes `--silenced` or `suppressed` | none | N/A | Statement about the tutorial's own reading. I searched S23 to S26 and found neither term. |
| 112 | Try it | Step 6: `AppDown` `up` was 0 because the scrape failed | S11 | PASS | "or 0 if the scrape failed" |
| 113 | Try it | Step 7: the Loki docs page lists a complete filesystem configuration; the page uses `/tmp/loki` | S37 | PASS | "This is a complete configuration to deploy Loki backed by the filesystem."; "path_prefix: /tmp/loki" |
| 114 | Try it | Step 7: reference describes the setting as "Enable anonymous usage reporting" | S38 | PASS | "# Enable anonymous usage reporting." |
| 115 | Try it | Step 7: `/ready` returns 200 when ready | S36 | PASS | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic" |
| 116 | Try it | Step 7: timestamp is a string, as the API needs | S36 | PASS | "you must send the timestamp as a string and not a number" |
| 117 | Try it | Step 7: Loki looks for the first non-empty value from a label list | S32 | PASS | "Loki looks for the first non-empty value from the following labels, in order" |
| 118 | Try it | Step 7: Loki can discover and add log levels during ingestion | S38 | PASS | "Discover and add log levels during ingestion, if not present already." |
| 119 | Try it | Step 7: no page names `detected_level` | none | N/A | Statement about the tutorial's own reading. A search of all pages found no `detected_level`. |
| 120 | Try it | Step 7: line filter does a distributed grep and discards non-matching lines | S34 | PASS | "The line filter expression does a distributed grep"; "discarding those lines that do not match the case-sensitive expression" |
| 121 | Try it | Step 7: `limit` is the max number of entries; default 100 | S36 | PASS | "limit: The max number of entries to return. It defaults to 100." |
| 122 | Try it | Step 7: `count_over_time` counts entries per stream in the range | S35 | PASS | "counts the entries for each log stream within the given range." |
| 123 | Try it | Step 7: `logfmt` parses each line to extract labels; next stage filters | S34 | PASS | "| logfmt | duration > 10s ... then parses each log line to extract more labels and filter with them." |
| 124 | Try it | Step 7: query endpoints return statistics | S36 | PASS | "return a set of statistics about the query execution" |
| 125 | Try it | Step 8: ConsoleSpanExporter is in opentelemetry-sdk | S5 | PASS | "included in the opentelemetry-sdk package." |
| 126 | Try it | Step 8: context passed by hand as the Python docs show; docs say to use libraries | S4 | PASS | "inject the current context"; "Use instrumentation libraries to propagate context." |
| 127 | Try it | Step 8: four fields; right-most bit; bit field | S6 | PASS | "It has four fields:"; "the least significant bit (right-most), denotes that the caller may have recorded trace data"; "As this is a bit field, you cannot interpret flags by decoding the hex value" |
| 128 | Try it | Step 8: "no page names that other bit" | none | N/A | Statement about the tutorial's own reading. S6 only names `sampled`; I found no other bit named. |
| 129 | Try it | Step 8: root span has trace_id but no parent_id | S41 | PASS | "it has a trace_id field indicating the trace, but has no parent_id. That’s how you know it’s the root span." |
| 130 | Try it | Step 8: with no traceparent, vendor creates a new trace-id and parent-id | S6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 131 | Try it | Step 8: results, checks, and case 2 | none | N/A | Record of the page's own run. |
| 132 | How a tester uses it | Counter can only increase or reset on restart | S10 | PASS | "value can only increase or be reset to zero on restart" |
| 133 | How a tester uses it | `up` is 1 if healthy, 0 if the scrape failed | S11 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed" |
| 134 | How a tester uses it | SRE book counts HTTP 200 with the wrong content as an implicit error | S7 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)" |
| 135 | How a tester uses it | A test can expect no alert with empty `exp_alerts` | S16 | PASS | "leave 'exp_alerts' empty" |
| 136 | How a tester uses it | Alerts enter at the top-level route and traverse children | S24 | PASS | "Every alert enters the routing tree at the configured top-level route" |
| 137 | How a tester uses it | Pending until the `for` time | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 138 | How a tester uses it | `/api/v1/alerts` is an endpoint of alerts | S27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 139 | How a tester uses it | Do not use high-cardinality labels | S18 | PASS | "Do not use labels to store dimensions with high cardinality" |
| 140 | How a tester uses it | Loki: too many label combinations means too many streams | S33 | PASS | "Too many label value combinations leads to too many streams." |
| 141 | How a tester uses it | Line filter kept lines with `code=500` | S34 | PASS | "discarding those lines that do not match the case-sensitive expression" |
| 142 | How a tester uses it | Context propagation correlates signals | S3 | PASS | "can be correlated with each other, regardless of where they are generated" |
| 143 | How a tester uses it | Counts, exit statuses, and step results | none | N/A | Record of the page's own run. |
| 144 | Common mistakes | `rate` only with counters; gauge floats give a nonsensical result | S13, S12 | PASS | S13: "rate should only be used with counters"; S12: "will most likely produce a nonsensical result, but the query will be processed without complains" |
| 145 | Common mistakes | Take `rate()` first, then aggregate | S13 | PASS | "always take a rate() first, then aggregate. Otherwise rate() cannot detect" |
| 146 | Common mistakes | Counter must not decrease; example uses a gauge | S10 | PASS | "do not use a counter for the number of currently running processes; instead use a gauge." |
| 147 | Common mistakes | Summary quantiles cannot be recalculated or aggregated | S20 | PASS | "Prometheus implements this approach in the form of a metric type called summary"; "you cannot “recalculate” the quantiles later ... you cannot aggregate quantiles" |
| 148 | Common mistakes | High cardinality; Loki index and chunk penalties | S18, S33 | PASS | S18: "Do not use labels to store dimensions with high cardinality"; S33: "a large index and small chunks in the store" |
| 149 | Common mistakes | Pending vs firing | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 150 | Common mistakes | An active silence stops notifications | S23 | PASS | "If they do, no notifications will be sent out for that alert." |
| 151 | Common mistakes | `up` says whether the scrape worked | S11 | PASS | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed" |
| 152 | Common mistakes | Implicit errors; success vs failure latency | S7 | PASS | "implicitly (for example, an HTTP 200 success response, but coupled with the wrong content)"; "distinguish between the latency of successful requests and the latency of failed requests" |
| 153 | Common mistakes | promtool check rules vs test rules | S26 | PASS | "Check if the rule files are valid or not."; "Unit tests for rules." |
| 154 | Common mistakes | Absent series; export a default | S19 | PASS | "Time series that are not present until something happens are difficult"; "export a default value such as 0" |
| 155 | Common mistakes | Loki push timestamp must be a string | S36 | PASS | "you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error" |
| 156 | Common mistakes | Line filter is case-sensitive | S34 | PASS | "discarding those lines that do not match the case-sensitive expression" |
| 157 | Common mistakes | No traceparent leads to a new trace-id | S6 | PASS | "the vendor creates a new trace-id and parent-id that represents the current request." |
| 158 | Common mistakes | Flags are a bit field | S6 | PASS | "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 159 | Common mistakes | Own-rule remarks, run results, open-port advice | none | N/A | Record of the page's own run and the page's own advice. |
| 160 | What a tester can check | The callout is titled "Tutorial advice" and gives the tutorial's own advice; it gives no tool fact that the page does not support | none | PASS | The callout says "This list is the tutorial's own advice for a tester". Every item is advice. Commands named in it appear elsewhere on the page. |
| 161 | Key words | Observability | none | PASS | Same as the "What it is" sentence: "Observability lets you understand a system from the outside..." |
| 162 | Key words | Instrumentation | none | PASS | "To ask those questions about your system, your application must be properly instrumented" |
| 163 | Key words | Telemetry | none | PASS | "Telemetry refers to data emitted from a system and its behavior" |
| 164 | Key words | Metric | none | PASS | "Metrics are aggregations over a period of time of numeric data..." |
| 165 | Key words | Log | none | PASS | "A log is a timestamped message emitted by services or other components" |
| 166 | Key words | Span | none | PASS | "A span represents a single unit of work or operation" |
| 167 | Key words | Trace | none | PASS | "A trace is made of one or more spans" |
| 168 | Key words | Time series | none | PASS | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels" |
| 169 | Key words | Label | none | PASS | The same sentence as the Time series row. |
| 170 | Key words | Instance | none | PASS | "an endpoint you can scrape is called an instance, usually corresponding to a single process" |
| 171 | Key words | Job | none | PASS | "A collection of instances with the same purpose is called a job" |
| 172 | Key words | up | none | PASS | "Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed" |
| 173 | Key words | Counter | none | PASS | "A counter is a cumulative metric that represents a single monotonically increasing counter..." |
| 174 | Key words | Gauge | none | PASS | "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down" |
| 175 | Key words | Histogram | none | PASS | "A histogram records observations by counting them in configurable buckets" |
| 176 | Key words | Summary | none | PASS | "Similar to a histogram, a summary samples observations" |
| 177 | Key words | PromQL | none | PASS | "Prometheus provides a functional query language called PromQL..." |
| 178 | Key words | Instant vector | none | PASS | "An instant vector is a set of time series containing a single sample for each time series..." |
| 179 | Key words | Range vector | none | PASS | "A range vector is a set of time series containing a range of data points over time..." |
| 180 | Key words | Recording rule | none | PASS | "Recording rules allow you to precompute frequently needed or computationally expensive expressions..." |
| 181 | Key words | Pending | none | PASS | "Alerts which have not yet fired for long enough are considered pending" |
| 182 | Key words | Firing | none | PASS | "Alerts are considered firing once they have been returned for this long" |
| 183 | Key words | Alertmanager | none | PASS | "The Alertmanager takes care of deduplicating, grouping, and routing them to the correct receiver integration" |
| 184 | Key words | Grouping | none | PASS | "Grouping categorizes alerts of similar nature into a single notification" |
| 185 | Key words | Inhibition | none | PASS | "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing" |
| 186 | Key words | Silence | none | PASS | "Silences are a straightforward way to simply mute alerts for a given time" |
| 187 | Key words | Routing tree | none | PASS | "Every alert enters the routing tree at the configured top-level route, which must match all alerts" |
| 188 | Key words | promtool | none | PASS | "You can use promtool to test your rules" |
| 189 | Key words | amtool | none | PASS | "The `amtool` command is a cli tool for interacting with the Alertmanager API" |
| 190 | Key words | Loki | none | PASS | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus" |
| 191 | Key words | Log stream | none | PASS | "Labels allow Loki to organize and group together log messages into log streams" |
| 192 | Key words | LogQL | none | PASS | "All LogQL queries contain a log stream selector" |
| 193 | Key words | Context propagation | none | PASS | "Propagation is the mechanism that moves context between services and processes" |
| 194 | Key words | traceparent | none | PASS | "The `traceparent` HTTP header field identifies the incoming request in a tracing system" |
| 195 | Key words | Golden signals | none | PASS | "the four golden signals of monitoring are latency, traffic, errors, and saturation" |
| 196 | Key words | Cardinality | none | PASS | "Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values" |

Open FAILs after round 12: 0

Changed after this round: No FAILs. A re-read of the Try it introduction against the notes of the practice runs found one sentence that was too short: it said that the tutorial tried one setting for the gRPC port of Loki (`instance_interface_names: [lo]`), and it had tried two (`grpc_listen_address: 127.0.0.1` too, with which the first query got no answer). The sentence now names both, in Technical, Layman, and Bangla.

## Round 13 (2026-11-20)

# Fact check: devops / monitoring-observability (round 13)

Rows are one per cited sentence, or per run of sentences that share one cite. Some quotes join two adjacent lines of a source with "...", because the sources wrap lines.

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page topics and practice-run summary | none | N/A | Describes the page itself and the page's own practice run. |
| 2 | Lede | Page scope; "needs no cloud account and no Docker"; ordering links | none | N/A | Framing sentences, the page's own practice run, and site links. |
| 3 | What it is | Observability lets you understand a system from the outside by asking questions without knowing its inner workings | S1 | PASS | "Observability lets you understand a system from the outside by letting you ask" |
| 4 | What it is | The application must be properly instrumented | S1 | PASS | "properly instrumented" |
| 5 | What it is | The code must emit signals such as traces, metrics, and logs | S1 | PASS | "signals such as" / "traces," / "metrics, and" / "logs. An application is properly instrumented" |
| 6 | What it is | Telemetry is data emitted from a system and its behavior | S1 | PASS | "Telemetry refers to data emitted from a system and its behavior." |
| 7 | What it is | OpenTelemetry is the mechanism by which application code is instrumented | S1 | PASS | "OpenTelemetry is the mechanism by which" ... "application code is instrumented to help make a system observable." |
| 8 | What it is | Google SRE book definition of monitoring | S7 | PASS | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| 9 | What it is | White-box monitoring is based on metrics exposed by the internals | S7 | PASS | "Monitoring based on metrics exposed by the internals of the system" |
| 10 | What it is | Black-box monitoring tests externally visible behavior as a user would see it | S7 | PASS | "Testing externally visible behavior as a user would see it." |
| 11 | What it is | Metrics are aggregations over a period of time of numeric data | S1 | PASS | "aggregations over a period of time of numeric data about your" |
| 12 | What it is | A log is a timestamped message from services or components | S1 | PASS | "timestamped message emitted by services or other components." |
| 13 | What it is | A span is a single unit of work or operation | S1 | PASS | "single unit of work or operation." |
| 14 | What it is | A trace is made of one or more spans | S1 | PASS | "made of one or more spans" |
| 15 | What it is | The first span is the root span | S1 | PASS | "first span represents the root span." |
| 16 | What it is | A distributed trace records the path of a single request through multiple services | S1 | PASS | "taken by a single request (made by an application or end user) as it propagates" / "through multiple services" |
| 17 | What it is | Prometheus is an open-source systems monitoring and alerting toolkit | S8 | PASS | "open-source systems" / "monitoring and alerting toolkit" |
| 18 | What it is | It collects and stores metrics as time series data | S8 | PASS | "time series data, i.e. metrics information is stored wit" |
| 19 | What it is | Alertmanager handles alerts sent by client applications such as the Prometheus server | S23 | PASS | "Alertmanager" / "handles alerts" / "sent by client applications such as the Prometheus server." |
| 20 | What it is | Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S31 | PASS | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| 21 | What it is | Unlike other logging systems, Loki does not index the contents of the logs | S31 | PASS | "Unlike other logging systems, Loki does not index the contents of the logs" |
| 22 | What it is | OpenTelemetry is open source, vendor- and tool-agnostic | S2 | PASS | "vendor- and tool-agnostic" / "open source" |
| 23 | What it is | OpenTelemetry is not an observability backend itself | S2 | PASS | "not an observability backend itself." |
| 24 | How it works | Prometheus ecosystem has multiple components, many optional | S8 | PASS | "multiple components, many of which are" |
| 25 | How it works | Main server scrapes and stores time series; client libraries instrument code; an alertmanager handles alerts | S8 | PASS | "main Prometheus server" / "client libraries for instrumenting application code" / "to handle alerts" |
| 26 | How it works | Prometheus scrapes instrumented jobs, stores samples locally, runs rules to record series or alert | S8 | PASS | "Prometheus scrapes metrics from instrumented jobs" / "It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts." |
| 27 | How it works | Grafana or other API consumers can visualize the data | S8 | PASS | "Grafana or other API consumers can be used to visualize the collected data." |
| 28 | How it works | Collection is via a pull model over HTTP | S8 | PASS | "time series collection happens via a pull model over HTTP" |
| 29 | How it works | Prometheus stores its data as time series | S8 | PASS | "time series data, i.e. metrics information is stored wit" |
| 30 | How it works | Time series identified by metric name and optional labels | S9 | PASS | "uniquely identified by its metric name and optional key-value pairs called labels." |
| 31 | How it works | Queries may generate temporary derived time series | S9 | PASS | "temporary derived time series" |
| 32 | How it works | Instance = scrapeable endpoint, usually one process; job = instances with same purpose | S11 | PASS | "endpoint you can scrape is called an instance," / "usually corresponding to a single process." |
| 33 | How it works | Prometheus attaches labels automatically; `job` label; `instance` label | S11 | PASS | "attaches some labels automatically to the" / "configured job name that the target belongs to." / "instance: The <host>:<port> part of the target's URL that was scraped." |
| 34 | How it works | Stores a sample in `up`; 1 if healthy, 0 if scrape failed; useful for availability monitoring | S11 | PASS | "stores a sample in" / "healthy, i.e. reachable, or 0 if the scrape failed." / "instance availability monitoring." |
| 35 | How it works | Four core metric types | S10 | PASS | "The Prometheus instrumentation libraries offer four core metric types." |
| 36 | How it works | Counter definition; do not use for a value that can decrease | S10 | PASS | "A counter is a cumulative metric that represents a single monotonically" / "value can only increase or be reset to zero on restart" / "Do not use a counter to expose a value that can decrease." |
| 37 | How it works | Gauge definition | S10 | PASS | "A gauge is a metric that represents a single numerical value that can" / "arbitrarily go up and down." |
| 38 | How it works | Histogram counts in configurable buckets, gives sum; classic histogram = several float series (buckets, sum, count) | S10 | PASS | "by counting them in configurable buckets. It also provides a sum" / "multiple time series of simple float" / "cumulative counters for the" |
| 39 | How it works | A summary samples observations like a histogram | S10 | PASS | "Similar to a histogram, a summary samples observations" |
| 40 | How it works | Summaries compute streaming φ-quantiles in the program; histograms compute quantiles on the server with histogram_quantile(); summary quantiles cannot be calculated later | S20 | PASS | "streaming φ-quantiles within the instrumented program and expose them" / "calculation of quantiles from the buckets of a histogram happens on the" / "sliding windows cannot be calculated later." |
| 41 | How it works | Metric names: single-word application prefix; unit suffix in plural | S18 | PASS | "SHOULD have a (single-word) application prefix" / "SHOULD have a suffix describing the unit, in plural form." |
| 42 | How it works | Each label combination is a new series; no high-cardinality labels | S18 | PASS | "unique combination of key-value label" / "pairs represents a new time series, which can dramatically increase the amount" / "high cardinality" |
| 43 | How it works | Three service types; monitor online-serving on client and server; differences useful; absent series hard; export default 0 | S19 | PASS | "broken down into three types:" / "client and server side." / "very useful information for debugging." / "difficult" / "default value such as 0 for" |
| 44 | How it works | Text format by default since 2.0; comment lines; HELP/TYPE; TYPE takes two tokens; type names; sample lines | S17 | PASS | "As of Prometheus version 2.0, all processes that expose metrics to Prometheus must use" / "first non-whitespace character are comments." / "exactly two more tokens are expected." / "untyped" / "one per line" |
| 45 | How it works | PromQL is a functional query language to select and aggregate in real time | S12 | PASS | "functional query language called PromQL" / "lets the user select and aggrega" |
| 46 | How it works | Instant query vs range query | S12 | PASS | "instant query, evaluated at one point in time," / "or a range query at equally-spaced steps between a start and an end time." |
| 47 | How it works | Instant vector and range vector definitions | S12 | PASS | "set of time series containing a single sample for each time series, all sharing the same timestamp" / "Range vector - a set of time s" |
| 48 | How it works | Instant vector selectors; label matchers in braces | S12 | PASS | "allow the selection of a set of time series and a" / "single sample value for each at a given timestamp (point in time)." / "comma-separated list of label" / "matchers in curly braces ({})." |
| 49 | How it works | Float counters conventionally end in `_total` | S12 | PASS | "By convention, time series containing float counters" / "have a name ending on _total to help with the distinction.)" |
| 50 | How it works | Vector/scalar comparison applies to every sample; false elements dropped | S40 | PASS | "value of every data sample in the vector, and vector elements between which the" / "comparison result is false get dropped from the result vector." |
| 51 | How it works | `rate()` gives per-second average rate; handles counter resets | S13 | PASS | "per-second average rate of increase of the" / "Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for." |
| 52 | How it works | `rate` only for counters (S13); on gauge floats gives a nonsensical result without complaint (S12) | S13 | PASS | "only be used with counters". The gauge-float sentence has its own S12 cite, see row 53. |
| 53 | How it works | Applying `rate` to gauge floats gives nonsense but the query runs | S12 | PASS | "applying the rate" / "function to gauge floats will most likely produce a" / "nonsensical result, but the query will be processed without complains." |
| 54 | How it works | Take `rate()` first, then aggregate; otherwise resets are missed | S13 | PASS | "always take a rate() first, then aggregate. Otherwise rate() cannot detect" |
| 55 | How it works | `histogram_quantile` computes φ-quantile from classic or native histogram | S13 | PASS | "calculates the φ-quantile (0 ≤" / "φ ≤ 1) from a classic" / "histogram or from" / "a native histogram." |
| 56 | How it works | Page says to use `rate()` for the quantile time window | S13 | PASS | "Use the rate() function to specify the time window for the quantile" |
| 57 | How it works | For classic histograms `le` must be in the `by` clause | S13 | PASS | "Since the le label is required by" ... "included in the by clause." |
| 58 | How it works | Recording rules precompute expressions into new series | S14 | PASS | "precompute frequently needed or computationally" / "expensive expressions and save their result as a new set of ti" |
| 59 | How it works | Rules live in a group, run sequentially at the same evaluation time; recording rule names must be valid metric names | S14 | PASS | "Recording and alerting rules exist in a rule group. Rules within a group are" / "run sequentially at a regular interval, with the same evaluation time." / "valid metric names." |
| 60 | How it works | Alerting rule series become pending or firing; firing once returned for this long; otherwise pending | S14 | PASS | "all resultant time series become" / "pending/firing alerts." / "Alerts are considered firing once they have been returned for this long." / "Alerts which have not yet fired for long enough are considered pending." |
| 61 | How it works | `labels` clause adds labels; `annotations` clause holds longer information | S15 | PASS | "labels clause allows specifying a set of additional labels to be attached" / "annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| 62 | How it works | `ALERTS` synthetic series for pending and firing alerts | S15 | PASS | "For pending and firing alerts, Prometheus also stores synthetic time series of" |
| 63 | How it works | Alerting rules find what is broken now, are not a full notification solution | S15 | PASS | "figuring what is broken right now, but" / "they are not a fully-fledged notification solution." |
| 64 | How it works | Alerting split into two parts; rules send alerts to Alertmanager | S22 | PASS | "Alerting with Prometheus is separated into two parts. Alerting rules in" / "Prometheus servers send alerts to an Alertmanager." |
| 65 | How it works | Alertmanager deduplicates, groups, routes; grouping; inhibition; silences; silence uses matchers | S23 | PASS | "takes care of deduplicating, grouping, and routing" / "categorizes alerts of similar nature into a single notification." / "Inhibition is a concept of suppressing notifications for certain alerts if" / "Silences are a straightforward way to simply mute alerts for a given tim" / "configured based on matchers, just like the routing tree." |
| 66 | How it works | Routing tree: top-level route matches all; traverses children; `continue` false stops after first match; unmatched uses current node; inherited params | S24 | PASS | "Every alert enters the routing tree at the configured top-level route, which" / "If continue is set to false, it stops" / "the alert is handled based on the configuration parameters of the" / "are inherited from its parent node if" |
| 67 | How it works | `amtool` is a cli tool for the Alertmanager API, bundled with all releases | S25 | PASS | "cli tool for interacting with the Alertmanager API." / "bundled with all releases of Alertmanager." |
| 68 | How it works | `amtool` can validate UTF-8 strict-mode config; no running server needed | S24 | PASS | "you can also use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server. You do not need a running Alertmanager server to do this." |
| 69 | How it works | Alert on symptoms tied to end-user pain; summary list; page on user-visible errors | S21 | PASS | "as few alerts as possible, by alerting on symptoms that are" / "To summarize: keep alerting simple, alert on symptoms, have good consoles to" / "For error rates, page on user-visible errors." |
| 70 | How it works | Four golden signals; focus on four if only four metrics; errors definition; latency of success vs failure | S7 | PASS | "four golden signals of monitoring are latency, traffic, errors, and saturation." / "rate of requests that fail, either explicitly" / "distinguish between the latency of successful requests and the latency of failed requests." |
| 71 | How it works | Loki focuses on logs and uses push | S31 | PASS | "focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| 72 | How it works | Labels group logs into streams; `service_name` used directly, else first non-empty from list; else `unknown_service` | S32 | PASS | "organize and group together log messages into log streams." / "If a service_name label is already present on the stream, Loki uses it directly. Otherwise, Loki looks for" / "unknown_service is applied." |
| 73 | How it works | Label use cases; too many streams; large index, small chunks; add labels only when needed | S33 | PASS | "regions, clusters, servers, applications, namespaces, and environments." / "too many streams. The penalties for that in Loki are a large index and small chunks in the store" / "until you know you need it!" |
| 74 | How it works | LogQL: stream selector, optional pipeline, comma-separated pairs, operators, line filter, case-sensitive, label filter | S34 | PASS | "log stream selector. Optionally, the log stream selector can be followed by a log pipeline" / "chained together and applied to the selected log streams" / "exactly equal" / "regex does not match" / "distributed grep" / "case-sensitive expression." / "original and extracted labels" |
| 75 | How it works | Metric queries extend log queries; `count_over_time` | S35 | PASS | "extend log queries by applying a function to log query results." / "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 76 | How it works | Loki API: string timestamp else 400; `query_range`; `limit` default 100; `start` default one hour ago; statistics; `/ready` 200; labels endpoint | S36 | PASS | "timestamp as a string and not a number, otherwise the endpoint will return a 400 error." / "query over a range of time" / "defaults to 100" / "one hour ago" / "set of statistics about the query execution" / "HTTP 200" / "ready to accept traffic" / "list of known labels within a given time span." |
| 77 | How it works | Context propagation correlates signals; propagation moves context; usually handled by libraries, transparent | S3 | PASS | "correlated" / "with each other, regardless of where they are generated." / "moves context between services and processes." / "usually handled by instrumentation" / "transparent" / "to the user" |
| 78 | How it works | OpenTelemetry has a text-based way using W3C Trace Context headers; inject/extract in Python; use instrumentation libraries | S4 | PASS | "text-based approach to propagate context to remote" / "W3C Trace Context" / "inject the current context:" / "extract context, for example, from parsed HTTP" / "headers, and then set them as the current trace context." / "instrumentation libraries to propagate context." |
| 79 | How it works | `traceparent` has four fields; 16-byte trace-id, 8-byte parent-id, zero invalid; flags bit; bit field | S6 | PASS | "identifies the incoming request in a tracing system. It has four fields:" / "16-byte array" / "8-byte array" / "least significant bit (right-most), denotes that the caller may have recorded trace data." / "bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 80 | How it works | `ConsoleSpanExporter` is in `opentelemetry-sdk` | S5 | PASS | "ConsoleSpanExporter and ConsoleMetricExporter are included in the" / "opentelemetry-sdk package." |
| 81 | How it works | Use promtool to test rules | S16 | PASS | "use promtool to test your rules." |
| 82 | How it works | `check config`, `check rules`, `test rules` commands | S26 | PASS | "Check if the config files are valid or not." / "Check if the rule files are valid or not." / "Unit tests for rules." |
| 83 | How it works | Test file lists rule files; expanding notation; `_`; alert test union; empty `exp_alerts`; PromQL test names expr, time, samples | S16 | PASS | "list of rule files to consider for testing." / "expanding notation." / "_' represents a missing sample from scrape" / "union of all the firing alerts for the alertname under a single <alert_test_case>." / "exp_alerts' empty." / "eval_time: <duration>" / "exp_samples:" |
| 84 | Try it | Run record: date, versions, isolated HOME, `/work`, `/venv` | none | N/A | Record of the page's own run. |
| 85 | Try it | Listen addresses, gRPC finding, two tried settings, ports, advice, own choices, what was not run | none | N/A | Record of the page's own run, plus reader advice. |
| 86 | Try it | Prometheus docs provide precompiled binaries; Docker one-liner | S30 | PASS | "precompiled binaries for most official Prometheus components." / "as simple as docker run -p 9090:9090 prom/prometheus" |
| 87 | Try it | Loki docs: install Loki and Alloy with Docker or Docker Compose when evaluating, testing, developing | S39 | PASS | "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| 88 | Try it | Install, checksum, SHA-256, archive prefixes, `~/.local/bin`, venv, pip paragraphs | none | N/A | Record of the page's own run and the tutorial's own choices. |
| 89 | Try it | Step 1 intro, `app.py`, run commands, output | none | N/A | The tutorial's own code and run output. |
| 90 | Try it | Step 1: `# HELP` and `# TYPE` lines are comments for help text and type | S17 | PASS | "first non-whitespace character are comments. They are" / "ignored unless the first t" (HELP or TYPE) |
| 91 | Try it | Step 1: `_total` is the counter convention | S12 | PASS | "have a name ending on _total to help with the distinction.)" |
| 92 | Try it | Step 1: a gauge can go up and down | S10 | PASS | "arbitrarily go up and down." |
| 93 | Try it | Step 1: histogram buckets are cumulative counters | S10 | PASS | "cumulative counters for the" |
| 94 | Try it | Step 1: run values (5, 1, 2, 1; 0; buckets; sum) | none | N/A | Values from the page's own run. |
| 95 | Try it | Step 2: `prometheus.yml`, `rules.yml`, commands, output | none | N/A | Tutorial's own files and run output. |
| 96 | Try it | Step 2: targets found via service discovery or static configuration | S8 | PASS | "targets are discovered via service discovery or static configuration" |
| 97 | Try it | Step 2: take `rate()` first, then `sum by (job)` | S13 | PASS | "always take a rate() first, then aggregate." |
| 98 | Try it | Step 2: comparison drops false elements by default; `bool` returns 0 or 1 | S40 | PASS | "By default they filter. Their behavior can be" / "modified by providing bool after the operator, which will return 0 or 1" / "for the value rather than filtering." |
| 99 | Try it | Step 2: `for` means pending until returned that long | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 100 | Try it | Step 2: `up` is 0 if scrape failed | S11 | PASS | "healthy, i.e. reachable, or 0 if the scrape failed." |
| 101 | Try it | Step 2: alerts carry `labels` and `annotations` | S15 | PASS | "labels clause allows specifying a set of additional labels to be attached" / "annotations clause specifies a set of informational labels" |
| 102 | Try it | Step 2: `promtool check config` and `check rules` descriptions | S26 | PASS | "Check if the config files are valid or not." / "Check if the rule files are valid or not." |
| 103 | Try it | Step 2: `--syntax-only` ignores file and content validation | S26 | PASS | "--syntax-only" / "Only check the config file syntax, ignoring file and content validation referenced in the config" |
| 104 | Try it | Step 2: quick syntax check without a server using `promtool check rules` | S14 | PASS | "To quickly check whether a rule file is syntactically correct without starting" / "a Prometheus server, you can use Prometheus's promtool command-line utility" / "promtool check rules /path/to/example.rules.yml" |
| 105 | Try it | Step 2: run output claims ("printed SUCCESS", "No server running") | none | N/A | Page's own run record. |
| 106 | Try it | Step 3: `rules.test.yml`, `bad.test.yml`, commands, output | none | N/A | Tutorial's own files and run output. |
| 107 | Try it | Step 3: `promtool test rules` runs unit tests; test file lists rule files | S26, S16 | PASS | S26: "Unit tests for rules." S16: "list of rule files to consider for testing." |
| 108 | Try it | Step 3: docs read `a+bxn` as "series starts at a, then n further samples incrementing by b" | S16 | PASS | "series starts at a, then n further samples incrementing by b." |
| 109 | Try it | Step 3: rest of bullets (rates, exit statuses) | none | N/A | Tutorial's own arithmetic and run record. |
| 110 | Try it | Step 4: `alertmanager.yml`, commands, output | none | N/A | Tutorial's own file and run output. |
| 111 | Try it | Step 4: docs describe `group_wait` and `repeat_interval` | S24 | PASS | "# How long to wait before sending the first notification for a new group of" / "# How long to wait before repeating the last notification." |
| 112 | Try it | Step 4: alert enters tree at top-level route, then child nodes | S24 | PASS | "Every alert enters the routing tree at the configured top-level route, which" / "traverses the child nodes." |
| 113 | Try it | Step 4: config page shows `amtool check-config` for UTF-8 strict mode, no running server needed | S24 | PASS | "amtool check-config config.yml --enable-feature=\"utf8-strict-mode\"" / "You do not need a running Alertmanager server to do this." |
| 114 | Try it | Step 4: README says `amtool` can show routes as text tree and test routing by label set; README commands `amtool config routes` and `amtool config routes test`; README does not write `show` | S25 | PASS | "visualize the routes of your configuration in form of text tree view." / "test the routing by passing it label set of an alert" / "amtool config routes --alertmanager.url=http://localhost:9093" / "amtool config routes test --config.file=doc/examples/simple.yml --tree --verify." |
| 115 | Try it | Step 5: commands | none | N/A | Tutorial's own commands. |
| 116 | Try it | Step 5: `--config.file`, `--storage.tsdb.path`, `--web.listen-address` meanings | S29 | PASS | "Prometheus configuration file path." / "Base path for metrics storage. Use with server mode only." / "Address to listen on for UI, API, and telemetry. Can be repeated." |
| 117 | Try it | Step 5: `--cluster.listen-address=` stops listening for peer requests | S25 | PASS | "cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| 118 | Try it | Step 5: `/-/ready` returns 200 when ready | S28 | PASS | "This endpoint returns 200 when Prometheus is ready to serve traffic (i.e. respond to queries)." |
| 119 | Try it | Step 5: API format JSON; `/api/v1/query` is an instant query | S27 | PASS | "The API response format is JSON." / "The following endpoint evaluates an instant query at a single point in time:" |
| 120 | Try it | Step 5: `up` value 1 means healthy | S11 | PASS | "healthy, i.e. reachable" |
| 121 | Try it | Step 5: φ-quantile ranks at φ*N | S20 | PASS | "ranks at number" / "φ*N among the N observations." |
| 122 | Try it | Step 5: interpolates within the bucket; uniform distribution for classic histograms | S13 | PASS | "interpolates the quantile value" / "within the bucket the quantile value falls into." / "uniform distribution of observations" |
| 123 | Try it | Step 5: docs use `rate()` to set the time window | S13 | PASS | "Use the rate() function to specify the time window for the quantile" |
| 124 | Try it | Step 5: other bullets (query results, arithmetic, 0.275) | none | N/A | Page's own run and arithmetic. |
| 125 | Try it | Step 6: helper functions, commands, output | none | N/A | Tutorial's own code and run output. |
| 126 | Try it | Step 6: `/alerts` endpoint lists all active alerts | S27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 127 | Try it | Step 6: pending until returned for the `for` time | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 128 | Try it | Step 6: README shows `amtool silence add alertname=Test_Alert`; Alertmanager page says silences are set in the web interface; no page describes `--silenced` or `suppressed` | S25, S23 | PASS | S25: "silence add alertname=Test_Alert". S23: "Silences are configured in the web interface of the Alertmanager." The "no page describes" part is the tutorial's own statement. |
| 129 | Try it | Step 6: `up` is 0 because scrape failed | S11 | PASS | "healthy, i.e. reachable, or 0 if the scrape failed." |
| 130 | Try it | Step 6: other bullets (states, UTC, silence ID) | none | N/A | Page's own run record. |
| 131 | Try it | Step 7: docs list a complete filesystem config; ports and folder changed (`/tmp/loki` on the page) | S37 | PASS | "# This is a complete configuration to deploy Loki backed by the filesystem." / "path_prefix: /tmp/loki" |
| 132 | Try it | Step 7: reference describes `reporting_enabled` as "Enable anonymous usage reporting" | S38 | PASS | "# Enable anonymous usage reporting." / "[reporting_enabled: <boolean> | default = true]" |
| 133 | Try it | Step 7: `loki.yml`, `push.py`, commands, output | none | N/A | Tutorial's own files and run output. |
| 134 | Try it | Step 7: `/ready` returns 200 when ready | S36 | PASS | "HTTP 200" / "ready to accept traffic" |
| 135 | Try it | Step 7: timestamp is a string, as the API needs | S36 | PASS | "timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 136 | Try it | Step 7: without `service_name`, Loki looks for first non-empty label from list | S32 | PASS | "Otherwise, Loki looks for" / "first non-empty value from the following labels, in order:" |
| 137 | Try it | Step 7: Loki can discover and add log levels during ingestion if absent | S38 | PASS | "# Discover and add log levels during ingestion, if not present already." |
| 138 | Try it | Step 7: line filter does a distributed grep and discards non-matching lines | S34 | PASS | "The line filter expression does a distributed grep" / "discarding those lines that do not match the case-sensitive expression." |
| 139 | Try it | Step 7: `limit` is max entries, default 100 | S36 | PASS | "defaults to 100" |
| 140 | Try it | Step 7: `count_over_time` counts entries per stream in range | S35 | PASS | "count_over_time(log-range): counts the entries for each log stream within the given range." |
| 141 | Try it | Step 7: `logfmt` parses each line to extract labels, next stage filters | S34 | PASS | "then parses each log line to extract more labels and filter with them." |
| 142 | Try it | Step 7: query endpoints return statistics | S36 | PASS | "set of statistics about the query execution" |
| 143 | Try it | Step 7: other bullets (run values, 42 lines) | none | N/A | Page's own run record. |
| 144 | Try it | Step 8: `ConsoleSpanExporter` is in `opentelemetry-sdk`; context passed by hand; use libraries | S5, S4 | PASS | S5: "opentelemetry-sdk package." S4: "inject the current context:" / "instrumentation libraries to propagate context." |
| 145 | Try it | Step 8: `otel_demo.py`, run, output | none | N/A | Tutorial's own script and run output. |
| 146 | Try it | Step 8: header has four fields; right-most flag bit means caller may have recorded; flags are a bit field | S6 | PASS | "It has four fields:" / "least significant bit (right-most), denotes that the caller may have recorded trace data." / "bit field, you cannot interpret flags by decoding the hex value" |
| 147 | Try it | Step 8: no `parent_id` plus a `trace_id` marks a root span | S41 | PASS | "Note that it has a trace_id field indicating the trace, but has no" / "parent_id. That’s how you know it’s the root span." |
| 148 | Try it | Step 8: with no traceparent header the vendor creates a new trace-id and parent-id | S6 | PASS | "vendor creates a new trace-id and parent-id that represents the current request." |
| 149 | Try it | Step 8: other bullets (checks print True) | none | N/A | Page's own run record. |
| 150 | How a tester uses it | Counter can only increase or reset to zero on restart | S10 | PASS | "value can only increase or be reset to zero on restart" |
| 151 | How a tester uses it | `up` is 1 if reachable, 0 if scrape failed | S11 | PASS | "healthy, i.e. reachable, or 0 if the scrape failed." |
| 152 | How a tester uses it | SRE book counts an HTTP 200 with wrong content as an error, implicitly | S7 | PASS | "rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 succ" |
| 153 | How a tester uses it | A test can expect an alert not to fire with empty `exp_alerts` | S16 | PASS | "exp_alerts' empty." |
| 154 | How a tester uses it | Alert enters routing tree at top-level route then child nodes | S24 | PASS | "traverses the child nodes." |
| 155 | How a tester uses it | Alert is pending first, firing later because of `for` | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 156 | How a tester uses it | `/api/v1/alerts` endpoint | S27 | PASS | "The /alerts endpoint returns a list of all active alerts." |
| 157 | How a tester uses it | Do not use high-cardinality labels; too many Loki label combinations make too many streams | S18, S33 | PASS | S18: "high cardinality". S33: "too many streams." |
| 158 | How a tester uses it | Line filter keeps lines with `code=500` | S34 | PASS | "discarding those lines that do not match the case-sensitive expression." |
| 159 | How a tester uses it | Signals can be correlated regardless of where generated | S3 | PASS | "with each other, regardless of where they are generated." |
| 160 | How a tester uses it | Run-record sentences (nine requests, exit statuses, `other` label, two spans) | none | N/A | Page's own run record. |
| 161 | Common mistakes | `rate` only with counters; gauge floats give nonsense | S13, S12 | PASS | S13: "only be used with counters". S12: "nonsensical result, but the query will be processed without complains." |
| 162 | Common mistakes | Take `rate()` first, then aggregate | S13 | PASS | "always take a rate() first, then aggregate. Otherwise rate() cannot detect" |
| 163 | Common mistakes | Do not use a counter for a value that can decrease; running-processes example | S10 | PASS | "Do not use a counter to expose a value that can decrease. For example, do not" / "use a counter for the number of currently running processes; instead use a gauge." |
| 164 | Common mistakes | Summary quantiles cannot be recalculated or aggregated | S20 | PASS | "Prometheus implements this approach in the form of a metric type called" / "summary." / "you cannot “recalculate” the quantiles later if" / "you cannot aggregate quantiles" |
| 165 | Common mistakes | Do not use unbounded labels; Loki penalties | S18, S33 | PASS | S18: "unbounded sets of values." S33: "a large index and small chunks in the store" |
| 166 | Common mistakes | Not-yet-fired alerts are pending | S14 | PASS | "Alerts which have not yet fired for long enough are considered pending." |
| 167 | Common mistakes | A matching active silence stops notifications | S23 | PASS | "no notifications will be sent out for that alert." |
| 168 | Common mistakes | `up` says whether the scrape worked | S11 | PASS | "healthy, i.e. reachable, or 0 if the scrape failed." |
| 169 | Common mistakes | SRE book counts HTTP 200 with wrong content as an error | S7 | PASS | "implicitly (for example, an HTTP 200 succ" |
| 170 | Common mistakes | Distinguish latency of successes and failures | S7 | PASS | "distinguish between the latency of successful requests and the latency of failed requests." |
| 171 | Common mistakes | `check rules` vs `test rules` | S26 | PASS | "Check if the rule files are valid or not." / "Unit tests for rules." |
| 172 | Common mistakes | Absent series are hard; export default 0 | S19 | PASS | "difficult" / "default value such as 0 for" / "any time series you know may exist in advance." |
| 173 | Common mistakes | Push timestamp must be a string, else 400 | S36 | PASS | "timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| 174 | Common mistakes | Line filter is case-sensitive | S34 | PASS | "case-sensitive expression." |
| 175 | Common mistakes | No traceparent: vendor creates new trace-id and parent-id | S6 | PASS | "vendor creates a new trace-id and parent-id that represents the current request." |
| 176 | Common mistakes | Flags are a bit field | S6 | PASS | "bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| 177 | Common mistakes | Run-record sentences and the open-port advice (no cite) | none | N/A | The page's own run record and reader advice; it gives no fact about a tool. |
| 178 | What a tester can check | Callout "Tutorial advice": 13 advice bullets | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact beyond what the page supports (`promtool`, `amtool config routes test`, `exp_alerts`). |
| 179 | Key words | Observability, Instrumentation, Telemetry, Metric, Log, Span, Trace | none | PASS | Each row restates a What-it-is sentence (rows 3, 4, 6, 11–14). |
| 180 | Key words | Time series, Label | none | PASS | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels" (row 30). |
| 181 | Key words | Instance, Job, up | none | PASS | Restate rows 32 and 34. |
| 182 | Key words | Counter, Gauge, Histogram, Summary | none | PASS | Restate rows 36–39. |
| 183 | Key words | PromQL, Instant vector, Range vector | none | PASS | Restate rows 45 and 47. |
| 184 | Key words | Recording rule, Pending, Firing | none | PASS | Restate rows 58 and 60. |
| 185 | Key words | Alertmanager, Grouping, Inhibition, Silence, Routing tree | none | PASS | Restate rows 65 and 66. |
| 186 | Key words | promtool, amtool | none | PASS | Restate rows 81 and 67. |
| 187 | Key words | Loki, Log stream, LogQL | none | PASS | Restate rows 20, 72 and 74. |
| 188 | Key words | Context propagation, traceparent | none | PASS | Restate rows 77 and 79. |
| 189 | Key words | Golden signals, Cardinality | none | PASS | Restate rows 70 and 42. |

Open FAILs after round 13: 0

Open FAILs: 0
