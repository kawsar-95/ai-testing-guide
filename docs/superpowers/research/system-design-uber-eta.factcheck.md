# Fact-check: How Uber Computes ETA (round 1, 2026-10-20)

I read S1 (the newsletter article, `sd-raw/uber-eta/article.txt`) and S2 (the Uber Engineering blog post on DeepETA, `sd-raw/uber-eta/deepeta.txt`). I checked each cited sentence and each uncited factual sentence. I fixed 2 FAILs. The edge-weight sentence had no cite, so I added cite 2. The omega sentence said "a late guess against an early one", which does not match the source term "underprediction vs overprediction". It now says "a guess that is too low against a guess that is too high". The analogies (including the "10 minutes at midnight" example) and the "Tutorial advice" callout need no source. The copy check (`linux_overlap.py`) read 2 files and found 0 runs (exit 0).

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | The problem in plain words | ETA = time to travel from A to B | 1 | PASS | "The time estimated to travel from point A to B is called the Expected Time of Arrival (ETA)." |
| 2 | The problem in plain words (table) | Four situations: eyeball, dispatch, pick up, on-trip | 1 | PASS | "Dispatch: to find a car to pick up the rider in the shortest waiting time" / "On-trip: to provide live updates on time to reach the destination" |
| 3 | The problem in plain words | ETAs used for fares, matching, deliveries | 2 | PASS | "We use ETAs to calculate fares, estimate pickup times, match riders to drivers, plan deliveries, and more." |
| 4 | The problem in plain words | About 1,000 ETA requests per trip | 1 | PASS | "A single trip usually takes around 1000 ETA requests." |
| 5 | The problem in plain words | 18 million trips a day; half a million requests per second | 1 | PASS | "more than 18 million Uber trips are completed daily." / "allowed them to scale to half a million requests per second." |
| 6 | The problem in plain words | A trip is not a straight line; streets and highways | 1 | PASS | "the distance between the source and destination is not a straight line. Instead it consists of complex street networks and highways." |
| 7 | The problem in plain words | Rider may not book again; bad ETA could cost billions | 1 | PASS | "A rider is likely to avoid future trips if the actual trip time is higher than ETA." / "a bad ETA could cost them billions of USD in loss." |
| 8 | The big picture | uRoute front door; routing engine; ETA + features to prediction service with DeepETA | 2 | PASS | "The uRoute service serves as a frontend for all routing lookups." / "to make requests to the Michelangelo Online prediction service to get predictions from the DeepETA model." |
| 9 | The big picture | Map matching makes ETA more accurate | 1 | PASS | "A poor GPS signal decreases the ETA accuracy." / "So they do map matching to find the best ETA." |
| 10 | The map as a graph | Intersection = node; road segment = directed edge | 1 | PASS | "Every road intersection is modeled as a node. While every road segment is modeled as a directed edge." |
| 11 | The map as a graph | Edge weight = time to drive the segment | none | FAIL→fixed | Was uncited. Added cite 2. Quote: "road segments represented by weighted edges in a graph" / "add up the weights to derive an ETA." |
| 12 | The map as a graph | ETA becomes a shortest-path graph problem | 1 | PASS | "computing ETA becomes finding the shortest path in a directed weighted graph." |
| 13 | The map as a graph | Dijkstra is O(n log n), n = intersections | 1 | PASS | "the time complexity of Dijkstra's algorithm is O(n logn). And n is the number of road intersections" |
| 14 | The map as a graph | Bay Area about half a million intersections; Dijkstra too slow | 1 | PASS | "San Francisco Bay Area alone has half a million road intersections. So Dijkstra's algorithm is not enough at Uber's scale." |
| 15 | Cut the map into pieces | Partition graph; precompute best path per partition | 1 | PASS | "So they partitioned the graph. And then precomputed the best path within each partition." |
| 16 | Cut the map into pieces | Search visits only partition border nodes | 1 | PASS | "interacting with boundaries of graph partitions is enough to find the best path." |
| 17 | Cut the map into pieces | Circle: area pi r squared vs perimeter 2 pi r | 1 | PASS | "time complexity would be the area of the circle: pi * r^2" / "the perimeter of the circle: 2 * pi * r" |
| 18 | Cut the map into pieces | Bay Area: about 500,000 to about 700 | 1 | PASS | "gets reduced from 500 Thousand to 700." |
| 19 | Traffic on each road | Traffic depends on time of day, weather, number of cars | 1 | PASS | "traffic is a function of the time of the day, weather, and number of vehicles on the road." |
| 20 | Traffic on each road | Traffic goes into edge weights | 1 | PASS | "They used traffic information to populate the edge weights of the graph." |
| 21 | Traffic on each road | Historical + real-time speeds, because more data helps | 1 | PASS | "they combined aggregated historical speed information with real-time speed information." |
| 22 | Traffic on each road | Routing engine: map data, live traffic, sum of segment times | 2 | PASS | "a routing engine that uses map data and real-time traffic measurements to predict an ETA as a sum of segment-wise traversal times" |
| 23 | Cleaning up GPS with map matching | GPS noisy and sparse, worse in a tunnel | 1 | PASS | "GPS signals can get noisy and sparse especially when the vehicle enters a tunnel." |
| 24 | Cleaning up GPS with map matching | Buildings reflect the signal: multipath effect | 1 | PASS | "The multipath effect occurs when buildings reflect the GPS signal." |
| 25 | Cleaning up GPS with map matching | Bad GPS makes ETA worse | 1 | PASS | "A poor GPS signal decreases the ETA accuracy." |
| 26 | Cleaning up GPS with map matching | Map matching puts GPS points on road segments | 1 | PASS | "Map matching works by mapping raw GPS signals to actual road segments." |
| 27 | Cleaning up GPS with map matching | Kalman filter: best guess from new and old information | 1 | PASS | "They use the Kalman filter for map matching." / "The new and old information is taken into consideration for guessing." |
| 28 | Cleaning up GPS with map matching | Viterbi: most likely road segments, dynamic programming | 1 | PASS | "they use the Viterbi algorithm to find the most probable road segments. It's a dynamic programming approach." |
| 29 | A learning model fixes the rest | Road graph is only a model; route choice unknown | 2 | PASS | "a road graph is just a model, and it can't perfectly capture conditions on the ground." / "we may not know which route a particular rider and driver will choose" |
| 30 | A learning model fixes the rest | ML predicts the residual between engine ETA and real outcome | 2 | PASS | "We then use machine learning to predict the residual between the routing engine ETA and real-world observed outcomes." |
| 31 | A learning model fixes the rest | ETA post-processing; DeepETA is one such model | 2 | PASS | "We call this hybrid approach ETA post-processing, and DeepETA is an example of a post-processing model." |
| 32 | A learning model fixes the rest (table) | Inputs: origin, destination, time, traffic, request type | 2 | PASS | "such as the origin, destination and time of the request, as well information about real-time traffic and the nature of the request" |
| 33 | A learning model fixes the rest (table) | Answer within a few milliseconds | 2 | PASS | "The model must return an ETA within a few milliseconds at most." |
| 34 | A learning model fixes the rest (table) | Highest-QPS model at Uber | 2 | PASS | "This post-processing model is the highest QPS (queries per second) model at Uber." |
| 35 | A learning model fixes the rest (table) | Old model: gradient-boosted trees in XGBoost, too big to grow | 2 | PASS | "Uber used gradient-boosted decision tree ensembles" / "increasing the dataset and model size using XGBoost became untenable." |
| 36 | A learning model fixes the rest (table) | Linear transformer, because a full transformer was too slow | 2 | PASS | "it was too slow to meet the latency requirements" / "we chose the linear transformer" |
| 37 | A learning model fixes the rest (table) | Hundreds of millions of parameters; about 0.25 % per prediction | 2 | PASS | "While the model has hundreds of millions of parameters, any one prediction touches only a tiny fraction of them, roughly 0.25%." |
| 38 | A learning model fixes the rest | Seven neural network types tested | 2 | PASS | "The DeepETA team tested and tuned 7 different neural network architectures" |
| 39 | A learning model fixes the rest | Asymmetric Huber loss; omega sets cost of one error direction against the other | 2 | FAIL→fixed | Was "controls the cost of a late guess against an early one" (unclear, and not the source term). Now "controls the cost of a guess that is too low against a guess that is too high". Quote: "By varying omega, you can control the relative cost of underprediction vs overprediction" |
| 40 | A learning model fixes the rest | Useful when late is worse than early | 2 | PASS | "which is useful in situations where being a minute late is worse than being a minute early." |
| 41 | A learning model fixes the rest | Trained and served on Michelangelo; periodic retraining | 2 | PASS | "Uber's ML platform – Michelangelo [15] to train and deploy the model." / "Periodic auto retraining workflows are set up" |
| 42 | What a tester can learn | Tip bullets | none | PASS | The callout says "These ideas are the tutorial's own advice." |

Structure checks: 2 sources, both cited (cite 1: 23 times, cite 2: 11 times). All cite numbers are 1 or 2. The `##` headings are unique. The closing `</Callout>` of the tip is at column 0. No `{` or `<` in prose outside code.

Open FAILs: 0
