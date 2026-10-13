# Prep: Tools Mastery — research notes (2026-10-13)

Area: `tools-mastery` (kind `qa`, 8 items).

## Sources
S1. Git documentation, git-switch — Git project — https://git-scm.com/docs/git-switch — accessed 2026-10-13
S2. Git documentation, git-pull — Git project — https://git-scm.com/docs/git-pull — accessed 2026-10-13
S3. Git documentation, git-status — Git project — https://git-scm.com/docs/git-status — accessed 2026-10-13
S4. Git documentation, git-diff — Git project — https://git-scm.com/docs/git-diff — accessed 2026-10-13
S5. Git documentation, git-add — Git project — https://git-scm.com/docs/git-add — accessed 2026-10-13
S6. Git documentation, git-commit — Git project — https://git-scm.com/docs/git-commit — accessed 2026-10-13
S7. Git documentation, git-push — Git project — https://git-scm.com/docs/git-push — accessed 2026-10-13
S8. Jira Cloud administration, Understand workflows — Atlassian — https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows/ — accessed 2026-10-13
S9. Jira Cloud administration, What are work types? — Atlassian — https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-types/ — accessed 2026-10-13
S10. Jira Cloud administration, What are work item statuses, priorities, and resolutions? — Atlassian — https://support.atlassian.com/jira-cloud-administration/docs/what-are-issue-statuses-priorities-and-resolutions/ — accessed 2026-10-13
S11. Jira Software Cloud, Link work items — Atlassian — https://support.atlassian.com/jira-software-cloud/docs/link-issues/ — accessed 2026-10-13
S12. Postman Docs, Create and set up environments — Postman — https://learning.postman.com/docs/use/send-requests/variables/managing-environments/ — accessed 2026-10-13
S13. Postman Docs, Postman Collections — Postman — https://learning.postman.com/docs/use/use-collections/overview/ — accessed 2026-10-13
S14. Postman Docs, Store and reuse values using variables — Postman — https://learning.postman.com/docs/use/send-requests/variables/variables/ — accessed 2026-10-13
S15. Postman Docs, Write scripts to test API response data in Postman — Postman — https://learning.postman.com/docs/tests-and-scripts/write-scripts/test-scripts/ — accessed 2026-10-13
S16. Postman Docs, Test your API using the Collection Runner — Postman — https://learning.postman.com/docs/tests-and-scripts/running-collections/intro-to-collection-runs/ — accessed 2026-10-13
S17. Selenium Documentation, overview — Selenium project — https://www.selenium.dev/documentation/ — accessed 2026-10-13
S18. Selenium Documentation, WebDriver — Selenium project — https://www.selenium.dev/documentation/webdriver/ — accessed 2026-10-13
S19. Selenium Documentation, Selenium Grid — Selenium project — https://www.selenium.dev/documentation/grid/ — accessed 2026-10-13
S20. Selenium Documentation, Waiting Strategies — Selenium project — https://www.selenium.dev/documentation/webdriver/waits/ — accessed 2026-10-13
S21. Playwright Docs, Installation — Microsoft — https://playwright.dev/docs/intro — accessed 2026-10-13
S22. Playwright Docs, Auto-waiting — Microsoft — https://playwright.dev/docs/actionability — accessed 2026-10-13
S23. Grafana k6 documentation, Running k6 — Grafana Labs — https://grafana.com/docs/k6/latest/get-started/running-k6/ — accessed 2026-10-13
S24. Grafana k6 documentation, Checks — Grafana Labs — https://grafana.com/docs/k6/latest/using-k6/checks/ — accessed 2026-10-13
S25. Grafana k6 documentation, Thresholds — Grafana Labs — https://grafana.com/docs/k6/latest/using-k6/thresholds/ — accessed 2026-10-13
S26. Apache JMeter, home page — Apache Software Foundation — https://jmeter.apache.org/ — accessed 2026-10-13
S27. Apache JMeter User's Manual, Getting Started — Apache Software Foundation — https://jmeter.apache.org/usermanual/get-started.html — accessed 2026-10-13
S28. Apache JMeter User's Manual, Elements of a Test Plan — Apache Software Foundation — https://jmeter.apache.org/usermanual/test_plan.html — accessed 2026-10-13
S29. Docker Docs, What is a container? — Docker — https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/ — accessed 2026-10-13
S30. Docker Docs, What is an image? — Docker — https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-an-image/ — accessed 2026-10-13
S31. Docker Docs, Docker Compose — Docker — https://docs.docker.com/compose/ — accessed 2026-10-13
S32. Docker Docs, docker container run — Docker — https://docs.docker.com/reference/cli/docker/container/run/ — accessed 2026-10-13
S33. Docker Docs, docker compose up — Docker — https://docs.docker.com/reference/cli/docker/compose/up/ — accessed 2026-10-13
S34. Docker Docs, docker compose down — Docker — https://docs.docker.com/reference/cli/docker/compose/down/ — accessed 2026-10-13
S35. Docker Docs, Port publishing and mapping — Docker — https://docs.docker.com/engine/network/port-publishing/ — accessed 2026-10-13
S36. Jenkins User Documentation, Pipeline — Jenkins project — https://www.jenkins.io/doc/book/pipeline/ — accessed 2026-10-13
S37. GitHub Docs, Understanding GitHub Actions — GitHub — https://docs.github.com/en/actions/get-started/understand-github-actions — accessed 2026-10-13
S38. GitHub Docs, Workflows — GitHub — https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows — accessed 2026-10-13
S39. Chrome for Developers, Inspect network activity — Google — https://developer.chrome.com/docs/devtools/network — accessed 2026-10-13
S40. Chrome for Developers, Network features reference — Google — https://developer.chrome.com/docs/devtools/network/reference — accessed 2026-10-13

