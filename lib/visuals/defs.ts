/**
 * The text of the animated visuals, one definition for each topic. A definition has no code
 * and no JSX, so `node --test` can load it (tests/visuals.test.ts). The picture of each visual
 * lives in components/visuals/, keyed by `id`.
 */

export type Text = { en: string; bn: string };

export type VisualStep = {
  title: Text;
  /** The caption: one idea, in plain words. */
  body: Text;
};

export type VisualDef = {
  id: string;
  title: Text;
  /** One line: what the reader will see. */
  promise: Text;
  /** Minutes to play it through. */
  minutes: number;
  steps: readonly VisualStep[];
  /** What the reader has seen when the last step ends. */
  recap: Text;
};

import { DEF as availability } from "./def-availability.ts";
import { DEF as capTheorem } from "./def-cap-theorem.ts";
import { DEF as caching } from "./def-caching.ts";
import { DEF as circuitBreaker } from "./def-circuit-breaker.ts";
import { DEF as consistentHashing } from "./def-consistent-hashing.ts";
import { DEF as dns } from "./def-dns.ts";
import { DEF as idempotency } from "./def-idempotency.ts";
import { DEF as k6Thresholds } from "./def-k6-thresholds.ts";
import { DEF as loadBalancer } from "./def-load-balancer.ts";
import { DEF as rateLimiting } from "./def-rate-limiting.ts";
import { DEF as sharding } from "./def-sharding.ts";

/**
 * Every visual, by id. To add one: write `lib/visuals/def-<id>.ts` (it exports `DEF`) and add it here.
 * A def file imports only the types of this file, so there is no import cycle at run time.
 */
const ALL: readonly VisualDef[] = [availability, capTheorem, caching, circuitBreaker, consistentHashing, dns, idempotency, k6Thresholds, loadBalancer, rateLimiting, sharding];

export const VISUAL_DEFS: Readonly<Record<string, VisualDef>> = Object.fromEntries(ALL.map((def) => [def.id, def]));

export function visualDef(id: string): VisualDef {
  const def = VISUAL_DEFS[id];
  if (!def) throw new Error(`No visual definition with id "${id}"`);
  return def;
}
