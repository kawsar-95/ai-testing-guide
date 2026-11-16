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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-16)

# Voices fact check: devops / docker-images-compose (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "assemble" (says "make"), "preferred" is kept, "BuildKit" is kept. The code and table match. |
| What it is | Bangla | PASS | Every fact matches the Technical panel. Nothing material is left out. The table is the same. |
| How it works | Layman | FAIL | "So put slow steps near the top" changes Technical "expensive steps". Expensive is not the same as slow, and S5 says "expensive". Fix: "put expensive steps near the top". Left out: the `<key>`/`<value>` names in `ENV`, "any" in `RUN`. "You copy only what you need" drops "can" but keeps the meaning of "selectively copy". The diagram is identical. |
| How it works | Bangla | FAIL | "সময়সাপেক্ষ ধাপ" means "time-consuming steps". Technical says "expensive steps", so the meaning changed. Fix: "ব্যয়বহুল ধাপ". The rest matches. Left out: nothing material. The diagram is identical. |
| Try it | Layman | PASS | Every fact matches the Technical panel, and the code blocks are identical. "Redis address" stands for "connection details", and "connects port" stands for "maps port". Left out: "purely" is now "only" (same sense). |
| Try it | Bangla | PASS | Every fact matches the Technical panel, and the code blocks are identical. I could read all the sentences well enough to judge them. Left out: nothing material. |
| How a tester uses it | Layman | PASS | Every fact matches the Technical panel. "Deployed" becomes "run", "custom" becomes "its own", and "selected" becomes "that you name". Left out: "primary" is now "main". The code is identical. |
| How a tester uses it | Bangla | PASS | Every fact matches the Technical panel. Left out: "implies" is kept. Nothing material is dropped. The code is identical. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. "Base-60 float" becomes "base-60 number" (fine). "Do not pass secrets ..." is the same as "inappropriate". Left out: "short-syntax" is "short form". |
| Common mistakes | Bangla | PASS | Every fact matches the Technical panel. Left out: nothing material. |
| What a tester can check | Layman | PASS | The seven bullets restate the Technical bullets, and the callout title and framing sentence are kept. |
| What a tester can check | Bangla | FAIL | "`FROM`-এর base image pin করা আছে কি না জিজ্ঞেস করুন" means "ask whether the base image is pinned". Technical says "Ask that base images in `FROM` are pinned", which is a request, not a question. Fix: "`FROM`-এর base image যেন pin করা হয়, তা চান". The other bullets match. |

Open FAILs after round 6: 3

Skipped: I did not read S2 to S10 beyond the lines I grepped. Risk: three voice FAILs are open, and I treated the tutorial's own run records (versions, log output) as N/A, not as uncited facts.

Changed after this round: The 3 FAILs were fixed: the Layman and Bangla panels say "expensive steps" (ব্যয়বহুল ধাপ), S5's word, not "slow" or "time-consuming"; the Bangla tip about base images is a request (যেন pin করা হয়, তা চান), like the Technical one.

## Round 7 (2026-11-16)

# Voices fact check: devops / docker-images-compose (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. The table is the same. Left out: "document" (says "text file"), "build configuration" (says "build settings"), "complex" CLI expression (says "long command"). |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of substance. The table is the same. |
| How it works | Layman | FAIL | "You copy only what you need from one stage to the next" drops the "can" of "You can selectively copy artifacts". It now says you always copy only what is needed, which is stronger than the Technical sentence. Other sentences are faithful. Left out: "new" files in COPY, the `<key>`/`<value>` names, "artifacts", "selectively". |
| How it works | Bangla | PASS | Meaning matches. It keeps "copy করা যায়" and "অপেক্ষা করে না". Left out: nothing of substance. Diagram is the same. |
| Try it | Layman | PASS | Facts and code blocks match the Technical panel. "Redis address" for "Redis connection details" is a plainer word for the same thing. Left out: "implies" is rendered as "runs them in the background"; "interpolation" is rendered as "fill in the values". |
| Try it | Bangla | PASS | Meaning matches. The code blocks are the same. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Facts match. "run twice" for "deployed twice" and "You set" for "You can set" are plainer but still true and add nothing. Left out: "custom", "selected" (says "that you name"), "fully resolved" (says "full, final"). |
| How a tester uses it | Bangla | PASS | Meaning matches. Left out: nothing of substance. |
| Common mistakes | Layman | FAIL | "so that YAML does not read it as a base-60 number" adds a mechanism (misreading) that the Technical panel does not give. It says "avoid conflicts with the YAML base-60 float". It also changes "float" to "number". Other bullets are faithful. Left out: "short syntax" (says "short form"), "bypassing" is rendered as "goes around". |
| Common mistakes | Bangla | PASS | Meaning matches, including "গোলমাল এড়াতে" for "avoid conflicts" and "base-60 float". Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Same advice as the Technical panel in plainer words: "parallel" is rendered as "that runs at the same time", "record" as "write down", "mean to" as "really want". No new fact. |
| What a tester can check | Bangla | PASS | Same advice as the Technical panel. No new fact. Left out: nothing of substance. |

