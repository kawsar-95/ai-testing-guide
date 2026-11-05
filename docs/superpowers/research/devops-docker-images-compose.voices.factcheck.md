# Voices fact check: devops / docker-images-compose

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (1 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / docker-images-compose (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 (S1): "text file with the steps to build an image" matches the Technical claim in plain words. Sentence 2 (S2): "run several containers together as one application" matches "defining and running multi-container applications". Sentence 3 (S3): "write your build settings in a file" matches "define your build configuration using a declarative file". Each sentence keeps its cite. No fact was added or dropped. The wording is slightly looser: "declarative" and "Docker Buildx" are not in the Layman text, and Compose "running" is stated without "defining". I judge this as plain-language simplification. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. Sentence 1: a text file in which the steps to build an image are written. Sentence 2: Compose runs many containers together as one application. Sentence 3: with Bake, build settings can be written in one file. The names Dockerfile, image, Compose, container, Bake and build stay in English. The cites 1, 2 and 3 match the Technical panel. The facts are the same as in the Layman panel. |

Open FAILs after round 1: 0

Not checked: the cited text sits in each source file as one block. I did not read the rest of the files, only the passages that carry the claims.

Changed after this round: The description of the page (the lede) was cut to what the page explains. The Layman and Bangla panels were not changed: this checker passed them, and the checker of round 2 failed the same text.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / docker-images-compose (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 3 drops "a feature of Docker Buildx", so the Buildx link is missing. It also drops "declarative" and the "all the commands a user could call on the command line" wording from sentence 1. Sentence 2 drops "defining" and says only "runs". The Technical panel states these facts, and the cites on these sentences point to sources that say them. The cites are correct, but the facts are dropped. |
| What it is | Bangla | FAIL | The Bangla is clear and I could read it well enough to judge. It has the same three sentences as the Layman panel and the same cites. It drops the same facts. Sentence 3 omits Docker Buildx and "declarative". Sentence 2 omits "defining". Sentence 1 omits "all the commands a user could call on the command line". |

Open FAILs after round 2: 2

Changed after this round: Layman and Bangla restate the three Technical sentences without dropping "all the commands a user could call on the command line", "defining", "a feature of Docker Buildx", and "declarative". The round 1 checker passed the earlier voices and the round 2 checker did not; both verdicts are kept here.

## Round 3 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / docker-images-compose (round 3)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The text is word for word the same as the Technical panel. It has the same three facts and the same cites (1, 2, 3). Nothing is added or dropped. It is not simpler than the Technical panel, but this check covers facts only. |
| What it is | Bangla | PASS | All three sentences carry the same facts as the Technical panel, with cites 1, 2 and 3 in the same places. (1) The Dockerfile is a text document holding all the commands a user could run on the command line to assemble an image. (2) Compose is a tool to define and run multi-container applications. (3) Bake is a Docker Buildx feature that lets you define your build configuration with a declarative file. Product and command names stay in English. No fact is added, dropped, or changed in strength. |

Open FAILs after round 3: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / docker-images-compose (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three claims restate the Technical sentences, and each cite sits on the same fact. "Text file" stands for "text document". "Applications that have more than one container" stands for "multi-container applications". "You define your build configuration in a declarative file" keeps the meaning. Left out: nothing of substance. |
| What it is | Bangla | PASS | The Bangla meaning matches the Technical panel for all three claims: a text file that holds all the commands a user could run to assemble an image; a tool to define and run multi-container applications; a Docker Buildx feature to define build configuration in a declarative file. The cites match. Left out: nothing of substance. Product names stay in English, as the rules allow. |

Open FAILs after round 4: 0

Ponytail: I checked only the three cited sentences, in the S1, S2 and S3 text files. I did not check the rest of those sources. The Bangla check is by meaning, and I read it as fluent.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / docker-images-compose (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite is on the same fact. "Text file" for "text document", "run" for "call", and "applications that have more than one container" for "multi-container applications" keep the meaning. "You define your build configuration in a declarative file" matches "lets you define ... using a declarative file". Left out: "lets you" (Bake enables the define step), and none of the other details is dropped. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. It matches the Technical panel sentence by sentence. Dockerfile is a text file that holds every command a user can run on the command line to assemble an image. Compose defines and runs multi-container applications. Bake is a Buildx feature, and you define build configuration in a declarative file. Each cite is on the same fact as in the Technical panel. Left out: "lets you" for Bake. The Bangla also says "আপনি" ("you") where the Technical panel uses the generic "you". This is the same meaning. |

Open FAILs after round 5: 0

Open FAILs: 0
