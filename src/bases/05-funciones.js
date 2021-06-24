const getUsuarioActivo = ( nombre ) => 
    ({
        uid: 'ABC567',
        username: nombre
    });
//els parentesis aqui son importants ja que retorna amb objecto implicito.
//el que em fet aqui d'alt es igual al exemple seguent, nomes que a el tio que comenta el video ho fa servir amb flecha.
//estalvies mes codi.

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };


const usuarioActivo =getUsuarioActivo('Fernando');
console.log( usuarioActivo );

