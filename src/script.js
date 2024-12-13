const openModalBtn = document.getElementById("openSobre") 
const closeModalBtn = document.getElementById("closeSobre")
const sobre = document.getElementById("sobreModal")
const fade = document.getElementById("fade")
const body = document.querySelector("body")


//Modal da Section Sobre

const toogleModal = () => {

   
    if(sobre.classList.contains("opacity-0")){
        sobre.classList.remove("opacity-0", "scale-75");
        sobre.classList.add("opacity-100", "scale-100");
        body.classList.add("overflow-hidden")
        body.classList.remove("overflow-scroll")
    } else {
        sobre.classList.add("opacity-0", "scale-75");
        sobre.classList.remove("opacity-100", "scale-100");
        body.classList.add("overflow-scroll")
        body.classList.remove("overflow-hidden")
    }

    if(sobre.classList.contains("opacity-0")){
        sobre.classList.add("hidden")
    } else {
        sobre.classList.remove("hidden")
    }

    if(fade.classList.contains("opacity-0")){
        fade.classList.remove("opacity-0");
        fade.classList.add("opacity-100");
    } else {
        fade.classList.add("opacity-0");
        fade.classList.remove("opacity-100");
    }   
    if(fade.classList.contains("opacity-0")){
        fade.classList.add("hidden")
    } else {
        fade.classList.remove("hidden")
    }

    const btn = document.getElementById("openMenu")
    if(sobre.classList.contains("opacity-100")){
        btn.classList.add("hidden")
    } else if(sobre.classList.contains("opacity-0")) {
        btn.classList.remove("hidden")
    }
}

openModalBtn.addEventListener('click', () => toogleModal())
closeModalBtn.addEventListener('click', () => toogleModal())
fade.addEventListener('click', () => toogleModal())

//-----------------------------------------------------------------------

//Botão Menu

document.getElementById("openMenu").addEventListener("click", function () {
    const icon = this.querySelector("i")
    if(icon.classList.contains("fa-bars")) {
       icon.classList.remove("fa-bars", "rotate-to-bars")
       icon.classList.add("fa-xmark", "rotate-to-x")
        
    }else {
        icon.classList.remove("fa-xmark", "rotate-to-x")
        icon.classList.add("fa-bars", "rotate-to-bars")
    }


})

function toggleMenu() {
    const menu = document.getElementById("menuDropbox");
    const fadeMenu = document.getElementById("fadeMenu");

    menu.classList.toggle("opacity-0");
    menu.classList.toggle("opacity-100");
    menu.classList.toggle("top-20");
    menu.classList.toggle("top-12");
    menu.classList.toggle("pointer-events-none");

    fadeMenu.classList.toggle("opacity-0");
    fadeMenu.classList.toggle("opacity-100");
    fadeMenu.classList.toggle("hidden");
}

document.getElementById("openMenu").addEventListener("click", toggleMenu);
document.getElementById("fadeMenu").addEventListener("click", toggleMenu);

const links = document.querySelectorAll(".menu-link");
links.forEach(link => {
    link.addEventListener("click", function () {
        toggleMenu();
    });
});


const toggleFotos = () => {
    const fotos = document.getElementById("modalFotos");
    const fadeFotos = document.getElementById("fadeFotos");
    
    fotos.classList.toggle("opacity-0");
    fotos.classList.toggle("opacity-100");

    fadeFotos.classList.toggle("opacity-0");
    fadeFotos.classList.toggle("opacity-100");
    fadeFotos.classList.toggle("hidden");
};

document.getElementById("openFotos").addEventListener("click", toggleFotos);
document.getElementById("fadeFotos").addEventListener("click", toggleFotos);



// Selecionar elementos do DOM
const openFotos = document.getElementById('openFotos');
const closeFotos = document.getElementById('closeFotos');
const fadeFotos = document.getElementById('fadeFotos');
const modalFotos = document.getElementById('modalFotos');

// Função para abrir o modal
function openModal() {
    fadeFotos.classList.remove('hidden', 'opacity-0');
    fadeFotos.classList.add('opacity-100');

    modalFotos.classList.remove('hidden', 'opacity-0', 'scale-75');
    modalFotos.classList.add('opacity-100', 'scale-100');
}

// Função para fechar o modal
function closeModal() {
    fadeFotos.classList.remove('opacity-100');
    fadeFotos.classList.add('opacity-0');
    setTimeout(() => fadeFotos.classList.add('hidden'), 500);

    modalFotos.classList.remove('opacity-100', 'scale-100');
    modalFotos.classList.add('opacity-0', 'scale-75');
    setTimeout(() => modalFotos.classList.add('hidden'), 500);
}

// Adicionar eventos aos botões
openFotos.addEventListener('click', (e) => {
    e.preventDefault(); // Impedir o comportamento padrão do link
    openModal();
});

closeFotos.addEventListener('click', (e) => {
    e.preventDefault(); // Impedir o comportamento padrão do link
    closeModal();
});

// Fechar o modal ao clicar no fundo escurecido
fadeFotos.addEventListener('click', closeModal);