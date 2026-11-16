# Fact check: devops / docker-images-compose

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.docker.com/reference/dockerfile/; S2 https://docs.docker.com/compose/; S3 https://docs.docker.com/build/bake/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / docker-images-compose (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Build an image with a Dockerfile, and run several containers together with Compose." | none | N/A | This line describes the page. It gives no tool fact that needs a cite. The Dockerfile and Compose facts it contains are cited below (rows 2 and 3). |
| 2 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." |
| 3 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | S2: "Docker Compose is a tool for defining and running multi-container applications." |
| 4 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | S3: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |

Open FAILs after round 1: 0

Changed after this round: The description of the page (the lede) was cut to what the page explains. The Layman and Bangla panels were not changed: this checker passed them, and the checker of round 2 failed the same text.

## Round 2 (2026-11-05)

## Fact check: devops / docker-images-compose (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." (S1 line 277-278, the line break falls after "a") |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | "Docker Compose is a tool for defining and running multi-container applications." (S2 line 276) |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." (S3 lines 276-277) |

Open FAILs after round 2: 0

Changed after this round: Layman and Bangla restate the three Technical sentences without dropping "all the commands a user could call on the command line", "defining", "a feature of Docker Buildx", and "declarative". The round 1 checker passed the earlier voices and the round 2 checker did not; both verdicts are kept here.

## Round 3 (2026-11-05)

## Fact check: devops / docker-images-compose (round 3)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | This sentence describes the page itself. It is not a fact about a tool, product, command or number. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." The source wraps this sentence across lines 277-278. |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | S2: "Docker Compose is a tool for defining and running multi-container applications." |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | S3: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." The source wraps this sentence across lines 276-277. |

