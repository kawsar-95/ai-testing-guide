"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import {
  BUDGET,
  DEFAULT_FAILED,
  LAST_STEP,
  MAX_FAILED,
  MIN_FAILED,
  SLA_LIMIT,
  STEP_FAILED,
  budgetLeft,
  budgetUsedPercent,
  sceneFor,
  sliPercent,
} from "@/lib/visuals/sla-slo-sli";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 230;
const X0 = 24;
const X1 = 336;

/** Failed requests to x: no failures at the right edge (100%), the most failures at the left edge. */
const xFor = (failed: number) => X1 - ((X1 - X0) * failed) / MAX_FAILED;

/** The SLI gauge with the SLO and SLA lines, and the error budget bar of the sla-slo-sli visual. */
export function SlaSloSliStage({ step, reduced, onLive }: StageProps) {
  const [failed, setFailed] = useState(DEFAULT_FAILED);
  const live = step === LAST_STEP;
  const scene = sceneFor(step, live ? failed : DEFAULT_FAILED);
  const f = scene.failed;
  const transition = reduced ? undefined : "x 340ms cubic-bezier(.2,.7,.2,1), width 340ms cubic-bezier(.2,.7,.2,1), fill 340ms cubic-bezier(.2,.7,.2,1)";
  const budgetLabel = useBn("Error budget", "এরর বাজেট");
  const gone = useBn("budget gone", "বাজেট শেষ");
  const ariaSvg = useBn(
    `SLI ${sliPercent(f)}%, ${budgetLeft(f)} of ${BUDGET} budget left`,
    `SLI ${sliPercent(f)}%, ${BUDGET}-এর মধ্যে ${budgetLeft(f)} বাজেট বাকি`,
  );
  const mx = xFor(f);
  const sloX = xFor(BUDGET);
  const slaX = xFor(SLA_LIMIT);
  const markerColor = scene.zone === "within-slo" ? "var(--good)" : scene.zone === "slo-missed" ? "var(--warn)" : "var(--danger)";

  const barW = X1 - X0;
  const usedW = Math.min(barW, (barW * f) / BUDGET);

  return (
    <div>
      <svg role="img" aria-label={ariaSvg} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="mx-auto block h-auto w-full max-w-sm" fontSize="12">
        {/* The SLI axis: right side is better */}
        <rect x={X0} y="50" width={X1 - X0} height="30" rx="6" fill="var(--bg-raised-2)" stroke="var(--border-strong)" strokeWidth="1.5" />
        {scene.showSlo ? <rect x={sloX} y="51" width={X1 - sloX - 1} height="28" fill="var(--good)" opacity="0.18" /> : null}
        {scene.showSla ? <rect x={slaX} y="51" width={Math.max(0, sloX - slaX)} height="28" fill="var(--warn)" opacity="0.18" /> : null}
        {scene.showSla ? <rect x={X0 + 1} y="51" width={Math.max(0, slaX - X0 - 1)} height="28" fill="var(--danger)" opacity="0.18" /> : null}
        <text x={X0} y="20" fill="var(--text-dim)" fontSize="11">
          SLI {sliPercent(f)}%
        </text>
        {scene.showSlo ? (
          <g>
            <line x1={sloX} x2={sloX} y1="44" y2="86" stroke="var(--accent)" strokeWidth="2" />
            <text x={sloX} y="102" textAnchor="middle" fill="var(--accent)" fontWeight={600}>
              SLO 99.5%
            </text>
          </g>
        ) : null}
        {scene.showSla ? (
          <g>
            <line x1={slaX} x2={slaX} y1="44" y2="86" stroke="var(--danger)" strokeWidth="2" strokeDasharray="4 3" />
            <text x={slaX} y="118" textAnchor="middle" fill="var(--danger)" fontWeight={600}>
              SLA 99%
            </text>
          </g>
        ) : null}
        {/* The measured SLI */}
        <rect x={mx - 3} y="42" width="6" height="46" rx="2" fill={markerColor} style={{ transition }} />
        <text x={X0} y="97" fill="var(--text-faint)" fontSize="11">
          ←
        </text>
        <text x={X1} y="97" textAnchor="end" fill="var(--text-faint)" fontSize="11">
          100%
        </text>

        {/* The error budget bar */}
        {scene.showBudget ? (
          <g>
            <text x={X0} y="150" fill="var(--text-dim)" fontSize="11">
              {budgetLabel}: {budgetLeft(f)} / {BUDGET}
            </text>
            <text x={X1} y="150" textAnchor="end" fill={f > BUDGET ? "var(--danger)" : "var(--text-dim)"} fontSize="11" fontWeight={600}>
              {f > BUDGET ? gone : `${budgetUsedPercent(f)}%`}
            </text>
            <rect x={X0} y="158" width={barW} height="18" rx="5" fill="var(--bg-raised-2)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <rect x={X0} y="158" width={usedW} height="18" rx="5" fill={f > BUDGET ? "var(--danger)" : "var(--accent)"} style={{ transition }} />
          </g>
        ) : null}
      </svg>
      {live ? (
        <div className="mt-3">
          <label className="flex flex-col gap-1 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Failed requests in the window" bn="window-তে ফেইল হওয়া রিকুয়েস্ট" />: <strong className="text-[var(--text)]">{f}</strong>
            </span>
            <input
              type="range"
              min={MIN_FAILED}
              max={MAX_FAILED}
              step={STEP_FAILED}
              value={failed}
              aria-label="Failed requests in the window"
              onChange={(e) => {
                const next = Number(e.target.value);
                setFailed(next);
                onLive(next);
              }}
              className="w-full"
            />
          </label>
          <p className="mb-0 mt-2 text-center text-sm font-semibold" style={{ color: markerColor }}>
            {scene.zone === "within-slo" ? (
              <T en="SLO met, SLA met" bn="SLO পূরণ, SLA পূরণ" />
            ) : scene.zone === "slo-missed" ? (
              <T en="SLO missed, SLA met" bn="SLO মিস, SLA পূরণ" />
            ) : (
              <T en="SLO missed, SLA missed" bn="SLO মিস, SLA মিস" />
            )}
          </p>
        </div>
      ) : null}
    </div>
  );
}
