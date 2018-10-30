//alert('funciona');

//var titulo= document.querySelector('title');

//console.log(titulo);

var h1= document.createElement('h1');

h1.appendChild(document.createTextNode('Pruebas desde consola'));

console.log(h1);

document.body.appendChild(h1);


//BOM

var miVentana = window.open('', '', 'width=200, height=200');
miVentana.document.write('Hola Mundo');
miVentana.moveBy(800,800);
miVentana.focus();