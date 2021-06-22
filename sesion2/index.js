//Importamos a la clase Alumno
import Alumno from './Alumno.js';
import Maestro from './Maestro.js';
import Persona from './Persona.js';

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