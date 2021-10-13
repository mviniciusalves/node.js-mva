// o programa não para nunca
// o programa ficará executando um determinado fluxo, somente mudará quando muda a variável

// enquanto não mudar, não para!
let termoDeParada = true // usando o while, sempre haverá o termo de parada
let contador = 0
while(termoDeParada) {
    termoDeParada = contador < 10
    if(contador % 2 ===0) {
        console.log('Numero par', contador)
    }
    contador +=1
}

// roda a primeira vez e testa a variável depois