/* premier fonction de l'épreuve qui vérifie si l'entré est un nombre premier.
on vérifie si c'est supérieur à 1 et sinon son calcul par lui même pour vérifié si le retour est bien 0*/

function nbPremier(nombre) {
    for(var i = 2; i < nombre; i++)
      if(nombre % i === 0) return false;
    return nombre > 1;
  }

  if (nbPremier(process.argv[2]) === true){
    console.log("Ceci est un nombre premier")
  }

  else{
    console.log("Ceci n'est pas un nombre premier")
  }
