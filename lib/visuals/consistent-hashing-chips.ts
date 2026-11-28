import type { Chip } from "./chips.ts";
import { KEY_COUNT, loadSpread, sceneFor } from "./ring.ts";

/** The rule that the reader picks in the compare step. The stage starts on the ring. */
export type HashRule = "ring" | "modulo";

const DEFAULT_RULE: HashRule = "ring";

function ruleOf(live: unknown): HashRule {
  return live === "ring" || live === "modulo" ? live : DEFAULT_RULE;
}

/**
 * The live numbers of each step, from the same scene that the stage draws.
 * `live` is the rule ("ring" or "modulo") that the stage reports; it only changes the compare step.
 */
export function consistentHashingChips(step: number, live: unknown): readonly Chip[] {
  const rule = ruleOf(live);
  const scene = sceneFor(step, step === 4 ? rule : "ring");
  const servers: Chip = { label: { en: "Servers", bn: "সার্ভার" }, value: String(scene.servers.length) };
  const keys: Chip = { label: { en: "Keys", bn: "কী" }, value: String(KEY_COUNT) };
  if (step === 3) {
    return [servers, keys, { label: { en: "Keys moved", bn: "সরেছে" }, value: `${scene.movedRing} / ${KEY_COUNT}` }];
  }
  if (step === 4) {
    const moved = rule === "modulo" ? scene.movedModulo : scene.movedRing;
    const label = rule === "modulo" ? { en: "Modulo moved", bn: "মডুলোতে সরেছে" } : { en: "Ring moved", bn: "রিংয়ে সরেছে" };
    return [servers, keys, { label, value: `${moved} / ${KEY_COUNT}` }];
  }
  if (step === 5) {
    return [servers, keys, { label: { en: "Keys moved", bn: "সরেছে" }, value: `${scene.movedRing} / ${KEY_COUNT}` }];
  }
  if (step >= 6) {
    const spread = loadSpread(scene.owners, scene.servers);
    return [servers, { label: { en: "Most keys on one server", bn: "এক সার্ভারে সর্বোচ্চ কী" }, value: String(spread.max) }, { label: { en: "Fewest", bn: "সবচেয়ে কম" }, value: String(spread.min) }];
  }
  if (step === 2) {
    const spread = loadSpread(scene.owners, scene.servers);
    return [servers, keys, { label: { en: "Most / fewest per server", bn: "সর্বোচ্চ / সর্বনিম্ন" }, value: `${spread.max} / ${spread.min}` }];
  }
  return [servers, keys];
}
