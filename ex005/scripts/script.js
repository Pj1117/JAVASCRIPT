// tentar criar option no select

function adicionar (numero){
    var select = document.getElementById('select')
    if (numero  > 0 && numero <= 100){
       let criar = document.createElement('option')
       select.appendChild(criar)
       return criar.innerHTML = `teste ${numero}`
    } else if (numero < 0 || numero > 100 || numero.lenght == 0){
        return alert('testando')
    }
}

function lista(numero){
    var teste = document.getElementById('teste')
    var lista = []
    var amarelo = []
    c = 0
    if (numero > 0 && numero <= 100){
        while (numero > 0 && numero <= 100){
            lista.push(numero)
            c += 1
            amarelo.push(lista)
            return teste.innerHTML += `Lista: ${lista[c-1]} e ${numero} e ${c}<br>
            amarelo ${amarelo}`
        }
    }
}


function soma(numero){

}

function menor(numero){
    // criar elemento e um pai nas funçoes do finalizar
}

function media(numero){

}


// var teste = document.getElementById('teste')