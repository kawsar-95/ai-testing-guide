# Voices fact check: devops / kubernetes-basics

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-basics (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1: "smallest unit that Kubernetes runs" drops "deployable" and "that you can create and manage". Sentence 2: "a set number of copies of a Pod" adds a fixed number and a single Pod. S2 says only "a stable set of replica Pods". It also drops "at any given time". Sentence 3: "updates the Pods and ReplicaSets for you" turns "provides declarative updates" into an action done for the user. The word "declarative" is lost, and the meaning changes. |
| What it is | Bangla | FAIL | Sentence 1: "সবচেয়ে ছোট চালানোর একক" means "smallest unit of running". It drops "deployable" and "create and manage". Sentence 2: "একটা Pod-এর নির্দিষ্ট সংখ্যক কপি সবসময় চালু রাখে" means "always keeps a fixed number of copies of one Pod running". It adds a fixed number and a single Pod, and "সবসময়" (always) is stronger than "stable set ... at any given time". Sentence 3: "আপনার হয়ে ... আপডেট করে" means "updates for you". "Declarative" is dropped, and the meaning changes. |

Open FAILs after round 1: 2

Skipped: I did not check the YAML and local-cluster topics in the lede, because no source is cited for them. Risk: the lede promises content that the cited sources do not cover.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-basics (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three claims match the Technical panel, with the same cites (1, 2, 3). Only change: "maintain" became "keep" in the ReplicaSet sentence. The meaning is the same. No fact was added or dropped. |
| What it is | Bangla | PASS | All three sentences carry the same facts and cites. 1: Pod is the smallest deployable unit of computing that you can create and manage in Kubernetes. 2: A ReplicaSet's purpose is to keep a stable set of replica Pods running at any time. 3: A Deployment gives declarative updates for Pods and ReplicaSets. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-basics (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence. The cites are on the same facts as in the Technical panel. "Keep ... running" stands for "maintain ... running". "Gives" stands for "provides". Left out: nothing of substance. The Technical sentence "that you can create and manage" is split into a second sentence: "You can create and manage Pods". The limit "at any given time" is kept. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. The meaning matches the Technical panel in all three groups. "যেকোনো সময়ে" keeps "at any given time". "তৈরি ও পরিচালনা করতে পারেন" keeps "can create and manage". "declarative update দেয়" matches "provides declarative updates". Left out: nothing of substance. Product and command names stay in English, which is correct. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-basics (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three Technical facts are restated with the same meaning. "Keep" stands for "maintain". "Gives" stands for "provides". Each cite sits on the same fact as in the Technical panel. The Pod sentence is split in two and the cite sits at the end of the pair. Left out: the plural "Pods" becomes the singular "A Pod". Nothing else is left out, and no limit is dropped. "At any given time" is kept. |
| What it is | Bangla | PASS | I can read this Bangla well enough to judge it. Each sentence matches the Technical panel in meaning. It says Pod is the smallest deployable unit of computing in Kubernetes. It says you can create and manage Pods. It says a ReplicaSet keeps a stable set of replica Pods running at any time. It says a Deployment gives declarative updates for Pods and ReplicaSets. The cites are on the same facts. Left out: the plural "Pods" becomes the singular "Pod". Nothing else is left out, and no limit is dropped. |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / kubernetes-basics (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The ReplicaSet row says "Keeps a steady number of copies of a Pod running at all times". The Technical row says "maintain a stable set of replica Pods running at any given time". The Layman row changes "set of replica Pods" into "number of copies of a Pod" (a count of one Pod kind), which is a different meaning. Other rows and sentences match. Left out: "portable" is kept; left out are "containerized" and "automation" wording changes only; "user-defined" on the health check; "specification" in the Pod row; "declarative updates" wording in the Deployment row (it says "Updates ... to match what you describe"). |
| What it is | Bangla | PASS | Every sentence matches the Technical panel. Left out: nothing of substance. Product names and commands stay in English. |
| How it works | Layman | PASS | Matches the Technical panel. Left out: "in the background" for the ReplicaSet creating Pods; "continually and actively" is shortened to "keeps working"; the phase rows say "waiting for a node" for "waiting to be scheduled"; "spec/status" are not called "nested fields"; the diagram is identical to the Technical one. |
| How it works | Bangla | PASS | Matches the Technical panel meaning by meaning. The diagram code block is identical. Left out: nothing of substance. |
| Try it | Layman | PASS | Matches the Technical panel. All code blocks are identical to the Technical panel. Left out: "does not require" becomes "works without"; the `--name` flag role is shortened to "Without `--name`, the cluster is called `kind`"; "verbose output" kept. |
| Try it | Bangla | PASS | Matches the Technical panel. All code blocks are identical to the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Matches the Technical panel. Left out: "non-zero" is written as "another code"; "progression deadline" is written as "progress deadline"; "meaningful" is written as "clear"; "local development" is written as "on your own computer"; "blocks until" is written as "waits until". |
| How a tester uses it | Bangla | PASS | Matches the Technical panel. The code block is identical. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Matches the Technical panel. Left out: "more difficult to roll back" is not in either panel's Testing `:latest` item; "immutable" is written as "cannot be changed"; "singleton" is written as "not even a single one". |
| Common mistakes | Bangla | PASS | Matches the Technical panel. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The callout text is word for word the same as the Technical panel. No fact added. |
| What a tester can check | Bangla | PASS | Each of the seven items and the title line match the Technical callout in meaning. No fact added. |

Open FAILs after round 6: 1

Changed after this round: What it is, Layman: the ReplicaSet row now says "Keeps a stable set of replica Pods running at any given time", as the Technical row. The Layman and Bangla panels of `Try it` also got the new sentences of the fact fix (the syntax of kubectl commands, and `kubectl delete`).

## Round 7 (2026-11-18)

# Voices fact check: devops / kubernetes-basics (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same facts, cites match. Left out: "containerized", "deployable", "computing", and "object" in the ReplicaSet and Deployment rows. "Updates Pods and ReplicaSets to match what you describe" is a plain version of "declarative updates". "Reachable" stands for "expose". "Does not send clients to a container until it is ready" stands for "doesn't advertise them to clients". |
| What it is | Bangla | PASS | Same facts, cites match. Read and judged by meaning. "সহজ করে" is a fair rendering of "facilitates". Nothing added. |
| How it works | Layman | PASS | Same facts. Left out: "constantly", "nested fields", "continually and actively", "in the background", "acquire" (it says "take over"), and the "Pod template" wording in the diagram sentence. "Waiting for a node" stands for "waiting to be scheduled". "Gives the Deployment a new revision" stands for "updates the revision". "Can be" in the `restartPolicy` sentence is the Technical "possible values". The diagram is identical. |
| How it works | Bangla | PASS | Same facts, numbers (75%, 125%), and diagram. Meaning matches the Technical panel sentence by sentence. |
| Try it | Layman | PASS | Same facts, cites, and code blocks. Left out: the `--name` flag detail in "Create a cluster" (it keeps "Without `--name`, the cluster is called `kind`"), and "pre-built" (it says "ready-made"). "Reads its settings from" for "looks for a file named config" is a little firmer than the Technical wording but still says nothing new. "At most one minor version away" matches "within one minor version". Code blocks match, including the YAML. |
| Try it | Bangla | PASS | Same facts, cites, and code blocks. Read and judged by meaning. All limits ("default-ভাবে", "যদি এবং কেবল যদি", "compiled-in") are kept. The run records match the Technical panel. |
| How a tester uses it | Layman | PASS | Same facts, cites, and the same code block. "Ends with another code" says less than "non-zero exit code". "Use … a digest, or both" matches "and/or". Left out: "blocks" (it says "waits"), and "unique" in the namespace sentence (it says "must be unique inside its namespace"). |
| How a tester uses it | Bangla | PASS | Same facts, cites, and code block. Read and judged by meaning. "উচিত" matches "should avoid". "বলে দিতে হয়" matches "you need to specify". Nothing added. |
| Common mistakes | Layman | PASS | Same facts and cites. "Not even a single one" matches "even singleton Pods". "Cannot be changed" matches "immutable". "By default" is kept on the pull-policy sentence. Left out: "kubelet" (it says "Kubernetes skips pulling"). |
| Common mistakes | Bangla | PASS | Same facts and cites. Read and judged by meaning. The conditions on the pull policy are kept. |
| What a tester can check | Layman | PASS | The callout is identical to the Technical callout. It has the same title and the same seven items. |
| What a tester can check | Bangla | PASS | The Bangla callout keeps the title and all seven items, and says it is the tutorial's own advice. Command names stay in English. Nothing added. |

Open FAILs after round 7: 0

Changed after this round: No FAIL in this round. The Layman and Bangla panels of `Try it` got the new sentences of the fact fix of this round.

## Round 8 (2026-11-18)

# Voices fact check: devops / kubernetes-basics (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Adds an explanation that the Technical panel does not give: "declarative configuration, where you describe what you want". The Deployment row, "Updates Pods and ReplicaSets to match what you describe", glosses "declarative updates" the same way. Left out: "extensible" is restated as "can be extended"; "containerized" is restated as "run in containers"; "Automated" before "rollouts"; "kills" is restated. |
| What it is | Bangla | PASS | Every fact matches the Technical panel. "সহজ করে" renders "facilitates". Left out: nothing of substance. |
| How it works | Layman | PASS | Every fact is in the Technical panel. Left out: "continually and actively", "nested", "in the background", "gradually" (now "slowly"), "relatively", the phrase "(a controller) from the node", the word "bound" (now "is on a node"), and "to be scheduled" (now "waiting for a node"). |
| How it works | Bangla | PASS | Same facts, same limits ("default-ভাবে", "সবসময়", "যদি এবং কেবল যদি"). Left out: nothing of substance. |
| Try it | Layman | PASS | All cites and facts match. Left out: "bootstraps" (now "starts"), "pre-built" (now "ready-made"), "can communicate" (now "works with"), "performs the delete operation" (now "deletes"), and the compiled-in/increasing-delay wording ("waits longer each time"). |
| Try it | Bangla | PASS | Matches the Technical panel, including all code blocks, which are identical. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Facts match. Left out: "non-zero" (now "another code"), "progression" (now "progress"), "such as" before the warning list, and "need to be" (now "must"). |
| How a tester uses it | Bangla | PASS | Facts and limits match ("উচিত", "আর/বা"). Left out: nothing of substance. |
| Common mistakes | Layman | FAIL | "let a Deployment or a Job make them" drops "workload resources such as". It reads as if only a Deployment or a Job can do it, which is narrower than the Technical sentence. Other bullets are fine. Left out: "immutable" (now "cannot be changed"), "kubelet" and "skip pulling" (now "skips pulling"), and "implicitly :latest". |
| Common mistakes | Bangla | PASS | Keeps "মতো" for "such as" and keeps "default" for the pull policy. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Identical to the Technical callout, and it gives no tool fact. |
| What a tester can check | Bangla | PASS | Each bullet matches the Technical callout in meaning. It adds no fact. |

Open FAILs after round 8: 2

Changed after this round: What it is, Layman: "It helps with both declarative configuration, where you describe what you want, and automation" became "It supports both declarative configuration and automation", and the Deployment row "Updates Pods and ReplicaSets to match what you describe" became "Gives declarative updates for Pods and ReplicaSets". Common mistakes, Layman: "let a Deployment or a Job make them" became "let a workload resource such as a Deployment or a Job make them".

## Round 9 (2026-11-18)

# Voices fact check: devops / kubernetes-basics (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | (1) Technical says "Kubernetes can change the actual state ... at a controlled rate". Layman says "Kubernetes moves the real state toward it at a controlled pace", which drops the limit "can" and so claims more. (2) Technical says Kubernetes "doesn't advertise them to clients until they are ready". Layman says "does not send clients to a container until it is ready". "Send clients to" is a different claim from "advertise to clients". Left out: "of computing"; "An object whose purpose is to" in the ReplicaSet row; "with a specification for how to run". |
| What it is | Bangla | PASS | Every fact is in the Technical panel and the limits are kept ("পারে"). Left out: nothing of note. |
| How it works | Layman | PASS | Every fact is in the Technical panel. Left out: "constantly", "continually and actively"; "nested"; the word "acquire" becomes "take over", and the meaning is close; the hash and name detail is kept. Detail of the phase table is trimmed ("including" becomes "this includes"). |
| How it works | Bangla | PASS | Every fact matches the Technical panel, including the 75%/125% figures, "যদি এবং কেবল যদি" for "if and only if", and the four phases. Left out: nothing of note. |
| Try it | Layman | PASS | Every fact is in the Technical panel and the code blocks are the same. Left out: "pre-built" becomes "ready-made" (same meaning); "abbreviated" becomes "short"; "verbose output" is kept; the step 1 SHA-256 sentence is kept as it is. |
| Try it | Bangla | PASS | Every fact matches the Technical panel and the code blocks are the same. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Every fact is in the Technical panel. Left out: "zero" is shown as "0" and "non-zero" as "another code" (same meaning here); "local development" is shown as "on your own computer"; "a mechanism" and "progression" are plainer. |
| How a tester uses it | Bangla | PASS | Every fact matches the Technical panel, including the limits ("উচিত", "পারে", "হয়"). Left out: nothing of note. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. The pull-policy sentence joins two Technical sentences and keeps the "default" limit. Left out: "kubelet" in the `IfNotPresent` claim; "immutable" is shown as "cannot be changed". |
| Common mistakes | Bangla | PASS | Every fact matches the Technical panel. Left out: "kubelet" in the `IfNotPresent` claim. |
| What a tester can check | Layman | PASS | The callout is the same as the Technical panel. It adds no fact. Left out: nothing. |
| What a tester can check | Bangla | PASS | The callout is a faithful translation of the Technical panel. It adds no fact. Left out: nothing. |

Open FAILs after round 9: 1

Changed after this round: What it is, Layman: "Kubernetes moves the real state toward it" became "Kubernetes can move the real state toward it", and "does not send clients to a container until it is ready" became "does not advertise a container to clients until it is ready to serve".

## Round 10 (2026-11-18)

# Voices fact check: devops / kubernetes-basics (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "of computing" and "deployable" for Pod, "one-container-per-Pod" model name, "portable" is kept. The Technical heading "Service discovery and load balancing" becomes "Finding apps and sharing the load". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Nothing added. "facilitates" is rendered as "সহজ করে". |
| How it works | Layman | PASS | Cites match the same facts. Left out: "in the background", "constantly", "nested", "relatively" (Pods are "short-lived and replaceable"), the `pod-template-hash` label detail "on the ReplicaSet", and the Pending "waiting to be scheduled" is rendered as "waiting for a node". "updates the revision" becomes "gives ... a new revision", which is close in meaning. |
| How it works | Bangla | PASS | All facts match the Technical panel, including "default" on 75% and 125%, `restartPolicy` values and the phase table. Nothing added. |
| Try it | Layman | PASS | Facts match the Technical panel. Left out: "pre-built" becomes "ready-made", "bootstraps" becomes "starts", "required" details of `--name` (now "Without `--name`"). The `$KUBECONFIG` condition is kept. The run record and code blocks are identical. |
| Try it | Bangla | PASS | Facts match. Code blocks are identical to the Technical panel. Run record is the same. Nothing added. |
| How a tester uses it | Layman | PASS | Facts match. "It ends with another code" restates "non-zero exit code", which is a looser phrase. Left out: "Gate the tests" framing, "harder to track" is kept as "harder to see". |
| How a tester uses it | Bangla | PASS | Facts match, including "উচিত" for "should avoid", the 600 default and the `--wait 30s` detail. Nothing added. |
| Common mistakes | Layman | PASS | Facts match. Left out: the sentence that `IfNotPresent` makes the kubelet skip pulling (folded into one sentence). "By default" is kept. |
| Common mistakes | Bangla | PASS | Facts match. Nothing added. |
| What a tester can check | Layman | PASS | The callout is the same as the Technical callout. |
| What a tester can check | Bangla | PASS | Same seven items in Bangla. The intro line says the list is the tutorial's own advice. |

Open FAILs after round 10: 0

Open FAILs: 0
