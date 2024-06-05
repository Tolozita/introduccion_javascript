function devuelvePromesa() {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        let todoCorrecto = true;
        if (todoCorrecto) {
          resolve('Promise Resuelta');
        } else {
          reject('Algo ha fallado')
        }
      }, 3000)
    })
  }
  
  devuelvePromesa()
    .then( respuesta => console.log(respuesta) )
    .catch( error => console.log(error) )