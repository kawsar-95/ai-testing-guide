# Voices fact check: devops / cloud-concepts

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cloud-concepts (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | Sentence 1 changes the meaning of claim 1 in two ways. "rent computing resources" adds "rent", which S1 does not say. It also narrows "IT resources" to "computing resources", but S1 lists computing power, storage and databases. Suggested fix: "you get IT resources over the Internet when you need them and pay for what you use". Sentence 2 matches claim 2: "a set of rules for building apps that run as a service" corresponds to "methodology for building software-as-a-service apps". Both cites are correct. |
| What it is | Bangla | FAIL | Sentence 1 has the same two problems as the Layman panel. "কম্পিউটিং রিসোর্স ভাড়া নেওয়া" means "rent computing resources", which adds "rent" and narrows "IT resources". Suggested fix: use "আইটি রিসোর্স" and drop "ভাড়া". Sentence 2 matches claim 2: "সার্ভিস হিসেবে চলা অ্যাপ বানানোর একটা নিয়মের সেট" means a set of rules for building apps that run as a service. Product names are kept in English, and the cites are correct. |

Open FAILs after round 1: 2

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / cloud-concepts (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 says "when you need them" for "on-demand". Its meaning is the same, and it keeps pay-as-you-go pricing and Cite 1. Sentence 2 is the same as the Technical panel and keeps Cite 2. No fact is added or dropped. |
| What it is | Bangla | PASS | Sentence 1 says "প্রয়োজন অনুযায়ী (on-demand) IT resource পৌঁছে দেওয়া, pay-as-you-go pricing-সহ" (delivery of IT resources on demand over the Internet, with pay-as-you-go pricing). It keeps Cite 1. Sentence 2 says twelve-factor app is a methodology for building software-as-a-service apps, with Cite 2. The facts and cites match the Technical panel. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cloud-concepts (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 ("you get IT resources over the Internet when you need them") restates "on-demand delivery of IT resources over the Internet". Sentence 2 ("You pay as you go") restates "pay-as-you-go pricing" and carries cite 1 on the same fact. Sentence 3 uses "method" for "methodology" and carries cite 2 on the same fact. Left out: the word "delivery" and the word "pricing" (the pricing is now stated as the user's payment). Also left out: the idea that the twelve-factor app is a "methodology" in the strict sense. The Layman panel adds no new fact. |
| What it is | Bangla | PASS | I can read the Bangla. It says: with cloud computing you get IT resources over the Internet when you need them; you pay by the pay-as-you-go method <Cite 1>; the twelve-factor app is a method for building software-as-a-service apps <Cite 2>. Each sentence matches the Technical panel and the cites are on the same facts. Left out: "delivery" and "pricing". The word "দাম দেন" (pay the price) is a plain rendering of the pricing idea. "পদ্ধতি" is used for both "pay-as-you-go pricing" and "methodology". The panel adds no new fact. |

Open FAILs after round 4: 0

Ponytail note: I checked only the two cited facts against S1 and S2, using Grep on the exact phrases. I did not read the full source files, and I did not check any other text on the page.

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / cloud-concepts (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | "You get IT resources over the Internet when you need them" restates "on-demand delivery of IT resources over the Internet". "You pay as you go" restates "pay-as-you-go pricing". "Method" stands in for "methodology". The cites are on the same facts as in the Technical panel. Left out: the word "delivery", and the word "pricing" (the text says "you pay as you go"). |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. It says: "In cloud computing you get IT resources over the Internet when you need them. You pay on a pay-as-you-go basis. The twelve-factor app is a method for building software-as-a-service apps." This has the same facts as the Technical panel, and the cites are on the same facts. The product terms stay in English. Left out: "delivery" and "pricing" as separate words. |

Open FAILs after round 5: 0

Ponytail: I did not read the rest of S1 or S2, only the passages that the claims cite. The risk is small because the page has only two facts.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / cloud-concepts (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites match. Left out: "technology" before "services"; "for maximum agility" (twelve-factor); "ubiquitous" is not used. "Method" for "methodology" and "start up" for "spin up" are plain words with the same meaning. |
| What it is | Bangla | PASS | Meaning matches the Technical panel for every sentence. Left out: "technology"; "for maximum agility"; the "minimum of" wording is rendered as "অন্তত" (same meaning). Product names stay in English. |
| How it works | Layman | PASS | Same facts and cites as the Technical panel. Left out: "categorized as" (EC2 is IaaS); "implicit existence" becomes "happen to exist" (same meaning); "Twelve-factor" before "processes" in factor VI; "(thereby refusing any new requests)" is not in either panel. Code and sketch blocks are identical. |
| How it works | Bangla | PASS | Meaning matches the Technical panel. Left out: "Twelve-factor" before "processes" in table factor VI; "implicit existence" (rendered as "system-wide package থাকার ওপর ভরসা করে না"). Code blocks are identical. |
| Try it | Layman | PASS | Same steps, facts and cites. Step 4 repeats the Technical panel's uncited "`wait` returns the exit status" claim (FAIL row 97 in the FACTCHECK table). It adds nothing new. Code blocks are identical. |
| Try it | Bangla | PASS | Meaning matches the Technical panel. Same uncited `wait` claim as the Technical panel (row 97). Code blocks are identical. Left out: nothing of substance. |
| How a tester uses it | Layman | FAIL | Parity bullet: the Technical panel says the differences cause "tiny incompatibilities crop up, causing code that worked and passed tests ... to fail in production". The Layman panel says code "can fail in production". Adding "can" makes the claim weaker. Fix: "... Then code that worked and passed tests in development or staging fails in production". Other bullets match. Left out: "In a cloud computing environment" shortened to "cloud environment". |
| How a tester uses it | Bangla | FAIL | Same problem in the parity bullet: "ব্যর্থ হতে পারে" ("can fail") is weaker than the Technical panel's "causing ... to fail". Other bullets match. Left out: "computing" in "cloud computing environment". |
| Common mistakes | Layman | PASS | Every fact matches the Technical panel. Plain words used: "breaks the twelve-factor rules" for "violation"; "small, separate controls" for "granular controls"; "should hide the differences" for "theoretically abstract away". Left out: "theoretically" is softened but the meaning holds. |
| Common mistakes | Bangla | PASS | Meaning matches. "overwhelm" is rendered "ঠেসে ধরতে", which is loose but not a different claim. Left out: "theoretically" is carried by "কথা থাকলেও". |
| What a tester can check | Layman | PASS | Same ten pieces of advice, reworded and some split into two sentences. Callout title and the "tutorial's own advice" line are kept. No new fact. |
| What a tester can check | Bangla | PASS | Same ten pieces of advice and the same callout. No new fact. |

Open FAILs after round 6: 2

## Round 7 (2026-11-18)

# Voices fact check: devops / cloud-concepts (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence matches the Technical panel and its cite. Left out: "maximum" in "maximum portability" and "maximum agility" (the Layman text says "as portable as possible" and "enables continuous deployment"). |
| What it is | Bangla | PASS | Read and judged by meaning. All facts and cites match the Technical panel. Left out: "maximum" portability and agility. "সহজে নেওয়া যায়" is a plain-words version of "portability", with no added claim. |
| How it works | Layman | PASS | Meaning and cites match. Left out: "categorized as" (EC2 is "Infrastructure as a Service"); "aggregated" in the logs sentence. Table II says "never relies on system-wide packages that happen to exist", which keeps the "implicit" idea. Code blocks are identical to the Technical panel. |
| How it works | Bangla | FAIL | Table row II (S17): "twelve-factor app কখনো system-wide package থাকার ওপর ভরসা করে না" drops "implicit". It now says the app never relies on system-wide packages at all, which is stronger than "never relies on implicit existence of system-wide packages". Fix: "system-wide package আছে বলে ধরে নেওয়ার ওপর কখনো ভরসা করে না". Other sentences match. Code blocks are identical. |
| Try it | Layman | PASS | Same facts, same cites, same code blocks, same run record. Nothing left out. |
| Try it | Bangla | PASS | Read and judged by meaning. Same facts, cites and code blocks as the Technical panel. Left out: nothing of substance. |
| How a tester uses it | Layman | FAIL | "every release has a unique release ID" copies the Technical sentence, but S20 says "should always have". The limit is dropped, and the cite does not support the stronger claim (see FACTCHECK row 98). Other bullets match; the Technical panel also says "cloud computing environment", which is shortened here. |
| How a tester uses it | Bangla | FAIL | "প্রতিটা release-এর একটা অনন্য release ID আছে" has the same problem: it drops "should always" and the S20 cite does not support it. Other bullets match the Technical panel. Left out: nothing else of substance. |
| Common mistakes | Layman | PASS | All facts and cites match the Technical panel. "Litmus test" becomes "simple test" and "violation of twelve-factor" becomes "breaks the twelve-factor rules"; both keep the meaning. |
| Common mistakes | Bangla | PASS | Read and judged by meaning. All facts and cites match the Technical panel. Left out: nothing of substance. |
| What a tester can check | Layman | PASS | Same ten pieces of advice as the Technical callout, titled "Tutorial advice". No tool fact added. |
| What a tester can check | Bangla | PASS | Same ten pieces of advice. No tool fact added. |

Open FAILs after round 7: 3

## Round 8 (2026-11-18)

# Voices fact check: devops / cloud-concepts (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact and every cite matches the Technical panel. Left out: "for maximum agility" (parity bullet); "rapidly" becomes "quickly". |
| What it is | Bangla | PASS | Meaning and cites match the Technical panel. Left out: "for maximum agility"; "maximum portability" is softened to "সহজে নেওয়া যায়". |
| How it works | Layman | PASS | Meaning and cites match, and the code blocks are identical. Left out: "categorized as" for EC2; the "theoretically" and "continuous deployment for maximum agility" nuances are not in this panel. |
| How it works | Bangla | PASS | Meaning and cites match, and the code blocks are identical. Left out: "categorized as" for EC2; the exact SIGTERM/shutdown wording is shortened. |
| Try it | Layman | PASS | Same code blocks and commands. Cites match the Technical panel. Nothing added. |
| Try it | Bangla | PASS | Same code blocks. The record and the cites match the Technical panel. Nothing added. |
| How a tester uses it | Layman | PASS | Cites and meaning match. "cloud computing environment" becomes "cloud environment". |
| How a tester uses it | Bangla | PASS | Cites and meaning match. Nothing added. |
| Common mistakes | Layman | PASS | Meaning and cites match. "Theoretically abstract away" becomes "should hide", which is close in meaning. "Litmus test" becomes "simple test". |
| Common mistakes | Bangla | PASS | Meaning and cites match. Nothing added. |
| What a tester can check | Layman | PASS | The advice list is the same. It has the same "Tutorial advice" title. |
| What a tester can check | Bangla | PASS | The advice list is the same, in Bangla. Nothing added. |

Open FAILs after round 8: 0

Open FAILs: 0
