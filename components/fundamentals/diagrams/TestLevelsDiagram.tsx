import { Figure, useDiagramId } from "./Figure";

// The five test levels of the ISTQB CTFL v4.0.1 (section 2.2.1), top to bottom of the drawing.
const LEVELS = [
  { title: "Acceptance testing", note: "Validation and readiness for deployment" },
  { title: "System integration testing", note: "Interfaces to other systems and services" },
  { title: "System testing", note: "Behavior of the entire system" },
  { title: "Component integration testing", note: "Interfaces between components" },
  { title: "Component testing", note: "Components in isolation (unit testing)" },
];
const BAR_X = 10;
const BAR_W = 340;
const BAR_H = 54;
const GAP = 10;
const TOP = 10;
const HEIGHT = TOP * 2 + LEVELS.length * BAR_H + (LEVELS.length - 1) * GAP;

export function TestLevelsDiagram() {
  const titleId = useDiagramId("test-levels-diagram-title");
  return (
    <Figure
      title="Test levels"
      description="The ISTQB syllabus names five test levels. From the bottom up: component testing, component integration testing, system testing, system integration testing, and acceptance testing."
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        viewBox={`0 0 360 ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-md"
        fontSize="13"
      >
        <title id={titleId}>
          The five test levels stacked from the bottom up: component, component integration, system,
          system integration, acceptance
        </title>
        {LEVELS.map((level, i) => {
          const y = TOP + i * (BAR_H + GAP);
          // The top bar is the strongest tint, the bottom bar the lightest.
          const tint = 0.28 - i * 0.05;
          return (
            <g key={level.title}>
              <rect
                x={BAR_X}
                y={y}
                width={BAR_W}
                height={BAR_H}
                rx="8"
                fill="var(--bg-raised-2)"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
              />
              <rect
                x={BAR_X}
                y={y}
                width={BAR_W}
                height={BAR_H}
                rx="8"
                fill="var(--accent)"
                fillOpacity={tint}
              />
              <text x={BAR_X + 16} y={y + 23} fill="currentColor" fontWeight="600" fontSize="14">
                {level.title}
              </text>
              <text x={BAR_X + 16} y={y + 42} fill="currentColor">
                {level.note}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}
