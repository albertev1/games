const dado = document.getElementById('dado');
const lanzarBtn = document.getElementById('lanzar');
 const fichas = document.querySelectorAll('.ficha');

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

   
let fichaArrastrada = null;

fichas.forEach((ficha) => {
    ficha.addEventListener('dragstart', (event) => {
        fichaArrastrada = event.target;
    });

    ficha.addEventListener('dragend', () => {
        fichaArrastrada = null;
    });
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('drop', (event) => {
    event.preventDefault();
    
    if (fichaArrastrada) {
        const dropTarget = event.target.closest('.ficha');
        
        if (dropTarget) {
            // Intercambiar las fichas si se soltó sobre otra ficha
            const temp = { ...fichaArrastrada.style };

            fichaArrastrada.style.cssText = dropTarget.style.cssText;
            dropTarget.style.cssText = temp.cssText;
        }
    }
});

 


    const imagenMostrar = document.querySelector(`[src="${imagen}"]`);
    if (imagenMostrar) {
        imagenMostrar.style.display = 'block';
    }
}

const fichas = document.querySelectorAll('.ficha');

let fichaArrastrada = null;

fichas.forEach((ficha) => {
    ficha.addEventListener('dragstart', (event) => {
        fichaArrastrada = event.target;
        // Agregar un efecto visual durante el arrastre (opcional)
        fichaArrastrada.style.opacity = '0.6';
    });

    ficha.addEventListener('dragend', () => {
        fichaArrastrada = null;
        // Restaurar el estilo original al finalizar el arrastre (opcional)
        ficha.style.opacity = '1';
    });
});

document.addEventListener('dragover', (event) => {
    event.preventDefault();
});

document.addEventListener('drop', (event) => {
    event.preventDefault();
    
    if (fichaArrastrada) {
        const dropTarget = event.target.closest('.ficha');
        
        if (dropTarget) {
            // Intercambiar las fichas si se soltó sobre otra ficha
            const temp = { ...fichaArrastrada.style };
            
            fichaArrastrada.style.cssText = dropTarget.style.cssText;
            dropTarget.style.cssText = temp.cssText;
        }
    }
});

