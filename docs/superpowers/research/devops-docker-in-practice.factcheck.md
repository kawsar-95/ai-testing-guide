# Fact check: devops / docker-in-practice

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.docker.com/engine/storage/volumes/; S2 https://docs.docker.com/engine/storage/bind-mounts/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / docker-in-practice (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Storage, Podman, exit codes, image size, and common interview questions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself and states no fact about a tool, product, command or number. |
| 1 | Volumes are persistent data stores for containers, created and managed by Docker. | 1 | PASS | S1: "Volumes are persistent data stores for containers, created and managed by Docker." |
| 2 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container. | 2 | PASS | S2: "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / docker-in-practice (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Docker volumes and bind mounts. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | Volumes are persistent data stores for containers, created and managed by Docker | S1 | PASS | "Volumes are persistent data stores for containers, created and managed by Docker." (S1.txt line 276, wrapped across lines 276-277) |
| 2 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container | S2 | PASS | "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." (S2.txt lines 276-277) |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / docker-in-practice (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | Lede: "Docker volumes and bind mounts. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The lede describes the page itself. It gives no fact about a tool, product, command, or number. |
| 2 | Volumes are persistent data stores for containers, created and managed by Docker | S1 | PASS | pages/S1.txt: "Volumes are persistent data stores for containers, created and managed by Docker." |
| 3 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container | S2 | PASS | pages/S2.txt: "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / docker-in-practice (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Docker volumes and bind mounts. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | Volumes are persistent data stores for containers, created and managed by Docker | S1 | PASS | S1.txt:276: "Volumes are persistent data stores for containers, created and managed by Docker." |
| 2 | When you use a bind mount, a file or directory on the host machine is mounted from the host into a container | S2 | PASS | S2.txt:276: "When you use a bind mount, a file or directory on the host machine is mounted from the host into a container." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 12 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-16)

