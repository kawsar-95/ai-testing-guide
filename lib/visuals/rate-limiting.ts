/**
 * The data behind the rate-limiting visual (components/visuals/RateLimitingStage.tsx).
 *
 * A token bucket: the bucket holds at most `limit` tokens. Each request takes one token. With no
 * token left, the request gets 429. Tokens come back at a steady rate, `limit` for each window.
 * The default is the page's example: 3 requests in 5 minutes. All numbers on the chips come from
 * these rules (tests/visual-rate-limiting.test.ts).
 */

export type Outcome = "ok" | "429";

/** The time window of the page's example: 5 minutes. */
export const WINDOW_S = 300;
/** The limit of the page's example: 3 requests in the window. */
export const DEFAULT_LIMIT = 3;
/** How many requests arrive in the burst. */
export const BURST = 5;
export const MIN_LIMIT = 1;
export const MAX_LIMIT = 8;

/** Seconds that one token needs to come back. */
export function refillSeconds(limit: number): number {
  return WINDOW_S / limit;
}

/** The answer to each request of a burst that meets a full bucket. */
export function runBurst(limit: number, burst: number = BURST): { results: readonly Outcome[]; passed: number; rejected: number; tokensLeft: number } {
  let tokens = limit;
  const results: Outcome[] = [];
  for (let i = 0; i < burst; i += 1) {
    if (tokens >= 1) {
      tokens -= 1;
      results.push("ok");
    } else {
      results.push("429");
    }
  }
  const passed = results.filter((r) => r === "ok").length;
  return { results, passed, rejected: burst - passed, tokensLeft: tokens };
}

/** Whole tokens in the bucket after `seconds` of refill. The bucket never holds more than `limit`. */
export function tokensAfter(limit: number, tokens: number, seconds: number): number {
  return Math.min(limit, Math.floor(tokens + seconds / refillSeconds(limit) + 1e-9));
}

/** How long a client with an empty bucket must wait for one token, in whole seconds. */
export function retryAfterSeconds(limit: number): number {
  return Math.ceil(refillSeconds(limit));
}

export type Scene = {
  limit: number;
  tokens: number;
  /** The answers to show, one for each request of the burst that already has an answer. */
  results: readonly Outcome[];
  /** True once the burst has arrived. */
  burstHere: boolean;
  /** Seconds waited since the burst. */
  waited: number;
};

export const STEP_COUNT = 7;

/** What the stage shows in each step. The last step uses the limit that the slider sets. */
export function sceneFor(step: number, limit: number = DEFAULT_LIMIT): Scene {
  const run = runBurst(limit);
  const wait = retryAfterSeconds(limit);
  const none: readonly Outcome[] = [];
  switch (step) {
    case 0:
      return { limit, tokens: limit, results: none, burstHere: false, waited: 0 };
    case 1:
      return { limit, tokens: limit, results: none, burstHere: true, waited: 0 };
    case 2:
      return { limit, tokens: run.tokensLeft, results: run.results.filter((r) => r === "ok"), burstHere: true, waited: 0 };
    case 3:
      return { limit, tokens: run.tokensLeft, results: run.results, burstHere: true, waited: 0 };
    case 4:
      return { limit, tokens: tokensAfter(limit, run.tokensLeft, wait), results: run.results, burstHere: true, waited: wait };
    case 5:
      return { limit, tokens: tokensAfter(limit, run.tokensLeft, WINDOW_S), results: none, burstHere: false, waited: WINDOW_S };
    default:
      return { limit, tokens: run.tokensLeft, results: run.results, burstHere: true, waited: 0 };
  }
}
