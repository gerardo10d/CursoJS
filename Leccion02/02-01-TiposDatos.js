/*
Ejemplos de tipos de datos en JavaScript
Curso de Udemy
*/

// Tipo de dato String
var nombre = "Gerardo";
console.log("nombre");

nombre = 10; // La variable nombre cambia de tipo
console.log(typeof nombre); // Función para saber el tipo

// Tipo de dato numérico
var numero = 1000;
console.log(numero);

// Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Pérez",
    telefono : "7223406"
}
console.log(objeto);

// Tipo de dato booleano (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato function (las funciones también son un tipo de dato)
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("Mi símbolo")
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una función
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(x);
console.log(typeof x);

// También se puede así
x = undefined
console.log(x);

// Tipo null (significa ausencia de valor)
var y = null;
console.log(y);
console.log(typeof y);

// Tipo arreglo (en JS son tipo object)
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

// Una empty string sigue siendo tipo string
var z = '';
console.log(z);
console.log(typeof z);

/*
Concatenar cadenas
*/

var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Rodríguez';
console.log(nombreCompleto2);

// Trata al número como texto
// JS evalúa de izquierda a derecha
var x = nombre + 219;
console.log(x);
console.log(typeof x);

// Otro caso
x = 2 + nombre;
console.log(x);
console.log(typeof x);

/*
Uso básico de var, let y const

var ya no es recomendado hoy en día
para variables se debe usar let
para constantes se debe usar const

También se puede definir sin ninguna de esas palabras (estilo Python)
pero no es recomendado

*/

// Buenas prácticas para nombres de variables
let nombreCompleto3 = 'Juan Rodríguez';
console.log(nombreCompleto3);

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);