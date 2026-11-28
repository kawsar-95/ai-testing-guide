"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { T } from "@/components/i18n/T";
import { useBn } from "@/components/i18n/useBn";
import type { VisualDef } from "@/lib/visuals/defs";

/** One live number above the stage. */
export type Chip = { label: { en: string; bn: string }; value: string };

/** The picture of a visual: it gets the current step and draws only what that step shows. */
export type StageProps = { step: number; reduced: boolean };

const STEP_MS = 4500;

function subscribeReduced(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/** True if the reader asked for reduced motion. The server and the first render say true: no autoplay. */
function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
}

/**
 * The shell of an animated lesson: a title, a row of live numbers, one stage, a caption, and a
 * stepper. The topic gives the stage and the numbers; the text comes from lib/visuals/defs.ts.
 * It shows English or Bangla through <T>, so the text is right before hydration.
 *
 * - Back and Next move one step. The dots jump to a step. Play advances by itself and stops at the
 *   last step. With reduced motion, Play is off and the stage does not animate.
 * - The caption is a live region, so a screen reader hears each new step.
 */
export function StepVisual({
  def,
  chips,
  stage,
}: {
  def: VisualDef;
  chips: (step: number) => readonly Chip[];
  stage: (props: StageProps) => ReactNode;
}) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduced = useReducedMotion();
  const last = def.steps.length - 1;
  const current = def.steps[step];
  const label = useBn(`${def.title.en}: step ${step + 1} of ${def.steps.length}. ${current.title.en}`, `${def.title.bn}: ধাপ ${step + 1} / ${def.steps.length}। ${current.title.bn}`);

  useEffect(() => {
    if (!playing || reduced) return;
    if (step >= last) {
      setPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => setStep((s) => Math.min(s + 1, last)), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [playing, reduced, step, last]);

  const go = (next: number) => {
    setPlaying(false);
    setStep(Math.max(0, Math.min(next, last)));
  };

  return (
    <section className="my-8 rounded-md border border-border bg-bg-raised p-4 sm:p-6" aria-label={label}>
      <header>
        <h3 className="m-0 text-lg font-medium text-text">
          <T en={def.title.en} bn={def.title.bn} />
        </h3>
        <p className="mb-0 mt-1 text-sm text-text-dim">
          <T en={def.promise.en} bn={def.promise.bn} />
        </p>
        <p className="mb-0 mt-2 text-xs text-text-faint">
          <T en={`${def.minutes} min · ${def.steps.length} steps`} bn={`${def.minutes} মিনিট · ${def.steps.length}টি ধাপ`} />
        </p>
      </header>

      <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0" aria-label={useBn("Live numbers", "লাইভ সংখ্যা")}>
        {chips(step).map((chip) => (
          <li key={chip.label.en} className="m-0 rounded-md border border-border bg-bg-raised-2 px-3 py-1.5 text-sm">
            <span className="text-text-faint">
              <T en={chip.label.en} bn={chip.label.bn} />
            </span>{" "}
            <strong className="font-medium text-text tabular-nums">{chip.value}</strong>
          </li>
        ))}
      </ul>

      <div className="mt-4">{stage({ step, reduced })}</div>

      <div className="mt-4" aria-live="polite">
        <p className="mb-0 text-xs text-text-faint">
          <T en={`Step ${step + 1} of ${def.steps.length}`} bn={`ধাপ ${step + 1} / ${def.steps.length}`} />
        </p>
        <h4 className="mb-0 mt-1 text-base font-medium text-text">
          <T en={current.title.en} bn={current.title.bn} />
        </h4>
        <p className="mb-0 mt-1 text-sm leading-relaxed text-text-dim">
          <T en={current.body.en} bn={current.body.bn} />
        </p>
        {step === last ? (
          <p className="mb-0 mt-2 text-sm leading-relaxed text-text-faint">
            <T en={def.recap.en} bn={def.recap.bn} />
          </p>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button type="button" className="btn btn-outline" onClick={() => go(step - 1)} disabled={step === 0}>
          <T en="Back" bn="পেছনে" />
        </button>
        <button type="button" className="btn btn-outline" onClick={() => go(step + 1)} disabled={step === last}>
          <T en="Next" bn="পরের ধাপ" />
        </button>
        {step === last ? (
          <button type="button" className="btn btn-outline" onClick={() => go(0)}>
            <T en="Replay" bn="আবার দেখুন" />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => setPlaying((p) => !p)}
            disabled={reduced}
            aria-pressed={playing}
          >
            {playing ? <T en="Pause" bn="থামান" /> : <T en="Play" bn="চালান" />}
          </button>
        )}
        <ol className="m-0 ml-auto flex list-none items-center gap-1.5 p-0" aria-label={useBn("Steps", "ধাপ")}>
          {def.steps.map((s, i) => (
            <li key={s.title.en} className="m-0">
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={`${i + 1}. ${s.title.en}`}
                aria-current={i === step ? "step" : undefined}
                className={`block h-2.5 w-2.5 rounded-full border ${
                  i === step ? "border-accent bg-accent" : i < step ? "border-accent bg-transparent" : "border-border-strong bg-transparent"
                }`}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
