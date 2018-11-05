// var miArray = [];
// var miArray2 = ['Adios', '!'];
// var miArray3 = [1, 2, 3];
//
//
// miArray.push(2); //
// // miArray.push({a: 'a'});
// miArray.push('Hola');
//
// var resConcat = miArray3.concat(miArray.concat(miArray2));
// var resJoin = miArray3.join(' | ');
// miArray3.reverse();
// miArray3.shift(); //borra el primer indice
// miArray3.pop(); //borra el ultimo indice
//
//
// var resUnshift = miArray3.unshift(2);
//
//
// console.log(resConcat);
// console.log(resJoin);
// console.log(miArray3);
// console.log(resUnshift);



// var arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
//
// var arr = arr.slice(0, 7); //posicion a partir de la cual queremos borrar y cuantos elementos queremos borrar
//
// console.log(arr);
// si queremos los ultimos cuatro valores por ejemplo del array  ponemos
// var arr = arr.slice(-4)


// var peliculas = ["Superman", "Superman 3"];
// peliculas.splice(1,0, "Superman 2"); //posicion en la que queremos añadir, cuantos indices queremos que machaque y el elementos que queremos añadir
// console.log(peliculas);

// var arr= [11, 22, 33];
//
// arr.forEach(function(num, index, array) {
//     // console.log(num, index, array);
//     console.log('array[' +index+ '] =', num)
// })

// var miArray = [1,2,3];
//
// miArray.forEach(function (num, index, array) {
//     console.log('---------');
//     miArrayBarra = miArray.join(' | ');
//     console.log(miArrayBarra);
// })
//
//
// var nombres = ['Ivan', 'Fran', 'Belen', 'Miguel'];
// nombres.sort();
// console.log(nombres);
//
// var nummeros = [1, 3, 11, 99];
// nummeros.sort(function (a, b) {
//     return a-b;   //para ordenar de menor a mayor
// });
// console.log(nummeros);


// var nummeros = [1, 3, 11, 99];
// nummeros.sort(function (a, b) {
//     return b-a;   //para ordenar de mayor a menor
// });
// console.log(nummeros);


// --------
// 00 01 02
// 10 11 12
// 20 21 22
// --------

var tablero = [
    {col: 0, row: 0}, {col: 0, row: 1}, {col: 0, row: 2},
    {col: 1, row: 0}, {col: 1, row: 1}, {col: 1, row: 2},
    {col: 2, row: 0}, {col: 2, row: 1}, {col: 2, row: 2}
];

tablero.sort(function (a,b) {
    return a.row - b.row || b.col - a.col;
})
console.log(tablero);

var personas = [
    {nombre : 'ZAA'},
    {nombre : 'AZZ'}
];

personas.sort(function (a, b) {
    if(a.nombre < b.nombre){
        return -1;
    }
    else if (a.nombre> b.nombre){
        return 1;
    }
    else {
        return 0;
    }
});