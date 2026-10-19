import { Figure, useDiagramId } from "./Figure";

// The testing quadrants of the ISTQB CTFL v4.0.1 (section 5.1.7). Each item is a list of
// lines (a long item wraps on a second line).
type Quadrant = { id: string; col: 0 | 1; row: 0 | 1; items: string[][]; note: string };

const QUADRANTS: Quadrant[] = [
  {
    id: "Q2",
    col: 0,
    row: 0,
    items: [
      ["functional tests"],
      ["examples"],
      ["user story tests"],
      ["user experience", "prototypes"],
      ["API testing"],
      ["simulations"],
    ],
    note: "Manual or automated",
  },
  {
    id: "Q3",
    col: 1,
    row: 0,
    items: [["exploratory testing"], ["usability testing"], ["user acceptance", "testing"]],
    note: "Often manual",
  },
  {
    id: "Q1",
    col: 0,
    row: 1,
    items: [["component tests"], ["component integration", "tests"]],
    note: "Automated, in CI",
  },
  {
    id: "Q4",
    col: 1,
    row: 1,
    items: [["smoke tests"], ["non-functional tests", "(except usability)"]],
    note: "Often automated",
  },
];

const CELL_W = 171;
const CELL_X = [6, 183];
const COL_HEAD_Y = 22;
const BAND_H = 22;
const ROW_H = [178, 108];
const ROW_GAP = 6;
const ROW_TOP = [COL_HEAD_Y + 12, COL_HEAD_Y + 12 + BAND_H + ROW_H[0] + ROW_GAP];
const HEIGHT = ROW_TOP[1] + BAND_H + ROW_H[1] + 8;
const LINE = 16;

export function TestQuadrantsDiagram() {
  const titleId = useDiagramId("test-quadrants-diagram-title");
  return (
    <Figure
      title="Testing quadrants"
      description="The testing quadrants have two viewpoints. Tests are business facing or technology facing, and they support the team or critique the product. Q1 (technology facing, support the team): component tests and component integration tests. Q2 (business facing, support the team): API testing, user story tests, functional tests, simulations, examples, and user experience prototypes. Q3 (business facing, critique the product): exploratory testing, usability testing, and user acceptance testing. Q4 (technology facing, critique the product): smoke tests and non-functional tests, except usability tests."
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        viewBox={`0 0 360 ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-md"
        fontSize="13"
      >
        <title id={titleId}>
          The four testing quadrants. Business facing on top, technology facing below. Support the
          team on the left, critique the product on the right. Q1 component tests, Q2 functional
          tests, Q3 exploratory tests, Q4 smoke and non-functional tests
        </title>
        <g fill="currentColor" fontWeight="600" fontSize="14" textAnchor="middle">
          <text x={CELL_X[0] + CELL_W / 2} y={COL_HEAD_Y}>
            Support the team
          </text>
          <text x={CELL_X[1] + CELL_W / 2} y={COL_HEAD_Y}>
            Critique the product
          </text>
        </g>
        {[0, 1].map((row) => (
          <text
            key={row}
            x="8"
            y={ROW_TOP[row] + 15}
            fill="var(--accent)"
            fontWeight="600"
            letterSpacing="0.5"
          >
            {row === 0 ? "BUSINESS FACING" : "TECHNOLOGY FACING"}
          </text>
        ))}
        {QUADRANTS.map((q) => {
          const x = CELL_X[q.col];
          const y = ROW_TOP[q.row] + BAND_H;
          let line = 0;
          return (
            <g key={q.id}>
              <rect
                x={x}
                y={y}
                width={CELL_W}
                height={ROW_H[q.row]}
                rx="8"
                fill="var(--bg-raised-2)"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
              />
              <text x={x + 12} y={y + 24} fill="var(--accent)" fontWeight="700" fontSize="15">
                {q.id}
              </text>
              {q.items.map((item) =>
                item.map((text, k) => {
                  const ty = y + 46 + line * LINE;
                  line += 1;
                  return (
                    <text key={text} x={x + (k === 0 ? 12 : 22)} y={ty} fill="currentColor">
                      {k === 0 ? `• ${text}` : text}
                    </text>
                  );
                }),
              )}
              <text
                x={x + 12}
                y={y + ROW_H[q.row] - 10}
                fill="var(--text-dim)"
                fontStyle="italic"
              >
                {q.note}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}
