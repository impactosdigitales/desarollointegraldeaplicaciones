const autos = [
    'Jetta',
    'Golf',
    'Caribe',
    'Audi A4',
    'Ibiza',
    'Topaz', 
    'Tsuru',
    'Combi',
    'Trailer',
    'ADO'
];

// for (let i = 0; i < autos.length; i++) {
//     console.log(autos[i]);
// }

/*
forEach
map

Ciclos autónomos para iterar colecciones
forEach SOLO recorre

map RECORRE Y PERMITE RETORNAR UN VALOR
POR CADA ITERACIÓN

_COLECCION_.forEach(_ELEM_ => FF)
*/
autos.forEach((a, indice) => {
    if (a.length <= 5) {
        console.log(indice, a);
    }
});

autos.map((coche, i) => console.log(i, coche));
