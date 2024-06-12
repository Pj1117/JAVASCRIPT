
function verificar(){
var tabuada = document.getElementById('Itabuada')
var teste = document.getElementById('teste')
var numero = document.querySelector('input[type=number]').value
var n = 0
var conta = []
var l_1 = document.getElementById('l_1')
var l_2 = document.getElementById('l_2')
var l_3 = document.getElementById('l_3')
var l_4 = document.getElementById('l_4')
var l_5 = document.getElementById('l_5')
var l_6 = document.getElementById('l_6')
var l_7 = document.getElementById('l_7')
var l_8 = document.getElementById('l_8')
var l_9 = document.getElementById('l_9')
var l_10 = document.getElementById('l_10')
    if (numero == ''){
        window.alert('[ERRO] Digite um número Válido!')
    }

    if (Number(numero) <= 0 || Number(numero) > 0){
        while (n <= 9){
            n += 1
            conta += n
        }
    }

    l_1.innerHTML = `${numero} x ${conta[0]} = ${numero * conta[0]}`
    l_2.innerHTML = `${numero} x ${conta[1]} = ${numero * conta[1]}`
    l_3.innerHTML = `${numero} x ${conta[2]} = ${numero * conta[2]}`
    l_4.innerHTML = `${numero} x ${conta[3]} = ${numero * conta[3]}`
    l_5.innerHTML = `${numero} x ${conta[4]} = ${numero * conta[4]}`
    l_6.innerHTML = `${numero} x ${conta[5]} = ${numero * conta[5]}`
    l_7.innerHTML = `${numero} x ${conta[6]} = ${numero * conta[6]}`
    l_8.innerHTML = `${numero} x ${conta[7]} = ${numero * conta[7]}`
    l_9.innerHTML = `${numero} x ${conta[8]} = ${numero * conta[8]}`
    l_10.innerHTML = `${numero} x ${10} = ${numero * 10}`
}

