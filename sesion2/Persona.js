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

export default Persona;