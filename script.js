// const botaoTopo = document.getElementById("topo");

// function voltaTopo() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

// botaoTopo.addEventListener("click", voltaTopo);

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

// dropdown
/* Função para abrir e fechar o menu ao clicar em Matérias */
function toggleMenu(event) {
    event.preventDefault(); /* Evita que a tela pule para o topo */
    document.getElementById("dropdown-menu").classList.toggle("mostrar");
}

/* Função extra: Fecha o menu se o usuário clicar em qualquer outro lugar da tela */
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.seta')) {
        var dropdowns = document.getElementsByClassName("dropdown-conteudo");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar')) {
                openDropdown.classList.remove('mostrar');
            }
        }
    }
}

function toggleMenu(event) {
    event.preventDefault(); /* Evita que a tela pule para o topo */
    document.getElementById("dropdown-men").classList.toggle("mostrar");
}

/* Função extra: Fecha o menu se o usuário clicar em qualquer outro lugar da tela */
window.onclick = function (event) {
    if (!event.target.matches('.dropbt') && !event.target.matches('.seta')) {
        var dropdowns = document.getElementsByClassName("dropdown-cont");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('mostrar')) {
                openDropdown.classList.remove('mostrar');
            }
        }
    }
}

// trimestre



