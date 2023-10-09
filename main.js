const dado = document.getElementById('dado');
const lanzarBtn = document.getElementById('lanzar');

const carasDelDado = ['1', '2', '3', '4', '5', '6'];
let intervalId;

lanzarBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        const caraAleatoria = carasDelDado[Math.floor(Math.random() * carasDelDado.length)];
        dado.textContent = caraAleatoria;
    }, 100);
    setTimeout(() => {
        clearInterval(intervalId);
    }, 2000); // Cambia este valor para ajustar la duración de la animación
});
