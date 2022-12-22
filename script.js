const numBtn = document.querySelectorAll('.btn-num');
const btnOperacion = document.querySelectorAll('.btn-op');
const btnIgual = document.getElementById('btn-igual');
const btnClear = document.getElementById('btn-CE');
const btnCero = document.getElementById('btn-num0');
const btnPunto = document.getElementById('btnPunto');
const btnClearAnterior = document.getElementById('btn-C');
var pantalla = document.getElementById('resultado2');

var operacionActual = "";
var operacionAnterior = "";
var operacion = undefined;

numBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {        
        if (operacionActual == "0") {
            operacionActual = "";
            pantalla.value = "";
            agregarNumero(btn.innerText);
        } else {
            agregarNumero(btn.innerText);
        }
    })
})

btnOperacion.forEach(function (btn) {
    btn.addEventListener('click', function () {
        elegirOperacion(btn.innerText);
    })
})

btnIgual.addEventListener('click', function () {
    calcular();
    pantalla.value = operacionActual;
})

btnClear.addEventListener('click', function () {
    pantalla.value = "";
    operacion = undefined;
    operacionActual = "";
    operacionAnterior = "";
})

btnClearAnterior.addEventListener('click', function () {
    pantalla.value = "";
    operacionActual = "";
})

btnCero.addEventListener('click', function () {
    if (pantalla.value == "0") {
        operacionActual = operacionActual + "";
        pantalla.value = operacionActual;
    } else {
        agregarNumero(btnCero.innerText);
    }
})

btnPunto.addEventListener('click', function() {
   
    if(operacionActual == "") {
        operacionActual = operacionActual + "0."
        pantalla.value = operacionActual;   
    }else {
        agregarNumero(btnPunto.innerText);        
    }
});

function agregarNumero(num) {
    if (pantalla.value.length < 12) {
        operacionActual = operacionActual + num;
        pantalla.value = operacionActual;
    } else {
        alert("El límite de digitos son 12");
    }
}

function calcular() {
    var resultado;
    var anterior = parseFloat(operacionAnterior);
    var actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case "+":
            resultado = anterior + actual;
            break;
        case "-":
            resultado = anterior - actual;
            break;
        case "/":
            resultado = anterior / actual;
            break;
        case "x":
            resultado = anterior * actual;
            break;
        case "%":
            resultado = anterior / 100 * actual;
            break;
        default:
            return;
    }

    operacionActual = resultado;
    operacion = undefined;
    operacionAnterior = "";
}

function elegirOperacion(operador) {
    if (operacionActual === "") return;
    if (operacionAnterior !== "") {
        calcular();
    }
    operacion = operador;
    operacionAnterior = operacionActual;
    operacionActual = "";
}