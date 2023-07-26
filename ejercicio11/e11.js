function ej11(){
var admin=prompt ("usuario" , []);
    
 if (admin== "Admin" || admin=="admin" || admin== "ADMIN")
 {
 var clave = prompt ("contraseña:", []);
 if (clave == "webmaster"){
 alert ("Bienvenido");}
 else if (clave==="" || clave===null){
 alert ("cancelado");
 }
 else {
     alert ("contraseña incorrecta");
 }

 }else if (admin== "" || admin=== null){
 alert ("cancelado");
 }else {
 alert ("usuario incorrecto");
 }
}