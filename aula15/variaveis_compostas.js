let num = [5, 8, 2, 9, 3]
num.push(1) // cria uma 'posiçao' automaticamente e adiciona o 7 nela
num.sort() // organiza em orem numerica do menor para o maior
console.log(num)
console.log(`Nosso vetor é o ${num.sort()}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log('===========================================')
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
