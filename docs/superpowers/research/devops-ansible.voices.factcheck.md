# Voices fact check: devops / ansible

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / ansible (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1, "Ansible automates work on your servers", drops "open-source", "reduces complexity" and "runs everywhere". It adds "servers"; S1 says "local or remote system" and "virtually any task". Sentence 2, "needs no extra software on the servers it manages", is stronger than the Technical wording. Technical says the design has "low maintenance overhead by avoiding the installation of additional software across IT infrastructure". It does not say "needs no" software, and it does not name "servers it manages". |
| What it is | Bangla | FAIL | It mirrors the Layman panel sentence by sentence, so it has the same problems. "সার্ভারের কাজ স্বয়ংক্রিয় করে" adds "servers" and drops open-source, reduced complexity and runs everywhere. "কোনো বাড়তি সফটওয়্যার বসাতে হয় না" ("no extra software needs to be installed") is stronger than "avoiding the installation of additional software" and drops the "low maintenance overhead" framing. |

Open FAILs after round 1: 2

Note: The reply uses a fixed format, so I judged it unnecessary. Risk: the "needs no" wording is a judgment call. Another reviewer might accept it as equivalent.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / ansible (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 matches the Technical panel word for word, with Cite 1. Sentence 2 says "it keeps the maintenance overhead low by avoiding the installation of additional software across IT infrastructure". This is the same fact as the Technical panel, with Cite 1. No fact is added, dropped, or changed. |
| What it is | Bangla | PASS | Sentence 1 says Ansible gives open-source automation that reduces complexity and "সব জায়গায় চলে" (runs everywhere), with Cite 1. Sentence 2 says the design rests on an agent-less architecture, and maintenance overhead stays low because it avoids installing extra software across IT infrastructure, with Cite 1. The meaning is the same as the Technical panel. Product names stay in English. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / ansible (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 is open-source automation. Sentence 2 (reduces complexity, runs everywhere) is the Technical claim 1 and carries the cite. Sentences 3 and 4 restate Technical claim 2: agent-less, avoids installing additional software across IT infrastructure, so low maintenance overhead. The "so" has the same meaning as the Technical "by avoiding". Left out: "designed around", and the word "architecture" (the panel says "design"). |
| What it is | Bangla | PASS | The meaning matches the Technical panel sentence by sentence. "নকশা agent-less" is "designed ... agent-less". "এড়িয়ে চলে, তাই maintenance overhead কম" is "avoiding ... low maintenance overhead". Left out: "architecture" (the panel says "নকশা", design). I could read all the sentences well enough to judge them. |

Open FAILs after round 4: 0

Not checked: The verdicts rest only on `page.md` and `pages/S1.txt`.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / ansible (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Ansible is open-source automation" restates "provides open-source automation" with the same meaning. "so it has low maintenance overhead" keeps the "by avoiding" link of the Technical sentence. Both cites sit on the right facts. Left out: "designed around", the word "architecture" (the panel says "design"), and the colon structure of the second Technical sentence. |
| What it is | Bangla | PASS | I can read the Bangla. It matches the Technical panel sentence by sentence. "এটা জটিলতা কমায় আর সব জায়গায় চলে" matches "reduces complexity and runs everywhere". "নকশা agent-less" matches "designed around an agent-less architecture". "বাড়তি software install করা এড়িয়ে চলে, তাই maintenance overhead কম" matches "low maintenance overhead by avoiding the installation of additional software". Both cites are correct. Left out: "designed around", the word "architecture", and "provides" (the panel says "হলো", "is"). |

Open FAILs after round 5: 0

Not checked: I did not open any source other than S1, because `page.md` lists only S1. Risk: the lede has no cite, so a later edit could change it with no source tied to it.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-19)

# Voices fact check: devops / ansible (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | This panel is a word-for-word copy of the Technical panel. It adds no fact and the cites match. It is not plainer than the Technical panel, but the rule only fails added or changed facts. Nothing is left out. It repeats the Technical use-case list, which leaves out "Eliminate repetition and simplify workflows". |
| What it is | Bangla | PASS | Every sentence matches the Technical meaning and has the same cite. "এর সাধারণ ব্যবহারের মধ্যে আছে" ("among its common uses are") is not stronger than the Technical sentence. Left out: nothing of substance. The Bangla panel also lacks the fourth use case. |
| How it works | Layman | PASS | This panel is a word-for-word copy of the Technical panel, including cites. It adds nothing and changes nothing. It is not plainer than the Technical panel. Nothing is left out. |
| How it works | Bangla | PASS | All sentences keep the Technical meaning, limits, cites, and code spans. Limits such as "by default", "only", "can", and "most" are kept. Left out: "regardless of how many tasks notify it" (handlers). "performs a syntax check" is left out in the Common mistakes and tester copies, not here. |
| Try it | Layman | PASS | This panel is a word-for-word copy of the Technical panel. The code blocks, run record, cites, and "No page that the tutorial read..." remarks are the same. It adds nothing. It is not plainer than the Technical panel. Nothing is left out. |
| Try it | Bangla | PASS | Prose matches the Technical panel sentence by sentence. The code blocks are the same, including all outputs. Limits are kept: "may have used the network", "typically", "by default", "always win precedence", "thinks". Left out: nothing of substance. I read all of the Bangla and could judge every sentence. |
| How a tester uses it | Layman | PASS | This panel is a word-for-word copy of the Technical panel. The cites match. It adds nothing. It is not plainer than the Technical panel. Nothing is left out. |
| How a tester uses it | Bangla | PASS | The meaning, limits ("Ordinarily" is rendered as "সাধারণত"), and cites match. Left out: "performs a syntax check on the playbook" (the Bangla says only that `--syntax-check` does not run the playbook). |
| Common mistakes | Layman | PASS | This panel is a word-for-word copy of the Technical panel. The cites match. It adds nothing. It is not plainer than the Technical panel. Nothing is left out. |
| Common mistakes | Bangla | PASS | The meaning, limits, and cites match. The uncited sentence about `no-changed-when` has the same weakness as the Technical panel. Left out: "regardless of how many tasks notify it" (handler runs once). |
| What a tester can check | Layman | PASS | This panel is a word-for-word copy of the Technical callout. The "Tutorial advice" title and all twelve bullets are the same. It adds nothing. It is not plainer than the Technical panel. Nothing is left out. |
| What a tester can check | Bangla | PASS | All twelve bullets and the intro keep the Technical meaning. The commands and code spans are the same. "বানানো মান" means made-up values and matches. Left out: nothing of substance. |

Open FAILs after round 6: 0

Changed after this round: No FAIL in round 6. The Layman and Bangla panels got the same changes as the Technical panel (the four use cases, the cite of S35, and the fixes that the writer made after the round).

## Round 7 (2026-11-19)

# Voices fact check: devops / ansible (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is word for word the same as the Technical panel. It adds no fact and leaves out no detail. It is not simpler than the Technical panel. |
| What it is | Bangla | FAIL | "SSH, Powershell remoting আর আরও অনেক transport" means "many more transports". The Technical panel says only "and other transports", so "অনেক" adds a quantity. Fix: use "আর অন্যান্য transport". Everything else matches the Technical panel. Nothing was left out. |
| How it works | Layman | PASS | The panel is word for word the same as the Technical panel. Nothing was left out. All cites match. It is not simpler than the Technical panel. |
| How it works | Bangla | PASS | Each sentence keeps its Technical meaning and cite. The qualifiers "by default", "most", "can", "only" and "usually" are kept. Left out: "so that Ansible receives a string" (octal quoting), "regardless of how many tasks notify it", and the "(default)" detail for `auto`. "মান ধরনের style" is an awkward rendering of "standard styles" but the meaning holds. |
| Try it | Layman | PASS | The panel is word for word the same as the Technical panel. That includes the code blocks, the run record and the cites. Nothing was left out. It is not simpler than the Technical panel. |
| Try it | Bangla | PASS | The panel follows the Technical panel sentence by sentence. The code blocks and outputs are the same. Cites are on the same facts. The run-record sentences and the step 5 "thinks" wording are kept. No facts were added or changed. "মান ধরনের style" is awkward but the meaning holds. No omissions found. |
| How a tester uses it | Layman | PASS | The panel is word for word the same as the Technical panel. Nothing was left out. |
| How a tester uses it | Bangla | PASS | The meaning and cites are kept. The limits "ordinarily" (সাধারণত), "can" and "should" are kept. Left out: in the `--syntax-check` bullet, the "performs a syntax check" half is dropped and only "does not run it" is said. The step 7 line "0 for the two good files and 2 for the bad file" is kept. |
| Common mistakes | Layman | PASS | The panel is word for word the same as the Technical panel. Nothing was left out. |
| Common mistakes | Bangla | PASS | Each bullet keeps the Technical meaning and cite. Limits are kept ("always" as সবসময়, "only", "ordinarily"). Defaults `~/.ansible` and `~/.ansible/tmp` are kept. No omissions found. |
| What a tester can check | Layman | PASS | The callout and all 12 advice items are word for word the same as the Technical panel. No tool fact was added. |
| What a tester can check | Bangla | PASS | All 12 items are rendered with the same meaning. The callout says this is the tutorial's own advice. No fact was added or changed. No omissions found. |

Open FAILs after round 7: 1

Changed after this round: Round 7 had one FAIL: the Bangla panel said "আরও অনেক transport" (many more transports) where the Technical panel said "other transports". The Technical panel now says "numerous other transports", as its source does, and says that Ansible "can" manage machines, and the Bangla panel says the same ("পারে"). The other changes of this round are in both panels.

## Round 8 (2026-11-19)

# Voices fact check: devops / ansible (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. It adds no fact. It is not plainer than the Technical panel. Nothing is left out. |
| What it is | Bangla | PASS | Each sentence keeps the meaning, numbers, names, and cites of the Technical sentence. Left out: nothing of note. "a set of built-in modules and plugins" becomes "কিছু built-in module আর plugin", which is a fair paraphrase. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel, with the same cites. It adds no fact. It is not plainer. Nothing is left out. |
| How it works | Bangla | PASS | Every sentence matches its Technical sentence, and limits such as "by default", "only", "most", "normally", and "ordinarily" are kept. Left out: "regardless of how many tasks notify it" (handlers); "autodetected" is kept. The sentence about checks with `--check` follows the Technical wording, so it carries the same issue as Technical row 145 without adding to it. |
| Try it | Layman | PASS | Word-for-word copy of the Technical panel. I read lines 778-1097 in full. For the rest I checked that the panel has the same line count (543) as the Technical panel, and that 7 sentences from steps 3 to 8 each appear twice, in Technical and Layman. I did not read lines 1098-1320 in full. No added fact found. Not plainer. |
| Try it | Bangla | PASS | I read the whole panel. Code blocks are the same as in Technical. Facts, numbers, file names, and cites match. Sentences about the run are translated faithfully. Left out: the word "customized" in the `success_msg` and `fail_msg` sentence; "autodetected" in the `--project-dir` sentence. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel. It adds no fact. It is not plainer. Nothing is left out. |
| How a tester uses it | Bangla | PASS | Meaning and cites match. Left out: for `--syntax-check`, the Bangla says only that it does not run the playbook and drops "performs a syntax check". The `--check` sentence keeps the Technical wording. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel. It adds no fact. It is not plainer. Nothing is left out. |
| Common mistakes | Bangla | PASS | Every item matches the Technical item in meaning, limits, and cites. Left out: nothing of note. |
| What a tester can check | Layman | PASS | Word-for-word copy of the callout, with the title "Tutorial advice". It adds no fact. |
| What a tester can check | Bangla | PASS | The callout has the same 12 items and the same meaning, and it says the list is the tutorial's own advice. No fact is added. Left out: nothing. |

Open FAILs after round 8: 0

Changed after this round: No FAIL in round 8. The Bangla panel got the same hedge in both sentences ("তার ধারণা অনুযায়ী" and "বলে তার ধারণা হলে").

## Round 9 (2026-11-19)

# Voices fact check: devops / ansible (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is a word-for-word copy of the Technical panel. Every cite matches. Nothing is left out. The text is not plainer than the Technical panel, but it adds no fact. |
| What it is | Bangla | PASS | The meaning matches the Technical panel sentence by sentence, and the cites sit on the same facts. Left out: nothing of note. Product and command names stay in English. |
| How it works | Layman | PASS | The panel is a word-for-word copy of the Technical panel. Every cite matches. Nothing is left out, and no fact is added. |
| How it works | Bangla | PASS | The meaning matches the Technical panel, and the cites match. Left out: "so that Ansible receives a string" (octal quoting); "regardless of how many tasks notify it" (handler runs once); "Ansible-specific" appears but "gradually" and similar limits are kept. Wording: "অনির্ভরযোগ্য" for "unpredictable" is slightly different ("unreliable"); "অনির্ধারিত" would be closer. I judge it not a changed fact. "মান ধরনের style" for "standard styles" is awkward but readable. |
| Try it | Layman | PASS | The panel is a word-for-word copy of the Technical panel. The code blocks and outputs are identical. Every cite matches. No fact is added. |
| Try it | Bangla | PASS | The meaning matches the Technical panel. The code blocks and outputs are identical to the Technical panel. The cites are on the same facts. Left out: nothing of note. The "three variables" count and the own-run statements are the same as in the Technical panel. |
| How a tester uses it | Layman | PASS | The panel is a word-for-word copy of the Technical panel. Every cite matches. No fact is added. |
| How a tester uses it | Bangla | PASS | The meaning matches the Technical panel and the cites match. Left out: "but does not execute it" is shortened to "playbook চালায় না" for `--syntax-check`; the meaning is kept. No fact is added. |
| Common mistakes | Layman | PASS | The panel is a word-for-word copy of the Technical panel. Every cite matches. No fact is added. |
| Common mistakes | Bangla | PASS | The meaning matches the Technical panel and the cites match. Left out: "so that Ansible receives a string" is kept; no limit is dropped. No fact is added. |
| What a tester can check | Layman | PASS | The panel is a word-for-word copy of the Technical panel callout "Tutorial advice". It has no cites and gives no tool fact. |
| What a tester can check | Bangla | PASS | The panel is a faithful Bangla version of the callout. It says it is the tutorial's own advice. It adds no fact and has no cites. |

Open FAILs after round 9: 0

Open FAILs: 0
