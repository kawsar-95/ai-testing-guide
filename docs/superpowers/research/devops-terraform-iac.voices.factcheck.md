# Voices fact check: devops / terraform-iac

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (2 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / terraform-iac (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 adds a fact that the Technical panel does not have: "describe servers and networks in files, and a tool builds them". The Technical panel says "cloud and on-prem resources", not servers and networks, and it has no definition of IaC. Sentence 2 changes "build, change, and version" into "keeps track of changes". S1 gives state-file tracking of infrastructure, and that is a different fact. Sentence 3 drops "identical", "multiple platforms", "single source configuration" and "community tool". This makes the claim weaker. Sentence 4 drops "framework". Cites 1, 2, 3 are in the right places. |
| What it is | Bangla | FAIL | It follows the Layman panel sentence by sentence, so it has the same problems. It adds "সার্ভার আর নেটওয়ার্ক" (servers and networks) and the IaC definition. It uses "পরিবর্তনের হিসাব রাখে" (keeps a record of changes) in place of build, change and version. It says only "machine image বানায়" (builds machine images), with no "identical", "multiple platforms" or "single source". It says "control plane" and drops "framework". I can read the Bangla well enough to judge it. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / terraform-iac (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All three sentences are word for word the same as the Technical panel. The same three facts carry the same cites (1, 2, 3). Nothing is added, dropped, or changed. The panel is not simplified, but that is not a fact error. |
| What it is | Bangla | PASS | There are three sentences with cites 1, 2, 3, in the same order. Each one matches the Technical meaning. Terraform: build, change, and version cloud and on-prem resources "নিরাপদে ও দক্ষভাবে" (safely and efficiently). Packer: a community tool that makes identical machine images for several platforms from one source configuration. Crossplane: a control plane framework for platform engineering. Product names and terms stay in English. No fact is added, dropped, or made stronger or weaker. |

Open FAILs after round 2: 0

Not checked: the page description line ("Terraform, Packer, and Crossplane."). It is only a label. I did not read S1 in full. I only found the one sentence that was cited.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / terraform-iac (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The Terraform and Packer sentences are faithful. The Crossplane sentences are not. The Technical panel says Crossplane is a "control plane framework". The Layman panel splits this into "a framework for platform engineering" and "It is a control plane". That second sentence changes the meaning: Crossplane is a framework for control planes, not itself a control plane. S3 supports this reading with "create a control plane" and "configure a Crossplane control plane". Fix: "Crossplane is a control plane framework. It is for platform engineering." Details left out: none that matter. |
| What it is | Bangla | FAIL | The Terraform and Packer sentences match the Technical panel in meaning. They keep the English product and term names. The Crossplane sentence "এটা একটা control plane" has the same problem as the Layman panel. It says Crossplane is a control plane, but the Technical panel says it is a control plane framework. Fix: "Crossplane হলো platform engineering-এর জন্য একটা control plane framework।" Details left out: none that matter. |

Open FAILs after round 4: 2

I also did not read S1 in full. I only matched the one Terraform sentence the page cites.

Changed after this round: Layman and Bangla: Crossplane is again "a control plane framework" (the plain text had split it into "a framework" and "a control plane").

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / terraform-iac (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Each sentence restates a Technical sentence with the same facts. The cites 1, 2 and 3 sit on the same facts as in the Technical panel. The panel adds no fact and no limit is dropped. It leaves out nothing. |
| What it is | Bangla | PASS | I can read the Bangla. It matches the Technical meaning. "নিরাপদে ও দক্ষভাবে" means "safely and efficiently", and "একটাই source configuration" means "a single source configuration". Product names and terms stay in English. The cites 1, 2 and 3 are on the same facts. The panel adds no fact and leaves out nothing. |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-19)

# Voices fact check: devops / terraform-iac (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The text is word for word the same as the Technical panel. It adds no fact and the cites match. It is not plainer, and no detail is left out. |
| What it is | Bangla | PASS | Meaning matches the Technical panel sentence by sentence, with the same cites. Left out: nothing. |
| How it works | Layman | PASS | Word for word the same as the Technical panel. It adds no fact, and the cites match. It is not plainer, and no detail is left out. |
| How it works | Bangla | PASS | Meaning matches the Technical panel. The limit words "By default", "can", "only" and "if the backend supports it" are kept. In the plan re-check sentence the Bangla leaves out "always" and "non-speculative" ("চূড়ান্ত plan আবার দেখে নেওয়া উচিত"). This makes the claim weaker, not stronger. Left out: "automatically" was already not in the Technical panel. |
| Try it | Layman | PASS | Word for word the same as the Technical panel, including the code blocks and the output. It adds no fact, and the cites match. It is not plainer. Row 192 (`terraform state list` has no source) also applies here, but that is a Technical-panel problem. |
| Try it | Bangla | PASS | Meaning matches the Technical panel, and the code blocks are identical. The numbers, versions, hashes, times, flags and exit statuses are the same. Left out: nothing found. |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel. It adds no fact. The two uncited sentences (rows 239 and 253) are copied from the Technical panel, so the voice gives no extra fact. |
| How a tester uses it | Bangla | PASS | Meaning matches the Technical panel. The 0/1/2 exit codes, the `delete` scan, v1.7.0 and `-junit-xml` are kept. The uncited sentences (rows 239 and 253) are translated as they are. Left out: nothing. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel. It adds no fact, and the cites match. |
| Common mistakes | Bangla | PASS | Meaning matches the Technical panel, with the same cites. The limit words "If the backend supports it", "always" (সবসময়) and "sparingly" (কম) are kept. Left out: nothing. |
| What a tester can check | Layman | PASS | Callout is word for word the same as the Technical callout. It adds no fact. |
| What a tester can check | Bangla | PASS | The 12 advice items match the Technical callout in meaning. Nothing is added. Left out: nothing. |

Open FAILs after round 6: 0

Changed after this round: No FAIL in round 6. The Layman and Bangla panels got the same changes as the Technical panel (the cite of S57, the dropped sentence, the sentence on secrets, and the cite of S52).

## Round 7 (2026-11-19)

# Voices fact check: devops / terraform-iac (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same sentences and same cites as the Technical panel (no plainer wording). Nothing added, changed, or left out. |
| What it is | Bangla | PASS | Each sentence matches its Technical sentence in meaning and cite (S1, S30, S43). Nothing added. Nothing left out. |
| How it works | Layman | PASS | Same text as the Technical panel, with the same cites. Nothing added, changed, or left out. |
| How it works | Bangla | PASS | Every sentence matches its Technical sentence and cite. One left-out detail: the plan sentence says "চূড়ান্ত plan আবার দেখে নেওয়া উচিত" and leaves out "always" and "non-speculative" (the Common mistakes Bangla keeps both). That is weaker, not stronger. Code and file names are in English as required. |
| Try it | Layman | PASS | Same text, same code blocks, same cites as the Technical panel (checked by line position, by the prose in the intro and install paragraphs, and by counts of 14 sample code lines: 3 each across the three panels). Nothing added or left out. |
| Try it | Bangla | PASS | I read every prose paragraph and bullet. Each matches the Technical claim and cite (S5, S6, S7, S8, S9, S11, S14, S20, S21, S22, S23, S25, S26, S27, S29, S33, S35, S37, S39, S41, S42, S44, S45, S50, S51, S52, S53, S54, S55, S56, S57). Code blocks are equal to the Technical ones (counts match). Nothing added. Nothing left out. |
| How a tester uses it | Layman | PASS | Same bullets, same cites as the Technical panel. Nothing added, changed, or left out. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet in meaning and cites. Nothing added. Nothing left out. |
| Common mistakes | Layman | PASS | Same items, same cites as the Technical panel. Nothing added, changed, or left out. |
| Common mistakes | Bangla | PASS | Each item matches the Technical item in meaning and cite, including "always" and "non-speculative" in the re-check item. Nothing added. Nothing left out. |
| What a tester can check | Layman | PASS | Same callout (title "Tutorial advice") and the same 12 bullets. No cite is used. |
| What a tester can check | Bangla | PASS | Same callout and the same 12 bullets in meaning. No fact added. |

Open FAILs after round 7: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 8 (2026-11-19)

# Voices fact check: devops / terraform-iac (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Verbatim copy of the Technical panel, so no fact is added or changed. It is not in plainer words or shorter sentences. Nothing is left out. |
| What it is | Bangla | PASS | Every sentence matches the Technical sentence and keeps the cite. Product names stay in English. Nothing is left out. |
| How it works | Layman | PASS | Verbatim copy of the Technical panel; no added fact. Not plainer wording. Nothing is left out. |
| How it works | Bangla | PASS | Same facts and cites as Technical. Left out: "non-speculative" and "always" in the re-check plan sentence (the Bangla keeps "should" and "final plan"); "automatically" is not in the Technical panel either. "deprovisions" is rendered "সরিয়ে দেয়" (removes), which is close but not exact. Code names are unchanged. |
| Try it | Layman | PASS | Verbatim copy of the Technical panel. I checked that 6 distinctive lines appear twice, and the line offsets are the same. I did not diff every code block character by character. It carries the same S41 cite problem as FACTCHECK row 154, because the cite is the same as in the Technical panel. Not plainer wording. |
| Try it | Bangla | PASS | I read all the prose lines: intro, install, steps 1 to 9, and bullets. Facts, numbers, cites and limits match the Technical panel. The code blocks have the same structure as Technical, and I spot-checked some of them. I did not compare every code line. The step 7 bullet repeats the S41 tagging cite from FACTCHECK row 154. Left out: nothing. |
| How a tester uses it | Layman | PASS | Verbatim copy of the Technical panel; no added fact. Not plainer wording. |
| How a tester uses it | Bangla | PASS | Same facts and cites. Left out: "every" in "find every case that deletes an object". The Bangla is therefore a little weaker, not stronger. |
| Common mistakes | Layman | PASS | Verbatim copy of the Technical panel; no added fact. Not plainer wording. |
| Common mistakes | Bangla | PASS | Same facts and cites. Left out: nothing that changes the meaning; the "each time ... on a new machine" detail is kept. |
| What a tester can check | Layman | PASS | Verbatim copy of the callout. It still says it is the tutorial's own advice. |
| What a tester can check | Bangla | PASS | All 12 advice items are translated and no new fact is added. The callout title and the statement that it is the tutorial's advice are kept. |

Open FAILs after round 8: 0

Changed after this round: No FAIL in round 8. The Bangla panel got the same split of the sentence and the same two cites.

## Round 9 (2026-11-19)

# Voices fact check: devops / terraform-iac (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word-for-word copy of the Technical panel: same facts, same cites, nothing added. It is not plainer or shorter. Nothing left out. |
| What it is | Bangla | PASS | Every sentence matches its Technical sentence; the cites are the same. Nothing left out. Product names and commands stay in English. |
| How it works | Layman | PASS | Word-for-word copy of the Technical panel. It is not plainer or shorter. Nothing left out. |
| How it works | Bangla | PASS | Meaning matches the Technical panel sentence by sentence. Limits are kept ("by default", "if the backend supports it", "only if", "unless"). "deprovisions" is rendered as "সরিয়ে দেয়" (removes), which is slightly looser. Nothing else left out. |
| Try it | Layman | PASS | The prose and bullets, and the code and output blocks, are the same as the Technical panel. I read the two opening paragraphs and the step-intro text, and compared all bullets one by one. The code and output blocks were compared by position and line count, not line by line. Nothing left out. |
| Try it | Bangla | PASS | The Bangla prose and bullets match the Technical panel. The code and output blocks are the same as in the Technical panel; I did not compare them line by line. The same cites sit on the same facts. Run-record sentences are kept (times, versions, "No page that the tutorial read says why"). Nothing left out. |
| How a tester uses it | Layman | PASS | Word-for-word copy of the Technical panel. Nothing left out. |
| How a tester uses it | Bangla | PASS | Each bullet matches. "so you can scan the list for `delete`" is kept. The v1.7.0 limit is kept. Nothing left out. |
| Common mistakes | Layman | PASS | Word-for-word copy of the Technical panel. Nothing left out. |
| Common mistakes | Bangla | PASS | Each bullet matches. "If the backend supports it", "sparingly", and "defaults to true" are kept. Nothing left out. |
| What a tester can check | Layman | PASS | Word-for-word copy of the callout, still titled "Tutorial advice". It adds no tool fact. |
| What a tester can check | Bangla | PASS | All 12 tips and the intro line match the Technical callout. The "Tutorial advice" callout is kept. It adds no tool fact. |

Open FAILs after round 9: 0

Open FAILs: 0
