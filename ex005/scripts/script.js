lista = []
var numero = document.getElementById('Inumero')
var res = document.querySelector('div#res')
function adicionar(){
    if (n > 100 || n < 0){
        window.alert ('Por favor digite um número válido!')
    } else{
        lista.push(n)
        return res.innerHTML = `Valor ${n} adicionado!`
    }
}


















