import { test } from "node:test";
import assert from "node:assert/strict";
import { AGENT_MEMORY } from "../lib/agent-memory/topics.ts";
import { AI_AGENTS } from "../lib/ai-agents/topics.ts";
import { AI_CONCEPTS } from "../lib/ai-concepts/topics.ts";
import { AI_ENGINEERING } from "../lib/ai-engineering/topics.ts";
import { AI_ML_TESTING } from "../lib/ai-ml-testing/topics.ts";
import { AI_SKILLS } from "../lib/ai-skills/topics.ts";
import { ARCHITECTURE } from "../lib/architecture/topics.ts";
import { REELS_UI_BN } from "../lib/bn/reels.ts";
import { COURSE } from "../lib/course/topics.ts";
import { DEVOPS } from "../lib/devops/topics.ts";
import { CHAPTERS } from "../lib/fundamentals/chapters.ts";
import { HARNESS } from "../lib/harness/topics.ts";
import { STAGES } from "../lib/linux/stages.ts";
import { REELS, reelsFor } from "../lib/reels/index.ts";
import {
  MAX_REEL_SECONDS,
  REEL_KINDS,
  REEL_LANGS,
  REELS_SHOWN,
  embedUrl,
  formatDuration,
  isReelId,
  isoDuration,
  normalizeTitle,
  reelUrl,
  splitShelf,
} from "../lib/reels/reels.ts";
import { REELS_UI } from "../lib/reels/ui.ts";
import { SHORTS_CONTROL_ID, isThrottled, oembedProblems, oembedStatusProblem, shortsControlProblem, shortsProblem } from "../lib/reels/verify.ts";
import { SYSTEM_DESIGN } from "../lib/system-design/cases.ts";

/** The topic pages of a module that is made of pages. The practice page (`kind` is not "topic") has no reels. */
const topicSlugs = (module: { pages: readonly { slug: string; kind: string }[] }): readonly string[] =>
  module.pages.filter((p) => p.kind === "topic").map((p) => p.slug);

/**
 * Each module that has reels, with the slugs of the pages that show them. The Linux stages and the
 * Fundamentals chapters are not made of topic pages, so their slugs come from their own lists.
 */
const PAGES: Readonly<Record<string, readonly string[]>> = {
  architecture: topicSlugs(ARCHITECTURE),
  "system-design": topicSlugs(SYSTEM_DESIGN),
  "ai-engineering": topicSlugs(AI_ENGINEERING),
  harness: topicSlugs(HARNESS),
  "ai-skills": topicSlugs(AI_SKILLS),
  "ai-concepts": topicSlugs(AI_CONCEPTS),
  "agent-memory": topicSlugs(AGENT_MEMORY),
  "ai-agents": topicSlugs(AI_AGENTS),
  "ai-ml-testing": topicSlugs(AI_ML_TESTING),
  linux: STAGES.map((stage) => stage.slug),
  fundamentals: CHAPTERS.map((chapter) => chapter.slug),
  course: topicSlugs(COURSE),
  devops: topicSlugs(DEVOPS),
};
/** Every page that shows reels has at least this many, and no more than the maximum, so no page is a wall of videos. */
const MIN_PER_PAGE = 2;
const MAX_PER_PAGE = 4;
/** One creator has at most this many reels on one page, so a page does not lean on one voice. */
const MAX_PER_CHANNEL = 2;
/**
 * A shelf is a module made of one creator's Shorts, on purpose (DevOps & Cloud: KodeKloud). Its pages are not held to 4 reels or to
 * 2 reels from one channel; they get a larger limit, and the whole module must have one channel. Naming a module here is a decision.
 */
const SHELF_MODULES: ReadonlySet<string> = new Set(["devops"]);
const MAX_PER_SHELF_PAGE = 20;
/** A sparse module shows reels only on the pages that are keys in its reels file: a page with no fitting clip has no entry and no block. */
const SPARSE_MODULES: ReadonlySet<string> = new Set(["course"]);
/**
 * The pages that truly have fewer than 2 reels, with the exact count. A page is here only when no clip that
 * passed the review fits what the page teaches: the block shows 1 reel, or nothing. The count is asserted in
 * both directions, so an entry must be deleted as soon as the page has 2 reels.
 */