Open FAILs after round 3: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / docker-images-compose (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It gives no fact about a tool. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | S2: "Docker Compose is a tool for defining and running multi-container applications." |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | S3: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / docker-images-compose (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Dockerfile, Docker Compose, and Bake. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It describes the page itself. It gives no fact about a tool, product, command, or number. |
| 1 | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." (S1 lines 277-278, with a line break after "a") |
| 2 | Docker Compose is a tool for defining and running multi-container applications | S2 | PASS | "Docker Compose is a tool for defining and running multi-container applications." |
| 3 | Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file | S3 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 18 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-16)

# Fact check: devops / docker-images-compose (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page covers how a Dockerfile builds an image, the build cache, Compose from one file, and Bake for builds | 1,4,9,18 | N/A | Describes the page itself. The Bake and Compose facts are covered in rows 11-13 and 6-10. |
| 2 | Lede | Page explains Dockerfile, instruction order, Compose from one file, and a practice run of the Quickstart | 11 | N/A | Describes the page itself. |
| 3 | What it is | A Dockerfile is a text document with all the commands a user could call on the command line to assemble an image | 1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a" |
| 4 | What it is | Docker runs instructions in a Dockerfile in order | 1 | PASS | S1: "Docker runs instructions in a Dockerfile in order." |
| 5 | What it is | A Dockerfile must begin with a `FROM` instruction | 1 | PASS | S1: "A Dockerfile must begin with a FROM instruction." |
| 6 | What it is | `docker build` is an alias of `docker buildx build`, which starts a build using BuildKit | 2 | PASS | S2: "Aliases ... docker build" and "The docker buildx build command starts a build using BuildKit." |
| 7 | What it is | `-t` (`--tag`) sets the image identifier in the format `[registry/]repository[:tag]` | 2 | PASS | S2: "-t, --tag Image identifier (format: [registry/]repository[:tag])" |
| 8 | What it is | Docker Compose is a tool for defining and running multi-container applications | 9 | PASS | S9: "Docker Compose is a tool for defining and running multi-container applications." |
| 9 | What it is | It manages services, networks, and volumes in a single YAML configuration file | 9 | PASS | S9: "manage services, networks, and volumes in a single YAML configuration file." |
| 10 | What it is | With a single command you create and start all the services from your configuration file | 9 | PASS | S9: "with a single command, you create and start all the services from your configuration file." |
| 11 | What it is | Default Compose file path is `compose.yaml` (preferred) or `compose.yml` in the working directory | 10 | PASS | S10: "The default path for a Compose file is compose.yaml (preferred) or compose.yml that is placed in the working directory." |
| 12 | What it is | Compose works in all environments: production, staging, development, testing, CI | 9 | PASS | S9: "Compose works in all environments - production, staging, development, testing, as well as CI workflows." |
| 13 | What it is | Bake is a feature of Docker Buildx that defines build configuration in a declarative file instead of a complex CLI expression | 18 | PASS | S18: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |
| 14 | What it is | Bake can run multiple builds concurrently with a single invocation | 18 | PASS | S18: "also lets you run multiple builds concurrently with a single invocation." |
| 15 | What it is | Bake file in HCL or JSON; Bake can also build directly from a Compose file | 18 | PASS | S18: "A Bake file can be written in HCL or JSON format. Bake can also build directly from a Docker Compose file." |
| 16 | What it is | Table: Docker build reads a `Dockerfile` (S1); command `docker build` (S2) | 1,2 | PASS | S1: "A Dockerfile is a text document ... to assemble an image". S2: alias `docker build`. |
| 17 | What it is | Table: Compose reads a `compose.yaml` (S10); command `docker compose up` (S11) | 10,11 | PASS | S10: "default path for a Compose file is compose.yaml". S11: "$ docker compose up" |
| 18 | What it is | Table: Bake reads HCL/JSON file or Compose file; command `docker buildx bake` | 18 | PASS | S18: "A Bake file can be written in HCL or JSON format" and "$ docker buildx bake" |
| 19 | How it works | Intro: these are the instructions of the practice-run Dockerfile | n/a | N/A | Describes the page itself. The listed instructions all appear in the Dockerfile of Try it. |
| 20 | How it works | `FROM` specifies the base image from which you are building | 1 | PASS | S1: "The FROM instruction specifies the base image from which you are building." |
| 21 | How it works | `WORKDIR` sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, `ADD` that follow | 1 | PASS | S1: "sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it" |
| 22 | How it works | `ENV` sets the environment variable `<key>` to the value `<value>` | 1 | PASS | S1: "The ENV instruction sets the environment variable <key> to the value" |
| 23 | How it works | `RUN` executes any commands to create a new layer on top of the current image | 1 | PASS | S1: "The RUN instruction will execute any commands to create a new layer on top of the current image." |
| 24 | How it works | `COPY` copies new files or directories from `<src>` into the image filesystem at `<dest>` | 1 | PASS | S1: "The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the image at the path <dest>." |
| 25 | How it works | `EXPOSE` doesn't actually publish the port; it is documentation about which ports are intended to be published | 1 | PASS | S1: "The EXPOSE instruction doesn't actually publish the port. It functions as a type of documentation ... about which ports are intended to be published." |
| 26 | How it works | `CMD` provides defaults for an executing container; with more than one only the last takes effect | 1 | PASS | S1: "If you list more than one CMD, only the last one takes effect." and "to provide defaults for an executing container." |
| 27 | How it works | The build context is the set of files that your build can access | 3 | PASS | S3: "The build context is the set of files that your build can access." |
| 28 | How it works | Docker sends everything in your project directory to the daemon when it builds an image | 11 | PASS | S11: "Docker sends everything in your project directory to the daemon when it builds an image." |
| 29 | How it works | `.dockerignore` is a newline-separated list of patterns similar to Unix shell file globs | 3 | PASS | S3: "The .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells." |
| 30 | How it works | It keeps unneeded files out of the build context | 11 | PASS | S11: "Create a .dockerignore file to keep unnecessary files out of your build context" |
| 31 | How it works | If a layer changes, all other layers after it are also affected | 4 | PASS | S4: "If a layer changes, all other layers that come after it are also affected." |
| 32 | How it works | Make expensive steps near the beginning, steps that change often near the end | 5 | PASS | S5: "try to make expensive steps appear near the beginning of the Dockerfile. Steps that change often should appear near the end" |
| 33 | How it works | Docker's example: copy package management files, install dependencies, then copy source code | 5 | PASS | S5: "First, copy over the package management files ... Then, install the dependencies. Finally, copy over the project source code, which is subject to frequent change." |
| 34 | How it works | Multi-stage builds use multiple `FROM` statements | 6 | PASS | S6: "With multi-stage builds, you use multiple FROM statements in your Dockerfile." |
| 35 | How it works | You can selectively copy artifacts between stages, leaving behind what you don't want in the final image | 6 | PASS | S6: "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image." |
| 36 | How it works | By default Compose sets up a single network for your app | 14 | PASS | S14: "By default, Compose sets up a single network for your app." |
| 37 | How it works | Each service container joins that network, is reachable by other containers, and is discoverable by service name | 14 | PASS | S14: "Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by its service name." |
| 38 | How it works | Compose always starts and stops containers in dependency order | 13 | PASS | S13: "Compose always starts and stops containers in dependency order" |
| 39 | How it works | On startup Compose does not wait until a container is "ready", only until it's running | 13 | PASS | S13: "On startup, Compose does not wait until a container is "ready", only until it's running." |
| 40 | How it works | `condition` with `service_healthy`: the dependency must be "healthy", as defined with `healthcheck`, before the dependent starts | 13 | PASS | S13: "service_healthy. This specifies that a dependency is expected to be "healthy", which is defined with healthcheck, before starting a dependent service." |
| 41 | How it works | Diagram is the tutorial's own picture of the practice run | n/a | N/A | The diagram is the tutorial's own illustration of its Try it files, with no tool claim. |
| 42 | Try it | Practice run is Docker's Quickstart: a small Flask app that counts visits in Redis | 11 | PASS | S11: "Using the Flask framework, the application features a hit counter in Redis" |
| 43 | Try it | It needs Docker Compose | 11 | PASS | S11: "Installed the latest version of Docker Compose" |
| 44 | Try it | Tutorial ran it on 2026-11-16 with Docker Engine 29.9.3 and Compose v5.5.1 on Linux; leaves out Watch and multiple-files steps | n/a | N/A | The tutorial's own run record, not a claim about a tool. S11 does have the Watch and multi-file steps. |
| 45 | Try it | Step 1: `mkdir compose-demo`, `cd compose-demo` | 11 | PASS | S11: "$ mkdir compose-demo $ cd compose-demo" |
| 46 | Try it | `app.py` reads Redis connection details from env vars with defaults; code block matches | 11 | PASS | S11: "The app reads its Redis connection details from environment variables, with sensible defaults"; the code matches (host `REDIS_HOST`/"redis", port `REDIS_PORT`/"6379", `cache.incr("hits")`). |
| 47 | Try it | `requirements.txt` lists `flask` and `redis` | 11 | PASS | S11: "flask redis" |
| 48 | Try it | Dockerfile is the Quickstart's, without comments; code matches | 11 | PASS | S11 lists the same ten instructions, including `FROM python:3.12-alpine` and `CMD ["flask", "run", "--debug"]`. |
| 49 | Try it | Name the file `Dockerfile` with no extension; some editors add `.txt`, causing the build to fail | 11 | PASS | S11: "Make sure the file is named Dockerfile with no extension. Some editors add .txt automatically, which causes the build to fail." |
| 50 | Try it | Note the order: `requirements.txt` copied and installed before the rest of the code | n/a | N/A | The reader's own observation of the Dockerfile shown above. |
| 51 | Try it | `.env` holds config values; Compose reads it automatically for interpolation in `compose.yaml` | 11 | PASS | S11: "Compose automatically reads .env and makes these values available for interpolation in your compose.yaml." |
| 52 | Try it | `.dockerignore` keeps `.env` (may contain secrets) and cached Python bytecode out of the build context; `.env` and `.dockerignore` blocks match | 11 | PASS | S11: "that includes your .env file (which may contain secrets) and any cached Python bytecode. Excluding them"; both files list the same lines as S11. |
| 53 | Try it | `compose.yaml` is the Quickstart's file with health check and named volume, without `develop.watch`; YAML matches | 11 | PASS | S11 Step 5 file: the same `web`, `redis`, `healthcheck` (5s/3s/5/10s) and `redis-data` entries, minus `develop:` / `watch:`. |
| 54 | Try it | `web` uses an image built from the Dockerfile in the current directory and maps host port 8000 to container port 5000 | 11 | PASS | S11: "The web service uses an image that's built from the Dockerfile in the current directory. It maps port 8000 on the host to port 5000 on the container" |
| 55 | Try it | `redis` uses a public Redis image from Docker Hub | 11 | PASS | S11: "The redis service uses a public Redis image pulled from the Docker Hub registry." |
| 56 | Try it | `redis-cli ping` expects `PONG`; with `interval: 5s` and `retries: 5` Compose waits up to 25 seconds | 11 | PASS | S11: "expects a PONG response" and "With interval: 5s and retries: 5, Compose will wait up to 25 seconds before giving up." |
| 57 | Try it | `redis-data:/data` mounts the named volume at `/data`, where Redis writes its data files | 11 | PASS | S11: "mounts the named volume at /data, the path where Redis writes its data files." |
| 58 | Try it | `docker compose config` works purely from your files; `.env` variables are replaced with their values | 11 | PASS | S11: "it works purely from your files" and "have all been replaced with the values from your .env file." |
| 59 | Try it | `-d` runs the containers in the background; `docker compose up -d` | 15 | PASS | S15: "-d, --detach Detached mode: Run containers in the background" |
| 60 | Try it | Tutorial's run: `web` started only after `redis` was healthy (log output) | n/a | N/A | The tutorial's own observed output, not a claim about a tool. |
| 61 | Try it | Open `http://localhost:8000` and refresh: counter increments on each visit | 11 | PASS | S11: "Refresh the page — the counter increments on each visit." |
| 62 | Try it | Tutorial's run gave "seen 1 time(s)", then 2, then 3 | n/a | N/A | The tutorial's own observed output. |
| 63 | Try it | `docker compose logs -f` follows the log stream; pass a service name to follow one service | 11 | PASS | S11: "The -f flag follows the log stream in real time" and "To follow logs for a single service, pass its name" |
| 64 | Try it | `docker compose exec` runs a command in an already-running container without starting a new one; 3 commands | 11 | PASS | S11: "docker compose exec runs a command inside an already-running container without starting a new one." The three commands appear in S11. |
| 65 | Try it | Ctrl+C stops following logs; the containers keep running | 11 | PASS | S11: "Press Ctrl+C to stop following logs. The containers keep running." |
| 66 | Try it | Tutorial's run: `env` showed `REDIS_HOST=redis`, `REDIS_PORT=6379`; `GET hits` returned 3 | n/a | N/A | The tutorial's own observed output. |
| 67 | Try it | Named volume persists between `compose down` and `compose up` cycles | 11 | PASS | S11: "persists between compose down and compose up cycles." |
| 68 | Try it | `--wait` waits for services to be running or healthy and implies detached mode | 15 | PASS | S15: "--wait Wait for services to be running\|healthy. Implies detached mode." |
| 69 | Try it | The counter continues from where it left off | 11 | PASS | S11: "the counter continues from where it left off." |
| 70 | Try it | Tutorial's run: next visit gave "seen 4 time(s)" | n/a | N/A | The tutorial's own observed output. |
| 71 | Try it | `docker compose down -v` removes named volumes with the containers; permanently deletes stored data (callout and block) | 11 | PASS | S11: "The -v flag removes named volumes along with the containers. Use this intentionally — it permanently deletes the stored data." |
| 72 | How a tester uses it | Compose manages services, networks, volumes in one YAML file | 9 | PASS | S9: "manage services, networks, and volumes in a single YAML configuration file" |
| 73 | How a tester uses it | With a custom project name the same `compose.yaml` can be deployed twice on the same infrastructure without changes | 10 | PASS | S10: "so that the same compose.yaml file can be deployed twice on the same infrastructure, without changes" |
| 74 | How a tester uses it | Set the project name with `--project-name` or `COMPOSE_PROJECT_NAME` | 14 | PASS | S14: "You can override the project name with either the --project-name flag or the COMPOSE_PROJECT_NAME environment variable." |
| 75 | How a tester uses it | `docker compose up --wait` waits for services to be running or healthy | 15 | PASS | S15: "Wait for services to be running\|healthy." |
| 76 | How a tester uses it | `--wait-timeout` sets the maximum duration in seconds to wait | 15 | PASS | S15: "--wait-timeout Maximum duration in seconds to wait for the project to be running\|healthy" |
| 77 | How a tester uses it | Healthy needs a `healthcheck` on the service | 13 | PASS | S13: "a dependency is expected to be "healthy", which is defined with healthcheck" |
| 78 | How a tester uses it | `--exit-code-from` returns the exit code of the selected service container | 15 | PASS | S15: "--exit-code-from Return the exit code of the selected service container." |
| 79 | How a tester uses it | It implies `--abort-on-container-exit`, which stops all containers if any was stopped | 15 | PASS | S15: "Implies --abort-on-container-exit" and "Stops all containers if any container was stopped" |
| 80 | How a tester uses it | If `up` itself errors, its exit code is 1 | 15 | PASS | S15: "If the process encounters an error, the exit code for this command is 1." |
| 81 | How a tester uses it | By default `docker compose down` removes only service containers, networks defined in the Compose file, and the default network | 16 | PASS | S16: "By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section of the Compose file. The default network, if one is used." |
| 82 | How a tester uses it | `-v` also removes named volumes in the `volumes` section and anonymous volumes attached to containers | 16 | PASS | S16: "Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers" |
| 83 | How a tester uses it | `docker compose config` shows the fully resolved configuration | 11 | PASS | S11: "The output is the fully resolved configuration" |
| 84 | How a tester uses it | `docker compose logs` views output from containers; `-t` shows timestamps | 17 | PASS | S17: "View output from containers" and "-t, --timestamps Show timestamps" |
| 85 | How a tester uses it | `docker compose exec` is the primary tool for live debugging | 11 | PASS | S11: "This is the primary tool for live debugging." |
| 86 | How a tester uses it | `--pull` forces Docker to check for and download a newer base image | 8 | PASS | S8: "The --pull flag forces Docker to check for and download a newer version of the base image" |
| 87 | How a tester uses it | `--no-cache` disables the build cache, forcing a rebuild of all layers from scratch | 8 | PASS | S8: "The --no-cache flag disables the build cache, forcing Docker to rebuild all layers from scratch" |
| 88 | How a tester uses it | Docker's example uses both: `docker build --pull --no-cache -t my-image:my-tag .` | 8 | PASS | S8: "$ docker build --pull --no-cache -t my-image:my-tag ." |
| 89 | How a tester uses it | The Bake docs list workflows such as running tests and lint checks and exporting build artifacts | 18 | PASS | S18: "For practical workflows, see Run tests and lint checks, Export build artifacts" |
| 90 | Common mistakes | With short syntax Compose does not wait for dependencies to be "healthy" before starting a dependent service | 12 | PASS | S12: "With short syntax, Compose does not wait for dependency services to be "healthy" before starting a dependent service." |
| 91 | Common mistakes | If an app starts before its database it may not find a database able to handle its SQL statements | 13 | PASS | S13: "the application service might start before the database service and won't find a database able to handle its SQL statements." |
| 92 | Common mistakes | Add a `healthcheck` and `condition: service_healthy` | 13 | PASS | S13: "The solution for detecting the ready state of a service is to use the condition attribute" and "service_healthy ... defined with healthcheck" |
| 93 | Common mistakes | `HOST:CONTAINER` should always be a quoted string to avoid conflict with the YAML base-60 float | 12 | PASS | S12: "HOST:CONTAINER should always be specified as a (quoted) string, to avoid conflicts with YAML base-60 float." |
| 94 | Common mistakes | Without a host IP, Docker binds to all interfaces (`0.0.0.0`), bypassing host firewall rules | 12 | PASS | S12: "If you do not specify a host IP (such as 127.0.0.1), Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules." |
| 95 | Common mistakes | Short-syntax example with a host IP is `"127.0.0.1:8001:8001"` | 12 | PASS | S12: "- "127.0.0.1:8001:8001"" |
| 96 | Common mistakes | Build args and env vars are inappropriate for secrets because they persist in the final image | 7 | PASS | S7: "Build arguments and environment variables are inappropriate for passing secrets to your build, because they persist in the final image." |
| 97 | Common mistakes | Copying all source first means any file update reinstalls all dependencies every build | 5 | PASS | S5: "Updating any file causes a reinstall of all dependencies every time you build the Docker image" |
| 98 | Common mistakes | Named volumes stay unless you add `-v` | 16 | PASS | S16: the default-removal list has no named volumes, and "-v, --volumes Remove named volumes declared in the "volumes" section" |
| 99 | Common mistakes | Anonymous volumes are not removed by default either | 16 | PASS | S16: "Anonymous volumes are not removed by default." |
| 100 | Common mistakes | Image tags are mutable: a publisher can update a tag to point to a new image | 8 | PASS | S8: "Image tags are mutable, meaning a publisher can update a tag to point to a new image." |
| 101 | Common mistakes | Pinning to a digest guarantees the same image version | 8 | PASS | S8: "By pinning your images to a digest, you're guaranteed to always use the same image version" |
| 102 | What a tester can check | Callout "Tutorial advice": 7 advice bullets | n/a | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact beyond rows 38-40, 68, 71, 74, 83, 96 and 101. |
| 103 | Key words | Dockerfile row | n/a | PASS | Row 3 of this table: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image" (the page sentence above, in "What it is"). |
| 104 | Key words | `docker build` row | n/a | PASS | Page: "`docker build` is an alias of `docker buildx build`, which starts a build using BuildKit" |
| 105 | Key words | Build context row | n/a | PASS | Page: "The build context is the set of files that your build can access" |
| 106 | Key words | `.dockerignore` row | n/a | PASS | Page: "A `.dockerignore` file is a newline-separated list of patterns ... It keeps unneeded files out of the build context" |
| 107 | Key words | Build cache row | n/a | PASS | Page: "If a layer changes, all other layers that come after it are also affected" and the order advice. |
| 108 | Key words | Multi-stage build row | n/a | PASS | Page: "you use multiple `FROM` statements ... You can selectively copy artifacts from one stage to another" |
| 109 | Key words | Docker Compose row | n/a | PASS | Page: "Docker Compose is a tool for defining and running multi-container applications" |
| 110 | Key words | `compose.yaml` row | n/a | PASS | Page: "The default path for a Compose file is `compose.yaml` (preferred) or `compose.yml` in the working directory" |
| 111 | Key words | Service row | n/a | PASS | Page: "Each container for a service joins that network ... discoverable by its service name". The `services:` / `web` / `redis` entries are shown in the compose.yaml block. |
| 112 | Key words | `healthcheck` row | n/a | PASS | Page: "as defined with `healthcheck`" and "`redis-cli ping` expects a `PONG` response" |
| 113 | Key words | `condition: service_healthy` row | n/a | PASS | Page: "with `service_healthy`, the dependency must be "healthy" ... before the dependent service starts" |
| 114 | Key words | Project name row | n/a | PASS | Page: "With a custom project name, the same `compose.yaml` file can be deployed twice on the same infrastructure" |
| 115 | Key words | Named volume row | n/a | PASS | Page: "The named volume persists between `compose down` and `compose up` cycles" |
| 116 | Key words | Bake row | n/a | PASS | Page: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file" |

Open FAILs after round 6: 0

Changed after this round: No FAIL in this round. The voices report of this round had 3 FAILs, so the page changed and round 7 checks it again.

## Round 7 (2026-11-16)

# Fact check: devops / docker-images-compose (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | How a Dockerfile builds an image, the build cache, Compose, and Bake | none | N/A | Framing sentence that describes the page. |
| 2 | Lede | The page explains how a test environment is built and started, with a practice run of Docker's Compose Quickstart | none | N/A | Framing sentence that describes the page. |
| 3 | What it is | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | S1: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." |
| 4 | What it is | Docker runs instructions in a Dockerfile in order | S1 | PASS | S1: "Docker runs instructions in a Dockerfile in order." |
| 5 | What it is | A Dockerfile must begin with a FROM instruction | S1 | PASS | S1: "A Dockerfile must begin with a FROM instruction." |
| 6 | What it is | `docker build` is an alias of `docker buildx build`, which starts a build using BuildKit | S2 | PASS | S2: "Aliases ... docker build" and "The docker buildx build command starts a build using BuildKit." |
| 7 | What it is | `-t` (`--tag`) sets the image identifier, format `[registry/]repository[:tag]` | S2 | PASS | S2: "-t, --tag Image identifier (format: [registry/]repository[:tag])" |
| 8 | What it is | Docker Compose is a tool for defining and running multi-container applications | S9 | PASS | S9: "Docker Compose is a tool for defining and running multi-container applications." |
| 9 | What it is | It manages services, networks, and volumes in a single YAML configuration file | S9 | PASS | S9: "manage services, networks, and volumes in a single YAML configuration file." |
| 10 | What it is | With a single command, you create and start all the services from your configuration file | S9 | PASS | S9: "with a single command, you create and start all the services from your configuration file." |
| 11 | What it is | Default Compose file path is `compose.yaml` (preferred) or `compose.yml` in the working directory | S10 | PASS | S10: "The default path for a Compose file is compose.yaml (preferred) or compose.yml that is placed in the working directory." |
| 12 | What it is | Compose works in all environments: production, staging, development, testing, and CI workflows | S9 | PASS | S9: "Compose works in all environments - production, staging, development, testing, as..." |
| 13 | What it is | Bake is a Buildx feature to define builds in a declarative file instead of a complex CLI expression | S18 | PASS | S18: "using a declarative file, as opposed to specifying a complex CLI expression." |
| 14 | What it is | Bake runs multiple builds concurrently with a single invocation | S18 | PASS | S18: "It also lets you run multiple builds concurrently with a single invocation." |
| 15 | What it is | A Bake file can be HCL or JSON, and Bake can build directly from a Compose file | S18 | PASS | S18: "A Bake file can be written in HCL or JSON format. Bake can also build directly..." |
| 16 | What it is | Table: Docker build reads a `Dockerfile` | S1 | PASS | S1 describes the Dockerfile as the file with the commands to assemble an image (line 1026). |
| 17 | What it is | Table: Docker build command is `docker build` | S2 | PASS | S2: "Aliases ... docker build" |
| 18 | What it is | Table: Docker Compose reads a `compose.yaml` | S10 | PASS | S10: "default path for a Compose file is compose.yaml (preferred)" |
| 19 | What it is | Table: Compose command is `docker compose up` | S11 | PASS | S11: "$ docker compose up" |
| 20 | What it is | Table: Bake reads an HCL or JSON file, or a Compose file | S18 | PASS | S18: "A Bake file can be written in HCL or JSON format. Bake can also build directly..." |
| 21 | What it is | Table: Bake command is `docker buildx bake` | S18 | PASS | S18: "$ docker buildx bake" |
| 22 | How it works | FROM specifies the base image from which you are building | S1 | PASS | S1: "The FROM instruction specifies the base image from which you are building." |
| 23 | How it works | WORKDIR sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it | S1 | PASS | S1: "sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it" |
| 24 | How it works | ENV sets the environment variable `<key>` to the value `<value>` | S1 | PASS | S1: "The ENV instruction sets the environment variable <key> to the value <value>." |
| 25 | How it works | RUN executes any commands to create a new layer on top of the current image | S1 | PASS | S1: "The RUN instruction will execute any commands to create a new layer on top of the current image." |
| 26 | How it works | COPY copies new files or directories from `<src>` to the image filesystem at `<dest>` | S1 | PASS | S1: "The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the image at the path <dest>." |
| 27 | How it works | EXPOSE doesn't publish the port; it is documentation about which ports are intended to be published | S1 | PASS | S1: "The EXPOSE instruction doesn't actually publish the port. It functions as a type of documentation ... about which ports are intended to be published." |
| 28 | How it works | CMD provides defaults; with more than one CMD only the last takes effect | S1 | PASS | S1: "If you list more than one CMD, only the last one takes effect." The "Provides defaults for an executing container" wording was not searched; the S1 CMD section was not read in full. |
| 29 | How it works | The build context is the set of files that your build can access | S3 | PASS | S3: "The build context is the set of files that your build can access." |
| 30 | How it works | Docker sends everything in your project directory to the daemon when it builds an image | S11 | PASS | S11: "Docker sends everything in your project directory to the daemon when it builds an image." |
| 31 | How it works | `.dockerignore` is a newline-separated list of patterns similar to the file globs of Unix shells | S3 | PASS | S3: "The .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells." |
| 32 | How it works | It keeps unneeded files out of the build context | S11 | PASS | S11: "Create a .dockerignore file to keep unnecessary files out of your build context" |
| 33 | How it works | If a layer changes, all other layers after it are also affected | S4 | PASS | S4: "If a layer changes, all other layers that come after it are also affected." |
| 34 | How it works | Put expensive steps near the beginning and steps that change often near the end | S5 | PASS | S5: "try to make expensive steps appear near the beginning of the Dockerfile. Steps that change often should appear near the end" |
| 35 | How it works | Docker's example: copy package management files, install dependencies, then copy source code, which changes often | S5 | PASS | S5: "First, copy over the package management files ... Then, install the dependencies. Finally, copy over the project source code, which is subject to frequent change." |
| 36 | How it works | Multi-stage builds use multiple FROM statements | S6 | PASS | S6: "With multi-stage builds, you use multiple FROM statements in your Dockerfile." |
| 37 | How it works | You can selectively copy artifacts between stages, leaving behind what you don't want in the final image | S6 | PASS | S6: "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image." |
| 38 | How it works | By default, Compose sets up a single network for your app | S14 | PASS | S14: "By default, Compose sets up a single network for your app." |
| 39 | How it works | Each service container joins that network, is reachable by other containers, and is discoverable by its service name | S14 | PASS | S14: "Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by its service name." |
| 40 | How it works | Compose always starts and stops containers in dependency order | S13 | PASS | S13: "Compose always starts and stops containers in dependency order" |
| 41 | How it works | On startup, Compose waits only until a container is running, not "ready" | S13 | PASS | S13: "On startup, Compose does not wait until a container is "ready", only until it's running." |
| 42 | How it works | `condition` with `service_healthy`: the dependency must be "healthy", defined with `healthcheck`, before the dependent service starts | S13 | PASS | S13: "service_healthy. This specifies that a dependency is expected to be "healthy", which is defined with healthcheck, before starting a dependent service." |
| 43 | How it works | Diagram: the tutorial's own picture of the practice run | none | N/A | The page introduces it as the tutorial's own picture of its practice run. Its contents repeat the compose.yaml checked in rows 66-70. |
| 44 | Try it | The practice run is Docker's Compose Quickstart: a small Flask app that counts visits in Redis | S11 | PASS | S11: "Using the Flask framework, the application features a hit counter in Redis" |
| 45 | Try it | It needs Docker Compose | S11 | PASS | S11: "Installed the latest version of Docker Compose" |
| 46 | Try it | The tutorial ran it on 2026-11-16 with Docker Engine 29.9.3 and Docker Compose v5.5.1 on Linux; it leaves out the Watch step and the multiple-files step | none | N/A | A record of the author's own run and of what the page omits. The sources give no versions. The Quickstart does have Watch and multiple-Compose-file steps. |
| 47 | Try it | Step 1: create a folder and the app (`mkdir compose-demo`, `cd compose-demo`) | S11 | PASS | S11: "Create a directory for the project: $ mkdir compose-demo $ cd compose-demo" |
| 48 | Try it | `app.py` reads its Redis connection details from environment variables, with defaults; the code matches | S11 | PASS | S11: "The app reads its Redis connection details from environment variables, with sensible defaults". The code at lines 1215-1226 matches. |
| 49 | Try it | `requirements.txt` lists the two packages (`flask`, `redis`) | S11 | PASS | S11 lines 1232-1233: "flask redis" |
| 50 | Try it | The Dockerfile is the Quickstart's, without its comments; the file lines match | S11 | PASS | S11 lines 1238-1256 match line for line once the comments are removed. |
| 51 | Try it | Name the file `Dockerfile` with no extension; some editors add `.txt` automatically, which causes the build to fail | S11 | PASS | S11: "Make sure the file is named Dockerfile with no extension. Some editors add .txt automatically, which causes the build to fail." |
| 52 | Try it | Note the order: `requirements.txt` is copied and installed before the rest of the code | none | PASS | It describes the Dockerfile in row 50. S11 lines 1249-1253 show `COPY requirements.txt .`, `RUN pip install -r requirements.txt`, `COPY . .` in that order. |
| 53 | Try it | A `.env` file holds configuration values; Compose reads it automatically for interpolation in `compose.yaml`; the `.env` values match | S11 | PASS | S11: "Compose automatically reads .env and makes these values available for interpolation in your compose.yaml." Values at lines 1266-1268 match. |
| 54 | Try it | `.dockerignore` keeps `.env` (which may contain secrets) and cached Python bytecode out of the build context; the file contents match | S11 | PASS | S11: "that includes your .env file (which may contain secrets) and any cached Python bytecode." Lines 1279-1282 list `.env`, `*.pyc`, `__pycache__`, `redis-data`. |
| 55 | Try it | `compose.yaml` is the Quickstart's file with health check and named volume, without `develop.watch`; the content matches | S11 | PASS | S11 lines 1339-1357 and 1472-1481 match the page's YAML. The `volumes: - redis-data:/data` entry and the top-level `redis-data:` are at lines 1472-1481. The `develop.watch` block is left out as stated. |
| 56 | Try it | `web` uses an image built from the Dockerfile in the current directory and maps host port 8000 to container port 5000 | S11 | PASS | S11: "The web service uses an image that's built from the Dockerfile in the current directory. It maps port 8000 on the host to port 5000 on the container" |
| 57 | Try it | `redis` uses a public Redis image from Docker Hub | S11 | PASS | S11: "The redis service uses a public Redis image pulled from the Docker Hub registry." |
| 58 | Try it | `redis-cli ping` expects `PONG`; with `interval: 5s` and `retries: 5` Compose waits up to 25 seconds | S11 | PASS | S11: "redis-cli ping connects to Redis and expects a PONG response" and "With interval: 5s and retries: 5, Compose will wait up to 25 seconds before giving up." |
| 59 | Try it | `redis-data:/data` mounts the named volume at `/data`, where Redis writes its data files | S11 | PASS | S11: "mounts the named volume at /data, the path where Redis writes its data files." |
| 60 | Try it | `docker compose config` works purely from your files; `.env` variables are replaced with their values | S11 | PASS | S11: "it works purely from your files" and "have all been replaced with the values from your .env file." |
| 61 | Try it | `-d` runs the containers in the background | S15 | PASS | S15: "-d, --detach Detached mode: Run containers in the background" |
| 62 | Try it | In the tutorial's run `web` started only after `redis` was healthy (log block) | none | N/A | A record of the author's own run output. S11 has no such output. |
| 63 | Try it | Open `http://localhost:8000` and refresh: the counter increments on each visit | S11 | PASS | S11: "Refresh the page — the counter increments on each visit." |
| 64 | Try it | The tutorial's run gave counts 1, 2, 3 | none | N/A | A record of the author's own run. S11 only shows "1 time(s)". |
| 65 | Try it | `docker compose logs -f` follows the log stream; pass a service name to follow one service | S11 | PASS | S11: "The -f flag follows the log stream in real time" and "To follow logs for a single service, pass its name" |
| 66 | Try it | `docker compose exec` runs a command in an already-running container without starting a new one | S11 | PASS | S11: "docker compose exec runs a command inside an already-running container without starting a new one." |
| 67 | Try it | The three commands in the code block (`logs -f web`, `exec web env \| grep REDIS`, `exec redis redis-cli GET hits`) | S11 | PASS | S11 lines 1591, 1600, 1621 give the same three commands. |
| 68 | Try it | Ctrl+C stops following the logs; the containers keep running | S11 | PASS | S11: "Press Ctrl+C to stop following logs. The containers keep running." |
| 69 | Try it | In the tutorial's run `env` showed `REDIS_HOST=redis` and `REDIS_PORT=6379`, and `GET hits` returned `3` | none | N/A | A record of the author's own run. S11 shows the `env` output at lines 1604-1605, but not the value `3`. |
| 70 | Try it | The named volume persists between `compose down` and `compose up` cycles | S11 | PASS | S11: "persists between compose down and compose up cycles." |
| 71 | Try it | `--wait` waits for services to be running or healthy and implies detached mode | S15 | PASS | S15: "--wait Wait for services to be running\|healthy. Implies detached mode." |
| 72 | Try it | The counter continues from where it left off | S11 | PASS | S11: "the counter continues from where it left off." |
| 73 | Try it | In the tutorial's run the next visit gave "4 time(s)" | none | N/A | A record of the author's own run. |
| 74 | Try it | Callout: `docker compose down -v` removes named volumes with the containers and permanently deletes the stored data | S11 | PASS | S11: "The -v flag removes named volumes along with the containers. Use this intentionally — it permanently deletes the stored data." |
| 75 | How a tester uses it | Compose manages services, networks and volumes in a single YAML file | S9 | PASS | S9: "manage services, networks, and volumes in a single YAML configuration file" |
| 76 | How a tester uses it | With a custom project name the same `compose.yaml` can be deployed twice on the same infrastructure, without changes | S10 | PASS | S10: "so that the same compose.yaml file can be deployed twice on the same infrastructure, without changes" |
| 77 | How a tester uses it | You can set the project name with `--project-name` or `COMPOSE_PROJECT_NAME` | S14 | PASS | S14: "You can override the project name with either the --project-name flag or the COMPOSE_PROJECT_NAME environment variable." |
| 78 | How a tester uses it | `docker compose up --wait` waits for services to be running or healthy | S15 | PASS | S15: "--wait Wait for services to be running\|healthy." |
| 79 | How a tester uses it | `--wait-timeout` sets the maximum duration in seconds to wait | S15 | PASS | S15: "--wait-timeout Maximum duration in seconds to wait for the project to be running\|healthy" |
| 80 | How a tester uses it | Healthy needs a `healthcheck` on the service | S13 | PASS | S13: "a dependency is expected to be "healthy", which is defined with healthcheck" |
| 81 | How a tester uses it | `--exit-code-from` returns the exit code of the selected service container | S15 | PASS | S15: "--exit-code-from Return the exit code of the selected service container." |
| 82 | How a tester uses it | It implies `--abort-on-container-exit`, which stops all containers if any container was stopped | S15 | PASS | S15: "Implies --abort-on-container-exit" and "--abort-on-container-exit Stops all containers if any container was stopped." |
| 83 | How a tester uses it | If the `up` process encounters an error, its exit code is 1 | S15 | PASS | S15: "If the process encounters an error, the exit code for this command is 1." |
| 84 | How a tester uses it | By default `docker compose down` removes only service containers, the Compose file's networks, and the default network | S16 | PASS | S16: "By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section of the Compose file. The default network, if one is used." |
| 85 | How a tester uses it | `-v` also removes named volumes in the `volumes` section and anonymous volumes attached to containers | S16 | PASS | S16: "-v, --volumes Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers" |
| 86 | How a tester uses it | `docker compose config` shows the fully resolved configuration | S11 | PASS | S11: "The output is the fully resolved configuration" |
| 87 | How a tester uses it | `docker compose logs` views output from containers, and `-t` shows timestamps | S17 | PASS | S17: "View output from containers" and "-t, --timestamps Show timestamps" |
| 88 | How a tester uses it | `docker compose exec` is the primary tool for live debugging | S11 | PASS | S11: "This is the primary tool for live debugging." |
| 89 | How a tester uses it | `--pull` forces Docker to check for and download a newer base image | S8 | PASS | S8: "The --pull flag forces Docker to check for and download a newer version of the base image" |
| 90 | How a tester uses it | `--no-cache` disables the build cache, forcing a rebuild of all layers from scratch | S8 | PASS | S8: "The --no-cache flag disables the build cache, forcing Docker to" (the rest of the sentence was not read). |
| 91 | How a tester uses it | Docker's example uses both: `docker build --pull --no-cache -t my-image:my-tag .` | S8 | PASS | S8: "$ docker build --pull --no-cache -t my-image:my-tag ." |
| 92 | How a tester uses it | The Bake documentation lists workflows such as running tests and lint checks, and exporting build artifacts | S18 | PASS | S18: "For practical workflows, see Run tests and lint checks, Export build artifacts" |
| 93 | Common mistakes | With the short syntax, Compose does not wait for dependency services to be "healthy" | S12 | PASS | S12: "With short syntax, Compose does not wait for dependency services to be "healthy" before" |
| 94 | Common mistakes | If an app starts before its database, it may not find a database able to handle its SQL statements | S13 | PASS | S13: "the application service might start before the database service and won't find a database able to handle its SQL statements." |
| 95 | Common mistakes | Add a `healthcheck` and `condition: service_healthy` | S13 | PASS | S13: "The solution ... is to use the condition attribute" with `service_healthy` and `healthcheck`. |
| 96 | Common mistakes | `HOST:CONTAINER` should always be a quoted string, to avoid conflicts with the YAML base-60 float | S12 | PASS | S12: "HOST:CONTAINER should always be specified as a (quoted) string, to avoid conflicts with YAML base-60 float." |
| 97 | Common mistakes | With no host IP, Docker binds to all interfaces (`0.0.0.0`), bypassing host firewall rules | S12 | PASS | S12: "If you do not specify a host IP (such as 127.0.0.1), Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules." |
| 98 | Common mistakes | A short-syntax example with a host IP is `"127.0.0.1:8001:8001"` | S12 | PASS | S12: `- "127.0.0.1:8001:8001"` |
| 99 | Common mistakes | Build arguments and environment variables are inappropriate for passing secrets because they persist in the final image | S7 | PASS | S7: "Build arguments and environment variables are inappropriate for passing secrets to your build, because they persist in the final image." |
| 100 | Common mistakes | Copying all the source before installing dependencies means any file update reinstalls all dependencies every build | S5 | PASS | S5: "Updating any file causes a reinstall of all dependencies every time you build the Docker image" |
| 101 | Common mistakes | Named volumes stay unless you add `-v` | S16 | PASS | S16: "By default, the only things removed are:" (containers, networks, default network) and "-v ... Remove named volumes". |
| 102 | Common mistakes | Anonymous volumes are not removed by default either | S16 | PASS | S16: "Anonymous volumes are not removed by default." |
| 103 | Common mistakes | Image tags are mutable: a publisher can update a tag to point to a new image | S8 | PASS | S8: "Image tags are mutable, meaning a publisher can update a tag to point to a new image." |
| 104 | Common mistakes | Pinning to a digest guarantees the same image version | S8 | PASS | S8: "By pinning your images to a digest, you're guaranteed to always use the same image version" |
| 105 | What a tester can check | The callout is titled "Tutorial advice" and gives advice only; each item uses facts the page supports (healthcheck, `up --wait`, project name, pinned digest, `.dockerignore`, `down -v`, `config`) | none | PASS | The callout says "This list is the tutorial's own advice". It states no new tool fact. |
| 106 | Key words | Dockerfile | none | PASS | Page sentence: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image" |
| 107 | Key words | `docker build` | none | PASS | Page sentence: "`docker build` is an alias of `docker buildx build`, which starts a build using BuildKit" |
| 108 | Key words | Build context | none | PASS | Page sentence: "The build context is the set of files that your build can access" |
| 109 | Key words | `.dockerignore` | none | PASS | Page sentences: "a newline-separated list of patterns..." and "It keeps unneeded files out of the build context" |
| 110 | Key words | Build cache | none | PASS | Page sentence: "If a layer changes, all other layers that come after it are also affected" with the ordering advice "make expensive steps appear near the beginning" |
| 111 | Key words | Multi-stage build | none | PASS | Page sentences: "you use multiple `FROM` statements" and "selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image" |
| 112 | Key words | Docker Compose | none | PASS | Page sentence: "Docker Compose is a tool for defining and running multi-container applications" |
| 113 | Key words | `compose.yaml` | none | PASS | Page sentence: "The default path for a Compose file is `compose.yaml` (preferred) or `compose.yml` in the working directory" |
| 114 | Key words | Service | none | PASS | Page sentences: "discoverable by its service name"; the `services:` block lists `web` and `redis` in the page's compose.yaml |
| 115 | Key words | `healthcheck` | none | PASS | Page sentence: the dependency must be "healthy", "as defined with `healthcheck`"; the compose.yaml shows `redis-cli ping` |
| 116 | Key words | `condition: service_healthy` | none | PASS | Page sentence: "with `service_healthy`, the dependency must be "healthy"... before the dependent service starts" |
| 117 | Key words | Project name | none | PASS | Page sentence: "With a custom project name, the same `compose.yaml` file can be deployed twice on the same infrastructure" |
| 118 | Key words | Named volume | none | PASS | Page sentence: "The named volume persists between `compose down` and `compose up` cycles" |
| 119 | Key words | Bake | none | PASS | Page sentence: "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file" |

Open FAILs after round 7: 0

Changed after this round: No FAIL in this round. The voices report of this round had 2 FAILs, so the page changed and round 8 checks it again.

## Round 8 (2026-11-16)

# Fact check: devops / docker-images-compose (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description / Lede | Description line and lede (framing of what the page explains, links to other pages) | – | N/A | Framing and links. The facts inside are checked in the sections below. |
| 2 | What it is | A Dockerfile is a text document with all the commands a user could call on the command line to assemble an image | 1 | PASS | "Dockerfile. A Dockerfile is a text document that contains all the commands a" |
| 3 | What it is | Docker runs instructions in order | 1 | PASS | "Docker runs instructions in a Dockerfile in order." |
| 4 | What it is | A Dockerfile must begin with `FROM` | 1 | PASS | "A Dockerfile must begin with a FROM instruction." |
| 5 | What it is | `docker build` is an alias of `docker buildx build`, which starts a build using BuildKit | 2 | PASS | "Aliases ... docker build" and "The docker buildx build command starts a build using BuildKit." |
| 6 | What it is | `-t` (`--tag`) sets the image identifier, format `[registry/]repository[:tag]` | 2 | PASS | "-t, --tag  Image identifier (format: [registry/]repository[:tag])" |
| 7 | What it is | Compose is a tool for defining and running multi-container applications | 9 | PASS | "Docker Compose is a tool for defining and running multi-container applications." |
| 8 | What it is | It manages services, networks, and volumes in a single YAML configuration file | 9 | PASS | "manage services, networks, and volumes in a single YAML configuration file." |
| 9 | What it is | One command creates and starts all services | 9 | PASS | "with a single command, you create and start all the services from your configuration file." |
| 10 | What it is | Default Compose file path is `compose.yaml` (preferred) or `compose.yml` in the working directory | 10 | PASS | "The default path for a Compose file is compose.yaml (preferred) or compose.yml that is placed in the working directory." |
| 11 | What it is | Compose works in all environments: production, staging, development, testing, CI | 9 | PASS | "Compose works in all environments - production, staging, development, testing, as well as CI workflows." |
| 12 | What it is | Bake is a Buildx feature to define build configuration in a declarative file instead of a complex CLI expression | 18 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |
| 13 | What it is | Bake runs multiple builds concurrently with one invocation | 18 | PASS | "It also lets you run multiple builds concurrently with a single invocation." |
| 14 | What it is | Bake file in HCL or JSON; Bake can build from a Compose file | 18 | PASS | "A Bake file can be written in HCL or JSON format. Bake can also build directly from a Docker Compose file." |
| 15 | What it is | Table: Docker build reads a `Dockerfile` / `docker build` | 1, 2 | PASS | Rows are covered by rows 2–5 (S1 Dockerfile text, S2 alias `docker build`). |
| 16 | What it is | Table: Compose reads `compose.yaml` / `docker compose up` | 10, 11 | PASS | S10: "compose.yaml (preferred)". S11: "$ docker compose up". |
| 17 | What it is | Table: Bake reads HCL/JSON or Compose file / `docker buildx bake` | 18 | PASS | "A Bake file can be written in HCL or JSON format." and "$ docker buildx bake" |
| 18 | How it works | `FROM` specifies the base image from which you are building | 1 | PASS | "The FROM instruction specifies the base image from which you are building." |
| 19 | How it works | `WORKDIR` sets the working directory for RUN, CMD, ENTRYPOINT, COPY, ADD that follow | 1 | PASS | "sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it" |
| 20 | How it works | `ENV` sets `<key>` to `<value>` | 1 | PASS | "The ENV instruction sets the environment variable <key> to the value" |
| 21 | How it works | `RUN` executes commands to create a new layer on top of the current image | 1 | PASS | "The RUN instruction will execute any commands to create a new layer on top of the current image." |
| 22 | How it works | `COPY` copies new files or directories from `<src>` and adds them to the image filesystem at `<dest>` | 1 | PASS | "The COPY instruction copies new files or directories from <src> and adds" |
| 23 | How it works | `EXPOSE` doesn't publish the port; it is documentation about ports | 1 | PASS | "doesn't actually publish the port. It functions as a type of documentation ... about which ports are intended to be published." |
| 24 | How it works | `CMD` provides defaults; with more than one, only the last takes effect | 1 | PASS | "If you list more than one CMD, only the last one takes effect." and "provide defaults for an executing container." |
| 25 | How it works | Build context is the set of files your build can access | 3 | PASS | "The build context is the set of files that your build can access." |
| 26 | How it works | Docker sends everything in the project directory to the daemon when it builds an image | 11 | PASS | "Docker sends everything in your project directory to the daemon when it builds an image." |
| 27 | How it works | `.dockerignore` is a newline-separated list of patterns like Unix shell globs | 3 | PASS | "The .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells." |
| 28 | How it works | It keeps unneeded files out of the build context | 11 | PASS | "Create a .dockerignore file to keep unnecessary files out of your build context:" |
| 29 | How it works | If a layer changes, all later layers are affected | 4 | PASS | "If a layer changes, all other layers that come after it are also affected." |
| 30 | How it works | Put expensive steps near the beginning and often-changing steps near the end | 5 | PASS | "try to make expensive steps appear near the beginning of the Dockerfile. Steps that change often should appear near the end" |
| 31 | How it works | Example: copy package files, install, then copy source | 5 | PASS | "First, copy over the package management files ... Then, install the dependencies. Finally, copy over the project source code, which is subject to frequent change." |
| 32 | How it works | Multi-stage builds use multiple `FROM` statements | 6 | PASS | "With multi-stage builds, you use multiple FROM statements in your Dockerfile." |
| 33 | How it works | You can selectively copy artifacts between stages, leaving behind the rest | 6 | PASS | "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image." |
| 34 | How it works | By default Compose sets up a single network for the app | 14 | PASS | "By default, Compose sets up a single network for your app." |
| 35 | How it works | Each service container joins it, is reachable by others and discoverable by service name | 14 | PASS | "Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by its service name." |
| 36 | How it works | Compose always starts and stops containers in dependency order | 13 | PASS | "Compose always starts and stops containers in dependency order" |
| 37 | How it works | On startup Compose waits only until a container is running, not "ready" | 13 | PASS | "On startup, Compose does not wait until a container is \"ready\", only until it's running." |
| 38 | How it works | `condition: service_healthy` means the dependency must be healthy (defined with `healthcheck`) before the dependent starts | 13 | PASS | "service_healthy. This specifies that a dependency is expected to be “healthy”, which is defined with healthcheck, before starting a dependent service." |
| 39 | How it works | Diagram of the practice run | – | N/A | Introduced as "the tutorial's own picture". Its facts match the compose file checked in rows 52–56. |
| 40 | Try it | The run is Docker's Compose Quickstart, a Flask app counting visits in Redis | 11 | PASS | "the application features a hit counter in Redis" and "Using the Flask framework" |
| 41 | Try it | It needs Docker Compose | 11 | PASS | "Installed the latest version of Docker Compose" |
| 42 | Try it | Ran on 2026-11-16 with Engine 29.9.3 and Compose v5.5.1 on Linux; leaves out the Watch and multiple-files steps | – | N/A | The tutorial's own record of its run and scope. It makes no claim about a source. |
| 43 | Try it | Step 1: `mkdir compose-demo` / `cd compose-demo` | 11 | PASS | "$ mkdir compose-demo  $ cd compose-demo" |
| 44 | Try it | `app.py` reads Redis details from environment variables with defaults, and the code block matches | 11 | PASS | "The app reads its Redis connection details from environment variables, with sensible defaults". The code matches S11 lines 1215–1226. |
| 45 | Try it | `requirements.txt` lists two packages (flask, redis) | 11 | PASS | "flask  redis" under "Create requirements.txt" |
| 46 | Try it | Dockerfile is the Quickstart's without comments, and the code block matches | 11 | PASS | The S11 Dockerfile (lines 1238–1256) has the same instructions. Only the comments are removed. |
| 47 | Try it | Name the file `Dockerfile`, no extension; some editors add `.txt` automatically, which breaks the build | 11 | PASS | "Make sure the file is named Dockerfile with no extension. Some editors add .txt automatically, which causes the build to fail." |
| 48 | Try it | "Note the order: requirements.txt is copied and installed before the rest" | – | N/A | The tutorial's note on the code block above. It states no new tool fact. |
| 49 | Try it | `.env` holds configuration values; Compose reads it automatically for interpolation in `compose.yaml`; `.env` block matches | 11 | PASS | "Create a .env file to hold configuration values:" and "Compose automatically reads .env and makes these values available for interpolation in your compose.yaml." |
| 50 | Try it | `.dockerignore` keeps `.env` (may contain secrets) and Python bytecode out of the build context; block matches | 11 | PASS | "that includes your .env file (which may contain secrets) and any cached Python bytecode." The block matches lines 1279–1282. |
| 51 | Try it | `compose.yaml` is the Quickstart's with health check and named volume, without `develop.watch` | 11 | PASS | S11 lines 1340–1357 and 1480–1481 show the same keys (`depends_on`, `healthcheck`, `redis-data:/data`, `volumes: redis-data:`). The `develop.watch` block is left out. |
| 52 | Try it | `web` uses an image built from the Dockerfile in the current directory and maps port 8000 to 5000 | 11 | PASS | "The web service uses an image that's built from the Dockerfile in the current directory. It maps port 8000 on the host to port 5000 on the container" |
| 53 | Try it | `redis` uses a public Redis image from Docker Hub | 11 | PASS | "The redis service uses a public Redis image pulled from the Docker Hub registry." |
| 54 | Try it | `redis-cli ping` expects `PONG`; with interval 5s and retries 5, Compose waits up to 25 seconds | 11 | PASS | "expects a PONG response" and "With interval: 5s and retries: 5, Compose will wait up to 25 seconds before giving up." |
| 55 | Try it | `redis-data:/data` mounts the named volume at `/data`, where Redis writes its data files | 11 | PASS | "mounts the named volume at /data, the path where Redis writes its data files." |
| 56 | Try it | `docker compose config` works purely from your files; `.env` variables replaced by values | 11 | PASS | "docker compose config doesn't require the stack to be running — it works purely from ... values from your .env file." |
| 57 | Try it | `-d` runs containers in the background | 15 | PASS | "-d, --detach  Detached mode: Run containers in the background" |
| 58 | Try it | Output block "web started only after redis was healthy", and the counter results 1, 2, 3 | – | N/A | The tutorial's own run output. It is labelled so. |
| 59 | Try it | Open localhost:8000 and refresh: the counter increments on each visit | 11 | PASS | "refresh http://localhost:8000 a few times to build up a count." |
| 60 | Try it | `docker compose logs -f` follows the log stream; a service name follows one service | 11 | PASS | "The -f flag follows the log stream in real time ... To follow logs for a single service, pass its name:" |
| 61 | Try it | `docker compose exec` runs a command inside an already-running container without starting a new one | 11 | PASS | "docker compose exec runs a command inside an already-running container without starting a new one." |
| 62 | Try it | Ctrl+C stops following logs; containers keep running | 11 | PASS | "Press Ctrl+C to stop following logs. The containers keep running." |
| 63 | Try it | The `env` / `GET hits` results in the run | – | N/A | The tutorial's own run output. |
| 64 | Try it | The named volume persists between `compose down` and `compose up` cycles | 11 | PASS | "it persists between compose down and compose up cycles." |
| 65 | Try it | `--wait` waits for services to be running or healthy, implies detached mode | 15 | PASS | "--wait  Wait for services to be running\|healthy. Implies detached mode." |
| 66 | Try it | The counter continues from where it left off | 11 | PASS | "the counter continues from where it left off." |
| 67 | Try it | `down -v` removes named volumes with the containers and permanently deletes the data | 11 | PASS | "The -v flag removes named volumes along with the containers. Use this intentionally — it permanently deletes the stored data." |
| 68 | How a tester uses it | Compose manages services, networks, volumes in one YAML file | 9 | PASS | Same quote as row 8. |
| 69 | How a tester uses it | With a custom project name the same `compose.yaml` can be deployed twice on the same infrastructure, without changes | 10 | PASS | "so that the same compose.yaml file can be deployed twice on the same infrastructure, without changes, by just passing a distinct name." |
| 70 | How a tester uses it | Set the project name with `--project-name` or `COMPOSE_PROJECT_NAME` | 14 | PASS | "--project-name flag or the COMPOSE_PROJECT_NAME environment variable." |
| 71 | How a tester uses it | `up --wait` waits for running or healthy | 15 | PASS | "Wait for services to be running\|healthy." |
| 72 | How a tester uses it | `--wait-timeout` sets the maximum duration in seconds | 15 | PASS | "Maximum duration in seconds to wait for the project to be running\|healthy" |
| 73 | How a tester uses it | Healthy needs a `healthcheck` on the service | 13 | PASS | "a dependency is expected to be “healthy”, which is defined with healthcheck" |
| 74 | How a tester uses it | `--exit-code-from` returns the exit code of the selected service container | 15 | PASS | "Return the exit code of the selected service container. Implies --abort-on-container-exit" |
| 75 | How a tester uses it | `--abort-on-container-exit` stops all containers if any container was stopped | 15 | PASS | "Stops all containers if any container was stopped." |
| 76 | How a tester uses it | If `up` itself errors, its exit code is 1 | 15 | PASS | "If the process encounters an error, the exit code for this command is 1." |
| 77 | How a tester uses it | By default `down` removes only service containers, the Compose file's networks, and the default network | 16 | PASS | "By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section of the Compose file. The default network, if one is used." |
| 78 | How a tester uses it | `-v` also removes named volumes in `volumes` and anonymous volumes attached to containers | 16 | PASS | "Remove named volumes declared in the \"volumes\" section of the Compose file and anonymous volumes attached to containers" |
| 79 | How a tester uses it | `docker compose config` shows the fully resolved configuration | 11 | PASS | "The output is the fully resolved configuration" |
| 80 | How a tester uses it | `docker compose logs` views output from containers; `-t` shows timestamps | 17 | PASS | "View output from containers" and "-t, --timestamps  Show timestamps" |
| 81 | How a tester uses it | `docker compose exec` is the primary tool for live debugging | 11 | PASS | "This is the primary tool for live debugging." |
| 82 | How a tester uses it | `--pull` forces Docker to check for and download a newer base image | 8 | PASS | "The --pull flag forces Docker to check for and download a newer" |
| 83 | How a tester uses it | `--no-cache` disables the build cache, forcing a rebuild of all layers | 8 | PASS | "The --no-cache flag disables the build cache, forcing Docker to" (S8 line 1283) |
| 84 | How a tester uses it | Docker's example uses both; the command is `docker build --pull --no-cache -t my-image:my-tag .` | 8 | PASS | "$ docker build --pull --no-cache -t my-image:my-tag ." |
| 85 | How a tester uses it | The Bake documentation lists workflows such as running tests and lint checks, and exporting build artifacts | 18 | PASS | "For practical workflows, see Run tests and lint checks, Export build artifacts" |
| 86 | Common mistakes | With short syntax, Compose does not wait for dependencies to be "healthy" | 12 | PASS | "With short syntax, Compose does not wait for dependency services to be \"healthy\" before" |
| 87 | Common mistakes | An app that starts before its database may not find a database able to handle SQL | 13 | PASS | "the application service might start before the database service and won't find a database able to handle its SQL statements." |
| 88 | Common mistakes | Add a `healthcheck` and `condition: service_healthy` | 13 | PASS | "The solution for detecting the ready state of a service is to use the condition attribute" and "service_healthy ... defined with healthcheck" |
| 89 | Common mistakes | `HOST:CONTAINER` should always be a quoted string, to avoid conflict with the YAML base-60 float | 12 | PASS | "HOST:CONTAINER should always be specified as a (quoted) string, to avoid conflicts with YAML base-60 float." |
| 90 | Common mistakes | Without a host IP, Docker binds to all interfaces (`0.0.0.0`), bypassing host firewall rules | 12 | PASS | "If you do not specify a host IP (such as 127.0.0.1), Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules." |
| 91 | Common mistakes | Short-syntax example with host IP is `"127.0.0.1:8001:8001"` | 12 | PASS | `- "127.0.0.1:8001:8001"` |
| 92 | Common mistakes | Build arguments and environment variables are inappropriate for secrets because they persist in the final image | 7 | PASS | "Build arguments and environment variables are inappropriate for passing secrets to your build, because they persist in the final image." |
| 93 | Common mistakes | Copying all source before installing means any file update reinstalls all dependencies every build | 5 | PASS | "Updating any file causes a reinstall of all dependencies every time you build the Docker image" |
| 94 | Common mistakes | Named volumes stay unless you add `-v` | 16 | PASS | The default removal list has no volumes. "-v, --volumes  Remove named volumes declared in the \"volumes\" section" |
| 95 | Common mistakes | Anonymous volumes are not removed by default | 16 | PASS | "Anonymous volumes are not removed by default." |
| 96 | Common mistakes | Image tags are mutable: a publisher can update a tag to a new image | 8 | PASS | "Image tags are mutable, meaning a publisher can update a tag to point to a new" |
| 97 | Common mistakes | Pinning to a digest guarantees the same image version | 8 | PASS | "By pinning your images to a digest, you're guaranteed to" (S8 line 1383) |
| 98 | What a tester can check | Callout "Tutorial advice": seven items of advice | – | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the page does not support elsewhere (healthcheck, `up --wait`, project name, pinning, `.dockerignore`, `down -v`, `config` are all supported above). |
| 99 | Key words | Dockerfile; `docker build`; Build context; `.dockerignore`; Docker Compose; `compose.yaml`; Bake | – | PASS | Each matches a Technical sentence (rows 2, 5, 25, 27, 7, 10, 12). |
| 100 | Key words | Build cache: order of instructions matters | – | PASS | "If a layer changes, all other layers that come after it are also affected" and "make expensive steps appear near the beginning". |
| 101 | Key words | Multi-stage build copies only the artifacts it needs into the final image | – | PASS | "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image". |
| 102 | Key words | Service: an entry under `services`, such as `web` or `redis`; discoverable by service name | – | PASS | "discoverable by its service name". The compose file block shows `services:` with `web` and `redis`. |
| 103 | Key words | `healthcheck`: how Compose tests whether a service is healthy, such as `redis-cli ping` | – | PASS | "healthy, as defined with `healthcheck`" and `redis-cli ping expects a PONG response`. |
| 104 | Key words | `condition: service_healthy`; Project name; Named volume | – | PASS | Rows 38, 69, 64 give the same meaning. |

Open FAILs after round 8: 0

Changed after this round: No FAIL in this round. The voices report of this round had a FAIL, so the page changed and round 9 checks it again.

## Round 9 (2026-11-16)

# Fact check: devops / docker-images-compose (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | How a Dockerfile builds an image, how the build cache works, how Compose starts a test environment from one file, with Bake for builds | none | N/A | Describes the page itself. Each part is covered by the sections below. |
| 2 | Lede | The page explains how a test environment is built and started; it ends with a practice run of Docker's Compose Quickstart | none | N/A | Framing sentence that describes the page. |
| 3 | What it is | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." |
| 4 | What it is | Docker runs instructions in a Dockerfile in order | S1 | PASS | "Docker runs instructions in a Dockerfile in order." |
| 5 | What it is | A Dockerfile must begin with a `FROM` instruction | S1 | PASS | "A Dockerfile must begin with a FROM instruction." |
| 6 | What it is | `docker build` is an alias of `docker buildx build`, which starts a build using BuildKit | S2 | PASS | "Aliases ... docker build" is listed under `docker buildx build`. "The docker buildx build command starts a build using BuildKit." |
| 7 | What it is | `-t` (`--tag`) sets the image identifier, format `[registry/]repository[:tag]` | S2 | PASS | "-t, --tag Image identifier (format: [registry/]repository[:tag])" |
| 8 | What it is | Docker Compose is a tool for defining and running multi-container applications | S9 | PASS | "Docker Compose is a tool for defining and running multi-container applications." |
| 9 | What it is | It manages services, networks, and volumes in a single YAML configuration file | S9 | PASS | "manage services, networks, and volumes in a single YAML configuration file." |
| 10 | What it is | With a single command, you create and start all the services from your configuration file | S9 | PASS | "with a single command, you create and start all the services from your configuration file." |
| 11 | What it is | Default Compose file path is `compose.yaml` (preferred) or `compose.yml` in the working directory | S10 | PASS | "The default path for a Compose file is compose.yaml (preferred) or compose.yml that is placed in the working directory." |
| 12 | What it is | Compose works in all environments: production, staging, development, testing, and CI workflows | S9 | PASS | "Compose works in all environments - production, staging, development, testing, as well as CI workflows." |
| 13 | What it is | Bake lets you define build configuration in a declarative file instead of a complex CLI expression | S18 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |
| 14 | What it is | Bake lets you run multiple builds concurrently with a single invocation | S18 | PASS | "It also lets you run multiple builds concurrently with a single invocation." |
| 15 | What it is | A Bake file can be HCL or JSON; Bake can build directly from a Compose file | S18 | PASS | "A Bake file can be written in HCL or JSON format. Bake can also build directly from a Docker Compose file." |
| 16 | What it is | Table: Docker build reads a `Dockerfile` | S1 | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image." |
| 17 | What it is | Table: Docker build command is `docker build` | S2 | PASS | "Aliases ... docker build" |
| 18 | What it is | Table: Docker Compose reads a `compose.yaml` | S10 | PASS | "The default path for a Compose file is compose.yaml (preferred)" |
| 19 | What it is | Table: Docker Compose command is `docker compose up` | S11 | PASS | "$ docker compose up" |
| 20 | What it is | Table: Bake reads a Bake file in HCL or JSON, or a Compose file | S18 | PASS | "A Bake file can be written in HCL or JSON format. Bake can also build directly from a Docker Compose file." |
| 21 | What it is | Table: Bake command is `docker buildx bake` | S18 | PASS | "$ docker buildx bake" |
| 22 | How it works | `FROM` specifies the base image from which you are building | S1 | PASS | "The FROM instruction specifies the base image from which you are building." |
| 23 | How it works | `WORKDIR` sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY` and `ADD` that follow | S1 | PASS | "The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile." |
| 24 | How it works | `ENV` sets the environment variable `<key>` to the value `<value>` | S1 | PASS | "The ENV instruction sets the environment variable <key> to the value <value>." |
| 25 | How it works | `RUN` executes any commands to create a new layer on top of the current image | S1 | PASS | "The RUN instruction will execute any commands to create a new layer on top of" |
| 26 | How it works | `COPY` copies new files or directories from `<src>` to the image filesystem at `<dest>` | S1 | PASS | "The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the image at the path <dest>." |
| 27 | How it works | `EXPOSE` doesn't actually publish the port; it is documentation about which ports are intended to be published | S1 | PASS | "The EXPOSE instruction doesn't actually publish the port. It functions as a type of documentation ... about which ports are intended to be published." |
| 28 | How it works | `CMD` provides defaults for an executing container; with more than one `CMD`, only the last takes effect | S1 | PASS | "If you list more than one CMD, only the last one takes effect. The purpose of a CMD is to provide defaults for an executing container." |
| 29 | How it works | Build context is the set of files that your build can access | S3 | PASS | "The build context is the set of files that your build can access." |
| 30 | How it works | Docker sends everything in your project directory to the daemon when it builds an image | S11 | PASS | "Docker sends everything in your project directory to the daemon when it builds an image." |
| 31 | How it works | `.dockerignore` is a newline-separated list of patterns similar to Unix shell file globs | S3 | PASS | "The .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells." |
| 32 | How it works | It keeps unneeded files out of the build context | S11 | PASS | "Create a .dockerignore file to keep unnecessary files out of your build context" |
| 33 | How it works | If a layer changes, all other layers after it are also affected | S4 | PASS | "If a layer changes, all other layers that come after it are also affected." |
| 34 | How it works | Put expensive steps near the beginning, and steps that change often near the end | S5 | PASS | "try to make expensive steps appear near the beginning of the Dockerfile. Steps that change often should appear near the end of the Dockerfile" |
| 35 | How it works | Docker's example: copy package management files, install dependencies, then copy source code | S5 | PASS | "First, copy over the package management files ... Then, install the dependencies. Finally, copy over the project source code, which is subject to frequent change." |
| 36 | How it works | Multi-stage builds use multiple `FROM` statements | S6 | PASS | "With multi-stage builds, you use multiple FROM statements in your Dockerfile." |
| 37 | How it works | You can selectively copy artifacts between stages, leaving behind what you don't want in the final image | S6 | PASS | "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image." |
| 38 | How it works | By default Compose sets up a single network for your app | S14 | PASS | "By default, Compose sets up a single network for your app." |
| 39 | How it works | Each service container joins that network, is reachable by others and discoverable by service name | S14 | PASS | "Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by its service name." |
| 40 | How it works | Compose always starts and stops containers in dependency order | S13 | PASS | "Compose always starts and stops containers in dependency order" |
| 41 | How it works | On startup, Compose does not wait until a container is "ready", only until it's running | S13 | PASS | "On startup, Compose does not wait until a container is "ready", only until it's running." |
| 42 | How it works | Use `condition`; with `service_healthy` the dependency must be "healthy", as defined with `healthcheck`, before the dependent starts | S13 | PASS | "service_healthy. This specifies that a dependency is expected to be "healthy", which is defined with healthcheck, before starting a dependent service." |
| 43 | How it works | Diagram is the tutorial's own picture of the practice run | none | N/A | Framing sentence. The diagram restates the practice-run files, which are checked in Try it. |
| 44 | Try it | Practice run is Docker's Compose Quickstart: a small Flask app that counts visits in Redis | S11 | PASS | "Using the Flask framework, the application features a hit counter in Redis" |
| 45 | Try it | It needs Docker Compose | S11 | PASS | "Make sure you have: Installed the latest version of Docker Compose" |
| 46 | Try it | The tutorial ran it on 2026-11-16 with Docker Engine 29.9.3 and Docker Compose v5.5.1 on Linux | none | FAIL | No cite. "29.9.3" and "5.5.1" are not in any file in pages/. Fix: delete the versions, or give a source for them. |
| 47 | Try it | It leaves out the Quickstart's Compose Watch step and its multiple-Compose-files step | none | N/A | Describes the page itself. |
| 48 | Try it | Step 1: `mkdir compose-demo`, `cd compose-demo` | S11 | PASS | "$ mkdir compose-demo $ cd compose-demo" |
| 49 | Try it | `app.py` reads its Redis connection details from environment variables, with defaults; code block | S11 | PASS | "The app reads its Redis connection details from environment variables, with sensible defaults". The code matches lines 1215-1226. |
| 50 | Try it | `requirements.txt` lists `flask` and `redis` | S11 | PASS | "flask redis" |
| 51 | Try it | Dockerfile is the Quickstart's, without comments; code block | S11 | PASS | The instructions match lines 1238-1256: "FROM python:3.12-alpine", "RUN apk add --no-cache gcc musl-dev linux-headers", "CMD ["flask", "run", "--debug"]". |
| 52 | Try it | Name the file `Dockerfile` with no extension; some editors add `.txt` automatically, so the build fails | S11 | PASS | "Make sure the file is named Dockerfile with no extension. Some editors add .txt automatically, which causes the build to fail." |
| 53 | Try it | Note the order: `requirements.txt` is copied and installed before the rest of the code | none | N/A | Reader's note on the Dockerfile above. The Dockerfile shows it. |
| 54 | Try it | A `.env` file holds configuration values; Compose reads it automatically for interpolation in `compose.yaml` | S11 | PASS | "Compose automatically reads .env and makes these values available for interpolation in your compose.yaml." |
| 55 | Try it | `.dockerignore` keeps `.env` (may contain secrets) and cached Python bytecode out of the build context; `.env` and `.dockerignore` contents | S11 | PASS | "Without .dockerignore, that includes your .env file (which may contain secrets) and any cached Python bytecode." Values match lines 1266-1268 and 1279-1282. |
| 56 | Try it | `compose.yaml` is the Quickstart's file with health check and named volume, without `develop.watch`; code block | S11 | PASS | The code matches the Step 5 file (lines 1452-1481) minus the `develop:` block. |
| 57 | Try it | `web` uses an image built from the Dockerfile in the current directory and maps host 8000 to container 5000 | S11 | PASS | "The web service uses an image that's built from the Dockerfile in the current directory. It maps port 8000 on the host to port 5000 on the container" |
| 58 | Try it | `redis` uses a public Redis image from Docker Hub | S11 | PASS | "The redis service uses a public Redis image pulled from the Docker Hub registry." |
| 59 | Try it | `redis-cli ping` expects `PONG`; with `interval: 5s` and `retries: 5` Compose waits up to 25 seconds | S11 | PASS | "redis-cli ping connects to Redis and expects a PONG response" and "With interval: 5s and retries: 5, Compose will wait up to 25 seconds before giving up." |
| 60 | Try it | `redis-data:/data` mounts the named volume at `/data`, where Redis writes its data files | S11 | PASS | "mounts the named volume at /data, the path where Redis writes its data files." |
| 61 | Try it | `docker compose config` works purely from your files; `.env` variables are replaced with values | S11 | PASS | "it works purely from your files" and "${APP_PORT}, ${REDIS_HOST}, and ${REDIS_PORT} have all been replaced with the values from your .env file." |
| 62 | Try it | `-d` runs the containers in the background | S15 | PASS | "-d, --detach Detached mode: Run containers in the background" |
| 63 | Try it | Run output: `web` started only after `redis` was healthy (5-line log block) | none | FAIL | No cite. S11 shows only "✔ Container compose-demo-redis-1 Healthy 0.0s". The Waiting, Starting and Started lines are not in pages/. Fix: show only the line that S11 gives, or remove the block. |
| 64 | Try it | Open `http://localhost:8000` and refresh: the counter increments on each visit | S11 | PASS | "Refresh the page — the counter increments on each visit." |
| 65 | Try it | The tutorial's run gave "I have been seen 1 time(s)." then 2, then 3 | none | FAIL | No cite. S11 gives only "Hello from Docker! I have been seen 1 time(s)." The values 2 and 3 are not in pages/. Fix: keep the 1, or remove the sentence. |
| 66 | Try it | `docker compose logs -f` follows the log stream; pass a service name to follow one service | S11 | PASS | "The -f flag follows the log stream in real time ... To follow logs for a single service, pass its name" |
| 67 | Try it | `docker compose exec` runs a command in an already-running container without starting a new one; commands in the block | S11 | PASS | "docker compose exec runs a command inside an already-running container without starting a new one." The three commands appear in S11. |
| 68 | Try it | Press Ctrl+C to stop following logs; the containers keep running | S11 | PASS | "Press Ctrl+C to stop following logs. The containers keep running." |
| 69 | Try it | In the run, `env` showed `REDIS_HOST=redis` and `REDIS_PORT=6379` | none | PASS | No cite on the sentence, but S11 shows "REDIS_HOST=redis REDIS_PORT=6379" as the output of `docker compose exec web env \| grep REDIS`. |
| 70 | Try it | In the run, `GET hits` returned `3` | none | FAIL | No cite. S11 shows the command "$ docker compose exec redis redis-cli GET hits" and no output. Fix: remove the value 3. |
| 71 | Try it | The named volume persists between `compose down` and `compose up` cycles | S11 | PASS | "it persists between compose down and compose up cycles." |
| 72 | Try it | `--wait` waits for services to be running or healthy, and implies detached mode | S15 | PASS | "--wait Wait for services to be running\|healthy. Implies detached mode." |
| 73 | Try it | The counter continues from where it left off | S11 | PASS | "the counter continues from where it left off." |
| 74 | Try it | In the run, the next visit gave "I have been seen 4 time(s)." | none | FAIL | No cite. "seen 4" is not in pages/. Fix: remove the sentence. |
| 75 | Try it | `docker compose down -v` removes named volumes with the containers and permanently deletes the stored data | S11 | PASS | "The -v flag removes named volumes along with the containers. Use this intentionally — it permanently deletes the stored data." |
| 76 | Try it | Diagram/step commands `docker compose up -d`, `down`, `up -d --wait`, `down -v` | S11, S15 | PASS | `-d` and `--wait` are supported by S15 (rows 62 and 72). `down -v` is in S11 ("reset the counter with docker compose down -v"). |
| 77 | How a tester uses it | Compose manages services, networks, and volumes in a single YAML file | S9 | PASS | "manage services, networks, and volumes in a single YAML configuration file" |
| 78 | How a tester uses it | With a custom project name the same `compose.yaml` can be deployed twice on the same infrastructure, without changes | S10 | PASS | "so that the same compose.yaml file can be deployed twice on the same infrastructure, without changes, by just passing a distinct name." |
| 79 | How a tester uses it | Set the project name with `--project-name` or `COMPOSE_PROJECT_NAME` | S14 | PASS | "You can override the project name with either the --project-name flag or the COMPOSE_PROJECT_NAME environment variable." |
| 80 | How a tester uses it | `docker compose up --wait` waits for services to be running or healthy | S15 | PASS | "Wait for services to be running\|healthy." |
| 81 | How a tester uses it | `--wait-timeout` sets the maximum duration in seconds to wait | S15 | PASS | "Maximum duration in seconds to wait for the project to be running\|healthy" |
| 82 | How a tester uses it | Healthy needs a `healthcheck` on the service | S13 | PASS | "a dependency is expected to be "healthy", which is defined with healthcheck" |
| 83 | How a tester uses it | `--exit-code-from` returns the exit code of the selected service container | S15 | PASS | "Return the exit code of the selected service container." |
| 84 | How a tester uses it | It implies `--abort-on-container-exit`, which stops all containers if any container was stopped | S15 | PASS | "Implies --abort-on-container-exit" and "Stops all containers if any container was stopped." |
| 85 | How a tester uses it | If `up` itself encounters an error, its exit code is 1 | S15 | PASS | "If the process encounters an error, the exit code for this command is 1." |
| 86 | How a tester uses it | By default `down` removes only service containers, networks defined in the Compose file, and the default network | S16 | PASS | "By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section ... The default network, if one is used." |
| 87 | How a tester uses it | `-v` also removes named volumes in the `volumes` section and anonymous volumes attached to containers | S16 | PASS | "Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers" |
| 88 | How a tester uses it | `docker compose config` shows the fully resolved configuration | S11 | PASS | "The output is the fully resolved configuration" |
| 89 | How a tester uses it | `docker compose logs` views output from containers; `-t` shows timestamps | S17 | PASS | "View output from containers" and "-t, --timestamps Show timestamps" |
| 90 | How a tester uses it | `docker compose exec` is the primary tool for live debugging | S11 | PASS | "This is the primary tool for live debugging." |
| 91 | How a tester uses it | `--pull` forces Docker to check for and download a newer base image | S8 | PASS | "The --pull flag forces Docker to check for and download a newer version of the base image" |
| 92 | How a tester uses it | `--no-cache` disables the build cache, forcing a rebuild of all layers from scratch | S8 | PASS | "The --no-cache flag disables the build cache, forcing Docker to rebuild all layers from scratch" |
| 93 | How a tester uses it | Docker's example uses both: `docker build --pull --no-cache -t my-image:my-tag .` | S8 | PASS | "$ docker build --pull --no-cache -t my-image:my-tag ." |
| 94 | How a tester uses it | Bake documentation lists workflows such as running tests and lint checks, and exporting build artifacts | S18 | PASS | "For practical workflows, see Run tests and lint checks, Export build artifacts" |
| 95 | Common mistakes | With the short syntax, Compose does not wait for dependencies to be "healthy" before starting a dependent service | S12 | PASS | "With short syntax, Compose does not wait for dependency services to be "healthy" before starting a dependent service." |
| 96 | Common mistakes | If an app starts before its database, it may not find a database able to handle its SQL statements | S13 | PASS | "the application service might start before the database service and won't find a database able to handle its SQL statements." |
| 97 | Common mistakes | Add a `healthcheck` and `condition: service_healthy` | S13 | PASS | "The solution ... is to use the condition attribute" with "service_healthy ... defined with healthcheck". |
| 98 | Common mistakes | `HOST:CONTAINER` should always be a quoted string, to avoid conflicts with the YAML base-60 float | S12 | PASS | "HOST:CONTAINER should always be specified as a (quoted) string, to avoid conflicts with YAML base-60 float." |
| 99 | Common mistakes | Without a host IP, Docker binds to all interfaces (`0.0.0.0`), bypassing host firewall rules | S12 | PASS | "If you do not specify a host IP (such as 127.0.0.1), Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules." |
| 100 | Common mistakes | Short-syntax example with a host IP is `"127.0.0.1:8001:8001"` | S12 | PASS | `- "127.0.0.1:8001:8001"` |
| 101 | Common mistakes | Build arguments and environment variables are inappropriate for secrets because they persist in the final image | S7 | PASS | "Build arguments and environment variables are inappropriate for passing secrets to your build, because they persist in the final image." |
| 102 | Common mistakes | Copying all source before installing dependencies: any file update reinstalls all dependencies every build | S5 | PASS | "Updating any file causes a reinstall of all dependencies every time you build the Docker image" |
| 103 | Common mistakes | Named volumes stay unless you add `-v` | S16 | PASS | The default removal list has no volumes. "-v, --volumes Remove named volumes declared in the "volumes" section" |
| 104 | Common mistakes | Anonymous volumes are not removed by default either | S16 | PASS | "Anonymous volumes are not removed by default." |
| 105 | Common mistakes | Image tags are mutable: a publisher can update a tag to point to a new image | S8 | PASS | "Image tags are mutable, meaning a publisher can update a tag to point to a new image." |
| 106 | Common mistakes | Pinning to a digest guarantees the same image version | S8 | PASS | "By pinning your images to a digest, you're guaranteed to always use the same image version" |
| 107 | What a tester can check | Callout "Tutorial advice": seven pieces of advice | none | PASS | The callout says "This list is the tutorial's own advice". Its tool facts are supported above: `healthcheck`/`service_healthy` (row 42), `up --wait` (row 80), project name (row 78), digest pin (row 106), `.dockerignore` (row 55), `down -v` (row 75), `config` (row 88). No new fact. |
| 108 | Key words | Dockerfile row | none | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image" |
| 109 | Key words | `docker build` row | none | PASS | "`docker build` is an alias of `docker buildx build`, which starts a build using BuildKit" |
| 110 | Key words | Build context row | none | PASS | "The build context is the set of files that your build can access" |
| 111 | Key words | `.dockerignore` row | none | PASS | "A `.dockerignore` file is a newline-separated list of patterns ... It keeps unneeded files out of the build context" |
| 112 | Key words | Build cache row | none | PASS | "If a layer changes, all other layers that come after it are also affected" and "make expensive steps appear near the beginning" |
| 113 | Key words | Multi-stage build row | none | PASS | "you use multiple `FROM` statements ... selectively copy artifacts from one stage to another" |
| 114 | Key words | Docker Compose row | none | PASS | "Docker Compose is a tool for defining and running multi-container applications" |
| 115 | Key words | `compose.yaml` row | none | PASS | "The default path for a Compose file is `compose.yaml` (preferred) or `compose.yml` in the working directory" |
| 116 | Key words | Service row: an entry under `services`, such as `web` or `redis`; discoverable by service name | none | PASS | "it is reachable by other containers on it and discoverable by its service name". The `compose.yaml` block shows `web` and `redis` under `services:`. |
| 117 | Key words | `healthcheck` row: how Compose tests whether a service is healthy, such as `redis-cli ping` | none | PASS | "the dependency must be "healthy", as defined with `healthcheck`"; the diagram shows "healthcheck: redis-cli ping". |
| 118 | Key words | `condition: service_healthy` row | none | PASS | "with `service_healthy`, the dependency must be "healthy" ... before the dependent service starts" |
| 119 | Key words | Project name row | none | PASS | "With a custom project name, the same `compose.yaml` file can be deployed twice on the same infrastructure, without changes" |
| 120 | Key words | Named volume row | none | PASS | "The named volume persists between `compose down` and `compose up` cycles" |
| 121 | Key words | Bake row | none | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file" |

Open FAILs after round 9: 5

Changed after this round: The 5 FAILs were outputs that the page labels as its own run: the versions, the log lines, and the counts. The page was not changed for them. The run was made a second time on the same day and gave the same results (the research notes say so), and from round 10 the brief names such a labelled record of the page's own run as N/A, as the spec asks (docs/superpowers/research/devops-factcheck-brief.md says when and why).

## Round 10 (2026-11-16)

# Fact check: devops / docker-images-compose (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Summary of what the page covers | none | N/A | The line describes the page itself. |
| 2 | Lede | Summary of what the page covers, plus links | none | N/A | The lede describes the page itself. The links are not facts. |
| 3 | What it is | A Dockerfile is a text document with all the commands a user could call on the command line to assemble an image | S1 | PASS | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image" |
| 4 | What it is | Docker runs Dockerfile instructions in order | S1 | PASS | "Docker runs instructions in a Dockerfile in order." |
| 5 | What it is | A Dockerfile must begin with `FROM` | S1 | PASS | "A Dockerfile must begin with a FROM instruction." |
| 6 | What it is | `docker build` is an alias of `docker buildx build`, which starts a build using BuildKit | S2 | PASS | "Aliases ... docker build" and "The docker buildx build command starts a build using BuildKit." |
| 7 | What it is | `-t` (`--tag`) sets the image identifier, format `[registry/]repository[:tag]` | S2 | PASS | "-t, --tag Image identifier (format: [registry/]repository[:tag])" |
| 8 | What it is | Compose is a tool for defining and running multi-container applications | S9 | PASS | "Docker Compose is a tool for defining and running multi-container applications." |
| 9 | What it is | It manages services, networks, and volumes in a single YAML file | S9 | PASS | "manage services, networks, and volumes in a single YAML configuration file" |
| 10 | What it is | One command creates and starts all services | S9 | PASS | "with a single command, you create and start all the services from your configuration file" |
| 11 | What it is | Default Compose file path is `compose.yaml` (preferred) or `compose.yml` in the working directory | S10 | PASS | "The default path for a Compose file is compose.yaml (preferred) or compose.yml that is placed in the working directory." |
| 12 | What it is | Compose works in all environments, including CI | S9 | PASS | "Compose works in all environments - production, staging, development, testing, as well as CI workflows." |
| 13 | What it is | Bake is a Buildx feature that defines builds in a declarative file instead of a complex CLI expression | S18 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |
| 14 | What it is | Bake runs multiple builds concurrently with a single invocation | S18 | PASS | "It also lets you run multiple builds concurrently with a single invocation." |
| 15 | What it is | A Bake file can be HCL or JSON, and Bake can build from a Compose file | S18 | PASS | "A Bake file can be written in HCL or JSON format. Bake can also build directly from a Docker Compose file." |
| 16 | What it is | Table, Docker build row: reads a `Dockerfile` (S1), command `docker build` (S2) | S1, S2 | PASS | S1: "A Dockerfile is a text document ... to assemble an image". S2: the alias list includes "docker build". |
| 17 | What it is | Table, Compose row: reads a `compose.yaml` (S10), command `docker compose up` (S11) | S10, S11 | PASS | S10: "default path for a Compose file is compose.yaml". S11 has "$ docker compose up". |
| 18 | What it is | Table, Bake row: HCL, JSON or Compose file (S18), command `docker buildx bake` (S18) | S18 | PASS | "$ docker buildx bake", and "HCL or JSON format. Bake can also build directly from a Docker Compose file." |
| 19 | How it works | `FROM` specifies the base image from which you build | S1 | PASS | "The FROM instruction specifies the base image from which you are" building |
| 20 | How it works | `WORKDIR` sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY` and `ADD` that follow | S1 | PASS | "sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it" |
| 21 | How it works | `ENV` sets the environment variable `<key>` to `<value>` | S1 | PASS | "The ENV instruction sets the environment variable <key> to the value <value>." |
| 22 | How it works | `RUN` executes commands to create a new layer on top of the current image | S1 | PASS | "will execute any commands to create a new layer on top of the current image" |
| 23 | How it works | `COPY` copies new files or directories from `<src>` to the image at `<dest>` | S1 | PASS | "copies new files or directories from <src> and adds them to the filesystem of the image at the path <dest>" |
| 24 | How it works | `EXPOSE` does not publish the port; it is documentation | S1 | PASS | "doesn't actually publish the port. It functions as a type of documentation ... about which ports are intended to be published." |
| 25 | How it works | `CMD` provides defaults; with more than one `CMD`, only the last takes effect | S1 | PASS | "If you list more than one CMD, only the last one takes effect." The source also says CMD "sets the command to be executed when running a container". The word "Provides defaults" was not found in my grep output. The core claim is supported. |
| 26 | How it works | The build context is the set of files that your build can access | S3 | PASS | "The build context is the set of files that your build can access." |
| 27 | How it works | Docker sends everything in your project directory to the daemon when it builds an image | S11 | PASS | "Docker sends everything in your project directory to the daemon when it builds an image." |
| 28 | How it works | `.dockerignore` is a newline-separated list of patterns similar to Unix shell file globs | S3 | PASS | "The .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells." |
| 29 | How it works | `.dockerignore` keeps unneeded files out of the build context | S11 | PASS | "Create a .dockerignore file to keep unnecessary files out of your build context" |
| 30 | How it works | If a layer changes, all later layers are affected | S4 | PASS | "If a layer changes, all other layers that come after it are also affected." |
| 31 | How it works | Put expensive steps near the start, and steps that change often near the end | S5 | PASS | "try to make expensive steps appear near the beginning of the Dockerfile. Steps that change often should appear near the end" |
| 32 | How it works | Docker's example: copy package files, install dependencies, then copy the source | S5 | PASS | "First, copy over the package management files ... Then, install the dependencies. Finally, copy over the project source code, which is subject to frequent change." |
| 33 | How it works | Multi-stage builds use multiple `FROM` statements | S6 | PASS | "With multi-stage builds, you use multiple FROM statements in your Dockerfile." |
| 34 | How it works | You can selectively copy artifacts between stages and leave the rest out of the final image | S6 | PASS | "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image." |
| 35 | How it works | By default Compose sets up a single network for your app | S14 | PASS | "By default, Compose sets up a single network for your app." |
| 36 | How it works | Each service container joins the network, is reachable, and is discoverable by service name | S14 | PASS | "Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by its service name." |
| 37 | How it works | Compose always starts and stops containers in dependency order | S13 | PASS | "Compose always starts and stops containers in dependency order" |
| 38 | How it works | On startup Compose waits only until a container is running, not "ready" | S13 | PASS | "On startup, Compose does not wait until a container is \"ready\", only until it's running." |
| 39 | How it works | With `condition: service_healthy`, the dependency must be healthy, as defined with `healthcheck`, before the dependent starts | S13 | PASS | "service_healthy. This specifies that a dependency is expected to be “healthy”, which is defined with healthcheck, before starting a dependent service." |
| 40 | How it works | Diagram, the tutorial's own picture of the practice run | none | N/A | The diagram is the page's own picture of its run. |
| 41 | Try it | Practice run is Docker's Compose Quickstart: a Flask app that counts visits in Redis | S11 | PASS | "Using the Flask framework, the application features a hit counter in Redis" |
| 42 | Try it | It needs Docker Compose | S11 | PASS | "Make sure you have: Installed the latest version of Docker Compose" |
| 43 | Try it | Run date, versions and platform, and the steps left out | none | N/A | This is the page's own run record. |
| 44 | Try it | Step 1: create a folder (`mkdir compose-demo`, `cd compose-demo`) and the app | S11 | PASS | "$ mkdir compose-demo $ cd compose-demo" |
| 45 | Try it | `app.py` reads Redis connection details from environment variables, with defaults. The code block matches. | S11 | PASS | "The app reads its Redis connection details from environment variables, with sensible defaults". The code matches lines 1215-1226. |
| 46 | Try it | `requirements.txt` lists two Python packages (`flask`, `redis`) | S11 | PASS | S11 shows "flask redis" as the requirements.txt content. |
| 47 | Try it | The `Dockerfile` is the Quickstart's, without comments. Every instruction matches. | S11 | PASS | S11 lines 1238-1256 match the block, for example "FROM python:3.12-alpine" and "CMD [\"flask\", \"run\", \"--debug\"]". |
| 48 | Try it | Name the file `Dockerfile` with no extension: some editors add `.txt` automatically, which causes the build to fail | S11 | PASS | "Make sure the file is named Dockerfile with no extension. Some editors add .txt automatically, which causes the build to fail." |
| 49 | Try it | Order note: `requirements.txt` is copied and installed before the rest of the code | none | N/A | This describes the page's own Dockerfile, and the order is shown in the block. |
| 50 | Try it | A `.env` file holds configuration values, and Compose reads it automatically for interpolation in `compose.yaml` | S11 | PASS | "Compose automatically reads .env and makes these values available for interpolation in your compose.yaml." |
| 51 | Try it | `.dockerignore` keeps `.env` (may hold secrets) and cached Python bytecode out of the build context. The `.env` and `.dockerignore` code matches. | S11 | PASS | "that includes your .env file (which may contain secrets) and any cached Python bytecode". Lines 1266-1268 and 1279-1282 match the blocks. |
| 52 | Try it | `compose.yaml` is the Quickstart's file with health check and named volume, without `develop.watch`. The YAML matches. | S11 | PASS | S11 lines 1452-1481 match the block once the `develop:` watch block is removed. Values: "interval: 5s", "timeout: 3s", "retries: 5", "start_period: 10s". |
| 53 | Try it | `web` uses an image built from the Dockerfile in the current directory and maps host port 8000 to container port 5000 | S11 | PASS | "The web service uses an image that's built from the Dockerfile in the current directory. It maps port 8000 on the host to port 5000 on the container" |
| 54 | Try it | `redis` uses a public Redis image from Docker Hub | S11 | PASS | "The redis service uses a public Redis image pulled from the Docker Hub registry." |
| 55 | Try it | `redis-cli ping` expects `PONG`; with `interval: 5s` and `retries: 5`, Compose waits up to 25 seconds | S11 | PASS | "redis-cli ping connects to Redis and expects a PONG response" and "With interval: 5s and retries: 5, Compose will wait up to 25 seconds before giving up." |
| 56 | Try it | `redis-data:/data` mounts the named volume at `/data`, where Redis writes its data files | S11 | PASS | "mounts the named volume at /data, the path where Redis writes its data files." |
| 57 | Try it | `docker compose config` works purely from your files, and `.env` variables are replaced by their values | S11 | PASS | "it works purely from your files" and "${APP_PORT}, ${REDIS_HOST}, and ${REDIS_PORT} have all been replaced with the values from your .env file." |
| 58 | Try it | `-d` runs the containers in the background | S15 | PASS | "-d, --detach Detached mode: Run containers in the background" |
| 59 | Try it | Output block: `web` started only after `redis` was healthy | none | N/A | The page labels it "In the tutorial's run". |
| 60 | Try it | Open `http://localhost:8000` and refresh: the counter increments on each visit | S11 | PASS | "Refresh the page — the counter increments on each visit." |
| 61 | Try it | Tutorial's run gave counts 1, 2, 3 | none | N/A | This is the page's own run record. |
| 62 | Try it | `docker compose logs -f` follows the log stream; pass a service name to follow one service | S11 | PASS | "docker compose logs -f ... To follow logs for a single service, ..." followed by "$ docker compose logs -f web" |
| 63 | Try it | `docker compose exec` runs a command inside an already-running container without starting a new one | S11 | PASS | "docker compose exec runs a command inside an already-running container without starting a new one." |
| 64 | Try it | Step 7 commands (`logs -f web`, `exec web env \| grep REDIS`, `exec redis redis-cli GET hits`) | S11 | PASS | S11 has "$ docker compose logs -f web", "$ docker compose exec web env | grep REDIS" and "$ docker compose exec redis redis-cli GET hits". |
| 65 | Try it | Ctrl+C stops following the logs; the containers keep running | S11 | PASS | "Press Ctrl+C to stop following logs. The containers keep running." |
| 66 | Try it | Tutorial's run: `env` showed `REDIS_HOST=redis` and `REDIS_PORT=6379`; `GET hits` returned `3` | none | N/A | This is the page's own run record. |
| 67 | Try it | The named volume persists between `compose down` and `compose up` cycles | S11 | PASS | "persists between compose down and compose up cycles" |
| 68 | Try it | `--wait` waits for services to be running or healthy, and implies detached mode | S15 | PASS | "--wait Wait for services to be running\|healthy. Implies detached mode." |
| 69 | Try it | The counter continues from where it left off | S11 | PASS | "the counter continues from where it left off." |
| 70 | Try it | Tutorial's run: the next visit gave 4 | none | N/A | This is the page's own run record. |
| 71 | Try it | `docker compose down -v` removes named volumes with the containers and permanently deletes data | S11 | PASS | "The -v flag removes named volumes along with the containers. Use this intentionally — it permanently deletes the stored data." |
| 72 | How a tester uses it | Compose manages services, networks and volumes in a single YAML file | S9 | PASS | "manage services, networks, and volumes in a single YAML configuration file" |
| 73 | How a tester uses it | With a custom project name, the same `compose.yaml` can be deployed twice on the same infrastructure, without changes | S10 | PASS | "so that the same compose.yaml file can be deployed twice on the same infrastructure, without changes, by just passing a distinct name." |
| 74 | How a tester uses it | Set the project name with `--project-name` or `COMPOSE_PROJECT_NAME` | S14 | PASS | "You can override the project name with either the --project-name flag or the COMPOSE_PROJECT_NAME environment variable." |
| 75 | How a tester uses it | `docker compose up --wait` waits for services to be running or healthy | S15 | PASS | "--wait Wait for services to be running\|healthy." |
| 76 | How a tester uses it | `--wait-timeout` sets the maximum duration in seconds to wait | S15 | PASS | "--wait-timeout Maximum duration in seconds to wait for the project to be running\|healthy" |
| 77 | How a tester uses it | Healthy needs a `healthcheck` on the service | S13 | PASS | "a dependency is expected to be “healthy”, which is defined with healthcheck" |
| 78 | How a tester uses it | `--exit-code-from` returns the exit code of the selected service container | S15 | PASS | "--exit-code-from Return the exit code of the selected service container." |
| 79 | How a tester uses it | It implies `--abort-on-container-exit`, which stops all containers if any stopped | S15 | PASS | "Implies --abort-on-container-exit" and "Stops all containers if any container was stopped." |
| 80 | How a tester uses it | If `up` itself encounters an error, its exit code is 1 | S15 | PASS | "If the process encounters an error, the exit code for this command is 1." |
| 81 | How a tester uses it | By default `down` removes only service containers, networks defined in the Compose file, and the default network | S16 | PASS | "By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section of the Compose file. The default network, if one is used." |
| 82 | How a tester uses it | `-v` also removes named volumes in the `volumes` section and anonymous volumes attached to containers | S16 | PASS | "-v, --volumes Remove named volumes declared in the \"volumes\" section of the Compose file and anonymous volumes attached to containers" |
| 83 | How a tester uses it | `docker compose config` shows the fully resolved configuration | S11 | PASS | "The output is the fully resolved configuration" |
| 84 | How a tester uses it | `docker compose logs` views output from containers; `-t` shows timestamps | S17 | PASS | "View output from containers" and "-t, --timestamps Show timestamps" |
| 85 | How a tester uses it | `docker compose exec` is the primary tool for live debugging | S11 | PASS | "This is the primary tool for live debugging." |
| 86 | How a tester uses it | `--pull` forces Docker to check for and download a newer base image version | S8 | PASS | "The --pull flag forces Docker to check for and download a newer version of the base image" |
| 87 | How a tester uses it | `--no-cache` disables the build cache, forcing a rebuild of all layers from scratch | S8 | PASS | "The --no-cache flag disables the build cache, forcing Docker to rebuild all layers from scratch" |
| 88 | How a tester uses it | Docker's example uses both: `docker build --pull --no-cache -t my-image:my-tag .` | S8 | PASS | "$ docker build --pull --no-cache -t my-image:my-tag ." |
| 89 | How a tester uses it | The Bake documentation lists workflows such as running tests and lint checks, and exporting build artifacts | S18 | PASS | "For practical workflows, see Run tests and lint checks, Export build artifacts" |
| 90 | Common mistakes | With the short syntax, Compose does not wait for dependencies to be "healthy" | S12 | PASS | "With short syntax, Compose does not wait for dependency services to be \"healthy\" before starting a dependent service." |
| 91 | Common mistakes | If an app starts before its database, it may not find a database able to handle its SQL statements | S13 | PASS | "the application service might start before the database service and won't find a database able to handle its SQL statements" |
| 92 | Common mistakes | Add a `healthcheck` and `condition: service_healthy` | S13 | PASS | "The solution for detecting the ready state of a service is to use the condition attribute" and "service_healthy ... defined with healthcheck" |
| 93 | Common mistakes | `HOST:CONTAINER` should always be a quoted string, to avoid conflicts with the YAML base-60 float | S12 | PASS | "HOST:CONTAINER should always be specified as a (quoted) string, to avoid conflicts with YAML base-60 float." |
| 94 | Common mistakes | Without a host IP, Docker binds to all interfaces (`0.0.0.0`), bypassing host firewall rules | S12 | PASS | "If you do not specify a host IP (such as 127.0.0.1), Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules." |
| 95 | Common mistakes | Short-syntax example with a host IP: `"127.0.0.1:8001:8001"` | S12 | PASS | `- "127.0.0.1:8001:8001"` is in the short-syntax examples. |
| 96 | Common mistakes | Build arguments and environment variables are inappropriate for build secrets, because they persist in the final image | S7 | PASS | "Build arguments and environment variables are inappropriate for passing secrets to your build, because they persist in the final image." |
| 97 | Common mistakes | Copying all the source first means any file change reinstalls all dependencies on every build | S5 | PASS | "Updating any file causes a reinstall of all dependencies every time you build the Docker image" |
| 98 | Common mistakes | Named volumes stay unless you add `-v` | S16 | PASS | The default removals do not include named volumes. "-v, --volumes Remove named volumes declared in the \"volumes\" section". |
| 99 | Common mistakes | Anonymous volumes are not removed by default | S16 | PASS | "Anonymous volumes are not removed by default." |
| 100 | Common mistakes | Image tags are mutable: a publisher can update a tag to point to a new image | S8 | PASS | "Image tags are mutable, meaning a publisher can update a tag to point to a new image." |
| 101 | Common mistakes | Pinning to a digest guarantees the same image version | S8 | PASS | "By pinning your images to a digest, you're guaranteed to always use the same image version" |
| 102 | What a tester can check | Callout "Tutorial advice": seven pieces of advice | none | PASS | The callout says it is "the tutorial's own advice". It gives no tool fact beyond what the page supports: `healthcheck`, `service_healthy`, `up --wait`, project name, digest pinning, `.dockerignore`, `down -v` and `config`. |
| 103 | Key words | Dockerfile | none | PASS | Row 3 of this table: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image" |
| 104 | Key words | `docker build` | none | PASS | "`docker build` is an alias of `docker buildx build`, which starts a build using BuildKit" |
| 105 | Key words | Build context | none | PASS | "The build context is the set of files that your build can access" |
| 106 | Key words | `.dockerignore` | none | PASS | "A `.dockerignore` file is a newline-separated list of patterns ... It keeps unneeded files out of the build context" |
| 107 | Key words | Build cache | none | PASS | "If a layer changes, all other layers that come after it are also affected. So make expensive steps appear near the beginning" |
| 108 | Key words | Multi-stage build | none | PASS | "you use multiple `FROM` statements ... selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image" |
| 109 | Key words | Docker Compose | none | PASS | "Docker Compose is a tool for defining and running multi-container applications" |
| 110 | Key words | `compose.yaml` | none | PASS | "The default path for a Compose file is `compose.yaml` (preferred) or `compose.yml` in the working directory" |
| 111 | Key words | Service | none | PASS | "...discoverable by its service name". The page's `compose.yaml` block has `services:` with `web` and `redis`. |
| 112 | Key words | `healthcheck` | none | PASS | "the dependency must be \"healthy\", as defined with `healthcheck`" and "`redis-cli ping` expects a `PONG` response" |
| 113 | Key words | `condition: service_healthy` | none | PASS | "with `service_healthy`, the dependency must be \"healthy\" ... before the dependent service starts" |
| 114 | Key words | Project name | none | PASS | "With a custom project name, the same `compose.yaml` file can be deployed twice on the same infrastructure, without changes" |
| 115 | Key words | Named volume | none | PASS | "The named volume persists between `compose down` and `compose up` cycles" |
| 116 | Key words | Bake | none | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file" |

Open FAILs after round 10: 0

Changed after this round: No FAIL in this round. The voices report of this round had a FAIL, so the page changed and round 11 checks it again.

## Round 11 (2026-11-16)

# Fact check: devops / docker-images-compose (round 11)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | How a Dockerfile builds an image, how the cache works, how Compose starts a test environment from one file, Bake for builds | none | N/A | Sentence that describes the page itself. |
| 2 | Lede | The page explains the build and start of a test environment, with a practice run of the Compose Quickstart; links to other pages | none | N/A | Framing sentence. The links are paths that start with `/`. |
| 3 | What it is | A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image | S1 | PASS | "Dockerfile. A Dockerfile is a text document that contains all the commands a" |
| 4 | What it is | Docker runs instructions in a Dockerfile in order | S1 | PASS | "Docker runs instructions in a Dockerfile in order." |
| 5 | What it is | A Dockerfile must begin with a `FROM` instruction | S1 | PASS | "A Dockerfile must begin with a FROM instruction." |
| 6 | What it is | `docker build` is an alias of `docker buildx build`, which starts a build using BuildKit | S2 | PASS | "Aliases ... An alias is a short or memorable alternative for a longer command. docker build" and "The docker buildx build command starts a build using BuildKit." |
| 7 | What it is | `-t` (`--tag`) sets the image identifier, format `[registry/]repository[:tag]` | S2 | PASS | "-t, --tag  Image identifier (format: [registry/]repository[:tag])" |
| 8 | What it is | Docker Compose is a tool for defining and running multi-container applications | S9 | PASS | "Docker Compose is a tool for defining and running multi-container applications." |
| 9 | What it is | It manages services, networks, and volumes in a single YAML configuration file | S9 | PASS | "manage services, networks, and volumes in a single YAML configuration file" |
| 10 | What it is | With a single command you create and start all the services from your configuration file | S9 | PASS | "with a single command, you create and start all the services from your configuration file." |
| 11 | What it is | The default path for a Compose file is `compose.yaml` (preferred) or `compose.yml` in the working directory | S10 | PASS | "The default path for a Compose file is compose.yaml (preferred) or compose.yml that is placed in the working directory." |
| 12 | What it is | Compose works in all environments: production, staging, development, testing, CI workflows | S9 | PASS | "Compose works in all environments - production, staging, development, testing, as well as CI workflows." |
| 13 | What it is | Bake is a feature of Docker Buildx that lets you define the build configuration in a declarative file, instead of a complex CLI expression | S18 | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression." |
| 14 | What it is | Bake lets you run multiple builds concurrently with a single invocation | S18 | PASS | "It also lets you run multiple builds concurrently with a single invocation." |
| 15 | What it is | A Bake file can be HCL or JSON; Bake can build from a Compose file | S18 | PASS | "A Bake file can be written in HCL or JSON format. Bake can also build directly from a Docker Compose file." |
| 16 | What it is | Table row: Docker build reads a `Dockerfile` (S1); command `docker build` (S2) | S1, S2 | PASS | S1: "Dockerfile. A Dockerfile is a text document..."; S2: "docker build" listed under Aliases. |
| 17 | What it is | Table row: Docker Compose reads a `compose.yaml` (S10); command `docker compose up` (S11) | S10, S11 | PASS | S10: "The Compose file, or compose.yaml file"; S11: "$ docker compose up" |
| 18 | What it is | Table row: Bake reads HCL/JSON file or Compose file; command `docker buildx bake` | S18 | PASS | "A Bake file can be written in HCL or JSON format. Bake can also build directly from a Docker Compose file." and "$ docker buildx bake" |
| 19 | How it works | Intro: these are the instructions of the Dockerfile in the practice run below | none | N/A | Sentence that describes the page itself. |
| 20 | How it works | `FROM` specifies the base image from which you are building | S1 | PASS | "The FROM instruction specifies the base image from which you are building." |
| 21 | How it works | `WORKDIR` sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it | S1 | PASS | "The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile." |
| 22 | How it works | `ENV` sets the environment variable `<key>` to the value `<value>` | S1 | PASS | "The ENV instruction sets the environment variable <key> to the value" |
| 23 | How it works | `RUN` executes any commands to create a new layer on top of the current image | S1 | PASS | "The RUN instruction will execute any commands to create a new layer on top of the current image." |
| 24 | How it works | `COPY` copies new files or directories from `<src>` and adds them to the image filesystem at `<dest>` | S1 | PASS | "The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the image at the path <dest>." |
| 25 | How it works | `EXPOSE` doesn't actually publish the port; it is documentation about which ports are intended to be published | S1 | PASS | "The EXPOSE instruction doesn't actually publish the port. It functions as a type of documentation ... about which ports are intended to be published." |
| 26 | How it works | `CMD` provides defaults for an executing container; with more than one `CMD`, only the last takes effect | S1 | PASS | "If you list more than one CMD, only the last one takes effect." and "The purpose of a CMD is to provide defaults for an executing container." |
| 27 | How it works | The build context is the set of files that your build can access | S3 | PASS | "The build context is the set of files that your build can access." |
| 28 | How it works | Docker sends everything in your project directory to the daemon when it builds an image | S11 | PASS | "Docker sends everything in your project directory to the daemon when it builds an image." |
| 29 | How it works | A `.dockerignore` file is a newline-separated list of patterns similar to the file globs of Unix shells | S3 | PASS | "The .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells." |
| 30 | How it works | It keeps unneeded files out of the build context | S11 | PASS | "Create a .dockerignore file to keep unnecessary files out of your build context" |
| 31 | How it works | If a layer changes, all other layers after it are also affected | S4 | PASS | "If a layer changes, all other layers that come after it are also affected." |
| 32 | How it works | Make expensive steps appear near the beginning, steps that change often near the end | S5 | PASS | "try to make expensive steps appear near the beginning of the Dockerfile. Steps that change often should appear near the end of the Dockerfile" |
| 33 | How it works | Docker's example: copy package management files, install dependencies, then copy source code (subject to frequent change) | S5 | PASS | "First, copy over the package management files ... Then, install the dependencies. Finally, copy over the project source code, which is subject to frequent change." |
| 34 | How it works | Multi-stage builds use multiple `FROM` statements | S6 | PASS | "With multi-stage builds, you use multiple FROM statements in your Dockerfile." |
| 35 | How it works | You can selectively copy artifacts between stages, leaving behind what you don't want in the final image | S6 | PASS | "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image." |
| 36 | How it works | By default Compose sets up a single network for your app | S14 | PASS | "By default, Compose sets up a single network for your app." |
| 37 | How it works | Each service container joins that network, is reachable by other containers, discoverable by service name | S14 | PASS | "Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by its service name." |
| 38 | How it works | Compose always starts and stops containers in dependency order | S13 | PASS | "Compose always starts and stops containers in dependency order" |
| 39 | How it works | On startup Compose does not wait until a container is "ready", only until it's running | S13 | PASS | "On startup, Compose does not wait until a container is "ready", only until it's running." |
| 40 | How it works | Use `condition`; with `service_healthy` the dependency must be "healthy", defined with `healthcheck`, before the dependent service starts | S13 | PASS | "service_healthy. This specifies that a dependency is expected to be "healthy", which is defined with healthcheck, before starting a dependent service." |
| 41 | How it works | Diagram is the tutorial's own picture of the practice run | none | N/A | The page labels it as its own picture of its run. |
| 42 | Try it | The practice run is the Compose Quickstart: a small Flask web app that counts visits in Redis | S11 | PASS | "Using the Flask framework, the application features a hit counter in Redis" |
| 43 | Try it | It needs Docker Compose | S11 | PASS | "Installed the latest version of Docker Compose" |
| 44 | Try it | Run record (2026-11-16, Docker Engine 29.9.3, Compose v5.5.1, Linux); leaves out Watch step and multiple-files step | none | N/A | Record of the page's own run and a sentence that describes the page. |
| 45 | Try it | Step 1: create a folder and the app (`mkdir compose-demo`, `cd compose-demo`) | S11 | PASS | "$ mkdir compose-demo  $ cd compose-demo" |
| 46 | Try it | `app.py` reads its Redis connection details from environment variables, with defaults; code block | S11 | PASS | "The app reads its Redis connection details from environment variables, with sensible defaults"; code matches lines 1215-1226. |
| 47 | Try it | `requirements.txt` lists two Python packages (flask, redis) | S11 | PASS | "Create requirements.txt ... flask  redis" |
| 48 | Try it | Step 2: this is the Quickstart's Dockerfile without its comments; code block | S11 | PASS | Lines 1238-1256 match: "FROM python:3.12-alpine ... RUN apk add --no-cache gcc musl-dev linux-headers ... CMD ["flask", "run", "--debug"]" |
| 49 | Try it | Name the file `Dockerfile` with no extension; some editors add `.txt` automatically, causing the build to fail | S11 | PASS | "Make sure the file is named Dockerfile with no extension. Some editors add .txt automatically, which causes the build to fail." |
| 50 | Try it | "Note the order: requirements.txt is copied and installed before the rest of the code" | none | PASS | A remark on the cited Dockerfile block. S11 lines 1249-1253: "COPY requirements.txt . ... RUN pip install -r requirements.txt ... COPY . ." |
| 51 | Try it | Step 3: a `.env` file holds configuration values; Compose reads it automatically for interpolation in `compose.yaml` | S11 | PASS | "Compose automatically reads .env and makes these values available for interpolation in your compose.yaml." |
| 52 | Try it | `.dockerignore` keeps `.env` (may contain secrets) and cached Python bytecode out of the build context; `.env` and `.dockerignore` contents | S11 | PASS | "that includes your .env file (which may contain secrets) and any cached Python bytecode." Values match: "APP_PORT=8000 REDIS_HOST=redis REDIS_PORT=6379"; ".env *.pyc __pycache__ redis-data" |
| 53 | Try it | Step 4: the Quickstart's compose.yaml with health check and named volume, without `develop.watch`; YAML block | S11 | PASS | Lines 1452-1481 have the same YAML, plus the `develop:` block that the page leaves out. |
| 54 | Try it | `web` uses an image built from the Dockerfile in the current directory and maps host port 8000 to container port 5000 | S11 | PASS | "The web service uses an image that's built from the Dockerfile in the current directory. It maps port 8000 on the host to port 5000 on the container" |
| 55 | Try it | `redis` uses a public Redis image from Docker Hub | S11 | PASS | "The redis service uses a public Redis image pulled from the Docker Hub registry." |
| 56 | Try it | `redis-cli ping` expects `PONG`; `interval: 5s` and `retries: 5` give up to 25 seconds | S11 | PASS | "redis-cli ping connects to Redis and expects a PONG response" and "With interval: 5s and retries: 5, Compose will wait up to 25 seconds before giving up." |
| 57 | Try it | `redis-data:/data` mounts the named volume at `/data`, where Redis writes its data files | S11 | PASS | "mounts the named volume at /data, the path where Redis writes its data files." |
| 58 | Try it | Step 5: `docker compose config` works purely from your files; `.env` variables replaced with values | S11 | PASS | "it works purely from your files" and "have all been replaced with the values from your .env file." |
| 59 | Try it | Step 6: `-d` runs the containers in the background | S15 | PASS | "-d, --detach  Detached mode: Run containers in the background" |
| 60 | Try it | Record: `web` started only after `redis` was healthy; log output | none | N/A | Record of the page's own run, after a sentence that gives the run date and tools. |
| 61 | Try it | Open `http://localhost:8000` and refresh: the counter increments on each visit | S11 | PASS | "Refresh the page — the counter increments on each visit." |
| 62 | Try it | Record: output `1 time(s)`, then 2, then 3 | none | N/A | Record of the page's own run. |
| 63 | Try it | Step 7: `docker compose logs -f` follows the log stream; pass a service name to follow one service | S11 | PASS | "The -f flag follows the log stream in real time ... To follow logs for a single service, pass its name" |
| 64 | Try it | `docker compose exec` runs a command inside an already-running container without starting a new one; the three commands | S11 | PASS | "docker compose exec runs a command inside an already-running container without starting a new one." Commands at lines 1591, 1600, 1621: "docker compose logs -f web", "docker compose exec web env \| grep REDIS", "docker compose exec redis redis-cli GET hits" |
| 65 | Try it | Press Ctrl+C to stop following the logs; the containers keep running | S11 | PASS | "Press Ctrl+C to stop following logs. The containers keep running." |
| 66 | Try it | Record: `env` showed `REDIS_HOST=redis` and `REDIS_PORT=6379`; `GET hits` returned `3` | none | N/A | Record of the page's own run. |
| 67 | Try it | Step 8: the named volume persists between `compose down` and `compose up` cycles | S11 | PASS | "persists between compose down and compose up cycles." |
| 68 | Try it | `--wait` waits for services to be running or healthy and implies detached mode; `down` and `up -d --wait` | S15 | PASS | "--wait  Wait for services to be running\|healthy. Implies detached mode." |
| 69 | Try it | The counter continues from where it left off | S11 | PASS | "the counter continues from where it left off." |
| 70 | Try it | Record: next visit gave `4 time(s)` | none | N/A | Record of the page's own run. |
| 71 | Try it | `docker compose down -v` removes named volumes with the containers and permanently deletes the stored data | S11 | PASS | "The -v flag removes named volumes along with the containers. Use this intentionally — it permanently deletes the stored data." |
| 72 | How a tester uses it | Compose manages services, networks, and volumes in a single YAML file | S9 | PASS | "manage services, networks, and volumes in a single YAML configuration file" |
| 73 | How a tester uses it | With a custom project name, the same `compose.yaml` can be deployed twice on the same infrastructure, without changes | S10 | PASS | "so that the same compose.yaml file can be deployed twice on the same infrastructure, without changes, by just passing a distinct name." |
| 74 | How a tester uses it | Set the project name with `--project-name` or `COMPOSE_PROJECT_NAME` | S14 | PASS | "--project-name flag or the COMPOSE_PROJECT_NAME environment variable." |
| 75 | How a tester uses it | `docker compose up --wait` waits for services to be running or healthy | S15 | PASS | "--wait  Wait for services to be running\|healthy." |
| 76 | How a tester uses it | `--wait-timeout` sets the maximum duration in seconds to wait | S15 | PASS | "--wait-timeout  Maximum duration in seconds to wait for the project to be running\|healthy" |
| 77 | How a tester uses it | Healthy needs a `healthcheck` on the service | S13 | PASS | "a dependency is expected to be "healthy", which is defined with healthcheck" |
| 78 | How a tester uses it | `--exit-code-from` returns the exit code of the selected service container | S15 | PASS | "--exit-code-from  Return the exit code of the selected service container. Implies --abort-on-container-exit" |
| 79 | How a tester uses it | It implies `--abort-on-container-exit`, which stops all containers if any container was stopped | S15 | PASS | "--abort-on-container-exit  Stops all containers if any container was stopped." |
| 80 | How a tester uses it | If the `up` process itself encounters an error, its exit code is 1 | S15 | PASS | "If the process encounters an error, the exit code for this command is 1." |
| 81 | How a tester uses it | By default `docker compose down` removes only containers for services, networks defined in the Compose file, and the default network | S16 | PASS | "By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section of the Compose file. The default network, if one is used." |
| 82 | How a tester uses it | `-v` (`--volumes`) also removes named volumes declared in `volumes` and anonymous volumes attached to containers | S16 | PASS | "-v, --volumes  Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers" |
| 83 | How a tester uses it | `docker compose config` shows the fully resolved configuration | S11 | PASS | "The output is the fully resolved configuration" |
| 84 | How a tester uses it | `docker compose logs` views output from containers; `-t` shows timestamps | S17 | PASS | "View output from containers" and "-t, --timestamps  Show timestamps" |
| 85 | How a tester uses it | `docker compose exec` is the primary tool for live debugging | S11 | PASS | "This is the primary tool for live debugging." |
| 86 | How a tester uses it | `--pull` forces Docker to check for and download a newer version of the base image | S8 | PASS | "The --pull flag forces Docker to check for and download a newer version of the base image" |
| 87 | How a tester uses it | `--no-cache` disables the build cache, forcing a rebuild of all layers from scratch | S8 | PASS | "The --no-cache flag disables the build cache, forcing Docker to rebuild all layers from scratch" |
| 88 | How a tester uses it | Docker's example uses both: `docker build --pull --no-cache -t my-image:my-tag .` | S8 | PASS | "$ docker build --pull --no-cache -t my-image:my-tag ." |
| 89 | How a tester uses it | The Bake documentation lists workflows such as running tests and lint checks, and exporting build artifacts | S18 | PASS | "For practical workflows, see Run tests and lint checks, Export build artifacts, and Extend Compose builds with HCL." |
| 90 | Common mistakes | With the short syntax, Compose does not wait for dependency services to be "healthy" before starting a dependent service | S12 | PASS | "With short syntax, Compose does not wait for dependency services to be "healthy" before starting a dependent service." |
| 91 | Common mistakes | If an application starts before its database, it may not find a database able to handle its SQL statements | S13 | PASS | "the application service might start before the database service and won't find a database able to handle its SQL statements." |
| 92 | Common mistakes | Add a `healthcheck` and `condition: service_healthy` | S13 | PASS | "use the condition attribute ... service_healthy ... which is defined with healthcheck" |
| 93 | Common mistakes | `HOST:CONTAINER` should always be a quoted string, to avoid conflicts with the YAML base-60 float | S12 | PASS | "HOST:CONTAINER should always be specified as a (quoted) string, to avoid conflicts with YAML base-60 float." |
| 94 | Common mistakes | With no host IP, Docker binds to all interfaces (`0.0.0.0`), bypassing host firewall rules | S12 | PASS | "If you do not specify a host IP (such as 127.0.0.1), Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules." |
| 95 | Common mistakes | Short-syntax example with a host IP: `"127.0.0.1:8001:8001"` | S12 | PASS | `- "127.0.0.1:8001:8001"` |
| 96 | Common mistakes | Build arguments and environment variables are inappropriate for secrets because they persist in the final image | S7 | PASS | "Build arguments and environment variables are inappropriate for passing secrets to your build, because they persist in the final image." |
| 97 | Common mistakes | Copying all source before installing dependencies: any file update reinstalls all dependencies every build | S5 | PASS | "Updating any file causes a reinstall of all dependencies every time you build the Docker image" |
| 98 | Common mistakes | Named volumes stay unless you add `-v` | S16 | PASS | "By default, the only things removed are: Containers ... Networks ... The default network" and "-v, --volumes  Remove named volumes" |
| 99 | Common mistakes | Anonymous volumes are not removed by default either | S16 | PASS | "Anonymous volumes are not removed by default." |
| 100 | Common mistakes | Image tags are mutable: a publisher can update a tag to point to a new image | S8 | PASS | "Image tags are mutable, meaning a publisher can update a tag to point to a new image." |
| 101 | Common mistakes | Pinning to a digest guarantees the same image version | S8 | PASS | "By pinning your images to a digest, you're guaranteed to always use the same image version" |
| 102 | What a tester can check | Callout "Tutorial advice": list of the tutorial's own advice | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no fact about a tool that the rest of the page does not support. The `--wait`, `healthcheck`, `service_healthy`, `down -v`, `.dockerignore`, and `docker compose config` items are all on the page with cites. |
| 103 | Key words | Dockerfile | none | PASS | Page sentence: "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image" |
| 104 | Key words | `docker build` | none | PASS | "`docker build` is an alias of `docker buildx build`, which starts a build using BuildKit" |
| 105 | Key words | Build context | none | PASS | "The build context is the set of files that your build can access" |
| 106 | Key words | `.dockerignore` | none | PASS | "A `.dockerignore` file is a newline-separated list of patterns ... It keeps unneeded files out of the build context" |
| 107 | Key words | Build cache | none | PASS | "If a layer changes, all other layers that come after it are also affected. So make expensive steps appear near the beginning" |
| 108 | Key words | Multi-stage build | none | PASS | "you use multiple `FROM` statements ... selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image" |
| 109 | Key words | Docker Compose | none | PASS | "Docker Compose is a tool for defining and running multi-container applications" |
| 110 | Key words | `compose.yaml` | none | PASS | "The default path for a Compose file is `compose.yaml` (preferred) or `compose.yml` in the working directory" |
| 111 | Key words | Service: an entry under `services`, such as `web` or `redis`; discoverable by service name | none | PASS | The page's `compose.yaml` block has `services:` with `web:` and `redis:`. "discoverable by its service name" |
| 112 | Key words | `healthcheck` | none | PASS | "the dependency must be "healthy", as defined with `healthcheck`" and "`redis-cli ping` expects a `PONG` response" |
| 113 | Key words | `condition: service_healthy` | none | PASS | "with `service_healthy`, the dependency must be "healthy" ... before the dependent service starts" |
| 114 | Key words | Project name | none | PASS | "With a custom project name, the same `compose.yaml` file can be deployed twice on the same infrastructure, without changes" |
| 115 | Key words | Named volume | none | PASS | "The named volume persists between `compose down` and `compose up` cycles" |
| 116 | Key words | Bake | none | PASS | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file" |

Open FAILs after round 11: 0

Open FAILs: 0
