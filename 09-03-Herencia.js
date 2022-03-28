/*
Ejemplo usando herencia y variable estática contador
con id único para cada instancia
*/

class Persona{

    // Atributo estático de la clase
    static contador = 0;
    
    // Atributo no estático
    email = 'Valor por defecto'

    // Método estático que funciona como constante estática
    static get MAX_OBJ(){
        return 5; // Cantidad máxima de instancias, por ejemplo
    }

    constructor(nombre, apellido){
        // guion bajo para diferenciar del método get
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPersona = ++Persona.contador;
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
    // No requiere colocar function ni nada, solo el nombre del método
    nombreCompleto(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el método de la superclase Object
    toString(){
        /* Se aplica polimorfismo
           múltiples formas en tiempo de ejecución
           el método que se ejecuta depende si es una
           referencia de tipo padre o de tipo hijo
        */
        return this.nombreCompleto();
    }

    //Método estático, asociado solo a la clase, no a sus instancias
    static saludar(){
        console.log('Saludos desde método static');
    }
    
}


class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llamada al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    // Sobreescritura de método
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}


let persona1 = new Persona('Carlos', 'Rodriguez');
console.log(persona1.toString());

let empleado1 = new Empleado('María', 'Jiménez', 'Sistemas');
console.log(empleado1.toString());

console.log(Persona.contador);

let persona2 = new Persona('Carla', 'Ramirez');
console.log(persona2.toString());

console.log(Persona.contador);

/* Si intentamos cambiar el valor como si fuera una variable
no funciona porque realmente es un método, mantiene el valor
y funciona como si fuera una constante, aunque en realidad es
un método */
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);