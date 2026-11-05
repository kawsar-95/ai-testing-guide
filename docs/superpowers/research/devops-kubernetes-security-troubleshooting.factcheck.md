# Fact check: devops / kubernetes-security-troubleshooting

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://kubernetes.io/docs/concepts/configuration/secret/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Secrets, pod security, and how to debug stuck pods and DNS problems. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. Note: the only source (S1) covers Secrets. Nothing in the page body or in S1 covers pod security, stuck pods, or DNS. |
| 1 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key." |
| 2 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Kubernetes Secrets, and how they are stored by default." | none | PASS | The lede is a fact about Secrets and default storage. S1 supports it: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." The lede has no cite of its own, but claim 3 carries the same fact with a cite. |
| 2 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key." |
| 3 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Kubernetes Secrets, and how they are stored by default." | none | PASS | S1: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)". The lede has no cite, but S1 supports it. |
| 2 | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 3 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | S1: "A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key." |
| 4 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | S1: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store (etcd)." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / kubernetes-security-troubleshooting (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: "Kubernetes Secrets, and how they are stored by default." (the fact in it is that Secrets have a default way of being stored) | none | PASS | The lede gives no new fact beyond claim 2. S1 line 16: "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store". |
| 0b | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 1 | A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key | S1 | PASS | "A Secret is an object that contains a small amount of sensitive data such as" (line 6), continued: "a password, a token, or a key." (line 7). |
| 2 | By default, Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd) | S1 | PASS | "Kubernetes Secrets are, by default, stored unencrypted in the API server's underlying data store" (line 16), continued: "(etcd)." (line 17). |

Open FAILs after round 5: 0

Open FAILs: 0
