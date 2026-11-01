"""Scrape the AI & ML Testing course syllabus (Phase 1 and Phase 2) from journeytoautomation.org.

Usage: python3 scripts/ai_ml_course_fetch.py <out-dir>

The course page is a client-side React app: the HTML holds no syllabus text.
The syllabus lives in the JS bundle the page loads, so the script downloads the
page, finds that bundle, and reads the syllabus arrays out of it.

It writes two files into <out-dir>:
  ai-ml-testing-syllabus.json  the raw arrays (learn outcomes, tool tables, modules, career outcomes)
  ai-ml-testing-syllabus.md    the same data as a readable syllabus document

Rules: one request at a time, a 20 s timeout, no retries. The syllabus text is
third-party text. Keep it out of the site's own content (content/) and cite the
source.
"""

import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any

PAGE_URL = "https://www.journeytoautomation.org/courseAIMLTesting-phase1-and-phase2"
USER_AGENT = "Mozilla/5.0 (compatible; ai-ml-course-syllabus-research/1.0)"
TIMEOUT = 20
HOST_DELAY = 1.0

# Anchor strings that mark the start of each syllabus array in the bundle.
# Phase 1 learn outcomes, Phase 1 tool table, Phase 1 modules, Phase 1 careers.
ANCHORS = {
    "phase1_learn": 'o=["AI/ML Fundamentals: Understand how AI works',
    "phase1_tools": "c=[{category:\"LLM Evaluation & Testing\"",
    "phase1_modules": 'A=[{title:"Module 1: AI/ML Fundamentals for Testers"',
    "phase1_careers": 'u=["AI Test Engineer"',
    # Phase 2 tool table, Phase 2 modules, Phase 2 careers.
    "phase2_tools": "h=[{category:\"Advanced RAG Evaluation\"",
    "phase2_modules": 'p=[{title:"Module 1: Advanced RAG System Testing"',
    "phase2_careers": 'g=["Senior AI Test Engineer"',
}

HERO = {
    "phase1": {
        "badge": "Phase 1 / Phase 2 — Foundations",
        "title": "AI & ML Testing Professional Course",
        "subtitle": (
            "Built specifically for QA Engineers, SDETs & Test Leads. No Machine Learning "
            "background required. Master 10+ industry tools and build a portfolio of 6 AI "
            "testing projects you can show in interviews."
        ),
        "stats": {"Weeks": 10, "Sessions": 26, "Projects": 6, "Modules": 8, "Tools": "10+"},
    },
    "phase2": {
        "badge": "Phase 2 — Mastery",
        "title": "AI & ML Testing Professional Course",
        "subtitle": (
            "Advanced AI testing for production systems. Master RAG testing, agent testing, "
            "multi-modal AI, production observability, and CI/CD eval pipelines. "
            "Prerequisite: Phase 1 completion."
        ),
        "stats": {"Weeks": 8, "Sessions": 21, "Projects": 12, "Modules": 9, "Tools": "15+"},
    },
}

REGISTER_URL = "https://zoom.us/meeting/register/oaxXeZmNR6K6_PNND2tT6w"

WHAT_YOUll_GET = [
    "Certificate of Completion from QodeBench — Journey to Automation upon completing the course.",
    "Portfolio of 6 AI testing projects for interviews.",
    "Hands-on experience with 10+ industry tools.",
    "Complete end-to-end AI test pipeline (eval + red teaming + observability + CI/CD).",
    "Professional certification to showcase your skills.",
    "AI Testing resume, LinkedIn optimization & interview prep kit.",
]


