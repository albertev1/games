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


// Función para detectar cuando se arrastra una ficha
function onDragStart(event) {
  // Obtenemos la ficha que se está arrastrando
  const ficha = event.target;

  // Almacenamos la posición inicial de la ficha
  ficha.startX = event.clientX;
  ficha.startY = event.clientY;
}

// Función para actualizar la posición de la ficha mientras se arrastra
function onDrag(event) {
  // Obtenemos la ficha que se está arrastrando
  const ficha = event.target;

  // Calculamos la nueva posición de la ficha
  ficha.style.left = event.clientX - ficha.startX + "px";
  ficha.style.top = event.clientY - ficha.startY + "px";
}

// Función para detener el arrastre de la ficha
function onDragEnd(event) {
  // Obtenemos la ficha que se está arrastrando
  const ficha = event.target;

  // Eliminamos la información de la posición inicial de la ficha
  ficha.startX = null;
  ficha.startY = null;
}

// Agregamos los eventos de arrastrar y soltar a las fichas
document.querySelectorAll(".ficha").forEach((ficha) => {
  ficha.addEventListener("dragstart", onDragStart);
  ficha.addEventListener("drag", onDrag);
  ficha.addEventListener("dragend", onDragEnd);
});

