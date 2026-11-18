# Voices fact check: devops / kubernetes-security-troubleshooting

Checked by an independent agent. Each Layman and Bangla panel was compared with the Technical panel of the same block, sentence by sentence, by a fresh `claude -p` session (claude-sonnet-5-5; read-only tools) that did not write the page. Rounds 1 to 3 used a strict standard (PASS: the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker). From round 4 the standard is the rule of CLAUDE.md, "Layman and Bangla give no fact that Technical does not give": PASS if every fact of the sentence is in the Technical panel, the meaning is not stronger, weaker, or different, and the cite is a cite of the Technical panel on the same fact; left-out details are allowed, and the checker lists them in its note; FAIL if a fact is added or changed, the meaning is stronger, weaker, or different, a limiting word was dropped so that the claim says more, or a cite is on a sentence that its source does not support. The checker judged the Bangla by its meaning and had to say when it could not read a sentence well enough to judge it. No person who reads Bangla has read this page. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-security-troubleshooting (round 1)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | FAIL | The second sentence adds "so protect access to them". The Technical panel has no such advice, so this is an added claim. It also sits under Cite 1, and the S1 passage I found only says "Anyone with API access can retrieve or modify a Secret". The first sentence drops "key" from the list of examples (password, token, key) and drops "small amount". The second sentence drops the "(etcd)" data-store detail. |
| What it is | Bangla | FAIL | I could read this panel. The second sentence adds "তাই এতে প্রবেশাধিকার সুরক্ষিত রাখুন" ("so keep access to it protected"). The Technical panel has no such advice, so this is an added claim. The first sentence lists only password and token and drops "key" and "small amount". The second sentence drops the etcd data-store detail. |

Open FAILs after round 1: 2

Skipped: I did not read the rest of S1. I only searched it for the passages these claims need. Risk: the lede promises pod security, stuck pods, and DNS, and no cited source supports any of them.

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

Voices standard of this round: strict (brief v1): the same facts and the same cites as the Technical panel, with no fact added, none dropped, and none made stronger or weaker.

## Voices fact check: devops / kubernetes-security-troubleshooting (round 2)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Sentence 1 has the same fact as Technical ("contains" became "holds", which means the same) and the same cite 1. Sentence 2 is word for word the same as Technical, with cite 1. No fact was added or dropped. |
| What it is | Bangla | PASS | Sentence 1 says that a Secret is an object that holds a small amount of sensitive data such as a password, a token or a key, with cite 1. Sentence 2 says that by default Kubernetes Secrets are stored unencrypted in the API server's underlying data store (etcd), with cite 1. Product names and terms stay in English. The meaning matches Technical, with nothing added or dropped. |

Open FAILs after round 2: 0

I did not check the rest of S1. Only the two cited sentences were compared with the page.

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-security-troubleshooting (round 4)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel. "Without encryption" restates "unencrypted". "By default" is kept. "Holds" restates "contains". "Underneath" restates "underlying". Both cites sit on the right facts. Left out: nothing of substance. |
| What it is | Bangla | PASS | I can read the Bangla well enough to judge it. The meaning matches the Technical panel. "ডিফল্টভাবে" keeps the "by default" limit. "encrypt না করেই রাখে" means "stored unencrypted". The sentence about where the Secret sits matches "API server's underlying data store (etcd)". Both cites are on the right facts. Left out: nothing of substance. |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

Voices standard of this round: the rule of CLAUDE.md (brief v2): the panel gives no fact that the Technical panel does not give. Plainer words, shorter sentences, and left-out details are allowed, and the checker lists what is left out.

