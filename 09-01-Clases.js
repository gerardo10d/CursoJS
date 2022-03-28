// No funciona el hoisting con clases,
// Entonces se debe crear la clase antes de instanciarla

class Persona{
    constructor(nombre, apellido){
        // guion bajo para diferenciar del método get
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}



let persona1 = new Persona('Carlos', 'Rodriguez');
console.log(persona1);

let persona2 = new Persona('Juan', 'Pérez');
console.log(persona2);

// Llamada al método get, no requiere paréntesis
console.log(persona1.nombre);

// Uso del método set, no requiere paréntesis
persona1.nombre = 'Pepe';
console.log(persona1.nombre);