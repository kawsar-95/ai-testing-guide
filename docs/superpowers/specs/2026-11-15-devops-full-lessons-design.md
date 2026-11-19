# DevOps & Cloud: full lessons for testers

Date: 2026-11-15. Status: in progress (see "Pages").

## Why

The owner asked for more detailed learning content on the DevOps & Cloud pages, for an SDET or SQA who is new to DevOps.

The first version of the module was a shelf. Each page had a lede, one `## What it is` section (or `## About the projects` in the CNCF part), and the KodeKloud Shorts. The text was a few definitions: 185 to 502 words a page, in all three voices together. The definitions were right, but a reader learned what a tool is called, not how it works or what a tester does with it.

## Validation of the first version (2026-11-15)

| Check | Result |
|---|---|
| `npm test` | 469/469 pass |
| Fact-check reports | 48 of 48 (24 facts, 24 voices) end with `Open FAILs: 0` |
| `python3 scripts/devops_claimcheck.py`, with a fresh fetch of every source | 89 of 90 quotes found. The Rook home page no longer has its sentence ("Rook turns distributed storage systems into self-managing, self-scaling, self-healing storage services"). Fixed: the page cites the Rook documentation now, and round 6 of its reports checked it. |
| The live site (`https://kawsar-95.github.io/ai-testing-guide/devops/` and the 24 pages) | 25 of 25 routes answer 200. Each page shows its title, links every source, and shows every reel of its data. |
| The 218 reels (`scripts/check-reels.ts`, DevOps only) | 218 checked, 0 problems: public, embeddable, same title and channel, still Shorts |
| Reading | Some titles promise more than the text: "Kubernetes Security and Troubleshooting" has no troubleshooting, "Kubernetes Architecture" names etcd and Operators but no control plane. |

## The shape of a full page

A full page keeps its route, its title, its reels, and the anchor `#what-it-is`. Its sections, in this order:

| Section | What it holds | Voices | Cites |
|---|---|---|---|
| Lede | One paragraph for a tester: why the topic matters in test work | no | no fact without a section that cites it |
| `## What it is` | The definitions, and how the topic fits next to the others | yes | yes |
| `## How it works` | The parts and the flow, with a text diagram where it helps | yes | yes |
| `## Try it` | Steps and commands that a beginner can run on a laptop, or read along when they need an account or a cluster | yes | yes: every command, flag, file, and path |
| `## How a tester uses it` | The test work that the topic serves: where tests run, what they check, what evidence they leave | yes | yes |
| `## Common mistakes` | Mistakes with the fix, each backed by a source | yes | yes |
| `## What a tester can check` | "Tutorial advice" tips: questions a tester asks about a team's setup | yes | no: the tutorial's own advice, and it says so |
| `## Key words` | A table of the terms of the page | no | no: each row restates a fact of the page |

A long section may be split into a continuation section (`tests/shape.ts`), as in the other modules.

## Writing rules

- **Sources.** Official documentation of the tool, or of the foundation or company behind it (git-scm.com, docs.github.com, jenkins.io, kubernetes.io, docs.docker.com, docs.aws.amazon.com, developer.hashicorp.com, docs.ansible.com, prometheus.io, opengitops.dev, dora.dev, ...). No blogs, forums, or AI summaries.
- **Cites.** Each fact of a Technical panel ends with a `<Cite>`. A command, a flag, a file name, a path, a version, a limit, or a price is a fact. Code blocks are covered by the cite of the sentence that introduces them.
- **Voices.** The Layman (`সহজ English`) and Bangla panels give no fact that the Technical panel does not give. They use plainer words and shorter sentences. Commands, flags, paths, product names, and common technical terms stay in English in the Bangla text, and the Bangla addresses the reader with আপনি.
- **Form.** Short sentences (about 11 words on average in the Technical panel), lists, bold run-in labels, and the main point first, so no section starts out HUGE by the measure of `docs/superpowers/research/cognitive-load-audit.md`.
- **Safety.** A command that deletes, overwrites, or costs money has a warning before it. `## Try it` uses local tools (Git, Docker, a local Kubernetes cluster) where it can, and says when a step needs a cloud account.
- **Links.** Link to the site's own pages where they go deeper (for example the Automate pages of the tutorial, the Linux sheets, or k6).

## Checks

