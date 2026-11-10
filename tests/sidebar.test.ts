import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import {
  SIDEBAR_INIT_SCRIPT,
  SIDEBAR_SIDES,
  nextSidebar,
  resolveSidebar,
  sidebarAttr,
  sidebarStorageKey,
} from "../lib/sidebar.ts";
import { SHELL_BN } from "../lib/bn/shell.ts";
import * as ui from "../lib/ui.ts";

const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("resolveSidebar: only the saved value 'closed' closes a sidebar", () => {
  assert.equal(resolveSidebar("closed"), "closed");
  for (const s of ["open", null, "", "CLOSED", "true"]) assert.equal(resolveSidebar(s), "open");
});

test("nextSidebar flips the state", () => {
  assert.equal(nextSidebar("open"), "closed");
  assert.equal(nextSidebar("closed"), "open");
});

test("the storage key and the attribute name of each sidebar", () => {
  assert.deepEqual(SIDEBAR_SIDES, ["left", "right"]);
  assert.equal(sidebarStorageKey("left"), "sidebar-left");
  assert.equal(sidebarStorageKey("right"), "sidebar-right");
  assert.equal(sidebarAttr("left"), "data-sidebar-left");
  assert.equal(sidebarAttr("right"), "data-sidebar-right");
});

/** Runs the inline head script against a fake browser and returns the attributes it set on <html>. */
function runInitScript(stored: Record<string, string | null>, storageThrows = false) {
  const attrs: Record<string, string> = {};
  const context = {
    localStorage: {
      getItem(key: string) {
        if (storageThrows) throw new Error("blocked");
        return stored[key] ?? null;
      },
    },
    document: {
      documentElement: { setAttribute: (name: string, value: string) => (attrs[name] = value) },
    },
  };
  vm.runInNewContext(SIDEBAR_INIT_SCRIPT, context);
  return attrs;
}

test("SIDEBAR_INIT_SCRIPT agrees with resolveSidebar in every case", () => {
  const values = ["closed", "open", null, "", "CLOSED"];
  for (const left of values) {
    for (const right of values) {
      const attrs = runInitScript({ [sidebarStorageKey("left")]: left, [sidebarStorageKey("right")]: right });
      for (const [side, stored] of [
        ["left", left],
        ["right", right],
      ] as const) {
        // A closed sidebar gets the attribute. An open one gets none.
        const expected = resolveSidebar(stored) === "closed" ? "closed" : undefined;
        assert.equal(attrs[sidebarAttr(side)], expected, `${side}=${stored}`);
      }
    }
  }
});

test("SIDEBAR_INIT_SCRIPT does not throw if storage is blocked, and leaves both sidebars open", () => {
  let attrs: Record<string, string> = {};
  assert.doesNotThrow(() => {
    attrs = runInitScript({}, true);
  });
  assert.deepEqual(attrs, {});
});

test("setSidebar sets or removes the attribute and saves the choice", async () => {
  const attrs = new Map<string, string>();
  const store = new Map<string, string>();
  const g = globalThis as Record<string, unknown>;
  g.document = {
    documentElement: {
      setAttribute: (k: string, v: string) => attrs.set(k, v),
      removeAttribute: (k: string) => attrs.delete(k),
    },
  };
  g.localStorage = { setItem: (k: string, v: string) => store.set(k, v) };
  try {
    const { setSidebar } = await import("../components/layout/useSidebar.ts");
    setSidebar("left", "closed");
    assert.equal(attrs.get("data-sidebar-left"), "closed");
    assert.equal(store.get("sidebar-left"), "closed");
    assert.equal(attrs.has("data-sidebar-right"), false, "the other sidebar is not touched");
    setSidebar("left", "open");
    assert.equal(attrs.has("data-sidebar-left"), false, "an open sidebar has no attribute");
    assert.equal(store.get("sidebar-left"), "open");
    // Blocked storage does not throw. The sidebar still changes for this page.
    g.localStorage = {
      setItem: () => {
        throw new Error("blocked");
      },
    };
    setSidebar("right", "closed");
    assert.equal(attrs.get("data-sidebar-right"), "closed");
  } finally {
    delete g.document;
    delete g.localStorage;
  }
});

