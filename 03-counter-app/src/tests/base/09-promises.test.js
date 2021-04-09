import { getHeroByIdAsync } from '../../base/09-promises';
import heroes from '../../data/heroes';

describe('Test with promises', () => {

    test('should return hero async', ( done ) => {
        const id = 1;
        getHeroByIdAsync( id )
            .then( hero => {
               expect( hero ).toBe( heroes[0] ); 
               done();
            });
    });

    test('should return error', ( done ) => {
        
        const id = 10;

        getHeroByIdAsync( id )
            .catch((err) => {
                expect( err ).toBe('hero not found');
                done();
            });
    });
    
    
});
