"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { AMOUNT, DEFAULT_MODE, sceneFor, toMode, type Mode } from "@/lib/visuals/acid-base";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 250;

type Status = "waiting" | "pending" | "done" | "failed" | "undone";

const COLOR: Record<Status, string> = {
  waiting: "var(--text-faint)",
  pending: "var(--accent)",
  done: "var(--good)",
  failed: "var(--danger)",
  undone: "var(--warn)",
};

/** The two accounts, the two updates, and the transaction toggle of the ACID visual. */
export function AcidBaseStage({ step, reduced, onLive }: StageProps) {
  const [mode, setMode] = useState<Mode>(DEFAULT_MODE);
  const scene = sceneFor(step, mode);
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1)";
  const tx = mode === "transaction";

  const word = {
    ana: "Ana",
    ben: "Ben",
    total: useBn("total", "মোট"),
    u1: useBn("remove 40 from Ana", "Ana থেকে 40 কাটা"),
    u2: useBn("add 40 to Ben", "Ben-এ 40 যোগ"),
    waiting: useBn("waiting", "অপেক্ষা"),
    pending: useBn("not saved yet", "এখনো সেভ হয়নি"),
    done: useBn("saved", "সেভ হয়েছে"),
    failed: useBn("never runs", "চলে না"),
    undone: useBn("cancelled", "বাতিল"),
    crash: useBn("server fails", "সার্ভার ব্যর্থ"),
    box: useBn("transaction", "ট্রানজেকশন"),
  };

  const status = (n: number): Status => {
    if (scene.cancelled && n === 1) return "undone";
    if (scene.phase === "crashed" && n > scene.applied) return "failed";
    if (n > scene.applied) return "waiting";
    return tx && scene.phase !== "committed" ? "pending" : "done";
  };
  const s1 = status(1);
  const s2 = status(2);
  const crashed = scene.phase === "crashed";
  const boxStroke = !tx ? "var(--border)" : scene.cancelled ? "var(--warn)" : scene.phase === "committed" ? "var(--good)" : "var(--accent)";
  const balanceColor = scene.total === 120 ? "var(--good)" : "var(--danger)";

  const account = (x: number, name: string, value: number) => (
    <g>
      <rect x={x} y="14" width="130" height="64" rx="10" fill="var(--bg-raised-2)" stroke="var(--border-strong)" strokeWidth="1.5" />
      <text x={x + 65} y="34" textAnchor="middle" fill="var(--text-dim)" fontSize="12">{name}</text>
      <text x={x + 65} y="64" textAnchor="middle" fill="var(--text)" fontSize="26" fontWeight={700} style={{ transition }}>{value}</text>
    </g>
  );

  const row = (y: number, label: string, st: Status, stateWord: string) => (
    <g>
      <rect x="40" y={y} width="280" height="30" rx="7" fill="none" stroke={COLOR[st]} strokeWidth="2" strokeDasharray={st === "waiting" ? "4 3" : undefined} style={{ transition }} />
      <text x="52" y={y + 20} fill="var(--text)" fontSize="12">{label}</text>
      <text x="308" y={y + 20} textAnchor="end" fill={COLOR[st]} fontSize="11" fontWeight={600}>{stateWord}</text>
    </g>
  );

  return (
    <div>
      <svg role="img" aria-label={`Ana ${scene.ana}, Ben ${scene.ben}, total ${scene.total}`} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="mx-auto block h-auto w-full max-w-sm" fontSize="12">
        {account(30, word.ana, scene.ana)}
        {account(200, word.ben, scene.ben)}
        <path d="M168 46 H192 M186 40 L192 46 L186 52" fill="none" stroke="var(--text-faint)" strokeWidth="1.5" />
        <text x="180" y="38" textAnchor="middle" fill="var(--text-dim)" fontSize="11">{AMOUNT}</text>

        <rect x="30" y="100" width="300" height="82" rx="10" fill="none" stroke={boxStroke} strokeWidth={tx ? 2 : 1} strokeDasharray={tx ? undefined : "2 4"} style={{ transition }} />
        {tx ? <text x="42" y="98" fill={boxStroke} fontSize="11" fontWeight={600}>{word.box}</text> : null}
        {row(106, word.u1, s1, word[s1])}
        {row(144, word.u2, s2, word[s2])}
        {crashed ? (
          <text x="180" y="200" textAnchor="middle" fill="var(--danger)" fontSize="12" fontWeight={600}>⚡ {word.crash}</text>
        ) : null}

        <text x="180" y="232" textAnchor="middle" fill={balanceColor} fontSize="13" fontWeight={600} style={{ transition }}>
          {word.total}: {scene.total} ({scene.ana} + {scene.ben})
        </text>
      </svg>
      <div className="mt-3 flex justify-center">
        <button
          type="button"
          className="btn btn-outline"
          aria-pressed={tx}
          aria-label="Transaction on or off"
          onClick={() => {
            const next: Mode = toMode(tx ? "plain" : "transaction");
            setMode(next);
            onLive(next);
          }}
        >
          <T en="Transaction" bn="ট্রানজেকশন" />: <strong>{tx ? <T en="on" bn="চালু" /> : <T en="off" bn="বন্ধ" />}</strong>
        </button>
      </div>
    </div>
  );
}
