# System Architecture & Design Foundation

# **Introduction**

Most students begin learning software development with a single focus:

**“How can I build this feature?”**

That is an important skill. But in real-world software engineering, building a feature is only the first step.

A beginner developer often thinks:

- The login system works.
- The payment button works.
- The file upload works.

**Therefore, the system is complete.**

An engineer thinks differently.

They ask questions such as:

- What happens if 10,000 users access the system at the same time?
- What happens if the server suddenly goes down?
- What if a payment succeeds, but the confirmation message fails?
- What if someone uploads a file that is much larger than expected?
- What if a single user sends thousands of requests per minute?
- What data can never be lost under any circumstances?
- Which part of the system becomes slow as traffic grows?
- Which operations should run in the background instead of making users wait?
- How will we detect problems before customers start reporting them?

This is where **System Architecture** becomes essential.

System Architecture teaches engineers how to think beyond writing code. It helps them understand how software behaves when real-world challenges appear—high traffic, massive amounts of data, system failures, security risks, operational costs, and growing business demands.

In other words, coding teaches you how to build a feature.

**System Architecture teaches you how to build a system that survives.**

# **Why System Design Matters**

System Design means high-level planning for a software system. It explains how the main parts of the system work together: client, backend, database, cache, queue, storage, monitoring, security, and deployment.

System Design is not only drawing diagrams. The real work is making tradeoff decisions:

- simplicity vs scalability,
- cost vs availability,
- performance vs consistency,
- and synchronous vs asynchronous processing.

![image.png](System%20Architecture%20&%20Design%20Foundation/image.png)

# **When should you think about System Design**

- User or traffic is increasing.
- A campaign, product launch, flash sale, or seasonal spike may happen.
- The system has payment, wallet, order, enrollment, or financial transactions.
- The system handles files, images, videos, PDFs, or large uploads/downloads.
- Downtime can cause business loss or damage user trust.
- The product has a plan to grow in the future.

## **Real Life Example**

An online learning platform works fine with 200 students. But on admission day, 10,000 visitors may try to log in, pay, watch videos, or download certificates at the same time.

Slow login, delayed payment callback, video loading issue, certificate timeout, and database overload are not only coding bugs. Many of them are architecture-level risks.

# **Functional vs Non-functional Requirements**

**Functional requirements** describe what the system should do. Examples: registration, login, payment, course enrollment, video watching, and certificate generation.

**Non functional requirements** describe how well the system should work. Examples: performance, scalability, availability, reliability, security, maintainability, observability, and cost control.

Architecture decisions are mostly driven by non-functional requirements. A feature list is not enough for good architecture.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%201.png)

## **When should you think about Functional vs Non-functional Requirements?**

- Before starting architecture design.
- During new feature planning.
- When there is performance, security, or scalability risk.
- When the system depends on payment, SMS, email, maps, AI API, or other third-party services.
- When uptime, response time, backup policy, or compliance expectation matters.

## **Real Life Example**

**Requirement**: Students can watch course videos. This is a functional requirement.

But for architecture, we need more questions:

- How many students will watch at the same time?
- Where will videos be stored?
- Do we need CDN?
- What should be the video loading speed?
- What will be the storage cost?

## **Common Mistakes**

- Writing only a feature list and calling it complete requirements.
- Treating login, payment, reports, and video as equally critical.
- Not writing performance targets or traffic estimates.
- Ignoring security, backup, monitoring, and cost.
- Choosing technology without understanding non-functional requirements.

# **Single Server Architecture**

Single Server Architecture means the major parts of an application run on one server or VPS. For example: web server, backend application, database, file storage, logs, and background processes.

It is common and practical for small applications, MVPs, internal tools, portfolio websites, small LMS platforms, or low-traffic product launches.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%202.png)

## **When should you think about Single Server Architecture?**

- The project is new and has few users.
- Traffic is low and predictable.
- Budget is limited.
- The team is small.
- Fast launch is more important than complex scaling.
- High availability is not mandatory yet.
- Complex scaling is not needed at the beginning.

## **Real Life Example**

A small training institute runs Nginx, Node.js backend, MySQL database, uploaded files, and logs on one VPS. For 200-500 students, this can be cheap, simple, and easy to debug.

But if 5,000-10,000 visitors come at the same time, CPU and RAM may become full, DB may slow down, files may download slowly, and the whole system may go down.

## **Common Mistakes**

