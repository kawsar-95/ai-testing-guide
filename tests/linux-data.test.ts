import { test } from "node:test";
import assert from "node:assert/strict";
import {
  ALL_TOPIC_IDS,
  LINUX_HOME,
  LINUX_ROUTES,
  LINUX_STORAGE_KEY,
  STAGES,
  formatMinutes,
  getStage,
  studyMinutes,
} from "../lib/linux/stages.ts";

const SLUGS = [
  "shell-basics",
  "files",
  "text-processing",
  "users-permissions",
  "processes",
  "shell-scripting",
  "packages",
  "disks-filesystems",
  "networking",
  "boot-services",
  "troubleshooting",
  "containers",
];

test("there are 12 stages in the order of the table, with unique slugs", () => {
  assert.deepEqual(
    STAGES.map((s) => s.slug),
    SLUGS,
  );
  assert.equal(new Set(STAGES.map((s) => s.slug)).size, 12);
  assert.deepEqual(
    STAGES.map((s) => s.number),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  );
  assert.equal(LINUX_HOME, "/linux/");
  assert.equal(LINUX_STORAGE_KEY, "linux-progress");
});

test("the stage topic counts are 7, 9, 20, 6, 8, 6, 6, 7, 15, 8, 6, 4 and the total is 102", () => {
  assert.deepEqual(
    STAGES.map((s) => s.topics.length),
    [7, 9, 20, 6, 8, 6, 6, 7, 15, 8, 6, 4],
  );
  assert.equal(ALL_TOPIC_IDS.length, 102);
});

test("topic ids are '<stage-slug>-NNN' from 001, unique across all stages", () => {
  for (const stage of STAGES) {
    stage.topics.forEach((topic, i) => {
      assert.equal(topic.id, `${stage.slug}-${String(i + 1).padStart(3, "0")}`);
    });
  }
  assert.equal(new Set(ALL_TOPIC_IDS).size, 102);
  assert.deepEqual(
    ALL_TOPIC_IDS,
    STAGES.flatMap((s) => s.topics.map((t) => t.id)),
  );
});

test("anchors are unique inside a stage", () => {
  for (const stage of STAGES) {
    const anchors = stage.topics.map((t) => t.anchor);
    assert.equal(new Set(anchors).size, anchors.length, stage.slug);
    for (const anchor of anchors) assert.ok(anchor.length > 0);
  }
});

test("getStage finds a slug and returns undefined for an unknown one", () => {
  assert.equal(getStage("networking")?.title, "Networking");
  assert.equal(getStage("networking")?.href, "/linux/networking/");
  assert.equal(getStage("nope"), undefined);
});

test("LINUX_ROUTES is '/linux/' then the 12 stage hrefs, each ending with '/'", () => {
  assert.equal(LINUX_ROUTES.length, 13);
  assert.equal(LINUX_ROUTES[0], "/linux/");
  assert.deepEqual(LINUX_ROUTES.slice(1), SLUGS.map((s) => `/linux/${s}/`));
  for (const route of LINUX_ROUTES) assert.ok(route.endsWith("/"));
});

test("studyMinutes is 20 for each topic and formatMinutes gives '2 h 20 min', '1 h', '45 min'", () => {
  assert.equal(studyMinutes(getStage("shell-basics")!), 140);
  assert.equal(studyMinutes(getStage("containers")!), 80);
  assert.equal(formatMinutes(140), "2 h 20 min");
  assert.equal(formatMinutes(60), "1 h");
  assert.equal(formatMinutes(45), "45 min");
});

test("anchor of 'Stdout, Stdin, and Stderr' is 'stdout-stdin-and-stderr' and of 'TCP/IP' is 'tcpip'", () => {
  const text = getStage("text-processing")!.topics.find((t) => t.title === "Stdout, Stdin, and Stderr");
  assert.equal(text?.anchor, "stdout-stdin-and-stderr");
  const tcp = getStage("networking")!.topics.find((t) => t.title === "TCP/IP");
  assert.equal(tcp?.anchor, "tcpip");
});
