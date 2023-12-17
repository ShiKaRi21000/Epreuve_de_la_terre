if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])){
    console.log("Erreur merci d'entrer 3 nombres entiers SVP")
}

else if (parseInt(process.argv[2]) === parseInt(process.argv[3]) || parseInt(process.argv[4]) === parseInt(process.argv[2])){
    console.log("Erreur certains chiffres sont identiques")
}

else if ((parseInt(process.argv[2]) > parseInt(process.argv[3]) && parseInt(process.argv[2]) < parseInt(process.argv[4])) || 
         (parseInt(process.argv[2]) < parseInt(process.argv[3]) && parseInt(process.argv[2]) > parseInt(process.argv[4]))){
    console.log(process.argv[2])
}

else if ((parseInt(process.argv[3]) > parseInt(process.argv[2]) && parseInt(process.argv[3]) < parseInt(process.argv[4])) || 
         (parseInt(process.argv[3]) < parseInt(process.argv[2]) && parseInt(process.argv[3]) > parseInt(process.argv[4]))){
    console.log(process.argv[3])
}

else if ((parseInt(process.argv[4]) > parseInt(process.argv[2]) && parseInt(process.argv[4]) < parseInt(process.argv[3])) || 
         (parseInt(process.argv[4]) < parseInt(process.argv[2]) && parseInt(process.argv[4]) > parseInt(process.argv[3]))){
    console.log(process.argv[4])
}

