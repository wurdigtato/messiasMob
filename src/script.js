//Menu

const menu = document.getElementById('menu-container')
const menuButton = document.getElementById('menu-button')
const menuIcon = document.getElementById('menu-button-icon')
const fade = document.getElementById('menu-fade')

//Abrir e Fechar Botão
menuButton.addEventListener('click', () => {
    menu.classList.toggle('opacity-0')
    menu.classList.toggle('opacity-100')
    menu.classList.toggle('pointer-events-none')
    menu.classList.toggle('pointer-events-auto')
})

//Mudar icone botão
menuButton.addEventListener('click', () => {
    menuIcon.classList.toggle('rotate-icon')

    if(menuIcon.classList.contains('fa-bars')){
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')
    } else {
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')
    }
})

menuButton.addEventListener('click', () => {
    fade.classList.toggle('opacity-0')
    fade.classList.toggle('opacity-100')
})


