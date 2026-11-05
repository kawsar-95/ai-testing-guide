# Voices fact check: devops / docker-basics

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (1 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / docker-basics (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 2, "A container is lighter than a virtual machine", is not in the Technical panel. The Technical panel says Docker is lightweight and fast and is an alternative to hypervisor-based VMs. The comparison "container lighter than VM" is a new and stronger claim. S1 says "Containers are lightweight" but does not say they are lighter than VMs. Sentence 1 adds "in a container", which the Technical panel does not say, and "apart from the machine under it" is a loose version of "infrastructure". Dropped facts: "open platform", "deliver software quickly", "fast", "cost-effective", "viable alternative to hypervisor-based VMs". |
| What it is | Bangla | FAIL | The Bangla matches the Layman panel, so it has the same problems. "container-এ তৈরি, পাঠানো আর চালানো" adds "container", which the Technical panel does not have. "container একটা virtual machine-এর চেয়ে হালকা" is a new, stronger claim (container lighter than VM) that S1 does not make. The same facts are dropped: open platform, quick delivery, fast, cost-effective, hypervisor-based alternative. I can read the Bangla well enough to judge this. |

Open FAILs after round 1: 2

Skipped: I did not check the source for other text that might support the Layman and Bangla wording. Both panels need a rewrite so they match the Technical panel.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / docker-basics (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three sentences carry the same three facts as the Technical panel, with the same cite (n=1) on each. "Lets you" matches "enables you". The two Technical sentences on lightweight and on the VM alternative are joined into one sentence, with no change in meaning. No fact is added, dropped, or changed in strength. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. Sentence 1 says Docker is an open platform to develop, ship and run applications. Sentence 2 says Docker lets you separate your application from the infrastructure so you can deliver software fast. Sentence 3 says Docker is lightweight and fast and is a viable, cost-effective alternative to hypervisor-based virtual machines. Each sentence matches the Technical panel and keeps the cite n=1. Product names and terms stay in English, which is correct. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / docker-basics (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates a Technical sentence, and the cites sit on the same facts. "Docker lets you keep your applications apart from your infrastructure" matches "enables you to separate". "Virtual machines that use a hypervisor" matches "hypervisor-based virtual machines". The meaning is not stronger or weaker. Left out: the word "enables" (it becomes "lets"), and nothing else that limits a claim. |
| What it is | Bangla | PASS | The Bangla is readable and its meaning matches the Technical panel. Open platform, develop/ship/run applications, separation from infrastructure, quick delivery, lightweight and fast, and "কার্যকর ও cost-effective বিকল্প" for "viable, cost-effective alternative" all match, and "hypervisor ব্যবহার করা virtual machine" matches "hypervisor-based virtual machines". The cites are on the same facts. Left out: nothing that limits a claim. The Bangla does not say "so you can" as a purpose clause, but "এতে" gives the same result. |

Open FAILs after round 4: 0

The page and the sources were the only evidence I used.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / docker-basics (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates a Technical sentence. The cites sit on the same facts. Left out: "enables you to" is now "lets you". "Hypervisor-based virtual machines" is now "virtual machines that use a hypervisor", which keeps the same meaning. No limiting word was dropped. |
| What it is | Bangla | PASS | The Bangla is clear enough to judge, and its meaning matches the Technical panel. Left out: nothing beyond wording. "Viable" is rendered as "কার্যকর" (effective, workable), which is close enough. "Hypervisor-based" is rendered as "hypervisor ব্যবহার করা" (that uses a hypervisor). The cites are on the same facts as in the Technical panel. |

Open FAILs after round 5: 0

I checked the facts against S1 only. I did not check the cites against anything else.

Open FAILs: 0
