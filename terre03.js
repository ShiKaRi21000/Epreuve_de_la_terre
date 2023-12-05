const { argv } = require('node:process');
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']

argv.forEach ((val, index) => {
    if (index <= 1){
    }
    else {
      let correspondance = alphabet.indexOf(val)
      for (i of alphabet.splice(correspondance))
        console.log(i)
    }
  })
