const numeros = [3,5,7,8]

let par = function nump(x) {
    return x%2 == 0
}

let resultadopar = numeros.some(par)

console.log(resultadopar)

// El metodo Some retorna true si algun valor cumple la condicion de resto si todos
// los elementos no cumplen la funcion retorna false 

//si tenemos 5 valores y de esos 4 no cumplen la condicion y 1 si la cumple retorna true