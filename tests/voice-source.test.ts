import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { voiceBlocks, voiceErrors } from "../lib/voice-source.ts";
import { buildSearchDocs, createIndex, runSearch } from "../lib/search.ts";

const GOOD = [
  "# T",
  "",
  "Lede.",
  "",
  "## A",
  "",
  "<Voices>",
  "<Technical>",
  "",
  "Tech text <Cite n={1} />",
  "",
  "</Technical>",
  "<Layman>",
  "",
  "Plain text.",
  "",
  "</Layman>",
  "<Bangla>",
  "",
  "বাংলা লেখা।",
  "",
  "</Bangla>",
  "</Voices>",
  "",
].join("\n");

/** The one error of a bad source must contain `text` and start with `line N:`. */
function assertOneError(source: string, text: string) {
  const errors = voiceErrors(source);
  assert.equal(errors.length, 1, errors.join(" | "));
  assert.match(errors[0], /^line \d+: /);
  assert.ok(errors[0].includes(text), `${errors[0]} should contain "${text}"`);
}

const without = (source: string, line: string) => source.replace(`${line}\n`, "");

test("a page with no <Voices> has no errors and no blocks", () => {
  const src = "# T\n\nLede.\n\n## A\n\nText.\n";
  assert.deepEqual(voiceErrors(src), []);
  assert.deepEqual(voiceBlocks(src), []);
});

test("a correct block parses", () => {
  assert.deepEqual(voiceErrors(GOOD), []);
  const [b] = voiceBlocks(GOOD);
  assert.equal(b.heading, "A");
  assert.equal(b.line, 7);
  assert.match(b.technical, /Tech text <Cite n=\{1\} \/>/);
  assert.equal(b.layman, "Plain text.");
  assert.match(b.bangla, /বাংলা লেখা/);
});

test("<Voices> must be the first thing after a ## heading", () => {
  assertOneError(GOOD.replace("<Voices>", "Intro.\n\n<Voices>"), "first after ##");
  assertOneError(GOOD.replace("## A\n\n", ""), "first after ##");
});

test("</Voices> must come before the next ## heading or the end of the file", () => {
  assertOneError(without(GOOD, "</Voices>"), "not closed");
  assertOneError(without(GOOD, "</Voices>") + "\n## B\n\nText.\n", "not closed");
});

test("the panels come in the order Technical, Layman, Bangla, one time each", () => {
  const swapped = GOOD.replace("<Layman>", "<TMP>").replace("<Bangla>", "<Layman>").replace("<TMP>", "<Bangla>");
  assertOneError(swapped, "order");
  assertOneError(GOOD.replace("</Technical>\n", "</Technical>\n<Technical>\n\nMore.\n\n</Technical>\n"), "order");
  const noBangla = GOOD.replace(/<Bangla>[\s\S]*<\/Bangla>\n/, "");
  assertOneError(noBangla, "order");
});

test("each tag is alone on its line at column 0", () => {
  assertOneError(GOOD.replace("<Layman>", "  <Layman>"), "column 0");
  assertOneError(GOOD.replace("</Bangla>", "</Bangla> text"), "column 0");
  assertOneError(GOOD.replace("<Voices>", " <Voices>"), "column 0");
});

test("a blank line follows an opening panel tag and comes before a closing panel tag", () => {
  assertOneError(GOOD.replace("<Layman>\n\n", "<Layman>\n"), "blank line");
  assertOneError(GOOD.replace("\n\n</Bangla>", "\n</Bangla>"), "blank line");
});

test("<Layman> and <Bangla> have no Markdown heading", () => {
  assertOneError(GOOD.replace("Plain text.", "### Sub\n\nPlain text."), "heading");
  assertOneError(GOOD.replace("বাংলা লেখা।", "#### উপ\n\nবাংলা লেখা।"), "heading");
});

test("a heading in <Technical> is allowed", () => {
  assert.deepEqual(voiceErrors(GOOD.replace("Tech text", "### Sub\n\nTech text")), []);
});

test("a <Cite n> in <Layman> or <Bangla> needs the same n in <Technical>", () => {
  assert.deepEqual(voiceErrors(GOOD.replace("Plain text.", "Plain text <Cite n={1} />.")), []);
  assertOneError(GOOD.replace("Plain text.", "Plain text <Cite n={2} />."), "cite 2");
  assertOneError(GOOD.replace("বাংলা লেখা।", "বাংলা <Cite n={3} /> লেখা।"), "cite 3");
});

test("tags inside a fenced code block are ignored", () => {
  const src = "# T\n\n## A\n\n```mdx\n<Voices>\n<Technical>\n```\n\nText.\n";
  assert.deepEqual(voiceErrors(src), []);
  assert.deepEqual(voiceBlocks(src), []);
});

test("every content/**/*.mdx file follows the voice rules", () => {
  const files = readdirSync(new URL("../content", import.meta.url), { recursive: true, encoding: "utf8" })
    .filter((file) => file.endsWith(".mdx"))
    .sort();
  assert.ok(files.length > 0);
  for (const file of files) {
    const source = readFileSync(new URL(`../content/${file}`, import.meta.url), "utf8");
    assert.deepEqual(voiceErrors(source), [], `content/${file}`);
  }
});

test("search finds a Bangla word in a <Bangla> panel", () => {
  const docs = buildSearchDocs([{ page: { href: "/g/p/", title: "P", part: 1, group: "g" }, source: GOOD }]);
  const hits = runSearch(createIndex(docs), "লেখা");
  assert.equal(hits[0]?.href, "/g/p/#a");
});
