/* 
Ao inves de utilizar muitas variáveis com vários tipos de dados, deve-se criar uma única estrutura de dados
com todas as propriedades de um cliente

Criar um objeto com chaves e valores

JSON

Obter um valor com o . (ponto) ou nome da chave em [''] colchetes

*/

const pessoa = {
    id: "0011AABBCC",
    nome: "Marcos Vinicius",
    idade: 27,
    dataNascimento: new Date(1994, 4, 28),
}

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

pessoa['nomeDaMae'] = 'Maria Izabel' // criando uma nova propriedade

console.log(Object.keys(pessoa)) // ibtendo apenas as chaves

console.log(Object.values(pessoa)) // ibtendo apenas os valores

// array de objetos
const minhaListaDeObjetos = [
    {
        id: "0011AABBCC",
        nome: "Marcos Vinicius",
        idade: 27,
        dataNascimento: new Date(1994, 3, 28),
    },
    {
        id: "0011AABBDD",
        nome: "Isabella Passos",
        idade: 25,
        dataNascimento: new Date(1996, 5, 21),
    },
]

console.log(minhaListaDeObjetos[1])

// por pradrão no JS não alterar os valores de um objeto