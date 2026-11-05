# Voices fact check: devops / docker-in-practice

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / docker-in-practice (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1: "created" is dropped. The Technical panel says "created and managed by Docker", but the Layman panel says only "Docker manages it". The sentence also adds "after the container is gone", which is an interpretation of "persistent" and is not worded in S1. Sentence 2: the Technical panel says "a file or directory", but the Layman panel says only "a folder". This narrows the claim and drops "file". The cites 1 and 2 are on the right sentences. |
| What it is | Bangla | FAIL | Sentence 1: "সংরক্ষণ করে রাখে" ("keeps/stores") is weaker than "persistent". "created" is dropped, because "পরিচালনা করে" means only "manages". Sentence 2: "ফোল্ডার" ("folder") drops "file", the same narrowing as in the Layman panel. The Bangla reads clearly, so this verdict is based on meaning. The cites 1 and 2 are on the right sentences. |

Open FAILs after round 1: 2

Not checked: I did not read the rest of S1 or S2, because the page cites only these two sentences.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / docker-in-practice (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Both sentences and both cites (S1, S2) are word-for-word the same as the Technical panel. No fact is added, dropped or changed. The panel is not plainer than the Technical one, but that is a style point and not a fact error. |
| What it is | Bangla | PASS | Sentence 1: Volume is a persistent data store for containers, created and managed by Docker (cite 1). Sentence 2: a bind mount mounts a file or directory of the host machine from the host into the container (cite 2). The meaning matches the Technical panel, the cites are on the right sentences, and no fact is added or dropped. I can read the Bangla well enough to judge it. |

Open FAILs after round 2: 0

I did not check the rest of S1 and S2, because both claims were fully covered by the quoted lines. The Layman panel is a verbatim copy of the Technical panel, so it adds no plain-English value.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / docker-in-practice (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 ("Volumes are persistent data stores for containers") and sentence 2 ("Docker creates and manages them") restate Technical sentence 1. The cite on S1 is at the end of the group and is correct. Sentence 3 ("A bind mount takes a file or directory from the host machine and mounts it into a container") restates Technical sentence 2, and the S2 cite is correct. Left out: the words "When you use a bind mount", and "from the host" as a second mention. |
| What it is | Bangla | PASS | I could read all three sentences. They match the Technical panel: volume is a persistent data store for containers; Docker creates and manages them (S1); a bind mount takes a host machine file or directory and mounts it into the container (S2). Product and command names stay in English. Left out: the "When you use a bind mount" framing, and the second "from the host" mention. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / docker-in-practice (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates a Technical sentence, and the cites are on the same facts. "Docker creates and manages them" matches "created and managed by Docker". "A bind mount takes a file or directory from the host machine and mounts it into a container" matches the second Technical sentence. Left out: the "When you use a bind mount" framing, and the words "from the host" in "mounted from the host into a container". |
| What it is | Bangla | PASS | I can read the Bangla. It says the same as the Technical panel. "Volume হলো container-এর জন্য persistent data store" matches the first claim. "Docker এগুলো তৈরি করে ও পরিচালনা করে" matches "created and managed by Docker". "bind mount host machine-এর একটা file বা directory নিয়ে container-এর ভেতরে mount করে" matches the second claim. The cites are on the same facts. Left out: the "When you use a bind mount" framing, and the words "from the host" in "mounted from the host into a container". |

Open FAILs after round 5: 0

Not checked: The only risk is that the Note wording may not follow that style.

Open FAILs: 0
