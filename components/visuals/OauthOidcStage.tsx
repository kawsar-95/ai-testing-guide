"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DEFAULT_MODE, LANES, flow, visibleMessages, type Lane, type Mode } from "@/lib/visuals/oauth-oidc";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const TOP = 62;
const ROW = 25;
const LANE_X: Record<Lane, number> = { user: 48, app: 136, auth: 224, api: 312 };
const NAMES: Record<Lane, { en: [string, string]; bn: [string, string] }> = {
  user: { en: ["User", ""], bn: ["ইউজার", ""] },
  app: { en: ["App", ""], bn: ["অ্যাপ", ""] },
  auth: { en: ["Authorization", "server"], bn: ["অথরাইজেশন", "সার্ভার"] },
  api: { en: ["API", ""], bn: ["API", ""] },
};

/** Four lanes, the messages of the flow up to this step, and an OAuth / OIDC toggle. */
export function OauthOidcStage({ step, reduced, onLive }: StageProps) {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE);
  const isBn = useBn("en", "bn") === "bn";
  const maxRows = flow("oidc").length;
  const height = TOP + maxRows * ROW + 8;
  const shown = visibleMessages(mode, step);
  const transition = reduced ? undefined : "opacity 300ms ease";

  const pick = (next: Mode) => {
    setMode(next);
    onLive(next);
  };
  const tokenColor = (t?: "access" | "id") => (t === "id" ? "var(--accent-2)" : t === "access" ? "var(--accent)" : "var(--text)");

  const label1 = useBn("Choose OAuth or OpenID Connect", "OAuth বা OpenID Connect বেছে নিন");
  const label2 = useBn(`Authorization code flow with ${mode === "oidc" ? "OpenID Connect" : "OAuth"}, ${shown.length} messages shown`, `${mode === "oidc" ? "OpenID Connect" : "OAuth"} সহ অথরাইজেশন কোড ফ্লো, ${shown.length}টি মেসেজ দেখানো হচ্ছে`);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-center gap-2" role="group" aria-label={label1}>
        <span className="text-sm text-[var(--text-dim)]">
          <T en="Show" bn="দেখান" />:
        </span>
        {(["oauth", "oidc"] as const).map((m) => (
          <button
            key={m}
            type="button"
            className="btn btn-outline"
            aria-pressed={mode === m}
            onClick={() => pick(m)}
            style={mode === m ? { borderColor: "var(--accent)", color: "var(--accent)" } : undefined}
          >
            {m === "oauth" ? "OAuth" : "OpenID Connect"}
          </button>
        ))}
      </div>
      <svg role="img" aria-label={label2} viewBox={`0 0 ${WIDTH} ${height}`} className="mx-auto block h-auto w-full max-w-sm" fontSize="11">
        {LANES.map((lane) => {
          const x = LANE_X[lane];
          const [l1, l2] = (isBn ? NAMES[lane].bn : NAMES[lane].en);
          return (
            <g key={lane}>
              <rect x={x - 40} y="6" width="80" height="38" rx="8" fill="var(--bg-raised-2)" stroke="var(--border-strong)" />
              <text x={x} y={l2 ? 22 : 29} textAnchor="middle" fill="var(--text)" fontWeight={600}>
                {l1}
              </text>
              {l2 ? (
                <text x={x} y="36" textAnchor="middle" fill="var(--text)" fontWeight={600}>
                  {l2}
                </text>
              ) : null}
              <line x1={x} y1="44" x2={x} y2={height - 4} stroke="var(--border)" strokeDasharray="3 4" />
            </g>
          );
        })}
        {shown.map((m, i) => {
          const y = TOP + i * ROW;
          const current = m.step === step;
          const color = current ? tokenColor(m.token) : "var(--text-faint)";
          const label = isBn ? m.label.bn : m.label.en;
          const w = label.length * (isBn ? 6.4 : 6.2) + 12;
          const x1 = LANE_X[m.from];
          const x2 = LANE_X[m.to];
          const mid = (x1 + x2) / 2;
          if (m.kind === "note") {
            return (
              <g key={i} style={{ transition }}>
                <rect x={x1 - w / 2} y={y - 12} width={w} height="20" rx="6" fill="var(--bg-raised)" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
                <text x={x1} y={y + 2} textAnchor="middle" fill={current ? "var(--text)" : "var(--text-dim)"}>
                  {label}
                </text>
              </g>
            );
          }
          const dir = x2 > x1 ? 1 : -1;
          return (
            <g key={i} style={{ transition }}>
              <line x1={x1} y1={y} x2={x2 - dir * 6} y2={y} stroke={color} strokeWidth={current ? 2 : 1.5} />
              <polygon points={`${x2},${y} ${x2 - dir * 8},${y - 4} ${x2 - dir * 8},${y + 4}`} fill={color} />
              <rect x={mid - w / 2} y={y - 10} width={w} height="18" rx="5" fill="var(--bg-raised)" />
              <text x={mid} y={y + 3} textAnchor="middle" fill={current ? "var(--text)" : "var(--text-dim)"} fontWeight={current ? 600 : 400}>
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
