# ags

Web Aarón González
Mi web contará con un header con la siguiente distribución
1. El logo en el lado Izquierdo que al pulsarlo al inicio.
2. Un nav en el lado derecho con la siguiente distribución.
a. Enlace a inicio de sesión, donde pediremos los siguientes datos:
i. Usuario
ii. Contraseña
b. Registro, que pediremos los siguientes datos:
i. Nombre
ii. Usuario
iii. Correo
iv. Contraseña
v. Repetir contraseña
vi. Dirección
vii. número postal
c. Enlace a nuestros productos donde encontrarán:
i. Los diferentes productos.
ii. La posibilidad de añadir la cantidad que quieran al carro de compra
d. Enlace a un formulario de contacto, donde se recogerán los siguientes datos:
i. Nombre
ii. Correo
iii. Un textarea para escribir la consulta.
e. Enlace al carrito que tendrá lo siguiente:
i. Mostrará los productos seleccionados.
ii. Tendrá un botón para confirmar el pedido.
1. Si se pulsa un alert dirá:”Pedido realizado correctamente”.
Por lo tanto en el header tendríamos 6 enlaces incluyendo el logo, y 3 formularios.
En el body de nuestra web se mostrará:
1. En el inicio pequeña descripción de la marca y los productos.
2. En el acceso, el formulario anteriormente descrito.
3. En el registro, el formulario anteriormente descrito.
4. En el producto verán nuestros diferentes productos, y al lado de cada uno para introducir la cantidad deseada y un botón para enviar el producto con
la cantidad deseada al carrito.
5. En el contacto, el formulario anteriormente descrito.
6. En el carrito veremos los productos seleccionados, la cantidad y el botón para confirmar.
Al registrarse, se confirma que existe el correo y las contraseñas coinciden y se almacenan todos los datos introducidos en el servidor.
Luego al iniciar sesión deberá coincidir el usuario introducido con la respectiva contraseña que se almacenó en el servidor
Para comenzar, deberá tener la sesión iniciada. Luego al seleccionar el tipo de producto y la cantidad la petición será enviada a nuestro servidor y esa
información se almacena en un array.
Luego al ir al carrito obtendrá toda la información del server, que en este caso será sus productos seleccionados y al clickar el botón saldrán esos datos para
la pasarela de pago
