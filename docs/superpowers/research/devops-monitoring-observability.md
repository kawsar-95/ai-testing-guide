# Research notes: Monitoring and Observability

Page: `content/devops/monitoring-observability.mdx`. Module: DevOps & Cloud. Date: 2026-11-19 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`) on the topic that its shelf named: observability, Prometheus, and Loki. It covers the three signals (metrics, logs, traces) and the OpenTelemetry primer, the Google SRE definitions of monitoring and the four golden signals, the Prometheus data model, the jobs and the `up` series, the four metric types, the naming and cardinality advice, the text exposition format, PromQL (the data types, selectors, `rate`, aggregation, `histogram_quantile`, the comparison filter), recording and alerting rules, the Alertmanager (grouping, inhibition, silences, the routing tree, `amtool`), the advice on what to alert on, Loki (labels, `service_name`, label advice, LogQL log and metric queries, the HTTP API), W3C trace context and its Python propagation, and the tests of the monitoring itself (`promtool check`, `promtool test rules`). The practice run uses no cloud account, no container, and no remote host. The lesson was written with no human review of the Bangla text.

The practice run of `## Try it` (steps 1 to 8) was recorded on 2026-11-19 17:11:12 +0600 on Linux 7.0.0-43-generic with Prometheus 3.16.0, Alertmanager 0.35.0, Loki 3.7.10, OpenTelemetry SDK 1.45.2, Python 3.14.4 (the app and the helper scripts) and 3.14.9 (the SDK), curl 8.18.0, and bash 5.3.9. The tutorial installed the three Go programs from the GitHub release archives, each with its SHA-256 compared with the checksum file of the same release (same host, no signature file on the release pages that day), and the SDK in a virtual environment, after a check of the wheel against the hash that the PyPI JSON API lists. The runner `practice/mon.sh` (in the work folder) ran in an empty environment (`env -i HOME=... PATH=... LANG=C.UTF-8`), in a temp folder with copies of the practice files, with an empty `HOME` and a `TMPDIR` inside the temp folder. It refuses to start if one of the ports 18000, 19090, 19093, 13100, or 19096 is in use. After the steps it records the sockets that the servers listen on, stops the servers by their process ids, and records that no listening port, no process, and no entry of the real home folder is left.

The runner ran four times that day, and the page uses the last run. Run 1 worked, with Loki listening on all addresses, and step 7 printed the whole JSON response. Run 2 set `grpc_listen_address: 127.0.0.1` in the Loki configuration, and the first Loki query hung: the log of Loki showed that the querier connected to the frontend at the LAN address of the machine on the gRPC port, and the connection was refused. Run 3 set `frontend: instance_interface_names: [lo]`, which the configuration reference describes ("Name of network interface to read address from"), and Loki stopped at its start with `no useable address found for interfaces [lo]`. Runs 2 and 3 were stopped by the author, and their servers were stopped by their process ids. Run 4 (the last) keeps `http_listen_address: 127.0.0.1` and the default gRPC address, and the page says so. The Loki log of the last run has two lines at the level `error` from the start (for example `error getting ingester clients err="empty ring"`), and no page that the tutorial read explains them.

- Step 1: the nine requests gave the counters 5 (`/`), 1 (`/slow`), 2 (`/fail`), and 1 (`other`), and the histogram count 9. The sum (0.306769) differs on every run.
- Step 2: `promtool check config` printed `SUCCESS: 1 rule files found` and the check of `rules.yml`; `promtool check rules` printed `SUCCESS: 3 rules found`.
- Step 3: `rules.test.yml` printed `SUCCESS` (exit status 0); `bad.test.yml` printed `FAILED` with `exp ... 4E+00` and `got ... 3E+00` (exit status 1).
- Step 4: `amtool check-config` printed `SUCCESS`, `config routes test` printed `team-oncall` and `team-default`. The two `amtool config routes` commands are not in the pages that the tutorial read; the page says so.
- Step 5: `up` was `"1"`, the sums by code were 6, 2, and 1, and the 90th percentile was `0.2749999999999999`.
- Step 6: `AppHighErrorRatio` went `pending` and `firing`, `amtool` showed it `active`, then `suppressed` after the silence; after the app was stopped `AppDown` went `pending` and `firing`. `--silenced` and the state `suppressed` are not in the pages that the tutorial read; the page says so.
- Step 7: `push.py` sent 69 lines (HTTP 204), the labels were `job` and `service_name`, the stream carried `detected_level`, and the count of the `/fail` lines was 42, the same as in the log file. The key `detected_level` is not in the pages that the tutorial read; the page says so.
- Step 8: the header was `traceparent: 00-<32 hex>-<16 hex>-03`, and the five checks printed `True`. The meaning of the second bit of the flags is not in the page that the tutorial read; the page says so.

