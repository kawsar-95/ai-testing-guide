/**
 * A static sketch of one real lesson: "Browser Testing with Playwright" (content/automate/playwright.mdx),
 * the command and the files that the lesson says it writes. Code stays in English in both languages.
 */
const LINES: readonly { kind: "prompt" | "out" | "dim"; text: string }[] = [
  { kind: "prompt", text: "npx playwright init-agents --loop=claude" },
  { kind: "dim", text: "writes" },
  { kind: "out", text: ".claude/agents/    one file per agent" },
  { kind: "out", text: ".mcp.json          the playwright-test server" },
  { kind: "out", text: "specs/README.md    if specs/ does not exist" },
];

const COLOR = {
  prompt: "text-code-fg-strong",
  out: "text-code-fg",
  dim: "text-code-fg-dim",
} as const;

export function HeroPreview({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border border-border-strong bg-code-bg ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-code-rule px-6 py-4">
        <span className="size-2 rounded-full bg-code-edge" />
        <span className="size-2 rounded-full bg-code-edge" />
        <span className="size-2 rounded-full bg-code-edge" />
        <span className="ms-3 font-mono text-[12px] text-code-fg-dim">Part 17 · Automate</span>
      </div>
      <div className="space-y-3 px-6 py-6 font-mono text-[14px] leading-relaxed">
        {LINES.map((l) => (
          <p key={l.text} className={`m-0 whitespace-pre ${COLOR[l.kind]}`}>
            {l.kind === "prompt" ? <span className="me-2 text-code-accent">&gt;</span> : null}
            {l.text}
          </p>
        ))}
      </div>
    </div>
  );
}