def fetch(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
        return response.read()


def find_bundle(html: str) -> str:
    match = re.search(r'src="(/assets/index-[^"]+\.js)"', html)
    if not match:
        raise SystemExit("no JS bundle found in the page HTML")
    return "https://www.journeytoautomation.org" + match.group(1)


def slice_array(source: str, start: int) -> str:
    """Return the array literal that starts at `start` (the '[' character)."""
    depth = 0
    index = start
    quote = None
    while index < len(source):
        char = source[index]
        if quote:
            if char == "\\":
                index += 2
                continue
            if char == quote:
                quote = None
            index += 1
            continue
        if char in "\"'`":
            quote = char
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                return source[start:index + 1]
        index += 1
    raise SystemExit("unterminated array literal")


def js_to_json(literal: str) -> Any:
    """Convert a JS array/object literal with unquoted keys into JSON."""
    out: list[str] = []
    index = 0
    length = len(literal)
    while index < length:
        char = literal[index]
        if char in "\"'`":
            quote = char
            out.append(char)
            index += 1
            while index < length:
                current = literal[index]
                out.append(current)
                if current == "\\" and index + 1 < length:
                    out.append(literal[index + 1])
                    index += 2
                    continue
                if current == quote:
                    index += 1
                    break
                index += 1
            continue
        if char in "{,":
            out.append(char)
            index += 1
            # An unquoted key follows, then a colon. Quote the key.
            probe = index
            while probe < length and literal[probe] in " \t\n\r":
                probe += 1
            if probe < length and (literal[probe].isalpha() or literal[probe] in "_$"):
                end = probe
                while end < length and (literal[end].isalnum() or literal[end] in "_$"):
                    end += 1
                after = end
                while after < length and literal[after] in " \t\n\r":
                    after += 1
                if after < length and literal[after] == ":":
                    out.append(literal[index:probe])
                    out.append('"' + literal[probe:end] + '"')
                    index = end
                    continue
            continue
        out.append(char)
        index += 1
    return json.loads("".join(out))


def read_arrays(bundle: str) -> dict[str, Any]:
    data = {}
    for name, anchor in ANCHORS.items():
        at = bundle.find(anchor)
        if at < 0:
            raise SystemExit(f"anchor not found for {name}: {anchor!r}")
        bracket = bundle.index("[", at)
        data[name] = js_to_json(slice_array(bundle, bracket))
        time.sleep(HOST_DELAY)
    return data


def render_markdown(data: dict[str, Any], accessed: str) -> str:
    out: list[str] = []
    out.append("# AI & ML Testing Professional Course — Full Syllabus (Phase 1 and Phase 2)")
    out.append("")
    out.append(
        f"Source: <{PAGE_URL}> (scraped {accessed}). The page is a client-side React app, so "
        "the syllabus text was read from the JavaScript bundle the page loads "
        "(`/assets/index-*.js`)."
    )
    out.append("")
    out.append("> Third-party text. Quoted here as the source syllabus, not as site content.")
    out.append("")

    for phase, modules_key, tools_key, careers_key in (
        ("phase1", "phase1_modules", "phase1_tools", "phase1_careers"),
        ("phase2", "phase2_modules", "phase2_tools", "phase2_careers"),
    ):
        hero = HERO[phase]
        label = "Phase 1 — Foundations" if phase == "phase1" else "Phase 2 — Mastery"
        out.append(f"## {label}")
        out.append("")
        out.append(f"**Badge:** {hero['badge']}")
        out.append("")
        out.append(f"**{hero['title']}**")
        out.append("")
        out.append(hero["subtitle"])
        out.append("")
        stats = " · ".join(f"{key}: {value}" for key, value in hero["stats"].items())
        out.append(f"**At a glance:** {stats}")
        out.append("")

        if phase == "phase1":
            out.append("### What you'll learn")
            out.append("")
            for item in data["phase1_learn"]:
                out.append(f"- {item}")
            out.append("")

        out.append("### Tools you'll master")
        out.append("")
        out.append("| Category | Tools | What you'll do |")
        out.append("| --- | --- | --- |")
        for row in data[tools_key]:
            out.append(f"| {row['category']} | {row['tools']} | {row['action']} |")
        out.append("")

        out.append("### Course content")
        out.append("")
        for index, module in enumerate(data[modules_key], start=1):
            out.append(f"#### {index:02d}. {module['title']}")
            out.append("")
            out.append(f"*{module['desc']}*")
            out.append("")
            for section in module["sections"]:
                out.append(f"**{section['title']}**")
                out.append("")
                for item in section["items"]:
                    out.append(f"- {item}")
                out.append("")

        out.append("### Career outcomes")
        out.append("")
        if phase == "phase1":
            out.append("After completing Phase 1, you'll be qualified for these roles:")
        else:
            out.append(
                "Complete both phases (18 weeks, 47 sessions) and qualify for senior AI testing "
                "positions:"
            )
        out.append("")
        for role in data[careers_key]:
            out.append(f"- {role}")
        out.append("")

    out.append("## What you'll get")
    out.append("")
    for item in WHAT_YOUll_GET:
        out.append(f"- {item}")
    out.append("")
    out.append(f"Register: {REGISTER_URL}")
    out.append("")
    return "\n".join(out)


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    out_dir = Path(sys.argv[1])
    out_dir.mkdir(parents=True, exist_ok=True)

    html = fetch(PAGE_URL).decode("utf-8", "replace")
    time.sleep(HOST_DELAY)
    bundle_url = find_bundle(html)
    bundle = fetch(bundle_url).decode("utf-8", "replace")

    data = read_arrays(bundle)
    accessed = time.strftime("%Y-%m-%d")

    json_path = out_dir / "ai-ml-testing-syllabus.json"
    json_path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    md_path = out_dir / "ai-ml-testing-syllabus.md"
    md_path.write_text(render_markdown(data, accessed), encoding="utf-8")

    module_count = sum(len(data[key]) for key in ("phase1_modules", "phase2_modules"))
    session_count = sum(
        len(module["sections"])
        for key in ("phase1_modules", "phase2_modules")
        for module in data[key]
    )
    print(f"bundle: {bundle_url}")
    print(f"modules: {module_count}, sessions: {session_count}")
    print(f"wrote {json_path}")
    print(f"wrote {md_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
