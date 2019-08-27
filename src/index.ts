
/* PROMISE RESOLVE TIMEOUT */

function resolveTimeout<T extends (( ...args: any ) => any)> ( timeout: number, fn: T ): Promise<ReturnType<T>>;
function resolveTimeout<T> ( timeout: number, value: T ): Promise<T>;
function resolveTimeout<T> ( timeout: number, value: T ) {

  return new Promise ( resolve => {

    setTimeout ( () => {

      if ( typeof value === 'function' ) {

        resolve ( value () );

      } else {

        resolve ( value );

      }

    }, timeout );

  });

}

/* EXPORT */

export default resolveTimeout;
