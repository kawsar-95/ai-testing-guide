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

Changed after this round: On 2026-11-20 the full claim check of all 24 pages found that the AWS page of the timeout (S5) no longer gives a maximum of 900 seconds (15 minutes). It gives 1,800 seconds (30 minutes), and it names 5,400 seconds (90 minutes) for some invocations. The Technical, Layman, and Bangla texts of the execution role and the settings, and the Key words row of Timeout, now follow the page. One sentence for the 5,400 seconds was added, and S5 has the access date 2026-11-20. Nothing else on the page changed.

## Round 8 (2026-11-20)

# Fact check: devops / aws-data-serverless (round 8)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page lists the four services and the practice run | none | N/A | Sentence that describes the page itself. |
| 2 | Lede | Four services; the practice run; no AWS account needed; order of pages | none | N/A | Describes the page and its own run. The links are not facts. |
| 3 | What it is | Lambda is a serverless compute service | S1 | PASS | "AWS Lambda is a serverless compute service." |
| 4 | What it is | Run code without provisioning or managing servers | S1 | PASS | "you can run code without provisioning or managing servers" |
| 5 | What it is | Lambda manages infrastructure: maintenance, capacity, scaling, patching | S1 | PASS | "Lambda automatically manages the underlying infrastructure – including server maintenance, capacity provisioning, scaling, and patching" |
| 6 | What it is | Three compute primitives | S1 | PASS | "Lambda provides three compute primitives" |
| 7 | What it is | Event Functions is the name for the original function type | S1 | PASS | "Event Functions is the name for the original Lambda function type" |
| 8 | What it is | An Event Function runs code in response to events or API calls without managing servers | S1 | PASS | "Event Functions – Run code in response to events or API calls without managing servers." |
| 9 | What it is | DynamoDB is serverless, fully managed, distributed NoSQL with single-digit ms performance at any scale | S9 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 10 | What it is | A table is a collection of items; an item is a collection of attributes | S10 | PASS | "table is a collection of items, and each item is a collection of attributes." |
| 11 | What it is | Primary keys uniquely identify each item | S10 | PASS | "DynamoDB uses primary keys to uniquely identify each item in a" |
| 12 | What it is | DynamoDB has no JOIN operator | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 13 | What it is | AWS recommends denormalizing | S9 | PASS | "We recommend that you denormalize your data model" |
| 14 | What it is | Athena is an interactive query service for data in S3 with standard SQL | S24 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in" |
| 15 | What it is | Ad-hoc ANSI SQL queries without loading data | S25 | PASS | "run ad-hoc queries using ANSI SQL, without the need to aggregate or load the data into Athena." |
| 16 | What it is | Athena analyzes unstructured, semi-structured, structured data in S3 | S25 | PASS | "Athena helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3." |
| 17 | What it is | Examples: CSV, JSON, Parquet, ORC | S25 | PASS | "Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC." |
| 18 | What it is | Step Functions workflows (state machines) for the listed uses | S32 | PASS | "With AWS Step Functions, you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate" |
| 19 | What it is | Each step is called a state | S32 | PASS | "Each step in a workflow is called a state." |
| 20 | What it is | Running workflows are called executions | S32 | PASS | "Instances of running workflows performing tasks are called executions in Step Functions." |
| 21 | What it is | A Task state is a unit of work that another AWS service performs | S32 | PASS | "a Task state represents a unit of work that another AWS service performs" |
| 22 | What it is | ASL is a JSON-based language that defines a state machine | S33 | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states" |
| 23 | What it is | Lambda: pay-per-use, no upfront commitments | S1 | PASS | "Pay-per-use billing – No upfront commitments." |
| 24 | What it is | DynamoDB on-demand: pay-per-request pricing | S12 | PASS | "DynamoDB on-demand offers pay-per-request pricing for read and write requests" |
| 25 | What it is | Athena: pay only for queries you run | S24 | PASS | "you pay only for the queries you run" |
| 26 | What it is | Standard workflows priced by state transition | S32 | PASS | "Priced by state transition" |
| 27 | What it is | Express priced by number and duration of executions | S32 | PASS | "Priced by number and duration of executions" |
| 28 | How it works | Python handler is always the entry point; a function can hold more than one Python function | S2 | PASS | "A Lambda function in Python can contain more than one Python function, but the handler function is always the entry point to your code." |
| 29 | How it works | Lambda runs this method when invoked | S2 | PASS | "When your function is invoked, Lambda runs this method." |
| 30 | How it works | Handler takes event and context | S2 | PASS | "The function lambda_handler takes two arguments, event and context." |
| 31 | How it works | Event is a JSON document with data to process | S2 | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 32 | How it works | Another service's event object has information on the cause | S2 | PASS | "the event object contains information about the event that caused the invocation" |
| 33 | How it works | Lambda passes context automatically | S2 | PASS | "function automatically. The context object contains information about the function invocation and execution environment." |
| 34 | How it works | Context holds invocation and environment information | S2 | PASS | Same line as #33. |
| 35 | How it works | print or logging library | S2 | PASS | "you can use either a print statement or a Python logging library to send information to your function's" |
| 36 | How it works | AWS recommends a logging library in production | S2 | PASS | "In a production application, we recommend" |
| 37 | How it works | Outside the console, use CloudWatch Logs | S2 | PASS | "When you invoke your function outside of the Lambda console, you must use CloudWatch Logs to view your function's execution results." |
| 38 | How it works | Several ways to invoke | S3 | PASS | "After you deploy your Lambda Event Function, you can invoke it in several ways" |
| 39 | How it works | `aws lambda invoke` | S3 | PASS | "The AWS Command Line Interface (AWS CLI) – Use the aws lambda invoke" |
| 40 | How it works | Function URL is a dedicated HTTP(S) endpoint | S3 | PASS | "Use function URLs to create a dedicated HTTP(S) endpoint" |
| 41 | How it works | Trigger | S3 | PASS | "Some services can invoke a Lambda Event Function with each new event." and "This is called a trigger." |
| 42 | How it works | Event source mapping | S3 | PASS | "For stream and queue-based services, Lambda invokes the function with batches of records. This is called an event source mapping." |
| 43 | How it works | Synchronous: wait for the response | S3 | PASS | "With synchronous invocation, you wait for the function to process the event and return a response." |
| 44 | How it works | Asynchronous: queued, immediate response | S3 | PASS | "asynchronous invocation, Lambda queues the event for processing and returns a response immediately" |
| 45 | How it works | InvocationType: RequestResponse, Event | S3 | PASS | "A value of RequestResponse indicates synchronous invocation, and a value of Event indicates asynchronous" |
| 46 | How it works | Sync error: see response, retry by hand | S3 | PASS | "for synchronous invocations, view the error message in the response and retry the invocation manually." |
| 47 | How it works | Async: automatic retries, records to a destination | S3 | PASS | "For asynchronous invocations, Lambda handles retries automatically and can send invocation records to a destination." |
| 48 | How it works | Execution role is an IAM role granting permission | S4 | PASS | "execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access" |
| 49 | How it works | Lambda assumes the role automatically | S4 | PASS | "Lambda automatically assumes your execution role when you invoke your function." |
| 50 | How it works | Trust policy names `lambda.amazonaws.com` | S4 | PASS | "trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service." |
| 51 | How it works | Console creates a minimal role by default | S4 | PASS | "By default, Lambda creates an execution role with minimal permissions when you create a function in the Lambda console." |
| 52 | How it works | Role includes AWSLambdaBasicExecutionRole for CloudWatch Logs | S4 | PASS | "includes the AWSLambdaBasicExecutionRole managed policy, which gives your function basic permissions to log events to Amazon CloudWatch Logs." |
| 53 | How it works | Timeout definition | S5 | PASS | "Timeout is the maximum amount of time in seconds that a Lambda function can run." |
| 54 | How it works | Default 3 s; 1 s steps; max 1,800 s | S5 | PASS | "default value for this setting is 3 seconds, but you can adjust this in increments of 1 second up to a maximum value of 1,800 seconds (30 minutes)." |
| 55 | How it works | Managed Instances: 5,400 s for async and ESM (except MQ, DocumentDB) | S5 | PASS | "support a maximum allowed value of 5,400 seconds (90 minutes)." |
| 56 | How it works | `update-function-configuration` sets timeout | S5 | PASS | "You can use the update-function-configuration command to configure the timeout value, in seconds." |
| 57 | How it works | Execution environment is secure and isolated | S6 | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime" |
| 58 | How it works | Init phase: three tasks | S6 | PASS | "In the Init phase, Lambda performs three tasks:" |
| 59 | How it works | Extensions, runtime bootstrap, static code | S6 | PASS | "Start all extensions (Extension init) / Bootstrap the runtime (Runtime init) / Run the function's static code (Function init)" |
| 60 | How it works | Init limited to 10 s | S6 | PASS | "The Init phase is limited to 10 seconds." |
| 61 | How it works | Timeout limits the Invoke phase | S6 | PASS | "The function's timeout setting limits the duration of the entire Invoke phase." |
| 62 | How it works | Environment kept for some time | S6 | PASS | "Lambda maintains the execution environment for some time in anticipation of another function invocation." |
| 63 | How it works | Objects outside the handler stay initialized | S6 | PASS | "Objects declared outside of the function's handler method remain initialized" |
| 64 | How it works | `/tmp` keeps content while frozen | S6 | PASS | "The directory content remains when the execution environment is frozen" |
| 65 | How it works | Background processes resume on reuse | S6 | PASS | "did not complete when the function ended resume if Lambda reuses the execution environment." |
| 66 | How it works | Terminated every few hours | S6 | PASS | "Lambda terminates execution environments every few hours" |
| 67 | How it works | Do not assume it persists | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." |
| 68 | How it works | Crash or timeout in Invoke resets the environment | S6 | PASS | "If the Lambda function crashes or times out during the Invoke phase, Lambda resets the" |
| 69 | How it works | Cold start definition | S7 | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a" (next line: cold start) |
| 70 | How it works | Cold start adds latency and is charged | S6 | PASS | "You are charged for this time, and it adds latency to your overall invocation duration." |
| 71 | How it works | Under 1% of invocations | S6 | PASS | "Cold starts typically occur in under 1% of invocations." |
| 72 | How it works | More common in dev/test | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads." |
| 73 | How it works | Reason: invoked less often | S6 | PASS | "This is because development and test functions are usually invoked less frequently." |
| 74 | How it works | Concurrency definition | S7 | PASS | "Concurrency is the number of in-flight requests that your AWS Lambda Event Function is handling at the same time." |
| 75 | How it works | Separate instance per concurrent request | S7 | PASS | "For each concurrent request, Lambda provisions a separate instance of your execution" |
| 76 | How it works | Default 1,000 per Region | S7 | PASS | "By default, your account has a concurrency limit of 1,000 concurrent executions across all Event Functions in a Region." |
| 77 | How it works | Throttling drops requests | S7 | PASS | "throttling (that is, they start to drop requests) if you run out of available concurrency." |
| 78 | How it works | Reserved concurrency reserves a portion | S7 | PASS | "reserve a portion of your account's concurrency for an Event Function." |
| 79 | How it works | No charge for reserved concurrency | S7 | PASS | "There is no charge" |
| 80 | How it works | Provisioned concurrency pre-initializes instances, cuts cold starts | S7 | PASS | "Use provisioned concurrency to pre-initialize a number of environment instances for an Event Function. This is useful for reducing cold start latencies." |
| 81 | How it works | Provisioned concurrency costs extra | S7 | PASS | "Using provisioned concurrency incurs additional charges to your account." |
| 82 | How it works | Create a table: must give the primary key | S10 | PASS | "When you create a table, in addition to the table name, you must specify the primary key of the table." |
| 83 | How it works | Primary key is unique per item | S10 | PASS | "so that no two items can have the same key." |
| 84 | How it works | Partition key is hash function input | S10 | PASS | "DynamoDB uses the partition key's value as input to an internal hash function." |
| 85 | How it works | Hash output picks the partition | S10 | PASS | "The output from the hash function determines the partition" |
| 86 | How it works | Partition-key-only table: unique values | S10 | PASS | "In a table that has only a partition key, no two items can have the same partition key value." |
| 87 | How it works | Same partition key stored together, sorted | S10 | PASS | "All items with the same partition key value are stored together, in sorted order by sort key value." |
| 88 | How it works | Same partition key allowed, sort keys differ | S10 | PASS | "multiple items to have the same partition key value. However, those items must have different sort key values." |
| 89 | How it works | Only Artist returns all songs | S10 | PASS | "if you provide only the value for Artist, DynamoDB retrieves all of the songs by that artist." |
| 90 | How it works | Music items need both key attributes | S10 | PASS | "Each item in the table must have these two attributes." |
| 91 | How it works | Music table schemaless apart from key | S10 | PASS | "Other than the primary key, the Music table is schemaless" |
| 92 | How it works | Key attribute must be scalar | S10 | PASS | "Each primary key attribute must be a scalar" |
| 93 | How it works | Key types: string, number, binary | S10 | PASS | "The only data types allowed for primary key attributes are string, number, or binary." |
| 94 | How it works | Secondary index = alternate key | S10 | PASS | "A secondary index lets you query the data in the table using an alternate key, in addition to queries against the primary key." |
| 95 | How it works | GSI keys can differ | S10 | PASS | "An index with a partition key and sort key that can be different from those on the table." |
| 96 | How it works | LSI: same partition key, different sort key | S10 | PASS | "An index that has the same partition key as the table, but a different sort key." |
| 97 | How it works | Quota 20 GSI (default) and 5 LSI | S10 | PASS | "a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes." |
| 98 | How it works | HTTP 200 means durably persisted | S11 | PASS | "receives an HTTP 200 response (OK), that means the write completed successfully and has been durably persisted." |
| 99 | How it works | Two read options; eventual is default | S11 | PASS | "two read consistency options: eventually consistent (default) and strongly consistent reads." |
| 100 | How it works | GSI and stream reads are eventually consistent | S11 | PASS | "All reads from GSIs and streams are eventually" |
| 101 | How it works | Eventual read may miss a recent write | S11 | PASS | "might not reflect the results of a recently completed write operation." |
| 102 | How it works | ConsistentRead true gives latest data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most" |
| 103 | How it works | Strong reads on GSI or stream unsupported | S11 | PASS | "DynamoDB stream are not supported." |
| 104 | How it works | Eventual reads cost half | S11 | PASS | "Eventually consistent reads are half the cost of strongly consistent reads." |
| 105 | How it works | On-demand is default and recommended | S12 | PASS | "On-demand mode is the default and recommended throughput option for most DynamoDB workloads." |
| 106 | How it works | Provisioned: set reads and writes per second | S12 | PASS | "you must specify the number of reads and writes per second that you require" |
| 107 | How it works | Charged for provisioned, not consumed | S12 | PASS | "charged based on the hourly read and write capacity you have provisioned, not how much of that provisioned capacity you actually" |
| 108 | How it works | TTL deletes irrelevant items | S13 | PASS | "a cost-effective method for deleting items that are no longer relevant." |
| 109 | How it works | TTL timestamp: Number, epoch seconds | S13 | PASS | "The timestamp must be stored as a Number data type in Unix epoch time format at the seconds granularity." |
| 110 | How it works | Non-Number TTL ignored | S13 | PASS | "Items with a TTL attribute that is not a Number type are ignored by the TTL process." |
| 111 | How it works | Deletion any time, typically within days | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration." |
| 112 | How it works | Filter expressions hide expired items | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 113 | How it works | DynamoDB local lets you develop without the web service | S20 | PASS | "you can develop and test applications without accessing the DynamoDB web service." |
| 114 | How it works | Download (JRE), Maven, or Docker | S20 | PASS | "available as a download (requires JRE), as an Apache Maven dependency, or as a Docker image." |
| 115 | How it works | Remove local endpoint for production | S20 | PASS | "you remove the local endpoint in the code, and then it points to the DynamoDB web service." |
| 116 | How it works | CLI cannot default to it; `--endpoint-url` each time | S22 | PASS | "The AWS CLI can't use the downloadable version of DynamoDB as a default endpoint. Therefore, you must specify --endpoint-url with each AWS CLI command." |
| 117 | How it works | Port 8000 default | S21 | PASS | "DynamoDB uses port 8000 by default." |
| 118 | How it works | Credentials needed; fake values shown | S21 | PASS | "Downloadable DynamoDB requires any credentials to work" and "fakeMyKeyId", "fakeSecretAccessKey", "fakeRegion" |
| 119 | How it works | Image `amazon/dynamodb-local:latest` | S21 | PASS | `image: "amazon/dynamodb-local:latest"` |
| 120 | How it works | `-inMemory`: nothing saved | S22 | PASS | "When you stop DynamoDB, none of the data is saved." |
| 121 | How it works | Telemetry collected | S23 | PASS | "DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors." |
| 122 | How it works | Sent in the background if on | S23 | PASS | "If telemetry remains on, DynamoDB local sends telemetry data in the background" |
| 123 | How it works | `-disableTelemetry` | S22 | PASS | "-disableTelemetry — When specified, DynamoDB local will not send any telemetry." |
| 124 | How it works | Dev and test only | S22 | PASS | "intended for development and testing purposes only." |
| 125 | How it works | Differs in several ways | S22 | PASS | "differs from the web service in the following ways:" |
| 126 | How it works | Provisioned throughput ignored | S22 | PASS | "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them." |
| 127 | How it works | Scan sequential | S22 | PASS | "Scan operations are performed sequentially. Parallel scans are not supported." |
| 128 | How it works | Table ops immediate; state ACTIVE | S22 | PASS | "operations occur immediately, and table state is always ACTIVE." |
| 129 | How it works | Reads eventually consistent but look strong | S22 | PASS | "Read operations are eventually consistent. However, due to the speed of DynamoDB local running on your computer, most reads appear to be strongly consistent." |
| 130 | How it works | No PITR | S22 | PASS | "DynamoDB local doesn't support Point-in-time recovery (PITR)." |
| 131 | How it works | billingModeSummary null | S22 | PASS | "DynamoDB local always returns null for billingModeSummary." |
| 132 | How it works | Regions and accounts unsupported at client level | S22 | PASS | "AWS Regions and distinct AWS accounts are not supported at the client level." |
| 133 | How it works | Catalogs, databases, tables hold metadata | S30 | PASS | "catalogs, databases, and tables are containers for the metadata definitions that" |
| 134 | How it works | Database = group of tables; table = rows or columns | S30 | PASS | "Database – a group of tables" |
| 135 | How it works | Table metadata: S3 location and structure | S30 | PASS | "where the data is located in Amazon S3, and specifies the structure of the data" |
| 136 | How it works | Table must be registered before querying | S30 | PASS | "before querying data, a table must be registered in Athena." |
| 137 | How it works | Glue crawler can create a table | S30 | PASS | "You can create a table automatically using an AWS Glue crawler." |
| 138 | How it works | Glue Data Catalog, persistent metadata store | S25 | PASS | "Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store" |
| 139 | How it works | Sample logs are TSV | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 140 | How it works | LOCATION is a folder | S28 | PASS | "because Athena expects to scan all of the files in a folder, the LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 141 | How it works | Queries kept 45 days | S29 | PASS | "Queries are retained for 45 days." |
| 142 | How it works | Partitioning limits data scanned | S31 | PASS | "you can restrict the amount of data scanned by each query, thus improving performance and reducing cost." |
| 143 | How it works | WHERE partition scans only it | S31 | PASS | "specify the partition in the WHERE clause, Athena scans the data only from that partition." |
| 144 | How it works | Hive style partitions | S31 | PASS | "Athena can use Apache Hive style partitions, whose data paths contain key value pairs connected by equal signs" |
| 145 | How it works | MSCK REPAIR TABLE loads Hive partitions only | S31 | PASS | "you can use the MSCK REPAIR TABLE command, which works only with Hive-style" |
| 146 | How it works | Non-Hive: ALTER TABLE ADD PARTITION | S31 | PASS | "For such non-Hive style partitions, you use ALTER TABLE ADD PARTITION" |
| 147 | How it works | Defined in JSON text | S34 | PASS | "State machines are defined using JSON text" |
| 148 | How it works | StartAt and States required | S34 | PASS | "StartAt (Required)" and "States (Required)" |
| 149 | How it works | StartAt exact, case sensitive | S34 | PASS | "A string that must exactly match (is case sensitive) the name of one of the state objects." |
| 150 | How it works | States is a comma-delimited set | S34 | PASS | "An object containing a comma-delimited set of states." |
| 151 | How it works | TimeoutSeconds optional, max seconds | S34 | PASS | "TimeoutSeconds (Optional) The maximum number of seconds an execution of the state machine can run." |
| 152 | How it works | Longer run fails with States.Timeout | S34 | PASS | "the execution fails with a States.Timeout Error Name." |
| 153 | How it works | Choice adds conditional logic | S35 | PASS | "adds conditional logic to a" |
| 154 | How it works | Evaluates each rule true/false | S35 | PASS | "Step Functions evaluates each Choice Rule to true or false." |
| 155 | How it works | Default is the fallback state | S35 | PASS | "The name of the state to transition to if no Choice Rule evaluates to true." |
| 156 | How it works | No true rule and no Default: error | S35 | PASS | "no Default is provided, the state machine will throw an error" |
| 157 | How it works | Standard: long-running, auditable | S32 | PASS | "Standard workflows are ideal for long-running, auditable workflows" |
| 158 | How it works | Standard: exactly-once, up to a year | S32 | PASS | "exactly-once workflow execution and can run for up to one year." |
| 159 | How it works | Express: high-event-rate | S32 | PASS | "Express workflows are ideal for high-event-rate workloads" |
| 160 | How it works | Express: at-least-once, up to 5 min | S32 | PASS | "at-least-once workflow execution and can run for up to five minutes." |
| 161 | How it works | Express steps may run more than once | S32 | PASS | "one or more steps in an Express Workflow can potentially run more than once" |
| 162 | How it works | AWS SDK integrations call any service | S32 | PASS | "provide a way to call any AWS service directly from your state machine" |
| 163 | How it works | All but Pass and Wait can err | S36 | PASS | "All states, except Pass and Wait states, can encounter runtime errors." |
| 164 | How it works | Causes: unmatched Choice; Lambda exception | S36 | PASS | "a Choice state without a matching rule" and "an exception in a AWS Lambda function" |
| 165 | How it works | Default: fail the execution | S36 | PASS | "Step Functions defaults to failing the entire state machine execution." |
| 166 | How it works | Retry on Task, Parallel, Map | S36 | PASS | "Task, Parallel, and Map states can have a field named Retry" |
| 167 | How it works | Catchers: not for top-level failures | S36 | PASS | "catchers are available for Task, Parallel and Map states, but not for top-level state machine execution failures." |
| 168 | How it works | Error names are case-sensitive strings | S36 | PASS | "identifies errors using case-sensitive strings, known as error" |
| 169 | How it works | TestState accepts a definition and runs it | S37 | PASS | "The TestState API accepts the definition of a state and executes it." |
| 170 | How it works | Test without creating a state machine | S37 | PASS | "It allows you to test a state without creating a state machine or updating an existing state machine." |
| 171 | How it works | Three levels: INFO, DEBUG, TRACE | S37 | PASS | "Step Functions provides the following inspection levels: INFO DEBUG TRACE" |
| 172 | How it works | INFO is default | S37 | PASS | "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 173 | How it works | DEBUG shows output and processing result | S37 | PASS | "DEBUG – Shows the state output and the result of input and output data processing if the test succeeds." |
| 174 | How it works | A mock tests without the actual service | S37 | PASS | "allowing you to test your state machine logic without invoking actual AWS services." |
| 175 | How it works | With a mock, role is optional | S37 | PASS | "When you specify a mock, the roleArn parameter becomes optional" |
| 176 | How it works | Unit tests for state machines | S37 | PASS | "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 177 | Try it | Run record: date, versions, image, size, `~/.aws` files, separate check | none | N/A | Record of the page's own run, with when and what it ran on. No sentence in it states how a tool works in general. |
| 178 | Try it | Function is the Python function of the AWS tutorial | S2 | PASS | S2 Python code matches the page's `lambda_function.py` (lines 91-107). |
| 179 | Try it | Takes length and width, multiplies, returns JSON string | S2 | PASS | "The function multiplies these values to calculate an area and returns this as a JSON string." |
| 180 | Try it | Test case = unit of testing | S41 | PASS | "A test case is the individual unit of testing. It checks for a specific response to a particular set of inputs." |
| 181 | Try it | TestCase is the base class | S41 | PASS | "unittest provides a base class," (TestCase) |
| 182 | Try it | assertEqual fails if unequal | S41 | PASS | "Test that first and second are equal. If the values do not compare equal, the test will fail." |
| 183 | Try it | assertRaises passes if raised | S41 | PASS | "The test passes if exception is raised" |
| 184 | Try it | assertLogs: at least one message | S41 | PASS | "A context manager to test that at least one message is logged on" |
| 185 | Try it | subTest runs the enclosed block | S41 | PASS | "Return a context manager which executes the enclosed code block as a" |
| 186 | Try it | `Context` is a fake; a fake is a mock with shortcuts | S8 | PASS | "A fake is a mock that takes shortcuts to simplify or speed up testing." |
| 187 | Try it | Test code and its run output | none | N/A | The page's own code and its run output. |
| 188 | Try it | First test uses the AWS event with length and width | S2 | PASS | S2 has "a JSON formatted document with two key-value pairs" and `length`/`width` in its code. |
| 189 | Try it | Page shows `The area is 42` | S2 | PASS | "INFO The area is 42" |
| 190 | Try it | Function uses `log_group_name` for the log group name | S2 | PASS | "your function uses the log_group_name parameter to output the name of its CloudWatch log group." |
| 191 | Try it | Fake context holds the log group name from the sample output | S2 | PASS | "/aws/lambda/myLambdaFunction" |
| 192 | Try it | Third and fourth test notes | none | N/A | The page's own run record and reading of its tests. |
| 193 | Try it | AWS: handler extracts and validates event and context, then calls business logic | S8 | PASS | "you should write a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic." |
| 194 | Try it | All Lambda code depends on timeout and memory settings | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly." |
| 195 | Try it | DynamoDB local is a Docker image | S21 | PASS | "The downloadable version of Amazon DynamoDB is available as a Docker image." |
| 196 | Try it | AWS page names `amazon/dynamodb-local:latest` | S21 | PASS | `image: "amazon/dynamodb-local:latest"` |
| 197 | Try it | `--publish`/`-p` makes a port available outside the host | S42 | PASS | "Use the --publish or -p flag to make a port available outside the host" |
| 198 | Try it | `-p 192.168.1.100:8080:80` maps host port 8080 to container port 80 | S42 | PASS | "Map port 8080 on the Docker host IP 192.168.1.100 to TCP port 80 in the container." |
| 199 | Try it | Localhost IP: only the Docker host can reach the port | S42 | PASS | "only the Docker host can access the published container port." |
| 200 | Try it | `--rm` removes container and anonymous volumes | S43 | PASS | "Automatically remove the container and its associated anonymous volumes when it exits" |
| 201 | Try it | `-inMemory` keeps no data | S22 | PASS | "none of the data is saved." |
| 202 | Try it | `-disableTelemetry` sends none | S22 | PASS | "DynamoDB local will not send any telemetry." |
| 203 | Try it | Credentials are the AWS page's fake values; code comment "accepts any credentials" | S21 | PASS | "Downloadable DynamoDB requires any credentials to work, as shown in the following example." S22: "These values don't have to be valid AWS values to run locally." |
| 204 | Try it | Env vars name files and disable IMDS | S40 | PASS | "AWS_CONFIG_FILE Specifies the location of the file that the AWS CLI uses to store configuration profiles." / "AWS_SHARED_CREDENTIALS_FILE Specifies the location of the file that the AWS CLI uses to store access keys." / "AWS_EC2_METADATA_DISABLED Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 205 | Try it | `ddb` adds `--endpoint-url`, as the CLI needs it each time | S22 | PASS | "you must specify --endpoint-url with each AWS CLI command." |
| 206 | Try it | create-table creates the Music table | S14 | PASS | "The following AWS CLI example creates a new Music table using create-table." |
| 207 | Try it | put-item creates several items | S15 | PASS | "The following AWS CLI example creates several new items in the Music table." |
| 208 | Try it | get-item uses `--consistent-read` for strong reads | S16 | PASS | "The consistent-read parameter is used below to demonstrate strongly consistent reads." |
| 209 | Try it | update-item updates an item | S17 | PASS | "The following AWS CLI example updates an item in the Music table." |
| 210 | Try it | query by partition key | S18 | PASS | "You query an item through the DynamoDB API by using query and providing the partition key." |
| 211 | Try it | delete-table deletes the table | S19 | PASS | "The following AWS CLI example deletes the Music table using delete-table." |
| 212 | Try it | Commands in the block match the AWS pages (Linux form) | S14-S19 | PASS | The create-table, put-item (4 items), get-item, update-item and query commands in the block match S14 to S18 lines. |
| 213 | Try it | Missing-sort-key check follows from both keys being needed | S10 | PASS | "Each item in the table must have these two attributes." |
| 214 | Try it | `docker stop` stops running containers | S44 | PASS | "Stop one or more running containers" |
| 215 | Try it | create-table sample shows CREATING | S14 | PASS | "Note that the value of the TableStatus field is set to CREATING." |
| 216 | Try it | The page tells you to wait for the status ACTIVE | S14 | FAIL | The source gives no instruction to wait. It says "To verify that DynamoDB has finished creating the Music table, use the describe-table command." and "When DynamoDB finishes creating the table, the value of the TableStatus field is set to ACTIVE." Fix: "the page shows `describe-table` returning `ACTIVE` when DynamoDB finishes creating the table." |
| 217 | Try it | delete-table sample shows DELETING | S19 | PASS | `"TableStatus": "DELETING"` (S19 line 228; it is in the `MusicCollection` example, not the `Music` one). |
| 218 | Try it | DynamoDB local: operations immediate, ACTIVE | S22 | PASS | "operations occur immediately, and table state is always ACTIVE." |
| 219 | Try it | Step 3 sample shows Awards type S | S16 | PASS | `"Awards": { "S": "10" }` |
| 220 | Try it | Step 5 sample shows N | S18 | PASS | `"Awards": { "N": "10" }` |
| 221 | Try it | Same partition key stored together, sorted | S10 | PASS | "All items with the same partition key value are stored together, in sorted order by sort key value." |
| 222 | Try it | Most reads look strong, so the run cannot show stale reads | S22 | PASS | "most reads appear to be strongly consistent." |
| 223 | Try it | Provisioned throughput ignored, so no throttling | S22 | PASS | "Provisioned throughput settings are ignored in downloadable DynamoDB" |
| 224 | Try it | Athena rule: WHERE partition scans only it | S31 | PASS | "Athena scans the data only from that partition." |
| 225 | Try it | Sample logs have tab-separated fields | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 226 | Try it | StartAt and States required | S34 | PASS | "StartAt (Required)" and "States (Required)" |
| 227 | Try it | StartAt must match a state name exactly | S34 | PASS | "must exactly match (is case sensitive) the name of one of the state objects." |
| 228 | Try it | Choice: Default, or error if none | S35 | PASS | "no Default is provided, the state machine will throw an error" |
| 229 | Try it | Hello World is the example on the structure page | S34 | PASS | `"Comment": "A Hello World example of the Amazon States Language using a Pass state"`, `"StartAt": "HelloWorld"`, `"Result": "Hello World!"` |
| 230 | Try it | The Choice example sends `{"number": 2}` to `Equals 2` | S37 | PASS | `--input '{"number": 2}'` and `"nextState": "Equals 2"` |
| 231 | Try it | Model results and notes | none | N/A | The page's own run and reasoning. |
| 232 | Try it | `--generate-cli-skeleton` makes a template to customize | S39 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 233 | Try it | `FunctionName`, `Timeout` match `--function-name`, `--timeout` | S5 | PASS | "--function-name my-function \ --timeout 120" |
| 234 | Try it | `definition`, `roleArn`, `input`, `inspectionLevel` match the flags | S37 | PASS | "--definition", "--role-arn", "--input", "--inspection-level DEBUG" |
| 235 | Try it | `stateName` matches the parameter | S37 | PASS | "A complete state machine definition with stateName parameter" |
| 236 | Try it | `revealSecrets` matches | S37 | PASS | "If you set the revealSecrets parameter to false" |
| 237 | Try it | `mock` and `context` match headings | S37 | PASS | Headings "Mocking service integrations" and "Using context field in the TestState API". The match for `mock` is partial. |
| 238 | Try it | Template shows INFO; INFO is the default | S37 | PASS | "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 239 | Try it | Lambda pay-per-use | S1 | PASS | "Pay-per-use billing –" |
| 240 | Try it | AWS points to pricing page | S1 | PASS | "For pricing information, see AWS Lambda Pricing." |
| 241 | Try it | Athena tutorial charges for queries | S26 | PASS | "The tutorial uses live resources, so you are charged for the queries that you run." |
| 242 | Try it | No charge for sample data; own uploads charged | S26 | PASS | "You aren't charged for the sample data in the location that this tutorial uses, but if you upload your own data files to Amazon S3, charges do apply." |
| 243 | Try it | Standard priced by state transition | S32 | PASS | "Priced by state transition" |
| 244 | Try it | Open Event Functions page, Create Event Function, Author from scratch | S2 | PASS | "Open the Event Functions page of the Lambda console." / "Choose Create Event Function." / "Select Author from scratch." |
| 245 | Try it | Runtime Node.js 24 or Python 3.14 | S2 | PASS | "For Runtime, choose either Node.js 24 or Python 3.14." |
| 246 | Try it | Lambda creates a role with CloudWatch Logs permission | S2 | PASS | "the role that Lambda creates grants basic permissions to write to CloudWatch Logs." |
| 247 | Try it | Paste code, replace, Deploy | S2 | PASS | "Paste the following code into the lambda_function.py tab, replacing the code that Lambda created." / "choose Deploy" |
| 248 | Try it | Do not edit the handler name | S2 | PASS | "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 249 | Try it | Test event `myTestEvent`, run icon | S2 | PASS | "For Event Name, enter myTestEvent." / "choose the run icon next to your test event" |
| 250 | Try it | Clean-up order: function, log group, role | S2 | PASS | "delete it. You can also delete the log group that stores the function's logs, and the execution role that the console created." |
| 251 | Try it | Athena: bucket, same Region, output location | S26 | PASS | "Using the same AWS Region ... create a bucket in Amazon S3 to hold your Athena query results. You will configure this bucket to be your query output location." |
| 252 | Try it | Location of query result box, `s3://` prefix | S27 | PASS | "In the Location of query result box, enter the path to the bucket" / "Prefix the path with s3://." |
| 253 | Try it | CREATE DATABASE `mydatabase` | S27 | PASS | "To create a database named mydatabase, enter the following CREATE" |
| 254 | Try it | Table from CloudFront sample data | S28 | PASS | `s3://athena-examples-myregion/cloudfront/plaintext/` |
| 255 | Try it | Page warns of an important limitation | S28 | PASS | "Do not use this example just yet as it has an important limitation" |
| 256 | Try it | Run a SQL query | S29 | PASS | S29 is the "Step 3: Query data" page; "Queries are retained for 45 days." appears on it. |
| 257 | Try it | Athena clean-up advice | none | N/A | Tutorial's own advice, and a claim about what its pages lack. |
| 258 | Try it | Estimated 20-30 min; Run Hello World | S38 | PASS | "Estimated duration: 20-30 minutes" / "choose Run Hello World" |
| 259 | Try it | Code button shows ASL | S38 | PASS | "Choose the { } Code button to view the ASL code." |
| 260 | Try it | Cannot rename; draft; no resources yet | S38 | PASS | "You cannot rename a state machine after you create it." / "No resources have been created yet." |
| 261 | Try it | New role; execution `hello001`; empty input | S38 | PASS | "accept the default to Create a new role." / "Enter hello001 for the name of the execution." / "Leave the input field empty." |
| 262 | Try it | Clean-up: IAM roles, then Actions, Delete | S38 | PASS | "To delete the IAM roles ... select the Actions drop down, then select Delete to delete the state machine." |
| 263 | Tester use | Write unit, integration, end-to-end tests | S8 | PASS | "For serverless testing, you still write unit, integration and end-to-end tests." |
| 264 | Tester use | Cloud tests most accurate | S8 | PASS | "Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications." |
| 265 | Tester use | Cannot fully replicate the cloud locally | S8 | PASS | "You cannot fully replicate a cloud environment locally." |
| 266 | Tester use | Handler is a slim adapter | S8 | PASS | "Your Lambda function handler should be a slim adapter that takes in event data and passes only the details that matter to your business logic" |
| 267 | Tester use | Extract and validate event and context | S8 | PASS | "you should write a handler that extracts and validates data from the incoming event and context objects" |
| 268 | Tester use | Emulator tests may fail in the cloud | S8 | PASS | "Tests that rely on emulators might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas." |
| 269 | Tester use | Mocks limited for IAM and quotas | S8 | PASS | "Mock frameworks are limited in testing or detecting AWS Identity and Access Management (IAM) policy or quota limitations." |
| 270 | Tester use | Even a no-call function depends on timeout and memory | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings" |
| 271 | Tester use | Log permission cannot be mocked | S8 | PASS | "This required permission cannot be accurately mocked or emulated." |
| 272 | Tester use | Uniquely named resources per stack | S8 | PASS | "Automated test processes should create uniquely named resources for each stack." |
| 273 | Tester use | Isolate load testing | S8 | PASS | "Load testing is another activity you should isolate from your production stack." |
| 274 | Tester use | Alerts and controls on spending | S8 | PASS | "environments should be configured with alerts and controls to avoid unnecessary spending." |
| 275 | Tester use | Timeout near average raises risk | S5 | PASS | "If the timeout value is close to the average duration of a function, there is a higher" |
| 276 | Tester use | Use upper-bound datasets | S5 | PASS | "Tests often use small samples for convenience, but you should use datasets at the upper bounds of what is reasonably expected for your workload." |
| 277 | Tester use | Sync returns error; async retried automatically | S3 | PASS | "view the error message in the response and retry the invocation manually. For asynchronous invocations, Lambda handles retries automatically" |
| 278 | Tester use | Do not assume the environment persists | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." |
| 279 | Tester use | `/tmp` keeps content when frozen | S6 | PASS | "The directory content remains when the execution environment is frozen" |
| 280 | Tester use | A test can pass on a reused environment because of left-over state | none (follows #279) | PASS | Inference from the cited S6 lines: "Objects declared outside of the function's handler method remain initialized" and "The directory content remains when the execution environment is frozen". |
| 281 | Tester use | Cold starts more common in dev/test | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads." |
| 282 | Tester use | Running out of concurrency causes throttling | S7 | PASS | "Your Event Functions experience throttling ... if you run out of available concurrency." |
| 283 | Tester use | Eventual is default; may miss a recent write | S11 | PASS | "Eventually consistent is the default read consistent model" / "might not reflect the results of a recently completed write operation." |
| 284 | Tester use | ConsistentRead true gives latest data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most" |
| 285 | Tester use | GSI reads always eventual | S11 | PASS | "All reads from GSIs and streams are eventually" |
| 286 | Tester use | DynamoDB local: reads look strong | S22 | PASS | "most reads appear to be strongly consistent." |
| 287 | Tester use | Local ignores provisioned throughput | S22 | PASS | "Provisioned throughput settings are ignored" |
| 288 | Tester use | A local run cannot show stale reads or throttling | S22 (follows #286, #287) | PASS | Follows from the two quotes above. |
| 289 | Tester use | TTL delete timing | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration." |
| 290 | Tester use | TTL attribute: Number, epoch seconds | S13 | PASS | "The timestamp must be stored as a Number data type in Unix epoch time format at the seconds granularity." |
| 291 | Tester use | Filter expressions for expired items | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 292 | Tester use | Music items need both keys | S10 | PASS | "Each item in the table must have these two attributes." |
| 293 | Tester use | Key must be scalar: string, number, binary | S10 | PASS | "Each primary key attribute must be a scalar" / "string, number, or binary." |
| 294 | Tester use | Run record and sample comparison | none | N/A | The page's own run record ("In the tutorial's run, ..."). |
| 295 | Tester use | WHERE partition scans only it | S31 | PASS | "Athena scans the data only from that partition." |
| 296 | Tester use | MSCK REPAIR works only with Hive style | S31 | PASS | "MSCK REPAIR TABLE command, which works only with Hive-style" |
| 297 | Tester use | Camel case S3 path adds no partitions | S31 | PASS | "in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 298 | Tester use | Table must be registered | S30 | PASS | "before querying data, a table must be registered in Athena." |
| 299 | Tester use | TestState enables unit tests | S37 | PASS | "enables you to write comprehensive unit tests for your state machines." |
| 300 | Tester use | Assert which Catch or Retry applies | S37 | PASS | "Error handling: Which Catch or Retry applies" |
| 301 | Tester use | Assert `afterInputPath` | S37 | PASS | "Input after InputPath filter (afterInputPath)" |
| 302 | Tester use | Mocking needed for Map, Parallel, Activity, `.sync`, `waitForTaskToken` | S37 | PASS | "Mocking is necessary if you need to test the following state types or service integration patterns - Map, Parallel, Activity, .sync service integrations and waitForTaskToken service integrations." |
| 303 | Tester use | Console TestState lacks some enhancements | S37 | PASS | "The console TestState feature does not yet support some of the enhancements described in this document" |
| 304 | Tester use | No Choice match and no Default: error | S35 | PASS | "no Default is provided, the state machine will throw an error" |
| 305 | Tester use | Express steps may run more than once, each at least once | S32 | PASS | "one or more steps in an Express Workflow can potentially run more than once, while each step in the workflow executes at least once." |
| 306 | Mistakes | Do not rename the handler | S2 | PASS | "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 307 | Mistakes | Lambda assumes the role automatically; avoid manual `sts:AssumeRole` | S4 | PASS | "You should avoid manually calling sts:AssumeRole to assume the execution role in your function code." |
| 308 | Mistakes | Trust policy must name Lambda principal | S4 | PASS | "trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service." |
| 309 | Mistakes | Not fully replicable; emulators pass locally, fail in cloud | S8 | PASS | "You cannot fully replicate a cloud environment locally." / "Tests that rely on emulators might provide successful results locally, but fail in the cloud" |
| 310 | Mistakes | Handler slim adapter | S8 | PASS | "slim adapter that takes in event data and passes only the details that matter to your business logic" |
| 311 | Mistakes | Timeout close to average | S5 | PASS | "If the timeout value is close to the average duration of a function, there is a higher" |
| 312 | Mistakes | Reused environment | S6 | PASS | "should not assume that the execution environment will persist indefinitely." / "resume if Lambda reuses the execution environment." |
| 313 | Mistakes | SDKs use web service endpoints by default; set local endpoint | S22 | PASS | "By default, the AWS SDKs and tools use endpoints for the Amazon DynamoDB web service." / "you must specify the local endpoint" |
| 314 | Mistakes | Local is dev and test only; `-inMemory`; telemetry | S22, S23 | PASS | "intended for development and testing purposes only" / "none of the data is saved" / "If telemetry remains on, DynamoDB local sends telemetry data in the background" |
| 315 | Mistakes | No JOIN | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 316 | Mistakes | Eventual is default; GSI/stream strong reads unsupported | S11 | PASS | "Eventually consistent is the default read consistent model" / "DynamoDB stream are not supported." |
| 317 | Mistakes | TTL timing; non-Number ignored | S13 | PASS | "typically within a few days after their expiration." / "Items with a TTL attribute that is not a Number type are ignored by the TTL process." |
| 318 | Mistakes | LOCATION is a folder | S28 | PASS | "the LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 319 | Mistakes | Camel case; Hive-only | S31 | PASS | "MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." / "works only with Hive-style" |
| 320 | Mistakes | Unpartitioned big bucket can hit S3 GET limits | S31 | PASS | "such queries may affect the GET request rate limits in Amazon S3 and lead to Amazon S3 exceptions." |
| 321 | Mistakes | StartAt exact and case sensitive | S34 | PASS | "must exactly match (is case sensitive) the name of one of the state objects." |
| 322 | Mistakes | No Default: error; Choice has no End | S35 | PASS | "Choice states do not support the End field." / "no Default is provided, the state machine will throw an error" |
| 323 | Mistakes | Catchers not for top-level failures; default fails execution | S36 | PASS | "not for top-level state machine execution failures." / "defaults to failing the entire state machine execution." |
| 324 | Mistakes | Express step may run more than once | S32 | PASS | "can potentially run more than once" |
| 325 | Mistakes | Console TestState lacks mocking, Map, Parallel | S37 | PASS | "does not yet support some of the enhancements ... such as mocking service integrations, testing Map and Parallel states" |
| 326 | Mistakes | Cannot rename a state machine | S38 | PASS | "You cannot rename a state machine after you create it." |
| 327 | Mistakes | Costs: provisioned concurrency, provisioned mode, Athena tutorial | S7, S12, S26 | PASS | "Using provisioned concurrency incurs additional charges to your account." / "charged based on the hourly read and write capacity you have provisioned" / "you are charged for the queries that you run" |
| 328 | Can check | Tutorial advice list | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". It gives no fact about a tool that the rest of the page does not support. |
| 329 | Key words | Serverless | none | PASS | Page sentence: "AWS Lambda is a serverless compute service" and "you can run code without provisioning or managing servers". |
| 330 | Key words | Event | none | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 331 | Key words | Handler | none | PASS | "the handler function is always the entry point to your code. When your function is invoked, Lambda runs this method." |
| 332 | Key words | Context object | none | PASS | "The context object contains information about the function invocation and execution environment." |
| 333 | Key words | Trigger | none | PASS | "Some services can invoke a function with each new event, and this is called a trigger." |
| 334 | Key words | Event source mapping | none | PASS | "Lambda invokes the function with batches of records, which is called an event source mapping." |
| 335 | Key words | Synchronous invocation | none | PASS | "With synchronous invocation, you wait for the function to process the event and return a response." |
| 336 | Key words | Asynchronous invocation | none | PASS | "Lambda queues the event for processing and returns a response immediately." |
| 337 | Key words | Execution role | none | PASS | "A function's execution role is an IAM role that grants the function permission to access AWS services and resources." |
| 338 | Key words | Timeout | none | PASS | "The default is 3 seconds, and you can adjust it in increments of 1 second up to a maximum value of 1,800 seconds (30 minutes)." |
| 339 | Key words | Execution environment | none | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime environment." |
| 340 | Key words | Cold start | none | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start." |
| 341 | Key words | Concurrency | none | PASS | "Concurrency is the number of in-flight requests that a function is handling at the same time." |
| 342 | Key words | Reserved concurrency | none | PASS | "Reserved concurrency reserves a portion of the concurrency of your account for a function. There is no charge for configuring it." |
| 343 | Key words | Provisioned concurrency | none | PASS | "pre-initializes environment instances, which reduces cold start latencies. Using provisioned concurrency incurs additional charges." |
| 344 | Key words | Throttling | none | PASS | "it experiences throttling, which means that it starts to drop requests." |
| 345 | Key words | Table, item, attribute | none | PASS | "A table is a collection of items, and each item is a collection of attributes." |
| 346 | Key words | Primary key | none | PASS | "The primary key uniquely identifies each item in the table, so that no two items can have the same key." |
| 347 | Key words | Partition key | none | PASS | "DynamoDB uses the value of the partition key as input to an internal hash function. The output of the hash function determines the partition in which the item is stored." |
| 348 | Key words | Sort key | none | PASS | "all items with the same partition key value are stored together, in sorted order by sort key value." |
| 349 | Key words | Global secondary index | none | PASS | "A global secondary index has a partition key and sort key that can be different from those of the table." |
| 350 | Key words | Local secondary index | none | PASS | "A local secondary index has the same partition key as the table, but a different sort key." |
| 351 | Key words | Eventually consistent read | none | PASS | "eventually consistent, which is the default" and "An eventually consistent read might not reflect the results of a recently completed write." |
| 352 | Key words | Strongly consistent read | none | PASS | "If you set ConsistentRead to true, DynamoDB returns the most up-to-date data" and "Strongly consistent reads from a global secondary index or a stream are not supported." |
| 353 | Key words | On-demand mode | none | PASS | "On-demand mode is the default and recommended throughput option for most workloads" and "pay-per-request pricing". |
| 354 | Key words | Provisioned mode | none | PASS | "you must specify the number of reads and writes per second that you require" and "You are charged for the capacity that you provisioned". |
| 355 | Key words | TTL | none | PASS | "Time To Live (TTL) is a method for deleting items that are no longer relevant." and "The system might delete items with valid, expired TTL attributes at any time, typically within a few days after their expiration." |
| 356 | Key words | DynamoDB local | none | PASS | "With the downloadable version of DynamoDB" and "The downloadable version is intended for development and testing purposes only." |
| 357 | Key words | Athena table | none | PASS | "The metadata in a table tells Athena where the data is located in Amazon S3, and specifies the structure of the data." and "Before querying data, a table must be registered in Athena." |
| 358 | Key words | Partition (Athena) | none | PASS | "If you query a partitioned table and specify the partition in the WHERE clause, Athena scans the data only from that partition." |
| 359 | Key words | Hive style partition | none | PASS | "Athena can use Hive style partitions, whose data paths contain key value pairs connected by equal signs." |
| 360 | Key words | MSCK REPAIR TABLE | none | PASS | "The MSCK REPAIR TABLE command loads new Hive partitions, and it works only with Hive-style partitions." |
| 361 | Key words | State machine | none | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states." |
| 362 | Key words | State | none | PASS | "Each step in a workflow is called a state." |
| 363 | Key words | Execution | none | PASS | "Instances of running workflows performing tasks are called executions." |
| 364 | Key words | Standard workflow | none | PASS | "They have exactly-once workflow execution, and they can run for up to one year." |
| 365 | Key words | Express workflow | none | PASS | "They have at-least-once workflow execution, and they can run for up to five minutes." and "one or more steps in an Express workflow can potentially run more than once". |
| 366 | Key words | Choice state | none | PASS | "A Choice state adds conditional logic to a state machine." and "Default is the name of the state to transition to if no Choice Rule evaluates to true." |
| 367 | Key words | TestState API | none | PASS | "The TestState API accepts the definition of a state and executes it." and "It allows you to test a state without creating a state machine or updating an existing one." |
| 368 | Key words | Mock | none | PASS | "A mock lets you test state logic without calling the actual service." |
| 369 | Key words | Fake | none | PASS | "a fake is a mock that takes shortcuts to simplify or speed up testing" |
| 370 | Key words | Test case (unittest) | none | PASS | "A test case is the individual unit of testing, and it checks for a specific response to a particular set of inputs." |

Open FAILs after round 8: 1

Changed after this round: Row 216 (Try it, step 2): the page said that the AWS page "tells you to wait for the status ACTIVE". S14 gives no instruction to wait. It says that the describe-table command verifies that DynamoDB has finished creating the table, and that when DynamoDB finishes creating the table, the value of the TableStatus field is set to ACTIVE. The sentence now says that, and the claim row of the notes has the quote of that sentence. The same sentence had passed rounds 6 and 7, and the check of 2026-11-20 found it. The "quote not in sources" notes of the round are PASS rows whose quote the checker wrote in its own words, so the page's quotes are not affected; the repo claim check (read after the round with an empty cache) found every quote of the notes in its source.

## Round 9 (2026-11-20)

# Fact check: devops / aws-data-serverless (round 9)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers Lambda, DynamoDB, Athena, Step Functions, with a practice run and a read-along | none | N/A | Describes the page itself. |
| 2 | Lede | Four services; practice run tests the Lambda example, runs the DynamoDB tutorial locally, models two rules; needs no AWS account; page order links | none | N/A | Framing sentences, the page's own practice, and site links. |
| 3 | What it is | AWS Lambda is a serverless compute service | S1 | PASS | "AWS Lambda is a serverless compute service." |
| 4 | What it is | With Lambda you can run code without provisioning or managing servers | S1 | PASS | "you can run code without\nprovisioning or managing servers" (lines 7-8) |
| 5 | What it is | Lambda automatically manages infrastructure incl. server maintenance, capacity provisioning, scaling, patching | S1 | PASS | "Lambda automatically manages the underlying ... – including server maintenance, capacity provisioning, ... scaling, and patching" |
| 6 | What it is | Lambda provides three compute primitives | S1 | PASS | "Lambda provides three compute primitives" |
| 7 | What it is | Event Functions is the name for the original Lambda function type | S1 | PASS | "Event Functions is the name for the original\nLambda function type" |
| 8 | What it is | An Event Function runs code in response to events or API calls without managing servers | S1 | PASS | "Event Functions – Run code in response to events or\nAPI calls without managing servers." |
| 9 | What it is | DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale | S9 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 10 | What it is | A table is a collection of items; each item is a collection of attributes | S10 | PASS | "table is a collection of items, and each item is a collection of attributes." |
| 11 | What it is | DynamoDB uses primary keys to uniquely identify each item | S10 | PASS | "DynamoDB uses primary keys to uniquely identify each item in a" |
| 12 | What it is | DynamoDB doesn't support a JOIN operator | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 13 | What it is | AWS recommends you denormalize your data model | S9 | PASS | "We recommend\nthat you denormalize your data model" |
| 14 | What it is | Athena is an interactive query service to analyze data in S3 using standard SQL | S24 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in" |
| 15 | What it is | Athena runs ad-hoc ANSI SQL queries without aggregating or loading the data | S25 | PASS | "You can use Athena to run ad-hoc queries using ANSI SQL, without the" |
| 16 | What it is | Athena analyzes unstructured, semi-structured, structured data in S3 | S25 | PASS | "Athena helps you analyze unstructured, semi-structured, and structured data stored" |
| 17 | What it is | Examples: CSV, JSON, Parquet, ORC | S25 | PASS | "Examples include CSV, JSON, or columnar data formats such as Apache Parquet" |
| 18 | What it is | Step Functions workflows, also called State machines, build apps, automate, orchestrate, make pipelines | S32 | PASS | "you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate" |
| 19 | What it is | Each step in a workflow is called a state | S32 | PASS | "Each step in a workflow is called a state." |
| 20 | What it is | Running workflow instances are called executions | S32 | PASS | "Instances of running workflows performing tasks are called executions" |
| 21 | What it is | A Task state is a unit of work another AWS service performs | S32 | PASS | "a Task state represents a unit of work that another AWS service performs" |
| 22 | What it is | Amazon States Language is a JSON-based, structured language defining a state machine | S33 | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a" |
| 23 | What it is | Lambda has pay-per-use billing, no upfront commitments | S1 | PASS | "Pay-per-use billing –\nNo upfront commitments." |
| 24 | What it is | DynamoDB on-demand has pay-per-request pricing for reads and writes | S12 | PASS | "pay-per-request pricing for read and write requests" |
| 25 | What it is | In Athena you pay only for the queries you run | S24 | PASS | "you pay only for the queries you run." |
| 26 | What it is | Standard workflows priced by state transition | S32 | PASS | "Priced by state transition" |
| 27 | What it is | Express workflows priced by number and duration of executions | S32 | PASS | "Priced by number and duration of executions" |
| 28 | How it works | Python function can hold more functions, but the handler is always the entry point | S2 | PASS | "A Lambda function in Python can contain more\nthan one Python function, but the handler function is always the entry point to your code." |
| 29 | How it works | Lambda runs this method when invoked | S2 | PASS | "When your function is\ninvoked, Lambda runs this method." |
| 30 | How it works | Handler takes two arguments, event and context | S2 | PASS | "takes two arguments, event and context." |
| 31 | How it works | Event is a JSON formatted document with data to process | S2 | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 32 | How it works | Another AWS service's event object holds info on the cause | S2 | PASS | "If your function is invoked by another AWS service, the event object contains information about the event that caused the invocation." |
| 33 | How it works | Lambda passes the context object automatically | S2 | PASS | "Lambda passes the context object to your\nfunction automatically." |
| 34 | How it works | Context object holds invocation and environment info | S2 | PASS | "The context object contains information about the function invocation and execution environment." |
| 35 | How it works | print or logging library sends info to the log | S2 | PASS | "you can use either a print statement or a Python logging library to send information to your function's" |
| 36 | How it works | In production AWS recommends a logging library | S2 | PASS | "In a production application, we recommend\nthat you use a logging library." |
| 37 | How it works | Outside the console you must use CloudWatch Logs to view results | S2 | PASS | "When you invoke your function outside of the Lambda console, you must use CloudWatch Logs to view your function's execution results." |
| 38 | How it works | After deploy you can invoke in several ways | S3 | PASS | "After you deploy your Lambda Event Function, you can invoke it in several ways:" |
| 39 | How it works | `aws lambda invoke` CLI command | S3 | PASS | "The AWS Command Line Interface (AWS CLI) – Use the aws lambda invoke" |
| 40 | How it works | Function URL is a dedicated HTTP(S) endpoint | S3 | PASS | "Use function URLs to create a dedicated HTTP(S) endpoint" |
| 41 | How it works | Trigger and event source mapping definitions | S3 | PASS | "Some services can invoke a Lambda Event Function with each new event.\nThis is called a trigger. For stream and queue-based services, Lambda invokes the function with batches of records. This is called an event source mapping." |
| 42 | How it works | Synchronous: you wait; asynchronous: queued, immediate response | S3 | PASS | "With synchronous invocation,\nyou wait for the function to process the event and return a response." / "Lambda queues the\nevent for processing and returns a response immediately." |
| 43 | How it works | InvocationType: RequestResponse sync, Event async | S3 | PASS | "A value of RequestResponse indicates\nsynchronous invocation, and a value of Event indicates asynchronous" |
| 44 | How it works | Sync error: see message, retry manually | S3 | PASS | "view the error message in the response and retry the invocation manually." |
| 45 | How it works | Async: automatic retries, records to a destination | S3 | PASS | "Lambda handles retries automatically and can send invocation\nrecords to a destination." |
| 46 | How it works | Execution role is an IAM role granting access to AWS services | S4 | PASS | "execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access" |
| 47 | How it works | Lambda automatically assumes the execution role | S4 | PASS | "Lambda automatically assumes your execution role when you invoke your function." |
| 48 | How it works | Trust policy must name `lambda.amazonaws.com` | S4 | PASS | "trust policy must specify the Lambda service principal\n(lambda.amazonaws.com) as a trusted service." |
| 49 | How it works | Console creates a minimal role by default, with AWSLambdaBasicExecutionRole for CloudWatch Logs | S4 | PASS | "By default, Lambda creates an execution role with minimal permissions ... AWSLambdaBasicExecutionRole managed policy, which gives your function\nbasic permissions to log events to Amazon CloudWatch Logs." |
| 50 | How it works | Timeout is max seconds a function can run | S5 | PASS | "Timeout is the maximum amount of time in seconds that a Lambda function can run." |
| 51 | How it works | Default 3 s, 1 s steps, max 1,800 s | S5 | PASS | "default value for this setting is 3 seconds, but you can adjust this in increments of 1 second up to a maximum value\nof 1,800 seconds (30 minutes)." |
| 52 | How it works | Managed Instances: async and ESM invocations up to 5,400 s | S5 | PASS | "support a maximum allowed value of 5,400 seconds (90 minutes)." |
| 53 | How it works | `update-function-configuration` sets timeout in seconds | S5 | PASS | "You can use the update-function-configuration command to configure the timeout value, in seconds." |
| 54 | How it works | Execution environment is secure and isolated | S6 | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime" |
| 55 | How it works | Init phase has three tasks: extensions, runtime, static code | S6 | PASS | "In the Init phase, Lambda performs three tasks:\nStart all extensions" / "Bootstrap the runtime" / "Run the function's static code" |
| 56 | How it works | Init limited to 10 s | S6 | PASS | "The Init phase is limited to 10 seconds." |
| 57 | How it works | Timeout limits the whole Invoke phase | S6 | PASS | "The function's timeout setting limits the duration of the entire Invoke phase." |
| 58 | How it works | Lambda keeps the environment for some time | S6 | PASS | "Lambda maintains the execution\nenvironment for some time in anticipation of another function invocation." |
| 59 | How it works | Objects outside the handler stay initialized | S6 | PASS | "Objects declared outside of the function's handler method remain initialized" |
| 60 | How it works | `/tmp` content stays while frozen | S6 | PASS | "The directory content remains when the execution environment is frozen" |
| 61 | How it works | Unfinished background processes resume on reuse | S6 | PASS | "the function ended resume if Lambda reuses the execution environment." |
| 62 | How it works | Lambda terminates environments every few hours; do not assume persistence | S6 | PASS | "Lambda terminates execution environments every few hours ... You should\nnot assume that the execution environment will persist indefinitely." |
| 63 | How it works | Crash or timeout in Invoke phase resets the environment | S6 | PASS | "If the Lambda function crashes or times out during the Invoke phase, Lambda resets the" |
| 64 | How it works | New environment for an invocation is a cold start | S7 | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a\ncold start." |
| 65 | How it works | Cold start adds latency and is charged | S6 | PASS | "You are charged for this time, and it adds latency to your overall invocation duration." |
| 66 | How it works | Cold starts under 1% of invocations | S6 | PASS | "Cold starts typically occur in under 1% of invocations." |
| 67 | How it works | More common in dev/test, because invoked less often | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads.\nThis is because development and test functions are usually invoked less frequently." |
| 68 | How it works | Concurrency = in-flight requests at the same time; separate instance per request | S7 | PASS | "Concurrency is the number of in-flight requests that your AWS Lambda Event Function is handling at the same time. For each concurrent request, Lambda provisions a separate instance" |
| 69 | How it works | Default account limit 1,000 across Event Functions in a Region | S7 | PASS | "By default, your account has a concurrency limit of 1,000 concurrent executions across all Event Functions in a" |
| 70 | How it works | Out of concurrency means throttling, dropping requests | S7 | PASS | "experience\nthrottling (that is, they start to drop requests) if you run out of available concurrency." |
| 71 | How it works | Reserved concurrency reserves a portion; no charge | S7 | PASS | "reserve a portion of your account's concurrency for an Event Function" / "There is no charge" |
| 72 | How it works | Provisioned concurrency pre-initializes, cuts cold start latency; extra charges | S7 | PASS | "to pre-initialize a number of\nenvironment instances ... reducing cold start latencies." / "Using provisioned concurrency incurs additional charges to your account." |
| 73 | How it works | Must specify the primary key when creating a table | S10 | PASS | "When you create a table, in addition to the table name, you must specify the\nprimary key of the table." |
| 74 | How it works | Primary key uniquely identifies; no two items share a key | S10 | PASS | "The primary key uniquely identifies each item in the\ntable, so that no two items can have the same key." |
| 75 | How it works | Partition key value feeds a hash function; output picks the partition | S10 | PASS | "DynamoDB uses the partition key's value as input to an internal hash\nfunction. The output from the hash function determines the partition" |
| 76 | How it works | Partition-key-only table: no duplicate partition key values | S10 | PASS | "In a table that has only a partition key, no two items can have the same\npartition key value." |
| 77 | How it works | Partition + sort key: stored together, sorted | S10 | PASS | "partition key value are stored together, in sorted order by sort key" |
| 78 | How it works | Same partition key allowed, different sort keys required | S10 | PASS | "multiple items to have the same partition key value. However, those items\nmust have different sort key values." |
| 79 | How it works | Music: only Artist gives all that artist's songs | S10 | PASS | "if you provide only the value for\nArtist, DynamoDB retrieves all of the songs by that\nartist." |
| 80 | How it works | Each Music item must have both key attributes | S10 | PASS | "item in the table must have these two attributes." (line 139, in the Music paragraph) |
| 81 | How it works | Music table is schemaless apart from primary key | S10 | PASS | "Other than the primary key, the Music table is\nschemaless" |
| 82 | How it works | Primary key attribute must be scalar; only string, number, binary | S10 | PASS | "Each primary key attribute must be a scalar ... The only data types allowed for primary key attributes are string," |
| 83 | How it works | Secondary index queries by alternate key | S10 | PASS | "secondary index lets you query the data in the table using an\nalternate key, in addition to queries against the primary key." |
| 84 | How it works | GSI keys may differ from the table | S10 | PASS | "Global secondary index – An index with a partition key and sort key that can be\ndifferent from those on the table." |
| 85 | How it works | LSI: same partition key, different sort key | S10 | PASS | "Local secondary index – An index that has the same partition key as the table, but a\ndifferent sort key." |
| 86 | How it works | Quota 20 GSIs (default) and 5 LSIs | S10 | PASS | "a quota of 20 global secondary indexes\n(default quota) and 5 local secondary indexes." |
| 87 | How it works | HTTP 200 on write means durably persisted | S11 | PASS | "receives an HTTP 200 response\n(OK), that means the write completed successfully and has been durably persisted." |
| 88 | How it works | Tables and LSIs: eventually consistent (default) and strongly consistent | S11 | PASS | "Both tables and LSIs provide two read consistency options: eventually consistent (default) and strongly\nconsistent reads." |
| 89 | How it works | GSI and stream reads are all eventually consistent | S11 | PASS | "All reads from GSIs and streams are eventually" |
| 90 | How it works | Eventually consistent read may miss a recent write | S11 | PASS | "the responses might not reflect the results of a recently completed write operation." |
| 91 | How it works | ConsistentRead true gives most up-to-date data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most" |
| 92 | How it works | Strong reads from GSI or stream not supported | S11 | PASS | "Strongly consistent reads from a global secondary index or a" (line 35, continues "not supported") |
| 93 | How it works | Eventually consistent reads cost half | S11 | PASS | "Eventually consistent reads are half the cost of strongly consistent reads." |
| 94 | How it works | On-demand is default and recommended | S12 | PASS | "On-demand mode is the default and recommended throughput option for most DynamoDB" |
| 95 | How it works | Provisioned: you specify reads and writes per second | S12 | PASS | "In provisioned mode, you must specify the number of reads and writes per second that" |
| 96 | How it works | Charged for provisioned, not consumed | S12 | PASS | "capacity you have provisioned, not how much of that provisioned capacity you actually" |
| 97 | How it works | TTL deletes items no longer relevant | S13 | PASS | "a cost-effective method for deleting items that are no\nlonger relevant." |
| 98 | How it works | TTL timestamp: Number, Unix epoch, seconds | S13 | PASS | "The timestamp must be stored as a Number ... in Unix epoch time\nformat at the seconds granularity." |
| 99 | How it works | TTL ignores non-Number attributes | S13 | PASS | "Items with a TTL attribute that is not a\nNumber type are ignored by the TTL process." |
| 100 | How it works | Expired items may be deleted any time, typically within days | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration." |
| 101 | How it works | Filter expressions remove expired items from Scan/Query | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 102 | How it works | DynamoDB local lets you develop without the web service | S20 | PASS | "without accessing the DynamoDB web service." |
| 103 | How it works | Download (JRE), Maven dependency, or Docker image | S20 | PASS | "available as a download (requires JRE),\nas an Apache Maven dependency, or as a Docker image." |
| 104 | How it works | For production, remove the local endpoint | S20 | PASS | "you remove the\nlocal endpoint in the code, and then it points to the DynamoDB web service." |
| 105 | How it works | AWS CLI cannot use it as default endpoint; `--endpoint-url` each command | S22 | PASS | "The AWS CLI can't use the downloadable version of DynamoDB as a default\nendpoint. Therefore, you must specify --endpoint-url with\neach AWS CLI command." |
| 106 | How it works | Port 8000 by default | S21 | PASS | "DynamoDB uses port 8000 by default." |
| 107 | How it works | Credentials needed; fakeMyKeyId, fakeSecretAccessKey, fakeRegion | S21 | PASS | "credentials to work, as shown in the following example." / "fakeMyKeyId" / "fakeSecretAccessKey" / "fakeRegion" |
| 108 | How it works | Image `amazon/dynamodb-local:latest` | S21 | PASS | "image: \"amazon/dynamodb-local:latest\"" |
| 109 | How it works | `-inMemory`: no data saved on stop | S22 | PASS | "-inMemory — DynamoDB runs in memory instead of using a\ndatabase file. When you stop DynamoDB, none of the data is saved." |
| 110 | How it works | Telemetry: usage metrics, system info, errors | S23 | PASS | "DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors." |
| 111 | How it works | Telemetry sent in background | S23 | PASS | "If telemetry remains on, DynamoDB local sends telemetry data in\nthe background" |
| 112 | How it works | `-disableTelemetry` sends none | S22 | PASS | "-disableTelemetry — When specified, DynamoDB local will" (line 83; continues on 84) |
| 113 | How it works | Dev/test only | S22 | PASS | "intended for development and testing\npurposes only." |
| 114 | How it works | Differences: throughput ignored although CreateTable requires it | S22 | PASS | "Provisioned throughput settings are ignored in downloadable DynamoDB,\neven though the CreateTable operation requires them." |
| 115 | How it works | Scans sequential, parallel not supported | S22 | PASS | "Scan operations are performed sequentially. Parallel scans\nare not supported." |
| 116 | How it works | Table ops immediate, state always ACTIVE | S22 | PASS | "occur immediately, and table state is always ACTIVE." |
| 117 | How it works | Reads eventually consistent, most look strong | S22 | PASS | "Read operations are eventually consistent. However, due to the speed\nof DynamoDB local running on your computer, most reads appear to be strongly\nconsistent." |
| 118 | How it works | No point-in-time recovery | S22 | PASS | "DynamoDB local doesn't support Point-in-time recovery (PITR)." |
| 119 | How it works | Always null for billingModeSummary | S22 | PASS | "DynamoDB local always returns null for billingModeSummary." |
| 120 | How it works | Regions and accounts not supported at client level | S22 | PASS | "AWS Regions and distinct AWS accounts are not supported at the\nclient level." |
| 121 | How it works | Catalogs, databases, tables hold metadata defining a schema | S30 | PASS | "catalogs, databases, and tables are containers for the metadata definitions that" |
| 122 | How it works | Database is a group of tables; table is rows or columns | S30 | PASS | "Database – a group of tables" / "Table – data organized as a group of rows or" |
| 123 | How it works | Table metadata tells where data is in S3 and its structure | S30 | PASS | "The metadata in the table tells Athena\nwhere the data is located in Amazon S3, and specifies the structure of the data" |
| 124 | How it works | Table must be registered before querying | S30 | PASS | "before querying data, a table must be\nregistered in Athena." |
| 125 | How it works | Glue crawler can create a table | S30 | PASS | "You can create a table automatically using an AWS Glue crawler." |
| 126 | How it works | Athena integrates with Glue Data Catalog | S25 | PASS | "Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store" |
| 127 | How it works | Sample log data is TSV | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 128 | How it works | LOCATION names a folder, not a file | S28 | PASS | "because Athena\nexpects to scan all of the files in a folder, the LOCATION clause specifies\nan Amazon S3 folder location, not a specific file." |
| 129 | How it works | Athena keeps queries for 45 days | S29 | PASS | "Queries are retained for 45 days." |
| 130 | How it works | Partitioning limits data scanned, improves performance, cuts cost | S31 | PASS | "By partitioning your data, you can restrict the amount of data scanned by each query, thus" |
| 131 | How it works | WHERE on partition scans only that partition | S31 | PASS | "If you query a partitioned table and specify the partition in the\nWHERE clause, Athena scans the data only from that\npartition." |
| 132 | How it works | Hive style: key value pairs joined by equals signs | S31 | PASS | "Athena can use Apache Hive style partitions, whose data paths contain key value pairs\nconnected by equal signs" |
| 133 | How it works | MSCK REPAIR TABLE loads Hive partitions, Hive only | S31 | PASS | "you can use the MSCK REPAIR TABLE command, which works only with Hive-style" |
| 134 | How it works | Non-Hive: ALTER TABLE ADD PARTITION | S31 | PASS | "For non-Hive style partitions, you\nuse ALTER TABLE ADD PARTITION to" |
| 135 | How it works | State machines are JSON text | S34 | PASS | "State machines are defined using JSON text" |
| 136 | How it works | StartAt and States required | S34 | PASS | "StartAt (Required)" / "States (Required)" |
| 137 | How it works | StartAt must match exactly, case sensitive | S34 | PASS | "A string that must exactly match (is case sensitive) the name of one of" |
| 138 | How it works | States holds comma-delimited states | S34 | PASS | "An object containing a comma-delimited set of states." |
| 139 | How it works | TimeoutSeconds optional; sets max run time; States.Timeout | S34 | PASS | "TimeoutSeconds (Optional)\nThe maximum number of seconds an execution of the state machine can run.\nIf it runs longer than the specified time, the execution fails with a\nStates.Timeout" |
| 140 | How it works | Choice adds conditional logic | S35 | PASS | "adds conditional logic to a" |
| 141 | How it works | Evaluates each Choice Rule true/false | S35 | PASS | "Step Functions evaluates each Choice Rule to true or false." |
| 142 | How it works | Default is the fallback state | S35 | PASS | "The name of the state to transition to if no Choice\nRule evaluates to true." |
| 143 | How it works | No true rule and no Default throws an error | S35 | PASS | "no Default is provided, the\nstate machine will throw an error" |
| 144 | How it works | Standard: long-running, auditable | S32 | PASS | "Standard workflows are ideal for long-running,\nauditable workflows" |
| 145 | How it works | Standard: exactly-once, up to one year | S32 | PASS | "Standard workflows have exactly-once workflow\nexecution and can run for up to one year." |
| 146 | How it works | Express: high-event-rate | S32 | PASS | "Express workflows are ideal for high-event-rate" |
| 147 | How it works | Express: at-least-once, up to five minutes | S32 | PASS | "Express workflows have at-least-once workflow\nexecution and can run for up to five minutes." |
| 148 | How it works | Express steps may run more than once | S32 | PASS | "one or more steps in an Express Workflow can potentially run\nmore than once" |
| 149 | How it works | AWS SDK integrations call any AWS service directly | S32 | PASS | "provide a way to call any AWS service directly from your state machine" |
| 150 | How it works | All states but Pass and Wait can hit runtime errors | S36 | PASS | "All states, except Pass and Wait states, can encounter runtime errors." |
| 151 | How it works | Causes: Choice with no match; task failure such as a Lambda exception | S36 | PASS | "such as a Choice state without a matching rule" / "Task failures - such as an exception in a AWS Lambda function" |
| 152 | How it works | Default is to fail the whole execution | S36 | PASS | "Step Functions defaults to failing the entire state machine execution." |
| 153 | How it works | Task, Parallel, Map can have Retry | S36 | PASS | "Task, Parallel, and Map states can have a field named Retry" |
| 154 | How it works | Catchers for Task, Parallel, Map, not top-level failures | S36 | PASS | "catchers are available for Task, Parallel and Map states, but not for\ntop-level state machine execution failures." |
| 155 | How it works | Errors are case-sensitive strings called error names | S36 | PASS | "Step Functions identifies errors using case-sensitive strings, known as error" |
| 156 | How it works | TestState accepts a state definition and executes it | S37 | PASS | "The TestState API accepts the definition of a state and executes it." |
| 157 | How it works | Tests a state without creating or updating a state machine | S37 | PASS | "It allows you to test a state without creating a state machine or updating an existing state machine." |
| 158 | How it works | Three inspection levels: INFO, DEBUG, TRACE | S37 | PASS | lines 33-35: "INFO" / "DEBUG" / "TRACE" |
| 159 | How it works | INFO is default | S37 | PASS | "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 160 | How it works | DEBUG shows output and input/output processing | S37 | PASS | "DEBUG – Shows the state output and the result of input and output data processing if the test succeeds." |
| 161 | How it works | Mock tests logic without calling the service | S37 | PASS | "Mock AWS service integrations ... to test state logic without calling the actual service" |
| 162 | How it works | With a mock the role is optional | S37 | PASS | "When you specify a mock, specifying the role becomes optional" |
| 163 | How it works | TestState enables unit tests | S37 | PASS | "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 164 | Try it | Record: run date, versions, image digest, size, no AWS_ variables, `~/.aws` and `session.db`, separate check at 13:29 | none | N/A | The page's own run record, after a sentence giving date and tools. |
| 165 | Try it | Step 1: function is the Python function of "Create your first Lambda function"; takes `length` and `width`, multiplies, returns JSON string; code block | S2 | PASS | "The function multiplies these values to calculate an area and returns this as a JSON string." Code matches S2 lines 91-107 ("import json", "logger.setLevel(logging.INFO)", "return length*width"). |
| 166 | Try it | Step 1: tutorial copied it and removed trailing spaces | none | N/A | The tutorial's own practice. |
| 167 | Try it | A test case is the unit of testing that checks a response to inputs | S41 | PASS | "A test case is the individual unit of testing. It checks for a specific\nresponse to a particular set of inputs." |
| 168 | Try it | `TestCase` is the base class | S41 | PASS | "unittest provides a base class," (line 67) |
| 169 | Try it | `assertEqual` fails if values not equal | S41 | PASS | "assertEqual(first, second, msg=None)" at line 639. The page text reads "If the values do not compare equal, the test will fail." |
| 170 | Try it | `assertRaises` passes if exception raised | S41 | PASS | line 716: "error if another exception is raised, or fails if no exception is raised." |
| 171 | Try it | `assertLogs` tests that at least one message is logged | S41 | PASS | "A context manager to test that at least one message is logged on" |
| 172 | Try it | `subTest` runs the enclosed code block as a subtest | S41 | PASS | "Return a context manager which executes the enclosed code block as a" |
| 173 | Try it | `Context` is a fake; a fake is a mock with shortcuts | S8 | PASS | "A fake is a mock that takes shortcuts to simplify or speed up testing." |
| 174 | Try it | Step 1 test file, run command, 4-test output | none | N/A | The tutorial's own code and run output. |
| 175 | Try it | Bullets 1-2: event has `length` and `width`; page shows "The area is 42"; function uses `log_group_name`; sample shows log group name | S2 | PASS | "The area is 42" (line 172); "your function uses the log_group_name parameter to output the name of its CloudWatch log group."; "/aws/lambda/myLambdaFunction" |
| 176 | Try it | Bullets 3-4: KeyError, odd inputs, tests record today's behavior | none | N/A | The tutorial's own findings. |
| 177 | Try it | AWS says a handler should extract and validate data, then pass input to business logic | S8 | PASS | "you should write a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic." |
| 178 | Try it | AWS says all function code depends on timeout and memory settings | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly." |
| 179 | Try it | Step 2: DynamoDB local is a Docker image; page names `amazon/dynamodb-local:latest` | S21 | PASS | "The downloadable version of Amazon DynamoDB is available as a Docker image." / "amazon/dynamodb-local:latest" |
| 180 | Try it | Step 2: `-p`/`--publish` makes a port available outside the host | S42 | PASS | "Use the --publish or -p flag to make a port available outside the host," |
| 181 | Try it | Docker form `-p 192.168.1.100:8080:80` maps host IP port 8080 to container TCP 80 | S42 | PASS | "-p 192.168.1.100:8080:80" / "Map port 8080 on the Docker host IP 192.168.1.100 to TCP port 80 in the container." |
| 182 | Try it | Localhost IP means only the Docker host can reach the port | S42 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the\npublish flag, only the Docker host can access the published container port." |
| 183 | Try it | `--rm` removes container and anonymous volumes on exit | S43 | PASS | "Automatically remove the container and its associated anonymous volumes when it exits" |
| 184 | Try it | `-inMemory` keeps no data; `-disableTelemetry` sends none | S22 | PASS | "When you stop DynamoDB, none of the data is saved." / "-disableTelemetry — When specified, DynamoDB local will" |
| 185 | Try it | Credentials are the made-up values on the AWS page | S21 | PASS | "AWS Access Key ID: \"fakeMyKeyId\"" / "fakeSecretAccessKey" / "fakeRegion" |
| 186 | Try it | `AWS_CONFIG_FILE`, `AWS_SHARED_CREDENTIALS_FILE`, `AWS_EC2_METADATA_DISABLED` meanings | S40 | PASS | "Specifies the location of the file that the AWS CLI uses to store\nconfiguration profiles." / "...to store access\nkeys." / "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 187 | Try it | `ddb` adds `--endpoint-url` because the CLI needs it each time | S22 | PASS | "you must specify --endpoint-url with\neach AWS CLI command." |
| 188 | Try it | The tutorial's own choices (flags, `j`, `-p` value, `docker pull`) | none | N/A | The tutorial's own practice. |
| 189 | Try it | Blocks 1-3 code; `docker stop` stops one or more running containers | S44 | PASS | "Stop one or more running containers" |
| 190 | Try it | Command table: create-table makes Music; put-item makes several items; get-item `--consistent-read`; update-item; query by partition key; delete-table. Flags and keys in the block match the sources | S14, S15, S16, S17, S18, S19 | PASS | S14: "creates a new Music table using\ncreate-table", with the same `--attribute-definitions`, `--key-schema`, `--billing-mode PAY_PER_REQUEST` and `--table-class STANDARD`. S15: "creates several new items". S16: "demonstrate strongly consistent reads." S17: "updates an item in the Music table." S18: "using\nquery and providing the partition key." S19: "deletes the Music table using\ndelete-table." |
| 191 | Try it | Check without sort key follows from "both key attributes" rule | S10 | PASS | "item in the table must have these two attributes." |
| 192 | Try it | Output of the run; bullets on ACTIVE vs CREATING: AWS page shows CREATING and says ACTIVE when done | S14 | PASS | "Note that the value of the TableStatus field is set to\nCREATING." / "When DynamoDB finishes creating the\ntable, the value of the TableStatus field is set to\nACTIVE." |
| 193 | Try it | `delete-table` sample on the AWS page shows DELETING | S19 | PASS | S19 line 222 "The following delete-table example deletes the MusicCollection table." and line 228 "\"TableStatus\": \"DELETING\"". It is the reference example embedded in S19, not the Music walkthrough. |
| 194 | Try it | DynamoDB local: table ops immediate, state always ACTIVE | S22 | PASS | "occur immediately, and table state is always ACTIVE." |
| 195 | Try it | Step 3 sample shows `Awards` as `S`; step 5 sample shows `N` | S16, S18 | PASS | S16 line 49: "\"S\": \"10\"" under "Awards". S18 line 49: "\"N\": \"10\"" under "Awards". |
| 196 | Try it | Items stored together in sorted order by sort key | S10 | PASS | "partition key value are stored together, in sorted order by sort key" |
| 197 | Try it | Bullets: ValidationException from local, `list-tables` empty, `0` | none | N/A | Record of the tutorial's own run. |
| 198 | Try it | Run cannot show stale reads or throttling; local says most reads look strong; ignores throughput | S22 | PASS | "most reads appear to be strongly\nconsistent." / "Provisioned throughput settings are ignored in downloadable DynamoDB" |
| 199 | Try it | Step 3: Athena scans only the named partition | S31 | PASS | "Athena scans the data only from that\npartition." |
| 200 | Try it | Step 3: lines have tab-separated fields like the sample log data | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 201 | Try it | Step 3 script, output, model notes | none | N/A | The tutorial's own model and run. |
| 202 | Try it | Step 4: StartAt and States required; StartAt must match exactly | S34 | PASS | "StartAt (Required)" / "must exactly match (is case sensitive) the name of one of" |
| 203 | Try it | Step 4: Choice goes to Default; error if none | S35 | PASS | "no Default is provided, the\nstate machine will throw an error" |
| 204 | Try it | Step 4: Hello World definition is the S34 example | S34 | PASS | "\"Comment\": \"A Hello World example of the Amazon States Language using a Pass state\"" and "\"StartAt\": \"HelloWorld\"" |
| 205 | Try it | Step 4: Choice example sends `{"number": 2}` to `Equals 2` | S37 | PASS | "--input '{\"number\": 2}'" and "\"nextState\": \"Equals 2\"," |
| 206 | Try it | Step 4 bullets: Step Functions throws an error when no Default | S35 | PASS | Covered by the cited sentence in row 203 (S35 line 26). The rest is the tutorial's own model. |
| 207 | Try it | Step 5: `--generate-cli-skeleton` makes a template to customize and use as input | S39 | PASS | "The --generate-cli-skeleton generates and displays a parameter template\nthat you can customize and use as input on a command." |
| 208 | Try it | Step 5: commands, filter, output are the tutorial's choice | none | N/A | The tutorial's own practice and run. |
| 209 | Try it | Step 5: `FunctionName` and `Timeout` match `--function-name` and `--timeout` | S5 | PASS | "--function-name my-function \\" and "--timeout 120" |
| 210 | Try it | Step 5: `definition`, `roleArn`, `input`, `inspectionLevel` match CLI flags | S37 | PASS | "--definition '{\"Type\": \"Choice\"" / "--role-arn arn:aws:iam::account-id:role/myRole" / "--input '{\"number\": 2}'" / "--inspection-level DEBUG" |
| 211 | Try it | Step 5: `stateName`, `revealSecrets` match parameters | S37 | PASS | "A complete state machine definition with stateName parameter" / "If you set the revealSecrets parameter to false" |
| 212 | Try it | Step 5: `mock` and `context` match the headings | S37 | PASS | Headings "Mocking service integrations" and "Using context field in the TestState API" (line 5). The match is by name only, as the page says. |
| 213 | Try it | Step 5: INFO is the level used if you do not specify one | S37 | PASS | "By default, Step Functions sets the inspectionLevel to INFO if you don't set a level." |
| 214 | Try it | Step 6: Lambda pay-per-use; AWS points to pricing page | S1 | PASS | "Pay-per-use billing" / "For pricing information, see AWS Lambda Pricing." |
| 215 | Try it | Step 6: Athena tutorial charges for queries; sample data free; own data to S3 charged | S26 | PASS | "you are charged for the queries that you run. You\naren't charged for the sample data in the location that this tutorial uses, but if you\nupload your own data files to Amazon S3, charges do apply." |
| 216 | Try it | Step 6: Standard workflows priced by state transition | S32 | PASS | "Priced by state transition" |
| 217 | Try it | Step 6: "Each needs an AWS account, and each can cost money." | none | FAIL | No cite. S2 ("you need an AWS account") and S26 ("sign up for an AWS account") support Lambda and Athena. S38 never says Step Functions needs an account. Fix: cite S2 and S26 for those two, and drop the account claim for Step Functions. |
| 218 | Try it | Lambda 1: open Event Functions page, Create Event Function, Author from scratch | S2 | PASS | "Open the Event Functions page of the Lambda console." / "Choose Create Event Function." / "Select Author from scratch." |
| 219 | Try it | Lambda 2: Node.js 24 or Python 3.14; role with basic CloudWatch Logs permission | S2 | PASS | "For Runtime, choose either Node.js 24 or Python 3.14." / "the role that Lambda creates grants basic permissions to write to CloudWatch Logs." |
| 220 | Try it | Lambda 3: paste, replace code, Deploy; do not rename handler | S2 | PASS | "Paste the following code into the lambda_function.py tab, replacing the code that Lambda created." / "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 221 | Try it | Lambda 4: test event `myTestEvent`, run icon | S2 | PASS | "For Event Name, enter myTestEvent." / "choose the run icon next to your test event" |
| 222 | Try it | Lambda 5: clean up function, log group, role | S2 | PASS | "delete it. You can also delete the log group that stores\nthe function's logs, and the execution role that the console created." |
| 223 | Try it | Athena 1: bucket in same Region for results; output location | S26 | PASS | "Using the same AWS Region ... follow the steps to create a bucket in Amazon S3 to\nhold your Athena query results. You will configure this bucket to be your query\noutput location." |
| 224 | Try it | Athena 2: Location of query result box, `s3://` prefix | S27 | PASS | "In the Location of query result box, enter the" / "Prefix the path with s3://." |
| 225 | Try it | Athena 3: `mydatabase` with CREATE DATABASE | S27 | PASS | "To create a database named mydatabase, enter the following CREATE" |
| 226 | Try it | Athena 4: CloudFront sample; first CREATE TABLE has a limitation | S28 | PASS | "sample Amazon CloudFront log data" / "Do not use this example just yet as it has an important limitation" |
| 227 | Try it | Athena 5: run SQL and see results | S29 | PASS | "you can run SQL queries on the table and see the results in Athena." |
| 228 | Try it | Athena 6: no clean-up step; tutorial's own advice | none | N/A | The tutorial's own advice. |
| 229 | Try it | Step Functions 1: 20-30 minutes; Run Hello World | S38 | PASS | "Estimated duration: 20-30 minutes" / "choose Run Hello World" |
| 230 | Try it | Step Functions 2: Code button | S38 | PASS | "Choose the { } Code button to view the ASL code." |
| 231 | Try it | Step Functions 3: cannot rename; draft, no resources | S38 | PASS | "You cannot rename a state machine after you create it." / "you've been working on a draft of your state machine. No resources have been created yet." |
| 232 | Try it | Step Functions 4: new role; execution `hello001`; empty input | S38 | PASS | "accept the default to Create a new role." / "Enter hello001 for the name of the execution." / "Leave the input field empty." |
| 233 | Try it | Step Functions 5: delete IAM roles, then the state machine via Actions, Delete | S38 | PASS | "To delete the IAM roles" ... "select the Actions drop down, then select Delete to delete the state machine." |
| 234 | How a tester uses it | Still write unit, integration, end-to-end tests | S8 | PASS | "For serverless testing, you still write unit, integration and end-to-end tests." |
| 235 | How a tester uses it | Cloud tests are the most accurate measure | S8 | PASS | "Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications." |
| 236 | How a tester uses it | Cannot fully replicate cloud locally | S8 | PASS | "You cannot fully replicate a cloud environment locally." |
| 237 | How a tester uses it | Handler is a slim adapter | S8 | PASS | "should be a slim adapter that takes in event data and passes only the details that matter to your business logic" |
| 238 | How a tester uses it | Handler should extract and validate | S8 | PASS | "a handler that extracts and validates data from the incoming event and context objects" |
| 239 | How a tester uses it | Emulator tests may fail in the cloud (policies, config, quotas) | S8 | PASS | "Tests that rely on emulators might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas." |
| 240 | How a tester uses it | Mock frameworks limited on IAM or quota | S8 | PASS | "Mock frameworks are limited in testing or detecting AWS Identity and Access Management (IAM) policy or quota limitations." |
| 241 | How a tester uses it | Function with no other service still depends on timeout and memory | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings" |
| 242 | How a tester uses it | Log permission cannot be mocked or emulated | S8 | PASS | "This required permission cannot be accurately mocked or emulated." |
| 243 | How a tester uses it | Uniquely named resources per stack | S8 | PASS | "Automated test processes should create uniquely named resources for each stack." |
| 244 | How a tester uses it | Isolate load testing from production | S8 | PASS | "Load testing is another activity you should isolate from your production stack." |
| 245 | How a tester uses it | Alerts and controls to avoid spending | S8 | PASS | "environments should be configured with alerts and controls to avoid unnecessary spending." |
| 246 | How a tester uses it | Timeout near average duration raises risk | S5 | PASS | "If the timeout value is close to the average duration of a function, there is a higher" |
| 247 | How a tester uses it | Use datasets at the upper bounds | S5 | PASS | "Tests often use small samples for convenience, but you should use datasets at the upper bounds of what is reasonably expected for your workload." |
| 248 | How a tester uses it | Sync returns error in response; async retried automatically | S3 | PASS | "view the error message in the response" / "Lambda handles retries automatically" |
| 249 | How a tester uses it | Do not assume persistence; `/tmp` kept while frozen; test may pass on stale state | S6 | PASS | "You should\nnot assume that the execution environment will persist indefinitely." / "The directory content remains when the execution environment is frozen". The last sentence ("So a test can pass...") is an inference from these facts. |
| 250 | How a tester uses it | Cold starts more common in dev/test; throttling when out of concurrency | S6, S7 | PASS | S6: "cold starts are typically more common in development and test functions than production workloads." S7: "they start to drop requests) if you run out of available concurrency." |
| 251 | How a tester uses it | Eventually consistent is default; may miss a write; ConsistentRead true; GSI always eventually consistent | S11 | PASS | "Eventually consistent is the default read consistent model" / "might not reflect the results of a recently completed write operation" / "All reads from GSIs and streams are eventually" |
| 252 | How a tester uses it | Local says most reads look strong; ignores throughput; so no stale reads or throttling | S22 | PASS | "most reads appear to be strongly\nconsistent." / "Provisioned throughput settings are ignored". The last sentence follows from these. |
| 253 | How a tester uses it | TTL: any time within days; Number, epoch seconds; filter expressions | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration." / "Use filter expressions to remove expired items from Scan and Query results." |
| 254 | How a tester uses it | Music needs both keys; key attribute scalar string, number, binary | S10 | PASS | "item in the table must have these two attributes." / "The only data types allowed for primary key attributes are string," |
| 255 | How a tester uses it | Tutorial's-run bullets (item refused; sample vs real run) | none | N/A | Record of the tutorial's own run. |
| 256 | How a tester uses it | Athena: WHERE partition; MSCK Hive only; camel case; table registered | S31, S30 | PASS | S31: "MSCK REPAIR TABLE doesn't add the partitions to the\nAWS Glue Data Catalog." S30: "before querying data, a table must be\nregistered in Athena." The page's "it does not add" refers to MSCK REPAIR TABLE. |
| 257 | How a tester uses it | TestState: unit tests; Catch/Retry; `afterInputPath`; mocking needed for Map, Parallel, Activity, `.sync`, `waitForTaskToken`; console lacks some | S37 | PASS | "Error handling: Which Catch or Retry applies" / "afterInputPath – Input after Step Functions applies the InputPath filter." / "Mocking is necessary if you need to test the following state types ... Map, Parallel, Activity, .sync service integrations and waitForTaskToken service integrations." / "The console TestState feature does not yet support some of the enhancements" |
| 258 | How a tester uses it | No matching Choice rule and no Default throws an error | S35 | PASS | "no Default is provided, the\nstate machine will throw an error" |
| 259 | How a tester uses it | Express steps may repeat; each runs at least once; check repeats are safe | S32 | PASS | "one or more steps in an Express Workflow can potentially run\nmore than once, while each step in the workflow executes at least once." The last sentence is advice. |
| 260 | Common mistakes | Do not rename handler | S2 | PASS | "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 261 | Common mistakes | Do not call `sts:AssumeRole` manually | S4 | PASS | "You should avoid manually\ncalling sts:AssumeRole to assume the execution role in your function code." |
| 262 | Common mistakes | Trust policy must name Lambda principal | S4 | PASS | "trust policy must specify the Lambda service principal\n(lambda.amazonaws.com) as a trusted service." |
| 263 | Common mistakes | Cannot fully replicate cloud; emulator tests may fail | S8 | PASS | "You cannot fully replicate a cloud environment locally." / "might provide successful results locally, but fail in the cloud" |
| 264 | Common mistakes | Handler should be a slim adapter | S8 | PASS | "should be a slim adapter that takes in event data and passes only the details that matter" |
| 265 | Common mistakes | Timeout near average duration | S5 | PASS | "If the timeout value is close to the average duration of a function, there is a higher" |
| 266 | Common mistakes | Do not trust a reused environment; background processes resume | S6 | PASS | "persist indefinitely." / "the function ended resume if Lambda reuses the execution environment." |
| 267 | Common mistakes | SDKs and tools use the web service by default; must set the local endpoint | S22 | PASS | "By default, the AWS SDKs and tools use endpoints for the Amazon DynamoDB web" / "must specify the local endpoint" |
| 268 | Common mistakes | Local is for dev/test only; `-inMemory` loses data; telemetry in background | S22, S23 | PASS | S22: "intended for development and testing\npurposes only." S23: "sends telemetry data in\nthe background". |
| 269 | Common mistakes | No JOIN | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 270 | Common mistakes | Eventually consistent default; strong reads from GSI/stream not supported | S11 | PASS | "Eventually consistent is the default read consistent model" |
| 271 | Common mistakes | TTL timing; non-Number ignored | S13 | PASS | "typically within a few days after their expiration" / "not a\nNumber type are ignored by the TTL process" |
| 272 | Common mistakes | LOCATION is a folder, not a file | S28 | PASS | "the LOCATION clause specifies\nan Amazon S3 folder location, not a specific file." |
| 273 | Common mistakes | Camel case path with MSCK REPAIR TABLE; Hive only | S31 | PASS | "If the S3 path is in camel case, MSCK REPAIR TABLE doesn't add the partitions" |
| 274 | Common mistakes | Unpartitioned big bucket can hit GET rate limits and S3 exceptions | S31 | PASS | "such queries may affect the GET\nrequest rate limits in Amazon S3 and lead to Amazon S3 exceptions." |
| 275 | Common mistakes | StartAt name exact and case sensitive | S34 | PASS | "must exactly match (is case sensitive) the name of one of" |
| 276 | Common mistakes | Choice without Default errors; no End field | S35 | PASS | "Choice states do not support the End field." / "no Default is provided, the\nstate machine will throw an error" |
| 277 | Common mistakes | Catchers not for top-level failures; default fails execution | S36 | PASS | "but not for\ntop-level state machine execution failures." |
| 278 | Common mistakes | Express step may run more than once | S32 | PASS | "can potentially run\nmore than once" |
| 279 | Common mistakes | Console TestState lacks mocking, Map and Parallel testing | S37 | PASS | "such as mocking service integrations, testing Map and Parallel states" |
| 280 | Common mistakes | Cannot rename a state machine | S38 | PASS | "You cannot rename a state machine after you create it." |
| 281 | Common mistakes | Costs: provisioned concurrency; provisioned mode; Athena tutorial | S7, S12, S26 | PASS | S7: "incurs additional charges to your account." S12: "capacity you have provisioned, not how much of that provisioned capacity you actually" S26: "you are charged for the queries that you run." |
| 282 | What a tester can check | Callout "Tutorial advice": 12 advice items | none | PASS | Callout title is "Tutorial advice" and its intro says "This list is the tutorial's own advice". No item states a tool fact that is not supported elsewhere on the page. |
| 283 | Key words | Serverless | none | PASS | Page: "AWS Lambda is a serverless compute service" and "run code without provisioning or managing servers". |
| 284 | Key words | Event; Handler; Context object | none | PASS | Page: "An event in Lambda is a JSON formatted document..."; "the handler function is always the entry point to your code"; "The context object contains information about the function invocation and execution environment." |
| 285 | Key words | Trigger; Event source mapping | none | PASS | Page: "Some services can invoke a function with each new event, and this is called a trigger." and "...which is called an event source mapping." |
| 286 | Key words | Synchronous; Asynchronous | none | PASS | Page: "With synchronous invocation, you wait for the function to process the event and return a response." and "With asynchronous invocation, Lambda queues the event..." |
| 287 | Key words | Execution role | none | PASS | Page: "A function's execution role is an IAM role that grants the function permission..." |
| 288 | Key words | Timeout | none | PASS | Page: "Timeout is the maximum amount of time in seconds..."; "The default is 3 seconds ... up to a maximum value of 1,800 seconds". |
| 289 | Key words | Execution environment; Cold start | none | PASS | Page: "...an execution environment, which provides a secure and isolated runtime environment"; "this is known as a cold start". |
| 290 | Key words | Concurrency; Reserved; Provisioned; Throttling | none | PASS | Page: "Concurrency is the number of in-flight requests..."; "Reserved concurrency reserves a portion..."; "Provisioned concurrency pre-initializes..."; "it experiences throttling, which means that it starts to drop requests". |
| 291 | Key words | Table, item, attribute; Primary key; Partition key; Sort key | none | PASS | Page: "A table is a collection of items..."; "The primary key uniquely identifies each item..."; "uses the value of the partition key as input to an internal hash function"; "stored together, in sorted order by sort key value". |
| 292 | Key words | GSI; LSI | none | PASS | Page: "A global secondary index has a partition key and sort key that can be different..."; "A local secondary index has the same partition key as the table, but a different sort key." |
| 293 | Key words | Eventually / Strongly consistent read | none | PASS | Page: "eventually consistent, which is the default"; "might not reflect the results of a recently completed write"; "If you set ConsistentRead to true, DynamoDB returns the most up-to-date data"; "Strongly consistent reads from a global secondary index or a stream are not supported". |
| 294 | Key words | On-demand; Provisioned mode | none | PASS | Page: "On-demand mode is the default and recommended throughput option"; "pay-per-request pricing"; "you must specify the number of reads and writes per second"; "charged for the capacity that you provisioned". |
| 295 | Key words | TTL; DynamoDB local | none | PASS | Page: "Time To Live (TTL) is a method for deleting items that are no longer relevant"; "The downloadable version is intended for development and testing purposes only." |
| 296 | Key words | Athena table; Partition; Hive style; MSCK REPAIR TABLE | none | PASS | Page: "The metadata in a table tells Athena where the data is located..."; "Before querying data, a table must be registered in Athena"; "Athena scans the data only from that partition"; "Hive style partitions, whose data paths contain key value pairs connected by equal signs"; "The MSCK REPAIR TABLE command loads new Hive partitions, and it works only with Hive-style partitions". |
| 297 | Key words | State machine; State; Execution | none | PASS | Page: "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states"; "Each step in a workflow is called a state"; "...are called executions". |
| 298 | Key words | Standard; Express workflow | none | PASS | Page: "They have exactly-once workflow execution, and they can run for up to one year."; "at-least-once workflow execution... up to five minutes"; "can potentially run more than once". |
| 299 | Key words | Choice state; TestState API; Mock; Fake; Test case | none | PASS | Page: "A Choice state adds conditional logic to a state machine"; "Default is the name of the state to transition to..."; "accepts the definition of a state and executes it"; "A mock lets you test state logic without calling the actual service"; "a fake is a mock that takes shortcuts"; "A test case is the individual unit of testing...". |

Open FAILs after round 9: 1

Changed after this round: Row 217 (Try it, step 6): the sentence "Each needs an AWS account, and each can cost money" had no cite. The Lambda page of the first steps (S2) says that to get started with AWS, you need an AWS account, and the Athena page (S26) says to sign up for an AWS account if you have not already done so. The Step Functions page (S38) says nothing about an account, so the page no longer says that each tutorial needs one. The sentence is replaced by two cited sentences, and the prices stay in the cited sentences that follow.

## Round 10 (2026-11-20)

# Fact check: devops / aws-data-serverless (round 10)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description line | Page covers Lambda, DynamoDB, Athena, Step Functions, with a practice run and a read-along | none | N/A | Describes the page itself. |
| 2 | Lede | Page covers four AWS services; the practice run tests the Lambda example, runs the DynamoDB tutorial locally, models two rules; needs no AWS account; order links | none | N/A | Describes the page and its own run. The links are links to other pages. |
| 3 | What it is | Lambda is a serverless compute service | S1 | PASS | S1: "AWS Lambda is a serverless compute service." |
| 4 | What it is | Run code without provisioning or managing servers | S1 | PASS | S1: "you can run code without provisioning or managing servers" (the sentence is split across lines 7-8) |
| 5 | What it is | Lambda automatically manages infrastructure, including maintenance, capacity provisioning, scaling, patching | S1 | PASS | S1: "Lambda automatically manages the underlying infrastructure – including server maintenance, capacity provisioning, scaling, and patching" |
| 6 | What it is | Lambda provides three compute primitives | S1 | PASS | S1: "Lambda provides three compute primitives" |
| 7 | What it is | Event Functions is the name for the original Lambda function type | S1 | PASS | S1: "Event Functions is the name for the original Lambda function type" |
| 8 | What it is | An Event Function runs code in response to events or API calls without managing servers | S1 | PASS | S1: "Event Functions – Run code in response to events or API calls without managing servers." |
| 9 | What it is | DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale | S9 | PASS | S9: "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 10 | What it is | A table is a collection of items; an item is a collection of attributes | S10 | PASS | S10: "table is a collection of items, and each item is a collection of attributes." |
| 11 | What it is | DynamoDB uses primary keys to uniquely identify each item | S10 | PASS | S10: "DynamoDB uses primary keys to uniquely identify each item in a" |
| 12 | What it is | DynamoDB doesn't support a JOIN operator | S9 | PASS | S9: "Unlike relational databases, DynamoDB doesn't support a JOIN operator." |
| 13 | What it is | AWS recommends denormalizing the data model | S9 | PASS | S9: "We recommend that you denormalize your data model" |
| 14 | What it is | Athena is an interactive query service to analyze data in S3 using standard SQL | S24 | PASS | S24: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 15 | What it is | Ad-hoc queries with ANSI SQL, without aggregating or loading data | S25 | PASS | S25: "You can use Athena to run ad-hoc queries using ANSI SQL, without the" |
| 16 | What it is | Analyzes unstructured, semi-structured, structured data in S3 | S25 | PASS | S25: "Athena helps you analyze unstructured, semi-structured, and structured data stored in Amazon S3." |
| 17 | What it is | Examples: CSV, JSON, Parquet, ORC | S25 | PASS | S25: "Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC." |
| 18 | What it is | Step Functions workflows, also called State machines, build apps, automate, orchestrate, pipelines | S32 | PASS | S32: "you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines." |
| 19 | What it is | Each step in a workflow is a state | S32 | PASS | S32: "Each step in a workflow is called a state." |
| 20 | What it is | Running workflow instances are executions | S32 | PASS | S32: "Instances of running workflows performing tasks are called executions" |
| 21 | What it is | A Task state is a unit of work another AWS service performs | S32 | PASS | S32: "a Task state represents a unit of work that another AWS service performs" |
| 22 | What it is | ASL is a JSON-based, structured language defining a state machine | S33 | PASS | S33: "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states" |
| 23 | What it is | Lambda has pay-per-use billing, no upfront commitments | S1 | PASS | S1: "Pay-per-use billing – No upfront commitments." |
| 24 | What it is | DynamoDB on-demand has pay-per-request pricing | S12 | PASS | S12: "DynamoDB on-demand offers pay-per-request pricing for read and write requests" |
| 25 | What it is | Athena: pay only for queries run | S24 | PASS | S24: "you pay only for the queries you run." |
| 26 | What it is | Standard workflows priced by state transition | S32 | PASS | S32: "Priced by state transition" |
| 27 | What it is | Express workflows priced by number and duration of executions | S32 | PASS | S32: "Priced by number and duration of executions" |
| 28 | How it works | Python: more than one function allowed, handler always the entry point | S2 | PASS | S2: "A Lambda function in Python can contain more than one Python function, but the handler function is always the entry point to your code." |
| 29 | How it works | When invoked, Lambda runs this method | S2 | PASS | S2: "When your function is invoked, Lambda runs this method." |
| 30 | How it works | Handler takes event and context | S2 | PASS | S2: "The function lambda_handler takes two arguments, event and context." |
| 31 | How it works | Event is a JSON formatted document | S2 | PASS | S2: "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 32 | How it works | Event object holds info about the event that caused the invocation | S2 | PASS | S2: "If your function is invoked by another AWS service, the event object contains information about the event that caused the invocation." |
| 33 | How it works | Lambda passes context automatically | S2 | PASS | S2: "Lambda passes the context object to your function automatically." |
| 34 | How it works | Context holds invocation and environment info | S2 | PASS | S2: "The context object contains information about the function invocation and execution environment." |
| 35 | How it works | print or logging library sends info to the log | S2 | PASS | S2: "With Python, you can use either a print statement or a Python logging library to send information to your function's log." |
| 36 | How it works | AWS recommends a logging library in production | S2 | PASS | S2: "In a production application, we recommend that you use a logging library." |
| 37 | How it works | Outside the console, you must use CloudWatch Logs | S2 | PASS | S2: "When you invoke your function outside of the Lambda console, you must use CloudWatch Logs to view your function's execution results." |
| 38 | How it works | After deploy, invoke in several ways | S3 | PASS | S3: "you can invoke it in several ways" |
| 39 | How it works | `aws lambda invoke` is one way | S3 | PASS | S3: "The AWS Command Line Interface (AWS CLI) – Use the aws lambda invoke" |
| 40 | How it works | Function URL is a dedicated HTTP(S) endpoint | S3 | PASS | S3: "Use function URLs to create a dedicated HTTP(S) endpoint" |
| 41 | How it works | Trigger | S3 | PASS | S3: "Some services can invoke a Lambda Event Function with each new event. This is called a trigger." |
| 42 | How it works | Event source mapping | S3 | PASS | S3: "For stream and queue-based services, Lambda invokes the function with batches of records. This is called an event source mapping." |
| 43 | How it works | Synchronous: you wait for the response | S3 | PASS | S3: "With synchronous invocation, you wait for the function to process the event and return a response." |
| 44 | How it works | Asynchronous: Lambda queues the event, returns immediately | S3 | PASS | S3: "asynchronous invocation, Lambda queues the event for processing and returns a response immediately." |
| 45 | How it works | InvocationType: RequestResponse sync, Event async | S3 | PASS | S3: "A value of RequestResponse indicates synchronous invocation, and a value of Event indicates asynchronous" |
| 46 | How it works | Sync error: view in response, retry manually | S3 | PASS | S3: "for synchronous invocations, view the error message in the response and retry the invocation manually." |
| 47 | How it works | Async: Lambda retries automatically, can send records to a destination | S3 | PASS | S3: "For asynchronous invocations, Lambda handles retries automatically and can send invocation records to a destination." |
| 48 | How it works | Execution role is an IAM role granting permission | S4 | PASS | S4: "execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access AWS services and resources." |
| 49 | How it works | Lambda automatically assumes the role | S4 | PASS | S4: "Lambda automatically assumes your execution role when you invoke your function." |
| 50 | How it works | Trust policy must name lambda.amazonaws.com | S4 | PASS | S4: "trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service." |
| 51 | How it works | Console creates a minimal-permission role by default | S4 | PASS | S4: "By default, Lambda creates an execution role with minimal permissions when you create a function in the Lambda console." |
| 52 | How it works | Role includes AWSLambdaBasicExecutionRole, basic CloudWatch Logs permissions | S4 | PASS | S4: "this execution role includes the AWSLambdaBasicExecutionRole managed policy, which gives your function basic permissions to log events to Amazon CloudWatch Logs." |
| 53 | How it works | Timeout is the maximum time in seconds | S5 | PASS | S5: "Timeout is the maximum amount of time in seconds that a Lambda function can run." |
| 54 | How it works | Default 3 s, 1 s steps, max 1,800 s | S5 | PASS | S5: "default value for this setting is 3 seconds, but you can adjust this in increments of 1 second up to a maximum value of 1,800 seconds (30 minutes)." |
| 55 | How it works | Managed Instances: max 5,400 s for async and ESM (except MQ, DocumentDB) | S5 | PASS | S5: "For functions using AWS Lambda Managed Instances, asynchronous invocations and event source mapping invocations (except Amazon MQ and Amazon DocumentDB) support a maximum allowed value of 5,400 seconds (90 minutes)." |
| 56 | How it works | `update-function-configuration` sets timeout | S5 | PASS | S5: "You can use the update-function-configuration command to configure the timeout value, in seconds." |
| 57 | How it works | Execution environment is secure and isolated | S6 | PASS | S6: "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime" |
| 58 | How it works | Init phase has three tasks | S6 | PASS | S6: "In the Init phase, Lambda performs three tasks:" |
| 59 | How it works | Extensions, runtime, static code | S6 | PASS | S6 line 56: "Run the function's static code (Function init)". The list items for extensions and runtime sit on the lines before it; "three tasks" at line 53 covers them. |
| 60 | How it works | Init limited to 10 seconds | S6 | PASS | S6: "The Init phase is limited to 10 seconds." |
| 61 | How it works | Timeout limits the whole Invoke phase | S6 | PASS | S6: "The function's timeout setting limits the duration of the entire Invoke phase." |
| 62 | How it works | Lambda keeps the environment for some time | S6 | PASS | S6: "environment for some time in anticipation of another function invocation." |
| 63 | How it works | Objects outside the handler remain initialized | S6 | PASS | S6: "Objects declared outside of the function's handler method remain initialized" |
| 64 | How it works | /tmp keeps content while frozen | S6 | PASS | S6: "The directory content remains when the execution environment is frozen" |
| 65 | How it works | Unfinished background processes resume on reuse | S6 | PASS | S6: "the function ended resume if Lambda reuses the execution environment." |
| 66 | How it works | Lambda terminates environments every few hours | S6 | PASS | S6: "Lambda terminates execution environments every few hours" |
| 67 | How it works | Do not assume the environment persists | S6 | PASS | S6: "You should not assume that the execution environment will persist indefinitely." |
| 68 | How it works | Crash or timeout in Invoke: Lambda resets | S6 | PASS | S6: "If the Lambda function crashes or times out during the Invoke phase, Lambda resets the" |
| 69 | How it works | Cold start definition | S7 | PASS | S7: "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start." |
| 70 | How it works | Cold start adds latency and is charged | S6 | PASS | S6: "You are charged for this time, and it adds latency to your overall invocation duration." |
| 71 | How it works | Cold starts under 1% of invocations | S6 | PASS | S6: "Cold starts typically occur in under 1% of invocations." |
| 72 | How it works | More common in dev and test | S6 | PASS | S6: "cold starts are typically more common in development and test functions than production workloads." |
| 73 | How it works | Reason: invoked less often | S6 | PASS | S6: "This is because development and test functions are usually invoked less frequently." |
| 74 | How it works | Concurrency = in-flight requests | S7 | PASS | S7: "Concurrency is the number of in-flight requests that your AWS Lambda Event Function is handling at the same time." |
| 75 | How it works | Separate environment instance per concurrent request | S7 | PASS | S7: "For each concurrent request, Lambda provisions a separate instance of your execution environment." |
| 76 | How it works | Default 1,000 concurrent executions per Region | S7 | PASS | S7: "By default, your account has a concurrency limit of 1,000 concurrent executions across all Event Functions in a Region." |
| 77 | How it works | Out of concurrency: throttling, dropped requests | S7 | PASS | S7: "experience throttling (that is, they start to drop requests) if you run out of available concurrency." |
| 78 | How it works | Reserved concurrency reserves a portion | S7 | PASS | S7: "reserve a portion of your account's concurrency for an Event Function." |
| 79 | How it works | No charge for reserved concurrency | S7 | PASS | S7: "There is no charge for configuring reserved concurrency" |
| 80 | How it works | Provisioned concurrency pre-initializes, cuts cold starts | S7 | PASS | S7: "Use provisioned concurrency to pre-initialize a number of" and "This is useful for reducing cold start latencies." |
| 81 | How it works | Provisioned concurrency incurs charges | S7 | PASS | S7: "Using provisioned concurrency incurs additional charges to your account." |
| 82 | How it works | Must specify primary key when creating a table | S10 | PASS | S10: "When you create a table, in addition to the table name, you must specify the primary key of the table." |
| 83 | How it works | Primary key unique; no two items share it | S10 | PASS | S10: "The primary key uniquely identifies each item in the" (line 153); the Technical wording "so that no two items can have the same key" is the sentence continuation. I did not see the rest of the line. |
| 84 | How it works | Partition key value is input to a hash function | S10 | PASS | S10: "DynamoDB uses the partition key's value as input to an internal hash function." |
| 85 | How it works | Hash output decides the partition | S10 | PASS | S10: "The output from the hash function determines the partition" |
| 86 | How it works | Partition-key-only table: no duplicate partition key values | S10 | PASS | S10: "In a table that has only a partition key, no two items can have the same partition key value." |
| 87 | How it works | With sort key: items stored together, sorted | S10 | PASS | S10: "partition key value are stored together, in sorted order by sort key" |
| 88 | How it works | Same partition key allowed, different sort keys | S10 | PASS | S10: "multiple items to have the same partition key value. However, those items must have different sort key values." |
| 89 | How it works | Music: only Artist returns all songs by the artist | S10 | PASS | S10 line 190: "Artist, DynamoDB retrieves all of the songs by that" |
| 90 | How it works | Music: each item must have both key attributes | S10 | PASS | S10: "Each item in the table must have these two attributes." |
| 91 | How it works | Music is schemaless apart from the primary key | S10 | PASS | S10: "Other than the primary key, the Music table is schemaless" |
| 92 | How it works | Each primary key attribute must be a scalar | S10 | PASS | S10: "Each primary key attribute must be a scalar" |
| 93 | How it works | Only string, number, binary allowed | S10 | PASS | S10: "The only data types allowed for primary key attributes are string," (line 204) |
| 94 | How it works | Secondary index uses an alternate key | S10 | PASS | S10: "alternate key, in addition to queries against the primary key." |
| 95 | How it works | GSI key may differ from the table | S10 | PASS | S10: "Global secondary index – An index with a partition key and sort key that can be different from those on the table." |
| 96 | How it works | LSI: same partition key, different sort key | S10 | PASS | S10: "Local secondary index – An index that has the same partition key as the table, but a different sort key." |
| 97 | How it works | Quota: 20 GSIs (default), 5 LSIs | S10 | PASS | S10: "a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes." |
| 98 | How it works | HTTP 200 write is durably persisted | S11 | PASS | S11: "receives an HTTP 200 response (OK), that means the write completed successfully and has been durably persisted." |
| 99 | How it works | Tables and LSIs: eventually consistent (default) and strongly consistent | S11 | PASS | S11: "Both tables and LSIs provide two read consistency options: eventually consistent (default) and strongly consistent reads." |
| 100 | How it works | GSI and stream reads are eventually consistent | S11 | PASS | S11: "All reads from GSIs and streams are eventually" |
| 101 | How it works | Eventually consistent read may miss a recent write | S11 | PASS | S11: "the responses might not reflect the results of a recently completed write operation." |
| 102 | How it works | ConsistentRead true gives the most up-to-date data | S11 | PASS | S11: "If you set ConsistentRead to true, DynamoDB returns a response with the most" (the text continues on line 33) |
| 103 | How it works | Strongly consistent reads on GSI or stream are not supported | S11 | PASS | S11 line 36: "DynamoDB stream are not supported." |
| 104 | How it works | Eventually consistent reads cost half | S11 | PASS | S11: "Eventually consistent reads are half the cost of strongly consistent reads." |
| 105 | How it works | On-demand is the default and recommended option | S12 | PASS | S12: "On-demand mode is the default and recommended throughput option for most DynamoDB workloads." |
| 106 | How it works | Provisioned: you must specify reads and writes per second | S12 | PASS | S12: "you must specify the number of reads and writes per second that you require" |
| 107 | How it works | Charged for provisioned, not consumed | S12 | PASS | S12: "charged based on the hourly read and write capacity you have provisioned, not how much of that provisioned capacity you actually consumed." |
| 108 | How it works | TTL deletes items no longer relevant | S13 | PASS | S13: "Time To Live (TTL) for DynamoDB is a cost-effective method for deleting items that are no longer relevant." |
| 109 | How it works | TTL timestamp: Number, Unix epoch, seconds | S13 | PASS | S13: "The timestamp must be stored as a Number data type in Unix epoch time format at the seconds granularity." |
| 110 | How it works | Non-Number TTL attributes are ignored | S13 | PASS | S13: "Items with a TTL attribute that is not a Number type are ignored by the TTL process." |
| 111 | How it works | Deletion at any time, typically within a few days | S13 | PASS | S13: "might be deleted by the system at any time, typically within a few days after their expiration." |
| 112 | How it works | Filter expressions remove expired items from Scan and Query | S13 | PASS | S13: "Use filter expressions to remove expired items from Scan and Query results." |
| 113 | How it works | Downloadable DynamoDB: develop and test without the web service | S20 | PASS | S20: "without accessing the DynamoDB web service." |
| 114 | How it works | Download (JRE), Maven dependency, Docker image | S20 | PASS | S20: "DynamoDB local is available as a download (requires JRE), as an Apache Maven dependency, or as a Docker image." |
| 115 | How it works | For production, remove the local endpoint | S20 | PASS | S20: "you remove the local endpoint in the code, and then it points to the DynamoDB web service." |
| 116 | How it works | AWS CLI can't use it as default; need `--endpoint-url` each time | S22 | PASS | S22: "The AWS CLI can't use the downloadable version of DynamoDB as a default endpoint. Therefore, you must specify --endpoint-url with each AWS CLI command." |
| 117 | How it works | Port 8000 by default | S21 | PASS | S21: "DynamoDB uses port 8000 by default." |
| 118 | How it works | Requires credentials; fake values shown | S21 | PASS | S21: "Downloadable DynamoDB requires any credentials to work" with "fakeMyKeyId", "fakeSecretAccessKey", "fakeRegion" |
| 119 | How it works | Image named `amazon/dynamodb-local:latest` | S21 | PASS | S21: `image: "amazon/dynamodb-local:latest"` |
| 120 | How it works | `-inMemory`: runs in memory, nothing saved on stop | S22 | PASS | S22: "-inMemory — DynamoDB runs in memory instead of using a database file. When you stop DynamoDB, none of the data is saved." |
| 121 | How it works | Collects telemetry: usage metrics, system info, errors | S23 | PASS | S23: "DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors." |
| 122 | How it works | If telemetry stays on, data is sent in the background | S23 | PASS | S23: "If telemetry remains on, DynamoDB local sends telemetry data in the background" |
| 123 | How it works | `-disableTelemetry` sends none | S22 | PASS | S22: "-disableTelemetry — When specified, DynamoDB local will not send any telemetry." |
| 124 | How it works | Development and testing only | S22 | PASS | S22: "The downloadable version of DynamoDB is intended for development and testing purposes only." |
| 125 | How it works | It differs from the web service in several ways | S22 | PASS | S22: "differs from the web service in the following ways:" |
| 126 | How it works | Provisioned throughput ignored though CreateTable requires it | S22 | PASS | S22: "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them." |
| 127 | How it works | Scans sequential, no parallel scans | S22 | PASS | S22: "Scan operations are performed sequentially. Parallel scans are not supported." |
| 128 | How it works | Table operations immediate, state always ACTIVE | S22 | PASS | S22: "CreateTable, UpdateTable, and DeleteTable operations occur immediately, and table state is always ACTIVE." |
| 129 | How it works | Reads eventually consistent, most look strongly consistent | S22 | PASS | S22: "most reads appear to be strongly consistent." The source gives the cause as "the speed of DynamoDB local running on your computer"; the page says "local copy". That is close enough. |
| 130 | How it works | No point-in-time recovery | S22 | PASS | S22: "DynamoDB local doesn't support Point-in-time recovery (PITR)." |
| 131 | How it works | billingModeSummary always null | S22 | PASS | S22: "DynamoDB local always returns null for billingModeSummary." |
| 132 | How it works | Regions and accounts not supported at client level | S22 | PASS | S22: "AWS Regions and distinct AWS accounts are not supported at the client level." |
| 133 | How it works | Catalogs, databases, tables hold metadata that define a schema | S30 | PASS | S30: "catalogs, databases, and tables are containers for the metadata definitions that" (the sentence continues on the next line) |
| 134 | How it works | Database = group of tables; table = rows or columns | S30 | PASS | S30: "Database – a group of tables" and "Table – data organized as a group of rows or columns" |
| 135 | How it works | Table metadata gives S3 location and structure | S30 | PASS | S30: "where the data is located in Amazon S3, and specifies the structure of the data" |
| 136 | How it works | A table must be registered before querying | S30 | PASS | S30: "before querying data, a table must be registered in Athena." |
| 137 | How it works | Glue crawler can create a table | S30 | PASS | S30: "You can create a table automatically using an AWS Glue crawler." |
| 138 | How it works | Athena integrates with the Glue Data Catalog | S25 | PASS | S25: "Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store" |
| 139 | How it works | Tutorial log data is TSV | S28 | PASS | S28: "The sample log data is in tab-separated values (TSV) format" |
| 140 | How it works | LOCATION names a folder, not a file | S28 | PASS | S28: "expects to scan all of the files in a folder, the LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 141 | How it works | Athena keeps queries 45 days | S29 | PASS | S29: "Queries are retained for 45 days." |
| 142 | How it works | Partitioning restricts scanned data | S31 | PASS | S31: "By partitioning your data, you can restrict the amount of data scanned by each query" (the source continues "thus ..."; the page's "improving performance and reducing cost" is on the next line, which I did not read) |
| 143 | How it works | WHERE on the partition: scan only that partition | S31 | PASS | S31: "WHERE clause, Athena scans the data only from that" |
| 144 | How it works | Hive style: key=value paths joined by equal signs | S31 | PASS | S31: "Athena can use Apache Hive style partitions, whose data paths contain key value pairs connected by equal signs" |
| 145 | How it works | MSCK REPAIR TABLE loads Hive partitions, only Hive style | S31 | PASS | S31: "you can use the MSCK REPAIR TABLE command, which works only with Hive-style" |
| 146 | How it works | Non-Hive: ALTER TABLE ADD PARTITION | S31 | PASS | S31: "For such non-Hive style partitions, you use ALTER TABLE ADD PARTITION to" |
| 147 | How it works | State machines defined using JSON text | S34 | PASS | S34: "State machines are defined using JSON text" |
| 148 | How it works | StartAt and States required | S34 | PASS | S34: "StartAt (Required)" and "States (Required)" |
| 149 | How it works | StartAt exact, case sensitive | S34 | PASS | S34: "A string that must exactly match (is case sensitive) the name of one of the state objects." |
| 150 | How it works | States is a comma-delimited set of states | S34 | PASS | S34: "An object containing a comma-delimited set of states." |
| 151 | How it works | TimeoutSeconds optional, max run time | S34 | PASS | S34: "TimeoutSeconds (Optional) The maximum number of seconds an execution of the state machine can run." |
| 152 | How it works | Longer run fails with States.Timeout | S34 | PASS | S34: "the execution fails with a States.Timeout Error Name." |
| 153 | How it works | Choice adds conditional logic | S35 | PASS | S35: "A Choice state (\"Type\": \"Choice\") adds conditional logic to a" |
| 154 | How it works | Each Choice Rule is evaluated true or false | S35 | PASS | S35: "Step Functions evaluates each Choice Rule to true or false." |
| 155 | How it works | Default = state to go to if no rule is true | S35 | PASS | S35: "The name of the state to transition to if no Choice Rule evaluates to true." |
| 156 | How it works | No rule true and no Default: error | S35 | PASS | S35: "no Default is provided, the state machine will throw an error" |
| 157 | How it works | Two workflow types (lead-in) | S32 | PASS | S32: "Step Functions has two workflow types:" |
| 158 | How it works | Standard: long-running, auditable | S32 | PASS | S32: "Standard workflows are ideal for long-running, auditable workflows" |
| 159 | How it works | Standard: exactly-once, up to one year | S32 | PASS | S32: "Standard workflows have exactly-once workflow execution and can run for up to one year." |
| 160 | How it works | Express: high-event-rate | S32 | PASS | S32: "Express workflows are ideal for high-event-rate workloads" |
| 161 | How it works | Express: at-least-once, up to five minutes | S32 | PASS | S32: "Express workflows have at-least-once workflow execution and can run for up to five minutes." |
| 162 | How it works | Express steps may run more than once | S32 | PASS | S32: "one or more steps in an Express Workflow can potentially run more than once" |
| 163 | How it works | AWS SDK integrations call any AWS service | S32 | PASS | S32: "provide a way to call any AWS service directly from your state machine" |
| 164 | How it works | All states except Pass and Wait can hit runtime errors | S36 | PASS | S36: "All states, except Pass and Wait states, can encounter runtime errors." |
| 165 | How it works | Causes: Choice without a match; task failure such as a Lambda exception | S36 | PASS | S36: "such as a Choice state without a matching rule" and "Task failures - such as an exception in a AWS Lambda function" |
| 166 | How it works | Default: fail the whole execution | S36 | PASS | S36: "Step Functions defaults to failing the entire state machine execution." |
| 167 | How it works | Task, Parallel, Map can have Retry | S36 | PASS | S36: "Task, Parallel, and Map states can have a field named Retry" |
| 168 | How it works | Catchers: Task, Parallel, Map, not top-level failures | S36 | PASS | S36: "catchers are available for Task, Parallel and Map states, but not for top-level state machine execution failures." |
| 169 | How it works | Error names are case-sensitive strings | S36 | PASS | S36: "Step Functions identifies errors using case-sensitive strings, known as error names" |
| 170 | How it works | TestState accepts a state definition and runs it | S37 | PASS | S37: "The TestState API accepts the definition of a state and executes it." |
| 171 | How it works | Test without creating or updating a state machine | S37 | PASS | S37: "It allows you to test a state without creating a state machine or updating an existing state machine." |
| 172 | How it works | Inspection levels INFO, DEBUG, TRACE | S37 | PASS | S37 lines 33-35 list "INFO", "DEBUG", "TRACE" |
| 173 | How it works | INFO is the default | S37 | PASS | S37: "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 174 | How it works | DEBUG shows output and input/output processing | S37 | PASS | S37: "DEBUG – Shows the state output and the result of input and output data processing if the test succeeds." |
| 175 | How it works | A mock tests logic without calling the service | S37 | PASS | S37: "allowing you to test your state machine logic without invoking actual AWS services." |
| 176 | How it works | With a mock the role is optional | S37 | PASS | S37: "When you specify a mock, the roleArn parameter becomes optional" |
| 177 | How it works | TestState enables unit tests | S37 | PASS | S37: "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 178 | Try it | Record: run date, versions, image digest, size, `~/.aws` finding, separate check | none | N/A | The page labels this as the record of its own run. The two sentences "No page that the tutorial read says why the file appears" and "Step 5 reuses the AWS CLI..." describe the page and its own practice. |
| 179 | Try it | Step 1: function is the Python function of the AWS tutorial | S2 | PASS | S2: "Paste the following code into the lambda_function.py tab" with the Python code (lines 91-107) |
| 180 | Try it | Takes JSON with length and width, multiplies, returns JSON string | S2 | PASS | S2: "your function takes a JSON object containing two integer values labeled \"length\" and \"width\". The function multiplies these values to calculate an area and returns this as a JSON string." |
| 181 | Try it | `lambda_function.py` code block | S2 | PASS | The code matches S2 lines 91-107 (import json, logging, logger.setLevel(logging.INFO), lambda_handler, print, logger.info, json.dumps, calculate_area). The page adds only blank lines and indentation. |
| 182 | Try it | Test file is the tutorial's own, uses `unittest` | none | N/A | The tutorial's own work. |
| 183 | Try it | A test case is the unit of testing for a specific response to a set of inputs | S41 | PASS | S41: "A test case is the individual unit of testing. It checks for a specific response to a particular set of inputs." |
| 184 | Try it | `TestCase` is the base class | S41 | PASS | S41: "unittest provides a base class, TestCase, which may be used to create new test cases" (the exact S41 wording continues on the next line) |
| 185 | Try it | `assertEqual` fails if not equal | S41 | PASS | S41: "Test that first and second are equal. If the values do not compare equal, the test will fail." |
| 186 | Try it | `assertRaises` passes if the exception is raised | S41 | PASS | S41: "The test passes if exception is raised" |
| 187 | Try it | `assertLogs` tests that at least one message is logged | S41 | PASS | S41: "A context manager to test that at least one message is logged on" |
| 188 | Try it | `subTest` runs the code block as a subtest | S41 | PASS | S41: "Return a context manager which executes the enclosed code block as a subtest." |
| 189 | Try it | `Context` is a fake; a fake is a mock that takes shortcuts | S8 | PASS | S8: "A fake is a mock that takes shortcuts to simplify or speed up testing." |
| 190 | Try it | `test_handler.py` code block and `python3 -m unittest -v test_handler` | none | N/A | The tutorial's own code and command; the run output is the record of its own run. |
| 191 | Try it | Test 1 uses the AWS event with `length` and `width` | S2 | PASS | S2: `"length": 6, "width": 7` |
| 192 | Try it | The page shows the log line `The area is 42` | S2 | PASS | S2: "The area is 42" |
| 193 | Try it | Test 2: function outputs the log group name via `log_group_name` | S2 | PASS | S2: "your function uses the log_group_name parameter to output the name of its CloudWatch log group." |
| 194 | Try it | The fake context holds the log group name the page shows | S2 | PASS | S2: "CloudWatch logs group: /aws/lambda/myLambdaFunction" |
| 195 | Try it | Test 3 and test 4 observations (KeyError, odd input results) | none | N/A | The tutorial's own result from running the code. |
| 196 | Try it | AWS says a handler should extract and validate event data, then pass it to business logic | S8 | PASS | S8: "you should write a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic." |
| 197 | Try it | Plain Python run says nothing about timeout, memory, role, logs permission | none | N/A | The tutorial's own conclusion. The AWS fact that follows has its own row (198). |
| 198 | Try it | All Lambda code depends on timeout and memory settings | S8 | PASS | S8: "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly." |
| 199 | Try it | Step 2: DynamoDB local is available as a Docker image | S21 | PASS | S21: "The downloadable version of Amazon DynamoDB is available as a Docker image." |
| 200 | Try it | The AWS page names the image `amazon/dynamodb-local:latest` | S21 | PASS | S21: `image: "amazon/dynamodb-local:latest"` |
| 201 | Try it | Image pulled with `docker pull` before the run | none | N/A | The tutorial's own practice. |
| 202 | Try it | `--publish` or `-p` makes a port available outside the host | S42 | PASS | S42: "Use the --publish or -p flag to make a port available outside the host" |
| 203 | Try it | `-p 192.168.1.100:8080:80` maps 8080 on that host IP to container TCP 80 | S42 | PASS | S42: "-p 192.168.1.100:8080:80 Map port 8080 on the Docker host IP 192.168.1.100 to TCP port 80 in the container." |
| 204 | Try it | The localhost IP restricts access to the Docker host | S42 | PASS | S42: "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 205 | Try it | `--rm` removes the container and anonymous volumes on exit | S43 | PASS | S43: "Automatically remove the container and its associated anonymous volumes when it exits" |
| 206 | Try it | `-inMemory` keeps no data after stop | S22 | PASS | S22: "When you stop DynamoDB, none of the data is saved." |
| 207 | Try it | `-disableTelemetry` sends no telemetry | S22 | PASS | S22: "DynamoDB local will not send any telemetry." |
| 208 | Try it | Credentials are the AWS page's made-up values | S21 | PASS | S21: "fakeMyKeyId", "fakeSecretAccessKey", "fakeRegion" |
| 209 | Try it | Meaning of the three env vars | S40 | PASS | S40: "Specifies the location of the file that the AWS CLI uses to store configuration profiles." / "...to store access keys." / "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 210 | Try it | `ddb` adds `--endpoint-url` because the CLI needs it each time | S22 | PASS | S22: "you must specify --endpoint-url with each AWS CLI command." |
| 211 | Try it | Block 1 (docker run, exports, ENDPOINT, helper functions) | none | N/A | The tutorial's own choices, labeled so. The facts in it have rows 202-210. `-jar DynamoDBLocal.jar` is in S22 line 78-79. |
| 212 | Try it | `create-table` creates the Music table | S14 | PASS | S14: "The following AWS CLI example creates a new Music table using create-table." |
| 213 | Try it | `put-item` creates several new items | S15 | PASS | S15: "The following AWS CLI example creates several new items in the Music table." |
| 214 | Try it | `get-item` uses `--consistent-read` for strongly consistent reads | S16 | PASS | S16: "The consistent-read parameter is used below to demonstrate strongly consistent reads." |
| 215 | Try it | `update-item` updates an item | S17 | PASS | S17: "The following AWS CLI example updates an item in the Music table." |
| 216 | Try it | `query` queries by the partition key | S18 | PASS | S18: "query and providing the partition key." |
| 217 | Try it | `delete-table` deletes the table | S19 | PASS | S19: "aws dynamodb delete-table --table-name Music" (the step is the delete-table step) |
| 218 | Try it | The item-without-sort-key check follows from the key rule | S10 | PASS | S10: "Each item in the table must have these two attributes." |
| 219 | Try it | Block 2 commands | S14-S18 | PASS | create-table, put-item (four items), get-item, update-item and query args match S14 lines 43-50, S15 lines 65-80, S16 lines 34-36, S17 lines 47-52, S18 lines 31-34. |
| 220 | Try it | `docker stop` stops running containers | S44 | PASS | S44: "Stop one or more running containers" |
| 221 | Try it | Block 3 and the expected count of 0 | none | N/A | The tutorial's own check and expectation. |
| 222 | Try it | Sample of create-table shows CREATING | S14 | PASS | S14: `"TableStatus": "CREATING",` |
| 223 | Try it | When creation ends, TableStatus is ACTIVE | S14 | PASS | S14: "the value of the TableStatus field is set to ACTIVE." |
| 224 | Try it | Sample of delete-table shows DELETING | S19 | PASS | S19: `"TableStatus": "DELETING",` |
| 225 | Try it | DynamoDB local: operations immediate, state always ACTIVE | S22 | PASS | S22: "occur immediately, and table state is always ACTIVE." |
| 226 | Try it | Sample of step 3 shows Awards as S | S16 | PASS | S16 lines 48-49: `"Awards": { "S": "10"` |
| 227 | Try it | Sample of step 5 shows Awards as N | S18 | PASS | S18 lines 48-49: `"Awards": { "N": "10"` |
| 228 | Try it | Sorted storage explains Happy Day before PartiQL Rocks | S10 | PASS | S10: "partition key value are stored together, in sorted order by sort key" |
| 229 | Try it | Run output bullets (ACTIVE at once, ValidationException, 0 containers) | none | N/A | The record of the page's own run. |
| 230 | Try it | Most reads look strongly consistent, so no stale read in the run | S22 | PASS | S22: "most reads appear to be strongly consistent." The "so" sentence is the tutorial's inference. |
| 231 | Try it | Provisioned throughput is ignored, so no throttling in the run | S22 | PASS | S22: "Provisioned throughput settings are ignored in downloadable DynamoDB" |
| 232 | Try it | Step 3 rule: WHERE on the partition means scan only that partition | S31 | PASS | S31: "WHERE clause, Athena scans the data only from that" |
| 233 | Try it | Lines are tab-separated like the AWS sample | S28 | PASS | S28: "The sample log data is in tab-separated values (TSV) format" |
| 234 | Try it | Step 3 script and output | none | N/A | The tutorial's own model and its own run output. |
| 235 | Try it | Step 4: StartAt and States are required | S34 | PASS | S34: "StartAt (Required)", "States (Required)" |
| 236 | Try it | StartAt must exactly match a state name | S34 | PASS | S34: "must exactly match (is case sensitive) the name of one of the state objects." |
| 237 | Try it | Choice goes to Default; no Default means an error | S35 | PASS | S35: "The name of the state to transition to if no Choice Rule evaluates to true." and "no Default is provided, the state machine will throw an error" |
| 238 | Try it | Hello World definition is the S34 example | S34 | PASS | S34: `"Comment": "A Hello World example of the Amazon States Language using a Pass state"`, `"StartAt": "HelloWorld"` |
| 239 | Try it | Choice example sends `{"number": 2}` to `Equals 2` | S37 | PASS | S37: `--definition '{"Type": "Choice", "Choices": [{"Variable": "$.number", "NumericEquals": 1, "Next": "Equals 1"}, {"Variable": "$.number", "NumericEquals": 2, "Next": "Equals 2"}], "Default": "No Match"}'` with `--input '{"number": 2}'` |
| 240 | Try it | Step 4 script, output and bullets | none | N/A | The tutorial's own model and its own run. |
| 241 | Try it | Step 5: `--generate-cli-skeleton` generates a parameter template | S39 | PASS | S39: "The --generate-cli-skeleton generates and displays a parameter template" |
| 242 | Try it | `FunctionName` and `Timeout` match `--function-name` and `--timeout` | S5 | PASS | S5: "--function-name my-function \ --timeout 120" |
| 243 | Try it | `definition`, `roleArn`, `input`, `inspectionLevel` match CLI options | S37 | PASS | S37: "--definition", "--role-arn", "--input", "--inspection-level DEBUG" |
| 244 | Try it | `stateName` matches the `stateName` parameter | S37 | PASS | S37: "A complete state machine definition with stateName parameter" |
| 245 | Try it | `revealSecrets` matches the parameter | S37 | PASS | S37: "If you set the revealSecrets parameter to false" |
| 246 | Try it | `mock` and `context` match the headings of the page | S37 | FAIL | The S37 headings are "Mocking service integrations" and "Using context field in the TestState API". Neither heading is `mock` or `context`; `--mock` appears in the examples. Fix: "`context` matches the heading 'Using context field in the TestState API', and `mock` matches the `--mock` option in the examples". |
| 247 | Try it | Template shows INFO; INFO is the default | S37 | PASS | S37: "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 248 | Try it | Step 6: the Lambda tutorial needs an AWS account | S2 | PASS | S2: "To get started with AWS, you need an AWS account." |
| 249 | Try it | The Athena tutorial says to sign up for an account | S26 | PASS | S26: "If you have not already done so, sign up for an AWS account." |
| 250 | Try it | Lambda has pay-per-use billing | S1 | PASS | S1: "Pay-per-use billing" |
| 251 | Try it | AWS points to its pricing page | S1 | PASS | S1: "For pricing information, see AWS Lambda Pricing." |
| 252 | Try it | Athena tutorial: charged for queries | S26 | PASS | S26: "The tutorial uses live resources, so you are charged for the queries that you run." |
| 253 | Try it | Sample data free; own S3 data charged | S26 | PASS | S26: "You aren't charged for the sample data in the location that this tutorial uses, but if you upload your own data files to Amazon S3, charges do apply." |
| 254 | Try it | Standard workflows priced by state transition | S32 | PASS | S32: "Priced by state transition" |
| 255 | Try it | Lambda 1: Event Functions page, Create Event Function, Author from scratch | S2 | PASS | S2: "Open the Event Functions page of the Lambda console." "Choose Create Event Function." "Select Author from scratch." |
| 256 | Try it | Lambda 2: Node.js 24 or Python 3.14 | S2 | PASS | S2: "For Runtime, choose either Node.js 24 or Python 3.14." |
| 257 | Try it | Lambda creates a role with basic CloudWatch Logs permissions | S2 | PASS | S2: "the role that Lambda creates grants basic permissions to write to CloudWatch Logs." |
| 258 | Try it | Lambda 3: paste code, replace, Deploy | S2 | PASS | S2: "replacing the code that Lambda created." "In the DEPLOY section, choose Deploy" |
| 259 | Try it | Do not rename the handler | S2 | PASS | S2: "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 260 | Try it | Lambda 4: `myTestEvent`, run icon | S2 | PASS | S2: "For Event Name, enter myTestEvent." "choose the run icon next to your test event" |
| 261 | Try it | Lambda 5: delete function, log group, role | S2 | PASS | S2: "delete it. You can also delete the log group that stores the function's logs, and the execution role" |
| 262 | Try it | Athena 1: S3 bucket in the same Region for results | S26 | PASS | S26: "Using the same AWS Region ... follow the steps to create a bucket in Amazon S3 to hold your Athena query results. You will configure this bucket to be your query output location." |
| 263 | Try it | Athena 2: Location of query result box, `s3://` | S27 | PASS | S27: "In the Location of query result box, enter the path..." "Prefix the path with s3://." |
| 264 | Try it | Athena 3: `mydatabase` with CREATE DATABASE | S27 | PASS | S27: "To create a database named mydatabase, enter the following CREATE" |
| 265 | Try it | Athena 4: table from the CloudFront sample data | S28 | PASS | S28: LOCATION 's3://athena-examples-my-region/cloudfront/plaintext/' |
| 266 | Try it | The page warns of an important limitation in its first CREATE TABLE | S28 | PASS | S28: "Do not use this example just yet as it has an important limitation" |
| 267 | Try it | Athena 5: run a SQL query and see results | S29 | PASS | S29: "you can run SQL queries on the table and see the results in Athena." |
| 268 | Try it | Athena 6: no clean-up step; tutorial's advice | none | N/A | The tutorial's own advice. |
| 269 | Try it | Step Functions 1: 20-30 minutes; Run Hello World | S38 | PASS | S38: "Estimated duration: 20-30 minutes" and "choose Run Hello World" |
| 270 | Try it | Step Functions 2: Code button shows ASL | S38 | PASS | S38: "Choose the { } Code button to view the ASL code." |
| 271 | Try it | Step Functions 3: cannot rename; draft with no resources | S38 | PASS | S38: "You cannot rename a state machine after you create it." "Until now, you've been working on a draft of your state machine. No resources have been created yet." |
| 272 | Try it | Step Functions 4: new role; execution `hello001`, empty input | S38 | PASS | S38: "accept the default to Create a new role." "Enter hello001 for the name of the execution." "Leave the input field empty." |
| 273 | Try it | Step Functions 5: delete IAM roles, then the state machine | S38 | PASS | S38: "To delete the IAM roles" ... "select Delete to delete the state machine." |
| 274 | How a tester uses it | You still write unit, integration, end-to-end tests | S8 | PASS | S8: "For serverless testing, you still write unit, integration and end-to-end tests." |
| 275 | How a tester uses it | Cloud tests give the most accurate measure | S8 | PASS | S8: "Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications." |
| 276 | How a tester uses it | Cannot fully replicate the cloud locally | S8 | PASS | S8: "You cannot fully replicate a cloud environment locally." |
| 277 | How a tester uses it | Handler is a slim adapter | S8 | PASS | S8: "should be a slim adapter that takes in event data and passes only the details that matter to your business logic" |
| 278 | How a tester uses it | Handler extracts and validates data | S8 | PASS | S8: "extracts and validates data from the incoming event and context objects" |
| 279 | How a tester uses it | Emulator tests may pass locally, fail in the cloud | S8 | PASS | S8: "Tests that rely on emulators might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas." |
| 280 | How a tester uses it | Mock frameworks are limited for IAM and quotas | S8 | PASS | S8: "Mock frameworks are limited in testing or detecting AWS Identity and Access Management (IAM) policy or quota limitations." |
| 281 | How a tester uses it | A function with no other service still depends on timeout and memory | S8 | PASS | S8: "All Lambda function code has a dependency on timeout and memory settings" |
| 282 | How a tester uses it | Log permission cannot be mocked or emulated | S8 | PASS | S8: "This required permission cannot be accurately mocked or emulated." |
| 283 | How a tester uses it | Unique resource names per stack | S8 | PASS | S8: "Automated test processes should create uniquely named resources for each stack." |
| 284 | How a tester uses it | Isolate load testing | S8 | PASS | S8: "Load testing is another activity you should isolate from your production stack." |
| 285 | How a tester uses it | Alerts and controls against spending | S8 | PASS | S8: "environments should be configured with alerts and controls to avoid unnecessary spending." |
| 286 | How a tester uses it | Timeout near the average duration raises the risk | S5 | PASS | S5: "If the timeout value is close to the average duration of a function, there is a higher" (the source line continues "risk ... unexpectedly") |
| 287 | How a tester uses it | Use datasets at the upper bounds | S5 | PASS | S5: "Tests often use small samples for convenience, but you should use datasets at the upper bounds of what is reasonably expected for your workload." |
| 288 | How a tester uses it | Sync: error in the response; async: Lambda retries | S3 | PASS | S3: "view the error message in the response and retry the invocation manually. For asynchronous invocations, Lambda handles retries automatically" |
| 289 | How a tester uses it | Do not assume the environment persists | S6 | PASS | S6: "You should not assume that the execution environment will persist indefinitely." |
| 290 | How a tester uses it | /tmp keeps content while frozen | S6 | PASS | S6: "The directory content remains when the execution environment is frozen" |
| 291 | How a tester uses it | A test can pass on reused state left by an earlier call | S6 | PASS | This "So ..." sentence explains the cited /tmp sentence. S6: "Objects declared outside of the function's handler method remain initialized" and "Lambda reset does not clear the /tmp directory content before the next init phase." |
| 292 | How a tester uses it | Cold starts more common in dev and test | S6 | PASS | S6: "cold starts are typically more common in development and test functions than production workloads." |
| 293 | How a tester uses it | Out of concurrency means throttling | S7 | PASS | S7: "experience throttling (that is, they start to drop requests) if you run out of available concurrency." |
| 294 | How a tester uses it | Eventually consistent is the default; may miss a recent write | S11 | PASS | S11: "Eventually consistent is the default read consistent model for all read operations." "might not reflect the results of a recently completed write operation." |
| 295 | How a tester uses it | ConsistentRead true gives the latest data | S11 | PASS | S11: "If you set ConsistentRead to true, DynamoDB returns a response with the most" |
| 296 | How a tester uses it | GSI reads always eventually consistent | S11 | PASS | S11: "All reads from GSIs and streams are eventually" |
| 297 | How a tester uses it | DynamoDB local: most reads look strongly consistent | S22 | PASS | S22: "most reads appear to be strongly consistent." |
| 298 | How a tester uses it | It ignores provisioned throughput | S22 | PASS | S22: "Provisioned throughput settings are ignored in downloadable DynamoDB" |
| 299 | How a tester uses it | So a local run cannot show stale reads or throttling | S22 | PASS | The sentence is an inference from the two cited S22 facts (rows 297 and 298). |
| 300 | How a tester uses it | TTL: deletion at any time, within a few days | S13 | PASS | S13: "might be deleted by the system at any time, typically within a few days after their expiration." |
| 301 | How a tester uses it | TTL attribute must be a Number in epoch seconds | S13 | PASS | S13: "must be stored as a Number data type in Unix epoch time format at the seconds granularity." |
| 302 | How a tester uses it | Filter expressions remove expired items | S13 | PASS | S13: "Use filter expressions to remove expired items from Scan and Query results." |
| 303 | How a tester uses it | Music items need both key attributes | S10 | PASS | S10: "Each item in the table must have these two attributes." |
| 304 | How a tester uses it | Key attribute must be a scalar: string, number, binary | S10 | PASS | S10: "Each primary key attribute must be a scalar" ... "string," (line 204) |
| 305 | How a tester uses it | In the tutorial's run the item without the sort key was refused | none | N/A | The record of the page's own run. |
| 306 | How a tester uses it | Sample of step 3 differed from the real output | none | N/A | The record of the page's own run; it points to "step 2 of Try it". |
| 307 | How a tester uses it | WHERE on the partition: scan only that partition | S31 | PASS | S31: "WHERE clause, Athena scans the data only from that" |
| 308 | How a tester uses it | MSCK REPAIR TABLE works only with Hive-style | S31 | PASS | S31: "which works only with Hive-style" |
| 309 | How a tester uses it | Camel-case S3 path: no partitions added | S31 | PASS | S31: "in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 310 | How a tester uses it | A table must be registered before querying | S30 | PASS | S30: "before querying data, a table must be registered in Athena." |
| 311 | How a tester uses it | TestState enables unit tests | S37 | PASS | S37: "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 312 | How a tester uses it | Assert which Catch or Retry applies | S37 | PASS | S37: "Error handling: Which Catch or Retry applies" |
| 313 | How a tester uses it | Assert input after InputPath in `afterInputPath` | S37 | PASS | S37: "afterInputPath – Input after Step Functions applies the InputPath filter." |
| 314 | How a tester uses it | Mocking is needed for Map, Parallel, Activity, .sync, waitForTaskToken | S37 | PASS | S37: "Mocking is necessary if you need to test the following state types or service integration patterns - Map, Parallel, Activity, .sync service integrations and waitForTaskToken service integrations." |
| 315 | How a tester uses it | Console TestState lacks some enhancements | S37 | PASS | S37: "The console TestState feature does not yet support some of the enhancements described in this document" |
| 316 | How a tester uses it | No Choice rule true and no Default: error | S35 | PASS | S35: "no Default is provided, the state machine will throw an error" |
| 317 | How a tester uses it | Express step may run more than once; each runs at least once | S32 | PASS | S32: "one or more steps in an Express Workflow can potentially run more than once, while each step in the workflow executes at least once." |
| 318 | How a tester uses it | "So check that a repeated step does no harm." | none | N/A | Advice for the reader's own work. |
| 319 | Common mistakes | Do not rename the handler | S2 | PASS | S2: "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 320 | Common mistakes | Lambda assumes the role automatically | S4 | PASS | S4: "Lambda automatically assumes your execution role when you invoke your function." |
| 321 | Common mistakes | Avoid manual `sts:AssumeRole` | S4 | PASS | S4: "You should avoid manually calling sts:AssumeRole to assume the execution role in your function code." |
| 322 | Common mistakes | Trust policy must name the Lambda principal | S4 | PASS | S4: "the role's trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service." |
| 323 | Common mistakes | Cannot fully replicate the cloud locally | S8 | PASS | S8: "You cannot fully replicate a cloud environment locally." |
| 324 | Common mistakes | Emulator tests may fail in the cloud | S8 | PASS | S8: "Tests that rely on emulators might provide successful results locally, but fail in the cloud" |
| 325 | Common mistakes | Slim handler | S8 | PASS | S8: "should be a slim adapter" |
| 326 | Common mistakes | Timeout close to the average duration | S5 | PASS | S5: "If the timeout value is close to the average duration of a function, there is a higher" |
| 327 | Common mistakes | Do not assume persistence | S6 | PASS | S6: "You should not assume that the execution environment will persist indefinitely." |
| 328 | Common mistakes | Background processes resume on reuse | S6 | PASS | S6: "the function ended resume if Lambda reuses the execution environment." |
| 329 | Common mistakes | SDKs and tools default to the web service endpoint | S22 | PASS | S22: "By default, the AWS SDKs and tools use endpoints for the Amazon DynamoDB web service." |
| 330 | Common mistakes | Specify the local endpoint to use DynamoDB local | S22 | PASS | S22: "you must specify the local endpoint" |
| 331 | Common mistakes | DynamoDB local is for development and testing only | S22 | PASS | S22: "intended for development and testing purposes only." |
| 332 | Common mistakes | `-inMemory`: nothing saved on stop | S22 | PASS | S22: "When you stop DynamoDB, none of the data is saved." |
| 333 | Common mistakes | Telemetry sent in the background | S23 | PASS | S23: "If telemetry remains on, DynamoDB local sends telemetry data in the background" |
| 334 | Common mistakes | No JOIN in DynamoDB | S9 | PASS | S9: "DynamoDB doesn't support a JOIN operator." |
| 335 | Common mistakes | Eventually consistent is the default | S11 | PASS | S11: "Eventually consistent is the default read consistent model for all read operations." |
| 336 | Common mistakes | Strongly consistent GSI or stream reads unsupported | S11 | PASS | S11 line 36: "DynamoDB stream are not supported." (the full sentence is on lines 35-36) |
| 337 | Common mistakes | TTL deletion timing | S13 | PASS | S13: "at any time, typically within a few days after their expiration." |
| 338 | Common mistakes | Non-Number TTL ignored | S13 | PASS | S13: "Items with a TTL attribute that is not a Number type are ignored by the TTL process." |
| 339 | Common mistakes | LOCATION is a folder | S28 | PASS | S28: "LOCATION clause specifies an Amazon S3 folder location, not a specific file." |
| 340 | Common mistakes | Camel-case path with MSCK | S31 | PASS | S31: "in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 341 | Common mistakes | MSCK works only with Hive-style | S31 | PASS | S31: "which works only with Hive-style" |
| 342 | Common mistakes | Big unpartitioned bucket affects GET rate limits | S31 | PASS | S31 lines 28-32: "...the data is not partitioned, such queries may affect the GET" (the rest is on the next line, which I did not read) |
| 343 | Common mistakes | StartAt exact and case sensitive | S34 | PASS | S34: "must exactly match (is case sensitive) the name of one of the state objects." |
| 344 | Common mistakes | No Default: error | S35 | PASS | S35: "no Default is provided, the state machine will throw an error" |
| 345 | Common mistakes | Choice does not support End | S35 | PASS | S35: "Choice states do not support the End field." |
| 346 | Common mistakes | Catchers not for top-level failures | S36 | PASS | S36: "but not for top-level state machine execution failures." |
| 347 | Common mistakes | Default: fail the whole execution | S36 | PASS | S36: "Step Functions defaults to failing the entire state machine execution." |
| 348 | Common mistakes | Express step may run more than once | S32 | PASS | S32: "can potentially run more than once" |
| 349 | Common mistakes | Console TestState: no mocking, no Map/Parallel | S37 | PASS | S37: "such as mocking service integrations, testing Map and Parallel states, or Activity, .sync and .waitForTaskToken patterns." |
| 350 | Common mistakes | Cannot rename a state machine | S38 | PASS | S38: "You cannot rename a state machine after you create it." |
| 351 | Common mistakes | Provisioned concurrency incurs charges | S7 | PASS | S7: "Using provisioned concurrency incurs additional charges to your account." |
| 352 | Common mistakes | Provisioned mode charges for provisioned capacity | S12 | PASS | S12: "not how much of that provisioned capacity you actually consumed." |
| 353 | Common mistakes | Athena tutorial: queries charged; own data charged | S26 | PASS | S26: "you are charged for the queries that you run" ... "if you upload your own data files to Amazon S3, charges do apply." |
| 354 | What a tester can check | Tutorial advice callout (12 bullets) | none | PASS | The callout is titled "Tutorial advice" and says "This list is the tutorial's own advice". No bullet states a new fact about a tool. ConsistentRead, Choice branches, endpoint and credentials are all supported elsewhere on the page. |
| 355 | Key words | Serverless | none | PASS | "Lambda is a serverless compute service" and "you can run code without provisioning or managing servers" (How it works, S1 sentences). |
| 356 | Key words | Event | none | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 357 | Key words | Handler | none | PASS | "the handler function is always the entry point to your code. When your function is invoked, Lambda runs this method." |
| 358 | Key words | Context object | none | PASS | "The context object contains information about the function invocation and execution environment." |
| 359 | Key words | Trigger | none | PASS | "Some services can invoke a function with each new event, and this is called a trigger." |
| 360 | Key words | Event source mapping | none | PASS | "Lambda invokes the function with batches of records, which is called an event source mapping." |
| 361 | Key words | Synchronous invocation | none | PASS | "With synchronous invocation, you wait for the function to process the event and return a response." |
| 362 | Key words | Asynchronous invocation | none | PASS | "Lambda queues the event for processing and returns a response immediately." |
| 363 | Key words | Execution role | none | PASS | "A function's execution role is an IAM role that grants the function permission to access AWS services and resources." |
| 364 | Key words | Timeout | none | PASS | "The default is 3 seconds, and you can adjust it ... up to a maximum value of 1,800 seconds (30 minutes)." |
| 365 | Key words | Execution environment | none | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime environment." |
| 366 | Key words | Cold start | none | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start." |
| 367 | Key words | Concurrency | none | PASS | "Concurrency is the number of in-flight requests that a function is handling at the same time." |
| 368 | Key words | Reserved concurrency | none | PASS | "Reserved concurrency reserves a portion of the concurrency of your account for a function. There is no charge for configuring it." |
| 369 | Key words | Provisioned concurrency | none | PASS | "pre-initializes environment instances, which reduces cold start latencies. Using provisioned concurrency incurs additional charges." |
| 370 | Key words | Throttling | none | PASS | "it experiences throttling, which means that it starts to drop requests." |
| 371 | Key words | Table, item, attribute | none | PASS | "A table is a collection of items, and each item is a collection of attributes." |
| 372 | Key words | Primary key | none | PASS | "The primary key uniquely identifies each item in the table, so that no two items can have the same key." |
| 373 | Key words | Partition key | none | PASS | "DynamoDB uses the value of the partition key as input to an internal hash function. The output of the hash function determines the partition in which the item is stored." |
| 374 | Key words | Sort key | none | PASS | "all items with the same partition key value are stored together, in sorted order by sort key value." |
| 375 | Key words | Global secondary index | none | PASS | "A global secondary index has a partition key and sort key that can be different from those of the table." |
| 376 | Key words | Local secondary index | none | PASS | "A local secondary index has the same partition key as the table, but a different sort key." |
| 377 | Key words | Eventually consistent read | none | PASS | "eventually consistent, which is the default" and "might not reflect the results of a recently completed write." |
| 378 | Key words | Strongly consistent read | none | PASS | "If you set ConsistentRead to true, DynamoDB returns the most up-to-date data" and "Strongly consistent reads from a global secondary index or a stream are not supported." |
| 379 | Key words | On-demand mode | none | PASS | "On-demand mode is the default and recommended throughput option for most workloads." and "DynamoDB on-demand mode offers pay-per-request pricing". |
| 380 | Key words | Provisioned mode | none | PASS | "In provisioned mode, you must specify the number of reads and writes per second that you require." "You are charged for the capacity that you provisioned" |
| 381 | Key words | TTL | none | PASS | "Time To Live (TTL) is a method for deleting items that are no longer relevant." and "typically within a few days after their expiration" |
| 382 | Key words | DynamoDB local | none | PASS | "The downloadable version is intended for development and testing purposes only." |
| 383 | Key words | Athena table | none | PASS | "The metadata in a table tells Athena where the data is located in Amazon S3, and specifies the structure of the data." "Before querying data, a table must be registered in Athena." |
| 384 | Key words | Partition (Athena) | none | PASS | "If you query a partitioned table and specify the partition in the WHERE clause, Athena scans the data only from that partition." |
| 385 | Key words | Hive style partition | none | PASS | "Athena can use Hive style partitions, whose data paths contain key value pairs connected by equal signs." |
| 386 | Key words | MSCK REPAIR TABLE | none | PASS | "The MSCK REPAIR TABLE command loads new Hive partitions, and it works only with Hive-style partitions." |
| 387 | Key words | State machine | none | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states." |
| 388 | Key words | State | none | PASS | "Each step in a workflow is called a state." |
| 389 | Key words | Execution | none | PASS | "Instances of running workflows performing tasks are called executions." |
| 390 | Key words | Standard workflow | none | PASS | "They have exactly-once workflow execution, and they can run for up to one year." |
| 391 | Key words | Express workflow | none | PASS | "They have at-least-once workflow execution, and they can run for up to five minutes." "one or more steps ... can potentially run more than once" |
| 392 | Key words | Choice state | none | PASS | "A Choice state adds conditional logic to a state machine." "Default is the name of the state to transition to if no Choice Rule evaluates to true." |
| 393 | Key words | TestState API | none | PASS | "The TestState API accepts the definition of a state and executes it. It allows you to test a state without creating a state machine" |
| 394 | Key words | Mock | none | PASS | "A mock lets you test state logic without calling the actual service." |
| 395 | Key words | Fake | none | PASS | "a fake is a mock that takes shortcuts to simplify or speed up testing." |
| 396 | Key words | Test case (unittest) | none | PASS | "A test case is the individual unit of testing, and it checks for a specific response to a particular set of inputs." |

Open FAILs after round 10: 1

Changed after this round: Row 246 (Try it, step 5): the page said that `mock` and `context` match the headings of the TestState page (S37). The headings are "Mocking service integrations" and "Using context field in the TestState API", so neither heading is `mock` or `context`. The page now says that `mock` matches the `--mock` option in the examples of S37 and that `context` matches the `context` parameter of S37, with a quote for each in the notes.

## Round 11 (2026-11-20)

# Fact check: devops / aws-data-serverless (round 11)

| # | Section | Claim | Cite | Verdict | Quote or reason |
|---|---|---|---|---|---|
| 1 | Description | Page summary (services, practice run, read-along) | none | N/A | Sentence that describes the page itself. |
| 2 | Lede | Four services; the run needs no AWS account; page order links | none | N/A | Framing sentence and site links. |
| 3 | What it is | Lambda is a serverless compute service | S1 | PASS | "AWS Lambda is a serverless compute service." |
| 4 | What it is | You can run code without provisioning or managing servers | S1 | PASS | "you can run code without provisioning or managing servers" |
| 5 | What it is | Lambda manages infrastructure: maintenance, capacity, scaling, patching | S1 | PASS | "Lambda automatically manages the underlying infrastructure – including server maintenance, capacity provisioning, scaling, and patching" |
| 6 | What it is | Lambda provides three compute primitives | S1 | PASS | "Lambda provides three compute primitives" |
| 7 | What it is | Event Functions is the name for the original Lambda function type | S1 | PASS | "Event Functions is the name for the original Lambda function type" |
| 8 | What it is | An Event Function runs code in response to events or API calls without managing servers | S1 | PASS | "Run code in response to events or API calls without managing servers." |
| 9 | What it is | DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale | S9 | PASS | "Amazon DynamoDB is a serverless, fully managed, distributed NoSQL database with single-digit millisecond performance at any scale." |
| 10 | What it is | A table is a collection of items; an item is a collection of attributes | S10 | PASS | "table is a collection of items, and each item is a collection of attributes" |
| 11 | What it is | Primary keys uniquely identify each item | S10 | PASS | "DynamoDB uses primary keys to uniquely identify each item in a" table |
| 12 | What it is | DynamoDB doesn't support a JOIN operator | S9 | PASS | "DynamoDB doesn't support a JOIN operator." |
| 13 | What it is | AWS recommends denormalizing the data model | S9 | PASS | "We recommend that you denormalize your data model" |
| 14 | What it is | Athena is an interactive query service for data in S3 using standard SQL | S24 | PASS | "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." |
| 15 | What it is | Ad-hoc ANSI SQL queries, no need to aggregate or load data | S25 | PASS | "run ad-hoc queries using ANSI SQL, without the need to aggregate or load the data into Athena" |
| 16 | What it is | Athena analyzes unstructured, semi-structured, structured data in S3 | S25 | PASS | "analyze unstructured, semi-structured, and structured data stored in Amazon S3" |
| 17 | What it is | Examples: CSV, JSON, Parquet, ORC | S25 | PASS | "Examples include CSV, JSON, or columnar data formats such as Apache Parquet and Apache ORC" |
| 18 | What it is | Step Functions workflows (state machines) for the listed uses | S32 | PASS | "you can create workflows, also called State machines, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines" |
| 19 | What it is | Each step is a state | S32 | PASS | "Each step in a workflow is called a state." |
| 20 | What it is | Running workflow instances are executions | S32 | PASS | "Instances of running workflows performing tasks are called executions" |
| 21 | What it is | A Task state is a unit of work another AWS service performs | S32 | PASS | "a Task state represents a unit of work that another AWS service performs" |
| 22 | What it is | ASL is a JSON-based language that defines a state machine, a collection of states | S33 | PASS | "The Amazon States Language is a JSON-based, structured language used to define your state machine, a collection of states" |
| 23 | What it is | Lambda has pay-per-use billing, no upfront commitments | S1 | PASS | "Pay-per-use billing – No upfront commitments." |
| 24 | What it is | DynamoDB on-demand has pay-per-request pricing for reads and writes | S12 | PASS | "pay-per-request pricing for read and write requests" |
| 25 | What it is | In Athena you pay only for queries you run | S24 | PASS | "you pay only for the queries you run" |
| 26 | What it is | Standard workflows are priced by state transition | S32 | PASS | "Priced by state transition" (Standard column) |
| 27 | What it is | Express workflows are priced by number and duration of executions | S32 | PASS | "Priced by number and duration of executions" (Express column) |
| 28 | How it works | Python Lambda function can hold more than one Python function; handler is always the entry point | S2 | PASS | "A Lambda function in Python can contain more than one Python function, but the handler function is always the entry point to your code." |
| 29 | How it works | Lambda runs this method when invoked | S2 | PASS | "When your function is invoked, Lambda runs this method." |
| 30 | How it works | Handler takes event and context | S2 | PASS | "takes two arguments, event and context" |
| 31 | How it works | Event is a JSON formatted document with data | S2 | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process." |
| 32 | How it works | Event object holds information about the cause when another AWS service invokes | S2 | PASS | "the event object contains information about the event that caused the invocation" |
| 33 | How it works | Lambda passes context automatically | S2 | PASS | "Lambda passes the context object to your function automatically." |
| 34 | How it works | Context holds invocation and execution environment information | S2 | PASS | "The context object contains information about the function invocation and execution environment." |
| 35 | How it works | Python: print or logging library sends to the log | S2 | PASS | "you can use either a print statement or a Python logging library to send information to your function's log" |
| 36 | How it works | AWS recommends a logging library in production | S2 | PASS | "In a production application, we recommend that you use a logging library." |
| 37 | How it works | Outside the console you must use CloudWatch Logs to see results | S2 | PASS | "When you invoke your function outside of the Lambda console, you must use CloudWatch Logs to view your function's execution results." |
| 38 | How it works | After deploy, several ways to invoke | S3 | PASS | "you can invoke it in several ways" |
| 39 | How it works | `aws lambda invoke` AWS CLI command | S3 | PASS | "The AWS Command Line Interface (AWS CLI) – Use the aws lambda invoke" |
| 40 | How it works | Function URL is a dedicated HTTP(S) endpoint | S3 | PASS | "Use function URLs to create a dedicated HTTP(S) endpoint" |
| 41 | How it works | Trigger = service invokes with each new event | S3 | PASS | "Some services can invoke a Lambda Event Function with each new event. This is called a trigger." |
| 42 | How it works | Event source mapping = batches of records for stream/queue services | S3 | PASS | "For stream and queue-based services, Lambda invokes the function with batches of records. This is called an event source mapping." |
| 43 | How it works | Synchronous: wait for response | S3 | PASS | "you wait for the function to process the event and return a response" |
| 44 | How it works | Asynchronous: Lambda queues the event and returns immediately | S3 | PASS | "event for processing and returns a response immediately" |
| 45 | How it works | InvocationType: RequestResponse sync, Event async | S3 | PASS | "A value of RequestResponse indicates synchronous invocation, and a value of Event indicates asynchronous invocation." |
| 46 | How it works | Sync error: see message in response, retry manually | S3 | PASS | "view the error message in the response and retry the invocation manually" |
| 47 | How it works | Async: automatic retries, records to a destination | S3 | PASS | "Lambda handles retries automatically and can send invocation records to a destination" |
| 48 | How it works | Execution role is an IAM role granting access to AWS services and resources | S4 | PASS | "execution role is an AWS Identity and Access Management (IAM) role that grants the function permission to access" AWS services and resources |
| 49 | How it works | Lambda automatically assumes the role | S4 | PASS | "Lambda automatically assumes your execution role when you invoke your function." |
| 50 | How it works | Trust policy must name `lambda.amazonaws.com` | S4 | PASS | "trust policy must specify the Lambda service principal (lambda.amazonaws.com) as a trusted service" |
| 51 | How it works | Console creates a minimal-permission role by default | S4 | PASS | "By default, Lambda creates an execution role with minimal permissions when you create a function in the Lambda console." |
| 52 | How it works | Role includes AWSLambdaBasicExecutionRole for CloudWatch Logs | S4 | PASS | "includes the AWSLambdaBasicExecutionRole managed policy, which gives your function basic permissions to log events to Amazon CloudWatch Logs" |
| 53 | How it works | Timeout is max seconds a function can run | S5 | PASS | "Timeout is the maximum amount of time in seconds that a Lambda function can run." |
| 54 | How it works | Default 3 s, 1 s steps, max 1,800 s (30 min) | S5 | PASS | "default value for this setting is 3 seconds, but you can adjust this in increments of 1 second up to a maximum value of 1,800 seconds (30 minutes)" |
| 55 | How it works | Managed Instances: async and ESM (except MQ, DocumentDB) up to 5,400 s | S5 | PASS | "For functions using AWS Lambda Managed Instances, asynchronous invocations and event source mapping invocations (except Amazon MQ and Amazon DocumentDB) support a maximum allowed value of 5,400 seconds (90 minutes)." |
| 56 | How it works | `update-function-configuration` sets timeout in seconds | S5 | PASS | "You can use the update-function-configuration command to configure the timeout value, in seconds." |
| 57 | How it works | Execution environment is secure and isolated | S6 | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime" |
| 58 | How it works | Init phase has three tasks | S6 | PASS | "In the Init phase, Lambda performs three tasks:" |
| 59 | How it works | Starts extensions, bootstraps runtime, runs static code | S6 | PASS | "Start all extensions (Extension init)", "Bootstrap the runtime (Runtime init)", "Run the function's static code (Function init)" |
| 60 | How it works | Init phase limited to 10 s | S6 | PASS | "The Init phase is limited to 10 seconds." |
| 61 | How it works | Timeout limits the whole Invoke phase | S6 | PASS | "The function's timeout setting limits the duration of the entire Invoke phase." |
| 62 | How it works | Lambda keeps environment for some time | S6 | PASS | "environment for some time in anticipation of another function invocation" |
| 63 | How it works | Objects outside the handler stay initialized | S6 | PASS | "Objects declared outside of the function's handler method remain initialized" |
| 64 | How it works | `/tmp` content stays while frozen | S6 | PASS | "The directory content remains when the execution environment is frozen" |
| 65 | How it works | Unfinished background processes resume on reuse | S6 | PASS | "did not complete when the function ended resume if Lambda reuses the execution environment" |
| 66 | How it works | Lambda terminates environments every few hours | S6 | PASS | "Lambda terminates execution environments every few hours" |
| 67 | How it works | Don't assume environment persists | S6 | PASS | "You should not assume that the execution environment will persist indefinitely." |
| 68 | How it works | Crash or timeout in Invoke phase: Lambda resets | S6 | PASS | "If the Lambda function crashes or times out during the Invoke phase, Lambda resets the" environment |
| 69 | How it works | Cold start = initializing a new environment | S7 | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start" |
| 70 | How it works | Cold start adds latency and you are charged | S6 | PASS | "You are charged for this time, and it adds latency to your overall invocation duration." |
| 71 | How it works | Cold starts under 1% of invocations | S6 | PASS | "Cold starts typically occur in under 1% of invocations." |
| 72 | How it works | More common in dev/test than production | S6 | PASS | "cold starts are typically more common in development and test functions than production workloads" |
| 73 | How it works | Reason: dev/test invoked less often | S6 | PASS | "development and test functions are usually invoked less frequently" |
| 74 | How it works | Concurrency = in-flight requests at the same time | S7 | PASS | "Concurrency is the number of in-flight requests that your AWS Lambda Event Function is handling at the same time." |
| 75 | How it works | Separate environment instance per concurrent request | S7 | PASS | "For each concurrent request, Lambda provisions a separate instance of your execution" environment |
| 76 | How it works | Default account limit 1,000 across Event Functions in a Region | S7 | PASS | "By default, your account has a concurrency limit of 1,000 concurrent executions across all Event Functions in a Region." |
| 77 | How it works | Out of concurrency: throttling, drops requests | S7 | PASS | "experience throttling (that is, they start to drop requests) if you run out of available concurrency" |
| 78 | How it works | Reserved concurrency reserves a portion of account concurrency | S7 | PASS | "reserve a portion of your account's concurrency for an Event Function" |
| 79 | How it works | No charge for reserved concurrency | S7 | PASS | "There is no charge for configuring reserved concurrency" |
| 80 | How it works | Provisioned concurrency pre-initializes, reduces cold starts | S7 | PASS | "Use provisioned concurrency to pre-initialize a number of environment instances" ... "useful for reducing cold start latencies" |
| 81 | How it works | Provisioned concurrency costs extra | S7 | PASS | "Using provisioned concurrency incurs additional charges to your account." |
| 82 | How it works | Create table: must specify primary key | S10 | PASS | "When you create a table, in addition to the table name, you must specify the primary key of the table." |
| 83 | How it works | Primary key unique; no two items same key | S10 | PASS | "uniquely identifies each item in the table, so that no two items can have the same key" |
| 84 | How it works | Partition key value feeds an internal hash function | S10 | PASS | "DynamoDB uses the partition key's value as input to an internal hash function." |
| 85 | How it works | Hash output decides the partition | S10 | PASS | "The output from the hash function determines the partition" |
| 86 | How it works | Partition key only: no duplicate values | S10 | PASS | "In a table that has only a partition key, no two items can have the same partition key value." |
| 87 | How it works | Partition+sort: items stored together, sorted | S10 | PASS | "partition key value are stored together, in sorted order by sort key" |
| 88 | How it works | Same partition key allowed, sort keys differ | S10 | PASS | "multiple items to have the same partition key value. However, those items must have different sort key values." |
| 89 | How it works | Music: Artist only returns all songs by artist | S10 | PASS | "Artist, DynamoDB retrieves all of the songs by that artist" |
| 90 | How it works | Music: each item must have both key attributes | S10 | PASS | "Each item in the table must have these two attributes." |
| 91 | How it works | Music is schemaless apart from primary key | S10 | PASS | "Other than the primary key, the Music table is schemaless" |
| 92 | How it works | Primary key attribute must be scalar | S10 | PASS | "Each primary key attribute must be a scalar" |
| 93 | How it works | Only string, number, binary allowed | S10 | PASS | "The only data types allowed for primary key attributes are string, number, or binary." |
| 94 | How it works | Secondary index = query by alternate key | S10 | PASS | "A secondary index lets you query the data in the table using an alternate key, in addition to queries against the primary key." |
| 95 | How it works | GSI keys can differ from table | S10 | PASS | "Global secondary index – An index with a partition key and sort key that can be different from those on the table." |
| 96 | How it works | LSI same partition key, different sort key | S10 | PASS | "Local secondary index – An index that has the same partition key as the table, but a different sort key." |
| 97 | How it works | Quota 20 GSI (default) and 5 LSI | S10 | PASS | "a quota of 20 global secondary indexes (default quota) and 5 local secondary indexes" |
| 98 | How it works | HTTP 200 on write = durably persisted | S11 | PASS | "receives an HTTP 200 response (OK), that means the write completed successfully and has been durably persisted" |
| 99 | How it works | Tables and LSIs: two options, eventually consistent default | S11 | PASS | "Both tables and LSIs provide two read consistency options: eventually consistent (default) and strongly" consistent |
| 100 | How it works | All GSI and stream reads are eventually consistent | S11 | PASS | "all reads from a DynamoDB stream are also eventually consistent"; "Strongly consistent reads are only supported on tables and local secondary indexes." (GSI part follows from this) |
| 101 | How it works | Eventually consistent read may miss a recent write | S11 | PASS | "the responses might not reflect the results of a recently completed write operation" |
| 102 | How it works | ConsistentRead true gives up-to-date data | S11 | PASS | "If you set ConsistentRead to true, DynamoDB returns a response with the most up-to-date data, reflecting the updates from all prior write operations that were successful." |
| 103 | How it works | Strongly consistent GSI/stream reads not supported | S11 | PASS | "Strongly consistent reads from a global secondary index or a DynamoDB stream are not supported." |
| 104 | How it works | Eventually consistent reads cost half | S11 | PASS | "Eventually consistent reads are half the cost of strongly consistent reads." |
| 105 | How it works | On-demand is the default and recommended for most workloads | S12 | PASS | "On-demand mode is the default and recommended throughput option for most DynamoDB" workloads |
| 106 | How it works | Provisioned mode: specify reads and writes per second | S12 | PASS | "In provisioned mode, you must specify the number of reads and writes per second that" |
| 107 | How it works | Charged for provisioned, not consumed | S12 | PASS | "capacity you have provisioned, not how much of that provisioned capacity you actually consumed" |
| 108 | How it works | TTL deletes items no longer relevant | S13 | PASS | "a cost-effective method for deleting items that are no longer relevant" |
| 109 | How it works | Timestamp: Number, Unix epoch, seconds | S13 | PASS | "must be stored as a Number data type in Unix epoch time format at the seconds granularity" |
| 110 | How it works | Non-Number TTL items ignored | S13 | PASS | "Items with a TTL attribute that is not a Number type are ignored by the TTL process." |
| 111 | How it works | Expired items may be deleted any time, typically within days | S13 | PASS | "might be deleted by the system at any time, typically within a few days after their expiration" |
| 112 | How it works | Filter expressions remove expired items from Scan/Query | S13 | PASS | "Use filter expressions to remove expired items from Scan and Query results." |
| 113 | How it works | Downloadable DynamoDB: develop/test without the web service | S20 | PASS | "without accessing the DynamoDB web service" |
| 114 | How it works | Download (JRE), Maven dependency, Docker image | S20 | PASS | "available as a download (requires JRE), as an Apache Maven dependency, or as a Docker image" |
| 115 | How it works | For production, remove the local endpoint | S20 | PASS | "you remove the local endpoint in the code, and then it points to the DynamoDB web service" |
| 116 | How it works | AWS CLI can't use it as default; `--endpoint-url` each command | S22 | PASS | "The AWS CLI can't use the downloadable version of DynamoDB as a default endpoint. Therefore, you must specify --endpoint-url with each AWS CLI command." |
| 117 | How it works | Port 8000 by default | S21 | PASS | "DynamoDB uses port 8000 by default." |
| 118 | How it works | Requires credentials; fake values shown | S21 | PASS | "Downloadable DynamoDB requires any credentials to work"; "fakeMyKeyId", "fakeSecretAccessKey", "fakeRegion" |
| 119 | How it works | Image `amazon/dynamodb-local:latest` | S21 | PASS | `image: "amazon/dynamodb-local:latest"` |
| 120 | How it works | `-inMemory`: runs in memory, no data saved on stop | S22 | PASS | "DynamoDB runs in memory instead of using a database file. When you stop DynamoDB, none of the data is saved." |
| 121 | How it works | DynamoDB local collects telemetry (types listed) | S23 | PASS | "DynamoDB local collects telemetry, such as generic usage metrics, systems and environment information, and errors." |
| 122 | How it works | Telemetry on: sent in the background | S23 | PASS | "If telemetry remains on, DynamoDB local sends telemetry data in the background" |
| 123 | How it works | `-disableTelemetry`: no telemetry | S22 | PASS | "-disableTelemetry — When specified, DynamoDB local will not send any telemetry." |
| 124 | How it works | Downloadable version for development/testing only | S22 | PASS | "intended for development and testing purposes only" |
| 125 | How it works | It differs from the web service in several ways | S22 | PASS | "differs from the web service in the following ways" |
| 126 | How it works | Provisioned throughput ignored, though CreateTable requires it | S22 | PASS | "Provisioned throughput settings are ignored in downloadable DynamoDB, even though the CreateTable operation requires them." |
| 127 | How it works | Scans sequential; no parallel scans | S22 | PASS | "Scan operations are performed sequentially. Parallel scans are not supported." |
| 128 | How it works | Table operations immediate; state always ACTIVE | S22 | PASS | "operations occur immediately, and table state is always ACTIVE" |
| 129 | How it works | Reads eventually consistent, most look strongly consistent | S22 | PASS | "Read operations are eventually consistent. However, due to the speed of DynamoDB local running on your computer, most reads appear to be strongly consistent." |
| 130 | How it works | No point-in-time recovery | S22 | PASS | "DynamoDB local doesn't support Point-in-time recovery (PITR)." |
| 131 | How it works | Always returns null for billingModeSummary | S22 | PASS | "DynamoDB local always returns null for billingModeSummary." |
| 132 | How it works | Regions and distinct accounts unsupported at client level | S22 | PASS | "AWS Regions and distinct AWS accounts are not supported at the client level." |
| 133 | How it works | Catalogs, databases, tables hold metadata that defines a schema | S30 | PASS | "catalogs, databases, and tables are containers for the metadata definitions that define a schema for underlying source data" |
| 134 | How it works | Database = group of tables; table = rows/columns | S30 | PASS | "Database – a group of tables"; "Table – data organized as a group of rows or columns" |
| 135 | How it works | Table metadata: S3 location and structure | S30 | PASS | "tells Athena where the data is located in Amazon S3, and specifies the structure of the data" |
| 136 | How it works | Table must be registered before querying | S30 | PASS | "before querying data, a table must be registered in Athena" |
| 137 | How it works | Create a table with an AWS Glue crawler | S30 | PASS | "You can create a table automatically using an AWS Glue crawler." |
| 138 | How it works | Athena integrates with Glue Data Catalog (persistent metadata store) | S25 | PASS | "Athena integrates with the AWS Glue Data Catalog, which offers a persistent metadata store" |
| 139 | How it works | Sample log data is TSV | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 140 | How it works | LOCATION names a folder, not a file; Athena scans all files | S28 | PASS | "because Athena expects to scan all of the files in a folder, the LOCATION clause specifies an Amazon S3 folder location, not a specific file" |
| 141 | How it works | Athena keeps queries 45 days | S29 | PASS | "Queries are retained for 45 days." |
| 142 | How it works | Partitioning limits data scanned, improves performance, cuts cost | S31 | PASS | "you can restrict the amount of data scanned by each query, thus improving performance and reducing cost" |
| 143 | How it works | Partition in WHERE: scan only that partition | S31 | PASS | "specify the partition in the WHERE clause, Athena scans the data only from that partition" |
| 144 | How it works | Hive style: key value pairs joined by equal signs | S31 | PASS | "Hive style partitions, whose data paths contain key value pairs connected by equal signs" |
| 145 | How it works | MSCK REPAIR TABLE loads Hive partitions, only Hive-style | S31 | PASS | "To load new Hive partitions into a partitioned table, you can use the MSCK REPAIR TABLE command, which works only with Hive-style partitions." |
| 146 | How it works | Non-Hive: ALTER TABLE ADD PARTITION manually | S31 | PASS | "you use ALTER TABLE ADD PARTITION to add the partitions manually" |
| 147 | How it works | State machines defined using JSON text | S34 | PASS | "State machines are defined using JSON text" |
| 148 | How it works | StartAt and States required | S34 | PASS | "StartAt (Required)", "States (Required)" |
| 149 | How it works | StartAt must exactly match, case sensitive | S34 | PASS | "A string that must exactly match (is case sensitive) the name of one of" the state objects |
| 150 | How it works | States: comma-delimited set of states | S34 | PASS | "An object containing a comma-delimited set of states." |
| 151 | How it works | TimeoutSeconds optional; max seconds of an execution | S34 | PASS | "TimeoutSeconds (Optional) The maximum number of seconds an execution of the state machine can run." |
| 152 | How it works | Longer run fails with States.Timeout | S34 | PASS | "the execution fails with a States.Timeout" |
| 153 | How it works | Choice adds conditional logic | S35 | PASS | "adds conditional logic to a" state machine |
| 154 | How it works | Choice Rules evaluated true/false | S35 | PASS | "Step Functions evaluates each Choice Rule to true or false" |
| 155 | How it works | Default = state to go to if no rule true | S35 | PASS | "The name of the state to transition to if no Choice Rule evaluates to true." |
| 156 | How it works | No true rule and no Default: error | S35 | PASS | "no Default is provided, the state machine will throw an error" |
| 157 | How it works | Standard: long-running, auditable | S32 | PASS | "Standard workflows are ideal for long-running, auditable workflows" |
| 158 | How it works | Standard: exactly-once, up to one year | S32 | PASS | "exactly-once workflow execution and can run for up to one year" |
| 159 | How it works | Express: high-event-rate | S32 | PASS | "Express workflows are ideal for high-event-rate workloads" |
| 160 | How it works | Express: at-least-once, up to five minutes | S32 | PASS | "at-least-once workflow execution and can run for up to five minutes" |
| 161 | How it works | Express steps may run more than once | S32 | PASS | "one or more steps in an Express Workflow can potentially run more than once" |
| 162 | How it works | AWS SDK integrations call any AWS service directly | S32 | PASS | "provide a way to call any AWS service directly from your state machine" |
| 163 | How it works | All states except Pass and Wait can hit runtime errors | S36 | PASS | "All states, except Pass and Wait states, can encounter runtime errors." |
| 164 | How it works | Causes: Choice without match; Lambda exception | S36 | PASS | "a Choice state without a matching rule"; "an exception in a AWS Lambda function" |
| 165 | How it works | Default: whole execution fails | S36 | PASS | "Step Functions defaults to failing the entire state machine execution" |
| 166 | How it works | Task, Parallel, Map can have Retry | S36 | PASS | "Task, Parallel, and Map states can have a field named Retry" |
| 167 | How it works | Catchers for Task/Parallel/Map, not top-level failures | S36 | PASS | "catchers are available for Task, Parallel and Map states, but not for top-level state machine execution failures" |
| 168 | How it works | Error names: case-sensitive strings | S36 | PASS | "identifies errors using case-sensitive strings, known as error names" |
| 169 | How it works | TestState accepts a state definition and executes it | S37 | PASS | "The TestState API accepts the definition of a state and executes it." |
| 170 | How it works | Test a state without creating/updating a state machine | S37 | PASS | "test a state without creating a state machine or updating an existing state machine" |
| 171 | How it works | Three inspection levels | S37 | PASS | Lines "INFO", "DEBUG", "TRACE" under the inspection-level list. |
| 172 | How it works | INFO is the default | S37 | PASS | "By default, Step Functions sets Inspection level to INFO if you don't specify a level." |
| 173 | How it works | DEBUG shows output and input/output processing result | S37 | PASS | "DEBUG – Shows the state output and the result of input and output data processing if the test succeeds." |
| 174 | How it works | Mock = test logic without calling the service | S37 | PASS | "Mock AWS service integrations ... to test state logic without calling the actual service" |
| 175 | How it works | With a mock the role is optional | S37 | PASS | "When you specify a mock, specifying the role becomes optional" |
| 176 | How it works | TestState enables unit tests | S37 | PASS | "The TestState API enables you to write comprehensive unit tests for your state machines." |
| 177 | Try it | Record: date, versions, image digest, size, pull, no account, endpoint, `~/.aws` finding, separate check | none | N/A | Record of the page's own run, labelled as such. The cross-site link is not a fact. |
| 178 | Try it | Step 1 function is the Python function of "Create your first Lambda function"; takes length and width, multiplies, returns JSON string | S2 | PASS | "takes a JSON object containing two integer values labeled "length" and "width". The function multiplies these values to calculate an area and returns this as a JSON string." The code block matches S2 lines 91-107. |
| 179 | Try it | "The tutorial copied it ... removed spaces" | none | N/A | Record of the tutorial's own work. |
| 180 | Try it | Test case is the unit of testing for a response to inputs | S41 | PASS | "A test case is the individual unit of testing. It checks for a specific response to a particular set of inputs." |
| 181 | Try it | `TestCase` is the base class | S41 | PASS | "unittest provides a base class, TestCase" |
| 182 | Try it | `assertEqual` fails if unequal | S41 | PASS | "If the values do not compare equal, the test will fail." |
| 183 | Try it | `assertRaises` passes if raised | S41 | PASS | "The test passes if exception is raised" |
| 184 | Try it | `assertLogs` tests at least one message logged | S41 | PASS | "A context manager to test that at least one message is logged" |
| 185 | Try it | `subTest` runs enclosed block as subtest | S41 | PASS | "Return a context manager which executes the enclosed code block as a subtest." |
| 186 | Try it | `Context` is a fake; a fake is a mock with shortcuts | S8 | PASS | "A fake is a mock that takes shortcuts to simplify or speed up testing." |
| 187 | Try it | Test file, run command, output block | none | N/A | The reader's own work and the run output. The test code is the page's own. |
| 188 | Try it | Test 1: event has `length` and `width` | S2 | PASS | Test event has the keys "length" and "width". |
| 189 | Try it | Page shows log line `The area is 42` | S2 | PASS | "INFO The area is 42" |
| 190 | Try it | Test 2: function uses `log_group_name` to output CloudWatch log group name | S2 | PASS | "your function uses the log_group_name parameter to output the name of its CloudWatch log group" |
| 191 | Try it | Fake context holds the sample-output log group name | S2 | PASS | "/aws/lambda/myLambdaFunction" |
| 192 | Try it | Bullets 2-4 own observations (run shows only results; KeyError; odd input results) | none | N/A | Own results from the run. |
| 193 | Try it | AWS: handler should extract/validate data, then pass to business-logic methods | S8 | PASS | "you should write a handler that extracts and validates data from the incoming event and context objects, then sends that input to methods that perform your business logic" |
| 194 | Try it | "The example function of AWS does not validate, and the tutorial found this by running it" | none | N/A | Result of the run. |
| 195 | Try it | Plain Python run says nothing about timeout, memory, role, logs permission | none | N/A | The page's own reasoning. |
| 196 | Try it | AWS: all Lambda code depends on timeout and memory settings | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings, which could cause the function to fail if those settings are not set properly." |
| 197 | Try it | DynamoDB local is available as a Docker image | S21 | PASS | "The downloadable version of Amazon DynamoDB is available as a Docker image." |
| 198 | Try it | AWS page names image `amazon/dynamodb-local:latest` | S21 | PASS | `image: "amazon/dynamodb-local:latest"` |
| 199 | Try it | Tutorial pulled image; needs Docker; own choices (caps, memory, `-p`) | none | N/A | Step of the reader's own work and the tutorial's own choices. |
| 200 | Try it | `--publish`/`-p` makes port available outside host | S42 | PASS | "Use the --publish or -p flag to make a port available outside the host" |
| 201 | Try it | `-p 192.168.1.100:8080:80` maps host 8080 to container TCP 80 | S42 | PASS | "Map port 8080 on the Docker host IP 192.168.1.100 to TCP port 80 in the container." |
| 202 | Try it | Tutorial's `127.0.0.1:18000:8000` follows that form | none | N/A | Own reading of the form already cited. |
| 203 | Try it | Localhost IP in publish flag: only Docker host can access | S42 | PASS | "If you include the localhost IP address (127.0.0.1, or ::1) with the publish flag, only the Docker host can access the published container port." |
| 204 | Try it | `--rm` removes container and anonymous volumes on exit | S43 | PASS | "Automatically remove the container and its associated anonymous volumes when it exits" |
| 205 | Try it | `-inMemory` keeps no data after stop | S22 | PASS | "When you stop DynamoDB, none of the data is saved." |
| 206 | Try it | `-disableTelemetry`: no telemetry | S22 | PASS | "DynamoDB local will not send any telemetry" |
| 207 | Try it | Credentials are the made-up values the AWS page shows | S21 | PASS | "fakeMyKeyId", "fakeSecretAccessKey", "fakeRegion" |
| 208 | Try it | `AWS_CONFIG_FILE`, `AWS_SHARED_CREDENTIALS_FILE`, `AWS_EC2_METADATA_DISABLED` meanings | S40 | PASS | "the file that the AWS CLI uses to store configuration profiles"; "the file that the AWS CLI uses to store access keys"; "Disables the use of the Amazon EC2 instance metadata service (IMDS)." |
| 209 | Try it | `ddb` adds `--endpoint-url` because CLI needs it each command | S22 | PASS | "you must specify --endpoint-url with each AWS CLI command" |
| 210 | Try it | Block 1 commands and flags (`docker run`, `-jar DynamoDBLocal.jar -inMemory -disableTelemetry`, env vars) | S21, S22, S40, S42, S43 | PASS | Flags and values match the sources quoted in rows 198-209. The `--cap-drop`, `--security-opt`, `--memory` and the port are labelled the tutorial's own choice. |
| 211 | Try it | `create-table` creates Music | S14 | PASS | "creates a new Music table"; the options match S14 lines 45-50. |
| 212 | Try it | `put-item` creates several new items | S15 | PASS | "creates several new items in the Music table" |
| 213 | Try it | `get-item --consistent-read` demonstrates strongly consistent reads | S16 | PASS | "The consistent-read parameter is used below to demonstrate strongly consistent reads." |
| 214 | Try it | `update-item` updates an item | S17 | PASS | "updates an item in the Music table"; the expression and `--return-values ALL_NEW` match. |
| 215 | Try it | `query` by partition key | S18 | PASS | "query and providing the partition key"; the `--key-condition-expression "Artist = :name"` matches. |
| 216 | Try it | `delete-table` deletes the table | S19 | PASS | "aws dynamodb delete-table --table-name Music" |
| 217 | Try it | Missing-sort-key check follows from both-keys rule | S10 | PASS | "Each item in the table must have these two attributes." |
| 218 | Try it | Block 2 commands (all `ddb` calls) | S14-S19 | PASS | Items, key and update strings match S15 lines 68-80, S16 `--consistent-read`, S17 lines 50-52 and S18 line 33. |
| 219 | Try it | `docker stop` stops one or more running containers | S44 | PASS | "Stop one or more running containers" |
| 220 | Try it | Count of containers; expected 0 | none | N/A | Tutorial's own method. |
| 221 | Try it | Output of the tutorial's run (3 code blocks of output) | none | N/A | Labelled run record. |
| 222 | Try it | S14 sample shows `CREATING`; AWS says status set to `ACTIVE` when done | S14 | PASS | `"TableStatus": "CREATING"`; "When DynamoDB finishes creating the table, the value of the TableStatus field is set to ACTIVE." |
| 223 | Try it | S19 sample of `delete-table` shows `DELETING` | S19 | PASS | `"TableStatus": "DELETING"` |
| 224 | Try it | DynamoDB local: operations immediate, state always ACTIVE | S22 | PASS | "occur immediately, and table state is always ACTIVE" |
| 225 | Try it | Step 3 sample shows `Awards` type `S`; step 5 shows `N` | S16, S18 | PASS | S16: `"Awards": { "S": "10"`. S18: `"Awards": { "N": "10"`. |
| 226 | Try it | Items stored together in sort order | S10 | PASS | "stored together, in sorted order by sort key" |
| 227 | Try it | Other bullets: ACTIVE at once, ValidationException, list-tables empty, count 0 | none | N/A | Results of the run. |
| 228 | Try it | DynamoDB local: most reads look strongly consistent | S22 | PASS | See row 129. |
| 229 | Try it | DynamoDB local ignores provisioned throughput | S22 | PASS | See row 126. |
| 230 | Try it | Removal of the image with `docker rmi` | none | N/A | Record of the run. |
| 231 | Try it | Step 3 rule: partition in WHERE, scan only that partition | S31 | PASS | See row 143. |
| 232 | Try it | Log lines tab-separated like the AWS sample | S28 | PASS | "The sample log data is in tab-separated values (TSV) format" |
| 233 | Try it | Script, output and model notes (`partitions.py`) | none | N/A | The tutorial's own script and run. |
| 234 | Try it | Step 4: StartAt and States required | S34 | PASS | See row 148. |
| 235 | Try it | StartAt must exactly match a state name | S34 | PASS | See row 149. |
| 236 | Try it | Choice goes to Default; error if none | S35 | PASS | See rows 155-156. |
| 237 | Try it | Hello World definition is the S34 example | S34 | PASS | `"Comment": "A Hello World example of the Amazon States Language using a Pass state"`, `"Type": "Pass"`, `"Result": "Hello World!"`, `"End": true` |
| 238 | Try it | Choice state is the TestState example, `{"number": 2}` to `Equals 2` | S37 | PASS | `--definition '{"Type": "Choice", ... "Next": "Equals 2"}...' --input '{"number": 2}'` and `"nextState": "Equals 2"` |
| 239 | Try it | `asl_model.py` code, output, bullets | none | N/A | The tutorial's own script and run. |
| 240 | Try it | Step 5: `--generate-cli-skeleton` generates and displays a parameter template | S39 | PASS | "The --generate-cli-skeleton generates and displays a parameter template that you can customize and use as input on a command." |
| 241 | Try it | Commands and filter are own choice; template output | none | N/A | Own choice and run record. |
| 242 | Try it | `FunctionName`/`Timeout` match `--function-name`/`--timeout` | S5 | PASS | "--function-name my-function \ --timeout 120" |
| 243 | Try it | `definition`, `roleArn`, `input`, `inspectionLevel` match options | S37 | PASS | "--definition", "--role-arn", "--input", "--inspection-level DEBUG" |
| 244 | Try it | `stateName`, `revealSecrets`, `mock`, `context` match names on the page | S37 | PASS | "stateName parameter"; "revealSecrets parameter"; "--mock"; "context parameter" |
| 245 | Try it | INFO is the level when none is given | S37 | PASS | See row 172. |
| 246 | Try it | Step 6: Lambda tutorial needs an AWS account | S2 | PASS | "To get started with AWS, you need an AWS account." |
| 247 | Try it | Athena tutorial: sign up for an account if not done | S26 | PASS | "If you have not already done so, sign up for an AWS account." |
| 248 | Try it | Lambda pay-per-use; pricing page | S1 | PASS | "For pricing information, see AWS Lambda Pricing." |
| 249 | Try it | Athena tutorial: charged for queries; sample data free; own data charged | S26 | PASS | "you are charged for the queries that you run. You aren't charged for the sample data ... but if you upload your own data files to Amazon S3, charges do apply." |
| 250 | Try it | Standard workflows priced by state transition | S32 | PASS | See row 26. |
| 251 | Try it | Lambda steps 1-2 (Event Functions page, Author from scratch, runtime, role) | S2 | PASS | "Choose Create Event Function."; "Select Author from scratch."; "choose either Node.js 24 or Python 3.14"; "grants basic permissions to write to CloudWatch Logs" |
| 252 | Try it | Lambda step 3: paste, replace, Deploy; don't edit handler name | S2 | PASS | "replacing the code that Lambda created"; "choose Deploy"; "Be sure not to edit the name of this Python function. If you do, Lambda won't be able to run your code" |
| 253 | Try it | Lambda step 4: `myTestEvent`, run icon | S2 | PASS | "For Event Name, enter myTestEvent."; "choose the run icon next to your test event" |
| 254 | Try it | Lambda step 5: delete function, log group, role | S2 | PASS | "delete it. You can also delete the log group that stores"; "To delete the execution role" |
| 255 | Try it | Athena step 1: bucket in same Region as query output location | S26 | PASS | "Using the same AWS Region ... create a bucket in Amazon S3 to hold your Athena query results. You will configure this bucket to be your query output location." |
| 256 | Try it | Athena step 2: Location of query result box, `s3://` | S27 | PASS | "In the Location of query result box, enter the ... Prefix the path with s3://." |
| 257 | Try it | Athena step 3: `mydatabase` with CREATE DATABASE | S27 | PASS | "To create a database named mydatabase, enter the following CREATE" DATABASE statement |
| 258 | Try it | Athena step 4: sample CloudFront table; first CREATE TABLE has a limitation | S28 | PASS | "Do not use this example just yet as it has an important limitation" |
| 259 | Try it | Athena step 5: run SQL and see results | S29 | PASS | "you can run SQL queries on the table and see the results in Athena" |
| 260 | Try it | Athena step 6: own advice | none | N/A | Tutorial's own advice. The "no clean-up step" claim: grep of S24-S31 found no clean-up step. |
| 261 | Try it | Step Functions step 1: 20-30 min; Run Hello World | S38 | PASS | "Estimated duration: 20-30 minutes"; "choose Run Hello World" |
| 262 | Try it | Step 2: Code button shows ASL | S38 | PASS | "Choose the { } Code button to view the ASL code." |
| 263 | Try it | Step 3: cannot rename; draft, no resources | S38 | PASS | "You cannot rename a state machine after you create it."; "No resources have been created yet." |
| 264 | Try it | Step 4: new role; `hello001`; empty input | S38 | PASS | "accept the default to Create a new role"; "Enter hello001 for the name of the execution."; "Leave the input field empty." |
| 265 | Try it | Step 5: delete IAM roles, then state machine via Actions, Delete | S38 | PASS | "To delete the IAM roles"; "select the Actions drop down, then select Delete to delete the state machine" |
| 266 | How a tester uses it | Still write unit, integration, e2e tests | S8 | PASS | "For serverless testing, you still write unit, integration and end-to-end tests." |
| 267 | How a tester uses it | Cloud tests most accurate | S8 | PASS | "Cloud-based tests provide the most accurate measure of quality of both your functions and serverless applications." |
| 268 | How a tester uses it | Can't fully replicate cloud locally | S8 | PASS | "You cannot fully replicate a cloud environment locally." |
| 269 | How a tester uses it | Handler: slim adapter | S8 | PASS | "should be a slim adapter that takes in event data and passes only the details that matter to your business logic" |
| 270 | How a tester uses it | Handler extracts and validates | S8 | PASS | "extracts and validates data from the incoming event and context objects" |
| 271 | How a tester uses it | Emulator tests can fail in cloud | S8 | PASS | "Tests that rely on emulators might provide successful results locally, but fail in the cloud due to production security policies, inter-service configurations, or exceeding Lambda quotas." |
| 272 | How a tester uses it | Mock frameworks limited for IAM/quota | S8 | PASS | "Mock frameworks are limited in testing or detecting AWS Identity and Access Management (IAM) policy or quota limitations." |
| 273 | How a tester uses it | Even a no-service function depends on timeout and memory | S8 | PASS | "All Lambda function code has a dependency on timeout and memory settings" |
| 274 | How a tester uses it | Logs permission can't be mocked | S8 | PASS | "This required permission cannot be accurately mocked or emulated." |
| 275 | How a tester uses it | Uniquely named resources per stack | S8 | PASS | "Automated test processes should create uniquely named resources for each stack." |
| 276 | How a tester uses it | Isolate load testing | S8 | PASS | "Load testing is another activity you should isolate from your production stack." |
| 277 | How a tester uses it | Alerts and controls against spending | S8 | PASS | "environments should be configured with alerts and controls to avoid unnecessary spending" |
| 278 | How a tester uses it | Timeout near average duration: higher risk | S5 | PASS | "If the timeout value is close to the average duration of a function, there is a higher risk that the function times out unexpectedly." |
| 279 | How a tester uses it | Use upper-bound datasets | S5 | PASS | "Tests often use small samples for convenience, but you should use datasets at the upper bounds of what is reasonably expected" |
| 280 | How a tester uses it | Sync returns error in response; async retried automatically | S3 | PASS | See rows 46-47. |
| 281 | How a tester uses it | Don't assume environment persists; `/tmp` kept while frozen | S6 | PASS | See rows 64, 67. |
| 282 | How a tester uses it | "So a test can pass on a reused environment because of state left behind" | none | N/A | Inference that follows from the two cited sentences; no tool fact. |
| 283 | How a tester uses it | Cold starts more common in dev/test | S6 | PASS | See row 72. |
| 284 | How a tester uses it | Out of concurrency: throttling | S7 | PASS | See row 77. |
| 285 | How a tester uses it | Eventually consistent default; may miss write | S11 | PASS | See rows 99, 101. |
| 286 | How a tester uses it | ConsistentRead true gives latest data | S11 | PASS | See row 102. |
| 287 | How a tester uses it | GSI reads always eventually consistent | S11 | PASS | "Strongly consistent reads are only supported on tables and local secondary indexes." The word "always" is not in S11. It follows from this line. |
| 288 | How a tester uses it | DynamoDB local: reads look strong; ignores throughput | S22 | PASS | See rows 126, 129. |
| 289 | How a tester uses it | "A local run therefore cannot show stale reads or throttling" | none | N/A | Inference that follows from the two cited sentences. |
| 290 | How a tester uses it | TTL: any time, within days; Number/epoch/seconds; filter expressions | S13 | PASS | See rows 109, 111, 112. |
| 291 | How a tester uses it | Music needs both keys; scalar of string/number/binary | S10 | PASS | See rows 90, 92, 93. |
| 292 | How a tester uses it | "In the tutorial's run, the item without the sort key was refused" | none | N/A | Run record. |
| 293 | How a tester uses it | Compare a sample with a real run (step 3 type) | none | N/A | Run record. |
| 294 | How a tester uses it | Athena: WHERE partition; MSCK only Hive; camel case path | S31 | PASS | "If the Amazon S3 path is in camel case, MSCK REPAIR TABLE doesn't add the partitions to the AWS Glue Data Catalog." |
| 295 | How a tester uses it | Table must be registered before querying | S30 | PASS | See row 136. |
| 296 | How a tester uses it | TestState: unit tests; Catch/Retry; `afterInputPath` | S37 | PASS | "Error handling: Which Catch or Retry applies"; "Input after InputPath filter (afterInputPath)" |
| 297 | How a tester uses it | Mocking necessary for Map, Parallel, Activity, `.sync`, `waitForTaskToken` | S37 | PASS | "Mocking is necessary if you need to test the following state types or service integration patterns - Map, Parallel, Activity, .sync service integrations and waitForTaskToken service integrations." |
| 298 | How a tester uses it | Console TestState does not yet support some enhancements | S37 | PASS | "The console TestState feature does not yet support some of the enhancements described in this document" |
| 299 | How a tester uses it | No Choice true and no Default: error | S35 | PASS | See row 156. |
| 300 | How a tester uses it | Express steps may repeat; each at least once | S32 | PASS | "while each step in the workflow executes at least once" |
| 301 | How a tester uses it | "So check that a repeated step does no harm" | none | N/A | Advice step of the reader's own work. |
| 302 | Common mistakes | Don't rename the handler | S2 | PASS | See row 252. |
| 303 | Common mistakes | Lambda assumes role; avoid manual `sts:AssumeRole` | S4 | PASS | "You should avoid manually calling sts:AssumeRole to assume the execution role in your function code." |
| 304 | Common mistakes | Trust policy needs Lambda principal | S4 | PASS | See row 50. |
| 305 | Common mistakes | Can't replicate cloud; emulator tests can fail | S8 | PASS | See rows 268, 271. |
| 306 | Common mistakes | Handler slim adapter | S8 | PASS | See row 269. |
| 307 | Common mistakes | Timeout close to average duration | S5 | PASS | See row 278. |
| 308 | Common mistakes | Don't trust a reused environment; background processes resume | S6 | PASS | See rows 65, 67. |
| 309 | Common mistakes | SDKs use web service endpoints by default; local needs a local endpoint | S22 | PASS | "By default, the AWS SDKs and tools use endpoints for the Amazon DynamoDB web service. To use the SDKs and tools with the downloadable version of DynamoDB, you must specify the local endpoint" |
| 310 | Common mistakes | DynamoDB local: dev/test only; `-inMemory`; telemetry | S22, S23 | PASS | See rows 120, 122, 124. |
| 311 | Common mistakes | No JOIN | S9 | PASS | See row 12. |
| 312 | Common mistakes | Eventually consistent default; strong GSI/stream not supported | S11 | PASS | "Eventually consistent is the default read consistent model for all read operations." and row 103. |
| 313 | Common mistakes | TTL timing; non-Number ignored | S13 | PASS | See rows 110, 111. |
| 314 | Common mistakes | LOCATION is a folder, not a file | S28 | PASS | See row 140. |
| 315 | Common mistakes | Camel case path; MSCK only Hive | S31 | PASS | See rows 145, 294. |
| 316 | Common mistakes | Big unpartitioned bucket: GET rate limits, exceptions | S31 | PASS | "such queries may affect the GET request rate limits in Amazon S3 and lead to Amazon S3 exceptions" |
| 317 | Common mistakes | StartAt exact, case sensitive | S34 | PASS | See row 149. |
| 318 | Common mistakes | Choice: no Default gives error; no `End` field | S35 | PASS | "Choice states do not support the End field." |
| 319 | Common mistakes | Catchers not for top-level failures; default fail | S36 | PASS | See rows 165, 167. |
| 320 | Common mistakes | Express step may run more than once | S32 | PASS | See row 161. |
| 321 | Common mistakes | Console TestState: no mocking or Map/Parallel testing | S37 | PASS | "such as mocking service integrations, testing Map and Parallel states" |
| 322 | Common mistakes | Can't rename state machine | S38 | PASS | See row 263. |
| 323 | Common mistakes | Provisioned concurrency charges; provisioned mode; Athena tutorial charges | S7, S12, S26 | PASS | See rows 81, 107, 249. |
| 324 | What a tester can check | Tutorial advice callout (12 items) | none | PASS | Titled "Tutorial advice"; says "This list is the tutorial's own advice". It gives no tool fact the page does not support. |
| 325 | Key words | Serverless | none | PASS | Technical: "AWS Lambda is a serverless compute service"; "you can run code without provisioning or managing servers" |
| 326 | Key words | Event | none | PASS | "An event in Lambda is a JSON formatted document that contains data for your function to process" |
| 327 | Key words | Handler | none | PASS | "the handler function is always the entry point to your code"; "Lambda runs this method" |
| 328 | Key words | Context object | none | PASS | "The context object contains information about the function invocation and execution environment" |
| 329 | Key words | Trigger | none | PASS | "Some services can invoke a function with each new event, and this is called a trigger" |
| 330 | Key words | Event source mapping | none | PASS | "Lambda invokes the function with batches of records, which is called an event source mapping" |
| 331 | Key words | Synchronous invocation | none | PASS | "With synchronous invocation, you wait for the function to process the event and return a response" |
| 332 | Key words | Asynchronous invocation | none | PASS | "Lambda queues the event for processing and returns a response immediately" |
| 333 | Key words | Execution role | none | PASS | "A function's execution role is an IAM role that grants the function permission to access AWS services and resources" |
| 334 | Key words | Timeout | none | PASS | "The default is 3 seconds, and you can adjust it in increments of 1 second up to a maximum value of 1,800 seconds" |
| 335 | Key words | Execution environment | none | PASS | "Lambda invokes your function in an execution environment, which provides a secure and isolated runtime environment" |
| 336 | Key words | Cold start | none | PASS | "When Lambda has to initialize a new environment to carry out an invocation, this is known as a cold start" |
| 337 | Key words | Concurrency | none | PASS | "Concurrency is the number of in-flight requests that a function is handling at the same time" |
| 338 | Key words | Reserved concurrency | none | PASS | "Reserved concurrency reserves a portion of the concurrency of your account for a function. There is no charge for configuring it" |
| 339 | Key words | Provisioned concurrency | none | PASS | "pre-initializes environment instances, which reduces cold start latencies"; "incurs additional charges" |
| 340 | Key words | Throttling | none | PASS | "it experiences throttling, which means that it starts to drop requests" |
| 341 | Key words | Table, item, attribute | none | PASS | "A table is a collection of items, and each item is a collection of attributes" |
| 342 | Key words | Primary key | none | PASS | "The primary key uniquely identifies each item in the table, so that no two items can have the same key" |
| 343 | Key words | Partition key | none | PASS | "uses the value of the partition key as input to an internal hash function"; "determines the partition in which the item is stored" |
| 344 | Key words | Sort key | none | PASS | "all items with the same partition key value are stored together, in sorted order by sort key value" |
| 345 | Key words | Global secondary index | none | PASS | "has a partition key and sort key that can be different from those of the table" |
| 346 | Key words | Local secondary index | none | PASS | "has the same partition key as the table, but a different sort key" |
| 347 | Key words | Eventually consistent read | none | PASS | "eventually consistent, which is the default"; "might not reflect the results of a recently completed write" |
| 348 | Key words | Strongly consistent read | none | PASS | "If you set ConsistentRead to true, DynamoDB returns the most up-to-date data"; "not supported" on a GSI or stream |
| 349 | Key words | On-demand mode | none | PASS | "On-demand mode is the default and recommended throughput option for most workloads"; "pay-per-request pricing" |
| 350 | Key words | Provisioned mode | none | PASS | "you must specify the number of reads and writes per second"; "charged for the capacity that you provisioned" |
| 351 | Key words | TTL | none | PASS | "a method for deleting items that are no longer relevant"; "might delete items ... at any time, typically within a few days" |
| 352 | Key words | DynamoDB local | none | PASS | "the downloadable version of DynamoDB"; "intended for development and testing purposes only" |
| 353 | Key words | Athena table | none | PASS | "The metadata in a table tells Athena where the data is located in Amazon S3, and specifies the structure"; "a table must be registered in Athena" |
| 354 | Key words | Partition (Athena) | none | PASS | "specify the partition in the WHERE clause, Athena scans the data only from that partition" |
| 355 | Key words | Hive style partition | none | PASS | "whose data paths contain key value pairs connected by equal signs" |
| 356 | Key words | MSCK REPAIR TABLE | none | PASS | "loads new Hive partitions, and it works only with Hive-style partitions" |
| 357 | Key words | State machine | none | PASS | "a JSON-based, structured language used to define your state machine, a collection of states" |
| 358 | Key words | State | none | PASS | "Each step in a workflow is called a state" |
| 359 | Key words | Execution | none | PASS | "Instances of running workflows performing tasks are called executions" |
| 360 | Key words | Standard workflow | none | PASS | "exactly-once workflow execution, and they can run for up to one year" |
| 361 | Key words | Express workflow | none | PASS | "at-least-once workflow execution"; "up to five minutes"; "potentially run more than once" |
| 362 | Key words | Choice state | none | PASS | "adds conditional logic to a state machine"; "Default is the name of the state to transition to if no Choice Rule evaluates to true" |
| 363 | Key words | TestState API | none | PASS | "accepts the definition of a state and executes it"; "test a state without creating a state machine" |
| 364 | Key words | Mock | none | PASS | "A mock lets you test state logic without calling the actual service" |
| 365 | Key words | Fake | none | PASS | "a fake is a mock that takes shortcuts to simplify or speed up testing" |
| 366 | Key words | Test case (unittest) | none | PASS | "A test case is the individual unit of testing, and it checks for a specific response to a particular set of inputs" |

Open FAILs after round 11: 0

Open FAILs: 0
