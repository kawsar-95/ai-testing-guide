import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
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
import { Visual } from "@/components/visuals/Visual";
import { Bangla, Layman, Technical } from "@/components/voice/panels";
import { Voices } from "@/components/voice/Voices";

/**
 * A heading of a content page. The `##` heading marks a section, so it
 * settles when the reader reaches it (app/globals.css reads the
 * `data-reveal` attribute).
 *
 * The heading keeps its own element and its own props, so the id that
 * rehype-slug gave it (the anchor of "On this page") and the text that
 * SectionFocus reads are both unchanged.
 */
function Heading2(props: ComponentProps<"h2">) {
  return <h2 data-reveal="up" {...props} />;
}

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
  // An animated lesson: <Visual name="..." /> after <PageMeta />. See components/visuals/Visual.tsx.
  Visual,
  // The two versions of a Fundamentals topic (notes and ISTQB).
  Version,
  // The `##` heading of a section. It settles when the reader reaches it.
  h2: Heading2,
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
