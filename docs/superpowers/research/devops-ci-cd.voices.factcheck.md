# Voices fact check: devops / ci-cd

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (1 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / ci-cd (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1, "A CI/CD pipeline builds, tests, and delivers your software for you <Cite 1>", adds a general definition of a CI/CD pipeline. The Technical panel has no such claim. S1 describes Jenkins, not CI/CD pipelines in general, so the cite does not support it. Sentence 2, "Jenkins is a server that runs such jobs", drops "self-contained" and "open source". It also changes "automate all sorts of tasks related to building, testing, and delivering or deploying software" into "runs such jobs", which is a weaker and different claim. Sentence 3, "GitHub Actions is a platform that runs them for your repository", adds "for your repository". The Technical panel does not say this. It also says GitHub Actions "runs" the jobs, where the Technical panel says it lets you "automate your build, test, and deployment pipeline". |
| What it is | Bangla | FAIL | I could read the Bangla well enough to judge it. It follows the Layman panel sentence by sentence, so it has the same faults. Sentence 1 adds the general CI/CD pipeline definition under Cite 1, and S1 does not support it. Sentence 2 ("Jenkins এমন একটা সার্ভার, যেটা এই কাজগুলো চালায়") drops "self-contained" and "open source" and weakens the Technical claim. Sentence 3 adds "আপনার repository-র জন্য" ("for your repository"), which the Technical panel does not say. |

Open FAILs after round 1: 2

I did not check the source files beyond the Grep matches.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / ci-cd (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same two facts and the same cites (S1, S2) as the Technical panel. The wording changes are "you can use" for "can be used" and "lets you" for "allows you". No fact is added, dropped, or changed in strength. This panel is not simpler than the Technical panel, but that is not a fact error. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Jenkins is a self-contained, open source automation server for build, test, and delivery or deployment tasks, with Cite 1. GitHub Actions is a CI/CD platform that automates the build, test, and deployment pipeline, with Cite 2. Product names and terms stay in English. No fact is added, dropped, or changed. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / ci-cd (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "CI/CD means continuous integration and continuous delivery" repeats the expansion in the Technical sentence. The cites are on the same facts as in the Technical panel. The "can" limit is kept ("You can use it"). Left out: nothing of substance. The "(CI/CD)" abbreviation is moved into its own sentence. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. The meaning matches the Technical panel: self-contained, open source automation server. "সব ধরনের কাজ automate করতে আপনি এটা ব্যবহার করতে পারেন" keeps the "can". The CI/CD expansion is also in the Technical panel. The cites are on the same facts as in the Technical panel. Left out: nothing of substance. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / ci-cd (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. The "CI/CD means continuous integration and continuous delivery" sentence restates the Technical expansion "(CI/CD)". Both cites sit on the right facts (S1 for Jenkins, S2 for GitHub Actions). Left out: nothing of substance. The "can be used to" limit became "You can use it to", which has the same meaning. |
| What it is | Bangla | PASS | I can read the Bangla. It matches the Technical panel sentence by sentence: Jenkins is a self-contained, open source automation server. It can be used to automate all sorts of build, test, and delivery or deployment tasks. GitHub Actions is a CI/CD platform. CI/CD means continuous integration and continuous delivery. It lets you automate your build, test, and deployment pipeline. The cites are on the right facts. No fact was added, and no limit was dropped. Left out: nothing of substance. |

Open FAILs after round 5: 0

Open FAILs: 0
