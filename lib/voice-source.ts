// The authoring check for <Voices> blocks. It is a line scan, not an MDX
// parser. `npm test` uses it. It has no server-only imports.
import { plainTitle, sourceLines } from "./headings.ts";

export type VoiceBlock = {
  /** Plain title of the `##` heading above the block. Empty if there is none. */
  heading: string;
  /** 1-based line of `<Voices>`. */
  line: number;
  /** Raw bodies of the three panels. */
  technical: string;
  layman: string;
  bangla: string;
};

type Panel = "technical" | "layman" | "bangla";

const PANELS: Panel[] = ["technical", "layman", "bangla"];
const ORDER = ["<Technical>", "</Technical>", "<Layman>", "</Layman>", "<Bangla>", "</Bangla>"];
const TAG = /<(\/?)(Voices|Technical|Layman|Bangla)\s*>/;
const SECTION = /^##\s+(.*)$/;
const ANY_HEADING = /^\s*#{1,6}\s+/;
const CITE = /<Cite\s+n=\{(\d+)\}\s*\/?>/g;
const INLINE_CODE = /`[^`]*`/g;
/** The most Bangla letters a <Layman> (plain English) panel may have, as a share of its letters. */
const LAYMAN_MAX_BANGLA = 0.02;
/** The fewest Bangla letters a <Bangla> panel must have. Its terms, names, and code stay in English. */
const BANGLA_MIN_BANGLA = 0.2;

/**
 * The share of Bangla letters among the Bangla and Latin letters of a panel body that a
 * reader reads: code, tags, link targets, and URLs do not count. `null` if it has no letters.
 */
export function banglaShare(body: string): number | null {
  const text = body
    .replace(/^\s*(```+|~~~+)[^\n]*\n[\s\S]*?^\s*\1[^\n]*$/gm, " ")
    .replace(INLINE_CODE, " ")
    .replace(/<[^>\n]*>/g, " ")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/https?:\/\/\S+/g, " ");
  const bangla = (text.match(/[\u0980-\u09FF]/g) ?? []).length;
  const latin = (text.match(/[A-Za-z]/g) ?? []).length;
  return bangla + latin === 0 ? null : bangla / (bangla + latin);
}

type Open = {
  block: VoiceBlock;
  step: number; // index in ORDER of the next expected tag
  orderBad: boolean;
  panel: Panel | null;
  /** Length of the body of `panel` when its opening tag came. */
  bodyStart: number;
  bodies: Record<Panel, string[]>;
  /** 0-based line of each opening panel tag. */
  panelLines: Partial<Record<Panel, number>>;
  technicalCites: Set<number>;
  otherCites: { n: number; line: number }[];
};

