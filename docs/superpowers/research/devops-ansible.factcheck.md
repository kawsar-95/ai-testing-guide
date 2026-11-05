# Fact check: devops / ansible

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.ansible.com/ansible/latest/getting_started/introduction.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / ansible (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Automate servers with inventories, playbooks, and SSH settings." | none | FAIL | S1 mentions playbooks ("Ansible uses simple, human-readable scripts called playbooks") and SSH ("using SSH with existing OS credentials to access remote machines"). It never mentions inventories. The lede has no cite. Fix: drop "inventories", or add a source that covers them, e.g. "Automate systems with playbooks and SSH." |
| 2 | Ansible provides open-source automation that reduces complexity and runs everywhere. | 1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 3 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure. | 1 | PASS | "Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / ansible (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: Ansible's open-source automation and its agent-less design. | none | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." and "Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |
| 2 | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool. |
| 3 | Ansible provides open-source automation that reduces complexity and runs everywhere. | S1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 4 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure. | S1 | PASS | "Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / ansible (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Ansible's open-source automation and its agent-less design." | none | PASS | S1: "Ansible provides open-source automation that reduces complexity and runs everywhere." and "Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." The lede has no cite of its own. The S1 lines above support both of its parts. |
| 0b | "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 1 | Ansible provides open-source automation that reduces complexity and runs everywhere | S1 | PASS | S1: "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 2 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure | S1 | PASS | S1: "As automation technology, Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / ansible (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0a | Lede: "Ansible's open-source automation and its agent-less design." | none | PASS | S1 says "Ansible provides open-source automation that reduces complexity and runs everywhere" and "Agent-less architecture". The lede has no cite, but it only repeats claims 1 and 2. |
| 0b | Lede: "A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. |
| 1 | Ansible provides open-source automation that reduces complexity and runs everywhere. | S1 | PASS | "Ansible provides open-source automation that reduces complexity and runs everywhere." |
| 2 | Ansible is designed around an agent-less architecture: low maintenance overhead by avoiding the installation of additional software across IT infrastructure. | S1 | PASS | "Ansible is designed around the following principles: ... Agent-less architecture   Low maintenance overhead by avoiding the installation of additional software across IT infrastructure." |

Open FAILs after round 5: 0

Open FAILs: 0
