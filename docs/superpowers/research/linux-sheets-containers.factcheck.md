# Independent fact-check: Containers (`lib/linux/sheets/containers.ts`)

Date: 2026-11-04. 2 rounds. In each round a checker that did not write the sheet (Claude Code, model claude-sonnet-5-5, a new session with read-only tools and no web access) got only the cards and the text of the pages that they cite. Round 1 checked the English gloss, the Bangla gloss, and the red "!" of every row. Round 2 checked the rows that the writer changed or answered after round 1, and the "!" of every row against its rule. Below are the checkers' reports as they wrote them, with each heading one level down.

## Round 1: Containers

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows checked: 26.

### FAILs

- 1.5 `chroot DIR CMD`: EN. "not a container" has no support in the cited pages. The chroot page only says what chroot does and never compares it with containers. Quote: "Run COMMAND with root directory set to NEWROOT." (chroot). Fix: EN "run with another root directory" / BN "অন্য root directory-তে চালায়"
- 2.5 `podman ps`: EN. The cited Podman page only describes listing containers. It never says Docker-compatible and never says no daemon, so the gloss is not about this command and is unsupported. Quote: "podman ps lists the running containers on the system." (podman_ps). Fix: EN "list running Podman containers" / BN "চলমান Podman container-এর তালিকা"
- 3.6 `docker rm NAME`: !. The command deletes a container, and that is data destruction, but the row has "!: no". Quote: "Remove one or more containers" (docker_rm). Fix: EN "delete a stopped container" / BN "বন্ধ container মোছে" (set "!: yes")

### Notes

- 1.5 and 2.5: if the writer wants these claims, cite a page that makes them (for chroot, a page that contrasts it with containers; for Podman, its main docs).
- 2.1: the pages support containerd as the daemon that manages containers and runc as the low-level OCI runtime. No cited page says that the docker CLI calls containerd. `docker info` only shows "Runtimes: runc io.containerd.runc.v2". The link is only implied.
- 3.8: the gloss leaves out unused build cache, which the page also removes. Adding "and build cache" would be more complete.
- 3.2: "stopped" is fine. The page says "all containers (default shows just running)", which also covers created and exited containers.
- 1.3: the page says `/proc/pid/ns/xxx`, and `self` is the current process's PID, so the row follows from the page.

### All rows

