let pantalla = document.querySelector("canvas");
let botonJugar = document.querySelector("#boton-jugar");
let botonPalabra = document.querySelector("#boton-palabra");
let inputPalabra = document.querySelector("#input-palabra");
let menu = document.querySelector("#menu");

let pincel = pantalla.getContext("2d");
let palabras = ["ALURA", "ORACLE", "AHORCADO", "JAVASCRIPT", "GITHUB", "CIFRADO", "REPOSITORIO", "PROGRAMACION"];
//MAXIMO 12 LETRAS
console.log(palabras);
limpiarPantalla();
dibujarAhorcado(-50,0,0);
let letras = 10;
let palabra = "PROGRAMACION"
for(let i = 0; i < palabra.length; i++){
    dibujarLetra(300 + (i*75), 720, palabra[i]);
}

botonJugar.addEventListener("click", function(){
    menu.classList.add("invisible");
})

botonPalabra.addEventListener("click", function(){
    // @ts-ignore
    palabras.push(inputPalabra.value)
    console.log(palabras);
})

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
    pincel.fillText(letra, x, y-5);
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