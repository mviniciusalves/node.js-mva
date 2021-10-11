/* tipos undefined e null
undefined não foi defenido, não recebeu um valor, não existe no contexto.
null sem valor no momento, mas pode ter um valor no futuro.

undefined é um valor e tipo de valor usado no Javascript para informar que o dado não existe ou não foi 
definido, enquanto o valor de null é usado para informar que uma variável nasceu sem valor

uma variável pode ser definida com um valor nulo, para isso usar o null.
*/

let variavelSeminicializacao
console.log(
    variavelSeminicializacao,
    typeof(variavelSeminicializacao)
)

variavelSeminicializacao = "Hello dev"
console.log(
    variavelSeminicializacao,
    typeof(variavelSeminicializacao)
)

variavelSeminicializacao = null
console.log(
    variavelSeminicializacao,
    typeof(variavelSeminicializacao)
)