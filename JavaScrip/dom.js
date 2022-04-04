
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

console.log(document.scripts); // 

setTimeout(()=> {
    console.log(document.getSelection().toString()) // cuando seleccionamos algo en una página también lo podemos mapear.
},3000);

document.write("<h2>Hola Mundo desde el DOM</h2>"); // podemos escibir texto en el documento, desde Javascript, aunque no es una buena práctica.


