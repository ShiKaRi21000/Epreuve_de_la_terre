/* premier fonction de l'épreuve qui vérifie si l'entré est un nombre premier.
on vérifie si c'est supérieur à 1 et sinon si son calcul par lui même uniquement est bien 0 on dit que c'est un nombre premier*/

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
