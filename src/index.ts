
/* PROMISE RESOLVE TIMEOUT */

function resolveTimeout<T> ( timeout: number, value: T ): Promise<T> {

  return new Promise ( resolve => {

    setTimeout ( () => resolve ( value ), timeout );

  });

}

/* EXPORT */

export default resolveTimeout;
