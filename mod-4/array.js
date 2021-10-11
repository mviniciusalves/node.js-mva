const meuArray = [
    'Vinicius', 'Isabella', 'Mainha', 'Toby'
]

console.log(meuArray.length) // ver quantidade de itens

meuArray.push('Tia Sandra') // adicionar ao final da lista
console.log(meuArray)

meuArray.pop() // remover ultimo da lista
console.log(meuArray)

meuArray.shift() // remover primeiro da lista
console.log(meuArray)

meuArray.splice(1, 1) // remover um item especifico da lista
console.log(meuArray)