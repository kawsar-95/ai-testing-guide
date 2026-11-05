# Voices fact check: devops / kubernetes-operations

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-operations (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The autoscaler sentence adds a fact. "adds or removes Pods" is not in the Technical panel, which says the HPA updates a workload resource such as a Deployment or StatefulSet. S2 in the lines checked says only "deploy more Pods" for horizontal scaling, so "removes" is not supported by the cite. Fix: "An autoscaler automatically updates a workload resource, such as a Deployment or StatefulSet, to match capacity to demand." The liveness sentence also changes the meaning. "a container that is stuck" replaces "cannot recover except by being restarted", and a stuck container is not the same thing. The resource-limit sentence is fine. |
| What it is | Bangla | FAIL | The Bangla follows the Layman panel and has the same two problems. "Pod বাড়ায় বা কমায়" adds Pods and removal, which the Technical panel does not state. "আটকে গেছে" (stuck) replaces "cannot recover except by being restarted". The resource-limit sentence (সীমার বেশি ব্যবহার করতে দেয় না) matches the Technical panel. I can read the Bangla well enough to judge these. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-operations (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | It has the same three facts with the same cites 1, 2 and 3. Only the wording differs: "set" for "specify", and a colon for "so". No fact is added, dropped, or made stronger or weaker. |
| What it is | Bangla | PASS | All three facts are present with cites 1, 2 and 3. Liveness probe detects and remedies a container that recovers only by restart. HorizontalPodAutoscaler updates a workload resource such as a Deployment or StatefulSet, to scale capacity to match demand. The kubelet enforces the limit, so the container cannot use more than the limit. Product names stay in English. I could read every sentence well enough to judge it. |

Open FAILs after round 2: 0

Risk: in claim 1 the source says "applications" where the page says "container". I passed it, but a strict reader could fail it.

Changed after this round: The Technical sentence on liveness probes now uses the words of S1 ("Many applications running for long periods of time eventually transition to broken states, and cannot recover except by being restarted. Kubernetes provides liveness probes to detect and remedy such situations"). The round 2 checker passed the earlier wording ("a container that cannot recover") but noted that a strict reader could fail it. Layman and Bangla follow the new sentence.

## Round 3 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-operations (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three sentences carry the same facts and the same cites (1, 2, 3) as the Technical panel. Only the wording changes: "end up in a broken state" for "transition to broken states", and "set" for "specify". No fact is added, dropped, or changed in strength. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. It has the same three facts with cites 1, 2, 3 in the same order. The product names HorizontalPodAutoscaler, Deployment, StatefulSet, kubelet, and liveness probe stay in English. Nothing is added or dropped, and the strength is unchanged: "restart করা ছাড়া আর সুস্থ হতে পারে না", "লক্ষ্যে" (aim), and "limit-এর বেশি... ব্যবহার করতে পারে না". |

Open FAILs after round 3: 0

All three sources were checked only by Grep and short reads of the matching lines.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-operations (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite sits on the same fact as in the Technical panel. "By itself" says the same as "automatically". "Detect and fix" says the same as "detect and remedy". "You can set a resource limit" restates "When you specify a resource limit" without adding a fact. Left out: "eventually" (the slow change to a broken state), "automatically" before "scaling" (the aim sentence), and "so that" (the reason link between the kubelet and the limit). |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. Each sentence matches one Technical sentence in meaning, and the cites are on the same facts. "নিজে থেকেই" means automatically, and "সুস্থ হতে পারে না" means cannot recover. Product and command names stay in English. Left out: "eventually" as a separate word (it is covered by "শেষে"), "automatically" before "scaling", and the "you set" wording of the limit (it says "ঠিক করে দিতে পারেন"). |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-operations (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and each cite sits on the same fact as in the Technical panel. Left out: "eventually" (the slow move to a broken state); "automatically" is kept as "by itself". "Scaling" becomes "scale capacity", and "with the aim of" becomes "Its aim is to". "You can set" keeps the optional meaning of "When you specify". The limit is restated in the same direction ("may not use more"). |
| What it is | Bangla | PASS | The Bangla reads clearly and gives the same facts as the Technical panel. "চলে যায়" matches "transition to", and "সুস্থ হতে পারে না" matches "cannot recover". Left out: "eventually" is only implied by "শেষে", which is the same meaning. "automatically" is kept as "নিজে থেকেই". "Such situations" is "এমন ক্ষেত্র". The Bangla leaves nothing out that changes the meaning, and the product names stay in English. |

Open FAILs after round 5: 0

Open FAILs: 0
