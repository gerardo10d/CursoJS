// Función constructor de objetos tipo Persona

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Método
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Agregar propiedad a los objetos Persona
// sin utilizar el constructor
// se crea la propiedad tel con un valor por defecto
Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Pérez', 'jperez@email.com');
padre.tel = '11223344'
console.log(padre.tel);

let madre = new Persona('Laura', 'Quintero', 'lquintero@email.com');
console.log(madre.tel);