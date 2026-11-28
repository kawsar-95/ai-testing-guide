"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { CAPACITY_PER_SERVER, DEFAULT_LOAD, FIRST_LIVE_STEP, LOAD_STEP, MAX_LOAD, MIN_LOAD, sceneFor } from "@/lib/visuals/horizontal-scaling";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 250;

/** Users, a load balancer, the app servers and a database. */
export function HorizontalScalingStage({ step, reduced, onLive }: StageProps) {
  const [load, setLoad] = useState(DEFAULT_LOAD);
  const live = step >= FIRST_LIVE_STEP;
  const scene = sceneFor(step, load);
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1), height 340ms cubic-bezier(.2,.7,.2,1), y 340ms cubic-bezier(.2,.7,.2,1)";
  const usersLabel = useBn("Users", "User");
  const lbLabel = useBn("Load balancer", "Load balancer");
  const dbLabel = useBn("Database", "Database");
  const appLabel = useBn("App", "App");
  const downLabel = useBn("down", "বন্ধ");
  const slowLabel = useBn("slow", "ধীর");

  const count = scene.servers.length;
  const gap = 104;
  const serverX = (i: number) => WIDTH / 2 + (i - (count - 1) / 2) * gap;
  const BAR_H = 44;
  const lbY = 58;
  const serverY = 118;
  const dbY = 214;

  return (
    <div>
      <svg
        role="img"
        aria-label={`${scene.serversUp} of ${count} servers up, demand ${scene.demand}, served ${Math.round(scene.served)}`}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="11"
      >
        {/* Users */}
        <text x={WIDTH / 2} y="14" textAnchor="middle" fill="var(--text-dim)">
          {usersLabel}: {scene.demand}
        </text>
        <line x1={WIDTH / 2} y1="20" x2={WIDTH / 2} y2={scene.hasBalancer ? lbY : serverY} stroke="var(--accent-2)" strokeWidth="2" />

        {/* Load balancer */}
        {scene.hasBalancer ? (
          <g>
            <rect x={WIDTH / 2 - 55} y={lbY} width="110" height="26" rx="6" fill="var(--bg-raised-2)" stroke="var(--accent)" strokeWidth="1.5" />
            <text x={WIDTH / 2} y={lbY + 17} textAnchor="middle" fill="var(--text)">
              {lbLabel}
            </text>
          </g>
        ) : null}

        {/* Servers */}
        {scene.servers.map((s) => {
          const x = serverX(s.index);
          const color = !s.up ? "var(--text-faint)" : s.overloaded ? "var(--danger)" : "var(--good)";
          const fillH = Math.min(1, s.load / CAPACITY_PER_SERVER) * BAR_H;
          return (
            <g key={s.index}>
              {scene.hasBalancer ? (
                <line
                  x1={WIDTH / 2}
                  y1={lbY + 26}
                  x2={x}
                  y2={serverY}
                  stroke={s.up ? "var(--accent-2)" : "var(--text-faint)"}
                  strokeWidth="2"
                  strokeDasharray={s.up ? undefined : "4 4"}
                />
              ) : null}
              <rect x={x - 40} y={serverY} width="80" height="78" rx="8" fill="var(--bg-raised-2)" stroke={color} strokeWidth="2" strokeDasharray={s.up ? undefined : "4 4"} />
              <text x={x} y={serverY + 15} textAnchor="middle" fill="var(--text-dim)">
                {appLabel} {s.index + 1}
              </text>
              <rect x={x - 28} y={serverY + 22} width="14" height={BAR_H} rx="3" fill="none" stroke="var(--border-strong)" />
              <rect x={x - 28} y={serverY + 22 + BAR_H - fillH} width="14" height={fillH} rx="3" fill={color} style={{ transition }} />
              <text x={x - 6} y={serverY + 40} fill={color} fontWeight={600}>
                {s.up ? Math.round(s.load) : downLabel}
              </text>
              <text x={x - 6} y={serverY + 56} fill="var(--text-faint)">
                {s.up ? `/ ${CAPACITY_PER_SERVER}` : ""}
              </text>
              <text x={x} y={serverY + 72} textAnchor="middle" fill={color} fontWeight={600}>
                {s.up ? (s.overloaded ? "!" : "✓") : "✕"}
              </text>
            </g>
          );
        })}

        {/* Database */}
        {scene.servers.map((s) =>
          s.up ? <line key={s.index} x1={serverX(s.index)} y1={serverY + 78} x2={WIDTH / 2} y2={dbY} stroke="var(--border-strong)" strokeWidth="1.5" /> : null,
        )}
        <rect
          x={WIDTH / 2 - 60}
          y={dbY}
          width="120"
          height="28"
          rx="6"
          fill="var(--bg-raised-2)"
          stroke={scene.dbLimit !== null ? "var(--warn)" : "var(--border-strong)"}
          strokeWidth="1.5"
        />
        <text x={WIDTH / 2} y={dbY + 18} textAnchor="middle" fill={scene.dbLimit !== null ? "var(--warn)" : "var(--text)"}>
          {dbLabel}
          {scene.dbLimit !== null ? ` (${slowLabel}: ${scene.dbLimit})` : ""}
        </text>
      </svg>
      {live ? (
        <div className="mt-3">
          <label className="flex flex-col gap-1 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Demand (requests a second)" bn="Demand (প্রতি সেকেন্ডে request)" />: <strong className="text-[var(--text)]">{scene.demand}</strong>
            </span>
            <input
              type="range"
              min={MIN_LOAD}
              max={MAX_LOAD}
              step={LOAD_STEP}
              value={load}
              aria-label="Demand in requests a second"
              onChange={(e) => {
                const next = Number(e.target.value);
                setLoad(next);
                onLive(next);
              }}
              className="w-full"
            />
          </label>
          <ul className="m-0 mt-2 flex list-none flex-wrap justify-center gap-x-4 gap-y-1 p-0 text-sm text-[var(--text-dim)]">
            <li className="mb-0">
              <T en="Served" bn="Served" />: <strong className="text-[var(--good)]">{Math.round(scene.served)}</strong>
            </li>
            <li className="mb-0">
              <T en="Dropped" bn="Dropped" />: <strong className={scene.dropped > 0 ? "text-[var(--danger)]" : "text-[var(--text)]"}>{Math.round(scene.dropped)}</strong>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
