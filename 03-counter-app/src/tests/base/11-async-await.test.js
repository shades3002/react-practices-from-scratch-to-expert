import { getImage } from '../../base/11-async-await';
;

describe('Test with async - await anf fetch', () => {

    test('should return img url', async () => {
        const url = await getImage();  

        expect( url.includes('https://') ).toBe( true );
    });  
    
});
