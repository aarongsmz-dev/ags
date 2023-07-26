function ej5(){
var importe = parseInt(prompt("Escriba el importe de la compra"));
//console.log("El importe es de " + importe);
var descuento = importe*0.85;
var mes = prompt("Escriba el mes");
//console.log("El mes es " + mes);

if(mes==="octubre"){
     console.log("Su importe es de " + descuento)
    
}
else{
    console.log("Su importe es de " + importe)
}
}
