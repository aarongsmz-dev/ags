document.querySelector("#contacto").addEventListener("click", function contacto(){
    document.querySelector('.contenedor__principal').innerhtml = `
        
    <form action="htpps://regres.in/api/users" id=formulario method="post">

                <label for="">Nombre</label>
                <input class="input-text" id="nombreAñadir" type="text" placeholder="Nombre">
        
                <label for="">Apellidos</label>
                <input class="input-text" id="apellidosAñadir" type="text" placeholder="Apellidos">
           
                <label for="">Asunto</label>
                <input class="input-text" id="asuntoAñadir" type="text" placeholder="Asunto">

                <label for="">Correo</label>
                <input class="input-text" id="correoAñadir" type="email" placeholder="Email">
            
            <input class="boton" type="submit" value="Enviar">
       
    </form>`

});
