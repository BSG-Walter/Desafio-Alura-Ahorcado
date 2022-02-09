let pantalla = document.querySelector("canvas");
let botonJugar = document.querySelector("#boton-jugar");
let botonPalabra = document.querySelector("#boton-palabra");
let inputPalabra = document.querySelector("#input-palabra");
let menu = document.querySelector("#menu");

let pincel = pantalla.getContext("2d");
let palabras = ["ALURA", "ORACLE", "AHORCADO", "JAVASCRIPT", "GITHUB", "CIFRADO", "REPOSITORIO"];

console.log(palabras);

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

function dibujarAhorcado(fase){

}

function limpiarPantalla(){
    pincel.clearRect(0,0,1200,800);
}