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

Open FAILs: 0
