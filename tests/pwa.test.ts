import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { CHAPTERS, FUNDAMENTALS_ROUTES } from "../lib/fundamentals/chapters.ts";
import { LINUX_ROUTES, STAGES } from "../lib/linux/stages.ts";
import { PAGES } from "../lib/nav.ts";
import { assetPattern, precacheUrls, serviceWorkerSource, webManifest } from "../lib/pwa.ts";

const SITE = { name: "Name", shortName: "Short", description: "Description" };

test("the precache list has the home page, every page, the 404 page, and the search index", () => {
  const urls = precacheUrls("");
  for (const url of ["/", "/404.html", "/search-index.json", ...PAGES.map((page) => page.href)]) {
    assert.ok(urls.includes(url), url);
  }
  assert.equal(new Set(urls).size, urls.length, "no duplicates");
});

test("precacheUrls includes /linux/ and the 12 stage routes", () => {
  assert.equal(STAGES.length, 12);
  assert.equal(LINUX_ROUTES.length, 13);
  for (const basePath of ["", "/repo"]) {
    const urls = precacheUrls(basePath);
    assert.ok(urls.includes(`${basePath}/linux/`));
    for (const stage of STAGES) assert.ok(urls.includes(`${basePath}${stage.href}`), stage.href);
    for (const route of LINUX_ROUTES) assert.ok(urls.includes(`${basePath}${route}`), route);
    assert.equal(new Set(urls).size, urls.length, "no duplicates");
  }
});

test("precacheUrls includes /fundamentals/ and the 11 chapter routes", () => {
  assert.equal(CHAPTERS.length, 11);
  assert.equal(FUNDAMENTALS_ROUTES.length, 12);
  for (const basePath of ["", "/repo"]) {
    const urls = precacheUrls(basePath);
    for (const route of FUNDAMENTALS_ROUTES) assert.ok(urls.includes(`${basePath}${route}`), route);
    assert.equal(new Set(urls).size, urls.length, "no duplicates");
  }
});

test("every precache URL starts with the basePath", () => {
  for (const url of precacheUrls("/repo")) assert.ok(url.startsWith("/repo/"), url);
});

test("the manifest URLs start with the basePath", () => {
  const manifest = webManifest("/repo", SITE);
  assert.equal(manifest.start_url, "/repo/");
  assert.equal(manifest.scope, "/repo/");
  assert.equal(manifest.id, "/repo/");
  for (const icon of manifest.icons ?? []) assert.ok(icon.src.startsWith("/repo/icons/"), icon.src);
});

test("the manifest has a 192 px icon, a 512 px icon, and a maskable icon, and each file exists", () => {
  const icons = webManifest("", SITE).icons ?? [];
  assert.ok(icons.some((icon) => icon.sizes === "192x192" && icon.purpose === "any"));
  assert.ok(icons.some((icon) => icon.sizes === "512x512" && icon.purpose === "any"));
  assert.ok(icons.some((icon) => icon.purpose === "maskable"));
  for (const icon of icons) assert.ok(existsSync(join("public", icon.src)), icon.src);
});

test("the asset pattern finds the build files in HTML and stops at an escaped quote", () => {
  const html =
    '<script src="/repo/_next/static/chunks/a-1.js"></script>' +
    '<link href="/repo/_next/static/css/b.css"/>' +
    '<script>self.__next_f.push([1,"\\"/repo/_next/static/chunks/c.js\\""])</script>' +
    '<script src="/other/_next/static/chunks/d.js"></script>';
  const found = [...html.matchAll(new RegExp(assetPattern("/repo"), "g"))].map((match) => match[0]);
  assert.deepEqual(found, [
    "/repo/_next/static/chunks/a-1.js",
    "/repo/_next/static/css/b.css",
    "/repo/_next/static/chunks/c.js",
  ]);
});

test("the service worker source is valid JavaScript and has the cache version", () => {
  const source = serviceWorkerSource("/repo", "v1");
  assert.doesNotThrow(() => new Function(source));
  assert.ok(source.includes('const CACHE = "site-v1";'));
  assert.ok(source.includes('const BASE = "/repo";'));
});

test("the asset pattern finds the images of a page and skips an external URL", () => {
  const html =
    '<img src="/repo/images/linux/a.webp"/><a href="/repo/images/linux/a.webp">full</a>' +
    '<a href="https://example.com/repo/images/b.png">other site</a>';
  const found = [...html.matchAll(new RegExp(assetPattern("/repo"), "g"))].map((match) => match[0]);
  assert.deepEqual(found, ["/repo/images/linux/a.webp", "/repo/images/linux/a.webp"]);
});

