/* on gère l'entrée et on vérifie si c'ets un entier*/

if ((parseInt(process.argv[2]) <= 0)){
    console.log("le calcul doit être fait avec un nombre entier positif")
}

/* on vérifie si un bien un nombre a défault on affiche l'erreur*/

else if (isNaN(process.argv[2])){
    console.log("Merci d'entrer un nombre valide")
}

/* on procède au calcul avec les bonnes infos*/

else {
    const racine_carre = process.argv[2] ** 0.5
    console.log(racine_carre)
}

/* On peut rajouter parseInt a racine_carre pour arrondir a un entier.
J'ai réussi à trouver un forum perdu au fin fond de l'internet avec la formule ** 0,5 pour calculer la racine carré.
Test avec des boucle for et while non concluante */
