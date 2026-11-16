# Research notes: Docker in Practice

Page: `content/devops/docker-in-practice.mdx`. Module: DevOps & Cloud. Date: 2026-11-16 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): where data lives (the writable container layer, volumes, bind mounts, tmpfs), the `--mount` and `--volume` flags, the default and user-defined bridge networks, `docker exec`, `docker cp`, `docker stats`, logs, resource limits, `docker system df`, and `docker system prune`, with a practice run. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had two sentences, one from the Volumes page and one from the Bind mounts page; the page keeps both, now in the table of `## What it is`.

The practice run of `## Try it` was run on 2026-11-16 with Docker Engine 29.9.3 (client and server) on Linux, as a user in the `docker` group, in an empty scratch folder. Before the run, a check found no container, volume, or network with the names of the run (`devtest`, `alpine1` to `alpine4`, `myvol2`, `alpine-net`); other containers on the machine were not touched. The outputs on the page are from this run:

- Step 1 follows S2's `devtest` example (S2 writes it on four lines with `\`). `docker exec devtest sh -c 'echo "run 1: 12 passed" > /app/result.txt'` exited with 0. `docker cp devtest:/app/result.txt ./result-copy.txt` ran after `docker container stop devtest` and exited with 0; `ls -l result-copy.txt` showed the user who ran the command as owner and group. After `docker container rm devtest`, `docker run --rm --mount source=myvol2,target=/app alpine cat /app/result.txt` printed `run 1: 12 passed`.
- Step 2: `cat reports/result.txt` printed `1 passed`; `ls -l reports` showed `-rw-r--r-- root root result.txt`.
- Step 3: the `--mount` command printed `docker: Error response from daemon: invalid mount config for type "bind": bind source path does not exist: <full path>/no-such-dir` and exited with 125, and no `no-such-dir` was created. The `-v` command exited with 0; `ls -la /reports` in the container listed only `.` and `..`; on the host, `typo-dir` was a directory owned by `root`.
- Step 4 follows S5's tutorial "Use user-defined bridge networks" with three of its four containers, and runs the ping with `docker exec` (S6) instead of S5's `docker container attach`. `docker exec alpine1 ping -c 2 alpine2` printed `2 packets transmitted, 2 packets received, 0% packet loss` and exited with 0. `docker exec alpine1 ping -c 2 alpine3` printed `ping: bad address 'alpine3'` and exited with 1.
- Step 5: `docker run -dit --name alpine4 -m 64m alpine ash`; the `docker stats --no-stream alpine1 alpine4` output on the page is the real output, copied in full. `/proc/meminfo` of the host gave `MemTotal` 30.16 GiB, the limit that `docker stats` showed for `alpine1`. `docker exec alpine4 cat /sys/fs/cgroup/memory.max` printed `67108864` (64 MiB); the page does not show this. `docker system df` printed the rows `Images`, `Containers`, `Local Volumes`, and `Build Cache` with the columns `TYPE`, `TOTAL`, `ACTIVE`, `SIZE`, and `RECLAIMABLE`; the page names them but does not show the numbers, which describe the other images and volumes of the machine.
- Step 6 is S5's clean-up with `alpine4` added, and S2's `docker volume rm myvol2`; every command exited with 0. The last line of the page's block, `rm -rf reports typo-dir result-copy.txt`, was tried in a second scratch folder with the same `root`-owned files: it exited with 0 as the normal user (the folders that hold them belonged to that user). The run itself removed the files from a container, then removed the scratch folder. After the run, no container, volume, or network of the run was left.

An earlier practice run on the same day also tried `--tmpfs /scratch`; the page does not show it.

