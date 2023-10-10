function mostrarCara(imagen) {
    const imagenesCara = document.querySelectorAll('.cara');
    imagenesCara.forEach((imagenElement) => {
        imagenElement.style.display = 'none';
    });

    const imagenMostrar = document.querySelector(`[src="${imagen}"]`);
    if (imagenMostrar) {
        imagenMostrar.style.display = 'block';
    }
}
