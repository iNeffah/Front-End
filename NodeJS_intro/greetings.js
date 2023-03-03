// With the module from ./flags.js, gets the values from tags --name and --greetings
// specified in Node.js file run. See ./package.json -> scripts

const getFlags = require('./flags.js');
console.log(`Hello ${getFlags('--name')}. ${getFlags('--greeting')}`);