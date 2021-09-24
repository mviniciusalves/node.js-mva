const pessoa = {
    _nome: "", 
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase() 
    },
}

pessoa.nome = "marcos vinicius"
console.log(pessoa.nome)