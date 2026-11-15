# Research notes: CI/CD Pipelines

Page: `content/devops/ci-cd.mdx`. Module: DevOps & Cloud. Date: 2026-11-15.

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): what CI, continuous delivery, and continuous deployment are, the parts of a pipeline in GitHub Actions and Jenkins, a walk-through that puts a Playwright suite into GitHub Actions, the test work that a pipeline serves, and common mistakes. The reels after the text are another creator's videos and are not sources. Each fact in the text comes from the sources below. The first version of the page (2026-11-05) had the two sentences about Jenkins and GitHub Actions; they are still in `## What it is`.

The YAML of `## Try it` is the workflow of the Playwright guide (S7), as it was on 2026-11-15. The Jenkinsfiles are the examples of the Jenkins handbook (S6). The cron line `30 5 * * 1-5` is the example of S12, without its time zone.

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | Jenkins User Documentation (Jenkins) | https://www.jenkins.io/doc/ |
| S2 | Understanding GitHub Actions (GitHub Docs) | https://docs.github.com/en/actions/get-started/understand-github-actions |
| S3 | Continuous integration (GitHub Docs) | https://docs.github.com/en/actions/get-started/continuous-integration |
| S4 | What is Continuous Delivery? (Amazon Web Services) | https://aws.amazon.com/devops/continuous-delivery/ |
| S5 | Pipeline (Jenkins User Handbook) | https://www.jenkins.io/doc/book/pipeline/ |
| S6 | Using a Jenkinsfile (Jenkins User Handbook) | https://www.jenkins.io/doc/book/pipeline/jenkinsfile/ |
| S7 | Setting up CI (Playwright) | https://playwright.dev/docs/ci-intro |
| S8 | Evaluate expressions in workflows and actions (GitHub Docs) | https://docs.github.com/en/actions/reference/workflows-and-actions/expressions |
| S9 | npm ci (npm Docs) | https://docs.npmjs.com/cli/v11/commands/npm-ci |
| S10 | GitHub Actions billing (GitHub Docs) | https://docs.github.com/en/billing/concepts/product-billing/github-actions |
| S11 | About protected branches (GitHub Docs) | https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches |
| S12 | Events that trigger workflows (GitHub Docs) | https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows |
| S13 | Workflow syntax for GitHub Actions (GitHub Docs) | https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax |
| S14 | Store and share data with workflow artifacts (GitHub Docs) | https://docs.github.com/en/actions/tutorials/store-and-share-data |
| S15 | Secrets (GitHub Docs) | https://docs.github.com/en/actions/concepts/security/secrets |
| S16 | Secure use reference (GitHub Docs) | https://docs.github.com/en/actions/reference/security/secure-use |
| S17 | Continuous deployment (GitHub Docs) | https://docs.github.com/en/actions/get-started/continuous-deployment |

## Claims

