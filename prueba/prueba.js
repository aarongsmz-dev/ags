var bachiller = prompt("¿Tienes el titulo de bachiller?");
console.log(bachiller);
if(bachiller =="si"){
    alert("Puedes acceder al grado superior")
}else if(bachiller=="no"){
var prueba_acceso= prompt("¿Tienes la prueba de acceso superada?");
console.log(prueba_acceso);
if(prueba_acceso=="si"){
    alert("Puedes acceder al grado superior")
    } else{
    alert("No puedes acceder al grado superior")
    }
}
