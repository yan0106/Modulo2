
console.log("*****Elementos del Documento*****");

console.log(window.document); // nos mustra el HTML, todas sus partes.

console.log(document); // no es necesario estar poniendo windows.document, windows.alert, window.config simplemente ponemos eso.

console.log(document.head); // gracias a la anotación del punto es como vamos a ir accediendo a los nodos del DOM.

console.log(document.body); // otro ejemplo

console.log(document.documentElement); // para obtener la etiqueta HTML pero no trae el doctype.

console.log(document.doctype); // este nos trae el doctype.

console.log(document.characterSet); // para traer los caracteres del documento.

console.log(document.title); // para taer el título

console.log(document.links); // para que me traiga todos los enlaces que tengo en HTML.

console.log(document.images); // para imágenes

console.log(document.forms); // nos devuelve los formularios que tenga el documento.

console.log(document.styleSheets); // accedemos a las hojas de estilo enlazadas en el documento. 

console.log(document.scripts); // trae los script que tengamos en el html.

setTimeout(()=> {
    console.log(document.getSelection().toString()); // cuando seleccionamos algo en una página también lo podemos mapear.
},3000);

document.write("<h2>Hola Mundo desde el DOM</h2>"); // podemos escibir texto en el documento, desde Javascript, aunque no es una buena práctica.

// Métodos:

console.log(document.getElementsByTagName("li")); // capturamos ementos HTML por nombre de etiqueta. nos trae una colección de los mismos.
console.log(document.getElementsByClassName("cara")); //capturamos elementos HTML por nombre de clase.
console.log(document.getElementsByName("nombre")); // nos permite acceder a través del atributo name, por ejemplo en los
//formularios usamos ese atributo name. El lenguaje del lado del servidor lo interpreta como una variable de tipo post o de tipo get.
console.log(document.getElementById("menu")); // para buscar elementos ID

/* */
console.log(document.querySelector("#menu")); // "consulta de selector", esto remplazó a los 3 primeros getElements.
// Recibe como parámetro un selector válido de css, un ID, una clase. Acá si hay que especificar el . o el #
// Solamente va a traer el primer tipo de selector que le hayamos especificado.
// Devuelve una NodeList, no una colección. Es un tipo diferente de dato.
console.log(documet.querySelectorAll("#menu")); // trae todos los selectores del tipo que le hayamos indicado.
// Devuelve una NodeList, no una colección
// Con los arreglos comparten la propiedad .length , .forEach:
document.querySelectorAll("a").forEach((el)=>console.log(el));
// como es un conjunto de elementos, si yo quiero acceder a un elemento en particular, puedo utilizar [2], como en los arreglos.
// Me trae el elemento de ese índice.




