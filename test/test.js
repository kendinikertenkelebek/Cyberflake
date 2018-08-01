const cyberflake = require('../src/app');

let start = Date.now();

let first = [];

// eslint-disable-next-line no-constant-condition
while (true) {
  first.push(cyberflake.generate());
  if (Date.now() - start >= 1000) {
    console.log(`Total generated cyberflake ID: ${first.length}`); // eslint-disable-line no-console
    break;
  }
}
