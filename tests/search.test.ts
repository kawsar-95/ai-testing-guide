import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PAGES } from "../lib/nav.ts";
import { getOutline } from "../lib/outline.ts";
import { AREAS } from "../lib/prep/areas.ts";
import { ALL_ITEMS, itemsOf as ITEMS_OF } from "../lib/prep/items.ts";
import { buildPrepSearchDocs, buildSearchDocs, createIndex, runSearch } from "../lib/search.ts";
import type { SearchDoc } from "../lib/search.ts";

const read = (group: string, slug: string) => readFileSync(join("content", group, `${slug}.mdx`), "utf8");
const docs = buildSearchDocs(PAGES.map((page) => ({ page, source: read(page.group, page.slug) })));

const prepEntries = AREAS.flatMap((area) => ITEMS_OF(area.slug).map((item) => ({ area, item })));
const prepDocs = buildPrepSearchDocs(prepEntries);

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
  // A prep doc has no part number.
  for (const doc of prepDocs) {
    assert.equal(doc.group, "prep", doc.id);
    assert.equal(doc.part, null, doc.id);
    assert.ok(AREAS.some((area) => area.title === doc.page), doc.id);
    assert.ok(doc.title.length > 0, doc.id);
  }
});

test("no doc text has an import line, the metadata block, or a closing tag", () => {
  for (const doc of docs) {
    assert.ok(!doc.text.includes("import "), `${doc.id} has "import "`);
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
  assert.deepEqual(Object.keys(hit).sort(), ["href", "id", "page", "part", "title"]);
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

test("buildPrepSearchDocs gives one doc for each item with a /prep/<area>/#<id> href", () => {
  assert.equal(prepDocs.length, ALL_ITEMS.length);
  assert.ok(prepDocs.length > 0);
  const intern = prepDocs.find((doc) => doc.id === "/prep/intern/#intern-001");
  assert.ok(intern);
  assert.equal(intern.href, "/prep/intern/#intern-001");
  assert.equal(intern.page, "Intern");
  assert.equal(intern.group, "prep");
  assert.equal(intern.part, null);
  assert.equal(intern.title, "What is software testing, and why does it matter?");
  assert.ok(intern.text.includes("A simple example"), "template text");
  assert.ok(intern.text.includes("cost-effective way to find defects"), "example text");
  assert.ok(intern.text.includes("The interviewer checks"), "behind text");
  assert.ok(!intern.text.includes(intern.title), "the title is not repeated in the text");
  for (const { area, item } of prepEntries) {
    const doc = prepDocs.find((d) => d.href === `/prep/${area.slug}/#${item.id}`);
    assert.ok(doc, item.id);
    assert.equal(doc.id, doc.href);
    assert.equal(doc.page, area.title);
  }
});

test("a task doc uses the title, and an mcq doc has the options and the explanation", () => {
  const task = prepEntries.find((entry) => entry.item.kind === "task");
  assert.ok(task && task.item.kind === "task");
  const [taskDoc] = buildPrepSearchDocs([task]);
  assert.equal(taskDoc.title, task.item.title);
  assert.equal(taskDoc.text, task.item.details);

  const mcq = prepEntries.find((entry) => entry.item.id === "mcq-test-001");
  assert.ok(mcq && mcq.item.kind === "mcq");
  const [mcqDoc] = buildPrepSearchDocs([mcq]);
  assert.equal(mcqDoc.href, "/prep/mcq-test/#mcq-test-001");
  assert.equal(mcqDoc.page, "MCQ Test");
  assert.equal(mcqDoc.title, mcq.item.question);
  for (const option of mcq.item.options) assert.ok(mcqDoc.text.includes(option), option);
  assert.ok(mcqDoc.text.includes(mcq.item.explanation));
});

test("buildPrepSearchDocs gives no docs for no entries", () => {
  assert.deepEqual(buildPrepSearchDocs([]), []);
});

test("prep doc ids are unique and do not clash with tutorial ids", () => {
  const ids = new Set(docs.map((doc) => doc.id));
  for (const doc of prepDocs) assert.ok(!ids.has(doc.id), doc.id);
  const all = [...docs, ...prepDocs].map((doc) => doc.id);
  assert.equal(new Set(all).size, all.length);
});

test("prep docs are JSON-safe", () => {
  const copy = JSON.parse(JSON.stringify(prepDocs)) as SearchDoc[];
  assert.deepEqual(copy, prepDocs);
});

test("a prep question is found by runSearch", () => {
  const index = createIndex([...docs, ...prepDocs]);
  const hits = runSearch(index, "difference between verification and validation");
  assert.equal(hits[0].href, "/prep/intern/#intern-002");
  assert.equal(hits[0].part, null);
  assert.equal(hits[0].page, "Intern");
  // A tutorial hit keeps its part number.
  assert.equal(runSearch(index, "hooks")[0].part, PAGES.find((page) => page.slug === "hooks")?.part);
});
