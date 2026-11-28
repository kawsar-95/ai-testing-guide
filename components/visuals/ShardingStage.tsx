"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import {
  RUNS,
  RUN_COUNT,
  SHARD_COUNT,
  assignment,
  counts,
  hotLoadPercent,
  hotShard,
  isHot,
  weekIndexes,
  weekShards,
} from "@/lib/visuals/sharding";
import type { Strategy } from "@/lib/visuals/sharding";
import type { Chip, StageProps } from "./StepVisual";

const COLOR = ["var(--accent)", "var(--accent-2)", "var(--voice-layman)", "var(--voice-bangla)"] as const;
const WIDTH = 360;
const CELL = 12;
const PITCH = 14;
const COLS = 5;
const SHARD_W = 82;
const SHARD_GAP = 10;
const SHARD_Y = 96;
const SHARD_H = 94;
const TRAY_COLS = 12;

const shardX = (s: number) => 4 + s * (SHARD_W + SHARD_GAP - 4);

/** The live numbers of each step, from the same rules that the stage draws. */
export function shardingChips(step: number): readonly Chip[] {
  const rows: Chip = { label: { en: "Rows", bn: "সারি" }, value: String(RUN_COUNT) };
  const shards: Chip = { label: { en: "Shards", bn: "শার্ড" }, value: String(step === 0 ? 1 : SHARD_COUNT) };
  if (step <= 1) return [rows, shards];
  if (step === 2) {
    return [
      { label: { en: "Date key: rows per shard", bn: "ডেট কী: প্রতি শার্ডে সারি" }, value: counts("range").join(" / ") },
      { label: { en: "Hash key: rows per shard", bn: "হ্যাশ কী: প্রতি শার্ডে সারি" }, value: counts("hash").join(" / ") },
    ];
  }
  if (step === 3) {
    return [
      { label: { en: "Date key: hottest shard", bn: "ডেট কী: সবচেয়ে ব্যস্ত শার্ড" }, value: `${hotLoadPercent("range")} %` },
      { label: { en: "Hash key: hottest shard", bn: "হ্যাশ কী: সবচেয়ে ব্যস্ত শার্ড" }, value: `${hotLoadPercent("hash")} %` },
    ];
  }
  return [
    { label: { en: "Date key: shards asked", bn: "ডেট কী: জিজ্ঞেস করা শার্ড" }, value: `${weekShards("range").length} / ${SHARD_COUNT}` },
    { label: { en: "Hash key: shards asked", bn: "হ্যাশ কী: জিজ্ঞেস করা শার্ড" }, value: `${weekShards("hash").length} / ${SHARD_COUNT}` },
    ...(step === 5
      ? [
          { label: { en: "Date key: hottest shard", bn: "ডেট কী: সবচেয়ে ব্যস্ত শার্ড" }, value: `${hotLoadPercent("range")} %` },
          { label: { en: "Hash key: hottest shard", bn: "হ্যাশ কী: সবচেয়ে ব্যস্ত শার্ড" }, value: `${hotLoadPercent("hash")} %` },
        ]
      : []),
  ];
}

/** Where a row sits: in the tray (one server) or inside its shard. */
function place(i: number, step: number, strategy: Strategy): { x: number; y: number } {
  if (step <= 1) {
    return { x: 12 + (i % TRAY_COLS) * 28, y: 18 + Math.floor(i / TRAY_COLS) * 26 };
  }
  const shard = assignment(strategy)[i];
  const slot = assignment(strategy)
    .slice(0, i)
    .filter((s) => s === shard).length;
  return {
    x: shardX(shard) + 6 + (slot % COLS) * PITCH,
    y: SHARD_Y + 8 + Math.floor(slot / COLS) * PITCH,
  };
}

