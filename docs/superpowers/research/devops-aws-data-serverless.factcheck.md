# Fact check: devops / aws-data-serverless

Checked by an independent agent. Each round was a fresh `claude -p` session (claude-sonnet-5-5; tools Read, Grep and Glob only; no web access) that did not write the page. It was given only the page and the visible text of the sources that the page cites, fetched on 2026-11-05 with a plain GET: S1 https://docs.aws.amazon.com/lambda/latest/dg/welcome.html; S2 https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html; S3 https://docs.aws.amazon.com/athena/latest/ug/what-is.html; S4 https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html. It had to quote a source file for every PASS, and a script then looked each quoted phrase up in the source text (a PASS whose quote is not in the sources does not count). The facts of the Technical panel were checked again in every round; the Layman and Bangla panels were rewritten after round 3 (see the voices report). The author's own script check is `python3 scripts/devops_claimcheck.py`. No person has read this page: the English and the Bangla were judged by an agent only. The brief is in `docs/superpowers/research/devops-factcheck-brief.md`.

## Round 1 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 1)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "RDS, DynamoDB, Neptune, Athena, Lambda, Step Functions, and Fargate. A short explanation with its sources comes first." | none | FAIL | The lede names seven services but cites nothing. The four sources cover only Lambda, DynamoDB, Athena and Step Functions. A grep of `pages/*.txt` finds no "RDS" and no "Neptune". "Fargate" appears once, in S4, only as a list entry: "Amazon ECS/Fargate". No source describes it. Fix: name only the four covered services, or add sources for RDS, Neptune and Fargate. The second sentence describes the page itself (N/A). |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | 1 | PASS | S1: "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." The words are split across lines 3-4 of the file. |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | 2 | PASS | S2: "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | 3 | PASS | S3: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | 4 | PASS | S4: "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |

Open FAILs after round 1: 1

Changed after this round: The Layman and Bangla panels were rewritten sentence by sentence from the Technical panel, so that each keeps every fact and qualifier of its sentence and adds none. The description of the page (the lede) was cut to what the page explains.

## Round 2 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 2)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "AWS Lambda, DynamoDB, Athena, and Step Functions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It lists the topic names and describes the page itself. It states no fact about a tool. |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | S1 | PASS | "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." The words are split across lines 3-4 of S1.txt. |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | S2 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | S3 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." The words are split across lines 3-4 of S3.txt. |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | S4 | PASS | "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." The words are split across lines 3-4 of S4.txt. |

Open FAILs after round 2: 0

Changed after this round: The standard of the voices check was changed after this round: from the strict standard (brief v1, nothing dropped) to the rule of CLAUDE.md (brief v2, the panel gives no fact that the Technical panel does not give). Reason: the strict standard left the Layman panel almost the same as the Technical text (17.6 words per sentence, 93% of the distinct words shared with the Technical panel, and the same text on 8 of the 24 pages; the other modules that have an English Layman panel have 10 to 12 words per sentence and 47% to 95% shared, and the Course module 95%). The Layman and Bangla panels were rewritten in short sentences and plain words (10.3 words per sentence, 69% shared). The figures are means over the pages, and "shared" is the number of distinct words that are in both the Layman and the Technical panel, divided by the number of distinct words in either. The Technical panel and the description of the page were not changed. Round 4 and later use brief v2. The earlier rounds stay here as they were.

## Round 4 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 4)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "AWS Lambda, DynamoDB, Athena, and Step Functions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | It describes the page itself. It is not a fact about a tool, product, command, or number. |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | S1 | PASS | "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | S2 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | S3 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | S4 | PASS | "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |

Open FAILs after round 4: 0

Changed after this round: Layman and Bangla: "you create workflows" went back to "you can create workflows" (the limit "can" of the Technical sentence).

## Round 5 (2026-11-05)

## Fact check: devops / aws-data-serverless (round 5)

| # | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 0 | Lede: "AWS Lambda, DynamoDB, Athena, and Step Functions. A short explanation with its sources comes first. The reels after it show the topic at work." | none | N/A | The line names the topics and describes the page itself. It states no fact about a tool. |
| 1 | AWS Lambda is a serverless compute service: you can run code without provisioning or managing servers | S1 | PASS | S1: "AWS Lambda is a serverless compute service. With Lambda, you can run code without provisioning or managing servers." |
| 2 | Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database | S2 | PASS | S2: "DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 3 | Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL | S3 | PASS | S3: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 4 | With AWS Step Functions, you can create workflows, also called state machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines | S4 | PASS | S4: "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |

Open FAILs after round 5: 0

Changed after this round: The page was rewritten as a full lesson for testers (docs/superpowers/specs/2026-11-15-devops-full-lessons-design.md), with 41 sources (44 after round 6). Round 6 and later check the new text with the brief of the full pages (docs/superpowers/research/devops-factcheck-brief.md).

## Round 6 (2026-11-19)

