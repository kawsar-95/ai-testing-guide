import type { Chip } from "./chips.ts";
import { DEFAULT_SUBS, LIVE_STEP, directSends, duplicates, sceneFor, totalDeliveries } from "./pub-sub.ts";

/**
 * The live numbers of each step, from the same scene that the stage draws.
 * `live` is the number of subscriptions that the slider sets. Only the last step uses it, like the stage.
 */
export function pubSubChips(step: number, live: unknown): readonly Chip[] {
  const slider = typeof live === "number" && Number.isFinite(live) ? live : DEFAULT_SUBS;
  const scene = sceneFor(step, step === LIVE_STEP ? slider : DEFAULT_SUBS);
  const sends: Chip = { label: { en: "Publisher sends", bn: "পাবলিশার পাঠায়" }, value: String(scene.publisherSends) };
  const copies: Chip = { label: { en: "Copies", bn: "কপি" }, value: String(scene.copies) };
  if (step <= 0) return [sends, { label: { en: "Listeners", bn: "শ্রোতা" }, value: "?" }];
  if (step === 1) return [sends, { label: { en: "Subscriptions", bn: "সাবস্ক্রিপশন" }, value: String(scene.subs) }];
  if (step === 2) return [sends, copies];
  if (step === 3) return [copies, { label: { en: "Acks", bn: "অ্যাক" }, value: `${scene.acked} / ${scene.subs}` }];
  if (step === 4) {
    return [copies, { label: { en: "Deliveries", bn: "ডেলিভারি" }, value: String(totalDeliveries(scene.deliveries)) }, { label: { en: "Duplicates", bn: "ডুপ্লিকেট" }, value: String(duplicates(scene.deliveries)) }];
  }
  if (step === 5) return [sends, { label: { en: "Consumers", bn: "কনজিউমার" }, value: String(scene.subs) }];
  return [
    { label: { en: "With a topic", bn: "টপিকে" }, value: `${scene.publisherSends}` },
    { label: { en: "Direct sends", bn: "সরাসরি পাঠানো" }, value: String(directSends(scene.subs)) },
    copies,
  ];
}
