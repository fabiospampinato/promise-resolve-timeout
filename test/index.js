
/* IMPORT */

import {describe} from 'fava';
import resolveTimeout from '../dist/index.js';

/* MAIN */

describe ( 'Promise Resolve Timeout', it => {

  it ( 'works with no values', async t => {

    const start = Date.now ();
    const value = await resolveTimeout ( 1000 );
    const elapsed = Date.now () - start;

    t.true ( elapsed >= 1000 );
    t.is ( value, undefined );

  });

  it ( 'works with primitive values', async t => {

    const start = Date.now ();
    const value = await resolveTimeout ( 1000, 123 );
    const elapsed = Date.now () - start;

    t.true ( elapsed >= 1000 );
    t.is ( value, 123 );

  });

  it ( 'works with function values', async t => {

    const start = Date.now ();
    const value = await resolveTimeout ( 1000, () => 123 );
    const elapsed = Date.now () - start;

    t.true ( elapsed >= 1000 );
    t.is ( value, 123 );

  });

  it ( 'works with Infinite timeout', async t => {

    resolveTimeout ( Infinity, () => t.fail () );

    await resolveTimeout ( 1000 );

    t.pass ();

  });

});
