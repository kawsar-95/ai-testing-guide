# Fact check: devops / kubernetes-operations

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/; S2 https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/; S3 https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / kubernetes-operations (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Probes, rolling updates, canary releases, scaling, resource limits, and upgrades. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line lists topics and describes the page itself. It states no fact about a tool, command, or number. |
| 1 | Kubernetes provides liveness probes to detect and remedy a container that cannot recover except by being restarted | 1 | PASS | S1: "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations." |
| 2 | A HorizontalPodAutoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, with the aim of automatically scaling capacity to match demand | 2 | PASS | S2: "a HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet), with the aim of automatically scaling capacity to match demand." |
| 3 | When you specify a resource limit for a container, the kubelet enforces it, so the running container is not allowed to use more of that resource than the limit you set | 3 | PASS | S3: "When you specify a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / kubernetes-operations (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Liveness probes, autoscaling, and resource limits. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Kubernetes provides liveness probes to detect and remedy a container that cannot recover except by being restarted | S1 | PASS | S1: "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations." The source says "applications", not "container". The exercise runs the application in a container, so I count the meaning as the same. |
| 2 | A HorizontalPodAutoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, with the aim of automatically scaling capacity to match demand | S2 | PASS | S2: "a HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet), with the aim of automatically scaling capacity to match demand." |
| 3 | When you specify a resource limit for a container, the kubelet enforces it, so the running container is not allowed to use more of that resource than the limit you set | S3 | PASS | S3: "When you specify a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set." |

Open FAILs after round 2: 0

Changed after this round: The Technical sentence on liveness probes now uses the words of S1 ("Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations"). The round 2 checker passed the earlier wording ("a container that cannot recover") but noted that a strict reader could fail it. Layman and Bangla follow the new sentence.

## Round 3 (2026-11-05)

## Fact check: devops / kubernetes-operations (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Liveness probes, autoscaling, and resource limits. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede names the topic and describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. | 1 | PASS | S1: "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted." |
| 2 | Kubernetes provides liveness probes to detect and remedy such situations. | 1 | PASS | S1: "Kubernetes provides liveness probes to detect and remedy such situations." |
| 3 | A HorizontalPodAutoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, with the aim of automatically scaling capacity to match demand. | 2 | PASS | S2: "a HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet ), with the aim of automatically scaling capacity to match demand." |
| 4 | When you specify a resource limit for a container, the kubelet enforces it, so the running container is not allowed to use more of that resource than the limit you set. | 3 | PASS | S3: "When you specify a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set." |

Open FAILs after round 3: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / kubernetes-operations (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Liveness probes, autoscaling, and resource limits. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede names the topic and describes the page itself. It gives no fact about a tool, product, command, or number. |
| 1 | Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations. | S1 | PASS | S1: "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations." |
| 2 | A HorizontalPodAutoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, with the aim of automatically scaling capacity to match demand. | S2 | PASS | S2: "a HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet), with the aim of automatically scaling capacity to match demand." |
| 3 | When you specify a resource limit for a container, the kubelet enforces it, so the running container is not allowed to use more of that resource than the limit you set. | S3 | PASS | S3: "When you specify a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / kubernetes-operations (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Liveness probes, autoscaling, and resource limits. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It gives no fact about a tool, product, command or number. |
| 1 | Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. | S1 | PASS | S1: "Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted." |
| 2 | Kubernetes provides liveness probes to detect and remedy such situations. | S1 | PASS | S1: "Kubernetes provides liveness probes to detect and remedy such situations." |
| 3 | A HorizontalPodAutoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, with the aim of automatically scaling capacity to match demand. | S2 | PASS | S2: "a HorizontalPodAutoscaler automatically updates a workload resource (such as a Deployment or StatefulSet), with the aim of automatically scaling capacity to match demand." |
| 4 | When you specify a resource limit for a container, the kubelet enforces it, so the running container is not allowed to use more of that resource than the limit you set. | S3 | PASS | S3: "When you specify a resource limit for a container, the kubelet enforces those limits so that the running container is not allowed to use more of that resource than the limit you set." |

Open FAILs after round 5: 0

Open FAILs: 0
