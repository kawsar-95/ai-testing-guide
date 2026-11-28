import type { Chip } from "./chips.ts";
import { BUDGET, DEFAULT_FAILED, LAST_STEP, MAX_FAILED, MIN_FAILED, REQUESTS, budgetLeft, budgetUsedPercent, clampFailed, sceneFor, sliPercent } from "./sla-slo-sli.ts";

const fmt = (n: number) => n.toLocaleString("en-US");

/**
 * The live numbers of each step, from the same scene that the stage draws.
 * `live` is the failed-request count that the slider sets (a number). Only the last step uses it.
 */
export function slaSloSliChips(step: number, live: unknown): readonly Chip[] {
  const slider = typeof live === "number" && Number.isFinite(live) ? Math.min(MAX_FAILED, Math.max(MIN_FAILED, live)) : DEFAULT_FAILED;
  const scene = sceneFor(step, step === LAST_STEP ? slider : DEFAULT_FAILED);
  const f = clampFailed(scene.failed);
  const sli: Chip = { label: { en: "SLI", bn: "SLI" }, value: `${sliPercent(f)}%` };
  if (step === 0) return [sli, { label: { en: "Requests", bn: "রিকুয়েস্ট" }, value: fmt(REQUESTS) }];
  if (step === 1) return [sli, { label: { en: "SLO", bn: "SLO" }, value: "99.5%" }];
  if (step === 2) return [sli, { label: { en: "SLA", bn: "SLA" }, value: "99%" }];
  if (step === 3) return [{ label: { en: "Error budget", bn: "এরর বাজেট" }, value: fmt(BUDGET) }, { label: { en: "Budget", bn: "বাজেট" }, value: "0.5%" }];
  if (step === 4) {
    return [
      { label: { en: "Failed", bn: "ফেইল" }, value: fmt(f) },
      { label: { en: "Budget used", bn: "বাজেট খরচ" }, value: `${budgetUsedPercent(f)}%` },
      { label: { en: "Budget left", bn: "বাজেট বাকি" }, value: fmt(budgetLeft(f)) },
    ];
  }
  return [
    sli,
    { label: { en: "Failed", bn: "ফেইল" }, value: fmt(f) },
    { label: { en: "Budget used", bn: "বাজেট খরচ" }, value: `${budgetUsedPercent(f)}%` },
    { label: { en: "Budget left", bn: "বাজেট বাকি" }, value: fmt(budgetLeft(f)) },
  ];
}
