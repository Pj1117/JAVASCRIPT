function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img') 
       img.setAttribute('id', 'foto') 
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            // Criança
            img.setAttribute('src', 'Criança_Homem.jpg')
        } else if (idade < 21){
            // Jovem
            img.setAttribute('src', 'Jovem_Homem.jpg')
        } else if (idade < 50){
            // Adulto
            img.setAttribute('src', 'Adulto_Homem.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'Idoso_Homem.jpg')
        }

       } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'Criança_Mulher.jpg')
        } else if (idade < 21) {
            // Adulta
            img.setAttribute('src', 'Jovem_Mulher.jpg')
        } else if (idade < 50){
            // Jovem
            img.setAttribute('src', 'Adulta_Mulher.jpg')
        } else {
            // Idosa
            img.setAttribute('src', 'Idosa_Mulher.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}