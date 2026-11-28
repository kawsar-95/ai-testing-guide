import type { Chip } from "./chips.ts";
import { SHARD_COUNT, RUN_COUNT, counts, hotLoadPercent, weekShards } from "./sharding.ts";
import type { Strategy } from "./sharding.ts";

const DEFAULT_STRATEGY: Strategy = "range";

const KEY_EN = { range: "Date key", hash: "Hash key" } as const;
const KEY_BN = { range: "ডেট কী", hash: "হ্যাশ কী" } as const;

/** The live numbers of each step. `live` is the shard key the stage shows: "range" or "hash". */
export function shardingChips(step: number, live: unknown): readonly Chip[] {
  const key: Strategy = live === "range" || live === "hash" ? live : DEFAULT_STRATEGY;
  const rows: Chip = { label: { en: "Rows", bn: "সারি" }, value: String(RUN_COUNT) };
  const shards: Chip = { label: { en: "Shards", bn: "শার্ড" }, value: String(step === 0 ? 1 : SHARD_COUNT) };
  if (step <= 1) return [rows, shards];
  if (step === 2) {
    return [{ label: { en: `${KEY_EN[key]}: rows per shard`, bn: `${KEY_BN[key]}: প্রতি শার্ডে সারি` }, value: counts(key).join(" / ") }];
  }
  if (step === 3) {
    return [{ label: { en: `${KEY_EN[key]}: hottest shard`, bn: `${KEY_BN[key]}: সবচেয়ে ব্যস্ত শার্ড` }, value: `${hotLoadPercent(key)} %` }];
  }
  if (step === 4) {
    return [{ label: { en: `${KEY_EN[key]}: shards asked`, bn: `${KEY_BN[key]}: জিজ্ঞেস করা শার্ড` }, value: `${weekShards(key).length} / ${SHARD_COUNT}` }];
  }
  // Step 5 compares both keys side by side: that is the lesson.
  return [
    { label: { en: "Date key: shards asked", bn: "ডেট কী: জিজ্ঞেস করা শার্ড" }, value: `${weekShards("range").length} / ${SHARD_COUNT}` },
    { label: { en: "Hash key: shards asked", bn: "হ্যাশ কী: জিজ্ঞেস করা শার্ড" }, value: `${weekShards("hash").length} / ${SHARD_COUNT}` },
    { label: { en: "Date key: hottest shard", bn: "ডেট কী: সবচেয়ে ব্যস্ত শার্ড" }, value: `${hotLoadPercent("range")} %` },
    { label: { en: "Hash key: hottest shard", bn: "হ্যাশ কী: সবচেয়ে ব্যস্ত শার্ড" }, value: `${hotLoadPercent("hash")} %` },
  ];
}
