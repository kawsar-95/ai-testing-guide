"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import {
  ABORT_LIMIT_MS,
  DEFAULT_LIMIT_MS,
  DELAY_ABORT_EVAL_S,
  DURATION_S,
  LIMIT_MAX_MS,
  LIMIT_MIN_MS,
  LIMIT_STEP_MS,
  SAMPLES,
  abortSecond,
  clampLimit,
  runningP99,
  verdictAt,
} from "@/lib/visuals/k6-thresholds";
import type { StageProps } from "./StepVisual";

const W = 360;
const H = 250;
const LEFT = 40;
const RIGHT = 276;
const TOP = 16;
const BOTTOM = 206;
const GAUGE_X = 306;
const GAUGE_W = 22;

const xOf = (t: number) => LEFT + (t / DURATION_S) * (RIGHT - LEFT);
const yOf = (ms: number) => BOTTOM - (Math.min(ms, LIMIT_MAX_MS) / LIMIT_MAX_MS) * (BOTTOM - TOP);

const mark = (pass: boolean) => (pass ? "✓" : "✗");

/** The dots of one run, the p(99) gauge, and the limit line of the k6 thresholds visual. */
export function K6ThresholdsStage({ step, reduced, onLive }: StageProps) {
  const [limitState, setLimit] = useState(DEFAULT_LIMIT_MS);
  const aborting = step === 5;
  const limit = aborting ? ABORT_LIMIT_MS : limitState;
  const stop = aborting ? abortSecond(ABORT_LIMIT_MS) : null;
  const shownUntil = stop ?? DURATION_S;
  const v = verdictAt(limit, shownUntil);
  const full = verdictAt(limit);
  const showP99 = step >= 1 && step !== 4;
  const showLimit = step >= 2;
  const verdictColor = v.pass ? "var(--good)" : "var(--danger)";
  const transition = reduced ? undefined : "y 300ms ease, fill 300ms ease, stroke 300ms ease";
  const lineTransition = reduced ? undefined : "stroke 300ms ease";
  const running = runningP99();
  const path = running.map((r, i) => `${i === 0 ? "M" : "L"}${xOf(r.t).toFixed(1)},${yOf(r.value).toFixed(1)}`).join(" ");
  const gaugeTop = yOf(Math.min(v.value, LIMIT_MAX_MS));
  const showGauge = step >= 1;
  const limitY = yOf(limit);

  return (
    <div>
      <svg role="img" aria-label="Request times of one run, the p(99) value, and the limit line" viewBox={`0 0 ${W} ${H}`} className="mx-auto block h-auto w-full max-w-md" fontSize="11">
        {/* axes */}
        <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="var(--border-strong)" />
        <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="var(--border-strong)" />
        {[0, 400, 800].map((ms) => (
          <text key={ms} x={LEFT - 5} y={yOf(ms) + 4} textAnchor="end" fill="var(--text-faint)">
            {ms}
          </text>
        ))}
        {[0, 10, 20, 30].map((t) => (
          <text key={t} x={xOf(t)} y={BOTTOM + 15} textAnchor="middle" fill="var(--text-faint)">
            {t}s
          </text>
        ))}
        <text x={LEFT} y={H - 6} fill="var(--text-dim)">
          http_req_duration (ms)
        </text>

        {/* abortOnFail: the delay zone, and the stop */}
        {aborting ? (
          <g>
            <rect x={xOf(0)} y={TOP} width={xOf(DELAY_ABORT_EVAL_S) - xOf(0)} height={BOTTOM - TOP} fill="var(--bg-raised-2)" />
            <text x={xOf(0) + 3} y={TOP + 12} fill="var(--text-dim)">
              delay {DELAY_ABORT_EVAL_S}s
            </text>
            {stop !== null ? (
              <g>
                <line x1={xOf(stop)} y1={TOP} x2={xOf(stop)} y2={BOTTOM} stroke="var(--danger)" strokeWidth="2" />
                <text x={xOf(stop) + 4} y={TOP + 26} fill="var(--danger)">
                  abort
                </text>
              </g>
            ) : null}
          </g>
        ) : null}

        {/* the running p(99), judged only at the end */}
        {step === 4 ? (
          <g>
            <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2" />
            <circle cx={xOf(DURATION_S)} cy={yOf(running[running.length - 1].value)} r="5" fill={verdictColor} stroke="var(--bg-raised)" strokeWidth="1.5" />
          </g>
        ) : null}

        {/* the request dots */}
        {SAMPLES.filter((s) => s.t <= shownUntil).map((s, i) => (
          <circle key={i} cx={xOf(s.t)} cy={yOf(s.ms)} r="2.6" fill="var(--text-dim)" opacity={step === 4 ? 0.35 : 0.85} />
        ))}

        {/* the p(99) line */}
        {showP99 ? <line x1={LEFT} y1={yOf(v.value)} x2={RIGHT} y2={yOf(v.value)} stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 3" /> : null}
        {showP99 ? (
          <text x={RIGHT - 3} y={yOf(v.value) + (limit < v.value && showLimit ? 14 : -5)} textAnchor="end" fill="var(--accent)">
            p(99) {v.value}
          </text>
        ) : null}

        {/* the limit line */}
        {showLimit ? (
          <g>
            <line x1={LEFT} y1={limitY} x2={RIGHT} y2={limitY} stroke={verdictColor} strokeWidth="2" style={{ transition: lineTransition }} />
            <text x={LEFT + 4} y={limitY + (limit > 700 ? 14 : -5)} fill={verdictColor}>
              limit {limit}
            </text>
          </g>
        ) : null}

        {/* the gauge */}
        {showGauge ? (
          <g>
            <rect x={GAUGE_X} y={TOP} width={GAUGE_W} height={BOTTOM - TOP} rx="3" fill="var(--bg-raised-2)" stroke="var(--border-strong)" />
            <rect x={GAUGE_X} y={gaugeTop} width={GAUGE_W} height={BOTTOM - gaugeTop} rx="3" fill="var(--accent)" opacity="0.85" style={{ transition }} />
            {showLimit ? <line x1={GAUGE_X - 5} y1={limitY} x2={GAUGE_X + GAUGE_W + 5} y2={limitY} stroke={verdictColor} strokeWidth="2.5" /> : null}
            <text x={GAUGE_X + GAUGE_W / 2} y={TOP - 4} textAnchor="middle" fill="var(--text-dim)">
              p(99)
            </text>
          </g>
        ) : null}

        {/* the verdict badge */}
        {step >= 2 && step !== 4 && step !== 6 ? (
          <g>
            <rect x={LEFT + 8} y={TOP + 22} width="86" height="24" rx="5" fill="var(--bg-raised)" stroke={verdictColor} strokeWidth="1.5" />
            <text x={LEFT + 51} y={TOP + 38} textAnchor="middle" fill={verdictColor} fontWeight="600">
              {mark(v.pass)} p(99)&lt;{limit}
            </text>
          </g>
        ) : null}
        {step === 4 && full ? (
          <text x={RIGHT - 3} y={TOP + 12} textAnchor="end" fill={verdictColor} fontWeight="600">
            {mark(full.pass)} at {DURATION_S}s
          </text>
        ) : null}
        {step === 6 ? (
          <g>
            <rect x={LEFT + 8} y={TOP + 14} width="120" height="40" rx="6" fill="var(--bg-raised)" stroke={verdictColor} strokeWidth="2" />
            <text x={LEFT + 68} y={TOP + 40} textAnchor="middle" fill={verdictColor} fontSize="16" fontWeight="600">
              exit {full.exitCode}
            </text>
          </g>
        ) : null}
      </svg>

      {step === 3 || step === 6 ? (
        <div className="mt-3 flex items-center gap-3 text-sm text-[var(--text-dim)]">
          <label htmlFor="k6-threshold-limit" className="shrink-0">
            <T en="Limit (ms)" bn="Limit (ms)" />
          </label>
          <input
            id="k6-threshold-limit"
            type="range"
            aria-label="p(99) limit in milliseconds"
            min={LIMIT_MIN_MS}
            max={LIMIT_MAX_MS}
            step={LIMIT_STEP_MS}
            value={limitState}
            onChange={(e) => {
              const next = clampLimit(Number(e.target.value));
              setLimit(next);
              onLive(next);
            }}
            className="min-w-0 flex-1"
          />
          <span className="w-14 shrink-0 text-right tabular-nums">{limitState} ms</span>
        </div>
      ) : null}
    </div>
  );
}
