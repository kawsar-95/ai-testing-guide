import { Children, cloneElement, isValidElement } from "react";
import type { ComponentProps, ReactElement, ReactNode } from "react";

// The table elements of MDX: plain tags whose props this file sets (role, data-label).
type WithChildren = { children?: ReactNode; [prop: string]: unknown };

/** The plain text of a node, for the column label of a cell. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<WithChildren>(node)) return textOf(node.props.children);
  return "";
}

/** The element children of a node. MDX can put newline text between rows and cells. */
function elementsOf(node: ReactNode): ReactElement<WithChildren>[] {
  return Children.toArray(node).filter(isValidElement<WithChildren>);
}

/**
 * A GFM table. On phones, globals.css shows each row as a card and each cell
 * with its column name (`data-label`) above the value. The explicit roles keep
 * the table semantics when CSS changes the display of the table elements.
 */
export function MdxTable({ children, ...props }: ComponentProps<"table">) {
  const sections = elementsOf(children);
  const thead = sections.find((section) => section.type === "thead");
  const headerRow = thead ? elementsOf(thead.props.children)[0] : undefined;
  const labels = headerRow ? elementsOf(headerRow.props.children).map((th) => textOf(th).trim()) : [];

  const rows = sections.map((section) =>
    cloneElement(section, {
      role: "rowgroup",
      children: elementsOf(section.props.children).map((tr) =>
        cloneElement(tr, {
          role: "row",
          children: elementsOf(tr.props.children).map((cell, i) =>
            cloneElement(cell, {
              role: cell.type === "th" ? "columnheader" : "cell",
              ...(cell.type === "td" ? { "data-label": labels[i] ?? "" } : {}),
            }),
          ),
        }),
      ),
    }),
  );

  return (
    <div className="mdx-table">
      <table role="table" {...props}>
        {rows}
      </table>
    </div>
  );
}
