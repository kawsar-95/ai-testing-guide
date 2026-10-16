# Fact-check: Prep, Tools Mastery (round 1, 2026-10-13)

Round 1 on 7e72b14. Content under check: `content/prep/tools-mastery.ts` (8 `qa` items, `tools-mastery-001` to `tools-mastery-008`). The author's research notes (`prep-tools-mastery.md`) were not used as evidence. The checker fetched each source again and read each quote in its context on the fetched page.

Sources fetched by the checker (curl, all HTTP 200, no redirect: the effective URL is the same as the requested URL for all 40 pages, including the Postman pages). Each page was converted to plain text (tags removed, white space collapsed) and each quote was read in context.

| Id | URL |
|---|---|
| S1–S7 | https://git-scm.com/docs/git-switch, git-pull, git-status, git-diff, git-add, git-commit, git-push |
| S8 | https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows/ |
| S9 | https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/ |
| S10 | https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-statuses-priorities-and-resolutions/ |
| S11 | https://support.atlassian.com/jira-software-cloud/docs/link-issues/ |
| S12 | https://learning.postman.com/docs/use/send-requests/variables/managing-environments/ |
| S13 | https://learning.postman.com/docs/use/use-collections/overview/ |
| S14 | https://learning.postman.com/docs/use/send-requests/variables/variables/ |
| S15 | https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/ |
| S16 | https://learning.postman.com/docs/tests-and-scripts/running-collections/intro-to-collection-runs/ |
| S17 | https://www.selenium.dev/documentation/ |
| S18 | https://www.selenium.dev/documentation/webdriver/ |
| S19 | https://www.selenium.dev/documentation/grid/ |
| S20 | https://www.selenium.dev/documentation/webdriver/waits/ |
| S21 | https://playwright.dev/docs/intro |
| S22 | https://playwright.dev/docs/actionability |
| S23 | https://grafana.com/docs/k6/latest/get-started/running-k6/ |
| S24 | https://grafana.com/docs/k6/latest/using-k6/checks/ |
| S25 | https://grafana.com/docs/k6/latest/using-k6/thresholds/ |
| S26 | https://jmeter.apache.org/ |
| S27 | https://jmeter.apache.org/usermanual/get-started.html |
| S28 | https://jmeter.apache.org/usermanual/test_plan.html |
| S29 | https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/ |
| S30 | https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/ |
| S31 | https://docs.docker.com/compose/ |
| S32 | https://docs.docker.com/reference/cli/docker/container/run/ |
| S33 | https://docs.docker.com/reference/cli/docker/compose/up/ |
| S34 | https://docs.docker.com/reference/cli/docker/compose/down/ |
| S35 | https://docs.docker.com/engine/network/port-publishing/ |
| S36 | https://www.jenkins.io/doc/book/pipeline/ |
| S37 | https://docs.github.com/en/actions/get-started/understand-github-actions |
| S38 | https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows |
| S39 | https://developer.chrome.com/docs/devtools/network |
| S40 | https://developer.chrome.com/docs/devtools/network/reference |

Commands run locally (read-only or in a scratch directory; no container started, no image pulled, no global config changed):

- `git` 2.53.0: the full command list of `tools-mastery-001` in a temp clone of a local bare repo (config only with `-c`). `git switch -c` created and switched the branch. `git status --short` showed ` M README` and `?? tests/`. `git diff --stat` showed only the unstaged `README` change. `git push -u` printed "branch 'test/login-checks' set up to track 'origin/test/login-checks'", and the next `git status` printed "Your branch is up to date with 'origin/test/login-checks'". `git switch -h`, `git push -h`, `git commit -h` list `-c`, `-u, --set-upstream`, `-m`.
- `docker` 29.9.0, Compose v5.5.1: `docker run --help` lists `-d, --detach`, `--name`, `-e, --env`, `-p, --publish`. `docker compose up --help` lists `-d, --detach`. `docker compose down --help` lists `-v, --volumes`.
- `k6` v2.3.0: the script of `tools-mastery-005` saved to a file and parsed with `k6 inspect script.js` (exit 0, `"vus": 10`, `"duration": "30s"`). The test was not run.
- `jmeter` 5.6.3: `jmeter -?` lists `-n, --nongui`, `-t, --testfile`, `-l, --logfile`.
- Not run (not installed or not runnable here): Postman (test script, Collection Runner, Postman CLI), Jira, Jenkins (the Jenkinsfile), GitHub Actions, Chrome DevTools. These rows are checked against the docs only.

