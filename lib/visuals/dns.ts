/**
 * The data behind the DNS visual (components/visuals/DnsStage.tsx).
 *
 * The page names this path: browser, stub resolver, recursive server, then (on a cache miss)
 * a root server, the "com" server, and the "example.com" server. With a cache hit the recursive
 * server answers at once. The times are a sample model (a cost for each link), not measured
 * values. The chips and the stage take every number from these rules.
 */

export type NodeId = "browser" | "stub" | "recursive" | "root" | "tld" | "auth";

export const NODE_IDS: readonly NodeId[] = ["browser", "stub", "recursive", "root", "tld", "auth"];

/** Sample cost, in ms, to reach each node from the one before it on the path. */
export const LINK_MS: Readonly<Record<NodeId, number>> = {
  browser: 0,
  stub: 1,
  recursive: 10,
  root: 30,
  tld: 30,
  auth: 30,
};

export const ANSWER = "203.0.113.10";
/** The TTL of the A record in the page's example, in seconds. */
export const TTL_SECONDS = 86400;

/** The nodes the lookup visits, in order. A cache hit stops at the recursive server. */
export function pathFor(cached: boolean): readonly NodeId[] {
  return cached ? NODE_IDS.slice(0, 3) : NODE_IDS;
}

/** Hops: the links followed from the browser to the node that answers. */
export function hops(cached: boolean): number {
  return pathFor(cached).length - 1;
}

export function totalMs(cached: boolean): number {
  return pathFor(cached).reduce((sum, id) => sum + LINK_MS[id], 0);
}

/** How many nodes of the path the lookup has reached at a step (0 to 6) of the visual. */
export function reachedCount(step: number, cached: boolean): number {
  const path = pathFor(cached).length;
  const byStep = [1, 3, 3, 4, 5, 6, 6];
  return Math.min(byStep[Math.max(0, Math.min(step, 6))] ?? 6, path);
}

/** The time spent so far at a step. */
export function msSoFar(step: number, cached: boolean): number {
  return pathFor(cached)
    .slice(0, reachedCount(step, cached))
    .reduce((sum, id) => sum + LINK_MS[id], 0);
}

export function hopsSoFar(step: number, cached: boolean): number {
  return reachedCount(step, cached) - 1;
}