- Running production without backup.
- Keeping uploaded files and database on the same server without backup.
- Not monitoring disk usage.
- Assuming one server can handle very large traffic forever.
- Making everything tightly coupled without thinking about future migration.

# **Vertical Scaling**

Vertical Scaling means making the same server or machine more powerful.

For example: adding more CPU, more RAM, faster disk, or a bigger database instance.

It is often the first practical scaling step because it does not require a large architecture rewrite.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%203.png)

## **When should you think about Vertical Scaling?**

- You want to keep the architecture simple.
- You need quick performance improvement.
- The bottleneck is mainly CPU, RAM, disk I/O, or database instance capacity.
- Traffic growth is moderate.
- The engineering team is not ready to manage distributed architecture yet.

## **Real Life Example**

During an admission campaign, the LMS server CPU reaches 95% and RAM is almost full. As a quick fix, the VPS is upgraded from 2 CPU / 4GB RAM to 8 CPU / 16GB RAM.

Response time improves, but the server is still a single point of failure. If that server goes down, the full system goes down.

## **Common Mistakes**

- Upgrading the server without measuring the real bottleneck.
- Thinking vertical scaling solves high availability.
- Upgrading the server but not optimizing slow database queries.
- Ignoring backup, monitoring, and alerting.
- Thinking one machine can scale forever.

# **Horizontal Scaling**

**Horizontal Scaling** means adding more servers or instances to increase system capacity. The same application runs on multiple app servers, and traffic is distributed among them.

It helps handle high traffic. It also improves availability because if one app server goes down, other app servers can continue serving requests.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%204.png)

## **When should you think about Horizontal Scaling?**

- One server cannot handle the traffic.
- High availability is needed.
- The application can be made stateless.
- Traffic spikes are predictable.
- Zero-downtime deployment or rolling deployment is needed.
- Service should continue even if one server crashes.

## **Real Life Example**

On LMS admission day, thousands of students try to log in at the same time. One server becomes overloaded.

The team deploys three app servers and uses a load balancer to distribute traffic. If App Server 2 crashes, traffic can still go to App Server 1 and App Server 3.

## **Common Mistakes**

- Thinking more app servers always make the full system scalable. The database can still be the bottleneck.
- Keeping session in local memory.
- Keeping uploaded files on local disk.
- Not using centralized logs.
- Keeping environment variables or configuration inconsistent across servers.

# **Load Balancer**

A Load Balancer is a component that receives incoming requests and distributes them to multiple backend app servers.

It can handle traffic distribution, health check, failover, SSL termination, and sometimes routing rules.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%205.png)

## **When should you think about Load Balancer?**

- There are multiple app servers.
- High availability is needed.
- You want to stop sending traffic to unhealthy servers.
- You want traffic to be distributed evenly.
- You want to deploy application without any downtime.

## **Real Life Example**

Three app servers are running. App Server 3 becomes unhealthy because of a memory issue.

The load balancer detects this through a health check and stops sending traffic to App Server 3. Users can still use the system through App Server 1 and App Server 2.

# **Stateless Service**

A stateless service does not keep important user state in local memory or local disk of the app server.

User session, token data, temporary state, and uploaded files should be stored in shared external systems such as Redis, database, JWT, or object storage.

Because of this, any request can go to any app server and still work correctly.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%206.png)

## **When should you think about Stateless Services?**

- You want horizontal scaling.
- Multiple app servers will run.
- You want rolling deployment.
- User sessions should survive server restart.
- You want to use cloud or container-based deployment.

## 

## **Real Life Example**

A student logs in through App Server 1. The next request goes to App Server 2.

If the session is stored only in App Server 1 memory, the student may appear logged out. If Redis or JWT-based session is used, App Server 2 can validate the request correctly.

## **Common MIstakes**

- Keeping sessions in local memory.
- Keeping uploaded files on local app server disk.
- Keeping background jobs tightly coupled with the app process.
- Running the same cron job on multiple servers and creating duplicate work.
- Using sticky sessions to hide weak architecture.

# **File Storage Problem and Object Storage**

Local file upload is simple on a single server. But in a multi-server architecture, local file storage becomes inconsistent.

Object storage such as Amazon S3-compatible storage, Azure Blob Storage, or Google Cloud Storage is a better choice for files.

Usually we do not store large file binaries directly in the database. We store file URL, path, and metadata in the database.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%207.png)

