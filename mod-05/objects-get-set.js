const pessoa = {
    _nome: '',
    _idade: 20,
    get nome () {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    }
}

pessoa.nome = "Marcos Vinicius"
console.log(pessoa.nome)