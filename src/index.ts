
/* IMPORT */

import type {Result} from './types';

/* MAIN */

const resolveTimeout = <T> ( timeout: number, value?: T ): Promise<Result<T>> => {

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

};

/* EXPORT */

export default resolveTimeout;
