const { argv } = require('node:process');
const alphabet = "abcdefghijklmnopqrstuvwxyz"

argv.forEach ((val, index) => {
    if (index <= 1){
    }
    else {
      let correspondance = alphabet.indexOf(val)
      console.log(alphabet.slice(correspondance))
    }
  })
