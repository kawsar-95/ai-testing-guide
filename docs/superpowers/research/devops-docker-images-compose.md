# Research notes: Docker Images and Compose

Page: `content/devops/docker-images-compose.mdx`. Module: DevOps & Cloud. Date: 2026-11-16 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): the Dockerfile and `docker build`, Docker Compose, Bake, the instructions of a Dockerfile, the build context and `.dockerignore`, the build cache, multi-stage builds, how Compose starts services and waits for them, a practice run, and the ways that a tester uses Compose. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had one sentence each on the Dockerfile, Compose, and Bake; the page keeps them.

The practice run of `## Try it` is Docker's Compose Quickstart (S11, fetched 2026-11-16): steps 1, 2, 3, 5, and 7, without step 4 (Compose Watch) and step 6 (multiple Compose files). The `compose.yaml` is the file of step 5 without its `develop.watch` block; the `Dockerfile` is S11's without its comment lines. It was run on 2026-11-16 in a scratch folder with Docker Engine 29.9.3 and Docker Compose v5.5.1 on Linux:

- `docker compose config` printed the resolved file (`name: compose-demo`, the `published: "8000"` port, the `redis-data` volume).
- `docker compose up -d` printed, among other lines, `Container compose-demo-redis-1 Started`, `Waiting`, `Healthy`, then `Container compose-demo-web-1 Starting`, `Started`. The page shows those five lines.
- Three requests to `http://localhost:8000` returned `Hello from Docker! I have been seen 1 time(s).`, then 2, then 3.
- `docker compose exec web env | grep REDIS` printed `REDIS_PORT=6379` and `REDIS_HOST=redis`; `docker compose exec redis redis-cli GET hits` printed `3`.
- `docker compose down` kept the volume `compose-demo_redis-data`. `docker compose up -d --wait` started the stack again, and the next request returned `I have been seen 4 time(s).`
- `docker compose down -v` removed the containers, the network, and the volume.

After round 9 of the fact check marked these outputs as FAILs with no cite, the run was made a second time on the same day, with the same files and versions, from a stack with no `compose-demo` container, network, or volume. It gave the same results: the five log lines that the page shows (`redis-1` `Started`, `Waiting`, `Healthy`, then `web-1` `Starting`, `Started`; this time from `docker compose up -d --wait`, which then printed more `Waiting` and `Healthy` lines), `1`, `2`, and `3` time(s), `GET hits` `3`, the two `REDIS_` variables, and `4` time(s) after `docker compose down` and `docker compose up -d --wait`. Then `docker compose down -v` left nothing of the stack. In that second run, a `curl` from a background shell got no answer, while the same request from a normal shell did; the page uses no background shell, so it does not mention this.

