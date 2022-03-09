// Se puede declarar antes o después de llamarla, funciona igual (se llama Hoisting)
// Hoisting significa "mover las declaraciones al principio"

miFuncion(2 , 4)

// Declaración de la función
function miFuncion(a, b){
    console.log('Suma: ' + (a + b));
}

// Llamando a la función
miFuncion(5, 4)

function factorial(n){
    let producto = 1;
    for(let i = 1; i <= n; i++){
        producto *= i;
    }
    return producto;
}

function factorial_recursivo(n){
    if(n == 1){
        factorial = 1;
    }
    else{
        factorial = n * factorial(n-1)
    }
    return factorial;
}

console.log(factorial(5));
console.log(factorial_recursivo(5));

// Funciones tipo expresión o anónimas -------------------------

//Declaración de función tipo anónima
let sumar = function(a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

// Funciones de tipo self-invoking----------------------
// No se pueden reutilizar, solo se llama una vez
// con el par de paréntesis al final con los parámetros
(function(a, b){
    console.log('Ejecutando la función: ' + (a+b));
})(3, 4);


// Funciones flecha - Arrow functions---------------
// No requiere la palabra function ni return
// Se usa const para definir el espacio donde se almacena
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);

// Parámetros y argumentos de una función
/*
Parámetros son las variables que se colocan
al definir la función. Argumentos son los valores que se
envían cuando se llama la función. No necesariamente deben
coincidir
*/

let sumarP = function(a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumarP(3, 6, 7);
console.log(resultado);