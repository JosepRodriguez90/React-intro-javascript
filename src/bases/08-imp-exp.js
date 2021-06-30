import { heroes } from '../data/heroes';

function getHeroeById(id) {
    return heroes.find((heroe) => heroe.id === id);  //el parèntesis del "héroe" és l'argument de la funció.
}

console.log( getHeroeById(2) );


//find no serveix, filter

function getHeroeByOwner(owner) {
    return heroes.filter((heroe) => heroe.owner === owner);  //aquí fem servir el filter, per filtrar per nom amb concret.
}

console.log( getHeroeByOwner('DC') );