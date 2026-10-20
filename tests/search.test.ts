import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PAGES } from "../lib/nav.ts";
import { getOutline } from "../lib/outline.ts";
import { CHAPTERS } from "../lib/fundamentals/chapters.ts";
import { STAGES } from "../lib/linux/stages.ts";
import {
  buildFundamentalsSearchDocs,
  buildLinuxSearchDocs,
  buildSearchDocs,
  createIndex,
  runSearch,
} from "../lib/search.ts";
import type { SearchDoc } from "../lib/search.ts";

const read = (group: string, slug: string) => readFileSync(join("content", group, `${slug}.mdx`), "utf8");
const docs = buildSearchDocs(PAGES.map((page) => ({ page, source: read(page.group, page.slug) })));

const linuxDocs = buildLinuxSearchDocs(STAGES.map((stage) => ({ stage, source: read("linux", stage.slug) })));

const fundamentalsDocs = buildFundamentalsSearchDocs(
  CHAPTERS.map((chapter) => ({ chapter, source: read("fundamentals", chapter.slug) })),
);

test("every page has at least one doc", () => {
  for (const page of PAGES) {
    assert.ok(
      docs.some((doc) => doc.href === page.href || doc.href.startsWith(`${page.href}#`)),
      page.href,
    );
  }
});

test("each page has an intro doc and one doc per ## section, with outline ids", () => {
  for (const page of PAGES) {
    const own = docs.filter((doc) => doc.page === page.title);
    const sections = getOutline(page.group, page.slug).filter((item) => item.level === 2);
    assert.equal(own[0].href, page.href, `${page.href} intro`);
    assert.equal(own[0].title, page.title);
    assert.deepEqual(
      own.slice(1).map((doc) => doc.href),
      sections.map((item) => `${page.href}#${item.id}`),
      page.href,
    );
  }
});

test("doc ids are unique and every doc has its page fields", () => {
  assert.equal(new Set(docs.map((doc) => doc.id)).size, docs.length);
  for (const doc of docs) {
    const page = PAGES.find((p) => p.group === doc.group && p.title === doc.page);
    assert.ok(page, doc.id);
    assert.equal(doc.part, page.part);
    assert.ok(doc.title.length > 0, doc.id);
  }
});

