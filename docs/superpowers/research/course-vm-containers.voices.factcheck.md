# Voice fact-check: VMs and Containers (round 2, Bangla term style, 2026-10-22)

Page: `content/course/vm-containers.mdx`. I did not write this page or its voices.

Method: I read each `<Layman>` and `<Bangla>` panel next to the `<Technical>` panel of the same `##` section. A FAIL is a fact, number, name, example, hedge, or cite that Technical does not give; a wrong or unfinished Bangla sentence; a style break (তুমি, a common concept word left in English, an acronym or product name in Bangla letters); or a Layman sentence over 25 words. An omission is not a FAIL. A script checked: (1) each Technical body is identical to the Technical body of the same section in `git show HEAD:content/course/vm-containers.mdx` (all sections: identical); (2) the cite numbers of each voice panel are a subset of the Technical cites of the same block (all: equal sets); (3) no heading, no TODO, no তুমি in a voice panel; (4) the Latin words in each Bangla panel are only acronyms, protocol, product and OS names, code, or key terms in parentheses at first use. "Key words" has no voices and is unchanged.

| # | Section | Voice | Check | Verdict | Note |
|---|---|---|---|---|---|
| 1 | In plain words | Layman | VM and hypervisor, container and shared kernel, OS family [1][2] | PASS | |
| 2 | In plain words | Bangla | Same | PASS | Key terms in parentheses at first use. OS, VM, Linux, Windows, Docker stay English. |
| 3 | How it works | Layman | 3 isolation tools, image, immutable, registry, Pods and nodes [1][3][4] | PASS | |
| 4 | How it works | Bangla | Same | PASS | "নিজের Pod-গুলোর" drops "assigned to it" (omission, not a FAIL). |
| 5 | When you need it | Layman | Docker overhead and traits, Kubernetes traits, NIST VM benefits, other OS [1][2][3] | PASS | |
| 6 | When you need it | Bangla | Same | PASS | |
| 7 | Trade-offs | Layman | Table as 7 points; last is the tutorial's own; NIST hedge; VMs and containers together [1][2][3] | PASS | Cites on the same cells. The term "inter-object attack surface" is NIST's wording from Technical. |
| 8 | Trade-offs | Bangla | Same | FAIL, fixed | "প্রতিটি বিন্দুতে" and "শেষ বিন্দুটি" use "বিন্দু" (a dot) for a list point. |
| 9 | A real-life example | Layman | Web app and sandbox in containers; Windows client in a VM | PASS | |
| 10 | A real-life example | Bangla | Same | PASS | |
| 11 | Common mistakes | Layman | 5 mistakes [1][3][4] | PASS | |
| 12 | Common mistakes | Bangla | Same | PASS | |
| 13 | What a tester can check | Layman | 6 test ideas, no cites | PASS | The script flagged one bullet line as 28 words; each sentence is short. |
| 14 | What a tester can check | Bangla | Same | PASS | |

Found FAILs: 1 (row 8). Fixed: 1.

## Re-check

| Row | Fixed text | Verdict |
|---|---|---|
| 8 | "প্রতিটি পয়েন্টে ... শেষ পয়েন্টটি ..." | PASS |

Open FAILs: 0
