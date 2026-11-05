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

Open FAILs: 0