const THIN_PAGES: Readonly<Record<string, number>> = {
  "ai-engineering/reliability-engineering": 1,
  "ai-engineering/production-monitoring": 1,
  "ai-skills/meeting-intelligence": 1,
  "ai-skills/ai-video": 0,
  "ai-skills/voice-and-avatars": 0,
  "ai-agents/trigger": 1,
  "ai-ml-testing/deepeval-pytest": 1,
  "ai-ml-testing/chatbot-ui-testing": 1,
  "ai-ml-testing/ai-quality-metrics": 1,
  "ai-ml-testing/capstone-project-setup": 1,
  "ai-ml-testing/capstone-test-pipeline": 0,
  "ai-ml-testing/capstone-cicd-presentation": 1,
  "ai-ml-testing/virtual-assistant-testing": 0,
  "ai-ml-testing/agent-decision-testing": 1,
  "ai-ml-testing/cicd-eval-pipelines": 0,
  "ai-ml-testing/advanced-capstone-test-suite": 0,
  "ai-ml-testing/advanced-capstone-presentation": 1,
  "course/ip": 1,
  "course/long-polling-ws-sse": 1,
  "course/pub-sub": 1,
  "course/rest-graphql-grpc": 1,
  "course/sql-vs-nosql": 1,
  "course/sla-slo-sli": 1,
};

const all = Object.entries(REELS).flatMap(([moduleId, pages]) =>
  Object.entries(pages ?? {}).flatMap(([slug, reels]) => reels.map((reel) => ({ where: `${moduleId}/${slug}`, reel }))),
);

test("the modules with reels are the 13 listed, every key is a page of its module, and every page has an entry (a sparse module needs none)", () => {
  assert.deepEqual(Object.keys(REELS).sort(), Object.keys(PAGES).sort());
  for (const [moduleId, pages] of Object.entries(REELS)) {
    const slugs = PAGES[moduleId];
    for (const slug of Object.keys(pages ?? {})) {
      assert.ok(slugs.includes(slug), `${moduleId}/${slug} is not a page of ${moduleId}`);
    }
    if (SPARSE_MODULES.has(moduleId)) continue;
    for (const slug of slugs) {
      assert.ok(slug in (pages ?? {}), `${moduleId}/${slug} has no entry in its reels file (use [] for no reels)`);
    }
  }
});

test("every page has between 2 and 4 reels, except the listed thin pages, which have exactly the count that is listed", () => {
  const known = new Set<string>();
  for (const [moduleId, slugs] of Object.entries(PAGES)) {
    for (const slug of slugs) {
      const where = `${moduleId}/${slug}`;
      known.add(where);
      if (SPARSE_MODULES.has(moduleId) && !(slug in (REELS[moduleId as keyof typeof REELS] ?? {}))) continue; // no entry, no block
      const count = reelsFor(moduleId, slug).length;
      if (where in THIN_PAGES) {
        assert.ok(THIN_PAGES[where] < MIN_PER_PAGE, `${where} is listed as thin with ${THIN_PAGES[where]} reels`);
        assert.equal(count, THIN_PAGES[where], `${where} is listed as thin with ${THIN_PAGES[where]} reels but has ${count}: update the list`);
      } else {
        const max = SHELF_MODULES.has(moduleId) ? MAX_PER_SHELF_PAGE : MAX_PER_PAGE;
        assert.ok(count >= MIN_PER_PAGE && count <= max, `${where} has ${count} reels`);
      }
    }
  }
  for (const where of Object.keys(THIN_PAGES)) assert.ok(known.has(where), `${where} in THIN_PAGES is not a page`);
});

