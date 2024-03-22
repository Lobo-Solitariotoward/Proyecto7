
let resultado = document.getElementById('resultado');

function asignar(valor) {
    //short Hand
    resultado.value += valor;
}

function calcular() {
    resultado.value = eval(resultado.value);
}

function limpiar() {
    resultado.value = ' ';
}

let Raiz = () => {
    resultado.value = Math.sqrt(resultado.value);
}

let Potencia = () => {
    resultado.value = Math.pow(resultado.value, 2);
}

let Porcentaje = () => {
    resultado.value = resultado.value / 100;
}

let Pi = () => {
    resultado.value = Math.PI;
}

let Seno = () => {
    resultado.value = Math.sin(resultado.value);
}

let Coseno = () => {
    resultado.value = Math.cos(resultado.value);
}

let Tangente = () => {
    resultado.value = Math.tan(resultado.value);
}

let Logaritmo = () => {
    resultado.value = Math.log(resultado.value);
}

