let numeroSecreto = 0;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;
inicializar();

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function generarNumeroSecreto(){
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log("Números sorteados:", numerosSorteados);
    console.log("Número secreto:", numeroSecreto);
    if (numerosSorteados.length >= numeroMaximo) {
            console.log("Todos los números ya han sido sorteados.");
            asignarTextoElemento("h1", "Juego terminado");
            asignarTextoElemento("p", "No hay más números disponibles para jugar.");
            return;
        }

    else {

        if (numerosSorteados.includes(numeroSecreto)) {
            console.log("Número ya sorteado, generando otro...");
            return generarNumeroSecreto(); 
        } else {
            numerosSorteados.push(numeroSecreto);
        }

    }

    return numeroSecreto;
}

function inicializar() {
    asignarTextoElemento("h1", "bienvenido!");
    asignarTextoElemento("p", "Selecciona un numero del 1 al 10");
    generarNumeroSecreto();
    intentos = 1;
    document.getElementById("reiniciar").disabled = true;

return intentos;
}

function intento() {
    console.log(intentos);
    let numero= parseInt(document.getElementById("numeroUsuario").value);
    if (numero === numeroSecreto) {
        asignarTextoElemento("h1", `acertaste en : ${intentos} ${intentos ==1? 'intento': 'intentos'} `);
        asignarTextoElemento("p", "El número era " + numeroSecreto);
        document.getElementById("reiniciar").disabled = false;

    }
    else {
        if (numero < numeroSecreto) {
            asignarTextoElemento("h1", "¡Intenta de nuevo!");
            asignarTextoElemento("p", "El número secreto es mayor que " + numero);
        }
        else {
            asignarTextoElemento("h1", "¡Intenta de nuevo!");
            asignarTextoElemento("p", "El número secreto es menor que " + numero);
        }
        limpiarCampos   ();
        intentos++;

    }
    return;
}   

function limpiarCampos() {
    document.getElementById("numeroUsuario").value = "";
}

function reiniciar() {
    limpiarCampos();
    inicializar();
    
}