## **When should you think about File Storage Problem and Object Storage?**

- Multiple app servers will be used.
- The system stores images, videos, PDFs, assignment files, certificates, or reports.
- Files are large.
- File backup, durability, and access control are needed.
- You want to serve static files through CDN.

## **Real Life Example**

A student profile image is uploaded through App Server 1. The next request goes to App Server 2.

If the file is stored on local disk of App Server 1, App Server 2 cannot find it. If object storage is used, all app servers can access the same file.

## **Common Mistakes**

- Storing large image or video binary data directly in the database.
- Not separating public and private file access control.
- Not keeping database metadata synced after file update or delete.
- Making object storage permissions too public.
- Not handling large file upload timeout.

# **CDN for Static Content Delivery**

A **CDN, or Content Delivery Network**, serves static content from edge locations near the user.

Images, videos, CSS, JavaScript, fonts, PDFs, and static pages can be served through CDN. This reduces backend load and improves response speed.

The original file stays in the origin server or object storage. The CDN caches it and delivers it from nearby locations.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%208.png)

## **When should you think about CDN for Static Content Delivery?**

- The system serves a lot of static content.
- Videos, images, PDFs, JS, or CSS bundles are large or frequently requested.
- Users are geographically distributed.
- Backend server is overloaded by static file traffic.
- You want to improve page loading speed.

## **Real Life Example**

Course thumbnails, recorded class videos, certificate PDFs, and JavaScript bundles should not be served directly from the backend API.

A better design is to serve these files from object storage plus CDN. Then the backend can focus on business logic, and CDN can handle static file traffic.

## 

## **Common Mistakes**

- Caching personal user data in CDN, which can expose one user's data to another user.
- Putting private files behind public CDN links without proper permission checking.
- Forgetting to clear or refresh CDN cache after updating files.
- Changing JS/CSS code but keeping the same file name, causing users to load old or broken assets.
- Ignoring CDN failure cases, so the site may break when CDN or origin has a problem.

# **Basic Cloud Architecture**

**Cloud architecture** means designing how an application runs using cloud-managed services such as compute, database, storage, networking, security, monitoring, backup, and scaling.

In a **VPS**, you usually manage one server yourself; in **cloud architecture**, you design a connected system where different managed services work together to make the application more scalable, reliable, secure, and easier to operate.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%209.png)

## **When should you think about Basic Cloud Architecture?**

- Scalability and reliability are needed.
- Managed database, object storage, CDN, and monitoring are needed.
- Backup, security, and deployment automation are needed.
- Traffic is unpredictable.
- The team wants to reduce infrastructure maintenance work.

## 

## **Real Life Example**

A practical LMS cloud setup may include backend app servers or containers, managed MySQL, object storage for videos and certificates, CDN for static assets, Redis for cache/session/rate limit, monitoring for logs/alerts, DNS, and load balancer for routing.

## 

## **Common Mistakes**

- Keeping all resources in a public network.
- Hardcoding secrets in the code repository.
- Using managed services without understanding backup and monitoring.
- Not monitoring cloud cost.
- Not separating production and staging environments.

# **Database Replication and Read/Write Splitting**

Database replication means data from the primary database is copied to one or more replica databases.

The primary database handles writes such as registration, payment, enrollment, and update. Read replicas handle read-heavy queries such as course lists, reports, analytics, and dashboard data.

Replication improves read scalability, but replication lag can cause stale reads.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2010.png)

## **When should you think about Database Replication and Read/Write Splitting?**

- Read traffic is very high.
- Reports or analytics are slowing down the primary database.
- High availability planning is needed.
- You want to separate critical writes from non-critical reads.
- You need a future failover strategy.

## **Real Life Example**

A student completes payment. The payment success is written to the primary database.

If the dashboard immediately reads from a replica and replication lag exists, the student may still see “Unpaid”. A better design is to read critical payment status from the primary DB right after payment or show a “Processing” state.

## **Common Mistakes**

- Sending all reads to replicas and breaking read-after-write flows.
- Thinking replication is the same as backup.
- Not monitoring replication lag.
- Not testing failover.
- Ignoring whether reports are overloading the primary database.

# **Caching with Redis**

Caching means storing frequently accessed data in fast temporary storage so the system does not need to query the database every time.

A cache hit means the data is found in cache. A cache miss means the system must fetch the data from the database or source API.

TTL means cache expiry time. Cache invalidation means removing or updating old cache.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2011.png)