## Voices fact check: devops / kubernetes-security-troubleshooting (round 5)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates a Technical sentence. The cites are on the same facts. "By default" is kept. "Stored unencrypted" became "stores Secrets without encryption", which means the same. "Sit in the data store (etcd) that the API server uses underneath" matches "the API server's underlying data store (etcd)". Nothing is left out except the exact wording "unencrypted" and "underlying". |
| What it is | Bangla | PASS | The meaning matches the Technical panel. Sentence 1 gives a Secret, a small amount ("অল্প পরিমাণ"), and sensitive data such as a password, token or key. "ডিফল্টভাবে ... encrypt না করেই রাখে" means "by default stores without encryption". "API server নিচে যে data store (etcd) ব্যবহার করে, Secret সেখানেই থাকে" means the Secret sits in the data store (etcd) that the API server uses underneath. The cites are on the same facts. Product names stay in English. Left out: nothing of substance. |

Open FAILs after round 5: 0

I skipped nothing in the checks. The only source is S1, and I read only the lines that matched these claims, not the whole file.

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md). Round 6 and later check the new text with the brief of the full pages.

## Round 6 (2026-11-18)

# Voices fact check: devops / kubernetes-security-troubleshooting (round 6)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel and the cites match. Left out: "different" in "three different policies"; "at the IP address or port level" is kept. "retrieve or modify" becomes "read or change", which keeps the meaning. |
| What it is | Bangla | PASS | Meaning matches the Technical panel sentence by sentence. "By default" is kept as "ডিফল্টভাবে". Left out: "different" before "policies". Nothing is added. |
| How it works | Layman | PASS | Facts, numbers (300 s, 10 min, v1.37), tables and code blocks match the Technical panel. Dropped limit words: "must be" becomes "is" for MODE and LEVEL, and "particular" becomes "one" for a Role's namespace. Both are still true and say no more. Left out: "This policy allows for known privilege escalations" was never in the Technical panel. |
| How it works | Bangla | PASS | Meaning, numbers, commands and tables match the Technical panel. Left out: nothing of substance. "must" in MODE/LEVEL is rendered as a plain statement, which is still true. |
| Try it | Layman | PASS | The run-record paragraph, commands and code blocks are identical to the Technical panel. Wording changes ("makes" for "creates", "to get an Opaque type" for "to indicate", "will be different" for "differ") keep the meaning. Left out: nothing of substance. |
| Try it | Bangla | PASS | Every sentence matches the Technical panel, including dates, versions, counts (22 lines, 6 shown, 3 starts, 4 violations, 5 s) and the code blocks. The table headers are translated only. Left out: nothing of substance. |
| How a tester uses it | Layman | PASS | Each paragraph restates the Technical paragraph with the same cites. "is insufficient" becomes "is not enough". The "always" before "sets permissions" is kept. Left out: nothing. |
| How a tester uses it | Bangla | PASS | Meaning and cites match the Technical panel. "always" is kept as "সবসময়". Step numbers (১–৫) match the run record. Left out: nothing of substance. |
| Common mistakes | Layman | PASS | All eight bullets restate the Technical bullets with the same cites. Left out: nothing. |
| Common mistakes | Bangla | PASS | All eight bullets restate the Technical bullets with the same meaning and cites. Left out: nothing. |
| What a tester can check | Layman | PASS | Identical to the Technical panel. |
| What a tester can check | Bangla | PASS | The six items and the "Tutorial advice" callout match the Technical panel. Left out: nothing. |

Open FAILs after round 6: 0

Changed after this round: Round 6 had no voices FAIL. The two Key words rows above are not in a voices panel.

## Round 7 (2026-11-18)

