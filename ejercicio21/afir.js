window.addEventListener('load', () =>{

    var formulario = document.querySelector("#formulario");
    var box_info =  document.querySelector(".info");
         box_info.style.display = "none";

    formulario.addEventListener('submit', function(){
        var nombre = document.querySelector('#nombre');
        var apellidos = document.querySelector('#apellidos');
        var edad = document.querySelector('#edad');

        console.log(nombre);

        if(nombre.trim() == null || nombre.trim() ==""){
            document.querySelector("#error_nombre").innerHTML = "Nombre no válido";
            document.querySelector("#error_nombre").style.color = "red";
            return false
        }else{
            document.querySelector("#error_nombre").innerHTML = "Nombre válido";
            document.querySelector("#error_nombre").style.color = "green";
        }
        if(apellidos.trim() == null || apellidos.trim() ==""){
            document.querySelector("#error_apellidos").innerHTML = "apellidos no válido";
            document.querySelector("#error_apellidos").style.color = "red";
            return false
        }else{
            document.querySelector("#error_apellidos").innerHTML = "apellidos válido";
            document.querySelector("#error_apellidos").style.color = "green";
        }
        if(edad.trim() == null || edad.trim() ==""){
            document.querySelector("#error_edad").innerHTML = "edad no válido";
            document.querySelector("#error_edad").style.color = "red";
            return false
        }else{
            document.querySelector("#error_edad").innerHTML = "edad válido";
            document.querySelector("#error_edad").style.color = "green";
        }
    })
})


