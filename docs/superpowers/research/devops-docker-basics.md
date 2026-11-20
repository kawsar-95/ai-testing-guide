# Research notes: Docker Basics

Page: `content/devops/docker-basics.mdx`. Module: DevOps & Cloud. Date: 2026-11-20 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): containers, images, and registries, the client and the daemon, what `docker run` does, layers and the writable container layer, ports, a practice run, and the ways that a tester uses containers. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had three sentences from the Docker overview, which was S1 then.

The practice run of `## Try it` was recorded on 2026-11-16, before the sources S1 to S4 and S7 were replaced. It followed the Docker Docs of that day: `hello-world` from S8, and `docker/welcome-to-docker` and the commands `docker pull`, `docker image ls`, `docker image history`, `docker run -d -p`, `docker ps`, and `docker stop` from the old pages S2 and S3, which are not at those addresses any more. The current pages S2, S3, and S22 use another example (a to-do app that you build from a Dockerfile), so the image, the port, and the commands of the run are the tutorial's own choice. The page describes each command with the pages S9 to S17, S22, and S3. It was run on 2026-11-16 with Docker Engine 29.9.3 on Linux, as a user in the `docker` group (so without `sudo`). The page shows parts of the real output and says that IDs, sizes, and times differ. The run used `-p 127.0.0.1:8080:80` (S6) and `--name welcome` (S10). `curl -s http://localhost:8080` returned the page (`<meta name="description" content="Your first Docker container"/>`); the page tells the reader to visit the address in a browser, which is the tutorial's own instruction. `docker exec welcome ls /usr/share/nginx/html` printed `50x.html`, `asset-manifest.json`, `favicon.ico`, `index.html`, `robots.txt`, and `static`, one per line. `docker image ls` printed the Docker 29 columns (`IMAGE`, `ID`, `DISK USAGE`, `CONTENT SIZE`, `EXTRA`), not the older columns that the old page S3 showed, so the page does not show that output. Every container of the run was removed at the end; other containers on the machine were not touched.

The sources S1 to S4 and S7 were replaced on 2026-11-20. The full claim check of all 24 pages found that the Docker page "What is Docker?" (`/get-started/docker-overview/`, S1 then) answers 404, so its 25 quotes could not be checked; that "What is a container?", "What is an image?", and "What is a registry?" (`/get-started/docker-concepts/the-basics/`, S2 to S4 then) now redirect to one Docker Learn guide, "What is a container?", where none of the 17 quotes of the three old pages is found (9, 6, and 2); and that "Get Docker" (`/get-started/get-docker/`, S7 then) redirects to `/get-docker/`, where none of its 3 quotes is found. The text that depended on them was rewritten with the pages that the tutorial read on 2026-11-20. S1 is now the page of Docker Engine (client and server, the daemon, the CLI, the objects of the daemon). S2 is the Docker Learn guide "What is a container?", which covers containers, virtual machines, images, and registries. S3 is the Docker Learn guide on image layers and the build cache. S4 is the page of Docker Hub. S7 is the page that installs Docker Desktop. The pages S20 to S23 were added: Docker Engine security (namespaces and control groups, the REST API endpoint), Docker Engine API (the REST API), Run your first container (`docker ps`, `docker image ls`, what a stop and a removal do), and Bridge network driver (the default bridge network). Some facts of the old pages are on none of these pages, so the page dropped them: that Docker is an open platform for developing, shipping, and running applications; the phrase "loosely isolated environment"; that a container is a runnable instance of an image; the example of developers who push applications into a test environment and redeploy them after a fix; that everyone you share a container with gets the same container; the steps of `docker run -i -t ubuntu /bin/bash` of the old overview (the page now lists what S10, S2, S23, and S22 say about `docker run`, and says that the order of that list is the tutorial's own); that a rebuild rebuilds only the changed layers (the page now says what S3 says: Docker reuses a layer from an earlier build only when nothing it depends on has changed); the sentence that namespaces are the technology that provides the isolated workspace (the page now says what S20 says about namespaces and control groups); and the line of the old image page that the history of `docker/welcome-to-docker` has `COPY /app/build /usr/share/nginx/html` (the page still shows that line, from the tutorial's run, without a comparison).

