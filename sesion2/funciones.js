/*
funcion: bloque de código relacionado englobado 
por medio de un identificador

1.- Funciones nombradas (funciones tradicionales)
2.- Funciones anónimas
3.- Funciones flecha (Arrow Functions)
*/

// 1.- Funciones nombradas
// function _NOMBRE_ ([PARAMS....]) {}
function hola() {
    console.log('Hola');
}
hola();

function hola2(mensaje = 'Mensaje defecto') {
    console.log(mensaje);
}
hola2();
hola2('Hola mundo desde una función');

/*
Las Funciones puden o no 
retornar valores
*/
function suma(a, b, c) {
    let r = a + b + c;
    console.log('Suma:',r);
}
suma(1, 2, 3);
suma('Raul ', 'Zavaleta ', 'Zea');

function suma2(a, b, c) {
    let r = a + b + c;
    return r;
}

const rsuma = suma2(4, 5, 6);
console.log(rsuma);


