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
  document.getElementById("resultadoDisplay").innerText = "Resultado: " + resultado;
}

function borrarCalc() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("resultadoDisplay").innerText = "";
}





//mientras el usuario no ingrese igual no voy a dejar de leer numeros

function mostrarBotones() {
  var contenedor = document.getElementById("contenedorBotones");
  contenedor.style.display = "block";
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
