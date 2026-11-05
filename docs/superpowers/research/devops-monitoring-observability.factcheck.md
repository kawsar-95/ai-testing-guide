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

Open FAILs: 0
