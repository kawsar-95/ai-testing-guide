# Fact check: devops / cncf-network-security-observability

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://www.cncf.io/about/who-we-are/; S2 https://www.cncf.io/projects/; S3 https://istio.io/latest/about/service-mesh/; S4 https://falco.org/docs/; S5 https://www.openpolicyagent.org/docs. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / cncf-network-security-observability (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Open-source projects for service meshes, proxies, runtime security, policy, and tracing." | none | N/A | The lede describes the page itself and has no cite. I did not check it against the sources. Note that S1 to S5 give no support for "proxies" or "tracing" as topics. |
| 1 | The CNCF hosts critical components of the global technology infrastructure. | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments. | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Istio is a service mesh. | 3 | PASS | S3: "Istio  is the most popular, powerful, and trusted service mesh." |
| 4 | A service mesh is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes. | 3 | PASS | S3: "A  service mesh  is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes." |
| 5 | Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments. | 4 | PASS | S4: "Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments." |
| 6 | The Open Policy Agent (OPA) is an open source, general-purpose policy engine that unifies policy enforcement across the stack. | 5 | PASS | S5: "The Open Policy Agent (OPA, pronounced "oh-pa") is an open source, general-purpose policy engine that unifies policy enforcement across the stack." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / cncf-network-security-observability (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, Istio, Falco, and the Open Policy Agent. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure. | S1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments. | S2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Istio is a service mesh. A service mesh is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes. | S3 | PASS | S3: "A service mesh is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes. Istio is the most popular, powerful, and trusted service mesh." |
| 4 | Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments. | S4 | PASS | S4: "Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments." |
| 5 | The Open Policy Agent (OPA) is an open source, general-purpose policy engine that unifies policy enforcement across the stack. | S5 | PASS | S5: "The Open Policy Agent (OPA, pronounced "oh-pa") is an open source, general-purpose policy engine that unifies policy enforcement across the stack." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / cncf-network-security-observability (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, Istio, Falco, and the Open Policy Agent. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede names the topics and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Istio is a service mesh | 3 | PASS | S3: "Istio  is the most popular, powerful, and trusted service mesh". The page title is "The Istio service mesh". |
| 4 | A service mesh is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes | 3 | PASS | S3: "A  service mesh  is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes." |
| 5 | Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments | 4 | PASS | S4: "Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments." |
| 6 | The Open Policy Agent (OPA) is an open source, general-purpose policy engine that unifies policy enforcement across the stack | 5 | PASS | S5: "The Open Policy Agent (OPA, pronounced "oh-pa") is an open source, general-purpose policy engine that unifies policy enforcement across the stack." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / cncf-network-security-observability (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "The CNCF, Istio, Falco, and the Open Policy Agent. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure | 1 | PASS | S1: "The Cloud Native Computing Foundation (CNCF) hosts critical components of the global technology infrastructure." |
| 2 | Its graduated and incubating projects are considered stable and are used successfully in production environments | 2 | PASS | S2: "Graduated and incubating projects are considered stable and are used successfully in production environments." |
| 3 | Istio is a service mesh | 3 | PASS | S3 gives this only by its title and heading: "Istio service mesh" and "What is Istio? A service mesh is...". It has no sentence "Istio is a service mesh". The title and heading are enough, but this is an implied match. |
| 4 | A service mesh is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes | 3 | PASS | S3: "A service mesh is an infrastructure layer that gives applications capabilities like zero-trust security, observability, and advanced traffic management, without code changes." |
| 5 | Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments | 4 | PASS | S4: "Falco is a cloud native security tool that provides runtime security across hosts, containers, Kubernetes, and cloud environments." |
| 6 | The Open Policy Agent (OPA) is an open source, general-purpose policy engine that unifies policy enforcement across the stack | 5 | PASS | S5: "The Open Policy Agent (OPA, pronounced "oh-pa") is an open source, general-purpose policy engine that unifies policy enforcement across the stack." |

Open FAILs after round 5: 0

Open FAILs: 0