## **When should you think about Caching with Redis?**

- The same data is read frequently.
- Database load is high.
- Response time must improve.
- Data does not change very frequently.
- External API calls are expensive or slow.

## **Real Life Example**

Course list is viewed thousands of times per day, but course information changes only sometimes.

The course list can be cached in Redis for 10 minutes. But when an admin updates course price, related cache should be invalidated. Otherwise students may see the old price.

## **Common Mistakes**

- Caching sensitive user-specific data with the wrong cache key.
- Using a very long TTL and showing stale data.
- Not having a cache invalidation plan.
- Making the full app fail when Redis is down.
- Confusing cache performance with data correctness.

# **Distributed Cache**

Distributed cache is a shared fast storage layer used by multiple app servers. Redis Cluster, Redis Sentinel, or managed Redis are common examples.

Common use cases are session store, OTP, rate limit counter, feature flag, leaderboard, temporary state, and distributed lock.

Local cache can become inconsistent in a multi-server environment because each server keeps its own separate copy. Distributed cache gives shared state, so all app servers can read and update the same cached data.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2012.png)

## **Frontend-facing Redis and Backend Redis**

In some systems, Redis can be used for both frontend-facing and backend-facing purposes.

**Frontend-facing** **Redis** is used to make user-facing responses faster. For example, caching course lists, public landing page data, dashboard summary data, menu/config data, or frequently requested API responses.

**Backend Redis** is used to manage internal system logic and background operations. For example, storing OTP, login/session data, rate limit counters, job queue state, distributed locks, payment processing state, and temporary workflow data.

## **When should you think about Distributed Cache?**

- Multiple app servers are running.
- Session, OTP, or rate limit counter must be accessible from all servers.
- Local memory cache is creating inconsistent data.
- Fast shared temporary state is needed.
- Horizontal scaling is planned.

## **Real Life Example**

In an OTP login system, the OTP is stored in Redis with a key like otp:phone and a TTL of 2 minutes.

Verification requests can go to App Server 1, 2, or 3. All of them can check the same OTP from Redis.

## **Common Mistakes**

- Using local cache and creating inconsistent data.
- Not handling distributed cache failure.
- Using cache as a permanent database.
- Using distributed lock incorrectly and creating deadlock.
- Not following a clear key naming convention.

# **Rate Limiting**

Rate limiting controls how many requests a user, IP, API key, or phone number can send within a time window.

It protects the system from abuse, bots, brute force attacks, accidental client bugs, and overuse of expensive APIs.

When the limit is exceeded, the system usually returns HTTP 429 Too Many Requests.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2013.png)

## **When should you think about Rate Limiting?**

- Login, OTP, or password reset endpoints exist.
- Payment initiation or callback endpoints exist.
- Search, file upload, AI API, or report generation is expensive.
- A public API is exposed.
- SMS or email cost must be protected.

## **Real Life Example**

For OTP login, a rule can be: maximum 3 OTP requests from the same phone number within 5 minutes and maximum 10 requests from the same IP within 10 minutes.

This reduces SMS cost, spam, and brute force attempts.

## **Common Mistakes**

- Using only IP-based limits. Shared networks can block real users.
- Not using stricter limits for sensitive endpoints.
- Not returning retryAfterSeconds with 429 response.
- Keeping rate limit counters in local memory.
- Ignoring admin or internal endpoints completely.

# **Message Queue and Async Processing**

A Message Queue allows heavy, slow, or unreliable tasks to be processed by background workers instead of the API request.

The producer sends a message or job to the queue. The consumer or worker takes the job from the queue and processes it.

Common use cases are email, SMS, PDF generation, image resize, payment post-processing, analytics update, and notification.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2014.png)

## **When should you think about Message Queue and Async Processing?**

- A task is slow or long-running.
- An external service is slow or unreliable.
- The user should get a fast API response.
- Retry is needed.
- Heavy tasks should run in the background.
- You want to smooth out peak traffic.

## **Real Life Example**

A student clicks “Generate Certificate”. Bad design keeps the request waiting 20-30 seconds while the system generates PDF, uploads it, and sends email.

Better design: API puts a job in a queue and returns “Processing”. A worker generates the PDF and sends the email in the background.

## **Common Mistakes**

- Using a queue but not showing job status to users.
- Enabling retry without making the task safe for retry.
- Not using a dead letter queue.
- Not thinking about what happens if a worker goes down.
- Not monitoring queue length.

