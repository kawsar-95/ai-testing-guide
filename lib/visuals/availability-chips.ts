import type { Chip } from "./chips.ts";
import {
  DAY_MINUTES,
  DEFAULT_NINES,
  MONTH_MINUTES,
  NINES_PPM,
  REGION_PPM,
  SINGLE_INSTANCE_PPM,
  SLO_PPM,
  SUBMISSIONS,
  YEAR_MINUTES,
  creditPercent,
  downtimeMinutes,
  durationText,
  errorBudgetCount,
  percentText,
  tenfoldRatio,
} from "./availability.ts";

/** `live` is the slider position (an index into NINES_PPM). Anything else falls back to the default. */
function pickedIndex(live: unknown): number {
  return typeof live === "number" && Number.isInteger(live) && NINES_PPM[live] !== undefined ? live : DEFAULT_NINES;
}

/** The live numbers of each step. On the slider steps (1, 2, 5) they follow the slider. */
export function availabilityChips(step: number, live: unknown): readonly Chip[] {
  const index = pickedIndex(live);
  const ppm = NINES_PPM[index]!;
  const target: Chip = { label: { en: "Target", bn: "টার্গেট" }, value: `${percentText(ppm)} %` };
  switch (step) {
    case 0: {
      const base = NINES_PPM[DEFAULT_NINES]!;
      return [
        { label: { en: "Availability", bn: "অ্যাভেইলেবিলিটি" }, value: `${percentText(base)} %` },
        { label: { en: "Downtime / year", bn: "ডাউনটাইম / বছর" }, value: durationText(downtimeMinutes(base, YEAR_MINUTES)) },
      ];
    }
    case 1:
      return [
        target,
        { label: { en: "Downtime / year", bn: "ডাউনটাইম / বছর" }, value: durationText(downtimeMinutes(ppm, YEAR_MINUTES)) },
        { label: { en: "Downtime / month", bn: "ডাউনটাইম / মাস" }, value: durationText(downtimeMinutes(ppm, MONTH_MINUTES)) },
        { label: { en: "Downtime / day", bn: "ডাউনটাইম / দিন" }, value: durationText(downtimeMinutes(ppm, DAY_MINUTES)) },
      ];
    case 2: {
      const chips: Chip[] = [
        target,
        { label: { en: "Downtime / year", bn: "ডাউনটাইম / বছর" }, value: durationText(downtimeMinutes(ppm, YEAR_MINUTES)) },
      ];
      const ratio = tenfoldRatio(index);
      if (ratio > 0) {
        chips.push({ label: { en: "vs one nine fewer", bn: "এক নাইন কম হলে তুলনায়" }, value: `÷ ${ratio}` });
      }
      return chips;
    }
    case 3:
      return [
        { label: { en: "SLO", bn: "SLO" }, value: `${percentText(SLO_PPM)} %` },
        { label: { en: "Error budget", bn: "এরর বাজেট" }, value: `${Number((SLO_PPM / 10_000).toFixed(3))} %` },
        { label: { en: "May fail of 10,000", bn: "10,000-এর মধ্যে ব্যর্থ হতে পারে" }, value: String(errorBudgetCount(SLO_PPM, SUBMISSIONS)) },
      ];
    case 4:
      return [
        { label: { en: "One instance / month", bn: "একক ইনস্ট্যান্স / মাস" }, value: durationText(downtimeMinutes(SINGLE_INSTANCE_PPM, MONTH_MINUTES)) },
        { label: { en: "Two+ zones / month", bn: "দুই+ জোন / মাস" }, value: durationText(downtimeMinutes(REGION_PPM, MONTH_MINUTES)) },
      ];
    default:
      return [
        target,
        { label: { en: "Service credit", bn: "সার্ভিস ক্রেডিট" }, value: `${creditPercent(ppm)} %` },
      ];
  }
}
