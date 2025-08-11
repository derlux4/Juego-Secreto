let numeroSecreto = 0;
let intentos=0;
let listaNumeroSorteado = [];
let numeroMaximo=10

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

condicionesIniciales()

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
  
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? `vez.`:`veces.`}`);
      document.getElementById('reiniciar').removeAttribute('disabled')
    }    
    //El usuario no acertó
    else {
            if (numeroDeUsuario>numeroSecreto) {
               asignarTextoElemento("p",'El número secreto es menor') ;
            } else {
                asignarTextoElemento("p",'El número secreto es mayor');
            } 
            intentos++;
            limpiarcaja();
        }
    
    return;
    }



console.log(numeroSecreto)

function generarNumeroSecreto() {
let numeroGenerado = Math.floor (Math.random()*numeroMaximo) +1;
//Si ya sorteamos todos los números

if(listaNumeroSorteado.length==numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
} else{

//Si el número generado está incluido en la lista, hacemos una operación sino hacemos otra.
if(listaNumeroSorteado.includes(numeroGenerado)) {
    return generarNumeroSecreto ();
} else {
    listaNumeroSorteado.push(numeroGenerado);
    return numeroGenerado;
}
}
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value="";
    
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarcaja();
    //Reiniciar valores de contar
    //Reiniciar el mensaje de incio
    //Reiniciar número secreto
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute('disabled',true)
}

function condicionesIniciales(){
asignarTextoElemento ('h1','Juego del número secreto!');
asignarTextoElemento ('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto=generarNumeroSecreto ();
intentos=1;
console.log(numeroSecreto)
}

