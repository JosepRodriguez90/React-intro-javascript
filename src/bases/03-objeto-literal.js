const persona = {
    nombre: 'Josep',
    apellido: 'Stark',
    edad: 31,
    direccion: {
        ciudad: "Palau d'Anglesola",
        codi_postal: 25243
        }
    };

    //he anidat un objecte dins d'un objecte per la direcció.

    const persona2 = { ...persona};
    persona2.nombre = 'Peter';
    //fas un clon de l'objecte persona, pero si no fiques els ... fa referencia al mateix espai de memoria i canviaren els 2
    //per això es fica els ..., per indicar que es un clon amb un nou espai de memoria.

    console.log( persona );
    console.log( persona2 )
