$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); 
        
            
        var nombre = $('#nombreAñadir').val();
        var apellidos = $('#apellidosAñadir').val();
        var asunto = $('#asuntoAñadir').val();
        var correo = $('#correoAñadir').val();
        var edad = $('#edadAñadir').val();
        var foto = $('#fotoAñadir')[0].files[0];

    
        var formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('apellidos', apellidos);
        formData.append('asunto', asunto);
        formData.append('correo', correo);
        formData.append('edad', edad);
        formData.append('foto', foto);

       
        $.ajax({
            url: 'url_del_servidor.php', 
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log(response); 
            },
            error: function(xhr, status, error) {
                console.error(error); 
            }
        });
    });
});