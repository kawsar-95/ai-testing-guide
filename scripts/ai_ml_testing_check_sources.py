"""Check that every URL in the AI/ML Testing source library resolves.

Usage: python3 scripts/ai_ml_testing_check_sources.py
"""

import concurrent.futures
import sys
import urllib.error
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from ai_ml_testing_sources import SOURCES

USER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
TIMEOUT = 30


def check(item: tuple[str, str]) -> tuple[str, int, str]:
    key, url = item
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
            return key, response.status, response.geturl()
    except urllib.error.HTTPError as error:
        return key, error.code, str(error.reason)
    except Exception as error:  # noqa: BLE001
        return key, 0, f"{type(error).__name__}: {error}"


def main() -> int:
    items = [(key, source.url) for key, source in SOURCES.items()]
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        results = sorted(pool.map(check, items))

    bad = []
    for key, status, detail in results:
        flag = "ok " if 200 <= status < 400 else "BAD"
        print(f"{flag} {status:>3} {key:<22} {detail[:90]}")
        if not 200 <= status < 400:
            bad.append((key, status, detail))

    print(f"\n{len(results) - len(bad)}/{len(results)} resolve")
    for key, status, detail in bad:
        print(f"BAD {key}: {status} {detail}")
    return 1 if bad else 0


if __name__ == "__main__":
    raise SystemExit(main())
