// chamar os outros arquivos

function onLoad() { // quando carregar a tela, fazer alguma coisa
    const heroi = {
        // sempre relativo ao index.html
        img: './arquivos/batman.png',
        nome: 'batman'
    }
    const codigoHtml = Tela.obterCodigoHtml(heroi)
    Tela.alterarConteudoHTML(codigoHtml)
}
window.onload = onLoad

// estando no navegador, não precisa do modulo export