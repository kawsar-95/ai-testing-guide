import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const TEMPLATES = [
  "app/(site)/[group]/[page]/page.tsx",
  "app/(site)/linux/[stage]/page.tsx",
  "app/(site)/fundamentals/[chapter]/page.tsx",
  "components/modules/FlatTopicPage.tsx",
];

test("the chapter breakpoints are 820 px and 1280 px", () => {
  const css = source("app/globals.css");
  assert.match(css, /--breakpoint-chapter: 51\.25rem;/);
  assert.match(css, /--breakpoint-toc: 80rem;/);
});

test("ChapterLayout shows the left list from chapter and On this page from toc", () => {
  const layout = source("components/content/ChapterLayout.tsx");
  assert.match(layout, /hidden[^"]*chapter:block/);
  assert.match(layout, /hidden[^"]*toc:block/);
});

test("the Contents button hides when the left list shows", () => {
  assert.match(source("components/layout/ContentsButton.tsx"), /chapter:hidden/);
});

for (const path of TEMPLATES) {
  test(`${path} uses ChapterLayout and ChapterTools`, () => {
    const src = source(path);
    assert.match(src, /import \{ ChapterLayout \}/);
    assert.match(src, /import \{ ChapterTools \}/);
    assert.match(src, /<ChapterLayout /);
    assert.match(src, /<ChapterTools /);
    assert.doesNotMatch(src, /xl:grid-cols-\[minmax\(0,680px\)_220px\]/);
  });
}

test("the left list renders the list of the route, with no Suspense fallback", () => {
  const layout = source("components/content/ChapterLayout.tsx");
  assert.doesNotMatch(layout, /Suspense|SidebarList/);
  assert.match(layout, /<ChapterList activePath=\{route\} \/>/);
  assert.doesNotMatch(source("components/content/ChapterList.tsx"), /usePathname/);
});

for (const path of TEMPLATES) {
  test(`${path} passes its route to ChapterLayout`, () => {
    assert.match(source(path), /<ChapterLayout outline=\{outline\} route=\{[a-z]+\.href\}>/);
  });
}

for (const path of ["app/(site)/architecture/[topic]/page.tsx", "app/(site)/system-design/[topic]/page.tsx"]) {
  test(`${path} renders FlatTopicPage and loads its MDX with a literal folder`, () => {
    const src = source(path);
    assert.match(src, /<FlatTopicPage /);
    assert.match(src, /import\(`@\/content\/(architecture|system-design)\/\$\{slug\}\.mdx`\)/);
  });
}

test("NavList remounts FlatSidebarList when the flat module changes", () => {
  assert.match(source("components/layout/NavList.tsx"), /<FlatSidebarList key=\{flat\.id\} module=\{flat\}/);
});

test("FlatSidebarList calls one hook whether or not the module has progress", () => {
  const list = source("components/modules/FlatSidebarList.tsx");
  assert.match(list, /const \{ done \} = doneHook\(m\)\(\);/);
  assert.doesNotMatch(list, /progressHook|\? *use[A-Z]/);
  const hooks = source("components/modules/useModuleProgress.ts");
  assert.match(hooks, /return module\.progress \? progressHook\(module\) : useNoProgress;/);
  const factory = source("components/prep/useProgress.ts");
  assert.match(factory, /export function createUseProgress[\s\S]*return hookOf\(/);
  assert.match(factory, /export const useNoProgress: UseProgress = hookOf\(/);
  assert.equal(factory.match(/useSyncExternalStore\(/g)?.length, 1);
});
