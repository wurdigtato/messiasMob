const sobre = document.getElementById('sobre-modal')
const sobreOpen = document.getElementById('sobre-modal-open')
const sobreClose = document.getElementById('sobre-modal-close')
const sobreFade = document.getElementById('sobre-fade')

//Sobre Modal
function toggleModalSobre() {
    sobre.classList.toggle('opacity-0')
    sobre.classList.toggle('opacity-100')
    sobre.classList.toggle('scale-105')
    sobre.classList.toggle('scale-95')
    sobre.classList.toggle('pointer-events-none')
    sobre.classList.toggle('pointer-events-auto')
    
    document.body.classList.toggle('overflow-hidden')
}

function toggleFade(){
    sobreFade.classList.toggle('opacity-0')
    sobreFade.classList.toggle('opacity-100')
    sobreFade.classList.toggle('pointer-events-none')
    sobreFade.classList.toggle('pointer-events-auto')
}

sobreOpen.addEventListener('click', () => {
    toggleModalSobre()
    toggleFade()
})
sobreClose.addEventListener('click', () => {
    toggleModalSobre()
    toggleFade()
})

sobreFade.addEventListener('click', (event) => {
    if(event.target === sobreFade) {
        toggleModalSobre()
        toggleFade()
    }
})

// ----- 


