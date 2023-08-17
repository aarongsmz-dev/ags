
document.querySelector("#contacto").addEventListener("click", function contacto(){
    document.querySelector('.contenedor__principal').innerHTML = `
       
    <form action="htpps://regres.in/api/users" id="formulario" method="post" class="colorSwap">

                <label for="">Nombre</label>
                <input class="input-text" id="nombreAñadir" type="text" placeholder="Nombre">
        
                <label for="">Apellidos</label>
                <input class="input-text" id="apellidosAñadir" type="text" placeholder="Apellidos">
           
                <label for="">Asunto</label>
                <input class="input-text" id="asuntoAñadir" type="text" placeholder="Asunto">

                <label for="">Correo</label>
                <input class="input-text" id="correoAñadir" type="email" placeholder="Email">

                <div class="campo">
                            <label for="">Mensaje</label>
                            <textarea class="input-text" ></textarea>
                        </div>
            
            <input class="boton" type="submit" value="Enviar">
       
    </form>`
});

document.querySelector("#acceso").addEventListener("click", function contacto(){
       document.querySelector('.contenedor__principal').innerHTML = `
          
       <form action="htpps://regres.in/api/users" id="inicio" method="post" class="colorSwap">
   
                   <label for="">Usuario</label>
                   <input class="input-text" id="asuntoAñadir" type="text" placeholder="Usuario">
           
                    <label for="">Contraseña</label>
                   <input class="input-text" id="correoAñadir" type="password" placeholder="Correo">
   
               
               <input class="boton" type="submit" value="Enviar">
          
       </form>`
   });

   document.querySelector("#registro").addEventListener("click", function contacto(){
    document.querySelector('.contenedor__principal').innerHTML = `
       
    <form action="htpps://regres.in/api/users" id="inicio" method="post" class="colorSwap">

                <label for="">Usuario</label>
                <input class="input-text" id="asuntoAñadir" type="text" placeholder="Usuario">
        
                 <label for="">Contraseña</label>
                <input class="input-text" id="correoAñadir" type="password" placeholder="Correo">

                <label for="">Correo</label>
                <input class="input-text" id="correoAñadir" type="email" placeholder="Email">

            
            <input class="boton" type="submit" value="Enviar">
       
    </form>`
});


   document.querySelector("#informacion").addEventListener("click", function contacto(){
    document.querySelector('.contenedor__principal').innerHTML = `

    <div class="back-info class="colorSwap"">
    <h2 class="back-text" >Información</h2>

<p class="back-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ullam impedit. Doloremque ipsam assumenda 
    quaerat amet impedit deserunt adipisci odit a consequuntur iusto nam aut alias magni, et fuga nemo.</p>
    </div>`
   })


//    Cambio de color



document.addEventListener("DOMContentLoaded", function() {
  var colorSwapButton = document.getElementById("colorSwapButton");

  colorSwapButton.addEventListener("click", function() {
    var elements = document.querySelectorAll(".colorSwap");
    elements.forEach(function(element) {
      element.style.backgroundColor = getRandomColor();
    });
  });

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});

