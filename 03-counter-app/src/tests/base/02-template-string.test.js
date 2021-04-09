import { getHello } from '../../base/02-template-string';


describe('02-template-string', () => {
    test('should method getHello return string', () => {
        const name = 'Carlos';
        
        const hello = getHello(name);

        expect( hello ).toBe( 'Hello ' + name );
    });

    // return Hello Carlos - if there is no argument
    test('should method getHello return Hello Carlos - if there is no argument', () => {
         
        const hello = getHello();

        expect( hello ).toBe( 'Hello Carlos' );
    }); 
})