function scan(source: string): { blocks: VoiceBlock[]; errors: string[] } {
  const lines = sourceLines(source);
  const blocks: VoiceBlock[] = [];
  const errors: string[] = [];
  const fail = (index: number, message: string) => errors.push(`line ${index + 1}: ${message}`);
  const blank = (index: number) => lines[index] !== undefined && lines[index].text.trim() === "";

  let heading = "";
  let afterHeading = false; // only blank lines since the last ## heading
  let afterBlock = false; // a </Voices> closed a block in this ## section
  let open: Open | null = null;

  /** Ends the open block and runs the checks that need the whole block. */
  const finish = (closed: boolean) => {
    if (!open) return;
    const { block, bodies } = open;
    block.technical = bodies.technical.join("\n").trim();
    block.layman = bodies.layman.join("\n").trim();
    block.bangla = bodies.bangla.join("\n").trim();
    blocks.push(block);
    if (!closed) {
      fail(block.line - 1, "<Voices> is not closed before the next ## heading or the end of the file");
    } else if (!open.orderBad && open.step < ORDER.length) {
      fail(block.line - 1, `order: the block has no ${ORDER[open.step]}`);
    }
    for (const { n, line } of open.otherCites) {
      if (!open.technicalCites.has(n)) fail(line, `cite ${n} is in a panel but <Technical> of the same block does not cite it`);
    }
    // The সহজ English panel is English and the বাংলা panel is Bangla: a copy of the wrong
    // text in a panel passes every other rule. Skipped when the panel order is wrong.
    const lay = open.orderBad ? null : banglaShare(block.layman);
    if (lay !== null && lay > LAYMAN_MAX_BANGLA && open.panelLines.layman !== undefined) {
      fail(open.panelLines.layman, `<Layman> must be plain English, but ${Math.round(lay * 100)}% of its letters are Bangla`);
    }
    const bn = open.orderBad ? null : banglaShare(block.bangla);
    if (bn !== null && bn < BANGLA_MIN_BANGLA && open.panelLines.bangla !== undefined) {
      fail(open.panelLines.bangla, `<Bangla> must be in Bangla, but only ${Math.round(bn * 100)}% of its letters are Bangla`);
    }
    open = null;
  };

  for (const { text, index, kind } of lines) {
    const isBlank = text.trim() === "";
    if (kind !== "text") {
      // A fence line or a code line is content, never a tag.
      if (open?.panel) open.bodies[open.panel].push(text);
      afterHeading = false;
      continue;
    }

    const tag = TAG.exec(text.replace(INLINE_CODE, ""));
    if (tag) {
      const name = tag[2];
      const closing = tag[1] === "/";
      const full = `<${tag[1]}${name}>`;
      if (text.trimEnd() !== full) fail(index, `${full} must be alone on its line at column 0`);

      if (name === "Voices" && !closing) {
        finish(false); // a second <Voices> before </Voices>
        if (!afterHeading) fail(index, "<Voices> must be first after ## (nothing between the heading and the tag)");
        open = {
          block: { heading, line: index + 1, technical: "", layman: "", bangla: "" },
          step: 0,
          orderBad: false,
          panel: null,
          bodyStart: 0,
          bodies: { technical: [], layman: [], bangla: [] },
          panelLines: {},
          technicalCites: new Set(),
          otherCites: [],
        };
      } else if (name === "Voices") {
        if (open) {
          finish(true);
          afterBlock = true;
        } else fail(index, "</Voices> has no <Voices> before it");
      } else if (!open) {
        fail(index, `${full} is outside a <Voices> block`);
      } else {
        if (open.orderBad || ORDER[open.step] !== full) {
          if (!open.orderBad) fail(index, `order: expected ${ORDER[open.step] ?? "</Voices>"} but found ${full}`);
          open.orderBad = true;
        } else {
          open.step += 1;
        }
        if (closing) {
          if (!blank(index - 1)) fail(index, `a blank line must come before ${full}`);
          // A <Layman> or <Bangla> body with only blank lines shows an empty box.
          const panel = open.panel;
          if ((panel === "layman" || panel === "bangla") && name.toLowerCase() === panel) {
            const body = open.bodies[panel].slice(open.bodyStart);
            if (body.every((line) => line.trim() === "")) fail(index, `<${name}> is empty`);
          }
          open.panel = null;
        } else {
          if (!blank(index + 1)) fail(index, `a blank line must follow ${full}`);
          open.panel = PANELS[ORDER.indexOf(full) / 2] ?? null;
          if (open.panel) {
            open.bodyStart = open.bodies[open.panel].length;
            open.panelLines[open.panel] ??= index;
          }
        }
      }
      afterHeading = false;
      continue;
    }

    const section = SECTION.exec(text);
    if (section) {
      finish(false);
      heading = plainTitle(section[1]);
      afterHeading = true;
      afterBlock = false;
      continue;
    }

    if (open?.panel) {
      open.bodies[open.panel].push(text);
      const cites = [...text.matchAll(CITE)].map((match) => Number(match[1]));
      if (open.panel === "technical") cites.forEach((n) => open!.technicalCites.add(n));
      else {
        if (ANY_HEADING.test(text)) fail(index, "a Markdown heading is not allowed in <Layman> or <Bangla>");
        cites.forEach((n) => open!.otherCites.push({ n, line: index }));
      }
    } else if (open && !isBlank) {
      fail(index, "text inside <Voices> is outside a panel");
    } else if (afterBlock && !isBlank) {
      fail(index, "text after </Voices> must move into a panel or under a new ## heading");
    }
    if (!isBlank) afterHeading = false;
  }
  finish(false);
  return { blocks, errors };
}

/** The `<Voices>` blocks of an MDX source, in order, outside code fences. */
export function voiceBlocks(source: string): VoiceBlock[] {
  return scan(source).blocks;
}

/** Every broken authoring rule of an MDX source. Each message starts with `line N:`. */
export function voiceErrors(source: string): string[] {
  return scan(source).errors;
}
