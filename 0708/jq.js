$(document).ready(function(){
var rojo = $("#rojo");
var verde = $("#verde");
$("#rojo")
.css("background-color","red")
.css("color","white");

$("#amarillo")
.css("background-color","yellow")
.css("color","black");

$("#verde")
.css("background-color","green")
.css("color","white");

rojo.addClass("recuadro");

var elemento = $(".recuadro");

elemento.css("border","2px solid black")
.css("font-size","1.5em ")

$('[title="Google"]').css("color","red")
var contenedor = $('#contenedor');
function cambiaRojo(){
    $(this).css("background","red");
}
function cambiaVerde(){
    $(this).css("background","green");
}
contenedor.hover(cambioRojo,cambiaVerde);

$(document).mousemove(function(){

    $("#sigueme")
    .css("left", event.clientX)
    .css("top",event.clientY)
})
});
