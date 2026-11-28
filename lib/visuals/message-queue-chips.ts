import type { Chip } from "./chips.ts";
import { MAX_CONSUMERS, MIN_CONSUMERS, DEFAULT_CONSUMERS, sceneFor } from "./message-queue.ts";

/**
 * The live numbers of each step, from the same scene that the stage draws.
 * `live` is the consumer count of the slider (a number). Only the slider step uses it, like the stage.
 */
export function messageQueueChips(step: number, live: unknown): readonly Chip[] {
  const slider = typeof live === "number" && Number.isFinite(live) ? Math.min(MAX_CONSUMERS, Math.max(MIN_CONSUMERS, Math.round(live))) : DEFAULT_CONSUMERS;
  const scene = sceneFor(step, slider);
  const waiting: Chip = { label: { en: "Waiting", bn: "অপেক্ষায়" }, value: String(scene.waiting) };
  const consumers: Chip = { label: { en: "Consumers", bn: "Consumer" }, value: String(scene.consumers) };
  const drain: Chip = { label: { en: "Queue empty after", bn: "queue খালি হবে" }, value: `${scene.drain} s` };
  if (step === 0) return [waiting, { label: { en: "API answer", bn: "API-র উত্তর" }, value: "202" }];
  if (step === 1) return [waiting, { label: { en: "API answer", bn: "API-র উত্তর" }, value: "202" }];
  if (step === 2) return [waiting, { label: { en: "Taken", bn: "নেওয়া হয়েছে" }, value: `${scene.active} / ${scene.total}` }];
  if (step === 3 || step === 4) return [waiting, consumers, drain];
  if (step === 5) return [waiting, { label: { en: "Working", bn: "কাজ চলছে" }, value: String(scene.active) }, { label: { en: "Back in queue", bn: "queue-তে ফিরেছে" }, value: "1" }];
  return [waiting, { label: { en: "Oldest message", bn: "সবচেয়ে পুরোনো message" }, value: `${scene.oldest} s` }, drain];
}
