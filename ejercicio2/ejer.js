/*var a = prompt("Introduce el primer número");
console.log("El primer número es " + a);
var b = prompt("Introduce el segundo número");
console.log("El segundo número es " + b);
 var resultado = 0;

    function sumar(num1,num2) {
    return parseInt(num1) + parseInt(num2);
    }
    function restar(num1,num2) {
    return parseInt(num1) - parseInt(num2);
    }
    function multiplicar(num1,num2) {
     return parseInt(num1) * parseInt(num2);
    }
    function dividir(num1,num2) {
    return parseInt(num1) / parseInt(num2);
    }
    console.log("El resultado de la suma es " +  sumar(a,b));
    console.log("El resultado de la resta es " +  restar(a,b));
    console.log("El resultado de la multiplicación es " +  multiplicar(a,b));
    console.log("El resultado de la división es " +  dividir(a,b));*/

  function ej2(){  
 var a = 10;
 var b = 5;

 var a = Number(prompt("Introduce el primer número"));
 console.log("El primer número es " + a);
 var b = Number(prompt("Introduce el segundo número"));
 console.log("El segundo número es " + b);

 document.write("Sumar: " + (a+b) + "<br/>");
 document.write("Restar: " + (a-b) + "<br/>");
 document.write("Multiplicar: " + (a*b) + "<br/>");
 document.write("Dividir: " + (a/b) + "<br/>");
}