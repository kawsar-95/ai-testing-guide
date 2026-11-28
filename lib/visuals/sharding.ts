/**
 * The data behind the sharding visual (components/visuals/ShardingStage.tsx).
 *
 * The page's own example: a learning platform stores the results of test runs. The same 24 new
 * runs are sent to 4 shards with two shard keys: the run date (ranged) and a hash of the run ID.
 * Every number on the chips comes from running these rules (tests/visual-sharding.test.ts).
 */

export type Strategy = "range" | "hash";

export const SHARD_COUNT = 4;
export const RUN_COUNT = 24;
/** The newest runs: the ones a report of "all runs this week" reads. */
export const WEEK_COUNT = 7;

export type Run = {
  id: number;
  /** The day number of the run. Every new run has a newer day than the one before. */
  day: number;
};

const FIRST_DAY = 100;
export const RUNS: readonly Run[] = Array.from({ length: RUN_COUNT }, (_, i) => ({ id: i + 1, day: FIRST_DAY + i }));

/** The ranged key: the shard of each range. A range has an inclusive lower limit, so day 75 and later is the top range. */
export const RANGE_LIMITS: readonly number[] = [25, 50, 75];

/** A small deterministic hash (FNV-1a, 32 bit) of the run ID. */
export function hashOf(id: number): number {
  let h = 0x811c9dc5;
  for (const ch of `run-${id}`) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** The shard (0-based) of a run under a strategy. */
export function shardOf(run: Run, strategy: Strategy, shards = SHARD_COUNT): number {
  if (strategy === "hash") return hashOf(run.id) % shards;
  return RANGE_LIMITS.filter((limit) => run.day >= limit).length;
}

export function assignment(strategy: Strategy): number[] {
  return RUNS.map((run) => shardOf(run, strategy));
}

/** The number of runs on each shard. */
export function counts(strategy: Strategy): number[] {
  const out = Array.from({ length: SHARD_COUNT }, () => 0);
  for (const s of assignment(strategy)) out[s] += 1;
  return out;
}

/** The share, in whole percent, of all runs held by the busiest shard. */
export function hotLoadPercent(strategy: Strategy): number {
  return Math.round((Math.max(...counts(strategy)) / RUN_COUNT) * 100);
}

/** The index of the busiest shard. */
export function hotShard(strategy: Strategy): number {
  const c = counts(strategy);
  return c.indexOf(Math.max(...c));
}

/** Is the busiest shard far above an even share? True when it holds at least twice its fair part. */
export function isHot(strategy: Strategy): boolean {
  return Math.max(...counts(strategy)) >= (2 * RUN_COUNT) / SHARD_COUNT;
}

/** The runs read by "all runs this week" (the newest ones). */
export function weekIndexes(): number[] {
  return RUNS.map((_, i) => i).filter((i) => i >= RUN_COUNT - WEEK_COUNT);
}

/** The shards that "all runs this week" must ask. */
export function weekShards(strategy: Strategy): number[] {
  const a = assignment(strategy);
  return [...new Set(weekIndexes().map((i) => a[i]))].sort((x, y) => x - y);
}
