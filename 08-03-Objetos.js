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

let padre = new Persona('Juan', 'Pérez', 'jperez@email.com');
console.log(padre);

let madre = new Persona('Laura', 'Quintero', 'lquintero@email.com');
console.log(madre);

padre.nombre = 'Carlos';

console.log(padre);

console.log(padre.nombreCompleto());

console.log(madre.nombreCompleto());




// Sintaxis resumida para crear objetos
// La primera no se recomienda aunque es más formal
// mejor la segunda que es la simplificada

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function(){};