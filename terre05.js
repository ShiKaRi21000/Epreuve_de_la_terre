const division = process.argv[2] / process.argv[3]
const reste = process.argv[2] % process.argv[3]

if (division === Infinity){
    console.log("Erreur")
}

else{
    console.log(`Le résultat de ${process.argv[2]} divisé par ${process.argv[3]} est égal à ${parseInt(division)} il restera ${reste}`)
}