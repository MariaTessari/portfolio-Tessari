// carrossel

// Variável para guardar qual foto está aparecendo no momento
document.addEventListener('DOMContentLoaded', () => {
    let indiceAtual = 0;
    
    // Captura os elementos do HTML
    const slidesContainer = document.querySelector('.carrossel-slides');
    const slides = document.querySelectorAll('.slide');
    const btnEsq = document.getElementById('btn-esq');
    const btnDir = document.getElementById('btn-dir');
    const totalSlides = slides.length;

    // Função que faz o movimento
    function atualizarCarrossel() {
        const deslocamento = -(indiceAtual * 100);
        slidesContainer.style.transform = `translateX(${deslocamento}%)`;
    }

    // Ação ao clicar no botão da direita
    btnDir.addEventListener('click', () => {
        indiceAtual++;
        if (indiceAtual >= totalSlides) {
            indiceAtual = 0; // Volta para a primeira
        }
        atualizarCarrossel();
    });

    // Ação ao clicar no botão da esquerda
    btnEsq.addEventListener('click', () => {
        indiceAtual--;
        if (indiceAtual < 0) {
            indiceAtual = totalSlides - 1; // Vai para a última
        }
        atualizarCarrossel();
    });
});

// --- DROPDOWN UNIFICADO ---

/* Função inteligente que recebe o evento e o ID do menu a ser aberto */
function toggleMenu(event, idDoMenu) {
    event.preventDefault(); /* Evita que a tela pule para o topo */

    // (Opcional) Fecha outros menus abertos antes de abrir o novo
    var todosMenus = document.querySelectorAll('.dropdown-conteudo, .dropdown-cont');
    todosMenus.forEach(function(menu) {
        if (menu.id !== idDoMenu) {
            menu.classList.remove('mostrar');
        }
    });

    // Abre ou fecha o menu específico que foi clicado
    document.getElementById(idDoMenu).classList.toggle("mostrar");
}

/* Função única: Fecha os menus se o usuário clicar fora */
window.onclick = function (event) {
    // Verifica se onde o usuário clicou NÃO é um botão de menu ou a setinha
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbt') && !event.target.matches('.drseta')) {
        
        // Pega todos os menus suspensos e remove a classe 'mostrar'
        var todosMenus = document.querySelectorAll(".dropdown-conteudo, .dropdown-cont");
        todosMenus.forEach(function(menu) {
            if (menu.classList.contains('mostrar')) {
                menu.classList.remove('mostrar');
            }
        });
    }
}