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

terminal.question('Qual o seu nome? ', (msg) => {
    console.log('Você digitou!', msg)
    terminal.close()
}) 