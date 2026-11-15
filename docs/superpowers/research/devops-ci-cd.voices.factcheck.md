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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-15)

# Voices fact check: devops / ci-cd (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "the team always has a build that is ready to deploy" adds "always". The Technical panel says only "Done well, it leaves a deployment-ready build artifact". The word "always" is in S4 but not in the Technical panel, so the claim is stronger. Left out: "expands upon CI", "non-production" (now "not to production"), "custom" checks, "self-contained", "Done well" wording on the artifact, "lets you". |
| What it is | Bangla | FAIL | "টিমের হাতে সবসময় একটা deploy করার মতো build artifact থাকে" adds "সবসময়" (always). The Technical panel does not say "always". Other sentences match the Technical panel. Left out: the "removes one step" phrase. |
| How it works | Layman | PASS | Facts and limits match. "Same machine" stands for "same runner". Left out: "configurable", "pre-defined", "newly-provisioned", "Microsoft", "Declarative syntax", "Each runner can". The "six parts" claim is copied from the Technical panel, which fails it in row 16. |
| How it works | Bangla | PASS | Meaning matches, including the code blocks, which are identical. Left out: "configurable", "newly-provisioned", "Declarative" is kept, "pre-defined" is paraphrased. The "ছয়টা অংশ" claim is copied from the Technical panel, which fails it in row 16. |
| Try it | Layman | PASS | Matches the Technical panel, and the code blocks are the same. "Someone canceled the run" is a small paraphrase of "the workflow was canceled". The "only" claim on `cancelled()` is carried over from the Technical panel, which fails it in row 47. Left out: "GitHub-hosted", "monthly included compute usage" (now "monthly amount that your plan includes"), "workflow label" (now "label"), "status function" and `success()` by name. |
| Try it | Bangla | PASS | Meaning matches, and the code blocks are the same. The "শুধু" on `cancelled()` is carried over from the Technical panel (row 47). Nothing is added. |
| How a tester uses it | Layman | FAIL | (1) "before anyone can merge into that branch" widens "collaborators" to "anyone". (2) "within the limit that the repository or organization sets" drops "enterprise", so the claim changes. Left out: "POSIX", "enterprise", "a `post` section ... condition" wording, "can" on the `post` section. The "5:30 UTC" claim is carried over from the Technical panel, which fails it in row 57. |
| How a tester uses it | Bangla | PASS | Matches the Technical panel, including POSIX, enterprise, the yellow ball, and the 5-minute limit. The code blocks are identical. The "UTC" claim is carried over from the Technical panel (row 57). |
| Common mistakes | Layman | PASS | All seven bullets match the Technical panel. Left out: "third-party" (now "outside action"), "POSIX" is not used here, "the redaction", "organization, repository, or environment" is kept. |
| Common mistakes | Bangla | PASS | All seven bullets match the Technical panel in meaning. Left out: "such as" wording on automated environments is kept. Nothing is added. |
| What a tester can check | Layman | PASS | Same seven checks as the Technical panel, with plainer words ("links" for "URLs", "stopped" for "blocked"). Same callout title and sentence. |
| What a tester can check | Bangla | PASS | Same seven checks and same callout. Nothing is added. |

Open FAILs after round 6: 3

Not checked: the code blocks in S6 and S12 line by line, and the Bangla was judged by meaning only.

Changed after this round: The 3 FAILs were fixed with the fact fixes above, and in the Layman panel: "collaborators" can merge (not "anyone"), and the artifact limit is set by the repository, organization, or enterprise.

## Round 7 (2026-11-15)

# Voices fact check: devops / ci-cd (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "custom" checks, "self-contained", "configurable", and "requires". |
| What it is | Bangla | PASS | Same facts as the Technical panel. Left out: "self-contained" is kept, and nothing is added. "ঠিকভাবে করলে" matches "Done well". The Jenkins quote has a Bangla gloss that means the same. |
| How it works | Layman | PASS | Left out: "configurable", "pre-defined", "Microsoft", "in a workflow", "Declarative syntax", and "no dependencies". "Runner... runs one job at a time" drops "can", which is a small change. The meaning stays the same. |
| How it works | Bangla | PASS | Same facts. Left out: "configurable", "pre-defined" (shown as "আগে থেকে বানানো"). Code blocks and diagram are identical. |
| Try it | Layman | FAIL | "Without it, a step runs only when all earlier steps passed" changes the scope. The Technical panel says this holds for "a step with no status function", with default `success()`. "It" means the `if: ${{ !cancelled() }}` line. A step with a different status function, such as `always()`, would not follow this rule. Fix: "Without a status function, a step runs only when all earlier steps passed." Left out: the name `success()`, "by default", "GitHub-hosted", "branch". "You need Node.js, Git, and a GitHub account" matches the Technical panel, but that sentence is flagged in the fact check (claim 32). |
| Try it | Bangla | PASS | Same facts. The `success()` rule keeps "কোনো status function না থাকলে". Left out: "GitHub-hosted" in the callout. The prerequisites sentence follows the Technical panel and is flagged in the fact check (claim 32). |
| How a tester uses it | Layman | PASS | Same facts. Left out: "POSIX", "Declarative Pipeline", "in the web UI", and the "extract" detail. "Records them every time" restates the `always` condition. |
| How a tester uses it | Bangla | PASS | Same facts. Left out: nothing of note. "Pipeline unstable" keeps "web UI". |
| Common mistakes | Layman | PASS | Same facts. Left out: "third-party" (shown as "outside"), "explicitly", and "within the lock file". |
| Common mistakes | Bangla | PASS | Same facts, with the limits kept ("default-ভাবে", "শুধু তখন", "নিশ্চয়তা নেই"). |
| What a tester can check | Layman | PASS | Same advice. "Links" replaces "URLs" and "have" replaces "run"; the meaning is unchanged. No tool fact is added. |
| What a tester can check | Bangla | PASS | Same advice as the Technical panel, with no added fact. |