# Fact check: devops / aws-data-serverless (round 6)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page covers Lambda, DynamoDB, Athena, Step Functions, with a practice run and a read-along | none | N/A | Sentence that describes the page itself. |
| 2 | Lede | Four services; practice run; needs no AWS account; links to other pages | none | N/A | Page framing and the page's own practice; the links are not facts. |
| 3 | What it is | Lambda is a serverless compute service | S1 | PASS | "AWS Lambda is a serverless compute service." |
| 4 | What it is | You can run code without provisioning or managing servers | S1 | PASS | "you can run code without ... provisioning or managing servers" |
| 5 | What it is | Lambda automatically manages infrastructure incl. server maintenance, capacity provisioning, scaling, patching | S1 | PASS | "Lambda automatically manages the underlying infrastructure – including server maintenance, capacity provisioning, scaling, and patching" |
| 6 | What it is | Lambda provides three compute primitives | S1 | PASS | "Lambda provides three compute primitives" |
| 7 | What it is | Page covers Event Functions, the name for the original Lambda function type | S1 | PASS | "Event Functions is the name for the original Lambda function type" |
| 8 | What it is | An Event Function runs code in response to events or API calls without managing servers | S1 | PASS | "Event Functions – Run code in response to events or API calls without managing servers." |
| 9 | What it is | DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale | S9 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 10 | What it is | A table is a collection of items; each item is a collection of attributes | S10 | PASS | "table is a collection of items, and each item is a collection of attributes." |
| 11 | What it is | DynamoDB uses primary keys to uniquely identify each item | S10 | PASS | "DynamoDB uses primary keys to uniquely identify each item in a" |
| 12 | What it is | DynamoDB doesn't support a JOIN operator | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 13 | What it is | AWS recommends you denormalize your data model | S9 | PASS | "We recommend that you denormalize your data model" |
| 14 | What it is | Athena is an interactive query service that analyzes data directly in S3 using standard SQL | S24 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." (S3 and the longer name are on two lines) |
| 15 | What it is | Run ad-hoc queries using ANSI SQL without aggregating or loading data into Athena | S25 | PASS | "You can use Athena to run ad-hoc queries using ANSI SQL, without the need to aggregate or load the data into Athena." |
| 16 | What it is | Athena analyzes unstructured, semi-structured, structured data in S3 | S25 | PASS | "Athena helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3." |
| 17 | What it is | Examples: CSV, JSON, Parquet, ORC | S25 | PASS | "Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC." |
| 18 | What it is | Step Functions workflows, also called State machines, for distributed apps, automation, microservices, data and ML pipelines | S32 | PASS | "you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |
| 19 | What it is | Each step in a workflow is called a state | S32 | PASS | "Each step in a workflow is called a state." |
| 20 | What it is | Running workflow instances are called executions | S32 | PASS | "Instances of running workflows performing tasks are called executions" |
| 21 | What it is | A Task state is a unit of work that another AWS service performs | S32 | PASS | "a Task state represents a unit of work that another AWS service performs" |
| 22 | What it is | Amazon States Language is a JSON-based structured language that defines a state machine, a collection of states | S33 | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states" |
| 23 | What it is | Lambda has pay-per-use billing, no upfront commitments | S1 | PASS | "Pay-per-use billing – No upfront commitments." |
| 24 | What it is | DynamoDB on-demand mode has pay-per-request pricing for read and write requests | S12 | PASS | "DynamoDB on-demand offers pay-per-request pricing for read and write requests" |
| 25 | What it is | In Athena you pay only for the queries you run | S24 | PASS | "you pay only for the queries you run" |
| 26 | What it is | Standard workflows priced by state transition | S32 | PASS | Table lists "Priced by state transition" first, then "Priced by number and duration of executions"; the columns are Standard, then Express. |
| 27 | What it is | Express workflows priced by number and duration of executions | S32 | PASS | "Priced by number and duration of executions" |
| 28 | How it works | Python: a function can hold more than one Python function, but the handler is always the entry point | S2 | PASS | "A Lambda function in Python can contain more than one Python function, but the handler function is always the entry point to your code." |
| 29 | How it works | When invoked, Lambda runs this method | S2 | PASS | "When your function is invoked, Lambda runs this method." |
| 30 | How it works | Handler takes two arguments, event and context | S2 | PASS | "The function lambda_handler takes two arguments, event and context." |
| 31 | How it works | An event is a JSON formatted document with data to process | S2 | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 32 | How it works | If another AWS service invokes the function, the event object has info about the event | S2 | PASS | "the event object contains information about the event that caused the invocation" |
| 33 | How it works | Lambda passes the context object automatically | S2 | PASS | "Lambda passes the context object to your function automatically." |
| 34 | How it works | Context object has info about invocation and execution environment | S2 | PASS | "The context object contains information about the function invocation and execution environment." |
| 35 | How it works | Python: print or a logging library sends info to the log | S2 | PASS | "you can use either a print statement or a Python logging library to send information to your function's log" |
| 36 | How it works | In production AWS recommends a logging library | S2 | PASS | "In a production application, we recommend that you use a logging library." |
| 37 | How it works | Outside the console you must use CloudWatch Logs to view results | S2 | PASS | "When you invoke your function outside of the Lambda console, you must use CloudWatch Logs to view your function's execution results." |
| 38 | How it works | After deploy, you can invoke in several ways | S3 | PASS | "you can invoke it in several ways" |
| 39 | How it works | One way is the `aws lambda invoke` CLI command | S3 | PASS | "The AWS Command Line Interface (AWS CLI) – Use the aws lambda invoke" |
| 40 | How it works | Function URL is a dedicated HTTP(S) endpoint | S3 | PASS | "Use function URLs to create a dedicated HTTP(S) endpoint" |
| 41 | How it works | Some services invoke a function with each new event: a trigger | S3 | PASS | "Some services can invoke a Lambda Event Function with each new event. This is called a trigger." |
| 42 | How it works | Stream/queue services: batches of records = event source mapping | S3 | PASS | "For stream and queue-based services, Lambda invokes the function with batches of records. This is called an event source mapping." |
| 43 | How it works | Synchronous: you wait for response | S3 | PASS | "With synchronous invocation, you wait for the function to process the event and return a response." |
| 44 | How it works | Asynchronous: Lambda queues the event, returns immediately | S3 | PASS | "With asynchronous invocation, Lambda queues the event for processing and returns a response immediately." |
| 45 | How it works | InvocationType: RequestResponse sync, Event async | S3 | PASS | "A value of RequestResponse indicates synchronous invocation, and a value of Event indicates asynchronous invocation." |
| 46 | How it works | Sync error: view message in response and retry manually | S3 | PASS | "for synchronous invocations, view the error message in the response and retry the invocation manually." |
| 47 | How it works | Async: Lambda retries automatically and can send records to a destination | S3 | PASS | "For asynchronous invocations, Lambda handles retries automatically and can send invocation records to a destination." |
| 48 | How it works | Execution role is an IAM role granting permission to access AWS services | S4 | PASS | "execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access AWS services and resources" |
| 49 | How it works | Lambda automatically assumes the execution role on invoke | S4 | PASS | "Lambda automatically assumes your execution role when you invoke your function." |
| 50 | How it works | Trust policy must name `lambda.amazonaws.com` | S4 | PASS | "the role's trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service." |
| 51 | How it works | Console creates a minimal-permission role by default | S4 | PASS | "By default, Lambda creates an execution role with minimal permissions when you create a function in the Lambda console." |
| 52 | How it works | Role includes AWSLambdaBasicExecutionRole, basic permissions to log to CloudWatch Logs | S4 | PASS | "this execution role includes the AWSLambdaBasicExecutionRole managed policy, which gives your function basic permissions to log events to Amazon CloudWatch Logs." |
| 53 | How it works | Timeout is max seconds a function can run | S5 | PASS | "Timeout is the maximum amount of time in seconds that a Lambda function can run." |
| 54 | How it works | Default 3 s, adjust in 1 s steps up to 900 s (15 min) | S5 | PASS | "default value for this setting is 3 seconds, but you can adjust this in increments of 1 second up to a maximum value of 900 seconds (15 minutes)." |
| 55 | How it works | `update-function-configuration` sets timeout in seconds | S5 | PASS | "You can use the update-function-configuration command to configure the timeout value, in seconds." |
| 56 | How it works | Execution environment is a secure and isolated runtime environment | S6 | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime" |
| 57 | How it works | Init phase has three tasks | S6 | PASS | "In the Init phase, Lambda performs three tasks:" |
| 58 | How it works | Starts extensions, bootstraps runtime, runs static code | S6 | PASS | "Start all extensions (Extension init) / Bootstrap the runtime (Runtime init) / Run the function's static code (Function init)" |
| 59 | How it works | Init phase limited to 10 seconds | S6 | PASS | "The Init phase is limited to 10 seconds." |
| 60 | How it works | Timeout limits the entire Invoke phase | S6 | PASS | "The function's timeout setting limits the duration of the entire Invoke phase." |
| 61 | How it works | Lambda keeps environment for some time in anticipation | S6 | PASS | "Lambda maintains the execution environment for some time in anticipation of another function invocation." |
| 62 | How it works | Objects outside the handler remain initialized | S6 | PASS | "Objects declared outside of the function's handler method remain initialized" |
| 63 | How it works | `/tmp` keeps content while frozen | S6 | PASS | "The directory content remains when the execution environment is frozen" |
| 64 | How it works | Unfinished background processes resume on reuse | S6 | PASS | "did not complete when the function ended resume if Lambda reuses the execution environment." |
| 65 | How it works | Lambda terminates environments every few hours | S6 | PASS | "Lambda terminates execution environments every few hours" |
| 66 | How it works | Do not assume environment persists indefinitely | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." |
| 67 | How it works | Crash or timeout in Invoke phase: Lambda resets environment | S6 | PASS | "If the Lambda function crashes or times out during the Invoke phase, Lambda resets the" |
| 68 | How it works | New environment initialization is a cold start | S7 | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start." (two lines) |
| 69 | How it works | Cold start adds latency and you are charged for the time | S6 | PASS | "You are charged for this time, and it adds latency to your overall invocation duration." |
| 70 | How it works | Cold starts typically under 1% of invocations | S6 | PASS | "Cold starts typically occur in under 1% of invocations." |
| 71 | How it works | More common in dev/test than production | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads." |
| 72 | How it works | Reason: dev/test invoked less often | S6 | PASS | "development and test functions are usually invoked less frequently." |
| 73 | How it works | Concurrency = in-flight requests handled at the same time | S7 | PASS | "Concurrency is the number of in-flight requests that your AWS Lambda Event Function is handling at the same time." |
| 74 | How it works | Each concurrent request gets a separate environment instance | S7 | PASS | "For each concurrent request, Lambda provisions a separate instance of your execution" |
| 75 | How it works | Default limit 1,000 concurrent executions across Event Functions in a Region | S7 | PASS | "By default, your account has a concurrency limit of 1,000 concurrent executions across all Event Functions in a Region." |
| 76 | How it works | Out of concurrency: throttling, starts to drop requests | S7 | PASS | "throttling (that is, they start to drop requests) if you run out of available concurrency." |
| 77 | How it works | Reserved concurrency reserves a portion of account concurrency for a function | S7 | PASS | "reserve a portion of your account's concurrency for an Event Function." |
| 78 | How it works | No charge for configuring reserved concurrency | S7 | PASS | "There is no charge" (line 151, continues on the next line) |
| 79 | How it works | Provisioned concurrency pre-initializes instances, reduces cold-start latency | S7 | PASS | "Use provisioned concurrency to pre-initialize a number of environment instances ... useful for reducing cold start latencies." |
| 80 | How it works | Provisioned concurrency has extra charges | S7 | PASS | "Using provisioned concurrency incurs additional charges to your account." |
| 81 | How it works | Create table: must specify primary key | S10 | PASS | "When you create a table, in addition to the table name, you must specify the primary key of the table." |
| 82 | How it works | Primary key uniquely identifies; no two items same key | S10 | PASS | "The primary key uniquely identifies each item in the table, so that no two items can have the same key." |
| 83 | How it works | Partition key value feeds an internal hash function | S10 | PASS | "DynamoDB uses the partition key's value as input to an internal hash function." |
| 84 | How it works | Hash output decides the partition | S10 | PASS | "The output from the hash function determines the partition" |
| 85 | How it works | Partition-key-only table: no two items share the value | S10 | PASS | "In a table that has only a partition key, no two items can have the same partition key value." |
| 86 | How it works | With sort key: same partition key stored together, sorted | S10 | PASS | "All items with the same partition key value are stored together, in sorted order by sort key value." |
| 87 | How it works | Same partition key allowed, different sort keys needed | S10 | PASS | "it's possible for multiple items to have the same partition key value. However, those items must have different sort key values." |
| 88 | How it works | Music: only Artist returns all songs by that artist | S10 | PASS | "if you provide only the value for Artist, DynamoDB retrieves all of the songs by that artist." |
| 89 | How it works | Music: each item must have both key attributes | S10 | PASS | "item in the table must have these two attributes." |
| 90 | How it works | Other than primary key, Music is schemaless | S10 | PASS | "Other than the primary key, the Music table is schemaless" |
| 91 | How it works | Each primary key attribute must be scalar | S10 | PASS | "Each primary key attribute must be a scalar" |
| 92 | How it works | Only string, number, binary allowed for key attributes | S10 | PASS | "The only data types allowed for primary key attributes are string, number, or binary." |
| 93 | How it works | Secondary index = alternate-key query | S10 | PASS | "A secondary index lets you query the data in the table using an alternate key, in addition to queries against the primary key." |
| 94 | How it works | GSI has partition and sort key that can differ | S10 | PASS | "Global secondary index – An index with a partition key and sort key that can be different from those on the table." |
| 95 | How it works | LSI same partition key, different sort key | S10 | PASS | "Local secondary index – An index that has the same partition key as the table, but a different sort key." |
| 96 | How it works | Quota 20 GSIs (default) and 5 LSIs per table | S10 | PASS | "Each table in DynamoDB has a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes." |
| 97 | How it works | HTTP 200 on write = completed and durably persisted | S11 | PASS | "receives an HTTP 200 response (OK), that means the write completed successfully and has been durably persisted." |
| 98 | How it works | Tables and LSIs: eventually consistent (default) and strongly consistent | S11 | PASS | "Both tables and LSIs provide two read consistency options: eventually consistent (default) and strongly consistent reads." |
| 99 | How it works | All GSI and stream reads are eventually consistent | S11 | PASS | "All reads from GSIs and streams are eventually" (continues on the next line) |
| 100 | How it works | Eventually consistent read might not reflect recent write | S11 | PASS | "the responses might not reflect the results of a recently completed write operation." |
| 101 | How it works | ConsistentRead true returns most up-to-date data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most up-to-date data, reflecting the updates from all prior write operations that were successful." |
| 102 | How it works | Strong reads from GSI or stream not supported | S11 | PASS | "Strongly consistent reads from a global secondary index or a DynamoDB stream are not supported." |
| 103 | How it works | Eventually consistent reads are half the cost | S11 | PASS | "Eventually consistent reads are half the cost of strongly consistent reads." |
| 104 | How it works | On-demand is default and recommended for most workloads | S12 | PASS | "On-demand mode is the default and recommended throughput option for most DynamoDB" |
| 105 | How it works | Provisioned mode: specify reads and writes per second | S12 | PASS | "In provisioned mode, you must specify the number of reads and writes per second that" |
| 106 | How it works | Charged for provisioned, not consumed capacity | S12 | PASS | "capacity you have provisioned, not how much of that provisioned capacity you actually consumed." |
| 107 | How it works | TTL deletes items no longer relevant | S13 | PASS | "Time To Live (TTL) for DynamoDB is a cost-effective method for deleting items that are no longer relevant." |
| 108 | How it works | Expiry timestamp: Number, Unix epoch, seconds | S13 | PASS | "The timestamp must be stored as a Number data type in Unix epoch time format at the seconds granularity." |
| 109 | How it works | TTL ignores non-Number attribute | S13 | PASS | "Items with a TTL attribute that is not a Number type are ignored by the TTL process." |
| 110 | How it works | Expired items may be deleted at any time, typically within a few days | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration." |
| 111 | How it works | Filter expressions remove expired items from Scan/Query | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 112 | How it works | Downloadable DynamoDB: develop and test without the web service | S20 | PASS | "you can develop and test applications without accessing the DynamoDB web service." |
| 113 | How it works | Download (JRE), Maven dependency, or Docker image | S20 | PASS | "DynamoDB local is available as a download (requires JRE), as an Apache Maven dependency, or as a Docker image." |
| 114 | How it works | For production, remove local endpoint in code | S20 | PASS | "you remove the local endpoint in the code, and then it points to the DynamoDB web service." |
| 115 | How it works | AWS CLI can't use it as default endpoint; need `--endpoint-url` each command | S22 | PASS | "The AWS CLI can't use the downloadable version of DynamoDB as a default endpoint. Therefore, you must specify --endpoint-url with each AWS CLI command." |
| 116 | How it works | Port 8000 by default | S21 | PASS | "DynamoDB uses port 8000 by default." |
| 117 | How it works | Requires credentials; made-up fakeMyKeyId, fakeSecretAccessKey, fakeRegion | S21 | PASS | "Downloadable DynamoDB requires any credentials to work" and "AWS Access Key ID: \"fakeMyKeyId\"", "fakeSecretAccessKey", "fakeRegion" |
| 118 | How it works | Image `amazon/dynamodb-local:latest` | S21 | PASS | `image: "amazon/dynamodb-local:latest"` |
| 119 | How it works | `-inMemory`: runs in memory, no data saved at stop | S22 | PASS | "-inMemory — DynamoDB runs in memory" and "the data is not saved when you terminate DynamoDB." |
| 120 | How it works | Collects telemetry: usage metrics, system info, errors | S23 | PASS | "DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors." |
| 121 | How it works | If on, sends data in background | S23 | PASS | "If telemetry remains on, DynamoDB local sends telemetry data in the background" |
| 122 | How it works | `-disableTelemetry`: no telemetry sent | S22 | PASS | "-disableTelemetry — When specified, DynamoDB local will ... not send any telemetry." |
| 123 | How it works | Downloadable version for development and testing only | S22 | PASS | "intended for development and testing purposes only." |
| 124 | How it works | Differs from web service in several ways | S22 | PASS | "differs from the web service in the following ways:" |
| 125 | How it works | Provisioned throughput ignored though CreateTable requires it | S22 | PASS | "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them." |
| 126 | How it works | Scans sequential, parallel not supported | S22 | PASS | "Scan operations are performed sequentially. Parallel scans are not supported." |
| 127 | How it works | Table operations immediate; state always ACTIVE | S22 | PASS | "operations occur immediately, and table state is always ACTIVE." |
| 128 | How it works | Reads eventually consistent but most appear strongly consistent | S22 | PASS | "Read operations are eventually consistent. However, due to the speed of DynamoDB local running on your computer, most reads appear to be strongly" |
| 129 | How it works | No point-in-time recovery | S22 | PASS | "DynamoDB local doesn't support Point-in-time recovery (PITR)." |
| 130 | How it works | Always returns null for billingModeSummary | S22 | PASS | "DynamoDB local always returns null for billingModeSummary." |
| 131 | How it works | Regions and distinct accounts not supported at client level | S22 | PASS | "AWS Regions and distinct AWS accounts are not supported at the client level." |
| 132 | How it works | Athena catalogs, databases, tables hold metadata defining a schema | S30 | PASS | "In Athena, catalogs, databases, and tables are containers for the metadata definitions that define a schema for underlying source data." |
| 133 | How it works | Database = group of tables; table = rows or columns | S30 | PASS | "Database – a group of tables / Table – data organized as a group of rows or columns" |
| 134 | How it works | Table metadata: where data is in S3 and structure | S30 | PASS | "tells Athena where the data is located in Amazon S3, and specifies the structure of the data" |
| 135 | How it works | Table must be registered before querying | S30 | PASS | "before querying data, a table must be registered in Athena." |
| 136 | How it works | Create a table automatically with an AWS Glue crawler | S30 | PASS | "You can create a table automatically using an AWS Glue crawler." |
| 137 | How it works | Athena integrates with Glue Data Catalog, persistent metadata store | S25 | PASS | "Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store" |
| 138 | How it works | Tutorial sample log data is TSV | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 139 | How it works | LOCATION names a folder, not a file, since Athena scans all files in a folder | S28 | PASS | "because Athena expects to scan all of the files in a folder, the LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 140 | How it works | Athena keeps queries 45 days | S29 | PASS | "Queries are retained for 45 days." |
| 141 | How it works | Partitioning restricts data scanned; better performance and cost | S31 | PASS | "you can restrict the amount of data scanned by each query, thus improving performance and reducing cost." |
| 142 | How it works | Partition in WHERE: scans only that partition | S31 | FAIL | The pages do not hold this exact sentence. I did not find it at S31 L7-L18, and the grep for "only from that partition" had no hit. The claim is not verified from S31. Fix: remove the claim, or cite a source that says it. |
| 143 | How it works | Hive style partitions: key=value paths with equal signs | S31 | PASS | "Athena can use Apache Hive style partitions, whose data paths contain key value pairs connected by equal signs" |
| 144 | How it works | MSCK REPAIR TABLE loads new Hive partitions; only Hive-style | S31 | PASS | "To load new Hive partitions into a partitioned table, you can use the MSCK REPAIR TABLE command, which works only with Hive-style" |
| 145 | How it works | Non-Hive: ALTER TABLE ADD PARTITION manually | S31 | PASS | "For non-Hive style partitions, you use ALTER TABLE ADD PARTITION" |
| 146 | How it works | State machines defined using JSON text | S34 | PASS | "State machines are defined using JSON text" |
| 147 | How it works | StartAt and States required | S34 | PASS | "StartAt (Required)" and "States (Required)" |
| 148 | How it works | StartAt exact, case-sensitive match | S34 | PASS | "A string that must exactly match (is case sensitive) the name of one of the state objects." |
| 149 | How it works | States is a comma-delimited set of states | S34 | PASS | "An object containing a comma-delimited set of states." |
| 150 | How it works | TimeoutSeconds optional; max seconds | S34 | PASS | "TimeoutSeconds (Optional) The maximum number of seconds an execution of the state machine can run." |
| 151 | How it works | Longer run fails with States.Timeout | S34 | PASS | "the execution fails with a States.Timeout Error Name." |
| 152 | How it works | Choice adds conditional logic | S35 | PASS | "A Choice state (\"Type\": \"Choice\") adds conditional logic to a" |
| 153 | How it works | Evaluates each Choice Rule to true or false | S35 | PASS | "Step Functions evaluates each Choice Rule to true or false." |
| 154 | How it works | Default = state when no rule is true | S35 | PASS | "The name of the state to transition to if no Choice Rule evaluates to true." |
| 155 | How it works | No true rule and no Default: error | S35 | PASS | "no Default is provided, the state machine will throw an error" |
| 156 | How it works | Two workflow types | S32 | PASS | "Step Functions has two workflow types:" |
| 157 | How it works | Standard: long-running, auditable | S32 | PASS | "Standard workflows are ideal for long-running, auditable workflows" |
| 158 | How it works | Standard: exactly-once, up to one year | S32 | PASS | "exactly-once workflow execution and can run for up to one year." |
| 159 | How it works | Express: high-event-rate | S32 | PASS | "Express workflows are ideal for high-event-rate workloads" |
| 160 | How it works | Express: at-least-once, up to five minutes | S32 | PASS | "at-least-once workflow execution and can run for up to five minutes." |
| 161 | How it works | Express: steps may run more than once | S32 | PASS | "one or more steps in an Express Workflow can potentially run more than once" |
| 162 | How it works | AWS SDK integrations call any AWS service directly from the state machine | S32 | PASS | "AWS SDK integrations provide a way to call any AWS service directly from your state machine" |
| 163 | How it works | All states except Pass and Wait can have runtime errors | S36 | PASS | "All states, except Pass and Wait states, can encounter runtime errors." |
| 164 | How it works | Causes: unmatched Choice; task failure such as Lambda exception | S36 | PASS | "a Choice state without a matching rule" and "Task failures - such as an exception in a AWS Lambda function" |
| 165 | How it works | Default: fail the whole execution | S36 | PASS | "Step Functions defaults to failing the entire state machine execution." |
| 166 | How it works | Task, Parallel, Map can have Retry | S36 | PASS | "Task, Parallel, and Map states can have a field named Retry" |
| 167 | How it works | Catchers for Task/Parallel/Map, not top-level failures | S36 | PASS | "catchers are available for Task, Parallel and Map states, but not for top-level state machine execution failures." |
| 168 | How it works | Errors are case-sensitive strings, error names | S36 | PASS | "Step Functions identifies errors using case-sensitive strings, known as error" (continues "names") |
| 169 | How it works | TestState accepts a state definition and runs it | S37 | PASS | "The TestState API accepts the definition of a state and executes it." |
| 170 | How it works | Test without creating or updating a state machine | S37 | PASS | "It allows you to test a state without creating a state machine or updating an existing state machine." |
| 171 | How it works | Three inspection levels | S37 | PASS | Lists "INFO", "DEBUG", "TRACE". |
| 172 | How it works | INFO is the default | S37 | PASS | "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 173 | How it works | DEBUG: state output and input/output processing result | S37 | PASS | "DEBUG – Shows the state output and the result of input and output data processing if the test succeeds." |
| 174 | How it works | Mock: test state logic without calling the actual service | S37 | PASS | "Mock AWS service integrations ... to test state logic without calling the actual service" |
| 175 | How it works | With a mock, the role is optional | S37 | PASS | "When you specify a mock, specifying the role becomes optional" |
| 176 | How it works | TestState enables unit tests for state machines | S37 | PASS | "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 177 | Try it | Run record: 2026-11-19 13:04, versions, image digest, 780 MB, no AWS account, no `AWS_` var, `~/.aws` created and removed | none | N/A | The page's own run record, after a sentence that gives the date and tools. |
| 178 | Try it | Step 5 reuses AWS CLI that the other page installs; step 6 not run | none | N/A | Link and own practice. |
| 179 | Try it | Step 1 function is the Python function of the Lambda tutorial; code block `lambda_function.py` | S2 | PASS | S2 L91-L107 holds the same code (`def lambda_handler(event, context):` ... `return length*width`). Indentation is lost in the page text. |
| 180 | Try it | Tutorial copied it, only removed trailing spaces | none | N/A | The page's own practice. |
| 181 | Try it | Takes JSON object with length and width, multiplies, returns area as JSON string | S2 | PASS | "takes a JSON object containing two integer values labeled \"length\" and \"width\". The function multiplies these values to calculate an area and returns this as a JSON string." |
| 182 | Try it | Test file is tutorial's own; uses unittest; `test_handler.py` code | none | N/A | The page's own code. |
| 183 | Try it | A test case is the unit of testing, checks a response to inputs | S41 | PASS | "A test case is the individual unit of testing. It checks for a specific response to a particular set of inputs." |
| 184 | Try it | `TestCase` is the base class | S41 | PASS | "unittest provides a base class, TestCase, which may be used to create new test cases." |
| 185 | Try it | `assertEqual` fails if not equal | S41 | PASS | "Test that first and second are equal. If the values do not compare equal, the test will fail." |
| 186 | Try it | `assertRaises` passes if raised | S41 | PASS | "The test passes if exception is raised" (line 715) |
| 187 | Try it | `assertLogs` tests at least one message is logged | S41 | PASS | "A context manager to test that at least one message is logged on" |
| 188 | Try it | `subTest` runs enclosed code block as subtest | S41 | PASS | "executes the enclosed code block as a subtest." |
| 189 | Try it | `Context` is a fake; a fake is a mock that takes shortcuts | S8 | PASS | "A fake is a mock that takes shortcuts to simplify or speed up testing." |
| 190 | Try it | Command `python3 -m unittest -v test_handler` | none | PASS | The same sentence group cites S41. S41: "python -m unittest test_module1 test_module2" and "passing in the -v flag". |
| 191 | Try it | Bullet 1: event has keys length, width; page shows `The area is 42` | S2 | PASS | "containing two key-value pairs with the keys \"length\" and \"width\"" and "INFO The area is 42" |
| 192 | Try it | Bullet 2: function uses `log_group_name` for the log group name; page's sample output shows the name | S2 | PASS | "your function uses the log_group_name parameter to output the name of its CloudWatch log group." and "/aws/lambda/myLambdaFunction" |
| 193 | Try it | Bullets 3-4: KeyError, odd-input results | none | N/A | The page's own test results. |
| 194 | Try it | AWS says handler should extract and validate data, then pass to business logic | S8 | PASS | "you should write a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic." |
| 195 | Try it | The AWS example does not validate; found by running it | none | N/A | The page's own finding. |
| 196 | Try it | AWS: all function code depends on timeout and memory settings | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly." |
| 197 | Try it | DynamoDB local is available as a Docker image; page names `amazon/dynamodb-local:latest` | S21 | PASS | "The downloadable version of Amazon DynamoDB is available as a Docker image." and `image: "amazon/dynamodb-local:latest"` |
| 198 | Try it | Step needs Docker; tutorial pulled image with `docker pull` | none | N/A | The page's own choice. |
| 199 | Try it | Options `--cap-drop ALL`, `--security-opt no-new-privileges`, `--memory 1g`, `-p 127.0.0.1:18000:8000` are the tutorial's own choices | none | N/A | Labelled as own choices. |
| 200 | Try it | `-p 127.0.0.1:18000:8000` publishes container port 8000 on your computer only, as port 18000 (also the code comment "Its port 8000 is published on this computer only") | none | FAIL | No cite. The folder has no source for Docker `-p` (grep for docker run/--rm/-p/--publish in S20-S23: no match). Fix: say only that it is the tutorial's own choice, or cite a Docker source. |
| 201 | Try it | `-inMemory`: no data after stop | S22 | PASS | "the data is not saved when you terminate DynamoDB." |
| 202 | Try it | `-disableTelemetry`: no telemetry | S22 | PASS | "DynamoDB local will ... not send any telemetry." |
| 203 | Try it | Credentials are the made-up values the AWS page shows | S21 | PASS | "fakeMyKeyId", "fakeSecretAccessKey", "fakeRegion" |
| 204 | Try it | `AWS_CONFIG_FILE`, `AWS_SHARED_CREDENTIALS_FILE` name profile/key files; `AWS_EC2_METADATA_DISABLED` disables IMDS | S40 | PASS | "Specifies the location of the file that the AWS CLI uses to store configuration profiles." and "to store access keys." and "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 205 | Try it | `ddb` adds `--endpoint-url` because CLI needs it each command | S22 | PASS | "you must specify --endpoint-url with each AWS CLI command." |
| 206 | Try it | Block 1 code: `-jar DynamoDBLocal.jar`, fake credential exports, `ddb`/`--endpoint-url`, comment "accepts any credentials" | S21/S22 | PASS | S21: "DynamoDBLocal.jar -help" (L49), "requires any credentials to work". S22: "aws dynamodb list-tables --endpoint-url http://localhost:8000". The Docker flags are the tutorial's own (N/A). |
| 207 | Try it | `create-table` creates the Music table | S14 | PASS | "creates a new Music table using create-table." |
| 208 | Try it | `put-item` creates several new items | S15 | PASS | "creates several new items in the Music table." |
| 209 | Try it | `get-item` uses `--consistent-read` to demo strong reads | S16 | PASS | "The consistent-read parameter is used below to demonstrate strongly consistent reads." |
| 210 | Try it | `update-item` updates an item | S17 | PASS | "example updates an item in the Music table." |
| 211 | Try it | `query` queries the table by partition key | S18 | PASS | "You query an item through the DynamoDB API by using query and providing the partition key." |
| 212 | Try it | `delete-table` deletes the table | S19 | PASS | "deletes the Music table using delete-table." |
| 213 | Try it | Item without sort key check follows from "each item must have both key attributes" | S10 | PASS | "item in the table must have these two attributes." |
| 214 | Try it | Block 2 commands and flags (create-table, 4 put-item, get-item, update-item, query, delete-table) | S14-S19 | PASS | The commands match S14 L43-L50, S15 L65-L80, S16 L34-L36, S17 L47-L52, S18 L31-L34, S19 L21. |
| 215 | Try it | Block 3: `docker stop`, `docker ps -a --filter ... \| wc -l`, comment "started with --rm, so stopping it also removes it" | none | FAIL | No cite. The folder has no source for Docker `--rm`, `stop`, or `ps`. Fix: label as the tutorial's own commands without a claim about Docker behavior, or add a Docker source. |
| 216 | Try it | Bullet: table ACTIVE at once; sample shows CREATING; page says wait for ACTIVE; DynamoDB local says immediate | S14, S22 | PASS | S14: "TableStatus": "CREATING" and "Once the table is in ACTIVE status". S22: "occur immediately, and table state is always ACTIVE." |
| 217 | Try it | Bullet: step 3 sample shows Awards type S; step 5 shows N | S16, S18 | PASS | S16 L48-49: "Awards": { "S": "10" }. S18 L48-49: "Awards": { "N": "10" }. |
| 218 | Try it | Bullet: query lists Happy Day before PartiQL Rocks; same partition key stored together sorted | S10 | PASS | "All items with the same partition key value are stored together, in sorted order by sort key value." |
| 219 | Try it | Bullets: ValidationException message; delete-table; `0` | none | N/A | The page's own run record. |
| 220 | Try it | DynamoDB local: most reads appear strongly consistent, so no stale read shown | S22 | PASS | "most reads appear to be strongly" (L139, continues) |
| 221 | Try it | DynamoDB local ignores provisioned throughput, so no throttling shown | S22 | PASS | "Provisioned throughput settings are ignored in downloadable DynamoDB" |
| 222 | Try it | Tutorial removed the image with `docker rmi` | none | N/A | Page's own practice record. |
| 223 | Try it | Step 3: rule "partition in WHERE: Athena scans only that partition" | S31 | FAIL | Same as #142. S31 L7-L18 does not hold this sentence. Fix: cite the source that has it, or drop the quoted rule. |
| 224 | Try it | Step 3: sample log lines are tab-separated | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 225 | Try it | Step 3: `partitions.py`, output, model notes | none | N/A | The page's own code and run record. |
| 226 | Try it | Step 4: StartAt and States required | S34 | PASS | "StartAt (Required)" and "States (Required)" |
| 227 | Try it | Step 4: StartAt must exactly match a state name | S34 | PASS | "A string that must exactly match (is case sensitive) the name of one of the state objects." |
| 228 | Try it | Step 4: Choice goes to Default; error if no Default | S35 | PASS | "no Default is provided, the state machine will throw an error" |
| 229 | Try it | Step 4: Hello World definition is the example of the structure page | S34 | PASS | "A Hello World example of the Amazon States Language using a Pass state" |
| 230 | Try it | Step 4: Choice state is the TestState example; `{"number": 2}` goes to `Equals 2` | S37 | PASS | `--input '{"number": 2}'` and `"nextState": "Equals 2"` |
| 231 | Try it | Step 4: `asl_model.py`, output, bullets, "Step Functions throws an error in this case too" | S35 | PASS | The model code and run record are the page's own (N/A). The "throws an error" claim is covered by S35 L26-L27. |
| 232 | Try it | Step 5: `--generate-cli-skeleton` generates and shows a parameter template to customize | S39 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 233 | Try it | Step 5: filter, commands, output | none | N/A | The page's own choice and run record. |
| 234 | Try it | `FunctionName`, `Timeout` match `--function-name`, `--timeout` in timeout page example | S5 | PASS | "--function-name my-function \\ --timeout 120" |
| 235 | Try it | `definition`, `roleArn`, `input`, `inspectionLevel` match options in TestState examples | S37 | PASS | "--definition '...'", "--role-arn arn:aws:iam::account-id:role/myRole", "--input '{\"number\": 2}'", "--inspection-level DEBUG" |
| 236 | Try it | `stateName` matches the page's parameter | S37 | PASS | "specify which state to test using the stateName parameter." |
| 237 | Try it | `revealSecrets` matches the parameter | S37 | PASS | "If you set the revealSecrets parameter to false" |
| 238 | Try it | `mock` and `context` match page headings | S37 | PASS | Headings: "Mocking service integrations" and "Using context field in the TestState API". The match is by name, as the page says. |
| 239 | Try it | INFO is the level used if you give none | S37 | PASS | "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 240 | Try it | Step 6: Lambda pay-per-use | S1 | PASS | "Pay-per-use billing" |
| 241 | Try it | Step 6: AWS points to pricing page | S1 | PASS | "For pricing information, see AWS Lambda Pricing." |
| 242 | Try it | Athena tutorial uses live resources; charged for queries | S26 | PASS | "The tutorial uses live resources, so you are charged for the queries that you run." |
| 243 | Try it | No charge for sample data; own uploads charged | S26 | PASS | "You aren't charged for the sample data in the location that this tutorial uses, but if you upload your own data files to Amazon S3, charges do apply." |
| 244 | Try it | Step Functions Standard priced by state transition | S32 | PASS | "Priced by state transition" |
| 245 | Try it | Lambda 1: open Event Functions page, Create Event Function, Author from scratch | S2 | PASS | "Open the Event Functions page of the Lambda console. Choose Create Event Function. Select Author from scratch." |
| 246 | Try it | Lambda 2: Node.js 24 or Python 3.14; role with basic CloudWatch Logs permission | S2 | PASS | "For Runtime, choose either Node.js 24 or Python 3.14." and "grants basic permissions to write to CloudWatch Logs." |
| 247 | Try it | Lambda 3: paste, replace code, Deploy; do not edit handler name | S2 | PASS | "Paste the following code into the lambda_function.py tab, replacing the code that Lambda created." and "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 248 | Try it | Lambda 4: test event `myTestEvent`, length and width, run icon | S2 | PASS | "For Event Name, enter myTestEvent." and "choose the run icon next to your test event" |
| 249 | Try it | Lambda 5: delete function, log group, execution role | S2 | PASS | "delete it. You can also delete the log group that stores the function's logs, and the execution role that the console created." |
| 250 | Try it | Athena 1: create S3 bucket, same Region, for query results | S26 | PASS | "follow the steps to create a bucket in Amazon S3 to hold your Athena query results. You will configure this bucket to be your query" |
| 251 | Try it | Athena 2: Location of query result box, `s3://` prefix | S27 | PASS | "In the Location of query result box, enter the ... Prefix the path with s3://." |
| 252 | Try it | Athena 3: `mydatabase` with CREATE DATABASE | S27 | PASS | "To create a database named mydatabase" and "CREATE DATABASE mydatabase" |
| 253 | Try it | Athena 4: table from CloudFront sample; page warns of limitation | S28 | PASS | "Do not use this example just yet as it has an important limitation" |
| 254 | Try it | Athena 5: run SQL query and see results | S29 | PASS | "you can run SQL queries on the table and see the results in Athena." |
| 255 | Try it | Athena 6: no clean-up step; own advice | none | N/A | The page's own advice. |
| 256 | Try it | Step Functions 1: 20-30 minutes; Run Hello World | S38 | PASS | "Estimated duration: 20-30 minutes" and "choose Run Hello World" |
| 257 | Try it | Step Functions 2: Code button for ASL | S38 | PASS | "Choose the { } Code button to view the ASL code." |
| 258 | Try it | Step Functions 3: name first, cannot rename; draft, no resources | S38 | PASS | "You cannot rename a state machine after you create it." and "Until now, you've been working on a draft of your state machine. No resources have been created yet." |
| 259 | Try it | Step Functions 4: new role; execution `hello001`, empty input | S38 | PASS | "accept the default to Create a new role." and "Enter hello001 for the name of the execution. Leave the input field empty." |
| 260 | Try it | Step Functions 5: delete IAM roles, then state machine with Actions and Delete | S38 | PASS | "To delete the IAM roles" and "select the Actions drop down, then select Delete to delete the state machine." |
| 261 | How a tester uses it | Still write unit, integration, end-to-end tests | S8 | PASS | "For serverless testing, you still write unit, integration and end-to-end tests." |
| 262 | How a tester uses it | Cloud tests most accurate measure | S8 | PASS | "Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications." |
| 263 | How a tester uses it | Cannot fully replicate cloud locally | S8 | PASS | "You cannot fully replicate a cloud environment locally." |
| 264 | How a tester uses it | Handler a slim adapter | S8 | PASS | "handler should be a slim adapter that takes in event data and passes only the details that matter to your business logic" |
| 265 | How a tester uses it | Handler should extract and validate data | S8 | PASS | "extracts and validates data from the incoming event and context objects" |
| 266 | How a tester uses it | Emulator tests might pass locally, fail in cloud | S8 | PASS | "Tests that rely on emulators might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas." |
| 267 | How a tester uses it | Mocks limited for IAM or quota | S8 | PASS | "Mock frameworks are limited in testing or detecting AWS Identity and Access Management (IAM) policy or quota limitations." |
| 268 | How a tester uses it | Even a no-service function depends on timeout and memory | S8 | PASS | "I have a Lambda function that performs calculations and returns a result without calling any other services." ... "All Lambda function code has a dependency on timeout and memory settings" |
| 269 | How a tester uses it | Log permission cannot be mocked | S8 | PASS | "This required permission cannot be accurately mocked or emulated." |
| 270 | How a tester uses it | Unique resource names per stack | S8 | PASS | "Automated test processes should create uniquely named resources for each stack." |
| 271 | How a tester uses it | Isolate load testing from production | S8 | PASS | "Load testing is another activity you should isolate from your production stack." |
| 272 | How a tester uses it | Alerts and controls to avoid spending | S8 | PASS | "environments should be configured with alerts and controls to avoid unnecessary spending." |
| 273 | How a tester uses it | Timeout near average duration: higher risk | S5 | PASS | "If the timeout value is close to the average duration of a function, there is a higher risk that the function times out unexpectedly." |
| 274 | How a tester uses it | Tests use small samples; use upper-bound datasets | S5 | PASS | "Tests often use small samples for convenience, but you should use datasets at the upper bounds of what is reasonably expected for your workload." |
| 275 | How a tester uses it | Sync returns error in response; async retried automatically | S3 | PASS | "view the error message in the response" and "Lambda handles retries automatically" |
| 276 | How a tester uses it | Do not assume environment persists; `/tmp` kept while frozen | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." and "The directory content remains when the execution environment is frozen" |
| 277 | How a tester uses it | So a test can pass on reused environment because of leftover state | S6 | PASS | The sentence explains the cited claims above. S6: "Objects declared outside of the function's handler method remain initialized" and `/tmp` content remains. |
| 278 | How a tester uses it | Cold starts more common in dev/test | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads." |
| 279 | How a tester uses it | Out of concurrency: throttling | S7 | PASS | "Your Event Functions experience throttling (that is, they start to drop requests) if you run out of available concurrency." |
| 280 | How a tester uses it | Eventually consistent is default; may miss recent write | S11 | PASS | "Eventually consistent is the default read consistent model" and "might not reflect the results of a recently completed write operation." |
| 281 | How a tester uses it | ConsistentRead true gives most up-to-date data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most up-to-date data" |
| 282 | How a tester uses it | GSI reads always eventually consistent | S11 | PASS | "All reads from GSIs and streams are eventually" |
| 283 | How a tester uses it | Local: most reads look strong; ignores provisioned throughput; so no stale reads or throttling shown | S22 | PASS | "most reads appear to be strongly" and "Provisioned throughput settings are ignored". The last sentence is an inference from the two cited claims. |
| 284 | How a tester uses it | TTL: delete any time, typically within days | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration." |
| 285 | How a tester uses it | TTL attribute Number, Unix epoch, seconds | S13 | PASS | "stored as a Number data type in Unix epoch time format at the seconds granularity." |
| 286 | How a tester uses it | Filter expressions remove expired items | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 287 | How a tester uses it | Music items need both key attributes; scalar string/number/binary; tutorial's run refused item | S10 | PASS | "must have these two attributes." and "The only data types allowed for primary key attributes are string, number, or binary." The run sentence is the page's own record (N/A). |
| 288 | How a tester uses it | Compare a sample with a real run (step 3 sample type vs real output) | none | N/A | The page's own run record, supported by S16 "S" vs the run's "N". |
| 289 | How a tester uses it | WHERE names partition: scan only that partition | S31 | FAIL | Same as #142. Not in S31. |
| 290 | How a tester uses it | MSCK REPAIR TABLE only Hive-style | S31 | PASS | "which works only with Hive-style" |
| 291 | How a tester uses it | Camel case S3 path: partitions not added | S31 | PASS | "in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 292 | How a tester uses it | Table must be registered | S30 | PASS | "before querying data, a table must be registered in Athena." |
| 293 | How a tester uses it | TestState enables unit tests | S37 | PASS | "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 294 | How a tester uses it | Assert which Catch or Retry applies | S37 | PASS | "Error handling: Which Catch or Retry applies" |
| 295 | How a tester uses it | Assert input after InputPath in `afterInputPath` | S37 | PASS | "afterInputPath – Input after Step Functions applies the InputPath filter." and "You can assert on multiple aspects" (L202) |
| 296 | How a tester uses it | Mocking necessary for Map, Parallel, Activity, `.sync`, `waitForTaskToken` | S37 | PASS | "Mocking is necessary if you need to test the following state types or service integration patterns - Map, Parallel, Activity, .sync service integrations and waitForTaskToken service integrations." |
| 297 | How a tester uses it | Console TestState does not yet support some enhancements | S37 | PASS | "The console TestState feature does not yet support some of the enhancements described in this document" |
| 298 | How a tester uses it | No Choices true and no Default: error | S35 | PASS | "no Default is provided, the state machine will throw an error" |
| 299 | How a tester uses it | Express steps may run more than once; each at least once; check repeat is safe | S32 | PASS | "one or more steps in an Express Workflow can potentially run more than once, while each step in the workflow executes at least once." The last sentence is advice. |
| 300 | Common mistakes | Do not rename handler function | S2 | PASS | "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 301 | Common mistakes | Lambda assumes role automatically; avoid manual `sts:AssumeRole` | S4 | PASS | "You should avoid manually calling sts:AssumeRole to assume the execution role in your function code." |
| 302 | Common mistakes | Trust policy must name Lambda principal | S4 | PASS | "In order for Lambda to properly assume your execution role, the role's trust policy must specify the Lambda service principal" |
| 303 | Common mistakes | Cannot replicate cloud locally; emulator tests may fail in cloud | S8 | PASS | "You cannot fully replicate a cloud environment locally." and "might provide successful results locally, but fail in the cloud" |
| 304 | Common mistakes | Handler slim adapter | S8 | PASS | "handler should be a slim adapter" |
| 305 | Common mistakes | Timeout close to average: risk | S5 | PASS | "there is a higher risk that the function times out unexpectedly." |
| 306 | Common mistakes | Do not assume environment persists; background processes resume | S6 | PASS | "should not assume that the execution environment will persist indefinitely." and "resume if Lambda reuses the execution environment." |
| 307 | Common mistakes | By default tools use web service endpoints; must specify local endpoint | S22 | PASS | "By default, the AWS SDKs and tools use endpoints for the Amazon DynamoDB web service. To use the SDKs and tools with the downloadable version of DynamoDB, you must specify the local endpoint" |
| 308 | Common mistakes | Dev/test only; `-inMemory` no data saved; telemetry in background | S22, S23 | PASS | "intended for development and testing purposes only." "the data is not saved when you terminate DynamoDB." "sends telemetry data in the background" |
| 309 | Common mistakes | No JOIN in DynamoDB | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 310 | Common mistakes | Eventually consistent default; strong reads from GSI or stream not supported | S11 | PASS | "Eventually consistent is the default read consistent model" and "are not supported." |
| 311 | Common mistakes | TTL on time; non-Number ignored | S13 | PASS | "typically within a few days after their expiration." and "ignored by the TTL process." |
| 312 | Common mistakes | LOCATION is a folder | S28 | PASS | "the LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 313 | Common mistakes | Camel case: MSCK doesn't add partitions; Hive-only | S31 | PASS | "in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 314 | Common mistakes | Unpartitioned big bucket: GET limits, exceptions | S31 | PASS | "such queries may affect the GET request rate limits in Amazon S3 and lead to Amazon S3 exceptions." |
| 315 | Common mistakes | StartAt exact, case sensitive | S34 | PASS | "must exactly match (is case sensitive)" |
| 316 | Common mistakes | No Default: error; Choice does not support End | S35 | PASS | "Choice states do not support the End field." |
| 317 | Common mistakes | Catchers not for top-level failures; default fail | S36 | PASS | "but not for top-level state machine execution failures." and "defaults to failing the entire state machine execution." |
| 318 | Common mistakes | Express step may run more than once | S32 | PASS | "can potentially run more than once" |
| 319 | Common mistakes | Console TestState: no mocking or Map/Parallel | S37 | PASS | "such as mocking service integrations, testing Map and Parallel states" |
| 320 | Common mistakes | Cannot rename state machine | S38 | PASS | "You cannot rename a state machine after you create it." |
| 321 | Common mistakes | Costs: provisioned concurrency; provisioned mode; Athena | S7, S12, S26 | PASS | "Using provisioned concurrency incurs additional charges to your account." "capacity you have provisioned, not how much of that provisioned capacity you actually consumed." "if you upload your own data files to Amazon S3, charges do apply." |
| 322 | What a tester can check | Callout "Tutorial advice": list of own advice | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It holds advice only, no new tool fact. |
| 323 | Key words | Serverless | none | PASS | Page: "AWS Lambda is a serverless compute service." "you can run code without provisioning or managing servers" |
| 324 | Key words | Event | none | PASS | Page: "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 325 | Key words | Handler | none | PASS | Page: "the handler function is always the entry point to your code. When your function is invoked, Lambda runs this method." |
| 326 | Key words | Context object | none | PASS | Page: "The context object contains information about the function invocation and execution environment." |
| 327 | Key words | Trigger | none | PASS | Page: "Some services can invoke a function with each new event, and this is called a trigger." |
| 328 | Key words | Event source mapping | none | PASS | Page: "Lambda invokes the function with batches of records, which is called an event source mapping." |
| 329 | Key words | Synchronous / Asynchronous invocation | none | PASS | Page: "With synchronous invocation, you wait ..." "With asynchronous invocation, Lambda queues the event ..." |
| 330 | Key words | Execution role | none | PASS | Page: "A function's execution role is an IAM role that grants the function permission to access AWS services and resources." |
| 331 | Key words | Timeout | none | PASS | Page: "Timeout is the maximum amount of time in seconds ... The default is 3 seconds, and you can adjust it ... up to 900 seconds" |
| 332 | Key words | Execution environment | none | PASS | Page: "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime environment" |
| 333 | Key words | Cold start | none | PASS | Page: "When Lambda has to initialize a new environment ... this is known as a cold start." |
| 334 | Key words | Concurrency, Reserved, Provisioned, Throttling | none | PASS | Page: "Concurrency is the number of in-flight requests..." "Reserved concurrency reserves a portion..." "There is no charge for configuring it" "Provisioned concurrency pre-initializes ..." "it starts to drop requests" |
| 335 | Key words | Table/item/attribute; Primary key; Partition key; Sort key | none | PASS | Page: "A table is a collection of items..." "The primary key uniquely identifies each item..." "DynamoDB uses the value of the partition key as input to an internal hash function" "stored together, in sorted order by sort key value" |
| 336 | Key words | GSI; LSI | none | PASS | Page: "A global secondary index has a partition key and sort key that can be different..." "A local secondary index has the same partition key as the table, but a different sort key." |
| 337 | Key words | Eventually consistent; Strongly consistent | none | PASS | Page: "eventually consistent, which is the default" and "a read might not reflect a recently completed write" and "If you set ConsistentRead to true..." |
| 338 | Key words | On-demand; Provisioned mode | none | PASS | Page: "On-demand mode is the default and recommended..." "pay-per-request pricing" "You are charged for the capacity that you provisioned" |
| 339 | Key words | TTL; DynamoDB local | none | PASS | Page: "Time To Live (TTL) is a method for deleting items that are no longer relevant." "The downloadable version is intended for development and testing purposes only." |
| 340 | Key words | Athena table; Partition (Athena); Hive style; MSCK REPAIR TABLE | none | FAIL | The "Partition (Athena)" row (WHERE clause names partition: Athena scans only that partition) repeats the claim that is FAIL at #142. Other three rows PASS ("The metadata in a table tells Athena where the data is located...", "whose data paths contain key value pairs connected by equal signs", "loads new Hive partitions..."). Fix: drop the Partition row or support the claim from a source. |
| 341 | Key words | State machine; State; Execution | none | PASS | Page: "workflows, also called State machines" "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states" "Each step in a workflow is called a state." "Instances of running workflows performing tasks are called executions" |
| 342 | Key words | Standard; Express | none | PASS | Page: "They have exactly-once workflow execution, and they can run for up to one year." "...at-least-once... five minutes... can potentially run more than once" |
| 343 | Key words | Choice state; TestState API; Mock; Fake; Test case | none | PASS | Page: "A Choice state adds conditional logic..." "Default is the name of the state to transition to if no Choice Rule evaluates to true" "The TestState API accepts the definition of a state and executes it." "A mock lets you test state logic without calling the actual service." "a fake is a mock that takes shortcuts..." "A test case is the individual unit of testing..." |

