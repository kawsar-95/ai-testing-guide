/**
 * The Bangla twin of an English string object. It has the same keys. A
 * string stays a string, and a function keeps its parameters. The compiler
 * then rejects a missing key. A value that must not change (an id, an href)
 * copies the English value. tests/i18n.test.ts checks the shape at run time.
 */
export type Bn<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => string
    ? (...args: A) => string
    : T[K] extends string
      ? string
      : T[K] extends readonly (infer U)[]
        ? readonly Bn<U>[]
        : T[K] extends object
          ? Bn<T[K]>
          : T[K];
};
