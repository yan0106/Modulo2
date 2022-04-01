// La búsqueda secuencial se define como la búsqueda en la que se compara elemento por elemento del vector/array 
// con el valor que buscamos.

// Devolverá el índice donde encontró al elemento. Recibe el valor a buscar y el arreglo donde buscará

function sequentialSearch(element, array) {
    for (var i in array) {
        if (array[i] == element) return i;
    }
    return -1;
}

var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];

sequentialSearch("g", letters);
