
if ((Number.isInteger(parseInt(process.argv[2]))) && (parseInt(process.argv[2]) % 2 === 0) && (isFinite(process.argv[2]))){
    console.log("Ce chiffre est pair")
}

else if ((Number.isInteger(parseInt(process.argv[2]))) && (parseInt(process.argv[2]) % 2 !== 0) && (isFinite(process.argv[2]))){
    console.log("Ce chiffre est impair")
}

else if (isNaN(process.argv[2])) {
    console.log("Tu ne me la fera pas à l'envers.")
}
