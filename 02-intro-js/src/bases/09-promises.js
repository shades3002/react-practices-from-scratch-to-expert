

import { getHeroeById } from './bases/08-import-export'

// promises


// const promise = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroeById(2);
//         console.log(hero);
//         //resolve(heroe);
//         reject('hero not found')
//     }, 2000);
// });

// promise.then( (hero) => {
//     console.log('hero', hero);
// })
// .catch( err => console.warn(err));


const getHeroByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById( id );
            if( hero ) {
                resolve(hero);
            } else {
                reject('hero not found') 
            }
        }, 2000);
    });
}

getHeroByIdAsync(4)
    //.then( hero => console.log('hero', hero) )
    //.catch( error => console.warn(error) );    
    .then( console.log )
    .catch( console.warn );