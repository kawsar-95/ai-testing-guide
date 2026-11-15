# Voices fact check: devops / gitops

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (3 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / gitops (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Three changes against the Technical panel. (1) It drops the "enforces immutability, versioning" part of claim 3 and keeps only "full version history". (2) It turns "continuously observe actual system state and attempt to apply the desired state" into "keep checking that the real system matches it". That drops the attempt to apply, and "matches" is stronger than "attempt". (3) It says Argo CD and Flux are tools "that do this". This gives both tools the whole GitOps behaviour in sentences 1 and 2. The Technical panel gives Argo CD only "declarative, GitOps continuous delivery tool" and Flux only "keeping clusters in sync with sources of configuration". It also drops the OpenGitOps definition, the word "automatically", and the "must" in the declarative principle. The cites are placed correctly. |
| What it is | Bangla | FAIL | I can read it. It has the same meaning as the Layman panel, so it has the same three problems. "পূর্ণ version history রাখেন" drops immutability and versioning. "বারবার দেখে" ("keeps checking") drops the attempt to apply the desired state, and "মিলছে কি না" ("whether it matches") changes the meaning. "এমন দুটি টুল" ("two such tools") makes both tools do all of the described behaviour. The OpenGitOps definition, "automatically" and "must" are also missing. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / gitops (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All 7 sentences carry the same facts and the same cites (1, 1, 1, 1, 1, 2, 3) as the Technical panel. Nothing is added, dropped, or changed in strength. The changes are only wording: "the desired state", "it keeps a complete version history", and "like Git repositories". |
| What it is | Bangla | PASS | I could read every sentence. Each one matches the Technical panel in meaning and in cite. "অবশ্যই" matches "must". "স্বয়ংক্রিয়ভাবে" matches "automatically". "ক্রমাগত" matches "continuously". Product names and technical terms stay in English. The Argo CD and Flux sentences keep cites 2 and 3. Nothing is added or dropped. |

Open FAILs after round 2: 0

I read only the files in this folder.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / gitops (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates a Technical sentence, and each cite is on the same fact. "By themselves" matches "automatically". "Keep watching" matches "continuously observe". "Must" is kept. Left out: "attempt" is kept, but "declarations" is reduced to "declared desired state". "Argo CD" and "Flux" are both described as in the Technical panel. |
| What it is | Bangla | PASS | Each sentence matches a Technical sentence, and each cite is on the same fact. "অবশ্যই" keeps "must". "নিজে থেকেই" matches "automatically". "ক্রমাগত" matches "continuously". "চেষ্টা করে" matches "attempt". I could read all the sentences well. Small drift: "community-focused education" became "কমিউনিটির জন্য শিক্ষামূলক উপকরণ" ("educational materials for the community"). The meaning is close, so I did not mark it a FAIL. Left out: the word "complete" is kept, and "declarations" is rendered as "ঘোষণা করা desired state". |

Open FAILs after round 4: 0

Not checked: I did not read the rest of S2 and S3. I only searched for the cited sentences, and the grep for the Flux sentence returned a line cut. I checked it with a second multiline search.

Changed after this round: Bangla: "community-focused education" is now "কমিউনিটি-কেন্দ্রিক শিক্ষা" (the checker passed the earlier wording and noted a small drift).

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / gitops (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence, and each cite is on the same fact. "By themselves" matches "automatically", and "keep watching" matches "continuously". The "must" limit is kept. Left out: nothing of substance. The Technical text says "declarations" and "(like Git repositories)" as a parenthetical, and Layman keeps the same content. |
| What it is | Bangla | PASS | I can read it well enough to judge it. Each sentence matches the Technical sentence and keeps the meaning: "অবশ্যই" for "must", "নিজে থেকেই" for "automatically", "ক্রমাগত" for "continuously", and "চেষ্টা করে" for "attempt". Cites are on the matching facts. Left out: nothing of substance. |

Open FAILs after round 5: 0

I have not read S2 beyond the one Argo CD sentence. The Argo CD and Flux claims rest on those quoted lines only.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-15)

# Voices fact check: devops / gitops (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | "the whole system is described in files" is wrong. The Technical panel says "described declaratively", not "in files". Also "stored so that it cannot be changed in place" is an added explanation of "enforces immutability". Left out: "continuous delivery" is kept, but "in one or more Git repositories" becomes "what one or more Git repositories say" (the same meaning). |
| What it is | Bangla | PASS | Read and judged by meaning. Same facts, including "অবশ্যই" for "must". Left out: "implementing" in the OpenGitOps definition. |
| How it works | Layman | PASS | Same facts and the same diagram. Left out: "continuously" monitoring, "live" and "target" state, "API" in "API server", "manifests", "version selectors", the "Healthy" detail on "all resources", and "tend to be" (now "usually"). |
| How it works | Bangla | PASS | Same facts, diagram and tables. Left out: nothing beyond small wording. The panel keeps "automatically বা manually" and "সাধারণত" for "tend to be". |
| Try it | Layman | PASS | Same commands and facts. Left out: "command-line" in "kubectl command-line tool", "API" in "API server", "no Kubernetes resources", "server-side" detail, and the word "default" for the namespace. "without opening it to others" is a slight loosening of "without exposing the service" but is not a new fact. |
| Try it | Bangla | PASS | Same facts and commands. Nothing added. Left out: nothing beyond small wording. |
| How a tester uses it | Layman | PASS | Same facts. Left out: "validation" (now "check"), "audit trails" (now "record"), "configuration" (now "setup"), "essential" (now "key"). "people can review" copies the Technical sentence, which has no cite (FactCheck row 60). |
| How a tester uses it | Bangla | PASS | Same facts and the same YAML. Nothing added. |
| Common mistakes | Layman | FAIL | "when you sync only some resources" defines "selective sync", and the Technical panel does not. "the same commit and settings" changes "parameters" to "settings". "You need a new commit" copies the unsupported claim in FactCheck row 67. Left out: "automated sync" detail in "With self-heal". |
| Common mistakes | Bangla | PASS | Read and judged by meaning. Same facts. "একই commit আর parameter" keeps "parameters". Nothing added. |
| What a tester can check | Layman | PASS | Same six items under the same callout title. "folder" replaces "path", which is a small loosening, and "who hears about it" replaces "who is told". Left out: nothing else. |
| What a tester can check | Bangla | PASS | Same six items under the same callout title. Nothing added. |

Open FAILs after round 6: 2

Changed after this round: Both FAILs were fixed in the Layman panel: "described declaratively", "immutable and versioned", "during a selective sync", and "the same commit and parameters"; the retry sentence follows the new Technical one in all panels.

## Round 7 (2026-11-15)

# Voices fact check: devops / gitops (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites match. Left out: "(like Git repositories)" is kept; the "must" in "A system managed by GitOps must have..." is turned into "The desired state of the system must be written down declaratively", which keeps the limit. |
| What it is | Bangla | PASS | Facts, cites and the limits ("অবশ্যই", "ক্রমাগত") match the Technical panel. Nothing is added. |
| How it works | Layman | FAIL | The Automated sync default cell, "Off: a new application has no sync policy", carries cite 5, and S5 does not say it (see factcheck row 19). The other sentences match the Technical panel. Left out: "continuously" is kept; "API server" becomes "Argo CD server"; the details "reports" and "visualizes" become "shows"; the "Argo CD detects" subject is dropped from the automated sync row. |
| How it works | Bangla | FAIL | Same unsupported cite 5 on "বন্ধ: নতুন application-এর কোনো sync policy থাকে না". The rest matches the Technical panel. Left out: no details beyond those in the Layman note. |
| Try it | Layman | PASS | Facts, commands and cites match the Technical panel. Left out: "command-line" before `kubectl`; "API" in "API server" (now "the server"); "latest" and "self-signed" are kept; "status" after "health". |
| Try it | Bangla | PASS | Facts, commands and cites match the Technical panel. I can read the Bangla well enough to judge it. Left out: nothing beyond small wording. |
| How a tester uses it | Layman | PASS | Facts and cites match the Technical panel. Left out: "audit trails" becomes "a record of application events and API calls"; "configuration drift" becomes "drift in the setup"; the word "validation" becomes "check". The meaning is not stronger. |
| How a tester uses it | Bangla | PASS | Facts and cites match the Technical panel. Nothing is added; the limits ("প্রায়ই", "যেকোনো") are kept. |
| Common mistakes | Layman | FAIL | "Without self-heal, the application shows as OutOfSync" carries cite 2, and S2 does not mention self-heal (see factcheck row 61). The other bullets match the Technical panel. Left out: "exponential backoff" becomes "wait longer each time"; "always" is kept for the manual sync. |
| Common mistakes | Bangla | FAIL | Same unsupported cite 2 on "self-heal না থাকলে application OutOfSync দেখায়". The other bullets match the Technical panel and keep "সবসময়", "default-ভাবে" and "exponential backoff". |
| What a tester can check | Layman | PASS | The callout says it is the tutorial's own advice, and it gives no new tool fact. Left out: "path" becomes "folder", a small change of wording. |
| What a tester can check | Bangla | PASS | The callout says it is the tutorial's own advice, and it gives no new tool fact. Nothing is added. |

Open FAILs after round 7: 4

Not checked: the exact wording of S6's `prune` and `allowEmpty` YAML options (the page does not use them), and the remaining text of S7 sync waves.

Changed after this round: The 4 FAILs were the same two cites in the Layman and Bangla panels; they were fixed with the fact fixes above, in all three panels.

## Round 8 (2026-11-15)

# Voices fact check: devops / gitops (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. Left out: "community-focused" is shortened to "for the community". "Enforces" immutability becomes "is immutable and versioned", which is slightly softer but still faithful. "Observe actual system state" becomes "keep watching". "Continuously" is kept. |
| What it is | Bangla | PASS | Meanings match the Technical panel, including "must" (অবশ্যই). Left out: nothing of substance. |
| How it works | Layman | PASS | Facts match the Technical panel, and the diagram is identical to it. Left out: "continuously" (kept as "keeps watching"), "live state/target state" terms, "reports", and "local" in Kustomization. The diagram's Flux/OutOfSync problem (fact row 19) and the "Off by default" problem (row 20) are inherited from the Technical panel. |
| How it works | Bangla | PASS | Facts match the Technical panel and the code and diagram are identical. Nothing was added. The inherited problems are as in the Layman note. |
| Try it | Layman | PASS | Facts and commands match the Technical panel. Left out: "command-line" for `kubectl`, "API" in "API server", and "server-side" wording is not present. "Without exposing the service" becomes "without opening it to others", which has the same meaning. |
| Try it | Bangla | PASS | Facts and commands match the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Facts match the Technical panel. Left out: "audit trails" becomes "a record", "configuration" becomes "setup", and "validation" becomes "the check". The "A hook is often a Job" problem (row 52) is inherited from the Technical panel. |
| How a tester uses it | Bangla | PASS | Facts match the Technical panel and the YAML is identical. Nothing was added. The inherited problem is as in the Layman note. |
| Common mistakes | Layman | PASS | Facts match the Technical panel. "Exponential backoff" is rendered as "wait longer each time", which is the same idea. Left out: the words "exponential backoff" and "selective sync operation" (shortened to "selective sync"). |
| Common mistakes | Bangla | PASS | Facts match the Technical panel. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Same seven advice items as the Technical panel. "Path" becomes "folder", and "who is told" becomes "who hears about it". Both keep the meaning. |
| What a tester can check | Bangla | PASS | Same advice as the Technical panel, with the callout title and the "tutorial's own advice" line kept. Left out: nothing of substance. |

Open FAILs after round 8: 0

Changed after this round: No FAIL in this round. The voices were changed with the fact fixes above.

## Round 9 (2026-11-15)

# Voices fact check: devops / gitops (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and the cites match. Left out: "managed by GitOps" in Declarative; "enforces" immutability becomes "is immutable"; "continuously" becomes "keep watching". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. Left out: "enforces" (immutability and versioning "নিশ্চিত হয়" is kept in the table). Nothing is added. |
| How it works | Layman | PASS | Facts match the Technical panel. Left out: "continuously" monitors; "reports and visualizes" becomes "shows"; the tool-level detail "API server" becomes "server". The diagram and the commands are identical. |
| How it works | Bangla | PASS | Meaning matches the Technical panel. The diagram and the commands are identical. Nothing is added. |
| Try it | Layman | FAIL | Step 6 repeats "The UI is then at `https://localhost:8080`" under Cite 5. S5 says the API server is at that address, not the UI. Other details left out: "command-line" for kubectl; "API server" becomes "server". |
| Try it | Bangla | FAIL | Step 6 "তখন UI থাকে `https://localhost:8080`-এ" has the same problem. S5 says the API server is there, not the UI. Everything else matches the Technical panel. |
| How a tester uses it | Layman | PASS | Facts match the Technical panel. Left out: "audit trails" becomes "a record"; "Argo CD can notify you" becomes "can tell you"; "enforces immutability" is dropped. |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. Nothing is added. |
| Common mistakes | Layman | PASS | Facts match the Technical panel. Left out: the name "exponential backoff" becomes "wait longer each time". |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel. Nothing is added or made stronger. |
| What a tester can check | Layman | PASS | Same advice as the Technical panel. "path" becomes "folder". |
| What a tester can check | Bangla | PASS | Same advice as the Technical panel. Nothing is added. |

Open FAILs after round 9: 2

Changed after this round: Both FAILs (the UI address in the Layman and Bangla panels) were fixed with the fact fix above.

## Round 10 (2026-11-15)

# Voices fact check: devops / gitops (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites match. Left out: "managed by GitOps", "enforces" immutability, "declarations", "attempt to" (it keeps "try to"). |
| What it is | Bangla | PASS | The meaning matches the Technical panel and the cites are on the same facts. Left out: the same small details as the Layman panel. |
| How it works | Layman | FAIL | The Self-heal row says "when someone changes the cluster". The Technical panel says only "when the live cluster's state deviates from the state in Git". "Someone" adds an actor. Fix: "when the cluster no longer matches Git". Left out: "continuously", "reports", "API server" renamed "server", "Healthy" shortened to "everything is Healthy", "version selectors" shortened to "which version", the Argo CD "annotation" wording. |
| How it works | Bangla | PASS | Meaning, defaults, commands and cites match the Technical panel. Code blocks are identical. Left out: nothing of weight. |
| Try it | Layman | PASS | Facts match the Technical panel (the "laptop" wording is carried over from it). "Without opening it to others" is close to "without exposing the service". Left out: "command-line" on kubectl, "kubeconfig" wording, "Kubernetes resources" shortened to "something". Code blocks are identical. |
| Try it | Bangla | PASS | Meaning matches and the code blocks are identical. Left out: nothing of weight. |
| How a tester uses it | Layman | PASS | Facts match the Technical panel. "Record" stands for "audit trails". "Setup" stands for "configuration". "Key check" stands for "essential check". The YAML is identical. Left out: "validation" (it says "check"), "manifests". |
| How a tester uses it | Bangla | PASS | Meaning and cites match. The YAML is identical. Left out: nothing of weight. |
| Common mistakes | Layman | PASS | Facts match. "Wait longer each time" restates "exponential backoff", and the wording is slightly looser. "Files" stands for "manifests". Left out: "always" is kept; "automated" is kept; nothing else of weight. |
| Common mistakes | Bangla | PASS | Meaning, limits ("default-ভাবে", "সবসময়") and cites match. Left out: nothing of weight. |
| What a tester can check | Layman | PASS | It is the same tutorial advice and adds no tool fact. "Folder" stands for "path". "Who hears about it" stands for "who is told". |
| What a tester can check | Bangla | PASS | It is the same advice with the same meaning. Left out: nothing of weight. |

Open FAILs after round 10: 1

The first table has 2 open FAILs, in rows 37 and 61. I cannot name a fix for row 37 except to reword it to "local computer". Row 61 needs the "So..." sentence dropped.

Changed after this round: The FAIL was fixed: the Layman self-heal row says "when the cluster no longer matches Git", with no actor.

## Round 11 (2026-11-15)

# Voices fact check: devops / gitops (round 11)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same facts as the Technical panel. "Education for the community" is a fair plain form of "community-focused education". Left out: "A system managed by GitOps", "declarations", and "continuous delivery". |
| What it is | Bangla | PASS | Meaning matches. Left out: the same details as the Layman panel. |
| How it works | Layman | FAIL | Self-heal row: "Without it, changes made in the cluster do not start a sync". The Technical panel says "do not trigger an automated sync". Dropping "automated" makes the claim stronger and wrong, because a manual sync is still possible. Other differences are fine: "files" for manifests, "passed" for succeeded, "usually" for "tend to be". Left out: "reports", "visualizes", "Kubernetes controller" wording, and "live state". |
| How it works | Bangla | PASS | Self-heal keeps "automated sync চালু করে না". All rows, hooks, and Flux definitions match the Technical panel. Left out: the "continuously" wording is kept, but "visualizes" is shortened to "দেখায়". |
| Try it | Layman | PASS | Matches. "Without opening it to others" is a plain paraphrase of "without exposing the service", but it adds "to others", which is a small risk. Left out: "command-line" for kubectl, and "self-signed certificate" is kept. Also left out: "Optional" is kept, and "kubectl apply" is kept. |
| Try it | Bangla | PASS | Matches the Technical panel. Code blocks are identical. Left out: nothing of substance. |
| How a tester uses it | Layman | FAIL | "Argo CD keeps a record of application events and API calls <Cite 2>" repeats the Technical claim that S2 does not support (S2 only says "auditable"). So this cite sits on a sentence that its source does not support. The rest matches. Left out: "validation" (becomes "check"), "essential" (becomes "key"), and "notify". |
| How a tester uses it | Bangla | FAIL | "Argo CD application event আর API call-এর audit trail রাখে <Cite 2>" has the same unsupported claim and cite. The rest matches. Left out: the "tend to be" wording is shortened to "সাধারণত". |
| Common mistakes | Layman | PASS | Matches. "Wait longer each time" is a plain form of "exponential backoff". Left out: "exponential", "manifests", and "resources" (becomes "things"). |
| Common mistakes | Bangla | PASS | Matches. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Same list as the Technical panel. "Folder" stands for "path". Left out: nothing. |
| What a tester can check | Bangla | PASS | Same list and same framing. Left out: nothing. |

Open FAILs after round 11: 3

Changed after this round: The 3 FAILs were fixed: the Layman self-heal row says "do not start an automated sync", and the audit-trail sentence follows the new Technical one in the Layman and Bangla panels.

## Round 12 (2026-11-15)

# Voices fact check: devops / gitops (round 12)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and the cites match. Left out: the phrase "structured, standardized" is shortened to "structured, standard". "Enforces" immutability becomes "is immutable". The text drops "attempt to" nowhere. The code and table shapes are the same. |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Left out: nothing of substance. "Must" is kept as "অবশ্যই". |
| How it works | Layman | PASS | The meaning matches. Left out: "continuously" is changed to "keeps watching", which is the same meaning. "Tend to be" becomes "is usually", which is a little stronger but still true. The "reports and visualizes" wording is shortened to "shows". The "such as credentials and version selectors" detail is changed to "which version". The diagram and the commands are the same as in the Technical panel. |
| How it works | Bangla | PASS | The meaning matches. Left out: "continuously" appears as "ক্রমাগত", so it is kept. "Tend to be" becomes "সাধারণত", which is slightly stronger but acceptable. The diagram and the commands are the same as in the Technical panel. |
| Try it | Layman | PASS | The meaning matches, and the commands are the same as in the Technical panel. Left out: "command-line" before `kubectl`, and "the default namespace of". The plain wording "connects you to the API server without opening it to others" restates "without exposing the service". It is a looser paraphrase but it adds no new fact. "Nothing was created in Kubernetes" restates "no Kubernetes resources were created". |
| Try it | Bangla | PASS | The meaning matches, and the commands are the same as in the Technical panel. Left out: nothing of substance. "সর্বশেষ version" matches "latest version". |
| How a tester uses it | Layman | PASS | The meaning matches, and the YAML is the same as in the Technical panel. Left out: "essential" becomes "key", and "validation" becomes "the check". "Hook resource" becomes "the hook". "Configuration" becomes "setup". These are plain-word changes, not new facts. |
| How a tester uses it | Bangla | PASS | The meaning matches, and the YAML is the same as in the Technical panel. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | The meaning matches. Left out: "wait longer each time" is a plain explanation of "exponential backoff", with the same meaning. "Combination of commit and application parameters" is shortened. "Manifests" becomes "files". "The initial admin secret" becomes "the first admin password secret". |
| Common mistakes | Bangla | PASS | The meaning matches. Left out: nothing of substance. "Always" is kept as "সবসময়". "Exponential backoff" is kept. |
| What a tester can check | Layman | PASS | The Layman panel gives the same advice as the Technical panel. Left out: "path" is changed to "folder", which is a plain-word change. "Who is told" becomes "who hears about it". |
| What a tester can check | Bangla | PASS | The Bangla panel gives the same advice as the Technical panel and keeps the callout title. Left out: nothing of substance. |

Open FAILs after round 12: 0

Not checked: I did not read S1–S8 in full. I read the passages that the claims cite. I judged the Bangla by meaning, and I could read all of it. A few "PASS" rows (the diagram, row 19, and the "new commit" advice, row 68) rest on a fair reading of the source and not on a word-for-word quote.

Open FAILs: 0
