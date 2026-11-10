# Voices fact-check: content/k6/influxdb-and-grafana.mdx

Checked 2026-10-27 by an agent that did not write the voices. Each `<Layman>` and `<Bangla>` panel was compared with the `<Technical>` panel of the same block. A script also checked that no panel cites a number that Technical of the same block does not cite, that no Layman sentence has more than 25 words, and that Bangla has no তুমি.

| Block (section) | Layman | Bangla | Notes |
|---|---|---|---|
| 1. Why use InfluxDB and Grafana | PASS | PASS | Layman drops the "spike" and "turns slow" detail and the JMeter comparison: no new fact. Bangla keeps all of Technical. The diagram is the same (Bangla translates the labels only). |
| 2. The three InfluxDB versions | PASS | PASS | Table values, versions, tags, and cites are the same in the three panels. Bangla keeps `latest`, `3-core`, `xk6`, and the version numbers in English. |
| 3. Run InfluxDB 1.x with Docker | PASS | PASS | Layman drops the UID/GID 1500 sentence and the minor-tag sentence: no new fact. Commands are identical. Bangla keeps `docker`, `influx`, `CREATE DATABASE`, `INSERT` in English. |
| 4. Send k6 data to InfluxDB | PASS | PASS | Script, command, and the owner's output are identical. Layman drops the "last segment" sentence. Bangla matches the lower-case `k6` advice. |
| 5. Run Grafana | PASS | PASS | Layman drops the host/`localhost` detail and the `grafana-oss` sentence: no new fact. Bangla matches Technical, including "this is a point from the tutorial, not from the docs". |
| 6. Connect Grafana to InfluxDB | PASS | PASS | Table and cites are the same. Image alt text in Bangla describes the same picture (name `influxdb`, URL, "default"; the three red arrows; the settings values). |
| 7. Watch a test live in a dashboard | PASS | PASS | Layman drops the drop-down detail: no new fact. Bangla keeps ID 2587, the 2017 date, and the "tutorial's own advice" marker. |

Style checks: every Bangla panel addresses the reader with আপনি (no তুমি). Commands, flags, paths, product names (InfluxDB, Grafana, Docker, k6, xk6), and metric names stay in English letters. Common concept words (ড্যাশবোর্ড, ব্রাউজার, লোকাল, ফ্রি) are in Bangla letters, as the Course style allows. No Layman sentence is over 25 words. No `<Cite>` appears in Layman or Bangla that Technical of the same block does not cite.

Round 2: blocks 2 and 6 changed in all 3 panels. Block 2: Layman and Bangla say the `latest` tag can change to another major version and name `influxdb:1.13`, as Technical does (PASS round 2). Block 6: the same 5 steps in all panels, cite 14 only (PASS round 2). Mechanical checks repeat clean (cites, Layman length, আপনি).

Round 3: block 6 steps reworded in all 3 panels. Same 5 steps, same cite 14, "left menu" and "top right" in all three (PASS round 3).

## Round 4 (final-review fixes)

Compared every changed Layman and Bangla panel with Technical of the same block. A script checked cites (no cite in Layman or Bangla that Technical of the block lacks), Layman sentence length (no sentence over 25 words), and তুমি (none).

