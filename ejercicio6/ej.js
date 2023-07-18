var clave = prompt("Introduce tu clave");
var i=0;

for(i=1; i<3; i++){
    if(clave!=123456){
        prompt("Contraseña incorrecta. Introduce tu contraseña");
   
    }else{
        alert("Contraseña correcta");
        break;
    }
}

/*Inicia proceso
Escribir"Introduce tu contraseña"
si la contraseña=123456
contraseña correcta
fin
si no es correcta
Contraseña incorrecta, vuelva a intentarlo
si introduce la contraseña 3 veces incorrectas
fin proceso*/