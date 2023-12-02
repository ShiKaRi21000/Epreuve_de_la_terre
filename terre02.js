
const { argv } = require('node:process');

// print process.argv
argv.forEach((val) => {
  console.log(`${val}`);
});