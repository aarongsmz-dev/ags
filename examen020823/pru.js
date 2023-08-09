// function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
//     localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
// }
// function obtenerAlmacenamientoLocal(llave) {
//     const datos = JSON.parse(localStorage.getItem(llave))
//     return datos

// }

// let alumnos = obtenerAlmacenamientoLocal('alumnos') || [];
// let mensaje = document.getElementById('mensaje')

// //Añadir un alumno
// const añadirAlumno = document.getElementById('alumnoAñadir')
// const añadirAsunto = document.getElementById('asuntoAñadir')
// const añadirEmail = document.getElementById('emailAñadir')
// const añadirMensaje = document.getElementById('mensajeAñadir')

// document.getElementById("botonAñadir").addEventListener("click", function (event) {
//     event.preventDefault()
//     let alumnoAñadir = añadirAlumno.value
//     let asuntoAñadir = añadirASunto.value
//     let emailAñadir = añadirEmail.value
//     let mensajeAñadir = añadirMensaje.value

//     let van = true

//     if (alumnoAñadir == '' || apellidoAñadir == '' || emailAñadir == '' || imagenAñadir == '') {
//         mensaje.classList.add('llenarCampos')
//         setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 5000)
//         van = false
//     }
//     else {
//         for (let i = 0; i < alumnos.length; i++) {
//             if (alumnos[i].nombre == alumnoAñadir) {
//                 mensaje.classList.add('repetidoError')
//                 setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
//                 van = false
//             }
//         }
//     }

//     if (van == true) {
//         alumnos.push({
//             nombre: alumnoAñadir,
//             asunto: asuntoAñadir,
//             email: emailAñadir,
//             mensaje: mensajeAñadir
//         })
//         mensaje.classList.add('realizado')
//         setTimeout(() => {
//             mensaje.classList.remove('repetidoError')
//             window.location.reload()
//         }, 1500)
//     }
//     guardarAlmacenamientoLocal('alumnos', alumnos);
// })

// // Editar
// const alumnoEd = document.getElementById('alumnoEditar')
// const atributoEd = document.getElementById('atributoEditar')
// const nuevoAtributoEd = document.getElementById('nuevoAtributo')

// document.getElementById("botonEditar").addEventListener("click", function (event) {
//     event.preventDefault()
//     let alumnoEditar = alumnoEd.value
//     let atributoEditar = atributoEd.value
//     let nuevoAtributo = nuevoAtributoEd.value
//     let van = false
//     if (alumnoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
//         mensaje.classList.add('llenarCampos')
//         setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
//     }
//     else {
//         for (let i = 0; i < alumnos.length; i++) {
//             if (alumnos[i].nombre == alumnoEditar) {
//                 alumnos[i][atributoEditar] = nuevoAtributo
//                 van = true
//             }
//         }
//         if (van == true) {
//             mensaje.classList.add('realizado')
//             setTimeout(() => {
//                 mensaje.classList.remove('realizado')
//                 window.location.reload()
//             }, 1500);
//         }
//         else {
//             mensaje.classList.add('noExisteError')
//             setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
//         }
//         guardarAlmacenamientoLocal('alumnos', alumnos);
//     }
// })

// // Eliminar
// const alumnoE = document.getElementById('alumnoEliminar')

// document.getElementById("botonEliminar").addEventListener("click", function (event) {
//     event.preventDefault()
//     let alumnoEliminar = alumnoE.value
//     let van = false

//     for (let i = 0; i < alumnos.length; i++) {
//         if (alumnos[i].nombre == alumnoEliminar) {
//             alumnos.splice(i, 1)
//             van = true
//         }
//     }

//     if (van == false) {
//         mensaje.classList.add('noExsiteError')
//         setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
//     }
//     else {
//         mensaje.classList.add('realizado')
//         setTimeout(() => {
//             mensaje.classList.remove('realizado')
//             window.location.reload()
//         }, 1500);
//     }
//     guardarAlmacenamientoLocal('alumnos', alumnos);
// })

// // mostrar alumnos
// window.addEventListener("load", () => {
//     const alumnoEd = document.getElementById('alumnoEditar')
//     const alumnoEl = document.getElementById('alumnoEliminar')
//     for (let i = 0; i < alumnos.length; i++) {
//         alumnoEd.innerHTML += `<option>${alumnos[i].nombre}</option>`
//         alumnoEl.innerHTML += `<option>${alumnos[i].nombre}</option>`
//     }
//     Object.keys(alumnos[0]).forEach(element => {
//         atributoEd.innerHTML += `<option>${element}</option>`
//     });

//     let muestraalumnos = document.getElementById('mostrarAlumnos')
//     muestraalumnos.innerHTML = ''
//     for (let i = 0; i < alumnos.length; i++) {
//         muestraalumnos.innerHTML += `<div class="contenedorAlumnos"><img src="${alumnos[i].urlImagen}"><div class="informacion"><p>${alumnos[i].nombre}</p><p class="apellido"><span>Apellido: ${alumnos[i].apellido}</span></p> email: ${alumnos[i].email}<p></p></div></div>`
//     }
// })

function curso(){
    document.querySelector(".contenedor").innerHTML=

`<div class="contenedor__acc"><!--acesso-->
<div class="acceso">
    <h3>Nombre Usuario</h3>
    <p class="acceso_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.?</p>
</div>
<div class="registro">
    <img class="registro__imagen" src="media/avatar2.jpg" alt="imagen avatar">
    <h4>Lorem ipsum dolor</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <input class="boton" type="submit" value="Información">
</div>
</div><!--acesso-->

<!-- <div> -->
<div class="contenedor__promo">
    <h1>Lorem ipsum dolor.</h1>
    <video class="video" src="media/VideoClase.mp4"></video>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Justo voluptates vel doloremque dolorum debitis excepturi a quibusdam repudiandae.
       </p>
</div> `
}

function contacto(){
    document.querySelector(".contenedor").innerHTML=
    ` <div class="contenedor__acc"><!--acesso-->
    <div class="acceso">
        <h3>Nombre Usuario</h3>
        <p class="acceso_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.?</p>
    </div>
    <div class="registro">
        <img class="registro__imagen" src="media/avatar4.jpg" alt="imagen avatar">
        <h4>Lorem ipsum dolor</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <input class="boton" type="submit" value="Información">
    </div>
</div><!--acesso-->

<section >
    <h2>Contacto</h2>
    <Fieldset>
        <legend>Contactános llenando todos los campos </legend>
        <form class="formulario">
           
            <div class="contenedor-campos">
                <div class="campo">
                    <label for="">Nombre</label>
                    <input class="input-text" id="alumnoAñadir" type="text" placeholder="Nombre">
                </div>
                <div class="campo">
                    <label for="">Asunto</label>
                    <input class="input-text" id="asuntoAñadir" type="text" placeholder="Asunto">
                </div>
                <div class="campo">
                    <label for="">Correo</label>
                    <input class="input-text" id="correoAñadir"type="email" placeholder="Email">
                </div>

                <div class="campo">
                    <label for="">Mensaje</label>
                    <textarea class="input-text" id="mensajeAñadir" ></textarea>
                </div>
                <input class="boton" type="submit" value="Enviar">
            </div>
        </form>
    </Fieldset>

</section>`
}
