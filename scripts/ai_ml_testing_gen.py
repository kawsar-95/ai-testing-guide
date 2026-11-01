"""Writes the route map and the test file of the AI/ML Testing module.

The topic list in lib/ai-ml-testing/topics.ts is the one source of truth. This
script reads it, so the route map, the slug list, and the page-shape list in
the test cannot drift from the data.

Usage: python3 scripts/ai_ml_testing_gen.py
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOPICS = ROOT / "lib" / "ai-ml-testing" / "topics.ts"
ROUTE_MAP = ROOT / "scripts" / "ai-ml-testing-route-map.json"
TEST = ROOT / "tests" / "ai-ml-testing.test.ts"

SLUG_RE = re.compile(r'^\s*\|\s*"([a-z0-9-]+)"\s*;?\s*$', re.M)
ENTRY_RE = re.compile(r'slug:\s*"([a-z0-9-]+)",\s*\n\s*title:\s*"([^"]+)",', re.M)
PART_RE = re.compile(r'\{\s*num:\s*(\d+),\s*title:\s*"([^"]+)"\s*\}', re.M)
ENTRY_PART_RE = re.compile(r'slug:\s*"([a-z0-9-]+)",.*?part:\s*(\d+),', re.S)


def read_slugs() -> list[str]:
    """The slugs of the topic entries, in order."""
    source = TOPICS.read_text(encoding="utf-8")
    entries = ENTRY_RE.findall(source)
    if not entries:
        raise SystemExit("no topic entries found in lib/ai-ml-testing/topics.ts")
    slugs = [slug for slug, _ in entries]
    declared = SLUG_RE.findall(source)
    if sorted(declared) != sorted(slugs):
        missing = sorted(set(declared) - set(slugs))
        extra = sorted(set(slugs) - set(declared))
        raise SystemExit(f"the slug union and the entries disagree: missing={missing} extra={extra}")
    return slugs


def read_parts() -> list[tuple[int, str]]:
    """The parts of the module, in order."""
    source = TOPICS.read_text(encoding="utf-8")
    parts = [(int(num), title) for num, title in PART_RE.findall(source)]
    if not parts:
        raise SystemExit("no parts found in lib/ai-ml-testing/topics.ts")
    return parts


def read_part_of_each_slug() -> dict[str, int]:
    """The part number of each entry."""
    source = TOPICS.read_text(encoding="utf-8")
    return {slug: int(part) for slug, part in ENTRY_PART_RE.findall(source)}


def write_route_map(slugs: list[str]) -> None:
    routes = ["/ai-ml-testing/"] + [f"/ai-ml-testing/{slug}/" for slug in slugs]
    ROUTE_MAP.write_text(
        json.dumps({route: route for route in routes}, indent=2) + "\n",
        encoding="utf-8",
    )


def write_test(slugs: list[str]) -> None:
    listed = "\n".join(f'  "{slug}",' for slug in slugs)
    parts = read_parts()
    part_of = read_part_of_each_slug()
    count = len(slugs)
    parts_literal = ", ".join(f'[{num}, "{title}"]' for num, title in parts)
    # The expected part number of each entry, derived from the data.
    expected_parts = ", ".join(str(part_of[slug]) for slug in slugs)
    body = f'''import {{ test }} from "node:test";
import assert from "node:assert/strict";
import {{ readFileSync, readdirSync }} from "node:fs";
import {{ AI_ML_TESTING }} from "../lib/ai-ml-testing/topics.ts";
import {{ precacheUrls }} from "../lib/pwa.ts";
import {{ buildFlatSearchDocs }} from "../lib/search.ts";

/** The {count} topics, in the order of the course syllabus. */
const SLUGS = [
{listed}
] as const;

/** The part number of each topic, in the same order. */
const PART_OF = [
{expected_parts}
] as const;

/** The fixed page shape. Every section but Key words has <Voices>. */
const SHAPE = [
  "In plain words",
  "How it works",
  "In practice",
  "Common mistakes",
  "What a tester can check",
  "Key words",
];

const dir = new URL("../content/ai-ml-testing/", import.meta.url);
const read = (slug: string) => readFileSync(new URL(`${{slug}}.mdx`, dir), "utf8");

test("there are {count} topic entries, and every one is a topic", () => {{
  assert.equal(SLUGS.length, {count});
  assert.deepEqual(AI_ML_TESTING.items.map((i) => [i.slug, i.kind]), SLUGS.map((s) => [s, "topic"]));
  assert.equal(AI_ML_TESTING.items.length, {count});
}});

test("the parts are the phases, and the part numbers never go down", () => {{
  assert.deepEqual(
    AI_ML_TESTING.parts?.map((p) => [p.num, p.title]),
    [{parts_literal}],
  );
  const parts = AI_ML_TESTING.items.map((i) => i.part);
  assert.deepEqual(parts, [...PART_OF]);
  for (let i = 1; i < parts.length; i++) assert.ok(parts[i] >= parts[i - 1], "the parts go down");
}});

test("content/ai-ml-testing has exactly the {count} files, and the route map is AI_ML_TESTING.routes", () => {{
  assert.deepEqual(readdirSync(dir).sort(), SLUGS.map((s) => `${{s}}.mdx`).sort());
  assert.deepEqual(AI_ML_TESTING.routes, ["/ai-ml-testing/", ...SLUGS.map((s) => `/ai-ml-testing/${{s}}/`)]);
  const map: Record<string, string> = JSON.parse(
    readFileSync(new URL("../scripts/ai-ml-testing-route-map.json", import.meta.url), "utf8"),
  );
  assert.deepEqual(Object.keys(map), [...AI_ML_TESTING.routes]);
  assert.deepEqual(Object.values(map), [...AI_ML_TESTING.routes]);
}});

test("each page has the entry title as # heading, the fixed sections, and voices", () => {{
  for (const page of AI_ML_TESTING.pages) {{
    const source = read(page.slug);
    assert.ok(source.split("\\n").includes(`# ${{page.title}}`), `${{page.slug}}: # ${{page.title}}`);
    const headings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
    assert.deepEqual(headings, SHAPE, page.slug);
    const voices = source.match(/^<Voices>$/gm)?.length ?? 0;
    assert.equal(voices, SHAPE.length - 1, `${{page.slug}}: one <Voices> per section but Key words`);
  }}
}});

test("every page exports its metadata, a page date, and at least one https source", () => {{
  for (const page of AI_ML_TESTING.pages) {{
    const source = read(page.slug);
    assert.match(source, /^export const metadata = \\{{/m, `${{page.slug}}: metadata`);
    assert.match(source, /^export const page = \\{{/m, `${{page.slug}}: page`);
    assert.match(source, /updated: '\\d{{4}}-\\d{{2}}-\\d{{2}}'/, `${{page.slug}}: updated`);
    assert.match(source, /url: 'https:\\/\\//, `${{page.slug}}: an https source`);
  }}
}});

test("the progress ids are the 47 slugs, under ai-ml-testing-progress", () => {{
  assert.equal(AI_ML_TESTING.progress?.storageKey, "ai-ml-testing-progress");
  assert.deepEqual(AI_ML_TESTING.lessonIds, [...SLUGS]);
}});

test("precacheUrls includes /ai-ml-testing/ and the 47 page routes", () => {{
  const urls = precacheUrls("");
  assert.ok(urls.includes("/ai-ml-testing/"));
  for (const slug of SLUGS) assert.ok(urls.includes(`/ai-ml-testing/${{slug}}/`), slug);
}});

test("buildFlatSearchDocs gives docs with group 'ai ml testing' for every page", () => {{
  const docs = buildFlatSearchDocs(
    AI_ML_TESTING,
    AI_ML_TESTING.pages.map((item) => ({{ item, source: read(item.slug) }})),
  );
  for (const doc of docs) assert.equal(doc.group, "ai ml testing");
  for (const page of AI_ML_TESTING.pages) assert.ok(docs.some((d) => d.href === page.href), page.href);
}});
'''
    TEST.write_text(body, encoding="utf-8")


def main() -> int:
    slugs = read_slugs()
    write_route_map(slugs)
    write_test(slugs)
    print(f"slugs: {len(slugs)}")
    print(f"wrote {ROUTE_MAP}")
    print(f"wrote {TEST}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
