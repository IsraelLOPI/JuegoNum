let intentos = 1;
let listaNumerosSeleccionados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroAleatorio();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Has adivinado el número secreto en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no adivino el numero secreto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        console.log(intentos);
        intentos++;
        limpiarCaja();
    }
    
    return;
}
function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if(listaNumerosSeleccionados.length === numeroMaximo){
        assignarTextoElemento('p', 'No hay más números disponibles para adivinar');
    } else {
        if (listaNumerosSeleccionados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        } else {
            listaNumerosSeleccionados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    limpiarCaja();
    valoresIniciales();
        document.getElementById('reiniciar').setAttribute('disabled', 'true');

}
function valoresIniciales() {
    numeroSecreto = generarNumeroAleatorio();
    asignarTextoElemento('h1', 'Juego de Adivinanza');
    asignarTextoElemento('p', `Adivina un número entre 1 y ${numeroMaximo}`);
    intentos = 1;
}

valoresIniciales();
