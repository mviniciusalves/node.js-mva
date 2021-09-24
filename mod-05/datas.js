// meses começas do zero | 0 = janeiro
const dataAniversario = new Date(2021, 0, 20)
console.log(dataAniversario)

const primeiraDataJS = new Date(0)
console.log(primeiraDataJS.getTime)

const hoje = new Date()
console.log(hoje.toString())

// formato global recomendado
console.log(hoje.toISOString())
