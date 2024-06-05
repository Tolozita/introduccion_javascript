let animales=["Gato","Pajaron","Elefante","Perro"]
let Fanim = function(array) {
    return array == "Perro"
}

let resultado = animales.findIndex(Fanim)
console.log(resultado)

//findIndex nos devuelve la posicion del primer elemento que cumple la condicion
