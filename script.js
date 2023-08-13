function deshabilitarnum2() {
  const operador = document.getElementById("opciones").value;
  const num2 = document.getElementById("num2");
  
  if (operador === "^2") {
      num2.value = "";
      num2.disabled = true;
  } else {
      num2.disabled = false;
  }
}

function calcular() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operador = document.getElementById("opciones").value;
  var resultado = 0;




  switch (operador) {
      case "+":
          resultado = num1 + num2;
          break;
      case "-":
          resultado = num1 - num2;
          break;
      case "*":
          resultado = num1 * num2;
          break;
      case "^2":
          resultado = num1*num1 ;
          break;
      case "/":
          if (num2 === 0) {
            alert("No se puede dividir por 0");
            return;
        }
          resultado = num1 / num2;
          break;
      default:
          break;
  }

  document.getElementById("resultado").value = resultado;
  
}

function borrarCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").value = "";
  
}





//mientras el usuario no ingrese igual no voy a dejar de leer numeros

function mostrarBotones() {
  var contenedor = document.getElementById("contenedorBotones");
  contenedor.style.display = "block";
}
let estadoInput = "";
let estadoOperacion = "";
let antesOperacion = "";

//Actualizo el display
function updateDisplay() {
  document.getElementById("result").value = estadoInput;
}
function muestra1() {
  //cargo el display
  estadoInput += "1";
  updateDisplay();
}
function muestra2() {
    estadoInput += "2";
  updateDisplay();
}
function muestra0() {
  estadoInput += "0";
updateDisplay();
}
function muestra3() {
  estadoInput += "3";
updateDisplay();
}
function muestra4() {
  estadoInput += "4";
updateDisplay();
}
function muestra5() {
  estadoInput += "5";
updateDisplay();
}
function muestra6() {
  estadoInput += "6";
updateDisplay();
}
function muestra7() {
  estadoInput += "7";
updateDisplay();
}
function muestra8() {
  estadoInput += "8";
updateDisplay();
}
function muestra9() {
  estadoInput += "9";
updateDisplay();
}

function muestrapunto() {
  //verificar el punto
  estadoInput += ".";
updateDisplay();
}


//Cuando apreto el boton operacion, todo lo anterior lo guardo
function sumar() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "+";
}

function restar() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "-";
}
function dividir() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "/";
}
function multiplicar() {
  antesOperacion = estadoInput;
  //GUARDO LA VARIABLE Y LIMPIO PARA PODER INGRESAR UN NUMERO NUEVO
  estadoInput = "";
  //GUARDO EL ESTADO DE OPERACION EN OTRA VARIABLE, PARA SABER COMO HACER EN LA COMPARACION
  estadoOperacion = "*";
}

function calcular2(){
// alert("cALCULAR"+ antesOperacion+" "+ estadoOperacion+" "+estadoInput)
  var num1 = parseFloat(antesOperacion);
  var num2 = parseFloat(estadoInput);
  var operador = estadoOperacion;
  // alert(num1 + "  "+operador+ " "+num2);




  switch (operador) {
      case "+":
        estadoInput = num1 + num2;
          break;
      case "-":
        estadoInput = num1 - num2;
          break;
      case "*":
        estadoInput = num1 * num2;
          break;
      case "/":
          if (num2 === 0) {
            alert("No se puede dividir por 0");
            return;
        }
          estadoInput = num1 / num2;
          break;
      default:
          break;
  }
  document.getElementById("result").value = estadoInput;
}

function limpiar() {
  estadoInput = "";
  estadoOperacion = "";
  antesOperacion = "";
  result="";
  updateDisplay();
}

function division(num1,num2){
  return num1/num2;

}
function multiplicacion(num1,num2){
    return num1*num2;
}

function suma(num1,num2){
return num1+num2;
}

function resta(num1,num2){
  return num1-num2;

}
