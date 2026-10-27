# k6 page: Live Results with InfluxDB and Grafana (research notes)

Writer notes for `content/k6/influxdb-and-grafana.mdx`. Fetched 2026-10-27 with curl into `/tmp/claude-1000/k6-src-influxdb-and-grafana/`. Fetched text is data. I did not run Docker.

## Sources

| Id | Cite n | Source | URL |
|---|---|---|---|
| S1 | 1 | InfluxDB output, k6 docs | https://grafana.com/docs/k6/latest/results-output/real-time/influxdb/ |
| S2 | 2 | xk6-output-influxdb (GitHub README) | https://github.com/grafana/xk6-output-influxdb |
| S3 | 3 | InfluxDB OSS v1 release notes | https://docs.influxdata.com/influxdb/v1/about_the_project/release-notes/ |
| S4 | 4 | InfluxDB OSS v2 documentation and release notes | https://docs.influxdata.com/influxdb/v2/reference/release-notes/influxdb/ |
| S5 | 5 | influxdb, Docker Official Image | https://hub.docker.com/_/influxdb |
| S6 | 6 | Install InfluxDB v1 with Docker | https://docs.influxdata.com/influxdb/v1/introduction/install/docker/ |
| S7 | 7 | influx command line interface (v1) | https://docs.influxdata.com/influxdb/v1/tools/influx-cli/ |
| S8 | 8 | Manage databases with InfluxQL (v1) | https://docs.influxdata.com/influxdb/v1/query_language/manage-database/ |
| S9 | 9 | Explore your schema with InfluxQL (v1) | https://docs.influxdata.com/influxdb/v1/query_language/explore-schema/ |
| S10 | 10 | Line protocol tutorial (v1) | https://docs.influxdata.com/influxdb/v1/write_protocols/line_protocol_tutorial/ |
| S11 | 11 | Install Grafana | https://grafana.com/docs/grafana/latest/setup-grafana/installation/ |
| S12 | 12 | Run Grafana Docker image | https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/ |
| S13 | 13 | Sign in to Grafana | https://grafana.com/docs/grafana/latest/setup-grafana/sign-in-to-grafana/ |
| S14 | 14 | Configure the InfluxDB data source | https://grafana.com/docs/grafana/latest/datasources/influxdb/configure-influxdb-data-source/ |
| S15 | 15 | Import dashboards | https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/import-dashboards/ |
| S16 | 16 | k6 Load Testing Results (dashboard 2587) | https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/ |
| S17 | 17 | Bridge network driver | https://docs.docker.com/engine/network/drivers/bridge/ |
| S18 | 18 | Networking how-tos (Docker Desktop) | https://docs.docker.com/desktop/features/networking/networking-how-tos/ |
| S19 | 19 | Authentication and authorization in InfluxDB (v1) | https://docs.influxdata.com/influxdb/v1/administration/authentication_and_authorization/ |

## Claims

