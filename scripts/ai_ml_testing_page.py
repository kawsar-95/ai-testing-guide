"""The page list of the AI/ML Testing module, and the helper that fills it.

The page data lives in the files ai_ml_testing_pages_p1a.py to p1d.py. Each one
calls `page(...)` at import time, and the calls append to the one PAGES list in
this module.
"""

PAGES: list[dict] = []


def page(**kwargs) -> dict:
    """One page of the module. Appended to PAGES in the order of the calls."""
    PAGES.append(kwargs)
    return kwargs
