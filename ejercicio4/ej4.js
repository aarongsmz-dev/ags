var a = parseInt(prompt("Introduce el número de niños"));
console.log("El número de niños es " + a);
var b = parseInt(prompt("Introduce el número de niñas"));
console.log("El número de niñas es " + b);

function niños(num1,num2){
    return num1*100/(num1+num2);    
}
function niñas(num1,num2){
    return num2*100/(num1+num2);
}   
console.log("Hay un " + niños(a,b) + "% de niños.");
console.log("Hay un " + niñas(a,b) + "% de niñas.");