/**
 * Runs the source of /sw.js with a fake `caches` and a fake `fetch`. `network`
 * maps a URL to the body that the server sends. With `online: false`, every fetch fails.
 */
function fakeWorker(network: Record<string, string>) {
  const store = new Map<string, Response>();
  const handlers: Record<string, (event: unknown) => void> = {};
  const state = { online: true, fetched: [] as string[] };
  const keyOf = (request: Request | string, ignoreSearch = false) => {
    const url = new URL(typeof request === "string" ? request : request.url, "https://site.test");
    return ignoreSearch ? url.origin + url.pathname : url.href;
  };
  const cache = {
    put: async (request: Request | string, response: Response) => void store.set(keyOf(request), response),
    add: async (url: string) => void store.set(keyOf(url), await fakeFetch(url)),
  };
  const caches = {
    open: async () => cache,
    keys: async () => [],
    delete: async () => true,
    match: async (request: Request | string, options: { ignoreSearch?: boolean } = {}) => {
      const wanted = keyOf(request, options.ignoreSearch);
      for (const [key, response] of store) {
        if (keyOf(key, options.ignoreSearch) === wanted) return response.clone();
      }
      return undefined;
    },
  };
  async function fakeFetch(request: Request | string) {
    const url = new URL(typeof request === "string" ? request : request.url, "https://site.test");
    state.fetched.push(url.pathname);
    if (!state.online) throw new TypeError("Failed to fetch");
    const body = network[url.pathname];
    return body === undefined
      ? new Response("missing", { status: 404 })
      : new Response(body, { headers: { "content-type": url.pathname.endsWith("/") ? "text/html" : "text/plain" } });
  }
  const self = {
    location: { origin: "https://site.test" },
    clients: { claim: async () => {} },
    skipWaiting: async () => {},
    addEventListener: (type: string, handler: (event: unknown) => void) => void (handlers[type] = handler),
  };
  new Function("self", "caches", "fetch", serviceWorkerSource("", "v1"))(self, caches, fakeFetch);

  async function install() {
    const waits: Promise<unknown>[] = [];
    handlers.install({ waitUntil: (promise: Promise<unknown>) => waits.push(promise) });
    await Promise.all(waits);
  }
  /** Sends a request and returns the body of the answer, and waits for the background work. */
  async function get(path: string, mode: RequestMode = "navigate") {
    let answer: Promise<Response> | undefined;
    const waits: Promise<unknown>[] = [];
    handlers.fetch({
      request: { url: `https://site.test${path}`, method: "GET", mode },
      respondWith: (promise: Promise<Response>) => (answer = promise),
      waitUntil: (promise: Promise<unknown>) => waits.push(promise),
    });
    const body = answer ? await (await answer).text() : undefined;
    await Promise.all(waits);
    return body;
  }
  return { state, network, store, install, get, has: (path: string) => store.has(keyOf(path)) };
}

test("the service worker precaches the images that a page uses", async () => {
  const worker = fakeWorker({ "/": '<img src="/images/linux/a.webp">', "/images/linux/a.webp": "image" });
  await worker.install();
  assert.ok(worker.has("/images/linux/a.webp"));
});

test("a cached page opens from the cache, and the cache gets the new version in the background", async () => {
  const worker = fakeWorker({ "/": "old home" });
  await worker.install();
  worker.network["/"] = "new home";
  assert.equal(await worker.get("/"), "old home");
  assert.equal(await worker.get("/"), "new home");
});

test("a cached page opens offline, also with a query string", async () => {
  const worker = fakeWorker({ "/": "home" });
  await worker.install();
  worker.state.online = false;
  assert.equal(await worker.get("/?q=hooks"), "home");
});

test("an RSC payload comes from the cache, also with a new _rsc value", async () => {
  const worker = fakeWorker({ "/": "home", "/linux/__next._tree.txt": "tree" });
  await worker.install();
  assert.equal(await worker.get("/linux/__next._tree.txt?_rsc=abc", "cors"), "tree");
  worker.state.online = false;
  assert.equal(await worker.get("/linux/__next._tree.txt?_rsc=xyz", "cors"), "tree");
});

test("offline, a page that is not in the cache gets the 404 page", async () => {
  const worker = fakeWorker({ "/": "home", "/404.html": "not found" });
  await worker.install();
  worker.state.online = false;
  assert.equal(await worker.get("/unknown/"), "not found");
});
