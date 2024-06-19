// tentar criar option no select
var lista_definitiva = []
var lista = []
var div_fializar = document.getElementById('final')
var botao_final = document.getElementById('botao')
var total = 0
botao_final.style.display = 'none'
function adicionar (numero){
    var select = document.getElementById('select')
    if (numero  > 0 && numero <= 100){
        botao_final.style.display = 'inline'
        let c = 0
        while (lista_definitiva.includes(numero) == false){
        let criar = document.createElement('option')
        select.appendChild(criar)
            lista += numero
            total += numero
            lista_definitiva.push(numero)
            c += 1
            return criar.innerHTML = `Valor ${numero} adicionado!`
        }
    }
    if (lista_definitiva.includes(numero) == true){
        return window.alert(`Número já adicionado!`)
    } else if (numero <= 0 || numero > 100 || numero.lenght == 0){
        return window.alert (`O número ${numero} não é um número que está entre 1 e 100!`)
    }
}


function soma(){
    let criar_p0 = document.createElement('p')
    div_fializar.appendChild(criar_p0)
    return criar_p0.innerHTML = `A soma de todos os números digitados é ${total}`
}

function menor(){
    let criar_p1 = document.createElement('p')
    div_fializar.appendChild(criar_p1)
    var lista_com_sort = lista_definitiva.sort()
    return criar_p1.innerHTML = `O menor número digitado foi ${lista_definitiva[0]}`
}

function media(){
    let criar_p2 = document.createElement('p')
    div_fializar.appendChild(criar_p2)
    var r = total / lista.length
    var resultado = r.toFixed(2)
    return criar_p2.innerHTML = `A media dos números digitados é ${resultado.replace('.', ',')}`
}

