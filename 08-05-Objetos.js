let persona1 = {
    nombre: 'Juan',
    apellido: 'Pérez',
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de call para usar el método persona1.nombreCompleto
// con los datos del persona2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));