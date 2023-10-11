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

// Agregamos los eventos de arrastrar y soltar a la ficha
document.querySelector(".ficha").addEventListener("dragstart", onDragStart);
document.querySelector(".ficha").addEventListener("drag", onDrag);
document.querySelector(".ficha").addEventListener("dragend", onDragEnd);