Open FAILs after round 6: 5

Changed after this round: Rows 142, 223, 289, and 340 (the rule that Athena scans only the partition that the WHERE clause names): the checker did not find the sentence in S31, because the source wraps it across lines 27 to 29 ("Athena scans the data only from that" and then "partition."). The sentence is in S31 as the page has it, so the page text is unchanged, and round 7 looks at it again. Rows 200 and 215: the text of step 2 of Try it and the comments in its code said, with no cite, what the Docker options -p and --rm do. The page now cites three pages of Docker (S42 to S44) for the flag -p, the flag --rm, and docker stop, and it calls the other options (--cap-drop, --security-opt, --memory) the tutorial's own choices. The comments of ddb_start.sh and ddb_stop.sh were reworded, and no command changed. Not from a FAIL: the page now says that the answer of delete-table showed ACTIVE too (the sample on the AWS page shows DELETING, S19); a sentence that said the run "matches step 2 and step 5" was unclear, and now says that the run matches the sample of step 5 and differs from the sample of step 3; the sentence on the folder ~/.aws now says what the run recorded, and adds a separate check of 2026-11-19 13:29 (aws --version and --generate-cli-skeleton create no file, and a command that tries to reach an endpoint creates ~/.aws/cli/cache/session.db); five rows of Key words were reworded to follow their Technical sentences (Trigger, MSCK REPAIR TABLE, State machine, Execution, Choice state).

