const mot = process.argv[2]
let reverse = ""

/* ici on décrémente i qui contient la valeur max de l'argument pour passé a l'envers les valeurs trouvé a reverse*/

for (let i = mot.length - 1; i >= 0; i--){
    reverse += mot[i]
}

console.log(reverse)