# Voices fact check: devops / kubernetes-security-troubleshooting (round 7)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates the Technical sentence with the same cite. Left out: the word "stored" (it says "stores Secrets without encryption"); the phrase "to broadly cover" is kept as "broadly cover". |
| What it is | Bangla | PASS | Meaning matches the Technical panel. "ডিফল্টভাবে" keeps "by default" and "ভাবতে পারেন" keeps "might consider". Left out: the words "individual" before "users" and "particular" are reduced to "আলাদা আলাদা" and "নির্দিষ্ট". Nothing is added. |
| How it works | Layman | PASS | Same facts, same cites, same code and table blocks. Changes are small: "has to be prefixed" becomes "has to start with"; "must be the additional arguments" becomes "stands for the extra arguments that are needed". Left out: nothing of substance; "must" on `[...]` is softened but the meaning holds. |
| How it works | Bangla | PASS | All facts and cites match the Technical panel; code blocks are identical. Command and table meaning kept ("ক্রমযোজ্য (cumulative)", "সম্পূর্ণ যোগাত্মক"). No added claims. Left out: nothing beyond wording. |
| Try it | Layman | PASS | Restates every Technical sentence with the same cites; code, output, and tables are identical. Only wording changes ("makes", "will be different"). The #114 sentence has the same cite problem as the Technical panel (exit code not in S15/S18); that is a Technical-panel fault, not a voice change. Left out: nothing. |
| Try it | Bangla | PASS | Same facts, numbers, cites, and code as the Technical panel. Step numbers use Bangla digits (১–৭) and "ধাপ ৩" for step 3, which match. The #114 cite problem is carried over unchanged from the Technical panel. Left out: nothing. |
| How a tester uses it | Layman | PASS | Same sentences and cites as the Technical panel. Wording only ("not enough" for "insufficient", "one namespace" for "a particular namespace"). Left out: nothing. |
| How a tester uses it | Bangla | PASS | Meaning and cites match each Technical sentence. "সবসময়" keeps "always". Left out: nothing. |
| Common mistakes | Layman | PASS | Each bullet restates the Technical bullet with the same cite. Left out: nothing. |
| Common mistakes | Bangla | PASS | Each bullet matches in meaning and cite. Left out: nothing. |
| What a tester can check | Layman | PASS | Identical to the Technical callout, which is the "Tutorial advice". No tool fact added. |
| What a tester can check | Bangla | PASS | All six bullets and the callout title match the Technical callout. No fact added. Left out: nothing. |

Open FAILs after round 7: 0

Changed after this round: Round 7 had no voices FAIL; the changed sentence was written in the three voices together.

## Round 8 (2026-11-18)

# Voices fact check: devops / kubernetes-security-troubleshooting (round 8)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every sentence restates the Technical sentence with the same cite. Left out: "(etcd)" is kept, nothing material is dropped. |
| What it is | Bangla | PASS | Meaning matches. "By default" is kept ("ডিফল্টভাবে"). "might consider" is kept ("ভাবতে পারেন"). Left out: nothing material. |
| How it works | Layman | PASS | Same facts, same cites, same code blocks. Left out: nothing material. The row 123-type problem does not occur here. |
| How it works | Bangla | PASS | Meaning matches, limits kept ("সবসময়", "শুধু", "ডিফল্টভাবে"). Code blocks and tables are identical. Left out: nothing material. |
| Try it | Layman | PASS | Same as Technical, with plainer verbs (makes, given). Code blocks are identical. Left out: nothing material. |
| Try it | Bangla | PASS | Meaning matches the Technical panel. Code blocks are identical. Left out: nothing material. |
| How a tester uses it | Layman | PASS | Same facts. "is not enough" for "insufficient" keeps the meaning. The Technical-panel wording issue in the last paragraph (profile advice) is copied, not made worse. Left out: nothing material. |
| How a tester uses it | Bangla | PASS | Meaning matches. The same profile-advice sentence is copied from Technical, with the same issue. Left out: nothing material. |
| Common mistakes | Layman | PASS | Each bullet restates the Technical bullet with the same cite. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical meaning. |
| What a tester can check | Layman | PASS | The callout is identical to the Technical panel. |
| What a tester can check | Bangla | PASS | Same six items as Technical. The callout title is kept. |

Open FAILs after round 8: 0

Changed after this round: Round 8 had no voices FAIL; the changed sentence was written in the three voices together.

## Round 9 (2026-11-18)

