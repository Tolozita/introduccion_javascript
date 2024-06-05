
const array=[1,2,3,4,5,6,7]   
console.log(array)

function multiplicacion(x) {
    return x*2
}

let resultado = array.map(multiplicacion)

console.log(resultado)