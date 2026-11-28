/** The pure rules of the pub-sub visual: fan-out, one consumer down, a lost ack, and the direct (no broker) count. */

export const STEP_COUNT = 7;
export const DEFAULT_SUBS = 3;
export const MIN_SUBS = 1;
export const MAX_SUBS = 6;
/** The last step has the slider. */
export const LIVE_STEP = 6;
/** The subscription that is down in step 3 and loses an ack in step 4 (the email one). */
export const EMAIL = 1;

/** The three subscriptions of the exam platform example. More ones are plain numbers. */
export const NAMES = [
  { en: "grading", bn: "গ্রেডিং" },
  { en: "email", bn: "ইমেইল" },
  { en: "analytics", bn: "অ্যানালিটিক্স" },
] as const;

export type Scene = {
  /** Subscriptions drawn (0 before they are attached). */
  subs: number;
  /** Is the topic (the broker) on the stage? */
  broker: boolean;
  /** Does the publisher send straight to each consumer? */
  direct: boolean;
  /** Messages the publisher sends. */
  publisherSends: number;
  /** Copies that the topic makes, one for each subscription. */
  copies: number;
  /** Deliveries that each subscription gets (a redelivery adds one). */
  deliveries: readonly number[];
  /** Subscriptions that sent their ack. */
  acked: number;
  /** Index of the subscription that is down, or -1. */
  down: number;
  /** Index of the subscription that lost its ack, or -1. */
  lostAck: number;
};

export function clampSubs(value: number): number {
  return Math.min(MAX_SUBS, Math.max(MIN_SUBS, Math.round(value)));
}

/** With a plain queue per consumer the publisher must send once for each consumer. */
export function directSends(consumers: number): number {
  return consumers;
}

/** With a topic the publisher sends one message, whatever the number of subscriptions. */
export function brokerSends(): number {
  return 1;
}

/** Each subscription gets its own copy of the message. */
export function fanOut(subs: number): number[] {
  return Array.from({ length: subs }, () => 1);
}

/** A lost ack makes the message arrive again at that subscription. */
export function withLostAck(deliveries: readonly number[], index: number): number[] {
  return deliveries.map((n, i) => (i === index ? n + 1 : n));
}

export function duplicates(deliveries: readonly number[]): number {
  return deliveries.reduce((sum, n) => sum + Math.max(0, n - 1), 0);
}

export function totalDeliveries(deliveries: readonly number[]): number {
  return deliveries.reduce((sum, n) => sum + n, 0);
}

/** The scene of a step. `subs` only matters on the last step (the slider). */
export function sceneFor(step: number, subs: number = DEFAULT_SUBS): Scene {
  const base = { broker: true, direct: false, down: -1, lostAck: -1 };
  const n = DEFAULT_SUBS;
  if (step <= 0) return { ...base, subs: 0, publisherSends: 1, copies: 0, deliveries: [], acked: 0 };
  if (step === 1) return { ...base, subs: n, publisherSends: 1, copies: 0, deliveries: [], acked: 0 };
  if (step === 2) return { ...base, subs: n, publisherSends: 1, copies: n, deliveries: fanOut(n), acked: n };
  if (step === 3) return { ...base, subs: n, publisherSends: 1, copies: n, deliveries: fanOut(n), acked: n - 1, down: EMAIL };
  if (step === 4) {
    const d = withLostAck(fanOut(n), EMAIL);
    return { ...base, subs: n, publisherSends: 1, copies: n, deliveries: d, acked: n - 1, lostAck: EMAIL };
  }
  if (step === 5) return { broker: false, direct: true, down: -1, lostAck: -1, subs: n, publisherSends: directSends(n), copies: 0, deliveries: fanOut(n), acked: n };
  const m = clampSubs(subs);
  return { ...base, subs: m, publisherSends: brokerSends(), copies: m, deliveries: fanOut(m), acked: m };
}
