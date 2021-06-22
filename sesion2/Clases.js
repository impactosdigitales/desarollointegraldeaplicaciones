/*
Las clases en JS
Los modificadores de acceso NO existen en JS
*/
class Alumno {

    /*
    NO EXISTEN LOS ATRIBUTOS 
    :(
    */

    /*
    constructor que se invoca con la
    inicialización de una clase 
    */
   constructor(nombre, matricula) {
       this.nombre = nombre;
       this.matricula = matricula;
   }
}

class Persona {
    constructor() {
        
    }

    //Métodos
    /*
    No tiene tipo de dato y se ingresan a partir del nombre
    */
   datos() {
       console.log(`
       Nombre: ${this.getNombre()}
       Primer Apellido:  ${this.ap1}
       Segundo Apellido: ${this.ap2}
       `);
   }

   setNombre(nombre) {
       this.nombre = nombre;
   }

   getNombre() {
       return this.nombre;
   }
}

class Humano extends Persona {
    constructor(nombre, edad) {
        super();
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Maestro extends Humano {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
}

//Instanciamos la clase alumno
const alumno = new Alumno('Raul', '2007313035');
console.log(alumno.nombre);

const per = new Persona();
per.setNombre('Alfonso');
per.ap1 = 'Rodriguez';
per.ap2 = 'Zea';
per.datos();

const profe = new Maestro('Profe 1', 33);
profe.setNombre('Profe 1');
profe.ap1 = 'Z';
profe.ap2 = 'Z';
profe.datos();