/*  
String = textos

aspas simples, aspas duplas, crase

Number = Números

não tem aspas (se um number tiver entre aspas será considerado string)

NaN = Não é um número

*/

let salarioDoAmigo = 1000
let meuSalario = "2500"
let meuSalarioCorrigido = Number(meuSalario) 

console.log(salarioDoAmigo + meuSalarioCorrigido)
console.log(
    typeof(salarioDoAmigo), //saber o tipo de variavel
    salarioDoAmigo
)

console.log(
    typeof(meuSalario),
    meuSalario
)

console.log(
    typeof(meuSalarioCorrigido),
    meuSalarioCorrigido
)