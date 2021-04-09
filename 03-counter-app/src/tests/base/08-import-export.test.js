import { getHeroeById, getHeroesByOwner } from '../../base/08-import-export';
import heroes from '../../data/heroes';

describe('Test 08 import - export', () => {

    // getHeroeById
    test('should  getHeroeById - return hero by Id', () => {
        const id = 1;

        const heroTest = heroes.find( h => h.id === id);

        const heroe = getHeroeById( id );

        expect( heroTest ).toEqual( heroe );

        expect( heroTest ).toMatchObject(heroTest);

    });


    // getHeroeById return undefined
    test('should  getHeroeById - return undefined', () => {
        const id = 10;

        const heroTest = heroes.find( h => h.id === id);

        const heroe = getHeroeById( id );

        expect( heroTest ).toBe( undefined );

    });

    // getHeroesByOwner - test 1
    test('should  getHeroesByOwner - DC - return object', () => {
        const owner = 'DC';
        const heroDC = heroes.filter( h => h.owner === owner);
        const heroesTest = getHeroesByOwner( owner );
        expect( heroesTest ).toEqual( heroDC );
    });

    // getHeroesByOwner - test 2
    test('should  getHeroesByOwner - Marvel - return number', () => {
        const owner = 'Marvel';
        const heroMarvel = getHeroesByOwner( owner );
        expect( heroMarvel.length ).toBe( 2 );
    });
    

});