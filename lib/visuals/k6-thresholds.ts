/**
 * The data behind the k6 thresholds visual (components/visuals/K6ThresholdsStage.tsx).
 *
 * One sample run: 3 VUs for 30 seconds, one request each second, so 90 request times in ms
 * (the shape of the page's abortOnFail script). The numbers are made up by a seeded generator,
 * not measured. A threshold `p(99) < limit` is judged on these samples. The page says that
 * k6 exits with code 0 when all thresholds pass and with code 99 when one fails.
 */

export type Sample = {
  /** Seconds from the start of the run, 0 (exclusive) to 30 (inclusive). */
  t: number;
  /** The request time in milliseconds. */
  ms: number;
};

export const DURATION_S = 30;
export const VUS = 3;
export const SAMPLE_COUNT = DURATION_S * VUS;
/** The limit of the page's main example: `p(99)<500`. */
export const DEFAULT_LIMIT_MS = 500;
export const LIMIT_MIN_MS = 100;
export const LIMIT_MAX_MS = 800;
export const LIMIT_STEP_MS = 10;
/** The impossible limit of the page's abortOnFail script: `p(99)<1`. */
export const ABORT_LIMIT_MS = 1;
/** `delayAbortEval: '5s'` of the same script. */
export const DELAY_ABORT_EVAL_S = 5;
export const EXIT_PASS = 0;
export const EXIT_FAIL = 99;

/** A small deterministic generator (mulberry32), so the sample is the same on every visit. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const SAMPLES: readonly Sample[] = (() => {
  const next = mulberry32(6);
  return Array.from({ length: SAMPLE_COUNT }, (_, i) => {
    const r = next();
    // Mostly 120 to 300 ms, a few slow ones, and a slow drift as the run goes on.
    const slow = r > 0.93 ? 140 + next() * 120 : 0;
    const ms = Math.round(120 + r * 180 + (i / SAMPLE_COUNT) * 60 + slow);
    return { t: Math.floor(i / VUS) + 1, ms };
  });
})();

/** The percentile `p` (0 to 100) of a list of numbers, with linear steps between ranks. */
export function percentile(values: readonly number[], p: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = (p / 100) * (sorted.length - 1);
  const low = Math.floor(index);
  const high = Math.ceil(index);
  return sorted[low] + (sorted[high] - sorted[low]) * (index - low);
}

/** p(99) of the samples that arrived up to second `t`, as a whole number of ms. */
export function p99Upto(t: number): number {
  return Math.round(
    percentile(
      SAMPLES.filter((s) => s.t <= t).map((s) => s.ms),
      99,
    ),
  );
}

export const P99_FINAL = p99Upto(DURATION_S);

export type Verdict = { value: number; limit: number; pass: boolean; exitCode: number };

/** The verdict of `p(99) < limit`, judged on the samples up to second `t` (the end of the run by default). */
export function verdictAt(limit: number, t: number = DURATION_S): Verdict {
  const value = p99Upto(t);
  const pass = value < limit;
  return { value, limit, pass, exitCode: pass ? EXIT_PASS : EXIT_FAIL };
}

/** The limit that the slider can reach, clamped to its range and step. */
export function clampLimit(limit: number): number {
  const stepped = Math.round(limit / LIMIT_STEP_MS) * LIMIT_STEP_MS;
  return Math.min(LIMIT_MAX_MS, Math.max(LIMIT_MIN_MS, stepped));
}

/**
 * With abortOnFail, the second at which k6 stops the run, or null when it never does.
 * k6 first evaluates the limit after `delay` seconds; here it then looks again each second.
 */
export function abortSecond(limit: number, delay: number = DELAY_ABORT_EVAL_S): number | null {
  for (let t = delay; t <= DURATION_S; t++) {
    if (!verdictAt(limit, t).pass) return t;
  }
  return null;
}

/** The p(99) of the run so far, second by second. */
export function runningP99(): readonly { t: number; value: number }[] {
  return Array.from({ length: DURATION_S }, (_, i) => ({ t: i + 1, value: p99Upto(i + 1) }));
}