test("the four toggle names exist in English and Bangla, and each says what a click does", () => {
  for (const key of ["sidebarLeftHide", "sidebarLeftShow", "sidebarRightHide", "sidebarRightShow"] as const) {
    assert.ok(ui[key].length > 0, `${key} (en)`);
    assert.ok(SHELL_BN[key].length > 0, `${key} (bn)`);
  }
  assert.notEqual(ui.sidebarLeftHide, ui.sidebarLeftShow);
  assert.notEqual(ui.sidebarRightHide, ui.sidebarRightShow);
  assert.notEqual(SHELL_BN.sidebarLeftHide, SHELL_BN.sidebarLeftShow);
  assert.notEqual(SHELL_BN.sidebarRightHide, SHELL_BN.sidebarRightShow);
});

test("ChapterLayout sizes its side columns from the variables and has the toggle and body of the left list", () => {
  const layout = source("components/content/ChapterLayout.tsx");
  assert.match(layout, /chapter:grid-cols-\[var\(--sb-left\)_minmax\(0,1fr\)\]/);
  assert.match(layout, /toc:grid-cols-\[var\(--sb-left\)_minmax\(0,1fr\)_var\(--sb-right\)\]/);
  assert.doesNotMatch(layout, /grid-cols-\[240px/, "a fixed 240 px column cannot shrink to a rail");
  assert.match(layout, /className=\{`chapter-cols /);
  assert.match(layout, /<SidebarToggle side="left" \/>/);
  assert.match(layout, /data-sidebar-body="left"/);
});

test("SectionNav has the toggle of the right list, and the label and list of a closed sidebar hide", () => {
  const nav = source("components/navigation/SectionNav.tsx");
  assert.match(nav, /<SidebarToggle side="right" \/>/);
  assert.equal(nav.match(/data-sidebar-body="right"/g)?.length, 2, "the label and the list");
});

test("the toggle is 36 px, and 44 px on a touch screen like the rail", () => {
  const toggle = source("components/layout/SidebarToggle.tsx");
  assert.match(toggle, /\bsize-9\b/);
  assert.match(toggle, /pointer-coarse:size-11/);
  assert.match(source("app/globals.css"), /--sb-left: 2\.75rem;/, "size-11 is 2.75rem");
});

test("globals.css sets the widths, shrinks a closed sidebar to a rail, and hides its body", () => {
  const css = source("app/globals.css");
  assert.match(css, /\.chapter-cols \{\s*--sb-left: 240px;\s*--sb-right: 280px;\s*\}/);
  assert.match(css, /html\[data-sidebar-left="closed"\] \.chapter-cols \{\s*--sb-left: 2\.75rem;\s*\}/);
  assert.match(css, /html\[data-sidebar-right="closed"\] \.chapter-cols \{\s*--sb-right: 2\.75rem;\s*\}/);
  assert.match(css, /html\[data-sidebar-left="closed"\] \[data-sidebar-body="left"\],\s*html\[data-sidebar-right="closed"\] \[data-sidebar-body="right"\] \{\s*display: none;/);
});

test("the root layout runs the sidebar script in <head>, and does not render the attributes itself", () => {
  const layout = source("app/layout.tsx");
  assert.match(layout, /<head>[\s\S]*<script dangerouslySetInnerHTML=\{\{ __html: SIDEBAR_INIT_SCRIPT \}\} \/>[\s\S]*<\/head>/);
  // React would write the server value back on a Strict Mode remount and open a closed sidebar.
  assert.doesNotMatch(layout, /data-sidebar-(left|right)=/);
});
