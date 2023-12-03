
const { argv } = require('node:process');

argv.forEach ((val, index) => {
  if (index <= 1){

  }
  else {
    console.log(`${val}`);
  }
})