# Voices fact check: devops / kubernetes-security-troubleshooting (round 9)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Same facts and cites as the Technical panel. Leaves out: "retrieve or modify" becomes "read or change". Nothing added. |
| What it is | Bangla | PASS | Meaning matches the Technical panel. No added facts. Nothing material left out. |
| How it works | Layman | PASS | Restates each Technical sentence, and the code blocks, tables and diagram are the same. Leaves out: "currently" in the CrashLoopBackOff sentence, and the "particular" wording for Role namespace, which is still true as "one namespace". |
| How it works | Bangla | PASS | Meaning matches. Tables, code, and diagram are the same as in the Technical panel. Leaves out the same small limiters ("currently"). |
| Try it | Layman | PASS | Same run record, same tables and code. "to get an Opaque Secret type" is close to "to indicate". Leaves out: "creates" becomes "makes". Nothing added. |
| Try it | Bangla | PASS | Meaning matches, including the run date, versions, 22 lines, tables, and commands. No added facts. |
| How a tester uses it | Layman | PASS | Same facts and cites. Leaves out: "particular" namespace (becomes "one"), "will have no effect" (becomes "has no effect"). |
| How a tester uses it | Bangla | PASS | Meaning matches. No added facts. |
| Common mistakes | Layman | PASS | Same eight bullets with the same cites. |
| Common mistakes | Bangla | PASS | Same eight bullets. Meaning matches. |
| What a tester can check | Layman | PASS | Same callout and bullets as the Technical panel. |
| What a tester can check | Bangla | PASS | Same six advice bullets and the "tutorial's own advice" framing. |

Open FAILs after round 9: 0

Changed after this round: Round 9 had no voices FAIL; the added sentences were written in the three voices together.

## Round 10 (2026-11-18)

# Voices fact check: devops / kubernetes-security-troubleshooting (round 10)

| Section | Panel | Verdict | Note |
|---|---|---|---|
| What it is | Layman | PASS | Every fact is in the Technical panel, and the cites match. The limit "by default" is kept. Left out: "such as" is kept, but "(etcd)" is moved into a longer clause. No other detail is lost. |
| What it is | Bangla | PASS | The meaning is the same as the Technical panel. "By default" (ডিফল্টভাবে) is kept. "might consider" is kept (ভাবতে পারেন). No fact is added. |
| How it works | Layman | PASS | Same facts, same cites, same code and tables. Left out: "for the operation" in the `--as` row. "a set of" before "labels" is dropped. "Must" becomes "stands for the extra arguments that are needed". The meaning is not changed. |
| How it works | Bangla | PASS | Same facts, same cites, same code blocks. Left out: "for the operation" in the `--as` row, and "a set of" before "labels". The limits "by default", "always", "only", "may appear" are kept. Bangla read and judged by meaning. |
| Try it | Layman | PASS | Same facts, same code, same tables, same cites. Small word changes only ("will be different", "Everything that the run made"). No fact added. |
| Try it | Bangla | PASS | Same facts, same code, same cites, same tables with translated headers. The limit "defaults to Always" is kept (ডিফল্টভাবে Always). No fact added. Bangla read and judged by meaning. |
| How a tester uses it | Layman | PASS | Same facts and cites. "Insufficient" becomes "not enough". "Always" in "a Role always sets permissions" is kept. |
| How a tester uses it | Bangla | PASS | Same facts and cites. "Always" (সবসময়) is kept. "Enforce ... only" (শুধু) is kept. No fact added. Bangla read and judged by meaning. |
| Common mistakes | Layman | PASS | Each bullet restates the Technical bullet with the same cite. Left out: "will" becomes "has no effect". No fact change. |
| Common mistakes | Bangla | PASS | Each bullet matches the Technical bullet and cite. No limit is dropped. Bangla read and judged by meaning. |
| What a tester can check | Layman | PASS | Same callout, word for word. No cite and no tool fact added. |
| What a tester can check | Bangla | PASS | Same six items as the Technical callout. No fact added. Bangla read and judged by meaning. |

Open FAILs after round 10: 0

Open FAILs: 0