# **Idempotency**

Idempotency means the same operation can be processed multiple times, but the final effect remains the same.

In distributed systems, duplicate requests are normal. A user may double-click, a payment gateway may resend the same callback, or a queue job may retry.

Idempotency keys, transaction IDs, unique constraints, and status checks can prevent duplicate side effects.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2015.png)

## **When should you think about Idempotency?**

- Payment callback or webhook is used.
- Order placement exists.
- Wallet transaction exists.
- Course enrollment depends on payment.
- Commission calculation is involved.
- Certificate generation or notification retry is used.

## 

## **Real Life Example**

A payment gateway sends the same success callback two times.

Without idempotency, course access may be unlocked twice, commission may be credited twice, receipt email may be sent multiple times, or duplicate rows may be created.

Good design: transaction_id is unique. If status is already paid, the system returns success but does not perform duplicate action.

## **Common Mistakes**

- Only disabling the frontend button and thinking duplicate prevention is done.
- Enabling retry without idempotency.
- Not keeping a unique transaction ID.
- Not using database unique constraints.
- Returning error for duplicate webhook, causing the gateway to retry again.

# **API Gateway Concepts**

An API Gateway is a central API entry point between clients and backend services.

It can handle request routing, authentication, rate limiting, request transformation, response aggregation, logging, and metrics.

A load balancer mainly distributes traffic. An API Gateway handles API-level concerns.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2016.png)

## **When should you think about API Gateway Concepts?**

- There are multiple backend services.
- Web and mobile clients need the same API entry point.
- Auth, rate limit, and logging should be centralized.
- Client complexity should be reduced.
- Backend service structure should be hidden from clients.

## **Real Life Example**

A student dashboard needs profile, enrolled courses, payment status, and upcoming classes.

Instead of the mobile app calling four services directly, it calls one /student/dashboard endpoint. The API Gateway layer internally collects data and returns one response.

## **Common Mistakes**

- Putting too much business logic in the gateway.
- Keeping the gateway as a single point of failure.
- Leaving auth bypass routes.
- Failing the full dashboard because one downstream service is slow.
- Not preserving request ID or correlation ID.

# **Monolith, Modular Monolith, and Microservices**

**Monolith** means all features are inside one deployable application. For early-stage products, this is often the best choice.

**Modular Monolith** means one application, but internal modules are clearly separated, such as user, course, payment, and notification modules.

**Microservices** means independent services, often with their own database, deployment pipeline, and scaling strategy.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2017.png)

## **When should you think about Monolith, Modular Monolith, and Microservices?**

- Choose monolith when the team is small, the product is early-stage, traffic is low or moderate, and fast iteration is needed.
- Choose modular monolith when the codebase is growing but you do not want microservices complexity yet.
- Choose microservices when service boundaries are clear, the team is mature, independent scaling/deployment is needed, and DevOps, monitoring, and tracing are ready.

## **Real LIfe Example**

An LMS can start as a monolith. Later, notification can become a separate service because email/SMS is async and independent.

Payment can be separated because it is reliability- and security-critical. Certificate or video processing can be separated because it is CPU-heavy background work.

## **Common Mistakes**

- Creating many microservices with a small team and small traffic.
- Sharing the same database and calling it microservices.
- Splitting services without monitoring and tracing.
- Defining services by technical layers instead of business capability.
- Underestimating distributed transaction complexity.

# **Monitoring and Observability**

Monitoring tells us whether the system is healthy. Observability helps us understand why the system is unhealthy.

The core pillars are logs, metrics, and traces.

**Logs** explain what happened.

**Metrics** explain how much or how often it happened.

**Traces** show where a request spent time.

Important metrics include RPS, error rate, p95/p99 latency, queue length, DB slow queries, replication lag, CPU, RAM, and disk usage.

![image.png](System%20Architecture%20&%20Design%20Foundation/image%2018.png)

**When should you think about Monitoring and Observability?**

- A production system is running.
- Critical flows exist: payment, login, order, or enrollment.
- Multiple services or servers are used.
- Queue, cache, or external API dependencies exist.
- Incident debugging must be fast.
- There is an uptime or SLA target.

## **Real Life Example**

Users complain that login is slow. Without observability, developers may randomly check code.

With observability, the team sees that login p95 latency increased from 300 ms to 3 seconds.

Logs show SMS provider timeout.

