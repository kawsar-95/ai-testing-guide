"""Find runs of words that a page copies from the fetched source text.

Usage: python3 scripts/linux_overlap.py <file.mdx> <raw-dir>

The script prints each n-word run of the page (outside code fences) that
also occurs in a file of <raw-dir>. It exits 1 if it finds any.
"""

import re
import sys
from pathlib import Path

FENCE = re.compile(r"```.*?```", re.DOTALL)
WORD = re.compile(r"[\w'-]+")


def _segments(text: str) -> list[str]:
    """Split the text at code fences and drop the fenced code."""
    return FENCE.split(text)


def _runs(text: str, n: int) -> list[tuple[str, ...]]:
    """List the lowercase n-word runs of each text segment, in order."""
    runs = []
    for segment in _segments(text):
        words = WORD.findall(segment.lower())
        for i in range(len(words) - n + 1):
            runs.append(tuple(words[i : i + n]))
    return runs


def shingles(text: str, n: int = 8) -> set[tuple[str, ...]]:
    """Return the set of lowercase word n-grams. Fenced code is removed first."""
    return set(_runs(text, n))


def overlap(mdx: str, corpus: list[str], n: int = 8) -> list[str]:
    """Return each n-word run of mdx that also occurs in the corpus."""
    known: set[tuple[str, ...]] = set()
    for doc in corpus:
        known |= shingles(doc, n)
    hits = []
    seen = set()
    for run in _runs(mdx, n):
        if run in known and run not in seen:
            seen.add(run)
            hits.append(" ".join(run))
    return hits


def main(argv: list[str]) -> int:
    if len(argv) != 3:
        print(__doc__)
        return 2
    mdx = Path(argv[1]).read_text(encoding="utf-8")
    corpus = [
        p.read_text(encoding="utf-8", errors="replace")
        for p in sorted(Path(argv[2]).glob("*.txt"))
    ]
    hits = overlap(mdx, corpus)
    for hit in hits:
        print(hit)
    if hits:
        print(f"{len(hits)} overlapping run(s) found", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
