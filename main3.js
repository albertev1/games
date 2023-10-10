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

  // Comprobamos si la ficha está dentro del tablero
  if (ficha.style.left < 0) {
    ficha.style.left = 0;
  }

  if (ficha.style.top < 0) {
    ficha.style.top = 0;
  }

  if (ficha.style.left + ficha.clientWidth > document.querySelector(".tablero").clientWidth) {
    ficha.style.left = document.querySelector(".tablero").clientWidth - ficha.clientWidth;
  }

  if (ficha.style.top + ficha.clientHeight > document.querySelector(".tablero").clientHeight) {
    ficha.style.top = document.querySelector(".tablero").clientHeight - ficha.clientHeight;
  }
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
