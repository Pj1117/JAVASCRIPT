
function contar(){
    var inicio = Number(document.querySelector('input[type=number]#Iinicio').value)
    var fim = Number(document.querySelector('input[type=number]#Ifim').value)
    var passo = Number(document.querySelector('input[type=number]#Ipasso').value)
    var res = document.querySelector('div#res')
    if (passo <= 0){
        window.alert('[ERRO] Número Inválido!')
    }

    if (inicio < fim){
        while (inicio <= fim){
            res.innerHTML += `${inicio} 👉`
            inicio += passo
        }
        
    }

    
}