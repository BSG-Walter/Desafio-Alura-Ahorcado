var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function dibujarCircunferencia(x,y,radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

pantalla.addEventListener("keydown", function(tecla){
    if (intentosFallidos <= maxIntentos && jugando){
        intentarLetra(tecla.key);
    }
},false)

function dibujarAhorcado(x, y, fase){

    switch(fase){
        case 0:
            //base
            dibujarLinea(x+50, y+720, x+300, y+720, 10, "black");
            dibujarLinea(x+50, y+720, x+176, y+690, 10, "black");
            dibujarLinea(x+174, y+690, x+300, y+720, 10, "black");
            break;
        case 1:
            //palos
            dibujarLinea(x+175, y+695, x+175, y+50, 10, "black");
            dibujarLinea(x+175, y+55, x+550, y+55, 10, "black");
            dibujarLinea(x+545, y+55, x+545, y+150, 10, "black");
            break;
        case 2:
            //cabeza
            dibujarCircunferencia(x+545, y+190, 60, "black");
            break;
        case 3:
            //cuerpo
            dibujarLinea(x+545, y+250, x+545, y+450, 10, "black");
            break;
        case 4:
            //brazo izquierdo
            dibujarLinea(x+545, y+255, x+445, y+300, 10, "black");
            break;
        case 5:
            //brazo derecho
            dibujarLinea(x+545, y+255, x+645, y+300, 10, "black");
            break;
        case 6:
            //pierna izquierda
            dibujarLinea(x+545, y+450, x+485, y+550, 10, "black");
            break;
        case 7:
            //pierna derecha
            dibujarLinea(x+545, y+450, x+605, y+550, 10, "black");
            break;
        default:
            console.log("error dibujando el ahorcado");
            break;
    }

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

function dibujarLetrasIntentadas(x, y){
    pincel.font = "50px Arial";
    pincel.textAlign = "left";
    pincel.fillText(letrasIntentadas.toString(), x, y);
}

function mensajeVictoria(x, y){
    pincel.font = "50px Arial";
    pincel.textAlign = "left";
    pincel.fillStyle = "green";
    pincel.fillText("¡FELICITACIONES!", x, y);
}

function mensajeDerrota(x, y){
    pincel.font = "50px Arial";
    pincel.textAlign = "left";
    pincel.fillStyle = "red";
    pincel.fillText("FIN DEL JUEGO.", x, y);
}

function mostrarPalabra(x, y){
    pincel.font = "20px Arial";
    pincel.textAlign = "left";
    pincel.fillStyle = "black";
    pincel.fillText("LA PALABRA ERA: " + palabraSeleccionada, x, y);
}