Method: each page was downloaded with curl and converted to plain text (HTML tags removed, whitespace collapsed). A script matched every quote of the claims table against the text of its page. The match ignores only the difference between curly and straight quotes and between kinds of white space. All quotes matched.

Scope: tool facts (what a command, an option, a field or a feature does) have a row below. First-person practice (how the speaker works, how the speaker chooses) is not a tool fact and has no row. Where the item compares two tools, it states only what the own docs of each tool say, and it does not say that one tool is better.

Commands checked on the machine (tool installed): `git` 2.53.0 (`git switch -h`, `git push -h`, `git commit -h`), `docker` 29.9.0 (`docker run --help`, `docker compose up --help`, `docker compose down --help`), `k6` v2.3.0 (`k6 run --help`) and `jmeter` 5.6.3 (`jmeter -h`). The k6 script of `tools-mastery-005` was also run against a local web server: the checks passed and the exit code was 0. With the server stopped, the threshold failed and the exit code was 99 (non-zero). Not run: the Postman test, the Jenkinsfile, and the Chrome DevTools steps. They follow the docs (rows below).

Terms in the docs: Jira Cloud now says "work item" for what many teams call an issue, and "work type" for issue type. The item uses the words of the current docs.

Not used as a source: any blog, forum, interview-question site, or prep.galib.dev. All pages were fetched. No page failed.

Item `source` pages (the page that holds the main claim of the item; the other pages are in the rows below):
- `tools-mastery-001`: https://git-scm.com/docs/git-switch — S1 (Git documentation, git-switch). Other pages in the rows: S2, S3, S4, S5, S6, S7.
- `tools-mastery-002`: https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows/ — S8 (Jira Cloud administration, Understand workflows). Other pages in the rows: S9, S10, S11.
- `tools-mastery-003`: https://learning.postman.com/docs/use/send-requests/variables/managing-environments/ — S12 (Postman Docs, Create and set up environments). Other pages in the rows: S13, S14, S15, S16.
- `tools-mastery-004`: https://www.selenium.dev/documentation/ — S17 (Selenium Documentation, overview). Other pages in the rows: S18, S19, S20, S21, S22.
- `tools-mastery-005`: https://grafana.com/docs/k6/latest/get-started/running-k6/ — S23 (Grafana k6 documentation, Running k6). Other pages in the rows: S26, S24, S25, S28, S27.
- `tools-mastery-006`: https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/ — S29 (Docker Docs, What is a container?). Other pages in the rows: S30, S32, S35, S31, S33, S34.
- `tools-mastery-007`: https://www.jenkins.io/doc/book/pipeline/ — S36 (Jenkins User Documentation, Pipeline). Other pages in the rows: S37, S38.
- `tools-mastery-008`: https://developer.chrome.com/docs/devtools/network — S39 (Chrome for Developers, Inspect network activity). Other pages in the rows: S40.

