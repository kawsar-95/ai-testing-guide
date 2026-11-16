# Research notes: Docker Basics

Page: `content/devops/docker-basics.mdx`. Module: DevOps & Cloud. Date: 2026-11-16 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): containers, images, and registries, the client and the daemon, what `docker run` does, layers and the writable container layer, ports, a practice run, and the ways that a tester uses containers. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had three sentences from the Docker overview; the page keeps the first one.

The practice run of `## Try it` follows the Docker Docs: `hello-world` from S8, `docker/welcome-to-docker` and the commands `docker pull`, `docker image ls`, `docker image history`, `docker run -d -p`, `docker ps`, and `docker stop` from S2 and S3. It was run on 2026-11-16 with Docker Engine 29.9.3 on Linux, as a user in the `docker` group (so without `sudo`). The page shows parts of the real output and says that IDs, sizes, and times differ. The run used `-p 127.0.0.1:8080:80` (S6) instead of S2's `-p 8080:80`, and `--name welcome` (S10). `curl -s http://localhost:8080` returned the page (`<meta name="description" content="Your first Docker container"/>`); the page tells the reader to visit the address in a browser, as S2 does. `docker exec welcome ls /usr/share/nginx/html` printed `50x.html`, `asset-manifest.json`, `favicon.ico`, `index.html`, `robots.txt`, and `static`, one per line. `docker image ls` printed the Docker 29 columns (`IMAGE`, `ID`, `DISK USAGE`, `CONTENT SIZE`, `EXTRA`), not the older ones that S3 shows, so the page does not show that output. Every container of the run was removed at the end; other containers on the machine were not touched.

The Playwright command in `## How a tester uses it` is S19's, with the tag that S19 showed on 2026-11-16 (`v1.64.1-noble`). It was not run.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is Docker? (Docker Docs) | https://docs.docker.com/get-started/docker-overview/ |
| S2 | What is a container? (Docker Docs) | https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/ |
| S3 | What is an image? (Docker Docs) | https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/ |
| S4 | What is a registry? (Docker Docs) | https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-registry/ |
| S5 | Storage (Docker Docs) | https://docs.docker.com/engine/storage/ |
| S6 | Port publishing and mapping (Docker Docs) | https://docs.docker.com/engine/network/port-publishing/ |
| S7 | Get Docker (Docker Docs) | https://docs.docker.com/get-started/get-docker/ |
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

## Claims

