
/* RESULT */

type FN = ( ...args: any ) => any;

type Result<T> = T extends FN ? ReturnType<T> : T;

/* EXPORT */

export {FN, Result};
