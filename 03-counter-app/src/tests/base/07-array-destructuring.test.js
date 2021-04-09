import { arrayReturn } from '../../base/07-array-destructuring';


describe('Test 07 array destructuring', () => {

    // arrayReturn 
    test('should arrayReturn - return and number', () => {
        const [ string, numbers ] = arrayReturn(); // ['ABC', 123]

        // expect( arrayReturnTest ).toEqual(['ABC', 123]);

        expect( string ).toBe( 'ABC' );
        expect( typeof string ).toBe( 'string' );

        expect( numbers ).toBe( 123 );
        expect( typeof numbers ).toBe( 'number' );

    });

});