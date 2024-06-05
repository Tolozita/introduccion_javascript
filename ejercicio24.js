const objetivo = {
    mensaje: "Hola, Mundo"
  };

  const handler = {
    get: function(target, property) {
      console.log(`Leyendo la propiedad "${property}"`);
      return property in target ? target[property] : `La propiedad "${property}" no existe`;
    },
    set: function(target, property, value) {
      console.log(`Escribiendo el valor "${value}" en la propiedad "${property}"`);
      target[property] = value;
      return true; // Indica que la operación de escritura fue exitosa
    }
  };

  const proxy = new Proxy(objetivo, handler);

  console.log(proxy.mensaje); // "Leyendo la propiedad "mensaje"" y luego "Hola, Mundo"
console.log(proxy.otro);    // "Leyendo la propiedad "otro"" y luego "La propiedad "otro" no existe"

proxy.mensaje = "Hola, Proxy"; // "Escribiendo el valor "Hola, Proxy" en la propiedad "mensaje""
console.log(proxy.mensaje); // "Leyendo la propiedad "mensaje"" y luego "Hola, Proxy"