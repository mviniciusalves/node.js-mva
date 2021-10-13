class Livro {
    constructor(nome, editora, paginas){ // no construtor serão passadas as propriedades
        this.nome = nome // this para internalizar o valor
        this.editora = editora
        this.paginas = paginas
    }
    // usar metodos (funções) para interagir com o objeto e nas funções não colocar o nome function
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    descreverLivro() {
        console.log(`O nome do livro é ${this.nome}, da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}
// criando um novo livro
const primeiroLivro = new Livro("Sonho Grande", "Altabooks", 150)
primeiroLivro.anunciarTitulo()
primeiroLivro.descreverLivro()

// buscando uma propriedade de outra classe

class Colecao extends Livro { // extends faz com que a classe herde alguma propriedade de outra classe
    constructor(nome, nomeColecao){
        super(nome) // super faz a referencia de qual propriedade está trazendo de outra clase
        this.nomeColecao = nomeColecao
    }
    descreverColecao() {
        console.log(`O livro ${this.nome} pertence a coleção ${this.nomeColecao}`)
    }
}

const novaColecao = new Colecao("Livro dois", "Coleção dos livros")
novaColecao.descreverColecao()