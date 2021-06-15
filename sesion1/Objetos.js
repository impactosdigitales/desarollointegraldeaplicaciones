/*
Un objeto es una colección de datos
nombrada y es infinitamente ramificable

Estructura:
{ CLAVE : VALOR } in deepth
{ CLAVE : { CLAVE : { CLAVE : VALOR }}}

JSON 

Java
Script
Object
Notation
*/
const obj1 = {
    'nombre' : 'Raul',
    'apellidos' : 'Zavaleta Zea',
    'direccion' : {
        'calle' : 'Av. Marmota',
        'numero' : 68,
        'int' : 3,
        'cp' : 76902
    },
    'lenguajes' : ['PHP', 'Java', 'JavaScript'],
    'expLaboral' : [
        { //0
            'Empresa' : 'UTEQ',
            'Puesto' : 'Programador'
        },
        { //1
            'Empresa' : 'Impactos Digitales',
            'Puesto' : 'Desarrollador FullStack'
        }
    ]
};

/*
La lectura de un objeto es por medio de sus claves
obj._CLAVE_
obj['_CLAVE_]
*/
// console.log(obj1.nombre);
// console.log(obj1['apellidos']);

//Agregar / editar un objeto
obj1.apellidos = 'Rodriguez';
obj1.telefono = '(442) 204 8329';

console.log(obj1.direccion.calle);
console.log(obj1.lenguajes[0]);
console.log(obj1.expLaboral[1].Puesto);