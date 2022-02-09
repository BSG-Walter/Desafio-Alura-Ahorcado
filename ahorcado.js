var palabras = ["ALURA", "ORACLE", "AHORCADO", "JAVASCRIPT", "GITHUB", "CIFRADO", "REPOSITORIO", "PROGRAMACION"];
var palabraSeleccionada = "";
//MAXIMO 12 LETRAS

function intentarLetra(letra){
    letra = validarTexto(letra);
    if (letra && letra.length == 1){
        console.log(letra);
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