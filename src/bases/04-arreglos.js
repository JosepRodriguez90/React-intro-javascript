const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5]; //fa un clon del arreglo i afegeixes el 5 al nou array, a diferent espai de memoria

const arreglo3 = arreglo2.map(function(numero) { //fa un nou arrelgo amb els mateixos valors que el arreglo2 però amb els valors*2.
    return numero * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 ); 
