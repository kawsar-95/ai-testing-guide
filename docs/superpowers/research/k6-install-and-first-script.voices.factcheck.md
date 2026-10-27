# Voices fact-check: content/k6/install-and-first-script.mdx

Checked 2026-10-27 by an agent that did not write the voices. Each Layman and Bangla panel was compared with the Technical panel of the same block.

| Section | Layman | Bangla | Notes |
|---|---|---|---|
| Install k6 | PASS | PASS | Same install routes, same unofficial/official statements, same cite n=1. Command names (`winget`, `choco`, `brew`, `apt-get`, `dnf`, `grafana/k6`, `PATH`) stay in English. |
| Write your first script | PASS | PASS | Same facts. The script block is identical. Numbers (10 requests, 1 second) match. Cite n=4 only. |
| Run the script | PASS | PASS | `stdin`, `-`, and the Docker command match. Cites n=2 and n=3 are in Technical. |
| Read the output | PASS | PASS | Same output block, same metric list, same cites (3, 4). The "about 2 seconds" paragraph is not repeated, so no new fact. Bangla keeps metric names in English. |

Checks: no fact, number, name, example, or cite that Technical lacks. No meaning change. No Bangla command, flag, metric, or product name in Bangla letters. All Bangla addresses the reader with আপনি. No Layman sentence over 25 words.

Note: the voices repeat the uncited Technical claims (PowerShell as administrator, the progress line, the iterations option). They are tracked in the main report, so they are not counted here.

## Round 2

Changed text re-compared: the `iterations` option sentence (cite n=5) and the quickpizza sentence (cite n=2) match in Layman and Bangla. No new fact. The removed claims (administrator, progress line) are gone from all panels. Layman and Bangla do not repeat the 1.7 s paragraph.

Open FAILs: 0
