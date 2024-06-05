// Define la función asincrónica
async function obtenerDatosYMostrarInformacion() {
    try {
        // Usa fetch para obtener el archivo JSON local
        const response = await fetch('datos.json');

        // Verifica si la respuesta es correcta
        if (!response.ok) {
            throw new Error('No se pudo obtener el archivo JSON');
        }

        // Convierte la respuesta a un objeto JavaScript
        const datos = await response.json();

        // Manipula los datos para mostrar información específica
        // Por ejemplo, mostrar los nombres de las personas mayores de 30 años
        const mayoresDeTreinta = datos.filter(persona => persona.edad > 30);
        console.log('Personas mayores de 30 años:');
        mayoresDeTreinta.forEach(persona => {
            console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

// Llama a la función
obtenerDatosYMostrarInformacion();