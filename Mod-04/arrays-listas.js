/* Arrays são listas = conjuntos de dados ordenados

Também são conhecidas comomo vetores ou matrizes

Sempre em colchetes []

no JS começa no índice 0 (zero)

Quando não tiver nenhum valor será undefined

ÍNDICE | NOME
0      |   Bulbassaur
1      |   Pikachu
2      |   Squirtle
3      |   Charmander 

[
"Bulbassaur",
"Pikachu",
"Squirtle",
"Chamander"
]

[0] === "Bulbassaur"
...
*/

const minhaLista = [] // lista vazia

const minhaListaDeTarefas = [ // lista com vários valores
    'mandar email',
    'colocar comida para toby',
    'limpar o quarto'
]

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[2])

console.log(minhaListaDeTarefas.length) // quantidade de itens no array

minhaListaDeTarefas.push('formatar computador') // incluir no final da lista
console.log(minhaListaDeTarefas)

const ultimo = minhaListaDeTarefas.pop() // remover o último da lista e armazenar numa variável
console.log(ultimo, minhaListaDeTarefas)

const primeiro = minhaListaDeTarefas.shift() // remover o primeiro da lista e armazenar numa variável
console.log(primeiro, minhaListaDeTarefas)

minhaListaDeTarefas.splice(2, 1) // remover um item especifico
console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador', 0.22
]
console.log(typeof(itens)) // verificar o tipo

// verificar se é array
console.log(Array.isArray(itens))

// ordenar numeros e textos
const numeros = [5,7,3,9]
console.log(numeros.sort())

// juntar dois arrays
itens.concat

// juntar arrays em única string
console.log(itens.join(','))

// verificar indice de item
itens.indexOf