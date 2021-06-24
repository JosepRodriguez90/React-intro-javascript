//***** apunts ******
//let = variable
//const = constant, variable que no varia.
//*********

const nombre = 'Josep';
const apellido = 'Rodriguez';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;
//(Es el mateix, la diferencia es que no fa falta ficar un /n per baixar l’altra variable a una altra linea,
// nomes que baixis el ${ apellido }, ja en tens prou, es algo mes eficient per dir-ho d’una forma )



console.log( nombreCompleto );

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`);