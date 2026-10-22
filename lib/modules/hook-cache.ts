/**
 * A function that makes one value for each key on the first call and gives the
 * same value after that. `progressHook` uses it, so every component on a page
 * shares one progress store. It is a plain `.ts` file, so `node --test` can load it.
 */
export function cachedBy<T>(make: (key: string) => T): (key: string) => T {
  const cache = new Map<string, T>();
  return (key) => {
    if (!cache.has(key)) cache.set(key, make(key));
    return cache.get(key) as T;
  };
}
