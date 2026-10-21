import { CONTENTS_UI } from "@/lib/contents";
import { siteStats } from "@/lib/stats";

/** Four numbers of the site, each with a teal left rule. All counts come from the data files. */
export function StatsRow({ className = "" }: { className?: string }) {
  const stats = siteStats();
  const items = [
    [stats.parts, CONTENTS_UI.stats.parts],
    [stats.modules, CONTENTS_UI.stats.modules],
    [stats.pages, CONTENTS_UI.stats.pages],
    [stats.voices, CONTENTS_UI.stats.voices],
  ] as const;
  return (
    <dl aria-label={CONTENTS_UI.statsLabel} className={`grid max-w-[520px] grid-cols-2 gap-6 sm:grid-cols-4 ${className}`}>
      {items.map(([value, label]) => (
        <div key={label} className="flex flex-col-reverse border-l-2 border-accent pl-3.5">
          <dt className="mt-1 text-[13px] leading-snug text-text-faint">{label}</dt>
          <dd className="m-0 font-display text-[28px] font-bold leading-none text-text tabular-nums">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
