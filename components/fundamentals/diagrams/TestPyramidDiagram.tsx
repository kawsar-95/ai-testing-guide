import { Figure, useDiagramId } from "./Figure";

// The three layers of the test pyramid (CTFL v4.0.1, section 5.1.6). The pyramid is cut
// flat at the top so that the top layer has room for its text.
const TOP_Y = 10;
const LAYER_H = 92;
const GAP = 4;
const TOP_W = 120;
const BOTTOM_W = 340;
const HEIGHT = TOP_Y * 2 + 3 * LAYER_H + 2 * GAP;
const CX = 180;
const SLOPE = (BOTTOM_W - TOP_W) / (3 * LAYER_H + 2 * GAP);

const LAYERS = [
  { title: "UI / end-to-end", note: "Few, slow", tint: 0.1 },
  { title: "Service / integration", note: "In between", tint: 0.2 },
  { title: "Unit", note: "Many, fast", tint: 0.3 },
];

function widthAt(offset: number): number {
  return TOP_W + SLOPE * offset;
}

export function TestPyramidDiagram() {
  const titleId = useDiagramId("test-pyramid-diagram-title");
  return (
    <Figure
      title="Test pyramid"
      description="In the test pyramid, the bottom layer holds many small, fast, isolated unit tests. The middle layer holds service or integration tests. The top layer holds a few slow end-to-end tests. The higher the layer, the fewer the tests and the longer they run."
    >
      <svg
        role="img"
        aria-labelledby={titleId}
        viewBox={`0 0 360 ${HEIGHT}`}
        className="mx-auto block h-auto w-full max-w-md"
        fontSize="13"
      >
        <title id={titleId}>
          The test pyramid in three layers: unit tests at the bottom (many, fast), service or
          integration tests in the middle, UI or end-to-end tests at the top (few, slow)
        </title>
        {LAYERS.map((layer, i) => {
          const off = i * (LAYER_H + GAP);
          const w1 = widthAt(off);
          const w2 = widthAt(off + LAYER_H);
          const y1 = TOP_Y + off;
          const y2 = y1 + LAYER_H;
          const points = [
            [CX - w1 / 2, y1],
            [CX + w1 / 2, y1],
            [CX + w2 / 2, y2],
            [CX - w2 / 2, y2],
          ]
            .map((p) => p.join(","))
            .join(" ");
          return (
            <g key={layer.title}>
              <polygon
                points={points}
                fill="var(--bg-raised-2)"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <polygon points={points} fill="var(--accent)" fillOpacity={layer.tint} />
              <text
                x={CX}
                y={y1 + LAYER_H / 2 - 2}
                textAnchor="middle"
                fill="currentColor"
                fontWeight="600"
                fontSize="14"
              >
                {layer.title}
              </text>
              <text x={CX} y={y1 + LAYER_H / 2 + 18} textAnchor="middle" fill="currentColor">
                {layer.note}
              </text>
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}
