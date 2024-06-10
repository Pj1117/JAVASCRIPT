function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 0
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 6){
        // Madrugada
        img.src = 'Madrugada.jpg'
        document.body.style.background = '#82909D'
    } else if (hora >= 6 && hora < 12){
        // Bom Dia!
        img.src = 'Manhã.jpg'
        document.body.style.background = '#FDB06C'
    } else if (hora >= 12 && hora <= 18){
        // Boa Tarde!
        img.src = 'Tarde.jpg'
        document.body.style.background = '#A1451E'
    } else {
        // Boa Noite!
        img.src = 'Noite.jpg'
        document.body.style.background = '#2F414D'
    }
}
 