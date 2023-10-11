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

// Función para comprobar si la ficha puede moverse a una nueva casilla
function canMove(ficha, nuevaCasilla) {
  // Obtenemos la posición de la ficha
  const fichaX = ficha.getBoundingClientRect().left;
  const fichaY = ficha.getBoundingClientRect().top;

  // Obtenemos la posición de la nueva casilla
  const nuevaCasillaX = nuevaCasilla.getBoundingClientRect().left;
  const nuevaCasillaY = nuevaCasilla.getBoundingClientRect().top;

  // Calculamos la distancia entre la ficha y la nueva casilla
  const distanciaX = fichaX - nuevaCasillaX;
  const distanciaY = fichaY - nuevaCasillaY;

  // Devolvemos true si la ficha se puede mover a la nueva casilla
  return distanciaX <= 100 && distanciaY <= 100;
}

// Función para mover la ficha a una nueva casilla
function moveFicha(ficha, nuevaCasilla) {
  // Comprobamos si la ficha se puede mover a la nueva casilla
  if (canMove(ficha, nuevaCasilla)) {
    // Movemos la ficha a la nueva casilla
    ficha.style.left = nuevaCasilla.getBoundingClientRect().left + "px";
    ficha.style.top = nuevaCasilla.getBoundingClientRect().top + "px";
  }
}

// Función que se ejecuta cuando se suelta la ficha
function onDragEnd(event) {
