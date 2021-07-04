const getImagen = async() => {      //async sustitueix a la promesa, amb un codi simple i senzill.


    try{

    const apiKey = '5gtVYcwzf0bfLJDArE6A85NXcpwKPYYS';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);   // el await el que fa es esperar a que es cumpleixi la promesa abans de fer la seguent linea de codi.
    const data = await resp.json();

        const { url } = data.data.images.original;
      
        const img = document.createElement('img'); 
        img.src = url;  

        document.body.append( img );  
        
        
    } catch (error) {
        console.log(error);
    }
}

getImagen();
