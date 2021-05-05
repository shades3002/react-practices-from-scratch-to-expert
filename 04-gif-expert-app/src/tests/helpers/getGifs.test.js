import { getGifs } from '../../helpers/getGifs';


describe('Test getGifs Fecth', () => {

    test('should get ten elements', async () => {
        
        const gifs = await getGifs( 'One Punch' );

        expect( gifs.length ).toBe( 10 );
    })

    test('should get zero elements', async () => {
        
        const gifs = await getGifs( '' );

        expect( gifs.length ).toBe( 0 );
    })
    
    
});