## Claims
| # | Item id | Claim | Exact short quote | Source |
|---|---|---|---|---|
| C1 | tools-mastery-001 | git switch with a branch name switches to that branch. | "Switch to a specified branch." | S1 |
| C2 | tools-mastery-001 | git switch -c creates a new branch and then switches to it. | "Create a new branch named <new-branch> starting at <start-point> before switching to the branch." | S1 |
| C3 | tools-mastery-001 | git pull integrates changes from a remote repository into the current branch. | "Integrate changes from a remote repository into the current branch." | S2 |
| C4 | tools-mastery-001 | git pull first runs git fetch. | "First, git pull runs git fetch with the same arguments (excluding merge options) to fetch remote branch(es)." | S2 |
| C5 | tools-mastery-001 | git status shows changed paths and untracked paths that are not ignored. | "Displays paths that have differences between the index file and the current HEAD commit, paths that have differences between the working tree and the index file, and paths in the working tree that are not tracked by Git (and are not ignored by gitignore[5])" | S3 |
| C6 | tools-mastery-001 | git diff without a commit shows the changes relative to the index (the staging area). | "This form is to view the changes you made relative to the index (staging area for the next commit)." | S4 |
| C7 | tools-mastery-001 | git add adds file contents to the index. | "Add contents of new or changed files to the index." | S5 |
| C8 | tools-mastery-001 | git commit without other arguments commits only staged changes. | "When you run git commit without any other arguments, it will only commit staged changes." | S5 |
| C9 | tools-mastery-001 | git commit creates a commit with the content of the index and a log message. | "Create a new commit containing the current contents of the index and the given log message describing the changes." | S6 |
| C10 | tools-mastery-001 | The -m option of git commit gives the commit message. | "Use <msg> as the commit message." | S6 |
| C11 | tools-mastery-001 | The -u option of git push adds an upstream reference that git pull and other commands use. | "add upstream (tracking) reference, used by argument-less git-pull[1] and other commands." | S7 |
| C12 | tools-mastery-002 | A bug is a problem which impairs or prevents the functions of a product. | "A bug is a problem which impairs or prevents the functions of a product." | S9 |
| C13 | tools-mastery-002 | A workflow is a set of statuses and transitions that a work item moves through. | "A Jira workflow is a set of statuses and transitions that a work item moves through." | S8 |
| C14 | tools-mastery-002 | Transitions are one-way, so moving back needs a separate transition. | "Transitions are one-way. To move a work item back and forth, you need two separate transitions." | S8 |
| C15 | tools-mastery-002 | The default priority Highest means the problem will block progress. | "Highest This problem will block progress." | S10 |
| C16 | tools-mastery-002 | The default priority Lowest means a trivial problem. | "Lowest Trivial problem with little or no impact on progress." | S10 |
| C17 | tools-mastery-002 | Jira has a default status To Do. | "To Do The work item has been reported and is waiting for the team to action it." | S10 |
| C18 | tools-mastery-002 | Jira has a default status In Progress. | "In Progress This work item is being actively worked on at the moment by the assignee." | S10 |
| C19 | tools-mastery-002 | Jira has a default status In Review. | "In Review The assignee has carried out the work needed on the work item, and it needs peer review before being considered done." | S10 |
| C20 | tools-mastery-002 | Jira has a default status Done. | "Done Work has finished on the work item." | S10 |
| C21 | tools-mastery-002 | A team can edit or remove the default statuses of a workflow. | "The statuses are recommended starting points for each template, but you can edit or remove them from a workflow to suit your team's need." | S10 |
| C22 | tools-mastery-002 | Jira has a default resolution Duplicate. | "Duplicate The problem is a duplicate of an existing work item." | S10 |
| C23 | tools-mastery-002 | Jira has a default resolution Cannot reproduce. | "Cannot reproduce All attempts at reproducing this work item failed, or not enough information was available to reproduce the work item." | S10 |
| C24 | tools-mastery-002 | Work items can be linked with the link types duplicates and is duplicated by. | "Work items can have the following link types: is blocked by blocks is cloned by clones is duplicated by duplicates" | S11 |
| C25 | tools-mastery-003 | Collections save API requests and keep them organized. | "Use collections to save all your API requests, keep them organized, and find them when you need them." | S13 |
| C26 | tools-mastery-003 | A collection can have folders to group requests. | "add folders to group requests together" | S13 |
| C27 | tools-mastery-003 | An environment is a set of variables that requests and scripts can reference. | "an environment is a set of one or more variables that you can reference when sending requests, writing pre-request scripts, or writing post-response scripts" | S12 |
| C28 | tools-mastery-003 | Variables in Postman are key-value pairs. | "Variables in Postman are key-value pairs." | S14 |
| C29 | tools-mastery-003 | A repeated URL can be stored in a base_url variable, and {{base_url}} references it. | "you can store it in a base_url variable. Then, use {{base_url}} to reference the variable in your requests." | S14 |
| C30 | tools-mastery-003 | When the environment changes, the variables use the values of the current environment. | "When you switch between environments, all of the variables in your requests and scripts will use the values from the current environment." | S12 |
| C31 | tools-mastery-003 | Environments can hold sensitive data such as API keys, passwords or tokens. | "manage the visibility of sensitive data such as API keys, passwords, or tokens" | S12 |
| C32 | tools-mastery-003 | A sensitive variable can be marked Secure. | "If the data is sensitive, next to your variable’s name, click Secure." | S12 |
| C33 | tools-mastery-003 | A test uses pm.test with a name and a function. | "Define tests using the pm.test function. Provide a name and function that returns a boolean (true or false) value to indicate if the test passed or failed." | S15 |
| C34 | tools-mastery-003 | A status test goes in the Post-response tab and uses pm.response.to.have.status. | "enter the following in the Post-response tab of a request to test if the response status code is 200" | S15 |
| C35 | tools-mastery-003 | The check of the status code is written with pm.response.to.have.status(200). | "pm.response.to.have.status(200);" | S15 |
| C36 | tools-mastery-003 | The result of a test shows in the Test Results tab. | "select the Test Results tab in the response" | S15 |
| C37 | tools-mastery-003 | The Collection Runner sends requests in the order you choose and logs the test results of each request. | "Send some or all of the API requests in a Postman Collection using the Collection Runner, in the order you choose. The Collection Runner logs the test results for each request" | S16 |
| C38 | tools-mastery-003 | The Postman CLI is the command line tool that integrates collection runs with a CI/CD pipeline. | "You can also integrate collection runs with your CI/CD pipeline using the Postman CLI, Postman’s command line tool." | S16 |
| C39 | tools-mastery-004 | Selenium is an umbrella project for tools and libraries that automate web browsers. | "Selenium is an umbrella project for a range of tools and libraries that enable and support the automation of web browsers." | S17 |
| C40 | tools-mastery-004 | WebDriver is at the core of Selenium, an interface for instruction sets that run in many browsers. | "At the core of Selenium is WebDriver, an interface to write instruction sets that can be run interchangeably in many browsers." | S17 |
| C41 | tools-mastery-004 | Selenium WebDriver is a W3C Recommendation. | "Selenium WebDriver is a W3C Recommendation" | S18 |
| C42 | tools-mastery-004 | Selenium Grid runs WebDriver scripts on remote machines. | "Selenium Grid allows the execution of WebDriver scripts on remote machines by routing commands sent by the client to remote browser instances." | S19 |
| C43 | tools-mastery-004 | One aim of Selenium Grid is to run tests in parallel on multiple machines. | "Provide an easy way to run tests in parallel on multiple machines" | S19 |
| C44 | tools-mastery-004 | The default implicit wait in Selenium is 0. | "The default value is 0, which means that if the element is not found, it will immediately return an error." | S20 |
| C45 | tools-mastery-004 | Selenium warns not to mix implicit and explicit waits. | "Warning: Do not mix implicit and explicit waits." | S20 |
| C46 | tools-mastery-004 | Playwright Test is an end-to-end test framework for modern web apps that bundles a test runner, assertions, isolation and parallelization. | "Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling." | S21 |
| C47 | tools-mastery-004 | Playwright supports Chromium, WebKit and Firefox. | "Playwright supports Chromium, WebKit and Firefox" | S21 |
| C48 | tools-mastery-004 | Playwright performs actionability checks before an action and waits for them to pass. | "Playwright performs a range of actionability checks on the elements before making actions to ensure these actions behave as expected. It auto-waits for all the relevant checks to pass and only then performs the requested action." | S22 |
| C49 | tools-mastery-004 | One actionability check is that the element is Visible. | "element is Visible" | S22 |
| C50 | tools-mastery-004 | One actionability check is that the element is Enabled. | "element is Enabled" | S22 |
| C51 | tools-mastery-005 | JMeter can simulate a heavy load on a server, to test its strength or analyze its performance. | "It can be used to simulate a heavy load on a server, group of servers, network or object to test its strength or to analyze overall performance under different load types." | S26 |
| C52 | tools-mastery-005 | k6 scripts are written in JavaScript. | "Scripts are written in JavaScript, as ES6 modules" | S23 |
| C53 | tools-mastery-005 | k6 runs iterations in parallel with virtual users (VUs). | "k6 runs multiple iterations in parallel with virtual users (VUs)." | S23 |
| C54 | tools-mastery-005 | The options object sets vus and duration in the script. | "export const options = { vus: 10, duration: '30s', };" | S23 |
| C55 | tools-mastery-005 | The default function defines the VU logic. | "Every test also has a default function, which defines the VU logic." | S23 |
| C56 | tools-mastery-005 | The command k6 run script.js runs a script. | "k6 run script.js" | S23 |
| C57 | tools-mastery-005 | A check takes a response and an object of named checks, each a function of the response. | "check(res, { 'status was 200': (r) => r.status == 200 });" | S23 |
| C58 | tools-mastery-005 | A check is like an assert, but a failed check does not fail the test. | "Checks are similar to what many testing frameworks call an assert, but failed checks do not cause the test to abort or finish with a failed status." | S24 |
| C59 | tools-mastery-005 | Thresholds are the pass or fail criteria for the metrics of a test. | "Thresholds are the pass/fail criteria that you define for your test metrics." | S25 |
| C60 | tools-mastery-005 | The threshold http_req_failed with rate<0.01 means that errors are less than 1%. | "http_req_failed: ['rate<0.01'], // http errors should be less than 1%" | S25 |
| C61 | tools-mastery-005 | If a threshold fails, k6 exits with a non-zero exit code. | "k6 would exit with a non-zero exit code" | S25 |
| C62 | tools-mastery-005 | A minimal JMeter test has a Test Plan, a Thread Group and one or more Samplers. | "A minimal test will consist of the Test Plan, a Thread Group and one or more Samplers." | S28 |
| C63 | tools-mastery-005 | A Thread Group sets the number of threads, the ramp-up period and the number of runs. | "Set the number of threads Set the ramp-up period Set the number of times to execute the test" | S28 |
| C64 | tools-mastery-005 | Use the GUI only to create the script and CLI mode for load testing. | "GUI mode should only be used for creating the test script, CLI mode (NON GUI) must be used for load testing" | S27 |
| C65 | tools-mastery-005 | -n runs CLI mode, -t gives the JMX test plan file, -l gives the JTL log file. | "-n This specifies JMeter is to run in cli mode -t [name of JMX file that contains the Test Plan]. -l [name of JTL file to log sample results to]." | S27 |
| C66 | tools-mastery-006 | Containers are isolated processes for the components of an app. | "containers are isolated processes for each of your app's components" | S29 |
| C67 | tools-mastery-006 | Each container has everything it needs to run. | "Each container has everything it needs to function with no reliance on any pre-installed dependencies on the host machine." | S29 |
| C68 | tools-mastery-006 | Containers are independent, and deleting one does not affect others. | "Each container is independently managed. Deleting one container won't affect any others." | S29 |
| C69 | tools-mastery-006 | A container image is a package of the files and settings to run a container. | "A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container." | S30 |
| C70 | tools-mastery-006 | Images are immutable. | "Images are immutable. Once an image is created, it can't be modified." | S30 |
| C71 | tools-mastery-006 | docker run -d runs the container in the background. | "-d, --detach Run container in background and print container ID" | S32 |
| C72 | tools-mastery-006 | docker run --name assigns a name to the container. | "--name Assign a name to the container" | S32 |
| C73 | tools-mastery-006 | docker run -e sets environment variables. | "-e, --env Set environment variables" | S32 |
| C74 | tools-mastery-006 | docker run -p publishes a container port to the host. | "-p, --publish Publish a container's port(s) to the host" | S32 |
| C75 | tools-mastery-006 | -p 8080:80 maps host port 8080 to container port 80. | "-p 8080:80 Map port 8080 on the Docker host to TCP port 80 in the container." | S35 |
| C76 | tools-mastery-006 | Docker Compose defines and runs multi-container applications. | "Docker Compose is a tool for defining and running multi-container applications." | S31 |
| C77 | tools-mastery-006 | Compose uses a single YAML configuration file. | "making it easy to manage services, networks, and volumes in a single YAML configuration file" | S31 |
| C78 | tools-mastery-006 | Compose works in testing and CI workflows. | "Compose works in all environments - production, staging, development, testing, as well as CI workflows." | S31 |
| C79 | tools-mastery-006 | docker compose up -d starts the containers in the background. | "-d, --detach Detached mode: Run containers in the background" | S33 |
| C80 | tools-mastery-006 | docker compose down stops containers and removes what up created. | "Stops containers and removes containers, networks, volumes, and images created by up." | S34 |
| C81 | tools-mastery-006 | docker compose down removes the containers and the networks by default. | "By default, the only things removed are: Containers for services defined in the Compose file. Networks defined in the networks section of the Compose file." | S34 |
| C82 | tools-mastery-006 | docker compose down -v also removes named volumes. | "-v, --volumes Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers" | S34 |
| C83 | tools-mastery-007 | GitHub Actions is a CI/CD platform that automates the build, test and deployment pipeline. | "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." | S37 |
| C84 | tools-mastery-007 | Jenkins is an automation engine. | "Jenkins is, fundamentally, an automation engine which supports a number of automation patterns." | S36 |
| C85 | tools-mastery-007 | A continuous delivery pipeline automates the way from version control to the users. | "A continuous delivery (CD) pipeline is an automated expression of your process for getting software from version control right through to your users and customers." | S36 |
| C86 | tools-mastery-007 | A Jenkins Pipeline is defined in a text file called a Jenkinsfile, which can be committed to source control. | "The definition of a Jenkins Pipeline is written into a text file (called a Jenkinsfile) which in turn can be committed to a project’s source control repository." | S36 |
| C87 | tools-mastery-007 | A stage block defines a distinct subset of tasks, such as Build, Test and Deploy. | "A stage block defines a conceptually distinct subset of tasks performed through the entire Pipeline (e.g. "Build", "Test" and "Deploy" stages)" | S36 |
| C88 | tools-mastery-007 | A step is a single task. | "Step A single task." | S36 |
| C89 | tools-mastery-007 | The Declarative Pipeline has the shape pipeline, agent any, stages, stage, steps. | "pipeline { agent any (1) stages { stage('Build') { (2) steps { // (3) } }" | S36 |
| C90 | tools-mastery-007 | agent any executes the Pipeline on any available agent. | "Execute this Pipeline or any of its stages, on any available agent." | S36 |
| C91 | tools-mastery-007 | A step can run a shell command with the sh step. | "to execute the shell command make, use the sh step: sh 'make'." | S36 |
| C92 | tools-mastery-007 | A workflow is a YAML file in the repository, and it runs when an event triggers it. | "Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository" | S38 |
| C93 | tools-mastery-007 | Workflows are in the .github/workflows directory. | "Workflows are defined in the .github/workflows directory in a repository." | S38 |
| C94 | tools-mastery-007 | A workflow can run when a push is made. | "you can configure your workflow to run when a push is made to the default branch of your repository" | S38 |
| C95 | tools-mastery-007 | A workflow can be triggered when a pull request is opened. | "such as a pull request being opened or an issue being created" | S37 |
| C96 | tools-mastery-007 | Workflow triggers are defined with the on key. | "Workflow triggers are defined with the on key." | S38 |
| C97 | tools-mastery-007 | A workflow has one or more jobs, each on a runner, with steps that run a script or an action. | "One or more jobs, each of which will execute on a runner machine and run a series of one or more steps. Each step can either run a script that you define or run an action" | S38 |
| C98 | tools-mastery-007 | GitHub provides Ubuntu Linux, Windows and macOS runners. | "GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows." | S37 |
| C99 | tools-mastery-007 | You can host your own runners. | "you can host your own runners" | S37 |
| C100 | tools-mastery-008 | Use the Network panel to make sure that resources are downloaded or uploaded as expected. | "In general, use the Network panel when you need to make sure that resources are being downloaded or uploaded as expected." | S39 |
| C101 | tools-mastery-008 | The Network panel shows the properties of a resource, such as headers, content and size. | "Inspecting the properties of an individual resource, such as its HTTP headers, content, size, and so on." | S39 |
| C102 | tools-mastery-008 | DevTools opens with Control+Shift+J or Command+Option+J (Mac). | "Open DevTools by pressing Control+Shift+J or Command+Option+J (Mac)." | S39 |
| C103 | tools-mastery-008 | The Network panel opens from the Network tab. | "Click the Network tab." | S39 |
| C104 | tools-mastery-008 | DevTools logs network activity only while it is open. | "DevTools only logs network activity while it's open" | S39 |
| C105 | tools-mastery-008 | Each row of the Network Log is a resource. | "Each row of the Network Log represents a resource." | S39 |
| C106 | tools-mastery-008 | The default columns are Status, Type, Initiator, Size and Time. | "The default columns are: Status: The HTTP response code. Type: The resource type. Initiator: What caused a resource to be requested." | S39 |
| C107 | tools-mastery-008 | The Size and Time columns are in the default columns. | "Size: Resource amount transferred over the network. Time: How long the request took." | S39 |
| C108 | tools-mastery-008 | Requests can be filtered with the Fetch/XHR button. | "click the All, Fetch/XHR, JS, CSS, Img, Media, Font, Doc, WS (WebSocket), Wasm (WebAssembly), Manifest, or Other" | S40 |
| C109 | tools-mastery-008 | The Headers tab shows the HTTP header data of a request. | "Open the Headers tab and scroll down to General, Response Headers, Request Headers" | S40 |
| C110 | tools-mastery-008 | The Payload tab shows the query string parameters and form data of a request. | "To view the request's payload, that is, its query string parameters and form data, select a request from the Requests table and open the Payload tab." | S40 |
| C111 | tools-mastery-008 | The Response tab shows the response body. | "To view the response body to a request: Select a request under the Name column in the Requests table. Open the Response tab." | S40 |
| C112 | tools-mastery-008 | Preserve log keeps requests across page loads. | "To save requests across page loads, check the Preserve log checkbox on the Network panel." | S40 |
| C113 | tools-mastery-008 | Disable cache emulates a first-time visitor. | "To emulate how a first-time user experiences your site, check the Disable cache checkbox." | S40 |
| C114 | tools-mastery-008 | The Throttling menu has presets for slow connections. | "To emulate fast 4G, slow 4G, or 3G, select the corresponding preset from the Throttling drop-down menu in the action bar at the top." | S40 |
| C115 | tools-mastery-008 | Copy as cURL copies a request as a cURL command. | "Copy as cURL. Copy the request as a cURL command." | S40 |
