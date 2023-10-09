const dado = document.getElementById('dado');
const lanzarBtn = document.getElementById('lanzar');

const imagenesDelDado = [
    'cara1.png',
    'cara2.png',
    'cara3.png',
    'cara4.png',
    'cara5.png',
    'cara6.png',
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