| Claim | Source | Quote |
|---|---|---|
| Continuous integration (CI) is a software practice that requires frequently committing code to a shared repository. | S3 | "Continuous integration (CI) is a software practice that requires frequently committing code to a shared repository" |
| Each commit can be built and tested, to make sure that it doesn't introduce errors. | S3 | "you can continuously build and test the code to make sure that the commit doesn't introduce errors" |
| The tests can include code linters, security checks, code coverage, functional tests, and other custom checks. | S3 | "security checks, code coverage, functional tests, and other custom checks" |
| Continuous delivery expands upon CI. | S4 | "continuous delivery expands upon continuous integration" |
| Every code change is built, tested, and then pushed to a non-production testing or staging environment. | S4 | "every code change is built, tested, and then pushed to a non-production testing or staging environment" |
| Done well, the team always has a deployment-ready build artifact that has passed through a standardized test process. | S4 | "When properly implemented, developers will always have a deployment-ready build artifact" |
| Done well, the team always has a deployment-ready build artifact that has passed through a standardized test process. | S4 | "a deployment-ready build artifact that has passed through a standardized test process" |
| The difference between continuous delivery and continuous deployment is a manual approval to update production. | S4 | "The difference between continuous delivery and continuous deployment is the presence of a manual approval to update to production" |
| With continuous deployment, production happens automatically, without explicit approval. | S4 | "With continuous deployment, production happens automatically without explicit approval" |
| Jenkins: a continuous delivery pipeline is "an automated expression of your process for getting software from version control right through to your users and customers". | S5 | "A continuous delivery (CD) pipeline is an automated expression of your process for getting software from version control right through to your users and customers" |
| Jenkins is a self-contained, open source automation server for tasks related to building, testing, and delivering or deploying software. | S1 | "self-contained, open source automation server" |
| Jenkins is a self-contained, open source automation server for tasks related to building, testing, and delivering or deploying software. | S1 | "building, testing, and delivering or deploying software" |
| GitHub Actions is a CI/CD platform that lets you automate your build, test, and deployment pipeline. | S2 | "continuous integration and continuous delivery (CI/CD) platform" |
| GitHub Actions is a CI/CD platform that lets you automate your build, test, and deployment pipeline. | S2 | "automate your build, test, and deployment pipeline" |
| Workflow: a configurable automated process that runs one or more jobs. | S2 | "A workflow is a configurable automated process that will run one or more jobs" |
| Workflow: a YAML file in the `.github/workflows` directory. | S2 | "Workflows are defined in the .github/workflows directory in a repository" |
| Event: a specific activity in a repository that triggers a workflow run. | S2 | "An event is a specific activity in a repository that triggers a workflow run" |
| Event: such as a pushed commit or a new pull request. | S2 | "when someone creates a pull request, opens an issue, or pushes a commit to a repository" |
| A workflow can also run on a schedule, through the REST API, or manually. | S2 | "You can also trigger a workflow to run on a schedule, by posting to a REST API, or manually" |
| Job: a set of steps that runs on the same runner. | S2 | "A job is a set of steps in a workflow that is executed on the same runner" |
| Step: a shell script or an action. | S2 | "Each step is either a shell script that will be executed, or an action that will be run" |
| Steps are executed in order and depend on each other. | S2 | "Steps are executed in order and are dependent on each other" |
| Action: a pre-defined, reusable set of jobs or code that performs a specific task. | S2 | "An action is a pre-defined, reusable set of jobs or code that performs specific tasks within a workflow" |
| Runner: a server that runs your workflows; each runner can run a single job at a time. | S2 | "A runner is a server that runs your workflows when they're triggered" |
| Runner: a server that runs your workflows; each runner can run a single job at a time. | S2 | "Each runner can run a single job at a time" |
| By default, jobs have no dependencies and run in parallel. | S2 | "by default, jobs have no dependencies and run in parallel" |
| A job that depends on another job waits for that job to complete. | S2 | "When a job takes a dependency on another job, it waits for the dependent job to complete before running" |
| A matrix runs the same job several times, each with a different combination of variables, like operating systems or language versions. | S2 | "to run the same job multiple times, each with a different combination of variables" |
| A matrix runs the same job several times, each with a different combination of variables, like operating systems or language versions. | S2 | "like operating systems or language versions" |
| GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners. | S2 | "GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows" |
| Each workflow run executes in a fresh, newly-provisioned virtual machine. | S2 | "Each workflow run executes in a fresh, newly-provisioned virtual machine" |
| GitHub runs your CI tests and shows the results of each test in the pull request. | S3 | "GitHub runs your CI tests and provides the results of each test in the pull request" |
| When all CI tests in a workflow pass, the change is ready to be reviewed or merged. | S3 | "When all CI tests in a workflow pass, the changes you pushed are ready to be reviewed by a team member or merged" |
| A Jenkins Pipeline is written in a text file called a `Jenkinsfile`, which can be committed to the project's source control repository. | S5 | "The definition of a Jenkins Pipeline is written into a text file (called a Jenkinsfile) which in turn can be committed to a project's source control repository" |
| A stage is a distinct subset of tasks, such as "Build", "Test", and "Deploy". | S5 | "A stage block defines a conceptually distinct subset of tasks performed through the entire Pipeline" |
| A step is a single task, such as `sh 'make'` to run a shell command. | S5 | "a step tells Jenkins what to do at a particular point in time" |
| A step is a single task, such as `sh 'make'` to run a shell command. | S5 | "to execute the shell command make, use the sh step: sh 'make'" |
| A node is a machine of the Jenkins environment that can execute a Pipeline. | S5 | "A node is a machine which is part of the Jenkins environment and is capable of executing a Pipeline" |
| This is a basic three-stage pipeline in the Declarative syntax. | S6 | "Consider the following Pipeline which implements a basic three-stage continuous delivery pipeline" |
| Standard GitHub-hosted runners in public repositories are free. | S10 | "The following usage remains free independently and does not reduce the included compute usage" |
| Standard GitHub-hosted runners in public repositories are free. | S10 | "Standard GitHub-hosted runners in public repositories" |
| In a private repository, runner time draws from the monthly included compute usage of your plan. | S10 | "For private repositories, usage is measured against two parts of your plan" |
| In a private repository, runner time draws from the monthly included compute usage of your plan. | S10 | "draws from your monthly included compute usage" |
| `npm init playwright@latest` offers to add a GitHub Actions workflow. | S7 | "you are given the option to add a GitHub Actions workflow" |
| It creates `.github/workflows/playwright.yml`, which runs your tests on each push and pull request into the `main` or `master` branch. | S7 | "This creates a playwright.yml file inside a .github/workflows folder containing everything you need so that your tests run on each push and pull request into the main/master branch" |
| The steps clone your repository, install Node.js, install the npm dependencies, install the Playwright browsers, run the tests, and upload the HTML report. | S7 | "Install Playwright Browsers" |
| The steps clone your repository, install Node.js, install the npm dependencies, install the Playwright browsers, run the tests, and upload the HTML report. | S7 | "Upload HTML report to the GitHub UI" |
| `runs-on` defines the type of machine that runs the job, by a workflow label such as `ubuntu-latest`. | S13 | "to define the type of machine to run the job on" |
| `runs-on` defines the type of machine that runs the job, by a workflow label such as `ubuntu-latest`. | S13 | "The value for runs-on, when you are using a GitHub-hosted runner, is a workflow label or the name of a runner group" |
| `npm ci` is the install command for automated environments such as test platforms and continuous integration. | S9 | "it's meant to be used in automated environments such as test platforms, continuous integration, and deployment" |
| It never writes to `package.json` or the lock file. | S9 | "It will never write to package.json or any of the package-locks" |
| A step with no status function gets the default check `success()`, which returns true when all previous steps have succeeded. | S8 | "A default status check of success() is applied unless you include one of these functions" |
| A step with no status function gets the default check `success()`, which returns true when all previous steps have succeeded. | S8 | "Returns true when all previous steps have succeeded" |
| `cancelled()` is true only if the workflow was canceled. | S8 | "Returns true if the workflow was canceled" |
| Initialize a Git repository with `git init`, so that you can add, commit, and push. | S7 | "initialize a git repository using the git init command so you can add, commit, and push your code" |
| The Actions tab shows whether your tests passed or failed. | S7 | "Click on the Actions tab to see the workflows" |
| The Actions tab shows whether your tests passed or failed. | S7 | "Here you see if your tests have passed or failed" |
| Run Playwright tests shows the error messages, what was expected and what was received, and the call log. | S7 | "shows the error messages, what was expected and what was received as well as the call log" |
| In the Artifacts section, click `playwright-report` to download the report as a zip file. | S7 | "In the Artifacts section, click on the playwright-report to download your report in the format of a zip file" |
| Serve the report with `npx playwright show-report`, because opening the file directly does not work as expected. | S7 | "Locally opening the report does not work as expected as you need a web server for everything to work correctly" |
| Serve the report with `npx playwright show-report`, because opening the file directly does not work as expected. | S7 | "npx playwright show-report name-of-my-extracted-playwright-report" |
| All required status checks must pass before collaborators can merge changes into the protected branch. | S11 | "all required status checks must pass before collaborators can merge changes into the protected branch" |
| A slow suite can run on a timer with the `schedule` event. | S12 | "The schedule event allows you to trigger a workflow at a scheduled time" |
| It uses POSIX cron syntax: five fields for the minute, hour, day of the month, month, and day of the week. | S12 | "Use POSIX cron syntax to schedule workflows to run at specific times" |
| It uses POSIX cron syntax: five fields for the minute, hour, day of the month, month, and day of the week. | S12 | "Cron syntax has five fields separated by a space, and each field represents a unit of time" |
| By default, scheduled workflows run in UTC. | S12 | "By default, scheduled workflows run in UTC" |
| Scheduled workflows run on the latest commit on the default branch. | S12 | "Scheduled workflows run on the latest commit on the default branch" |
| The shortest interval is once every 5 minutes. | S12 | "The shortest interval you can run scheduled workflows is once every 5 minutes" |
| `30 5 * * 1-5` with `timezone: "America/New_York"` runs at 5:30 AM in that timezone, Monday through Friday (the `-` is a range); without the timezone line, it runs in UTC. | S12 | "Range of values" |
| `30 5 * * 1-5` with `timezone: "America/New_York"` runs at 5:30 AM in that timezone, Monday through Friday (the `-` is a range); without the timezone line, it runs in UTC. | S12 | "run at 5:30 AM in the America/New_York timezone every Monday through Friday" |
| `30 5 * * 1-5` with `timezone: "America/New_York"` runs at 5:30 AM in that timezone, Monday through Friday (the `-` is a range); without the timezone line, it runs in UTC. | S12 | "By default, scheduled workflows run in UTC" |
| The output of building and testing often produces files that you can use to debug test failures. | S14 | "The output of building and testing your code often produces files you can use to debug test failures" |
| You can use the `upload-artifact` action to upload them. | S14 | "You can use the upload-artifact action to upload artifacts" |
| `retention-days` sets how long one artifact is kept, within the limit of the repository, organization, or enterprise. | S14 | "you can use retention-days with the upload-artifact action" |
| `retention-days` sets how long one artifact is kept, within the limit of the repository, organization, or enterprise. | S14 | "The retention-days value cannot exceed the retention limit set by the repository, organization, or enterprise" |
| In Jenkins, the `junit` step records JUnit XML test reports. | S6 | "The example below uses the junit step, provided by the JUnit plugin" |
| In Jenkins, the `junit` step records JUnit XML test reports. | S6 | "junit captures and associates the JUnit XML files matching the inclusion pattern" |
| In the handbook's example that runs sh make check || true, failed tests mark the Pipeline unstable, shown as a yellow ball in the web UI; Jenkins can show trends from the recorded reports. | S6 | "as denoted by a yellow ball in the web UI" |
| In the handbook's example that runs sh make check || true, failed tests mark the Pipeline unstable, shown as a yellow ball in the web UI; Jenkins can show trends from the recorded reports. | S6 | "the sh step was modified to never return a non-zero exit code" |
| In the handbook's example that runs sh make check || true, failed tests mark the Pipeline unstable, shown as a yellow ball in the web UI; Jenkins can show trends from the recorded reports. | S6 | "Jenkins can also provide historical trend analysis and visualization" |
| Jenkins can show trends from the recorded reports. | S6 | "Based on the recorded test reports, Jenkins can also provide historical trend analysis and visualization" |
| A Declarative Pipeline can record them in a `post` section with the condition `always`. | S6 | "Declarative Pipeline supports robust failure handling by default via its post section" |
| Continuous delivery has a manual approval before production. | S4 | "the presence of a manual approval to update to production" |
| In GitHub Actions, an environment can require approval before a job proceeds. | S17 | "you can use environments to require approval for a job to proceed" |
| A continuous delivery pipeline can run more than unit tests: UI testing, load testing, integration testing, and API reliability testing. | S4 | "automate testing beyond just unit tests" |
| A continuous delivery pipeline can run more than unit tests: UI testing, load testing, integration testing, and API reliability testing. | S4 | "These tests may include UI testing, load testing, integration testing, API reliability testing" |
| If the dependencies in the lock file do not match `package.json`, `npm ci` exits with an error instead of updating the lock file. | S9 | "If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock" |
| By default, a job can run 360 minutes before GitHub cancels it. | S13 | "The maximum number of minutes to let a job run before GitHub automatically cancels it" |
| By default, a job can run 360 minutes before GitHub cancels it. | S13 | "Default: 360" |
| For Playwright, the guide sets `globalTimeout` in the config instead, so that the reporters still produce a report. | S7 | "set globalTimeout in your config" |
| For Playwright, the guide sets `globalTimeout` in the config instead, so that the reporters still produce a report. | S7 | "so that the reporters still produce a report" |
| Store a password as a secret of the organization, repository, or environment. | S15 | "Secrets are variables that you create to use in GitHub Actions workflows in an organization, repository, or repository environment" |
| A workflow can read a secret only if it names it. | S15 | "GitHub Actions can only read a secret if you explicitly include the secret in a workflow" |
| GitHub redacts secrets that are printed to the logs, but the redaction is not guaranteed. | S15 | "GitHub Actions automatically redacts the contents of all GitHub secrets that are printed to workflow logs" |
| GitHub redacts secrets that are printed to the logs, but the redaction is not guaranteed. | S15 | "this redaction is not guaranteed" |
| A tag can be moved or deleted if a bad actor gains access to the repository of the action. | S16 | "a tag can be moved or deleted if a bad actor gains access to the repository storing the action" |
| Pin it to a full-length commit SHA. | S16 | "Pin actions to a full-length commit SHA" |
| If a job fails or is skipped, every job that `needs` it is skipped, unless a condition lets it continue. | S13 | "If a job fails or is skipped, all jobs that need it are skipped unless the jobs use a conditional expression that causes the job to continue" |
