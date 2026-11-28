"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import {
  DAY_MINUTES,
  DEFAULT_NINES,
  MONTH_MINUTES,
  NINES_PPM,
  REGION_PPM,
  YEAR_MINUTES,
  creditPercent,
  downtimeMinutes,
  durationText,
  logBarLength,
  percentText,
  sceneFor,
} from "@/lib/visuals/availability";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const BAR_X = 10;
const BAR_W = 340;
const TIERS = [
  { ppm: REGION_PPM, credit: 0, label: "≥ 99.99 %" },
  { ppm: 10_000, credit: 10, label: "< 99.99 %, ≥ 99.0 %" },
  { ppm: 50_000, credit: 30, label: "< 99.0 %, ≥ 95.0 %" },
  { ppm: Infinity, credit: 100, label: "< 95.0 %" },
] as const;

/** The bars, the tiles, and the slider of the availability visual. */
export function AvailabilityStage({ step, reduced, onLive }: StageProps) {
  const [index, setIndex] = useState(DEFAULT_NINES);
  const scene = sceneFor(step, index);
  const ppm = NINES_PPM[index] ?? NINES_PPM[DEFAULT_NINES]!;
  const transition = reduced ? undefined : "width 340ms cubic-bezier(.2,.7,.2,1), background-color 340ms";
  const period = scene.period === "year" ? YEAR_MINUTES : MONTH_MINUTES;
  const ladder = step === 2;

  return (
    <div>
      {ladder ? (
        <svg role="img" aria-label="Allowed downtime for 99, 99.9, 99.99 and 99.999 percent" viewBox={`0 0 ${WIDTH} 190`} className="mx-auto block h-auto w-full max-w-sm" fontSize="12">
          {NINES_PPM.map((p, i) => {
            const minutes = downtimeMinutes(p, YEAR_MINUTES);
            const len = logBarLength(minutes);
            const on = i === index;
            return (
              <g key={p}>
                <text x={BAR_X} y={20 + i * 44} fill={on ? "var(--text)" : "var(--text-dim)"} fontWeight={on ? 600 : 400}>
                  {percentText(p)} %
                </text>
                <text x={BAR_X + BAR_W} y={20 + i * 44} textAnchor="end" fill={on ? "var(--text)" : "var(--text-dim)"} fontWeight={on ? 600 : 400}>
                  {durationText(minutes)}
                </text>
                <rect x={BAR_X} y={26 + i * 44} width={BAR_W} height="10" rx="3" fill="var(--bg-raised-2)" />
                <rect x={BAR_X} y={26 + i * 44} width={len} height="10" rx="3" fill={on ? "var(--danger)" : "var(--text-faint)"} style={{ transition }} />
              </g>
            );
          })}
        </svg>
      ) : step === 5 ? (
        <ul className="m-0 mx-auto flex max-w-sm list-none flex-col gap-2 p-0" aria-label="Service credit tiers">
          {TIERS.map((tier) => {
            const on = creditPercent(ppm) === tier.credit;
            return (
              <li
                key={tier.credit}
                className="m-0 flex items-center justify-between rounded-md border px-3 py-2 text-sm"
                style={{
                  borderColor: on ? "var(--accent)" : "var(--border)",
                  background: on ? "var(--bg-raised-2)" : "var(--bg-raised)",
                  color: on ? "var(--text)" : "var(--text-dim)",
                }}
              >
                <span>{tier.label}</span>
                <strong>{tier.credit} %</strong>
              </li>
            );
          })}
        </ul>
      ) : (
        <svg
          role="img"
          aria-label={`Uptime bar of one ${scene.period}, with the downtime sliver`}
          viewBox={`0 0 ${WIDTH} ${scene.bars.length > 1 ? 120 : 80}`}
          className="mx-auto block h-auto w-full max-w-sm"
          fontSize="12"
        >
          {scene.bars.map((bar, i) => {
            const down = Math.max(2, (BAR_W * bar.ppm) / 1_000_000);
            const y = 26 + i * 48;
            return (
              <g key={i}>
                <text x={BAR_X} y={y - 8} fill="var(--text-dim)">
                  {bar.label ? `${bar.label} · ` : ""}
                  {percentText(bar.ppm)} %
                </text>
                <text x={BAR_X + BAR_W} y={y - 8} textAnchor="end" fill="var(--danger)">
                  {durationText(downtimeMinutes(bar.ppm, period))}
                </text>
                <rect x={BAR_X} y={y} width={BAR_W} height="22" rx="4" fill="var(--good)" />
                <rect x={BAR_X + BAR_W - down} y={y} width={down} height="22" rx="2" fill="var(--danger)" style={{ transition }} />
              </g>
            );
          })}
        </svg>
      )}

      {step === 1 ? (
        <ul className="m-0 mt-3 grid list-none grid-cols-3 gap-2 p-0 text-center text-sm" aria-label="Downtime allowed">
          {[
            { en: "Year", bn: "বছর", m: YEAR_MINUTES },
            { en: "Month", bn: "মাস", m: MONTH_MINUTES },
            { en: "Day", bn: "দিন", m: DAY_MINUTES },
          ].map((tile) => (
            <li key={tile.en} className="m-0 rounded-md border px-2 py-2" style={{ borderColor: "var(--border)", background: "var(--bg-raised)" }}>
              <div style={{ color: "var(--text-dim)" }}>
                <T en={tile.en} bn={tile.bn} />
              </div>
              <strong>{durationText(downtimeMinutes(ppm, tile.m))}</strong>
            </li>
          ))}
        </ul>
      ) : null}

      {scene.slider ? (
        <div className="mt-3 flex flex-col gap-1">
          <label htmlFor="availability-nines" className="m-0 text-sm" style={{ color: "var(--text-dim)" }}>
            <T en="Target" bn="টার্গেট" />: <strong style={{ color: "var(--text)" }}>{percentText(ppm)} %</strong>
          </label>
          <input
            id="availability-nines"
            type="range"
            min={0}
            max={NINES_PPM.length - 1}
            step={1}
            value={index}
            onChange={(e) => {
              const next = Number(e.target.value);
              setIndex(next);
              onLive(next);
            }}
            aria-label="Target availability, from 99 to 99.999 percent"
            aria-valuetext={`${percentText(ppm)} percent`}
            className="w-full"
          />
          <div className="m-0 flex justify-between text-xs" style={{ color: "var(--text-faint)" }} aria-hidden="true">
            {NINES_PPM.map((p) => (
              <span key={p}>{percentText(p)}</span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
