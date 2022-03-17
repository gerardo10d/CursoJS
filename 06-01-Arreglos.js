// Forma antigua de declarar un arreglo
//let autos = new Array('BMW', 'Volvo', 'Audi');

// Forma moderna
const autos = ['BMW', 'Volvo', 'Audi'];
console.log(autos);

// Índices inician desde cero 0
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

autos[1] = 'Alfa Romeo'

autos.push('Jaguar') // Agrega elemento al final del arreglo

console.log(autos);

console.log(autos.length); // Tamaño del arreglo

autos[5] = 'Cadillac'

console.log(autos); // Índice 4 queda vacío

// Preguntar si es arreglo
console.log(typeof autos); // No es muy útil para saber si es arreglo
console.log(Array.isArray(autos)); //Usar la clase Array
console.log(autos instanceof Array); // Otra opción adecuada