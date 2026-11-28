import type { Chip } from "./chips.ts";
import { SERVICE_TICKS, SERVER_COUNT, STEP_ALGORITHM, STEP_TICKS, TOTAL_REQUESTS, longestQueue, simulate } from "./load-balancer.ts";
import type { Algorithm } from "./load-balancer.ts";

const join = (values: readonly number[]) => values.join(" / ");

/**
 * The live numbers of each step, from the same simulation that the stage draws.
 * `live` is the algorithm the learner chose ("round-robin" or "least-connections"); it only
 * matters on steps where the stage lets the learner choose.
 */
export function loadBalancerChips(step: number, live: unknown): readonly Chip[] {
  const at = Math.max(0, Math.min(STEP_TICKS.length - 1, step));
  const choice: Algorithm = live === "least-connections" ? "least-connections" : "round-robin";
  const algorithm = STEP_ALGORITHM[at] ?? choice;
  const sim = simulate(algorithm, STEP_TICKS[at]);
  const name = algorithm === "round-robin" ? { en: "Round Robin", bn: "Round Robin" } : { en: "Least Connections", bn: "Least Connections" };
  const speed: Chip = { label: { en: "Ticks per request", bn: "প্রতি request-এ tick" }, value: join(SERVICE_TICKS) };
  const queue: Chip = { label: { en: "Queue", bn: "Queue" }, value: join(sim.queue) };
  const longest: Chip = { label: { en: "Longest queue", bn: "সবচেয়ে লম্বা queue" }, value: String(longestQueue(sim)) };
  if (at === 0) return [{ label: { en: "Servers", bn: "সার্ভার" }, value: String(SERVER_COUNT) }, speed, { label: { en: "Requests", bn: "Request" }, value: String(TOTAL_REQUESTS) }];
  if (at === 1) return [{ label: { en: "Sent", bn: "পাঠানো" }, value: join(sim.sent) }, queue];
  if (at === 2 || at === 3) return [queue, longest];
  if (at === 4) return [{ label: { en: `Longest queue, ${name.en}`, bn: `সবচেয়ে লম্বা queue, ${name.bn}` }, value: String(longestQueue(sim)) }];
  return [{ label: { en: `${name.en} per server`, bn: `${name.bn}, সার্ভার প্রতি` }, value: join(sim.sent) }];
}
