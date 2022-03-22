// Método get en objetos

let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'es',

    set lang(lang){
        this.idioma = lang.toUpperCase();
    },

    get lang(){
        return this.idioma.toUpperCase();
    },
    
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }


}

// Ya no requiere paréntesis en la llamada
console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = 'en';

console.log(persona.lang);