"use client";

import { useState } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import { DEFAULT_SUBS, LIVE_STEP, MAX_SUBS, MIN_SUBS, NAMES, directSends, sceneFor } from "@/lib/visuals/pub-sub";
import type { StageProps } from "./StepVisual";

const WIDTH = 360;
const HEIGHT = 260;
const MID = HEIGHT / 2;
const PUB_X = 14;
const PUB_W = 78;
const TOPIC_X = 142;
const TOPIC_W = 60;
const SUB_X = 262;
const SUB_W = 88;

/** The publisher, the topic, and the subscriptions of the pub-sub visual. */
export function PubSubStage({ step, reduced, onLive }: StageProps) {
  const [subs, setSubs] = useState(DEFAULT_SUBS);
  const live = step === LIVE_STEP;
  const scene = sceneFor(step, live ? subs : DEFAULT_SUBS);
  const transition = reduced ? undefined : "fill 340ms cubic-bezier(.2,.7,.2,1), stroke 340ms cubic-bezier(.2,.7,.2,1), opacity 340ms";

  const publisher = useBn("publisher", "পাবলিশার");
  const topic = useBn("topic", "টপিক");
  const names = [useBn(NAMES[0].en, NAMES[0].bn), useBn(NAMES[1].en, NAMES[1].bn), useBn(NAMES[2].en, NAMES[2].bn)];
  const downWord = useBn("down", "বন্ধ");
  const ackLost = useBn("ack lost", "অ্যাক হারাল");
  const sendsWord = useBn("sends", "পাঠায়");
  const topicWord = useBn("with a topic", "টপিকে");
  const directWord = useBn("direct", "সরাসরি");
  const nameOf = (i: number) => (i < names.length ? names[i] : `#${i + 1}`);

  const gap = Math.min(48, 200 / Math.max(scene.subs, 1));
  const rowY = (i: number) => MID + (i - (scene.subs - 1) / 2) * gap;
  const boxH = Math.min(34, gap - 6);

  return (
    <div>
      <svg
        role="img"
        aria-label={`Publisher, ${scene.broker ? "topic, " : ""}${scene.subs} subscribers, ${scene.copies} copies`}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-sm"
        fontSize="12"
      >
        {/* Publisher */}
        <rect x={PUB_X} y={MID - 22} width={PUB_W} height="44" rx="8" fill="var(--bg-raised-2)" stroke="var(--accent)" strokeWidth="2" />
        <text x={PUB_X + PUB_W / 2} y={MID + 4} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight={600}>
          {publisher}
        </text>
        <text x={PUB_X + PUB_W / 2} y={MID - 32} textAnchor="middle" fill="var(--accent)" fontSize="11" fontWeight={600}>
          {scene.publisherSends}×
        </text>

        {/* Topic */}
        {scene.broker ? (
          <g>
            <line x1={PUB_X + PUB_W} y1={MID} x2={TOPIC_X} y2={MID} stroke="var(--accent)" strokeWidth="2" />
            <circle cx={PUB_X + PUB_W + 20} cy={MID} r="6" fill="var(--accent)" style={{ transition }} />
            <rect x={TOPIC_X} y={MID - 26} width={TOPIC_W} height="52" rx="10" fill="var(--bg-raised-2)" stroke="var(--accent-2)" strokeWidth="2" />
            <text x={TOPIC_X + TOPIC_W / 2} y={MID + 4} textAnchor="middle" fill="var(--text)" fontSize="11" fontWeight={600}>
              {topic}
            </text>
          </g>
        ) : null}

        {/* Subscriptions */}
        {Array.from({ length: scene.subs }, (_, i) => {
          const y = rowY(i);
          const isDown = scene.down === i;
          const lost = scene.lostAck === i;
          const got = scene.deliveries[i] ?? 0;
          const acked = scene.copies > 0 && !isDown && !lost;
          const color = isDown ? "var(--danger)" : lost ? "var(--warn)" : acked ? "var(--good)" : "var(--border-strong)";
          const fromX = scene.broker ? TOPIC_X + TOPIC_W : PUB_X + PUB_W;
          const fromY = scene.broker ? MID : MID;
          return (
            <g key={i}>
              <line
                x1={fromX}
                y1={fromY}
                x2={SUB_X}
                y2={y}
                stroke={scene.direct ? "var(--warn)" : "var(--accent-2)"}
                strokeWidth="1.5"
                strokeDasharray={isDown ? "4 4" : undefined}
                opacity={isDown ? 0.5 : 1}
                style={{ transition }}
              />
              <rect x={SUB_X} y={y - boxH / 2} width={SUB_W} height={boxH} rx="7" fill="var(--bg-raised-2)" stroke={color} strokeWidth="2" strokeDasharray={isDown ? "4 3" : undefined} style={{ transition }} />
              <text x={SUB_X + 8} y={y + 4} fill="var(--text)" fontSize="11" fontWeight={600}>
                {nameOf(i)}
              </text>
              {got > 0 ? (
                <text x={SUB_X + SUB_W - 8} y={y + 4} textAnchor="end" fill={color} fontSize="11" fontWeight={600}>
                  {got > 1 ? `×${got}` : isDown ? "" : "✓"}
                </text>
              ) : null}
              {isDown ? (
                <text x={SUB_X + SUB_W - 8} y={y + 4} textAnchor="end" fill="var(--danger)" fontSize="11" fontWeight={600}>
                  {downWord}
                </text>
              ) : null}
              {lost ? (
                <text x={SUB_X + SUB_W / 2} y={y + boxH / 2 + 13} textAnchor="middle" fill="var(--warn)" fontSize="11">
                  {ackLost}
                </text>
              ) : null}
            </g>
          );
        })}

        {/* Footer line */}
        {live ? (
          <text x={WIDTH / 2} y={HEIGHT - 6} textAnchor="middle" fill="var(--text-dim)" fontSize="11">
            {topicWord} {scene.publisherSends} · {directWord} {directSends(scene.subs)}
          </text>
        ) : null}
        {scene.direct ? (
          <text x={WIDTH / 2} y={HEIGHT - 6} textAnchor="middle" fill="var(--warn)" fontSize="11">
            {publisher} {sendsWord} {scene.publisherSends}
          </text>
        ) : null}
      </svg>
      {live ? (
        <div className="mt-3">
          <label className="flex flex-col gap-1 text-sm text-[var(--text-dim)]">
            <span>
              <T en="Subscriptions" bn="সাবস্ক্রিপশন" />: <strong className="text-[var(--text)]">{subs}</strong>
            </span>
            <input
              type="range"
              min={MIN_SUBS}
              max={MAX_SUBS}
              step={1}
              value={subs}
              aria-label="Number of subscriptions"
              onChange={(e) => {
                const next = Number(e.target.value);
                setSubs(next);
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
