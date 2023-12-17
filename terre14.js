if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])){
    console.log("Erreur merci d'entrer 3 nombres entiers SVP")
}

else if (parseInt(process.argv[2]) === parseInt(process.argv[3]) || parseInt(process.argv[4]) === parseInt(process.argv[2])){
    console.log("Erreur certains chiffres sont identiques")
}

// on pourrait même séparer les conditions pour dire si c'est trié dans l'ordre croissant ou décroissant.

else if ((parseInt(process.argv[2]) < parseInt(process.argv[3]) && parseInt(process.argv[3]) < parseInt(process.argv[4])) || 
         (parseInt(process.argv[4]) < parseInt(process.argv[3]) && parseInt(process.argv[3]) < parseInt(process.argv[2]))){
    console.log("Les entrées sont triées.")
}

else {
    console.log("les entrées ne sont pas triées.")
}
