"""The page data of the AI/ML Testing module.

One dict per page. The keys of a page:

    slug, title, description, lede   the identity of the page
    sources                          the source keys, in cite order
    sections                         the five sections, each with three panels
    key_words                        the table rows of the Key words section

A cite is written {{cite:source-key}} in a panel and becomes <Cite n={k} />,
where k is the number of that source in the page's list. A source that is
listed must be cited at least once, and a cite must point at a listed source.

The order of the pages is the order of the course syllabus: Phase 1
Foundations (26 sessions) then Phase 2 Mastery (21 sessions).
"""

# The page data is split across files so that each one stays readable. The
# imports below run the page() calls in the files, which fill PAGES. Add a
# file here when its pages are written.
from ai_ml_testing_pages_p1a import *  # noqa: F401,F403  (Phase 1, course module 1)
from ai_ml_testing_pages_p1b import *  # noqa: F401,F403  (Phase 1, course module 2)
from ai_ml_testing_pages_p1c import *  # noqa: F401,F403  (Phase 1, course module 3, sessions 7-10)
from ai_ml_testing_pages_p1e import *  # noqa: F401,F403  (Phase 1, course module 3, session 11)
from ai_ml_testing_pages_p1d import *  # noqa: F401,F403  (Phase 1, course modules 4-5)
from ai_ml_testing_pages_p1f import *  # noqa: F401,F403  (Phase 1, course module 6)
from ai_ml_testing_pages_p1g import *  # noqa: F401,F403  (Phase 1, course module 7)
from ai_ml_testing_pages_p1h import *  # noqa: F401,F403  (Phase 1, course module 8)
from ai_ml_testing_pages_p2a import *  # noqa: F401,F403  (Phase 2, course modules 1-3)
from ai_ml_testing_pages_p2b import *  # noqa: F401,F403  (Phase 2, course modules 4-6)
from ai_ml_testing_pages_p2c import *  # noqa: F401,F403  (Phase 2, course modules 7-9)
from ai_ml_testing_pages_p2d import *  # noqa: F401,F403  (Phase 2, module 1 session 3, and module 9)

from ai_ml_testing_page import PAGES  # noqa: E402  (after the imports, so the list is full)
