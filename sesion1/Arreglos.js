/*
Arreglos
Colecciones de datos dinámicas

Existen 3 formas de crear arreglos
1.- inicializando el tamaño del arreglo
2.- inicializando el contenido del arreglo
3.- inicializando un arreglo vacío

Los arreglos en JS con CONSTANTES
*/

//forma 1.- inicializando el tamaño del arreglo
const arr1 = new Array(5);

//forma 2.- inicializando el contenido del arreglo
const arr2 = new Array(
    'Raúl', //0
    'Zavaleta', //1 
    33,  //2
    1.80,  //3
    'raul@impactos.com' //4
);

//forma 3.- inicializando un arreglo vacío
const arr3 = [];
// console.log('arr1=', arr1);
// console.log('arr2= '+arr2);
// console.log(`arr3=${arr3}`);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

//Invocar una pos en particular
// console.log(arr1[100]);
// console.log(arr2[0]);
// console.log(arr3[100]);

//Adicionar elementos a un arreglo en JS 
//Se agrega al final del arreglo
/*
push(_ELEM_)
*/
arr1.push(1);
arr2.push(2);
arr3.push(3);

//Adicionar elementos al inicio 
//de un arreglo
//unshift(_ELEM_)
arr1.unshift(3);
arr2.unshift(2);
arr3.unshift(1);

console.log(arr1);
console.log(arr2);
console.log(arr3);

/*
Para eliminar elementos de una rreglo tenemos:
1.- pop() -> elimina la ultima pos del arreglo
2.- shift() -> elimina la primera por del arreglo
3.- splice(_INI_, _CUANTOS_)
*/

arr1.pop();
arr3.shift();
//Borrar correo del arreglo 2
arr2.splice(5, 1);

console.log('\n');

console.log(arr1);
console.log(arr2);
console.log(arr3);