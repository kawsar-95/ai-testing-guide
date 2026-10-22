"use client";

import { countDone, percent } from "@/lib/prep/progress";
import type { FlatModuleId } from "@/lib/modules/registry";
import { ProgressBar } from "@/components/prep/ProgressBar";
import { flatModule, progressHook } from "./useModuleProgress";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { FLAT_UI_BN } from "@/lib/bn/flat";

/** A bar for a set of ids of a module (the topics or the practice questions). It never passes 100. */
export function ProgressSummary({
  moduleId,
  ids,
  kind = "topics",
}: {
  moduleId: FlatModuleId;
  ids: readonly string[];
  kind?: "topics" | "practice";
}) {
  const m = flatModule(moduleId);
  const { done } = progressHook(m)();
  const ui = m.ui;
  const bn = FLAT_UI_BN[moduleId];
  const total = new Set(ids).size;
  const count = countDone(ids, done);
  const value = percent(count, total);
  const practice = kind === "practice";
  const text = (practice ? ui.practiceSummaryText?.(count, total) : ui.summaryText?.(count, total)) ?? "";
  const textBn = (practice ? bn.practiceSummaryText?.(count, total) : bn.summaryText?.(count, total)) ?? text;
  const label = (practice ? ui.practiceLabel : ui.overallLabel) ?? "";
  const labelBn = (practice ? bn.practiceLabel : bn.overallLabel) ?? label;
  const ariaLabel = useBn(label, labelBn);
  const valueText = useBn(text, textBn);
  return (
    <div className="rounded-2xl border border-border bg-bg-raised shadow-sm px-5 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <p data-progress-text className="font-mono text-[13px] text-text-dim">
          <T en={text} bn={textBn} />
        </p>
        <p className="font-display text-2xl font-medium tabular-nums text-text">{ui.percentText?.(value)}</p>
      </div>
      <ProgressBar value={value} label={ariaLabel} valueText={valueText} className="mt-3" />
    </div>
  );
}
