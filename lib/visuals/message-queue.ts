/**
 * The data behind the message-queue visual (components/visuals/MessageQueueStage.tsx).
 *
 * A producer (the API) adds jobs to a queue. Each job goes to one consumer (a worker). A burst of
 * jobs waits in the queue and the consumers take them one by one. The page gives one real time:
 * the slow job of the example takes 20 to 30 seconds, so the sample uses 20 s. The burst of 12 jobs
 * is a sample, not a measure of a real system. Every number on a chip comes from these rules
 * (tests/visual-message-queue.test.ts).
 */

/** Seconds that one consumer needs for one job (the page says 20 to 30 s; the sample uses 20). */
export const JOB_S = 20;
/** How many jobs arrive in the burst. */
export const BURST = 12;
export const MIN_CONSUMERS = 1;
export const MAX_CONSUMERS = 6;
/** The consumer count of the slider at the start. */
export const DEFAULT_CONSUMERS = 3;
export const STEP_COUNT = 7;
export const SLIDER_STEP = 4;

export type QueueState = { done: number; active: number; waiting: number };

/** Clamp a consumer count to the slider range, whole numbers only. */
export function clampConsumers(n: number): number {
  return Math.min(MAX_CONSUMERS, Math.max(MIN_CONSUMERS, Math.round(n)));
}

/** Where `total` jobs stand after `seconds`, when `consumers` workers take them from the start. */
export function stateAt(total: number, consumers: number, seconds: number): QueueState {
  const c = clampConsumers(consumers);
  const done = Math.min(total, c * Math.floor(seconds / JOB_S));
  const active = Math.min(c, total - done);
  return { done, active, waiting: total - done - active };
}

/** Seconds until the last job of the burst is done. */
export function drainSeconds(consumers: number, total: number = BURST): number {
  return Math.ceil(total / clampConsumers(consumers)) * JOB_S;
}

/** Age of the oldest waiting message: all jobs came at second 0, so it is the time since then. */
export function oldestAge(state: QueueState, seconds: number): number {
  return state.waiting > 0 ? seconds : 0;
}

export type Scene = {
  /** Jobs in the system (waiting, taken, or done). */
  total: number;
  consumers: number;
  /** Seconds since the burst. */
  seconds: number;
  /** Do the consumers take jobs yet? */
  workersOn: boolean;
  /** One worker crashed: its job went back to the queue after the visibility timeout. */
  crashed: boolean;
  done: number;
  active: number;
  waiting: number;
  oldest: number;
  drain: number;
};

/** The scene of each step. `slider` is the consumer count; only the slider step uses it. */
export function sceneFor(step: number, slider: number = DEFAULT_CONSUMERS): Scene {
  const s = Math.min(STEP_COUNT - 1, Math.max(0, step));
  const consumers = s === SLIDER_STEP ? clampConsumers(slider) : s === 5 ? DEFAULT_CONSUMERS : 1;
  const total = s === 0 ? 1 : BURST;
  const seconds = s === 3 || s === SLIDER_STEP ? 60 : s === 5 ? JOB_S : s === 6 ? 100 : 0;
  const workersOn = s >= 2;
  const crashed = s === 5;
  let state: QueueState = { done: 0, active: 0, waiting: total };
  if (workersOn) state = stateAt(total, consumers, seconds);
  if (crashed) state = { done: state.done, active: state.active - 1, waiting: state.waiting + 1 };
  return {
    total,
    consumers,
    seconds,
    workersOn,
    crashed,
    ...state,
    oldest: oldestAge(state, seconds),
    drain: drainSeconds(consumers, total),
  };
}
