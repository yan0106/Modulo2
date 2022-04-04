// Cuando se utiliza el método sort(), los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto:
// El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];

equipos.sort(); 

// se espera ['Bayern Munich', 'Juventus', 'Manchester Utd', 'Real Madrid']

// Para comparar números en lugar de strings, la función de comparación puede simplemente restar b de a.
// Por ende si queremos ordenar los números en orden ascendente, esta vez necesitamos restar el primero parámetro (a) del segundo (b):

var numbers = [4, 2, 5, 1, 3];

numbers.sort(function(a, b) {

  return a - b;

}); // se espera --> 1, 2, 3, 4, 5



