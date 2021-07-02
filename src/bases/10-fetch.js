const apiKey ='5gtVYcwzf0bfLJDArE6A85NXcpwKPYYS';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion
    .then( resp => resp.json() ) //esto regresa una promesa i es pasada al siguiente .then  .
    .then( data => {
        const { url } = data.data.images.original;
      
        const img = document.createElement('img');  //crear una imagen.
        img.src = url;  //tindra un src que sera igual a la imatge que reb.

        document.body.append( img );    // fica al html.

        // console.log(data.data.images.original.url);
    })
    .catch( console.warn ); //no hace falta tener multiples catch, ese atrapa todos.