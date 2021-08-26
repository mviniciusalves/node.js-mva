// metodos assessores get/set de objetos para saber quem acessa ou tenta inverir novos valores nos objetos.

// usados para quando obter um valor, fazer alguma coisa

// quanto tentar setar um novo valor ou subescrever colocar outro

const pessoa = 
{
    _nome: "", // variável com _ ou . antes significa que é privada (ninguem acessa por fora)
    get nome () {
        return this._nome
    },
    set nome(n) {
        this._nome = n.toUpperCase() // coloca maiucula
    },
}

pessoa.nome = "marcos vinicius"
console.log(pessoa.nome)