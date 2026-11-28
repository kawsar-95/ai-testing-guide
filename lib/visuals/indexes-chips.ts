import type { Chip } from "./chips.ts";
import { EXTRA_INDEXES, formatCount, planFor, sizeForStep, updatesPerInsert } from "./indexes.ts";

/**
 * The live numbers of each step. `live` is the slider position (0 to 5, a number) that sets the
 * table size. Steps 1 to 4 use it, like the stage; the other steps use the page's 5 million rows.
 */
export function indexesChips(step: number, live: unknown): readonly Chip[] {
  const plan = planFor(sizeForStep(step, live));
  const rows: Chip = { label: { en: "Rows in table", bn: "টেবিলের রো" }, value: formatCount(plan.rows) };
  const wanted: Chip = { label: { en: "Rows wanted", bn: "দরকারি রো" }, value: String(plan.returned) };
  const scan: Chip = { label: { en: "Checked, no index", bn: "ইনডেক্স ছাড়া চেক" }, value: formatCount(plan.scanChecked) };
  const indexed: Chip = { label: { en: "Checked, with index", bn: "ইনডেক্স সহ চেক" }, value: formatCount(plan.indexChecked) };
  const levels: Chip = { label: { en: "Tree levels", bn: "ট্রির স্তর" }, value: String(plan.levels) };
  if (step === 0) return [rows, wanted];
  if (step === 1) return [rows, scan, wanted];
  if (step === 2) return [rows, { label: { en: "Indexes", bn: "ইনডেক্স" }, value: "1" }];
  if (step === 3) return [rows, levels, indexed];
  if (step === 4) return [rows, scan, indexed];
  if (step === 5) {
    return [
      { label: { en: "No index", bn: "ইনডেক্স ছাড়া" }, value: String(updatesPerInsert(0)) },
      { label: { en: "One index", bn: "একটি ইনডেক্স" }, value: String(updatesPerInsert(1)) },
      { label: { en: "Plus ten", bn: "আরও দশটি" }, value: String(updatesPerInsert(1 + EXTRA_INDEXES)) },
    ];
  }
  return [scan, indexed];
}
