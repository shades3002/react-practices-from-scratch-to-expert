
// import and export

// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( heroes );

export const getHeroeById = (id) => {
    return heroes.find( hero => hero.id === id);
}

// console.log( getHeroeById(1) );

export const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner)
}

// console.log( getHeroesByOwner('DC') );
