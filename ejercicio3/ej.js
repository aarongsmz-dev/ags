//ej3
/*var a = prompt("Introduce el primer número");
console.log("El primer número es " + a);
var b = prompt("Introduce el segundo número");
console.log("El segundo número es " + b);


if(a>b){
console.log("El primer número es el mayor");
}
else if (a == b) {
console.log("Ambos son iguales");
}
else{
console.log("El segundo número es el mayor");
}*/


//ej7
function ej3(){
var a = prompt("Introduce el primer número");
console.log("El primer número es " + a);
var b = prompt("Introduce el segundo número");
console.log("El segundo número es " + b);

function comparar(){
    if(num1<num2){
     console.log(a + "Es mayor que" + b);
    }else if(num1==num2){
      return console.log(a + " y " + b  + " son iguales"); 
    }else{
    return console.log(b + " es mayor que " + a);
    }
}
}