# Voices fact check: devops / aws-data-serverless

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-data-serverless (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Facts were dropped or changed against the Technical panel. (a) DynamoDB loses "serverless" and "distributed": it says only "a managed NoSQL database". (b) Athena loses "interactive" and "directly". It also says "files in S3", but the Technical panel and S3 say "data". (c) Step Functions loses "state machines" and every use case: distributed applications, process automation, microservices orchestration, and data and ML pipelines. It also says "connects steps", which the Technical panel does not say. (d) Lambda's "provisioning" is dropped. The cites are in the right places. |
| What it is | Bangla | FAIL | The Bangla matches the Layman panel and has the same gaps. (a) DynamoDB is "managed NoSQL ডেটাবেস", with no serverless and no distributed. (b) Athena is "S3-এর ফাইলে SQL চালানো", which says "files" and drops "interactive" and "analyze". (c) Step Functions is "বিভিন্ন ধাপ জুড়ে একটা workflow বানায়", which drops state machines and all the use cases. (d) Lambda drops "provisioning". I could read all the sentences well enough to judge them. The cites are in the right places. |

Open FAILs after round 1: 2

Skipped: I did not check the Technical panel for claims that are missing from it. I only checked what it states. Risk: the lede is the only fact line with no cite, and I judged the Layman and Bangla panels strictly against the Technical panel. A looser reading of "simplified" would pass them.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-data-serverless (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The four sentences and the cites 1-4 are word for word the same as the Technical panel. No fact is added, dropped, or changed. |
| What it is | Bangla | PASS | All four sentences match the Technical panel in meaning, and each has the same cite (1, 2, 3, 4). Lambda: run code without provisioning or managing servers. DynamoDB: serverless, fully managed, distributed NoSQL database. Athena: interactive query service that analyzes data directly in Amazon S3 using standard SQL. Step Functions: workflows, also called state machines, for distributed applications, process automation, microservice orchestration, and data and machine learning pipelines. Product names and terms stay in English. No fact is added, dropped, or changed. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-data-serverless (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "With AWS Step Functions, you create workflows" drops the limit "can" from the Technical sentence "you can create workflows". The plain sentence now says you do create workflows, which is stronger than the source. Fix: "you can create workflows". The other three blocks are faithful, and each cite is on the same fact as the Technical panel. "setting up" for "provisioning" and "it is easy to do" for "makes it easy" are acceptable rewordings. Details left out: "single-digit millisecond" is not in the Technical panel, so nothing is missing there. The only change in wording is that "Amazon S3" is not expanded, and the Technical panel does not expand it either. |
| What it is | Bangla | FAIL | "AWS Step Functions দিয়ে আপনি workflow বানান" has the same problem. It drops "can" and says "you make workflows", not "you can make workflows". Fix: "workflow বানাতে পারেন". The Lambda, DynamoDB and Athena sentences match the Technical panel in meaning. Cites are correct. I can read the Bangla well enough to judge it. Nothing in the Technical panel is left out apart from the wording of the rewording noted for Layman. |

Open FAILs after round 4: 2

Skipped: I did not check the sources beyond the four cited sentences. Risk: the "can" verdicts are a strict reading of the repo rule. A reviewer may accept them as harmless.

Changed after this round: Layman and Bangla: "you create workflows" went back to "you can create workflows" (the limit "can" of the Technical sentence).

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-data-serverless (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each of the four sentence groups restates one Technical sentence, and each cite sits on the same fact. "Setting up" stands for "provisioning". "It is easy to do" stands for "makes it easy to analyze". Both keep the Technical meaning. Left out: the word "provisioning". The word "makes" in "makes it easy". The word "directly" is kept. Nothing was added. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. It restates the same four Technical facts with correct cites. "পরিচালনা না করেই" matches "or managing", "সরাসরি" matches "directly", and "আর এটা সহজ" matches "makes it easy". Left out: the DynamoDB sentence says "NoSQL database" first and then lists the three traits, as the Layman panel does. The wording "makes it easy" is simplified to "এটা সহজ". Nothing was added, and no limit was dropped. |

Open FAILs after round 5: 0

I did not check the cited AWS pages beyond the quoted lines. I only searched the four source files, as you asked.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-19)

# Voices fact check: devops / aws-data-serverless (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word for word the same as the Technical panel. No fact added. It is not simplified, and nothing is left out. |
| What it is | Bangla | PASS | Same facts and cites. "automatically manages" is shown as "নিজে পরিচালনা করে". Nothing added. No detail left out. |
| How it works | Layman | PASS | Word for word the same as the Technical panel, with the same cites. Nothing left out. |
| How it works | Bangla | PASS | Meaning matches the Technical panel sentence by sentence, including the limits: always, must, by default, typically, only. Small changes: "Provisioned concurrency কিছু environment instance..." adds "some"; "সম্ভবত একাধিকবার চলতে পারে" is a double hedge. Both are within the Technical meaning. Left out: none worth noting. |
| Try it | Layman | PASS | Word for word the same as the Technical panel. Code blocks are the same. Nothing left out. |
| Try it | Bangla | FAIL | "AWS বলে, একটা handler ... data বের করে যাচাই করবে, তারপর input পাঠাবে" drops "should" from "a handler should extract and validate". It now reads as a plain statement. Elsewhere this panel uses "উচিত" for "should". Fix: "...যাচাই করা উচিত ... পাঠানো উচিত". The rest matches. The code blocks are the same as in the Technical panel. The FAIL in the Technical panel (Docker `-p`) is repeated here without change; it adds no new fact. Left out: none. |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel. Nothing left out. |
| How a tester uses it | Bangla | FAIL | "should" is dropped in two places. "Automated test processes should create..." became "প্রতিটা stack-এর জন্য অনন্য নামের resource বানাবে". "It should extract and validate..." became "এটা ... যাচাই করবে". Both now read as a statement of what happens. Other lines use "উচিত". Fix: "বানানো উচিত" and "যাচাই করা উচিত". The rest matches. Left out: none. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel. Nothing left out. |
| Common mistakes | Bangla | PASS | Matches the Technical panel on each point, with the limits kept (must, should avoid, by default, only). Nothing added. Left out: none. |
| What a tester can check | Layman | PASS | Word for word the same as the Technical panel. Nothing left out. |
| What a tester can check | Bangla | PASS | The callout title is kept and all 12 advice lines match. No fact added. Left out: none. |

Open FAILs after round 6: 2

Changed after this round: Try it and How a tester uses it, Bangla: the Bangla lines dropped "should" in three places (a handler should extract and validate data, automated test processes should create uniquely named resources, and the handler bullet of How a tester uses it). They now use "উচিত", as the Technical panel does. A script over the three panels found no other place where "should", "might", "typically", "may", or "can potentially" lost its Bangla word. The Layman and Bangla panels of Try it got the same changes as the Technical panel.

## Round 7 (2026-11-19)

# Voices fact check: devops / aws-data-serverless (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The text is word for word the same as the Technical panel, so it adds no fact and the cites are the same. Left out: nothing. It is not simpler than the Technical panel, but this check is about facts only. |
| What it is | Bangla | PASS | Every sentence has the same meaning and the same cite as its Technical sentence. Limits are kept ("automatically", "only"). Left out: nothing. |
| How it works | Layman | PASS | Same text as the Technical panel, in all paragraphs. I compared it by reading, and the prose and the code of the panels match. Left out: nothing. |
| How it works | Bangla | PASS | All sentences match the Technical panel in number, scope, and limit ("by default", "must", "typically", "might"). The Bangla of "Provisioned concurrency pre-initializes environment instances" says "কিছু" (some), which is a small extra word and does not change the meaning. Left out: nothing. |
| Try it | Layman | PASS | Prose and code blocks are the same as in the Technical panel. I checked the code by line pattern: `docker run`, exports, `ddb`, the wait loop, the sort-key check, `docker ps`, the skeleton loop, and the output blocks are at the same offsets. Left out: nothing. |
| Try it | Bangla | PASS | Every paragraph and bullet carries the same facts and cites as the Technical panel. The numbers, versions, the image digest, the `~/.aws` record, and the model outputs agree. The code blocks match the Technical panel. Small point: "একটা test case হলো test-এর একটা এককে" is a grammar slip but the meaning is correct. Left out: nothing. |
| How a tester uses it | Layman | PASS | Same text as the Technical panel, including the uncited own-run sentences. Left out: nothing. |
| How a tester uses it | Bangla | PASS | All 15 bullets match the Technical bullets. Limits are kept ("সবসময়", "সম্ভবত", "এখনো কিছু"). Left out: nothing. |
| Common mistakes | Layman | PASS | Same text as the Technical panel. Left out: nothing. |
| Common mistakes | Bangla | PASS | All 22 bullets match the Technical bullets, with "by default", "must", "may", and "typically" kept. Left out: nothing. |
| What a tester can check | Layman | PASS | The callout is the same as the Technical callout (12 advice lines, with the "Tutorial advice" title). Left out: nothing. |
| What a tester can check | Bangla | PASS | All 12 advice lines and the intro line match the Technical callout in meaning, and the title is kept. Left out: nothing. |

Open FAILs after round 7: 0

Changed after this round: The Bangla text got the same numbers as the Technical text, and one Bangla sentence for the 5,400 seconds.

## Round 8 (2026-11-20)

# Voices fact check: devops / aws-data-serverless (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word for word the same as the Technical panel, so it adds no fact and drops no limit. It is not in plainer words. Nothing left out. |
| What it is | Bangla | PASS | Each sentence matches its Technical sentence, and the cites are the same. Left out: nothing. The words "automatically" and "only" are kept. |
| How it works | Layman | PASS | Word for word the same as the Technical panel. Nothing left out. |
| How it works | Bangla | PASS | Meaning matches the Technical panel for every sentence. The limits are kept: "সবসময়" (always), "by default", "সাধারণত" (typically), "যেকোনো সময়" (at any time). Left out: nothing. |
| Try it | Layman | FAIL | Word for word the same as the Technical panel, and the code blocks are identical. It repeats the unsupported sentence "the page tells you to wait for the status `ACTIVE`" (S14), so it has a cite on a sentence that S14 does not support (see FACTCHECK #216). Fix with #216. Nothing left out. |
| Try it | Bangla | FAIL | Meaning, code blocks and run outputs match the Technical panel. It repeats the unsupported sentence "page বলে `ACTIVE` status-এর জন্য অপেক্ষা করতে" ("the page says to wait for the `ACTIVE` status") with the S14 cite (see FACTCHECK #216). Fix with #216. Left out: nothing. |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel. Nothing left out. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet. The limits are kept: "সবসময়" (always), "সাধারণত" (typically), "এখনো" (not yet). Left out: nothing. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel. Nothing left out. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical bullet and keeps its limits ("by default", "may", "only"). Left out: nothing. |
| What a tester can check | Layman | PASS | Word for word the same as the Technical callout. It adds no fact. Nothing left out. |
| What a tester can check | Bangla | PASS | The callout title and all 12 items match the Technical callout in meaning. It adds no fact. Nothing left out. |

Open FAILs after round 8: 2

Changed after this round: The Layman and Bangla texts of Try it carried the same unsupported sentence, and have the same fix.

## Round 9 (2026-11-20)

# Voices fact check: devops / aws-data-serverless (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word for word the same as the Technical panel, with the same cites (11 lines each). It adds no fact and leaves nothing out. It is not plainer or shorter than the Technical panel. |
| What it is | Bangla | PASS | Each sentence matches the Technical sentence and its cite. Numbers, product names and limits are kept ("single-digit", "automatically" as "নিজে"). Nothing is left out. |
| How it works | Layman | PASS | Word for word the same as the Technical panel, including code, numbers and cites (59 lines each). Nothing is left out. It is not plainer than the Technical panel. |
| How it works | Bangla | PASS | Every sentence follows the Technical one: numbers (৩, ১,৮০০, ৫,৪০০, ১০, ১,০০০, ২০, ৫, ৪৫ days, one year, five minutes), limits ("by default", "only", "typically") and cites are kept. Nothing is left out. I read the Bangla well enough to judge it. |
| Try it | Layman | PASS | Word for word the same as the Technical panel, including all code blocks and run output (418 lines each). Nothing is left out. The uncited sentence "Each needs an AWS account, and each can cost money" is the same open FAIL as row 217. |
| Try it | Bangla | PASS | Code blocks are the same as in the Technical panel. Each sentence keeps the Technical meaning, numbers, run record and cites. Nothing is left out. Row 217 applies here too ("প্রতিটার জন্য AWS account লাগে" has no cite). |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel, with the same cites (18 lines each). Nothing is left out. |
| How a tester uses it | Bangla | FAIL | The timeout bullet adds "আপনার workload-এর জন্য" ("for your workload") to the "upper bounds of what is reasonably expected". The Technical panel does not say this. Fix: drop "আপনার workload-এর জন্য". The other bullets match. Nothing is left out. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel, with the same cites (24 lines each). Nothing is left out. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical one and its cite, with limits kept ("must", "may", "by default"). Nothing is left out. |
| What a tester can check | Layman | PASS | Same callout, title and 12 advice items as the Technical panel. No cites needed. Nothing is left out. |
| What a tester can check | Bangla | PASS | Same callout and the same 12 items. Meaning is kept. Nothing is left out. |

Open FAILs after round 9: 1

Changed after this round: The Bangla bullet "Test timeouts with realistic data" said "for your workload" (আপনার workload-এর জন্য), which the Technical text does not say (its quote has the words, and the Technical text leaves them out). The Bangla text no longer says it. The Layman and Bangla texts of step 6 have the same two new sentences as the Technical text.

## Round 10 (2026-11-20)

# Voices fact check: devops / aws-data-serverless (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | A word-for-word copy of the Technical panel, with the same cites. No fact is added or changed, and nothing is left out. It is not in plainer words, but the rule checks facts only. |
| What it is | Bangla | PASS | Every sentence has the same meaning, numbers, names and cites as the Technical panel. Qualifiers are kept ("automatically" as নিজে, "only" as শুধু). Left out: nothing. |
| How it works | Layman | PASS | A word-for-word copy of the Technical panel, with the same cites and the same code. Nothing is left out. |
| How it works | Bangla | PASS | The meaning matches the Technical panel sentence by sentence. Qualifiers are kept: "always" as সবসময়, "by default" as by default, "typically" as সাধারণত, "must" as হয়/হবে, "only" as শুধু, "potentially" as সম্ভবত. The one small change: "pre-initializes environment instances" becomes "কিছু environment instance" (adds "some"), which adds no fact. Left out: nothing of substance. |
| Try it | Layman | PASS | A word-for-word copy of the Technical panel, including all three code blocks and run outputs, with the same cites. The Technical FAIL in row 246 is repeated in the same words, so the Layman panel adds nothing new. Nothing is left out. |
| Try it | Bangla | PASS | Every sentence, number, name and cite matches the Technical panel. The code blocks and output blocks are the same as in the Technical panel (22 distinctive lines each occur 3 times in the file). The `mock` and `context` heading claim is repeated as in the Technical panel, so the Technical FAIL (row 246) applies here too. Left out: nothing. |
| How a tester uses it | Layman | PASS | A word-for-word copy of the Technical panel, with the same cites. Nothing is left out. |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel. Limits are kept: "always" as সবসময়, "some of the enhancements" as কিছু উন্নতি. The "So a test can pass on a reused environment..." and "A local run therefore cannot show..." sentences are carried over without new facts. Left out: nothing. |
| Common mistakes | Layman | PASS | A word-for-word copy of the Technical panel, with the same cites. Nothing is left out. |
| Common mistakes | Bangla | PASS | Every item has the same meaning and cites as the Technical panel. "must" is kept (উল্লেখ করতেই হয়), and "By default" is kept. Left out: nothing. |
| What a tester can check | Layman | PASS | A word-for-word copy of the callout, with the same title and the same 12 items. Nothing is left out. |
| What a tester can check | Bangla | PASS | The intro sentence and all 12 items carry the same advice as the Technical panel. No tool fact is added. Left out: nothing. |

Open FAILs after round 10: 0

Changed after this round: No FAILs. The Layman and Bangla texts have the same two sentences as the Technical text.

## Round 11 (2026-11-20)

# Voices fact check: devops / aws-data-serverless (round 11)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. No fact is added or changed, and no detail is left out. It is not plainer than the Technical panel. |
| What it is | Bangla | PASS | Faithful translation, sentence by sentence, same cites. Nothing added. Nothing left out. Limits are kept ("automatically", "only for the queries"). |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel (all code and cites the same). No fact added or dropped. It is not plainer. |
| How it works | Bangla | PASS | All sentences match the Technical panel in number, scope and limit ("always", "by default", "typically", "at any time", "only", "potentially"). Nothing added. Nothing left out. |
| Try it | Layman | PASS | Word-for-word copy of the Technical panel. The code blocks and run output are the same, and the cites are the same. Nothing left out. It is not plainer. |
| Try it | Bangla | PASS | Prose is a faithful translation, with the same cites on the same facts. Code blocks, commands and run output are identical to the Technical panel. Numbers and values are the same (780 MB, 3.3.2, 674670 and 224890 bytes, ports, dates). Nothing added. Nothing left out. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel with the same cites. Nothing left out. It is not plainer. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet and carries the same cites. "always" in the GSI bullet is kept. Limits are kept ("might", "typically"). Nothing added. Nothing left out. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel with the same cites. Nothing left out. It is not plainer. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical bullet. Limits are kept ("by default", "may affect", "must"). Same cites. Nothing added. Nothing left out. |
| What a tester can check | Layman | PASS | Word-for-word copy of the callout. Same 12 advice items. Nothing added or left out. |
| What a tester can check | Bangla | PASS | Translation of the same callout and the same 12 items. No tool fact added. Nothing left out. |

Open FAILs after round 11: 0

Open FAILs: 0
