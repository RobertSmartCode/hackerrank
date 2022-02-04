let crearArchivo =  (n=2 ) => {
    let data = '';
    const hasta=10
    for (let i = 1; i <= hasta; i++) {
        data += `${ n } x ${ i } = ${ n * i }\n`;
      
    }
    console.log(data)
    
  }
  crearArchivo() 


//  let data = '';
//   const A= arr.reverse();
//   for(var i=0; i<n; i++){
//       data += `${A[i]} `;
//   }
//   console.log(data)