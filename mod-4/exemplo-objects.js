const heroi = {
    nome: 'Soldado invernal',
    idade: 150,
    sexo: 'Masculino'
}
console.log(heroi.nome)
console.log('Nome:', heroi.nome)
heroi.id = 0001 // não estamos reassinando um valor para heroi, mas sim alterando (passando) novas chaves.

console.log(heroi)

console.log(Object.keys(heroi)) // pegando apenas as chaves

console.log(Object.values(heroi)) // pegando apenas os valores

const heroina = {
    nome2: "Viuva Negra"
}

const casalDeHerois = (Object.assign(heroi, heroina)) // juntando dois objetos
console.log(casalDeHerois) // por convenção, nunca alterar o valor de um objeto já criado. Sem criar novo.

delete casalDeHerois.nome // deletando chave e valor
console.log(casalDeHerois)