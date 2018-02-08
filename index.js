const { name } = require('./package.json');
const { capitalize } = require('lodash');
const yarn2nixExampleC =require ('yarn2nix-example-c');

module.exports = () => [
  capitalize(`this is ${name}`), yarn2nixExampleC()
].join('\n');
