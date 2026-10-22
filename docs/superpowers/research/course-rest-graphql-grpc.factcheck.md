# Fact-check: REST, GraphQL, and gRPC

Page: `content/course/rest-graphql-grpc.mdx`. Reviewer did not write the page. Sources fetched on 2026-10-22 into `/tmp/claude-1000/fc3-rest-graphql-grpc/` (S1 from the author's own site roy.gbiv.com, because ics.uci.edu has a TLS chain error). The quotes below come from my own fetch, not from the research notes. S1 has no occurrence of the word "JSON" (checked).

Source ids follow the page cites: n=1 Fielding ch. 5, n=2 GraphQL Introduction, n=3 Queries, n=4 Schemas and Types, n=5 Serving over HTTP, n=6 Caching, n=7 gRPC Introduction, n=8 gRPC Core concepts.

## Claims

| # | Claim (short) | Cite | Verdict | Quote or reason |
|---|---|---|---|---|
| 1 | REST is an architectural style: constraints chosen for the properties they give | 1 | PASS | "REST consists of a set of architectural constraints chosen for the properties they induce on candidate architectures." (5.1.8) |
| 2 | Built step by step from the null style, which has no constraints | 1 | PASS | "The Null style ( Figure 5-1 ) is simply an empty set of constraints." (5.1.1) |
| 3 | Adds client-server, stateless, caching, uniform interface, layered system | 1 | PASS | Sections 5.1.2 to 5.1.6: Client-Server, Stateless, Cache, Uniform Interface, Layered System, in this order. |
| 4 | A sixth constraint, code-on-demand, is optional | 1 | PASS | "5.1.7 Code-On-Demand The final addition to our constraint set" / "it also reduces visibility, and thus is only an optional constraint within REST." |
| 5 | Uniform interface is the feature that sets REST apart from other network styles | 1 | PASS | "The central feature that distinguishes the REST architectural style from other network-based styles is its emphasis on a uniform interface between components" |
| 6 | The uniform interface has four constraints (the 4 listed) | 1 | PASS | "REST is defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia as the engine of application state." |
| 7 | REST does not limit communication to one protocol | 1 | PASS | "REST does not restrict communication to a particular protocol, but it does constrain the interface between components" |
| 8 | "REST" is not "JSON over HTTP"; a JSON-over-HTTP server can still miss the constraints; the chapter defines REST by constraints, not by a data format (no cite on these sentences) | none | PASS | Follows from claims 1, 6, 7. The chapter has no "JSON" and defines REST by constraints (5.1.8). The page does not say the source states "not JSON over HTTP" in those words. Acceptable. |
| 9 | Lede: REST is a style of design; GraphQL is a query language | none (cited below) | PASS | Same as claims 1 and 12. |
| 10 | Lede and table: gRPC is "a framework for remote calls" / "A framework to call remote methods" | 7 | FAIL (fixed, see Re-check: PASS) | S7 and S8 never use the word "framework". They say: "a client application can directly call a method on a server application on a different machine as if it were a local object". Reword to this meaning, or mark "Tutorial's view". The table cell has a cite, so it claims a source. |
| 11 | Resource: any information that can be named | 1 | PASS | "Any information that can be named can be a resource" (5.2.1.1) |
| 12 | A resource is a mapping to a set of values, not the value at one moment | 1 | PASS | "A resource is a conceptual mapping to a set of entities, not the entity that corresponds to the mapping at any particular point in time." and "...maps to a set of entities, or values, which are equivalent." |
| 13 | Components send a representation, not the resource: bytes plus metadata | 1 | PASS | "REST components perform actions on a resource by using a representation to capture the current or intended state of that resource and transferring that representation between components. A representation is a sequence of bytes, plus representation metadata to describe those bytes." |
| 14 | The format of a representation is its media type | 1 | PASS | "The data format of a representation is known as a media type" |
| 15 | Stateless: each request carries all information, no stored context on the server | 1 | PASS | "each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server." |
| 16 | Stateless gives visibility, reliability, scalability; costs more repeated data | 1 | PASS | "This constraint induces the properties of visibility, reliability, and scalability." / "it may decrease network performance by increasing the repetitive data (per-interaction overhead) sent in a series of requests" |
| 17 | A response is labeled cacheable or not; a cacheable response may be reused | 1 | PASS | "the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests." |
| 18 | A response to a retrieval request is cacheable unless the message says otherwise; "(such as an HTTP GET)" | 1 | PASS | "By default, the response to a retrieval request is cacheable and the responses to other requests are non-cacheable." / "A component can override these defaults by including..." Note: "HTTP GET" is the page's own example; S1 does not name GET. It is correct and harmless. |
| 19 | Uniform interface lowers efficiency (large-grain hypermedia transfer, not optimal for other interaction) | 1 | PASS | "a uniform interface degrades efficiency, since information is transferred in a standardized form rather than one which is specific to an application's needs. The REST interface is designed to be efficient for large-grain hypermedia data transfer ... resulting in an interface that is not optimal for other forms of architectural interaction." |
| 20 | A cache can lower reliability when stale data differs a lot from server data | 1 | PASS | "a cache can decrease reliability if stale data within the cache differs significantly from the data that would have been obtained had the request been sent directly to the server." |
| 21 | GraphQL: query language for an API plus a server-side runtime with a type system you define | 2 | PASS | "GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data." |
| 22 | GraphQL is not tied to one database | 2 | PASS | "GraphQL isn’t tied to any specific database or storage engine" |
| 23 | Client writes a query in the shape of the data and gets that data back | 2 | PASS | "The client can make queries to the API that mirror the structure of the data that they need and then receive just that data in the expected shape with a single request" |
| 24 | A service defines types, fields, and a function for each field | 2 | PASS | "A GraphQL service is created by defining types and their fields, and then writing a function for each field to provide the required data." |
| 25 | The set of capabilities is the schema | 4 | PASS | "The collection of those capabilities is referred to as the service’s schema" |
| 26 | Three operation types: query, mutation, subscription | 3 | PASS | "GraphQL supports three main operation types—queries, mutations, and subscriptions." |
| 27 | A query starts at a root type, selects fields to leaf values; result mirrors the query | 3 | PASS | "we always start with a root operation type" / "all the way down to their leaf values" / "the result has the same shape as the query." |
| 28 | Server first checks the query against the schema, then runs the functions | 2 | PASS | "The service first checks a query to ensure it only refers to the types and fields defined for the API and then runs the provided functions to produce a result." |
| 29 | One query can follow related objects, saving round trips a classic REST design may need | 3 | PASS | "GraphQL queries can traverse related objects and their fields, letting clients fetch lots of related data in one request, instead of making several roundtrips as one would need in a classic REST architecture." The page hedges with "may". |
| 30 | The specification does not require a protocol; HTTP is the most common choice | 5 | PASS | "The GraphQL specification doesn’t require particular client-server protocols when sending API requests and responses, but HTTP is the most common choice because of its ubiquity." |
| 31 | One endpoint, often `/graphql`; objects not identified by URLs | 5 | PASS | "entities in GraphQL are not identified by URLs. Instead, a GraphQL server operates on a single URL/endpoint, usually /graphql" |
| 32 | Server must handle POST for query and mutation; may accept GET for queries | 5 | PASS | "must handle the HTTP POST method for query and mutation operations, and may also accept the GET method for query operations." |
| 33 | Result in top-level `data`, errors in top-level `errors` | 3 | PASS | "a request’s result will be returned on a top-level data key in the response. If the request raised any errors, there will be information about what went wrong on a top-level errors key." |
| 34 | gRPC: client calls a server method as if it were a local object | 7 | PASS | "a client application can directly call a method on a server application on a different machine as if it were a local object" |
| 35 | You define a service: methods, parameters, return types | 7 | PASS | "gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types." |
| 36 | By default gRPC uses Protocol Buffers to describe and serialize data | 7 | PASS | "By default, gRPC uses Protocol Buffers, Google’s mature open source mechanism for serializing structured data (although it can be used with other data formats such as JSON)." Table cell "other formats possible" also matches. |
| 37 | Service and messages are written in a `.proto` file | 7 | PASS | "define the structure for the data ... in a proto file : this is an ordinary text file with a .proto extension" / "services in ordinary proto files" |
| 38 | `protoc` generates code; client calls methods on a stub | 7, 8 | PASS | S7: "you use the protocol buffer compiler protoc to generate data access classes" / S8: "the client has a local object known as stub ... that implements the same methods as the service." |
| 39 | gRPC has four kinds of method: unary, server streaming, client streaming, bidirectional | 8 | PASS | "gRPC lets you define four kinds of service method:" Unary, Server streaming, Client streaming, Bidirectional streaming RPCs ("both sides send a sequence of messages using a read-write stream"). |
| 40 | Deadline: the call ends with `DEADLINE_EXCEEDED` if it takes longer | 8 | PASS | "gRPC allows clients to specify how long they are willing to wait for an RPC to complete before the RPC is terminated with a DEADLINE_EXCEEDED error." |
| 41 | A call ends with a status code and an optional status message | 8 | PASS | "status details (status code and optional status message)" |
| 42 | Trade-offs: REST "What it is" | 1 | PASS | Claim 1. |
| 43 | Trade-offs: GraphQL "What it is" | 2 | PASS | Claim 21. |
| 44 | Trade-offs: REST contract lives "in the uniform interface: resources, representations, and media types" | 1 | FAIL (fixed, see Re-check: PASS) | S1 never says where a REST "contract" lives. It names the four interface constraints (identification of resources, manipulation through representations, self-descriptive messages, hypermedia). "Contract" is the tutorial's framing and the cell has no "Tutorial's view" mark. Add the mark, or reword to what S1 states. |
| 45 | Trade-offs: GraphQL contract lives in the schema of types and fields | 4 | PASS | "The GraphQL type system describes what data can be queried from the API. The collection of those capabilities is referred to as the service’s schema and clients can use that schema to send queries" |
| 46 | Trade-offs: gRPC contract in a service definition, by default a `.proto` file | 8 | PASS | "Starting from a service definition in a .proto file" / "By default, gRPC uses protocol buffers as the Interface Definition Language (IDL)" |
| 47 | Trade-offs: REST data on the wire is a representation in some media type | 1 | PASS | Claims 13 and 14. |
| 48 | Trade-offs: GraphQL clients and servers should support JSON | 5 | PASS | "GraphQL clients and servers should support JSON for serialization and may support other formats." |
| 49 | Trade-offs: REST related data moves in a standard form, can cost efficiency | 1 | PASS | Claim 19. |
| 50 | Trade-offs: GraphQL one query fetches related data in one request | 3 | PASS | Claim 29. |
| 51 | Trade-offs: REST caching: a cache constraint; retrieval responses cacheable by default | 1 | PASS | Claims 17 and 18. |
| 52 | Trade-offs: GraphQL has no URL-like unique id, so the API should expose ids for client caching | 6 | PASS | "In GraphQL, there’s no URL-like primitive that provides this globally unique identifier for a given object. Hence, it’s a best practice for the API to expose such an identifier for clients to use as a prerequisite for certain types of caching." |
| 53 | Trade-offs: GET for queries may help HTTP and CDN caching; long queries can pass URL limits | 5 | PASS | "a client may be encouraged to leverage this option to facilitate HTTP caching or edge caching in a content delivery network (CDN). However, because GraphQL documents strings may be quite long ... the query parameters may exceed the limits that browsers and CDNs impose on URL lengths." |
| 54 | Trade-offs: GraphQL subscriptions are one operation type | 3 | PASS | Claim 26. |
| 55 | Trade-offs: gRPC server, client, bidirectional streaming | 8 | PASS | Claim 39. |
| 56 | Trade-offs: GraphQL response can hold `data` and `errors`; status can still be 2xx | 5 | PASS | "If a response contains a data key and its value is not null, then the server should respond with a 2xx status code ... This is the case even if the response includes errors, since HTTP does not yet have a status code representing “partial success.”" (the page says "can", which is safe) |
| 57 | Trade-offs: gRPC errors are a status code and optional message | 8 | PASS | Claim 41. |
| 58 | Common mistakes: both sides of a gRPC call judge the call on their own; results may differ | 8 | PASS | "both the client and server make independent and local determinations of the success of the call, and their conclusions may not match." |
| 59 | Common mistakes: changes made before a cancel are not rolled back | 8 | PASS | "Changes made before a cancellation are not rolled back." |
| 60 | Common mistakes: read the `errors` key | 3 | PASS | Claim 33. |
| 61 | Key words: Resource, Representation, Uniform interface, Stateless | 1 | PASS | Claims 5, 6, 12, 13, 15. |
| 62 | Key words: Schema, Query, Mutation | 4, 3 | PASS | Claims 25, 26, 27. S3 recap: "A GraphQL operation that reads data starts at the query root operation type". |
| 63 | Key words: Protocol Buffers, Stub, Unary RPC, Deadline | 7, 8 | PASS | Claims 36, 38, 39, 40. |

Tutorial's own text, checked for marking: "When you need it" (starts "This advice is the tutorial's own"), the exam-platform example (starts "This example is the tutorial's own"), the tip callout (starts "These test ideas are the tutorial's own advice"), and the Trade-offs cells. Every Trade-offs cell without a cite starts with "Tutorial's view" (Related data/gRPC, Caching/gRPC, Streaming/REST, Errors/REST, Best fit x3). No tutorial text states a fact as if a source said it, except claim 10 and claim 44.

## Structure check

| Check | Result |
|---|---|
| All 8 `page.sources` are https and each is cited | PASS (cites 1 to 8 all used) |
| Every `<Cite n>` has a source (max n=8) | PASS |
| Copy check (run of 8 or more words from a source) | PASS. Longest runs: "hypermedia as the engine of application state" (7, a field name), "has the same shape as the query" (7), "but http is the most common choice" (7). One 8-token run, "return types by default grpc uses protocol buffers", crosses a sentence end ("return types." / "By default, gRPC uses ...") and has a protocol name; not counted. |
| Section order: In plain words, When you need it, A real-life example, Common mistakes, What a tester can check, Key words (last) | PASS. The page adds `## How it works` and `## Trade-offs` between "When you need it" and "A real-life example"; the rules do not forbid extra sections. |
| Tip callout has no `<Cite>`; no `<Voices>` | PASS |
| `#` title is "REST, GraphQL, and gRPC" | PASS |
| No blog, forum, Wikipedia, AI summary, or systemdesignbangla.com | PASS (roy.gbiv.com is the author's own copy; graphql.org; grpc.io) |
| Prose 700 to 1100 words | FAIL (fixed, see Re-check: 1052 to 1056 words, PASS). First count: 1204 words with headings and the tip callout; 1177 without headings. Even a count that drops the headings is over 1100. Cut about 100 words (for example from "How it works" and the Trade-offs closing paragraph). |

Claims checked: 63 rows (claims 1 to 63).
Open FAILs (first pass): 3

## Re-check

Writer's changes re-read in full. Copy check re-run on the new text; word count measured by me.

| # | Item | Verdict | Detail |
|---|---|---|---|
| 10 | gRPC wording | PASS | Lede: "gRPC lets a program call a method on a remote server"; table: "A way to call a method on a remote server as if it were local" (cite 7). S7: "a client application can directly call a method on a server application on a different machine as if it were a local object". |
| 44 | REST contract cell | PASS | Now starts "Tutorial's view:" and has no cite. |
| W | Word count | PASS | 1056 words (1052 by a second method). In the 700 to 1100 range. |
| 64 | "Code-on-demand is an optional extra" (cite 1) | PASS | "it also reduces visibility, and thus is only an optional constraint within REST." |
| 65 | "A server usually has one endpoint, often `/graphql`, and objects have no URLs" (cite 5) | FAIL (fixed, see second re-check: PASS) | New wording is stronger than S5. S5: "entities in GraphQL are not identified by URLs. Instead, a GraphQL server operates on a single URL/endpoint, usually /graphql". "Not identified by URLs" is not "have no URLs". Restore "are not identified by URLs". |
| 66 | Shortened REST text (resource, representation, stateless, cache, efficiency, reliability) | PASS | Same facts as claims 11 to 20; hedges kept; "Fielding ... not optimal for kinds of interaction other than large-grain hypermedia transfer" matches S1 5.1.5. |
| 67 | Shortened GraphQL and gRPC text (schema, operations, check-then-run, `.proto`, `protoc`, stub, deadline, status) | PASS | Same facts as claims 21 to 41. Every cite still sits next to its claim; none was left without a claim. |

Other checks after the cuts: cites 1 to 8 are all still used; all sources https; copy check clean (longest run 7 words: "hypermedia as the engine of application state", "has the same shape as the query", "but http is the most common choice"); section order unchanged; tip callout has no cite; no Voices; title unchanged; every uncited Trade-offs cell starts with "Tutorial's view".

## Second re-check

| # | Item | Verdict | Detail |
|---|---|---|---|
| 65 | "A server usually has one endpoint, often `/graphql`, and entities are not identified by URLs" (cite 5) | PASS | S5: "entities in GraphQL are not identified by URLs. Instead, a GraphQL server operates on a single URL/endpoint, usually /graphql". Same meaning, hedges kept ("usually", "often"). |

Copy check on the changed sentence: longest run shared with S5 is "but http is the most common choice" (7 words, from another sentence). The changed sentence shares only "entities are not identified by urls" (6 words) with S5, so it is under 8. PASS.

Open FAILs: 0
