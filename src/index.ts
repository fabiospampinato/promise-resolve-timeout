
/* IMPORT */

import {FN, Result} from './types';

/* PROMISE RESOLVE TIMEOUT */

function resolveTimeout<T extends FN> ( timeout: number, fn: T ): Promise<ReturnType<T>>;
function resolveTimeout<T = undefined> ( timeout: number, value?: T ): Promise<T>;
function resolveTimeout<T = undefined> ( timeout: number, value?: T ) {

  return new Promise<Result<T>> ( resolve => {

    if ( timeout === Infinity ) return;

    setTimeout ( () => {

      if ( typeof value === 'function' ) {

        resolve ( value () );

      } else {

        resolve ( value as any ); //TSC

      }

    }, timeout );

  });

}

/* EXPORT */

export default resolveTimeout;
