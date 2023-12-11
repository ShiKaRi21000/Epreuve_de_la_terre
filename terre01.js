
/* on récupère le chemin du fichier et on le split ce qui transforme le chemin en tableau. */

let pathName = __filename.split("\\")

/* ensuite on affiche le dernier index du chemin qui est donc le nom du fichier */

console.log(pathName[pathName.length -1])



