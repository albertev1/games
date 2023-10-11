var ficha = new Image();
ficha.onload = function(){
contexto.drawImage(ficha,425,428);
}
ficha.src = 'ficha1.png';

(Asi es como dibujo todas las fichas repitiendo el codigo 16 veces )

var actualPos;
var isMove=false;

var canvasLimites=canvas.getBoundingClientRect();
canvas.addEventListener('mousedown',cambiarEstado, false);
canvas.addEventListener('mouseup',cambiarEstado,false);
canvas.addEventListener('mousemove',moverImagen,false);
canvas.style.cursor="hand";

function moverImagen(){

if(isMove){
actualPos=obtenerCoordenadas(event);
// contexto.clearRect(0,0,canvas.width,canvas.height) ;
contexto.drawImage(fichav1,actualPos.x-(fichav1.width/2),actualPos.y-(fichav1.height/2));
}

}

function cambiarEstado(){
isMove=!isMove;
actualPos=obtenerCoordenadas(event);
}

function obtenerCoordenadas(event){
var posX;
var posY;

if (event.pageX || event.pageY) {
posX = event.pageX- canvasLimites.left;
posY = event.pageY- canvasLimites.top;
}
else {
posX = event.clientX - canvasLimites.left;
posY = event.clientY - canvasLimites.top;
}

return {
x:posX,
y:posY
};
}
