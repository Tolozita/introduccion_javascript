let i = 0

setTimeout(()=> alert(i),100)

for(let j = 0;j<1000000;j++){
    i++
}


// el setTimeout Se ejecuta despues del bucle y alert() muestra el valor de i despues de 100 ms cuando es igual que J
// ejecutará la función setTimeout inmediatamente, pero el tiempo de espera de 100 ms comenzará a contar después de que termine la ejecución del bucle for.
//  Esto se debe a que JavaScript es de un solo hilo y ejecuta operaciones secuencialmente.