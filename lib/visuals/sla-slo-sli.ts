/**
 * The data behind the sla-slo-sli visual (components/visuals/SlaSloSliStage.tsx).
 *
 * The page's own example: an API with an SLI of successful requests divided by all requests, an SLO
 * of 99.5% over a rolling window of four weeks, and an SLA that promises 99%. The window holds
 * 2 million requests. The slider sets how many requests failed in the window.
 * Percentages are kept in basis points (1% = 100) so the arithmetic stays whole numbers.
 */

export type Zone = "within-slo" | "slo-missed" | "sla-missed";

export const REQUESTS = 2_000_000;
/** SLO 99.5% and SLA 99%, in basis points. */
export const SLO_BP = 9950;
export const SLA_BP = 9900;
/** The bad release of the page: 4,000 failed requests before a rollback. */
export const DEFAULT_FAILED = 4000;
export const MIN_FAILED = 0;
export const MAX_FAILED = 24000;
export const STEP_FAILED = 500;
export const STEP_COUNT = 6;
export const LAST_STEP = 5;

/** The error budget in failed requests: 100% minus the SLO, of all requests. */
export const BUDGET = (REQUESTS * (10000 - SLO_BP)) / 10000;
/** The most failed requests that the SLA still allows. */
export const SLA_LIMIT = (REQUESTS * (10000 - SLA_BP)) / 10000;

export function clampFailed(value: number): number {
  if (!Number.isFinite(value)) return DEFAULT_FAILED;
  return Math.min(MAX_FAILED, Math.max(MIN_FAILED, Math.round(value)));
}

/** The SLI in percent: good requests divided by all requests, three decimals. */
export function sliPercent(failed: number): string {
  const f = clampFailed(failed);
  return (((REQUESTS - f) / REQUESTS) * 100).toFixed(3);
}

export function budgetLeft(failed: number): number {
  return Math.max(0, BUDGET - clampFailed(failed));
}

/** Share of the budget that is used, in whole percent. Above 100 once the budget is gone. */
export function budgetUsedPercent(failed: number): number {
  return Math.round((clampFailed(failed) / BUDGET) * 100);
}

/** Which line is crossed. Meeting a target exactly counts as meeting it. */
export function zoneFor(failed: number): Zone {
  const f = clampFailed(failed);
  if (f > SLA_LIMIT) return "sla-missed";
  if (f > BUDGET) return "slo-missed";
  return "within-slo";
}

export type Scene = {
  failed: number;
  showSlo: boolean;
  showSla: boolean;
  showBudget: boolean;
  zone: Zone;
};

/** What each step shows. Only the last step lets the slider set `failed`. */
export function sceneFor(step: number, failed: number = DEFAULT_FAILED): Scene {
  const f = step === LAST_STEP ? clampFailed(failed) : DEFAULT_FAILED;
  return { failed: f, showSlo: step >= 1, showSla: step >= 2, showBudget: step >= 3, zone: zoneFor(f) };
}