The three `--mount` syntax lines of S2, S3, and S4 are quoted as `scripts/devops_claimcheck.py` reads them: the code highlighting of those pages puts a space before and after each `=`.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Storage (Docker Docs) | https://docs.docker.com/engine/storage/ |
| S2 | Volumes (Docker Docs) | https://docs.docker.com/engine/storage/volumes/ |
| S3 | Bind mounts (Docker Docs) | https://docs.docker.com/engine/storage/bind-mounts/ |
| S4 | tmpfs mounts (Docker Docs) | https://docs.docker.com/engine/storage/tmpfs/ |
| S5 | Bridge network driver (Docker Docs) | https://docs.docker.com/engine/network/drivers/bridge/ |
| S6 | docker container exec (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/exec/ |
| S7 | docker container cp (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/cp/ |
| S8 | docker container stats (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/stats/ |
| S9 | View container logs (Docker Docs) | https://docs.docker.com/engine/logging/ |
| S10 | Resource constraints (Docker Docs) | https://docs.docker.com/engine/containers/resource_constraints/ |
| S11 | docker system df (Docker Docs) | https://docs.docker.com/reference/cli/docker/system/df/ |
| S12 | docker system prune (Docker Docs) | https://docs.docker.com/reference/cli/docker/system/prune/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| By default, all files created inside a container are stored on a writable container layer. | S1 | "By default all files created inside a container are stored on a writable container layer" |
| Data written to the container layer doesn't persist when the container is destroyed. | S1 | "Data written to the container layer doesn't persist when the container is destroyed" |
| Docker supports storage mounts for storing data outside the writable layer, among them volume, bind, and tmpfs mounts. | S1 | "Docker supports the following types of storage mounts for storing data outside of the writable layer of the container" |
| Docker supports storage mounts for storing data outside the writable layer, among them volume, bind, and tmpfs mounts. | S1 | "Volume mounts" |
| Docker supports storage mounts for storing data outside the writable layer, among them volume, bind, and tmpfs mounts. | S1 | "Bind mounts" |
| Docker supports storage mounts for storing data outside the writable layer, among them volume, bind, and tmpfs mounts. | S1 | "tmpfs mounts" |
| No matter which type of mount you choose, the data looks the same from within the container. | S1 | "No matter which type of mount you choose to use, the data looks the same from within the container" |
| Volumes are persistent data stores for containers, created and managed by Docker. | S2 | "Volumes are persistent data stores for containers, created and managed by Docker" |
| Volumes are the preferred mechanism for persisting data generated by and used by Docker containers. | S2 | "Volumes are the preferred mechanism for persisting data generated by and used by Docker containers" |
| When you use a bind mount, a file or directory on the host machine is mounted from the host into a container. | S3 | "a file or directory on the host machine is mounted from the host into a container" |
| A use of bind mounts is sharing source code or build artifacts between a development environment on the Docker host and a container. | S3 | "Sharing source code or build artifacts between a development environment on the Docker host and a container" |
| A tmpfs mount is temporary and only persisted in the host memory; when the container stops, it is removed, and files written there won't be persisted. | S4 | "A tmpfs mount is temporary, and only persisted in the host memory" |
| A tmpfs mount is temporary and only persisted in the host memory; when the container stops, it is removed, and files written there won't be persisted. | S4 | "When the container stops, the tmpfs mount is removed, and files written there won't be persisted" |
| For non-persistent state data, a tmpfs mount avoids storing the data anywhere permanently and increases performance by avoiding writes into the writable layer. | S2 | "If your container generates non-persistent state data, consider using a tmpfs mount to avoid storing the data anywhere permanently, and to increase the container's performance by avoiding writing into the container's writable layer" |
| All containers without a --network specified are attached to the default bridge network. | S5 | "All containers without a --network specified, are attached to the default bridge network" |
| Containers on the default bridge network can only access each other by IP addresses, unless you use --link, which is considered legacy. | S5 | "Containers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy" |
| User-defined bridges provide automatic DNS resolution between containers. | S5 | "User-defined bridges provide automatic DNS resolution between containers" |
| A volume's contents exist outside the lifecycle of a given container. | S2 | "A volume's contents exist outside the lifecycle of a given container" |
| When a container is destroyed, the writable layer is destroyed with it; a volume keeps the data even if the container using it is removed. | S2 | "When a container is destroyed, the writable layer is destroyed with it" |
| When a container is destroyed, the writable layer is destroyed with it; a volume keeps the data even if the container using it is removed. | S2 | "Using a volume ensures that the data is persisted even if the container using it is removed" |
| A given volume can be mounted into multiple containers simultaneously. | S2 | "A given volume can be mounted into multiple containers simultaneously" |
| When no running container is using a volume, the volume is still available to Docker and isn't removed automatically. | S2 | "When no running container is using a volume, the volume is still available to Docker and isn't removed automatically" |
| To mount a volume with docker run, you can use either --mount or --volume. | S2 | "you can use either the --mount or --volume flag" |
| In general, --mount is preferred: it is more explicit and supports all the available options. | S2 | "In general, --mount is preferred" |
| In general, --mount is preferred: it is more explicit and supports all the available options. | S2 | "the --mount flag is more explicit and supports all the available options" |
| The --mount and --volume forms of a volume mount. | S2 | "--mount type = volume,src = <volume-name>,dst = <mount-path>" |
| The --mount and --volume forms of a volume mount. | S2 | "--volume <volume-name>:<mount-path>" |
| The --mount and --volume forms of a bind mount. | S3 | "--mount type = bind,src = <host-path>,dst = <container-path>" |
| The --mount and --volume forms of a bind mount. | S3 | "--volume <host-path>:<container-path>" |
| The --mount and --tmpfs forms of a tmpfs mount. | S4 | "--mount type = tmpfs,dst = <mount-path>" |
| The --mount and --tmpfs forms of a tmpfs mount. | S4 | "--tmpfs <mount-path>" |
| Mounting a non-empty volume over existing files obscures them. | S2 | "If you mount a non-empty volume into a directory in the container in which files or directories exist, the pre-existing files are obscured by the mount" |
| Mounting an empty volume over existing files copies them into the volume by default. | S2 | "If you mount an empty volume into a directory in the container in which files or directories exist, these files or directories are propagated (copied) into the volume by default" |
| A volume may be named or anonymous; anonymous volumes are given a random name. | S2 | "A volume may be named or anonymous" |
| A volume may be named or anonymous; anonymous volumes are given a random name. | S2 | "Anonymous volumes are given a random name" |
| Anonymous volumes persist after their container is removed, except with --rm. | S2 | "Like named volumes, anonymous volumes persist even if you remove the container that uses them, except if you use the --rm flag when creating the container" |
| Bind mounts have write access to files on the host by default. | S3 | "Bind mounts have write access to files on the host by default" |
| A process in the container can change the host filesystem, including important system files or directories. | S3 | "you can change the host filesystem via processes running in a container, including creating, modifying, or deleting important system files or directories" |
| The readonly or ro option prevents the container from writing to the mount. | S3 | "You can use the readonly or ro option to prevent the container from writing to the mount" |
| On the default bridge network, containers can't resolve each other by name. | S5 | "On the default bridge network, containers can't resolve each other by name" |
| On user-defined networks, containers can resolve each other by name. | S5 | "On user-defined networks, containers can resolve each other by name" |
| Automatic service discovery only resolves custom container names, not default generated names. | S5 | "Automatic service discovery only resolves custom container names, not default automatically generated names" |
| If you start a container with a volume that doesn't yet exist, Docker creates the volume; the devtest command is Docker's example. | S2 | "If you start a container with a volume that doesn't yet exist, Docker creates the volume for you" |
| If you start a container with a volume that doesn't yet exist, Docker creates the volume; the devtest command is Docker's example. | S2 | "--name devtest" |
| If you start a container with a volume that doesn't yet exist, Docker creates the volume; the devtest command is Docker's example. | S2 | "--mount source=myvol2,target=/app" |
| If you start a container with a volume that doesn't yet exist, Docker creates the volume; the devtest command is Docker's example. | S2 | "nginx:latest" |
| docker exec runs a new command in a running container. | S6 | "runs a new command in a running container" |
| The command must be an executable; a chained or quoted command doesn't work, and Docker's example uses sh -c. | S6 | "The command must be an executable. A chained or a quoted command doesn't work." |
| The command must be an executable; a chained or quoted command doesn't work, and Docker's example uses sh -c. | S6 | "This works: docker exec -it my_container sh -c" |
| docker cp copies files or folders between a container and the local filesystem. | S7 | "Copy files/folders between a container and the local filesystem" |
| The container of docker cp can be running or stopped. | S7 | "The container can be a running or stopped container" |
| Files copied to the local machine are created with the UID:GID of the user who invoked docker cp. | S7 | "Files copied to the local machine are created with the UID:GID of the user which invoked the docker cp command" |
| docker volume rm myvol2 removes the volume. | S2 | "docker volume rm myvol2" |
| By default, --mount does not create a missing host directory; it produces an error. | S3 | "--mount does not automatically create a directory if the specified mount path does not exist on the host" |
| By default, --mount does not create a missing host directory; it produces an error. | S3 | "Instead, it produces an error" |
| With --volume, Docker creates the missing host directory, always as a directory. | S3 | "If you use --volume to bind-mount a file or directory that does not yet exist on the Docker host, Docker automatically creates the directory on the host for you" |
| With --volume, Docker creates the missing host directory, always as a directory. | S3 | "It's always created as a directory" |
| The network commands follow Docker's tutorial on user-defined bridge networks, which has four containers. | S5 | "docker network create --driver bridge alpine-net" |
| The network commands follow Docker's tutorial on user-defined bridge networks, which has four containers. | S5 | "docker run -dit --name alpine1 --network alpine-net alpine ash" |
| The network commands follow Docker's tutorial on user-defined bridge networks, which has four containers. | S5 | "docker run -dit --name alpine2 --network alpine-net alpine ash" |
| The network commands follow Docker's tutorial on user-defined bridge networks, which has four containers. | S5 | "docker run -dit --name alpine3 alpine ash" |
| The network commands follow Docker's tutorial on user-defined bridge networks, which has four containers. | S5 | "Create four containers" |
| The -dit flags mean detached, interactive, and with a TTY. | S5 | "The -dit flags mean detached, interactive, and with a TTY" |
| Docker's tutorial attaches to alpine1 to run the ping. | S5 | "docker container attach alpine1" |
| From alpine1, you can't connect to alpine3 because it's on a different network. | S5 | "From alpine1, you can't connect to alpine3 because it's on a different network" |
| From alpine1, you can't connect to alpine3 because it's on a different network. | S5 | "ping: bad address 'alpine3'" |
| By default, a container has no resource constraints and can use as much of a resource as the kernel scheduler allows. | S10 | "By default, a container has no resource constraints and can use as much of a given resource as the host's kernel scheduler allows" |
| -m (--memory) sets the maximum amount of memory the container can use. | S10 | "-m or --memory=" |
| -m (--memory) sets the maximum amount of memory the container can use. | S10 | "The maximum amount of memory the container can use" |
| --cpus sets how much of the available CPU resources a container can use. | S10 | "--cpus=<value>" |
| --cpus sets how much of the available CPU resources a container can use. | S10 | "Specify how much of the available CPU resources a container can use" |
| docker stats displays a live stream of container resource usage statistics; --no-stream only pulls the first result. | S8 | "Display a live stream of container(s) resource usage statistics" |
| docker stats displays a live stream of container resource usage statistics; --no-stream only pulls the first result. | S8 | "Disable streaming stats and only pull the first result" |
| docker system df shows Docker disk usage. | S11 | "Show docker disk usage" |
| Docker's tutorial stops and removes the containers, then removes the network. | S5 | "docker container stop alpine1 alpine2 alpine3 alpine4" |
| Docker's tutorial stops and removes the containers, then removes the network. | S5 | "docker container rm alpine1 alpine2 alpine3 alpine4" |
| Docker's tutorial stops and removes the containers, then removes the network. | S5 | "docker network rm alpine-net" |
| New volumes can have their content pre-populated by a container or build. | S2 | "New volumes can have their content pre-populated by a container or build" |
| Copying into an empty volume is a good way to pre-populate data that another container needs. | S2 | "This is a good way to pre-populate data that another container needs" |
| Volumes can be more safely shared among multiple containers. | S2 | "Volumes can be more safely shared among multiple containers" |
| Unlike volumes and bind mounts, you can't share tmpfs mounts between containers. | S4 | "Unlike volumes and bind mounts, you can't share tmpfs mounts between containers" |
| tmpfs is only available if you're running Docker on Linux. | S4 | "This functionality is only available if you're running Docker on Linux" |
| By default, docker logs shows the command's STDOUT and STDERR. | S9 | "By default, docker logs shows the command's STDOUT and STDERR" |
| A web server or a database may send its output to log files instead. | S9 | "If your image runs a non-interactive process such as a web server or a database, that application may send its output to log files instead of STDOUT and STDERR" |
| The official nginx image links its log files to /dev/stdout and /dev/stderr. | S9 | "The official nginx image creates a symbolic link from /var/log/nginx/access.log to /dev/stdout" |
| The official nginx image links its log files to /dev/stdout and /dev/stderr. | S9 | "creates another symbolic link from /var/log/nginx/error.log to /dev/stderr" |
| On Linux hosts, without enough memory for important system functions, the kernel throws an Out Of Memory Exception and starts killing processes. | S10 | "On Linux hosts, if the kernel detects that there isn't enough memory to perform important system functions, it throws an OOME, or Out Of Memory Exception, and starts killing processes to free up memory" |
| Docker advises tests to understand the memory requirements of your application before production. | S10 | "Perform tests to understand the memory requirements of your application before placing it into production" |
| With containers, there's no straightforward way of removing a mount to reveal the obscured files. | S2 | "there's no straightforward way of removing a mount to reveal the obscured files again" |
| docker volume prune removes unused volumes. | S2 | "docker volume prune" |
| docker system prune removes unused containers, networks, images, build cache, and optionally volumes. | S12 | "Remove all unused containers, networks, images (both dangling and unused), unused build cache, and optionally, volumes" |
| Without options, the warning lists stopped containers, unused networks, dangling images, and unused build cache. | S12 | "all stopped containers" |
| Without options, the warning lists stopped containers, unused networks, dangling images, and unused build cache. | S12 | "all networks not used by at least one container" |
| Without options, the warning lists stopped containers, unused networks, dangling images, and unused build cache. | S12 | "all dangling images" |
| Without options, the warning lists stopped containers, unused networks, dangling images, and unused build cache. | S12 | "unused build cache" |
| --all removes all unused images, not just dangling ones; --volumes prunes anonymous volumes. | S12 | "Remove all unused images not just dangling ones" |
| --all removes all unused images, not just dangling ones; --volumes prunes anonymous volumes. | S12 | "Prune anonymous volumes" |
