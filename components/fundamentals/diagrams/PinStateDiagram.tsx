import { Figure, useDiagramId } from "./Figure";

// The PIN example of the owner's image (state-transition-pin.png): three tries,
// then access is granted or the account is blocked.
const TRY_X = 20;
const TRY_W = 120;
const TRY_H = 40;
const TRY_CX = TRY_X + TRY_W / 2;
const TRY_Y = [76, 156, 236];
const GRANTED_X = 250;
const GRANTED_W = 100;
const BLOCKED_Y = 316;
const HEIGHT = BLOCKED_Y + TRY_H + 10;
const TRIES = ["1st try", "2nd try", "3rd try"];

export function PinStateDiagram() {
  const titleId = useDiagramId("pin-state-diagram-title");
  const arrowId = useDiagramId("pin-state-diagram-arrow");
  return (
    <Figure
      title="State transition of a PIN entry"
      description="This is the tutorial's own example, not from the ISTQB syllabus. The system starts and waits for the first try. A correct PIN on any of the three tries leads to access granted. An incorrect PIN moves from the 1st try to the 2nd try, and from the 2nd try to the 3rd try. An incorrect PIN on the 3rd try leads to account blocked."
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        viewBox={`0 0 360 ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-md"
        fontSize="13"
      >
        <title id={titleId}>
          States of a PIN check. From start to 1st try, 2nd try and 3rd try, each incorrect PIN moves
          to the next try. A correct PIN on any try gives access granted. An incorrect PIN on the 3rd
          try blocks the account
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
        <circle cx={TRY_CX} cy="24" r="10" fill="currentColor" />
        <text x={TRY_CX + 20} y="29" fill="currentColor" fontWeight="600" fontSize="14">
          Start
        </text>
        <line
          x1={TRY_CX}
          y1="34"
          x2={TRY_CX}
          y2={TRY_Y[0] - 1}
          stroke="var(--text-dim)"
          strokeWidth="1.5"
          markerEnd={`url(#${arrowId})`}
        />
        {/* Incorrect PIN: down to the next try, and from the 3rd try to the blocked state. */}
        {[1, 2, 3].map((n) => {
          const from = TRY_Y[n - 1] + TRY_H;
          const to = n < 3 ? TRY_Y[n] : BLOCKED_Y;
          return (
            <g key={n}>
              <line
                x1={TRY_CX}
                y1={from}
                x2={TRY_CX}
                y2={to - 1}
                stroke="var(--danger)"
                strokeWidth="1.5"
                markerEnd={`url(#${arrowId})`}
              />
              <text x={TRY_CX + 10} y={(from + to) / 2 + 5} fill="currentColor">
                Incorrect PIN
              </text>
            </g>
          );
        })}
        {/* Correct PIN: right to access granted. */}
        {TRY_Y.map((y) => (
          <g key={y}>
            <line
              x1={TRY_X + TRY_W}
              y1={y + TRY_H / 2}
              x2={GRANTED_X - 1}
              y2={y + TRY_H / 2}
              stroke="var(--good)"
              strokeWidth="1.5"
              markerEnd={`url(#${arrowId})`}
            />
            <text
              x={(TRY_X + TRY_W + GRANTED_X) / 2}
              y={y + TRY_H / 2 - 7}
              textAnchor="middle"
              fill="currentColor"
            >
              Correct PIN
            </text>
          </g>
        ))}
        {TRIES.map((label, i) => (
          <g key={label}>
            <rect
              x={TRY_X}
              y={TRY_Y[i]}
              width={TRY_W}
              height={TRY_H}
              rx="20"
              fill="var(--bg-raised-2)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text
              x={TRY_CX}
              y={TRY_Y[i] + 25}
              textAnchor="middle"
              fill="currentColor"
              fontWeight="600"
              fontSize="14"
            >
              {label}
            </text>
          </g>
        ))}
        <rect
          x={GRANTED_X}
          y={TRY_Y[0]}
          width={GRANTED_W}
          height={TRY_Y[2] + TRY_H - TRY_Y[0]}
          rx="20"
          fill="var(--bg-raised-2)"
          stroke="var(--good)"
          strokeWidth="1.5"
        />
        <g fill="currentColor" fontWeight="600" fontSize="14" textAnchor="middle">
          <text x={GRANTED_X + GRANTED_W / 2} y={TRY_Y[1] + 17}>
            Access
          </text>
          <text x={GRANTED_X + GRANTED_W / 2} y={TRY_Y[1] + 37}>
            granted
          </text>
        </g>
        <rect
          x={TRY_X - 10}
          y={BLOCKED_Y}
          width={TRY_W + 20}
          height={TRY_H}
          rx="20"
          fill="var(--bg-raised-2)"
          stroke="var(--danger)"
          strokeWidth="1.5"
        />
        <text
          x={TRY_CX}
          y={BLOCKED_Y + 25}
          textAnchor="middle"
          fill="currentColor"
          fontWeight="600"
          fontSize="14"
        >
          Account blocked
        </text>
      </svg>
    </Figure>
  );
}
