/*
Las funciones anónimas tienen la 
particularidad de carecer de un identificador
lo que les permite ser altamente transportadas
*/

// 2.- funcion anónima
// const c1 = function() {};
/*
function suma(a, b, c) {
    let r = a + b + c;
    console.log('Suma:',r);
}
*/
const suma = function (a = 0, b = 0, c = 0) {
    let r = a + b + c;
    console.log('Suma:', r);
};

suma(1, 2, 3);

let b = suma;
b(4, 5, 6);
b = 8;
console.log(b);

/*
Crear un objetos con 4 operaciones 
básicas (2 dígitos)
Suma
Resta
Multiplicación
División 
*/
const operaciones = {
    suma : function (a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
    },
    resta : function (a, b) {
        console.log(`${a} - ${b} = ${a - b}`)
    },
    multiplicacion : function (a, b) {
        console.log(`${a} X ${b} = ${a * b}`)
    },
    division : function (a, b) {
        console.log(`${a} ÷ ${b} = ${a / b}`)
    },
    raiz : function (a) {
        console.log(`√${a} = ${Math.sqrt(a)}`)
    }
};

operaciones.suma(3, 76);
operaciones.resta(23, 66);
operaciones.multiplicacion(4, 23);
operaciones.division(3, 0);
operaciones.raiz(25);
//Agregar funcion que muestre la raíz cuadrada
//llamen al indice/prop del objeto 'raiz' => Math.sqrt(x)

// operaciones.division = function (a, b) {
//     if (b == 0) {
//         console.log('ERROR');
//     }

//     else {
//         console.log(`${a} ÷ ${b} = ${a / b}`);
//     }
// }

// operaciones.division = function (a, b) {
//         console.log(
//             b == 0 ? //Condición
//             'ERROR' //SI cumple
//             : 
//             `${a} ÷ ${b} = ${a / b}` //NO
//         );
// }

operaciones.division = function (a, b) {
            (b == 0 ? 
            console.error('ERROR') : 
            console.log(`${a} ÷ ${b} = ${a / b}`));
    }
operaciones.division(3, 0);