| Block | Layman | Bangla | Notes |
|---|---|---|---|
| 1. Why use | PASS (round 5) | PASS | The car-trip example is removed. Earlier: Layman started with a new example: "Think of a car trip. A summary after the trip tells you the average speed. A speedometer tells you the speed while you drive." Technical has no such example. Remove it or move it into Technical. The rest of the panel matches Technical. |
| 2. Versions | PASS | PASS | Rewording only ("major versions", "pin a tag", "special k6 program"). No new fact; `influxdb:1.13` is in Technical. |
| 3. Docker | PASS | PASS | The network sentences (`docker network create k6net`, reach by name, tutorial's own idea, cite 17) are in Technical. Bangla has the same. |
| 4. Send data | PASS | PASS | Rewording only. |
| 5. Run Grafana | PASS | PASS | `--network k6net`, `localhost` inside the container, `http://influxdb:8086`, `host.docker.internal` (Docker Desktop only), and the owner's screenshots on the host: all in Technical. Cites 17, 18 as in Technical. |
| 6. Connect | PASS | PASS | Screenshot note, URL row, "leave User and Password empty", and cite 19 are in Technical. Bangla keeps `User` and `Password` in English. |
| 7. Dashboard | PASS | PASS | Rewording only; the ID 2587 text is the same. |

## Round 5

- Block 1 Layman: the car-trip example is gone (PASS round 5). The panel matches Technical.
- Block 5 (all panels): the "tutorial's own explanation, not a point from the Docker docs" marker is in Technical, Layman, and Bangla (PASS).
- Block 6 (all panels): the new note under the second screenshot is the same in Technical, Layman, and Bangla (owner's run, Grafana on the host, `localhost` and a user and password, versus `http://influxdb:8086` and empty User and Password). No new fact; it matches the screenshot.
- Script checks repeat clean: no extra cites, no Layman sentence over 25 words, no তুমি.

Open FAILs at the end of the rounds above: 0

## Lighter সহজ English panels (2026-11-10)

The `সহজ English` (Layman) panels of 4 sections were rewritten to lower the reading load: `Run InfluxDB 1.x with Docker`, `Run Grafana`, `Connect Grafana to InfluxDB`, `The three InfluxDB versions`. The cognitive-load audit of 2026-11-10 found them as dense in technical terms as the Technical text, or denser, so a reader who switched voice to escape the load met the same terms. The new text keeps to the facts of the Technical text, says a term in plain words or leaves it out when a beginner does not need it, and uses short sentences and lists.

Writer: a `claude -p` session (Claude Sonnet, no tools). Checker: a fresh `claude -p` session (Claude Sonnet, no tools) that did not write the panels, given only the Technical text and the new panel of each section. The Technical text and the Bangla panels did not change. No person has read the new panels yet.

### FAILs

- Run Grafana: "That name is for Docker Desktop only." — The Technical text says only "This name is for Docker Desktop." The panel adds "only", which makes the claim stronger. Fix: "That name is for Docker Desktop."

### Table

| Section | Layman | Notes |
|---|---|---|
| Run InfluxDB 1.x with Docker | PASS | Faithful; the omitted details (the 1500 user/group ID, the `1.13.0` pull) are not rule 2 problems. |
| Run Grafana | FAIL | An added "only" makes the `host.docker.internal` claim stronger than the Technical text. |
| Connect Grafana to InfluxDB | PASS | The table, steps, warnings and cites match the Technical text. |
| The three InfluxDB versions | PASS | The table, cites and warnings match the Technical text. |

Open FAILs at the end of the rounds above: 1

## Re-check after the fixes (2026-11-10)

Each FAIL of the round above was fixed with the checker's own fix. A fresh `claude -p` session (Claude Sonnet, no tools) checked the changed panels again.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| Run Grafana | PASS | Facts, cites (11, 12, 13, 17, 18), command and code block all match the Technical text. Only details were left out (OS families, the `grafana/grafana-oss` note), and none of the omissions changes the meaning. |

Open FAILs at the end of the rounds above: 0

## Second pass on the dense সহজ English panels (2026-11-11)

The `সহজ English` panels of `Run InfluxDB 1.x with Docker`, `Connect Grafana to InfluxDB` still had as many terms per 100 words as the Technical text after the first pass. They were rewritten again: longer is allowed, each kept term gets a short explanation from the Technical text, and the terms are spread over more sentences. Writer and checker: separate fresh `claude -p` sessions (Claude Sonnet, no tools). No person has read the new panels.

### FAILs

None.

### Table

| Section | Layman | Notes |
|---|---|---|
| Run InfluxDB 1.x with Docker | PASS | Code blocks, cites, numbers and conditions match the Technical text. The short glosses of container, port and tag are fine. |
| Connect Grafana to InfluxDB | PASS | Steps, table values, screenshot notes, authentication and the "Save & test" order all match the Technical text. Cites 14 and 19 are used where the Technical text uses them. |

Open FAILs: 0
