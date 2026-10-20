# Voice fact-check: Caching with Redis (round 1, 2026-10-20)

Page: `content/architecture/caching.mdx`. I did not write this page.

Method: I read the 5 `<Voices>` blocks. For each claim in a `<Layman>` or `<Bangla>` panel, I found the `<Technical>` sentence of the same `##` section that it restates. A claim that is not in the Technical panel, or that changes a number, a condition, a name, or a scope, is a FAIL. An omission is not a FAIL. For each `<Cite n>` in a voice panel, I checked that the Technical panel of the same section cites the same `n` for the same claim. I did not re-check the sources themselves: the Technical claims are checked in `architecture-caching.factcheck.md`. I read the Bangla text for meaning and for natural use: polite (আপনি), technical terms in English, hyphen between an English word and a Bangla suffix. The "Key words" section has no voices.

Notes on the voices:

- Section 1 omits eviction and the "Eviction is usually safe" sentence in Layman. Bangla keeps eviction but drops "Eviction is usually safe". These are omissions, not FAILs.
- Section 5: the Technical panel wraps the ideas in a `<Callout type="tip" title="Tutorial advice">`. Layman and Bangla have no callout. They start with "the tutorial's own advice" and repeat the 5 ideas with no cites. PASS, rows 72 to 83.
- Section 4, bullet 4: the Technical panel says "It should fall back to the database". The Layman text says "continue to work and use the database". The meaning is the same. PASS, row 56.

