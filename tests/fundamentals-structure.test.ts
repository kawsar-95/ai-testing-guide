import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { CHAPTERS } from "../lib/fundamentals/chapters.ts";
import { headingsInsideVersions, topicVersionCounts } from "../lib/fundamentals/structure.ts";
import { outlineFromSource } from "../lib/outline.ts";

const DIR = join("content", "fundamentals");
const read = (slug: string) => readFileSync(join(DIR, `${slug}.mdx`), "utf8");

const FIXTURE = [
  "# Chapter",
  "",
  "Lede.",
  "",
  "## First Topic",
  "",
  '<Version of="notes">',
  "Owner text.",
  "</Version>",
  "",
  '<Version of="istqb">',
  "New text.",
  "</Version>",
  "",
  "## Second Topic",
  "",
  '<Version of="istqb">',
  "Only ISTQB.",
  "</Version>",
  "",
  "```mdx",
  '<Version of="notes">',
  "```",
].join("\n");

test("topicVersionCounts counts the blocks of each ## topic and ignores code fences", () => {
  assert.deepEqual(topicVersionCounts(FIXTURE), [
    { title: "First Topic", notes: 1, istqb: 1 },
    { title: "Second Topic", notes: 0, istqb: 1 },
  ]);
});

test("headingsInsideVersions finds a heading inside a block and ignores a heading outside", () => {
  const source = [
    "## Outside",
    "",
    '<Version of="notes">',
    "### Inside",
    "Text.",
    "</Version>",
    "",
    '<Version of="istqb">',
    "```md",
    "## In a code fence",
    "```",
    "</Version>",
    "",
    "## Also Outside",
  ].join("\n");
  assert.deepEqual(headingsInsideVersions(source), ["### Inside"]);
  assert.deepEqual(headingsInsideVersions(FIXTURE), []);
});

for (const chapter of CHAPTERS) {
  test(`content/fundamentals/${chapter.slug}.mdx matches the chapter data and the version rules`, () => {
    const file = join(DIR, `${chapter.slug}.mdx`);
    assert.ok(existsSync(file), `${file} is missing`);
    const source = read(chapter.slug);

    const h2 = outlineFromSource(source).filter((item) => item.level === 2);
    assert.deepEqual(
      h2.map((item) => item.id),
      chapter.topics.map((topic) => topic.anchor),
      `the ## ids of ${chapter.slug} are not the topic anchors`,
    );

    const counts = topicVersionCounts(source);
    if (chapter.hasVersions) {
      for (const topic of counts) {
        assert.equal(topic.notes, 1, `${chapter.slug}: "${topic.title}" needs one notes block`);
        assert.equal(topic.istqb, 1, `${chapter.slug}: "${topic.title}" needs one istqb block`);
      }
      // A block before the first ## or with an unknown `of` value is not in `counts`.
      const blocks = source.split("\n").filter((line) => line.startsWith("<Version")).length;
      assert.equal(blocks, 2 * chapter.topics.length, `${chapter.slug} has a <Version> block outside the topic rule`);
    } else {
      assert.ok(!source.includes("<Version"), `${chapter.slug} must have no <Version> block`);
    }

    assert.deepEqual(headingsInsideVersions(source), [], `${chapter.slug} has a heading inside a <Version> block`);
  });
}

test("every .mdx file in content/fundamentals/ is a chapter", () => {
  const slugs = new Set(CHAPTERS.map((chapter) => chapter.slug as string));
  for (const file of readdirSync(DIR).filter((name) => name.endsWith(".mdx"))) {
    assert.ok(slugs.has(file.replace(/\.mdx$/, "")), `${file} is not in CHAPTERS`);
  }
});

test("no chapter contains DRAFT", () => {
  for (const file of readdirSync(DIR).filter((name) => name.endsWith(".mdx"))) {
    assert.ok(!readFileSync(join(DIR, file), "utf8").includes("DRAFT"), `${file} still contains DRAFT`);
  }
});

test("every <MdxImage src> in content/fundamentals/ points to a file in public/", () => {
  for (const file of readdirSync(DIR).filter((name) => name.endsWith(".mdx"))) {
    const source = readFileSync(join(DIR, file), "utf8");
    for (const match of source.matchAll(/<MdxImage\b[^>]*\bsrc="([^"]+)"/g)) {
      const src = match[1];
      assert.ok(src.startsWith("/"), `${file}: ${src} must start with /`);
      assert.ok(existsSync(join("public", src)), `${file}: ${src} is not in public/`);
    }
  }
});
