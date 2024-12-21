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

//Open Foto

const thumbnails = document.querySelectorAll('#container-foto img')

const fotoOpen = document.getElementById('foto-open')

thumbnails.forEach(thumbnails => {
    thumbnails.addEventListener('click', (e) => {
        e.preventDefault()

        const imgSrc = thumbnails.src 
        
        fotoOpen.innerHTML = `
                <img src="${imgSrc}" alt="Foto ampliada" class="max-w-full max-h-full rounded-2xl z-20 ">
                <button onclick="closeFoto()" class="z-20 absolute top-5 right-5 text-white text-2xl bg-ciano/50 w-[2rem] h-[2rem] rounded-full"><i class="fa-solid fa-xmark"></i></button>
            `

            fotoOpen.classList.remove('pointer-events-none');
            toggleFadeFoto()
    })
})

function closeFoto() {
    fotoOpen.innerHTML = ''
    fotoOpen.classList.add('pointer-events-none');
    toggleFadeFoto()
}

const fadeFoto = document.getElementById('foto-fade')

function toggleFadeFoto(){
    fadeFoto.classList.toggle('opacity-0')
    fadeFoto.classList.toggle('opacity-100')
    fadeFoto.classList.toggle('pointer-events-none')
    fadeFoto.classList.toggle('pointer-events-auto')
}

fadeFoto.addEventListener('click', (event) => {
    if(event.target === fadeFoto){
        closeFoto()
    }
})
