# Voices fact check: devops / ansible

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / ansible (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1, "Ansible automates work on your servers", drops "open-source", "reduces complexity" and "runs everywhere". It adds "servers"; S1 says "local or remote system" and "virtually any task". Sentence 2, "needs no extra software on the servers it manages", is stronger than the Technical wording. Technical says the design has "low maintenance overhead by avoiding the installation of additional software across IT infrastructure". It does not say "needs no" software, and it does not name "servers it manages". |
| What it is | Bangla | FAIL | It mirrors the Layman panel sentence by sentence, so it has the same problems. "সার্ভারের কাজ স্বয়ংক্রিয় করে" adds "servers" and drops open-source, reduced complexity and runs everywhere. "কোনো বাড়তি সফটওয়্যার বসাতে হয় না" ("no extra software needs to be installed") is stronger than "avoiding the installation of additional software" and drops the "low maintenance overhead" framing. |

Open FAILs after round 1: 2

Note: The reply uses a fixed format, so I judged it unnecessary. Risk: the "needs no" wording is a judgment call. Another reviewer might accept it as equivalent.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / ansible (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 matches the Technical panel word for word, with Cite 1. Sentence 2 says "it keeps the maintenance overhead low by avoiding the installation of additional software across IT infrastructure". This is the same fact as the Technical panel, with Cite 1. No fact is added, dropped, or changed. |
| What it is | Bangla | PASS | Sentence 1 says Ansible gives open-source automation that reduces complexity and "সব জায়গায় চলে" (runs everywhere), with Cite 1. Sentence 2 says the design rests on an agent-less architecture, and maintenance overhead stays low because it avoids installing extra software across IT infrastructure, with Cite 1. The meaning is the same as the Technical panel. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / ansible (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 is open-source automation. Sentence 2 (reduces complexity, runs everywhere) is the Technical claim 1 and carries the cite. Sentences 3 and 4 restate Technical claim 2: agent-less, avoids installing additional software across IT infrastructure, so low maintenance overhead. The "so" has the same meaning as the Technical "by avoiding". Left out: "designed around", and the word "architecture" (the panel says "design"). |
| What it is | Bangla | PASS | The meaning matches the Technical panel sentence by sentence. "নকশা agent-less" is "designed ... agent-less". "এড়িয়ে চলে, তাই maintenance overhead কম" is "avoiding ... low maintenance overhead". Left out: "architecture" (the panel says "নকশা", design). I could read all the sentences well enough to judge them. |

Open FAILs after round 4: 0

Not checked: The verdicts rest only on `page.md` and `pages/S1.txt`.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / ansible (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Ansible is open-source automation" restates "provides open-source automation" with the same meaning. "so it has low maintenance overhead" keeps the "by avoiding" link of the Technical sentence. Both cites sit on the right facts. Left out: "designed around", the word "architecture" (the panel says "design"), and the colon structure of the second Technical sentence. |
| What it is | Bangla | PASS | I can read the Bangla. It matches the Technical panel sentence by sentence. "এটা জটিলতা কমায় আর সব জায়গায় চলে" matches "reduces complexity and runs everywhere". "নকশা agent-less" matches "designed around an agent-less architecture". "বাড়তি software install করা এড়িয়ে চলে, তাই maintenance overhead কম" matches "low maintenance overhead by avoiding the installation of additional software". Both cites are correct. Left out: "designed around", the word "architecture", and "provides" (the panel says "হলো", "is"). |

Open FAILs after round 5: 0

Not checked: I did not open any source other than S1, because `page.md` lists only S1. Risk: the lede has no cite, so a later edit could change it with no source tied to it.

Open FAILs: 0
