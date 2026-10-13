"use client";

type Option<T extends string> = { value: T; label: string };

/** A group of buttons with `aria-pressed`. One button is pressed. A click calls `onChange`. */
export function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
  className = "",
}: {
  label: string;
  options: readonly Option<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`inline-flex rounded-[8px] border border-border-strong ${className}`}
    >
      {options.map((option) => {
        const pressed = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={pressed}
            onClick={() => onChange(option.value)}
            className={`cursor-pointer px-3.5 py-1.5 first:rounded-l-[7px] last:rounded-r-[7px] font-mono text-[12px] transition-[background-color,border-color,color] focus-visible:relative focus-visible:z-10 ${
              pressed
                ? "bg-accent text-bg"
                : "bg-bg-raised text-text-dim hover:bg-bg-raised-2 hover:text-text"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
