// Switch Case = Estrutura de decisão

// Ao inves de usar o if para selecionar apções

const readLine = require('readline') // chamando uma classe para capturar os eventos, o que o cliente está digitando
const terminal = readLine.createInterface({
       // modo de entrada via terminal
       input: process.stdin,
       // saída via terminal
       output: process.stdout
})

// texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de média!
Digite 1 para acessar o menu inicial
Digite 2 para o menu de Herois
Digite 3 para o menu de Guereiras
Digite 0 para Sair`

console.log(textoMenu)
const opcao = 1
switch(opcao) {
    case 1:
        console.log('pressionou 1')
        break;
    case 2:
        console.log('pressionou 1')
        break;
}