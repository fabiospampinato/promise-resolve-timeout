
/* MAIN */

type FN = ( ...args: unknown[] ) => unknown;

type Result<T> = T extends FN ? ReturnType<T> : T;

/* EXPORT */

export type {FN, Result};
