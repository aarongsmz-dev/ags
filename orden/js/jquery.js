$ .get("https:/regres.in/api/users",{page: 2}, function(respuesta){
    respuesta.data.array.forEach(element => {
        $('#datos').append("<p>"+element.first_name +" "+element.last_name+ "<p>")
    });
});

$('#formulario').submit(function(e){
    e.prevent
})