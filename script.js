document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        // Remove a classe que esconde (mostrando o menu) ou adiciona de volta (escondendo)
        opcoesDeAcessibilidade.classList.toggle('esconde-lista');
        
        // Ativa a animação de rotação no ícone de engrenagem
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');

        // Atualiza a acessibilidade para leitores de tela (Aria-Expanded)
        const estaExpandido = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !estaExpandido);
    });
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1; // 1rem

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < 1.5) { // Limite máximo para não quebrar o layout
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 0.8) { // Limite mínimo para manter legível
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    alternaContraste.addEventListener('click', function () {
         document.body.classList.toggle('alto-contraste');
    });
});