
const track = document.getElementById("track");
const slides = Array.from(track.children);
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
const progressBar = document.getElementById("progressBar");


let indiceActual = 0;


function actualizarCarrusel() {
    
    const movimiento = -indiceActual * 100;
    track.style.transform = `translateX(${movimiento}%)`;

   
    const porcentaje = (indiceActual / (slides.length - 1)) * 100;
    progressBar.style.width = `${porcentaje}%`;
}


btnNext.addEventListener("click", () => {
    indiceActual++;
    if (indiceActual >= slides.length) {
        indiceActual = 0; 
    }
    actualizarCarrusel();
});

btnPrev.addEventListener("click", () => {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = slides.length - 1; 
    }
    actualizarCarrusel();
});

actualizarCarrusel();