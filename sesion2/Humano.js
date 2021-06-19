import Persona from './Persona.js';

class Humano extends Persona {
    constructor(nombre, edad) {
        super();
        this.nombre = nombre;
        this.edad = edad;
    }
}

export default Humano;