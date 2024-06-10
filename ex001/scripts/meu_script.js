var body = window.document.body.style.background = '#87CEFA'
var res = window.document.querySelector('div.res')
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
var text = window.document.getElementById('text')
var img = window.document.getElementById('picture')

function recarregar(){
    if (hora >= 0 && hora < 6){
       // Madrugada
       document.body.style.background = 'gray'
       text.innerHTML = `Agora são ${hora}:${minutos}:${segundos} da madrugada. <br>
       Bom Dia!`
       img.src = 'Madrugada.jpg'
    }

    else if(hora >= 6 && hora <= 12){
        // Manhã
        document.body.style.background = '#F0D8BC'
        text.innerHTML = `Agora são ${hora}:${minutos}:${segundos} da manhã. <br>
        Bom Dia!`
        img.src = 'Manhã.jpg'
    }

    else if (hora > 12 && hora < 18){
        // Tarde
        document.body.style.background = '#E2956B'
        text.innerHTML = `Agora são ${hora}:${minutos}:${segundos} da tarde. <br>
        Boa Tarde!`
        img.src = 'Tarde.jpg'
    } else {
        // Noite
        document.body.style.background = '#2F3D4A'
        text.innerHTML = `Agora são ${hora}:${minutos}:${segundos} da noite. <br>
        Boa Noite!`
        img.src = 'Noite.jpg'
    }
}

