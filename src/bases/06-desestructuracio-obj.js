// Desestructuración 
// Asignación Desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}


const { edad, clave, nombre, } = persona; //extreu el que fica dins d'aquesta clau d'aquest objecte.

console.log( persona.nombre ); //ja no cal fer el persona.nombre, pots ficar nombre directe.
console.log( nombre );
console.log( edad );
console.log( clave );




function retornaPersona( persona ) {

   const { edad, clave, nombre, } = persona; // el mateix fet dins d'una funció.

    // console.log( edad, clave, nombre);

 };


 function retornaPersona1({nombre, edad, clave}) { //si fiques entre {} pots ficar les propietats del objecte que t'interessen, es diu desestructuracio amb argument.

    //  console.log(nombre);

    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat:14.1232,
            lng: -12.3232
        }
    }
  }

  const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona1(persona);  //fem la desestructuracio del que ens interesa treure del return, crida la funcio y guarda el que retorna.
                                                                            //dons del latlng, agafa els 2 de dins.
  console.log(nombreClave, anios);
  console.log(lat, lng);



 retornaPersona( persona );   //crida la funció.
