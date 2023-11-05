const dado = document.getElementById('dado');
const lanzarBtn = document.getElementById('lanzar');

const imagenesDelDado = [
    'dado1.png',
    'dado2.png',
    'dado3.png',
    'dado4.png',
    'dado5.png',
    'dado6.png',
];

let intervalId;

lanzarBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        const caraAleatoria = Math.floor(Math.random() * imagenesDelDado.length);
        mostrarCara(imagenesDelDado[caraAleatoria]);
    }, 100);
    setTimeout(() => {
        clearInterval(intervalId);
    }, 2000); // Cambia este valor para ajustar la duración de la animación
});

function mostrarCara(imagen) {
    const imagenes = document.querySelectorAll('.cara');
    imagenes.forEach((imagenElement) => {
        imagenElement.style.display = 'none';
    });

    const imagenMostrar = document.querySelector(`[src="${imagen}"]`);
    if (imagenMostrar) {
        imagenMostrar.style.display = 'block';
    }
}


// Definimos la imagen que vamos a arrastrar
const image = document.querySelectorAll("img");

// Añadimos un evento de arrastre a la imagen
image.addEventListener("mousedown", (event) => {
    // Guardamos la posición inicial del cursor
    const initialX = event.clientX;
    const initialY = event.clientY;

    // Iniciamos el evento de arrastre
    event.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});

// Evento que se produce cuando el cursor se mueve
function onMouseMove(event) {
    // Actualizamos la posición de la imagen
    image.style.left = event.clientX - initialX;
    image.style.top = event.clientY - initialY;
}

// Evento que se produce cuando se suelta el botón del ratón
function onMouseUp() {
    // Eliminamos el evento de arrastre
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}
