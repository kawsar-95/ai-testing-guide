# Research notes: AWS Databases and Serverless

Page: `content/devops/aws-data-serverless.mdx`. Module: DevOps & Cloud. Date: 2026-11-20 (first version: 2026-11-05).

The page is a full lesson for a tester (`docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md`): AWS Lambda (the Event Function: handler, event, context, invocation, execution role, timeout, execution environment, cold starts, concurrency), Amazon DynamoDB (tables, items, keys, indexes, read consistency, capacity modes, TTL, DynamoDB local), Amazon Athena (tables and the data catalog, partitions), and AWS Step Functions (state machines, Choice states, workflow types, errors, the TestState API), with a practice run of the example function of AWS Lambda under unittest, the six steps of the AWS tutorial for DynamoDB on DynamoDB local, two small models, and CLI templates on a laptop, and a read-along of the console tutorials of AWS. The first version (2026-11-05) had four sources and one section. The page needs no AWS account: nothing on it runs against AWS. It gives no price, because prices change; it cites the AWS pages that say what is billed. The AWS services that the shelf did not name (Amazon RDS, Amazon SQS, Amazon SNS, Amazon API Gateway, AWS SAM) are not taught here. The pricing page of Athena in the user guide redirects to the index of the guide, so it is not a source.

The practice run of `## Try it` (steps 1 to 5) was recorded on 2026-11-19 13:04:55 +0600 on Linux 7.0.0-43-generic with the system Python 3.14.4, aws-cli/2.41.0 Python/3.14.8 Linux/7.0.0-43-generic (installed on 2026-11-18 for one user, as the page AWS Compute and Storage describes), Docker version 29.10.0, and bash 5.3.9. DynamoDB local was version 3.3.2, in the image `amazon/dynamodb-local@sha256:6ada631ec7aa5fc83446855eb17233e3dad184fec47477e8140c6c569cfe0c86`. The tutorial pulled the image at 12:43 that day with `docker pull amazon/dynamodb-local:latest`. It was not on the machine before, it takes 780,424,922 bytes, and the tutorial removed it after the runs with `docker rmi`. The runner `practice/ds.sh` ran in an empty environment (`env -i HOME=... PATH=/usr/local/bin:/usr/bin:/bin TMPDIR=...`), in a fresh temp folder with copies of `lambda_function.py`, `test_handler.py`, `partitions.py`, and `asl_model.py` (the tutorial's own files, except `lambda_function.py`). It ran each of the five step files in its own shell and saved the output of each step in `practice/ds/out/`. It stops at once if `~/.aws` exists, if a container named `ddb-practice` exists, if port 18000 is in use, or if the image is missing. The date, the versions, the image digest, the names of the `AWS_` variables that were set before the steps (none), the number of containers named `ddb-practice` after the run (0), and what `~/.aws` held after the run are in `practice/ds/out/env.txt`. The page reads them from that file.

The runner was run three times that day. The first run stopped at once, because its guard found `~/.aws`, which the tutorial's own test of the readiness check had created at 12:46 (one file, `cli/cache/session.db`, removed by hand). The second run worked. The third run is the one that the page uses. It followed a change in the last line of `ddb_stop.sh`, which now counts containers with `--quiet` instead of a Go template, because the page generator takes `{` in a code block for an unresolved marker. In the second and the third run, the first API call of the AWS CLI created `~/.aws`, and the runner removed it after the run, because the folder did not exist before. The tutorial did not open `session.db`. To find out which call leaves it, `practice/ds_home_check.sh` ran each command with a new, empty `HOME` (record: `practice/ds/out/home_check.txt`, 2026-11-19 13:29, aws-cli/2.41.0): `aws --version` and the two `--generate-cli-skeleton` commands of step 5 created no file, and `aws dynamodb list-tables --endpoint-url http://127.0.0.1:1` (nothing listens there; exit status 255) created `.aws/cli/cache/session.db`. The runs of the earlier Part 4 pages (`practice/cs.sh`, `practice/nw.sh`, `practice/is.sh`) call only `--version`, `--generate-cli-skeleton`, and (compute and storage) `aws s3 ls --generate-cli-skeleton`, which the CLI refused with a ParamValidation error (exit status 252), and their records say `~/.aws exists after the run: no`, which agrees with this check.

The timeout facts were changed on 2026-11-20. The full claim check of all 24 pages found that the AWS page "Configure Lambda Event Function timeout" no longer gives 900 seconds (15 minutes). It gives a maximum value of 1,800 seconds (30 minutes), and it names a maximum of 5,400 seconds (90 minutes) for some invocations. The three voices, the Key words row, and the quote of the timeout fact follow the page now, and one sentence for the 5,400 seconds was added. Nothing else on the page changed, and the other quotes of S5 were still found.

- Step 1: `lambda_function.py` is the Python function of the AWS tutorial "Create your first Lambda function", copied from the HTML of the page. The tutorial removed the spaces at the ends of lines (24 lines). `python3 -m unittest -v test_handler` ran 4 tests, and all passed. The fourth test asserts today's behavior for text, negative, decimal, and boolean values of the length; the tests do not say that this behavior is right.
- Step 2: the first block started the container `ddb-practice` with `--cap-drop ALL --security-opt no-new-privileges --memory 1g`, with port 8000 of the container published as `127.0.0.1:18000`, and with `-jar DynamoDBLocal.jar -inMemory -disableTelemetry`. The AWS CLI ran with the made-up credentials of the AWS page and with `--endpoint-url http://127.0.0.1:18000` on every command. The six steps ran, and the extra check of an item without the sort key was refused with a ValidationException. `create-table` and `delete-table` both printed `"TableStatus": "ACTIVE"`. The `get-item` and `query` outputs show `Awards` with the type `N`. The sample result of step 3 on the AWS page shows `"Awards": {"S": "10"}`, and the sample of step 5 shows `N`. After `docker stop`, no container named `ddb-practice` was left. The tutorial did not watch the network, so the page does not say that no request left the machine.
- Step 3: `python3 partitions.py` printed two lines, one for all 3 folders and one for 1 folder. The first line shows 6000 rows and 674670 bytes, and the second shows 2000 rows and 224890 bytes.
- Step 4: `python3 asl_model.py` printed seven lines: the Hello World check, the two refused definitions, the three Choice results for the inputs 1, 2, and 3, and the error for the input 3 without a Default. The result for the input 2 is the example of the TestState page; the others are the tutorial's own reasoning from the rules.
- Step 5: the filter printed 23 lines for `aws lambda update-function-configuration` and 10 lines for `aws stepfunctions test-state`. The tutorial first tried `aws lambda invoke`, which refused to print a template without its required arguments `--function-name` and `outfile`, so the page uses `update-function-configuration`. The tutorial matched the template names to the pages by their names only (the page says so).

Step 6 is a read-along of S2, S26, S27, S28, S29, S38, and S1. The tutorial did not run it. The cost warnings come from S1 (Lambda billing), S26 (Athena), S32 (Step Functions), S7 and S12 (provisioned concurrency, provisioned mode).

After round 6, the comments of `ddb_start.sh` and `ddb_stop.sh` were reworded, because a checker found that they state what Docker does with no cite (no command changed, so the recorded run still holds), and three Docker pages were added as sources (S42 to S44: port publishing, `docker container run`, `docker container stop`).

Some quotes are written as `scripts/devops_claimcheck.py` reads them (case, white space, and curly quotes do not count as differences).

## Sources

| ID | Title | URL |
|---|---|---|
| S1 | What is AWS Lambda? (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/welcome.html |
| S2 | Create your first Lambda function (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html |
| S3 | Understanding Lambda Event Function invocation methods (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html |
| S4 | Defining Lambda Event Function permissions with an execution role (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html |
| S5 | Configure Lambda Event Function timeout (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html |
| S6 | Understanding the Lambda execution environment lifecycle (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html |
| S7 | Understanding Lambda Event Function scaling (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html |
| S8 | How to test serverless functions and applications (AWS Documentation) | https://docs.aws.amazon.com/lambda/latest/dg/testing-guide.html |
| S9 | What is Amazon DynamoDB? (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html |
| S10 | Core components of Amazon DynamoDB (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html |
| S11 | DynamoDB read consistency (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html |
| S12 | DynamoDB throughput capacity (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/capacity-mode.html |
| S13 | Using time to live (TTL) in DynamoDB (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html |
| S14 | Step 1: Create a table in DynamoDB (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-1.html |
| S15 | Step 2: Write data to a DynamoDB table (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-2.html |
| S16 | Step 3: Read data from a DynamoDB table (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-3.html |
| S17 | Step 4: Update data in a DynamoDB table (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-4.html |
| S18 | Step 5: Query data in a DynamoDB table (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-5.html |
| S19 | Step 6: (Optional) Delete your DynamoDB table to clean up resources (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-6.html |
| S20 | Setting up DynamoDB local (downloadable version) (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html |
| S21 | Deploying DynamoDB locally on your computer (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html |
| S22 | DynamoDB local usage notes (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.UsageNotes.html |
| S23 | Telemetry in DynamoDB local (AWS Documentation) | https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocalTelemetry.html |
| S24 | What is Amazon Athena? (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/what-is.html |
| S25 | When should I use Athena? (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/when-should-i-use-ate.html |
| S26 | Get started (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/getting-started.html |
| S27 | Step 1: Create a database (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/step-1-create-a-database.html |
| S28 | Step 2: Create a table (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/step-2-create-a-table.html |
| S29 | Step 3: Query data (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/step-3-query-data.html |
| S30 | Understanding tables, databases, and data catalogs in Athena (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/understanding-tables-databases-and-the-data-catalog.html |
| S31 | Partition your data (AWS Documentation) | https://docs.aws.amazon.com/athena/latest/ug/partitions.html |
| S32 | What is Step Functions? (AWS Documentation) | https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html |
| S33 | Using Amazon States Language to define Step Functions workflows (AWS Documentation) | https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html |
| S34 | State machine structure in Amazon States Language for Step Functions workflows (AWS Documentation) | https://docs.aws.amazon.com/step-functions/latest/dg/statemachine-structure.html |
| S35 | Choice workflow state (AWS Documentation) | https://docs.aws.amazon.com/step-functions/latest/dg/state-choice.html |
| S36 | Handling errors in Step Functions workflows (AWS Documentation) | https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html |
| S37 | Testing state machines with TestState API (AWS Documentation) | https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html |
| S38 | Learn how to get started with Step Functions (AWS Documentation) | https://docs.aws.amazon.com/step-functions/latest/dg/getting-started.html |
| S39 | AWS CLI skeletons and input files in the AWS CLI (AWS Documentation) | https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html |
| S40 | Configuring environment variables for the AWS CLI (AWS Documentation) | https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html |
| S41 | unittest: Unit testing framework (Python Documentation) | https://docs.python.org/3/library/unittest.html |
| S42 | Port publishing and mapping (Docker Docs) | https://docs.docker.com/engine/network/port-publishing/ |
| S43 | docker container run (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/run/ |
| S44 | docker container stop (Docker Docs) | https://docs.docker.com/reference/cli/docker/container/stop/ |

## Claims

| Claim | Source | Quote |
|---|---|---|
| AWS Lambda is a serverless compute service | S1 | "AWS Lambda is a serverless compute service" |
| With Lambda, you can run code without provisioning or managing servers | S1 | "you can run code without provisioning or managing servers" |
| Lambda automatically manages the underlying infrastructure, including server maintenance, capacity provisioning, scaling, and patching | S1 | "Lambda automatically manages the underlying infrastructure" |
| Lambda automatically manages the underlying infrastructure, including server maintenance, capacity provisioning, scaling, and patching | S1 | "including server maintenance, capacity provisioning, scaling, and patching" |
| Lambda provides three compute primitives | S1 | "Lambda provides three compute primitives, each designed for different workload patterns" |
| This page covers Event Functions, which is the name for the original Lambda function type | S1 | "Event Functions is the name for the original Lambda function type that runs your code in response to events and API calls" |
| An Event Function runs code in response to events or API calls without managing servers | S1 | "Run code in response to events or API calls without managing servers" |
| Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale | S9 | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale" |
| A table is a collection of items, and each item is a collection of attributes | S10 | "A table is a collection of items, and each item is a collection of attributes" |
| DynamoDB uses primary keys to uniquely identify each item in a table | S10 | "DynamoDB uses primary keys to uniquely identify each item in a table" |
| DynamoDB doesn't support a JOIN operator | S9 | "Unlike relational databases, DynamoDB doesn't support a JOIN operator" |
| AWS recommends that you denormalize your data model | S9 | "We recommend that you denormalize your data model to reduce database round trips and processing power needed to answer queries" |
| Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | S24 | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL" |
| You can use Athena to run ad-hoc queries using ANSI SQL, without the need to aggregate or load the data into Athena | S25 | "You can use Athena to run ad-hoc queries using ANSI SQL, without the need to aggregate or load the data into Athena" |
| Athena helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3 | S25 | "Athena helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3" |
| Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC | S25 | "Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC" |
| With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | S32 | "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines" |
| Each step in a workflow is called a state | S32 | "Each step in a workflow is called a state" |
| Instances of running workflows performing tasks are called executions | S32 | "Instances of running workflows performing tasks are called executions in Step Functions" |
| A Task state represents a unit of work that another AWS service performs | S32 | "a Task state represents a unit of work that another AWS service performs, such as calling another AWS service or API" |
| The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states | S33 | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states" |
| Lambda has pay-per-use billing, with no upfront commitments | S1 | "Pay-per-use billing" |
| Lambda has pay-per-use billing, with no upfront commitments | S1 | "No upfront commitments. You pay only for the resources used" |
| DynamoDB on-demand mode offers pay-per-request pricing for read and write requests | S12 | "DynamoDB on-demand offers pay-per-request pricing for read and write requests so that you only pay for what you use" |
| In Athena, you pay only for the queries that you run | S24 | "you pay only for the queries you run" |
| Standard workflows of Step Functions are priced by state transition | S32 | "Priced by state transition" |
| Express workflows are priced by the number and the duration of executions | S32 | "Priced by number and duration of executions" |
| In Python, a Lambda function can contain more than one Python function, but the handler function is always the entry point to your code | S2 | "A Lambda function in Python can contain more than one Python function, but the handler function is always the entry point to your code" |
| When your function is invoked, Lambda runs this method | S2 | "When your function is invoked, Lambda runs this method" |
| The handler takes two arguments, event and context | S2 | "The function lambda_handler takes two arguments, event and context" |
| An event in Lambda is a JSON formatted document that contains data for your function to process | S2 | "An event in Lambda is a JSON formatted document that contains data for your function to process" |
| If another AWS service invokes your function, the event object contains information about the event that caused the invocation | S2 | "If your function is invoked by another AWS service, the event object contains information about the event that caused the invocation" |
| Lambda passes the context object to your function automatically | S2 | "Lambda passes the context object to your function automatically" |
| The context object contains information about the function invocation and execution environment | S2 | "The context object contains information about the function invocation and execution environment" |
| With Python, you can use either a print statement or a Python logging library to send information to your function's log | S2 | "With Python, you can use either a print statement or a Python logging library to send information to your function's log" |
| In a production application, AWS recommends a logging library | S2 | "In a production application, we recommend that you use a logging library" |
| When you invoke your function outside of the Lambda console, you must use CloudWatch Logs to view your function's execution results | S2 | "When you invoke your function outside of the Lambda console, you must use CloudWatch Logs to view your function's execution results" |
| After you deploy your function, you can invoke it in several ways | S3 | "After you deploy your Lambda Event Function, you can invoke it in several ways" |
| One way is the aws lambda invoke AWS CLI command | S3 | "Use the aws lambda invoke AWS CLI command to directly invoke your function from the command line" |
| Another way is a function URL, which is a dedicated HTTP(S) endpoint | S3 | "Use function URLs to create a dedicated HTTP(S) endpoint that you can use to invoke your function" |
| Some services can invoke a function with each new event, and this is called a trigger | S3 | "Some services can invoke a Lambda Event Function with each new event. This is called a trigger" |
| For stream and queue-based services, Lambda invokes the function with batches of records, which is called an event source mapping | S3 | "For stream and queue-based services, Lambda invokes the function with batches of records. This is called an event source mapping" |
| With synchronous invocation, you wait for the function to process the event and return a response | S3 | "With synchronous invocation, you wait for the function to process the event and return a response" |
| With asynchronous invocation, Lambda queues the event for processing and returns a response immediately | S3 | "With asynchronous invocation, Lambda queues the event for processing and returns a response immediately" |
| The InvocationType parameter decides which one: RequestResponse means synchronous, and Event means asynchronous | S3 | "The InvocationType request parameter in the Invoke API determines how Lambda invokes your function" |
| The InvocationType parameter decides which one: RequestResponse means synchronous, and Event means asynchronous | S3 | "A value of RequestResponse indicates synchronous invocation, and a value of Event indicates asynchronous invocation" |
| For an error in a synchronous invocation, you view the error message in the response and retry the invocation manually | S3 | "for synchronous invocations, view the error message in the response and retry the invocation manually" |
| For asynchronous invocations, Lambda handles retries automatically and can send invocation records to a destination | S3 | "For asynchronous invocations, Lambda handles retries automatically and can send invocation records to a destination" |
| A function's execution role is an IAM role that grants the function permission to access AWS services and resources | S4 | "A Lambda Event Function's execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access AWS services and resources" |
| Lambda automatically assumes your execution role when you invoke your function | S4 | "Lambda automatically assumes your execution role when you invoke your function" |
| The trust policy of the role must specify the Lambda service principal, lambda.amazonaws.com, as a trusted service | S4 | "the role's trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service" |
| In the Lambda console, Lambda creates an execution role with minimal permissions by default | S4 | "By default, Lambda creates an execution role with minimal permissions when you create a function in the Lambda console" |
| This role includes the AWSLambdaBasicExecutionRole managed policy, which gives basic permissions to log events to Amazon CloudWatch Logs | S4 | "this execution role includes the AWSLambdaBasicExecutionRole managed policy, which gives your function basic permissions to log events to Amazon CloudWatch Logs" |
| Timeout is the maximum amount of time in seconds that a Lambda function can run | S5 | "Timeout is the maximum amount of time in seconds that a Lambda function can run" |
| The default is 3 seconds, and you can adjust it in increments of 1 second up to a maximum value of 1,800 seconds (30 minutes) | S5 | "The default value for this setting is 3 seconds, but you can adjust this in increments of 1 second up to a maximum value of 1,800 seconds (30 minutes)" |
| For functions using AWS Lambda Managed Instances, asynchronous invocations and event source mapping invocations (except Amazon MQ and Amazon DocumentDB) support a maximum allowed value of 5,400 seconds (90 minutes) | S5 | "For functions using AWS Lambda Managed Instances, asynchronous invocations and event source mapping invocations (except Amazon MQ and Amazon DocumentDB) support a maximum allowed value of 5,400 seconds (90 minutes)" |
| The update-function-configuration command sets the timeout, in seconds | S5 | "You can use the update-function-configuration command to configure the timeout value, in seconds" |
| Lambda invokes your function in an execution environment, which provides a secure and isolated runtime environment | S6 | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime environment" |
| In the Init phase, Lambda performs three tasks | S6 | "In the Init phase, Lambda performs three tasks" |
| It starts all extensions, bootstraps the runtime, and runs the static code of the function | S6 | "Start all extensions (Extension init)" |
| It starts all extensions, bootstraps the runtime, and runs the static code of the function | S6 | "Bootstrap the runtime (Runtime init)" |
| It starts all extensions, bootstraps the runtime, and runs the static code of the function | S6 | "Run the function's static code (Function init)" |
| The Init phase is limited to 10 seconds | S6 | "The Init phase is limited to 10 seconds" |
| The timeout setting of the function limits the duration of the entire Invoke phase | S6 | "The function's timeout setting limits the duration of the entire Invoke phase" |
| After an invocation, Lambda keeps the execution environment for some time, in anticipation of another invocation | S6 | "Lambda maintains the execution environment for some time in anticipation of another function invocation" |
| Objects declared outside of the handler remain initialized when the function is invoked again | S6 | "Objects declared outside of the function's handler method remain initialized, providing additional optimization when the function is invoked again" |
| The /tmp directory keeps its content while the environment is frozen | S6 | "The directory content remains when the execution environment is frozen, providing a transient cache that can be used for multiple invocations" |
| Background processes that did not complete when the function ended resume if Lambda reuses the environment | S6 | "Background processes or callbacks that were initiated by your Lambda function and did not complete when the function ended resume if Lambda reuses the execution environment" |
| Lambda terminates execution environments every few hours | S6 | "Lambda terminates execution environments every few hours to allow for runtime updates and maintenance" |
| So you should not assume that the environment persists indefinitely | S6 | "You should not assume that the execution environment will persist indefinitely" |
| If a function crashes or times out during the Invoke phase, Lambda resets the environment | S6 | "If the Lambda function crashes or times out during the Invoke phase, Lambda resets the execution environment" |
| When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start | S7 | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start" |
| A cold start adds latency to the invocation duration, and you are charged for this time | S6 | "You are charged for this time, and it adds latency to your overall invocation duration" |
| Cold starts typically occur in under 1% of invocations | S6 | "Cold starts typically occur in under 1% of invocations" |
| They are typically more common in development and test functions than in production workloads | S6 | "In general, cold starts are typically more common in development and test functions than production workloads" |
| The reason is that development and test functions are usually invoked less frequently | S6 | "This is because development and test functions are usually invoked less frequently" |
| Concurrency is the number of in-flight requests that a function is handling at the same time | S7 | "Concurrency is the number of in-flight requests that your AWS Lambda Event Function is handling at the same time" |
| For each concurrent request, Lambda provisions a separate instance of your execution environment | S7 | "For each concurrent request, Lambda provisions a separate instance of your execution environment" |
| By default, an account has a total limit of 1,000 concurrent executions across all Event Functions in a Region | S7 | "By default, Lambda provides your account with a total concurrency limit of 1,000 concurrent executions across all Event Functions in an AWS Region" |
| If a function runs out of available concurrency, it experiences throttling, which means that it starts to drop requests | S7 | "Your Event Functions experience throttling (that is, they start to drop requests) if you run out of available concurrency" |
| Reserved concurrency reserves a portion of the concurrency of your account for a function | S7 | "Use reserved concurrency to set both the maximum and minimum number of concurrent instances to reserve a portion of your account's concurrency for an Event Function" |
| There is no charge for configuring it | S7 | "There is no charge for configuring reserved concurrency for an Event Function" |
| Provisioned concurrency pre-initializes environment instances, which reduces cold start latencies | S7 | "Use provisioned concurrency to pre-initialize a number of environment instances for an Event Function. This is useful for reducing cold start latencies" |
| Using provisioned concurrency incurs additional charges | S7 | "Using provisioned concurrency incurs additional charges to your account" |
| When you create a table, in addition to the table name, you must specify its primary key | S10 | "When you create a table, in addition to the table name, you must specify the primary key of the table" |
| The primary key uniquely identifies each item in the table, so that no two items can have the same key | S10 | "The primary key uniquely identifies each item in the table, so that no two items can have the same key" |
| DynamoDB uses the value of the partition key as input to an internal hash function | S10 | "DynamoDB uses the partition key's value as input to an internal hash function" |
| The output of the hash function determines the partition in which the item is stored | S10 | "The output from the hash function determines the partition (physical storage internal to DynamoDB) in which the item will be stored" |
| In a table that has only a partition key, no two items can have the same partition key value | S10 | "In a table that has only a partition key, no two items can have the same partition key value" |
| With a partition key and a sort key, all items with the same partition key value are stored together, in sorted order by sort key value | S10 | "All items with the same partition key value are stored together, in sorted order by sort key value" |
| Multiple items can have the same partition key value, but they must have different sort key values | S10 | "In a table that has a partition key and a sort key, it's possible for multiple items to have the same partition key value. However, those items must have different sort key values" |
| In the Music example of AWS, if you provide only the value for Artist, DynamoDB retrieves all of the songs by that artist | S10 | "if you provide only the value for Artist, DynamoDB retrieves all of the songs by that artist" |
| In the Music example, each item must have both key attributes | S10 | "The primary key for Music consists of two attributes (Artist and SongTitle). Each item in the table must have these two attributes" |
| Other than the primary key, the Music table is schemaless | S10 | "Other than the primary key, the Music table is schemaless, which means that neither the attributes nor their data types need to be defined beforehand" |
| Each primary key attribute must be a scalar | S10 | "Each primary key attribute must be a scalar" |
| The only data types allowed for primary key attributes are string, number, or binary | S10 | "The only data types allowed for primary key attributes are string, number, or binary" |
| A secondary index lets you query the data in the table using an alternate key, in addition to queries against the primary key | S10 | "A secondary index lets you query the data in the table using an alternate key, in addition to queries against the primary key" |
| A global secondary index has a partition key and sort key that can be different from those of the table | S10 | "An index with a partition key and sort key that can be different from those on the table" |
| A local secondary index has the same partition key as the table, but a different sort key | S10 | "An index that has the same partition key as the table, but a different sort key" |
| Each table has a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes | S10 | "Each table in DynamoDB has a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes" |
| When your application writes to a table and receives an HTTP 200 response, the write completed successfully and has been durably persisted | S11 | "When your application writes data to a DynamoDB table and receives an HTTP 200 response (OK), that means the write completed successfully and has been durably persisted" |
| Tables and local secondary indexes offer two read consistency options: eventually consistent, which is the default, and strongly consistent reads | S11 | "Both tables and LSIs provide two read consistency options: eventually consistent (default) and strongly consistent reads" |
| All reads from global secondary indexes and streams are eventually consistent | S11 | "All reads from GSIs and streams are eventually consistent" |
| An eventually consistent read might not reflect the results of a recently completed write | S11 | "the responses might not reflect the results of a recently completed write operation" |
| If you set ConsistentRead to true, DynamoDB returns the most up-to-date data, reflecting the updates from all prior successful writes | S11 | "If you set ConsistentRead to true, DynamoDB returns a response with the most up-to-date data, reflecting the updates from all prior write operations that were successful" |
| Strongly consistent reads from a global secondary index or a stream are not supported | S11 | "Strongly consistent reads from a global secondary index or a DynamoDB stream are not supported" |
| Eventually consistent reads are half the cost of strongly consistent reads | S11 | "Eventually consistent reads are half the cost of strongly consistent reads" |
| On-demand mode is the default and recommended throughput option for most workloads | S12 | "On-demand mode is the default and recommended throughput option for most DynamoDB workloads" |
| In provisioned mode, you must specify the number of reads and writes per second that you require | S12 | "In provisioned mode, you must specify the number of reads and writes per second that you require for your application" |
| You are charged for the capacity that you provisioned, not for the capacity that you consumed | S12 | "You'll be charged based on the hourly read and write capacity you have provisioned, not how much of that provisioned capacity you actually consumed" |
| Time To Live (TTL) is a method for deleting items that are no longer relevant | S13 | "Time To Live (TTL) for DynamoDB is a cost-effective method for deleting items that are no longer relevant" |
| The expiration timestamp must be stored as a Number in Unix epoch time format at the seconds granularity | S13 | "The timestamp must be stored as a Number data type in Unix epoch time format at the seconds granularity" |
| The TTL process ignores items with a TTL attribute that is not a Number | S13 | "Items with a TTL attribute that is not a Number type are ignored by the TTL process" |
| The system might delete items with valid, expired TTL attributes at any time, typically within a few days after their expiration | S13 | "Items with valid, expired TTL attributes might be deleted by the system at any time, typically within a few days after their expiration" |
| You can use filter expressions to remove expired items from Scan and Query results | S13 | "Use filter expressions to remove expired items from Scan and Query results" |
| With the downloadable version of DynamoDB, you can develop and test applications without accessing the DynamoDB web service | S20 | "With the downloadable version of Amazon DynamoDB, you can develop and test applications without accessing the DynamoDB web service" |
| It is available as a download that requires a JRE, as an Apache Maven dependency, or as a Docker image | S20 | "DynamoDB local is available as a download (requires JRE), as an Apache Maven dependency, or as a Docker image" |
| When you are ready for production, you remove the local endpoint in the code, and it points to the DynamoDB web service | S20 | "When you're ready to deploy your application in production, you remove the local endpoint in the code, and then it points to the DynamoDB web service" |
| The AWS CLI cannot use it as a default endpoint, so you must specify --endpoint-url with each AWS CLI command | S22 | "The AWS CLI can't use the downloadable version of DynamoDB as a default endpoint. Therefore, you must specify --endpoint-url with each AWS CLI command" |
| DynamoDB local uses port 8000 by default | S21 | "DynamoDB uses port 8000 by default" |
| The AWS page says that it requires credentials to work, and it shows the made-up values fakeMyKeyId, fakeSecretAccessKey, and fakeRegion | S21 | "Downloadable DynamoDB requires any credentials to work" |
| The AWS page says that it requires credentials to work, and it shows the made-up values fakeMyKeyId, fakeSecretAccessKey, and fakeRegion | S21 | "fakeMyKeyId" |
| The AWS page says that it requires credentials to work, and it shows the made-up values fakeMyKeyId, fakeSecretAccessKey, and fakeRegion | S21 | "fakeSecretAccessKey" |
| The AWS page says that it requires credentials to work, and it shows the made-up values fakeMyKeyId, fakeSecretAccessKey, and fakeRegion | S21 | "fakeRegion" |
| The page names the Docker image amazon/dynamodb-local:latest | S21 | "amazon/dynamodb-local:latest" |
| With the -inMemory option, DynamoDB runs in memory, and none of the data is saved when you stop it | S22 | "DynamoDB runs in memory instead of using a database file. When you stop DynamoDB, none of the data is saved" |
| DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors | S23 | "DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors" |
| If telemetry remains on, it sends the data in the background | S23 | "If telemetry remains on, DynamoDB local sends telemetry data in the background without requiring any additional customer interaction" |
| With the -disableTelemetry option, DynamoDB local will not send any telemetry | S22 | "When specified, DynamoDB local will not send any telemetry" |
| The downloadable version is intended for development and testing purposes only | S22 | "The downloadable version of DynamoDB is intended for development and testing purposes only" |
| It differs from the web service in several ways | S22 | "The downloadable version of DynamoDB differs from the web service in the following ways" |
| Provisioned throughput settings are ignored, even though CreateTable requires them | S22 | "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them" |
| Scan operations are performed sequentially, and parallel scans are not supported | S22 | "Scan operations are performed sequentially. Parallel scans are not supported" |
| Table operations occur immediately, and table state is always ACTIVE | S22 | "CreateTable, UpdateTable, and DeleteTable operations occur immediately, and table state is always ACTIVE" |
| Read operations are eventually consistent, but most reads appear to be strongly consistent because of the speed of the local copy | S22 | "Read operations are eventually consistent. However, due to the speed of DynamoDB local running on your computer, most reads appear to be strongly consistent" |
| It doesn't support point-in-time recovery | S22 | "DynamoDB local doesn't support Point-in-time recovery (PITR)" |
| It always returns null for billingModeSummary | S22 | "DynamoDB local always returns null for billingModeSummary" |
| AWS Regions and distinct AWS accounts are not supported at the client level | S22 | "AWS Regions and distinct AWS accounts are not supported at the client level" |
| In Athena, catalogs, databases, and tables are containers for the metadata definitions that define a schema for underlying source data | S30 | "In Athena, catalogs, databases, and tables are containers for the metadata definitions that define a schema for underlying source data" |
| A database is a group of tables, and a table is data organized as a group of rows or columns | S30 | "Database – a group of tables" |
| A database is a group of tables, and a table is data organized as a group of rows or columns | S30 | "Table – data organized as a group of rows or columns" |
| The metadata in a table tells Athena where the data is located in Amazon S3, and specifies the structure of the data | S30 | "The metadata in the table tells Athena where the data is located in Amazon S3, and specifies the structure of the data" |
| Before querying data, a table must be registered in Athena | S30 | "before querying data, a table must be registered in Athena" |
| You can create a table automatically using an AWS Glue crawler | S30 | "You can create a table automatically using an AWS Glue crawler" |
| Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store | S25 | "Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store for your data in Amazon S3" |
| In the AWS tutorial, the sample log data is in tab-separated values (TSV) format | S28 | "The sample log data is in tab-separated values (TSV) format, which means that a tab character is used as a delimiter to separate the fields" |
| The LOCATION clause names an Amazon S3 folder, not a specific file, because Athena expects to scan all of the files in a folder | S28 | "Note that because Athena expects to scan all of the files in a folder, the LOCATION clause specifies an Amazon S3 folder location, not a specific file" |
| Athena keeps queries for 45 days | S29 | "Queries are retained for 45 days" |
| By partitioning your data, you can restrict the amount of data scanned by each query, thus improving performance and reducing cost | S31 | "By partitioning your data, you can restrict the amount of data scanned by each query, thus improving performance and reducing cost" |
| If you query a partitioned table and specify the partition in the WHERE clause, Athena scans the data only from that partition | S31 | "If you query a partitioned table and specify the partition in the WHERE clause, Athena scans the data only from that partition" |
| Athena can use Hive style partitions, whose data paths contain key value pairs connected by equal signs | S31 | "Athena can use Apache Hive style partitions, whose data paths contain key value pairs connected by equal signs" |
| The MSCK REPAIR TABLE command loads new Hive partitions, and it works only with Hive-style partitions | S31 | "To load new Hive partitions into a partitioned table, you can use the MSCK REPAIR TABLE command, which works only with Hive-style partitions" |
| For non-Hive style partitions, you use ALTER TABLE ADD PARTITION to add the partitions manually | S31 | "For such non-Hive style partitions, you use ALTER TABLE ADD PARTITION to add the partitions manually" |
| State machines are defined using JSON text | S34 | "State machines are defined using JSON text that represents a structure containing the following fields" |
| StartAt and States are required | S34 | "StartAt (Required)" |
| StartAt and States are required | S34 | "States (Required)" |
| The value of StartAt must exactly match, and is case sensitive, the name of one of the state objects | S34 | "A string that must exactly match (is case sensitive) the name of one of the state objects" |
| States is an object containing a comma-delimited set of states | S34 | "An object containing a comma-delimited set of states" |
| TimeoutSeconds is optional, and it sets the maximum number of seconds an execution can run | S34 | "The maximum number of seconds an execution of the state machine can run" |
| If an execution runs longer, it fails with the error name States.Timeout | S34 | "If it runs longer than the specified time, the execution fails with a States.Timeout Error Name" |
| A Choice state adds conditional logic to a state machine | S35 | "adds conditional logic to a state machine" |
| When it runs, Step Functions evaluates each Choice Rule to true or false | S35 | "When a Choice state is run, Step Functions evaluates each Choice Rule to true or false" |
| Default is the name of the state to transition to if no Choice Rule evaluates to true | S35 | "The name of the state to transition to if no Choice Rule evaluates to true" |
| If no rule is true and there is no Default, the state machine throws an error | S35 | "If no Choices evaluate to true when the workflow runs, and no Default is provided, the state machine will throw an error due to a failure to transition out of the state" |
| Standard workflows are ideal for long-running, auditable workflows | S32 | "Standard workflows are ideal for long-running, auditable workflows, as they show execution history and visual debugging" |
| They have exactly-once workflow execution, and they can run for up to one year | S32 | "Standard workflows have exactly-once workflow execution and can run for up to one year" |
| Express workflows are ideal for high-event-rate workloads | S32 | "Express workflows are ideal for high-event-rate workloads, such as streaming data processing and IoT data ingestion" |
| They have at-least-once workflow execution, and they can run for up to five minutes | S32 | "Express workflows have at-least-once workflow execution and can run for up to five minutes" |
| So one or more steps in an Express workflow can potentially run more than once | S32 | "one or more steps in an Express Workflow can potentially run more than once, while each step in the workflow executes at least once" |
| AWS SDK integrations call any AWS service directly from your state machine | S32 | "AWS SDK integrations provide a way to call any AWS service directly from your state machine, giving you access to thousands of API actions" |
| All states except Pass and Wait states can encounter runtime errors | S36 | "All states, except Pass and Wait states, can encounter runtime errors" |
| The causes include a Choice state without a matching rule, and a task failure such as an exception in a Lambda function | S36 | "State machine definition issues - such as a Choice state without a matching rule" |
| The causes include a Choice state without a matching rule, and a task failure such as an exception in a Lambda function | S36 | "Task failures - such as an exception in a AWS Lambda function" |
| When a state reports an error, Step Functions defaults to failing the entire state machine execution | S36 | "When a state reports an error, Step Functions defaults to failing the entire state machine execution" |
| Task, Parallel, and Map states can have a field named Retry | S36 | "Task, Parallel, and Map states can have a field named Retry" |
| Catchers are available for Task, Parallel and Map states, but not for top-level state machine execution failures | S36 | "Step Functions catchers are available for Task, Parallel and Map states, but not for top-level state machine execution failures" |
| Step Functions identifies errors using case-sensitive strings, known as error names | S36 | "Step Functions identifies errors using case-sensitive strings, known as error names" |
| The TestState API accepts the definition of a state and executes it | S37 | "The TestState API accepts the definition of a state and executes it" |
| It allows you to test a state without creating a state machine or updating an existing one | S37 | "It allows you to test a state without creating a state machine or updating an existing state machine" |
| It has three inspection levels, INFO, DEBUG, and TRACE | S37 | "Step Functions provides the following inspection levels" |
| It has three inspection levels, INFO, DEBUG, and TRACE | S37 | "INFO" |
| It has three inspection levels, INFO, DEBUG, and TRACE | S37 | "DEBUG" |
| It has three inspection levels, INFO, DEBUG, and TRACE | S37 | "TRACE" |
| INFO is the default | S37 | "By default, Step Functions sets Inspection level to INFO if you don't specify a level" |
| At the DEBUG level, a successful test shows the state output and the result of input and output data processing | S37 | "If the test succeeds, this level shows the state output and the result of input and output data processing" |
| A mock lets you test state logic without calling the actual service | S37 | "Mock AWS service integrations or services invoked through HTTP Task state to test state logic without calling the actual service" |
| When you specify a mock, the role becomes optional | S37 | "When you specify a mock, specifying the role becomes optional, allowing you to test state machine logic without configuring IAM permissions" |
| The TestState API enables you to write unit tests for your state machines | S37 | "The TestState API enables you to write comprehensive unit tests for your state machines" |
| The function of this step is the Python function of the AWS tutorial "Create your first Lambda function" | S2 | "Create your first Lambda function" |
| It takes a JSON object with two values, length and width, multiplies them, and returns the area as a JSON string | S2 | "The function multiplies these values to calculate an area and returns this as a JSON string" |
| A test case is the individual unit of testing, and it checks for a specific response to a particular set of inputs | S41 | "A test case is the individual unit of testing. It checks for a specific response to a particular set of inputs" |
| TestCase is the base class for new test cases | S41 | "unittest provides a base class, TestCase, which may be used to create new test cases" |
| assertEqual fails the test if the two values are not equal | S41 | "Test that first and second are equal. If the values do not compare equal, the test will fail" |
| assertRaises passes the test if the exception is raised | S41 | "The test passes if exception is raised, is an error if another exception is raised, or fails if no exception is raised" |
| assertLogs tests that at least one message is logged | S41 | "A context manager to test that at least one message is logged on the logger or one of its children, with at least the given level" |
| subTest runs the enclosed code block as a subtest | S41 | "Return a context manager which executes the enclosed code block as a subtest" |
| The class Context is a fake that stands in for the context object, and a fake is a mock that takes shortcuts to simplify or speed up testing | S8 | "A fake is a mock that takes shortcuts to simplify or speed up testing" |
| The first test uses the event of the AWS tutorial, which has the keys length and width | S2 | "containing two key-value pairs with the keys "length" and "width"" |
| The page shows the log line The area is 42 for it | S2 | "The area is 42" |
| The function uses the log_group_name of the context to output the name of its CloudWatch log group | S2 | "your function uses the log_group_name parameter to output the name of its CloudWatch log group" |
| The fake context holds the log group name that the page shows in its sample output | S2 | "CloudWatch logs group: /aws/lambda/myLambdaFunction" |
| AWS says that a handler should extract and validate data from the incoming event and context objects, and then pass the input to the methods that hold the business logic | S8 | "Generally speaking, you should write a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic" |
| AWS says that all Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly | S8 | "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly" |
| DynamoDB local is available as a Docker image | S21 | "The downloadable version of Amazon DynamoDB is available as a Docker image" |
| DynamoDB local is available as a Docker image , and the AWS page names the image amazon/dynamodb-local:latest | S21 | "amazon/dynamodb-local:latest" |
| The --publish or -p flag makes a port available outside the host | S42 | "Use the --publish or -p flag to make a port available outside the host" |
| The page of Docker shows the form -p 192.168.1.100:8080:80, which maps port 8080 on the Docker host IP 192.168.1.100 to TCP port 80 in the container | S42 | "Map port 8080 on the Docker host IP 192.168.1.100 to TCP port 80 in the container" |
| If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port | S42 | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port" |
| The option --rm automatically removes the container and its associated anonymous volumes when it exits | S43 | "Automatically remove the container and its associated anonymous volumes when it exits" |
| With -inMemory, DynamoDB keeps no data after it stops | S22 | "DynamoDB runs in memory instead of using a database file. When you stop DynamoDB, none of the data is saved" |
| With -disableTelemetry, DynamoDB local sends no telemetry | S22 | "When specified, DynamoDB local will not send any telemetry" |
| The credentials are the made-up values that the AWS page shows | S21 | "Downloadable DynamoDB requires any credentials to work" |
| The credentials are the made-up values that the AWS page shows | S21 | "fakeMyKeyId" |
| The credentials are the made-up values that the AWS page shows | S21 | "fakeSecretAccessKey" |
| The credentials are the made-up values that the AWS page shows | S21 | "fakeRegion" |
| AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the files for configuration profiles and access keys, and AWS_EC2_METADATA_DISABLED disables the use of the EC2 instance metadata service | S40 | "AWS_CONFIG_FILE Specifies the location of the file that the AWS CLI uses to store configuration profiles" |
| AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the files for configuration profiles and access keys, and AWS_EC2_METADATA_DISABLED disables the use of the EC2 instance metadata service | S40 | "AWS_SHARED_CREDENTIALS_FILE Specifies the location of the file that the AWS CLI uses to store access keys" |
| AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE name the files for configuration profiles and access keys, and AWS_EC2_METADATA_DISABLED disables the use of the EC2 instance metadata service | S40 | "AWS_EC2_METADATA_DISABLED Disables the use of the Amazon EC2 instance metadata service (IMDS)" |
| The function ddb adds --endpoint-url to each command, because the AWS CLI needs it with each command | S22 | "The AWS CLI can't use the downloadable version of DynamoDB as a default endpoint. Therefore, you must specify --endpoint-url with each AWS CLI command" |
| The AWS pages say: create-table creates the Music table | S14 | "The following AWS CLI example creates a new Music table using create-table" |
| The AWS pages say: create-table creates the Music table ; put-item creates several new items | S15 | "The following AWS CLI example creates several new items in the Music table" |
| The AWS pages say: create-table creates the Music table ; put-item creates several new items ; get-item uses --consistent-read to demonstrate strongly consistent reads | S16 | "The consistent-read parameter is used below to demonstrate strongly consistent reads" |
| The AWS pages say: create-table creates the Music table ; put-item creates several new items ; get-item uses --consistent-read to demonstrate strongly consistent reads ; update-item updates an item | S17 | "The following AWS CLI example updates an item in the Music table" |
| The AWS pages say: create-table creates the Music table ; put-item creates several new items ; get-item uses --consistent-read to demonstrate strongly consistent reads ; update-item updates an item ; query queries the table by the | S18 | "You query an item through the DynamoDB API by using query and providing the partition key" |
| The AWS pages say: create-table creates the Music table ; put-item creates several new items ; get-item uses --consistent-read to demonstrate strongly consistent reads ; update-item updates an item ; query queries the table by the | S19 | "The following AWS CLI example deletes the Music table using delete-table" |
| It follows from the rule that each item in the Music table must have both key attributes | S10 | "The primary key for Music consists of two attributes (Artist and SongTitle). Each item in the table must have these two attributes" |
| The third block stops the container with docker stop, which stops one or more running containers | S44 | "Stop one or more running containers" |
| The sample result of create-table on the AWS page shows CREATING | S14 | ""TableStatus": "CREATING"" |
| When DynamoDB finishes creating the table, the value of the TableStatus field is set to ACTIVE | S14 | "When DynamoDB finishes creating the table, the value of the TableStatus field is set to ACTIVE" |
| The sample result of delete-table on the AWS page shows DELETING | S19 | ""TableStatus": "DELETING"" |
| DynamoDB local says that table operations occur immediately, and the table state is always ACTIVE | S22 | "CreateTable, UpdateTable, and DeleteTable operations occur immediately, and table state is always ACTIVE" |
| The sample result of step 3 on the AWS page shows Awards with the type S | S16 | ""Awards": { "S": "10" }" |
| The sample result of step 3 on the AWS page shows Awards with the type S , and the sample result of step 5 shows N | S18 | ""Awards": { "N": "10" }" |
| All items with the same partition key value are stored together, in sorted order by sort key value | S10 | "All items with the same partition key value are stored together, in sorted order by sort key value" |
| DynamoDB local says that most reads appear to be strongly consistent | S22 | "Read operations are eventually consistent. However, due to the speed of DynamoDB local running on your computer, most reads appear to be strongly consistent" |
| DynamoDB local ignores provisioned throughput settings | S22 | "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them" |
| This step models one rule of the AWS page: if you query a partitioned table and specify the partition in the WHERE clause, Athena scans the data only from that partition | S31 | "If you query a partitioned table and specify the partition in the WHERE clause, Athena scans the data only from that partition" |
| The lines have tab-separated fields, like the sample log data of the AWS tutorial | S28 | "The sample log data is in tab-separated values (TSV) format, which means that a tab character is used as a delimiter to separate the fields" |
| StartAt and States are required | S34 | "StartAt (Required)" |
| StartAt and States are required | S34 | "States (Required)" |
| The value of StartAt must exactly match the name of one of the state objects | S34 | "A string that must exactly match (is case sensitive) the name of one of the state objects" |
| A Choice state goes to its Default if no rule is true, and the state machine throws an error if there is no Default | S35 | "If no Choices evaluate to true when the workflow runs, and no Default is provided, the state machine will throw an error due to a failure to transition out of the state" |
| The Hello World definition is the example of the state machine structure page | S34 | "A Hello World example of the Amazon States Language using a Pass state" |
| The Choice state is the example of the TestState page, which sends the input {"number": 2} to the state Equals 2 | S37 | "Example 1: Using INFO inspectionLevel to test a Choice state" |
| The --generate-cli-skeleton option generates and displays a parameter template that you can customize and use as input on a command | S39 | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command" |
| FunctionName and Timeout match --function-name and --timeout in the example of the timeout page | S5 | "update-function-configuration" |
| FunctionName and Timeout match --function-name and --timeout in the example of the timeout page | S5 | "--function-name my-function" |
| FunctionName and Timeout match --function-name and --timeout in the example of the timeout page | S5 | "--timeout 120" |
| definition, roleArn, input, and inspectionLevel match --definition, --role-arn, --input, and --inspection-level in the examples of the TestState page | S37 | "--definition" |
| definition, roleArn, input, and inspectionLevel match --definition, --role-arn, --input, and --inspection-level in the examples of the TestState page | S37 | "--role-arn" |
| definition, roleArn, input, and inspectionLevel match --definition, --role-arn, --input, and --inspection-level in the examples of the TestState page | S37 | "--input" |
| definition, roleArn, input, and inspectionLevel match --definition, --role-arn, --input, and --inspection-level in the examples of the TestState page | S37 | "--inspection-level" |
| stateName matches the stateName parameter of the page | S37 | "A complete state machine definition with stateName parameter" |
| revealSecrets matches the revealSecrets parameter | S37 | "you must set the revealSecrets parameter to true in the TestState API" |
| mock matches the --mock option in the examples of the page | S37 | "--mock" |
| context matches the context parameter of the page | S37 | "The context parameter allows you to provide values for the Context object" |
| The template shows INFO for inspectionLevel, and INFO is also the level that Step Functions uses if you do not specify one | S37 | "By default, Step Functions sets Inspection level to INFO if you don't specify a level" |
| The Lambda tutorial says that to get started with AWS, you need an AWS account | S2 | "To get started with AWS, you need an AWS account" |
| The Athena tutorial says to sign up for an AWS account if you have not already done so | S26 | "If you have not already done so, sign up for an AWS account" |
| Lambda has pay-per-use billing | S1 | "Pay-per-use billing" |
| Lambda has pay-per-use billing | S1 | "No upfront commitments. You pay only for the resources used" |
| Lambda has pay-per-use billing , and AWS points to its pricing page for the prices | S1 | "For pricing information, see AWS Lambda Pricing" |
| The Athena tutorial uses live resources, so you are charged for the queries that you run | S26 | "The tutorial uses live resources, so you are charged for the queries that you run" |
| You are not charged for the sample data that it uses, but if you upload your own data files to Amazon S3, charges do apply | S26 | "You aren't charged for the sample data in the location that this tutorial uses, but if you upload your own data files to Amazon S3, charges do apply" |
| Standard workflows of Step Functions are priced by state transition | S32 | "Priced by state transition" |
| Open the Event Functions page of the Lambda console, choose Create Event Function, and select Author from scratch | S2 | "Open the Event Functions page of the Lambda console" |
| Open the Event Functions page of the Lambda console, choose Create Event Function, and select Author from scratch | S2 | "Choose Create Event Function" |
| Open the Event Functions page of the Lambda console, choose Create Event Function, and select Author from scratch | S2 | "Select Author from scratch" |
| For Runtime, choose either Node.js 24 or Python 3.14 | S2 | "For Runtime, choose either Node.js 24 or Python 3.14" |
| Lambda also creates an execution role that grants basic permissions to write to CloudWatch Logs | S2 | "For your function, the role that Lambda creates grants basic permissions to write to CloudWatch Logs" |
| Paste the function of step 1 into the code editor, replacing the code that Lambda created, and choose Deploy | S2 | "Paste the following code into the lambda_function.py tab, replacing the code that Lambda created" |
| Paste the function of step 1 into the code editor, replacing the code that Lambda created, and choose Deploy | S2 | "In the DEPLOY section, choose Deploy to update your function's code" |
| If you do, Lambda won't be able to run your code | S2 | "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code when you invoke your function" |
| Create a test event named myTestEvent with the JSON document that has length and width, and choose the run icon next to it | S2 | "For Event Name, enter myTestEvent" |
| Create a test event named myTestEvent with the JSON document that has length and width, and choose the run icon next to it | S2 | "In the TEST EVENTS section of the console code editor, choose the run icon next to your test event" |
| Delete the function, then the log group that stores its logs, then the execution role | S2 | "When you're finished working with the example function, delete it. You can also delete the log group that stores" |
| Delete the function, then the log group that stores its logs, then the execution role | S2 | "To delete the execution role" |
| You configure this bucket as your query output location | S26 | "follow the steps to create a bucket in Amazon S3 to hold your Athena query results. You will configure this bucket to be your query output location" |
| In the Athena console, enter the path to the bucket in the Location of query result box, with the prefix s3:// | S27 | "In the Location of query result box, enter the path to the bucket that you created in Amazon S3 for your query results. Prefix the path with s3://" |
| Create a database named mydatabase with the CREATE DATABASE statement | S27 | "To create a database named mydatabase, enter the following CREATE DATABASE statement" |
| Create the table from the sample CloudFront log data of AWS | S28 | "The table that you create will be based on sample Amazon CloudFront log data in the location" |
| The page warns that its first CREATE TABLE statement has an important limitation, so read on before you run it | S28 | "Do not use this example just yet as it has an important limitation that will be explained shortly" |
| Run a SQL query on the table and see the results in Athena | S29 | "you can run SQL queries on the table and see the results in Athena" |
| Estimated duration is 20-30 minutes | S38 | "Estimated duration: 20-30 minutes" |
| In the console, choose Run Hello World | S38 | "From the options, choose Run Hello World" |
| Choose the Code button to see the ASL code | S38 | "Choose the { } Code button to view the ASL code" |
| Name the state machine before you create it, because you cannot rename it afterwards | S38 | "You cannot rename a state machine after you create it" |
| Until then you have worked on a draft, and no resources have been created | S38 | "Until now, you've been working on a draft of your state machine. No resources have been created yet" |
| Create the state machine, with a new role for permissions | S38 | "For permissions, accept the default to Create a new role" |
| Start an execution named hello001 with the input field empty | S38 | "Enter hello001 for the name of the execution" |
| Start an execution named hello001 with the input field empty | S38 | "Leave the input field empty" |
| Delete the IAM roles, and then delete the state machine with Actions and Delete | S38 | "Take the following steps to clean up the resources you created" |
| Delete the IAM roles, and then delete the state machine with Actions and Delete | S38 | "Return to your Step Functions console tab and select the Actions drop down, then select Delete to delete the state machine" |
| For serverless testing, you still write unit, integration and end-to-end tests | S8 | "For serverless testing, you still write unit, integration and end-to-end tests" |
| Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications | S8 | "Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications" |
| You cannot fully replicate a cloud environment locally | S8 | "You cannot fully replicate a cloud environment locally" |
| The handler should be a slim adapter that takes in event data and passes only the details that matter to your business logic | S8 | "Your Lambda function handler should be a slim adapter that takes in event data and passes only the details that matter to your business logic method(s)" |
| It should extract and validate data from the incoming event and context objects | S8 | "Generally speaking, you should write a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic" |
| Tests that rely on emulators might pass locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas | S8 | "Tests that rely on emulators might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas" |
| Mock frameworks are limited in testing or detecting IAM policy or quota limitations | S8 | "Mock frameworks are limited in testing or detecting AWS Identity and Access Management (IAM) policy or quota limitations" |
| Even a function that calls no other service depends on its timeout and memory settings | S8 | "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly" |
| The permission for logs cannot be accurately mocked or emulated | S8 | "This required permission cannot be accurately mocked or emulated" |
| Automated test processes should create uniquely named resources for each stack | S8 | "Automated test processes should create uniquely named resources for each stack" |
| Load testing is an activity that you should isolate from your production stack | S8 | "Load testing is another activity you should isolate from your production stack" |
| Environments should have alerts and controls to avoid unnecessary spending | S8 | "In all cases, environments should be configured with alerts and controls to avoid unnecessary spending" |
| If the timeout value is close to the average duration of a function, there is a higher risk that the function times out unexpectedly | S5 | "If the timeout value is close to the average duration of a function, there is a higher risk that the function times out unexpectedly" |
| Tests often use small samples, but you should use datasets at the upper bounds of what is reasonably expected | S5 | "Tests often use small samples for convenience, but you should use datasets at the upper bounds of what is reasonably expected for your workload" |
| A synchronous invocation returns the error message in the response, and an asynchronous invocation is retried by Lambda automatically | S3 | "for synchronous invocations, view the error message in the response and retry the invocation manually. For asynchronous invocations, Lambda handles retries automatically and can send invocation records to a destination" |
| You should not assume that the execution environment will persist indefinitely | S6 | "You should not assume that the execution environment will persist indefinitely" |
| The /tmp directory keeps its content while the environment is frozen | S6 | "The directory content remains when the execution environment is frozen, providing a transient cache that can be used for multiple invocations" |
| Cold starts are typically more common in development and test functions than in production workloads | S6 | "In general, cold starts are typically more common in development and test functions than production workloads" |
| A function that runs out of available concurrency experiences throttling | S7 | "Your Event Functions experience throttling (that is, they start to drop requests) if you run out of available concurrency" |
| Eventually consistent is the default read model, and a read might not reflect a recently completed write | S11 | "Eventually consistent is the default read consistent model for all read operations" |
| Set ConsistentRead to true to get the most up-to-date data | S11 | "If you set ConsistentRead to true, DynamoDB returns a response with the most up-to-date data, reflecting the updates from all prior write operations that were successful" |
| Reads from a global secondary index are always eventually consistent | S11 | "All reads from GSIs and streams are eventually consistent" |
| DynamoDB local says that most reads appear to be strongly consistent | S22 | "Read operations are eventually consistent. However, due to the speed of DynamoDB local running on your computer, most reads appear to be strongly consistent" |
| It also ignores provisioned throughput settings | S22 | "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them" |
| The system might delete expired items at any time, typically within a few days after their expiration | S13 | "Items with valid, expired TTL attributes might be deleted by the system at any time, typically within a few days after their expiration" |
| Check that the TTL attribute is a Number in Unix epoch time at the seconds granularity | S13 | "The timestamp must be stored as a Number data type in Unix epoch time format at the seconds granularity" |
| Use filter expressions to remove expired items from Scan and Query results | S13 | "Use filter expressions to remove expired items from Scan and Query results" |
| Each item in the Music table must have both key attributes | S10 | "The primary key for Music consists of two attributes (Artist and SongTitle). Each item in the table must have these two attributes" |
| Each primary key attribute must be a scalar of the type string, number, or binary | S10 | "The only data types allowed for primary key attributes are string, number, or binary" |
| If the WHERE clause names the partition, Athena scans the data only from that partition | S31 | "If you query a partitioned table and specify the partition in the WHERE clause, Athena scans the data only from that partition" |
| The MSCK REPAIR TABLE command works only with Hive-style partitions | S31 | "To load new Hive partitions into a partitioned table, you can use the MSCK REPAIR TABLE command, which works only with Hive-style partitions" |
| If the S3 path is in camel case, it does not add the partitions to the AWS Glue Data Catalog | S31 | "If the S3 path is in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog" |
| Before querying data, a table must be registered in Athena | S30 | "before querying data, a table must be registered in Athena" |
| The API enables you to write unit tests for your state machines | S37 | "The TestState API enables you to write comprehensive unit tests for your state machines" |
| You can assert which Catch or Retry applies | S37 | "Error handling: Which Catch or Retry applies" |
| You can assert the input after the InputPath filter, in afterInputPath | S37 | "Input after InputPath filter (afterInputPath)" |
| Mocking is necessary to test Map, Parallel, Activity, .sync, and waitForTaskToken patterns | S37 | "Mocking is necessary if you need to test the following state types or service integration patterns - Map, Parallel, Activity, .sync service integrations and waitForTaskToken service integrations" |
| The console TestState feature does not yet support some of the enhancements | S37 | "The console TestState feature does not yet support some of the enhancements described in this document" |
| If no Choices evaluate to true and no Default is provided, the state machine throws an error | S35 | "If no Choices evaluate to true when the workflow runs, and no Default is provided, the state machine will throw an error due to a failure to transition out of the state" |
| One or more steps in an Express workflow can potentially run more than once, while each step executes at least once | S32 | "one or more steps in an Express Workflow can potentially run more than once, while each step in the workflow executes at least once" |
| Be sure not to edit the name of the handler function, because Lambda won't be able to run your code if you do | S2 | "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code when you invoke your function" |
| Lambda automatically assumes your execution role | S4 | "Lambda automatically assumes your execution role when you invoke your function" |
| You should avoid manually calling sts:AssumeRole to assume the execution role in your function code | S4 | "You should avoid manually calling sts:AssumeRole to assume the execution role in your function code" |
| For Lambda to properly assume the execution role, the trust policy must specify the Lambda service principal as a trusted service | S4 | "In order for Lambda to properly assume your execution role, the role's trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service" |
| You cannot fully replicate a cloud environment locally | S8 | "You cannot fully replicate a cloud environment locally" |
| Tests that rely on emulators might provide successful results locally, but fail in the cloud | S8 | "Tests that rely on emulators might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas" |
| The handler should be a slim adapter that passes only the details that matter to your business logic | S8 | "Your Lambda function handler should be a slim adapter that takes in event data and passes only the details that matter to your business logic method(s)" |
| If the timeout value is close to the average duration of a function, there is a higher risk that the function times out unexpectedly | S5 | "If the timeout value is close to the average duration of a function, there is a higher risk that the function times out unexpectedly" |
| You should not assume that the execution environment will persist indefinitely | S6 | "You should not assume that the execution environment will persist indefinitely" |
| Background processes that did not complete when the function ended resume if Lambda reuses the execution environment | S6 | "Background processes or callbacks that were initiated by your Lambda function and did not complete when the function ended resume if Lambda reuses the execution environment" |
| By default, the AWS SDKs and tools use endpoints for the DynamoDB web service | S22 | "By default, the AWS SDKs and tools use endpoints for the Amazon DynamoDB web service" |
| To use them with DynamoDB local, you must specify the local endpoint | S22 | "To use the SDKs and tools with the downloadable version of DynamoDB, you must specify the local endpoint" |
| The downloadable version is intended for development and testing purposes only | S22 | "The downloadable version of DynamoDB is intended for development and testing purposes only" |
| With -inMemory, none of the data is saved when you stop DynamoDB | S22 | "DynamoDB runs in memory instead of using a database file. When you stop DynamoDB, none of the data is saved" |
| If telemetry remains on, DynamoDB local sends telemetry data in the background | S23 | "If telemetry remains on, DynamoDB local sends telemetry data in the background without requiring any additional customer interaction" |
| DynamoDB doesn't support a JOIN operator | S9 | "Unlike relational databases, DynamoDB doesn't support a JOIN operator" |
| Eventually consistent is the default read consistent model | S11 | "Eventually consistent is the default read consistent model for all read operations" |
| Strongly consistent reads from a global secondary index or a stream are not supported | S11 | "Strongly consistent reads from a global secondary index or a DynamoDB stream are not supported" |
| The system might delete expired items at any time, typically within a few days after their expiration | S13 | "Items with valid, expired TTL attributes might be deleted by the system at any time, typically within a few days after their expiration" |
| Items with a TTL attribute that is not a Number are ignored by the TTL process | S13 | "Items with a TTL attribute that is not a Number type are ignored by the TTL process" |
| The LOCATION clause specifies an Amazon S3 folder, not a specific file, because Athena expects to scan all of the files in a folder | S28 | "Note that because Athena expects to scan all of the files in a folder, the LOCATION clause specifies an Amazon S3 folder location, not a specific file" |
| If the S3 path is in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog | S31 | "If the S3 path is in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog" |
| The command works only with Hive-style partitions | S31 | "To load new Hive partitions into a partitioned table, you can use the MSCK REPAIR TABLE command, which works only with Hive-style partitions" |
| If you issue queries against Amazon S3 buckets with a large number of objects and the data is not partitioned, such queries may affect the GET request rate limits in Amazon S3 and lead to Amazon S3 exceptions | S31 | "If you issue queries against Amazon S3 buckets with a large number of objects and the data is not partitioned, such queries may affect the GET request rate limits in Amazon S3 and lead to Amazon S3 exceptions" |
| The value must exactly match, and is case sensitive, the name of one of the state objects | S34 | "A string that must exactly match (is case sensitive) the name of one of the state objects" |
| If no Choices evaluate to true and no Default is provided, the state machine throws an error | S35 | "If no Choices evaluate to true when the workflow runs, and no Default is provided, the state machine will throw an error due to a failure to transition out of the state" |
| Choice states do not support the End field | S35 | "Choice states do not support the End field" |
| Catchers are not available for top-level state machine execution failures | S36 | "Step Functions catchers are available for Task, Parallel and Map states, but not for top-level state machine execution failures" |
| By default, Step Functions fails the entire state machine execution | S36 | "When a state reports an error, Step Functions defaults to failing the entire state machine execution" |
| One or more steps in an Express workflow can potentially run more than once | S32 | "one or more steps in an Express Workflow can potentially run more than once, while each step in the workflow executes at least once" |
| The console TestState feature does not yet support mocking service integrations or testing Map and Parallel states | S37 | "The console TestState feature does not yet support some of the enhancements described in this document, such as mocking service integrations, testing Map and Parallel states, or Activity, .sync and .waitForTaskToken patterns" |
| You cannot rename a state machine after you create it | S38 | "You cannot rename a state machine after you create it" |
| Using provisioned concurrency incurs additional charges to your account | S7 | "Using provisioned concurrency incurs additional charges to your account" |
| In provisioned mode, you are charged for the capacity that you provisioned, not for the capacity that you consumed | S12 | "You'll be charged based on the hourly read and write capacity you have provisioned, not how much of that provisioned capacity you actually consumed" |
| In the Athena tutorial, you are charged for the queries that you run, and if you upload your own data files to Amazon S3, charges do apply | S26 | "The tutorial uses live resources, so you are charged for the queries that you run" |
