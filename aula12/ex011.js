var idade = 66
if (idade < 16) {
    console.log(`${idade} anos é de idade considerado Menor de idade. Não Vota.`)
}

else {
    if (idade < 18 || idade > 65) {
        console.log(`${idade} anos de idade tem Voto Opcional.`)
    }
    
    else {
        console.log(`${idade} anos de idade tem Voto Obrigatório`)
    }
}