# Voices fact check: devops / aws-identity-security

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`. The checkers' remarks about a writing skill of their own environment (3 sentences) are left out; nothing that a checker said about the page is.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-identity-security (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The IAM and role sentences match the Technical panel. Two sentences change facts. (1) "KMS manages encryption keys" drops "sign". The Technical panel says the keys are used to "encrypt and sign". (2) "Secrets Manager stores and rotates passwords and keys" differs from "manage, retrieve, and rotate database credentials, application credentials, OAuth tokens, API keys, and other secrets". It says "stores", where the Technical panel says "manage, retrieve". It narrows the secret types to "passwords and keys". The cites are on the right sentences. Smaller point: "controls who can do what" drops "helps you securely". |
| What it is | Bangla | FAIL | It has the same meaning problems as the Layman panel. (1) "KMS এনক্রিপশন key পরিচালনা করে" leaves out signing. (2) "Secrets Manager পাসওয়ার্ড আর key সংরক্ষণ ও পরিবর্তন করে" says "store and change/replace passwords and keys". The Technical panel says "manage, retrieve, and rotate" many secret types. The sentence adds "store" and narrows the secret types. It drops "retrieve". "পরিবর্তন" is a looser word than "rotate". (3) "IAM ঠিক করে AWS-এ কে কী করতে পারবে" means "IAM decides who can do what". This is stronger than "helps you securely control access". The role sentence matches, and the cites are on the right sentences. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / aws-identity-security (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All four facts match the Technical panel and keep cites 1, 2, 3, 4. Sentence 2 uses "and it has specific permissions" instead of "that has specific permissions". The meaning is the same. No fact is added, dropped, or changed. |
| What it is | Bangla | PASS | All four facts match, with cites 1, 2, 3, 4 in the same places. IAM is a web service that helps control access to AWS resources securely. An IAM role is an IAM identity you create in your account, and it has specific permissions. KMS is a managed service that makes it easy to create and control keys that encrypt and sign data. Secrets Manager helps manage, retrieve, and rotate the listed secrets across their whole lifecycle. Product names stay in English. The meaning is not stronger or weaker. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-identity-security (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and each cite sits on the same fact as in the Technical panel. Left out: the full name "AWS Identity and Access Management"; "IAM" in "IAM identity"; the full name "AWS Key Management Service"; "AWS" before "Secrets Manager" is kept. The splits "helps you control access ... and to do it securely" and "It does this throughout their lifecycles" keep the Technical meaning. |
| What it is | Bangla | PASS | The Bangla matches the Technical panel sentence by sentence. Left out: the full names of IAM and KMS; "IAM" in "IAM identity". "এটা তাদের পুরো lifecycle জুড়ে কাজ করে" ("it works across their whole lifecycle") is a little looser than "helps you manage, retrieve, and rotate ... throughout their lifecycles", but it refers back to the same help and adds no new fact. I could read all of the Bangla well enough to judge it. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / aws-identity-security (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | All four facts match the Technical panel, and each cite sits on the same fact as in the Technical panel. Left out: the full name "Identity and Access Management", the full name "Key Management Service", the full name "Secrets Manager" (it says "AWS Secrets Manager" only), and the word "IAM" in "IAM identity" (it says "an identity"). The Secrets Manager list is kept in full, and "It does this throughout their lifecycles" keeps the scope of the Technical sentence. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. All four facts match the Technical panel, and the cites are on the correct facts. Left out: the full product names, and the word "IAM" in "IAM identity". One point to watch: "এটা তাদের পুরো lifecycle জুড়ে কাজ করে" means "it works across their whole lifecycle". This is a little looser than "manage, retrieve, and rotate ... throughout their lifecycles", but it adds no new fact and is not stronger. |

Open FAILs after round 5: 0

Not checked: the claims were checked against the first lines of S1 to S4 only. I did not read the rest of those files.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / aws-identity-security (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | The panel is a word-for-word copy of the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not plainer or shorter. |
| What it is | Bangla | PASS | Every sentence matches the Technical meaning and keeps the same cites. It leaves nothing out. |
| How it works | Layman | PASS | The panel is a word-for-word copy of the Technical panel, with the same cites. It adds no fact and leaves nothing out. It is not plainer or shorter. |
| How it works | Bangla | PASS | All sentences match the Technical meaning and keep the limit words ("by default", "up to", "only", "at least", "as often as"). "Maintain its key policies" appears as "রাখতে ও বদলাতে" (keep and change), which is slightly looser but not wrong. Details left out: none found. |
| Try it | Layman | PASS | The panel is a word-for-word copy of the Technical panel. The code blocks are the same as in the Technical panel. It adds no fact and leaves nothing out. |
| Try it | Bangla | PASS | The code blocks are the same as in the Technical panel. The prose matches the Technical meaning, including the run record, the "tutorial's own" labels and the cost warnings. Details left out: none found. |
| How a tester uses it | Layman | PASS | The panel is a word-for-word copy of the Technical panel, with the same cites. It leaves nothing out. |
| How a tester uses it | Bangla | PASS | All 11 bullets match the Technical meaning and cites. "At least 15 minutes before" keeps its limit. Details left out: none found. |
| Common mistakes | Layman | PASS | The panel is a word-for-word copy of the Technical panel, with the same cites. It leaves nothing out. |
| Common mistakes | Bangla | FAIL | The "default ভুলে যাওয়া" bullet adds "শুধু AWS account root user বাদে, যার পূর্ণ প্রবেশাধিকার আছে" (except the root user, who has full access). The Technical bullet says only "By default, all requests are implicitly denied". The root-user exception is not in the Technical panel of this section. Fix: end the bullet at "By default সব request implicitly denied হয়". All other bullets match the Technical meaning. |
| What a tester can check | Layman | PASS | The callout is a word-for-word copy of the Technical callout. It adds no fact and leaves nothing out. |
| What a tester can check | Bangla | PASS | The Bangla callout has the same intro line and 12 bullets. Each bullet matches its Technical bullet in meaning. Details left out: none found. |

Open FAILs after round 6: 1

Changed after this round: Common mistakes, Bangla: the bullet on the default added the root user exception, which the Technical bullet did not have. The Technical bullet now says that by default all requests are implicitly denied, with the exception of the AWS account root user, which has full access (S12), as the Bangla bullet did. The Layman and Bangla panels of Try it got the same changes as the Technical panel.

## Round 7 (2026-11-19)

# Voices fact check: devops / aws-identity-security (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact. It is not plainer, and it leaves out no detail. |
| What it is | Bangla | PASS | Each sentence matches one Technical sentence and keeps the same cite. Meaning, numbers, and limits are the same. Product names stay in English. Left out: nothing. |
| How it works | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact. It is not plainer, and it leaves out no detail. |
| How it works | Bangla | PASS | Every sentence matches the Technical meaning. Limits kept: "by default", "only", "up to eight", "maximum of two", "at least 15 minutes", "(except managed rotation)", "as often as every four hours". The code-free bullets and the Effect, Action, Resource, Principal, Condition list match. "key policy রাখতে ও বদলাতে" renders "maintain its key policies"; "বদলাতে" is a slight widening but within "maintain". Left out: nothing found. |
| Try it | Layman | PASS | Word for word the same as the Technical panel, including all code and output blocks. It adds no fact. It is not plainer, and it leaves out no detail. |
| Try it | Bangla | PASS | Text, run record, bullets, and steps 1 to 6 match the Technical panel in meaning, with the same cites. The python, bash, and text blocks are identical to the Technical blocks. Numbers (7 to 30, 15 minutes, seven days, 65536 not used here) are the same. Left out: nothing found. |
| How a tester uses it | Layman | PASS | Word for word the same as the Technical panel, with the same cites. It adds no fact. It is not plainer, and it leaves out no detail. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet, including "অন্তত ১৫ মিনিট আগে", "প্রতি চার ঘণ্টায়ও", and the CloudWatch alarm bullets. Cites are the same. Left out: nothing found. |
| Common mistakes | Layman | PASS | Word for word the same as the Technical panel. It repeats the dropped limit on the Lambda charge (see FAIL CM-20 in the fact check). It adds nothing beyond the Technical panel. Left out: nothing. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical bullet in meaning, with the same cites. "স্বয়ংক্রিয় rotation থাকলে rotation function-এর জন্য বর্তমান Lambda হারে খরচ হয়" repeats the Technical wording without "except managed rotation"; the error comes from the Technical panel (CM-20). Left out: nothing else. |
| What a tester can check | Layman | PASS | Same callout as the Technical panel, same title, and all twelve advice items are the same. It adds no fact. Not plainer. |
| What a tester can check | Bangla | PASS | The intro line and all twelve advice items match the Technical advice in meaning. The callout title is the same. It adds no tool fact. Left out: nothing. |

Open FAILs after round 7: 0

Changed after this round: No FAIL in this round. The Bangla panel of Common mistakes got the same limit as the Technical panel.

## Round 8 (2026-11-19)

# Voices fact check: devops / aws-identity-security (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence, cite, and bold lead-in is word for word the same as the Technical panel, so no fact is added or changed. The panel is not in plainer words or shorter sentences. Nothing is left out. |
| What it is | Bangla | PASS | Each sentence has the same meaning and the same cite as the Technical sentence. Product names stay in English. Nothing is left out. |
| How it works | Layman | PASS | The panel is an exact copy of the Technical panel, including the bullet list, so it adds no fact and drops no limit. It is not in plainer words. Nothing is left out. |
| How it works | Bangla | PASS | I read every sentence, and each keeps its limit and cite ("by default", "only", "up to eight", "as often as every four hours", "at least 15 minutes", "might not"). The gloss "সবচেয়ে কম সুবিধার (least privileged)" restates "least privileged access" and adds no fact. Nothing is left out. |
| Try it | Layman | PASS | The panel is an exact copy of the Technical panel. I checked the three code blocks and the output blocks: they are the same. Nothing is left out. It is not in plainer words. |
| Try it | Bangla | PASS | The three code blocks and the output blocks match the Technical panel. I read every sentence, and each has the same meaning and cite. Left out: in step 6 the cost line says "scheduled for deletion" and drops "that you manage". The record sentence "Choosing them is the tutorial's own choice" is kept. |
| How a tester uses it | Layman | PASS | The panel is an exact copy of the Technical panel, with the same cites. Nothing is left out. |
| How a tester uses it | Bangla | PASS | Each bullet matches the Technical bullet in meaning and cite. "AWS ... MFA-র সুপারিশ করে" follows "AWS recommends MFA". Nothing is left out. |
| Common mistakes | Layman | PASS | The panel is an exact copy of the Technical panel. Nothing is left out. |
| Common mistakes | Bangla | PASS | Each bullet has the same meaning and cite as the Technical bullet, and the `Principal` and `openssl enc` names stay in English. Nothing is left out. |
| What a tester can check | Layman | PASS | The callout is an exact copy and still says "Tutorial advice". It adds no tool fact. |
| What a tester can check | Bangla | PASS | The callout title and all twelve items match the Technical panel in meaning. It adds no tool fact. |

Open FAILs after round 8: 0

Open FAILs: 0
