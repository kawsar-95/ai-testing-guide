"""Check that each quote of a DevOps & Cloud research note is in the text of the source page that it cites.

usage: devops_claimcheck.py [slug ...] [--cache DIR]
For each page `content/devops/<slug>.mdx` (all pages without a slug) it reads the source URLs of the page, and the claims table of
`docs/superpowers/research/devops-<slug>.md` (rows: claim | S<n> | "quote"). It fetches each source page once, takes its visible
text, and looks each quote up in that text. Case, white space, the space before a punctuation mark, curly quotes, and the
"(opens in a new tab)" link marker do not count as differences. It also prints, for each page, the lowest share of word trigrams
that a cited sentence of the Technical text has in common with its source. It does not read a page for meaning.
Needs a network. The cache is `node_modules/.cache/devops-claimcheck` (or `DEVOPS_CLAIMCHECK_CACHE`, or --cache).
Exit 0: every quote was found. Exit 1: a quote is missing. Exit 2: a source could not be fetched.
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
CLAIM_ROW = re.compile(r'^\| (.*) \| S(\d+) \| "(.*)" \|$')
CITE = re.compile(r"<Cite n=\{(\d+)\} />")


def visible_text(raw):
    raw = re.sub(r"(?is)<(script|style|noscript|svg|nav|footer|header)[^>]*>.*?</\1>", " ", raw)
    raw = re.sub(r"(?s)<!--.*?-->", " ", raw)
    raw = re.sub(r"(?s)<[^>]+>", " ", raw)
    return html.unescape(raw)


def norm(text):
    text = text.replace("\u2019", "'").replace("\u2018", "'").replace("\u201c", '"').replace("\u201d", '"').replace("\u00a0", " ")
    text = text.replace("(opens in a new tab)", " ")
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
    """(text, n) for each <Cite> of the Technical panel: the words since the previous <Cite> or the start of the sentence."""
    panel = mdx.split("<Technical>", 1)[1].split("</Technical>", 1)[0]
    out, last = [], 0
    for match in CITE.finditer(panel):
        chunk = CITE.sub("", panel[last:match.start()])
        chunk = chunk.split(". ")[-1] if ". " in chunk else chunk
        out.append((chunk.strip(" .\n"), int(match.group(1))))
        last = match.end()
    return out


def fetch(url, cache):
    path = cache / (re.sub(r"[^a-z0-9]+", "-", url.lower().split("://", 1)[1]).strip("-")[:120] + ".txt")
    if path.exists() and path.stat().st_size > 200:
        return path.read_text(encoding="utf-8")
    request = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(request, timeout=30) as response:
        text = visible_text(response.read().decode("utf-8", errors="replace"))
    cache.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")
    time.sleep(0.3)
    return text


def main(argv=None):
    args = list(sys.argv[1:] if argv is None else argv)
    cache = Path(os.environ.get("DEVOPS_CLAIMCHECK_CACHE", ROOT / "node_modules" / ".cache" / "devops-claimcheck"))
    if "--cache" in args:
        i = args.index("--cache")
        cache = Path(args[i + 1])
        del args[i:i + 2]
    slugs = args or sorted(p.stem for p in (ROOT / "content" / "devops").glob("*.mdx"))
    missing, unreachable, checked = [], [], 0
    for slug in slugs:
        mdx = (ROOT / "content" / "devops" / f"{slug}.mdx").read_text(encoding="utf-8")
        research = (ROOT / "docs" / "superpowers" / "research" / f"devops-{slug}.md").read_text(encoding="utf-8")
        urls, texts = source_urls(mdx), {}
        for url in urls:
            try:
                texts[url] = fetch(url, cache)
            except Exception as error:  # a network or HTTP error: the source cannot be checked
                unreachable.append(f"{slug}: {url}: {error}")
        for claim, n, quote in claims(research):
            checked += 1
            text = texts.get(urls[n - 1])
            if text is not None and norm(quote) not in norm(text):
                missing.append(f"{slug} [S{n}]: not found in {urls[n - 1]}\n      quote: {quote}")
        low = 1.0
        for sentence, n in technical_sentences(mdx):
            text = texts.get(urls[n - 1])
            grams = trigrams(sentence)
            if text is not None and grams:
                have = set(trigrams(text))
                low = min(low, sum(1 for g in grams if g in have) / len(grams))
        print(f"{slug}: {len(urls)} sources, lowest sentence overlap {low:.0%}")
    print(f"{checked} quotes checked on {len(slugs)} pages: {len(missing)} not found, {len(unreachable)} sources not reached")
    for line in missing + unreachable:
        print("  FAIL", line)
    return 2 if unreachable else 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
