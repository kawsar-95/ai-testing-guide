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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-16)

# Voices fact check: devops / docker-basics (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "so you can run more apps on fewer machines" changes "less infrastructure" (Technical and S2) to "fewer machines". That is a different noun. Left out: "lightweight"; "all of the" before "files". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Cites match. Nothing is added. Left out: nothing of note. |
| How it works | Layman | PASS | Facts and cites match. Left out: "Docker API" wording; "(assuming default registry)" detail; "all" before "files created" in the container-layer sentence; "immutable" for the image layers; "(\"Docker Hub by default\")" is only in the diagram, which is the same as in the Technical panel. Code block is identical. |
| How it works | Bangla | PASS | Facts and cites match. Code block is identical. Left out: nothing of note. |
| Try it | Layman | PASS | Facts and cites match. Code blocks are identical. Left out: "one or more" for stop and rm; "Docker Engine" and "as a default" for `:latest`; the 'exits' wording became 'stops'; "Right after" is a small added timing word, but it agrees with "until you follow the post-installation steps". |
| Try it | Bangla | PASS | Facts and cites match. Code blocks are identical. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | Facts and cites match. "Playwright recommends" restates "is recommended" from the Playwright docs (S19). "detailed" restates "low-level". Left out: "open source" shown, but "RFC3339Nano" kept; "should be installed" became "you install it yourself" (not stronger). Code block is identical. |
| How a tester uses it | Bangla | FAIL | "Playwright package image-এ থাকে না, এটা আলাদা করে install করতে হয়" says the package "has to" be installed separately. The Technical panel and S19 say "should be installed separately". The limit "should" became a stronger "must". The rest matches. Code block is identical. |
| Common mistakes | Layman | PASS | Facts and cites match. Left out: "or tests" in the Playwright version-match item ("your project" only); "browser executables" became "the browsers"; "Docker Engine" and "as a default" for `:latest`. |
| Common mistakes | Bangla | PASS | Facts and cites match. Left out: "or tests" in the Playwright item is kept; nothing else of note. |
| What a tester can check | Layman | PASS | Same six items, with the callout title and intro kept. Small change: "the time window of a failure" became "the time when a test failed". It adds no tool fact. |
| What a tester can check | Bangla | PASS | Same six items, with the callout title and intro kept. No added fact. |

Open FAILs after round 6: 2

Skipped: I did not read S2, S4, S7 and S19 in full; I used grep hits for those. The tutorial's own run records (date, version, output blocks) are marked N/A because no file in `pages/` can confirm them.