The Playwright command in `## How a tester uses it` is S19's, with the tag that S19 showed on 2026-11-16 (`v1.64.1-noble`). It was not run.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Docker Engine (Docker Docs) | https://docs.docker.com/engine/ |
| S2 | What is a container? (Docker Learn) | https://docs.docker.com/learn/content/what-is-a-container/ |
| S3 | How image layers and the build cache work (Docker Learn) | https://docs.docker.com/learn/content/how-image-layers-and-the-build-cache-work/ |
| S4 | Docker Hub (Docker Docs) | https://docs.docker.com/docker-hub/ |
| S5 | Storage (Docker Docs) | https://docs.docker.com/engine/storage/ |
| S6 | Port publishing and mapping (Docker Docs) | https://docs.docker.com/engine/network/port-publishing/ |
| S7 | Quick install Docker Desktop (Docker Docs) | https://docs.docker.com/get-docker/desktop/ |
| S8 | Install Docker Engine on Ubuntu (Docker Docs) | https://docs.docker.com/engine/install/ubuntu/ |
| S9 | docker image pull (Docker Docs) | https://docs.docker.com/reference/cli/docker/image/pull/ |
| S10 | docker container run (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/run/ |
| S11 | docker container ls (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/ls/ |
| S12 | docker container logs (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/logs/ |
| S13 | docker container exec (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/exec/ |
| S14 | docker container stop (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/stop/ |
| S15 | docker container rm (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/rm/ |
| S16 | docker image ls (Docker Docs) | https://docs.docker.com/reference/cli/docker/image/ls/ |
| S17 | docker inspect (Docker Docs) | https://docs.docker.com/reference/cli/docker/inspect/ |
| S18 | Testcontainers (Testcontainers) | https://testcontainers.com/ |
| S19 | Docker (Playwright) | https://playwright.dev/docs/docker |
| S20 | Docker Engine security (Docker Docs) | https://docs.docker.com/engine/security/ |
| S21 | Docker Engine API (Docker Docs) | https://docs.docker.com/reference/api/engine/ |
| S22 | Run your first container (Docker Learn) | https://docs.docker.com/learn/content/run-your-first-container/ |
| S23 | Bridge network driver (Docker Docs) | https://docs.docker.com/engine/network/drivers/bridge/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Docker Engine is an open source containerization technology for building and containerizing your applications | S1 | "Docker Engine is an open source containerization technology for building and containerizing your applications" |
| A container is an ordinary process on your computer, such as a Node.js server, that runs in isolation | S2 | "A container is an ordinary process on your computer, such as a Node.js server, that runs in isolation" |
| Because everything the app needs is inside, a container doesn't depend on what is installed on your machine | S2 | "Because everything the app needs is inside, a container doesn't depend on what is installed on your machine" |
| A container's files come from an image | S2 | "where do those files come from? From an image" |
| An image is a package of everything a container needs to start: the operating system files, the language runtime, the app's dependencies and code, and settings such as which command to run | S2 | "An image is a package of everything a container needs to start: the operating system files, the language runtime, the app's dependencies and code, and settings such as which command to run" |
| A registry is a service that stores images so anyone with access can pull them | S2 | "That's a registry: a service that stores images so anyone with access can pull them" |
| Docker Hub (docker.io) is Docker's public registry and the default one | S2 | "Docker Hub (docker.io) is Docker's public registry and the default one" |
| Docker Hub provides a container registry for storing, managing, and sharing Docker images | S4 | "container registry for storing, managing, and sharing Docker images" |
| Each difference between machines is a chance for the app to work on one machine and fail on another | S2 | "each difference is a chance for the app to work on one machine and fail on another" |
| Ten containers started from the same image start from exactly the same files, today or next month | S2 | "ten containers started from the same image start from exactly the same files, today or next month" |
| Delete a container and nothing else on your machine changes | S2 | "Delete a container and nothing else on your machine changes" |
| A virtual machine (VM) also isolates software, but it does so by pretending to be a whole computer | S2 | "A virtual machine (VM) also isolates software, but it does so by pretending to be a whole computer" |
| Every VM boots its own complete operating system, including its own kernel, the core of the operating system that talks to the hardware | S2 | "Every VM boots its own complete operating system, including its own kernel, the core of the operating system that talks to the hardware" |
| A container is still a process, so every container on a machine shares that machine's kernel | S2 | "it's still a process, so every container on a machine shares that machine's kernel" |
| There is no operating system to boot, which is why a container starts in about a second and why one machine can run many of them | S2 | "There is no operating system to boot, which is why a container starts in about a second and why one machine can run many of them" |
| The trade-off is that a VM's isolation is stronger: containers that share a kernel are separated by that kernel, while VMs are separated by the hardware boundary the hypervisor creates | S2 | "The trade-off is that a VM's isolation is stronger: containers that share a kernel are separated by that kernel, while VMs are separated by the hardware boundary the hypervisor creates" |
| In practice, you'll often use both | S2 | "In practice, you'll often use both" |
| Cloud servers are usually VMs that run many containers each | S2 | "Cloud servers are usually VMs that run many containers each" |
| Docker Engine acts as a client-server application | S1 | "Docker Engine acts as a client-server application with" |
| It has a server with a long-running daemon process, dockerd | S1 | "a server with a long-running daemon process dockerd" |
| It has APIs, which specify interfaces that programs can use to talk to and instruct the Docker daemon | S1 | "APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon" |
| It has a command line interface (CLI) client, docker | S1 | "A command line interface (CLI) client docker" |
| The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands | S1 | "The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands" |
| The daemon creates and manages Docker objects, such as images, containers, networks, and volumes | S1 | "The daemon creates and manages Docker objects, such as images, containers, networks, and volumes" |
| The Docker Engine API is a RESTful API accessed by an HTTP client such as wget or curl, or the HTTP library which is part of most modern programming languages | S21 | "The Docker Engine API is a RESTful API accessed by an HTTP client such as wget or curl, or the HTTP library which is part of most modern programming languages" |
| The REST API endpoint (used by the Docker CLI to communicate with the Docker daemon) now uses a Unix socket instead of a TCP socket bound on 127.0.0.1 | S20 | "the REST API endpoint (used by the Docker CLI to communicate with the Docker daemon)" |
| The REST API endpoint (used by the Docker CLI to communicate with the Docker daemon) now uses a Unix socket instead of a TCP socket bound on 127.0.0.1 | S20 | "now uses a Unix socket instead of a TCP socket bound on 127.0.0.1" |
| You can also expose the REST API over HTTP if you explicitly decide to do so | S20 | "You can also expose the REST API over HTTP if you explicitly decide to do so" |
| docker pull downloads an image from a registry without running it | S2 | "docker pull downloads an image from a registry without running it" |
| docker run pulls the image it needs if it isn't on your machine yet | S2 | "docker run pulls the image it needs if it isn't on your machine yet" |
| If you don't name a registry, Docker uses Docker Hub | S2 | "If you don't name a registry, Docker uses Docker Hub" |
| The docker run command runs a command in a new container, pulling the image if needed and starting the container | S10 | "The docker run command runs a command in a new container, pulling the image if needed and starting the container" |
| With --pull, the value missing is the default: it pulls the image if it was not found in the image cache, or uses the cached image otherwise | S10 | "missing (default) pull the image if it was not found in the image cache, or use the cached image otherwise" |
| When a container starts, it uses the image's layers as they are and adds one thin writable layer of its own on top | S2 | "When a container starts, it uses the image's layers as they are and adds one thin writable layer of its own on top" |
| When you start Docker, a default bridge network (also called bridge) is created automatically, and newly-started containers connect to it unless otherwise specified | S23 | "when you start Docker, a default bridge network (also called bridge) is created automatically, and newly-started containers connect to it unless otherwise specified" |
| A stopped container isn't gone: its configuration and its writable layer are kept | S22 | "A stopped container isn't gone: its configuration and its writable layer are kept" |
| You can restart a stopped container with all its previous changes intact using docker start | S10 | "You can restart a stopped container with all its previous changes intact using docker start" |
| Images are immutable. Once built, an image never changes | S2 | "images are immutable. Once built, an image never changes" |
| An image isn't one big file; it's an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted | S3 | "An image isn't one big file. It's an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted" |
| Each Dockerfile instruction that changes files produces one layer, and once a layer is created, it never changes | S3 | "Each Dockerfile instruction that changes files produces one layer, and once a layer is created, it never changes" |
| Docker reuses a layer from an earlier build only when nothing it depends on has changed | S3 | "Docker reuses a layer from an earlier build only when nothing it depends on has changed" |
| When you start a container with docker run, behind the scenes Docker creates a set of namespaces and control groups for the container | S20 | "When you start a container with docker run, behind the scenes Docker creates a set of namespaces and control groups for the container" |
| Namespaces provide the first and most straightforward form of isolation | S20 | "Namespaces provide the first and most straightforward form of isolation" |
| Processes running within a container cannot see, and even less affect, processes running in another container, or in the host system | S20 | "Processes running within a container cannot see, and even less affect, processes running in another container, or in the host system" |
| Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose | S7 | "Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose" |
| docker image ls lists the images on your machine | S22 | "docker image ls lists the images on your machine" |
| docker image history lists an image's layers, newest first | S3 | "docker image history lists an image's layers, newest first" |
| docker ps shows only running containers | S22 | "docker ps shows only running containers" |
| docker ps shows only running containers; docker ps -a shows all of them | S22 | "docker ps shows only running containers" |
| docker ps shows only running containers; docker ps -a shows all of them | S22 | "docker ps -a shows all of them" |
| docker rm deletes the container and its writable layer | S22 | "docker rm deletes the container and its writable layer" |
| Files created inside a container are stored on a writable container layer on top of the read-only image layers. | S5 | "By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers" |
| Data written to the container layer doesn't persist when the container is destroyed. | S5 | "Data written to the container layer doesn't persist when the container is destroyed" |
| Ports of containers on bridge networks are accessible from the Docker host and other containers on the same network. | S6 | "all ports of containers on bridge networks are accessible from the Docker host and other containers connected to the same network" |
| They are not accessible from outside the host. | S6 | "Ports are not accessible from outside the host" |
| --publish or -p makes a port available outside the host; -p 8080:80 maps host port 8080 to container port 80. | S6 | "Use the --publish or -p flag to make a port available outside the host" |
| --publish or -p makes a port available outside the host; -p 8080:80 maps host port 8080 to container port 80. | S6 | "Map port 8080 on the Docker host to TCP port 80 in the container" |
| On Ubuntu you can install Docker Engine. | S8 | "Install Docker Engine on Ubuntu" |
| Verify the install with the hello-world image. | S8 | "Verify that the installation is successful by running the hello-world image" |
| It downloads a test image and runs it; the container prints a confirmation message and exits. | S8 | "This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits" |
| The docker group exists but contains no users, so you need sudo; the post-installation steps for Linux let non-privileged users run Docker. | S8 | "The docker user group exists but contains no users, which is why you're required to use sudo to run Docker commands" |
| The docker group exists but contains no users, so you need sudo; the post-installation steps for Linux let non-privileged users run Docker. | S8 | "Continue to Linux postinstall to allow non-privileged users to run Docker commands" |
| docker pull downloads an image from a registry. | S9 | "Download an image from a registry" |
| If no tag is provided, Docker Engine uses the :latest tag as a default. | S9 | "If no tag is provided, Docker Engine uses the :latest tag as a default" |
| Docker prints the digest of the image after the pull has finished. | S9 | "Docker prints the digest of the image after the pull has finished" |
| -d runs the container in the background and prints the container ID. | S10 | "Run container in background and print container ID" |
| --name assigns a name to the container. | S10 | "Assign a name to the container" |
| With the localhost IP address in the publish flag, only the Docker host can access the published port. | S6 | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port" |
| By default docker ps shows just running containers; -a shows all containers. | S11 | "Show all containers (default shows just running)" |
| docker logs fetches the logs of a container. | S12 | "Fetch the logs of a container" |
| docker exec executes a command in a running container. | S13 | "Execute a command in a running container" |
| docker stop stops one or more running containers. | S14 | "Stop one or more running containers" |
| docker rm removes one or more containers. | S15 | "Remove one or more containers" |
| --rm automatically removes the container and its associated anonymous volumes when it exits. | S10 | "Automatically remove the container and its associated anonymous volumes when it exits" |
| docker run creates and runs a new container from an image. | S10 | "Create and run a new container from an image" |
| Testcontainers provides throwaway, lightweight instances of databases, message brokers, web browsers, or anything that runs in a Docker container. | S18 | "Testcontainers is an open source library for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container" |
| You define test dependencies as code; containers are created and then deleted. | S18 | "Define your test dependencies as code, then simply run your tests and containers will be created and then deleted" |
| The project says that your tests will always start with a known state. | S18 | "Trust that your tests will always start with a known state" |
| The Playwright image includes the Playwright browsers and browser system dependencies. | S19 | "This image includes the Playwright browsers and browser system dependencies" |
| The Playwright package is not included in the image and should be installed separately. | S19 | "The Playwright package/dependency is not included in the image and should be installed separately" |
| The image is intended for testing and development purposes only. | S19 | "This Docker image is intended to be used for testing and development purposes only" |
| For end-to-end tests on trusted websites, Playwright's example runs a shell in the image. | S19 | "On trusted websites, you can avoid creating a separate user and use root" |
| For end-to-end tests on trusted websites, Playwright's example runs a shell in the image. | S19 | "docker run -it --rm --ipc" |
| For end-to-end tests on trusted websites, Playwright's example runs a shell in the image. | S19 | "mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash" |
| --ipc=host is recommended when using Chromium. | S19 | "Using --ipc=host is recommended when using Chromium" |
| docker pull ubuntu:24.04 pulls the latest version of the Ubuntu 24.04 image. | S9 | "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu 24.04 image" |
| Pulling by digest specifies exactly which version to pull, pins it, and guarantees the same image. | S9 | "When pulling an image by digest, you specify exactly which version of an image to pull" |
| Pulling by digest specifies exactly which version to pull, pins it, and guarantees the same image. | S9 | "guarantee that the image you're using is always the same" |
| docker image ls --digests shows digests. | S16 | "Show digests" |
| docker logs --timestamps adds an RFC3339Nano timestamp to each log entry. | S12 | "will add an RFC3339Nano timestamp" |
| --since shows only logs generated after a given date, or a relative time such as 42m. | S12 | "The --since option shows only the container logs generated after a given date" |
| --since shows only logs generated after a given date, or a relative time such as 42m. | S12 | "42m for 42 minutes" |
| docker inspect returns low-level information on Docker objects, as a JSON array by default. | S17 | "Return low-level information on Docker objects" |
| docker inspect returns low-level information on Docker objects, as a JSON array by default. | S17 | "By default, docker inspect will render results in a JSON array" |
| Publishing container ports is insecure by default: the port is available to the outside world as well. | S6 | "Publishing container ports is insecure by default" |
| Publishing container ports is insecure by default: the port is available to the outside world as well. | S6 | "it becomes available not only to the Docker host, but to the outside world as well" |
| If the Playwright version of the image does not match the project, Playwright can't locate browser executables. | S19 | "If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables" |
| If the container does not exit after the timeout, it's killed with SIGKILL; --timeout sets the seconds to wait. | S14 | "If the container does not exit after the timeout elapses, it's forcibly killed with a SIGKILL signal" |
| If the container does not exit after the timeout, it's killed with SIGKILL; --timeout sets the seconds to wait. | S14 | "The --timeout flag sets the number of seconds to wait for the container to stop" |
