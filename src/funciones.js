// var i =1;
//
// i+=i;
//
// console.log(i);

// function suma(a,b) {
//     // console.log(a+b);
// }
//
// function cuadrado(number){
//     console.log(number*number);
// }
//
// function cubo(number){
//     return number*number*number;
// }
//
//
// suma(3,4);
//
// cuadrado(5);
//
// var res = cubo(10)
// console.log(res);
//
// var suma2 = function (a,b) {
//     console.log('argumentos', arguments[2])
//     return a+b;
// }
//
// suma2(3,7);

// function concat(separator) {
//     var result = "";
//     console.log(arguments)
//     for(i=1; i < arguments.length; i++){
//         result += arguments[i] + separator;
//     }
//     return result;
// }
//
// var res = concat(' | ', 1, 4, 7);
//
// console.log(res);

// alert('funciona');

// var input = prompt("Introduzca una cadena");
// var inputCodificado= escape(input);
// alert('Cadena codificada: ' + inputCodificado);

// var input2 = prompt('Introduzca una operacion en JavaScript');
//
// var resultado = eval(input2);
// alert(resultado);

// console.log(isFinite(0), isFinite(-1), isFinite(1123435));
// console.log(isFinite(Infinity), isFinite(-Infinity));
// console.log(isFinite(1e308), isFinite(1e309));
//
// console.log(isNaN(123));
// console.log(isNaN(1.23));
// console.log(isNaN('abc'));
// console.log(isNaN(NaN));
//
// var a = true;
// var b = false;
// var c = new Date();
// var d = "999";
// var e = '999 999';
// var f = function(){return '1'};
// var g = function (){return '2'};
//
// console.log(Number(a));
// console.log(Number(b));
// console.log(Number(c));
// console.log(Number(d));
// console.log(Number(e));
// console.log(Number(f()));
// console.log(Number(g));
// console.log(Boolean(f));
// console.log(String(f()));
// console.log(String(c));
//
//
// var str = '1.23';
// console.log(parseInt(str));
// console.log(parseFloat(str));
// console.log(str +1);
// console.log(parseFloat(str) + 1);
//
// var url = "htp://localhost/mi-pagina web.html!";
// var enc = encodeURI(url);
// console.log(url, enc);
// var dec = decodeURI(url, enc, dec);
//
//
// var = 1.49;
// console.log(Math.round(num), Math.round(1,.51) ); //el mas cercano
// console.log(Math.ceil(num)); // el siguiente numero entero
// console.log(Math.floor(num)); // el numero anterior entero

function funcionEjemplo() {
    var input = prompt('Introduzca un numero decimal: ');
    input = parseFloat(input)
    input = Math.round(input);
    return input;
}

var res = funcionEjemplo();
console.log(res);

var redondea = function () {
    var num = prompt(' numero: ')
    num = parseFloat(num);
    num = Math.ceil(num);
    return num;
}

var res = redondea();
var res2 = redondea();
console.log(res);