Changed after this round: Both FAILs were fixed: the Layman panel says "less infrastructure" (S2's words), not "fewer machines", and keeps "lightweight"; the Bangla panel says that the Playwright package "should" be installed separately (উচিত), not that it has to be.

## Round 7 (2026-11-16)

# Voices fact check: devops / docker-basics (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. The wording is plainer ("building" for "developing", "computer" for "host"). Left out: "everything needed" wording is kept. Left out: "be sure that" in the sharing sentence. |
| What it is | Bangla | PASS | Every sentence matches the Technical panel. The meaning is the same. Left out: nothing of note. |
| How it works | Layman | PASS | The diagram and code are identical. Left out: "immutable" for the image layers. Left out: "Docker API" requests. Left out: "which includes assigning" wording. Left out: "aspect" (it says "part"). |
| How it works | Bangla | PASS | The diagram and code are identical to the Technical panel. All facts and limits are kept ("default-ভাবে", "সীমিত"). Left out: nothing of note. |
| Try it | Layman | PASS | The code blocks are identical. Left out: "Docker Engine" in the `:latest` sentence. Left out: "as a default". Left out: "one or more" for stop and rm. "message that all is well" restates "confirmation message", and it is slightly loose. |
| Try it | Bangla | PASS | The code blocks are identical. It keeps "default হিসেবে", "এক বা একাধিক" and the `sudo` limit. Left out: nothing of note. |
| How a tester uses it | Layman | FAIL | "The Playwright package itself is not in the image; you install it yourself" drops "should" from "should be installed separately". It turns a recommendation into a plain statement, which is stronger than S19. Fix: "…and should be installed separately." Other sentences pass. Left out: "lightweight" is kept; "low-level" becomes "detailed". |
| How a tester uses it | Bangla | PASS | "উচিত" keeps the "should". All facts match. Left out: nothing of note. |
| Common mistakes | Layman | PASS | All facts match. Left out: "browser executables" becomes "the browsers". Left out: "Docker Engine" and "as a default". |
| Common mistakes | Bangla | PASS | All facts and limits match ("default-ভাবে অনিরাপদ"). Left out: nothing of note. |
| What a tester can check | Layman | PASS | The callout is the same advice with plainer words ("open" for "publish"). It adds no fact. |
| What a tester can check | Bangla | PASS | The six bullets match the Technical advice. It adds no fact. |

Open FAILs after round 7: 1

I only grepped S5–S19 and checked the matches. I did not read those files in full. I did not check whether `docker ps` is listed as an alias on the S11 page.

Changed after this round: The FAIL was fixed: the Layman panel says that you "should install it separately", keeping S19's "should". The Layman `docker inspect` sentence also keeps "low-level".

## Round 8 (2026-11-16)

# Voices fact check: devops / docker-basics (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact and cite matches the Technical panel. Left out: "loosely isolated" is kept as "loosely separated"; "you can share containers and be sure" becomes "everyone gets the same container"; the word "instance" is dropped from "runnable instance". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: "be sure" is kept as "নিশ্চিত থাকতে পারেন", so nothing is lost there. Nothing is added. |
| How it works | Layman | PASS | Meaning and cites match. Left out: "configured" before registry; "immutable" for the image layers; "Docker API" requests; "a technology" is kept. "Nothing outside the host can reach them" is a plain restatement of "not accessible from outside the host". The diagram and code are identical to the Technical panel. |
| How it works | Bangla | PASS | Meaning and cites match. Nothing is added. The diagram is identical to the Technical panel. I can read the Bangla well enough to judge it. |
| Try it | Layman | PASS | Facts and cites match. Left out: "one or more" for stop and rm; "Docker Engine" and "as a default" for `:latest`; "Right after you install" is a plain restatement of "After you install". The code blocks are identical to the Technical panel. |
| Try it | Bangla | PASS | Meaning and cites match. Nothing is added. The code blocks are identical to the Technical panel. |
| How a tester uses it | Layman | PASS | Facts and cites match. Left out: "RFC3339Nano" is kept; "date" becomes "time" for `--since`; "browser executables" is not used here (that is in Common mistakes). "Playwright recommends" restates "is recommended" from the Playwright source. The code block is identical. |
| How a tester uses it | Bangla | PASS | Meaning and cites match. Nothing is added. The code block is identical to the Technical panel. |
| Common mistakes | Layman | PASS | Facts and cites match. Left out: "Docker Engine" and "as a default"; "browser executables" becomes "the browsers"; "after the timeout elapses" becomes "when the wait time is over". None of these makes the claim stronger. |
| Common mistakes | Bangla | PASS | Meaning and cites match. Nothing is added. |
| What a tester can check | Layman | PASS | The six advice items match the Technical panel with plainer words ("open" for "publish", "when a test failed" for "the time window of a failure"). Nothing is added. |
| What a tester can check | Bangla | PASS | The six advice items match the Technical panel. Nothing is added. |

Open FAILs after round 8: 0

Not checked: rows 25 and 28 (How it works, steps 2 and 5) have no exact S1 quote. I only confirmed the surrounding step lines in S1, so treat those two PASS verdicts as weaker than the rest.

Changed after this round: The Layman and Bangla panels of What it is, How it works, Try it, and Common mistakes were rewritten from the new Technical text, with the same cites, and the Key words table follows the new Technical text. Round 9 checks them.

## Round 9 (2026-11-20)

# Voices fact check: devops / docker-basics (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All facts and cites match the Technical panel. Left out: "containerization" is reworded as "putting them into containers". "Provides" becomes "has" for Docker Hub. |
| What it is | Bangla | PASS | Meaning matches sentence by sentence. Cites are the same as in the Technical panel. Nothing of substance is left out. |
| How it works | Layman | PASS | Same facts and cites. Left out: "acts as" is reworded as "works as". "Immutable" is dropped from the image layers in the container-layer sentence. "Nothing outside the host can reach them" means the same as "not accessible from outside the host". The diagram is identical to the Technical one. It has the same problem as claim 34, which is a source problem and not a voice problem. |
| How it works | Bangla | PASS | Meaning matches. The Unix socket, REST, `SIGKILL`-free sentences, ports, and isolation sentences are faithful. Left out: nothing of substance. The diagram is identical to the Technical one. |
| Try it | Layman | PASS | Same facts, cites, and code blocks. Left out: "one or more" for `docker stop` and `docker rm`. "Docker Engine" is dropped from the `:latest` sentence. "A confirmation message" is reworded as "a message that all is well". "Exits" is reworded as "stops". |
| Try it | Bangla | PASS | Same facts, cites, and code blocks. Left out: nothing of substance. Meaning matches, including the `docker` group and `sudo` sentence. |
| How a tester uses it | Layman | PASS | Same facts and cites. Left out: "throwaway" is reworded as "short-lived". "Relative time" is reworded as "time span such as `42m`". "Is recommended" is attributed to Playwright, which is the cited source. The `ubuntu:24.04` sentence is the same. |
| How a tester uses it | Bangla | PASS | Meaning matches. Code block is identical. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Same facts and cites. Left out: the Playwright bullet drops "or tests" and says "browsers" for "browser executables". "Docker Engine" is dropped from the `:latest` sentence. |
| Common mistakes | Bangla | PASS | Meaning matches. Cites are the same. Nothing of substance is left out. |
| What a tester can check | Layman | PASS | Same advice items. Left out: "time window of a failure" is reworded as "the time when a test failed". "Publish" is reworded as "open". No new fact. |
| What a tester can check | Bangla | PASS | Same six advice items, no new fact. Meaning matches. |

Open FAILs after round 9: 0

Changed after this round: No FAILs. The Bangla introduction of the diagram follows the new Technical introduction.

## Round 10 (2026-11-20)

# Voices fact check: devops / docker-basics (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites match. Left out: "containerization" wording ("putting them into containers" is used instead). |
| What it is | Bangla | PASS | Same facts, no additions. Table, VM trade-off and cloud-server claims match the Technical panel. |
| How it works | Layman | PASS | Facts and code are the same as the Technical panel. The diagram is identical. "Opens a port to the outside" and "connects" restate "makes a port available outside the host" and "maps". Left out: "immutable" for the image layers, and "RESTful" does not appear in the Technical sentence either. |
| How it works | Bangla | PASS | Facts, diagram and cites match. Left out: "immutable" in the Container-layer sentence is kept, and nothing is added. |
| Try it | Layman | PASS | Code blocks are identical. Wording is slightly looser: "a message that all is well" for "a confirmation message", "stops" for "exits", and "Right after you install" for "After you install". The "as a default" limit is dropped from the `:latest` sentence, which stays true. Left out: "Engine" in "Docker Engine uses", and "one or more" for `docker stop` and `docker rm`. |
| Try it | Bangla | PASS | Code blocks are identical. Facts and cites match. Nothing is added. |
| How a tester uses it | Layman | PASS | "Short-lived" restates "throwaway". "A time span such as 42m" restates "a relative time". Left out: "date" in `--since`, "browser system dependencies" as exact wording, and "RFC3339Nano" is kept. |
| How a tester uses it | Bangla | PASS | Facts and cites match. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | "Cannot find the browsers" is looser than "unable to locate browser executables", and "your project or tests" is shortened to "your project". Left out: "by default" in the `:latest` sentence (stays true), "Engine". |
| Common mistakes | Bangla | PASS | Facts and cites match. Nothing is added. |
| What a tester can check | Layman | PASS | Same six advice items. "The time when a test failed" is narrower in wording than "the time window of a failure". "Open test ports" restates "publish". |
| What a tester can check | Bangla | PASS | Same six advice items. Nothing is added. |

Open FAILs after round 10: 0

Changed after this round: No FAILs. The Bangla sentence of `docker pull` follows the Technical sentence.

## Round 11 (2026-11-20)

# Voices fact check: devops / docker-basics (round 11)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "containerization" is reworded as "putting them into containers"; the S2 sentence on Docker Hub as a container registry is shortened to "has a container registry". |
| What it is | Bangla | PASS | Meaning is the same as the Technical panel. Product names stay in English. Left out: no detail of substance. |
| How it works | Layman | PASS | Same facts, same cites, same code block. Left out: "one or more" is dropped; the Technical panel's "all files" becomes "the files"; the ports sentence leaves out nothing but the "-p 8080:80" example text, which is kept. The "Nothing outside the host can reach them" wording matches "not accessible from outside the host". |
| How it works | Bangla | PASS | Meaning is the same as the Technical panel. The diagram caption is translated; the code block is identical. Left out: no detail of substance. |
| Try it | Layman | PASS | Same facts, same code blocks. Left out: "Engine" in "Docker Engine uses :latest"; "one or more" for stop and rm. "Right after you install" is a small rewording of "After you install". The "prints a message that all is well" is a plain restatement of "confirmation message". |
| Try it | Bangla | PASS | Meaning is the same as the Technical panel. Code blocks are identical. Left out: no detail of substance. |
| How a tester uses it | Layman | PASS | Same facts and cites. "Playwright recommends" attributes the source's recommendation. Left out: "date" in `--since` ("after a given time"); "lightweight" kept; "RFC3339Nano" kept. |
| How a tester uses it | Bangla | PASS | Meaning is the same as the Technical panel. Code block is identical. Left out: "date" in `--since`; no other detail of substance. |
| Common mistakes | Layman | PASS | Same facts and cites. Left out: "Engine" in "Docker Engine uses"; "browser executables" is reworded as "the browsers". |
| Common mistakes | Bangla | PASS | Meaning is the same as the Technical panel. Left out: no detail of substance. |
| What a tester can check | Layman | PASS | Same six items. Small rewordings: "time window of a failure" becomes "the time when a test failed" (the window is left out; "a failure" is narrowed to "a test failed"); "publish" becomes "open". The panel adds no fact. |
| What a tester can check | Bangla | PASS | Same six items. "Time window" is left out ("a failure's time"). The panel adds no fact. |

Open FAILs after round 11: 0

Open FAILs: 0