test("no doc text has an import line, the metadata block, or a closing tag", () => {
  for (const doc of docs) {
    // An import statement, not the English word "import" in prose.
    assert.ok(!/\bimport\s+[\w{*][^"']*\bfrom\s+["']/.test(doc.text), `${doc.id} has an import line`);
    assert.ok(!doc.text.includes("</"), `${doc.id} has "</"`);
    assert.ok(!doc.text.includes("export const metadata"), `${doc.id} has the metadata block`);
  }
});

const sample = [
  "export const metadata = {",
  "  title: 'Sample',",
  "}",
  "",
  "# Sample",
  "",
  "Intro with **bold**, `inline code` and a [link text](https://example.com/x).",
  "",
  '<CardGrid cols={2}>',
  '  <InfoCard title="Card One" subtitle="Card sub">',
  "    - Item **one**",
  "</InfoCard>",
  "</CardGrid>",
  "",
  "## First Part",
  "",
  "| Path | Scope |",
  "|---|---|",
  "| `~/.claude/` | Global |",
  "",
  "<details>",
  "<summary>Open &gt; me</summary>",
  "",
  "```bash",
  "## not a heading",
  "git show <hash>",
  "```",
  "",
  "</details>",
  "",
  "### Deeper",
  "",
  "Deep text.",
  "",
  "## First Part",
  "",
  "Second with the same title.",
].join("\n");
const [samplePage] = PAGES;
const sampleDocs = buildSearchDocs([{ page: samplePage, source: sample }]);

test("the intro is the text before the first ## and drops the metadata export", () => {
  const [intro] = sampleDocs;
  assert.equal(intro.href, samplePage.href);
  assert.equal(intro.title, samplePage.title);
  assert.equal(
    intro.text,
    "Sample Intro with bold, inline code and a link text. Card One Card sub Item one",
  );
});

test("a section keeps code text, JSX text and heading text, and drops Markdown and tag syntax", () => {
  const section = sampleDocs[1];
  assert.equal(section.href, `${samplePage.href}#first-part`);
  assert.equal(section.title, "First Part");
  assert.equal(
    section.text,
    "Path Scope ~/.claude/ Global Open > me ## not a heading git show <hash> Deeper Deep text.",
  );
});

test("a repeated ## title gets the -1 id, as the built page does", () => {
  assert.equal(sampleDocs[2].href, `${samplePage.href}#first-part-1`);
  assert.equal(sampleDocs[2].text, "Second with the same title.");
});

test("runSearch ranks the Hooks page first for hooks", () => {
  const index = createIndex(docs);
  assert.ok(runSearch(index, "hooks")[0].href.startsWith("/extend/hooks/"));
});

test("runSearch hits carry the stored fields and no text", () => {
  const index = createIndex(docs);
  const hit = runSearch(index, "hooks")[0];
  assert.deepEqual(Object.keys(hit).sort(), ["group", "href", "id", "page", "part", "title"]);
});

test("runSearch returns nothing for a blank query and honors the limit", () => {
  const index = createIndex(docs);
  assert.deepEqual(runSearch(index, ""), []);
  assert.deepEqual(runSearch(index, "   "), []);
  assert.ok(runSearch(index, "claude", 3).length <= 3);
});

test("docs are JSON-safe", () => {
  const copy = JSON.parse(JSON.stringify(docs)) as SearchDoc[];
  assert.deepEqual(copy, docs);
});

test("a tutorial hit keeps its part number", () => {
  const index = createIndex(docs);
  assert.equal(runSearch(index, "hooks")[0].part, PAGES.find((page) => page.slug === "hooks")?.part);
});

test("buildLinuxSearchDocs gives an intro doc and one doc per ## section for each stage", () => {
  for (const stage of STAGES) {
    const own = linuxDocs.filter((doc) => doc.page === stage.title);
    const sections = getOutline("linux", stage.slug).filter((item) => item.level === 2);
    assert.equal(own[0].href, stage.href, `${stage.href} intro`);
    assert.equal(own[0].title, stage.title);
    assert.equal(own.length, sections.length + 1, stage.href);
    assert.deepEqual(
      own.slice(1).map((doc) => doc.href),
      sections.map((item) => `${stage.href}#${item.id}`),
      stage.href,
    );
  }
  assert.deepEqual(buildLinuxSearchDocs([]), []);
});

test("a linux doc has group 'linux', part null, and an href '/linux/<stage>/#<anchor>' for a section", () => {
  assert.ok(linuxDocs.length > STAGES.length);
  for (const doc of linuxDocs) {
    assert.equal(doc.group, "linux", doc.id);
    assert.equal(doc.part, null, doc.id);
    assert.equal(doc.id, doc.href);
    assert.ok(doc.title.length > 0, doc.id);
  }
  for (const stage of STAGES) {
    for (const topic of stage.topics) {
      assert.ok(
        linuxDocs.some((doc) => doc.href === `${stage.href}#${topic.anchor}`),
        `${stage.href}#${topic.anchor}`,
      );
    }
  }
  // The topic with the stage title gets the -1 anchor: the # title takes the plain slug.
  const shell = linuxDocs.find((doc) => doc.title === "Shell Basics" && doc.href.includes("#"));
  assert.ok(shell);
  assert.equal(shell.href, "/linux/shell-basics/#shell-basics-1");
});

test("linux doc ids are unique and do not clash with tutorial ids", () => {
  const ids = new Set(docs.map((doc) => doc.id));
  for (const doc of linuxDocs) assert.ok(!ids.has(doc.id), doc.id);
  const all = [...docs, ...linuxDocs].map((doc) => doc.id);
  assert.equal(new Set(all).size, all.length);
});

test("a search for the topic title 'Cgroups' finds a hit with group 'linux' and href '/linux/containers/#cgroups'", () => {
  const index = createIndex([...docs, ...linuxDocs]);
  const hit = runSearch(index, "Cgroups").find((h) => h.href === "/linux/containers/#cgroups");
  assert.ok(hit);
  assert.equal(hit.group, "linux");
  assert.equal(hit.part, null);
});

test("runSearch hits carry the group", () => {
  const index = createIndex([...docs, ...linuxDocs]);
  assert.equal(runSearch(index, "hooks")[0].group, "extend");
});

test("buildFundamentalsSearchDocs gives an intro doc and one doc per topic, with group 'fundamentals' and part null", () => {
  for (const chapter of CHAPTERS) {
    const own = fundamentalsDocs.filter((doc) => doc.page === chapter.title);
    assert.equal(own[0].href, chapter.href, `${chapter.href} intro`);
    assert.equal(own[0].title, chapter.title);
    assert.deepEqual(
      own.slice(1).map((doc) => doc.href),
      chapter.topics.map((topic) => `${chapter.href}#${topic.anchor}`),
      chapter.href,
    );
  }
  for (const doc of fundamentalsDocs) {
    assert.equal(doc.group, "fundamentals", doc.id);
    assert.equal(doc.part, null, doc.id);
    assert.equal(doc.id, doc.href);
  }
  assert.deepEqual(buildFundamentalsSearchDocs([]), []);
});

test("fundamentals doc ids do not clash with tutorial or linux ids", () => {
  const all = [...docs, ...linuxDocs, ...fundamentalsDocs].map((doc) => doc.id);
  assert.equal(new Set(all).size, all.length);
});
