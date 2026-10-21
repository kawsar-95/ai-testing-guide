/**
 * The installable app: the web manifest and the service worker. Every URL
 * starts with the basePath ("" locally, "/<repo-name>" on GitHub Pages).
 */
import type { MetadataRoute } from "next";
import { FUNDAMENTALS_ROUTES } from "./fundamentals/chapters.ts";
import { LINUX_ROUTES } from "./linux/stages.ts";
import { PAGES } from "./nav.ts";
import { SYSTEM_DESIGN_ROUTES } from "./system-design/cases.ts";
import { ARCHITECTURE_ROUTES } from "./architecture/topics.ts";

const ICONS = [
  { file: "icon-192.png", sizes: "192x192", purpose: "any" },
  { file: "icon-512.png", sizes: "512x512", purpose: "any" },
  { file: "icon-maskable-512.png", sizes: "512x512", purpose: "maskable" },
] as const;

/** The colors of the dark theme (globals.css): the splash screen and the title bar. */
const BACKGROUND = "#0e1115";

export function webManifest(
  basePath: string,
  site: { name: string; shortName: string; description: string },
): MetadataRoute.Manifest {
  return {
    id: `${basePath}/`,
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: BACKGROUND,
    theme_color: BACKGROUND,
    icons: ICONS.map((icon) => ({
      src: `${basePath}/icons/${icon.file}`,
      sizes: icon.sizes,
      type: "image/png",
      purpose: icon.purpose,
    })),
  };
}

/** The 404 page. The service worker shows it for a page that is not in the cache when the reader is offline. */
export const offlinePage = (basePath: string) => `${basePath}/404.html`;

/** The URLs that the service worker caches at install, so that every page opens offline. */
export function precacheUrls(basePath: string): string[] {
  return [
    `${basePath}/`,
    ...PAGES.map((page) => `${basePath}${page.href}`),
    ...LINUX_ROUTES.map((route) => `${basePath}${route}`),
    ...FUNDAMENTALS_ROUTES.map((route) => `${basePath}${route}`),
    ...SYSTEM_DESIGN_ROUTES.map((route) => `${basePath}${route}`),
    ...ARCHITECTURE_ROUTES.map((route) => `${basePath}${route}`),
    offlinePage(basePath),
    `${basePath}/search-index.json`,
    `${basePath}/manifest.webmanifest`,
    ...ICONS.map((icon) => `${basePath}/icons/${icon.file}`),
  ];
}

/**
 * Matches the files that a page's HTML uses: the hashed build files (JS, CSS,
 * fonts) and the images in /images/. The service worker caches them with the
 * pages. The match starts after a quote, a parenthesis, a space, or a comma, so
 * a link to another site does not match. It stops at a quote, a space, a
 * parenthesis, or the backslash of an escaped string in a script.
 */
export function assetPattern(basePath: string): string {
  return `(?<=["'(\\s,])${basePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/(?:_next/static|images)/[^"'\\s()\\\\]+`;
}

/**
 * The source of /sw.js. The site is offline first.
 * - Install: cache the pages of precacheUrls and the files that they use.
 * - /_next/static/: cache first. The file names have a content hash.
 * - Other requests: the cache answers first, and the worker updates the cache from the
 *   network in the background (stale-while-revalidate). The query string is not part of
 *   the cache key, because the files are static. A request that is not in the cache goes
 *   to the network. Offline, a page that is not in the cache gets the 404 page.
 * - Activate: delete the caches of older versions. A new build has a new /sw.js,
 *   so its install caches every page again.
 */
export function serviceWorkerSource(basePath: string, version: string): string {
  const constants = {
    CACHE: `site-${version}`,
    BASE: basePath,
    PRECACHE: precacheUrls(basePath),
    OFFLINE: offlinePage(basePath),
    ASSET: assetPattern(basePath),
  };
  return `${Object.entries(constants)
    .map(([name, value]) => `const ${name} = ${JSON.stringify(value)};`)
    .join("\n")}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const assets = new Set();
    await Promise.allSettled(PRECACHE.map(async (url) => {
      const response = await fetch(url, { cache: "no-cache" });
      if (!response.ok) return;
      if ((response.headers.get("content-type") || "").includes("text/html")) {
        for (const match of (await response.clone().text()).matchAll(new RegExp(ASSET, "g"))) assets.add(match[0]);
      }
      await cache.put(url, response);
    }));
    await Promise.allSettled([...assets].map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith("site-") && key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin || !url.pathname.startsWith(BASE + "/")) return;
  if (url.pathname.startsWith(BASE + "/_next/static/")) event.respondWith(cacheFirst(request));
  else event.respondWith(staleWhileRevalidate(event, url));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) await (await caches.open(CACHE)).put(request, response.clone());
  return response;
}

async function staleWhileRevalidate(event, url) {
  const request = event.request;
  const key = url.origin + url.pathname;
  const network = fetch(request).then(async (response) => {
    if (response.ok) await (await caches.open(CACHE)).put(key, response.clone());
    return response;
  });
  const cached = await caches.match(key, { ignoreSearch: true, ignoreVary: true });
  if (cached) {
    event.waitUntil(network.catch(() => {}));
    return cached;
  }
  try {
    return await network;
  } catch (error) {
    const offline = request.mode === "navigate" && (await caches.match(OFFLINE));
    if (offline) return offline;
    throw error;
  }
}
`;
}