The page uses `docker compose up -d --wait` in step 8 (S15) where S11 uses `docker compose up --watch`, because the page leaves out Compose Watch.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Dockerfile reference (Docker Docs) | https://docs.docker.com/reference/dockerfile/ |
| S2 | docker buildx build (Docker Docs) | https://docs.docker.com/reference/cli/docker/buildx/build/ |
| S3 | Build context (Docker Docs) | https://docs.docker.com/build/concepts/context/ |
| S4 | Docker build cache (Docker Docs) | https://docs.docker.com/build/cache/ |
| S5 | Optimize cache usage in builds (Docker Docs) | https://docs.docker.com/build/cache/optimize/ |
| S6 | Multi-stage builds (Docker Docs) | https://docs.docker.com/build/building/multi-stage/ |
| S7 | Build secrets (Docker Docs) | https://docs.docker.com/build/building/secrets/ |
| S8 | Building best practices (Docker Docs) | https://docs.docker.com/build/building/best-practices/ |
| S9 | Docker Compose (Docker Docs) | https://docs.docker.com/compose/ |
| S10 | How Compose works (Docker Docs) | https://docs.docker.com/compose/intro/compose-application-model/ |
| S11 | Docker Compose Quickstart (Docker Docs) | https://docs.docker.com/compose/gettingstarted/ |
| S12 | Define services in Docker Compose (Docker Docs) | https://docs.docker.com/reference/compose-file/services/ |
| S13 | Control startup and shutdown order in Compose (Docker Docs) | https://docs.docker.com/compose/how-tos/startup-order/ |
| S14 | Networking in Compose (Docker Docs) | https://docs.docker.com/compose/how-tos/networking/ |
| S15 | docker compose up (Docker Docs) | https://docs.docker.com/reference/cli/docker/compose/up/ |
| S16 | docker compose down (Docker Docs) | https://docs.docker.com/reference/cli/docker/compose/down/ |
| S17 | docker compose logs (Docker Docs) | https://docs.docker.com/reference/cli/docker/compose/logs/ |
| S18 | Bake (Docker Docs) | https://docs.docker.com/build/bake/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. | S1 | "A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image" |
| Docker runs instructions in a Dockerfile in order. | S1 | "Docker runs instructions in a Dockerfile in order" |
| A Dockerfile must begin with a FROM instruction. | S1 | "A Dockerfile must begin with a FROM instruction" |
| docker build is an alias of docker buildx build. | S2 | "docker buildx build [OPTIONS] PATH" |
| docker build is an alias of docker buildx build. | S2 | "An alias is a short or memorable alternative for a longer command" |
| docker buildx build starts a build using BuildKit. | S2 | "The docker buildx build command starts a build using BuildKit" |
| -t (--tag) sets the image identifier, format [registry/]repository[:tag]. | S2 | "Image identifier (format: [registry/]repository[:tag])" |
| Docker Compose is a tool for defining and running multi-container applications. | S9 | "Docker Compose is a tool for defining and running multi-container applications" |
| Compose manages services, networks, and volumes in a single YAML configuration file. | S9 | "manage services, networks, and volumes in a single YAML configuration file" |
| With a single command, you create and start all the services from your configuration file. | S9 | "with a single command, you create and start all the services from your configuration file" |
| The default path for a Compose file is compose.yaml (preferred) or compose.yml in the working directory. | S10 | "The default path for a Compose file is compose.yaml (preferred) or compose.yml that is placed in the working directory" |
| Compose works in all environments: production, staging, development, testing, as well as CI workflows. | S9 | "Compose works in all environments - production, staging, development, testing, as well as CI workflows" |
| Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file. | S18 | "Bake is a feature of Docker Buildx that lets you define your build configuration using a declarative file, as opposed to specifying a complex CLI expression" |
| Bake also runs multiple builds concurrently with a single invocation. | S18 | "It also lets you run multiple builds concurrently with a single invocation" |
| A Bake file can be written in HCL or JSON format; Bake can also build directly from a Compose file. | S18 | "A Bake file can be written in HCL or JSON format" |
| A Bake file can be written in HCL or JSON format; Bake can also build directly from a Compose file. | S18 | "Bake can also build directly from a Docker Compose file" |
| Bake is invoked with docker buildx bake. | S18 | "docker buildx bake" |
| Compose starts with docker compose up. | S11 | "Start up your application" |
| FROM specifies the base image from which you are building. | S1 | "The FROM instruction specifies the base image from which you are building" |
| WORKDIR sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it. | S1 | "The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile" |
| ENV sets the environment variable key to the value. | S1 | "The ENV instruction sets the environment variable" |
| RUN executes any commands to create a new layer on top of the current image. | S1 | "The RUN instruction will execute any commands to create a new layer on top of the current image" |
| COPY copies new files or directories from src and adds them to the filesystem of the image at dest. | S1 | "The COPY instruction copies new files or directories from" |
| COPY copies new files or directories from src and adds them to the filesystem of the image at dest. | S1 | "and adds them to the filesystem of the image at the path" |
| EXPOSE doesn't actually publish the port; it is documentation about which ports are intended to be published. | S1 | "The EXPOSE instruction doesn't actually publish the port" |
| EXPOSE doesn't actually publish the port; it is documentation about which ports are intended to be published. | S1 | "about which ports are intended to be published" |
| CMD provides defaults for an executing container; only the last CMD takes effect. | S1 | "The purpose of a CMD is to provide defaults for an executing container" |
| CMD provides defaults for an executing container; only the last CMD takes effect. | S1 | "If you list more than one CMD, only the last one takes effect" |
| The build context is the set of files that your build can access. | S3 | "The build context is the set of files that your build can access" |
| Docker sends everything in your project directory to the daemon when it builds an image. | S11 | "Docker sends everything in your project directory to the daemon when it builds an image" |
| A .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells. | S3 | "The .dockerignore file is a newline-separated list of patterns similar to the file globs of Unix shells" |
| .dockerignore keeps unnecessary files out of the build context. | S11 | "Create a .dockerignore file to keep unnecessary files out of your build context" |
| If a layer changes, all other layers that come after it are also affected. | S4 | "If a layer changes, all other layers that come after it are also affected" |
| Make expensive steps appear near the beginning, and steps that change often near the end. | S5 | "try to make expensive steps appear near the beginning of the Dockerfile" |
| Make expensive steps appear near the beginning, and steps that change often near the end. | S5 | "Steps that change often should appear near the end of the Dockerfile" |
| Copy the package management files, install the dependencies, then copy the project source code. | S5 | "First, copy over the package management files" |
| Copy the package management files, install the dependencies, then copy the project source code. | S5 | "Finally, copy over the project source code, which is subject to frequent change" |
| With multi-stage builds, you use multiple FROM statements in your Dockerfile. | S6 | "With multi-stage builds, you use multiple FROM statements in your Dockerfile" |
| You can selectively copy artifacts from one stage to another, leaving behind everything you don't want. | S6 | "You can selectively copy artifacts from one stage to another, leaving behind everything you don't want in the final image" |
| By default Compose sets up a single network for your app. | S14 | "By default, Compose sets up a single network for your app" |
| Each container for a service joins the default network, is reachable, and is discoverable by its service name. | S14 | "Each container for a service joins the default network and is both reachable by other containers on that network, and discoverable by its service name" |
| Compose always starts and stops containers in dependency order. | S13 | "Compose always starts and stops containers in dependency order" |
| On startup, Compose does not wait until a container is ready, only until it's running. | S13 | "On startup, Compose does not wait until a container is" |
| On startup, Compose does not wait until a container is ready, only until it's running. | S13 | "only until it's running" |
| Use the condition attribute; service_healthy expects the dependency to be healthy, as defined with healthcheck. | S13 | "use the condition attribute with one of the following options" |
| Use the condition attribute; service_healthy expects the dependency to be healthy, as defined with healthcheck. | S13 | "which is defined with healthcheck, before starting a dependent service" |
| The practice run is Docker's Compose Quickstart, a Flask app with a hit counter in Redis. | S11 | "the application features a hit counter in Redis" |
| The Quickstart needs Docker Compose. | S11 | "Installed the latest version of Docker Compose" |
| Create a directory for the project. | S11 | "Create a directory for the project" |
| app.py reads its Redis connection details from environment variables, with defaults. | S11 | "The app reads its Redis connection details from environment variables, with sensible defaults" |
| requirements.txt lists flask and redis. | S11 | "Create requirements.txt in your project directory and add the following" |
| Name the file Dockerfile with no extension; some editors add .txt automatically, which causes the build to fail. | S11 | "Make sure the file is named Dockerfile with no extension" |
| Name the file Dockerfile with no extension; some editors add .txt automatically, which causes the build to fail. | S11 | "Some editors add .txt automatically, which causes the build to fail" |
| The Quickstart Dockerfile starts FROM python:3.12-alpine. | S11 | "FROM python:3.12-alpine" |
| Compose reads .env automatically for interpolation in compose.yaml. | S11 | "Compose automatically reads .env and makes these values available for interpolation" |
| Without .dockerignore, the build context includes the .env file (which may contain secrets) and cached Python bytecode. | S11 | "that includes your .env file (which may contain secrets) and any cached Python bytecode" |
| The web service uses an image built from the Dockerfile in the current directory and maps host port 8000 to container port 5000. | S11 | "The web service uses an image that's built from the Dockerfile in the current directory" |
| The web service uses an image built from the Dockerfile in the current directory and maps host port 8000 to container port 5000. | S11 | "It maps port 8000 on the host to port 5000 on the container" |
| The redis service uses a public Redis image from Docker Hub. | S11 | "The redis service uses a public Redis image pulled from the Docker Hub registry" |
| redis-cli ping expects a PONG response; with interval 5s and retries 5, Compose waits up to 25 seconds. | S11 | "redis-cli ping connects to Redis and expects a PONG response" |
| redis-cli ping expects a PONG response; with interval 5s and retries 5, Compose waits up to 25 seconds. | S11 | "Compose will wait up to 25 seconds before giving up" |
| redis-data:/data mounts the named volume at /data, where Redis writes its data files. | S11 | "mounts the named volume at /data, the path where Redis writes its data files" |
| docker compose config works purely from your files and replaces the variables with the values from .env. | S11 | "it works purely from your files" |
| docker compose config works purely from your files and replaces the variables with the values from .env. | S11 | "have all been replaced with the values from your .env file" |
| -d runs the containers in the background. | S15 | "Detached mode: Run containers in the background" |
| Refresh the page: the counter increments on each visit. | S11 | "the counter increments on each visit" |
| docker compose logs -f follows the log stream; pass a service name to follow one service. | S11 | "The -f flag follows the log stream in real time" |
| docker compose logs -f follows the log stream; pass a service name to follow one service. | S11 | "To follow logs for a single service, pass its name" |
| docker compose exec runs a command inside an already-running container without starting a new one. | S11 | "docker compose exec runs a command inside an already-running container without starting a new one" |
| Press Ctrl+C to stop following logs; the containers keep running. | S11 | "Press Ctrl+C to stop following logs. The containers keep running" |
| The named volume persists between compose down and compose up cycles. | S11 | "persists between compose down and compose up cycles" |
| --wait waits for services to be running or healthy and implies detached mode. | S15 | "Wait for services to be running|healthy. Implies detached mode" |
| The counter continues from where it left off. | S11 | "the counter continues from where it left off" |
| docker compose down -v removes named volumes with the containers and permanently deletes the stored data. | S11 | "The -v flag removes named volumes along with the containers" |
| docker compose down -v removes named volumes with the containers and permanently deletes the stored data. | S11 | "it permanently deletes the stored data" |
| With a custom project name, the same compose.yaml can be deployed twice on the same infrastructure without changes. | S10 | "the same compose.yaml file can be deployed twice on the same infrastructure, without changes, by just passing a distinct name" |
| The project name can be set with --project-name or COMPOSE_PROJECT_NAME. | S14 | "You can override the project name with either the --project-name flag or the COMPOSE_PROJECT_NAME environment variable" |
| --wait-timeout sets the maximum duration in seconds to wait. | S15 | "Maximum duration in seconds to wait for the project to be running|healthy" |
| --exit-code-from returns the exit code of the selected service container and implies --abort-on-container-exit. | S15 | "Return the exit code of the selected service container. Implies --abort-on-container-exit" |
| --abort-on-container-exit stops all containers if any container was stopped. | S15 | "Stops all containers if any container was stopped" |
| If the process encounters an error, the exit code is 1. | S15 | "If the process encounters an error, the exit code for this command is 1" |
| By default, down removes only service containers, networks defined in the Compose file, and the default network. | S16 | "By default, the only things removed are" |
| By default, down removes only service containers, networks defined in the Compose file, and the default network. | S16 | "Containers for services defined in the Compose file" |
| By default, down removes only service containers, networks defined in the Compose file, and the default network. | S16 | "The default network, if one is used" |
| -v also removes named volumes declared in the volumes section and anonymous volumes attached to containers. | S16 | "section of the Compose file and anonymous volumes attached to containers" |
| docker compose config shows the fully resolved configuration. | S11 | "The output is the fully resolved configuration" |
| docker compose logs views output from containers; -t shows timestamps. | S17 | "View output from containers" |
| docker compose logs views output from containers; -t shows timestamps. | S17 | "Show timestamps" |
| docker compose exec is the primary tool for live debugging. | S11 | "This is the primary tool for live debugging" |
| --pull forces Docker to check for and download a newer version of the base image. | S8 | "The --pull flag forces Docker to check for and download a newer version of the base image" |
| --no-cache disables the build cache, forcing Docker to rebuild all layers from scratch. | S8 | "The --no-cache flag disables the build cache, forcing Docker to rebuild all layers from scratch" |
| Docker's example uses both flags. | S8 | "docker build --pull --no-cache -t my-image:my-tag" |
| The Bake documentation lists workflows such as running tests and lint checks, and exporting build artifacts. | S18 | "Run tests and lint checks, Export build artifacts" |
| With short syntax, Compose does not wait for dependency services to be healthy. | S12 | "With short syntax, Compose does not wait for dependency services to be" |
| An application that starts before its database may not find a database able to handle its SQL statements. | S13 | "won't find a database able to handle its SQL statements" |
| HOST:CONTAINER should always be specified as a quoted string, to avoid conflicts with YAML base-60 float. | S12 | "should always be specified as a (quoted) string, to avoid conflicts with YAML base-60 float" |
| Without a host IP, Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules. | S12 | "Docker binds to all interfaces (0.0.0.0), bypassing host firewall rules" |
| A short-syntax example with a host IP is 127.0.0.1:8001:8001. | S12 | "127.0.0.1:8001:8001" |
| Build arguments and environment variables are inappropriate for secrets, because they persist in the final image. | S7 | "Build arguments and environment variables are inappropriate for passing secrets to your build, because they persist in the final image" |
| Copying all files before the install makes any file change reinstall all dependencies on every build. | S5 | "Updating any file causes a reinstall of all dependencies every time you build the Docker image" |
| Anonymous volumes are not removed by default. | S16 | "Anonymous volumes are not removed by default" |
| Image tags are mutable: a publisher can update a tag to point to a new image. | S8 | "Image tags are mutable, meaning a publisher can update a tag to point to a new image" |
| Pinning to a digest guarantees the same image version. | S8 | "By pinning your images to a digest, you're guaranteed to always use the same image version" |
