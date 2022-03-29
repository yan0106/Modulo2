/* Ejemplo de ciclo for */

/* var miArreglo = [];

for (var i = 0; i <= 10; i = i++) {
    miArreglo.push(i);
}
console.log(miArreglo); */

/* Otro ejemplo de ciclo for */

/* for (var i = 5; i < 10; i++) {
    console.log("Número:" + i);
} */

/* Ciclo for: números impares */

/* var miArreglo = [];

for (var i = 0; i <= 10; i += 2) {
    miArreglo.push(i);
}
console.log(miArreglo); */

/*Ciclo for: contar hacia atrás */

/* for (var i = 15; i >= 10; i--) {
    console.log(i);
}
 */
/*Iterar sobre un arreglo con un ciclo "for":*/

/* var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
total += miArreglo[i];
}

console.log(total); */

/* Otro ejemplo de iteración con un ciclo for sobre un arreglo */

var lenguajes = [ "JavaScritp", "Paython", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++ ) {
console.log(lenguajes[i].toUpperCase()); /* toUpperCase --> para convertir en mayúscula */
}
