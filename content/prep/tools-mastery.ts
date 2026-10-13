import type { PrepItem } from "../../lib/prep/types.ts";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "tools-mastery-001",
    question: "What Git workflow do you use as a tester?",
    template:
      "Where my test code lives: ...\nMy branch for each task: ...\nMy commands, in order: ...\nWhat each command does: ...\nHow I check my work before a commit: ...\nHow I share my work: ...",
    example:
      "I keep my test code in Git. For each task I start a new branch from an up-to-date main branch. These are my commands:\ngit switch main\ngit pull\ngit switch -c test/login-checks\ngit status\ngit diff\ngit add tests/login.spec.ts\ngit commit -m \"Add login checks\"\ngit push -u origin test/login-checks\nThe git pull command fetches changes from the remote and integrates them into the current branch. The git switch -c command creates a new branch and switches to it. Before a commit I run git status, which shows the changed paths and the untracked paths that are not ignored. I also run git diff, which shows the changes that I have not staged. I stage only the files for this task with git add. A commit records the staged content, and the -m option sets its message. The -u option of git push records the upstream branch, so a later git pull or git status knows it. Then I open a pull request on our code host, and a teammate reviews my tests.",
    behind:
      "The interviewer checks that you work on a branch and stage only what belongs to the task. They check that you know what the core commands do, and that you look at status and diff before you commit. They also listen for how you share the work and get it reviewed.",
    source: "https://git-scm.com/docs/git-switch",
  },
  {
    kind: "qa",
    id: "tools-mastery-002",
    question: "How do you handle a bug in Jira from report to close?",
    template:
      "What a bug is in Jira: ...\nWhat I write in the report: ...\nThe priority I set: ...\nThe workflow it follows: ...\nHow I retest: ...\nDuplicates and bugs that I cannot reproduce: ...",
    example:
      "In Jira, I treat a bug as a work item of the type Bug. The Atlassian docs describe a bug as a problem which impairs or prevents the functions of a product. First I search for an existing report. If I find one, I add my evidence to it. If not, I write a new report with a clear summary, the steps to reproduce, the expected and the actual result, the environment, and a screenshot or log. Then I set the priority. In the default priorities of Jira, Highest means that the problem will block progress, and Lowest means a trivial problem with little or no impact. A workflow is the set of statuses and transitions that a work item moves through, and a team can change the statuses. In my experience a bug goes through To Do, In Progress, In Review and Done, but I use the statuses of my team. After the fix, I retest with the original steps. If the bug is fixed, I move it to Done. If not, I move it back with a comment and new evidence. This needs a transition back in the workflow, because transitions are one-way. For a duplicate, I set the resolution Duplicate and link the work items. If I cannot reproduce a bug, I ask for more information. Jira has a Cannot reproduce resolution by default.",
    behind:
      "The interviewer checks that you write a report that others can reproduce, and that you look for a duplicate first. They check that you know a workflow is made of statuses and transitions. They also check that you retest, that you move a failed bug back with evidence, and what you do when you cannot reproduce a bug.",
    source: "https://support.atlassian.com/jira-cloud-administration/docs/work-with-issue-workflows/",
  },
  {
    kind: "qa",
    id: "tools-mastery-003",
    question: "How do you use collections and environments in Postman?",
    template:
      "What a collection holds: ...\nWhat an environment holds: ...\nHow I use variables: ...\nHow I switch between servers: ...\nHow I treat sensitive values: ...\nHow I check responses: ...\nHow I run many requests: ...",
    example:
      "A collection in Postman saves my API requests and keeps them organized, and I can group requests in folders. An environment is a set of variables that I can use in requests and scripts. A variable is a key-value pair, and I write it as {{base_url}}. For example, my environment test sets base_url to the test server, and my requests use {{base_url}}/users. So I do not repeat the URL in each request. When I switch to my staging environment, the variables take the values of that environment, and the same collection runs against another server. I mark sensitive values, such as tokens, as Secure. To check a response, I write a test in the Post-response tab:\npm.test(\"Status is 200\", function () {\npm.response.to.have.status(200);\n});\nThe pm.test function takes a name and a function, and the result shows in the Test Results tab. The Collection Runner sends the requests in the order that I choose and logs the test results of each request. In CI, I use the Postman CLI, the command line tool of Postman, to run the collection in the pipeline.",
    behind:
      "The interviewer checks that you can say the difference: a collection holds requests, and an environment holds variable values. They check that you use variables and not copied URLs, that you treat sensitive values with care, that you can add a test, and that you can run it in bulk and in CI.",
    source: "https://learning.postman.com/docs/use/send-requests/variables/managing-environments/",
  },
  {
    kind: "qa",
    id: "tools-mastery-004",
    question: "How do you compare Selenium and Playwright?",
    template:
      "My view on comparing tools: ...\nWhat the Selenium docs say: ...\nWhat the Playwright docs say: ...\nHow each tool waits: ...\nHow I choose: ...",
    example:
      "I do not say that one tool is better. I read what the docs of each tool say, and then I match that to the project. The Selenium docs call Selenium an umbrella project for tools and libraries that automate web browsers. At its core is WebDriver, an interface for instruction sets that run in many browsers, and WebDriver is a W3C Recommendation. Selenium Grid runs WebDriver scripts on remote machines, and one aim of Grid is to run tests in parallel on multiple machines. For waiting, the Selenium docs say that the default implicit wait is 0, and they warn not to mix implicit and explicit waits. The Playwright docs call Playwright Test an end-to-end test framework for modern web apps. It bundles a test runner, assertions, isolation and parallelization, and it supports Chromium, WebKit and Firefox. Before an action, Playwright performs actionability checks and waits for them to pass, for example that the element is visible and enabled. To choose, I look at the languages of my team, the browsers that we must cover, the tests that we already have, and our CI setup. Then I run a small trial with two or three real flows in my own setup and compare the results.",
    behind:
      "The interviewer checks that you do not name a winner without data. They check that you know basic facts of each tool from its docs, and that you can explain waiting in both tools. They also want a clear way to choose: the needs of the team first, then a small trial.",
    source: "https://www.selenium.dev/documentation/",
  },
  {
    kind: "qa",
    id: "tools-mastery-005",
    question: "How do you start a load test with k6 or JMeter?",
    template:
      "What a load test does: ...\nA k6 script: ...\nHow k6 decides pass or fail: ...\nA JMeter test plan: ...\nHow I run JMeter: ...\nHow I choose: ...",
    example:
      "In a load test, I simulate a heavy load on a system to analyze its performance, as the JMeter docs describe. With k6, I write the test as a JavaScript script. The options set the virtual users (VUs) and the duration, and the default function holds the work of each VU.\nimport http from \"k6/http\";\nimport { check } from \"k6\";\nexport const options = {\nvus: 10,\nduration: \"30s\",\nthresholds: { http_req_failed: [\"rate<0.01\"] },\n};\nexport default function () {\nconst res = http.get(\"http://localhost:8080/\");\ncheck(res, { \"status is 200\": (r) => r.status === 200 });\n}\nI run it with k6 run script.js. A check is like an assert, but a failed check does not fail the test. A threshold is a pass or fail rule. Here, fewer than 1% of the requests may fail. If a threshold fails, k6 exits with a non-zero code, and CI can stop on it. In JMeter, a minimal test has a Test Plan, a Thread Group and one or more Samplers. The Thread Group sets the number of threads, the ramp-up period and how many times to run. The JMeter docs say to use the GUI only to create the script, and to use CLI mode for load tests:\njmeter -n -t plan.jmx -l results.jtl\nThe -n option means CLI mode, -t names the test plan file, and -l names the file for the sample results. I choose by the skills of my team and by how the team stores and reviews tests.",
    behind:
      "The interviewer checks that you know the basic parts of a load test in each tool: virtual users or threads, a duration, and a pass or fail rule. They check that you run JMeter in CLI mode for the load run, and that you choose a tool by the needs of the team and not by a claim that one is better.",
    source: "https://grafana.com/docs/k6/latest/get-started/running-k6/",
  },
  {
    kind: "qa",
    id: "tools-mastery-006",
    question: "How do you use Docker for test environments?",
    template:
      "What a container and an image are: ...\nWhy I use containers for tests: ...\nHow I start one container: ...\nHow I start several services: ...\nHow I clean up: ...",
    example:
      "A container is an isolated process for one component of an app, such as a database. Each container has everything it needs to run, and containers are independent, so deleting one does not affect the others. A container runs from an image, which is a package of the files and settings to run it. Images are immutable. For tests, I use containers so that every machine and the CI server start the same dependencies. To start one container, I use docker run:\ndocker run -d --name app-under-test -e APP_ENV=test -p 8080:80 my-app:test\nThe -d option runs the container in the background, --name names it, and -e sets an environment variable. The -p option publishes a container port to the host. Here it maps port 8080 on the host to port 80 in the container. For several services, I use Docker Compose. It defines and runs multi-container applications in one YAML file, and its docs say that it works in testing and CI workflows. These two commands are my loop:\ndocker compose up -d\ndocker compose down -v\nThe up command with -d starts the containers in the background. The down command stops and removes the containers and the networks. The -v option also removes the named volumes, so the next run starts with clean data.",
    behind:
      "The interviewer checks that you explain a container and an image in simple words, and that you know the real commands to start and to clean up an environment. They also check that you clean up with down, so that each run starts from a clean state.",
    source: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
  },
  {
    kind: "qa",
    id: "tools-mastery-007",
    question: "How do Jenkins and GitHub Actions run tests in CI?",
    template:
      "What a CI tool does for my tests: ...\nHow Jenkins defines a pipeline: ...\nA Jenkinsfile for my tests: ...\nHow GitHub Actions defines a workflow: ...\nHow I choose: ...",
    example:
      "Both tools automate a pipeline from a code change to a deployment, and my tests are steps in it. The GitHub docs call GitHub Actions a CI/CD platform that automates the build, test and deployment pipeline. The Jenkins docs call Jenkins an automation engine. In Jenkins, I write the Pipeline in a text file named Jenkinsfile, and I commit it to the source control repository. A stage is a distinct subset of tasks, such as Build, Test or Deploy. A step is a single task. This is a Jenkinsfile for my tests:\npipeline {\nagent any\nstages {\nstage('Test') {\nsteps {\nsh 'npm test'\n}\n}\n}\n}\nThe line agent any runs the Pipeline on any available agent. In GitHub Actions, a workflow is a YAML file in the .github/workflows directory. An event triggers it, for example a push or an opened pull request, and the on key sets the trigger. A workflow has one or more jobs. Each job runs on a runner and has steps. A step runs a script or an action. GitHub provides Ubuntu Linux, Microsoft Windows and macOS runners, and I can host my own runners. I do not say that one tool is better. I choose by where the code lives, who runs the servers, and what my team knows.",
    behind:
      "The interviewer checks that you can describe each tool in its own terms: stages and steps in Jenkins, and events, jobs, steps and runners in GitHub Actions. They check that the pipeline definition lives in the repository, and that you choose a tool by the needs of the team and not by a claim that one is better.",
    source: "https://www.jenkins.io/doc/book/pipeline/",
  },
  {
    kind: "qa",
    id: "tools-mastery-008",
    question: "How do you use the network tab of the browser DevTools?",
    template:
      "What the Network tab is for: ...\nHow I open it: ...\nWhat the rows and columns show: ...\nHow I inspect one request: ...\nThe settings I use: ...\nWhat I put in my bug report: ...",
    example:
      "I use the Network panel of Chrome DevTools to see what a page sends and receives. The Chrome docs say to use it to make sure that resources are downloaded or uploaded as expected, and to inspect the HTTP headers, content and size of a resource. I open DevTools with Control+Shift+J, or Command+Option+J on a Mac, and click the Network tab. DevTools logs network activity only while it is open, so I reload the page. Each row is a resource. The default columns are Status, Type, Initiator, Size and Time, and Status is the HTTP response code. For a UI bug, I click the Fetch/XHR button to show the API calls. Then I click the request that my action caused. The Headers tab shows the headers. The Payload tab shows the query string parameters and form data that the page sent. The Response tab shows the response body. If the page reloads and I lose the rows, I check Preserve log. To see a first visit, I check Disable cache. To see a slow connection, I choose a preset in the Throttling menu. To repeat a call outside the browser, I right-click the request and choose Copy as cURL. In my bug report, I write the URL, the status code, the request payload and the response.",
    behind:
      "The interviewer checks that you can find the request that belongs to a UI action and read its status, headers, payload and response. They check that you know the settings for testing: Preserve log, Disable cache and Throttling. They also check that your bug report contains evidence from the tab.",
    source: "https://developer.chrome.com/docs/devtools/network",
  },
];
