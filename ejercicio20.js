// Función que retorna una promesa que se resuelve después de un tiempo específico
function crearPromesa(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resuelta después de ${tiempo} ms`);
        }, tiempo);
    });
}

// Crear tres promesas con diferentes intervalos de tiempo
const promesa1 = crearPromesa(1000); // 1 segundo
const promesa2 = crearPromesa(2000); // 2 segundos
const promesa3 = crearPromesa(3000); // 3 segundos

// Utilizar Promise.all() para esperar a que todas las promesas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log('Todas las promesas se han resuelto:');
        resultados.forEach(resultado => console.log(resultado));
    })
    .catch((error) => {
        console.error('Hubo un error con las promesas:', error);
    });