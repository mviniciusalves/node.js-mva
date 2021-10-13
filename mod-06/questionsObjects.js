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

const questoes = {
       menuInicial: {
              texto: textoMenu,
              fn: menuInicial
       }
}
function menuInicial(msg) {
       const opcao = Number(msg)
       if(isNaN(opcao))
              throw new Error('Não é um número', msg)
       console.log('Acionando menu inicial!', msg)
       }
       switch(opcao) {
              case 0:
                     console.log('Saindo...')
                     terminal.close
                     break;
       }

terminal.question(
       questoes.menuInicial.texto, 
       questoes.menuInicial.fn
)