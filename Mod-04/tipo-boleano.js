/* tipos boleanos = true or false
teoria dos conjuntos: ou, e   -    não

Falso: false, 0, [], "", '', null, undefined, NaN

Verdadeiro: tudo o que não é falso = true, 1, -1, 0.5, "0"
*/

const podeDirigir = false // quando a variável for falsa, o if ignora o console.log
if(podeDirigir) {
    console.log('Ela pode dirigir!')
}

const podeDirigirdois = true // quando a variável for verdadeira, o if executa o console.log
if(podeDirigirdois) {
    console.log('Ela pode dirigir sim!')
}

const saldoEmConta = 1
if(!saldoEmConta) { // o sinal de exclamação no início nega a operação
    console.log('Não tem saldo!')
}

const  boolComString = "ae nerdzão!"
console.log('boolComString', !!boolComString) // !! força o valor a true or false de acordo com a tabela

// negação + forçar a booleano
console.log(
    ! (!!boolComString) // executa primeiro o que tem no parenteses e nega com a exclamação fora
)