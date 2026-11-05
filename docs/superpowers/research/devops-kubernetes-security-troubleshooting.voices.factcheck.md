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

Open FAILs: 0
