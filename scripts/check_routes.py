"""Print each route (tutorial, Linux, and System Design) that has no page in the build directory."""
import json
import sys
from pathlib import Path

import checks

HERE = Path(__file__).resolve().parent


def load_routes():
    """The routes of the three maps: tutorial, Linux, then System Design."""
    routes = []
    for name in ("route-map.json", "linux-route-map.json", "system-design-route-map.json"):
        routes.extend(json.loads((HERE / name).read_text()).values())
    return routes


def main(argv=None):
    argv = sys.argv[1:] if argv is None else argv
    if len(argv) != 1:
        print("usage: check_routes.py <out-dir>", file=sys.stderr)
        return 2
    missing = [r for r in load_routes() if not checks.route_file(argv[0], r).is_file()]
    for route in missing:
        print(f"MISSING {route}")
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