| Claim | Source | Quote |
|---|---|---|
| Docker is an open platform for developing, shipping, and running applications. | S1 | "Docker is an open platform for developing, shipping, and running applications" |
| Docker can package and run an application in a loosely isolated environment called a container. | S1 | "package and run an application in a loosely isolated environment called a container" |
| Containers are lightweight and contain everything needed to run the application, so you don't rely on what's installed on the host. | S1 | "Containers are lightweight and contain everything needed to run the application, so you don't need to rely on what's installed on the host" |
| A container is a runnable instance of an image. | S1 | "A container is a runnable instance of an image" |
| Containers are isolated processes for each of your app's components. | S2 | "containers are isolated processes for each of your app's components" |
| An image is a standardized package with all of the files, binaries, libraries, and configurations to run a container. | S3 | "A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container" |
| A registry is a centralized location for storing and sharing container images. | S4 | "An image registry is a centralized location for storing and sharing your container images" |
| Docker Hub is a public registry that anyone can use and is the default registry. | S4 | "Docker Hub is a public registry that anyone can use and is the default registry" |
| Developers use Docker to push applications into a test environment and run automated and manual tests. | S1 | "They use Docker to push their applications into a test environment and run automated and manual tests" |
| When they find bugs, they fix them and redeploy to the test environment for testing and validation. | S1 | "redeploy them to the test environment for testing and validation" |
| Everyone you share a container with gets the same container that works in the same way. | S1 | "be sure that everyone you share with gets the same container that works in the same way" |
| A VM is an entire operating system with its own kernel, hardware drivers, programs, and applications. | S2 | "a VM is an entire operating system with its own kernel, hardware drivers, programs, and applications" |
| A container is an isolated process with all of the files it needs to run. | S2 | "A container is simply an isolated process with all of the files it needs to run" |
| Multiple containers share the same kernel, so you can run more applications on less infrastructure. | S2 | "they all share the same kernel, allowing you to run more applications on less infrastructure" |
| In a cloud, machines are typically VMs, and a VM with a container runtime can run multiple containerized applications. | S2 | "the provisioned machines are typically VMs" |
| In a cloud, machines are typically VMs, and a VM with a container runtime can run multiple containerized applications. | S2 | "a VM with a container runtime can run multiple containerized applications" |
| Docker uses a client-server architecture. | S1 | "Docker uses a client-server architecture" |
| The client sends commands such as docker run to dockerd, which carries them out. | S1 | "the client sends these commands to dockerd, which carries them out" |
| The daemon listens for Docker API requests and manages images, containers, networks, and volumes. | S1 | "listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes" |
| The client and daemon communicate using a REST API, over UNIX sockets or a network interface. | S1 | "communicate using a REST API, over UNIX sockets or a network interface" |
| With docker pull or docker run, Docker pulls the required images from your configured registry. | S1 | "Docker pulls the required images from your configured registry" |
| The overview follows docker run -i -t ubuntu /bin/bash. | S1 | "docker run -i -t ubuntu /bin/bash" |
| If you don't have the image locally, Docker pulls it from your configured registry. | S1 | "If you don't have the ubuntu image locally, Docker pulls it from your configured registry" |
| Docker creates a new container. | S1 | "Docker creates a new container" |
| Docker allocates a read-write filesystem to the container, as its final layer. | S1 | "Docker allocates a read-write filesystem to the container, as its final layer" |
| Docker connects the container to the default network and assigns it an IP address. | S1 | "Docker creates a network interface to connect the container to the default network" |
| Docker connects the container to the default network and assigns it an IP address. | S1 | "assigning an IP address to the container" |
| Docker starts the container and executes /bin/bash. | S1 | "Docker starts the container and executes /bin/bash" |
| After exit, the container stops but isn't removed; you can start it again or remove it. | S1 | "the container stops but isn't removed. You can start it again or remove it" |
| Images are immutable: once created, an image can't be modified. | S3 | "Images are immutable. Once an image is created, it can't be modified" |
| Images are composed of layers; each layer is a set of file system changes. | S3 | "Container images are composed of layers. Each layer represents a set of file system changes" |
| Each Dockerfile instruction creates a layer; on rebuild, only changed layers are rebuilt. | S1 | "Each instruction in a Dockerfile creates a layer in the image" |
| Each Dockerfile instruction creates a layer; on rebuild, only changed layers are rebuilt. | S1 | "only those layers which have changed are rebuilt" |
| Files created inside a container are stored on a writable container layer on top of the read-only image layers. | S5 | "By default all files created inside a container are stored on a writable container layer that sits on top of the read-only, immutable image layers" |
| Data written to the container layer doesn't persist when the container is destroyed. | S5 | "Data written to the container layer doesn't persist when the container is destroyed" |
| Docker uses namespaces to provide the isolated workspace called the container. | S1 | "Docker uses a technology called namespaces to provide the isolated workspace called the container" |
| Each aspect of a container runs in a separate namespace, and its access is limited to that namespace. | S1 | "Each aspect of a container runs in a separate namespace and its access is limited to that namespace" |
| Ports of containers on bridge networks are accessible from the Docker host and other containers on the same network. | S6 | "all ports of containers on bridge networks are accessible from the Docker host and other containers connected to the same network" |
| They are not accessible from outside the host. | S6 | "Ports are not accessible from outside the host" |
| --publish or -p makes a port available outside the host; -p 8080:80 maps host port 8080 to container port 80. | S6 | "Use the --publish or -p flag to make a port available outside the host" |
| --publish or -p makes a port available outside the host; -p 8080:80 maps host port 8080 to container port 80. | S6 | "Map port 8080 on the Docker host to TCP port 80 in the container" |
| Docker Desktop delivers all Docker tools to a Mac, a Windows computer, or a Linux computer. | S7 | "delivers all Docker tools to your Mac" |
| Docker Desktop delivers all Docker tools to a Mac, a Windows computer, or a Linux computer. | S7 | "delivers all Docker tools to your Windows computer" |
| Docker Desktop delivers all Docker tools to a Mac, a Windows computer, or a Linux computer. | S7 | "delivers all Docker tools to your Linux computer" |
| On Ubuntu you can install Docker Engine. | S8 | "Install Docker Engine on Ubuntu" |
| Verify the install with the hello-world image. | S8 | "Verify that the installation is successful by running the hello-world image" |
| It downloads a test image and runs it; the container prints a confirmation message and exits. | S8 | "This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits" |
| The docker group exists but contains no users, so you need sudo; the post-installation steps for Linux let non-privileged users run Docker. | S8 | "The docker user group exists but contains no users, which is why you're required to use sudo to run Docker commands" |
| The docker group exists but contains no users, so you need sudo; the post-installation steps for Linux let non-privileged users run Docker. | S8 | "Continue to Linux postinstall to allow non-privileged users to run Docker commands" |
| docker pull downloads an image from a registry. | S9 | "Download an image from a registry" |
| If no tag is provided, Docker Engine uses the :latest tag as a default. | S9 | "If no tag is provided, Docker Engine uses the :latest tag as a default" |
| docker image ls lists the images on your system. | S3 | "The command shows a list of Docker images currently available on your system" |
| docker image history lists the layers of an image. | S3 | "List the image's layers using the" |
| S3's example history has the line COPY /app/build /usr/share/nginx/html. | S3 | "COPY /app/build /usr/share/nginx/html" |
| Docker prints the digest of the image after the pull has finished. | S9 | "Docker prints the digest of the image after the pull has finished" |
| -d runs the container in the background and prints the container ID. | S10 | "Run container in background and print container ID" |
| --name assigns a name to the container. | S10 | "Assign a name to the container" |
| With the localhost IP address in the publish flag, only the Docker host can access the published port. | S6 | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port" |
| Visit http://localhost:8080 in your browser. | S2 | "visit http://localhost:8080 in your browser" |
| docker ps shows only running containers; docker ps -a lists all containers. | S2 | "The docker ps command will show you only running containers" |
| By default docker ps shows just running containers; -a shows all containers. | S11 | "Show all containers (default shows just running)" |
| docker ps shows only running containers; docker ps -a lists all containers. | S2 | "add the -a flag to list all containers" |
| docker logs fetches the logs of a container. | S12 | "Fetch the logs of a container" |
| docker exec executes a command in a running container. | S13 | "Execute a command in a running container" |
| docker stop stops one or more running containers. | S14 | "Stop one or more running containers" |
| docker rm removes one or more containers. | S15 | "Remove one or more containers" |
| When a container is removed, changes to its state that aren't stored in persistent storage disappear. | S1 | "When a container is removed, any changes to its state that aren't stored in persistent storage disappear" |
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
