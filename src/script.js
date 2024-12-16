//Menu

const menu = document.getElementById('menu-container')
const menuButton = document.getElementById('menu-button')
const menuIcon = document.getElementById('menu-button-icon')
const fade = document.getElementById('menu-fade')

//Abrir e Fechar Botão
menuButton.addEventListener('click', () => {
    setTimeout(() => {
        menu.classList.toggle('opacity-0')
        menu.classList.toggle('opacity-100')
        menu.classList.toggle('pointer-events-none')
        menu.classList.toggle('pointer-events-auto')
    }, 300)
})

//Mudar icone botão
menuButton.addEventListener('click', () => {
    menuIcon.classList.toggle('rotate-icon')
    menuIcon.classList.add('icon-moving')

    if(menuIcon.classList.contains('fa-bars')){
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')
    } else {
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')
    }

    setTimeout(() => {
        menuIcon.classList.remove('icon-moving')
    }, 10)
})

menuButton.addEventListener('click', () => {
    fade.classList.toggle('opacity-0')
    fade.classList.toggle('opacity-100')
})


