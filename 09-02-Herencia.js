// No funciona el hoisting con clases,
// Entonces se debe crear la clase antes de instanciarla

class Persona{

    // Atributo estático de la clase
    static contador = 0;
    
    // Atributo no estático
    email = 'Valor por defecto' 

    constructor(nombre, apellido){
        // guion bajo para diferenciar del método get
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contador++;
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
        return this._nombre + ' ' + this._apellido;
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
console.log(persona1);

let empleado1 = new Empleado('María', 'Jiménez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre); // Hereda el método de la clase padre
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

Persona.saludar();// El resultado aparece donde se definió y en consola

console.log(Persona.contador);

console.log(persona1.email);