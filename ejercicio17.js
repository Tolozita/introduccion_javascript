// Función para verificar si una cadena comienza con "A"
function comienzaConA(nombre) {
    return nombre.startsWith('A');
}

// Realiza la llamada al archivo JSON local
fetch('datos.json')
    .then(response => {
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        // Convierte la respuesta en un objeto JavaScript
        return response.json();
    })
    .then(data => {
        // Filtra los elementos cuyos nombres comienzan con "A"
        const filtrados = data.filter(elemento => comienzaConA(elemento.nombre));
        // Muestra los resultados filtrados en la consola
        console.log('Elementos filtrados:', filtrados);
    })
    .catch(error => {
        // Maneja cualquier error que ocurra durante la llamada o el procesamiento
        console.error('Error:', error);
    });