## Round 7 (2026-11-19)

# Fact check: devops / aws-data-serverless (round 7)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page describes itself (Lambda, DynamoDB, Athena, Step Functions, practice run) | none | N/A | Describes the page itself. |
| 2 | Lede | The page covers four AWS services; the practice run tests the Lambda example, runs the DynamoDB tutorial locally, and models two rules; it needs no AWS account | none | N/A | Framing sentences and the page's own practice. |
| 3 | What it is | Lambda is a serverless compute service | S1 | PASS | "AWS Lambda is a serverless compute service." |
| 4 | What it is | You can run code without provisioning or managing servers | S1 | PASS | "you can run code without provisioning or managing servers." |
| 5 | What it is | Lambda automatically manages the infrastructure, including server maintenance, capacity provisioning, scaling, patching | S1 | PASS | "Lambda automatically manages the underlying infrastructure – including server maintenance, capacity provisioning, scaling, and patching" |
| 6 | What it is | Lambda provides three compute primitives | S1 | PASS | "Lambda provides three compute primitives" |
| 7 | What it is | Event Functions is the name for the original Lambda function type | S1 | PASS | "Event Functions is the name for the original Lambda function type" |
| 8 | What it is | An Event Function runs code in response to events or API calls without managing servers | S1 | PASS | "Event Functions – Run code in response to events or API calls without managing servers." |
| 9 | What it is | DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale | S9 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 10 | What it is | A table is a collection of items; each item is a collection of attributes | S10 | PASS | "table is a collection of items, and each item is a collection of attributes." |
| 11 | What it is | DynamoDB uses primary keys to uniquely identify each item | S10 | PASS | "DynamoDB uses primary keys to uniquely identify each item in a" |
| 12 | What it is | DynamoDB doesn't support a JOIN operator | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 13 | What it is | AWS recommends denormalizing the data model | S9 | PASS | "We recommend that you denormalize your data model" |
| 14 | What it is | Athena is an interactive query service for analyzing data in S3 with standard SQL | S24 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in" |
| 15 | What it is | Athena runs ad-hoc ANSI SQL queries without aggregating or loading data | S25 | PASS | "run ad-hoc queries using ANSI SQL, without the need to aggregate or load the data into Athena." |
| 16 | What it is | Athena analyzes unstructured, semi-structured, and structured data in S3 | S25 | PASS | "analyze unstructured, semi-structured, and structured data stored in Amazon S3." |
| 17 | What it is | Examples: CSV, JSON, Parquet, ORC | S25 | PASS | "CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC." |
| 18 | What it is | Step Functions workflows (state machines) build distributed apps, automate, orchestrate, build pipelines | S32 | PASS | "you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate" |
| 19 | What it is | Each step in a workflow is a state | S32 | PASS | "Each step in a workflow is called a state." |
| 20 | What it is | Running workflow instances are executions | S32 | PASS | "Instances of running workflows performing tasks are called executions" |
| 21 | What it is | A Task state is a unit of work that another AWS service performs | S32 | PASS | "a Task state represents a unit of work that another AWS service performs" |
| 22 | What it is | Amazon States Language is a JSON-based, structured language that defines a state machine | S33 | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states" |
| 23 | What it is | Lambda has pay-per-use billing with no upfront commitments | S1 | PASS | "Pay-per-use billing – No upfront commitments." |
| 24 | What it is | DynamoDB on-demand mode offers pay-per-request pricing | S12 | PASS | "DynamoDB on-demand offers pay-per-request pricing for read and write requests" |
| 25 | What it is | In Athena you pay only for the queries you run | S24 | PASS | "you pay only for the queries you run." |
| 26 | What it is | Standard workflows are priced by state transition | S32 | PASS | "Priced by state transition" |
| 27 | What it is | Express workflows are priced by number and duration of executions | S32 | PASS | "Priced by number and duration of executions" |
| 28 | How it works | In Python the handler function is always the entry point | S2 | PASS | "can contain more than one Python function, but the handler function is always the entry point to your code." |
| 29 | How it works | When invoked, Lambda runs this method | S2 | PASS | "When your function is invoked, Lambda runs this method." |
| 30 | How it works | The handler takes two arguments, event and context | S2 | PASS | "takes two arguments, event and context." |
| 31 | How it works | An event is a JSON formatted document with data to process | S2 | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 32 | How it works | If another AWS service invokes the function, the event object has info about the cause | S2 | PASS | "the event object contains information about the event that caused the invocation." |
| 33 | How it works | Lambda passes the context object automatically | S2 | PASS | "Lambda passes the context object to your function automatically." |
| 34 | How it works | Context holds info about the invocation and execution environment | S2 | PASS | "contains information about the function invocation and execution environment." |
| 35 | How it works | In Python use print or a logging library to send info to the log | S2 | PASS | "you can use either a print statement or a Python logging library to send information to your function's" |
| 36 | How it works | In production AWS recommends a logging library | S2 | PASS | "In a production application, we recommend that you use a logging library." |
| 37 | How it works | Outside the console you must use CloudWatch Logs to view results | S2 | PASS | "you must use CloudWatch Logs to view your function's execution results." |
| 38 | How it works | After deploy, you can invoke in several ways | S3 | PASS | "you can invoke it in several ways:" |
| 39 | How it works | `aws lambda invoke` is one way | S3 | PASS | "The AWS Command Line Interface (AWS CLI) – Use the aws lambda invoke" |
| 40 | How it works | A function URL is a dedicated HTTP(S) endpoint | S3 | PASS | "Use function URLs to create a dedicated HTTP(S) endpoint" |
| 41 | How it works | Some services invoke a function with each new event: a trigger | S3 | PASS | "Some services can invoke a Lambda Event Function with each new event. This is called a trigger." |
| 42 | How it works | Stream and queue services: batches of records, event source mapping | S3 | PASS | "Lambda invokes the function with batches of records. This is called an event source mapping." |
| 43 | How it works | Synchronous: you wait for the response | S3 | PASS | "you wait for the function to process the event and return a response." |
| 44 | How it works | Asynchronous: Lambda queues the event and returns a response immediately | S3 | PASS | "Lambda queues the event for processing and returns a response immediately." |
| 45 | How it works | InvocationType: RequestResponse synchronous, Event asynchronous | S3 | PASS | "A value of RequestResponse indicates synchronous invocation, and a value of Event indicates asynchronous" |
| 46 | How it works | Sync error: view message in response and retry manually | S3 | PASS | "view the error message in the response and retry the invocation manually." |
| 47 | How it works | Async: Lambda retries automatically and can send records to a destination | S3 | PASS | "Lambda handles retries automatically and can send invocation records to a destination." |
| 48 | How it works | Execution role is an IAM role granting permission to access AWS services | S4 | PASS | "execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access" |
| 49 | How it works | Lambda automatically assumes the role on invoke | S4 | PASS | "Lambda automatically assumes your execution role when you invoke your function." |
| 50 | How it works | Trust policy must name `lambda.amazonaws.com` as trusted service | S4 | PASS | "trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service." |
| 51 | How it works | Console creates a minimal-permission role by default | S4 | PASS | "By default, Lambda creates an execution role with minimal permissions when you create a function in the Lambda console." |
| 52 | How it works | The role includes AWSLambdaBasicExecutionRole, basic permissions to log to CloudWatch Logs | S4 | PASS | "includes the AWSLambdaBasicExecutionRole managed policy, which gives your function basic permissions to log events to Amazon CloudWatch Logs." |
| 53 | How it works | Timeout is max time in seconds a function can run | S5 | PASS | "Timeout is the maximum amount of time in seconds that a Lambda function can run." |
| 54 | How it works | Default 3 s; adjustable in 1 s steps up to 900 s (15 min) | S5 | PASS | "default value for this setting is 3 seconds, but you can adjust this in increments of 1 second up to a maximum value of 900 seconds (15 minutes)." |
| 55 | How it works | `update-function-configuration` sets timeout in seconds | S5 | PASS | "You can use the update-function-configuration command to configure the timeout value, in seconds." |
| 56 | How it works | Lambda runs the function in an execution environment (secure, isolated runtime) | S6 | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime" |
| 57 | How it works | Init phase has three tasks | S6 | PASS | "In the Init phase, Lambda performs three tasks:" |
| 58 | How it works | Starts extensions, bootstraps runtime, runs static code | S6 | PASS | "Start all extensions (Extension init) / Bootstrap the runtime (Runtime init) / Run the function's static code (Function init)" |
| 59 | How it works | Init phase limited to 10 s | S6 | PASS | "The Init phase is limited to 10 seconds." |
| 60 | How it works | Timeout limits the entire Invoke phase | S6 | PASS | "The function's timeout setting limits the duration of the entire Invoke phase." |
| 61 | How it works | Lambda keeps the environment for some time after an invocation | S6 | PASS | "Lambda maintains the execution environment for some time in anticipation of another function invocation." |
| 62 | How it works | Objects outside the handler remain initialized | S6 | PASS | "Objects declared outside of the function's handler method remain initialized" |
| 63 | How it works | `/tmp` keeps content while frozen | S6 | PASS | "The directory content remains when the execution environment is frozen" |
| 64 | How it works | Unfinished background processes resume on reuse | S6 | PASS | "did not complete when the function ended resume if Lambda reuses the execution environment." |
| 65 | How it works | Lambda terminates environments every few hours | S6 | PASS | "Lambda terminates execution environments every few hours" |
| 66 | How it works | Do not assume the environment persists indefinitely | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." |
| 67 | How it works | Crash or timeout in Invoke phase: Lambda resets the environment | S6 | PASS | "If the Lambda function crashes or times out during the Invoke phase, Lambda resets the" |
| 68 | How it works | Initializing a new environment is a cold start | S7 | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start." |
| 69 | How it works | Cold start adds latency and you are charged for this time | S6 | PASS | "You are charged for this time, and it adds latency to your overall invocation duration." |
| 70 | How it works | Cold starts typically occur in under 1% of invocations | S6 | PASS | "Cold starts typically occur in under 1% of invocations." |
| 71 | How it works | More common in dev/test than production | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads." |
| 72 | How it works | Because dev/test functions are invoked less frequently | S6 | PASS | "development and test functions are usually invoked less frequently." |
| 73 | How it works | Concurrency is in-flight requests handled at the same time | S7 | PASS | "Concurrency is the number of in-flight requests that your AWS Lambda Event Function is handling at the same time." |
| 74 | How it works | Each concurrent request gets a separate environment instance | S7 | PASS | "For each concurrent request, Lambda provisions a separate instance of your execution" |
| 75 | How it works | Default limit 1,000 concurrent executions per Region across Event Functions | S7 | PASS | "By default, your account has a concurrency limit of 1,000 concurrent executions across all Event Functions in a Region." |
| 76 | How it works | Out of concurrency: throttling, dropping requests | S7 | PASS | "throttling (that is, they start to drop requests) if you run out of available concurrency." |
| 77 | How it works | Reserved concurrency reserves a portion of account concurrency for a function | S7 | PASS | "reserve a portion of your account's concurrency for an Event Function." |
| 78 | How it works | No charge for configuring it | S7 | PASS | "There is no charge for configuring reserved concurrency" |
| 79 | How it works | Provisioned concurrency pre-initializes instances, reducing cold start latency | S7 | PASS | "Use provisioned concurrency to pre-initialize a number of environment instances ... reducing cold start latencies." |
| 80 | How it works | Provisioned concurrency incurs additional charges | S7 | PASS | "Using provisioned concurrency incurs additional charges to your account." |
| 81 | How it works | On table creation you must give the primary key | S10 | PASS | "When you create a table, in addition to the table name, you must specify the primary key of the table." |
| 82 | How it works | Primary key uniquely identifies each item; no two share a key | S10 | PASS | "no two items can have the same key." |
| 83 | How it works | Partition key value is input to an internal hash function | S10 | PASS | "DynamoDB uses the partition key's value as input to an internal hash function." |
| 84 | How it works | Hash output determines the partition | S10 | PASS | "The output from the hash function determines the partition" |
| 85 | How it works | Partition-key-only table: no two items share a partition key value | S10 | PASS | "In a table that has only a partition key, no two items can have the same partition key value." |
| 86 | How it works | With a sort key, same-partition items stored together sorted by sort key | S10 | PASS | "All items with the same partition key value are stored together, in sorted order by sort key value." |
| 87 | How it works | Same partition key allowed but sort keys must differ | S10 | PASS | "multiple items to have the same partition key value. However, those items must have different sort key values." |
| 88 | How it works | Music: Artist alone returns all songs by the artist | S10 | PASS | "if you provide only the value for Artist, DynamoDB retrieves all of the songs by that artist." |
| 89 | How it works | Each Music item must have both key attributes | S10 | PASS | "Each item in the table must have these two attributes." |
| 90 | How it works | Other than the primary key, Music is schemaless | S10 | PASS | "Other than the primary key, the Music table is schemaless" |
| 91 | How it works | Each primary key attribute must be a scalar | S10 | PASS | "Each primary key attribute must be a scalar" |
| 92 | How it works | Only string, number, binary allowed | S10 | PASS | "The only data types allowed for primary key attributes are string, number, or binary." |
| 93 | How it works | Secondary index queries by alternate key | S10 | PASS | "lets you query the data in the table using an alternate key, in addition to queries against the primary key." |
| 94 | How it works | GSI keys can differ from the table's | S10 | PASS | "An index with a partition key and sort key that can be different from those on the table." |
| 95 | How it works | LSI: same partition key, different sort key | S10 | PASS | "An index that has the same partition key as the table, but a different sort key." |
| 96 | How it works | Quota 20 GSIs (default) and 5 LSIs | S10 | PASS | "a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes." |
| 97 | How it works | Write with HTTP 200 is complete and durable | S11 | PASS | "receives an HTTP 200 response (OK), that means the write completed successfully and has been durably persisted." |
| 98 | How it works | Tables and LSIs: eventually consistent (default) and strongly consistent | S11 | PASS | "Both tables and LSIs provide two read consistency options: eventually consistent (default) and strongly consistent reads." |
| 99 | How it works | All GSI and stream reads are eventually consistent | S11 | PASS | "All reads from GSIs and streams are eventually" |
| 100 | How it works | Eventually consistent read might not show a recent write | S11 | PASS | "the responses might not reflect the results of a recently completed write operation." |
| 101 | How it works | ConsistentRead true returns the most up-to-date data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most" |
| 102 | How it works | Strongly consistent reads from GSI or stream not supported | S11 | PASS | "Strongly consistent reads from a global secondary index or a" (line 35) |
| 103 | How it works | Eventually consistent reads cost half | S11 | PASS | "Eventually consistent reads are half the cost of strongly consistent reads." |
| 104 | How it works | On-demand is the default and recommended option | S12 | PASS | "On-demand mode is the default and recommended throughput option for most DynamoDB workloads." |
| 105 | How it works | Provisioned: you specify reads and writes per second | S12 | PASS | "you must specify the number of reads and writes per second that you require" |
| 106 | How it works | Charged for provisioned, not consumed | S12 | PASS | "charged based on the hourly read and write capacity you have provisioned, not how much of that provisioned capacity you actually consumed." |
| 107 | How it works | TTL deletes items no longer relevant | S13 | PASS | "Time To Live (TTL) for DynamoDB is a cost-effective method for deleting items that are no longer relevant." |
| 108 | How it works | Timestamp must be a Number, Unix epoch, seconds | S13 | PASS | "data type in Unix epoch time format at the seconds granularity." (line 12) |
| 109 | How it works | TTL ignores items whose TTL attribute is not a Number | S13 | PASS | "Items with a TTL attribute that is not a Number type are ignored by the TTL process." |
| 110 | How it works | Expired items might be deleted any time, typically within a few days | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration." |
| 111 | How it works | Use filter expressions to remove expired items from Scan/Query | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 112 | How it works | Downloadable DynamoDB: develop and test without the web service | S20 | PASS | "With the downloadable version of Amazon DynamoDB, you can develop and test applications" |
| 113 | How it works | Download (JRE), Maven dependency, or Docker image | S20 | PASS | "available as a download (requires JRE), as an Apache Maven dependency, or as a Docker image." |
| 114 | How it works | For production, remove the local endpoint | S20 | PASS | "When you're ready to deploy your application in production, you remove the" (line 13) |
| 115 | How it works | AWS CLI cannot use it as default endpoint; `--endpoint-url` each command | S22 | PASS | "The AWS CLI can't use the downloadable version of DynamoDB as a default endpoint. Therefore, you must specify --endpoint-url with each AWS CLI command." |
| 116 | How it works | Port 8000 by default | S21 | PASS | "DynamoDB uses port 8000 by default." |
| 117 | How it works | Requires credentials; shows fakeMyKeyId, fakeSecretAccessKey, fakeRegion | S21 | PASS | "Downloadable DynamoDB requires any credentials to work" / "fakeMyKeyId" / "fakeSecretAccessKey" / "fakeRegion" |
| 118 | How it works | Docker image `amazon/dynamodb-local:latest` | S21 | PASS | `image: "amazon/dynamodb-local:latest"` |
| 119 | How it works | `-inMemory`: runs in memory, no data saved on stop | S22 | PASS | "DynamoDB runs in memory instead of using a database file. When you stop DynamoDB, none of the data is saved." |
| 120 | How it works | DynamoDB local collects telemetry (usage metrics, system info, errors) | S23 | PASS | "DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors." |
| 121 | How it works | If telemetry stays on, it sends data in the background | S23 | PASS | "If telemetry remains on, DynamoDB local sends telemetry data in the background" |
| 122 | How it works | `-disableTelemetry` sends no telemetry | S22 | PASS | "When specified, DynamoDB local will not send any telemetry." |
| 123 | How it works | Intended for development and testing only | S22 | PASS | "intended for development and testing purposes only." |
| 124 | How it works | It differs from the web service in several ways | S22 | PASS | "differs from the web service in the following ways:" |
| 125 | How it works | Provisioned throughput ignored though CreateTable requires it | S22 | PASS | "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them." |
| 126 | How it works | Scans sequential; no parallel scans | S22 | PASS | "Scan operations are performed sequentially. Parallel scans are not supported." |
| 127 | How it works | Table operations immediate; state always ACTIVE | S22 | PASS | "operations occur immediately, and table state is always ACTIVE." |
| 128 | How it works | Reads eventually consistent but most look strong | S22 | PASS | "Read operations are eventually consistent. However, due to the speed of DynamoDB local running on your computer, most reads appear to be strongly consistent." |
| 129 | How it works | No point-in-time recovery | S22 | PASS | "DynamoDB local doesn't support Point-in-time recovery (PITR)." |
| 130 | How it works | Always null for billingModeSummary | S22 | PASS | "DynamoDB local always returns null for billingModeSummary." |
| 131 | How it works | Regions and distinct accounts not supported at client level | S22 | PASS | "AWS Regions and distinct AWS accounts are not supported at the client level." |
| 132 | How it works | Athena catalogs, databases, tables are metadata containers defining a schema | S30 | PASS | "catalogs, databases, and tables are containers for the metadata definitions that" (line 6) |
| 133 | How it works | Database is a group of tables; table is rows or columns | S30 | PASS | "Database – a group of tables" / "Table – data organized as a group of rows or" |
| 134 | How it works | Table metadata says where data is in S3 and its structure | S30 | PASS | "The metadata in the table tells Athena" (line 20) |
| 135 | How it works | A table must be registered before querying | S30 | PASS | "registered in Athena." (line 26) |
| 136 | How it works | Create a table automatically with an AWS Glue crawler | S30 | PASS | "You can create a table automatically using an AWS Glue crawler." |
| 137 | How it works | Athena integrates with Glue Data Catalog (persistent metadata store) | S25 | PASS | "Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store" |
| 138 | How it works | Tutorial sample log data is TSV | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 139 | How it works | LOCATION names a folder, not a file, because Athena scans all files in a folder | S28 | PASS | "because Athena expects to scan all of the files in a folder, the LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 140 | How it works | Athena keeps queries 45 days | S29 | PASS | "Queries are retained for 45 days." |
| 141 | How it works | Partitioning restricts data scanned, improves performance, cuts cost | S31 | PASS | "By partitioning your data, you can restrict the amount of data scanned by each query, thus" (line 7) |
| 142 | How it works | WHERE on partition: scans only that partition | S31 | PASS | "specify the partition in the WHERE clause, Athena scans the data only from that partition." |
| 143 | How it works | Hive style partitions: key value pairs joined by equal signs | S31 | PASS | "Athena can use Apache Hive style partitions, whose data paths contain key value pairs connected by equal signs" |
| 144 | How it works | MSCK REPAIR TABLE loads Hive partitions; only Hive-style | S31 | PASS | "you can use the MSCK REPAIR TABLE command, which works only with Hive-style" |
| 145 | How it works | Non-Hive: ALTER TABLE ADD PARTITION manually | S31 | PASS | "For non-Hive style partitions, you use ALTER TABLE ADD PARTITION" |
| 146 | How it works | State machines defined in JSON text | S34 | PASS | "State machines are defined using JSON text" |
| 147 | How it works | StartAt and States required | S34 | PASS | "StartAt (Required)" / "States (Required)" |
| 148 | How it works | StartAt must match a state name, case sensitive | S34 | PASS | "must exactly match (is case sensitive) the name of one of" |
| 149 | How it works | States is an object with a comma-delimited set of states | S34 | PASS | "An object containing a comma-delimited set of states." |
| 150 | How it works | TimeoutSeconds optional, max seconds | S34 | PASS | "TimeoutSeconds (Optional)" |
| 151 | How it works | Longer run fails with States.Timeout | S34 | PASS | "States.Timeout" (line 31) |
| 152 | How it works | Choice state adds conditional logic | S35 | PASS | "A Choice state ("Type": "Choice") adds conditional logic to a" |
| 153 | How it works | Evaluates each Choice Rule to true or false | S35 | PASS | "Step Functions evaluates each Choice Rule to true or false." |
| 154 | How it works | Default: state to go to if no rule is true | S35 | PASS | "Default (Optional, Recommended)" / "if no Choice Rule evaluates to true" |
| 155 | How it works | No true rule and no Default: error | S35 | PASS | "If no Choices evaluate to true when the workflow runs, and no Default is provided, the" |
| 156 | How it works | Two workflow types; Standard suits long-running, auditable | S32 | PASS | "Step Functions has two workflow types: Standard workflows are ideal for long-running, auditable workflows" |
| 157 | How it works | Standard: exactly-once, up to one year | S32 | PASS | "exactly-once workflow execution and can run for up to one year." |
| 158 | How it works | Express suits high-event-rate | S32 | PASS | "Express workflows are ideal for high-event-rate workloads" |
| 159 | How it works | Express: at-least-once, up to five minutes | S32 | PASS | "at-least-once workflow execution and can run for up to five minutes." |
| 160 | How it works | Express steps can run more than once | S32 | PASS | "one or more steps in an Express Workflow can potentially run more than once" |
| 161 | How it works | AWS SDK integrations call any AWS service directly | S32 | PASS | "AWS SDK integrations provide a way to call any AWS service directly from your state machine" |
| 162 | How it works | All states except Pass and Wait can hit runtime errors | S36 | PASS | "All states, except Pass and Wait states, can encounter runtime errors." |
| 163 | How it works | Causes: Choice without match; task failure like Lambda exception | S36 | PASS | "a Choice state without a matching rule" / "Task failures - such as an exception in a AWS Lambda function" |
| 164 | How it works | Default is failing the whole execution | S36 | PASS | "Step Functions defaults to failing the entire state machine execution." |
| 165 | How it works | Task, Parallel, Map can have Retry | S36 | PASS | "Task, Parallel, and Map states can have a field named Retry" |
| 166 | How it works | Catchers for Task/Parallel/Map, not top-level failures | S36 | PASS | "catchers are available for Task, Parallel and Map states, but not for" |
| 167 | How it works | Errors identified by case-sensitive strings (error names) | S36 | PASS | "identifies errors using case-sensitive strings, known as error" |
| 168 | How it works | TestState accepts a state definition and executes it | S37 | PASS | "The TestState API accepts the definition of a state and executes it." |
| 169 | How it works | Test a state without creating or updating a state machine | S37 | PASS | "It allows you to test a state without creating a state machine or updating an existing state machine." |
| 170 | How it works | Three inspection levels INFO, DEBUG, TRACE | S37 | PASS | Lines 33-35 list "INFO", "DEBUG", "TRACE". |
| 171 | How it works | INFO is the default | S37 | PASS | "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 172 | How it works | DEBUG shows state output and input/output processing result | S37 | PASS | "DEBUG – Shows the state output and the result of input and output data processing if the test succeeds." |
| 173 | How it works | A mock tests state logic without calling the service | S37 | PASS | "Mock AWS service integrations ... to test state logic without calling the actual service" |
| 174 | How it works | With a mock the role becomes optional | S37 | PASS | "When you specify a mock, specifying the role becomes optional" |
| 175 | How it works | TestState enables unit tests for state machines | S37 | PASS | "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 176 | Try it | Run record: date, versions, image digest, size, `~/.aws` finding, separate check | none | N/A | Record of the page's own run. |
| 177 | Try it | Step 1 function is the Python function of the AWS tutorial | S2 | PASS | "Paste the following code into the lambda_function.py tab" and the code is the same as the page's. |
| 178 | Try it | It takes JSON with `length` and `width`, multiplies, returns area as a JSON string | S2 | PASS | "takes a JSON object containing two integer values labeled "length" and "width"" / "return the calculated area as a JSON string" / "return length*width" |
| 179 | Try it | `lambda_function.py` code block | S2 | PASS | Matches S2 lines 91-107. |
| 180 | Try it | A test case is the individual unit of testing | S41 | PASS | "A test case is the individual unit of testing. It checks for a specific response to a particular set of inputs." |
| 181 | Try it | `TestCase` is the base class | S41 | PASS | "unittest provides a base class, TestCase, which may be used to create new test cases." |
| 182 | Try it | `assertEqual` fails if values are not equal | S41 | PASS | "If the values do not compare equal, the test will fail." (line 641) |
| 183 | Try it | `assertRaises` passes if the exception is raised | S41 | PASS | "The test passes if exception is raised" |
| 184 | Try it | `assertLogs` tests at least one message is logged | S41 | PASS | "A context manager to test that at least one message is logged on" |
| 185 | Try it | `subTest` runs the enclosed code block as a subtest | S41 | PASS | "Return a context manager which executes the enclosed code block as a subtest" |
| 186 | Try it | A fake is a mock that takes shortcuts | S8 | PASS | "A fake is a mock that takes shortcuts to simplify or speed up testing." |
| 187 | Try it | `test_handler.py` code and `python3 -m unittest -v test_handler`; its output | none | N/A | Tutorial's own test file and its own run. |
| 188 | Try it | Test 1 uses the AWS event with `length` and `width` | S2 | PASS | `"length": 6` and the keys "length" and "width" (lines 139-145). |
| 189 | Try it | Page shows the log line `The area is 42` | S2 | PASS | "INFO The area is 42" |
| 190 | Try it | Function uses `log_group_name` to output its log group | S2 | PASS | "your function uses the log_group_name parameter to output the name of its CloudWatch log group." |
| 191 | Try it | Fake context holds the log group the page shows | S2 | PASS | "/aws/lambda/myLambdaFunction" |
| 192 | Try it | AWS: a handler should extract and validate data, then pass input to business logic | S8 | PASS | "a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic." |
| 193 | Try it | AWS: all Lambda code depends on timeout and memory settings | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly." |
| 194 | Try it | Test 3, test 4 and "function does not validate" | none | N/A | Page's own findings from its run. |
| 195 | Try it | DynamoDB local is available as a Docker image | S21 | PASS | "The downloadable version of Amazon DynamoDB is available as a Docker image." |
| 196 | Try it | The AWS page names the image `amazon/dynamodb-local:latest` | S21 | PASS | `image: "amazon/dynamodb-local:latest"` |
| 197 | Try it | `--publish` / `-p` makes a port available outside the host | S42 | PASS | "Use the --publish or -p flag to make a port available outside the host" |
| 198 | Try it | `-p 192.168.1.100:8080:80` maps host 8080 to container TCP 80 | S42 | PASS | "Map port 8080 on the Docker host IP 192.168.1.100 to TCP port 80 in the container." |
| 199 | Try it | With 127.0.0.1 or ::1, only the Docker host can access the port | S42 | PASS | "only the Docker host can access the published container port." |
| 200 | Try it | `--rm` removes the container and anonymous volumes on exit | S43 | PASS | "Automatically remove the container and its associated anonymous volumes when it exits" |
| 201 | Try it | `-inMemory` keeps no data after stop | S22 | PASS | "none of the data is saved." |
| 202 | Try it | `-disableTelemetry` sends no telemetry | S22 | PASS | "DynamoDB local will not send any telemetry." |
| 203 | Try it | Credentials are the made-up values the AWS page shows | S21 | PASS | "fakeMyKeyId" / "fakeSecretAccessKey" / "fakeRegion" |
| 204 | Try it | `AWS_CONFIG_FILE`, `AWS_SHARED_CREDENTIALS_FILE` name the files; `AWS_EC2_METADATA_DISABLED` disables IMDS | S40 | PASS | "file that the AWS CLI uses to store configuration profiles" / "to store access keys" / "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 205 | Try it | `ddb` adds `--endpoint-url` because the CLI needs it each time | S22 | PASS | "you must specify --endpoint-url with each AWS CLI command." |
| 206 | Try it | First code block (docker run, exports, `ddb`, `j`, wait loop) | S21, S22, S42, S43, S40 | PASS | `-d`, `--name`, `--rm`, `-p` are in S43/S42; `-jar DynamoDBLocal.jar` is in S21; `--cap-drop`, `--security-opt`, `--memory` are marked as the tutorial's own choices. |
| 207 | Try it | `create-table` creates the Music table | S14 | PASS | "The following AWS CLI example creates a new Music table using create-table." |
| 208 | Try it | `put-item` creates several new items | S15 | PASS | "The following AWS CLI example creates several new items in the" |
| 209 | Try it | `get-item` uses `--consistent-read` to show strongly consistent reads | S16 | PASS | "The consistent-read parameter is used below to demonstrate strongly consistent reads." |
| 210 | Try it | `update-item` updates an item | S17 | PASS | "The following AWS CLI example updates an item in the Music table." |
| 211 | Try it | `query` queries by partition key | S18 | PASS | "You query an item through the DynamoDB API by using query and providing the partition key." |
| 212 | Try it | `delete-table` deletes the table | S19 | PASS | "The following AWS CLI example deletes the Music table using delete-table." |
| 213 | Try it | Each Music item must have both key attributes | S10 | PASS | "Each item in the table must have these two attributes." |
| 214 | Try it | Second code block (six steps) | S14-S19 | PASS | The commands and flags match S14 lines 43-50, S15 lines 68-80, S16 lines 34-36, S18 lines 31-34. |
| 215 | Try it | `docker stop` stops one or more running containers | S44 | PASS | "Stop one or more running containers" |
| 216 | Try it | Third code block (`docker stop`, `docker ps` count) | none | N/A | Tutorial's own way, stated on the page. |
| 217 | Try it | Sample `create-table` result shows CREATING; page says wait for ACTIVE | S14 | PASS | "TableStatus": "CREATING" / "When DynamoDB finishes creating the table, the value of the TableStatus field is set to ACTIVE." |
| 218 | Try it | Sample `delete-table` result shows DELETING | S19 | PASS | "TableStatus": "DELETING" |
| 219 | Try it | DynamoDB local: operations immediate, state always ACTIVE | S22 | PASS | "operations occur immediately, and table state is always ACTIVE." |
| 220 | Try it | Sample of step 3 shows `Awards` type `S`; step 5 shows `N` | S16, S18 | PASS | S16 line 48-49: `"Awards": { "S": "10"`; S18 line 48-49: `"Awards": { "N": "10"` |
| 221 | Try it | Items with the same partition key are stored in sort-key order | S10 | PASS | "All items with the same partition key value are stored together, in sorted order by sort key value." |
| 222 | Try it | Most reads appear strongly consistent | S22 | PASS | "most reads appear to be strongly consistent." |
| 223 | Try it | DynamoDB local ignores provisioned throughput | S22 | PASS | "Provisioned throughput settings are ignored" |
| 224 | Try it | Step 3 models the WHERE-clause partition rule | S31 | PASS | "specify the partition in the WHERE clause, Athena scans the data only from that partition." |
| 225 | Try it | Sample log lines are tab-separated | S28 | PASS | "tab-separated values (TSV) format" |
| 226 | Try it | StartAt and States required | S34 | PASS | "StartAt (Required)" / "States (Required)" |
| 227 | Try it | StartAt must exactly match a state name | S34 | PASS | "must exactly match (is case sensitive)" |
| 228 | Try it | Choice goes to Default; no Default: error | S35 | PASS | "Default (Optional, Recommended)" / "no Default is provided, the" |
| 229 | Try it | Hello World definition is the example on the structure page | S34 | PASS | "A Hello World example of the Amazon States Language using a Pass state" |
| 230 | Try it | TestState Choice example sends `{"number": 2}` to `Equals 2` | S37 | PASS | `--input '{"number": 2}'` / `"nextState": "Equals 2"` |
| 231 | Try it | `asl_model.py`, `partitions.py`, their outputs | none | N/A | Tutorial's own scripts and run. |
| 232 | Try it | `--generate-cli-skeleton` generates and displays a customizable parameter template | S39 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 233 | Try it | `FunctionName`, `Timeout` match `--function-name`, `--timeout` | S5 | PASS | "--function-name my-function" / "--timeout 120" |
| 234 | Try it | `definition`, `roleArn`, `input`, `inspectionLevel` match the TestState CLI options | S37 | PASS | "--definition" / "--role-arn" / "--input" / "--inspection-level DEBUG" |
| 235 | Try it | `stateName` matches the page's parameter | S37 | PASS | "A complete state machine definition with stateName parameter" |
| 236 | Try it | `revealSecrets` matches the parameter | S37 | PASS | "If you set the revealSecrets parameter to false" |
| 237 | Try it | `mock` and `context` match the page headings | S37 | PASS | "Mocking service integrations" / "Using context field in the TestState API" / `--mock '{...` (by name only, as the page says). |
| 238 | Try it | Template shows INFO, which is the default level | S37 | PASS | "By default, Step Functions sets the inspectionLevel to INFO if you don't set a level." |
| 239 | Try it | Skeleton command and its output | none | N/A | Tutorial's own run. |
| 240 | Try it | Step 6: Lambda has pay-per-use billing; AWS points to its pricing page | S1 | PASS | "Pay-per-use billing" / "For pricing information, see AWS Lambda Pricing." |
| 241 | Try it | Athena tutorial uses live resources; you pay for queries | S26 | PASS | "The tutorial uses live resources, so you are charged for the queries that you run." |
| 242 | Try it | Sample data free; own S3 data files cost money | S26 | PASS | "You aren't charged for the sample data ... but if you upload your own data files to Amazon S3, charges do apply." |
| 243 | Try it | Standard workflows priced by state transition | S32 | PASS | "Priced by state transition" |
| 244 | Try it | Lambda read-along step 1 (Event Functions page, Create Event Function, Author from scratch) | S2 | PASS | "Open the Event Functions page of the Lambda console. Choose Create Event Function. Select Author from scratch." |
| 245 | Try it | Lambda step 2: Node.js 24 or Python 3.14; role with basic CloudWatch Logs permissions | S2 | PASS | "choose either Node.js 24 or Python 3.14" / "grants basic permissions to write to CloudWatch Logs." |
| 246 | Try it | Lambda step 3: paste, replace code, Deploy; don't rename handler | S2 | PASS | "replacing the code that Lambda created" / "choose Deploy" / "Be sure not to edit the name of this Python function." |
| 247 | Try it | Lambda step 4: `myTestEvent` with `length`/`width`, run icon | S2 | PASS | "For Event Name, enter myTestEvent." / "choose the run icon next to your test event" |
| 248 | Try it | Lambda step 5: delete function, log group, role | S2 | PASS | "delete it. You can also delete the log group ... and the execution role" |
| 249 | Try it | Athena step 1: bucket in same Region for query results | S26 | PASS | "Using the same AWS Region ... create a bucket in Amazon S3 to hold your Athena query results. You will configure this bucket to be your query output location." |
| 250 | Try it | Athena step 2: path in Location of query result box with `s3://` | S27 | PASS | "In the Location of query result box, enter the ... Prefix the path with s3://." |
| 251 | Try it | Athena step 3: `CREATE DATABASE mydatabase` | S27 | PASS | "To create a database named mydatabase, enter the following CREATE" |
| 252 | Try it | Athena step 4: table from CloudFront sample; first statement has an important limitation | S28 | PASS | "Do not use this example just yet as it has an important limitation" |
| 253 | Try it | Athena step 5: run a SQL query and see results | S29 | PASS | "you can run SQL queries on the table and see the results in Athena." |
| 254 | Try it | Athena step 6: no clean-up step on the pages; advice to delete | none | N/A | Tutorial's own labelled advice. |
| 255 | Try it | SF step 1: 20-30 minutes; Run Hello World | S38 | PASS | "Estimated duration: 20-30 minutes" / "choose Run Hello World" |
| 256 | Try it | SF step 2: Code button shows ASL | S38 | PASS | "Choose the { } Code button to view the ASL code." |
| 257 | Try it | SF step 3: cannot rename; draft, no resources yet | S38 | PASS | "You cannot rename a state machine after you create it." / "No resources have been created yet." |
| 258 | Try it | SF step 4: new role; execution `hello001`, input empty | S38 | PASS | "accept the default to Create a new role." / "Enter hello001 for the name of the execution." / "Leave the input field empty." |
| 259 | Try it | SF step 5: delete IAM roles, then state machine via Actions and Delete | S38 | PASS | "To delete the IAM roles" / "select the Actions drop down, then select Delete to delete the state machine." |
| 260 | How a tester uses it | You still write unit, integration and end-to-end tests | S8 | PASS | "you still write unit, integration and end-to-end tests." |
| 261 | How a tester uses it | Cloud tests give the most accurate measure of quality | S8 | PASS | "Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications." |
| 262 | How a tester uses it | You cannot fully replicate a cloud environment locally | S8 | PASS | "You cannot fully replicate a cloud environment locally." |
| 263 | How a tester uses it | Handler is a slim adapter passing only needed details | S8 | PASS | "should be a slim adapter that takes in event data and passes only the details that matter to your business logic" |
| 264 | How a tester uses it | It should extract and validate event and context data | S8 | PASS | "extracts and validates data from the incoming event and context objects" |
| 265 | How a tester uses it | Emulator tests may pass locally but fail in the cloud | S8 | PASS | "might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas." |
| 266 | How a tester uses it | Mock frameworks are limited for IAM or quota checks | S8 | PASS | "Mock frameworks are limited in testing or detecting AWS Identity and Access Management (IAM) policy or quota limitations." |
| 267 | How a tester uses it | Even a function calling no other service depends on timeout and memory | S8 | PASS | FAQ: "without calling any other services ... All Lambda function code has a dependency on timeout and memory settings" |
| 268 | How a tester uses it | Log permission cannot be accurately mocked or emulated | S8 | PASS | "This required permission cannot be accurately mocked or emulated." |
| 269 | How a tester uses it | Create uniquely named resources for each stack | S8 | PASS | "Automated test processes should create uniquely named resources for each stack." |
| 270 | How a tester uses it | Isolate load testing from production | S8 | PASS | "Load testing is another activity you should isolate from your production stack." |
| 271 | How a tester uses it | Environments need alerts and controls against spending | S8 | PASS | "environments should be configured with alerts and controls to avoid unnecessary spending." |
| 272 | How a tester uses it | Timeout near average duration raises timeout risk | S5 | PASS | "If the timeout value is close to the average duration of a function, there is a higher" |
| 273 | How a tester uses it | Use datasets at the upper bounds | S5 | PASS | "Tests often use small samples for convenience, but you should use datasets at the upper bounds of what is reasonably expected" |
| 274 | How a tester uses it | Sync returns error in response; async retried automatically | S3 | PASS | "view the error message in the response" / "Lambda handles retries automatically" |
| 275 | How a tester uses it | Don't assume the environment persists | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." |
| 276 | How a tester uses it | `/tmp` keeps content while frozen | S6 | PASS | "The directory content remains when the execution environment is frozen" |
| 277 | How a tester uses it | "So a test can pass on a reused environment because of state left behind" | none | PASS | Conclusion of the two cited sentences (S6 lines 196-206); explains them. |
| 278 | How a tester uses it | Cold starts more common in dev/test | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads." |
| 279 | How a tester uses it | Out of concurrency: throttling | S7 | PASS | "throttling (that is, they start to drop requests) if you run out of available concurrency." |
| 280 | How a tester uses it | Eventually consistent default; may miss a recent write | S11 | PASS | "eventually consistent (default)" / "might not reflect the results of a recently completed write operation." |
| 281 | How a tester uses it | ConsistentRead true gives the most up-to-date data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most" |
| 282 | How a tester uses it | GSI reads are always eventually consistent | S11 | PASS | "All reads from GSIs and streams are eventually" |
| 283 | How a tester uses it | DynamoDB local: most reads look strongly consistent | S22 | PASS | "most reads appear to be strongly consistent." |
| 284 | How a tester uses it | It ignores provisioned throughput | S22 | PASS | "Provisioned throughput settings are ignored" |
| 285 | How a tester uses it | "A local run therefore cannot show stale reads or throttling" | none | PASS | Conclusion of the two S22 sentences before it. |
| 286 | How a tester uses it | Expired items may be deleted any time, typically within days | S13 | PASS | "at any time, typically within a few days after their expiration." |
| 287 | How a tester uses it | TTL attribute: Number, Unix epoch, seconds | S13 | PASS | "Unix epoch time format at the seconds granularity." |
| 288 | How a tester uses it | Use filter expressions for Scan/Query | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 289 | How a tester uses it | Music item needs both key attributes | S10 | PASS | "Each item in the table must have these two attributes." |
| 290 | How a tester uses it | Primary key attribute is a scalar: string, number, binary | S10 | PASS | "must be a scalar ... string, number, or binary." |
| 291 | How a tester uses it | "In the tutorial's run, the item without the sort key was refused." | none | N/A | Page's own run. |
| 292 | How a tester uses it | Sample of step 3 showed a type the real output did not | none | N/A | Page's own comparison (see row 220 for the source facts). |
| 293 | How a tester uses it | WHERE on partition: scan only that partition | S31 | PASS | "Athena scans the data only from that partition." |
| 294 | How a tester uses it | MSCK REPAIR TABLE only with Hive-style partitions | S31 | PASS | "which works only with Hive-style" |
| 295 | How a tester uses it | Camel case S3 path: partitions not added to Glue Data Catalog | S31 | PASS | "in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 296 | How a tester uses it | Table must be registered before querying | S30 | PASS | "registered in Athena." |
| 297 | How a tester uses it | TestState enables unit tests | S37 | PASS | "enables you to write comprehensive unit tests for your state machines." |
| 298 | How a tester uses it | You can assert which Catch or Retry applies | S37 | PASS | "Error handling: Which Catch or Retry applies" |
| 299 | How a tester uses it | You can assert input after InputPath, in `afterInputPath` | S37 | PASS | "afterInputPath – Input after Step Functions applies the InputPath filter." |
| 300 | How a tester uses it | Mocking needed for Map, Parallel, Activity, `.sync`, `waitForTaskToken` | S37 | PASS | "Mocking is necessary if you need to test the following state types or service integration patterns - Map, Parallel, Activity, .sync service integrations and waitForTaskToken service integrations." |
| 301 | How a tester uses it | Console TestState does not yet support some enhancements | S37 | PASS | "The console TestState feature does not yet support some of the enhancements described in this document" |
| 302 | How a tester uses it | No rule true and no Default: error | S35 | PASS | "no Default is provided, the" (state machine throws an error) |
| 303 | How a tester uses it | Express steps may run more than once, each at least once | S32 | PASS | "can potentially run more than once, while each step in the workflow executes at least once." |
| 304 | How a tester uses it | "So check that a repeated step does no harm." | none | N/A | Advice to the reader. |
| 305 | Common mistakes | Don't rename the handler | S2 | PASS | "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 306 | Common mistakes | Lambda assumes the role automatically | S4 | PASS | "Lambda automatically assumes your execution role" |
| 307 | Common mistakes | Avoid manual `sts:AssumeRole` in function code | S4 | PASS | "You should avoid manually calling sts:AssumeRole" |
| 308 | Common mistakes | Trust policy must name the Lambda service principal | S4 | PASS | "trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service." |
| 309 | Common mistakes | Cloud cannot be fully replicated locally | S8 | PASS | "You cannot fully replicate a cloud environment locally." |
| 310 | Common mistakes | Emulator tests may pass locally and fail in cloud | S8 | PASS | "might provide successful results locally, but fail in the cloud" |
| 311 | Common mistakes | Handler should be a slim adapter | S8 | PASS | "should be a slim adapter" |
| 312 | Common mistakes | Timeout close to average duration is risky | S5 | PASS | "there is a higher" risk of unexpected timeout (S5 line 19). |
| 313 | Common mistakes | Don't assume environment persists | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." |
| 314 | Common mistakes | Background processes resume on reuse | S6 | PASS | "resume if Lambda reuses the execution environment." |
| 315 | Common mistakes | SDKs and tools use web-service endpoints by default | S22 | PASS | "By default, the AWS SDKs and tools use endpoints for the Amazon DynamoDB web service." |
| 316 | Common mistakes | You must specify the local endpoint | S22 | PASS | "you must specify the local endpoint:" |
| 317 | Common mistakes | Downloadable version is for development and testing only | S22 | PASS | "intended for development and testing purposes only." |
| 318 | Common mistakes | `-inMemory`: no data saved on stop | S22 | PASS | "none of the data is saved." |
| 319 | Common mistakes | Telemetry sent in the background if on | S23 | PASS | "sends telemetry data in the background" |
| 320 | Common mistakes | DynamoDB has no JOIN | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 321 | Common mistakes | Eventually consistent is the default | S11 | PASS | "eventually consistent (default)" |
| 322 | Common mistakes | Strong reads from GSI or stream not supported | S11 | PASS | "Strongly consistent reads from a global secondary index or a" |
| 323 | Common mistakes | Expired items deleted any time, typically within days | S13 | PASS | "at any time, typically within a few days after their expiration." |
| 324 | Common mistakes | Non-Number TTL attributes ignored | S13 | PASS | "not a Number type are ignored by the TTL process." |
| 325 | Common mistakes | LOCATION is a folder, not a file | S28 | PASS | "the LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 326 | Common mistakes | Camel case path: MSCK adds no partitions | S31 | PASS | "in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 327 | Common mistakes | MSCK works only with Hive-style | S31 | PASS | "which works only with Hive-style" |
| 328 | Common mistakes | Unpartitioned big buckets may hit S3 GET limits | S31 | PASS | "such queries may affect the GET request rate limits in Amazon S3 and lead to Amazon S3 exceptions." |
| 329 | Common mistakes | `StartAt` must match exactly, case sensitive | S34 | PASS | "must exactly match (is case sensitive)" |
| 330 | Common mistakes | No Default and no true rule: error | S35 | PASS | "no Default is provided, the" (throws an error) |
| 331 | Common mistakes | Choice states do not support End | S35 | PASS | "Choice states do not support the End field." |
| 332 | Common mistakes | No catchers for top-level failures | S36 | PASS | "but not for" (top-level state machine execution failures; line 12) |
| 333 | Common mistakes | Default: Step Functions fails the whole execution | S36 | PASS | "defaults to failing the entire state machine execution." |
| 334 | Common mistakes | Express steps may run more than once | S32 | PASS | "can potentially run more than once" |
| 335 | Common mistakes | Console TestState doesn't support mocking or Map/Parallel | S37 | PASS | "such as mocking service integrations, testing Map and Parallel states" |
| 336 | Common mistakes | Cannot rename a state machine | S38 | PASS | "You cannot rename a state machine after you create it." |
| 337 | Common mistakes | Provisioned concurrency incurs charges | S7 | PASS | "Using provisioned concurrency incurs additional charges to your account." |
| 338 | Common mistakes | Provisioned mode charges for provisioned capacity | S12 | PASS | "not how much of that provisioned capacity you actually consumed." |
| 339 | Common mistakes | Athena tutorial: charged for queries; own S3 data costs | S26 | PASS | "you are charged for the queries that you run" / "if you upload your own data files to Amazon S3, charges do apply." |
| 340 | What a tester can check | Callout "Tutorial advice", list of advice | none | PASS | The callout says "This list is the tutorial's own advice". It gives no tool fact beyond what the page supports (ConsistentRead, Choice branches, made-up credentials and an explicit endpoint all appear above with cites). |
| 341 | Key words | Serverless | none | PASS | "Lambda is a serverless compute service" / "run code without provisioning or managing servers" (What it is). |
| 342 | Key words | Event | none | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 343 | Key words | Handler | none | PASS | "the handler function is always the entry point to your code ... Lambda runs this method." |
| 344 | Key words | Context object | none | PASS | "The context object contains information about the function invocation and execution environment." |
| 345 | Key words | Trigger | none | PASS | "Some services can invoke a function with each new event, and this is called a trigger." |
| 346 | Key words | Event source mapping | none | PASS | "Lambda invokes the function with batches of records, which is called an event source mapping." |
| 347 | Key words | Synchronous invocation | none | PASS | "With synchronous invocation, you wait for the function to process the event and return a response." |
| 348 | Key words | Asynchronous invocation | none | PASS | "Lambda queues the event for processing and returns a response immediately." |
| 349 | Key words | Execution role | none | PASS | "A function's execution role is an IAM role that grants the function permission to access AWS services and resources." |
| 350 | Key words | Timeout | none | PASS | "maximum amount of time in seconds ... default is 3 seconds ... up to 900 seconds" |
| 351 | Key words | Execution environment | none | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime environment." |
| 352 | Key words | Cold start | none | PASS | "When Lambda has to initialize a new environment ... this is known as a cold start." |
| 353 | Key words | Concurrency | none | PASS | "Concurrency is the number of in-flight requests that a function is handling at the same time." |
| 354 | Key words | Reserved concurrency | none | PASS | "Reserved concurrency reserves a portion of the concurrency of your account for a function. There is no charge for configuring it." |
| 355 | Key words | Provisioned concurrency | none | PASS | "pre-initializes environment instances ... Using provisioned concurrency incurs additional charges." |
| 356 | Key words | Throttling | none | PASS | "it experiences throttling, which means that it starts to drop requests." |
| 357 | Key words | Table, item, attribute | none | PASS | "A table is a collection of items, and each item is a collection of attributes." |
| 358 | Key words | Primary key | none | PASS | "The primary key uniquely identifies each item in the table, so that no two items can have the same key." |
| 359 | Key words | Partition key | none | PASS | "DynamoDB uses the value of the partition key as input to an internal hash function. The output ... determines the partition." |
| 360 | Key words | Sort key | none | PASS | "all items with the same partition key value are stored together, in sorted order by sort key value." |
| 361 | Key words | Global secondary index | none | PASS | "A global secondary index has a partition key and sort key that can be different from those of the table." |
| 362 | Key words | Local secondary index | none | PASS | "A local secondary index has the same partition key as the table, but a different sort key." |
| 363 | Key words | Eventually consistent read | none | PASS | "eventually consistent, which is the default" / "might not reflect the results of a recently completed write." |
| 364 | Key words | Strongly consistent read | none | PASS | "If you set ConsistentRead to true, DynamoDB returns the most up-to-date data" / "not supported" for GSI or stream. |
| 365 | Key words | On-demand mode | none | PASS | "On-demand mode is the default and recommended throughput option for most workloads" / "pay-per-request pricing". |
| 366 | Key words | Provisioned mode | none | PASS | "you must specify the number of reads and writes per second" / "charged for the capacity that you provisioned". |
| 367 | Key words | Time To Live (TTL) | none | PASS | "Time To Live (TTL) is a method for deleting items that are no longer relevant" / "might delete items ... within a few days". |
| 368 | Key words | DynamoDB local | none | PASS | "The downloadable version is intended for development and testing purposes only." |
| 369 | Key words | Athena table | none | PASS | "The metadata in a table tells Athena where the data is located" / "Before querying data, a table must be registered in Athena." |
| 370 | Key words | Partition (Athena) | none | PASS | "specify the partition in the WHERE clause, Athena scans the data only from that partition." |
| 371 | Key words | Hive style partition | none | PASS | "Hive style partitions, whose data paths contain key value pairs connected by equal signs." |
| 372 | Key words | MSCK REPAIR TABLE | none | PASS | "loads new Hive partitions, and it works only with Hive-style partitions." |
| 373 | Key words | State machine | none | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states." |
| 374 | Key words | State | none | PASS | "Each step in a workflow is called a state." |
| 375 | Key words | Execution | none | PASS | "Instances of running workflows performing tasks are called executions." |
| 376 | Key words | Standard workflow | none | PASS | "exactly-once workflow execution, and they can run for up to one year." |
| 377 | Key words | Express workflow | none | PASS | "at-least-once workflow execution ... up to five minutes ... one or more steps ... can potentially run more than once." |
| 378 | Key words | Choice state | none | PASS | "A Choice state adds conditional logic to a state machine." / "Default is the name of the state to transition to if no Choice Rule evaluates to true." |
| 379 | Key words | TestState API | none | PASS | "accepts the definition of a state and executes it" / "test a state without creating a state machine". |
| 380 | Key words | Mock | none | PASS | "A mock lets you test state logic without calling the actual service." |
| 381 | Key words | Fake | none | PASS | "a fake is a mock that takes shortcuts to simplify or speed up testing." |
| 382 | Key words | Test case (unittest) | none | PASS | "A test case is the individual unit of testing, and it checks for a specific response to a particular set of inputs." |

Open FAILs after round 7: 0

Open FAILs: 0