Hidden comparisons: items 004, 005 and 007 compare two tools. Each tool fact in them comes from the docs of that tool. No item says or implies that one tool is better, faster or simpler. Each item says that the speaker does not name a winner and chooses by the needs of the team.

| # | Item id | Claim | Source URL | Verdict | Quote from the fetched page, and why |
|---|---|---|---|---|---|
| 1 | tools-mastery-001 | Item `source` is the git-switch page | S1 | PASS | The page holds the branch commands of the item: "Switch to a specified branch." |
| 2 | tools-mastery-001 | Test code in Git; a new branch per task from an up-to-date main | - | OPINION-OK | Practice of the speaker. |
| 3 | tools-mastery-001 | `git pull` fetches changes from the remote and integrates them into the current branch | S2 | PASS | "Integrate changes from a remote repository into the current branch." and "First, git pull runs git fetch with the same arguments (excluding merge options) to fetch remote branch(es)." |
| 4 | tools-mastery-001 | `git switch -c` creates a new branch and switches to it | S1 | PASS | "Create a new branch named <new-branch> starting at <start-point> before switching to the branch." Local run: "Switched to a new branch 'test/login-checks'". |
| 5 | tools-mastery-001 | `git status` shows the changed paths and the untracked paths that are not ignored | S3 | PASS | "Displays paths that have differences between the index file and the current HEAD commit, paths that have differences between the working tree and the index file, and paths in the working tree that are not tracked by Git (and are not ignored by gitignore[5])". |
| 6 | tools-mastery-001 | `git diff` shows the changes that are not staged | S4 | PASS | "This form is to view the changes you made relative to the index (staging area for the next commit)." Local run: only the unstaged README change showed. |
| 7 | tools-mastery-001 | `git add` stages the files | S5 | PASS | "Add contents of new or changed files to the index." |
| 8 | tools-mastery-001 | A commit records the staged content | S6 | PASS | "Create a new commit containing the current contents of the index and the given log message describing the changes." |
| 9 | tools-mastery-001 | `-m` sets the commit message | S6 | PASS | "Use <msg> as the commit message." `git commit -h`: "-m, --[no-]message <message>". |
| 10 | tools-mastery-001 | `git push -u` records the upstream branch, so a later `git pull` knows it | S7 | PASS | "-u --set-upstream For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull[1] and other commands." |
| 11 | tools-mastery-001 | ... and `git status` knows it | S3 | PASS | "Display or do not display detailed ahead/behind counts for the branch relative to its upstream branch." Local run: "Your branch is up to date with 'origin/test/login-checks'." |
| 12 | tools-mastery-001 | Open a pull request; a teammate reviews | - | OPINION-OK | Practice of the speaker. |
| 13 | tools-mastery-002 | Item `source` is the workflows page | S8 | PASS | "A Jira workflow is a set of statuses and transitions that a work item moves through." |
| 14 | tools-mastery-002 | A bug is a work item of the type Bug | S9 | PASS | "By default, software spaces come with three standard work types: Bug ..." |
| 15 | tools-mastery-002 | Atlassian describes a bug as a problem which impairs or prevents the functions of a product | S9 | PASS | "A bug is a problem which impairs or prevents the functions of a product." |
| 16 | tools-mastery-002 | Search for a duplicate first; content of a new report | - | OPINION-OK | Practice of the speaker. |
| 17 | tools-mastery-002 | In the default priorities, Highest means the problem will block progress | S10 | PASS | "The default priorities are listed below. ... Highest This problem will block progress." |
| 18 | tools-mastery-002 | Lowest means a trivial problem with little or no impact | S10 | PASS | "Lowest Trivial problem with little or no impact on progress." |
| 19 | tools-mastery-002 | A workflow is the set of statuses and transitions that a work item moves through | S8 | PASS | Quote in row 13. |
| 20 | tools-mastery-002 | A team can change the statuses | S10 | PASS | "The statuses are recommended starting points for each template, but you can edit or remove them from a workflow to suit your team's need. You can also create your own." |
| 21 | tools-mastery-002 | A bug goes through To Do, In Progress, In Review, Done "in my experience" | S10 | OPINION-OK | Practice, hedged. Each status exists on S10: "To Do The work item has been reported ...", "In Progress This work item is being actively worked on ...", "In Review The assignee has carried out the work ...", "Done Work has finished on the work item." |
| 22 | tools-mastery-002 | Retest; move to Done or back with a comment | - | OPINION-OK | Practice of the speaker. |
| 23 | tools-mastery-002 | Moving back needs a transition back, because transitions are one-way | S8 | PASS | "Transitions are one-way. To move a work item back and forth, you need two separate transitions." |
| 24 | tools-mastery-002 | Set the resolution Duplicate | S10 | PASS | "Here are work item resolutions that come with your Jira apps by default: ... Duplicate The problem is a duplicate of an existing work item." |
| 25 | tools-mastery-002 | Link the work items | S11 | PASS | "Work items can have the following link types: is blocked by blocks is cloned by clones is duplicated by duplicates ..." |
| 26 | tools-mastery-002 | Jira has a Cannot reproduce resolution by default | S10 | PASS | "If you have Jira, you also get these resolutions by default: Cannot reproduce All attempts at reproducing this work item failed, or not enough information was available to reproduce the work item." The hedge "by default" is kept. |
| 27 | tools-mastery-003 | Item `source` is the environments page | S12 | PASS | "In Postman, an environment is a set of one or more variables ..." |
| 28 | tools-mastery-003 | A collection saves API requests and keeps them organized | S13 | PASS | "Use collections to save all your API requests, keep them organized, and find them when you need them." |
| 29 | tools-mastery-003 | Requests can be grouped in folders | S13 | PASS | "You can arrange the API requests in a collection in any order you choose, or add folders to group requests together." |
| 30 | tools-mastery-003 | An environment is a set of variables used in requests and scripts | S12 | PASS | "an environment is a set of one or more variables that you can reference when sending requests, writing pre-request scripts, or writing post-response scripts." |
| 31 | tools-mastery-003 | A variable is a key-value pair | S14 | PASS | "Variables in Postman are key-value pairs." |
| 32 | tools-mastery-003 | Written as `{{base_url}}`; avoids a repeated URL | S14 | PASS | "if you have the same URL in more than one request, but the URL might change, you can store it in a base_url variable. Then, use {{base_url}} to reference the variable in your requests." |
| 33 | tools-mastery-003 | Switching environment makes the variables take that environment's values | S12 | PASS | "When you switch between environments, all of the variables in your requests and scripts will use the values from the current environment." |
| 34 | tools-mastery-003 | Mark sensitive values such as tokens as Secure | S12 | PASS | "manage the visibility of sensitive data such as API keys, passwords, or tokens" and "If the data is sensitive, next to your variable's name, click Secure." |
| 35 | tools-mastery-003 | A status test goes in the Post-response tab with `pm.response.to.have.status(200)` | S15 | PASS | "enter the following in the Post-response tab of a request to test if the response status code is 200: pm.test("Status test", function () { pm.response.to.have.status(200); });" The item changes only the test name. |
| 36 | tools-mastery-003 | `pm.test` takes a name and a function | S15 | PASS | "Define tests using the pm.test function. Provide a name and function that returns a boolean (true or false) value ..." |
| 37 | tools-mastery-003 | The result shows in the Test Results tab | S15 | PASS | "Select Send to run your request, then select the Test Results tab in the response." |
| 38 | tools-mastery-003 | The Collection Runner sends requests in the chosen order and logs the test results of each request | S16 | PASS | "Send some or all of the API requests in a Postman Collection using the Collection Runner, in the order you choose. The Collection Runner logs the test results for each request". |
| 39 | tools-mastery-003 | The Postman CLI, the command line tool of Postman, runs the collection in CI | S16 | PASS | "You can also integrate collection runs with your CI/CD pipeline using the Postman CLI, Postman's command line tool." |
| 40 | tools-mastery-004 | Item `source` is the Selenium docs overview | S17 | PASS | The page holds the Selenium definition (row 42). The Playwright rows cite S21 and S22. |
| 41 | tools-mastery-004 | "I do not say that one tool is better"; choose by team needs and a small trial | - | OPINION-OK | Practice. No hidden comparison found in the item: each fact below comes from the docs of its own tool. |
| 42 | tools-mastery-004 | Selenium is an umbrella project for tools and libraries that automate web browsers | S17 | PASS | "Selenium is an umbrella project for a range of tools and libraries that enable and support the automation of web browsers." |
| 43 | tools-mastery-004 | At its core is WebDriver, an interface for instruction sets that run in many browsers | S17 | PASS | "At the core of Selenium is WebDriver, an interface to write instruction sets that can be run interchangeably in many browsers." |
| 44 | tools-mastery-004 | WebDriver is a W3C Recommendation | S18 | PASS | "Selenium WebDriver is a W3C Recommendation" |
| 45 | tools-mastery-004 | Selenium Grid runs WebDriver scripts on remote machines | S19 | PASS | "Selenium Grid allows the execution of WebDriver scripts on remote machines by routing commands sent by the client to remote browser instances." |
| 46 | tools-mastery-004 | One aim of Grid is to run tests in parallel on multiple machines | S19 | PASS | "Grid aims to: Provide an easy way to run tests in parallel on multiple machines" |
| 47 | tools-mastery-004 | The default implicit wait is 0 | S20 | PASS | "The default value is 0, which means that if the element is not found, it will immediately return an error." |
| 48 | tools-mastery-004 | The Selenium docs warn not to mix implicit and explicit waits | S20 | PASS | "Warning: Do not mix implicit and explicit waits. Doing so can cause unpredictable wait times." |
| 49 | tools-mastery-004 | Playwright Test is an end-to-end test framework for modern web apps; bundles test runner, assertions, isolation, parallelization | S21 | PASS | "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." |
| 50 | tools-mastery-004 | Playwright supports Chromium, WebKit and Firefox | S21 | PASS | "Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS ..." |
| 51 | tools-mastery-004 | Before an action, Playwright performs actionability checks and waits for them to pass | S22 | PASS | "Playwright performs a range of actionability checks on the elements before making actions ... It auto-waits for all the relevant checks to pass and only then performs the requested action." |
| 52 | tools-mastery-004 | Examples: the element is visible and enabled | S22 | PASS | "for locator.click(), Playwright will ensure that: ... element is Visible ... element is Enabled". The item says "for example". |
| 53 | tools-mastery-005 | Item `source` is the Running k6 page | S23 | PASS | The page holds the k6 script, options, default function and `k6 run`. |
| 54 | tools-mastery-005 | A load test simulates a heavy load on a system to analyze its performance, as the JMeter docs describe | S26 | PASS | "It can be used to simulate a heavy load on a server, group of servers, network or object to test its strength or to analyze overall performance under different load types." |
| 55 | tools-mastery-005 | k6 tests are JavaScript scripts | S23 | PASS | "Scripts are written in JavaScript, as ES6 modules" |
| 56 | tools-mastery-005 | The options set the VUs and the duration | S23 | PASS | "export const options = { vus: 10, duration: '30s', };" and "k6 runs multiple iterations in parallel with virtual users (VUs)." `k6 inspect` of the item script: `"vus": 10`, `"duration": "30s"`. |
| 57 | tools-mastery-005 | The default function holds the work of each VU | S23 | PASS | "Every test also has a default function, which defines the VU logic." |
| 58 | tools-mastery-005 | Script syntax: `import http from "k6/http"`, `check(res, {...})`, `thresholds` in `options` | S23, S25 | PASS | S23: "import http from 'k6/http';" and "check(res, { 'status was 200': (r) => r.status == 200 });". S25: "In the thresholds property of the options object, set a key using the name of the metric". `k6 inspect` parsed the script (exit 0). |
| 59 | tools-mastery-005 | Run with `k6 run script.js` | S23 | PASS | "Local: the test execution happens entirely on a single machine, container, or CI server. Bash Copy k6 run script.js" |
| 60 | tools-mastery-005 | A check is like an assert, but a failed check does not fail the test | S24 | PASS | "Checks are similar to what many testing frameworks call an assert, but failed checks do not cause the test to abort or finish with a failed status." |
| 61 | tools-mastery-005 | A threshold is a pass or fail rule | S25 | PASS | "Thresholds are the pass/fail criteria that you define for your test metrics." |
| 62 | tools-mastery-005 | `http_req_failed: ["rate<0.01"]` means fewer than 1% of requests may fail | S25 | PASS | "http_req_failed: ['rate<0.01'], // http errors should be less than 1%" |
| 63 | tools-mastery-005 | If a threshold fails, k6 exits with a non-zero code | S25 | PASS | "If any of the thresholds had failed, ... k6 would exit with a non-zero exit code." |
| 64 | tools-mastery-005 | CI can stop on it | S24 | PASS | "If you need the whole test to fail based on the results of a check, you have to combine checks with thresholds. This is particularly useful in specific contexts, such as integrating k6 into your CI pipelines". The item says "can". |
| 65 | tools-mastery-005 | A minimal JMeter test has a Test Plan, a Thread Group and one or more Samplers | S28 | PASS | "A minimal test will consist of the Test Plan, a Thread Group and one or more Samplers." |
| 66 | tools-mastery-005 | The Thread Group sets the threads, the ramp-up period and how many times to run | S28 | PASS | "The controls for a thread group allow you to: Set the number of threads Set the ramp-up period Set the number of times to execute the test" |
| 67 | tools-mastery-005 | Use the GUI only to create the script, and CLI mode for load tests | S27 | PASS | "GUI mode should only be used for creating the test script, CLI mode (NON GUI) must be used for load testing" |
| 68 | tools-mastery-005 | `jmeter -n -t plan.jmx -l results.jtl`: `-n` CLI mode, `-t` test plan file, `-l` sample results file | S27 | PASS | "-n This specifies JMeter is to run in cli mode -t [name of JMX file that contains the Test Plan]. -l [name of JTL file to log sample results to]." Example on the page: "jmeter -n -t my_test.jmx -l log.jtl ...". `jmeter -?` lists `-n, --nongui`, `-t, --testfile`, `-l, --logfile`. |
| 69 | tools-mastery-005 | Choose by team skills and how tests are stored and reviewed | - | OPINION-OK | Practice. No claim that one tool is better. |
| 70 | tools-mastery-006 | Item `source` is the "What is a container?" page | S29 | PASS | Holds the container definition (row 71). |
| 71 | tools-mastery-006 | A container is an isolated process for one component of an app, such as a database | S29 | PASS | "containers are isolated processes for each of your app's components. Each component - the frontend React app, the Python API engine, and the database - runs in its own isolated environment". |
| 72 | tools-mastery-006 | Each container has everything it needs to run | S29 | PASS | "Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine." |
| 73 | tools-mastery-006 | Containers are independent; deleting one does not affect the others | S29 | PASS | "Each container is independently managed. Deleting one container won't affect any others." |
| 74 | tools-mastery-006 | A container runs from an image, a package of the files and settings to run it | S30 | PASS | "A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container." |
| 75 | tools-mastery-006 | Images are immutable | S30 | PASS | "Images are immutable. Once an image is created, it can't be modified." |
| 76 | tools-mastery-006 | Containers so that every machine and CI start the same dependencies | - | OPINION-OK | Reason of the speaker. S29 frames the same problem: "How do you ensure the version of Python (or Node or the database) your app needs isn't affected by what's already on your machine?" |
| 77 | tools-mastery-006 | `docker run -d` runs the container in the background | S32 | PASS | "-d, --detach Run container in background and print container ID". Local `docker run --help` has the same line. |
| 78 | tools-mastery-006 | `--name` names the container | S32 | PASS | "--name Assign a name to the container". Local help: same. |
| 79 | tools-mastery-006 | `-e` sets an environment variable | S32 | PASS | "-e, --env Set environment variables". Local help: same. |
| 80 | tools-mastery-006 | `-p` publishes a container port to the host | S32 | PASS | "-p, --publish Publish a container's port(s) to the host". Local help: same. |
| 81 | tools-mastery-006 | `-p 8080:80` maps host port 8080 to container port 80 | S35 | PASS | "-p 8080:80 Map port 8080 on the Docker host to TCP port 80 in the container." |
| 82 | tools-mastery-006 | Compose defines and runs multi-container applications in one YAML file | S31 | PASS | "Docker Compose is a tool for defining and running multi-container applications." and "manage services, networks, and volumes in a single YAML configuration file". |
| 83 | tools-mastery-006 | Its docs say it works in testing and CI workflows | S31 | PASS | "Compose works in all environments - production, staging, development, testing, as well as CI workflows." |
| 84 | tools-mastery-006 | `docker compose up -d` starts the containers in the background | S33 | PASS | "-d, --detach Detached mode: Run containers in the background". Local `docker compose up --help`: same. |
| 85 | tools-mastery-006 | `docker compose down` stops and removes the containers and the networks | S34 | PASS | "Stops containers and removes containers, networks, volumes, and images created by up. By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section of the Compose file." |
| 86 | tools-mastery-006 | `-v` also removes the named volumes | S34 | PASS | "-v, --volumes Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers". Local `docker compose down --help`: same. |
| 87 | tools-mastery-006 | So the next run starts with clean data | S34 | OPINION-OK | Inference from row 86 (the volumes that hold the data are removed). |
| 88 | tools-mastery-007 | Item `source` is the Jenkins Pipeline page | S36 | PASS | Holds the Jenkinsfile, stage, step and `agent any` claims. The GitHub rows cite S37 and S38. |
| 89 | tools-mastery-007 | Both tools automate a pipeline from a code change to a deployment | S36, S37 | PASS | S36: "A continuous delivery (CD) pipeline is an automated expression of your process for getting software from version control right through to your users and customers." S37: row 90. |
| 90 | tools-mastery-007 | GitHub Actions is a CI/CD platform that automates the build, test and deployment pipeline | S37 | PASS | "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." |
| 91 | tools-mastery-007 | Jenkins is an automation engine | S36 | PASS | "Jenkins is, fundamentally, an automation engine which supports a number of automation patterns." |
| 92 | tools-mastery-007 | The Pipeline is in a text file named Jenkinsfile, committed to the source control repository | S36 | PASS | "The definition of a Jenkins Pipeline is written into a text file (called a Jenkinsfile) which in turn can be committed to a project's source control repository." The item says "I commit it" (practice); it does not say the docs require it. |
| 93 | tools-mastery-007 | A stage is a distinct subset of tasks, such as Build, Test or Deploy | S36 | PASS | "A stage block defines a conceptually distinct subset of tasks performed through the entire Pipeline (e.g. "Build", "Test" and "Deploy" stages)" |
| 94 | tools-mastery-007 | A step is a single task | S36 | PASS | "Step A single task." |
| 95 | tools-mastery-007 | Jenkinsfile shape `pipeline { agent any stages { stage('Test') { steps { sh 'npm test' } } } }` | S36 | PASS | "pipeline { agent any (1) stages { stage('Build') { (2) steps { // (3) } } stage('Test') ..." and "to execute the shell command make, use the sh step: sh 'make'." Not run (no Jenkins here). |
| 96 | tools-mastery-007 | `agent any` runs the Pipeline on any available agent | S36 | PASS | "Execute this Pipeline or any of its stages, on any available agent." |
| 97 | tools-mastery-007 | A workflow is a YAML file in the `.github/workflows` directory | S38 | PASS | "Workflows are defined by a YAML file checked in to your repository" and "Workflows are defined in the .github/workflows directory in a repository." |
| 98 | tools-mastery-007 | An event triggers it, for example a push or an opened pull request | S38, S37 | PASS | S38: "you can configure your workflow to run when a push is made to the default branch of your repository". S37: "triggered when an event occurs in your repository, such as a pull request being opened". Note: S38 also lists manual and scheduled triggers; the item gives examples and does not say "only". |
| 99 | tools-mastery-007 | The `on` key sets the trigger | S38 | PASS | "Workflow triggers are defined with the on key." |
| 100 | tools-mastery-007 | A workflow has one or more jobs; each job runs on a runner and has steps; a step runs a script or an action | S38 | PASS | "One or more jobs, each of which will execute on a runner machine and run a series of one or more steps. Each step can either run a script that you define or run an action". |
| 101 | tools-mastery-007 | GitHub provides Ubuntu Linux, Microsoft Windows and macOS runners | S37 | PASS | "GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows." |
| 102 | tools-mastery-007 | I can host my own runners | S37 | PASS | "you can host your own runners" |
| 103 | tools-mastery-007 | "I do not say that one tool is better"; choose by where the code lives, who runs the servers, team knowledge | - | OPINION-OK | Practice. No hidden comparison found. |
| 104 | tools-mastery-007 | Behind: the pipeline definition lives in the repository | S36, S38 | OPINION-OK | What the interviewer checks. Supported by S36 ("can be committed to a project's source control repository") and S38 ("checked in to your repository"). |
| 105 | tools-mastery-008 | Item `source` is the "Inspect network activity" page | S39 | PASS | Holds the use, open, log and column claims. |
| 106 | tools-mastery-008 | The Chrome docs say to use the Network panel to make sure resources are downloaded or uploaded as expected | S39 | PASS | "In general, use the Network panel when you need to make sure that resources are being downloaded or uploaded as expected." The item omits "In general" but does not add "only" or "always", so it is not an over-claim. |
| 107 | tools-mastery-008 | ... and to inspect the HTTP headers, content and size of a resource | S39 | PASS | "Inspecting the properties of an individual resource, such as its HTTP headers, content, size, and so on." |
| 108 | tools-mastery-008 | Open DevTools with Control+Shift+J, or Command+Option+J on a Mac, then click the Network tab | S39 | PASS | "Open DevTools by pressing Control+Shift+J or Command+Option+J (Mac). The Console panel opens. ... Click the Network tab. The Network panel opens." |
| 109 | tools-mastery-008 | DevTools logs network activity only while it is open, so reload the page | S39 | PASS | "DevTools only logs network activity while it's open and no network activity has occurred since you opened DevTools. ... To view the network activity that a page causes: Reload the page." |
| 110 | tools-mastery-008 | Each row is a resource | S39 | PASS | "Each row of the Network Log represents a resource." |
| 111 | tools-mastery-008 | The default columns are Status, Type, Initiator, Size and Time; Status is the HTTP response code | S39 | PASS | "The default columns are: Status: The HTTP response code. Type: The resource type. Initiator: What caused a resource to be requested. ... Size: Resource amount transferred over the network. Time: How long the request took." |
| 112 | tools-mastery-008 | Click Fetch/XHR to show the API calls | S40 | PASS | "To filter requests by resource type, click the All, Fetch/XHR, JS, CSS, ... buttons on the Network panel." "API calls" is the item's name for fetch and XHR requests. |
| 113 | tools-mastery-008 | The Headers tab shows the headers | S40 | PASS | "To view HTTP header data of a request: ... Open the Headers tab and scroll down to General, Response Headers, Request Headers". |
| 114 | tools-mastery-008 | The Payload tab shows the query string parameters and form data | S40 | PASS | "To view the request's payload, that is, its query string parameters and form data, select a request from the Requests table and open the Payload tab." |
| 115 | tools-mastery-008 | The Response tab shows the response body | S40 | PASS | "To view the response body to a request: Select a request under the Name column in the Requests table. Open the Response tab." |
| 116 | tools-mastery-008 | Preserve log keeps the rows across a page reload | S40 | PASS | "To save requests across page loads, check the Preserve log checkbox on the Network panel." |
| 117 | tools-mastery-008 | Disable cache to see a first visit | S40 | PASS | "To emulate how a first-time user experiences your site, check the Disable cache checkbox." |
| 118 | tools-mastery-008 | A preset in the Throttling menu for a slow connection | S40 | PASS | "To emulate fast 4G, slow 4G, or 3G, select the corresponding preset from the Throttling drop-down menu in the action bar at the top." |
| 119 | tools-mastery-008 | Right-click the request and choose Copy as cURL | S40 | PASS | "right-click a request, hover over Copy, and select one of the following options. ... Copy as cURL. Copy the request as a cURL command." The item leaves out the "Copy" submenu step; the action is correct. |
| 120 | tools-mastery-008 | Bug report has URL, status code, payload, response | - | OPINION-OK | Practice of the speaker. |

Could not check by running: the Postman test and Collection Runner, the Postman CLI, Jira, the Jenkinsfile, GitHub Actions, and Chrome DevTools (not runnable here). Their rows are PASS on the docs quotes only.

Open FAILs: 0
