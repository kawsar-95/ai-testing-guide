import { test } from "node:test";
import assert from "node:assert/strict";
import { ARCHITECTURE } from "../lib/architecture/topics.ts";
import { REELS_UI_BN } from "../lib/bn/reels.ts";
import { REELS, reelsFor } from "../lib/reels/index.ts";
import {
  MAX_REEL_SECONDS,
  REEL_KINDS,
  REEL_LANGS,
  embedUrl,
  formatDuration,
  isReelId,
  isoDuration,
  normalizeTitle,
  reelUrl,
} from "../lib/reels/reels.ts";
import { REELS_UI } from "../lib/reels/ui.ts";
import { SHORTS_CONTROL_ID, isThrottled, oembedProblems, oembedStatusProblem, shortsControlProblem, shortsProblem } from "../lib/reels/verify.ts";
import { SYSTEM_DESIGN } from "../lib/system-design/cases.ts";

const MODULES = { architecture: ARCHITECTURE, "system-design": SYSTEM_DESIGN } as const;
/** Every topic page has at least this many reels, and no more than the maximum, so no page is a wall of videos. */
const MIN_PER_PAGE = 2;
const MAX_PER_PAGE = 4;
/** One creator has at most this many reels on one page, so a page does not lean on one voice. */
const MAX_PER_CHANNEL = 2;

const all = Object.entries(REELS).flatMap(([moduleId, pages]) =>
  Object.entries(pages ?? {}).flatMap(([slug, reels]) => reels.map((reel) => ({ where: `${moduleId}/${slug}`, reel }))),
);

test("only Architecture and System Design have reels, and every key is a topic page of its module", () => {
  assert.deepEqual(Object.keys(REELS).sort(), ["architecture", "system-design"]);
  for (const [moduleId, pages] of Object.entries(REELS)) {
    const module = MODULES[moduleId as keyof typeof MODULES];
    for (const slug of Object.keys(pages ?? {})) {
      assert.equal(module.get(slug)?.kind, "topic", `${moduleId}/${slug} is not a topic page`);
    }
  }
});

test("every topic page of Architecture and System Design has between 2 and 4 reels", () => {
  for (const [moduleId, module] of Object.entries(MODULES)) {
    for (const page of module.pages.filter((p) => p.kind === "topic")) {
      const count = reelsFor(moduleId, page.slug).length;
      assert.ok(count >= MIN_PER_PAGE && count <= MAX_PER_PAGE, `${moduleId}/${page.slug} has ${count} reels`);
    }
  }
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

test("no channel has more than 2 reels on one page", () => {
  for (const [moduleId, pages] of Object.entries(REELS)) {
    for (const [slug, reels] of Object.entries(pages ?? {})) {
      const counts = new Map<string, number>();
      for (const reel of reels) counts.set(reel.channel, (counts.get(reel.channel) ?? 0) + 1);
      for (const [channel, count] of counts) {
        assert.ok(count <= MAX_PER_CHANNEL, `${moduleId}/${slug} has ${count} reels from ${channel}`);
      }
    }
  }
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
