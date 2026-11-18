# Voices fact check: devops / kubernetes-architecture

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-architecture (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 adds "usually". The Technical panel and S1 give no hedge, so the meaning is weaker. It also drops "consistent and highly-available". Sentence 2 drops "custom resources" and "and their components". It also adds "for you", which neither the Technical panel nor S2 says. The cites are on the right sentences. |
| What it is | Bangla | FAIL | It has the same problems as the Layman panel. "সাধারণত" means "usually", and the Technical panel has no hedge, so the meaning is weaker. "Consistent and highly-available" is dropped. "Custom resources" and "applications and their components" are dropped. "আপনার হয়ে" ("for you") is added. I can read the Bangla well enough to judge it. The cites are on the right sentences. |

Open FAILs after round 1: 2

Risk: the Layman and Bangla FAILs are strict-reading calls. If you accept simplification as fair, only "usually" is a real change.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-architecture (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 has the same facts as Technical claim 1: consistent, highly available, key value store, backing store for all cluster data, with cite 1. Sentence 2 has the same facts as claim 2: software extensions, custom resources, manage applications and their components, with cite 2. No fact is added, dropped or changed. |
| What it is | Bangla | PASS | By meaning, sentence 1 says etcd is a consistent and highly available key value store that Kubernetes uses as its backing store for all cluster data (cite 1). Sentence 2 says an Operator is a software extension to Kubernetes that uses custom resources to manage an application and its components (cite 2). Product names stay in English. No fact is added, dropped or changed. The cites match the Technical panel. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-architecture (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates the Technical panel, and the cites are on the same facts (S1 for etcd, S2 for Operators). It splits "consistent and highly-available key value store used as ... backing store for all cluster data" into short sentences. It does not weaken or strengthen any claim. Left out: nothing of substance. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. etcd is a key value store, consistent and highly available, and Kubernetes uses it as the backing store for all cluster data. Operators are Kubernetes software extensions that use custom resources to manage applications and their components. The cites are on the same facts. Left out: nothing of substance. |

Open FAILs after round 4: 0

Not checked: I read only the lines of S1 and S2 that the claims need, not the whole files. Risk: none found.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-architecture (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel: key value store, consistent, highly available, backing store for all cluster data, Operators as Kubernetes software extensions that use custom resources to manage applications and their components. The cites are on the same facts as in the Technical panel. Left out: nothing of substance. The Technical panel's "used as" becomes "Kubernetes uses it as". The meaning is the same. |
| What it is | Bangla | PASS | The Bangla reads clearly and has the same facts as the Technical panel: key value store, consistent, highly available, backing store for all cluster data, Operator as a Kubernetes software extension, custom resource used to manage applications and components. The cites are on the same facts. Left out: nothing of substance. |

Open FAILs after round 5: 0

Not checked: I did not read the rest of S1 or S2. I only confirmed the two cited sentences.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / kubernetes-architecture (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "so that it keeps working when one part fails" is an explanation that the Technical panel does not give. The Technical panel says only "providing fault-tolerance and high availability". Left out: "containerized", "in order to", "multiple computers" (now "several computers"), the "kube-proxy (optional)" meaning is kept. Also "Operators are add-on programs" is a paraphrase of "software extensions" (accepted). |
| What it is | Bangla | PASS | Faithful to the Technical panel. Product names stay in English. Left out: nothing of substance. |
| How it works | Layman | PASS | Every fact is in the Technical panel. Left out: "optimal" (now "best"), "RESTful", the word "leader-based" (now "with a leader"), "common approach" for kubeadm (now "often"), "automatically" for the mirror Pod (now "tries to"), the exact "2-step" count (kept as "two steps"), "PodSpecs" (now "Pod specs"), "otherwise False" is not in either panel. The PIDPressure and DiskPressure wording is plainer ("running out of space") but the same meaning. The diagram is identical. |
| How it works | Bangla | PASS | Faithful to the Technical panel. Code block is identical. Left out: nothing of substance. |
| Try it | Layman | PASS | Every fact is in the Technical panel, with the same cites. The Lease-listing sentence copies the Technical panel, so it carries the same source problem as claim 60. "A long, detailed description" restates "verbose output". Left out: "specific" (before "condition"), "can" (before "be obtained"), the "ETCDCTL_API=3" detail is kept. Code blocks are identical. |
| Try it | Bangla | PASS | Faithful to the Technical panel. Code blocks are identical. The Lease-listing sentence carries the same source problem as claim 60. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. The "short of disk, memory, or processes" sentence copies the Technical panel, so it carries the same source problem as claim 86. Left out: "usually", "the verbose output... 'intended'", "periodically" (now "regular"), "backing store" (now "keeps its data in etcd"). |
| How a tester uses it | Bangla | PASS | Faithful to the Technical panel. The "process-এর টান পড়লে" wording carries the same source problem as claim 86. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: "more specific" (before `livez` and `readyz`), "the static Pod directory has no file-extension filtering" is kept as "whatever its extension". |
| Common mistakes | Bangla | PASS | Faithful to the Technical panel. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The callout text is identical to the Technical panel. |
| What a tester can check | Bangla | PASS | A faithful translation of the seven pieces of advice in the Technical panel. Nothing added. |

Open FAILs after round 6: 1

Changed after this round: What it is, Layman: "so that it keeps working when one part fails" became "which gives fault-tolerance and high availability". The Layman and Bangla panels of `Try it` and `How a tester uses it` also got the fact fixes of this round.

## Round 7 (2026-11-18)

# Voices fact check: devops / kubernetes-architecture (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "A node runs the kubelet, a container runtime, and the kube-proxy." The Technical panel says the components on a node "include" these three, and marks kube-proxy "(optional)". Dropping "include" turns an open list into a full list. It also says every node runs kube-proxy, which contradicts the table. Fix: "The components on a node include the kubelet, a container runtime, and the kube-proxy." Left out: "such as" before containerd and CRI-O; "usually" is kept; "not necessarily" becomes "may not". "Add-on programs" is a plainer word for "software extensions". |
| What it is | Bangla | PASS | Every sentence matches the Technical panel, with "include" and "(optional)" kept. Left out: nothing of note. |
| How it works | Layman | PASS | Every sentence matches the Technical panel, and the diagram is the same. Left out: "designed to", "optimal" (becomes "best"), "2-step", "feasible", the "default" wording for the kubelet-created mirror Pod, and "automatically" in "tries to make a mirror Pod". The Condition table is simplified: the `False` meaning is shortened to "if not", and "otherwise False" was never stated. |
| How it works | Bangla | PASS | Every sentence matches the Technical panel, and the diagram is the same. Left out: nothing of note. Minor: the Bangla keeps all limits. |
| Try it | Layman | PASS | All code blocks are the same as in the Technical panel. Every fact matches. Left out: "kubectl describe nodes" is "long, detailed" instead of "verbose output"; "specific" before "condition" in `kubectl wait`; "the Kubernetes Service concept"; "more specific" for `livez` and `readyz` is not present here. |
| Try it | Bangla | PASS | All code blocks are the same as in the Technical panel. Every fact matches. Left out: nothing of note. One run-record phrase ("দুটোর শুরুর দুটো space") is awkward, but it only describes the page's own run and gives no new fact. |
| How a tester uses it | Layman | PASS | Every sentence matches the Technical panel. Left out: "Machines", "temporarily", "optimal"; "Periodically" becomes "Regular"; "make sure" becomes "have a plan". |
| How a tester uses it | Bangla | PASS | Every sentence matches the Technical panel. Left out: nothing of note. |
| Common mistakes | Layman | PASS | Every bullet matches the Technical panel. Left out: "more specific" before `livez` and `readyz`; "attempt" becomes "tries"; the line about no filtering by extension becomes "whatever its extension". |
| Common mistakes | Bangla | PASS | Every bullet matches the Technical panel. Left out: nothing of note. |
| What a tester can check | Layman | PASS | The callout text is the same as in the Technical panel. Left out: nothing. |
| What a tester can check | Bangla | PASS | A faithful translation of the seven pieces of advice and the lead sentence. Left out: nothing. |

Open FAILs after round 7: 1

Changed after this round: What it is, Layman: "A node runs the kubelet, a container runtime, and the kube-proxy" became "The components on a node include the kubelet, a container runtime, and the kube-proxy".

## Round 8 (2026-11-18)

# Voices fact check: devops / kubernetes-architecture (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and every cite matches. "Add-on programs" for "software extensions" is plainer wording of the same idea. Left out: "containerized" (it says "in containers"), "In production environments" is shortened to "In production", kube-proxy's "implementing part of the Service concept" is reworded, and "usually" is kept. |
| What it is | Bangla | PASS | Meaning follows the Technical panel sentence by sentence, with the same cites and limits ("সাধারণত", "optional", "নাও থাকতে পারে", "উচিত"). Nothing is added. |
| How it works | Layman | PASS | All facts and cites match the Technical panel. Left out: "scale horizontally" (it says "grow sideways"), the "Heartbeats help determine availability" detail is kept, "The kubelet … PodSpecs" becomes "Pod specs", the Ready row's "is not accepting Pods" is shortened to "if not", and the Disk and Memory rows say "running out" instead of "capacity is low". The code blocks and the diagram match. "Often" for the kubeadm point is within "common approach". |
| How it works | Bangla | PASS | Matches the Technical panel, with the same cites, numbers (50 সেকেন্ড), and limits ("প্রায়ই", "নির্দিষ্ট node"). The code blocks and the diagram are identical. Nothing is added. |
| Try it | Layman | PASS | Restates the Technical panel with the same cites. All commands, YAML, and outputs are identical to the Technical panel. Left out: "Names are suffixed…" wording is reworded, and the "Exposes … `-o wide` lists with more details" becomes "shows more details". "Without a name … of the type" is kept. |
| Try it | Bangla | PASS | Meaning and cites follow the Technical panel. The code blocks and outputs are identical. Nothing is added. Limits are kept ("যেকোনো সময়ে", "এক বা একাধিক", "নির্দিষ্ট condition"). |
| How a tester uses it | Layman | PASS | Facts and cites match. Left out: "Machines" becomes "A program", and "temporarily" becomes "for now". The "fails" wording for "returns a failure status code" is the same meaning. "When you combine" is shortened to "together with". |
| How a tester uses it | Bangla | PASS | Matches the Technical panel with the same cites and limits. Nothing is added. |
| Common mistakes | Layman | PASS | Facts and cites match. Left out: "more specific" for `livez` and `readyz`, and the "there is no filtering by file extension" wording is shortened to "whatever its extension". "Attempt to create" becomes "tries to make". |
| Common mistakes | Bangla | PASS | Matches the Technical panel with the same cites and the v1.16 detail. Nothing is added. |
| What a tester can check | Layman | PASS | The callout text and the list are identical to the Technical panel. |
| What a tester can check | Bangla | PASS | A Bangla rendering of the same callout and the same seven points. Nothing is added. |

Open FAILs after round 8: 0

Open FAILs: 0
