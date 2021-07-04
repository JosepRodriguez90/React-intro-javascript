const activo = true;

/* 

let mensaje = '';

if(activo){
    mensaje='Activo';
}else{
    mensaje='Inactivo';
}

*/

const mensaje = ( activo ) ? 'Activo' : 'Inactivo';     //El mateix exemple que el de d'alt, (activo) el condicional, els ":" fan referencia al cas contrar, el else.

//o també es pot fer:

const mensajeSimple = activo && 'Activo';     //mes simplificat, el fara servir.

console.log(mensaje);

console.log(mensajeSimple);


