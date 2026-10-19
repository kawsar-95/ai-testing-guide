import { Figure, useDiagramId } from "./Figure";

// The three ways to split testing, as in the owner's image (testing-classification.png).
const GROUPS = [
  { label: "Based on action", items: [{ text: "Manual", w: 130 }, { text: "Automated", w: 130 }] },
  { label: "Based on code execution", items: [{ text: "Static", w: 130 }, { text: "Dynamic", w: 130 }] },
  {
    label: "Based on techniques",
    items: [
      { text: "Black-box", w: 82 },
      { text: "White-box", w: 82 },
      { text: "Experience-based", w: 132 },
    ],
  },
];
const PANEL_X = 10;
const PANEL_W = 340;
const PANEL_H = 82;
const GAP = 22;
const ROOT_Y = 10;
const ROOT_H = 38;
const FIRST_PANEL_Y = ROOT_Y + ROOT_H + 24;
const HEIGHT = FIRST_PANEL_Y + GROUPS.length * PANEL_H + (GROUPS.length - 1) * GAP + 10;
const ITEM_GAP = 8;

export function TestingClassificationDiagram() {
  const titleId = useDiagramId("testing-classification-diagram-title");
  return (
    <Figure
      title="Ways to classify testing"
      description="Software testing can be split by action (manual or automated), by code execution (static or dynamic), and by technique (black-box, white-box, or experience-based). The three splits look at the same testing from different sides. This grouping is the tutorial's own, not from the ISTQB syllabus. The syllabus names static and dynamic testing and the three technique families, but it does not group testing by action."
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        viewBox={`0 0 360 ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-md"
        fontSize="13"
      >
        <title id={titleId}>
          Software testing split three ways: by action into manual and automated, by code execution into
          static and dynamic, and by technique into black-box, white-box and experience-based
        </title>
        <line
          x1="180"
          y1={ROOT_Y + ROOT_H}
          x2="180"
          y2={HEIGHT - 10 - PANEL_H / 2}
          stroke="var(--border-strong)"
          strokeWidth="2"
        />
        <rect
          x="80"
          y={ROOT_Y}
          width="200"
          height={ROOT_H}
          rx="8"
          fill="var(--bg-raised-2)"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <text
          x="180"
          y={ROOT_Y + 24}
          textAnchor="middle"
          fill="currentColor"
          fontWeight="600"
          fontSize="14"
        >
          Software testing
        </text>
        {GROUPS.map((group, g) => {
          const y = FIRST_PANEL_Y + g * (PANEL_H + GAP);
          const total = group.items.reduce((sum, it) => sum + it.w, 0) + ITEM_GAP * (group.items.length - 1);
          let x = 180 - total / 2;
          return (
            <g key={group.label}>
              <rect
                x={PANEL_X}
                y={y}
                width={PANEL_W}
                height={PANEL_H}
                rx="8"
                fill="var(--bg-raised)"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
              />
              <text
                x="180"
                y={y + 22}
                textAnchor="middle"
                fill="var(--text-dim)"
                fontWeight="600"
              >
                {group.label}
              </text>
              {group.items.map((item) => {
                const itemX = x;
                x += item.w + ITEM_GAP;
                return (
                  <g key={item.text}>
                    <rect
                      x={itemX}
                      y={y + 36}
                      width={item.w}
                      height="34"
                      rx="6"
                      fill="var(--bg-raised-2)"
                      stroke="var(--accent)"
                      strokeWidth="1"
                    />
                    <text
                      x={itemX + item.w / 2}
                      y={y + 58}
                      textAnchor="middle"
                      fill="currentColor"
                    >
                      {item.text}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}
