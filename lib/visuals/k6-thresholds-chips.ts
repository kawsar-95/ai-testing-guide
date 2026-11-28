import type { Chip } from "./chips.ts";
import {
  ABORT_LIMIT_MS,
  DEFAULT_LIMIT_MS,
  DURATION_S,
  SAMPLE_COUNT,
  abortSecond,
  clampLimit,
  verdictAt,
} from "./k6-thresholds.ts";

const mark = (pass: boolean) => (pass ? "✓" : "✗");

/**
 * The live numbers of each step, from the same rules that the stage draws.
 * `live` is the limit in ms that the slider sets (the stage calls onLive with it).
 */
export function k6ThresholdsChips(step: number, live: unknown): readonly Chip[] {
  const limit = clampLimit(typeof live === "number" && Number.isFinite(live) ? live : DEFAULT_LIMIT_MS);
  const v = verdictAt(limit);
  const p99: Chip = { label: { en: "p(99)", bn: "p(99)" }, value: `${v.value} ms` };
  const requests: Chip = { label: { en: "Requests", bn: "Request" }, value: String(SAMPLE_COUNT) };
  const limitChip: Chip = { label: { en: "Limit", bn: "Limit" }, value: `${limit} ms` };
  const verdict: Chip = { label: { en: "Verdict", bn: "Verdict" }, value: mark(v.pass) };
  if (step === 0) return [requests, { label: { en: "Run", bn: "Run" }, value: `${DURATION_S} s` }];
  if (step === 1) return [p99, requests];
  if (step === 2) return [p99, limitChip, verdict];
  if (step === 3) return [p99, limitChip, verdict];
  if (step === 4) return [{ label: { en: "Judged at", bn: "বিচার হয়" }, value: `${DURATION_S} s` }, verdict];
  if (step === 5) {
    const at = abortSecond(ABORT_LIMIT_MS) ?? DURATION_S;
    return [
      { label: { en: "Limit", bn: "Limit" }, value: `${ABORT_LIMIT_MS} ms` },
      { label: { en: "Stopped at", bn: "থেমেছে" }, value: `${at} s` },
      { label: { en: "Run lasted", bn: "run চলেছে" }, value: `${at} / ${DURATION_S} s` },
    ];
  }
  return [limitChip, { label: { en: "Exit code", bn: "Exit code" }, value: `exit ${v.exitCode}` }];
}
