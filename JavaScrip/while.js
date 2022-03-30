// Ejemplo while simple: 

i = 0

while (i < 5) {
    console.log("Valor de i:", i);
    i = i + 1;
}

// Ejemplo do-while:

do {

    i = i + 1;

    resultado = resultado + i;

} while (i < 5);

// Ejemplo usando continue con while:

i = 0;
n = 0;
while (i < 5) {
    i++;
    if (i == 3)
        continue;
    n += i;
}

// Ejemplo usando break:

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
        if (i == 3)
            break;
        i++;
    }
    return i * x;
}