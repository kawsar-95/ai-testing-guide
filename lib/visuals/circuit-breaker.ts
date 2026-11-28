/**
 * The data and rules behind the circuit-breaker visual (components/visuals/CircuitBreakerStage.tsx).
 *
 * One call arrives at each tick. The breaker is a small state machine with three states
 * (Closed, Open, Half-Open). The service is broken for some ticks. The numbers on the chips come
 * from a real run of these rules (tests/visual-circuit-breaker.test.ts).
 */

export type BreakerState = "closed" | "open" | "half-open";

/**
 * What happened to one call:
 * - ok: the call reached the service and worked
 * - fail: the call reached the service and failed
 * - rejected: the breaker was Open, so the call failed at once and never reached the service
 * - trial-ok / trial-fail: a trial call in Half-Open
 */
export type Outcome = "ok" | "fail" | "rejected" | "trial-ok" | "trial-fail";

export type Tick = {
  index: number;
  outcome: Outcome;
  /** The state after this call was handled. */
  state: BreakerState;
  /** Failures in a row after this call (counted in Closed). */
  failRun: number;
  reachedService: boolean;
};

export const CONFIG = {
  /** Failures in a row that open the breaker. */
  threshold: 3,
  /** Calls that arrive while the time-out timer runs. */
  openTicks: 4,
  /** Successful trial calls in a row that close the breaker. */
  successNeeded: 2,
  /** The service breaks at this tick... */
  brokenFrom: 3,
  /** ...and works again from this tick. */
  fixedAt: 14,
  /** The length of the call stream. */
  total: 17,
} as const;

export function simulate(broken: boolean, total: number = CONFIG.total): readonly Tick[] {
  const ticks: Tick[] = [];
  let state: BreakerState = "closed";
  let failRun = 0;
  let openLeft = 0;
  let trialWins = 0;
  for (let i = 0; i < total; i++) {
    const serviceDown = broken && i >= CONFIG.brokenFrom && i < CONFIG.fixedAt;
    let outcome: Outcome;
    let reached = true;
    if (state === "open") {
      outcome = "rejected";
      reached = false;
      openLeft -= 1;
      if (openLeft === 0) {
        state = "half-open";
        trialWins = 0;
      }
    } else if (state === "half-open") {
      if (serviceDown) {
        outcome = "trial-fail";
        state = "open";
        openLeft = CONFIG.openTicks;
      } else {
        outcome = "trial-ok";
        trialWins += 1;
        if (trialWins >= CONFIG.successNeeded) {
          state = "closed";
          failRun = 0;
        }
      }
    } else if (serviceDown) {
      outcome = "fail";
      failRun += 1;
      if (failRun >= CONFIG.threshold) {
        state = "open";
        openLeft = CONFIG.openTicks;
      }
    } else {
      outcome = "ok";
      failRun = 0;
    }
    ticks.push({ index: i, outcome, state, failRun, reachedService: reached });
  }
  return ticks;
}

/** How many calls have been handled at the end of each step. */
export const STEP_TICKS: readonly number[] = [3, 5, 6, 9, 11, 16, 17];

export type Scene = {
  ticks: readonly Tick[];
  state: BreakerState;
  failRun: number;
  reached: number;
  rejected: number;
};

export function sceneFor(step: number, broken = true): Scene {
  const upto = STEP_TICKS[Math.min(Math.max(step, 0), STEP_TICKS.length - 1)] ?? 0;
  const ticks = simulate(broken).slice(0, upto);
  const last = ticks[ticks.length - 1];
  return {
    ticks,
    state: last ? last.state : "closed",
    failRun: last ? last.failRun : 0,
    reached: ticks.filter((t) => t.reachedService).length,
    rejected: ticks.filter((t) => t.outcome === "rejected").length,
  };
}
