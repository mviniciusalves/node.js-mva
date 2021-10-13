// estrutura de um objeto único

const investimento = {
    tipo: "renda fixa",
    nome: "cdb vitória certa",
    prazo: 24,
        investir: function() {
            console.log("Vai investir no " + this.nome)
        }
}

investimento.investir()