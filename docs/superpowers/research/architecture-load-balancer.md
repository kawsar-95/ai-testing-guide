# Load Balancer (Architecture 06) — research notes (2026-10-20)

Fetch note: each source was fetched with `curl -sL` on 2026-10-20 and stripped to plain text in the scratchpad. The text was not committed. Each quote below is copied from that text. Curly apostrophes in the source are written as straight apostrophes here.

Base text: the owner's notes, section "Load Balancer" (`architecture-owner-notes.md`). The owner's notes have no "Common mistakes" list for this topic. The page adds one. It is the tutorial's own advice. One item (a server that stops before the drain ends) has a cite. The LMS example and the tester tips have no cite.

Scope note: the AWS defaults (30 s interval, 2 failures, 5 successes, 300 s drain) are the defaults of the AWS Application Load Balancer. The page names them as AWS defaults, not as general rules.

## Sources

S1. What is Elastic Load Balancing? — Elastic Load Balancing User Guide (AWS) — https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html — accessed 2026-10-20. Page cite `[1]`.
S2. Health checks for Application Load Balancer target groups — AWS Documentation — https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html — accessed 2026-10-20. Page cite `[2]`.
S3. HTTP Load Balancing — NGINX Documentation — https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/ — accessed 2026-10-20. Page cite `[3]`.
S4. Edit target group attributes for your Application Load Balancer — AWS Documentation — https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html — accessed 2026-10-20. Page cite `[4]`.
S5. What is an Application Load Balancer? — AWS Documentation — https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html — accessed 2026-10-20. Page cite `[5]`.
S6. NGINX SSL Termination — NGINX Documentation — https://docs.nginx.com/nginx/admin-guide/security-controls/terminating-ssl-http/ — accessed 2026-10-20. Page cite `[6]`. Added by the fact-check.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | A load balancer distributes incoming traffic across many targets (servers, containers, IP addresses) | S1 | "Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses" |
| 2 | It monitors target health and routes only to healthy targets | S1 | "It monitors the health of its registered targets, and routes traffic only to the healthy targets." |
| 3 | A load balancer increases availability and fault tolerance | S1 | "Using a load balancer increases the availability and fault tolerance of your applications." |
| 4 | You can add and remove servers without disrupting the flow of requests | S1 | "You can add and remove compute resources from your load balancer as your needs change, without disrupting the overall flow of requests to your applications." |
| 5 | The load balancer can do the encryption and decryption work (TLS termination) | S1 | "You can also offload the work of encryption and decryption to your load balancer so that your compute resources can focus on their main work." |
| 6 | Listener rules route requests to different target groups by content; path conditions use the URL | S5 | "You can configure listener rules to route requests to different target groups based on the content of the application traffic." / "You can configure rules for your listener that forward requests based on the URL in the request." |
| 7 | Health checks are periodic test requests to the targets | S2 | "Your Application Load Balancer periodically sends requests to its registered targets to test their status. These tests are called health checks ." |
| 8 | Default interval 30 s (instance or ip target) | S2 | "The approximate amount of time, in seconds, between health checks of an individual target. The range is 5–300 seconds. The default is 30 seconds if the target type is instance or ip" |
| 9 | Default: 2 failed checks make a target unhealthy | S2 | "The number of consecutive failed health checks required before considering a target unhealthy. The range is 2–10. The default is 2." |
| 10 | Default: 5 successful checks make an unhealthy target healthy again | S2 | "The number of consecutive successful health checks required before considering an unhealthy target healthy. The range is 2–10. The default is 5." |
| 11 | After the failures, the load balancer takes the target out of service; after the successes, it puts it back | S2 | "the load balancer takes the target out of service. When the health checks exceed HealthyThresholdCount consecutive successes, the load balancer puts the target back in service." |
| 12 | If all targets are unhealthy, the ALB sends requests to all of them | S2 | "If a target group contains only unhealthy registered targets, the load balancer routes requests to all those targets, regardless of their health status." |
| 13 | Round Robin: requests go evenly across servers; it is the default in NGINX | S3 | "Round Robin – Requests are distributed evenly across the servers, with server weights taken into consideration. This method is used by default" |
| 14 | Least Connections: the server with the fewest active connections | S3 | "Least Connections – A request is sent to the server with the least number of active connections." |
| 15 | IP Hash: the client IP address picks the server, so one address goes to the same server | S3 | "IP Hash – The server to which a request is sent is determined from the client IP address." / "The method guarantees that requests from the same address get to the same server unless it is not available." |
| 16 | Deregistration delay: the LB stops new requests to a leaving target and waits (default 300 s) for in-flight requests | S4 | "Elastic Load Balancing stops sending requests to targets that are deregistering. By default, Elastic Load Balancing waits 300 seconds before completing the deregistration process, which can help in-flight requests to the target to complete." |
| 17 | The state of a leaving target is "draining" | S4 | "The initial state of a deregistering target is draining ." |
| 18 | If the target closes the connection before the delay ends, the client gets a 500-level error | S4 | "If a deregistering target terminates the connection before the deregistration delay elapses, the client receives a 500-level error response." |
| 19 | Sticky sessions bind a user's session to one target | S4 | "you can use the sticky session feature (also known as session affinity) to enable the load balancer to bind a user's session to a specific target." |
| 20 | The load balancer terminates the client connection and decrypts the requests (TLS termination) | S1 | "The load balancer uses certificates to terminate connections and decrypt requests from clients." |
| 21 | NGINX names this job "SSL termination" (an HTTPS server with TLS protocols) | S6 | "NGINX SSL Termination" / "This section describes how to configure an HTTPS server on NGINX and F5 NGINX Plus." / "ssl_protocols TLSv1.2 TLSv1.3;" |
| 22 | The result of each health check lasts for the whole interval | S2 | "Each health check request is independent and the result lasts for the entire interval." |
| 23 | A deregistering target with no in-flight requests completes at once; otherwise the wait is up to the delay | S4 | "If a deregistering target has no in-flight requests and no active connections, Elastic Load Balancing immediately completes the deregistration process, without waiting for the deregistration delay to elapse." |