| Row | Command | EN | Quote (source key) | BN | Note |
|---|---|---|---|---|---|
| 1.1 | `sudo unshare --pid --fork --mount-proc bash` | PASS | "Create a new PID namespace." / "--mount-proc ... useful when creating a new PID namespace" (unshare) | PASS | |
| 1.2 | `lsns` | PASS | "lsns - list namespaces" (lsns) | PASS | |
| 1.3 | `ls -l /proc/self/ns` | PASS | "they appear as symbolic links" (namespaces) | PASS | |
| 1.4 | `sudo nsenter -t PID -n ip addr` | PASS | "-n, --net ... enter the network namespace of the target process" (nsenter) | PASS | |
| 1.5 | `chroot DIR CMD` | FAIL | "Run COMMAND with root directory set to NEWROOT." (chroot) | PASS | "not a container" unsupported |
| 2.1 | `docker → containerd → runc` | PASS | "containerd is available as a daemon ... manages the complete container lifecycle" (containerd) | PASS | the docker→containerd link is implied only |
| 2.2 | `docker info` | PASS | "Runtimes: runc io.containerd.runc.v2" / "Storage Driver: overlayfs" (docker_info) | PASS | |
| 2.3 | `docker ps` | PASS | "-a, --all Show all containers (default shows just running)" (docker_ls) | PASS | |
| 2.4 | `docker inspect NAME` | PASS | "Return low-level information on Docker objects" / "render results in a JSON array" (docker_inspect) | PASS | |
| 2.5 | `podman ps` | FAIL | "podman ps lists the running containers on the system." (podman_ps) | PASS | no Docker-compatible or no-daemon text |
| 3.1 | `docker run -d --name NAME -p 8080:80 IMAGE` | PASS | "-d, --detach Run container in background" / "-p, --publish Publish a container's port(s) to the host" (docker_run) | PASS | |
| 3.2 | `docker ps -a` | PASS | "-a, --all Show all containers (default shows just running)" (docker_ls) | PASS | |
| 3.3 | `docker logs -f NAME` | PASS | "-f, --follow Follow log output" (docker_logs) | PASS | |
| 3.4 | `docker exec -it NAME sh` | PASS | "Execute a command in a running container" (docker_exec) | PASS | |
| 3.5 | `docker stop NAME` | PASS | "Stop one or more running containers" (docker_stop) | PASS | |
| 3.6 | `docker rm NAME` | PASS (EN) / FAIL (!) | "Remove one or more containers" (docker_rm) | PASS | "!: no" is wrong |
| 3.7 | `docker build -t IMAGE .` | PASS | "Build an image from a Dockerfile" (docker_build) | PASS | |
| 3.8 | `docker system prune` | PASS | "all stopped containers - all networks not used by at least one container - all dangling images" (docker_prune) | PASS | build cache also removed |
| 4.1 | `/proc/self/cgroup` | PASS | "# cat /proc/self/cgroup" (cgroup_v2) | PASS | |
| 4.2 | `/sys/fs/cgroup` | PASS | "tmpfs(5) filesystem mounted at /sys/fs/cgroup" (cgroups) | PASS | |
| 4.3 | `/sys/fs/cgroup/cgroup.controllers` | PASS | "Each cgroup has a “cgroup.controllers” file which lists all" (cgroup_v2) | PASS | |
| 4.4 | `systemd-cgls` | PASS | "systemd-cgls recursively shows the contents of the selected Linux control group hierarchy in a tree." (systemd_cgls) | PASS | |
| 4.5 | `systemd-cgtop` | PASS | "The display is refreshed in regular intervals" (systemd_cgtop) | PASS | |
| 4.6 | `systemd-run --scope -p MemoryMax=100M CMD` | PASS | "MemoryMax=bytes" / "enabled via the --scope switch" (systemd_resource_control, systemd_run) | PASS | |
| 4.7 | `docker run --memory 256m --cpus 1 IMAGE` | PASS | "-m, --memory Memory limit" / "--cpus=<value> Specify how much of the available CPU resources a container can use" (docker_run, docker_limits) | PASS | |
| 4.8 | `docker stats` | PASS | "returns a live data stream for running containers" (docker_stats) | PASS | |

Open FAILs after round 1: 3
---
Skipped: I did not read every page in full, only the passages the greps surfaced. I did not check the `!` mark on `docker stop` beyond "it stops, it does not delete". Risk: 1.5 may be true in general, but the cited pages do not say it.

## Round 2: Containers

Checker: an independent agent that did not write the sheet (Claude Code, Sonnet 5.5). Evidence: only the cited pages in `pages/`. Rows re-checked: 3.

### FAILs

none

### Rows re-checked

| Row | Command now | EN | Quote (source key) | BN | ! |
|---|---|---|---|---|---|
| 1.5 | `chroot DIR CMD` | PASS | "Run COMMAND with root directory set to NEWROOT." (chroot) | PASS | PASS (chroot is not in the rule's list) |
| 2.5 | `podman ps` | PASS | "podman ps lists the running containers on the system." (podman_ps) | PASS | PASS (listing only) |
| 3.6 | `docker rm NAME` | PASS | "Remove one or more containers" (docker_rm); also "Force the removal of a running container (uses SIGKILL)", so a plain rm is for stopped containers (docker_rm) | PASS | PASS (rm deletes data, so "yes" is correct) |

### The "!" of every row

All rows follow the rule.

Open FAILs after round 2: 0
Not checked: the glosses of the unchanged rows in C, and whether `docker rm` fails on a running container. The page implies it but I did not find a sentence that says so.

Open FAILs: 0
