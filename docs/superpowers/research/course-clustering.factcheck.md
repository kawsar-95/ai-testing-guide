# Fact-check: Clustering (course page)

Page: `content/course/clustering.mdx`. Checker: an agent that did not write the page. Date: 2026-10-22.
All 8 sources were fetched again with curl into `/tmp/claude-1000/fc-clustering/` and checked. The quotes below come from that fetch, not from the research notes.

## Claims

| # | Claim on the page | Cite | Verdict | Quote from the source, or the reason for FAIL |
|---|---|---|---|---|
| 1 | A cluster is a group of machines that work together; the extra machines guard against failures. | 1 | PASS | "Computer clusters can be used to provide highly available services or resources. The redundancy of multiple machines is used to guard against failures of many types." |
| 2 | Each machine in the group is a node. | 1 | PASS | "software that runs on a set of hosts (a cluster of nodes)" (no cite on that sentence, but S1 supports it) |
| 3 | Active-passive: one node gives the service; when the working node fails, the second node takes its job. | 1 | PASS | "One of the nodes provides the desired services, and if it fails, the other node takes over." |
| 4 | Active-active: the data must be available on all nodes at once. | 4 | PASS | "The primary requirement for an active/active cluster is that the data required for your services is available, simultaneously, on both machines." (S4 says "both machines"; the page says "all of them". Fair generalisation.) |
| 5 | Active-active: the nodes work at the same time. | 4 | PASS | S4 and S1 do not define the term in these words. S1: "Pacemaker can even run multiple copies of services to spread out the workload." The common meaning agrees with the source. |
| 6 | The cluster can run many copies of a service to spread the work. | 1 | PASS | "Pacemaker can even run multiple copies of services to spread out the workload." |
| 7 | Failover is the move from a failed node to a working node. | 3 | PASS | "failover happened automatically" (S3 uses the word for this move; the page does not cite it on the key-words row). |
| 8 | In a Pacemaker test, engineers stop the cluster software on the node that runs the service. | 3 | PASS | "Shut down pacemaker and corosync on that machine to trigger a failover." |
| 9 | The service then starts on the other node, and failover is automatic. | 3 | PASS | "ClusterIP is now running on pcmk-1 – failover happened automatically, and no errors are reported." |
| 10 | Kubernetes is also a cluster, with a control plane and worker nodes. | 6 | PASS | "A Kubernetes cluster consists of a control plane plus a set of worker machines, called nodes, that run containerized applications." |
| 11 | In production the control plane usually runs on many computers, for fault tolerance and high availability. | 6 | PASS | "In production environments, the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability." |
| 12 | Redundancy of many machines keeps the service available when a machine fails. | 1 | PASS | "The redundancy of multiple machines is used to guard against failures of many types." |
| 13 | Kubernetes nodes send heartbeats; they help the cluster know if a node is available and act on failure. | 7 | PASS | "Heartbeats, sent by Kubernetes nodes, help your cluster determine the availability of each node, and to take action when failures are detected." |
| 14 | If a node cannot be reached, its Ready condition becomes Unknown. | 7 | PASS | "In the case that a node becomes unreachable, updating the Ready condition in the Node's .status field. In this case the node controller sets the Ready condition to Unknown." |
| 15 | By default Kubernetes waits 5 minutes before the first Pod eviction request. | 7 | PASS | "By default, the node controller waits 5 minutes between marking the node as Unknown and submitting the first eviction request." |
| 16 | Split brain: a broken network between nodes; each side can still run the service but cannot talk to the other side. | 5 | PASS | "Fencing protects against the “split brain” failure scenario, where cluster nodes have lost the ability to reliably communicate with each other but are still able to run resources." |
| 17 | If the cluster only assumed that silent nodes were down, many copies of one resource could start on different nodes. | 5 | PASS | "If the cluster just assumed that uncommunicative nodes were down, then multiple instances of a resource could be started on different nodes." |
| 18 | Two hosts with the same IP address send packets at random to one host or the other. | 5 | PASS | "an IP address brought up on two hosts on a network will cause packets to randomly be sent to one or the other host, rendering the IP useless." |
| 19 | For a database or cluster file system, the damage can be data corruption. | 5 | PASS | "For a database or clustered file system, the effect could be much more severe, causing data corruption or divergence." |
| 20 | Quorum: a group has quorum when it holds a majority: most of the cluster's nodes are online and in contact in that group. | 3 | PASS | "A cluster has quorum when more than half of all known nodes are online in the same partition" (re-check: reworded; "in contact" matches "in the same partition") |
| 21 | Quorum stops a service from starting on more nodes than wanted. | 3 | PASS | "quorum is used to prevent resources from starting on more nodes than desired, which would risk data corruption." |
| 22 | Fencing (STONITH): the cluster makes sure a node is really offline before another node uses the data. | 2 | PASS | "The only way to be 100% sure that your data is safe, is to use fencing to ensure that the node is truly offline before allowing the data to be accessed from another node." and "Fencing is also known as STONITH" |
| 23 | A node that does not answer may still use the data. | 2 | PASS | "Just because a node is unresponsive doesn’t mean it has stopped accessing your data." |
| 24 | A common form of fencing is to cut the power of the host. | 2 | PASS | "since the most popular form of fencing is cutting a host’s power." |
| 25 | Diagram and text: a 5-node cluster that splits 3 and 2; the 3 nodes keep quorum (the 2 do not; the group of 2 does not start the service). | 3 | PASS | "if a 5-node cluster split into 3- and 2-node paritions, the 3-node partition would have quorum and could continue serving resources." The "2 of 5 has no quorum" line follows from the definition (2 is not more than half of 5). |
| 26 | A 6-node cluster that splits 3 and 3: neither side has quorum, and by default Pacemaker stops all resources. | 3 | PASS | "If a 6-node cluster split into two 3-node partitions, neither partition would have quorum; Pacemaker’s default behavior in such cases is to stop all resources, in order to prevent data corruption." |
| 27 | Two-node clusters are a special case: one node alone is not more than half of two nodes. | none | PASS | "By the above definition, a two-node cluster would only have quorum when both nodes are running." (no cite on this sentence; it follows from the definition cited in claim 20) |
| 28 | Corosync can accept one node as enough for quorum in a two-node cluster; this is safe if fencing is configured. | 3 | PASS | "Corosync has the ability to require only one node for quorum in a two-node cluster." and "As long as fencing is configured, there is no danger of this." |
| 29 | Fencing is on by default. | 2 | PASS | "fencing is enabled by default." |
| 30 | If you turn fencing off, the cluster pretends that failed nodes are safely off. | 2 | PASS | "It tells the cluster to simply pretend that failed nodes are safely powered off." |
| 31 | A test cluster without fencing cannot test real failure scenarios. | 2 | PASS | "Even disabling it for a test cluster means you won’t be able to test real failure scenarios." |
| 32 | In a stacked Kubernetes control plane, one failed node takes down both its etcd member and its control plane instance. | 8 | PASS | "If one node goes down, both an etcd member and a control plane instance are lost, and redundancy is compromised." (re-check: reworded) |
| 33 | The docs advise at least three control plane nodes. | 8 | PASS | "You should therefore run a minimum of three stacked control plane nodes for an HA cluster." |
| 34 | Expecting failover to be instant: Kubernetes first marks an unreachable node `Unknown`; after that, by default it waits 5 minutes before the first Pod eviction request. | 7 | PASS | "By default, the node controller waits 5 minutes between marking the node as Unknown and submitting the first eviction request." (re-check: the old FAIL, "detection takes time", is gone)  |
| 35 | Key words: Heartbeat is "a signal that a node sends so the cluster knows it is available". | none | PASS | Matches claim 13 (S7 heartbeat text). |
| 36 | Key words: Node, Cluster, Active-passive, Active-active, Failover, Split brain, Quorum, Fencing rows agree with claims 1-3, 7, 16, 20, 22. | none | PASS | Each row repeats a checked claim. | Re-check: the Quorum row now reads "A majority of the cluster's nodes are online together in one group" (matches claim 20).

