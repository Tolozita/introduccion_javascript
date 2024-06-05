// Supongamos que tenemos dos promesas que se resuelven con números
let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000); // se resuelve con 10 después de 1 segundo
});

let promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(20), 2000); // se resuelve con 20 después de 2 segundos
});

let promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(30), 2000); // se resuelve con 20 después de 2 segundos
});

// Usamos Promise.all para esperar a que las promesas se resuelvan
Promise.all([promesa1, promesa2,promesa3])
    .then(resultados => {
        // resultados es un array con los valores de ambas promesas
        let suma = resultados[0] + resultados[1] + resultados[2];
        console.log('La suma de las dos promesas es:', suma);
    })
    .catch(error => {
        // En caso de que alguna promesa falle
        console.error('Una de las promesas falló:', error);
    });

    