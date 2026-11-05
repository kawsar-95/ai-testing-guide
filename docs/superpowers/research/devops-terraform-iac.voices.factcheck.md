# Voices fact check: devops / terraform-iac

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / terraform-iac (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 adds a fact that the Technical panel does not have: "describe servers and networks in files, and a tool builds them". The Technical panel says "cloud and on-prem resources", not servers and networks, and it has no definition of IaC. Sentence 2 changes "build, change, and version" into "keeps track of changes". S1 gives state-file tracking of infrastructure, and that is a different fact. Sentence 3 drops "identical", "multiple platforms", "single source configuration" and "community tool". This makes the claim weaker. Sentence 4 drops "framework". Cites 1, 2, 3 are in the right places. |
| What it is | Bangla | FAIL | It follows the Layman panel sentence by sentence, so it has the same problems. It adds "সার্ভার আর নেটওয়ার্ক" (servers and networks) and the IaC definition. It uses "পরিবর্তনের হিসাব রাখে" (keeps a record of changes) in place of build, change and version. It says only "machine image বানায়" (builds machine images), with no "identical", "multiple platforms" or "single source". It says "control plane" and drops "framework". I can read the Bangla well enough to judge it. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / terraform-iac (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three sentences are word for word the same as the Technical panel. The same three facts carry the same cites (1, 2, 3). Nothing is added, dropped, or changed. The panel is not simplified, but that is not a fact error. |
| What it is | Bangla | PASS | There are three sentences with cites 1, 2, 3, in the same order. Each one matches the Technical meaning. Terraform: build, change, and version cloud and on-prem resources "নিরাপদে ও দক্ষভাবে" (safely and efficiently). Packer: a community tool that makes identical machine images for several platforms from one source configuration. Crossplane: a control plane framework for platform engineering. Product names and terms stay in English. No fact is added, dropped, or made stronger or weaker. |

Open FAILs after round 2: 0

Not checked: the page description line ("Terraform, Packer, and Crossplane."). It is only a label. I did not read S1 in full. I only found the one sentence that was cited.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / terraform-iac (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The Terraform and Packer sentences are faithful. The Crossplane sentences are not. The Technical panel says Crossplane is a "control plane framework". The Layman panel splits this into "a framework for platform engineering" and "It is a control plane". That second sentence changes the meaning: Crossplane is a framework for control planes, not itself a control plane. S3 supports this reading with "create a control plane" and "configure a Crossplane control plane". Fix: "Crossplane is a control plane framework. It is for platform engineering." Details left out: none that matter. |
| What it is | Bangla | FAIL | The Terraform and Packer sentences match the Technical panel in meaning. They keep the English product and term names. The Crossplane sentence "এটা একটা control plane" has the same problem as the Layman panel. It says Crossplane is a control plane, but the Technical panel says it is a control plane framework. Fix: "Crossplane হলো platform engineering-এর জন্য একটা control plane framework।" Details left out: none that matter. |

Open FAILs after round 4: 2

I also did not read S1 in full. I only matched the one Terraform sentence the page cites.

Changed after this round: Layman and Bangla: Crossplane is again "a control plane framework" (the plain text had split it into "a framework" and "a control plane").

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / terraform-iac (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates a Technical sentence with the same facts. The cites 1, 2 and 3 sit on the same facts as in the Technical panel. The panel adds no fact and no limit is dropped. It leaves out nothing. |
| What it is | Bangla | PASS | I can read the Bangla. It matches the Technical meaning. "নিরাপদে ও দক্ষভাবে" means "safely and efficiently", and "একটাই source configuration" means "a single source configuration". Product names and terms stay in English. The cites 1, 2 and 3 are on the same facts. The panel adds no fact and leaves out nothing. |

Open FAILs after round 5: 0

Open FAILs: 0