The page cites pages of the docs of OpenTelemetry, W3C, Google SRE, Prometheus, Alertmanager, and Grafana Loki. Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences). The W3C page answers the fetcher of `fetch.py` with 403 (it accepts plain `curl`), so the cache of that page was made with `curl` and the same HTML-to-text function.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Observability primer (OpenTelemetry Documentation) | https://opentelemetry.io/docs/concepts/observability-primer/ |
| S2 | What is OpenTelemetry? (OpenTelemetry Documentation) | https://opentelemetry.io/docs/what-is-opentelemetry/ |
| S3 | Context propagation (OpenTelemetry Documentation) | https://opentelemetry.io/docs/concepts/context-propagation/ |
| S4 | Propagation (Python) (OpenTelemetry Documentation) | https://opentelemetry.io/docs/languages/python/propagation/ |
| S5 | Exporters (Python) (OpenTelemetry Documentation) | https://opentelemetry.io/docs/languages/python/exporters/ |
| S6 | Trace Context (W3C Recommendation) | https://www.w3.org/TR/trace-context/ |
| S7 | Monitoring Distributed Systems (Site Reliability Engineering (Google)) | https://sre.google/sre-book/monitoring-distributed-systems/ |
| S8 | Overview (Prometheus Documentation) | https://prometheus.io/docs/introduction/overview/ |
| S9 | Data model (Prometheus Documentation) | https://prometheus.io/docs/concepts/data_model/ |
| S10 | Metric types (Prometheus Documentation) | https://prometheus.io/docs/concepts/metric_types/ |
| S11 | Jobs and instances (Prometheus Documentation) | https://prometheus.io/docs/concepts/jobs_instances/ |
| S12 | Querying basics (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/querying/basics/ |
| S13 | Query functions (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/querying/functions/ |
| S14 | Defining recording rules (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/ |
| S15 | Alerting rules (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/ |
| S16 | Unit testing for rules (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/configuration/unit_testing_rules/ |
| S17 | Exposition formats (Prometheus Documentation) | https://prometheus.io/docs/instrumenting/exposition_formats/ |
| S18 | Metric and label naming (Prometheus Documentation) | https://prometheus.io/docs/practices/naming/ |
| S19 | Instrumentation (Prometheus Documentation) | https://prometheus.io/docs/practices/instrumentation/ |
| S20 | Histograms and summaries (Prometheus Documentation) | https://prometheus.io/docs/practices/histograms/ |
| S21 | Alerting (Prometheus Documentation) | https://prometheus.io/docs/practices/alerting/ |
| S22 | Alerting overview (Prometheus Documentation) | https://prometheus.io/docs/alerting/latest/overview/ |
| S23 | Alertmanager (Prometheus Documentation) | https://prometheus.io/docs/alerting/latest/alertmanager/ |
| S24 | Alertmanager configuration (Prometheus Documentation) | https://prometheus.io/docs/alerting/latest/configuration/ |
| S25 | Alertmanager README (amtool) (Prometheus Alertmanager on GitHub) | https://github.com/prometheus/alertmanager/blob/main/README.md |
| S26 | promtool (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/command-line/promtool/ |
| S27 | HTTP API (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/querying/api/ |
| S28 | Management API (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/management_api/ |
| S29 | prometheus command line (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/command-line/prometheus/ |
| S30 | Installation (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/installation/ |
| S31 | Loki overview (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/get-started/overview/ |
| S32 | Labels (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/get-started/labels/ |
| S33 | Label best practices (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/get-started/labels/bp-labels/ |
| S34 | Log queries (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/query/log_queries/ |
| S35 | Metric queries (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/query/metric_queries/ |
| S36 | HTTP API (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/reference/loki-http-api/ |
| S37 | Configuration examples (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/configure/examples/configuration-examples/ |
| S38 | Configuration reference (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/configure/ |
| S39 | Install Loki with Docker or Docker Compose (Grafana Loki Documentation) | https://grafana.com/docs/loki/latest/setup/install/docker/ |
| S40 | Operators (Prometheus Documentation) | https://prometheus.io/docs/prometheus/latest/querying/operators/ |
| S41 | Traces (OpenTelemetry Documentation) | https://opentelemetry.io/docs/concepts/signals/traces/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings | S1 | "Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings." |
| To ask those questions about your system, your application must be properly instrumented | S1 | "To ask those questions about your system, your application must be properly instrumented." |
| That is, the application code must emit signals such as traces, metrics, and logs | S1 | "That is, the application code must emit signals such as traces, metrics, and logs." |
| Telemetry refers to data emitted from a system and its behavior | S1 | "Telemetry refers to data emitted from a system and its behavior." |
| OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable | S1 | "OpenTelemetry is the mechanism by which application code is instrumented to help make a system observable." |
| The Google SRE book describes monitoring as collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifet | S7 | "Collecting, processing, aggregating, and displaying real-time quantitative data about a system, such as query counts and types, error counts and types, processing times, and server lifetimes." |
| White-box monitoring is based on metrics exposed by the internals of the system | S7 | "Monitoring based on metrics exposed by the internals of the system, including logs, interfaces like the Java Virtual Machine Profiling Interface, or an HTTP handler that emits internal statistics." |
| Black-box monitoring is testing externally visible behavior as a user would see it | S7 | "Testing externally visible behavior as a user would see it." |
| Metrics are aggregations over a period of time of numeric data about your infrastructure or application | S1 | "Metrics are aggregations over a period of time of numeric data about your infrastructure or application." |
| A log is a timestamped message emitted by services or other components | S1 | "A log is a timestamped message emitted by services or other components." |
| A span represents a single unit of work or operation | S1 | "A span represents a single unit of work or operation." |
| A trace is made of one or more spans | S1 | "A trace is made of one or more spans." |
| The first span represents the root span | S1 | "The first span represents the root span." |
| A distributed trace records the path taken by a single request as it propagates through multiple services in an architecture | S1 | "A distributed trace, more commonly known as a trace, records the path taken by a single request (made by an application or end user) as it propagates through multiple services in an architecture, such as microservice or serverless applications." |
| Prometheus is an open-source systems monitoring and alerting toolkit | S8 | "Prometheus is an open-source systems monitoring and alerting toolkit" |
| It collects and stores its metrics as time series data | S8 | "Prometheus collects and stores its metrics as time series data, i.e. metrics information is stored with the timestamp at which it was recorded, alongside optional key-value pairs called labels." |
| The Alertmanager handles alerts sent by client applications such as the Prometheus server | S23 | "The Alertmanager handles alerts sent by client applications such as the Prometheus server." |
| Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus | S31 | "Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus." |
| Unlike other logging systems, Loki does not index the contents of the logs | S31 | "Unlike other logging systems, Loki does not index the contents of the logs, but only indexes metadata about your logs as a set of labels for each log stream." |
| OpenTelemetry is open source, and vendor- and tool-agnostic | S2 | "Open source, as well as vendor- and tool-agnostic, meaning that it can be used with a broad variety of observability backends, including open source tools like Jaeger and Prometheus, as well as commercial offerings." |
| It is not an observability backend itself | S2 | "OpenTelemetry is not an observability backend itself." |
| The Prometheus ecosystem consists of multiple components, many of which are optional | S8 | "The Prometheus ecosystem consists of multiple components, many of which are optional:" |
| The main Prometheus server scrapes and stores time series data | S8 | "the main Prometheus server which scrapes and stores time series data" |
| Client libraries instrument application code | S8 | "client libraries for instrumenting application code" |
| An alertmanager handles alerts | S8 | "an alertmanager to handle alerts" |
| Prometheus scrapes metrics from instrumented jobs | S8 | "Prometheus scrapes metrics from instrumented jobs, either directly or via an intermediary push gateway for short-lived jobs." |
| It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts | S8 | "It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts." |
| Grafana or other API consumers can be used to visualize the collected data | S8 | "Grafana or other API consumers can be used to visualize the collected data." |
| Time series collection happens via a pull model over HTTP | S8 | "time series collection happens via a pull model over HTTP" |
| Prometheus stores its data as time series | S8 | "Prometheus collects and stores its metrics as time series data, i.e. metrics information is stored with the timestamp at which it was recorded, alongside optional key-value pairs called labels." |
| Every time series is uniquely identified by its metric name and optional key-value pairs called labels | S9 | "Every time series is uniquely identified by its metric name and optional key-value pairs called labels." |
| Besides stored time series, Prometheus may generate temporary derived time series as the result of queries | S9 | "Besides stored time series, Prometheus may generate temporary derived time series as the result of queries." |
| In Prometheus terms, an endpoint you can scrape is called an instance, usually corresponding to a single process | S11 | "In Prometheus terms, an endpoint you can scrape is called an instance, usually corresponding to a single process." |
| A collection of instances with the same purpose is called a job | S11 | "A collection of instances with the same purpose, a process replicated for scalability or reliability for example, is called a job." |
| When Prometheus scrapes a target, it attaches some labels automatically to the scraped time series | S11 | "When Prometheus scrapes a target, it attaches some labels automatically to the scraped time series which serve to identify the scraped target:" |
| The job label holds the configured job name that the target belongs to | S11 | "job: The configured job name that the target belongs to." |
| The instance label holds the host and port part of the target's URL that was scraped | S11 | "instance: The <host>:<port> part of the target's URL that was scraped." |
| For each instance scrape, Prometheus stores a sample in the up series | S11 | "For each instance scrape, Prometheus stores a sample in the following time series:" |
| Its value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed | S11 | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| The up series is useful for instance availability monitoring | S11 | "The up time series is useful for instance availability monitoring." |
| The Prometheus instrumentation libraries offer four core metric types | S10 | "The Prometheus instrumentation libraries offer four core metric types." |
| A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart | S10 | "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart." |
| Do not use a counter to expose a value that can decrease | S10 | "Do not use a counter to expose a value that can decrease." |
| A gauge is a metric that represents a single numerical value that can arbitrarily go up and down | S10 | "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down." |
| A histogram records observations by counting them in configurable buckets | S10 | "A histogram records observations (usually things like request durations or response sizes) by counting them in configurable buckets." |
| It also provides a sum of all observed values | S10 | "It also provides a sum of all observed values." |
| A classic histogram consists of multiple time series of simple float samples | S10 | "A classic histogram, however, consists of multiple time series of simple float samples." |
| They are the cumulative bucket counters, the sum, and the count | S10 | "cumulative counters for the observation buckets" |
| They are the cumulative bucket counters, the sum, and the count | S10 | "the total sum of all observed values, exposed as <basename>_sum" |
| They are the cumulative bucket counters, the sum, and the count | S10 | "the count of events that have been observed, exposed as <basename>_count" |
| Similar to a histogram, a summary samples observations | S10 | "Similar to a histogram, a summary samples observations (usually things like request durations and response sizes)." |
| Summaries calculate streaming φ-quantiles within the instrumented program and expose them directly | S20 | "summaries calculate streaming φ-quantiles within the instrumented program and expose them directly" |
| Histograms expose bucketed observation counts, and the calculation of quantiles happens on the Prometheus server using the histogram_quantile() function | S20 | "histograms expose bucketed observation counts and the calculation of quantiles from the buckets of a histogram happens on the Prometheus server using the histogram_quantile() function" |
| For a summary, other φ-quantiles and sliding windows cannot be calculated later | S20 | "Other φ-quantiles and sliding windows cannot be calculated later." |
| Metric names should have a single-word application prefix | S18 | "SHOULD have a (single-word) application prefix relevant to the domain the metric belongs to." |
| They should have a suffix that describes the unit, in plural form | S18 | "SHOULD have a suffix describing the unit, in plural form." |
| Every unique combination of key-value label pairs represents a new time series, which can dramatically increase the amount of data stored | S18 | "CAUTION: Remember that every unique combination of key-value label pairs represents a new time series, which can dramatically increase the amount of data stored." |
| Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values | S18 | "Do not use labels to store dimensions with high cardinality (many different label values), such as user IDs, email addresses, or other unbounded sets of values." |
| For monitoring purposes, services can generally be broken down into three types: online-serving, offline-processing, and batch jobs | S19 | "The three types of services For monitoring purposes, services can generally be broken down into three types: online-serving, offline-processing, and batch jobs." |
| Online-serving systems should be monitored on both the client and server side | S19 | "Online-serving systems should be monitored on both the client and server side." |
| If the two sides see different behaviors, that is very useful information for debugging | S19 | "If the two sides see different behaviors, that is very useful information for debugging." |
| Time series that are not present until something happens are difficult to deal with | S19 | "Time series that are not present until something happens are difficult to deal with, as the usual simple operations are no longer sufficient to correctly handle them." |
| To avoid this, export a default value such as 0 for any time series you know may exist in advance | S19 | "To avoid this, export a default value such as 0 for any time series you know may exist in advance." |
| As of Prometheus version 2.0, all processes that expose metrics to Prometheus must use a text format, by default | S17 | "As of Prometheus version 2.0, all processes that expose metrics to Prometheus must use a text format, by default." |
| Lines with a # as the first non-whitespace character are comments | S17 | "Lines with a # as the first non-whitespace character are comments." |
| They are ignored unless the first token after # is either HELP or TYPE | S17 | "They are ignored unless the first token after # is either HELP or TYPE." |
| If the token is TYPE, exactly two more tokens are expected | S17 | "If the token is TYPE, exactly two more tokens are expected." |
| The first is the metric name, and the second is either counter, gauge, histogram, summary, or untyped | S17 | "The first is the metric name, and the second is either counter, gauge, histogram, summary, or untyped, defining the type for the metric of that name." |
| The remaining lines describe samples, one per line | S17 | "The remaining lines describe samples (one per line)" |
| Prometheus provides a functional query language called PromQL that lets the user select and aggregate time series data in real time | S12 | "Prometheus provides a functional query language called PromQL (Prometheus Query Language) that lets the user select and aggregate time series data in real time." |
| A query request can be an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time | S12 | "When you send a query request to Prometheus, it can be an instant query, evaluated at one point in time, or a range query at equally-spaced steps between a start and an end time." |
| An instant vector is a set of time series containing a single sample for each time series, all sharing the same timestamp | S12 | "Instant vector - a set of time series containing a single sample for each time series, all sharing the same timestamp" |
| A range vector is a set of time series containing a range of data points over time for each time series | S12 | "Range vector - a set of time series containing a range of data points over time for each time series" |
| Instant vector selectors allow the selection of a set of time series and a single sample value for each at a given timestamp | S12 | "Instant vector selectors allow the selection of a set of time series and a single sample value for each at a given timestamp (point in time)." |
| You can filter the series further with a comma-separated list of label matchers in curly braces | S12 | "It is possible to filter these time series further by appending a comma-separated list of label matchers in curly braces ({})." |
| By convention, time series that contain float counters have a name ending in _total | S12 | "By convention, time series containing float counters have a name ending on _total to help with the distinction." |
| Between an instant vector and a scalar, a comparison operator is applied to every sample, and the elements for which the comparison is false get dropped from the result | S40 | "Between an instant vector and a scalar, these operators are applied to the value of every data sample in the vector, and vector elements between which the comparison result is false get dropped from the result vector." |
| rate(v range-vector) calculates the per-second average rate of increase of the time series in the range vector | S13 | "rate(v range-vector) calculates the per-second average rate of increase of the time series in the range vector." |
| Breaks in monotonicity, such as counter resets due to target restarts, are automatically adjusted for | S13 | "Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for." |
| The rate function should only be used with counters | S13 | "rate should only be used with counters (for both floats and histograms)." |
| Applying it to gauge floats will most likely produce a nonsensical result, but the query will be processed without complaints | S12 | "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains." |
| When you combine rate() with an aggregation operator such as sum(), always take a rate() first, then aggregate | S13 | "Note that when combining rate() with an aggregation operator (e.g. sum()) or a function aggregating over time (any function ending in _over_time), always take a rate() first, then aggregate." |
| Otherwise rate() cannot detect counter resets when your target restarts | S13 | "Otherwise rate() cannot detect counter resets when your target restarts." |
| histogram_quantile(φ scalar, b instant-vector) calculates the φ-quantile from a classic histogram or from a native histogram | S13 | "histogram_quantile(φ scalar, b instant-vector) calculates the φ-quantile (0 ≤ φ ≤ 1) from a classic histogram or from a native histogram." |
| The page says to use the rate() function to specify the time window for the quantile calculation | S13 | "Use the rate() function to specify the time window for the quantile calculation." |
| For classic histograms, the le label has to be included in the by clause | S13 | "Since the le label is required by histogram_quantile() to deal with classic histograms, it has to be included in the by clause." |
| Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series | S14 | "Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series." |
| Recording and alerting rules exist in a rule group | S14 | "Recording and alerting rules exist in a rule group." |
| Rules within a group are run sequentially at a regular interval, with the same evaluation time | S14 | "Rules within a group are run sequentially at a regular interval, with the same evaluation time." |
| The names of recording rules must be valid metric names | S14 | "The names of recording rules must be valid metric names." |
| For an alerting rule, all resultant time series of the expression become pending or firing alerts | S14 | "evaluated at the current time, and all resultant time series become" |
| For an alerting rule, all resultant time series of the expression become pending or firing alerts | S14 | "pending/firing alerts." |
| Alerts are considered firing once they have been returned for this long | S14 | "Alerts are considered firing once they have been returned for this long." |
| Alerts which have not yet fired for long enough are considered pending | S14 | "Alerts which have not yet fired for long enough are considered pending." |
| The labels clause allows specifying a set of additional labels to be attached to the alert | S15 | "The labels clause allows specifying a set of additional labels to be attached to the alert." |
| The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links | S15 | "The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| For pending and firing alerts, Prometheus also stores synthetic time series of the form ALERTS | S15 | "For pending and firing alerts, Prometheus also stores synthetic time series of the form ALERTS" |
| Prometheus's alerting rules are good at figuring what is broken right now, but they are not a fully-fledged notification solution | S15 | "Prometheus's alerting rules are good at figuring what is broken right now, but they are not a fully-fledged notification solution." |
| Alerting with Prometheus is separated into two parts | S22 | "Alerting with Prometheus is separated into two parts." |
| Alerting rules in Prometheus servers send alerts to an Alertmanager | S22 | "Alerting rules in Prometheus servers send alerts to an Alertmanager." |
| The Alertmanager takes care of deduplicating, grouping, and routing them to the correct receiver integration | S23 | "It takes care of deduplicating, grouping, and routing them to the correct receiver integration such as email, PagerDuty, or OpsGenie." |
| Grouping categorizes alerts of similar nature into a single notification | S23 | "Grouping categorizes alerts of similar nature into a single notification." |
| Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing | S23 | "Inhibition is a concept of suppressing notifications for certain alerts if certain other alerts are already firing." |
| Silences are a straightforward way to simply mute alerts for a given time | S23 | "Silences are a straightforward way to simply mute alerts for a given time." |
| A silence is configured based on matchers, just like the routing tree | S23 | "A silence is configured based on matchers, just like the routing tree." |
| Every alert enters the routing tree at the configured top-level route, which must match all alerts | S24 | "Every alert enters the routing tree at the configured top-level route, which must match all alerts (i.e. not have any configured matchers)." |
| It then traverses the child nodes | S24 | "It then traverses the child nodes." |
| If continue is set to false, it stops after the first matching child | S24 | "If continue is set to false, it stops after the first matching child." |
| If an alert does not match any children of a node, the alert is handled based on the configuration parameters of the current node | S24 | "If an alert does not match any children of a node (no matching child nodes, or none exist), the alert is handled based on the configuration parameters of the current node." |
| Most optional parameters of a route are inherited from its parent node if not set | S24 | "Most optional configuration parameters (receiver, group_by, group_wait, group_interval, repeat_interval) are inherited from its parent node if not set." |
| The amtool command is a cli tool for interacting with the Alertmanager API | S25 | "amtool is a cli tool for interacting with the Alertmanager API." |
| It is bundled with all releases of Alertmanager | S25 | "It is bundled with all releases of Alertmanager." |
| The configuration page says that you can use amtool to validate that a configuration file is compatible with UTF-8 strict mode before enabling it in the server | S24 | "you can use amtool to validate that an Alertmanager configuration file is compatible with UTF-8 strict mode before enabling it in Alertmanager server." |
| For that check, you do not need a running Alertmanager server | S24 | "You do not need a running Alertmanager server to do this." |
| Aim to have as few alerts as possible, by alerting on symptoms that are associated with end-user pain rather than trying to catch every possible way that pain could be caused | S21 | "Aim to have as few alerts as possible, by alerting on symptoms that are associated with end-user pain rather than trying to catch every possible way that pain could be caused." |
| To summarize: keep alerting simple, alert on symptoms, have good consoles to allow pinpointing causes, and avoid having pages where there is nothing to do | S21 | "To summarize: keep alerting simple, alert on symptoms, have good consoles to allow pinpointing causes, and avoid having pages where there is nothing to do." |
| For error rates, page on user-visible errors | S21 | "For error rates, page on user-visible errors." |
| The Google SRE book says that the four golden signals of monitoring are latency, traffic, errors, and saturation | S7 | "The four golden signals of monitoring are latency, traffic, errors, and saturation." |
| If you can only measure four metrics of your user-facing system, focus on these four | S7 | "If you can only measure four metrics of your user-facing system, focus on these four." |
| Errors are the rate of requests that fail, either explicitly, implicitly, or by policy | S7 | "The rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 success response, but coupled with the wrong content), or by policy" |
| It is important to distinguish between the latency of successful requests and the latency of failed requests | S7 | "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull | S31 | "Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull." |
| Labels allow Loki to organize and group together log messages into log streams | S32 | "They allow Loki to organize and group together log messages into log streams." |
| If a service_name label is already present on the stream, Loki uses it directly | S32 | "If a service_name label is already present on the stream, Loki uses it directly." |
| Otherwise, Loki looks for the first non-empty value from a list of labels, in order | S32 | "Otherwise, Loki looks for the first non-empty value from the following labels, in order:" |
| If no label is found matching the list, a value of unknown_service is applied | S32 | "If no label is found matching the list, a value of unknown_service is applied." |
| Use labels for things like regions, clusters, servers, applications, namespaces, and environments | S33 | "Use labels for things like regions, clusters, servers, applications, namespaces, and environments." |
| Too many label value combinations leads to too many streams | S33 | "Too many label value combinations leads to too many streams." |
| The penalties for that in Loki are a large index and small chunks in the store, which in turn can actually reduce performance | S33 | "The penalties for that in Loki are a large index and small chunks in the store, which in turn can actually reduce performance." |
| To avoid those issues, don’t add a label for something until you know you need it | S33 | "To avoid those issues, don’t add a label for something until you know you need it!" |
| All LogQL queries contain a log stream selector | S34 | "All LogQL queries contain a log stream selector." |
| Optionally, the log stream selector can be followed by a log pipeline | S34 | "Optionally, the log stream selector can be followed by a log pipeline." |
| A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams | S34 | "A log pipeline is a set of stage expressions that are chained together and applied to the selected log streams." |
| The log stream selector is specified by one or more comma-separated key-value pairs | S34 | "The log stream selector is specified by one or more comma-separated key-value pairs." |
| The label matching operators are = (exactly equal), != (not equal), =~ (regex matches), and !~ (regex does not match) | S34 | "=: exactly equal !=: not equal =~: regex matches !~: regex does not match" |
| The line filter expression does a distributed grep over the aggregated logs from the matching log streams | S34 | "The line filter expression does a distributed grep over the aggregated logs from the matching log streams." |
| It searches the contents of the log line, discarding those lines that do not match the case-sensitive expression | S34 | "It searches the contents of the log line, discarding those lines that do not match the case-sensitive expression." |
| A label filter expression allows filtering log lines using their original and extracted labels | S34 | "Label filter expression allows filtering log line using their original and extracted labels." |
| Metric queries extend log queries by applying a function to log query results | S35 | "Metric queries extend log queries by applying a function to log query results." |
| count_over_time(log-range) counts the entries for each log stream within the given range | S35 | "count_over_time(log-range): counts the entries for each log stream within the given range." |
| When you use the push endpoint, you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error | S36 | "When using /api/v1/push, you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| The /loki/api/v1/query_range endpoint is used to do a query over a range of time | S36 | "/loki/api/v1/query_range is used to do a query over a range of time." |
| Its limit parameter is the max number of entries to return, and it defaults to 100 | S36 | "limit: The max number of entries to return. It defaults to 100." |
| Its start parameter defaults to one hour ago | S36 | "Defaults to one hour ago." |
| Query endpoints such as /loki/api/v1/query and /loki/api/v1/query_range return a set of statistics about the query execution | S36 | "Query endpoints such as /loki/api/v1/query and /loki/api/v1/query_range return a set of statistics about the query execution." |
| The /ready endpoint returns HTTP 200 when the Loki instance is ready to accept traffic | S36 | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| The /loki/api/v1/labels endpoint retrieves the list of known labels within a given time span | S36 | "/loki/api/v1/labels retrieves the list of known labels within a given time span." |
| With context propagation, signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated | S3 | "With context propagation, signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated." |
| Propagation is the mechanism that moves context between services and processes | S3 | "Propagation is the mechanism that moves context between services and processes." |
| Propagation is usually handled by instrumentation libraries and is transparent to the user | S3 | "Propagation is usually handled by instrumentation libraries and is transparent to the user." |
| OpenTelemetry provides a text-based approach to propagate context to remote services using the W3C Trace Context HTTP headers | S4 | "OpenTelemetry provides a text-based approach to propagate context to remote services using the W3C Trace Context HTTP headers." |
| The traceparent HTTP header field identifies the incoming request in a tracing system | S6 | "traceparent HTTP header field identifies the incoming request in a tracing system." |
| It has four fields: version, trace-id, parent-id, and trace-flags | S6 | "It has four fields: version trace-id parent-id trace-flags" |
| The trace-id is represented as a 16-byte array, and a value of all zero bytes is considered invalid | S6 | "It is represented as a 16-byte array, for example, 4bf92f3577b34da6a3ce929d0e0e4736." |
| The trace-id is represented as a 16-byte array, and a value of all zero bytes is considered invalid | S6 | "All bytes as zero (00000000000000000000000000000000) is considered an invalid value." |
| The parent-id is represented as an 8-byte array, and a value of all zero bytes is considered invalid | S6 | "It is represented as an 8-byte array, for example, 00f067aa0ba902b7." |
| The parent-id is represented as an 8-byte array, and a value of all zero bytes is considered invalid | S6 | "All bytes as zero (0000000000000000) is considered an invalid value." |
| When the least significant bit of the flags is set, it denotes that the caller may have recorded trace data | S6 | "When set, the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number | S6 | "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| In Python, the sending service injects the current context | S4 | "First, on the sending service, inject the current context:" |
| The receiving service extracts context, for example from parsed HTTP headers, and then sets it as the current trace context | S4 | "On the receiving service, extract context, for example, from parsed HTTP headers, and then set them as the current trace context." |
| The page says to use instrumentation libraries to propagate context | S4 | "Use instrumentation libraries to propagate context." |
| The ConsoleSpanExporter is included in the opentelemetry-sdk package | S5 | "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| You can use promtool to test your rules | S16 | "You can use promtool to test your rules." |
| The promtool check config command checks if the config files are valid or not | S26 | "promtool check config Check if the config files are valid or not." |
| The promtool check rules command checks if the rule files are valid or not | S26 | "promtool check rules Check if the rule files are valid or not." |
| The promtool test rules command runs unit tests for rules | S26 | "promtool test rules Unit tests for rules." |
| A test file has a list of rule files to consider for testing | S16 | "This is a list of rule files to consider for testing. Globs are supported." |
| The input series use an expanding notation | S16 | "This uses expanding notation." |
| In it, _ represents a missing sample from scrape | S16 | "'_' represents a missing sample from scrape" |
| An alert test lists the union of all the firing alerts for the alertname under a single alert test case | S16 | "Prometheus allows you to have same alertname for different alerting rules. Hence in this unit testing, you have to list the union of all the firing alerts for the alertname under a single <alert_test_case>." |
| To test that an alerting rule is not firing, you can mention the fields and leave exp_alerts empty | S16 | "not be firing, then you can mention the above fields and leave 'exp_alerts' empty." |
| A test of a PromQL expression names the expression, the evaluation time, and the expected samples | S16 | "Expression to evaluate" |
| A test of a PromQL expression names the expression, the evaluation time, and the expected samples | S16 | "Expected samples at the given evaluation time." |
| The Prometheus docs say that they provide precompiled binaries for most official Prometheus components | S30 | "We provide precompiled binaries for most official Prometheus components." |
| They also say that running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus | S30 | "Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus." |
| The Loki docs say that you can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki | S39 | "You can install Loki and Alloy with Docker or Docker Compose if you are evaluating, testing, or developing Loki." |
| The lines that start with # HELP and # TYPE are comments, which the format uses for help text and for the type of a metric | S17 | "They are ignored unless the first token after # is either HELP or TYPE." |
| Its name ends in _total, which is the convention for counters | S12 | "By convention, time series containing float counters have a name ending on _total to help with the distinction." |
| app_in_flight_requests is a gauge, a value that can go up and down | S10 | "A gauge is a metric that represents a single numerical value that can arbitrarily go up and down." |
| Its buckets are cumulative counters | S10 | "cumulative counters for the observation buckets" |
| Its buckets are cumulative counters | S10 | "the total sum of all observed values, exposed as <basename>_sum" |
| Its buckets are cumulative counters | S10 | "the count of events that have been observed, exposed as <basename>_count" |
| The overview says that targets are discovered via service discovery or static configuration | S8 | "targets are discovered via service discovery or static configuration" |
| Its expression takes the rate() first, and then aggregates with sum by (job), as the docs say | S13 | "Note that when combining rate() with an aggregation operator (e.g. sum()) or a function aggregating over time (any function ending in _over_time), always take a rate() first, then aggregate." |
| By default, a comparison between an instant vector and a scalar drops the elements for which it is false | S40 | "By default they filter." |
| By default, a comparison between an instant vector and a scalar drops the elements for which it is false | S40 | "Between an instant vector and a scalar, these operators are applied to the value of every data sample in the vector, and vector elements between which the comparison result is false get dropped from the result vector." |
| Their behavior can be modified by providing bool after the operator, which returns 0 or 1 for the value rather than filtering | S40 | "Their behavior can be modified by providing bool after the operator, which will return 0 or 1 for the value rather than filtering." |
| The for of 15 s means that the alert is pending until the expression has been returned for that long | S14 | "Alerts are considered firing once they have been returned for this long." |
| The for of 15 s means that the alert is pending until the expression has been returned for that long | S14 | "Alerts which have not yet fired for long enough are considered pending." |
| The alert AppDown fires when up{job="app"} is 0, and up is 0 if the scrape failed | S11 | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| Both alerts carry the label severity: page and an annotation summary | S15 | "The labels clause allows specifying a set of additional labels to be attached to the alert." |
| Both alerts carry the label severity: page and an annotation summary | S15 | "The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links." |
| promtool check config checks if the config files are valid or not, and promtool check rules checks the rule files | S26 | "promtool check config Check if the config files are valid or not." |
| promtool check config checks if the config files are valid or not, and promtool check rules checks the rule files | S26 | "promtool check rules Check if the rule files are valid or not." |
| The page of promtool lists a flag --syntax-only, which ignores the validation of the files and content that the config references | S26 | "--syntax-only Only check the config file syntax, ignoring file and content validation referenced in the config" |
| The page on rules says that you can quickly check whether a rule file is syntactically correct without starting a Prometheus server, with promtool check rules | S14 | "To quickly check whether a rule file is syntactically correct without starting a Prometheus server, you can use Prometheus's promtool command-line utility tool:" |
| The page on rules says that you can quickly check whether a rule file is syntactically correct without starting a Prometheus server, with promtool check rules | S14 | "promtool check rules /path/to/example.rules.yml" |
| The promtool test rules command runs unit tests for rules | S26 | "promtool test rules Unit tests for rules." |
| A test file lists the rule files to consider | S16 | "This is a list of rule files to consider for testing. Globs are supported." |
| The docs read it as "series starts at a, then n further samples incrementing by b" | S16 | "Read this as series starts at a, then n further samples incrementing by b." |
| The docs describe group_wait as how long to wait before sending the first notification for a new group | S24 | "How long to wait before sending the first notification for a new group of" |
| The docs describe group_wait as how long to wait before sending the first notification for a new group , and repeat_interval as how long to wait before repeating the last notification | S24 | "How long to wait before repeating the last notification." |
| Every alert enters the routing tree at the top-level route and then traverses the child nodes | S24 | "Every alert enters the routing tree at the configured top-level route, which must match all alerts (i.e. not have any configured matchers)." |
| Every alert enters the routing tree at the top-level route and then traverses the child nodes | S24 | "It then traverses the child nodes." |
| The configuration page shows amtool check-config for the check of UTF-8 strict mode | S24 | "amtool will log a warning if the configuration is incompatible or contains disagreement: amtool check-config" |
| It says that you do not need a running Alertmanager server for that check | S24 | "You do not need a running Alertmanager server to do this." |
| The README of Alertmanager says that amtool can visualize the routes of a configuration as a text tree | S25 | "amtool allows you to visualize the routes of your configuration in form of text tree view." |
| It says that you can also use it to test the routing, by passing it the label set of an alert | S25 | "Also you can use it to test the routing by passing it label set of an alert and it prints out all receivers the alert would match ordered and separated by ,." |
| The README writes the two commands as amtool config routes | S25 | "amtool config routes --alertmanager.url=http://localhost:9093" |
| The README writes the two commands as amtool config routes and amtool config routes test | S25 | "amtool config routes test --config.file=doc/examples/simple.yml --tree --verify.receivers=team-X-pager service=database owner=team-X" |
| The flag --config.file is the Prometheus configuration file path | S29 | "--config.file Prometheus configuration file path." |
| The flag --storage.tsdb.path is the base path for metrics storage | S29 | "Base path for metrics storage." |
| The flag --web.listen-address is the address to listen on for UI, API, and telemetry | S29 | "Address to listen on for UI, API, and telemetry." |
| Setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests | S25 | "If running Alertmanager in high availability mode is not desired, setting --cluster.listen-address= prevents Alertmanager from listening to incoming peer requests." |
| That endpoint returns 200 when Prometheus is ready to serve traffic | S28 | "This endpoint returns 200 when Prometheus is ready to serve traffic (i.e. respond to queries)." |
| The API response format is JSON | S27 | "The API response format is JSON." |
| The endpoint /api/v1/query evaluates an instant query at a single point in time | S27 | "The following endpoint evaluates an instant query at a single point in time:" |
| That means the instance was healthy, that is, reachable | S11 | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| The docs say that the φ-quantile is the observation value that ranks at number φN among the N observations | S20 | "The φ-quantile is the observation value that ranks at number φ*N among the N observations." |
| The function interpolates the quantile value within the bucket that it falls into | S13 | "In the (common) case that a quantile value does not coincide with a bucket boundary, the histogram_quantile() function interpolates the quantile value within the bucket the quantile value falls into." |
| For classic histograms, it assumes a uniform distribution of observations within the bucket | S13 | "For classic histograms, for native histograms with custom bucket boundaries, and for the zero bucket of other native histograms, it assumes a uniform distribution of observations within the bucket (also called linear interpolation)." |
| The docs use the rate() function to specify the time window | S13 | "Use the rate() function to specify the time window for the quantile calculation." |
| The /alerts endpoint returns a list of all active alerts | S27 | "The /alerts endpoint returns a list of all active alerts." |
| An alert is pending until it has been returned for the for time | S14 | "Alerts which have not yet fired for long enough are considered pending." |
| The README shows amtool silence add alertname=Test_Alert | S25 | "amtool silence add alertname=Test_Alert" |
| The Alertmanager page says that silences are configured in the web interface | S23 | "Silences are configured in the web interface of the Alertmanager." |
| Its up was 0, because the scrape failed | S11 | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| The page lists a complete configuration to deploy Loki backed by the filesystem | S37 | "This is a complete configuration to deploy Loki backed by the filesystem." |
| The tutorial changed the ports, and the folder, which is loki-data here and /tmp/loki on the page | S37 | "path_prefix: /tmp/loki" |
| The configuration reference describes that setting as "Enable anonymous usage reporting" | S38 | "Enable anonymous usage reporting." |
| That endpoint returns HTTP 200 when the Loki instance is ready to accept traffic | S36 | "/ready returns HTTP 200 when the Loki instance is ready to accept traffic." |
| The timestamp of each entry is a string, as the API needs | S36 | "When using /api/v1/push, you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| If no service_name is on the stream, Loki looks for the first non-empty value from a list of labels, in order | S32 | "Otherwise, Loki looks for the first non-empty value from the following labels, in order:" |
| If no service_name is on the stream, Loki looks for the first non-empty value from a list of labels, in order | S32 | "component workload job k8s_job_name" |
| The configuration reference says that Loki can discover and add log levels during ingestion, if not present already | S38 | "Discover and add log levels during ingestion, if not present already." |
| A line filter expression does a distributed grep over the log streams that match, and discards the lines that do not match | S34 | "The line filter expression does a distributed grep over the aggregated logs from the matching log streams." |
| A line filter expression does a distributed grep over the log streams that match, and discards the lines that do not match | S34 | "It searches the contents of the log line, discarding those lines that do not match the case-sensitive expression." |
| The parameter limit is the max number of entries to return, and it defaults to 100 | S36 | "limit: The max number of entries to return. It defaults to 100." |
| The function count_over_time counts the entries for each log stream within the given range | S35 | "count_over_time(log-range): counts the entries for each log stream within the given range." |
| The logfmt stage parses each log line to extract more labels, and the next stage filters with them | S34 | "which will filter out log that contains the word metrics.go, then parses each log line to extract more labels and filter with them." |
| Query endpoints return a set of statistics about the query execution | S36 | "Query endpoints such as /loki/api/v1/query and /loki/api/v1/query_range return a set of statistics about the query execution." |
| The script uses the ConsoleSpanExporter of the SDK, which is included in the opentelemetry-sdk package | S5 | "The ConsoleSpanExporter and ConsoleMetricExporter are included in the opentelemetry-sdk package." |
| It passes the context by hand, as the Python docs show | S4 | "First, on the sending service, inject the current context:" |
| It passes the context by hand, as the Python docs show | S4 | "On the receiving service, extract context, for example, from parsed HTTP headers, and then set them as the current trace context." |
| The same page says to use instrumentation libraries to propagate context | S4 | "Use instrumentation libraries to propagate context." |
| The header has the four fields | S6 | "It has four fields: version trace-id parent-id trace-flags" |
| The right-most bit of the flags, when set, denotes that the caller may have recorded trace data | S6 | "When set, the least significant bit (right-most), denotes that the caller may have recorded trace data." |
| The page also says that the flags are a bit field, and that you cannot read them as a number | S6 | "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
| The span of service A has a trace_id but no parent_id, and that is how you know that it is a root span | S41 | "Note that it has a trace_id field indicating the trace, but has no parent_id." |
| The span of service A has a trace_id but no parent_id, and that is how you know that it is a root span | S41 | "That’s how you know it’s the root span." |
| The W3C page says that, when no traceparent header is received, the vendor creates a new trace-id and parent-id that represents the current request | S6 | "Because the traceparent header is not received, the vendor creates a new trace-id and parent-id that represents the current request." |
| A counter can only increase or be reset to zero on restart | S10 | "A counter is a cumulative metric that represents a single monotonically increasing counter whose value can only increase or be reset to zero on restart." |
| The value is 1 if the instance is healthy, that is, reachable, or 0 if the scrape failed | S11 | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| The SRE book counts an HTTP 200 with the wrong content as an error too, implicitly | S7 | "The rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 success response, but coupled with the wrong content), or by policy" |
| A test can also expect that an alert does not fire, with an empty exp_alerts | S16 | "not be firing, then you can mention the above fields and leave 'exp_alerts' empty." |
| Every alert enters the routing tree at the top-level route and then traverses the child nodes | S24 | "Every alert enters the routing tree at the configured top-level route, which must match all alerts (i.e. not have any configured matchers)." |
| Every alert enters the routing tree at the top-level route and then traverses the child nodes | S24 | "It then traverses the child nodes." |
| In step 6, the alert was pending first, and firing later, because of its for time | S14 | "Alerts are considered firing once they have been returned for this long." |
| The helper wait_for of the tutorial polls the endpoint /api/v1/alerts until the line that it wants shows | S27 | "The /alerts endpoint returns a list of all active alerts." |
| The docs say not to use labels to store dimensions with high cardinality, such as user IDs | S18 | "Do not use labels to store dimensions with high cardinality (many different label values), such as user IDs, email addresses, or other unbounded sets of values." |
| For Loki, too many label value combinations leads to too many streams | S33 | "Too many label value combinations leads to too many streams." |
| In step 7, the label job="app" selected the stream and a line filter kept the lines with code=500 | S34 | "The line filter expression does a distributed grep over the aggregated logs from the matching log streams." |
| With context propagation, signals can be correlated with each other, regardless of where they are generated | S3 | "With context propagation, signals (traces, metrics, and logs) can be correlated with each other, regardless of where they are generated." |
| The rate function should only be used with counters | S13 | "rate should only be used with counters (for both floats and histograms)." |
| Applied to gauge floats, it will most likely produce a nonsensical result, but the query will be processed without complaints | S12 | "applying the rate function to gauge floats will most likely produce a nonsensical result, but the query will be processed without complains." |
| When you combine rate() with an aggregation operator such as sum(), always take a rate() first, then aggregate | S13 | "Note that when combining rate() with an aggregation operator (e.g. sum()) or a function aggregating over time (any function ending in _over_time), always take a rate() first, then aggregate." |
| Otherwise rate() cannot detect counter resets when your target restarts | S13 | "Otherwise rate() cannot detect counter resets when your target restarts." |
| Do not use a counter to expose a value that can decrease | S10 | "Do not use a counter to expose a value that can decrease." |
| The docs give an example: do not use a counter for the number of currently running processes, and use a gauge instead | S10 | "For example, do not use a counter for the number of currently running processes; instead use a gauge." |
| The page on histograms says that Prometheus implements pre-calculated quantiles as a metric type called summary | S20 | "Prometheus implements this approach in the form of a metric type called summary." |
| It adds that you cannot recalculate the quantiles later for another time window or another percentile, and that you cannot aggregate quantiles | S20 | "Also, you cannot “recalculate” the quantiles later if you desire another time window or another percentile, and most importantly, you cannot aggregate quantiles (e.g. to calculate the total 90th percentile latency for a service backed by multiple replicated workers)." |
| Do not use labels to store dimensions with high cardinality, such as user IDs, email addresses, or other unbounded sets of values | S18 | "Do not use labels to store dimensions with high cardinality (many different label values), such as user IDs, email addresses, or other unbounded sets of values." |
| In Loki, the penalties of too many streams are a large index and small chunks in the store | S33 | "The penalties for that in Loki are a large index and small chunks in the store, which in turn can actually reduce performance." |
| Alerts which have not yet fired for long enough are considered pending | S14 | "Alerts which have not yet fired for long enough are considered pending." |
| If an alert matches an active silence, no notifications will be sent out for that alert | S23 | "If they do, no notifications will be sent out for that alert." |
| The value of up says whether the scrape worked | S11 | "1 if the instance is healthy, i.e. reachable, or 0 if the scrape failed." |
| The SRE book counts an HTTP 200 success response, coupled with the wrong content, as an error, implicitly | S7 | "The rate of requests that fail, either explicitly (e.g., HTTP 500s), implicitly (for example, an HTTP 200 success response, but coupled with the wrong content), or by policy" |
| It is important to distinguish between the latency of successful requests and the latency of failed requests | S7 | "It’s important to distinguish between the latency of successful requests and the latency of failed requests." |
| The command promtool check rules checks if the rule files are valid or not, and promtool test rules runs unit tests for rules | S26 | "promtool check rules Check if the rule files are valid or not." |
| The command promtool check rules checks if the rule files are valid or not, and promtool test rules runs unit tests for rules | S26 | "promtool test rules Unit tests for rules." |
| Time series that are not present until something happens are difficult to deal with | S19 | "Time series that are not present until something happens are difficult to deal with, as the usual simple operations are no longer sufficient to correctly handle them." |
| The docs say to export a default value such as 0 for any time series that you know may exist in advance | S19 | "To avoid this, export a default value such as 0 for any time series you know may exist in advance." |
| The push endpoint needs the timestamp as a string, and it returns a 400 error otherwise | S36 | "When using /api/v1/push, you must send the timestamp as a string and not a number, otherwise the endpoint will return a 400 error." |
| The line filter expression discards the lines that do not match the case-sensitive expression | S34 | "It searches the contents of the log line, discarding those lines that do not match the case-sensitive expression." |
| When no traceparent header is received, the vendor creates a new trace-id and parent-id that represents the current request | S6 | "Because the traceparent header is not received, the vendor creates a new trace-id and parent-id that represents the current request." |
| The flags are a bit field, and you cannot interpret them by decoding the hex value and looking at the resulting number | S6 | "As this is a bit field, you cannot interpret flags by decoding the hex value and looking at the resulting number." |