Trace shows the external SMS call is taking 2.5 seconds.

The root cause becomes clear.

## **Common monitoring and observability tools**

| **Area** | **Popular Tools** |
| --- | --- |
| **Logs** | ELK Stack / Elastic Stack, Grafana Loki, Splunk, Datadog Logs, AWS CloudWatch Logs |
| **Metrics** | Prometheus, Grafana, Datadog, New Relic, AWS CloudWatch |
| **Traces / APM** | Jaeger, Zipkin, OpenTelemetry, Datadog APM, New Relic APM |
| **Alerting** | Alertmanager, Grafana Alerting, PagerDuty, Opsgenie, AWS CloudWatch Alarms |
| **Cloud Monitoring** | AWS CloudWatch, Google Cloud Monitoring, Azure Monitor |

## **Common Mistakes**

- Logging everything but without useful context.
- Not using request ID or correlation ID.
- Trying to detect business failure only with CPU alerts.
- Having metrics but no actionable alert.
- Debugging microservices without traces.

**System Design Practice Questions**
1. Design a simple LMS for 500 students. Which components will you use?
2. What are the limitations of Single Server Architecture?
3. When should you use Vertical Scaling and when should you use Horizontal Scaling?
4. What does a Load Balancer do? Why is health check important?
5. What is a Stateless Service? Where should session data be stored?
6. How would you optimize a course list page that gets thousands of hits?
7. What is the cache invalidation problem? What will you do when course price is updated?
8. When should you use CDN? How can private video delivery be secured?
9. What will you do if database read load becomes high?
10. How will you handle replication lag when using read replicas?
11. How will you prevent duplicate payment gateway callbacks?
12. Certificate generation takes one minute. Should it be synchronous or asynchronous? Why?
13. What happens if a queue worker fails?
14. Why do we need a Dead Letter Queue?
15. How will you design login flow if the external SMS service is slow?
16. How will you rate limit an OTP login endpoint?
17. What is the difference between public file delivery and private file delivery?
18. Why is it risky to keep a database accessible from the public internet?
19. Where can an API Gateway handle auth and rate limiting?
20. What concerns are important when caching sensitive data?
21. What is the difference between logs, metrics, and traces?
22. Which logs should be kept for a payment flow?
23. Why is p95 latency more useful than average latency?
24. What does high queue length indicate?
25. Why is request ID important for production incident debugging?
26. For an LMS, would you choose monolith or microservices? Why?
27. Give an example of consistency vs performance tradeoff.
28. Explain cost vs availability tradeoff.
29. When should you not use microservices?
30. Why is “why” important when explaining architecture decisions?

1. 1. Design a simple LMS for 500 students. Which components will you use?
2. 2. What are the limitations of Single Server Architecture?
3. 3. When should you use Vertical Scaling and when should you use Horizontal Scaling?
4. 4. What does a Load Balancer do? Why is health check important?
5. 5. What is a Stateless Service? Where should session data be stored?
6. 6. How would you optimize a course list page that gets thousands of hits?
7. 7. What is the cache invalidation problem? What will you do when course price is updated?
8. 8. When should you use CDN? How can private video delivery be secured?
9. 9. What will you do if database read load becomes high?
10. 10. How will you handle replication lag when using read replicas?
11. 11. How will you prevent duplicate payment gateway callbacks?
12. 12. Certificate generation takes one minute. Should it be synchronous or asynchronous? Why?
13. 13. What happens if a queue worker fails?
14. 14. Why do we need a Dead Letter Queue?
15. 15. How will you design login flow if the external SMS service is slow?
16. 16. How will you rate limit an OTP login endpoint?
17. 17. What is the difference between public file delivery and private file delivery?
18. 18. Why is it risky to keep a database accessible from the public internet?
19. 19. Where can an API Gateway handle auth and rate limiting?
20. 20. What concerns are important when caching sensitive data?
21. 21. What is the difference between logs, metrics, and traces?
22. 22. Which logs should be kept for a payment flow?
23. 23. Why is p95 latency more useful than average latency?
24. 24. What does high queue length indicate?
25. 25. Why is request ID important for production incident debugging?
26. 26. For an LMS, would you choose monolith or microservices? Why?
27. 27. Give an example of consistency vs performance tradeoff.
28. 28. Explain cost vs availability tradeoff.
29. 29. When should you not use microservices?
30. 30. Why is “why” important when explaining architecture decisions?