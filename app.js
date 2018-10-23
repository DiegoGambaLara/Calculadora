var digito1;
var digito2;
var operacion;

function init(){

    //Asignar las variables
    var calculos = document.getElementById('display');
    var atras = document.getElementById('on');
    var signo = document.getElementById('sign');
    var division = document.getElementById('dividido');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var multiplicacion = document.getElementById('por');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var resta = document.getElementById('menos');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cero = document.getElementById('0');
    var decimal = document.getElementById('punto');
    var resultado = document.getElementById('igual');
    var suma = document.getElementById('mas');


    //Asignamos el digito en el display
    uno.onclick = function(e){
      document.getElementById('1').style="width:27%;";
      setTimeout(function nuevo(){document.getElementById('1').style="width:28%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "1";
      }
    }
    dos.onclick = function(e){
      document.getElementById('2').style="width:27%;";
      setTimeout(function nuevo(){document.getElementById('2').style="width:28%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "2";
      }
    }
    tres.onclick = function(e){
      document.getElementById('3').style="width:27%;";
      setTimeout(function nuevo(){document.getElementById('3').style="width:28%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "3";
      }
    }
    cuatro.onclick = function(e){
      document.getElementById('4').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('4').style="width:22%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "4";
      }
    }
    cinco.onclick = function(e){
      document.getElementById('5').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('5').style="width:22%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "5";
      }
    }
    seis.onclick = function(e){
      document.getElementById('6').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('6').style="width:22%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "6";
      }
    }
    siete.onclick = function(e){
      document.getElementById('7').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('7').style="width:22%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "7";
      }
    }
    ocho.onclick = function(e){
      document.getElementById('8').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('8').style="width:22%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "8";
      }
    }
    nueve.onclick = function(e){
      document.getElementById('9').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('9').style="width:22%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "9";
      }
    }
    cero.onclick = function(e){
      document.getElementById('0').style="width:27%;";
      setTimeout(function nuevo(){document.getElementById('0').style="width:28%;";},80);
      if (calculos.textContent === "0"){
        calculos.textContent = "";
      }
      if(calculos.textContent.length > 7){
          calculos.textContent = calculos.textContent
      }else{
          calculos.textContent = calculos.textContent + "0";
      }
    }
    decimal.onclick = function(e){
      document.getElementById('punto').style="width:27%;";
      setTimeout(function nuevo(){document.getElementById('punto').style="width:28%;";},80);
      if (calculos.textContent === "0" || calculos.textContent === ""){
        calculos.textContent = "0.";
      }else{
        var cadena = calculos.textContent;
        var contador = 0;
        for(var i = 0; cadena.length > i; i++){
            if( cadena[i] == "."){
              contador++;
            }
        }
        if(contador == 0){
          calculos.textContent = calculos.textContent + ".";
        }else{
          calculos.textContent = calculos.textContent;
        }
      }
    }


    //Operaciones matematicas
    suma.onclick = function(e){
      document.getElementById('mas').style="width:86%;";
      setTimeout(function nuevo(){document.getElementById('mas').style="width:88%;";},80);
      digito1 = calculos.textContent;
      operacion = "+";
      limpiar();
    }
    resta.onclick = function(e){
      document.getElementById('menos').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('menos').style="width:22%;";},80);
      digito1 = calculos.textContent;
      operacion = "-";
      limpiar();
    }
    multiplicacion.onclick = function(e){
      document.getElementById('por').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('por').style="width:22%;";},80);
      digito1 = calculos.textContent;
      operacion = "*";
      limpiar();
    }
    division.onclick = function(e){
      document.getElementById('dividido').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('dividido').style="width:21%;";},80);
      digito1 = calculos.textContent;
      operacion = "/";
      limpiar();
    }
    igual.onclick = function(e){
      document.getElementById('igual').style="width:27%;";
      setTimeout(function nuevo(){document.getElementById('igual').style="width:28%;";},80);
      digito2 = calculos.textContent;
      respuesta();
    }
    signo.onclick = function(e){
      document.getElementById('sign').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('sign').style="width:22%;";},80);
      digito1 = calculos.textContent;
      operacion = "cambio"
      respuesta();
    }

    //funciones de la calculadora
    atras.onclick = function(e){
      document.getElementById('on').style="width:21%;";
      setTimeout(function nuevo(){document.getElementById('on').style="width:22%;";},80);
      borrar();
    }
    function limpiar(){
      calculos.textContent = "";
    }
    function borrar(){
      calculos.textContent = "0";
      digito1 = 0;
      digito2 = 0;
      operacion = "";
    }
    function respuesta(){
      var res = 0;
      switch (operacion) {
        case "+":
            res = parseFloat(digito1) + parseFloat(digito2);
          break;
        case "-":
            res = parseFloat(digito1) - parseFloat(digito2);
          break;
        case "*":
            res = parseFloat(digito1) * parseFloat(digito2);
          break;
        case "/":
            res = parseFloat(digito1) / parseFloat(digito2);
          break;
        case "cambio":
            res = parseFloat(digito1) * (-1);
          break;
        }
        calculos.textContent = res;
        var resultado = calculos.textContent;
        borrar();
        if(resultado.length > 7){
            calculos.textContent = +resultado[0] +resultado[1] +resultado[2] +resultado[3] +resultado[4] +resultado[5] +resultado[6] +resultado[7];
        }else {
            calculos.textContent = resultado;
        }
    }
}
