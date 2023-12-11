/* dans une condition on vérifie en même temps si l'argument est bien un nombre, si c'est un entier et si c'est un nombre a virgule
si c'est le cas on fait la convertion pour vérifier si c'est pair ou impair et dans le cas contraire on affiche le else*/


if ((Number.isInteger(parseInt(process.argv[2]))) && (parseInt(process.argv[2]) % 2 === 0) && (isFinite(process.argv[2]))){
    console.log("Ce chiffre est pair")
}

else if ((Number.isInteger(parseInt(process.argv[2]))) && (parseInt(process.argv[2]) % 2 !== 0) && (isFinite(process.argv[2]))){
    console.log("Ce chiffre est impair")
}

else if (isNaN(process.argv[2])) {
    console.log("Tu ne me la fera pas à l'envers.")
}