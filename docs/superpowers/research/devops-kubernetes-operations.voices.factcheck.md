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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / kubernetes-operations (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites match. Left out: "with the aim of" (HPA), "automatically" before "scaling capacity". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: the same details as the Layman panel. |
| How it works | Layman | PASS | Meaning matches, and the code blocks are the same. Left out: the "Minimum"/"at least" wording on `failureThreshold` is softened to "once"; "aggregates" (metrics-server); "intermittently" becomes "at intervals". Added only a plain gloss: "slowing the container down" for CPU throttling. The terminationGracePeriodSeconds sentence copies the Technical panel, so its source problem (fact-check row 12) is not counted again here. |
| How it works | Bangla | PASS | Meaning matches, and the code blocks are the same. Left out: "aggregates" (metrics-server), "essentially" before "shortcut". The terminationGracePeriodSeconds sentence copies the Technical panel (see fact-check row 12). |
| Try it | Layman | PASS | Meaning matches, and all code blocks are the same. Left out: "a Deployment that requests" becomes "asks for"; "unavailable" becomes "missing". The terminationGracePeriodSeconds sentence copies the Technical panel (fact-check row 44). |
| Try it | Bangla | FAIL | The memory-limit run sentence says the container restarted "9 সেকেন্ডের মধ্যে" (within 9 seconds). The Technical panel says "restarted once after 9 seconds". "Within" and "after" are different. Everything else matches, and the code blocks are the same. The terminationGracePeriodSeconds sentence copies the Technical panel (fact-check row 44). Left out: nothing else of note. |
| How a tester uses it | Layman | PASS | Meaning matches. Left out: "at least" before `failureThreshold`; "can" kept for the OOM stop. "waits for the condition that matters to a test" is kept as is (fact-check row 68). |
| How a tester uses it | Bangla | PASS | Meaning matches. Left out: "at any time" style limits are not present; "unavailable" becomes "পাওয়া না-ও যেতে পারে" (may not be found), which keeps the "may". |
| Common mistakes | Layman | PASS | Meaning matches. Left out: "truly" becomes "really"; "cascading" becomes "failures that spread". The "seven runs" sentence copies the Technical panel (fact-check row 79). |
| Common mistakes | Bangla | PASS | Meaning matches. Left out: nothing of note. The "seven runs" sentence copies the Technical panel (fact-check row 79). |
| What a tester can check | Layman | PASS | Same as the Technical panel, word for word, and still titled "Tutorial advice". |
| What a tester can check | Bangla | PASS | Each of the six bullets matches the Technical panel, and the intro says it is the tutorial's own advice. Left out: nothing. |

Open FAILs after round 6: 1

Changed after this round: Try it, Bangla: "9 সেকেন্ডের মধ্যে" (within 9 seconds) became "9 সেকেন্ড পরে" (after 9 seconds), as in the Technical panel. The Layman and Bangla sentences about `terminationGracePeriodSeconds`, `kubectl wait` and `backoffLimit` follow the new Technical sentences.

## Round 7 (2026-11-18)

# Voices fact check: devops / kubernetes-operations (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Facts and cites match the Technical panel. Left out: "with the aim of" before the scaling claim. "by itself" stands for "automatically". |
| What it is | Bangla | PASS | Meaning and cites match the Technical panel. Left out: nothing of weight. "লক্ষ্যে" keeps the "aim" wording. |
| How it works | Layman | FAIL | "the kubelet evicts BestEffort Pods first if it can" adds "first". The Technical panel says only "The kubelet prefers to evict BestEffort Pods if the node comes under resource pressure". Fix: "the kubelet prefers to evict BestEffort Pods". Other sentences match. Left out: "aggregates" (metrics-server), "at any given time"-style limits, and "terminationGracePeriodSeconds" detail wording. |
| How it works | Bangla | FAIL | "kubelet আগে BestEffort Pod evict করতে চায়" adds the order "আগে" (first). The Technical panel says only that the kubelet "prefers to evict". Fix: "kubelet BestEffort Pod evict করতে পছন্দ করে". Other sentences match. Left out: "aggregates" (metrics-server). |
| Try it | Layman | PASS | Facts, commands, and code blocks match the Technical panel. The line "step 6 deleted it all" is consistent with the step 6 block of the Technical panel. Left out: nothing of weight. |
| Try it | Bangla | PASS | Meaning, cites, and code match the Technical panel. Left out: nothing of weight. |
| How a tester uses it | Layman | PASS | Matches the Technical panel. Left out: "at least" before `failureThreshold`, and "can" before "be stopped" is kept. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. Left out: nothing of weight. |
| Common mistakes | Layman | PASS | Matches the Technical panel. "failures that spread" renders "cascading failures". Left out: "exponential". |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Left out: nothing of weight. |
| What a tester can check | Layman | PASS | The callout is identical to the Technical panel. |
| What a tester can check | Bangla | PASS | The six bullets translate the Technical bullets with no added fact. |

Open FAILs after round 7: 2

Changed after this round: How it works, Layman: "the kubelet evicts BestEffort Pods first if it can" became "When a node comes under resource pressure, the kubelet prefers to evict BestEffort Pods", as in the Technical panel. Bangla: "আগে ... করতে চায়" became "BestEffort Pod evict করতে পছন্দ করে".

## Round 8 (2026-11-18)

# Voices fact check: devops / kubernetes-operations (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "with the aim of" for the HPA. "To scale capacity to match demand" reads as a purpose, not a promise. Also left out: the word "automatically" is replaced by "by itself". |
| What it is | Bangla | PASS | Meaning matches. It keeps "লক্ষ্যে" (aim) for the HPA. Nothing is added. |
| How it works | Layman | PASS | Every fact is in the Technical panel, and the cites match. Left out: "at least" before `failureThreshold`; "aggregates" for metrics-server; "typically" is kept; "marked as" restartable. "Slowing the container down (CPU throttling)" is a plain-word gloss of throttling, not a new fact. The diagram and code are identical to the Technical panel. |
| How it works | Bangla | PASS | Meaning matches sentence by sentence, including the tables, formula, defaults and diagram. Left out: nothing that changes a claim. |
| Try it | Layman | PASS | Every fact is in the Technical panel. Code blocks and run output are identical. Changes in wording only: "differ" becomes "will be different"; "can be restarted" becomes "may be restarted"; "utilization" becomes "use". Left out: "deployed and configured" for the Metrics Server; "specific" before "condition". The step-5 curl URL is the same as in the Technical panel, so the FAIL in the fact table applies here too. |
| Try it | Bangla | PASS | Meaning matches. Code blocks are identical. Left out: nothing that changes a claim. The step-5 curl URL FAIL applies here too. |
| How a tester uses it | Layman | PASS | Same facts as the Technical panel. Left out: "at least" before `failureThreshold`. "Out-of-memory system" for "subsystem". The "pipeline can wait" clause is carried over from the Technical panel, so the fact-table FAIL applies here too. |
| How a tester uses it | Bangla | PASS | Meaning matches. "অন্তত" (at least) is kept. The "pipeline can wait" clause is carried over, so the fact-table FAIL applies here too. |
| Common mistakes | Layman | PASS | Same facts and cites as the Technical panel. Left out: "for example" is kept as "such as". "Truly indicate" becomes "really show". Nothing is added. |
| Common mistakes | Bangla | PASS | Meaning matches. Left out: nothing that changes a claim. |
| What a tester can check | Layman | PASS | Identical to the Technical callout. |
| What a tester can check | Bangla | PASS | The six items translate the Technical items. Nothing is added. |

Open FAILs after round 8: 0

Changed after this round: Round 8 had no voices FAIL; the changed sentences were written in the three voices together.

## Round 9 (2026-11-18)

# Voices fact check: devops / kubernetes-operations (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "with the aim of" is turned into a plain purpose clause: "to scale capacity to match demand". "automatically" is kept as "by itself". Left out: "automatically" before "scaling", "the response to increased load is to deploy" is reworded as "more load is answered with more Pods". |
| What it is | Bangla | PASS | Meaning matches the Technical panel on all points. The aim ("লক্ষ্যে") is kept. Nothing is added. |
| How it works | Layman | PASS | No added fact. Two glosses are accurate to the Technical text: "slowing the container down (CPU throttling)" keeps the term, and "the Pod has no CPU utilization" stands for "will not be defined". Left out: "and allowed", "(and aggregates)", the `ceil` wording "the autoscaler will not take any action" is kept as "does nothing", "typically" is kept as "usually". |
| How it works | Bangla | PASS | Faithful to the Technical panel, including "অন্তত", "সাধারণত", "default" and the 5-minute and 15-second values. The diagram block is identical. Left out: "aggregates" (in the metrics-server sentence). |
| Try it | Layman | PASS | Code blocks and outputs are identical to the Technical panel. Wording is plainer ("will be different", "endless loop", "skips checking the CA"). Left out: "specific" before "condition" in the `kubectl wait` sentence, "deployed and configured" is shortened to "set up", "utilization" is shortened to "use" in the 50% sentence. |
| Try it | Bangla | PASS | Meaning matches, including the numbers, dates, versions and commands. Code blocks are identical. Left out: "specific" before "condition" is kept, nothing dropped except the wording "by default" is never in the source sentence. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. "at least" is shortened to "Once `failureThreshold` ... have failed" and "unavailable" to "missing"; neither says more. Left out: "at least", "unavailable". |
| How a tester uses it | Bangla | PASS | Meaning matches. "অন্তত" and "default-এ" are kept. Nothing is added. |
| Common mistakes | Layman | PASS | No added fact. "failures that spread" glosses "cascading failures"; "has no CPU utilization" glosses "will not be defined". Left out: "truly" is kept as "really"; "(10s, 20s, 40s ...)" is kept; nothing is dropped. |
| Common mistakes | Bangla | PASS | Meaning matches. "cascading failure" and "ten minutes" are kept in English. Nothing is added. |
| What a tester can check | Layman | PASS | The callout is identical to the Technical panel. |
| What a tester can check | Bangla | PASS | Each bullet matches the Technical bullet by meaning. Nothing is added. |

Open FAILs after round 9: 0

Open FAILs: 0
