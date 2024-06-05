function imprimirNumeros(desde, hasta) {
    // Definición de la función que imprimirá los números
    const intervalo = setInterval(() => {
        // Imprimir el número actual
        console.log(desde);
        // Verificar si hemos alcanzado el número final
        if (desde >= hasta) {
            // Detener el intervalo si hemos alcanzado el número final
            clearInterval(intervalo);
        }
        // Incrementar el número actual para la próxima impresión
        desde++;
    }, 1000); // Intervalo de 1000 milisegundos (1 segundo)
}

// Ejemplo de uso:
imprimirNumeros(1, 5); 

// ------------------------------------------------------------------


function imprimirNumeros(desde, hasta) {
    // Función interna para imprimir y programar la impresión del siguiente número
    function imprimirYProgramar() {
        console.log(desde); // Imprime el valor actual de 'desde'
        desde++; // Incrementa el valor de 'desde' para imprimir el siguiente número en la próxima iteración
        if (desde <= hasta) { // Verifica si el valor actual de 'desde' es menor o igual que 'hasta'
            setTimeout(imprimirYProgramar, 1000); // Si es así, programa la llamada a 'imprimirYProgramar' después de 1000 milisegundos (1 segundo)
        }
    }

    setTimeout(imprimirYProgramar, 1000); // Programa la llamada inicial a 'imprimirYProgramar' después de 1000 milisegundos (1 segundo)
}

// Ejemplo de uso:
imprimirNumeros(1, 5); // Llama a la función 'imprimirNumeros' para imprimir los números del 1 al 5 con un intervalo de 1 segundo entre cada uno
