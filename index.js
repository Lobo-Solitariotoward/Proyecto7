
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

//Funcion Arrow
/*let calcular = () => {
    resultado.value = eval(resultado.value);
}

let limpiar = () => {
    resultado.value = ' ';
}

let asignar = (valor) => {
    //short Hand
    resultado.value += valor;
}
*/
