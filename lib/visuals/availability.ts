/**
 * The data behind the availability visual (components/visuals/AvailabilityStage.tsx).
 *
 * The rule is the page's own arithmetic: one year has 525,600 minutes, and the downtime that a
 * target allows is 525,600 x (1 - target). A target is kept as the unavailable share in parts per
 * million (ppm), so 99.9 % is 1000 ppm and no floating point error creeps into the comparisons.
 */

export const YEAR_MINUTES = 525_600;
export const MONTH_MINUTES = YEAR_MINUTES / 12;
export const DAY_MINUTES = 1440;
export const PPM = 1_000_000;

/** The slider: 99 %, 99.9 %, 99.99 %, 99.999 %. Each nine divides the unavailable share by ten. */
export const NINES_PPM: readonly number[] = [10_000, 1_000, 100, 10];

/** Where the slider starts: 99.9 %. */
export const DEFAULT_NINES = 1;

/** The single-instance promise (99.5 %) and the region-level promise (99.99 %) of the EC2 SLA on the page. */
export const SINGLE_INSTANCE_PPM = 5_000;
export const REGION_PPM = 100;

/** The SLO of the quiz example: 99.9 % of submissions succeed. */
export const SLO_PPM = 1_000;
export const SUBMISSIONS = 10_000;

/** Minutes of downtime that a target allows in a period. */
export function downtimeMinutes(ppm: number, periodMinutes: number): number {
  return (periodMinutes * ppm) / PPM;
}

/** The target as a percentage string without a trailing zero, e.g. 99.99. */
export function percentText(ppm: number): string {
  return String(Number((100 - ppm / 10_000).toFixed(3)));
}

/** A duration for a chip: seconds, minutes, hours or days, whichever reads best. Units are language-neutral. */
export function durationText(minutes: number): string {
  const trim = (n: number) => String(Number(n.toFixed(3)));
  if (minutes < 1) return `${trim(minutes * 60)} s`;
  if (minutes < 1000) return `${trim(minutes)} min`; // the page's table is in minutes: 525.6, 52.56, 5.256
  if (minutes < 4320) return `${trim(minutes / 60)} h`;
  return `${trim(minutes / 1440)} d`;
}

/** How many times more downtime the target one nine below allows. 0 for the first nine on the slider. */
export function tenfoldRatio(index: number): number {
  const prev = NINES_PPM[index - 1];
  const here = NINES_PPM[index];
  if (prev === undefined || here === undefined) return 0;
  return Math.round(prev / here);
}

/** Length of a bar on the log scale of the ladder: one nine fewer is ten times longer in value, a fixed step in length. */
export function logBarLength(minutes: number): number {
  return Math.round(70 * Math.log10(minutes));
}

/** Submissions that may fail in SUBMISSIONS requests at the SLO: the error budget. */
export function errorBudgetCount(ppm: number, total: number): number {
  return Math.round((total * ppm) / PPM);
}

/** The region-level service credit (a share of the monthly bill) for a month with this unavailable share. */
export function creditPercent(ppm: number): number {
  if (ppm <= 100) return 0; // 99.99 % or better
  if (ppm <= 10_000) return 10; // below 99.99 %, at least 99.0 %
  if (ppm <= 50_000) return 30; // below 99.0 %, at least 95.0 %
  return 100; // below 95.0 %
}

export type Bar = { label: string; ppm: number };

export type Scene = {
  /** Does the slider show and drive this step? */
  slider: boolean;
  period: "year" | "month";
  bars: readonly Bar[];
};

/** What each step draws. `index` is the slider position. */
export function sceneFor(step: number, index: number = DEFAULT_NINES): Scene {
  const picked = NINES_PPM[index] ?? NINES_PPM[DEFAULT_NINES]!;
  switch (step) {
    case 0:
      return { slider: false, period: "year", bars: [{ label: "", ppm: NINES_PPM[DEFAULT_NINES]! }] };
    case 1:
      return { slider: true, period: "year", bars: [{ label: "", ppm: picked }] };
    case 2:
      return { slider: true, period: "year", bars: NINES_PPM.map((ppm) => ({ label: "", ppm })) };
    case 3:
      return { slider: false, period: "year", bars: [{ label: "", ppm: SLO_PPM }] };
    case 4:
      return {
        slider: false,
        period: "month",
        bars: [
          { label: "1", ppm: SINGLE_INSTANCE_PPM },
          { label: "2+", ppm: REGION_PPM },
        ],
      };
    default:
      return { slider: true, period: "month", bars: [{ label: "", ppm: picked }] };
  }
}
