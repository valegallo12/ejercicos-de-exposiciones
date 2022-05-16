//la funcion general de las matematicas en js en math

var mivalorpi = Math.PI;
var base = document.getElementById('base').value;
var exponente = document.getElementById('exponente').value;


//funcion pi
function pi(){
    alert("el valor de pi en JS es" + mivalorpi);
}

//funcion redondear - round

function round(){
    var redondear = Math.round(mivalorpi);
    alert("el  valor redondeado sera:"+ redondear)
}

//funcion base a exponente = pow

function pow(){
    var base = document.getElementById('base').value;
    var exponente = document.getElementById('exponente').value;
    var exponencial = Math.pow(base, exponente).value;

    alert("el total seria: "+ exponencial);


}

//funcion raiz = sqrt

function raiz(){
    var numero = document.getElementById('numero').value;
    var calcularraiz = Math.sqrt(numero);
    alert("la raiz seria:" + calcularraiz);
}