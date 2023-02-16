
/* MAIN */

function resolveTimeout ( timeout: number ): Promise<undefined>;
function resolveTimeout <T> ( timeout: number, value: () => T ): Promise<T>;
function resolveTimeout <T> ( timeout: number, value: T ): Promise<T>;
function resolveTimeout <T> ( timeout: number, value?: T ) {

  return new Promise ( resolve => {

    if ( timeout === Infinity ) return;

    setTimeout ( () => {

      if ( typeof value === 'function' ) {

        resolve ( value () );

      } else {

        resolve ( value );

      }

    }, timeout );

  });

};

/* EXPORT */

export default resolveTimeout;