Open FAILs after round 7: 1

I did not read the Bangla in depth for tone, only for meaning. I did not re-check every code block character by character against the sources beyond the matches noted.

Changed after this round: The FAIL was fixed: the Layman panel says "Without a status function, a step runs only when all earlier steps passed". The Node.js sentence was removed from all panels.

## Round 8 (2026-11-15)

# Voices fact check: devops / ci-cd (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "requires" (CI), "self-contained" (Jenkins), "standardized" test process, "non-production" (it says "not to production"), "can" is kept. |
| What it is | Bangla | PASS | The meaning matches. The added gloss after the Jenkins quote only restates the quote. Left out: nothing of substance. |
| How it works | Layman | PASS | The meaning matches, and the code blocks and diagram are identical. Left out: "configurable", "pre-defined", "Declarative" syntax, "newly-provisioned", "single job" wording (it says "one job at a time"), "in a workflow" for CI tests passing. "Machine" is used for "runner" in the Job row. |
| How it works | Bangla | PASS | The meaning matches, and the code blocks are identical. Left out: nothing of substance. |
| Try it | Layman | PASS | The meaning matches, and the code is identical. Step 5 says "open it with this command" where the Technical panel says "serve it". The "empty folder" detail is in the Technical panel, but its source does not support it (see FACTCHECK row 35). Left out: "hosted" (runners), "defines" (it says "picks"), `main`/`master` "branch" wording. |
| Try it | Bangla | PASS | The meaning matches, and the code is identical. Left out: nothing of substance. The "খালি ফোল্ডার" detail is in the Technical panel but unsupported by its source (see FACTCHECK row 35). |
| How a tester uses it | Layman | FAIL | "A `post` section with `always` records them every time" is stronger than the Technical panel, which says a Declarative Pipeline "can record them in a `post` section with the condition `always`". The Technical panel does not say it records "every time". Fix: "A Declarative Pipeline can record them in a `post` section with the condition `always`." Left out: "POSIX" (cron), "Declarative", "Pipeline" in "unstable". The other sentences are faithful. |
| How a tester uses it | Bangla | PASS | The meaning matches, including "can" and "Declarative Pipeline". Left out: nothing of substance. |
| Common mistakes | Layman | PASS | The meaning matches. Left out: "third-party" (it says "outside action"), "printed", "the redaction", "exits" (it says "stops"). |
| Common mistakes | Bangla | PASS | The meaning matches. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | It restates the same advice with the same callout title, and adds no fact. "Links" stands for "URLs". |
| What a tester can check | Bangla | PASS | It restates the same advice and adds no fact. Judged by meaning. |

Open FAILs after round 8: 1

Skipped: I did not invoke the writing-style skill, because the output format was fixed. Risk: row 54 relies on the reader mapping days 1–5 to Monday–Friday, which S12 only implies through the "0 - 6 or SUN-SAT" field range.

Changed after this round: The FAIL was fixed: the Layman Jenkins sentence now says what the Technical panel says ("A Declarative Pipeline can record them in a `post` section with the condition `always`").

## Round 9 (2026-11-15)