Open FAILs after round 7: 2

Skipped: I did not read S1's CMD "Provides defaults" line or the end of S8's `--no-cache` sentence in full. Rows 28 and 90 rest on the part I did read. I did not invoke the writing-simplified-technical-english skill, because the reply format was fixed.

Changed after this round: Both FAILs were fixed: the Layman panel says that you "can pick" which files to copy from one stage to the next (S6's "can selectively copy"), not that you always copy only what you need; the Layman port bullet now gives the Technical reason, "to avoid conflicts with the YAML base-60 float", instead of a reason of its own.

## Round 8 (2026-11-16)

# Voices fact check: devops / docker-images-compose (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "text document" becomes "text file". "Image identifier" becomes "name". "Complex CLI expression" becomes "long command". The table is the same. |
| What it is | Bangla | PASS | Meaning is the same as the Technical panel. Nothing is added. The table is the same. |
| How it works | Layman | PASS | Every fact and limit is kept. Left out: `<key>` and `<value>` names in ENV. The "selectively" wording is simplified. The code block and diagram are the same. |
| How it works | Bangla | PASS | Meaning is the same. The code block and diagram are the same. |
| Try it | Layman | PASS | Facts match. "Redis connection details" becomes "Redis address", which is slightly narrower. "Implies detached mode" becomes "runs them in the background". The code blocks are the same. |
| Try it | Bangla | PASS | Meaning is the same. The code blocks are the same. |
| How a tester uses it | Layman | FAIL | The Technical text says "You can set the project name with ...". The Layman text says "You set the project name with the `--project-name` flag or the `COMPOSE_PROJECT_NAME` environment variable". The limit "can" was dropped, so it reads as the only way. Fix: "You can set the project name with ...". The other sentences match. |
| How a tester uses it | Bangla | PASS | Meaning is the same. "Can" is kept ("ঠিক করা যায়"). The code block is the same. |
| Common mistakes | Layman | PASS | Every fact is in the Technical panel. Left out: "short syntax" becomes "short form". "Inappropriate ... because they persist" becomes "Do not pass ...: they stay". "Guarantees the same image version" becomes "always get the same image". |
| Common mistakes | Bangla | PASS | Meaning is the same. Nothing is added. |
| What a tester can check | Layman | PASS | Same advice as the Technical callout. It is still marked as tutorial advice. "Parallel" becomes "runs at the same time". |
| What a tester can check | Bangla | PASS | Same advice as the Technical callout. Meaning is the same. |

Open FAILs after round 8: 1

Changed after this round: The FAIL was fixed: the Layman panel says that you "can set" the project name with the flag or the variable, keeping the "can" of the Technical panel.

## Round 9 (2026-11-16)

# Voices fact check: devops / docker-images-compose (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Facts match the Technical panel. "image identifier" became "gives the image its name", which is a plainer word for the same field. Left out: "BuildKit alias" detail is kept; "(preferred)" is kept; the Technical wording "declarative" is kept. Nothing left out that changes meaning. |
| What it is | Bangla | PASS | Meaning matches the Technical panel sentence by sentence. Left out: nothing that matters. Product and command names stay in English. |
| How it works | Layman | PASS | Same facts, cites and limits ("always", "only until running"). Left out: `<key>`/`<value>` names in `ENV`; "from your project directory" detail is kept; that `service_healthy` dependency starts "before the dependent service" is simplified to "first". The diagram is identical. |
| How it works | Bangla | PASS | Meaning matches. Left out: nothing that adds or changes a fact. The diagram is identical to the Technical one. |
| Try it | Layman | PASS | Same facts. "connection details" became "Redis address", which is slightly narrower, but the code shows host and port. Left out: nothing that changes meaning. The run observations (versions, log lines, counts 1-4, `GET hits` = 3) repeat the Technical panel and are unsourced there too (see FACTCHECK rows 46, 63, 65, 70, 74). Code blocks are identical. |
| Try it | Bangla | PASS | Meaning matches the Technical panel. Code blocks are identical. Left out: nothing that changes meaning. The same unsourced run observations carry over from the Technical panel. |
| How a tester uses it | Layman | PASS | Same facts and cites. "selected" became "that you name"; "primary tool for live debugging" became "main tool for debugging while the stack runs". Meaning is the same. Left out: "maximum" is rendered as "longest wait", with no change in meaning. |
| How a tester uses it | Bangla | PASS | Meaning matches. Left out: nothing that changes meaning. The code block is identical. |
| Common mistakes | Layman | PASS | Same facts. "inappropriate for passing secrets" became "Do not pass secrets", which is the same advice in plainer words. "always" is kept for quoted ports. Left out: "may" limits are kept. Nothing important left out. |
| Common mistakes | Bangla | PASS | Meaning matches, including "should always" for quoted ports and "by default" for anonymous volumes. Left out: nothing that changes meaning. |
| What a tester can check | Layman | PASS | Same seven pieces of advice in plainer words ("parallel" became "that runs at the same time", "record" became "write down"). The callout title and no-cite status are the same. |
| What a tester can check | Bangla | PASS | Same seven pieces of advice. The callout title "Tutorial advice" and the framing sentence are kept. Nothing added. |

Open FAILs after round 9: 0

Not checked: I did not call the writing-simplified-technical-english skill, because no Skill tool is available here. The five FAILs all come from the tutorial's own run results, which no file in pages/ contains. The Layman and Bangla panels repeat those results, so fixing the Technical panel means fixing them in all three panels.

Changed after this round: No FAIL in this round. The fact report of this round had 5 FAILs, so round 10 checks the page again, with the brief that names the record of the page's own run.

## Round 10 (2026-11-16)

# Voices fact check: devops / docker-images-compose (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "Instead of a long command" for Bake changes "a complex CLI expression" in the Technical panel. "Long" and "complex" are not the same. The fix is to write "instead of a complex command line". Other differences are minor: "gives the image its name" for "sets the image identifier". Left out: the `[registry/]repository[:tag]` wording is kept. "Declarative" is kept. "BuildKit" is kept. No detail is left out except "concurrently" becoming "at the same time". |
| What it is | Bangla | PASS | Every sentence matches the Technical panel. The tables are the same. Nothing is added. Nothing is left out. |
| How it works | Layman | PASS | All facts and cites match. Left out: the `<key>` and `<value>` placeholders in the `ENV` row. "Documentation" in the `EXPOSE` row becomes "it only notes". "Frequent change" becomes "changes often". The diagram is the same. |
| How it works | Bangla | PASS | All facts and cites match. The diagram is the same. Left out: nothing of substance. |
| Try it | Layman | PASS | All facts match. The code blocks are the same. "Redis connection details" becomes "Redis address", which is narrower but adds nothing. Left out: nothing of substance. |
| Try it | Bangla | PASS | All facts match. The code blocks are the same. The run record and cites are unchanged. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | All facts and cites match. Left out: "maximum" becomes "longest", "forces" becomes "makes", and "from scratch" becomes "again". Meanings are the same. |
| How a tester uses it | Bangla | PASS | All facts and cites match. The code block is the same. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | All facts and cites match. "Inappropriate" becomes "Do not pass", which is the same advice. "Guarantees" becomes "makes sure". Left out: nothing of substance. |
| Common mistakes | Bangla | PASS | All facts and cites match. "Always" and "short syntax" are kept. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | The same seven pieces of advice, in plainer words. The callout is titled "Tutorial advice". It adds no tool fact. |
| What a tester can check | Bangla | PASS | The same seven pieces of advice. It says the advice is the tutorial's own. It adds no fact. |

Open FAILs after round 10: 1

I did not re-read S1 to S18 end to end. I checked each claim with Grep and short Reads. The "Provides defaults for an executing container" wording for `CMD` did not appear in my grep output, so row 25 rests on the "only the last one takes effect" line plus the general CMD description.

Changed after this round: The FAIL was fixed: the Layman panel says "instead of a complex command line", keeping the "complex" of the Technical panel, not "a long command".

## Round 11 (2026-11-16)

# Voices fact check: devops / docker-images-compose (round 11)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the meaning is the same. Left out: "assemble" (says "make"); "identifier" (says "name"). The table is the same. |
| What it is | Bangla | PASS | The meaning is the same as the Technical panel. Product and command names stay in English. Nothing added. The table is the same. |
| How it works | Layman | PASS | The instruction table and the other facts match the Technical panel. Left out: `<key>`/`<value>` names for `ENV`; "new" in `COPY`; the word "attribute" for `condition`. The diagram is the same as in the Technical panel. |
| How it works | Bangla | PASS | The meaning is the same as the Technical panel. Left out: nothing that changes the meaning. The diagram is the same. |
| Try it | Layman | PASS | All steps, code blocks, and commands match the Technical panel. Left out: "connection details" becomes "Redis address" (still host and port, a slightly narrower word); "multiple" becomes "more than one". Code blocks are the same. |
| Try it | Bangla | PASS | The steps and code blocks match the Technical panel. The meaning is the same in every step, including the `--wait` sentence and the Callout. No fact is added. Code blocks are the same. |
| How a tester uses it | Layman | PASS | Every sentence restates a Technical sentence. Left out: "from scratch" in the `--no-cache` sentence; the word "selected" becomes "that you name". "deployed" becomes "run". |
| How a tester uses it | Bangla | PASS | The meaning is the same as the Technical panel. Nothing is added. The code block is the same. |
| Common mistakes | Layman | PASS | The facts match the Technical panel. Left out: "should" in the quoted-port item (the Layman text says "Always write", which has the same sense); "inappropriate" becomes "Do not pass". The cites are on the same facts as in the Technical panel. |
| Common mistakes | Bangla | PASS | The meaning is the same as the Technical panel. Nothing is added. Limits such as "by default" are kept. |
| What a tester can check | Layman | PASS | Same seven items as the Technical callout, in plainer words ("record" becomes "write down", "parallel" becomes "that runs at the same time"). No tool fact is added. |
| What a tester can check | Bangla | PASS | Same seven items as the Technical callout. The meaning is the same. No fact is added. |

Open FAILs after round 11: 0

Open FAILs: 0
