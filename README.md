# Promise Resolve Timeout

Create a Promise which will resolve with the provided value after a timeout.

## Install

```sh
npm install --save promise-resolve-timeout
```

## Usage

```ts
import resolveTimeout from 'promise-resolve-timeout';

// Defaulting to a default value when racing promises

Promise.race ([
  resolveTimeout ( 1000, false ), // Resolving after 1000ms
  new Promise ( () => {
    // Something...
  });
]);

// Delaying

resolveTimeout ( 1000 ) // Waiting 1000ms
  .then ( () => {
    // Something...
  });
```

## License

MIT © Fabio Spampinato
