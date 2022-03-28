/* Ejemplos de Sentencias Switch */

/* cuando tenemos un número finito de opciones que queremos evaluar */

/* Ejemplo 1 */

function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}
console.log(clasificarValor(1));

/* Ejempplo 2 */

switch (producto) {
    case "pizza":
        console.log("La pizza básica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("Las hamburguesas cuestan $6.78");
        break;
    case "helado":
        console.log("El helado cuesta $2.8");
        break;
}
console.log("Luego de switch")

/* Sentencia Switch: Opción Predeterminada */

function seleccionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2: "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Inglés";
            break;
    }
    return idioma;
}
console.log(seleccionarIdioma(1));

/* Sentencia Switch múltiples casos: */

