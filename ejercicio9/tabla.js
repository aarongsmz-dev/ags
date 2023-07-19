/*parte 1*/
var tabla= parseInt(prompt("Introduzca el número deseado"));

function multiplicar(t){

	document.write("<h2>Tabla de multiplicar del "+ tabla +"</h2>");

	document.write("<ul>");
	

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(tabla + "x " + i + "= " + tabla * i);
		document.write("</li>");
	}

	document.write("</ul>");
}
multiplicar(tabla);

/*parte2*/

function multiplicar(t){

	document.write("<h2>Tabla de multiplicar del "+ t +"</h2>");

	document.write("<ul>");
	

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(t + "x " + i + "= " + t * i);
		document.write("</li>");
	}

	document.write("</ul>");
}
multiplicar(1);
multiplicar(2);
multiplicar(3);
multiplicar(4);
multiplicar(5);
multiplicar(6);
multiplicar(7);
multiplicar(8);
multiplicar(9);
multiplicar(10);

/*parte3*/

n = 1;
do{
    for(var t = 1; t<= tabla; t++){
        document.write("<h2>Tabla de multiplicar del "+ t +"</h2>");
        for(var i = 1; i <=10; i++){
            document.write(i+" x "+t+" = "+(i*t)+"<br/>");
            }
    }
    n++;
}while(n==tabla);