var palabras = ["ALURA", "ORACLE", "AHORCADO", "JAVASCRIPT", "GITHUB", "CIFRADO", "REPOSITORIO", "PROGRAMACION"];
var palabraSeleccionada = "";
var letrasIntentadas = [];
var intentosFallidos = 0;
var maxIntentos = 7;
var jugando = false;
//MAXIMO 12 LETRAS

function nuevoJuego(){
    jugando = true;
    let random = getRandomInt(0, palabras.length - 1);
    palabraSeleccionada = palabras[random];
    letrasIntentadas = [];
    intentosFallidos = 0;
    menu.classList.add("invisible");
    menuInferior.classList.add("invisible");
    inputPalabra.value = "";
    limpiarPantalla();
    dibujarAhorcado(-50,0,0);
    actualizarPalabra();
    pantalla.focus();
}

function intentarLetra(letra){

    letra = validarTexto(letra);
    if (letra && letra.length == 1){

        if (!letrasIntentadas.includes(letra)){

            letrasIntentadas.push(letra);
            dibujarLetrasIntentadas(600, 500);
            if (palabraSeleccionada.includes(letra)){
                //bien
                actualizarPalabra();
            }else{
                //mal
                intentosFallidos++;
                dibujarAhorcado(-50, 0, intentosFallidos);
                if (intentosFallidos >= maxIntentos){
                    finDelJuego();
                }
            }
        }
        mostrarError("")
    }else{
        mostrarError("Solo puedes usar letras")
    }
}

function validarTexto(texto){
    //si el texto no es una letra de la A a la Z, devuelve false, caso contrario devuelve el texto pero en mayuscula
    var regExp = /^[a-z]+$/i;
    if (regExp.test(texto)){
        return texto.toUpperCase();
    }else{
        return false;
    }
}

function actualizarPalabra(){
    let contador = 0;
    let letra = "";

    for(let i = 0; i < palabraSeleccionada.length; i++){
        if (letrasIntentadas.includes(palabraSeleccionada[i])){
            letra = palabraSeleccionada[i];
            contador++;
        }else{
            letra = "";
        }
        dibujarLetra(300 + (i*75), 720, letra);
    }

    if (contador == palabraSeleccionada.length){
        finDelJuego();
    }
}

function finDelJuego(){
    jugando = false;
    menuInferior.classList.remove("invisible");
    if (intentosFallidos >= maxIntentos){
        mensajeDerrota(600, 400)
        mostrarPalabra(600, 430);
    }else{
        mensajeVictoria(600, 400);
    }
}