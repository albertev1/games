
const dado = document.getElementById('dado');
const lanzarBtn = document.getElementById('lanzar');

const carasDelDado = [1, 2, 3, 4, 5, 6];
let intervalId;

lanzarBtn.addEventListener('click', () => {
    clearInterval(intervalId);

    // Ocultar la cara actualmente visible
    ocultarCara();

    // Obtener una nueva cara aleatoria
    const caraAleatoria = obtenerCaraAleatoria();

    // Mostrar la nueva cara
    mostrarCara(caraAleatoria);
});

function mostrarCara(cara) {
    const imagenMostrar = document.querySelector(`#cara${cara}`);
    if (imagenMostrar) {
        imagenMostrar.style.display = 'block';
    }
}

function ocultarCara() {
    carasDelDado.forEach((cara) => {
        const imagenOcultar = document.querySelector(`#cara${cara}`);
        if (imagenOcultar) {
            imagenOcultar.style.display = 'none';
        }
    });
}

function obtenerCaraAleatoria() {
    return carasDelDado[Math.floor(Math.random() * carasDelDado.length)];
}
