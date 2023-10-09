// Espera a que se cargue el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del tablero por su ID
    const tablero = document.getElementById("tablero");

    // Establece el fondo del tablero como la imagen "fondo.jpg"
    tablero.style.backgroundImage = "url('games/background.jpg')";
    tablero.style.backgroundSize = "cover"; // Ajusta el tamaño del fondo según el contenedor

    // Ahora puedes continuar con la lógica de tu juego
    // Por ejemplo, aquí puedes crear y posicionar las fichas del juego, etc.
});
