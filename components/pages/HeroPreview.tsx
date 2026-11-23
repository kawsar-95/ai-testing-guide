/**
 * A static sketch of one real lesson: "Browser Testing with Playwright" (content/automate/playwright.mdx),
 * the command and the files that the lesson says it writes. Code stays in English in both languages.
 */
const LINES: readonly { kind: "prompt" | "out" | "ok" | "dim"; text: string }[] = [
  { kind: "prompt", text: "npx playwright init-agents --loop=claude" },
  { kind: "dim", text: "writes" },
  { kind: "out", text: ".claude/agents/    one file per agent" },
  { kind: "out", text: ".mcp.json          the playwright-test server" },
  { kind: "out", text: "specs/README.md    if specs/ does not exist" },
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
        <span className="ms-3 font-mono text-[12px] text-[#8b939e]">Part 17 · Automate</span>
      </div>
      <div className="space-y-2 px-5 py-5 font-mono text-[13px] leading-relaxed">
        {LINES.map((l) => (
          <p key={l.text} className={`m-0 whitespace-pre ${COLOR[l.kind]}`}>
            {l.kind === "prompt" ? <span className="me-2 text-[#2dd4bf]">&gt;</span> : null}
            {l.text}
          </p>
        ))}
      </div>
    </div>
  );
}
