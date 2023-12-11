
const { argv } = require('node:process');

/* on récupère l'argument donné en lancant le fichier puis on afficher uniquement les arguments passé après l'index 1 car index 0 et 1 correspond au nom et path du fichier*/

argv.forEach ((val, index) => {
  if (index <= 1){
  }
  else {
    console.log(`${val}`);
  }
})
