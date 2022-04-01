Math.max(1, 2, 3, 4, 5); // para obtener el valor máximo. resultado esperado: 5

Math.min(1, 2, 3, 4, 5); // para obtener el valor mínimo. resultado esperado: 1

// estas funciones es que no permiten entradas de tipo array, solamente de tipo numérico.

// La forma más fácil de aplicar una función a un array es utilizando el método apply().
// Simplemente se tiene que aplicar apply() a la función pasando como primer parámetro null y como segundo parámetro el array. 
// Así se puede obtener el máximo o mínimo de un array simplemente con el siguiente código:

Math.max.apply(null, values) // resultado esperado: 5

Math.min.apply(null, values) // resultado esperado: 1