# Fact check: devops / docker-in-practice (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Volumes, bind mounts, tmpfs, networks, commands to look into a container and clean up | none | N/A | Describes the page itself. |
| 2 | Lede | Page scope and links to two other pages | none | N/A | Describes the page itself; the links are site paths. |
| 3 | What it is | By default, all files created inside a container are stored on a writable container layer | S1 | PASS | "By default all files created inside a container are stored on a writable container layer" |
| 4 | What it is | Data written to the container layer doesn't persist when the container is destroyed | S1 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 5 | What it is | Docker supports storage mounts outside the writable layer, among them volume, bind, tmpfs | S1 | PASS | "Docker supports the following types of storage mounts for storing data outside of the writable layer of the container: Volume mounts / Bind mounts / tmpfs mounts / Image mounts / Named pipes" |
| 6 | What it is | Whichever mount type, the data looks the same from within the container | S1 | PASS | "No matter which type of mount you choose to use, the data looks the same from within the container." |
| 7 | What it is | Table: Volume is a persistent data store, created and managed by Docker | S2 | PASS | "Volumes are persistent data stores for containers, created and managed by Docker." |
| 8 | What it is | Table: Volumes are the preferred mechanism for persisting data | S2 | PASS | "Volumes are the preferred mechanism for persisting data generated by and used by Docker containers." |
| 9 | What it is | Table: Bind mount is a file or directory on the host mounted into a container | S3 | PASS | "a file or directory on the host machine is mounted from the host into a container" |
| 10 | What it is | Table: Bind mount use is sharing source code or build artifacts between dev environment on the host and a container | S3 | PASS | "Sharing source code or build artifacts between a development environment on the Docker host and a container." |
| 11 | What it is | Table: tmpfs is temporary, only persisted in host memory; removed when the container stops | S4 | PASS | "a tmpfs mount is temporary, and only persisted in the host memory. When the container stops, the tmpfs mount is removed" |
| 12 | What it is | Table: tmpfs use is non-persistent state data not stored permanently | S2 | PASS | "If your container generates non-persistent state data, consider using a tmpfs mount to avoid storing the data anywhere permanently" |
| 13 | What it is | Containers without `--network` attach to the default bridge network | S5 | PASS | "All containers without a --network specified, are attached to the default bridge network." |
| 14 | What it is | On default bridge, containers access each other only by IP unless `--link` (legacy) | S5 | PASS | "Containers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy." |
| 15 | What it is | User-defined bridges provide automatic DNS resolution between containers | S5 | PASS | "User-defined bridges provide automatic DNS resolution between containers." |
| 16 | How it works | A volume's contents exist outside the lifecycle of a given container | S2 | PASS | "A volume's contents exist outside the lifecycle of a given container." |
| 17 | How it works | Writable layer is destroyed with the container, but a volume keeps data even if the container is removed | S2 | PASS | "When a container is destroyed, the writable layer is destroyed with it. Using a volume ensures that the data is persisted even if the container using it is removed." |
| 18 | How it works | A volume can be mounted into multiple containers simultaneously | S2 | PASS | "A given volume can be mounted into multiple containers simultaneously." |
| 19 | How it works | An unused volume is still available to Docker and isn't removed automatically | S2 | PASS | "When no running container is using a volume, the volume is still available to Docker and isn't removed automatically." |
| 20 | How it works | `docker run` can mount a volume with `--mount` or `--volume` | S2 | PASS | "To mount a volume with the docker run command, you can use either the --mount or --volume flag." |
| 21 | How it works | `--mount` is generally preferred: more explicit, supports all options | S2 | PASS | "In general, --mount is preferred. The main difference is that the --mount flag is more explicit and supports all the available options." |
| 22 | How it works | Table: volume forms `--mount type=volume,src=<volume-name>,dst=<mount-path>` / `--volume <volume-name>:<mount-path>` | S2 | PASS | "$ docker run --mount type=volume,src=<volume-name>,dst=<mount-path>" and "$ docker run --volume <volume-name>:<mount-path>" |
| 23 | How it works | Table: bind forms `--mount type=bind,src=<host-path>,dst=<container-path>` / `--volume <host-path>:<container-path>` | S3 | PASS | "$ docker run --mount type=bind,src=<host-path>,dst=<container-path>" and "$ docker run --volume <host-path>:<container-path>" |
| 24 | How it works | Table: tmpfs forms `--mount type=tmpfs,dst=<mount-path>` / `--tmpfs <mount-path>` | S4 | PASS | "$ docker run --mount type=tmpfs,dst=<mount-path>" and "$ docker run --tmpfs <mount-path>" |
| 25 | How it works | Mounting a non-empty volume over existing files obscures them | S2 | PASS | "If you mount a non-empty volume into a directory in the container in which files or directories exist, the pre-existing files are obscured by the mount." |
| 26 | How it works | Mounting an empty volume copies the files into the volume by default | S2 | PASS | "If you mount an empty volume into a directory in the container in which files or directories exist, these files or directories are propagated (copied) into the volume by default." |
| 27 | How it works | A volume may be named or anonymous; anonymous ones get a random name | S2 | PASS | "A volume may be named or anonymous. Anonymous volumes are given a random name" |
| 28 | How it works | Anonymous volumes persist after container removal, except with `--rm` | S2 | PASS | "anonymous volumes persist even if you remove the container that uses them, except if you use the --rm flag when creating the container" |
| 29 | How it works | Bind mounts have write access to host files by default | S3 | PASS | "Bind mounts have write access to files on the host by default." |
| 30 | How it works | A container process can change the host filesystem, including important system files | S3 | PASS | "you can change the host filesystem via processes running in a container, including creating, modifying, or deleting important system files or directories." |
| 31 | How it works | `readonly` or `ro` prevents the container from writing to the mount | S3 | PASS | "You can use the readonly or ro option to prevent the container from writing to the mount." |
| 32 | How it works | On the default bridge, containers can't resolve each other by name | S5 | PASS | "On the default bridge network, containers can't resolve each other by name." |
| 33 | How it works | On user-defined networks, containers can resolve each other by name | S5 | PASS | "On user-defined networks, containers can resolve each other by name." |
| 34 | How it works | Automatic service discovery resolves only custom container names, not default generated names | S5 | PASS | "Automatic service discovery only resolves custom container names, not default automatically generated names." |
| 35 | How it works | Diagram is the tutorial's own picture of step 4 | none | N/A | Describes the page itself. The ping output text `ping: bad address 'alpine3'` is also in S5. |
| 36 | Try it | Intro: run date, Docker Engine 29.9.3, sample data | none | N/A | The tutorial's own run and sample data, not a claim about a tool. |
| 37 | Try it | Step 1: starting a container with a missing volume makes Docker create it; first command is Docker's example on one line | S2 | PASS | "If you start a container with a volume that doesn't yet exist, Docker creates the volume for you." The example is `docker run -d \ --name devtest \ --mount source=myvol2,target=/app \ nginx:latest`. |
| 38 | Try it | Step 1: `docker exec` runs a new command in a running container | S6 | PASS | "The docker exec command runs a new command in a running container." |
| 39 | Try it | Step 1: command must be an executable; chained or quoted command doesn't work; `sh -c` as Docker's example | S6 | PASS | "The command must be an executable. A chained or a quoted command doesn't work. This works: docker exec -it my_container sh -c "echo a && echo b"" |
| 40 | Try it | Step 1: `docker cp` works with a running or stopped container | S7 | PASS | "The CONTAINER can be a running or stopped container." |
| 41 | Try it | Step 1: the six-command code block | S2, S6, S7 | PASS | The commands use only the facts cited in #37 to #40. The `myvol2`, `/app` and `nginx:latest` values match the S2 example. |
| 42 | Try it | Step 1: tutorial-run results (ownership, printed text) | none | N/A | The tutorial's own run. |
| 43 | Try it | Step 2: a bind mount puts a host folder in the container; container can write by default | S3 | PASS | "a file or directory on the host machine is mounted from the host into a container" and "Bind mounts have write access to files on the host by default." |
| 44 | Try it | Step 2: code block (`--mount type=bind,src=...,dst=...`) | S3 | PASS | "--mount type=bind,src=<host-path>,dst=<container-path>" |
| 45 | Try it | Step 2: result `cat` printed `1 passed`; file owned by `root` | none | N/A | The tutorial's own run. |
| 46 | Try it | Step 3: by default `--mount` doesn't create a missing host directory; it errors | S3 | PASS | "By default, --mount does not automatically create a directory if the specified mount path does not exist on the host. Instead, it produces an error" |
| 47 | Try it | Step 3: with `--volume`/`-v`, Docker creates the missing directory, always as a directory | S3 | PASS | "If you use --volume to bind-mount a file or directory that does not yet exist on the Docker host, Docker automatically creates the directory on the host for you. It's always created as a directory." |
| 48 | Try it | Step 3: error text, exit code 125, `typo-dir` result | none | N/A | The tutorial's own run. The error text also matches S3: "docker: Error response from daemon: invalid mount config for type "bind": bind source path does not exist". |
| 49 | Try it | Step 4: commands follow Docker's user-defined bridge tutorial, three containers instead of four; `-dit` means detached, interactive, TTY | S5 | PASS | "Create four containers. Three connect to alpine-net, and one connects to the default bridge." and "The -dit flags mean detached, interactive, and with a TTY." |
| 50 | Try it | Step 4: Docker's tutorial attaches to `alpine1` to run the ping | S5 | PASS | "$ docker container attach alpine1" followed by "# ping -c 2 alpine2" |
| 51 | Try it | Step 4: code block (`docker network create --driver bridge alpine-net`, `docker run -dit ... --network alpine-net alpine ash`) | S5 | PASS | "$ docker network create --driver bridge alpine-net" and "$ docker run -dit --name alpine1 --network alpine-net alpine ash" |
| 52 | Try it | Step 4: from `alpine1` you can't connect to `alpine3`, because it's on a different network | S5 | PASS | "From alpine1, you can't connect to alpine3 because it's on a different network" |
| 53 | Try it | Step 4: output lines; second `docker exec` exit code 1 | none | N/A | The tutorial's own run. The two lines also appear in S5. |
| 54 | Try it | Step 5: by default a container has no resource constraints | S10 | PASS | "By default, a container has no resource constraints" |
| 55 | Try it | Step 5: `-m` sets the maximum memory the container can use | S10 | PASS | "-m or --memory= The maximum amount of memory the container can use." |
| 56 | Try it | Step 5: `docker stats` shows a live stream of usage; `--no-stream` pulls only the first result | S8 | PASS | "Display a live stream of container(s) resource usage statistics" and "Disable streaming stats and only pull the first result" |
| 57 | Try it | Step 5: `docker system df` shows Docker disk usage | S11 | PASS | "Show docker disk usage" |
| 58 | Try it | Step 5: code block, stats table, limit text, `df` columns | S10, S8, S11 | N/A | The tutorial's own run output. The commands use only the facts cited in #54 to #57. |
| 59 | Try it | Step 6: Docker's tutorial stops and removes the containers, then the network | S5 | PASS | "$ docker container stop alpine1 alpine2 alpine3 alpine4 / $ docker container rm alpine1 alpine2 alpine3 alpine4 / $ docker network rm alpine-net" |
| 60 | Try it | Step 6: `docker volume rm` removes the volume | S2 | PASS | "$ docker volume rm myvol2" (follows the stop and rm of devtest) |
| 61 | Try it | Step 6: last line worked without `sudo` | none | N/A | The tutorial's own run. |
| 62 | How a tester uses it | New volumes can have content pre-populated by a container or build | S2 | PASS | "New volumes can have their content pre-populated by a container or build." |
| 63 | How a tester uses it | Mounting an empty volume over files copies them in; a good way to pre-populate data | S2 | PASS | "these files or directories are propagated (copied) into the volume by default... This is a good way to pre-populate data that another container needs." |
| 64 | How a tester uses it | Volumes can be more safely shared among multiple containers | S2 | PASS | "Volumes can be more safely shared among multiple containers." |
| 65 | How a tester uses it | tmpfs avoids permanent storage and raises performance by skipping the writable layer | S2 | PASS | "consider using a tmpfs mount to avoid storing the data anywhere permanently, and to increase the container's performance by avoiding writing into the container's writable layer." |
| 66 | How a tester uses it | tmpfs can't be shared between containers; available only on Linux | S4 | PASS | "Unlike volumes and bind mounts, you can't share tmpfs mounts between containers. This functionality is only available if you're running Docker on Linux." |
| 67 | How a tester uses it | `docker cp` copies files or folders between a container and the local filesystem | S7 | PASS | "Copy files/folders between a container and the local filesystem" |
| 68 | How a tester uses it | The container can be running or stopped | S7 | PASS | "The CONTAINER can be a running or stopped container." |
| 69 | How a tester uses it | Copied files get the UID:GID of the user who ran `docker cp` | S7 | PASS | "Files copied to the local machine are created with the UID:GID of the user which invoked the docker cp" |
| 70 | How a tester uses it | Code block `docker cp <container>:/path/in/container/report.txt ./report.txt` | S7 | PASS | The command has the form `docker cp CONTAINER:SRC_PATH DEST_PATH`; the sentence "Copy files/folders between a container and the local filesystem" covers it. |
| 71 | How a tester uses it | Put app and test container on one user-defined network so DNS resolves names | S5 | PASS | "User-defined bridges provide automatic DNS resolution between containers." |
| 72 | How a tester uses it | Give containers names because automatic discovery doesn't resolve default generated names | S5 | PASS | "Automatic service discovery only resolves custom container names, not default automatically generated names." |
| 73 | How a tester uses it | By default `docker logs` shows STDOUT and STDERR | S9 | PASS | "By default, docker logs shows the command's STDOUT and STDERR." |
| 74 | How a tester uses it | A web server or database may send output to log files instead | S9 | PASS | "If your image runs a non-interactive process such as a web server or a database, that application may send its output to log files instead of STDOUT and STDERR." |
| 75 | How a tester uses it | Official nginx image links its log files to `/dev/stdout` and `/dev/stderr` | S9 | PASS | "The official nginx image creates a symbolic link from /var/log/nginx/access.log to /dev/stdout, and creates another symbolic link from /var/log/nginx/error.log to /dev/stderr" |
| 76 | How a tester uses it | By default a container has no resource constraints and can use as much as the host kernel scheduler allows | S10 | PASS | "By default, a container has no resource constraints and can use as much of a given resource as the host's kernel scheduler allows." |
| 77 | How a tester uses it | `-m` (`--memory`) sets max memory; `--cpus` sets how much CPU it can use | S10 | PASS | "-m or --memory= The maximum amount of memory the container can use." and "--cpus=<value> Specify how much of the available CPU resources a container can use." |
| 78 | How a tester uses it | On Linux hosts, with too little memory for system functions, the kernel throws an OOME and starts killing processes | S10 | PASS | "On Linux hosts, if the kernel detects that there isn't enough memory to perform important system functions, it throws an OOME, or Out Of Memory Exception, and starts killing processes" |
| 79 | How a tester uses it | Docker advises testing memory needs before production | S10 | PASS | "Perform tests to understand the memory requirements of your application before placing it into production." |
| 80 | Common mistakes | With `--volume`, Docker creates a missing host directory | S3 | PASS | "Docker automatically creates the directory on the host for you." |
| 81 | Common mistakes | "The container then gets an empty folder instead of your files." | none | FAIL | No cite. S3 says Docker creates the directory; it does not say the container then sees an empty folder. Fix: cite S3 and write only "Docker creates the missing directory", or drop the sentence. |
| 82 | Common mistakes | `--mount` produces an error when the source path doesn't exist | S3 | PASS | "By default, --mount does not automatically create a directory if the specified mount path does not exist on the host. Instead, it produces an error" |
| 83 | Common mistakes | Pre-existing files are obscured by the mount | S2 | PASS | "the pre-existing files are obscured by the mount." |
| 84 | Common mistakes | No straightforward way to remove a mount to reveal the obscured files | S2 | PASS | "With containers, there's no straightforward way of removing a mount to reveal the obscured files again." |
| 85 | Common mistakes | Bind mounts have write access by default | S3 | PASS | "Bind mounts have write access to files on the host by default." |
| 86 | Common mistakes | Add `readonly` (`ro`) when the container only needs to read | S3 | PASS | "You can use the readonly or ro option to prevent the container from writing to the mount." |
| 87 | Common mistakes | Default bridge: containers can't resolve each other by name | S5 | PASS | "On the default bridge network, containers can't resolve each other by name." |
| 88 | Common mistakes | When the container stops the tmpfs mount is removed; files aren't persisted | S4 | PASS | "When the container stops, the tmpfs mount is removed, and files written there won't be persisted." |
| 89 | Common mistakes | A volume no running container uses isn't removed automatically | S2 | PASS | "the volume is still available to Docker and isn't removed automatically." |
| 90 | Common mistakes | `docker volume prune` removes unused volumes | S2 | PASS | "You can remove unused volumes using docker volume prune." |
| 91 | Common mistakes | `docker system prune` removes unused containers, networks, images, build cache, and optionally volumes | S12 | PASS | "Remove all unused containers, networks, images (both dangling and unused), unused build cache, and optionally, volumes." |
| 92 | Common mistakes | Without options, the warning lists stopped containers, networks not used by a container, dangling images, unused build cache | S12 | PASS | "WARNING! This will remove: - all stopped containers - all networks not used by at least one container - all dangling images - unused build cache" |
| 93 | Common mistakes | `--all` removes all unused images; `--volumes` prunes anonymous volumes | S12 | PASS | "-a, --all Remove all unused images not just dangling ones" and "--volumes Prune anonymous volumes" |
| 94 | What a tester can check | Callout "Tutorial advice": eight pieces of advice | none | PASS | The callout says "This list is the tutorial's own advice for a tester who runs tests in containers." It gives no tool fact that the rest of the page does not support. The `root` ownership point is marked as the tutorial's own run. |
| 95 | Key words | Writable container layer | none | PASS | "By default, all files created inside a container are stored on a writable container layer" and "Data written to the container layer doesn't persist when the container is destroyed" |
| 96 | Key words | Volume | none | PASS | "A persistent data store for containers, created and managed by Docker" (What it is table) |
| 97 | Key words | Anonymous volume | none | PASS | "anonymous volumes are given a random name" and "anonymous volumes persist even if you remove the container that uses them, except if you use the `--rm` flag" |
| 98 | Key words | Bind mount, writable by default | none | PASS | "A file or directory on the host machine, mounted from the host into a container" and "Bind mounts have write access to files on the host by default" |
| 99 | Key words | tmpfs mount | none | PASS | "Temporary, and only persisted in the host memory; when the container stops, the tmpfs mount is removed" |
| 100 | Key words | `--mount` | none | PASS | "`--mount` is preferred: it is more explicit and supports all the available options" and "`--mount`, which produces an error when the source path doesn't exist" |
| 101 | Key words | `--volume` (`-v`) | none | PASS | "With `--volume`, Docker creates a missing host directory for you"; the table column is titled "Short form". |
| 102 | Key words | `readonly` (`ro`) | none | PASS | "You can use the `readonly` or `ro` option to prevent the container from writing to the mount" |
| 103 | Key words | Default bridge network | none | PASS | "All containers without a `--network` specified are attached to the default bridge network" and "containers can't resolve each other by name" |
| 104 | Key words | User-defined bridge network, made with `docker network create`, resolves by name | none | PASS | "These commands follow Docker's tutorial on user-defined bridge networks" with the code `docker network create --driver bridge alpine-net`; "On user-defined networks, containers can resolve each other by name" |
| 105 | Key words | `docker cp` | none | PASS | "`docker cp` copies files or folders between a container and the local filesystem. The container can be a running or stopped container." |
| 106 | Key words | `docker stats` | none | PASS | "`docker stats` displays a live stream of container resource usage statistics" |
| 107 | Key words | `-m` (`--memory`) | none | PASS | "`-m` (`--memory`) sets the maximum amount of memory the container can use" |
| 108 | Key words | `docker system prune` | none | PASS | "removes all unused containers, networks, images..., unused build cache, and optionally, volumes"; "`--all` removes all unused images... `--volumes` prunes anonymous volumes" |

