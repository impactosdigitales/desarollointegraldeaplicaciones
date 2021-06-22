/*
Las funciones flecha son funciones anónimas 
con una sintaxis compacta
Operador => Operador flecha (asignación)

const a = function() {};
const a = () => {};
*/
const holaFA = function () {
    console.log('Hola');
}

const holaFF = () => console.log('Hola');
holaFF();

const suma = (a, b, c) => console.log(a + b + c);
suma(2, 4, 6);

const division = (a, b) => {
    if (b == 0) {
        console.log('ERROR');
        return;
    }
    console.log(a / b);
};
division(12, 6);


const operaciones = {
    suma : (a, b) => console.log(`${a} + ${b} = ${a + b}`),
    resta : (a, b) => console.log(`${a} - ${b} = ${a - b}`),
    multiplicacion : (a, b) => console.log(`${a} X ${b} = ${a * b}`),
    division : (a, b) => console.log(b == 0 ? 'ERROR' : `${a} ÷ ${b} = ${a / b}`),
    raiz : (a) => console.log(`√${a} = ${Math.sqrt(a)}`)
};
