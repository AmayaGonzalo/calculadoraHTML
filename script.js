const numBtn = document.querySelectorAll('.btn-num');
const btnOperacion = document.querySelectorAll('.btn-op');
const btnIgual = document.getElementById('btn-igual');
const btnClear = document.getElementById('btn-C');
var pantalla = document.getElementById('resultado2');

var operacionActual = "";
var operacionAnterior = "";
var operacion= undefined;

numBtn.forEach(function(btn){    
    btn.addEventListener('click', function() {
        agregarNumero(btn.innerText);
  })
})

btnOperacion.forEach(function(btn){
    btn.addEventListener('click', function(){
        elegirOperacion(btn.innerText);
    })
})

btnIgual.addEventListener('click', function(){
    calcular();    
    pantalla.value = operacionActual;    
})

function agregarNumero(num) {
    if (pantalla.innerText.length <12) {
        operacionActual = operacionActual + num;
        pantalla.value = operacionActual;
    }else{
        alert("El límite de digitos son 12");
    }
    // operacionActual = operacionActual.toString()+ num.toString();    
    // pantalla.value = operacionActual;
}

function calcular() {
    var resultado;
    var anterior = parseFloat(operacionAnterior);
    var actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion) {
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
            resultado = anterior/100 * actual;
            break;
        default:
            return;
    }

    operacionActual = resultado;
    operacion = undefined;
    operacionAnterior = "";
}

function elegirOperacion(operador) {
    if(operacionActual==="") return;
    if(operacionAnterior !== "") {
        calcular();        
    }
    operacion = operador.toString();
    operacionAnterior = operacionActual;
    operacionActual = "";
}
