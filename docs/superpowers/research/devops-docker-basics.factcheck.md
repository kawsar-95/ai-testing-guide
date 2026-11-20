# Fact check: devops / docker-basics

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.docker.com/get-started/docker-overview/. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / docker-basics (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "Containers versus virtual machines, and the first Docker commands." | none | N/A | This sentence describes the page itself. It is not a fact about a tool, command, or number. Note: the page body never covers "first Docker commands". |
| 1 | Docker is an open platform for developing, shipping, and running applications | 1 | PASS | "Docker is an open platform for developing, shipping, and running applications." (S1.txt line 276) |
| 2 | Docker enables you to separate your applications from your infrastructure so you can deliver software quickly | 1 | PASS | "Docker enables you to separate your applications from your infrastructure so you can deliver software quickly." (S1.txt lines 277-278) |
| 3 | Docker is lightweight and fast | 1 | PASS | "Docker is lightweight and fast." (S1.txt line 301) |
| 4 | It provides a viable, cost-effective alternative to hypervisor-based virtual machines | 1 | PASS | "It provides a viable, cost-effective alternative to hypervisor-based virtual machines, so you can use more of your server" (S1.txt lines 301-302) |

Open FAILs after round 1: 0

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / docker-basics (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "What Docker is, and how it compares with virtual machines. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The sentence describes the page itself. It states no fact about a tool, product, command or number. |
| 1 | Docker is an open platform for developing, shipping, and running applications | S1 | PASS | "Docker is an open platform for developing, shipping, and running applications." |
| 2 | Docker enables you to separate your applications from your infrastructure so you can deliver software quickly | S1 | PASS | "Docker enables you to separate your applications from your infrastructure so you can deliver software quickly." The sentence wraps across two lines in the file. |
| 3 | Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines | S1 | PASS | "Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines" |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / docker-basics (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "What Docker is, and how it compares with virtual machines. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It gives no fact about a tool, product, command, or number. |
| 1 | Docker is an open platform for developing, shipping, and running applications | S1 | PASS | "Docker is an open platform for developing, shipping, and running applications." |
| 2 | Docker enables you to separate your applications from your infrastructure so you can deliver software quickly | S1 | PASS | "Docker enables you to separate your applications from your infrastructure so you can deliver software quickly." |
| 3 | Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines | S1 | PASS | "Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines" |

Open FAILs after round 4: 0

Changed after this round: The text was not changed. Round 5 is a second fresh checker of the same text: five other pages were changed after round 4, and so that every page has its last round after the last change, all 24 were checked again.

## Round 5 (2026-11-05)

## Fact check: devops / docker-basics (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "What Docker is, and how it compares with virtual machines. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line describes the page itself. It states no fact about a tool, product, command, or number. |
| 1 | Docker is an open platform for developing, shipping, and running applications. | S1 | PASS | "Docker is an open platform for developing, shipping, and running applications." |
| 2 | Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. | S1 | PASS | "Docker enables you to separate your applications from your infrastructure so you can deliver software quickly." |
| 3 | Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines. | S1 | PASS | "Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines" |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 19 sources. Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-16)

# Fact check: devops / docker-basics (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Containers, images, registries, client/daemon, first commands | none | N/A | Describes the page itself. |
| 2 | Lede | Page explains Docker for a tester, with a practice run; link to the next page | none | N/A | Describes the page itself. The link is a site path. |
| 3 | What it is | Docker is an open platform for developing, shipping, and running applications | 1 | PASS | S1: "Docker is an open platform for developing, shipping, and running applications." |
| 4 | What it is | Docker packages and runs an application in a loosely isolated environment called a container | 1 | PASS | S1: "Docker provides the ability to package and run an application in a loosely isolated environment called a container." |
| 5 | What it is | Containers are lightweight and contain everything needed, so you don't need to rely on the host | 1 | PASS | S1: "Containers are lightweight and contain everything needed to run the application, so you don't need to rely on what's installed on the host." |
| 6 | What it is | Table: a container is a runnable instance of an image | 1 | PASS | S1: "A container is a runnable instance of an image." |
| 7 | What it is | Table: containers are isolated processes for each of your app's components | 2 | PASS | S2: "Simply put, containers are isolated processes for each of your app's components." |
| 8 | What it is | Table: an image is a standardized package with files, binaries, libraries, configurations | 3 | PASS | S3: "A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container." |
| 9 | What it is | Table: a registry is a centralized location for storing and sharing container images. Docker Hub is a public registry that anyone can use, and it is the default | 4 | PASS | S4: "An image registry is a centralized location for storing and sharing your container images... Docker Hub is a public registry that anyone can use and is the default registry." |
| 10 | What it is | Developers use Docker to push applications into a test environment and run automated and manual tests | 1 | PASS | S1: "They use Docker to push their applications into a test environment and run automated and manual tests." |
| 11 | What it is | When they find bugs, they fix them and redeploy to the test environment | 1 | PASS | S1: "When developers find bugs, they can fix them in the development environment and redeploy them to the test environment for testing and validation." |
| 12 | What it is | You can share containers and be sure everyone gets the same container that works the same way | 1 | PASS | S1: "You can share containers while you work, and be sure that everyone you share with gets the same container that works in the same way." |
| 13 | What it is | A VM is an entire OS with its own kernel, hardware drivers, programs, applications | 2 | PASS | S2: "a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications." |
| 14 | What it is | A container is an isolated process with all the files it needs | 2 | PASS | S2: "A container is simply an isolated process with all of the files it needs to run." |
| 15 | What it is | Multiple containers share the same kernel, so you can run more applications on less infrastructure | 2 | PASS | S2: "they all share the same kernel, allowing you to run more applications on less infrastructure." |
| 16 | What it is | VMs and containers are often used together; cloud machines are typically VMs; a VM with a container runtime runs multiple containerized applications | 2 | PASS | S2: "Quite often, you will see containers and VMs used together... the provisioned machines are typically VMs... a VM with a container runtime can run multiple containerized applications". |
| 17 | How it works | Docker uses a client-server architecture | 1 | PASS | S1: "Docker uses a client-server architecture." |
| 18 | How it works | The client (`docker`) sends commands such as `docker run` to the daemon (`dockerd`), which carries them out | 1 | PASS | S1: "When you use commands such as docker run, the client sends these commands to dockerd, which carries them out." |
| 19 | How it works | The daemon listens for Docker API requests and manages images, containers, networks, volumes | 1 | PASS | S1: "The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes." |
| 20 | How it works | Client and daemon communicate using a REST API, over UNIX sockets or a network interface | 1 | PASS | S1: "communicate using a REST API, over UNIX sockets or a network interface." |
| 21 | How it works | `docker pull` or `docker run` pulls the required images from your configured registry | 1 | PASS | S1: "When you use the docker pull or docker run commands, Docker pulls the required images from your configured registry." |
| 22 | How it works | Diagram, "the tutorial's own summary of those sentences" | none | N/A | Framing sentence. The diagram content matches rows 17-21. "Docker Hub by default" is in S1: "Docker looks for images on Docker Hub by default." |
| 23 | How it works | Docker's overview follows `docker run -i -t ubuntu /bin/bash` step by step | 1 | PASS | S1: "$ docker run -i -t ubuntu /bin/bash" and "When you run this command, the following happens". |
| 24 | How it works | Step 1: pulls `ubuntu` from the configured registry if not local | 1 | PASS | S1: "If you don't have the ubuntu image locally, Docker pulls it from your configured registry". |
| 25 | How it works | Step 2: Docker creates a new container | 1 | PASS | S1: "Docker creates a new container". |
| 26 | How it works | Step 3: read-write filesystem as the container's final layer | 1 | PASS | S1: "Docker allocates a read-write filesystem to the container, as its final layer." |
| 27 | How it works | Step 4: network interface, default network, IP address | 1 | PASS | S1: "Docker creates a network interface to connect the container to the default network... This includes assigning an IP address to the container." |
| 28 | How it works | Step 5: starts the container and executes `/bin/bash` | 1 | PASS | S1: "Docker starts the container and executes /bin/bash." |
| 29 | How it works | Step 6: on `exit` the container stops but isn't removed; you can start it again or remove it | 1 | PASS | S1: "the container stops but isn't removed. You can start it again or remove it." |
| 30 | How it works | Images are immutable; once created, they can't be modified | 3 | PASS | S3: "Images are immutable. Once an image is created, it can't be modified." |
| 31 | How it works | Images are composed of layers; each layer is a set of file system changes | 3 | PASS | S3: "Container images are composed of layers. Each layer represents a set of file system changes". |
| 32 | How it works | Each Dockerfile instruction creates a layer | 1 | PASS | S1: "Each instruction in a Dockerfile creates a layer in the image." |
| 33 | How it works | After a Dockerfile change and rebuild, only changed layers are rebuilt | 1 | PASS | S1: "only those layers which have changed are rebuilt." |
| 34 | How it works | By default, files created in a container go to a writable layer on top of the read-only, immutable image layers | 5 | PASS | S5: "By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers." |
| 35 | How it works | Data in the container layer doesn't persist when the container is destroyed | 5 | PASS | S5: "Data written to the container layer doesn't persist when the container is destroyed." |
| 36 | How it works | "Docker in Practice shows how volumes keep data" | none | N/A | Link to another page of the site, not a fact. |
| 37 | How it works | Docker uses namespaces to provide the isolated workspace called the container | 1 | PASS | S1: "Docker uses a technology called namespaces to provide the isolated workspace called the container." |
| 38 | How it works | Each aspect of a container runs in a separate namespace, with access limited to it | 1 | PASS | S1: "Each aspect of a container runs in a separate namespace and its access is limited to that namespace." |
| 39 | How it works | All ports of containers on bridge networks are reachable from the Docker host and other containers on the same network | 6 | PASS | S6: "all ports of containers on bridge networks are accessible from the Docker host and other containers connected to the same network." |
| 40 | How it works | They are not accessible from outside the host | 6 | PASS | S6: "Ports are not accessible from outside the host". |
| 41 | How it works | `--publish` or `-p` makes a port available outside the host; `-p 8080:80` maps host port 8080 to TCP port 80 | 6 | PASS | S6: "Use the --publish or -p flag to make a port available outside the host" and "-p 8080:80 Map port 8080 on the Docker host to TCP port 80 in the container." |
| 42 | Try it | Practice run needs only Docker | none | N/A | Framing sentence. |
| 43 | Try it | Docker Desktop delivers all Docker tools to a Mac, Windows, or Linux computer | 7 | PASS | S7: "delivers all Docker tools to your Mac." / "...to your Windows computer." / "...to your Linux computer." |
| 44 | Try it | On Ubuntu you can also install Docker Engine | 8 | PASS | S8 is the Ubuntu install page: "$ sudo apt install docker-ce docker-ce-cli containerd.io..." |
| 45 | Try it | The tutorial ran these steps on 2026-11-16 with Docker Engine 29.9.3; your IDs, sizes, and times will differ | none | N/A | A record of the tutorial's own run, not a source fact. No file in `pages/` can confirm the date or version. |
| 46 | Try it | Step 1: run the `hello-world` image | 8 | PASS | S8: "Verify that the installation is successful by running the hello-world image". |
| 47 | Try it | It downloads a test image and runs it in a container; the container prints a confirmation message and exits | 8 | PASS | S8: "This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits." |
| 48 | Try it | After install on Ubuntu, the `docker` group exists but has no users, so `sudo` is needed until the post-installation steps | 8 | PASS | S8: "The docker user group exists but contains no users, which is why you're required to use sudo to run Docker commands. Continue to Linux postinstall". |
| 49 | Try it | Code block `docker run hello-world` | 8 | PASS | S8: "sudo docker run hello-world". The page drops `sudo`, which is covered by the next sentence about the `docker` group. |
| 50 | Try it | Output "Hello from Docker! This message shows that your installation appears to be working correctly." (from the tutorial's run) | none | N/A | Output of the tutorial's own run. This text is in no file in `pages/`. S8 says only "it prints a confirmation message". |
| 51 | Try it | `docker pull` downloads an image from a registry | 9 | PASS | S9: "Download an image from a registry". |
| 52 | Try it | With no tag, Docker Engine uses `:latest` as a default | 9 | PASS | S9: "Docker Engine uses the :latest tag as a default." |
| 53 | Try it | `docker image ls` lists images on your system; `docker image history` lists the layers of an image | 3 | PASS | S3: "The command shows a list of Docker images currently available on your system." and "List the image's layers using the docker image history command". |
| 54 | Try it | Code block: `docker pull docker/welcome-to-docker`, `docker image ls`, `docker image history docker/welcome-to-docker` | 3 | PASS | S3: "docker image ls", "docker image history docker/welcome-to-docker". |
| 55 | Try it | Docker prints the digest of the image after the pull has finished | 9 | PASS | S9: "Docker prints the digest of the image after the pull has finished." |
| 56 | Try it | The newest layer of the history copied `/app/build` to `/usr/share/nginx/html`. Docker's own example has the same line | 3 | PASS | S3: "COPY /app/build /usr/share/nginx/html # buil…". The values in the page's output block (ID, 15 months ago, 1.65MB) are the tutorial's own run. S3 shows "648f93a1ba7d 4 months ago... 1.6MB". |
| 57 | Try it | Step 3: `-d` runs in the background and prints the container ID | 10 | PASS | S10: "-d, --detach Run container in background and print container ID". |
| 58 | Try it | `--name` assigns a name to the container | 10 | PASS | S10: "--name Assign a name to the container". |
| 59 | Try it | With the localhost IP in the publish flag, only the Docker host can access the published port; run command with `-p 127.0.0.1:8080:80 --name welcome` | 6 | PASS | S6: "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 60 | Try it | Then visit `http://localhost:8080` in your browser | 2 | PASS | S2: "visit http://localhost:8080 in your browser." |
| 61 | Try it | Step 4: `docker ps` shows the running containers | 2 | PASS | S2: "The docker ps command will show you only running containers". |
| 62 | Try it | `docker logs` fetches the logs of a container | 12 | PASS | S12: "Fetch the logs of a container". |
| 63 | Try it | `docker exec` executes a command in a running container | 13 | PASS | S13: "Execute a command in a running container". |
| 64 | Try it | Code block: `docker ps`, `docker logs welcome`, `docker exec welcome ls /usr/share/nginx/html` | 13 | PASS | The commands follow from rows 61-63. The `welcome` name comes from row 58 and the path from row 56. |
| 65 | Try it | The tutorial's run output: `docker ps` row and `ls` file list | none | N/A | Output of the tutorial's own run. It is in no file in `pages/` and cannot be checked. |
| 66 | Try it | Step 5: `docker stop` stops one or more running containers | 14 | PASS | S14: "Stop one or more running containers". |
| 67 | Try it | By default `docker ps` shows just running containers; `-a` shows all | 11 | PASS | S11: "-a, --all Show all containers (default shows just running)". |
| 68 | Try it | `docker rm` removes one or more containers | 15 | PASS | S15: "Remove one or more containers". |
| 69 | Try it | When a container is removed, state changes not in persistent storage disappear | 1 | PASS | S1: "When a container is removed, any changes to its state that aren't stored in persistent storage disappear." |
| 70 | Try it | Code block: `docker stop welcome`, `docker ps -a`, `docker rm welcome` | 14, 11, 15 | PASS | Commands match rows 66-68. |
| 71 | Try it | Step 6: `--rm` automatically removes the container and its anonymous volumes when it exits; `docker run --rm hello-world` | 10 | PASS | S10: "--rm Automatically remove the container and its associated anonymous volumes when it exits". |
| 72 | How a tester uses it | Testcontainers is an open source library for throwaway, lightweight instances of databases, message brokers, web browsers, or anything that runs in a Docker container | 18 | PASS | S18: "Testcontainers is an open source library for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container." |
| 73 | How a tester uses it | You define test dependencies as code; containers are created and then deleted when tests run | 18 | PASS | S18: "Define your test dependencies as code, then simply run your tests and containers will be created and then deleted." |
| 74 | How a tester uses it | The project says tests will always start with a known state | 18 | PASS | S18: "Trust that your tests will always start with a known state." |
| 75 | How a tester uses it | Playwright publishes a Docker image with the browsers and browser system dependencies | 19 | PASS | S19: "This image includes the Playwright browsers and browser system dependencies." |
| 76 | How a tester uses it | The Playwright package is not in the image and should be installed separately | 19 | PASS | S19: "The Playwright package/dependency is not included in the image and should be installed separately." |
| 77 | How a tester uses it | The image is intended for testing and development only | 19 | PASS | S19: "This Docker image is intended to be used for testing and development purposes only." |
| 78 | How a tester uses it | For end-to-end tests on trusted websites, Playwright's example starts a shell; code block with `--ipc=host` and `playwright:v1.64.1-noble` | 19 | PASS | S19: "On trusted websites... docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash". |
| 79 | How a tester uses it | Using `--ipc=host` is recommended when using Chromium | 19 | PASS | S19: "Using --ipc=host is recommended when using Chromium." |
| 80 | How a tester uses it | Link to CI/CD Pipelines page | none | N/A | Link to another page of the site, not a fact. |
| 81 | How a tester uses it | `docker pull ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | 9 | PASS | S9: "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu". |
| 82 | How a tester uses it | Pulling by digest specifies exactly which version to pull | 9 | PASS | S9: "When pulling an image by digest, you specify exactly which version of an image to pull." |
| 83 | How a tester uses it | That lets you pin an image and guarantee it is always the same | 9 | PASS | S9: "allows you to "pin" an image to that version, and guarantee that the image you're using is always the same." |
| 84 | How a tester uses it | `docker image ls --digests` shows the digests of your images | 16 | PASS | S16: "--digests Show digests". |
| 85 | How a tester uses it | `docker logs --timestamps` adds an RFC3339Nano timestamp to each log entry | 12 | PASS | S12: "The docker logs --timestamps command will add an RFC3339Nano timestamp". |
| 86 | How a tester uses it | `--since` shows only logs generated after a given date, or a relative time such as `42m` | 12 | PASS | S12: "The --since option shows only the container logs generated after" and "relative (e.g. 42m for 42 minutes)". |
| 87 | How a tester uses it | `docker inspect` returns low-level information on Docker objects; by default a JSON array | 17 | PASS | S17: "Return low-level information on Docker objects" and "By default, docker inspect will render results in a JSON array." |
| 88 | How a tester uses it | Data in the container layer doesn't persist when the container is destroyed | 5 | PASS | S5: "Data written to the container layer doesn't persist when the container is destroyed." |
| 89 | How a tester uses it | Each `docker run --rm` starts a new container from the image, and removes it when it exits | 10 | PASS | S10: "runs a command in a new container" and "--rm Automatically remove the container ... when it exits". |
| 90 | Common mistakes | Container-layer data doesn't persist when the container is destroyed | 5 | PASS | S5: "Data written to the container layer doesn't persist when the container is destroyed." |
| 91 | Common mistakes | "Keep data that must survive in a volume" with link | none | N/A | Advice that points to another page of the site. No tool fact beyond what the page already gives. |
| 92 | Common mistakes | Publishing container ports is insecure by default; the port is available to the outside world | 6 | PASS | S6: "Publishing container ports is insecure by default... it becomes available not only to the Docker host, but to the outside world as well." |
| 93 | Common mistakes | Include `127.0.0.1` in the publish flag so only the Docker host can access the port | 6 | PASS | S6: "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 94 | Common mistakes | If no tag is given, Docker Engine uses `:latest`; `ubuntu:24.04` pulls the latest Ubuntu 24.04 image | 9 | PASS | S9: "Docker Engine uses the :latest tag as a default" and "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu". |
| 95 | Common mistakes | Pull by digest when you need the same image every time | 9 | PASS | S9: "guarantee that the image you're using is always the same." |
| 96 | Common mistakes | If the Playwright version in your image does not match your project or tests, Playwright can't locate browser executables | 19 | PASS | S19: "If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables." |
| 97 | Common mistakes | `docker ps` shows only running containers; `-a` lists all | 2 | PASS | S2: "The docker ps command will show you only running containers. To view stopped containers, add the -a flag to list all containers". |
| 98 | Common mistakes | If the container doesn't exit after the timeout, it is killed with `SIGKILL` | 14 | PASS | S14: "If the container does not exit after the timeout elapses, it's forcibly killed with a SIGKILL signal." |
| 99 | Common mistakes | `--timeout` sets the number of seconds to wait | 14 | PASS | S14: "The --timeout flag sets the number of seconds to wait for the container". |
| 100 | What a tester can check | Callout "Tutorial advice", six advice items | none | PASS | The callout says "This list is the tutorial's own advice". Each item restates a fact that is already supported above (`127.0.0.1` publish, `--rm`, `--timestamps`, Playwright version match, digests). It adds no new tool fact. |
| 101 | Key words | Docker: an open platform for developing, shipping, and running applications | none | PASS | Page, What it is: "Docker is an open platform for developing, shipping, and running applications". |
| 102 | Key words | Container: a runnable instance of an image: an isolated process with all the files it needs | none | PASS | Page: "A runnable instance of an image" and "A container is simply an isolated process with all of the files it needs to run". |
| 103 | Key words | Image: a standardized package with files, binaries, libraries, configurations | none | PASS | Page: "A standardized package that includes all of the files, binaries, libraries, and configurations to run a container". |
| 104 | Key words | Layer: a set of file system changes; an image is composed of layers | none | PASS | Page: "Container images are composed of layers, and each layer represents a set of file system changes". |
| 105 | Key words | Writable container layer: stores files created in a container; data doesn't persist when destroyed | none | PASS | Page: "all files created inside a container are stored on a writable container layer" and "doesn't persist when the container is destroyed". |
| 106 | Key words | Registry: a centralized location for storing and sharing container images | none | PASS | Page: "A centralized location for storing and sharing your container images". |
| 107 | Key words | Docker Hub: a public registry anyone can use, and the default | none | PASS | Page: "Docker Hub is a public registry that anyone can use and is the default registry". |
| 108 | Key words | Docker daemon (`dockerd`): listens for API requests and manages images, containers, networks, volumes | none | PASS | Page: "The daemon listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes". |
| 109 | Key words | Docker client (`docker`): sends commands such as `docker run` to the daemon | none | PASS | Page: "the Docker client (`docker`) sends these commands to the Docker daemon (`dockerd`)". |
| 110 | Key words | Tag (`:latest`): the tag Docker Engine uses as a default when none is given | none | PASS | Page: "If no tag is provided, Docker Engine uses the `:latest` tag as a default". |
| 111 | Key words | Digest: pulling by digest specifies exactly which version to pull | none | PASS | Page: "When you pull an image by digest, you specify exactly which version of an image to pull". |
| 112 | Key words | Publish (`-p`): makes a container port available outside the host, as in `-p 8080:80` | none | PASS | Page: "The `--publish` or `-p` flag makes a port available outside the host: `-p 8080:80` maps port 8080..." |
| 113 | Key words | Namespaces: the technology Docker uses to provide the isolated workspace called the container | none | PASS | Page: "Docker uses a technology called namespaces to provide the isolated workspace called the container". |

Open FAILs after round 6: 0

Changed after this round: No FAIL in this round. The voices report of this round had 2 FAILs, so the page changed and round 7 checks it again.

## Round 7 (2026-11-16)

# Fact check: devops / docker-basics (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Containers, images, registries, client and daemon, first commands | none | N/A | Describes the page itself. |
| 2 | Lede | Page explains Docker for a tester, with a practice run; links to another page | none | N/A | Framing sentence, and a site link. |
| 3 | What it is | Docker is an open platform for developing, shipping, and running applications | S1 | PASS | "Docker is an open platform for developing, shipping, and running applications." |
| 4 | What it is | Docker can package and run an app in a loosely isolated environment called a container | S1 | PASS | "Docker provides the ability to package and run an application in a loosely isolated environment called a container." |
| 5 | What it is | Containers are lightweight and contain everything needed, so you don't rely on the host | S1 | PASS | "Containers are lightweight and contain everything needed to run the application, so you don't need to rely on what's installed on the host." |
| 6 | What it is | Table: Container is a runnable instance of an image | S1 | PASS | "A container is a runnable instance of an image." |
| 7 | What it is | Table: containers are isolated processes for each of your app's components | S2 | PASS | "containers are isolated processes for each of your app's components." |
| 8 | What it is | Table: Image is a standardized package with files, binaries, libraries, configurations | S3 | PASS | "A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container." |
| 9 | What it is | Table: Registry is a centralized location for storing and sharing container images; Docker Hub is public, anyone can use it, and is the default | S4 | PASS | "An image registry is a centralized location for storing and sharing your container images." "Docker Hub is a public registry that anyone can use and is the default registry." |
| 10 | What it is | Developers use Docker to push apps into a test environment and run automated and manual tests | S1 | PASS | "They use Docker to push their applications into a test environment and run automated and manual tests." |
| 11 | What it is | When they find bugs, they fix them and redeploy to the test environment for testing and validation | S1 | PASS | "When developers find bugs, they can fix them in the development environment and redeploy them to the test environment for testing and validation." |
| 12 | What it is | You can share containers and be sure everyone gets the same container that works the same way | S1 | PASS | "You can share containers while you work, and be sure that everyone you share with gets the same container that works in the same way." |
| 13 | What it is | A VM is an entire OS with its own kernel, hardware drivers, programs, applications | S2 | PASS | "a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications." |
| 14 | What it is | A container is an isolated process with all the files it needs | S2 | PASS | "A container is simply an isolated process with all of the files it needs to run." |
| 15 | What it is | Multiple containers share the same kernel, so you can run more apps on less infrastructure | S2 | PASS | "If you run multiple containers, they all share the same kernel, allowing you to run more applications on less infrastructure." |
| 16 | What it is | VMs and containers are often used together; in a cloud the machines are typically VMs; a VM with a container runtime can run multiple containerized apps | S2 | PASS | "in a cloud environment, the provisioned machines are typically VMs. However, ... a VM with a container runtime can run multiple containerized applications" |
| 17 | How it works | Docker uses a client-server architecture | S1 | PASS | "Docker uses a client-server architecture." |
| 18 | How it works | The client (`docker`) sends commands such as `docker run` to the daemon (`dockerd`), which carries them out | S1 | PASS | "When you use commands such as docker run, the client sends these commands to dockerd, which carries them out." |
| 19 | How it works | The daemon listens for API requests and manages images, containers, networks, volumes | S1 | PASS | "The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes." |
| 20 | How it works | Client and daemon communicate with a REST API over UNIX sockets or a network interface | S1 | PASS | "The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface." |
| 21 | How it works | `docker pull` or `docker run` pulls required images from the configured registry | S1 | PASS | "When you use the docker pull or docker run commands, Docker pulls the required images from your configured registry." |
| 22 | How it works | Diagram (tutorial's own summary: client, REST API, daemon, pull, Docker Hub by default, manages objects) | none | PASS | Covered by the sentences it summarises (rows 17-21). "Docker looks for images on Docker Hub by default." (S1) |
| 23 | How it works | The overview follows `docker run -i -t ubuntu /bin/bash` step by step | S1 | PASS | "$ docker run -i -t ubuntu /bin/bash" "When you run this command, the following happens" |
| 24 | How it works | Step 1: pulls the `ubuntu` image from the configured registry if not local | S1 | PASS | "If you don't have the ubuntu image locally, Docker pulls it from your configured registry" |
| 25 | How it works | Step 2: Docker creates a new container | S1 | PASS | "Docker creates a new container" |
| 26 | How it works | Step 3: allocates a read-write filesystem as its final layer | S1 | PASS | "Docker allocates a read-write filesystem to the container, as its final layer." |
| 27 | How it works | Step 4: creates a network interface to the default network, including assigning an IP address | S1 | PASS | "Docker creates a network interface to connect the container to the default network ... This includes assigning an IP address to the container." |
| 28 | How it works | Step 5: starts the container and executes `/bin/bash` | S1 | PASS | "Docker starts the container and executes /bin/bash." |
| 29 | How it works | Step 6: on `exit` the container stops but isn't removed; you can start it again or remove it | S1 | PASS | "When you run exit to terminate the /bin/bash command, the container stops but isn't removed. You can start it again or remove it." |
| 30 | How it works | Images are immutable: once created, can't be modified | S3 | PASS | "Images are immutable. Once an image is created, it can't be modified." |
| 31 | How it works | Images are composed of layers; each layer is a set of file system changes | S3 | PASS | "Container images are composed of layers. Each layer represents a set of file system changes" |
| 32 | How it works | Each Dockerfile instruction creates a layer | S1 | PASS | "Each instruction in a Dockerfile creates a layer in the image." |
| 33 | How it works | After a Dockerfile change and rebuild, only changed layers are rebuilt | S1 | PASS | "only those layers which have changed are rebuilt." |
| 34 | How it works | By default, files created in a container go to a writable container layer on top of the read-only, immutable image layers | S5 | PASS | "By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers." |
| 35 | How it works | Data in the container layer doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 36 | How it works | Docker uses namespaces to provide the isolated workspace called the container | S1 | PASS | "Docker uses a technology called namespaces to provide the isolated workspace called the container." |
| 37 | How it works | Each aspect of a container runs in a separate namespace; access is limited to it | S1 | PASS | "Each aspect of a container runs in a separate namespace and its access is limited to that namespace." |
| 38 | How it works | Ports of containers on bridge networks are accessible from the host and other containers on the same network | S6 | PASS | "all ports of containers on bridge networks are accessible from the Docker host and other containers connected to the same network." |
| 39 | How it works | They are not accessible from outside the host | S6 | PASS | "Ports are not accessible from outside the host" |
| 40 | How it works | `--publish` or `-p` makes a port available outside the host; `-p 8080:80` maps host 8080 to TCP port 80 in the container | S6 | PASS | "Use the --publish or -p flag to make a port available outside the host" "-p 8080:80 Map port 8080 on the Docker host to TCP port 80 in the container." |
| 41 | Try it | Docker Desktop delivers all Docker tools to Mac, Windows, or Linux | S7 | PASS | "A native Windows application that delivers all Docker tools to your Windows computer." (same sentence for Mac and Linux) |
| 42 | Try it | On Ubuntu you can also install Docker Engine | S8 | PASS | Page title "Install Docker Engine on Ubuntu". |
| 43 | Try it | Tutorial ran these steps on 2026-11-16 with Docker Engine 29.9.3; IDs, sizes, times will differ | none | N/A | The tutorial's own run, not a claim about a tool. |
| 44 | Try it | Step 1: run the `hello-world` image; `docker run hello-world` | S8 | PASS | "Verify that the installation is successful by running the hello-world image:" "$ sudo docker run hello-world" |
| 45 | Try it | Step 1: downloads a test image, runs it in a container; the container prints a confirmation message and exits | S8 | PASS | "This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits." |
| 46 | Try it | Step 1: `docker` group exists but has no users, so `sudo` is needed until the post-installation steps | S8 | PASS | "The docker user group exists but contains no users, which is why you’re required to use sudo to run Docker commands. Continue to Linux postinstall" |
| 47 | Try it | Step 1: output start "Hello from Docker!" | none | N/A | The tutorial's own run output. |
| 48 | Try it | Step 2: `docker pull` downloads an image from a registry | S9 | PASS | "Download an image from a registry" |
| 49 | Try it | Step 2: no tag means `:latest` by default | S9 | PASS | "If no tag is provided, Docker Engine uses the :latest tag as a default." |
| 50 | Try it | Step 2: `docker image ls` lists images; `docker image history` lists layers; code block | S3 | PASS | "List your downloaded images using the docker image ls command" "List the image's layers using the docker image history command" |
| 51 | Try it | Step 2: Docker prints the digest after the pull | S9 | PASS | "Docker prints the digest of the image after the pull has finished." |
| 52 | Try it | Step 2: newest history layer copied `/app/build` to `/usr/share/nginx/html`; Docker's example has the same line | S3 | PASS | "648f93a1ba7d 4 months ago COPY /app/build /usr/share/nginx/html # buil… 1.6MB" (the tutorial's own IDs and sizes are its own run) |
| 53 | Try it | Step 3: `-d` runs in the background and prints the container ID | S10 | PASS | "Run container in background and print container ID" |
| 54 | Try it | Step 3: `--name` assigns a name | S10 | PASS | "Assign a name to the container" |
| 55 | Try it | Step 3: with the localhost IP in the publish flag only the Docker host can access the port; code block | S6 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 56 | Try it | Step 3: visit `http://localhost:8080` | S2 | PASS | "visit http://localhost:8080 in your browser." |
| 57 | Try it | Step 4: `docker ps` shows running containers | S2 | PASS | "The docker ps command will show you only running containers." |
| 58 | Try it | Step 4: `docker logs` fetches logs of a container | S12 | PASS | "Fetch the logs of a container" |
| 59 | Try it | Step 4: `docker exec` executes a command in a running container; code block and output | S13 | PASS | "Execute a command in a running container" (output is the tutorial's own run) |
| 60 | Try it | Step 5: `docker stop` stops one or more running containers | S14 | PASS | "Stop one or more running containers" |
| 61 | Try it | Step 5: by default `docker ps` shows just running containers; `-a` shows all | S11 | PASS | "-a, --all Show all containers (default shows just running)" |
| 62 | Try it | Step 5: `docker rm` removes one or more containers | S15 | PASS | "Remove one or more containers" |
| 63 | Try it | Step 5: when a container is removed, changes not in persistent storage disappear | S1 | PASS | "When a container is removed, any changes to its state that aren't stored in persistent storage disappear." |
| 64 | Try it | Step 6: `--rm` automatically removes the container and its anonymous volumes when it exits | S10 | PASS | "Automatically remove the container and its associated anonymous volumes when it exits" |
| 65 | How a tester uses it | Testcontainers is an open source library for throwaway, lightweight instances of databases, message brokers, web browsers, or anything that runs in a Docker container | S18 | PASS | "Testcontainers is an open source library for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container." |
| 66 | How a tester uses it | You define test dependencies as code; containers are created and then deleted | S18 | PASS | "Define your test dependencies as code, then simply run your tests and containers will be created and then deleted." |
| 67 | How a tester uses it | The project says tests will always start with a known state | S18 | PASS | "Trust that your tests will always start with a known state." |
| 68 | How a tester uses it | Playwright image includes the browsers and browser system dependencies | S19 | PASS | "This image includes the Playwright browsers and browser system dependencies." |
| 69 | How a tester uses it | Playwright package is not in the image and should be installed separately | S19 | PASS | "The Playwright package/dependency is not included in the image and should be installed separately." |
| 70 | How a tester uses it | Image is intended for testing and development only | S19 | PASS | "This Docker image is intended to be used for testing and development purposes only." |
| 71 | How a tester uses it | For E2E tests on trusted websites, the example starts a shell; code block | S19 | PASS | "On trusted websites, you can avoid creating a separate user ..." "docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash" |
| 72 | How a tester uses it | `--ipc=host` is recommended with Chromium | S19 | PASS | "Using --ipc=host is recommended when using Chromium." |
| 73 | How a tester uses it | `docker pull ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | S9 | PASS | "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu" |
| 74 | How a tester uses it | Pulling by digest specifies exactly which version | S9 | PASS | "When pulling an image by digest, you specify exactly which version of an image to pull." |
| 75 | How a tester uses it | That lets you pin an image and guarantee it is always the same | S9 | PASS | "allows you to "pin" an image to that version, and guarantee that the image you're using is always the same." |
| 76 | How a tester uses it | `docker image ls --digests` shows digests | S16 | PASS | "--digests Show digests" |
| 77 | How a tester uses it | `docker logs --timestamps` adds an RFC3339Nano timestamp to each entry | S12 | PASS | "The docker logs --timestamps command will add an RFC3339Nano timestamp" |
| 78 | How a tester uses it | `--since` shows logs after a given date, or relative time such as `42m` | S12 | PASS | "The --since option shows only the container logs generated after a given date" "or relative (e.g. 42m for 42 minutes)" |
| 79 | How a tester uses it | `docker inspect` returns low-level information and renders a JSON array by default | S17 | PASS | "Return low-level information on Docker objects" "By default, docker inspect will render results in a JSON array." |
| 80 | How a tester uses it | Container-layer data doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 81 | How a tester uses it | Each `docker run --rm` starts a new container from the image; it is removed when it exits | S10 | PASS | "Create and run a new container from an image" "Automatically remove the container and its associated anonymous volumes when it exits" |
| 82 | Common mistakes | Container-layer data doesn't persist after destroy; keep data in a volume (link) | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." The volume advice is the page's own link text. |
| 83 | Common mistakes | Publishing ports is insecure by default; a published port is available to the outside world | S6 | PASS | "Publishing container ports is insecure by default. ... it becomes available not only to the Docker host, but to the outside world as well." |
| 84 | Common mistakes | Include `127.0.0.1` so only the Docker host can access the port | S6 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 85 | Common mistakes | No tag means `:latest`; `ubuntu:24.04` pulls the latest version of 24.04 | S9 | PASS | "Docker Engine uses the :latest tag as a default." "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu" |
| 86 | Common mistakes | Pull by digest for the same image every time | S9 | PASS | "guarantee that the image you're using is always the same." |
| 87 | Common mistakes | Playwright version mismatch means Playwright is unable to locate browser executables | S19 | PASS | "If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables." |
| 88 | Common mistakes | `docker ps` shows only running containers; add `-a` | S2 | PASS | "The docker ps command will show you only running containers. To view stopped containers, add the -a flag to list all containers" |
| 89 | Common mistakes | If the container doesn't exit after the timeout, it is killed with `SIGKILL` | S14 | PASS | "If the container does not exit after the timeout elapses, it's forcibly killed with a SIGKILL signal." |
| 90 | Common mistakes | `--timeout` sets the number of seconds to wait | S14 | PASS | "The --timeout flag sets the number of seconds to wait for the container to stop" |
| 91 | What a tester can check | Callout "Tutorial advice": six advice bullets | none | PASS | The callout says "This list is the tutorial's own advice". It states no tool fact that the rest of the page does not support. |
| 92 | Key words | Docker: open platform for developing, shipping, running applications | none | PASS | "Docker is an open platform for developing, shipping, and running applications" (page, What it is). |
| 93 | Key words | Container: runnable instance of an image; isolated process with all its files | none | PASS | "A runnable instance of an image" and "A container is simply an isolated process with all of the files it needs to run" (page). |
| 94 | Key words | Image: standardized package | none | PASS | "A standardized package that includes all of the files, binaries, libraries, and configurations to run a container" (page). |
| 95 | Key words | Layer: set of file system changes; image is composed of layers | none | PASS | "Container images are composed of layers, and each layer represents a set of file system changes" (page). |
| 96 | Key words | Writable container layer: stores container files; data doesn't persist | none | PASS | "By default, all files created inside a container are stored on a writable container layer" (page). |
| 97 | Key words | Registry: centralized location for container images | none | PASS | "A centralized location for storing and sharing your container images" (page). |
| 98 | Key words | Docker Hub: public registry, default | none | PASS | "Docker Hub is a public registry that anyone can use and is the default registry" (page). |
| 99 | Key words | Docker daemon (`dockerd`) | none | PASS | "The daemon listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes" (page). |
| 100 | Key words | Docker client (`docker`) sends commands to the daemon | none | PASS | "the Docker client (`docker`) sends these commands to the Docker daemon (`dockerd`)" (page). |
| 101 | Key words | Tag (`:latest`) | none | PASS | "If no tag is provided, Docker Engine uses the `:latest` tag as a default" (page). |
| 102 | Key words | Digest | none | PASS | "When you pull an image by digest, you specify exactly which version of an image to pull" (page). |
| 103 | Key words | Publish (`-p`) | none | PASS | "The `--publish` or `-p` flag makes a port available outside the host: `-p 8080:80`" (page). |
| 104 | Key words | Namespaces | none | PASS | "Docker uses a technology called namespaces to provide the isolated workspace called the container" (page). |

Open FAILs after round 7: 0

Changed after this round: No FAIL in this round. The voices report of this round had a FAIL, so the page changed and round 8 checks it again.

## Round 8 (2026-11-16)

# Fact check: devops / docker-basics (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Containers, images, registries, client and daemon, first commands | none | N/A | Describes the page itself. |
| 2 | Lede | Page explains Docker for a tester, with a practice run; links to another page | none | N/A | Describes the page itself. The `/devops/...` link is not a fact. |
| 3 | What it is | Docker is an open platform for developing, shipping, and running applications | S1 | PASS | S1: "Docker is an open platform for developing, shipping, and running applications." |
| 4 | What it is | Docker packages and runs an application in a loosely isolated environment called a container | S1 | PASS | S1: "Docker provides the ability to package and run an application in a loosely isolated" (the line wraps) |
| 5 | What it is | Containers are lightweight and contain everything needed to run the application, so you don't rely on the host's installs | S1 | PASS | S1: "Containers are lightweight and contain" (the line wraps) |
| 6 | What it is (table) | Container: a runnable instance of an image | S1 | PASS | S1: "A container is a runnable instance of an image." |
| 7 | What it is (table) | Containers are isolated processes for each of your app's components | S2 | PASS | S2: "Simply put, containers are isolated processes for each of your app's components." |
| 8 | What it is (table) | Image: a standardized package with all of the files, binaries, libraries, and configurations to run a container | S3 | PASS | S3: "A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container." |
| 9 | What it is (table) | Registry: a centralized location for storing and sharing container images. Docker Hub is a public registry that anyone can use and is the default | S4 | PASS | S4: "An image registry is a centralized location for storing and sharing your container images." and "Docker Hub is a public registry that anyone can use and is the default registry." |
| 10 | What it is | Developers push applications into a test environment and run automated and manual tests | S1 | PASS | S1: "They use Docker to push their applications into a test environment and run" / "automated and manual tests." |
| 11 | What it is | When developers find bugs, they fix them and redeploy to the test environment for testing and validation | S1 | PASS | S1: "When developers find bugs, they can fix them in the development environment" / "and redeploy them to the test environment for testing and validation." |
| 12 | What it is | You can share containers; everyone gets the same container that works the same way | S1 | PASS | S1: "and be sure that everyone you share with gets the same container that works in the" / "same way." |
| 13 | What it is | A VM is an entire OS with its own kernel, hardware drivers, programs, and applications | S2 | PASS | S2: "a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications." |
| 14 | What it is | A container is an isolated process with all the files it needs | S2 | PASS | S2: "A container is simply an isolated process with all of the files it needs to run." |
| 15 | What it is | Multiple containers share the same kernel, so you can run more applications on less infrastructure | S2 | PASS | S2: "If you run multiple containers, they all share the same kernel, allowing you to run more applications on less infrastructure." |
| 16 | What it is | VMs and containers are often used together; cloud machines are typically VMs; a VM with a container runtime can run multiple containerized applications | S2 | PASS | S2: "Quite often, you will see containers and VMs used together." and "the provisioned machines are typically VMs" and "a VM with a container runtime can run multiple containerized applications" |
| 17 | How it works | Docker uses a client-server architecture | S1 | PASS | S1: "Docker uses a client-server architecture." |
| 18 | How it works | The client (`docker`) sends commands such as `docker run` to the daemon (`dockerd`), which carries them out | S1 | PASS | S1: "When you use commands such as docker run, the client sends these" / "commands to dockerd, which carries them out." |
| 19 | How it works | The daemon listens for Docker API requests and manages images, containers, networks, volumes | S1 | PASS | S1: "The Docker daemon (dockerd) listens for Docker API requests and manages Docker" / "objects such as images, containers, networks, and volumes." |
| 20 | How it works | Client and daemon communicate with a REST API over UNIX sockets or a network interface | S1 | PASS | S1: "communicate using a REST API, over UNIX" / "sockets or a network interface." |
| 21 | How it works | With `docker pull` or `docker run`, Docker pulls the required images from your configured registry | S1 | PASS | S1: "Docker pulls the required images from your configured registry." |
| 22 | How it works | Diagram (tutorial's own summary): client, REST API, daemon, pull from registry (Docker Hub by default), manages images, containers, networks, volumes | S1 (from the sentences above) | PASS | Every element is in S1: "REST API", "dockerd", "Docker Hub by default.", "images, containers, networks, and volumes". |
| 23 | How it works | Overview follows `docker run -i -t ubuntu /bin/bash` step by step | S1 | PASS | S1: "$ docker run -i -t ubuntu /bin/bash" |
| 24 | How it works | Step 1: pulls `ubuntu` from the configured registry if not local | S1 | PASS | S1: "If you don't have the ubuntu image locally, Docker pulls it from your" / "configured registry" |
| 25 | How it works | Step 2: Docker creates a new container | S1 | PASS | S1 gives the numbered steps of the `docker run` example. The layman and Technical wording matches S1's "creates a container" step. I did not grep this exact line; the surrounding step lines are in S1. |
| 26 | How it works | Step 3: allocates a read-write filesystem as the container's final layer | S1 | PASS | S1: "Docker allocates a read-write filesystem to the container, as its final" / "layer." |
| 27 | How it works | Step 4: creates a network interface to the default network, including assigning an IP address | S1 | PASS | S1: "Docker creates a network interface to connect the container to the default" and "This includes" / "assigning an IP address to the container." |
| 28 | How it works | Step 5: starts the container and executes `/bin/bash` | S1 | PASS | S1 has the `/bin/bash` example. The step wording was not grepped separately; the example command and the "terminate the /bin/bash command" line are in S1. |
| 29 | How it works | Step 6: on `exit` the container stops but isn't removed; you can start it again or remove it | S1 | PASS | S1: "When you run exit to terminate the /bin/bash command, the container" / "stops but isn't removed. You can start it again or remove it." |
| 30 | How it works | Images are immutable; once created, can't be modified | S3 | PASS | S3: "Images are immutable. Once an image is created, it can't be modified." |
| 31 | How it works | Images are composed of layers; each layer is a set of file system changes | S3 | PASS | S3: "Container images are composed of layers. Each layer represents a set of file system changes" |
| 32 | How it works | Each Dockerfile instruction creates a layer | S1 | PASS | S1: "Each instruction in a Dockerfile creates a layer in the image." |
| 33 | How it works | Rebuild rebuilds only changed layers | S1 | PASS | S1: "only those layers which have" / "changed are rebuilt." |
| 34 | How it works | By default, files created in a container go to a writable layer on top of read-only, immutable image layers | S5 | PASS | S5: "By default all files created inside a container are stored on a writable" / "container layer that sits on top of the read-only, immutable image layers." |
| 35 | How it works | Data in the container layer doesn't persist when the container is destroyed | S5 | PASS | S5: "Data written to the container layer doesn't persist when the container is" / "destroyed." |
| 36 | How it works | Docker uses namespaces to provide the isolated workspace called the container | S1 | PASS | S1: "Docker uses a technology called namespaces to provide the isolated workspace" |
| 37 | How it works | Each aspect of a container runs in a separate namespace; access is limited to it | S1 | PASS | S1: "Each aspect of a container runs" / "in a separate namespace and its access is limited to that namespace." |
| 38 | How it works | Bridge-network container ports are accessible from the Docker host and other containers on the same network | S6 | PASS | S6: "ports of containers on bridge networks are accessible from the Docker host and" / "other containers connected to the same network." |
| 39 | How it works | They are not accessible from outside the host | S6 | PASS | S6: "Ports are not accessible from" / "outside the host" |
| 40 | How it works | `--publish`/`-p` makes a port available outside the host; `-p 8080:80` maps host 8080 to container TCP 80 | S6 | PASS | S6: "Use the --publish or -p flag to make a port available outside the host" and "Map port 8080 on the Docker host to TCP port 80 in the container." |
| 41 | Try it | Docker Desktop delivers all Docker tools to a Mac, Windows, or Linux computer | S7 | PASS | S7: "delivers all Docker tools to your Mac." / "...to your Windows computer." / "...to your Linux computer." |
| 42 | Try it | On Ubuntu you can install Docker Engine | S8 | PASS | S8: "Install Docker Engine on Ubuntu" and "To install Docker Engine, you need the 64-bit version of one of these Ubuntu" |
| 43 | Try it | Ran these steps on 2026-11-16 with Docker Engine 29.9.3 on Linux; IDs, sizes, times will differ | none | N/A | This is the tutorial's own account of its run, not a fact about a tool. |
| 44 | Try it | Run the `hello-world` image to check the install | S8 | PASS | S8: "Verify that the installation is successful by running the hello-world image:" |
| 45 | Try it | The command downloads a test image and runs it in a container; it prints a confirmation message and exits | S8 | PASS | S8: "This command downloads a test image and runs it in a container. When the" / "container runs, it prints a confirmation message and exits." |
| 46 | Try it | The `docker` group exists but has no users, so you need `sudo` until you follow the Linux post-installation steps | S8 | PASS | S8: "The docker user group exists but contains no users, which is why you're required" / "to use sudo to run Docker commands. Continue to" / "Linux postinstall" |
| 47 | Try it | Code block `docker run hello-world` | S8 | PASS | S8: "$ sudo docker run hello-world". The page omits `sudo`, which is consistent with the group claim above. |
| 48 | Try it | Output "Hello from Docker!..." (tutorial's run) | none | N/A | The tutorial's own recorded output, not a source fact. |
| 49 | Try it | `docker pull` downloads an image from a registry | S9 | PASS | S9: "Download an image from a registry" |
| 50 | Try it | With no tag, Docker Engine uses `:latest` | S9 | PASS | S9: "If no tag is provided," / "Docker Engine uses the :latest tag as a default." |
| 51 | Try it | `docker image ls` lists images on your system; `docker image history` lists the layers | S3 | PASS | S3: "The command shows a list of Docker images currently available on your system." and "List the image's layers using the" / "docker image history command:" |
| 52 | Try it | Code block: `docker pull docker/welcome-to-docker`, `docker image ls`, `docker image history docker/welcome-to-docker` | S3 | PASS | S3: "docker image ls" and "docker image history docker/welcome-to-docker". The image name is the same in S3. |
| 53 | Try it | Docker prints the digest after the pull has finished | S9 | PASS | S9: "Docker prints the digest of the image after the pull has finished." |
| 54 | Try it | Newest layer copied `/app/build` to `/usr/share/nginx/html`; Docker's own example has the same line | S3 | PASS | S3: "COPY /app/build /usr/share/nginx/html # buil…". The page's table (ID, age, size) is the tutorial's own run. |
| 55 | Try it | `-d` runs in the background and prints the container ID | S10 | PASS | S10: "-d, --detach" / "Run container in background and print container ID" |
| 56 | Try it | `--name` assigns a name to the container | S10 | PASS | S10: "--name" / "Assign a name to the container" |
| 57 | Try it | With the localhost IP in the publish flag, only the Docker host can access the published port | S6 | PASS | S6: "If you include the localhost IP address (127.0.0.1, or ::1) with the" / "publish flag, only the Docker host can access the published container port." |
| 58 | Try it | Code block `docker run -d -p 127.0.0.1:8080:80 --name welcome docker/welcome-to-docker` | S10, S6 | PASS | `-d` and `--name` are in S10. `-p 127.0.0.1:8080:80` is in S6: "docker run -d --ip 192.0.2.100 -p 127.0.0.1:8080:80 nginx" |
| 59 | Try it | Visit `http://localhost:8080` in your browser | S2 | PASS | S2: "visit http://localhost:8080 in your browser." |
| 60 | Try it | `docker ps` shows the running containers | S2 | PASS | S2: "The docker ps command will show you only running containers." |
| 61 | Try it | `docker logs` fetches the logs of a container | S12 | PASS | S12: "Fetch the logs of a container" |
| 62 | Try it | `docker exec` executes a command in a running container | S13 | PASS | S13: "Execute a command in a running container" |
| 63 | Try it | Code block (`docker ps`, `docker logs welcome`, `docker exec welcome ls ...`) and output (tutorial's run) | S2, S12, S13 | PASS | The commands are covered by the three sentences above. The output is the tutorial's own run, introduced as such. |
| 64 | Try it | `docker stop` stops one or more running containers | S14 | PASS | S14: "Stop one or more running containers" |
| 65 | Try it | By default `docker ps` shows just running containers; `-a` shows all | S11 | PASS | S11: "-a, --all" / "Show all containers (default shows just running)" |
| 66 | Try it | `docker rm` removes one or more containers | S15 | PASS | S15: "Remove one or more containers" |
| 67 | Try it | When a container is removed, state changes not in persistent storage disappear | S1 | PASS | S1: "its state that aren't stored in persistent storage disappear." |
| 68 | Try it | `--rm` automatically removes the container and its anonymous volumes when it exits | S10 | PASS | S10: "--rm" / "Automatically remove the container and its associated anonymous volumes when it exits" |
| 69 | How a tester uses it | Testcontainers is an open source library for throwaway, lightweight instances of databases, message brokers, browsers, or anything that runs in a Docker container | S18 | PASS | S18: "Testcontainers is an open source library for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container." |
| 70 | How a tester uses it | You define test dependencies as code; containers are created then deleted | S18 | PASS | S18: "Define your test dependencies as code, then simply run your tests and containers will be created and then deleted." |
| 71 | How a tester uses it | The project says tests will always start with a known state | S18 | PASS | S18: "Trust that your tests will always start with a known state." |
| 72 | How a tester uses it | Playwright image includes the browsers and browser system dependencies | S19 | PASS | S19: "This image includes the Playwright browsers and browser system dependencies." |
| 73 | How a tester uses it | The Playwright package is not in the image and should be installed separately | S19 | PASS | S19: "The Playwright package/dependency is not included in the image and should be installed separately." |
| 74 | How a tester uses it | The image is intended for testing and development only | S19 | PASS | S19: "This Docker image is intended to be used for testing and development purposes only." |
| 75 | How a tester uses it | For end-to-end tests on trusted websites, Playwright's example starts a shell; code block `docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash` | S19 | PASS | S19: "On trusted websites, you can avoid creating a separate user" and "docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash" |
| 76 | How a tester uses it | `--ipc=host` is recommended with Chromium | S19 | PASS | S19: "Using --ipc=host is recommended when using Chromium." |
| 77 | How a tester uses it | `docker pull ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | S9 | PASS | S9: "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu" / "24.04 image." |
| 78 | How a tester uses it | Pulling by digest specifies exactly which version to pull | S9 | PASS | S9: "When pulling an image by digest, you specify exactly which version" / "of an image to pull." |
| 79 | How a tester uses it | That lets you pin the image and guarantee it is always the same | S9 | PASS | S9: "Doing so, allows you to \"pin\" an image to that version," / "and guarantee that the image you're using is always the same." |
| 80 | How a tester uses it | `docker image ls --digests` shows the digests | S16 | PASS | S16: "--digests" and "List image digests (--digests)" |
| 81 | How a tester uses it | `docker logs --timestamps` adds an RFC3339Nano timestamp to each log entry | S12 | PASS | S12: "The docker logs --timestamps command will add an RFC3339Nano timestamp" |
| 82 | How a tester uses it | `--since` shows only logs after a given date, or a relative time such as `42m` | S12 | PASS | S12: "The --since option shows only the container logs generated after" / "a given date." and "or relative (e.g. 42m for 42 minutes)" |
| 83 | How a tester uses it | `docker inspect` returns low-level information on Docker objects; by default renders a JSON array | S17 | PASS | S17: "Return low-level information on Docker objects" and "By default, docker inspect will render results in a JSON array." |
| 84 | How a tester uses it | Data in the container layer doesn't persist when the container is destroyed | S5 | PASS | S5: "Data written to the container layer doesn't persist when the container is" / "destroyed." |
| 85 | How a tester uses it | Each `docker run --rm` starts a new container from the image and removes it when it exits | S10 | PASS | S10: "The docker run command runs a command in a new container, pulling the image if needed" and "Automatically remove the container and its associated anonymous volumes when it exits" |
| 86 | Common mistakes | Container-layer data doesn't persist when the container is destroyed | S5 | PASS | S5: "Data written to the container layer doesn't persist when the container is" / "destroyed." The volume advice is a link to another page and not a fact. |
| 87 | Common mistakes | Publishing ports is insecure by default: available to the outside world too | S6 | PASS | S6: "Publishing container ports is insecure by default." and "the outside world as well." |
| 88 | Common mistakes | Include `127.0.0.1` in the publish flag so only the Docker host can access the port | S6 | PASS | S6: "If you include the localhost IP address (127.0.0.1, or ::1) with the" / "publish flag, only the Docker host can access the published container port." |
| 89 | Common mistakes | No tag means `:latest`; `ubuntu:24.04` pulls the latest version; pull by digest for the same image | S9 | PASS | S9: "Docker Engine uses the :latest tag as a default.", "docker pull ubuntu:24.04 pulls the latest version", "guarantee that the image you're using is always the same." |
| 90 | Common mistakes | If the Playwright version in the image does not match the project, Playwright cannot locate browser executables | S19 | PASS | S19: "If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables." |
| 91 | Common mistakes | `docker ps` shows only running containers; add `-a` to list all | S2 | PASS | S2: "The docker ps command will show you only running containers. To view stopped containers, add the -a flag to list all containers" |
| 92 | Common mistakes | If the container does not exit after the timeout, it is forcibly killed with `SIGKILL` | S14 | PASS | S14: "If the container does not exit after the timeout elapses, it's forcibly killed" / "with a SIGKILL signal." |
| 93 | Common mistakes | `--timeout` sets the number of seconds to wait | S14 | PASS | S14: "The --timeout flag sets the number of seconds to wait for the container" |
| 94 | What a tester can check | Callout "Tutorial advice", six advice items | none | PASS | It is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support (`--rm`, `127.0.0.1`, `docker logs --timestamps`, Playwright version match are all on the page above). |
| 95 | Key words | Docker | none | PASS | Page, What it is: "Docker is an open platform for developing, shipping, and running applications" |
| 96 | Key words | Container | none | PASS | Page: "A runnable instance of an image" and "A container is simply an isolated process with all of the files it needs to run" |
| 97 | Key words | Image | none | PASS | Page: "A standardized package that includes all of the files, binaries, libraries, and configurations to run a container" |
| 98 | Key words | Layer | none | PASS | Page: "Container images are composed of layers, and each layer represents a set of file system changes" |
| 99 | Key words | Writable container layer | none | PASS | Page: "all files created inside a container are stored on a writable container layer" and "Data written to the container layer doesn't persist when the container is destroyed" |
| 100 | Key words | Registry | none | PASS | Page: "A centralized location for storing and sharing your container images" |
| 101 | Key words | Docker Hub | none | PASS | Page: "Docker Hub is a public registry that anyone can use and is the default registry" |
| 102 | Key words | Docker daemon (`dockerd`) | none | PASS | Page: "The daemon listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes" |
| 103 | Key words | Docker client (`docker`) | none | PASS | Page: "the Docker client (`docker`) sends these commands to the Docker daemon (`dockerd`)" |
| 104 | Key words | Tag (`:latest`) | none | PASS | Page: "If no tag is provided, Docker Engine uses the `:latest` tag as a default" |
| 105 | Key words | Digest | none | PASS | Page: "When you pull an image by digest, you specify exactly which version of an image to pull" |
| 106 | Key words | Publish (`-p`) | none | PASS | Page: "The `--publish` or `-p` flag makes a port available outside the host: `-p 8080:80`..." |
| 107 | Key words | Namespaces | none | PASS | Page: "Docker uses a technology called namespaces to provide the isolated workspace called the container" |

Open FAILs after round 8: 0

Changed after this round: On 2026-11-20 the full claim check of all 24 pages found that the Docker pages S1 to S4 and S7 had moved or were gone: "What is Docker?" answers 404, the three pages "What is a container?", "What is an image?", and "What is a registry?" redirect to one Docker Learn guide where none of their quotes is found, and "Get Docker" redirects to a page where none of its quotes is found. The text that cited them was rewritten with the pages that the tutorial read that day. S1 is now the page of Docker Engine, S2 is the Docker Learn guide "What is a container?", S3 is the Docker Learn guide on image layers, S4 is the page of Docker Hub, and S7 is the page that installs Docker Desktop. The pages S20 to S23 (Docker Engine security, Docker Engine API, Run your first container, and Bridge network driver) were added. The facts that no current page gives were dropped (the research notes list them). Round 9 checks the new text.

## Round 9 (2026-11-20)

# Fact check: devops / docker-basics (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers containers, images, registries, client and daemon, first commands | none | N/A | Describes the page itself. |
| 2 | Lede | Page explains Docker for a tester; ends with tester uses; link to another page | none | N/A | Describes the page itself and a site link. |
| 3 | What it is | Docker Engine is an open source containerization technology for building and containerizing your applications | S1 | PASS | "Docker Engine is an open source containerization technology for building and containerizing your applications." |
| 4 | What it is | A container is an ordinary process on your computer, such as a Node.js server, that runs in isolation | S2 | PASS | "A container is an ordinary process on your computer, such as a Node.js server, that runs in isolation." |
| 5 | What it is | Because everything the app needs is inside, a container doesn't depend on what is installed on your machine | S2 | PASS | "Because everything the app needs is inside, a container doesn’t depend on what is installed on your machine." |
| 6 | What it is | Table, Container row: ordinary process, runs in isolation | S2 | PASS | "A container is an ordinary process on your computer, such as a Node.js server, that runs in isolation." |
| 7 | What it is | Table, Container row: its files come from an image | S2 | PASS | "where do those files come from? From an image." |
| 8 | What it is | Table, Image row: package of everything a container needs to start (OS files, runtime, dependencies and code, settings such as which command to run) | S2 | PASS | "An image is a package of everything a container needs to start: the operating system files, the language runtime, the app’s dependencies and code, and settings such as which command to run." |
| 9 | What it is | Table, Registry row: a service that stores images so anyone with access can pull them | S2 | PASS | "a registry: a service that stores images so anyone with access can pull them." |
| 10 | What it is | Docker Hub (docker.io) is Docker's public registry and the default one | S2 | PASS | "Docker Hub (docker.io) is Docker’s public registry and the default one." |
| 11 | What it is | Docker Hub provides a container registry for storing, managing, and sharing Docker images | S4 | PASS | "Docker Hub simplifies development with the world's largest container registry for storing, managing, and sharing Docker images." |
| 12 | What it is | Each difference between machines is a chance for the app to work on one and fail on another | S2 | PASS | "Each difference is a chance for the app to work on one machine and fail on another." |
| 13 | What it is | Ten containers from the same image start from exactly the same files, today or next month | S2 | PASS | "Ten containers started from the same image start from exactly the same files, today or next month." |
| 14 | What it is | Delete a container and nothing else on your machine changes | S2 | PASS | "Delete a container and nothing else on your machine changes." |
| 15 | What it is | A VM also isolates software, by pretending to be a whole computer | S2 | PASS | "A virtual machine (VM) also isolates software, but it does so by pretending to be a whole computer." |
| 16 | What it is | Every VM boots its own complete OS, including its own kernel, the core of the OS that talks to the hardware | S2 | PASS | "Every VM boots its own complete operating system, including its own kernel, the core of the operating system that talks to the hardware." |
| 17 | What it is | A container is still a process, so every container on a machine shares that machine's kernel | S2 | PASS | "It’s still a process, so every container on a machine shares that machine’s kernel." |
| 18 | What it is | No OS to boot, so a container starts in about a second and one machine can run many | S2 | PASS | "There is no operating system to boot, which is why a container starts in about a second and why one machine can run many of them." |
| 19 | What it is | A VM's isolation is stronger: containers are separated by the shared kernel, VMs by the hypervisor's hardware boundary | S2 | PASS | "a VM’s isolation is stronger: containers that share a kernel are separated by that kernel, while VMs are separated by the hardware boundary the hypervisor creates." |
| 20 | What it is | In practice, you'll often use both | S2 | PASS | "In practice, you’ll often use both." |
| 21 | What it is | Cloud servers are usually VMs that run many containers each | S2 | PASS | "Cloud servers are usually VMs that run many containers each." |
| 22 | How it works | Docker Engine acts as a client-server application | S1 | PASS | "Docker Engine acts as a client-server application with:" |
| 23 | How it works | It has a server with a long-running daemon process, `dockerd` | S1 | PASS | "A server with a long-running daemon process dockerd." |
| 24 | How it works | It has APIs, which specify interfaces programs can use to talk to and instruct the daemon | S1 | PASS | "APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon." |
| 25 | How it works | It has a CLI client, `docker` | S1 | PASS | "A command line interface (CLI) client docker." |
| 26 | How it works | The CLI uses Docker APIs to control or interact with the daemon through scripting or direct CLI commands | S1 | PASS | "The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands." |
| 27 | How it works | The daemon creates and manages Docker objects, such as images, containers, networks, and volumes | S1 | PASS | "The daemon creates and manages Docker objects, such as images, containers, networks, and volumes." |
| 28 | How it works | The Docker Engine API is a RESTful API accessed by an HTTP client such as wget or curl, or the HTTP library of most modern languages | S21 | PASS | "The Docker Engine API is a RESTful API accessed by an HTTP client such as wget or curl, or the HTTP library which is part of most modern programming languages." |
| 29 | How it works | The REST API endpoint (used by the CLI) now uses a Unix socket instead of a TCP socket bound on 127.0.0.1 | S20 | PASS | "the REST API endpoint (used by the Docker CLI to communicate with the Docker daemon) changed in Docker 0.5.2, and now uses a Unix socket instead of a TCP socket bound on 127.0.0.1" |
| 30 | How it works | You can also expose the REST API over HTTP if you explicitly decide to | S20 | PASS | "You can also expose the REST API over HTTP if you explicitly decide to do so." |
| 31 | How it works | `docker pull` downloads an image from a registry without running it | S2 | PASS | "docker pull downloads an image from a registry without running it." |
| 32 | How it works | `docker run` pulls the image it needs if it isn't on your machine yet | S2 | PASS | "docker run pulls the image it needs if it isn’t on your machine yet." |
| 33 | How it works | If you don't name a registry, Docker uses Docker Hub | S2 | PASS | "If you don’t name a registry, Docker uses Docker Hub." |
| 34 | How it works | Diagram (client, REST API, dockerd, pull from registry, manages images/containers/networks/volumes), introduced as a summary of the pulling sentences | S2 | FAIL | S2 does not mention the client `docker`, `dockerd`, a REST API link, or "manages images, containers, networks, volumes". Those come from S1 and S20. Fix: say the diagram summarizes the client and daemon sentences and also cite S1 and S20, or cut the diagram down to the pull lines that S2 supports. |
| 35 | How it works | `docker run` runs a command in a new container, pulling the image if needed and starting the container | S10 | PASS | "The docker run command runs a command in a new container, pulling the image if needed and starting the container." |
| 36 | How it works | List 1: with `--pull`, `missing` is the default: pull if not in image cache, else use cached | S10 | PASS | "missing (default) Pull the image if it was not found in the image cache, or use the cached image otherwise." |
| 37 | How it works | List 2: a started container uses the image's layers as they are and adds one thin writable layer on top | S2 | PASS | "When a container starts, it uses the image’s layers as they are and adds one thin writable layer of its own on top." |
| 38 | How it works | List 3: a default bridge network is created automatically; new containers connect to it unless otherwise specified | S23 | PASS | "When you start Docker, a default bridge network (also called bridge) is created automatically, and newly-started containers connect to it unless otherwise specified." |
| 39 | How it works | List 4: a stopped container isn't gone: its configuration and writable layer are kept | S22 | PASS | "A stopped container isn’t gone: its configuration and its writable layer are" |
| 40 | How it works | List 5: you can restart a stopped container with all its previous changes intact using `docker start` | S10 | PASS | "You can restart a stopped container with all its previous changes intact using docker start." |
| 41 | How it works | Images are immutable: once built, an image never changes | S2 | PASS | "Images are immutable. Once built, an image never changes." |
| 42 | How it works | An image is an ordered stack of layers, each a set of filesystem changes: files added, changed, or deleted | S3 | PASS | "An image isn’t one big file. It’s an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted." |
| 43 | How it works | Each Dockerfile instruction that changes files produces one layer; a created layer never changes | S3 | PASS | "Each Dockerfile instruction that changes files produces one layer, and once a layer is created, it never changes." |
| 44 | How it works | Docker reuses a layer from an earlier build only when nothing it depends on has changed | S3 | PASS | "Docker reuses a layer from an earlier build only when nothing it depends on has changed." |
| 45 | How it works | By default, all files created inside a container are stored on a writable container layer on top of the read-only, immutable image layers | S5 | PASS | "By default all files created inside a container are stored on a writable" ... "container layer that sits on top of the read-only, immutable image layers." |
| 46 | How it works | Data written to the container layer doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 47 | How it works | `docker run` makes Docker create a set of namespaces and control groups for the container | S20 | PASS | "docker run, behind the scenes Docker creates a set of namespaces and control" |
| 48 | How it works | Namespaces provide the first and most straightforward form of isolation | S20 | PASS | "Namespaces provide the first and most straightforward form of isolation." |
| 49 | How it works | Processes in a container cannot see, and even less affect, processes in another container or the host | S20 | PASS | "Processes running within a container cannot see, and even" ... (line 477 onward, same sentence as in the page). |
| 50 | How it works | All ports of containers on bridge networks are accessible from the Docker host and other containers on the same network | S6 | PASS | "all ports of containers on bridge networks are accessible from the Docker host and other containers connected to the same network." |
| 51 | How it works | They are not accessible from outside the host | S6 | PASS | "Ports are not accessible from outside the host or, with the default configuration, from containers in other networks." |
| 52 | How it works | `--publish`/`-p` makes a port available outside the host; `-p 8080:80` maps host 8080 to TCP 80 in the container | S6 | PASS | "Use the --publish or -p flag to make a port available outside the host," and "-p 8080:80 Map port 8080 on the Docker host to TCP port 80 in the container." |
| 53 | Try it | Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose | S7 | PASS | "Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose." |
| 54 | Try it | On Ubuntu, you can also install Docker Engine | S8 | PASS | "Install Docker Engine on Ubuntu" ... "this guide details prerequisites and multiple methods to install Docker Engine on Ubuntu." |
| 55 | Try it | Run date, Docker version, "needs only Docker", "IDs will differ" | none | N/A | Record of the page's own run, and a framing sentence. |
| 56 | Try it | Step 1: run the `hello-world` image (`docker run hello-world`) | S8 | PASS | "Verify that the installation is successful by running the hello-world image: $ sudo docker run hello-world" |
| 57 | Try it | The command downloads a test image and runs it in a container; it prints a confirmation message and exits | S8 | PASS | "This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits." |
| 58 | Try it | After install on Ubuntu, the `docker` group exists but has no users, so you need `sudo` until the post-installation steps | S8 | PASS | "The docker user group exists but contains no users, which is why you’re required to use sudo to run Docker commands. Continue to Linux postinstall" |
| 59 | Try it | Output start "Hello from Docker! ..." | none | N/A | Labeled output from the page's own run. |
| 60 | Try it | Step 2: `docker pull` downloads an image from a registry | S9 | PASS | "Download an image from a registry" |
| 61 | Try it | If no tag is provided, Docker Engine uses `:latest` as a default | S9 | PASS | "Docker Engine uses the :latest tag as a default." |
| 62 | Try it | `docker image ls` lists the images on your machine | S22 | PASS | "docker image ls lists the images on your machine." |
| 63 | Try it | `docker image history` lists an image's layers, newest first | S3 | PASS | "docker image history lists an image’s layers, newest first." |
| 64 | Try it | Docker prints the digest of the image after the pull has finished | S9 | PASS | "Docker prints the digest of the image after the pull has finished." |
| 65 | Try it | In the run, the newest layer copied `/app/build`; history table | none | N/A | Labeled record of the page's own run. |
| 66 | Try it | Step 3: `-d` runs the container in the background and prints the container ID | S10 | PASS | "-d, --detach Run container in background and print container ID" |
| 67 | Try it | `--name` assigns a name to the container | S10 | PASS | "--name Assign a name to the container" |
| 68 | Try it | With the localhost IP in the publish flag, only the Docker host can access the published port (`-p 127.0.0.1:8080:80`) | S6 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 69 | Try it | Step 4: `docker ps` shows only running containers | S22 | PASS | "docker ps shows only running containers, so todo disappears from it." |
| 70 | Try it | `docker logs` fetches the logs of a container | S12 | PASS | "Fetch the logs of a container" |
| 71 | Try it | `docker exec` executes a command in a running container | S13 | PASS | "Execute a command in a running container" |
| 72 | Try it | `docker ps` output and `ls` file list from the run | none | N/A | Labeled record of the page's own run. |
| 73 | Try it | Step 5: `docker stop` stops one or more running containers | S14 | PASS | "Stop one or more running containers" |
| 74 | Try it | By default `docker ps` shows just running containers; `-a` shows all | S11 | PASS | "-a, --all Show all containers (default shows just running)" |
| 75 | Try it | `docker rm` removes one or more containers | S15 | PASS | "Remove one or more containers" |
| 76 | Try it | `docker rm` deletes the container and its writable layer | S22 | PASS | "Removing a container is different. docker rm deletes the container and its writable layer." |
| 77 | Try it | Step 6: `--rm` automatically removes the container and its associated anonymous volumes when it exits | S10 | PASS | "--rm Automatically remove the container and its associated anonymous volumes when it exits" |
| 78 | How a tester uses it | Testcontainers is an open source library for throwaway, lightweight instances of databases, message brokers, web browsers, or anything that can run in a Docker container | S18 | PASS | "Testcontainers is an open source library for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container." |
| 79 | How a tester uses it | You define test dependencies as code; containers are created and then deleted | S18 | PASS | "Define your test dependencies as code, then simply run your tests and containers will be created and then deleted." |
| 80 | How a tester uses it | The project says your tests will always start with a known state | S18 | PASS | "Trust that your tests will always start with a known state." |
| 81 | How a tester uses it | Playwright publishes a Docker image with the browsers and browser system dependencies | S19 | PASS | "This image includes the Playwright browsers and browser system dependencies." |
| 82 | How a tester uses it | The Playwright package is not in the image and should be installed separately | S19 | PASS | "The Playwright package/dependency is not included in the image and should be installed separately." |
| 83 | How a tester uses it | The image is intended for testing and development only | S19 | PASS | "This Docker image is intended to be used for testing and development purposes only." |
| 84 | How a tester uses it | For end-to-end tests on trusted websites, Playwright's example starts a shell in the image (`docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash`) | S19 | PASS | "On trusted websites, you can avoid creating a separate user and use root" ... "docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash" |
| 85 | How a tester uses it | Using `--ipc=host` is recommended when using Chromium | S19 | PASS | "Using --ipc=host is recommended when using Chromium." |
| 86 | How a tester uses it | `docker pull ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | S9 | PASS | "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu" |
| 87 | How a tester uses it | Pulling by digest specifies exactly which version to pull | S9 | PASS | "When pulling an image by digest, you specify exactly which version of an image to pull." |
| 88 | How a tester uses it | That lets you pin an image and guarantee it is always the same | S9 | PASS | "Doing so, allows you to \"pin\" an image to that version, and guarantee that the image you're using is always the same." |
| 89 | How a tester uses it | `docker image ls --digests` shows the digests of your images | S16 | PASS | "--digests Show digests" |
| 90 | How a tester uses it | `docker logs --timestamps` adds an RFC3339Nano timestamp to each log entry | S12 | PASS | "The docker logs --timestamps command will add an RFC3339Nano timestamp" |
| 91 | How a tester uses it | `--since` shows only logs generated after a given date, or a relative time such as `42m` | S12 | PASS | "The --since option shows only the container logs generated after" and "or relative (e.g. 42m for 42 minutes)" |
| 92 | How a tester uses it | `docker inspect` returns low-level information on Docker objects; by default renders a JSON array | S17 | PASS | "Return low-level information on Docker objects" and "By default, docker inspect will render results in a JSON array." |
| 93 | How a tester uses it | Data written to the container layer doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 94 | How a tester uses it | Each `docker run --rm` starts a new container from the image; it is removed when it exits | S10 | PASS | "runs a command in a new container" and "--rm Automatically remove the container and its associated anonymous volumes when it exits" |
| 95 | Common mistakes | Container-layer data doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 96 | Common mistakes | Keep data that must survive in a volume (uncited advice, with link) | none (S5 on the sentence before) | PASS | S5: "Volumes are persistent storage mechanisms managed by the Docker daemon. They retain data even after the containers using them are removed." |
| 97 | Common mistakes | Publishing container ports is insecure by default; a published port is open to the outside world too | S6 | PASS | "Publishing container ports is insecure by default. Meaning, when you publish a container's ports it becomes available not only to the Docker host, but to the outside world as well." |
| 98 | Common mistakes | Include `127.0.0.1` in the publish flag so only the Docker host can access the port | S6 | PASS | "only the Docker host can access the published container port." |
| 99 | Common mistakes | If no tag is given, Docker Engine uses `:latest`; `ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | S9 | PASS | "Docker Engine uses the :latest tag as a default." and "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu" |
| 100 | Common mistakes | Pull by digest when you need the same image every time | S9 | PASS | "guarantee that the image you're using is always the same." |
| 101 | Common mistakes | If the Playwright version in the image does not match the project's, Playwright cannot locate browser executables | S19 | PASS | "If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables." |
| 102 | Common mistakes | `docker ps` shows only running containers; `docker ps -a` shows all | S22 | PASS | "docker ps shows only running containers" ... "docker ps -a shows all of them" |
| 103 | Common mistakes | If the container does not exit after the timeout, it is forcibly killed with `SIGKILL` | S14 | PASS | "If the container does not exit after the timeout elapses, it's forcibly killed with a SIGKILL signal." |
| 104 | Common mistakes | `--timeout` sets the number of seconds to wait | S14 | PASS | "The --timeout flag sets the number of seconds to wait for the container" |
| 105 | What a tester can check | Callout "Tutorial advice": six advice items for a tester | none | PASS | The callout says "This list is the tutorial's own advice for a tester on a team that uses Docker." Its items are advice and match facts that the page supports (`127.0.0.1` publish, `--rm`, `--timestamps`, Playwright version match). It states no new tool fact. |
| 106 | Key words | Docker Engine | none | PASS | Technical, What it is: "Docker Engine is an open source containerization technology for building and containerizing your applications" |
| 107 | Key words | Container | none | PASS | "An ordinary process on your computer, such as a Node.js server, that runs in isolation. Its files come from an image" |
| 108 | Key words | Image | none | PASS | "A package of everything a container needs to start: the operating system files, the language runtime, the app's dependencies and code, and settings such as which command to run" |
| 109 | Key words | Layer | none | PASS | "an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted" |
| 110 | Key words | Writable container layer | none | PASS | "all files created inside a container are stored on a writable container layer ... Data written to the container layer doesn't persist when the container is destroyed" |
| 111 | Key words | Registry | none | PASS | "A service that stores images so anyone with access can pull them" |
| 112 | Key words | Docker Hub | none | PASS | "Docker Hub (docker.io) is Docker's public registry and the default one" |
| 113 | Key words | Docker daemon (`dockerd`) | none | PASS | "It has a server with a long-running daemon process, `dockerd`" and "The daemon creates and manages Docker objects, such as images, containers, networks, and volumes" |
| 114 | Key words | Docker client (`docker`) | none | PASS | "It has a command line interface (CLI) client, `docker`" and "The CLI uses Docker APIs to control or interact with the Docker daemon" |
| 115 | Key words | Tag (`:latest`) | none | PASS | "If no tag is provided, Docker Engine uses the `:latest` tag as a default" |
| 116 | Key words | Digest | none | PASS | "When you pull an image by digest, you specify exactly which version of an image to pull" |
| 117 | Key words | Publish (`-p`) | none | PASS | "The `--publish` or `-p` flag makes a port available outside the host: `-p 8080:80`" |
| 118 | Key words | Namespaces | none | PASS | "Docker creates a set of namespaces and control groups for the container. Namespaces provide the first and most straightforward form of isolation" |

Open FAILs after round 9: 1

Changed after this round: Row 34 (How it works): the diagram of the client, the daemon, and the registry was introduced as "the tutorial's own summary of those sentences", and after the new paragraph "Pulling images" (S2) a reader, and the checker, took "those sentences" to mean the pulling sentences only. The client, `dockerd`, the REST API, and the objects of the daemon are in the paragraph "Client and daemon" (S1, S21, and S20). The introduction now says that the diagram is the tutorial's own summary of the sentences above about the client, the daemon, and pulling images. The "quote not in sources" note (row 107) is a PASS row whose quote joins two quotes of the notes, and both are in S2, so the repo claim check is not affected.

## Round 10 (2026-11-20)

# Fact check: devops / docker-basics (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Containers, images, registries, client and daemon, first commands | none | N/A | Framing sentence that describes the page. |
| 2 | Lede | Page explains Docker for a tester, with a practice run | none | N/A | Framing sentence that describes the page. |
| 3 | What it is | Docker Engine is an open source containerization technology for building and containerizing your applications | S1 | PASS | "Docker Engine is an open source containerization technology for building and containerizing your applications." |
| 4 | What it is | A container is an ordinary process, such as a Node.js server, that runs in isolation | S2 | PASS | "A container is an ordinary process on your computer, such as a Node.js server, that runs in isolation." |
| 5 | What it is | A container doesn't depend on what is installed on your machine | S2 | PASS | "Because everything the app needs is inside, a container doesn’t depend on what is installed on your machine." |
| 6 | What it is | Table, Container: ordinary process in isolation | S2 | PASS | Same quote as row 4. |
| 7 | What it is | Table, Container: its files come from an image | S2 | PASS | "where do those files come from? From an image." |
| 8 | What it is | Table, Image: package of OS files, runtime, dependencies and code, settings | S2 | PASS | "An image is a package of everything a container needs to start: the operating system files, the language runtime, the app’s dependencies and code, and settings such as which command to run." |
| 9 | What it is | Table, Registry: service that stores images so anyone with access can pull them | S2 | PASS | "a registry: a service that stores images so anyone with access can pull them." |
| 10 | What it is | Docker Hub (docker.io) is Docker's public registry and the default one | S2 | PASS | "Docker Hub (docker.io) is Docker’s public registry and the default one." |
| 11 | What it is | Docker Hub provides a container registry for storing, managing, and sharing Docker images | S4 | PASS | "Docker Hub simplifies development with the world's largest container registry for storing, managing, and sharing Docker images." |
| 12 | What it is | Each difference between machines is a chance for the app to work on one machine and fail on another | S2 | PASS | "Each difference is a chance for the app to work on one machine and fail on another." |
| 13 | What it is | Ten containers from the same image start from exactly the same files, today or next month | S2 | PASS | "Ten containers started from the same image start from exactly the same files, today or next month." |
| 14 | What it is | Delete a container and nothing else on your machine changes | S2 | PASS | "Delete a container and nothing else on your machine changes." |
| 15 | What it is | A VM isolates software by pretending to be a whole computer | S2 | PASS | "A virtual machine (VM) also isolates software, but it does so by pretending to be a whole computer." |
| 16 | What it is | Every VM boots its own OS, including its own kernel | S2 | PASS | "Every VM boots its own complete operating system, including its own kernel, the core of the operating system that talks to the hardware." |
| 17 | What it is | Every container on a machine shares that machine's kernel | S2 | PASS | "It’s still a process, so every container on a machine shares that machine’s kernel." |
| 18 | What it is | No OS to boot, so a container starts in about a second and one machine can run many | S2 | PASS | "There is no operating system to boot, which is why a container starts in about a second and why one machine can run many of them." |
| 19 | What it is | A VM's isolation is stronger; containers are separated by the kernel, VMs by the hypervisor's hardware boundary | S2 | PASS | "a VM’s isolation is stronger: containers that share a kernel are separated by that kernel, while VMs are separated by the hardware boundary the hypervisor creates." |
| 20 | What it is | In practice, you'll often use both | S2 | PASS | "In practice, you’ll often use both." |
| 21 | What it is | Cloud servers are usually VMs that run many containers each | S2 | PASS | "Cloud servers are usually VMs that run many containers each." |
| 22 | How it works | Docker Engine acts as a client-server application | S1 | PASS | "Docker Engine acts as a client-server application with:" |
| 23 | How it works | Server with a long-running daemon process, `dockerd` | S1 | PASS | "A server with a long-running daemon process dockerd." |
| 24 | How it works | APIs specify interfaces programs use to talk to and instruct the daemon | S1 | PASS | "APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon." |
| 25 | How it works | CLI client, `docker` | S1 | PASS | "A command line interface (CLI) client docker." |
| 26 | How it works | The CLI uses Docker APIs to control or interact with the daemon through scripting or direct CLI commands | S1 | PASS | "The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands." |
| 27 | How it works | The daemon creates and manages images, containers, networks, volumes | S1 | PASS | "The daemon creates and manages Docker objects, such as images, containers, networks, and volumes." |
| 28 | How it works | Engine API is a RESTful API accessed by an HTTP client such as wget or curl, or an HTTP library | S21 | PASS | "The Docker Engine API is a RESTful API accessed by an HTTP client such as wget or curl, or the HTTP library which is part of most modern programming languages." |
| 29 | How it works | REST API endpoint used by the CLI now uses a Unix socket instead of a TCP socket on 127.0.0.1 | S20 | PASS | "the REST API endpoint (used by the Docker CLI to communicate with the Docker daemon) changed in Docker 0.5.2, and now uses a Unix socket instead of a TCP socket bound on 127.0.0.1" |
| 30 | How it works | You can expose the REST API over HTTP if you explicitly decide to | S20 | PASS | "You can also expose the REST API over HTTP if you explicitly decide to do so." |
| 31 | How it works | `docker pull` downloads an image from a registry without running it | S2 | PASS | "docker pull downloads an image from a registry without running it." |
| 32 | How it works | `docker run` pulls the image it needs if it isn't on your machine | S2 | PASS | "docker run pulls the image it needs if it isn’t on your machine yet." |
| 33 | How it works | If you don't name a registry, Docker uses Docker Hub | S2 | PASS | "If you don’t name a registry, Docker uses Docker Hub." |
| 34 | How it works | Diagram, the tutorial's own summary of the sentences above | none | N/A | Summary of the page's own sentences. Each element is covered by rows 22 to 33. |
| 35 | How it works | `docker run` runs a command in a new container, pulling the image if needed and starting it | S10 | PASS | "The docker run command runs a command in a new container, pulling the image if needed and starting the container." |
| 36 | How it works | List 1: `--pull` value `missing` is the default | S10 | PASS | "missing (default) Pull the image if it was not found in the image cache, or use the cached image otherwise." |
| 37 | How it works | List 2: container uses the image's layers as they are and adds one thin writable layer | S2 | PASS | "it uses the image’s layers as they are and adds one thin writable layer of its own on top." |
| 38 | How it works | List 3: default bridge network is created automatically; new containers connect unless otherwise specified | S23 | PASS | "When you start Docker, a default bridge network (also called bridge) is created automatically, and newly-started containers connect to it unless otherwise specified." |
| 39 | How it works | List 4: a stopped container keeps its configuration and writable layer | S22 | PASS | "A stopped container isn’t gone: its configuration and its writable layer are" (next line: "kept"). |
| 40 | How it works | List 5: restart a stopped container with its changes using `docker start` | S10 | PASS | "You can restart a stopped container with all its previous changes intact using docker start." |
| 41 | How it works | Images are immutable | S2 | PASS | "Images are immutable. Once built, an image never changes." |
| 42 | How it works | Image is an ordered stack of layers of filesystem changes | S3 | PASS | "An image isn’t one big file. It’s an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted." |
| 43 | How it works | Each file-changing Dockerfile instruction makes one layer, which never changes | S3 | PASS | "Each Dockerfile instruction that changes files produces one layer, and once a layer is created, it never changes." |
| 44 | How it works | Docker reuses a layer only when nothing it depends on has changed | S3 | PASS | "Docker reuses a layer from an earlier build only when nothing it depends on has changed." |
| 45 | How it works | By default, files go to a writable container layer over read-only, immutable image layers | S5 | PASS | "By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers." |
| 46 | How it works | Container-layer data doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 47 | How it works | `docker run` creates namespaces and control groups | S20 | PASS | "When you start a container with docker run, behind the scenes Docker creates a set of namespaces and control groups for the container." |
| 48 | How it works | Namespaces are the first and most straightforward form of isolation | S20 | PASS | "Namespaces provide the first and most straightforward form of isolation." |
| 49 | How it works | Processes in a container cannot see, and even less affect, processes in another container or the host | S20 | PASS | "Processes running within a container cannot see, and even less affect, processes running in another container, or in the host system." |
| 50 | How it works | All ports of containers on bridge networks are accessible from the host and other containers on the same network | S6 | PASS | "all ports of containers on bridge networks are accessible from the Docker host and other containers connected to the same network." |
| 51 | How it works | They are not accessible from outside the host | S6 | PASS | "Ports are not accessible from outside the host or, with the default configuration, from containers in other networks." |
| 52 | How it works | `--publish`/`-p` makes a port available outside the host; `-p 8080:80` maps host 8080 to container TCP 80 | S6 | PASS | "Use the --publish or -p flag to make a port available outside the host" and "-p 8080:80 Map port 8080 on the Docker host to TCP port 80 in the container." |
| 53 | Try it | Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose | S7 | PASS | "Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose." |
| 54 | Try it | On Ubuntu, you can also install Docker Engine | S8 | PASS | S8 is titled "Install Docker Engine on Ubuntu". |
| 55 | Try it | Tutorial ran the steps on 2026-11-16 with Engine 29.9.3 on Linux | none | N/A | Record of the page's own run. |
| 56 | Try it | Step 1: run the `hello-world` image | S8 | PASS | "Verify that the installation is successful by running the hello-world image:" |
| 57 | Try it | Step 1: the command downloads a test image and runs it; the container prints a confirmation message and exits | S8 | PASS | "This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits." |
| 58 | Try it | Step 1: `docker` group exists with no users, so `sudo` is needed until the post-installation steps | S8 | PASS | "The docker user group exists but contains no users, which is why you’re required to use sudo to run Docker commands. Continue to Linux postinstall to allow non-privileged users to run Docker commands" |
| 59 | Try it | Step 1 code `docker run hello-world`, and output | S8 | PASS | Command: "docker run hello-world" (S8 line 570 shows it with `sudo`; the page explains `sudo` in row 58). The output block is the tutorial's own run record. |
| 60 | Try it | Step 2: `docker pull` downloads an image from a registry | S9 | PASS | "Download an image from a registry" |
| 61 | Try it | Step 2: with no tag, Docker Engine uses `:latest` | S9 | PASS | "Docker Engine uses the :latest tag as a default." |
| 62 | Try it | Step 2: `docker image ls` lists the images on your machine | S22 | PASS | "docker image ls lists the images on your machine." |
| 63 | Try it | Step 2: `docker image history` lists an image's layers, newest first | S3 | PASS | "docker image history lists an image’s layers, newest first." |
| 64 | Try it | Step 2: Docker prints the digest after the pull has finished | S9 | PASS | "Docker prints the digest of the image after the pull has finished." |
| 65 | Try it | Step 2: in the run, the newest layer copied `/app/build` to `/usr/share/nginx/html`, with the history table | none | N/A | Record of the page's own run. |
| 66 | Try it | Step 3: `-d` runs the container in the background and prints the container ID | S10 | PASS | "Run container in background and print container ID" |
| 67 | Try it | Step 3: `--name` assigns a name to the container | S10 | PASS | "--name Assign a name to the container" |
| 68 | Try it | Step 3: with the localhost IP in the publish flag, only the Docker host can access the port; the code uses `-p 127.0.0.1:8080:80` | S6 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 69 | Try it | Step 4: `docker ps` shows only running containers | S22 | PASS | "docker ps shows only running containers" |
| 70 | Try it | Step 4: `docker logs` fetches the logs of a container | S12 | PASS | "Fetch the logs of a container" |
| 71 | Try it | Step 4: `docker exec` executes a command in a running container | S13 | PASS | "Execute a command in a running container" |
| 72 | Try it | Step 4: in the run, `docker ps` showed the port mapping and `ls` listed files | none | N/A | Record of the page's own run. |
| 73 | Try it | Step 5: `docker stop` stops one or more running containers | S14 | PASS | "Stop one or more running containers" |
| 74 | Try it | Step 5: by default `docker ps` shows just running containers; `-a` shows all | S11 | PASS | "-a, --all Show all containers (default shows just running)" |
| 75 | Try it | Step 5: `docker rm` removes one or more containers | S15 | PASS | "Remove one or more containers" |
| 76 | Try it | Step 5: `docker rm` deletes the container and its writable layer | S22 | PASS | "docker rm deletes the container and its writable layer." |
| 77 | Try it | Step 6: `--rm` removes the container and its anonymous volumes when it exits | S10 | PASS | "--rm Automatically remove the container and its associated anonymous volumes when it exits" |
| 78 | Tester uses | Testcontainers is an open source library for throwaway, lightweight instances of databases, brokers, browsers, or anything in a container | S18 | PASS | "Testcontainers is an open source library for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container." |
| 79 | Tester uses | You define dependencies as code; containers are created and then deleted | S18 | PASS | "Define your test dependencies as code, then simply run your tests and containers will be created and then deleted." |
| 80 | Tester uses | The project says tests always start with a known state | S18 | PASS | "Trust that your tests will always start with a known state." |
| 81 | Tester uses | Playwright publishes a Docker image with the browsers and browser system dependencies | S19 | PASS | "This image includes the Playwright browsers and browser system dependencies." |
| 82 | Tester uses | The Playwright package is not in the image and should be installed separately | S19 | PASS | "The Playwright package/dependency is not included in the image and should be installed separately." |
| 83 | Tester uses | The image is for testing and development only | S19 | PASS | "This Docker image is intended to be used for testing and development purposes only." |
| 84 | Tester uses | For E2E tests on trusted websites, the example starts a shell; code `docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash` | S19 | PASS | "On trusted websites, you can avoid creating a separate user..." then "docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash" |
| 85 | Tester uses | `--ipc=host` is recommended with Chromium | S19 | PASS | "Using --ipc=host is recommended when using Chromium." |
| 86 | Tester uses | `docker pull ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | S9 | PASS | "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu 24.04 image." |
| 87 | Tester uses | Pulling by digest specifies exactly which version to pull | S9 | PASS | "When pulling an image by digest, you specify exactly which version of an image to pull." |
| 88 | Tester uses | That lets you pin an image and guarantee it is always the same | S9 | PASS | "Doing so, allows you to \"pin\" an image to that version, and guarantee that the image you're using is always the same." |
| 89 | Tester uses | `docker image ls --digests` shows the digests | S16 | PASS | "List image digests (--digests)" |
| 90 | Tester uses | `docker logs --timestamps` adds an RFC3339Nano timestamp to each log entry | S12 | PASS | "will add an RFC3339Nano timestamp , for example 2014-09-16T06:17:46.000000000Z, to each log entry." |
| 91 | Tester uses | `--since` shows only logs after a given date, or a relative time such as `42m` | S12 | PASS | "The --since option shows only the container logs generated after a given date." and "or relative (e.g. 42m for 42 minutes)" |
| 92 | Tester uses | `docker inspect` returns low-level information; by default it renders a JSON array | S17 | PASS | "Return low-level information on Docker objects" and "By default, docker inspect will render results in a JSON array." |
| 93 | Tester uses | Container-layer data doesn't persist when the container is destroyed | S5 | PASS | Same quote as row 46. |
| 94 | Tester uses | Each `docker run --rm` starts a new container from the image, and the container is removed when it exits | S10 | PASS | "runs a command in a new container" and "--rm Automatically remove the container ... when it exits" |
| 95 | Common mistakes | Container-layer data doesn't persist when the container is destroyed | S5 | PASS | Same quote as row 46. |
| 96 | Common mistakes | Publishing ports is insecure by default: available to the outside world as well | S6 | PASS | "Publishing container ports is insecure by default. Meaning, when you publish a container's ports it becomes available not only to the Docker host, but to the outside world as well." |
| 97 | Common mistakes | Include `127.0.0.1` in the publish flag so only the Docker host can access the port | S6 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 98 | Common mistakes | With no tag, Docker Engine uses `:latest` | S9 | PASS | "Docker Engine uses the :latest tag as a default." |
| 99 | Common mistakes | `ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | S9 | PASS | "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu 24.04 image." |
| 100 | Common mistakes | Pull by digest when you need the same image every time | S9 | PASS | "prefer to use a fixed version of an image. Docker enables you to pull an image by its digest." |
| 101 | Common mistakes | If the Playwright version in the image does not match the project, Playwright can't locate browser executables | S19 | PASS | "If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables." |
| 102 | Common mistakes | `docker ps` shows only running containers; `docker ps -a` shows all | S22 | PASS | "docker ps shows only running containers" and "docker ps -a shows all of them" |
| 103 | Common mistakes | If the container does not exit after the timeout, it is killed with `SIGKILL` | S14 | PASS | "If the container does not exit after the timeout elapses, it's forcibly killed with a SIGKILL signal." |
| 104 | Common mistakes | `--timeout` sets the number of seconds to wait | S14 | PASS | "The --timeout flag sets the number of seconds to wait for the container" |
| 105 | What a tester can check | Callout "Tutorial advice": six items of advice | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact that the rest of the page does not support (`127.0.0.1` in rows 68 and 97, `--rm` in row 77, `--timestamps` in row 90, Playwright match in row 101). |
| 106 | Key words | Docker Engine | none | PASS | Page: "Docker Engine is an open source containerization technology for building and containerizing your applications". |
| 107 | Key words | Container | none | PASS | Page: "An ordinary process on your computer, such as a Node.js server, that runs in isolation. Its files come from an image". |
| 108 | Key words | Image | none | PASS | Page: "A package of everything a container needs to start: the operating system files, the language runtime...". |
| 109 | Key words | Layer | none | PASS | Page: "an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted". |
| 110 | Key words | Writable container layer | none | PASS | Page: "all files created inside a container are stored on a writable container layer" and "Data written to the container layer doesn't persist when the container is destroyed". |
| 111 | Key words | Registry | none | PASS | Page: "A service that stores images so anyone with access can pull them". |
| 112 | Key words | Docker Hub | none | PASS | Page: "Docker Hub (docker.io) is Docker's public registry and the default one". |
| 113 | Key words | Docker daemon (`dockerd`) | none | PASS | Page: "a server with a long-running daemon process, `dockerd`" and "The daemon creates and manages Docker objects...". |
| 114 | Key words | Docker client (`docker`) | none | PASS | Page: "It has a command line interface (CLI) client, `docker`. The CLI uses Docker APIs to control or interact with the Docker daemon". |
| 115 | Key words | Tag (`:latest`) | none | PASS | Page: "If no tag is provided, Docker Engine uses the `:latest` tag as a default". |
| 116 | Key words | Digest | none | PASS | Page: "When you pull an image by digest, you specify exactly which version of an image to pull". |
| 117 | Key words | Publish (`-p`) | none | PASS | Page: "The `--publish` or `-p` flag makes a port available outside the host: `-p 8080:80` maps port 8080...". |
| 118 | Key words | Namespaces | none | PASS | Page: "Docker creates a set of namespaces and control groups for the container" and "Namespaces provide the first and most straightforward form of isolation". |

Open FAILs after round 10: 0

Changed after this round: No FAILs. The writer re-read the Bangla panel after the round and found one sentence that was less exact than the Technical sentence: for `docker pull` it said "কিছু না চালিয়েই" (without running anything), and the Technical text says "without running it" (the image). The Bangla sentence now says that the image is not run.

## Round 11 (2026-11-20)

# Fact check: devops / docker-basics (round 11)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Containers, images, registries, client/daemon, first commands | – | N/A | Describes the page. |
| 2 | Lede | What the page explains; practice run; ends with tester uses; link to the next page | – | N/A | Describes the page. The link is not a fact. |
| 3 | What it is | Docker Engine is an open source containerization technology for building and containerizing applications | S1 | PASS | "Docker Engine is an open source containerization technology for building and containerizing your applications." |
| 4 | What it is | A container is an ordinary process, such as a Node.js server, that runs in isolation | S2 | PASS | "A container is an ordinary process on your computer, such as a Node.js server, that runs in isolation." |
| 5 | What it is | A container doesn't depend on what is installed on your machine | S2 | PASS | "Because everything the app needs is inside, a container doesn’t depend on what is installed on your machine." |
| 6 | What it is (table) | Container: ordinary process; its files come from an image | S2 | PASS | "where do those files come from? From an image." |
| 7 | What it is (table) | Image: package of OS files, runtime, dependencies and code, settings such as the command to run | S2 | PASS | "An image is a package of everything a container needs to start: the operating system files, the language runtime, the app’s dependencies and code, and settings such as which command to run." |
| 8 | What it is (table) | Registry stores images so anyone with access can pull them | S2 | PASS | "a registry: a service that stores images so anyone with access can pull them." |
| 9 | What it is (table) | Docker Hub (docker.io) is Docker's public registry and the default | S2 | PASS | "Docker Hub (docker.io) is Docker’s public registry and the default one." |
| 10 | What it is (table) | Docker Hub provides a container registry for storing, managing, sharing images | S4 | PASS | "Docker Hub simplifies development with the world's largest container registry for storing, managing, and sharing Docker images." |
| 11 | What it is | Each difference between machines is a chance for the app to work on one and fail on another | S2 | PASS | "Each difference is a chance for the app to work on one machine and fail on another." |
| 12 | What it is | Ten containers from one image start from exactly the same files, today or next month | S2 | PASS | "Ten containers started from the same image start from exactly the same files, today or next month." |
| 13 | What it is | Delete a container and nothing else on your machine changes | S2 | PASS | "Delete a container and nothing else on your machine changes." |
| 14 | What it is | A VM isolates software by pretending to be a whole computer | S2 | PASS | "A virtual machine (VM) also isolates software, but it does so by pretending to be a whole computer." |
| 15 | What it is | Every VM boots its own OS, with its own kernel (the core of the OS that talks to the hardware) | S2 | PASS | "Every VM boots its own complete operating system, including its own kernel, the core of the operating system that talks to the hardware." |
| 16 | What it is | Every container on a machine shares that machine's kernel | S2 | PASS | "It’s still a process, so every container on a machine shares that machine’s kernel." |
| 17 | What it is | No OS to boot, so a container starts in about a second and one machine can run many | S2 | PASS | "There is no operating system to boot, which is why a container starts in about a second and why one machine can run many of them." |
| 18 | What it is | VM isolation is stronger: kernel separation vs hardware boundary of the hypervisor | S2 | PASS | "a VM’s isolation is stronger: containers that share a kernel are separated by that kernel, while VMs are separated by the hardware boundary the hypervisor creates." |
| 19 | What it is | In practice you'll often use both | S2 | PASS | "In practice, you’ll often use both." |
| 20 | What it is | Cloud servers are usually VMs that run many containers each | S2 | PASS | "Cloud servers are usually VMs that run many containers each." |
| 21 | How it works | Docker Engine acts as a client-server application | S1 | PASS | "Docker Engine acts as a client-server application with:" |
| 22 | How it works | Server with a long-running daemon process, `dockerd` | S1 | PASS | "A server with a long-running daemon process dockerd." |
| 23 | How it works | APIs specify interfaces that programs use to talk to and instruct the daemon | S1 | PASS | "APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon." |
| 24 | How it works | CLI client `docker` | S1 | PASS | "A command line interface (CLI) client docker." |
| 25 | How it works | CLI uses Docker APIs to control the daemon through scripting or direct CLI commands | S1 | PASS | "The CLI uses Docker APIs to control or interact with the Docker daemon through scripting or direct CLI commands." |
| 26 | How it works | Daemon creates and manages images, containers, networks, volumes | S1 | PASS | "The daemon creates and manages Docker objects, such as images, containers, networks, and volumes." |
| 27 | How it works | Engine API is RESTful, accessed by wget/curl or an HTTP library | S21 | PASS | "The Docker Engine API is a RESTful API accessed by an HTTP client such as wget or curl, or the HTTP library which is part of most modern programming languages." |
| 28 | How it works | REST endpoint now uses a Unix socket instead of a TCP socket on 127.0.0.1 | S20 | PASS | "the REST API endpoint (used by the Docker CLI to communicate with the Docker daemon) changed in Docker 0.5.2, and now uses a Unix socket instead of a TCP socket bound on 127.0.0.1" |
| 29 | How it works | You can expose the REST API over HTTP if you explicitly decide to | S20 | PASS | "You can also expose the REST API over HTTP if you explicitly decide to do so." |
| 30 | How it works | `docker pull` downloads an image from a registry without running it | S2 | PASS | "docker pull downloads an image from a registry without running it." |
| 31 | How it works | `docker run` pulls the image if it isn't on your machine yet | S2 | PASS | "docker run pulls the image it needs if it isn’t on your machine yet." |
| 32 | How it works | If no registry is named, Docker uses Docker Hub | S2 | PASS | "If you don’t name a registry, Docker uses Docker Hub." |
| 33 | How it works | Diagram: tutorial's own summary of the sentences above | – | N/A | Page's own summary of claims 21–32, which are cited. |
| 34 | How it works | `docker run` runs a command in a new container, pulling the image if needed and starting it | S10 | PASS | "The docker run command runs a command in a new container, pulling the image if needed and starting the container." |
| 35 | How it works | List item 1: `--pull` default `missing` | S10 | PASS | "missing (default) Pull the image if it was not found in the image cache, or use the cached image otherwise." |
| 36 | How it works | List item 2: image layers as they are, plus one thin writable layer on top | S2 | PASS | "it uses the image’s layers as they are and adds one thin writable layer of its own on top." |
| 37 | How it works | List item 3: default bridge network created automatically; new containers connect unless otherwise specified | S23 | PASS | "a default bridge network (also called bridge) is created automatically, and newly-started containers connect to it unless otherwise specified." |
| 38 | How it works | List item 4: a stopped container keeps its configuration and writable layer | S22 | PASS | "A stopped container isn’t gone: its configuration and its writable layer are" |
| 39 | How it works | List item 5: `docker start` restarts a stopped container with changes intact | S10 | PASS | "You can restart a stopped container with all its previous changes intact using docker start." |
| 40 | How it works | Images are immutable: once built, never change | S2 | PASS | "Images are immutable. Once built, an image never changes." |
| 41 | How it works | An image is an ordered stack of layers of filesystem changes: added, changed, deleted | S3 | PASS | "It’s an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted." |
| 42 | How it works | Each file-changing Dockerfile instruction makes one layer; a layer never changes | S3 | PASS | "Each Dockerfile instruction that changes files produces one layer, and once a layer is created, it never changes." |
| 43 | How it works | Docker reuses a layer only when nothing it depends on has changed | S3 | PASS | "Docker reuses a layer from an earlier build only when nothing it depends on has changed." |
| 44 | How it works | By default, files go to a writable container layer on top of read-only, immutable image layers | S5 | PASS | "By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers." |
| 45 | How it works | Data in the container layer doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 46 | How it works | Link: Docker in Practice shows how volumes keep data | – | N/A | Link to another page. |
| 47 | How it works | `docker run` creates namespaces and control groups for the container | S20 | PASS | "docker run, behind the scenes Docker creates a set of namespaces and control" |
| 48 | How it works | Namespaces give the first and most straightforward form of isolation | S20 | PASS | "Namespaces provide the first and most straightforward form of isolation." |
| 49 | How it works | Processes in a container cannot see, and even less affect, processes in another container or the host | S20 | PASS | "Processes running within a container cannot see, and even" (the next line gives "less affect…") |
| 50 | How it works | All ports of containers on bridge networks are reachable from the Docker host and other containers on the same network | S6 | PASS | "all ports of containers on bridge networks are accessible from the Docker host and other containers connected to the same network." |
| 51 | How it works | They are not accessible from outside the host | S6 | PASS | "Ports are not accessible from outside the host or, with the default configuration, from containers in other networks." |
| 52 | How it works | `-p`/`--publish` makes a port available outside the host; `-p 8080:80` maps host 8080 to container TCP 80 | S6 | PASS | "Use the --publish or -p flag to make a port available outside the host" and "-p 8080:80 Map port 8080 on the Docker host to TCP port 80 in the container." |
| 53 | Try it | Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose | S7 | PASS | "Docker Desktop includes Docker Engine, the Docker CLI, Buildx, and Compose." |
| 54 | Try it | On Ubuntu you can also install Docker Engine | S8 | PASS | Page title in S8: "Install Docker Engine on Ubuntu". |
| 55 | Try it | Run date and Docker Engine version of the tutorial | – | N/A | Record of the page's own run. |
| 56 | Try it | Step 1: run the `hello-world` image | S8 | PASS | "Verify that the installation is successful by running the hello-world image:" |
| 57 | Try it | The command downloads a test image and runs it; the container prints a confirmation message and exits | S8 | PASS | "This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits." |
| 58 | Try it | The `docker` group exists with no users, so `sudo` is needed until the post-installation steps for Linux | S8 | PASS | "The docker user group exists but contains no users, which is why you’re required to use sudo to run Docker commands. Continue to Linux postinstall to allow non-privileged users to run Docker commands" |
| 59 | Try it | Code `docker run hello-world`, and the output start | S8 | PASS | "$ sudo docker run hello-world" (the output is the page's own run record: N/A) |
| 60 | Try it | `docker pull` downloads an image from a registry | S9 | PASS | "Download an image from a registry" |
| 61 | Try it | With no tag, Docker Engine uses `:latest` | S9 | PASS | "Docker Engine uses the :latest tag as a default." |
| 62 | Try it | `docker image ls` lists the images on your machine | S22 | PASS | "docker image ls lists the images on your machine." |
| 63 | Try it | `docker image history` lists an image's layers, newest first | S3 | PASS | "docker image history lists an image’s layers, newest first." |
| 64 | Try it | Docker prints the digest after the pull finishes | S9 | PASS | "Docker prints the digest of the image after the pull has finished." |
| 65 | Try it | Newest layer copied `/app/build` to `/usr/share/nginx/html`; history table | – | N/A | Record of the page's own run, after the run sentence. |
| 66 | Try it | `-d` runs in the background and prints the container ID | S10 | PASS | "Run container in background and print container ID" |
| 67 | Try it | `--name` assigns a name | S10 | PASS | "Assign a name to the container" |
| 68 | Try it | With the localhost IP in the publish flag, only the Docker host can access the port; code `-p 127.0.0.1:8080:80` | S6 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 69 | Try it | "Then visit http://localhost:8080 in your browser." | – | N/A | The reader's own step. |
| 70 | Try it | `docker ps` shows only running containers | S22 | PASS | "docker ps shows only running containers" |
| 71 | Try it | `docker logs` fetches the logs of a container | S12 | PASS | "Fetch the logs of a container" |
| 72 | Try it | `docker exec` executes a command in a running container | S13 | PASS | "Execute a command in a running container" |
| 73 | Try it | Output of `docker ps` and `ls` in the run | – | N/A | Record of the page's own run. |
| 74 | Try it | `docker stop` stops one or more running containers | S14 | PASS | "Stop one or more running containers" |
| 75 | Try it | By default `docker ps` shows just running containers; `-a` shows all | S11 | PASS | "The docker ps command only shows running containers by default. To see all containers, use the --all (or -a) flag" |
| 76 | Try it | `docker rm` removes one or more containers | S15 | PASS | "Remove one or more containers" |
| 77 | Try it | `docker rm` deletes the container and its writable layer | S22 | PASS | "docker rm deletes the container and its writable layer." |
| 78 | Try it | `--rm` removes the container and its anonymous volumes when it exits; code `docker run --rm hello-world` | S10 | PASS | "Automatically remove the container and its associated anonymous volumes when it exits" |
| 79 | How a tester uses it | Testcontainers is an open source library for throwaway, lightweight instances of databases, brokers, browsers, or anything that runs in a container | S18 | PASS | "Testcontainers is an open source library for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container." |
| 80 | How a tester uses it | Define test dependencies as code; containers are created and then deleted | S18 | PASS | "Define your test dependencies as code, then simply run your tests and containers will be created and then deleted." |
| 81 | How a tester uses it | Tests will always start with a known state | S18 | PASS | "Trust that your tests will always start with a known state." |
| 82 | How a tester uses it | Playwright image includes the browsers and browser system dependencies | S19 | PASS | "This image includes the Playwright browsers and browser system dependencies." |
| 83 | How a tester uses it | The Playwright package is not in the image and should be installed separately | S19 | PASS | "The Playwright package/dependency is not included in the image and should be installed separately." |
| 84 | How a tester uses it | The image is for testing and development only | S19 | PASS | "This Docker image is intended to be used for testing and development purposes only." |
| 85 | How a tester uses it | For end-to-end tests on trusted websites, Playwright's example starts a shell; code with `--ipc=host` | S19 | PASS | "On trusted websites, ... docker run -it --rm --ipc=host mcr.microsoft.com/playwright:v1.64.1-noble /bin/bash" |
| 86 | How a tester uses it | `--ipc=host` is recommended with Chromium | S19 | PASS | "Using --ipc=host is recommended when using Chromium." |
| 87 | How a tester uses it | Link: CI/CD Pipelines | – | N/A | Link to another page. |
| 88 | How a tester uses it | `docker pull ubuntu:24.04` pulls the latest version of the Ubuntu 24.04 image | S9 | PASS | "docker pull ubuntu:24.04 pulls the latest version of the Ubuntu" |
| 89 | How a tester uses it | Pulling by digest specifies exactly which version | S9 | PASS | "When pulling an image by digest, you specify exactly which version of an image to pull." |
| 90 | How a tester uses it | That lets you pin an image and guarantee it is always the same | S9 | PASS | "allows you to \"pin\" an image to that version, and guarantee that the image you're using is always the same." |
| 91 | How a tester uses it | `docker image ls --digests` shows digests | S16 | PASS | "List image digests (--digests)" |
| 92 | How a tester uses it | `docker logs --timestamps` adds an RFC3339Nano timestamp to each log entry | S12 | PASS | "The docker logs --timestamps command will add an RFC3339Nano timestamp" |
| 93 | How a tester uses it | `--since` shows logs generated after a date, or a relative time such as `42m` | S12 | PASS | "The --since option shows only the container logs generated after" and "or relative (e.g. 42m for 42 minutes)" |
| 94 | How a tester uses it | `docker inspect` returns low-level information on Docker objects; JSON array by default | S17 | PASS | "Return low-level information on Docker objects" and "By default, docker inspect will render results in a JSON array." |
| 95 | How a tester uses it | Data in the container layer doesn't persist when the container is destroyed | S5 | PASS | "Data written to the container layer doesn't persist when the container is destroyed." |
| 96 | How a tester uses it | Each `docker run --rm` starts a new container from the image; it is removed on exit | S10 | PASS | "runs a command in a new container" and "Automatically remove the container ... when it exits" |
| 97 | Common mistakes | Container-layer data doesn't persist | S5 | PASS | Same quote as #95. |
| 98 | Common mistakes | "Keep data that must survive in a volume" (link) | – | PASS | No cite of its own, but it explains the S5 sentence before it. S5: "Volumes are persistent storage mechanisms managed by the Docker daemon." |
| 99 | Common mistakes | Publishing ports is insecure by default: available to the outside world too | S6 | PASS | "Publishing container ports is insecure by default. Meaning, when you publish a container's ports it becomes available not only to the Docker host, but to the outside world as well." |
| 100 | Common mistakes | Include `127.0.0.1` so only the Docker host can access the port | S6 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 101 | Common mistakes | No tag means `:latest` | S9 | PASS | "Docker Engine uses the :latest tag as a default." |
| 102 | Common mistakes | `ubuntu:24.04` pulls the latest version of Ubuntu 24.04 | S9 | PASS | Same quote as #88. |
| 103 | Common mistakes | Pull by digest when you need the same image every time | S9 | PASS | "guarantee that the image you're using is always the same." |
| 104 | Common mistakes | A Playwright version mismatch means Playwright cannot find browser executables | S19 | PASS | "If the Playwright version in your Docker image does not match the version in your project/tests, Playwright will be unable to locate browser executables." |
| 105 | Common mistakes | `docker ps` shows only running containers; `docker ps -a` shows all | S22 | PASS | "docker ps shows only running containers, so todo disappears from it. docker ps -a shows all of them" |
| 106 | Common mistakes | After the timeout, a container that has not exited is killed with `SIGKILL` | S14 | PASS | "If the container does not exit after the timeout elapses, it's forcibly killed with a SIGKILL signal." |
| 107 | Common mistakes | `--timeout` sets the number of seconds to wait | S14 | PASS | "The --timeout flag sets the number of seconds to wait for the container to stop" |
| 108 | What a tester can check | Callout "Tutorial advice", six items | – | PASS | The callout says it is "the tutorial's own advice". It states no tool fact that the rest of the page does not support (publish to `127.0.0.1`, `--rm`, `docker logs --timestamps`, Playwright version match). |
| 109 | Key words | Docker Engine | – | PASS | Page sentence: "Docker Engine is an open source containerization technology for building and containerizing your applications" |
| 110 | Key words | Container | – | PASS | Page: "A container is an ordinary process on your computer ... Its files come from an image" |
| 111 | Key words | Image | – | PASS | Page: "A package of everything a container needs to start: the operating system files, the language runtime..." |
| 112 | Key words | Layer | – | PASS | Page: "An image isn't one big file; it's an ordered stack of layers, each one a set of filesystem changes: files added, changed, or deleted" |
| 113 | Key words | Writable container layer | – | PASS | Page: "all files created inside a container are stored on a writable container layer" and "doesn't persist when the container is destroyed" |
| 114 | Key words | Registry | – | PASS | Page: "A service that stores images so anyone with access can pull them" |
| 115 | Key words | Docker Hub | – | PASS | Page: "Docker Hub (docker.io) is Docker's public registry and the default one" |
| 116 | Key words | Docker daemon | – | PASS | Page: "a long-running daemon process, `dockerd`" and "The daemon creates and manages Docker objects" |
| 117 | Key words | Docker client | – | PASS | Page: "a command line interface (CLI) client, `docker`" and "The CLI uses Docker APIs to control or interact with the Docker daemon" |
| 118 | Key words | Tag (`:latest`) | – | PASS | Page: "If no tag is provided, Docker Engine uses the `:latest` tag as a default" |
| 119 | Key words | Digest | – | PASS | Page: "When you pull an image by digest, you specify exactly which version of an image to pull" |
| 120 | Key words | Publish (`-p`) | – | PASS | Page: "The `--publish` or `-p` flag makes a port available outside the host: `-p 8080:80`" |
| 121 | Key words | Namespaces | – | PASS | Page: "Docker creates a set of namespaces and control groups for the container" and "Namespaces provide the first and most straightforward form of isolation" |

Open FAILs after round 11: 0

Open FAILs: 0
