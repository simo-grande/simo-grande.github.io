# THE JS ENGINE 
## Similarities and Differences between SpiderMonkey and V8
### Similarities
V8 used in Google chrome, Node.js and v8.net.
the time they take to allocate memory is high in both v8 and spidermonkey(if memory is fragmented)
both are incremental GC with very similar performance impact.however spidermonkey has to scan entire heap whereas V8 can do away with shorter scans.
Spidermonkey GC yields less usable memory than V8 GC because of memory fragmentation
both will not play nicely with high rate of memory allocation in short bursts.
V8 is the fastest, because it compiles all JS to machine code eliminating a need for an interpreter.SpiderMonkey (what FF uses) is fast too, but compiles to an intermediate byte-code, not machine code which is interpreted. That's the major difference with V8.