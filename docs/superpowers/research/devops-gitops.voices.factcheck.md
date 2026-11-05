# Voices fact check: devops / gitops

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (3 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / gitops (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Three changes against the Technical panel. (1) It drops the "enforces immutability, versioning" part of claim 3 and keeps only "full version history". (2) It turns "continuously observe actual system state and attempt to apply the desired state" into "keep checking that the real system matches it". That drops the attempt to apply, and "matches" is stronger than "attempt". (3) It says Argo CD and Flux are tools "that do this". This gives both tools the whole GitOps behaviour in sentences 1 and 2. The Technical panel gives Argo CD only "declarative, GitOps continuous delivery tool" and Flux only "keeping clusters in sync with sources of configuration". It also drops the OpenGitOps definition, the word "automatically", and the "must" in the declarative principle. The cites are placed correctly. |
| What it is | Bangla | FAIL | I can read it. It has the same meaning as the Layman panel, so it has the same three problems. "পূর্ণ version history রাখেন" drops immutability and versioning. "বারবার দেখে" ("keeps checking") drops the attempt to apply the desired state, and "মিলছে কি না" ("whether it matches") changes the meaning. "এমন দুটি টুল" ("two such tools") makes both tools do all of the described behaviour. The OpenGitOps definition, "automatically" and "must" are also missing. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / gitops (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All 7 sentences carry the same facts and the same cites (1, 1, 1, 1, 1, 2, 3) as the Technical panel. Nothing is added, dropped, or changed in strength. The changes are only wording: "the desired state", "it keeps a complete version history", and "like Git repositories". |
| What it is | Bangla | PASS | I could read every sentence. Each one matches the Technical panel in meaning and in cite. "অবশ্যই" matches "must". "স্বয়ংক্রিয়ভাবে" matches "automatically". "ক্রমাগত" matches "continuously". Product names and technical terms stay in English. The Argo CD and Flux sentences keep cites 2 and 3. Nothing is added or dropped. |

Open FAILs after round 2: 0

I read only the files in this folder.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / gitops (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates a Technical sentence, and each cite is on the same fact. "By themselves" matches "automatically". "Keep watching" matches "continuously observe". "Must" is kept. Left out: "attempt" is kept, but "declarations" is reduced to "declared desired state". "Argo CD" and "Flux" are both described as in the Technical panel. |
| What it is | Bangla | PASS | Each sentence matches a Technical sentence, and each cite is on the same fact. "অবশ্যই" keeps "must". "নিজে থেকেই" matches "automatically". "ক্রমাগত" matches "continuously". "চেষ্টা করে" matches "attempt". I could read all the sentences well. Small drift: "community-focused education" became "কমিউনিটির জন্য শিক্ষামূলক উপকরণ" ("educational materials for the community"). The meaning is close, so I did not mark it a FAIL. Left out: the word "complete" is kept, and "declarations" is rendered as "ঘোষণা করা desired state". |

Open FAILs after round 4: 0

Not checked: I did not read the rest of S2 and S3. I only searched for the cited sentences, and the grep for the Flux sentence returned a line cut. I checked it with a second multiline search.

Changed after this round: Bangla: "community-focused education" is now "কমিউনিটি-কেন্দ্রিক শিক্ষা" (the checker passed the earlier wording and noted a small drift).

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / gitops (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite is on the same fact. "By themselves" matches "automatically", and "keep watching" matches "continuously". The "must" limit is kept. Left out: nothing of substance. The Technical text says "declarations" and "(like Git repositories)" as a parenthetical, and Layman keeps the same content. |
| What it is | Bangla | PASS | I can read it well enough to judge it. Each sentence matches the Technical sentence and keeps the meaning: "অবশ্যই" for "must", "নিজে থেকেই" for "automatically", "ক্রমাগত" for "continuously", and "চেষ্টা করে" for "attempt". Cites are on the matching facts. Left out: nothing of substance. |

Open FAILs after round 5: 0

I have not read S2 beyond the one Argo CD sentence. The Argo CD and Flux claims rest on those quoted lines only.

Open FAILs: 0
