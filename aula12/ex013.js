var agora = new Date()
var diaSem = agora.getDay()

/*  
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado

*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break // BREAK É OBRIGATÓRIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!
    case 1:
        console.log('Segunda')
        break // BREAK É OBRIGATÓRIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!
    case 2:
        console.log('Terça')
        break // BREAK É OBRIGATÓRIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!
    case 3:
        console.log('Quarta')
        break // BREAK É OBRIGATÓRIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!
    case 4:
        console.log('Quinta')
        break // BREAK É OBRIGATÓRIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!
    case 5:
        console.log('Sexta')
        break // BREAK É OBRIGATÓRIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!
    default:
        console.log('[ERRO] Dia inválido!')
        break // BREAK É OBRIGATÓRIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!
}