test("each reel has a valid id, a clean title, a channel, a known kind and language, and 5 to 180 seconds", () => {
  assert.ok(all.length > 0);
  for (const { where, reel } of all) {
    assert.ok(isReelId(reel.id), `${where}: bad id ${reel.id}`);
    assert.ok(reel.title.length > 0 && reel.title.length <= 110, `${where}: title length of ${reel.id}`);
    assert.equal(reel.title, reel.title.trim(), `${where}: title of ${reel.id} has outer space`);
    assert.doesNotMatch(reel.title, /#/, `${where}: title of ${reel.id} has a hashtag`);
    assert.ok(reel.channel.trim().length > 0, `${where}: channel of ${reel.id}`);
    assert.ok(REEL_KINDS.includes(reel.kind), `${where}: kind of ${reel.id}`);
    assert.ok(REEL_LANGS.includes(reel.lang), `${where}: lang of ${reel.id}`);
    assert.ok(Number.isInteger(reel.seconds) && reel.seconds >= 5 && reel.seconds <= MAX_REEL_SECONDS, `${where}: seconds of ${reel.id}`);
  }
});

test("a reel is listed once on the whole site", () => {
  const seen = new Map<string, string>();
  for (const { where, reel } of all) {
    assert.ok(!seen.has(reel.id), `${reel.id} is on ${seen.get(reel.id)} and on ${where}`);
    seen.set(reel.id, where);
  }
});

test("no channel has more than 2 reels on one page, except on a shelf", () => {
  for (const [moduleId, pages] of Object.entries(REELS)) {
    if (SHELF_MODULES.has(moduleId)) continue;
    for (const [slug, reels] of Object.entries(pages ?? {})) {
      const counts = new Map<string, number>();
      for (const reel of reels) counts.set(reel.channel, (counts.get(reel.channel) ?? 0) + 1);
      for (const [channel, count] of counts) {
        assert.ok(count <= MAX_PER_CHANNEL, `${moduleId}/${slug} has ${count} reels from ${channel}`);
      }
    }
  }
});

test("a shelf is one creator's Shorts: the shelf modules are the listed ones, and every reel of a shelf has the same channel", () => {
  assert.deepEqual([...SHELF_MODULES], ["devops"]);
  for (const moduleId of SHELF_MODULES) {
    const pages = (REELS as Record<string, Record<string, readonly { channel: string }[]> | undefined>)[moduleId] ?? {};
    const channels = new Set(Object.values(pages).flatMap((reels) => reels.map((reel) => reel.channel)));
    assert.equal(channels.size, 1, `${moduleId} has reels from ${[...channels].join(", ")}`);
  }
});

test("a long shelf shows four reels and keeps the rest behind a button; a page of an ordinary module is never cut", () => {
  const ids = (n: number) => Array.from({ length: n }, (_, i) => i);
  assert.equal(REELS_SHOWN, MAX_PER_PAGE, "an ordinary page has at most as many reels as show at once");
  for (const n of [0, 2, 4, 5]) assert.deepEqual(splitShelf(ids(n)).more, [], `${n} reels are all shown (one left over is not hidden)`);
  const long = splitShelf(ids(14));
  assert.equal(long.shown.length, REELS_SHOWN);
  assert.equal(long.more.length, 10);
  assert.deepEqual([...long.shown, ...long.more], ids(14), "no reel is lost, and the order stays");
  for (const [moduleId, pages] of Object.entries(REELS)) {
    if (SHELF_MODULES.has(moduleId)) continue;
    for (const [slug, reels] of Object.entries(pages ?? {})) assert.equal(splitShelf(reels).more.length, 0, `${moduleId}/${slug} would be cut`);
  }
});

test("the 'show more' label carries the number of hidden reels, in both languages", () => {
  assert.match(REELS_UI.showMore(10), /\b10\b/);
  assert.match(REELS_UI_BN.showMore(10), /10/);
  assert.match(REELS_UI_BN.showMore(10), /[\u0980-\u09FF]/);
  assert.match(REELS_UI_BN.showFewer, /[\u0980-\u09FF]/);
});

test("reelsFor gives the reels of a page, and nothing for the practice page, an unknown page, or an unknown module", () => {
  assert.equal(reelsFor("architecture", "load-balancer"), REELS.architecture?.["load-balancer"]);
  assert.deepEqual(reelsFor("architecture", "practice"), []);
  assert.deepEqual(reelsFor("architecture", "nope"), []);
  assert.deepEqual(reelsFor("course", "caching"), []);
});

test("the player is on youtube-nocookie.com over https, and the link opens the Shorts view", () => {
  const url = new URL(embedUrl("la8tzEyg-hY"));
  assert.equal(url.protocol, "https:");
  assert.equal(url.hostname, "www.youtube-nocookie.com");
  assert.equal(url.pathname, "/embed/la8tzEyg-hY");
  assert.equal(url.searchParams.get("autoplay"), "1");
  assert.equal(reelUrl("la8tzEyg-hY"), "https://www.youtube.com/shorts/la8tzEyg-hY");
});

test("isReelId accepts 11 URL-safe characters only", () => {
  assert.ok(isReelId("la8tzEyg-hY"));
  assert.ok(isReelId("a_b-c_d-e_f"));
  for (const bad of ["", "short", "twelve_chars", "la8tzEyg hY", "la8tzEyg/hY", "la8tzEyg-h!"]) assert.ok(!isReelId(bad), bad);
});

test("formatDuration and isoDuration", () => {
  assert.equal(formatDuration(5), "0:05");
  assert.equal(formatDuration(75), "1:15");
  assert.equal(formatDuration(180), "3:00");
  assert.equal(isoDuration(5), "PT5S");
  assert.equal(isoDuration(60), "PT1M");
  assert.equal(isoDuration(75), "PT1M15S");
});

test("normalizeTitle ignores hashtags, emoji, punctuation, and case, and keeps Bangla letters", () => {
  assert.equal(normalizeTitle("Why is Kafka FAST? Part 1 #shorts #kafka"), "why is kafka fast part 1");
  assert.equal(normalizeTitle("1 Million Requests?! 😳 | Load Balancing Explained"), "1 million requests load balancing explained");
  assert.equal(normalizeTitle("  Load   Balancer — কী? "), "load balancer কী");
  assert.equal(normalizeTitle("সিস্টেমের ট্রাফিক পুলিশ!"), "সিস্টেমের ট্রাফিক পুলিশ");
  // Bangla য় has two spellings (U+09DF, and U+09AF + U+09BC). YouTube's player and its oEmbed
  // answer give the two spellings for the same title, so the check must treat them as equal.
  // Escapes, not literals, so an editor cannot turn one spelling into the other.
  const oneCode = "\u09AC\u09BE\u0982\u09B2\u09BE\u09DF";
  const twoCodes = "\u09AC\u09BE\u0982\u09B2\u09BE\u09AF\u09BC";
  assert.notEqual(oneCode, twoCodes);
  assert.equal(normalizeTitle(oneCode), normalizeTitle(twoCodes));
  // An emoji brings an invisible variation selector (U+FE0F). It is a Unicode mark, like the Bangla
  // vowel signs that we keep, so it must be removed on purpose. The live check found this on a real title.
  assert.equal(
    normalizeTitle("Explained in 30 Seconds \u2601\uFE0F | AWS Part 2"),
    normalizeTitle("Explained in 30 Seconds | AWS Part 2"),
  );
  assert.equal(normalizeTitle("a\u200Db"), "ab"); // a zero width joiner does not split a word
});

test("the live check reads YouTube's answers the right way", () => {
  const reel = { id: "la8tzEyg-hY", title: "Why is Kafka so Fast? Part 2", channel: "ByteByteGo", kind: "explainer", lang: "en", seconds: 104 } as const;
  assert.equal(oembedStatusProblem(200), null);
  assert.match(oembedStatusProblem(401) ?? "", /embedding/);
  assert.match(oembedStatusProblem(404) ?? "", /gone or private/);
  assert.match(oembedStatusProblem(503) ?? "", /503/);
  assert.deepEqual(oembedProblems(reel, { title: "Why is Kafka so Fast? Part 2 #shorts", author_name: "ByteByteGo" }), []);
  assert.match(oembedProblems(reel, { title: "Something else", author_name: "ByteByteGo" })[0], /title changed/);
  assert.match(oembedProblems(reel, { title: reel.title, author_name: "Other" })[0], /channel changed/);
  assert.equal(shortsProblem(200), null);
  assert.match(shortsProblem(303) ?? "", /normal video/);
  assert.match(shortsProblem(500) ?? "", /500/);
});

test("the Shorts test is only trusted if a long video that is not a Short redirects", () => {
  assert.ok(isReelId(SHORTS_CONTROL_ID), "the control must be a valid video id");
  assert.ok(!all.some(({ reel }) => reel.id === SHORTS_CONTROL_ID), "the control is not one of the reels");
  assert.equal(shortsControlProblem(303), null);
  assert.equal(shortsControlProblem(301), null);
  // YouTube answering 200 for a normal video means that every Short would "pass"
  assert.match(shortsControlProblem(200) ?? "", /cannot tell a Short from a normal video/);
  assert.match(shortsControlProblem(503) ?? "", /503/);
});

test("only HTTP 429 counts as YouTube asking us to slow down", () => {
  assert.equal(isThrottled(429), true);
  for (const status of [200, 303, 401, 403, 404, 500, 503]) assert.equal(isThrottled(status), false, String(status));
});

test("the UI has an English and a Bangla label for every kind and language", () => {
  for (const kind of REEL_KINDS) {
    assert.ok(REELS_UI.kinds[kind], kind);
    assert.ok(REELS_UI_BN.kinds[kind], kind);
  }
  for (const lang of REEL_LANGS) {
    assert.ok(REELS_UI.langs[lang], lang);
    assert.ok(REELS_UI_BN.langs[lang], lang);
  }
  assert.deepEqual(Object.keys(REELS_UI.kinds).sort(), [...REEL_KINDS].sort());
});
