import { getHeroeById } from './bases/08-imp-exp';


/* forma senzilla d'entendre com funciona el resolve

    const promesa = new Promise ( (resolve, reject) => {

        setTimeout( () => {
            cosnt p1 = getHeroeById(2);
            resolve( p1 );

        }, 2000 )

    });

    promesa.then( (heroe) => {
        console.log('heroe', heroe)
    })
*/


const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve,reject) => {

        setTimeout(() => {
            
            const p1 = getHeroeById(id);
 
            if(p1){
                resolve(p1) //resolve vol dir que la promesa s'ha cumplit.
            }else{
                reject('No se encuentrar el héroe');   //resolve vol dir que la promesa no s'ha pogut cumplit.
            }
            

        }, 2000)
    });
}

getHeroeByIdAsync(10)
    .then( heroe => console.log('Heroe',heroe))  //el resolve va notificara al then
    .catch( err => console.warn(err));  //si a donat un error i no s'ha complit, el finaly s'executara tant si com no.

    //tambe es pot fer: 

    /* getHeroeByIdAsync(1)
      .then( console.log )       agafa i amb el console treu directament el que te al then.
      .catch( console.warn );    agafa i amb el console treu directament el que te al catch
    */    