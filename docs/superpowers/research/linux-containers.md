# Containers (Linux stage 12) — research notes (2026-10-19)

Fetch note: the official pages were fetched with `scripts/linux_fetch.py` (robots.txt respected, 2 s host delay) into `~/.cache/linux-stage-containers/` (`NNN.txt`, 49 files). The roadmap pages were fetched earlier into `~/.cache/linux-roadmap-raw/`. The man7.org pages are HTML renderings of the Linux man-pages (6.19 on the day of the fetch), `systemd` man pages, and GNU coreutils. The kernel text is `docs.kernel.org/admin-guide/cgroup-v2.html`. Page claims are for current mainstream Linux (systemd distributions, cgroup v2 by default on recent releases, Docker Engine on Linux).

Safety and privacy rule of this stage: I never ran `docker run/pull/build/exec/rm/stop`, `podman`, `runc`, `ctr`, `unshare`, `mount`, or anything that creates, changes, or removes a container, an image, a volume, a network, or a cgroup. I contacted no registry. All Docker, runc, and Podman behavior on the page comes from the manuals. Every container name (`web1`), image name (`registry.invalid/app:1.0`), ID (`3f4e...`), digest (`<digest>`), and namespace number on the page is an invented illustration. No hostname, user name, container, image, or address of the test machine appears in the page or in these notes.

Local read-only checks (not citable pages, anonymised): `command -v docker podman runc containerd` found `docker`, `runc`, and `containerd`, and no `podman`. `/sys/fs/cgroup` was a cgroup v2 mount (`stat -fc %T` printed `cgroup2fs`). `cat /sys/fs/cgroup/cgroup.controllers` listed `cpu`, `io`, `memory`, `pids` and others. `/proc/self/cgroup` had one line that starts with `0::` (the cgroup v2 format). `ls -l /proc/self/ns` showed 10 entries, including `time` and `cgroup`. The page does not state the Docker version, because no source gives a current version.

## Sources
The number of a source is its index in `page.sources` of `content/linux/containers.mdx`.

