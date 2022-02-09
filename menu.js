var botonJugar = document.querySelector("#boton-jugar");
var botonJugarOtraVez = document.querySelector("#boton-otravez");
var botonVolver = document.querySelector("#boton-volver");
var botonPalabra = document.querySelector("#boton-palabra");
var inputPalabra = document.querySelector("#input-palabra");
var menu = document.querySelector("#menu");
var menuInferior = document.querySelector("#menu-inferior");


botonJugar.addEventListener("click", function(){
    nuevoJuego();
})

botonJugarOtraVez.addEventListener("click", function(){
    nuevoJuego();
})

botonVolver.addEventListener("click", function(){
    limpiarPantalla();
    menu.classList.remove("invisible");
    menuInferior.classList.add("invisible");
})

botonPalabra.addEventListener("click", function(){
    // @ts-ignore
    let palabra = validarTexto(inputPalabra.value);
    if (!palabras.includes(palabra)){
        if (palabra){
            palabras.push(palabra)
            // @ts-ignore
            inputPalabra.value = "";
        }else{
            alert("LA PALABRA SOLO DEBE CONTENER LETRAS, NADA DE NÚMEROS O SÍMBOLOS")
        }
    }else{
        alert("ESA PALABRA YA ESTÁ EN EL JUEGO")
    }
})

function mostrarError(error){
    var ul = document.querySelector("#errores");
    ul.innerHTML = ""
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}