/* 
Ao inves de utilizar muitas variáveis com vários tipos de dados, deve-se criar uma única estrutura de dados
com todas as propriedades de um cliente 

Criar um objeto com chaves e valores

JSON

Obter um valor com o . (ponto) ou nome da chave em [''] colchetes


*/

const pessoa = {
    id: "0011AABBCC",
    nome: "Negueba Junior",
    idade: 25,
    dataNascimento: new Date(2000, 6, 1),
}

pessoa.id
pessoa['nome']
pessoa['nomeDaMae'] = 'Maria Jose'