/*
    var alumno;
    alumno = new Array();
    var codigo=document.getElementById('cod').value;
    var nombre=document.getElementById('nom').value;
    var apellidos=document.getElementById('ape').value;
    var correo=document.getElementById('cor').value;
    var telefono=document.getElementById('tlf').value;
    
    alumno.push(codigo,nombre,apellidos,correo,telefono);
    console.log(alumno);
    document.write(alumno);
   */
function pulsar(){
    var alumno;
    alumno = new Array();
    var codigo=document.getElementById('cod').value;
    var nombre=document.getElementById('nom').value;
    var apellidos=document.getElementById('ape').value;
    var correo=document.getElementById('cor').value;
    var telefono=document.getElementById('tlf').value;
    alumno.push(codigo,nombre,apellidos,correo,telefono);
    alumno.forEach(element => console.log(element));
    document.write(alumno);
    
}