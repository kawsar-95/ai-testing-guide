"""Fetch the pages of the Linux link list as plain text.

Usage: python3 scripts/linux_fetch.py <links.md> <out-dir>

The script writes <out-dir>/<NNN>.txt for each link (NNN is the 1-based
position in the list) and <out-dir>/report.tsv with the columns
index, topic, url, status, bytes.

Status values: ok, title-only, robots, http-<code>, error:<name>.

Rules: one request at a time, at least 2 s between requests to one host,
a 20 s timeout, robots.txt respected, no retries.
"""

import re
import sys
import time
import urllib.error
import urllib.request
import urllib.robotparser
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

USER_AGENT = "Mozilla/5.0 (compatible; linux-notes-research/1.0)"
TIMEOUT = 20
HOST_DELAY = 2.0
MAX_BYTES = 5_000_000

SKIP_TAGS = {"script", "style", "nav", "header", "footer", "aside", "form", "svg"}
BLOCK_TAGS = {
    "p", "div", "br", "li", "ul", "ol", "tr", "table", "section", "article",
    "main", "h1", "h2", "h3", "h4", "h5", "h6", "pre", "blockquote", "dt", "dd",
    "figure", "figcaption", "hr", "body",
}
SKIP_TYPES = {"video", "course", "roadmap"}
SKIP_HOSTS = {"youtube.com", "youtu.be"}

LINK_LINE = re.compile(r"^- \[(\w+)\] \[(.*)\]\((\S+)\)\s*$")


def parse_links(markdown: str) -> list[dict]:
    """Read the link list. Each link line gets the last `## ` heading as topic."""
    links = []
    topic = ""
    for line in markdown.splitlines():
        if line.startswith("## "):
            topic = line[3:].strip()
            continue
        match = LINK_LINE.match(line)
        if match:
            type_, title, url = match.groups()
            links.append({"topic": topic, "type": type_, "title": title, "url": url})
    return links


class _TextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.skip_depth = 0
        self.pre_depth = 0

    def handle_starttag(self, tag, attrs):
        if tag in SKIP_TAGS:
            self.skip_depth += 1
        elif tag == "pre":
            self.pre_depth += 1
        if tag in BLOCK_TAGS:
            self.parts.append("\n")

    def handle_startendtag(self, tag, attrs):
        # A self-closing tag has no end tag. It must not change the depth.
        if tag in BLOCK_TAGS:
            self.parts.append("\n")

    def handle_endtag(self, tag):
        if tag in SKIP_TAGS and self.skip_depth:
            self.skip_depth -= 1
        elif tag == "pre" and self.pre_depth:
            self.pre_depth -= 1
        if tag in BLOCK_TAGS:
            self.parts.append("\n")

    def handle_data(self, data):
        if self.skip_depth:
            return
        if self.pre_depth:
            self.parts.append(data)
        else:
            data = re.sub(r"\s+", " ", data)
            if not self.parts or self.parts[-1].endswith("\n"):
                data = data.lstrip()
            self.parts.append(data)


def html_to_text(html: str) -> str:
    """Return the visible text of a page. Keep pre and code text."""
    parser = _TextParser()
    parser.feed(html)
    parser.close()
    lines = "".join(parser.parts).split("\n")
    lines = [line.rstrip() if line.strip() else "" for line in lines]
    text = "\n".join(lines)
    text = re.sub(r"\n{2,}", "\n", text)
    return text.strip() + "\n"


def should_fetch(link: dict) -> bool:
    """Return False for links that are not text pages."""
    if link["type"] in SKIP_TYPES:
        return False
    host = (urlparse(link["url"]).hostname or "").lower()
    for blocked in SKIP_HOSTS:
        if host == blocked or host.endswith("." + blocked):
            return False
    return True


class Fetcher:
    """Send one request at a time and keep a pause between requests to one host."""

    def __init__(self) -> None:
        self.last_request: dict[str, float] = {}
        self.robots: dict[str, urllib.robotparser.RobotFileParser] = {}

    def _open(self, url: str):
        host = urlparse(url).netloc
        wait = self.last_request.get(host, 0.0) + HOST_DELAY - time.monotonic()
        if wait > 0:
            time.sleep(wait)
        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            return urllib.request.urlopen(request, timeout=TIMEOUT)
        finally:
            self.last_request[host] = time.monotonic()

    def _robots_for(self, url: str) -> urllib.robotparser.RobotFileParser:
        parts = urlparse(url)
        origin = f"{parts.scheme}://{parts.netloc}"
        if origin in self.robots:
            return self.robots[origin]
        parser = urllib.robotparser.RobotFileParser()
        try:
            with self._open(origin + "/robots.txt") as response:
                body = response.read(MAX_BYTES).decode("utf-8", errors="replace")
            parser.parse(body.splitlines())
        except urllib.error.HTTPError as error:
            if error.code in (401, 403):
                parser.disallow_all = True
            else:
                parser.allow_all = True
        except Exception:
            parser.allow_all = True
        self.robots[origin] = parser
        return parser

    def allowed(self, url: str) -> bool:
        return self._robots_for(url).can_fetch(USER_AGENT, url)

    def get_text(self, url: str) -> str:
        """Fetch a URL and return its visible text. Raise on a failure."""
        with self._open(url) as response:
            content_type = response.headers.get("Content-Type", "")
            charset = response.headers.get_content_charset() or "utf-8"
            body = response.read(MAX_BYTES).decode(charset, errors="replace")
        if "html" in content_type.lower():
            return html_to_text(body)
        if content_type.lower().startswith("text/"):
            return body
        raise ValueError("content-type")


def fetch_one(fetcher: Fetcher, link: dict) -> tuple[str, str]:
    """Return (status, text) for one link. Any failure becomes a status."""
    try:
        if not should_fetch(link):
            return "title-only", f"{link['title']}\n{link['url']}\n"
        if not fetcher.allowed(link["url"]):
            return "robots", ""
        return "ok", fetcher.get_text(link["url"])
    except urllib.error.HTTPError as error:
        return f"http-{error.code}", ""
    except Exception as error:
        if isinstance(error, ValueError) and str(error) == "content-type":
            return "error:content-type", ""
        return f"error:{type(error).__name__}", ""


def run(links: list[dict], out_dir: Path) -> None:
    """Fetch each link. Write each report row at once, so a crash keeps finished rows."""
    out_dir.mkdir(parents=True, exist_ok=True)
    fetcher = Fetcher()
    with open(out_dir / "report.tsv", "w", encoding="utf-8") as report:
        report.write("index\ttopic\turl\tstatus\tbytes\n")
        report.flush()
        for index, link in enumerate(links, start=1):
            status, text = fetch_one(fetcher, link)
            data = text.encode("utf-8")
            if status in ("ok", "title-only"):
                (out_dir / f"{index:03d}.txt").write_bytes(data)
            row = f"{index}\t{link['topic']}\t{link['url']}\t{status}\t{len(data)}"
            report.write(row + "\n")
            report.flush()
            print(row, flush=True)


def main(argv: list[str]) -> int:
    if len(argv) != 3:
        print(__doc__)
        return 2
    links = parse_links(Path(argv[1]).read_text(encoding="utf-8"))
    run(links, Path(argv[2]))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
