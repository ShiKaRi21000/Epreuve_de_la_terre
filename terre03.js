const alphabet = "abcdefghijklmnopqrstuvwxyz"

/* on récupère l'index de l'argument passé dans la chaine de caractère puis on slice alphabet à cet endroit*/

let correspondance = alphabet.indexOf(process.argv[2])
console.log(alphabet.slice(correspondance))