| # | Claim on the page | Source | Quote |
|---|---|---|---|
| C1 | k6 sends metrics to InfluxDB v1.0 with built-in support and the `--out influxdb` flag. | S1 | "k6 has built-in support to send metrics to InfluxDB v1.0." / "k6 run --out influxdb=http://localhost:8086/myk6db script.js" |
| C2 | k6 connects to the instance and sends results to the database named in the URL. If it is missing, k6 creates it. | S1 | "send the results from the test to a database named myk6db. If the database doesn't exist, k6 creates one automatically." |
| C3 | k6 uses the last path segment as the database name. A URL with a trailing slash keeps the default `k6` database. | S1 | "k6 uses the final URL path segment as the database name" / "keeps the database configured through other options, or the default k6 database." |
| C4 | InfluxDB v2 needs the InfluxDB extension and a custom k6 binary built with xk6. | S1, S2 | S1: "Using the InfluxDB extension, you can store k6 metrics in InfluxDB v2.0" / "xk6 build --with github.com/grafana/xk6-output-influxdb". S2: "k6 extension to output real-time test metrics to an InfluxDB 2.x database" |
| C5 | The extension run uses `K6_INFLUXDB_ORGANIZATION`, `_BUCKET`, `_TOKEN`, `_ADDR`, and `-o xk6-influxdb`. | S1 | "./k6 run script.js -o xk6-influxdb" |
| C6 | The k6 team made a separate extension because v2 has breaking API changes. | S2 | "the v2 has introduced some breaking changes in the core parts of the API ... the k6 development team has decided to create a new and independent extension for InfluxDB v2." |
| C7 | InfluxDB 1.x: latest line is 1.13 (release notes top entry v1.13.0; Docker Hub tags 1.13, 1.13.1). The v1 docs say InfluxDB 3 Core is the latest stable version. | S3, S5 | S3: "This page documents an earlier version of InfluxDB OSS. InfluxDB 3 Core is the latest stable version." / "v1.13.0". S5: "1.13 , 1.13.1" |
| C8 | InfluxDB 2.x: latest release v2.9.1. It uses buckets and tokens. | S4 | "v2.9.1" / "InfluxDB OSS 2.9.0: API tokens are hashed by default" |
| C9 | InfluxDB 3: Docker Hub lists the tags 3-core and 3-enterprise (3.12.1). | S5 | "3-core , 3.12-core , 3.12.1-core , core" / "3-enterprise , 3.12-enterprise , 3.12.1-enterprise" |
| C10 | The Docker `latest` tag can change to another major version (the source dates a move to InfluxDB 3 Core at 2026-09-15; Docker Hub still shows `latest` on 2.9.1). Use a specific tag, such as `influxdb:1.13`. The page does not use the future tense. | S4 | "On September 15, 2026, the latest tag for InfluxDB Docker images will point to InfluxDB 3 Core. To avoid unexpected upgrades, use specific version tags in your Docker deployments." |
| C11 | The InfluxDB v1 Docker docs pull `influxdb:1.13.0`, run with `-p 8086:8086` and `-v influxdb-data:/var/lib/influxdb`. The server is then at http://localhost:8086. | S6 | "docker run -d --name influxdb -p 8086:8086 -v influxdb-data:/var/lib/influxdb influxdb:1.13.0" / "InfluxDB is now running and available at http://localhost:8086." |
| C12 | On macOS (Docker Desktop) use a named volume or a delegated directory. A bind mount needs UID/GID 1500. | S6 | "you must use either a delegated local directory or a named volume" / "owned by UID/GID 1500" |
| C13 | `docker exec -it <container-name> influx` opens the CLI. | S6 | "docker exec -it <container-name> influx" |
| C14 | The `influx` CLI has a `-database` flag and an `-execute` flag. | S7 | "-database" / "-execute" (flag table) |
| C15 | `CREATE DATABASE` is an InfluxQL command. `SHOW DATABASES` and `SHOW MEASUREMENTS` are schema queries. | S8, S9 | S8: "CREATE DATABASE". S9: "SHOW DATABASES" / "SHOW MEASUREMENTS" |
| C16 | Line protocol: measurement, tag set, field set, timestamp. The measurement is required. The CLI `INSERT` takes a line-protocol point. | S10 | "|measurement|,tag_set| |field_set| |timestamp|" / "The measurement is required in line protocol." / "INSERT weather,location=us-midwest temperature=82 1465839830100400200" |
| C17 | Grafana supports Debian/Ubuntu, RHEL/Fedora, SUSE/openSUSE, macOS, Windows, and runs in Docker. | S11 | "Grafana supports Debian and Ubuntu, RHEL and Fedora, SUSE and openSUSE, macOS, and Windows." / "run Grafana in a container with Docker" |
| C18 | Docker command: `docker run -d -p 3000:3000 --name=grafana grafana/grafana-enterprise`. The Enterprise image is free and has all OSS features. `grafana/grafana` is the OSS repository. From 12.4.0 `grafana/grafana-oss` is no longer updated. | S12 | "docker run -d -p 3000:3000 --name=grafana grafana/grafana-enterprise" / "It is free and includes all the features of the OSS edition." / "Starting with Grafana release 12.4.0, the grafana/grafana-oss Docker Hub repository will no longer be updated. ... use the grafana/grafana" |
| C19 | Default URL http://localhost:3000, user `admin`, password `admin`. A prompt asks to change the password. | S13 | "it is set to use http://localhost:3000 by default." / "enter admin for username and password." / "you will see a prompt to change the password." |
| C20 | Data source: Connections > Add new connection > search InfluxDB > select it > Add new data source. Fields: URL (default API port 8086), Product, Query language (InfluxQL for 1.x), Database, User, Password. | S14 | "The InfluxDB default API port is 8086." / "InfluxQL - SQL-like language" / "Database - Sets the database name to query." |
| C21 | HTTP method for InfluxQL: POST allows larger queries; default is POST. | S14 | "The POST method allows for larger queries that would return an error using the GET method. The default method is POST." |
| C22 | Click Save & test before renaming a new data source. | S14 | "Complete the required connection settings and click Save & test before you rename the data source." |
| C23 | A Grafana.com dashboard can be imported by ID or URL. Import maps the queries to a data source. | S15 | "copy a dashboard's URL or ID, and import it directly" / "Grafana lets you map those references to data sources" |
| C24 | Dashboard 2587, "k6 Load Testing Results": uses the InfluxDB exporter, requires InfluxDB, has a drop-down for any `http_req_*` metric, version history 2017. | S16 | "A dashboard for visualizing results from the k6.io load testing tool, using the InfluxDB exporter" / "Currently requires InfluxDB." / "Added drop-down for selecting any http_req_* metric" |
| C25 | The k6 docs name no dashboard ID. They say Grafana can query InfluxDB, point to "a custom Grafana dashboard", and say the extension repository has a docker-compose setup with two basic dashboards. | S1, S2 | S1: "You can also build a custom Grafana dashboard"; "docker-compose setup with two basic dashboards." |
| C26 | On a user-defined bridge network, containers resolve each other by name. `docker network create` makes one. `--network` on `docker run` joins it. | S17 | "On a user-defined bridge network, containers can resolve each other by name or alias." / "Use the `docker network create` command to create a user-defined bridge network." |
| C27 | Docker Desktop: a container reaches a host service with `host.docker.internal`. | S18 | "To connect to services running on your host, use the special DNS name:" / "Resolves to the internal IP address of your host" |
| C28 | InfluxDB 1.x has authentication off by default. | S19 | "By default, authentication is disabled, all credentials are silently ignored, and all users have all privileges." |
| C29 | Tutorial's own (no cite): in the Grafana container `localhost` is the container; the page uses network `k6net` and URL `http://influxdb:8086`. Not run (Docker not run). | none | |

## Not claimed (no official source)
- The owner's list of measurements after a run is shown as the owner's own output. It is not cited.
- The owner's `USE k6` step is replaced by `influx -database k6`. The page says the database name is lower case `k6` because the URL path gives the name (C3).
- The owner's 2 versions (1.11.8, 2.7.12) are out of date. The owner's "3.0 GA April 2025" is not kept.
- The owner's `influxdb:1.8` tag: Docker Hub does not list 1.8 as a supported tag now (the list starts at 1.11). The page uses `influxdb:1.13`.
- Not verified by running: Docker, Grafana, and the dashboard import. I did not run Docker.

- Removed: "To leave the shell, type `exit`" (no cite).