# Voices fact check: devops / ci-cd (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "software practice", "requires", "custom" checks, "non-production", "self-contained", "build artifact". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. The Pipeline gloss restates the Jenkins quote. Left out: "custom" is kept, but "standardized" is rendered as "standard". |
| How it works | Layman | PASS | Meaning matches the Technical panel. Changes: "directory" is "folder", and "same runner" is "same machine". Left out: "configurable", "pre-defined", "set of jobs or code", "Each runner can", "provisioned", "Microsoft", "runs your CI tests", "distinct", "Declarative syntax". It repeats "in order by default", which is the Technical panel's own wording and a FAIL in the fact check. |
| How it works | Bangla | PASS | Meaning matches the Technical panel. "তাই" in the parallel sentence only restates the Technical panel's "no dependencies and run in parallel". Same left-out details as the Layman panel. It repeats "default-ভাবে ... ক্রমানুসারে", the same fact-check FAIL. |
| Try it | Layman | PASS | Meaning matches the Technical panel. Left out: "GitHub-hosted", "branch" after main or master, "Playwright guide" detail, "Declarative", "workflow label" is kept as "label". It repeats the "only when" wording and the invented diagram names from the Technical panel (fact-check FAILs). |
| Try it | Bangla | PASS | Meaning matches the Technical panel. "কারণ" before the show-report command restates the Technical "because opening the file directly does not work as expected". Same left-out details as the Layman panel. |
| How a tester uses it | Layman | PASS | Meaning matches the Technical panel. Left out: "POSIX", "tracked" is not here, "protected" on the branch, "the REST" is not here. It repeats the Jenkins "unstable" claim without the `\|\| true` condition, and the cron example without a timezone. Both are fact-check FAILs, not new facts. |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Left out: "slow" is kept, but "Pipeline is marked" becomes "Pipeline unstable চিহ্নিত" with the same meaning. It repeats the same two fact-check FAILs (unstable without `\|\| true`; cron without timezone). |
| Common mistakes | Layman | PASS | Meaning matches the Technical panel. Left out: "status function" detail "default check success()", "exits", "unless" kept. "Third-party" is "outside", "bad actor" is "attacker". It repeats the "runs only when" wording (fact-check FAIL). |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. Nothing added. It repeats the "শুধু তখন" wording (fact-check FAIL). |
| What a tester can check | Layman | PASS | Same seven advice items. "links" for "URLs"; "tracked" is left out from "a tracked ticket". |
| What a tester can check | Bangla | PASS | Same seven advice items. "tracked" is left out from "a tracked ticket". |

Open FAILs after round 9: 0

Changed after this round: No FAIL in this round. The voices were changed with the fact fixes above, in all three panels.

## Round 10 (2026-11-15)

# Voices fact check: devops / ci-cd (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites are on the right facts. Left out: "software practice", "custom" checks, "self-contained" for Jenkins, "non-production" as a word ("not to production" says the same), "standardized". |
| What it is | Bangla | PASS | The meaning matches the Technical panel for all sentences, the tables, and the Jenkins quote with its Bangla gloss. Left out: "custom" is kept, but "standardized" is shortened to "standard". Nothing is added. |
| How it works | Layman | PASS | The meaning is the same. The code blocks are identical to the Technical panel. Left out: "configurable", "pre-defined", "single" ("one job at a time" keeps the meaning), "Microsoft", "in a workflow" for CI tests, "distinct" subset, "Declarative syntax", "can be committed" becomes "you can commit it". Job uses "machine" for "runner", and Runner stays "server". |
| How it works | Bangla | PASS | The meaning is the same, and the code blocks are identical. Left out: "configurable". No fact is added or changed. |
| Try it | Layman | PASS | The meaning is the same, and the three code blocks are identical. Left out: "GitHub-hosted" in the cost note, "branch" after `main` or `master`, and "workflow label" becomes "label". The "open it with this command" wording in step 5 stands for "serve it", and "does not work well" stands for "does not work as expected". These are minor wording shifts, not new facts. |
| Try it | Bangla | PASS | The meaning is the same, and the code blocks are identical. Left out: "configurable", the "(workflow was canceled)" scope is kept. Step 5 says "খুলুন" (open) for "serve", with the same minor shift as the Layman panel. |
| How a tester uses it | Layman | PASS | The meaning is the same, and the code blocks are identical. Left out: "POSIX", "Pipeline" becomes "run", "shown in the web UI" after the yellow ball, "artifact" becomes "file set", and "continuous delivery" before "pipeline" in the pre-release list. "At most once every 5 minutes" says the same as "the shortest interval is once every 5 minutes". |
| How a tester uses it | Bangla | PASS | The meaning is the same, and the code blocks are identical. Nothing is added. All facts and cites match the Technical panel. |
| Common mistakes | Layman | PASS | All seven bullets give only facts that the Technical panel gives. Left out: "continuous integration" is shortened to "CI", "third-party" becomes "outside", "bad actor" becomes "attacker" (the "if they gain access" condition is kept), and "can read" becomes "reads" (the "only if it names it" limit is kept). |
| Common mistakes | Bangla | PASS | The meaning is the same for all seven bullets. The limits ("only if", "not guaranteed", "default", "unless a condition") are kept. Nothing is added. |
| What a tester can check | Layman | PASS | It restates the same advice as the Technical callout, with the same "Tutorial advice" title and introduction. Small wording changes: "URLs" becomes "links", "run" becomes "have", and "blocked" becomes "stopped". |
| What a tester can check | Bangla | PASS | It gives the same seven advice items and the same introduction as the Technical callout. Nothing is added. |
| Key words | none | N/A | The Key words section has no Layman or Bangla panels. |

Open FAILs after round 10: 0

I did not run a script to compare the code blocks. I compared them by eye. I did not open the S5, S6 and S7 files beyond the lines I grepped or read. For S2, I found the "automate your build, test, and deployment pipeline" wording through a grep match that the tool cut short.

Open FAILs: 0
