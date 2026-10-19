import { Figure, useDiagramId } from "./Figure";

// The test activity groups of the ISTQB CTFL v4.0.1 (section 1.4.1), as boxes in order.
const STEPS = [
  { title: "Test planning", note: "Objectives and approach" },
  { title: "Test analysis", note: "What to test?" },
  { title: "Test design", note: "How to test?" },
  { title: "Test implementation", note: "Testware and environment" },
  { title: "Test execution", note: "Run tests, log results" },
  { title: "Test completion", note: "Report and lessons learned" },
];
const BOX_X = 10;
const BOX_W = 225;
const BOX_H = 50;
const GAP = 24;
const TOP = 10;
const HEIGHT = TOP * 2 + STEPS.length * BOX_H + (STEPS.length - 1) * GAP;
const BAR_X = 255;
const BAR_W = 95;

export function StlcDiagram() {
  const titleId = useDiagramId("stlc-diagram-title");
  const arrowId = useDiagramId("stlc-diagram-arrow");
  return (
    <Figure
      title="Test activities"
      description="The ISTQB test process has seven groups of activities: test planning, test monitoring and test control, test analysis, test design, test implementation, test execution, and test completion. Test monitoring and test control run beside all the others. The activities often overlap or repeat."
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        viewBox={`0 0 360 ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-md"
        fontSize="13"
      >
        <title id={titleId}>
          The seven test activity groups: planning, analysis, design, implementation, execution and
          completion, with test monitoring and test control beside all of them. The activities often
          overlap or repeat
        </title>
        <defs>
          <marker
            id={arrowId}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--text-dim)" />
          </marker>
        </defs>
        <rect
          x={BAR_X}
          y={TOP}
          width={BAR_W}
          height={HEIGHT - TOP * 2}
          rx="8"
          fill="var(--bg-raised-2)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <g fill="currentColor" fontWeight="600" fontSize="14" textAnchor="middle">
          <text x={BAR_X + BAR_W / 2} y={HEIGHT / 2 - 22}>Test</text>
          <text x={BAR_X + BAR_W / 2} y={HEIGHT / 2 - 4}>monitoring</text>
          <text x={BAR_X + BAR_W / 2} y={HEIGHT / 2 + 14}>and test</text>
          <text x={BAR_X + BAR_W / 2} y={HEIGHT / 2 + 32}>control</text>
        </g>
        {STEPS.map((step, i) => {
          const y = TOP + i * (BOX_H + GAP);
          return (
            <g key={step.title}>
              {i > 0 && (
                <line
                  x1={BOX_X + BOX_W / 2}
                  y1={y - GAP}
                  x2={BOX_X + BOX_W / 2}
                  y2={y - 1}
                  stroke="var(--text-dim)"
                  strokeWidth="1.5"
                  markerEnd={`url(#${arrowId})`}
                />
              )}
              <line
                x1={BOX_X + BOX_W}
                y1={y + BOX_H / 2}
                x2={BAR_X}
                y2={y + BOX_H / 2}
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <rect
                x={BOX_X}
                y={y}
                width={BOX_W}
                height={BOX_H}
                rx="8"
                fill="var(--bg-raised-2)"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
              />
              <text x={BOX_X + 14} y={y + 21} fill="currentColor" fontWeight="600" fontSize="14">
                {step.title}
              </text>
              <text x={BOX_X + 14} y={y + 39} fill="var(--text-dim)">
                {step.note}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}
