// tentar criar option no select
var amarelo = []
var lista = []

var teste = document.getElementById('teste')
function adicionar (numero){
    var select = document.getElementById('select')
    if (numero  > 0 && numero <= 100){
        c = 0
        while (lista.includes(numero) == false){
        let criar = document.createElement('option')
        select.appendChild(criar)
            lista += numero
            amarelo.push(numero)
            c += 1
            return criar.innerHTML = `Valor ${numero} adicionado!`
        }
    } else if (amarelo.includes(numero) != -1){
        return window.alert(`${amarelo} Número já adicionado!`)
    } else if (numero < 0 || numero > 100 || numero.lenght == 0){
        return window.alert (`O número ${numero} não é um número que está entre 1 e 100!`)
    }
}


function soma(numero){

}

function menor(numero){
    // criar elemento e um pai nas funçoes do finalizar
}

function media(numero){

}

