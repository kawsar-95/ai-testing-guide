# How a Stock Exchange Works (System Design) — research notes (2026-10-20)

Fetch note: the article was fetched with `curl -sL` and stripped to plain text into `<scratch dir>/sd-raw/stock-exchange/article.txt`. The article text was not committed.

Paywall note: the article is "Part 1" of a paid series. The free part stops after the matching logic ("Ready for the best part?"). The page uses only the free part and says so. The footnote texts (1 to 18) are not in the free HTML. The article links to two vendor pages (OnixS on FIX, QuestDB on co-location); the page did not need them, because the article text itself states each claim that the page uses.

Scope note: the article designs a generic exchange ("Let's Start with Requirements"). It names no real exchange and gives no user or throughput numbers. The page says this in the lede and in "The problem in plain words".

Copy check: `python3 scripts/linux_overlap.py content/system-design/stock-exchange.mdx <scratch dir>/sd-raw/stock-exchange` exits 0. Round 1 found 8 runs in the order book sentence and the term table (limit order, spread); these were reworded.

## Sources
S1. How Stock Exchange Works — The System Design Newsletter (Neo Kim) — https://newsletter.systemdesign.one/p/stock-exchange-system-design — accessed 2026-10-20 (raw `article.txt`; subtitle "#101: Stock Exchange System Design - Part 1", 2025-11-18). Page cite `[1]`.

## Claims

| # | Claim | Source | Quote |
|---|---|---|---|
| 1 | Farmer's market analogy; each stock is a stall | S1 | "Imagine the stock market as a farmer's market." / "Each stock is like a stall area in the market" |
| 2 | Buyers go to the cheapest seller first | S1 | "Buyers want the cheapest price, so they usually go to the stall offering the lowest price first." |
| 3 | A trade happens when the buy price meets or exceeds the sell price | S1 | "A trade occurs when a buyer's price meets or exceeds a seller's price." |
| 4 | The exchange profits from fees, so it wants many trades | S1 | "More trade brings more PROFIT for the stock exchange through fees." |
| 5 | Requirements: stocks only; buy/sell; cancel any time; real-time match; daily share limit; real-time market data | S1 | "An exchange that trades ONLY stocks." / "Also users can cancel their order at any time." / "restrict the number of shares a user can trade per day" / "publish market data1 in real-time" |
| 6 | Message mix: new ~50%, cancels ~40%, executions ~2% | S1 | "New orders = ~50% messages," / "Cancels = ~40% messages," / "Executions = ~2% messages." |
| 7 | Architecture is asynchronous and event-sourced | S1 | "Its architecture is asynchronous and event-sourced." |
| 8 | Order book: all current buy and sell orders for a stock, with amount and price | S1 | "A list of all current BUY and SELL orders for a stock, showing who wants to buy or sell, how much, and at what price." |
| 9 | Buy orders sorted high to low; sell orders low to high; overlap is the price | S1 | "BUY orders get sorted in decreasing order (highest bid first)." / "SELL orders get sorted in increasing order" / "The point where they overlap is the market price." |
| 10 | Market order: no price set, executes at once if liquidity allows | S1 | "It executes immediately at the current market price, as long as there's enough liquidity" |
| 11 | Limit order: buy at 100 fills at 100 or lower; sell at 100 fills at 100 or higher | S1 | "Buy at $100 → fills5 at $100 or lower." / "Sell at $100 → fills at $100 or higher." |
| 12 | Spread: gap between highest buy and lowest sell | S1 | "The difference between the highest BUY price and the lowest SELL price." |
| 13 | User to broker: REST and WebSockets | S1 | "A user connects to the broker using REST APIs and WebSockets for real-time data transfer." |
| 14 | Broker to gateway: FIX | S1 | "brokers use the Financial Information Exchange (FIX) protocol to communicate with the gateway" |
| 15 | FIX assigns sequence numbers; checksum and length for integrity | S1 | "It assigns unique sequence numbers to order messages." / "it uses checksums and message length to verify data integrity" |
| 16 | Gateway is the entry point for brokers | S1 | "Gateway - entry point for brokers to send BUY or SELL orders to the exchange." |
| 17 | Gateway converts orders and sends results back | S1 | "It receives orders from brokers and converts9 them into the exchange's internal format. Then it sends10 the trade execution results back" |
| 18 | Co-location cuts latency | S1 | "It's also possible to put a gateway near exchange servers (co-location) for low latency." |
| 19 | Risk manager: funds, unusual activity, fees | S1 | "Risk Manager - ensures the user has enough funds and blocks any unusual trading activity. Also, it determines exchange fees." |
| 20 | Wallet holds funds and assets | S1 | "Wallet - stores the user's funds and assets for trading." |
| 21 | Order manager: sequence numbers, states, sends cleared orders | S1 | "Order Manager - assigns sequence numbers for fairness and updates order states. Plus, it sends cleared orders to the matching engine." |
| 22 | Order manager keeps a light list of all orders; handles cancels | S1 | "a lightweight list containing ALL orders: open, cancelled, and rejected ones. It updates the order state and handles cancel requests." |
| 23 | Globally increasing sequence number for orders, cancels, fills | S1 | "Order manager assigns a globally increasing sequence number to each order (trade or cancel) and execution fill" |
| 24 | Sequence numbers give fair order, recovery and replay, exactly once | S1 | "Ordering for fairness, timeliness, and accuracy." / "Fast recovery and deterministic replay." / "Exactly once guarantee." |
| 25 | Sequence numbers reveal missing events | S1 | "sequence numbers make it easy to find missing events in both inbound and outbound sequences" |
| 26 | Each message type has its own topic queue and numbers | S1 | "Each message type (new order, cancel, trade) has its own topic queue, with its own sequence numbers." |
| 27 | Benefits: order per stream, independent processing, easier replay | S1 | "Maintain order within each stream." / "Process each message type independently and reduce contention." / "make recovery easier" |
| 28 | Matching engine verifies sequence, matches, creates market data | S1 | "It verifies sequence numbers, matches BUY and SELL orders, and creates market data based on trades" |
| 29 | Order book in memory per stock | S1 | "It keeps an in-memory list16 of open orders for each stock17 (symbol)." |
| 30 | Two lists per stock | S1 | "There are actually two lists for each stock:" |
| 31 | Sorted by price and time, FIFO | S1 | "Each list gets sorted by price and timestamp in a first-in, first-out (FIFO) manner." |
| 32 | Doubly linked list per price level; O(1) add and remove | S1 | "each price level gets a separate queue of orders (doubly linked list)" / "New orders get added at the tail - O(1) time complexity." |
| 33 | Index from order ID for fast cancels | S1 | "it uses an index to map order IDs to the order object in memory" / "It allows fast cancellations" |
| 34 | Match when buy price ≥ sell price | S1 | "buy price ≥ sell price" |
| 35 | Tracks highest bid and lowest ask | S1 | "It keeps track of the highest bid and lowest ask for quick matching." |
| 36 | Closed order goes to transaction history | S1 | "A closed order gets removed from the order book and gets added to the transaction history." |
| 37 | Matching is deterministic: same input, same output | S1 | "The same order sequence (input) must always produce the same execution sequence (output)." |
