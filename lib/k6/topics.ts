/**
 * The one ordered list of the k6 Performance Testing module. Every entry is a
 * topic, served at /k6/<slug>/ with its text in content/k6/<slug>.mdx.
 */
import { defineFlatModule, type FlatEntry } from "../modules/flat.ts";
import { K6_UI } from "./ui.ts";

export type K6Slug =
  | "what-is-performance-testing"
  | "performance-test-types"
  | "choosing-a-tool"
  | "what-is-k6"
  | "install-and-first-script"
  | "reading-results"
  | "test-lifecycle"
  | "vus-duration-iterations"
  | "stages-and-checks"
  | "thresholds"
  | "scenarios-and-executors"
  | "tags-and-groups"
  | "api-flows"
  | "env-and-data"
  | "custom-metrics"
  | "reports-and-dashboard"
  | "influxdb-and-grafana"
  | "k6-test-types"
  | "k6-in-ci"
  | "case-study";

const parts = [
  { num: 1, title: "Performance testing basics" },
  { num: 2, title: "Start with k6" },
  { num: 3, title: "Configure the load" },
  { num: 4, title: "Write real scripts" },
  { num: 5, title: "Results and practice" },
] as const;

const entries: readonly FlatEntry<K6Slug>[] = [
  { slug: "what-is-performance-testing", title: "What Is Performance Testing?", description: "What performance testing is, and why a tester should do it.", kind: "topic", part: 1 },
  { slug: "performance-test-types", title: "Types of Performance Testing", description: "Capacity, load, stress, volume, spike, and soak tests, and when to use each.", kind: "topic", part: 1 },
  { slug: "choosing-a-tool", title: "Choosing a Performance Testing Tool", description: "How to pick a load testing tool by elimination.", kind: "topic", part: 1 },
  { slug: "what-is-k6", title: "What Is k6?", description: "An open-source load testing tool where you write the test as JavaScript.", kind: "topic", part: 2 },
  { slug: "install-and-first-script", title: "Install k6 and Run Your First Script", description: "Install k6, run a small script, and read the first output.", kind: "topic", part: 2 },
  { slug: "reading-results", title: "Reading the k6 Results", description: "The built-in metrics, p95 and p99, and a checklist to read a result.", kind: "topic", part: 2 },
  { slug: "test-lifecycle", title: "The k6 Test Lifecycle", description: "The four stages of a k6 script: init, setup, VU code, and teardown.", kind: "topic", part: 2 },
  { slug: "vus-duration-iterations", title: "VUs, Duration, and Iterations", description: "How virtual users, test time, and iteration count set the load.", kind: "topic", part: 3 },
  { slug: "stages-and-checks", title: "Stages and Checks", description: "Change the load over time with stages, and verify each response with checks.", kind: "topic", part: 3 },
  { slug: "thresholds", title: "Thresholds", description: "Pass or fail a test with limits on the metrics.", kind: "topic", part: 3 },
  { slug: "scenarios-and-executors", title: "Scenarios and Executors", description: "Model a real traffic mix with scenarios and choose an executor for each.", kind: "topic", part: 3 },
  { slug: "tags-and-groups", title: "Tags and Groups", description: "Label requests so that you can split the results.", kind: "topic", part: 4 },
  { slug: "api-flows", title: "POST Requests and API Flows", description: "Log in, then pass the token to the next request.", kind: "topic", part: 4 },
  { slug: "env-and-data", title: "Environment Variables and Test Data", description: "Pass settings with __ENV and load test data from a CSV file.", kind: "topic", part: 4 },
  { slug: "custom-metrics", title: "Custom Metrics", description: "Add your own Counter, Gauge, Rate, and Trend metrics.", kind: "topic", part: 4 },
  { slug: "reports-and-dashboard", title: "Reports and the Web Dashboard", description: "Get a summary, a JSON file, or a web dashboard from a run.", kind: "topic", part: 5 },
  { slug: "influxdb-and-grafana", title: "Live Results with InfluxDB and Grafana", description: "Send k6 metrics to InfluxDB and watch them in a Grafana dashboard.", kind: "topic", part: 5 },
  { slug: "k6-test-types", title: "Smoke, Load, Stress, Spike, Soak, and Breakpoint Tests", description: "One k6 script for each type of test.", kind: "topic", part: 5 },
  { slug: "k6-in-ci", title: "k6 in CI", description: "Run k6 in GitHub Actions and fail the job when a threshold fails.", kind: "topic", part: 5 },
  { slug: "case-study", title: "Case Study: Testing a Money-Transfer API", description: "Walk through a real k6 project: 13 scenarios, thresholds for each API, and a deadlock that the test found.", kind: "topic", part: 5 },
];

export const K6 = defineFlatModule({
  id: "k6",
  label: "k6",
  searchGroup: "k6",
  parts,
  entries,
  progress: { storageKey: "k6-progress" },
  ui: K6_UI,
});
