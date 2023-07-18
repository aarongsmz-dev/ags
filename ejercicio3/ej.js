var a = prompt("Introduce el primer número");
console.log("El primer número es " + a);
var b = prompt("Introduce el segundo número");
console.log("El segundo número es " + b);


if(a>=b){
console.log("El primer número es el mayor");
}
else if(a==b){
console.log("Ambos son iguales");
}
else{
console.log("El segundo número es el mayor");
}
// Revisar. Cuando pongo el primer numero mayor me sale el último mensaje.
// Prueba esto
// if (a==b) {
//     console.log("El número " + a + " y " + "el número " + b + " son iguales");
// }else if (a>b){
//     console.log("El primero es mayor.")
// } else if (b>a){
//     console.log("El segundo es mayor")
// }
