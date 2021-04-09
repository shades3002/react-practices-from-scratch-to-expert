
import heroes from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find( hero => hero.id === id);
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter(hero => hero.owner === owner)
}

