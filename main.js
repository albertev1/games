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
let caraVisible = 1; // Inicialmente mostramos la cara 1

lanzarBtn.addEventListener('click', () => {
    clearInterval(intervalId);

    // Ocultar la cara actualmente visible
    ocultarCara(caraVisible);

    // Obtener una nueva cara aleatoria
    const caraAleatoria = obtenerCaraAleatoria();

    // Mostrar la nueva cara
    mostrarCara(caraAleatoria);

    caraVisible = caraAleatoria; // Actualizar la cara actualmente visible
});

function mostrarCara(cara) {
    const imagenMostrar = document.querySelector(`#cara${cara}`);
    if (imagenMostrar) {
        imagenMostrar.style.display = 'block';
    }
}

function ocultarCara(cara) {
    const imagenOcultar = document.querySelector(`#cara${cara}`);
    if (imagenOcultar) {
        imagenOcultar.style.display = 'none';
    }
}

function obtenerCaraAleatoria() {
    return Math.floor(Math.random() * imagenesDelDado.length) + 1;
}
