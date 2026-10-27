# Voices fact-check: content/k6/tags-and-groups.mdx

Checked 2026-10-27 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block (4 blocks: Calling more than one URL, Tags, The name tag for dynamic URLs, Groups).

## Results

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| 1 Calling more than one URL | PASS | PASS | Same facts, same cites (3, 6). Old host, one run, 769.76 ms and 72 requests are in Technical. The code and the output block are not repeated; no new fact. |
| 2 Tags | PASS (round 2) | PASS | Layman: the sentence "You can set them with the `--tag NAME=VALUE` flag, with the `K6_TAGS` environment variable, in the `tags` key of `options`, or in a JSON config file" has about 26 to 27 words, over the 25-word limit. Round 2: split into short sentences, all under 25 words. Facts and cites (1, 3) match Technical. |
| 3 The name tag for dynamic URLs | PASS | PASS | Same facts and cites (1, 2). The own-run result matches Technical (one name for all status codes, `StatusURL`). |
| 4 Groups | PASS | PASS | Same facts and cites (1, 3, 4, 5). The tutorial-advice tip is in all three panels and is marked as the tutorial's own view. |

## Other checks

- Bangla: no command, flag, metric, option, or product name is in Bangla letters (`group_duration`, `--summary-mode=full`, `K6_TAGS`, `merge-run-tags`, `systemTags` stay in English).
- Bangla uses আপনি; no তুমি.
- No Layman or Bangla panel has a Markdown heading.
- Layman and Bangla cite only numbers that Technical cites in the same block.
- Meaning: the Layman and Bangla text copies the Technical text on claim 11 (`systemTags` "on or off"). If the Technical text changes (fact-check claim 11), change both panels too.


## Round 2: example-project callout (2026-10-27)

Source: owner repository kawsar-95/k6-performance-testing, commit 51e4b9e (clone read only, nothing run). Facts about the owner project have no Cite.

| Check | Verdict | Note |
|---|---|---|
| Layman: same 3 facts, no new fact, sentences 25 words or fewer | PASS | longest 24 words |
| Bangla: same facts; `api`, `window`, `handleSummary()`, response time, failure rate, tag stay English | PASS | matches Technical |

Open FAILs: 0
