// While---------------------------------------

let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}

console.log('Fin del ciclo while');


// Do while---------------------------------------

contador = 0;
do{
    console.log(contador);
    contador++;
}while(contador < 3);

console.log('Fin ciclo do while');


// For-------------------------------------------

for(let contador = 0; contador < 3; contador++){
    console.log(contador);
}
console.log('Fin del ciclo for');


// Break------------------------------------------
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}
console.log('Fin del ciclo for');

// Continue -----------------------------------------
for(let contador = 1; contador <=10; contador++){
    if (contador % 2 !== 0){
        continue; // ir a la siguiente iteración
    }
    else{
        console.log(contador);
    }
}