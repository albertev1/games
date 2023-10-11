// Función para detectar cuando se arrastra una ficha
function onDragStart(event) {
  // Obtenemos la ficha que se está arrastrando
  const ficha = event.target;

  // Almacenamos la posición inicial de la ficha
  ficha.startX = event.clientX;
  ficha.startY = event.clientY;

  // Agregamos el evento `mousemove` a la ficha
  ficha.addEventListener("mousemove", onMouseMove);
}

// Función para actualizar la posición de la ficha mientras se arrastra
function onMouseMove(event) {
  // Obtenemos la ficha que se está arrastrando
  const ficha = event.target;

  // Calculamos la nueva posición de la ficha
  ficha.style.left = event.clientX - ficha.startX + "px";
  ficha.style.top = event.clientY - ficha.startY + "px";
}

// Función para detener el arrastre de la ficha
function onDragEnd(event) {
  // Eliminamos el evento `mousemove` de la ficha
  const ficha = event.target;
  ficha.removeEventListener("mousemove", onMouseMove);
}

// Agregamos los eventos de arrastrar y soltar a las fichas
document.querySelectorAll(".ficha").forEach((ficha) => {
  ficha.addEventListener("dragstart", onDragStart);
  ficha.addEventListener("dragend", onDragEnd);
});