/** The 24 rows, the shards, and the key switch of the sharding visual. */
export function ShardingStage({ step, reduced }: StageProps) {
  const [strategy, setStrategy] = useState<Strategy>("range");
  const transition = reduced ? undefined : "transform 420ms cubic-bezier(.2,.7,.2,1), fill 340ms ease";
  const boxTransition = reduced ? undefined : "stroke 340ms ease, opacity 340ms ease";
  const showSwitch = step >= 1 && step <= 4;
  const routed = step >= 2;
  const comparing = step === 5;
  const week = new Set(weekIndexes());
  const asked = new Set(weekShards(strategy));
  const hot = routed && step >= 3 && isHot(strategy) ? hotShard(strategy) : -1;
  const c = counts(strategy);
  const a = assignment(strategy);

  return (
    <div>
      {comparing ? (
        <svg role="img" aria-label="Load per shard with each key" viewBox={`0 0 ${WIDTH} 230`} className="mx-auto block h-auto w-full max-w-md" fontSize="12">
          {(["range", "hash"] as const).map((key, row) => {
            const y = 10 + row * 112;
            const cs = counts(key);
            return (
              <g key={key}>
                <text x="4" y={y + 12} fill="var(--text)" fontWeight="600">
                  {key === "range" ? "Key: run date (ranged)" : "Key: hash of run ID"}
                </text>
                {cs.map((n, s) => {
                  const h = Math.max(2, (n / RUN_COUNT) * 60 * 2);
                  const hotBar = isHot(key) && n === Math.max(...cs);
                  return (
                    <g key={s}>
                      <rect x={shardX(s) + 10} y={y + 22 + (64 - Math.min(64, h))} width="60" height={Math.min(64, h)} rx="3" fill={COLOR[s]} stroke={hotBar ? "var(--danger)" : "none"} strokeWidth="2" />
                      <text x={shardX(s) + 40} y={y + 100} textAnchor="middle" fill="var(--text-dim)" fontSize="11">
                        {`S${s + 1}: ${n}`}
                      </text>
                    </g>
                  );
                })}
                <text x={WIDTH - 4} y={y + 12} textAnchor="end" fill="var(--text-dim)" fontSize="11">
                  {`week: ${weekShards(key).length} / ${SHARD_COUNT}`}
                </text>
              </g>
            );
          })}
        </svg>
      ) : (
        <svg
          role="img"
          aria-label={`${RUN_COUNT} rows on ${step === 0 ? 1 : SHARD_COUNT} shards`}
          viewBox={`0 0 ${WIDTH} 250`}
          className="mx-auto block h-auto w-full max-w-md"
          fontSize="12"
        >
          {/* The app and the router */}
          <text x={WIDTH / 2} y="14" textAnchor="middle" fill="var(--text-dim)" fontSize="11" opacity={step === 0 ? 1 : 0}>
            one server
          </text>
          <rect x="4" y="2" width={WIDTH - 8} height="64" rx="8" fill="none" stroke="var(--border-strong)" strokeDasharray={step === 0 ? undefined : "4 4"} style={{ transition: boxTransition }} opacity={routed ? 0.35 : 1} />
          {step >= 4 ? (
            <g>
              <rect x={WIDTH / 2 - 60} y="70" width="120" height="20" rx="5" fill="var(--bg-raised-2)" stroke="var(--border-strong)" />
              <text x={WIDTH / 2} y="84" textAnchor="middle" fill="var(--text)" fontSize="11">
                router: runs this week
              </text>
            </g>
          ) : null}
          {step >= 1
            ? Array.from({ length: SHARD_COUNT }, (_, s) => {
                const isHotShard = hot === s;
                const isAsked = step === 4 && asked.has(s);
                const dim = step === 4 && !asked.has(s);
                return (
                  <g key={s}>
                    <rect
                      x={shardX(s)}
                      y={SHARD_Y}
                      width={SHARD_W}
                      height={SHARD_H}
                      rx="8"
                      fill="var(--bg-raised)"
                      stroke={isHotShard ? "var(--danger)" : isAsked ? "var(--warn)" : "var(--border-strong)"}
                      strokeWidth={isHotShard || isAsked ? 2.5 : 1.5}
                      strokeDasharray={routed ? undefined : "4 4"}
                      opacity={dim ? 0.45 : 1}
                      style={{ transition: boxTransition }}
                    />
                    <text x={shardX(s) + SHARD_W / 2} y={SHARD_Y + SHARD_H + 16} textAnchor="middle" fill={COLOR[s]} fontWeight="600">
                      {`Shard ${s + 1}`}
                    </text>
                    {routed ? (
                      <text x={shardX(s) + SHARD_W / 2} y={SHARD_Y + SHARD_H + 33} textAnchor="middle" fill={isHotShard ? "var(--danger)" : "var(--text-dim)"} fontSize="11">
                        {step >= 3 ? `${c[s]} rows · ${Math.round((c[s] / RUN_COUNT) * 100)} %` : `${c[s]} rows`}
                      </text>
                    ) : null}
                  </g>
                );
              })
            : null}
          {RUNS.map((run, i) => {
            const p = place(i, step, strategy);
            const isWeek = week.has(i);
            const fill = routed ? COLOR[a[i]] : "var(--text-faint)";
            return (
              <g key={run.id} style={{ transform: `translate(${p.x}px, ${p.y}px)`, transition }}>
                <rect width={CELL} height={CELL} rx="2" fill={fill} stroke={step === 4 && isWeek ? "var(--text)" : "none"} strokeWidth="2" opacity={step === 4 && !isWeek ? 0.4 : 1} style={{ transition: reduced ? undefined : "fill 340ms ease" }} />
              </g>
            );
          })}
          <text x={WIDTH / 2} y="246" textAnchor="middle" fill="var(--text-faint)" fontSize="11">
            {step >= 1 ? `key: ${strategy === "range" ? "run date (ranged)" : "hash of run ID"}` : "each square is one test run"}
          </text>
        </svg>
      )}
      {showSwitch ? (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Shard key">
          <span className="text-sm text-text-dim">
            <T en="Shard key:" bn="শার্ড কী:" />
          </span>
          <button type="button" className="btn btn-outline" aria-pressed={strategy === "range"} aria-label="Shard key: run date, ranged" onClick={() => setStrategy("range")}>
            <T en="Run date (ranged)" bn="রান ডেট (ranged)" />
          </button>
          <button type="button" className="btn btn-outline" aria-pressed={strategy === "hash"} aria-label="Shard key: hash of run ID" onClick={() => setStrategy("hash")}>
            <T en="Hash of run ID" bn="রান আইডির হ্যাশ" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
