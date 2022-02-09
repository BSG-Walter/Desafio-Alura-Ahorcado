var botonJugar = document.querySelector("#boton-jugar");
var botonPalabra = document.querySelector("#boton-palabra");
var inputPalabra = document.querySelector("#input-palabra");
var menu = document.querySelector("#menu");

botonJugar.addEventListener("click", function(){
    menu.classList.add("invisible");
    limpiarPantalla();
    dibujarAhorcado(-50,0,0);
    let letras = 10;
    let palabra = "PROGRAMACION"
    for(let i = 0; i < palabra.length; i++){
        dibujarLetra(300 + (i*75), 720, palabra[i]);
    }
})

botonPalabra.addEventListener("click", function(){
    // @ts-ignore
    palabras.push(inputPalabra.value)
    console.log(palabras);
})