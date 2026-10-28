"""Check that each "On this page" link of a built page points to an element id.

usage: check_outline.py <out-dir> [--routes ROUTE ...]
Without --routes it checks every page in route-map.json except "/", every Linux
stage page in linux-route-map.json, every System Design case page in
system-design-route-map.json, every Fundamentals chapter page in
fundamentals-route-map.json, every Architecture page in
architecture-route-map.json, every Course page in course-route-map.json, every k6 page in k6-route-map.json, every AI Engineering page in ai-engineering-route-map.json,
every AI Harnesses page in harness-route-map.json, and every AI Skills page in ai-skills-route-map.json
(not the homes "/linux/", "/system-design/", "/fundamentals/",
"/architecture/", "/course/", "/k6/", "/ai-engineering/", "/harness/" and "/ai-skills/", which have no meta line).
"""
import argparse
import json
import sys
from pathlib import Path

import checks


def default_routes():
    """The tutorial pages, the Linux stage pages, the System Design case pages, the Fundamentals chapter pages, the Architecture pages, the Course pages, the k6 pages, the AI Engineering pages, the AI Harnesses pages, the AI Skills pages, and the Agent Memory pages, without the homes."""
    here = Path(__file__).resolve().parent
    routes = []
    for name, home in (
        ("route-map.json", "/"),
        ("linux-route-map.json", "/linux/"),
        ("system-design-route-map.json", "/system-design/"),
        ("fundamentals-route-map.json", "/fundamentals/"),
        ("architecture-route-map.json", "/architecture/"),
        ("course-route-map.json", "/course/"),
        ("k6-route-map.json", "/k6/"),
        ("ai-engineering-route-map.json", "/ai-engineering/"),
        ("harness-route-map.json", "/harness/"),
        ("ai-skills-route-map.json", "/ai-skills/"),
        ("agent-memory-route-map.json", "/agent-memory/"),
    ):
        route_map = json.loads((here / name).read_text())
        routes += [route for route in route_map.values() if route != home]
    return routes


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("out_dir")
    parser.add_argument("--routes", nargs="+")
    args = parser.parse_args(argv)

    mismatches = []
    checked = 0
    for route in args.routes or default_routes():
        html = checks.route_file(args.out_dir, route).read_text(encoding="utf-8")
        links, ids = checks.outline_links(html)
        checked += len(links)
        mismatches += [(route, link) for link in links if link not in ids]

    for route, link in mismatches:
        print(f"MISSING {route}: #{link}")
    if mismatches:
        return 1
    if checked == 0:
        print("FAIL no TOC links found")
        return 1
    print(f"OK {checked} TOC links")
    return 0


if __name__ == "__main__":
    sys.exit(main())
