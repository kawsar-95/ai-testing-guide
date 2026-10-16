import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
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
import { outlineFromSource } from "../lib/outline.ts";

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

// The literals below are copied from the "Stage and topic table" of the plan.
// They fail if a title, a description, or the order of the topics changes.
const TABLE: readonly { slug: string; title: string; description: string; topics: readonly string[] }[] = [
  {
    slug: "shell-basics",
    title: "Shell Basics",
    description: "Move around the system, read help, and understand the shell and its paths.",
    topics: ["Shell Basics", "Basic Commands", "Navigation Basics", "Command Help", "Command Path", "Directory Hierarchy", "Environment Variables"],
  },
  {
    slug: "files",
    title: "Working with Files",
    description: "Create, copy, move, edit, link, archive, and compress files.",
    topics: ["Working with Files", "Creating Files and Directories", "Copying and Renaming", "Moving Files and Directories", "Editing Files", "Nano", "Vim", "Soft and Hard Links", "Archiving and Compressing"],
  },
  {
    slug: "text-processing",
    title: "Text Processing",
    description: "Use streams, pipes, and small tools to search and shape text.",
    topics: ["Text Processing", "Stdout, Stdin, and Stderr", "Redirects", "Pipes", "Tee", "grep", "awk", "cut", "sort", "uniq", "wc", "head", "tail", "nl", "paste", "join", "split", "tr", "expand", "unexpand"],
  },
  {
    slug: "users-permissions",
    title: "Users and Permissions",
    description: "Manage users and groups, use root with care, and control access to files.",
    topics: ["User Management", "Users and Groups", "Create, Update, and Delete Users", "Super User", "File Permissions", "Managing Permissions"],
  },
  {
    slug: "processes",
    title: "Processes",
    description: "List, run in the background, signal, and limit processes.",
    topics: ["Process Management", "Listing and Finding Processes", "Background and Foreground Processes", "Killing Processes", "Process Signals", "Process Priorities", "Process Forking", "Ulimits"],
  },
  {
    slug: "shell-scripting",
    title: "Shell Scripting",
    description: "Automate work with variables, conditions, loops, and debugging.",
    topics: ["Shell Programming", "Variables", "Literals", "Conditionals", "Loops", "Debugging"],
  },
  {
    slug: "packages",
    title: "Packages",
    description: "Find, install, update, and remove software with package managers.",
    topics: ["Package Management", "Package Repositories", "Finding and Installing Packages", "Installing, Removing, and Upgrading Packages", "Listing Installed Packages", "Snap"],
  },
  {
    slug: "disks-filesystems",
    title: "Disks and Filesystems",
    description: "Understand disks, filesystems, mounts, swap, and LVM.",
    topics: ["Disks and Filesystems", "Filesystems", "Inodes", "Mounts", "Adding Disks", "Swap", "LVM"],
  },
  {
    slug: "networking",
    title: "Networking",
    description: "Understand the network stack and use the tools that test and protect it.",
    topics: ["Networking", "TCP/IP", "Ethernet, ARP, and RARP", "Subnetting", "IP Routing", "DHCP", "DNS Resolution", "ICMP", "ping", "traceroute", "netstat", "Netfilter", "Packet Analysis", "SSH", "File Transfer"],
  },
  {
    slug: "boot-services",
    title: "Boot and Services",
    description: "See how Linux starts, and manage services with systemd.",
    topics: ["Booting Linux", "Boot Loaders", "Service Management", "Creating Services", "Starting and Stopping Services", "Checking Service Status", "Checking Service Logs", "Running Services"],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description: "Check the health of a server, read the logs, and find the cause of a fault.",
    topics: ["Server Review", "Uptime and Load", "Available Memory and Disk", "System Logs", "Authentication Logs", "Troubleshooting"],
  },
  {
    slug: "containers",
    title: "Containers",
    description: "Learn how containers isolate processes: runtimes, Docker, and cgroups.",
    topics: ["Containerization", "Container Runtime", "Docker", "Cgroups"],
  },
];

test("the stage titles, descriptions, and topic titles match the table in the plan", () => {
  assert.deepEqual(STAGES.map((s) => s.title), TABLE.map((t) => t.title));
  assert.deepEqual(STAGES.map((s) => s.description), TABLE.map((t) => t.description));
  assert.deepEqual(STAGES.map((s) => s.topics.map((t) => t.title)), TABLE.map((t) => t.topics));
  assert.equal(TABLE.flatMap((t) => t.topics).length, 102);
});

const linuxDir = new URL("../content/linux/", import.meta.url);
const readStage = (slug: string) => readFileSync(new URL(`${slug}.mdx`, linuxDir), "utf8");

test("content/linux has exactly one MDX file for each stage", () => {
  assert.ok(existsSync(linuxDir), "content/linux does not exist");
  const files = readdirSync(linuxDir).sort();
  assert.deepEqual(files, SLUGS.map((s) => `${s}.mdx`).sort());
});

test("every stage MDX exports its metadata and its page", () => {
  for (const slug of SLUGS) {
    const source = readStage(slug);
    assert.match(source, /^export const metadata = \{/m, `${slug}.mdx has no "export const metadata"`);
    assert.match(source, /^export const page = \{/m, `${slug}.mdx has no "export const page"`);
  }
});

test("every topic anchor is a ## heading id in its stage MDX, in the order of the data", () => {
  for (const stage of STAGES) {
    const ids = outlineFromSource(readStage(stage.slug))
      .filter((item) => item.level === 2)
      .map((item) => item.id);
    assert.deepEqual(
      ids,
      stage.topics.map((t) => t.anchor),
      stage.slug,
    );
  }
});

test("every ## heading of a stage MDX is a topic of that stage", () => {
  for (const stage of STAGES) {
    const titles = new Set(stage.topics.map((t) => t.title));
    for (const item of outlineFromSource(readStage(stage.slug))) {
      if (item.level !== 2) continue;
      assert.ok(titles.has(item.title), `${stage.slug}: "${item.title}" is not a topic`);
    }
  }
});
