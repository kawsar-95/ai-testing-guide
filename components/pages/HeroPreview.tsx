/** A static sketch of a Claude Code session, the kind of work the tutorial teaches. Code stays in English in both languages. */
const LINES: readonly { kind: "prompt" | "out" | "ok" | "dim"; text: string }[] = [
  { kind: "prompt", text: "write a Playwright test for the login flow and run it" },
  { kind: "dim", text: "Read tests/login.spec.ts" },
  { kind: "dim", text: "Wrote tests/login.spec.ts" },
  { kind: "out", text: "$ npx playwright test login" },
  { kind: "ok", text: "3 passed (4.1s)" },
];

const COLOR = {
  prompt: "text-[#e6e6e6]",
  out: "text-[#adbac7]",
  ok: "text-[#4ade80]",
  dim: "text-[#8b939e]",
} as const;

export function HeroPreview({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border border-border-strong bg-[#22272e] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[#2d333b] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#444c56]" />
        <span className="size-2.5 rounded-full bg-[#444c56]" />
        <span className="size-2.5 rounded-full bg-[#444c56]" />
        <span className="ms-3 font-mono text-[12px] text-[#8b939e]">claude</span>
      </div>
      <div className="space-y-2 px-5 py-5 font-mono text-[13px] leading-relaxed">
        {LINES.map((l) => (
          <p key={l.text} className={`m-0 ${COLOR[l.kind]}`}>
            {l.kind === "prompt" ? <span className="me-2 text-[#2dd4bf]">&gt;</span> : null}
            {l.text}
          </p>
        ))}
      </div>
    </div>
  );
}
