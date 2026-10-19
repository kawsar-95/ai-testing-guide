import { Figure, useDiagramId } from "./Figure";

// The bug life cycle of the owner's image (bug-life-cycle.png). ISTQB does not define
// these states; the figure shows the owner's version.
const MAIN_X = 20;
const BOX_W = 140;
const BOX_H = 36;
const SIDE_X = 210;
const SIDE_W = 130;
const PITCH = 80;
const FIRST_CY = 30;
const cy = (row: number) => FIRST_CY + row * PITCH;
const HEIGHT = cy(4) + BOX_H / 2 + 10;
const MAIN = ["New", "Open", "Fixed", "Retest", "Closed"];
const MAIN_RIGHT = MAIN_X + BOX_W;
const REOPEN_CY = (cy(2) + cy(3)) / 2;

function Box({
  x,
  w,
  centerY,
  label,
  stroke,
}: {
  x: number;
  w: number;
  centerY: number;
  label: string;
  stroke: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={centerY - BOX_H / 2}
        width={w}
        height={BOX_H}
        rx="8"
        fill="var(--bg-raised-2)"
        stroke={stroke}
        strokeWidth="1.5"
      />
      <text
        x={x + w / 2}
        y={centerY + 5}
        textAnchor="middle"
        fill="currentColor"
        fontWeight="600"
        fontSize="14"
      >
        {label}
      </text>
    </g>
  );
}

export function BugLifeCycleDiagram() {
  const titleId = useDiagramId("bug-life-cycle-diagram-title");
  const arrowId = useDiagramId("bug-life-cycle-diagram-arrow");
  return (
    <Figure
      title="Bug life cycle"
      description="A bug starts as New and moves to Open, then Fixed, then Retest, then Closed. A New bug can be Rejected. An Open bug can be Deferred. A bug that fails the retest is Reopened and goes back to Fixed. This is the owner's version of the life cycle. The ISTQB syllabus does not define these states."
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        viewBox={`0 0 360 ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-md"
        fontSize="13"
      >
        <title id={titleId}>
          Bug life cycle: New, Open, Fixed, Retest, Closed in order. New can go to Rejected. Open can
          go to Deferred. Retest can go to Reopen, and Reopen goes back to Fixed
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
        <g stroke="var(--text-dim)" strokeWidth="1.5" fill="none" markerEnd={`url(#${arrowId})`}>
          {[0, 1, 2, 3].map((row) => (
            <line
              key={row}
              x1={MAIN_X + BOX_W / 2}
              y1={cy(row) + BOX_H / 2}
              x2={MAIN_X + BOX_W / 2}
              y2={cy(row + 1) - BOX_H / 2 - 1}
            />
          ))}
          <line x1={MAIN_RIGHT} y1={cy(0)} x2={SIDE_X - 1} y2={cy(0)} />
          <line x1={MAIN_RIGHT} y1={cy(1)} x2={SIDE_X - 1} y2={cy(1)} />
          <line x1={MAIN_RIGHT} y1={cy(3)} x2={SIDE_X - 1} y2={REOPEN_CY + 7} />
          <line x1={SIDE_X} y1={REOPEN_CY - 7} x2={MAIN_RIGHT + 1} y2={cy(2)} />
        </g>
        {MAIN.map((label, row) => (
          <Box
            key={label}
            x={MAIN_X}
            w={BOX_W}
            centerY={cy(row)}
            label={label}
            stroke={label === "Closed" ? "var(--good)" : "var(--accent)"}
          />
        ))}
        <Box x={SIDE_X} w={SIDE_W} centerY={cy(0)} label="Rejected" stroke="var(--danger)" />
        <Box x={SIDE_X} w={SIDE_W} centerY={cy(1)} label="Deferred" stroke="var(--warn)" />
        <Box x={SIDE_X} w={SIDE_W} centerY={REOPEN_CY} label="Reopen" stroke="var(--warn)" />
      </svg>
    </Figure>
  );
}
