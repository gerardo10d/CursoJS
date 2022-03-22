// Tipos primitivos
// No tienen propiedades ni métodos

let x = 10;
// La propiedad length de un primitivo no esta definida
console.log(x.length);

// Tipo objeto (forma más común de crearlo)
let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Se puede acceder a las propiedades con .
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

console.log(persona);

// Otra forma de acceder a las props
console.log(persona['nombre']);

// For in (se recorren las propiedades y sus valores)
for(nombrePropiedad in persona){
    // Recorrer propiedades
    console.log(nombrePropiedad);
    // Recorrer valores de las propiedades
    console.log(persona[nombrePropiedad]);
}


// Objeto definido de otra forma
let persona2 = new Object(); // Objeto vacío
// A partir de aquí se asignan propiedades al objeto
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '7223406';
// Se accede igual a las propiedades
console.log(persona2.telefono);


// Agregar una propiedad al objeto
persona2.edad = 28

console.log(persona2);

// Eliminar propiedad
delete persona2.edad;

console.log(persona2);



// Acceder a propiedades de objetos

// Concatenando cada valor de las propiedades
console.log(persona2.nombre + ', ' + persona2.telefono);

// Con for in
for(nombrePropiedad in persona2){
    console.log(persona2[nombrePropiedad]);
}

// Con el método values de Object, devuelve un array
let personaArray = Object.values(persona2);
console.log(personaArray);

// Convirtiendo a una cadena
let personaString = JSON.stringify(persona2);
console.log(personaString);


// Método get en objetos

