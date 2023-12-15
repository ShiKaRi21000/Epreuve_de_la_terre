let recuperer_heure = parseInt(process.argv[2])
const recuperer_minute = process.argv[2].slice(process.argv[2].indexOf(":"))

// on récupère l'heure et la minute séparément pour pouvoir géré uniquement l'heure

if (recuperer_heure > 11 && recuperer_heure <= 23 && recuperer_heure !== 12){
    recuperer_heure = recuperer_heure - 12
    recuperer_heure = recuperer_heure + recuperer_minute
    console.log(recuperer_heure + "PM")
}

else if (recuperer_heure <= 11 && recuperer_heure > 0){
    recuperer_heure = recuperer_heure + recuperer_minute
    console.log(recuperer_heure + "AM")
}

else if (recuperer_heure === 0){
    recuperer_heure = recuperer_heure + recuperer_minute
    console.log(recuperer_heure + "AM")
}

else if (recuperer_heure === 12){
    recuperer_heure = recuperer_heure + recuperer_minute
    console.log(recuperer_heure + "PM")
}

