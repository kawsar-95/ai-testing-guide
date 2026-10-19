# Fact-check: How a Stock Exchange Works (round 1, 2026-10-20)

I read the page, the research notes, and the saved free part of source 1. The article is paywalled after the matching logic, and the page says so and covers only the free part. I fixed 2 FAILs: the lede said that you "own the share" a fraction of a second after you tap "buy" (no source, and ownership is not the same as a match), and the big-picture walk-through had facts without a cite. The copy check (`linux_overlap.py`) exits 0 after the fixes.

| # | Location (heading) | Claim (short) | Cite | Verdict | Evidence (quote) / Fix |
|---|---|---|---|---|---|
| 1 | Lede | A fraction of a second after "buy", you own the share | none | FAIL→fixed | No source gives a time or says when ownership passes. Was "a fraction of a second later you own the share". Now "the exchange tries to pair your order with a seller". |
| 2 | Lede | The article is one design, not one named exchange | none | PASS | The article is "#101: Stock Exchange System Design - Part 1" and names no exchange. |
| 3 | The problem in plain words | Farmer's market analogy; each stock is a stall | 1 | PASS | "Imagine the stock market as a farmer's market. Each stock is like a stall area in the market" |
| 4 | The problem in plain words | Buyers look for the cheapest seller; a deal when the buy offer is at least the ask | 1 | PASS | "they usually go to the stall offering the lowest price first" / "A trade occurs when a buyer's price meets or exceeds a seller's price." |
| 5 | The problem in plain words | The exchange earns fees, so it wants many trades | 1 | PASS | "More trade brings more PROFIT for the stock exchange through fees." |
| 6 | The problem in plain words | Requirements: stocks only, buy and sell, cancel any time, real-time matching, daily limit, market data | 1 | PASS | "An exchange that trades ONLY stocks." / "cancel their order at any time" / "restrict the number of shares a user can trade per day" / "publish market data in real-time" |
| 7 | The problem in plain words | Message mix: new about 50%, cancels about 40%, executions about 2% | 1 | PASS | "New orders = ~50% messages, Cancels = ~40% messages, Executions = ~2% messages." |
| 8 | The problem in plain words | The article gives no user counts or trades per second | none | PASS | The free text has no such number. |
| 9 | The big picture | The article calls the design asynchronous and event-sourced | 1 | PASS | "Its architecture is asynchronous and event-sourced." |
| 10 | The big picture | Broker to gateway; gateway sequences; engine pairs and reports | none | FAIL→fixed | No cite on these facts. Added `<Cite n={1} />` to each. Quote: "Gateway - entry point for brokers" / "assigns sequence numbers for fairness" / "matches BUY and SELL orders and sends those trade results as market data" |
| 11 | The big picture (callout) | Event-sourced explained as a replayable list | none | PASS | General explanation, no source needed. |
| 12 | Orders and the order book | The order book shows waiting orders with amount and price | 1 | PASS | "A list of all current BUY and SELL orders for a stock, showing who wants to buy or sell, how much, and at what price." |
| 13 | Orders and the order book | Buys sorted high to low, sells low to high; trade where they meet | 1 | PASS | "BUY orders get sorted in decreasing order" / "SELL orders get sorted in increasing order" / "The point where they overlap is the market price." |
| 14 | Orders and the order book | Market order fills at once if enough shares | 1 | PASS | "It executes immediately at the current market price, as long as there's enough liquidity" |
| 15 | Orders and the order book | Limit buy at 100 fills at 100 or less; sell at 100 or more | 1 | PASS | "Buy at $100 → fills at $100 or lower. Sell at $100 → fills at $100 or higher." |
| 16 | Orders and the order book | Spread is the gap from best buy to best sell | 1 | PASS | "The difference between the highest BUY price and the lowest SELL price." |
| 17 | The broker and the FIX protocol | User connects with REST APIs and WebSockets | 1 | PASS | "A user connects to the broker using REST APIs and WebSockets for real-time data transfer." |
| 18 | The broker and the FIX protocol | Broker uses FIX to the gateway | 1 | PASS | "brokers use the Financial Information Exchange (FIX) protocol to communicate with the gateway" |
| 19 | The broker and the FIX protocol | FIX gives unique sequence numbers | 1 | PASS | "It assigns unique sequence numbers to order messages." |
| 20 | The broker and the FIX protocol | FIX adds a checksum and message length | 1 | PASS | "it uses checksums and message length to verify data integrity" |
| 21 | The gateway: checks before the line | Gateway is the front door for brokers | 1 | PASS | "Gateway - entry point for brokers to send BUY or SELL orders to the exchange." |
| 22 | The gateway: checks before the line | Converts to internal format, sends results back | 1 | PASS | "converts them into the exchange's internal format. Then it sends the trade execution results back" |
| 23 | The gateway: checks before the line | Co-location cuts delay | 1 | PASS | "put a gateway near exchange servers (co-location) for low latency" |
| 24 | The gateway: checks before the line | Risk manager, wallet, order manager and their jobs | 1 | PASS | "Risk Manager - ensures the user has enough funds and blocks any unusual trading activity. Also, it determines exchange fees." / "Wallet - stores the user's funds and assets" |
| 25 | The gateway: checks before the line | Order manager: light list of open, cancelled, rejected; handles cancels | 1 | PASS | "a lightweight list containing ALL orders: open, cancelled, and rejected ones. It updates the order state and handles cancel requests." |
| 26 | Sequence numbers: a ticket for every order | Globally increasing number for each order, cancel, and fill | 1 | PASS | "assigns a globally increasing sequence number to each order (trade or cancel) and execution fill" |
| 27 | Sequence numbers: a ticket for every order | Fair order, fast recovery and replay, exactly once | 1 | PASS | "Ordering for fairness, timeliness, and accuracy. Fast recovery and deterministic replay. Exactly once guarantee." |
| 28 | Sequence numbers: a ticket for every order | Gap detection | 1 | PASS | "sequence numbers make it easy to find missing events in both inbound and outbound sequences" |
| 29 | Sequence numbers: a ticket for every order | One topic queue per message type with own numbers | 1 | PASS | "Each message type (new order, cancel, trade) has its own topic queue, with its own sequence numbers." |
| 30 | Sequence numbers: a ticket for every order | Keeps order, independent pace, easier replay | 1 | PASS | "Maintain order within each stream. Process each message type independently ... make recovery easier" |
| 31 | The matching engine | Checks sequence numbers, matches, makes market data | 1 | PASS | "It verifies sequence numbers, matches BUY and SELL orders, and creates market data based on trades." |
| 32 | The matching engine | In-memory order book per stock, two lists | 1 | PASS | "It keeps an in-memory list of open orders for each stock (symbol). There are actually two lists for each stock" |
| 33 | The matching engine | FIFO inside each price level | 1 | PASS | "sorted by price and timestamp in a first-in, first-out (FIFO) manner" |
| 34 | The matching engine | Doubly linked list; constant-time add and remove | 1 | PASS | "each price level gets a separate queue of orders (doubly linked list): New orders get added at the tail - O(1)" |
| 35 | The matching engine | Index from order ID makes cancel one lookup | 1 | PASS | "it uses an index to map order IDs to the order object in memory" / "fast cancellations by looking up the order by ID in the index in O(1)" |
| 36 | The matching engine | Match when buy price is at least sell price | 1 | PASS | "matches BUY and SELL orders when: buy price ≥ sell price" |
| 37 | The matching engine | Tracks best buy and sell | 1 | PASS | "It keeps track of the highest bid and lowest ask for quick matching." |
| 38 | The matching engine | Closed order goes to the trade history | 1 | PASS | "A closed order gets removed from the order book and gets added to the transaction history." |
| 39 | The matching engine (callout) | Same input sequence gives same output sequence | 1 | PASS | "The same order sequence (input) must always produce the same execution sequence (output)." |
| 40 | The matching engine | The free part stops after the matching logic | none | PASS | "Keep reading with a 7-day free trial" follows the Matching Logic section. |
| 41 | What a tester can learn | Tip says it is tutorial advice | none | PASS | "These test ideas are the tutorial's own advice, not claims from the article." Closing tag at column 0. |

Structure checks: 1 source, cited; all cite numbers are 1; `##` headings are unique; the tip callout ends at column 0; no `{` or `<` in prose. Copy check: `linux_overlap.py` exits 0 with no runs.

Open FAILs: 0
