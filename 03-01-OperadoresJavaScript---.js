/*
// Ejercicio de número par

let a = 9;

if (a % 2 == 0){
    console.log('Es un número par');
}
else{
    console.log('Es un número impar');
}

// Es mayor de edad o no
let edad = 20, adulto = 18;

if (edad >= adulto){
    console.log('Es un adulto');
}
else{
    console.log('Es menor de edad');
}

// ------------------------------------

// Operador lógico and es &&
// Verificar si un número está en un rango
let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax){
    console.log('Dentro del rango');
}
else{
    console.log('Fuera del rango');
}


// Operador lógico or es ||
// Ejemplo
let vacaciones = true, diaDescanso = false;
if (vacaciones || diaDescanso){
    console.log('El padre puede asistir');
}
else{
    console.log('El padre está ocupado');
}



// Operador ternario

let resultado = 1 > 2 ? 'Verdadero' : 'Falso';
console.log(resultado);

// Ejemplo de número par con operador ternario
let numero = 8;
esPar = numero % 2 == 0 ? 'Es par' : 'No es par';
console.log(esPar);




// Convertir de string a number
// La función isNaN verifica si es un 'Not a Number'

let miNumero = '17xx';

let edad = Number(miNumero);

console.log(typeof edad);

if (isNaN(edad)){
    console.log('Edad no es un número');
}
else{
    if (edad >= 18){
        console.log('Puede votar');
    }
    else{
        console.log('Muy joven para votar');
    }
    
    // Con operador ternario
    
    console.log(edad >= 18 ? 'Puede votar' : 'No puede votar');
}


*/


// Ejemplos de precedencia de operadores
let x = 5;
let y = 10;
let z = ++x + y--;