"""Write the 47 MDX pages of the AI/ML Testing module.

The page data lives in scripts/ai_ml_testing_pages.py, one dict per page.
This script renders the MDX, so every page has the same shape:

    # <title>
    <lede>
    <PageMeta />
    ## In plain words        <Voices> Technical | Layman | Bangla </Voices>
    ## How it works          <Voices> ...
    ## In practice           <Voices> ... (ends with the Tutorial advice callout)
    ## Common mistakes       <Voices> ...
    ## What a tester can check <Voices> ...
    ## Key words             (a table, no voices)

A cite is written {{cite:source-key}} in the panel text and becomes
<Cite n={k} />, where k is the number of that source in the page's list.

Usage: python3 scripts/ai_ml_testing_pages_gen.py [--only <slug> ...]
"""

import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from ai_ml_testing_pages import PAGES
from ai_ml_testing_sources import source

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "content" / "ai-ml-testing"

UPDATED = "2026-11-01"

SECTION_ORDER = [
    "In plain words",
    "How it works",
    "In practice",
    "Common mistakes",
    "What a tester can check",
]

CITE_RE = re.compile(r"\{\{cite:([a-z0-9-]+)\}\}")


def _js_escape(text: str) -> str:
    """Escape a string for a single-quoted JS string literal.

    Backslash first, then the quote, so an existing backslash is not
    double-escaped by the quote step.
    """
    return text.replace("\\", "\\\\").replace("'", "\\'")


def render_sources(keys: list[str], updated: str = UPDATED) -> tuple[str, dict[str, int]]:
    """The `export const page` block and the cite number of each source key."""
    lines = [
        "export const page = {",
        f"  updated: '{updated}',",
        "  sources: [",
    ]
    numbers: dict[str, int] = {}
    for number, key in enumerate(keys, start=1):
        item = source(key)
        numbers[key] = number
        lines.append(
            f"    {{ title: '{_js_escape(item.title)}', publisher: '{_js_escape(item.publisher)}', "
            f"url: '{item.url}', accessed: '{item.accessed}' }},"
        )
    lines.append("  ],")
    lines.append("}")
    return "\n".join(lines), numbers


def render_voices(technical: str, layman: str, bangla: str) -> str:
    """One <Voices> block from the three panels of a section."""
    return (
        "<Voices>\n"
        "<Technical>\n\n"
        f"{technical.strip()}\n\n"
        "</Technical>\n"
        "<Layman>\n\n"
        f"{layman.strip()}\n\n"
        "</Layman>\n"
        "<Bangla>\n\n"
        f"{bangla.strip()}\n\n"
        "</Bangla>\n"
        "</Voices>"
    )


def render_page(page: dict) -> str:
    """The whole MDX file of one page."""
    # A page that changed after the module date carries its own `updated`.
    sources_block, numbers = render_sources(page["sources"], page.get("updated", UPDATED))

    def cite(match: re.Match) -> str:
        key = match.group(1)
        if key not in numbers:
            raise KeyError(f"{page['slug']}: cites unknown source {key!r}")
        return f"<Cite n={{{numbers[key]}}} />"

    body: list[str] = []
    for heading in SECTION_ORDER:
        section = page["sections"][heading]
        body.append(f"## {heading}\n")
        body.append(
            render_voices(
                CITE_RE.sub(cite, section["technical"]),
                CITE_RE.sub(cite, section["layman"]),
                CITE_RE.sub(cite, section["bangla"]),
            )
        )
        body.append("")

    body.append("## Key words\n")
    body.append("| Word | What it means |")
    body.append("| --- | --- |")
    for word, meaning in page["key_words"]:
        body.append(f"| {word} | {meaning} |")
    body.append("")

    header = (
        f"export const metadata = {{ title: '{_js_escape(page['title'])}', "
        f"description: '{_js_escape(page['description'])}' }}\n"
        f"{sources_block}\n\n"
        f"# {page['title']}\n\n"
        f"{page['lede'].strip()}\n\n"
        "<PageMeta />\n\n"
    )
    return header + "\n".join(body)


def validate_page(page: dict) -> None:
    """Fail before writing if the page's sources and its cites do not agree.

    The built page must satisfy scripts/check_sources.py: every listed source
    needs a cite, and every cite needs a listed source.
    """
    listed = page["sources"]
    if len(set(listed)) != len(listed):
        raise ValueError(f"{page['slug']}: the source list has a duplicate")

    cited: set[str] = set()
    for heading in SECTION_ORDER:
        section = page["sections"][heading]
        for panel in ("technical", "layman", "bangla"):
            for key in CITE_RE.findall(section[panel]):
                cited.add(key)
                if key not in listed:
                    raise ValueError(
                        f"{page['slug']}: cites unknown source {key!r} in "
                        f"{heading} / {panel}"
                    )

    for key in listed:
        if key not in cited:
            raise ValueError(f"{page['slug']}: source {key!r} is listed but never cited")

    for heading in SECTION_ORDER:
        if heading not in page["sections"]:
            raise ValueError(f"{page['slug']}: missing the section {heading!r}")
    if set(page["sections"]) != set(SECTION_ORDER):
        raise ValueError(f"{page['slug']}: has a section outside the fixed shape")
    if not page["key_words"]:
        raise ValueError(f"{page['slug']}: the Key words table is empty")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--only", nargs="*", help="write only these slugs")
    args = parser.parse_args()

    OUT.mkdir(parents=True, exist_ok=True)
    wanted = set(args.only) if args.only else None

    written = []
    for page in PAGES:
        if wanted and page["slug"] not in wanted:
            continue
        validate_page(page)
        path = OUT / f"{page['slug']}.mdx"
        path.write_text(render_page(page), encoding="utf-8")
        written.append(page["slug"])

    print(f"wrote {len(written)} pages into {OUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
