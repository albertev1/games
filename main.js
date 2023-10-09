import 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Carga imágenes necesarias aquí (por ejemplo, el fondo de pantalla y la imagen del dado).
    this.load.image('background', 'images\background.png');
    this.load.image('dice', './Downloads/dado1.png');
    // Agregar un mensaje de consola para verificar la carga
    console.log('Recursos cargados correctamente');

}

function create() {
    // Agrega el fondo de pantalla
    this.add.image(400, 300, 'background');

    // Agrega un dado en una posición específica
    this.add.image(200, 200, 'dice');
}