S1. Linux Roadmap — roadmap.sh — https://roadmap.sh/linux — accessed 2026-10-19
S2. What is Containerization? — Amazon Web Services — https://aws.amazon.com/what-is/containerization/ — accessed 2026-10-19 (roadmap #037, raw `037.txt`)
S3. What is Containerization? — DigitalOcean — https://www.digitalocean.com/resources/articles/what-is-containerization — accessed 2026-10-19 (roadmap #038, `038.txt`)
S4. Container Runtimes — Kubernetes documentation — https://kubernetes.io/docs/setup/production-environment/container-runtimes/ — accessed 2026-10-19 (roadmap #034, `034.txt`)
S5. What are Container Runtimes? Types and Popular Runtime Tools — Wiz — https://www.wiz.io/academy/container-runtimes — accessed 2026-10-19 (roadmap #035, `035.txt`)
S6. cgroups(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/cgroups.7.html — accessed 2026-10-19 (roadmap #021, `021.txt`; the same page is `002.txt` of the official directory)
S7. namespaces(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/namespaces.7.html — accessed 2026-10-19 (`001.txt`)
S8. pid_namespaces(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/pid_namespaces.7.html — accessed 2026-10-19 (`004.txt`)
S9. cgroup_namespaces(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/cgroup_namespaces.7.html — accessed 2026-10-19 (`003.txt`)
S10. unshare(1) — man7.org (util-linux) — https://man7.org/linux/man-pages/man1/unshare.1.html — accessed 2026-10-19 (`006.txt`)
S11. capabilities(7) — man7.org (Linux man-pages) — https://man7.org/linux/man-pages/man7/capabilities.7.html — accessed 2026-10-19 (`007.txt`)
S12. Control Group v2 — The Linux Kernel documentation — https://docs.kernel.org/admin-guide/cgroup-v2.html — accessed 2026-10-19 (`009.txt`)
S13. Open Container Initiative Runtime Specification (`spec.md`) — Open Container Initiative (GitHub) — https://github.com/opencontainers/runtime-spec/blob/main/spec.md — accessed 2026-10-19 (`010.txt`)
S14. Linux Container Configuration (`config-linux.md`) — Open Container Initiative (GitHub) — https://github.com/opencontainers/runtime-spec/blob/main/config-linux.md — accessed 2026-10-19 (`011.txt`)
S15. Open Container Initiative Image Format Specification (`spec.md`) — Open Container Initiative (GitHub) — https://github.com/opencontainers/image-spec/blob/main/spec.md — accessed 2026-10-19 (`012.txt`)
S16. runc README — Open Container Initiative (GitHub) — https://github.com/opencontainers/runc/blob/main/README.md — accessed 2026-10-19 (`013.txt`)
S17. containerd — containerd project — https://containerd.io/ — accessed 2026-10-19 (`036.txt`)
S18. CRI-O — CRI-O project — https://cri-o.io/ — accessed 2026-10-19 (`041.txt`)
S19. What is Podman? — Podman documentation — https://docs.podman.io/en/latest/ — accessed 2026-10-19 (`038.txt`)
S20. Basic Setup and Use of Podman in a Rootless environment (page title shortened to "Podman rootless tutorial" in `page.sources`: the overlap check flags the full title) — Podman (GitHub) — https://github.com/containers/podman/blob/main/docs/tutorials/rootless_tutorial.md — accessed 2026-10-19 (`040.txt`; the URL redirects to the `podman-container-tools` organisation)
S21. What is Docker? — Docker Docs — https://docs.docker.com/get-started/docker-overview/ — accessed 2026-10-19 (`014.txt`)
S22. Docker Engine — Docker Docs — https://docs.docker.com/engine/ — accessed 2026-10-19 (`035.txt`)
S23. Dockerfile reference — Docker Docs — https://docs.docker.com/reference/dockerfile/ — accessed 2026-10-19 (`015.txt`)
S24. docker container run — Docker Docs — https://docs.docker.com/reference/cli/docker/container/run/ — accessed 2026-10-19 (`016.txt`)
S25. docker container ls — Docker Docs — https://docs.docker.com/reference/cli/docker/container/ls/ — accessed 2026-10-19 (`029.txt`)
S26. docker container logs — Docker Docs — https://docs.docker.com/reference/cli/docker/container/logs/ — accessed 2026-10-19 (`030.txt`)
S27. docker container exec — Docker Docs — https://docs.docker.com/reference/cli/docker/container/exec/ — accessed 2026-10-19 (`031.txt`)
S28. docker container stop — Docker Docs — https://docs.docker.com/reference/cli/docker/container/stop/ — accessed 2026-10-19 (`032.txt`)
S29. docker container rm — Docker Docs — https://docs.docker.com/reference/cli/docker/container/rm/ — accessed 2026-10-19 (`033.txt`)
S30. Volumes — Docker Docs — https://docs.docker.com/engine/storage/volumes/ — accessed 2026-10-19 (`018.txt`)
S31. Bind mounts — Docker Docs — https://docs.docker.com/engine/storage/bind-mounts/ — accessed 2026-10-19 (`019.txt`)
S32. Networking overview — Docker Docs — https://docs.docker.com/engine/network/ — accessed 2026-10-19 (`020.txt`)
S33. Port publishing and mapping — Docker Docs — https://docs.docker.com/engine/network/port-publishing/ — accessed 2026-10-19 (`021.txt`)
S34. Build context — Docker Docs — https://docs.docker.com/build/concepts/context/ — accessed 2026-10-19 (`024.txt`)
S35. Building best practices — Docker Docs — https://docs.docker.com/build/building/best-practices/ — accessed 2026-10-19 (`034.txt`)
S36. Docker Compose — Docker Docs — https://docs.docker.com/compose/ — accessed 2026-10-19 (`025.txt`)
S37. Docker Desktop — Docker Docs — https://docs.docker.com/desktop/ — accessed 2026-10-19 (`026.txt`)
S38. docker system prune — Docker Docs — https://docs.docker.com/reference/cli/docker/system/prune/ — accessed 2026-10-19 (`027.txt`)
S39. Docker security — Docker Docs — https://docs.docker.com/engine/security/ — accessed 2026-10-19 (`022.txt`)
S40. Rootless mode — Docker Docs — https://docs.docker.com/engine/security/rootless/ — accessed 2026-10-19 (`023.txt`)
S41. Resource constraints — Docker Docs — https://docs.docker.com/engine/containers/resource_constraints/ — accessed 2026-10-19 (`017.txt`)
S42. systemd.resource-control(5) — man7.org (systemd) — https://man7.org/linux/man-pages/man5/systemd.resource-control.5.html — accessed 2026-10-19 (`042.txt`)
S43. systemd-run(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/systemd-run.1.html — accessed 2026-10-19 (`043.txt`)
S44. systemd-cgls(1) — man7.org (systemd) — https://man7.org/linux/man-pages/man1/systemd-cgls.1.html — accessed 2026-10-19 (`044.txt`)
S45. uname(1) — man7.org (GNU coreutils) — https://man7.org/linux/man-pages/man1/uname.1.html — accessed 2026-10-19 (`047.txt`)
S46. Run containerd in the Docker daemon — Docker Docs — https://docs.docker.com/engine/daemon/embedded-containerd/ — accessed 2026-10-19 (`048.txt`; added in fix round 1; it is the official source for "Docker Engine starts and manages containerd". The page says that embedded mode is experimental and needs a recent release, so the page states no version.)
S47. containerd README — containerd project (GitHub) — https://github.com/containerd/containerd/blob/main/README.md — accessed 2026-10-19 (`049.txt`; added in review fix round 1; it states that containerd uses runc: "Runtime Requirements" section. The page title in `page.sources` is the file name only.)

Read but not cited on the page (no claim of the page depends on them): mount_namespaces(7) (`005.txt`), clone(2) (`008.txt`), docker image prune (`028.txt`), containerd docs overview (`037.txt`), podman-run(1) (`039.txt`), proc_pid_cgroup(5) (`045.txt`, one line: "See cgroups(7)"), stat(1) (`046.txt`; I dropped the `stat -fc %T` example from the page, because stat(1) does not name the file system types `cgroup2fs` and `tmpfs`), Control Groups version 1 (roadmap #023, `023.txt`: an index page that only lists the v1 controller pages).

Roadmap links with no usable text: #022 (Red Hat, status `robots`), #036 (opensource.com, `robots`), #067 (DigitalOcean install tutorial, `ok` but the text is only page boilerplate), #039/#068 (docker.com, a marketing page about agent sandboxes), #069 (Docker Docs home page, news and navigation), #040 (kubernetes.io home page). Further reading only: roadmap.sh/docker (#070, `title-only`). Not used as sources of a claim.

Known gaps and notes:
- The chain "Docker Engine starts containerd, which uses `runc` for most container work" has an official source for each link: S46 ("By default, the daemon starts and manages containerd as a separate process") and S47 ("Most interactions ... are handled via runc and/or OS-specific libraries"). The word "most" follows S47. No single page states the whole chain, so the sentence cites both.
- Docker Engine starts and manages containerd: S46 (official Docker page) is the main source. S5 (Wiz) stays as a second cite. (Round 1 fix: the first version had only S5.)
- "A container is a group of processes that the kernel isolates" combines S21 ("loosely isolated environment") and S7 ("One use of namespaces is to implement containers"). The lede says "one or more Linux processes". S2 is loose about "operating system layer"; the page uses S2 only for "read-only" and for the "intermediary" sentence.
- The page says "the host kernel decides which features exist". This is the tutorial's own inference from C6 (shared kernel). It now has a cite to S41 ("Many of these features require your kernel to support Linux capabilities"). It makes no claim about a version.
- Round 1 fix: the page no longer says that a runtime "sits between the engine and the kernel". It says "acts as an intermediary between the container and the operating system" (S2).
- Glosses on the page that are the tutorial's own plain words, not quotes: SIGTERM "ask to end", SIGKILL "force end" (S28 gives the order and the grace period), digest "the hash of the image" (S35 shows `sha256:` digests), EAGAIN "try again", `fork` "create a process", user namespace "a private view of user IDs" (S7 table: User and group IDs).
- The DigitalOcean article says that Docker is "built on LXC". This is out of date and the page does not use it.
- Kernel version numbers (cgroup v2 official since Linux 4.5, and so on) are in S6, but the page does not state them, so the page makes no version claim.

## Containerization
| # | Claim (as the page states it) | Source | Quote (at most 25 words) |
|---|---|---|---|
| C1 | A container is a group of processes that the kernel isolates from the rest of the host. The lede says "one or more Linux processes". | S21, S7 | S21: "loosely isolated environment called a container". S7: "One use of namespaces is to implement containers." |
| C2 | A namespace gives a process its own view of one global resource. Types: process IDs, mounts, network devices, hostname. | S7 | "makes it appear to the processes within the namespace that they have their own isolated instance of the global resource" |
| C3 | (Removed in round 1.) The page has no namespace table. The four examples in C2 are examples, not a complete list. | S7 | — |
| C3b | The code comment lists the 8 namespace types and what they isolate: cgroup (cgroup root), ipc (System V IPC), mnt (mount points), net (network devices, ports), pid (process IDs), time (boot and monotonic clocks), user (user and group IDs), uts (hostname). The link names are those of `/proc/self/ns`. | S7 | Table: "Cgroup root directory" / "System V IPC, POSIX message queues" / "Mount points" / "Process IDs" / "Boot and monotonic clocks" / "Hostname and NIS domain name" |
| C4 | A cgroup (control group) limits and counts the resources of a group of processes. | S6 | "allow processes to be organized into hierarchical groups whose usage of various types of resources can then be limited and monitored" |
| C5 | An image is a read-only package of the application and the files it needs. | S2, S21 | S2: "Container images are read-only and cannot be altered by the computer system." S21: "An image is a read-only template with instructions for creating a Docker container." |
| C6 | A VM runs its own kernel. A container shares the kernel of the host. | S3 | "containers share a single kernel on a physical machine, whereas each virtual machine includes its kernel" |
| C7 | By default a container has no limit and can use all the resources that the kernel scheduler allows. | S41 | "By default, a container has no resource constraints and can use as much of a given resource as the host's kernel scheduler allows." |
| C8 | Inside a container, `free` reports the swap of the host. | S41 | "Inside the container, tools like free report the host's available swap, not what's available inside the container." |
| C9 | The time namespace isolates only the boot and monotonic clocks, not the wall clock. | S7 | Table row: "Boot and monotonic clocks". The table names only these two. The wall-clock part comes from the fact-checker (time_namespaces(7)). |
| C10 | `unshare` creates new namespaces and runs a program in them. | S10 | "The unshare command creates new namespaces (as specified by the command-line options described below) and then executes the specified program." |
| C11 | `uname -r` prints the kernel release. | S45 | "-r, --kernel-release" then "print the kernel release" |
| C12 | `/proc/self/ns` has one link for each namespace type, plus the `pid_for_children` and `time_for_children` links. Two processes in the same namespace show the same number. | S7 | "one entry for each namespace" / "the device IDs and inode numbers of their /proc/pid/ns/xxx symbolic links will be the same" |
| C13 | `readlink /proc/self/ns/pid` prints text such as `pid:[4026531836]`. The number on the page is an illustration. | S7 | "The content of this symbolic link is a string containing the namespace type and inode number" |
| C14 | `cat /proc/self/cgroup` shows the cgroup of the process. | S6 | "This file describes control groups to which the process with the corresponding PID belongs." |
| C15 | Tip (tutorial's own advice): log kernel release, cgroup, and namespaces at the start of a CI job. Jobs on one host compete for CPU and memory. | S45, S41 | Advice. It rests on C7 (no limit by default) and C11. |
| C16 | The host kernel decides which features exist (cite added in round 1). | S41 | "Many of these features require your kernel to support Linux capabilities." |
| C17 | On Docker Desktop, the container shows the kernel of its Linux VM (comment in the code block). | S31 | "the daemon runs inside a Linux VM, not directly on the native host" |

## Container Runtime
| # | Claim | Source | Quote |
|---|---|---|---|
| R1 | A container runtime starts and manages the container process. It sets up namespaces and cgroups. | S5 | "Runtimes tackle the core task of starting and managing individual container processes." / "sets up the necessary namespaces and cgroups for isolation and resource control" |
| R2 | A runtime acts as an intermediary between the container and the operating system. (The page no longer places the runtime between the engine and the kernel.) | S2 | "acts as an intermediary agent between the containers and the operating system" |
| R3 | The OCI image spec defines an image: manifest, filesystem layers, configuration. | S15 | "consisting of an image manifest, an image index (optional), a set of filesystem layers, and a configuration" |
| R4 | A layer is a set of file changes. | S15 | "Filesystem Layer - a changeset that describes a container's filesystem" |
| R5 | The OCI runtime spec defines the configuration (`config.json`) and the lifecycle of a container. | S13 | "aims to specify the configuration, execution environment, and lifecycle of a container" / "specified as the config.json" |
| R6 | The Linux part of the runtime spec names the namespaces, cgroups, and capabilities. | S14 | "uses various kernel features like namespaces, cgroups, capabilities, LSM, and filesystem jails to fulfill the spec" |
| R7 | Capabilities are small units of root power. | S11 | "Linux divides the privileges traditionally associated with superuser into distinct units, known as capabilities" |
| R8 | `runc` is a low-level runtime. It creates a container from an OCI bundle. | S16, S5 | S16: "CLI tool for spawning and running containers on Linux according to the OCI specification" / "in the format of an OCI bundle". S5 table: runC, "Low-Level". |
| R8b | An OCI bundle is a folder with `config.json` and a root filesystem (gloss on the page). | S16 | "After a root filesystem is populated you just generate a spec in the format of a config.json file inside your bundle." |
| R9 | `runc spec` writes a template `config.json`. `runc run mycontainerid` starts the container. (Shown as comments, not run.) | S16 | "runc provides a spec command to generate a base template spec" / "runc run mycontainerid" |
| R10 | `containerd` is a daemon. It manages image transfer and storage, execution, and supervision. | S17 | "It manages the complete container lifecycle of its host system, from image transfer and storage to container execution and supervision" |
| R11 | `containerd` is a high-level runtime: it adds image management on top of execution. | S5 | "High-Level ... Adds image management, networking, and APIs on top of basic execution." Wiz table lists containerd as a "Management Layer". |
| R12 | By default, Docker Engine starts containerd (review fix: "By default" added; S46 is the main cite, S5 the second). | S46, S5 | S46: "By default, the daemon starts and manages containerd as a separate process." S5: "uses containerd as its underlying runtime engine" |
| R12b | containerd uses `runc` for most container work (the Docker -> containerd -> runc chain, review fix). | S47 | "Most interactions with the Linux and Windows container feature sets are handled via runc and/or OS-specific libraries" |
| R13 | CRI-O is a runtime for Kubernetes. Kubernetes needs a runtime that conforms with the CRI. | S18, S4 | S18: "Lightweight Container Runtime for Kubernetes". S4: "requires that you use a runtime that conforms with the Container Runtime Interface (CRI)" |
| R14 | `dockerd` is a long-running daemon (table cell on the page). | S22 | "A server with a long-running daemon process dockerd." |
| R15 | Podman has no daemon. A root or a non-root user can run Podman containers. | S19 | "Podman is a daemonless, open source, Linux native tool" / "can either be run by root or by a non-privileged user" |
| R16 | The Docker daemon needs root, unless you use rootless mode. | S39 | "This daemon requires root privileges unless you opt-in to Rootless mode" |
| R17 | Rootless: the runtime and containers run as a normal user, inside a user namespace. A user namespace gives a private view of user IDs. | S40, S7 | S40: "executes the Docker daemon and containers inside a user namespace". S7 table, User: "User and group IDs". |
| R18 | Rootless setups need ID ranges in `/etc/subuid` and `/etc/subgid` (Docker rootless and rootless Podman; review fix: the first text said only Podman and only `/etc/subuid`). | S40, S20 | S40: "/etc/subuid and /etc/subgid should contain at least 65,536 subordinate UIDs/GIDs for the user". S20: "a range of UIDs listed in the files /etc/subuid and /etc/subgid" |
| R19 | `command -v docker podman runc containerd` shows which tools exist (read-only). | — | Shell builtin; I ran it locally (see the local checks above). It is not a claim about a tool. |
| R20 | Tip (tutorial's own advice): log engine and runtime. A test can differ between Docker, Podman, and rootless, because of file owners and privileges. | S20, S40 | Advice. It rests on R17 and R18 (user namespace and ID ranges). |

## Docker
| # | Claim | Source | Quote |
|---|---|---|---|
| D1 | Docker Engine has a daemon and the `docker` client. | S22 | "A server with a long-running daemon process dockerd." / "A command line interface (CLI) client docker." |
| D2 | An image is a read-only template. A container is a runnable instance of it. | S21 | "An image is a read-only template" / "A container is a runnable instance of an image." |
| D3 | Each Dockerfile instruction, such as `RUN` or `COPY`, adds a layer. | S21, S23 | S21: "Each instruction in a Dockerfile creates a layer in the image." S23: "RUNExecute build commands." / "COPYCopy files and directories." |
| D4 | (Removed in round 1: the page no longer has this sentence.) Changes inside a container vanish on removal. | S21 | "When a container is removed, any changes to its state that aren't stored in persistent storage disappear." |
| D5 | A volume is storage that Docker manages. | S30 | "Volumes are persistent data stores for containers, created and managed by Docker." |
| D6 | A bind mount shares a host path. It is writable by default. The `ro` option makes it read-only. | S31 | "Bind mounts have write access to files on the host by default." / "readonly or ro option" / "mounted from the host into a container" |
| D7 | Without a host address, `-p` publishes on all interfaces (0.0.0.0). | S24 | "Docker publishes the port on all interfaces (address 0.0.0.0) by default. These ports are externally accessible." |
| D8 | With `127.0.0.1` in `-p`, only the Docker host can reach the port. | S33 | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| D9 | On a user-defined network, containers reach each other by name. | S32 | "Once connected to a user-defined network, containers can communicate with each other using container IP addresses or container names." |
| D10 | Tags can move. A digest pins one exact image. | S35 | "Image tags are mutable" / "By pinning your images to a digest, you're guaranteed to always use the same image version" |
| D11 | `.dockerignore` keeps files out of the build context. | S34 | "You can use a .dockerignore file to exclude files or directories from the build context." |
| D12 | Compose starts several containers from one YAML file. | S36 | "Docker Compose is a tool for defining and running multi-container applications." / "single YAML configuration file" |
| D13 | Docker Desktop bundles the engine. Its daemon runs in a Linux VM. | S37, S31 | S37: "Products inside Docker Desktop" list with "Docker Engine", "Docker CLI client", "Docker Compose". S31: "the daemon runs inside a Linux VM, not directly on the native host" |
| D14 | `docker ps -a` shows all containers. | S25 | "-a, --all" then "Show all containers (default shows just running)" |
| D15 | `docker logs --tail N` shows the last N lines. `-f` follows. | S26 | "-n, --tail" "Number of lines to show from the end of the logs" / "-f, --follow" then "Follow log output" |
| D16 | `docker exec` runs a command in a running container. | S27 | "The docker exec command runs a new command in a running container." |
| D17 | By default, `docker stop` sends SIGTERM, then SIGKILL after a timeout. `STOPSIGNAL` and `--stop-signal` change the first signal. | S28 | "If no signal is configured for the container, SIGTERM is used as default." / "after a grace period, SIGKILL" |
| D18 | `docker rm -f` removes a running container with SIGKILL. | S29 | "-f, --force" then "Force the removal of a running container (uses SIGKILL)" |
| D19 | `--rm` removes the container (and its anonymous volumes) when it exits. | S24 | "--rm: Automatically remove the container and its associated anonymous volumes when it exits" |
| D20 | `--privileged` and `seccomp=unconfined` remove isolation. | S24 | "A container with --privileged is not a securely sandboxed process." / "Turn off seccomp confinement" |
| D20b | A mount of `docker.sock` gives control of the daemon. `--pid host` shares the host PID namespace. | S24 | "the full access to create and manipulate the host's Docker daemon" / "use the host's PID namespace inside the container" |
| D21 | `-v /:/host` lets a container change the host filesystem. | S39 | "/host directory is the / directory on your host" / "the container can alter your host filesystem without any restriction" |
| D22 | `--network host` removes network isolation. | S32 | "host" then "Remove network isolation between the container and the Docker host." |
| D23 | `docker system prune` removes unused containers, networks, images, and build cache. `-a` removes all unused images. | S38 | "Remove all unused containers, networks, images (both dangling and unused), unused build cache, and optionally, volumes." / "Remove all unused images not just dangling ones" |
| D24 | Avoid root in containers. `USER` sets the user. (The advice to run only trusted images is the tutorial's own.) | S5, S23 | S5: "Avoid running containers with root or high privileges". S23: "USERSet user and group ID." |
| D25 | `docker run -d --rm --name web1 -p 127.0.0.1:8080:80 registry.invalid/app:1.0` uses documented options; `-p` is HOST_IP:HOST_PORT:CONTAINER_PORT. The image name is invented and cannot resolve (round 1 fix: the first version used `example/app:1.0`). | S24 | "This binds port 8080 of the container to TCP port 80 on 127.0.0.1 of the host." |
| D26 | Tip (tutorial's own advice): pin by digest, publish on `127.0.0.1`, add `--rm`. | S35, S33, S24 | Advice. It rests on D10, D8, D19. |
| D27 | A build context is the files that the build can read (gloss on the page). | S34 | "The build context is the set of files that your build can access." |
| D28 | The danger list is the tutorial's own advice ("avoid ... on a shared host"). `docker rm -f` and `docker system prune -a` are risky on things that you did not start. | S29, S38 | S29: "Force the removal of a running container (uses SIGKILL)". Advice. |
| D29 | Privilege marks in the code blocks: the Docker block needs access to the Docker daemon, which runs as root unless it is rootless (S39). `runc run` needs root, unless rootless (S16: "runc has the ability to run containers without root privileges"). `systemd-run` in system scope: authentication or root (S43 `--no-ask-password`, `--user`). The page does not state that the `docker` group is root-equivalent: no fetched page says it. | S39, S16, S43 | S39: "This daemon requires root privileges unless you opt-in to Rootless mode" / S43: "Do not query the user for authentication for privileged operations" |

## Cgroups
| # | Claim | Source | Quote |
|---|---|---|---|
| G1 | A cgroup puts processes in a hierarchy of groups. Each group has limits and counters. | S6 | "allow processes to be organized into hierarchical groups whose usage of various types of resources can then be limited and monitored" |
| G2 | A controller manages one resource. Names: `cpu`, `memory`, `io` (`blkio` in v1), `pids`. | S6 | "Subsystems are sometimes also known as resource controllers (or simply, controllers)." / "io (since Linux 4.5) This is the successor of the version 1 blkio controller." |
| G3 | The interface is a file tree, usually at `/sys/fs/cgroup`. | S6 | "The kernel's cgroup interface is provided through a pseudo-filesystem called cgroupfs." / "mounted at /sys/fs/cgroup" |
| G4 | (Removed in round 1: the page no longer has this sentence.) A system can mix v1 and v2, but one controller cannot be in both. | S6 | "a controller can't be simultaneously employed in both a cgroups v1 hierarchy and in the cgroups v2 hierarchy" |
| G5 | v1 has one tree for each controller (or controllers that share a tree). v2 has one unified tree. | S6 | "each controller may be mounted against a separate cgroup filesystem" / "all mounted controllers reside in a single unified hierarchy" |
| G6 | The v2 memory limit file is `memory.max`. The v1 name was `memory.limit_in_bytes`. | S12 | "memory.max ... Memory usage hard limit." / "the original memory.limit_in_bytes" |
| G7 | `/proc/self/cgroup` lines: v1 `ID:controllers:path`, v2 `0::path`. | S6 | "hierarchy-ID:controller-list:cgroup-path" / "For the cgroups version 2 hierarchy, this field contains the value 0." |
| G8 | At `memory.max`, if memory cannot be reduced, the OOM killer runs inside the cgroup. | S12 | "If a cgroup's memory usage reaches this limit and can't be reduced, the OOM killer is invoked in the cgroup." |
| G9 | `cpu.max` caps CPU time per period. `pids.max` caps the number of tasks (processes and threads). | S12 | "the group may consume up to $MAX in each $PERIOD duration" / "PIDs used in this controller refer to TIDs" |
| G10 | Docker sets cgroup limits with `--memory`, `--cpus`, `--pids-limit`. | S41, S24 | S41: "The maximum amount of memory the container can use." / "how much of the available CPU resources a container can use". S24: "Tune container pids limit" |
| G11 | On cgroup v2, `MemoryMax=` is the systemd setting for the absolute memory limit. | S42 | "These settings control the memory controller in the unified hierarchy." / "Specify the absolute limit on memory usage of the executed processes in this unit." |
| G12 | `systemd-run --scope -p MemoryMax=256M cmd` runs one command in a transient scope with the property. `M` means megabytes (base 1024). `--user` talks to the service manager of the calling user. The code comment says that the system manager may ask you to authenticate. | S43, S42 | S43: "Create a transient .scope unit" / "Talk to the service manager of the calling user". S42: "suffixed with K, M, G or T" |
| G13 | `systemd-cgls` prints the cgroup tree. `--no-pager` stops the pager. | S44 | "systemd-cgls recursively shows the contents of the selected Linux control group hierarchy in a tree." / "Do not pipe output into a pager." |
| G14 | A cgroup namespace makes `/proc/self/cgroup` show paths from its own root. | S9 | "Each cgroup namespace has its own set of cgroup root directories." |
| G15 | `kill -9` gives the usual main process of a container no time to clean up ("usual": the main process is PID 1 of its namespace only without `--init` or a shell wrapper). If the init process of a PID namespace ends, the kernel kills every other process in that namespace. `docker stop` sends SIGTERM first (D17). | S8, S28 | "If the "init" process of a PID namespace terminates, the kernel terminates all of the processes in the namespace via a SIGKILL signal." |
| G16 | `memory.events` has an `oom_kill` count. | S12 | "oom_kill The number of processes belonging to this cgroup killed by any kind of OOM killer." |
| G17 | `cpu.stat` has `nr_throttled`, when the cpu controller is enabled. | S12 | "the following five when the controller is enabled" ... "nr_periods nr_throttled throttled_usec" |
| G18 | A full `pids.max` makes `fork` and `clone` return `EAGAIN` ("try again"). | S12 | "These will return -EAGAIN" |
| G19 | `docker stop` sends SIGTERM first, so the page tells the reader to use it instead of `kill -9`. | S28 | See D17. |
| G20 | Danger (tutorial's own advice): do not write into `/sys/fs/cgroup` on a shared host. A wrong limit can invoke the OOM killer (G8). | S12 | Advice. It rests on G8 and G9. |
| G21 | Tip (tutorial's own advice): test with the limits of CI. A low memory limit shows as an OOM kill in `memory.events` (G16), a CPU limit as `nr_throttled` (G17), a pids limit as `EAGAIN` (G18). | S12 | Advice. |
