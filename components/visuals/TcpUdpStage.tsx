"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DEFAULT_LOSS, FIRST_LIVE_STEP, HANDSHAKE, LOSS_STEP, MAX_LOSS, MIN_LOSS, PACKETS, runTcp, runUdp, tcpFatesAt, udpFatesAt } from "@/lib/visuals/tcp-udp";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const CELL = 28;
const GAP = 4;
const ROW_X = (WIDTH - (PACKETS * CELL + (PACKETS - 1) * GAP)) / 2;

type Cell = "arrived" | "lost" | "resent" | "none";

function Lane({ y, name, fates, transition, labels }: { y: number; name: string; fates: readonly Cell[]; transition?: string; labels: { lost: string; again: string } }) {
  return (
    <g>
      <text x={ROW_X} y={y - 6} fill="var(--text-dim)" fontSize="12" fontWeight={600}>
        {name}
      </text>
      {fates.map((fate, i) => {
        const color = fate === "arrived" ? "var(--good)" : fate === "lost" ? "var(--danger)" : fate === "resent" ? "var(--warn)" : "var(--text-faint)";
        const x = ROW_X + i * (CELL + GAP);
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={CELL}
              height={CELL}
              rx="5"
              fill={fate === "arrived" || fate === "resent" ? "var(--bg-raised-2)" : "none"}
              stroke={color}
              strokeWidth="2"
              strokeDasharray={fate === "lost" || fate === "none" ? "3 3" : undefined}
              style={{ transition }}
            />
            <text x={x + CELL / 2} y={y + 19} textAnchor="middle" fill={color} fontSize="11" fontWeight={600}>
              {fate === "lost" ? "✕" : fate === "none" ? "" : i + 1}
            </text>
          </g>
        );
      })}
      <text x={ROW_X} y={y + CELL + 15} fill="var(--text-faint)" fontSize="11">
        {fates.includes("lost") ? `✕ ${labels.lost}` : fates.includes("resent") ? `${labels.again}` : ""}
      </text>
    </g>
  );
}

/** Handshake, packets in order, loss and repair (TCP), and the gap (UDP). */
export function TcpUdpStage({ step, reduced, onLive }: StageProps) {
  const [loss, setLoss] = useState(DEFAULT_LOSS);
  const live = step >= FIRST_LIVE_STEP;
  const shown = live ? loss : DEFAULT_LOSS;
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1)";
  const lostLabel = useBn("lost", "হারাল");
  const againLabel = useBn("orange: sent again", "কমলা: আবার পাঠানো");
  const labels = { lost: lostLabel, again: againLabel };
  const lossLabel = useBn("Packet loss in percent", "packet loss, শতাংশে");
  const client = useBn("Client", "ক্লায়েন্ট");
  const server = useBn("Server", "সার্ভার");
  const tcp = runTcp(shown);
  const udp = runUdp(shown);
  const label1 = useBn(`TCP gets ${tcp.delivered} of ${PACKETS}, UDP gets ${udp.delivered} of ${PACKETS}`, `TCP পায় ${tcp.delivered} / ${PACKETS}, UDP পায় ${udp.delivered} / ${PACKETS}`);
  const showHandshake = step <= 1;
  const showTcp = step >= 2 && step !== 5;
  const showUdp = step >= 5;
  const tcpFates = tcpFatesAt(step, shown) as readonly Cell[];
  const udpFates = udpFatesAt(step, shown) as readonly Cell[];

  return (
    <div>
      <svg
        role="img"
        aria-label={label1}
        viewBox={`0 0 ${WIDTH} 230`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="12"
      >
        {step === 0 ? (
          <g>
            <rect x="30" y="40" width="130" height="90" rx="10" fill="var(--bg-raised-2)" stroke="var(--accent)" strokeWidth="2" />
            <text x="95" y="92" textAnchor="middle" fill="var(--accent)" fontSize="22" fontWeight={700}>TCP</text>
            <rect x="200" y="40" width="130" height="90" rx="10" fill="var(--bg-raised-2)" stroke="var(--accent-2)" strokeWidth="2" strokeDasharray="4 3" />
            <text x="265" y="92" textAnchor="middle" fill="var(--accent-2)" fontSize="22" fontWeight={700}>UDP</text>
          </g>
        ) : null}
        {showHandshake && step === 1 ? (
          <g>
            <text x="50" y="30" textAnchor="middle" fill="var(--text-dim)" fontWeight={600}>{client}</text>
            <text x="310" y="30" textAnchor="middle" fill="var(--text-dim)" fontWeight={600}>{server}</text>
            <line x1="50" y1="40" x2="50" y2="200" stroke="var(--border-strong)" strokeWidth="2" />
            <line x1="310" y1="40" x2="310" y2="200" stroke="var(--border-strong)" strokeWidth="2" />
            {HANDSHAKE.map((name, i) => {
              const y = 70 + i * 50;
              const toServer = i !== 1;
              return (
                <g key={name}>
                  <line x1={toServer ? 54 : 306} y1={y} x2={toServer ? 306 : 54} y2={y + 14} stroke="var(--accent)" strokeWidth="2" />
                  <polygon points={toServer ? `306,${y + 14} 296,${y + 8} 298,${y + 18}` : `54,${y + 14} 64,${y + 8} 62,${y + 18}`} fill="var(--accent)" />
                  <text x="180" y={y - 4} textAnchor="middle" fill="var(--text)" fontWeight={600}>{`${i + 1}. ${name}`}</text>
                </g>
              );
            })}
          </g>
        ) : null}
        {showTcp ? <Lane y={showUdp ? 50 : 70} name="TCP" fates={tcpFates} transition={transition} labels={labels} /> : null}
        {showUdp ? <Lane y={showTcp ? 140 : 70} name="UDP" fates={udpFates} transition={transition} labels={labels} /> : null}
        {step === 2 ? (
          <text x={WIDTH / 2} y="150" textAnchor="middle" fill="var(--text-dim)">
            1 → 10
          </text>
        ) : null}
      </svg>
      {live ? (
        <div className="mt-3">
          <label className="flex flex-col gap-1 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Packet loss" bn="Packet loss" />: <strong className="text-[var(--text)]">{loss}%</strong>
            </span>
            <input
              type="range"
              min={MIN_LOSS}
              max={MAX_LOSS}
              step={LOSS_STEP}
              value={loss}
              aria-label={lossLabel}
              onChange={(e) => {
                const next = Number(e.target.value);
                setLoss(next);
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
