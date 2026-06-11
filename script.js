document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        // CORREÇÃO: Alterna a classe correta definida no CSS para exibir/esconder
        opcoesDeAcessibilidade.classList.toggle('esconde-lista');
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    // CORREÇÃO: Partimos dos 16px base que foram definidos no seu 'html {}' do CSS
    let tamanhoAtualFonte = 16; 

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < 24) { // Limite máximo para não quebrar o layout (24px)
            tamanhoAtualFonte += 2;
            // Modifica o 'html' para que todas as unidades 'rem' mudem juntas proporcionalmente
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}px`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 12) { // Limite mínimo para manter legível (12px)
            tamanhoAtualFonte -= 2;
            document.documentElement.style.fontSize = `${tamanhoAtualFonte}px`;
        }
    });

    alternaContraste.addEventListener('click', function () {
         // Ativa o seletor 'body.alto-contraste' que configuramos no CSS
         document.body.classList.toggle('alto-contraste');
    });
});