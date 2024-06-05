// Función que retorna una promesa que se resuelve o se rechaza después de un tiempo específico
function crearPromesa(tiempo, debeResolver) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (debeResolver) {
                resolve(`Resuelta después de ${tiempo} ms`);
            } else {
                reject(`Rechazada después de ${tiempo} ms`);
            }
        }, tiempo);
    });
}

// Crear tres promesas con diferentes comportamientos
const promesa1 = crearPromesa(1000, true);  // Se resuelve después de 1 segundo
const promesa2 = crearPromesa(2000, false); // Se rechaza después de 2 segundos
const promesa3 = crearPromesa(3000, true);  // Se resuelve después de 3 segundos

// Utilizar Promise.allSettled() para esperar a que todas las promesas se resuelvan o se rechacen
Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log('Resultados de todas las promesas:');
        resultados.forEach((resultado, indice) => {
            if (resultado.status === 'fulfilled') {
                console.log(`Promesa ${indice + 1} resuelta: ${resultado.value}`);
            } else {
                console.log(`Promesa ${indice + 1} rechazada: ${resultado.reason}`);
            }
        });
    });