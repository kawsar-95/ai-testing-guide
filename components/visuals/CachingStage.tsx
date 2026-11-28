"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DEFAULT_HIT_PERCENT, READS, SLIDER_STEP, averageMs, dbReads, hitPercentFor, sceneFor } from "@/lib/visuals/caching";
import { fmt } from "@/lib/visuals/caching-chips";
import type { StageProps } from "./StepVisual";

const NODE = { app: { x: 14, y: 100 }, redis: { x: 226, y: 20 }, db: { x: 226, y: 180 } };
const W = 120;
const H = 46;

const LABELS: Record<number, { redis: string; db: string }> = {
  0: { redis: "get key", db: "" },
  1: { redis: "hit: data", db: "" },
  2: { redis: "miss", db: "read" },
  3: { redis: "save + TTL", db: "data" },
  5: { redis: "delete old copy", db: "write first" },
  6: { redis: "miss", db: "read" },
};

/** App, Redis, and database, with the path of the read in each step. */
export function CachingStage({ step, reduced, onLive }: StageProps) {
  const [slider, setSlider] = useState(DEFAULT_HIT_PERCENT);
  const sliderLabel = useBn("Hit rate", "Hit rate");
  const scene = sceneFor(step);
  const onSlider = step === SLIDER_STEP;
  const hit = hitPercentFor(step, slider);
  const transition = reduced ? undefined : "stroke 300ms ease, stroke-width 300ms ease, fill 300ms ease";
  const label = LABELS[step];
  const miss = 100 - hit;
  // On the slider step the two lines show the share of hits and misses.
  const redisWidth = onSlider ? 1.5 + (hit / 100) * 6 : 3;
  const dbWidth = onSlider ? 1.5 + (miss / 100) * 6 : 3;
  const redisOn = scene.active.includes("appRedis");
  const dbOn = scene.active.includes("appDb");
  const rc = step === 1 ? "var(--good)" : step === 5 ? "var(--warn)" : "var(--accent)";
  const dc = step === 2 || step === 6 ? "var(--danger)" : "var(--accent-2)";
  const mid = (a: number, b: number) => (a + b) / 2;

  const box = (p: { x: number; y: number }, name: string, color: string) => (
    <g>
      <rect x={p.x} y={p.y} width={W} height={H} rx="8" fill="var(--bg-raised-2)" stroke={color} strokeWidth="2" style={{ transition }} />
      <text x={p.x + W / 2} y={p.y + 28} textAnchor="middle" fill="var(--text)" fontWeight="600">
        {name}
      </text>
    </g>
  );

  return (
    <div>
      <svg role="img" aria-label="App, Redis cache, and database" viewBox="0 0 360 240" className="mx-auto block h-auto w-full max-w-md" fontSize="12">
        <line x1={NODE.app.x + W} y1={NODE.app.y + 12} x2={NODE.redis.x} y2={NODE.redis.y + H / 2} stroke={redisOn ? rc : "var(--border-strong)"} strokeWidth={redisOn ? redisWidth : 1.5} strokeLinecap="round" style={{ transition }} />
        <line x1={NODE.app.x + W} y1={NODE.app.y + H - 12} x2={NODE.db.x} y2={NODE.db.y + H / 2} stroke={dbOn ? dc : "var(--border-strong)"} strokeWidth={dbOn ? dbWidth : 1.5} strokeLinecap="round" strokeDasharray={dbOn ? undefined : "4 4"} style={{ transition }} />
        {box(NODE.app, "App", "var(--border-strong)")}
        {box(NODE.redis, "Redis", redisOn ? rc : "var(--border-strong)")}
        {box(NODE.db, "Database", dbOn ? dc : "var(--border-strong)")}
        {/* The copy in Redis. */}
        <rect x={NODE.redis.x + W - 30} y={NODE.redis.y - 8} width="24" height="16" rx="3" fill={scene.cached ? "var(--good)" : "var(--bg-raised)"} stroke={scene.cached ? "var(--good)" : "var(--border-strong)"} strokeDasharray={scene.cached ? undefined : "3 3"} style={{ transition }} />
        <text x={NODE.redis.x + W - 18} y={NODE.redis.y + 4} textAnchor="middle" fontSize="11" fill={scene.cached ? "var(--bg-raised)" : "var(--text-faint)"}>
          key
        </text>
        {onSlider ? (
          <>
            <text x={mid(NODE.app.x + W, NODE.redis.x) + 4} y={mid(NODE.app.y + 12, NODE.redis.y + H / 2) - 10} textAnchor="middle" fill="var(--text-dim)">
              {`hit ${hit} %`}
            </text>
            <text x={mid(NODE.app.x + W, NODE.db.x) + 4} y={mid(NODE.app.y + H - 12, NODE.db.y + H / 2) + 22} textAnchor="middle" fill="var(--text-dim)">
              {`miss ${miss} %`}
            </text>
          </>
        ) : label ? (
          <>
            <text x={mid(NODE.app.x + W, NODE.redis.x) + 4} y={mid(NODE.app.y + 12, NODE.redis.y + H / 2) - 10} textAnchor="middle" fill="var(--text-dim)">
              {label.redis}
            </text>
            <text x={mid(NODE.app.x + W, NODE.db.x) + 4} y={mid(NODE.app.y + H - 12, NODE.db.y + H / 2) + 22} textAnchor="middle" fill="var(--text-dim)">
              {label.db}
            </text>
          </>
        ) : null}
      </svg>
      {onSlider ? (
        <div className="mt-3">
          <label className="mb-0 flex items-center justify-between gap-3 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Hit rate" bn="Hit rate" />: <strong className="text-[var(--text)]">{slider} %</strong>
            </span>
            <span>
              <T en="Average read" bn="গড় read" />: <strong className="text-[var(--text)]">{fmt(averageMs(slider))}</strong>
            </span>
          </label>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={slider}
            aria-label={sliderLabel}
            onChange={(e) => {
              const v = Number(e.target.value);
              setSlider(v);
              onLive(v);
            }}
            className="mt-2 w-full"
            style={{ accentColor: "var(--accent)" }}
          />
          <p className="mb-0 mt-1 text-xs text-[var(--text-faint)]">
            <T en={`Database reads: ${dbReads(slider)} / ${READS}`} bn={`Database read: ${dbReads(slider)} / ${READS}`} />
          </p>
        </div>
      ) : null}
    </div>
  );
}
