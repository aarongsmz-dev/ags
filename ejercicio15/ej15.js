function ej15(){
var nombres;
console.log(nombres)
nombres = new Array(5);
console.log(nombres);

nombres = ['Aaron','Kevin','Yoha','Javier','Nora']
document.write(nombres);

for(let i=0; i<nombres.length;i++){
    document.write("</br>"+nombres[i] + " posición " + (i));
}
}