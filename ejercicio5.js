const mayorEdad = [17,18,19,20,21,22,23,24]

let mayor= function(x) {
    return x >= 18
}

let ingreso = mayorEdad.every(mayor)

console.log(ingreso)



// Si todos los elementos cumplen la condicion retorna true pero si algun valor
// no cumple la condicion retorna un false 