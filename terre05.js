/* on crée 2 constantes qui contiennent la division pour l'une et le reste pour l'autre 
puis on affiche le résultat en ajoutant parseint à division pour avoir l'entier inférieur de cette division
Si la division ne peut pas ce faire ou affiche un nombre infini on affiche l'erreur*/

const division = process.argv[2] / process.argv[3]
const reste = process.argv[2] % process.argv[3]

if (division === Infinity){
    console.log("Erreur")
}

else{
    console.log(`Le résultat de ${process.argv[2]} divisé par ${process.argv[3]} est égal à ${parseInt(division)} il restera ${reste}`)
}