| # | Section | Voice | Claim (English gloss for Bangla) | Technical sentence (quoted) | Verdict | Language |
|---|---|---|---|---|---|---|
| 1 | In plain words | Layman | A cache is a fast storage layer that keeps part of your data, so the next request is faster than a trip to the main store [1] | "A **cache** is a fast storage layer that keeps a part of your data, so the next request for that data is faster than a trip to the main store [1]" | PASS | - |
| 2 | In plain words | Layman | Redis is an in-memory data store that many teams use as a cache [2] | "**Redis** is an in-memory data store. Many teams use it as a cache [2]." | PASS | - |
| 3 | In plain words | Layman | A cache hit means the data is in the cache; the app returns it at once | "**Cache hit:** the data is in the cache. The app returns it at once [1]." | PASS | - |
| 4 | In plain words | Layman | A cache miss means the data is not in the cache [1] | "**Cache miss:** the data is not in the cache [1]." | PASS | - |
| 5 | In plain words | Layman | Then the app gets it from the database or the source API | "The app must get it from the database or the source API." | PASS | - |
| 6 | In plain words | Layman | In cache-aside, the app loads data into the cache on demand [6] (cite is on the next sentence) | "The app loads data into the cache on demand, when somebody asks for it [6]" | PASS | - |
| 7 | In plain words | Layman | When the app changes data, it writes to the database first, then removes or updates the old copy in the cache [6] | "it writes to the database first. Then it **invalidates** the cache item, which means it removes or updates the old copy [6]" | PASS | - |
| 8 | In plain words | Layman | TTL (time to live) is the expiry time of a cached item [1] | "**TTL** (time to live) is the expiry time of a cached item [1]" | PASS | - |
| 9 | In plain words | Layman | In Redis, `EXPIRE` sets a timeout on a key; when it ends, Redis deletes the key [3] | "the `EXPIRE` command sets a timeout on a key. When the timeout ends, Redis deletes the key automatically [3]" | PASS ("automatically" omitted) | - |
| 10 | In plain words | Layman | `TTL` returns `-1` for a key with no expiry and `-2` for a key that does not exist [4] | "It returns `-1` if the key has no expiry, and `-2` if the key does not exist [4]" | PASS (same two values and conditions) | - |
| 11 | In plain words | Bangla | A cache is a fast storage layer; it keeps part of your data so the next request is faster than going to the main store [1] | "a fast storage layer that keeps a part of your data, so the next request for that data is faster than a trip to the main store [1]" | PASS | OK |
| 12 | In plain words | Bangla | The data is usually kept in fast memory (RAM) [1] | "The data is usually kept in fast memory (RAM) [1]." | PASS | OK |
| 13 | In plain words | Bangla | The main store is often a database, but a cache can also keep API request results [1] | "The main store is often a database, but a cache can also keep the results of API requests [1]." | PASS | OK |
| 14 | In plain words | Bangla | Redis is an in-memory data store, and many teams use it as a cache [2] | "**Redis** is an in-memory data store. Many teams use it as a cache [2]." | PASS | OK |
| 15 | In plain words | Bangla | If the data is in the cache it is a cache hit, and the app returns the data at once | "**Cache hit:** the data is in the cache. The app returns it at once [1]." | PASS | OK |
| 16 | In plain words | Bangla | If the data is not in the cache it is a cache miss [1] | "**Cache miss:** the data is not in the cache [1]." | PASS | OK |
| 17 | In plain words | Bangla | Then the app must get the data from the database or the source API | "The app must get it from the database or the source API." | PASS | OK |
| 18 | In plain words | Bangla | In cache-aside, the app loads data into the cache when somebody asks for it [6] (cite is on the last sentence) | "The app loads data into the cache on demand, when somebody asks for it [6]" | PASS | OK |
| 19 | In plain words | Bangla | When the app changes data it writes to the database first, then invalidates the cache item, that is, removes or updates the old copy | "it writes to the database first. Then it **invalidates** the cache item, which means it removes or updates the old copy" | PASS | OK |
| 20 | In plain words | Bangla | The next read loads the new data and caches it again [6] | "The next read loads the new data and caches it again [6]." | PASS | OK |
| 21 | In plain words | Bangla | TTL (time to live) is the expiry time of a cached item [1] | "**TTL** (time to live) is the expiry time of a cached item [1]" | PASS | OK ("মেয়াদ" = expiry period) |
| 22 | In plain words | Bangla | `EXPIRE` sets a timeout on a key; when the timeout ends Redis deletes the key by itself [3] | "the `EXPIRE` command sets a timeout on a key. When the timeout ends, Redis deletes the key automatically [3]" | PASS | OK |
| 23 | In plain words | Bangla | The `TTL` command shows how much time a key has left [4] (cite is on the next sentence) | "The `TTL` command shows how much time a key has left [4]." | PASS | OK |
| 24 | In plain words | Bangla | `TTL` gives `-1` if the key has no expiry and `-2` if the key does not exist [4] | "It returns `-1` if the key has no expiry, and `-2` if the key does not exist [4]" | PASS | OK |
| 25 | In plain words | Bangla | Memory is limited | "Memory is limited." | PASS | OK |
| 26 | In plain words | Bangla | If you set an eviction policy, Redis removes keys by itself when the cache passes a memory limit [5] | "If you set an eviction policy, Redis removes keys by itself when the cache passes a memory limit. This is called **eviction** [5]." | PASS (the name "eviction" is used only in "eviction policy") | OK |
| 27 | In plain words | Bangla | The `allkeys-lru` policy removes the keys that were used least recently [5] | "the `allkeys-lru` policy removes the keys that were used least recently [5]" | PASS | Note: "সবচেয়ে কম সাম্প্রতিক সময়ে ব্যবহৃত" is a word-for-word copy of "least recently used" and is hard to read. Better: "সবচেয়ে আগে ব্যবহার করা হয়েছিল এমন (least recently used) key-গুলো সরায়". |
| 28 | When you need it | Layman | A cache helps in these cases (list intro) | The list of 5 bullets under "When you need it" | PASS (framing line only, no new fact) | - |
| 29 | When you need it | Layman | The app reads the same data often | "The same data is read often." | PASS | - |
| 30 | When you need it | Layman | The database has a high load | "The database load is high." | PASS | - |
| 31 | When you need it | Layman | The response time must be better | "Response time must improve." | PASS | - |
| 32 | When you need it | Layman | The data does not change often; caching works best for data that is read a lot, changes rarely, and can be a little old [6] | "Caching works best for data that is read a lot, changes rarely, and can be a little old [6]." | PASS | - |
| 33 | When you need it | Layman | Calls to external APIs are expensive or slow | "External API calls are expensive or slow." | PASS | - |
| 34 | When you need it | Bangla | The cache helps in these cases (list intro) | The list of 5 bullets under "When you need it" | PASS (framing line only) | OK |
| 35 | When you need it | Bangla | The same data is read again and again | "The same data is read often." | PASS | OK |
| 36 | When you need it | Bangla | The database load is high | "The database load is high." | PASS | OK |
| 37 | When you need it | Bangla | The response time must be improved | "Response time must improve." | PASS | OK |
| 38 | When you need it | Bangla | The data does not change much; caching works best for data that is read a lot, rarely changes, and can be a little old [6] | "Caching works best for data that is read a lot, changes rarely, and can be a little old [6]." | PASS | OK |
| 39 | When you need it | Bangla | External API calls are costly or slow | "External API calls are expensive or slow." | PASS | OK |
| 40 | A real-life example | Layman | In an LMS, students open the course list thousands of times each day; the course information changes only sometimes | "students open the course list thousands of times each day. But the course information changes only sometimes." | PASS | - |
| 41 | A real-life example | Layman | The app keeps the course list in Redis for 10 minutes; most requests then do not go to the database | "the app caches the course list in Redis for 10 minutes. Most requests then never touch the database." | PASS (same number) | - |
| 42 | A real-life example | Layman | An admin changes a course price; if the app does not invalidate the related cache key, students see the old price for up to 10 minutes | "If the app does not invalidate the related cache key, students see the old price for up to 10 minutes." | PASS (same number and condition) | - |
| 43 | A real-life example | Layman | The checkout can show a price that is not the same as the list | "the checkout can show a price that is different from the list." | PASS | - |
| 44 | A real-life example | Layman | The update code must also delete the course list key and the key of that course | "the update code must also delete the course list key and the key of that course." | PASS | - |
| 45 | A real-life example | Bangla | In an LMS, students open the course list thousands of times each day; the course information changes only sometimes | "students open the course list thousands of times each day. But the course information changes only sometimes." | PASS | OK |
| 46 | A real-life example | Bangla | The app caches the course list in Redis for 10 minutes; most requests never reach the database | "caches the course list in Redis for 10 minutes. Most requests then never touch the database." | PASS (same number) | OK |
| 47 | A real-life example | Bangla | An admin changes a course price; if the app does not invalidate the key, students see the old price for up to 10 minutes | "If the app does not invalidate the related cache key, students see the old price for up to 10 minutes." | PASS (same number and condition) | OK |
| 48 | A real-life example | Bangla | Worse, the checkout can show a price that differs from the list | "the checkout can show a price that is different from the list." | PASS | OK |
| 49 | A real-life example | Bangla | The update code must also delete the course list key and that course's key | "the update code must also delete the course list key and the key of that course." | PASS | OK |
| 50 | Common mistakes | Layman | Wrong key: with `dashboard` and not `dashboard:user:42`, user B can get the dashboard of user A | "If the key is `dashboard` and not `dashboard:user:42`, user B can get user A's dashboard." | PASS | - |
| 51 | Common mistakes | Layman | Use clear, structured keys, such as `customer:100` [7] | "Use clear, structured keys, such as `customer:100` [7]." | PASS | - |
| 52 | Common mistakes | Layman | Also protect the cache from unauthorized access [7] | "Also protect the cache itself from unauthorized access [7]." | PASS ("itself" omitted) | - |
| 53 | Common mistakes | Layman | A TTL that is too long makes the data stale; one that is too short sends the app to the database too often [6] | "If the expiry is too long, the cached data becomes stale. If it is too short, the app keeps going back to the database [6]." | PASS | - |
| 54 | Common mistakes | Layman | Cache-aside does not make sure that the cache and the database agree [6] | "Cache-aside does not guarantee that the cache and the database agree [6]." | PASS | - |
| 55 | Common mistakes | Layman | Decide which change deletes which keys | "Decide which change deletes which keys." | PASS | - |
| 56 | Common mistakes | Layman | When the cache is not available, the app should continue to work and use the database [7] | "The app should keep working if the cache is not available [7]. It should fall back to the database [7]." | PASS | - |
| 57 | Common mistakes | Layman | While the cache recovers, the database can get too many requests and time out [7] | "while the cache recovers, the database can get too many requests and time out [7]." | PASS | - |
| 58 | Common mistakes | Layman | Right after a write, a reader can see stale data for a short time [6] | "Right after a write, a reader can briefly see stale data [6]." | PASS | - |
| 59 | Common mistakes | Layman | Do not keep critical data only in the cache | "Do not use the cache as the only store of critical data." | PASS | - |
| 60 | Common mistakes | Layman | Save each important change to a persistent store [7] | "Save every important change to a persistent store [7]." | PASS | - |
| 61 | Common mistakes | Bangla | Wrong key: with `dashboard` and not `dashboard:user:42`, user B can get user A's dashboard | "If the key is `dashboard` and not `dashboard:user:42`, user B can get user A's dashboard." | PASS | OK |
| 62 | Common mistakes | Bangla | Use clear, structured keys such as `customer:100` [7] | "Use clear, structured keys, such as `customer:100` [7]." | PASS | OK |
| 63 | Common mistakes | Bangla | Also protect the cache from unauthorized access [7] | "Also protect the cache itself from unauthorized access [7]." | PASS | OK |
| 64 | Common mistakes | Bangla | A very long TTL: the expiry is too long and the data becomes stale (old); too short and the app goes back to the database again and again [6] | "If the expiry is too long, the cached data becomes stale. If it is too short, the app keeps going back to the database [6]." | PASS | OK |
| 65 | Common mistakes | Bangla | Cache-aside does not make sure that the cache and the database hold the same data [6] | "Cache-aside does not guarantee that the cache and the database agree [6]." | PASS | OK |
| 66 | Common mistakes | Bangla | Decide first which change deletes which key | "Decide which change deletes which keys." | PASS | OK |
| 67 | Common mistakes | Bangla | Even if the cache is not available, the app must keep working and fall back to the database [7] | "The app should keep working if the cache is not available [7]. It should fall back to the database [7]." | PASS ("should" became "must", the same advice) | OK |
| 68 | Common mistakes | Bangla | Plan for the extra load: while the cache recovers, the database can get too many requests and time out [7] | "But plan for the extra load: while the cache recovers, the database can get too many requests and time out [7]." | PASS | OK |
| 69 | Common mistakes | Bangla | A fast answer is not always a correct answer | "A fast answer is not always a correct answer." | PASS | OK |
| 70 | Common mistakes | Bangla | Right after a write, a reader can see stale data for a short time [6] | "Right after a write, a reader can briefly see stale data [6]." | PASS | OK |
| 71 | Common mistakes | Bangla | Do not keep critical data only in the cache; save each important change to a persistent store [7] | "Do not use the cache as the only store of critical data. Save every important change to a persistent store [7]." | PASS | OK |
| 72 | What a tester can check | Layman | These test ideas are the tutorial's own advice | "These test ideas are the tutorial's own advice." | PASS | - |
| 73 | What a tester can check | Layman | Update, then read: as an admin change a course price; open the course list and the checkout at the same time; both must show the new price | "Change a course price as an admin. Open the course list and the checkout at once. Both must show the new price." | PASS | - |
| 74 | What a tester can check | Layman | Two users: log in as A, then B, open the same personal page; B must never see A's data from the cache | "User B must never see user A's data from the cache." | PASS | - |
| 75 | What a tester can check | Layman | Check the TTL: in a test environment run `TTL` on a cached key; `-1` never expires; ask if this is on purpose | "In a test environment, run `TTL` on a cached key. A key with `-1` never expires. Ask if that is on purpose." | PASS | - |
| 76 | What a tester can check | Layman | Redis down: stop Redis in a test environment; the app must still answer from the database, maybe more slowly, with no error page | "The app must still answer from the database, maybe slower, with no error page." | PASS | - |
| 77 | What a tester can check | Layman | Cold cache: clear the cache and send a burst of traffic; watch the database load and the response times while the cache fills again | "Watch the database load and the response times while the cache fills again." | PASS | - |
| 78 | What a tester can check | Bangla | These test ideas are the tutorial's own advice | "These test ideas are the tutorial's own advice." | PASS | OK |
| 79 | What a tester can check | Bangla | Update, then read: as an admin change a course price; open the course list and the checkout at the same time; both places must show the new price | "Change a course price as an admin. Open the course list and the checkout at once. Both must show the new price." | PASS | OK |
| 80 | What a tester can check | Bangla | Two users: log in as user A, then user B, open the same personal page; B must never see A's data from the cache | "User B must never see user A's data from the cache." | PASS | OK |
| 81 | What a tester can check | Bangla | Check the TTL: run `TTL` on a cached key in a test environment; a key with `-1` never expires; ask if this is on purpose | "A key with `-1` never expires. Ask if that is on purpose." | PASS | OK |
| 82 | What a tester can check | Bangla | Redis down: stop Redis in a test environment; the app must still answer from the database, maybe a little slower, with no error page | "The app must still answer from the database, maybe slower, with no error page." | PASS ("একটু" = "a little" is a small softener, not a changed fact) | Note: "হয়তো একটু ধীরে" can drop "একটু" to match "maybe slower". Optional. |
| 83 | What a tester can check | Bangla | Cold cache: clear the cache and send a lot of traffic at once; watch the database load and response time while the cache fills again | "Clear the cache and send a burst of traffic. Watch the database load and the response times while the cache fills again." | PASS | OK |

Language summary: the Bangla text is natural and polite (আপনি, imperative with "-ন"), the technical terms stay in English, and the English-Bangla suffixes use a hyphen (cache-এ, Redis-এ, key-গুলো, user A-র, app-কে). The only item worth fixing is the `allkeys-lru` gloss in row 27.

Open FAILs: 0
