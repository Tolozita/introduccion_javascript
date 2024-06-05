// Función simulada que representa una operación asincrónica
async function processElement(element) {
    // Simula una espera de 1 segundo
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Processed: ${element}`);
  }
  
  // Función principal que usa un bucle para procesar una lista de elementos
  async function processList(elements) {
    for (const element of elements) {
      await processElement(element);
    }
  }
  
  // Ejemplo de uso
  const elements = ['element1', 'element2', 'element3', 'element4'];
  
  processList(elements)
    .then(() => console.log('All elements processed'))
    .catch(error => console.error('Error processing elements:', error));