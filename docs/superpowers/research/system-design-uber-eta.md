# Research notes: How Uber Computes ETA

Page: `content/system-design/uber-eta.mdx`

## Sources

| # | Title | Publisher | URL | Accessed |
|---|---|---|---|---|
| S1 | How Uber Computes ETA at Half a Million Requests per Second | The System Design Newsletter (Neo Kim) | https://newsletter.systemdesign.one/p/uber-eta | 2026-10-20 |
| S2 | DeepETA: How Uber Predicts Arrival Times Using Deep Learning | Uber Engineering Blog | https://www.uber.com/blog/deepeta-how-uber-predicts-arrival-times/ | 2026-10-20 |

S1 is page cite 1. S2 is page cite 2.

Notes:

- S1 is free in full, but it is short (about 700 words of content). S1 lists S2 in its references (as the `en-DE` locale URL). S2 adds the machine learning layer and the serving path (uRoute, Michelangelo).
- S1 does not say when its routing numbers were true. S2 does not give a requests-per-second number. The page cites the "half a million requests per second" figure to S1 only.
- The big-picture diagram joins the S1 parts (graph, traffic, map matching) and the S2 serving path (uRoute, routing engine, Michelangelo). The arrow from map matching to "positions on real roads" is from S1. The page does not claim how map matching output feeds the routing engine.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | ETA is the time to travel from A to B. | S1 | "The time estimated to travel from point A to B is called the Expected Time of Arrival (ETA)." |
| 2 | Uber computes ETA in four scenarios: eyeball, dispatch, pick up, on-trip. | S1 | "Uber computes ETA in 4 scenarios:" / "Eyeball: when the rider enters a destination in the app" / "On-trip: to provide live updates on time to reach the destination" |
| 3 | Uber uses ETAs for fares, pickup times, matching, and deliveries. | S2 | "We use ETAs to calculate fares, estimate pickup times, match riders to drivers, plan deliveries, and more." |
| 4 | One trip takes about 1,000 ETA requests. | S1 | "A single trip usually takes around 1000 ETA requests." |
| 5 | More than 18 million trips are completed daily. | S1 | "Also more than 18 million Uber trips are completed daily." |
| 6 | The approach scales to half a million requests per second. | S1 | "The current approach allowed them to scale to half a million requests per second." |
| 7 | The route is not a straight line; it follows streets and highways. | S1 | "Because the distance between the source and destination is not a straight line." / "Instead it consists of complex street networks and highways." |
| 8 | Riders avoid future trips after a bad ETA; it could cost billions. | S1 | "A rider is likely to avoid future trips if the actual trip time is higher than ETA." / "a bad ETA could cost them billions of USD in loss." |
| 9 | Requests go through uRoute, which calls the routing engine, then Michelangelo online prediction for DeepETA. | S2 | "The uRoute service serves as a frontend for all routing lookups. It makes requests to the routing engine to produce route-lines and ETAs." |
| 10 | uRoute sends the ETA and features to the Michelangelo online prediction service. | S2 | "It uses this ETA and other model features to make requests to the Michelangelo Online prediction service to get predictions from the DeepETA model." |
| 11 | Map matching maps raw GPS to road segments and improves ETA. | S1 | "Map matching works by mapping raw GPS signals to actual road segments." / "So they do map matching to find the best ETA." |
| 12 | Intersections are nodes; road segments are directed edges. | S1 | "Every road intersection is modeled as a node." / "While every road segment is modeled as a directed edge." |
| 13 | ETA becomes a shortest-path problem in a directed weighted graph. | S1 | "So computing ETA becomes finding the shortest path in a directed weighted graph." |
| 14 | Dijkstra finds shortest paths; its time is O(n log n), n = intersections. | S1 | "But the time complexity of Dijkstra’s algorithm is O(n logn). And n is the number of road intersections or nodes in the graph." |
| 15 | The Bay Area has half a million intersections; Dijkstra is not enough. | S1 | "San Francisco Bay Area alone has half a million road intersections. So Dijkstra’s algorithm is not enough at Uber's scale." |
| 16 | They partitioned the graph and precomputed the best path in each partition. | S1 | "So they partitioned the graph. And then precomputed the best path within each partition." |
| 17 | Only partition boundaries are needed to find the best path. | S1 | "Thus interacting with boundaries of graph partitions is enough to find the best path." |
| 18 | Circle analogy: area pi r squared vs perimeter 2 pi r. | S1 | "So time complexity would be the area of the circle: pi * r^2" / "So time complexity would be the perimeter of the circle: 2 * pi * r" |
| 19 | Bay Area work drops from 500 thousand to 700. | S1 | "the time complexity to find the best path in the San Francisco Bay Area gets reduced from 500 Thousand to 700." |
| 20 | Traffic depends on time of day, weather, and number of vehicles. | S1 | "While traffic is a function of the time of the day, weather, and number of vehicles on the road." |
| 21 | Traffic populates edge weights. | S1 | "They used traffic information to populate the edge weights of the graph." |
| 22 | Historical and real-time speeds are combined. | S1 | "they combined aggregated historical speed information with real-time speed information." |
| 23 | The routing engine uses map data and real-time traffic and sums segment times on the best path. | S2 | "a routing engine that uses map data and real-time traffic measurements to predict an ETA as a sum of segment-wise traversal times" |
| 24 | GPS can be noisy and sparse, worse in tunnels. | S1 | "GPS signals can get noisy and sparse especially when the vehicle enters a tunnel." |
| 25 | Multipath: buildings reflect the signal. | S1 | "The multipath effect occurs when buildings reflect the GPS signal." |
| 26 | Poor GPS lowers ETA accuracy. | S1 | "A poor GPS signal decreases the ETA accuracy." |
| 27 | Kalman filter for map matching; uses new and old information. | S1 | "They use the Kalman filter for map matching." / "The new and old information is taken into consideration for guessing." |
| 28 | Viterbi finds the most probable road segments; dynamic programming. | S1 | "they use the Viterbi algorithm to find the most probable road segments. It's a dynamic programming approach." |
| 29 | A road graph cannot capture all conditions; the route may differ. | S2 | "a road graph is just a model, and it can’t perfectly capture conditions on the ground." / "we may not know which route a particular rider and driver will choose" |
| 30 | ML predicts the residual between the routing ETA and real outcomes; called ETA post-processing; DeepETA is one. | S2 | "We then use machine learning to predict the residual between the routing engine ETA and real-world observed outcomes." / "DeepETA is an example of a post-processing model." |
| 31 | Inputs: origin, destination, time, real-time traffic, request type. | S2 | "such as the origin, destination and time of the request, as well information about real-time traffic and the nature of the request" |
| 32 | The model must answer within a few milliseconds. | S2 | "Latency: The model must return an ETA within a few milliseconds at most." |
| 33 | It is the highest-QPS model at Uber. | S2 | "This post-processing model is the highest QPS (queries per second) model at Uber." |
| 34 | XGBoost gradient-boosted trees were used before, until growth became untenable. | S2 | "For several years, Uber used gradient-boosted decision tree ensembles to refine ETA predictions." / "increasing the dataset and model size using XGBoost became untenable." |
| 35 | The full transformer was too slow; they chose the linear transformer. | S2 | "it was too slow to meet the latency requirements for online real-time serving." / "After experimentation, we chose the linear transformer" |
| 36 | Hundreds of millions of parameters; each prediction touches about 0.25 %. | S2 | "While the model has hundreds of millions of parameters, any one prediction touches only a tiny fraction of them, roughly 0.25%." |
| 37 | They tested 7 neural network architectures. | S2 | "The DeepETA team tested and tuned 7 different neural network architectures" |
| 38 | Asymmetric Huber loss; omega controls the cost of under- vs over-prediction. | S2 | "DeepETA uses a parameterized loss function, asymmetric Huber loss" / "By varying omega, you can control the relative cost of underprediction vs overprediction" |
| 39 | Trained and deployed on Michelangelo; periodic retraining. | S2 | "Uber’s ML platform – Michelangelo [15] to train and deploy the model." / "Periodic auto retraining workflows are set up to retrain and validate the model." |

## Copy check

`python3 scripts/linux_overlap.py content/system-design/uber-eta.mdx <SCRATCH>/sd-raw/uber-eta` read 2 files (`article.txt`, `deepeta.txt`). The first run found 1 run ("the shortest path in a directed weighted graph"). I reworded the sentence. The second run found 0 runs (exit 0).
