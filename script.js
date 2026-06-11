// ==========================================================================
// SCRIPTS DE INTERATIVIDADE E ACESSIBILIDADE (main.js)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU DE ACESSIBILIDADE ---
    const btnAcessibilidade = document.getElementById('botao-acessibilidade');
    const menuOpcoes = document.getElementById('opcoes-acessibilidade');
    
    // Mostra/Esconde o menu
    btnAcessibilidade.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que o clique feche o menu imediatamente
        menuOpcoes.classList.toggle('esconde-lista');
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', (e) => {
        if (!menuOpcoes.contains(e.target) && e.target !== btnAcessibilidade) {
            menuOpcoes.classList.add('esconde-lista');
        }
    });

    // --- FUNCIONALIDADES DE ACESSIBILIDADE ---
    const btnAumentar = document.getElementById('aumentar-fonte');
    const btnDiminuir = document.getElementById('diminuir-fonte');
    const btnContraste = document.getElementById('alterna-contraste');
    
    let tamanhoFonte = 100; // Tamanho base em porcentagem

    // Aumentar Fonte
    btnAumentar.addEventListener('click', () => {
        if (tamanhoFonte < 150) { // Limite máximo para não quebrar o layout
            tamanhoFonte += 10;
            document.documentElement.style.fontSize = tamanhoFonte + '%';
        }
    });

    // Diminuir Fonte
    btnDiminuir.addEventListener('click', () => {
        if (tamanhoFonte > 80) { // Limite mínimo
            tamanhoFonte -= 10;
            document.documentElement.style.fontSize = tamanhoFonte + '%';
        }
    });

    // Alternar Alto Contraste
    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

    // --- ROLAGEM SUAVE DOS LINKS (SMOOTH SCROLL) ---
    const linksMenu = document.querySelectorAll('.cabecalho-menu a[href^="#"]');
    
    linksMenu.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Ajuste para não esconder atrás do cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });
});