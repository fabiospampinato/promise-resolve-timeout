# Promise Resolve Timeout

Create a Promise which will resolve with the provided value after a timeout.

## Install

```sh
npm install promise-resolve-timeout
```

## Usage

If the passed value is a function it will be called and its return value will be the resolved value, otherwise the passed value is the resolved value.

```ts
import resolveTimeout from 'promise-resolve-timeout';

// Defaulting to a default value when racing promises

Promise.race ([
  resolveTimeout ( 1000, false ), // Resolving after 1000ms
  resolveTimeout ( 5000, () => 'foo' ), // Resolving after 5000ms
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
