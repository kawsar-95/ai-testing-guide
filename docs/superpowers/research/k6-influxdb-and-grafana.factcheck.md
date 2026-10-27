# Fact-check: content/k6/influxdb-and-grafana.mdx

Checked 2026-10-27 by an agent that did not write the page. All 16 sources of `page.sources` fetched fresh with curl (outside the repo). The quotes of the research notes were not trusted. Docker was not run, so the commands were checked against the docs only.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Graphs of rate, time, errors show when a system turns slow (motivation) | none | PASS | The tutorial's own view, not a fact about a product. |
| 2 | InfluxDB is a time-series database that stores values with their time | none | PASS | Definition. Source 14: "Bucket: A named location ... where time-series data is stored". |
| 3 | k6 has built-in support to send metrics to InfluxDB v1 | 1 | PASS | k6 docs: "k6 has built-in support to send metrics to InfluxDB v1.0." |
| 4 | Grafana can query and show data from an InfluxDB instance | 1 | PASS | k6 docs: "You can use Grafana to query and visualize data from an InfluxDB instance." |
| 5 | Diagram: `--out influxdb=http://localhost:8086/k6`, InfluxDB port 8086, Grafana port 3000 | 1 | PASS | Source 1 uses `--out influxdb=http://localhost:8086/myk6db`; port 8086 from source 14; port 3000 from source 12. |
| 6 | InfluxDB 1.x is used because k6 supports it with no extra software | 1 | PASS | Source 1: v1 is "built-in"; v2 needs "the InfluxDB extension" and a custom build. |
| 7 | Owner likes it because it needs no plugin, unlike JMeter | none | PASS | Marked as the tutorial's own view. |
| 8 | InfluxDB 1.x: current release 1.13; Docker tags `1.13` and `1.13.1` | 3, 5 | PASS | Release notes top entry "v1.13.0". Docker Hub: "Supported tags ... 1.13 , 1.13.1". |
| 9 | 1.x main ideas: databases and InfluxQL | 14 | PASS | Source 14: bucket "equivalent to a database in 1.x"; "InfluxQL ... available across all InfluxDB versions" and 1.x provisioning uses `dbName`. |
| 10 | 1.x is built into k6 | 1 | PASS | See claim 3. |
| 11 | 2.x current release 2.9.1 | 4 | PASS | v2 release notes: "v2.9.1 Bug Fixes". Docker Hub: "2 , 2.9 , 2.9.1 , latest". |
| 12 | 2.x main ideas: buckets, organizations, API tokens | 1, 14 | PASS | Source 14: "Organization: An InfluxDB 2.x workspace"; "Token ... in 2.x and 3.x"; source 1 uses organization, bucket, token for v2. |
| 13 | 2.x connects through the xk6-output-influxdb extension | 1 | PASS | Source 1: "Using the InfluxDB extension, you can store k6 metrics in InfluxDB v2.0". |
| 14 | 3.x: Docker tags `3-core`, `3-enterprise`, currently 3.12.1 | 5 | PASS | Docker Hub: "3-core , 3.12-core , 3.12.1-core"; "3-enterprise , 3.12-enterprise , 3.12.1-enterprise". |
| 15 | InfluxDB 3 Core is the latest stable version | 3 | PASS | Release notes: "InfluxDB 3 Core is the latest stable version." |
| 16 | A bucket in 2.x and 3.x is the same idea as a database in 1.x | 14 | PASS | "A named location in InfluxDB 2.x and 3.x where time-series data is stored, equivalent to a database in 1.x." |
| 17 | Version numbers change often; read the release-notes pages | 3, 4 | PASS | Both pages exist and list the versions. |
| 18 | v2 needs a custom k6 binary built with xk6 and the extension | 1 | PASS | Source 1: "To build a k6 binary with the extension ... Install xk6 ... xk6 build --with github.com/grafana/xk6-output-influxdb". |
| 19 | The k6 team made a separate extension because v2 has breaking changes in its API | 2 | PASS | Source 2: "the v2 has introduced some breaking changes in the core parts of the API." |
| 20 | Do not use Docker tag `latest`; it will point to InfluxDB 3 Core; use a specific tag | 4 | PASS | Release notes: "On September 15, 2026, the latest tag ... will point to InfluxDB 3 Core. To avoid unexpected upgrades, use specific version tags". Note: that date has passed, and Docker Hub still lists `latest` on 2.9.1. The page repeats the source wording, so it is not a FAIL. |
| 21 | The InfluxData Docker guide shows a named volume and port 8086 | 6 | PASS | Guide: "Option B: Use a named docker volume ... docker run -d --name influxdb -p 8086:8086 -v influxdb-data:/var/lib/influxdb influxdb:1.13.0". |
| 22 | The `docker run` command with `influxdb:1.13` | 6 | PASS | Matches the guide, with the minor tag `1.13` (a Docker Hub tag). Not run. |
| 23 | `docker --version` checks Docker | none | PASS | The owner's own step (trivial Docker CLI), not a tested product claim. |
| 24 | `-p 8086:8086` publishes port 8086 on your machine | 6 | PASS | The guide uses `-p 8086:8086`; the owner's notes say the same. |
| 25 | The named volume keeps the data when the container stops | 6 | PASS | Guide: "Start a basic InfluxDB container with persistent storage" with a named volume. |
| 26 | On macOS with Docker Desktop use a named volume or a delegated directory | 6 | PASS | "On MacOS, you must use either a delegated local directory or a named volume". |
| 27 | A bind-mounted directory must belong to UID/GID 1500 | 6 | PASS | "The InfluxDB Docker container runs as user influxdb with UID/GID 1500 ... ensure the mounted directory on the host is owned by UID/GID 1500". |
| 28 | The owner used `influxdb:1.8`; it still exists | 5 | PASS (note) | Not in the supported list; the tag's existence is not shown by the cited page. It is true on Docker Hub, but only an inference from the page. Acceptable, as the page says "supported tags now starts at 1.11". |
| 29 | Docker Hub supported list starts at 1.11; newest is 1.13 | 5 | PASS | The list has 1.11, 1.12, 1.13, 2.8, 2.9, 3.x. There is no 1.8 entry. |
| 30 | The InfluxData guide pulls `influxdb:1.13.0`; a minor tag follows the newest 1.13.x | 5, 6 | PASS | Guide: "docker pull influxdb:1.13.0". Docker Hub puts `1.13` and `1.13.1` on one line (alias). |
| 31 | `docker ps` and `docker exec -it influxdb influx` open the InfluxDB shell | 6 | PASS | Guide: "docker exec -it <container-name> influx". `docker ps` is the owner's step. |
| 32 | k6 creates a missing database on its own | 1 | PASS | "If the database doesn't exist, k6 creates one automatically." |
| 33 | `CREATE DATABASE` is an InfluxQL command | 8 | PASS | Manage-database page lists `CREATE DATABASE` among InfluxQL administrative commands. |
| 34 | `SHOW DATABASES` lists the databases | 9 | PASS | Schema-exploration page lists `SHOW DATABASES`. |
| 35 | Line protocol: measurement, tag set, field set, optional timestamp | 10 | PASS | "It informs InfluxDB of the point's measurement, tag set, field set, and timestamp"; "The timestamp is optional in line protocol." |
| 36 | The shell `INSERT` takes a point in line protocol form | 10 | PASS | Source 10 shows `> INSERT weather,location=us-midwest temperature=82 ...` in the CLI. |
| 37 | `response_time` measurement, `api=login` tag, `value=250` field | none | PASS | The owner's own example, explained from claim 35. |
| 38 | To leave the shell, type `exit` | none | PASS (round 2) | The sentence is removed. |
| 39 | The script runs 50 iterations with 2 VUs and sleeps 1 s | none | PASS | The script itself (`vus: 2`, `iterations: 50`, `sleep(1)`). `k6 inspect` shows `"vus": 2, "iterations": 50`. |
| 40 | `--out` flag with the InfluxDB address; the last URL part is the database name | 1 | PASS | "k6 uses the final URL path segment as the database name". |
| 41 | A URL that ends with a slash names no database; k6 uses the default database `k6` | 1 | PASS (note) | Source: "keeps the database configured through other options, or the default k6 database". The page leaves out "configured through other options". Harmless. |
| 42 | `influx -database k6` replaces the owner's `USE K6`; `SHOW MEASUREMENTS` | 7, 9 | PASS | Source 7 flag table: "-database Database to connect to the server". Source 9: `SHOW MEASUREMENTS`. Not run (no Docker). |
| 43 | The owner's run listed one measurement for each metric (trimmed output) | none | PASS | Marked as the owner's own result. The shown names are a subset of the owner's list, and `response_time` (from the owner's own INSERT test) is correctly left out. |
| 44 | The database name is `k6` in lower case (owner wrote capitals once) | none | PASS | The owner's notes: `USE K6`. The page text is the tutorial's own advice. |
| 45 | Grafana runs on Debian, Ubuntu, RHEL, Fedora, SUSE, macOS, Windows, and Docker | 11 | PASS | FAQ: "Grafana supports Debian and Ubuntu, RHEL and Fedora, SUSE and openSUSE, macOS, and Windows. You can also run Grafana in a container with Docker". |
| 46 | Install steps differ by system and change between releases; follow the guide | 11 | PASS | "For platform-specific steps, refer to the installation guide for your operating system." (the "change between releases" part is the tutorial's own advice). |
| 47 | `docker run -d -p 3000:3000 --name=grafana grafana/grafana-enterprise` | 12 | PASS | Exact command in the guide. |
| 48 | `-d` runs in the background; `-p 3000:3000` publishes port 3000 | 12 | PASS | "-d (--detach) runs the container in the background"; "-p <host-port>:<container-port>". |
| 49 | Enterprise image is free and has all features of the open-source edition | 12 | PASS | "Grafana Enterprise ... It is free and includes all the features of the OSS edition." |
| 50 | Open-source image by name: `grafana/grafana` | 12 | PASS | "Grafana Open Source : grafana/grafana". |
| 51 | `grafana/grafana-oss` not updated from Grafana 12.4.0 | 12 | PASS | "Starting with Grafana release 12.4.0, the grafana/grafana-oss Docker Hub repository will no longer be updated." |
| 52 | First sign-in `admin`/`admin`; Grafana asks to change the password; strongly recommends it | 13 | PASS | "enter admin for username and password ... you will see a prompt to change the password ... We strongly recommend that you change the default administrator password." |
| 53 | `http://localhost:3000` is the Grafana address | 13 | PASS | "it is set to use http://localhost:3000 by default". |
| 54 | Grafana in a container: `localhost` means that container; use one Docker network | none | PASS | Marked "a point from the tutorial, not from the docs". Standard Docker behavior. Not run. |
| 55 | Data source steps: Connections, Add new connection, search InfluxDB, select it, Add new data source | 14 | PASS (round 2) for facts; FAIL for copy | Steps now match source 14. But see claim 69. |
| 56 | Query language InfluxQL for 1.x; Flux is for 2.x | 14 | PASS | "Flux - A functional data scripting language for InfluxDB 2.x"; InfluxQL "available across all InfluxDB versions". |
| 57 | URL `http://localhost:8086`; default API port is 8086 | 14 | PASS | "URL - The HTTP protocol, IP address, and port of your InfluxDB API. The InfluxDB default API port is 8086." |
| 58 | Database `k6` field | 14 | PASS | The "Database settings" section exists; the value is the tutorial's own. |
| 59 | HTTP Method POST allows larger queries; it is the default | 14 | PASS | "The POST method allows for larger queries ... The default method is POST." |
| 60 | Click Save & test before renaming; renaming first gives an error as the URL is empty | 14 | PASS | "click Save & test before you rename the data source. If you rename a new data source before saving it, Grafana validates the entire configuration and returns an error because the URL field is still empty." |
| 61 | Dashboard steps: Add visualization, data source, FROM measurement, save, Last 5 minutes, refresh 5s | none | PASS | The owner's own procedure; the screenshot `grafana-dashboard.webp` shows the editor with FROM, Last 5 minutes, 5s. |
| 62 | The k6 output sends metrics in real time | 1 | PASS (note) | Source 1 says this in the v2 section: "sends the k6 metrics in real-time to the InfluxDB instance". The v1 output is the same live output (it streams during the run). Acceptable. |
| 63 | Grafana imports a ready dashboard by ID or URL from Grafana.com and maps the data source | 15 | PASS | "Paste a Grafana.com dashboard URL or ID ... Select a data source, if required"; FAQ: "Grafana lets you map those references to data sources". |
| 64 | The k6 docs name no dashboard ID; they say you can build a custom dashboard | 1 | PASS | The page has no dashboard ID. It says "You can also build a custom Grafana dashboard". |
| 65 | The extension repo has a docker-compose setup with two basic dashboards | 1 | PASS | "the InfluxDB extension repository includes a docker-compose setup with two basic dashboards". Source 2 lists `docker-compose.yml`. |
| 66 | Community dashboard 2587 "k6 Load Testing Results", made for the InfluxDB output, drop-down for any `http_req_*` metric | 16 | PASS | URL `/dashboards/2587-k6-load-testing-results/`; "using the InfluxDB exporter"; "Added drop-down for selecting any http_req_* metric". |
| 67 | Its version history is from 2017; check it works with your k6 version | 16 | PASS | "Version 1 - 06 July 2017 ... Version 3 - 18 July 2017". The warning is the tutorial's own advice and is marked so. Whether it works with k6 v2 data was not tested. |
| 68 | Key words table | none | PASS | Definitions only; consistent with the sources above. Last section. |
| 20b | Do not use `latest`; the docs warn it can change to a different major version; use a tag such as `influxdb:1.13` | 4 | PASS (round 2) | Release notes: the `latest` tag "will point to InfluxDB 3 Core. To avoid unexpected upgrades, use specific version tags". No future date on the page now. |
| 69 | Copy check, Technical and Layman step sentence | 14 | PASS (round 3) | Reworded. Overlap check now finds only the 2 source URLs. Facts match source 14: "left-side menu", Connections, Add new connection, search InfluxDB, select it, "Add new data source in the upper right". Earlier text: `linux_overlap.py` found a run of 14 words copied from source 14: "Add new connection. Type InfluxDB in the search bar. Select the InfluxDB data source. Click Add new data source" (Layman panel copies the doc list almost word for word; Technical is a close copy of the same run). Reword the steps (the other overlap runs are the 2 source URLs). |

## Other checks

- Script: copied to a scratch file, `k6 inspect` exit 0 (`"vus": 2`, `"iterations": 50`). Import of `k6/http` and `sleep` present. No removed option, no duplicate key. PASS.
- Review Focus: no old option or removed executor; no credential or token (grep `eyJ`, `admin@`, `roadtocareer`, `bkash` gives 0 lines). The settings screenshot shows the data source user `admin` and password "configured" (the default local login, no secret). No number of the owner's run is stated as a general k6 fact (the measurement list is labeled the owner's own result). PASS.
- Spec §5/§6: lede, `<PageMeta />`, 7 `##` sections with `<Voices>`, `## Key words` last. Demo target is `https://quickpizza.grafana.com/`. No pinned Grafana zip. Only official sources. PASS.
- Images: only `grafana-connections.webp`, `grafana-influxdb-settings.webp`, `grafana-dashboard.webp` are used (opened and checked). Alt text matches: connections = Data sources page, one InfluxDB source `influxdb` at `http://localhost:8086`, "default" badge; settings = red arrows at URL, Database `k6`, HTTP Method `POST`; dashboard = Time series panel, legend `http_reqs.mean` and `iteration_duration.mean`, data source `influxdb`, FROM `http_reqs`, Last 5 minutes, refresh 5s. `grafana-add-influxdb.webp` is deleted and no content, lib, or test file refers to it (only the plan doc, which the controller must update). PASS.
- Copy check: `python3 scripts/linux_overlap.py content/k6/influxdb-and-grafana.mdx <raw-dir>` found 2 runs, both are source URL text in `page.sources` (not prose). PASS.
- Tests: `node --test tests/voice-source.test.ts tests/k6.test.ts` pass.
- Not checked: nothing was run in Docker (`influxdb:1.13`, `influx -database k6`, Grafana to InfluxDB connection, dashboard 2587 with k6 v2 data).

