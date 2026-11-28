/** Data and rules of the tcp-udp visual. Pure and deterministic. */

export const PACKETS = 10;
export const MIN_LOSS = 0;
export const MAX_LOSS = 50;
export const LOSS_STEP = 10;
export const DEFAULT_LOSS = 20;
export const STEP_COUNT = 7;
/** SYN, SYN+ACK, ACK: four steps become three messages. */
export const HANDSHAKE = ["SYN", "SYN+ACK", "ACK"] as const;
/** The first step that uses the slider. */
export const FIRST_LIVE_STEP = 3;

/** The order in which packets are lost as the slider goes up (fixed, so the picture is repeatable). */
const LOSS_ORDER = [3, 7, 1, 5, 9, 0, 2, 4, 6, 8] as const;

export function clampLoss(loss: number): number {
  if (!Number.isFinite(loss)) return DEFAULT_LOSS;
  return Math.min(MAX_LOSS, Math.max(MIN_LOSS, Math.round(loss / LOSS_STEP) * LOSS_STEP));
}

/** How many of the packets are lost at this loss percent. */
export function lostCount(loss: number): number {
  return Math.round((PACKETS * clampLoss(loss)) / 100);
}

/** Which packets (by number, 0-based) are lost on the first send. */
export function lostPackets(loss: number): readonly number[] {
  return LOSS_ORDER.slice(0, lostCount(loss)).slice().sort((a, b) => a - b);
}

export type Fate = "arrived" | "lost" | "resent";

/** TCP: a lost packet is detected by its sequence number and sent again, so all arrive in order. */
export function runTcp(loss: number) {
  const lost = lostPackets(loss);
  const fates: Fate[] = Array.from({ length: PACKETS }, (_, i) => (lost.includes(i) ? "resent" : "arrived"));
  return { fates, resent: lost.length, delivered: PACKETS, firstSend: PACKETS - lost.length };
}

/** UDP: no repair, so a lost packet stays a gap. */
export function runUdp(loss: number) {
  const lost = lostPackets(loss);
  const fates: Fate[] = Array.from({ length: PACKETS }, (_, i) => (lost.includes(i) ? "lost" : "arrived"));
  return { fates, gaps: lost.length, delivered: PACKETS - lost.length };
}

/** What the TCP lane shows at a step: the first send (lost shown as lost) or after the resend. */
export function tcpFatesAt(step: number, loss: number): readonly (Fate | "none")[] {
  const lost = lostPackets(loss);
  if (step < 2) return Array.from({ length: PACKETS }, () => "none");
  if (step === 2) return Array.from({ length: PACKETS }, () => "arrived");
  if (step === 3) return Array.from({ length: PACKETS }, (_, i) => (lost.includes(i) ? "lost" : "arrived"));
  return runTcp(loss).fates;
}

export function udpFatesAt(step: number, loss: number): readonly (Fate | "none")[] {
  if (step < 5) return Array.from({ length: PACKETS }, () => "none");
  return runUdp(loss).fates;
}
