
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , p2 ] = personajes; //printa el segon element del array, ja que em ficat la coma.

console.log( p2 );

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros ] = retornaArreglo(); //guarde el que retorna de la funcio a la const.
console.log(letras, numeros);

const theState = ( valor ) =>{
    return [valor, function setNombre(){ console.log('Hola Mundo')}];
}

const [nombre, setNombre] = theState('Goku');

console.log(nombre); 
setNombre(); //fa la funció i printa el de dins.