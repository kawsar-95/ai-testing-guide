import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { BugLifeCycleDiagram } from "@/components/fundamentals/diagrams/BugLifeCycleDiagram";
import { PinStateDiagram } from "@/components/fundamentals/diagrams/PinStateDiagram";
import { StlcDiagram } from "@/components/fundamentals/diagrams/StlcDiagram";
import { TestLevelsDiagram } from "@/components/fundamentals/diagrams/TestLevelsDiagram";
import { TestPyramidDiagram } from "@/components/fundamentals/diagrams/TestPyramidDiagram";
import { TestQuadrantsDiagram } from "@/components/fundamentals/diagrams/TestQuadrantsDiagram";
import { TestingClassificationDiagram } from "@/components/fundamentals/diagrams/TestingClassificationDiagram";
import { Version } from "@/components/fundamentals/Version";
import { Callout } from "@/components/mdx/Callout";
import { Cite } from "@/components/mdx/Cite";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { CardGrid } from "@/components/mdx/CardGrid";
import { InfoCard } from "@/components/mdx/InfoCard";
import { MdxImage } from "@/components/mdx/MdxImage";
import { MdxTable } from "@/components/mdx/MdxTable";

// The custom components the MDX files in content/ use without an import.
const components: MDXComponents = {
  BugLifeCycleDiagram,
  Callout,
  CardGrid,
  Cite,
  InfoCard,
  MdxImage,
  PinStateDiagram,
  StlcDiagram,
  TestLevelsDiagram,
  TestPyramidDiagram,
  TestQuadrantsDiagram,
  TestingClassificationDiagram,
  // The two versions of a Fundamentals topic (notes and ISTQB).
  Version,
  // One ## section in three voices. See components/voice/Voices.tsx.
  Voices,
  Technical,
  Layman,
  Bangla,
  // Images get the basePath and a full-size link (a plain <img> has no basePath).
  img: MdxImage,
  pre: CodeBlock,
  // Site-internal links ("/group/page/") go through next/link, which adds the
  // basePath on GitHub Pages. In-page anchors and external links stay plain.
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} />,
  // On phones, each row shows as a card (see .mdx-table in globals.css).
  table: MdxTable,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
