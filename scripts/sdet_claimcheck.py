"""Check that each quote of an SDET Roadmap research note is in the text of the source page that it cites.

usage: sdet_claimcheck.py [slug ...] [--cache DIR] [--fresh]
For each page `content/sdet/<slug>.mdx` (all pages without a slug) it reads the source URLs of the page, and the claims
table of `docs/superpowers/research/sdet-<slug>.md` (rows: C<n> | claim | S<k> | "quote"). It fetches each source page
once, takes its visible text, and looks each quote up in that text. Case, white space, the space before a punctuation
mark, curly quotes, and the "(opens in a new tab)" link marker do not count as differences. It also checks that every
source of the page has at least one claim, and prints, for each page, the lowest share of word trigrams that a cited
sentence of the Technical panels has in common with its source. It does not read a page for meaning.
Needs a network, or a cache: `node_modules/.cache/sdet-claimcheck` (or `SDET_CLAIMCHECK_CACHE`, or --cache).
--fresh fetches every source again. Exit 0: every quote was found. Exit 1: a quote is missing, or a source has no
claim. Exit 2: a source could not be fetched.
"""
import html
import os
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
CLAIM_ROW = re.compile(r'^\| C\d+ \| (.*) \| S(\d+) \| "(.*)" \|$')
CITE = re.compile(r"<Cite n=\{(\d+)\} />")


def visible_text(raw):
    raw = re.sub(r"(?is)<(script|style|noscript|svg|nav|footer|header)[^>]*>.*?</\1>", " ", raw)
    raw = re.sub(r"(?s)<!--.*?-->", " ", raw)
    raw = re.sub(r"(?s)<[^>]+>", " ", raw)
    return html.unescape(raw)


def norm(text):
    text = text.replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"').replace("\u00a0", " ")
    text = text.replace("\u200b", "").replace("(opens in a new tab)", " ")
    text = re.sub(r"\s+", " ", text).strip().lower()
    text = re.sub(r" ([,.;:!?)])", r"\1", text)
    return re.sub(r"\( ", "(", text)


def trigrams(text):
    words = re.findall(r"[a-z0-9][a-z0-9'\-]*", norm(text.replace("`", "")))
    return [" ".join(words[i:i + 3]) for i in range(len(words) - 2)]


def source_urls(mdx):
    block = mdx.split("export const page", 1)[1].split("\n}\n", 1)[0]
    return re.findall(r"url: '([^']+)'", block)


def claims(research):
    section = research.split("## Claims", 1)[1]
    out = []
    for line in section.splitlines():
        m = CLAIM_ROW.match(line.strip())
        if m:
            out.append((m.group(1), int(m.group(2)), m.group(3).replace("\\|", "|")))
    return out


def technical_sentences(mdx):
    """(text, n) for each <Cite> of every Technical panel: the words since the previous <Cite> or the start of the sentence."""
    out = []
    for panel in re.findall(r"<Technical>(.*?)</Technical>", mdx, re.S):
        panel = re.sub(r"(?s)```.*?```", " ", panel)
        last = 0
        for match in CITE.finditer(panel):
            chunk = CITE.sub("", panel[last:match.start()])
            chunk = re.split(r"(?<=[.:])\s|\n", chunk)[-1] if re.search(r"(?<=[.:])\s|\n", chunk) else chunk
            out.append((chunk.strip(" .,\n"), int(match.group(1))))
            last = match.end()
    return [(text, n) for text, n in out if text]


def fetch(url, cache, fresh=False):
    path = cache / (re.sub(r"[^a-z0-9]+", "-", url.lower().split("://", 1)[1]).strip("-")[:120] + ".txt")
    if not fresh and path.exists() and path.stat().st_size > 200:
        return path.read_text(encoding="utf-8")
    request = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(request, timeout=30) as response:
        raw = response.read().decode("utf-8", errors="replace")
    text = raw if url.endswith((".txt", ".md")) or "raw.githubusercontent.com" in url else visible_text(raw)
    cache.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")
    time.sleep(0.3)
    return text


def main(argv=None):
    args = list(sys.argv[1:] if argv is None else argv)
    cache = Path(os.environ.get("SDET_CLAIMCHECK_CACHE", ROOT / "node_modules" / ".cache" / "sdet-claimcheck"))
    if "--cache" in args:
        i = args.index("--cache")
        cache = Path(args[i + 1])
        del args[i:i + 2]
    fresh = "--fresh" in args
    args = [a for a in args if a != "--fresh"]
    slugs = args or sorted(p.stem for p in (ROOT / "content" / "sdet").glob("*.mdx"))
    missing, unreachable, uncovered, checked = [], [], [], 0
    for slug in slugs:
        mdx = (ROOT / "content" / "sdet" / f"{slug}.mdx").read_text(encoding="utf-8")
        research = (ROOT / "docs" / "superpowers" / "research" / f"sdet-{slug}.md").read_text(encoding="utf-8")
        urls, texts = source_urls(mdx), {}
        for url in urls:
            try:
                texts[url] = fetch(url, cache, fresh)
            except Exception as error:  # a network or HTTP error: the source cannot be checked
                unreachable.append(f"{slug}: {url}: {error}")
        rows = claims(research)
        for n in range(1, len(urls) + 1):
            if not any(k == n for _, k, _ in rows):
                uncovered.append(f"{slug}: S{n} ({urls[n - 1]}) has no claim in the research note")
        for claim, n, quote in rows:
            checked += 1
            if n > len(urls):
                missing.append(f"{slug} [S{n}]: the page has only {len(urls)} sources\n      claim: {claim}")
                continue
            text = texts.get(urls[n - 1])
            if text is not None and norm(quote) not in norm(text):
                missing.append(f"{slug} [S{n}]: not found in {urls[n - 1]}\n      quote: {quote}")
        low = 1.0
        for sentence, n in technical_sentences(mdx):
            text = texts.get(urls[n - 1]) if n <= len(urls) else None
            grams = trigrams(sentence)
            if text is not None and grams:
                have = set(trigrams(text))
                low = min(low, sum(1 for g in grams if g in have) / len(grams))
        print(f"{slug}: {len(urls)} sources, {len(rows)} quotes, lowest sentence overlap {low:.0%}")
    print(f"{checked} quotes checked on {len(slugs)} pages: {len(missing)} not found, {len(uncovered)} sources without a claim, {len(unreachable)} sources not reached")
    for line in missing + uncovered + unreachable:
        print("  FAIL", line)
    return 2 if unreachable else 1 if missing or uncovered else 0


if __name__ == "__main__":
    sys.exit(main())