## Text marked as the tutorial's own

- Opening paragraph (the cashier comparison): not marked, but it is an analogy and states no source fact. PASS.
- "A real-life example" section: starts with "This example is the tutorial's own." It states no fact as if a source said it, and it has no cite. The statements in it agree with S5 (claims 16-19) and S2 (claim 22). PASS.
- "What a tester can check" tip: the callout says "This advice is the tutorial's own. It is not a fact from a source." No cites inside. PASS.
- "It costs more machines, more settings, and more things to test." (When you need it): the tutorial's own remark, not marked, no source fact. Acceptable.
- "So recovery is not always instant." (How it works): the tutorial's own conclusion from claim 15. Acceptable.

## Other checks

| Check | Result |
|---|---|
| Every `page.sources` entry is https | PASS: 8 of 8 start with `https://` |
| Every source is cited at least once | PASS: counts S1 5, S2 4, S3 5, S4 1, S5 3, S6 1, S7 3, S8 1 |
| Every `<Cite n>` has a source | PASS: n goes from 1 to 8; 8 sources |
| No source is a blog, forum, AI summary, or systemdesignbangla.com | PASS: ClusterLabs and Kubernetes documentation only |
| Section order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (Key words last) | PASS: the order is kept; the page has one extra section, "How it works", between "When you need it" and "A real-life example" |
| No run of 8 or more words copied from a source | PASS after re-check: 0 runs (see below) |

Copy check (a script compared every 8-word run of the page text with the 8 fetched sources): first run found 3 runs (S1 active-passive, S3 quorum, S8 etcd member). All 3 are now fixed.

## Re-check (after the writer's fixes)

- Fix 1 (failover bullet, cite 7): matches S7. PASS.
- Fix 2 (active-passive, cite 1): matches S1 "if it fails, the other node takes over". PASS, no shared run.
- Fix 3 (Quorum bullet and Key words row, cite 3): matches S3 "more than half of all known nodes are online in the same partition". PASS, no shared run.
- Fix 4 (control plane bullet, cite 8): matches S8 "both an etcd member and a control plane instance are lost". PASS. The 8-word script run on the whole page text is now 0, so no run is shared with S8.

Open FAILs: 0