1. `npm test`: `tests/devops.test.ts` checks the full shape for the pages in its `FULL` list, the one section for the others, and that the cites of all Technical panels and the sources agree.
2. `python3 scripts/devops_claimcheck.py <slug>`: every quote of the research notes is in its source. The overlap figure covers the cited text of every Technical panel.
3. An independent fact check: a fresh `claude -p` session per page that did not write it, read-only, with the page and the text of its sources only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md` ("The brief of the full pages"). A script recounts the FAILs and looks each quoted phrase of a PASS up in the sources.
4. A page is done when both reports end with `Open FAILs: 0`. The new rounds are added to the old reports of the page.
5. `npm run build`, the `out` checks, and a look at the page in a browser at desktop and phone width.

## What the first rounds taught

The checkers of the Part 1 pages kept finding the same kinds of slips. Avoid them in the next pages:

- **The lede describes the page.** A lede that states a fact gets a FAIL, even when a section cites the fact.
- **One cite per table cell** when the cells of a table come from different sources. A cite before the table covers it only when one source gives every cell.
- **A Key words row restates a Technical sentence.** A term that the Technical text does not define gets a FAIL.
- **Keep the limits of the source.** "Only", "by default", "UTC", "each at its own path": a word that the source does not have is a new claim. Use the source's own wording for defaults, limits, and conditions.
- **Label invented examples.** Diagrams, file names, sample data, and scripts that are the tutorial's own say so, and real command output says when it was run.
- **The Layman and Bangla panels add nothing.** "Your branch's version", "line by line", "a running copy": a plainer word must not add a fact.
- **The round script** must see every source: it stops now when it parses fewer sources than the page has (a title in double quotes was skipped once). Quotes in the research notes must avoid text that the page's markup splits, such as `exit(-1)` inside a code span, or quote it as the quote checker reads it: the code highlighting of the Docker docs puts a space before and after each `=` of a syntax line (`--mount type = volume,src = <volume-name>`).
- **No arithmetic that the source does not do.** "One first run and 6 retries, so seven runs" got a FAIL: the source gives the number of retries, not the number of runs. State the source's number, and the run's own count as the run's.
- **A shortened command is not the docs' command.** Show the whole command that the docs show, or say "a command like"; a copy that drops flags reads as a quote.
- **A modal or an exception of the source is part of the claim.** "Should always have a unique release ID" became "has", and "when you turn on automatic rotation (except managed rotation)" lost its exception: both got FAILs, in the facts and in the voices. Copy "should", "typically", "might", and "except ..." as the source has them.
- **A name or a command that no source explains is the tutorial's own.** Say so, and do not explain what it means unless a cited page does (the trust policy of a role was "AssumeRolePolicyDocument" by name only, and "the CLI reads no credential file" was an effect that no page promises). Match a name to a page by its text, and say that the match is by name only.
- **A practice run that calls an API leaves files.** The AWS CLI created `~/.aws/cli/cache/session.db` at the first real call, even to a local endpoint. Record what the run created and removed, and do not write "no `~/.aws` before or after" for such a run.
- **A consequence is a claim.** "Can leak a secret into a bug report" and "a test that reads this JSON can fail when a plan deletes an object" went beyond their sources and got FAILs. Say what the source says ("can contain a secret"), and keep the advice in the Tutorial advice tips.
- **A command that a step runs needs its own cite.** `terraform state list` and `crossplane version --client` were run on the page and described without a cite until a checker asked. Cite the page of each command that a step runs.
- **If a step hides a warning, record the step without the hiding line too.** ansible-lint 26.11.0 printed two deprecation warnings about callbacks that the tutorial's files do not use. The step sets `ANSIBLE_DEPRECATION_WARNINGS=false`, and the runner records the same command without it, so that the page shows what a reader sees and says why the line is there.
- **A tool writes to the home folder even in a local run.** Ansible makes `~/.ansible/tmp`, and ansible-lint makes `~/.cache/ansible-lint/latest.json`. Run the practice with an empty `HOME`, record the files that it leaves, and say so.
- **The repo claim check and the page fetcher read markup differently.** An italic word of a command becomes `[ pattern ]`, a code span splits `name:` from `’s`, and a `|` is escaped in the notes table. Quote the nearest plain text, or split the quote with `||`.
- **Keep the limit of a source in the sentence.** `thinks`, `by default`, `unless configured otherwise`, `numerous`, `always`, and `should` are claims too. The checkers raised two sentences that had dropped one (`thinks`). A re-read of the two pages against their quotes, after round 7, found eleven more (five in `terraform-iac` and six in `ansible`). Compare each Technical sentence with its quote for a missing limit, and keep the limit in the Bangla sentence too (`parity.py` counts `should` against `উচিত` and looks for a hedge next to each `can` or `would`).
- **A claim of absence needs a source or the run.** "No page that the tutorial read describes X" was wrong twice (the exit statuses of `promtool`, and `amtool config routes`), and the checkers found the pages that do describe them. Say what the run showed, cite the page that has it, or leave the sentence out.
- **A fact that is not in the run record cannot be checked.** A sentence about the `--help` text of a tool, read after the run, got a FAIL. Put the command in a step, so that its output is in the record, or leave the sentence out.
- **A quote that crosses a YAML comment line has a `# ` inside it in the source.** Split it with `||`. The checker joins the pieces and prints "quote not in sources" for them. That note is expected, and the row is PASS.
- **A page that answers a browser user agent with 403 can still be read.** `www.w3.org` does. `scripts/devops_claimcheck.py` now retries a 403 once with a plain user agent, and a 429 (`github.com` answers it when many of its pages are read in a row) up to three times after a wait.
- **An effect in a Try-it explanation is a claim.** "It checked `rules.yml` too, because the configuration lists it" got a FAIL. Show the printed lines that prove it, cite the page, or say it as the tutorial's own observation.
- **A Bangla word keeps the meaning of the English word.** "জমা করে" (collect) stood for "aggregate" in a sentence about rules and got a FAIL. Check the verbs of a definition against the Bangla verbs one by one.
- **A plainer word must not add an order or a limit.** "First", "always", "within" for "after": the Layman and Bangla panels got FAILs for each.
- **Real output of the page's own run** says when, and with which versions, it was run, and each output says that it is from the tutorial's run. From round 10 of `docker-images-compose`, the brief names such a record as N/A; a sentence in it that says how a tool works in general still needs a cite. Keep the run's logs until the page is done: a checker may ask for the output again.