Open FAILs after round 6: 1

Changed after this round: The FAIL was fixed: the bullet about a typo in a `-v` path no longer says, with no cite, what the container gets; in all three panels it says what the container saw in step 3 of the tutorial's run, an empty folder.

## Round 7 (2026-11-16)

# Fact check: devops / docker-in-practice (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Volumes, bind mounts, tmpfs, networks with name lookup, and commands to inspect and clean up | none | N/A | Summary of the page itself. It gives no tool fact beyond what the sections cite. |
| 2 | Lede | Everyday container work in testing; builds on two other pages | none | N/A | Framing sentence plus site links. Not a fact. |
| 3 | What it is | By default, all files created inside a container are stored on a writable container layer | S1 | PASS | "By default all files created inside a container are stored on a writable container layer" |
| 4 | What it is | Data written to the container layer doesn't persist when the container is destroyed | S1 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 5 | What it is | Docker supports storage mounts outside the writable layer: volume, bind, tmpfs | S1 | PASS | "Docker supports the following types of storage mounts for storing data outside of the writable layer of the container: Volume mounts / Bind mounts / tmpfs mounts" |
| 6 | What it is | Whatever the mount type, the data looks the same from within the container | S1 | PASS | "No matter which type of mount you choose to use, the data looks the same from within the container." |
| 7 | What it is | Volume: a persistent data store for containers, created and managed by Docker | S2 | PASS | "Volumes are persistent data stores for containers, created and managed by Docker." |
| 8 | What it is | Volumes are the preferred mechanism for persisting data | S2 | PASS | "Volumes are the preferred mechanism for persisting data generated by and used by Docker containers." |
| 9 | What it is | Bind mount: a file or directory on the host mounted from the host into a container | S3 | PASS | "a file or directory on the host machine is mounted from the host into a container" |
| 10 | What it is | Bind mount use: sharing source code or build artifacts between a development environment on the Docker host and a container | S3 | PASS | "Sharing source code or build artifacts between a development environment on the Docker host and a container." |
| 11 | What it is | tmpfs: temporary, only persisted in host memory; removed when the container stops | S4 | PASS | "a tmpfs mount is temporary, and only persisted in the host memory. When the container stops, the tmpfs mount is removed" |
| 12 | What it is | tmpfs use: non-persistent state data that should not be stored permanently | S2 | PASS | "If your container generates non-persistent state data, consider using a tmpfs mount to avoid storing the data anywhere permanently" |
| 13 | What it is | Containers without `--network` are attached to the default bridge network | S5 | PASS | "All containers without a --network specified, are attached to the default bridge network." |
| 14 | What it is | On the default bridge, containers reach each other only by IP unless `--link`, which is legacy | S5 | PASS | "Containers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy." |
| 15 | What it is | User-defined bridges provide automatic DNS resolution between containers | S5 | PASS | "User-defined bridges provide automatic DNS resolution between containers." |
| 16 | How it works | A volume's contents exist outside the lifecycle of a given container | S2 | PASS | "A volume's contents exist outside the lifecycle of a given container." |
| 17 | How it works | Writable layer is destroyed with the container; a volume keeps the data even if the container is removed | S2 | PASS | "When a container is destroyed, the writable layer is destroyed with it. Using a volume ensures that the data is persisted even if the container using it is removed." |
| 18 | How it works | A volume can be mounted into multiple containers simultaneously | S2 | PASS | "A given volume can be mounted into multiple containers simultaneously." |
| 19 | How it works | An unused volume stays available and isn't removed automatically | S2 | PASS | "the volume is still available to Docker and isn't removed automatically." |
| 20 | How it works | `docker run` can mount a volume with `--mount` or `--volume` | S2 | PASS | "To mount a volume with the docker run command, you can use either the --mount or --volume flag." |
| 21 | How it works | `--mount` is generally preferred: more explicit, supports all options | S2 | PASS | "In general, --mount is preferred. The main difference is that the --mount flag is more explicit and supports all the available options." |
| 22 | How it works | Table, volume row: `--mount type=volume,src=<volume-name>,dst=<mount-path>` and `--volume <volume-name>:<mount-path>` | S2 | PASS | "$ docker run --mount type=volume,src=<volume-name>,dst=<mount-path>" and "$ docker run --volume <volume-name>:<mount-path>" |
| 23 | How it works | Table, bind row: `--mount type=bind,src=<host-path>,dst=<container-path>` and `--volume <host-path>:<container-path>` | S3 | PASS | "$ docker run --mount type=bind,src=<host-path>,dst=<container-path>" and "$ docker run --volume <host-path>:<container-path>" |
| 24 | How it works | Table, tmpfs row: `--mount type=tmpfs,dst=<mount-path>` and `--tmpfs <mount-path>` | S4 | PASS | "$ docker run --mount type=tmpfs,dst=<mount-path>" and "$ docker run --tmpfs <mount-path>" |
| 25 | How it works | Mounting a non-empty volume over existing files obscures them | S2 | PASS | "If you mount a non-empty volume into a directory in the container in which files or directories exist, the pre-existing files are obscured by the mount." |
| 26 | How it works | Mounting an empty volume copies the files into it by default | S2 | PASS | "these files or directories are propagated (copied) into the volume by default." |
| 27 | How it works | A volume may be named or anonymous; anonymous gets a random name | S2 | PASS | "A volume may be named or anonymous. Anonymous volumes are given a random name" |
| 28 | How it works | Anonymous volumes persist after container removal, except with `--rm` | S2 | PASS | "anonymous volumes persist even if you remove the container that uses them, except if you use the --rm flag when creating the container" |
| 29 | How it works | Bind mounts have write access to host files by default | S3 | PASS | "Bind mounts have write access to files on the host by default." |
| 30 | How it works | A container process can change the host filesystem, including creating, modifying, or deleting important system files | S3 | PASS | "you can change the host filesystem via processes running in a container, including creating, modifying, or deleting important system files or directories." |
| 31 | How it works | `readonly` or `ro` prevents the container from writing to the mount | S3 | PASS | "You can use the readonly or ro option to prevent the container from writing to the mount." |
| 32 | How it works | On the default bridge, containers can't resolve each other by name | S5 | PASS | "On the default bridge network, containers can't resolve each other by name." |
| 33 | How it works | On user-defined networks, containers can resolve each other by name | S5 | PASS | "On user-defined networks, containers can resolve each other by name." |
| 34 | How it works | Automatic service discovery resolves only custom container names | S5 | PASS | "Automatic service discovery only resolves custom container names, not default automatically generated names." |
| 35 | How it works | Diagram is the tutorial's own picture of step 4 | none | N/A | Describes the page itself. The text `ping: bad address 'alpine3'` matches S5 ("ping: bad address 'alpine3'"). |
| 36 | Try it | Run on 2026-11-16 with Docker Engine 29.9.3, user in `docker` group; sample data is the tutorial's own | none | N/A | The tutorial's own run record. It is not a statement about a tool and no source covers it. |
| 37 | Try it | Step 1: starting a container with a volume that doesn't yet exist makes Docker create it; the first command is Docker's example | S2 | PASS | "If you start a container with a volume that doesn't yet exist, Docker creates the volume for you." Example: "docker run -d --name devtest --mount source=myvol2,target=/app nginx:latest" |
| 38 | Try it | Step 1: `docker exec` runs a new command in a running container | S6 | PASS | "The docker exec command runs a new command in a running container." |
| 39 | Try it | Step 1: the command must be an executable; chained or quoted commands don't work; `sh -c` as in Docker's example | S6 | PASS | "The command must be an executable. A chained or a quoted command doesn't work." and "This works: docker exec -it my_container sh -c "echo a && echo b"" |
| 40 | Try it | Step 1: `docker cp` works with a running or stopped container (code block: stop, cp, rm, run with `--rm` and `cat`) | S7 | PASS | "The CONTAINER can be a running or stopped container." Block commands follow S2 (`docker container stop devtest`, `docker container rm devtest`) and S7 (`docker cp` syntax). |
| 41 | Try it | Step 1: results of the tutorial's run (owner shown by `ls -l`, printed `run 1: 12 passed`) | none | N/A | "In the tutorial's run" observation. Not a source-checkable tool fact. |
| 42 | Try it | Step 2: a bind mount puts a host folder in the container; the container can write by default (code block) | S3 | PASS | "Bind mounts have write access to files on the host by default." The `type=bind,src=...,dst=...` form is in S3. |
| 43 | Try it | Step 2: `cat` printed `1 passed`; `result.txt` belonged to `root` | none | N/A | The tutorial's own run result. |
| 44 | Try it | Step 3: by default `--mount` doesn't create a missing host directory and gives an error | S3 | PASS | "By default, --mount does not automatically create a directory if the specified mount path does not exist on the host. Instead, it produces an error" |
| 45 | Try it | Step 3: with `--volume` (`-v`) Docker creates the missing directory, always as a directory | S3 | PASS | "If you use --volume to bind-mount a file or directory that does not yet exist on the Docker host, Docker automatically creates the directory on the host for you. It's always created as a directory." |
| 46 | Try it | Step 3: error text, exit 125, exit 0, `typo-dir` owned by `root` | none | N/A | The tutorial's own run. The error prefix matches S3: "invalid mount config for type "bind": bind source path does not exist:". Exit codes and owner are not in the sources. |
| 47 | Try it | Step 4: follows Docker's user-defined bridge tutorial with three containers instead of four; `-dit` means detached, interactive, TTY | S5 | PASS | "The -dit flags mean detached, interactive, and with a TTY." and "Create four containers." |
| 48 | Try it | Step 4: Docker's tutorial attaches to `alpine1` to run the ping | S5 | PASS | "$ docker container attach alpine1 / # ping -c 2 alpine2" |
| 49 | Try it | Step 4: commands `docker network create --driver bridge alpine-net`, three `docker run -dit ... alpine ash` | S5 | PASS | "$ docker network create --driver bridge alpine-net"; "$ docker run -dit --name alpine1 --network alpine-net alpine ash"; "$ docker run -dit --name alpine3 alpine ash" |
| 50 | Try it | Step 4: from `alpine1` you can't connect to `alpine3` because it is on a different network | S5 | PASS | "From alpine1, you can't connect to alpine3 because it's on a different network" |
| 51 | Try it | Step 4: tutorial's run printed two lines; second `docker exec` exited 1 | none | N/A | The tutorial's own run. Both lines appear in S5 ("2 packets transmitted, 2 packets received, 0% packet loss"; "ping: bad address 'alpine3'"). The exit code is not in the sources. |
| 52 | Try it | Step 5: by default a container has no resource constraints | S10 | PASS | "By default, a container has no resource constraints" |
| 53 | Try it | Step 5: `-m` sets the maximum memory the container can use | S10 | PASS | "-m or --memory= The maximum amount of memory the container can use." |
| 54 | Try it | Step 5: `docker stats` shows a live stream; `--no-stream` pulls only the first result | S8 | PASS | "Display a live stream of container(s) resource usage statistics" and "Disable streaming stats and only pull the first result" |
| 55 | Try it | Step 5: `docker system df` shows Docker disk usage | S11 | PASS | "Show docker disk usage" |
| 56 | Try it | Step 5: stats table, limits (30.16GiB, 64MiB), `docker system df` rows and columns | none | N/A | The tutorial's own run output. |
| 57 | Try it | Step 6: Docker's tutorial stops and removes the containers, then removes the network | S5 | PASS | "$ docker container stop alpine1 alpine2 alpine3 alpine4 / $ docker container rm alpine1 alpine2 alpine3 alpine4 / $ docker network rm alpine-net" |
| 58 | Try it | Step 6: `docker volume rm` removes the volume | S2 | PASS | "Stop the container and remove the volume." with "$ docker volume rm myvol2" |
| 59 | Try it | Step 6: `rm -rf reports typo-dir result-copy.txt`; last line worked without `sudo` | none | N/A | The reader's own cleanup step and the tutorial's own run. |
| 60 | How a tester uses it | New volumes can be pre-populated by a container or build | S2 | PASS | "New volumes can have their content pre-populated by a container or build." |
| 61 | How a tester uses it | Mounting an empty volume over files copies them; a good way to pre-populate data another container needs | S2 | PASS | "these files or directories are propagated (copied) into the volume by default... This is a good way to pre-populate data that another container needs." |
| 62 | How a tester uses it | Volumes can be more safely shared among multiple containers | S2 | PASS | "Volumes can be more safely shared among multiple containers." |
| 63 | How a tester uses it | tmpfs avoids permanent storage and raises performance by avoiding the writable layer | S2 | PASS | "consider using a tmpfs mount to avoid storing the data anywhere permanently, and to increase the container's performance by avoiding writing into the container's writable layer." |
| 64 | How a tester uses it | tmpfs can't be shared between containers and is Linux-only | S4 | PASS | "Unlike volumes and bind mounts, you can't share tmpfs mounts between containers. This functionality is only available if you're running Docker on Linux." |
| 65 | How a tester uses it | `docker cp` copies files or folders between a container and the local filesystem | S7 | PASS | "Copy files/folders between a container and the local filesystem" |
| 66 | How a tester uses it | The container can be running or stopped | S7 | PASS | "The CONTAINER can be a running or stopped container." |
| 67 | How a tester uses it | Files copied locally get the UID:GID of the user who ran `docker cp` (code block) | S7 | PASS | "Files copied to the local machine are created with the UID:GID of the user which invoked the docker cp" |
| 68 | How a tester uses it | Put the app and test container on one user-defined network so DNS resolves names | S5 | PASS | "User-defined bridges provide automatic DNS resolution between containers." and "On user-defined networks, containers can resolve each other by name." |
| 69 | How a tester uses it | Give containers names because discovery doesn't resolve default generated names | S5 | PASS | "Automatic service discovery only resolves custom container names, not default automatically generated names." |
| 70 | How a tester uses it | By default `docker logs` shows the command's STDOUT and STDERR | S9 | PASS | "By default, docker logs shows the command's STDOUT and STDERR." |
| 71 | How a tester uses it | A web server or database may send output to log files instead | S9 | PASS | "that application may send its output to log files instead of STDOUT and STDERR." |
| 72 | How a tester uses it | Official nginx image links its log files to `/dev/stdout` and `/dev/stderr` | S9 | PASS | "The official nginx image creates a symbolic link from /var/log/nginx/access.log to /dev/stdout, and creates another symbolic link from /var/log/nginx/error.log to /dev/stderr" |
| 73 | How a tester uses it | By default a container has no resource constraints and can use as much as the host's kernel scheduler allows | S10 | PASS | "By default, a container has no resource constraints and can use as much of a given resource as the host's kernel scheduler allows." |
| 74 | How a tester uses it | `-m` (`--memory`) sets max memory; `--cpus` how much CPU | S10 | PASS | "-m or --memory= The maximum amount of memory the container can use." and "--cpus=<value> Specify how much of the available CPU resources a container can use." |
| 75 | How a tester uses it | On Linux hosts, with too little memory the kernel throws an OOME and starts killing processes | S10 | PASS | "On Linux hosts, if the kernel detects that there isn't enough memory to perform important system functions, it throws an OOME, or Out Of Memory Exception, and starts killing processes" |
| 76 | How a tester uses it | Docker advises tests to learn the memory needs before production | S10 | PASS | "Perform tests to understand the memory requirements of your application before placing it into production." |
| 77 | Common mistakes | With `--volume` Docker creates a missing host directory; use `--mount` for an error | S3 | PASS | "Docker automatically creates the directory on the host for you." and "--mount does not automatically create a directory... Instead, it produces an error" |
| 78 | Common mistakes | In step 3 the container saw an empty folder | none | N/A | The tutorial's own run, stated as such. |
| 79 | Common mistakes | Mounting over image files obscures them; no straightforward way to remove a mount and reveal them | S2 | PASS | "the pre-existing files are obscured by the mount." and "there's no straightforward way of removing a mount to reveal the obscured files again." |
| 80 | Common mistakes | Bind mounts are writable by default; add `readonly` (`ro`) when the container only needs to read | S3 | PASS | "Bind mounts have write access to files on the host by default." and "You can use the readonly or ro option to prevent the container from writing to the mount." |
| 81 | Common mistakes | Default bridge: no name resolution | S5 | PASS | "On the default bridge network, containers can't resolve each other by name." |
| 82 | Common mistakes | tmpfs is removed when the container stops; files won't persist | S4 | PASS | "When the container stops, the tmpfs mount is removed, and files written there won't be persisted." |
| 83 | Common mistakes | A volume unused by any running container isn't removed automatically; `docker volume prune` removes unused volumes | S2 | PASS | "isn't removed automatically. You can remove unused volumes using docker volume prune." |
| 84 | Common mistakes | `docker system prune` removes unused containers, networks, images (dangling and unused), build cache, optionally volumes | S12 | PASS | "Remove all unused containers, networks, images (both dangling and unused), unused build cache, and optionally, volumes." |
| 85 | Common mistakes | Without options, the warning lists stopped containers, networks not used by a container, dangling images, unused build cache | S12 | PASS | "WARNING! This will remove: - all stopped containers - all networks not used by at least one container - all dangling images - unused build cache" |
| 86 | Common mistakes | `--all` removes all unused images, not just dangling; `--volumes` prunes anonymous volumes | S12 | PASS | "-a, --all Remove all unused images not just dangling ones" and "--volumes Prune anonymous volumes" |
| 87 | What a tester can check | Callout "Tutorial advice": eight pieces of advice | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". Every tool fact in it is supported elsewhere on the page: `--mount` errors on a wrong path (row 44), `readonly` (row 31), `docker cp` (rows 65-66), `docker system prune` (row 84), `-m` (row 53). |
| 88 | Key words | Writable container layer | none | PASS | "By default, all files created inside a container are stored on a writable container layer... doesn't persist when the container is destroyed" |
| 89 | Key words | Volume | none | PASS | "A persistent data store for containers, created and managed by Docker" (What it is table). |
| 90 | Key words | Anonymous volume | none | PASS | "anonymous volumes are given a random name" and "anonymous volumes persist even if you remove the container that uses them, except if you use the `--rm` flag" |
| 91 | Key words | Bind mount, writable by default | none | PASS | "Bind mounts have write access to files on the host by default" and "A file or directory on the host machine, mounted from the host into a container" |
| 92 | Key words | tmpfs mount | none | PASS | "Temporary, and only persisted in the host memory; when the container stops, the tmpfs mount is removed" |
| 93 | Key words | `--mount` | none | PASS | "`--mount` is preferred: it is more explicit" and "Use `--mount`, which produces an error when the source path doesn't exist" |
| 94 | Key words | `--volume` (`-v`) | none | PASS | "With `--volume`, Docker creates a missing host directory for you"; the table column "Short form" shows `--volume`. |
| 95 | Key words | `readonly` (`ro`) | none | PASS | "You can use the `readonly` or `ro` option to prevent the container from writing to the mount" |
| 96 | Key words | Default bridge network | none | PASS | "All containers without a `--network` specified are attached to the default bridge network" and "can't resolve each other by name" |
| 97 | Key words | User-defined bridge network, made with `docker network create` | none | PASS | "containers can resolve each other by name" and the Try it step 4 block "docker network create --driver bridge alpine-net" |
| 98 | Key words | `docker cp` | none | PASS | "`docker cp` copies files or folders between a container and the local filesystem. The container can be a running or stopped container." |
| 99 | Key words | `docker stats` | none | PASS | "`docker stats` displays a live stream of container resource usage statistics" |
| 100 | Key words | `-m` (`--memory`) | none | PASS | "`-m` (`--memory`) sets the maximum amount of memory the container can use" |
| 101 | Key words | `docker system prune` | none | PASS | "its warning lists all stopped containers, ... all dangling images, and unused build cache"; "`--all` removes all unused images... `--volumes` prunes anonymous volumes" |

