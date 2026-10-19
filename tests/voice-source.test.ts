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

test("a non-blank line inside <Voices> but outside every panel is an error", () => {
  assertOneError(GOOD.replace("</Technical>\n<Layman>", "</Technical>\n\nStray.\n\n<Layman>"), "outside a panel");
  assertOneError(GOOD.replace("<Voices>\n<Technical>", "<Voices>\nStray.\n<Technical>"), "outside a panel");
  // Blank lines between the panels are allowed.
  assert.deepEqual(voiceErrors(GOOD.replace("</Technical>\n<Layman>", "</Technical>\n\n<Layman>")), []);
});

test("a non-blank line after </Voices> and before the next ## heading is an error", () => {
  assertOneError(GOOD + "\nStray.\n", "after </Voices>");
  assertOneError(GOOD + "\nStray.\n\n## B\n\nText.\n", "after </Voices>");
  // Text under the next ## heading is allowed.
  assert.deepEqual(voiceErrors(GOOD + "\n## B\n\nText.\n"), []);
});

test("an empty <Layman> or <Bangla> body is an error", () => {
  assertOneError(GOOD.replace("\nPlain text.\n", ""), "empty");
  assertOneError(GOOD.replace("\nবাংলা লেখা।\n", ""), "empty");
});

test("a nested second <Voices> is an error", () => {
  const errors = voiceErrors(GOOD.replace("Tech text", "<Voices>\n\nTech text"));
  assert.ok(errors.length > 0);
  assert.ok(errors.every((e) => /^line \d+: /.test(e)), errors.join(" | "));
});

test("a <Voices> tag in inline code is not a tag", () => {
  assert.deepEqual(voiceErrors(GOOD + "\n## B\n\nWrap the text in `<Voices>` and `</Voices>`.\n"), []);
  assert.deepEqual(voiceErrors(GOOD.replace("Plain text.", "Plain text with `<Voices>`.")), []);
});

test("a stray </Voices> is an error", () => {
  assertOneError(GOOD + "\n## B\n\nText.\n\n</Voices>\n", "no <Voices>");
  assertOneError(GOOD.replace("</Voices>\n", "</Voices>\n</Voices>\n"), "no <Voices>");
});

test("<Cite n={k}/> with no space before the slash is still checked", () => {
  assertOneError(GOOD.replace("Plain text.", "Plain text <Cite n={2}/>."), "cite 2");
});

test("a ### heading in a fenced code block of <Bangla> is allowed", () => {
  assert.deepEqual(voiceErrors(GOOD.replace("বাংলা লেখা।", "বাংলা লেখা।\n\n```md\n### উদাহরণ\n```")), []);
});

test("two <Voices> blocks under one ## heading are an error", () => {
  const block = GOOD.slice(GOOD.indexOf("<Voices>"));
  assertOneError(GOOD + "\n" + block, "first after ##");
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