Round 2 (2026-10-27): claims 38 and 55 fixed, the Docker `latest` sentence re-checked (PASS). The copy check now finds a new run (claim 69).

Round 3 (2026-10-27): claim 69 fixed. Overlap check: 2 runs, both source URLs. Tests pass.

## Round 4 (final-review fixes)

Checked 2026-10-27 against commit f1ff844 (uncommitted tree equals it for the page). Sources 17, 18, 19 fetched fresh with curl. New or changed claims:

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 70 | `docker network create k6net` makes a user-defined Docker network | 17 | PASS | "Use the docker network create command to create a user-defined bridge network." |
| 71 | On a user-defined bridge network, containers reach each other by name | 17 | PASS | "On a user-defined bridge network, containers can resolve each other by name or alias." |
| 72 | `--network k6net` on both `docker run` lines; the network is the tutorial's own addition | none | PASS | Marked as the tutorial's own. Both lines (InfluxDB and Grafana) have the flag. |
| 73 | Grafana reaches InfluxDB at `http://influxdb:8086` (container name and port); the data source URL row says the same | 17, 14 | PASS | Follows from claim 71 and the container name `--name influxdb`; port 8086 from source 14. |
| 74 | The k6 command runs on the host and keeps `http://localhost:8086/k6` | 6 | PASS | The InfluxDB container publishes `-p 8086:8086` (source 6 guide). |
| 75 | Inside the Grafana container, `localhost` means the Grafana container, not your machine | none | PASS (round 5) | Now marked in all panels: "This is the tutorial's own explanation, not a point from the Docker docs." Earlier: a Docker networking fact with no cite and no "tutorial's own" marker on that sentence (round 1 had the marker). Source 18 only says to use a special DNS name for the host. Add a cite or mark the sentence as the tutorial's own explanation. |
| 76 | On Docker Desktop a container reaches the host with `host.docker.internal`; the name is for Docker Desktop | 18 | PASS | Docker Desktop how-tos: "To connect to services running on your host, use the special DNS name: host.docker.internal Resolves to the internal IP address of your host". |
| 77 | The owner's screenshots show Grafana on the host, so they show `http://localhost:8086` | none | PASS | The first screenshot shows URL `http://localhost:8086`. The page text says it is the owner's. |
| 78 | Leave User and Password empty; InfluxDB 1.x has authentication off by default | 19 | PASS | "By default, authentication is disabled, all credentials are silently ignored, and all users have all privileges." Note (not a FAIL): the second screenshot (`grafana-influxdb-settings.webp`) shows User `admin` and Password "configured", and the URL `localhost`. The page says "leave empty" and the note about the owner's screenshot sits only under the first image. Suggest the same one-line note under the second image. |
| 79 | Table row: URL `http://influxdb:8086` | 14 | PASS | Default API port 8086 (source 14); name from claim 73. |
| 80 | Technical text of the Docker latest tag, versions, and steps (unchanged) | 3,4,5,6,14 | PASS | Not changed in meaning; re-read. |

Other round 4 checks:
- Overlap check (with sources 17 to 19 added): 2 runs, both source URLs. PASS.
- `node --test tests/voice-source.test.ts tests/k6.test.ts`: pass 30, fail 0.
- No new `k6` script. The two `docker run` lines were not run (no Docker).
- All sources 1 to 19 are cited at least once (17 in blocks 3 and 5, 18 in block 5, 19 in block 6).

## Round 5

Checked 2026-10-27 against the last commit.

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 75 | `localhost` inside the Grafana container means that container | none | PASS (round 5) | Marked as the tutorial's own explanation in Technical. |
| 81 | New note under the second screenshot: it is the owner's run with Grafana on the host; it shows `http://localhost:8086` and a user and password; the steps use `http://influxdb:8086` and empty User and Password | none | PASS | Opened `grafana-influxdb-settings.webp`: URL `http://localhost:8086`, Database `k6`, User `admin`, Password "configured", HTTP Method POST. The note is accurate. The `admin` user is a local default, not a secret. |

Overlap check: 2 runs, both source URLs. `node --test tests/voice-source.test.ts tests/k6.test.ts`: pass 30, fail 0.

Open FAILs: 0