## Pages

| Part | Page | Status |
|---|---|---|
| 1 | what-is-devops | done: 7 sources, fact-check rounds 6 to 8 |
| 1 | git-basics | done: 16 sources, rounds 6 to 10 |
| 1 | git-workflows | done: 14 sources, rounds 6 to 16 |
| 1 | ci-cd | done: 17 sources, rounds 6 to 10 |
| 1 | gitops | done: 8 sources, rounds 6 to 12 |
| 2 | docker-basics | done: 19 sources, rounds 6 to 8 |
| 2 | docker-images-compose | done: 18 sources, rounds 6 to 11 |
| 2 | docker-in-practice | done: 12 sources, rounds 6 to 8 |
| 3 | kubernetes-basics | done: 16 sources, rounds 6 to 10 |
| 3 | kubernetes-architecture | done: 19 sources, rounds 6 to 8 |
| 3 | kubernetes-networking-storage | done: 23 sources, rounds 6 to 9 |
| 3 | kubernetes-operations | done: 18 sources, rounds 6 to 9 |
| 3 | kubernetes-security-troubleshooting | done: 29 sources, rounds 6 to 10 |
| 4 | cloud-concepts | done: 27 sources, rounds 6 to 8 |
| 4 | aws-compute-storage | done: 24 sources, rounds 6 to 10 |
| 4 | aws-networking | done: 30 sources, rounds 6 to 8 |
| 4 | aws-identity-security | done: 33 sources, rounds 6 to 8 |
| 4 | aws-data-serverless | done: 44 sources, rounds 6 to 7 |
| 5 | terraform-iac | done: 57 sources, rounds 6 to 9 |
| 5 | ansible | done: 45 sources, rounds 6 to 9 |
| 6 | monitoring-observability | done: 41 sources, rounds 6 to 13 |
| 7 | cncf-build-deliver, cncf-runtime-data, cncf-network-security-observability | to do (cncf-runtime-data: the Rook sentence was fixed, round 6) |

When the last page is done, the `FULL` list of the test becomes the rule for every page, and this table is removed.
