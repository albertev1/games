// Espera a que se cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del tablero por su ID
    const tablero = document.getElementById("tablero");

    // Verifica si el elemento se encontró correctamente
    if (tablero) {
        // Establece el fondo del tablero como la imagen "fondo.jpg"
        tablero.style.backgroundImage = "url('background.jpg')";
        tablero.style.backgroundSize = "cover"; // Ajusta el tamaño del fondo según el contenedor
    } else {
        console.error("El elemento del tablero no se encontró en el documento.");
    }

    // Ahora puedes continuar con la lógica de tu juego
});
