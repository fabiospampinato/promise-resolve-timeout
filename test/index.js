
/* IMPORT */

import {describe} from 'ava-spec';
import {default as resolveTimeout} from '../dist';

/* PROMISE RESOLVE TIMEOUT */

describe ( 'Promise Resolve Timeout', it => {

  it ( 'works', async t => {

    const start = Date.now (),
          value = await resolveTimeout ( 1000, 123 ),
          elapsed = Date.now () - start;

    t.true ( elapsed >= 1000 );
    t.is ( value, 123 );

  });

});