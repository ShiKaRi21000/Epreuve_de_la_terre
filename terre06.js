const mot = process.argv[2]
let reverse = ""

for (let i = mot.length - 1; i >= 0; i--){
    reverse += mot[i]
}

console.log(reverse)