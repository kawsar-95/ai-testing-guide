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

Open FAILs: 0
