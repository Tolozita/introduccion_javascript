const numeros = [1,2,3,4,5,6,7,8,9,10]

let par = function nump(x) {
    return x%2 == 0
}

let resultadopar = numeros.filter(par)

console.log(resultadopar)


//el metodo filter retorna los valores que sean true 