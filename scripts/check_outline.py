"""Check that each "On this page" link of a built page points to an element id.

usage: check_outline.py <out-dir> [--routes ROUTE ...]
Without --routes it checks every page in route-map.json except "/", and every
Linux stage page in linux-route-map.json (not "/linux/", which has no meta line),
and every System Design case page in system-design-route-map.json (not
"/system-design/").
"""
import argparse
import json
import sys
from pathlib import Path

import checks


def default_routes():
    """The tutorial pages (not "/"), the Linux stage pages (not "/linux/"), and the System Design case pages."""
    here = Path(__file__).resolve().parent
    routes = []
    for name, home in (
        ("route-map.json", "/"),
        ("linux-route-map.json", "/linux/"),
        ("system-design-route-map.json", "/system-design/"),
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
