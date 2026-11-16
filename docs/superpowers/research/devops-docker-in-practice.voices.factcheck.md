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

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-16)

# Voices fact check: devops / docker-in-practice (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "every file that a container creates goes into its own writable layer" adds "its own". The Technical panel says only "a writable container layer". S1 says the layer is unique per container, but the Technical panel does not. Fix: "goes into a writable layer". Left out: "among them" is kept; the "no matter which type" limit is kept. Left out: the `--link` option is called "old", not "legacy". |
| What it is | Bangla | PASS | Meaning matches the Technical panel; every cite is on the same fact. Left out: nothing of substance. Product names and flags stay in English. |
| How it works | Layman | PASS | Facts match. Left out: "In general" is turned into "Most of the time" (same strength). Left out: the Technical qualifier "in the container in which files or directories exist" is shortened to "a folder that already has files". The diagram sentence is the same. |
| How it works | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of substance. Code blocks are identical to the Technical panel. |
| Try it | Layman | PASS | Facts match the Technical panel. Code blocks are identical. Left out: "executable" becomes "program"; "user-defined" becomes "that you create". Left out: nothing else. |
| Try it | Bangla | PASS | Meaning matches the Technical panel. Code blocks are identical. The Bangla is readable and consistent. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Facts match. Left out: "UID:GID" becomes "belong to the user"; "more safely" becomes "safer"; "kernel scheduler" becomes "kernel"; the CPU wording is shortened. |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | Facts match the Technical panel. The sentence "The container then gets an empty folder instead of your files" is word for word in the Technical panel (it has no cite there, see FAIL in #81). Left out: "(both dangling and unused)" is kept; "at least one" becomes "no container uses". |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel, including the uncited "empty folder" sentence. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Same list as the Technical callout. The only change is "user-defined network" becoming "network that you create". |
| What a tester can check | Bangla | PASS | Same list and meaning as the Technical callout. Left out: nothing of substance. |

Open FAILs after round 6: 1

I did not run any commands from the page. I judged the Bangla by meaning and read all of it without trouble.

Changed after this round: The FAIL was fixed: the Layman panel says that a file goes into "a writable layer", not into "its own" writable layer.

## Round 7 (2026-11-16)

# Voices fact check: devops / docker-in-practice (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The bind mount "Use it for" cell says "between your computer and a container". The Technical panel says "between a development environment on the Docker host and a container". "Your computer" is a different noun, and the host can be a remote daemon (S3). Fix: "between the Docker host and a container". Also: "find each other by name" for user-defined bridges is not in this section's Technical panel, which says only "automatic DNS resolution between containers". The How it works section gives it. Left out: "persistent" wording, "from the host" in the bind mount definition, "development environment", "legacy" as a label (it says "old"). |
| What it is | Bangla | PASS | All facts match the Technical panel, and the limits ("default-ভাবে", "শুধু") are kept. Left out: nothing of note. |
| How it works | Layman | PASS | All facts match. Left out: "simultaneously", "(copied)", the "tutorial's own picture" claim is kept. "Most of the time" stands for "In general". The `--mount` and `--volume` flags and all code blocks are identical to the Technical panel. |
| How it works | Bangla | PASS | All facts match, and the code blocks are identical. Left out: nothing of note. |
| Try it | Layman | FAIL | Step 2 says "A bind mount puts a folder of your computer into the container". The Technical panel says "a host folder". "Your computer" changes the noun (see What it is). Fix: "a folder of the host". Other changes are fine: "program" for "executable", "stops with an error" for "produces an error", "no limits" for "no resource constraints". Left out: "Docker's own example" detail is kept. Nothing else of note. |
| Try it | Bangla | PASS | Meaning matches the Technical panel for every step, and the code blocks are identical. Left out: nothing of note. |
| How a tester uses it | Layman | PASS | All facts match. Minor note: "makes the container faster" restates "increases the container's performance"; I judged this the same meaning. Left out: "consider" (the Technical panel also omits it), "scheduler" in "kernel scheduler", "local filesystem" (it says "your computer", which is fine for the local machine in `docker cp`), "UID:GID" (it says "belong to the user"). |
| How a tester uses it | Bangla | PASS | All facts match, and the code block is identical. Left out: nothing of note. |
| Common mistakes | Layman | PASS | All facts match. Left out: "straightforward" (it says "easy"), "pre-existing", "prunes" (it says "removes"). |
| Common mistakes | Bangla | PASS | All facts match, including the `docker system prune` lists and flags. Left out: nothing of note. |
| What a tester can check | Layman | PASS | The list is the same as the Technical panel. The only change is "a network that you create" for "user-defined network". |
| What a tester can check | Bangla | PASS | The list is the same as the Technical panel in Bangla. Left out: nothing of note. |

Open FAILs after round 7: 2

Skipped or not checked: the tutorial's own run observations (exit codes 125, 0 and 1, `root` ownership, the stats and df output, Docker Engine 29.9.3) are not in any source. I marked them N/A because the page labels them as the tutorial's own run, so a reviewer who wants them cited should treat them as open. My judgment of the Bangla is based on meaning, and I read it well enough to judge every sentence.

Changed after this round: Both FAILs were fixed: the Layman panels say "the Docker host" and "a folder of the host", not "your computer"; the Layman `docker cp` sentences say "the local file system" and "the local machine"; and the Layman sentence about networks in `## What it is` says only what its Technical panel says, automatic DNS resolution between the containers.

## Round 8 (2026-11-16)

# Voices fact check: devops / docker-in-practice (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Joins the default bridge" matches "attached to". "A bridge network that you create yourself" matches "user-defined bridges". Left out: the table's phrase "persistent" for volumes becomes "that lasts"; "legacy" becomes "old". No added facts. |
| What it is | Bangla | PASS | The meaning matches. The cites are on the same facts. Left out: nothing of substance. |
| How it works | Layman | PASS | Meaning is kept. "Most of the time" matches "in general". "Hides" matches "obscured". "Only for names that you give" matches "only resolves custom names". The code blocks and diagram are identical to the Technical panel. Left out: "propagated" as a term, the "simultaneously" wording, and the word "automatically" in the final sentence of "A volume lives longer...". |
| How it works | Bangla | PASS | The meaning matches every Technical sentence. The code blocks and diagram are identical. Left out: nothing of substance. |
| Try it | Layman | PASS | The record paragraphs are the same. "Program" stands for "executable", and "no limits" for "no resource constraints". Both are fine. The code blocks are identical. Left out: the word "executable" and the term "resource constraints". |
| Try it | Bangla | PASS | Bangla meaning is the same as the Technical panel in every step. The code blocks and output blocks are identical. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Meaning is kept. "Belong to the user who ran `docker cp`" restates "created with the UID:GID of the user". "The host's kernel allows" drops the word "scheduler"; the sentence is still true. Left out: "UID:GID", "scheduler", "available" before "CPU resources". |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. The code block is identical. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | "Gone" restates "won't be persisted" for a removed tmpfs mount. "If you ask" matches "optionally". "All networks that no container uses" matches "not used by at least one container". Left out: the bullet on `readonly` keeps its limit. |
| Common mistakes | Bangla | PASS | Bangla meaning matches. The network phrase "অন্তত একটা container ব্যবহার করছে না" mirrors the source wording. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Same eight tips as the Technical panel. Only change: "one network that you create" for "one user-defined network". No added fact. |
| What a tester can check | Bangla | PASS | Same eight tips, and the callout title and the "tutorial's own advice" statement are kept. No added fact. |

Open FAILs after round 8: 0

I did not check the Bangla grammar beyond meaning. Rows 41 and 70 rest on S7's `docker cp` synopsis (CONTAINER:SRC_PATH DEST_PATH); I saw it only through line matches, not a full read of that block.

Open FAILs: 0
