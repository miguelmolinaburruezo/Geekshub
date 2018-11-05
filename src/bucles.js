//bucles while
// var contador = 0;
// var numero = 14;
// var arr= [1, 2, 3]
//
// var res= arr[0] ? arr[0] : numero;
// console.log(res, arr.length);
//
//
//
// while( contador < arr.length ){
//     console.log('Bucle while /', contador, arr[contador] );
//
//     contador++;
// }
//
//
//                                  DO WHILE//

// var contador= 0;
// do{
//     console.log(contador)
//     contador++;
// }while (contador > 1);


//                                  FOR//

// for ( contador = 0 ; contador < 10; contador++){
//     console.log(contador)
// }
//
//
// var numero =14;
// var arr[11, 22, 33];
//
// for(i=0; i<arr.length; i++){
//
// }

                                    //BUCLES FOR ANIDADOS//


// ARRAY DE DOS DIMENSIONES

    // [0,0][0,1][0,2]
    // [1,0][1,1][1,2]
    // [2,0][2,1][2,2]

// var arr=[]
//
// for(var i = 0; i < 3; i++){
//     arr[i]=[];
//
//     for(var j =0; j<3; j++){
//         console.log(i, j)
//         arr[i][j] = j+1;
//
//     }
// }
//
// console.log(arr);
//
// for(var i=0; i<arr.length; i++){
//     console.log('-------------')
//     var str='|';
//     for(var j=0; j<arr[i].length;j++){
//         str += ' ' + arr [i][j] + ' |';
//     }
//     console.log(str);
//
//     if(i === arr.length - 1){
//         console.log('-------------')
//     }
// }

// console.log('BUCLE WHILE')
//
//
//
// var i=0;
// var array=[[1,2],[1,2],[1,2]];
//
// while(i<array.length){
//     console.log('-------------')
//  var j=0;
//     while(j < array[i].length){
//         console.log(i)
//         j++;
//     }
//     console.log(array)
//     i++;
// }
// console.log('-------------')


                                                // FOR IN//
// var obj = {
//     name: 'Miguel',
//     job: 'Intento de programador'
// };
//
// for(var propiedad in obj){
//     console.log(propiedad + ': ' + obj[propiedad]);
// }
//
//
//                                                 // FOR OFF//
//
// var array = [11, 22, 33];
//
// for (var valor of array){
//     console.log(valor);
// }

//EJERCICIO STAND IN LINE//

function nextInLine(arr, item) {
    // Your code here
    arr.push(item)
    return arr.shift() || item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

var i= testArr[3];
console.log(i);
testArr[i]= testArr[i+1];
console.log(i);


for (var i = 0;i<testArr.length;){
    testArr[i]= testArr[i+1];
    i++;
 }
 console.log(i);