Open FAILs after round 7: 0

Changed after this round: No FAIL in this round. The voices report of this round had 2 FAILs, so the page changed and round 8 checks it again. The diagram of `## How it works` was also drawn narrower, with the two networks one under the other, so that it fits a phone.

## Round 8 (2026-11-16)

# Fact check: devops / docker-in-practice (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Volumes, bind mounts, tmpfs, networks, inspect and clean-up commands | none | N/A | Describes the page. |
| 2 | Lede | Everyday work with containers in testing; builds on two other pages | none | N/A | Describes the page; the links are site paths. |
| 3 | What it is | By default, all files created inside a container are stored on a writable container layer | S1 | PASS | "By default all files created inside a container are stored on a writable container layer" |
| 4 | What it is | Data in the container layer doesn't persist when the container is destroyed | S1 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 5 | What it is | Storage mounts hold data outside the writable layer, among them volume, bind and tmpfs mounts | S1 | PASS | "Docker supports the following types of storage mounts for storing data outside of the writable layer of the container: Volume mounts / Bind mounts / tmpfs mounts ..." |
| 6 | What it is | The data looks the same from within the container, whichever mount type is used | S1 | PASS | "No matter which type of mount you choose to use, the data looks the same from within the container." |
| 7 | What it is | Table, Volume, what it is | S2 | PASS | "Volumes are persistent data stores for containers, created and managed by Docker." |
| 8 | What it is | Table, Volume, use it for | S2 | PASS | "Volumes are the preferred mechanism for persisting data generated by and used by Docker containers." |
| 9 | What it is | Table, Bind mount, what it is | S3 | PASS | "a file or directory on the host machine is mounted from the host into a container." |
| 10 | What it is | Table, Bind mount, use it for | S3 | PASS | "Sharing source code or build artifacts between a development environment on the Docker host and a container." |
| 11 | What it is | Table, tmpfs, what it is | S4 | PASS | "a tmpfs mount is temporary, and only persisted in the host memory. When the container stops, the tmpfs mount is removed" |
| 12 | What it is | Table, tmpfs, use it for | S2 | PASS | "If your container generates non-persistent state data, consider using a tmpfs mount to avoid storing the data anywhere permanently" |
| 13 | What it is | Containers without `--network` are attached to the default bridge network | S5 | PASS | "All containers without a --network specified, are attached to the default bridge network." |
| 14 | What it is | On the default bridge, containers reach each other only by IP, unless `--link` (legacy) | S5 | PASS | "Containers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy." |
| 15 | What it is | User-defined bridges provide automatic DNS resolution between containers | S5 | PASS | "User-defined bridges provide automatic DNS resolution between containers." |
| 16 | How it works | A volume's contents exist outside the lifecycle of a container | S2 | PASS | "A volume's contents exist outside the lifecycle of a given container." |
| 17 | How it works | The writable layer is destroyed with the container, but a volume's data persists | S2 | PASS | "When a container is destroyed, the writable layer is destroyed with it. Using a volume ensures that the data is persisted even if the container using it is removed." |
| 18 | How it works | A volume can be mounted into multiple containers simultaneously | S2 | PASS | "A given volume can be mounted into multiple containers simultaneously." |
| 19 | How it works | An unused volume is still available and isn't removed automatically | S2 | PASS | "When no running container is using a volume, the volume is still available to Docker and isn't removed automatically." |
| 20 | How it works | `docker run` can mount a volume with `--mount` or `--volume` | S2 | PASS | "To mount a volume with the docker run command, you can use either the --mount or --volume flag." |
| 21 | How it works | In general `--mount` is preferred: more explicit, supports all options | S2 | PASS | "In general, --mount is preferred. The main difference is that the --mount flag is more explicit and supports all the available options." |
| 22 | How it works | Table, Volume forms | S2 | PASS | "$ docker run --mount type=volume,src=<volume-name>,dst=<mount-path>" / "$ docker run --volume <volume-name>:<mount-path>" |
| 23 | How it works | Table, Bind mount forms | S3 | PASS | "$ docker run --mount type=bind,src=<host-path>,dst=<container-path>" / "$ docker run --volume <host-path>:<container-path>" |
| 24 | How it works | Table, tmpfs forms | S4 | PASS | "$ docker run --mount type=tmpfs,dst=<mount-path>" / "$ docker run --tmpfs <mount-path>" |
| 25 | How it works | Mounting a non-empty volume over existing files obscures them | S2 | PASS | "If you mount a non-empty volume into a directory in the container in which files or directories exist, the pre-existing files are obscured by the mount." |
| 26 | How it works | Mounting an empty volume copies the files into the volume by default | S2 | PASS | "these files or directories are propagated (copied) into the volume by default." |
| 27 | How it works | A volume may be named or anonymous; anonymous volumes get a random name | S2 | PASS | "A volume may be named or anonymous. Anonymous volumes are given a random name" |
| 28 | How it works | Anonymous volumes persist after container removal, except with `--rm` | S2 | PASS | "anonymous volumes persist even if you remove the container that uses them, except if you use the --rm flag when creating the container" |
| 29 | How it works | Bind mounts have write access to host files by default | S3 | PASS | "Bind mounts have write access to files on the host by default." |
| 30 | How it works | A container process can change the host filesystem, including important system files | S3 | PASS | "you can change the host filesystem via processes running in a container, including creating, modifying, or deleting important system files or directories." |
| 31 | How it works | `readonly` or `ro` prevents the container from writing to the mount | S3 | PASS | "You can use the readonly or ro option to prevent the container from writing to the mount." |
| 32 | How it works | On the default bridge, containers can't resolve each other by name | S5 | PASS | "On the default bridge network, containers can't resolve each other by name." |
| 33 | How it works | On user-defined networks, containers can resolve each other by name | S5 | PASS | "On user-defined networks, containers can resolve each other by name." |
| 34 | How it works | Automatic service discovery only resolves custom container names | S5 | PASS | "Automatic service discovery only resolves custom container names, not default automatically generated names." |
| 35 | How it works | Diagram, "the tutorial's own picture of step 4" | none | N/A | The page's own picture, which it says it drew itself. |
| 36 | Try it | Run record: date, Docker Engine 29.9.3, sample data | none | N/A | Record of the page's own run. |
| 37 | Try it | Step 1: Docker creates a volume that doesn't yet exist; the first command is Docker's own example | S2 | PASS | "If you start a container with a volume that doesn't yet exist, Docker creates the volume for you." The example "--name devtest \ --mount source=myvol2,target=/app \" is in S2. |
| 38 | Try it | Step 1: `docker exec` runs a new command in a running container | S6 | PASS | "The docker exec command runs a new command in a running container." |
| 39 | Try it | Step 1: the command must be an executable, a chained or quoted command doesn't work, so `sh -c` | S6 | PASS | "The command must be an executable. A chained or a quoted command doesn't work. This works: docker exec -it my_container sh -c "echo a && echo b"" |
| 40 | Try it | Step 1: `docker cp` works with a running or stopped container | S7 | PASS | "The CONTAINER can be a running or stopped container." |
| 41 | Try it | Step 1: the six-line code block | S2, S6, S7 | PASS | The `docker run`/`--mount source=myvol2,target=/app` form is in S2. The `sh -c` form is in S6. The `docker cp` form (`CONTAINER:SRC_PATH DEST_PATH`) follows S7's synopsis. The other commands are the page's own steps. |
| 42 | Try it | Step 1 run record (`docker cp`, owner, output) | none | N/A | Record of the page's own run. |
| 43 | Try it | Step 2: a bind mount puts a host folder in the container, and it can write by default | S3 | PASS | "a file or directory on the host machine is mounted from the host into a container." and "Bind mounts have write access to files on the host by default." |
| 44 | Try it | Step 2: code block with `--mount type=bind,src=...,dst=...` | S3 | PASS | "$ docker run --mount type=bind,src=<host-path>,dst=<container-path>" |
| 45 | Try it | Step 2 run record | none | N/A | Record of the page's own run. |
| 46 | Try it | Step 3: by default `--mount` doesn't create a missing directory; it errors | S3 | PASS | "By default, --mount does not automatically create a directory if the specified mount path does not exist on the host. Instead, it produces an error" |
| 47 | Try it | Step 3: with `--volume`/`-v` Docker creates the missing host directory, always as a directory | S3 | PASS | "If you use --volume to bind-mount a file or directory that does not yet exist on the Docker host, Docker automatically creates the directory on the host for you. It's always created as a directory." |
| 48 | Try it | Step 3 run record (error text, exit codes, owner) | none | N/A | Record of the page's own run. |
| 49 | Try it | Step 4: follows Docker's tutorial with three containers instead of four; `-dit` means detached, interactive, TTY | S5 | PASS | "The -dit flags mean detached, interactive, and with a TTY." and "Create four containers." |
| 50 | Try it | Step 4: Docker's tutorial attaches to `alpine1` to run the ping | S5 | PASS | "$ docker container attach alpine1 / # ping -c 2 alpine2" |
| 51 | Try it | Step 4: code block (`network create --driver bridge alpine-net`, three `docker run -dit` lines) | S5 | PASS | "$ docker network create --driver bridge alpine-net"; "$ docker run -dit --name alpine1 --network alpine-net alpine ash"; "... alpine3 alpine ash" |
| 52 | Try it | Step 4: from `alpine1` you can't connect to `alpine3`, different network | S5 | PASS | "From alpine1, you can't connect to alpine3 because it's on a different network" |
| 53 | Try it | Step 4 run record (two output lines, exit code 1) | none | N/A | Record of the page's own run. |
| 54 | Try it | Step 5: by default a container has no resource constraints | S10 | PASS | "By default, a container has no resource constraints" |
| 55 | Try it | Step 5: `-m` sets the maximum memory | S10 | PASS | "-m or --memory= The maximum amount of memory the container can use." |
| 56 | Try it | Step 5: `docker stats` shows a live stream; `--no-stream` only pulls the first result | S8 | PASS | "Display a live stream of container(s) resource usage statistics" and "Disable streaming stats and only pull the first result" |
| 57 | Try it | Step 5: `docker system df` shows Docker disk usage | S11 | PASS | "Show docker disk usage" |
| 58 | Try it | Step 5: code block and run record (stats table, limits, df rows) | none | N/A | Commands are the page's own; the output is the record of its run. |
| 59 | Try it | Step 6: Docker's tutorial stops and removes the containers, then the network | S5 | PASS | "$ docker container stop alpine1 alpine2 alpine3 alpine4 / $ docker container rm alpine1 alpine2 alpine3 alpine4 / $ docker network rm alpine-net" |
| 60 | Try it | Step 6: `docker volume rm` removes the volume | S2 | PASS | "Stop the container and remove the volume. ... $ docker volume rm myvol2" |
| 61 | Try it | Step 6 code block and "last line worked without `sudo`" | none | N/A | The `rm -rf` line and the sudo remark are the page's own work and run record. |
| 62 | How a tester uses it | New volumes can be pre-populated by a container or build | S2 | PASS | "New volumes can have their content pre-populated by a container or build." |
| 63 | How a tester uses it | Mounting an empty volume copies files in, a good way to pre-populate | S2 | PASS | "these files or directories are propagated (copied) into the volume by default. ... This is a good way to pre-populate data that another container needs." |
| 64 | How a tester uses it | Volumes can be more safely shared among containers | S2 | PASS | "Volumes can be more safely shared among multiple containers." |
| 65 | How a tester uses it | tmpfs avoids permanent storage and avoids writing to the writable layer, so it is faster | S2 | PASS | "consider using a tmpfs mount to avoid storing the data anywhere permanently, and to increase the container's performance by avoiding writing into the container's writable layer." |
| 66 | How a tester uses it | tmpfs can't be shared between containers and is only available on Linux | S4 | PASS | "Unlike volumes and bind mounts, you can't share tmpfs mounts between containers. This functionality is only available if you're running Docker on Linux." |
| 67 | How a tester uses it | `docker cp` copies files or folders between a container and the local filesystem | S7 | PASS | "Copy files/folders between a container and the local filesystem" |
| 68 | How a tester uses it | The container can be running or stopped | S7 | PASS | "The CONTAINER can be a running or stopped container." |
| 69 | How a tester uses it | Copied files get the UID:GID of the user who ran `docker cp` | S7 | PASS | "Files copied to the local machine are created with the UID:GID of the user which invoked the docker cp" |
| 70 | How a tester uses it | Code block `docker cp <container>:/path/in/container/report.txt ./report.txt` | S7 | PASS | Same CONTAINER:SRC_PATH to DEST_PATH form as claim 41. |
| 71 | How a tester uses it | Put app and test container on one user-defined network so DNS resolves names | S5 | PASS | "User-defined bridges provide automatic DNS resolution between containers." |
| 72 | How a tester uses it | Name the containers: automatic discovery doesn't resolve default generated names | S5 | PASS | "Automatic service discovery only resolves custom container names, not default automatically generated names." |
| 73 | How a tester uses it | By default `docker logs` shows STDOUT and STDERR | S9 | PASS | "By default, docker logs shows the command's STDOUT and STDERR." |
| 74 | How a tester uses it | A web server or database may send output to log files instead | S9 | PASS | "If your image runs a non-interactive process such as a web server or a database, that application may send its output to log files instead of STDOUT and STDERR." |
| 75 | How a tester uses it | The official nginx image links its log files to `/dev/stdout` and `/dev/stderr` | S9 | PASS | "The official nginx image creates a symbolic link from /var/log/nginx/access.log to /dev/stdout, and creates another symbolic link from /var/log/nginx/error.log to /dev/stderr" |
| 76 | How a tester uses it | By default a container has no resource constraints and can use as much as the kernel scheduler allows | S10 | PASS | "By default, a container has no resource constraints and can use as much of a given resource as the host's kernel scheduler allows." |
| 77 | How a tester uses it | `-m` (`--memory`) sets maximum memory; `--cpus` sets how much CPU it can use | S10 | PASS | "-m or --memory= The maximum amount of memory the container can use." and "--cpus=<value> Specify how much of the available CPU resources a container can use." |
| 78 | How a tester uses it | On Linux hosts, with too little memory the kernel throws an OOME and kills processes | S10 | PASS | "On Linux hosts, if the kernel detects that there isn't enough memory to perform important system functions, it throws an OOME, or Out Of Memory Exception, and starts killing processes" |
| 79 | How a tester uses it | Docker's advice: test memory needs before production | S10 | PASS | "Perform tests to understand the memory requirements of your application before placing it into production." |
| 80 | Common mistakes | With `--volume`, Docker creates a missing host directory | S3 | PASS | "Docker automatically creates the directory on the host for you." |
| 81 | Common mistakes | Typo bullet: step 3 container saw an empty folder | none | N/A | Record of the page's own run. |
| 82 | Common mistakes | Use `--mount`, which errors when the source path doesn't exist | S3 | PASS | "By default, --mount does not automatically create a directory ... Instead, it produces an error" |
| 83 | Common mistakes | Pre-existing files are obscured by the mount | S2 | PASS | "the pre-existing files are obscured by the mount." |
| 84 | Common mistakes | No straightforward way to remove a mount and reveal the files | S2 | PASS | "With containers, there's no straightforward way of removing a mount to reveal the obscured files again." |
| 85 | Common mistakes | Bind mounts have write access to host files by default | S3 | PASS | "Bind mounts have write access to files on the host by default." |
| 86 | Common mistakes | Add `readonly` (`ro`) when the container only needs to read | S3 | PASS | "You can use the readonly or ro option to prevent the container from writing to the mount." The "when it only needs to read" part is plain advice built on this. |
| 87 | Common mistakes | Default bridge: containers can't resolve each other by name | S5 | PASS | "On the default bridge network, containers can't resolve each other by name." |
| 88 | Common mistakes | tmpfs mount is removed when the container stops; files won't be persisted | S4 | PASS | "When the container stops, the tmpfs mount is removed, and files written there won't be persisted." |
| 89 | Common mistakes | A volume no running container uses isn't removed automatically | S2 | PASS | "the volume is still available to Docker and isn't removed automatically." |
| 90 | Common mistakes | `docker volume prune` removes unused volumes | S2 | PASS | "You can remove unused volumes using docker volume prune." |
| 91 | Common mistakes | `docker system prune` removes unused containers, networks, images, build cache, optionally volumes | S12 | PASS | "Remove all unused containers, networks, images (both dangling and unused), unused build cache, and optionally, volumes." |
| 92 | Common mistakes | Without options, the warning lists stopped containers, unused networks, dangling images, unused build cache | S12 | PASS | "WARNING! This will remove: - all stopped containers - all networks not used by at least one container - all dangling images - unused build cache" |
| 93 | Common mistakes | `--all` removes all unused images; `--volumes` prunes anonymous volumes | S12 | PASS | "-a, --all Remove all unused images not just dangling ones" and "--volumes Prune anonymous volumes" |
| 94 | What a tester can check | Callout "Tutorial advice" (8 bullets) | none | PASS | The callout says it is the tutorial's own advice. It gives no new fact about a tool. The `--mount`, read-only, `docker cp`, prune, memory-limit and named-network points are all supported earlier on the page, and "belonged to `root`" is the page's run record. |
| 95 | Key words | Writable container layer | none | PASS | "all files created inside a container are stored on a writable container layer" and "doesn't persist when the container is destroyed" |
| 96 | Key words | Volume | none | PASS | Table row: "A persistent data store for containers, created and managed by Docker" |
| 97 | Key words | Anonymous volume | none | PASS | "anonymous volumes are given a random name" and "persist ... except if you use the `--rm` flag" |
| 98 | Key words | Bind mount, writable by default | none | PASS | "A file or directory on the host machine, mounted from the host into a container" and "Bind mounts have write access to files on the host by default" |
| 99 | Key words | tmpfs mount | none | PASS | "Temporary, and only persisted in the host memory; when the container stops, the tmpfs mount is removed" |
| 100 | Key words | `--mount` | none | PASS | "`--mount` is preferred: it is more explicit" and "`--mount`, which produces an error when the source path doesn't exist" |
| 101 | Key words | `--volume` (`-v`) | none | PASS | "With `--volume` (`-v`), Docker creates the missing directory on the host for you" and the "Short form" column |
| 102 | Key words | `readonly` (`ro`) | none | PASS | "You can use the `readonly` or `ro` option to prevent the container from writing to the mount" |
| 103 | Key words | Default bridge network | none | PASS | "All containers without a `--network` specified are attached to the default bridge network" and "can't resolve each other by name" |
| 104 | Key words | User-defined bridge network, made with `docker network create` | none | PASS | "On user-defined networks, containers can resolve each other by name", and step 4 uses `docker network create --driver bridge alpine-net` for the "user-defined" network. |
| 105 | Key words | `docker cp` | none | PASS | "`docker cp` copies files or folders between a container and the local filesystem. The container can be a running or stopped container." |
| 106 | Key words | `docker stats` | none | PASS | "`docker stats` displays a live stream of container resource usage statistics" |
| 107 | Key words | `-m` (`--memory`) | none | PASS | "`-m` (`--memory`) sets the maximum amount of memory the container can use" |
| 108 | Key words | `docker system prune` | none | PASS | "removes all unused containers, networks, images ..., unused build cache, and optionally, volumes" and "`--all` removes all unused images ... `--volumes` prunes anonymous volumes" |

Open FAILs after round 8: 0

Open FAILs: 0
