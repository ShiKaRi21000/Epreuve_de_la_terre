const mot = process.argv[2]
let index = ''

/* si l'argument n'est pas définie on affiche une erreur*/

if (process.argv[2] === undefined) {
    console.log('Erreur')
}

/* si on n'a un argument a l'index 3 on affiche une erreur car on veut qu'un seul argument*/

else if (process.argv[3]){
    console.log("Erreur trop d'argument passé. Merci de donné un seul mot")
}

/* on passe le mot donnée en argument dans une boucle for in qui affiche l'index de chaque élement donc de chaque lettre du mot donné.
ensuite on l'ajoute à i qu'on passe à index qui récupère le nombre de fois ou on n'a bouclé donc le nombre de lettre du mot.*/

else {

    let i = ''
    for (i in mot) {
    }
    index += i
    console.log(index)
}

