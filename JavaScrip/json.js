// JSON: Javascript Object Notation (Notación de Objetos de Javascript).

const json = {
    cadena: "yan",
    numero: 32,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "@yanndiaz_",
        email: "yandiradiaz@hotmail.com"
    },
    nulo: null
}

console.log(json);

console.log(JSON.parse("[1,2,3]")); // analiza una anotación json, es decir, una cadena de texto, 
// y la va a convertir en un tipo de dato que js valide (como un objeto, un arreglo, un booleano, etc)

console.log(JSON.stringify(true)); // conviere un objeto o valor de JavaScript en una cadena de texto JSON.

