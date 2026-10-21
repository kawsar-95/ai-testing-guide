/**
 * The site mark: a magnifier with a check mark. app/icon.svg and the PWA
 * icons use the same drawing on a dark tile. It is decorative. With `mono`,
 * all strokes take the current text color, for the teal tile of the header
 * and the footer.
 */
export function BrandMark({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  const ring = mono ? "stroke-current" : "stroke-accent";
  const check = mono ? "stroke-current" : "stroke-good";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="10.5" cy="10.5" r="7" className={ring} />
      <path d="m15.6 15.6 4.9 4.9" className={ring} />
      <path d="m7.4 10.8 2.2 2.2 3.9-4.3" className={check} />
    </svg>
  );
}
