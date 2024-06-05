let animales=["Gato","Pajaron","Elefante","Perro"]
let Fanim = function(array) {
    return array == "Perro"
}

let resultado = animales.find(Fanim)
console.log(resultado)


// Find retorna El valor del primer elemento que pasa la prueba.
// De lo contrario regresa undefined.


// indexOf()	The index of the first element with a specified value
// lastIndexOf()	The index of the last element with a specified value
// find()	The value of the first element that passes a test
// findIndex()	The index of the first element that passes a test
// findLast()	The value of the last element that passes a test
// findLastIndex()	The index of the last element that passes a test