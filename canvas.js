var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pantalla.addEventListener("keydown", function(tecla){
    intentarLetra(tecla.key);
},false)

function dibujarCircunferencia(x,y,radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function dibujarAhorcado(x, y, fase){
    //base
    dibujarLinea(x+50, y+720, x+300, y+720, 10, "black");
    dibujarLinea(x+50, y+720, x+175, y+690, 10, "black");
    dibujarLinea(x+175, y+690, x+300, y+720, 10, "black");
    //palos
    dibujarLinea(x+175, y+695, x+175, y+50, 10, "black");
    dibujarLinea(x+175, y+55, x+550, y+55, 10, "black");
    dibujarLinea(x+545, y+55, x+545, y+150, 10, "black");
    //cabeza
    dibujarCircunferencia(x+545, y+190, 60, "black");
    //cuerpo
    dibujarLinea(x+545, y+250, x+545, y+450, 10, "black");
    //brazo izquierdo
    dibujarLinea(x+545, y+255, x+445, y+300, 10, "black");
    //brazo derecho
    dibujarLinea(x+545, y+255, x+645, y+300, 10, "black");
    //pierna izquierda
    dibujarLinea(x+545, y+450, x+485, y+550, 10, "black");
    //pierna derecha
    dibujarLinea(x+545, y+450, x+605, y+550, 10, "black");

}

function dibujarLetra(x, y, letra){
    dibujarLinea(x, y, x+40, y, 5, "black");
    pincel.font = "50px Arial";
    pincel.textAlign = "center";
    pincel.fillText(letra, x+20, y-5);
}

function limpiarPantalla(){
    pincel.clearRect(0,0,1200,800);
}

function dibujarLinea(x, y, x2, y2, width, color){
    pincel.fillStyle = color;
    pincel.lineWidth = width;
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x2, y2);
    pincel.stroke();
}