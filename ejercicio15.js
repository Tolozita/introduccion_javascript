function devuelvePromesa() {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        let todoCorrecto = false;
        if (todoCorrecto) {
          resolve('Promise Resuelta');
        } else {
          reject('Error: Promise Rechazada')
        }
      }, 2000)
    })
  }
  
  devuelvePromesa()
    .then( respuesta => console.log(respuesta) )
    .catch( error => console.log(error) )