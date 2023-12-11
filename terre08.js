/* on gère l'entrée et on vérifie si c'ets un entier*/

if ((parseInt(process.argv[2]) <= 0 ) || (parseInt(process.argv[3]) <= 0)){
    console.log("le calcul doit être fait avec des nombres entiers positifs")
}

/* on vérifie si un bien un nombre a défault on affiche l'erreur*/

else if (isNaN(process.argv[2])){
    console.log("Merci d'entré une base valide avec un entier positif")
}

else if (isNaN(process.argv[3])){
    console.log("Merci d'entré un exposant valide avec un entier positif")
}

/* on procède au calcul avec les bonnes infos*/

else {
    const puissance = parseInt(process.argv[2]) ** parseInt(process.argv[3])
    console.log(puissance)
}

