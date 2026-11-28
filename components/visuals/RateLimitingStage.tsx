"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import {
  BURST,
  DEFAULT_LIMIT,
  MAX_LIMIT,
  MIN_LIMIT,
  WINDOW_S,
  refillSeconds,
  retryAfterSeconds,
  runBurst,
  sceneFor,
} from "@/lib/visuals/rate-limiting";
import type { Chip, StageProps } from "./StepVisual";

const LAST_STEP = 6;
const WIDTH = 360;
const HEIGHT = 230;

/** The live numbers of each step, from the same scene that the stage draws (limit of the page's example). */
export function rateLimitingChips(step: number): readonly Chip[] {
  const scene = sceneFor(step);
  const run = runBurst(DEFAULT_LIMIT);
  const tokens: Chip = { label: { en: "Tokens", bn: "টোকেন" }, value: `${scene.tokens} / ${scene.limit}` };
  if (step === 0) return [tokens, { label: { en: "Window", bn: "window" }, value: `${WINDOW_S / 60} min` }];
  if (step === 1) return [tokens, { label: { en: "Burst", bn: "burst" }, value: String(BURST) }];
  if (step === 2) return [tokens, { label: { en: "Passed", bn: "pass" }, value: `${run.passed} / ${BURST}` }];
  if (step === 3) {
    return [tokens, { label: { en: "429 answers", bn: "429 উত্তর" }, value: `${run.rejected} / ${BURST}` }, { label: { en: "Retry-After", bn: "Retry-After" }, value: `${retryAfterSeconds(DEFAULT_LIMIT)} s` }];
  }
  if (step === 4) return [tokens, { label: { en: "Waited", bn: "অপেক্ষা" }, value: `${scene.waited} s` }];
  if (step === 5) return [tokens, { label: { en: "Waited", bn: "অপেক্ষা" }, value: `${scene.waited} s` }];
  return [{ label: { en: "Window", bn: "window" }, value: `${WINDOW_S / 60} min` }, { label: { en: "Burst", bn: "burst" }, value: String(BURST) }];
}

/** The bucket, the burst, and the answers of the rate-limiting visual. */
export function RateLimitingStage({ step, reduced }: StageProps) {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const live = step === LAST_STEP;
  const scene = sceneFor(step, live ? limit : DEFAULT_LIMIT);
  const run = runBurst(scene.limit);
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1)";

  const slotGap = Math.min(40, 300 / scene.limit);
  const slotsX = (i: number) => WIDTH / 2 + (i - (scene.limit - 1) / 2) * slotGap;
  const reqGap = 52;
  const reqX = (i: number) => WIDTH / 2 + (i - (BURST - 1) / 2) * reqGap;

  return (
    <div>
      <svg
        role="img"
        aria-label={`Token bucket with ${scene.tokens} of ${scene.limit} tokens`}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="12"
      >
        {/* The bucket */}
        <rect x="30" y="20" width="300" height="76" rx="10" fill="var(--bg-raised-2)" stroke="var(--border-strong)" strokeWidth="1.5" />
        <text x="42" y="38" fill="var(--text-dim)" fontSize="11">
          tokens {scene.tokens} / {scene.limit}
        </text>
        {Array.from({ length: scene.limit }, (_, i) => {
          const full = i < scene.tokens;
          return (
            <circle
              key={i}
              cx={slotsX(i)}
              cy="68"
              r="13"
              fill={full ? "var(--accent)" : "none"}
              stroke={full ? "var(--accent)" : "var(--text-faint)"}
              strokeWidth="1.5"
              strokeDasharray={full ? undefined : "3 3"}
              style={{ transition }}
            />
          );
        })}
        {/* The requests of the burst */}
        <text x="30" y="124" fill="var(--text-dim)" fontSize="11">
          {scene.burstHere ? `${BURST} requests` : "no requests"}
        </text>
        {Array.from({ length: BURST }, (_, i) => {
          if (!scene.burstHere) return null;
          const answer = scene.results[i];
          const color = answer === "ok" ? "var(--good)" : answer === "429" ? "var(--danger)" : "var(--text-faint)";
          return (
            <g key={i}>
              <rect x={reqX(i) - 20} y="134" width="40" height="28" rx="6" fill="none" stroke={color} strokeWidth="2" style={{ transition }} />
              <text x={reqX(i)} y="153" textAnchor="middle" fill={color} fontWeight={600}>
                {answer === "ok" ? "200" : answer === "429" ? "429" : "?"}
              </text>
            </g>
          );
        })}
        {/* The footer line: Retry-After or the refill */}
        {step === 3 ? (
          <text x={WIDTH / 2} y="196" textAnchor="middle" fill="var(--warn)">
            Retry-After: {retryAfterSeconds(DEFAULT_LIMIT)}
          </text>
        ) : null}
        {step === 4 || step === 5 ? (
          <text x={WIDTH / 2} y="196" textAnchor="middle" fill="var(--text-dim)">
            +{scene.tokens - run.tokensLeft} token after {scene.waited} s
          </text>
        ) : null}
        {live ? (
          <text x={WIDTH / 2} y="196" textAnchor="middle" fill="var(--text-dim)">
            {run.passed} pass, {run.rejected} get 429
          </text>
        ) : null}
      </svg>
      {live ? (
        <div className="mt-3">
          <label className="flex flex-col gap-1 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Limit per 5 minutes" bn="5 মিনিটে limit" />: <strong className="text-[var(--text)]">{limit}</strong>
            </span>
            <input
              type="range"
              min={MIN_LIMIT}
              max={MAX_LIMIT}
              step={1}
              value={limit}
              aria-label="Limit per 5 minutes"
              onChange={(e) => setLimit(Number(e.target.value))}
              className="w-full"
            />
          </label>
          <ul className="m-0 mt-2 flex list-none flex-wrap justify-center gap-x-4 gap-y-1 p-0 text-sm text-[var(--text-dim)]">
            <li className="mb-0">
              <T en="Passed" bn="pass" />: <strong className="text-[var(--good)]">{run.passed} / {BURST}</strong>
            </li>
            <li className="mb-0">
              <T en="429 answers" bn="429 উত্তর" />: <strong className="text-[var(--danger)]">{run.rejected} / {BURST}</strong>
            </li>
            <li className="mb-0">
              <T en="One token every" bn="একটি টোকেন ফেরে প্রতি" />: <strong className="text-[var(--text)]">{refillSeconds(limit)} s</strong>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
