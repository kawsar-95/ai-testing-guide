"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import {
  DEFAULT_SIZE_INDEX,
  EXTRA_INDEXES,
  GRID_CELLS,
  MATCH_CELLS,
  SIZES,
  SLIDER_FIRST,
  SLIDER_LAST,
  formatCount,
  planFor,
  sizeForStep,
  updatesPerInsert,
} from "@/lib/visuals/indexes";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 230;
const COLS = 8;
const CELL = 22;
const GRID_X = 16;
const GRID_Y = 44;
const TREE_X = 250;

/** Bar length on a log scale, so 50 rows and 5 million rows both fit. */
function barWidth(count: number, max: number, full: number): number {
  return Math.max(4, (Math.log10(count + 1) / Math.log10(max + 1)) * full);
}

/** The table, the index, and the plans of the indexes visual. */
export function IndexesStage({ step, reduced, onLive }: StageProps) {
  const [position, setPosition] = useState(DEFAULT_SIZE_INDEX);
  const hasSlider = step >= SLIDER_FIRST && step <= SLIDER_LAST;
  const plan = planFor(sizeForStep(step, position));
  const maxPlan = planFor(SIZES[SIZES.length - 1]);
  const transition = reduced ? undefined : "fill 300ms ease, stroke 300ms ease";
  const label = useBn("Table of enrollments", "enrollments টেবিল");
  const ariaLabel = useBn(`Lookup of student 42 in a table of ${formatCount(plan.rows)} rows`, `${formatCount(plan.rows)} রো-র টেবিলে স্টুডেন্ট 42-এর লুকআপ`);
  const sliderLabel = useBn("Rows in table", "টেবিলের রো");
  const logNote = useBn("log scale", "log স্কেল");
  const rowsWord = useBn("rows", "রো");
  const checkedWord = useBn("checked", "চেক");
  const newRow = useBn("new row", "নতুন রো");
  const updatesWord = useBn("updates", "আপডেট");
  const tableWord = useBn("table", "টেবিল");
  const indexWord = useBn("index", "ইনডেক্স");

  const showGrid = step <= 3;
  const showTree = step >= 2 && step <= 3;

  const cellFill = (i: number): { fill: string; stroke: string; width: number } => {
    const match = MATCH_CELLS.includes(i);
    if (step === 0) return match ? { fill: "var(--accent)", stroke: "var(--accent)", width: 1.5 } : { fill: "var(--bg-raised-2)", stroke: "var(--border-strong)", width: 1 };
    if (step === 1) return { fill: "var(--warn)", stroke: match ? "var(--accent)" : "var(--warn)", width: match ? 2.5 : 1 };
    if (step === 3) return match ? { fill: "var(--good)", stroke: "var(--good)", width: 1.5 } : { fill: "var(--bg-raised-2)", stroke: "var(--border-strong)", width: 1 };
    return { fill: "var(--bg-raised-2)", stroke: "var(--border-strong)", width: 1 };
  };

  const cellCenter = (i: number) => ({
    x: GRID_X + (i % COLS) * CELL + CELL / 2 - 1,
    y: GRID_Y + Math.floor(i / COLS) * CELL + CELL / 2 - 1,
  });

  return (
    <div>
      <svg role="img" aria-label={ariaLabel} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="mx-auto block h-auto w-full max-w-sm" fontSize="12">
        {showGrid ? (
          <g>
            <text x={GRID_X} y="30" fill="var(--text-dim)" fontSize="11">
              {label}
            </text>
            {Array.from({ length: GRID_CELLS }, (_, i) => {
              const c = cellFill(i);
              return (
                <rect
                  key={i}
                  x={GRID_X + (i % COLS) * CELL}
                  y={GRID_Y + Math.floor(i / COLS) * CELL}
                  width={CELL - 2}
                  height={CELL - 2}
                  rx="3"
                  fill={c.fill}
                  fillOpacity={step === 1 && !MATCH_CELLS.includes(i) ? 0.45 : 1}
                  stroke={c.stroke}
                  strokeWidth={c.width}
                  style={{ transition }}
                />
              );
            })}
            {step === 1 ? (
              <text x={GRID_X} y={GRID_Y + 5 * CELL + 22} fill="var(--warn)" fontWeight={600}>
                {formatCount(plan.scanChecked)} {rowsWord} {checkedWord}
              </text>
            ) : null}
            {step === 3 ? (
              <text x={GRID_X} y={GRID_Y + 5 * CELL + 22} fill="var(--good)" fontWeight={600}>
                {plan.levels} + {plan.returned} = {plan.indexChecked} {checkedWord}
              </text>
            ) : null}
          </g>
        ) : null}

        {showTree ? (
          <g>
            <text x={TREE_X - 30} y="30" fill="var(--text-dim)" fontSize="11">
              {indexWord} (B-tree)
            </text>
            {[0, 1, 2].map((level) => {
              const y = 52 + level * 36;
              const nodes = level === 0 ? [TREE_X + 30] : level === 1 ? [TREE_X + 6, TREE_X + 54] : [TREE_X - 12, TREE_X + 24, TREE_X + 60, TREE_X + 96];
              const on = step === 3;
              return (
                <g key={level}>
                  {nodes.map((x, k) => (
                    <rect key={k} x={x - 10} y={y} width="20" height="16" rx="3" fill={on && k === (level === 2 ? 1 : 0) ? "var(--good)" : "var(--bg-raised)"} stroke={on && k === (level === 2 ? 1 : 0) ? "var(--good)" : "var(--accent)"} strokeWidth="1.5" style={{ transition }} />
                  ))}
                </g>
              );
            })}
            {step === 3
              ? MATCH_CELLS.map((cell) => {
                  const c = cellCenter(cell);
                  return <line key={cell} x1={TREE_X + 24} y1="160" x2={c.x + 8} y2={c.y} stroke="var(--good)" strokeWidth="1" strokeOpacity="0.55" />;
                })
              : null}
          </g>
        ) : null}

        {step === 4 ? (
          <g>
            <text x="16" y="34" fill="var(--text-dim)" fontSize="11">
              {formatCount(plan.rows)} {rowsWord} · {logNote}
            </text>
            <text x="16" y="66" fill="var(--text-dim)" fontSize="11">
              Seq Scan
            </text>
            <rect x="16" y="72" width={barWidth(plan.scanChecked, maxPlan.scanChecked, 328)} height="22" rx="4" fill="var(--warn)" style={{ transition }} />
            <text x="16" y="116" fill="var(--warn)" fontWeight={600}>
              {formatCount(plan.scanChecked)}
            </text>
            <text x="16" y="150" fill="var(--text-dim)" fontSize="11">
              Index Scan
            </text>
            <rect x="16" y="156" width={barWidth(plan.indexChecked, maxPlan.scanChecked, 328)} height="22" rx="4" fill="var(--good)" style={{ transition }} />
            <text x="16" y="200" fill="var(--good)" fontWeight={600}>
              {formatCount(plan.indexChecked)}
            </text>
          </g>
        ) : null}

        {step === 5 ? (
          <g>
            <text x="16" y="34" fill="var(--text-dim)" fontSize="11">
              + 1 {newRow}
            </text>
            <path d="M 60 40 L 60 62" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <path d="M 54 56 L 60 64 L 66 56" stroke="var(--accent)" strokeWidth="2" fill="none" />
            {Array.from({ length: updatesPerInsert(1 + EXTRA_INDEXES) }, (_, i) => (
              <rect key={i} x={16 + i * 28} y="76" width="24" height="24" rx="4" fill={i === 0 ? "var(--accent)" : i === 1 ? "var(--accent-2)" : "var(--bg-raised-2)"} stroke={i === 0 ? "var(--accent)" : i === 1 ? "var(--accent-2)" : "var(--danger)"} strokeWidth="1.5" />
            ))}
            <text x="16" y="124" fill="var(--text-dim)" fontSize="11">
              {tableWord}
            </text>
            <text x="44" y="144" fill="var(--text-dim)" fontSize="11">
              {indexWord} × {1 + EXTRA_INDEXES}
            </text>
            <text x="16" y="186" fill="var(--danger)" fontWeight={600}>
              {updatesPerInsert(1 + EXTRA_INDEXES)} {updatesWord}
            </text>
          </g>
        ) : null}

        {step === 6 ? (
          <g fontFamily="ui-monospace, monospace" fontSize="11">
            <rect x="16" y="28" width="328" height="68" rx="8" fill="var(--bg-raised-2)" stroke="var(--warn)" strokeWidth="1.5" />
            <text x="28" y="52" fill="var(--warn)">
              Seq Scan on enrollments
            </text>
            <text x="28" y="74" fill="var(--text-dim)">
              {"  Filter: (student_id = 42)"}
            </text>
            <rect x="16" y="116" width="328" height="68" rx="8" fill="var(--bg-raised-2)" stroke="var(--good)" strokeWidth="1.5" />
            <text x="28" y="140" fill="var(--good)">
              Index Scan on enrollments
            </text>
            <text x="28" y="162" fill="var(--text-dim)">
              {"  Index Cond: (student_id = 42)"}
            </text>
          </g>
        ) : null}
      </svg>

      {hasSlider ? (
        <div className="mt-3">
          <label className="flex flex-col gap-1 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Rows in table" bn="টেবিলের রো" />: <strong className="text-[var(--text)]">{formatCount(SIZES[position])}</strong>
            </span>
            <input
              type="range"
              min={0}
              max={SIZES.length - 1}
              step={1}
              value={position}
              aria-label={sliderLabel}
              onChange={(e) => {
                const next = Number(e.target.value);
                setPosition(next);
                onLive(next);
              }}
              className="w-full"
            />
          </label>
        </div>
      ) : null}
    </div>
  );
}
